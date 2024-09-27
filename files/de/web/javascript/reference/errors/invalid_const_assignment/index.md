---
title: 'TypeError: ungültige Zuweisung an const "x"'
slug: Web/JavaScript/Reference/Errors/Invalid_const_assignment
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültige Zuweisung an const" tritt auf, wenn versucht wurde, einen konstanten Wert zu ändern. JavaScript [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen können nicht neu zugewiesen oder erneut deklariert werden.

## Nachricht

```plain
TypeError: Assignment to constant variable. (V8-based)
TypeError: invalid assignment to const 'x' (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Eine Konstante ist ein Wert, der während der normalen Ausführung des Programms nicht verändert werden kann. Sie kann nicht durch Neuzuweisung geändert werden und kann nicht erneut deklariert werden. In JavaScript werden Konstanten mit dem [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Schlüsselwort deklariert.

## Beispiele

### Ungültige Neudeklaration

Die Zuweisung eines Wertes zu einem bereits in derselben Block-Scope verwendeten Konstantennamen führt zu einem Fehler.

```js example-bad
const COLUMNS = 80;

// …

COLUMNS = 120; // TypeError: invalid assignment to const `COLUMNS'
```

### Behebung des Fehlers

Es gibt mehrere Möglichkeiten, diesen Fehler zu beheben. Prüfen Sie, was mit der betreffenden Konstante erreicht werden sollte.

#### Umbenennen

Wenn Sie vorhatten, eine andere Konstante zu deklarieren, wählen Sie einen anderen Namen und benennen Sie um. Dieser Konstantenname ist in diesem Geltungsbereich bereits vergeben.

```js example-good
const COLUMNS = 80;
const WIDE_COLUMNS = 120;
```

#### const, let oder var?

Verwenden Sie `const` nicht, wenn Sie nicht beabsichtigt haben, eine Konstante zu deklarieren. Vielleicht wollten Sie eine block-scope-Variable mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder eine globale Variable mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarieren.

```js example-good
let columns = 80;

// …

columns = 120;
```

#### Geltungsbereich

Überprüfen Sie, ob Sie sich im richtigen Geltungsbereich befinden. Sollte diese Konstante in diesem Geltungsbereich erscheinen oder war sie beispielsweise für eine Funktion gedacht?

```js example-good
const COLUMNS = 80;

function setupBigScreenEnvironment() {
  const COLUMNS = 120;
}
```

### const und Unveränderlichkeit

Die `const`-Deklaration erstellt eine schreibgeschützte Referenz auf einen Wert. Dies bedeutet **nicht**, dass der von ihr gehaltene Wert unveränderlich ist, sondern dass der Variablenbezeichner nicht neu zugewiesen werden kann. Wenn der Inhalt beispielsweise ein Objekt ist, kann das Objekt selbst immer noch verändert werden. Dies bedeutet, dass Sie den in einer Variablen gespeicherten Wert nicht ändern können:

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
