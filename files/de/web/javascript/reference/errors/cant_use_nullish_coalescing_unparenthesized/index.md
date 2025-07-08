---
title: "SyntaxError: `??` kann nicht ohne Klammern innerhalb von `||` und `&&`-Ausdrücken verwendet werden"
slug: Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "`??` kann nicht ohne Klammern innerhalb von `||` und `&&`-Ausdrücken verwendet werden" tritt auf, wenn ein [Operator für nullish coalescing](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) zusammen mit einem [logischen ODER](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) oder [logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) im selben Ausdruck ohne Klammern verwendet wird.

## Nachricht

```plain
SyntaxError: Unexpected token '??' (V8-based)
SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions (Firefox)
SyntaxError: Unexpected token '??'. Coalescing and logical operators used together in the same expression; parentheses must be used to disambiguate. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die [Operatorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) sieht wie folgt aus:

```plain
|   >   &&   >   ||   >   =
|   >   ??   >   =
```

Allerdings ist die Rangfolge _zwischen_ `??` und `&&`/`||` absichtlich undefiniert, da das Kurzschließen der logischen Operatoren die Bewertung des Ausdrucks kontraintuitiv machen kann. Daher sind die folgenden Kombinationen alle Syntaxfehler, da die Sprache nicht weiß, wie die Operanden zu klammern sind:

```js-nolint example-bad
a ?? b || c;
a || b ?? c;
a ?? b && c;
a && b ?? c;
```

Stattdessen sollten Sie Ihre Absicht klar machen, indem Sie jede Seite explizit klammern:

```js example-good
(a ?? b) || c;
a ?? (b && c);
```

## Beispiele

Beim Migrieren von Legacy-Code, der `||` und `&&` verwendet, um sich gegen `null` oder `undefined` abzusichern, konvertiert man ihn oft teilweise:

```js-nolint example-bad
function getId(user, fallback) {
  // Previously: user && user.id || fallback
  return user && user.id ?? fallback; // SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions
}
```

Stattdessen sollten Sie das `&&` klammern:

```js
function getId(user, fallback) {
  return (user && user.id) ?? fallback;
}
```

Noch besser, ziehen Sie in Betracht, [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) anstelle von `&&` zu verwenden:

```js example-good
function getId(user, fallback) {
  return user?.id ?? fallback;
}
```

## Siehe auch

- [Problem zur Rangfolge beim nullischen Zusammenführen](https://github.com/tc39/proposal-nullish-coalescing/issues/15) im TC39-Vorschlag zum nullischen Zusammenführen
- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Operatorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
