---
title: JavaScript-typisierte Arrays
slug: Web/JavaScript/Guide/Typed_arrays
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}

JavaScript-typisierte Arrays sind array-ähnliche Objekte, die einen Mechanismus zum Lesen und Schreiben von rohen Binärdaten in Speicherpuffern bieten.

Typisierte Arrays sollen Arrays nicht für jegliche Art von Funktionalität ersetzen. Stattdessen bieten sie Entwicklern eine vertraute Schnittstelle zur Manipulation von Binärdaten. Dies ist nützlich, wenn Sie mit Plattformfunktionen arbeiten, wie z.B. Audio- und Videobearbeitung, Zugriff auf Rohdaten über [WebSockets](/de/docs/Web/API/WebSockets_API) und so weiter. Jedes Element in einem JavaScript-typisierten Array ist ein roher Binärwert in einem der unterstützten Formate, von 8-Bit-Ganzzahlen bis zu 64-Bit-Gleitkommazahlen.

Typisierte Array-Objekte teilen viele der gleichen Methoden wie Arrays mit ähnlicher Semantik. Jedoch dürfen typisierte Arrays _nicht_ mit normalen Arrays verwechselt werden, da ein Aufruf von {{jsxref("Array.isArray()")}} auf einem typisierten Array `false` zurückgibt. Außerdem werden nicht alle Methoden, die für normale Arrays verfügbar sind, von typisierten Arrays unterstützt (z.B. push und pop).

