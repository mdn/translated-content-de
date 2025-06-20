---
title: Object.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`valueOf()`** Methode von {{jsxref("Object")}} Instanzen konvertiert den `this` Wert [in ein Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). Diese Methode ist dafür gedacht, von abgeleiteten Objekten für benutzerdefinierte [Typumwandlungslogik](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) überschrieben zu werden.

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

Der `this` Wert, in ein Objekt konvertiert.

> [!NOTE]
> Damit `valueOf` während der Typumwandlung nützlich ist, muss es einen primitiven Wert zurückgeben. Da alle primitiven Typen ihre eigenen `valueOf()` Methoden haben, ruft `aPrimitiveValue.valueOf()` im Allgemeinen nicht `Object.prototype.valueOf()` auf.

## Beschreibung

JavaScript ruft die `valueOf` Methode auf, um ein [Objekt in einen primitiven Wert umzuwandeln](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion). Sie müssen die `valueOf` Methode selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn ein Objekt erwartet wird, wo normalerweise ein primitiver Wert erwartet wird.

Diese Methode wird bevorzugt von der [numerischen Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und der [primitiven Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) aufgerufen, allerdings ruft die [String-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) bevorzugt `toString()` auf, und `toString()` gibt sehr wahrscheinlich einen String-Wert zurück (selbst für die Basisimplementierung {{jsxref("Object.prototype.toString()")}}), daher wird `valueOf()` in diesem Fall normalerweise nicht aufgerufen.

Alle Objekte, die von `Object.prototype` erben (d.h. alle außer [Objekte mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toString()` Methode. Die Basisimplementierung `Object.prototype.valueOf()` ist absichtlich nutzlos: Da sie ein Objekt zurückgibt, wird ihr Rückgabewert niemals von einem [Algorithmus der primitiven Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) verwendet. Viele eingebaute Objekte überschreiben diese Methode, um einen geeigneten primitiven Wert zurückzugeben. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `valueOf()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, sodass Ihr benutzerdefiniertes Objekt in einen primitiven Wert umgewandelt werden kann. Im Allgemeinen wird `valueOf()` verwendet, um einen Wert zurückzugeben, der für das Objekt am sinnvollsten ist — im Gegensatz zu `toString()` muss es sich nicht um einen String handeln. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hinzufügen, die noch mehr Kontrolle über den Umwandlungsprozess ermöglicht und immer gegenüber `valueOf` oder `toString` bei jeder Typumwandlung bevorzugt wird.

## Beispiele

### Verwendung von valueOf()

Die Basis `valueOf()` Methode gibt den `this` Wert selbst zurück, konvertiert in ein Objekt, wenn es nicht bereits eines ist. Daher wird ihr Rückgabewert niemals von einem primitiven Umwandlungsalgorithmus verwendet.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### Überschreiben von valueOf für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standardmethode `valueOf` aufgerufen wird. Ihre Funktion sollte keine Argumente annehmen, da sie keine bei der Typumwandlung übergeben bekommt.

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

Mit dem obigen Code wird jedes Mal, wenn ein Objekt des Typs `Box` in einem Kontext verwendet wird, in dem es als primitiver Wert (aber nicht speziell als String) dargestellt werden soll, automatisch die Funktion im obigen Code aufgerufen.

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

Die `valueOf` Methode eines Objekts wird normalerweise von JavaScript aufgerufen, Sie können sie jedoch selbst wie folgt aufrufen:

```js
box.valueOf();
```

### Verwendung des unären Plus bei Objekten

[Unäres Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) führt eine [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) an seinem Operanden durch, was bei den meisten Objekten ohne [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) bedeutet, dass `valueOf()` aufgerufen wird. Wenn das Objekt jedoch keine benutzerdefinierte `valueOf()` Methode hat, bewirkt die Basisimplementierung, dass `valueOf()` ignoriert wird und der Rückgabewert von `toString()` stattdessen verwendet wird.

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
