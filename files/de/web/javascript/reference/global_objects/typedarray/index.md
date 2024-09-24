---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Ein **_TypedArray_** Objekt beschreibt eine array-ähnliche Sicht auf einen
zugrunde liegenden [Binärdatenpuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).
Es gibt keine globale Eigenschaft mit dem Namen `TypedArray`, noch gibt es einen
direkt sichtbaren `TypedArray` Konstruktor. Stattdessen gibt es eine Reihe von
verschiedenen globalen Eigenschaften, deren Werte Konstruktoren für typspezifische Arrays sind, die nachfolgend aufgelistet sind. Auf den folgenden Seiten finden Sie gemeinsame Eigenschaften und
Methoden, die mit jedem Typed Array verwendet werden können, das Elemente eines beliebigen Typs enthält.

{{EmbedInteractiveExample("pages/js/typedarray-constructor.html")}}

## Beschreibung

Der `TypedArray` Konstruktor (oft als `%TypedArray%` bezeichnet, um seine "intrinsische" Natur anzuzeigen, da er keinem exponierten globalen JavaScript-Programm entspricht) dient als gemeinsame Superklasse aller `TypedArray` Unterklassen. Betrachten Sie `%TypedArray%` als eine "abstrakte Klasse", die eine gemeinsame Schnittstelle von Hilfsmethoden für alle Typed Array-Unterklassen bereitstellt. Dieser Konstruktor ist nicht direkt zugänglich: Es gibt keine globale `TypedArray` Eigenschaft. Er ist nur über `Object.getPrototypeOf(Int8Array)` und ähnliches zugänglich.

Beim Erstellen einer Instanz einer `TypedArray` Unterklasse (z.B. `Int8Array`) wird ein Array-Puffer intern im Speicher erstellt oder, wenn ein `ArrayBuffer` Objekt als Konstruktor-Argument angegeben wird, wird dieser `ArrayBuffer` stattdessen verwendet. Die Pufferadresse wird als interne Eigenschaft der Instanz gespeichert und alle Methoden von `%TypedArray%.prototype` setzen und holen Werte basierend auf dieser Array-Pufferadresse.

### TypedArray Objekte

| Typ                             | Wertebereich                              | Größe in Bytes    | Web IDL Typ           |
| ------------------------------- | ----------------------------------------- | ----------------- | --------------------- |
| {{jsxref("Int8Array")}}         | -128 bis 127                              | 1                 | `byte`                |
| {{jsxref("Uint8Array")}}        | 0 bis 255                                 | 1                 | `octet`               |
| {{jsxref("Uint8ClampedArray")}} | 0 bis 255                                 | 1                 | `octet`               |
| {{jsxref("Int16Array")}}        | -32768 bis 32767                          | 2                 | `short`               |
| {{jsxref("Uint16Array")}}       | 0 bis 65535                               | 2                 | `unsigned short`      |
| {{jsxref("Int32Array")}}        | -2147483648 bis 2147483647                | 4                 | `long`                |
| {{jsxref("Uint32Array")}}       | 0 bis 4294967295                          | 4                 | `unsigned long`       |
| {{jsxref("Float16Array")}}      | `-65504` bis `65504`                      | 2                 | N/A                   |
| {{jsxref("Float32Array")}}      | `-3.4e38` bis `3.4e38`                    | 4                 | `unrestricted float`  |
| {{jsxref("Float64Array")}}      | `-1.8e308` bis `1.8e308`                  | 8                 | `unrestricted double` |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> bis 2<sup>63</sup> - 1    | 8                 | `bigint`              |
| {{jsxref("BigUint64Array")}}    | 0 bis 2<sup>64</sup> - 1                  | 8                 | `bigint`              |

### Wertkodierung und Normalisierung

Alle Typed Arrays arbeiten mit `ArrayBuffer`s, bei denen Sie die genaue Byte-Darstellung jedes Elements beobachten können, daher ist es entscheidend, wie die Zahlen im binären Format kodiert sind.

