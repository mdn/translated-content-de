---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement`**-Schnittstelle repräsentiert ein {{HTMLElement("form")}}-Element im DOM. Sie ermöglicht den Zugriff auf Aspekte des Formulars und in manchen Fällen deren Änderung sowie den Zugriff auf seine Komponentenelemente.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), die alle Formularsteuerelemente enthält, die zu diesem Formularelement gehören.
- [`HTMLFormElement.length`](/de/docs/Web/API/HTMLFormElement/length) {{ReadOnlyInline}}
  - : Ein `long`, das die Anzahl der Steuerelemente im Formular widerspiegelt.
- [`HTMLFormElement.name`](/de/docs/Web/API/HTMLFormElement/name)
  - : Ein String, der den Wert des [`name`](/de/docs/Web/HTML/Element/form#name)-HTML-Attributs des Formulars widerspiegelt und den Namen des Formulars enthält.
- [`HTMLFormElement.method`](/de/docs/Web/API/HTMLFormElement/method)
  - : Ein String, der den Wert des [`method`](/de/docs/Web/HTML/Element/form#method)-HTML-Attributs des Formulars widerspiegelt, der die HTTP-Methode angibt, die zum Senden des Formulars verwendet wird. Es können nur festgelegte Werte gesetzt werden.
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)
  - : Ein String, der den Wert des [`target`](/de/docs/Web/HTML/Element/form#target)-HTML-Attributs des Formulars widerspiegelt und angibt, wo die Ergebnisse des abgeschickten Formulars angezeigt werden sollen.
- [`HTMLFormElement.action`](/de/docs/Web/API/HTMLFormElement/action)
  - : Ein String, der den Wert des [`action`](/de/docs/Web/HTML/Element/form#action)-HTML-Attributs des Formulars widerspiegelt und die URI eines Programms enthält, das die vom Formular übermittelten Informationen verarbeitet.
- [`HTMLFormElement.encoding`](/de/docs/Web/API/HTMLFormElement/encoding) oder [`HTMLFormElement.enctype`](/de/docs/Web/API/HTMLFormElement/enctype)
  - : Ein String, der den Wert des [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-HTML-Attributs des Formulars widerspiegelt und den Typ des Inhalts angibt, der zum Übermitteln des Formulars zum Server verwendet wird. Es können nur festgelegte Werte gesetzt werden. Die beiden Eigenschaften sind Synonyme.
- [`HTMLFormElement.acceptCharset`](/de/docs/Web/API/HTMLFormElement/acceptCharset)
  - : Ein String, der den Wert des [`accept-charset`](/de/docs/Web/HTML/Element/form#accept-charset)-HTML-Attributs des Formulars widerspiegelt und die Zeichenkodierung repräsentiert, die der Server akzeptiert.
- [`HTMLFormElement.autocomplete`](/de/docs/Web/API/HTMLFormElement/autocomplete)
  - : Ein String, der den Wert des [`autocomplete`](/de/docs/Web/HTML/Element/form#autocomplete)-HTML-Attributs des Formulars widerspiegelt und angibt, ob die Steuerungen in diesem Formular automatisch vom Browser ausgefüllt werden können.
- [`HTMLFormElement.noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)
  - : Ein boolescher Wert, der den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-HTML-Attributs des Formulars widerspiegelt und angibt, ob das Formular nicht validiert werden soll.

