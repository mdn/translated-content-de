---
title: <font>
slug: Web/HTML/Reference/Elements/font
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Deprecated_Header}}

Das **`<font>`**-Element [HTML](/de/docs/Web/HTML) definiert die Schriftgröße, -farbe und -art für seinen Inhalt.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Verwenden Sie die CSS [Fonts](/de/docs/Web/CSS/Guides/Fonts) Eigenschaften, um Text zu stylen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `color` {{Deprecated_Inline}}
  - : Dieses Attribut setzt die Textfarbe unter Verwendung eines benannten Farbnamens oder einer Farbe im hexadezimalen #RRGGBB-Format.
- `face` {{Deprecated_Inline}}
  - : Dieses Attribut enthält eine durch Kommas getrennte Liste von einem oder mehreren Schriftartennamen. Der Dokumenttext im Standardstil wird in der ersten Schriftart dargestellt, die der Browser des Clients unterstützt. Wenn keine der aufgelisteten Schriftarten auf dem lokalen System installiert ist, verwendet der Browser typischerweise die proportionale oder Festbreitenschriftart für dieses System.
- `size` {{Deprecated_Inline}}
  - : Dieses Attribut spezifiziert die Schriftgröße entweder als numerischen oder relativen Wert. Numerische Werte reichen von `1` bis `7`, wobei `1` die kleinste und `3` die Standardgröße ist. Es kann mit einem relativen Wert wie `+2` oder `-3` definiert werden, der relativ zu `3`, dem Standardwert, gesetzt wird.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement) Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
