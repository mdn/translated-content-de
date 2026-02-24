---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
l10n:
  sourceCommit: dd88a6eb2176fa31f5b744d8964efecf3f1f425b
---

Ein **_TypedArray_** Objekt beschreibt eine array-ähnliche Ansicht eines zugrunde liegenden [binären Datenpuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). Es gibt keine globale Eigenschaft namens `TypedArray`, noch gibt es einen sichtbar direkt zugänglichen `TypedArray` Konstruktor. Stattdessen gibt es eine Reihe unterschiedlicher globaler Eigenschaften, deren Werte Konstruktoren für bestimmte Elementtypen sind, die im Folgenden aufgelistet werden. Auf den folgenden Seiten finden Sie allgemeine Eigenschaften und Methoden, die mit jedem Typed Array, das Elemente eines beliebigen Typs enthält, verwendet werden können.

## Beschreibung

Der `TypedArray` Konstruktor (oft als `%TypedArray%` bezeichnet, um seine "Intrinsik" zu verdeutlichen, da er keinem in einem JavaScript-Programm sichtbaren globalen Element entspricht) dient als gemeinsame Superklasse aller `TypedArray` Unterklassen. Betrachten Sie `%TypedArray%` als eine "abstrakte Klasse", die eine gemeinsame Schnittstelle von Hilfsmethoden für alle Typed Array Unterklassen bereitstellt. Dieser Konstruktor wird nicht direkt bereitgestellt: Es gibt keine globale `TypedArray`-Eigenschaft. Er ist nur über `Object.getPrototypeOf(Int8Array)` und ähnliche Konstrukte zugänglich.

Wenn Sie eine Instanz einer `TypedArray` Unterklasse (z. B. `Int8Array`) erstellen, wird intern im Speicher ein Array Buffer erstellt, oder wenn ein `ArrayBuffer` Objekt als Konstruktorargument angegeben wird, wird dieser `ArrayBuffer` stattdessen verwendet. Die Pufferadresse wird als interne Eigenschaft der Instanz gespeichert und alle Methoden von `%TypedArray%.prototype` setzen und holen Werte basierend auf dieser Array Buffer Adresse.

### TypedArray Objekte

| Typ                             | Wertebereich                           | Größe in Bytes | Web IDL Typ           |
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

Alle Typed Arrays arbeiten auf `ArrayBuffer`s, wo Sie die genaue Byte-Darstellung jedes Elements beobachten können, daher ist die Binärkodierung der Zahlen von Bedeutung.

