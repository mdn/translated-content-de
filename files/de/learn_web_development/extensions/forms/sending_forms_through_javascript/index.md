---
title: Senden von Formularen über JavaScript
short-title: Formularübermittlung mit JavaScript
slug: Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: f85d2e26b062decf7a2bb9179c3a93003f4067a9
---

Wenn ein Benutzer ein HTML-Formular übermittelt, beispielsweise durch Klicken auf die {{Glossary("Submit_button", "Absende-Schaltfläche")}}, sendet der Browser eine [HTTP](/de/docs/Web/HTTP)-Anfrage, um die Daten im Formular zu übermitteln. Statt dieser deklarativen Methode nutzen Webanwendungen jedoch manchmal JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), um Daten programmatisch an einen Endpunkt zu senden, der eine Formularübermittlung erwartet. Dieser Artikel erklärt, warum dies ein wichtiger Anwendungsfall ist und wie es gemacht wird.

## Warum JavaScript zur Übermittlung von Formulardaten verwenden?

Die Standard-HTML-Formularübermittlung, wie in unserem Artikel über das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) beschrieben, lädt die URL, an die die Daten gesendet wurden, was bedeutet, dass sich das Browserfenster mit einem vollständigen Seitenladen navigiert.

Jedoch nutzen viele Webanwendungen, insbesondere {{Glossary("progressive_web_apps", "Progressive Web Apps")}} und {{Glossary("SPA", "Single-Page-Apps")}}, JavaScript-APIs, um Daten vom Server anzufordern und die relevanten Teile der Seite zu aktualisieren, wodurch der Aufwand eines vollständigen Seitenladens vermieden wird.

Aus diesem Grund verwenden diese Webanwendungen HTML-Formulare nur zur Sammlung von Benutzereingaben und nicht zur Datenübermittlung. Wenn der Benutzer versucht, die Daten zu senden, übernimmt die Anwendung die Kontrolle und sendet die Daten mithilfe einer JavaScript-API wie [`fetch()`](/de/docs/Web/API/Window/fetch).

## Das Problem mit der JavaScript-Formularübermittlung

Wenn der Serverendpunkt, an den die Webanwendung die Formulardaten sendet, unter der Kontrolle des Webentwicklers steht, können sie die Formulardaten auf beliebige Weise senden, zum Beispiel als JSON-Objekt.

Wenn der Serverendpunkt jedoch eine Formularübermittlung erwartet, muss die Webanwendung die Daten auf eine bestimmte Weise kodieren. Beispielsweise werden, wenn die Daten nur textuell sind, URL-kodierte Listen von Schlüssel/Wert-Paaren erstellt und mit einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` gesendet. Wenn das Formular Binärdaten enthält, müssen diese mit dem Inhaltstyp `multipart/form-data` gesendet werden.

Das [`FormData`](/de/docs/Web/API/FormData)-Interface kümmert sich um die Kodierung der Daten auf diese Weise, und im restlichen Teil dieses Artikels geben wir eine kurze Einführung zu `FormData`. Weitere Einzelheiten finden Sie in unserem Leitfaden zu [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).

## Manuelles Erstellen eines `FormData`-Objekts

Sie können ein `FormData`-Objekt auffüllen, indem Sie die Methode [`append()`](/de/docs/Web/API/FormData/append) des Objekts für jedes Feld aufrufen, das Sie hinzufügen möchten. Dabei übergeben Sie den Namen und den Wert des Feldes. Der Wert kann ein String für Textfelder oder ein [`Blob`](/de/docs/Web/API/Blob) für Binärfelder, einschließlich [`File`](/de/docs/Web/API/File)-Objekten, sein.

Im folgenden Beispiel senden wir Daten als Formularübermittlung, wenn der Benutzer auf eine Schaltfläche klickt:

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

1. Zuerst konstruieren wir ein neues, leeres `FormData`-Objekt.

2. Als nächstes rufen wir `append()` zweimal auf, um zwei Elemente zum `FormData`-Objekt hinzuzufügen: ein Textfeld und eine Datei.

3. Schließlich machen wir eine {{httpmethod("POST")}}-Anfrage mit der `fetch()`-API und setzen das `FormData`-Objekt als Anforderungskörper fest.

Beachten Sie, dass wir den {{httpheader("Content-Type")}}-Header nicht setzen müssen: Der korrekte Header wird automatisch gesetzt, wenn wir ein `FormData`-Objekt in `fetch()` übergeben.

## Verknüpfung eines `FormData`-Objekts und eines `<form>`

Wenn die Daten, die Sie übermitteln, tatsächlich von einem {{htmlelement("form")}} stammen, können Sie die `FormData`-Instanz durch Übergabe des Formulars an den `FormData`-Konstruktor auffüllen.

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

Das Formular enthält ein Texteingabefeld, ein Dateieingabefeld und eine Absende-Schaltfläche.

Das JavaScript sieht folgendermaßen aus:

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

Wir fügen einen Übermittlungs-Event-Handler für das Formularelement hinzu. Dieser ruft zunächst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um die eingebaute Formularübermittlung des Browsers zu verhindern, sodass wir die Kontrolle übernehmen können. Dann rufen wir `sendData()` auf, das das Formularelement abruft und es dem `FormData`-Konstruktor übergibt.

Danach senden wir die `FormData`-Instanz als HTTP-`POST`-Anfrage, unter Verwendung von `fetch()`.
