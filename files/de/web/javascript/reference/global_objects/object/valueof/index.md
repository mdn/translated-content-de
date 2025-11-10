---
title: Object.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

Die **`valueOf()`**-Methode von {{jsxref("Object")}} Instanzen konvertiert den `this` Wert [zu einem Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). Diese Methode soll von abgeleiteten Objekten für benutzerdefinierte [Typumwandlungslogik](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) überschrieben werden.

{{InteractiveExample("JavaScript Demo: Object.prototype.valueOf()")}}

```js interactive-example
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object = new MyNumberType(4);

console.log(object + 3);
// Expected output: 7
```

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Der `this` Wert, konvertiert zu einem Objekt.

> [!NOTE]
> Damit `valueOf` während der Typumwandlung nützlich ist, muss es einen primitiven Wert zurückgeben. Da alle primitiven Typen ihre eigenen `valueOf()`-Methoden haben, ruft das Aufrufen von `primitiveValue.valueOf()` im Allgemeinen nicht `Object.prototype.valueOf()` auf.

## Beschreibung

JavaScript ruft die `valueOf`-Methode auf, um [ein Objekt in einen primitiven Wert zu konvertieren](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). Sie müssen die `valueOf`-Methode selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn es auf ein Objekt stößt, wo ein primitiver Wert erwartet wird.

Diese Methode wird vorrangig von [numerischer Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und [primitiver Konvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) aufgerufen, aber [String-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) ruft priorisiert `toString()` auf, und `toString()` wird sehr wahrscheinlich einen String-Wert zurückgeben (selbst für die {{jsxref("Object.prototype.toString()")}} Basisimplementierung), so dass `valueOf()` in diesem Fall normalerweise nicht aufgerufen wird.

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [`null`-Prototyp Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toString()`-Methode. Die `Object.prototype.valueOf()`-Basisimplementierung ist absichtlich nutzlos: Indem sie ein Objekt zurückgibt, wird ihr Rückgabewert niemals von einem [Primitive Conversion Algorithmus](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) verwendet. Viele eingebaute Objekte überschreiben diese Methode, um einen geeigneten primitiven Wert zurückzugeben. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `valueOf()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, damit Ihr benutzerdefiniertes Objekt in einen primitiven Wert umgewandelt werden kann. Im Allgemeinen wird `valueOf()` verwendet, um einen Wert zurückzugeben, der für das Objekt am bedeutungsvollsten ist — im Gegensatz zu `toString()`, muss es kein String sein. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess erlaubt und immer gegenüber `valueOf` oder `toString` für jede Art von Typumwandlung bevorzugt wird.

## Beispiele

### Verwendung von valueOf()

Die Basis-`valueOf()`-Methode gibt den `this`-Wert selbst zurück, konvertiert in ein Objekt, falls es nicht bereits eins ist. Daher wird ihr Rückgabewert niemals von einem primitiven Konvertierungsalgorithmus verwendet.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### Überschreiben von valueOf für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`valueOf`-Methode aufgerufen wird. Ihre Funktion sollte keine Argumente annehmen, da sie bei der Typumwandlung keine erhalten wird.

Zum Beispiel können Sie eine `valueOf`-Methode zu Ihrer benutzerdefinierten Klasse `Box` hinzufügen.

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

Mit dem vorherigen Code wird jedes Mal, wenn ein Objekt vom Typ `Box` in einem Kontext verwendet wird, in dem es als primitiver Wert (aber nicht speziell als String) dargestellt werden soll, die im vorherigen Code definierte Funktion automatisch von JavaScript aufgerufen.

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

Die `valueOf`-Methode eines Objekts wird normalerweise von JavaScript aufgerufen, aber Sie können sie selbst wie folgt aufrufen:

```js
box.valueOf();
```

### Verwendung des einstelligen Pluszeichens bei Objekten

[Einseitiges Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) führt [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) auf seinem Operanden durch, was bei den meisten Objekten ohne [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) bedeutet, dass dessen `valueOf()` aufgerufen wird. Wenn jedoch das Objekt keine benutzerdefinierte `valueOf()`-Methode hat, wird es von der Basisimplementierung ignoriert und stattdessen der Rückgabewert von `toString()` verwendet.

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
