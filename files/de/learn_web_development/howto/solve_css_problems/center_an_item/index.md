---
title: Anleitung zum Zentrieren eines Elements
slug: Learn_web_development/Howto/Solve_CSS_problems/Center_an_item
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

In diesem Leitfaden erfahren Sie, wie Sie ein Element in einem anderen Element zentrieren, sowohl horizontal als auch vertikal.

## Eine Box zentrieren

Um eine Box innerhalb einer anderen Box mithilfe von CSS zu zentrieren, müssen Sie [CSS-Boxausrichtungs](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften auf dem übergeordneten Container verwenden. Da diese Ausrichtungseigenschaften noch keine Browserunterstützung für Block- und Inline-Layout haben, müssen Sie den übergeordneten Container zu einem [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Container machen, um die Möglichkeit der Ausrichtung nutzen zu können.

Im folgenden Beispiel haben wir dem übergeordneten Container `display: flex` gegeben; dann {{cssxref("justify-content")}} auf center gesetzt, um es horizontal auszurichten, und {{cssxref("align-items")}} auf center, um es vertikal auszurichten.

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
> Sie können diese Technik verwenden, um irgendeine Art von Ausrichtung von einem oder mehreren Elementen innerhalb eines anderen vorzunehmen. Im obigen Beispiel können Sie die Werte auf beliebige gültige Werte für {{cssxref("justify-content")}} und {{cssxref("align-items")}} ändern.

## Siehe auch

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
