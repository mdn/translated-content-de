---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
l10n:
  sourceCommit: 4bfeb5a89c1528da7cb7847a9ccb93f9b00290f0
---

Ein **_TypedArray_** Objekt beschreibt eine array-ähnliche Ansicht eines
zugrunde liegenden [binären Datenpuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).
Es gibt keine globale Eigenschaft namens `TypedArray`, noch gibt es einen
direkt sichtbaren `TypedArray` Konstruktor. Stattdessen gibt es eine Anzahl von
unterschiedlichen globalen Eigenschaften, deren Werte getypte Array-Konstruktoren für spezifische
Elementtypen sind, wie unten aufgelistet. Auf den folgenden Seiten finden Sie allgemeine Eigenschaften und
Methoden, die mit jedem typisierten Array verwendet werden können, das Elemente eines beliebigen Typs enthält.

## Beschreibung

Der `TypedArray` Konstruktor (oft als `%TypedArray%` bezeichnet, um seine "Intrinsicness" anzuzeigen, da es keine globale Eigenschaft gibt, die in einem JavaScript-Programm sichtbar ist) dient als die gemeinsame Superklasse aller `TypedArray` Unterklassen. Betrachten Sie `%TypedArray%` als eine "abstrakte Klasse", die eine gemeinsame Schnittstelle von Dienstmethoden für alle getypten Array-Unterklassen bietet. Dieser Konstruktor ist nicht direkt zugänglich: Es gibt keine globale `TypedArray` Eigenschaft. Er ist nur über `Object.getPrototypeOf(Int8Array)` und ähnliche Zugriffe verfügbar.

Beim Erstellen einer Instanz einer `TypedArray` Unterklasse (z.B. `Int8Array`) wird intern im Speicher ein Array-Puffer erstellt oder, wenn ein `ArrayBuffer` Objekt als Konstruktorargument übergeben wird, wird dieser `ArrayBuffer` stattdessen verwendet. Die Pufferadresse wird als interne Eigenschaft der Instanz gespeichert und alle Methoden von `%TypedArray%.prototype` setzen und rufen Werte auf Basis dieser Array-Pufferadresse ab.

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

### Wertkodierung und Normalisierung

Alle typisierten Arrays arbeiten mit `ArrayBuffer`s, in denen Sie die genaue Byte-Darstellung jedes Elements beobachten können. Wie die Zahlen im Binärformat kodiert werden, ist daher wichtig.

