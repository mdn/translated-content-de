---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **`null`**-Wert repräsentiert das bewusste Fehlen eines Objektwertes. Es
ist einer von JavaScripts {{Glossary("Primitive", "primitiven Werten")}} und wird bei booleschen Operationen als {{Glossary("Falsy", "falsy")}} behandelt.

{{InteractiveExample("JavaScript Demo: null")}}

```js interactive-example
function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels("sky"));
// Expected output: 0
```

## Syntax

```js-nolint
null
```

## Beschreibung

Der Wert `null` wird mit einem Literal geschrieben: `null`.
`null` ist kein Bezeichner für eine Eigenschaft des globalen Objekts, wie es
{{jsxref("undefined")}} sein kann. Stattdessen drückt
`null` das Fehlen einer Identifikation aus und zeigt an, dass eine Variable auf kein Objekt verweist. In APIs wird `null` oft an einer Stelle zurückgegeben, an der ein Objekt erwartet wird, aber kein Objekt relevant ist.

```js
// foo does not exist. It is not defined and has never been initialized:
foo; //ReferenceError: foo is not defined
```

```js
// foo is known to exist now but it has no type or value:
const foo = null;
foo; //null
```

## Beispiele

### Unterschied zwischen `null` und `undefined`

Beim Überprüfen von `null` oder `undefined` sollten Sie sich der [Unterschiede zwischen Gleichheits- (==) und Identitätsoperatoren (===)](/de/docs/Web/JavaScript/Reference/Operators) bewusst sein, da der erstgenannte Typkonvertierungen durchführt.

```js
typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
- {{jsxref("NaN")}}
- {{jsxref("Operators/void", "void")}}
