---
title: FontData
slug: Web/API/FontData
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Das **`FontData`** Interface der {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}} repräsentiert ein einzelnes lokales Schriftbild.

## Instanz-Eigenschaften

- {{domxref('FontData.family')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Familie des Schriftbildes zurück.
- {{domxref('FontData.fullName')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den vollständigen Namen des Schriftbildes zurück.
- {{domxref('FontData.postscriptName')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den PostScript-Namen des Schriftbildes zurück.
- {{domxref('FontData.style')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Stil des Schriftbildes zurück.

## Instanz-Methoden

- {{domxref('FontData.blob()')}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("Blob")}} erfüllt wird, der die Rohdaten der zugrundeliegenden Schriftdatei enthält.

## Beispiele

Für eine funktionierende Live-Demo, siehe [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Schriften Aufzählung

Das folgende Beispiel fragt alle verfügbaren Schriften ab und protokolliert deren Metadaten. Dies könnte beispielsweise verwendet werden, um ein Schriftwahl-Steuerelement zu füllen.

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

### Zugriff auf niedrigstufige Daten

Die Methode {{domxref("FontData.blob", "blob()")}} ermöglicht den Zugriff auf niedrigstufige [SFNT](https://en.wikipedia.org/wiki/SFNT)-Daten — dies ist ein Schriftdateiformat, das andere Schriftformate wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF) enthalten kann.

```js
async function computeOutlineFormat() {
  try {
    const availableFonts = await window.queryLocalFonts({
      postscriptNames: ["ComicSansMS"],
    });
    for (const fontData of availableFonts) {
      // `blob()` gibt ein Blob zurück, das gültige und vollständige
      // SFNT-umschlossene Schrift-Daten enthält.
      const sfnt = await fontData.blob();
      // Schneiden Sie nur die Bytes aus, die wir benötigen: die ersten 4 Bytes sind die SFNT
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

- [Erweiterte Typografie mit lokalen Schriften nutzen](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
