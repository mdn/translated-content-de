---
title: Function.prototype[Symbol.hasInstance]()
slug: Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.hasInstance]()`** Methode von {{jsxref("Function")}} Instanzen legt das Standardverfahren fest, um zu bestimmen, ob eine Konstruktorfunktion ein Objekt als eine ihrer Instanzen erkennt. Sie wird vom [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator aufgerufen.

## Syntax

```js-nolint
func[Symbol.hasInstance](value)
```

### Parameter

- `value`
  - : Das zu testende Objekt. Primitive Werte geben immer `false` zurück.

### Rückgabewert

`true`, wenn `func.prototype` in der Prototypenkette von `value` enthalten ist; andernfalls `false`. Gibt immer `false` zurück, wenn `value` kein Objekt ist oder `this` keine Funktion ist. Wenn `this` eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, gibt das Ergebnis eines `instanceof`-Tests mit `value` und der zugrundeliegenden Zielfunktion zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `this` keine gebundene Funktion ist und `this.prototype` kein Objekt ist.

## Beschreibung

Der [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator ruft die [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) Methode der rechten Seite auf, wann immer eine solche Methode existiert. Da alle Funktionen standardmäßig von `Function.prototype` erben, haben sie alle die `[Symbol.hasInstance]()` Methode, sodass die meiste Zeit die `Function.prototype[Symbol.hasInstance]()` Methode das Verhalten von `instanceof` bestimmt, wenn die rechte Seite eine Funktion ist. Diese Methode implementiert das Standardverhalten des `instanceof` Operators (den gleichen Algorithmus, wenn `constructor` keine `[Symbol.hasInstance]()` Methode hat).

Im Gegensatz zu den meisten Methoden ist die `Function.prototype[Symbol.hasInstance]()` Eigenschaft nicht konfigurierbar und nicht schreibbar. Dies ist ein Sicherheitsmerkmal, um zu verhindern, dass die zugrundeliegende Zielfunktion einer gebundenen Funktion zugänglich ist. Siehe [diese Antwort auf StackOverflow](https://stackoverflow.com/questions/38215027/trying-to-understand-the-official-es6-spec-regarding-symbol-hasinstance/38215392#38215392) für ein Beispiel.

## Beispiele

### Rückkehr zum Standardverhalten von instanceof

Sie würden diese Methode selten direkt aufrufen müssen. Stattdessen wird diese Methode vom `instanceof` Operator aufgerufen. Sie sollten erwarten, dass die beiden Ergebnisse in der Regel gleichwertig sind.

```js
class Foo {}
const foo = new Foo();
console.log(foo instanceof Foo === Foo[Symbol.hasInstance](foo)); // true
```

Sie möchten diese Methode möglicherweise verwenden, wenn Sie das Standardverhalten von `instanceof` aufrufen möchten, aber nicht wissen, ob ein Konstruktor eine überschreibene `[Symbol.hasInstance]()` Methode hat.

```js
class Foo {
  static [Symbol.hasInstance](value) {
    // A custom implementation
    return false;
  }
}

const foo = new Foo();
console.log(foo instanceof Foo); // false
console.log(Function.prototype[Symbol.hasInstance].call(Foo, foo)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)
- {{jsxref("Symbol.hasInstance")}}
