---
title: "Window: queryLocalFonts() Methode"
short-title: queryLocalFonts()
slug: Web/API/Window/queryLocalFonts
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`window.queryLocalFonts()`** Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData) Objekten erfüllt wird, die die lokal verfügbaren Schriftarten darstellen.

Um diese Methode zu verwenden, muss der Benutzer die Berechtigung zum Zugriff auf `local-fonts` erteilen (der Berechtigungsstatus kann über die [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden). Darüber hinaus kann diese Funktion durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt ist.

## Syntax

```js-nolint
queryLocalFonts(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:
    - `postscriptNames` {{optional_inline}}
      - : Ein Array von PostScript-Namen der Schriften. Wenn dies angegeben ist, werden nur Schriftarten mit PostScript-Namen, die mit den Einträgen im Array übereinstimmen, in die Ergebnisse aufgenommen; andernfalls werden alle Schriftarten in die Ergebnisse aufgenommen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData) Objekten erfüllt wird, die die lokal verfügbaren Schriftarten darstellen.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Benutzer hat sich entschieden, die Erlaubnis zur Nutzung dieser Funktion zu verweigern, als er beim ersten Aufruf der Methode mit der Berechtigungsaufforderung des Browsers konfrontiert wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert, oder es wurde nicht durch eine Benutzerinteraktion wie einen Tastendruck aufgerufen, oder der aktuelle {{Glossary("origin", "Origin")}} ist ein undurchsichtiger Origin.

## Beispiele

Für eine funktionierende Live-Demo siehe [Schriftartenauswahl-Demo](https://local-font-access.glitch.me/demo/).

### Schriftarten-Aufzählung

Das folgende Snippet wird alle verfügbaren Schriftarten abfragen und Metadaten protokollieren. Dies könnte beispielsweise verwendet werden, um ein Steuerungselement zur Schriftauswahl zu füllen.

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

Um die zurückgegebenen Schriftarten-Daten auf nur eine bestimmte Liste von Schriftarten zu beschränken, verwenden Sie die `postscriptNames` Option.

```js
async function returnSpecificFonts() {
  const availableFonts = await window.queryLocalFonts({
    postscriptNames: ["Verdana", "Verdana-Bold", "Verdana-Italic"],
  });

  return availableFonts;
}
```

### Zugriff auf Low-Level-Daten

Die [`blob()`](/de/docs/Web/API/FontData/blob) Methode bietet Zugang zu Low-Level [SFNT](https://en.wikipedia.org/wiki/SFNT) Daten — dies ist ein Schriftdateiformat, das andere Schriftformate wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF) enthalten kann.

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
- [Verwenden Sie erweiterte Typografie mit lokalen Schriftarten](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
