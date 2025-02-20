---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **`null`**-Wert stellt die absichtliche Abwesenheit eines Objektwertes dar. Es
ist einer der {{Glossary("Primitive", "primitiven Werte")}} von JavaScript und
wird für boolesche Operationen als {{Glossary("Falsy", "falsch")}} behandelt.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - Null")}}

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
`null` ist kein Bezeichner für eine Eigenschaft des globalen Objekts, wie
{{jsxref("undefined")}} es sein kann. Stattdessen
drückt `null` den Mangel an Identifikation aus und zeigt an, dass eine Variable
auf kein Objekt verweist. In APIs wird `null` oft in einem Kontext geliefert, in dem ein Objekt erwartet wird, aber kein Objekt relevant ist.

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

Beim Überprüfen von `null` oder `undefined`, beachten Sie die [Unterschiede zwischen Gleichheitsoperatoren (==) und Identitätsoperatoren (===)](/de/docs/Web/JavaScript/Reference/Operators), da der erstere
eine Typkonvertierung durchführt.

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
