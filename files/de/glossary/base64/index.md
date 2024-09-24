---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{GlossarySidebar}}

**Base64** ist eine Gruppe von ähnlichen [Binary-to-Text-Encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding)-Schemata, die binäre Daten in einem {{glossary("ASCII")}}-Zeichenfolgenformat darstellen, indem sie in eine Radix-64-Darstellung umgewandelt werden. Der Begriff _Base64_ stammt von einer speziellen [MIME Content Transfer Encoding](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Wenn der Begriff "Base64" eigenständig verwendet wird, um auf einen bestimmten {{glossary("algorithm")}} zu verweisen, bezieht er sich typischerweise auf die Version von Base64, die in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), Abschnitt 4, beschrieben ist, welche das folgende Alphabet verwendet, um die Radix-64-Ziffern darzustellen, zusammen mit `=` als Auffüllzeichen:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

Eine häufige Variante ist "Base64 URL safe", die das Auffüllzeichen weglässt und `+/` durch `-_` ersetzt, um Zeichen zu vermeiden, die in {{glossary("URL")}}-Pfadsegmenten oder Abfrageparametern Probleme verursachen könnten. Diese Kodierung ist nicht erforderlich, wenn die Daten nicht in einem Pfadsegment oder Abfrageparameter verwendet werden — beispielsweise haben [Daten-URLs](/de/docs/Web/URI/Schemes/data) weder noch und können die Standard-Base64-Kodierung verwenden.

Base64-Codierungsschemata werden häufig verwendet, um binäre Daten zur Speicherung oder Übertragung über Medien zu kodieren, die nur mit ASCII-Text (oder einer ASCII-Erweiterung, die keine beliebigen binären Daten akzeptiert) umgehen können. Dies stellt sicher, dass die Daten während des Transports unverändert bleiben. Häufige Anwendungen von Base64 umfassen:

- E-Mail über [MIME](https://en.wikipedia.org/wiki/MIME)
- Speicherung komplexer Daten in [XML](/de/docs/Web/XML)
- Kodierung binärer Daten zur Einbeziehung in eine [`data:` URL](/de/docs/Web/URI/Schemes/data)

## Erhöhte kodierte Größe

Jede Base64-Ziffer repräsentiert 6 Bits an Daten. So können drei 8-Bit-Bytes der Eingabestrings/Binärdatei (3×8 Bits = 24 Bits) durch vier 6-Bit-Base64-Ziffern (4×6 = 24 Bits) dargestellt werden.

Das bedeutet, dass die Base64-Version eines Strings oder einer Datei in der Regel etwa ein Drittel größer ist als ihre Quelle (die genaue Größenzunahme hängt von verschiedenen Faktoren ab, wie etwa der absoluten Länge des Strings, ihrer Länge modulo 3 und ob Auffüllzeichen verwendet werden).

## JavaScript-Unterstützung

Browser bieten nativ zwei JavaScript-Funktionen zum Dekodieren und Kodieren von Base64-Strings:

- {{domxref("Window.btoa()")}} (auch {{domxref("WorkerGlobalScope.btoa()", "in Workern verfügbar", "", "nocode")}}): erstellt eine Base64-codierte ASCII-Zeichenfolge aus einer Zeichenfolge von Binärdaten ("btoa" sollte als "binary to ASCII" gelesen werden).
- {{domxref("Window.atob()")}} (auch {{domxref("WorkerGlobalScope.atob()", "in Workern verfügbar", "", "nocode")}}): dekodiert eine Base64-codierte Zeichenfolge ("atob" sollte als "ASCII to binary" gelesen werden).

> [!NOTE]
> Base64 ist eine binäre Kodierung und keine Textkodierung, aber `btoa` und `atob` wurden in die Webplattform eingeführt, bevor sie Binärdatentypen unterstützte. Infolgedessen verwenden die beiden Funktionen Strings, um binäre Daten darzustellen, wobei der {{glossary("code point")}} jedes Zeichens den Wert jedes Bytes repräsentiert. Dies hat zu einem häufigen Missverständnis geführt, dass `btoa` verwendet werden kann, um beliebige Textdaten zu kodieren — beispielsweise durch Erstellen einer Base64 `data:` URL eines Text- oder HTML-Dokuments.
>
> Die Byte-zu-Codepoint-Korrespondenz gilt jedoch nur zuverlässig für Codepunkte bis zu `0x7f`. Darüber hinaus führen Codepunkte über `0xff` dazu, dass `btoa` einen Fehler wirft, da sie den Maximalwert für 1 Byte überschreiten. Der nächste Abschnitt beschreibt, wie dieses Limit bei der Kodierung beliebigen Unicode-Textes umgangen werden kann.

## Das „Unicode-Problem“

Da `btoa` die Codepunkte seiner Eingabezeichenfolge als Byte-Werte interpretiert, führt ein Aufruf von `btoa` für eine Zeichenfolge zu einer "Character Out Of Range"-Ausnahme, wenn der Codepunkt eines Zeichens `0xff` überschreitet. Für Anwendungsfälle, bei denen Sie willkürlichen Unicode-Text kodieren müssen, ist es notwendig, die Zeichenfolge zuerst in ihre Bestandteile in {{glossary("UTF-8")}} zu konvertieren und dann die Bytes zu kodieren.

Die einfachste Lösung besteht darin, `TextEncoder` und `TextDecoder` zu verwenden, um zwischen UTF-8 und Ein-Byte-Darstellungen der Zeichenfolge zu konvertieren:

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

// Verwendung
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

## Konvertierung beliebiger Binärdaten

Die `bytesToBase64`- und `base64ToBytes`-Funktionen aus dem vorherigen Abschnitt können direkt zur Umwandlung zwischen Base64-Strings und [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)s verwendet werden.

Für eine bessere Leistung ist eine asynchrone Konvertierung zwischen Base64-Daten-URLs nativ innerhalb der Webplattform über die [`FileReader`](/de/docs/Web/API/FileReader)- und [`fetch`](/de/docs/Web/API/Fetch_API)-APIs möglich:

```js
async function bytesToBase64DataUrl(bytes, type = "application/octet-stream") {
  return await new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: () => resolve(reader.result),
      onerror: () => reject(reader.error),
    });
    reader.readAsDataURL(new File([bytes], "", { type }));
  });
}

async function dataUrlToBytes(dataUrl) {
  const res = await fetch(dataUrl);
  return new Uint8Array(await res.arrayBuffer());
}

// Verwendung
await bytesToBase64DataUrl(new Uint8Array([0, 1, 2])); // "data:application/octet-stream;base64,AAEC"
await dataUrlToBytes("data:application/octet-stream;base64,AAEC"); // Uint8Array [0, 1, 2]
```

## Siehe auch

- JavaScript-APIs:
  - {{domxref("Window.atob()")}} (auch {{domxref("WorkerGlobalScope.atob()", "in Workern verfügbar", "", "nocode")}})
  - {{domxref("Window.btoa()")}} (auch {{domxref("WorkerGlobalScope.btoa()", "in Workern verfügbar", "", "nocode")}})
- [Daten-URLs](/de/docs/Web/URI/Schemes/data)
- [Base64](https://en.wikipedia.org/wiki/Base64) auf Wikipedia
- Base64-Algorithmus beschrieben in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