- Nicht signierte Ganzzahl-Arrays (`Uint8Array`, `Uint16Array`, `Uint32Array` und `BigUint64Array`) speichern die Zahl direkt im Binärformat.
- Signierte Ganzzahl-Arrays (`Int8Array`, `Int16Array`, `Int32Array` und `BigInt64Array`) speichern die Zahl mit [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement).
- Gleitkomma-Arrays (`Float16Array`, `Float32Array` und `Float64Array`) speichern die Zahl im [IEEE 754](https://de.wikipedia.org/wiki/IEEE_754) Gleitkommaformat. Die Referenz zu [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) enthält mehr Informationen über das genaue Format. JavaScript-Zahlen verwenden standardmäßig doppelgenaue Gleitkommazahlen, die dasselbe Format wie `Float64Array` haben. `Float32Array` verwendet 23 (anstatt 52) Bits für die Mantisse und 8 (anstatt 11) Bits für den Exponenten. `Float16Array` verwendet 10 Bits für die Mantisse und 5 Bits für den Exponenten. Beachten Sie, dass die Spezifikation erfordert, dass alle {{jsxref("NaN")}} Werte dieselbe Bit-Kodierung verwenden, aber das genaue Bitmuster ist implementierungsabhängig.

- `Uint8ClampedArray` ist ein Sonderfall. Es speichert die Zahl binär wie `Uint8Array`, klemmt jedoch eine außerhalb des Bereichs liegende Zahl in den Bereich 0 bis 255 auf mathematischem Wege, statt die bedeutendsten Bits abzuschneiden.

Alle typisierten Arrays speichern mit Ausnahme von `Int8Array`, `Uint8Array` und `Uint8ClampedArray` jedes Element mit mehreren Bytes. Diese Bytes können entweder von den bedeutendsten zu den am wenigsten bedeutenden (big-endian) oder von den am wenigsten bedeutenden zu den bedeutendsten (little-endian) geordnet werden. Siehe {{Glossary("Endianness", "Endianness")}} für mehr Erklärungen. Typisierte Arrays verwenden immer die native Byte-Reihenfolge der Plattform. Wenn Sie die Endianness beim Schreiben und Lesen von Puffern angeben möchten, sollten Sie stattdessen einen {{jsxref("DataView")}} verwenden.

Beim Schreiben in diese typisierten Arrays werden Werte, die außerhalb des darstellbaren Bereichs liegen, normalisiert.

- Alle Ganzzahl-Arrays (außer `Uint8ClampedArray`) verwenden [fixed-width number conversion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion), die zuerst den Dezimalteil der Zahl abschneidet und dann die niedrigsten Bits nimmt.
- `Uint8ClampedArray` klemmt die Zahl zunächst in den Bereich 0 bis 255 (Werte über 255 werden zu 255 und Werte unter 0 werden zu 0). Es _rundet_ dann (statt den Boden zu nehmen) das Ergebnis zur nächsten ganzen Zahl, mit halbem Wert zu gerader Zahl; das heißt, wenn die Zahl genau zwischen zwei ganzen Zahlen liegt, rundet sie zur nächsten geraden Zahl. Zum Beispiel wird `0.5` zu `0`, `1.5` zu `2`, und `2.5` zu `2`.
- `Float16Array` und `Float32Array` führen ein "round to even" durch, um 64-Bit-Gleitkommazahlen in 32-Bit und 16-Bit zu konvertieren. Dies ist derselbe Algorithmus wie von {{jsxref("Math.fround()")}} und {{jsxref("Math.f16round()")}} bereitgestellt.

### Verhalten beim Anzeigen eines anpassbaren Puffers

Wenn ein `TypedArray` als Ansicht eines [anpassbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#resizing_arraybuffers) erstellt wird, hat die Größenanpassung des zugrundeliegenden Puffers unterschiedliche Auswirkungen auf die Größe des `TypedArray`, abhängig davon, ob das `TypedArray` als Längenverfolgungskonstruktion erstellt wird.

Wird ein getyptes Array ohne eine konkrete Größe erstellt, indem der dritte Parameter weggelassen oder `undefined` übergeben wird, wird das getypte Array _längenverfolgend_ und passt sich mit der Größenänderung des darunterliegenden `buffer` automatisch an:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

Wenn ein getyptes Array mit einer konkreten Größe unter Verwendung des dritten `length` Parameters erstellt wird, passt es sich nicht an, um den `buffer` zu enthalten, wenn dieser wächst:

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

Wird ein `buffer` verkleinert, kann das betrachtete getypte Array aus den Grenzen geraten, in welchem Fall die beobachtete Größe des typisierten Arrays auf 0 reduziert wird. Dies ist der einzige Fall, in dem sich die Länge eines nicht längenverfolgenden typisierten Arrays ändern kann.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

Wächst der `buffer` anschließend wieder, um das typisierte Array wieder in die Grenzen zu bringen, wird die Größe des typisierten Arrays auf den ursprünglichen Wert zurückgesetzt.

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - back in bounds again!
```

Das gleiche kann auch bei längengleitenden getypten Arrays passieren, wenn der Puffer über die `byteOffset` hinaus verkleinert wird.

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

Dieses Objekt kann nicht direkt instanziiert werden - der Versuch, es mit `new` zu konstruieren, wirft einen {{jsxref("TypeError")}}.

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

Wobei `TypedArray` ein Konstruktor für einen der konkreten Typen ist.

> [!NOTE]
> Alle Konstruktoren der `TypedArray` Unterklassen können nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) erstellt werden. Der Versuch, einen ohne `new` zu rufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `typedArray`
  - : Wird es mit einer Instanz einer `TypedArray` Unterklasse aufgerufen, wird das `typedArray` in ein neues typisiertes Array kopiert. Für einen nicht [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray` Konstruktor kann der `typedArray` Parameter nur eines der nicht [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen sein (wie {{jsxref("Int32Array")}}). Ebenso kann für einen [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray` Konstruktor ({{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}) der `typedArray` Parameter nur einer der [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen sein. Jeder Wert in `typedArray` wird in den korrespondierenden Typ des Konstruktors konvertiert, bevor er in das neue Array kopiert wird. Die Länge des neuen typisierten Arrays wird dieselbe sein wie die Länge des `typedArray` Arguments.
- `object`
  - : Wird es mit einem Objekt aufgerufen, das keine `TypedArray` Instanz ist, wird ein neues typisiertes Array auf die gleiche Weise erstellt wie die Methode [`TypedArray.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from).
- `length` {{optional_inline}}
  - : Wird es mit einer nicht-objekthaften Angabe aufgerufen, wird der Parameter als Zahl behandelt, die die Länge des typisierten Arrays angibt. Ein internes Array-Puffer wird im Speicher erstellt, dessen Größe das Produkt aus `length` und [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes ist, gefüllt mit Nullen. Das Weglassen aller Parameter entspricht der Verwendung von `0` als `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : Wird es mit einer Instanz von [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) aufgerufen und optional eines `byteOffset` und eines `length` Arguments, wird eine neue typisierte Array-Ansicht erstellt, die den angegebenen Puffer anzeigt. Die Parameter `byteOffset` (in Bytes) und `length` (in Anzahl der Elemente, die jeweils [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes belegen) spezifizieren den Speicherbereich, der durch die typisierte Array-Ansicht angezeigt wird. Wenn beide weggelassen werden, wird der gesamte `buffer` angezeigt; wenn nur `length` weggelassen wird, wird der verbleibende `buffer` ab dem `byteOffset` angezeigt. Wird `length` weggelassen, wird das typisierte Array [längenverfolgend](#verhalten_beim_anzeigen_eines_anpassbaren_puffers).

### Ausnahmen

Alle Konstruktoren der `TypedArray` Unterklasse arbeiten auf die gleiche Weise. Sie alle würden die folgenden Ausnahmen werfen:

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - Ein `typedArray` wird übergeben, aber es ist ein [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typ, während der aktuelle Konstruktor es nicht ist, oder umgekehrt.
    - Ein `typedArray` wird übergeben, aber der Puffer, den es anzeigt, ist getrennt, oder ein getrenntes `buffer` wird direkt übergeben.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - Die neue Länge des typisierten Arrays ist zu groß.
    - Die Länge von `buffer` (wenn der `length` Parameter nicht angegeben ist) oder `byteOffset` ist kein ganzzahliges Vielfaches der Größe des neuen typisierten Arrays.
    - `byteOffset` ist kein gültiger Array-Index (eine Ganzzahl zwischen 0 und 2<sup>53</sup> - 1).
    - Beim Erstellen einer Ansicht aus einem Puffer liegen die Grenzen außerhalb des Puffers, d.h. `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## Statische Eigenschaften

Diese Eigenschaften sind auf dem `TypedArray` Konstruktorobjekt definiert und werden daher von allen Konstruktoren der `TypedArray` Unterklasse geteilt.

- [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : Die Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

Alle `TypedArray` Unterklassen haben auch die folgenden statischen Eigenschaften:

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray` Objekte zurück.

## Statische Methoden

Diese Methoden sind auf dem `TypedArray` Konstruktorobjekt definiert und werden daher von allen Konstruktoren der `TypedArray` Unterklasse geteilt.

- {{jsxref("TypedArray.from()")}}
  - : Erzeugt ein neues `TypedArray` aus einem array-ähnlichen oder iterierbaren Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Erzeugt ein neues `TypedArray` mit einer variablen Anzahl an Argumenten. Siehe auch {{jsxref("Array.of()")}}.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `TypedArray.prototype` definiert und werden von allen Instanzen der `TypedArray` Unterklasse geteilt.

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Gibt den {{jsxref("ArrayBuffer")}} zurück, auf den das typisierte Array verweist.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Gibt die Länge (in Bytes) des typisierten Arrays zurück.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Gibt den Offset (in Bytes) des typisierten Arrays vom Anfang seines {{jsxref("ArrayBuffer")}} zurück.
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. `TypedArray.prototype.constructor` ist die versteckte `TypedArray` Konstruktionsfunktion, aber jede Unterklasse des typisierten Arrays definiert ebenfalls ihre eigene `constructor` Eigenschaft.
- {{jsxref("TypedArray.prototype.length")}}
  - : Gibt die Anzahl der im typisierten Array enthaltenen Elemente zurück.
- `TypedArray.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`TypedArray.prototype[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist ein Getter, der denselben String wie der Name des Konstruktors des typisierten Arrays zurückgibt. Er gibt `undefined` zurück, falls der `this` Wert nicht einer der Unterklassen des typisierten Arrays ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `TypedArray` jedoch auch eine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString) Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem typisierten Array als `thisArg` auf.

Alle `TypedArray` Unterklassen haben auch die folgenden Instanz-Eigenschaften:

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray` Objekte zurück.

## Instanz-Methoden

Diese Methoden sind auf dem `TypedArray` Prototypobjekt definiert und werden daher von allen Instanzen der `TypedArray` Unterklasse geteilt.

- {{jsxref("TypedArray.prototype.at()")}}
  - : Nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück. Diese Methode erlaubt negative Ganzzahlen, die rückwärts vom letzten Element zählen.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb des Arrays. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Gibt ein neues _Array-Iteratoren_ Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Gibt `false` zurück, wenn es ein Element im Array findet, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls gibt es `true` zurück. Siehe auch {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays vom Startindex bis zum Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen dieses Arrays, für die die bereitgestellte Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Gibt das erste `element` im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Gibt den ersten Indexwert im Array zurück, der ein Element hat, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Ruft eine Funktion für jedes Element im Array auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Bestimmt, ob ein typisiertes Array ein bestimmtes Element enthält und gibt je nach Fall `true` oder `false` zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Gibt den ersten (niedrigsten) Index eines Elements im Array zurück, der dem angegebenen Wert gleich ist, oder `-1`, wenn keiner gefunden wird. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Verbindet alle Elemente eines Arrays zu einem String. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Gibt einen neuen Array-Iterator zurück, der die Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Gibt den letzten (höchsten) Index eines Elements im Array zurück, der dem angegebenen Wert gleich ist, oder `-1`, wenn keiner gefunden wird. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Erstellt ein neues Array mit den Ergebnissen, die durch Aufrufen einer bereitgestellten Funktion für jedes Element in diesem Array entstanden sind. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Wendet eine Funktion auf einen Akkumulator und jeden Wert des Arrays an (von links nach rechts), um es auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Wendet eine Funktion auf einen Akkumulator und jeden Wert des Arrays an (von rechts nach links), um es auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays um — das erste wird zum letzten und das letzte zum ersten. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Speichert mehrere Werte im typisierten Array, indem Eingabewerte aus einem bestimmten Array gelesen werden.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Gibt `true` zurück, wenn es ein Element im Array findet, das die bereitgestellte Testfunktion erfüllt. Andernfalls gibt es `false` zurück. Siehe auch {{jsxref("Array.prototype.some()")}}.
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
  - : Gibt ein neues _Array-Iteratoren_ Objekt zurück, das die Werte für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.with()")}}
  - : Gibt ein neues Array zurück, bei dem das Element an dem gegebenen Index durch den gegebenen Wert ersetzt wird, ohne das ursprüngliche Array zu modifizieren.
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : Gibt ein neues _Array-Iteratoren_ Objekt zurück, das die Werte für jeden Index im Array enthält.

## Beispiele

### Property-Zugriff

Sie können auf Elemente im Array mit der Standard-Array-Indexsyntax zugreifen (das heißt,
unter Verwendung der Klammernotation). Beim Abrufen oder Setzen von indizierten Eigenschaften in typisierten Arrays
wird jedoch nicht in der Prototypenkette nach dieser Eigenschaft gesucht, sogar wenn die Indizes außerhalb
der Grenzen liegen. Indizierte Eigenschaften konsultieren den {{jsxref("ArrayBuffer")}} und
werden niemals Objekteigenschaften betrachten. Sie können weiterhin benannte Eigenschaften verwenden, genau wie bei allen
Objekten.

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

`TypedArray`s, die nicht leer sind, können nicht eingefroren werden, da ihr
zugrunde liegender `ArrayBuffer` durch eine andere
`TypedArray` Ansicht des Puffers verändert werden könnte. Dies würde bedeuten, dass das Objekt
niemals wirklich eingefroren wäre.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset muss ausgerichtet sein

Beim Erstellen eines `TypedArray` als Ansicht auf einem
`ArrayBuffer` muss das `byteOffset` Argument auf seine
Elementgröße ausgerichtet sein; mit anderen Worten, der Offset muss ein Vielfaches
von `BYTES_PER_ELEMENT` sein.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength muss ausgerichtet sein

Ebenso wie der `byteOffset` Parameter muss auch die `byteLength` Eigenschaft eines
`ArrayBuffer`, der an den Konstruktor eines `TypedArray` übergeben wird,
ein Vielfaches von `BYTES_PER_ELEMENT` des Konstruktors sein.

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
