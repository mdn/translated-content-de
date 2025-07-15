---
title: <string>
slug: Web/CSS/string
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<string>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Zeichenfolge. Zeichenketten werden in zahlreichen CSS-Eigenschaften verwendet, wie {{CSSxRef("content")}}, {{CSSxRef("font-family")}} und {{CSSxRef("quotes")}}.

## Syntax

Der `<string>`-Datentyp besteht aus einer beliebigen Anzahl von [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen, die entweder von doppelten (`"`) oder einfachen (`'`) Anführungszeichen umgeben sind.

Die meisten Zeichen können wörtlich dargestellt werden. Alle Zeichen können auch mit ihren entsprechenden [Unicode-Codepoints](https://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks) in Hexadezimalform dargestellt werden. In diesem Fall werden sie von einem Backslash (`\`) eingeleitet. Zum Beispiel repräsentiert `\22` ein doppeltes Anführungszeichen, `\27` ein einfaches Anführungszeichen (`'`) und `\A9` das Copyright-Symbol (`©`).

Wichtig ist, dass bestimmte Zeichen, die sonst ungültig wären, mit einem Backslash entkommen werden können. Dazu gehören doppelte Anführungszeichen innerhalb einer doppelt-angeführten Zeichenkette, einfache Anführungszeichen innerhalb einer einfach-angeführten Zeichenkette und der Backslash selbst. Zum Beispiel erzeugt `\\` einen einzelnen Backslash.

Um neue Zeilen auszugeben, müssen Sie diese mit einem Zeilenvorschubzeichen wie `\A` oder `\00000A` escapen. In Ihrem Code können Zeichenfolgen jedoch über mehrere Zeilen laufen, wobei jede neue Zeile mit einem `\` als letztem Zeichen der Zeile escapen werden muss.

Um jedoch neue Zeilen zu erhalten, müssen Sie auch die {{cssxref("white-space")}}-Eigenschaft auf einen geeigneten Wert setzen.

> [!NOTE]
> {{Glossary("character_reference", "Zeichenreferenzen")}} (wie `&nbsp;` oder `&#8212;`) können in einem CSS-`<string>` nicht verwendet werden.

## Beispiele

### Beispiele für gültige Zeichenketten

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

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Grundlegende CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