Um maximale Flexibilität und Effizienz zu erreichen, teilen JavaScript-typisierte Arrays die Implementierung in _Buffers_ und _Views_. Ein Buffer ist ein Objekt, das ein Datenstück darstellt; es hat kein Format im eigentlichen Sinne und bietet keinen Mechanismus, um auf seine Inhalte zuzugreifen. Um auf den im Buffer enthaltenen Speicher zuzugreifen, müssen Sie eine [View](#views) verwenden. Eine View bietet einen _Kontext_ — das heißt, einen Datentyp, einen Ausgangsoffset und eine Anzahl von Elementen.

![Ein Diagramm, das zeigt, wie verschiedene typisierte Arrays Views desselben zugrunde liegenden Buffers sein können. Jedes hat eine unterschiedliche Anzahl von Elementen und Breite.](typed_arrays.png)

## Buffers

Es gibt zwei Arten von Buffern: {{jsxref("ArrayBuffer")}} und {{jsxref("SharedArrayBuffer")}}. Beide sind niedrigstufige Darstellungen eines Speicherbereichs. Sie haben "Array" in ihrem Namen, aber sie haben nicht viel mit Arrays zu tun — Sie können nicht direkt in sie lesen oder schreiben. Stattdessen sind Buffer generische Objekte, die einfach rohe Daten enthalten. Um auf den vom Buffer dargestellten Speicher zuzugreifen, müssen Sie eine View verwenden.

Buffer unterstützen die folgenden Aktionen:

- _Allokieren_: Sobald ein neuer Buffer erstellt wird, wird ein neuer Speicherbereich allokiert und auf `0` initialisiert.
- _Kopieren_: Mit der {{jsxref("ArrayBuffer/slice", "slice()")}}-Methode können Sie effizient einen Teil des Speichers kopieren, ohne Views zu erstellen, um jedes Byte manuell zu kopieren.
- _Transferieren_: Mit den Methoden {{jsxref("ArrayBuffer/transfer", "transfer()")}} und {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} können Sie das Eigentum des Speicherbereichs auf ein neues Buffer-Objekt übertragen. Dies ist nützlich, wenn Sie Daten zwischen verschiedenen Ausführungskontexten ohne Kopieren übertragen. Nach dem Transfer ist der ursprüngliche Buffer nicht mehr verwendbar. Ein `SharedArrayBuffer` kann nicht übertragen werden (da der Buffer bereits von allen Ausführungskontexten geteilt wird).
- _Größe ändern_: Mit der Methode {{jsxref("ArrayBuffer/resize", "resize()")}} können Sie den Speicherbereich vergrößern (entweder durch Beanspruchung von mehr Speicher, solange das voreingestellte {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}-Limit nicht überschritten wird, oder durch Freigabe von Speicherplatz). `SharedArrayBuffer` kann nur [vergrößert](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow), aber nicht verkleinert werden.

Der Unterschied zwischen `ArrayBuffer` und `SharedArrayBuffer` besteht darin, dass Ersterer immer von einem einzigen Ausführungskontext zu einer Zeit besessen wird. Wenn Sie einen `ArrayBuffer` an einen anderen Ausführungskontext übergeben, wird er _transferiert_ und der ursprüngliche `ArrayBuffer` wird unbrauchbar. Dies stellt sicher, dass nur ein Ausführungskontext gleichzeitig auf den Speicher zugreifen kann. Ein `SharedArrayBuffer` wird nicht transferiert, wenn er an einen anderen Ausführungskontext übergeben wird, sodass er von mehreren Ausführungskontexten gleichzeitig verwendet werden kann. Dies kann jedoch Wettlaufsituationen hervorrufen, wenn mehrere Threads auf denselben Speicherbereich zugreifen, sodass Operationen wie {{jsxref("Atomics")}}-Methoden nützlich werden.

## Views

Derzeit gibt es zwei Hauptarten von Views: typisierte Array-Views und {{jsxref("DataView")}}. Typisierte Arrays bieten [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#instance_methods), die es Ihnen ermöglichen, Binärdaten bequem zu transformieren. `DataView` ist niederebenig und ermöglicht eine granulare Kontrolle darüber, wie auf Daten zugegriffen wird. Die Möglichkeiten, um Daten mit den beiden Views zu lesen und zu schreiben, sind sehr unterschiedlich.

Beide Arten von Views führen dazu, dass {{jsxref("ArrayBuffer.isView()")}} `true` zurückgibt. Beide haben die folgenden Eigenschaften:

- `buffer`
  - : Der zugrunde liegende Buffer, auf den die View verweist.
- `byteOffset`
  - : Der Offset in Bytes der View vom Anfang ihres Buffers.
- `byteLength`
  - : Die Länge in Bytes der View.

Beide Konstruktoren akzeptieren die obigen drei als separate Argumente, obwohl typisierte Array-Konstruktoren `length` als die Anzahl der Elemente anstelle der Anzahl der Bytes akzeptieren.

### Typisierte Array-Views

Typisierte Array-Views haben selbsterklärende Namen und bieten Views für alle üblichen numerischen Typen wie `Int8`, `Uint32`, `Float64` und so weiter. Es gibt einen speziellen typisierten Array-View, {{jsxref("Uint8ClampedArray")}}, der die Werte zwischen `0` und `255` begrenzt. Dies ist beispielsweise nützlich für die [Canvas-Datenverarbeitung](/de/docs/Web/API/ImageData).

| Typ                             | Wertebereich                           | Größe in Bytes | Web IDL-Typ           |
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

Alle typisierten Array-Views haben dieselben Methoden und Eigenschaften, wie sie von der {{jsxref("TypedArray")}}-Klasse definiert sind. Sie unterscheiden sich nur im zugrunde liegenden Datentyp und der Größe in Bytes. Dies wird im Detail in [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization) behandelt.

Typisierte Arrays sind im Prinzip festlängenmäßig, daher stehen Array-Methoden, die die Länge eines Arrays ändern könnten, nicht zur Verfügung. Dazu gehören `pop`, `push`, `shift`, `splice` und `unshift`. Außerdem ist `flat` nicht verfügbar, da keine geschachtelten typisierten Arrays existieren, und verwandte Methoden wie `concat` und `flatMap` haben keine bedeutenden Anwendungsfälle und sind daher nicht verfügbar. Da `splice` nicht verfügbar ist, ist es auch `toSpliced` nicht. Alle anderen Array-Methoden werden zwischen `Array` und `TypedArray` geteilt.

Andererseits hat `TypedArray` die zusätzlichen Methoden `set` und `subarray`, die die Arbeit mit mehreren typisierten Arrays, die denselben Buffer betrachten, optimieren. Die `set()`-Methode ermöglicht das Setzen mehrerer typisierter Array-Indizes gleichzeitig mit Daten aus einem anderen Array oder typisierten Array. Wenn die beiden typisierten Arrays denselben zugrunde liegenden Buffer teilen, kann die Operation effizienter sein, da es sich um eine schnelle Speicherbewegung handelt. Die `subarray()`-Methode erstellt eine neue typisierte Array-View, die denselben Buffer wie das ursprüngliche typisierte Array referenziert, jedoch mit einem engeren Umfang.

Es gibt keine Möglichkeit, die Länge eines typisierten Arrays direkt zu ändern, ohne den zugrunde liegenden Buffer zu ändern. Wenn jedoch das typisierte Array einen veränderbaren Buffer betrachtet und keine feste `byteLength` hat, ist es _längenspurend_ und wird automatisch an den zugrunde liegenden Buffer anpassen, wenn der veränderbare Buffer angepasst wird. Siehe [Verhalten beim Betrachten eines veränderbaren Buffers](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer) für Details.

Ähnlich wie bei normalen Arrays können Sie mit [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) auf typisierte Array-Elemente zugreifen. Die entsprechenden Bytes im zugrunde liegenden Buffer werden abgerufen und als Zahl interpretiert. Jeder Zugriff auf eine Eigenschaft mit einer Zahl (oder der String-Darstellung einer Zahl, da Zahlen beim Zugriff auf Eigenschaften immer in Strings umgewandelt werden) wird vom typisierten Array vermittelt — sie interagieren nie direkt mit dem Objekt selbst. Dies bedeutet zum Beispiel:

- Ein Zugriff auf einen Index außerhalb der Grenzen gibt stets `undefined` zurück, ohne tatsächlich auf die Eigenschaft des Objekts zuzugreifen.
- Jeder Versuch, auf eine solche Eigenschaft außerhalb der Grenzen zu schreiben, hat keine Auswirkung: Er löst keinen Fehler aus, ändert jedoch weder den Buffer noch das typisierte Array.
- Typisierte Array-Indizes scheinen konfigurierbar und beschreibbar zu sein, aber jeder Versuch, ihre Attribute zu ändern, schlägt fehl.

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

Der {{jsxref("DataView")}} ist eine niedrigebene Schnittstelle, die eine Getter/Setter-API bietet, um auf den Buffer beliebige Daten zu lesen und zu schreiben. Dies ist nützlich, wenn Sie mit unterschiedlichen Datentypen arbeiten, zum Beispiel. Typisierte Array-Views sind in der nativen Byt-Reihenfolge (siehe {{Glossary("Endianness", " Endianness")}}) Ihrer Plattform. Mit einem `DataView` kann die Byt-Reihenfolge kontrolliert werden. Standardmäßig ist es Big-Endian — die Bytes sind in der Reihenfolge vom bedeutendsten zum am wenigsten bedeutenden geordnet. Dies kann umgekehrt werden, sodass die Bytes vom am wenigsten bedeutenden zum bedeutendsten (Little-Endian) geordnet werden, mit den Getter/Setter-Methoden.

`DataView` erfordert keine Ausrichtung; Mehrbyte-Lese- und Schreibvorgänge können bei jedem angegebenen Offset gestartet werden. Die Setter-Methoden funktionieren genauso.

Das folgende Beispiel verwendet einen `DataView`, um die Binärdarstellung einer beliebigen Zahl zu erhalten:

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

## Web-APIs, die typisierte Arrays verwenden

Dies sind einige Beispiele für APIs, die typisierte Arrays verwenden; es gibt noch andere, und es werden ständig mehr hinzugefügt.

- [`FileReader.prototype.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
  - : Die Methode `FileReader.prototype.readAsArrayBuffer()` beginnt mit dem Lesen der Inhalte des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder der [`Datei`](/de/docs/Web/API/File).
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Die [`body`](/de/docs/Web/API/RequestInit#body)-Option für `fetch()` kann ein typisiertes Array oder {{jsxref("ArrayBuffer")}} sein, wodurch Sie diese Objekte als Nutzlast einer {{HTTPMethod("POST")}}-Anfrage senden können.
- [`ImageData.data`](/de/docs/Web/API/ImageData)
  - : Ist ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array darstellt, das die Daten in der RGBA-Reihenfolge mit ganzzahligen Werten zwischen `0` und `255` enthält.

## Beispiele

### Verwenden von Views mit Buffers

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

Jetzt können wir auf die Felder im Array zugreifen wie auf ein normales Array:

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

Dies füllt die 4 Einträge des Arrays aus (4 Einträge mit je 4 Bytes machen insgesamt 16 Bytes) mit den Werten `0`, `2`, `4` und `6`.

### Mehrere Views auf denselben Daten

Es wird wirklich interessant, wenn Sie mehrere Views auf dieselben Daten erstellen. Zum Beispiel können wir mit dem obigen Code wie folgt fortfahren:

```js
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}
```

Hier erstellen wir eine 16-Bit-Ganzzahlen-View, die denselben Buffer teilt wie die bestehende 32-Bit-View und geben alle Werte im Buffer als 16-Bit-Ganzzahlen aus. Jetzt erhalten wir die Ausgabe `0`, `0`, `2`, `0`, `4`, `0`, `6`, `0` (vorausgesetzt, es wird Little-Endian-Codierung verwendet):

```plain
Int16Array  |   0  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |      0      |      2      |      4      |      6      |
ArrayBuffer | 00 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Sie können noch einen Schritt weiter gehen. Betrachten Sie dies:

```js
int16View[0] = 32;
console.log(`Entry 0 in the 32-bit array is now ${int32View[0]}`);
```

Die Ausgabe davon ist `"Eintrag 0 im 32-Bit-Array ist jetzt 32"`.

Mit anderen Worten, die beiden Arrays betrachten tatsächlich denselben Datenpuffer und behandeln ihn als unterschiedliche Formate.

```plain
Int16Array  |  32  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |     32      |      2      |      4      |      6      |
ArrayBuffer | 20 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Sie können dies mit jedem View-Typ tun, obwohl Sie, wenn Sie eine Ganzzahl setzen und dann als Gleitkommazahl lesen, wahrscheinlich ein seltsames Ergebnis erhalten, weil die Bits unterschiedlich interpretiert werden.

```js
const float32View = new Float32Array(buffer);
console.log(float32View[0]); // 4.484155085839415e-44
```

### Lesen von Text aus einem Buffer

Buffer repräsentieren nicht immer Zahlen. Zum Beispiel kann das Lesen einer Datei einen Textdaten-Buffer ergeben. Sie können diese Daten aus dem Buffer lesen, indem Sie ein typisiertes Array verwenden.

Das Folgende liest UTF-8-Text mit der [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Web-API:

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint8.set([228, 189, 160, 229, 165, 189]);
const text = new TextDecoder().decode(uint8);
console.log(text); // "你好"
```

Das Folgende liest UTF-16-Text mit der {{jsxref("String.fromCharCode()")}}-Methode:

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint16.set([0x4f60, 0x597d]);
const text = String.fromCharCode(...uint16);
console.log(text); // "你好"
```

### Arbeiten mit komplexen Datenstrukturen

Durch die Kombination eines einzigen Buffers mit mehreren Views verschiedener Typen, die an verschiedenen Offsets in den Buffer starten, können Sie mit Datenobjekten arbeiten, die mehrere Datentypen enthalten. Dies ermöglicht Ihnen beispielsweise, mit komplexen Datenstrukturen von [WebGL](/de/docs/Web/API/WebGL_API) oder Datendateien zu interagieren.

Betrachten Sie diese C-Struktur:

```c
struct someStruct {
    unsigned long id;
    char username[16];
    float amountDue;
};
```

Sie können auf einen Buffer zugreifen, der Daten in diesem Format enthält:

```js
const buffer = new ArrayBuffer(24);

// … read the data into the buffer …

const idView = new Uint32Array(buffer, 0, 1);
const usernameView = new Uint8Array(buffer, 4, 16);
const amountDueView = new Float32Array(buffer, 20, 1);
```

Dann können Sie beispielsweise auf den fälligen Betrag mit `amountDueView[0]` zugreifen.

> [!NOTE]
> Die [Datenstruktur-Ausrichtung](https://de.wikipedia.org/wiki/Datenstruktur_Alignment) in einer C-Struktur ist plattformabhängig. Nehmen Sie Vorsichtsmaßnahmen und Überlegungen für diese Abweichungen bei der Auffüllung vor.

### Konvertierung zu normalen Arrays

Nachdem Sie ein typisiertes Array verarbeitet haben, ist es manchmal nützlich, es wieder in ein normales Array zu konvertieren, um von der {{jsxref("Array")}}-Prototyp zu profitieren. Dies kann mit {{jsxref("Array.from()")}} durchgeführt werden:

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

- [Schnellere Canvas-Pixelmanipulation mit typisierten Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/) auf hacks.mozilla.org (2011)
- [Typisierte Arrays - Binärdaten im Browser](https://web.dev/articles/webgl-typed-arrays) auf web.dev (2012)
- {{Glossary("Endianness", "Endianness")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("TypedArray")}}
- {{jsxref("SharedArrayBuffer")}}

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}
