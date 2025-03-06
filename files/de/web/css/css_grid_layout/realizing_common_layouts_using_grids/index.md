---
title: Umsetzen gängiger Layouts mit Grids
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: 092eccc1ac960be3ef01cb2c04edd26cec82c423
---

{{CSSRef}}

Um diese [Reihe von CSS-Grid-Layout-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) abzurunden, werden wir einige verschiedene Layouts durchgehen, die einige der Techniken demonstrieren, die Sie bei der Gestaltung mit Grid-Layout verwenden können. Wir werden uns ein Beispiel mit {{cssxref("grid-template-areas")}}, einem flexiblen 12-Spalten-Raster, und einer Produktliste mit automatischer Platzierung ansehen. Wie Sie an diesen Beispielen sehen können, gibt es oft mehr als einen Weg, um die gewünschten Ergebnisse mit CSS-Grid-Layout zu erzielen. Wählen Sie die Methode, die Sie für die Probleme, die Sie lösen, und die Designs, die Sie umsetzen müssen, am hilfreichsten finden.

## Ein responsives Layout mit 1 bis 3 flüssigen Spalten unter Verwendung von `grid-template-areas`

Viele Websites sind eine Variation dieses Layouttyps, mit Inhalten, Seitenleisten, einem Header und einem Footer. In einem responsiven Design möchten Sie das Layout möglicherweise als einspaltiges Layout anzeigen, eine Seitenleiste bei einem bestimmten Breakpoint hinzufügen und dann auf breiteren Bildschirmen ein dreispaltiges Layout einführen.

![drei verschiedene Layouts, erstellt durch Neudefinition des Grids bei zwei Breakpoints.](11-responsive-areas.png)

Wir werden dieses Layout mithilfe der _benannten Vorlagenbereiche_ erstellen, die wir im [Grid-Vorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) Leitfaden kennengelernt haben.

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

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen, müssen wir die Bereiche außerhalb einer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benennen. Wir benennen Bereiche mit der {{cssxref("grid-area")}} Eigenschaft.

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

Dies erstellt kein Layout. Vielmehr haben die Elemente nun Namen, die wir verwenden können, um es zu erstellen. Bleibend außerhalb von Media Queries werden wir nun das Layout für die mobile Breite einrichten. Hier behalten wir alles in der Quellreihenfolge, um jegliche Trennung zwischen Quelle und Anzeige zu vermeiden, wie im [Grid Layout und Zugänglichkeit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) Leitfaden beschrieben. Wir haben keine Spalten- oder Zeilenabschnitte explizit definiert; dieses Layout diktiert eine Einzelspalte und erstellt nach Bedarf Zeilen für jedes Element im impliziten Raster.

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

Mit unserem mobilen Layout können wir nun eine {{cssxref("@media")}}-Abfrage hinzufügen, um dieses Layout an größere Bildschirme mit ausreichend Platz anzupassen, um zwei Spalten anzuzeigen.

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

Sie können das Layout in dem Wert von {{cssxref("grid-template-areas")}} erkennen. Der `header` erstreckt sich über zwei Spaltenstrecken, ebenso wie die `nav`. In der dritten Zeilenstrecke platzieren wir die `sidebar` neben dem `content`. Der `ad`-Inhalt wird in der vierten Zeilenstrecke platziert, sodass er unter der Seitenleiste erscheint. Der `footer` befindet sich daneben unter dem Inhalt. Wir verwenden das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) auf der Navigation, um die Navigationselemente gleichmäßig in einer Reihe zu verteilen.

Wir können jetzt einen letzten Breakpoint für breitere Bildschirme hinzufügen, die ein dreispaltiges Layout anzeigen können.

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

Das dreispaltige Layout verfügt über zwei `1fr`-Einheiten-Seitenspalten und eine mittlere Spalte, deren Streckengröße `4fr` beträgt. Das bedeutet, dass der verfügbare Platz im Container in sechs Teile aufgeteilt und entsprechend den drei Strecken zugewiesen wird - ein Teil für jede Seitenspalte und vier Teile für die Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte zusammen mit dem `content`. In der rechten Spalte haben wir die `sidebar` und darunter die Anzeigen (`ad`). Der `footer` erstreckt sich nun über den gesamten Boden des Layouts. Auch hier verwenden wir Flexbox zur Darstellung der Navigation, zeigen sie diesmal jedoch als Spalte statt als Reihe an.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

Dieses einfache Beispiel zeigt, wie ein Grid-Layout über verschiedene Breakpoints umgestellt werden kann. Insbesondere ändern wir den Standort des `ad`-Blocks, wie es für unsere verschiedenen Spaltenanordnungen angemessen ist. Diese Methode mit benannten Bereichen kann besonders hilfreich sein, insbesondere in der Prototyping-Phase. Sie finden es möglicherweise einfacher, Namen statt Zahlen zu verwenden, wenn Sie mit der Position von Elementen im Grid experimentieren.

## Ein flexibles 12-Spalten-Layout

