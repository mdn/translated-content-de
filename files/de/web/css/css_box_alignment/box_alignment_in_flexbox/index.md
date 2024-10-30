---
title: Box-Ausrichtung in Flexbox
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox
l10n:
  sourceCommit: f11e9200b6f9d5c191051eb7ccbe7ebd44966e43
---

{{CSSRef}}

Die [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Spezifikation beschreibt, wie die Ausrichtung in verschiedenen Layoutmethoden funktioniert; auf dieser Seite untersuchen wir, wie die Box-Ausrichtung im Kontext von Flexbox funktioniert. Da diese Seite darauf abzielt, Dinge zu beschreibt, die spezifisch für Flexbox und Box-Ausrichtung sind, sollte sie in Verbindung mit der Hauptseite zur [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die gemeinsamen Merkmale der Box-Ausrichtung über Layoutmethoden hinweg beschreibt.

## Einfaches Beispiel

In diesem Beispiel sind drei Flex-Elemente auf der Hauptachse mit {{cssxref("justify-content")}} und auf der Querachse mit {{cssxref("align-items")}} ausgerichtet. Das erste Element überschreibt die `align-items`-Werte, die auf die Gruppe gesetzt sind, indem es {{cssxref("align-self")}} auf `center` setzt.

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

## Die Achsen und `flex-direction`

Flexbox respektiert den Schreibmodus des Dokuments, daher wird beispielsweise, wenn Sie in Englisch arbeiten und {{cssxref("justify-content")}} auf `flex-end` setzen, dies die Elemente am Ende des Flex-Containers ausrichten. Wenn Sie mit {{cssxref("flex-direction")}} auf `row` eingestellt arbeiten, erfolgt diese Ausrichtung in Richtung der Inline-Achse.

In Flexbox können Sie jedoch die Hauptachse ändern, indem Sie `flex-direction` auf `column` setzen. In diesem Fall wird `justify-content` die Elemente in Blockrichtung ausrichten. Daher ist es am einfachsten, die Haupt- und Querachse bei der Arbeit in Flexbox so zu betrachten:

- Die Hauptachse = Richtung, die durch `flex-direction` festgelegt ist = Ausrichtung über `justify-content`
- Die Querachse = verläuft über die Hauptachse = Ausrichtung über `align-content`, `align-self`/`align-items`

### Hauptachsen-Ausrichtung

- {{cssxref("justify-content")}}

### Querachsen-Ausrichtung

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### Es gibt kein `justify-self` in Flexbox

Auf der Hauptachse behandelt Flexbox unsere Inhalte als Gruppe. Der benötigte Raum zum Anordnen der Elemente wird berechnet, und der verbleibende Platz steht dann zur Verteilung zur Verfügung. Die Eigenschaft `justify-content` steuert, wie dieser verbleibende Raum genutzt wird. Setzen Sie `justify-content: flex-end`, und der zusätzliche Raum wird vor den Elementen platziert; bei `justify-content: space-around` wird er auf beiden Seiten des Elements in dieser Dimension platziert usw.

Das bedeutet, dass eine `justify-self`-Eigenschaft in Flexbox keinen Sinn ergibt, da wir immer mit der Verschiebung der gesamten Gruppe von Elementen arbeiten.

Auf der Querachse macht `align-self` Sinn, da wir potenziell zusätzlichen Raum im Flex-Container in dieser Dimension haben, in dem ein einzelnes Element zum Anfang und Ende verschoben werden kann.

## Ausrichtung und automatische Abstände

Es gibt einen spezifischen Anwendungsfall in Flexbox, bei dem wir vielleicht denken, dass wir eine `justify-self`-Eigenschaft benötigen, und das ist, wenn wir eine Gruppe von Flex-Elementen aufteilen möchten, vielleicht um ein geteiltes Navigationsmuster zu erstellen. Für diesen Anwendungsfall können wir einen `auto`-Rand verwenden. Ein auf `auto` gesetzter Rand nimmt den gesamten verfügbaren Raum in seiner Dimension auf. So funktioniert das Zentrieren eines Blocks mit automatischen Rändern. Indem wir den linken und rechten Rand auf `auto` setzen, versuchen beide Seiten unseres Blocks, den gesamten verfügbaren Raum einzunehmen und drücken so die Box in die Mitte.

Durch Setzen eines {{cssxref("margin")}} von `auto` auf ein Element in einer Gruppe von Flex-Elementen, die alle am Anfang ausgerichtet sind, können wir eine geteilte Navigation erstellen. Dies funktioniert gut mit Flexbox und den Ausrichtungseigenschaften. Sobald kein Platz mehr für den automatischen Rand verfügbar ist, verhält sich das Element genauso wie alle anderen Flex-Elemente und schrumpft, um in den Raum zu passen.

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

### Erzeugung fester Abstände zwischen Elementen

Auf der Hauptachse erzeugt die Eigenschaft `column-gap` feste Abstände zwischen benachbarten Elementen.

Auf der Querachse erzeugt die Eigenschaft `row-gap` Abstände zwischen benachbarten Flex-Linien, daher muss `flex-wrap` ebenfalls auf `wrap` gesetzt sein, damit dies eine Wirkung hat.

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

## Referenz

### CSS-Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("align-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Glossareinträge

- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}

## Leitfäden

- [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
