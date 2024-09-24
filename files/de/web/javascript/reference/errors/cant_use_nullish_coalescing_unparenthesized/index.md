---
title: "SyntaxError: `??` kann nicht unverklammert innerhalb von `||` und `&&` Ausdrücken verwendet werden"
slug: Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "kann `??` nicht unverklammert innerhalb von `||` und `&&` Ausdrücken verwenden" tritt auf, wenn ein [Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) mit einem [logischen ODER](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) oder [logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) im gleichen Ausdruck ohne Klammern verwendet wird.

## Nachricht

```plain
SyntaxError: Unexpected token '??' (V8-based)
SyntaxError: kann `??` nicht unverklammert innerhalb von `||` und `&&` Ausdrücken verwenden (Firefox)
SyntaxError: Unexpected token '??'. Coalescing und logische Operatoren wurden in demselben Ausdruck zusammen verwendet; Klammern müssen verwendet werden, um Mehrdeutigkeiten zu vermeiden. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) Kette sieht folgendermaßen aus:

```plain
|   >   &&   >   ||   >   =
|   >   ??   >   =
```

Allerdings ist die Priorität _zwischen_ `??` und `&&`/`||` absichtlich undefiniert, da das Kurzschlussverhalten logischer Operatoren die Auswertung des Ausdrucks kontraintuitiv machen kann. Daher sind die folgenden Kombinationen alle Syntaxfehler, da die Sprache nicht weiß, wie die Operanden geklammert werden sollen:

```js-nolint example-bad
a ?? b || c;
a || b ?? c;
a ?? b && c;
a && b ?? c;
```

Stattdessen sollten Sie Ihre Absicht verdeutlichen, indem Sie entweder die linke oder rechte Seite explizit klammern:

```js example-good
(a ?? b) || c;
a ?? (b && c);
```

## Beispiele

Wenn Sie alten Code migrieren, der `||` und `&&` zur Absicherung gegen `null` oder `undefined` verwendet, könnten Sie diesen teilweise umwandeln:

```js-nolint example-bad
function getId(user, fallback) {
  // Früher: user && user.id || fallback
  return user && user.id ?? fallback; // SyntaxError: kann `??` nicht unverklammert innerhalb von `||` und `&&` Ausdrücken verwenden
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

- [Problem über Nullish Coalescing Priorität](https://github.com/tc39/proposal-nullish-coalescing/issues/15) im TC39 Nullish-Coalescing-Vorschlag
- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
