---
title: Local Font Access API
slug: Web/API/Local_Font_Access_API
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{SeeCompatTable}}{{DefaultAPISidebar("Local Font Access API")}}

Die **Local Font Access API** bietet einen Mechanismus, um auf die lokal installierten Schriftdaten eines Benutzers zuzugreifen — dies umfasst höhere Details wie Namen, Stile und Familien sowie die rohen Bytes der zugrunde liegenden Schriftartdateien.

## Konzepte und Verwendung

[Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) waren bahnbrechend, um Typografie im Web zu ermöglichen, indem Webdesignern die Möglichkeit gegeben wurde, benutzerdefinierte Schriftarten für ein Webdokument bereitzustellen. Mit der {{cssxref("@font-face")}}-At-Regel spezifiziert, kann eine Webschriftart über eine in der `url()`-Funktion angegebene URL geladen werden.

`@font-face` hat mehrere andere nützliche Funktionen. Insbesondere können Sie auch den vollständigen oder Postscript-Namen der Schriftart in der `local()`-Funktion angeben, um dem Browser mitzuteilen, eine lokale Kopie zu verwenden, wenn der Benutzer die Schriftart auf seinem Computer installiert hat. Dies ist nicht ohne Probleme — `local()` ist als [Fingerprinting-Vektor](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts#local_fonts_as_fingerprint_vector) berüchtigt geworden.

Zusätzlich war es historisch gesehen schwierig, hochwertige Design-Tools im Web bereitzustellen, da es Herausforderungen bei der genauen Auflistung von Schriftarten und dem Zugriff auf niedrigstufige Schriftartdaten gab (zum Beispiel, um Filter und Transformationen anzuwenden). Aktuelle Apps verlassen sich oft auf Umgehungen, wie das Bitten der Benutzer, ihre Schriftarten auf einen Server hochzuladen, wo sie verarbeitet werden, um rohe Byte-Daten zu erhalten, oder die Installation eines separaten lokalen Programms zur Bereitstellung zusätzlicher Funktionen.

Die Local Font Access API wurde erstellt, um diese Probleme zu lösen.

Die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) ermöglicht den Zugriff auf ein Array von lokal installierten Schriftarten, die jeweils durch ein [`FontData`](/de/docs/Web/API/FontData)-Objektinstanz repräsentiert werden. [`FontData`](/de/docs/Web/API/FontData) hat mehrere Eigenschaften, die Zugriff auf Namen, Stile und Familien bieten, und es hat auch eine [`blob()`](/de/docs/Web/API/FontData/blob)-Methode, die Zugriff auf ein [`Blob`](/de/docs/Web/API/Blob) bietet, das die rohen Bytes der zugrunde liegenden Schriftartdatei enthält.

Bezüglich Datenschutz und Sicherheit:

- Die Local Font Access API ist so konzipiert, dass sie nur Zugriff auf die Daten bietet, die erforderlich sind, um die oben genannten Probleme zu lösen. Es besteht auch keine Anforderung für Browser, die vollständige Liste der verfügbaren lokalen Schriftarten bereitzustellen oder die Daten in der Reihenfolge bereitzustellen, in der sie auf der Festplatte erscheinen.
- Wenn [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) aufgerufen wird, wird der Benutzer um Erlaubnis gefragt, auf seine lokalen Schriftarten zuzugreifen. Der Status dieser Berechtigung kann über die [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden (die `local-fonts`-Berechtigung).
- Sie können den Zugriff auf diese Funktion über eine {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) steuern.

## Schnittstellen

- [`FontData`](/de/docs/Web/API/FontData)
  - : Repräsentiert eine einzelne lokale Schriftart.

## Erweiterungen zu anderen Schnittstellen

- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt wird, die die lokal verfügbaren Schriftarten darstellen.

## Beispiele

Für eine funktionierende Live-Demo, siehe [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Funktionsnachweis

```js
if ("queryLocalFonts" in window) {
  // The Local Font Access API is supported
}
```

### Schriftarten-Auflistung

Der folgende Codeausschnitt fragt alle verfügbaren Schriftarten ab und protokolliert Metadaten. Dies könnte beispielsweise verwendet werden, um ein Schriftart-Auswahlsteuerung zu befüllen.

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

### Zugriff auf niedrige Ebene

Die [`blob()`](/de/docs/Web/API/FontData/blob)-Methode bietet Zugriff auf niedrigstufige [SFNT](https://en.wikipedia.org/wiki/SFNT)-Daten — dies ist ein Schriftartdateiformat, das andere Schriftformate wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF) enthalten kann.

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
- Die {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) Direktive
