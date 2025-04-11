---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLFormElement`**-Interface repräsentiert ein {{HTMLElement("form")}}-Element im DOM. Es ermöglicht den Zugriff auf – und in einigen Fällen die Änderung von – Aspekten des Formulars sowie den Zugriff auf seine Komponenten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFormElement.acceptCharset`](/de/docs/Web/API/HTMLFormElement/acceptCharset)
  - : Ein String, der den Wert des `[accept-charset]`(/de/docs/Web/HTML/Reference/Elements/form#accept-charset) HTML-Attributs des Formulars widerspiegelt.
- [`HTMLFormElement.action`](/de/docs/Web/API/HTMLFormElement/action)
  - : Ein String, der den Wert des `[action]`(/de/docs/Web/HTML/Reference/Elements/form#action) HTML-Attributs des Formulars widerspiegelt, und die URI eines Programms enthält, das die vom Formular übermittelten Informationen verarbeitet.
- [`HTMLFormElement.autocomplete`](/de/docs/Web/API/HTMLFormElement/autocomplete)
  - : Ein String, der den Wert des `[autocomplete]`(/de/docs/Web/HTML/Reference/Attributes/autocomplete) HTML-Attributs des Formulars widerspiegelt und angibt, ob die Benutzeroberflächenelemente in diesem Formular automatisch vom Browser mit Werten gefüllt werden können.
- [`HTMLFormElement.encoding`](/de/docs/Web/API/HTMLFormElement/encoding) oder [`HTMLFormElement.enctype`](/de/docs/Web/API/HTMLFormElement/enctype)
  - : Ein String, der den Wert des `[enctype]`(/de/docs/Web/HTML/Reference/Elements/form#enctype) HTML-Attributs des Formulars widerspiegelt und den Typ des Inhalts beschreibt, der verwendet wird, um das Formular an den Server zu senden. Nur angegebene Werte können gesetzt werden. Die beiden Eigenschaften sind Synonyme.
- [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle zum Formular gehörenden Steuerelemente enthält.
- [`HTMLFormElement.length`](/de/docs/Web/API/HTMLFormElement/length) {{ReadOnlyInline}}
  - : Ein `long`, der die Anzahl der Steuerelemente im Formular widerspiegelt.
- [`HTMLFormElement.name`](/de/docs/Web/API/HTMLFormElement/name)
  - : Ein String, der den Wert des `[name]`(/de/docs/Web/HTML/Reference/Elements/form#name) HTML-Attributs des Formulars widerspiegelt und den Namen des Formulars enthält.
- [`HTMLFormElement.noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)
  - : Ein boolescher Wert, der den Wert des `[novalidate]`(/de/docs/Web/HTML/Reference/Elements/form#novalidate) HTML-Attributs des Formulars widerspiegelt und angibt, ob das Formular nicht validiert werden soll.
- [`HTMLFormElement.method`](/de/docs/Web/API/HTMLFormElement/method)
  - : Ein String, der den Wert des `[method]`(/de/docs/Web/HTML/Reference/Elements/form#method) HTML-Attributs des Formulars widerspiegelt und die HTTP-Methode angibt, die zum Absenden des Formulars verwendet wird. Nur angegebene Werte können gesetzt werden.
- [`HTMLFormElement.rel`](/de/docs/Web/API/HTMLFormElement/rel)
  - : Ein String, der den Wert des `[rel]`(/de/docs/Web/HTML/Reference/Attributes/rel) HTML-Attributs des Formulars widerspiegelt, das angibt, welche Arten von Links das Formular als durch Leerzeichen getrennte Liste von enumerierten Werten erstellt.
- [`HTMLFormElement.relList`](/de/docs/Web/API/HTMLFormElement/relList) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das `[rel]`(/de/docs/Web/HTML/Reference/Attributes/rel) HTML-Attribut als Liste von Token widerspiegelt.
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)
  - : Ein String, der den Wert des `[target]`(/de/docs/Web/HTML/Reference/Elements/form#target) HTML-Attributs des Formulars widerspiegelt und angibt, wo die Ergebnisse angezeigt werden sollen, die durch das Absenden des Formulars empfangen werden.

Benannte Eingabefelder werden als Eigenschaften zu ihrem Besitzerformular-Instanz hinzugefügt und können native Eigenschaften überschreiben, wenn sie denselben Namen teilen (z.B. wird das `action`-Eigenschaft eines Formulars mit einem Eingabefeld namens `action` diesen Eingabewert statt dem `[action]`(/de/docs/Web/HTML/Reference/Elements/form#action) HTML-Attribut des Formulars zurückgeben).

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)
  - : Gibt `true` zurück, wenn die untergeordneten Steuerelemente des Elements der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) unterliegen und diese Einschränkungen erfüllen; gibt `false` zurück, wenn einige Steuerelemente ihre Einschränkungen nicht erfüllen. Ein Ereignis namens [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) wird bei jedem Steuerelement ausgelöst, das seine Einschränkungen nicht erfüllt; solche Steuerelemente gelten als ungültig, wenn das Ereignis nicht abgebrochen wird. Es liegt am Programmierer zu entscheiden, wie auf `false` reagiert wird.
- [`reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity)
  - : Gibt `true` zurück, wenn die untergeordneten Steuerelemente des Elements ihre [Validierungsbeschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllen. Wenn `false` zurückgegeben wird, werden abbrechbare [`ungültige`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignisse für jedes ungültige Kind ausgelöst und Validierungsprobleme dem Benutzer gemeldet.
- [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit)
  - : Fordert an, dass das Formular unter Verwendung des angegebenen Absende-Buttons und dessen entsprechender Konfiguration abgesendet wird.
- [`reset()`](/de/docs/Web/API/HTMLFormElement/reset)
  - : Setzt das Formular auf seinen Anfangszustand zurück.
- [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)
  - : Sendet das Formular an den Server ab.

## Ereignisse

Verwenden Sie `addEventListener()`, um auf diese Ereignisse zu hören, oder weisen Sie dieser Schnittstelle einen Ereignis-Listener zur `oneventname`-Eigenschaft zu.

- [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)
  - : Das `formdata`-Ereignis wird ausgelöst, nachdem die Eintragsliste, die die Daten des Formulars darstellt, erstellt wurde.
- [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)
  - : Das `reset`-Ereignis wird ausgelöst, wenn ein Formular zurückgesetzt wird.
- [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
  - : Das `submit`-Ereignis wird ausgelöst, wenn ein Formular abgeschickt wird.

## Verwendungshinweise

### Ein Formularelement-Objekt erhalten

Um ein `HTMLFormElement`-Objekt zu erhalten, können Sie einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) mit [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden oder eine Liste aller Formulare im Dokument mit der [`forms`](/de/docs/Web/API/Document/forms) Eigenschaft abrufen.

[`Document.forms`](/de/docs/Web/API/Document/forms) gibt ein Array von `HTMLFormElement`-Objekten zurück, das jedes der Formulare auf der Seite auflistet. Sie können dann eine der folgenden Syntaxen verwenden, um ein einzelnes Formular zu erhalten:

- `document.forms[index]`
  - : Gibt das Formular am angegebenen `index` im Array der Formulare zurück.
- `document.forms[id]`
  - : Gibt das Formular mit der ID `id` zurück.
- `document.forms[name]`
  - : Gibt das Formular zurück, dessen `name`-Attribut den Wert `name` hat.

### Zugriff auf die Elemente des Formulars

Sie können auf die Liste der datentragenden Elemente des Formulars zugreifen, indem Sie die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) Eigenschaft des Formulars untersuchen. Dies gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle Benutzerdateneingabeelemente des Formulars auflistet, sowohl die, die Nachfahren des `<form>` sind, als auch die, die mittels ihres `form`-Attributs Mitglieder des Formulars sind.

Sie können auch auf das Element des Formulars zugreifen, indem Sie sein `name`-Attribut als Schlüssel des Formulars verwenden, aber die Verwendung von `elements` ist ein besserer Ansatz – es enthält _nur_ die Elemente des Formulars und kann nicht mit anderen Attributen des Formulars vermischt werden.

### Probleme mit dem Benennen von Elementen

Einige Namen werden den JavaScript-Zugriff auf die Eigenschaften und Elemente des Formulars beeinträchtigen.

Beispielsweise:

- `<input name="id">` wird Vorrang vor `<form id="…">` haben. Das bedeutet, dass `form.id` nicht auf die ID des Formulars verweist, sondern auf das Element, dessen Name `"id"` ist. Dies wird auch bei anderen Eigenschaften des Formulars der Fall sein, wie `<input name="action">` oder `<input name="post">`.
- `<input name="elements">` macht die `elements`-Sammlung des Formulars unzugänglich. Die Referenz `form.elements` verweist nun auf das individuelle Element.

Um solche Probleme mit Elementnamen zu vermeiden:

- Verwenden Sie _immer_ die `elements`-Sammlung, um Mehrdeutigkeiten zwischen einem Elementnamen und einer Formulareigenschaft zu vermeiden.
- Verwenden Sie _niemals_ `"elements"` als Elementnamen.

Wenn Sie kein JavaScript verwenden, wird dies kein Problem verursachen.

### Elemente, die als Formularsteuerelemente betrachtet werden

Die Elemente, die von `HTMLFormElement.elements` und `HTMLFormElement.length` eingeschlossen werden, sind die folgenden:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle, deren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `"image"` ist, aus historischen Gründen ausgeschlossen sind)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Keine anderen Elemente sind in der von `elements` zurückgegebenen Liste enthalten, was sie zu einem hervorragenden Mittel macht, um die wichtigsten Elemente bei der Formularverarbeitung zu erfassen.

## Beispiele

Erstellen eines neuen Formularelements, Ändern seiner Attribute und Absenden:

```js
const f = document.createElement("form"); // Create a form
document.body.appendChild(f); // Add it to the document body
f.action = "/cgi-bin/some.cgi"; // Add action and method attributes
f.method = "POST";
f.submit(); // Call the form's submit() method
```

Informationen aus einem `<form>`-Element extrahieren und einige seiner Attribute setzen:

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

Ein `<form>` in einem neuen Fenster absenden:

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

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("form")}}.
