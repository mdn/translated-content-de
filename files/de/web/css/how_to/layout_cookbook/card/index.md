---
title: Karte
slug: Web/CSS/How_to/Layout_cookbook/Card
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieses Muster ist eine Liste von „Karten“-Komponenten mit optionalen Fußzeilen. Eine Karte enthält einen Titel, ein Bild, eine Beschreibung oder einen anderen Inhalt sowie eine Attribution oder Fußzeile. Karten werden in der Regel innerhalb einer Gruppe oder Sammlung angezeigt.

![Drei Kartenkomponenten in einer Reihe](cards.png)

## Anforderungen

Erstellen Sie eine Gruppe von Karten, wobei jede Kartenkomponente eine Überschrift, ein Bild, Inhalt und optional eine Fußzeile enthält.

Jede Karte in der Kartengruppe sollte die gleiche Höhe haben. Die optionale Kartenfußzeile sollte am unteren Ende der Karte haften.

Die Karten in der Gruppe sollten sich in zwei Dimensionen ausrichten – sowohl vertikal als auch horizontal.

## Rezept

Klicken Sie unten in den Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten:

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
  border: 1px solid #999999;
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
  background-color: #333333;
  color: white;
  padding: 0.5rem;
}
```

{{EmbedLiveSample("card-example", "", "950px")}}

## Getroffene Entscheidungen

Jede Karte ist mit dem [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) gestaltet, obwohl das Layout eindimensional ist. Dies ermöglicht die Verwendung von Inhaltsgrößen für die Gitterspuren. Um ein Einzelspaltengitter einzurichten, können wir Folgendes verwenden:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}} wandelt das Element in einen Gitter-Container um. Die drei Werte der Eigenschaft {{cssxref("grid-template-rows")}} teilen das Gitter in mindestens drei Reihen auf, wobei die Höhe der ersten drei Kinder der Karte in der Reihenfolge definiert wird.

Jede `card` enthält einen {{HTMLElement("header")}}, ein {{HTMLElement("img")}} und ein {{HTMLElement("div")}} in dieser Reihenfolge, wobei einige auch ein {{HTMLElement("footer")}} enthalten.

Die Überschriftenreihe oder -spur wird auf {{cssxref("max-content")}} gesetzt, was verhindert, dass sie sich dehnt. Die Bildstrecke ist auf 200 Pixel Höhe festgelegt. Die dritte Spur, in der sich der Inhalt befindet, ist auf `1fr` gesetzt. Das bedeutet, dass sie jeden zusätzlichen Raum ausfüllt.

Kinder über die drei mit explizit definierten Größen hinaus schaffen Zeilen im impliziten Raster, das den hinzugefügten Inhalt aufnimmt. Diese sind standardmäßig auto-sized. Wenn eine Karte eine Fußzeile enthält, wird diese automatisch der Größe angepasst. Die Fußzeile, sofern vorhanden, haftet am unteren Ende des Rasters. Die Fußzeile wird automatisch ihrer Größe angepasst, um ihren Inhalt aufzunehmen; der Inhalts-`<div>` dehnt sich dann aus, um jeden zusätzlichen Raum aufzunehmen.

Das folgende Regelset erstellt das Gitter der Karten:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

Die Eigenschaft {{cssxref("grid-template-columns")}} definiert die Breiten der Gitterspalten. In diesem Fall wird das Gitter auf auto-fill gesetzt, mit wiederholten Spalten, die minimal `230px` sind, aber wachsen dürfen, um den verfügbaren Raum zu füllen. Die Eigenschaft {{cssxref("gap")}} setzt einen Abstand von `20px` zwischen angrenzenden Zeilen und Spalten.

> [!NOTE]
> Die verschiedenen Elemente in separaten Karten sind nicht aufeinander ausgerichtet, da jede Karte ein unabhängiges Raster ist. Die Ausrichtung der Komponenten in jeder Karte mit den gleichen Komponenten in benachbarten Karten kann mit [Subgrid](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid) erfolgen.

## Alternative Methoden

[Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) kann auch verwendet werden, um jede Karte zu layouten. Mit Flexbox werden die Dimensionen der Zeilen jeder Karte mit der Eigenschaft {{cssxref("flex")}} auf jeder Zeile festgelegt, anstatt auf dem Kartencontainer.

Mit Flexbox werden die Dimensionen der flex items auf den Kindern festgelegt, nicht auf dem Elternteil. Ob Sie entscheiden, Grid oder Flexbox zu verwenden, hängt von Ihrer Vorliebe ab, ob Sie die Spuren vom Container aus steuern oder Regeln auf die Elemente anwenden möchten.

Wir haben Grid für die Karten gewählt, da Sie im Allgemeinen möchten, dass Karten sowohl vertikal als auch horizontal ausgerichtet sind. Zudem kann die Ausrichtung der Komponenten innerhalb jeder Karte zu den Komponenten benachbarter Karten mit Subgrid erfolgen. Flex hat keine hackfreie Entsprechung zu Subgrid.

## Barrierefreiheit

Abhängig vom Inhalt Ihrer Karte gibt es möglicherweise Dinge, die Sie tun könnten oder sollten, um die Barrierefreiheit zu verbessern. Sehen Sie sich [Inclusive components: Card](https://inclusive-components.design/cards/) von Heydon Pickering für eine sehr detaillierte Erklärung dieser Themen an.

## Siehe auch

- {{Cssxref("grid-template-columns")}}
- {{Cssxref("grid-template-rows")}}
- {{Cssxref("gap")}}
- [Inclusive components: Card](https://inclusive-components.design/cards/)
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
