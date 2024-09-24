---
title: "FontData: postscriptName-Eigenschaft"
short-title: postscriptName
slug: Web/API/FontData/postscriptName
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die **`postscriptName`** schreibgeschützte Eigenschaft der {{domxref("FontData")}}-Schnittstelle gibt den PostScript-Namen des Schriftschnitts zurück.

Dies ist der Name, der zur eindeutigen Identifizierung der PostScript-Schriftart verwendet wird und generell eine ununterbrochene Zeichenfolge enthält, die den Namen und Stil der Schriftart umfasst.

Beispiele sind:

- AppleSDGothicNeo-UltraLight
- Arial-Black
- AvenirNext-Heavy
- Katari-MediumItalic
- YuMin_36pKn-Extrabold

## Wert

Eine Zeichenkette.

## Beispiele

Das folgende Codebeispiel wird alle verfügbaren Schriftarten abfragen und Metadaten protokollieren. Dies könnte beispielsweise verwendet werden, um ein Schriftartenauswahl-Steuerelement zu füllen.

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

- [Fortgeschrittene Typografie mit lokalen Schriftarten verwenden](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
