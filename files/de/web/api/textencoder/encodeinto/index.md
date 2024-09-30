---
title: "TextEncoder: encodeInto()-Methode"
short-title: encodeInto()
slug: Web/API/TextEncoder/encodeInto
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`TextEncoder.encodeInto()`**-Methode nimmt einen zu kodierenden String und ein Ziel-{{jsxref("Uint8Array")}}, in das der resultierende UTF-8-kodierte Text eingefügt wird, und gibt ein Wörterbuchobjekt zurück, das den Fortschritt der Kodierung anzeigt. Dies ist potenziell leistungsfähiger als die ältere `encode()`-Methode – besonders dann, wenn der Zielpuffer eine Ansicht in einen Wasm-Heap ist.

## Syntax

```js-nolint
encodeInto(string, uint8Array)
```

### Parameter

- `string`
  - : Ein String, der den zu kodierenden Text enthält.
- `uint8Array`
  - : Eine {{jsxref("Uint8Array")}}-Objektinstanz, in die der resultierende UTF-8-kodierte Text platziert werden soll.

### Rückgabewert

Ein Objekt, das zwei Mitglieder enthält:

- `read`
  - : Die Anzahl der UTF-16-Einheiten aus dem Quelltext, die in UTF-8 umgewandelt wurden. Dies kann kleiner sein als `string.length`, wenn `uint8Array` nicht genügend Platz hatte.
- `written`
  - : Die Anzahl der Bytes, die im Ziel-`Uint8Array` modifiziert wurden. Die geschriebenen Bytes bilden garantiert vollständige UTF-8-Byte-Sequenzen.

## Kodierung in eine bestimmte Position

