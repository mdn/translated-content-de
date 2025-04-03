---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement`**-Schnittstelle repräsentiert ein {{HTMLElement("form")}}-Element im DOM. Sie ermöglicht den Zugriff auf und, in einigen Fällen, die Modifikation von Aspekten des Formulars sowie den Zugriff auf seine Komponenten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt zudem Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle Formular-Steuerelemente enthält, die zu diesem Formular-Element gehören.
- [`HTMLFormElement.length`](/de/docs/Web/API/HTMLFormElement/length) {{ReadOnlyInline}}
  - : Ein `long`, das die Anzahl der Steuerelemente im Formular widerspiegelt.
- [`HTMLFormElement.name`](/de/docs/Web/API/HTMLFormElement/name)
  - : Ein String, der den Wert des HTML-Attributs [`name`](/de/docs/Web/HTML/Element/form#name) des Formulars widerspiegelt und den Namen des Formulars enthält.
- [`HTMLFormElement.method`](/de/docs/Web/API/HTMLFormElement/method)
  - : Ein String, der den Wert des HTML-Attributs [`method`](/de/docs/Web/HTML/Element/form#method) des Formulars widerspiegelt und die HTTP-Methode angibt, die zum Absenden des Formulars verwendet wird. Nur angegebene Werte können gesetzt werden.
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)
  - : Ein String, der den Wert des HTML-Attributs [`target`](/de/docs/Web/HTML/Element/form#target) des Formulars widerspiegelt und angibt, wo die Ergebnisse angezeigt werden sollen, die durch das Absenden des Formulars empfangen werden.
- [`HTMLFormElement.action`](/de/docs/Web/API/HTMLFormElement/action)
  - : Ein String, der den Wert des HTML-Attributs [`action`](/de/docs/Web/HTML/Element/form#action) des Formulars widerspiegelt und die URI eines Programms enthält, das die durch das Formular übermittelten Informationen verarbeitet.
- [`HTMLFormElement.encoding`](/de/docs/Web/API/HTMLFormElement/encoding) oder [`HTMLFormElement.enctype`](/de/docs/Web/API/HTMLFormElement/enctype)
  - : Ein String, der den Wert des HTML-Attributs [`enctype`](/de/docs/Web/HTML/Element/form#enctype) des Formulars widerspiegelt und den Inhaltstyp angibt, der zur Übertragung des Formulars an den Server verwendet wird. Nur angegebene Werte können gesetzt werden. Die beiden Eigenschaften sind Synonyme.
- [`HTMLFormElement.acceptCharset`](/de/docs/Web/API/HTMLFormElement/acceptCharset)
  - : Ein String, der den Wert des HTML-Attributs [`accept-charset`](/de/docs/Web/HTML/Element/form#accept-charset) des Formulars widerspiegelt.
- [`HTMLFormElement.autocomplete`](/de/docs/Web/API/HTMLFormElement/autocomplete)
  - : Ein String, der den Wert des HTML-Attributs [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete) des Formulars widerspiegelt und angibt, ob die Steuerelemente in diesem Formular automatisch von dem Browser ausgefüllt werden können.
- [`HTMLFormElement.noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)
  - : Ein boolescher Wert, der den Wert des HTML-Attributs [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) des Formulars widerspiegelt und angibt, ob das Formular nicht validiert werden sollte.

