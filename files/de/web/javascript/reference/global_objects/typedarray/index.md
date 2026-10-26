---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Ein **_TypedArray_**-Objekt beschreibt eine Array-ähnliche Ansicht auf einen zugrunde liegenden [Puffer für Binärdaten](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). Es gibt weder eine globale Eigenschaft namens `TypedArray` noch einen direkt sichtbaren `TypedArray`-Konstruktor. Stattdessen gibt es mehrere globale Eigenschaften, deren Werte Konstruktoren für typisierte Arrays mit bestimmten Elementtypen sind. Diese sind unten aufgeführt. Auf den folgenden Seiten finden Sie gemeinsame Eigenschaften und Methoden, die mit jedem typisierten Array verwendet werden können, unabhängig vom Typ seiner Elemente.

## Beschreibung

Der `TypedArray`-Konstruktor (oft als `%TypedArray%` bezeichnet, um deutlich zu machen, dass es sich um ein intrinsisches Objekt handelt, da ihm keine für ein JavaScript-Programm zugängliche globale Eigenschaft entspricht) ist die gemeinsame Oberklasse aller `TypedArray`-Unterklassen. Sie können sich `%TypedArray%` als „abstrakte Klasse“ vorstellen, die allen Unterklassen typisierter Arrays eine gemeinsame Schnittstelle mit Hilfsmethoden bereitstellt. Dieser Konstruktor ist nicht direkt zugänglich: Es gibt keine globale `TypedArray`-Eigenschaft. Er ist nur über `Object.getPrototypeOf(Int8Array)` und ähnliche Aufrufe erreichbar.

Wenn eine Instanz einer `TypedArray`-Unterklasse (z. B. `Int8Array`) erstellt wird, wird intern ein Array-Puffer im Speicher angelegt. Wird dem Konstruktor ein `ArrayBuffer`-Objekt als Argument übergeben, wird stattdessen dieses verwendet. Die Adresse des Puffers wird als interne Eigenschaft der Instanz gespeichert. Alle Methoden von `%TypedArray%.prototype` setzen und lesen Werte anhand dieser Adresse.

### TypedArray-Objekte

| Typ                             | Wertebereich                           | Größe in Byte | Web-IDL-Typ           |
| ------------------------------- | -------------------------------------- | ------------- | --------------------- |
| {{jsxref("Int8Array")}}         | -128 bis 127                           | 1             | `byte`                |
| {{jsxref("Uint8Array")}}        | 0 bis 255                              | 1             | `octet`               |
| {{jsxref("Uint8ClampedArray")}} | 0 bis 255                              | 1             | `octet`               |
| {{jsxref("Int16Array")}}        | -32768 bis 32767                       | 2             | `short`               |
| {{jsxref("Uint16Array")}}       | 0 bis 65535                            | 2             | `unsigned short`      |
| {{jsxref("Int32Array")}}        | -2147483648 bis 2147483647             | 4             | `long`                |
| {{jsxref("Uint32Array")}}       | 0 bis 4294967295                       | 4             | `unsigned long`       |
| {{jsxref("Float16Array")}}      | `-65504` bis `65504`                   | 2             | N/A                   |
| {{jsxref("Float32Array")}}      | `-3.4e38` bis `3.4e38`                 | 4             | `unrestricted float`  |
| {{jsxref("Float64Array")}}      | `-1.8e308` bis `1.8e308`               | 8             | `unrestricted double` |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> bis 2<sup>63</sup> - 1 | 8             | `bigint`              |
| {{jsxref("BigUint64Array")}}    | 0 bis 2<sup>64</sup> - 1               | 8             | `bigint`              |

### Kodierung und Normalisierung von Werten

Alle typisierten Arrays arbeiten mit `ArrayBuffer`-Objekten, in denen Sie die genaue Byte-Darstellung jedes Elements einsehen können. Daher ist es wichtig, wie die Zahlen im Binärformat kodiert werden.

