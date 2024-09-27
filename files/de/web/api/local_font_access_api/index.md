---
title: Local Font Access API
slug: Web/API/Local_Font_Access_API
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{SeeCompatTable}}{{DefaultAPISidebar("Local Font Access API")}}

Die **Local Font Access API** stellt einen Mechanismus zur Verfügung, um auf die lokal installierten Schriftartdaten des Benutzers zuzugreifen - dies umfasst höhere Ebenendetails wie Namen, Stile und Familien sowie die rohen Bytes der zugrunde liegenden Schriftartdateien.

## Konzepte und Verwendung

[Webfonts](/de/docs/Learn/CSS/Styling_text/Web_fonts) waren revolutionär für die Typografie im Web, da sie Webdesignern ermöglichten, benutzerdefinierte Schriftarten für die Verwendung in einem Webdokument bereitzustellen. Angegeben über die {{cssxref("@font-face")}}-Regel kann eine Webfont von einer in der `url()`-Funktion angegebenen URL geladen werden.

`@font-face` bietet mehrere andere nützliche Funktionen an. Insbesondere können Sie auch den vollständigen oder Postscript-Namen der Schriftart innerhalb der `local()`-Funktion angeben, um dem Browser mitzuteilen, eine lokale Kopie zu verwenden, falls der Benutzer die Schriftart auf seinem Computer installiert hat. Dies ist nicht ohne Probleme - `local()` ist bekannt geworden als ein [Fingerprinting-Vektor](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts#local_fonts_as_fingerprint_vector).

Darüber hinaus war es historisch schwierig, hochwertige Designwerkzeuge im Web bereitzustellen, aufgrund von Herausforderungen bei der genauen Schriftarten-Auflistung und dem Zugriff auf niedrigstufige Schriftartdaten (zum Beispiel, um Filter und Transformationen anzuwenden). Aktuelle Anwendungen verwenden oft Umgehungsmaßnahmen wie die Bitte an Benutzer, ihre Schriftarten auf einen Server hochzuladen, wo sie verarbeitet werden, um Rohbytes zu erhalten, oder die Installation eines separaten lokalen Programms, um zusätzliche Fähigkeiten bereitzustellen.

Die Local Font Access API wurde entwickelt, um diese Probleme zu lösen.

Die [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)-Methode bietet Zugriff auf ein Array von lokal installierten Schriftarten, die jeweils durch ein [`FontData`](/de/docs/Web/API/FontData)-Objekt dargestellt werden. [`FontData`](/de/docs/Web/API/FontData) verfügt über mehrere Eigenschaften, die Zugriff auf Namen, Stile und Familien bieten, und es hat auch eine [`blob()`](/de/docs/Web/API/FontData/blob)-Methode, die Zugriff auf ein [`Blob`](/de/docs/Web/API/Blob) gewährt, das die rohen Bytes der zugrunde liegenden Schriftartdatei enthält.

In Bezug auf Datenschutz und Sicherheit:

- Die Local Font Access API ist so konzipiert, dass sie nur den Zugang zu den Daten bietet, die zur Lösung der oben genannten Probleme erforderlich sind. Es besteht auch keine Anforderung für Browser, die vollständige Liste der verfügbaren lokalen Schriftarten bereitzustellen, noch die Daten in der gleichen Reihenfolge bereitzustellen, wie sie auf der Festplatte erscheinen.
- Wenn [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, auf seine lokalen Schriftarten zuzugreifen. Der Status dieser Erlaubnis kann über die [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden (die `local-fonts`-Erlaubnis).
- Sie können den Zugriff auf diese Funktion über eine {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) steuern.

## Schnittstellen

- [`FontData`](/de/docs/Web/API/FontData)
  - : Repräsentiert eine einzelne lokale Schriftart.

## Erweiterungen zu anderen Schnittstellen

- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt wird, welche die lokal verfügbaren Schriftarten darstellen.

## Beispiele

Für eine funktionierende Live-Demo siehe [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Feature-Erkennung

```js
if ("queryLocalFonts" in window) {
  // The Local Font Access API is supported
}
```

### Schriftartenauflistung

Der folgende Ausschnitt wird nach allen verfügbaren Schriftarten abfragen und Metadaten protokollieren. Dies könnte beispielsweise verwendet werden, um ein Schriftartauswahl-Steuerelement zu füllen.

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

Die [`blob()`](/de/docs/Web/API/FontData/blob)-Methode bietet Zugriff auf niedrigstufige [SFNT](https://en.wikipedia.org/wiki/SFNT)-Daten - dies ist ein Schriftartdateiformat, das andere Schriftartformate enthalten kann, wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF).

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

- [Verwenden Sie erweiterte Typografie mit lokalen Schriftarten](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
- Die {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Richtlinie
