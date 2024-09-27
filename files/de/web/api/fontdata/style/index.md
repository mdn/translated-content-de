---
title: "FontData: style-Eigenschaft"
short-title: style
slug: Web/API/FontData/style
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die **`style`** schreibgeschützte Eigenschaft der [`FontData`](/de/docs/Web/API/FontData)-Schnittstelle gibt den Stil des Schriftsatzes zurück.

Dies ist der Wert, der verwendet wird, um den Stil der Schriftart auszuwählen, die Sie verwenden möchten, zum Beispiel innerhalb der {{cssxref("font-style")}}-Eigenschaft.

Beispiele sind:

- UltraLight
- Regular
- Heavy
- Medium Italic
- Extrabold

## Wert

Ein String.

## Beispiele

Der folgende Ausschnitt sucht nach allen verfügbaren Schriftarten und protokolliert Metadaten. Dies könnte beispielsweise verwendet werden, um eine Schriftart-Auswahlsteuerung zu füllen.

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