- Arrays vorzeichenloser Ganzzahlen (`Uint8Array`, `Uint16Array`, `Uint32Array` und `BigUint64Array`) speichern die Zahl direkt im Binärformat.
- Arrays vorzeichenbehafteter Ganzzahlen (`Int8Array`, `Int16Array`, `Int32Array` und `BigInt64Array`) speichern die Zahl im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement).
- Gleitkomma-Arrays (`Float16Array`, `Float32Array` und `Float64Array`) speichern die Zahl im Gleitkommaformat nach [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754). Die Referenz zu [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) enthält weitere Informationen zum genauen Format. JavaScript-Zahlen verwenden standardmäßig das Gleitkommaformat mit doppelter Genauigkeit, also dasselbe Format wie `Float64Array`. `Float32Array` verwendet 23 (statt 52) Bit für die Mantisse und 8 (statt 11) Bit für den Exponenten. `Float16Array` verwendet 10 Bit für die Mantisse und 5 Bit für den Exponenten. Beachten Sie, dass die Spezifikation für alle {{jsxref("NaN")}}-Werte dieselbe Bitkodierung vorschreibt, das genaue Bitmuster jedoch von der Implementierung abhängt.
- `Uint8ClampedArray` ist ein Sonderfall. Es speichert Zahlen wie `Uint8Array` im Binärformat. Wenn Sie jedoch eine Zahl außerhalb des Wertebereichs speichern, wird sie anhand ihres mathematischen Werts auf den Bereich von 0 bis 255 _begrenzt_, anstatt die höchstwertigen Bits abzuschneiden.

Mit Ausnahme von `Int8Array`, `Uint8Array` und `Uint8ClampedArray` speichern alle typisierten Arrays jedes Element in mehreren Bytes. Diese Bytes können entweder vom höchstwertigen zum niedrigstwertigen Byte (Big-Endian) oder vom niedrigstwertigen zum höchstwertigen Byte (Little-Endian) angeordnet sein. Weitere Erläuterungen finden Sie unter {{Glossary("Endianness", "Byte-Reihenfolge")}}. Typisierte Arrays verwenden immer die native Byte-Reihenfolge der Plattform. Wenn Sie die Byte-Reihenfolge beim Schreiben in und Lesen aus Puffern festlegen möchten, sollten Sie stattdessen {{jsxref("DataView")}} verwenden.

Beim Schreiben in diese typisierten Arrays werden Werte außerhalb des darstellbaren Bereichs normalisiert.

- Alle Ganzzahl-Arrays (außer `Uint8ClampedArray`) verwenden die [Konvertierung in eine Zahl mit fester Bitbreite](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion). Dabei wird zunächst der Nachkommateil der Zahl abgeschnitten; anschließend werden die niederwertigsten Bits übernommen.
- `Uint8ClampedArray` begrenzt die Zahl zunächst auf den Bereich von 0 bis 255 (Werte über 255 werden zu 255, Werte unter 0 zu 0). Anschließend wird das Ergebnis auf die nächstgelegene Ganzzahl _gerundet_ (statt abgerundet). Dabei gilt die Rundung zur nächsten geraden Zahl: Liegt die Zahl genau zwischen zwei Ganzzahlen, wird zur nächsten geraden Ganzzahl gerundet. Beispielsweise wird `0.5` zu `0`, `1.5` zu `2` und `2.5` zu `2`.
- `Float16Array` und `Float32Array` verwenden beim Umwandeln von 64-Bit-Gleitkommazahlen in 32-Bit- bzw. 16-Bit-Gleitkommazahlen die Rundung zur nächsten geraden Zahl. Dies ist derselbe Algorithmus, den {{jsxref("Math.fround()")}} und {{jsxref("Math.f16round()")}} verwenden.

### Verhalten bei der Ansicht eines größenveränderbaren Puffers

