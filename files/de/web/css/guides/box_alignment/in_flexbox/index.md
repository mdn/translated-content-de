---
title: Box-Alignment in Flexbox
short-title: In Flexbox
slug: Web/CSS/Guides/Box_alignment/In_flexbox
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Das [Box-Alignment-Modul](/de/docs/Web/CSS/Guides/Box_alignment) beschreibt, wie das Ausrichten in verschiedenen Layout-Methoden funktioniert. In diesem Leitfaden untersuchen wir, wie Box-Alignment im Kontext von [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) funktioniert. Da dieser Leitfaden darauf abzielt, die spezifischen Aspekte von Flexbox und Box-Alignment zu erläutern, sollte er in Verbindung mit dem [Überblick über Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment/Overview) gelesen werden, der die gemeinsamen Merkmale des Box-Alignments über verschiedene Layout-Methoden hinweg detailliert beschreibt.

## Grundlegendes Beispiel

In diesem Flexbox-Beispiel sind drei Flex-Elemente auf der Hauptachse mit {{cssxref("justify-content")}} und auf der Querachse mit {{cssxref("align-items")}} ausgerichtet. Das erste Element überschreibt die für die Gruppe festgelegten `align-items`-Werte, indem es {{cssxref("align-self")}} auf `center` setzt.

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

## Die Achsen und Flex-Richtung

Flexbox respektiert den Schreibmodus des Dokuments, daher werden, wenn Sie in Englisch arbeiten und {{cssxref("justify-content")}} auf `flex-end` setzen, die Elemente am Ende des Flex-Containers ausgerichtet. Wenn Sie mit {{cssxref("flex-direction")}} auf `row` arbeiten, erfolgt diese Ausrichtung in der Inline-Richtung.

In Flexbox können Sie jedoch die Hauptachse ändern, indem Sie die `flex-direction` auf `column` setzen. In diesem Fall richtet `justify-content` die Elemente in der Blockrichtung aus. Daher ist es am einfachsten, die Haupt- und Querachse beim Arbeiten mit Flexbox folgendermaßen zu betrachten:

- Die Hauptachse = Richtung, die durch `flex-direction` festgelegt wird = Ausrichtung über `justify-content`
- Die Querachse = verläuft quer zur Hauptachse = Ausrichtung über {{cssxref("align-content")}}, {{cssxref("align-self")}}/{{cssxref("align-items")}}

### Ausrichtung der Hauptachse

- {{cssxref("justify-content")}}

### Ausrichtung der Querachse

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### Es gibt kein justify-self in Flexbox

Auf der Hauptachse behandelt Flexbox die Flex-Elemente als Gruppe. Der Platzbedarf für das Layout der Elemente wird berechnet, und der verbleibende Platz steht dann zur Verteilung zur Verfügung. Die Eigenschaft `justify-content` steuert, wie dieser verbleibende Raum genutzt wird. Setzen Sie `justify-content: flex-end` und der zusätzliche Raum wird vor den Elementen platziert, `justify-content: space-around` und er wird auf beiden Seiten des Elements in dieser Dimension platziert, usw.

Dies bedeutet, dass eine `justify-self`-Eigenschaft in Flexbox keinen Sinn macht, da wir immer die gesamte Gruppe von Elementen verschieben.

Auf der Querachse macht `align-self` Sinn, da möglicherweise zusätzlicher Platz im Flex-Container in dieser Dimension vorhanden ist, in dem ein einzelnes Element zum Anfang und Ende bewegt werden kann.

## Ausrichtung und automatische Ränder

Es gibt einen speziellen Anwendungsfall in Flexbox, bei dem wir denken könnten, dass eine `justify-self`-Eigenschaft das ist, was wir brauchen, nämlich wenn wir eine Reihe von Flex-Elementen aufteilen wollen, um möglicherweise ein geteiltes Navigationsmuster zu erstellen. Für diesen Anwendungsfall können wir einen `auto`-Rand verwenden. Ein auf `auto` gesetzter Rand absorbiert den gesamten verfügbaren Platz in seiner Dimension. So funktioniert das Zentrieren eines Blocks mit automatischen Rändern. Indem Sie den linken und rechten Rand auf `auto` setzen, versuchen beide Seiten unseres Blocks, den gesamten verfügbaren Platz einzunehmen, und drücken dadurch die Box in die Mitte.

Indem auf ein Element in einer Gruppe von Flex-Elementen, die alle auf Anfang ausgerichtet sind, ein `auto`-Rand gesetzt wird, können wir eine geteilte Navigation erstellen. Dies funktioniert gut mit Flexbox und den Ausrichtungseigenschaften. Sobald kein Platz mehr für den automatischen Rand zur Verfügung steht, verhält sich das Element wie alle anderen Flex-Elemente und schrumpft, um in den Raum zu passen.

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

### Erstellen von festen Abständen zwischen Elementen

Auf der Hauptachse erzeugt die Eigenschaft `column-gap` feste Abstände zwischen benachbarten Elementen.

Auf der Querachse erzeugt die Eigenschaft `row-gap` Abstände zwischen benachbarten Flex-Linien, daher muss {{cssxref("flex-wrap")}} auch auf `wrap` gesetzt werden, damit dies eine Wirkung hat.

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

- [CSS Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [Überblick über Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Box-Alignment im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Alignment im Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Box-Alignment für Block-, absolut positionierte und Tabellenlayouts](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
- [Ausrichten von Elementen im Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}
