---
title: Symbol.hasInstance
short-title: hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die statische Dateneigenschaft **`Symbol.hasInstance`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.hasInstance`. Der {{jsxref("instanceof")}}-Operator sucht dieses Symbol im rechten Operanden nach der Methode, die verwendet wird, um festzustellen, ob das Konstruktorobjekt ein Objekt als seine Instanz erkennt.

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

1. Wenn `constructor` eine `[Symbol.hasInstance]()`-Methode hat, dann rufen Sie diese mit `object` als erstem Argument auf und geben das Ergebnis zurück, [umgewandelt in einen Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion). Werfen Sie einen {{jsxref("TypeError")}}, wenn `constructor` kein Objekt ist oder wenn `constructor[Symbol.hasInstance]` weder `null`, `undefined` noch eine Funktion ist.
2. Andernfalls, wenn `constructor` keine `[Symbol.hasInstance]()`-Methode hat (`constructor[Symbol.hasInstance]` ist `null` oder `undefined`), dann bestimmen Sie das Ergebnis mit dem gleichen Algorithmus wie [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance). Werfen Sie einen {{jsxref("TypeError")}}, wenn `constructor` keine Funktion ist.

Da alle Funktionen standardmäßig von `Function.prototype` erben, legt die [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)-Methode meist das Verhalten von `instanceof` fest, wenn die rechte Seite eine Funktion ist.

## Beispiele

### Benutzerdefiniertes instanceof-Verhalten

Sie können Ihr benutzerdefiniertes `instanceof`-Verhalten so implementieren, zum Beispiel:

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

Genau wie Sie überprüfen können, ob ein Objekt eine Instanz einer Klasse ist, indem Sie das `instanceof`-Schlüsselwort verwenden, können wir auch `Symbol.hasInstance` für solche Überprüfungen verwenden.

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

- {{jsxref("instanceof")}}
- [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)
