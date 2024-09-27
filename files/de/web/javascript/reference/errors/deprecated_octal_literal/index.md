---
title: 'SyntaxError: Veraltete Oktalliterale mit "0"-Präfix'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_literal
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Die JavaScript-[Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-spezifische Ausnahme "Veraltete Oktalliterale mit \"0\"-Präfix; verwenden Sie stattdessen das \"0o\"-Präfix" tritt auf, wenn veraltete Oktalliterale (`0` gefolgt von Ziffern) verwendet werden.

## Nachricht

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

Oktalliterale sind veraltet. Wenn Sie eine Dezimalzahl mit `0` voranstellen, ändern Sie sie tatsächlich in ein Oktalliteral, was möglicherweise überraschend ist. Die standardisierte Syntax verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" (`0o` oder `0O`).

Führende Nullen sind immer verboten, selbst wenn das Literal keine gültige Oktalliteral-Syntax hat (wie z.B. wenn das Literal die Ziffern `8` oder `9` enthält oder es einen Dezimalpunkt hat). Ein Zahlenliteral darf nur mit `0` beginnen, wenn diese 0 die Einerstelle ist.

## Beispiele

### Veraltete Oktalliterale mit "0"-Präfix

```js-nolint example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead
```

### Gültige Oktalzahlen

Verwenden Sie eine führende Null gefolgt von dem Buchstaben "o" oder "O":

```js example-good
0o3;
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#octal)
