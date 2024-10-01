---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Operators")}}

Der Wert **`null`** repräsentiert das absichtliche Fehlen eines Objektwertes. Er ist einer der {{Glossary("Primitive", "primitiven Werte")}} von JavaScript und wird in booleschen Operationen als {{Glossary("Falsy", "falsch")}} behandelt.

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## Syntax

```js-nolint
null
```

## Beschreibung

Der Wert `null` wird mit einem Literal geschrieben: `null`. `null` ist kein Bezeichner für eine Eigenschaft des globalen Objekts, wie es {{jsxref("undefined")}} sein kann. Stattdessen drückt `null` einen Mangel an Identifizierung aus, was darauf hinweist, dass eine Variable auf kein Objekt zeigt. In APIs wird `null` oft an einer Stelle zurückgegeben, an der ein Objekt erwartet werden kann, aber kein Objekt relevant ist.

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

Beim Überprüfen von `null` oder `undefined` sollten Sie die [Unterschiede zwischen Gleichheits- (==) und Identitätsoperatoren (===)](/de/docs/Web/JavaScript/Reference/Operators) beachten, da ersteres eine Typumwandlung durchführt.

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