- Unsigned Integer Arrays (`Uint8Array`, `Uint16Array`, `Uint32Array` und `BigUint64Array`) speichern die Zahl direkt im Binärformat.
- Signed Integer Arrays (`Int8Array`, `Int16Array`, `Int32Array` und `BigInt64Array`) speichern die Zahl mithilfe der [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement).
- Gleitkomma-Arrays (`Float16Array`, `Float32Array` und `Float64Array`) speichern die Zahl mithilfe des [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) Gleitkommaformats. Die Referenz [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) enthält weitere Informationen über das genaue Format. JavaScript-Zahlen verwenden standardmäßig das doppelte Gleitkommaformat, das mit `Float64Array` identisch ist. `Float32Array` verwendet 23 (anstelle von 52) Bits für die Mantisse und 8 (anstelle von 11) Bits für den Exponenten. `Float16Array` verwendet 10 Bits für die Mantisse und 5 Bits für den Exponenten. Beachten Sie, dass die Spezifikation erfordert, dass alle {{jsxref("NaN")}} Werte dieselbe Bit-Kodierung verwenden, aber das genaue Bitmuster ist plattformabhängig.
- `Uint8ClampedArray` ist ein Sonderfall. Es speichert die Zahl binär wie `Uint8Array`, aber wenn Sie eine Zahl außerhalb des Bereichs speichern, wird die Zahl im Bereich 0 bis 255 durch den mathematischen Wert _geklammert_, anstatt die höchstwertigen Bits abzuschneiden.

Alle Typed Arrays außer `Int8Array`, `Uint8Array` und `Uint8ClampedArray` speichern jedes Element mit mehreren Bytes. Diese Bytes können entweder vom bedeutendsten zum am wenigsten bedeutenden (Big-Endian) oder vom am wenigsten bedeutenden zum bedeutendsten (Little-Endian) geordnet sein. Siehe [Endianness](/de/docs/Glossary/Endianness) für eine weitere Erklärung. Typed Arrays verwenden immer die native Byte-Reihenfolge der Plattform. Wenn Sie das Endianness beim Lesen und Schreiben von Pufferdaten angeben möchten, sollten Sie stattdessen einen {{jsxref("DataView")}} verwenden.

Beim Schreiben in diese Typed Arrays werden Werte, die außerhalb des darstellbaren Bereichs liegen, normalisiert.

- Alle Integer Arrays (außer `Uint8ClampedArray`) verwenden [fixed-width number conversion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion), die zunächst den Dezimalteil der Zahl abschneidet und dann die niedrigsten Bits übernehmen.
- `Uint8ClampedArray` klemmt die Zahl zuerst in den Bereich von 0 bis 255 (Werte größer als 255 werden 255 und Werte kleiner als 0 werden 0). Dann wird das Ergebnis auf die nächstgelegene ganze Zahl _gerundet_ (anstatt den Rest abzuschneiden) nach dem half-to-even Prinzip; das bedeutet, wenn die Zahl genau zwischen zwei ganzen Zahlen liegt, wird sie auf die nächste gerade ganze Zahl gerundet. Zum Beispiel wird `0,5` zu `0`, `1,5` zu `2` und `2,5` zu `2`.
- `Float16Array` und `Float32Array` führen ein "runden auf gerade" aus, um 64-Bit Gleitkommazahlen in 32-Bit und 16-Bit zu konvertieren. Dies ist derselbe Algorithmus, wie er von {{jsxref("Math.fround()")}} und {{jsxref("Math.f16round()")}} bereitgestellt wird.

### Verhalten beim Betrachten eines skalierbaren Puffer

