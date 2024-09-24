---
title: ":read-only"
slug: Web/CSS/:read-only
l10n:
  sourceCommit: 46e39d934e4ec92ba6e30d021343d83dc55c8517
---

{{CSSRef}}

Die **`:read-only`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) selektiert Elemente (wie bestimmte {{htmlelement("input")}}-Typen und {{htmlelement("textarea")}}), die vom Benutzer nicht bearbeitet werden können. Elemente, bei denen das HTML-Attribut [`readonly`](/de/docs/Web/HTML/Attributes/readonly) keine Wirkung hat (wie [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio), [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) und alle anderen Nicht-Formularelemente), werden ebenfalls von der `:read-only` Pseudoklasse ausgewählt. Tatsächlich entspricht `:read-only` allem, was {{cssxref(":read-write")}} nicht umfasst, wodurch es gleichbedeutend mit `:not(:read-write)` ist.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-read-only.html", "tabbed-shorter")}}

## Syntax

```css
:read-only {
  /* ... */
}
```

## Beispiele

### Bestätigen von Formularinformationen mithilfe von schreibgeschützten oder beschreibbaren Steuerelementen

Eine Verwendung von schreibgeschützten Formularsteuerungen besteht darin, dem Benutzer zu erlauben, Informationen zu überprüfen und zu bestätigen, die er möglicherweise in einem früheren Formular eingegeben hat (zum Beispiel Versanddetails), während er dennoch in der Lage ist, die Informationen zusammen mit dem Rest des Formulars zu senden. Genau das tun wir im folgenden Beispiel.

Die `:read-only` Pseudoklasse wird verwendet, um alle Stile zu entfernen, die die Eingaben wie anklickbare Felder aussehen lassen, sodass sie mehr wie schreibgeschützte Absätze aussehen. Die `:read-write` Pseudoklasse hingegen wird verwendet, um dem editierbaren `<textarea>` ein schöneres Styling zu geben.

```html hidden
<form>
  <fieldset>
    <legend>Versanddetails überprüfen</legend>
    <div>
      <label for="name">Name: </label>
      <input id="name" name="name" type="text" value="Herr Soft" readonly />
    </div>
    <div>
      <label for="address">Adresse: </label>
      <textarea id="address" name="address" readonly>
23 Elastic Way,
Viscous,
Bright Ridge,
CA
</textarea
      >
    </div>
    <div>
      <label for="pcode">PLZ/Postleitzahl: </label>
      <input id="pcode" name="pcode" type="text" value="94708" readonly />
    </div>
  </fieldset>

  <fieldset>
    <legend>Letzte Anweisungen</legend>
    <div>
      <label for="sms-confirm">Bestätigung per SMS senden?</label>
      <input id="sms-confirm" name="sms-confirm" type="checkbox" />
    </div>
    <div>
      <label for="instructions">Besondere Anweisungen?</label>
      <textarea id="instructions" name="instructions"></textarea>
    </div>
  </fieldset>

  <div><button type="submit">Details bearbeiten und senden</button></div>
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

{{EmbedLiveSample("Confirming form information using read-only or read-write controls", "100%", 620)}}

### Styling schreibgeschützter Nicht-Formularsteuerelemente

Dieser Selektor wählt nicht nur {{htmlElement("input")}}/{{htmlElement("textarea")}}-Elemente aus — er wählt _jedes_ Element aus, das vom Benutzer nicht bearbeitet werden kann.

```html
<p contenteditable>Dieser Absatz ist editierbar; er ist schreibbar.</p>

<p>Dieser Absatz ist nicht editierbar; er ist schreibgeschützt.</p>
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
- HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) Attribut
