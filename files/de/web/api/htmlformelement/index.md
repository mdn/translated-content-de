---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: 56cbe48e4426172461d9297523b68716922690e5
---

{{APIRef("HTML DOM")}}

Das **`HTMLFormElement`**-Interface repräsentiert ein {{HTMLElement("form")}}-Element im DOM. Es ermöglicht den Zugriff auf – und in einigen Fällen die Änderung von – Aspekten des Formulars, sowie den Zugriff auf dessen Komponenten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle Formularsteuerelemente enthält, die zu diesem Formularelement gehören.
- [`HTMLFormElement.length`](/de/docs/Web/API/HTMLFormElement/length) {{ReadOnlyInline}}
  - : Ein `long`, das die Anzahl der Steuerelemente im Formular widerspiegelt.
- [`HTMLFormElement.name`](/de/docs/Web/API/HTMLFormElement/name)
  - : Ein String, der den Wert des [`name`](/de/docs/Web/HTML/Element/form#name)-HTML-Attributes des Formulars widerspiegelt, und den Namen des Formulars enthält.
- [`HTMLFormElement.method`](/de/docs/Web/API/HTMLFormElement/method)
  - : Ein String, der den Wert des [`method`](/de/docs/Web/HTML/Element/form#method)-HTML-Attributes des Formulars widerspiegelt, und die HTTP-Methode angibt, die zum Absenden des Formulars verwendet wird. Es können nur spezifizierte Werte gesetzt werden.
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)
  - : Ein String, der den Wert des [`target`](/de/docs/Web/HTML/Element/form#target)-HTML-Attributes des Formulars widerspiegelt, und angibt, wo die Ergebnisse der Formulareinsendung angezeigt werden sollen.
- [`HTMLFormElement.action`](/de/docs/Web/API/HTMLFormElement/action)
  - : Ein String, der den Wert des [`action`](/de/docs/Web/HTML/Element/form#action)-HTML-Attributes des Formulars widerspiegelt, und die URI eines Programms enthält, das die vom Formular übermittelten Informationen verarbeitet.
- [`HTMLFormElement.encoding`](/de/docs/Web/API/HTMLFormElement/encoding) oder [`HTMLFormElement.enctype`](/de/docs/Web/API/HTMLFormElement/enctype)
  - : Ein String, der den Wert des [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-HTML-Attributes des Formulars widerspiegelt, und den Inhaltstyp angibt, der verwendet wird, um das Formular an den Server zu übermitteln. Es können nur spezifizierte Werte gesetzt werden. Die beiden Eigenschaften sind Synonyme.
- [`HTMLFormElement.acceptCharset`](/de/docs/Web/API/HTMLFormElement/acceptCharset)
  - : Ein String, der den Wert des [`accept-charset`](/de/docs/Web/HTML/Element/form#accept-charset)-HTML-Attributes des Formulars widerspiegelt.
- [`HTMLFormElement.autocomplete`](/de/docs/Web/API/HTMLFormElement/autocomplete)
  - : Ein String, der den Wert des [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete)-HTML-Attributes des Formulars widerspiegelt, und angibt, ob die Steuerelemente dieses Formulars ihre Werte automatisch von dem Browser ausgefüllt bekommen können.
- [`HTMLFormElement.noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)
  - : Ein boolescher Wert, der den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-HTML-Attributes des Formulars widerspiegelt, und angibt, ob das Formular nicht validiert werden soll.

Benannte Eingaben werden ihren Eigentümer-Formularinstanzen als Eigenschaften hinzugefügt und können native Eigenschaften überschreiben, wenn sie denselben Namen haben (z. B. wird ein Formular mit einer Eingabe namens `action` seine `action`-Eigenschaft so zurückgeben, dass diese Eingabe anstelle des [`action`](/de/docs/Web/HTML/Element/form#action)-HTML-Attributes des Formulars zurückgegeben wird).

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)
  - : Gibt `true` zurück, wenn die Kind-Steuerelemente des Elements einer [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) unterliegen und diese Einschränkungen erfüllen; gibt `false` zurück, wenn einige Steuerelemente ihre Einschränkungen nicht erfüllen. Löst ein Ereignis namens [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) bei jedem Steuerelement aus, das seine Einschränkungen nicht erfüllt; solche Steuerelemente gelten als ungültig, wenn das Ereignis nicht abgebrochen wird. Es liegt am Programmierer zu entscheiden, wie auf `false` reagiert wird.
- [`reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity)
  - : Gibt `true` zurück, wenn die Kind-Steuerelemente des Elements ihre [Validierungseinschränkungen](/de/docs/Web/HTML/Constraint_validation) erfüllen. Wenn `false` zurückgegeben wird, werden abbrechbare [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignisse für jedes ungültige Kind ausgelöst und Validierungsprobleme dem Benutzer gemeldet.
- [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit)
  - : Fordert an, dass das Formular mit dem angegebenen Submit-Button und dessen entsprechender Konfiguration gesendet wird.
- [`reset()`](/de/docs/Web/API/HTMLFormElement/reset)
  - : Setzt das Formular in seinen Anfangszustand zurück.
- [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)
  - : Sendet das Formular an den Server.

## Ereignisse

Hören Sie auf diese Ereignisse, indem Sie `addEventListener()` verwenden oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)
  - : Das `formdata`-Ereignis wird ausgelöst, nachdem die Eintragsliste, die die Formulardaten darstellt, erstellt wurde.
- [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)
  - : Das `reset`-Ereignis wird ausgelöst, wenn ein Formular zurückgesetzt wird.
- [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
  - : Das `submit`-Ereignis wird ausgelöst, wenn ein Formular gesendet wird.

## Anwendungshinweise

### Ein Formularelement-Objekt erhalten

Um ein `HTMLFormElement`-Objekt zu erhalten, können Sie einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) mit [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden oder eine Liste aller Formulare im Dokument über seine [`forms`](/de/docs/Web/API/Document/forms)-Eigenschaft abrufen.

[`Document.forms`](/de/docs/Web/API/Document/forms) gibt ein Array von `HTMLFormElement`-Objekten zurück, die jedes der Formulare auf der Seite auflisten. Sie können dann eine der folgenden Syntaxen verwenden, um ein einzelnes Formular zu erhalten:

- `document.forms[index]`
  - : Gibt das Formular am angegebenen `Index` im Array der Formulare zurück.
- `document.forms[id]`
  - : Gibt das Formular zurück, dessen ID `id` ist.
- `document.forms[name]`
  - : Gibt das Formular zurück, dessen `name`-Attribut den Wert `name` hat.

### Zugriff auf die Elemente des Formulars

Sie können auf die Liste der datentragenden Elemente des Formulars zugreifen, indem Sie die [`elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft des Formulars untersuchen. Dies gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle Benutzerdateneintragselemente des Formulars auflistet, sowohl diejenigen, die Nachkommen des `<form>` sind, als auch solche, die über ihre `form`-Attribute Mitglieder des Formulars wurden.

Sie können auch auf das Element des Formulars zugreifen, indem Sie sein `name`-Attribut als Schlüssel des `form` verwenden, aber die Verwendung von `elements` ist ein besserer Ansatz – es enthält _nur_ die Elemente des Formulars und kann nicht mit anderen Attributen des `form` vermischt werden.

### Probleme mit der Benennung von Elementen

Einige Namen stehen dem JavaScript-Zugriff auf die Eigenschaften und Elemente des Formulars im Weg.

Zum Beispiel:

- `<input name="id">` wird Vorrang vor `<form id="…">` haben. Das bedeutet, dass `form.id` sich nicht mehr auf die ID des Formulars bezieht, sondern auf das Element, dessen Name `"id"` ist. Dies wird bei allen anderen Formulareigenschaften der Fall sein, wie bei `<input name="action">` oder `<input name="post">`.
- `<input name="elements">` macht die `elements`-Sammlung des Formulars unzugänglich. Die Referenz `form.elements` wird nun auf das einzelne Element verweisen.

Um solche Probleme mit Elementnamen zu vermeiden:

- _Verwenden Sie immer_ die `elements`-Sammlung, um Mehrdeutigkeiten zwischen einem Elementnamen und einer Formulareigenschaft zu vermeiden.
- _Verwenden Sie niemals_ `"elements"` als Elementnamen.

Wenn Sie kein JavaScript verwenden, wird dies kein Problem verursachen.

### Elemente, die als Formularsteuerelemente gelten

Die von `HTMLFormElement.elements` und `HTMLFormElement.length` eingeschlossenen Elemente sind die folgenden:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass alle, deren [`type`](/de/docs/Web/HTML/Element/input#type) `"image"` ist, aus historischen Gründen ausgeschlossen sind)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Keine anderen Elemente sind in der von `elements` zurückgegebenen Liste enthalten, was es zu einem hervorragenden Weg macht, um die wichtigsten Elemente beim Verarbeiten von Formularen zu erreichen.

## Beispiele

Ein neues Formularelement erstellen, seine Attribute ändern und es dann absenden:

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

Ein `<form>` in ein neues Fenster übermitteln:

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
