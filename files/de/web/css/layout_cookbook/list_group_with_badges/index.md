---
title: Listengruppe mit Badges
slug: Web/CSS/Layout_cookbook/List_group_with_badges
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

In diesem Rezept erstellen wir ein Listengruppenmuster mit Badges, die eine Anzahl anzeigen.

![Eine Liste von Elementen mit einem Badge, das eine Anzahl rechts neben dem Text anzeigt.](list-group-badges.png)

## Anforderungen

Die Listenelemente sollten mit den Badges angezeigt werden. Das Badge sollte rechtsbündig und vertikal zentriert sein. Das Badge muss vertikal zentriert sein, unabhängig davon, ob es sich um eine einzelne Zeile Inhalt oder mehrere Textzeilen handelt.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/list-group-badges.html", '100%', 720)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/list-group-badges--download.html)

## Getroffene Entscheidungen

Flexbox macht dieses spezielle Muster einfach und erleichtert auch Änderungen am Layout.

Um sicherzustellen, dass der Text und das Badge korrekt ausgerichtet sind, verwende ich die {{cssxref("justify-content")}}-Eigenschaft mit dem Wert `space-between`. Dies platziert zusätzlichen Raum zwischen den Elementen. Im Live-Beispiel, wenn Sie diese Eigenschaft entfernen, werden Sie sehen, dass sich das Badge an das Ende des Textes bei Elementen mit kürzerem Text als eine Zeile bewegt.

Um den Inhalt horizontal auszurichten, verwende ich die {{cssxref("align-items")}}-Eigenschaft, um den Text und das Badge auf der Querachse auszurichten. Wenn Sie möchten, dass das Badge am oberen Rand des Inhalts ausgerichtet ist, ändern Sie dies zu `align-items: flex-start`.

## Siehe auch

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- Modul [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
