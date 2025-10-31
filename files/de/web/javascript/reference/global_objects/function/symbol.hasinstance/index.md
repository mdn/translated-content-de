---
title: Function.prototype[Symbol.hasInstance]()
short-title: "[Symbol.hasInstance]()"
slug: Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`[Symbol.hasInstance]()`** Methode von {{jsxref("Function")}} Instanzen gibt das Standardverfahren an, um zu bestimmen, ob eine Konstruktorfunktion ein Objekt als eine ihrer Instanzen erkennt. Sie wird vom [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator aufgerufen.

## Syntax

```js-nolint
func[Symbol.hasInstance](value)
```

### Parameter

- `value`
  - : Das zu testende Objekt. Primitive Werte liefern immer `false` zurück.

### Rückgabewert

`true`, wenn `func.prototype` in der Prototypkette von `value` ist; andernfalls `false`. Gibt immer `false` zurück, wenn `value` kein Objekt ist oder `this` keine Funktion ist. Wenn `this` eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, liefert es das Ergebnis eines `instanceof`-Tests auf `value` und die zugrunde liegende Zielfunktion zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `this` keine gebundene Funktion ist und `this.prototype` kein Objekt ist.

## Beschreibung

Der [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator ruft die [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) Methode der rechten Seite auf, wenn solch eine Methode existiert. Da alle Funktionen standardmäßig von `Function.prototype` erben, haben sie alle die `[Symbol.hasInstance]()` Methode, sodass meistens die `Function.prototype[Symbol.hasInstance]()` Methode das Verhalten von `instanceof` spezifiziert, wenn die rechte Seite eine Funktion ist. Diese Methode implementiert das Standardverhalten des `instanceof` Operators (den gleichen Algorithmus, wenn `constructor` keine `[Symbol.hasInstance]()` Methode hat).

Im Gegensatz zu den meisten Methoden ist die `Function.prototype[Symbol.hasInstance]()` Eigenschaft nicht konfigurierbar und nicht beschreibbar. Dies ist ein Sicherheitsmerkmal, um zu verhindern, dass die zugrunde liegende Zielfunktion einer gebundenen Funktion verfügbar gemacht wird. Siehe [diese Antwort auf Stack Overflow](https://stackoverflow.com/questions/38215027/trying-to-understand-the-official-es6-spec-regarding-symbol-hasinstance/38215392#38215392) für ein Beispiel.

## Beispiele

### Rückkehr zum Standardverhalten von instanceof

Es würde selten erforderlich sein, diese Methode direkt aufzurufen. Stattdessen wird diese Methode vom `instanceof` Operator aufgerufen. Sie sollten erwarten, dass die beiden Ergebnisse normalerweise gleichwertig sind.

```js
class Foo {}
const foo = new Foo();
console.log(foo instanceof Foo === Foo[Symbol.hasInstance](foo)); // true
```

Möglicherweise möchten Sie diese Methode verwenden, wenn Sie das Standardverhalten von `instanceof` aufrufen möchten, aber nicht wissen, ob ein Konstruktor eine überschriebene `[Symbol.hasInstance]()` Methode hat.

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
