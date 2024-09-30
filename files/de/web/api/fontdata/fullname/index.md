---
title: "FontData: fullName-Eigenschaft"
short-title: fullName
slug: Web/API/FontData/fullName
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`fullName`** der [`FontData`](/de/docs/Web/API/FontData)-Schnittstelle gibt den vollständigen Namen des Schriftschnitts zurück. Dies ist normalerweise ein menschenlesbarer Name, der zur Identifizierung der Schriftart verwendet wird, z. B. "Optima Bold".

Beispiele umfassen:

- Apple SD Gothic Neo UltraLight
- Arial Black
- Avenir Next Heavy
- Katari Medium Italic
- YuMincho +36p Kana Extrabold

## Wert

Ein Zeichenfolge.

## Beispiele

Das folgende Beispiel sucht nach allen verfügbaren Schriftarten und protokolliert Metadaten. Dies könnte beispielsweise verwendet werden, um ein Schriftarten-Auswahlwerkzeug zu füllen.

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

- [Verwendung fortgeschrittener Typografie mit lokalen Schriftarten](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