- Unsigned Integer Arrays (`Uint8Array`, `Uint16Array`, `Uint32Array` und `BigUint64Array`) speichern die Zahl direkt in binärer Form.
- Signed Integer Arrays (`Int8Array`, `Int16Array`, `Int32Array` und `BigInt64Array`) speichern die Zahl unter Verwendung des [Zweierkomplements](https://de.wikipedia.org/wiki/Zweierkomplement).
- Gleitkomma-Arrays (`Float16Array`, `Float32Array` und `Float64Array`) speichern die Zahl gemäß dem [IEEE 754](https://de.wikipedia.org/wiki/IEEE_754) Gleitkomma-Format. Der [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) Referenzteil enthält mehr Informationen über das genaue Format. JavaScript-Zahlen verwenden standardmäßig das doppelt genaue Gleitkommaformat, das dem `Float64Array` entspricht. `Float32Array` verwendet 23 (statt 52) Bits für die Mantisse und 8 (statt 11) Bits für den Exponenten. `Float16Array` verwendet 10 Bits für die Mantisse und 5 Bits für den Exponenten. Beachten Sie, dass die Spezifikation erfordert, dass alle {{jsxref("NaN")}} Werte dieselbe Bitkodierung verwenden, das genaue Bitmuster jedoch implementierungsabhängig ist.
- `Uint8ClampedArray` ist ein Spezialfall. Es speichert die Zahl in binärer Form ähnlich wie `Uint8Array`, aber wenn Sie eine Zahl außerhalb des Bereichs speichern, _begrenzt_ es die Zahl auf den Bereich 0 bis 255 durch mathematischen Wert, anstatt die höchstwertigen Bits abzuschneiden.

Alle Typed Arrays außer `Int8Array`, `Uint8Array` und `Uint8ClampedArray` speichern jedes Element in mehreren Bytes. Diese Bytes können entweder von am bedeutendsten zu am wenigsten bedeutend (Big-Endian) oder von am wenigsten bedeutend zu am bedeutendsten (Little-Endian) geordnet sein. Siehe {{Glossary("Endianness", "Byte-Reihenfolge")}} für mehr Erklärung. Typed Arrays verwenden immer die native Byte-Reihenfolge der Plattform. Wenn Sie die Byte-Reihenfolge beim Schreiben und Lesen aus Puffern angeben möchten, sollten Sie stattdessen einen {{jsxref("DataView")}} verwenden.

Beim Schreiben auf diese Typed Arrays werden Werte, die außerhalb des darstellbaren Bereichs liegen, normalisiert.

- Alle Integer-Arrays (außer `Uint8ClampedArray`) verwenden [Festbreiten-Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion), die zuerst den Dezimalteil der Zahl abschneidet und dann die niedrigsten Bits nimmt.
- `Uint8ClampedArray` begrenzt die Zahl zunächst auf den Bereich 0 bis 255 (Werte größer als 255 werden zu 255 und Werte kleiner als 0 werden zu 0). Es _rundet_ dann (statt zu kürzen) das Ergebnis auf die nächste ganze Zahl mit Rundung "Half-to-Even"; das heißt, wenn die Zahl genau zwischen zwei ganzen Zahlen liegt, wird auf die nächste gerade Zahl gerundet. Zum Beispiel wird `0.5` zu `0`, `1.5` zu `2` und `2.5` zu `2`.
- `Float16Array` und `Float32Array` führen eine "Rundung auf Gerade" durch, um 64-Bit-Gleitkommazahlen auf 32-Bit und 16-Bit zu konvertieren. Dies ist der gleiche Algorithmus wie von {{jsxref("Math.fround()")}} und {{jsxref("Math.f16round()")}} bereitgestellt.

### Verhalten beim Anzeigen eines größenveränderbaren Puffers

Wenn ein `TypedArray` als Ansicht eines [größenveränderbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#resizing_arraybuffers) erstellt wird, hat das Vergrößern oder Verkleinern des zugrunde liegenden Puffers unterschiedliche Auswirkungen auf die Größe des `TypedArray`, abhängig davon, ob das `TypedArray` als länge-verfolgend konstruiert ist.

Wenn ein Typed Array erstellt wird, ohne eine bestimmte Größe zu spezifizieren, indem der dritte Parameter weggelassen oder `undefined` übergeben wird, wird das Typed Array _länger-verfolgend_ und wird automatisch an die Größe des zugrunde liegenden `buffer` angepasst, sobald dieser verändert wird:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

Wenn ein Typed Array mit einer bestimmten Größe unter Verwendung des dritten `length`-Parameters erstellt wird, wird es nicht an den `buffer` angepasst, wenn dieser wächst:

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

Wenn ein `buffer` verkleinert wird, kann das anzeigende Typed Array außerhalb der Grenzen liegen, in diesem Fall wird die beobachtete Größe des Typed Arrays auf 0 reduziert. Dies ist der einzige Fall, in dem sich die Länge eines nicht-länge-verfolgenden Typed Arrays ändern kann.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

Wenn Sie dann den `buffer` wieder vergrößern, um das Typed Array wieder innerhalb der Grenzen zu bringen, wird die Größe des Typed Arrays auf den ursprünglichen Wert zurückgesetzt.

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - back in bounds again!
```

Dies kann auch bei länge-verfolgenden Typed Arrays auftreten, wenn der Buffer über den `byteOffset` hinaus verkleinert wird.

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

Dieses Objekt kann nicht direkt instanziiert werden — der Versuch, es mit `new` zu konstruieren, wirft einen {{jsxref("TypeError")}}.

```js
new (Object.getPrototypeOf(Int8Array))();
// TypeError: Abstract class TypedArray not directly constructable
```

Stattdessen erzeugen Sie eine Instanz eines Typed Arrays eines bestimmten Typs, wie etwa ein {{jsxref("Int8Array")}} oder ein {{jsxref("BigInt64Array")}}. Diese Objekte haben alle eine gemeinsame Syntax für ihre Konstruktoren:

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
> Alle Konstruktoren der `TypedArray`-Unterklassen können nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, eines ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `typedArray`
  - : Wird ein `TypedArray` Unterklasseninstanz als Argument verwendet, wird der `typedArray` in ein neues Typed Array kopiert. Bei einem nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray`-Konstruktor kann der `typedArray`-Parameter nur einer der nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen (wie {{jsxref("Int32Array")}}) sein. Ähnlich gilt für einen [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray`-Konstruktor ({{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}) der `typedArray`-Parameter kann nur einer der [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen sein. Jeder Wert in `typedArray` wird in den entsprechenden Typ des Konstruktors umgewandelt, bevor er in das neue Array kopiert wird. Die Länge des neuen Typed Arrays wird dieselbe wie die Länge des `typedArray` Arguments.
- `object`
  - : Wird ein Objekt verwendet, das keine `TypedArray`-Instanz ist, wird ein neues Typed Array auf die gleiche Weise erstellt wie mit der [`TypedArray.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from) Methode.
- `length` {{optional_inline}}
  - : Wird ein Nicht-Objekt-Parameter verwendet, wird dieser als Zahl behandelt, welche die Länge des Typed Arrays spezifiziert. Ein interner Array Buffer wird im Speicher erstellt, dessen Größe `length` multipliziert mit [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes ist, und mit Nullen gefüllt. Das Weglassen aller Parameter ist gleichbedeutend mit der Verwendung von `0` als `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : Wird eine [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) Instanz, optional mit einem `byteOffset` und einem `length` Argument verwendet, wird eine neue Typed Array View erstellt, die den angegebenen Buffer anzeigt. Die `byteOffset` (in Bytes) und `length` (in Anzahl der Elemente, jedes belegt [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes) Parameter spezifizieren den Speicherbereich, der von der Typed Array View exponiert wird. Wenn beide weggelassen werden, wird der gesamte `buffer` angezeigt; wird nur `length` weggelassen, wird der Rest des `buffer` beginnend mit `byteOffset` angezeigt. Wenn `length` weggelassen wird, wird das Typed Array [länge-verfolgend](#verhalten_beim_anzeigen_eines_größenveränderbaren_puffers).

### Ausnahmen

Alle `TypedArray` Unterklassen-Konstruktoren operieren auf dieselbe Weise. Sie würden alle die folgenden Ausnahmen werfen:

- {{jsxref("TypeError")}}
  - : Wird einer der folgenden Fälle verursacht:
    - Ein `typedArray` wird übergeben, aber es ist ein [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typ, während der aktuelle Konstruktor es nicht ist, oder umgekehrt.
    - Ein `typedArray` wird übergeben, aber der Buffer, den es anzeigt, ist abgetrennt, oder ein abgetrennter `buffer` wird direkt übergeben.
- {{jsxref("RangeError")}}
  - : Wird einer der folgenden Fälle verursacht:
    - Die Länge des neuen Typed Arrays ist zu groß.
    - Die Länge des `buffer` (falls der `length`-Parameter nicht angegeben ist) oder `byteOffset` ist kein ganzzahliges Vielfaches der Elementgröße des neuen Typed Arrays.
    - `byteOffset` ist kein gültiger Array-Index (eine ganze Zahl zwischen 0 und 2<sup>53</sup> - 1).
    - Beim Erstellen einer Ansicht aus einem Buffer liegen die Grenzen außerhalb des Buffers. Mit anderen Worten, `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## Statische Eigenschaften

Diese Eigenschaften sind am `TypedArray` Konstruktorobjekt definiert und werden daher von allen `TypedArray` Unterklassenkonstruktoren geteilt.

- [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : Die Konstrukturfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

Alle `TypedArray` Unterklassen haben auch die folgenden statischen Eigenschaften:

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray` Objekte zurück.

## Statische Methoden

Diese Methoden sind am `TypedArray` Konstruktorobjekt definiert und werden daher von allen `TypedArray` Unterklassenkonstruktoren geteilt.

- {{jsxref("TypedArray.from()")}}
  - : Erstellt ein neues `TypedArray` aus einem array-ähnlichen oder iterierbaren Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Erstellt ein neues `TypedArray` mit einer variablen Anzahl von Argumenten. Siehe auch {{jsxref("Array.of()")}}.

## Instanzeigenschaften

Diese Eigenschaften sind auf `TypedArray.prototype` definiert und werden von allen `TypedArray` Unterklasseninstanzen geteilt.

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Gibt den {{jsxref("ArrayBuffer")}} zurück, auf den das Typed Array verweist.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Gibt die Länge (in Bytes) des Typed Arrays zurück.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Gibt den Offset (in Bytes) des Typed Arrays vom Anfang seines {{jsxref("ArrayBuffer")}} zurück.
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. `TypedArray.prototype.constructor` ist die versteckte `TypedArray` Konstrukturfunktion, aber jede Typed Array Unterklasse definiert auch ihre eigene `constructor`-Eigenschaft.
- {{jsxref("TypedArray.prototype.length")}}
  - : Gibt die Anzahl der Elemente im Typed Array zurück.
- `TypedArray.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`TypedArray.prototype[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist ein Getter, der dieselbe Zeichenkette wie der Name des Typed Array Konstruktors zurückgibt. Er gibt `undefined` zurück, wenn der `this` Wert nicht eine der Typed Array Unterklassen ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `TypedArray` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString) Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Typed Array als `thisArg` auf.

Alle `TypedArray` Unterklassen haben auch die folgenden Instanzeigenschaften:

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray` Objekte zurück.

## Instanzmethoden

Diese Methoden sind auf dem `TypedArray` Prototypobjekt definiert und werden daher von allen `TypedArray` Unterklasseninstanzen geteilt.

- {{jsxref("TypedArray.prototype.at()")}}
  - : Nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück. Diese Methode erlaubt negative Ganzzahlen, die vom letzten Element zurückzählen.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb des Arrays. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Gibt `false` zurück, wenn ein Element im Array gefunden wird, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls gibt es `true` zurück. Siehe auch {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays von einem Startindex bis zu einem Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen dieses Arrays, für die die bereitgestellte Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Gibt das erste `Element` im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein passendes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Gibt den ersten Indexwert im Array zurück, der ein Element hat, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein passendes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein passendes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein passendes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Ruft eine Funktion für jedes Element im Array auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Bestimmt, ob ein Typed Array ein bestimmtes Element enthält, und gibt `true` oder `false` entsprechend zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Gibt den ersten (kleinsten) Index eines Elements innerhalb des Arrays zurück, das dem angegebenen Wert entspricht, oder `-1`, wenn keiner gefunden wird. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Fügt alle Elemente eines Arrays zu einem String zusammen. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Gibt einen neuen Array-Iterator zurück, der die Schlüssel für jeden Index im Array darstellt. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index eines Elements innerhalb des Arrays zurück, das dem angegebenen Wert entspricht, oder `-1`, wenn keiner gefunden wird. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Erstellt ein neues Array mit den Ergebnissen eines bereitgestellten Funktionsaufrufs auf jedes Element in diesem Array. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Wendet eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von links nach rechts) an, um es auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Wendet eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von rechts nach links) an, um es auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays um - das erste wird das letzte und das letzte wird das erste. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Speichert mehrere Werte im Typed Array und liest Eingabewerte aus einem angegebenen Array.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Gibt `true` zurück, wenn ein Element im Array gefunden wird, das die bereitgestellte Testfunktion erfüllt. Andernfalls gibt es `false` zurück. Siehe auch {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays in place und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Gibt ein neues `TypedArray` aus dem angegebenen Anfangs- und Endelementindex zurück.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Gibt eine lokalisierte Zeichenkette zurück, die das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das Originalarray zu ändern.
- {{jsxref("TypedArray.prototype.toSorted()")}}
  - : Gibt ein neues Array mit den Elementen in aufsteigender Reihenfolge zurück, ohne das Originalarray zu ändern.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.with()")}}
  - : Gibt ein neues Array zurück, bei dem das Element an dem angegebenen Index durch den angegebenen Wert ersetzt wurde, ohne das Originalarray zu ändern.
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält.

## Beispiele

### Property-Zugriff

Sie können auf Elemente im Array mit der Standard-Array-Indexsyntax (also mit Klammernnotation) zugreifen. Beim Abrufen oder Setzen indizierter Eigenschaften auf typed Arrays wird jedoch nicht in der Prototypen-Kette nach dieser Eigenschaft gesucht, selbst wenn die Indizes außerhalb der Grenzen liegen. Indizierte Eigenschaften fragen den {{jsxref("ArrayBuffer")}} ab und werden niemals Objekt-Eigenschaften betrachten. Sie können nach wie vor benannte Eigenschaften verwenden, genau wie bei allen Objekten.

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

`TypedArray`s, die nicht leer sind, können nicht eingefroren werden, da ihr zugrunde liegender `ArrayBuffer` durch eine andere `TypedArray`-Ansicht des Puffers geändert werden könnte. Dies würde bedeuten, dass das Objekt niemals wirklich eingefroren wäre.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset muss ausgerichtet sein

Beim Konstruieren eines `TypedArray` als Ansicht eines `ArrayBuffer`, muss das `byteOffset`-Argument auf seine Elementgröße ausgerichtet sein; mit anderen Worten, das Offset muss ein Vielfaches von `BYTES_PER_ELEMENT` sein.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength muss ausgerichtet sein

Wie der `byteOffset` Parameter muss auch die `byteLength` Eigenschaft eines `ArrayBuffer`, der an einen `TypedArray` Konstruktor übergeben wird, ein Vielfaches von `BYTES_PER_ELEMENT` des Konstruktors sein.

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

- [Polyfill von Typed Arrays in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
