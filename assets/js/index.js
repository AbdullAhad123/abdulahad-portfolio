$(".nav_dropdown").click(function(e){$(this).toggleClass("show"),$(this).find(".nav_dropdown_box").toggleClass("d-none"),$(this).siblings().removeClass("show"),$(this).siblings().find(".nav_dropdown_box").addClass("d-none"),$(this).siblings().find(".nav_dropdown_toggler").removeClass("toggle_dropdown_icon"),$(this).find(".nav_dropdown_toggler").toggleClass("toggle_dropdown_icon");let t=$(this).data("image");$(this).find(".dropdown_list_image").css("background-image","url('"+t+"')"),e.stopPropagation()}),$(document.body).click(function(e){$(e.target).closest(".nav_dropdown_box").length||($(".nav_dropdown_box").addClass("d-none"),$(".nav_dropdown").removeClass("show"),$(".nav_dropdown_toggler").removeClass("toggle_dropdown_icon"))}),$(".dropdown_list_item").mouseover(function(){var e=$(this).data("src");$(".dropdown_list_image").css("background-image","url('"+e+"')")}),$(window).on("scroll load",function(){let e=$(window).scrollTop();e>79?$(".main_navbar").slideUp(300):$(".main_navbar").slideDown(300)});var TxtType=function(e,t,s){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(s,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};function formSubmitAnimation(){$(".subscribe_btn").find("i.bx").toggleClass("bx-arrow-back bx-rotate-180 bx-loader-alt bx-spin"),setTimeout(()=>{$(".subscribe_btn").find("i.bx").toggleClass("bx-loader-alt bx-spin bx-arrow-back bx-rotate-180"),$(".subscribe_form_error").toggleClass("text-danger text-success").text("Thanks for subscribing us!"),setTimeout(()=>{$(".subscribe_form_error").toggleClass("text-success text-danger").text("")},3e3)},3200)}TxtType.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=this,i=200-100*Math.random();this.isDeleting&&(i/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout(function(){s.tick()},i)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var s=e[t].getAttribute("data-type"),i=e[t].getAttribute("data-period");s&&new TxtType(e[t],JSON.parse(s),i)}var r=document.createElement("style");r.type="text/css",r.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(r)},$("#submit_contact").click(function(e){e.preventDefault();let t=$("#full_name").val(),s=$("#email").val(),i=$("#message").val();""==t?($("#full_name").focus(),$(".name_error").text("Please enter a name")):$(".name_error").text(""),""==s?($("#email").focus(),$(".email_error").text("Please enter a email")):$(".email_error").text(""),""==i?($("#message").focus(),$(".message_error").text("Please enter a message")):$(".message_error").text(""),t&&s&&i&&($(this).find("i.bx").toggleClass("bx-paper-plane bx-loader-alt bx-spin"),setTimeout(()=>{$(this).find("i.bx").toggleClass("bx-loader-alt bx-spin bx-paper-plane"),$(".form_success_message").toggleClass("d-none d-flex")},2e3))}),$(".subscribe_btn").click(function(){let e=$(".subscribe_input").val();""==e?($(".subscribe_input").addClass("text-danger"),$(".subscribe_form_error").text("Please drop valid email here")):/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e)?($(".subscribe_input").removeClass("text-danger"),$(".subscribe_form_error").text(""),formSubmitAnimation()):($(".subscribe_input").addClass("text-danger"),$(".subscribe_form_error").text("Invalid email address"))}),$(".subscribe_input").keyup(function(e){let t=e.which||e.code,s=$(".subscribe_input").val();13==t&&$(".subscribe_btn").click(),""==s?($(".subscribe_input").addClass("text-danger"),$(".subscribe_form_error").text("Please drop valid email here")):/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(s)?($(".subscribe_input").removeClass("text-danger"),$(".subscribe_form_error").text("")):($(".subscribe_input").addClass("text-danger"),$(".subscribe_form_error").text("Invalid email address"))});

