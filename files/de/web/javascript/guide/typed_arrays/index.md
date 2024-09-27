---
title: JavaScript typed arrays
slug: Web/JavaScript/Guide/Typed_arrays
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}

JavaScript Typed Arrays sind array-ähnliche Objekte, die einen Mechanismus zum Lesen und Schreiben von Rohdaten in Speicherpuffern bieten.

Typed Arrays sind nicht dazu gedacht, Arrays für jegliche Funktionalität zu ersetzen. Stattdessen bieten sie Entwicklern eine vertraute Schnittstelle zum Manipulieren binärer Daten. Dies ist nützlich bei der Interaktion mit Plattformmerkmalen, wie Audio- und Videomanipulation, Zugriff auf Rohdaten über [WebSockets](/de/docs/Web/API/WebSockets_API) und so weiter. Jeder Eintrag in einem JavaScript Typed Array ist ein roher binärer Wert in einem der unterstützten Formate, von 8-Bit-Ganzzahlen bis zu 64-Bit-Gleitkommazahlen.

Typed Array Objekte teilen viele der gleichen Methoden wie Arrays mit ähnlicher Semantik. Typed Arrays _dürfen jedoch nicht_ mit normalen Arrays verwechselt werden, da {{jsxref("Array.isArray()")}} bei einem Typed Array `false` zurückgibt. Zudem werden nicht alle Methoden, die für normale Arrays verfügbar sind, von Typed Arrays unterstützt (z.B. push und pop).

