---
title: JavaScript Typed Arrays
slug: Web/JavaScript/Guide/Typed_arrays
l10n:
  sourceCommit: 469f97048247e0d738897cae20c695da6f1f738d
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}

JavaScript Typed Arrays sind array-ähnliche Objekte, die einen Mechanismus zum Lesen und Schreiben von rohen Binärdaten in Speicherpuffern bereitstellen.

Typed Arrays sind nicht dazu gedacht, Arrays für jegliche Art von Funktionalität zu ersetzen. Stattdessen bieten sie Entwicklern eine vertraute Schnittstelle zur Manipulation von Binärdaten. Dies ist nützlich beim Interagieren mit Plattformfunktionen, wie etwa bei der Audio- und Videobearbeitung, dem Zugriff auf Rohdaten über [WebSockets](/de/docs/Web/API/WebSockets_API) und so weiter. Jedes Element in einem JavaScript Typed Array ist ein roher Binärwert in einem von mehreren unterstützten Formaten, von 8-Bit-Ganzzahlen bis zu 64-Bit-Floatzahlen.

Typed Array Objekte teilen viele der gleichen Methoden mit Arrays, jedoch mit ähnlicher Semantik. Allerdings sind Typed Arrays _nicht_ mit normalen Arrays zu verwechseln, da der Aufruf von {{jsxref("Array.isArray()")}} auf einem Typed Array `false` zurückgibt. Darüber hinaus werden nicht alle Methoden, die für normale Arrays verfügbar sind, von Typed Arrays unterstützt (z.B. push und pop).

