---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
l10n:
  sourceCommit: b94841f0e5f0578297954ef4276a4e2d319a8720
---

Das **`null`** Schlüsselwort bezieht sich auf den [`null`](/de/docs/Web/JavaScript/Guide/Data_structures#null_type) {{Glossary("Primitive", "primitiven Wert")}}, der die absichtliche Abwesenheit eines Objektwerts darstellt.

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

Das Schlüsselwort `null` ist ein Literal für den Wert `null`. Im Gegensatz zu {{jsxref("undefined")}}, das eine globale Variable ist, ist `null` kein Bezeichner, sondern ein Syntax-Schlüsselwort.

`null` hat die folgenden Verhaltensweisen:

- Ähnlich wie `undefined` wirft der Zugriff auf jede Eigenschaft von `null` einen {{jsxref("TypeError")}}, anstatt `undefined` zurückzugeben oder Prototypketten zu durchsuchen.
- Ähnlich wie `undefined` wird `null` für boolesche Operationen als {{Glossary("Falsy", "falsy")}} und für [nullish coalescing](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) und [optional chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) als {{Glossary("Nullish", "nullish")}} behandelt.
- Das Ergebnis von [`typeof null`](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) ist `"object"`. Dies ist ein Fehler in JavaScript, der aus Gründen der Abwärtskompatibilität nicht behoben werden kann.
- Im Gegensatz zu `undefined` kann {{jsxref("JSON.stringify()")}} `null` getreu darstellen.

JavaScript ist einzigartig, da es zwei nullish Werte hat: `null` und `undefined`. Semantisch ist ihr Unterschied sehr gering: `undefined` steht für die Abwesenheit eines Wertes, während `null` die Abwesenheit eines _Objekts_ darstellt. Zum Beispiel ist das Ende der [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) `null`, weil die Prototypkette aus Objekten besteht; [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) gibt `null` zurück, wenn keine Übereinstimmung gefunden wird, da das Ergebnis ein Objekt wäre, wenn es eine Übereinstimmung gäbe. Wenn Sie eine API entwerfen, sollten Sie wahrscheinlich `null` und `undefined` als gleichwertige Eingaben akzeptieren, da viele Codebasen stilistische Regeln darüber haben, wann standardmäßig `null` oder `undefined` verwendet wird.

## Beispiele

### Unterschied zwischen `null` und `undefined`

Beim Überprüfen auf `null` oder `undefined`, beachten Sie die [Unterschiede zwischen Gleichheits- (==) und Identitätsoperatoren (===)](/de/docs/Web/JavaScript/Reference/Operators), da der erstere eine Typkonvertierung durchführt.

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
