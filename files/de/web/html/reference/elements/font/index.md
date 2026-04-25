---
title: "`<font>` HTML Schriftart-Element"
short-title: <font>
slug: Web/HTML/Reference/Elements/font
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{Deprecated_Header}}

Das **`<font>`** [HTML](/de/docs/Web/HTML)-Element definiert die Schriftgröße, -farbe und -art für seinen Inhalt.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Verwenden Sie stattdessen die CSS-[Fonts](/de/docs/Web/CSS/Guides/Fonts)-Eigenschaften, um Text zu gestalten.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `color` {{Deprecated_Inline}}
  - : Dieses Attribut legt die Textfarbe fest, entweder in Form eines benannten Farbnamens oder einer Farbe im hexadezimalen #RRGGBB-Format.
- `face` {{Deprecated_Inline}}
  - : Dieses Attribut enthält eine durch Kommas getrennte Liste von einem oder mehreren Schriftartnamen. Der Dokumenttext im Standardstil wird in der ersten Schriftart gerendert, die der Browser des Clients unterstützt. Falls keine der aufgelisteten Schriftarten auf dem lokalen System installiert ist, verwendet der Browser typischerweise die proportionale oder festbreite Schriftart für dieses System.
- `size` {{Deprecated_Inline}}
  - : Dieses Attribut gibt die Schriftgröße entweder als numerischen oder relativen Wert an. Numerische Werte reichen von `1` bis `7`, wobei `1` die kleinste und `3` die Standardgröße ist. Es kann mit einem relativen Wert wie `+2` oder `-3` definiert werden, was es relativ zu `3`, dem Standardwert, setzt.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement)-Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
