---
title: "HTMLTableRowElement: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableRowElement/bgColor
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`HTMLTableRowElement.bgColor`**-Eigenschaft wird verwendet, um die Hintergrundfarbe einer Zeile festzulegen oder den Wert des veralteten [`bgColor`](/de/docs/Web/HTML/Reference/Elements/tr#bgcolor)-Attributs abzurufen, falls vorhanden.

> [!NOTE]
> Diese Eigenschaft ist veraltet und CSS sollte verwendet werden, um die Hintergrundfarbe festzulegen. Verwenden Sie stattdessen die {{cssxref("background-color")}}-Eigenschaft.

## Wert

Einer der folgenden Werttypen kann verwendet werden:

- ein benannter Farbwert, wie `red` oder `blue`
- ein Hexadezimalwert, wie `#0000dd`

> [!NOTE]
> Die hier akzeptierten Werte sind eine Teilmenge der CSS-Farbwerte. Sie können HTML-Farbwerte in CSS wiederverwenden, jedoch nicht in umgekehrter Richtung: Die unbekannten Farben würden anders erscheinen als erwartet.

## Beispiele

Verwenden Sie stattdessen die CSS-Eigenschaft `background-color`. Ein [Beispiel](/de/docs/Web/CSS/Reference/Properties/background-color#colorize_tables) ist auf der {{cssxref("background-color")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableCellElement.bgColor`](/de/docs/Web/API/HTMLTableCellElement/bgColor)
