---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.toStringTag`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toStringTag`. {{jsxref("Object.prototype.toString()")}} sucht dieses Symbol im `this` Wert, um die Eigenschaft zu finden, die einen String enthält, der den Typ des Objekts darstellt.

{{EmbedInteractiveExample("pages/js/symbol-tostringtag.html")}}

## Wert

Das bekannte Symbol `Symbol.toStringTag`.

{{js_property_attributes(0, 0, 0)}}

## Beispiele

### Standard-Tags

Einige Werte haben kein `Symbol.toStringTag`, aber spezielle `toString()`-Darstellungen. Für eine vollständige Liste, siehe {{jsxref("Object.prototype.toString()")}}.

```js
Object.prototype.toString.call("foo"); // "[object String]"
Object.prototype.toString.call([1, 2]); // "[object Array]"
Object.prototype.toString.call(3); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
// ... und mehr
```

### Eingebaute toStringTag-Symbole

Die meisten eingebauten Objekte stellen ihre eigene `[Symbol.toStringTag]`-Eigenschaft bereit. Bei fast allen eingebauten Objekten ist die `[Symbol.toStringTag]`-Eigenschaft nicht schreibbar, nicht aufzählbar und konfigurierbar; die Ausnahme ist {{jsxref("Iterator")}}, die aus Kompatibilitätsgründen schreibbar ist.

Bei Konstruktor-Objekten wie {{jsxref("Promise")}} wird die Eigenschaft auf `Constructor.prototype` installiert, so dass alle Instanzen des Konstruktors `[Symbol.toStringTag]` erben und umgewandelt werden können. Bei Nicht-Konstruktor-Objekten wie {{jsxref("Math")}} und {{jsxref("JSON")}} wird die Eigenschaft als statische Eigenschaft installiert, so dass das Namensraumobjekt selbst umgewandelt werden kann. Manchmal bietet der Konstruktor auch seine eigene `toString`-Methode an (zum Beispiel, {{jsxref("Intl.Locale")}}), in diesem Fall wird die `[Symbol.toStringTag]`-Eigenschaft nur verwendet, wenn `Object.prototype.toString` explizit darauf aufgerufen wird.

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... und mehr
```

### Benutzerdefiniertes Tag mit toStringTag

Beim Erstellen Ihrer eigenen Klasse verwendet JavaScript standardmäßig das "Object"-Tag:

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

Nun können Sie mit Hilfe von `toStringTag` Ihr eigenes benutzerdefiniertes Tag setzen:

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

### toStringTag verfügbar auf allen DOM-Prototypobjekten

Aufgrund einer [WebIDL-Spezifikationsänderung](https://github.com/whatwg/webidl/pull/357) Mitte 2020 fügen Browser eine `Symbol.toStringTag`-Eigenschaft zu allen DOM-Prototypobjekten hinzu. Um beispielsweise auf die `Symbol.toStringTag`-Eigenschaft auf {{domxref("HTMLButtonElement")}} zuzugreifen:

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
