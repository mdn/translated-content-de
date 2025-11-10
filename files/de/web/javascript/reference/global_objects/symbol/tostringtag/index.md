---
title: Symbol.toStringTag
short-title: toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Dateneigenschaft **`Symbol.toStringTag`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toStringTag`. {{jsxref("Object.prototype.toString()")}} sucht dieses Symbol im `this`-Wert der Eigenschaft, die eine Zeichenfolge enthält, die den Typ des Objekts darstellt.

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

Die meisten eingebauten Objekte stellen ihre eigene `[Symbol.toStringTag]`-Eigenschaft bereit. Fast alle `[Symbol.toStringTag]`-Eigenschaften der eingebauten Objekte sind nicht beschreibbar, nicht aufzählbar und konfigurierbar; die Ausnahme ist {{jsxref("Iterator")}}, die aus Kompatibilitätsgründen beschreibbar ist.

Bei Konstruktorobjekten wie {{jsxref("Promise")}} wird die Eigenschaft auf `Constructor.prototype` installiert, sodass alle Instanzen des Konstruktors `[Symbol.toStringTag]` erben und als Zeichenfolge dargestellt werden können. Bei Nicht-Konstruktorobjekten wie {{jsxref("Math")}} und {{jsxref("JSON")}} wird die Eigenschaft als statische Eigenschaft installiert, sodass das Namensraum-Objekt selbst als Zeichenfolge dargestellt werden kann. Manchmal stellt der Konstruktor auch seine eigene `toString`-Methode bereit (zum Beispiel {{jsxref("Intl.Locale")}}), in welchem Fall die `[Symbol.toStringTag]`-Eigenschaft nur verwendet wird, wenn Sie explizit `Object.prototype.toString` darauf aufrufen.

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// … and more
```

### Benutzerdefiniertes Tag mit toStringTag

Beim Erstellen Ihrer eigenen Klasse verwendet JavaScript standardmäßig das "Object"-Tag:

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

Nun, mit Hilfe von `toStringTag` können Sie Ihr eigenes benutzerdefiniertes Tag festlegen:

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

### toStringTag verfügbar auf allen DOM-Prototypenobjekten

Aufgrund einer [WebIDL-Spezifikationsänderung](https://github.com/whatwg/webidl/pull/357) in der Mitte des Jahres 2020 fügen Browser eine `Symbol.toStringTag`-Eigenschaft zu allen DOM-Prototypenobjekten hinzu. Um zum Beispiel die `Symbol.toStringTag`-Eigenschaft auf [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) zuzugreifen:

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
