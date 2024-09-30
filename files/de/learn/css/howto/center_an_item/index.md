---
title: Wie man ein Element zentriert
slug: Learn/CSS/Howto/Center_an_item
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie ein Element innerhalb eines anderen Elements sowohl horizontal als auch vertikal zentrieren können.

## Eine Box zentrieren

Um eine Box innerhalb einer anderen mit CSS zu zentrieren, müssen Sie [CSS-Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften auf dem übergeordneten Container verwenden. Da diese Ausrichtungseigenschaften noch keine Browser-Unterstützung für Block- und Inline-Layouts haben, müssen Sie den übergeordneten Container als [flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [grid](/de/docs/Web/CSS/CSS_grid_layout)-Container gestalten, um die Fähigkeit zur Ausrichtung zu aktivieren.

Im Beispiel unten haben wir dem übergeordneten Container `display: flex` zugewiesen; dann haben wir {{cssxref("justify-content")}} auf center gesetzt, um es horizontal auszurichten, und {{cssxref("align-items")}} auf center gesetzt, um es vertikal auszurichten.

{{EmbedGHLiveSample("css-examples/howto/center.html", '100%', 700)}}

> [!NOTE]
> Sie können diese Technik verwenden, um jede Art von Ausrichtung eines oder mehrerer Elemente innerhalb eines anderen vorzunehmen. Im obigen Beispiel können Sie versuchen, die Werte zu ändern, um beliebige gültige Werte für {{cssxref("justify-content")}} und {{cssxref("align-items")}} zu testen.

## Siehe auch

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Rasterlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
