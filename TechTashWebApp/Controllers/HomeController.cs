using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Mail;
using System.Net;

namespace TechTashWebApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Home()
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

    }
}