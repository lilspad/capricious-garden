<style>
    .php {
        font: 1rem 'Raleway', sans-serif;
        width: 100%;
        text-align: center;
        margin-top: 50px;
    }

    .php h2 {
        font-weight: 400;
    }
</style>
<?php
if (isset($_POST['email'])) {

    $email_to = "lilypaczesniak@outlook.com";
    $email_from = $_POST['email'];
    $email_subject = "Touch from Form";

    function problem($error)
    {
        echo '<div class="php"><h2>Uh-oh! Looks like something went wrong:</h2> <br><br>';
        echo '' . $error . "<br><br>";
        echo "Please fix the above and try again.</div><br><br>";
        die();
    }

    // check expected data exists
    if (
        !isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['message'])
    ) {
        problem('Fill in all the fields.');
    }

    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $subject = $_POST['subject'];
    $message = $_POST['message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'Email address does not seem valid.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'Name does not seem valid.<br>';
    }

    if (!preg_match($string_exp, $subject)) {
        $error_message .= 'Subject does not seem valid.<br>';
    }

    if (strlen($message) < 5) {
        $error_message .= 'Message should not be less than 5 characters<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details following:";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Subject: " . clean_string($subject) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email_from . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    if (@mail($email_to, $email_subject, $email_message, $headers)) {
        echo @mail($email_to, $email_subject, $email_message, $headers);
    ?>

        <div class="php"><h2>Thanks <?php echo $name ?>!</h2><p>Your form has been submitted :)</p></div>

<?php
    } else {
        ?>

        <div class="php"><p>Something went wrong.</p></div>
<?php
    }
}
?>