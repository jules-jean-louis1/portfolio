<?php
include_once 'connect.php';

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['telephone']) && isset($_POST['message'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $telephone = $_POST['telephone'];
  $message = $_POST['message'];

  $sql = "INSERT INTO contact (name, email, telephone, message) VALUES ('$name', '$email', '$telephone', '$message')";
  $conn->exec($sql);
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->$error;
}
?>

<form action="#" method="post" id="contact_form">
  <div class="namec">
    <label for="namec"></label>
    <input type="text" placeholder="Nom" name="name" id="name_input" required>
  </div>
  <div class="email">
    <label for="email"></label>
    <input type="email" placeholder="E-mail" name="email" id="email_input" required>
  </div>
  <div class="telephone">
    <label for="name"></label>
    <input type="text" placeholder="Numéro" name="telephone" id="telephone_input" required>
  </div>
  <div class="message">
    <label for="message"></label>
    <textarea name="message" placeholder="Message" id="message_input" cols="30" rows="5" required></textarea>
  </div>
  <div class="submit">
    <input type="submit" value="Send Message" id="form_button" />
  </div>
</form>