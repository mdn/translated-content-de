---
title: Anleitung zum Zentrieren eines Elements
short-title: Ein Element zentrieren
slug: Learn_web_development/Howto/Solve_CSS_problems/Center_an_item
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

In diesem Leitfaden erfahren Sie, wie Sie ein Element sowohl horizontal als auch vertikal innerhalb eines anderen Elements zentrieren können.

## Eine Box zentrieren

Um eine Box innerhalb einer anderen Box mit CSS zu zentrieren, müssen Sie die [CSS Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften auf dem übergeordneten Container verwenden. Da diese Ausrichtungseigenschaften noch keine Browser-Unterstützung für Block- und Inline-Layouts haben, müssen Sie den übergeordneten Container zu einem [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Container machen, um die Möglichkeit der Ausrichtung zu aktivieren.

Im folgenden Beispiel haben wir dem übergeordneten Container `display: flex` gegeben; dann {{cssxref("justify-content")}} auf "center" gesetzt, um ihn horizontal auszurichten, und {{cssxref("align-items")}} auf "center" gesetzt, um ihn vertikal auszurichten.

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
  color: white;
}
```

{{EmbedLiveSample("center", "", "220px")}}

> [!NOTE]
> Sie können diese Technik verwenden, um jegliche Art von Ausrichtung eines oder mehrerer Elemente innerhalb eines anderen vorzunehmen. Im obigen Beispiel können Sie versuchen, die Werte auf beliebige gültige Werte für {{cssxref("justify-content")}} und {{cssxref("align-items")}} zu ändern.

## Siehe auch

- [Box-Alignment in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Alignment im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
