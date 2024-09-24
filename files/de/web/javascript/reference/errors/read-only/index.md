---
title: "TypeError: \"x\" ist schreibgeschützt"
slug: Web/JavaScript/Reference/Errors/Read-only
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-[Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-only Ausnahme
"ist schreibgeschützt" tritt auf, wenn eine globale Variable oder ein Objekt
Eigenschaft, die zugewiesen wurde, eine schreibgeschützte Eigenschaft ist.

## Meldung

```plain
TypeError: Cannot assign to read only property 'x' of #<Object> (V8-based)
TypeError: "x" ist schreibgeschützt (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}} nur im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Die globale Variable oder die Objekteigenschaft, der der Wert zugewiesen wurde, ist eine schreibgeschützte Eigenschaft.
(Technisch gesehen handelt es sich um eine [nicht beschreibbare Dateneigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#writable_attribute).)

Dieser Fehler tritt nur in [Strict Mode Code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. In
Nicht-Strict Code wird die Zuweisung stillschweigend ignoriert.

## Beispiele

### Ungültige Fälle

Schreibgeschützte Eigenschaften sind nicht sehr verbreitet, können jedoch mit
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

Es gibt auch einige wenige schreibgeschützte Eigenschaften, die in JavaScript integriert sind. Vielleicht haben Sie versucht, eine mathematische Konstante neu zu definieren.

```js example-bad
"use strict";
Math.PI = 4; // TypeError
```

Entschuldigung, das können Sie nicht tun.

Die globale Variable `undefined` ist ebenfalls schreibgeschützt, sodass Sie den berüchtigten Fehler "undefined is not a function" nicht dadurch unterdrücken können, dass Sie dies tun:

```js example-bad
"use strict";
undefined = function () {}; // TypeError: "undefined" ist schreibgeschützt
```

### Gültige Fälle

```js example-good
"use strict";
let obj = Object.freeze({ name: "Score", points: 157 });
obj = { name: obj.name, points: 0 }; // ersetzen mit einem neuen Objekt funktioniert
```

## Siehe auch

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
