---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Ein **_TypedArray_**-Objekt beschreibt eine array-ähnliche Ansicht eines zugrunde liegenden [binären Datenpuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). Es gibt keine globale Eigenschaft namens `TypedArray` und keinen direkt sichtbaren `TypedArray`-Konstruktor. Stattdessen existieren eine Reihe verschiedener globaler Eigenschaften, deren Werte getypte Array-Konstruktoren für spezifische Elementtypen sind, die unten aufgeführt sind. Auf den folgenden Seiten finden Sie gemeinsame Eigenschaften und Methoden, die mit jedem Typarray verwendet werden können, das Elemente jeglichen Typs enthält.

{{InteractiveExample("JavaScript Demo: TypedArray Constructor")}}

```js interactive-example
// Create a TypedArray with a size in bytes
const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);
// Expected output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]

console.log(typedArray2);
// Expected output: Int8Array [32, 42, 0, 0, 0, 0, 0, 0]
```

## Beschreibung

Der `TypedArray`-Konstruktor (oft als `%TypedArray%` bezeichnet, um seine "intrinsische Natur" anzuzeigen, da er keinem globalen, in einem JavaScript-Programm sichtbaren Objekt entspricht) dient als gemeinsame Oberklasse aller `TypedArray`-Unterklassen. Sehen Sie `%TypedArray%` als eine "abstrakte Klasse", die eine gemeinsame Schnittstelle von Dienstprogrammmethoden für alle Typarray-Unterklassen bereitstellt. Dieser Konstruktor ist nicht direkt zugänglich: Es gibt keine globale `TypedArray`-Eigenschaft. Er ist nur über `Object.getPrototypeOf(Int8Array)` und ähnliches zugänglich.

Beim Erstellen einer Instanz einer `TypedArray`-Unterklasse (z.B. `Int8Array`) wird intern im Speicher ein Array-Puffer erstellt oder, wenn ein `ArrayBuffer`-Objekt als Konstruktorargument angegeben wird, wird stattdessen dieser `ArrayBuffer` verwendet. Die Pufferadresse wird als interne Eigenschaft der Instanz gespeichert und alle Methoden von `%TypedArray%.prototype` setzen und holen Werte basierend auf dieser Array-Pufferadresse.

### TypedArray-Objekte

| Typ                             | Wertebereich                           | Größe in Bytes | Web-IDL-Typ           |
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

### Wertkodierung und Normalisierung

Alle typisierten Arrays arbeiten auf `ArrayBuffer`s, wobei Sie die genaue Byte-Darstellung jedes Elements beobachten können, daher ist es von Bedeutung, wie die Zahlen im binären Format kodiert werden.

