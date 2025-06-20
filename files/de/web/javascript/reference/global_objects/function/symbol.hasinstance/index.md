---
title: Function.prototype[Symbol.hasInstance]()
short-title: "[Symbol.hasInstance]()"
slug: Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`[Symbol.hasInstance]()`** von {{jsxref("Function")}}-Instanzen legt das Standardverfahren fest, um zu bestimmen, ob eine Konstruktorfunktion ein Objekt als Instanz des Konstruktors erkennt. Sie wird vom [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)-Operator aufgerufen.

## Syntax

```js-nolint
func[Symbol.hasInstance](value)
```

### Parameter

- `value`
  - : Das Objekt, das getestet werden soll. Primitive Werte liefern immer `false`.

### Rückgabewert

`true`, wenn `func.prototype` in der Prototyp-Kette von `value` ist; andernfalls `false`. Liefert immer `false`, wenn `value` kein Objekt ist oder `this` keine Funktion ist. Wenn `this` eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, liefert es das Ergebnis eines `instanceof`-Tests auf `value` und die zugrunde liegende Zielfunktion.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `this` keine gebundene Funktion ist und `this.prototype` kein Objekt ist.

## Beschreibung

Der [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)-Operator ruft die [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode der rechten Seite auf, wenn eine solche Methode existiert. Da alle Funktionen standardmäßig von `Function.prototype` erben, haben sie alle die `[Symbol.hasInstance]()`-Methode, sodass meist die Methode `Function.prototype[Symbol.hasInstance]()` das Verhalten von `instanceof` festlegt, wenn die rechte Seite eine Funktion ist. Diese Methode implementiert das Standardverhalten des `instanceof`-Operators (der gleiche Algorithmus, wenn `constructor` keine `[Symbol.hasInstance]()`-Methode hat).

Im Gegensatz zu den meisten Methoden ist die Eigenschaft `Function.prototype[Symbol.hasInstance]()` nicht konfigurierbar und nicht beschreibbar. Dies ist ein Sicherheitsmerkmal, um zu verhindern, dass die zugrunde liegende Zielfunktion einer gebundenen Funktion abgerufen wird. Siehe [dieses Stack Overflow-Antwort](https://stackoverflow.com/questions/38215027/trying-to-understand-the-official-es6-spec-regarding-symbol-hasinstance/38215392#38215392) für ein Beispiel.

## Beispiele

### Rückkehr zum Standard-`instanceof`-Verhalten

Sie müssten diese Methode selten direkt aufrufen. Stattdessen wird diese Methode vom `instanceof`-Operator aufgerufen. Sie sollten erwarten, dass die beiden Ergebnisse normalerweise gleichwertig sind.

```js
class Foo {}
const foo = new Foo();
console.log(foo instanceof Foo === Foo[Symbol.hasInstance](foo)); // true
```

Es kann sein, dass Sie diese Methode verwenden möchten, wenn Sie das Standardverhalten von `instanceof` aufrufen möchten, aber nicht wissen, ob ein Konstruktor eine überschreibende `[Symbol.hasInstance]()`-Methode hat.

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
