---
title: "HTMLTableCellElement: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableCellElement/bgColor
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`HTMLTableCellElement.bgColor`**-Eigenschaft wird verwendet, um die Hintergrundfarbe einer Zelle festzulegen oder den Wert des veralteten [`bgColor`](/de/docs/Web/HTML/Element/td#bgcolor)-Attributs abzurufen, falls vorhanden.

> [!NOTE]
> Diese Eigenschaft ist veraltet und CSS sollte verwendet werden, um die Hintergrundfarbe festzulegen. Verwenden Sie stattdessen die {{cssxref("background-color")}}-Eigenschaft.

## Wert

Einer der folgenden Wertetypen kann verwendet werden:

- ein benannter Farbwert, wie `red` oder `blue`
- ein Hex-Code, wie `#0000dd` oder `#00d`

> [!NOTE]
> Die hier akzeptierten Werte sind eine begrenzte Teilmenge der CSS-Farbwerte. Nur {{cssxref("named-color")}} und 3- oder 6-stellige {{cssxref("hex-color")}} (ohne Alpha-Kanal). Während alle HTML-Farbwerte in CSS gültig sind, gilt dies nicht umgekehrt.

## Beispiele

Verwenden Sie stattdessen CSS `background-color`. Ein Beispiel für die Verwendung von [`background-color` mit HTML-Tabellenelementen](/de/docs/Web/CSS/background-color#colorize_tables) ist auf der {{cssxref("background-color")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableRowElement.bgColor`](/de/docs/Web/API/HTMLTableRowElement/bgColor)
