---
title: <string>
slug: Web/CSS/string
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<string>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert eine Zeichenfolge. Strings werden in zahlreichen CSS-Eigenschaften verwendet, wie zum Beispiel {{CSSxRef("content")}}, {{CSSxRef("font-family")}} und {{CSSxRef("quotes")}}.

## Syntax

Der `<string>`-Datentyp besteht aus einer beliebigen Anzahl von [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen, die entweder von doppelten (`"`) oder einfachen (`'`) Anführungszeichen umgeben sind.

Die meisten Zeichen können wörtlich dargestellt werden. Alle Zeichen können auch mit ihren jeweiligen [Unicode-Codepunkten](https://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks) in Hexadezimal dargestellt werden, wobei sie von einem Backslash (`\`) vorangestellt werden. Zum Beispiel repräsentiert `\22` ein doppeltes Anführungszeichen, `\27` ein einfaches Anführungszeichen (`'`) und `\A9` das Copyright-Symbol (`©`).

Wichtig ist, dass bestimmte Zeichen, die ansonsten ungültig wären, mit einem Backslash umgangen werden können. Dazu gehören doppelte Anführungszeichen innerhalb eines doppelt angeführten Strings, einfache Anführungszeichen innerhalb eines einfach angeführten Strings und der Backslash selbst. Zum Beispiel erstellt `\\` einen einzelnen Backslash.

Um Zeilenumbrüche auszugeben, müssen Sie diese mit einem Zeilenumbruchzeichen wie `\A` oder `\00000A` umgehen. In Ihrem Code können Strings jedoch mehrere Zeilen umfassen, wobei jede neue Zeile mit einem `\` als letztem Zeichen der Zeile umgangen werden muss.

Um tatsächliche Zeilenumbrüche zu erhalten, müssen Sie jedoch auch die Eigenschaft {{cssxref("white-space")}} auf einen entsprechenden Wert setzen.

> [!NOTE]
> {{Glossary("character_reference", "Character references")}} (wie `&nbsp;` oder `&#8212;`) können in einem CSS-`<string>` nicht verwendet werden.

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

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [CSS grundlegende Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
