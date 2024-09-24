---
title: Falsch
slug: Glossary/Falsy
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **falscher** Wert (manchmal auch als **falsey** geschrieben) ist ein Wert, der in einem {{Glossary("Boolean")}}-Kontext als falsch angesehen wird.

{{Glossary("JavaScript")}} verwendet {{Glossary("Type_Conversion", "Typkonvertierung")}}, um jeden Wert in einen Boolean zu zwingen, wenn dies erforderlich ist, wie z.B. bei {{Glossary("Conditional", "Bedingungen")}} und {{Glossary("Loop", "Schleifen")}}.

Die folgende Tabelle bietet eine vollständige Liste der falschen JavaScript-Werte:

| Wert                        | Typ       | Beschreibung                                                                                                                                         |
| --------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("null")}}        | Null      | Das Schlüsselwort [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) — die Abwesenheit eines Wertes.                                      |
| {{Glossary("undefined")}}   | Undefined | [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) — der primitive Wert.                                                  |
| `false`                     | Boolean   | Das Schlüsselwort [`false`](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).                                                   |
| {{Glossary("NaN")}}         | Number    | [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) — keine Zahl.                                                                      |
| `0`                         | Number    | Die {{jsxref("Number")}} Null, einschließlich `0.0`, `0x0`, etc.                                                                                    |
| `-0`                        | Number    | Die {{jsxref("Number")}} negative Null, einschließlich `-0.0`, `-0x0`, etc.                                                                         |
| `0n`                        | BigInt    | Die {{jsxref("BigInt")}} Null, einschließlich `0x0n`, etc. Beachten Sie, dass es keine negative {{jsxref("BigInt")}} Null gibt — die Negation von `0n` ist `0n`. |
| `""`                        | String    | Leerer [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Wert, einschließlich `''` und ` `` `.                                   |
| {{domxref("document.all")}} | Objekt    | Das einzige falsche Objekt in JavaScript ist das eingebaute {{domxref("document.all")}}.                                                            |

Die Werte `null` und `undefined` sind auch {{Glossary("nullish")}}.

## Beispiele

Beispiele für _falsche_ Werte in JavaScript (die in Boolean-Kontexten zu false gezwungen werden und somit den `if`-Block _umgehen_):

```js
if (false) {
  // Nicht erreichbar
}

if (null) {
  // Nicht erreichbar
}

if (undefined) {
  // Nicht erreichbar
}

if (0) {
  // Nicht erreichbar
}

if (-0) {
  // Nicht erreichbar
}

if (0n) {
  // Nicht erreichbar
}

if (NaN) {
  // Nicht erreichbar
}

if ("") {
  // Nicht erreichbar
}
```

### Der logische UND-Operator, &&

Wenn das erste Objekt falsch ist, gibt es dieses Objekt zurück:

```js
console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0
```

## Siehe auch

- Verwandte Glossareinträge:
  - {{Glossary("Truthy")}}
  - {{Glossary("Type_coercion", "Zwang")}}
  - {{Glossary("Boolean")}}
- [Boolean-Zwang](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
