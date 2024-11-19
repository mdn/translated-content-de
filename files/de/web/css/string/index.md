---
title: <string>
slug: Web/CSS/string
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Der **`<string>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine Zeichenfolge. Zeichenfolgen werden in zahlreichen CSS-Eigenschaften verwendet, wie z.B. {{CSSxRef("content")}}, {{CSSxRef("font-family")}} und {{CSSxRef("quotes")}}.

## Syntax

Der `<string>` Datentyp besteht aus einer beliebigen Anzahl von [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen, die entweder von doppelten (`"`) oder einfachen (`'`) Anführungszeichen umgeben sind.

Die meisten Zeichen können wörtlich dargestellt werden. Alle Zeichen können auch mit ihren entsprechenden [Unicode-Codepunkten](https://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks) im Hexadezimalformat dargestellt werden, wobei sie von einem umgekehrten Schrägstrich (`\`) vorangestellt werden. Zum Beispiel repräsentiert `\22` ein doppeltes Anführungszeichen, `\27` ein einfaches Anführungszeichen (`'`) und `\A9` das Copyright-Symbol (`©`).

Wichtig ist, dass bestimmte Zeichen, die sonst ungültig wären, mit einem umgekehrten Schrägstrich maskiert werden können. Dazu gehören doppelte Anführungszeichen, wenn sie innerhalb eines doppelt-umgrenzten Strings verwendet werden, einfache Anführungszeichen, wenn sie innerhalb eines einfach-umgrenzten Strings verwendet werden, und der umgekehrte Schrägstrich selbst. Zum Beispiel wird `\\` einen einzelnen umgekehrten Schrägstrich erzeugen.

Um neue Zeilen auszugeben, müssen Sie diese mit einem Zeilenumbruchzeichen wie `\A` oder `\00000A` maskieren. In Ihrem Code können Zeichenfolgen jedoch über mehrere Zeilen gehen, wobei jede neue Zeile mit einem `\` als letztes Zeichen der Zeile maskiert werden muss.

Um jedoch neue Zeilen zu erhalten, müssen Sie auch die Eigenschaft {{cssxref("white-space")}} auf einen geeigneten Wert setzen.

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

- [CSS-Einheiten und -Werte](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS-Grunddatentypen](/de/docs/Web/CSS/CSS_Types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
