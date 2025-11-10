---
title: "TextEncoder: encodeInto() Methode"
short-title: encodeInto()
slug: Web/API/TextEncoder/encodeInto
l10n:
  sourceCommit: ccd1540ad8c51242b318bf437dfabe2e5315b3fa
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`TextEncoder.encodeInto()`** Methode nimmt einen zu kodierenden String und ein Ziel-{{jsxref("Uint8Array")}}, um den resultierenden {{Glossary("UTF-8", "UTF-8")}} kodierten Text hineinzugeben, und gibt ein Objekt zurück, das den Fortschritt der Kodierung anzeigt.
Dies ist potenziell leistungsfähiger als die [`encode()`](/de/docs/Web/API/TextEncoder/encode) Methode – insbesondere wenn der Zielpuffer eine Ansicht in einen [Wasm](/de/docs/WebAssembly) Speicherbereich ist.

## Syntax

```js-nolint
encodeInto(string, uint8Array)
```

### Parameter

- `string`
  - : Ein String, der den zu kodierenden Text enthält.
- `uint8Array`
  - : Eine {{jsxref("Uint8Array")}}-Objektinstanz, in die der resultierende UTF-8 kodierte Text eingefügt wird.

### Rückgabewert

Ein Objekt, das zwei Mitglieder enthält:

- `read`
  - : Die Anzahl der {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} aus der Quelle, die in UTF-8 umgewandelt wurden.
    Dies kann kleiner als `string.length` sein, wenn `uint8Array` nicht genügend Platz hatte.
- `written`
  - : Die Anzahl der modifizierten Bytes im Ziel-`Uint8Array`.
    Die geschriebenen Bytes bilden garantiert vollständige UTF-8-Bytesequenzen.

## In eine bestimmte Position kodieren

