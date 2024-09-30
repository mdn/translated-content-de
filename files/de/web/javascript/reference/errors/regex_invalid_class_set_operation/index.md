---
title: "SyntaxError: Ungültige Klassenmengenoperation im regulären Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_class_set_operation
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme „ungültige Klassenmengenoperation im regulären Ausdruck“ tritt auf, wenn eine doppelte Interpunktionssequenz in einer [`v`-Modus-Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) erscheint, die von der Syntax nicht erkannt wird.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /[&&]/v: Invalid set operation in character class (V8-based)
SyntaxError: invalid class set operation in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid operation in class set (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt drei mögliche Arten, wie dies passieren kann:

- Sie versuchen, `&&` oder `--` zu verwenden, aber die Syntax ist falsch. Jeder dieser Operatoren muss zwei Zeichen oder Zeichensätze verbinden.
- Sie vermischen Operatoren auf derselben Ebene. Zum Beispiel ist `[\w&&[A-z]--_]` ungültig, weil es `&&` und `--` auf derselben Ebene verwendet. Sie müssen geschachtelte Zeichenklassen verwenden, um Klarheit zu schaffen, wie zum Beispiel `[\w&&[[A-z]--_]]`. Beachten Sie, dass die Vereinigungsoperation einen Operator verwendet, der keinen Text hat; zum Beispiel ist `[AB&&C]` ungültig, weil `A` und `B` implizit durch den Vereinigungsoperator verbunden sind. Sie müssen stattdessen `[A[B&&C]]` verwenden.
- Sie verwenden eine doppelte Interpunktionssequenz, die nicht `&&` oder `--` ist. Diese Sequenzen sind für zukünftige Syntaxerweiterungen reserviert. Dazu gehören: `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. Diese Sequenzen sind jedoch ohnehin meist unsinnig und können entweder durch ein einzelnes Zeichen ersetzt werden oder dazu führen, dass zwei angrenzende Bereiche zusammengeführt werden.

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
