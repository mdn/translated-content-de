---
title: 'ReferenceError: Zuordnung zu einer nicht deklarierten Variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-[Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-only-Ausnahme "Assignment to undeclared variable" tritt auf, wenn ein Wert einer nicht deklarierten Variablen zugewiesen wurde.

## Meldung

```plain
ReferenceError: x is not defined (V8-based)
ReferenceError: assignment to undeclared variable x (Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}} nur im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Ein Wert wurde einer nicht deklarierten Variablen zugewiesen. Mit anderen Worten, es gab eine Zuweisung ohne das `var`-Schlüsselwort. Es gibt einige Unterschiede zwischen deklarierten und nicht deklarierten Variablen, die zu unerwarteten Ergebnissen führen können, und deshalb stellt JavaScript im Strict-Modus einen Fehler dar.

Drei Dinge, die bei deklarierten und nicht deklarierten Variablen zu beachten sind:

- Deklarierte Variablen sind auf den Ausführungskontext beschränkt, in dem sie deklariert werden. Nicht deklarierte Variablen sind immer global.
- Deklarierte Variablen werden erstellt, bevor irgendein Code ausgeführt wird. Nicht deklarierte Variablen existieren erst, wenn der Code, der ihnen einen Wert zuweist, ausgeführt wird.
- Deklarierte Variablen sind eine nicht konfigurierbare Eigenschaft ihres Ausführungskontexts (Funktion oder global). Nicht deklarierte Variablen sind konfigurierbar (z.B. können gelöscht werden).

Weitere Details und Beispiele finden Sie auf der Referenzseite zu [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

Fehler bei Zuweisungen an nicht deklarierte Variablen treten nur im [Strict-Modus-Code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. In nicht-striktem Code werden sie stillschweigend ignoriert.

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

Um "bar" zu einer deklarierten Variablen zu machen, können Sie ein [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/var) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Schlüsselwort davor hinzufügen.

```js example-good
function foo() {
  "use strict";
  const bar = true;
}
foo();
```

## Siehe auch

- [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
