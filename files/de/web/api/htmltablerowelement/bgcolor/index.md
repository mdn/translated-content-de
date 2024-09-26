---
title: "HTMLTableRowElement: bgColor Eigenschaft"
short-title: bgColor
slug: Web/API/HTMLTableRowElement/bgColor
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`HTMLTableRowElement.bgColor`**-Eigenschaft wird verwendet, um die Hintergrundfarbe einer Zeile festzulegen oder den Wert des veralteten [`bgColor`](/de/docs/Web/HTML/Element/tr#bgcolor)-Attributs abzurufen, falls vorhanden.

> [!NOTE]
> Diese Eigenschaft ist veraltet und es sollte CSS verwendet werden, um die Hintergrundfarbe festzulegen. Verwenden Sie stattdessen die {{cssxref("background-color")}}-Eigenschaft.

## Wert

Einer der folgenden Werttypen kann verwendet werden:

- ein benannter Farbname, wie `red` oder `blue`
- ein Hexadezimalcode, wie `#0000dd`

> [!NOTE]
> Die hier akzeptierten Werte sind ein Teil der CSS-Farbwerte. Sie können HTML-Farbwerte in CSS wiederverwenden, jedoch nicht in die andere Richtung: unbekannte Farben würden anders erscheinen als erwartet.

## Beispiele

Verwenden Sie stattdessen CSS `background-color`. Ein [Beispiel](/de/docs/Web/CSS/background-color#colorize_tables) ist auf der {{cssxref("background-color")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTableCellElement.bgColor")}}