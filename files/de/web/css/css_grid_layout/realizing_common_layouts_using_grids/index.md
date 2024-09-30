---
title: Verwirklichung gängiger Layouts mit Rastern
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Um diese Reihe von Leitfäden zum CSS-Rasterlayout abzuschließen, gehen wir nun einige verschiedene Layouts durch, die einige der verschiedenen Techniken demonstrieren, die Sie beim Entwerfen mit Rasterlayout verwenden können. Wir werden ein Beispiel mit [grid-template-areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas), ein typisches flexibles 12-Spalten-Rastersystem und auch eine Produktauflistung mit automatischer Platzierung betrachten. Wie Sie aus diesen Beispielen sehen können, gibt es oft mehr als einen Weg, das gewünschte Ergebnis mit Rasterlayout zu erzielen. Wählen Sie die Methode, die Ihnen bei den Problemen, die Sie lösen, und den Designs, die Sie umsetzen müssen, am hilfreichsten erscheint.

## Ein responsives Layout mit 1 bis 3 flexiblen Spalten unter Verwendung von `grid-template-areas`

Viele Webseiten sind eine Variation dieses Layouts mit Inhalt, Seitenleisten, einem Kopfbereich und einem Fußbereich. In einem responsiven Design möchten Sie das Layout möglicherweise als einzelne Spalte anzeigen, dann bei einem bestimmten Breakpoint eine Seitenleiste hinzufügen und schließlich ein Dreispaltenlayout für breitere Bildschirme einführen.

![Bild der drei verschiedenen Layouts, die durch Neudefinition unseres Rasters an zwei Breakpoints erstellt werden.](11-responsive-areas.png)

Wir werden dieses Layout unter Verwendung der _benannten Template-Bereiche_ erstellen, die wir im Leitfaden _[Grid template areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)_ kennengelernt haben.

Das Markup ist ein Container mit Elementen für einen Kopfbereich, einen Fußbereich, Hauptinhalt, Navigation, eine Seitenleiste und einen Block zur Platzierung von Werbung.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}

.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

```html
<div class="wrapper">
  <header class="main-head">The header</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>Main article area</h1>
    <p>
      In this layout, we display the areas in source order for any screen less
      that 500 pixels wide. We go to a two column layout, and then to a three
      column layout by redefining the grid, and the placement of items on the
      grid.
    </p>
  </article>
  <aside class="side">Sidebar</aside>
  <div class="ad">Advertising</div>
  <footer class="main-footer">The footer</footer>
</div>
```

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen, müssen wir außerhalb von Medienabfragen die Bereiche benennen. Wir benennen die Bereiche mit der Eigenschaft {{cssxref("grid-area")}}.

```css
.main-head {
  grid-area: header;
}
.content {
  grid-area: content;
}
.main-nav {
  grid-area: nav;
}
.side {
  grid-area: sidebar;
}
.ad {
  grid-area: ad;
}
.main-footer {
  grid-area: footer;
}
```

Dies wird noch kein Layout erstellen, jedoch haben die Elemente jetzt Namen, die wir dazu verwenden können. Wir werden das Layout für die Mobilbreite außerhalb von Medienabfragen einrichten. Hier belassen wir alles in der Reihenfolge der Quelle, um jede Trennung zwischen Quelle und Anzeige zu vermeiden, wie im Leitfaden _[Rasterlayout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)_ beschrieben. Wir haben keine Spalten- oder Zeilenbahnen definiert, aber dieses Layout sieht eine einzelne Kolumne vor, und Zeilen werden nach Bedarf für jedes der Elemente im impliziten Raster erstellt.

```css
.wrapper {
  display: grid;
  gap: 20px;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "sidebar"
    "ad"
    "footer";
}
```

Mit unserem mobilen Layout können wir nun eine [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) hinzufügen, um dieses Layout an größere Bildschirme anzupassen, die genug Platz bieten, um zwei Spalten anzuzeigen.

```css
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "nav     nav"
      "sidebar content"
      "ad      footer";
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
```

Sie können das entstehende Layout im Wert von {{cssxref("grid-template-areas")}} sehen. Der `header` erstreckt sich über zwei Spaltenbahnen, ebenso die `nav`. In der dritten Zeilenbahn befindet sich die `sidebar` neben dem `content`. In der vierten Zeilenbahn habe ich den `ad`-Inhalt platziert – so erscheint er unter der Seitenleiste, dann der `footer` daneben unter dem Inhalt. Wir verwenden ein Flexbox für die Navigation, um es in einer Zeile verteilt anzuzeigen.

