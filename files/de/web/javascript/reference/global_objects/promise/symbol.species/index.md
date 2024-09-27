---
title: Promise[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Zugriffs-Eigenschaft **`Promise[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Promise-Methoden zu konstruieren.

> [!WARNING]
> Das Vorhandensein von `[Symbol.species]` erlaubt die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Es erschwert außerdem bestimmte Optimierungen erheblich. Entwickler untersuchen derzeit, [ob diese Funktion entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich nach Möglichkeit darauf zu verlassen.

## Syntax

```js-nolint
Promise[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte aus Promise-Verkettungsmethoden zu konstruieren, die neue Promises erstellen.

## Beschreibung

Die Zugangseigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `Promise`-Objekte zurück. Unterklassenkonstruktoren können diese überschreiben, um die Zuweisung des Konstruktors zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
class Promise {
  static get [Symbol.species]() {
    return this;
  }
}
```

Durch diese polymorphe Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig ebenfalls den Konstruktor selbst zurückgeben.

```js
class SubPromise extends Promise {}
SubPromise[Symbol.species] === SubPromise; // true
```

Promise-Verkettungsmethoden — [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) und [`finally()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) — geben neue Promise-Objekte zurück. Sie erhalten den Konstruktor, um das neue Promise durch `this.constructor[Symbol.species]` zu konstruieren. Wenn `this.constructor` `undefined` ist oder `this.constructor[Symbol.species]` `undefined` oder `null` ist, wird der Standardkonstruktor {{jsxref("Promise/Promise", "Promise()")}} verwendet. Ansonsten wird der von `this.constructor[Symbol.species]` zurückgegebene Konstruktor verwendet, um das neue Promise-Objekt zu konstruieren.

## Beispiele

### Species in gewöhnlichen Objekten

Die Eigenschaft `Symbol.species` gibt die Standard-Konstruktorfunktion zurück, die für `Promise` der Promise-Konstruktor ist.

```js
Promise[Symbol.species]; // [Function: Promise]
```

### Species in abgeleiteten Objekten

In einer Instanz eines benutzerdefinierten Promise-Unterklassen, wie `MyPromise`, ist die Species von `MyPromise` der `MyPromise`-Konstruktor. Sie möchten dies jedoch möglicherweise überschreiben, um in Ihren abgeleiteten Klassenmethoden übergeordnete `Promise`-Objekte zurückzugeben.

```js
class MyPromise extends Promise {
  // Override MyPromise species to the parent Promise constructor
  static get [Symbol.species]() {
    return Promise;
  }
}
```

Standardmäßig würden Promise-Methoden Promises des Typs der Unterklasse zurückgeben.

```js
class MyPromise extends Promise {
  someValue = 1;
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // 1
```

Durch Überschreiben von `[Symbol.species]` geben die Promise-Methoden den Basistyp `Promise` zurück.

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
