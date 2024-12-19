---
title: Senden von Formularen über JavaScript
slug: Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Wenn ein Nutzer ein HTML-Formular absendet, zum Beispiel durch Klicken auf den {{Glossary("Submit_button", "Senden-Button")}}, sendet der Browser eine [HTTP](/de/docs/Web/HTTP)-Anfrage, um die Daten im Formular zu übermitteln. Anstelle dieses deklarativen Ansatzes verwenden Web-Apps manchmal JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), um Daten programmgesteuert an einen Endpunkt zu senden, der eine Formularübermittlung erwartet. Dieser Artikel erklärt, warum dies ein wichtiger Anwendungsfall ist und wie es funktioniert.

## Warum Formulardaten mit JavaScript übermitteln?

Die Standard-HTML-Formularübermittlung, wie in unserem Artikel über das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) beschrieben, lädt die URL, an die die Daten gesendet wurden, was bedeutet, dass das Browserfenster eine vollständige Seitennavigation durchführt.

Viele Web-Apps, insbesondere {{Glossary("progressive_web_apps", "progressive Web-Apps")}} und {{Glossary("SPA", "Single-Page-Apps")}}, verwenden jedoch JavaScript-APIs, um Daten vom Server anzufordern und die relevanten Teile der Seite zu aktualisieren, wodurch der Aufwand eines vollständigen Seitenladevorgangs vermieden wird.

Aus diesem Grund verwenden diese Web-Apps, wenn sie Formulardaten absenden möchten, HTML-Formulare nur, um Eingaben vom Benutzer zu sammeln, jedoch nicht für die Datenübermittlung. Wenn der Nutzer versucht, die Daten zu senden, übernimmt die Anwendung die Kontrolle und sendet die Daten mit einer JavaScript-API wie [`fetch()`](/de/docs/Web/API/Window/fetch).

## Das Problem mit der Formularübermittlung über JavaScript

Wenn der Serverendpunkt, an den die Web-App die Formulardaten sendet, unter der Kontrolle des Entwicklers der Web-App steht, können sie die Formulardaten in beliebiger Weise senden, zum Beispiel als JSON-Objekt.

Wenn der Serverendpunkt jedoch eine Formularübermittlung erwartet, muss die Web-App die Daten auf eine bestimmte Weise codieren. Wenn die Daten nur Text sind, besteht es aus URL-kodierten Listen von Schlüssel/Wert-Paaren und wird mit einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` gesendet. Wenn das Formular Binärdaten enthält, muss es mit dem `multipart/form-data`-Content-Typ gesendet werden.

Die [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle kümmert sich um den Prozess der solchen Datenkodierung, und im Rest dieses Artikels geben wir eine kurze Einführung in `FormData`. Weitere Details finden Sie in unserem Leitfaden zur [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).

## Manuelles Erstellen eines `FormData`-Objekts

Sie können ein `FormData`-Objekt füllen, indem Sie die [`append()`](/de/docs/Web/API/FormData/append)-Methode des Objekts für jedes Feld, das Sie hinzufügen möchten, aufrufen und dabei den Namen und den Wert des Feldes übergeben. Der Wert kann ein Zeichenfolgenwert für Textfelder oder ein [`Blob`](/de/docs/Web/API/Blob) für Binärfelder, einschließlich [`File`](/de/docs/Web/API/File)-Objekten, sein.

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

1. Zuerst erstellen wir ein neues, leeres, `FormData`-Objekt.

2. Als nächstes rufen wir `append()` zweimal auf, um zwei Elemente zum `FormData`-Objekt hinzuzufügen: ein Textfeld und eine Datei.

3. Schließlich senden wir eine {{httpmethod("POST")}}-Anfrage mit der `fetch()`-API und setzen das `FormData`-Objekt als Anfragetext.

Beachten Sie, dass wir den {{httpheader("Content-Type")}}-Header nicht setzen müssen: Der korrekte Header wird automatisch gesetzt, wenn wir ein `FormData`-Objekt an `fetch()` übergeben.

## Verknüpfung eines `FormData`-Objekts mit einem `<form>`

Wenn die von Ihnen übermittelten Daten tatsächlich von einem {{htmlelement("form")}} stammen, können Sie die `FormData`-Instanz füllen, indem Sie das Formular an den `FormData`-Konstruktor übergeben.

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

Das Formular enthält ein Texteingabefeld, ein Dateieingabefeld und einen Senden-Button.

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

Wir fügen einen „submit“-Ereignishandler für das Formularelement hinzu. Dieser ruft zunächst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um die eingebaute Formularübermittlung des Browsers zu verhindern, damit wir die Kontrolle übernehmen können. Dann rufen wir `sendData()` auf, was das Formularelement abruft und an den `FormData`-Konstruktor übergibt.

Danach senden wir die `FormData`-Instanz als HTTP-`POST`-Anfrage unter Verwendung von `fetch()`.

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [Anleitung zum Strukturieren eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [Die nativen Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
- [Zusätzliche Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
- [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
- [Styling von HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

### Fortgeschrittene Themen

- **Senden von Formularen über JavaScript**
- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Erweiterte Stile für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
