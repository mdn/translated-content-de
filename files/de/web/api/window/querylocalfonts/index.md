---
title: "Window: queryLocalFonts()-Methode"
short-title: queryLocalFonts()
slug: Web/API/Window/queryLocalFonts
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`window.queryLocalFonts()`**-Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt wird, die die lokal verfügbaren Schriftarten repräsentieren.

Um diese Methode zu verwenden, muss der Benutzer die Erlaubnis erteilen, auf `local-fonts` zuzugreifen (der Berechtigungsstatus kann über die [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden). Darüber hinaus kann diese Funktion durch eine auf Ihrem Server gesetzte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

## Syntax

```js-nolint
queryLocalFonts(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:
    - `postscriptNames` {{optional_inline}}
      - : Ein Array von Schriftart-PostScript-Namen. Wenn dies angegeben wird, werden nur Schriftarten mit PostScript-Namen, die mit denen im Array übereinstimmen, in die Ergebnisse einbezogen; wenn nicht, werden alle Schriftarten in die Ergebnisse einbezogen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt wird, die die lokal verfügbaren Schriftarten repräsentieren.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Benutzer hat die Erlaubnis zur Nutzung dieser Funktion verweigert, als er vom Browser zu einem Berechtigungsdialog aufgefordert wurde, nachdem die Methode das erste Mal aufgerufen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert, oder sie wurde nicht durch eine Benutzerinteraktion wie einen Tastendruck aufgerufen, oder der aktuelle [Origin](/de/docs/Glossary/origin) ist ein undurchsichtiger Origin.

## Beispiele

Für eine funktionierende Live-Demo siehe [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Schrifterstellung

Das folgende Snippet fragt alle verfügbaren Schriftarten ab und protokolliert die Metadaten. Dies könnte zum Beispiel verwendet werden, um ein Schriftartauswahl-Element zu füllen.

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

Um die zurückgegebenen Schriftartdaten nur auf eine spezifische Liste von Schriftarten zu beschränken, verwenden Sie die `postscriptNames`-Option.

```js
async function returnSpecificFonts() {
  const availableFonts = await window.queryLocalFonts({
    postscriptNames: ["Verdana", "Verdana-Bold", "Verdana-Italic"],
  });

  return availableFonts;
}
```

### Zugriff auf niedrigstufige Daten

Die [`blob()`](/de/docs/Web/API/FontData/blob)-Methode bietet Zugriff auf niedrigstufige [SFNT](https://en.wikipedia.org/wiki/SFNT)-Daten — dies ist ein Schriftart-Dateiformat, das andere Schriftformate wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF) enthalten kann.

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
