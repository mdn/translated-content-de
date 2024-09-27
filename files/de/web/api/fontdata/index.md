---
title: FontData
slug: Web/API/FontData
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die **`FontData`**-Schnittstelle der [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) repräsentiert eine einzelne lokale Schriftart.

## Instanzeigenschaften

- [`FontData.family`](/de/docs/Web/API/FontData/family) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Familie der Schriftart zurück.
- [`FontData.fullName`](/de/docs/Web/API/FontData/fullName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den vollständigen Namen der Schriftart zurück.
- [`FontData.postscriptName`](/de/docs/Web/API/FontData/postscriptName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den PostScript-Namen der Schriftart zurück.
- [`FontData.style`](/de/docs/Web/API/FontData/style) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Stil der Schriftart zurück.

## Instanzmethoden

- [`FontData.blob()`](/de/docs/Web/API/FontData/blob) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) erfüllt wird, der die Rohbytes der zugrunde liegenden Schriftartdatei enthält.

## Beispiele

Für eine funktionierende Live-Demo siehe [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Schriftenenumeration

Der folgende Ausschnitt wird nach allen verfügbaren Schriftarten suchen und Metadaten protokollieren. Dies könnte beispielsweise verwendet werden, um ein Schriftart-Auswahlsteuerung zu füllen.

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

Die Methode [`blob()`](/de/docs/Web/API/FontData/blob) ermöglicht den Zugriff auf niedrigstufige [SFNT](https://en.wikipedia.org/wiki/SFNT)-Daten — dies ist ein Schriftartdateiformat, das andere Schriftformate wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF) enthalten kann.

```js
async function computeOutlineFormat() {
  try {
    const availableFonts = await window.queryLocalFonts({
      postscriptNames: ["ComicSansMS"],
    });
    for (const fontData of availableFonts) {
      // `blob()` returns a Blob containing valid and complete
      // SFNT-wrapped font data.
      const sfnt = await fontData.blob();
      // Slice out only the bytes we need: the first 4 bytes are the SFNT
      // version info.
      // Spec: https://learn.microsoft.com/en-us/typography/opentype/spec/otff#organization-of-an-opentype-font
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

- [Verwenden Sie fortgeschrittene Typografie mit lokalen Schriftarten](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
