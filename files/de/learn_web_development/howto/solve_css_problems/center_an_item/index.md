---
title: Anleitung zur Zentrierung eines Elements
short-title: Ein Element zentrieren
slug: Learn_web_development/Howto/Solve_CSS_problems/Center_an_item
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

In diesem Leitfaden erfahren Sie, wie Sie ein Element sowohl horizontal als auch vertikal innerhalb eines anderen Elements zentrieren können.

## Ein Kästchen zentrieren

Um ein Kästchen innerhalb eines anderen mit CSS zu zentrieren, müssen Sie die [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften auf dem übergeordneten Container verwenden. Da diese Ausrichtungseigenschaften noch keine Unterstützung in Browsern für Block- und Inline-Layouts haben, müssen Sie den übergeordneten Container zu einem [flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [grid](/de/docs/Web/CSS/CSS_grid_layout)-Container machen, um die Möglichkeit der Ausrichtung zu aktivieren.

Im folgenden Beispiel haben wir dem übergeordneten Container `display: flex` zugewiesen; dann `{{cssxref("justify-content")}}` auf center gesetzt, um es horizontal auszurichten, und `{{cssxref("align-items")}}` auf center gesetzt, um es vertikal auszurichten.

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
> Sie können diese Technik verwenden, um jede Art der Ausrichtung eines oder mehrerer Elemente innerhalb eines anderen durchzuführen. Im obigen Beispiel können Sie versuchen, die Werte auf beliebige gültige Werte für `{{cssxref("justify-content")}}` und `{{cssxref("align-items")}}` zu ändern.

## Siehe auch

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
