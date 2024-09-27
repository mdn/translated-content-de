---
title: "TextEncoder: encodeInto() Methode"
short-title: encodeInto()
slug: Web/API/TextEncoder/encodeInto
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`TextEncoder.encodeInto()`** Methode nimmt einen zu kodierenden String und ein Ziel-{{jsxref("Uint8Array")}}, um den resultierenden UTF-8-kodierten Text hineinzuschreiben, und gibt ein Wörterbuchobjekt zurück, das den Fortschritt der Kodierung anzeigt. Dies ist potenziell leistungsfähiger als die ältere `encode()` Methode, insbesondere wenn der Zielpuffer eine Ansicht in einen Wasm-Heap ist.

## Syntax

```js-nolint
encodeInto(string, uint8Array)
```

### Parameter

- `string`
  - : Ein String, der den zu kodierenden Text enthält.
- `uint8Array`
  - : Eine {{jsxref("Uint8Array")}} Objektinstanz, um den resultierenden UTF-8-kodierten Text hineinzuschreiben.

### Rückgabewert

Ein Objekt, das zwei Mitglieder enthält:

- `read`
  - : Die Anzahl der UTF-16-Einheiten des Quellcodes, die in UTF-8 umgewandelt wurden. Diese kann kleiner sein als `string.length`, wenn `uint8Array` nicht genügend Platz hatte.
- `written`
  - : Die Anzahl der Bytes, die im Ziel-`Uint8Array` geändert wurden. Die geschriebenen Bytes bilden garantiert vollständige UTF-8-Byte-Sequenzen.

## Kodierung an eine bestimmte Position

`encodeInto()` platziert seine Ausgabe immer am Anfang des Arrays. Es ist jedoch manchmal nützlich, die Ausgabe an einem bestimmten Index zu beginnen. Die Lösung ist [`TypedArray.prototype.subarray()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray):

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

## Puffergröße

Um einen JavaScript-String `s` zu konvertieren, ist der für die vollständige Konvertierung benötigte Platz nie kleiner als `s.length` Bytes und nie größer als `s.length * 3` Bytes. Das genaue UTF-8-zu-UTF-16-Längenverhältnis für Ihren String hängt von der Sprache ab, mit der Sie arbeiten:

- Für einfachen englischen Text, der hauptsächlich ASCII-Zeichen verwendet, liegt das Verhältnis nahe bei 1.
- Für Texte in Schriftsystemen mit Zeichen von U+0080 bis U+07FF, zu denen Griechisch, Kyrillisch, Hebräisch, Arabisch usw. gehören, beträgt das Verhältnis etwa 2.
- Für Texte in Schriftsystemen mit Zeichen von U+0800 bis U+FFFF, zu denen Chinesisch, Japanisch, Koreanisch usw. gehören, beträgt das Verhältnis etwa 3.
- Es ist nicht üblich, dass ganze Schriften in [Nicht-BMP-Zeichen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) geschrieben werden (obwohl sie existieren). Diese Zeichen sind normalerweise mathematische Symbole, Emojis, historische Schriften usw. Das Verhältnis für diese Zeichen beträgt 2, da sie 4 Bytes in UTF-8 und 2 in UTF-16 benötigen.

Wenn die Ausgabebelegung (typischerweise innerhalb des Wasm-Heaps) kurzlebig sein soll, ist es sinnvoll, `s.length * 3` Bytes für die Ausgabe zu reservieren, wobei der erste Konvertierungsversuch garantiert den gesamten String konvertiert.

Zum Beispiel, wenn Ihr Text hauptsächlich Englisch ist, ist es unwahrscheinlich, dass langer Text `s.length * 2` Bytes in der Länge überschreitet. Daher könnte ein optimistischeren Ansatz sein, `s.length * 2 + 5` Bytes zu reservieren, und eine Neuallokation in dem seltenen Fall durchzuführen, dass die optimistische Vorhersage falsch war.

Wenn die Ausgabe voraussichtlich langlebig sein soll, ist es sinnvoll, die minimale Zuordnung `roundUpToBucketSize(s.length)`, die maximale Zuordnungsgröße `s.length * 3` zu berechnen und einen gewählten Schwellenwert `t` zu haben (als Kompromiss zwischen Speichernutzung und Geschwindigkeit), sodass, wenn `roundUpToBucketSize(s.length) + t >= s.length * 3`, Sie für `s.length * 3` allokieren. Andernfalls zuerst für `roundUpToBucketSize(s.length)` allokieren und konvertieren. Wenn das `read` Element des Rückgabewörterbuchs `s.length` ist, ist die Konvertierung abgeschlossen. Wenn nicht, realokieren Sie den Zielpuffer auf `written + (s.length - read) * 3` und konvertieren Sie dann den Rest, indem Sie einen Substring von `s` ab dem Index `read` und einen Teilpuffer des Zielpuffers ab dem Index `written` nehmen.

Obiges `roundUpToBucketSize()` ist eine Funktion, die auf die Größe des Allokatoren-Buckets aufrundet. Zum Beispiel, wenn Ihr Wasm-Allokator bekanntlich Potenzen von zwei Buckets verwendet, sollte `roundUpToBucketSize()` das Argument zurückgeben, wenn es eine Potenz von zwei ist, oder die nächste Potenz von zwei andernfalls. Wenn das Verhalten des Wasm-Allokators unbekannt ist, sollte `roundUpToBucketSize()` eine Identitätsfunktion sein.

Wenn das Verhalten Ihres Allokators unbekannt ist, möchten Sie vielleicht bis zu zwei Reallokationsschritte haben und den ersten Reallokationsschritt die _verbleibende unkonvertierte_ Länge mit zwei statt drei multiplizieren lassen. In diesem Fall macht es jedoch Sinn, die übliche Multiplikation mit zwei der _bereits geschriebenen_ Pufferlänge nicht zu implementieren, da in einem solchen Fall, wenn eine zweite Reallokation erfolgt, diese immer im Vergleich zur ursprünglichen Länge mal drei überallokiert wird. Der obige Rat geht davon aus, dass Sie keinen Platz für ein Null-Terminierungszeichen allokieren müssen. Das heißt, auf der Wasm-Seite arbeiten Sie mit Rust-Strings oder einer nicht null-terminierten C++ Klasse. Wenn Sie mit C++ `std::string` arbeiten, müssen Sie, obwohl die logische Länge Ihnen angezeigt wird, das zusätzliche Terminier-Byte berücksichtigen, wenn Sie das Aufrunden zur Größe des Allokatoren-Buckets berechnen. Siehe den nächsten Abschnitt über C-Strings.

## Keine Null-Terminierung

Wenn der Eingabestring das Zeichen U+0000 enthält, schreibt `encodeInto()` ein 0x00-Byte in die Ausgabe. `encodeInto()` schreibt _kein_ C-stilmäßiges 0x00-Sentinel-Byte nach der logischen Ausgabe.

Wenn Ihr Wasm-Programm C-Strings verwendet, liegt es in Ihrer Verantwortung, das `0x00`-Sentinel zu schreiben, und Sie können nicht verhindern, dass Ihr Wasm-Programm einen logisch abgeschnittenen String sieht, wenn der JavaScript-String `U+0000` enthielt. Beobachten Sie:

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

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TextEncoder`](/de/docs/Web/API/TextEncoder) Interface, zu dem es gehört.
- [`TextEncoder.encode()`](/de/docs/Web/API/TextEncoder/encode)