`encodeInto()` setzt seine Ausgabe immer am Anfang des Arrays ein. Es ist jedoch manchmal nützlich, den Ausgabeanfang an einem bestimmten Index zu setzen. Die Lösung ist [`TypedArray.prototype.subarray()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray):

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

## Puffergroße

Um einen JavaScript-String `s` zu konvertieren, ist der benötigte Ausgabespeicherplatz für eine vollständige Konvertierung nie geringer als `s.length` Bytes und nie größer als `s.length * 3` Bytes. Das genaue UTF-8-zu-UTF-16-Längenverhältnis für Ihren String hängt von der Sprache ab, mit der Sie arbeiten:

- Für einfachen englischen Text, der hauptsächlich ASCII-Zeichen verwendet, liegt das Verhältnis nahe bei 1.
- Für Texte in Schriften, die Zeichen U+0080 bis U+07FF verwenden, zu denen Griechisch, Kyrillisch, Hebräisch, Arabisch usw. gehören, liegt das Verhältnis bei etwa 2.
- Für Texte in Schriften, die Zeichen U+0800 bis U+FFFF verwenden, zu denen Chinesisch, Japanisch, Koreanisch usw. gehören, liegt das Verhältnis bei etwa 3.
- Es ist nicht üblich, dass ganze Schriften in [Nicht-BMP-Zeichen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) geschrieben werden (obwohl sie existieren). Diese Zeichen sind normalerweise mathematische Symbole, Emojis, historische Schriften usw. Das Verhältnis für diese Zeichen beträgt 2, da sie 4 Byte in UTF-8 und 2 in UTF-16 benötigen.

Wenn die Ausgabezuteilung (typischerweise im Wasm-Heap) voraussichtlich nur von kurzer Dauer ist, ist es sinnvoll, `s.length * 3` Bytes für die Ausgabe zuzuweisen, wobei der erste Konvertierungsversuch garantiert den gesamten String konvertiert.

Zum Beispiel, wenn Ihr Text hauptsächlich Englisch ist, ist es unwahrscheinlich, dass langer Text `s.length * 2` Bytes in der Länge überschreitet. Daher könnte ein optimistischeres Vorgehen darin bestehen, `s.length * 2 + 5` Bytes zuzuweisen und bei der seltenen Gelegenheit, dass die optimistische Vorhersage falsch war, eine erneute Zuweisung vorzunehmen.

Wenn die Ausgabe voraussichtlich lange bestehen bleibt, ist es sinnvoll, die Minimalzuweisung `roundUpToBucketSize(s.length)`, die maximale Zuweisungsgröße `s.length * 3` zu berechnen und einen gewählten Schwellenwert `t` (als Kompromiss zwischen Speicherverbrauch und Geschwindigkeit) festzulegen, der besagt, dass wenn `roundUpToBucketSize(s.length) + t >= s.length * 3`, Sie für `s.length * 3` zuweisen. Andernfalls zuerst für `roundUpToBucketSize(s.length)` zuweisen und konvertieren. Wenn das `read`-Element im Rückgabewörterbuch `s.length` ist, ist die Konvertierung abgeschlossen. Wenn nicht, den Zielpuffer auf `written + (s.length - read) * 3` neu zuweisen und dann den Rest durch die Entnahme eines Substrings von `s`, beginnend bei Index `read` und eines Subpuffers des Zielpuffers, beginnend bei Index `written`, konvertieren.

Oben ist `roundUpToBucketSize()` eine Funktion, die auf die Speicherzuweisungs-Bucketgröße aufrundet. Zum Beispiel, wenn Ihr Wasm-Speicherzuweiser dafür bekannt ist, Potenzen von zwei zu verwenden, sollte `roundUpToBucketSize()` das Argument zurückgeben, wenn es eine Zweierpotenz ist oder die nächste Zweierpotenz. Wenn das Verhalten des Wasm-Speicherzuweisers unbekannt ist, sollte `roundUpToBucketSize()` eine Identitätsfunktion sein.

Wenn das Verhalten Ihres Speicherzuweisers unbekannt ist, möchten Sie möglicherweise bis zu zwei Zuweisungsschritte durchführen und den ersten Zuweisungsschritt mit der doppelten _verbleibenden nicht konvertierten_ Länge anstatt mit drei multiplizieren. In diesem Fall ist es jedoch sinnvoll, das übliche Multiplizieren mit zwei der _bereits geschriebenen_ Pufflänge nicht zu implementieren, da in einem solchen Fall, wenn eine zweite Zuweisung stattfand, immer im Vergleich zur ursprünglichen Länge mal drei überzuweisen würde. Der oben angegebene Rat geht davon aus, dass Sie keinen Speicherplatz für einen Nullterminator benötigen. Das heißt, auf der Wasm-Seite arbeiten Sie mit Rust-Strings oder einer nicht-nullterminierenden C++-Klasse. Wenn Sie mit C++ `std::string` arbeiten, müssen Sie, auch wenn die logische Länge Ihnen angezeigt wird, beim Berechnen des Aufrunden auf die Speicherzuweisungs-Bucketgröße das zusätzliche Terminator-Byte berücksichtigen. Siehe den nächsten Abschnitt zu C-Strings.

## Keine Null-terminierung

Wenn der Eingabestring das Zeichen U+0000 enthält, wird `encodeInto()` ein 0x00 Byte in die Ausgabe schreiben. `encodeInto()` schreibt _nicht_ ein C-stilisches 0x00-Sentinel-Byte nach der logischen Ausgabe.

Wenn Ihr Wasm-Programm C-Strings verwendet, liegt es in Ihrer Verantwortung, das `0x00`-Sentinel zu schreiben, und Sie können Ihr Wasm-Programm nicht daran hindern, einen logisch abgeschnittenen String zu sehen, wenn der JavaScript-String `U+0000` enthielt. Beachten Sie:

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

- Das [`TextEncoder`](/de/docs/Web/API/TextEncoder)-Interface, zu dem es gehört.
- [`TextEncoder.encode()`](/de/docs/Web/API/TextEncoder/encode)
