---
title: Promise[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Zugriffsoroperty **`Promise[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Promise-Methoden zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Sie erschwert auch bestimmte Optimierungen. Implementierer von Engines untersuchen derzeit, [ob dieses Feature entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich darauf zu verlassen, wenn möglich.

## Syntax

```js-nolint
Promise[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Promise-Verkettungsmethoden zu konstruieren, die neue Promises erstellen.

## Beschreibung

Die `[Symbol.species]` Accessor-Property gibt den Standardkonstruktor für `Promise`-Objekte zurück. Unterklassenspezifische Konstruktoren können diese überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
class Promise {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig auch den Konstruktor selbst zurückgeben.

```js
class SubPromise extends Promise {}
SubPromise[Symbol.species] === SubPromise; // true
```

Promise-Verkettungsmethoden — [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) und [`finally()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) — geben neue Promise-Objekte zurück. Sie erhalten den Konstruktor, um das neue Promise über `this.constructor[Symbol.species]` zu konstruieren. Wenn `this.constructor` `undefined` ist oder `this.constructor[Symbol.species]` `undefined` oder `null` ist, wird der Standardkonstruktor {{jsxref("Promise/Promise", "Promise()")}} verwendet. Andernfalls wird der Konstruktor verwendet, der von `this.constructor[Symbol.species]` zurückgegeben wird, um das neue Promise-Objekt zu konstruieren.

## Beispiele

### Species in gewöhnlichen Objekten

Die `Symbol.species`-Property gibt die Standardkonstruktorfunktion zurück, die der `Promise`-Konstruktor für `Promise` ist.

```js
Promise[Symbol.species]; // [Function: Promise]
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Promise`-Unterklasse, wie `MyPromise`, ist die `MyPromise`-Spezies der `MyPromise`-Konstruktor. Sie könnten diesen jedoch überschreiben wollen, um in Ihren abgeleiteten Klassenmethoden Eltern-`Promise`-Objekte zurückzugeben.

```js
class MyPromise extends Promise {
  // Override MyPromise species to the parent Promise constructor
  static get [Symbol.species]() {
    return Promise;
  }
}
```

Standardmäßig würden Promise-Methoden Promises mit dem Typ der Unterklasse zurückgeben.

```js
class MyPromise extends Promise {
  someValue = 1;
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // 1
```

Durch das Überschreiben von `[Symbol.species]` geben die Promise-Methoden den Basistyp `Promise` zurück.

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
