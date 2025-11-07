---
title: color-gamut
slug: Web/CSS/Reference/At-rules/@media/color-gamut
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`color-gamut`**-[CSS](/de/docs/Web/CSS)-[Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem ungefähren Farbraum-{{Glossary("gamut", "Gamut")}} anzuwenden, der vom {{Glossary("user_agent", "Benutzeragenten")}} und dem Ausgabegerät unterstützt wird.

## Syntax

Die `color-gamut`-Funktion wird als einer der folgenden {{Glossary("color_space", "Farbräume")}} in Schlüsselwortwerten angegeben:

- `srgb`
  - : Der Benutzeragent und das Ausgabegerät können ungefähr den {{Glossary("Color_space#srgb", "sRGB")}}-Gamut oder mehr unterstützen. Dies umfasst die überwiegende Mehrheit der Farbdisplays.
- `p3`
  - : Der Benutzeragent und das Ausgabegerät können ungefähr den Gamut unterstützen, der durch den [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter)-Farbraum oder mehr spezifiziert wird. Der P3-Gamut ist größer als und schließt den sRGB-Gamut ein.
- `rec2020`
  - : Der Benutzeragent und das Ausgabegerät können ungefähr den Gamut unterstützen, der durch den [ITU-R Recommendation BT.2020](https://en.wikipedia.org/wiki/Rec._2020)-Farbraum oder mehr spezifiziert wird. Der REC. 2020-Gamut ist größer als und schließt den P3-Gamut ein.

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

- [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion zur Angabe von Farben in einem definierten Farbraum.
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
- [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media)-Regel, die verwendet wird, um den color-gamut-Ausdruck anzugeben.
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um zu verstehen, wann und wie eine Media Query verwendet wird.
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)-Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
