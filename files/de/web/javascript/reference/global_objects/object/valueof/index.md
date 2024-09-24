---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`valueOf()`**-Methode von {{jsxref("Object")}}-Instanzen konvertiert den `this`-Wert [in ein Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). Diese Methode soll von abgeleiteten Objekten überschrieben werden, um eine benutzerdefinierte Logik zur [Typumwandlung](/de/docs/Web/JavaScript/Data_structures#type_coercion) bereitzustellen.

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Der `this`-Wert, konvertiert in ein Objekt.

> [!NOTE]
> Damit `valueOf` bei der Typumwandlung nützlich ist, muss es einen primitiven Wert zurückgeben. Da alle primitiven Typen ihre eigenen `valueOf()`-Methoden haben, ruft `aPrimitiveValue.valueOf()` in der Regel nicht `Object.prototype.valueOf()` auf.

## Beschreibung

JavaScript ruft die `valueOf`-Methode auf, um [ein Objekt in einen primitiven Wert zu konvertieren](/de/docs/Web/JavaScript/Data_structures#type_coercion). Es ist selten erforderlich, die `valueOf`-Methode selbst aufzurufen; JavaScript ruft sie automatisch auf, wenn ein Objekt in einem Kontext verwendet wird, in dem ein primitiver Wert erwartet wird.

Diese Methode wird vorrangig bei der [numerischen Konvertierung](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und [primitiven Konvertierung](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) aufgerufen, aber bei der [String-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird `toString()` vorrangig aufgerufen, und `toString()` gibt sehr wahrscheinlich einen String-Wert zurück (selbst bei der Basisimplementierung von {{jsxref("Object.prototype.toString()")}}), sodass `valueOf()` in diesem Fall normalerweise nicht aufgerufen wird.

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) erben die Methode `toString()`. Die Basisimplementierung `Object.prototype.valueOf()` ist absichtlich nutzlos: Indem sie ein Objekt zurückgibt, wird ihr Rückgabewert niemals von einem [Algorithmus zur primitiven Konvertierung](/de/docs/Web/JavaScript/Data_structures#type_coercion) verwendet. Viele eingebaute Objekte überschreiben diese Methode, um einen geeigneten primitiven Wert zurückzugeben. Wenn Sie ein benutzerdefiniertes Objekt erstellen, können Sie `valueOf()` überschreiben, um eine benutzerdefinierte Methode aufzurufen, sodass Ihr benutzerdefiniertes Objekt in einen primitiven Wert konvertiert werden kann. Generell wird `valueOf()` verwendet, um einen Wert zurückzugeben, der für das Objekt am sinnvollsten ist — im Gegensatz zu `toString()` muss er kein String sein. Alternativ können Sie eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hinzufügen, die noch mehr Kontrolle über den Konvertierungsprozess ermöglicht und immer gegenüber `valueOf` oder `toString` für jede Typumwandlung bevorzugt wird.

## Beispiele

### Verwendung von valueOf()

Die Basis `valueOf()`-Methode gibt den `this`-Wert selbst zurück, in ein Objekt konvertiert, falls er noch keines ist. Daher wird ihr Rückgabewert niemals von einem primitiven Konvertierungsalgorithmus verwendet.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (ein Wrapper-Objekt)
```

### Überschreiben von valueOf für benutzerdefinierte Objekte

Sie können eine Funktion erstellen, die anstelle der Standard-`valueOf`-Methode aufgerufen wird. Ihre Funktion sollte keine Argumente annehmen, da sie beim Aufruf während der Typkonvertierung keine übergeben bekommt.

Zum Beispiel können Sie einer benutzerdefinierten Klasse `Box` eine `valueOf`-Methode hinzufügen.

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

Mit dem vorherigen Code wird jedes Mal, wenn ein Objekt des Typs `Box` in einem Kontext verwendet wird, in dem es als primitiver Wert (aber nicht speziell als String) dargestellt werden soll, die im vorherigen Code definierte Funktion von JavaScript automatisch aufgerufen.

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

Die `valueOf`-Methode eines Objekts wird normalerweise von JavaScript aufgerufen, aber Sie können sie selbst wie folgt aufrufen:

```js
box.valueOf();
```

### Verwendung des unären Plus-Operators auf Objekten

[Unäres Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) führt eine [Zahlumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) seines Operanden durch, was für die meisten Objekte ohne [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) bedeutet, dass `valueOf()` aufgerufen wird. Wenn das Objekt jedoch keine benutzerdefinierte `valueOf()`-Methode hat, bewirkt die Basisimplementierung, dass `valueOf()` ignoriert wird und stattdessen der Rückgabewert von `toString()` verwendet wird.

```js
+new Date(); // der aktuelle Zeitstempel; gleichbedeutend mit new Date().getTime()
+{}; // NaN (toString() gibt "[object Object]" zurück)
+[]; // 0 (toString() gibt eine leere Zeichenfolgenliste zurück)
+[1]; // 1 (toString() gibt "1" zurück)
+[1, 2]; // NaN (toString() gibt "1,2" zurück)
+new Set([1]); // NaN (toString() gibt "[object Set]" zurück)
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
