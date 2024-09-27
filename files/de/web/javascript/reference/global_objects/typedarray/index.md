---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Ein **_TypedArray_** Objekt beschreibt eine array-ähnliche Ansicht eines zugrunde liegenden [binären Datenpuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). Es gibt keine globale Eigenschaft namens `TypedArray` und keinen direkt sichtbaren `TypedArray` Konstruktor. Stattdessen gibt es eine Reihe unterschiedlicher globaler Eigenschaften, deren Werte typisierte Arraykonstruktoren für spezifische Elementtypen sind, die unten aufgeführt sind. Auf den folgenden Seiten finden Sie allgemeine Eigenschaften und Methoden, die mit jedem typisierten Array verwendet werden können, das Elemente jeden Typs enthält.

{{EmbedInteractiveExample("pages/js/typedarray-constructor.html")}}

## Beschreibung

Der `TypedArray` Konstruktor (oft als `%TypedArray%` bezeichnet, um seine "intrinsische" Natur zu verdeutlichen, da er keinem globalen Objekt entspricht, das einem JavaScript-Programm zur Verfügung steht) dient als gemeinsame Superklasse aller `TypedArray` Unterklassen. Betrachten Sie `%TypedArray%` als eine "abstrakte Klasse", die eine gemeinsame Schnittstelle von Dienstprogrammmethoden für alle typisierten Array-Unterklassen bereitstellt. Dieser Konstruktor ist nicht direkt verfügbar: es gibt keine globale `TypedArray` Eigenschaft. Er ist nur über `Object.getPrototypeOf(Int8Array)` und ähnliche Konstrukte erreichbar.

Beim Erstellen einer Instanz einer `TypedArray` Unterklasse (z. B. `Int8Array`) wird intern im Speicher ein Array-Puffer erstellt oder, wenn ein `ArrayBuffer` Objekt als Konstruktorargument übergeben wird, wird dieser `ArrayBuffer` stattdessen verwendet. Die Pufferadresse wird als interne Eigenschaft der Instanz gespeichert und alle Methoden von `%TypedArray%.prototype` setzen und lesen Werte basierend auf dieser Array-Puffer-Adresse.

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
| {{jsxref("Float16Array")}}      | `-65504` bis `65504`                   | 2              | N/A                   |
| {{jsxref("Float32Array")}}      | `-3.4e38` bis `3.4e38`                 | 4              | `unrestricted float`  |
| {{jsxref("Float64Array")}}      | `-1.8e308` bis `1.8e308`               | 8              | `unrestricted double` |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> bis 2<sup>63</sup> - 1 | 8              | `bigint`              |
| {{jsxref("BigUint64Array")}}    | 0 bis 2<sup>64</sup> - 1               | 8              | `bigint`              |

### Wertdarstellung und Normalisierung

Alle typisierten Arrays arbeiten mit `ArrayBuffer`s, bei denen Sie die genaue Byte-Darstellung jedes Elements beobachten können, daher ist es wichtig, wie die Zahlen im binären Format kodiert werden.

