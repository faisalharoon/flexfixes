using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Mail;
using System.Net;
using EF.Data;
using EF.Core;

namespace TechTashWebApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Home()
        {
            return View();
        }

        public ActionResult Rating()
        {
            return View();
        }

        public ActionResult ViewRating()
        {
            return View();
        }


        public ActionResult Detail()
        {
            return View();
        }

        public ActionResult Booking()
        {
            return View();
        }

        public ActionResult ContactUs()
        {
            return View();
        }
        public ActionResult AboutUs()
        {
            return View();
        }
        public ActionResult AirConditioner()
        {
            return View();
        }
        public ActionResult brands()
        {
            return View();
        }
        public ActionResult servicearea()
        {
            return View();
        }
        public ActionResult mission ()
        {
            return View();
        }
        public ActionResult vision()
        {
            return View();
        }
        public ActionResult refrigerator()
        {
            return View();
        }
        public ActionResult washer()
        {
            return View();
        }
        public ActionResult aircooler()
        {
            return View();
        }
        public ActionResult equipmentservice()
        {
            return View();
        }
        public ActionResult oven()
        {
            return View();
        }
        public ActionResult stove()
        {
            return View();
        }
        public ActionResult gym()
        {
            return View();
        }
        public ActionResult dishwasher()
        {
            return View();
        }

        public ActionResult ceomessage()
        {
            return View();
        }





        public ActionResult TreadMill()
        {
            return View();
        }
        public ActionResult Elliptical()
        {
            return View();
        }
        public ActionResult uprightbike()
        {
            return View();
        }
        public ActionResult relocationassembly()
        {
            return View();
        }


        public ActionResult why()
        {
            return View();
        }

        public ActionResult how()
        {
            return View();
        }

        public ActionResult workwithus()
        {
            return View();
        }

        public ActionResult aboutus()
        {
            return View();
        }



        [HttpPost]
        public string SendBookingEmail(string str)
        {
            return sendbookingemail();
        }

        [HttpPost]
        public string SendFeedback(string str)
        {
            return SaveFeedback();
        }

        [HttpPost]
        public string SendEmail(string str)
        {
            return godaddyemail(); 
        }

        private void SendYahooEmail(string To, string Message)
        {
            try
            {
                MailMessage oMail = new MailMessage(new MailAddress(To), new MailAddress("faisalharoon_4@yahoo.com"));
                SmtpClient oSmtp = new SmtpClient();
                oSmtp.Host = "smtp.mail.yahoo.com";
                oSmtp.Credentials = new NetworkCredential("faisalharoon_4@yahoo.com", "Quranpak@1");
                oSmtp.EnableSsl = false;
                oSmtp.Port = 587;
                oSmtp.Send(oMail);

            }
            catch (Exception ep)
            {

            }
        }

        private void SendTEchHatEmail()
        {
            try
            {
                var Name=Convert.ToString(Request.Form["avia_1_1"]);
                var ToEmail=Convert.ToString(Request.Form["avia_2_1"]);
                var location = Convert.ToString(Request.Form["txtlocation"]);
                var selecteddate = Convert.ToString(Request.Form["avia_4_1"]);
                var subject=Convert.ToString(Request.Form["avia_5_1"]);
                var Message = Convert.ToString(Request.Form["avia_6_1"]);
                var txtmobileno = Convert.ToString(Request.Form["txtmobileno"]);


                Message = string.Format("{0}<br /><br/>{4}<br /><br />{1}<br /><br />{2}<br /><br />{3}<br /><br />{5}", Name, ToEmail, subject, Message,txtmobileno,location);

                //if (ToEmail != "")
                if (1 ==1)
                {
                    MailMessage oMail = new MailMessage(new MailAddress("info@flexfixes.com"), new MailAddress("faisalharoon_4@yahoo.com"));
                    SmtpClient oSmtp = new SmtpClient();
                    oSmtp.Host = "smtpout.asia.secureserver.net";
                    oSmtp.Credentials = new NetworkCredential("info@flexfixes.com", "usman83213");
                    oSmtp.EnableSsl = false;
                    oSmtp.Port = 465;

                    oMail.Body = Message;
                    oMail.Subject = "Query For FlexFix Maintenance";
                    oMail.IsBodyHtml = true;

                    oSmtp.Send(oMail);
                }

            }

            catch (Exception ep)
            {

            }
        }



        public string godaddyemail()
        {

            var Name = Convert.ToString(Request.Form["avia_1_1"]);
            var ToEmail = Convert.ToString(Request.Form["avia_2_1"]);
            var workarea = Convert.ToString(Request.Form["avia_3_1"]);
            var selecteddate = Convert.ToString(Request.Form["avia_4_1"]);
            var subject = Convert.ToString(Request.Form["avia_5_1"]);
            var Message = Convert.ToString(Request.Form["avia_6_1"]);
            var txtmobileno = Convert.ToString(Request.Form["txtmobileno"]);
            var location = Convert.ToString(Request.Form["txtlocation"]);


            Message = string.Format("<b>Name:</b> {0}<br /><br /><b>Email:</b> {1}<br /><br /><b>Subject:</b> {2}<br /><br /><b>Selected Date:</b>{4}<br/><br/><b>Message:</b> {3}<br/><br/><b>Mobile:</b> {5}<br/><br/><b>Location:</b> {6}", Name, ToEmail, subject, Message,selecteddate,txtmobileno,location);

            MailMessage message = new MailMessage();
            SmtpClient smtpClient = new SmtpClient();
            string msg = string.Empty;
            try
            {
                MailAddress fromAddress = new MailAddress("info@flexfixes.com");
                message.From = fromAddress;
                message.To.Add("info@flexfixes.com");
                message.Subject = "Flex Fixes Query Email from Website";
                message.IsBodyHtml = true;
                message.Body = Message;
                smtpClient.Host = "relay-hosting.secureserver.net";   //-- Donot change.
                smtpClient.Port = 25; //--- Donot change
                smtpClient.EnableSsl = false;//--- Donot change
                smtpClient.UseDefaultCredentials = true;
                smtpClient.Credentials = new System.Net.NetworkCredential("info@flexfixes.com", "usman83213");

                smtpClient.Send(message);
                msg = "1";
                //lblConfirmationMessage.Text = "Your email successfully sent.";
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;
        }



        public string SaveFeedback()
        {

            var Name = Convert.ToString(Request.Form["avia_1_1"]);
            var ToEmail = Convert.ToString(Request.Form["avia_2_1"]);
            var Message = Convert.ToString(Request.Form["avia_6_1"]);
            var txtmobileno = Convert.ToString(Request.Form["txtmobileno"]);

            var rating = Convert.ToString(Request.Form["rating"]);
            string msg = string.Empty;

            if (string.IsNullOrEmpty(rating))
            {
                msg = "Please select Rating.";
                return msg;
            }

            if (string.IsNullOrEmpty(Name))
            {
                msg = "Please provide name.";
                return msg;
            }

            if (string.IsNullOrEmpty(ToEmail))
            {
                msg = "Please porvide email.";
                return msg;
            }

            if (string.IsNullOrEmpty(txtmobileno))
            {
                msg = "Please provide mobile no.";
                return msg;
            }


            //Message = string.Format("<b>Name:</b> {0}<br /><br />", Name);
            //Message += string.Format("<b>Email:</b> {0}<br /><br />", ToEmail);
            //Message += string.Format("<b>Mobile:</b> {0}<br /><br />",  txtmobileno);
            //Message += string.Format("<b>Message:</b> {0}<br /><br />", Message);
            //Message += string.Format("<b>Rating:</b> {0}<br /><br />", rating);


            //MailMessage message = new MailMessage();
            //SmtpClient smtpClient = new SmtpClient();

            //try
            //{
            //    MailAddress fromAddress = new MailAddress("info@flexfixes.com");
            //    message.From = fromAddress;
            //    message.To.Add("info@flexfixes.com");
            //    message.Subject = "Flex Fixes Feedback from Website";
            //    message.IsBodyHtml = true;
            //    message.Body = Message;
            //    smtpClient.Host = "relay-hosting.secureserver.net";   //-- Donot change.
            //    smtpClient.Port = 25; //--- Donot change
            //    smtpClient.EnableSsl = false;//--- Donot change
            //    smtpClient.UseDefaultCredentials = true;
            //    smtpClient.Credentials = new System.Net.NetworkCredential("info@flexfixes.com", "usman83213");

            //    smtpClient.Send(message);
            //    msg = "1";
            //    //lblConfirmationMessage.Text = "Your email successfully sent.";
            //}
            //catch (Exception ex)
            //{
            //    msg = ex.Message;
            //}


            try
            {
                using (EFDbContext context = new EFDbContext())
                {
                    tblFeedback f = new tblFeedback();
                    f.Message = Message;
                    f.Name = Name;
                    f.Email = ToEmail;
                    f.MobileNo = txtmobileno;
                    f.Rating = rating;
                    f.CreationDate = DateTime.Now;
                    //context.Entry(f).State = System.Data.EntityState.Added;
                    context.Feedbacks.Add(f);
                    context.SaveChanges();

                    msg = "1";
                }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }



            return msg;
        }



        public string sendbookingemail()
        {
            var Message = "";

            var txtName = Convert.ToString(Request.Form["txtname"]);
            var txtmobile = Convert.ToString(Request.Form["txtmobile"]);
            var txtemail = Convert.ToString(Request.Form["txtemail"]);
            var txttime= Convert.ToString(Request.Form["txttime"]);
            var txtdate = Convert.ToString(Request.Form["txtdate"]);
            var txtlocation = Convert.ToString(Request.Form["txtlocation"]);
           
            var txtcomplaints = Convert.ToString(Request.Form["txtcomplaints"]);



            var washingmachine = Convert.ToString(Request.Form["washingmachine"]);
            var dryer = Convert.ToString(Request.Form["dryer"]);
            var dishwasher = Convert.ToString(Request.Form["dishwasher"]);
            var fridge = Convert.ToString(Request.Form["fridge"]);
            var stove = Convert.ToString(Request.Form["stove"]);
            var oven = Convert.ToString(Request.Form["oven"]);
            var treadmill= Convert.ToString(Request.Form["treadmill"]);
            var elliptical = Convert.ToString(Request.Form["elliptical"]);
            var exercisebik = Convert.ToString(Request.Form["exercisebike"]);
            var multigym = Convert.ToString(Request.Form["multigym"]);
            var rower = Convert.ToString(Request.Form["rower"]);
            var equipment = Convert.ToString(Request.Form["equipment"]);

            var selectedequipment = "";
            if(Convert.ToString(washingmachine)=="on") selectedequipment = string.Format("<b>{0}</b>,", "Washing Machine");
            if (Convert.ToString(dryer) == "on")         selectedequipment += string.Format("<b>{0}</b>,", "Dryer");
            if (Convert.ToString(dishwasher) == "on")
                selectedequipment += string.Format("<b>{0}</b>,", "Dish Washer");
            if (Convert.ToString(fridge) == "on")
                selectedequipment += string.Format("<b>{0}</b>,", "Fridge");
            if (Convert.ToString(stove) == "on")
                selectedequipment += string.Format("<b>{0}</b>,", "Stove");
            if (Convert.ToString(oven) == "on")
                selectedequipment += string.Format("<b>{0}</b>,", "Oven");
            if (Convert.ToString(treadmill) == "on")
                selectedequipment += string.Format("<b>{0}</b>,", "Tread Mill");
            if (Convert.ToString(elliptical) == "on")
                selectedequipment += string.Format("<b>{0}</b>,", "Elliptical");
            if (Convert.ToString(exercisebik) == "on")
                selectedequipment += string.Format("<b>{0}</b>,", "Exercise Bike");
            if (Convert.ToString(multigym) == "on")
                selectedequipment += string.Format("<b>{0}</b>,", "MultiGym");
            if (Convert.ToString(rower) == "on")
                selectedequipment += string.Format("<b>{0}</b>,", "Rower");
            if (Convert.ToString(equipment) == "on")
                selectedequipment += string.Format("<b>{0}</b>,", "Equipment");


            Message = string.Format("<b>Name:</b> {0}<br /><br />",txtName);
            Message += string.Format("<b>Mobile:</b> {0}<br /><br />",txtmobile);
            Message += string.Format("<b>Email:</b> {0}<br /><br />",txtemail);
            Message += string.Format("<b>Time:</b> {0}<br /><br />",txttime);
            Message += string.Format("<b>Date:</b> {0}<br /><br />",txtdate);
            Message += string.Format("<b>Location:</b> {0}<br /><br />",txtlocation);
            Message += string.Format("<b>Mobile No:</b> {0}<br /><br />",txtmobile);
            Message += string.Format("<b>Complaints:</b> {0}<br /><br />",txtcomplaints);
            Message += string.Format("<b>Selected Items:</b> {0}<br /><br />", selectedequipment);

            MailMessage message = new MailMessage();
            SmtpClient smtpClient = new SmtpClient();
            string msg = string.Empty;
            try
            {
                MailAddress fromAddress = new MailAddress("info@flexfixes.com");
                message.From = fromAddress;
                message.To.Add("info@flexfixes.com");
                message.Subject = "Flex Fixes Booking Email from Website";
                message.IsBodyHtml = true;
                message.Body = Message;
                smtpClient.Host = "relay-hosting.secureserver.net";   //-- Donot change.
                smtpClient.Port = 25; //--- Donot change
                smtpClient.EnableSsl = false;//--- Donot change
                smtpClient.UseDefaultCredentials = true;
                smtpClient.Credentials = new System.Net.NetworkCredential("info@flexfixes.com", "usman83213");

                smtpClient.Send(message);
                msg = "1";
                //lblConfirmationMessage.Text = "Your email successfully sent.";
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;
        }

    }
}