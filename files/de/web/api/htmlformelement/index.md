---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: b1e1430dd3b1d2e01197231ab0fa6047ed8a221b
---

{{APIRef("HTML DOM")}}

Die Schnittstelle **`HTMLFormElement`** repräsentiert ein {{HTMLElement("form")}} Element im DOM. Sie ermöglicht den Zugriff auf – und in einigen Fällen die Modifikation von – Aspekten des Formulars sowie den Zugriff auf dessen Komponenten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFormElement.acceptCharset`](/de/docs/Web/API/HTMLFormElement/acceptCharset)
  - : Ein String, der den Wert des [`accept-charset`](/de/docs/Web/HTML/Element/form#accept-charset) HTML-Attributs des Formulars widerspiegelt.
- [`HTMLFormElement.action`](/de/docs/Web/API/HTMLFormElement/action)
  - : Ein String, der den Wert des [`action`](/de/docs/Web/HTML/Element/form#action) HTML-Attributs des Formulars widerspiegelt und die URI eines Programms enthält, das die vom Formular übermittelten Informationen verarbeitet.
- [`HTMLFormElement.autocomplete`](/de/docs/Web/API/HTMLFormElement/autocomplete)
  - : Ein String, der den Wert des [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) HTML-Attributs des Formulars widerspiegelt und angibt, ob die Steuerelemente in diesem Formular automatisch vom Browser gefüllt werden können.
- [`HTMLFormElement.encoding`](/de/docs/Web/API/HTMLFormElement/encoding) oder [`HTMLFormElement.enctype`](/de/docs/Web/API/HTMLFormElement/enctype)
  - : Ein String, der den Wert des [`enctype`](/de/docs/Web/HTML/Element/form#enctype) HTML-Attributs des Formulars widerspiegelt und angibt, welche Art von Inhalt verwendet wird, um das Formular an den Server zu übermitteln. Nur spezifizierte Werte können gesetzt werden. Die beiden Eigenschaften sind Synonyme.
- [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle Formularsteuerelemente enthält, die zu diesem Formularelement gehören.
- [`HTMLFormElement.length`](/de/docs/Web/API/HTMLFormElement/length) {{ReadOnlyInline}}
  - : Ein `long`, der die Anzahl der Steuerelemente im Formular widerspiegelt.
- [`HTMLFormElement.name`](/de/docs/Web/API/HTMLFormElement/name)
  - : Ein String, der den Wert des [`name`](/de/docs/Web/HTML/Element/form#name) HTML-Attributs des Formulars widerspiegelt und den Namen des Formulars enthält.
- [`HTMLFormElement.noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)
  - : Ein boolescher Wert, der den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) HTML-Attributs des Formulars widerspiegelt und angibt, ob das Formular nicht validiert werden soll.
