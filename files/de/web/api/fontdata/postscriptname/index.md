---
title: "FontData: postscriptName-Eigenschaft"
short-title: postscriptName
slug: Web/API/FontData/postscriptName
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`postscriptName`** der Schnittstelle [`FontData`](/de/docs/Web/API/FontData) gibt den PostScript-Namen des Zeichensatzes zurück.

Dies ist der Name, der verwendet wird, um den PostScript-Schriftart eindeutig zu identifizieren, und besteht im Allgemeinen aus einer ununterbrochenen Zeichenfolge, die den Namen und Stil der Schriftart enthält.

Beispiele umfassen:

- AppleSDGothicNeo-UltraLight
- Arial-Black
- AvenirNext-Heavy
- Katari-MediumItalic
- YuMin_36pKn-Extrabold

## Wert

Ein String.

## Beispiele

Der folgende Codeausschnitt wird nach allen verfügbaren Schriftarten abfragen und Metadaten protokollieren. Dies könnte z.B. verwendet werden, um ein Schriftart-Auswahlwerkzeug zu füllen.

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
