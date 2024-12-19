---
title: Anleitung zum Zentrieren eines Elements
slug: Learn_web_development/Howto/Solve_CSS_problems/Center_an_item
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie ein Element sowohl horizontal als auch vertikal innerhalb eines anderen Elements zentrieren können.

## Ein Feld zentrieren

Um ein Feld innerhalb eines anderen mit CSS zu zentrieren, müssen Sie die [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften auf den übergeordneten Container anwenden. Da diese Ausrichtungseigenschaften noch keine Browser-Unterstützung für Block- und Inline-Layout haben, müssen Sie den übergeordneten Container zu einem [flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [grid](/de/docs/Web/CSS/CSS_grid_layout)-Container machen, um die Möglichkeit zur Verwendung von Ausrichtungen zu aktivieren.

Im folgenden Beispiel haben wir dem übergeordneten Container `display: flex` zugewiesen; dann wurde {{cssxref("justify-content")}} auf center gesetzt, um es horizontal auszurichten, und {{cssxref("align-items")}} auf center gesetzt, um es vertikal auszurichten.

```html live-sample___center
<div class="wrapper">
  <div class="box">center me!</div>
</div>
```

```css live-sample___center
.wrapper {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  background-color: rgb(69 164 181);
  border-radius: 5px;
  padding: 10px;
  color: #fff;
}
```

{{EmbedLiveSample("center", "", "220px")}}

> [!NOTE]
> Diese Technik kann verwendet werden, um eine beliebige Art der Ausrichtung von einem oder mehreren Elementen innerhalb eines anderen durchzuführen. In dem obigen Beispiel können Sie die Werte in gültige Werte für {{cssxref("justify-content")}} und {{cssxref("align-items")}} ändern.

## Siehe auch

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Rasterlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
