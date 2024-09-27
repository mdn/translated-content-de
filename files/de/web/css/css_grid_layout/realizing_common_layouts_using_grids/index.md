---
title: Realisieren gängiger Layouts mit Grids
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Um diese Reihe von Leitfäden zum CSS-Grid-Layout abzurunden, werden wir einige verschiedene Layouts durchgehen, die einige der verschiedenen Techniken demonstrieren, die Sie beim Entwerfen mit Grid-Layout verwenden können. Wir werden uns ein Beispiel mit [grid-template-areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) ansehen, ein typisches flexibles 12-Spalten-Grid-System und auch eine Produktliste mit automatischer Platzierung. Wie Sie an diesem Satz von Beispielen sehen können, gibt es oft mehr als einen Weg, das gewünschte Ergebnis mit Grid-Layout zu erreichen. Wählen Sie die Methode, die Sie am hilfreichsten für die Probleme finden, die Sie lösen, und die Designs, die Sie umsetzen müssen.

## Ein responsives Layout mit 1 bis 3 flüssigen Spalten mit `grid-template-areas`

Viele Websites sind eine Variation dieses Layout-Typs, mit Inhalten, Seitenleisten, einem Header und einem Footer. In einem responsiven Design möchten Sie möglicherweise das Layout als Einzelspalte anzeigen, eine Seitenleiste bei einem bestimmten Breakpoint hinzufügen und dann ein Dreispalten-Layout für breitere Bildschirme einführen.

![Bild der drei verschiedenen Layouts, die durch Neudefinieren unseres Grids an zwei Breakpoints erstellt wurden.](11-responsive-areas.png)

Wir werden dieses Layout mit den _benannten Template-Bereichen_ erstellen, die wir im Leitfaden _[Grid template areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)_ gelernt haben.

Das Markup ist ein Container mit darin enthaltenen Elementen für einen Header, Footer, Hauptinhalt, Navigation, Seitenleiste und einen Block zur Platzierung von Werbung.

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

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen, müssen wir außerhalb jeglicher Media Queries die Bereiche benennen. Wir benennen Bereiche mit der {{cssxref("grid-area")}}-Eigenschaft.

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

Dies wird kein Layout erstellen, jedoch haben die Elemente jetzt Namen, die wir verwenden können, um dies zu tun. Bleiben wir außerhalb jeglicher Media Queries, richten wir nun das Layout für die mobile Breite ein. Hier halten wir alles in der Quellreihenfolge, um mögliche Diskrepanzen zwischen Quelle und Anzeige zu vermeiden, wie im Leitfaden _[Grid layout and accessibility](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)_ beschrieben. Wir haben keine Spalten- oder Reihen-Tracks definiert, aber dieses Layout diktiert eine Einzelspalte, und Reihen werden erstellt, wie für jedes der Elemente im impliziten Grid benötigt.

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

Mit unserem mobilen Layout können wir nun fortfahren, eine [Media Query](/de/docs/Web/CSS/CSS_media_queries) hinzuzufügen, um dieses Layout für größere Bildschirme mit genügend Platz für die Anzeige von zwei Spalten anzupassen.

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

Sie können das Layout in den Werten von {{cssxref("grid-template-areas")}} formen sehen. Der `header` erstreckt sich über zwei Spaltentracks, ebenso wie die `nav`. Im dritten Reihentrack haben wir die `sidebar` neben dem `content`. Im vierten Reihentrack habe ich mich entschieden, meinen `ad`-Inhalt zu platzieren – sodass er unter der Sidebar erscheint und danach der `footer` neben ihm unterhalb des Inhalts. Wir verwenden einen Flexbox auf der Navigation, um sie in einer Zeile mit Abstand anzuzeigen.

Wir können nun einen endgültigen Breakpoint hinzufügen, um zu einem Dreispalten-Layout zu wechseln.

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

