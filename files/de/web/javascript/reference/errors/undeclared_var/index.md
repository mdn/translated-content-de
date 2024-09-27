---
title: 'ReferenceError: Zuweisung an nicht erklärte Variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-[strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-only Ausnahme "Zuweisung an nicht erklärte Variable" tritt auf, wenn einem nicht erklärten Variable ein Wert zugewiesen wird.

## Meldung

```plain
ReferenceError: x is not defined (V8-based)
ReferenceError: assignment to undeclared variable x (Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}} in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) nur.

## Was ist schiefgelaufen?

Ein Wert wurde einer nicht erklärten Variable zugewiesen.
Mit anderen Worten fand eine Zuweisung ohne das `var` Schlüsselwort statt.
Es gibt einige Unterschiede zwischen erklärten und nicht erklärten Variablen, die zu unerwarteten Ergebnissen führen können, und deshalb präsentiert JavaScript einen Fehler im strict mode.

Drei Dinge, die man über erklärte und nicht erklärte Variablen wissen sollte:

- Erklärte Variablen sind im Ausführungskontext eingeschränkt, in dem sie erklärt sind.
  Nicht erklärte Variablen sind immer global.
- Erklärte Variablen werden erstellt, bevor irgendein Code ausgeführt wird.
  Nicht erklärte Variablen existieren erst, wenn der Code, der ihnen zugewiesen wird, ausgeführt wird.
- Erklärte Variablen sind eine nicht konfigurierbare Eigenschaft ihres Ausführungskontextes (Funktion oder global).
  Nicht erklärte Variablen sind konfigurierbar (z.B. können gelöscht werden).

Für weitere Details und Beispiele sehen Sie die [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Referenzseite.

Fehler bei der Zuweisung von nicht erklärten Variablen treten nur in [strict mode code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf.
In nicht-striktem Code werden sie stillschweigend ignoriert.

## Beispiele

### Ungültige Fälle

In diesem Fall ist die Variable "bar" eine nicht erklärte Variable.

```js example-bad
function foo() {
  "use strict";
  bar = true;
}
foo(); // ReferenceError: assignment to undeclared variable bar
```

### Gültige Fälle

Um "bar" zu einer erklärten Variable zu machen, können Sie ein [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/var) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Schlüsselwort davor setzen.

```js example-good
function foo() {
  "use strict";
  const bar = true;
}
foo();
```

## Siehe auch

- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
