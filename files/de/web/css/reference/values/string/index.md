---
title: <string>
slug: Web/CSS/Reference/Values/string
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<string>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Folge von Zeichen. Zeichenketten werden in zahlreichen CSS-Eigenschaften verwendet, wie {{CSSxRef("content")}}, {{CSSxRef("font-family")}} und {{CSSxRef("quotes")}}.

## Syntax

Der `<string>` Datentyp besteht aus einer beliebigen Anzahl von [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen, die entweder von doppelten (`"`) oder einfachen (`'`) Anführungszeichen umschlossen sind.

Die meisten Zeichen können wörtlich dargestellt werden. Alle Zeichen können auch durch ihre jeweiligen [Unicode-Code-Punkte](https://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks) in Hexadezimal dargestellt werden, wobei sie in diesem Fall von einem Backslash (`\`) vorangestellt werden. Zum Beispiel repräsentiert `\22` ein doppeltes Anführungszeichen, `\27` ein einfaches Anführungszeichen (`'`), und `\A9` das Copyright-Symbol (`©`).

Es ist wichtig, dass bestimmte Zeichen, die ansonsten ungültig wären, mit einem Backslash maskiert werden können. Dazu gehören doppelte Anführungszeichen, wenn sie innerhalb einer doppelt-umrahmten Zeichenkette verwendet werden, einfache Anführungszeichen, wenn sie innerhalb einer einfach-umrahmten Zeichenkette verwendet werden, und der Backslash selbst. So wird `\\` einen einzelnen Backslash erzeugen.

Um Zeilenumbrüche auszugeben, müssen diese mit einem Zeilenumschlag-Zeichen wie `\A` oder `\00000A` maskiert werden. In Ihrem Code können jedoch Zeichenketten über mehrere Zeilen gehen, wobei jede neue Zeile mit einem `\` als letztem Zeichen der Zeile maskiert werden muss.

Um jedoch neue Zeilen zu erhalten, müssen Sie auch die {{cssxref("white-space")}} Eigenschaft auf den entsprechenden Wert setzen.

> [!NOTE] > {{Glossary("character_reference", "Zeichenreferenzen")}} (wie `&nbsp;` oder `&#8212;`) können in einer CSS-`<string>` nicht verwendet werden.

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

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [CSS-Grunddatentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