Benannte Eingaben werden ihrer Besitzerformularinstanz als Eigenschaften hinzugefügt und können native Eigenschaften überschreiben, wenn sie denselben Namen haben (z.B. wird ein Formular mit einer Eingabe namens `action` seine `action`-Eigenschaft zurückgeben, anstatt des [`action`](/de/docs/Web/HTML/Element/form#action)-HTML-Attributs des Formulars).

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)
  - : Gibt `true` zurück, wenn die Kindsteuerungen des Elements einer [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) unterliegen und diese Einschränkungen erfüllen; gibt `false` zurück, wenn einige Steuerungen ihre Einschränkungen nicht erfüllen. Löst ein Ereignis namens [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) an jeder Steuerung aus, welche die Einschränkungen nicht erfüllt; solche Steuerungen gelten als ungültig, wenn das Ereignis nicht abgebrochen wird. Es liegt im Ermessen des Programmierers, wie auf `false` reagiert wird.
- [`reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity)
  - : Gibt `true` zurück, wenn die Kindsteuerungen des Elements ihre [Validierungseinschränkungen](/de/docs/Web/HTML/Constraint_validation) erfüllen. Wenn `false` zurückgegeben wird, werden abbrechbare [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignisse für jedes ungültige Kind ausgelöst und Validierungsprobleme dem Benutzer gemeldet.
- [`requestSubmit()`](/de/docs/Web/API/HTMLFormElement/requestSubmit)
  - : Fordert an, dass das Formular mit dem angegebenen Absenden-Button und der entsprechenden Konfiguration eingereicht wird.
- [`reset()`](/de/docs/Web/API/HTMLFormElement/reset)
  - : Setzt das Formular auf seinen ursprünglichen Zustand zurück.
- [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)
  - : Sendet das Formular an den Server.

## Ereignisse

Fügen Sie diese Ereignisse mit `addEventListener()` hinzu, oder weisen Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zu.

- [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)
  - : Das `formdata`-Ereignis wird ausgelöst, nachdem die Eintragsliste, die die Formulardaten darstellt, erstellt wurde.
- [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)
  - : Das `reset`-Ereignis wird ausgelöst, wenn ein Formular zurückgesetzt wird.
- [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
  - : Das `submit`-Ereignis wird ausgelöst, wenn ein Formular gesendet wird.

## Hinweise zur Nutzung

### Ein Formularelement-Objekt erhalten

Um ein `HTMLFormElement`-Objekt zu erhalten, können Sie einen [CSS-Selektor](/de/docs/Web/CSS/CSS_selectors) mit [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden, oder Sie können eine Liste aller Formulare im Dokument mit der [`forms`](/de/docs/Web/API/Document/forms)-Eigenschaft erhalten.

[`Document.forms`](/de/docs/Web/API/Document/forms) gibt ein Array von `HTMLFormElement`-Objekten zurück, das jedes der Formulare auf der Seite auflistet. Sie können dann jede der folgenden Syntaxen verwenden, um ein einzelnes Formular zu erhalten:

- `document.forms[index]`
  - : Gibt das Formular am angegebenen `index` im Array der Formulare zurück.
- `document.forms[id]`
  - : Gibt das Formular zurück, dessen ID `id` ist.
- `document.forms[name]`
  - : Gibt das Formular zurück, dessen `name`-Attributwert `name` ist.

### Zugriff auf die Elemente des Formulars

Sie können auf die Liste der datentragenden Elemente des Formulars zugreifen, indem Sie die [`elements`](/de/docs/Web/API/HTMLFormElement/elements)-Eigenschaft des Formulars untersuchen. Dies gibt eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) zurück, die alle Daten-Nutzereingabeelemente des Formulars auflistet, sowohl diejenigen, die Nachkommen des `<form>` sind, als auch diejenigen, die durch ihre `form`-Attribute zu Mitgliedern des Formulars gemacht werden.

Sie können auch auf das Element des Formulars zugreifen, indem Sie das `name`-Attribut als Schlüssel des `form` verwenden, aber die Verwendung von `elements` ist der bessere Ansatz – es enthält _nur_ die Elemente des Formulars und kann nicht mit anderen Attributen des `form` vermischt werden.

### Probleme beim Benennen von Elementen

Einige Namen werden den JavaScript-Zugriff auf die Eigenschaften und Elemente des Formulars beeinträchtigen.

Zum Beispiel:

- `<input name="id">` hat Vorrang vor `<form id="…">`. Das bedeutet, dass `form.id` sich nicht auf die ID des Formulars beziehen wird, sondern auf das Element, dessen Name `"id"` ist. Dies wird für jede andere Formulaireigenschaft der Fall sein, wie `<input name="action">` oder `<input name="post">`.
- `<input name="elements">` wird die `elements`-Sammlung des Formulars unzugänglich machen. Die Referenz `form.elements` wird nun auf das individuelle Element verweisen.

Um solche Probleme mit Elementnamen zu vermeiden:

- Verwenden Sie _immer_ die `elements`-Sammlung, um Mehrdeutigkeiten zwischen einem Elementnamen und einer Formulareigenschaft zu vermeiden.
- Verwenden Sie _niemals_ `"elements"` als Elementnamen.

Wenn Sie kein JavaScript verwenden, wird dies kein Problem verursachen.

### Elemente, die als Formularsteuerungen betrachtet werden

Die von `HTMLFormElement.elements` und `HTMLFormElement.length` einbezogenen Elemente sind die folgenden:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (mit der Ausnahme, dass solche, deren [`type`](/de/docs/Web/HTML/Element/input#type) `"image"` ist, aus historischen Gründen ausgelassen werden)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Keine anderen Elemente sind in der von `elements` zurückgegebenen Liste enthalten, was sie zu einer hervorragenden Möglichkeit macht, die wichtigsten Elemente bei der Verarbeitung von Formularen zu erhalten.

## Beispiele

Erstellen eines neuen Formularelements, Ändern seiner Attribute und anschließendes Senden:

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
