---
title: <string>
slug: Web/CSS/string
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Der **`<string>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Zeichenreihe. Strings werden in zahlreichen CSS-Eigenschaften verwendet, wie zum Beispiel {{CSSxRef("content")}}, {{CSSxRef("font-family")}} und {{CSSxRef("quotes")}}.

## Syntax

Der `<string>` Datentyp besteht aus einer beliebigen Anzahl von [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen, die entweder durch doppelte (`"`) oder einfache (`'`) Anführungszeichen umgeben sind.

Die meisten Zeichen können wörtlich dargestellt werden. Alle Zeichen können ebenfalls mit ihren jeweiligen [Unicode-Zeichencodes](https://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks) in Hexadezimalform dargestellt werden, in diesem Fall gehen sie einem Rückwärtsschrägstrich (`\`) voraus. Zum Beispiel stellt `\22` ein doppeltes Anführungszeichen dar, `\27` ein einfaches Anführungszeichen (`'`), und `\A9` das Copyright-Symbol (`©`).

Wichtig ist, dass bestimmte Zeichen, die sonst ungültig wären, mit einem Rückwärtsschrägstrich maskiert werden können. Dazu gehören doppelte Anführungszeichen, wenn sie innerhalb eines doppelt-umgebenen Strings verwendet werden, einfache Anführungszeichen, wenn sie innerhalb eines einfach-umgebenen Strings verwendet werden, sowie der Rückwärtsschrägstrich selbst. Zum Beispiel wird `\\` einen einzelnen Rückwärtsschrägstrich erzeugen.

Um Zeilenumbrüche auszugeben, müssen Sie sie mit einem Zeilenumbruchzeichen wie `\A` oder `\00000A` maskieren. In Ihrem Code können Strings jedoch mehrere Zeilen umfassen, wobei jede neue Zeile mit einem `\` als letztes Zeichen der Zeile maskiert werden muss.

Um jedoch Zeilenumbrüche zu erhalten, müssen Sie auch die {{cssxref("white-space")}} Eigenschaft auf einen geeigneten Wert setzen.

> [!NOTE] > {{Glossary("character_reference", "Zeichenreferenzen")}} (wie `&nbsp;` oder `&#8212;`) können nicht in einem CSS `<string>` verwendet werden.

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

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [CSS-Grunddatentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