Wenn ein `TypedArray` als Ansicht eines [skalierbaren Puffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#resizing_arraybuffers) erstellt wird, hat das Ändern der Größe des zugrunde liegenden Puffers unterschiedliche Auswirkungen auf die Größe des `TypedArray`, abhängig davon, ob das `TypedArray` als längeverfolgend konstruiert ist.

Wenn ein Typed Array ohne eine bestimmte Größe erstellt wird, indem der dritte Parameter weggelassen oder `undefined` übergeben wird, wird das Typed Array _längeverfolgend_ und wird automatisch verkleinert oder erweitert, um den zugrunde liegenden `buffer` anzupassen, während letzterer skaliert wird:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

Wenn ein Typed Array mit einer spezifischen Größe unter Verwendung des dritten `length` Parameters erstellt wird, wird es die Größe des `buffer` nicht anpassen, wenn letzterer wächst:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0, der Anfangswert

buffer.resize(12);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0, der Anfangswert
```

Wenn ein `buffer` verkleinert wird, kann das betrachtete Typed Array außerhalb des Bereichs liegen, in welchem Fall die beobachtete Größe des Typed Array auf 0 sinkt. Dies ist der einzige Fall, in dem sich die Länge eines nicht-längeverfolgenden Typed Array ändern kann.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

Wenn Sie den `buffer` anschließend erneut vergrößern, um das Typed Array wieder in das zulässige Bereich zu bringen, wird die Größe des Typed Array auf seinen ursprünglichen Wert zurückgesetzt.

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - wieder im Bereich!
```

Dasselbe kann auch bei längeverfolgenden Typed Arrays passieren, wenn der Buffer unterhalb des `byteOffset` verkleinert wird.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 4);
// float32 ist längeverfolgend, aber es erstreckt sich nur vom 4. Byte
// bis zum Ende des Buffers, daher wird das Typed Array
// außer Reichweite, wenn der Buffer auf eine Länge
// kleiner als 4 Bytes verkleinert wird
buffer.resize(3);
console.log(float32.byteLength); // 0
```

## Konstruktor

Dieses Objekt kann nicht direkt instanziiert werden — der Versuch, es mit `new` zu konstruieren, löst einen {{jsxref("TypeError")}} aus.

```js
new (Object.getPrototypeOf(Int8Array))();
// TypeError: Abstract class TypedArray not directly constructable
```

Stattdessen erstellen Sie eine Instanz eines Typed Arrays eines bestimmten Typs, wie z.B. eines {{jsxref("Int8Array")}} oder eines {{jsxref("BigInt64Array")}}. Diese Objekte haben alle eine gemeinsame Syntax für ihre Konstruktoren:

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
> Alle Konstruktoren der `TypedArray` Unterklassen können nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, einen ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `typedArray`
  - : Bei Aufruf mit einer Instanz einer `TypedArray` Unterklasse wird das `typedArray` in ein neues Typen-Array kopiert. Für einen Nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray` Konstruktor kann der `typedArray` Parameter nur eines der Nicht-[bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen sein (wie z.B. {{jsxref("Int32Array")}}). Ebenso kann für einen [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray` Konstruktor ({{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}) der `typedArray` Parameter nur einer der [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typen sein. Jeder Wert in `typedArray` wird in den entsprechenden Typ des Konstruktors konvertiert, bevor sie in das neue Array kopiert werden. Die Länge des neuen Typed Array wird dieselbe sein wie die Länge des `typedArray` Arguments.
- `object`
  - : Bei Aufruf mit einem Objekt, das keine `TypedArray` Instanz ist, wird ein neues Typed Array auf die gleiche Weise erstellt, wie es die Methode [`TypedArray.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from) tut.
- `length` {{optional_inline}}
  - : Bei Aufruf mit einem Nicht-Objekt wird der Parameter als eine Zahl behandelt, die die Länge des Typed Arrays angibt. Ein interner Array-Puffer wird im Speicher erstellt, dessen Größe die `length` multipliziert mit der Anzahl der [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes ist, gefüllt mit Nullen. Das Weglassen aller Parameter entspricht der Verwendung von `0` als `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : Bei Aufruf mit einer [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) Instanz und optional einem `byteOffset` und einem `length` Argument wird eine neue Typed Array Ansicht erstellt, die den angegebenen Puffer betrachtet. Die Parameter `byteOffset` (in Bytes) und `length` (in Anzahl der Elemente, jedes belegt [`BYTES_PER_ELEMENT`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) Bytes) geben den Speicherbereich an, der durch die Typed Array Ansicht offengelegt wird. Wenn beide weggelassen werden, wird der gesamte `buffer` betrachtet; wenn nur `length` weggelassen wird, wird der verbleibende `buffer`, beginnend bei `byteOffset`, betrachtet. Wenn `length` weggelassen wird, wird das Typed Array [längeverfolgend](#verhalten_beim_betrachten_eines_skalierbaren_puffer).

### Ausnahmen

Alle Konstruktoren der `TypeArray` Unterklassen funktionieren auf die gleiche Weise. Sie würden alle die folgenden Ausnahmen werfen:

- {{jsxref("TypeError")}}
  - : Wenn einer der folgenden Fälle zutrifft:
    - Ein `typedArray` wird übergeben, aber es handelt sich um einen [bigint](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typ, während der aktuelle Konstruktor dies nicht ist, oder umgekehrt.
    - Ein `typedArray` wird übergeben, aber der Puffer, den es betrachtet, ist getrennt, oder ein getrennter `buffer` wird direkt übergeben.
- {{jsxref("RangeError")}}
  - : Wenn einer der folgenden Fälle zutrifft:
    - Die Länge des neuen Typed Array ist zu groß.
    - Die Länge des `buffer` (wenn der `length` Parameter nicht angegeben ist) oder `byteOffset` ist kein ganzzahliges Vielfaches der Elementgröße des neuen Typed Array.
    - `byteOffset` ist kein gültiger Array-Index (eine ganze Zahl zwischen 0 und 2<sup>53</sup> - 1).
    - Wenn eine Ansicht von einem Puffer erstellt wird, liegen die Grenzen außerhalb des Puffers. Mit anderen Worten, `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## Statische Eigenschaften

Diese Eigenschaften sind auf dem `TypedArray` Konstruktorobjekt definiert und werden daher von allen Konstruktoren der `TypedArray` Unterklassen geteilt.

- [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : Die Konstruktorfunktion, die zum Erstellen von abgeleiteten Objekten verwendet wird.

Alle `TypedArray` Unterklassen haben auch die folgenden statischen Eigenschaften:

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray` Objekte zurück.

## Statische Methoden

Diese Methoden sind auf dem `TypedArray` Konstruktorobjekt definiert und werden daher von allen Konstruktoren der `TypedArray` Unterklassen geteilt.

- {{jsxref("TypedArray.from()")}}
  - : Erstellt ein neues `TypedArray` aus einem array-ähnlichen oder iterierbaren Objekt. Siehe auch {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Erstellt ein neues `TypedArray` mit einer variablen Anzahl von Argumenten. Siehe auch {{jsxref("Array.of()")}}.

## Instanzeigenschaften

Diese Eigenschaften sind auf `TypedArray.prototype` definiert und werden von allen Instanzen der `TypedArray` Unterklassen geteilt.

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Gibt den {{jsxref("ArrayBuffer")}} zurück, auf den das Typed Array verweist.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Gibt die Länge (in Bytes) des Typed Array zurück.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Gibt den Offset (in Bytes) des Typed Array vom Anfang seines {{jsxref("ArrayBuffer")}} zurück.
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. `TypedArray.prototype.constructor` ist die versteckte `TypedArray` Konstruktorfunktion, aber jede Typed Array Unterklasse definiert auch ihre eigene `constructor` Eigenschaft.
- {{jsxref("TypedArray.prototype.length")}}
  - : Gibt die Anzahl der im Typed Array gehaltenen Elemente zurück.
- `TypedArray.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`TypedArray.prototype[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist ein Getter, der dieselbe Zeichenkette wie der Name des Typed Array Konstruktor zurückgibt. Er gibt `undefined` zurück, wenn der `this` Wert nicht einer der Typed Array Unterklassen ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `TypedArray` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString) Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Typed Array als `thisArg` auf.

Alle `TypedArray` Unterklassen haben auch die folgenden Instanzeigenschaften:

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße für die verschiedenen `TypedArray` Objekte zurück.

## Instanzmethoden

Diese Methoden sind auf dem `TypedArray` Prototypobjekt definiert und werden daher von allen Instanzen der `TypedArray` Unterklassen geteilt.

- {{jsxref("TypedArray.prototype.at()")}}
  - : Nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück. Diese Methode erlaubt negative ganze Zahlen, die vom letzten Element zurückzählen.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb des Arrays. Siehe auch {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Testet, ob alle Elemente im Array den durch eine Funktion bereitgestellten Test bestehen. Siehe auch {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays vom Startindex bis zum Endindex mit einem statischen Wert. Siehe auch {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Erstellt ein neues Array mit allen Elementen dieses Arrays, für die die bereitgestellte Filterfunktion `true` zurückgibt. Siehe auch {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Gibt das erste `Element` im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein entsprechendes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Gibt den ersten Indexwert im Array zurück, der ein Element hat, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein entsprechendes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein entsprechendes Element gefunden wird. Siehe auch {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das eine bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein entsprechendes Element gefunden wurde. Siehe auch {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Ruft eine Funktion für jedes Element im Array auf. Siehe auch {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Bestimmt, ob ein Typed Array ein bestimmtes Element enthält und gibt `true` oder `false` entsprechend zurück. Siehe auch {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Gibt den ersten (kleinsten) Index eines Elements innerhalb des Arrays zurück, das mit dem angegebenen Wert gleich ist, oder `-1`, wenn keines gefunden wird. Siehe auch {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Verkettet alle Elemente eines Arrays zu einem String. Siehe auch {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Gibt einen neuen Array-Iterator zurück, der die Schlüssel für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index eines Elements innerhalb des Arrays zurück, das mit dem angegebenen Wert identisch ist, oder `-1`, wenn keines gefunden wird. Siehe auch {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Erstellt ein neues Array mit den Ergebnissen des Aufrufs einer bereitgestellten Funktion auf jedem Element in diesem Array. Siehe auch {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Wendet eine Funktion auf einen Akkumulator und jeden Wert des Arrays an (von links nach rechts), um ihn auf einen einzelnen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Wendet eine Funktion auf einen Akkumulator und jeden Wert des Arrays an (von rechts nach links), um ihn auf einen einzigen Wert zu reduzieren. Siehe auch {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente im Array um — das erste wird das letzte und das letzte wird das erste. Siehe auch {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Speichert mehrere Werte im Typed Array, wobei Eingabewerte aus einem angegebenen Array gelesen werden.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück. Siehe auch {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Gibt `true` zurück, wenn mindestens ein Element in diesem Array die bereitgestellte Testfunktion erfüllt. Siehe auch {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays in-place und gibt das Array zurück. Siehe auch {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Gibt ein neues `TypedArray` aus dem angegebenen Start- und Ende-Elementindex zurück.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Gibt eine lokalisierte Zeichenkette zurück, die das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das Original-Array zu ändern.
- {{jsxref("TypedArray.prototype.toSorted()")}}
  - : Gibt ein neues Array mit den Elementen in aufsteigender Reihenfolge zurück, ohne das Original-Array zu ändern.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die das Array und seine Elemente darstellt. Siehe auch {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält. Siehe auch {{jsxref("Array.prototype.values()")}}.
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im Array enthält.

## Beispiele

### Eigenschaftszugriff

Sie können auf Elemente im Array mit der Standard-Array-Index-Syntax (d.h., mit Klammernotierung) zugreifen. Das Abrufen oder Setzen von indizierten Eigenschaften auf Typed Arrays wird jedoch nicht in der Prototypenkette nach dieser Eigenschaft suchen, auch wenn die Indizes außerhalb des Bereichs liegen. Indizierte Eigenschaften werden den {{jsxref("ArrayBuffer")}} konsultieren und niemals nach Objekteigenschaften suchen. Sie können jedoch immer noch benannte Eigenschaften verwenden, genau wie bei allen Objekten.

```js
// Einstellen und Abrufen mit Standard-Array-Syntax
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// Indizierte Eigenschaften auf Prototypen werden nicht konsultiert (Fx 25)
Int8Array.prototype[20] = "foo";
new Int8Array(32)[20]; // 0
// Auch wenn sie außerhalb des Bereichs sind
Int8Array.prototype[20] = "foo";
new Int8Array(8)[20]; // undefined
// Oder mit negativen ganzen Zahlen
Int8Array.prototype[-1] = "foo";
new Int8Array(8)[-1]; // undefined

// Benannte Eigenschaften sind jedoch erlaubt (Fx 30)
Int8Array.prototype.foo = "bar";
new Int8Array(32).foo; // "bar"
```

### Kann nicht eingefroren werden

`TypedArray`s, die nicht leer sind, können nicht eingefroren werden, da ihr
zuggrunde liegender `ArrayBuffer` durch eine andere `TypedArray` Ansicht des Puffers mutiert werden könnte. Dies würde bedeuten, dass das Objekt niemals wirklich eingefroren wäre.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset muss ausgerichtet sein

Beim Erstellen eines `TypedArray` als Ansicht auf einen
`ArrayBuffer` muss das `byteOffset` Argument auf seine Elementgröße ausgerichtet sein; mit anderen Worten, der Offset muss ein Vielfaches von `BYTES_PER_ELEMENT` sein.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength muss ausgerichtet sein

Wie der `byteOffset` Parameter muss auch die `byteLength` Eigenschaft eines
`ArrayBuffer`, der an einen `TypedArray` Konstruktor übergeben wird, ein Vielfaches von `BYTES_PER_ELEMENT` des Konstruktors sein.

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
- {{domxref("TextDecoder")}}
