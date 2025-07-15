---
title: Karte
slug: Web/CSS/Layout_cookbook/Card
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Dieses Muster ist eine Liste von "Karten"-Komponenten mit optionalen Fußzeilen. Eine Karte enthält einen Titel, ein Bild, eine Beschreibung oder andere Inhalte sowie eine Attributierung oder Fußzeile. Karten werden in der Regel innerhalb einer Gruppe oder Sammlung angezeigt.

![Drei Kartenkomponenten in einer Reihe](cards.png)

## Anforderungen

Erstellen Sie eine Gruppe von Karten, wobei jede Kartenkomponente eine Überschrift, ein Bild, Inhalte und optional eine Fußzeile enthält.

Jede Karte in der Gruppe von Karten sollte die gleiche Höhe haben. Die optionale Kartenfußzeile sollte am unteren Rand der Karte kleben.

Die Karten in der Gruppe sollten in zwei Dimensionen ausgerichtet sein – sowohl vertikal als auch horizontal.

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
  color: #fff;
  padding: 0.5rem;
}
```

{{EmbedLiveSample("card-example", "", "950px")}}

## Getroffene Entscheidungen

Jede Karte wird mit dem [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) angeordnet, obwohl das Layout eindimensional ist. Dies ermöglicht die Verwendung von Inhaltsgrößen für die Rasterspuren. Um ein einziges Spaltenraster einzurichten, können wir Folgendes verwenden:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}} wandelt das Element in einen Raster-Container um. Die drei Werte der Eigenschaft {{cssxref("grid-template-rows")}} teilen das Raster in mindestens drei Reihen und definieren die Höhe der ersten drei Kindelemente der Karte in der Reihenfolge.

Jede `card` enthält einen {{HTMLElement("header")}}, ein {{HTMLElement("img")}} und ein {{HTMLElement("div")}}, in dieser Reihenfolge, wobei einige auch einen {{HTMLElement("footer")}} enthalten.

Die Überschriftenreihe oder Spur ist auf {{cssxref("max-content")}} gesetzt, was ein Strecken verhindert. Die Bildspur ist auf 200 Pixel Höhe eingestellt. Die dritte Spur, wo sich der Inhalt befindet, ist auf `1fr` gesetzt. Das bedeutet, dass sie jeden zusätzlichen Platz ausfüllt.

Alle Kinder jenseits der drei mit explizit definierten Größen erstellen Reihen im impliziten Raster, das an den hinzugefügten Inhalt angepasst ist. Diese sind standardmäßig automatisch dimensioniert. Wenn eine Karte eine Fußzeile enthält, wird diese automatisch dimensioniert. Die Fußzeile, falls vorhanden, klebt am unteren Rand des Rasters. Die Fußzeile wird automatisch dimensioniert, um ihren Inhalt aufzunehmen; der Inhalt `<div>` dehnt sich dann aus, um jeden zusätzlichen Platz einzunehmen.

Das folgende Regelsatz erstellt das Kartenraster:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

Die Eigenschaft {{cssxref("grid-template-columns")}} definiert die Breiten der Rasterspalten. In diesem Fall setzen wir das Raster auf automatische Füllung, mit wiederholten Spalten, die mindestens `230px` sind, aber so wachsen dürfen, dass sie den verfügbaren Platz ausfüllen. Die Eigenschaft {{cssxref("gap")}} setzt einen Abstand von `20px` zwischen angrenzenden Reihen und angrenzenden Spalten.

> [!NOTE]
> Die verschiedenen Elemente in separaten Karten richten sich nicht aneinander aus, da jede Karte ein unabhängiges Raster ist. Die Ausrichtung der Komponenten in jeder Karte mit denselben Komponenten in angrenzenden Karten kann mit [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) erreicht werden.

## Alternative Methoden

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) kann auch verwendet werden, um jede Karte zu gestalten. Mit Flexbox werden die Dimensionen der Reihen jeder Karte mit der Eigenschaft {{cssxref("flex")}} auf jeder Reihe statt auf dem Kartencontainer gesetzt.

Mit Flexbox werden die Dimensionen der Flex-Items auf den Kindern und nicht auf dem Elternteil definiert. Ob Sie nun Raster oder Flexbox verwenden, hängt von Ihrer Präferenz ab – ob Sie die Spuren vom Container aus steuern oder lieber Regeln auf die Elemente anwenden.

Wir haben uns für das Raster für die Karten entschieden, da man im Allgemeinen möchte, dass die Karten sowohl vertikal als auch horizontal ausgerichtet sind. Zusätzlich kann die Ausrichtung der Komponenten innerhalb jeder Karte mit den Komponenten angrenzender Karten mit Subgrid erreicht werden. Flex hat kein nicht manipuliertes Äquivalent zu Subgrid.

## Barrierefreiheitsaspekte

Je nach Inhalt Ihrer Karte gibt es möglicherweise Dinge, die Sie tun könnten oder sollten, um die Barrierefreiheit zu verbessern. Siehe [Inclusive components: Card](https://inclusive-components.design/cards/) von Heydon Pickering für eine sehr detaillierte Erklärung dieser Themen.

## Siehe auch

- {{Cssxref("grid-template-columns")}}
- {{Cssxref("grid-template-rows")}}
- {{Cssxref("gap")}}
- [Inclusive components: Card](https://inclusive-components.design/cards/)
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
