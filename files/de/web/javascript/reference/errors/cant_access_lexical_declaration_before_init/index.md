---
title: "ReferenceError: can't access lexical declaration 'X' before initialization"
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Die JavaScript-Ausnahme „can't access lexical declaration 'X' before initialization“ tritt auf, wenn auf eine lexikalische Variable zugegriffen wird, bevor sie initialisiert wurde.
Dies kann in jedem Gültigkeitsbereich (global, Modul, Funktion oder Block) passieren, wenn auf eine mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklarierte Variable zugegriffen wird, bevor ihre Deklaration ausgeführt wurde.

## Meldung

```plain
ReferenceError: Cannot access 'X' before initialization (V8-based)
ReferenceError: can't access lexical declaration 'X' before initialization (Firefox)
ReferenceError: Cannot access uninitialized variable. (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}

## Was ist schiefgelaufen?

Auf eine lexikalische Variable wurde zugegriffen, bevor sie initialisiert wurde.
Dies kann in jedem Gültigkeitsbereich (global, Modul, Funktion oder Block) passieren, wenn auf eine mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklarierte Variable zugegriffen wird, bevor ihre Deklaration ausgeführt wurde.

Entscheidend ist die Reihenfolge, in der der Zugriff und die Variablendeklaration ausgeführt werden, nicht die Reihenfolge, in der die Anweisungen im Code stehen.
Weitere Informationen finden Sie in der Beschreibung der [Temporal Dead Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz).

Bei Variablen, die mit `var` deklariert wurden, tritt dieses Problem nicht auf, da sie beim {{Glossary("Hoisting", "Hoisting")}} mit dem Standardwert `undefined` initialisiert werden.

Dieser Fehler kann auch bei [zyklischen Importen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#cyclic_imports) auftreten, wenn ein Modul eine Variable verwendet, deren Initialisierung davon abhängt, dass das Modul selbst ausgewertet wird.

## Beispiele

### Ungültige Fälle

In diesem Fall wird auf die Variable `foo` zugegriffen, bevor sie deklariert wird.
Zu diesem Zeitpunkt wurde `foo` noch nicht mit einem Wert initialisiert. Deshalb löst der Zugriff auf die Variable einen ReferenceError aus.

```js example-bad
function test() {
  // Accessing the 'const' variable foo before it's declared
  console.log(foo); // ReferenceError: foo is not initialized
  const foo = 33; // 'foo' is declared and initialized here using the 'const' keyword
}

test();
```

In diesem Beispiel wird auf die importierte Variable `a` zugegriffen, obwohl sie noch nicht initialisiert ist, da die Auswertung von `a.js` durch die Auswertung des aktuellen Moduls `b.js` blockiert wird.

```js example-bad
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

### Gültige Fälle

Im folgenden Beispiel deklarieren wir eine Variable mit dem Schlüsselwort `const`, bevor wir darauf zugreifen.

```js example-good
function test() {
  // Declaring variable foo
  const foo = 33;
  console.log(foo); // 33
}
test();
```

In diesem Beispiel erfolgt der Zugriff auf die importierte Variable `a` asynchron. Dadurch werden beide Module ausgewertet, bevor auf `a` zugegriffen wird.

```js example-good
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);
export const b = 1;
```

## Siehe auch

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/class", "class")}}
