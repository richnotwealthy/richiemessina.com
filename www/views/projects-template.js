module.exports=function(dust){var tmpl=(function(dust){dust.register("projects-template",body_0);function body_0(chk,ctx){return chk.w("<div class=\"container\"><h3>").f(ctx.get(["title"], false),ctx,"h").w("</h3><p class=\"flow-text\">").f(ctx.get(["body"], false),ctx,"h").w("</p><div class=\"row\"><div class=\"col s12\">").s(ctx.get(["cards"], false),ctx,{"block":body_1},{}).w("</div></div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"card horizontal\">").nx(ctx.get(["right"], false),ctx,{"block":body_2},{}).w("<div class=\"card-stacked\"><div class=\"card-content\"><h5>").f(ctx.get(["title"], false),ctx,"h").w("</h5><p>").f(ctx.get(["description"], false),ctx,"h").w("</p></div><div class=\"card-action\">").s(ctx.get(["actions"], false),ctx,{"block":body_3},{}).w("</div></div>").x(ctx.get(["right"], false),ctx,{"block":body_4},{}).w("</div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<div class=\"card-image\"><img src=").f(ctx.get(["image"], false),ctx,"h").w("></div>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<a href=").f(ctx.get(["link"], false),ctx,"h").w(">").f(ctx.get(["text"], false),ctx,"h").w("</a>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<div class=\"card-image\"><img src=").f(ctx.get(["image"], false),ctx,"h").w("></div>");}body_4.__dustBody=!0;return body_0}(dust));var f=function load(ctx, cb) {
      var fn = cb ? 'render' : 'stream';
      return dust[fn](tmpl, ctx, cb);
    };f.template=tmpl;return f}