---
title: "SyntaxError: \"use strict\" nicht erlaubt in Funktion mit nicht einfachen Parametern"
slug: Web/JavaScript/Reference/Errors/Strict_non_simple_params
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "'use strict' nicht erlaubt in Funktion" tritt auf, wenn eine "use strict"-Anweisung am Anfang einer Funktion mit {{jsxref("Functions/Default_parameters", "Standardparametern", "", 1)}}, {{jsxref("Functions/rest_parameters", "Restparametern", "", 1)}}, oder {{jsxref("Operators/Destructuring_assignment", "Destrukturierungsparametern", "", 1)}} verwendet wird.

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

Eine "use strict"-Anweisung wird am Anfang einer Funktion geschrieben, die einen der folgenden Parameter enthält:

- {{jsxref("Functions/Default_parameters", "Standardparameter", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Restparameter", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Destrukturierungsparameter", "", 1)}}

Eine "use strict"-Anweisung ist laut ECMAScript-Spezifikation am Anfang solcher Funktionen nicht erlaubt.

## Beispiele

### Funktionsdeklaration

In diesem Fall hat die Funktion `sum` die Standardparameter `a=1` und `b=2`:

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

Sollte die Funktion im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) sein, und ist es auch in Ordnung, dass das gesamte Skript oder die umschließende Funktion im strict mode ist, können Sie die "use strict"-Anweisung außerhalb der Funktion platzieren:

```js example-good
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### Funktionsexpression

Eine Funktionsexpression kann noch einen weiteren Workaround nutzen:

```js-nolint example-bad
const sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
```

Dies kann in die folgende Expression umgewandelt werden:

```js example-good
const sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### Pfeilfunktion

Wenn eine Pfeilfunktion auf die Variable `this` zugreifen muss, können Sie die Pfeilfunktion als umschließende Funktion verwenden:

```js-nolint example-bad
const callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
```

Dies kann in die folgende Expression umgewandelt werden:

```js example-good
const callback = (() => {
  "use strict";
  return (...args) => {
    return this.run(args);
  };
})();
```

## Siehe auch

- {{jsxref("Strict_mode", "Strict mode", "", 1)}}
- {{jsxref("Statements/function", "Funktionsdeklaration", "", 1)}}
- {{jsxref("Operators/function", "Funktionsexpression", "", 1)}}
- {{jsxref("Functions/Default_parameters", "Standardparameter", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Restparameter", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Destrukturierungsparameter", "", 1)}}
