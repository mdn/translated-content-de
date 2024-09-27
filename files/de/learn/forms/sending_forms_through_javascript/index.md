---
title: Senden von Formularen über JavaScript
slug: Learn/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: 4414bc297a05373570250fe1fb154eab197f29ca
---

{{LearnSidebar}}

Wenn ein Benutzer ein HTML-Formular absendet, zum Beispiel durch Klicken des [Absendebuttons](/de/docs/Glossary/Submit_button), macht der Browser eine [HTTP](/de/docs/Web/HTTP)-Anfrage, um die Daten im Formular zu senden. Anstatt diesem deklarativen Ansatz folgen jedoch einige Web-Apps, die JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden, um die Daten programmatisch an ein Ziel zu senden, das eine Formularübertragung erwartet. Dieser Artikel erklärt, warum dies ein wichtiger Anwendungsfall ist und wie es gemacht wird.

## Warum sollte JavaScript verwendet werden, um Formulardaten zu übermitteln?

Standardmäßige HTML-Formularübermittlungen, wie in unserem Artikel über das [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) beschrieben, laden die URL, an die die Daten gesendet wurden, was bedeutet, dass das Browserfenster mit einem vollständigen Seitenladen navigiert.

Viele Web-Apps, insbesondere [Progressive Web Apps](/de/docs/Glossary/progressive_web_apps) und [Single-Page Apps](/de/docs/Glossary/SPA), verwenden jedoch JavaScript-APIs, um Daten vom Server anzufordern und relevante Teile der Seite zu aktualisieren, wodurch der Aufwand eines vollständigen Seitenladens vermieden wird.

Aus diesem Grund verwenden diese Web-Apps, wenn sie Formulardaten senden möchten, HTML-Formulare nur, um Eingaben vom Benutzer zu sammeln, jedoch nicht für die Datenübertragung. Wenn der Benutzer versucht, die Daten zu senden, übernimmt die Anwendung die Kontrolle und sendet die Daten unter Verwendung einer JavaScript-API wie [`fetch()`](/de/docs/Web/API/Window/fetch).

## Das Problem mit der Formularübermittlung via JavaScript

Wenn das Server-Endpunkt, an das die Web-App die Formulardaten sendet, unter der Kontrolle des Web-App-Entwicklers steht, können sie die Formulardaten in beliebiger Weise senden, zum Beispiel als JSON-Objekt.

Wenn der Server-Endpunkt jedoch eine Formularübertragung erwartet, muss die Web-App die Daten auf eine bestimmte Weise kodieren. Wenn die Daten nur aus Text bestehen, werden sie als URL-kodierte Listen von Schlüssel/Wert-Paaren mit einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` gesendet. Wenn das Formular Binärdaten enthält, muss es mit dem `multipart/form-data` Content-Type gesendet werden.

Das [`FormData`](/de/docs/Web/API/FormData)-Interface kümmert sich um die Kodierung der Daten auf diese Weise, und im Rest dieses Artikels geben wir eine kurze Einführung in `FormData`. Für mehr Details siehe unseren Leitfaden zu [Using FormData objects](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).

## Manuelles Erstellen eines `FormData`-Objekts

Sie können ein `FormData`-Objekt füllen, indem Sie die [`append()`](/de/docs/Web/API/FormData/append)-Methode des Objekts für jedes Feld, das Sie hinzufügen möchten, aufrufen und den Namen und den Wert des Feldes übergeben. Der Wert kann eine Zeichenfolge für Textfelder oder ein [`Blob`](/de/docs/Web/API/Blob) für Binärfelder, einschließlich [`File`](/de/docs/Web/API/File)-Objekte, sein.

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

1. Wir erstellen zuerst ein neues, leeres `FormData`-Objekt.

2. Dann rufen wir zweimal `append()` auf, um zwei Elemente zum `FormData`-Objekt hinzuzufügen: ein Textfeld und eine Datei.

3. Schließlich machen wir eine {{httpmethod("POST")}}-Anfrage mit der `fetch()`-API, wobei das `FormData`-Objekt als Anfrageinhalt gesetzt wird.

Beachten Sie, dass wir den {{httpheader("Content-Type")}}-Header nicht setzen müssen: Der korrekte Header wird automatisch gesetzt, wenn wir ein `FormData`-Objekt in `fetch()` übergeben.

## Verknüpfung eines `FormData`-Objekts mit einem `<form>`

Wenn die Daten, die Sie übermitteln, wirklich aus einem {{htmlelement("form")}} stammen, können Sie die `FormData`-Instanz füllen, indem Sie das Formular in den `FormData`-Konstruktor übergeben.

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

Das Formular enthält ein Texteingabefeld, ein Dateieingabefeld und einen Absendebutton.

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

Wir fügen einen Submit-Ereignishandler für das Formularelement hinzu. Dieser ruft zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um die eingebaute Formularübermittlung des Browsers zu verhindern, damit wir die Kontrolle übernehmen können. Dann rufen wir `sendData()` auf, das das Formularelement abruft und in den `FormData`-Konstruktor übergibt.

Danach senden wir die `FormData`-Instanz als HTTP-`POST`-Anfrage mit `fetch()`.

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types)
- [Zusätzliche Formularelemente](/de/docs/Learn/Forms/Other_form_controls)
- [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes)
- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Validierung von Formulardaten](/de/docs/Learn/Forms/Form_validation)
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Fortgeschrittene Themen

- **Senden von Formularen über JavaScript**
- [Anleitung zum Erstellen benutzerdefinierter Formular-Widgets](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Fortgeschrittenes Styling für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- [Kompatibilitätstabelle für Eigenschaften von Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
