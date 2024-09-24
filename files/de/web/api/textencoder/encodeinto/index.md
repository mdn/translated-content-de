---
title: "TextEncoder: Methode encodeInto()"
short-title: encodeInto()
slug: Web/API/TextEncoder/encodeInto
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("Encoding API")}}

Die Methode **`TextEncoder.encodeInto()`** nimmt einen String zum Kodieren und ein Ziel-{{jsxref("Uint8Array")}}, um den resultierenden UTF-8-kodierten Text zu platzieren, und gibt ein Wörterbuchobjekt zurück, das den Fortschritt der Kodierung angibt. Dies ist potenziell leistungsfähiger als die ältere Methode `encode()`, insbesondere wenn der Zielpuffer eine Ansicht in einen Wasm-Heap ist.

## Syntax

```js-nolint
encodeInto(string, uint8Array)
```

### Parameter

- `string`
  - : Ein String, der den zu kodierenden Text enthält.
- `uint8Array`
  - : Eine {{jsxref("Uint8Array")}}-Objektinstanz, in die der resultierende UTF-8-kodierte Text eingefügt wird.

### Rückgabewert

Ein Objekt, das zwei Mitglieder enthält:

- `read`
  - : Die Anzahl der von der Quelle in UTF-8 umgewandelten UTF-16-Code-Einheiten.
    Dies kann geringer als `string.length` sein, wenn `uint8Array` nicht genügend Platz hatte.
- `written`
  - : Die Anzahl der im Ziel-`Uint8Array` veränderten Bytes.
    Die geschriebenen Bytes bilden garantiert vollständige UTF-8-Byte-Sequenzen.

## Kodieren in eine bestimmte Position

