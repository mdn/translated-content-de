---
title: "`<font>` HTML-Schriftarten-Element"
short-title: <font>
slug: Web/HTML/Reference/Elements/font
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{Deprecated_Header}}

Das **`<font>`**-Element in [HTML](/de/docs/Web/HTML) definiert die Schriftgröße, -farbe und -art für seinen Inhalt.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Verwenden Sie die CSS [Fonts](/de/docs/Web/CSS/Guides/Fonts)-Eigenschaften, um Text zu stylen.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `color` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut legt die Textfarbe fest, indem entweder eine benannte Farbe oder eine Farbe im hexadezimalen #RRGGBB-Format angegeben wird.
- `face` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut enthält eine durch Kommas getrennte Liste von einem oder mehreren Schriftartnamen. Der Dokumenttext im Standardstil wird in der ersten Schriftart angezeigt, die der Browser des Clients unterstützt. Wenn keine der aufgelisteten Schriftarten auf dem lokalen System installiert ist, wechselt der Browser typischerweise auf die proportionale oder feste Schriftart für dieses System.
- `size` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Dieses Attribut gibt die Schriftgröße als numerischen oder relativen Wert an. Numerische Werte reichen von `1` bis `7`, wobei `1` die kleinste und `3` der Standard ist. Es kann mit einem relativen Wert wie `+2` oder `-3` definiert werden, der relativ zu `3`, dem Standardwert, gesetzt wird.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement)-Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
