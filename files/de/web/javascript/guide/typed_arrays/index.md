---
title: JavaScript-typisierte Arrays
slug: Web/JavaScript/Guide/Typed_arrays
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}

JavaScript-typisierte Arrays sind array-ähnliche Objekte, die einen Mechanismus zum Lesen und Schreiben von Rohbinärdaten in Speicherpuffern bieten.

Typisierte Arrays sollen keine Arrays für irgendeine Art von Funktionalität ersetzen. Sie bieten Entwicklern stattdessen eine vertraute Oberfläche zur Manipulation von Binärdaten. Dies ist nützlich beim Interagieren mit Plattformfunktionen wie Audio- und Videomanipulation, Zugriff auf Rohdaten über [WebSockets](/de/docs/Web/API/WebSockets_API) und so weiter. Jeder Eintrag in einem JavaScript-typisierten Array ist ein Rohbinärwert in einem der unterstützten Formate, von 8-Bit-Ganzzahlen bis hin zu 64-Bit-Gleitkommazahlen.

Typisierte Array-Objekte teilen viele der gleichen Methoden wie Arrays mit ähnlicher Semantik. Allerdings dürfen typisierte Arrays _nicht_ mit normalen Arrays verwechselt werden, da der Aufruf von {{jsxref("Array.isArray()")}} für ein typisiertes Array `false` zurückgibt. Darüber hinaus werden nicht alle Methoden, die für normale Arrays verfügbar sind, von typisierten Arrays unterstützt (z.B. push und pop).