Wenn ein `TypedArray` als Ansicht auf einen [größenveränderbaren Puffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#resizing_arraybuffers) erstellt wird, wirkt sich eine Größenänderung des zugrunde liegenden Puffers unterschiedlich auf die Größe des `TypedArray` aus – je nachdem, ob das `TypedArray` so konstruiert wurde, dass seine Länge der Puffergröße folgt.

Wird ein typisiertes Array ohne feste Größe erstellt, indem der dritte Parameter weggelassen oder `undefined` übergeben wird, folgt seine Länge der Puffergröße. Es passt seine Größe automatisch an, wenn sich die Größe des zugrunde liegenden `buffer` ändert:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

Wird ein typisiertes Array mithilfe des dritten Parameters `length` mit einer festen Größe erstellt, vergrößert es sich nicht mit dem `buffer`:

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

Wenn ein `buffer` verkleinert wird, kann das typisierte Array, das ihn anzeigt, außerhalb der Puffergrenzen liegen. In diesem Fall sinkt die beobachtete Größe des typisierten Arrays auf 0. Dies ist der einzige Fall, in dem sich die Länge eines typisierten Arrays mit fester Länge ändern kann.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

Wenn Sie den `buffer` anschließend wieder so vergrößern, dass das typisierte Array innerhalb der Puffergrenzen liegt, wird dessen ursprüngliche Größe wiederhergestellt.

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - back in bounds again!
```

Dasselbe kann auch bei typisierten Arrays geschehen, deren Länge der Puffergröße folgt, wenn der Puffer so weit verkleinert wird, dass er nicht mehr bis zum `byteOffset` reicht.

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

Dieses Objekt kann nicht direkt instanziiert werden – der Versuch, es mit `new` zu konstruieren, löst einen {{jsxref("TypeError")}} aus.

```js
new (Object.getPrototypeOf(Int8Array))();
// TypeError: Abstract class TypedArray not directly constructable
```

Stattdessen erstellen Sie eine Instanz eines typisierten Arrays eines bestimmten Typs, beispielsweise ein {{jsxref("Int8Array")}} oder ein {{jsxref("BigInt64Array")}}. Die Konstruktoren all dieser Objekte haben dieselbe Syntax:

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
> Die Konstruktoren aller `TypedArray`-Unterklassen können nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `typedArray`
  - : Wird der Konstruktor mit einer Instanz einer `TypedArray`-Unterklasse aufgerufen, wird `typedArray` in ein neues typisiertes Array kopiert. Bei einem `TypedArray`-Konstruktor für einen Typ ohne [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) kann der Parameter `typedArray` nur einen Typ ohne [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) haben (beispielsweise {{jsxref("Int32Array")}}). Entsprechend kann der Parameter `typedArray` bei einem `TypedArray`-Konstruktor für einen [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ ({{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}) nur einen [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ haben. Jeder Wert in `typedArray` wird vor dem Kopieren in das neue Array in den entsprechenden Typ des Konstruktors umgewandelt. Das neue typisierte Array hat dieselbe Länge wie das Argument `typedArray`.
- `object`
  - : Wird der Konstruktor mit einem Objekt aufgerufen, das keine `TypedArray`-Instanz ist, wird ein neues typisiertes Array auf dieselbe Weise wie mit der Methode [`TypedArray.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from) erstellt.
