---
title: Übermittlung von Formularen mit JavaScript
slug: Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}

Wenn ein Benutzer ein HTML-Formular absendet, zum Beispiel durch Klicken auf den {{Glossary("Submit_button", "Submit-Button")}}, sendet der Browser eine [HTTP](/de/docs/Web/HTTP) Anfrage, um die Daten im Formular zu übertragen. Anstelle dieses deklarativen Ansatzes verwenden Webanwendungen manchmal JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), um Daten programmgesteuert an einen Endpunkt zu senden, der eine Formularübertragung erwartet. Dieser Artikel erklärt, warum dies ein wichtiger Anwendungsfall ist und wie es gemacht wird.

## Warum JavaScript zur Übermittlung von Formulardaten verwenden?

Die standardmäßige HTML-Formularübermittlung, wie in unserem Artikel über das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) beschrieben, lädt die URL, an die die Daten gesendet wurden, was bedeutet, dass das Browserfenster mit einem vollständigen Seitenaufruf navigiert.

Viele Webanwendungen, insbesondere {{Glossary("progressive_web_apps", "progressive Web-Apps")}} und {{Glossary("SPA", "Single-Page-Anwendungen")}}, verwenden jedoch JavaScript-APIs, um Daten vom Server anzufordern und relevante Teile der Seite zu aktualisieren, wodurch der Overhead eines vollständigen Seitenaufrufs vermieden wird.

Aus diesem Grund verwenden diese Webanwendungen HTML-Formulare nur zur Dateneingabe durch den Benutzer, jedoch nicht zur Datenübermittlung. Wenn der Benutzer versucht, die Daten zu senden, übernimmt die Anwendung die Kontrolle und sendet die Daten mithilfe einer JavaScript-API wie [`fetch()`](/de/docs/Web/API/Window/fetch).

## Das Problem mit der JavaScript-Formularübermittlung

Wenn der Serverendpunkt, an den die Webanwendung die Formulardaten sendet, unter der Kontrolle des Webanwendungsentwicklers steht, können sie die Formulardaten nach Belieben senden: zum Beispiel als JSON-Objekt.

Wenn der Serverendpunkt jedoch eine Formularübermittlung erwartet, muss die Webanwendung die Daten auf eine bestimmte Weise codieren. Zum Beispiel, wenn die Daten nur textuell sind, werden sie als URL-kodierte Listen von Schlüssel/Wert-Paaren erstellt und mit einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` gesendet. Wenn das Formular Binärdaten enthält, müssen diese mit dem `multipart/form-data` Inhaltstyp gesendet werden.

Das [`FormData`](/de/docs/Web/API/FormData)-Interface kümmert sich um den Prozess der Codierung von Daten auf diese Weise, und im Rest dieses Artikels geben wir eine kurze Einführung in `FormData`. Für weitere Details siehe unseren Leitfaden zur [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).

## Manuelles Erstellen eines `FormData`-Objekts

Sie können ein `FormData`-Objekt befüllen, indem Sie die [`append()`](/de/docs/Web/API/FormData/append)-Methode des Objekts für jedes Feld aufrufen, das Sie hinzufügen möchten, und den Namen und Wert des Feldes übergeben. Der Wert kann ein Zeichenfolgenwert für Textfelder oder ein [`Blob`](/de/docs/Web/API/Blob) für Binärfelder, einschließlich [`File`](/de/docs/Web/API/File)-Objekten, sein.

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

1. Wir erstellen zunächst ein neues, leeres `FormData`-Objekt.

2. Als nächstes rufen wir `append()` zweimal auf, um zwei Elemente zum `FormData`-Objekt hinzuzufügen: ein Textfeld und eine Datei.

3. Schließlich erstellen wir eine {{httpmethod("POST")}}-Anfrage unter Verwendung der `fetch()`-API und setzen das `FormData`-Objekt als Anfrageinhalt.

Beachten Sie, dass wir den {{httpheader("Content-Type")}}-Header nicht einstellen müssen: Der korrekte Header wird automatisch festgelegt, wenn wir ein `FormData`-Objekt in `fetch()` übergeben.

## Verknüpfung eines `FormData`-Objekts und eines `<form>`

Wenn die Daten, die Sie übermitteln, wirklich von einem {{htmlelement("form")}} stammen, können Sie die `FormData`-Instanz füllen, indem Sie das Formular in den `FormData`-Konstruktor übergeben.

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

Das Formular enthält ein Texteingabefeld, ein Dateieingabefeld und einen Absenden-Button.

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

Wir fügen einen Absendungs-Ereignishandler für das Formularelement hinzu. Dieser ruft zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um die eingebaute Formularübermittlung des Browsers zu verhindern, damit wir übernehmen können. Dann rufen wir `sendData()` auf, das das Formularelement abruft und es in den `FormData`-Konstruktor übergibt.

Danach senden wir die `FormData`-Instanz als HTTP-`POST`-Anfrage unter Verwendung von `fetch()`.
