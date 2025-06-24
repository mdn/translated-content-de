---
title: "TextEncoder: encodeInto() Methode"
short-title: encodeInto()
slug: Web/API/TextEncoder/encodeInto
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`TextEncoder.encodeInto()`**-Methode nimmt einen
zu kodierenden String und ein Ziel-{{jsxref("Uint8Array")}}, in das der resultierende {{Glossary("UTF-8", "UTF-8")}}-kodierte Text eingefügt wird, und gibt ein Wörterbuchobjekt zurück, das den Fortschritt der Kodierung anzeigt.
Dies ist potenziell leistungsfähiger als die ältere `encode()`-Methode — insbesondere wenn der Zielpuffer eine Ansicht in einen Wasm-Heap ist.

## Syntax

```js-nolint
encodeInto(string, uint8Array)
```

### Parameter

- `string`
  - : Ein String, der den zu kodierenden Text enthält.
- `uint8Array`
  - : Eine {{jsxref("Uint8Array")}}-Objektinstanz, in die der resultierende UTF-8-kodierte Text eingefügt werden soll.

### Rückgabewert

Ein Objekt, das zwei Elemente enthält:

- `read`
  - : Die Anzahl der {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} aus der Quelle, die in UTF-8 konvertiert wurden.
    Dies kann kleiner sein als `string.length`, wenn `uint8Array` nicht genug Platz hatte.
- `written`
  - : Die Anzahl der im Ziel-`Uint8Array` modifizierten Bytes.
    Die geschriebenen Bytes bilden garantiert vollständige UTF-8-Byte-Sequenzen.

## Kodierung in eine bestimmte Position

`encodeInto()` setzt seine Ausgabe immer am Anfang des Arrays ein.
Es ist jedoch manchmal nützlich, die Ausgabe an einem bestimmten Index beginnen zu lassen.
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

## Puffergrößenbestimmung

Um einen JavaScript-String `s` zu konvertieren, ist der Platzbedarf für eine vollständige Konvertierung niemals kleiner als `s.length` Bytes und niemals größer als `s.length * 3` Bytes.
Das genaue Verhältnis von UTF-8 zu UTF-16 Längen für Ihren String hängt von der Sprache ab, mit der Sie arbeiten:

- Für einfachen englischen Text, der hauptsächlich ASCII-Zeichen verwendet, liegt das Verhältnis nahe bei 1.
- Für Texte in Schriften, die Zeichen von U+0080 bis U+07FF verwenden, zu denen Griechisch, Kyrillisch, Hebräisch, Arabisch usw. gehören, liegt das Verhältnis bei etwa 2.
- Für Texte in Schriften, die Zeichen von U+0800 bis U+FFFF verwenden, zu denen Chinesisch, Japanisch, Koreanisch usw. gehören, liegt das Verhältnis bei etwa 3.
- Es ist nicht üblich, dass ganze Schriften in [non-BMP-Zeichen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) geschrieben werden (obwohl sie existieren). Diese Zeichen sind meist mathematische Symbole, Emojis, historische Schriften etc. Das Verhältnis für diese Zeichen beträgt 2, weil sie 4 Bytes in UTF-8 und 2 in UTF-16 benötigen.

Wenn die Ausgabebelegung (typischerweise innerhalb des Wasm-Heaps) voraussichtlich von kurzer Dauer ist, macht es Sinn `s.length * 3` Bytes für die Ausgabe zuzuweisen, in welchem Fall der erste Konvertierungsversuch garantiert den gesamten String konvertiert.

Beispielsweise, wenn Ihr Text hauptsächlich Englisch ist, ist es unwahrscheinlich, dass langer Text eine Länge von `s.length * 2` Bytes überschreitet.
Daher könnte ein optimistischeres Vorgehen darin bestehen, `s.length * 2 + 5` Bytes zuzuweisen und bei der selten vorkommenden Gelegenheit, dass die optimistische Vorhersage falsch war, eine Neubelegung vorzunehmen.

Wenn davon ausgegangen wird, dass die Ausgabe von langer Lebensdauer ist, macht es Sinn, die minimale Zuweisung `roundUpToBucketSize(s.length)` zu berechnen, die maximale Zuweisungsgröße `s.length * 3`, und eine gewählte (als Kompromiss zwischen Speichernutzung und Geschwindigkeit) Schwelle `t` zu haben, so dass, wenn `roundUpToBucketSize(s.length) + t >= s.length * 3`, Sie für `s.length * 3` allokieren.
Andernfalls allokieren Sie zuerst für `roundUpToBucketSize(s.length)` und konvertieren.
Wenn das `read`-Element im Rückgabewörterbuch `s.length` ist, ist die Konvertierung abgeschlossen.
Falls nicht, allokieren Sie den Zielpuffer neu für `written + (s.length - read) * 3` und konvertieren dann den Rest, indem Sie einen Substring von `s` ab Index `read` und einen Subpuffer des Zielpuffers ab Index `written` nehmen.

Oberhalb ist `roundUpToBucketSize()` eine Funktion, die auf die Größe des Zuweisungsbuckets aufrundet.
Zum Beispiel, wenn Ihr Wasm-Allocator bekannt ist, Zweierpotenzen für Buckets zu verwenden, sollte `roundUpToBucketSize()` das Argument zurückgeben, wenn es eine Zweierpotenz ist, oder die nächste Zweierpotenz sonst.
Wenn das Verhalten des Wasm-Allocators unbekannt ist, sollte `roundUpToBucketSize()` eine Identitätsfunktion sein.

Wenn das Verhalten Ihres Allocators unbekannt ist, möchten Sie möglicherweise bis zu zwei Neuzuordnungsschritte durchführen und den ersten Neuzuordnungsschritt den _noch nicht konvertierten_ Rest multiplizieren, anstatt drei.
Jedoch, in diesem Fall macht es Sinn, das übliche Multiplizieren mit zwei der _bereits geschriebenen_ Puffergröße nicht durchzuführen, denn in einem solchen Fall, wenn eine zweite Neuzuordnung stattfand, würde sie immer überproportional zur ursprünglichen Länge multipliziert mit drei allokiert werden.
Die obigen Ratschläge setzen voraus, dass Sie keinen Platz für einen Nullterminator allokieren müssen.
Das heißt, auf der Wasm-Seite arbeiten Sie mit Rust-Strings oder einer nicht nullterminierenden C++-Klasse.
Wenn Sie mit C++ `std::string` arbeiten, auch wenn die logische Länge Ihnen angezeigt wird, müssen Sie das zusätzliche Terminator-Byte berücksichtigen, wenn Sie das Aufrunden auf die Größe des Zuweisungsbuckets berechnen.
Siehe den nächsten Abschnitt über C-Strings.

## Keine Nullterminierung

Wenn der Eingabestring das Zeichen U+0000 enthält, wird `encodeInto()` ein 0x00-Byte in die Ausgabe schreiben.
`encodeInto()` _schreibt nicht_ das C-Style 0x00-Signalbyte nach der logischen Ausgabe.

Wenn Ihr Wasm-Programm C-Strings verwendet, liegt es in Ihrer Verantwortung, das `0x00`-Signal zu schreiben, und Sie können nicht verhindern, dass Ihr Wasm-Programm einen logisch abgeschnittenen String sieht, wenn der JavaScript-String `U+0000` enthielt.
Beachten Sie:

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
