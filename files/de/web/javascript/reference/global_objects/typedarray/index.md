---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Ein **_TypedArray_**-Objekt beschreibt eine array-ähnliche Ansicht eines zugrundeliegenden [binären Datenpuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). Es gibt keine globale Eigenschaft namens `TypedArray`, noch gibt es einen direkt sichtbaren `TypedArray`-Konstruktor. Stattdessen gibt es eine Reihe von unterschiedlichen globalen Eigenschaften, deren Werte getypte Array-Konstruktoren für spezifische Elementtypen sind, die unten aufgeführt sind. Auf den folgenden Seiten finden Sie allgemeine Eigenschaften und Methoden, die mit jedem getypten Array verwendet werden können, das Elemente irgendeines Typs enthält.

## Beschreibung

Der `TypedArray`-Konstruktor (oft als `%TypedArray%` bezeichnet, um seine "intrinsische" Natur zu kennzeichnen, da er keiner globalen, in einem JavaScript-Programm sichtbaren Entität entspricht) dient als gemeinsame Superklasse aller `TypedArray`-Subklassen. Stellen Sie sich `%TypedArray%` als eine "abstrakte Klasse" vor, die eine gemeinsame Schnittstelle von Dienstprogrammmethoden für alle getypten Array-Subklassen bereitstellt. Dieser Konstruktor ist nicht direkt zugänglich: Es gibt keine globale `TypedArray`-Eigenschaft. Er ist nur über `Object.getPrototypeOf(Int8Array)` und ähnliches zugänglich.

Wenn eine Instanz einer `TypedArray`-Subklasse erstellt wird (z.B. `Int8Array`), wird intern im Speicher ein Array-Puffer erstellt oder, wenn ein `ArrayBuffer`-Objekt als Konstruktorargument angegeben wird, wird dieser `ArrayBuffer` stattdessen verwendet. Die Pufferadresse wird als interne Eigenschaft der Instanz gespeichert und alle Methoden von `%TypedArray%.prototype` setzen und holen Werte basierend auf dieser Array-Pufferadresse.

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
| {{jsxref("Float16Array")}}      | `-65504` bis `65504`                   | 2              | N/V                   |
| {{jsxref("Float32Array")}}      | `-3.4e38` bis `3.4e38`                 | 4              | `unrestricted float`  |
| {{jsxref("Float64Array")}}      | `-1.8e308` bis `1.8e308`               | 8              | `unrestricted double` |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> bis 2<sup>63</sup> - 1 | 8              | `bigint`              |
| {{jsxref("BigUint64Array")}}    | 0 bis 2<sup>64</sup> - 1               | 8              | `bigint`              |

### Wertkodierung und Normalisierung

Alle getypten Arrays arbeiten mit `ArrayBuffer`s, bei denen man die genaue Byte-Repräsentation jedes Elements beobachten kann, sodass es wichtig ist, wie die Zahlen im Binärformat kodiert sind.

