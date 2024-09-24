---
title: "ReferenceError: Auf lexikalische Deklaration 'X' vor der Initialisierung kann nicht zugegriffen werden"
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
l10n:
  sourceCommit: 305c92d4b39294fc9ddc167271a4e28c598b9d4e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Auf lexikalische Deklaration 'X' vor der Initialisierung kann nicht zugegriffen werden" tritt auf, wenn auf eine lexikalische Variable zugegriffen wird, bevor sie initialisiert wurde. Dies geschieht in jedem Gültigkeitsbereich (global, Modul, Funktion oder Block), wenn [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Variablen vor dem Punkt zugegriffen werden, an dem sie deklariert sind.

## Meldung

```plain
ReferenceError: Cannot access 'X' before initialization (V8-based)
ReferenceError: can't access lexical declaration 'X' before initialization (Firefox)
ReferenceError: Cannot access uninitialized variable. (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}

## Was ist schief gelaufen?

Auf eine lexikalische Variable wurde zugegriffen, bevor sie initialisiert wurde. Dies geschieht in jedem Gültigkeitsbereich (global, Modul, Funktion oder Block), wenn auf Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden, zugegriffen wird, bevor der Punkt, an dem sie deklariert sind, ausgeführt wurde.

Beachten Sie, dass die Ausführungsreihenfolge von Zugriff und Variablendeklaration entscheidend ist, nicht die Reihenfolge, in der die Anweisungen im Code erscheinen. Weitere Informationen finden Sie in der Beschreibung der [Temporal Dead Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz).

Dieses Problem tritt nicht bei Variablen auf, die mit `var` deklariert sind, da sie mit einem Standardwert von `undefined` initialisiert werden, wenn sie [gehoisted](/de/docs/Glossary/Hoisting) werden.

Dieser Fehler kann auch bei [zyklischen Importen](/de/docs/Web/JavaScript/Guide/Modules#cyclic_imports) auftreten, wenn ein Modul eine Variable verwendet, die davon abhängt, dass das Modul selbst ausgewertet wird.

## Beispiele

### Ungültige Fälle

In diesem Fall wird die Variable `foo` aufgerufen, bevor sie deklariert ist. Zu diesem Zeitpunkt wurde `foo` noch nicht mit einem Wert initialisiert, wodurch ein Referenzfehler ausgelöst wird.

```js example-bad
function test() {
  // Zugriff auf die 'const'-Variable foo, bevor sie deklariert ist
  console.log(foo); // ReferenceError: foo is not initialized
  const foo = 33; // 'foo' wird hier mit dem 'const'-Schlüsselwort deklariert und initialisiert
}

test();
```

In diesem Beispiel wird auf die importierte Variable `a` zugegriffen, aber sie ist nicht initialisiert, da die Auswertung von `a.js` durch die Auswertung des aktuellen Moduls `b.js` blockiert wird.

```js example-bad
// -- a.js (Entry-Modul) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

### Gültige Fälle

Im folgenden Beispiel deklarieren wir korrekt eine Variable mit dem `const`-Schlüsselwort, bevor wir auf sie zugreifen.

```js example-good
function test() {
  // Deklaration der Variable foo
  const foo = 33;
  console.log(foo); // 33
}
test();
```

In diesem Beispiel wird auf die importierte Variable `a` asynchron zugegriffen, sodass beide Module ausgewertet werden, bevor auf `a` zugegriffen wird.

```js example-good
// -- a.js (Entry-Modul) --
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
