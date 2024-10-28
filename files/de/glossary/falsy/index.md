---
title: Falsy
slug: Glossary/Falsy
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{GlossarySidebar}}

<!-- cSpell:ignore falsey -->

Ein **falsy**-Wert (manchmal auch **falsey** geschrieben) ist ein Wert, der als falsch betrachtet wird, wenn er in einem {{Glossary("Boolean", "Boolean")}}-Kontext verwendet wird.

{{Glossary("JavaScript", "JavaScript")}} verwendet {{Glossary("Type_Conversion", "Typkonvertierung")}}, um jeden Wert in einem Boolean-Kontext in einen Boolean zu erzwingen, der dies erfordert, wie zum Beispiel in {{Glossary("Conditional", "bedingten Anweisungen")}} und {{Glossary("Loop", "Schleifen")}}.

Die folgende Tabelle bietet eine vollständige Liste der JavaScript-falsy-Werte:

| Wert                                            | Typ       | Beschreibung                                                                                                                                                     |
| ----------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("null", "null")}}                    | Null      | Das Schlüsselwort [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) — die Abwesenheit eines Wertes.                                                     |
| {{Glossary("undefined", "undefined")}}          | Undefined | [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) — der primitive Wert.                                                                  |
| `false`                                         | Boolean   | Das Schlüsselwort [`false`](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).                                                                   |
| {{Glossary("NaN", "NaN")}}                      | Number    | [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) — nicht eine Nummer.                                                                               |
| `0`                                             | Number    | Die {{jsxref("Number")}} Null, einschließlich `0.0`, `0x0`, etc.                                                                                                 |
| `-0`                                            | Number    | Die {{jsxref("Number")}} negative Null, einschließlich `-0.0`, `-0x0`, etc.                                                                                      |
| `0n`                                            | BigInt    | Die {{jsxref("BigInt")}} Null, einschließlich `0x0n`, etc. Beachten Sie, dass es keine {{jsxref("BigInt")}} negative Null gibt — die Negation von `0n` ist `0n`. |
| `""`                                            | String    | Leerer [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Wert, einschließlich `''` und ` `` `.                                                   |
| [`document.all`](/de/docs/Web/API/Document/all) | Object    | Das einzige falsy-Objekt in JavaScript ist das eingebaute [`document.all`](/de/docs/Web/API/Document/all).                                                       |

Die Werte `null` und `undefined` sind auch {{Glossary("nullish", "nullish")}}.

## Beispiele

Beispiele für _falsy_-Werte in JavaScript (die in Boolean-Kontexten zu false erzwingen und somit den `if`-Block _umgehen_):

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

Wenn das erste Objekt falsy ist, gibt es dieses Objekt zurück:

```js
console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Truthy", "Truthy")}}
  - {{Glossary("Type_coercion", "Erzwingung")}}
  - {{Glossary("Boolean", "Boolean")}}
- [Boolean-Erzwingung](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
