---
title: 'TypeError: ungültige Zuweisung zu const "x"'
slug: Web/JavaScript/Reference/Errors/Invalid_const_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "ungültige Zuweisung zu const" tritt auf, wenn versucht wurde, einen Konstantenwert zu ändern. JavaScript
[`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
Deklarationen können nicht neu zugewiesen oder neu deklariert werden.

## Nachricht

```plain
TypeError: Assignment to constant variable. (V8-based)
TypeError: invalid assignment to const 'x' (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Eine Konstante ist ein Wert, der während der normalen Ausführung des Programms nicht verändert werden kann. Sie
kann nicht durch Zuweisung geändert werden und kann nicht neu deklariert werden. In JavaScript
werden Konstanten mit dem
[`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
Schlüsselwort deklariert.

## Beispiele

### Ungültige Neudeklaration

Die Zuweisung eines Wertes an denselben Konstantennamen im selben Blockscope wird einen Fehler auslösen.

```js example-bad
const COLUMNS = 80;

// …

COLUMNS = 120; // TypeError: invalid assignment to const `COLUMNS'
```

### Behebung des Fehlers

Es gibt mehrere Möglichkeiten, diesen Fehler zu beheben. Überprüfen Sie, was mit der betreffenden Konstanten erreicht werden sollte.

#### Umbenennen

Falls Sie vorhatten, eine andere Konstante zu deklarieren, wählen Sie einen anderen Namen und benennen Sie um. Dieser Konstantenname ist bereits in diesem Scope belegt.

```js example-good
const COLUMNS = 80;
const WIDE_COLUMNS = 120;
```

#### const, let oder var?

Verwenden Sie const nicht, wenn Sie keine Konstante deklarieren wollten. Vielleicht wollten Sie eine block-skopierte Variable mit
[`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder
eine globale Variable mit
[`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarieren.

```js example-good
let columns = 80;

// …

columns = 120;
```

#### Scoping

Überprüfen Sie, ob Sie sich im richtigen Scope befinden. Sollte diese Konstante in diesem Scope erscheinen, oder war sie für eine Funktion bestimmt?

```js example-good
const COLUMNS = 80;

function setupBigScreenEnvironment() {
  const COLUMNS = 120;
}
```

### const und Unveränderlichkeit

Die `const` Deklaration erstellt eine schreibgeschützte Referenz zu einem Wert. Es bedeutet
**nicht**, dass der von ihr gehaltene Wert unveränderlich ist, sondern nur, dass der Variablenbezeichner nicht neu zugewiesen werden kann. Zum Beispiel, wenn der Inhalt ein Objekt ist, kann dieses Objekt selbst immer noch verändert werden. Das bedeutet, dass Sie den in einer Variablen gespeicherten Wert nicht ändern können:

```js example-bad
const obj = { foo: "bar" };
obj = { foo: "baz" }; // TypeError: invalid assignment to const `obj'
```

Aber Sie können die Eigenschaften in einer Variablen ändern:

```js example-good
obj.foo = "baz";
obj; // { foo: "baz" }
```

## Siehe auch

- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