- [`HTMLFormElement.method`](/de/docs/Web/API/HTMLFormElement/method)
  - : Ein String, der den Wert des [`method`](/de/docs/Web/HTML/Element/form#method) HTML-Attributs des Formulars widerspiegelt und die HTTP-Methode angibt, die verwendet wird, um das Formular zu übermitteln. Nur spezifizierte Werte können gesetzt werden.
- [`HTMLFormElement.rel`](/de/docs/Web/API/HTMLFormElement/rel)
  - : Ein String, der den Wert des [`rel`](/de/docs/Web/HTML/Attributes/rel) HTML-Attributs des Formulars widerspiegelt und als durch Leerzeichen getrennte Liste von aufgezählten Werten angibt, welche Arten von Links das Formular erzeugt.
- [`HTMLFormElement.relList`](/de/docs/Web/API/HTMLFormElement/relList) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das [`rel`](/de/docs/Web/HTML/Attributes/rel) HTML-Attribut als Liste von Tokens widerspiegelt.
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)
  - : Ein String, der den Wert des [`target`](/de/docs/Web/HTML/Element/form#target) HTML-Attributs des Formulars widerspiegelt und angibt, wo die Ergebnisse der Formularübermittlung angezeigt werden sollen.

Benannte Eingaben werden ihren zugehörigen Formularinstanzen als Eigenschaften hinzugefügt und können native Eigenschaften überschreiben, wenn sie denselben Namen teilen (z.B. wird ein Formular mit einer Eingabe namens `action` seine `action`-Eigenschaft diese Eingabe zurückgeben statt des [`action`](/de/docs/Web/HTML/Element/form#action)-Attributs des Formulars).

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)
  - : Gibt `true` zurück, wenn die untergeordneten Steuerelemente des Elements einer [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) unterliegen und diese Einschränkungen erfüllen; gibt `false` zurück, wenn einige Steuerelemente ihre Einschränkungen nicht erfüllen. Löst ein Ereignis namens [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) bei jedem Steuerelement aus, das seine Einschränkungen nicht erfüllt; solche Steuerelemente gelten als ungültig, wenn das Ereignis nicht abgebrochen wird. Es liegt am Programmierer zu entscheiden, wie auf `false` reagiert wird.
- [`reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity)
  - : Gibt `true` zurück, wenn die untergeordneten Steuerelemente des Elements ihre [Validierungseinschränkungen](/de/docs/Web/HTML/Constraint_validation) erfüllen. Wenn `false` zurückgegeben wird, werden abbruchfähige [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignisse für jedes ungültige Kind ausgelöst und Validierungsprobleme dem Benutzer mitgeteilt.
- [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit)
  - : Fordert an, dass das Formular mit dem angegebenen Sende-Button und dessen entsprechender Konfiguration gesendet wird.
- [`reset()`](/de/docs/Web/API/HTMLFormElement/reset)
  - : Setzt das Formular in seinen Anfangszustand zurück.
- [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)
  - : Sendet das Formular an den Server.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle ab.

- [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)
  - : Das `formdata`-Ereignis wird ausgelöst, nachdem die Eintragsliste, die die Daten des Formulars darstellt, erstellt wurde.
- [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)
  - : Das `reset`-Ereignis wird ausgelöst, wenn ein Formular zurückgesetzt wird.
- [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
  - : Das `submit`-Ereignis wird ausgelöst, wenn ein Formular abgesendet wird.

## Anwendungshinweise

### Erhalten eines Formularelement-Objekts

Um ein `HTMLFormElement`-Objekt zu erhalten, können Sie einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) mit [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden, oder Sie können eine Liste aller Formulare im Dokument über deren [`forms`](/de/docs/Web/API/Document/forms)-Eigenschaft abrufen.

[`Document.forms`](/de/docs/Web/API/Document/forms) gibt ein Array von `HTMLFormElement`-Objekten zurück, das jedes der Formulare auf der Seite auflistet. Sie können dann eine der folgenden Syntaxen verwenden, um ein einzelnes Formular zu erhalten:

- `document.forms[index]`
  - : Gibt das Formular an dem angegebenen `index` im Array der Formulare zurück.
- `document.forms[id]`
  - : Gibt das Formular zurück, dessen ID `id` ist.
- `document.forms[name]`
  - : Gibt das Formular zurück, dessen `name`-Attributswert `name` ist.

### Zugriff auf die Elemente des Formulars

Sie können auf die Liste der datenhaltenden Elemente des Formulars zugreifen, indem Sie die [`elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft des Formulars untersuchen. Diese gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle Eingabeelemente des Benutzers im Formular auflistet, sowohl diejenigen, die Nachkommen des `<form>` sind, als auch diejenigen, die mit ihren `form`-Attributen Mitglieder des Formulars werden.

Sie können auch das Element des Formulars abrufen, indem Sie das `name`-Attribut als Schlüssel des Formulars verwenden, aber die Verwendung von `elements` ist ein besserer Ansatz – es enthält _nur_ die Elemente des Formulars und kann nicht mit anderen Attributen des Formulars vermischt werden.

### Probleme mit der Benennung von Elementen

Einige Namen können den JavaScript-Zugriff auf die Eigenschaften und Elemente des Formulars stören.

Zum Beispiel:

- `<input name="id">` wird Vorrang vor `<form id="…">` haben. Das bedeutet, dass `form.id` nicht auf die ID des Formulars verweist, sondern auf das Element, dessen Name `"id"` ist. Dies wird auch bei anderen Formulareigenschaften der Fall sein, wie `<input name="action">` oder `<input name="post">`.
- `<input name="elements">` macht die `elements`-Sammlung des Formulars unzugänglich. Der Verweis `form.elements` bezieht sich jetzt auf das einzelne Element.

Um solche Probleme mit Elementnamen zu vermeiden:

- Verwenden Sie _immer_ die `elements`-Sammlung, um Mehrdeutigkeiten zwischen einem Elementnamen und einer Formulareigenschaft zu vermeiden.
- Verwenden Sie _nie_ `"elements"` als Elementnamen.

Wenn Sie kein JavaScript verwenden, wird dies kein Problem darstellen.

### Elemente, die als Formularsteuerelemente betrachtet werden

Die von `HTMLFormElement.elements` und `HTMLFormElement.length` einbezogenen Elemente sind die folgenden:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle, deren [`type`](/de/docs/Web/HTML/Element/input#type) `"image"` ist, aus historischen Gründen ausgelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Keine anderen Elemente sind in der Liste enthalten, die von `elements` zurückgegeben wird, was es zu einem ausgezeichneten Weg macht, um an die wichtigsten Elemente bei der Verarbeitung von Formularen zu gelangen.

## Beispiele

Ein neues Formularelement erstellen, seine Attribute modifizieren und es dann senden:

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

Ein `<form>` in einem neuen Fenster einreichen:

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
