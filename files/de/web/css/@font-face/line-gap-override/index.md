---
title: line-gap-override
slug: Web/CSS/@font-face/line-gap-override
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Der **`line-gap-override`** CSS-Deskriptor für die {{cssxref("@font-face")}} Regel definiert die Line-Gap-Metrik für die Schriftart. Die Line-Gap-Metrik ist der empfohlene Abstand zwischen den Linien oder die externe Führung der Schriftart.

## Syntax

```css
line-gap-override: normal;
line-gap-override: 90%;
```

### Werte

- `normal`
  - : Der Standardwert. Beim Verwenden wird der Metrikwert aus der Schriftartdatei übernommen.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Metriken einer Ersatzschriftart

Die `line-gap-override`-Eigenschaft kann nützlich sein, wenn man die Metriken einer Ersatzschriftart anpasst, um diese besser mit denen einer primären Webschriftart abzustimmen.

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
