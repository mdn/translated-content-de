---
title: Anleitung zur Zentrierung eines Elements
slug: Learn/CSS/Howto/Center_an_item
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie ein Element sowohl horizontal als auch vertikal innerhalb eines anderen Elements zentrieren können.

## Eine Box zentrieren

Um eine Box innerhalb einer anderen Box mithilfe von CSS zu zentrieren, müssen Sie die [CSS box alignment](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften auf den übergeordneten Container anwenden. Da diese Ausrichtungseigenschaften noch keine Browser-Unterstützung für Block- und Inline-Layouts haben, müssen Sie den übergeordneten Container zu einem [flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [grid](/de/docs/Web/CSS/CSS_grid_layout)-Container machen, um die Möglichkeit der Ausrichtung zu aktivieren.

Im untenstehenden Beispiel haben wir dem übergeordneten Container `display: flex` gegeben; dann {{cssxref("justify-content")}} auf center gesetzt, um es horizontal auszurichten, und {{cssxref("align-items")}} auf center gesetzt, um es vertikal auszurichten.

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
> Sie können diese Technik verwenden, um jede Art von Ausrichtung von einem oder mehreren Elementen innerhalb eines anderen zu bewerkstelligen. Im obigen Beispiel können Sie versuchen, die Werte auf alle gültigen Werte für {{cssxref("justify-content")}} und {{cssxref("align-items")}} zu ändern.

## Siehe auch

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
