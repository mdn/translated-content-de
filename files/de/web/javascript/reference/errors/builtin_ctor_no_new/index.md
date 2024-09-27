---
title: "TypeError: Aufruf eines eingebauten X-Konstruktors ohne new ist verboten"
slug: Web/JavaScript/Reference/Errors/Builtin_ctor_no_new
l10n:
  sourceCommit: b736420a8955d6e1ff513735944b3da6b92cf525
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Aufruf eines eingebauten X-Konstruktors ohne new ist verboten" tritt auf, wenn Sie versuchen, einen eingebauten Konstruktor ohne das Schlüsselwort {{jsxref("Operators/new", "new")}} aufzurufen. Alle modernen Konstruktoren wie {{jsxref("Promise")}} und {{jsxref("Map")}} müssen mit `new` aufgerufen werden.

## Nachricht

```plain
TypeError: Constructor X requires 'new' (V8-based)
TypeError: Promise constructor cannot be invoked without 'new' (V8-based)
TypeError: calling a builtin X constructor without new is forbidden (Firefox)
TypeError: calling X constructor without new is invalid (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

In JavaScript sind das _Aufrufen_ einer Funktion ohne `new` und das _Konstruktieren_ einer Funktion mit `new` zwei unterschiedliche Operationen, und Funktionen können sich unterschiedlich verhalten, je nachdem, wie sie aufgerufen werden.

Abgesehen von den folgenden Legacy-Konstruktoren müssen alle modernen Konstruktoren mit `new` aufgerufen werden:

- {{jsxref("Object/Object", "Object()")}}
- {{jsxref("Function/Function", "Function()")}} (und seine Unterklassen)
- {{jsxref("Error/Error", "Error()")}} (und seine Unterklassen)
- {{jsxref("RegExp/RegExp", "RegExp()")}}
- {{jsxref("Array/Array", "Array()")}}

Einige andere Konstruktoren wie {{jsxref("Date/Date", "Date()")}} und primitive Wrapper wie {{jsxref("String/String", "String()")}}, {{jsxref("Number/Number", "Number()")}} und {{jsxref("Boolean/Boolean", "Boolean()")}} können ebenfalls mit oder ohne `new` aufgerufen werden, aber die Rückgabetypen unterscheiden sich in den beiden Fällen.

Auf jeder Konstruktorseite finden Sie Informationen darüber, ob der Konstruktor mit `new` aufgerufen werden muss.

## Beispiele

### Ungültige Fälle

```js example-bad
const m = Map(); // TypeError: calling a builtin Map constructor without new is forbidden
```

### Gültige Fälle

```js example-good
const m = new Map();
```

## Siehe auch

- {{jsxref("Operators/new", "new")}}
