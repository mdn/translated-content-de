---
title: :read-only
slug: Web/CSS/:read-only
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`:read-only`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente aus (wie bestimmte {{htmlelement("input")}}-Typen und {{htmlelement("textarea")}}), die vom Benutzer nicht bearbeitbar sind. Elemente, bei denen das HTML-Attribut [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) keine Wirkung hat (wie [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio), [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) und alle anderen Nicht-Formularelemente), werden ebenfalls durch die Pseudoklasse `:read-only` ausgewählt. Tatsächlich stimmt `:read-only` mit allem überein, was {{cssxref(":read-write")}} nicht entspricht, wodurch es gleichbedeutend mit `:not(:read-write)` ist.

{{InteractiveExample("CSS Demo: :read-only", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

*:read-only {
  font-weight: bold;
  color: indigo;
}
```

```html interactive-example
<p>Please fill your details:</p>

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
:read-only {
  /* ... */
}
```

## Beispiele

### Bestätigung von Formularinformationen mit schreibgeschützten oder beschreibbaren Steuerelementen

Eine Verwendung von schreibgeschützten Formularsteuerelementen besteht darin, dem Benutzer zu ermöglichen, Informationen, die er möglicherweise in einem früheren Formular eingegeben hat (z. B. Versanddetails), zu überprüfen und zu bestätigen, während er dennoch in der Lage ist, die Informationen zusammen mit dem Rest des Formulars einzureichen. Dies tun wir im folgenden Beispiel.

Die Pseudoklasse `:read-only` wird verwendet, um das gesamte Styling zu entfernen, das die Eingabefelder wie anklickbare Felder aussehen lässt, sodass sie mehr wie schreibgeschützte Absätze wirken. Die Pseudoklasse `:read-write` hingegen wird verwendet, um dem bearbeitbaren `<textarea>` ein ansprechenderes Styling zu verleihen.

```html hidden
<form>
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
</textarea
      >
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

  <div><button type="submit">Amend details and submit</button></div>
</form>
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

button,
label,
input[type="text"],
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
  background-color: #eee;
}

button {
  width: 60%;
  margin: 20px auto;
}
```

```css
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: #ddd;
}

textarea:read-write {
  outline: 1px dashed red;
  outline-offset: 2px;
  border-radius: 5px;
}
```

{{EmbedLiveSample("Bestätigung von Formularinformationen mit schreibgeschützten oder beschreibbaren Steuerelementen", "100%", 620)}}

### Styling von schreibgeschützten Nicht-Formularsteuerelementen

Dieser Selektor wählt nicht nur {{htmlElement("input")}}/{{htmlElement("textarea")}}-Elemente aus — er wählt _jedes_ Element aus, das vom Benutzer nicht bearbeitet werden kann.

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

{{EmbedLiveSample('Styling_von_schreibgeschützten_Nicht-Formularsteuerelementen', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":read-write")}}
- HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