- Unsigned Integer-Arrays (`Uint8Array`, `Uint16Array`, `Uint32Array` und `BigUint64Array`) speichern die Zahl direkt im Binärformat.
- Signed Integer-Arrays (`Int8Array`, `Int16Array`, `Int32Array` und `BigInt64Array`) speichern die Zahl unter Verwendung des [Zweierkomplements](https://en.wikipedia.org/wiki/Two's_complement).
- Gleitkomma-Arrays (`Float16Array`, `Float32Array`, und `Float64Array`) speichern die Zahl im [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754)-Gleitkommaformat. Die [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)-Referenz enthält weitere Informationen über das genaue Format. JavaScript-Zahlen verwenden standardmäßig das Gleitkommaformat mit doppelter Genauigkeit, das mit `Float64Array` identisch ist. `Float32Array` verwendet 23 (anstatt 52) Bits für die Mantisse und 8 (anstatt 11) Bits für den Exponenten. `Float16Array` benutzt 10 Bits für die Mantisse und 5 Bits für den Exponenten. Beachten Sie, dass die Spezifikation erfordert, dass alle {{jsxref("NaN")}}-Werte denselben Bitcode verwenden, aber das genaue Bitmuster ist implementationsabhängig.
- `Uint8ClampedArray` ist ein Sonderfall. Es speichert die Zahl im Binärformat wie `Uint8Array`, aber wenn Sie eine Zahl außerhalb des Bereichs speichern, _klammert_ es die Zahl auf den Bereich von 0 bis 255, anstatt die bedeutendsten Bits zu kürzen.

Alle Typarrays außer `Int8Array`, `Uint8Array` und `Uint8ClampedArray` speichern jedes Element mit mehreren Bytes. Diese Bytes können entweder von den bedeutendsten zu den wenigsten bedeutenden (Big-Endian) oder von den wenigsten bedeutenden zu den bedeutendsten (Little-Endian) geordnet werden. Weitere Erklärungen finden Sie unter {{Glossary("Endianness", "Endianness")}}. Typarrays nutzen immer die native Byte-Reihenfolge der Plattform. Wenn Sie die Endianness beim Schreiben und Lesen von Buffern angeben möchten, sollten Sie stattdessen einen {{jsxref("DataView")}} verwenden.

Beim Schreiben in diesen Typarrays werden Werte, die außerhalb des darstellbaren Bereichs liegen, normalisiert.

- Alle Integer-Arrays (außer `Uint8ClampedArray`) verwenden [festbreite Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion), die zuerst den Dezimalteil der Zahl abschneidet und dann die unteren Bits nimmt.
- `Uint8ClampedArray` klemmt zuerst die Zahl auf den Bereich 0 bis 255 (Werte größer als 255 werden zu 255 und Werte kleiner als 0 werden zu 0). Es _rundet_ dann das Ergebnis (anstatt es abzurunden) auf die nächste ganze Zahl mit Halb-zur-gerade-Rundung; das bedeutet, wenn die Zahl genau zwischen zwei ganzen Zahlen liegt, wird sie auf die nächste gerade Zahl gerundet. Beispielsweise wird `0.5` zu `0`, `1.5` zu `2` und `2.5` ebenfalls zu `2`.
- `Float16Array` und `Float32Array` führen ein "Round to Even" durch, um 64-Bit-Gleitpunktzahlen in 32-Bit und 16-Bit zu konvertieren. Dies ist derselbe Algorithmus, wie er durch {{jsxref("Math.fround()")}} und {{jsxref("Math.f16round()")}} bereitgestellt wird.

### Verhalten beim Anzeigen eines anpassbaren Puffers

Wenn ein `TypedArray` als Ansicht eines [anpassbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#resizing_arraybuffers) erstellt wird, hat das Anpassen der Größe des zugrunde liegenden Puffers unterschiedliche Auswirkungen auf die Größe des `TypedArray`, abhängig davon, ob das `TypedArray` als Längen-Tracking konstruiert ist.

Wenn ein Typarray ohne spezifische Größe erstellt wird, indem der dritte Parameter weggelassen oder `undefined` übergeben wird, wird das Typarray _längenverfolgend_ und passt sich automatisch an den zugrunde liegenden `buffer` an, sobald dieser angepasst wird:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

Wenn ein Typarray mit einer spezifischen Größe mit dem dritten `length`-Parameter erstellt wird, wird es nicht neu dimensioniert, um den `buffer` zu enthalten, wenn dieser wächst:

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

Wenn ein `buffer` verkleinert wird, kann das betrachtende Typarray außer Reichweite geraten, in welchem Fall die beobachtete Größe des Typarrays auf 0 abnimmt. Dies ist der einzige Fall, in dem sich die Länge eines nicht längenverfolgenden Typarrays ändern kann.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

Wenn Sie den `buffer` dann wieder vergrößern, um das Typarray wieder in den Geltungsbereich zu bringen, wird die Größe des Typarrays auf seinen ursprünglichen Wert wiederhergestellt.

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - back in bounds again!
```

Dasselbe kann auch für längenverfolgende Typarrays passieren, wenn der Puffer über den `byteOffset` hinaus verkleinert wird.

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

Dieses Objekt kann nicht direkt instanziiert werden — der Versuch, es mit `new` zu konstruieren, wirft eine {{jsxref("TypeError")}}.

```js
new (Object.getPrototypeOf(Int8Array))();
// TypeError: Abstract class TypedArray not directly constructable
```

Stattdessen erstellen Sie eine Instanz eines Typarrays eines bestimmten Typs, wie ein {{jsxref("Int8Array")}} oder ein {{jsxref("BigInt64Array")}}. Diese Objekte haben alle eine gemeinsame Syntax für ihre Konstruktoren:

```js-nolint
new TypedArray()
new TypedArray(length)
new TypedArray(typedArray)
new TypedArray(object)

new TypedArray(buffer)
new TypedArray(buffer, byteOffset)
new TypedArray(buffer, byteOffset, length)
```

Wobei `TypedArray` ein Konstruktor für einen der konkreten Typen ist.

> [!NOTE]
> Alle `TypedArray`-Unterklassenkonstruktoren können nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, einen ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `typedArray`
  - : Wenn mit einer Instanz einer `TypedArray`-Unterklasse aufgerufen, wird der `typedArray` in ein neues Typarray kopiert. Für einen nicht-[BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-`TypedArray`-Konstruktor kann der `typedArray`-Parameter nur einer der nicht-[BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typen sein (wie {{jsxref("Int32Array")}}). Ähnlich kann für einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray`-Konstruktor ({{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}) der `typedArray`-Parameter nur einer der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typen sein. Jeder Wert in `typedArray` wird in den entsprechenden Typ des Konstruktors konvertiert, bevor er in das neue Array kopiert wird. Die Länge des neuen Typarrays wird dieselbe sein wie die Länge des `typedArray`-Arguments.
- `object`
  - : Wenn mit einem Objekt aufgerufen, das keine `TypedArray`-Instanz ist, wird ein neues Typarray auf die gleiche Weise erstellt wie die [`TypedArray.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from)-Methode.
- `length` {{optional_inline}}
  - : Wenn mit einem Nicht-Objekt aufgerufen, wird der Parameter als Zahl behandelt, die die Länge des Typarrays angibt. Ein interner Array-Puffer wird im Speicher erstellt, mit der Größe `length` multipliziert mit [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes, gefüllt mit Nullen. Das Weglassen aller Parameter ist gleichbedeutend mit der Verwendung von `0` als `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : Wenn mit einer [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)- oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)-Instanz und optional einem `byteOffset`- und einem `length`-Argument aufgerufen wird, wird eine neue Typarray-Ansicht erstellt, die den angegebenen Puffer anzeigt. Die `byteOffset` (in Bytes) und `length` (in der Anzahl der Elemente, jedes mit [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes) Parameter spezifizieren den Speicherbereich, der von der Typarrayansicht sichtbar gemacht wird. Wenn beide weggelassen werden, wird der gesamte `buffer` angezeigt; wenn nur `length` weggelassen wird, wird der Rest von `buffer` ab `byteOffset` angezeigt. Wenn `length` weggelassen wird, wird das Typarray [längenverfolgend](#verhalten_beim_anzeigen_eines_anpassbaren_puffers).

### Ausnahmen

Alle `TypeArray`-Unterklassenkonstruktoren funktionieren auf die gleiche Weise. Sie würden alle die folgenden Ausnahmen werfen:

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein `typedArray` wird übergeben, ist jedoch ein [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ, während der aktuelle Konstruktor dies nicht ist, oder umgekehrt.
    - Ein `typedArray` wird übergeben, aber der Puffer, den es anzeigen soll, ist getrennt, oder ein getrenntes `buffer` wird direkt übergeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die Länge des neuen Typarrays ist zu groß.
    - Die Länge von `buffer` (wenn der `length`-Parameter nicht angegeben ist) oder `byteOffset` ist kein ganzzahliges Vielfaches der neuen Typarray-Elementgröße.
    - `byteOffset` ist kein gültiger Array-Index (eine ganze Zahl zwischen 0 und 2<sup>53</sup> - 1).
    - Wenn eine Ansicht von einem Puffer erstellt wird, liegen die Grenzen außerhalb des Puffers. Mit anderen Worten, `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## Statische Eigenschaften

Diese Eigenschaften sind auf dem `TypedArray`-Konstruktorobjekt definiert und werden daher von allen `TypedArray`-Unterklassenkonstruktoren geteilt.

- [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : Die Konstruktorfunktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

Alle `TypedArray`-Unterklassen haben auch die folgenden statischen Eigenschaften:

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray`-Objekte zurück.

## Statische Methoden

Diese Methoden sind auf dem `TypedArray`-Konstruktorobjekt definiert und werden daher von allen `TypedArray`-Unterklassenkonstruktoren geteilt.

- {{jsxref("TypedArray.from()")}}
  - : Erstellt ein neues `TypedArray` aus einem array-ähnlichen oder iterierbaren Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Erstellt ein neues `TypedArray` mit einer variablen Anzahl von Argumenten. Siehe auch {{jsxref("Array.of()")}}.

## Instanzeigenschaften

Diese Eigenschaften sind auf `TypedArray.prototype` definiert und werden von allen `TypedArray`-Unterklasseninstanzen geteilt.

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Gibt den {{jsxref("ArrayBuffer")}} zurück, der vom Typarray referenziert wird.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Gibt die Länge (in Bytes) des Typarrays zurück.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Gibt den Versatz (in Bytes) des Typarrays vom Anfang seines {{jsxref("ArrayBuffer")}} zurück.
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. `TypedArray.prototype.constructor` ist die versteckte `TypedArray`-Konstruktorfunktion, aber jede Typarray-Unterklasse definiert auch ihre eigene `constructor`-Eigenschaft.
- {{jsxref("TypedArray.prototype.length")}}
  - : Gibt die Anzahl der Elemente zurück, die im Typarray gehalten werden.
- `TypedArray.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`TypedArray.prototype[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist ein Getter, der dieselbe Zeichenfolge wie der Name des Typarray-Konstruktors zurückgibt. Er gibt `undefined` zurück, wenn der `this`-Wert nicht eine der Typarray-Unterklassen ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `TypedArray` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Typarray als `thisArg` auf.

Alle `TypedArray`-Unterklassen haben auch die folgenden Instanzeigenschaften:

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray`-Objekte zurück.

## Instanzmethoden

Diese Methoden sind auf dem `TypedArray`-Prototypobjekt definiert und werden daher von allen `TypedArray`-Unterklasseninstanzen geteilt.

- {{jsxref("TypedArray.prototype.at()")}}
  - : Nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück. Diese Methode ermöglicht negative Ganzzahlen, die rückwärts vom letzten Element zählen.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb des Arrays. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Testet, ob alle Elemente im Array den Test bestehen, der von einer Funktion bereitgestellt wird. Siehe auch {{jsxref("Array.prototype.every()")}}.
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
  - : Bestimmt, ob ein Typarray ein bestimmtes Element enthält, und gibt `true` oder `false` entsprechend zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Gibt den ersten (kleinsten) Index eines Elements innerhalb des Arrays zurück, der dem angegebenen Wert entspricht, oder `-1`, wenn keiner gefunden wird. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Fügt alle Elemente eines Arrays zu einer Zeichenfolge zusammen. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Gibt einen neuen Array-Iterator zurück, der die Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index eines Elements innerhalb des Arrays zurück, der dem angegebenen Wert entspricht, oder `-1`, wenn keiner gefunden wird. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Erstellt ein neues Array mit den Ergebnissen des Aufrufs einer bereitgestellten Funktion für jedes Element in diesem Array. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Wendet eine Funktion auf einen Akkumulator und jeden Wert des Arrays (von links nach rechts) an, um ihn auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Wendet eine Funktion auf einen Akkumulator und jeden Wert des Arrays (von rechts nach links) an, um ihn auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays um — das erste wird das letzte und das letzte wird das erste. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Speichert mehrere Werte im Typarray und liest Eingabewerte aus einem angegebenen Array.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Gibt `true` zurück, wenn mindestens ein Element in diesem Array die bereitgestellte Testfunktion erfüllt. Siehe auch {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays vor Ort und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Gibt ein neues `TypedArray` von dem angegebenen Start- und Endelementindex zurück.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Gibt eine lokalisierte Zeichenfolge zurück, die das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den in umgekehrter Reihenfolge befindlichen Elementen zurück, ohne das Originalarray zu ändern.
- {{jsxref("TypedArray.prototype.toSorted()")}}
  - : Gibt ein neues Array zurück, dessen Elemente in aufsteigender Reihenfolge sortiert sind, ohne das Originalarray zu ändern.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.with()")}}
  - : Gibt ein neues Array zurück, bei dem das Element an dem angegebenen Index durch den angegebenen Wert ersetzt wird, ohne das Originalarray zu ändern.
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält.

## Beispiele

### Zugriff auf Eigenschaften

Sie können auf Elemente im Array mit der Standard-Array-Index-Syntax (d.h. durch Klammernnotation) zugreifen. Beim Abrufen oder Setzen von indizierten Eigenschaften auf Typarrays wird jedoch nicht in der Prototypenkette nach dieser Eigenschaft gesucht, auch wenn die Indizes außerhalb des Bereichs liegen. Indizierte Eigenschaften konsultieren den {{jsxref("ArrayBuffer")}} und schauen niemals auf Objekteigenschaften. Sie können immer noch benannte Eigenschaften verwenden, wie bei allen Objekten.

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

`TypedArray`s, die nicht leer sind, können nicht eingefroren werden, da ihr zugrunde liegender `ArrayBuffer` durch eine andere `TypedArray`-Ansicht des Puffers verändert werden könnte. Dies würde bedeuten, dass das Objekt niemals wirklich eingefroren wird.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset muss ausgerichtet sein

Beim Erstellen eines `TypedArray` als Ansicht auf einen `ArrayBuffer` muss das `byteOffset`-Argument auf die Elementgröße ausgerichtet sein; mit anderen Worten, der Versatz muss ein Vielfaches von `BYTES_PER_ELEMENT` sein.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength muss ausgerichtet sein

Wie der `byteOffset`-Parameter muss auch die `byteLength`-Eigenschaft eines `ArrayBuffer`, der an einen `TypedArray`-Konstruktor übergeben wird, ein Vielfaches des `BYTES_PER_ELEMENT`-Konstruktors sein.

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

- [Polyfill von Typarrays in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript-Typarrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