- Nicht signierte Integer-Arrays (`Uint8Array`, `Uint16Array`, `Uint32Array` und `BigUint64Array`) speichern die Zahl direkt im Binärformat.
- Signierte Integer-Arrays (`Int8Array`, `Int16Array`, `Int32Array` und `BigInt64Array`) speichern die Zahl unter Verwendung der [Zweierkomplement-Darstellung](https://de.wikipedia.org/wiki/Zweierkomplement).
- Gleitkomma-Arrays (`Float16Array`, `Float32Array` und `Float64Array`) speichern die Zahl im [IEEE 754](https://de.wikipedia.org/wiki/IEEE_754)-Format. Der [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) Referenzbereich enthält weitere Informationen über das genaue Format. JavaScript-Zahlen verwenden standardmäßig das doppelte Genauigkeit-Gleitkommaformat, was dem `Float64Array` entspricht. `Float32Array` verwendet 23 (statt 52) Bits für die Mantisse und 8 (statt 11) Bits für den Exponenten. `Float16Array` verwendet 10 Bits für die Mantisse und 5 Bits für den Exponenten. Beachten Sie, dass die Spezifikation erfordert, dass alle {{jsxref("NaN")}} Werte dieselbe Bit-Kodierung verwenden, aber das genaue Bitmuster ist implementierungsabhängig.
- `Uint8ClampedArray` ist ein Sonderfall. Es speichert die Zahl im Binärformat wie `Uint8Array`, aber wenn Sie eine Zahl außerhalb des Bereichs speichern, klemmt es die Zahl auf den Bereich 0 bis 255 nach mathematischem Wert, anstatt die signifikantesten Bits abzuschneiden.

Alle typisierten Arrays außer `Int8Array`, `Uint8Array` und `Uint8ClampedArray` speichern jedes Element mit mehreren Bytes. Diese Bytes können entweder vom am höchsten signifikanten zum am wenigsten signifikanten geordnet sein (Big-Endian) oder vom am wenigsten signifikanten zum am höchsten signifikanten (Little-Endian). Siehe [Endianness](/de/docs/Glossary/Endianness) für weitere Erklärungen. Typisierte Arrays verwenden stets die native Byte-Reihenfolge der Plattform. Wenn Sie die Endianness beim Schreiben und Lesen aus Puffer angeben möchten, sollten Sie stattdessen ein {{jsxref("DataView")}} verwenden.

Beim Schreiben dieser typisierten Arrays werden Werte, die außerhalb des darstellbaren Bereichs liegen, normalisiert.

- Alle Integer-Arrays (außer `Uint8ClampedArray`) verwenden die [festbreite Zahlkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion), die zuerst den Dezimalteil der Zahl abschneidet und dann die niedrigsten Bits nimmt.
- `Uint8ClampedArray` klemmt zuerst die Zahl auf den Bereich von 0 bis 255 (Werte über 255 werden zu 255 und Werte unter 0 werden zu 0). Es rundet dann (statt abzurunden) das Ergebnis auf die nächste Ganzzahl, wobei die "half-to-even"-Methode angewendet wird; das bedeutet, dass wenn die Zahl genau zwischen zwei Ganzzahlen liegt, sie auf die nächstliegende gerade Ganzzahl gerundet wird. Zum Beispiel wird `0.5` zu `0`, `1.5` zu `2` und `2.5` zu `2`.
- `Float16Array` und `Float32Array` führen ein "Runden zur geraden Zahl" durch, um 64-Bit-Gleitkommazahlen auf 32-Bit und 16-Bit zu konvertieren. Dies ist der gleiche Algorithmus, der von {{jsxref("Math.fround()")}} und {{jsxref("Math.f16round()")}} bereitgestellt wird.

### Verhalten beim Anzeigen eines größenanpassbaren Puffers

Wenn ein `TypedArray` als Ansicht eines [größenanpassbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#resizing_arraybuffers) erstellt wird, hat das Ändern der Größe des zugrunde liegenden Puffers unterschiedliche Auswirkungen auf die Größe des `TypedArray`, je nachdem, ob das `TypedArray` als längenverfolgend konstruiert wurde.

Wenn ein typisiertes Array ohne spezifische Größe erstellt wird, indem der dritte Parameter weggelassen oder `undefined` übergeben wird, wird das typisierte Array _längenverfolgend_ und ändert automatisch die Größe, um den zugrunde liegenden `buffer` anzupassen, während letzterer geändert wird:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

Wenn ein typisiertes Array mit einer bestimmten Größe unter Verwendung des dritten `length` Parameters erstellt wird, wird es die Größe des `buffer` nicht anpassen, während letzterer wächst:

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

Wenn ein `buffer` verkleinert wird, kann das betrachtende typisierte Array außerhalb des gültigen Bereichs geraten, in welchem Fall die beobachtbare Größe des typisierten Arrays auf 0 reduziert wird. Dies ist der einzige Fall, in dem sich die Länge eines nicht längenverfolgenden typisierten Arrays ändern kann.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

Wenn Sie dann den `buffer` wieder vergrößern, um das typisierte Array innerhalb des gültigen Bereichs zu bringen, wird die Größe des typisierten Arrays auf ihren ursprünglichen Wert wiederhergestellt.

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - back in bounds again!
```

Das Gleiche kann auch mit längenverfolgenden typisierten Arrays passieren, wenn der Puffer über den `byteOffset` hinaus verkleinert wird.

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

Stattdessen erstellen Sie eine Instanz eines typisierten Arrays eines bestimmten Typs, wie etwa eines {{jsxref("Int8Array")}} oder eines {{jsxref("BigInt64Array")}}. Diese Objekte haben alle eine gemeinsame Syntax für ihre Konstruktoren:

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
> Alle `TypedArray` Unterklassen-Konstruktoren können nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, einen ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `typedArray`
  - : Wenn mit einer Instanz einer `TypedArray` Unterklasse aufgerufen, wird das `typedArray` in ein neues typisiertes Array kopiert. Für einen `TypedArray` Konstruktor ohne [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) kann der `typedArray` Parameter nur einer der Typen ohne [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) sein (wie etwa {{jsxref("Int32Array")}}). Bei einem `TypedArray` Konstruktor mit [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) ({{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}) kann der `typedArray` Parameter nur einer der Typen mit [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) sein. Jedes Element im `typedArray` wird vor dem Kopieren in das neue Array in den entsprechenden Typ des Konstruktors konvertiert. Die Länge des neuen typisierten Arrays wird die gleiche sein wie die des `typedArray` Arguments.
- `object`
  - : Wenn mit einem Objekt aufgerufen, das keine `TypedArray` Instanz ist, wird ein neues typisiertes Array auf die gleiche Weise wie durch die Methode [`TypedArray.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from) erstellt.
- `length` {{optional_inline}}
  - : Wenn mit einem Nicht-Objekt aufgerufen, wird der Parameter als Zahl behandelt, die die Länge des typisierten Arrays angibt. Ein interner Array-Puffer wird im Speicher erstellt, dessen Größe `length` multipliziert mit [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes ist, gefüllt mit Nullen. Das Weglassen aller Parameter entspricht der Verwendung von `0` als `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : Wenn mit einer Instanz von [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) und optional einem `byteOffset` und einem `length` Argument aufgerufen, wird eine neue typisierte Array-Ansicht erstellt, die den angegebenen Puffer ansieht. Die `byteOffset` (in Bytes) und `length` (in Anzahl der Elemente, von denen jedes [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes beansprucht) Parameter geben den Speicherbereich an, der durch die typisierte Array-Ansicht zugänglich gemacht wird. Wenn beide ausgelassen werden, wird der gesamte `buffer` betrachtet; wenn nur `length` ausgelassen wird, wird der Rest von `buffer`, beginnend ab `byteOffset`, betrachtet. Wenn `length` ausgelassen wird, wird das typisierte Array [längenverfolgend](#verhalten_beim_anzeigen_eines_größenanpassbaren_puffers).

### Ausnahmen

Alle `TypedArray` Unterklassen-Konstruktoren arbeiten auf die gleiche Weise. Sie werfen alle die folgenden Ausnahmen:

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - Ein `typedArray` wird übergeben, aber es ist ein [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typ, während der aktuelle Konstruktor es nicht ist, oder umgekehrt.
    - Ein `typedArray` wird übergeben, aber der Puffer, den es ansieht, ist abgetrennt, oder ein abgetrennter `buffer` wird direkt übergeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - Die neue Länge des typisierten Arrays ist zu groß.
    - Die Länge des `buffer` (wenn der `length` Parameter nicht angegeben ist) oder `byteOffset` ist kein ganzzahliges Vielfaches der Elementgröße des neuen typisierten Arrays.
    - `byteOffset` ist kein gültiger Array-Index (eine Ganzzahl zwischen 0 und 2<sup>53</sup> - 1).
    - Beim Erstellen einer Ansicht von einem Puffer liegen die Grenzen außerhalb des Puffers. Mit anderen Worten, `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## Statische Eigenschaften

Diese Eigenschaften sind auf dem `TypedArray` Konstruktorobjekt definiert und werden daher von allen `TypedArray` Unterklassen-Konstruktoren geteilt.

- [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : Die Konstruktionsfunktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

Alle `TypedArray` Unterklassen haben auch die folgenden statischen Eigenschaften:

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray` Objekte zurück.

## Statische Methoden

Diese Methoden sind auf dem `TypedArray` Konstruktorobjekt definiert und werden daher von allen `TypedArray` Unterklassen-Konstruktoren geteilt.

- {{jsxref("TypedArray.from()")}}
  - : Erstellt ein neues `TypedArray` aus einem array-ähnlichen oder iterierbaren Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Erstellt ein neues `TypedArray` mit einer variablen Anzahl von Argumenten. Siehe auch {{jsxref("Array.of()")}}.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `TypedArray.prototype` definiert und werden von allen `TypedArray` Unterklassen-Instanzen geteilt.

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Gibt den {{jsxref("ArrayBuffer")}} zurück, auf den durch das typisierte Array verwiesen wird.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Gibt die Länge (in Bytes) des typisierten Arrays zurück.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Gibt den Offset (in Bytes) des typisierten Arrays vom Beginn seines {{jsxref("ArrayBuffer")}} zurück.
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. `TypedArray.prototype.constructor` ist die versteckte `TypedArray` Konstruktionsfunktion, aber jede typisierte Array-Unterklasse definiert auch ihre eigene `constructor` Eigenschaft.
- {{jsxref("TypedArray.prototype.length")}}
  - : Gibt die Anzahl der im typisierten Array gehaltenen Elemente zurück.
- `TypedArray.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`TypedArray.prototype[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist ein Getter, der denselben String wie der Name des typisierten Array-Konstruktors zurückgibt. Er gibt `undefined` zurück, wenn der `this` Wert nicht eine der typisierten Array-Unterklassen ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `TypedArray` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString) Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem typisierten Array als `thisArg` auf.

Alle `TypedArray` Unterklassen haben auch die folgenden Instanz-Eigenschaften:

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray` Objekte zurück.

## Instanz-Methoden

Diese Methoden sind auf dem `TypedArray` Prototypobjekt definiert und werden daher von allen `TypedArray` Unterklassen-Instanzen geteilt.

- {{jsxref("TypedArray.prototype.at()")}}
  - : Nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück. Diese Methode ermöglicht negative Ganzzahlen, die von dem letzten Element zurückzählen.
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
  - : Gibt das erste `element` im Array zurück, das einen bereitgestellten Test erfüllt, oder `undefined`, wenn kein passendes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Gibt den ersten Indexwert im Array zurück, der ein Element enthält, das einen bereitgestellten Test erfüllt, oder `-1`, wenn kein passendes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das einen bereitgestellten Test erfüllt, oder `undefined`, wenn kein passendes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das einen bereitgestellten Test erfüllt, oder `-1`, wenn kein passendes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Ruft für jedes Element im Array eine Funktion auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Bestimmt, ob ein typisiertes Array ein bestimmtes Element enthält und gibt entsprechend `true` oder `false` zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Gibt den ersten (geringsten) Index eines Elements im Array zurück, das dem angegebenen Wert entspricht, oder `-1`, wenn keins gefunden wurde. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Verknüpft alle Elemente eines Arrays zu einem String. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Gibt einen neuen Array-Iterator zurück, der die Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index eines Elements im Array zurück, das dem angegebenen Wert entspricht, oder `-1`, wenn keins gefunden wurde. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Erstellt ein neues Array mit den Ergebnissen der Anwendung einer bereitgestellten Funktion auf jedes Element in diesem Array. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Wendet eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von links nach rechts) an, um ihn auf einen einzelnen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Wendet eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von rechts nach links) an, um ihn auf einen einzelnen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays um – das erste wird das letzte und das letzte wird das erste. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Speichert mehrere Werte im typisierten Array, indem Eingabewerte aus einem angegebenen Array gelesen werden.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Gibt `true` zurück, wenn mindestens ein Element in diesem Array die bereitgestellte Prüffunktion erfüllt. Siehe auch {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays an Ort und Stelle und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Gibt ein neues `TypedArray` vom gegebenen Start- und Endelementindex zurück.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Gibt einen lokalisierten String zurück, der das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das Originalarray zu ändern.
- {{jsxref("TypedArray.prototype.toSorted()")}}
  - : Gibt ein neues Array mit den Elementen in aufsteigender Reihenfolge zurück, ohne das Originalarray zu ändern.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Gibt einen String zurück, der das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält.

## Beispiele

### Zugriff auf Eigenschaft

Sie können auf Elemente im Array über die Standard-Array-Indexsyntax zugreifen (d. h. durch eckige Klammern). Das Abrufen oder Setzen von indizierten Eigenschaften in typisierten Arrays sucht jedoch nicht in der Prototypkette nach dieser Eigenschaft, selbst wenn die Indizes außerhalb des Bereichs liegen. Indizierte Eigenschaften konsultieren den {{jsxref("ArrayBuffer")}} und schauen niemals auf Objekteigenschaften. Sie können weiterhin benannte Eigenschaften verwenden, genau wie bei allen Objekten.

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

`TypedArray`s, die nicht leer sind, können nicht eingefroren werden, da ihr zugrunde liegender `ArrayBuffer` durch eine andere `TypedArray` Ansicht des Puffers modifiziert werden könnte. Dies würde bedeuten, dass das Objekt niemals wirklich eingefroren wäre.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset muss ausgerichtet sein

Beim Konstruieren eines `TypedArray` als Ansicht auf einen `ArrayBuffer` muss das `byteOffset` Argument auf seine Elementgröße ausgerichtet sein; mit anderen Worten, der Offset muss ein Vielfaches von `BYTES_PER_ELEMENT` sein.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength muss ausgerichtet sein

Wie der `byteOffset` Parameter muss die `byteLength` Eigenschaft eines `ArrayBuffer`, der einem `TypedArray` Konstruktor übergeben wird, ein Vielfaches von `BYTES_PER_ELEMENT` des Konstruktors sein.

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
