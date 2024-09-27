---
title: "SyntaxError: arguments ist in Feldern nicht gültig"
slug: Web/JavaScript/Reference/Errors/Arguments_not_allowed
l10n:
  sourceCommit: 2ae0fc1f2db3682ebbf5676ccc2e7975dc714dad
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "SyntaxError: arguments ist in Feldern nicht gültig" tritt auf, wenn der Bezeichner [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) in einem Klassenfeld-Initializer oder in einem statischen Initialisierungsblock außerhalb einer nicht-[Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) gelesen wird.

## Nachricht

```plain
SyntaxError: 'arguments' is not allowed in class field initializer or static initialization block (V8-based)
SyntaxError: arguments is not valid in fields (Firefox)
SyntaxError: Unexpected identifier 'arguments'. Cannot reference 'arguments' in class field initializer. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Ein Klassenfeld-Initializer-Ausdruck oder ein statischer Initialisierungsblock einer Klasse haben `arguments` nicht in ihrem Geltungsbereich. Der Versuch, darauf zuzugreifen, führt zu einem Syntaxfehler.

- Dies gilt auch, wenn `arguments` in einem übergeordneten Geltungsbereich gebunden ist (z. B. wenn die Klasse in einer nicht-Arrow-Funktion verschachtelt ist).
- Eine innerhalb dieses Geltungsbereichs deklarierte nicht-Arrow-Funktion bindet weiterhin ihre eigenen `arguments` und liest sie normal.

## Beispiele

```js example-bad
function makeOne() {
  class C {
    args = { ...arguments }; // SyntaxError: arguments is not valid in fields
  }
  return new C();
}
```

```js example-bad
let CArgs;
class C {
  static {
    CArgs = arguments; // SyntaxError: arguments is not valid in fields
  }
}
```

```js example-good
class C {
  args = {};
  constructor() {
    this.args = arguments; // You can use arguments in constructors
  }
  myMethod() {
    this.args = arguments; // You can also use it in methods
  }
}
```

```js example-good
function makeOne() {
  const _arguments = arguments;
  class C {
    args = { ..._arguments }; // Only the identifier is forbidden
  }
  return new C();
}
```

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
