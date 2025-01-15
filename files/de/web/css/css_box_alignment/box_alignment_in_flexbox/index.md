---
title: Box-Ausrichtung in Flexbox
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox
l10n:
  sourceCommit: 49106bd93693d889ff792dada676bdf62350d422
---

{{CSSRef}}

Das [Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layoutmethoden funktioniert. In diesem Leitfaden untersuchen wir, wie die Box-Ausrichtung im Kontext von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) funktioniert. Da dieser Leitfaden darauf abzielt, Themen zu behandeln, die für Flexbox und Box-Ausrichtung spezifisch sind, sollte er in Verbindung mit dem [Box-Ausrichtungsüberblick](/de/docs/Web/CSS/CSS_box_alignment/box_alignment) gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layoutmethoden hinweg detailliert beschreibt.

## Einfaches Beispiel

In diesem Flexbox-Beispiel sind drei Flex-Elemente auf der Hauptachse mit {{cssxref("justify-content")}} und auf der Querachse mit {{cssxref("align-items")}} ausgerichtet. Das erste Element überschreibt die `align-items`-Werte, die auf die Gruppe gesetzt sind, indem es {{cssxref("align-self")}} auf `center` setzt.

```html live-sample___flex-align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css hidden live-sample___flex-align-items
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
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

## Die Achsen und Flex-Richtung

Flexbox respektiert den Schreibmodus des Dokuments. Wenn Sie also in Englisch arbeiten und {{cssxref("justify-content")}} auf `flex-end` setzen, werden die Elemente am Ende des Flex-Containers ausgerichtet. Wenn Sie mit {{cssxref("flex-direction")}} arbeiten, das auf `row` gesetzt ist, wird diese Ausrichtung in der Inline-Richtung sein.

In Flexbox können Sie jedoch die Hauptachse ändern, indem Sie `flex-direction` auf `column` setzen. In diesem Fall wird `justify-content` die Elemente in Blockrichtung ausrichten. Daher ist es am einfachsten, über die Haupt- und Querachse bei der Arbeit in Flexbox so nachzudenken:

- Die Hauptachse = Richtung, die durch `flex-direction` festgelegt wird = Ausrichtung über `justify-content`
- Die Querachse = verläuft quer zur Hauptachse = Ausrichtung über {{cssxref("align-content")}}, {{cssxref("align-self")}}/{{cssxref("align-items")}}

### Hauptachsen-Ausrichtung

- {{cssxref("justify-content")}}

### Querachsen-Ausrichtung

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### Es gibt kein justify-self in Flexbox

Auf der Hauptachse behandelt Flexbox die Flex-Elemente als Gruppe. Der Platzbedarf zur Anordnung der Elemente wird berechnet, und der verbleibende Platz steht dann zur Verteilung zur Verfügung. Die `justify-content`-Eigenschaft steuert, wie dieser verbleibende Platz genutzt wird. Setzen Sie `justify-content: flex-end` und der zusätzliche Platz wird vor den Elementen platziert, `justify-content: space-around` und er wird auf beiden Seiten des Elements in dieser Dimension platziert, etc.

Dies bedeutet, dass eine `justify-self`-Eigenschaft in Flexbox keinen Sinn macht, da wir immer mit der Bewegung der gesamten Gruppe von Elementen arbeiten.

Auf der Querachse ergibt `align-self` Sinn, da wir potenziell zusätzlichen Platz im Flex-Container in dieser Dimension haben, in dem ein einzelnes Element zum Anfang und Ende bewegt werden kann.

## Ausrichtung und automatische Ränder

Es gibt einen spezifischen Anwendungsfall in Flexbox, in dem wir denken könnten, dass eine `justify-self`-Eigenschaft das ist, was wir brauchen, und das ist, wenn wir eine Gruppe von Flex-Elementen aufteilen möchten, vielleicht um ein geteiltes Navigationsmuster zu erstellen. Für diesen Anwendungsfall können wir einen `auto`-Rand verwenden. Ein Rand, der auf `auto` gesetzt ist, wird den gesamten verfügbaren Platz in seiner Dimension absorbieren. Dies ist, wie das Zentrieren eines Blocks mit automatischen Rändern funktioniert. Indem der linke und rechte Rand auf `auto` gesetzt werden, versuchen beide Seiten unseres Blocks, den gesamten verfügbaren Platz einzunehmen, und schieben so den Block in die Mitte.

Durch Setzen eines {{cssxref("margin")}} von `auto` auf ein Element in einer Gruppe von Flex-Elementen, die alle am Anfang ausgerichtet sind, können wir eine geteilte Navigation erstellen. Dies funktioniert gut mit Flexbox und den Ausrichtungseigenschaften. Sobald kein Platz für den automatischen Rand verfügbar ist, verhält sich das Element genauso wie alle anderen Flex-Elemente und versucht, in den verfügbaren Platz zu passen.

```html live-sample___auto-margins
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div class="push">Four</div>
  <div>Five</div>
</div>
```

```css hidden live-sample___auto-margins
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
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

Auf der Hauptachse erzeugt die `column-gap`-Eigenschaft feste Lücken zwischen benachbarten Elementen.

Auf der Querachse erzeugt die `row-gap`-Eigenschaft Abstände zwischen benachbarten Flex-Linien, daher muss {{cssxref("flex-wrap")}} auch auf `wrap` gesetzt sein, damit dies eine Wirkung hat.

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

```css hidden live-sample___gap
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
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
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Mehrspaltenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positionierte und Tabellenlayouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
- [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}
