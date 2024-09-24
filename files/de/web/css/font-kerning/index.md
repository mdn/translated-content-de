---
title: Schriftarten-Kerning
slug: Web/CSS/font-kerning
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`font-kerning`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob die in einer Schriftart gespeicherten Kerning-Informationen verwendet werden.

{{EmbedInteractiveExample("pages/css/font-kerning.html")}}

_Kerning_ definiert, wie Buchstaben verteilt sind. In _gut gekernten_ Schriftarten sorgt diese Funktion dafür, dass der Zeichenabstand gleichmäßiger und angenehmer zu lesen ist, als es sonst der Fall wäre.

Auf dem Bild unten verwenden die Beispiele auf der linken Seite beispielsweise kein Kerning, während die auf der rechten Seite Kerning verwenden:

![Beispiel für Schriftarten-Kerning](font-kerning.png)

## Syntax

```css
font-kerning: auto;
font-kerning: normal;
font-kerning: none;

/* Globale Werte */
font-kerning: inherit;
font-kerning: initial;
font-kerning: revert;
font-kerning: revert-layer;
font-kerning: unset;
```

### Werte

- `auto`
  - : Der Browser bestimmt, ob das Schriftarten-Kerning verwendet werden soll oder nicht. Einige Browser deaktivieren beispielsweise das Kerning bei kleinen Schriftarten, da die Lesbarkeit des Textes beeinträchtigt werden könnte.
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
