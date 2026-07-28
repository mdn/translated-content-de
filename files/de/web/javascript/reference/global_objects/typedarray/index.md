---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
l10n:
  sourceCommit: 7c2fdcaace1ab622a1055b7cc710297c452ce9ee
---

Ein **_TypedArray_**-Objekt beschreibt eine array-ähnliche Ansicht eines zugrunde liegenden [binären Datenpuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). Es gibt keine globale Eigenschaft namens `TypedArray` und auch keinen direkt sichtbaren `TypedArray`-Konstruktor. Stattdessen gibt es eine Reihe von verschiedenen globalen Eigenschaften, deren Werte TypedArray-Konstruktoren für bestimmte Elementtypen sind, die unten aufgeführt sind. Auf den folgenden Seiten finden Sie gemeinsame Eigenschaften und Methoden, die mit jedem TypedArray, das Elemente eines beliebigen Typs enthält, verwendet werden können.

## Beschreibung

Der `TypedArray`-Konstruktor (oft als `%TypedArray%` bezeichnet, um seine "Intrinsizität" zu verdeutlichen, da er keinem globalen JavaScript-Programm entspricht) dient als die gemeinsame Superklasse aller `TypedArray`-Unterklassen. Betrachten Sie `%TypedArray%` als eine "abstrakte Klasse", die eine gemeinsame Schnittstelle von Dienstprogrammmethoden für alle TypedArray-Unterklassen bereitstellt. Dieser Konstruktor ist nicht direkt sichtbar: Es gibt keine globale `TypedArray`-Eigenschaft. Er ist nur über `Object.getPrototypeOf(Int8Array)` und ähnlich zugänglich.

Bei der Erstellung einer Instanz einer `TypedArray`-Unterklasse (z. B. `Int8Array`) wird intern im Speicher ein Array-Puffer erstellt oder, wenn ein `ArrayBuffer`-Objekt als Konstruktorargument angegeben wird, wird dieser `ArrayBuffer` stattdessen verwendet. Die Pufferadresse wird als interne Eigenschaft der Instanz gespeichert, und alle Methoden von `%TypedArray%.prototype` werden Werte basierend auf dieser Array-Pufferadresse setzen und abrufen.

### TypedArray-Objekte

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

### Wert-Codierung und Normalisierung

Alle TypedArrays arbeiten auf `ArrayBuffer`s, in denen Sie die genaue Byte-Darstellung jedes Elements beobachten können. Daher ist es bedeutend, wie die Zahlen im binären Format kodiert werden.

