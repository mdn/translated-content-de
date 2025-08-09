---
title: Karte
slug: Web/CSS/Layout_cookbook/Card
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Dieses Muster ist eine Liste von "Karten"-Komponenten mit optionalen Fußzeilen. Eine Karte enthält einen Titel, ein Bild, eine Beschreibung oder andere Inhalte, sowie eine Quellenangabe oder Fußzeile. Karten werden in der Regel innerhalb einer Gruppe oder Sammlung angezeigt.

![Drei Kartenkomponenten in einer Reihe](cards.png)

## Anforderungen

Erstellen Sie eine Gruppe von Karten, wobei jede Kartenkomponente eine Überschrift, ein Bild, Inhalte und optional eine Fußzeile enthält.

Jede Karte in der Gruppe sollte die gleiche Höhe haben. Die optionale Kartenfußzeile sollte am unteren Rand der Karte haften.

Die Karten in der Gruppe sollten sich sowohl vertikal als auch horizontal ausrichten.

## Rezept

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___card-example
<div class="cards">
  <article class="card">
    <header>
      <h2>A short heading</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
      alt="Hot air balloons" />
    <div class="content">
      <p>
        The idea of reaching the North Pole by means of balloons appears to have
        been entertained many years ago.
      </p>
    </div>
  </article>

  <article class="card">
    <header>
      <h2>A short heading</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg"
      alt="Hot air balloons" />
    <div class="content">
      <p>Short content.</p>
    </div>
    <footer>I have a footer!</footer>
  </article>

  <article class="card">
    <header>
      <h2>A longer heading in this card</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
      alt="Hot air balloons" />
    <div class="content">
      <p>
        In a curious work, published in Paris in 1863 by Delaville Dedreux,
        there is a suggestion for reaching the North Pole by an aerostat.
      </p>
    </div>
    <footer>I have a footer!</footer>
  </article>
  <article class="card">
    <header>
      <h2>A short heading</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg"
      alt="Hot air balloons" />
    <div class="content">
      <p>
        The idea of reaching the North Pole by means of balloons appears to have
        been entertained many years ago.
      </p>
    </div>
  </article>
</div>
```

```css live-sample___card-example
body {
  font: 1.2em sans-serif;
}

img {
  max-width: 100%;
}

.cards {
  max-width: 700px;
  margin: 1em auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
}

.card {
  border: 1px solid #999;
  border-radius: 3px;

  display: grid;
  grid-template-rows: max-content 200px 1fr;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card h2 {
  margin: 0;
  padding: 0.5rem;
}

.card .content {
  padding: 0.5rem;
}

.card footer {
  background-color: #333;
  color: white;
  padding: 0.5rem;
}
```

{{EmbedLiveSample("card-example", "", "950px")}}

## Getroffene Entscheidungen

Jede Karte wird mit [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) ausgelegt, obwohl das Layout eindimensional ist. Dies ermöglicht die Verwendung von Inhaltsgrößen für die Grid-Tracks. Um ein Grid mit einer einzigen Spalte einzurichten, können wir folgendes verwenden:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}} verwandelt das Element in einen Grid-Container. Die drei Werte der Eigenschaft {{cssxref("grid-template-rows")}} teilen das Grid in mindestens drei Zeilen und definieren die Höhe der ersten drei Kinder der Karte in dieser Reihenfolge.

Jede `card` enthält ein {{HTMLElement("header")}}, ein {{HTMLElement("img")}}und ein {{HTMLElement("div")}}, in dieser Reihenfolge, wobei einige auch ein {{HTMLElement("footer")}}enthalten.

Die Überschriftenreihe oder die Spur ist auf {{cssxref("max-content")}} eingestellt, was verhindert, dass sie sich streckt. Die Bildspur ist auf eine Höhe von 200 Pixeln eingestellt. Die dritte Spur, in der der Inhalt enthalten ist, ist auf `1fr` eingestellt. Dies bedeutet, dass sie jeden zusätzlichen Raum ausfüllen wird.

Jede darüber hinausgehende Kinder mit explizit definierten Größen erstellen Reihen im impliziten Grid, die den hinzugefügten Inhalten passen. Diese sind standardmäßig automatisch dimensioniert. Wenn eine Karte eine Fußzeile enthält, wird sie automatisch dimensioniert. Die Fußzeile, wenn vorhanden, haftet am unteren Rand des Grids. Die Fußzeile wird so dimensioniert, dass sie zu ihrem Inhalt passt; der Inhalts-`<div>` dehnt sich dann aus, um allen zusätzlichen Raum auszufüllen.

Der folgende Regelsatz erstellt das Grid der Karten:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

Die Eigenschaft {{cssxref("grid-template-columns")}} definiert die Breiten der Grid-Spalten. In diesem Fall haben wir das Grid so eingestellt, dass es sich automatisch füllt, mit wiederholten Spalten, die mindestens `230px` sind, aber wachsen dürfen, um den verfügbaren Raum zu füllen. Die Eigenschaft {{cssxref("gap")}} setzt einen Abstand von `20px` zwischen angrenzenden Reihen und Spalten.

> [!NOTE]
> Die verschiedenen Elemente in separaten Karten richten sich nicht miteinander aus, da jede Karte ein unabhängiges Grid ist. Das Ausrichten der Komponenten in jeder Karte mit den gleichen Komponenten in angrenzenden Karten kann mit [subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) erreicht werden.

## Alternative Methoden

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) kann ebenfalls verwendet werden, um jede Karte zu layouten. Mit Flexbox werden die Dimensionen jeder Kartenzeile mit der Eigenschaft {{cssxref("flex")}} auf jeder Zeile und nicht im Kartencontainer gesetzt.

Bei Flexbox werden die Dimensionen der Flex-Elemente an den Kindern und nicht an den Eltern definiert. Ob Sie Grid oder Flexbox verwenden, hängt von Ihren Vorlieben ab, ob Sie die Strecken vom Container aus steuern oder lieber Regeln zu den Elementen hinzufügen.

Wir haben uns für das Grid für die Karten entschieden, da Sie im Allgemeinen möchten, dass Karten sowohl vertikal als auch horizontal ausgerichtet sind. Darüber hinaus kann das Ausrichten der Komponenten innerhalb jeder Karte zu den Komponenten angrenzender Karten mit Subgrid durchgeführt werden. Flex hat kein hackfreies Äquivalent zu Subgrid.

## Barrierefreiheitsbedenken

Je nach Inhalt Ihrer Karte gibt es möglicherweise Dinge, die Sie tun könnten oder sollten, um die Barrierefreiheit zu verbessern. Siehe [Inclusive components: Card](https://inclusive-components.design/cards/) von Heydon Pickering für eine sehr detaillierte Erklärung dieser Probleme.

## Siehe auch

- {{Cssxref("grid-template-columns")}}
- {{Cssxref("grid-template-rows")}}
- {{Cssxref("gap")}}
- [Inclusive components: Card](https://inclusive-components.design/cards/)
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