CSS-Frameworks und -Gridsysteme verwenden häufig flexible 12- oder 16-Spalten-Grids. Wir können dieses System mit CSS-Grid-Layout erstellen. Als Beispiel erstellen wir ein flexibles 12-Spalten-Grid mit 12 `1fr`-Einheiten-Säulenstrecken, jede mit einer Startlinie namens `col-start`. Das bedeutet, dass wir zwölf Grid-Linien namens `col-start` haben werden.

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

Um zu demonstrieren, wie dieses Gridsystem funktioniert, haben wir vier untergeordnete Elemente innerhalb eines Wrappers.

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

Wir können diese dann mithilfe der benannten Linien und des `span`-Schlüsselworts auf das Grid setzen.

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

Wie im [Leitfaden zur Verwendung von benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannten Linien, um unsere Elemente zu platzieren. Da wir 12 Linien mit demselben Namen haben, verwenden wir den Namen und den Index der Linie. Wenn Sie es vorziehen, können Sie auch den Linienindex selbst verwenden und auf die Verwendung von benannten Linien verzichten.

Anstatt die Endlinienneummer festzulegen, definieren wir, über wie viele Strecken sich dieses Element erstrecken soll, indem wir das `span`-Schlüsselwort verwenden. Beim Arbeiten mit einem Mehrspalten-Layoutsystem kann diese Methode intuitiver sein für diejenigen, die in Bezug auf die Anzahl der Grid-Strecken denken, die die Blöcke überspannen sollen, um sie dann an verschiedene Breakpoints anzupassen. Um zu sehen, wie die Blöcke sich den Strecken anpassen, verwenden Sie den Grid-Inspektor in den Entwicklertools Ihres Browsers; es zeigt wahrscheinlich deutlich auf, wie die Elemente platziert sind.

![Zeigt die Elemente, die auf dem Grid mit hervorgehobenen Grid-Strecken in den Firefox-Entwicklungstools platziert sind.](11-grid-inspector-12col.png)

Wir benötigen kein zusätzliches Markup, um eine Zeile zu erstellen. CSS-Framework-Gridsysteme taten dies oft, um zu verhindern, dass Elemente in die darüber liegende Zeile aufsteigen, für Browser, die CSS-Grid-Layout nicht unterstützen. Diese Argumentation ist jedoch jetzt hinfällig – alle modernen Browser unterstützen CSS-Grid-Layout schon seit langem. CSS-Grids ermöglichen es uns, Elemente in Zeilen zu platzieren, ohne dass die Gefahr besteht, dass sie in die darüber liegende Zeile aufsteigen, wenn sie leer ist. Aufgrund dieser _strikten_ Spalten- und Zeilenplatzierung können wir auch leicht Weißräume in unserem Layout lassen. Wir benötigen auch keine speziellen Klassen, um Elemente in das Grid einzurücken. Alles, was wir tun müssen, ist die Start- und Endlinie für das Element festzulegen.

## Erstellung eines Layouts mit dem 12-Spalten-System

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, können wir das gleiche Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal mit dem 12-Spalten-Gridsystem. Lassen Sie uns mit dem gleichen Markup wie im Beispiel der Grid-Vorlagenbereiche beginnen.

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

Wir richten unser Grid ein, wie wir es im Beispiel des 12-Spalten-Layouts oben getan haben.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden dies erneut zu einem responsiven Layout machen, diesmal mit benannten Linien. Jeder Breakpoint wird ein 12-Spalten-Grid verwenden. Die Anzahl der Strecken, über die sich die Elemente erstrecken, ändert sich jedoch je nach Größe des Bildschirms.

Wir beginnen {{Glossary("mobile_first", "mobile first")}}. Für die schmalsten Bildschirme möchten wir, dass die Elemente in Quellreihenfolge bleiben und sich alle über das gesamte Grid erstrecken.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Beim nächsten Breakpoint möchten wir ein Zweispalten-Layout. Unser Header und die Navigation erstrecken sich immer noch über das gesamte Grid, sodass wir keine Positionierung für sie angeben müssen. Die Seitenleiste beginnt an der ersten Spaltenlinie namens `col-start` und erstreckt sich über 3 Linien. Sie folgt der Zeilenlinie 3, da sich der Header und die Navigation in den ersten beiden Zeilenstrecken befinden.

Das `ad`-Panel befindet sich unter der Seitenleiste, beginnend an der Gitterzeilenlinie 4. Dann haben wir den Inhalt und den Footer, beginnend bei col-start 4 und über neun Strecken, bis zum Ende des Grids.

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

Schließlich definieren wir für Bildschirme größer als unser größter Breakpoint eine dreispaltige Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Grid, aber jetzt verschiebt sich die Navigation nach unten, um die erste Seitenleiste zu werden, mit dem Inhalt und dann der Seitenleiste daneben. Der Footer erstreckt sich nun auch über das gesamte Layout.

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

Überprüfen Sie erneut den Grid-Inspektor in Ihren Browser-Entwicklertools, um zu sehen, wie das Layout Gestalt angenommen hat.

![Zeigt das Layout mit Gitternetzstrecken, die vom Grid-Inspektor hervorgehoben werden.](11-grid-inspector-12col-layout.png)

Etwas zu beachten, als wir dieses Layout erstellt haben, ist, dass wir bei jedem Breakpoint nicht explizit jedes Element im Grid positionieren mussten. Wir haben die Platzierung für frühere Breakpoints übernommen – ein Vorteil der Arbeit von "mobile first". Wir haben auch die automatische Platzierung des Grids genutzt. Durch das Behalten der Elemente in einer logischen Reihenfolge, übernimmt die automatische Platzierung einen erheblichen Teil der Arbeit für uns, die Elemente auf das Grid zu setzen.

## Eine Produktliste mit automatischer Platzierung

In diesem letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das vollständig auf die automatische Platzierung setzt.

Viele Layouts sind im Wesentlichen Sätze von "Karten" – Produktlisten, Bildergalerien und so weiter. Ein Grid ermöglicht es, diese Listen so zu erstellen, dass sie ohne [Media Queries](/de/docs/Web/CSS/CSS_media_queries) responsiv sind. In diesem Beispiel kombinieren wir CSS-Grid- und Flexbox-Layouts, um ein einfaches Produktlisten-Layout zu erstellen.

Das Markup für die Liste ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, einen variablen Text und einen Call-to-Action-Link.

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

Wir erstellen ein Grid mit einer flexiblen Anzahl von flexiblen Spalten. Wir möchten, dass sie mindestens 200 Pixel breit sind und den verfügbaren verbleibenden Platz gleichmäßig teilen – so erhalten wir stets Spaltentracken gleicher Breite. Wir erreichen dies mit der {{cssxref("minmax()")}}-Funktion in unserer {{cssxref("repeat")}}-Notation für die Streckengröße.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Wenn wir dieses CSS hinzufügen, werden die Elemente als Grid angeordnet. Wenn wir das Fenster verkleinern oder vergrößern, ändert sich die Anzahl der Spaltenstrecken – ohne Media Queries, die Breakpoints hinzufügen, und ohne das Grid neu definieren zu müssen.

Wir können die inneren Bereiche der Boxen mit etwas Flexbox aufräumen. Wir setzen das Listenelement auf `display: flex` und die {{cssxref("flex-direction")}} auf `column`. Dann können wir einen automatischen Rand auf die `.cta` anwenden, um diese Leiste an den unteren Rand der Box zu schieben.

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

Dies ist einer der Hauptgründe, Flexbox anstelle von CSS-Grid-Layout zu verwenden. Wenn Sie Inhalte in einer einzigen Dimension ausrichten oder verteilen, ist das ein Flexbox-Anwendungsfall.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Lücken verhindern mit dem dichten Schlüsselwort

Das sieht jetzt ziemlich vollständig aus. Es gibt jedoch manchmal Karten, die weit mehr Inhalt enthalten als die anderen. Es könnte nett sein, diese über zwei Strecken zu erstrecken, dann sind sie nicht so hoch. Wir fügen eine `wide`-Klasse an dem größeren Element hinzu und eine Regel, die ihm ein {{cssxref("grid-column-end")}} mit dem Wert `span 2` gibt. Wenn dieses Element gefunden wird, wird es auf zwei Strecken zugewiesen. Das bedeutet, dass wir bei einigen Breakpoints eine Lücke im Grid haben – wo nicht genug Platz ist, um ein zweistreckiges Element zu platzieren.

![Das Layout hat Lücken, da kein Platz vorhanden ist, um ein Element mit zwei Strecken zu platzieren.](11-grid-auto-flow-sparse.png)

Wir können das Grid dazu bringen, diese Lücken zurückzufüllen, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Grid-Container setzen. Seien Sie vorsichtig damit, da es dazu führen kann, dass Elemente aus ihrer logischen Quellreihenfolge herausgenommen werden. Sie sollten dies nur tun, wenn Ihre Elemente keine feste Reihenfolge haben. Beachten Sie außerdem die [Probleme mit Zugänglichkeit und Neuanordnung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering), die daraus resultieren, dass die Tab-Reihenfolge der Quelle folgt und nicht Ihrer neu geordneten Anzeige.

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

Die Verwendung der automatischen Platzierung mit einigen Regeln, die auf bestimmte Elemente angewendet werden, ist sehr nützlich und kann bei Inhalten helfen, die Sie nicht kontrollieren können, wie CMS-Ausgaben, wo Sie wiederholte Elemente haben und [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) verwenden können, um sie anzusprechen.

## Weiterführende Erkundung

CSS-Grid-Layout bietet so viele Möglichkeiten. Der beste Weg, das Grid-Layout zu lernen, besteht darin, weiterhin Beispiele wie die hier behandelten zu erstellen. Wählen Sie ein Layout von einer responsiven Seite, die Ihnen gefällt, und schauen Sie, ob Sie es mit Grid erstellen können. Sie können sogar Inspiration aus Magazinen oder anderen nicht webbasierten Quellen nehmen.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [Ein vollständiger Leitfaden zu CSS-Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid mit Beispielen](https://gridbyexample.com/)
- [Beispiele für CSS-Grid-Website-Layouts](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
