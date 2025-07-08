---
title: 'ReferenceError: Zuweisung an nicht deklarierte Variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die im JavaScript-[Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) auftretende Ausnahme "Zuweisung an nicht deklarierte Variable" tritt auf, wenn ein Wert einer nicht deklarierten Variable zugewiesen wird.

## Nachricht

```plain
ReferenceError: x is not defined (V8-based)
ReferenceError: assignment to undeclared variable x (Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}} nur im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Ein Wert wurde einer nicht deklarierten Variable zugewiesen.
Mit anderen Worten: Es wurde eine Zuweisung ohne das `var`-Schlüsselwort vorgenommen.
Es gibt einige Unterschiede zwischen deklarierten und nicht deklarierten Variablen, die zu unerwarteten Ergebnissen führen können, weshalb JavaScript im Strict-Modus einen Fehler anzeigt.

Drei Dinge, die zu deklarierten und nicht deklarierten Variablen zu beachten sind:

- Deklarierte Variablen sind im Ausführungskontext, in dem sie deklariert wurden, eingeschränkt.
  Nicht deklarierte Variablen sind immer global.
- Deklarierte Variablen werden erstellt, bevor irgendein Code ausgeführt wird.
  Nicht deklarierte Variablen existieren erst, wenn der Code, der ihnen etwas zuweist, ausgeführt wird.
- Deklarierte Variablen sind eine nicht konfigurierbare Eigenschaft ihres Ausführungskontextes (Funktion oder global).
  Nicht deklarierte Variablen sind konfigurierbar (z. B. können sie gelöscht werden).

Für weitere Details und Beispiele siehe die Referenzseite zu [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

Fehler über Zuweisungen an nicht deklarierte Variablen treten nur im [Strict-Modus-Code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf.
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

Um "bar" zu einer deklarierten Variable zu machen, können Sie ein [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-, [`const`](/de/docs/Web/JavaScript/Reference/Statements/var)- oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Schlüsselwort davor setzen.

```js example-good
function foo() {
  "use strict";
  const bar = true;
}
foo();
```

## Siehe auch

- [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
