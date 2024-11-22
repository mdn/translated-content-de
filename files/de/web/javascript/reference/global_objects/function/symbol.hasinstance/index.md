---
title: Function.prototype[Symbol.hasInstance]()
slug: Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{JSRef}}

Die **`[Symbol.hasInstance]()`**-Methode von {{jsxref("Function")}}-Instanzen legt das Standardverfahren fest, mit dem bestimmt wird, ob eine Konstruktorfunktion ein Objekt als eine ihrer Instanzen erkennt. Sie wird vom [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)-Operator aufgerufen.

## Syntax

```js-nolint
func[Symbol.hasInstance](value)
```

### Parameter

- `value`
  - : Das zu testende Objekt. Primitive Werte geben immer `false` zurück.

### Rückgabewert

`true`, wenn sich `func.prototype` in der Prototypkette von `value` befindet; andernfalls `false`. Gibt immer `false` zurück, wenn `value` kein Objekt ist oder `this` keine Funktion ist. Wenn `this` eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ist, wird das Ergebnis eines `instanceof`-Tests für `value` und die zugrunde liegende Zielfunktion zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `this` keine gebundene Funktion ist und `this.prototype` kein Objekt ist.

## Beschreibung

Der [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)-Operator ruft die Methode [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) der rechten Seite auf, wann immer solch eine Methode existiert. Da alle Funktionen standardmäßig von `Function.prototype` erben, haben sie alle die `[Symbol.hasInstance]()`-Methode. Daher legt die Methode `Function.prototype[Symbol.hasInstance]()` meistens das Verhalten von `instanceof` fest, wenn die rechte Seite eine Funktion ist. Diese Methode implementiert das Standardverhalten des `instanceof`-Operators (den selben Algorithmus, wenn der `Konstruktor` keine `[Symbol.hasInstance]()`-Methode enthält).

Anders als die meisten Methoden ist die Eigenschaft `Function.prototype[Symbol.hasInstance]()` nicht konfigurierbar und nicht schreibbar. Dies ist eine Sicherheitsmaßnahme, um zu verhindern, dass die zugrunde liegende Zielfunktion einer gebundenen Funktion erlangt wird. Siehe [diese Antwort auf Stack Overflow](https://stackoverflow.com/questions/38215027/trying-to-understand-the-official-es6-spec-regarding-symbol-hasinstance/38215392#38215392) für ein Beispiel.

## Beispiele

### Zurückstellen auf das Standardverhalten von instanceof

Sie würden selten diese Methode direkt aufrufen. Stattdessen wird diese Methode vom `instanceof`-Operator aufgerufen. Sie sollten erwarten, dass die beiden Ergebnisse normalerweise gleichwertig sind.

```js
class Foo {}
const foo = new Foo();
console.log(foo instanceof Foo === Foo[Symbol.hasInstance](foo)); // true
```

Sie möchten diese Methode verwenden, wenn Sie das Standardverhalten von `instanceof` aufrufen möchten, aber nicht wissen, ob ein Konstruktor eine überschrieene `[Symbol.hasInstance]()`-Methode hat.

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
