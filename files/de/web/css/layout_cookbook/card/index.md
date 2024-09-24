---
title: Karte
slug: Web/CSS/Layout_cookbook/Card
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Dieses Muster ist eine Liste von "Karten"-Komponenten mit optionalen Fußzeilen. Eine Karte enthält einen Titel, ein Bild, eine Beschreibung oder andere Inhalte und eine Quellenangabe oder Fußzeile. Karten werden in der Regel innerhalb einer Gruppe oder Sammlung angezeigt.

![Drei Kartenkomponenten in einer Reihe](cards.png)

## Anforderungen

Erstellen Sie eine Gruppe von Karten, wobei jede Kartenkomponente eine Überschrift, ein Bild, Inhalt und optional eine Fußzeile enthält.

Jede Karte in der Gruppe sollte die gleiche Höhe haben. Die optionale Kartenfußzeile sollte am unteren Rand der Karte haften.

Die Karten in der Gruppe sollten sich in zwei Dimensionen ausrichten – sowohl vertikal als auch horizontal.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/card.html", '100%', 1720)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/card--download.html)

## Entscheidungen getroffen

Jede Karte wird mit dem [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) ausgelegt, obwohl das Layout eindimensional ist. Dies ermöglicht die Verwendung von Inhaltsgrößen für die Rasterspuren. Um einspaltiges Raster einzurichten, können wir Folgendes verwenden:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}} wandelt das Element in ein Raster-Container um. Die drei Werte der {{cssxref("grid-template-rows")}}-Eigenschaft teilen das Raster in mindestens drei Zeilen, indem sie die Höhe der ersten drei Kinder der Karte definieren.

Jede `card` enthält ein {{HTMLElement("header")}}, ein {{HTMLElement("img")}} und ein {{HTMLElement("div")}}, in dieser Reihenfolge, wobei einige auch ein {{HTMLElement("footer")}} enthalten.

Die Überschriftenzeile oder Spur wird auf {{cssxref("max-content")}} gesetzt, was verhindert, dass sie sich dehnt. Die Bildspur ist auf 200 Pixel Höhe gesetzt. Die dritte Spur, in der sich der Inhalt befindet, ist auf `1fr` gesetzt. Das bedeutet, dass sie jeden zusätzlichen Raum ausfüllt.

Alle Kinder über die drei mit explizit definierten Größen hinaus erzeugen Zeilen im impliziten Raster, das den hinzugefügten Inhalt aufnimmt. Diese sind standardmäßig automatisch dimensioniert. Wenn eine Karte eine Fußzeile enthält, wird sie automatisch dimensioniert. Die Fußzeile, falls vorhanden, haftet am Boden des Rasters. Die Fußzeile wird automatisch dimensioniert, um ihren Inhalt aufzunehmen; der Inhalts-`<div>` dehnt sich dann aus, um zusätzlichen Raum einzunehmen.

Das folgende Regelwerk erstellt das Raster der Karten:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

Die {{cssxref("grid-template-columns")}}-Eigenschaft definiert die Breiten der Rasterspalten. In diesem Fall setzen wir das Raster auf auto-fill mit wiederholten Spalten, die mindestens `230px` sind, aber wachsen dürfen, um den verfügbaren Raum auszufüllen. Die {{cssxref("gap")}}-Eigenschaft setzt einen Abstand von `20px` zwischen angrenzenden Zeilen und Spalten.

> [!NOTE]
> Die verschiedenen Elemente in separaten Karten stimmen nicht miteinander überein, da jede Karte ein unabhängiges Raster ist. Die Ausrichtung der Komponenten in jeder Karte mit den gleichen Komponenten in benachbarten Karten kann mit [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) erfolgen.

## Alternative Methoden

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) kann auch verwendet werden, um jede Karte zu layouten. Mit Flexbox werden die Dimensionen der Kartenzeilen mit der {{cssxref("flex")}}-Eigenschaft auf jeder Zeile gesetzt, anstatt auf dem Kartencontainer.

Bei Flexbox werden die Dimensionen der Flex-Elemente an den Kindern und nicht am Elternteil definiert. Ob Sie sich für Grid oder Flexbox entscheiden, hängt von Ihren Vorlieben ab, davon, ob Sie die Spuren vom Container aus steuern möchten oder ob Sie Regeln zu den Elementen hinzufügen möchten.

Wir haben uns für das Grid für die Karten entschieden, da Sie in der Regel möchten, dass Karten sowohl vertikal als auch horizontal ausgerichtet sind. Darüber hinaus kann die Ausrichtung der Komponenten innerhalb jeder Karte auf die Komponenten der benachbarten Karten mit Subgrid erfolgen. Flex bietet keine hackfreie Entsprechung zu Subgrid.

## Zugänglichkeitsaspekte

Je nach Inhalt Ihrer Karte gibt es möglicherweise Dinge, die Sie tun könnten oder sollten, um die Barrierefreiheit zu verbessern. Siehe [Inclusive Components: Card](https://inclusive-components.design/cards/) von Heydon Pickering für eine sehr detaillierte Erklärung dieser Probleme.

## Siehe auch

- {{Cssxref("grid-template-columns")}}
- {{Cssxref("grid-template-rows")}}
- {{Cssxref("gap")}}
- [Inclusive Components: Card](https://inclusive-components.design/cards/)
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
