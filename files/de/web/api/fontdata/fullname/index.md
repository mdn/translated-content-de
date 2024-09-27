---
title: "FontData: fullName-Eigenschaft"
short-title: fullName
slug: Web/API/FontData/fullName
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die schreibgeschützte **`fullName`**-Eigenschaft der [`FontData`](/de/docs/Web/API/FontData)-Schnittstelle gibt den vollständigen Namen des Schriftbildes zurück. Dies ist in der Regel ein menschenlesbarer Name, der zur Identifizierung der Schriftart verwendet wird, z. B. "Optima Bold".

Beispiele sind:

- Apple SD Gothic Neo UltraLight
- Arial Black
- Avenir Next Heavy
- Katari Medium Italic
- YuMincho +36p Kana Extrabold

## Wert

Ein String.

## Beispiele

Das folgende Code-Snippet fragt alle verfügbaren Schriftarten ab und protokolliert Metadaten. Dies könnte beispielsweise verwendet werden, um eine Schriftart-Auswahlsteuerung zu füllen.

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

- [Erweiterte Typografie mit lokalen Schriftarten verwenden](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
