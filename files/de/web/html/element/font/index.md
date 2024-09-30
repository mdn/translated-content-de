---
title: <font>
slug: Web/HTML/Element/font
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<font>`** [HTML](/de/docs/Web/HTML) Element definiert die Schriftgröße, Farbe und das Schriftbild für seinen Inhalt.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Verwenden Sie die CSS [Fonts](/de/docs/Web/CSS/CSS_fonts) Eigenschaften, um Text zu gestalten.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `color` {{Deprecated_Inline}}
  - : Dieses Attribut setzt die Textfarbe entweder mit einem benannten Farbwert oder einer in der hexadezimalen #RRGGBB-Notation angegebenen Farbe.
- `face` {{Deprecated_Inline}}
  - : Dieses Attribut enthält eine kommagetrennte Liste von einem oder mehreren Schriftartnamen. Der Dokumenttext im Standardstil wird in dem ersten Schriftstil dargestellt, den der Browser des Clients unterstützt. Wenn keine aufgelistete Schriftart auf dem lokalen System installiert ist, verwendet der Browser in der Regel die proportionale oder feste Breite Schriftart für dieses System.
- `size` {{Deprecated_Inline}}
  - : Dieses Attribut spezifiziert die Schriftgröße entweder als numerischen oder relativen Wert. Numerische Werte reichen von `1` bis `7`, wobei `1` die kleinste und `3` die Standardgröße ist. Es kann mit einem relativen Wert definiert werden, wie `+2` oder `-3`, was es relativ zu `3`, dem Standardwert, setzt.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement) Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
