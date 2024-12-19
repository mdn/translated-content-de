---
title: Realisierung gängiger Layouts mit Grids
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Um diese Reihe von Leitfäden zum CSS-Grid-Layout abzuschließen, werden wir einige verschiedene Layouts durchgehen, die einige der verschiedenen Techniken veranschaulichen, die Sie beim Entwerfen mit Grid-Layout verwenden können. Wir werden ein Beispiel mit [grid-template-areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas), einem typischen flexiblen 12-Spalten-Grid-System und einer Produktliste mit automatischer Platzierung betrachten. Wie Sie aus diesem Satz von Beispielen sehen können, gibt es oft mehr als einen Weg, um das gewünschte Ergebnis mit dem Grid-Layout zu erzielen. Wählen Sie die Methode, die Sie für die Probleme, die Sie lösen, und für die Designs, die Sie umsetzen müssen, am hilfreichsten finden.

## Ein responsives Layout mit 1 bis 3 fließenden Spalten unter Verwendung von `grid-template-areas`

Viele Websites sind eine Abwandlung dieses Layouttyps, mit Inhalt, Seitenleisten, Header und Footer. In einem responsiven Design möchten Sie das Layout möglicherweise als Einzelspalte anzeigen, bei einem bestimmten Breakpoint eine Seitenleiste hinzufügen und dann für breitere Bildschirme ein Drei-Spalten-Layout einführen.

![Bild von den drei verschiedenen Layouts, die durch Neudefinierung unseres Grids bei zwei Breakpoints erstellt wurden.](11-responsive-areas.png)

Wir werden dieses Layout unter Verwendung der _benannten Template-Bereiche_ erstellen, die wir im Leitfaden _[Grid template areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)_ gelernt haben.

Das Markup ist ein Container mit Elementen für einen Header, Footer, Hauptinhalt, Navigation, eine Seitenleiste und einen Block für Werbung.

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

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen, müssen wir außerhalb von Media Queries die Bereiche benennen. Wir benennen Bereiche mit der Eigenschaft {{cssxref("grid-area")}}.

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

Dies wird kein Layout erstellen, jedoch haben die Elemente jetzt Namen, die wir zu diesem Zweck verwenden können. Bleiben wir außerhalb von Media Queries, werden wir nun das Layout für die mobile Breite einrichten. Hier belassen wir alles in der Quellreihenfolge und versuchen, jegliche Diskrepanz zwischen Quelle und Anzeige zu vermeiden, wie im Leitfaden _[Grid layout and accessibility](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)_ beschrieben. Wir haben keine Spalten- oder Reihen-Spuren definiert, aber dieses Layout bestimmt eine Einzelspalte, und es werden nach Bedarf für jedes der Elemente in dem impliziten Grid Reihen erstellt.

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

Mit unserem mobilen Layout können wir nun eine [Media Query](/de/docs/Web/CSS/CSS_media_queries) hinzufügen, um dieses Layout für größere Bildschirme mit genügend Platz für die Anzeige von zwei Spalten anzupassen.

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

Sie können das Layout in dem Wert von {{cssxref("grid-template-areas")}} Gestalt annehmen sehen. Der `header` spannt sich über zwei Spalten-Spuren, ebenso wie `nav`. In der dritten Reihenspur haben wir die `sidebar` neben dem `content`. In der vierten Reihenspur habe ich mich entschieden, meinen `ad`-Inhalt zu platzieren – sodass er unter der Seitenleiste erscheint, dann der `footer` daneben unter dem Inhalt. Wir verwenden ein Flexbox in der Navigation, um es als eine in einer Reihe angeordnete Leiste darzustellen.

Wir können nun einen letzten Breakpoint hinzufügen, um zu einem Drei-Spalten-Layout überzugehen.

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

