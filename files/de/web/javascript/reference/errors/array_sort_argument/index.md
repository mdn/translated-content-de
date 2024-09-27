---
title: "TypeError: ungültiges Array.prototype.sort Argument"
slug: Web/JavaScript/Reference/Errors/Array_sort_argument
l10n:
  sourceCommit: d311eaee27eef2a590de711bb545b741044cb9b8
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültiges Array.prototype.sort Argument" tritt auf, wenn das Argument von {{jsxref("Array.prototype.sort()")}} (und den verwandten Methoden: {{jsxref("Array.prototype.toSorted()")}}, {{jsxref("TypedArray.prototype.sort()")}}, {{jsxref("TypedArray.prototype.toSorted()")}}) weder {{jsxref("undefined")}} noch eine Funktion ist, die ihre Operanden vergleicht.

## Meldung

```plain
TypeError: The comparison function must be either a function or undefined (V8-based)

TypeError: invalid Array.prototype.sort argument (Firefox)
TypeError: non-function passed to Array.prototype.toSorted (Firefox)
TypeError: invalid %TypedArray%.prototype.sort argument (Firefox)

TypeError: Array.prototype.sort requires the comparator argument to be a function or undefined (Safari)
TypeError: Array.prototype.toSorted requires the comparator argument to be a function or undefined (Safari)
TypeError: TypedArray.prototype.sort requires the comparator argument to be a function or undefined (Safari)
TypeError: TypedArray.prototype.toSorted requires the comparator argument to be a function or undefined (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Das Argument von {{jsxref("Array.prototype.sort()")}} (und den verwandten Methoden: {{jsxref("Array.prototype.toSorted()")}}, {{jsxref("TypedArray.prototype.sort()")}}, {{jsxref("TypedArray.prototype.toSorted()")}}) wird erwartet, entweder {{jsxref("undefined")}} oder eine Funktion zu sein, die ihre Operanden vergleicht.

## Beispiele

### Ungültige Fälle

```js example-bad
[1, 3, 2].sort(5); // TypeError
students.toSorted("name"); // TypeError
```

### Gültige Fälle

```js example-good
[1, 3, 2].sort(); // [1, 2, 3]
[1, 3, 2].sort((a, b) => a - b); // [1, 2, 3]
students.toSorted((a, b) => a.name.localeCompare(b.name));
```

## Siehe auch

- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
