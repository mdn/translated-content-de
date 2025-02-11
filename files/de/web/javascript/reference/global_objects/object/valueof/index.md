---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`valueOf()`**-Methode von {{jsxref("Object")}}-Instanzen wandelt den `this`-Wert [in ein Objekt um](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). Diese Methode soll von abgeleiteten Objekten überschrieben werden, um eigene [Typkonvertierungslogik](/de/docs/Web/JavaScript/Data_structures#type_coercion) zu implementieren.

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

Der `this`-Wert, umgewandelt in ein Objekt.

> [!NOTE]
> Damit `valueOf` bei der Typkonvertierung nützlich ist, muss es einen primitiven Wert zurückgeben. Da alle primitiven Typen eigene `valueOf()`-Methoden besitzen, ruft der Aufruf von `aPrimitiveValue.valueOf()` in der Regel nicht `Object.prototype.valueOf()` auf.

## Beschreibung

JavaScript ruft die `valueOf`-Methode auf, um [ein Objekt in einen primitiven Wert umzuwandeln](/de/docs/Web/JavaScript/Data_structures#type_coercion). Sie müssen die `valueOf`-Methode nur selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt in einem Kontext verwendet wird, in dem ein primitiver Wert erwartet wird.

Diese Methode wird prioritär bei numerischen [Konvertierungen](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und [primitiven Konvertierungen](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) aufgerufen. Bei [String-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird jedoch `toString()` bevorzugt aufgerufen, wobei `toString()` mit hoher Wahrscheinlichkeit einen String-Wert zurückgibt (sogar für die Basisimplementierung {{jsxref("Object.prototype.toString()")}}), daher wird `valueOf()` in diesem Fall normalerweise nicht aufgerufen.

Alle Objekte, die von `Object.prototype` erben (d. h. alle außer [`null`-Prototypen-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toString()`-Methode. Die Basisimplementierung von `Object.prototype.valueOf()` ist absichtlich nutzlos: Da sie ein Objekt zurückgibt, wird ihr Rückgabewert niemals von einem [Algorithmus zur primitiven Konvertierung](/de/docs/Web/JavaScript/Data_structures#type_coercion) verwendet. Viele eingebaute Objekte überschreiben diese Methode, um einen geeigneten primitiven Wert zurückzugeben. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `valueOf()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, sodass Ihr benutzerdefiniertes Objekt in einen primitiven Wert konvertiert werden kann. Im Allgemeinen wird `valueOf()` verwendet, um einen für das Objekt am sinnvollsten Wert zurückzugeben — im Gegensatz zu `toString()` muss dies kein String sein. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess ermöglicht und bei jeder Typkonvertierung immer `valueOf` oder `toString` vorgezogen wird.

## Beispiele

### `valueOf()` verwenden

Die Basis-Methode `valueOf()` gibt den `this`-Wert selbst zurück, in ein Objekt umgewandelt, falls es noch kein Objekt ist. Daher wird ihr Rückgabewert niemals von einem Algorithmus zur primitiven Konvertierung verwendet.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### `valueOf()` für benutzerdefinierte Objekte überschreiben

Sie können eine Funktion erstellen, die anstelle der standardmäßigen `valueOf`-Methode aufgerufen wird. Ihre Funktion sollte keine Argumente erhalten, da sie beim Aufruf während der Typkonvertierung keine übergeben bekommt.

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

Mit dem obigen Code wird bei jedem Zeitpunkt, an dem ein Objekt des Typs `Box` in einem Kontext verwendet wird, in dem es als primitiver Wert (aber nicht ausdrücklich als String) dargestellt werden soll, automatisch die in dem obigen Code definierte Funktion aufgerufen.

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

Die `valueOf`-Methode eines Objekts wird normalerweise von JavaScript aufgerufen. Sie können sie jedoch auch selbst wie folgt aufrufen:

```js
box.valueOf();
```

### Den unären Plus-Operator auf Objekte anwenden

Das [unäre Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) führt eine [Numerische Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) für seinen Operanden durch, was bedeutet, dass für die meisten Objekte ohne [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) ihre `valueOf()`-Methode aufgerufen wird. Wenn das Objekt jedoch keine benutzerdefinierte `valueOf()`-Methode besitzt, führt die Basisimplementierung dazu, dass `valueOf()` ignoriert wird und der Rückgabewert von `toString()` stattdessen verwendet wird.

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
