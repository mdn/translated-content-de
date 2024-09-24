---
title: ":indeterminate"
slug: Web/CSS/:indeterminate
l10n:
  sourceCommit: 328b6b07216cd7588dd63272a5005f709b8d501a
---

{{CSSRef}}

Die **`:indeterminate`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Formularelement, dessen Zustand unbestimmt ist, wie z.B. Checkboxen, die mit JavaScript auf einen [`indeterminate`](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)-Zustand gesetzt wurden, Radiobuttons, die Mitglieder einer Gruppe sind, in der alle Radiobuttons nicht ausgewählt sind, und {{HTMLElement("progress")}}-Elemente ohne `value`-Attribut.

```css
/* Wählt jedes <input>, dessen Zustand unbestimmt ist */
input:indeterminate {
  background: lime;
}
```

Elemente, die durch diesen Selektor erfasst werden, sind:

- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)-Elemente, deren `indeterminate`-Eigenschaft durch [JavaScript](/de/docs/Web/JavaScript) auf `true` gesetzt ist
- [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Elemente, wenn alle Radiobuttons mit demselben `name`-Wert im Formular nicht ausgewählt sind
- {{HTMLElement("progress")}}-Elemente in einem unbestimmten Zustand

## Syntax

```plain
:indeterminate
```

## Beispiele

### Checkbox & Radiobutton

Dieses Beispiel wendet spezielle Stile auf die Labels an, die mit unbestimmten Formularfeldern assoziiert sind.

#### HTML

```html
<fieldset>
  <legend>Checkbox</legend>
  <div>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox">Dieses Checkbox-Label startet in Lime.</label>
  </div>
</fieldset>

<fieldset>
  <legend>Radio</legend>
  <div>
    <input type="radio" id="radio1" name="radioButton" value="val1" />
    <label for="radio1">Erstes Radiobutton-Label startet in Lime.</label>
  </div>
  <div>
    <input type="radio" id="radio2" name="radioButton" value="val2" />
    <label for="radio2">Zweites Radiobutton-Label startet ebenfalls in Lime.</label>
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

for (let i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
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

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn/Forms)
- [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms)
- Die [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)-Eigenschaft [`indeterminate`](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)
- {{HTMLElement("input")}} und das {{domxref("HTMLInputElement")}}-Interface, das es implementiert.
- Der {{cssxref(":checked")}} CSS-Selektor ermöglicht es Ihnen, Checkboxen basierend darauf zu stylen, ob sie markiert sind oder nicht.
