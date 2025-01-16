---
title: Box-Ausrichtung in Flexbox
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox
l10n:
  sourceCommit: 243e5eabfe95971f2850fcfdf2a7b2f210c85532
---

{{CSSRef}}

Das [Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. In diesem Leitfaden untersuchen wir, wie die Box-Ausrichtung im Kontext von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) funktioniert. Da dieser Leitfaden darauf abzielt, Dinge zu erläutern, die spezifisch für Flexbox und Box-Ausrichtung sind, sollte er in Verbindung mit dem [Box-Ausrichtungsüberblick](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

## Grundlegendes Beispiel

In diesem Flexbox-Beispiel werden drei Flex-Items auf der Hauptachse unter Verwendung von {{cssxref("justify-content")}} und auf der Querachse unter Verwendung von {{cssxref("align-items")}} ausgerichtet. Das erste Element überschreibt die `align-items`-Werte, die auf die Gruppe gesetzt sind, indem es {{cssxref("align-self")}} auf `center` setzt.

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

## Die Achsen und flex-direction

Flexbox respektiert die Schreibweise des Dokuments. Daher, wenn Sie auf Englisch arbeiten und {{cssxref("justify-content")}} auf `flex-end` setzen, werden die Elemente am Ende des Flex-Containers ausgerichtet. Wenn Sie mit {{cssxref("flex-direction")}} auf `row` arbeiten, erfolgt diese Ausrichtung in der Inline-Richtung.

Sie können jedoch in Flexbox die Hauptachse ändern, indem Sie `flex-direction` auf `column` setzen. In diesem Fall wird `justify-content` die Elemente in Blockrichtung ausrichten. Daher ist es am einfachsten, über die Haupt- und Querachse beim Arbeiten in Flexbox wie folgt nachzudenken:

- Die Hauptachse = Richtung durch `flex-direction` festgelegt = Ausrichtung über `justify-content`
- Die Querachse = verläuft quer zur Hauptachse = Ausrichtung über {{cssxref("align-content")}}, {{cssxref("align-self")}}/{{cssxref("align-items")}}

### Hauptachsen-Ausrichtung

- {{cssxref("justify-content")}}

### Querachsen-Ausrichtung

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### Es gibt kein justify-self in Flexbox

Auf der Hauptachse behandelt Flexbox die Flex-Items als Gruppe. Der erforderliche Platz zur Anordnung der Elemente wird berechnet, und der übriggebliebene Platz steht dann zur Verteilung zur Verfügung. Die `justify-content`-Eigenschaft steuert, wie dieser Platz genutzt wird. Setzen Sie `justify-content: flex-end` und der zusätzliche Platz wird vor den Elementen platziert, `justify-content: space-around` und es wird auf beiden Seiten des Elements in dieser Dimension platziert, etc.

Dies bedeutet, dass eine `justify-self`-Eigenschaft in Flexbox keinen Sinn ergibt, da es immer darum geht, die gesamte Gruppe von Elementen zu bewegen.

Auf der Querachse ergibt `align-self` Sinn, da wir möglicherweise zusätzlichen Platz im Flex-Container in dieser Dimension haben, in dem ein einzelnes Element nach vorne und hinten bewegt werden kann.

## Ausrichtung und auto-Margen

Es gibt einen bestimmten Anwendungsfall in Flexbox, bei dem wir denken könnten, dass eine `justify-self`-Eigenschaft das ist, was wir brauchen, und das ist, wenn wir eine Gruppe von Flex-Items aufteilen möchten, vielleicht um ein geteiltes Navigation-Muster zu erstellen. Für diesen Anwendungsfall können wir eine `auto`-Margin verwenden. Eine auf `auto` gesetzte Margin nimmt allen verfügbaren Platz in ihrer Dimension ein. So funktioniert das Zentrieren eines Blocks mit automatischen Margen. Indem man die linke und rechte Margin auf `auto` setzt, versuchen beide Seiten unseres Blocks, den gesamten verfügbaren Platz einzunehmen und drücken so die Box in die Mitte.

Indem Sie einer Reihe von Flex-Items, die alle auf den Anfang ausgerichtet sind, eine {{cssxref("margin")}} von `auto` auf einem Element setzen, können wir eine geteilte Navigation erstellen. Dies funktioniert gut mit Flexbox und den Ausrichtungseigenschaften. Sobald kein Platz für die automatische Margin verfügbar ist, verhält sich das Element wie alle anderen Flex-Items und schrumpft, um in den Platz zu passen.

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

### Erstellen fester Größenlücken zwischen Elementen

Auf der Hauptachse erstellt die `column-gap`-Eigenschaft feste Lücken zwischen benachbarten Elementen.

Auf der Querachse erstellt die `row-gap`-Eigenschaft Abstände zwischen benachbarten Flex-Linien, daher muss {{cssxref("flex-wrap")}} auch auf `wrap` gesetzt werden, damit dies eine Wirkung hat.

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
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellen-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
- [Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}
