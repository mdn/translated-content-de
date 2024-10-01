---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Ein **_TypedArray_** Objekt beschreibt eine array-ähnliche Sicht auf einen
unterliegenden [binären Datenpuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).
Es gibt keine globale Eigenschaft namens `TypedArray`, noch gibt es einen
direkt sichtbaren `TypedArray` Konstruktor. Stattdessen gibt es eine Reihe von
unterschiedlichen globalen Eigenschaften, deren Werte typisierte Array-Konstruktoren für spezifische
Elementtypen sind, wie unten aufgeführt. Auf den folgenden Seiten finden Sie allgemeine Eigenschaften und
Methoden, die mit jedem typisierten Array verwendet werden können, das Elemente eines beliebigen Typs enthält.

{{EmbedInteractiveExample("pages/js/typedarray-constructor.html")}}

## Beschreibung

Der `TypedArray` Konstruktor (oft als `%TypedArray%` bezeichnet, um seine "Intrinsicness" anzuzeigen, da er keinem in einem JavaScript-Programm exponierten globalen Element entspricht) dient als die gemeinsame Superklasse aller `TypedArray` Subklassen. Denken Sie an `%TypedArray%` als eine "abstrakte Klasse", die eine gemeinsame Schnittstelle von Dienstmethoden für alle typisierten Arraysubklassen bereitstellt. Dieser Konstruktor ist nicht direkt exponiert: Es gibt keine globale `TypedArray` Eigenschaft. Er ist nur über `Object.getPrototypeOf(Int8Array)` und ähnliche zugänglich.

Beim Erstellen einer Instanz einer `TypedArray` Subklasse (z.B. `Int8Array`) wird intern im Speicher ein Array-Puffer erstellt oder, wenn ein `ArrayBuffer` Objekt als Konstruktionsargument angegeben wird, wird dieser `ArrayBuffer` stattdessen verwendet. Die Pufferadresse wird als interne Eigenschaft der Instanz gespeichert, und alle Methoden von `%TypedArray%.prototype` setzen und holen Werte basierend auf dieser Array-Pufferadresse.

### TypedArray-Objekte

| Typ                             | Wertebereich                           | Größe in Bytes | Web IDL Typ           |
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

### Wertecodierung und Normalisierung

Alle typisierten Arrays arbeiten auf `ArrayBuffer`s, bei denen Sie die genaue Byte-Darstellung jedes Elements sehen können. Wie die Zahlen im Binärformat codiert sind, ist daher von Bedeutung.

