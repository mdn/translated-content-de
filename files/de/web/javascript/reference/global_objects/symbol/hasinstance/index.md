---
title: Symbol.hasInstance
short-title: hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`Symbol.hasInstance`** statische Daten-Eigenschaft repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.hasInstance`. Der {{jsxref("Operators/instanceof", "instanceof")}} Operator sucht dieses Symbol auf seinem rechten Operanden für die Methode, die verwendet wird, um festzustellen, ob das Konstruktor-Objekt ein Objekt als seine Instanz erkennt.

{{InteractiveExample("JavaScript Demo: Symbol.hasInstance")}}

```js interactive-example
class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

console.log([] instanceof Array1);
// Expected output: true
```

## Wert

Das bekannte Symbol `Symbol.hasInstance`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Der Operator `instanceof` verwendet den folgenden Algorithmus, um den Rückgabewert von `object instanceof constructor` zu berechnen:

1. Wenn `constructor` eine `[Symbol.hasInstance]()` Methode hat, dann rufen Sie diese mit `object` als erstem Argument auf und geben das Ergebnis zurück, [umgewandelt in einen Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). Werfen Sie einen {{jsxref("TypeError")}}, wenn `constructor` kein Objekt ist oder wenn `constructor[Symbol.hasInstance]` weder `null`, `undefined` noch eine Funktion ist.
2. Andernfalls, wenn `constructor` keine `[Symbol.hasInstance]()` Methode hat (`constructor[Symbol.hasInstance]` ist `null` oder `undefined`), dann bestimmen Sie das Ergebnis mit demselben Algorithmus wie [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance). Werfen Sie einen {{jsxref("TypeError")}}, wenn `constructor` keine Funktion ist.

Da alle Funktionen standardmäßig von `Function.prototype` erben, gibt die Methode [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) meistens das Verhalten von `instanceof` an, wenn die rechte Seite eine Funktion ist.

## Beispiele

### Benutzerdefiniertes instanceof-Verhalten

Sie könnten Ihr benutzerdefiniertes `instanceof`-Verhalten zum Beispiel so implementieren:

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

```js
function MyArray() {}
Object.defineProperty(MyArray, Symbol.hasInstance, {
  value(instance) {
    return Array.isArray(instance);
  },
});
console.log([] instanceof MyArray); // true
```

### Überprüfen der Instanz eines Objekts

Auf die gleiche Weise, wie Sie überprüfen können, ob ein Objekt eine Instanz einer Klasse ist, indem Sie das `instanceof` Schlüsselwort verwenden, können wir auch `Symbol.hasInstance` für solche Überprüfungen verwenden.

```js
class Animal {
  constructor() {}
}

const cat = new Animal();

console.log(Animal[Symbol.hasInstance](cat)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Operators/instanceof", "instanceof")}}
- [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)
