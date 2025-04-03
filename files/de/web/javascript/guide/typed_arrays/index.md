---
title: JavaScript Typed Arrays
slug: Web/JavaScript/Guide/Typed_arrays
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}

JavaScript Typed Arrays sind array-ähnliche Objekte, die einen Mechanismus zum Lesen und Schreiben von Roh-Binärdaten in Speicherspeichern bieten.

Typed Arrays sollen nicht Arrays für jegliche Art von Funktionalität ersetzen. Stattdessen bieten sie Entwicklern eine vertraute Schnittstelle zur Manipulation von Binärdaten. Dies ist nützlich, wenn Sie mit Plattformfunktionen interagieren, wie z.B. Audio- und Videobearbeitung, Zugriff auf Rohdaten über [WebSockets](/de/docs/Web/API/WebSockets_API), und so weiter. Jeder Eintrag in einem JavaScript Typed Array ist ein roher Binärwert in einem der vielen unterstützten Formate, von 8-Bit-Ganzzahlen bis hin zu 64-Bit-Gleitkommazahlen.

Typed Array-Objekte teilen viele der gleichen Methoden wie Arrays mit ähnlicher Semantik. Typed Arrays dürfen jedoch _nicht_ mit normalen Arrays verwechselt werden, da der Aufruf von {{jsxref("Array.isArray()")}} auf einem Typed Array `false` zurückgibt. Zudem werden nicht alle für normale Arrays verfügbaren Methoden von Typed Arrays unterstützt (z.B. push und pop).

