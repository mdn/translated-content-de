---
title: 'ReferenceError: Zuordnung zu nicht deklariertem Variablen "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
l10n:
  sourceCommit: 6190afbbd086e1db1158730d10a4c7896fc8f0c2
---

Die JavaScript-[Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-only-Ausnahme "Zuordnung zu einer nicht deklarierten Variablen" tritt auf, wenn einem nicht deklarierten Variablen ein Wert zugewiesen wird.

## Meldung

```plain
ReferenceError: x is not defined (V8-based)
ReferenceError: assignment to undeclared variable x (Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}} nur im [Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Sie haben eine Zuweisung der Form `x = ...`, aber `x` wurde zuvor nicht mit dem Schlüsselwort `var`, `let` oder `const` deklariert.
Dieser Fehler tritt nur im [Strict-Mode-Code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf.
In Code ohne Strict-Mode erstellt die Zuweisung an eine nicht deklarierte Variable implizit eine Eigenschaft im globalen Scope.

## Beispiele

### Ungültige Fälle

In diesem Fall ist die Variable "bar" eine nicht deklarierte Variable.

```js example-bad
function foo() {
  "use strict";
  bar = true;
}
foo(); // ReferenceError: assignment to undeclared variable bar
```

### Gültige Fälle

Um "bar" als deklarierte Variable zu definieren, können Sie ein [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-, [`const`](/de/docs/Web/JavaScript/Reference/Statements/var)- oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Schlüsselwort davor setzen.

```js example-good
function foo() {
  "use strict";
  const bar = true;
}
foo();
```

## Siehe auch

- [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
