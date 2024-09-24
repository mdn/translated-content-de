---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Operators")}}

Der **`null`**-Wert repräsentiert das absichtliche Fehlen eines Objektwertes. Es ist einer der [primitiven Werte](/de/docs/Glossary/Primitive) von JavaScript und wird für boolesche Operationen als [falsy](/de/docs/Glossary/Falsy) behandelt.

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## Syntax

```js-nolint
null
```

## Beschreibung

Der Wert `null` wird mit einem Literal geschrieben: `null`.
`null` ist kein Bezeichner für eine Eigenschaft des globalen Objekts, wie es {{jsxref("undefined")}} sein kann. Stattdessen drückt `null` einen Mangel an Identifikation aus und zeigt an, dass eine Variable auf kein Objekt verweist. In APIs wird `null` oft an Stellen abgerufen, an denen ein Objekt erwartet werden kann, aber kein Objekt relevant ist.

```js
// foo existiert nicht. Es ist nicht definiert und wurde nie initialisiert:
foo; // ReferenceError: foo is not defined
```

```js
// foo ist jetzt bekannt, existiert, hat aber keinen Typ oder Wert:
const foo = null;
foo; // null
```

## Beispiele

### Unterschied zwischen `null` und `undefined`

Beim Prüfen auf `null` oder `undefined` seien Sie sich der [Unterschiede zwischen Gleichheits- (==) und Identitätsoperatoren (===)](/de/docs/Web/JavaScript/Reference/Operators) bewusst, da der erste eine Typumwandlung durchführt.

```js
typeof null; // "object" (nicht "null" aus historischen Gründen)
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
- {{jsxref("NaN")}}
- {{jsxref("Operators/void", "void")}}
