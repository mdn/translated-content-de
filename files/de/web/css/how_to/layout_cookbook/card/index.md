---
title: Karte
slug: Web/CSS/How_to/Layout_cookbook/Card
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Dieses Muster ist eine Liste von "Karten"-Komponenten mit optionalen Fußzeilen. Eine Karte enthält einen Titel, ein Bild, eine Beschreibung oder anderen Inhalt und eine Zuschreibung oder Fußzeile. Karten werden normalerweise innerhalb einer Gruppe oder Sammlung angezeigt.

![Drei Kartenkomponenten in einer Reihe](cards.png)

## Anforderungen

Erstellen Sie eine Gruppe von Karten, wobei jede Kartenkomponente eine Überschrift, ein Bild, Inhalt und optional eine Fußzeile enthält.

Jede Karte in der Kartengruppe sollte die gleiche Höhe haben. Die optionale Kartenfußzeile sollte am unteren Rand der Karte haften.

Die Karten in der Gruppe sollten sich in zwei Dimensionen ausrichten — sowohl vertikal als auch horizontal.

## Rezept

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Jede Karte ist mithilfe von [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) angeordnet, obwohl das Layout eindimensional ist. Dies ermöglicht die Verwendung von Inhaltsgrößen für die Grid-Tracks. Um ein einspaltiges Gitter einzurichten, können wir Folgendes verwenden:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}} wandelt das Element in einen Grid-Container um. Die drei Werte der Eigenschaft {{cssxref("grid-template-rows")}} teilen das Gitter in mindestens drei Zeilen auf und definieren die Höhe der ersten drei Kinder der Karte in entsprechender Reihenfolge.

Jede `card` enthält einen {{HTMLElement("header")}}, {{HTMLElement("img")}} und {{HTMLElement("div")}} in dieser Reihenfolge; einige enthalten auch einen {{HTMLElement("footer")}}.

Die Überschriftenzeile oder der Track wird auf {{cssxref("max-content")}} gesetzt, wodurch ein Dehnen verhindert wird. Der Bildtrack ist auf 200 Pixel Höhe festgelegt. Der dritte Track, in dem sich der Inhalt befindet, ist auf `1fr` gesetzt. Das bedeutet, dass er jeden zusätzlichen Platz ausfüllen wird.

Alle Kinder, die über die drei mit explizit definierten Größen hinausgehen, erstellen Zeilen im impliziten Gitter, die den hinzugefügten Inhalt aufnehmen. Diese sind standardmäßig auf automatische Größe eingestellt. Wenn eine Karte eine Fußzeile enthält, wird diese automatisch in der Größe angepasst. Die Fußzeile, falls vorhanden, haftet am unteren Rand des Gitters. Die Fußzeile wird automatisch auf die Größe ihres Inhalts angepasst; das Inhalts-`<div>` streckt sich dann, um jeden zusätzlichen Platz einzunehmen.

Das folgende Regelsatz erstellt das Gitter der Karten:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

Die Eigenschaft {{cssxref("grid-template-columns")}} definiert die Breiten der Gitterspalten. In diesem Fall setzen wir das Gitter auf Auto-Fill mit wiederholten Spalten, die minimal `230px` betragen, aber erlaubt sind, den verfügbaren Raum zu füllen. Die Eigenschaft {{cssxref("gap")}} setzt einen Abstand von `20px` zwischen benachbarten Zeilen und Spalten.

> [!NOTE]
> Die verschiedenen Elemente in separaten Karten sind nicht gleich ausgerichtet, da jede Karte ein unabhängiges Gitter ist. Das Ausrichten der Komponenten in jeder Karte an den gleichen Komponenten in benachbarten Karten kann mit [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) erfolgen.

## Alternative Methoden

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) kann ebenfalls verwendet werden, um jede Karte anzuordnen. Mit Flexbox werden die Dimensionen jeder Kartenzeile mit der Eigenschaft {{cssxref("flex")}} auf jeder Zeile festgelegt, anstatt auf dem Kartencontainer.

Mit Flexbox werden die Dimensionen der Flex-Elemente auf den Kind-Elementen anstatt auf dem übergeordneten Element festgelegt. Ob Sie Grid oder Flexbox verwenden, hängt von Ihrer Präferenz ab, ob Sie die Tracks vom Container aus steuern möchten oder ob Sie Regeln zu den Elementen hinzufügen möchten.

Wir haben uns für das Grid für die Karten entschieden, da Sie im Allgemeinen möchten, dass Karten sowohl vertikal als auch horizontal ausgerichtet sind. Außerdem kann das Ausrichten der Komponenten innerhalb jeder Karte mit den Komponenten benachbarter Karten mit Subgrid erfolgen. Flex hat kein hackfreies Äquivalent zu Subgrid.

## Barrierefreiheitsbedenken

Abhängig vom Inhalt Ihrer Karte kann es Dinge geben, die Sie tun könnten oder sollten, um die Barrierefreiheit zu verbessern. Siehe [Inclusive components: Card](https://inclusive-components.design/cards/) von Heydon Pickering für eine sehr ausführliche Erklärung dieser Themen.

## Siehe auch

- {{Cssxref("grid-template-columns")}}
- {{Cssxref("grid-template-rows")}}
- {{Cssxref("gap")}}
- [Inclusive components: Card](https://inclusive-components.design/cards/)
- [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
