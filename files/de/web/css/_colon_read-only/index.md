---
title: ":read-only"
slug: Web/CSS/:read-only
l10n:
  sourceCommit: 46e39d934e4ec92ba6e30d021343d83dc55c8517
---

{{CSSRef}}

Die **`:read-only`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente aus (wie bestimmte {{htmlelement("input")}}-Typen und {{htmlelement("textarea")}}), die vom Benutzer nicht bearbeitet werden können. Elemente, bei denen das HTML-Attribut [`readonly`](/de/docs/Web/HTML/Attributes/readonly) keine Wirkung hat (wie [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio), [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) und alle anderen Nicht-Formularelemente), werden ebenfalls durch die `:read-only` Pseudoklasse ausgewählt. Tatsächlich passt `:read-only` auf alles, worauf {{cssxref(":read-write")}} nicht passt, und ist somit äquivalent zu `:not(:read-write)`.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-read-only.html", "tabbed-shorter")}}

## Syntax

```css
:read-only {
  /* ... */
}
```

## Beispiele

### Bestätigung von Formularinformationen mit schreibgeschützten oder schreibbaren Steuerelementen

Ein Anwendungsfall für schreibgeschützte Formularsteuerelemente besteht darin, dem Benutzer die Überprüfung und Verifizierung von Informationen zu ermöglichen, die er möglicherweise in einem früheren Formular eingegeben hat (zum Beispiel Versanddetails), während er dennoch in der Lage ist, die Informationen zusammen mit dem Rest des Formulars abzuschicken. Wir tun genau dies im folgenden Beispiel.

Die `:read-only` Pseudoklasse wird verwendet, um das gesamte Styling zu entfernen, das die Eingabefelder wie anklickbare Felder aussehen lässt, sodass sie eher wie schreibgeschützte Absätze wirken. Im Gegensatz dazu wird die `:read-write` Pseudoklasse verwendet, um dem editierbaren `<textarea>` ein ansprechenderes Styling zu verleihen.

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
      <label for="pcode">Zip/postal code: </label>
      <input id="pcode" name="pcode" type="text" value="94708" readonly />
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

{{EmbedLiveSample("Bestätigung von Formularinformationen mit schreibgeschützten oder schreibbaren Steuerelementen", "100%", 620)}}

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
- HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)
