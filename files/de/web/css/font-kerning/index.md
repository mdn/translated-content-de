---
title: font-kerning
slug: Web/CSS/font-kerning
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-kerning`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die in einer Schriftart gespeicherten Kerning-Informationen verwendet werden sollen.

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
    “We took Tracy to see ‘THE WATERFALL’ in W. Virginia.”
  </div>
</section>
```

```css interactive-example
section {
  font-family: serif;
}
```

_Kerning_ beeinflusst, wie Buchstaben zueinander angeordnet sind. Bei _gut gekernten_ Schriftarten sorgt dieses Merkmal dafür, dass der Zeichenabstand gleichmäßiger und angenehmer zu lesen ist, indem der Leerraum zwischen bestimmten Zeichenkombinationen reduziert wird.

Im Bild unten zum Beispiel verwenden die linken Beispiele kein Kerning, während die rechten es verwenden:

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

- `auto`
  - : Der Browser bestimmt, ob Font-Kerning verwendet werden soll oder nicht. Zum Beispiel deaktivieren einige Browser das Kerning bei kleinen Schriftarten, da dessen Anwendung die Lesbarkeit des Textes beeinträchtigen könnte.
- `normal`
  - : In der Schrift gespeicherte Kerning-Informationen müssen angewendet werden.
- `none`
  - : In der Schrift gespeicherte Kerning-Informationen werden deaktiviert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivieren und Deaktivieren von Kerning

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
