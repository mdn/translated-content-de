---
title: "HTMLTableCellElement: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableCellElement/bgColor
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`HTMLTableCellElement.bgColor`**-Eigenschaft wird verwendet, um die Hintergrundfarbe einer Zelle festzulegen oder den Wert des veralteten [`bgColor`](/de/docs/Web/HTML/Reference/Elements/td#bgcolor)-Attributs abzurufen, falls vorhanden.

> [!NOTE]
> Diese Eigenschaft ist veraltet und CSS sollte verwendet werden, um die Hintergrundfarbe festzulegen. Verwenden Sie stattdessen die {{cssxref("background-color")}}-Eigenschaft.

## Wert

Es kann einer der folgenden Wertetypen verwendet werden:

- Eine benannte Farbe, wie `red` oder `blue`
- Ein Hex-Code, wie `#0000dd` oder `#00d`

> [!NOTE]
> Die hier akzeptierten Werte sind ein begrenzter Teil der CSS-Farbwerte. Es sind nur {{cssxref("named-color")}} und 3- oder 6-stellige {{cssxref("hex-color")}} (ohne Alpha-Kanal) zulässig. Während alle HTML-Farbwerte in CSS gültig sind, gilt dies nicht in umgekehrter Richtung.

## Beispiele

Verwenden Sie stattdessen `background-color` von CSS. Ein Beispiel zur Verwendung von [`background-color` mit HTML-Tabellenelementen](/de/docs/Web/CSS/background-color#colorize_tables) ist auf der {{cssxref("background-color")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableRowElement.bgColor`](/de/docs/Web/API/HTMLTableRowElement/bgColor)
