---
title: "console: table() statische Methode"
short-title: table()
slug: Web/API/console/table_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.table()`** statische Methode zeigt tabellarische Daten als Tabelle an.

## Syntax

```js-nolint
console.table(data)
console.table(data, columns)
```

### Parameter

- `data`

  - : Die anzuzeigenden Daten. Diese müssen entweder ein Array oder ein Objekt sein. Jedes Element im Array oder jede Eigenschaft im Objekt wird durch eine Zeile in der Tabelle repräsentiert. Die erste Spalte der Tabelle ist mit `(index)` beschriftet, und ihre Werte sind die Array-Indizes oder Eigenschaftsnamen.

    Wenn die Elemente im Array oder die Eigenschaften im Objekt selbst Arrays oder Objekte sind, dann werden ihre Elemente oder Eigenschaften in der Zeile aufgelistet, jeweils eine pro Spalte.

    Beachten Sie, dass `console.table()` in Firefox auf die Anzeige von 1000 Zeilen begrenzt ist, einschließlich der Überschriftenzeile.

- `columns` {{optional_inline}}
  - : Ein Array, das verwendet werden kann, um die in der Tabelle angezeigten Spalten einzuschränken. Es enthält Indizes, wenn jeder Eintrag von `data` ein Array ist, oder Eigenschaftsnamen, wenn jeder Eintrag von `data` ein Objekt ist. Die resultierende Tabelle enthält dann nur Spalten für Elemente, die den angegebenen Indizes oder Namen entsprechen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

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

Wenn die Elemente im Array oder die Eigenschaften im Objekt selbst Arrays oder Objekte sind, dann werden ihre Elemente oder Eigenschaften in der Zeile aufgelistet, jeweils eine pro Spalte:

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

Wenn das Array Objekte enthält, werden die Spalten mit den Eigenschaftsnamen beschriftet.

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

### Einschränkung der angezeigten Spalten

Standardmäßig listet `console.table()` alle Elemente in jeder Zeile auf. Sie können den optionalen `columns`-Parameter verwenden, um eine Teilmenge der anzuzeigenden Spalten auszuwählen:

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge's Dokumentation zu `console.table()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#table)
- [Node.js-Dokumentation zu `console.table()`](https://nodejs.org/docs/latest/api/console.html#consoletabletabulardata-properties)
- [Google Chrome's Dokumentation zu `console.table()`](https://developer.chrome.com/docs/devtools/console/api/#table)
