using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ECommerce.Models;

namespace ECommerce.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult LoginPage()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Authorise(User user)
        {
            using (DBModels db = new DBModels ())
            {
                var userDetail = db.Users.Where(x => x.Email == user.Email && x.Password == user.Password).FirstOrDefault();
                if (userDetail == null)
                {
                    user.LoginErrorMsg = "Invalid Email or Password";
                    return View("LoginPage", user);
                }
                else
                {
                    Session["userID"] = user.UserID;
                    Session["Email"] = user.Email;
                    return RedirectToAction("Index", "Home");
                }
            };
        }

        public ActionResult LogOut()
        {
            int userId = (int) Session["userID"];
            Session.Abandon();
            return RedirectToAction("Index", "Home");
        }

        public ActionResult AddorEdit(int id = 0)
        {
            User user = new User();
            return View();
        }
        [HttpPost]
        public ActionResult AddorEdit(User user)
        {
            using (DBModels db = new DBModels ())
            {
                if (db.Users.Any(x => x.Email == user.Email))
                {
                    ViewBag.DuplicateMessage = "User with this Email already exists";
                    return View("AddorEdit", user);
                }
                else
                {
                    db.Users.Add(user);
                    db.SaveChanges();
                }
            }
            ModelState.Clear();
            ViewBag.SuccessMessage = "Registration Successfull.";
            return View("AddorEdit", new User());
        }
    }
}