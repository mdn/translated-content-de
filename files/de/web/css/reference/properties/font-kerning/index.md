---
title: "`font-kerning` CSS property"
short-title: font-kerning
slug: Web/CSS/Reference/Properties/font-kerning
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-kerning`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Verwendung der in einer Schriftart gespeicherten Kerning-Informationen fest.

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

_Kerning_ beeinflusst, wie Buchstabenabstände gesetzt werden. In _gut gekernten_ Schriftarten macht diese Funktion die Zeichenabstände gleichmäßiger und angenehmer zu lesen, indem der Weißraum zwischen bestimmten Zeichenkombinationen reduziert wird.

Im folgenden Bild zum Beispiel verwenden die Beispiele auf der linken Seite kein Kerning, während es bei denen auf der rechten Seite verwendet wird:

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
  - : Der Browser bestimmt, ob Schriftkerning verwendet werden soll oder nicht. Einige Browser deaktivieren zum Beispiel Kerning bei kleinen Schriftgrößen, da dessen Anwendung die Lesbarkeit des Textes beeinträchtigen könnte.
- `normal`
  - : Die im Font gespeicherten Kerning-Informationen müssen angewendet werden.
- `none`
  - : Die im Font gespeicherten Kerning-Informationen sind deaktiviert.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

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
