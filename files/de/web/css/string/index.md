---
title: <string>
slug: Web/CSS/string
l10n:
  sourceCommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{CSSRef}}

Der **`<string>`** [-Datentyp](/de/docs/Web/CSS/CSS_Types) in [CSS](/de/docs/Web/CSS) repräsentiert eine Folge von Zeichen. Zeichenketten werden in zahlreichen CSS-Eigenschaften verwendet, wie beispielsweise {{CSSxRef("content")}}, {{CSSxRef("font-family")}} und {{CSSxRef("quotes")}}.

## Syntax

Der `<string>`-Datentyp besteht aus einer beliebigen Anzahl von [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen, die von Doppel- (`"`) oder Einzel- (`'`) Anführungszeichen umgeben sind.

Die meisten Zeichen können direkt dargestellt werden. Alle Zeichen können auch mit ihren entsprechenden [Unicode-Codepoints](https://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks) im Hexadezimalformat dargestellt werden, in welchem Fall sie von einem Backslash (`\`) vorangestellt werden. Zum Beispiel repräsentiert `\22` ein doppeltes Anführungszeichen, `\27` ein einzelnes Anführungszeichen (`'`) und `\A9` das Copyright-Symbol (`©`).

Wichtig ist, dass bestimmte Zeichen, die normalerweise ungültig wären, mit einem Backslash maskiert werden können. Dazu gehören doppelte Anführungszeichen, wenn sie innerhalb einer mit doppelten Anführungszeichen umschlossenen Zeichenkette verwendet werden, einzelne Anführungszeichen innerhalb einer mit einzelnen Anführungszeichen umschlossenen Zeichenkette und der Backslash selbst. Beispielsweise wird `\\` einen einzigen Backslash erzeugen.

Um Zeilenumbrüche auszugeben, müssen Sie diese mit einem Zeilenumbruchzeichen wie `\A` oder `\00000A` maskieren. In Ihrem Code können Zeichenfolgen jedoch über mehrere Zeilen hinweg gehen, wobei jede neue Zeile mit einem `\` als letztem Zeichen der Zeile maskiert werden muss.

Um jedoch Zeilenumbrüche zu erhalten, müssen Sie auch die {{cssxref("white-space")}}-Eigenschaft auf einen geeigneten Wert setzen.

> **Note:** {{glossary("character reference", "Zeichenreferenzen")}} (wie `&nbsp;` oder `&#8212;`) können in einem CSS-`<string>` nicht verwendet werden.

## Beispiele

### Beispiele für gültige Strings

```css
/* Einfache Strings */
"This string is demarcated by double quotes."
'This string is demarcated by single quotes.'

/* Zeichenmaskierung */
"This is a string with \" an escaped double quote."
"This string also has \22 an escaped double quote."
'This is a string with \' an escaped single quote.'
'This string also has \27 an escaped single quote.'
"This is a string with \\ an escaped backslash."

/* Neue Zeile in einem String */
"This string has a \Aline break in it."

/* String, der zwei Codezeilen überspannt (diese zwei Strings haben identische Ausgabe) */
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
- [CSS Grunddatentypen](/de/docs/Web/CSS/CSS_Types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
