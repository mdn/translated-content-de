---
title: "FontData: family-Eigenschaft"
short-title: family
slug: Web/API/FontData/family
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die **`family`**-Schreibgeschützte Eigenschaft der Schnittstelle [`FontData`](/de/docs/Web/API/FontData) gibt die Familie des Schriftbildes zurück.

Dies ist der Name, der verwendet wird, wenn auf die Schriftfamilie aus dem Code verwiesen wird, beispielsweise in der {{cssxref("font-family")}}-Eigenschaft oder an Stellen innerhalb der {{cssxref("@font-face")}}-Regel wie in der `local()`-Funktion.

Beispiele sind:

- Apple SD Gothic Neo
- Arial Black
- Avenir Next
- Katari
- YuMincho +36p Kana

## Wert

Ein String.

## Beispiele

Der folgende Ausschnitt wird nach allen verfügbaren Schriftarten abfragen und Metadaten protokollieren. Dies könnte beispielsweise verwendet werden, um ein Schriftart-Auswahlsteuerelement zu füllen.

```js
async function logFontData() {
  try {
    const availableFonts = await window.queryLocalFonts();
    for (const fontData of availableFonts) {
      console.log(fontData.postscriptName);
      console.log(fontData.fullName);
      console.log(fontData.family);
      console.log(fontData.style);
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden Sie erweiterte Typografie mit lokalen Schriftarten](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
