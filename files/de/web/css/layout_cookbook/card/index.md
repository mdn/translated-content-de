---
title: Karte
slug: Web/CSS/Layout_cookbook/Card
l10n:
  sourceCommit: 507825f6292eb73f0a96419d69870d9330b6776f
---

{{CSSRef}}

Dieses Muster ist eine Liste von "Karten"-Komponenten mit optionalen Fußzeilen. Eine Karte enthält einen Titel, ein Bild, eine Beschreibung oder anderen Inhalt und eine Quellenangabe oder Fußzeile. Karten werden im Allgemeinen innerhalb einer Gruppe oder Sammlung angezeigt.

![Drei Kartenkomponenten in einer Reihe](cards.png)

## Anforderungen

Erstellen Sie eine Gruppe von Karten, wobei jede Kartenkomponente eine Überschrift, ein Bild, Inhalt und optional eine Fußzeile enthält.

Jede Karte in der Kartengruppe sollte die gleiche Höhe haben. Die optionale Kartenfußzeile sollte am unteren Rand der Karte haften.

Die Karten in der Gruppe sollten sich in zwei Dimensionen ausrichten – sowohl vertikal als auch horizontal.

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

Jede Karte ist unter Verwendung des [CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) angeordnet, obwohl das Layout eindimensional ist. Dies ermöglicht die Nutzung der Inhaltsgrößen für die Grid-Tracks. Um ein einspaltiges Grid einzurichten, können wir Folgendes verwenden:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}} wandelt das Element in einen Grid-Container um. Die drei Werte der Eigenschaft {{cssxref("grid-template-rows")}} teilen das Grid in mindestens drei Zeilen, wobei die Höhe der ersten drei Kinder der Karte festgelegt wird.

Jede `Karte` enthält einen {{HTMLElement("header")}}, ein {{HTMLElement("img")}} und ein {{HTMLElement("div")}}, in dieser Reihenfolge, und einige enthalten auch einen {{HTMLElement("footer")}}.

Die Überschriftenzeile oder -spur ist auf {{cssxref("max-content")}} gesetzt, was verhindert, dass sie sich ausdehnt. Die Bildspur ist auf eine Höhe von 200 Pixeln gesetzt. Die dritte Spur, in der sich der Inhalt befindet, ist auf `1fr` gesetzt. Das bedeutet, dass sie jeden zusätzlichen Raum füllen wird.

Alle weiteren Kinder über die drei mit explizit definierten Größen hinaus erstellen Zeilen im impliziten Grid, die den hinzugefügten Inhalt aufnehmen. Diese werden standardmäßig automatisch dimensioniert. Wenn eine Karte eine Fußzeile enthält, wird diese automatisch dimensioniert. Die Fußzeile, wenn vorhanden, haftet am unteren Rand des Grids. Die Fußzeile wird automatisch dimensioniert, um ihren Inhalt aufzunehmen; das Inhalts-`<div>` erstreckt sich dann, um jeden zusätzlichen Raum aufzunehmen.

Das folgende Regelset erstellt das Grid der Karten:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

Die Eigenschaft {{cssxref("grid-template-columns")}} definiert die Breiten der Grid-Spalten. In diesem Fall setzen wir das Grid auf auto-fill, mit wiederholten Spalten, die minimal `230px` sind, aber erlaubt sind, zu wachsen, um den verfügbaren Raum auszufüllen. Die Eigenschaft {{cssxref("gap")}} setzt einen Abstand von `20px` zwischen angrenzenden Zeilen und benachbarten Spalten.

> [!NOTE]
> Die verschiedenen Elemente in separaten Karten sind nicht zueinander ausgerichtet, da jede Karte ein unabhängiges Grid ist. Das Ausrichten der Komponenten in jeder Karte mit denselben Komponenten in benachbarten Karten kann mit [subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) erfolgen.

## Alternative Methoden

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) kann ebenfalls verwendet werden, um jede Karte zu layouten. Mit Flexbox werden die Dimensionen der Reihen jeder Karte mit der Eigenschaft {{cssxref("flex")}} auf jeder Reihe gesetzt, anstatt auf dem Kartencontainer.

Mit Flexbox werden die Dimensionen der Flex-Elemente auf den Kindern anstatt auf dem Elternteil definiert. Ob Sie sich für Grid oder Flexbox entscheiden, hängt von Ihrer Vorliebe ab, ob Sie die Spuren vom Container aus steuern oder lieber Regeln auf die Elemente anwenden.

Wir haben uns für Grid für die Karten entschieden, da im Allgemeinen Karten sowohl vertikal als auch horizontal ausgerichtet sein sollen. Darüber hinaus kann das Ausrichten der Komponenten innerhalb jeder Karte an den Komponenten benachbarter Karten mit Subgrid erfolgen. Flex hat kein äquivalentes, hack-freies Pendant zu Subgrid.

## Barrierefreiheitsbedenken

Je nach Inhalt Ihrer Karte kann es Dinge geben, die Sie tun könnten oder sollten, um die Barrierefreiheit zu verbessern. Siehe [Inclusive components: Card](https://inclusive-components.design/cards/) von Heydon Pickering für eine sehr detaillierte Erklärung dieser Themen.

## Siehe auch

- {{Cssxref("grid-template-columns")}}
- {{Cssxref("grid-template-rows")}}
- {{Cssxref("gap")}}
- [Inclusive components: Card](https://inclusive-components.design/cards/)
- [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
