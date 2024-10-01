---
title: <string>
slug: Web/CSS/string
l10n:
  sourceCommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{CSSRef}}

Der **`<string>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine Folge von Zeichen. Zeichenfolgen werden in zahlreichen CSS-Eigenschaften verwendet, wie zum Beispiel in {{CSSxRef("content")}}, {{CSSxRef("font-family")}} und {{CSSxRef("quotes")}}.

## Syntax

Der `<string>` Datentyp besteht aus einer beliebigen Anzahl von [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen, die entweder von doppelte (`"`) oder einfache (`'`) Anführungszeichen umgeben sind.

Die meisten Zeichen können wörtlich dargestellt werden. Alle Zeichen können ebenfalls mit ihren jeweiligen [Unicode-Codepunkten](https://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks) in Hexadezimal dargestellt werden, wobei ein Backslash (`\`) vorangestellt ist. Zum Beispiel repräsentiert `\22` ein doppeltes Anführungszeichen, `\27` ein einzelnes Anführungszeichen (`'`), und `\A9` das Copyright-Symbol (`©`).

Wichtig ist, dass bestimmte Zeichen, die ansonsten ungültig wären, mit einem Backslash maskiert werden können. Dazu gehören doppelte Anführungszeichen, wenn sie innerhalb einer doppelten Anführungszeichenkette verwendet werden, einfache Anführungszeichen, wenn sie innerhalb einer einfachen Anführungszeichenkette verwendet werden, und der Backslash selbst. Zum Beispiel wird `\\` einen einzelnen Backslash erstellen.

Um Zeilenumbrüche auszugeben, müssen Sie diese mit einem Zeilenvorschubzeichen wie `\A` oder `\00000A` maskieren. In Ihrem Code können Zeichenfolgen jedoch über mehrere Zeilen verteilt sein, wobei jede neue Zeile mit einem `\` als letztes Zeichen der Zeile maskiert sein muss.

Um jedoch Zeilenumbrüche zu erhalten, müssen Sie auch die {{cssxref("white-space")}}-Eigenschaft auf den entsprechenden Wert setzen.

> **Note:** {{Glossary("character_reference", "Zeichenreferenzen")}} (wie zum Beispiel `&nbsp;` oder `&#8212;`) können nicht in einem CSS `<string>` verwendet werden.

## Beispiele

### Beispiele für gültige Zeichenfolgen

```css
/* Simple strings */
"This string is demarcated by double quotes."
'This string is demarcated by single quotes.'

/* Character escaping */
"This is a string with \" an escaped double quote."
"This string also has \22 an escaped double quote."
'This is a string with \' an escaped single quote.'
'This string also has \27 an escaped single quote.'
"This is a string with \\ an escaped backslash."

/* New line in a string */
"This string has a \Aline break in it."

/* String spanning two lines of code (these two strings will have identical output) */
"A really long \
awesome string"
"A really long awesome string"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Einheiten und -Werte](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS Grundlegende Datentypen](/de/docs/Web/CSS/CSS_Types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
