---
title: FontData
slug: Web/API/FontData
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Die **`FontData`** Schnittstelle der [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) repräsentiert einen einzelnen lokalen Schriftschnitt.

## Instanz-Eigenschaften

- [`FontData.family`](/de/docs/Web/API/FontData/family) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Familie des Schriftschnittes zurück.
- [`FontData.fullName`](/de/docs/Web/API/FontData/fullName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den vollständigen Namen des Schriftschnittes zurück.
- [`FontData.postscriptName`](/de/docs/Web/API/FontData/postscriptName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den PostScript-Namen des Schriftschnittes zurück.
- [`FontData.style`](/de/docs/Web/API/FontData/style) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Stil des Schriftschnittes zurück.

## Instanz-Methoden

- [`FontData.blob()`](/de/docs/Web/API/FontData/blob) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) erfüllt wird, der die rohen Bytes der zugrunde liegenden Schriftdatei enthält.

## Beispiele

Für eine funktionierende Live-Demo, siehe [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Schriftarten Aufzählung

Der folgende Ausschnitt fragt alle verfügbaren Schriftarten ab und protokolliert Metadaten. Dies könnte beispielsweise verwendet werden, um ein Font-Picker-Steuerelement zu füllen.

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

Die [`blob()`](/de/docs/Web/API/FontData/blob) Methode bietet Zugriff auf niedrigstufige [SFNT](https://en.wikipedia.org/wiki/SFNT) Daten — dies ist ein Schriftdateiformat, das andere Schriftformate wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF) enthalten kann.

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

- [Fortschrittliche Typografie mit lokalen Schriften verwenden](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
