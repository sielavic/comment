function clickSubmit(news_id){
                        $("#comment-form_"+news_id).ajaxSubmit({
                              type: "POST",
                              url: "/main/send_comment",
                              data: {
                                    message: $('#texarea-comment_'+news_id).html()
                              },
                              success: function(data){
                                    var data = JSON.parse(data);
                                    if(data.status == "success") {

                                          $(".comment-form").clearForm();
                                          $(".comment-form").hide(300);


                                          var comments_block = '<div class="comments-block author-info"  id="post_comment_'+data.result.id+'"> \n' +
                                                '<div class="row"> \n' +
                                                      '<div class="col-lg-1 col-xs-2 text-center">\n' +
                                                            '<a href="/personal/profile/'+data.result.user_id+'" class="img-avatar">\n' +
                                                                  '<img class="timeline-comment-ava" src="'+data.result.src+'">\n' +
                                                                      '<i class="online-avatar-mob"></i> \n' +
                                                           ' </a>\n' +
                                                        '</div>\n' +
                                                      '<div class="col-lg-3 col-xs-6">\n' +
                                                            '<p class="comment-name">'+ data.result.fio+'</p> \n' +
                                                            '<p class="comment-date" datetime="'+data.result.created+'">'+data.result.created+'</p> \n' +
                                                     ' </div>'
                                          if (data.result.user_id == <?=USER_COOKIE_ID?>){
                                                var message_block =  ' <div class="col-lg-8 col-xs-12" id="message-container"> \n' +
                                                        ' <p>'+data.result.message+'</p> \n' +
                                                        '<a href="javascript:void(0);" class="pull-right btn_reply_comment" onclick="showNewsReply('+data.result.id+')" data-news-id="'+data.result.news_id+'" data-comment-id="'+data.result.id+'">Ответить</a> \n' +
                                                        '<i class="fal fa-times delete-comment" onclick="deleteComment('+data.result.id+');return false;"></i>\n' +
                                                        '</div> \n' +
                                                        '</div>'
                                          }else{
                                                var message_block =  ' <div class="col-lg-8 col-xs-12" id="message-container"> \n' +
                                                        ' <p>'+data.result.message+'</p> \n' +
                                                        '<a href="javascript:void(0);" class="pull-right btn_reply_comment" onclick="showNewsReply('+data.result.id+')" data-news-id="'+data.result.news_id+'" data-comment-id="'+data.result.id+'">Ответить</a> \n' +
                                                        '</div> \n' +
                                                        '</div>'
                                          }



                                          var reply_form = '<div id="reply_form_'+data.result.id+'" style="display: none">\n' +
                                                        '<form action="/main/send_reply_comment" id="comment-reply_'+data.result.id+'" class="reply-comment-form validate-form " role="form" method="POST">\n' +
                                                  '<input type="hidden" name="news_id" value="'+data.result.news_id+'">\n' +
                                                  '<input type="hidden" name="parent_id" value="'+data.result.id+'">\n' +
                                                  '<input type="hidden" name="user_id" value="'+data.result.user_id+'">\n' +
                                                  '<fieldset>\n' +
                                                  '<div class="input-row form-group padding-submit padding-bottom" id="emoji_container_'+data.result.id+'">\n' +
                                                  '<div  id="reply-comment_'+data.result.id+'" class="form-control input-field textarea textarea-comment" contenteditable="true" cols="30" rows="10" name="message" ></div >\n' +
                                                  '<i title="Добавить смайлик" id="emoji-smile-reply_'+data.result.id+'" class="far fa-smile emoji-smile-comment"></i>\n' +
                                                  '<button class="fa fa-paper-plane-o reply-comment-submit pull-right" onclick="clickSubmitReply('+data.result.id+');return false;" type="submit"></button>\n' +
                                                  '</div>\n' +
                                                  '</fieldset>\n' +
                                                  '</form>\n' +
                                                  '</div>'



                                          var comment_form = ' <form method="POST" action="/main/send_comment"  id="comment-form_'+data.result.id+'" class="comment-form validate-form" role="form"> \n' +
                                                 ' <input type="hidden" name="news_id" value="'+data.result.news_id+'">\n' +
                                                  ' <input type="hidden" name="user_id" value="'+data.result.user_id+'">\n' +
                                                  '  <fieldset>\n' +
                                                  ' <div class="input-row form-group padding-submit" id="emoji_cont_'+data.result.id+'">\n' +
                                                  ' <div  id="texarea-comment_'+data.result.id+'" class="form-control input-field textarea textarea-comment"  contenteditable="true"  cols="30" rows="10" name="message" placeholder="Комментарий *"></div>\n' +
                                                  '<i title="Добавить смайлик" id="emoji-smile-comment_'+data.result.id+'" class="far fa-smile emoji-smile-comment"></i>\n' +
                                                  ' <button class="fa fa-paper-plane-o comment-submit pull-right" onclick="clickSubmitLoad('+data.result.id+');return false;" type="submit"></button>\n' +
                                                  ' </div>\n' +
                                                  ' </fieldset>\n' +
                                                  ' </form> '


                                          emojiComment.init('dev_dialog_message', data.result.id);
                                          console.log( data.result.id);


                                         var comment = comments_block + message_block + reply_form + comment_form;
                                          $('#show_comments_'+data.result.news_id).append(comment);

                                          console.log(data);
                                    }
                              }
                        })
                  }




                  function clickSubmitLoad(id){
                        $("#comment-form_"+id).ajaxSubmit({
                              type: "POST",
                              url: "/main/send_comment",
                              data: {
                                    message: $('#texarea-comment_'+id).html()
                              },
                              success: function(data){
                                    var data = JSON.parse(data);
                                    if(data.status == "success") {

                                          $(".comment-form").clearForm();
                                          $(".comment-form").hide(300);


                                          var comments_block = '<div class="comments-block author-info"  id="post_comment_'+data.result.id+'"> \n' +
                                                  '<div class="row"> \n' +
                                                  '<div class="col-lg-1 col-xs-2 text-center">\n' +
                                                  '<a href="/personal/profile/'+data.result.user_id+'" class="img-avatar">\n' +
                                                  '<img class="timeline-comment-ava" src="'+data.result.src+'">\n' +
                                                  '<i class="online-avatar-mob"></i> \n' +
                                                  ' </a>\n' +
                                                  '</div>\n' +
                                                  '<div class="col-lg-3 col-xs-6">\n' +
                                                  '<p class="comment-name">'+ data.result.fio+'</p> \n' +
                                                  '<p class="comment-date" datetime="'+data.result.created+'">'+data.result.created+'</p> \n' +
                                                  ' </div> '
                                          if (data.result.user_id == <?=USER_COOKIE_ID?>) {
                                                var message_block = ' <div class="col-lg-8 col-xs-12" id="message-container"> \n' +
                                                        ' <p>' + data.result.message + '</p> \n' +
                                                        '<a href="javascript:void(0);" class="pull-right btn_reply_comment" onclick="showNewsReply(' + data.result.id + ')" data-news-id="' + data.result.news_id + '" data-comment-id="' + data.result.id + '">Ответить</a> \n' +
                                                        '<i class="fal fa-times delete-comment" onclick="deleteComment('+data.result.id+');return false;"></i>\n' +
                                                        '</div> \n' +
                                                        '</div>'
                                          }else{
                                                var message_block = ' <div class="col-lg-8 col-xs-12" id="message-container"> \n' +
                                                        ' <p>' + data.result.message + '</p> \n' +
                                                        '<a href="javascript:void(0);" class="pull-right btn_reply_comment" onclick="showNewsReply(' + data.result.id + ')" data-news-id="' + data.result.news_id + '" data-comment-id="' + data.result.id + '">Ответить</a> \n' +
                                                        '</div> \n' +
                                                        '</div>'
                                          }

                                          var comment_form =   ' <form method="POST" action="/main/send_comment"  id="comment-form_'+data.result.id+'" class="comment-form validate-form" role="form"> \n' +
                                                  ' <input type="hidden" name="news_id" value="'+data.result.news_id+'">\n' +
                                                  ' <input type="hidden" name="user_id" value="'+data.result.user_id+'">\n' +
                                                  '  <fieldset>\n' +
                                                  ' <div class="input-row form-group padding-submit" id="emoji_cont_'+data.result.id+'">\n' +
                                                  ' <div  id="texarea-comment_'+data.result.id+'" class="form-control input-field textarea textarea-comment" contenteditable="true"  cols="30" rows="10" name="message" placeholder="Комментарий *"></div>\n' +
                                                  '<i title="Добавить смайлик" id="emoji-smile-comment_'+data.result.id+'"class="far fa-smile emoji-smile-comment"></i>\n' +
                                                  ' <button class="fa fa-paper-plane-o comment-submit pull-right" onclick="clickSubmitLoad('+data.result.id+');return false;" type="submit"></button>\n' +
                                                  ' </div>\n' +
                                                  ' </fieldset>\n' +
                                                  ' </form> '


                                          var comment = comments_block + message_block + comment_form;
                                          emojiComment.init('dev_dialog_message', data.result.id);
                                          $('#show_comments_'+data.result.news_id).append(comment);


                                          // var textarea_load =  $(document).find('#texarea-comment_'+data.result.id);
                                          //
                                          //
                                          // console.log(textarea_load.val());

                                          console.log(data);
                                    }
                              }
                        })
                  }

                  //Обработка ответов на комментарии
                  function clickSubmitReply(answer_id){
                        $("#comment-reply_"+answer_id).ajaxSubmit({
                              type: "POST",
                              url: "/main/send_reply_comment",
                              data: {
                                    message: $('#reply-comment_'+answer_id).html()
                              },
                              success: function(data){
                                    var data = JSON.parse(data);
                                    if(data.status == "success") {

                                          $(".reply-comment-form").clearForm();
                                          $('#reply-comment_'+answer_id).html('');
                                          $('#reply_form_'+ answer_id).hide(300);

                                          var comments_block =  '<div class="comments-block author-info reply-comment"  id="post_comment_'+data.result.id+'">\n' +
                                          '<div class="row">\n' +
                                          '<div class="col-lg-1 col-xs-2 text-center">\n' +
                                          '<a href="/personal/profile/'+data.result.user_id+'" class="img-avatar">\n' +
                                          '<img class="timeline-comment-ava" src="'+data.result.src+'">\n' +
                                          '<i class="online-avatar-mob"></i>\n' +
                                          '</a>\n' +
                                          '</div>\n' +
                                          '<div class="col-lg-3 col-xs-6">\n' +
                                          '<p class="comment-name">'+ data.result.fio+'</p>\n' +
                                          '<p class="comment-date" datetime="'+data.result.created+'">'+data.result.created+'</p>\n' +
                                          '</div>'


                                          if (data.result.user_id == <?=USER_COOKIE_ID?>) {
                                                var message_block = '<div class="col-lg-8 col-xs-12" id="message-container">\n' +
                                                        '<p>' + data.result.message + '</p>\n' +
                                                        '<a href="javascript:void(0);" class="pull-right btn_reply_comment"\n' +
                                                        'onclick="showNewsReply(' + data.result.id + ')"\n' +
                                                        'data-news-id="' + data.result.news_id + '"\n' +
                                                        'data-comment-id="' + data.result.id + '">Ответить</a>\n' +
                                                        '</div>\n' +
                                                        '</div>'
                                          }else{
                                                var message_block = '<div class="col-lg-8 col-xs-12" id="message-container">\n' +
                                                        '<p>' + data.result.message + '</p>\n' +
                                                        '<a href="javascript:void(0);" class="pull-right btn_reply_comment"\n' +
                                                        'onclick="showNewsReply(' + data.result.id + ')"\n' +
                                                        'data-news-id="' + data.result.news_id + '"\n' +
                                                        'data-comment-id="' + data.result.id + '">Ответить</a>\n' +
                                                        '<i class="fal fa-times delete-comment" onclick="deleteComment('+data.result.id+');return false;"></i>\n' +
                                                        '</div>\n' +
                                                        '</div>'
                                          }

                                          var reply_form = '<div id="reply_form_'+data.result.id+'" style="display: none">\n' +
                                          '<form action="/main/send_reply_comment"  id="comment-reply_'+data.result.id+'" class="reply-comment-form validate-form " role="form" method="POST">\n' +
                                          '<input type="hidden" name="news_id" value="'+data.result.news_id+'">\n' +
                                          '<input type="hidden" name="parent_id" value="'+data.result.id+'">\n' +
                                          '<input type="hidden" name="user_id" value="'+data.result.user_id+'">\n' +
                                          '<fieldset>\n' +
                                          '<div class="input-row form-group padding-submit padding-bottom" id="emoji_container_'+data.result.id+'">\n' +
                                          '<div id="reply-comment_'+data.result.id+'" class="form-control input-field textarea textarea-comment" contenteditable="true" cols="30" rows="10" name="message" placeholder="Комментарий *"></div>\n' +
                                          '<i title="Добавить смайлик" id="emoji-smile-reply_'+data.result.id+'" class="far fa-smile emoji-smile-comment"></i>\n' +
                                          '<button class="fa fa-paper-plane-o reply-comment-submit pull-right" onclick="clickSubmitReply('+data.result.id+');return false;" type="submit"></button>\n' +
                                          '</div>\n' +
                                          '</fieldset>\n' +
                                          '</form>\n' +
                                          '</div>'
                                          


                                          var reply_comment = comments_block + message_block + reply_form;
                                          emojiReply.init('dev_dialog_message', data.result.id);
                                          $('#post_comment_'+data.result.parent_id).append(reply_comment);



                                          console.log(data);
                                    }
                              }
                        })
                  }
