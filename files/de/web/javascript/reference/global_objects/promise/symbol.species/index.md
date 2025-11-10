---
title: Promise[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Zugriffseigenschaft **`Promise[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Promise-Methoden zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` erlaubt die Ausführung von beliebigem Code und kann Sicherheitslücken erzeugen. Außerdem erschwert sie bestimmte Optimierungen erheblich. Entwickler von Engines [untersuchen, ob dieses Feature entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich darauf zu verlassen, wenn möglich.

## Syntax

```js-nolint
Promise[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte aus Promise-Verkettungsmethoden zu konstruieren, die neue Promises erstellen.

## Beschreibung

Die Eigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `Promise`-Objekte zurück. Unterklassenkonstruktoren können sie überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Grunde:

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

Promise-Verkettungsmethoden — [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) und [`finally()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) — geben neue Promise-Objekte zurück. Sie erhalten den Konstruktor, um das neue Promise zu konstruieren, durch `this.constructor[Symbol.species]`. Wenn `this.constructor` `undefined` ist, oder wenn `this.constructor[Symbol.species]` `undefined` oder `null` ist, wird der Standard-{{jsxref("Promise/Promise", "Promise()")}}-Konstruktor verwendet. Andernfalls wird der vom `this.constructor[Symbol.species]` zurückgegebene Konstruktor verwendet, um das neue Promise-Objekt zu konstruieren.

## Beispiele

### Species in gewöhnlichen Objekten

Die `Symbol.species`-Eigenschaft gibt die Standard-Konstruktorfunktion zurück, die für `Promise` der `Promise`-Konstruktor ist.

```js
Promise[Symbol.species]; // [Function: Promise]
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Promise`-Unterklasse, wie `MyPromise`, ist die `MyPromise`-Species der `MyPromise`-Konstruktor. Sie könnten dies jedoch überschreiben wollen, um in Ihren abgeleiteten Klassenmethoden übergeordnete `Promise`-Objekte zurückzugeben.

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

Durch das Überschreiben von `[Symbol.species]` werden die Promise-Methoden den Basistyp `Promise` zurückgeben.

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
