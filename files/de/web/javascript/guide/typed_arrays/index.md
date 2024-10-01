---
title: JavaScript Typed Arrays
slug: Web/JavaScript/Guide/Typed_arrays
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}

JavaScript Typed Arrays sind array-ähnliche Objekte, die einen Mechanismus zum Lesen und Schreiben von rohen Binärdaten in Speicherpuffern bereitstellen.

Typed Arrays sind nicht dazu gedacht, Arrays für jegliche Funktionalität zu ersetzen. Stattdessen bieten sie Entwicklern eine vertraute Schnittstelle zur Manipulation von Binärdaten. Dies ist nützlich, wenn man mit Plattformfunktionen wie Audio- und Videomanipulation, Zugriff auf Rohdaten über [WebSockets](/de/docs/Web/API/WebSockets_API) usw. interagiert. Jedes Element in einem JavaScript Typed Array ist ein roher Binärwert in einem von mehreren unterstützten Formaten, von 8-Bit-Integern bis zu 64-Bit-Gleitkommazahlen.

Typed Array Objekte teilen viele der gleichen Methoden wie Arrays mit ähnlicher Semantik. Typed Arrays dürfen jedoch _nicht_ mit normalen Arrays verwechselt werden, da der Aufruf von {{jsxref("Array.isArray()")}} auf einem Typed Array `false` zurückgibt. Zudem werden nicht alle Methoden, die für normale Arrays verfügbar sind, von Typed Arrays unterstützt (z.B. `push` und `pop`).

