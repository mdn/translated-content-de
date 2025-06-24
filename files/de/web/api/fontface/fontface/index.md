---
title: "FontFace: FontFace() Konstruktor"
short-title: FontFace()
slug: Web/API/FontFace/FontFace
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Der **`FontFace()`** Konstruktor erstellt ein neues [`FontFace`](/de/docs/Web/API/FontFace)-Objekt.

## Syntax

```js-nolint
new FontFace(family, source)
new FontFace(family, source, descriptors)
```

### Parameter

- `family`

  - : Gibt einen Schriftfamiliennamen an, der zum Abgleichen mit diesem `font-face` verwendet werden kann, wenn Elemente gestylt werden.

    Er nimmt dieselben Werte an wie der {{cssxref("@font-face/font-family", "font-family")}}-Deskriptor von {{cssxref("@font-face")}}.
    Dieser Wert kann auch über die [`FontFace.family`](/de/docs/Web/API/FontFace/family)-Eigenschaft gelesen und gesetzt werden.

- `source`

  - : Die Schriftquelle.
    Dies kann entweder sein:
    - Eine URL zu einer Schriftdatei.
    - Binäre `font-face`-Daten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder einem [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray).

- `descriptors` {{optional_inline}}
  - : Eine Reihe von optionalen Deskriptoren, die als ein Objekt übergeben werden.
    Es kann jeden der für `@font-face` verfügbaren Deskriptoren enthalten:
    - `ascentOverride`
      - : Mit einem zulässigen Wert für {{cssxref("@font-face/ascent-override")}}.
    - `descentOverride`
      - : Mit einem zulässigen Wert für {{cssxref("@font-face/descent-override")}}.
    - `display`
      - : Mit einem zulässigen Wert für {{cssxref("@font-face/font-display")}}.
    - `featureSettings`
      - : Mit einem zulässigen Wert für {{cssxref("font-feature-settings")}}.
    - `lineGapOverride`
      - : Mit einem zulässigen Wert für {{cssxref("@font-face/line-gap-override")}}.
    - `stretch`
      - : Mit einem zulässigen Wert für {{cssxref("@font-face/font-stretch")}}.
    - `style`
      - : Mit einem zulässigen Wert für {{cssxref("@font-face/font-style")}}.
    - `unicodeRange`
      - : Mit einem zulässigen Wert für {{cssxref("@font-face/unicode-range")}}.
    - `variationSettings`
      - : Mit einem zulässigen Wert für {{cssxref("@font-face/font-variation-settings")}}.
    - `weight`
      - : Mit einem zulässigen Wert für {{cssxref("@font-face/font-weight")}}.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine Deskriptorzeichenkette nicht der Grammatik des entsprechenden {{cssxref("@font-face")}}-Deskriptors entspricht oder die angegebene binäre Quelle nicht geladen werden kann.
    Dieser Fehler führt dazu, dass [`FontFace.status`](/de/docs/Web/API/FontFace/status) auf `error` gesetzt wird.

## Beispiele

```js
async function loadFonts() {
  const font = new FontFace("my-font", "url(my-font.woff)", {
    style: "normal",
    weight: "400",
    stretch: "condensed",
  });
  // wait for font to be loaded
  await font.load();
  // add font to document
  document.fonts.add(font);
  // enable font with CSS class
  document.body.classList.add("fonts-loaded");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face")}}
