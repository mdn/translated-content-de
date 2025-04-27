---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{jsSidebar("Operators")}}

Der **`null`** Wert repräsentiert das absichtliche Fehlen eines Objektwertes. Es
ist einer der {{Glossary("Primitive", "primitiven Werte")}} von JavaScript und wird in booleschen Operationen als {{Glossary("Falsy", "falsy")}} behandelt.

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
{{jsxref("undefined")}} sein kann. Stattdessen
drückt `null` einen Mangel an Identifizierung aus und zeigt an, dass eine Variable auf kein Objekt verweist. In APIs wird `null` häufig an Stellen zurückgegeben, an denen ein Objekt erwartet wird, aber kein Objekt relevant ist.

```js
// foo does not exist. It is not defined and has never been initialized:
foo; // ReferenceError: foo is not defined
```

```js
// foo is known to exist now but it has no type or value:
const foo = null;
foo; // null
```

## Beispiele

### Unterschied zwischen `null` und `undefined`

Beim Überprüfen auf `null` oder `undefined` achten Sie auf die [Unterschiede zwischen Gleichheit (==) und Identitätsoperatoren (===)](/de/docs/Web/JavaScript/Reference/Operators), da erstere eine Typumwandlung durchführen.

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
