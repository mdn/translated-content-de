---
title: Box-Ausrichtung in Flexbox
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox
l10n:
  sourceCommit: baecb2c4e933300dd39baf7d13d4d7b7f7d5f814
---

{{CSSRef}}

Das [Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie Ausrichtung in verschiedenen Layout-Methoden funktioniert. In diesem Leitfaden untersuchen wir, wie die Box-Ausrichtung im Kontext von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) funktioniert. Da dieser Leitfaden darauf abzielt, Dinge zu erklären, die spezifisch für Flexbox und Box-Ausrichtung sind, sollte er in Verbindung mit dem [Box-Ausrichtungsüberblick](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

## Einfaches Beispiel

In diesem Flexbox-Beispiel werden drei Flex-Elemente auf der Hauptachse mit {{cssxref("justify-content")}} und auf der Querachse mit {{cssxref("align-items")}} ausgerichtet. Das erste Element überschreibt die `align-items`-Werte, die auf die Gruppe angewendet wurden, indem es {{cssxref("align-self")}} auf `center` setzt.

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

## Die Achsen und die Flex-Direction

Flexbox respektiert den Schreibmodus des Dokuments. Wenn Sie also in Englisch arbeiten und {{cssxref("justify-content")}} auf `flex-end` setzen, werden die Elemente am Ende des Flex-Containers ausgerichtet. Wenn Sie mit {{cssxref("flex-direction")}} auf `row` eingestellt arbeiten, erfolgt diese Ausrichtung in der Inline-Richtung.

Jedoch können Sie in Flexbox die Hauptachse ändern, indem Sie `flex-direction` auf `column` setzen. In diesem Fall wird `justify-content` die Elemente in der Blockrichtung ausrichten. Daher ist es am einfachsten, über die Haupt- und Querachse in Flexbox wie folgt nachzudenken:

- Die Hauptachse = Richtung, die durch `flex-direction` gesetzt wird = Ausrichtung über `justify-content`
- Die Querachse = verläuft über die Hauptachse = Ausrichtung über {{cssxref("align-content")}}, {{cssxref("align-self")}}/{{cssxref("align-items")}}

### Ausrichtung der Hauptachse

- {{cssxref("justify-content")}}

### Ausrichtung der Querachse

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### Es gibt kein justify-self in Flexbox

Auf der Hauptachse behandelt Flexbox die Flex-Elemente als eine Gruppe. Der Platzbedarf für die Anordnung der Elemente wird berechnet, und der verbleibende Raum steht dann zur Verteilung zur Verfügung. Die Eigenschaft `justify-content` steuert, wie dieser verbleibende Raum genutzt wird. Setzen Sie `justify-content: flex-end` und der zusätzliche Raum wird vor den Elementen platziert, `justify-content: space-around` und der Raum wird beiderseits des Elements in dieser Dimension platziert, etc.

Das bedeutet, dass eine `justify-self` Eigenschaft in Flexbox keinen Sinn macht, da wir es immer mit der Bewegung der gesamten Gruppe von Elementen zu tun haben.

Auf der Querachse macht `align-self` Sinn, da wir möglicherweise zusätzlichen Platz im Flex-Container in dieser Dimension haben, in dem ein einzelnes Element zum Start und Ende bewegt werden kann.

## Ausrichtung und automatische Abstände

Es gibt einen spezifischen Anwendungsfall in Flexbox, bei dem wir möglicherweise denken, dass eine `justify-self` Eigenschaft das ist, was wir brauchen, und zwar wenn wir eine Reihe von Flex-Elementen aufteilen wollen, vielleicht um ein Aufteilungsmuster für die Navigation zu erstellen. Für diesen Anwendungsfall können wir einen `auto`-Rand verwenden. Ein auf `auto` gesetzter Rand wird den gesamten verfügbaren Raum in seiner Dimension auffangen. So funktioniert das Zentrieren eines Blocks mit automatischen Rändern. Indem der linke und rechte Rand auf `auto` gesetzt werden, versuchen beide Seiten des Blocks, den gesamten verfügbaren Raum einzunehmen und schieben so die Box in die Mitte.

Indem wir einen {{cssxref("margin")}} von `auto` auf ein Element in einer Gruppe von Flex-Elementen setzen, die alle zum Start ausgerichtet sind, können wir eine geteilte Navigation erstellen. Dies funktioniert gut mit Flexbox und den Ausrichtungseigenschaften. Sobald kein Platz mehr für den automatischen Rand verfügbar ist, verhält sich das Element wie alle anderen Flex-Elemente und schrumpft, um zu versuchen, in den Raum zu passen.

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

## Die `gap` Eigenschaften

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Erstellen von festen Abständen zwischen Elementen

Auf der Hauptachse erstellt die Eigenschaft `column-gap` feste Abstände zwischen benachbarten Elementen.

Auf der Querachse erstellt die Eigenschaft `row-gap` Abstände zwischen benachbarten Flex-Linien, daher muss {{cssxref("flex-wrap")}} auch auf `wrap` gesetzt werden, damit dies Wirkung zeigt.

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
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung in Mehrspalten-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
- [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}
