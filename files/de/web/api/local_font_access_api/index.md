---
title: Local Font Access API
slug: Web/API/Local_Font_Access_API
l10n:
  sourceCommit: 6855bf0bdd644345f66b88b477fd219a5e7f866e
---

{{SeeCompatTable}}{{DefaultAPISidebar("Local Font Access API")}}

Die **Local Font Access API** bietet einen Mechanismus, um auf die lokal installierten Schriftartdaten des Benutzers zuzugreifen — dazu gehören höhere Details wie Namen, Stile und Familien sowie die Rohdaten der zugrunde liegenden Schriftartdateien.

## Konzepte und Nutzung

[Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) waren revolutionär, indem sie Typografie im Web ermöglichten, da sie Webdesignern erlauben, benutzerdefinierte Schriften bereitzustellen, die in einem Webdokument verwendet werden können. Angegeben über die {{cssxref("@font-face")}}-Regel, kann ein Webfont von einer in der `url()`-Funktion bereitgestellten URL geladen werden.

`@font-face` hat mehrere andere nützliche Funktionen. Insbesondere können Sie den vollständigen Namen oder Postscript-Namen der Schriftart in der Funktion `local()` angeben, um dem Browser mitzuteilen, dass er eine lokale Kopie verwenden soll, wenn der Benutzer die Schriftart auf seinem Computer installiert hat. Dies ist nicht ohne Probleme — `local()` ist berüchtigt geworden als ein [Fingerprinting-Vektor](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts#local_fonts_as_fingerprint_vector).

Darüber hinaus waren High-End-Designtools historisch schwer im Web bereitzustellen, aufgrund von Herausforderungen bei der genauen Schrifterkennung und dem Zugriff auf niedere Schriftartdaten (zum Beispiel, um Filter und Transformationen anzuwenden). Aktuelle Apps verlassen sich oft auf Workarounds, wie zum Beispiel den Benutzern zu bitten, ihre Schriftarten auf einen Server hochzuladen, wo sie verarbeitet werden, um Rohdatendaten zu erhalten, oder ein separates lokales Programm zu installieren, um zusätzliche Funktionen bereitzustellen.

Die Local Font Access API wurde erstellt, um diese Probleme zu lösen.

Die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) bietet Zugriff auf ein Array lokal installierter Schriften, die jeweils durch eine [`FontData`](/de/docs/Web/API/FontData)-Objektinstanz repräsentiert werden. [`FontData`](/de/docs/Web/API/FontData) hat mehrere Eigenschaften, die Zugriff auf Namen, Stile und Familien bieten, und es hat auch eine [`blob()`](/de/docs/Web/API/FontData/blob)-Methode, die Zugriff auf ein [`Blob`](/de/docs/Web/API/Blob) bietet, das die Rohdaten der zugrunde liegenden Schriftartdatei enthält.

In Bezug auf Datenschutz und Sicherheit:

- Die Local Font Access API ist so konzipiert, dass sie nur den Zugang zu den Daten bietet, die zur Lösung der oben genannten Probleme erforderlich sind. Es gibt auch keine Anforderung an Browser, die vollständige Liste der verfügbaren lokalen Schriften bereitzustellen oder die Daten in derselben Reihenfolge zu liefern, wie sie auf der Festplatte erscheinen.
- Wenn [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, auf seine lokalen Schriftarten zuzugreifen. Der Status dieser Erlaubnis kann über die [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden (die Berechtigung `local-fonts`).
- Sie können den Zugang zu dieser Funktion mit einer {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) steuern.

## Schnittstellen

- [`FontData`](/de/docs/Web/API/FontData)
  - : Repräsentiert ein einzelnes lokales Schriftbild.

## Erweiterungen zu anderen Schnittstellen

- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt wird, die die lokal verfügbaren Schriftbilder repräsentieren.

## Beispiele

Für eine funktionierende Live-Demo, siehe unser [Local Font Access API-Demo](https://mdn.github.io/dom-examples/local-font-access/).

### Feature-Erkennung

```js
if ("queryLocalFonts" in window) {
  // The Local Font Access API is supported
}
```

### Schriftarten-Aufzählung

Das folgende Snippet fragt nach allen verfügbaren Schriftarten und protokolliert Metadaten. Dies könnte verwendet werden, um beispielsweise ein Schriftarten-Auswahlsteuerung zu füllen.

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

Die [`blob()`](/de/docs/Web/API/FontData/blob)-Methode bietet Zugriff auf niedrigstufige [SFNT](https://en.wikipedia.org/wiki/SFNT)-Daten — dies ist ein Schriftartdateiformat, das andere Schriftformate enthalten kann, wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF).

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
- Die {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}}-Richtlinie [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
