---
title: "Window: queryLocalFonts() Methode"
short-title: queryLocalFonts()
slug: Web/API/Window/queryLocalFonts
l10n:
  sourceCommit: 6855bf0bdd644345f66b88b477fd219a5e7f866e
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`window.queryLocalFonts()`** Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt wird, die die lokal verfügbaren Schriftarten darstellen.

Um diese Methode zu verwenden, muss der Benutzer die Erlaubnis erteilen, auf `local-fonts` zuzugreifen (Der Berechtigungsstatus kann über die [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden). Zusätzlich kann diese Funktion durch eine auf Ihrem Server festgelegte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

## Syntax

```js-nolint
queryLocalFonts(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur ein Property definiert:
    - `postscriptNames` {{optional_inline}}
      - : Ein Array von PostScript-Namen der Schriften. Falls angegeben, werden nur Schriften mit PostScript-Namen, die mit denen im Array übereinstimmen, in die Ergebnisse aufgenommen; falls nicht, werden alle Schriften in die Ergebnisse aufgenommen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt wird, die die lokal verfügbaren Schriftarten darstellen.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Benutzer hat sich entschieden, die Berechtigung zu verweigern, diese Funktion zu verwenden, als er beim ersten Aufruf der Methode vom Berechtigungsdialogfeld des Browsers dazu aufgefordert wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert, oder sie wurde nicht über eine Benutzerinteraktion, wie z.B. einen Tastendruck, aufgerufen, oder der aktuelle {{Glossary("origin", "Origin")}} ist ein undurchsichtiges Origin.

## Beispiele

Für eine funktionsfähige Live-Demo siehe unser [Local Font Access API Demo](https://mdn.github.io/dom-examples/local-font-access/).

### Schriftarten-Auflistung

Das folgende Snippet wird alle verfügbaren Schriftarten abfragen und Metadaten protokollieren. Dies könnte beispielsweise verwendet werden, um ein Schriftartenauswahl-Steuerelement zu füllen.

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

### Begrenzung der zurückgegebenen Ergebnisse

Um die zurückgegebenen Schriftartdaten auf eine bestimmte Liste von Schriftarten zu beschränken, verwenden Sie die `postscriptNames` Option.

```js
async function returnSpecificFonts() {
  const availableFonts = await window.queryLocalFonts({
    postscriptNames: ["Verdana", "Verdana-Bold", "Verdana-Italic"],
  });

  return availableFonts;
}
```

### Zugriff auf Low-Level-Daten

Die Methode [`blob()`](/de/docs/Web/API/FontData/blob) bietet Zugriff auf Low-Level-[SFNT](https://en.wikipedia.org/wiki/SFNT)-Daten — dies ist ein Schriftartdateiformat, das andere Schriftformate wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF) enthalten kann.

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

- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)
- [Erweiterte Typografie mit lokalen Schriftarten verwenden](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
