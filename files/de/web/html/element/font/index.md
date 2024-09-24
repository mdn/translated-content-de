---
title: <font>
slug: Web/HTML/Element/font
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<font>`** [HTML](/de/docs/Web/HTML)-Element definiert die Schriftgröße, Farbe und Schriftart für seinen Inhalt.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Nutzen Sie die CSS-[Schriftarten](/de/docs/Web/CSS/CSS_fonts)-Eigenschaften, um Text zu formatieren.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `color` {{Deprecated_Inline}}
  - : Dieses Attribut legt die Textfarbe entweder mit einem benannten Farbwert oder im hexadezimalen #RRGGBB-Format fest.
- `face` {{Deprecated_Inline}}
  - : Dieses Attribut enthält eine durch Kommas getrennte Liste von einem oder mehreren Schriftnamen. Der Dokumenttext im Standardstil wird in der ersten Schriftart gerendert, die der Browser des Clients unterstützt. Wenn keine der aufgelisteten Schriften auf dem lokalen System installiert ist, verwendet der Browser in der Regel die proportionale oder festbreite Schriftart für dieses System.
- `size` {{Deprecated_Inline}}
  - : Dieses Attribut gibt die Schriftgröße entweder als numerischen oder relativen Wert an. Numerische Werte reichen von `1` bis `7`, wobei `1` die kleinste und `3` die Standardgröße ist. Es kann mit einem relativen Wert wie `+2` oder `-3` definiert werden, der relativ zu `3`, dem Standardwert, gesetzt wird.

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref("HTMLFontElement")}} Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
