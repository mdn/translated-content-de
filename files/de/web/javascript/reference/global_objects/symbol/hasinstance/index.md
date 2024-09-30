---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.hasInstance`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.hasInstance`. Der {{jsxref("Operators/instanceof", "instanceof")}}-Operator sucht dieses Symbol auf seinem rechten Operanden für die Methode, die verwendet wird, um festzustellen, ob das Konstruktorobjekt ein Objekt als seine Instanz erkennt.

{{EmbedInteractiveExample("pages/js/symbol-hasinstance.html")}}

## Wert

Das bekannte Symbol `Symbol.hasInstance`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Der `instanceof`-Operator verwendet den folgenden Algorithmus, um den Rückgabewert von `object instanceof constructor` zu berechnen:

1. Wenn `constructor` eine `[Symbol.hasInstance]()`-Methode hat, rufen Sie sie mit `object` als erstem Argument auf und geben Sie das Ergebnis zurück, das [in einen booleschen Wert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion) wurde. Werfen Sie einen {{jsxref("TypeError")}}, wenn `constructor` kein Objekt ist oder wenn `constructor[Symbol.hasInstance]` weder `null`, `undefined` noch eine Funktion ist.
2. Andernfalls, wenn `constructor` keine `[Symbol.hasInstance]()`-Methode hat (`constructor[Symbol.hasInstance]` ist `null` oder `undefined`), dann bestimmen Sie das Ergebnis mit demselben Algorithmus wie [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance). Werfen Sie einen {{jsxref("TypeError")}}, wenn `constructor` keine Funktion ist.

Da alle Funktionen standardmäßig von `Function.prototype` erben, legt meistens die Methode [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) das Verhalten von `instanceof` fest, wenn die rechte Seite eine Funktion ist.

## Beispiele

### Benutzerdefiniertes instanceof-Verhalten

Sie könnten Ihr benutzerdefiniertes `instanceof`-Verhalten beispielsweise folgendermaßen implementieren:

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

In gleicher Weise, wie Sie prüfen können, ob ein Objekt eine Instanz einer Klasse ist, indem Sie das Schlüsselwort `instanceof` verwenden, können wir auch `Symbol.hasInstance` für solche Überprüfungen verwenden.

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
