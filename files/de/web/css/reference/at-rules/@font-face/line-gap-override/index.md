---
title: "`line-gap-override` CSS At-Regel-Deskriptor"
short-title: line-gap-override
slug: Web/CSS/Reference/At-rules/@font-face/line-gap-override
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`line-gap-override`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@font-face")}} At-Regel definiert den line-gap Wert für die Schriftart. Der line-gap Wert ist der von der Schriftart empfohlene Zeilenabstand oder äußere Abstand.

## Syntax

```css
line-gap-override: normal;
line-gap-override: 90%;
```

### Werte

- `normal`
  - : Der Standardwert. Wenn verwendet, wird der Wert aus der Schriftdatei übernommen.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreibung der Metriken einer Fallback-Schriftart

Die `line-gap-override`-Eigenschaft kann helfen, die Metriken einer Fallback-Schriftart zu überschreiben, um diese besser an die einer primären Webschriftart anzupassen.

```css
@font-face {
  font-family: "web-font";
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: "local-font";
  src: local("Local Font");
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
- {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptor
