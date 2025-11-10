---
title: "SyntaxError: Ungültige Klassenmengenoperation im regulären Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_class_set_operation
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "ungültige Klassenmengenoperation im regulären Ausdruck" tritt auf, wenn eine doppelte Zeichenfolge von Operatoren in einer [Zeichenklasse im `v`-Modus](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) erscheint, die jedoch nicht von der Syntax erkannt wird.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /[&&]/v: Invalid set operation in character class (V8-based)
SyntaxError: invalid class set operation in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid operation in class set (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt drei mögliche Ursachen, warum dies passieren könnte:

- Sie versuchen `&&` oder `--` zu verwenden, aber die Syntax ist falsch. Jeder dieser Operatoren muss zwei Zeichen oder Zeichensätze verbinden.
- Sie mischen Operatoren auf derselben Ebene. Zum Beispiel ist `[\w&&[A-z]--_]` ungültig, weil es `&&` und `--` auf derselben Ebene verwendet. Sie müssen geschachtelte Zeichensätze verwenden, um Unklarheiten zu beseitigen, wie z.B. `[\w&&[[A-z]--_]]`. Beachten Sie, dass die Vereinigungsoperation einen Operator verwendet, der keinen Text hat; zum Beispiel ist `[AB&&C]` ungültig, weil `A` und `B` implizit durch den Vereinigungsoperator verbunden sind. Sie müssen stattdessen `[A[B&&C]]` verwenden.
- Sie verwenden eine doppelte Zeichenfolge von Operatoren, die nicht `&&` oder `--` ist. Diese Sequenzen sind für zukünftige Syntaxerweiterungen reserviert. Dazu gehören: `&&`, `!!`, `##`, `$$`, `%%`, `**`, `++`, `,,`, `..`, `::`, `;;`, `<<`, `==`, `>>`, `??`, `@@`, `^^`, ` `` `, `~~`. Diese Sequenzen ergeben jedoch sowieso wenig Sinn und können entweder durch ein einzelnes Zeichen ersetzt werden oder bewirken, dass zwei angrenzende Bereiche zusammengeführt werden.

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
