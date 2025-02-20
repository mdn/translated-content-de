---
title: <string>
slug: Web/CSS/string
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<string>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Zeichenfolge. Strings werden in zahlreichen CSS-Eigenschaften verwendet, wie z. B. {{CSSxRef("content")}}, {{CSSxRef("font-family")}} und {{CSSxRef("quotes")}}.

## Syntax

Der `<string>`-Datentyp besteht aus einer beliebigen Anzahl von [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen, die entweder von doppelten (`"`) oder einfachen (`'`) Anführungszeichen eingeschlossen werden.

Die meisten Zeichen können wörtlich dargestellt werden. Alle Zeichen können auch mit ihren entsprechenden [Unicode-Codepunkten](https://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks) in Hexadezimal dargestellt werden, wobei sie mit einem Backslash (`\`) eingeleitet werden. Zum Beispiel repräsentiert `\22` ein doppeltes Anführungszeichen, `\27` ein einfaches Anführungszeichen (`'`) und `\A9` das Copyright-Symbol (`©`).

Wichtig ist, dass bestimmte Zeichen, die sonst ungültig wären, mit einem Backslash entkommen werden können. Dazu gehören doppelte Anführungszeichen in einem doppelt-angeführten String, einfache Anführungszeichen in einem einfach-angeführten String und der Backslash selbst. Zum Beispiel erzeugt `\\` einen einzelnen Backslash.

Um Zeilenumbrüche auszugeben, müssen Sie sie mit einem Zeilenumbruchzeichen wie `\A` oder `\00000A` entkommen. In Ihrem Code können Strings jedoch über mehrere Zeilen verteilt sein, wobei jede neue Zeile mit einem `\` am Ende der Zeile entkommen werden muss.

Um jedoch neue Zeilen zu verwenden, muss auch die Eigenschaft {{cssxref("white-space")}} auf einen geeigneten Wert gesetzt werden.

> **Note:** {{Glossary("character_reference", "Zeichenreferenzen")}} (wie `&nbsp;` oder `&#8212;`) können in einem CSS-`<string>` nicht verwendet werden.

## Beispiele

### Beispiele gültiger Strings

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

- [CSS Units and Values](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS Basic Data Types](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [Introduction to CSS: Values and units](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
