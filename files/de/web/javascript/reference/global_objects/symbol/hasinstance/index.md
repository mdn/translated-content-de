---
title: Symbol.hasInstance
short-title: hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Symbol.hasInstance`** statische Dateneigenschaft repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.hasInstance`. Der {{jsxref("Operators/instanceof", "instanceof")}} Operator sucht dieses Symbol auf seinem rechten Operanden, um die Methode zu ermitteln, die verwendet wird, um festzustellen, ob das Konstruktorobjekt ein Objekt als seine Instanz erkennt.

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

Das wohlbekannte Symbol `Symbol.hasInstance`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Der `instanceof` Operator verwendet den folgenden Algorithmus, um den Rückgabewert von `object instanceof constructor` zu berechnen:

1. Falls `constructor` eine `[Symbol.hasInstance]()` Methode hat, wird diese mit `object` als erstem Argument aufgerufen und das Ergebnis zurückgegeben, [zu einem Boolean umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). Ein {{jsxref("TypeError")}} wird ausgelöst, wenn `constructor` kein Objekt ist oder wenn `constructor[Symbol.hasInstance]` weder `null`, `undefined` noch eine Funktion ist.
2. Andernfalls, wenn `constructor` keine `[Symbol.hasInstance]()` Methode hat (`constructor[Symbol.hasInstance]` ist `null` oder `undefined`), wird das Ergebnis unter Verwendung des gleichen Algorithmus wie bei [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) bestimmt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn `constructor` keine Funktion ist.

Da alle Funktionen standardmäßig von `Function.prototype` erben, legt in den meisten Fällen die Methode [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) das Verhalten von `instanceof` fest, wenn die rechte Seite eine Funktion ist.

## Beispiele

### Benutzerdefiniertes instanceof Verhalten

Sie könnten Ihr benutzerdefiniertes `instanceof` Verhalten wie folgt implementieren:

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

Genauso wie Sie überprüfen können, ob ein Objekt eine Instanz einer Klasse mit dem Schlüsselwort `instanceof` ist, können wir auch `Symbol.hasInstance` für solche Überprüfungen verwenden.

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
