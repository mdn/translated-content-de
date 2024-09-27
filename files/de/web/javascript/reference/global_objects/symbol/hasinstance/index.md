---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die statische Daten-Eigenschaft **`Symbol.hasInstance`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.hasInstance`. Der {{jsxref("Operators/instanceof", "instanceof")}}-Operator sucht dieses Symbol auf seinem rechten Operand, um die Methode zu finden, die bestimmt, ob das Konstruktorobjekt ein Objekt als seine Instanz erkennt.

{{EmbedInteractiveExample("pages/js/symbol-hasinstance.html")}}

## Wert

Das wohlbekannte Symbol `Symbol.hasInstance`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Der `instanceof`-Operator verwendet den folgenden Algorithmus, um den Rückgabewert von `object instanceof constructor` zu berechnen:

1. Wenn `constructor` eine `[Symbol.hasInstance]()`-Methode hat, dann rufen Sie diese mit `object` als erstem Argument auf und geben das Ergebnis zurück, [in einen Boolean umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). Werfen Sie einen {{jsxref("TypeError")}}, wenn `constructor` kein Objekt ist oder wenn `constructor[Symbol.hasInstance]` weder `null`, `undefined` noch eine Funktion ist.
2. Andernfalls, wenn `constructor` keine `[Symbol.hasInstance]()`-Methode hat (`constructor[Symbol.hasInstance]` ist `null` oder `undefined`), bestimmen Sie das Ergebnis mit dem gleichen Algorithmus wie [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance). Werfen Sie einen {{jsxref("TypeError")}}, wenn `constructor` keine Funktion ist.

Da alle Funktionen standardmäßig von `Function.prototype` erben, legt die Methode [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) meistens das Verhalten von `instanceof` fest, wenn die rechte Seite eine Funktion ist.

## Beispiele

### Benutzerdefiniertes instanceof-Verhalten

Sie könnten zum Beispiel Ihr eigenes `instanceof`-Verhalten wie folgt implementieren:

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

Auf die gleiche Weise, wie Sie überprüfen können, ob ein Objekt eine Instanz einer Klasse ist, indem Sie das `instanceof`-Schlüsselwort verwenden, können wir auch `Symbol.hasInstance` für solche Überprüfungen verwenden.

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
