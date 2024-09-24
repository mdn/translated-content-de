---
title: Übermitteln von Formularen über JavaScript
slug: Learn/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: 4414bc297a05373570250fe1fb154eab197f29ca
---

{{LearnSidebar}}

Wenn ein Benutzer ein HTML-Formular absendet, beispielsweise durch Klicken auf den {{glossary("Submit_button", "Submit-Button")}}, sendet der Browser eine [HTTP](/de/docs/Web/HTTP)-Anfrage, um die Daten im Formular zu übertragen. Anstelle dieses deklarativen Ansatzes verwenden Webanwendungen manchmal JavaScript-APIs wie {{domxref("Window/fetch", "fetch()")}}, um Daten programmatisch an einen Endpunkt zu senden, der eine Formularübermittlung erwartet. Dieser Artikel erklärt, warum dies ein wichtiger Anwendungsfall ist und wie er durchgeführt wird.

## Warum JavaScript verwenden, um Formulardaten zu übermitteln?

Die Standard-HTML-Formularübermittlung, wie in unserem Artikel über [das Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) beschrieben, lädt die URL, an die die Daten gesendet wurden, was bedeutet, dass das Browserfenster mit einem vollständigen Seitenladung navigiert.

Viele Webanwendungen, insbesondere {{glossary("progressive web apps")}} und {{glossary("SPA", "Single-Page-Apps")}}, verwenden jedoch JavaScript-APIs, um Daten vom Server abzurufen und die relevanten Teile der Seite zu aktualisieren, wodurch der Overhead eines vollständigen Seitenladens vermieden wird.

Aus diesem Grund verwenden diese Webanwendungen, wenn sie Formulardaten übermitteln möchten, HTML-Formulare nur, um Eingaben vom Benutzer zu sammeln, aber nicht zur Datenübermittlung. Wenn der Benutzer versucht, die Daten zu senden, übernimmt die Anwendung die Kontrolle und sendet die Daten mithilfe einer JavaScript-API wie {{domxref("Window/fetch", "fetch()")}}.

## Das Problem mit der JavaScript-Formularübermittlung

Wenn der Serverendpunkt, an den die Webanwendung die Formulardaten sendet, unter der Kontrolle des Entwicklers der Webanwendung ist, können sie die Formulardaten auf beliebige Weise senden: zum Beispiel als JSON-Objekt.

Wenn der Serverendpunkt jedoch eine Formularübermittlung erwartet, muss die Webanwendung die Daten auf eine bestimmte Weise kodieren. Wenn die Daten nur textuell sind, bestehen sie aus URL-kodierten Listen von Schlüssel/Wert-Paaren und werden mit einem {{httpheader("Content-Type")}} von `application/x-www-form-urlencoded` gesendet. Wenn das Formular Binärdaten enthält, müssen diese mit dem Content-Typ `multipart/form-data` gesendet werden.

Die Schnittstelle {{domxref("FormData")}} kümmert sich um den Kodierungsprozess der Daten auf diese Weise, und im Rest dieses Artikels geben wir eine kurze Einführung in `FormData`. Für weitere Details siehe unser Handbuch zum [Verwenden von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).

## Manuelles Erstellen eines `FormData`-Objekts

Sie können ein `FormData`-Objekt bevölkern, indem Sie die Methode {{domxref("FormData.append()", "append()")}} des Objekts für jedes Feld, das Sie hinzufügen möchten, aufrufen und den Namen und den Wert des Feldes übergeben. Der Wert kann eine Zeichenkette für Textfelder oder ein {{domxref("Blob")}} für Binärfelder einschließlich {{domxref("File")}}-Objekten sein.

Im folgenden Beispiel senden wir Daten als Formularübermittlung, wenn der Benutzer auf einen Button klickt:

```js
async function sendData(data) {
  // Konstruktion einer FormData-Instanz
  const formData = new FormData();

  // Hinzufügen eines Textfelds
  formData.append("name", "Pomegranate");

  // Hinzufügen einer Datei
  const selection = await window.showOpenFilePicker();
  if (selection.length > 0) {
    const file = await selection[0].getFile();
    formData.append("file", file);
  }

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Setzen der FormData-Instanz als Anfrageinhalt
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

2. Anschließend rufen wir `append()` zweimal auf, um zwei Elemente zum `FormData`-Objekt hinzuzufügen: ein Textfeld und eine Datei.

3. Schließlich führen wir eine {{httpmethod("POST")}}-Anfrage mit der `fetch()`-API aus und setzen das `FormData`-Objekt als Anfrageinhalt.

Beachten Sie, dass wir den {{httpheader("Content-Type")}}-Header nicht setzen müssen: Der korrekte Header wird automatisch gesetzt, wenn wir ein `FormData`-Objekt in `fetch()` übergeben.

## Verknüpfen eines `FormData`-Objekts mit einem `<form>`

Wenn die Daten, die Sie übermitteln, wirklich aus einem {{htmlelement("form")}} stammen, können Sie die `FormData`-Instanz bevölkern, indem Sie das Formular an den `FormData`-Konstruktor übergeben.

Angenommen, unser HTML deklariert ein `<form>`-Element:

```html
<form id="userinfo">
  <p>
    <label for="username">Geben Sie Ihren Namen ein:</label>
    <input type="text" id="username" name="username" value="Dominic" />
  </p>
  <p>
    <label for="avatar">Wählen Sie einen Avatar</label>
    <input type="file" id="avatar" name="avatar" required />
  </p>
  <input type="submit" value="Absenden" />
</form>
```

Das Formular enthält eine Texteingabe, eine Dateieingabe und einen Submit-Button.

Das JavaScript sieht wie folgt aus:

```js
const form = document.querySelector("#userinfo");

async function sendData() {
  // Verknüpfen des FormData-Objekts mit dem Formularelement
  const formData = new FormData(form);

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Setzen der FormData-Instanz als Anfrageinhalt
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

// Übernahme der Formularübermittlung
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
```

Wir fügen einen Submit-Event-Handler für das Formularelement hinzu. Dieser ruft zuerst {{domxref("Event.preventDefault()", "preventDefault()")}} auf, um die eingebaute Formularübermittlung des Browsers zu verhindern, damit wir übernehmen können. Dann rufen wir `sendData()` auf, das das Formularelement abruft und es in den `FormData`-Konstruktor übergibt.

Danach senden wir die `FormData`-Instanz als HTTP-`POST`-Anfrage mit `fetch()`.

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types)
- [Zusätzliche Formularsteuerungen](/de/docs/Learn/Forms/Other_form_controls)
- [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes)
- [Styling von HTML-Formularen](/de/docs/Learn/Forms/Styling_web_forms)
- [Validierung von Formulardaten](/de/docs/Learn/Forms/Form_validation)
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Fortgeschrittene Themen

- **Übermitteln von Formularen über JavaScript**
- [Wie man benutzerdefinierte Formular-Widgets erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Erweiterte Gestaltung von HTML-Formularen](/de/docs/Learn/Forms/Advanced_form_styling)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
