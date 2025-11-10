---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

Das **`HTMLFormElement`** Interface repräsentiert ein {{HTMLElement("form")}} Element im DOM. Es ermöglicht den Zugriff auf – und in einigen Fällen die Modifikation von – Aspekten des Formulars sowie den Zugang zu seinen Komponentenelementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFormElement.acceptCharset`](/de/docs/Web/API/HTMLFormElement/acceptCharset)
  - : Ein String, der den Wert des HTML-Attributs [`accept-charset`](/de/docs/Web/HTML/Reference/Elements/form#accept-charset) des Formulars widerspiegelt.
- [`HTMLFormElement.action`](/de/docs/Web/API/HTMLFormElement/action)
  - : Ein String, der den Wert des HTML-Attributs [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) des Formulars widerspiegelt und die URI eines Programms enthält, das die vom Formular übermittelten Informationen verarbeitet.
- [`HTMLFormElement.autocomplete`](/de/docs/Web/API/HTMLFormElement/autocomplete)
  - : Ein String, der den Wert des HTML-Attributs [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete) des Formulars widerspiegelt, welches angibt, ob die Steuerungen in diesem Formular automatisch vom Browser ausgefüllt werden können.
- [`HTMLFormElement.encoding`](/de/docs/Web/API/HTMLFormElement/encoding) oder [`HTMLFormElement.enctype`](/de/docs/Web/API/HTMLFormElement/enctype)
  - : Ein String, der den Wert des HTML-Attributs [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) des Formulars widerspiegelt, der den Typ des Inhalts angibt, der verwendet wird, um das Formular zum Server zu übertragen. Nur angegebene Werte können gesetzt werden. Die beiden Eigenschaften sind synonym.
- [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle Formularsteuerungen enthält, die zu diesem Formularelement gehören.
- [`HTMLFormElement.length`](/de/docs/Web/API/HTMLFormElement/length) {{ReadOnlyInline}}
  - : Ein `long`, der die Anzahl der Steuerungen im Formular widerspiegelt.
- [`HTMLFormElement.name`](/de/docs/Web/API/HTMLFormElement/name)
  - : Ein String, der den Wert des HTML-Attributs [`name`](/de/docs/Web/HTML/Reference/Elements/form#name) des Formulars widerspiegelt und den Namen des Formulars enthält.
- [`HTMLFormElement.noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)
  - : Ein boolescher Wert, der den Wert des HTML-Attributs [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) des Formulars widerspiegelt und angibt, ob das Formular nicht validiert werden soll.
- [`HTMLFormElement.method`](/de/docs/Web/API/HTMLFormElement/method)
  - : Ein String, der den Wert des HTML-Attributs [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) des Formulars widerspiegelt, der die HTTP-Methode angibt, die für das Einreichen des Formulars verwendet wird. Nur angegebene Werte können gesetzt werden.
- [`HTMLFormElement.rel`](/de/docs/Web/API/HTMLFormElement/rel)
  - : Ein String, der den Wert des HTML-Attributs [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) des Formulars widerspiegelt, welcher die Art der vom Formular erstellten Links als durch Leerzeichen getrennte Liste von aufgezählten Werten darstellt.
- [`HTMLFormElement.relList`](/de/docs/Web/API/HTMLFormElement/relList) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das HTML-Attribut [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) als Liste von Tokens widerspiegelt.
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)
  - : Ein String, der den Wert des HTML-Attributs [`target`](/de/docs/Web/HTML/Reference/Elements/form#target) des Formulars widerspiegelt und angibt, wo die Ergebnisse der Formularübermittlung angezeigt werden sollen.

Benannte Eingaben werden ihrer Besitzerform als Eigenschaften hinzugefügt und können native Eigenschaften überschreiben, wenn sie denselben Namen teilen (z.B. ein Formular mit einer Eingabe namens `action` wird seine `action` Eigenschaft anstelle des HTML-Attributs [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) des Formulars zurückgeben).

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)
  - : Gibt `true` zurück, wenn die untergeordneten Steuerungen des Elements der [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) unterliegen und diese Einschränkungen erfüllen; gibt `false` zurück, wenn einige Steuerungen ihre Einschränkungen nicht erfüllen. Löst ein Ereignis namens [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) bei jeder Steuerung aus, die ihre Einschränkungen nicht erfüllt; solche Steuerungen gelten als ungültig, wenn das Ereignis nicht abgebrochen wird. Es liegt am Programmierer, zu entscheiden, wie auf `false` reagiert wird.
