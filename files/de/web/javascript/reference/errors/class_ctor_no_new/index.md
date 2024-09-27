---
title: "TypeError: class constructors must be invoked with 'new'"
slug: Web/JavaScript/Reference/Errors/Class_ctor_no_new
l10n:
  sourceCommit: b736420a8955d6e1ff513735944b3da6b92cf525
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "class constructors must be invoked with 'new'" tritt auf, wenn ein [Klassenkonstruktor](/de/docs/Web/JavaScript/Reference/Classes) ohne das Schlüsselwort {{jsxref("Operators/new", "new")}} aufgerufen wird. Alle Klassenkonstruktoren müssen mit `new` aufgerufen werden.

## Nachricht

```plain
TypeError: Class constructor X cannot be invoked without 'new' (V8-based)
TypeError: Class constructors cannot be invoked without 'new' (V8-based)
TypeError: class constructors must be invoked with 'new' (Firefox)
TypeError: Cannot call a class constructor without |new| (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

In JavaScript sind das _Aufrufen_ einer Funktion ohne `new` und das _Erstellen_ einer Funktion mit `new` zwei unterschiedliche Operationen, und Funktionen können sich je nach Aufrufweise unterschiedlich verhalten.

Traditionell wurden JavaScript-Funktionen sowohl als Konstruktoren als auch als normale Funktionen verwendet und können erkennen, wie sie aufgerufen wurden, indem sie [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden. Klassenkonstruktoren hingegen sind immer Konstruktoren und können nicht als normale Funktionen aufgerufen werden.

## Beispiele

### Ungültige Fälle

```js example-bad
class X {}

X(); // TypeError: class constructors must be invoked with 'new'
```

### Gültige Fälle

```js example-good
class X {}

new X();
```

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/new", "new")}}
