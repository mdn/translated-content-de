---
title: Senden von Formularen über JavaScript
slug: Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Wenn ein Benutzer ein HTML-Formular übermittelt, beispielsweise durch Klicken auf den {{Glossary("Submit_button", "Senden-Button")}}, sendet der Browser eine [HTTP](/de/docs/Web/HTTP)-Anfrage, um die Daten im Formular zu übertragen. Anstelle dieses deklarativen Ansatzes verwenden Web-Apps manchmal JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), um Daten programmatisch an ein Endpunkt zu senden, der eine Formularübertragung erwartet. Dieser Artikel erklärt, warum dies ein wichtiger Anwendungsfall ist und wie man es umsetzt.

## Warum JavaScript zur Übermittlung von Formulardaten verwenden?

Die Standard-HTML-Formularübermittlung, wie in unserem Artikel über [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) beschrieben, lädt die URL, an die die Daten gesendet wurden, was bedeutet, dass das Browserfenster mit einem vollständigen Seitenladevorgang navigiert.

Viele Web-Apps, insbesondere {{Glossary("progressive_web_apps", "Progressive Web Apps")}} und {{Glossary("SPA", "Single-Page-Apps")}}, verwenden jedoch JavaScript-APIs, um Daten vom Server anzufordern und die relevanten Teile der Seite zu aktualisieren, wobei der Aufwand eines vollständigen Seitenladevorgangs vermieden wird.

Aus diesem Grund verwenden diese Web-Apps, wenn sie Formulardaten übermitteln möchten, HTML-Formulare nur, um Eingaben vom Benutzer zu sammeln, aber nicht für die Datenübermittlung. Wenn der Benutzer versucht, die Daten zu senden, übernimmt die Anwendung die Kontrolle und sendet die Daten über eine JavaScript-API wie [`fetch()`](/de/docs/Web/API/Window/fetch).

## Das Problem mit JavaScript-Formularübermittlung

Wenn das Server-Endpunkt, an den die Web-App die Formulardaten sendet, unter der Kontrolle des Web-App-Entwicklers steht, können sie die Formulardaten auf jede gewünschte Weise senden: zum Beispiel als JSON-Objekt.

Wenn der Server-Endpunkt jedoch eine Formularübermittlung erwartet, muss die Web-App die Daten auf eine bestimmte Weise kodieren. Beispielsweise, wenn die Daten nur aus Text bestehen, werden sie aus URL-kodierten Listen von Schlüssel/Wert-Paaren gebildet und mit einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` gesendet. Wenn das Formular Binärdaten enthält, müssen diese mit dem `multipart/form-data`-Content-Type gesendet werden.

Das [`FormData`](/de/docs/Web/API/FormData)-Interface übernimmt den Prozess der Kodierung von Daten auf diese Weise, und im Rest dieses Artikels geben wir eine kurze Einführung in `FormData`. Für weitere Details siehe unseren Leitfaden zur [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).

## Manuelles Erstellen eines `FormData`-Objekts

Sie können ein `FormData`-Objekt befüllen, indem Sie die [`append()`](/de/docs/Web/API/FormData/append)-Methode des Objekts für jedes hinzuzufügende Feld aufrufen und dabei den Feldnamen und den Wert übergeben. Der Wert kann ein String für Textfelder oder ein [`Blob`](/de/docs/Web/API/Blob) für Binärfelder, einschließlich [`File`](/de/docs/Web/API/File)-Objekten, sein.

Im folgenden Beispiel senden wir Daten als Formularübermittlung, wenn der Benutzer auf einen Button klickt:

```js
async function sendData(data) {
  // Construct a FormData instance
  const formData = new FormData();

  // Add a text field
  formData.append("name", "Pomegranate");

  // Add a file
  const selection = await window.showOpenFilePicker();
  if (selection.length > 0) {
    const file = await selection[0].getFile();
    formData.append("file", file);
  }

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

const send = document.querySelector("#send");
send.addEventListener("click", sendData);
```

1. Wir erstellen zunächst ein neues, leeres `FormData`-Objekt.

2. Als Nächstes rufen wir `append()` zweimal auf, um zwei Elemente zum `FormData`-Objekt hinzuzufügen: ein Textfeld und eine Datei.

3. Schließlich führen wir eine {{httpmethod("POST")}}-Anfrage mit der `fetch()`-API aus, wobei wir das `FormData`-Objekt als Anforderungskörper festlegen.

Beachten Sie, dass wir den {{httpheader("Content-Type")}}-Header nicht setzen müssen: Der korrekte Header wird automatisch gesetzt, wenn wir ein `FormData`-Objekt an `fetch()` übergeben.

## Verknüpfen eines `FormData`-Objekts mit einem `<form>`

Wenn die Daten, die Sie senden, tatsächlich aus einem {{htmlelement("form")}} stammen, können Sie die `FormData`-Instanz befüllen, indem Sie das Formular in den `FormData`-Konstruktor übergeben.

Angenommen, unser HTML deklariert ein `<form>`-Element:

```html
<form id="userinfo">
  <p>
    <label for="username">Enter your name:</label>
    <input type="text" id="username" name="username" value="Dominic" />
  </p>
  <p>
    <label for="avatar">Select an avatar</label>
    <input type="file" id="avatar" name="avatar" required />
  </p>
  <input type="submit" value="Submit" />
</form>
```

Das Formular enthält eine Texteingabe, eine Dateieingabe und einen Senden-Button.

Das JavaScript sieht wie folgt aus:

```js
const form = document.querySelector("#userinfo");

async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
```

Wir fügen einen Submit-Event-Handler für das Formularelement hinzu. Dieser ruft zunächst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um die integrierte Formularübermittlung des Browsers zu verhindern, damit wir übernehmen können. Dann rufen wir `sendData()` auf, das das Formularelement abruft und es in den `FormData`-Konstruktor übergibt.

Danach senden wir die `FormData`-Instanz als HTTP-`POST`-Anfrage unter Verwendung von `fetch()`.