Benannte Eingaben werden der Formularinstanz als Eigenschaften hinzugefügt und können native Eigenschaften überschreiben, wenn sie denselben Namen verwenden (z.B. ein Formular mit einer Eingabe namens `action` wird seine `action`-Eigenschaft mit dieser Eingabe ersetzen, anstatt der [`action`](/de/docs/Web/HTML/Element/form#action) HTML-Attribut des Formulars).

## Instanz-Methoden

_Diese Schnittstelle erbt zudem Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)
  - : Gibt `true` zurück, wenn die untergeordneten Steuerelemente des Elements einer [Einschränkungsprüfung](/de/docs/Web/HTML/Constraint_validation) unterliegen und diese Einschränkungen erfüllen; gibt `false` zurück, wenn einige Steuerelemente ihre Einschränkungen nicht erfüllen. Löst eine Ereignis namens [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) bei jedem Steuerelement aus, das seine Einschränkungen nicht erfüllt; solche Steuerelemente gelten als ungültig, wenn das Ereignis nicht abgebrochen wird. Es liegt im Ermessen des Programmierers, wie auf `false` reagiert werden soll.
- [`reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity)
  - : Gibt `true` zurück, wenn die untergeordneten Steuerelemente des Elements ihre [Validierungseinschränkungen](/de/docs/Web/HTML/Constraint_validation) erfüllen. Wenn `false` zurückgegeben wird, werden stornierbare [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignisse für jedes ungültige Kind ausgelöst und Validierungsprobleme dem Benutzer gemeldet.
- [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit)
  - : Fordert an, dass das Formular mit dem angegebenen Submit-Button und seiner entsprechenden Konfiguration übermittelt wird.
- [`reset()`](/de/docs/Web/API/HTMLFormElement/reset)
  - : Setzt das Formular in seinen Ausgangszustand zurück.
- [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)
  - : Übermittelt das Formular an den Server.

## Ereignisse

Verwenden Sie `addEventListener()`, um diese Ereignisse zu belauschen, oder weisen Sie dieser Schnittstelle einen Ereignis-Hörer an ihre `oneventname`-Eigenschaft zu.

- [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)
  - : Das `formdata`-Ereignis wird ausgelöst, nachdem die Eintragsliste, die die Daten des Formulars repräsentiert, erstellt wurde.
- [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)
  - : Das `reset`-Ereignis wird ausgelöst, wenn ein Formular zurückgesetzt wird.
- [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
  - : Das `submit`-Ereignis wird ausgelöst, wenn ein Formular übermittelt wird.

## Anwendungshinweise

### Ein Beschreibungsobjekt eines Formulars erhalten

Um ein `HTMLFormElement`-Objekt zu erhalten, können Sie einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) mit [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden, oder Sie können eine Liste aller Formulare im Dokument mit dessen [`forms`](/de/docs/Web/API/Document/forms)-Eigenschaft abrufen.

[`Document.forms`](/de/docs/Web/API/Document/forms) gibt ein Array von `HTMLFormElement`-Objekten zurück, das jedes der Formulare auf der Seite auflistet. Sie können dann eine der folgenden Syntaxen verwenden, um ein einzelnes Formular zu erhalten:

- `document.forms[index]`
  - : Gibt das Formular an dem spezifizierten `index` in das Array der Formulare zurück.
- `document.forms[id]`
  - : Gibt das Formular zurück, dessen ID `id` ist.
- `document.forms[name]`
  - : Gibt das Formular zurück, dessen `name`-Attributswert `name` ist.

### Zugriff auf die Elemente des Formulars

Sie können auf die Liste der datentragenden Elemente des Formulars zugreifen, indem Sie die [`elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft des Formulars untersuchen. Dies gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle Benutzerdateneingabeelemente des Formulars auflistet, sowohl diejenigen, die Nachkommen des `<form>` sind, als auch diejenigen, die durch ihre `form`-Attribute Mitglieder des Formulars werden.

Sie können das Element des Formulars auch durch Verwendung seines `name`-Attributs als Schlüssel des `form` erhalten, aber die Verwendung von `elements` ist eine bessere Herangehensweise—es enthält _nur_ die Elemente des Formulars und kann nicht mit anderen Attributen des `form` vermischt werden.

### Probleme mit der Benennung von Elementen

Einige Namen werden beim JavaScript-Zugriff auf die Eigenschaften und Elemente des Formulars stören.

Beispielsweise:

- `<input name="id">` hat Vorrang vor `<form id="…">`. Das bedeutet, dass `form.id` sich nicht auf die ID des Formulars beziehen wird, sondern auf das Element, dessen Name `"id"` ist. Dies wird auch für andere Formulareigenschaften gelten, wie `<input name="action">` oder `<input name="post">`.
- `<input name="elements">` wird die `elements`-Sammlung des Formulars unzugänglich machen. Die Referenz `form.elements` wird sich nun auf das einzelne Element beziehen.

Um solche Probleme mit Elementnamen zu vermeiden:

- Verwenden Sie _immer_ die `elements`-Sammlung, um Mehrdeutigkeiten zwischen einem Elementnamen und einer Formulareigenschaft zu vermeiden.
- Verwenden Sie _niemals_ `"elements"` als einen Elementnamen.

Wenn Sie kein JavaScript verwenden, wird dies kein Problem darstellen.

### Elemente, die als Formular-Steuerelemente angesehen werden

Die Elemente, die von `HTMLFormElement.elements` und `HTMLFormElement.length` eingeschlossen sind, sind die folgenden:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle, deren [`type`](/de/docs/Web/HTML/Element/input#type) `"image"` ist, aus historischen Gründen ausgeschlossen sind)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Keine anderen Elemente sind in der von `elements` zurückgegebenen Liste enthalten, was sie zu einer ausgezeichneten Möglichkeit macht, die wichtigeren Elemente beim Bearbeiten von Formularen zu erhalten.

## Beispiele

Erstellen eines neuen Formularelements, Ändern seiner Attribute und dann Senden:

```js
const f = document.createElement("form"); // Create a form
document.body.appendChild(f); // Add it to the document body
f.action = "/cgi-bin/some.cgi"; // Add action and method attributes
f.method = "POST";
f.submit(); // Call the form's submit() method
```

Extrahieren von Informationen aus einem `<form>`-Element und Setzen einiger seiner Attribute:

```html
<form name="formA" action="/cgi-bin/test" method="post">
  <p>Press "Info" for form details, or "Set" to change those details.</p>
  <p>
    <button type="button" onclick="getFormInfo();">Info</button>
    <button type="button" onclick="setFormInfo(this.form);">Set</button>
    <button type="reset">Reset</button>
  </p>

  <textarea id="form-info" rows="15" cols="20"></textarea>
</form>

<script>
  function getFormInfo() {
    // Get a reference to the form via its name
    const f = document.forms["formA"];
    // The form properties we're interested in
    const properties = [
      "elements",
      "length",
      "name",
      "charset",
      "action",
      "acceptCharset",
      "action",
      "enctype",
      "method",
      "target",
    ];
    // Iterate over the properties, turning them into a string that we can display to the user
    const info = properties
      .map((property) => `${property}: ${f[property]}`)
      .join("\n");

    // Set the form's <textarea> to display the form's properties
    document.forms["formA"].elements["form-info"].value = info; // document.forms["formA"]['form-info'].value would also work
  }

  function setFormInfo(f) {
    // Argument should be a form element reference.
    f.action = "a-different-url.cgi";
    f.name = "a-different-name";
  }
</script>
```

Einreichen eines `<form>` in ein neues Fenster:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Example new-window form submission</title>
  </head>
  <body>
    <form action="test.php" target="_blank">
      <p>
        <label>First name: <input type="text" name="first-name" /></label>
      </p>
      <p>
        <label>Last name: <input type="text" name="last-name" /></label>
      </p>
      <p>
        <label><input type="password" name="pwd" /></label>
      </p>

      <fieldset>
        <legend>Pet preference</legend>

        <p>
          <label><input type="radio" name="pet" value="cat" /> Cat</label>
        </p>
        <p>
          <label><input type="radio" name="pet" value="dog" /> Dog</label>
        </p>
      </fieldset>

      <fieldset>
        <legend>Owned vehicles</legend>

        <p>
          <label
            ><input type="checkbox" name="vehicle" value="Bike" />I have a
            bike</label
          >
        </p>
        <p>
          <label
            ><input type="checkbox" name="vehicle" value="Car" />I have a
            car</label
          >
        </p>
      </fieldset>

      <p><button>Submit</button></p>
    </form>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("form")}}.