Um maximale Flexibilität und Effizienz zu erreichen, unterteilen JavaScript Typed Arrays die Implementierung in _Puffer_ und _Ansichten_. Ein Puffer ist ein Objekt, das einen Datenabschnitt darstellt; es hat kein Format und bietet keinen Mechanismus, um auf seine Inhalte zuzugreifen. Um auf den im Puffer enthaltenen Speicher zuzugreifen, muss eine [Ansicht](#ansichten) verwendet werden. Eine Ansicht bietet einen _Kontext_ — das heißt, einen Datentyp, Anfangsoffset und Anzahl der Elemente.

![Ein Diagramm, das zeigt, wie unterschiedliche Typed Arrays Ansichten des gleichen zugrundeliegenden Puffers sein können. Jedes hat eine unterschiedliche Elementanzahl und Breite.](typed_arrays.png)

## Puffer

Es gibt zwei Arten von Puffern: {{jsxref("ArrayBuffer")}} und {{jsxref("SharedArrayBuffer")}}. Beide sind niedrigstufige Repräsentationen eines Speicherabschnitts. Sie haben das Wort "Array" in ihren Namen, aber mit Arrays haben sie wenig zu tun — man kann nicht direkt auf sie lesen oder schreiben. Stattdessen sind Puffer generische Objekte, die einfach Rohdaten enthalten. Um auf den vom Puffer repräsentierten Speicher zuzugreifen, muss eine Ansicht verwendet werden.

Puffer unterstützen die folgenden Aktionen:

- _Allokation_: Sobald ein neuer Puffer erstellt wird, wird ein neuer Speicherabschnitt alloziert und auf `0` initialisiert.
- _Kopieren_: Mit der Methode {{jsxref("ArrayBuffer/slice", "slice()")}} kann man einen Teil des Speichers effizient kopieren, ohne Ansichten zu erstellen, um jedes Byte manuell zu kopieren.
- _Übertragung_: Mit den Methoden {{jsxref("ArrayBuffer/transfer", "transfer()")}} und {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} kann die Besitzergreifung des Speicherabschnitts auf ein neues Pufferobjekt übertragen werden. Dies ist nützlich, um Daten zwischen verschiedenen Ausführungskontexten zu übertragen, ohne sie zu kopieren. Nach der Übertragung ist der ursprüngliche Puffer nicht mehr verwendbar. Ein `SharedArrayBuffer` kann nicht übertragen werden (da der Puffer bereits von allen Ausführungskontexten gemeinsam genutzt wird).
- _Größenänderung_: Mit der Methode {{jsxref("ArrayBuffer/resize", "resize()")}} kann man den Speicherabschnitt resize (entweder mehr Speicherplatz beanspruchen, solange er nicht das voreingestellte {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} Limit überschreitet, oder Speicherplatz freigeben). `SharedArrayBuffer` kann nur [erweitert](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow), aber nicht verkleinert werden.

Der Unterschied zwischen `ArrayBuffer` und `SharedArrayBuffer` besteht darin, dass der erstere immer nur von einem einzigen Ausführungskontext zu einem Zeitpunkt besessen wird. Wenn man einen `ArrayBuffer` an einen anderen Ausführungskontext übergibt, wird er _übertragen_ und der ursprüngliche `ArrayBuffer` wird unbenutzbar. Dies stellt sicher, dass immer nur ein Ausführungskontext auf den Speicher zugreifen kann. Ein `SharedArrayBuffer` wird nicht übertragen, wenn er an einen anderen Ausführungskontext übergeben wird, sodass er gleichzeitig von mehreren Ausführungskontexten zugänglich ist. Dies kann zu Race Conditions führen, wenn mehrere Threads auf denselben Speicherabschnitt zugreifen, sodass Operationen wie {{jsxref("Atomics")}} Methoden nützlich werden.

## Ansichten

Derzeit gibt es zwei Hauptarten von Ansichten: Typed Array Ansichten und {{jsxref("DataView")}}. Typed Arrays bieten [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#instance_methods), die es Ihnen ermöglichen, Binärdaten bequem zu transformieren. `DataView` ist niedriger und ermöglicht eine granulare Kontrolle darüber, wie auf Daten zugegriffen wird. Die Möglichkeiten zum Lesen und Schreiben von Daten mit den beiden Ansichten sind sehr unterschiedlich.

Beide Arten von Ansichten führen dazu, dass {{jsxref("ArrayBuffer.isView()")}} `true` zurückgibt. Beide haben die folgenden Eigenschaften:

- `buffer`
  - : Der zugrundeliegende Puffer, auf den die Ansicht verweist.
- `byteOffset`
  - : Der Offset in Bytes der Ansicht vom Anfang ihres Puffers.
- `byteLength`
  - : Die Länge der Ansicht in Bytes.

Beide Konstruktoren akzeptieren die oben genannten drei als separate Argumente, obwohl die Konstruktoren von Typed Arrays `length` als Anzahl der Elemente statt der Anzahl der Bytes akzeptieren.

### Typed Array Ansichten

Typed Array Ansichten haben selbsterklärende Namen und bieten Ansichten für alle üblichen numerischen Typen wie `Int8`, `Uint32`, `Float64` und so weiter. Es gibt eine spezielle Typed Array Ansicht, {{jsxref("Uint8ClampedArray")}}, die die Werte zwischen `0` und `255` einklammert. Dies ist nützlich für [Canvas-Datenverarbeitung](/de/docs/Web/API/ImageData) zum Beispiel.

| Typ                             | Wertebereich                           | Größe in Bytes | Web IDL Typ           |
| ------------------------------- | -------------------------------------- | -------------- | --------------------- |
| {{jsxref("Int8Array")}}         | -128 bis 127                           | 1              | `byte`                |
| {{jsxref("Uint8Array")}}        | 0 bis 255                              | 1              | `octet`               |
| {{jsxref("Uint8ClampedArray")}} | 0 bis 255                              | 1              | `octet`               |
| {{jsxref("Int16Array")}}        | -32768 bis 32767                       | 2              | `short`               |
| {{jsxref("Uint16Array")}}       | 0 bis 65535                            | 2              | `unsigned short`      |
| {{jsxref("Int32Array")}}        | -2147483648 bis 2147483647             | 4              | `long`                |
| {{jsxref("Uint32Array")}}       | 0 bis 4294967295                       | 4              | `unsigned long`       |
| {{jsxref("Float16Array")}}      | `-65504` bis `65504`                   | 2              | N/A                   |
| {{jsxref("Float32Array")}}      | `-3.4e38` bis `3.4e38`                 | 4              | `unrestricted float`  |
| {{jsxref("Float64Array")}}      | `-1.8e308` bis `1.8e308`               | 8              | `unrestricted double` |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> bis 2<sup>63</sup> - 1 | 8              | `bigint`              |
| {{jsxref("BigUint64Array")}}    | 0 bis 2<sup>64</sup> - 1               | 8              | `bigint`              |

Alle Typed Array Ansichten haben die gleichen Methoden und Eigenschaften, wie sie durch die {{jsxref("TypedArray")}} Klasse definiert sind. Sie unterscheiden sich nur im zugrundeliegenden Datentyp und der Größe in Bytes. Dies wird ausführlicher in [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization) diskutiert.

Typed Arrays sind grundsätzlich von fester Länge, sodass Array-Methoden, die die Länge eines Arrays ändern können, nicht verfügbar sind. Dazu gehören `pop`, `push`, `shift`, `splice` und `unshift`. Ebenso ist `flat` nicht verfügbar, da es keine verschachtelten Typed Arrays gibt, und verwandte Methoden wie `concat` und `flatMap` haben keine großen Anwendungsfälle und sind daher nicht verfügbar. Da `splice` nicht verfügbar ist, ist auch `toSpliced` nicht verfügbar. Alle anderen Array-Methoden werden zwischen `Array` und `TypedArray` gemeinsam genutzt.

Andererseits hat `TypedArray` die zusätzlichen `set` und `subarray` Methoden, die das Arbeiten mit mehreren Typed Arrays optimieren, die denselben Puffer betrachten. Die Methode `set()` ermöglicht es, mehrere Indizes eines Typed Arrays auf einmal zu setzen, unter Verwendung von Daten aus einem anderen Array oder Typed Array. Wenn die beiden Typed Arrays denselben zugrundeliegenden Puffer teilen, kann die Operation effizienter sein, da es ein schneller Speicherverschiebevorgang ist. Die Methode `subarray()` erstellt eine neue Typed Array Ansicht, die denselben Puffer wie das ursprüngliche Typed Array referenziert, jedoch mit einem schmaleren Bereich.

Es gibt keine Möglichkeit, die Länge eines Typed Arrays direkt zu ändern, ohne den zugrundeliegenden Puffer zu ändern. Wenn die Typed Array Ansicht jedoch einen veränderbaren Puffer betrachtet und keine feste `byteLength` hat, ist sie _längenverfolgung_ und wird automatisch an den zugrundeliegenden Puffer angepasst, wenn dieser vergrößert wird. Siehe [Verhalten bei Betrachtung eines veränderbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer) für Details.

Ähnlich wie bei regulären Arrays können Sie auf Typed Array Elemente mit [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) zugreifen. Die entsprechenden Bytes im zugrundeliegenden Puffer werden abgerufen und als Zahl interpretiert. Jeder Eigenschaftszugriff mit einer Zahl (oder der String-Repräsentation einer Zahl, da Zahlen beim Zugriff auf Eigenschaften immer in Strings konvertiert werden) wird vom Typed Array proxy-gesteuert — sie interagieren niemals mit dem Objekt selbst. Das bedeutet beispielsweise:

- Der Zugriff auf einen Index außerhalb der Grenzen liefert immer `undefined` zurück, ohne tatsächlich auf die Eigenschaft im Objekt zuzugreifen.
- Jeder Versuch, eine solche Eigenschaft außerhalb der Grenzen zu schreiben, hat keine Wirkung: Es löst keinen Fehler aus, aber es ändert auch nicht den Puffer oder das Typed Array.
- Typed Array Indizes scheinen konfigurierbar und beschreibbar zu sein, aber jeder Versuch, ihre Attribute zu ändern, wird fehlschlagen.

```js
const uint8 = new Uint8Array([1, 2, 3]);
console.log(uint8[0]); // 1

// For illustrative purposes only. Not for production code.
uint8[-1] = 0;
uint8[2.5] = 0;
uint8[NaN] = 0;
console.log(Object.keys(uint8)); // ["0", "1", "2"]
console.log(uint8[NaN]); // undefined

// Non-numeric access still works
uint8[true] = 0;
console.log(uint8[true]); // 0

Object.freeze(uint8); // TypeError: Cannot freeze array buffer views with elements
```

### DataView

Der {{jsxref("DataView")}} ist eine niedrigstufige Schnittstelle, die eine Getter/Setter-API bereitstellt, um beliebige Daten in den Puffer zu lesen und zu schreiben. Dies ist nützlich, wenn mit unterschiedlichen Datentypen gearbeitet wird, zum Beispiel. Typed Array Ansichten liegen in der nativen Byte-Reihenfolge (siehe {{Glossary("Endianness", "Endianness")}}) Ihrer Plattform vor. Mit einem `DataView` kann die Byte-Reihenfolge kontrolliert werden. Standardmäßig ist sie Big-Endian—die Bytes sind von den wichtigsten zu den am wenigsten wichtigen geordnet. Dies kann umgekehrt werden, mit den Bytes in der Reihenfolge vom unwichtigsten zum wichtigsten (Little-Endian), mit Hilfe von Getter-/Setter-Methoden.

`DataView` erfordert keine Ausrichtung; Multibyte-Lesen und -Schreiben können an jedem angegebenen Offset beginnen. Die Setter-Methoden funktionieren auf die gleiche Weise.

Das folgende Beispiel verwendet einen `DataView`, um die binäre Repräsentation einer beliebigen Zahl zu erhalten:

```js
function toBinary(
  x,
  { type = "Float64", littleEndian = false, separator = " ", radix = 16 } = {},
) {
  const bytesNeeded = globalThis[`${type}Array`].BYTES_PER_ELEMENT;
  const dv = new DataView(new ArrayBuffer(bytesNeeded));
  dv[`set${type}`](0, x, littleEndian);
  const bytes = Array.from({ length: bytesNeeded }, (_, i) =>
    dv
      .getUint8(i)
      .toString(radix)
      .padStart(8 / Math.log2(radix), "0"),
  );
  return bytes.join(separator);
}

console.log(toBinary(1.1)); // 3f f1 99 99 99 99 99 9a
console.log(toBinary(1.1, { littleEndian: true })); // 9a 99 99 99 99 99 f1 3f
console.log(toBinary(20, { type: "Int8", radix: 2 })); // 00010100
```

## Web-APIs, die Typed Arrays verwenden

Dies sind einige Beispiele von APIs, die Typed Arrays verwenden; es gibt andere, und es werden ständig neue hinzugefügt.

- [`FileReader.prototype.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
  - : Die Methode `FileReader.prototype.readAsArrayBuffer()` beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File).
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Die [`body`](/de/docs/Web/API/RequestInit#body) Option von `fetch()` kann ein Typed Array oder {{jsxref("ArrayBuffer")}} sein, sodass Sie diese Objekte als Nutzlast einer {{HTTPMethod("POST")}} Anfrage senden können.
- [`ImageData.data`](/de/docs/Web/API/ImageData)
  - : Ist eine {{jsxref("Uint8ClampedArray")}} und stellt ein eindimensionales Array dar, das die Daten in RGBA-Reihenfolge mit ganzzahligen Werten zwischen `0` und `255` enthält.

## Beispiele

### Ansicht mit Puffern verwenden

Zunächst müssen wir einen Puffer erstellen, hier mit einer festen Länge von 16-Bytes:

```js
const buffer = new ArrayBuffer(16);
```

Zu diesem Zeitpunkt haben wir ein Speicherelement, dessen Bytes alle auf 0 vorinitialisiert sind. Viel können wir jedoch damit noch nicht machen. Zum Beispiel können wir bestätigen, dass der Puffer die richtige Größe hat:

```js
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
```

Bevor wir wirklich mit diesem Puffer arbeiten können, müssen wir eine Ansicht erstellen. Lassen Sie uns eine Ansicht erstellen, die die Daten im Puffer als Array von 32-Bit vorzeichenbehafteten Integern behandelt:

```js
const int32View = new Int32Array(buffer);
```

Nun können wir auf die Felder im Array wie auf ein normales Array zugreifen:

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

Dies füllt die 4 Einträge im Array (4 Einträge mit jeweils 4 Bytes ergeben insgesamt 16 Bytes) mit den Werten `0`, `2`, `4` und `6`.

### Mehrere Ansichten auf dieselben Daten

Es wird wirklich interessant, wenn man bedenkt, dass man mehrere Ansichten auf dieselben Daten erstellen kann. Zum Beispiel können wir mit dem obigen Code folgendermaßen fortfahren:

```js
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}
```

Hier erstellen wir eine 16-Bit Integer Ansicht, die denselben Puffer wie die bestehende 32-Bit Ansicht teilt und geben alle Werte im Puffer als 16-Bit Integer aus. Jetzt erhalten wir die Ausgabe `0`, `0`, `2`, `0`, `4`, `0`, `6`, `0` (bei Annahme von Little-Endian Kodierung):

```plain
Int16Array  |   0  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |      0      |      2      |      4      |      6      |
ArrayBuffer | 00 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Man kann noch einen Schritt weiter gehen. Betrachten Sie dies:

```js
int16View[0] = 32;
console.log(`Entry 0 in the 32-bit array is now ${int32View[0]}`);
```

Die Ausgabe daraus ist `"Eintrag 0 im 32-Bit Array ist jetzt 32"`.

Mit anderen Worten, die beiden Arrays betrachten tatsächlich denselben Datenpuffer, indem sie ihn als unterschiedliche Formate behandeln.

```plain
Int16Array  |  32  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |     32      |      2      |      4      |      6      |
ArrayBuffer | 20 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Man kann dies mit jedem Ansichtstyp machen, obwohl, wenn man ein Integer setzt und es dann als Gleitkommazahl liest, wird man wahrscheinlich ein seltsames Ergebnis bekommen, weil die Bits unterschiedlich interpretiert werden.

```js
const float32View = new Float32Array(buffer);
console.log(float32View[0]); // 4.484155085839415e-44
```

### Text aus einem Puffer lesen

Puffer stellen nicht immer Zahlen dar. Zum Beispiel kann das Lesen einer Datei Ihnen einen Textdatenpuffer geben. Sie können diese Daten aus dem Puffer mithilfe eines Typed Arrays lesen.

Das folgende liest UTF-8 Text mit der [`TextDecoder`](/de/docs/Web/API/TextDecoder) Web-API:

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint8.set([228, 189, 160, 229, 165, 189]);
const text = new TextDecoder().decode(uint8);
console.log(text); // "你好"
```

Das folgende Beispiel liest UTF-16 Text unter Verwendung der Methode {{jsxref("String.fromCharCode()")}}:

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint16.set([0x4f60, 0x597d]);
const text = String.fromCharCode(...uint16);
console.log(text); // "你好"
```

### Arbeiten mit komplexen Datenstrukturen

Indem Sie einen einzigen Puffer mit mehreren Ansichten unterschiedlicher Typen kombinieren, die an unterschiedlichen Offsets in den Puffer starten, können Sie mit Datenobjekten interagieren, die mehrere Datentypen enthalten. Dies ermöglicht es Ihnen beispielsweise, mit komplexen Datenstrukturen von [WebGL](/de/docs/Web/API/WebGL_API) oder Datendateien zu interagieren.

Betrachten Sie diese C-Struktur:

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

Sie können auf einen Puffer zugreifen, der Daten in diesem Format enthält:

```js
const buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

const idView = new Uint32Array(buffer, 0, 1);
const usernameView = new Uint8Array(buffer, 4, 16);
const amountDueView = new Float32Array(buffer, 20, 1);
```

Dann können Sie beispielsweise auf den fälligen Betrag mit `amountDueView[0]` zugreifen.

> [!NOTE]
> Die [Datenstruktur-Ausrichtung](https://en.wikipedia.org/wiki/Data_structure_alignment) in einer C-Struktur ist plattformabhängig. Treffen Sie Vorkehrungen und berücksichtigen Sie diese Padding-Unterschiede.

### Umwandlung in normale Arrays

Nach der Verarbeitung eines Typed Arrays ist es manchmal nützlich, es zurück in ein normales Array zu konvertieren, um vom {{jsxref("Array")}} Prototyp zu profitieren. Dies kann mit {{jsxref("Array.from()")}} gemacht werden:

```js
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = Array.from(typedArray);
```

ebenso wie mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax):

```js
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = [...typedArray];
```

## Siehe auch

- [Schnellere Canvas-Pixelmanipulation mit Typed Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/) auf hacks.mozilla.org (2011)
- [Typed Arrays - Binärdaten im Browser](https://web.dev/articles/webgl-typed-arrays) auf web.dev (2012)
- {{Glossary("Endianness", "Endianness")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("TypedArray")}}
- {{jsxref("SharedArrayBuffer")}}

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}
