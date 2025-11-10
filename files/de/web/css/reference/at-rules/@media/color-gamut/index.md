---
title: color-gamut
slug: Web/CSS/Reference/At-rules/@media/color-gamut
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`color-gamut`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem ungefähren Spektrum von Farb-{{Glossary("gamut", "Gamut")}} anzuwenden, das vom {{Glossary("user_agent", "User-Agent")}} und dem Ausgabegerät unterstützt wird.

## Syntax

Die `color-gamut` Funktion wird als eines der folgenden {{Glossary("color_space", "Farbmodelle")}} als Schlüsselwortwerte spezifiziert:

- `srgb`
  - : Der User-Agent und das Ausgabegerät können ungefähr das {{Glossary("Color_space#srgb", "sRGB")}} Spektrum oder mehr unterstützen. Dies umfasst die überwiegende Mehrheit der Farbanzeigen.
- `p3`
  - : Der User-Agent und das Ausgabegerät können ungefähr das vom [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter) Farbmodell spezifizierte Spektrum oder mehr unterstützen. Der P3 Gamut ist größer als und umfasst den sRGB Gamut.
- `rec2020`
  - : Der User-Agent und das Ausgabegerät können ungefähr das vom [ITU-R Empfehlung BT.2020](https://en.wikipedia.org/wiki/Rec._2020) Farbmodell spezifizierte Spektrum oder mehr unterstützen. Der REC. 2020 Gamut ist größer als und umfasst den P3 Gamut.

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

- Die [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color) Funktion, um Farben in einem definierten Farbmodell zu spezifizieren.
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) At-Regel, die verwendet wird, um den color-gamut Ausdruck zu spezifizieren.
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) um zu verstehen, wann und wie eine Media Query verwendet wird.
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