- Unsigned Integer Arrays (`Uint8Array`, `Uint16Array`, `Uint32Array` und `BigUint64Array`) speichern die Zahl direkt im Binärsystem.
- Signed Integer Arrays (`Int8Array`, `Int16Array`, `Int32Array` und `BigInt64Array`) speichern die Zahl unter Verwendung des [Zweierkomplements](https://en.wikipedia.org/wiki/Two's_complement).
- Gleitkomma-Arrays (`Float16Array`, `Float32Array` und `Float64Array`) speichern die Zahl unter Verwendung des [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) Gleitkommaformats. Die [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)-Referenz enthält mehr Informationen über das genaue Format. JavaScript-Zahlen verwenden standardmäßig das Double-Precision-Gleitkommaformat, das dasselbe ist wie `Float64Array`. `Float32Array` verwendet 23 (statt 52) Bits für die Mantisse und 8 (statt 11) Bits für den Exponenten. `Float16Array` verwendet 10 Bits für die Mantisse und 5 Bits für den Exponenten. Beachten Sie, dass die Spezifikation erfordert, dass alle {{jsxref("NaN")}}-Werte dieselbe Bit-Codierung verwenden, aber das genaue Bitmuster ist implementierungsabhängig.
- `Uint8ClampedArray` ist ein besonderer Fall. Es speichert die Zahl im Binärsystem wie `Uint8Array`, aber wenn Sie eine Zahl außerhalb des Bereichs speichern, wird die Zahl auf den Bereich 0 bis 255 durch mathematischen Wert _geklammert_, anstatt die höchstwertigen Bits zu kürzen.

Alle TypedArrays außer `Int8Array`, `Uint8Array` und `Uint8ClampedArray` speichern jedes Element mit mehreren Bytes. Diese Bytes können entweder von den signifikantesten zu den am wenigsten signifikanten (big-endian) oder von den am wenigsten signifikanten zu den signifikantesten (little-endian) angeordnet sein. Siehe {{Glossary("Endianness", "Endianness")}} für eine ausführlichere Erklärung. TypedArrays verwenden immer die native Byte-Reihenfolge der Plattform. Wenn Sie die Endianness beim Schreiben und Lesen von Puffern angeben möchten, sollten Sie stattdessen einen {{jsxref("DataView")}} verwenden.

Beim Schreiben in diese TypedArrays werden Werte, die außerhalb des darstellbaren Bereichs liegen, normalisiert.

- Alle Integer-Arrays (außer `Uint8ClampedArray`) verwenden [Festbreiten-Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion), die zuerst den Dezimalteil der Zahl abschneiden und dann die niedrigsten Bits nehmen.
- `Uint8ClampedArray` klammert die Zahl zuerst auf den Bereich 0 bis 255 (Werte größer als 255 werden zu 255 und Werte kleiner als 0 werden zu 0). Dann wird der Wert auf den nächsten ganzzahligen Wert _gerundet_ (anstatt abgerundet), mit Rundung zur nächsten geraden Zahl; das heißt, wenn die Zahl genau zwischen zwei ganzzahligen Werten liegt, wird sie auf die nächste gerade Zahl gerundet. Zum Beispiel wird `0.5` zu `0`, `1.5` zu `2` und `2.5` zu `2`.
- `Float16Array` und `Float32Array` führen ein "Round to Even" durch, um 64-Bit-Gleitkommazahlen in 32-Bit- und 16-Bit-Zahlen zu konvertieren. Dies ist derselbe Algorithmus, der von {{jsxref("Math.fround()")}} und {{jsxref("Math.f16round()")}} bereitgestellt wird.

### Verhalten beim Anzeigen eines veränderbaren Puffers

Wenn ein `TypedArray` als Ansicht eines [veränderbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#resizing_arraybuffers) erstellt wird, hat das Ändern der Größe des zugrunde liegenden Puffers unterschiedliche Auswirkungen auf die Größe des `TypedArray`, je nachdem, ob das `TypedArray` als length-tracking erstellt wurde.

Wenn ein TypedArray ohne spezifische Größe erstellt wird, indem der dritte Parameter weggelassen oder `undefined` übergeben wird, wird das TypedArray _length-tracking_ und wird automatisch auf die Größe des zugrunde liegenden `buffers` angepasst, wenn dieser vergrößert wird:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

Wenn ein TypedArray mit einer spezifischen Größe unter Verwendung des dritten `length`-Parameters erstellt wird, wird es nicht wachsen, um den `buffer` einzuschließen, wenn letzterer vergrößert wird:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0, the initial value

buffer.resize(12);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0, the initial value
```

Wenn ein `buffer` verkleinert wird, kann das betrachtete Typed Array außerhalb der Grenzen liegen, in diesem Fall sinkt die beobachtete Größe des TypedArrays auf 0. Dies ist der einzige Fall, in dem sich die Länge eines nicht length-tracking TypedArrays ändern kann.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

Wenn Sie dann den `buffer` wieder vergrößern, um das TypedArray wieder innerhalb der Grenzen zu bringen, wird die Größe des TypedArrays auf den Originalwert zurückgesetzt.

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - back in bounds again!
```

Dasselbe kann auch für length-tracking TypedArrays passieren, wenn der Buffer über den `byteOffset` hinaus verkleinert wird.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 4);
// float32 is length-tracking, but it only extends from the 4th byte
// to the end of the buffer, so if the buffer is resized to be shorter
// than 4 bytes, the typed array will become out of bounds
buffer.resize(3);
console.log(float32.byteLength); // 0
```

## Konstruktor

Dieses Objekt kann nicht direkt instanziiert werden — der Versuch, es mit `new` zu konstruieren, führt zu einem {{jsxref("TypeError")}}.

```js
new (Object.getPrototypeOf(Int8Array))();
// TypeError: Abstract class TypedArray not directly constructable
```

Stattdessen erstellen Sie eine Instanz eines TypedArrays eines bestimmten Typs, wie zum Beispiel ein {{jsxref("Int8Array")}} oder ein {{jsxref("BigInt64Array")}}. Diese Objekte haben alle eine gemeinsame Syntax für ihre Konstruktoren:

```js-nolint
new TypedArray()
new TypedArray(length)
new TypedArray(typedArray)
new TypedArray(object)

new TypedArray(buffer)
new TypedArray(buffer, byteOffset)
new TypedArray(buffer, byteOffset, length)
```

Wo `TypedArray` ein Konstruktor für einen der konkreten Typen ist.

> [!NOTE]
> Alle Konstruktoren von `TypedArray`-Unterklassen können nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, einen ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `typedArray`
  - : Wenn mit einer Instanz einer `TypedArray`-Unterklasse aufgerufen wird, wird das `typedArray` in ein neues TypedArray kopiert. Für einen nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray`-Konstruktor kann der `typedArray`-Parameter nur einer der nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen sein (wie {{jsxref("Int32Array")}}). Ähnlich kann für einen [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray`-Konstruktor ({{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}) der `typedArray`-Parameter nur einer der [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen sein. Jeder Wert im `typedArray` wird in den entsprechenden Typ des Konstruktors konvertiert, bevor er in das neue Array kopiert wird. Die Länge des neuen TypedArrays entspricht der Länge des `typedArray`-Arguments.
- `object`
  - : Wenn mit einem Objekt aufgerufen wird, das keine `TypedArray`-Instanz ist, wird ein neues TypedArray in derselben Weise erstellt wie die Methode [`TypedArray.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from).
- `length` {{optional_inline}}
  - : Wenn mit einem Nicht-Objekt aufgerufen wird, wird der Parameter als Zahl behandelt, die die Länge des TypedArrays angibt. Ein interner Array-Puffer wird im Speicher erstellt, mit einer Größe von `length`, multipliziert mit [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes, gefüllt mit Nullen. Das Weglassen aller Parameter ist gleichbedeutend mit der Verwendung von `0` als `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : Wenn mit einer Instanz von `ArrayBuffer` oder `SharedArrayBuffer` aufgerufen wird, und optional einem `byteOffset` und einem `length`-Argument, wird eine neue TypedArray-Ansicht erstellt, die den angegebenen Puffer anzeigt. Die Parameter `byteOffset` (in Bytes) und `length` (in Anzahl der Elemente, wobei jedes [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes belegt) geben den Speicherrange an, der durch die TypedArray-Ansicht angezeigt wird. Wenn beide weggelassen werden, wird der gesamte `buffer` betrachtet; wenn nur `length` weggelassen wird, wird der Rest des `buffers`, ausgehend von `byteOffset`, betrachtet. Wenn `length` weggelassen wird, wird das TypedArray [length-tracking](#verhalten_beim_anzeigen_eines_veränderbaren_puffers).

### Ausnahmen

Alle Konstruktoren von `TypedArray`-Unterklassen funktionieren auf die gleiche Weise. Alle werfen die folgenden Ausnahmen:

- {{jsxref("TypeError")}}
  - : Ausgelöst in einem der folgenden Fälle:
    - Ein `typedArray` wird übergeben, aber es ist ein [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ, während der aktuelle Konstruktor dies nicht ist, oder umgekehrt.
    - Ein `typedArray` wird übergeben, aber der Puffer, den es anzeigt, ist getrennt oder ein getrennter `buffer` wird direkt übergeben.
- {{jsxref("RangeError")}}
  - : Ausgelöst in einem der folgenden Fälle:
    - Die neue Länge des TypedArrays ist zu groß.
    - Die Länge des `buffers` (falls der `length`-Parameter nicht angegeben ist) oder `byteOffset` ist kein ganzzahliges Vielfaches der Elementgröße des neuen TypedArrays.
    - `byteOffset` ist kein gültiger Arrayindex (eine ganze Zahl zwischen 0 und 2<sup>53</sup> - 1).
    - Beim Erstellen einer Ansicht eines Puffers liegen die Grenzen außerhalb des Puffers. Mit anderen Worten, `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## Statische Eigenschaften

Diese Eigenschaften sind auf dem `TypedArray`-Konstruktorobjekt definiert und werden somit von allen `TypedArray`-Unterklass-Konstruktoren geteilt.

- [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : Die Konstruktionsfunktion, die zur Erstellung abgeleiteter Objekte verwendet wird.

Alle `TypedArray`-Unterklassen haben auch die folgenden statischen Eigenschaften:

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray`-Objekte zurück.

## Statische Methoden

Diese Methoden sind auf dem `TypedArray`-Konstruktorobjekt definiert und werden somit von allen `TypedArray`-Unterklass-Konstruktoren geteilt.

- {{jsxref("TypedArray.from()")}}
  - : Erstellt ein neues `TypedArray` aus einem array-artigen oder iterierbaren Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Erstellt ein neues `TypedArray` mit einer variablen Anzahl von Argumenten. Siehe auch {{jsxref("Array.of()")}}.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `TypedArray.prototype` definiert und werden von allen `TypedArray`-Unterklasse-Instanzen geteilt.

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Gibt den durch das TypedArray referenzierten {{jsxref("ArrayBuffer")}} zurück.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Gibt die Länge (in Bytes) des TypedArrays zurück.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Gibt den Offset (in Bytes) des TypedArrays vom Beginn seines {{jsxref("ArrayBuffer")}} zurück.
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. `TypedArray.prototype.constructor` ist die versteckte `TypedArray`-Konstruktorfunktion, aber jede TypedArray-Unterklasse definiert auch ihre eigene `constructor`-Eigenschaft.
- {{jsxref("TypedArray.prototype.length")}}
  - : Gibt die Anzahl der im TypedArray enthaltenen Elemente zurück.
- `TypedArray.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`TypedArray.prototype[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist ein Getter, der dieselbe Zeichenfolge wie der Name des TypedArray-Konstruktors zurückgibt. Er gibt `undefined` zurück, wenn der `this`-Wert nicht eine der TypedArray-Unterklassen ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `TypedArray` auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString)-Methode hat, wird diese Eigenschaft jedoch nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem TypedArray als `thisArg` auf.

Alle `TypedArray`-Unterklassen haben auch die folgenden Instanz-Eigenschaften:

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray`-Objekte zurück.

## Instanz-Methoden

Diese Methoden sind auf dem `TypedArray`-Prototypobjekt definiert und werden somit von allen `TypedArray`-Unterklasse-Instanzen geteilt.

- {{jsxref("TypedArray.prototype.at()")}}
  - : Nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück. Diese Methode erlaubt negative Ganzzahlen, die ausgehend vom letzten Element zurückzählen.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb des Arrays. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Gibt `false` zurück, wenn es ein Element im Array findet, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls gibt es `true` zurück. Siehe auch {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays von einem Startindex bis zu einem Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen dieses Arrays, für die die bereitgestellte Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Gibt das erste `Element` im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Gibt den ersten Indexwert im Array zurück, der ein Element hat, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Ruft eine Funktion für jedes Element im Array auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Bestimmt, ob ein TypedArray ein bestimmtes Element enthält und gibt `true` oder `false` entsprechend zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Gibt den ersten (niedrigsten) Index eines Elements innerhalb des Arrays zurück, das dem angegebenen Wert entspricht, oder `-1`, wenn keines gefunden wird. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Gibt einen neuen String zurück, der die Verkettung aller Elemente in diesem TypedArray darstellt, getrennt durch Kommata oder einen angegebenen Trennstring. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Gibt einen neuen Array-Iterator zurück, der die Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index eines Elements innerhalb des Arrays zurück, das dem angegebenen Wert entspricht, oder `-1`, wenn keines gefunden wird. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Erstellt ein neues Array mit den Ergebnissen der Aufrufe einer bereitgestellten Funktion für jedes Element in diesem Array. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Wendet eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von links nach rechts) an, um es auf einen Einzelwert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Wendet eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von rechts nach links) an, um es auf einen Einzelwert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays um — das erste wird zum letzten, und das letzte wird zum ersten. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Speichert mehrere Werte im TypedArray und liest Eingabewerte aus einem angegebenen Array.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Gibt `true` zurück, wenn es ein Element im Array findet, das die bereitgestellte Testfunktion erfüllt. Andernfalls gibt es `false` zurück. Siehe auch {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays in-place und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Gibt ein neues `TypedArray` von dem angegebenen Start- und Ende-Elementindex zurück.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Gibt eine lokalisierte Zeichenfolge zurück, die das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toReversed()")}}
  - : Gibt ein neues Array zurück, dessen Elemente in umgekehrter Reihenfolge sind, ohne das Originalarray zu verändern.
- {{jsxref("TypedArray.prototype.toSorted()")}}
  - : Gibt ein neues Array zurück, dessen Elemente in aufsteigender Reihenfolge sortiert sind, ohne das Originalarray zu verändern.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.with()")}}
  - : Gibt ein neues Array mit dem Element am angegebenen Index zurück, das durch den angegebenen Wert ersetzt wird, ohne das Originalarray zu verändern.
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält.

## Beispiele

### Zugriff auf Eigenschaften

Sie können Elemente im Array unter Verwendung der Standard-Array-Indexsyntax ansprechen (d.h. unter Verwendung der Klammernotation). Beim Abrufen oder Setzen indizierter Eigenschaften auf TypedArrays wird jedoch nicht in der Prototypkette nach dieser Eigenschaft gesucht, auch wenn die Indizes außerhalb der Grenzen liegen. Indizierte Eigenschaften verwenden den {{jsxref("ArrayBuffer")}} und berücksichtigen niemals Objekteigenschaften. Sie können jedoch nach wie vor benannte Eigenschaften verwenden, genau wie bei allen Objekten.

```js
// Setting and getting using standard array syntax
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// Indexed properties on prototypes are not consulted (Fx 25)
Int8Array.prototype[20] = "foo";
new Int8Array(32)[20]; // 0
// even when out of bound
Int8Array.prototype[20] = "foo";
new Int8Array(8)[20]; // undefined
// or with negative integers
Int8Array.prototype[-1] = "foo";
new Int8Array(8)[-1]; // undefined

// Named properties are allowed, though (Fx 30)
Int8Array.prototype.foo = "bar";
new Int8Array(32).foo; // "bar"
```

### Kann nicht eingefroren werden

Nicht leere `TypedArray`s können nicht eingefroren werden, da ihr zugrunde liegender `ArrayBuffer` durch eine andere `TypedArray`-Ansicht des Puffers modifiziert werden könnte. Dies würde bedeuten, dass das Objekt niemals wirklich eingefroren wäre.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset muss ausgerichtet sein

Beim Konstruieren eines `TypedArray` als Ansicht auf einen `ArrayBuffer` muss das `byteOffset`-Argument auf seine Elementgröße ausgerichtet sein; mit anderen Worten, der Offset muss ein Vielfaches von `BYTES_PER_ELEMENT` sein.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength muss ausgerichtet sein

Wie der `byteOffset`-Parameter muss die `byteLength`-Eigenschaft eines `ArrayBuffer`, das einem `TypedArray`-Konstruktor übergeben wird, ein Vielfaches von `BYTES_PER_ELEMENT` des Konstruktors sein.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(3));
// RangeError: byte length of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von TypedArrays in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Leitfaden zu JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
