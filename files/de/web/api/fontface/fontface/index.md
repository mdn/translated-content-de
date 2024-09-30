---
title: "FontFace: FontFace()-Konstruktor"
short-title: FontFace()
slug: Web/API/FontFace/FontFace
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Der **`FontFace()`**-Konstruktor erstellt ein neues [`FontFace`](/de/docs/Web/API/FontFace)-Objekt.

## Syntax

```js-nolint
new FontFace(family, source)
new FontFace(family, source, descriptors)
```

### Parameter

- `family`

  - : Gibt einen Schriftfamiliennamen an, der verwendet werden kann, um diese Schriftart zuzuordnen, wenn Elemente gestylt werden.

    Akzeptiert die gleichen Arten von Werten wie der {{cssxref("@font-face/font-family", "font-family")}}-Deskriptor von {{cssxref("@font-face")}}.
    Dieser Wert kann auch gelesen und gesetzt werden über die [`FontFace.family`](/de/docs/Web/API/FontFace/family)-Eigenschaft.

- `source`

  - : Die Schriftquelle.
    Dies kann entweder sein:

    - Eine URL zu einer Schriftdatei.
    - Binäre Schriftdaten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder einem [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray).

- `descriptors` {{optional_inline}}

  - : Eine Menge optionaler Deskriptoren, die als Objekt übergeben werden.
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
  - : Wird ausgelöst, wenn eine Deskriptorzeichenfolge nicht mit der Grammatik des entsprechenden {{cssxref("@font-face")}}-Deskriptors übereinstimmt oder die angegebene binäre Quelle nicht geladen werden kann.
    Dieser Fehler führt dazu, dass [`FontFace.status`](/de/docs/Web/API/FontFace/status) auf `error` gesetzt wird.

## Beispiele

```js
async function loadFonts() {
  const font = new FontFace("myfont", "url(myfont.woff)", {
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
