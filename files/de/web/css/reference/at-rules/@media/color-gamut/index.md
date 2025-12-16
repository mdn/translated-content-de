---
title: color-gamut
slug: Web/CSS/Reference/At-rules/@media/color-gamut
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`color-gamut`** [CSS](/de/docs/Web/CSS)-[Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem ungefähren Bereich des vom {{Glossary("user_agent", "User Agent")}} und dem Ausgabegerät unterstützten Farb-{{Glossary("gamut", "Spektrums")}} anzuwenden.

## Syntax

Die `color-gamut`-Funktion wird als eine der folgenden {{Glossary("color_space", "Farbräume")}} als Schlüsselwortwerte angegeben:

- `srgb`
  - : Der User Agent und das Ausgabegerät können ungefähr das {{Glossary("Color_space#srgb", "sRGB")}}-Spektrum oder mehr unterstützen. Dies schließt die überwiegende Mehrheit der Farbdisplays ein.
- `p3`
  - : Der User Agent und das Ausgabegerät können ungefähr das durch den Farbraum [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter) spezifizierte Spektrum oder mehr unterstützen. Das P3-Spektrum ist größer als und umfasst das sRGB-Spektrum.
- `rec2020`
  - : Der User Agent und das Ausgabegerät können ungefähr das durch den Farbraum [ITU-R Recommendation BT.2020](https://en.wikipedia.org/wiki/Rec._2020) spezifizierte Spektrum oder mehr unterstützen. Das REC. 2020-Spektrum ist größer als und umfasst das P3-Spektrum.

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

- Die [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion, um Farben in einem definierten Farbraum anzugeben.
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)-Modul
- {{cssxref("@media")}} At-Regel, die verwendet wird, um den color-gamut-Ausdruck zu spezifizieren.
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) um zu verstehen, wann und wie man eine Media Query verwendet.
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries)-Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
