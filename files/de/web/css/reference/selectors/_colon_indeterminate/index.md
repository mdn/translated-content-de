---
title: :indeterminate
slug: Web/CSS/Reference/Selectors/:indeterminate
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:indeterminate`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes Formularelement, dessen Zustand unbestimmt ist, wie z.B. Checkboxen, die mit JavaScript in einen [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) Zustand versetzt wurden, Radiobuttons, die Mitglied einer Gruppe sind, in der alle Radiobuttons nicht ausgewählt sind, und {{HTMLElement("progress")}} Elemente ohne `value` Attribut.

```css
/* Selects any <input> whose state is indeterminate */
input:indeterminate {
  background: lime;
}
```

Elemente, die durch diesen Selektor angesprochen werden, sind:

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Elemente mit der [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate) Eigenschaft auf `true` gesetzt.
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Elemente mit demselben `name` Wert, von denen keines `checked` ist.
- {{HTMLElement("progress")}} Elemente ohne `value`, die sich dadurch in einem unbestimmten Zustand befinden.

## Syntax

```css
:indeterminate {
  /* ... */
}
```

## Beispiele

### Checkbox & Radiobutton

Dieses Beispiel wendet spezielle Stile auf die Labels an, die mit unbestimmten Formularfeldern verknüpft sind.

#### HTML

```html
<fieldset>
  <legend>Checkbox</legend>
  <div>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox">This checkbox label starts out lime.</label>
  </div>
</fieldset>

<fieldset>
  <legend>Radio</legend>
  <div>
    <input type="radio" id="radio1" name="radioButton" value="val1" />
    <label for="radio1">First radio label starts out lime.</label>
  </div>
  <div>
    <input type="radio" id="radio2" name="radioButton" value="val2" />
    <label for="radio2">Second radio label also starts out lime.</label>
  </div>
</fieldset>
```

#### CSS

```css
input:indeterminate + label {
  background: lime;
}
```

```css hidden
fieldset {
  padding: 1em 0.75em;
}

fieldset:first-of-type {
  margin-bottom: 1.5rem;
}

fieldset:not(:first-of-type) > div:not(:last-child) {
  margin-bottom: 0.5rem;
}
```

#### JavaScript

```js
const inputs = document.getElementsByTagName("input");

for (const input of inputs) {
  input.indeterminate = true;
}
```

#### Ergebnis

{{EmbedLiveSample('Checkbox_radio_button', 'auto', 230)}}

### Fortschrittsbalken

#### HTML

```html
<progress></progress>
```

#### CSS

```css
progress {
  margin: 4px;
}

progress:indeterminate {
  width: 80vw;
  height: 20px;
}
```

#### Ergebnis

{{EmbedLiveSample('Progress_bar', 'auto', 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)
- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- Die [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Eigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die es implementiert.
- Der {{cssxref(":checked")}} CSS Selektor ermöglicht es, Checkboxen basierend darauf zu stylen, ob sie ausgewählt sind oder nicht.
