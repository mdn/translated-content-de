---
title: Card
slug: Web/CSS/Layout_cookbook/Card
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Dieses Muster ist eine Liste von „Card“-Komponenten mit optionalen Fußzeilen. Eine Card enthält einen Titel, ein Bild, eine Beschreibung oder anderen Inhalt und eine Zuschreibung oder Fußzeile. Cards werden im Allgemeinen innerhalb einer Gruppe oder Sammlung angezeigt.

![Drei Card-Komponenten in einer Reihe](cards.png)

## Anforderungen

Erstellen Sie eine Gruppe von Cards, wobei jede Card-Komponente eine Überschrift, ein Bild, Inhalt und optional eine Fußzeile enthält.

Jede Card in der Gruppe sollte die gleiche Höhe haben. Die optionale Card-Fußzeile sollte am unteren Rand der Card haften.

Die Cards in der Gruppe sollten sich in zwei Dimensionen ausrichten – sowohl vertikal als auch horizontal.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/card.html", '100%', 1720)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/card--download.html)

## Getroffene Entscheidungen

Jede Card wird mithilfe des [CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) ausgelegt, obwohl das Layout eindimensional ist. Dies ermöglicht die Verwendung von Inhaltsgrößen für die Rasterspuren. Um ein einspaltiges Raster einzurichten, können wir folgendes verwenden:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}} konvertiert das Element in einen Grid-Container. Die drei Werte der Eigenschaft {{cssxref("grid-template-rows")}} teilen das Raster in mindestens drei Zeilen, die die Höhe der ersten drei Kinder der Card in Reihenfolge definieren.

Jede `card` enthält ein {{HTMLElement("header")}}, {{HTMLElement("img")}}, und {{HTMLElement("div")}}, in dieser Reihenfolge, wobei einige auch ein {{HTMLElement("footer")}} enthalten.

Die Überschriftszeile oder -spur ist auf {{cssxref("max-content")}} gesetzt, was verhindert, dass sie sich dehnt. Die Bildspur ist auf 200 Pixel Höhe gesetzt. Die dritte Spur, in der der Inhalt liegt, ist auf `1fr` gesetzt. Dies bedeutet, dass sie jeglichen zusätzlichen Platz ausnutzen wird.

Alle Kinder, die über die explizit definierten Größen hinausgehen, erstellen Zeilen im impliziten Raster, die den hinzugefügten Inhalt aufnehmen. Diese werden standardmäßig automatisiert dimensioniert. Wenn eine Card eine Fußzeile enthält, wird sie automatisiert dimensioniert. Die Fußzeile, wenn vorhanden, haftet an der Unterseite des Rasters. Die Fußzeile wird automatisch dimensioniert, um ihren Inhalt aufzunehmen; der Inhalt `<div>` dehnt sich dann aus, um jeglichen zusätzlichen Raum einzunehmen.

Die folgende Regelmenge erstellt das Raster der Cards:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

Die Eigenschaft {{cssxref("grid-template-columns")}} definiert die Breiten der Rasterspalten. In diesem Fall setzen wir das Raster auf eine automatische Füllung, mit wiederholten Spalten, die minimal `230px` sind, aber wachsen dürfen, um den verfügbaren Raum auszufüllen. Die Eigenschaft {{cssxref("gap")}} setzt einen Abstand von `20px` zwischen benachbarten Zeilen und Spalten.

> [!NOTE]
> Die verschiedenen Elemente in separaten Cards richten sich nicht zueinander aus, da jede Card ein unabhängiges Raster ist. Komponenten in jeder Card mit denselben Komponenten in benachbarten Karten können mit [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) ausgerichtet werden.

## Alternative Methoden

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) kann auch verwendet werden, um jede Card auszulegen. Mit Flexbox werden die Dimensionen der Zeilen jeder Card mit der Eigenschaft {{cssxref("flex")}} auf jeder Zeile festgelegt, anstatt auf dem Card-Container.

Mit Flexbox werden die Dimensionen der Flex-Elemente auf den Kindern und nicht auf dem Elternteil definiert. Ob Sie sich für Grid oder Flexbox entscheiden, hängt von Ihrer Präferenz ab, ob Sie die Spuren vom Container aus steuern oder Regeln zu den Elementen hinzufügen möchten.

Wir haben Grid für die Cards gewählt, da Sie im Allgemeinen Karten sowohl vertikal als auch horizontal ausrichten möchten. Darüber hinaus kann das Ausrichten der Komponenten innerhalb jeder Card zu den Komponenten benachbarter Karten mit Subgrid durchgeführt werden. Flex hat keine gleichwertige, hackfreie Alternative zu Subgrid.

## Barrierefreiheitsaspekte

Abhängig vom Inhalt Ihrer Card können Maßnahmen ergriffen werden, um die Barrierefreiheit zu verbessern. Siehe [Inclusive components: Card](https://inclusive-components.design/cards/) von Heydon Pickering, für eine sehr detaillierte Erklärung dieser Probleme.

## Siehe auch

- {{Cssxref("grid-template-columns")}}
- {{Cssxref("grid-template-rows")}}
- {{Cssxref("gap")}}
- [Inclusive components: Card](https://inclusive-components.design/cards/)
- Modul [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
