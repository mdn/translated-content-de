---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Ein **_TypedArray_**-Objekt beschreibt eine arrayartige Ansicht eines zugrunde liegenden [binären Datenpuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). Es gibt keine globale Eigenschaft mit dem Namen `TypedArray`, noch gibt es einen direkt sichtbaren `TypedArray`-Konstruktor. Stattdessen gibt es eine Anzahl verschiedener globaler Eigenschaften, deren Werte Konstruktoren für typisierte Arrays für bestimmte Elementtypen sind, die unten aufgeführt sind. Auf den folgenden Seiten finden Sie gemeinsame Eigenschaften und Methoden, die mit jedem typisierten Array verwendet werden können, das Elemente eines beliebigen Typs enthält.

## Beschreibung

Der `TypedArray`-Konstruktor (oft als `%TypedArray%` bezeichnet, um seine "intrinsische" Natur anzuzeigen, da er nicht einem globalen Objekt entspricht, das einem JavaScript-Programm ausgesetzt ist) dient als gemeinsame Oberklasse aller `TypedArray`-Unterklassen. Betrachten Sie `%TypedArray%` als eine "abstrakte Klasse", die eine gemeinsame Schnittstelle von Utility-Methoden für alle typisierten Array-Unterklassen bereitstellt. Dieser Konstruktor ist nicht direkt zugänglich: Es gibt keine globale `TypedArray`-Eigenschaft. Er ist nur über `Object.getPrototypeOf(Int8Array)` und ähnliche Methoden zugänglich.

Wenn eine Instanz einer `TypedArray`-Unterklasse (z.B. `Int8Array`) erstellt wird, wird intern im Speicher ein Array-Puffer erzeugt, oder, falls ein `ArrayBuffer`-Objekt als Konstruktorargument übergeben wird, wird dieser `ArrayBuffer` stattdessen verwendet. Die Adresse des Puffers wird als interne Eigenschaft der Instanz gespeichert und alle Methoden von `%TypedArray%.prototype` setzen und holen Werte basierend auf dieser Array-Puffer-Adresse.

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

Alle typisierten Arrays arbeiten mit `ArrayBuffer`s, in denen Sie die exakte Byte-Darstellung jedes Elements beobachten können, sodass es wichtig ist, wie die Zahlen im Binärformat kodiert sind.

