---
title: Falsy
slug: Glossary/Falsy
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

<!-- cSpell:ignore falsey -->

Ein **falsy** (manchmal auch **falsey**) Wert ist ein Wert, der in einem {{Glossary("Boolean", "Booleschen")}} Kontext als falsch betrachtet wird.

{{Glossary("JavaScript", "JavaScript")}} verwendet {{Glossary("Type_Conversion", "Typkonvertierung")}}, um jeden Wert in Booleschen Kontexten, die dies erfordern, in ein Boolean zu zwingen, wie zum Beispiel bei {{Glossary("Conditional", "Bedingungen")}} und {{Glossary("Loop", "Schleifen")}}.

Die folgende Tabelle bietet eine vollständige Liste von JavaScript falsy Werten:

| Wert                                            | Typ       | Beschreibung                                                                                                                                                     |
| ----------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("null", "null")}}                    | Null      | Das Schlüsselwort [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) — das Fehlen eines Wertes.                                                          |
| {{Glossary("undefined", "undefined")}}          | Undefined | [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) — der primitive Wert.                                                                  |
| `false`                                         | Boolean   | Das Schlüsselwort [`false`](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).                                                                   |
| {{Glossary("NaN", "NaN")}}                      | Number    | [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) — nicht eine Zahl.                                                                                 |
| `0`                                             | Number    | Die {{jsxref("Number")}} Null, einschließlich `0.0`, `0x0`, etc.                                                                                                 |
| `-0`                                            | Number    | Die {{jsxref("Number")}} negative Null, einschließlich `-0.0`, `-0x0`, etc.                                                                                      |
| `0n`                                            | BigInt    | Die {{jsxref("BigInt")}} Null, einschließlich `0x0n`, etc. Beachten Sie, dass es keine {{jsxref("BigInt")}} negative Null gibt — die Negation von `0n` ist `0n`. |
| `""`                                            | String    | Leerer [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Wert, einschließlich `''` und ` `` `.                                                   |
| [`document.all`](/de/docs/Web/API/Document/all) | Object    | Das einzige falsy Objekt in JavaScript ist das eingebaute [`document.all`](/de/docs/Web/API/Document/all).                                                       |

Die Werte `null` und `undefined` sind auch {{Glossary("nullish", "nullish")}}.

## Beispiele

Beispiele von _falsy_ Werten in JavaScript (die im Booleschen Kontext in `false` konvertiert werden und somit den `if`-Block _überspringen_):

```js
if (false) {
  // Not reachable
}

if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (0) {
  // Not reachable
}

if (-0) {
  // Not reachable
}

if (0n) {
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}
```

### Der logische UND-Operator, &&

Wenn das erste Objekt falsy ist, wird dieses Objekt zurückgegeben:

```js
console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0
```

## Siehe auch

- Verwandte Glossareinträge:
  - {{Glossary("Truthy", "Truthy")}}
  - {{Glossary("Type_coercion", "Coercion")}}
  - {{Glossary("Boolean", "Boolean")}}
- [Boolean Coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
