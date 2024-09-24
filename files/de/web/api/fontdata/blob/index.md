---
title: "FontData: blob()-Methode"
short-title: blob()
slug: Web/API/FontData/blob
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die **`blob()`**-Methode der {{domxref("FontData")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("Blob")}} erfüllt wird, der die Rohdaten der zugrundeliegenden Schriftdatei enthält.

## Syntax

```js-nolint
blob()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("Blob")}} erfüllt wird, der die Rohdaten der zugrundeliegenden Schriftdatei enthält.

## Beispiele

Die `blob()`-Methode bietet Zugriff auf [SFNT](https://en.wikipedia.org/wiki/SFNT)-Daten auf niedriger Ebene — dies ist ein Schriftdateiformat, das andere Schriftformate wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF) enthalten kann.

```js
async function computeOutlineFormat() {
  try {
    const availableFonts = await window.queryLocalFonts({
      postscriptNames: ["ComicSansMS"],
    });
    for (const fontData of availableFonts) {
      // `blob()` gibt ein Blob mit gültigen und vollständigen
      // SFNT-umwickelten Schriftdaten zurück.
      const sfnt = await fontData.blob();
      // Extrahieren Sie nur die Bytes, die wir benötigen: die ersten 4 Bytes sind die SFNT
      // Versionsinformationen.
      // Spezifikation: https://learn.microsoft.com/en-us/typography/opentype/spec/otff#organization-of-an-opentype-font
      const sfntVersion = await sfnt.slice(0, 4).text();

      let outlineFormat = "UNKNOWN";
      switch (sfntVersion) {
        case "\x00\x01\x00\x00":
        case "true":
        case "typ1":
          outlineFormat = "truetype";
          break;
        case "OTTO":
          outlineFormat = "cff";
          break;
      }
      console.log("Outline format:", outlineFormat);
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

- [Erweiterte Typografie mit lokalen Schriften verwenden](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