Um maximale Flexibilität und Effizienz zu erreichen, teilen JavaScript Typed Arrays die Implementierung in _Buffer_ und _Views_ auf. Ein Buffer ist ein Objekt, das ein Stück Daten darstellt; es hat kein Format, von dem man sprechen könnte, und bietet keinen Mechanismus zum Zugriff auf seinen Inhalt. Um auf den im Buffer enthaltenen Speicher zuzugreifen, müssen Sie eine [View](#views) verwenden. Eine View bietet einen _Kontext_ — das heißt, einen Datentyp, einen Startversatz und eine Anzahl von Elementen.

![Ein Diagramm, das zeigt, wie verschiedene Typed Arrays als Views desselben zugrunde liegenden Buffers fungieren können. Jedes hat eine unterschiedliche Anzahl von Elementen und Breite.](typed_arrays.png)

## Buffer

Es gibt zwei Arten von Buffern: {{jsxref("ArrayBuffer")}} und {{jsxref("SharedArrayBuffer")}}. Beide sind Low-Level-Darstellungen eines Speicherbereichs. Sie haben "Array" in ihren Namen, aber sie haben nicht viel mit Arrays zu tun – Sie können nicht direkt auf sie lesen oder schreiben. Stattdessen sind Buffer generische Objekte, die nur Rohdaten enthalten. Um auf den Speicher zuzugreifen, der von einem Buffer dargestellt wird, müssen Sie eine View verwenden.

Buffer unterstützen die folgenden Aktionen:

- _Zuordnen_: Sobald ein neuer Buffer erstellt wird, wird ein neuer Speicherbereich zugewiesen und auf `0` initialisiert.
- _Kopieren_: Mit der Methode {{jsxref("ArrayBuffer/slice", "slice()")}} können Sie einen Teil des Speichers effizient kopieren, ohne Views zu erstellen, um jedes Byte manuell zu kopieren.
- _Transferieren_: Mithilfe der Methoden {{jsxref("ArrayBuffer/transfer", "transfer()")}} und {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} können Sie den Besitz des Speicherbereichs an ein neues Buffer-Objekt übertragen. Dies ist nützlich, wenn Daten zwischen verschiedenen Ausführungskontexten ohne Kopieren übertragen werden müssen. Nach der Übertragung ist der ursprüngliche Buffer nicht mehr verwendbar. Ein `SharedArrayBuffer` kann nicht übertragen werden (da der Buffer bereits von allen Ausführungskontexten geteilt wird).
- _Größenänderung_: Mit der Methode {{jsxref("ArrayBuffer/resize", "resize()")}} können Sie den Speicherbereich vergrößern (mehr Speicherplatz beanspruchen, solange er das voreingestellte {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} Limit nicht überschreitet, oder etwas Speicherplatz freigeben). `SharedArrayBuffer` kann nur [vergrößert](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow) werden, aber nicht verkleinert.

Der Unterschied zwischen `ArrayBuffer` und `SharedArrayBuffer` besteht darin, dass ersterer immer nur von einem einzelnen Ausführungskontext zu einer Zeit besessen wird. Wenn Sie einen `ArrayBuffer` an einen anderen Ausführungskontext übergeben, wird er _übertragen_ und der ursprüngliche `ArrayBuffer` wird unbrauchbar. Dies stellt sicher, dass nur ein Ausführungskontext gleichzeitig auf den Speicher zugreifen kann. Ein `SharedArrayBuffer` wird nicht übertragen, wenn er an einen anderen Ausführungskontext übergeben wird, sodass er von mehreren Ausführungskontexten gleichzeitig zugegriffen werden kann. Dies kann zum Auftreten von Race-Bedingungen führen, wenn mehrere Threads auf denselben Speicherbereich zugreifen, weshalb Operationen wie die {{jsxref("Atomics")}} Methoden nützlich werden.

## Views

Derzeit gibt es zwei Hauptarten von Views: Typed Array Views und {{jsxref("DataView")}}. Typed Arrays bieten [Utility-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#instance_methods), mit denen Sie Binärdaten bequem transformieren können. `DataView` ist eher Low-Level und erlaubt eine granulare Kontrolle darüber, wie Daten zugegriffen werden. Die Möglichkeiten, Daten mithilfe der beiden Views zu lesen und zu schreiben, sind sehr unterschiedlich.

Beide Arten von Views führen dazu, dass {{jsxref("ArrayBuffer.isView()")}} `true` zurückgibt. Sie haben beide die folgenden Eigenschaften:

- `buffer`
  - : Der zugrunde liegende Buffer, den die View referenziert.
- `byteOffset`
  - : Der Versatz, in Bytes, der View vom Anfang ihres Buffers aus.
- `byteLength`
  - : Die Länge, in Bytes, der View.

Beide Konstruktoren akzeptieren die oben genannten drei als separate Argumente, obwohl die Konstruktoren von Typed Arrays `length` als die Anzahl der Elemente statt der Anzahl der Bytes akzeptieren.

### Typed Array Views

Typed Array Views haben selbsterklärende Namen und bieten Views für alle üblichen numerischen Typen wie `Int8`, `Uint32`, `Float64` und so weiter. Es gibt eine spezielle Typed Array View, {{jsxref("Uint8ClampedArray")}}, die die Werte zwischen `0` und `255` begrenzt. Dies ist nützlich für die [Canvas-Datenverarbeitung](/de/docs/Web/API/ImageData), zum Beispiel.

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

Alle Typed Array Views haben dieselben Methoden und Eigenschaften, wie von der {{jsxref("TypedArray")}} Klasse definiert. Sie unterscheiden sich nur im zugrunde liegenden Datentyp und der Größe in Bytes. Dies wird ausführlicher im Abschnitt [Wertekodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization) behandelt.

Typed Arrays sind im Prinzip feststehend, daher sind Array-Methoden, die die Länge eines Arrays ändern könnten, nicht verfügbar. Dazu gehören `pop`, `push`, `shift`, `splice` und `unshift`. Darüber hinaus ist `flat` nicht verfügbar, da es keine verschachtelten Typed Arrays gibt, und verwandte Methoden wie `concat` und `flatMap` haben keine großen Anwendungsfälle, daher sind sie nicht verfügbar. Da `splice` nicht verfügbar ist, ist auch `toSpliced` nicht vorhanden. Alle anderen Array-Methoden werden zwischen `Array` und `TypedArray` geteilt.

Andererseits hat `TypedArray` die zusätzlichen `set` und `subarray` Methoden, die die Arbeit mit mehreren Typed Arrays, die denselben Buffer anzeigen, optimieren. Die `set()` Methode ermöglicht das Setzen mehrerer Typed Array Indizes auf einmal unter Verwendung von Daten aus einem anderen Array oder Typed Array. Wenn die beiden Typed Arrays denselben zugrunde liegenden Buffer teilen, kann der Vorgang effizienter sein, da es sich um eine schnelle Speicherbewegung handelt. Die `subarray()` Methode erstellt eine neue Typed Array View, die denselben Buffer wie das ursprüngliche Typed Array referenziert, jedoch mit einem engeren Bereich.

Es gibt keine Möglichkeit, die Länge eines Typed Arrays direkt zu ändern, ohne den zugrunde liegenden Buffer zu ändern. Wenn jedoch die Typed Array View einen größenveränderbaren Buffer anzeigt und keine feste `byteLength` hat, ist sie _längentrackend_ und wird automatisch an den zugrunde liegenden Buffer angepasst, sobald der größenveränderbare Buffer geändert wird. Siehe [Verhalten beim Anzeigen eines größenveränderbaren Buffers](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer) für Einzelheiten.

Ähnlich wie bei regulären Arrays können Sie auf Elemente im Typed Array mit [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) zugreifen. Die entsprechenden Bytes im zugrunde liegenden Buffer werden abgerufen und als Zahl interpretiert. Jeder Zugriff auf Eigenschaften mit einer Zahl (oder der stringierten Darstellung einer Zahl, da Zahlen beim Zugriff auf Eigenschaften immer in Strings umgewandelt werden) wird vom Typed Array weitergeleitet – sie interagieren nie mit dem Objekt selbst. Das bedeutet zum Beispiel:

- Der Zugriff auf einen Index außerhalb des zulässigen Bereichs gibt immer `undefined` zurück, ohne tatsächlich auf die Eigenschaft im Objekt zuzugreifen.
- Jeder Versuch, auf eine solche Eigenschaft außerhalb des zulässigen Bereichs zu schreiben, hat keine Wirkung: Es wird kein Fehler ausgelöst, aber der Buffer oder das Typed Array wird auch nicht verändert.
- Typed Array Indizes scheinen konfigurierbar und beschreibbar zu sein, aber jeder Versuch, ihre Attribute zu ändern, schlägt fehl.

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

Der {{jsxref("DataView")}} ist eine low-level Schnittstelle, die eine hilfreiche Schnittstellenschnittstelle zum Lesen und Schreiben von Daten eines beliebigen Formats in den Buffer bietet. Dies ist nützlich, wenn unterschiedliche Datentypen behandelt werden müssen, zum Beispiel. Typed Array Views sind in der nativen Byte-Reihenfolge (siehe {{Glossary("Endianness", "Endianness")}}) Ihrer Plattform. Mit einem `DataView` kann die Byte-Reihenfolge gesteuert werden. Standardmäßig ist sie big-endian – die Bytes sind von den bedeutendsten zu den wenig bedeutenden geordnet. Dies kann umgekehrt werden, indem die Bytes von den wenig bedeutenden zu den bedeutendsten geordnet werden (little-endian) mithilfe von Getter/Setter-Methoden.

`DataView` erfordert keine Ausrichtung; Mehr-Byte-Lesen und -Schreiben kann an jedem angegebenen Offset gestartet werden. Die Setter-Methoden funktionieren auf dieselbe Weise.

Das folgende Beispiel verwendet einen `DataView`, um die binäre Darstellung einer beliebigen Zahl zu erhalten:

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

Hier sind einige Beispiele für APIs, die Typed Arrays verwenden; es gibt weitere, und ständig kommen mehr hinzu.

- [`FileReader.prototype.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
  - : Die `FileReader.prototype.readAsArrayBuffer()` Methode beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File).
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Die [`body`](/de/docs/Web/API/RequestInit#body) Option zu `fetch()` kann ein Typed Array oder {{jsxref("ArrayBuffer")}} sein, sodass Sie diese Objekte als Payload einer {{HTTPMethod("POST")}}-Anfrage senden können.
- [`ImageData.data`](/de/docs/Web/API/ImageData)
  - : Ist ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array darstellt, das die Daten in der RGBA-Reihenfolge enthält, mit ganzzahligen Werten zwischen `0` und `255` inklusive.

## Beispiele

### Verwendung von Views mit Buffern

Zuerst müssen wir einen Buffer erstellen, hier mit einer festen Länge von 16 Bytes:

```js
const buffer = new ArrayBuffer(16);
```

Zu diesem Zeitpunkt haben wir ein Stück Speicher, dessen Bytes alle auf 0 vorinitialisiert sind. Allerdings können wir damit nicht viel anfangen. Zum Beispiel können wir bestätigen, dass der Buffer die richtige Größe hat:

```js
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
```

Bevor wir wirklich mit diesem Buffer arbeiten können, müssen wir eine View erstellen. Lassen Sie uns eine View erstellen, die die Daten im Buffer als ein Array von 32-Bit-Ganzzahlen behandelt:

```js
const int32View = new Int32Array(buffer);
```

Jetzt können wir die Felder im Array wie ein normales Array zugreifen:

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

Dies füllt die 4 Einträge im Array aus (4 Einträge zu je 4 Bytes ergeben insgesamt 16 Bytes) mit den Werten `0`, `2`, `4` und `6`.

### Mehrere Views auf dieselben Daten

Besonders interessant wird es, wenn man bedenkt, dass man mehrere Views auf dieselben Daten erstellen kann. Zum Beispiel, basierend auf dem obigen Code, können wir so fortfahren:

```js
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}
```

Hier erstellen wir eine 16-Bit-Ganzzahl-View, die denselben Buffer wie die vorhandene 32-Bit-View teilt, und wir geben alle Werte im Buffer als 16-Bit-Ganzzahlen aus. Jetzt erhalten wir die Ausgabe `0`, `0`, `2`, `0`, `4`, `0`, `6`, `0` (unter der Annahme von Little-Endian-Codierung):

```plain
Int16Array  |   0  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |      0      |      2      |      4      |      6      |
ArrayBuffer | 00 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Man kann jedoch noch einen Schritt weiter gehen. Betrachten Sie dies:

```js
int16View[0] = 32;
console.log(`Entry 0 in the 32-bit array is now ${int32View[0]}`);
```

Die Ausgabe hiervon ist `"Entry 0 in the 32-bit array is now 32"`.

Mit anderen Worten, die beiden Arrays werden tatsächlich auf denselben Datenpuffer betrachtet und als unterschiedliche Formate behandelt.

```plain
Int16Array  |  32  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |     32      |      2      |      4      |      6      |
ArrayBuffer | 20 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Sie können dies mit jedem View-Typ tun, obwohl Sie vermutlich ein seltsames Ergebnis erhalten, wenn Sie eine Ganzzahl setzen und dann als eine Fließkommazahl lesen, da die Bits unterschiedlich interpretiert werden.

```js
const float32View = new Float32Array(buffer);
console.log(float32View[0]); // 4.484155085839415e-44
```

### Lesen von Text aus einem Buffer

Buffer repräsentieren nicht immer Zahlen. Zum Beispiel kann das Lesen einer Datei Ihnen einen Textdatenpuffer geben. Sie können diese Daten mit einem Typed Array aus dem Puffer lesen.

Das folgende Beispiel liest UTF-8-Text mithilfe der [`TextDecoder`](/de/docs/Web/API/TextDecoder) Web-API:

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint8.set([228, 189, 160, 229, 165, 189]);
const text = new TextDecoder().decode(uint8);
console.log(text); // "你好"
```

Das folgende Beispiel liest UTF-16-Text mit der {{jsxref("String.fromCharCode()")}} Methode:

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint16.set([0x4f60, 0x597d]);
const text = String.fromCharCode(...uint16);
console.log(text); // "你好"
```

### Arbeiten mit komplexen Datenstrukturen

Durch die Kombination eines einzigen Puffers mit mehreren Views unterschiedlicher Typen, die an verschiedenen Offsets in den Puffer starten, können Sie mit Datenobjekten interagieren, die mehrere Datentypen enthalten. Dies ermöglicht es Ihnen beispielsweise, mit komplexen Datenstrukturen von [WebGL](/de/docs/Web/API/WebGL_API) oder Datendateien zu interagieren.

Betrachten Sie diese C-Struktur:

```c
struct someStruct {
    unsigned long id;
    char username[16];
    float amountDue;
};
```

Sie können auf einen Puffer zugreifen, der Daten in diesem Format enthält, wie folgt:

```js
const buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

const idView = new Uint32Array(buffer, 0, 1);
const usernameView = new Uint8Array(buffer, 4, 16);
const amountDueView = new Float32Array(buffer, 20, 1);
```

Dann können Sie beispielsweise auf den zu zahlenden Betrag mit `amountDueView[0]` zugreifen.

> [!NOTE]
> Die [Datenstruktur-Ausrichtung](https://en.wikipedia.org/wiki/Data_structure_alignment) in einer C-Struktur ist plattformabhängig. Nehmen Sie Vorsichtsmaßnahmen und Überlegungen zu diesen Padding-Unterschieden in Betracht.

### Umwandlung in normale Arrays

Nach der Verarbeitung eines Typed Arrays kann es manchmal nützlich sein, es in ein normales Array zurück zu konvertieren, um von dem {{jsxref("Array")}} Prototyp zu profitieren. Dies kann mit {{jsxref("Array.from()")}} durchgeführt werden:

```js
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = Array.from(typedArray);
```

sowie mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax):

```js
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = [...typedArray];
```

## Siehe auch

- [Faster Canvas Pixel Manipulation with Typed Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/) auf hacks.mozilla.org (2011)
- [Typed arrays - Binary data in the browser](https://web.dev/articles/webgl-typed-arrays) auf web.dev (2012)
- {{Glossary("Endianness", "Endianness")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("TypedArray")}}
- {{jsxref("SharedArrayBuffer")}}

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}
