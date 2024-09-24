---
title: "FontData: fullName-Eigenschaft"
short-title: fullName
slug: Web/API/FontData/fullName
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die **`fullName`** schreibgeschützte Eigenschaft der {{domxref("FontData")}}-Schnittstelle gibt den vollständigen Namen des Schriftbilds zurück. Dies ist normalerweise ein für Menschen lesbarer Name, der zur Identifizierung der Schriftart verwendet wird, z.B. "Optima Bold".

Beispiele umfassen:

- Apple SD Gothic Neo UltraLight
- Arial Black
- Avenir Next Heavy
- Katari Medium Italic
- YuMincho +36p Kana Extrabold

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel wird nach allen verfügbaren Schriftarten gesucht und Metadaten protokolliert. Dies könnte beispielsweise verwendet werden, um eine Schriftart-Auswahlsteuerung zu füllen.

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
