---
title: 'SyntaxError: "use strict" nicht erlaubt in Funktion mit nicht einfachen Parametern'
slug: Web/JavaScript/Reference/Errors/Strict_non_simple_params
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "`"use strict"` nicht erlaubt in Funktion" tritt auf,
wenn eine `"use strict"`-Anweisung am Anfang einer Funktion verwendet wird, die
{{jsxref("Functions/Default_parameters", "Standardparameter", "", 1)}},
{{jsxref("Functions/rest_parameters", "Rest-Parameter", "", 1)}} oder
{{jsxref("Operators/Destructuring", "Destrukturierungs-Parameter", "", 1)}} hat.

## Meldung

```plain
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list (V8-based)
SyntaxError: "use strict" not allowed in function with default parameter (Firefox)
SyntaxError: "use strict" not allowed in function with rest parameter (Firefox)
SyntaxError: "use strict" not allowed in function with destructuring parameter (Firefox)
SyntaxError: 'use strict' directive not allowed inside a function with a non-simple parameter list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Eine `"use strict"`-Anweisung ist am Anfang einer Funktion geschrieben, die einen
der folgenden Parameter hat:

- {{jsxref("Functions/Default_parameters", "Standardparameter", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest-Parameter", "", 1)}}
- {{jsxref("Operators/Destructuring", "Destrukturierungs-Parameter", "", 1)}}

Eine `"use strict"`-Anweisung ist am Anfang solcher Funktionen laut
der ECMAScript-Spezifikation nicht erlaubt.

## Beispiele

### Funktionsdeklaration

In diesem Fall hat die Funktion `sum` Standardparameter `a=1` und
`b=2`:

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

Wenn die Funktion im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) sein soll und
das gesamte Skript oder die umgebende Funktion ebenfalls im Strict Mode sein kann, können Sie die
`"use strict"`-Anweisung außerhalb der Funktion verschieben:

```js example-good
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### Funktionsausdruck

Ein Funktionsausdruck kann eine andere Lösung verwenden:

```js-nolint example-bad
const sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
```

Dies kann in den folgenden Ausdruck umgewandelt werden:

```js example-good
const sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### Pfeilfunktion

Wenn eine Pfeilfunktion auf die Variable `this` zugreifen muss, können Sie die
Pfeilfunktion als umgebende Funktion verwenden:

```js-nolint example-bad
const callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
```

Dies kann in den folgenden Ausdruck umgewandelt werden:

```js example-good
const callback = (() => {
  "use strict";
  return (...args) => this.run(args);
})();
```

## Siehe auch

- {{jsxref("Strict_mode", "Strict Mode", "", 1)}}
- {{jsxref("Statements/function", "Funktionsdeklaration", "", 1)}}
- {{jsxref("Operators/function", "Funktionsausdruck", "", 1)}}
- {{jsxref("Functions/Default_parameters", "Standardparameter", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest-Parameter", "", 1)}}
- {{jsxref("Operators/Destructuring", "Destrukturierungs-Parameter", "", 1)}}