- Vorzeichenlose ganze Arrays (`Uint8Array`, `Uint16Array`, `Uint32Array` und `BigUint64Array`) speichern die Zahl direkt im Binärformat.
- Vorzeichenbehaftete ganze Arrays (`Int8Array`, `Int16Array`, `Int32Array` und `BigInt64Array`) speichern die Zahl mit [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement).
- Gleitkomma-Arrays (`Float16Array`, `Float32Array` und `Float64Array`) speichern die Zahl im [IEEE 754](https://de.wikipedia.org/wiki/IEEE_754) Gleitkommaformat. Die [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) Referenz enthält mehr Informationen über das genaue Format. JavaScript-Zahlen verwenden standardmäßig das Double-Präzisions-Gleitkommaformat, das dem `Float64Array` entspricht. `Float32Array` verwendet 23 (statt 52) Bits für die Mantisse und 8 (statt 11) Bits für den Exponenten. `Float16Array` verwendet 10 Bits für die Mantisse und 5 Bits für den Exponenten. Beachten Sie, dass die Spezifikation verlangt, dass alle {{jsxref("NaN")}} Werte die gleiche Bit-Codierung verwenden, aber das genaue Bit-Muster ist implementierungsabhängig.
- `Uint8ClampedArray` ist ein Sonderfall. Es speichert die Zahl im Binärformat wie `Uint8Array`, aber wenn man eine Zahl außerhalb des Bereichs speichert, _klemmt_ es die Zahl auf den Bereich von 0 bis 255 durch mathematischen Wert, anstatt die höchstwertigen Bits abzuschneiden.

Alle typisierten Arrays außer `Int8Array`, `Uint8Array` und `Uint8ClampedArray` speichern jedes Element mit mehreren Bytes. Diese Bytes können entweder von den höchstwertigen zu den niederwertigen geordnet sein (big-endian) oder von den niederwertigen zu den höchstwertigen (little-endian). Weitere Erklärungen finden Sie unter {{Glossary("Endianness", "Endianness")}}. Typisierte Arrays verwenden immer die native Byte-Reihenfolge der Plattform. Wenn Sie die Byte-Reihenfolge beim Schreiben und Lesen aus Puffs angeben möchten, sollten Sie stattdessen ein {{jsxref("DataView")}} verwenden.

Beim Schreiben in diese typisierten Arrays werden Werte, die außerhalb des darstellbaren Bereichs liegen, normalisiert.

- Alle ganzen Arrays (außer `Uint8ClampedArray`) verwenden [festbreite Zahllunmwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion), die zuerst den Dezimalteil der Zahl abschneidet und dann die niedrigsten Bits berücksichtigt.
- `Uint8ClampedArray` klemmt zuerst die Zahl auf den Bereich von 0 bis 255 (Werte größer als 255 werden zu 255 und Werte kleiner als 0 werden zu 0). Danach wird das Ergebnis _gerundet_ (anstatt abgerundet) auf die nächste ganze Zahl, mit halbem zu ganzem; das bedeutet, wenn die Zahl genau zwischen zwei ganzen Zahlen liegt, wird sie auf die nächste gerade Zahl gerundet. Zum Beispiel wird `0.5` zu `0`, `1.5` wird zu `2`, und `2.5` wird zu `2`.
- `Float16Array` und `Float32Array` führen ein "Runden zu ganzem" durch, um 64-Bit-Gleitkommazahlen in 32-Bit- und 16-Bit-Zahlen umzuwandeln. Dies ist der gleiche Algorithmus, den {{jsxref("Math.fround()")}} und {{jsxref("Math.f16round()")}} bereitstellen.

### Verhalten bei der Ansicht eines größenveränderbaren Puffers

Wenn ein `TypedArray` als Ansicht eines [größenveränderbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#resizing_arraybuffers) erstellt wird, hat das Verändern der Größe des unterliegenden Puffers unterschiedliche Auswirkungen auf die Größe des `TypedArray`, je nachdem, ob das `TypedArray` als längenverfolgend konstruiert wurde.

Wenn ein typisiertes Array ohne eine spezifische Größe durch Auslassen des dritten Parameters oder durch Übergeben von `undefined` erstellt wird, wird das typisierte Array _längenverfolgend_ und passt sich automatisch an den unterliegenden `buffer` an, während dieser vergrößert wird:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

Wenn ein typisiertes Array mit einer spezifischen Größe unter Verwendung des dritten `length` Parameters erstellt wird, wird es sich nicht an den `buffer` anpassen, wenn dieser wächst:

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

Wenn ein `buffer` verkleinert wird, kann das betrachtete typisierte Array über die Grenzen hinausgehen, in diesem Fall wird die beobachtete Größe des typisierten Arrays auf 0 verkleinert. Dies ist der einzige Fall, in dem sich die Länge eines nicht längenverfolgenden typisierten Arrays ändern kann.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

Wenn Sie dann den `buffer` erneut vergrößern, um das typisierte Array wieder in Grenzen zu bringen, wird die Größe des typisierten Arrays auf seinen ursprünglichen Wert zurückgesetzt.

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - back in bounds again!
```

Das Gleiche kann auch bei längenverfolgenden typisierten Arrays passieren, wenn der Puffer über den `byteOffset` hinaus verkleinert wird.

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

Dieses Objekt kann nicht direkt instanziiert werden – der Versuch, es mit `new` zu konstruieren, wirft einen {{jsxref("TypeError")}}.

```js
new (Object.getPrototypeOf(Int8Array))();
// TypeError: Abstract class TypedArray not directly constructable
```

Stattdessen erstellen Sie eine Instanz eines typisierten Arrays eines bestimmten Typs, wie z.B. ein {{jsxref("Int8Array")}} oder ein {{jsxref("BigInt64Array")}}. Diese Objekte haben alle eine gemeinsame Syntax für ihre Konstruktoren:

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
> Alle `TypedArray` Unterklassenkonstruktoren können nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, einen ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `typedArray`
  - : Wenn mit einer Instanz einer `TypedArray` Subklasse aufgerufen, wird das `typedArray` in ein neues typisiertes Array kopiert. Für einen nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray` Konstruktor kann der `typedArray` Parameter nur einer der nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen sein (wie {{jsxref("Int32Array")}}). Ebenso kann für einen [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray` Konstruktor ({{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}) der `typedArray` Parameter nur einer der [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen sein. Jeder Wert in `typedArray` wird in den entsprechenden Typ des Konstruktors umgewandelt, bevor er in das neue Array kopiert wird. Die Länge des neuen typisierten Arrays entspricht der Länge des `typedArray` Arguments.
- `object`
  - : Wenn mit einem Objekt aufgerufen, das keine `TypedArray`-Instanz ist, wird ein neues typisiertes Array auf die gleiche Weise erstellt wie mit der [`TypedArray.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from) Methode.
- `length` {{optional_inline}}
  - : Wenn mit einem Nicht-Objekt aufgerufen, wird der Parameter als Zahl angesehen, welche die Länge des typisierten Arrays angibt. Ein interner Array-Puffer wird im Speicher erstellt, dessen Größe `length` multipliziert mit [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes ist und mit Nullen gefüllt wird. Das Weglassen aller Parameter ist äquivalent zur Verwendung von `0` als `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : Wenn mit einer [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) Instanz aufgerufen, optional mit einem `byteOffset` und einem `length` Argument, wird eine neue typisierte Array-Ansicht erstellt, die den spezifizierten Puffer ansieht. Die `byteOffset` (in Bytes) und `length` (in Anzahl der Elemente, jeweils [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes) Parameter spezifizieren den Speicherbereich, der durch die typisierte Array-Ansicht exponiert wird. Wenn beide weggelassen werden, wird der gesamte `buffer` betrachtet; wenn nur `length` weggelassen wird, wird der verbleibende `buffer` beginnend ab `byteOffset` betrachtet. Wenn `length` weggelassen wird, wird das typisierte Array [längenverfolgend](#verhalten_bei_der_ansicht_eines_größenveränderbaren_puffers).

### Ausnahmen

Alle `TypeArray` Unterklasskonstruktoren funktionieren auf die gleiche Weise. Sie würden alle die folgenden Ausnahmen werfen:

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - Ein `typedArray` wird übergeben, es ist jedoch ein [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typ, während der aktuelle Konstruktor kein solcher ist, oder umgekehrt.
    - Ein `typedArray` wird übergeben, aber der Puffer, den es betrachtet, ist getrennt, oder ein getrennter `buffer` wird direkt übergeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - Die Länge des neuen typisierten Arrays ist zu groß.
    - Die Länge des Puffers (wenn der `length` Parameter nicht spezifiziert ist) oder `byteOffset` ist kein ganzzahliges Vielfaches der Elementgröße des neuen typisierten Arrays.
    - `byteOffset` ist kein gültiger Array-Index (eine Ganzzahl zwischen 0 und 2<sup>53</sup> - 1).
    - Beim Erstellen einer Ansicht aus einem Puffer liegen die Grenzen außerhalb des Puffers. Mit anderen Worten, `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## Statische Eigenschaften

Diese Eigenschaften sind auf dem `TypedArray` Konstruktorobjekt definiert und werden daher von allen `TypedArray` Unterklasskonstruktoren geteilt.

- [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : Die Konstruktionsfunktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

Alle `TypedArray` Unterklassen haben auch die folgenden statischen Eigenschaften:

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray` Objekte zurück.

## Statische Methoden

Diese Methoden sind auf dem `TypedArray` Konstruktorobjekt definiert und werden daher von allen `TypedArray` Unterklasskonstruktoren geteilt.

- {{jsxref("TypedArray.from()")}}
  - : Erstellt ein neues `TypedArray` aus einem array-ähnlichen oder iterierbaren Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Erstellt ein neues `TypedArray` mit einer variablen Anzahl von Argumenten. Siehe auch {{jsxref("Array.of()")}}.

## Instanzeigenschaften

Diese Eigenschaften sind auf `TypedArray.prototype` definiert und werden von allen `TypedArray` Unterklasseninstanzen geteilt.

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Gibt den {{jsxref("ArrayBuffer")}} zurück, auf den das typisierte Array verweist.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Gibt die Länge (in Bytes) des typisierten Arrays zurück.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Gibt den Versatz (in Bytes) des typisierten Arrays vom Beginn seines {{jsxref("ArrayBuffer")}} zurück.
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. `TypedArray.prototype.constructor` ist die versteckte `TypedArray` Konstruktionsfunktion, aber jede typisierte Arrayunterklasse definiert auch ihre eigene `constructor` Eigenschaft.
- {{jsxref("TypedArray.prototype.length")}}
  - : Gibt die Anzahl der im typisierten Array gehaltenen Elemente zurück.
- `TypedArray.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`TypedArray.prototype[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist ein Getter, der denselben String wie der Name des typisierten Array-Konstruktors zurückgibt. Wenn der Wert von `this` keine der typisierten Arrayunterklassen ist, wird `undefined` zurückgegeben. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `TypedArray` jedoch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString) Methode besitzt, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Typisierten Array als `thisArg` auf.

Alle `TypedArray` Unterklassen haben auch die folgenden Instanzeigenschaften:

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray` Objekte zurück.

## Instanzmethoden

Diese Methoden sind auf dem `TypedArray` Prototypobjekt definiert und werden daher von allen `TypedArray` Unterklasseninstanzen geteilt.

- {{jsxref("TypedArray.prototype.at()")}}
  - : Nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück. Diese Methode erlaubt negative Ganzzahlen, die vom letzten Element zurückzählen.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Kopiert eine Folge von Array-Elementen innerhalb des Arrays. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Gibt ein neues _Array Iterator_ Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Überprüft, ob alle Elemente im Array den durch eine Funktion bereitgestellten Test bestehen. Siehe auch {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays von einem Anfagsindex bis zu einem Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen dieses Arrays, für die die bereitgestellte Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Gibt das erste `Element` im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Gibt den ersten Indexwert im Array zurück, der ein Element hat, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Ruft eine Funktion für jedes Element im Array auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Bestimmt, ob ein typisiertes Array ein bestimmtes Element enthält und gibt entsprechend `true` oder `false` zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Gibt den ersten (kleinsten) Index eines Elements im Array zurück, das dem angegebenen Wert entspricht, oder `-1`, wenn keines gefunden wird. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Verbindet alle Elemente eines Arrays zu einem String. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Gibt einen neuen Array-Iterator zurück, der die Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Gibt den letzen (größten) Index eines Elements im Array zurück, das dem angegebenen Wert entspricht, oder `-1`, wenn keines gefunden wird. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Erstellt ein neues Array mit den Ergebnissen des Aufrufens einer bereitgestellten Funktion auf jedes Element in diesem Array. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Wendet eine Funktion auf einen Akkumulator und jeden Wert des Arrays an (von links nach rechts), um es auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Wendet eine Funktion auf einen Akkumulator und jeden Wert des Arrays an (von rechts nach links), um es auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente des Arrays um — das erste wird zum letzten und das letzte zum ersten. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Speichert mehrere Werte im typisierten Array und liest die Eingabewerte aus einem angegebenen Array.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Gibt `true` zurück, wenn mindestens ein Element in diesem Array die bereitgestellte Testfunktion erfüllt. Siehe auch {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays vor Ort und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Gibt ein neues `TypedArray` aus dem angegebenen Start- und Endelementindex zurück.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Gibt einen lokalisierten String zurück, der das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das ursprüngliche Array zu verändern.
- {{jsxref("TypedArray.prototype.toSorted()")}}
  - : Gibt ein neues Array mit den sortierten Elementen in aufsteigender Reihenfolge zurück, ohne das ursprüngliche Array zu verändern.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Gibt einen String zurück, der das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Gibt ein neues _Array Iterator_ Objekt zurück, das die Werte für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.with()")}}
  - : Gibt ein neues Array zurück, bei dem das Element am angegebenen Index durch den angegebenen Wert ersetzt wird, ohne das ursprüngliche Array zu verändern.
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : Gibt ein neues _Array Iterator_ Objekt zurück, das die Werte für jeden Index im Array enthält.

## Beispiele

### Eigenschaften-Zugriff

Sie können auf Elemente im Array mit standardmäßiger Array-Index-Syntax (das heißt, unter Verwendung der Klammernnotation) zugreifen. Das Abrufen oder Setzen von indizierten Eigenschaften in typisierten Arrays führt jedoch keine Suche in der Prototypkette nach dieser Eigenschaft durch, selbst wenn die Indizes außerhalb der Grenzen liegen. Indizierte Eigenschaften konsultieren den {{jsxref("ArrayBuffer")}} und berücksichtigen nie Objekteigenschaften. Sie können dennoch benannte Eigenschaften verwenden, wie bei allen Objekten.

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

`TypedArray`s, die nicht leer sind, können nicht eingefroren werden, da ihre
unterliegenden `ArrayBuffer` durch eine andere
`TypedArray` Ansicht auf den Puffer geändert werden könnten. Dies würde bedeuten, dass das Objekt niemals wirklich eingefroren wäre.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset muss ausgerichtet sein

Beim Erstellen eines `TypedArray` als Ansicht auf einem
`ArrayBuffer`, muss das `byteOffset` Argument an seine
Elementgröße ausgerichtet sein; mit anderen Worten, der Versatz muss ein Vielfaches von
`BYTES_PER_ELEMENT` sein.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength muss ausgerichtet sein

Analog zum `byteOffset`-Parameter muss die `byteLength`-Eigenschaft eines
`ArrayBuffer`, der an den Konstruktor eines `TypedArray` übergeben wird,
ein Vielfaches des `BYTES_PER_ELEMENT` des Konstruktors sein.

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
- JavaScript typisierte Arrays [Leitfaden](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
