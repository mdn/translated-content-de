---
title: descent-override
slug: Web/CSS/@font-face/descent-override
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

Der **`descent-override`** CSS-Deskriptor für die {{cssxref("@font-face")}} at-rule definiert die Abstiegsmetrik für die Schriftart. Die Abstiegsmetrik ist die Höhe unterhalb der Grundlinie, die CSS verwendet, um Linienboxen in einem Inline-Formatierungskontext anzuordnen.

## Syntax

```css
descent-override: normal;
descent-override: 90%;
```

### Werte

- `normal`
  - : Der Standardwert. Wenn verwendet, wird der Metrikwert aus der Schriftdatei übernommen.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übersteuern der Metriken einer Ersatzschriftart

Die `descent-override`-Eigenschaft kann helfen, wenn die Metriken einer Ersatzschriftart übersteuert werden sollen, um besser zu den primären Web-Schriftarten zu passen.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  descent-override: 125%;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
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
