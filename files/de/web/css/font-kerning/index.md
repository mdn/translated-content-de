---
title: font-kerning
slug: Web/CSS/font-kerning
l10n:
  sourceCommit: eafbe3866d23e4427347893d4f4bb47f4489b42e
---

{{CSSRef}}

Die **`font-kerning`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Verwendung der in einer Schriftart gespeicherten Kerning-Informationen fest.

{{EmbedInteractiveExample("pages/css/font-kerning.html")}}

_Kerning_ betrifft, wie Buchstabenabstände gestaltet sind. In _gut kerned_ Schriftarten sorgt dieses Feature dafür, dass die Zeichenabstände einheitlicher und angenehmer zu lesen sind, indem der Weißraum zwischen bestimmten Zeichenkombinationen verringert wird.

Im Bild unten verwenden die linken Beispiele kein Kerning, während die rechten Beispiele es tun:

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
  - : Der Browser bestimmt, ob das Schriftkerning verwendet werden soll oder nicht. Beispielsweise deaktivieren einige Browser das Kerning bei kleinen Schriftarten, da dies die Lesbarkeit des Textes beeinträchtigen könnte.
- `normal`
  - : Schriftkerning-Informationen, die in der Schrift gespeichert sind, müssen angewendet werden.
- `none`
  - : Schriftkerning-Informationen, die in der Schrift gespeichert sind, werden deaktiviert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivierung und Deaktivierung von Kerning

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
