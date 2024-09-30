---
title: Falsy
slug: Glossary/Falsy
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **falsy**-Wert (manchmal auch als **falsey** geschrieben) ist ein Wert, der in einem [Boolean](/de/docs/Glossary/Boolean)-Kontext als falsch betrachtet wird.

[JavaScript](/de/docs/Glossary/JavaScript) verwendet die [Typkonvertierung](/de/docs/Glossary/Type_Conversion), um jeden Wert in Kontexten, die dies erfordern, in einen Boolean umzuwandeln, wie beispielsweise in [Bedingungen](/de/docs/Glossary/Conditional) und [Schleifen](/de/docs/Glossary/Loop).

Die folgende Tabelle bietet eine vollständige Liste der JavaScript falsy-Werte:

| Wert                         | Typ       | Beschreibung                                                                                                                                         |
| ---------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [null](/de/docs/Glossary/null)        | Null      | Das Schlüsselwort [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) — die Abwesenheit eines Wertes.                                      |
| [undefined](/de/docs/Glossary/undefined)   | Undefined | [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) — der primitive Wert.                                                 |
| `false`                     | Boolean   | Das Schlüsselwort [`false`](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).                                                   |
| [NaN](/de/docs/Glossary/NaN)         | Number    | [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) — keine Zahl.                                                                      |
| `0`                         | Number    | Die {{jsxref("Number")}} Null, einschließlich `0.0`, `0x0`, etc.                                                                                    |
| `-0`                        | Number    | Die {{jsxref("Number")}} negative Null, einschließlich `-0.0`, `-0x0`, etc.                                                                         |
| `0n`                        | BigInt    | Die {{jsxref("BigInt")}} Null, einschließlich `0x0n`, etc. Beachten Sie, dass es keine negative {{jsxref("BigInt")}} Null gibt — die Negation von `0n` ist `0n`. |
| `""`                        | String    | Ein leerer [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Wert, einschließlich `''` und ` `` `.                                |
| [`document.all`](/de/docs/Web/API/Document/all) | Object    | Das einzige falsy Objekt in JavaScript ist das eingebaute [`document.all`](/de/docs/Web/API/Document/all).                                      |

Die Werte `null` und `undefined` sind auch [nullish](/de/docs/Glossary/nullish).

## Beispiele

Beispiele für _falsy_-Werte in JavaScript (die in Boolean-Kontexten zu falsch umgewandelt werden und somit den `if`-Block _umgehen_):

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
  - [Truthy](/de/docs/Glossary/Truthy)
  - [Erzwingung](/de/docs/Glossary/Type_coercion)
  - [Boolean](/de/docs/Glossary/Boolean)
- [Boolean-Erzwingung](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