Wir können jetzt einen letzten Breakpoint hinzufügen, um zu einem Dreispaltenlayout überzugehen.

```css
@media (min-width: 700px) {
  .wrapper {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header  header"
      "nav    content sidebar"
      "nav    content ad"
      "footer footer  footer";
  }
  nav ul {
    flex-direction: column;
  }
}
```

Das Dreispaltenlayout verfügt über zwei Spalten mit der Breite `1fr` und eine mittlere Spalte mit `4fr` als Bahngröße. Das bedeutet, dass der verfügbare Platz im Container in 6 Teile aufgeteilt und im Verhältnis zu unseren drei Bahnen zugewiesen wird – ein Teil jeweils an die Seitenkolumnen und 4 Teile an die Mitte.

In diesem Layout wird die `nav` in der linken Kolumne zusammen mit dem `content` angezeigt. In der rechten Kolumne befinden sich die `sidebar` und darunter die Werbung (`ad`). Der `footer` erstreckt sich nun über die gesamte untere Fläche des Layouts. Ich verwende dann eine Flexbox, um die Navigation als Kolumne anzuzeigen.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '500') }}

Dies ist ein einfaches Beispiel, zeigt aber, wie Sie ein Rasterlayout verwenden können, um Ihr Layout für verschiedene Breakpoints neu anzuordnen. Insbesondere ändern wir die Platzierung des `ad`-Blocks in meinen verschiedenen Kolumnen-Setups, wie es angemessen ist. Diese Methode der benannten Bereiche finde ich in der Prototypenphase sehr hilfreich, da es einfach ist, mit der Platzierung von Elementen zu spielen. Sie könnten jederzeit beginnen, Raster auf diese Weise zum Prototyping zu verwenden, auch wenn Sie sich beim Einsatz in der Produktion nicht vollständig darauf verlassen können, da die Browser, die Ihre Website besuchen, dies möglicherweise nicht unterstützen.

## Ein flexibles 12-Spalten-Layout

Wenn Sie mit einem der vielen Frameworks oder Rastersysteme gearbeitet haben, könnten Sie es gewohnt sein, Ihre Seite auf einem flexiblen 12- oder 16-Spalten-Raster aufzubauen. Wir können dieses System mit CSS-Rasterlayout erstellen. Als einfaches Beispiel lassen Sie uns ein flexibles 12-Spalten-Raster erstellen, das 12 `1fr`-Spaltenbahnen hat, alle benannte Startlinie `col-start`. Das bedeutet, dass wir zwölf Rasternlinien mit dem Namen `col-start` haben werden.

```css hidden
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}
.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Um zu demonstrieren, wie dieses Rastersystem funktioniert, habe ich vier Kind-Elemente in meinem Wrapper.

```html
<div class="wrapper">
  <div class="item1">Start column line 1, span 3 column tracks.</div>
  <div class="item2">
    Start column line 6, span 4 column tracks. 2 row tracks.
  </div>
  <div class="item3">Start row 2 column line 2, span 2 column tracks.</div>
  <div class="item4">
    Start at column line 3, span to the end of the grid (-1).
  </div>
