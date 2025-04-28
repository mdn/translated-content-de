---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{JSRef}}

Die statische Daten-Eigenschaft **`Symbol.toStringTag`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toStringTag`. {{jsxref("Object.prototype.toString()")}} sucht dieses Symbol im `this` Wert auf, für die Eigenschaft, die einen String enthält, der den Typ des Objekts darstellt.

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

Das bekannte Symbol `Symbol.toStringTag`.

{{js_property_attributes(0, 0, 0)}}

## Beispiele

### Standard-Tags

Einige Werte haben kein `Symbol.toStringTag`, aber spezielle `toString()`-Darstellungen. Eine vollständige Liste finden Sie unter {{jsxref("Object.prototype.toString()")}}.

```js
Object.prototype.toString.call("foo"); // "[object String]"
Object.prototype.toString.call([1, 2]); // "[object Array]"
Object.prototype.toString.call(3); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
// … and more
```

### Eingebaute toStringTag-Symbole

Die meisten eingebauten Objekte bieten ihre eigene `[Symbol.toStringTag]`-Eigenschaft. Fast alle `[Symbol.toStringTag]`-Eigenschaften der eingebauten Objekte sind nicht beschreibbar, nicht aufzählbar und konfigurierbar; die Ausnahme ist {{jsxref("Iterator")}}, die aus Kompatibilitätsgründen beschreibbar ist.

Für Konstruktorobjekte wie {{jsxref("Promise")}} wird die Eigenschaft auf `Constructor.prototype` installiert, sodass alle Instanzen des Konstruktors `[Symbol.toStringTag]` erben und als String dargestellt werden können. Für Nicht-Konstruktorobjekte wie {{jsxref("Math")}} und {{jsxref("JSON")}} wird die Eigenschaft als statische Eigenschaft installiert, sodass das Namespace-Objekt selbst als String dargestellt werden kann. Manchmal bietet der Konstruktor auch seine eigene `toString`-Methode (zum Beispiel {{jsxref("Intl.Locale")}}), in diesem Fall wird die `[Symbol.toStringTag]`-Eigenschaft nur verwendet, wenn Sie explizit `Object.prototype.toString` darauf aufrufen.

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// … and more
```

### Benutzerdefiniertes Tag mit toStringTag

Wenn Sie Ihre eigene Klasse erstellen, verwendet JavaScript standardmäßig das "Object"-Tag:

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

Jetzt können Sie mit Hilfe von `toStringTag` Ihr eigenes benutzerdefiniertes Tag festlegen:

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

### toStringTag verfügbar auf allen DOM-Prototyp-Objekten

Aufgrund einer [Änderung in der WebIDL-Spezifikation](https://github.com/whatwg/webidl/pull/357) Mitte 2020, fügen Browser eine `Symbol.toStringTag`-Eigenschaft zu allen DOM-Prototyp-Objekten hinzu. Um beispielsweise auf die `Symbol.toStringTag`-Eigenschaft auf [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) zuzugreifen:

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
