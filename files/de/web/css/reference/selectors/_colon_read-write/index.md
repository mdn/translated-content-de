---
title: CSS-Pseudoklasse `:read-write`
short-title: :read-write
slug: Web/CSS/Reference/Selectors/:read-write
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:read-write`** steht für ein Element (z. B. `input` oder `textarea`), das von Benutzern bearbeitet werden kann.

{{InteractiveExample("CSS Demo: :read-write", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:read-write {
  background-color: ivory;
  border: 2px solid darkorange;
  border-radius: 5px;
}
```

```html interactive-example
<p>Please fill in your details:</p>

<label for="email">Email Address:</label>
<input id="email" name="email" type="email" value="test@example.com" />

<label for="note">Short note about yourself:</label>
<textarea id="note" name="note">Don't be shy</textarea>

<label for="pic">Your picture:</label>
<input id="pic" name="pic" type="file" />
```

## Syntax

```css
:read-write {
  /* ... */
}
```

## Beispiele

### Formularangaben mit schreibgeschützten Steuerelementen bestätigen

Sie können Formularsteuerelemente mit dem Attribut [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) verwenden, wenn Benutzer zuvor eingegebene Angaben überprüfen sollen, die zusammen mit neuen Daten aus bearbeitbaren Steuerelementen übermittelt werden. Im folgenden Beispiel lässt die Pseudoklasse {{cssxref(":read-only")}} das {{htmlelement("textarea")}} (die Adresse eines Benutzers) wie einen normalen Absatz aussehen. Mit der Pseudoklasse `:read-write` wird das bearbeitbare `<textarea>` (die Lieferanweisungen) hervorgehoben:

```css hidden
body {
  font-family: "Josefin Sans", sans-serif;
  margin: 10px auto;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

label,
textarea {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 5px;
  height: 30px;
}

textarea {
  width: 50%;
}

textarea {
  height: 70px;
  resize: none;
}

label {
  width: 40%;
}
```

```css
textarea:read-only {
  border: 0;
}

textarea:read-write {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

```html
<fieldset>
  <legend>Confirm details</legend>
  <div>
    <label for="address">Address:</label>
    <textarea id="address" name="address" readonly>
123 Choco Mountain,
Awesome Ridge,
CA</textarea>
  </div>
  <div>
    <label for="instructions">Delivery instructions</label>
    <textarea id="instructions" name="instructions"></textarea>
  </div>
</fieldset>
```

{{embedlivesample("confirming_form_details_using_read-only_controls", , "300")}}

### Bearbeitbare Elemente außerhalb von Formularen gestalten

Dieser Selektor wählt nicht nur {{htmlElement("input")}}- und {{htmlElement("textarea")}}-Elemente aus, sondern _jedes_ Element, das von Benutzern bearbeitet werden kann, beispielsweise ein {{htmlelement("p")}}-Element, für das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) festgelegt ist.

```html
<p contenteditable>This paragraph is editable; it is read-write.</p>

<p>This paragraph is not editable; it is read-only.</p>
```

```css
body {
  font-family: sans-serif;
}

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

{{EmbedLiveSample('Styling_read-write_non-form_controls')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":read-only")}}
- HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
