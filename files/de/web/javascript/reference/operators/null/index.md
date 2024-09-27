---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Operators")}}

Der Wert **`null`** repräsentiert das bewusste Fehlen eines Objektwerts. Er gehört zu den [primitiven Werten](/de/docs/Glossary/Primitive) in JavaScript und wird bei booleschen Operationen als [falsy](/de/docs/Glossary/Falsy) behandelt.

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## Syntax

```js-nolint
null
```

## Beschreibung

Der Wert `null` wird mit einem Literal geschrieben: `null`.
`null` ist kein Bezeichner für eine Eigenschaft des globalen Objekts, wie es {{jsxref("undefined")}} sein kann. Stattdessen drückt `null` einen Mangel an Identifikation aus und zeigt an, dass eine Variable auf kein Objekt verweist. In APIs wird `null` oft in einem Kontext abgerufen, in dem ein Objekt erwartet wird, aber kein Objekt relevant ist.

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

Wenn Sie auf `null` oder `undefined` prüfen, achten Sie auf die [Unterschiede zwischen den Gleichheitsoperatoren (==) und den Identitätsoperatoren (===)](/de/docs/Web/JavaScript/Reference/Operators), da ersterer eine Typkonvertierung durchführt.

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
