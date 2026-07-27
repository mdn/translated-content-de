---
title: "`font-kerning` CSS property"
short-title: font-kerning
slug: Web/CSS/Reference/Properties/font-kerning
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`font-kerning`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Verwendung der in einer Schriftart gespeicherten Kerning-Informationen fest.

{{InteractiveExample("CSS Demo: font-kerning")}}

```css interactive-example-choice
font-kerning: auto;
```

```css interactive-example-choice
font-kerning: normal;
```

```css interactive-example-choice
font-kerning: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    "We took Tracy to see 'THE WATERFALL' in W. Virginia."
  </div>
</section>
```

```css interactive-example
section {
  font-family: serif;
}
```

_Kerning_ beeinflusst, wie Buchstabenabstände gesetzt werden. In _gut gekernten_ Schriftarten sorgt diese Funktion dafür, dass die Zeichenabstände gleichmäßiger und angenehmer zu lesen sind, indem der Leerraum zwischen bestimmten Zeichenkombinationen reduziert wird.

Im Bild unten verwenden die Beispiele auf der linken Seite kein Kerning, während die auf der rechten Seite Kerning verwenden:

![Beispiel für font-kerning](font-kerning.png)

## Syntax

```css
font-kerning: auto;
font-kerning: normal;
font-kerning: none;

/* Global values */
font-kerning: inherit;
font-kerning: initial;
font-kerning: revert;
font-kerning: revert-layer;
font-kerning: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Der Browser bestimmt, ob Kerning verwendet werden soll oder nicht. Beispielsweise deaktivieren einige Browser Kerning bei kleinen Schriftgrößen, da die Anwendung die Lesbarkeit des Textes beeinträchtigen könnte.
- `normal`
  - : Kerning-Informationen, die in der Schriftart gespeichert sind, müssen angewendet werden.
- `none`
  - : Kerning-Informationen, die in der Schriftart gespeichert sind, werden deaktiviert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kerning aktivieren und deaktivieren

#### HTML

```html
<div id="kern"></div>
<div id="no-kern"></div>
<textarea id="input">AV T. ij</textarea>
```

#### CSS

```css
div {
  font-size: 2rem;
  font-family: serif;
}

#no-kern {
  font-kerning: none;
}

#kern {
  font-kerning: normal;
}
```

#### JavaScript

```js
const input = document.getElementById("input");
const kern = document.getElementById("kern");
const noKern = document.getElementById("no-kern");

input.addEventListener("keyup", () => {
  kern.textContent = input.value; /* Update content */
  noKern.textContent = input.value;
});

kern.textContent = input.value; /* Initialize content */
noKern.textContent = input.value;
```

{{ EmbedLiveSample('Enabling_and_disabling_kerning') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-synthesis")}}, {{cssxref("letter-spacing")}}