Um maximale Flexibilität und Effizienz zu erreichen, teilen JavaScript Typed Arrays die Implementierung in _Buffers_ und _Views_. Ein Buffer ist ein Objekt, das einen Datenblock darstellt; es hat kein Format, über das man sprechen könnte, und bietet keinen Mechanismus zum Zugriff auf seinen Inhalt. Um auf den Speicher in einem Buffer zuzugreifen, müssen Sie eine [View](#views) verwenden. Eine View bietet einen _Kontext_ — das heißt, einen Datentyp, Startoffset und eine Anzahl von Elementen.

![Ein Diagramm, das zeigt, wie verschiedene Typed Arrays Ansichten des gleichen zugrunde liegenden Buffers sein können. Jede hat eine andere Anzahl und Breite von Elementen.](typed_arrays.png)

## Buffers

Es gibt zwei Arten von Buffers: {{jsxref("ArrayBuffer")}} und {{jsxref("SharedArrayBuffer")}}. Beide sind niederpegelige Darstellungen eines Speicherbereichs. Sie haben „Array“ in ihren Namen, aber sie haben nicht viel mit Arrays zu tun — Sie können nicht direkt von ihnen lesen oder auf sie schreiben. Stattdessen sind Buffers generische Objekte, die nur Rohdaten enthalten. Um auf den Speicher zuzugreifen, der durch einen Buffer dargestellt wird, müssen Sie eine View verwenden.

Buffers unterstützen die folgenden Aktionen:

- _Zuweisen_: Sobald ein neuer Buffer erstellt wird, wird ein neuer Speicherbereich zugewiesen und auf `0` initialisiert.
- _Kopieren_: Mit der Methode {{jsxref("ArrayBuffer/slice", "slice()")}} können Sie effizient einen Teil des Speichers kopieren, ohne Views zu erstellen, um jedes Byte manuell zu kopieren.
- _Übertragen_: Mithilfe der Methoden {{jsxref("ArrayBuffer/transfer", "transfer()")}} und {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} können Sie das Eigentum des Speicherbereichs an ein neues Buffer-Objekt übertragen. Dies ist nützlich, wenn Daten zwischen verschiedenen Ausführungskontexten übertragen werden, ohne kopieren zu müssen. Nach der Übertragung ist der ursprüngliche Buffer nicht mehr verwendbar. Ein `SharedArrayBuffer` kann nicht übertragen werden, da der Buffer bereits von allen Ausführungskontexten geteilt wird.
- _Ändern der Größe_: Mit der Methode {{jsxref("ArrayBuffer/resize", "resize()")}} können Sie den Speicherbereich anpassen (entweder mehr Speicherplatz beanspruchen, solange er nicht das vordefinierte {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}-Limit überschreitet, oder etwas Speicherplatz freigeben). `SharedArrayBuffer` kann nur [erweitert](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow) werden, aber nicht verkleinert.

Der Unterschied zwischen `ArrayBuffer` und `SharedArrayBuffer` besteht darin, dass der erstere immer von einem einzigen Ausführungskontext besessen wird. Wenn Sie einen `ArrayBuffer` an einen anderen Ausführungskontext übergeben, wird er _übertragen_ und der ursprüngliche `ArrayBuffer` wird unbrauchbar. Dies stellt sicher, dass immer nur ein Ausführungskontext auf den Speicher zugreifen kann. Ein `SharedArrayBuffer` wird nicht übertragen, wenn er an einen anderen Ausführungskontext übergeben wird, sodass er gleichzeitig von mehreren Ausführungskontexten verwendet werden kann. Dies kann zu Wettlaufbedingungen führen, wenn mehrere Threads auf den gleichen Speicherbereich zugreifen, daher werden Operationen wie {{jsxref("Atomics")}}-Methoden nützlich.

## Views

Derzeit gibt es zwei Haupttypen von Views: Typed Array Views und {{jsxref("DataView")}}. Typed Arrays bieten [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#instance_methods) an, die es Ihnen ermöglichen, Binärdaten bequem zu transformieren. `DataView` ist niedrigstufiger und ermöglicht eine feine Steuerung, wie auf Daten zugegriffen wird. Die Möglichkeiten zum Lesen und Schreiben von Daten mithilfe der beiden Views sind sehr unterschiedlich.

Beide Arten von Views führen dazu, dass {{jsxref("ArrayBuffer.isView()")}} `true` zurückgibt. Beide haben die folgenden Eigenschaften:

- `buffer`
  - : Der zugrunde liegende Buffer, auf den die View verweist.
- `byteOffset`
  - : Der Offset in Bytes der View vom Beginn ihres Buffers.
- `byteLength`
  - : Die Länge in Bytes der View.

Beide Konstruktoren akzeptieren die oben genannten drei als separate Argumente, obwohl Typed Array-Konstruktoren `length` als die Anzahl der Elemente anstatt der Anzahl der Bytes akzeptieren.

### Typed Array Views

Typed Array Views haben selbsterklärende Namen und bieten Ansichten für alle üblichen numerischen Typen wie `Int8`, `Uint32`, `Float64` und so weiter. Es gibt eine spezielle Typed Array View, {{jsxref("Uint8ClampedArray")}}, die die Werte zwischen `0` und `255` begrenzt. Dies ist zum Beispiel nützlich für die [Canvas-Datenverarbeitung](/de/docs/Web/API/ImageData).

| Type                            | Wertebereich                           | Größe in Bytes | Web IDL Typ           |
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

Alle Typed Array Views haben die gleichen Methoden und Eigenschaften, wie sie von der {{jsxref("TypedArray")}}-Klasse definiert sind. Sie unterscheiden sich nur im zugrunde liegenden Datentyp und der Größe in Bytes. Dies wird ausführlicher in der [Wertcodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization) behandelt.

Typed Arrays sind grundsätzlich festlängenbasiert, daher sind Array-Methoden, die die Länge eines Arrays ändern können, nicht verfügbar. Dies schließt `pop`, `push`, `shift`, `splice` und `unshift` ein. Darüber hinaus ist `flat` nicht verfügbar, da es keine verschachtelten Typed Arrays gibt, und verwandte Methoden, einschließlich `concat` und `flatMap`, haben keine großen Anwendungsfälle und sind daher nicht verfügbar. Da `splice` nicht verfügbar ist, ist auch `toSpliced` nicht verfügbar. Alle anderen Array-Methoden werden von `Array` und `TypedArray` gemeinsam genutzt.

Auf der anderen Seite hat `TypedArray` die zusätzlichen Methoden `set` und `subarray`, die das Arbeiten mit mehreren Typed Arrays, die denselben Buffer betrachten, optimieren. Die `set()`-Methode ermöglicht das gleichzeitige Setzen mehrerer Indizes des Typed Arrays unter Verwendung von Daten aus einem anderen Array oder Typed Array. Wenn die beiden Typed Arrays denselben zugrunde liegenden Buffer teilen, könnte der Vorgang effizienter sein, da es sich um eine schnelle Speicherbewegung handelt. Die `subarray()`-Methode erstellt eine neue Typed Array View, die denselben Buffer wie das ursprüngliche Typed Array referenziert, jedoch mit einem schmaleren Bereich.

Es gibt keine Möglichkeit, die Länge eines Typed Arrays direkt zu ändern, ohne den zugrunde liegenden Buffer zu verändern. Wenn jedoch das Typed Array einen anpassbaren Buffer betrachtet und über keine feste `byteLength` verfügt, ist es _längenverfolgend_ und wird automatisch an den zugrunde liegenden Buffer angepasst, wenn der anpassbare Buffer geändert wird. Siehe [Verhalten beim Betrachten eines vergrößerbaren Buffers](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer) für Einzelheiten.

Ähnlich wie bei normalen Arrays können Sie auf Typed Array-Elemente mit [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) zugreifen. Die entsprechenden Bytes im zugrunde liegenden Buffer werden abgerufen und als Zahl interpretiert. Jeder Eigenschaftszugriff unter Verwendung einer Zahl (oder der String-Darstellung einer Zahl, da Zahlen immer in Strings konvertiert werden, wenn auf Eigenschaften zugegriffen wird) wird vom Typed Array geproxyt — sie interagieren niemals mit dem Objekt selbst. Das bedeutet zum Beispiel:

- Ein Zugriff auf einen Index außerhalb der Grenzen gibt immer `undefined` zurück, ohne tatsächlich auf die Eigenschaft im Objekt zuzugreifen.
- Jeder Versuch, auf eine solche Eigenschaft außerhalb der Grenzen zu schreiben, hat keine Auswirkungen: Es wird kein Fehler ausgelöst, aber es ändert auch nichts am Buffer oder Typed Array.
- Typed Array-Indizes scheinen konfigurierbar und beschreibbar zu sein, aber jeder Versuch, ihre Attribute zu ändern, wird fehlschlagen.

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

Der {{jsxref("DataView")}} ist eine niedrigstufige Schnittstelle, die eine Getter/Setter-API zum Lesen und Schreiben beliebiger Daten in den Buffer bereitstellt. Dies ist nützlich, wenn man es mit verschiedenen Datentypen zu tun hat. Typed Array Views sind in der nativen Byte-Reihenfolge (siehe {{Glossary("Endianness", "Endianness")}}) Ihrer Plattform. Mit einem `DataView` kann die Byte-Reihenfolge kontrolliert werden. Standardmäßig ist es Big-Endian — die Bytes sind von den bedeutendsten zu den unbedeutendsten geordnet. Dies kann umgekehrt werden, wobei die Bytes von den unbedeutendsten zu den bedeutendsten geordnet sind (Little-Endian), durch Verwendung von Getter-/Setter-Methoden.

`DataView` erfordert keine Ausrichtung; Lese- und Schreiboperationen mit mehreren Bytes können an jedem angegebenen Offset gestartet werden. Die Setter-Methoden funktionieren auf die gleiche Weise.

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

Dies sind einige Beispiele für APIs, die Typed Arrays verwenden; es gibt noch andere, und es kommen ständig neue hinzu.

- [`FileReader.prototype.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
  - : Die Methode `FileReader.prototype.readAsArrayBuffer()` beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File).
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Die Option [`body`](/de/docs/Web/API/RequestInit#body) für `fetch()` kann ein Typed Array oder {{jsxref("ArrayBuffer")}} sein, wodurch Sie diese Objekte als Nutzdaten einer {{HTTPMethod("POST")}}-Anfrage senden können.
- [`ImageData.data`](/de/docs/Web/API/ImageData)
  - : Ist eine {{jsxref("Uint8ClampedArray")}}, die ein eindimensionales Array darstellt, das die Daten in der RGBA-Reihenfolge enthält, mit ganzzahligen Werten zwischen `0` und `255` einschließlich.

## Beispiele

### Verwendung von Views mit Buffers

Zuerst müssen wir einen Buffer erstellen, hier mit einer festen Länge von 16 Bytes:

```js
const buffer = new ArrayBuffer(16);
```

Zu diesem Zeitpunkt haben wir einen Speicherbereich, dessen Bytes alle mit 0 vorinitialisiert sind. Es gibt jedoch nicht viel, was wir damit anfangen können. Zum Beispiel können wir bestätigen, dass der Buffer die richtige Größe hat:

```js
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
```

Bevor wir wirklich mit diesem Buffer arbeiten können, müssen wir eine View erstellen. Lassen Sie uns eine View erstellen, die die Daten im Buffer als Array von 32-Bit-Ganzzahlen behandelt:

```js
const int32View = new Int32Array(buffer);
```

Jetzt können wir auf die Felder im Array genauso zugreifen wie auf ein normales Array:

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

Dies füllt die 4 Einträge im Array (4 Einträge mit jeweils 4 Bytes ergeben 16 Gesamtbytes) mit den Werten `0`, `2`, `4` und `6` aus.

### Mehrere Views auf die gleichen Daten

Die Dinge werden wirklich interessant, wenn man bedenkt, dass man mehrere Views auf die gleichen Daten erstellen kann. Beispielsweise können wir nach dem obigen Code so weitermachen:

```js
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}
```

Hier erstellen wir eine 16-Bit-Ganzzahl-View, die denselben Buffer wie die vorhandene 32-Bit-View teilen, und wir geben alle Werte im Buffer als 16-Bit-Ganzzahlen aus. Jetzt erhalten wir die Ausgabe `0`, `0`, `2`, `0`, `4`, `0`, `6`, `0` (vorausgesetzt, kleines Endian-Encoding):

```plain
Int16Array  |   0  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |      0      |      2      |      4      |      6      |
ArrayBuffer | 00 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Sie können jedoch noch einen Schritt weiter gehen. Betrachten Sie dies:

```js
int16View[0] = 32;
console.log(`Entry 0 in the 32-bit array is now ${int32View[0]}`);
```

Die Ausgabe davon ist `"Eintrag 0 im 32-Bit-Array ist jetzt 32"`.

Mit anderen Worten, die beiden Arrays werden tatsächlich auf denselben Datenbuffer betrachtet, aber als unterschiedliche Formate behandelt.

```plain
Int16Array  |  32  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |     32      |      2      |      4      |      6      |
ArrayBuffer | 20 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Sie können dies mit jedem View-Typ machen, obwohl Sie, wenn Sie eine Ganzzahl setzen und sie dann als Gleitkommazahl lesen, wahrscheinlich ein seltsames Ergebnis erhalten, da die Bits unterschiedlich interpretiert werden.

```js
const float32View = new Float32Array(buffer);
console.log(float32View[0]); // 4.484155085839415e-44
```

### Lesen von Text aus einem Buffer

Buffers repräsentieren nicht immer Zahlen. Das Lesen einer Datei kann Ihnen beispielsweise einen Textdatenbuffer geben. Sie können diese Daten aus dem Buffer lesen, indem Sie ein Typed Array verwenden.

Die folgende Methode liest UTF-8-Text mit der Web-API [`TextDecoder`](/de/docs/Web/API/TextDecoder):

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint8.set([228, 189, 160, 229, 165, 189]);
const text = new TextDecoder().decode(uint8);
console.log(text); // "你好"
```

Die folgende Methode liest UTF-16-Text mit der Methode {{jsxref("String.fromCharCode()")}}:

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint16.set([0x4f60, 0x597d]);
const text = String.fromCharCode(...uint16);
console.log(text); // "你好"
```

### Arbeiten mit komplexen Datenstrukturen

Indem Sie einen einzigen Buffer mit mehreren Views unterschiedlicher Typen kombinieren, die an verschiedenen Offsets in den Buffer starten, können Sie mit Datenobjekten interagieren, die mehrere Datentypen enthalten. Dies ermöglicht es Ihnen beispielsweise, mit komplexen Datenstrukturen aus [WebGL](/de/docs/Web/API/WebGL_API) oder Datendateien zu interagieren.

Betrachten Sie diese C-Struktur:

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

Sie können auf einen Buffer zugreifen, der Daten in diesem Format enthält, so:

```js
const buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

const idView = new Uint32Array(buffer, 0, 1);
const usernameView = new Uint8Array(buffer, 4, 16);
const amountDueView = new Float32Array(buffer, 20, 1);
```

Dann können Sie beispielsweise auf den fälligen Betrag mit `amountDueView[0]` zugreifen.

> [!NOTE]
> Die [Datenstrukturausrichtung](https://en.wikipedia.org/wiki/Data_structure_alignment) in einer C-Struktur ist plattformabhängig. Treffen Sie Vorsichtsmaßnahmen und beachten Sie diese Polsterungsunterschiede.

### Umwandlung in normale Arrays

Nach der Verarbeitung eines Typed Arrays ist es manchmal nützlich, es in ein normales Array zurückzukonvertieren, um vom Prototypen von {{jsxref("Array")}} zu profitieren. Dies kann mit {{jsxref("Array.from()")}} durchgeführt werden:

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

- [Schnellere Canvas-Pixelmanipulation mit Typed Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/) auf hacks.mozilla.org (2011)
- [Typed Arrays - Binärdaten im Browser](https://web.dev/articles/webgl-typed-arrays) auf web.dev (2012)
- {{Glossary("Endianness", "Endianness")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("TypedArray")}}
- {{jsxref("SharedArrayBuffer")}}

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}