Um maximale Flexibilität und Effizienz zu erreichen, teilen JavaScript-typisierte Arrays die Implementierung in _Buffer_ und _Views_ auf. Ein Buffer ist ein Objekt, das eine Datenmenge darstellt; es hat kein bestimmtes Format und bietet keinen Mechanismus zum Zugriff auf seinen Inhalt. Um auf den im Buffer enthaltenen Speicher zugreifen zu können, müssen Sie eine [View](#views) verwenden. Eine View bietet einen _Kontext_ — also einen Datentyp, einen Start-Offset und eine Anzahl von Elementen.

![Ein Diagramm, das zeigt, wie verschiedene typisierte Arrays als Ansichten desselben zugrunde liegenden Buffers fungieren können. Jedes hat eine unterschiedliche Anzahl an Elementen und Breite.](typed_arrays.png)

## Buffer

Es gibt zwei Arten von Buffern: {{jsxref("ArrayBuffer")}} und {{jsxref("SharedArrayBuffer")}}. Beide sind Niedrigebenen-Darstellungen eines Speichersegments. Sie haben "Array" im Namen, aber sie haben nicht viel mit Arrays zu tun — Sie können nicht direkt auf sie lesen oder schreiben. Stattdessen sind Buffer generische Objekte, die nur Rohdaten enthalten. Um auf den Speicher zugreifen zu können, den ein Buffer darstellt, müssen Sie eine View verwenden.

Buffer unterstützen folgende Aktionen:

- _Allokieren_: Sobald ein neuer Buffer erstellt wird, wird ein neues Speichersegment zugewiesen und mit `0` initialisiert.
- _Kopieren_: Mit der {{jsxref("ArrayBuffer/slice", "slice()")}}-Methode können Sie einen Teil des Speichers effizient kopieren, ohne Views zu erstellen, um jedes Byte manuell zu kopieren.
- _Übertragen_: Mit den Methoden {{jsxref("ArrayBuffer/transfer", "transfer()")}} und {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} können Sie den Besitz des Speichersegments auf ein neues Buffer-Objekt übertragen. Dies ist nützlich, um Daten zwischen verschiedenen Ausführungskontexten zu übertragen, ohne sie zu kopieren. Nach der Übertragung ist der ursprüngliche Buffer nicht mehr verwendbar. Ein `SharedArrayBuffer` kann nicht übertragen werden (da der Buffer bereits von allen Ausführungskontexten geteilt wird).
- _Größe ändern_: Mit der {{jsxref("ArrayBuffer/resize", "resize()")}}-Methode können Sie die Größe des Speichersegments ändern (entweder um mehr Speicherplatz anfordern, solange das voreingestellte {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}-Limit nicht überschritten wird, oder etwas Speicherplatz freigeben). `SharedArrayBuffer` kann nur [vergrößert](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow), aber nicht verkleinert werden.

Der Unterschied zwischen `ArrayBuffer` und `SharedArrayBuffer` besteht darin, dass der erstere immer nur von einem einzigen Ausführungskontext zu einer Zeit besessen wird. Wenn Sie einen `ArrayBuffer` an einen anderen Ausführungskontext übergeben, wird er _übertragen_ und der ursprüngliche `ArrayBuffer` wird unbrauchbar. Dies stellt sicher, dass nur ein Ausführungskontext gleichzeitig auf den Speicher zugreifen kann. Ein `SharedArrayBuffer` wird nicht übertragen, wenn er an einen anderen Ausführungskontext übergeben wird, sodass er von mehreren Ausführungskontexten gleichzeitig zugänglich ist. Dies kann zu Wettlaufsituationen führen, wenn mehrere Threads auf dasselbe Speichersegment zugreifen, sodass Operationen wie {{jsxref("Atomics")}}-Methoden nützlich werden.

## Views

Derzeit gibt es zwei Hauptarten von Views: typisierte Array-Views und {{jsxref("DataView")}}. Typisierte Arrays bieten [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#instance_methods), die es ermöglichen, Binärdaten bequem zu transformieren. `DataView` ist niedriger auf der Ebene und ermöglicht eine detaillierte Kontrolle darüber, wie auf Daten zugegriffen wird. Die Möglichkeiten, Daten mit den beiden Views zu lesen und zu schreiben, sind sehr unterschiedlich.

Beide Arten von Views führen dazu, dass {{jsxref("ArrayBuffer.isView()")}} `true` zurückgibt. Beide haben die folgenden Eigenschaften:

- `buffer`
  - : Der zugrunde liegende Buffer, auf den die View verweist.
- `byteOffset`
  - : Der Offset, in Bytes, der View vom Anfang ihres Buffers.
- `byteLength`
  - : Die Länge, in Bytes, der View.

Beide Konstruktoren akzeptieren die oben genannten drei als separate Argumente, obwohl typisierte Array-Konstruktoren `length` als Anzahl der Elemente anstelle der Anzahl von Bytes akzeptieren.

### Typisierte Array-Views

Typisierte Array-Views haben selbsterklärende Namen und bieten Views für alle üblichen numerischen Typen wie `Int8`, `Uint32`, `Float64` und so weiter. Es gibt eine spezielle typisierte Array-View, {{jsxref("Uint8ClampedArray")}}, die die Werte zwischen `0` und `255` begrenzt. Dies ist beispielsweise nützlich für die [Canvas-Datenverarbeitung](/de/docs/Web/API/ImageData).

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

Alle typisierten Array-Views haben die gleichen Methoden und Eigenschaften, wie sie von der {{jsxref("TypedArray")}}-Klasse definiert sind. Sie unterscheiden sich nur im zugrunde liegenden Datentyp und der Größe in Bytes. Dies wird ausführlicher in [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization) behandelt.

Typisierte Arrays sind prinzipiell festlängig, sodass Array-Methoden, die die Länge eines Arrays ändern könnten, nicht verfügbar sind. Dazu gehören `pop`, `push`, `shift`, `splice` und `unshift`. Darüber hinaus ist `flat` nicht verfügbar, da keine verschachtelten typisierten Arrays existieren, und verwandte Methoden einschließlich `concat` und `flatMap` haben keine großen Anwendungsfälle, daher sind sie nicht verfügbar. Da `splice` nicht verfügbar ist, ist auch `toSpliced` nicht verfügbar. Alle anderen Array-Methoden werden zwischen `Array` und `TypedArray` geteilt.

Auf der anderen Seite hat `TypedArray` die zusätzlichen `set`- und `subarray`-Methoden, die das Arbeiten mit mehreren typisierten Arrays optimieren, die denselben Buffer ansehen. Die `set()`-Methode ermöglicht es, mehrere typisierte Array-Indizes auf einmal einzustellen, unter Verwendung von Daten aus einem anderen Array oder typisierten Array. Wenn die beiden typisierten Arrays denselben zugrunde liegenden Buffer teilen, kann die Operation effizienter sein, da es ein schneller Speicherzugriff ist. Die `subarray()`-Methode erstellt eine neue typisierte Array-View, die denselben Buffer wie das ursprüngliche typisierte Array referenziert, jedoch mit einem kleineren Umfang.

Es gibt keine Möglichkeit, die Länge eines typisierten Arrays direkt zu ändern, ohne den zugrunde liegenden Buffer zu ändern. Wenn die typisierte Array-View jedoch einen veränderbaren Buffer ansieht und keine feste `byteLength` hat, ist sie _Längen-verfolgbar_ und passt sich automatisch an den zugrunde liegenden Buffer an, wenn der veränderbare Buffer vergrößert oder verkleinert wird. Siehe [Verhalten beim Anzeigen eines veränderbaren Buffers](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer) für Details.

Ähnlich wie bei normalen Arrays können Sie auf typisierte Array-Elemente mit [Bracket-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) zugreifen. Die entsprechenden Bytes im zugrunde liegenden Buffer werden abgerufen und als Zahl interpretiert. Jeder Zugriff auf Eigenschaften mit einer Zahl (oder der String-Darstellung einer Zahl, da Zahlen immer in Strings umgewandelt werden, wenn auf Eigenschaften zugegriffen wird) wird vom typisierten Array proxyartig behandelt — sie interagieren nie direkt mit dem Objekt selbst. Das bedeutet zum Beispiel:

- Der Zugriff auf einen Index außerhalb des Bereichs gibt immer `undefined` zurück, ohne tatsächlich auf die Eigenschaft im Objekt zuzugreifen.
- Jeder Versuch, auf eine solche Eigenschaft außerhalb des Bereichs zu schreiben, hat keine Auswirkungen: Es wird kein Fehler geworfen, aber der Buffer oder das typisierte Array wird nicht geändert.
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

Der {{jsxref("DataView")}} ist eine Niedrigebenen-Oberfläche, die eine Getter/Setter-API bietet, um beliebige Daten in den Buffer zu lesen und zu schreiben. Dies ist nützlich, wenn mit verschiedenen Datentypen gearbeitet wird. Typisierte Array-Views befinden sich in der nativen Bytereihenfolge (siehe {{Glossary("Endianness", "Endianness")}}) Ihrer Plattform. Mit einem `DataView` kann die Bytereihenfolge gesteuert werden. Standardmäßig ist sie big-endian — die Bytes sind von den signifikantesten zu den am wenigsten signifikanten geordnet. Dies kann umgekehrt werden, wobei die Bytes von den am wenigsten zu den signifikantesten geordnet sind (little-endian), unter Verwendung von Getter/Setter-Methoden.

`DataView` erfordert keine Ausrichtung; mehrbyte Lese- und Schreiboperationen können an jedem angegebenen Offset gestartet werden. Die Setter-Methoden funktionieren auf die gleiche Weise.

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

## Web-APIs, die typisierte Arrays verwenden

Dies sind einige Beispiele für APIs, die typisierte Arrays verwenden; es gibt noch weitere, und ständig werden neue hinzugefügt.

- [`FileReader.prototype.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
  - : Die Methode `FileReader.prototype.readAsArrayBuffer()` beginnt mit dem Lesen der Inhalte des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File).
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Die [`body`](/de/docs/Web/API/RequestInit#body)-Option für `fetch()` kann ein typisiertes Array oder {{jsxref("ArrayBuffer")}} sein, wodurch Sie diese Objekte als Nutzlast einer {{HTTPMethod("POST")}}-Anforderung senden können.
- [`ImageData.data`](/de/docs/Web/API/ImageData)
  - : Ist ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array darstellt, das die Daten in der RGBA-Reihenfolge mit ganzzahligen Werten zwischen `0` und `255` inklusive enthält.

## Beispiele

### Verwendung von Views mit Buffern

Zuerst müssen wir einen Buffer erstellen, hier mit einer festen Länge von 16 Bytes:

```js
const buffer = new ArrayBuffer(16);
```

Zu diesem Zeitpunkt haben wir ein Stück Speicher, dessen Bytes alle mit 0 vorinitialisiert sind. Viel können wir damit noch nicht machen. Wir können zum Beispiel bestätigen, dass der Buffer die richtige Größe hat:

```js
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
```

Bevor wir wirklich mit diesem Buffer arbeiten können, müssen wir eine View erstellen. Erstellen wir eine View, die die Daten im Buffer als Array von 32-Bit-Ganzzahlen behandelt:

```js
const int32View = new Int32Array(buffer);
```

Jetzt können wir auf die Felder im Array genau wie auf ein normales Array zugreifen:

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

Dies füllt die 4 Einträge im Array (4 Einträge à 4 Bytes ergeben insgesamt 16 Bytes) mit den Werten `0`, `2`, `4` und `6`.

### Mehrere Views auf denselben Daten

Das Ganze wird wirklich interessant, wenn Sie bedenken, dass Sie mehrere Views auf dieselben Daten erstellen können. Zum Beispiel, basierend auf dem obigen Code, können wir so fortfahren:

```js
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}
```

Hier erstellen wir eine 16-Bit-Ganzzahl-View, die denselben Buffer wie die bestehende 32-Bit-View teilt, und wir geben alle Werte im Buffer als 16-Bit-Ganzzahlen aus. Jetzt erhalten wir die Ausgabe `0`, `0`, `2`, `0`, `4`, `0`, `6`, `0` (angenommen, eine kleine Endian-Codierung):

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

Die Ausgabe hiervon ist `"Eintrag 0 im 32-Bit-Array ist jetzt 32"`.

Mit anderen Worten, die beiden Arrays werden tatsächlich auf denselben Datenbuffer betrachtet und als verschiedene Formate behandelt.

```plain
Int16Array  |  32  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |     32      |      2      |      4      |      6      |
ArrayBuffer | 20 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Sie können dies mit jeder View-Art tun, obwohl, wenn Sie eine Ganzzahl setzen und sie dann als Gleitkommazahl lesen, Sie wahrscheinlich ein merkwürdiges Ergebnis erhalten werden, da die Bits unterschiedlich interpretiert werden.

```js
const float32View = new Float32Array(buffer);
console.log(float32View[0]); // 4.484155085839415e-44
```

### Text aus einem Buffer lesen

Buffer repräsentieren nicht immer Zahlen. Das Lesen einer Datei kann Ihnen beispielsweise einen Textdatenbuffer geben. Sie können diese Daten mit einem typisierten Array aus dem Buffer lesen.

Das folgende liest UTF-8-Text mit der [`TextDecoder`](/de/docs/Web/API/TextDecoder) Web-API:

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint8.set([228, 189, 160, 229, 165, 189]);
const text = new TextDecoder().decode(uint8);
console.log(text); // "你好"
```

Das folgende liest UTF-16-Text mit der {{jsxref("String.fromCharCode()")}}-Methode:

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
// Data manually written here, but pretend it was already in the buffer
uint16.set([0x4f60, 0x597d]);
const text = String.fromCharCode(...uint16);
console.log(text); // "你好"
```

### Arbeiten mit komplexen Datenstrukturen

Indem Sie einen einzelnen Buffer mit mehreren Views unterschiedlicher Typen kombinieren, die bei unterschiedlichen Offsets in den Buffer starten, können Sie mit Datenobjekten interagieren, die mehrere Datentypen enthalten. Dies ermöglicht es Ihnen beispielsweise, mit komplexen Datenstrukturen von [WebGL](/de/docs/Web/API/WebGL_API) oder Dateiobjekten zu interagieren.

Betrachten Sie diese C-Struktur:

```c
struct someStruct {
    unsigned long id;
    char username[16];
    float amountDue;
};
```

Sie können auf einen Buffer in diesem Format wie folgt zugreifen:

```js
const buffer = new ArrayBuffer(24);

// … read the data into the buffer …

const idView = new Uint32Array(buffer, 0, 1);
const usernameView = new Uint8Array(buffer, 4, 16);
const amountDueView = new Float32Array(buffer, 20, 1);
```

Dann können Sie beispielsweise auf die fällige Summe mit `amountDueView[0]` zugreifen.

> [!NOTE]
> Die [Datenstruktur-Ausrichtung](https://en.wikipedia.org/wiki/Data_structure_alignment) in einer C-Struktur ist plattformabhängig. Treffen Sie Vorsichtsmaßnahmen und Überlegungen bezüglich dieser Unterschieden beim Einfügen von Auffüllungen.

### Umwandlung in normale Arrays

Nach der Verarbeitung eines typisierten Arrays kann es manchmal nützlich sein, es in ein normales Array zurückzukonvertieren, um die Vorteile des {{jsxref("Array")}}-Prototyps zu nutzen. Dies kann mithilfe von {{jsxref("Array.from()")}} erfolgen:

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
