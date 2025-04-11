---
title: "HTMLTableRowElement: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableRowElement/bgColor
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`HTMLTableRowElement.bgColor`**-Eigenschaft wird verwendet, um die Hintergrundfarbe einer Zeile festzulegen oder den Wert des veralteten [`bgColor`](/de/docs/Web/HTML/Reference/Elements/tr#bgcolor)-Attributs abzurufen, falls vorhanden.

> [!NOTE]
> Diese Eigenschaft ist veraltet und CSS sollte verwendet werden, um die Hintergrundfarbe festzulegen. Verwenden Sie stattdessen die {{cssxref("background-color")}}-Eigenschaft.

## Wert

Es kann einer der folgenden Wertetypen verwendet werden:

- ein benannter Farbname, wie `red` oder `blue`
- ein Hexadezimalcode, wie `#0000dd`

> [!NOTE]
> Die hier akzeptierten Werte sind eine Teilmenge der CSS-Farbwerte. Sie können HTML-Farbwerte in CSS wiederverwenden, aber nicht umgekehrt: Unbekannte Farben würden anders als erwartet erscheinen.

## Beispiele

Verwenden Sie stattdessen die CSS-Eigenschaft `background-color`. Ein [Beispiel](/de/docs/Web/CSS/background-color#colorize_tables) ist auf der {{cssxref("background-color")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableCellElement.bgColor`](/de/docs/Web/API/HTMLTableCellElement/bgColor)
