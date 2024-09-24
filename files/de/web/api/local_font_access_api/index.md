---
title: Lokale Schriftzugriffs-API
slug: Web/API/Local_Font_Access_API
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{SeeCompatTable}}{{DefaultAPISidebar("Local Font Access API")}}

Die **Lokale Schriftzugriffs-API** bietet einen Mechanismus, um auf die lokal installierten Schriftdaten eines Benutzers zuzugreifen — dies umfasst höherwertige Details wie Namen, Stile und Familien sowie die Rohbytes der zugrundeliegenden Schriftdateien.

## Konzepte und Verwendung

[Webschriften](/de/docs/Learn/CSS/Styling_text/Web_fonts) waren revolutionär für die Typografie im Web, indem sie es Webdesignern erlaubten, benutzerdefinierte Schriften für Webdokumente bereitzustellen. Angegeben über die {{cssxref("@font-face")}}-Regel, kann eine Webschrift aus einer URL geladen werden, die in der `url()`-Funktion angegeben ist.

`@font-face` hat mehrere weitere nützliche Funktionen. Insbesondere können Sie den vollständigen oder Postscript-Namen der Schrift innerhalb der `local()`-Funktion angeben, um dem Browser zu sagen, dass er eine lokale Kopie verwenden soll, wenn der Benutzer die Schrift auf seinem Computer installiert hat. Dies ist jedoch nicht ohne Probleme – `local()` ist berüchtigt dafür, als [Fingerabdruckvektor](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts#local_fonts_as_fingerprint_vector) genutzt zu werden.

Darüber hinaus waren hochwertige Design-Tools im Web historisch schwer bereitzustellen, aufgrund von Herausforderungen bei der genauen Schrifterfassung und dem Zugang zu niedrigstufigen Schriftdaten (zum Beispiel, um Filter und Transformationen anzuwenden). Aktuelle Apps verlassen sich oft auf Workarounds wie das Bitten der Benutzer, ihre Schriften auf einen Server hochzuladen, wo sie verarbeitet werden, um Rohbytes zu erhalten, oder die Installation eines separaten lokalen Programms, um zusätzliche Funktionen bereitzustellen.

Die Lokale Schriftzugriffs-API wurde entwickelt, um diese Probleme anzugehen.

Die Methode {{domxref("Window.queryLocalFonts()")}} bietet Zugriff auf ein Array lokal installierter Schriften, wobei jede durch ein {{domxref("FontData")}}-Objekt instanziiert wird. {{domxref("FontData")}} verfügt über mehrere Eigenschaften, die Zugriff auf Namen, Stile und Familien gewähren, und es besitzt auch eine {{domxref("FontData.blob", "blob()")}}-Methode, die Zugriff auf ein {{domxref("Blob")}} mit den Rohbytes der zugrundeliegenden Schriftdatei bietet.

In Bezug auf Datenschutz und Sicherheit:

- Die Lokale Schriftzugriffs-API ist so konzipiert, dass sie nur Zugriff auf die Daten bietet, die zur Lösung der oben genannten Probleme erforderlich sind. Es gibt auch keine Verpflichtung für Browser, die vollständige Liste der verfügbaren lokalen Schriften bereitzustellen oder die Daten in derselben Reihenfolge zu liefern, wie sie auf der Festplatte erscheinen.
- Wenn {{domxref("Window.queryLocalFonts()")}} aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, auf seine lokalen Schriften zuzugreifen. Der Status dieser Erlaubnis kann über die [Berechtigungs-API](/de/docs/Web/API/Permissions_API) (die `local-fonts`-Berechtigung) abgefragt werden.
- Sie können den Zugriff auf diese Funktion mit einer {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) steuern.

## Schnittstellen

- {{domxref("FontData")}}
  - : Repräsentiert eine einzelne lokale Schriftart.

## Erweiterungen anderer Schnittstellen

- {{domxref("Window.queryLocalFonts()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von {{domxref("FontData")}}-Objekten erfüllt wird, die die lokal verfügbaren Schriften darstellen.

## Beispiele

Für eine funktionierende Live-Demo siehe [Font Select Demo](https://local-font-access.glitch.me/demo/).

### Fähigkeitserkennung

```js
if ("queryLocalFonts" in window) {
  // Die Lokale Schriftzugriffs-API wird unterstützt
}
```

### Schrifterfassung

Das folgende Codebeispiel fragt nach allen verfügbaren Schriften und protokolliert deren Metadaten. Dies könnte beispielsweise verwendet werden, um ein Schriftauswahlelement zu füllen.

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

Die {{domxref("FontData.blob", "blob()")}}-Methode bietet Zugriff auf niedrigstufige [SFNT](https://en.wikipedia.org/wiki/SFNT)-Daten — dies ist ein Schriftdateiformat, das andere Schriftformate wie PostScript, TrueType, OpenType oder Web Open Font Format (WOFF) enthalten kann.

```js
async function computeOutlineFormat() {
  try {
    const availableFonts = await window.queryLocalFonts({
      postscriptNames: ["ComicSansMS"],
    });
    for (const fontData of availableFonts) {
      // `blob()` gibt ein Blob zurück, das gültige und vollständige
      // SFNT-eingebettete Schriftdaten enthält.
      const sfnt = await fontData.blob();
      // Schneiden Sie nur die Bytes heraus, die wir benötigen: die ersten 4 Bytes sind die SFNT
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
      console.log("Umrissformat:", outlineFormat);
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

- [Erweiterte Typografie mit lokalen Schriftarten verwenden](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
- Die {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)-Direktive
