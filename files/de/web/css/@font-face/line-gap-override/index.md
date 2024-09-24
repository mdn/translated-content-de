---
title: line-gap-override
slug: Web/CSS/@font-face/line-gap-override
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Der **`line-gap-override`** CSS-Deskriptor für die {{cssxref("@font-face")}} At-Regel definiert die Line-Gap-Metrik für die Schriftart. Die Line-Gap-Metrik ist die von der Schriftart empfohlene Line-Gap oder der externe Abstand.

## Syntax

```css
line-gap-override: normal;
line-gap-override: 90%;
```

### Werte

- `normal`
  - : Der Standardwert. Bei Verwendung wird der Metrikwert aus der Schriftartdatei übernommen.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben von Metriken einer Ersatzschrift

Die `line-gap-override` Eigenschaft kann hilfreich sein, wenn Metriken einer Ersatzschrift überschrieben werden sollen, um besser zu einer primären Webschrift zu passen.

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
