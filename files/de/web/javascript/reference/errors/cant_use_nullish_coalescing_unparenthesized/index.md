---
title: "SyntaxError: `??' kann nicht unverklammert in `||` und `&&`-Ausdrücken verwendet werden"
slug: Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "cannot use `??` unparenthesized within `||` and `&&` expressions" tritt auf, wenn ein [Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) in einem Ausdruck mit einem [Logischen ODER](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) oder [Logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) ohne Klammern verwendet wird.

## Meldung

```plain
SyntaxError: Unexpected token '??' (V8-based)
SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions (Firefox)
SyntaxError: Unexpected token '??'. Coalescing and logical operators used together in the same expression; parentheses must be used to disambiguate. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) Kette sieht so aus:

```plain
|   >   &&   >   ||   >   =
|   >   ??   >   =
```

Die Präzedenz _zwischen_ `??` und `&&`/`||` ist jedoch absichtlich undefiniert, da das Kurzschließen von logischen Operatoren die Auswertung des Ausdrucks kontraintuitiv machen kann. Daher sind die folgenden Kombinationen alles Syntaxfehler, da die Sprache nicht weiß, wie die Operanden geklammert werden sollen:

```js-nolint example-bad
a ?? b || c;
a || b ?? c;
a ?? b && c;
a && b ?? c;
```

Stattdessen sollten Sie Ihre Absicht klar machen, indem Sie die eine oder andere Seite explizit klammern:

```js example-good
(a ?? b) || c;
a ?? (b && c);
```

## Beispiele

Beim Migrieren von Legacy-Code, der `||` und `&&` zum Schutz vor `null` oder `undefined` verwendet, können Sie diesen oft teilweise konvertieren:

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

Noch besser ist es, [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) statt `&&` zu verwenden:

```js example-good
function getId(user, fallback) {
  return user?.id ?? fallback;
}
```

## Siehe auch

- [Issue über die Präzedenz von Nullish Coalescing](https://github.com/tc39/proposal-nullish-coalescing/issues/15) im TC39 Nullish-Coalescing-Vorschlag
- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
