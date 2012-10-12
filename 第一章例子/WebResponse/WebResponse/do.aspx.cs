using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Data.OleDb;

namespace WebResponse
{
    public partial class _do : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string name=Request.Params["pname"].ToString();
            string pwd=Request.Params["pwd"].ToString();
            if (name == "basil" && pwd == "123456")
                Response.Write("欢迎您," + name);
            else
                Response.Write("用户名或密码不正确");
        }
    }
}
