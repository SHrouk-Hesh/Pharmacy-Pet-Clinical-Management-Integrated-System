using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace vetsite
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "contact_post",
                url: "contact_post",
                defaults: new { controller = "Home", action = "contact_post", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "error",
                url: "error",
                defaults: new { controller = "Home", action = "error", id = UrlParameter.Optional }
            );
            routes.MapRoute(
                name: "articles",
                url: "articles/{id}",
                defaults: new { controller = "Home", action = "articles", id = UrlParameter.Optional }
            );
            routes.MapRoute(
                name: "Page",
                url: "{id}",//{controller}/{action}/
                defaults: new { controller = "Home", action = "Page", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",//
                defaults: new { controller = "{controller}", action = "{action}", id = UrlParameter.Optional }
            );
        }
    }
}