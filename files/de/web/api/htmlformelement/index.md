---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

Das **`HTMLFormElement`** Interface repräsentiert ein {{HTMLElement("form")}} Element im DOM. Es ermöglicht den Zugriff auf – und in manchen Fällen die Modifikation von – Aspekten des Formulars sowie den Zugriff auf seine Komponenten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFormElement.acceptCharset`](/de/docs/Web/API/HTMLFormElement/acceptCharset)
  - : Ein String, der den Wert des [`accept-charset`](/de/docs/Web/HTML/Reference/Elements/form#accept-charset) HTML-Attributs des Formulars widerspiegelt.
- [`HTMLFormElement.action`](/de/docs/Web/API/HTMLFormElement/action)
  - : Ein String, der den Wert des [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) HTML-Attributs des Formulars widerspiegelt und die URI eines Programms enthält, das die vom Formular übermittelten Informationen verarbeitet.
- [`HTMLFormElement.autocomplete`](/de/docs/Web/API/HTMLFormElement/autocomplete)
  - : Ein String, der den Wert des [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) HTML-Attributs des Formulars widerspiegelt und angibt, ob die Steuerungen in diesem Formular ihre Werte automatisch vom Browser bevölkert haben können.
- [`HTMLFormElement.encoding`](/de/docs/Web/API/HTMLFormElement/encoding) oder [`HTMLFormElement.enctype`](/de/docs/Web/API/HTMLFormElement/enctype)
  - : Ein String, der den Wert des [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) HTML-Attributs des Formulars widerspiegelt und den Typ des Inhalts angibt, der verwendet wird, um das Formular an den Server zu übertragen. Nur spezifizierte Werte können gesetzt werden. Die beiden Eigenschaften sind Synonyme.
- [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle zu diesem Formularelement gehörenden Formularelemente enthält.
- [`HTMLFormElement.length`](/de/docs/Web/API/HTMLFormElement/length) {{ReadOnlyInline}}
  - : Ein `long`, das die Anzahl der Steuerungen im Formular widerspiegelt.
- [`HTMLFormElement.name`](/de/docs/Web/API/HTMLFormElement/name)
  - : Ein String, der den Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/form#name) HTML-Attributs des Formulars widerspiegelt und den Namen des Formulars enthält.
- [`HTMLFormElement.noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)
  - : Ein Boolescher Wert, der den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) HTML-Attributs des Formulars widerspiegelt und angibt, ob das Formular nicht validiert werden soll.
- [`HTMLFormElement.method`](/de/docs/Web/API/HTMLFormElement/method)
  - : Ein String, der den Wert des [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) HTML-Attributs des Formulars widerspiegelt und die HTTP-Methode angibt, die zur Übermittlung des Formulars verwendet wird. Nur spezifizierte Werte können gesetzt werden.
- [`HTMLFormElement.rel`](/de/docs/Web/API/HTMLFormElement/rel)
  - : Ein String, der den Wert des [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) HTML-Attributs des Formulars widerspiegelt und angibt, welche Arten von Links das Formular erstellt, als durch Leerzeichen getrennte Liste von aufgezählten Werten.
- [`HTMLFormElement.relList`](/de/docs/Web/API/HTMLFormElement/relList) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) HTML-Attribut als Liste von Tokens widerspiegelt.
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)
  - : Ein String, der den Wert des [`target`](/de/docs/Web/HTML/Reference/Elements/form#target) HTML-Attributs des Formulars widerspiegelt und angibt, wo die Ergebnisse der Formulareinreichung angezeigt werden sollen.

Benannte Eingaben werden als Eigenschaften zu ihrer Eigentümerformularinstanz hinzugefügt und können native Eigenschaften überschreiben, wenn sie denselben Namen haben (z. B. ein Formular mit einer Eingabe namens `action` wird die `action`-Eigenschaft dieser Eingabe anstelle des [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) HTML-Attributs des Formulars zurückgeben).

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)
  - : Gibt `true` zurück, wenn die Kindelemente des Formulars einer [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) unterliegen und diese einschränkungen erfüllen; gibt `false` zurück, wenn einige Steuerungen ihre Einschränkungen nicht erfüllen. Löst ein Ereignis mit dem Namen [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) für jedes Steuerelement aus, das seine Einschränkungen nicht erfüllt; solche Steuerungen gelten als ungültig, wenn das Ereignis nicht abgebrochen wird. Es liegt am Programmierer zu entscheiden, wie auf `false` reagiert wird.
