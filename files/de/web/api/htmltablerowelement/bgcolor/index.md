---
title: "HTMLTableRowElement: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableRowElement/bgColor
l10n:
  sourceCommit: 21fddb9643fae34dce16aec8eb5dd86cc29e0b7c
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`HTMLTableRowElement.bgColor`**-Eigenschaft wird verwendet, um die Hintergrundfarbe einer Zeile festzulegen oder den Wert des veralteten [`bgColor`](/de/docs/Web/HTML/Reference/Elements/tr#bgcolor)-Attributs abzurufen, falls vorhanden.

> [!NOTE]
> Diese Eigenschaft ist veraltet und es sollte CSS verwendet werden, um die Hintergrundfarbe festzulegen. Verwenden Sie stattdessen die {{cssxref("background-color")}}-Eigenschaft.

## Wert

Es können folgende Wertetypen verwendet werden:

- ein benannter Farbwert, wie `red` oder `blue`
- ein Hexadezimal-Code, wie `#0000dd`

> [!NOTE]
> Die hier akzeptierten Werte sind eine Teilmenge der CSS-Farbwerte. Sie können HTML-Farbwerte in CSS wiederverwenden, aber nicht in die andere Richtung: Unbekannte Farben würden anders erscheinen als erwartet.

## Beispiele

Verwenden Sie stattdessen CSS `background-color`. Ein [Beispiel](/de/docs/Web/CSS/Reference/Properties/background-color#colorized_tables) ist auf der {{cssxref("background-color")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableCellElement.bgColor`](/de/docs/Web/API/HTMLTableCellElement/bgColor)