`encodeInto()` legt seine Ausgabe immer am Anfang des Arrays ab.
Es ist jedoch manchmal nützlich, die Ausgabe an einem bestimmten Index zu starten.
Die Lösung ist [`TypedArray.prototype.subarray()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray):

```js
const encoder = new TextEncoder();

function encodeIntoAtPosition(string, u8array, position) {
  return encoder.encodeInto(
    string,
    position ? u8array.subarray(position | 0) : u8array,
  );
}

const u8array = new Uint8Array(8);
encodeIntoAtPosition("hello", u8array, 2);
console.log(u8array.join()); // 0,0,104,101,108,108,111,0
```

## Puffergröße

Um einen JavaScript-String `s` zu konvertieren, darf der für die vollständige Konvertierung benötigte Ausgabespeicher nie kleiner als `s.length` Bytes und nie größer als `s.length * 3` Bytes sein.
Das genaue UTF-8-zu-UTF-16-Längenverhältnis für Ihren String hängt von der Sprache ab, mit der Sie arbeiten:

- Für einfachen englischen Text, der hauptsächlich ASCII-Zeichen verwendet, liegt das Verhältnis nahe bei 1.
- Für Texte in Schriftsystemen, die Zeichen von U+0080 bis U+07FF verwenden, darunter Griechisch, Kyrillisch, Hebräisch, Arabisch etc., liegt das Verhältnis bei etwa 2.
- Für Texte in Schriftsystemen, die Zeichen von U+0800 bis U+FFFF verwenden, darunter Chinesisch, Japanisch, Koreanisch etc., beträgt das Verhältnis etwa 3.
- Es ist nicht üblich, dass ganze Schriftsysteme in [Nicht-BMP-Zeichen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) geschrieben werden (obwohl sie existieren). Diese Zeichen sind normalerweise mathematische Symbole, Emojis, historische Schriften etc. Das Verhältnis für diese Zeichen beträgt 2, da sie 4 Bytes in UTF-8 und 2 in UTF-16 benötigen.

Wenn die Ausgabezuordnung (typischerweise innerhalb des Wasm-Speicherbereichs) voraussichtlich kurzlebig ist, ist es sinnvoll, `s.length * 3` Bytes für die Ausgabe zu reservieren, in diesem Fall ist der erste Umwandlungsversuch garantiert, den ganzen String zu konvertieren.

Wenn Ihr Text hauptsächlich Englisch ist, ist es unwahrscheinlich, dass langer Text die Länge von `s.length * 2` Bytes überschreitet.
Daher könnte ein optimistischerer Ansatz darin bestehen, `s.length * 2 + 5` Bytes zu reservieren und bei der seltenen Gelegenheit, dass die optimistische Vorhersage falsch war, eine Neuzuordnung durchzuführen.

Wenn die Ausgabe voraussichtlich langlebig ist, wäre es sinnvoll, eine minimale Zuordnung `roundUpToBucketSize(s.length)`, die maximale Zuordnungsgröße `s.length * 3` zu berechnen und einen (als Kompromiss zwischen Speicherverbrauch und Geschwindigkeit) Schwellenwert `t` zu haben, sodass Sie, wenn `roundUpToBucketSize(s.length) + t >= s.length * 3`, für `s.length * 3` reservieren.
Andernfalls reservieren Sie zunächst für `roundUpToBucketSize(s.length)` und konvertieren.
Falls der `read`-Eintrag im Rückgabewörterbuch `s.length` beträgt, ist die Konvertierung abgeschlossen.
Falls nicht, reservieren Sie den Zielpuffer für `written + (s.length - read) * 3` neu und konvertieren dann den Rest, indem Sie einen Teilstring von `s` ab dem Index `read` und einen Teilpuffer des Zielpuffers ab dem Index `written` verwenden.

Oben ist `roundUpToBucketSize()`, eine Funktion, die auf die Bucket-Größe des Allokators aufrundet.
Wenn beispielsweise Ihr Wasm-Allokator bekannt ist, Potenzen von zwei zu verwenden, sollte `roundUpToBucketSize()` das Argument zurückgeben, wenn es eine Potenz von zwei ist oder die nächste Potenz von zwei andernfalls.
Wenn das Verhalten des Wasm-Allokators unbekannt ist, sollte `roundUpToBucketSize()` eine Identitätsfunktion sein.

Wenn das Verhalten Ihres Allokators unbekannt ist, möchten Sie möglicherweise bis zu zwei Neuzuordnungsschritte haben und den ersten Neuzuordnungsschritt die _restliche unkonvertierte_ Länge mal zwei anstelle von drei multiplizieren lassen.
In diesem Fall macht es jedoch Sinn, das übliche Multiplizieren mit zwei der _bereits geschriebenen_ Pufferspeicherlänge nicht zu implementieren, denn wenn eine zweite Neuzuweisung stattgefunden hat, würde sie im Vergleich zur ursprünglichen Länge mal drei stets überallokieren.
Der obige Rat setzt voraus, dass Sie keinen Speicherplatz für ein Null-Terminierungszeichen benötigen.
Das bedeutet, dass auf der Wasm-Seite mit Rust-Strings oder einer nicht-nullterminierenden C++-Klasse gearbeitet wird.
Wenn Sie mit C++ `std::string` arbeiten, müssen Sie, auch wenn die logische Länge angezeigt wird, das zusätzliche Terminierungsbyte berücksichtigen, wenn Sie das Aufrunden zur Bucket-Größe des Allokators berechnen.
Siehe den nächsten Abschnitt über C-Strings.

## Keine Null-Terminierung

Wenn der Eingabestring das Zeichen U+0000 enthält, wird `encodeInto()` ein 0x00-Byte in der Ausgabe schreiben.
`encodeInto()` _schreibt nicht_ ein C-ähnliches 0x00-Sentinel-Byte nach der logischen Ausgabe.

Wenn Ihr Wasm-Programm C-Strings verwendet, liegt es in Ihrer Verantwortung, das `0x00`-Sentinel zu schreiben, und Sie können nicht verhindern, dass Ihr Wasm-Programm einen logisch abgeschnittenen String sieht, wenn der JavaScript-String `U+0000` enthielt.
Beobachten Sie:

```js
const encoder = new TextEncoder();

function encodeIntoWithSentinel(string, u8array, position) {
  const stats = encoder.encodeInto(
    string,
    position ? u8array.subarray(position | 0) : u8array,
  );
  if (stats.written < u8array.length) u8array[stats.written] = 0; // append null if room
  return stats;
}
```

## Beispiele

### Kodierung in einen Puffer

```html
<p class="source">This is a sample paragraph.</p>
<p class="result"></p>
```

```js
const sourcePara = document.querySelector(".source");
const resultPara = document.querySelector(".result");
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();
const utf8 = new Uint8Array(string.length);

const encodedResults = textEncoder.encodeInto(string, utf8);
resultPara.textContent +=
  `Bytes read: ${encodedResults.read}` +
  ` | Bytes written: ${encodedResults.written}` +
  ` | Encoded result: ${utf8}`;
```

{{EmbedLiveSample('Encoding into a buffer')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TextEncoder`](/de/docs/Web/API/TextEncoder)-Interface, zu dem es gehört.
- [`TextEncoder.encode()`](/de/docs/Web/API/TextEncoder/encode)
