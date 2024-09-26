---
title: Array.prototype.toSpliced()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSpliced
l10n:
  sourceCommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{JSRef}}

Die **`toSpliced()`**-Methode von {{jsxref("Array")}} Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Version der {{jsxref("Array/splice", "splice()")}} Methode. Sie gibt ein neues Array mit einigen entfernten und/oder an einem bestimmten Index ersetzten Elementen zurück.

## Syntax

```js-nolint
toSpliced(start)
toSpliced(start, deleteCount)
toSpliced(start, deleteCount, item1)
toSpliced(start, deleteCount, item1, item2)
toSpliced(start, deleteCount, item1, item2, /* …, */ itemN)
```

### Parameter

- `start`

  - : Nullbasierter Index, an dem das Array geändert werden soll, [in eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts vom Ende des Arrays – wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length`, wird kein Element gelöscht, aber die Methode wird wie eine Hinzufügemethode funktionieren, die so viele Elemente hinzufügt, wie angegeben.

- `deleteCount` {{optional_inline}}

  - : Eine Ganzzahl, die die Anzahl der Elemente im Array angibt, die ab `start` entfernt werden sollen.

    Wenn `deleteCount` weggelassen wird oder wenn sein Wert größer oder gleich der Anzahl der Elemente nach der durch `start` angegebenen Position ist, werden alle Elemente von `start` bis zum Ende des Arrays gelöscht. Wenn Sie jedoch irgendwelche `itemN`-Parameter übergeben möchten, sollten Sie `Infinity` als `deleteCount` übergeben, um alle Elemente nach `start` zu löschen, da ein explizites `undefined` in `0` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) wird.

    Wenn `deleteCount` `0` oder negativ ist, werden keine Elemente entfernt.
    In diesem Fall sollten Sie mindestens ein neues Element angeben (siehe unten).

- `item1`, …, `itemN` {{optional_inline}}

  - : Die hinzuzufügenden Elemente beginnen bei `start`.

    Wenn Sie keine Elemente angeben, wird `toSpliced()` nur Elemente aus dem Array entfernen.

### Rückgabewert

Ein neues Array, das aus allen Elementen vor `start`, `item1`, `item2`, …, `itemN` und allen Elementen nach `start + deleteCount` besteht.

## Beschreibung

Die `toSpliced()`-Methode, ähnlich wie `splice()`, erledigt mehrere Dinge gleichzeitig: Sie entfernt die angegebene Anzahl an Elementen aus dem Array, beginnend bei einem bestimmten Index, und fügt dann die angegebenen Elemente am gleichen Index ein. Sie gibt jedoch ein neues Array zurück, anstatt das ursprüngliche Array zu modifizieren. Die gelöschten Elemente werden daher nicht von dieser Methode zurückgegeben.

Die `toSpliced()`-Methode erzeugt niemals ein [dünn besetztes Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). Wenn das Quellarray dünn besetzt ist, werden die leeren Plätze im neuen Array mit `undefined` ersetzt.

Die `toSpliced()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-gekennzeichnete Eigenschaften hat.

## Beispiele

### Löschen, Hinzufügen und Ersetzen von Elementen

Sie können `toSpliced()` verwenden, um Elemente in einem Array zu löschen, hinzuzufügen und zu ersetzen und effizienter als mit `slice()` und `concat()` ein neues Array zu erzeugen.

```js
const months = ["Jan", "Mar", "Apr", "May"];

// Einfügen eines Elements an Index 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Löschen von zwei Elementen ab Index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Ersetzen eines Elements an Index 1 durch zwei neue Elemente
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Ursprüngliches Array wird nicht modifiziert
console.log(months); // ["Jan", "Mar", "Apr", "May"]
```

### Verwendung von toSpliced() auf dünn besetzten Arrays

Die `toSpliced()`-Methode erzeugt immer ein dicht besetztes Array.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]
```

### Aufrufen von toSpliced() auf Nicht-Array-Objekten

Die `toSpliced()`-Methode liest die `length`-Eigenschaft von `this`. Sie liest dann die integer-gekennzeichneten benötigten Eigenschaften und schreibt sie in das neue Array.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.toSpliced.call(arrayLike, 0, 1, 2, 3));
// [2, 3, undefined, 4]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.toSpliced` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.with()")}}