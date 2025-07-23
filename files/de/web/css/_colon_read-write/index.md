---
title: :read-write
slug: Web/CSS/:read-write
l10n:
  sourceCommit: 47a781b6d88aead86ac5624cf53955fe5c8b81e0
---

Die **`:read-write`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element (wie `input` oder `textarea`), das vom Benutzer bearbeitet werden kann.

{{InteractiveExample("CSS Demo: :read-write", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
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

<form>
  <label for="email">Email Address:</label>
  <input id="email" name="email" type="email" value="test@example.com" />

  <label for="note">Short note about yourself:</label>
  <textarea id="note" name="note">Don't be shy</textarea>

  <label for="pic">Your picture:</label>
  <input id="pic" name="pic" type="file" />

  <input type="submit" value="Submit form" />
</form>
```

## Syntax

```css
:read-write {
  /* ... */
}
```

## Beispiele

### Bestätigung von Formularangaben mittels schreibgeschützter Steuerelemente

Sie können [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-Formularsteuerelemente verwenden, wenn Sie möchten, dass ein Benutzer Informationen überprüft, die er zuvor eingegeben hat und die Sie zusammen mit neuen Daten in schreibbaren Steuerelementen übermitteln möchten. Im folgenden Beispiel wird die {{cssxref(":read-only")}} Pseudoklasse verwendet, um die {{htmlelement("textarea")}} (die Adresse eines Benutzers) wie einen normalen Absatz aussehen zu lassen. Die `:read-write` Pseudoklasse bietet eine Möglichkeit, das bearbeitbare `<textarea>` (die Lieferanweisungen) hervorzuheben:

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

button,
label,
textarea {
  display: block;
  font-family: inherit;
  font-size: 100%;
  padding: 0;
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
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

```html
<form>
  <fieldset>
    <legend>Confirm details</legend>
    <div>
      <label for="address">Address:</label>
      <textarea id="address" name="address" readonly>
123 Choco Mountain,
Awesome Ridge,
CA</textarea
      >
    </div>
    <div>
      <label for="instructions">Delivery instructions</label>
      <textarea id="instructions" name="instructions"></textarea>
    </div>
  </fieldset>
  <button type="submit">Confirm</button>
</form>
```

{{embedlivesample("confirming_form_details_using_read-only_controls", , "300")}}

### Styling von schreibbaren Nicht-Formular-Steuerelementen

Dieser Selektor wählt nicht nur {{htmlElement("input")}}/{{htmlElement("textarea")}}-Elemente aus – er wird _jedes_ Element auswählen, das vom Benutzer bearbeitet werden kann, wie ein {{htmlelement("p")}}-Element mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

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
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
