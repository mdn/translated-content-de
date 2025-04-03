---
title: 'ReferenceError: Zuweisung zu einer nicht deklarierten Variablen "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Errors")}}

Die JavaScript-[Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Nur-Ausnahme "Zuweisung zu einer nicht deklarierten Variablen" tritt auf, wenn ein Wert einer nicht deklarierten Variablen zugewiesen wurde.

## Nachricht

```plain
ReferenceError: x is not defined (V8-based)
ReferenceError: assignment to undeclared variable x (Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}} nur im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Ein Wert wurde einer nicht deklarierten Variablen zugewiesen.
Mit anderen Worten, es wurde eine Zuweisung ohne das `var`-Schlüsselwort durchgeführt.
Es gibt einige Unterschiede zwischen deklarierten und nicht deklarierten Variablen, die zu unerwarteten Ergebnissen führen können. Aus diesem Grund präsentiert JavaScript im Strict Mode einen Fehler.

Drei Dinge, die Sie über deklarierte und nicht deklarierte Variablen wissen sollten:

- Deklarierte Variablen sind im Ausführungskontext eingeschränkt, in dem sie deklariert sind.
  Nicht deklarierte Variablen sind immer global.
- Deklarierte Variablen werden erstellt, bevor jeglicher Code ausgeführt wird.
  Nicht deklarierte Variablen existieren erst, wenn der Code, der ihnen zuweist, ausgeführt wird.
- Deklarierte Variablen sind eine nicht konfigurierbare Eigenschaft ihres Ausführungskontexts (Funktion oder global).
  Nicht deklarierte Variablen sind konfigurierbar (z.B. können sie gelöscht werden).

Für mehr Details und Beispiele, siehe die [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Referenzseite.

Fehler bezüglich Zuweisungen zu nicht deklarierten Variablen treten nur im [Strict Mode Code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf.
In nicht-striktem Code werden sie stillschweigend ignoriert.

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

Um "bar" zu einer deklarierten Variablen zu machen, können Sie ein [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/var) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Schlüsselwort davor hinzufügen.

```js example-good
function foo() {
  "use strict";
  const bar = true;
}
foo();
```

## Siehe auch

- [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
