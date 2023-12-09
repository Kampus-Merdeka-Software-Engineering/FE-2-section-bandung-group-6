function hideSelectedOption(selectedValue, dropdownId) {
  let dropdownOptions = document.getElementById(dropdownId).options;

  for (let i = 0; i < dropdownOptions.length; i++) {
    if (dropdownOptions[i].value === selectedValue) {
      dropdownOptions[i].style.display = "none";
    } else {
      dropdownOptions[i].style.display = "";
    }
  }
}

// Listener for "Asal" dropdown
document.getElementById("asal").addEventListener("change", function () {
  let selectedAsal = this.value;
  hideSelectedOption(selectedAsal, "tujuan");
});

// Listener for "Tujuan" dropdown
document.getElementById("tujuan").addEventListener("change", function () {
  let selectedTujuan = this.value;
  hideSelectedOption(selectedTujuan, "asal");
});

document
  .getElementById("tanggalBerangkat")
  .addEventListener("input", function () {
    let selectedDate = new Date(this.value);
    let currentDate = new Date();

    if (selectedDate < currentDate) {
      // alert("Tidak dapat berjalan di masa lalu.");
      this.value = ""; // Clear the input field if an invalid date is selected
      // add message to div with id "tanggalError"
      document.getElementById("tanggalError").innerHTML =
        "Tidak dapat berjalan di masa lalu.";
    }

    // remove the message
    if (selectedDate >= currentDate) {
      document.getElementById("tanggalError").innerHTML = "";
    }
  });
