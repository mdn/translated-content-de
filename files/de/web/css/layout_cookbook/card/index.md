---
title: Card
slug: Web/CSS/Layout_cookbook/Card
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Dieses Muster ist eine Liste von "Karten"-Komponenten mit optionalen Fußzeilen. Eine Karte enthält einen Titel, ein Bild, eine Beschreibung oder anderen Inhalt sowie eine Attribution oder Fußzeile. Karten werden im Allgemeinen in einer Gruppe oder Sammlung angezeigt.

![Drei Kartenkomponenten in einer Reihe](cards.png)

## Anforderungen

Erstellen Sie eine Gruppe von Karten, wobei jede Kartenkomponente eine Überschrift, ein Bild, Inhalt und optional eine Fußzeile enthält.

Jede Karte in der Gruppe sollte die gleiche Höhe haben. Die optionale Kartenfußzeile sollte am unteren Rand der Karte haften.

Die Karten in der Gruppe sollten sich in zwei Dimensionen ausrichten — sowohl vertikal als auch horizontal.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/card.html", '100%', 1720)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/card--download.html)

## Getroffene Entscheidungen

Jede Karte wird mit [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) gestaltet, obwohl das Layout eindimensional ist. Dies ermöglicht die Verwendung von Inhaltsgrößen für die Gitterspuren. Um ein einspaltiges Gitter einzurichten, können wir Folgendes verwenden:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}} konvertiert das Element in ein Gitter-Container. Die drei Werte der {{cssxref("grid-template-rows")}}-Eigenschaft teilen das Gitter in mindestens drei Reihen auf, die die Höhe der ersten drei Kinder der Karte definieren, in Reihenfolge.

Jede `card` enthält ein {{HTMLElement("header")}}, {{HTMLElement("img")}}, und {{HTMLElement("div")}}, in dieser Reihenfolge, wobei einige auch ein {{HTMLElement("footer")}} enthalten.

Die Kopfzeilenreihe oder Spur ist auf {{cssxref("max-content")}} gesetzt, was verhindert, dass sie sich dehnt. Die Bildspur ist auf 200 Pixel Höhe gesetzt. Die dritte Spur, in der sich der Inhalt befindet, ist auf `1fr` gesetzt. Dies bedeutet, dass sie den zusätzlichen Raum füllen wird.

Jedes weitere Kind über die drei mit explizit definierten Größen hinaus erstellt Reihen im impliziten Gitter, die den hinzugefügten Inhalt anpassen. Diese sind standardmäßig automatisch skaliert. Wenn eine Karte eine Fußzeile enthält, wird sie automatisch skaliert. Die Fußzeile, wenn vorhanden, haftet am unteren Rand des Gitters. Die Fußzeile wird automatisch auf die Größe ihres Inhalts angepasst; der Inhalts-`<div>` dehnt sich dann aus, um den zusätzlichen Raum einzunehmen.

Der folgende Regelsatz erstellt das Raster der Karten:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

Die {{cssxref("grid-template-columns")}}-Eigenschaft definiert die Breiten der Gitterspalten. In diesem Fall setzen wir das Gitter auf Auto-Fill, mit wiederholten Spalten, die minimal `230px` sind, aber erlaubt, den verfügbaren Raum auszufüllen. Die {{cssxref("gap")}}-Eigenschaft setzt einen Abstand von `20px` zwischen benachbarten Reihen und Spalten.

> [!NOTE]
> Die verschiedenen Elemente in separaten Karten richten sich nicht aufeinander aus, da jede Karte ein unabhängiges Gitter ist. Das Ausrichten der Komponenten in jeder Karte mit den gleichen Komponenten in benachbarten Karten kann mit [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) erfolgen.

## Alternative Methoden

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) kann ebenfalls verwendet werden, um jede Karte zu gestalten. Mit Flexbox werden die Abmessungen der Reihen jeder Karte durch die {{cssxref("flex")}}-Eigenschaft auf jeder Reihe anstelle des Kartencontainers eingestellt.

Mit Flexbox werden die Abmessungen der Flex-Items an den Kindern definiert und nicht am Elternteil. Ob Sie sich für die Verwendung von Grid oder Flexbox entscheiden, hängt von Ihrer Präferenz ab, ob Sie die Spuren vom Container aus steuern oder Regeln zu den Items hinzufügen möchten.

Wir haben Grid für die Karten gewählt, da man im Allgemeinen möchte, dass Karten sowohl vertikal als auch horizontal ausgerichtet sind. Darüber hinaus kann das Ausrichten der Komponenten innerhalb jeder Karte mit den Komponenten der benachbarten Karten mit Subgrid erfolgen. Flex hat kein äquivalentes Mittel ohne Hacks zu Subgrid.

## Barrierefreiheit

Abhängig vom Inhalt Ihrer Karte gibt es möglicherweise Dinge, die Sie tun könnten oder sollten, um die Barrierefreiheit zu verbessern. Siehe [Inclusive components: Card](https://inclusive-components.design/cards/) von Heydon Pickering für eine sehr detaillierte Erklärung dieser Themen.

## Siehe auch

- {{Cssxref("grid-template-columns")}}
- {{Cssxref("grid-template-rows")}}
- {{Cssxref("gap")}}
- [Inclusive components: Card](https://inclusive-components.design/cards/)
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
