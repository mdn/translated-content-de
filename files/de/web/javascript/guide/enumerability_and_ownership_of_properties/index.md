---
title: Enumerierbarkeit und Eigentum von Eigenschaften
slug: Web/JavaScript/Guide/Enumerability_and_ownership_of_properties
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Jede Eigenschaft in JavaScript-Objekten kann anhand von drei Faktoren klassifiziert werden:

- Enumerierbar oder nicht enumerierbar;
- Zeichenkette oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol);
- Eigene Eigenschaft oder von der Prototypen-Kette geerbte Eigenschaft.

_Enumerierbare Eigenschaften_ sind jene Eigenschaften, deren internes Enumerierbarkeits-Flag auf `true` gesetzt ist, was der Standard für Eigenschaften ist, die durch einfache Zuweisung oder einen Eigenschaftsinitialisierer erstellt werden. Eigenschaften, die durch [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) definiert werden, sind standardmäßig nicht enumerierbar. Die meisten Iterationsmethoden (wie [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen und [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) besuchen nur enumerierbare Schlüssel.

Das Eigentum von Eigenschaften wird bestimmt, indem überprüft wird, ob die Eigenschaft direkt zum Objekt gehört und nicht zur Prototypen-Kette.

Alle Eigenschaften, egal ob enumerierbar oder nicht, Zeichenkette oder Symbol, eigen oder geerbt, können mit [Punkt-Notation oder Klammer-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) abgerufen werden. In diesem Abschnitt konzentrieren wir uns auf die Mittel, die JavaScript bietet, um eine Gruppe von Objekteigenschaften einzeln zu besuchen.

## Abfragen von Objekteigenschaften

Es gibt vier eingebaute Möglichkeiten, eine Eigenschaft eines Objekts abzufragen. Sie unterstützen sowohl Zeichenketten- als auch Symbol-Schlüssel. Die folgende Tabelle fasst zusammen, wann jede Methode `true` zurückgibt.

|                                                                                                          | Enumerierbar, eigen | Enumerierbar, geerbt | Nicht enumerierbar, eigen | Nicht enumerierbar, geerbt |
| -------------------------------------------------------------------------------------------------------- | ------------------- | -------------------- | ------------------------- | -------------------------- |
| [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) | `true ✅`           | `false ❌`           | `false ❌`                | `false ❌`                 |
| [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)             | `true ✅`           | `false ❌`           | `true ✅`                 | `false ❌`                 |
| [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)                      | `true ✅`           | `false ❌`           | `true ✅`                 | `false ❌`                 |
| [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)                                                   | `true ✅`           | `true ✅`            | `true ✅`                 | `true ✅`                  |

## Traversieren von Objekteigenschaften

Es gibt viele Methoden in JavaScript, die eine Gruppe von Eigenschaften eines Objekts durchlaufen. Manchmal werden diese Eigenschaften als Array zurückgegeben; manchmal werden sie einer nach dem anderen in einer Schleife durchlaufen; manchmal werden sie zum Konstruieren oder Ändern eines anderen Objekts verwendet. Die folgende Tabelle fasst zusammen, wann eine Eigenschaft besucht werden kann.

Methoden, die nur Zeichenketten-Eigenschaften oder nur Symbol-Eigenschaften besuchen, werden eine zusätzliche Notiz haben. ✅ bedeutet, eine Eigenschaft dieses Typs wird besucht; ❌ bedeutet, sie wird es nicht.

|                                                                                                                                                                                                                                                               | Enumerierbar, eigen | Enumerierbar, geerbt | Nicht enumerierbar, eigen | Nicht enumerierbar, geerbt |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------------- | ------------------------- | -------------------------- |
| [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)<br />[`Object.values`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/values)<br />[`Object.entries`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) | ✅<br />(strings)   | ❌                   | ❌                        | ❌                         |
| [`Object.getOwnPropertyNames`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)                                                                                                                                                   | ✅<br />(strings)   | ❌                   | ✅<br />(strings)         | ❌                         |
| [`Object.getOwnPropertySymbols`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)                                                                                                                                               | ✅<br />(symbols)   | ❌                   | ✅<br />(symbols)         | ❌                         |
| [`Object.getOwnPropertyDescriptors`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)                                                                                                                                       | ✅                  | ❌                   | ✅                        | ❌                         |
| [`Reflect.ownKeys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)                                                                                                                                                                         | ✅                  | ❌                   | ✅                        | ❌                         |
| [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)                                                                                                                                                                                           | ✅<br />(strings)   | ✅<br />(strings)    | ❌                        | ❌                         |
| [`Object.assign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)<br />(After the first parameter)                                                                                                                                            | ✅                  | ❌                   | ❌                        | ❌                         |
| [Objektspreizung](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax)                                                                                                                                                                                  | ✅                  | ❌                   | ❌                        | ❌                         |

## Eigenschaften nach Enumerierbarkeit/Eigentum erhalten

Beachten Sie, dass dies nicht der effizienteste Algorithmus für alle Fälle ist, aber nützlich für eine schnelle Demonstration.

- Die Erkennung kann durch `SimplePropertyRetriever.theGetMethodYouWant(obj).includes(prop)` erfolgen
- Die Iteration kann durch `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach((value, prop) => {});` (oder verwenden Sie `filter()`, `map()`, etc.) erfolgen.

```js
const SimplePropertyRetriever = {
  getOwnEnumProps(obj) {
    return this._getPropertyNames(obj, true, false, this._enumerable);
    // Or could use for...in filtered with Object.hasOwn or just this: return Object.keys(obj);
  },
  getOwnNonEnumProps(obj) {
    return this._getPropertyNames(obj, true, false, this._notEnumerable);
  },
  getOwnProps(obj) {
    return this._getPropertyNames(
      obj,
      true,
      false,
      this._enumerableAndNotEnumerable,
    );
    // Or just use: return Object.getOwnPropertyNames(obj);
  },
  getPrototypeEnumProps(obj) {
    return this._getPropertyNames(obj, false, true, this._enumerable);
  },
  getPrototypeNonEnumProps(obj) {
    return this._getPropertyNames(obj, false, true, this._notEnumerable);
  },
  getPrototypeProps(obj) {
    return this._getPropertyNames(
      obj,
      false,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  getOwnAndPrototypeEnumProps(obj) {
    return this._getPropertyNames(obj, true, true, this._enumerable);
    // Or could use unfiltered for...in
  },
  getOwnAndPrototypeNonEnumProps(obj) {
    return this._getPropertyNames(obj, true, true, this._notEnumerable);
  },
  getOwnAndPrototypeEnumAndNonEnumProps(obj) {
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