Das Drei-Spalten-Layout hat zwei Seitenspalten mit `1fr`-Einheiten und eine mittlere Spalte mit `4fr` als Spurgröße. Das bedeutet, dass der verfügbare Raum im Container in 6 Teile geteilt und im Verhältnis auf unsere drei Spuren verteilt wird – ein Teil auf jede Seitenspalte und 4 Teile auf die Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte an, neben dem `content`. In der rechten Spalte haben wir die `sidebar` und darunter die Werbeanzeigen (`ad`). Der `footer` erstreckt sich nun über die gesamte untere Seite des Layouts. Dann verwende ich eine Flexbox, um die Navigation als Spalte darzustellen.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '500') }}

Dies ist ein einfaches Beispiel, das jedoch zeigt, wie wir ein Grid-Layout verwenden können, um unser Layout für verschiedene Breakpoints neu zu ordnen. Insbesondere ändern wir die Position dieses `ad`-Blocks, je nachdem, wie es in meinen verschiedenen Spalten-Konfigurationen angemessen ist. Ich finde diese Methode mit benannten Bereichen sehr hilfreich in einer Prototypphase, da es einfach ist, mit der Position der Elemente zu experimentieren. Sie könnten auf diese Weise immer mit dem Grid für Prototyping anfangen, auch wenn Sie sich in der Produktion aufgrund der Browser, die Ihre Seite besuchen, nicht voll darauf verlassen können.

## Ein flexibles 12-Spalten-Layout

Wenn Sie mit einem der vielen Frameworks oder Grid-Systeme gearbeitet haben, sind Sie möglicherweise daran gewöhnt, Ihre Seite auf einem flexiblen 12- oder 16-Spalten-Grid zu layouten. Wir können diesen Typ von System mit CSS-Grid-Layout erstellen. Als einfaches Beispiel erstellen wir ein flexibles 12-Spalten-Grid mit 12 `1fr`-Einheits-Spalten, die alle eine Startlinie namens `col-start` haben. Das bedeutet, dass wir zwölf Grid-Linien namens `col-start` haben werden.

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

Um zu demonstrieren, wie dieses Grid-System funktioniert, habe ich vier Kind-Elemente innerhalb meiner Hülle.

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

Wir können diese dann unter Verwendung der benannten Linien und auch des Span-Stichworts auf dem Grid platzieren.

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

