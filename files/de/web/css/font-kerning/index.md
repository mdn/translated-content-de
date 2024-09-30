---
title: font-kerning
slug: Web/CSS/font-kerning
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`font-kerning`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Verwendung der in einer Schriftart gespeicherten Kerning-Informationen fest.

{{EmbedInteractiveExample("pages/css/font-kerning.html")}}

_Kerning_ definiert, wie Buchstaben verteilt sind. In _wohlkernigen_ Schriftarten sorgt diese Funktion dafür, dass der Zeichenabstand gleichmäßiger und angenehmer zu lesen ist als ohne.

In dem Bild unten zum Beispiel verwenden die Beispiele auf der linken Seite kein Kerning, während die auf der rechten Seite dies tun:

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
  - : Der Browser entscheidet, ob das Font-Kerning verwendet werden soll oder nicht. Manche Browser deaktivieren zum Beispiel das Kerning bei kleinen Schriftarten, da es die Lesbarkeit beeinträchtigen könnte.
- `normal`
  - : Die in der Schrift gespeicherten Kerning-Informationen müssen angewendet werden.
- `none`
  - : Die in der Schrift gespeicherten Kerning-Informationen sind deaktiviert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kerning aktivieren und deaktivieren

#### HTML

```html
<div id="kern"></div>
<div id="nokern"></div>
<textarea id="input">AV T. ij</textarea>
```

#### CSS

```css
div {
  font-size: 2rem;
  font-family: serif;
}

#nokern {
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
const nokern = document.getElementById("nokern");

input.addEventListener("keyup", () => {
  kern.textContent = input.value; /* Update content */
  nokern.textContent = input.value;
});

kern.textContent = input.value; /* Initialize content */
nokern.textContent = input.value;
```

{{ EmbedLiveSample('Enabling_and_disabling_kerning') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-synthesis")}}, {{cssxref("letter-spacing")}}
