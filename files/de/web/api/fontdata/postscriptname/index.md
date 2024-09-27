---
title: "FontData: postscriptName-Eigenschaft"
short-title: postscriptName
slug: Web/API/FontData/postscriptName
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die schreibgeschützte **`postscriptName`**-Eigenschaft der [`FontData`](/de/docs/Web/API/FontData)-Schnittstelle gibt den PostScript-Namen des Schriftartensatzes zurück.

Dies ist der Name, der verwendet wird, um die PostScript-Schriftart eindeutig zu identifizieren. Er besteht normalerweise aus einer ununterbrochenen Zeichenfolge, die den Namen und Stil der Schriftart enthält.

Beispiele hierfür sind:

- AppleSDGothicNeo-UltraLight
- Arial-Black
- AvenirNext-Heavy
- Katari-MediumItalic
- YuMin_36pKn-Extrabold

## Wert

Ein String.

## Beispiele

Das folgende Beispiel wird nach allen verfügbaren Schriftarten suchen und Metadaten protokollieren. Dies könnte beispielsweise verwendet werden, um ein Schriftartenauswahl-Steuerelement zu füllen.

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
