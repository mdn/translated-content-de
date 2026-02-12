---
title: font-kerning
slug: Web/CSS/Reference/Properties/font-kerning
l10n:
  sourceCommit: 0ab262675372b83fc870accf3dc46d6a367c451c
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

_Kerning_ beeinflusst die Zeichenabstände. In _gut gekernten_ Schriftarten sorgt dieses Merkmal dafür, dass die Zeichenabstände einheitlicher und angenehmer zu lesen sind, indem der Weißraum zwischen bestimmten Zeichenkombinationen reduziert wird.

In dem folgenden Bild verwenden die Beispiele auf der linken Seite zum Beispiel kein Kerning, während die Beispiele auf der rechten Seite Kerning verwenden:

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
  - : Der Browser entscheidet, ob das Font-Kerning verwendet werden soll oder nicht. Einige Browser deaktivieren zum Beispiel Kerning bei kleinen Schriftarten, da das Anwenden die Lesbarkeit des Textes beeinträchtigen könnte.
- `normal`
  - : Die in der Schrift gespeicherten Kerning-Informationen müssen angewendet werden.
- `none`
  - : Die in der Schrift gespeicherten Kerning-Informationen werden deaktiviert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivieren und Deaktivieren des Kerning

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
