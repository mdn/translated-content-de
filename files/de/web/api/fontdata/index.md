---
title: FontData
slug: Web/API/FontData
l10n:
  sourceCommit: 6855bf0bdd644345f66b88b477fd219a5e7f866e
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

Das **`FontData`** Interface der [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API) repräsentiert einen einzelnen lokalen Schriftschnitt.

## Instanz-Eigenschaften

- [`FontData.family`](/de/docs/Web/API/FontData/family) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Familie des Schriftschnitts zurück.
- [`FontData.fullName`](/de/docs/Web/API/FontData/fullName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den vollständigen Namen des Schriftschnitts zurück.
- [`FontData.postscriptName`](/de/docs/Web/API/FontData/postscriptName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den PostScript-Namen des Schriftschnitts zurück.
- [`FontData.style`](/de/docs/Web/API/FontData/style) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Stil des Schriftschnitts zurück.

## Instanz-Methoden

- [`FontData.blob()`](/de/docs/Web/API/FontData/blob) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) erfüllt wird, der die Rohbytes der zugrunde liegenden Schriftdatei enthält.

## Beispiele

Für ein Live-Beispiel sehen Sie sich unser [Local Font Access API Demo](https://mdn.github.io/dom-examples/local-font-access/) an.

### Schrifterkennung

Der folgende Codeausschnitt fragt alle verfügbaren Schriften ab und gibt Metadaten aus. Dies könnte beispielsweise verwendet werden, um eine Schriftauswahl-Steuerung zu füllen.

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

### Zugriff auf Low-Level-Daten

Die [`blob()`](/de/docs/Web/API/FontData/blob) Methode ermöglicht den Zugriff auf Low-Level [SFNT](https://en.wikipedia.org/wiki/SFNT) Daten — dies ist ein Schriftdateiformat, das andere Schriftformate enthalten kann, wie PostScript, TrueType, OpenType oder das Web Open Font Format (WOFF).

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

- [Verwenden Sie erweiterte Typografie mit lokalen Schriften](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
