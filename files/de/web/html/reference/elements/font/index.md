---
title: <font>
slug: Web/HTML/Reference/Elements/font
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{Deprecated_Header}}

Das **`<font>`**-[HTML](/de/docs/Web/HTML)-Element definiert die Schriftgröße, die Farbe und den Schriftstil für seinen Inhalt.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Nutzen Sie die CSS-[Fonts](/de/docs/Web/CSS/CSS_fonts)-Eigenschaften, um Text zu stylen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `color` {{Deprecated_Inline}}
  - : Dieses Attribut legt die Textfarbe fest, entweder durch einen benannten Farbwert oder eine im hexadezimalen #RRGGBB-Format angegebene Farbe.
- `face` {{Deprecated_Inline}}
  - : Dieses Attribut enthält eine durch Kommas getrennte Liste von einem oder mehreren Schriftartnamen. Der Dokumenttext im Standardstil wird in der ersten Schriftart angezeigt, die der Browser des Clients unterstützt. Wenn keine der aufgelisteten Schriftarten auf dem lokalen System installiert ist, verwendet der Browser normalerweise die proportionale oder festbreite Schriftart für dieses System.
- `size` {{Deprecated_Inline}}
  - : Dieses Attribut gibt die Schriftgröße entweder als numerischen oder relativen Wert an. Numerische Werte reichen von `1` bis `7`, wobei `1` die kleinste und `3` die Standardeinstellung ist. Es kann mit einem relativen Wert wie `+2` oder `-3` definiert werden, der relativ zu `3`, dem Standardwert, festgelegt wird.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement)-Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
