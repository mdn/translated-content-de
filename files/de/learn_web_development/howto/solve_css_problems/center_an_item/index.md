---
title: Anleitung zur Zentrierung eines Elements
short-title: Ein Element zentrieren
slug: Learn_web_development/Howto/Solve_CSS_problems/Center_an_item
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Leitfaden erfahren Sie, wie Sie ein Element innerhalb eines anderen Elements sowohl horizontal als auch vertikal zentrieren können.

## Eine Box zentrieren

Um eine Box innerhalb einer anderen Box mit CSS zu zentrieren, müssen Sie die [CSS-Box-Ausrichtungs-](/de/docs/Web/CSS/Guides/Box_alignment) Eigenschaften auf den übergeordneten Container anwenden. Da diese Ausrichtungseigenschaften noch keine Browser-Kompatibilität für Block- und Inline-Layouts haben, müssen Sie den übergeordneten Container zu einem [flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) oder [grid-](/de/docs/Web/CSS/Guides/Grid_layout) Container machen, um die Möglichkeit zur Verwendung der Ausrichtung zu aktivieren.

Im folgenden Beispiel haben wir dem übergeordneten Container `display: flex` gegeben; dann haben wir {{cssxref("justify-content")}} auf center gesetzt, um es horizontal auszurichten, und {{cssxref("align-items")}} auf center, um es vertikal auszurichten.

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
> Diese Technik können Sie verwenden, um jegliche Art von Ausrichtung eines oder mehrerer Elemente innerhalb eines anderen vorzunehmen. Im obigen Beispiel können Sie versuchen, die Werte zu ändern, um beliebige gültige Werte für {{cssxref("justify-content")}} und {{cssxref("align-items")}} zu setzen.

## Siehe auch

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
