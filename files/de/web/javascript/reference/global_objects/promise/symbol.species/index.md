---
title: Promise[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Zugriffs-Eigenschaft **`Promise[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Promise-Methoden zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Sie erschwert auch gewisse Optimierungen erheblich. Engine-Implementierer untersuchen [ob diese Funktion entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich darauf zu verlassen, wenn möglich.

## Syntax

```js-nolint
Promise[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Promiseketten-Methoden zu konstruieren, die neue Promises erzeugen.

## Beschreibung

Die `[Symbol.species]`-Zugriffseigenschaft gibt den Standardkonstruktor für `Promise`-Objekte zurück. Unterklasse-Konstruktoren können ihn überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
class Promise {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig ebenfalls den Konstruktor selbst zurückgeben.

```js
class SubPromise extends Promise {}
SubPromise[Symbol.species] === SubPromise; // true
```

Promise-Ketten-Methoden — [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) und [`finally()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) — geben neue Promise-Objekte zurück. Sie erhalten den Konstruktor, um das neue Promise zu konstruieren, durch `this.constructor[Symbol.species]`. Wenn `this.constructor` `undefined` ist oder wenn `this.constructor[Symbol.species]` `undefined` oder `null` ist, wird der Standard-{{jsxref("Promise/Promise", "Promise()")}}-Konstruktor verwendet. Andernfalls wird der durch `this.constructor[Symbol.species]` zurückgegebene Konstruktor verwendet, um das neue Promise-Objekt zu konstruieren.

## Beispiele

### Species in gewöhnlichen Objekten

Die `Symbol.species`-Eigenschaft gibt die Standard-Konstruktorfunktion zurück, die der `Promise`-Konstruktor für `Promise` ist.

```js
Promise[Symbol.species]; // [Function: Promise]
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Promise`-Unterklasse wie `MyPromise` ist das `MyPromise`-Species der `MyPromise`-Konstruktor. Allerdings möchten Sie dies vielleicht überschreiben, um in Ihren abgeleiteten Klassenmethoden übergeordnete `Promise`-Objekte zurückzugeben.

```js
class MyPromise extends Promise {
  // Override MyPromise species to the parent Promise constructor
  static get [Symbol.species]() {
    return Promise;
  }
}
```

Standardmäßig würden Promise-Methoden Promises vom Typ der Unterklasse zurückgeben.

```js
class MyPromise extends Promise {
  someValue = 1;
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // 1
```

Durch das Überschreiben von `[Symbol.species]` werden die Promise-Methoden den Basis-`Promise`-Typ zurückgeben.

```js
class MyPromise extends Promise {
  someValue = 1;
  static get [Symbol.species]() {
    return Promise;
  }
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Symbol.species")}}
