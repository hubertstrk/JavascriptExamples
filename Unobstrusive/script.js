// In der Javascrtip Datei befindet sich nur Javascript, kein Html, kein CSS

// Diese Funktion macht "Unobstrusive Javascript" möglich. 
// Sobald die Seite vollständig geladen ist, hängt man sich an den Click Event Handler des Buttons.
// Sobald der User also auf den Button klickt wird eine Funktion aufgerufen, die dann die Eingabe validiert
window.onload = function () {
  document.querySelector('#submit').onclick = function () {
    validate()
  }

  // hier kann man weitere Event Handler registrieren oder sich anderes Zeug merken
  // document.getElementById('foo').hover = function () ...
}

// Die reslichen Funktionen sind nur dazu da, um die Funktionalität deiner Seite herzustellen. 
// Ab hier kann dann quasi stehen was will, kommt drauf an was man so alles machen will. 

// Diese Funktion validiert die Eingabe
// Sie geht durch alle Text Inputs in der <form> durch und checkt ob irgendwas nicht stimmt
// Da man alles zweimal machen muss, also für den Vornamen und den Nachnamen nochmal, habe ich 
// die Sachen in eigene Funktionen ausgelagert (check, displayError)
var validate = function () {
  if (check('firstName')) {
    displayError('Vorname')
  }
  if (check('lastName')) {
    displayError('Nachname')
  }
}

// Diese Funktion bekommt eine id und gibt true zurück wenn das Input Feld leer ist, 
// oder bzw. false wenn das Input Feld eben nicht leer ist
var check = function (id) {
  return document.querySelector(`#${id}`).value === ''
}

// Diese Funktion schreibt eine Nachricht als Alert auf den Bildschirm.
var displayError = function (fieldName) {
  alert(`Das Feld ${fieldName} muss ausgefüllt sein.`)
}


