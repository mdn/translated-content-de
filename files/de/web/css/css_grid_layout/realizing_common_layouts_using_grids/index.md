---
title: Umsetzung gängiger Layouts mit Grids
short-title: Gängige Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Um dieses [Set von CSS-Grid-Layout-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) abzurunden, werden wir uns einige verschiedene Layouts ansehen, die einige der Techniken demonstrieren, die Sie beim Design mit Grid-Layout verwenden können. Wir schauen uns ein Beispiel mit {{cssxref("grid-template-areas")}}, einem flexiblen 12-Spalten-Grid-System und einer Produktliste mit Auto-Platzierung an. Wie Sie an diesem Set von Beispielen sehen, gibt es oft mehr als einen Weg, um mit CSS-Grid-Layout die gewünschten Ergebnisse zu erzielen. Wählen Sie die Methode, die Ihnen am hilfreichsten erscheint für die Probleme, die Sie lösen müssen, und die Designs, die Sie umsetzen wollen.

## Ein responsives Layout mit 1 bis 3 flüssigen Spalten unter Verwendung von `grid-template-areas`

Viele Websites sind eine Variation dieses Layouts mit Inhalt, Seitenleisten, einem Header und einem Footer. In einem responsiven Design möchten Sie das Layout möglicherweise als eine einzelne Spalte anzeigen, eine Seitenleiste ab einem bestimmten Breakpoint hinzufügen und dann ein Drei-Spalten-Layout für breitere Bildschirme einführen.

![Drei verschiedene Layouts, erstellt durch Umdefinierung des Grids bei zwei Breakpoints.](11-responsive-areas.png)

Wir werden dieses Layout mit den _benannten Template-Bereichen_ erstellen, die wir im [Grid-Template-Areas-Leitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) kennengelernt haben.

