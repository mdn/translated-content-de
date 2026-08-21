---
title: "HTMLTableCellElement: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableCellElement/bgColor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableCellElement.bgColor`**-Eigenschaft wird verwendet, um die Hintergrundfarbe einer Zelle festzulegen oder den Wert des veralteten [`bgColor`](/de/docs/Web/HTML/Reference/Elements/td#bgcolor)-Attributs abzurufen, falls vorhanden.

> [!NOTE]
> Diese Eigenschaft ist veraltet und es sollte CSS verwendet werden, um die Hintergrundfarbe festzulegen. Verwenden Sie stattdessen die {{cssxref("background-color")}}-Eigenschaft.

## Wert

Es kann einer der folgenden Wertetypen verwendet werden:

- ein benannter Farbwert wie `red` oder `blue`
- ein Hex-Code wie `#0000dd` oder `#00d`

> [!NOTE]
> Die hier akzeptierten Werte sind eine begrenzte Teilmenge der CSS-Farbwerte. Nur {{cssxref("named-color")}} und 3- oder 6-stellige {{cssxref("hex-color")}} (ohne Alphakanal). Während alle HTML-Farbwerte in CSS gültig sind, trifft dies in umgekehrter Richtung nicht zu.

## Beispiele

Verwenden Sie stattdessen CSS `background-color`. Ein Beispiel für die Verwendung von [`background-color` mit HTML-Tabellenelementen](/de/docs/Web/CSS/Reference/Properties/background-color#colorized_tables) finden Sie auf der {{cssxref("background-color")}}-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableRowElement.bgColor`](/de/docs/Web/API/HTMLTableRowElement/bgColor)
