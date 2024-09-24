---
title: "Fenster: queryLocalFonts() Methode"
short-title: queryLocalFonts()
slug: Web/API/Window/queryLocalFonts
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`window.queryLocalFonts()`** Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von {{domxref("FontData")}} Objekten erfüllt wird, welche die lokal verfügbaren Schriftarten darstellen.

Um diese Methode zu verwenden, muss der Benutzer die Berechtigung für den Zugriff auf `local-fonts` erteilen (der Berechtigungsstatus kann über die {{domxref("Permissions API", "", "", "nocode")}} abgefragt werden). Zusätzlich kann diese Funktion durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) auf Ihrem Server blockiert werden.

## Syntax

```js-nolint
queryLocalFonts(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Enthält optionale Konfigurationsparameter. Derzeit ist nur eine Eigenschaft definiert:
    - `postscriptNames` {{optional_inline}}
      - : Ein Array von PostScript-Namen der Schriften. Wenn dies angegeben ist, werden nur Schriften mit PostScript-Namen, die in dem Array enthalten sind, in die Ergebnisse aufgenommen; andernfalls werden alle Schriften in die Ergebnisse aufgenommen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von {{domxref("FontData")}} Objekten erfüllt wird, welche die lokal verfügbaren Schriftarten darstellen.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Der Benutzer hat sich entschieden, die Berechtigung zur Nutzung dieser Funktion zu verweigern, nachdem die Methode erstmals mit der Berechtigungsaufforderung des Browsers aufgerufen wurde.
- `SecurityError` {{domxref("DOMException")}}
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert, oder sie wurde nicht durch eine Benutzerinteraktion wie das Drücken eines Buttons aufgerufen, oder der aktuelle {{glossary("origin")}} ist ein undurchsichtiger Ursprung.

## Beispiele

Für eine funktionierende Live-Demo siehe [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Schriftartenauflistung

Das folgende Snippet fragt nach allen verfügbaren Schriften und protokolliert ihre Metadaten. Dies könnte beispielsweise verwendet werden, um ein Schriftartwahlwerkzeug zu füllen.

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

Um die zurückgegebenen Schriftdaten auf nur eine bestimmte Liste von Schriftarten zu beschränken, verwenden Sie die `postscriptNames` Option.

```js
async function returnSpecificFonts() {
  const availableFonts = await window.queryLocalFonts({
    postscriptNames: ["Verdana", "Verdana-Bold", "Verdana-Italic"],
  });

  return availableFonts;
}
```

### Zugriff auf niedrigstufige Daten

Die {{domxref("FontData.blob", "blob()")}} Methode bietet Zugriff auf niedrigstufige [SFNT](https://en.wikipedia.org/wiki/SFNT) Daten — dies ist ein Schriftartdateiformat, das andere Schriftformate wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF) enthalten kann.

```js
async function computeOutlineFormat() {
  try {
    const availableFonts = await window.queryLocalFonts({
      postscriptNames: ["ComicSansMS"],
    });
    for (const fontData of availableFonts) {
      // `blob()` gibt ein Blob zurück, das gültige und vollständige
      // SFNT-eingebettete Schriftartdaten enthält.
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

- {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}}
- [Verwenden Sie erweiterte Typografie mit lokalen Schriften](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