Wie im [Leitfaden zu benannten Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannte Linie, um unser Element zu platzieren. Da wir 12 Linien mit dem gleichen Namen haben, verwenden wir den Namen und dann den Index der Linie. Sie könnten auch den Linienindex selbst verwenden, wenn Sie das bevorzugen und ganz auf benannte Linien verzichten.

Anstatt die Endliniennummer festzulegen, habe ich mich entschieden, zu sagen, wie viele Spuren dieses Element überspannen soll, indem ich das Stichwort `span` verwende. Ich mag diesen Ansatz, da wir in einem Layoutsystem mit mehreren Spalten normalerweise in Bezug auf die Anzahl der Grid-Spuren, die die Blöcke überspannen, denken und dies für verschiedene Breakpoints anpassen. Um zu sehen, wie sich die Blöcke zu den Spuren anpassen, verwenden Sie den [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html). Er zeigt deutlich, wie unsere Elemente platziert sind.

![Zeigt die auf dem Grid platzierten Elemente mit hervorgehobenen Grid-Spuren.](11-grid-inspector-12col.png)

Es gibt einige wesentliche Unterschiede zu der Funktionsweise eines Grid-Layouts gegenüber den Grid-Systemen, die Sie möglicherweise zuvor verwendet haben. Wie Sie sehen können, müssen wir kein Markup hinzufügen, um eine Reihe zu erstellen, Grid-Systeme müssen dies tun, um zu verhindern, dass Elemente in die darüberliegende Reihe aufsteigen. Mit CSS-Grid-Layout können wir Elemente in Reihen platzieren, ohne dass die Gefahr besteht, dass sie in die darüberliegende Reihe aufsteigen, wenn sie leer bleibt. Aufgrund dieser _strikten_ Spalten- und Reihenplatzierung können wir auch leicht weißen Raum in unserem Layout lassen. Wir benötigen auch keine speziellen Klassen, um Dinge zu verschieben oder hineinzuschieben, um sie im Grid einzurücken. Alles, was wir tun müssen, ist, die Start- und Endlinie für das Element zu spezifizieren.

## Erstellung eines Layouts mit dem 12-Spalten-System

Um zu sehen, wie diese Layout-Methode in der Praxis funktioniert, können wir das gleiche Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal jedoch mit dem 12-Spalten-Grid-System. Fangen wir mit dem gleichen Markup an, das für das Grid-Template-Areas-Beispiel verwendet wurde.

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

Wir können dann unser Grid einrichten, wie im obigen Beispiellayout mit 12 Spalten.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden dieses Layout erneut als responsives Layout gestalten, diesmal jedoch mit benannten Linien. Jeder Breakpoint wird ein 12-Spalten-Grid verwenden, allerdings wird sich die Anzahl der Spuren, die die Elemente überspannen, je nach Größe des Bildschirms ändern.

Wir beginnen mobil zuerst, und für die schmalsten Bildschirme möchten wir nur, dass die Elemente in Quellreihenfolge bleiben und die gesamte Grid-Spanne umfassen.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Beim nächsten Breakpoint möchten wir zu einem Zwei-Spalten-Layout übergehen. Unser Header und unsere Navigation überspannen immer noch das gesamte Grid, daher müssen wir keine Positionierungen für sie angeben. Die Seitenleiste beginnt auf der ersten Spaltenlinie namens col-start und erstreckt sich über 3 Linien. Sie folgt auf die Zeilenlinie 3, da der Header und die Navigation in den ersten beiden Reihen sind.

Das Werbepanel befindet sich unter der Seitenleiste und beginnt daher bei der Grid-Reihenlinie 4. Dann haben wir den Inhalt und den Footer, die bei col-start 4 beginnen und 9 Spuren erstrecken, bis sie das Ende des Grids erreichen.

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

Schließlich wechseln wir zur Drei-Spalten-Version dieses Layouts. Der Header erstreckt sich weiterhin über den gesamten Grid, aber jetzt bewegt sich die Navigation nach unten, um zur ersten Seitenleiste zu werden, mit dem Inhalt und dann der Seitenleiste daneben. Der Footer erstreckt sich nun ebenfalls über das gesamte Layout.

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

Der [Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) ist erneut nützlich, um zu sehen, wie sich unser Layout geformt hat.

![Zeigt das Layout mit vom Grid Inspector hervorgehobenen Grid-Spuren.](11-grid-inspector-12col-layout.png)

Ein wichtiger Aspekt beim Erstellen dieses Layouts ist, dass wir nicht jedes Element bei jedem Breakpoint explizit positionieren mussten. Wir konnten die für frühere Breakpoints eingerichtete Platzierung erben – ein Vorteil, wenn man "Mobile First" arbeitet. Wir können auch die automatische Platzierung des Grids nutzen. Indem wir Elemente in einer logischen Reihenfolge halten, übernimmt die automatische Platzierung viel Arbeit für uns, um Elemente auf dem Grid zu platzieren. Im letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das vollständig auf der automatischen Platzierung basiert.

## Eine Produktliste mit automatischer Platzierung

Viele Layouts bestehen im Wesentlichen aus einer Reihe von "Karten" – Produktlisten, Bildergalerien usw. Ein Grid kann es sehr einfach machen, diese Listen zu erstellen, und zwar auf eine Weise, die reaktionsfähig ist, ohne dass [Media Queries](/de/docs/Web/CSS/CSS_media_queries) hinzugefügt werden müssen, um es so zu machen. Im nächsten Beispiel kombiniere ich CSS-Grid und Flexbox-Layouts, um ein einfaches Produktlistenlayout zu erstellen.

Das Markup für meine Liste ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, etwas Text unterschiedlicher Höhe und einen Aktionslink.

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

Wir werden ein Grid mit einer flexiblen Anzahl flexibler Spalten erstellen. Ich möchte, dass sie nie kleiner als 200 Pixel werden, und dann den verfügbaren verbleibenden Platz gleichmäßig teilen – sodass wir immer gleich breite Spalten-Spuren erhalten. Wir erreichen dies mit der `minmax()`-Funktion in unserer Wiederholungsnotation für Spurgrößen.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Sobald wir dieses CSS hinzufügen, beginnen sich die Elemente als Grid zu layouten. Wenn wir das Fenster kleiner oder größer machen, ändert sich die Anzahl der Spalten-Spuren – ohne dass wir Breakpoints mit Media Queries hinzufügen und das Grid neu definieren müssen.

Wir können dann die Innenräume der Boxen mit einem kleinen Flexbox-Touch aufräumen. Ich setze das Listenelement auf `display: flex` und die `flex-direction` auf `column`. Wir können dann mit einem automatischen Rand auf dem `.cta` diese Leiste nach unten in die Box verschieben.

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

Dies ist wirklich einer der Hauptgründe, warum man Flexbox anstelle von Grid verwenden würde, wenn Sie nur etwas in einer einzigen Dimension ausrichten oder verteilen, das ist ein Flexbox-Anwendungsfall.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Lücken mit dem "dense"-Stichwort verhindern

Dies sieht jetzt ziemlich vollständig aus, allerdings haben wir manchmal diese Karten, die deutlich mehr Inhalt enthalten als die anderen. Es könnte schön sein, diese über zwei Spuren zu erstrecken, da sie dann nicht so hoch sind. Wir haben eine Klasse von `wide` auf meinem größeren Element, und wir fügen eine Regel {{cssxref("grid-column-end")}} mit einem Wert von `span 2` hinzu. Jetzt, wenn das Grid auf dieses Element trifft, wird es ihm zwei Spuren zuweisen. Bei einigen Breakpoints bedeutet dies, dass wir eine Lücke im Grid bekommen – wo nicht genug Platz ist, um ein zwei-Spur-Element zu platzieren.

![Das Layout hat Lücken, da nicht genug Platz ist, um ein Zwei-Spur-Element zu platzieren.](11-grid-auto-flow-sparse.png)

Wir können ein Grid dazu veranlassen, diese Lücken zu füllen, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Grid-Container setzen. Seien Sie jedoch vorsichtig, wenn Sie dies tun, da es Elemente aus ihrer logischen Quellreihenfolge entfernt. Sie sollten dies nur tun, wenn Ihre Elemente keine feste Reihenfolge haben – und seien Sie sich der [Probleme](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering) bewusst, dass die Tab-Reihenfolge der Quelle folgt und nicht Ihrer neu angeordneten Anzeige.

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

Diese Technik der automatischen Platzierung mit einigen auf bestimmte Elemente angewandten Regeln ist sehr nützlich und kann Ihnen helfen, mit Inhalten umzugehen, die beispielsweise von einem CMS ausgegeben werden, wo Sie wiederholte Elemente haben und vielleicht einer von ihnen eine Klasse hinzufügen können, wenn sie in HTML gerendert werden.

## Weitere Erkundung

Der beste Weg, um das Grid-Layout zu lernen, besteht darin, weiterhin Beispiele zu erstellen, wie die, die wir hier behandelt haben. Wählen Sie etwas, das Sie normalerweise mit Ihrem bevorzugten Framework erstellen oder mit Floats, und sehen Sie, ob Sie es mit Grid erstellen können. Vergessen Sie nicht, Beispiele zu finden, die mit den aktuellen Methoden unmöglich zu bauen sind. Das könnte bedeuten, sich von Magazinen oder anderen nicht-webbasierten Quellen inspirieren zu lassen. Grid-Layout eröffnet Möglichkeiten, die wir vorher nicht hatten, und wir müssen uns nicht mehr an die alten Layouts klammern, um es zu nutzen.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [Ein vollständiger Leitfaden zu CSS-Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS-Grid-Website-Layout-Beispiele](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
