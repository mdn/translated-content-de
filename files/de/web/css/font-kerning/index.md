---
title: font-kerning
slug: Web/CSS/font-kerning
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`font-kerning`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob die in einer Schriftart gespeicherten Kerning-Informationen verwendet werden.

{{EmbedInteractiveExample("pages/css/font-kerning.html")}}

_Kerning_ definiert, wie Buchstabenabstände gesetzt werden. In _gut gekernten_ Schriften sorgt dieses Merkmal für einen gleichmäßigeren und angenehmeren Lesefluss als dies sonst der Fall wäre.

In dem unten stehenden Bild verwenden die Beispiele auf der linken Seite kein Kerning, während die auf der rechten Seite es tun:

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
  - : Der Browser entscheidet, ob Kerning verwendet werden soll oder nicht. Zum Beispiel deaktivieren einige Browser das Kerning bei kleinen Schriften, da das Anwenden die Lesbarkeit des Textes beeinträchtigen könnte.
- `normal`
  - : Die im Font gespeicherten Kerning-Informationen müssen angewendet werden.
- `none`
  - : Die im Font gespeicherten Kerning-Informationen sind deaktiviert.

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
