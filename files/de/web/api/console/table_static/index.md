---
title: "console: table() statische Methode"
short-title: table()
slug: Web/API/console/table_static
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.table()`** zeigt tabellarische Daten als Tabelle an.

Diese Funktion nimmt ein obligatorisches Argument `data`, das ein Array oder ein Objekt sein muss, und ein zusätzliches optionales Parameter `columns`.

Es protokolliert `data` als Tabelle. Jedes Element im Array (oder jede aufzählbare Eigenschaft, wenn `data` ein Objekt ist) wird eine Zeile in der Tabelle sein.

Die erste Spalte in der Tabelle wird mit `(index)` beschriftet. Wenn `data` ein Array ist, dann sind die Werte die Array-Indizes. Wenn `data` ein Objekt ist, dann sind die Werte die Eigenschaftsnamen. Beachten Sie, dass (in Firefox) `console.table` auf die Anzeige von 1000 Zeilen begrenzt ist (die erste Zeile ist der beschriftete Index).

### Kollektionen von primitiven Typen

Das `data`-Argument kann ein Array oder ein Objekt sein.

```js
// an array of strings

console.table(["apples", "oranges", "bananas"]);
```

| (index) | Werte     |
| ------- | --------- |
| 0       | 'apples'  |
| 1       | 'oranges' |
| 2       | 'bananas' |

```js
// an object whose properties are strings

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const me = new Person("Tyrone", "Jones");

console.table(me);
```

| (index)   | Werte    |
| --------- | -------- |
| firstName | 'Tyrone' |
| lastName  | 'Jones'  |

### Kollektionen von zusammengesetzten Typen

Wenn die Elemente im Array oder die Eigenschaften im Objekt selbst Arrays oder Objekte sind, werden deren Elemente oder Eigenschaften in der Zeile aufgezählt, eine pro Spalte:

```js
// an array of arrays

const people = [
  ["Tyrone", "Jones"],
  ["Janet", "Smith"],
  ["Maria", "Cruz"],
];
console.table(people);
```

| (index) | 0        | 1       |
| ------- | -------- | ------- |
| 0       | 'Tyrone' | 'Jones' |
| 1       | 'Janet'  | 'Smith' |
| 2       | 'Maria'  | 'Cruz'  |

```js
// an array of objects

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([tyrone, janet, maria]);
```

Beachten Sie, dass wenn das Array Objekte enthält, die Spalten mit dem Eigenschaftsnamen beschriftet werden.

| (index) | firstName | lastName |
| ------- | --------- | -------- |
| 0       | 'Tyrone'  | 'Jones'  |
| 1       | 'Janet'   | 'Smith'  |
| 2       | 'Maria'   | 'Cruz'   |

```js
// an object whose properties are objects

const family = {};

family.mother = new Person("Janet", "Jones");
family.father = new Person("Tyrone", "Jones");
family.daughter = new Person("Maria", "Jones");

console.table(family);
```

| (index)  | firstName | lastName |
| -------- | --------- | -------- |
| daughter | 'Maria'   | 'Jones'  |
| father   | 'Tyrone'  | 'Jones'  |
| mother   | 'Janet'   | 'Jones'  |

### Einschränken der angezeigten Spalten

Standardmäßig listet `console.table()` alle Elemente in jeder Zeile auf. Sie können das optionale `columns`-Parameter verwenden, um eine Teilmenge von Spalten auszuwählen, die angezeigt werden sollen:

```js
// an array of objects, logging only firstName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([tyrone, janet, maria], ["firstName"]);
```

| (index) | firstName |
| ------- | --------- |
| 0       | 'Tyrone'  |
| 1       | 'Janet'   |
| 2       | 'Maria'   |

### Sortieren von Spalten

Sie können die Tabelle nach einer bestimmten Spalte sortieren, indem Sie auf das Label dieser Spalte klicken.

## Syntax

```js-nolint
table(data)
table(data, columns)
```

### Parameter

- `data`
  - : Die anzuzeigenden Daten. Dies muss entweder ein Array oder ein Objekt sein.
- `columns`
  - : Ein Array mit den Namen der Spalten, die in die Ausgabe aufgenommen werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation für `console.table()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#table)
- [Node.JS Dokumentation für `console.table()`](https://nodejs.org/docs/latest/api/console.html#consoletabletabulardata-properties)
- [Google Chromes Dokumentation für `console.table()`](https://developer.chrome.com/docs/devtools/console/api/#table)
