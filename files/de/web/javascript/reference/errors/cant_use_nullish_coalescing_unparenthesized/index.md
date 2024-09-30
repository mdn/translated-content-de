---
title: "SyntaxError: `??` kann nicht ohne Klammern innerhalb von `||` und `&&`-Ausdrücken verwendet werden"
slug: Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "kann `??` nicht ohne Klammern innerhalb von `||` und `&&`-Ausdrücken verwenden" tritt auf, wenn ein [Nullish-Koaleszenz-Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) mit einem [logischen ODER](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) oder [logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) im gleichen Ausdruck ohne Klammern verwendet wird.

## Meldung

```plain
SyntaxError: Unexpected token '??' (V8-based)
SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions (Firefox)
SyntaxError: Unexpected token '??'. Coalescing and logical operators used together in the same expression; parentheses must be used to disambiguate. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) Kette sieht folgendermaßen aus:

```plain
|   >   &&   >   ||   >   =
|   >   ??   >   =
```

Allerdings ist die Priorität _zwischen_ `??` und `&&`/`||` absichtlich undefiniert, da das Kurzschlussverhalten von logischen Operatoren die Auswertung des Ausdrucks kontraintuitiv machen kann. Daher sind die folgenden Kombinationen alles Syntaxfehler, da die Sprache nicht weiß, wie sie die Operanden klammern soll:

```js-nolint example-bad
a ?? b || c;
a || b ?? c;
a ?? b && c;
a && b ?? c;
```

Stattdessen sollten Sie Ihre Absicht klarstellen, indem Sie eine der beiden Seiten ausdrücklich in Klammern setzen:

```js example-good
(a ?? b) || c;
a ?? (b && c);
```

## Beispiele

Wenn Sie alten Code migrieren, der `||` und `&&` zum Schutz gegen `null` oder `undefined` verwendet, konvertieren Sie ihn möglicherweise teilweise:

```js-nolint example-bad
function getId(user, fallback) {
  // Previously: user && user.id || fallback
  return user && user.id ?? fallback; // SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions
}
```

Stattdessen sollten Sie `&&` in Klammern setzen:

```js
function getId(user, fallback) {
  return (user && user.id) ?? fallback;
}
```

Noch besser, ziehen Sie in Betracht, die [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) anstelle von `&&` zu verwenden:

```js example-good
function getId(user, fallback) {
  return user?.id ?? fallback;
}
```

## Siehe auch

- [Problem zur Nullish-Coalescing-Präzedenz](https://github.com/tc39/proposal-nullish-coalescing/issues/15) im TC39 Nullish-Coalescing-Vorschlag
- [Nullish-Koaleszenz-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
