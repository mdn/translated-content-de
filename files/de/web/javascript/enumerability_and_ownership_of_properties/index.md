---
title: Aufzählbarkeit und Besitz von Eigenschaften
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
l10n:
  sourceCommit: a4b17b78fdca327f05e4a13e2b779d69e70212cd
---

{{jsSidebar("More")}}

Jede Eigenschaft in JavaScript-Objekten kann durch drei Faktoren klassifiziert werden:

- Aufzählbar oder nicht aufzählbar;
- String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol);
- Eigene Eigenschaft oder geerbte Eigenschaft aus der Prototypkette.

_Aufzählbare Eigenschaften_ sind solche Eigenschaften, deren internes aufzählbares Flag auf true gesetzt ist, was der Standard für Eigenschaften ist, die über einfache Zuweisung oder über einen Eigenschaftsinitialisierer erstellt werden. Eigenschaften, die über [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) und ähnliches definiert werden, sind standardmäßig nicht aufzählbar. Die meisten Iterationsmethoden (wie [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen und [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) besuchen nur aufzählbare Schlüssel.

Der Besitz von Eigenschaften wird dadurch bestimmt, ob die Eigenschaft direkt dem Objekt gehört und nicht seiner Prototypkette.

Alle Eigenschaften, ob aufzählbar oder nicht, String oder Symbol, eigen oder geerbt, können mit [Punktnotation oder Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zugegriffen werden. In diesem Abschnitt konzentrieren wir uns auf die Mittel, die JavaScript bereitstellt, um eine Gruppe von Objekteigenschaften nacheinander zu besuchen.

## Abfragen von Objekteigenschaften

Es gibt vier eingebaute Möglichkeiten, eine Eigenschaft eines Objekts abzufragen. Sie unterstützen alle sowohl String- als auch Symbolschlüssel. Die folgende Tabelle fasst zusammen, wann jede Methode `true` zurückgibt.

|                                                                                                          | Aufzählbar, eigene | Aufzählbar, geerbt | Nicht aufzählbar, eigene | Nicht aufzählbar, geerbt |
| -------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ | ------------------------ | ------------------------ |
| [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) | `true ✅`          | `false ❌`         | `false ❌`               | `false ❌`               |
| [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)             | `true ✅`          | `false ❌`         | `true ✅`                | `false ❌`               |
| [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)                      | `true ✅`          | `false ❌`         | `true ✅`                | `false ❌`               |
| [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)                                                   | `true ✅`          | `true ✅`          | `true ✅`                | `true ✅`                |

## Traversieren von Objekteigenschaften

Es gibt viele Methoden in JavaScript, die eine Gruppe von Eigenschaften eines Objekts durchlaufen. Manchmal werden diese Eigenschaften als ein Array zurückgegeben; manchmal werden sie in einer Schleife einzeln durchlaufen; manchmal werden sie zum Erstellen oder Bearbeiten eines anderen Objekts verwendet. Die folgende Tabelle fasst zusammen, wann eine Eigenschaft besucht werden kann.

Methoden, die nur String-Eigenschaften oder nur Symbol-Eigenschaften besuchen, werden eine zusätzliche Anmerkung erhalten. ✅ bedeutet, dass eine Eigenschaft dieses Typs besucht wird; ❌ bedeutet, dass sie nicht besucht wird.

|                                                                                                                                                                                                                                                               | Aufzählbar, eigene | Aufzählbar, geerbt | Nicht aufzählbar, eigene | Nicht aufzählbar, geerbt |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ | ------------------------ | ------------------------ |
| [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)<br />[`Object.values`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/values)<br />[`Object.entries`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) | ✅<br />(Strings)  | ❌                 | ❌                       | ❌                       |
| [`Object.getOwnPropertyNames`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)                                                                                                                                                   | ✅<br />(Strings)  | ❌                 | ✅<br />(Strings)        | ❌                       |
| [`Object.getOwnPropertySymbols`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)                                                                                                                                               | ✅<br />(Symbole)  | ❌                 | ✅<br />(Symbole)        | ❌                       |
| [`Object.getOwnPropertyDescriptors`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)                                                                                                                                       | ✅                 | ❌                 | ✅                       | ❌                       |
| [`Reflect.ownKeys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)                                                                                                                                                                         | ✅                 | ❌                 | ✅                       | ❌                       |
| [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)                                                                                                                                                                                           | ✅<br />(Strings)  | ✅<br />(Strings)  | ❌                       | ❌                       |
| [`Object.assign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)<br />(Nach dem ersten Parameter)                                                                                                                                            | ✅                 | ❌                 | ❌                       | ❌                       |
| [Objektausbreitung](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax)                                                                                                                                                                                | ✅                 | ❌                 | ❌                       | ❌                       |

## Erhalten von Eigenschaften nach Aufzählbarkeit/Besitz

Beachten Sie, dass dies nicht der effizienteste Algorithmus für alle Fälle ist, aber nützlich für eine schnelle Demonstration.

- Die Erkennung kann durch `SimplePropertyRetriever.theGetMethodYouWant(obj).includes(prop)` erfolgen
- Die Iteration kann durch `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach((value, prop) => {});` (oder verwenden Sie `filter()`, `map()`, etc.) erfolgen

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
