/*! caja-kissy  */
KISSY.add("openjs/gs/1.0/index",function(t){function n(n){var i={};i.addListener=function(t,n){i.addListener.Fncs[t]||(i.addListener.Fncs[t]=[]),i.addListener.Fncs[t].push(n)},i.addListener.Fncs=[],i.fireListener=function(t,n){i.fireListener.Fncs[t]&&i.fireListener.Fncs[t](n)},i.fireListener.Fncs=[],function(){o.on(window,"scroll",function(){var e={scrollTop:t.DOM.scrollTop(window)};n.markReadOnlyRecord(e);var o=n.tame(e);if(i.addListener.Fncs.windowScroll)for(var r=0;i.addListener.Fncs.windowScroll.length>r;r++)i.addListener.Fncs.windowScroll[r](o)})}(),function(){i.fireListener.Fncs.windowScroll=function(t){t.props=t.props||{};var n={};n.scrollTop=t.props.scrollTop,KISSY.Anim(window,n,t.duration,t.easing).run()}}(),function(){o.on(window,"resize",function(){var t={viewportHeight:e.viewportHeight(),viewportWidth:e.viewportWidth()};n.markReadOnlyRecord(t);var o=n.tame(t);if(i.addListener.Fncs.windowResize)for(var r=0;i.addListener.Fncs.windowResize.length>r;r++)i.addListener.Fncs.windowResize[r](o)})}(),function(){function t(t,n){var o=e.create("<iframe id=''"+r+"' name='"+r+"'></iframe>");e.css(o,"display","none");var i=e.create('<form action="'+t+'" target="'+r+'" method="post"  enctype="multipart/form-data"></form>');e.css(o,"display","none");var a=e.create('<input type="hidden" name="token" value="'+n+'"/>');return i.appendChild(a),{form:i,iframe:o}}var r="tempCajaIframe";o.delegate(document,"change","input.J_TCajaUploadImg",function(r){var a=r.target,s=t(e.attr(a,"data-url"),1);e.append(a,s.form),document.body.appendChild(s.iframe),document.body.appendChild(s.form),s.form.submit();var c=function(t){if(i.addListener.Fncs.cajaupload)for(var n=0;i.addListener.Fncs.cajaupload.length>n;n++)i.addListener.Fncs.cajaupload[n](t)};o.on(window,"cajaupload",function(t){t={content:t.content},n.markReadOnlyRecord(t);var i=n.tame(t);c(i),o.remove(window,"cajaupload"),e.remove(s.iframe),e.remove(s.form)})})}(),i=n.markReadOnlyRecord(i),n.markFunction(i.addListener),n.markFunction(i.fireListener);var r=n.tame(i);return function(){return{GS:r}}}var e=t.DOM,o=t.Event;return n});