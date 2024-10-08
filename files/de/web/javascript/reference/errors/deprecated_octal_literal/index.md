---
title: 'SyntaxError: "0"-präfixierte Oktalliterale sind veraltet'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_literal
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Die JavaScript-[Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-spezifische Ausnahme "0-präfixierte Oktalliterale sind veraltet; verwenden Sie stattdessen das Präfix "0o"" tritt auf, wenn veraltete Oktalliterale (`0` gefolgt von Ziffern) verwendet werden.

## Meldung

```plain
SyntaxError: Octal literals are not allowed in strict mode. (V8-based)
SyntaxError: Decimals with leading zeros are not allowed in strict mode. (V8-based)
SyntaxError: Unexpected number (V8-based)
SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead (Firefox)
SyntaxError: Decimal integer literals with a leading zero are forbidden in strict mode (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}} nur im [Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Oktalliterale sind veraltet. Wenn Sie eine Dezimalzahl mit `0` präfixieren, ändern Sie sie tatsächlich in ein Oktalliteral, was überraschend sein kann. Die standardisierte Syntax verwendet eine führende Null gefolgt von einem lateinischen Buchstaben "o" in Klein- oder Großbuchstaben (`0o` oder `0O`).

Führende Nullen sind immer verboten, selbst wenn die Schreibweise kein gültiges Oktalliteral ist (z. B. wenn die Schreibweise die Ziffern `8` oder `9` enthält oder einen Dezimalpunkt hat). Eine Zahl darf nur dann mit `0` beginnen, wenn diese `0` ihre Einerstelle ist.

## Beispiele

### "0"-präfixierte Oktalliterale

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
