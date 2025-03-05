---
title: ":read-only"
slug: Web/CSS/:read-only
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:read-only`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente (wie bestimmte {{htmlelement("input")}}-Typen und {{htmlelement("textarea")}}), die vom Benutzer nicht bearbeitet werden können. Elemente, bei denen das HTML-Attribut [`readonly`](/de/docs/Web/HTML/Attributes/readonly) keine Wirkung hat (wie [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio), [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) und alle anderen Nicht-Formular-Elemente), werden ebenfalls von der `:read-only` Pseudoklasse ausgewählt. Tatsächlich passt `:read-only` auf alles, was nicht mit {{cssxref(":read-write")}} übereinstimmt, was es äquivalent zu `:not(:read-write)` macht.

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

Ein Anwendungsfall für schreibgeschützte Formularsteuerelemente ist es, dem Benutzer zu ermöglichen, Informationen zu überprüfen und zu bestätigen, die er möglicherweise in einem vorherigen Formular eingegeben hat (z.B. Lieferdaten), während er die Informationen zusammen mit dem Rest des Formulars übermitteln kann. Genau dies tun wir im folgenden Beispiel.

Die `:read-only` Pseudoklasse wird verwendet, um alle Formatierungen zu entfernen, die die Eingabefelder wie klickbare Felder aussehen lassen, damit sie mehr wie schreibgeschützte Absätze wirken. Die `:read-write` Pseudoklasse hingegen wird verwendet, um dem bearbeitbaren `<textarea>` eine schönere Formatierung zu geben.

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

### Formatierung schreibgeschützter Nicht-Formular-Steuerelemente

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

{{EmbedLiveSample('Formatierung_schreibgeschützter_Nicht-Formular-Steuerelemente', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":read-write")}}
- HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut
