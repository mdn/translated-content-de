---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die **`valueOf()`** Methode der {{jsxref("Object")}} Instanzen konvertiert den `this` Wert [in ein Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). Diese Methode ist dafür gedacht, von abgeleiteten Objekten für benutzerdefinierte [Typkonvertierungslogik](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) überschrieben zu werden.

{{InteractiveExample("JavaScript Demo: Object.prototype.valueOf()")}}

```js interactive-example
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object1 = new MyNumberType(4);

console.log(object1 + 3);
// Expected output: 7
```

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Der `this` Wert, der in ein Objekt konvertiert wird.

> [!NOTE]
> Damit `valueOf` während der Typkonvertierung nützlich ist, muss es einen primitiven Wert zurückgeben. Da alle primitiven Typen ihre eigenen `valueOf()` Methoden haben, ruft das Aufrufen von `aPrimitiveValue.valueOf()` im Allgemeinen nicht `Object.prototype.valueOf()` auf.

## Beschreibung

JavaScript ruft die Methode `valueOf` auf, um [ein Objekt in einen primitiven Wert zu konvertieren](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). Sie müssen die Methode `valueOf` selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt vorliegt, wo ein primitiver Wert erwartet wird.

Diese Methode wird vorrangig bei [numerischer Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und [primitiver Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) aufgerufen, aber bei [Zeichenfolgenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird vorrangig `toString()` aufgerufen, und `toString()` gibt sehr wahrscheinlich einen Zeichenfolgenwert zurück (selbst bei der {{jsxref("Object.prototype.toString()")}} Basisimplementierung), sodass `valueOf()` in diesem Fall normalerweise nicht aufgerufen wird.

Alle Objekte, die von `Object.prototype` erben (das heißt alle außer [Objekten mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die Methode `toString()`. Die Basisimplementierung von `Object.prototype.valueOf()` ist absichtlich nutzlos: Indem sie ein Objekt zurückgibt, wird ihr Rückgabewert nie von einem [Algorithmus zur primitiven Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) verwendet. Viele eingebaute Objekte überschreiben diese Methode, um einen geeigneten primitiven Wert zurückzugeben. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `valueOf()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, sodass Ihr benutzerdefiniertes Objekt in einen primitiven Wert konvertiert werden kann. Im Allgemeinen wird `valueOf()` verwendet, um einen Wert zurückzugeben, der für das Objekt am aussagekräftigsten ist — anders als `toString()`, muss es sich dabei nicht um eine Zeichenkette handeln. Alternativ können Sie eine Methode [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess erlaubt und immer gegenüber `valueOf` oder `toString` bei jeder Typkonvertierung bevorzugt wird.

## Beispiele

### Verwendung von valueOf()

Die Basis `valueOf()` Methode gibt den `this` Wert selbst zurück, in ein Objekt konvertiert, falls es noch keines ist. Daher wird ihr Rückgabewert nie von einem Algorithmus zur primitiven Konvertierung verwendet.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### Überschreiben von valueOf für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standardmethode `valueOf` aufgerufen wird. Ihre Funktion sollte keine Argumente annehmen, da sie beim Aufruf während der Typkonvertierung keine erhält.

Zum Beispiel können Sie eine `valueOf` Methode zu Ihrer benutzerdefinierten Klasse `Box` hinzufügen.

```js
class Box {
  #value;
  constructor(value) {
    this.#value = value;
  }
  valueOf() {
    return this.#value;
  }
}
```

Mit dem vorhergehenden Code wird jedes Mal, wenn ein Objekt vom Typ `Box` in einem Kontext verwendet wird, in dem es als primitiver Wert (aber nicht speziell als Zeichenfolge) dargestellt werden soll, die im vorhergehenden Code definierte Funktion automatisch von JavaScript aufgerufen.

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

Die `valueOf` Methode eines Objekts wird in der Regel von JavaScript aufgerufen, aber Sie können sie selbst wie folgt aufrufen:

```js
box.valueOf();
```

### Verwendung des unären Plus auf Objekten

[Unäres Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) führt eine [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) auf seinen Operanden durch, was für die meisten Objekte ohne [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) bedeutet, dass `valueOf()` aufgerufen wird. Hat das Objekt jedoch keine benutzerdefinierte `valueOf()` Methode, wird die Basisimplementierung dazu führen, dass `valueOf()` ignoriert wird und stattdessen der Rückgabewert von `toString()` verwendet wird.

```js
+new Date(); // the current timestamp; same as new Date().getTime()
+{}; // NaN (toString() returns "[object Object]")
+[]; // 0 (toString() returns an empty string list)
+[1]; // 1 (toString() returns "1")
+[1, 2]; // NaN (toString() returns "1,2")
+new Set([1]); // NaN (toString() returns "[object Set]")
+{ valueOf: () => 42 }; // 42
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
