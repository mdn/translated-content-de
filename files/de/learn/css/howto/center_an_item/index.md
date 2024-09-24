---
title: Wie man ein Element zentriert
slug: Learn/CSS/Howto/Center_an_item
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie ein Element innerhalb eines anderen sowohl horizontal als auch vertikal zentrieren können.

## Zentrieren einer Box

Um eine Box innerhalb einer anderen Box mit CSS zu zentrieren, müssen Sie die [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften am übergeordneten Container verwenden. Da diese Ausrichtungseigenschaften noch keine Browserunterstützung für Block- und Inline-Layout haben, müssen Sie den übergeordneten Container als [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Container definieren, um die Möglichkeit zur Ausrichtung zu aktivieren.

Im folgenden Beispiel haben wir dem übergeordneten Container `display: flex` gegeben; dann {{cssxref("justify-content")}} auf center gesetzt, um es horizontal auszurichten, und {{cssxref("align-items")}} auf center, um es vertikal auszurichten.

{{EmbedGHLiveSample("css-examples/howto/center.html", '100%', 700)}}

> [!NOTE]
> Sie können diese Technik verwenden, um jegliche Art der Ausrichtung eines oder mehrerer Elemente innerhalb eines anderen zu erreichen. Im obigen Beispiel können Sie versuchen, die Werte zu ändern, um beliebige gültige Werte für {{cssxref("justify-content")}} und {{cssxref("align-items")}} festzulegen.

## Siehe auch

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
