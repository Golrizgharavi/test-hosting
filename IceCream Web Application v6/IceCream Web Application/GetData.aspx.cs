using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace IceCream_Web_Application
{
    public partial class GetData : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //email Subscription
            if (Request.Params["q"] != null && Request.Params["q"] == "1")
            {

                string email = Request.Params["e"].ToString();


                //do stuff



                string Json = "{\"s\":1}";
                Response.Clear();
                Response.ContentType = "application/json";
                Response.Write(Json);
                Response.End();

            }

            //Submit Review
            else if (Request.Params["q"] != null && Request.Params["q"] == "2")
            {

                if (Request.Params["review"] != null)

                {


                    JavaScriptSerializer serializer = new JavaScriptSerializer();
                    dynamic myObj = serializer.Deserialize<object>(Request.Params["review"].ToString());
                    string Name = myObj["Name"];
                    string Email = myObj["Email"];

                    string Json = "{\"s\":1}";
                    Response.Clear();
                    Response.ContentType = "application/json";
                    Response.Write(Json);
                    Response.End();

                }



            }
        }
    }
}