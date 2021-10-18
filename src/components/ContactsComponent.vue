<!-- Get object as a props and displays it -->
<template>


<div style="display: flex; flex-direction: row;">
  <div style="flex: 1;">
    <h3>Kontakti </h3>

  <p>Adrese: Lubānas iela, 117A, Riga, LV-1021 </p>
  <p>Tālrunis: 67000000 </p>
  <p>E-pasts: example@inbox.lv </p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.3065275437459!2d24.200087460833426!3d56.93204252008293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecdfc134b4b05%3A0x79513f2530eb189c!2zdC9jIFNhaGFyYSwgTHVixIFuYXMgaWVsYSAxMTdBLCBMYXRnYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDgy!5e0!3m2!1slv!2slv!4v1634321799256!5m2!1slv!2slv" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  
    <h3>Darba laiks</h3>

    <p>Pirmdiena 08:00 - 17:00 </p>
    <p>Otrdiena 08:00 - 17:00 </p>
     <p>Trešdiena 08:00 - 17:00 </p>
     <p>Ceturtdiena 08:00 - 17:00 </p>
     <p>Piektdiena 08:00 - 17:00 </p>
     <p>Sestdiena 08:00 - 17:00 </p>
     <p>Svētdiena 09:00 - 15:00 </p>
  
  </div>



  <div style="flex: 1;">
    <h3>Contact Form</h3>
    <div class="container">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</div>



</template>
<script>
export default { 
  props: {
  },
}
</script>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>