module.exports=function(dust){var tmpl=(function(dust){dust.register("about-template",body_0);function body_0(chk,ctx){return chk.w("<div class=\"container\"><h3>").f(ctx.get(["title"], false),ctx,"h").w("</h3><div class=\"row\"><div class=\"col s9\"><p class=\"flow-text\">").f(ctx.get(["body"], false),ctx,"h").w("</p></div><div class=\"col s3\"><img class=\"responsive-img circle\" src=").f(ctx.get(["me"], false),ctx,"h").w("></div></div><div class=\"row\">").s(ctx.get(["infos"], false),ctx,{"block":body_1},{}).w("</div></div><div class=\"container\"><h4>Skills &amp; Proficiency</h4><div class=\"row\">").s(ctx.get(["quals"], false),ctx,{"block":body_2},{}).w("</div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"col s4\"><div class=\"card-panel\"><div class=\"center\"><i class=\"material-icons large\">").f(ctx.get(["icon"], false),ctx,"h").w("</i></div><h5>").f(ctx.get(["label"], false),ctx,"h").w("</h5><p>").f(ctx.get(["text"], false),ctx,"h").w("</p></div></div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<div class=\"col s6\"><ul class=\"card-panel collection with-header no-padding\"><li class=\"collection-header\"><h5>").f(ctx.get(["header"], false),ctx,"h").w("</h5></li>").s(ctx.get(["items"], false),ctx,{"block":body_3},{}).w("</ul></div>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<li class=\"collection-item avatar\"><i class=\"material-icons circle red\">").f(ctx.get(["img"], false),ctx,"h").w("</i><p class=\"title\">").f(ctx.get(["name"], false),ctx,"h").w("</p>").s(ctx.get(["grade"], false),ctx,{"block":body_4},{}).w("</li>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<i class=\"material-icons\">grade</i>");}body_4.__dustBody=!0;return body_0}(dust));var f=function load(ctx, cb) {
      var fn = cb ? 'render' : 'stream';
      return dust[fn](tmpl, ctx, cb);
    };f.template=tmpl;return f}