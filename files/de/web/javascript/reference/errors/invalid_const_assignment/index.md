---
title: 'TypeError: ungültige Zuweisung zu const "x"'
slug: Web/JavaScript/Reference/Errors/Invalid_const_assignment
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültige Zuweisung zu const" tritt auf, wenn versucht wurde, einen konstanten Wert zu ändern. JavaScript
[`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
Deklarationen können weder neu zugewiesen noch neu deklariert werden.

## Nachricht

```plain
TypeError: Assignment to constant variable. (V8-based)
TypeError: invalid assignment to const 'x' (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Eine Konstante ist ein Wert, der während der normalen Ausführung durch das Programm nicht geändert werden kann. Sie kann nicht durch eine erneute Zuweisung geändert werden und kann nicht neu deklariert werden. In JavaScript werden Konstanten mit dem
[`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
Schlüsselwort deklariert.

## Beispiele

### Ungültige Neudeklaration

Die Zuweisung eines Wertes zum selben Konstantennamen im selben Blockbereich wird einen Fehler werfen.

```js example-bad
const COLUMNS = 80;

// …

COLUMNS = 120; // TypeError: invalid assignment to const `COLUMNS'
```

### Behebung des Fehlers

Es gibt mehrere Möglichkeiten, diesen Fehler zu beheben. Überprüfen Sie, was mit der betreffenden Konstante erreicht werden sollte.

#### Umbenennen

Wenn Sie eine andere Konstante deklarieren wollten, wählen Sie einen anderen Namen und benennen Sie um. Dieser Konstantenname ist in diesem Bereich bereits vergeben.

```js example-good
const COLUMNS = 80;
const WIDE_COLUMNS = 120;
```

#### const, let oder var?

Verwenden Sie const nicht, wenn Sie nicht beabsichtigt haben, eine Konstante zu deklarieren. Vielleicht wollten Sie eine blockgebundene Variable mit
[`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder
eine globale Variable mit
[`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarieren.

```js example-good
let columns = 80;

// …

columns = 120;
```

#### Gültigkeitsbereich

Prüfen Sie, ob Sie sich im richtigen Bereich befinden. Sollte diese Konstante in diesem Bereich erscheinen oder war sie beispielsweise in einer Funktion vorgesehen?

```js example-good
const COLUMNS = 80;

function setupBigScreenEnvironment() {
  const COLUMNS = 120;
}
```

### const und Unveränderlichkeit

Die `const`-Deklaration erstellt einen schreibgeschützten Verweis auf einen Wert. Dies bedeutet **nicht**, dass der von ihr gehaltene Wert unveränderlich ist, sondern nur, dass der Variablenidentifikator nicht neu zugewiesen werden kann. Wenn der Inhalt ein Objekt ist, bedeutet dies, dass das Objekt selbst noch geändert werden kann. Dies bedeutet, dass Sie den in einer Variablen gespeicherten Wert nicht verändern können:

```js example-bad
const obj = { foo: "bar" };
obj = { foo: "baz" }; // TypeError: invalid assignment to const `obj'
```

Aber Sie können die Eigenschaften in einer Variablen verändern:

```js example-good
obj.foo = "baz";
obj; // { foo: "baz" }
```

## Siehe auch

- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