Das Dreispalten-Layout hat zwei `1fr`-Einheitsseitenspalten und eine mittlere Spalte, die `4fr` als Trackgröße hat. Das bedeutet, dass der verfügbare Platz im Container in 6 aufgeteilt und proportional auf unsere drei Tracks zugewiesen wird – ein Teil jeweils an die Seitenspalten und 4 Teile in die Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte, neben dem `content`. In der rechten Spalte haben wir die `sidebar` und darunter die Anzeigen (`ad`). Der `footer` erstreckt sich jetzt über die gesamte Breite des Layouts. Ich verwende dann eine Flexbox, um die Navigation als Spalte anzuzeigen.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '500') }}

Dies ist ein einfaches Beispiel, zeigt jedoch, wie wir ein Grid-Layout verwenden können, um unser Layout für verschiedene Breakpoints neu zu arrangieren. Insbesondere verändern wir den Standort dieses `ad`-Blocks, je nach unseren unterschiedlichen Spaltenlayouts. Ich finde diese Methode mit benannten Bereichen sehr hilfreich in der Prototyp-Phase, da es einfach ist, mit dem Standort der Elemente zu experimentieren. Sie könnten immer damit beginnen, Grid auf diese Weise für Prototypen zu verwenden, auch wenn Sie sich nicht vollständig darauf in der Produktion verlassen können, aufgrund der Browser, die Ihre Website besuchen.

## Ein flexibles 12-Spalten-Layout

Wenn Sie mit einem der vielen Frameworks oder Gridsysteme gearbeitet haben, sind Sie möglicherweise daran gewöhnt, Ihre Seite auf einem flexiblen 12- oder 16-Spalten-Grid anzuordnen. Wir können dieses Art von System mit CSS-Grid-Layout erstellen. Als einfaches Beispiel erstellen wir ein flexibles 12-Spalten-Grid, das 12 `1fr`-Einheitenspalten-Tracks hat, sie haben alle eine Startlinie namens `col-start`. Das bedeutet, dass wir zwölf Grid-Linien namens `col-start` haben werden.

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

Um zu demonstrieren, wie dieses Gridsystem funktioniert, habe ich vier Kindelemente innerhalb meines Wrappers.

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

Wir können diese dann auf das Grid mit den benannten Linien und dem Keyword `span` platzieren.

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

