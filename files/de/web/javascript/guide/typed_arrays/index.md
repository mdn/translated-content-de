---
title: JavaScript typisierte Arrays
slug: Web/JavaScript/Guide/Typed_arrays
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}

JavaScript-typisierte Arrays sind array-ähnliche Objekte, die einen Mechanismus zum Lesen und Schreiben von rohen Binärdaten in Speicherpuffern bieten.

Typisierte Arrays sollen Arrays nicht ersetzen, um irgendeine Funktionalität zu bieten. Stattdessen bieten sie Entwicklern eine vertraute Schnittstelle zum Manipulieren von Binärdaten. Dies ist nützlich beim Interagieren mit Plattformfunktionen, wie Audio- und Videobearbeitung, Zugriff auf Rohdaten mit [WebSockets](/de/docs/Web/API/WebSockets_API) und so weiter. Jedes Element in einem JavaScript-typisierten Array ist ein roher Binärwert in einem der unterstützten Formate, von 8-Bit-Ganzzahlen bis zu 64-Bit-Gleitkommazahlen.

Typisierte Array-Objekte teilen viele der gleichen Methoden wie Arrays mit ähnlicher Semantik. Typisierte Arrays sind jedoch _nicht_ mit normalen Arrays zu verwechseln, da der Aufruf von {{jsxref("Array.isArray()")}} auf einem typisierten Array `false` zurückgibt. Außerdem werden nicht alle für normale Arrays verfügbaren Methoden von typisierten Arrays unterstützt (z. B. push und pop).

