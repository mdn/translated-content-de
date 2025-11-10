---
title: "HTMLTableCellElement: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableCellElement/bgColor
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`HTMLTableCellElement.bgColor`**-Eigenschaft wird verwendet, um die Hintergrundfarbe einer Zelle festzulegen oder den Wert des veralteten [`bgColor`](/de/docs/Web/HTML/Reference/Elements/td#bgcolor)-Attributs abzurufen, falls vorhanden.

> [!NOTE]
> Diese Eigenschaft ist veraltet und es sollte CSS verwendet werden, um die Hintergrundfarbe festzulegen. Verwenden Sie stattdessen die {{cssxref("background-color")}}-Eigenschaft.

## Wert

Einer der folgenden Wertetypen kann verwendet werden:

- ein benannter Farbwert, wie `red` oder `blue`
- ein Hexadezimalcode, wie `#0000dd` oder `#00d`

> [!NOTE]
> Die hier akzeptierten Werte sind eine begrenzte Teilmenge der CSS-Farbwerte. Nur {{cssxref("named-color")}} und 3- oder 6-stellige {{cssxref("hex-color")}} (ohne Alpha-Kanal). Während alle HTML-Farbwerte in CSS gültig sind, gilt dies nicht in umgekehrter Richtung.

## Beispiele

Verwenden Sie stattdessen `background-color` in CSS. Ein Beispiel zur Verwendung von [`background-color` mit HTML-Tabellenelementen](/de/docs/Web/CSS/Reference/Properties/background-color#colorize_tables) finden Sie auf der {{cssxref("background-color")}}-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableRowElement.bgColor`](/de/docs/Web/API/HTMLTableRowElement/bgColor)
