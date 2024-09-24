---
title: size-adjust
slug: Web/CSS/@font-face/size-adjust
l10n:
  sourceCommit: 418b3ebf6464716649125199385c39d86c944973
---

{{CSSRef}}

Der **`size-adjust`** CSS-Deskriptor für die {{cssxref("@font-face")}}-At-Regel definiert einen Multiplikator für Glyphenkonturen und -metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert die Harmonisierung der Designs verschiedener Schriftarten, wenn sie in derselben Schriftgröße gerendert werden.

Der `size-adjust`-Deskriptor verhält sich ähnlich wie die {{cssxref("font-size-adjust")}}-Eigenschaft. Er berechnet eine Anpassung pro Schriftart, indem er ex-Höhen abgleicht.

## Syntax

```css
size-adjust: 90%;
```

### Werte

- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert mit einem Anfangswert von 100%.

Alle Metriken, die mit dieser Schriftart verbunden sind, werden um den angegebenen Prozentsatz skaliert. Dies umfasst Glyphen-Vorschübe, Baseline-Tabellen und durch {{cssxref("@font-face")}}-Deskriptoren bereitgestellte Überschreibungen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreibung der Metriken einer Ersatzschrift

Die `size-adjust`-Eigenschaft kann hilfreich sein, wenn die Metriken einer Ersatzschrift überschrieben werden sollen, um diese besser an die einer primären Webschrift anzupassen.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  size-adjust: 90%;
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

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
