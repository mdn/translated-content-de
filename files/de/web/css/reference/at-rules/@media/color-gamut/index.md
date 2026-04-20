---
title: "`color-gamut` CSS Media Feature"
short-title: color-gamut
slug: Web/CSS/Reference/At-rules/@media/color-gamut
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Die **`color-gamut`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem ungefähren Bereich der von der {{Glossary("user_agent", "Benutzeragentur")}} und dem Ausgabegerät unterstützten Farb-{{Glossary("gamut", "Gamut")}} anzuwenden.

## Syntax

Die `color-gamut`-Funktion wird als einer der folgenden {{Glossary("color_space", "Farbräume")}} als Schlüsselwort-Werte angegeben:

- `srgb`
  - : Die Benutzeragentur und das Ausgabegerät können ungefähr den {{Glossary("Color_space#srgb", "sRGB")}} Gamut oder mehr unterstützen. Dies schließt die überwiegende Mehrheit der Farbdisplays ein.
- `p3`
  - : Die Benutzeragentur und das Ausgabegerät können ungefähr den vom [Display P3](https://registry.color.org/rgb-registry/displayp3) Farbraum spezifizierten Gamut oder mehr unterstützen. Der P3 Gamut ist größer und enthält den sRGB Gamut.
- `rec2020`
  - : Die Benutzeragentur und das Ausgabegerät können ungefähr den vom [ITU-R Empfehlung BT.2020](https://en.wikipedia.org/wiki/Rec._2020) Farbraum spezifizierten Gamut oder mehr unterstützen. Der REC. 2020 Gamut ist größer und enthält den P3 Gamut.

## Beispiele

### HTML

```html
<p>This is a test.</p>
```

### CSS

```css
p {
  padding: 10px;
  border: solid;
}

@media (color-gamut: srgb) {
  p {
    background: #f4ae8a;
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) Funktion, um Farben in einem definierten Farbraum anzugeben.
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- {{cssxref("@media")}} At-Regel, die verwendet wird, um den `color-gamut`-Ausdruck anzugeben.
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using), um zu verstehen, wann und wie man eine Media Query verwendet.
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
