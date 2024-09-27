---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{GlossarySidebar}}

**Base64** ist eine Gruppe ähnlicher [Binär-zu-Text-Kodierung](https://en.wikipedia.org/wiki/Binary-to-text_encoding)-Schemata, die Binärdaten in einem [ASCII](/de/docs/Glossary/ASCII) String-Format darstellen, indem sie in eine Radix-64-Darstellung umgewandelt werden. Der Begriff _Base64_ stammt von einer speziellen [MIME-Inhaltsübertragungskodierung](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Wenn der Begriff "Base64" alleine verwendet wird, um auf ein spezifisches [Algorithmus](/de/docs/Glossary/algorithm) zu verweisen, bezieht er sich typischerweise auf die Version von Base64, die in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), Abschnitt 4, beschrieben wird. Diese verwendet das folgende Alphabet, um die Radix-64-Ziffern darzustellen, zusammen mit `=` als Auffüllzeichen:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

Eine häufige Variante ist "Base64 URL sicher", bei der das Auffüllzeichen weggelassen wird und `+/` durch `-_` ersetzt wird, um Zeichen zu vermeiden, die in [URL](/de/docs/Glossary/URL)-Pfadsegmenten oder Abfrageparametern Probleme verursachen könnten. Sie benötigen diese Kodierung nicht, wenn Sie die Daten nicht in einem Pfadsegment oder Abfrageparameter verwenden — zum Beispiel, [Data-URLs](/de/docs/Web/URI/Schemes/data) haben keines von beiden und können die standardmäßige Base64-Kodierung verwenden.

Base64-Kodierungsschemata werden häufig verwendet, um Binärdaten für die Speicherung oder Übertragung über Medien zu kodieren, die nur ASCII-Text verarbeiten können (oder eine Erweiterung von ASCII, die immer noch nicht beliebige Binärdaten akzeptiert). Dies stellt sicher, dass die Daten während des Transports unverändert bleiben. Häufige Anwendungen von Base64 umfassen:

- E-Mail über [MIME](https://en.wikipedia.org/wiki/MIME)
- Speicherung komplexer Daten in [XML](/de/docs/Web/XML)
- Kodierung von Binärdaten, damit sie in einer [`data:` URL](/de/docs/Web/URI/Schemes/data) enthalten sein können

## Kodierte Größenvergrößerung

Jede Base64-Ziffer repräsentiert 6 Bits Daten. Somit können drei 8-Bit-Bytes der Eingabestring/Binärdatei (3×8 Bits = 24 Bits) durch vier 6-Bit-Base64-Ziffern (4×6 = 24 Bits) dargestellt werden.

Das bedeutet, dass die Base64-Version eines Strings oder einer Datei typischerweise etwa ein Drittel größer ist als die Quelle (die genaue Größenvergrößerung hängt von verschiedenen Faktoren ab, wie der absoluten Länge des Strings, seiner Länge modulo 3 und ob Auffüllzeichen verwendet werden).

## JavaScript-Unterstützung

Browser bieten nativ zwei JavaScript-Funktionen zum Dekodieren und Kodieren von Base64-Strings:

- [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Arbeitern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa)): erstellt einen Base64-kodierten ASCII-String aus einem String von Binärdaten ("btoa" sollte als "binary to ASCII" gelesen werden).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Arbeitern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob)): dekodiert einen Base64-kodierten String ("atob" sollte als "ASCII to binary" gelesen werden).

> [!NOTE]
> Base64 ist eine Binärkodierung und keine Textkodierung, aber `btoa` und `atob` wurden zur Webplattform hinzugefügt, bevor diese Binärdatentypen unterstützte. Infolgedessen verwenden die beiden Funktionen Strings, um Binärdaten darzustellen, wobei der [Codepunkt](/de/docs/Glossary/code_point) jedes Zeichens den Wert jedes Bytes repräsentiert. Dies hat zu einem weit verbreiteten Missverständnis geführt, dass `btoa` verwendet werden kann, um beliebige Textdaten zu kodieren — zum Beispiel, um eine Base64 `data:` URL eines Text- oder HTML-Dokuments zu erstellen.
>
> Jedoch hält die Byte-zu-Codepunkt-Übereinstimmung nur für Codepunkte bis `0x7f` zuverlässig an. Darüber hinaus führen Codepunkte über `0xff` dazu, dass `btoa` einen Fehler auslöst, weil sie den Maximalwert für 1 Byte überschreiten. Der nächste Abschnitt erläutert, wie man dieses Limit umgeht, wenn man beliebigen Unicode-Text kodiert.

## Das "Unicode-Problem"

Da `btoa` die Codepunkte seines Eingabestrings als Byte-Werte interpretiert, wird ein Aufruf von `btoa` auf einem String einen "Character Out Of Range"-Ausnahmefehler verursachen, wenn der Codepunkt eines Zeichens `0xff` überschreitet. In Anwendungsfällen, in denen Sie beliebigen Unicode-Text kodieren müssen, ist es notwendig, zunächst den String in seine zugehörigen Bytes im [UTF-8](/de/docs/Glossary/UTF-8) umzuwandeln und dann die Bytes zu kodieren.

Die einfachste Lösung besteht darin, `TextEncoder` und `TextDecoder` zu verwenden, um zwischen UTF-8 und einbyteigen Darstellungen des Strings zu konvertieren:

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

// Usage
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

## Umwandlung beliebiger Binärdaten

Die Funktionen `bytesToBase64` und `base64ToBytes` im vorhergehenden Abschnitt können direkt verwendet werden, um zwischen Base64-Strings und [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)s zu konvertieren.

Für eine bessere Leistung ist die asynchrone Umwandlung zwischen Base64-Daten-URLs nativ innerhalb der Webplattform über die APIs [`FileReader`](/de/docs/Web/API/FileReader) und [`fetch`](/de/docs/Web/API/Fetch_API) möglich:

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

// Usage
await bytesToBase64DataUrl(new Uint8Array([0, 1, 2])); // "data:application/octet-stream;base64,AAEC"
await dataUrlToBytes("data:application/octet-stream;base64,AAEC"); // Uint8Array [0, 1, 2]
```

## Siehe Auch

- JavaScript APIs:
  - [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [in Arbeitern verfügbar](/de/docs/Web/API/WorkerGlobalScope/atob))
  - [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [in Arbeitern verfügbar](/de/docs/Web/API/WorkerGlobalScope/btoa))
- [Data-URLs](/de/docs/Web/URI/Schemes/data)
- [Base64](https://en.wikipedia.org/wiki/Base64) auf Wikipedia
- Base64 Algorithmus beschrieben in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