Um maximale Flexibilität und Effizienz zu erreichen, teilen JavaScript Typed Arrays die Implementierung in _Puffer_ und _Ansichten_. Ein Puffer ist ein Objekt, das einen Datenblock darstellt; er hat kein spezielles Format und bietet keinen Mechanismus zum Zugriff auf seine Inhalte. Um auf den im Puffer enthaltenen Speicher zuzugreifen, müssen Sie eine [Ansicht](#ansichten) verwenden. Eine Ansicht bietet einen _Kontext_ – das heißt, einen Datentyp, einen Startoffset und eine Anzahl von Elementen.

![Ein Diagramm, das zeigt, wie verschiedene Typed Arrays Ansichten desselben zugrunde liegenden Puffers sein können. Jede hat eine andere Elementanzahl und Breite.](typed_arrays.png)

## Puffer

Es gibt zwei Arten von Puffern: {{jsxref("ArrayBuffer")}} und {{jsxref("SharedArrayBuffer")}}. Beide sind niedrigstufige Darstellungen eines Speicherbereichs. Sie haben "Array" in ihren Namen, aber sie haben nicht viel mit Arrays zu tun — Sie können nicht direkt auf sie lesen oder schreiben. Stattdessen sind Puffer generische Objekte, die einfach Rohdaten enthalten. Um auf den durch einen Puffer dargestellten Speicher zuzugreifen, müssen Sie eine Ansicht verwenden.

Puffer unterstützen die folgenden Aktionen:

- _Zuweisen_: Sobald ein neuer Puffer erstellt wird, wird ein neuer Speicherbereich zugewiesen und auf `0` initialisiert.
- _Kopieren_: Mit der Methode {{jsxref("ArrayBuffer/slice", "slice()")}} können Sie einen Teil des Speichers effizient kopieren, ohne Ansichten erstellen zu müssen, um jedes Byte manuell zu kopieren.
- _Übertragen_: Mit den Methoden {{jsxref("ArrayBuffer/transfer", "transfer()")}} und {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} können Sie den Besitz des Speicherbereichs an ein neues Pufferobjekt übertragen. Dies ist nützlich, wenn Daten zwischen verschiedenen Ausführungskontexten übertragen werden sollen, ohne zu kopieren. Nach der Übertragung ist der ursprüngliche Puffer nicht mehr verwendbar. Ein `SharedArrayBuffer` kann nicht übertragen werden (da der Puffer bereits von allen Ausführungskontexten geteilt wird).
- _Größenänderung_: Mit der Methode {{jsxref("ArrayBuffer/resize", "resize()")}} können Sie den Speicherbereich vergrößern (solange das voreingestellte Limit von {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} nicht überschritten wird) oder verkleinern. `SharedArrayBuffer` kann nur [vergrößert](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow) werden, aber nicht verkleinert.

Der Unterschied zwischen `ArrayBuffer` und `SharedArrayBuffer` besteht darin, dass Ersterer immer von einem einzigen Ausführungskontext zu einem Zeitpunkt besessen wird. Wenn Sie einen `ArrayBuffer` an einen anderen Ausführungskontext übergeben, wird er _übertragen_ und der ursprüngliche `ArrayBuffer` wird unbrauchbar. Dies stellt sicher, dass nur ein Ausführungskontext gleichzeitig auf den Speicher zugreifen kann. Ein `SharedArrayBuffer` wird nicht übertragen, wenn er an einen anderen Ausführungskontext übergeben wird, sodass mehrere Ausführungskontexte gleichzeitig auf ihn zugreifen können. Dies kann zu Race-Conditions führen, wenn mehrere Threads auf denselben Speicherbereich zugreifen, daher werden Operationen wie {{jsxref("Atomics")}}-Methoden nützlich.

## Ansichten

Derzeit gibt es zwei Hauptarten von Ansichten: Typed Array Ansichten und {{jsxref("DataView")}}. Typed Arrays bieten [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#instance_methods), die es Ihnen ermöglichen, Binärdaten bequem zu transformieren. `DataView` ist niedriger spezifiziert und ermöglicht granulare Kontrolle darüber, wie auf Daten zugegriffen wird. Die Methoden zum Lesen und Schreiben von Daten mit den beiden Ansichten sind sehr unterschiedlich.

Beide Arten von Ansichten führen dazu, dass {{jsxref("ArrayBuffer.isView()")}} `true` zurückgibt. Sie haben beide die folgenden Eigenschaften:

- `buffer`
  - : Der zugrunde liegende Puffer, auf den die Ansicht verweist.
- `byteOffset`
  - : Der Offset, in Bytes, der Sicht vom Anfang ihres Puffers.
- `byteLength`
  - : Die Länge, in Bytes, der Sicht.

Beide Konstruktoren akzeptieren die oben genannten drei als separate Argumente, obwohl Typed Array Konstruktoren `Länge` als die Anzahl der Elemente und nicht als die Anzahl der Bytes akzeptieren.

### Typed Array Ansichten

Typed Array Ansichten haben selbsterklärende Namen und bieten Ansichten für alle gängigen numerischen Typen wie `Int8`, `Uint32`, `Float64` und so weiter. Es gibt eine spezielle Typed Array Ansicht, {{jsxref("Uint8ClampedArray")}}, die die Werte zwischen `0` und `255` begrenzt. Dies ist nützlich für [Canvas-Datenverarbeitung](/de/docs/Web/API/ImageData), zum Beispiel.

| Typ                             | Wertebereich                         | Größe in Bytes | Web IDL Typ           |
| ------------------------------- | ------------------------------------ | -------------- | --------------------- |
| {{jsxref("Int8Array")}}         | -128 bis 127                         | 1              | `byte`                |
| {{jsxref("Uint8Array")}}        | 0 bis 255                            | 1              | `octet`               |
| {{jsxref("Uint8ClampedArray")}} | 0 bis 255                            | 1              | `octet`               |
| {{jsxref("Int16Array")}}        | -32768 bis 32767                     | 2              | `short`               |
| {{jsxref("Uint16Array")}}       | 0 bis 65535                          | 2              | `unsigned short`      |
| {{jsxref("Int32Array")}}        | -2147483648 bis 2147483647           | 4              | `long`                |
| {{jsxref("Uint32Array")}}       | 0 bis 4294967295                     | 4              | `unsigned long`       |
| {{jsxref("Float16Array")}}      | `-65504` bis `65504`                 | 2              | N/A                   |
| {{jsxref("Float32Array")}}      | `-3.4e38` bis `3.4e38`               | 4              | `unrestricted float`  |
| {{jsxref("Float64Array")}}      | `-1.8e308` bis `1.8e308`             | 8              | `unrestricted double` |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> bis 2<sup>63</sup>-1 | 8              | `bigint`              |
| {{jsxref("BigUint64Array")}}    | 0 bis 2<sup>64</sup>-1               | 8              | `bigint`              |

Alle Typed Array Ansichten haben dieselben Methoden und Eigenschaften, wie sie von der {{jsxref("TypedArray")}} Klasse definiert sind. Sie unterscheiden sich nur im zugrunde liegenden Datentyp und in der Größe in Bytes. Dies wird im Detail in [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization) behandelt.

Typed Arrays sind im Prinzip fest in der Länge, so dass Array-Methoden, die die Länge eines Arrays ändern könnten, nicht verfügbar sind. Das schließt `pop`, `push`, `shift`, `splice` und `unshift` ein. Darüber hinaus ist `flat` nicht verfügbar, da es keine geschachtelten Typed Arrays gibt, und verwandte Methoden einschließlich `concat` und `flatMap` haben keine großen Anwendungsfälle und sind daher nicht verfügbar. Da `splice` nicht verfügbar ist, ist auch `toSpliced` nicht verfügbar. Alle anderen Array-Methoden werden zwischen `Array` und `TypedArray` geteilt.

Andererseits hat `TypedArray` die zusätzlichen Methoden `set` und `subarray`, die das Arbeiten mit mehreren Typed Arrays, die denselben Puffer ansehen, optimieren. Die `set()` Methode ermöglicht das Setzen mehrerer Typed Array-Indizes gleichzeitig unter Verwendung von Daten aus einem anderen Array oder Typed Array. Wenn die beiden Typed Arrays denselben zugrunde liegenden Puffer teilen, kann der Vorgang effizienter sein, da es sich um eine schnelle Speicherbewegung handelt. Die `subarray()` Methode erstellt eine neue Typed Array Ansicht, die denselben Puffer wie das ursprüngliche Typed Array referenziert, jedoch mit einem engeren Bereich.

Es gibt keine Möglichkeit, die Länge eines Typed Arrays direkt zu ändern, ohne den zugrunde liegenden Puffer zu ändern. Wenn jedoch das Typed Array einen größenveränderbaren Puffer ansieht und keine feste `byteLength` hat, ist es _längenverfolgend_ und passt sich automatisch an, um den zugrunde liegenden Puffer anzupassen, da der größenveränderbare Puffer vergrößert oder verkleinert wird. Weitere Informationen finden Sie unter [Verhalten bei der Ansicht eines größenveränderbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer).

Ähnlich wie bei normalen Arrays können Sie auf Typed Array Elemente mit [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) zugreifen. Die entsprechenden Bytes im zugrunde liegenden Puffer werden abgerufen und als Zahl interpretiert. Jeder Zugriff auf Eigenschaften mit einer Nummer (oder der String-Darstellung einer Nummer, da Zahlen beim Zugriff auf Eigenschaften immer in Strings umgewandelt werden) wird vom Typed Array vermittelt — sie interagieren niemals mit dem Objekt selbst. Dies bedeutet zum Beispiel:

- Der Zugriff auf einen Index außerhalb des Bereichs gibt immer `undefined` zurück, ohne tatsächlich auf die Eigenschaft im Objekt zuzugreifen.
- Jeder Versuch, auf eine solche Eigenschaft außerhalb des Bereichs zu schreiben, hat keine Wirkung: Es wird kein Fehler ausgelöst, aber er ändert weder den Puffer noch das Typed Array.
- Typed Array Indizes erscheinen konfigurierbar und beschreibbar, aber jeder Versuch, deren Attribute zu ändern, wird scheitern.

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

Der {{jsxref("DataView")}} ist eine niedrigstufige Schnittstelle, die einen Getter/Setter-API bereitstellt, um beliebige Daten in den Puffer zu lesen und zu schreiben. Dies ist nützlich, wenn mit unterschiedlichen Datentypen gearbeitet wird, zum Beispiel. Typed Array Ansichten sind in der nativen Byte-Reihenfolge (siehe [Endianness](/de/docs/Glossary/Endianness)) Ihrer Plattform. Mit einem `DataView` kann die Byte-Reihenfolge gesteuert werden. Standardmäßig ist es Big-Endian — die Bytes werden von höchstsignifikant zu wenig signifikant geordnet. Dies kann umgekehrt werden, mit den Bytes in der Reihenfolge von wenig signifikant zu höchstsignifikant (Little-Endian), unter Verwendung von Getter/Setter-Methoden.

`DataView` benötigt keine Ausrichtung; Mehr-Byte-Lesen und -Schreiben können an jedem angegebenen Offset gestartet werden. Die Setter-Methoden funktionieren auf die gleiche Weise.

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

## Web APIs, die Typed Arrays verwenden

Hier sind einige Beispiele für APIs, die Typed Arrays verwenden; es gibt weitere, und ständig kommen neue hinzu.

- [`FileReader.prototype.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
  - : Die Methode `FileReader.prototype.readAsArrayBuffer()` beginnt mit dem Lesen der Inhalte des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File).
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Die [`body`](/de/docs/Web/API/RequestInit#body)-Option für `fetch()` kann ein Typed Array oder {{jsxref("ArrayBuffer")}} sein, was es ermöglicht, diese Objekte als Nutzlast einer {{HTTPMethod("POST")}}-Anfrage zu senden.
- [`ImageData.data`](/de/docs/Web/API/ImageData)
  - : Ist ein {{jsxref("Uint8ClampedArray")}}, der ein eindimensionales Array darstellt, das die Daten in der RGBA-Reihenfolge mit ganzen Zahlen zwischen `0` und `255` inklusive enthält.

## Beispiele

### Verwendung von Ansichten mit Puffern

Zuerst müssen wir einen Puffer erstellen, hier mit einer festen Länge von 16 Bytes:

```js
const buffer = new ArrayBuffer(16);
```

An diesem Punkt haben wir ein Stück Speicher, dessen Bytes alle auf 0 vorinitialisiert sind. Damit können wir jedoch nicht viel anfangen. Beispielsweise können wir überprüfen, ob der Puffer die richtige Größe hat:

```js
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
```

Bevor wir wirklich mit diesem Puffer arbeiten können, müssen wir eine Ansicht erstellen. Lassen Sie uns eine Ansicht erstellen, die die Daten im Puffer als Array von 32-Bit-Ganzzahlen behandelt:

```js
const int32View = new Int32Array(buffer);
```

Jetzt können wir auf die Felder im Array genauso zugreifen wie auf ein normales Array:

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

Dies füllt die 4 Einträge im Array aus (4 Einträge zu je 4 Bytes ergeben insgesamt 16 Bytes) mit den Werten `0`, `2`, `4` und `6`.

### Mehrere Ansichten auf denselben Daten

Es wird wirklich interessant, wenn man bedenkt, dass man mehrere Ansichten auf dieselben Daten erstellen kann. Zum Beispiel können wir in Anbetracht des obigen Codes so weiter verfahren:

```js
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}
```

Hier erstellen wir eine 16-Bit-Ganzzahl-Ansicht, die denselben Puffer wie die vorhandene 32-Bit-Ansicht teilt, und wir geben alle Werte im Puffer als 16-Bit-Ganzzahlen aus. Nun erhalten wir die Ausgabe `0`, `0`, `2`, `0`, `4`, `0`, `6`, `0` (vorausgesetzt, es handelt sich um Little-Endian-Codierung):

```plain
Int16Array  |   0  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |      0      |      2      |      4      |      6      |
ArrayBuffer | 00 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Sie können aber noch einen Schritt weiter gehen. Betrachten Sie dies:

```js
int16View[0] = 32;
console.log(`Entry 0 in the 32-bit array is now ${int32View[0]}`);
```

Die Ausgabe hiervon ist `"Entry 0 in the 32-bit array is now 32"`.

Mit anderen Worten, die beiden Arrays werden tatsächlich auf derselben Datenpuffer betrachtet und als unterschiedliche Formate behandelt.

```plain
Int16Array  |  32  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |     32      |      2      |      4      |      6      |
ArrayBuffer | 20 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Sie können dies mit jedem Ansichtstyp tun, obwohl Sie, wenn Sie eine Ganzzahl setzen und diese dann als Gleitkommazahl lesen, möglicherweise ein seltsames Ergebnis erhalten, da die Bits unterschiedlich interpretiert werden.

```js
const float32View = new Float32Array(buffer);
console.log(float32View[0]); // 4.484155085839415e-44
```

### Text aus einem Puffer lesen

Puffer repräsentieren nicht immer Zahlen. Zum Beispiel kann das Lesen einer Datei Ihnen einen Textdatenpuffer geben. Sie können diese Daten aus dem Puffer mit einem Typed Array auslesen.

Das folgende liest UTF-8-Text mithilfe der Web-API [`TextDecoder`](/de/docs/Web/API/TextDecoder):

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint8.set([228, 189, 160, 229, 165, 189]);
const text = new TextDecoder().decode(uint8);
console.log(text); // "你好"
```

Das folgende liest UTF-16-Text mithilfe der Methode {{jsxref("String.fromCharCode()")}}:

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint16.set([0x4f60, 0x597d]);
const text = String.fromCharCode(...uint16);
console.log(text); // "你好"
```

### Arbeiten mit komplexen Datenstrukturen

Indem Sie einen einzigen Puffer mit mehreren Ansichten aus verschiedenen Typen kombinieren, die an verschiedenen Offset-Punkten in den Puffer starten, können Sie mit Datenobjekten interagieren, die mehrere Datentypen enthalten. Dies ermöglicht es Ihnen beispielsweise, mit komplexen Datenstrukturen von [WebGL](/de/docs/Web/API/WebGL_API) oder Datendateien zu interagieren.

Betrachten Sie diese C-Struktur:

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

Sie können auf einen Puffer, der Daten in diesem Format enthält, so zugreifen:

```js
const buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

const idView = new Uint32Array(buffer, 0, 1);
const usernameView = new Uint8Array(buffer, 4, 16);
const amountDueView = new Float32Array(buffer, 20, 1);
```

Dann können Sie zum Beispiel auf den fälligen Betrag mit `amountDueView[0]` zugreifen.

> [!NOTE]
> Die [Datenstruktur-Ausrichtung](https://en.wikipedia.org/wiki/Data_structure_alignment) in einer C-Struktur ist plattformabhängig. Treffen Sie Vorsichtsmaßnahmen und berücksichtigen Sie diese Unterschiede bei der Auffüllung.

### Konvertierung in normale Arrays

Nach der Bearbeitung eines Typed Arrays ist es manchmal nützlich, es wieder in ein normales Array zu konvertieren, um von den Prototyp-Eigenschaften von {{jsxref("Array")}} zu profitieren. Dies kann mit {{jsxref("Array.from()")}} erfolgen:

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

- [Schnellere Canvas-Pixel-Manipulation mit Typed Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/) auf hacks.mozilla.org (2011)
- [Typed Arrays - Binärdaten im Browser](https://web.dev/articles/webgl-typed-arrays) auf web.dev (2012)
- [Endianness](/de/docs/Glossary/Endianness)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("TypedArray")}}
- {{jsxref("SharedArrayBuffer")}}

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}
