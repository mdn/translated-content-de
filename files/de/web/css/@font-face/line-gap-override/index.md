---
title: line-gap-override
slug: Web/CSS/@font-face/line-gap-override
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`line-gap-override`** CSS-Deskriptor für die {{cssxref("@font-face")}} At-Regel definiert die line-gap Metrik für die Schriftart. Die line-gap Metrik ist der von der Schriftart empfohlene line-gap oder externe Vorsprung.

## Syntax

```css
line-gap-override: normal;
line-gap-override: 90%;
```

### Werte

- `normal`
  - : Der Standardwert. Wenn verwendet, wird der Metrikwert aus der Schriftartdatei entnommen.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben der Metriken einer Ersatzschriftart

Die `line-gap-override`-Eigenschaft kann helfen, die Metriken einer Ersatzschriftart zu überschreiben, um besser zu einer primären Webschriftart zu passen.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  line-gap-override: 125%;
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
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
