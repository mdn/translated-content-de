---
title: <font>
slug: Web/HTML/Element/font
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<font>`**-[HTML](/de/docs/Web/HTML)-Element definiert die Schriftgröße, die Farbe und das Schriftbild für seinen Inhalt.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Nutzen Sie stattdessen die CSS-[Fonts](/de/docs/Web/CSS/CSS_fonts)-Eigenschaften, um Text zu gestalten.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `color` {{Deprecated_Inline}}
  - : Dieses Attribut legt die Textfarbe entweder mit einem benannten Farbwert oder einem Farbwert im hexadezimalen Format #RRGGBB fest.
- `face` {{Deprecated_Inline}}
  - : Dieses Attribut enthält eine durch Kommas getrennte Liste von einem oder mehreren Schriftartnamen. Der Text des Dokuments in der Standarddarstellung wird in der ersten Schriftart gerendert, die der Browser des Clients unterstützt. Wenn keine der aufgeführten Schriftarten auf dem lokalen System installiert ist, wechselt der Browser typischerweise zur proportialen oder festbreiten Schriftart für dieses System.
- `size` {{Deprecated_Inline}}
  - : Dieses Attribut gibt die Schriftgröße entweder als numerischen oder relativen Wert an. Numerische Werte reichen von `1` bis `7`, wobei `1` die kleinste und `3` die Standardeinstellung ist. Es kann mit einem relativen Wert angegeben werden, wie `+2` oder `-3`, der es relativ zu `3`, dem Standardwert, festlegt.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement)-Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