Wie im [Leitfaden zu benannten Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannte Linie, um unser Element zu platzieren. Da wir 12 Linien mit demselben Namen haben, verwenden wir den Namen und dann den Index der Linie. Sie könnten auch nur den Linienindex verwenden, wenn Sie dies bevorzugen, und die Verwendung benannter Linien ganz vermeiden.

Anstatt die Endliniennummer festzulegen, habe ich mich entschieden, zu sagen, wie viele Tracks dieses Element sich über `span` erstrecken soll. Dieser Ansatz gefällt mir, da wir, wenn wir mit einem Mehrspalten-Layoutsystem arbeiten, Blöcke meistens in Bezug auf die Anzahl der Grid-Tracks, die sie überspannen, betrachten und das für unterschiedliche Breakpoints anpassen. Um zu sehen, wie die Blöcke sich an die Tracks anpassen, verwenden Sie den [Firefox-Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html). Dieser zeigt deutlich, wie unsere Elemente platziert sind.

![Zeigt die platzierten Elemente im Grid mit hervorgehobenen Grid-Tracks.](11-grid-inspector-12col.png)

Es gibt einige wesentliche Unterschiede in der Arbeitsweise eines Grid-Layouts im Vergleich zu den Gridsystemen, die Sie möglicherweise zuvor verwendet haben. Wie Sie sehen können, müssen wir kein zusätzliches Markup hinzufügen, um eine Reihe zu erstellen. Gridsysteme müssen dies tun, um zu verhindern, dass Elemente in die darüberliegende Reihe springen. Mit CSS Grid-Layout können wir Dinge in Reihen platzieren, ohne Gefahr, dass sie in die darüberliegende Reihe aufsteigen, wenn diese leer ist. Aufgrund dieser _strikten_ Spalten- und Reihenplatzierung können wir auch leicht Leerraum in unserem Layout belassen. Wir benötigen auch keine speziellen Klassen, um Dinge zu verschieben oder zu ziehen, um sie in das Grid einzurücken. Es reicht aus, die Start- und Endlinie für das Element anzugeben.

## Aufbau eines Layouts mit dem 12-Spalten-System

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, können wir das gleiche Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal jedoch mit dem 12-Spalten-Gridsystem. Beginnen wir mit demselben Markup, das im Beispiel für Grid-Template-Bereiche verwendet wurde.

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

Wir können dann unser Grid, wie im Beispiel 12-Spalten-Layout oben, einrichten.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden erneut ein responsives Layout erstellen, diesmal jedoch mit benannten Linien. Jeder Breakpoint verwendet ein 12-Spalten-Grid, jedoch ändert sich die Anzahl der Tracks, die die Elemente überspannen, je nach Größe des Bildschirms.

Wir beginnen mit "mobile first", und alles, was wir für die schmalsten Bildschirme möchten, ist, dass die Elemente in Quellreihenfolge bleiben und sich alle über das gesamte Grid erstrecken.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Beim nächsten Breakpoint wollen wir zu einem Zweispaltenlayout wechseln. Unser Header und die Navigation erstrecken sich weiterhin über das gesamte Grid, daher müssen wir keine Positionierung für sie festlegen. Die Seitenleiste beginnt an der ersten Linienzeile namens `col-start` und erstreckt sich über 3 Linien. Sie folgt der Zeilenzeile 3, da Header und Navigation in den ersten beiden Reihentracks sind.

Das Werbepanel befindet sich unter der Seitenleiste, beginnt also an Grid-Zeilenzeile 4. Dann haben wir den Inhalt und den Footer, die bei `col-start` 4 beginnen und sich über 9 Tracks erstrecken, die sie zum Ende des Grids führen.

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

Schließlich wechseln wir zur Drei-Spalten-Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Grid, aber jetzt bewegt sich die Navigation nach unten und wird zur ersten Sidebar, neben dem Inhalt und der Sidebar. Der Footer erstreckt sich nun ebenfalls über das gesamte Layout.

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

Einmal mehr ist der [Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) nützlich, um zu sehen, wie unser Layout Form angenommen hat.

![Zeigt das Layout mit den vom Grid Inspector hervorgehobenen Grid-Tracks.](11-grid-inspector-12col-layout.png)

Etwas zu beachten beim Erstellen dieses Layouts ist, dass wir nicht jeden einzelnen Punkt auf dem Grid bei jedem Breakpoint explizit platzieren mussten. Wir konnten die Platzierung beibehalten, die für frühere Breakpoints eingerichtet wurde – ein Vorteil des "mobile first"-Ansatzes. Wir konnten außerdem die automatische Platzierung des Grids nutzen. Indem wir Elemente in einer logischen Reihenfolge halten, übernimmt die automatische Platzierung einen großen Teil der Arbeit für uns beim Platzieren von Elementen auf dem Grid. Im letzten Beispiel in diesem Leitfaden werden wir ein Layout erstellen, das vollständig auf automatische Platzierung angewiesen ist.

## Eine Produktliste mit automatischer Platzierung

Viele Layouts bestehen im Wesentlichen aus Sets von "Karten" - Produktlisten, Bildergalerien usw. Ein Grid kann es sehr einfach machen, diese Listen auf eine Weise zu erstellen, die responsiv ist, ohne dass [Media Queries](/de/docs/Web/CSS/CSS_media_queries) benötigt werden, um dies zu gewährleisten. In diesem nächsten Beispiel kombiniere ich CSS Grid und Flexbox-Layouts, um ein einfaches Produktlistenlayout zu erstellen.

Das Markup für meine Liste ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, etwas Text von unterschiedlicher Höhe und einen Aktionslink.

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

Wir werden ein Grid mit einer flexiblen Anzahl von flexiblen Spalten erstellen. Ich möchte, dass sie niemals kleiner als 200 Pixel werden und dann jeden verfügbaren verbleibenden Platz gleichmäßig teilen - sodass wir immer gleich breite Spaltentracks erhalten. Wir erreichen dies mit der `minmax()`-Funktion in unserer Wiederholungsnotierung für die Track-Größe.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Sobald wir dieses CSS hinzufügen, beginnen die Elemente, sich als Grid anzuordnen. Wenn wir das Fenster kleiner oder breiter machen, ändert sich die Anzahl der Spaltentracks – ohne dass wir Breakpoints mit Media Queries hinzufügen und das Grid neu definieren müssen.

Wir können dann das Innere der Boxen mit einem kleinen Einsatz von Flexbox ordnen. Ich setze das Listenelement auf `display: flex` und die `flex-direction` auf `column`. Wir können dann einen automatischen Rand auf der `.cta` verwenden, um diese Leiste nach unten in die Box zu schieben.

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

Dies ist wirklich einer der Hauptgründe, warum jemand Flexbox anstelle von Grid verwenden würde, wenn er/sie nur etwas in einer einzigen Dimension ausrichtet oder verteilt, ist das ein Flexbox-Anwendungsfall.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Verhindern von Lücken mit dem dense-Stichwort

Das sieht jetzt alles ziemlich fertig aus, manchmal haben wir jedoch diese Karten, die deutlich mehr Inhalt enthalten als die anderen. Es könnte schön sein, wenn diese sich über zwei Tracks erstrecken, damit sie nicht so hoch sind. Wir haben eine Klasse `wide` auf meinem größeren Element, und wir fügen eine Regel {{cssxref("grid-column-end")}} mit einem Wert von `span 2` hinzu. Nun weist das Grid diesem Element beim Auftauchen zwei Tracks zu. Bei einigen Breakpoints bedeutet dies, dass wir eine Lücke im Grid bekommen – wo kein Platz vorhanden ist, um ein Element über zwei Tracks anzuordnen.

![Das Layout hat Lücken, da kein Platz vorhanden ist, um ein Element über zwei Tracks anzuordnen.](11-grid-auto-flow-sparse.png)

Wir können ein Grid veranlassen, diese Lücken zu beseitigen, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Grid-Container setzen. Seien Sie jedoch vorsichtig dabei, denn dies nimmt den Elementen ihre logische Quellreihenfolge. Sie sollten dies nur tun, wenn Ihre Elemente keine feste Reihenfolge haben – und sich der [Probleme](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering) im Klaren sein, dass die Tab-Reihenfolge der Quelle folgt und nicht Ihrer umgeordneten Anzeige.

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

Diese Technik der Verwendung von automatischer Platzierung mit bestimmten Regeln für bestimmte Elemente ist sehr nützlich und kann Ihnen helfen, Inhalte zu verwalten, die beispielsweise durch ein CMS ausgegeben werden, bei denen Sie wiederholte Elemente haben und möglicherweise einer bestimmten Klasse zugeordnet sind, während sie in das HTML gerendert werden.

## Weitere Erkundung

Der beste Weg, um das Grid-Layout zu erlernen, besteht darin, weiterhin Beispiele wie die hier behandelten zu erstellen. Wählen Sie etwas, das Sie normalerweise mit Ihrem bevorzugten Framework oder mithilfe von Floats erstellen, und sehen Sie, ob Sie es mit Grid erstellen können. Vergessen Sie nicht, nach Beispielen zu suchen, die nicht mit aktuellen Methoden erstellt werden können. Das könnte bedeuten, sich von Magazinen oder anderen nicht webbasierten Quellen inspirieren zu lassen. Grid Layout eröffnet Möglichkeiten, die wir zuvor nicht hatten, wir müssen uns für dessen Nutzung nicht an die gleichen alten Layouts binden.

- [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS Layout: Grids](/de/docs/Learn/CSS/CSS_layout/Grids)
- [A complete guide to CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS grid website layout examples](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
