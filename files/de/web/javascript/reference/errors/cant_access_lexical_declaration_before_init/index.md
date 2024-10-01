---
title: "ReferenceError: kann auf lexikalische Deklaration 'X' vor der Initialisierung nicht zugreifen"
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
l10n:
  sourceCommit: 305c92d4b39294fc9ddc167271a4e28c598b9d4e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "kann auf lexikalische Deklaration 'X' vor der Initialisierung nicht zugreifen" tritt auf, wenn auf eine lexikalische Variable zugegriffen wird, bevor sie initialisiert wurde. Dies passiert in jedem Geltungsbereich (global, Modul, Funktion oder Block), wenn [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Variablen aufgerufen werden, bevor der Punkt im Code erreicht wird, an dem sie deklariert sind.

## Meldung

```plain
ReferenceError: Cannot access 'X' before initialization (V8-based)
ReferenceError: can't access lexical declaration 'X' before initialization (Firefox)
ReferenceError: Cannot access uninitialized variable. (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}

## Was ist schiefgegangen?

Auf eine lexikalische Variable wurde zugegriffen, bevor sie initialisiert wurde. Dies passiert in jedem Geltungsbereich (global, Modul, Funktion oder Block), wenn Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert sind, aufgerufen werden, bevor der Punkt im Code erreicht wird, an dem sie deklariert sind.

Beachten Sie, dass die Reihenfolge des Zugriffs und der Variablendeklaration entscheidend ist, nicht die Reihenfolge, in der die Anweisungen im Code erscheinen. Für weitere Informationen siehe die Beschreibung der [Temporal Dead Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz).

Dieses Problem tritt nicht bei Variablen auf, die mit `var` deklariert sind, da diese beim {{Glossary("Hoisting", "Hoisting")}} mit einem Standardwert von `undefined` initialisiert werden.

Dieser Fehler kann auch bei [zyklischen Imports](/de/docs/Web/JavaScript/Guide/Modules#cyclic_imports) auftreten, wenn ein Modul eine Variable verwendet, die davon abhängt, dass das Modul selbst ausgewertet wird.

## Beispiele

### Ungültige Fälle

In diesem Fall wird die Variable `foo` aufgerufen, bevor sie deklariert ist. Zu diesem Zeitpunkt wurde `foo` noch nicht mit einem Wert initialisiert, daher führt der Zugriff auf die Variable zu einem Referenzfehler.

```js example-bad
function test() {
  // Accessing the 'const' variable foo before it's declared
  console.log(foo); // ReferenceError: foo is not initialized
  const foo = 33; // 'foo' is declared and initialized here using the 'const' keyword
}

test();
```

In diesem Beispiel wird die importierte Variable `a` aufgerufen, aber sie ist nicht initialisiert, da die Auswertung von `a.js` durch die Auswertung des aktuellen Moduls `b.js` blockiert wird.

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

Im folgenden Beispiel deklarieren wir korrekt eine Variable mit dem `const`-Schlüsselwort, bevor wir darauf zugreifen.

```js example-good
function test() {
  // Declaring variable foo
  const foo = 33;
  console.log(foo); // 33
}
test();
```

In diesem Beispiel wird die importierte Variable `a` asynchron aufgerufen, sodass beide Module ausgewertet werden, bevor auf `a` zugegriffen wird.

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
