---
title: color-gamut
slug: Web/CSS/Reference/At-rules/@media/color-gamut
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

Das **`color-gamut`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem ungefähren Umfang des von der {{Glossary("user_agent", "User-Agent")}} und dem Ausgabegerät unterstützten Farb-{{Glossary("gamut", "Gamuts")}} anzuwenden.

## Syntax

Das `color-gamut`-Merkmal wird als einer der folgenden {{Glossary("color_space", "Farbräume")}} als Schlüsselwortwerte angegeben:

- `srgb`
  - : Der User-Agent und das Ausgabegerät können ungefähr den {{Glossary("Color_space#srgb", "sRGB")}}-Gamut oder mehr unterstützen. Dies umfasst die überwiegende Mehrheit der Farbdisplays.
- `p3`
  - : Der User-Agent und das Ausgabegerät können ungefähr den Gamut unterstützen, der durch den [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter)-Farbraum spezifiziert ist oder mehr. Der P3-Gamut ist größer als und umfasst den sRGB-Gamut.
- `rec2020`
  - : Der User-Agent und das Ausgabegerät können ungefähr den Gamut unterstützen, der durch den [ITU-R Empfehlung BT.2020](https://en.wikipedia.org/wiki/Rec._2020)-Farbraum spezifiziert ist oder mehr. Der REC. 2020-Gamut ist größer als und umfasst den P3-Gamut.

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

- [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion, um Farben in einem definierten Farbraum anzugeben.
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) At-Regel, die verwendet wird, um den Ausdruck `color-gamut` zu spezifizieren.
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using), um zu verstehen, wann und wie man eine Media Query verwendet.
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
