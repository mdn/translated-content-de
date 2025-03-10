---
title: font-kerning
slug: Web/CSS/font-kerning
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`font-kerning`**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt die Verwendung der in einer Schriftart gespeicherten Kerning-Informationen fest.

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

_Das Kerning_ beeinflusst, wie Buchstaben abstandsgemäß verteilt werden. In _gut gekernten_ Schriftarten macht dieses Merkmal den Zeichenabstand gleichmäßiger und angenehmer zu lesen, indem der Weißraum zwischen bestimmten Zeichenkombinationen verringert wird.

Im folgenden Bild verwenden die linken Beispiele kein Kerning, während die rechten Beispiele Kerning verwenden:

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
  - : Der Browser bestimmt, ob das Schriftarten-Kerning verwendet werden soll oder nicht. Beispielsweise deaktivieren einige Browser das Kerning bei kleinen Schriftarten, da dies die Lesbarkeit des Textes beeinträchtigen könnte.
- `normal`
  - : Die in der Schriftart gespeicherten Kerning-Informationen müssen angewendet werden.
- `none`
  - : Die in der Schriftart gespeicherten Kerning-Informationen sind deaktiviert.

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
