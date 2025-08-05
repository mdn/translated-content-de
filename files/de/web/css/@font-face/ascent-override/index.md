---
title: ascent-override
slug: Web/CSS/@font-face/ascent-override
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Der **`ascent-override`** CSS-Deskriptor für die {{cssxref("@font-face")}}-Regel definiert die Aufstiegsmetrik für die Schriftart. Die Aufstiegsmetrik ist die Höhe über der Grundlinie, die CSS verwendet, um Linienboxen in einem Inline-Formatierungszusammenhang auszulegen.

## Syntax

```css
ascent-override: normal;
ascent-override: 90%;
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

### Überschreibung der Metriken einer Fallback-Schriftart

Die `ascent-override`-Eigenschaft kann hilfreich sein, wenn Sie die Metriken einer Fallback-Schriftart überschreiben, um diese besser an eine primäre Web-Schriftart anzupassen.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local("Local Font");
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
