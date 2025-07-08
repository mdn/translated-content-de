---
title: 'SyntaxError: "0"-vorangestellte Oktalzahlen sind veraltet'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_literal
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die Ausnahme im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) von JavaScript "0-vorangestellte Oktalzahlen sind veraltet; verwenden Sie stattdessen das Präfix "0o"" tritt auf, wenn veraltete Oktal-Literale (`0` gefolgt von Ziffern) verwendet werden.

## Meldung

```plain
SyntaxError: Octal literals are not allowed in strict mode. (V8-based)
SyntaxError: Decimals with leading zeros are not allowed in strict mode. (V8-based)
SyntaxError: Unexpected number (V8-based)
SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead (Firefox)
SyntaxError: Decimal integer literals with a leading zero are forbidden in strict mode (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}} nur im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Oktal-Literale sind veraltet. Wenn Sie einem Dezimalzahlwort eine `0` voranstellen, ändern Sie es tatsächlich in ein Oktal-Literal, was überraschend sein kann. Die standardisierte Syntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" (`0o` oder `0O`).

Führende Nullen sind immer verboten, selbst wenn das Literal keine gültige Oktal-Syntax darstellt (wie zum Beispiel, wenn das Literal die Ziffern `8` oder `9` enthält oder einen Dezimalpunkt hat). Eine Zahl darf nur mit `0` beginnen, wenn diese 0 die Einerstelle ist.

## Beispiele

### "0"-vorangestellte Oktalzahlen

```js-nolint example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead
```

### Gültige Oktalzahlen

Verwenden Sie eine führende Null gefolgt vom Buchstaben "o" oder "O":

```js example-good
0o3;
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#octal)
