---
title: "`ascent-override` CSS-Attributbeschreibung"
short-title: ascent-override
slug: Web/CSS/Reference/At-rules/@font-face/ascent-override
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Die **`ascent-override`** [CSS](/de/docs/Web/CSS)-Attributbeschreibung für die {{cssxref("@font-face")}}-Regel definiert die Ascent-Metrik für die Schriftart. Die Ascent-Metrik ist die Höhe über der Grundlinie, die CSS zur Anordnung von Zeilenboxen in einem Inline-Formatierungskontext verwendet.

## Syntax

```css
ascent-override: normal;
ascent-override: 90%;
```

### Werte

- `normal`
  - : Der Standardwert. Wenn verwendet, wird der Metrikwert aus der Schriftdatei bezogen.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben von Metriken einer Ersatzschriftart

Die `ascent-override`-Eigenschaft kann helfen, wenn die Metriken einer Ersatzschriftart überschrieben werden sollen, um diese besser an die einer primären Webschriftart anzupassen.

```css
@font-face {
  font-family: "web-font";
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: "local-font";
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
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Attributbeschreibung
