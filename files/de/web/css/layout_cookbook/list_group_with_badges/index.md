---
title: Listengruppe mit Abzeichen
slug: Web/CSS/Layout_cookbook/List_group_with_badges
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

In diesem Rezept erstellen wir ein Muster für eine Listengruppe mit Abzeichen, die eine Anzahl anzeigen.

![Eine Liste von Elementen mit einem Abzeichen, das eine Anzahl anzeigt und rechts neben dem Text dargestellt wird.](list-group-badges.png)

## Anforderungen

Die Listenelemente sollten mit den Abzeichen angezeigt werden. Das Abzeichen sollte rechts ausgerichtet und vertikal zentriert sein. Das Abzeichen muss unabhängig davon, ob eine einzelne Zeile Inhalt oder mehrere Zeilen Text vorhanden sind, vertikal zentriert sein.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/list-group-badges.html", '100%', 720)}}

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/list-group-badges--download.html)

## Getroffene Entscheidungen

Flexbox macht dieses spezielle Muster unkompliziert und erleichtert auch Änderungen am Layout.

Um sicherzustellen, dass der Text und das Abzeichen korrekt ausgerichtet sind, verwende ich die {{cssxref("justify-content")}}-Eigenschaft mit dem Wert `space-between`. Dies platziert zusätzlichen Raum zwischen den Elementen. Im Live-Beispiel wird das Abzeichen an das Ende des Textes verschoben, wenn diese Eigenschaft entfernt wird, bei Elementen mit kürzerem Text als einer Zeile.

Um den Inhalt horizontal auszurichten, verwende ich die {{cssxref("align-items")}}-Eigenschaft, um den Text und das Abzeichen auf der Querachse auszurichten. Wenn Sie möchten, dass das Abzeichen stattdessen am oberen Rand des Inhalts ausgerichtet ist, ändern Sie dies zu `align-items: flex-start`.

## Siehe auch

- [Box-Ausgestaltung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- Modul: [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
