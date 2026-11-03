---
title: "FontFace: Eigenschaft sizeAdjust"
short-title: sizeAdjust
slug: Web/API/FontFace/sizeAdjust
l10n:
  sourceCommit: 106f215d6fb32a7ee0afe09f01a82323d39cd1f0
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die Eigenschaft **`sizeAdjust`** der Schnittstelle [`FontFace`](/de/docs/Web/API/FontFace) gibt einen Multiplikator für die Umrisse und Metriken der {{Glossary("glyph", "Glyphen")}} einer Schriftart an, beispielsweise für Glyphenbreiten und Zeilenhöhen. Diese Werte werden für das Layout von Text verwendet.

Verschiedene Schriftarten können bei derselben Schriftgröße größer oder kleiner wirken, da die Glyphen jeder Schriftart im Verhältnis zur Schriftgröße unterschiedlich groß gezeichnet werden. Mit der Eigenschaft `sizeAdjust` können Sie eine Schriftart skalieren, sodass ihre wahrgenommene Größe der einer anderen Schriftart entspricht – beispielsweise einer Ersatzschriftart, die angezeigt wird, bis eine Webschriftart geladen ist.

Sie entspricht dem Deskriptor {{cssxref("@font-face/size-adjust")}} von {{cssxref("@font-face")}}.

## Wert

Eine Zeichenfolge mit einem nicht negativen Prozentwert, beispielsweise `"120%"`. Der Standardwert ist `"100%"`. Bei diesem Wert bleiben die Umrisse und Metriken der Glyphen unverändert.

Diese Eigenschaft akzeptiert dieselben Werte wie der Deskriptor {{cssxref("@font-face/size-adjust")}}.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft auf einen Wert gesetzt wird, der nicht der Syntax des Deskriptors {{cssxref("@font-face/size-adjust")}} entspricht, beispielsweise auf einen negativen Prozentwert.

## Beispiele

### Größenanpassung festlegen

In diesem Beispiel wird die Größenanpassung beim Erstellen einer Schriftart festgelegt und anschließend über die Eigenschaft aktualisiert.

```js
const fontFace = new FontFace(
  "Roboto",
  'url("https://fonts.example.com/roboto.woff2")',
  {
    sizeAdjust: "120%",
  },
);
console.log(fontFace.sizeAdjust); // "120%"

fontFace.sizeAdjust = "100%";
console.log(fontFace.sizeAdjust); // "100%"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/size-adjust")}}
- [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API)
