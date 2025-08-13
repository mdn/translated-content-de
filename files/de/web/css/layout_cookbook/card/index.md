---
title: Karte
slug: Web/CSS/Layout_cookbook/Card
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Dieses Muster ist eine Liste von "Karten"-Komponenten mit optionalen Fußzeilen. Eine Karte enthält einen Titel, ein Bild, eine Beschreibung oder andere Inhalte sowie eine Zuschreibung oder Fußzeile. Karten werden in der Regel innerhalb einer Gruppe oder Sammlung angezeigt.

![Drei Kartenkomponenten in einer Reihe](cards.png)

## Anforderungen

Erstellen Sie eine Gruppe von Karten, wobei jede Kartenkomponente eine Überschrift, ein Bild, Inhalt und optional eine Fußzeile enthält.

Jede Karte in der Gruppe sollte die gleiche Höhe haben. Die optionale Kartenfußzeile sollte am unteren Rand der Karte haften.

Die Karten in der Gruppe sollten sich in zwei Dimensionen ausrichten — sowohl vertikal als auch horizontal.

## Rezept

Klicken Sie auf "Play" in den folgenden Code-Blöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Jede Karte wird mithilfe des [CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) gestaltet, obwohl das Layout eindimensional ist. Dies ermöglicht die Verwendung von Inhaltsgrößen für die Rasterspuren. Um ein einspaltiges Raster einzurichten, können wir Folgendes verwenden:

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}} verwandelt das Element in einen Raster-Container. Die drei Werte der Eigenschaft {{cssxref("grid-template-rows")}} teilen das Raster in mindestens drei Zeilen und definieren die Höhe der ersten drei Kinder der Karte in der Reihenfolge.

Jede `card` enthält ein {{HTMLElement("header")}}, {{HTMLElement("img")}} und {{HTMLElement("div")}} in dieser Reihenfolge, wobei einige auch ein {{HTMLElement("footer")}} enthalten.

Die Überschriftenzeile oder -spur ist auf {{cssxref("max-content")}} gesetzt, was verhindert, dass sie sich ausdehnt. Die Bilder-Spur ist auf 200 Pixel Höhe eingestellt. Die dritte Spur, in der sich die Inhalte befinden, ist auf `1fr` eingestellt. Das bedeutet, dass sie jeden zusätzlichen Raum ausfüllt.

Alle Kinder, die über die drei mit explizit definierten Größen hinausgehen, erstellen Zeilen im impliziten Raster, die den hinzugefügten Inhalt aufnehmen. Diese werden standardmäßig automatisch dimensioniert. Wenn eine Karte eine Fußzeile enthält, wird diese automatisch dimensioniert. Die Fußzeile, sofern vorhanden, bleibt am unteren Rand des Rasters haften. Die Fußzeile ist automatisch dimensioniert, um ihren Inhalt zu fassen; der Inhalt `<div>` dehnt sich dann aus, um zusätzlichen Platz einzunehmen.

Der folgende Regelsatz erstellt das Raster der Karten:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

Die Eigenschaft {{cssxref("grid-template-columns")}} definiert die Breiten der Rasterspalten. In diesem Fall setzen wir das Raster so, dass es sich automatisch füllt, mit wiederkehrenden Spalten, die mindestens `230px` breit sind, aber wachsen dürfen, um den verfügbaren Platz auszufüllen. Die Eigenschaft {{cssxref("gap")}} setzt einen Abstand von `20px` zwischen benachbarten Zeilen und benachbarten Spalten.

> [!NOTE]
> Die verschiedenen Elemente in separaten Karten sind nicht aufeinander ausgerichtet, da jede Karte ein unabhängiges Raster darstellt. Die Ausrichtung der Komponenten in jeder Karte mit den gleichen Komponenten in benachbarten Karten kann mit [subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) erreicht werden.

## Alternative Methoden

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) kann ebenfalls zur Gestaltung jeder Karte verwendet werden. Mit Flexbox werden die Abmessungen der einzelnen Kartenreihen mit der Eigenschaft {{cssxref("flex")}} auf jeder Reihe festgelegt, anstatt auf dem Karten-Container.

Mit Flexbox werden die Dimensionen der Flex-Elemente auf den Kindern anstatt auf dem übergeordneten Element definiert. Ob Sie sich für die Verwendung von Grid oder Flexbox entscheiden, hängt von Ihrer Präferenz ab, ob Sie die Spuren vom Container aus kontrollieren oder Regeln zu den Elementen hinzufügen möchten.

Wir haben Grid für die Karten gewählt, da man im Allgemeinen möchte, dass Karten sowohl vertikal als auch horizontal ausgerichtet sind. Außerdem kann die Ausrichtung der Komponenten innerhalb jeder Karte zu den Komponenten benachbarter Karten mit Subgrid erfolgen. Flex hat kein gleichwertiges, hackfreies Subgrid.

## Barrierefreiheitserwägungen

Abhängig vom Inhalt Ihrer Karte gibt es möglicherweise Dinge, die Sie tun könnten oder sollten, um die Zugänglichkeit zu verbessern. Siehe [Inclusive components: Card](https://inclusive-components.design/cards/) von Heydon Pickering für eine sehr ausführliche Erklärung dieser Themen.

## Siehe auch

- {{Cssxref("grid-template-columns")}}
- {{Cssxref("grid-template-rows")}}
- {{Cssxref("gap")}}
- [Inclusive components: Card](https://inclusive-components.design/cards/)
- Modul [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
