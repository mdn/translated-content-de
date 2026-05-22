---
title: "TypeError: calling a builtin X constructor without new is forbidden"
slug: Web/JavaScript/Reference/Errors/Builtin_ctor_no_new
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die JavaScript-Ausnahme "Der Aufruf eines eingebauten X-Konstruktors ohne new ist verboten" tritt auf, wenn Sie versuchen, einen eingebauten Konstruktor ohne das Schlüsselwort {{jsxref("new")}} aufzurufen. Alle modernen Konstruktoren, wie {{jsxref("Promise")}} und {{jsxref("Map")}}, müssen mit `new` aufgerufen werden.

## Meldung

```plain
TypeError: Constructor X requires 'new' (V8-based)
TypeError: Promise constructor cannot be invoked without 'new' (V8-based)
TypeError: calling a builtin X constructor without new is forbidden (Firefox)
TypeError: calling X constructor without new is invalid (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

In JavaScript sind _Funktionsaufruf_ ohne `new` und _Funktionskonstruktion_ mit `new` zwei unterschiedliche Operationen, und Funktionen können sich je nachdem, wie sie aufgerufen werden, anders verhalten.

Mit Ausnahme der folgenden veralteten Konstruktoren müssen alle modernen Konstruktoren mit `new` aufgerufen werden:

- {{jsxref("Object/Object", "Object()")}}
- {{jsxref("Function/Function", "Function()")}} (und seine Unterklassen)
- {{jsxref("Error/Error", "Error()")}} (und seine Unterklassen)
- {{jsxref("RegExp/RegExp", "RegExp()")}}
- {{jsxref("Array/Array", "Array()")}}

Einige andere Konstruktoren, wie {{jsxref("Date/Date", "Date()")}}, und primitive Wrapper, wie {{jsxref("String/String", "String()")}}, {{jsxref("Number/Number", "Number()")}}, und {{jsxref("Boolean/Boolean", "Boolean()")}}, können auch mit oder ohne `new` aufgerufen werden, aber die Rückgabewerte unterscheiden sich in den beiden Fällen.

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

- {{jsxref("new")}}
