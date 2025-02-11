---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.hasInstance`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.hasInstance`. Der {{jsxref("Operators/instanceof", "instanceof")}}-Operator ruft dieses Symbol bei seinem rechten Operanden auf, um die Methode zu ermitteln, die verwendet wird, um festzustellen, ob das Konstruktorobjekt ein Objekt als seine Instanz erkennt.

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

Der `instanceof`-Operator verwendet den folgenden Algorithmus, um den Rückgabewert von `object instanceof constructor` zu berechnen:

1. Falls `constructor` eine `[Symbol.hasInstance]()`-Methode hat, wird sie mit `object` als erstem Argument aufgerufen, und das Ergebnis, [zu einem Boolean gewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion), wird zurückgegeben. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn `constructor` kein Objekt ist oder wenn `constructor[Symbol.hasInstance]` weder `null` noch `undefined` noch eine Funktion ist.
2. Falls `constructor` keine `[Symbol.hasInstance]()`-Methode hat (`constructor[Symbol.hasInstance]` ist `null` oder `undefined`), wird das Ergebnis mit demselben Algorithmus bestimmt wie [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance). Ein {{jsxref("TypeError")}} wird ausgelöst, wenn `constructor` keine Funktion ist.

Da alle Funktionen standardmäßig von `Function.prototype` erben, legt die Methode [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) in den meisten Fällen das Verhalten von `instanceof` fest, wenn die rechte Seite eine Funktion ist.

## Beispiele

### Benutzerdefiniertes instanceof-Verhalten

Sie könnten Ihr eigenes `instanceof`-Verhalten folgendermaßen implementieren:

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

### Überprüfung der Instanz eines Objekts

Auf die gleiche Weise, wie man prüfen kann, ob ein Objekt eine Instanz einer Klasse ist, indem man das Schlüsselwort `instanceof` verwendet, kann man auch `Symbol.hasInstance` für solche Überprüfungen nutzen.

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
