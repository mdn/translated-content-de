---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.hasInstance`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.hasInstance`. Der {{jsxref("Operators/instanceof", "instanceof")}}-Operator sucht dieses Symbol im rechten Operanden für die Methode, die verwendet wird, um zu bestimmen, ob das Konstruktorobjekt ein Objekt als seine Instanz erkennt.

{{EmbedInteractiveExample("pages/js/symbol-hasinstance.html")}}

## Wert

Das bekannte Symbol `Symbol.hasInstance`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Der `instanceof`-Operator verwendet den folgenden Algorithmus, um den Rückgabewert von `object instanceof constructor` zu berechnen:

1. Wenn `constructor` über eine `[Symbol.hasInstance]()`-Methode verfügt, rufen Sie diese mit `object` als erstem Argument auf und geben Sie das Ergebnis zurück, [in ein boolesches Wert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). Werfen Sie einen {{jsxref("TypeError")}}, wenn `constructor` kein Objekt ist oder wenn `constructor[Symbol.hasInstance]` nicht `null`, `undefined` oder eine Funktion ist.
2. Andernfalls, wenn `constructor` keine `[Symbol.hasInstance]()`-Methode hat (`constructor[Symbol.hasInstance]` ist `null` oder `undefined`), dann bestimmen Sie das Ergebnis mit dem gleichen Algorithmus wie [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance). Werfen Sie einen {{jsxref("TypeError")}}, wenn `constructor` keine Funktion ist.

Da alle Funktionen standardmäßig von `Function.prototype` erben, spezifiziert meistens die Methode [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) das Verhalten von `instanceof`, wenn die rechte Seite eine Funktion ist.

## Beispiele

### Benutzerdefiniertes instanceof-Verhalten

Sie können beispielsweise Ihr benutzerdefiniertes `instanceof`-Verhalten wie folgt implementieren:

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