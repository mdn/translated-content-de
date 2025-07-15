---
title: Box-Ausrichtung in Flexbox
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie Ausrichtung in verschiedenen Layoutmethoden funktioniert. In diesem Leitfaden untersuchen wir, wie die Box-Ausrichtung im Kontext von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) funktioniert. Da dieser Leitfaden darauf abzielt, die spezifischen Aspekte von Flexbox und der Box-Ausrichtung zu detaillieren, sollte er in Verbindung mit dem [Box-Ausrichtungsüberblick](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layoutmethoden hinweg beschreibt.

## Einfaches Beispiel

In diesem Flexbox-Beispiel werden drei Flex-Elemente auf der Hauptachse mithilfe von {{cssxref("justify-content")}} und auf der Querachse mit {{cssxref("align-items")}} ausgerichtet. Das erste Element überschreibt die `align-items`-Werte, die auf die Gruppe festgelegt wurden, indem {{cssxref("align-self")}} auf `center` gesetzt wird.

```css hidden live-sample___gap live-sample___flex-align-items live-sample___auto-margins
body {
  font-family: sans-serif;
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```html live-sample___flex-align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css live-sample___flex-align-items
.box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("flex-align-items")}}

## Die Achsen und flex-direction

Flexbox respektiert den Schreibmodus des Dokuments. Wenn Sie also in Englisch arbeiten und {{cssxref("justify-content")}} auf `flex-end` setzen, werden die Elemente am Ende des Flex-Containers ausgerichtet. Wenn Sie mit {{cssxref("flex-direction")}} im Modus `row` arbeiten, erfolgt diese Ausrichtung in der Inline-Richtung.

In Flexbox können Sie jedoch die Hauptachse ändern, indem Sie `flex-direction` auf `column` setzen. In diesem Fall wird `justify-content` die Elemente in Blockrichtung ausrichten. Daher ist es am einfachsten, über die Haupt- und Querachse in Flexbox wie folgt nachzudenken:

- Die Hauptachse = Richtung festgelegt durch `flex-direction` = Ausrichtung durch `justify-content`
- Die Querachse = verläuft quer zur Hauptachse = Ausrichtung durch {{cssxref("align-content")}}, {{cssxref("align-self")}}/{{cssxref("align-items")}}

### Hauptachsen-Ausrichtung

- {{cssxref("justify-content")}}

### Querachsen-Ausrichtung

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### Es gibt kein justify-self in Flexbox

Auf der Hauptachse behandelt Flexbox die Flex-Elemente als Gruppe. Der für das Layout der Elemente erforderliche Platz wird berechnet, und der übrige Platz steht dann zur Verteilung zur Verfügung. Die Eigenschaft `justify-content` steuert, wie dieser übrige Platz verwendet wird. Wenn Sie `justify-content: flex-end` setzen, wird der zusätzliche Platz vor den Elementen platziert, `justify-content: space-around` verteilt ihn auf beiden Seiten des Elements in dieser Dimension usw.

Das bedeutet, dass eine `justify-self`-Eigenschaft in Flexbox keinen Sinn macht, da wir immer mit der Bewegung der gesamten Gruppe von Elementen arbeiten.

Auf der Querachse macht `align-self` Sinn, da wir möglicherweise zusätzlichen Platz im Flex-Container in dieser Dimension haben, in der ein einzelnes Element zum Anfang oder Ende verschoben werden kann.

## Ausrichtung und automatische Margen

Es gibt einen speziellen Anwendungsfall in Flexbox, bei dem wir denken könnten, dass eine `justify-self`-Eigenschaft das ist, was wir brauchen, und zwar, wenn wir eine Gruppe von Flex-Elementen aufteilen wollen, möglicherweise um ein aufgeteiltes Navigationsmuster zu erstellen. Für diesen Anwendungsfall können wir eine `auto`-Margin verwenden. Eine auf `auto` gesetzte Margin wird allen verfügbaren Platz in ihrer Dimension aufnehmen. So funktioniert das Zentrieren eines Blocks mit automatischen Margen. Indem man die linke und rechte Margin auf `auto` setzt, versuchen beide Seiten unseres Blocks, den gesamten verfügbaren Platz einzunehmen, und drücken so das Kästchen in die Mitte.

Indem man einem Element in einem Satz von Flex-Elementen, die alle auf den Start ausgerichtet sind, eine {{cssxref("margin")}} von `auto` zuweist, kann man eine geteilte Navigation erstellen. Dies funktioniert gut mit Flexbox und den Ausrichtungseigenschaften. Sobald kein Platz mehr für die autogene Margin verfügbar ist, verhält sich das Element wie alle anderen Flex-Elemente und schrumpft, um zu versuchen, in den Raum zu passen.

```html live-sample___auto-margins
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div class="push">Four</div>
  <div>Five</div>
</div>
```

```css live-sample___auto-margins
.box {
  display: flex;
  border: 2px dotted rgb(96 139 168);
}
.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("auto-margins")}}

## Die `gap`-Eigenschaften

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Feste Lücken zwischen Elementen erstellen

Auf der Hauptachse erstellt die `column-gap`-Eigenschaft feste Lücken zwischen benachbarten Elementen.

Auf der Querachse erstellt die `row-gap`-Eigenschaft Abstände zwischen benachbarten Flex-Linien, weshalb {{cssxref("flex-wrap")}} auch auf `wrap` gesetzt werden muss, damit dies eine Wirkung zeigt.

```html live-sample___gap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css live-sample___gap
.box {
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 2em;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  flex: 1;
}
```

{{EmbedLiveSample("gap")}}

## Siehe auch

- [Box-Ausrichtungsüberblick](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung im CSS-Gitter-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im mehrspaltigen Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
- [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}