`encodeInto()` setzt seine Ausgabe immer an den Anfang des Arrays. Manchmal ist es jedoch nützlich, die Ausgabe an einem bestimmten Index beginnen zu lassen. Die Lösung besteht in der Nutzung von [`TypedArray.prototype.subarray()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray):

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

Um einen JavaScript-String `s` zu konvertieren, ist der benötigte Ausgabespeicherplatz für die vollständige Konvertierung niemals weniger als `s.length` Bytes und niemals mehr als `s.length * 3` Bytes. Das genaue UTF-8-zu-UTF-16-Längenverhältnis für Ihren String hängt von der Sprache ab, mit der Sie arbeiten:

- Für einfachen englischen Text, der hauptsächlich ASCII-Zeichen verwendet, liegt das Verhältnis nahe bei 1.
- Für Text in Schriften, die Zeichen von U+0080 bis U+07FF verwenden, einschließlich Griechisch, Kyrillisch, Hebräisch, Arabisch usw., liegt das Verhältnis bei etwa 2.
- Für Text in Schriften, die Zeichen von U+0800 bis U+FFFF verwenden, einschließlich Chinesisch, Japanisch, Koreanisch usw., liegt das Verhältnis bei etwa 3.
- Es ist nicht üblich, dass ganze Schriften in [Non-BMP-Zeichen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) geschrieben sind (obwohl sie existieren). Diese Zeichen sind in der Regel mathematische Symbole, Emojis, historische Schriften usw. Das Verhältnis für diese Zeichen beträgt 2, da sie in UTF-8 4 Bytes und in UTF-16 2 Bytes beanspruchen.

Wenn die Speicherzuweisung der Ausgabe (typischerweise innerhalb des Wasm-Heaps) voraussichtlich kurzlebig ist, macht es Sinn, `s.length * 3` Bytes für die Ausgabe zuzuweisen, in welchem Fall der erste Konvertierungsversuch garantiert den gesamten String konvertiert.

Wenn Ihr Text hauptsächlich Englisch ist, ist es unwahrscheinlich, dass ein langer Text die Länge von `s.length * 2` Bytes überschreitet. Somit könnte ein optimistischeres Vorgehen sein, `s.length * 2 + 5` Bytes zuzuweisen und im seltenen Fall der falschen Prognose eine erneute Zuweisung vorzunehmen.

Wenn die Ausgabe voraussichtlich langlebig sein soll, macht es Sinn, die minimale Zuweisung `roundUpToBucketSize(s.length)`, die maximale Zuweisungsgröße `s.length * 3` zu berechnen und einen gewählten (als Kompromiss zwischen Speichernutzung und Geschwindigkeit) Schwellenwert `t` zu haben, sodass, wenn `roundUpToBucketSize(s.length) + t >= s.length * 3` ist, Sie für `s.length * 3` zuweisen. Andernfalls weisen Sie zunächst für `roundUpToBucketSize(s.length)` zu und konvertieren. Wenn das `read`-Element im Rückgabewörterbuch `s.length` ist, ist die Konvertierung abgeschlossen. Andernfalls weisen Sie den Zielpuffer neu zu auf `written + (s.length - read) * 3` und führen die restliche Konvertierung durch, indem Sie einen Substring von `s` ab Index `read` und einen Subpuffer des Zielpuffers ab Index `written` nehmen.

Das oben genannte `roundUpToBucketSize()` ist eine Funktion, die auf die Größe des Allokator-Eimers aufrundet. Zum Beispiel, wenn Ihr Wasm-Allokator dafür bekannt ist, Potenzen von zwei Eimern zu verwenden, sollte `roundUpToBucketSize()` das Argument zurückgeben, wenn es eine Potenz von zwei ist, oder die nächste Potenz von zwei. Wenn das Verhalten des Wasm-Allokators unbekannt ist, sollte `roundUpToBucketSize()` eine Identitätsfunktion sein.

Wenn das Verhalten Ihres Allokators unbekannt ist, möchten Sie möglicherweise bis zu zwei erneute Zuweisungsschritte haben und den ersten erneuten Zuweisungsschritt so gestalten, dass die _noch nicht konvertierte_ Länge mit zwei anstelle von drei multipliziert wird. Allerdings macht es in diesem Fall Sinn, nicht die üblichen Multiplizierungen der _bereits geschriebenen_ Pufferlänge mit zwei zu implementieren, denn im Fall einer zweiten erneuten Zuweisung würde letztlich immer im Vergleich zur ursprünglichen Länge mal drei zu viel zugewiesen werden. Der oben stehende Ratschlag geht davon aus, dass Sie keinen Speicherplatz für ein Nullterminator benötigen. Das heißt, auf der Wasm-Seite arbeiten Sie mit Rust-Strings oder einer C++-Klasse, die nicht nullterminiert ist. Wenn Sie mit C++ `std::string` arbeiten, selbst wenn Ihnen die logische Länge gezeigt wird, müssen Sie das zusätzliche Terminator-Byte berücksichtigen, wenn Sie das Aufrunden zur Allokatoreimergröße berechnen. Siehe den nächsten Abschnitt über C-Strings.

## Keine Nullterminierung

Wenn die Eingabezeichenfolge das Zeichen U+0000 enthält, wird `encodeInto()` ein 0x00-Byte in der Ausgabe schreiben. `encodeInto()` _schreibt nicht_ ein C-Style-0x00-Sentinel-Byte nach der logischen Ausgabe.

Wenn Ihr Wasm-Programm C-Strings verwendet, liegt es in Ihrer Verantwortung, das `0x00`-Sentinel zu schreiben, und Sie können nicht verhindern, dass Ihr Wasm-Programm einen logisch abgeschnittenen String sieht, wenn der JavaScript-String `U+0000` enthielt. Beachten Sie:

```js
const encoder = new TextEncoder();

function encodeIntoWithSentinel(string, u8array, position) {
  const stats = encoder.encodeInto(
    string,
    position ? u8array.subarray(position | 0) : u8array,
  );
  if (stats.written < u8array.length) u8array[stats.written] = 0; // Anfügung eines Nullzeichens, wenn Platz vorhanden
  return stats;
}
```

## Beispiele

```html
<p class="source">Dies ist ein Beispielabsatz.</p>
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
  `Bytes gelesen: ${encodedResults.read}` +
  ` | Bytes geschrieben: ${encodedResults.written}` +
  ` | Kodiertes Ergebnis: ${utf8}`;
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{DOMxRef("TextEncoder")}} Interface, zu dem es gehört.
- {{DOMxRef("TextEncoder.encode()")}}
