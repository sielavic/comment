function clickSubmit(news_id){
                        
                        $("#comment-form_"+news_id).ajaxSubmit({
                              type: "POST",
                              url: "/main/send_comment",
                              // data: {
                              //       message: $('#texarea-comment_'+news_id).val()
                              // },
                              success: function(data){
                                    var data = JSON.parse(data);
                                    if(data.status == "success") {

                                          $(".comment-form").clearForm();
                                          $(".comment-form").hide();


                                          var comment = $('<div class="comments-block author-info"  id="post_comment_'+data.result.id+'"> \n' +
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
                                                     ' </div> \n' +
                                                     ' <div class="col-lg-8 col-xs-12"> \n' +
                                                           ' <p>'+data.result.message+'</p> \n' +
                                                            '<a href="javascript:void(0);" class="pull-right btn_reply_comment" onclick="showNewsReply('+data.result.id+','+data.result.news_id+')" data-news-id="'+data.result.news_id+'" data-comment-id="'+data.result.id+'">Ответить</a> \n' +
                                                      '</div> \n' +
                                                '</div> \n' +


                                                 ' <form method="POST" action="/main/send_comment"  id="comment-form_'+data.result.id+'" class="comment-form validate-form" role="form"> \n' +
                                                 ' <input type="hidden" name="news_id" value="'+data.result.news_id+'">\n' +
                                                  ' <input type="hidden" name="user_id" value="'+data.result.user_id+'">\n' +
                                                  '  <fieldset>\n' +
                                                  ' <div class="input-row form-group padding-submit">\n' +
                                                  ' <textarea  id="texarea-comment_'+data.result.id+'" class="form-control input-field textarea textarea-comment"   cols="30" rows="10" name="message" placeholder="Комментарий *"></textarea>\n' +
                                                  ' <button class="fa fa-paper-plane-o comment-submit pull-right" onclick="clickSubmitLoad('+data.result.id+');return false;" type="submit"></button>\n' +
                                                  ' </div>\n' +
                                                  ' </fieldset>\n' +
                                                  ' </form> '


                                    );

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
                              // data: {
                              //       message: $('#texarea-comment_'+news_id).val()
                              // },
                              success: function(data){
                                    var data = JSON.parse(data);
                                    if(data.status == "success") {

                                          $(".comment-form").clearForm();
                                          $(".comment-form").hide();


                                          var comment = $('<div class="comments-block author-info"  id="post_comment_'+data.result.id+'"> \n' +
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
                                                  ' </div> \n' +
                                                  ' <div class="col-lg-8 col-xs-12"> \n' +
                                                  ' <p>'+data.result.message+'</p> \n' +
                                                  '<a href="javascript:void(0);" class="pull-right btn_reply_comment" onclick="showNewsReply('+data.result.id+','+data.result.news_id+')" data-news-id="'+data.result.news_id+'" data-comment-id="'+data.result.id+'">Ответить</a> \n' +
                                                  '</div> \n' +
                                                  '</div> \n' +


                                                  ' <form method="POST" action="/main/send_comment"  id="comment-form_'+data.result.id+'" class="comment-form validate-form" role="form"> \n' +
                                                  ' <input type="hidden" name="news_id" value="'+data.result.news_id+'">\n' +
                                                  ' <input type="hidden" name="user_id" value="'+data.result.user_id+'">\n' +
                                                  '  <fieldset>\n' +
                                                  ' <div class="input-row form-group padding-submit">\n' +
                                                  ' <textarea  id="texarea-comment_'+data.result.id+'" class="form-control input-field textarea textarea-comment"   cols="30" rows="10" name="message" placeholder="Комментарий *"></textarea>\n' +
                                                  ' <button class="fa fa-paper-plane-o comment-submit pull-right" onclick="clickSubmit('+data.result.id+');return false;" type="submit"></button>\n' +
                                                  ' </div>\n' +
                                                  ' </fieldset>\n' +
                                                  ' </form> '


                                          );

                                          $('#show_comments_'+data.result.news_id).append(comment);


                                          var textarea_load =  $(document).find('#texarea-comment_'+data.result.id);


                                          console.log(textarea_load.val());

                                          console.log(data);
                                    }
                              }
                        })
                  }