- `length` {{optional_inline}}
  - : Wird der Konstruktor mit einem Wert aufgerufen, der kein Objekt ist, wird der Parameter als Zahl behandelt, die die Länge des typisierten Arrays angibt. Intern wird im Speicher ein mit Nullen gefüllter Array-Puffer angelegt, dessen Größe `length` multipliziert mit [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Byte beträgt. Werden alle Parameter weggelassen, entspricht dies dem Wert `0` für `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : Wird der Konstruktor mit einer Instanz von [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) sowie optional mit den Argumenten `byteOffset` und `length` aufgerufen, wird eine neue Ansicht auf den angegebenen Puffer erstellt. Die Parameter `byteOffset` (in Byte) und `length` (als Anzahl der Elemente, die jeweils [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Byte belegen) bestimmen den Speicherbereich, den die Ansicht des typisierten Arrays zugänglich macht. Werden beide weggelassen, wird der gesamte `buffer` angezeigt. Wird nur `length` weggelassen, wird der Rest von `buffer` ab `byteOffset` angezeigt. Wird `length` weggelassen, [folgt die Länge des typisierten Arrays der Puffergröße](#verhalten_bei_der_ansicht_eines_größenveränderbaren_puffers).

### Ausnahmen

Die Konstruktoren aller `TypeArray`-Unterklassen verhalten sich gleich. Sie lösen jeweils die folgenden Ausnahmen aus:

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein `typedArray` wird übergeben, dessen Typ [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) ist, während dies beim verwendeten Konstruktor nicht der Fall ist, oder umgekehrt.
    - Ein `typedArray` wird übergeben, dessen zugrunde liegender Puffer abgetrennt ist, oder ein abgetrennter `buffer` wird direkt übergeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die Länge des neuen typisierten Arrays ist zu groß.
    - Die Länge von `buffer` (wenn der Parameter `length` nicht angegeben wurde) oder `byteOffset` ist kein ganzzahliges Vielfaches der Elementgröße des neuen typisierten Arrays.
    - `byteOffset` ist kein gültiger Array-Index (eine Ganzzahl zwischen 0 und 2<sup>53</sup> - 1).
    - Beim Erstellen einer Ansicht auf einen Puffer liegen deren Grenzen außerhalb des Puffers. Anders ausgedrückt: `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## Statische Eigenschaften

Diese Eigenschaften sind auf dem `TypedArray`-Konstruktorobjekt definiert und werden daher von den Konstruktoren aller `TypedArray`-Unterklassen gemeinsam genutzt.

- [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : Die Konstruktorfunktion, mit der abgeleitete Objekte erstellt werden.

Alle `TypedArray`-Unterklassen besitzen außerdem die folgende statische Eigenschaft:

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert für die Elementgröße der jeweiligen `TypedArray`-Objekte zurück.

## Statische Methoden

Diese Methoden sind auf dem `TypedArray`-Konstruktorobjekt definiert und werden daher von den Konstruktoren aller `TypedArray`-Unterklassen gemeinsam genutzt.

- {{jsxref("TypedArray.from()")}}
  - : Erstellt ein neues `TypedArray` aus einem Array-ähnlichen oder iterierbaren Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Erstellt ein neues `TypedArray` aus einer variablen Anzahl von Argumenten. Siehe auch {{jsxref("Array.of()")}}.

## Instanzeigenschaften

Diese Eigenschaften sind auf `TypedArray.prototype` definiert und werden von den Instanzen aller `TypedArray`-Unterklassen gemeinsam genutzt.

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Gibt den {{jsxref("ArrayBuffer")}} zurück, auf den das typisierte Array verweist.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Gibt die Länge des typisierten Arrays in Byte zurück.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Gibt den Abstand des typisierten Arrays vom Anfang seines {{jsxref("ArrayBuffer")}} in Byte zurück.
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. `TypedArray.prototype.constructor` ist die verborgene `TypedArray`-Konstruktorfunktion. Jede Unterklasse typisierter Arrays definiert jedoch auch ihre eigene `constructor`-Eigenschaft.
- {{jsxref("TypedArray.prototype.length")}}
  - : Gibt die Anzahl der Elemente im typisierten Array zurück.
- `TypedArray.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der Eigenschaft [`TypedArray.prototype[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist ein Getter, der dieselbe Zeichenfolge wie der Name des Konstruktors des typisierten Arrays zurückgibt. Ist der `this`-Wert keine Instanz einer Unterklasse typisierter Arrays, gibt er `undefined` zurück. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `TypedArray` jedoch auch eine eigene Methode [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString) besitzt, wird die Eigenschaft nur verwendet, wenn Sie [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem typisierten Array als `thisArg` aufrufen.

Alle `TypedArray`-Unterklassen besitzen außerdem die folgende Instanzeigenschaft:

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert für die Elementgröße der jeweiligen `TypedArray`-Objekte zurück.

## Instanzmethoden

Diese Methoden sind auf dem `TypedArray`-Prototypobjekt definiert und werden daher von den Instanzen aller `TypedArray`-Unterklassen gemeinsam genutzt.

- {{jsxref("TypedArray.prototype.at()")}}
  - : Nimmt eine Ganzzahl entgegen und gibt das Element an diesem Index zurück. Die Methode erlaubt negative Ganzzahlen, die vom letzten Element rückwärts zählen.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Kopiert eine Folge von Array-Elementen innerhalb des Arrays. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel-Wert-Paare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Gibt `false` zurück, wenn die Methode ein Element im Array findet, das die angegebene Prüffunktion nicht erfüllt. Andernfalls gibt sie `true` zurück. Siehe auch {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays vom Startindex bis zum Endindex mit einem festen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen dieses Arrays, für die die angegebene Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Gibt das erste `element` im Array zurück, das eine angegebene Prüffunktion erfüllt, oder `undefined`, wenn kein entsprechendes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Gibt den ersten Index im Array zurück, dessen Element eine angegebene Prüffunktion erfüllt, oder `-1`, wenn kein entsprechendes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das eine angegebene Prüffunktion erfüllt, oder `undefined`, wenn kein entsprechendes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das eine angegebene Prüffunktion erfüllt, oder `-1`, wenn kein entsprechendes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Ruft für jedes Element im Array eine Funktion auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Ermittelt, ob ein typisiertes Array ein bestimmtes Element enthält, und gibt entsprechend `true` oder `false` zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Gibt den ersten (kleinsten) Index eines Elements im Array zurück, das dem angegebenen Wert entspricht, oder `-1`, wenn kein solches Element gefunden wird. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Gibt eine neue Zeichenfolge zurück, die durch Verketten aller Elemente dieses typisierten Arrays entsteht. Die Elemente werden durch Kommas oder eine angegebene Trennzeichenfolge getrennt. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Gibt einen neuen Array-Iterator zurück, der die Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index eines Elements im Array zurück, das dem angegebenen Wert entspricht, oder `-1`, wenn kein solches Element gefunden wird. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Erstellt ein neues Array mit den Ergebnissen des Aufrufs einer angegebenen Funktion für jedes Element dieses Arrays. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Wendet eine Funktion von links nach rechts auf einen Akkumulator und jeden Wert des Arrays an, um es auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Wendet eine Funktion von rechts nach links auf einen Akkumulator und jeden Wert des Arrays an, um es auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays um – das erste wird zum letzten und das letzte zum ersten. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Speichert mehrere Werte im typisierten Array und liest die Eingabewerte aus einem angegebenen Array.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Gibt `true` zurück, wenn die Methode ein Element im Array findet, das die angegebene Prüffunktion erfüllt. Andernfalls gibt sie `false` zurück. Siehe auch {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays direkt im Array und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Gibt ein neues `TypedArray` für den Bereich zwischen dem angegebenen Start- und Endindex zurück.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Gibt eine lokalisierte Zeichenfolge zurück, die das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das ursprüngliche Array zu verändern.
- {{jsxref("TypedArray.prototype.toSorted()")}}
  - : Gibt ein neues Array mit aufsteigend sortierten Elementen zurück, ohne das ursprüngliche Array zu verändern.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.with()")}}
  - : Gibt ein neues Array zurück, in dem das Element am angegebenen Index durch den angegebenen Wert ersetzt wurde, ohne das ursprüngliche Array zu verändern.
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält.

## Beispiele

### Zugriff auf Eigenschaften

Sie können Elemente im Array mit der üblichen Syntax für Array-Indizes referenzieren, also mit eckigen Klammern. Beim Lesen oder Setzen von Eigenschaften über einen Index wird bei typisierten Arrays jedoch nicht in der Prototypkette nach der Eigenschaft gesucht, selbst wenn der Index außerhalb der Grenzen liegt. Der Zugriff über einen Index bezieht sich auf den {{jsxref("ArrayBuffer")}} und berücksichtigt niemals Objekteigenschaften. Benannte Eigenschaften können Sie wie bei allen Objekten weiterhin verwenden.

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

### Können nicht eingefroren werden

Nicht leere `TypedArray`-Objekte können nicht eingefroren werden, da ihr zugrunde liegender `ArrayBuffer` über eine andere `TypedArray`-Ansicht auf den Puffer verändert werden könnte. Das Objekt wäre daher nie wirklich eingefroren.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset muss ausgerichtet sein

Wenn ein `TypedArray` als Ansicht auf einen `ArrayBuffer` erstellt wird, muss das Argument `byteOffset` an der Elementgröße ausgerichtet sein. Anders ausgedrückt: Der Offset muss ein Vielfaches von `BYTES_PER_ELEMENT` sein.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength muss ausgerichtet sein

Wie der Parameter `byteOffset` muss auch die Eigenschaft `byteLength` eines `ArrayBuffer`, der an einen `TypedArray`-Konstruktor übergeben wird, ein Vielfaches des `BYTES_PER_ELEMENT`-Werts dieses Konstruktors sein.

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

- [Polyfill für typisierte Arrays in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
