---
title: 'TypeError: "x" ist schreibgeschützt'
slug: Web/JavaScript/Reference/Errors/Read-only
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-[strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-only Ausnahme
"ist schreibgeschützt" tritt auf, wenn einer globalen Variable oder einem Objekteigenschaft
ein schreibgeschützter Wert zugewiesen wurde.

## Meldung

```plain
TypeError: Cannot assign to read only property 'x' of #<Object> (V8-based)
TypeError: "x" is read-only (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}} nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Der globalen Variable oder der Objekteigenschaft, der zugewiesen wurde, ist eine schreibgeschützte Eigenschaft.
(Technisch gesehen ist es eine [nicht-schreibbare Dateneigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#writable_attribute).)

Dieser Fehler tritt nur im [strict mode code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. In
nicht-strict code wird die Zuweisung stillschweigend ignoriert.

## Beispiele

### Ungültige Fälle

Schreibgeschützte Eigenschaften sind nicht sehr häufig, können aber mit
{{jsxref("Object.defineProperty()")}} oder {{jsxref("Object.freeze()")}} erstellt werden.

```js example-bad
"use strict";
const obj = Object.freeze({ name: "Elsa", score: 157 });
obj.score = 0; // TypeError

("use strict");
Object.defineProperty(this, "LUNG_COUNT", { value: 2, writable: false });
LUNG_COUNT = 3; // TypeError

("use strict");
const frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++; // TypeError
```

Es gibt auch einige schreibgeschützte Eigenschaften, die in JavaScript eingebaut sind. Vielleicht haben Sie versucht,
eine mathematische Konstante neu zu definieren.

```js example-bad
"use strict";
Math.PI = 4; // TypeError
```

Entschuldigung, das können Sie nicht tun.

Die globale Variable `undefined` ist ebenfalls schreibgeschützt, sodass Sie den
berüchtigten Fehler "undefined is not a function" nicht durch Folgendes unterdrücken können:

```js example-bad
"use strict";
undefined = function () {}; // TypeError: "undefined" is read-only
```

### Gültige Fälle

```js example-good
"use strict";
let obj = Object.freeze({ name: "Score", points: 157 });
obj = { name: obj.name, points: 0 }; // replacing it with a new object works
```

## Siehe auch

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
