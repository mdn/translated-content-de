---
title: :indeterminate
slug: Web/CSS/:indeterminate
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:indeterminate`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Formularelement, dessen Status unbestimmt ist, wie z.B. Kontrollkästchen, die mit JavaScript in einen [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)-Zustand versetzt wurden, Optionsschaltflächen, die Mitglieder einer Gruppe sind, in der alle Optionsschaltflächen deaktiviert sind, und {{HTMLElement("progress")}}-Elemente ohne `value`-Attribut.

```css
/* Selects any <input> whose state is indeterminate */
input:indeterminate {
  background: lime;
}
```

Elemente, die von diesem Selektor angesprochen werden, sind:

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Elemente mit der [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)-Eigenschaft auf `true` gesetzt.
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Elemente mit dem gleichen `name`-Wert und ohne `checked`.
- {{HTMLElement("progress")}}-Elemente ohne `value`, die sie in einen unbestimmten Zustand versetzen.

## Syntax

```css
:indeterminate {
  /* ... */
}
```

## Beispiele

### Kontrollkästchen & Optionsschaltflächen

Dieses Beispiel wendet spezielle Stile auf die Labels zu, die mit unbestimmten Formularelementen verbunden sind.

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
- [Stil von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- Die [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Elementeigenschaft [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die sie implementiert.
- Der {{cssxref(":checked")}} CSS-Selektor lässt Sie Kontrollkästchen basierend darauf stylen, ob sie aktiviert sind oder nicht.
