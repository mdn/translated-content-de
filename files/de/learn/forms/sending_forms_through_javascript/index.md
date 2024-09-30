---
title: Versenden von Formularen über JavaScript
slug: Learn/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: 4414bc297a05373570250fe1fb154eab197f29ca
---

{{LearnSidebar}}

Wenn ein Benutzer ein HTML-Formular absendet, beispielsweise durch Klicken auf den [Absende-Button](/de/docs/Glossary/Submit_button), sendet der Browser eine [HTTP](/de/docs/Web/HTTP)-Anfrage, um die Daten im Formular zu versenden. Anstelle dieses deklarativen Ansatzes verwenden Web-Apps jedoch manchmal JavaScript-APIs wie [`fetch()`](/de/docs/Web/API/Window/fetch), um Daten programmatisch an einen Endpunkt zu senden, der eine Formularübermittlung erwartet. Dieser Artikel erklärt, warum dies ein wichtiger Anwendungsfall ist und wie man es umsetzt.

## Warum JavaScript zum Absenden von Formulardaten verwenden?

Die standardmäßige HTML-Formularübermittlung, wie in unserem Artikel über [das Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) beschrieben, lädt die URL, an die die Daten gesendet wurden, was bedeutet, dass das Browserfenster mit einem vollständigen Seitenladevorgang navigiert.

Viele Web-Apps, insbesondere [Progressive Web Apps](/de/docs/Glossary/progressive_web_apps) und [Single-Page-Apps](/de/docs/Glossary/SPA), verwenden jedoch JavaScript-APIs, um Daten vom Server anzufordern und relevante Teile der Seite zu aktualisieren, wodurch der Aufwand eines vollständigen Seitenladevorgangs vermieden wird.

Aus diesem Grund verwenden diese Web-Apps HTML-Formulare nur, um Eingaben vom Benutzer zu sammeln, jedoch nicht, um Daten abzusenden. Wenn der Benutzer versucht, die Daten zu senden, übernimmt die Anwendung die Kontrolle und sendet die Daten mithilfe einer JavaScript-API wie [`fetch()`](/de/docs/Web/API/Window/fetch).

## Das Problem mit der JavaScript-Formularübermittlung

Wenn der Server-Endpunkt, an den die Web-App die Formulardaten sendet, unter der Kontrolle des Web-App-Entwicklers steht, können sie die Formulardaten auf beliebige Weise senden, beispielsweise als JSON-Objekt.

Wenn der Server-Endpunkt jedoch eine Formularübermittlung erwartet, muss die Web-App die Daten auf eine bestimmte Weise kodieren. Beispielsweise werden die Daten, wenn sie nur textuell sind, als URL-kodierte Listen von Schlüssel/Wert-Paaren erstellt und mit einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` gesendet. Wenn das Formular Binärdaten enthält, müssen diese mit dem Inhaltstyp `multipart/form-data` gesendet werden.

Das [`FormData`](/de/docs/Web/API/FormData)-Interface übernimmt den Prozess der Datenenkodierung auf diese Weise, und im restlichen Artikel geben wir eine kurze Einführung in `FormData`. Für weitere Details siehe unseren Leitfaden zur [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).

## Manuelles Erstellen eines `FormData`-Objekts

Sie können ein `FormData`-Objekt füllen, indem Sie die [`append()`](/de/docs/Web/API/FormData/append)-Methode des Objekts für jedes Feld aufrufen, das Sie hinzufügen möchten, und dabei den Namen und den Wert des Feldes übergeben. Der Wert kann eine Zeichenfolge sein, für Textfelder, oder ein [`Blob`](/de/docs/Web/API/Blob), für Binärfelder, einschließlich [`File`](/de/docs/Web/API/File)-Objekten.

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

1. Wir konstruieren zuerst ein neues, leeres `FormData`-Objekt.

2. Als Nächstes rufen wir `append()` zweimal auf, um zwei Elemente zum `FormData`-Objekt hinzuzufügen: ein Textfeld und eine Datei.

3. Schließlich machen wir eine {{httpmethod("POST")}}-Anfrage mit der `fetch()`-API und setzen das `FormData`-Objekt als Anfragekörper.

Beachten Sie, dass wir den {{httpheader("Content-Type")}}-Header nicht setzen müssen: Der korrekte Header wird automatisch gesetzt, wenn wir ein `FormData`-Objekt in `fetch()` übergeben.

## Verknüpfen eines `FormData`-Objekts mit einem `<form>`

Wenn die Daten, die Sie übermitteln, tatsächlich aus einem {{htmlelement("form")}} stammen, können Sie die `FormData`-Instanz füllen, indem Sie das Formular an den `FormData`-Konstruktor übergeben.

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

Das Formular enthält eine Texteingabe, eine Dateieingabe und einen Absende-Button.

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

Wir fügen ein "submit"-Ereignishandler für das Formularelement hinzu. Dieser ruft zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um die eingebaute Formularübermittlung des Browsers zu verhindern, damit wir die Kontrolle übernehmen können. Dann rufen wir `sendData()` auf, das das Formularelement abruft und es in den `FormData`-Konstruktor übergibt.

Danach senden wir die `FormData`-Instanz als HTTP `POST`-Anfrage unter Verwendung von `fetch()`.

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types)
- [Zusätzliche Formularelemente](/de/docs/Learn/Forms/Other_form_controls)
- [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes)
- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Versenden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Fortgeschrittene Themen

- **Versenden von Formularen über JavaScript**
- [Anleitung zum Erstellen benutzerdefinierter Formular-Widgets](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Erweiterte Gestaltung von HTML-Formularen](/de/docs/Learn/Forms/Advanced_form_styling)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
