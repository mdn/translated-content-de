---
title: "`:read-only`-CSS-Pseudoklasse"
short-title: :read-only
slug: Web/CSS/Reference/Selectors/:read-only
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die **`:read-only`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt Elemente aus, die von Benutzern nicht bearbeitet werden können, beispielsweise bestimmte Typen von {{htmlelement("input")}} und {{htmlelement("textarea")}}. Sie wählt auch Elemente aus, auf die das HTML-Attribut [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) keine Wirkung hat, etwa [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio), [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) und alle anderen Elemente, die keine Formularelemente sind. Tatsächlich stimmt `:read-only` mit allem überein, mit dem {{cssxref(":read-write")}} nicht übereinstimmt, und ist damit gleichbedeutend mit `:not(:read-write)`.

{{InteractiveExample("CSS Demo: :read-only", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:read-only {
  font-weight: bold;
  color: indigo;
}
```

```html interactive-example
<p>Please enter your details:</p>

<label for="email">Email Address:</label>
<input id="email" name="email" type="email" value="test@example.com" readonly />

<label for="note">Short note about yourself:</label>
<textarea id="note" name="note">Don't be shy</textarea>

<label for="pic">Your picture:</label>
<input id="pic" name="pic" type="file" />
```

## Syntax

```css
:read-only {
  /* ... */
}
```

## Beispiele

### Formularinformationen mit schreibgeschützten oder bearbeitbaren Steuerelementen bestätigen

Schreibgeschützte Formularsteuerelemente können verwendet werden, damit Benutzer Informationen überprüfen und bestätigen können, die sie möglicherweise in einem vorherigen Formular eingegeben haben (beispielsweise Versandangaben). Gleichzeitig können sie die Informationen zusammen mit dem restlichen Formular absenden. Dieses Beispiel zeigt, wie solche Steuerelemente gestaltet werden können.

Die Pseudoklasse `:read-only` entfernt alle Stile, durch die die Eingabefelder wie anklickbare Felder aussehen. Dadurch wirken sie eher wie schreibgeschützte Absätze. Die Pseudoklasse `:read-write` hingegen verleiht dem bearbeitbaren `<textarea>` eine ansprechendere Gestaltung.

```html hidden
<fieldset>
  <legend>Check shipping details</legend>
  <div>
    <label for="name">Name: </label>
    <input id="name" name="name" type="text" value="Mr Soft" readonly />
  </div>
  <div>
    <label for="address">Address: </label>
    <textarea id="address" name="address" readonly>
23 Elastic Way,
Viscous,
Bright Ridge,
CA
</textarea>
  </div>
  <div>
    <label for="postal-code">Zip/postal code: </label>
    <input
      id="postal-code"
      name="postal-code"
      type="text"
      value="94708"
      readonly />
  </div>
</fieldset>

<fieldset>
  <legend>Final instructions</legend>
  <div>
    <label for="sms-confirm">Send confirmation by SMS?</label>
    <input id="sms-confirm" name="sms-confirm" type="checkbox" />
  </div>
  <div>
    <label for="instructions">Any special instructions?</label>
    <textarea id="instructions" name="instructions"></textarea>
  </div>
</fieldset>
```

```css hidden
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
  margin-bottom: 20px;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

label,
input[type="text"],
textarea {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 5px;
  height: 30px;
}

input[type="text"],
textarea {
  width: 50%;
}

textarea {
  height: 110px;
  resize: none;
}

label {
  width: 40%;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  background-color: #eeeeee;
}
```

```css
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: #dddddd;
}

textarea:read-write {
  outline: 1px dashed red;
  outline-offset: 2px;
  border-radius: 5px;
}
```

{{EmbedLiveSample("Confirming form information using read-only or read-write controls", "100%", 620)}}

### Schreibgeschützte Elemente gestalten, die keine Formularelemente sind

Dieser Selektor wählt nicht nur {{htmlElement("input")}}- und {{htmlElement("textarea")}}-Elemente aus, sondern _jedes_ Element, das von Benutzern nicht bearbeitet werden kann.

```html
<p contenteditable>This paragraph is editable; it is read-write.</p>

<p>This paragraph is not editable; it is read-only.</p>
```

```css
p {
  font-size: 150%;
  padding: 5px;
  border-radius: 5px;
}

p:read-only {
  background-color: red;
  color: white;
}

p:read-write {
  background-color: lime;
}
```

{{EmbedLiveSample('Styling_read-only_non-form_controls', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":read-write")}}
- HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
