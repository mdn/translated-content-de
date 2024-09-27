---
title: ascent-override
slug: Web/CSS/@font-face/ascent-override
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

Der **`ascent-override`** CSS-Deskriptor für die {{cssxref("@font-face")}} at-rule definiert die Aszendenz-Metrik für die Schriftart. Die Aszendenz-Metrik ist die Höhe über der Grundlinie, die CSS verwendet, um Linienboxen in einem Inline-Formatierungskontext anzuordnen.

## Syntax

```css
ascent-override: normal;
ascent-override: 90%;
```

### Werte

- `normal`
  - : Der Standardwert. Wenn verwendet, wird der Metrikwert aus der Schriftdatei entnommen.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben von Metriken einer Ersatzschriftart

Die `ascent-override`-Eigenschaft kann nützlich sein, wenn die Metriken einer Ersatzschriftart überschrieben werden, um diese besser an eine primäre Webschriftart anzupassen.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  ascent-override: 125%;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/descent-override", "descent-override")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
