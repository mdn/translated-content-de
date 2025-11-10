---
title: "SyntaxError: Der `??`-Operator kann nicht unverklammert innerhalb von `||` und `&&`-Ausdrücken verwendet werden"
slug: Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Der JavaScript-Ausnahmefehler "Der `??`-Operator kann nicht unverklammert innerhalb von `||` und `&&`-Ausdrücken verwendet werden" tritt auf, wenn ein [Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) mit einem [logischen ODER](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) oder [logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) im selben Ausdruck ohne Klammern verwendet wird.

## Nachricht

```plain
SyntaxError: Unexpected token '??' (V8-based)
SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions (Firefox)
SyntaxError: Unexpected token '??'. Coalescing and logical operators used together in the same expression; parentheses must be used to disambiguate. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)-Kette sieht so aus:

```plain
|   >   &&   >   ||   >   =
|   >   ??   >   =
```

Die Präzedenz _zwischen_ `??` und `&&`/`||` ist jedoch absichtlich undefiniert, da das Kurzschließungsverhalten der logischen Operatoren die Auswertung des Ausdrucks kontraintuitiv machen kann. Daher sind die folgenden Kombinationen alle Syntaxfehler, da die Sprache nicht weiß, wie sie die Operanden klammern soll:

```js-nolint example-bad
a ?? b || c;
a || b ?? c;
a ?? b && c;
a && b ?? c;
```

Stattdessen machen Sie Ihre Absicht deutlich, indem Sie entweder auf der einen oder der anderen Seite explizit klammern:

```js example-good
(a ?? b) || c;
a ?? (b && c);
```

## Beispiele

Wenn Sie alten Code migrieren, der `||` und `&&` zur Absicherung gegen `null` oder `undefined` verwendet, konvertieren Sie ihn möglicherweise teilweise:

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

Noch besser ist es, [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) anstelle von `&&` zu verwenden:

```js example-good
function getId(user, fallback) {
  return user?.id ?? fallback;
}
```

## Siehe auch

- [Issue über die Präzedenz des Nullish Coalescing Operators](https://github.com/tc39/proposal-nullish-coalescing/issues/15) im TC39 Nullish-Coalescing-Vorschlag
- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
