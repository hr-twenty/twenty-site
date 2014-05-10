<?php
	$name = $_POST['name'];
	$email= $_POST['email'];
	$message = $_POST['message'];
	$company = $_POST['company'];
 
	$subject = "Twenty Website - Form Inquiry";
	
	$headers = 'From: Twenty App <twentyapplication@gmail.com>' . "\r\n";  
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    
    $emailbody = "<p>You have recieved a new message from the enquiries form on your website.</p> 
                  <p><strong>Name: </strong> {$name} <br /><strong>Company: </strong> {$company} <br /><strong>Email Address: </strong> {$email} </p>
                  <p><strong>Message: </strong><br /><br />{$message} </p>";    
	
	
	
	if ($_POST['submit']) {
    	if ($name != '' && $email != '') {
    		if (mail ("rwholmes1@gmail.com", $subject, $emailbody, $headers)) { 
        		echo '<p>Thank you for your message!</p>'; 
		    }
		    else { 
        		echo '<p>Something went wrong, go back and try again!</p>'; 
	    	}
    	}
    	else {
        	echo '<p>You need to fill in all required fields!!</p>';
	    }
    }

?>