- Unsigned-Integer-Arrays (`Uint8Array`, `Uint16Array`, `Uint32Array` und `BigUint64Array`) speichern die Zahl direkt im Binärformat.
- Signed-Integer-Arrays (`Int8Array`, `Int16Array`, `Int32Array` und `BigInt64Array`) speichern die Zahl unter Verwendung der [Zweierkomplement-Darstellung](https://en.wikipedia.org/wiki/Two's_complement).
- Gleitkomma-Arrays (`Float16Array`, `Float32Array` und `Float64Array`) speichern die Zahl im [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754)-Gleitkommaformat. Die [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)-Referenz enthält weitere Informationen zum genauen Format. JavaScript-Zahlen verwenden standardmäßig das Gleitkommaformat in doppelter Genauigkeit, welches dem `Float64Array` entspricht. `Float32Array` verwendet 23 (anstatt 52) Bit für die Mantisse und 8 (anstatt 11) Bit für den Exponenten. `Float16Array` verwendet 10 Bit für die Mantisse und 5 Bit für den Exponenten. Beachten Sie, dass die Spezifikation erfordert, dass alle {{jsxref("NaN")}}-Werte dieselbe Bitkodierung verwenden, aber das exakte Bitmuster ist implementierungsabhängig.
- `Uint8ClampedArray` ist ein Spezialfall. Es speichert die Zahl im Binärformat wie `Uint8Array`, aber wenn Sie eine Zahl außerhalb des Bereichs speichern, _klammert_ es die Zahl auf den Bereich 0 bis 255 durch mathematischen Wert, anstatt die bedeutendsten Bits abzuschneiden.

Alle typisierten Arrays außer `Int8Array`, `Uint8Array` und `Uint8ClampedArray` speichern jedes Element mit mehreren Bytes. Diese Bytes können entweder von den bedeutendsten zu den wenig bedeutenden (Big-Endian) oder von den wenig bedeutenden zu den bedeutendsten (Little-Endian) geordnet werden. Siehe {{Glossary("Endianness", "Endianness")}} für mehr Erklärungen. Typisierte Arrays verwenden immer die native Byte-Reihenfolge der Plattform. Wenn Sie die Byte-Reihenfolge beim Schreiben und Lesen von Puffern spezifizieren möchten, sollten Sie einen {{jsxref("DataView")}} verwenden.

Beim Schreiben in diese typisierten Arrays werden Werte, die außerhalb des darstellbaren Bereichs liegen, normalisiert.

- Alle Integer-Arrays (außer `Uint8ClampedArray`) verwenden [feste Breitenkonvertierung für Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion), die zuerst den Dezimalteil der Zahl abschneidet und dann die niedrigsten Bits nimmt.
- `Uint8ClampedArray` klemmt zuerst die Zahl auf den Bereich 0 bis 255 (Werte größer als 255 werden zu 255 und Werte kleiner als 0 werden zu 0). Es _rundet_ dann das Ergebnis auf den nächsten ganzzahligen Wert mit halber Rundung; das heißt, wenn die Zahl genau zwischen zwei Ganzzahlen liegt, wird sie auf die nächste gerade Ganzzahl gerundet. Zum Beispiel wird `0.5` zu `0`, `1.5` zu `2` und `2.5` zu `2`.
- `Float16Array` und `Float32Array` führen eine "Rundung zu gerade" durch, um 64-Bit-Floating-Point-Zahlen in 32-Bit und 16-Bit zu konvertieren. Dies ist derselbe Algorithmus, der von {{jsxref("Math.fround()")}} und {{jsxref("Math.f16round()")}} bereitgestellt wird.

### Verhalten bei Ansicht eines veränderbaren Puffers

Wenn ein `TypedArray` als Ansicht eines [veränderbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#resizing_arraybuffers) erstellt wird, hat das Verändern des zugrunde liegenden Puffers unterschiedliche Auswirkungen auf die Größe des `TypedArray`, abhängig davon, ob das `TypedArray` als längeverfolgend konstruiert wurde.

Wenn ein typisiertes Array ohne spezifische Größe durch Auslassen des dritten Parameters oder durch Übergeben von `undefined` erstellt wird, wird das typisierte Array _längeverfolgend_ und passt sich automatisch an, um den zugrunde liegenden `buffer` anzupassen, während letzterer verändert wird:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

Wenn ein typisiertes Array mit einer spezifischen Größe unter Verwendung des dritten `length`-Parameters erstellt wird, wird es nicht angepasst, um den `buffer` zu enthalten, während letzterer wächst:

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

Wenn ein `buffer` verkleinert wird, kann das betrachtete typisierte Array ungültig werden, in diesem Fall wird die beobachtete Größe des typisierten Arrays auf 0 reduziert. Dies ist der einzige Fall, in dem sich die Länge eines nicht längeverfolgenden typisierten Arrays ändern kann.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

Wenn Sie dann den `buffer` erneut vergrößern, um das typisierte Array wieder innerhalb der Grenzen zu bringen, wird die Größe des typisierten Arrays auf seinen ursprünglichen Wert wiederhergestellt.

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - back in bounds again!
```

Das gleiche kann auch für längeverfolgende typisierte Arrays geschehen, wenn der Puffer über den `byteOffset` hinaus verkleinert wird.

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

Stattdessen erstellen Sie eine Instanz eines typisierten Arrays eines bestimmten Typs, wie beispielsweise eines {{jsxref("Int8Array")}} oder eines {{jsxref("BigInt64Array")}}. Diese Objekte haben alle eine gemeinsame Syntax für ihre Konstruktoren:

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
> Alle Konstruktoren von `TypedArray`-Unterklassen können nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, einen ohne `new` zu rufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `typedArray`
  - : Wenn mit einer Instanz einer `TypedArray`-Unterklasse aufgerufen, wird das `typedArray` in ein neues typisiertes Array kopiert. Bei einem Nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray`-Konstruktor kann der `typedArray`-Parameter nur einer der Nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typen (wie {{jsxref("Int32Array")}}) sein. Ebenso kann bei einem [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray`-Konstruktor ({{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}) der `typedArray`-Parameter nur einer der [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typen sein. Jeder Wert in `typedArray` wird in den entsprechenden Typ des Konstruktors konvertiert, bevor er in das neue Array kopiert wird. Die Länge des neuen typisierten Arrays entspricht der Länge des `typedArray`-Arguments.
- `object`
  - : Wenn mit einem Objekt aufgerufen, das keine `TypedArray`-Instanz ist, wird ein neues typisiertes Array auf dieselbe Weise erstellt wie die Methode [`TypedArray.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from).
- `length` {{optional_inline}}
  - : Wenn mit einem Nicht-Objekt aufgerufen, wird der Parameter als Zahl behandelt, die die Länge des typisierten Arrays angibt. Ein interner Array-Puffer wird im Speicher erstellt, der die Größe `length` multipliziert mit [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes hat und mit Nullen gefüllt ist. Das Weglassen aller Parameter entspricht der Verwendung von `0` als `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : Wenn mit einer [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)- oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)-Instanz und optional einem `byteOffset` und einem `length`-Argument aufgerufen, wird eine neue Sicht auf das angegebene Array-Puffer erstellt. Die Parameter `byteOffset` (in Bytes) und `length` (in Anzahl der Elemente, die jeweils [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes belegen) geben den Speicherbereich an, der durch das typisierte Array angezeigt wird. Wenn beide ausgelassen werden, wird der gesamte `buffer` angezeigt; wenn nur `length` ausgelassen wird, wird der Rest des `buffer` ab `byteOffset` angezeigt. Wenn `length` ausgelassen wird, wird das typisierte Array [längeverfolgend](#verhalten_bei_ansicht_eines_veränderbaren_puffers).

### Ausnahmen

Alle Konstruktoren der `TypeArray`-Unterklassen arbeiten auf dieselbe Weise. Sie werfen alle die folgenden Ausnahmen:

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - Ein `typedArray` wird übergeben, aber es ist ein [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ, während der aktuelle Konstruktor das nicht ist, oder umgekehrt.
    - Ein `typedArray` wird übergeben, aber der Puffer, den es anzeigt, ist getrennt, oder ein getrennter `buffer` wird direkt übergeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - Die neue Länge des typisierten Arrays ist zu groß.
    - Die Länge des `buffer` (wenn der `length`-Parameter nicht angegeben ist) oder `byteOffset` ist kein ganzzahliges Vielfaches der neuen Elementgröße des typisierten Arrays.
    - `byteOffset` ist kein gültiger Array-Index (eine Ganzzahl zwischen 0 und 2<sup>53</sup> - 1).
    - Wenn eine Ansicht von einem Puffer erstellt wird, liegen die Grenzen außerhalb des Puffers. Mit anderen Worten: `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## Statische Eigenschaften

Diese Eigenschaften sind im `TypedArray`-Konstruktorobjekt definiert und werden daher von allen `TypedArray`-Unterklassenkonstruktoren gemeinsam genutzt.

- [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : Die Konstruktorfunktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

Alle `TypedArray`-Unterklassen haben auch die folgenden statischen Eigenschaften:

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray`-Objekte zurück.

## Statische Methoden

Diese Methoden sind im `TypedArray`-Konstruktorobjekt definiert und werden daher von allen `TypedArray`-Unterklassenkonstruktoren gemeinsam genutzt.

- {{jsxref("TypedArray.from()")}}
  - : Erstellt ein neues `TypedArray` aus einem arrayähnlichen oder iterierbaren Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Erstellt ein neues `TypedArray` mit einer variablen Anzahl von Argumenten. Siehe auch {{jsxref("Array.of()")}}.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `TypedArray.prototype` definiert und werden von allen Instanzen der `TypedArray`-Unterklassen gemeinsam genutzt.

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Gibt den {{jsxref("ArrayBuffer")}} zurück, auf den das typisierte Array verweist.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Gibt die Länge (in Bytes) des typisierten Arrays zurück.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Gibt den Versatz (in Bytes) des typisierten Arrays vom Anfang seines {{jsxref("ArrayBuffer")}} zurück.
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. `TypedArray.prototype.constructor` ist die versteckte `TypedArray`-Konstruktorfunktion, aber jede `TypedArray`-Unterklasse definiert auch ihre eigene `constructor`-Eigenschaft.
- {{jsxref("TypedArray.prototype.length")}}
  - : Gibt die Anzahl der Elemente im typisierten Array zurück.
- `TypedArray.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`TypedArray.prototype[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist ein Getter, der denselben String wie der Name des `TypedArray`-Konstruktors zurückgibt. Er gibt `undefined` zurück, wenn der `this`-Wert nicht einer der `TypedArray`-Unterklassen ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `TypedArray` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem typisierten Array als `thisArg` auf.

Alle `TypedArray`-Unterklassen haben auch die folgenden Instanz-Eigenschaften:

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray`-Objekte zurück.

## Instanz-Methoden

Diese Methoden sind im `TypedArray`-Prototyp-Objekt definiert und werden daher von allen Instanz-Objekten der `TypedArray`-Unterklassen gemeinsam genutzt.

- {{jsxref("TypedArray.prototype.at()")}}
  - : Nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück. Diese Methode erlaubt negative Ganzzahlen, die vom letzten Element zurückzählen.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb des Arrays. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Testet, ob alle Elemente im Array die durch eine Funktion bereitgestellte Bedingung erfüllen. Siehe auch {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays von einem Startindex bis zu einem Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen dieses Arrays, für die die bereitgestellte Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Gibt das erste `Element` im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Gibt den ersten Indexwert im Array zurück, der ein Element enthält, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Ruft eine Funktion für jedes Element im Array auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Bestimmt, ob ein typisiertes Array ein bestimmtes Element enthält und gibt entsprechend `true` oder `false` zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Gibt den ersten (kleinsten) Index eines Elements innerhalb des Arrays zurück, das dem spezifizierten Wert entspricht, oder `-1`, wenn keines gefunden wurde. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Verbindet alle Elemente eines Arrays in einen String. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Gibt einen neuen Array-Iterator zurück, der die Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index eines Elements innerhalb des Arrays zurück, das dem spezifizierten Wert entspricht, oder `-1`, wenn keines gefunden wurde. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Erstellt ein neues Array mit den Ergebnissen einer bereitgestellten Funktion, die auf jedes Element in diesem Array angewendet wird. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Führt eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von links nach rechts) aus, um es auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Führt eine Funktion gegen einen Akkumulator und jeden Wert des Arrays (von rechts nach links) aus, um es auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays um — das erste wird zum letzten und das letzte wird zum ersten. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Speichert mehrere Werte im typisierten Array und liest Eingabewerte aus einem angegebenen Array.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Schneidet einen Abschnitt eines Arrays aus und gibt ein neues Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Gibt `true` zurück, wenn mindestens ein Element in diesem Array die bereitgestellte Testfunktion erfüllt. Siehe auch {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays an Ort und Stelle und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Gibt ein neues `TypedArray` aus dem angegebenen Start- und Endelement-Index zurück.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Gibt einen lokalisierten String zurück, der das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das ursprüngliche Array zu verändern.
- {{jsxref("TypedArray.prototype.toSorted()")}}
  - : Gibt ein neues Array mit den Elementen in aufsteigender Reihenfolge sortiert zurück, ohne das ursprüngliche Array zu verändern.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Gibt einen String zurück, der das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.with()")}}
  - : Gibt ein neues Array mit dem Element am gegebenen Index zurück, ersetzt durch den angegebenen Wert, ohne das ursprüngliche Array zu verändern.
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält.

## Beispiele

### Zugriff auf Eigenschaften

Sie können auf Elemente im Array mit der Standardindex-Syntax (das heißt, mit der Klammer-Notation) zugreifen. Das Laden oder Setzen indizierter Eigenschaften in typisierten Arrays wird jedoch nicht in der Prototypenkette nach dieser Eigenschaft suchen, auch wenn die Indizes außerhalb der Grenzen liegen. Indizierte Eigenschaften werden den {{jsxref("ArrayBuffer")}} konsultieren und niemals Objekteigenschaften betrachten. Sie können jedoch weiterhin benannte Eigenschaften verwenden, genau wie bei allen Objekten.

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

Beim Erstellen eines `TypedArray` als Sicht auf ein `ArrayBuffer` muss das `byteOffset`-Argument an die Elementgröße angepasst sein; mit anderen Worten, der Versatz muss ein Vielfaches von `BYTES_PER_ELEMENT` sein.

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

- [Polyfill von typisierten Arrays in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
