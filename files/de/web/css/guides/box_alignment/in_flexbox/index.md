---
title: Box-Alignment in Flexbox
short-title: In flexbox
slug: Web/CSS/Guides/Box_alignment/In_flexbox
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [Box-Alignment-Modul](/de/docs/Web/CSS/Guides/Box_alignment) erläutert, wie die Ausrichtung in verschiedenen Layoutmethoden funktioniert. In diesem Leitfaden untersuchen wir, wie Box-Alignment im Kontext von [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) funktioniert. Da dieser Leitfaden darauf abzielt, Dinge zu detaillieren, die spezifisch für Flexbox und Box-Alignment sind, sollte er in Verbindung mit dem [Box-Alignment-Übersicht](/de/docs/Web/CSS/Guides/Box_alignment/Overview) Leitfaden gelesen werden, der die gemeinsamen Merkmale von Box-Alignment über Layoutmethoden hinweg beschreibt.

## Grundlegendes Beispiel

In diesem Flexbox-Beispiel werden drei Flex-Elemente auf der Hauptachse mit {{cssxref("justify-content")}} und auf der Querachse mit {{cssxref("align-items")}} ausgerichtet. Das erste Element überschreibt die `align-items`-Werte, die auf die Gruppe gesetzt wurden, indem es {{cssxref("align-self")}} auf `center` setzt.

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

Flexbox respektiert den Schreibmodus des Dokuments. Daher wird, wenn Sie auf Englisch arbeiten und {{cssxref("justify-content")}} auf `flex-end` setzen, dies die Elemente an das Ende des Flexcontainers ausrichten. Wenn Sie mit {{cssxref("flex-direction")}} auf `row` arbeiten, erfolgt diese Ausrichtung in der Inline-Richtung.

In Flexbox können Sie jedoch die Hauptachse ändern, indem Sie `flex-direction` auf `column` setzen. In diesem Fall wird `justify-content` die Elemente in der Blockrichtung ausrichten. Daher ist es am einfachsten, über die Haupt- und Querachse in Flexbox so nachzudenken:

- Die Hauptachse = Richtung, eingestellt durch `flex-direction` = Ausrichtung über `justify-content`
- Die Querachse = verläuft quer zur Hauptachse = Ausrichtung über {{cssxref("align-content")}}, {{cssxref("align-self")}}/{{cssxref("align-items")}}

### Hauptachsen-Ausrichtung

- {{cssxref("justify-content")}}

### Querachsen-Ausrichtung

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### Es gibt kein justify-self in Flexbox

Auf der Hauptachse behandelt Flexbox die Flex-Elemente als Gruppe. Der für das Layout der Elemente benötigte Platz wird berechnet, und der verbleibende Raum steht dann zur Verteilung zur Verfügung. Die Eigenschaft `justify-content` steuert, wie dieser verbleibende Raum genutzt wird. Setzt man `justify-content: flex-end`, wird der zusätzliche Raum vor die Elemente platziert, `justify-content: space-around` und der Raum wird beiderseits des Elements in dieser Dimension platziert, usw.

Dies bedeutet, dass eine `justify-self`-Eigenschaft in Flexbox keinen Sinn ergibt, da wir immer die gesamte Gruppe von Elementen bewegen.

Auf der Querachse ergibt `align-self` Sinn, da wir potenziell zusätzlichen Raum im Flex-Container in dieser Dimension haben, in dem ein einzelnes Element an den Anfang oder das Ende verschoben werden kann.

## Ausrichtung und automatische Ränder

Ein spezifischer Anwendungsfall in Flexbox, bei dem wir denken könnten, dass eine `justify-self`-Eigenschaft notwendig ist, besteht darin, ein Set von Flex-Elementen zu teilen, möglicherweise um ein geteiltes Navigationsmuster zu erstellen. Für diesen Anwendungsfall können wir einen `auto`-Rand verwenden. Ein Rand, der auf `auto` gesetzt ist, absorbiert allen verfügbaren Raum in seiner Dimension. So funktioniert das Zentrieren eines Blocks mit automatischen Rändern. Indem man den linken und rechten Rand auf `auto` setzt, versuchen beide Seiten unseres Blocks, den gesamten verfügbaren Raum einzunehmen und schieben so die Box in die Mitte.

Mit einem {{cssxref("margin")}} von `auto` auf einem Element in einem Satz von Flex-Elementen, die alle auf Start ausgerichtet sind, können wir eine geteilte Navigation erstellen. Dies funktioniert gut mit Flexbox und den Ausrichtungseigenschaften. Sobald kein Platz mehr für den automatischen Rand verfügbar ist, verhält sich das Element wie alle anderen Flex-Elemente und schrumpft, um in den Raum zu passen.

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

### Festlegen von festen Abständen zwischen Elementen

Auf der Hauptachse erzeugt die `column-gap`-Eigenschaft feste Abstände zwischen benachbarten Elementen.

Auf der Querachse erzeugt die `row-gap`-Eigenschaft Zwischenräume zwischen benachbarten Flex-Linien, daher muss {{cssxref("flex-wrap")}} auf `wrap` gesetzt werden, damit dies eine Wirkung erzielt.

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

- [Box-Alignment-Übersicht](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Box-Alignment im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Alignment im Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Box-Alignment für Block-, absolut positionierte und Tabellenlayout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
- [Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}
