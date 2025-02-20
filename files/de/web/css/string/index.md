---
title: <string>
slug: Web/CSS/string
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{CSSRef}}

Der **`<string>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Folge von Zeichen. Strings werden in zahlreichen CSS-Eigenschaften verwendet, wie {{CSSxRef("content")}}, {{CSSxRef("font-family")}} und {{CSSxRef("quotes")}}.

## Syntax

Der `<string>` Datentyp besteht aus einer beliebigen Anzahl von [Unicode](https://de.wikipedia.org/wiki/Unicode)-Zeichen, die entweder von doppelten (`"`) oder einfachen (`'`) Anführungszeichen umgeben sind.

Die meisten Zeichen können wörtlich dargestellt werden. Alle Zeichen können auch durch ihre jeweiligen [Unicode-Codepunkte](https://de.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks) in hexadezimaler Form dargestellt werden, wobei sie von einem Backslash (`\`) gefolgt werden. Zum Beispiel repräsentiert `\22` ein doppeltes Anführungszeichen, `\27` ein einfaches Anführungszeichen (`'`) und `\A9` das Copyright-Symbol (`©`).

Wichtig ist, dass bestimmte Zeichen, die sonst ungültig wären, mit einem Backslash maskiert werden können. Dazu gehören doppelte Anführungszeichen, wenn sie innerhalb einer doppelten Anführungszeichenkette verwendet werden, einfache Anführungszeichen, wenn sie innerhalb einer einfachen Anführungszeichenkette verwendet werden, und der Backslash selbst. Zum Beispiel erstellt `\\` einen einzelnen Backslash.

Um neue Zeilen auszugeben, müssen Sie sie mit einem Zeilenumbruchzeichen wie `\A` oder `\00000A` maskieren. In Ihrem Code können Strings jedoch über mehrere Zeilen verteilt werden, wobei jede neue Zeile mit einem `\` als letztes Zeichen der Zeile maskiert werden muss.

Um jedoch neue Zeilen zu erhalten, müssen Sie auch die {{cssxref("white-space")}} Eigenschaft auf einen entsprechenden Wert setzen.

> **Note:** {{Glossary("character_reference", "Zeichenreferenzen")}} (wie `&nbsp;` oder `&#8212;`) können in einem CSS `<string>` nicht verwendet werden.

## Beispiele

### Beispiele für gültige Strings

```css
/* Basic strings */
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

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [CSS-Grundlegende Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
