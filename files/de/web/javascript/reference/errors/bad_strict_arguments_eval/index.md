---
title: "SyntaxError: 'arguments'/'eval' können im Strict-Modus-Code nicht definiert oder zugewiesen werden"
slug: Web/JavaScript/Reference/Errors/Bad_strict_arguments_eval
l10n:
  sourceCommit: ffeb9c97ea22867374910842fee6b2a5836a6ee6
---

{{jsSidebar("Errors")}}

Die JavaScript-[Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-spezifische Ausnahme "'arguments' können im Strict-Modus-Code nicht definiert oder zugewiesen werden" oder "'eval' können im Strict-Modus-Code nicht definiert oder zugewiesen werden" tritt auf, wenn versucht wird, eine [Bindung](/de/docs/Glossary/binding) namens `arguments` oder `eval` zu erstellen oder einem solchen Namen etwas zuzuweisen.

## Meldung

```plain
SyntaxError: Unexpected eval or arguments in strict mode (V8-based)
SyntaxError: 'arguments' can't be defined or assigned to in strict mode code (Firefox)
SyntaxError: Cannot modify 'arguments' in strict mode. (Safari)
SyntaxError: Cannot destructure to a parameter name 'arguments' in strict mode. (Safari)
SyntaxError: Cannot declare a variable named arguments in strict mode. (Safari)
SyntaxError: Cannot declare a catch variable named 'arguments' in strict mode. (Safari)
SyntaxError: 'arguments' is not a valid function name in strict mode. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im Strict Mode verhalten sich die Namen {{jsxref("Functions/arguments", "arguments")}} und {{jsxref("Global_Objects/eval", "eval")}} wie [reservierte Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words): Sie können nicht dazu gebracht werden, auf etwas anderes als das `arguments`-Objekt in Funktionen oder die globale `eval`-Funktion zu verweisen.

## Beispiele

### Ungültige Fälle

```js example-bad
"use strict";

const arguments = [1, 2, 3];
console.log(Math.max(...arguments));

function foo(...arguments) {
  console.log(arguments);
}
```

### Gültige Fälle

```js example-good
"use strict";

const args = [1, 2, 3];
console.log(Math.max(...args));

function foo(...args) {
  console.log(args);
}
```

## Siehe auch

- [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
