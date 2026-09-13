---
title: "`<font>` HTML-Schriftelement"
short-title: <font>
slug: Web/HTML/Reference/Elements/font
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<font>`** [HTML](/de/docs/Web/HTML)-Element definiert die Schriftgröße, Farbe und das Schriftbild für seinen Inhalt.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Verwenden Sie stattdessen die CSS-[Schriftarten](/de/docs/Web/CSS/Guides/Fonts)-Eigenschaften, um Text zu formatieren.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `color` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut setzt die Textfarbe, indem entweder ein benannter Farbname oder eine Farbe im hexadezimalen Format #RRGGBB angegeben wird.
- `face` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut enthält eine durch Kommas getrennte Liste von einem oder mehreren Schriftartnamen. Der Text des Dokuments im Standardstil wird in der ersten Schriftart dargestellt, die vom Browser des Clients unterstützt wird. Wenn keine der aufgeführten Schriftarten auf dem lokalen System installiert ist, verwendet der Browser typischerweise die proportionale oder Festbreitenschriftart für dieses System.
- `size` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut gibt die Schriftgröße entweder als numerischen oder relativen Wert an. Numerische Werte reichen von `1` bis `7`, wobei `1` die kleinste und `3` der Standard ist. Es kann mit einem relativen Wert definiert werden, wie `+2` oder `-3`, der relativ zu `3`, dem Standardwert, gesetzt wird.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement)-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
