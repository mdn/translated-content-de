---
title: <font>
slug: Web/HTML/Reference/Elements/font
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

Das **`<font>`** [HTML](/de/docs/Web/HTML) Element definiert die Schriftgröße, die Farbe und den Schriftstil für seinen Inhalt.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Verwenden Sie die CSS [Fonts](/de/docs/Web/CSS/CSS_fonts) Eigenschaften, um Text zu stylen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `color` {{Deprecated_Inline}}
  - : Dieses Attribut setzt die Textfarbe entweder durch einen benannten Farbwert oder durch eine im hexadezimalen #RRGGBB-Format angegebene Farbe.
- `face` {{Deprecated_Inline}}
  - : Dieses Attribut enthält eine durch Kommas getrennte Liste von einem oder mehreren Schriftnamen. Der Dokumenttext im Standardstil wird in der ersten Schriftart gerendert, die der Browser des Clients unterstützt. Wenn keine aufgelistete Schriftart auf dem lokalen System installiert ist, wechselt der Browser typischerweise zur proportionale oder festbreiten Schriftart dieses Systems.
- `size` {{Deprecated_Inline}}
  - : Dieses Attribut gibt die Schriftgröße entweder als numerischen oder relativen Wert an. Numerische Werte reichen von `1` bis `7`, wobei `1` die kleinste und `3` der Standardwert ist. Es kann auch ein relativer Wert wie `+2` oder `-3` verwendet werden, der relativ zu `3`, dem Standardwert, gesetzt wird.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement) Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
