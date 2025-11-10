---
title: "TypeError: Klassenkonstruktoren müssen mit 'new' aufgerufen werden"
slug: Web/JavaScript/Reference/Errors/Class_ctor_no_new
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "class constructors must be invoked with 'new'" tritt auf, wenn ein [Klassenkonstruktor](/de/docs/Web/JavaScript/Reference/Classes) ohne das {{jsxref("Operators/new", "new")}} Schlüsselwort aufgerufen wird. Alle Klassenkonstruktoren müssen mit `new` aufgerufen werden.

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

Im JavaScript sind das _Aufrufen_ einer Funktion ohne `new` und das _Erzeugen_ einer Funktion mit `new` zwei verschiedene Operationen, und Funktionen können sich unterschiedlich verhalten, je nachdem, wie sie aufgerufen werden.

Traditionell wurden JavaScript-Funktionen sowohl als Konstruktoren als auch als normale Funktionen verwendet und können erkennen, wie sie mit [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) aufgerufen wurden. Klassenkonstruktoren sind jedoch immer Konstruktoren und können nicht als normale Funktionen aufgerufen werden.

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
