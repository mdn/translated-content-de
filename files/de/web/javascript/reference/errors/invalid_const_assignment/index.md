---
title: "TypeError: ungültige Zuweisung an const \"x\""
slug: Web/JavaScript/Reference/Errors/Invalid_const_assignment
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültige Zuweisung an const" tritt auf, wenn versucht wurde, einen konstanten Wert zu ändern. JavaScript
[`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
Deklarationen können nicht neu zugewiesen oder neu deklariert werden.

## Nachricht

```plain
TypeError: Assignment to constant variable. (V8-basiert)
TypeError: invalid assignment to const 'x' (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Eine Konstante ist ein Wert, der während der normalen Ausführung durch das Programm nicht verändert werden kann. Sie
kann nicht durch eine Zuordnung geändert werden, und sie kann nicht neu deklariert werden. In JavaScript
werden Konstanten mit dem Schlüsselwort
[`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
deklariert.

## Beispiele

### Ungültige Neudeklaration

Die Zuweisung eines Wertes zum selben Konstantennamen im selben Block-Scope wird einen Fehler auslösen.

```js example-bad
const COLUMNS = 80;

// …

COLUMNS = 120; // TypeError: invalid assignment to const `COLUMNS'
```

### Fehlerbehebung

Es gibt verschiedene Möglichkeiten, diesen Fehler zu beheben. Prüfen Sie, was mit der betreffenden Konstante erreicht werden sollte.

#### Umbenennen

Falls Sie beabsichtigen, eine andere Konstante zu deklarieren, wählen Sie einen anderen Namen und benennen Sie um. Dieser Konstantenname ist in diesem Gültigkeitsbereich bereits vergeben.

```js example-good
const COLUMNS = 80;
const WIDE_COLUMNS = 120;
```

#### const, let oder var?

Verwenden Sie const nicht, wenn Sie nicht beabsichtigen, eine Konstante zu deklarieren. Vielleicht meinten Sie, eine block-scope Variable mit
[`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder
eine globale Variable mit
[`var`](/de/docs/Web/JavaScript/Reference/Statements/var) zu deklarieren.

```js example-good
let columns = 80;

// …

columns = 120;
```

#### Gültigkeitsbereich

Stellen Sie sicher, dass Sie sich im richtigen Gültigkeitsbereich befinden. Sollte diese Konstante in diesem Gültigkeitsbereich erscheinen oder war sie beispielsweise für eine Funktion gedacht?

```js example-good
const COLUMNS = 80;

function setupBigScreenEnvironment() {
  const COLUMNS = 120;
}
```

### const und Unveränderlichkeit

Die `const` Deklaration erstellt eine schreibgeschützte Referenz zu einem Wert. Es bedeutet jedoch **nicht**, dass der Wert, den sie hält, unveränderlich ist, nur dass die Variable nicht neu zugewiesen werden kann. Falls der Inhalt ein Objekt ist, bedeutet dies zum Beispiel, dass das Objekt selbst weiterhin verändert werden kann. Das bedeutet, dass der in einer Variablen gespeicherte Wert nicht verändert werden kann:

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
