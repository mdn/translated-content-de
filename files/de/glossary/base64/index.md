---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{GlossarySidebar}}

**Base64** ist eine Gruppe ähnlicher [Binär-zu-Text-Codierung](https://en.wikipedia.org/wiki/Binary-to-text_encoding)-Schemata, die Binärdaten im [ASCII](/de/docs/Glossary/ASCII)-String-Format darstellen, indem sie sie in eine Basis-64-Repräsentation transformieren. Der Begriff _Base64_ stammt von einer speziellen [MIME-Inhaltsübertragungscodierung](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Wenn der Begriff "Base64" alleinstehend verwendet wird, um auf einen bestimmten [Algorithmus](/de/docs/Glossary/algorithm) zu verweisen, bezieht er sich typischerweise auf die Version von Base64, die in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), Abschnitt 4, beschrieben ist. Diese verwendet das folgende Alphabet zur Darstellung der Basis-64-Ziffern, zusammen mit `=` als Auffüllzeichen:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

Eine häufig verwendete Variante ist "Base64 URL safe", die das Auffüllzeichen weglässt und `+/` mit `-_` ersetzt, um Zeichen zu vermeiden, die in [URL](/de/docs/Glossary/URL)-Pfadsegmenten oder Abfrageparametern Probleme verursachen könnten. Diese Kodierung ist nicht erforderlich, wenn Sie die Daten nicht in ein Pfadsegment oder einen Abfrageparameter einfügen — zum Beispiel haben [Data-URLs](/de/docs/Web/URI/Schemes/data) keine von beiden und können die Standard-Base64-Kodierung verwenden.

Base64-Kodierungsschemata werden häufig verwendet, um Binärdaten für die Speicherung oder Übertragung über Medien zu kodieren, die nur mit ASCII-Text (oder einer Teilmenge von ASCII, die dennoch keine beliebigen Binärdaten akzeptiert) umgehen können. Dies stellt sicher, dass die Daten während des Transports intakt bleiben und nicht verändert werden. Häufige Anwendungen von Base64 umfassen:

- E-Mail über [MIME](https://en.wikipedia.org/wiki/MIME)
- Speicherung komplexer Daten in [XML](/de/docs/Web/XML)
- Kodierung von Binärdaten, damit sie in eine [`data:` URL](/de/docs/Web/URI/Schemes/data) aufgenommen werden können

## Zunahme der Kodierungsgröße

Jede Base64-Ziffer repräsentiert 6 Bits Daten. Somit können drei 8-Bit-Bytes der Eingabestring/Binärdatei (3×8 Bits = 24 Bits) durch vier 6-Bit-Base64-Ziffern (4×6 = 24 Bits) dargestellt werden.

Dies bedeutet, dass die Base64-Version eines Strings oder einer Datei typischerweise ungefähr ein Drittel größer ist als ihre Quelle (die genaue Zunahme hängt von verschiedenen Faktoren ab, wie der absoluten Länge des Strings, seiner Länge modulo 3 und ob Auffüllzeichen verwendet werden).

## JavaScript-Unterstützung

Browser bieten nativ zwei JavaScript-Funktionen zum Dekodieren und Kodieren von Base64-Strings:

- [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [verfügbar in Workern](/de/docs/Web/API/WorkerGlobalScope/btoa)): erstellt aus einem String von Binärdaten einen Base64-kodierten ASCII-String („btoa“ sollte als „binary to ASCII“ gelesen werden).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [verfügbar in Workern](/de/docs/Web/API/WorkerGlobalScope/atob)): dekodiert einen Base64-kodierten String („atob“ sollte als „ASCII to binary“ gelesen werden).

> [!NOTE]
> Base64 ist eine binäre Kodierung und keine Textkodierung, aber `btoa` und `atob` wurden zur Web-Plattform hinzugefügt, bevor sie Binärdatentypen unterstützte. Daher verwenden die beiden Funktionen Zeichenfolgen, um Binärdaten darzustellen, wobei der [Codepunkt](/de/docs/Glossary/code_point) jedes Zeichens den Wert jedes Bytes repräsentiert. Dies hat zu einem verbreiteten Missverständnis geführt, dass `btoa` verwendet werden kann, um beliebige Textdaten zu kodieren — etwa, um eine Base64 `data:` URL eines Text- oder HTML-Dokuments zu erstellen.
>
> Die Übereinstimmung von Byte und Codepunkt gilt jedoch nur zuverlässig für Codepunkte bis zu `0x7f`. Darüber hinaus führen Codepunkte über `0xff` dazu, dass `btoa` einen Fehler wirft, da der Maximalwert für 1 Byte überschritten wird. Der nächste Abschnitt beschreibt, wie man dieses Limit umgehen kann, wenn man beliebigen Unicode-Text kodiert.

## Das "Unicode-Problem"

Da `btoa` die Codepunkte seines Eingabestrings als Bytewerte interpretiert, wird durch den Aufruf von `btoa` auf einen String eine „Zeichen außerhalb des Bereichs“ Ausnahme ausgelöst, wenn der Codepunkt eines Zeichens `0xff` überschreitet. Für Anwendungsfälle, in denen Sie beliebigen Unicode-Text kodieren müssen, ist es notwendig, zuerst den String in seine Ausgangsbytes in [UTF-8](/de/docs/Glossary/UTF-8) zu konvertieren und dann die Bytes zu kodieren.

Die einfachste Lösung ist, `TextEncoder` und `TextDecoder` zu verwenden, um zwischen UTF-8 und einbyteigen Darstellungen des Strings zu konvertieren:

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

## Konvertieren beliebiger Binärdaten

Die `bytesToBase64` und `base64ToBytes` Funktionen im vorherigen Abschnitt können direkt verwendet werden, um zwischen Base64-Strings und [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)s zu konvertieren.

Für bessere Leistung ist eine asynchrone Umwandlung zwischen Base64-Daten-URLs nativ auf der Web-Plattform über die [`FileReader`](/de/docs/Web/API/FileReader) und [`fetch`](/de/docs/Web/API/Fetch_API)-APIs möglich:

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

## Siehe auch

- JavaScript-APIs:
  - [`Window.atob()`](/de/docs/Web/API/Window/atob) (auch [verfügbar in Workern](/de/docs/Web/API/WorkerGlobalScope/atob))
  - [`Window.btoa()`](/de/docs/Web/API/Window/btoa) (auch [verfügbar in Workern](/de/docs/Web/API/WorkerGlobalScope/btoa))
- [Data URLs](/de/docs/Web/URI/Schemes/data)
- [Base64](https://en.wikipedia.org/wiki/Base64) auf Wikipedia
- Base64-Algorithmus beschrieben in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
