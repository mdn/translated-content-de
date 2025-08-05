---
title: size-adjust
slug: Web/CSS/@font-face/size-adjust
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Der **`size-adjust`** CSS-Deskriptor für die {{cssxref("@font-face")}} Regel definiert einen Multiplikator für Glyphenumrisse und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert es, die Designs verschiedener Schriftarten beim Rendern in derselben Schriftgröße zu harmonisieren.

Der `size-adjust` Deskriptor verhält sich ähnlich wie die {{cssxref("font-size-adjust")}} Eigenschaft. Er berechnet eine Anpassung pro Schriftart, indem er die x-Höhen abgleicht.

## Syntax

```css
size-adjust: 90%;
```

### Werte

- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert mit einem Anfangswert von 100%.

Alle Metriken, die mit dieser Schriftart verbunden sind, werden mit dem angegebenen Prozentsatz skaliert. Dies umfasst Glyphenfortschritte, Baselinien-Tabellen und Überschreibungen, die durch {{cssxref("@font-face")}} Deskriptoren bereitgestellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben von Metriken einer Ersatzschriftart

Die `size-adjust` Eigenschaft kann hilfreich sein, wenn Sie die Metriken einer Ersatzschriftart überschreiben, um diese besser an eine primäre Webschriftart anzupassen.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local("Local Font");
  size-adjust: 90%;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor
- {{cssxref("@font-face/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptor
- {{cssxref("@font-face/font-style", "font-style")}} Deskriptor
- {{cssxref("@font-face/font-stretch", "font-stretch")}} Deskriptor
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} Deskriptor
- {{cssxref("@font-face/src", "src")}} Deskriptor
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
- {{cssxref('font-size-adjust')}} Eigenschaft
