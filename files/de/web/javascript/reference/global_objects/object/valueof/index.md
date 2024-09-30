---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`valueOf()`**-Methode von {{jsxref("Object")}}-Instanzen konvertiert den `this`-Wert [in ein Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). Diese Methode soll von abgeleiteten Objekten für eine benutzerdefinierte [Typumwandlungslogik](/de/docs/Web/JavaScript/Data_structures#type_coercion) überschrieben werden.

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Der `this`-Wert, in ein Objekt konvertiert.

> [!NOTE]
> Damit `valueOf` während der Typumwandlung nützlich ist, muss es einen primitiven Wert zurückgeben. Da alle primitiven Typen ihre eigenen `valueOf()`-Methoden haben, ruft das Aufrufen von `aPrimitiveValue.valueOf()` im Allgemeinen nicht `Object.prototype.valueOf()` auf.

## Beschreibung

JavaScript ruft die `valueOf`-Methode auf, um ein [Objekt in einen primitiven Wert umzuwandeln](/de/docs/Web/JavaScript/Data_structures#type_coercion). Sie müssen die `valueOf`-Methode selten selbst aufrufen; JavaScript ruft sie automatisch auf, wenn es auf ein Objekt stößt, bei dem ein primitiver Wert erwartet wird.

Diese Methode wird vorrangig durch [numerische Umwandlung](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und [primitive Umwandlung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) aufgerufen, aber bei der [String-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird `toString()` vorrangig aufgerufen, und `toString()` gibt sehr wahrscheinlich einen String-Wert zurück (sogar für die Basisimplementierung von {{jsxref("Object.prototype.toString()")}}), so dass `valueOf()` in diesem Fall normalerweise nicht aufgerufen wird.

Alle Objekte, die von `Object.prototype` erben (also alle außer den [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `toString()`-Methode. Die Basisimplementierung von `Object.prototype.valueOf()` ist absichtlich nutzlos: Durch die Rückgabe eines Objekts wird ihr Rückgabewert niemals von einem [Primitiven Umwandlungsalgorithmus](/de/docs/Web/JavaScript/Data_structures#type_coercion) verwendet. Viele eingebaute Objekte überschreiben diese Methode, um einen angemessenen primitiven Wert zurückzugeben. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `valueOf()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, so dass Ihr benutzerdefiniertes Objekt in einen primitiven Wert umgewandelt werden kann. Im Allgemeinen wird `valueOf()` verwendet, um einen Wert zurückzugeben, der für das Objekt am sinnvollsten ist — im Gegensatz zu `toString()` muss es sich nicht um einen String handeln. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess ermöglicht und bei jeder Typumwandlung gegenüber `valueOf` oder `toString` bevorzugt wird.

## Beispiele

### Verwendung von valueOf()

Die Basis `valueOf()`-Methode gibt den `this`-Wert selbst zurück, falls erforderlich in ein Objekt konvertiert. Daher wird ihr Rückgabewert niemals von einem primitiven Umwandlungsalgorithmus verwendet.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### Überschreiben von valueOf für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`valueOf()`-Methode aufgerufen wird. Ihre Funktion sollte keine Argumente annehmen, da sie beim Aufruf während der Typumwandlung keine übergeben bekommt.

Zum Beispiel können Sie eine `valueOf()`-Methode zu Ihrer benutzerdefinierten Klasse `Box` hinzufügen.

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

Mit dem vorhergehenden Code wird jedes Mal, wenn ein Objekt des Typs `Box` in einem Kontext verwendet wird, in dem es als primitiver Wert (aber nicht speziell als String) dargestellt werden soll, automatisch die im vorangegangenen Code definierte Funktion aufgerufen.

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

Normalerweise wird die `valueOf()`-Methode eines Objekts von JavaScript aufgerufen, aber Sie können sie auch selbst wie folgt aufrufen:

```js
box.valueOf();
```

### Verwendung des unären Plus auf Objekten

[Unäres Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) führt eine [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) seines Operanden durch, was für die meisten Objekte ohne [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) bedeutet, dass `valueOf()` aufgerufen wird. Wenn das Objekt jedoch keine benutzerdefinierte `valueOf()`-Methode hat, wird durch die Basisimplementierung `valueOf()` ignoriert und stattdessen der Rückgabewert von `toString()` verwendet.

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
