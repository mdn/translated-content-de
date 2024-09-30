---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Das **`HTMLFormElement`** Interface repräsentiert ein {{HTMLElement("form")}} Element im DOM. Es ermöglicht den Zugriff auf und, in einigen Fällen, die Modifikation von Aspekten des Formulars sowie den Zugriff auf seine Komponenten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Eltern, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle Formularsteuerelemente enthält, die zu diesem Formularelement gehören.
- [`HTMLFormElement.length`](/de/docs/Web/API/HTMLFormElement/length) {{ReadOnlyInline}}
  - : Ein `long`, das die Anzahl der Steuerelemente im Formular widerspiegelt.
- [`HTMLFormElement.name`](/de/docs/Web/API/HTMLFormElement/name)
  - : Ein String, der den Wert des HTML-Attributs [`name`](/de/docs/Web/HTML/Element/form#name) des Formulars widerspiegelt und den Namen des Formulars enthält.
- [`HTMLFormElement.method`](/de/docs/Web/API/HTMLFormElement/method)
  - : Ein String, der den Wert des HTML-Attributs [`method`](/de/docs/Web/HTML/Element/form#method) des Formulars widerspiegelt und die HTTP-Methode angibt, die zur Übermittlung des Formulars verwendet wird. Nur festgelegte Werte können gesetzt werden.
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)
  - : Ein String, der den Wert des HTML-Attributs [`target`](/de/docs/Web/HTML/Element/form#target) des Formulars widerspiegelt und angibt, wo die Ergebnisse der Formularübermittlung angezeigt werden.
- [`HTMLFormElement.action`](/de/docs/Web/API/HTMLFormElement/action)
  - : Ein String, der den Wert des HTML-Attributs [`action`](/de/docs/Web/HTML/Element/form#action) des Formulars widerspiegelt und die URI eines Programms enthält, das die vom Formular übermittelten Informationen verarbeitet.
- [`HTMLFormElement.encoding`](/de/docs/Web/API/HTMLFormElement/encoding) oder [`HTMLFormElement.enctype`](/de/docs/Web/API/HTMLFormElement/enctype)
  - : Ein String, der den Wert des HTML-Attributs [`enctype`](/de/docs/Web/HTML/Element/form#enctype) des Formulars widerspiegelt und den Inhaltstyp angibt, der zur Übertragung des Formulars an den Server verwendet wird. Nur festgelegte Werte können gesetzt werden. Die beiden Eigenschaften sind Synonyme.
- [`HTMLFormElement.acceptCharset`](/de/docs/Web/API/HTMLFormElement/acceptCharset)
  - : Ein String, der den Wert des HTML-Attributs [`accept-charset`](/de/docs/Web/HTML/Element/form#accept-charset) des Formulars widerspiegelt und die vom Server akzeptierte Zeichenkodierung darstellt.
- [`HTMLFormElement.autocomplete`](/de/docs/Web/API/HTMLFormElement/autocomplete)
  - : Ein String, der den Wert des HTML-Attributs [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete) des Formulars widerspiegelt und angibt, ob die Steuerelemente in diesem Formular ihre Werte automatisch vom Browser ausfüllen lassen können.
- [`HTMLFormElement.noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)
  - : Ein boolescher Wert, der den Wert des HTML-Attributs [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) des Formulars widerspiegelt und angibt, ob das Formular nicht validiert werden soll.

Benannte Eingaben werden als Eigenschaften zu ihrer Eigentümer-Formularinstanz hinzugefügt und können native Eigenschaften überschreiben, wenn sie denselben Namen haben (z.B. wird ein Formular mit einer Eingabe namens `action` den `action` Wert dieser Eingabe zurückgeben, anstatt des HTML-Attributs [`action`](/de/docs/Web/HTML/Element/form#action) des Formulars).

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Eltern, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)
  - : Gibt `true` zurück, wenn die Kind-Steuerelemente des Elements einer [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) unterliegen und diese Bedingungen erfüllen; gibt `false` zurück, wenn einige Steuerelemente ihre Bedingungen nicht erfüllen. Ein Ereignis mit dem Namen [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) wird bei jedem Steuerelement ausgelöst, das seine Bedingungen nicht erfüllt; solche Steuerelemente gelten als ungültig, wenn das Ereignis nicht abgebrochen wird. Es liegt am Programmierer, zu entscheiden, wie auf `false` reagiert wird.
- [`reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity)
  - : Gibt `true` zurück, wenn die Kind-Steuerelemente des Elements ihre [Validierungsbedingungen](/de/docs/Web/HTML/Constraint_validation) erfüllen. Wenn `false` zurückgegeben wird, werden abbrechbare [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignisse für jedes ungültige Kind ausgelöst und Validierungsprobleme dem Benutzer gemeldet.
- [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit)
  - : Fordert an, dass das Formular mit dem angegebenen Absende-Button und dessen entsprechender Konfiguration übermittelt wird.
- [`reset()`](/de/docs/Web/API/HTMLFormElement/reset)
  - : Setzt das Formular auf seinen ursprünglichen Zustand zurück.
- [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)
  - : Übermittelt das Formular an den Server.

## Ereignisse

Hören Sie auf diese Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignis-Listeners zur `oneventname` Eigenschaft dieser Schnittstelle.

- [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)
  - : Das `formdata` Ereignis wird ausgelöst, nachdem die Eingabeliste, die die Daten des Formulars darstellt, erstellt wurde.
- [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)
  - : Das `reset` Ereignis wird ausgelöst, wenn ein Formular zurückgesetzt wird.
- [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
  - : Das `submit` Ereignis wird ausgelöst, wenn ein Formular übermittelt wird.

## Hinweise zur Verwendung

### Ein Formularelement-Objekt erhalten

Um ein `HTMLFormElement` Objekt zu erhalten, können Sie einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) mit [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden, oder Sie können eine Liste aller Formulare im Dokument über die [`forms`](/de/docs/Web/API/Document/forms) Eigenschaft des Dokuments abrufen.

[`Document.forms`](/de/docs/Web/API/Document/forms) gibt ein Array von `HTMLFormElement` Objekten zurück, das jedes der Formulare auf der Seite auflistet. Sie können dann eine der folgenden Syntaxen verwenden, um ein einzelnes Formular zu erhalten:

- `document.forms[index]`
  - : Gibt das Formular an der angegebenen `index`-Position im Array der Formulare zurück.
- `document.forms[id]`
  - : Gibt das Formular zurück, dessen ID `id` ist.
- `document.forms[name]`
  - : Gibt das Formular zurück, dessen `name` Attributswert `name` ist.

### Zugriff auf die Elemente des Formulars

Sie können auf die Liste der datentragenden Elemente des Formulars zugreifen, indem Sie die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft des Formulars untersuchen. Diese gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle Benutzerdateneingabeelemente des Formulars auflistet, sowohl die, die Nachkommen des `<form>` sind, als auch die, die mittels ihrer `form` Attribute Mitglied des Formulars gemacht werden.

Sie können auch das Element des Formulars erhalten, indem Sie sein `name` Attribut als Schlüssel des `form` verwenden, aber die Verwendung von `elements` ist der bessere Ansatz — es enthält _nur_ die Elemente des Formulars und kann nicht mit anderen Attributen des `form` gemischt werden.

### Probleme mit der Benennung von Elementen

Einige Namen werden den JavaScript-Zugriff auf die Eigenschaften und Elemente des Formulars beeinträchtigen.

Zum Beispiel:

- `<input name="id">` wird Vorrang vor `<form id="…">` haben. Das bedeutet, dass `form.id` sich nicht auf die ID des Formulars beziehen wird, sondern auf das Element, dessen Name `"id"` ist. Dies wird auch bei anderen Formulareigenschaften der Fall sein, wie z.B. bei `<input name="action">` oder `<input name="post">`.
- `<input name="elements">` macht die `elements` Sammlung des Formulars unzugänglich. Die Referenz `form.elements` wird jetzt auf das individuelle Element verweisen.

Um solche Probleme mit Elementnamen zu vermeiden:

- Verwenden Sie _immer_ die `elements` Sammlung, um Mehrdeutigkeiten zwischen einem Elementnamen und einer Formulareigenschaft zu vermeiden.
- Verwenden Sie _niemals_ `"elements"` als Elementnamen.

Wenn Sie kein JavaScript verwenden, wird dies kein Problem verursachen.

### Elemente, die als Formularsteuerungen angesehen werden

Die durch `HTMLFormElement.elements` und `HTMLFormElement.length` einbezogenen Elemente sind die folgenden:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle, deren [`type`](/de/docs/Web/HTML/Element/input#type) `"image"` ist, aus historischen Gründen ausgelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Keine anderen Elemente sind in der von `elements` zurückgegebenen Liste enthalten, was es zu einem ausgezeichneten Weg macht, die wichtigsten Elemente bei der Verarbeitung von Formularen zu erhalten.

## Beispiele

Erstellen eines neuen Formularelements, Modifizieren seiner Attribute und dann Übermitteln:

```js
const f = document.createElement("form"); // Create a form
document.body.appendChild(f); // Add it to the document body
f.action = "/cgi-bin/some.cgi"; // Add action and method attributes
f.method = "POST";
f.submit(); // Call the form's submit() method
```

Informationen aus einem `<form>` Extrahieren und einige seiner Attribute setzen:

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

Übermitteln eines `<form>` in einem neuen Fenster:

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
        <label>First name: <input type="text" name="firstname" /></label>
      </p>
      <p>
        <label>Last name: <input type="text" name="lastname" /></label>
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