- [`reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity)
  - : Gibt `true` zurück, wenn die untergeordneten Steuerungen des Elements ihre [Validierungseinschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllen. Wenn `false` zurückgegeben wird, werden stornierbare [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignisse für jedes ungültige Kind ausgelöst und Validierungsprobleme dem Benutzer gemeldet.
- [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit)
  - : Fordert an, dass das Formular unter Verwendung des angegebenen Absende-Buttons und seiner entsprechenden Konfiguration gesendet wird.
- [`reset()`](/de/docs/Web/API/HTMLFormElement/reset)
  - : Setzt das Formular in seinen Anfangszustand zurück.
- [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)
  - : Sendet das Formular zum Server.

## Ereignisse

Sie können diese Ereignisse mit `addEventListener()` überwachen oder einen Ereignis-Listener der Eigenschaft `oneventname` dieses Interfaces zuweisen.

- [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)
  - : Das `formdata` Ereignis wird ausgelöst, nachdem die Eintragsliste, die die Formulardaten darstellt, erstellt wurde.
- [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)
  - : Das `reset` Ereignis wird ausgelöst, wenn ein Formular zurückgesetzt wird.
- [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
  - : Das `submit` Ereignis wird ausgelöst, wenn ein Formular gesendet wird.

## Anwendungshinweise

### Abrufen eines Formularelement-Objekts

Um ein `HTMLFormElement` Objekt zu erhalten, können Sie einen [CSS-Selektor](/de/docs/Web/CSS/Guides/Selectors) mit [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden, oder Sie können eine Liste aller Formulare im Dokument mit seiner [`forms`](/de/docs/Web/API/Document/forms) Eigenschaft abrufen.

[`Document.forms`](/de/docs/Web/API/Document/forms) gibt ein Array von `HTMLFormElement` Objekten zurück, das jedes Formular auf der Seite auflistet. Sie können dann eine der folgenden Syntaxen verwenden, um ein einzelnes Formular zu erhalten:

- `document.forms[index]`
  - : Gibt das Formular am angegebenen `index` im Array der Formulare zurück.
- `document.forms[id]`
  - : Gibt das Formular zurück, dessen ID das `id` ist.
- `document.forms[name]`
  - : Gibt das Formular zurück, dessen `name` Attributswert `name` ist.

### Zugriff auf die Elemente des Formulars

Sie können auf die Liste der datenhältigen Elemente des Formulars zugreifen, indem Sie die Eigenschaft [`elements`](/de/docs/Web/API/HTMLFormElement/elements) des Formulars untersuchen. Dies gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle Benutzerdateneingabeelemente des Formulars auflistet, sowohl die, die Nachkommen des `<form>` sind, als auch die, die Mitglieder des Formulars sind, indem sie ihre `form` Attribute verwenden.

Sie können auch das Element des Formulars mit seinem `name` Attribut als Schlüssel des `form` erhalten, aber die Verwendung von `elements` ist ein besserer Ansatz – es enthält _nur_ die Elemente des Formulars und kann nicht mit anderen Attributen des `form` gemischt werden.

### Probleme mit der Benennung von Elementen

Einige Namen werden die JavaScript-Zugriffe auf die Eigenschaften und Elemente des Formulars beeinträchtigen.

Zum Beispiel:

- `<input name="id">` wird gegenüber `<form id="…">` Vorrang haben. Das bedeutet, dass `form.id` sich nicht auf die ID des Formulars bezieht, sondern auf das Element, dessen Name `"id"` ist. Dies wird bei allen anderen Formulareigenschaften der Fall sein, wie `<input name="action">` oder `<input name="post">`.
- `<input name="elements">` wird die `elements`-Sammlung des Formulars unzugänglich machen. Der Verweis `form.elements` wird jetzt auf das individuelle Element verweisen.

Um solche Probleme mit Elementnamen zu vermeiden:

- Verwenden Sie _immer_ die `elements`-Sammlung, um Mehrdeutigkeiten zwischen einem Elementnamen und einer Formulareigenschaft zu vermeiden.
- Verwenden Sie _niemals_ `"elements"` als Elementnamen.

Wenn Sie kein JavaScript verwenden, wird dies kein Problem verursachen.

### Elemente, die als Formularsteuerelemente gelten

Die vom `HTMLFormElement.elements` und `HTMLFormElement.length` eingeschlossenen Elemente sind die folgenden:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle, deren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `"image"` ist, aus historischen Gründen weggelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Keine anderen Elemente sind in der Liste enthalten, die von `elements` zurückgegeben wird, was es zu einer ausgezeichneten Möglichkeit macht, die wichtigsten Elemente beim Verarbeiten von Formularen zu erfassen.

## Beispiele

Erstellung eines neuen Formularelements, Änderung seiner Attribute und anschließendem Absenden:

```js
const f = document.createElement("form"); // Create a form
document.body.appendChild(f); // Add it to the document body
f.action = "/cgi-bin/some.cgi"; // Add action and method attributes
f.method = "POST";
f.submit(); // Call the form's submit() method
```

Extraktion von Informationen aus einem `<form>`-Element und Festlegung einiger seiner Attribute:

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

Einreichen eines `<form>` in einem neuen Fenster:

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

## Weitere Informationen

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("form")}}.
