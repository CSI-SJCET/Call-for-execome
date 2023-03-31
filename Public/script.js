JotForm.newDefaultTheme = true;
	JotForm.extendsNewTheme = false;
	JotForm.singleProduct = false;
	JotForm.newPaymentUIForNewCreatedForms = false;
	JotForm.newPaymentUI = true;

   JotForm.setConditions([{"action":[{"field":"9","visibility":"Show","id":"action_0_1579704830003"}],"id":"1579704830003","index":"0","link":"Any","priority":"0","terms":[{"field":"8","operator":"equals","value":"Other"}],"type":"field"}]);	JotForm.submitError="jumpToFirstError";

	JotForm.init(function(){
	/*INIT-START*/
      JotForm.setPhoneMaskingValidator( 'input_5_full', '+91##########' );
      setTimeout(function() {
          $('input_6').hint('ex: email@yahoo.com');
       }, 20);

    $('input_26').rating({stars:'5',
    inputClassName:'form-textbox validate[required]',
    imagePath: 'https://cdn.jotfor.ms/images/stars_v2.png',
    cleanFirst:true, value:''});
$('input_26').setAttribute('role','radiogroup');
$('input_26').setAttribute('aria-labelledby','label_26');

    Array.from($('input_26').children).map(function(e, i){e.setAttribute('tabindex',0);
    if(i<5) {e.setAttribute('aria-label',(i+1)+' out of 5');}
    e.setAttribute('role','radio');
    e.setAttribute('aria-describedby', 'label_26');
    e.classList.add('form-star-rating-star', 'Stars');
    e.onkeypress = function(k){if(k.keyCode == 13 || k.keyCode == 32)e.click()}});

    $('input_27').rating({stars:'5',
    inputClassName:'form-textbox validate[required]',
    imagePath: 'https://cdn.jotfor.ms/images/stars_v2.png',
    cleanFirst:true, value:''});
$('input_27').setAttribute('role','radiogroup');
$('input_27').setAttribute('aria-labelledby','label_27');

    Array.from($('input_27').children).map(function(e, i){e.setAttribute('tabindex',0);
    if(i<5) {e.setAttribute('aria-label',(i+1)+' out of 5');}
    e.setAttribute('role','radio');
    e.setAttribute('aria-describedby', 'label_27');
    e.classList.add('form-star-rating-star', 'Stars');
    e.onkeypress = function(k){if(k.keyCode == 13 || k.keyCode == 32)e.click()}});
if (window.JotForm && JotForm.accessible) $('input_9').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_11').setAttribute('tabindex',0);
	/*INIT-END*/
	});

   JotForm.prepareCalculationsOnTheFly([null,{"name":"clickTo","qid":"1","text":"Students Details:","type":"control_head"},{"name":"submit","qid":"2","text":"Submit","type":"control_button"},{"name":"fullName3","qid":"3","text":"Full Name","type":"control_fullname"},null,{"name":"phone","qid":"5","text":"Phone","type":"control_phone"},{"name":"email6","qid":"6","subLabel":"example@example.com","text":"E-mail","type":"control_email"},null,{"name":"howDid8","qid":"8","text":"How did you hear about us?","type":"control_dropdown"},{"name":"pleaseSpecify","qid":"9","text":"Please Specify","type":"control_textbox"},null,{"name":"feedbackAbout11","qid":"11","text":"Any Queries or suggestion:","type":"control_textarea"},null,null,null,null,{"name":"divider","qid":"16","text":"Divider","type":"control_divider"},{"name":"image","qid":"17","text":"WhatsApp%20Image%202023-02-28%20at%208.55.49%20PM.640dbbc1b92078.81202331","type":"control_image"},{"name":"input18","qid":"18","text":"\nCSI SJCET Chapter\nComputer society of India SJCET Chapter\n\ncsi@sjcetpalai.ac.in\nwww.example.com\n\n","type":"control_text"},{"description":"","name":"year","qid":"19","subLabel":"","text":"Year","type":"control_dropdown"},{"description":"","name":"branch","qid":"20","subLabel":"","text":"Branch","type":"control_dropdown"},null,{"name":"divider22","qid":"22","text":"Divider","type":"control_divider"},null,null,{"description":"","name":"typeA","qid":"25","text":"Type a question","type":"control_radio"},{"description":"","name":"howWell","qid":"26","subLabel":"","text":"How well you know programming","type":"control_rating"},{"description":"","name":"howWell27","qid":"27","subLabel":"","text":"How well you know HTML,CSS,JS","type":"control_rating"}]);
   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,{"name":"clickTo","qid":"1","text":"Students Details:","type":"control_head"},{"name":"submit","qid":"2","text":"Submit","type":"control_button"},{"name":"fullName3","qid":"3","text":"Full Name","type":"control_fullname"},null,{"name":"phone","qid":"5","text":"Phone","type":"control_phone"},{"name":"email6","qid":"6","subLabel":"example@example.com","text":"E-mail","type":"control_email"},null,{"name":"howDid8","qid":"8","text":"How did you hear about us?","type":"control_dropdown"},{"name":"pleaseSpecify","qid":"9","text":"Please Specify","type":"control_textbox"},null,{"name":"feedbackAbout11","qid":"11","text":"Any Queries or suggestion:","type":"control_textarea"},null,null,null,null,{"name":"divider","qid":"16","text":"Divider","type":"control_divider"},{"name":"image","qid":"17","text":"WhatsApp%20Image%202023-02-28%20at%208.55.49%20PM.640dbbc1b92078.81202331","type":"control_image"},{"name":"input18","qid":"18","text":"\nCSI SJCET Chapter\nComputer society of India SJCET Chapter\n\ncsi@sjcetpalai.ac.in\nwww.example.com\n\n","type":"control_text"},{"description":"","name":"year","qid":"19","subLabel":"","text":"Year","type":"control_dropdown"},{"description":"","name":"branch","qid":"20","subLabel":"","text":"Branch","type":"control_dropdown"},null,{"name":"divider22","qid":"22","text":"Divider","type":"control_divider"},null,null,{"description":"","name":"typeA","qid":"25","text":"Type a question","type":"control_radio"},{"description":"","name":"howWell","qid":"26","subLabel":"","text":"How well you know programming","type":"control_rating"},{"description":"","name":"howWell27","qid":"27","subLabel":"","text":"How well you know HTML,CSS,JS","type":"control_rating"}]);}, 20); 
