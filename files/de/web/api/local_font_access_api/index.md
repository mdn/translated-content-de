---
title: Local Font Access API
slug: Web/API/Local_Font_Access_API
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{SeeCompatTable}}{{DefaultAPISidebar("Local Font Access API")}}

Die **Local Font Access API** bietet einen Mechanismus zum Zugriff auf die lokal installierten Schriftdateien der Benutzer — hierzu gehören höherstufige Informationen wie Namen, Stile und Familien sowie die Rohdaten der zugrunde liegenden Schriftdateien.

## Konzepte und Verwendung

[Webfonts](/de/docs/Learn/CSS/Styling_text/Web_fonts) waren bahnbrechend, da sie es Webdesignern ermöglichten, benutzerdefinierte Schriftarten für ein Webdokument bereitzustellen. Über die {{cssxref("@font-face")}}-At-Regel spezifiziert, kann ein Webfont über eine in der `url()`-Funktion angegebene URL geladen werden.

`@font-face` bietet mehrere weitere nützliche Funktionen. Insbesondere können Sie den vollständigen Namen oder den Postscript-Namen der Schriftart innerhalb der `local()`-Funktion angeben, damit der Browser eine lokale Kopie verwendet, wenn der Benutzer die Schrift auf seinem Computer installiert hat. Dies geht nicht ohne Probleme einher — `local()` ist als [Fingerprinting-Vektor](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts#local_fonts_as_fingerprint_vector) berüchtigt geworden.

Darüber hinaus war es historisch gesehen schwierig, hochmoderne Designwerkzeuge im Web bereitzustellen, da es Herausforderungen bei der genauen Schrifterfassung und dem Zugriff auf niedrigstufige Schriftartdaten gab (z. B. um Filter und Transformationen anzuwenden). Aktuelle Apps greifen oft auf Umgehungen zurück, wie z. B. das Anfordern der Nutzer ihre Schriften auf einen Server hochzuladen, wo sie verarbeitet werden, um Rohdaten zu erhalten, oder die Installation eines separaten lokalen Programms, um zusätzliche Funktionen bereitzustellen.

Die Local Font Access API wurde entwickelt, um diese Probleme zu lösen.

Die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) bietet Zugriff auf ein Array von lokal installierten Schriftarten, die jeweils durch ein [`FontData`](/de/docs/Web/API/FontData) Objektinstanz dargestellt werden. [`FontData`](/de/docs/Web/API/FontData) hat mehrere Eigenschaften, die Zugang zu Namen, Stilen und Familien bieten, und es hat auch eine Methode [`blob()`](/de/docs/Web/API/FontData/blob), die Zugriff auf ein [`Blob`](/de/docs/Web/API/Blob) gewährt, das die Rohdaten der zugrunde liegenden Schriftdatei enthält.

In Bezug auf Datenschutz und Sicherheit:

- Die Local Font Access API ist so konzipiert, dass nur auf die Daten zugegriffen wird, die zur Lösung der oben genannten Probleme erforderlich sind. Es gibt auch keine Anforderung für Browser, die vollständige Liste der verfügbaren lokalen Fonts bereitzustellen oder die Daten in der gleichen Reihenfolge anzuzeigen, wie sie auf der Festplatte erscheinen.
- Wenn [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, auf seine lokalen Schriftarten zuzugreifen. Der Status dieser Erlaubnis kann über die [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden (die `local-fonts`-Berechtigung).
- Sie können den Zugriff auf diese Funktion über eine {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) steuern.

## Schnittstellen

- [`FontData`](/de/docs/Web/API/FontData)
  - : Repräsentiert eine einzelne lokale Schriftart.

## Erweiterungen zu anderen Schnittstellen

- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt wird, die die lokal verfügbaren Schriftarten darstellen.

## Beispiele

Für eine funktionierende Live-Demo siehe [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Funktionsüberprüfung

```js
if ("queryLocalFonts" in window) {
  // The Local Font Access API is supported
}
```

### Schriften-Auflistung

Das folgende Snippet fragt nach allen verfügbaren Schriftarten und protokolliert Metadaten. Dies könnte beispielsweise verwendet werden, um ein Schriftenauswahl-Steuerelement zu füllen.

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

Die Methode [`blob()`](/de/docs/Web/API/FontData/blob) bietet Zugang zu niedrigstufigen [SFNT](https://en.wikipedia.org/wiki/SFNT)-Daten — dies ist ein Schriftformat, das andere Schriftformate enthalten kann, wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF).

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

- [Erweiterte Typografie mit lokalen Fonts verwenden](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
- Die Direktive {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
