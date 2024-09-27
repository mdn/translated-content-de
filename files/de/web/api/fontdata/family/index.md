---
title: "FontData: family-Eigenschaft"
short-title: family
slug: Web/API/FontData/family
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die **`family`** schreibgeschützte Eigenschaft der [`FontData`](/de/docs/Web/API/FontData)-Schnittstelle gibt die Familie des Schriftbilds zurück.

Dies ist der Name, der verwendet wird, wenn vom Code aus auf die Schriftfamilie verwiesen wird, zum Beispiel in der {{cssxref("font-family")}}-Eigenschaft oder in Bereichen innerhalb der {{cssxref("@font-face")}}-Regel wie der `local()`-Funktion.

Beispiele umfassen:

- Apple SD Gothic Neo
- Arial Black
- Avenir Next
- Katari
- YuMincho +36p Kana

## Wert

Ein String.

## Beispiele

Das folgende Snippet wird nach allen verfügbaren Schriftarten suchen und Metadaten protokollieren. Dies könnte zum Beispiel verwendet werden, um ein Schriftartenauswahlsteuerung zu füllen.

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
