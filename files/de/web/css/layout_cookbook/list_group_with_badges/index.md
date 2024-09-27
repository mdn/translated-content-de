---
title: Listengruppe mit Badges
slug: Web/CSS/Layout_cookbook/List_group_with_badges
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

In diesem Rezept erstellen wir ein Listengruppenmuster mit Badges, die eine Zählung anzeigen.

![Eine Liste von Elementen mit einem Badge, das eine Zählung anzeigt, die rechts vom Text angezeigt wird.](list-group-badges.png)

## Anforderungen

Die Listenelemente sollten zusammen mit den Badges angezeigt werden. Der Badge sollte rechts ausgerichtet und vertikal zentriert sein. Der Badge muss vertikal zentriert sein, egal ob es sich um eine einzelne Textzeile oder mehrere Textzeilen handelt.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/list-group-badges.html", '100%', 720)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/list-group-badges--download.html)

## Getroffene Entscheidungen

Flexbox macht dieses spezielle Muster einfach und erleichtert auch Änderungen am Layout.

Um sicherzustellen, dass der Text und der Badge korrekt ausgerichtet sind, verwende ich die {{cssxref("justify-content")}}-Eigenschaft mit einem Wert von `space-between`. Dies platziert jeden zusätzlichen Raum zwischen den Elementen. In dem Live-Beispiel, wenn Sie diese Eigenschaft entfernen, werden Sie sehen, dass der Badge bei Elementen mit kürzeren Text am Ende des Textes verschoben wird.

Um den Inhalt horizontal auszurichten, verwende ich die {{cssxref("align-items")}}-Eigenschaft, um den Text und den Badge auf der Kreuzachse auszurichten. Wenn Sie möchten, dass der Badge an der Oberseite des Inhalts ausgerichtet wird, ändern Sie dies zu `align-items: flex-start`.

## Siehe auch

- [Ausrichtung von Boxen im Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
