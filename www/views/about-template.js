module.exports=function(dust){var tmpl=(function(dust){dust.register("about-template",body_0);function body_0(chk,ctx){return chk.w("<div class=\"container\"><h3>").f(ctx.get(["title"], false),ctx,"h").w("</h3><div class=\"row\"><div class=\"col s9\"><p class=\"flow-text\">").f(ctx.get(["body"], false),ctx,"h").w("</p></div><div class=\"col s3\"><img class=\"responsive-img circle\" src=").f(ctx.get(["me"], false),ctx,"h").w("></div></div><div class=\"card\"><div class=\"card-content\"><div class=\"row\">").s(ctx.get(["infos"], false),ctx,{"block":body_1},{}).w("</div></div></div></div><div class=\"container\"><h4>Experience</h4><div class=\"row\">").s(ctx.get(["jobs"], false),ctx,{"block":body_2},{}).w("</div></div><div class=\"container\"><h4>Skills &amp; Proficiency</h4><div class=\"row\">").s(ctx.get(["quals"], false),ctx,{"block":body_4},{}).w("</div></div><div class=\"container\"><h4>Education</h4><div class=\"row\"><div class=\"col s12\">").s(ctx.get(["schools"], false),ctx,{"block":body_8},{}).w("</div></div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"col s4\"><div class=\"center\"><i class=\"material-icons large particle-red-text\">").f(ctx.get(["icon"], false),ctx,"h").w("</i></div><h5>").f(ctx.get(["label"], false),ctx,"h").w("</h5><p>").f(ctx.get(["text"], false),ctx,"h").w("</p></div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<div class=\"col s12\"><ul class=\"card-panel collection with-header\"><li class=\"collection-header no-padding\"><div class=\"row valign-wrapper\"><div class=\"col s1\"><img class=\"responsive-img valign\" src=").f(ctx.get(["img"], false),ctx,"h").w("></div><div class=\"col s11\"><h5 class=\"valign\">").f(ctx.get(["title"], false),ctx,"h").w("</h5><h6>@ ").f(ctx.get(["company"], false),ctx,"h").w(", ").f(ctx.get(["dates"], false),ctx,"h").w("</h6></div></div></li>").s(ctx.get(["bullets"], false),ctx,{"block":body_3},{}).w("</ul></div>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<li class=\"collection-item no-padding\"><p>").f(ctx.getPath(true, []),ctx,"h").w("</p></li>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<div class=\"col s12 m6\"><ul class=\"card collection with-header\"><li class=\"collection-header\"><h5>").f(ctx.get(["header"], false),ctx,"h").w("</h5></li>").s(ctx.get(["items"], false),ctx,{"block":body_5},{}).w("</ul></div>");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<li class=\"collection-item avatar\"><img class=\"circle\" src=").f(ctx.get(["img"], false),ctx,"h").w("><p class=\"title\">").f(ctx.get(["name"], false),ctx,"h").w("</p><i class=\"material-icons particle-red-text tiny\">").s(ctx.getPath(false, ["grade","filled"]),ctx,{"block":body_6},{}).w("</i><i class=\"material-icons tiny\">").s(ctx.getPath(false, ["grade","empty"]),ctx,{"block":body_7},{}).w("</i></li>");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("lens");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w("lens");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w("<div class=\"card horizontal\"><div class=\"card-stacked\"><div class=\"card-content\"><h5>").f(ctx.get(["title"], false),ctx,"h").w("</h5><h5><small>").f(ctx.get(["dates"], false),ctx,"h").w("</small></h5><p>").f(ctx.get(["text"], false),ctx,"h").w("</p></div></div><div class=\"card-image\"><img src=").f(ctx.get(["img"], false),ctx,"h").w("></div></div>");}body_8.__dustBody=!0;return body_0}(dust));var f=function load(ctx, cb) {
      var fn = cb ? 'render' : 'stream';
      return dust[fn](tmpl, ctx, cb);
    };f.template=tmpl;return f}