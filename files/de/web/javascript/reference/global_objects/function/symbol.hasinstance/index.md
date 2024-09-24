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

`true`, wenn `func.prototype` in der Prototypenkette von `value` ist; andernfalls `false`. Gibt immer `false` zurück, wenn `value` kein Objekt ist oder `this` keine Funktion ist. Wenn `this` eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, wird das Ergebnis eines `instanceof` Tests auf `value` und der zugrunde liegenden Ziel-Funktion zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `this` keine gebundene Funktion ist und `this.prototype` kein Objekt ist.

## Beschreibung

Der [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator ruft die [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) Methode der rechten Seite auf, wann immer eine solche Methode existiert. Weil alle Funktionen standardmäßig von `Function.prototype` erben, haben sie alle die `[Symbol.hasInstance]()` Methode, sodass die `Function.prototype[Symbol.hasInstance]()` Methode meistens das Verhalten von `instanceof` bestimmt, wenn die rechte Seite eine Funktion ist. Diese Methode implementiert das Standardverhalten des `instanceof` Operators (den gleichen Algorithmus, wenn `constructor` keine `[Symbol.hasInstance]()` Methode hat).

Im Gegensatz zu den meisten Methoden ist die `Function.prototype[Symbol.hasInstance]()` Eigenschaft nicht konfigurierbar und nicht beschreibbar. Dies ist eine Sicherheitsfunktion, um zu verhindern, dass die zugrunde liegende Ziel-Funktion einer gebundenen Funktion zugänglich gemacht wird. Siehe [diese Antwort auf StackOverflow](https://stackoverflow.com/questions/38215027/trying-to-understand-the-official-es6-spec-regarding-symbol-hasinstance/38215392#38215392) für ein Beispiel.

## Beispiele

### Zum Standardverhalten von instanceof zurückkehren

Sie müssten diese Methode selten direkt aufrufen. Stattdessen wird diese Methode durch den `instanceof` Operator aufgerufen. Sie sollten erwarten, dass die beiden Ergebnisse normalerweise gleichwertig sind.

```js
class Foo {}
const foo = new Foo();
console.log(foo instanceof Foo === Foo[Symbol.hasInstance](foo)); // true
```

Sie möchten diese Methode möglicherweise verwenden, wenn Sie das Standardverhalten von `instanceof` aufrufen möchten, aber nicht wissen, ob ein Konstruktor eine überschriebenene `[Symbol.hasInstance]()` Methode hat.

```js
class Foo {
  static [Symbol.hasInstance](value) {
    // Eine benutzerdefinierte Implementierung
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
