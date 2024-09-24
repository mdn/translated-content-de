---
title: Promise[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Zugriffs-Eigenschaft **`Promise[Symbol.species]`** gibt den Konstruktor zurück, der zum Erstellen von Rückgabewerten von Promise-Methoden verwendet wird.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Es macht auch bestimmte Optimierungen deutlich schwieriger. Entwickler von Engines [untersuchen, ob dieses Merkmal entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es nach Möglichkeit, sich darauf zu verlassen.

## Syntax

```js-nolint
Promise[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Promise-Verkettungsmethoden zu erstellen, die neue Promises generieren.

## Beschreibung

Die `[Symbol.species]` Zugriffs-Eigenschaft gibt den Standardkonstruktor für `Promise`-Objekte zurück. Subklassen-Konstruktoren können es überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Grunde:

```js
// Hypothetische zugrundeliegende Implementierung zur Veranschaulichung
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

Verkettungsmethoden bei Promises — [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) und [`finally()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) — geben neue Promise-Objekte zurück. Sie erhalten den Konstruktor, um das neue Promise zu erstellen, durch `this.constructor[Symbol.species]`. Wenn `this.constructor` nicht definiert ist, oder wenn `this.constructor[Symbol.species]` nicht definiert oder `null` ist, wird der Standard-{{jsxref("Promise/Promise", "Promise()")}}-Konstruktor verwendet. Andernfalls wird der vom `this.constructor[Symbol.species]` zurückgegebene Konstruktor verwendet, um das neue Promise-Objekt zu erstellen.

## Beispiele

### Species in normalen Objekten

Die `Symbol.species`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, die der `Promise`-Konstruktor für `Promise` ist.

```js
Promise[Symbol.species]; // [Function: Promise]
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Promise`-Unterklasse, wie `MyPromise`, ist die `MyPromise`-Species der `MyPromise`-Konstruktor. Sie möchten dies jedoch möglicherweise überschreiben, um in Ihren abgeleiteten Klassenmethoden übergeordnete `Promise`-Objekte zurückzugeben.

```js
class MyPromise extends Promise {
  // Überschreiben Sie MyPromise-Species mit dem übergeordneten Promise-Konstruktor
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

Durch das Überschreiben von `[Symbol.species]` geben die Promise-Methoden den Basis-`Promise`-Typ zurück.

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
