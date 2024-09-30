---
title: "SyntaxError: arguments ist in Feldern nicht gültig"
slug: Web/JavaScript/Reference/Errors/Arguments_not_allowed
l10n:
  sourceCommit: 2ae0fc1f2db3682ebbf5676ccc2e7975dc714dad
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "SyntaxError: arguments ist in Feldern nicht gültig" tritt auf, wenn der [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Identifikator in einem Klassenfeld-Initializer oder in einem statischen Initialisierungsblock außerhalb einer nicht-[Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) gelesen wird.

## Meldung

```plain
SyntaxError: 'arguments' is not allowed in class field initializer or static initialization block (V8-based)
SyntaxError: arguments is not valid in fields (Firefox)
SyntaxError: Unexpected identifier 'arguments'. Cannot reference 'arguments' in class field initializer. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ging schief?

Ein Klassenfeld-Initialisierungs-Ausdruck oder ein Klassenstatischer Initialisierungsblock hat `arguments` nicht in seinem Gültigkeitsbereich. Der Versuch, darauf zuzugreifen, ist ein Syntaxfehler.

- Dies gilt selbst dann, wenn `arguments` in einem übergeordneten Gültigkeitsbereich gebunden ist (z. B. wenn die Klasse in einer nicht-Pfeilfunktion verschachtelt ist).
- Eine nicht-Pfeilfunktion, die innerhalb dieses Gültigkeitsbereichs deklariert ist, wird dennoch ihr eigenes `arguments` binden und es normal lesen.

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