Um maximale Flexibilität und Effizienz zu erreichen, teilen JavaScript-typisierte Arrays die Implementierung in _Puffer_ und _Sichten_ auf. Ein Puffer ist ein Objekt, das einen Datenblock darstellt; es hat kein Format und bietet keinen Mechanismus zum Zugriff auf seinen Inhalt. Um auf den im Puffer enthaltenen Speicher zuzugreifen, müssen Sie eine [Sicht](#sichten) verwenden. Eine Sicht bietet einen _Kontext_ — das heißt, einen Datentyp, einen Startoffset und eine Anzahl von Elementen.

![Ein Diagramm, das zeigt, wie verschiedene typisierte Arrays als Ansichten auf demselben zugrunde liegenden Puffer fungieren können. Jedes hat eine unterschiedliche Anzahl und Breite von Elementen.](typed_arrays.png)

## Puffer

Es gibt zwei Arten von Puffern: {{jsxref("ArrayBuffer")}} und {{jsxref("SharedArrayBuffer")}}. Beide sind niedrigstufige Darstellungen eines Speicherbereichs. Sie haben "Array" in ihren Namen, aber sie haben nicht viel mit Arrays zu tun — Sie können nicht direkt auf sie lesen oder schreiben. Stattdessen sind Puffer generische Objekte, die einfach Rohdaten enthalten. Um auf den durch einen Puffer repräsentierten Speicher zuzugreifen, müssen Sie eine Sicht verwenden.

Puffer unterstützen die folgenden Aktionen:

- _Zuweisen_: Sobald ein neuer Puffer erstellt wird, wird ein neuer Speicherbereich zugewiesen und auf `0` initialisiert.
- _Kopieren_: Mithilfe der {{jsxref("ArrayBuffer/slice", "slice()")}}-Methode können Sie effizient einen Teil des Speichers kopieren, ohne Sichten zum manuellen Kopieren jedes Bytes zu erstellen.
- _Übertragen_: Mithilfe der {{jsxref("ArrayBuffer/transfer", "transfer()")}}- und {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}-Methoden können Sie den Besitz des Speicherbereichs zu einem neuen Pufferobjekt übertragen. Dies ist nützlich, wenn Daten zwischen verschiedenen Ausführungskontexten übertragen werden, ohne sie zu kopieren. Nach der Übertragung ist der ursprüngliche Puffer nicht mehr verwendbar. Ein `SharedArrayBuffer` kann nicht übertragen werden (da der Puffer bereits von allen Ausführungskontexten geteilt wird).
- _Größe ändern_: Mithilfe der {{jsxref("ArrayBuffer/resize", "resize()")}}-Methode können Sie die Speichergröße ändern (entweder mehr Speicherplatz beanspruchen, solange das voreingestellte {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} Limit nicht überschritten wird, oder etwas Speicherplatz freigeben). `SharedArrayBuffer` kann nur [vergrößert](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow), aber nicht verkleinert werden.

Der Unterschied zwischen `ArrayBuffer` und `SharedArrayBuffer` besteht darin, dass ersterer immer nur von einem Ausführungskontext gleichzeitig besessen wird. Wenn Sie einen `ArrayBuffer` an einen anderen Ausführungskontext übergeben, wird er _übertragen_ und der ursprüngliche `ArrayBuffer` wird unbrauchbar. Dadurch wird sichergestellt, dass nur ein Ausführungskontext gleichzeitig auf den Speicher zugreifen kann. Ein `SharedArrayBuffer` wird nicht übertragen, wenn er an einen anderen Ausführungskontext übergeben wird, sodass er von mehreren Ausführungskontexten gleichzeitig verwendet werden kann. Dies kann zu Wettkampfbedingungen führen, wenn mehrere Threads auf denselben Speicherbereich zugreifen, daher werden Operationen wie {{jsxref("Atomics")}}-Methoden nützlich.

## Sichten

Derzeit gibt es zwei Hauptarten von Sichten: typisierte Arraysichten und {{jsxref("DataView")}}. Typisierte Arrays bieten [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#instance_methods), mit denen Sie Binärdaten bequem transformieren können. `DataView` ist niedriger angesiedelt und erlaubt eine feingranulare Kontrolle darüber, wie auf Daten zugegriffen wird. Die Methoden zum Lesen und Schreiben von Daten sind bei den beiden Sichten sehr unterschiedlich.

Bei beiden Arten von Sichten gibt {{jsxref("ArrayBuffer.isView()")}} `true` zurück. Sie haben beide die folgenden Eigenschaften:

- `buffer`
  - : Der zugrunde liegende Puffer, auf den die Sicht verweist.
- `byteOffset`
  - : Der Offset in Bytes der Sicht ab dem Beginn des Puffers.
- `byteLength`
  - : Die Länge in Bytes der Sicht.

Beide Konstruktoren akzeptieren die obigen drei als separate Argumente, obwohl typisierte Array-Konstruktoren `length` als Anzahl der Elemente und nicht als Anzahl der Bytes akzeptieren.

### Typisierte Arraysichten

Typisierte Arraysichten haben selbsterklärende Namen und bieten Sichten für alle üblichen Zahlentypen wie `Int8`, `Uint32`, `Float64` und so weiter. Es gibt eine spezielle typisierte Arraysicht, {{jsxref("Uint8ClampedArray")}}, die die Werte zwischen `0` und `255` begrenzt. Dies ist nützlich für [Canvas-Datenverarbeitung](/de/docs/Web/API/ImageData) zum Beispiel.

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

Alle typisierten Arraysichten haben die gleichen Methoden und Eigenschaften, wie sie von der {{jsxref("TypedArray")}}-Klasse definiert sind. Sie unterscheiden sich nur im zugrunde liegenden Datentyp und der Größe in Bytes. Dies wird im Detail in [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization) behandelt.

Typisierte Arrays sind grundsätzlich von fester Länge, daher sind Array-Methoden, die die Länge eines Arrays ändern könnten, nicht verfügbar. Dazu gehören `pop`, `push`, `shift`, `splice` und `unshift`. Darüber hinaus ist `flat` nicht verfügbar, da es keine verschachtelten typisierten Arrays gibt, und verwandte Methoden wie `concat` und `flatMap` haben keine großen Anwendungsfälle und sind daher nicht verfügbar. Da `splice` nicht verfügbar ist, ist auch `toSpliced` nicht verfügbar. Alle anderen Array-Methoden werden zwischen `Array` und `TypedArray` geteilt.

Andererseits hat `TypedArray` die zusätzlichen Methoden `set` und `subarray`, die das Arbeiten mit mehreren typisierten Arrays optimieren, die denselben Puffer anzeigen. Die `set()`-Methode erlaubt es, mehrere Indexe eines typisierten Arrays gleichzeitig zu setzen, indem Daten aus einem anderen Array oder typisierten Array verwendet werden. Wenn die beiden typisierten Arrays denselben zugrunde liegenden Puffer teilen, kann die Operation effizienter sein, da es sich um eine schnelle Speicherbewegung handelt. Die `subarray()`-Methode erstellt eine neue typisierte Arraysicht, die denselben Puffer wie das ursprüngliche typisierte Array referenziert, jedoch mit einem engeren Bereich.

Es gibt keine Möglichkeit, die Länge eines typisierten Arrays direkt zu ändern, ohne den zugrunde liegenden Puffer zu ändern. Wenn jedoch das typisierte Array einen skalierbaren Puffer ansieht und keine feste `byteLength` hat, ist es _längentrackend_ und wird automatisch an den zugrunde liegenden Puffer angepasst, wenn dieser skaliert wird. Siehe [Verhalten beim Anzeigen eines skalierbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer) für Details.

Ähnlich wie bei regulären Arrays können Sie auf Elemente eines typisierten Arrays mit [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) zugreifen. Die entsprechenden Bytes im zugrunde liegenden Puffer werden abgerufen und als Zahl interpretiert. Jeder Eigenschaftszugriff über eine Zahl (oder die String-Darstellung einer Zahl, da Zahlen immer in Strings umgewandelt werden, wenn auf Eigenschaften zugegriffen wird) wird vom typisierten Array proxied — sie interagieren niemals mit dem Objekt selbst. Das bedeutet beispielsweise:

- Ein Zugriff auf einen Index außerhalb der Grenzen gibt immer `undefined` zurück, ohne tatsächlich die Eigenschaft des Objekts zuzugreifen.
- Jeder Versuch, auf eine solche Eigenschaft außerhalb der Grenzen zu schreiben, hat keine Wirkung: Es wird kein Fehler ausgelöst, aber auch der Puffer oder das typisierte Array nicht geändert.
- Typisierte Arrayindizes scheinen konfigurierbar und beschreibbar zu sein, aber jeder Versuch, ihre Attribute zu ändern, wird fehlschlagen.

```js
const uint8 = new Uint8Array([1, 2, 3]);
console.log(uint8[0]); // 1

// Nur zu Veranschaulichungszwecken. Nicht für Produktionscode.
uint8[-1] = 0;
uint8[2.5] = 0;
uint8[NaN] = 0;
console.log(Object.keys(uint8)); // ["0", "1", "2"]
console.log(uint8[NaN]); // undefined

// Nicht-numerischer Zugriff funktioniert immer noch
uint8[true] = 0;
console.log(uint8[true]); // 0

Object.freeze(uint8); // TypeError: Cannot freeze array buffer views with elements
```

### DataView

Der {{jsxref("DataView")}} ist eine niedrigstufige Schnittstelle, die eine Getter/Setter-API bereitstellt, um beliebige Daten in den Puffer zu lesen und zu schreiben. Dies ist nützlich, wenn mit verschiedenen Datentypen gearbeitet wird, beispielsweise. Typisierte Arraysichten sind in der native Byte-Reihenfolge Ihrer Plattform (siehe [Endianness](/de/docs/Glossary/Endianness)). Mit einem `DataView` kann die Byte-Reihenfolge kontrolliert werden. Standardmäßig ist sie big-endian — die Bytes sind von den höchstwertigen zu den niedrigstwertigen geordnet. Dies kann umgekehrt werden, indem die Bytes von den niedrigstwertigen zu den höchstwertigen geordnet werden (little-endian), unter Verwendung von Getter/Setter-Methoden.

`DataView` erfordert keine Ausrichtung; Lese- und Schreiboperationen für mehrere Bytes können an jedem angegebenen Offset gestartet werden. Die Settermethoden funktionieren auf die gleiche Weise.

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

Hier sind einige Beispiele für APIs, die typisierte Arrays verwenden; es gibt auch andere, und ständig werden mehr hinzugefügt.

- [`FileReader.prototype.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
  - : Die `FileReader.prototype.readAsArrayBuffer()`-Methode beginnt mit dem Lesen der Inhalte des angegebenen [`Blob`](/de/docs/Web/API/Blob) oder [`File`](/de/docs/Web/API/File).
- [`fetch()`](/de/docs/Web/API/Window/fetch)
  - : Die [`body`](/de/docs/Web/API/RequestInit#body)-Option für `fetch()` kann ein typisiertes Array oder {{jsxref("ArrayBuffer")}} sein, wodurch Sie diese Objekte als Nutzlast einer {{HTTPMethod("POST")}}-Anfrage senden können.
- [`ImageData.data`](/de/docs/Web/API/ImageData)
  - : Ist ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array darstellt, das die Daten in der RGBA-Reihenfolge mit ganzzahligen Werten zwischen `0` und `255` enthält.

## Beispiele

### Verwendung von Sichten mit Puffern

Zunächst müssen wir einen Puffer erstellen, hier mit einer festen Länge von 16 Bytes:

```js
const buffer = new ArrayBuffer(16);
```

Zu diesem Zeitpunkt haben wir einen Speicherblock, dessen Bytes alle auf 0 vorinitialisiert sind. Viel können wir damit jedoch nicht machen. Zum Beispiel können wir bestätigen, dass der Puffer die richtige Größe hat:

```js
if (buffer.byteLength === 16) {
  console.log("Ja, es sind 16 Bytes.");
} else {
  console.log("Oh nein, es ist die falsche Größe!");
}
```

Bevor wir wirklich mit diesem Puffer arbeiten können, müssen wir eine Sicht erstellen. Lassen Sie uns eine Sicht erstellen, die die Daten im Puffer als ein Array von 32-Bit-Ganzzahlen behandelt:

```js
const int32View = new Int32Array(buffer);
```

Jetzt können wir auf die Felder im Array genau wie auf ein normales Array zugreifen:

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

Dies füllt die 4 Einträge im Array (4 Einträge zu je 4 Bytes ergeben insgesamt 16 Bytes) mit den Werten `0`, `2`, `4` und `6`.

### Mehrere Sichten auf dieselben Daten

Es wird wirklich interessant, wenn man bedenkt, dass man mehrere Sichten auf dieselben Daten erstellen kann. Zum Beispiel, basierend auf dem obigen Code, können wir so fortfahren:

```js
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Eintrag ${i}: ${int16View[i]}`);
}
```

Hier erstellen wir eine 16-Bit-Ganzzahl-Sicht, die denselben Puffer wie die bestehende 32-Bit-Sicht teilt, und geben alle Werte im Puffer als 16-Bit-Ganzzahlen aus. Jetzt erhalten wir die Ausgabe `0`, `0`, `2`, `0`, `4`, `0`, `6`, `0` (vorausgesetzt, Little-Endian-Kodierung):

```plain
Int16Array  |   0  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |      0      |      2      |      4      |      6      |
ArrayBuffer | 00 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Sie können noch einen Schritt weiter gehen. Betrachten Sie dies:

```js
int16View[0] = 32;
console.log(`Eintrag 0 im 32-Bit-Array ist jetzt ${int32View[0]}`);
```

Die Ausgabe daraus ist `"Eintrag 0 im 32-Bit-Array ist jetzt 32"`.

Mit anderen Worten, die beiden Arrays teilen sich tatsächlich denselben Datenpuffer und behandeln ihn als verschiedene Formate.

```plain
Int16Array  |  32  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |     32      |      2      |      4      |      6      |
ArrayBuffer | 20 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

Sie können dies mit jedem Sichttyp tun, obwohl Sie, wenn Sie eine Ganzzahl setzen und sie dann als Gleitpunktzahl lesen, wahrscheinlich ein seltsames Ergebnis erhalten, da die Bits unterschiedlich interpretiert werden.

```js
const float32View = new Float32Array(buffer);
console.log(float32View[0]); // 4.484155085839415e-44
```

### Lesen von Text aus einem Puffer

Puffer stellen nicht immer Zahlen dar. Zum Beispiel kann das Lesen einer Datei Ihnen einen Textdatenpuffer geben. Sie können diese Daten mit einem typisierten Array aus dem Puffer lesen.

Das folgende liest UTF-8-Text mit der {{domxref("TextDecoder")}}-Web-API:

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
// Daten manuell hier geschrieben, aber nehmen Sie an, dass sie bereits im Puffer waren
uint8.set([228, 189, 160, 229, 165, 189]);
const text = new TextDecoder().decode(uint8);
console.log(text); // "你好"
```

Das folgende liest UTF-16-Text mit der {{jsxref("String.fromCharCode()")}}-Methode:

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
// Daten manuell hier geschrieben, aber nehmen Sie an, dass sie bereits im Puffer waren
uint16.set([0x4f60, 0x597d]);
const text = String.fromCharCode(...uint16);
console.log(text); // "你好"
```

### Arbeiten mit komplexen Datenstrukturen

Durch die Kombination eines einzelnen Puffers mit mehreren Sichten unterschiedlicher Typen, die an verschiedenen Offsets im Puffer beginnen, können Sie mit Datenobjekten interagieren, die mehrere Datentypen enthalten. So können Sie beispielsweise mit komplexen Datenstrukturen von [WebGL](/de/docs/Web/API/WebGL_API) oder Datendateien interagieren.

Betrachten Sie diese C-Struktur:

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

Sie können auf einen Puffer zugreifen, der Daten in diesem Format enthält, so:

```js
const buffer = new ArrayBuffer(24);

// ... lesen Sie die Daten in den Puffer ...

const idView = new Uint32Array(buffer, 0, 1);
const usernameView = new Uint8Array(buffer, 4, 16);
const amountDueView = new Float32Array(buffer, 20, 1);
```

Dann können Sie beispielsweise den fälligen Betrag mit `amountDueView[0]` abrufen.

> [!NOTE]
> Die [Datenstruktur-Ausrichtung](https://en.wikipedia.org/wiki/Data_structure_alignment) in einer C-Struktur ist plattformabhängig. Treffen Sie Vorsichtsmaßnahmen und Überlegungen zu diesen Abweichungen bei der Auffüllung.

### Umwandlung in normale Arrays

Nach der Verarbeitung eines typisierten Arrays ist es manchmal nützlich, es in ein normales Array umzuwandeln, um vom {{jsxref("Array")}} Prototyp zu profitieren. Dies kann mit {{jsxref("Array.from()")}} gemacht werden:

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

- [Schnellere Canvas-Pixel-Manipulation mit typisierten Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/) auf hacks.mozilla.org (2011)
- [Typisierte Arrays - Binärdaten im Browser](https://web.dev/articles/webgl-typed-arrays) auf web.dev (2012)
- [Endianness](/de/docs/Glossary/Endianness)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("TypedArray")}}
- {{jsxref("SharedArrayBuffer")}}

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}
