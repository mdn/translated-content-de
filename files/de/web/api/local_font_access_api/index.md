---
title: Local Font Access API
slug: Web/API/Local_Font_Access_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Local Font Access API")}}

Die **Local Font Access API** bietet die Möglichkeit, auf die lokal installierten Schriftartdaten des Benutzers zuzugreifen — dazu gehören auch höherstufige Details wie Namen, Stile und Familien sowie die Rohdaten der zugrunde liegenden Schriftartdateien.

## Konzepte und Verwendung

[Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) waren revolutionär, da sie Typografie im Web ermöglichten, indem sie Webdesignern die Möglichkeit gaben, benutzerdefinierte Schriftarten für ein Webdokument bereitzustellen. Angegeben über die {{cssxref("@font-face")}}-Regel, kann ein Webfont von einer in der `url()`-Funktion angegebenen URL geladen werden.

`@font-face` hat mehrere weitere nützliche Funktionen. Insbesondere können Sie auch den vollständigen oder Postscript-Namen der Schriftart in der `local()`-Funktion angeben, um dem Browser zu signalisieren, eine lokale Kopie zu verwenden, wenn der Benutzer die Schriftart auf seinem Computer installiert hat. Dies ist nicht ohne Probleme — `local()` ist berüchtigt als [Fingerprinting-Vektor](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts#local_fonts_as_fingerprint_vector) geworden.

Darüber hinaus war es historisch gesehen schwierig, hochwertige Design-Tools im Web bereitzustellen, da es Herausforderungen bei der genauen Schriftartenenumeration und dem Zugriff auf niedrigstufige Schriftartdaten (zum Beispiel zum Anwenden von Filtern und Transformationen) gibt. Aktuelle Apps verlassen sich oft auf Workarounds, wie das Hochladen von Schriftarten durch Benutzer auf einen Server, wo sie verarbeitet werden, um Rohdaten zu erhalten, oder die Installation eines separaten lokalen Programms, um zusätzliche Fähigkeiten bereitzustellen.

Die Local Font Access API wurde entwickelt, um diese Probleme zu lösen.

Die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) bietet Zugriff auf ein Array von lokal installierten Schriftarten, die jeweils durch ein [`FontData`](/de/docs/Web/API/FontData)-Objektinstanz repräsentiert werden. [`FontData`](/de/docs/Web/API/FontData) verfügt über mehrere Eigenschaften, die Zugriff auf Namen, Stile und Familien bieten, und es hat auch eine [`blob()`](/de/docs/Web/API/FontData/blob)-Methode, die Zugriff auf ein [`Blob`](/de/docs/Web/API/Blob) enthält, das die Rohdaten der zugrunde liegenden Schriftdatei enthält.

In Bezug auf Datenschutz und Sicherheit:

- Die Local Font Access API ist so konzipiert, dass sie nur Zugriff auf die Daten bietet, die erforderlich sind, um die oben genannten Probleme zu lösen. Es gibt auch keine Anforderung für Browser, die vollständige Liste der verfügbaren lokalen Schriftarten bereitzustellen, noch die Daten in der gleichen Reihenfolge wie sie auf der Festplatte erscheinen.
- Wenn Sie [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) aufrufen, wird der Benutzer um Erlaubnis gebeten, auf seine lokalen Schriftarten zuzugreifen. Der Status dieser Erlaubnis kann über die [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden (die `local-fonts`-Berechtigung).
- Sie können den Zugriff auf diese Funktion mithilfe einer {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) steuern.

## Schnittstellen

- [`FontData`](/de/docs/Web/API/FontData)
  - : Repräsentiert einen einzelnen lokalen Schriftartensatz.

## Erweiterungen anderer Schnittstellen

- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`FontData`](/de/docs/Web/API/FontData)-Objekten erfüllt wird, die die lokal verfügbaren Schriftarten darstellen.

## Beispiele

Für ein funktionierendes Live-Demo siehe [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Funktionsprüfung

```js
if ("queryLocalFonts" in window) {
  // The Local Font Access API is supported
}
```

### Schriftartenenumeration

Der folgende Ausschnitt wird alle verfügbaren Schriftarten abfragen und Metadaten protokollieren. Dies könnte beispielsweise verwendet werden, um ein Schriftart-Auswahlsteuerung zu füllen.

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

Die [`blob()`](/de/docs/Web/API/FontData/blob)-Methode bietet Zugriff auf niedrigstufige [SFNT](https://en.wikipedia.org/wiki/SFNT)-Daten — dies ist ein Schriftart-Dateiformat, das andere Schriftformate enthalten kann, wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF).

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
- Die Richtlinie {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
