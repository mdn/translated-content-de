---
title: <string>
slug: Web/CSS/string
l10n:
  sourceCommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{CSSRef}}

Der **`<string>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine Zeichenfolge. Zeichenfolgen werden in zahlreichen CSS-Eigenschaften verwendet, wie {{CSSxRef("content")}}, {{CSSxRef("font-family")}} und {{CSSxRef("quotes")}}.

## Syntax

Der `<string>`-Datentyp besteht aus einer beliebigen Anzahl von [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen, die in doppelte (`"`) oder einfache (`'`) Anführungszeichen eingeschlossen sind.

Die meisten Zeichen können im Klartext angegeben werden. Alle Zeichen können auch mit ihren jeweiligen [Unicode-Codepunkten](https://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks) in hexadezimaler Form dargestellt werden, wobei sie von einem Backslash (`\`) vorangestellt werden. Zum Beispiel steht `\22` für ein doppeltes Anführungszeichen, `\27` für ein einfaches Anführungszeichen (`'`) und `\A9` für das Copyright-Symbol (`©`).

Wichtig ist, dass bestimmte Zeichen, die ansonsten ungültig wären, mit einem Backslash maskiert werden können. Dazu gehören doppelte Anführungszeichen innerhalb einer doppelten Anführungszeichen-Zeichenkette, einfache Anführungszeichen innerhalb einer einfachen Anführungszeichen-Zeichenkette und der Backslash selbst. Zum Beispiel erzeugt `\\` einen einzelnen Backslash.

Um Zeilenumbrüche auszugeben, müssen Sie diese mit einem Zeilenumbruch-Zeichen wie `\A` oder `\00000A` maskieren. In Ihrem Code können jedoch Zeichenfolgen über mehrere Zeilen hinweg laufen, wobei jede neue Zeile mit einem `\` als letztem Zeichen der Zeile maskiert werden muss.

Um Zeilenumbrüche zu erhalten, müssen Sie auch die {{cssxref("white-space")}}-Eigenschaft auf einen geeigneten Wert setzen.

> **Note:** [Zeichenreferenzen](/de/docs/Glossary/character_reference) (wie `&nbsp;` oder `&#8212;`) können in einem CSS-`<string>` nicht verwendet werden.

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

- [CSS-Einheiten und Werte](/de/docs/Web/CSS/CSS_Values_and_Units)
- [CSS-Basisdatentypen](/de/docs/Web/CSS/CSS_Types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
