---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.toStringTag`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toStringTag`. {{jsxref("Object.prototype.toString()")}} sucht dieses Symbol im `this`-Wert, um die Eigenschaft zu finden, die einen String enthält, der den Typ des Objekts repräsentiert.

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

Einige Werte haben kein `Symbol.toStringTag`, aber spezielle `toString()`-Repräsentationen. Eine vollständige Liste finden Sie unter {{jsxref("Object.prototype.toString()")}}.

```js
Object.prototype.toString.call("foo"); // "[object String]"
Object.prototype.toString.call([1, 2]); // "[object Array]"
Object.prototype.toString.call(3); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
// ... and more
```

### Eingebaute toStringTag-Symbole

Die meisten eingebauten Objekte stellen ihre eigene `[Symbol.toStringTag]`-Eigenschaft zur Verfügung. Fast alle `[Symbol.toStringTag]`-Eigenschaften von eingebauten Objekten sind nicht schreibbar, nicht aufzählbar und konfigurierbar; die Ausnahme ist {{jsxref("Iterator")}}, das aus Kompatibilitätsgründen schreibbar ist.

Bei Konstruktor-Objekten wie {{jsxref("Promise")}} wird die Eigenschaft auf `Constructor.prototype` installiert, sodass alle Instanzen des Konstruktors `[Symbol.toStringTag]` erben und in einen String umgewandelt werden können. Bei Nicht-Konstruktor-Objekten wie {{jsxref("Math")}} und {{jsxref("JSON")}} wird die Eigenschaft als statische Eigenschaft installiert, sodass das Namensraumobjekt selbst in einen String umgewandelt werden kann. Manchmal stellt der Konstruktor auch seine eigene `toString`-Methode bereit (zum Beispiel {{jsxref("Intl.Locale")}}), in diesem Fall wird die `[Symbol.toStringTag]`-Eigenschaft nur verwendet, wenn Sie explizit `Object.prototype.toString` darauf aufrufen.

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more
```

### Benutzerdefiniertes Tag mit toStringTag

Wenn Sie Ihre eigene Klasse erstellen, verwendet JavaScript standardmäßig das Tag "Object":

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

Mit Hilfe von `toStringTag` können Sie jetzt Ihr eigenes benutzerdefiniertes Tag setzen:

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

### toStringTag auf allen DOM-Prototypobjekten verfügbar

Aufgrund einer [WebIDL-Spezifikationsänderung](https://github.com/whatwg/webidl/pull/357) Mitte 2020 fügen Browser eine `Symbol.toStringTag`-Eigenschaft zu allen DOM-Prototypobjekten hinzu. Um beispielsweise auf die `Symbol.toStringTag`-Eigenschaft auf [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) zuzugreifen:

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

- [Polyfill von `Symbol.toStringTag` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Object.prototype.toString()")}}