</div>
```

Wir können sie dann auf dem Raster unter Verwendung der benannten Linien und des Schlüsselworts Span platzieren.

```css
.item1 {
  grid-column: col-start / span 3;
}
.item2 {
  grid-column: col-start 6 / span 4;
  grid-row: 1 / 3;
}
.item3 {
  grid-column: col-start 2 / span 2;
  grid-row: 2;
}
.item4 {
  grid-column: col-start 3 / -1;
  grid-row: 3;
}
```

{{ EmbedLiveSample('A_flexible_12-column_layout', '800', '400') }}

Wie im [Leitfaden zu benannten Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannte Linie, um unser Element zu platzieren. Da wir 12 Linien mit demselben Namen haben, verwenden wir den Namen und dann den Index der Linie. Sie könnten auch den Linienindex selbst verwenden, wenn Sie es vorziehen, und benannte Linien ganz vermeiden.

Anstatt die Endliniennummer festzulegen, habe ich mich entschieden zu sagen, wie viele Bahnen dieses Element überspannen sollte, unter Verwendung des `span`-Schlüsselwortes. Mir gefällt dieser Ansatz, da wir beim Arbeiten mit einem System mit mehreren Spaltenlayout üblicherweise Blöcke in Bezug auf die Anzahl der Bahnen des Rasters, die sie überspannen, betrachten und dies für verschiedene Breakpoints anpassen. Um zu sehen, wie die Blöcke sich an die Bahnen anpassen, verwenden Sie den [Firefox-Rasterinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html). Es zeigt deutlich, wie unsere Elemente platziert sind.

![Das Bild zeigt, wie die Elemente auf dem Raster mit markierten Rasterbahnen platziert sind.](11-grid-inspector-12col.png)

Es gibt einige wesentliche Unterschiede, wie ein Rasterlayout im Vergleich zu den Rastersystemen funktioniert, die Sie möglicherweise zuvor verwendet haben. Wie Sie sehen können, müssen wir kein Markup hinzufügen, um eine Zeile zu erstellen, Rastersysteme müssen dies tun, um zu verhindern, dass Elemente in die darüberliegende Zeile "springen". Mit CSS-Rasterlayout können wir Dinge in Zeilen platzieren, ohne dass die Gefahr besteht, dass sie in die darüberliegende Zeile hochgezogen werden, wenn diese leer ist. Aufgrund dieser _strikten_ Spalten- und Zeilenplatzierung können wir auch leicht Leerraum in unserem Layout lassen. Außerdem benötigen wir keine speziellen Klassen, um Dinge zu ziehen oder zu schieben, um sie im Raster einzurücken. Alles, was wir tun müssen, ist, die Start- und Endlinie für das Element zu spezifizieren.

## Ein Layout mit dem 12-Spalten-System erstellen

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, können wir dasselbe Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal jedoch mit dem 12-Spalten-Rastersystem. Lassen Sie uns mit demselben Markup beginnen, das für das Grid-Template-Bereiche-Beispiel verwendet wurde.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}

.wrapper > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

```html
<div class="wrapper">
  <header class="main-head">The header</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>Main article area</h1>
    <p>
      In this layout, we display the areas in source order for any screen less
      that 500 pixels wide. We go to a two column layout, and then to a three
      column layout by redefining the grid, and the placement of items on the
      grid.
    </p>
  </article>
  <aside class="side">Sidebar</aside>
  <div class="ad">Advertising</div>
  <footer class="main-footer">The footer</footer>
