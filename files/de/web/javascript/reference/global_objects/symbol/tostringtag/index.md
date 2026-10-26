---
title: Symbol.toStringTag
short-title: toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Dateneigenschaft **`Symbol.toStringTag`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toStringTag`. {{jsxref("Object.prototype.toString()")}} sucht auf dem `this`-Wert nach diesem Symbol, um den String abzurufen, der den Typ des Objekts beschreibt.

{{InteractiveExample("JavaScript Demo: Symbol.toStringTag")}}

```js interactive-example
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

console.log(Object.prototype.toString.call(new ValidatorClass()));
// Expected output: "[object Validator]"
```

## Wert

Das wohlbekannte Symbol `Symbol.toStringTag`.

{{js_property_attributes(0, 0, 0)}}

## Beispiele

### Standard-Tags

Einige Werte haben kein `Symbol.toStringTag`, besitzen aber spezielle `toString()`-Darstellungen. Eine vollständige Liste finden Sie unter {{jsxref("Object.prototype.toString()")}}.

```js
Object.prototype.toString.call("foo"); // "[object String]"
Object.prototype.toString.call([1, 2]); // "[object Array]"
Object.prototype.toString.call(3); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
// … and more
```

### Integrierte toStringTag-Symbole

Die meisten integrierten Objekte stellen eine eigene `[Symbol.toStringTag]`-Eigenschaft bereit. Bei fast allen integrierten Objekten ist diese Eigenschaft nicht beschreibbar, nicht aufzählbar und konfigurierbar. Eine Ausnahme bildet {{jsxref("Iterator")}}: Aus Kompatibilitätsgründen ist die Eigenschaft dort beschreibbar.

Bei Konstruktorobjekten wie {{jsxref("Promise")}} wird die Eigenschaft auf `Constructor.prototype` definiert. Dadurch erben alle Instanzen des Konstruktors `[Symbol.toStringTag]` und können in einen String umgewandelt werden. Bei Objekten, die keine Konstruktoren sind, wie {{jsxref("Math")}} und {{jsxref("JSON")}}, wird die Eigenschaft als statische Eigenschaft definiert, sodass das Namespace-Objekt selbst in einen String umgewandelt werden kann. Manchmal stellt der Konstruktor auch eine eigene `toString`-Methode bereit (beispielsweise {{jsxref("Intl.Locale")}}). In diesem Fall wird die `[Symbol.toStringTag]`-Eigenschaft nur verwendet, wenn Sie `Object.prototype.toString` ausdrücklich darauf aufrufen.

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// … and more
```

### Benutzerdefiniertes Tag mit toStringTag

Wenn Sie eine eigene Klasse erstellen, verwendet JavaScript standardmäßig das Tag „Object“:

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

Mithilfe von `toStringTag` können Sie ein eigenes Tag festlegen:

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

### toStringTag auf allen DOM-Prototypobjekten verfügbar

Aufgrund einer [Änderung der WebIDL-Spezifikation](https://github.com/whatwg/webidl/pull/357) Mitte 2020 fügen Browser allen DOM-Prototypobjekten eine `Symbol.toStringTag`-Eigenschaft hinzu. So greifen Sie beispielsweise auf die `Symbol.toStringTag`-Eigenschaft von [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) zu:

```js
const test = document.createElement("button");
test.toString(); // "[object HTMLButtonElement]"
test[Symbol.toStringTag]; // "HTMLButtonElement"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Symbol.toStringTag` in `core-js`](https://core-js.io/docs/features/ecmascript/symbol)
- {{jsxref("Object.prototype.toString()")}}
