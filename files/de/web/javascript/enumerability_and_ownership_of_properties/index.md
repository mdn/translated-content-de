---
title: Aufzählbarkeit und Besitz von Eigenschaften
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
l10n:
  sourceCommit: a4b17b78fdca327f05e4a13e2b779d69e70212cd
---

{{jsSidebar("More")}}

Jede Eigenschaft in JavaScript-Objekten kann nach drei Faktoren klassifiziert werden:

- Aufzählbar oder nicht aufzählbar;
- String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol);
- Eigene Eigenschaft oder geerbte Eigenschaft aus der Prototypenkette.

_Aufzählbare Eigenschaften_ sind diejenigen Eigenschaften, deren internes aufzählbares Flag auf true gesetzt ist, was der Standard für Eigenschaften ist, die durch einfache Zuweisung oder durch einen Eigenschafts-Initializer erstellt werden. Eigenschaften, die über [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) und Ähnliches definiert werden, sind standardmäßig nicht aufzählbar. Die meisten Iterationsmethoden (wie z.B. [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen und [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) besuchen nur aufzählbare Schlüssel.

Der Besitz von Eigenschaften wird dadurch bestimmt, ob die Eigenschaft direkt zum Objekt gehört und nicht zu seiner Prototypenkette.

Alle Eigenschaften, ob aufzählbar oder nicht, String oder Symbol, eigen oder geerbt, können mit [Punkt- oder Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) abgerufen werden. In diesem Abschnitt werden wir uns auf die von JavaScript bereitgestellten Mittel konzentrieren, um eine Gruppe von Objekteigenschaften nacheinander zu besuchen.

## Abfragen von Objekteigenschaften

Es gibt vier eingebaute Möglichkeiten, eine Eigenschaft eines Objekts abzufragen. Sie unterstützen alle sowohl String- als auch Symbolschlüssel. Die folgende Tabelle fasst zusammen, wann jede Methode `true` zurückgibt.

|                                                                                                          | Aufzählbar, eigen | Aufzählbar, geerbt | Nicht-aufzählbar, eigen | Nicht-aufzählbar, geerbt |
| -------------------------------------------------------------------------------------------------------- | ----------------- | ------------------ | ----------------------- | ------------------------ |
| [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) | `true ✅`         | `false ❌`         | `false ❌`              | `false ❌`               |
| [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)             | `true ✅`         | `false ❌`         | `true ✅`               | `false ❌`               |
| [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)                      | `true ✅`         | `false ❌`         | `true ✅`               | `false ❌`               |
| [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)                                                   | `true ✅`         | `true ✅`          | `true ✅`               | `true ✅`                |

## Durchlaufen von Objekteigenschaften

Es gibt viele Methoden in JavaScript, die eine Gruppe von Eigenschaften eines Objekts durchlaufen. Manchmal werden diese Eigenschaften als Array zurückgegeben; manchmal werden sie einzeln in einer Schleife durchlaufen; manchmal werden sie zum Konstruktion oder zur Änderung eines anderen Objekts verwendet. Die folgende Tabelle fasst zusammen, wann eine Eigenschaft besucht werden kann.

Methoden, die nur Eigenschaften von Strings oder nur von Symbolen besuchen, werden eine zusätzliche Anmerkung haben. ✅ bedeutet, dass eine Eigenschaft dieses Typs besucht wird; ❌ bedeutet, dass sie nicht besucht wird.

|                                                                                                                                                                                                                                                               | Aufzählbar, eigen | Aufzählbar, geerbt | Nicht-aufzählbar, eigen | Nicht-aufzählbar, geerbt |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------ | ----------------------- | ------------------------ |
| [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)<br />[`Object.values`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/values)<br />[`Object.entries`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) | ✅<br />(Strings) | ❌                 | ❌                      | ❌                       |
| [`Object.getOwnPropertyNames`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)                                                                                                                                                   | ✅<br />(Strings) | ❌                 | ✅<br />(Strings)       | ❌                       |
| [`Object.getOwnPropertySymbols`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)                                                                                                                                               | ✅<br />(Symbole) | ❌                 | ✅<br />(Symbole)       | ❌                       |
| [`Object.getOwnPropertyDescriptors`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)                                                                                                                                       | ✅                | ❌                 | ✅                      | ❌                       |
| [`Reflect.ownKeys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)                                                                                                                                                                         | ✅                | ❌                 | ✅                      | ❌                       |
| [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)                                                                                                                                                                                           | ✅<br />(Strings) | ✅<br />(Strings)  | ❌                      | ❌                       |
| [`Object.assign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)<br />(Ab dem zweiten Parameter)                                                                                                                                             | ✅                | ❌                 | ❌                      | ❌                       |
| [Objekt-Spread](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax)                                                                                                                                                                                    | ✅                | ❌                 | ❌                      | ❌                       |

## Eigenschaften nach Aufzählbarkeit/Besitz abrufen

Bitte beachten Sie, dass dies nicht der effizienteste Algorithmus für alle Fälle ist, aber nützlich für eine schnelle Demonstration.

- Die Erkennung kann erfolgen durch `SimplePropertyRetriever.theGetMethodYouWant(obj).includes(prop)`
- Die Iteration kann erfolgen durch `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach((value, prop) => {});` (oder verwenden Sie `filter()`, `map()`, etc.)

```js
const SimplePropertyRetriever = {
  getOwnEnumerables(obj) {
    return this._getPropertyNames(obj, true, false, this._enumerable);
    // Or could use for...in filtered with Object.hasOwn or just this: return Object.keys(obj);
  },
  getOwnNonenumerables(obj) {
    return this._getPropertyNames(obj, true, false, this._notEnumerable);
  },
  getOwnEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      true,
      false,
      this._enumerableAndNotEnumerable,
    );
    // Or just use: return Object.getOwnPropertyNames(obj);
  },
  getPrototypeEnumerables(obj) {
    return this._getPropertyNames(obj, false, true, this._enumerable);
  },
  getPrototypeNonenumerables(obj) {
    return this._getPropertyNames(obj, false, true, this._notEnumerable);
  },
  getPrototypeEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      false,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  getOwnAndPrototypeEnumerables(obj) {
    return this._getPropertyNames(obj, true, true, this._enumerable);
    // Or could use unfiltered for...in
  },
  getOwnAndPrototypeNonenumerables(obj) {
    return this._getPropertyNames(obj, true, true, this._notEnumerable);
  },
  getOwnAndPrototypeEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      true,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  // Private static property checker callbacks
  _enumerable(obj, prop) {
    return Object.prototype.propertyIsEnumerable.call(obj, prop);
  },
  _notEnumerable(obj, prop) {
    return !Object.prototype.propertyIsEnumerable.call(obj, prop);
  },
  _enumerableAndNotEnumerable(obj, prop) {
    return true;
  },
  // Inspired by http://stackoverflow.com/a/8024294/271577
  _getPropertyNames(obj, iterateSelf, iteratePrototype, shouldInclude) {
    const props = [];
    do {
      if (iterateSelf) {
        Object.getOwnPropertyNames(obj).forEach((prop) => {
          if (props.indexOf(prop) === -1 && shouldInclude(obj, prop)) {
            props.push(prop);
          }
        });
      }
      if (!iteratePrototype) {
        break;
      }
      iterateSelf = true;
      obj = Object.getPrototypeOf(obj);
    } while (obj);
    return props;
  },
};
```

## Siehe auch

- [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)
- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)
- [`Object.prototype.hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [`Object.prototype.propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
- [`Object.getOwnPropertyNames()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`Object.getOwnPropertySymbols()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
- [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [`Object.getOwnPropertyDescriptors()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
- [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
- [`Reflect.ownKeys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