Das Markup ist ein Container mit Elementen für einen Header, Footer, Hauptinhalt, Navigation, Seitenleiste und einen Block für Werbung.

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

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen, müssen wir die Bereiche außerhalb jeglicher [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benennen. Wir benennen Bereiche mit der Eigenschaft {{cssxref("grid-area")}}.

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

Dies erstellt noch kein Layout. Vielmehr haben die Elemente nun Namen, die wir dafür verwenden können. Ohne jegliche Media-Queries richten wir nun das Layout für die mobile Breite ein. Hier behalten wir alles in der Quellreihenfolge, um jegliche Trennung zwischen Quelle und Anzeige zu vermeiden, wie im [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)-Leitfaden beschrieben. Wir haben keine Spalten- oder Zeilenraster explizit definiert; dieses Layout bestimmt eine einzelne Spalte und erstellt bei Bedarf Zeilen für jedes Element im impliziten Grid.

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

Mit unserem mobilen Layout können wir nun eine {{cssxref("@media")}}-Abfrage hinzufügen, um das Layout für größere Bildschirme anzupassen, die genügend Platz haben, um zwei Spalten anzuzeigen.

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

Sie können das Layout in den Werten von {{cssxref("grid-template-areas")}} erkennen. Der `header` erstreckt sich über zwei Spaltenraster, ebenso wie die `nav`. Im dritten Reihenraster platzieren wir die `sidebar` neben dem `content`. Wir platzieren den `ad`-Inhalt im vierten Reihenraster, damit er unter der Sidebar erscheint. Der `footer` ist daneben unter dem Inhalt. Wir verwenden die [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) auf der Navigation, um die Navigationselemente gleichmäßig in einer Zeile zu verteilen.

Wir können nun einen letzten Breakpoint für größere Bildschirme zum Anzeigen eines Drei-Spalten-Layouts hinzufügen.

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

Das Drei-Spalten-Layout hat zwei `1fr`-Einheit-Seitenspalten und eine mittlere Spalte mit `4fr` als Rastergröße. Dies bedeutet, dass der verfügbare Platz im Container in sechs Teile geteilt und in Proportion zu unseren drei Rastern zugewiesen wird — ein Teil für jede der Seitenspalten und vier Teile für die Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte neben dem `content`. In der rechten Spalte haben wir die `sidebar` und darunter die Anzeigen (`ad`). Der `footer` erstreckt sich nun über den gesamten unteren Bereich des Layouts. Auch hier verwenden wir Flexbox, um die Navigation anzuzeigen, diesmal jedoch in einer Spalte statt einer Zeile.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

Dieses einfache Beispiel zeigt, wie ein Grid-Layout über verschiedene Breakpoints neu angeordnet werden kann. Besonders wichtig ist dabei, dass wir den Standort des `ad`-Blocks je nach Bedarf in unseren unterschiedlichen Spalten-Setups ändern. Diese Methode mit benannten Bereichen kann sehr hilfreich sein, insbesondere in der Prototyping-Phase. Möglicherweise finden Sie es einfacher, Namen anstelle von Zahlen zu verwenden, wenn Sie mit der Platzierung von Elementen im Grid spielen.

## Ein flexibles 12-Spalten-Layout

CSS-Frameworks und Grid-Systeme verwenden häufig 12- oder 16-Spalten flexible Grids. Wir können diese Art von System mit CSS-Grid-Layout erstellen. Als Beispiel erstellen wir ein 12-Spalten-flexibles Grid mit 12 `1fr`-Einheiten-Spaltenraster, von denen jede einen Startliniennamen `col-start` hat. Das bedeutet, dass wir zwölf Gridlinien mit dem Namen `col-start` haben werden.

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

Um zu zeigen, wie dieses Gitter funktioniert, haben wir vier Kindelemente in einem Wrapper.

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

Wir können diese dann auf dem Grid mit den benannten Linien und auch dem `span`-Schlüsselwort platzieren.

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

Wie im [Leitfaden zur Verwendung benannter Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannten Linien, um unsere Elemente zu platzieren. Da wir 12 Linien mit demselben Namen haben, verwenden wir den Namen und den Index der Linie. Wenn Sie es bevorzugen, können Sie den Linienindex selbst verwenden und auf benannte Linien verzichten.

Anstatt die Endliniennummer festzulegen, definieren wir, wie viele Raster dieses Element mit dem `span`-Schlüsselwort umfassen soll. Bei der Arbeit mit einem Mehrspalten-Layout-System kann diese Methode für diejenigen intuitiver sein, die Blöcke in Bezug auf die Anzahl der Raster, die sie überspannen, betrachten und diese dann für verschiedene Breakpoints anpassen. Um zu sehen, wie die Blöcke sich an den Rastern ausrichten, verwenden Sie den Grid-Inspector in den Entwickler-Tools Ihres Browsers; dieser zeigt wahrscheinlich klar, wie die Elemente platziert sind.

![Zeigt die auf dem Grid platzierten Elemente mit hervorgehobenen Grid-Tracks in den Firefox-Entwickler-Tools.](11-grid-inspector-12col.png)

Wir müssen kein Markup hinzufügen, um eine Zeile zu erstellen. CSS-Framework-Grid-Systeme haben das oft getan, um zu verhindern, dass Elemente in die darüberliegende Zeile auftauchen, für Browser, die das CSS-Grid-Layout nicht unterstützen. Dieser Punkt ist jedoch mittlerweile hinfällig – alle modernen Browser unterstützen CSS-Grid-Layout schon lange. CSS-Grids ermöglichen es uns, Elemente in Zeilen zu platzieren, ohne dass die Gefahr besteht, dass sie in die darüberliegende Zeile geraten, wenn diese leer ist. Aufgrund dieser _strengen_ Spalten- und Zeilenplatzierung können wir auch leicht Leerraum in unserem Layout lassen. Wir benötigen auch keine speziellen Klassen, um Elemente in das Grid einzurücken. Alles, was wir tun müssen, ist, die Start- und Endlinie für das Element anzugeben.

## Erstellung eines Layouts mit dem 12-Spalten-System

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, können wir dasselbe Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal jedoch mit dem 12-Spalten-Gittersystem. Beginnen wir mit demselben Markup wie beim Beispiel für die Grid-Template-Bereiche.

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

Wir richten unser Grid wie im obigen Beispiel für das 12-Spalten-Layout ein.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden erneut ein responsives Layout erstellen, diesmal mit benannten Linien. Jeder Breakpoint wird ein 12-Spalten-Grid verwenden. Die Anzahl der Raster, die Elemente umfassen, wird sich jedoch abhängig von der Größe des Bildschirms ändern.

Wir beginnen {{Glossary("mobile_first", "mobil zuerst")}}. Für die schmalsten Bildschirme sollen die Elemente in der Quellreihenfolge bleiben und sich über das gesamte Grid erstrecken.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Am nächsten Breakpoint wollen wir ein Zwei-Spalten-Layout. Unser Header und die Navigation erstrecken sich weiterhin über das gesamte Grid, daher müssen wir für diese keine Positionierung angeben. Die Seitenleiste beginnt an der ersten als `col-start` benannten Spaltenlinie und erstreckt sich über 3 Linien. Sie folgt auf die Zeilenlinie 3, da Header und Navigation in den ersten beiden Zeilenraster sind.

Das `ad`-Panel befindet sich unter der Seitenleiste, beginnend bei Grid-Zeilenlinie 4. Dann haben wir den Inhalt und den Footer, beginnend bei col-start 4 und sich über neun Raster erstreckend, beide bis zum Ende des Grids.

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

Schließlich definieren wir für größere Bildschirme als unser größter Breakpoint eine Drei-Spalten-Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Grid, aber jetzt bewegt sich die Navigation nach unten, um die erste Seitenleiste zu werden, mit dem Inhalt und dann der Seitenleiste daneben. Der Footer erstreckt sich nun ebenfalls über das gesamte Layout.

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

{{ EmbedLiveSample('Building_a_layout_using_the_12-column_system', '800', '570') }}

Überprüfen Sie erneut den Grid-Inspector in den Entwickler-Tools Ihres Browsers, um zu sehen, wie sich das Layout entwickelt hat.

![Zeigt das Layout mit vom Grid-Inspector hervorgehobenen Grid-Tracks.](11-grid-inspector-12col-layout.png)

Etwas zu beachten, als wir dieses Layout erstellten, ist, dass wir nicht jedes Element im Grid an jedem Breakpoint explizit positionieren mussten. Wir erbten die für frühere Breakpoints eingerichtete Platzierung – ein Vorteil der Arbeit "mobil zuerst". Wir nutzten auch die automatische Platzierung von Grids. Durch das Halten von Elementen in einer logischen Reihenfolge erledigt die automatische Platzierung einen großen Teil der Arbeit für uns bei der Platzierung von Elementen im Grid.

## Eine Produktliste mit Auto-Platzierung

In diesem letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das sich vollständig auf die Auto-Platzierung verlässt.

Viele Layouts bestehen im Wesentlichen aus Sätzen von "Karten" – Produktlisten, Bildergalerien und so weiter. Ein Grid ermöglicht das Erstellen dieser Listen auf eine Weise, die responsiv ist, ohne [Media-Queries](/de/docs/Web/CSS/CSS_media_queries) hinzuzufügen. In diesem Beispiel kombinieren wir CSS-Grid- und Flexbox-Layouts, um ein einfaches Produktlistenlayout zu erstellen.

Das Markup für die Liste ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, einen Text mit variierender Höhe und einen Call-to-Action-Link.

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

Wir erstellen ein Grid mit einer flexiblen Anzahl flexibler Spalten. Wir möchten, dass sie mindestens 200 Pixel breit sind und jeglichen verfügbaren verbleibenden Platz gleichmäßig teilen – so erhalten wir immer Spaltenraster mit gleicher Breite. Wir erreichen dies mit der {{cssxref("minmax()")}}-Funktion in unserer {{cssxref("repeat")}}-Notation für die Rastergröße.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Wenn wir dieses CSS hinzufügen, werden die Elemente als Grid angeordnet. Wenn wir das Fenster verkleinern oder vergrößern, ändert sich die Anzahl der Spaltenraster – ohne Media-Queries, die Breakpoints hinzufügen, und ohne dass wir das Grid neu definieren müssen.

Wir können das Innere der Kästchen mit einem Hauch von Flexbox aufräumen. Wir setzen das Listenelement auf `display: flex` und die {{cssxref("flex-direction")}} auf `column`. Wir können dann einen automatischen Abstand auf der `.cta` verwenden, um diese Leiste nach unten an den Rand des Kastens zu schieben.

```css
.listing li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing .cta {
  margin-block-start: auto;
  border-block-start: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.listing .body {
  padding: 10px;
}
```

Dies ist einer der Hauptgründe, Flexbox anstelle von CSS-Grid-Layout zu verwenden. Wenn Sie Inhalt in einer einzelnen Dimension ausrichten oder verteilen, ist das ein Anwendungsfall für Flexbox.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Vermeidung von Lücken mit dem dense-Schlüsselwort

Das Ganze sieht jetzt ziemlich komplett aus. Manchmal haben wir jedoch Karten, die weitaus mehr Inhalt enthalten als die anderen. Es könnte schön sein, diese über zwei Raster zu erstrecken, damit sie nicht so hoch sind. Wir fügen eine `wide`-Klasse zu dem größeren Element hinzu und fügen eine Regel hinzu, die ihm ein {{cssxref("grid-column-end")}} mit einem Wert von `span 2` gibt. Wenn dieses Element angezeigt wird, wird es zwei Raster zugewiesen. Dies bedeutet, dass wir an einigen Breakpoints eine Lücke im Grid haben werden – wenn nicht genug Platz vorhanden ist, um ein Zweiraster-Element anzuordnen.

![Das Layout hat Lücken, da kein Platz vorhanden ist, um ein Zweiraster-Element anzuordnen.](11-grid-auto-flow-sparse.png)

Wir können das Grid dazu bringen, diese Lücken aufzufüllen, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} im Grid-Container verwenden. Seien Sie vorsichtig, wenn Sie dies tun, da es dazu führen kann, dass Elemente aus ihrer logischen Quellreihenfolge genommen werden. Sie sollten dies nur tun, wenn Ihre Elemente keine festgelegte Reihenfolge haben. Außerdem sollten Sie sich der [Barrierefreiheits- und Neuordnungsprobleme](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering) bewusst sein, die sich daraus ergeben, dass die Tabulatorreihenfolge der Quelle und nicht Ihrer neu geordneten Anzeige folgt.

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
  margin-block-start: auto;
  border-block-start: 1px solid #ffe066;
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

Die Verwendung der Auto-Platzierung mit einigen Regeln, die auf bestimmte Elemente angewendet werden, ist sehr nützlich und kann bei Inhalten helfen, die Sie nicht steuern können, wie CMS-Ausgaben, bei denen Sie wiederholte Elemente haben und [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) verwenden können, um sie zu adressieren.

## Weiterführende Erkundung

CSS-Grid-Layout bietet so viele Möglichkeiten. Der beste Weg, um zu lernen, Grid-Layout zu nutzen, besteht darin, weiterhin Beispiele wie die hier behandelten zu erstellen. Wählen Sie ein Layout von einer responsiven Website, die Ihnen gefällt, und sehen Sie, ob Sie es mit Grid erstellen können. Sie können sich sogar von Zeitschriften oder anderen nicht-webbezogenen Quellen inspirieren lassen.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [A complete guide to CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS grid website layout examples](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