- Ungesigned Integer Arrays (`Uint8Array`, `Uint16Array`, `Uint32Array`, und `BigUint64Array`) speichern die Nummer direkt im Binärformat.
- Signed Integer Arrays (`Int8Array`, `Int16Array`, `Int32Array`, und `BigInt64Array`) speichern die Nummer unter Verwendung von [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement).
- Fließkomma Arrays (`Float16Array`, `Float32Array`, und `Float64Array`) speichern die Nummer unter Verwendung des [IEEE 754](https://de.wikipedia.org/wiki/IEEE_754) Fließkommaformats. Die [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) Referenz enthält weitere Informationen über das exakte Format. JavaScript-Zahlen verwenden standardmäßig das Fließkommaformat mit doppelter Genauigkeit, was dem `Float64Array` entspricht. `Float32Array` verwendet 23 (anstatt 52) Bits für die Mantisse und 8 (anstatt 11) Bits für den Exponenten. `Float16Array` verwendet 10 Bits für die Mantisse und 5 Bits für den Exponenten. Beachten Sie, dass die Spezifikation vorschreibt, dass alle {{jsxref("NaN")}}-Werte die gleiche Bitkodierung verwenden müssen, das genaue Bitmuster jedoch implementierungsabhängig ist.
- `Uint8ClampedArray` ist ein Sonderfall. Es speichert die Nummer binär wie `Uint8Array`, aber wenn Sie eine Zahl außerhalb des Bereichs speichern, wird die Nummer auf den Bereich von 0 bis 255 durch mathematischen Wert _geklammert_, anstatt die bedeutendsten Bits abzutrennen.

Alle getypten Arrays außer `Int8Array`, `Uint8Array` und `Uint8ClampedArray` speichern jedes Element unter Verwendung mehrerer Bytes. Diese Bytes können entweder vom bedeutendsten zum wenigstbedeutendsten (big-endian) oder vom wenigstbedeutendsten zum bedeutendsten (little-endian) geordnet sein. Siehe {{Glossary("Endianness", "Endianness")}} für mehr Erklärung. Getypte Arrays verwenden immer die native Byte-Reihenfolge der Plattform. Wenn Sie die Byte-Reihenfolge beim Schreiben und Lesen von Puffern angeben möchten, sollten Sie stattdessen ein {{jsxref("DataView")}} verwenden.

Beim Schreiben in diese getypten Arrays werden Werte, die außerhalb des darstellbaren Bereichs liegen, normalisiert.

- Alle Integer-Arrays (außer `Uint8ClampedArray`) verwenden [Fixed-Width Number Conversion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion), die zunächst den Dezimalteil der Nummer löscht und dann die niedrigsten Bits nimmt.
- `Uint8ClampedArray` klammert die Nummer zunächst auf den Bereich 0 bis 255 (Werte größer als 255 werden zu 255, und Werte kleiner als 0 werden zu 0). Anschließend wird das Ergebnis _gerundet_ (anstatt es abzurunden) auf die nächste ganze Zahl, mit half-to-even; das bedeutet, wenn die Zahl genau zwischen zwei ganzen Zahlen liegt, rundet sie auf die nächste gerade ganze Zahl. Zum Beispiel wird `0.5` zu `0`, `1.5` zu `2`, und `2.5` zu `2`.
- `Float16Array` und `Float32Array` führen ein "round to even" durch, um 64-Bit Fließkommazahlen in 32-Bit und 16-Bit zu konvertieren. Dies ist der gleiche Algorithmus, wie er von {{jsxref("Math.fround()")}} und {{jsxref("Math.f16round()")}} bereitgestellt wird.

### Verhalten beim Betrachten eines skalierbaren Puffers

Wenn ein `TypedArray` als Ansicht eines [skalierbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#resizing_arraybuffers) erstellt wird, hat das Verändern der Größe des zugrundeliegenden Puffers unterschiedliche Auswirkungen auf die Größe des `TypedArray`, abhängig davon, ob das `TypedArray` als längenverfolgend konstruiert wurde.

Wenn ein getyptes Array ohne spezifische Größe erstellt wird, indem der dritte Parameter weggelassen oder `undefined` übergeben wird, wird das getypte Array _längenverfolgend_ und passt sich automatisch an den zugrunde liegenden `buffer` an, wenn dieser vergrößert wird:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

Wenn ein getyptes Array mit einer bestimmten Größe unter Verwendung des dritten `length`-Parameters erstellt wird, wird es nicht vergrößert, um den `buffer` zu enthalten, wenn letzterer wächst:

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

Wenn ein `buffer` verkleinert wird, kann das anzeigende getypte Array außer Grenzen geraten, in welchem Fall die beobachtete Größe des typisierten Arrays auf 0 abnimmt. Dies ist der einzige Fall, in dem sich die Länge eines nicht längenverfolgenden getypten Arrays ändern kann.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

Wenn Sie dann den `buffer` erneut vergrößern, um das getypte Array wieder in Reichweite zu bringen, wird die Größe des typisierten Arrays auf den ursprünglichen Wert wiederhergestellt.

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - back in bounds again!
```

Das gleiche kann auch für längenverfolgende getypte Arrays passieren, wenn der Buffer über den `byteOffset` hinaus verkleinert wird.

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

Dieses Objekt kann nicht direkt instanziiert werden — ein Konstrukt mit `new` auszuführen, wirft einen {{jsxref("TypeError")}}.

```js
new (Object.getPrototypeOf(Int8Array))();
// TypeError: Abstract class TypedArray not directly constructable
```

Stattdessen erstellen Sie eine Instanz eines typisierten Arrays eines bestimmten Typs, wie ein {{jsxref("Int8Array")}} oder ein {{jsxref("BigInt64Array")}}. Diese Objekte haben alle eine gemeinsame Syntax für ihre Konstruktoren:

```js-nolint
new TypedArray()
new TypedArray(length)
new TypedArray(typedArray)
new TypedArray(object)

new TypedArray(buffer)
new TypedArray(buffer, byteOffset)
new TypedArray(buffer, byteOffset, length)
```

Dabei ist `TypedArray` ein Konstruktor für einen der konkreten Typen.

> [!NOTE]
> Alle Konstruktoren von `TypedArray`-Unterklassen können nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, einen ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `typedArray`
  - : Wenn mit einer Instanz einer `TypedArray`-Unterklasse aufgerufen, wird das `typedArray` in ein neues typisiertes Array kopiert. Für einen nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray`-Konstruktor kann der `typedArray`-Parameter nur von einem der nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen (wie {{jsxref("Int32Array")}}) sein. Ebenso kann für einen [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray`-Konstruktor ({{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}) der `typedArray`-Parameter nur von einem der [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen sein. Jeder Wert in `typedArray` wird vor dem Kopieren in das neue Array in den entsprechenden Typ des Konstruktors konvertiert. Die Länge des neuen typisierten Arrays wird die gleiche sein wie die Länge des `typedArray`-Arguments.
- `object`
  - : Wenn mit einem Objekt aufgerufen, das keine Instanz von `TypedArray` ist, wird ein neues typisiertes Array genauso erstellt wie mit der Methode [`TypedArray.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from).
- `length` {{optional_inline}}
  - : Wenn mit einem Nicht-Objekt aufgerufen, wird der Parameter als Zahl behandelt, die die Länge des typisierten Arrays angibt. Ein interner Array-Puffer wird im Speicher erstellt, dessen Größe `length` multipliziert mit [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes beträgt und mit Nullen gefüllt wird. Wenn alle Parameter weggelassen werden, ist dies gleichbedeutend mit der Verwendung von `0` als `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : Wenn mit einer Instanz von [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) und optional einem `byteOffset` und einem `length` Argument aufgerufen, wird eine neue typisierte Array-Ansicht erstellt, die den angegebenen Puffer betrachtet. Die `byteOffset` (in Bytes) und `length` (in Anzahl der Elemente, die jeweils [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes belegen) Parameter spezifizieren den Speicherbereich, der durch die typisierte Array-Ansicht freigelegt wird. Wenn beide weggelassen werden, wird der gesamte `buffer` betrachtet; wenn nur `length` weggelassen wird, wird der Rest des `buffer` ab dem `byteOffset` betrachtet. Wenn `length` weggelassen wird, wird das typisierte Array [längenverfolgend](#verhalten_beim_betrachten_eines_skalierbaren_puffers).

### Ausnahmen

Alle `TypedArray`-Subklassenkonstruktoren arbeiten auf die gleiche Weise. Sie alle würden die folgenden Ausnahmen auslösen:

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein `typedArray` wird übergeben, aber es ist ein [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typ, während der aktuelle Konstruktor nicht, oder umgekehrt.
    - Ein `typedArray` wird übergeben, aber der Puffer, den es betrachtet, ist getrennt, oder ein getrennter `buffer` wird direkt übergeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die Länge des neuen typisierten Arrays ist zu groß.
    - Die Länge des `buffer` (wenn der `length` Parameter nicht angegeben ist) oder `byteOffset` ist kein ganzzahliges Vielfaches der Elementgröße des neuen typisierten Arrays.
    - `byteOffset` ist kein gültiger Array-Index (eine Ganzzahl zwischen 0 und 2<sup>53</sup> - 1).
    - Beim Erstellen einer Ansicht aus einem Puffer befinden sich die Grenzen außerhalb des Puffers. Mit anderen Worten, `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## Statische Eigenschaften

Diese Eigenschaften sind auf dem `TypedArray`-Konstruktorobjekt definiert und werden somit von allen `TypedArray`-Subklassenkonstruktoren gemeinsam genutzt.

- [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : Die Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

Alle `TypedArray`-Subklassen haben auch die folgenden statischen Eigenschaften:

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray`-Objekte zurück.

## Statische Methoden

Diese Methoden sind auf dem `TypedArray`-Konstruktorobjekt definiert und werden somit von allen `TypedArray`-Subklassenkonstruktoren gemeinsam genutzt.

- {{jsxref("TypedArray.from()")}}
  - : Erstellt ein neues `TypedArray` aus einem array-ähnlichen oder iterierbaren Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Erstellt ein neues `TypedArray` mit einer variablen Anzahl von Argumenten. Siehe auch {{jsxref("Array.of()")}}.

## Instanz Eigenschaften

Diese Eigenschaften sind auf `TypedArray.prototype` definiert und werden von allen `TypedArray`-Subklasseninstanzen gemeinsam genutzt.

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Gibt den {{jsxref("ArrayBuffer")}} zurück, der durch das typisierte Array referenziert wird.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Gibt die Länge (in Bytes) des typisierten Arrays zurück.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Gibt den Offset (in Bytes) des typisierten Arrays vom Anfang seines {{jsxref("ArrayBuffer")}} zurück.
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. `TypedArray.prototype.constructor` ist die versteckte `TypedArray`-Konstruktorfunktion, aber jede getypte Array-Subklasse definiert auch ihre eigene `constructor`-Eigenschaft.
- {{jsxref("TypedArray.prototype.length")}}
  - : Gibt die Anzahl der im typisierten Array gehaltenen Elemente zurück.
- `TypedArray.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`TypedArray.prototype[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist ein Getter, der dieselbe Zeichenkette wie der Name des typisierten Array-Konstruktors zurückgibt. Er gibt `undefined` zurück, wenn der Wert von `this` nicht eine der typisierten Array-Unterklassen ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `TypedArray` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString) Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem typisierten Array als `thisArg` auf.

Alle `TypedArray`-Subklassen haben auch die folgenden Instanzeigenschaften:

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray`-Objekte zurück.

## Instanz Methoden

Diese Methoden sind auf dem `TypedArray` Prototype-Objekt definiert und werden somit von allen `TypedArray` Subklasseninstanzen gemeinsam genutzt.

- {{jsxref("TypedArray.prototype.at()")}}
  - : Nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück. Diese Methode erlaubt negative Ganzzahlen, die ab dem letzten Element zählen.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb des Arrays. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Prüft, ob alle Elemente im Array den durch eine Funktion bereitgestellten Test bestehen. Siehe auch {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays von einem Startindex bis zu einem Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen dieses Arrays, für die die bereitgestellte Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Gibt das erste `Element` im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Gibt den ersten Indexwert im Array zurück, der ein Element hat, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Ruft eine Funktion für jedes Element im Array auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Bestimmt, ob ein typisiertes Array ein bestimmtes Element beinhaltet und gibt dementsprechend `true` oder `false` zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Gibt den ersten (kleinsten) Index eines Elements innerhalb des Arrays zurück, der dem angegebenen Wert entspricht, oder `-1`, wenn keiner gefunden wurde. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Verbindet alle Elemente eines Arrays zu einem String. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Gibt einen neuen Array-Iterator zurück, der die Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index eines Elements innerhalb des Arrays zurück, das dem angegebenen Wert entspricht, oder `-1`, wenn keiner gefunden wurde. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Erstellt ein neues Array mit den Ergebnissen des Aufrufs einer bereitgestellten Funktion bei jedem Element in diesem Array. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Wendet eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von links nach rechts) an, um ihn auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Wendet eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von rechts nach links) an, um ihn auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays um - das erste wird zum letzten, und das letzte wird zum ersten. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Speichert mehrere Werte im typisierten Array, indem Werte aus einem angegebenen Array gelesen werden.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Gibt `true` zurück, wenn mindestens ein Element in diesem Array die bereitgestellte Testfunktion erfüllt. Siehe auch {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays an Ort und Stelle und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Gibt ein neues `TypedArray` aus dem gegebenen Start- und Endindex der Elemente zurück.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Gibt eine lokalisierte Zeichenfolge zurück, die das Array und seine Elemente repräsentiert. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das Original-Array zu ändern.
- {{jsxref("TypedArray.prototype.toSorted()")}}
  - : Gibt ein neues Array mit den sortierten Elementen in aufsteigender Reihenfolge zurück, ohne das Original-Array zu ändern.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die das Array und seine Elemente repräsentiert. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.with()")}}
  - : Gibt ein neues Array zurück, bei dem das Element am angegebenen Index durch den angegebenen Wert ersetzt wird, ohne das Original-Array zu ändern.
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält.

## Beispiele

### Eigenschaftszugriff

Sie können Elemente im Array mit der Standard-Syntax des Array-Indizes referenzieren (d.h. unter Verwendung der Klammernotation). Allerdings, das Abrufen oder Setzen von indizierten Eigenschaften auf typisierten Arrays wird nicht in der Prototypenkette nach dieser Eigenschaft suchen, selbst wenn die Indizes außer Reichweite sind. Indizierte Eigenschaften werden den {{jsxref("ArrayBuffer")}} konsultieren und niemals auf Objekteigenschaften schauen. Sie können nach wie vor benannte Eigenschaften verwenden, genau wie bei allen Objekten.

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

`TypedArray`s, die nicht leer sind, können nicht eingefroren werden, da ihr zugrunde liegender `ArrayBuffer` durch eine andere `TypedArray`-Ansicht des Puffers verändert werden könnte. Das würde bedeuten, dass das Objekt niemals wirklich eingefroren wäre.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset muss ausgerichtet sein

Beim Konstruieren eines `TypedArray` als Ansicht auf einen `ArrayBuffer` muss das `byteOffset`-Argument an die Elementgröße angepasst sein; mit anderen Worten, der Offset muss ein Vielfaches von `BYTES_PER_ELEMENT` sein.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength muss ausgerichtet sein

Wie der `byteOffset`-Parameter muss die `byteLength`-Eigenschaft eines `ArrayBuffer`, das an einen `TypedArray`-Konstruktor übergeben wird, ein Vielfaches des `BYTES_PER_ELEMENT` des Konstruktors sein.

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

- [Polyfill von typisierten Arrays in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