- [`reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity)
  - : Gibt `true` zurück, wenn die Kindelemente des Formulars ihre [Validierungseinschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllen. Wenn `false` zurückgegeben wird, werden abbrechbare [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignisse für jedes ungültige Kind ausgelöst und Validierungsprobleme dem Benutzer gemeldet.
- [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit)
  - : Fordert an, dass das Formular unter Verwendung des angegebenen Übermittlungsschalters und seiner entsprechenden Konfiguration übermittelt wird.
- [`reset()`](/de/docs/Web/API/HTMLFormElement/reset)
  - : Setzt das Formular auf seinen ursprünglichen Zustand zurück.
- [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)
  - : Übermittelt das Formular an den Server.

## Ereignisse

Diese Ereignisse können mit `addEventListener()` abgehört werden oder indem ein Ereignislistener der `oneventname` Eigenschaft dieses Interfaces zugewiesen wird.

- [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)
  - : Das `formdata`-Ereignis wird ausgelöst, nachdem die Eintragsliste, die die Daten des Formulars darstellt, erstellt wurde.
- [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)
  - : Das `reset`-Ereignis wird ausgelöst, wenn ein Formular zurückgesetzt wird.
- [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
  - : Das `submit`-Ereignis wird ausgelöst, wenn ein Formular übermittelt wird.

## Nutzungshinweise

### Ein Objektelement des Formulars abrufen

Um ein `HTMLFormElement`-Objekt zu erhalten, können Sie einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) mit [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden, oder Sie können eine Liste aller Formulare im Dokument über die [`forms`](/de/docs/Web/API/Document/forms) Eigenschaft des Dokuments abrufen.

[`Document.forms`](/de/docs/Web/API/Document/forms) gibt ein Array von `HTMLFormElement` Objekten zurück, das jedes der Formulare auf der Seite auflistet. Sie können dann eine der folgenden Syntaxen verwenden, um ein individuelles Formular zu erhalten:

- `document.forms[index]`
  - : Gibt das Formular am angegebenen `index` im Array der Formulare zurück.
- `document.forms[id]`
  - : Gibt das Formular zurück, dessen ID `id` ist.
- `document.forms[name]`
  - : Gibt das Formular zurück, dessen `name`-Attribut den Wert `name` hat.

### Zugriff auf die Elemente des Formulars

Sie können auf die Liste der datentragenden Elemente des Formulars zugreifen, indem Sie die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft des Formulars untersuchen. Dies gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle Benutzerdateneintrags-Elemente des Formulars auflistet, sowohl diejenigen, die Nachkommen des `<form>` sind als auch diejenigen, die durch ihr `form`-Attribut zum Formular gemacht wurden.

Sie können auch auf das Element des Formulars zugreifen, indem Sie dessen `name`-Attribut als Schlüssel des `form` verwenden, aber die Verwendung von `elements` ist ein besserer Ansatz – es enthält _nur_ die Elemente des Formulars und kann nicht mit anderen Attributen des `form` vermischt werden.

### Probleme beim Benennen von Elementen

Einige Namen werden den JavaScript-Zugriff auf die Eigenschaften und Elemente des Formulars beeinträchtigen.

Zum Beispiel:

- `<input name="id">` wird Vorrang vor `<form id="…">` haben. Das bedeutet, dass `form.id` sich nicht auf die ID des Formulars beziehen wird, sondern auf das Element, dessen Name `"id"` ist. Dies wird auch bei anderen Formulareigenschaften der Fall sein, wie `<input name="action">` oder `<input name="post">`.
- `<input name="elements">` wird die `elements`-Sammlung des Formulars unzugänglich machen. Der Verweis `form.elements` wird jetzt auf das individuelle Element verweisen.

Um solche Probleme mit Elementnamen zu vermeiden:

- _Immer_ die `elements`-Sammlung verwenden, um Mehrdeutigkeiten zwischen einem Elementnamen und einer Formulareigenschaft zu vermeiden.
- _Niemals_ `"elements"` als Elementnamen verwenden.

Wenn Sie kein JavaScript verwenden, wird dies kein Problem verursachen.

### Elemente, die als Formularelemente betrachtet werden

Die von `HTMLFormElement.elements` und `HTMLFormElement.length` eingeschlossenen Elemente sind die folgenden:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle, deren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `"image"` ist, aus historischen Gründen weggelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Keine anderen Elemente sind in der von `elements` zurückgegebenen Liste enthalten, was es zu einem ausgezeichneten Mittel macht, um an die wichtigsten Elemente bei der Verarbeitung von Formularen zu gelangen.

## Beispiele

Ein neues Formularelement erstellen, seine Attribute ändern und es dann absenden:

```js
const f = document.createElement("form"); // Create a form
document.body.appendChild(f); // Add it to the document body
f.action = "/cgi-bin/some.cgi"; // Add action and method attributes
f.method = "POST";
f.submit(); // Call the form's submit() method
```

Informationen aus einem `<form>`-Element extrahieren und einige seiner Attribute festlegen:

```html
<form name="formA" action="/cgi-bin/test" method="post">
  <p>Press "Info" for form details, or "Set" to change those details.</p>
  <p>
    <button type="button" id="info">Info</button>
    <button type="button" id="set-info">Set</button>
    <button type="reset">Reset</button>
  </p>

  <textarea id="form-info" rows="15" cols="20"></textarea>
</form>
```

```js
document.getElementById("info").addEventListener("click", () => {
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
});

document.getElementById("set-info").addEventListener("click", (e) => {
  // Get a reference to the form via the event target
  // e.target is the button, and .form is the form it belongs to
  const f = e.target.form;
  // Argument should be a form element reference.
  f.action = "a-different-url.cgi";
  f.name = "a-different-name";
});
```

Ein `<form>`-Element in einem neuen Fenster absenden:

```html
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
        ><input type="checkbox" name="vehicle" value="Car" />I have a car</label
      >
    </p>
  </fieldset>

  <p><button>Submit</button></p>
</form>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("form")}}.