</div>
```

Wir können dann unser Raster einrichten, wie im obigen Beispiel des 12-Spalten-Layouts.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden dies erneut zu einem responsiven Layout machen, diesmal jedoch unter Verwendung benannter Linien. Jeder Breakpoint wird ein 12-Spalten-Raster verwenden, jedoch ändert sich die Anzahl der Bahnen, die die Elemente überspannen, je nach Größe des Bildschirms.

Wir starten mobil zuerst, und alles, was wir für die schmalsten Bildschirme wollen, ist, dass die Elemente in Quellreihenfolge bleiben und sich über das gesamte Raster erstrecken.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Am nächsten Breakpoint möchten wir zu einem Zweispaltenlayout wechseln. Unser Header und die Navigation erstrecken sich weiterhin über das gesamte Raster, daher müssen wir keine Positionierung für sie angeben. Die Seitenleiste beginnt auf der ersten Spaltenlinie namens col-start, umspannt 3 Linien. Sie befindet sich nach Zeilenlinie 3, da der Header und die Navigation in den ersten beiden Zeilenbahnen sind.

Das Anzeigefeld befindet sich unter der Seitenleiste, beginnt also an der Rasterzeilenlinie 4. Dann haben wir den Inhalt und den Footer, der bei col-start 4 beginnt und 9 Bahnen überspannt, die sie bis zum Ende des Rasters bringen.

```css
@media (min-width: 500px) {
  .side {
    grid-column: col-start / span 3;
    grid-row: 3;
  }
  .ad {
    grid-column: col-start / span 3;
    grid-row: 4;
  }
  .content,
  .main-footer {
    grid-column: col-start 4 / span 9;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
```

Schließlich gehen wir zur dreispaltigen Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Raster, aber jetzt bewegt sich die Navigation nach unten, um die erste Seitenleiste zu werden, mit dem Inhalt und dann die Seitenleiste daneben. Der Footer erstreckt sich nun auch über das gesamte Layout.

```css
@media (min-width: 700px) {
  .main-nav {
    grid-column: col-start / span 2;
    grid-row: 2 / 4;
  }
  .content {
    grid-column: col-start 3 / span 8;
    grid-row: 2 / 4;
  }
  .side {
    grid-column: col-start 11 / span 2;
    grid-row: 2;
  }
  .ad {
    grid-column: col-start 11 / span 2;
    grid-row: 3;
  }
  .main-footer {
    grid-column: col-start / span 12;
  }
  nav ul {
    flex-direction: column;
  }
}
```

{{ EmbedLiveSample('Building_a_layout_using_the_12-column_system', '800', '450') }}

Einmal mehr ist der [Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) nützlich, um uns zu helfen zu sehen, wie unser Layout Form angenommen hat.

![Das Bild zeigt das Layout mit den vom Rasterinspektor markierten Rasterbahnen.](11-grid-inspector-12col-layout.png)

Etwas, das zu beachten ist, während wir dieses Layout erstellen, ist, dass wir nicht jedes Element explizit an jedem Breakpoint auf dem Raster positionieren mussten. Wir konnten die Platzierung übernehmen, die für frühere Breakpoints eingerichtet wurde – ein Vorteil des Arbeitens "mobil zuerst". Wir können auch die automatische Platzierung des Rasters nutzen. Indem wir die Elemente in einer logischen Reihenfolge halten, erledigt die automatische Platzierung viel Arbeit für uns, indem sie Elemente auf dem Raster platziert. Im letzten Beispiel in diesem Leitfaden werden wir ein Layout erstellen, das vollständig auf automatischer Platzierung beruht.

## Eine Produktauflistung mit automatischer Platzierung

Viele Layouts sind im Grunde "Karten"-Sets – Produktlisten, Bildergalerien und so weiter. Ein Raster kann es sehr einfach machen, diese Auflistungen auf eine Weise zu erstellen, die responsiv ist, ohne dass Sie dazu [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) hinzufügen müssen, um es so zu machen. Im nächsten Beispiel kombiniere ich CSS-Raster und Flexbox-Layouts, um ein einfaches Produktlistenlayout zu erstellen.

Das Markup für meine Liste ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, etwas Text unterschiedlicher Höhe und einen Aufruf-zur-Aktion-Link.

```html
<ul class="listing">
  <li>
    <h2>Item One</h2>
    <div class="body">
      <p>The content of this listing item goes here.</p>
    </div>
    <div class="cta">
      <a href="">Call to action!</a>
    </div>
  </li>
  <li>
    <h2>Item Two</h2>
    <div class="body">
      <p>The content of this listing item goes here.</p>
    </div>
    <div class="cta">
      <a href="">Call to action!</a>
    </div>
  </li>
  <li class="wide">
    <h2>Item Three</h2>
    <div class="body">
      <p>The content of this listing item goes here.</p>
      <p>This one has more text than the other items.</p>
      <p>Quite a lot more</p>
      <p>Perhaps we could do something different with it?</p>
    </div>
    <div class="cta">
      <a href="">Call to action!</a>
    </div>
  </li>
  <li>
    <h2>Item Four</h2>
    <div class="body">
      <p>The content of this listing item goes here.</p>
    </div>
    <div class="cta">
      <a href="">Call to action!</a>
    </div>
  </li>
  <li>
    <h2>Item Five</h2>
    <div class="body">
      <p>The content of this listing item goes here.</p>
    </div>
    <div class="cta">
      <a href="">Call to action!</a>
    </div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
body {
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}
a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 20px;
}
```

Wir werden ein Raster mit einer flexiblen Anzahl flexibler Spalten erstellen. Ich möchte, dass sie nie kleiner als 200 Pixel werden und dann den verfügbaren verbleibenden Platz gleichmäßig teilen – sodass wir immer Spaltenbahnen gleicher Breite erhalten. Wir erreichen dies mit der `minmax()`-Funktion in unserer Wiederholungsnotation für die Bahngröße.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Sobald wir dieses CSS hinzufügen, beginnen die Elemente, sich als Raster anzuordnen. Wenn wir das Fenster kleiner oder breiter machen, ändert sich die Anzahl der Spaltenbahnen – ohne dass wir Breakpoints mit Medienabfragen hinzufügen und das Raster neu definieren müssen.

Wir können dann das Innere der Boxen mit einem kleinen Touch von Flexbox bereinigen. Ich setze das Listenelement auf `display: flex` und die `flex-direction` auf `column`. Wir können dann einen automatischen Rand auf `.cta` verwenden, um diese Leiste nach unten in die Box zu schieben.

```css
.listing li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing .cta {
  margin-top: auto;
  border-top: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.listing .body {
  padding: 10px;
}
```

Dies ist wirklich einer der Hauptgründe, warum jemand Flexbox anstelle von Grid verwenden würde, wenn er entweder etwas in einer einzigen Dimension ausrichtet oder verteilt, dann ist das ein Flexbox-Anwendungsfall.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Verhindern von Lücken mit dem dichten Schlüsselwort

Das sieht jetzt ziemlich vollständig aus, wir haben jedoch manchmal diese Karten, die viel mehr Inhalt enthalten als die anderen. Es könnte schön sein, diese zwei Bahnen überspannen zu lassen, und dann wären sie nicht so hoch. Wir haben eine Klasse von `wide` auf meinem größeren Element, und wir fügen eine Regel {{cssxref("grid-column-end")}} mit dem Wert `span 2` hinzu. Jetzt, wenn das Raster auf dieses Element stößt, wird es ihm zwei Bahnen zuweisen. An manchen Breakpoints bedeutet das, dass wir eine Lücke im Raster bekommen – wo kein Platz ist, um ein Zwei-Bahn-Element anzuordnen.

![Das Layout hat Lücken, weil kein Platz ist, um ein Zwei-Bahnen-Element anzuordnen.](11-grid-auto-flow-sparse.png)

Wir können veranlassen, dass ein Raster diese Lücken auffüllt, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Rastercontainer setzen. Achten Sie jedoch darauf, dies zu tun, da es Elemente aus ihrer logischen Quellreihenfolge herausnimmt. Sie sollten dies nur tun, wenn Ihre Elemente keine feste Reihenfolge haben – und seien Sie sich der [Probleme](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering) bewusst, da die Tab-Reihenfolge der Quelle folgt und Ihr neu geordnetes Display nicht.

```html hidden
<ul class="listing">
  <li>
    <h2>Item One</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Two</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li class="wide">
    <h2>Item Three</h2>
    <div class="body">
      <p>The content of this listing item goes here.</p>
      <p>This one has more text than the other items.</p>
      <p>Quite a lot more</p>
      <p>Perhaps we could do something different with it?</p>
    </div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Four</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
  <li>
    <h2>Item Five</h2>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
body {
  font:
    1.2em Helvetica,
    arial,
    sans-serif;
}
a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 20px;
}

.listing li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing .cta {
  margin-top: auto;
  border-top: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.listing .body {
  padding: 10px;
}
```

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.listing .wide {
  grid-column-end: span 2;
}
```

{{ EmbedLiveSample('Preventing_gaps_with_the_dense_keyword', '800', '900') }}

Diese Technik der Verwendung von automatischer Platzierung mit einigen Regeln, die auf bestimmte Elemente angewendet werden, ist sehr nützlich und kann Ihnen bei der Bearbeitung von Inhalt helfen, der zum Beispiel von einem CMS ausgegeben wird, bei dem Sie wiederholte Elemente haben und möglicherweise einer bestimmten Klasse hinzufügen können, während sie in das HTML gerendert werden.

## Weitere Erkundung

Der beste Weg, um das Rasterlayout zu erlernen, besteht darin, weiterhin Beispiele wie die durchzugehen, die wir hier behandelt haben. Wählen Sie etwas, das Sie normalerweise mit Ihrem bevorzugten Framework oder mit Floats bauen, und sehen Sie, ob Sie es mit einem Raster erstellen können. Vergessen Sie nicht, nach Beispielen zu suchen, die mit den aktuellen Methoden unmöglich zu bauen sind. Das könnte bedeuten, sich von Magazinen oder anderen Nicht-Web-Quellen inspirieren zu lassen. Das Rasterlayout eröffnet Möglichkeiten, die wir bisher nicht hatten, wir müssen uns nicht an die gleichen alten Layouts binden, um es zu verwenden.

- [CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS-Layout: Raster](/de/docs/Learn/CSS/CSS_layout/Grids)
- [Ein vollständiger Leitfaden zu CSS-Raster](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS-Raster-Website-Layout-Beispiele](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
