---
title: "HTMLTableRowElement: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableRowElement/bgColor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableRowElement.bgColor`**-Eigenschaft wird verwendet, um die Hintergrundfarbe einer Zeile festzulegen oder den Wert des veralteten [`bgColor`](/de/docs/Web/HTML/Reference/Elements/tr#bgcolor)-Attributs abzurufen, falls vorhanden.

> [!NOTE]
> Diese Eigenschaft ist veraltet und es sollte CSS verwendet werden, um die Hintergrundfarbe festzulegen. Verwenden Sie stattdessen die {{cssxref("background-color")}}-Eigenschaft.

## Wert

Es können folgende Wertetypen verwendet werden:

- ein benannter Farbname, wie `red` oder `blue`
- ein Hexadezimalcode, wie `#0000dd`

> [!NOTE]
> Die hier akzeptierten Werte sind ein Teil der CSS-Farbwerte. Sie können HTML-Farbwerte in CSS wiederverwenden, aber nicht in umgekehrter Richtung: unbekannte Farben würden anders erscheinen als erwartet.

## Beispiele

Verwenden Sie stattdessen die CSS-`background-color`. Ein [Beispiel](/de/docs/Web/CSS/Reference/Properties/background-color#colorized_tables) ist auf der {{cssxref("background-color")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableCellElement.bgColor`](/de/docs/Web/API/HTMLTableCellElement/bgColor)
