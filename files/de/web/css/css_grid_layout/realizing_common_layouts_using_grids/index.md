---
title: Häufige Layouts mit Grids realisieren
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Um diese Reihe von Leitfäden zum CSS Grid Layout abzurunden, werden wir einige verschiedene Layouts durchgehen, die einige der unterschiedlichen Techniken demonstrieren, die Sie beim Entwerfen mit einem Grid Layout verwenden können. Wir werden ein Beispiel mit [grid-template-areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas), ein typisches flexibles 12-Spalten-Gridsystem und auch eine Produktliste mit automatischer Platzierung betrachten. Wie Sie an diesem Set von Beispielen sehen können, gibt es oft mehr als einen Weg, das gewünschte Ergebnis mit Grid Layout zu erzielen. Wählen Sie die Methode, die Sie für die Probleme, die Sie lösen, und die Designs, die Sie implementieren müssen, am hilfreichsten finden.

## Ein responsives Layout mit 1 bis 3 flüssigen Spalten mit `grid-template-areas`

Viele Websites sind eine Variante dieses Layouttyps, mit Inhalt, Seitenleisten, einem Header und einem Footer. In einem responsiven Design möchten Sie möglicherweise das Layout als einzelne Spalte anzeigen, bei einem bestimmten Breakpoint eine Seitenleiste hinzufügen und dann für breitere Bildschirme ein Drei-Spalten-Layout einführen.

![Bild der drei verschiedenen Layouts, die durch Umdefinieren unseres Grids bei zwei Breakpoints erstellt wurden.](11-responsive-areas.png)

Wir werden dieses Layout mit den _benannten Template-Bereichen_ erstellen, die wir in dem Leitfaden _[Grid template areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)_ kennengelernt haben.

Das Markup ist ein Container mit Elementen darin für einen Header, Footer, Hauptinhalt, Navigation, Seitenleiste und ein Block zur Platzierung von Werbung.

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
  <header class="main-head">Der Header</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>Hauptartikelbereich</h1>
    <p>
      In diesem Layout zeigen wir die Bereiche in Quellreihenfolge für jeden Bildschirm an,
      der weniger als 500 Pixel breit ist. Wir gehen zu einem Zwei-Spalten-Layout und dann zu einem
      Drei-Spalten-Layout, indem wir das Raster und die Platzierung der Elemente auf dem Raster neu definieren.
    </p>
  </article>
  <aside class="side">Seitenleiste</aside>
  <div class="ad">Werbung</div>
  <footer class="main-footer">Der Footer</footer>
</div>
```

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen. Außerhalb von Medienabfragen müssen wir die Bereiche benennen. Wir benennen Bereiche mit der {{cssxref("grid-area")}}-Eigenschaft.

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

Dies wird kein Layout erstellen, aber die Elemente haben jetzt Namen, die wir dafür verwenden können. Außerhalb von Medienabfragen richten wir jetzt das Layout für die mobile Breite ein. Hier behalten wir alles in Quellreihenfolge, um eine Diskrepanz zwischen Quelle und Anzeige zu vermeiden, wie im Leitfaden _[Grid layout and accessibility](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)_ beschrieben. Wir haben keine Spalten- oder Reihenstrecken definiert, aber dieses Layout diktiert eine einzige Spalte, und Reihen werden bei Bedarf für jedes der Elemente im impliziten Grid erstellt.

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

Mit unserem mobilen Layout können wir nun eine [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) hinzufügen, um dieses Layout für größere Bildschirme mit ausreichend Platz für zwei Spalten anzupassen.

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

Sie können das Layout im Wert von {{cssxref("grid-template-areas")}} Gestalt annehmen sehen. Der `header` spannt sich über zwei Spaltenstrecken, ebenso wie die `nav`. In der dritten Reihenbahn haben wir die `sidebar` neben dem `content`. In der vierten Reihenbahn habe ich mich entschieden, meinen `ad`-Inhalt zu platzieren, sodass er unter der Seitenleiste erscheint, dann der `footer` daneben unter dem Inhalt. Wir verwenden ein Flexbox für die Navigation, um sie in einer Reihe verteilt anzuzeigen.

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

Das Drei-Spalten-Layout hat zwei Seitenkolonnen mit `1fr`-Einheit und eine mittlere Spalte, die `4fr` als Spurweite hat. Das bedeutet, dass der verfügbare Platz im Container in 6 geteilt und im Verhältnis zu unseren drei Spuren zugewiesen wird – ein Teil für jede der Seitenkolonnen und 4 Teile für die Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte neben dem `content` an. In der rechten Spalte haben wir die `sidebar` und darunter die Werbung (`ad`). Der `footer` erstreckt sich nun ganz unten im Layout. Ich benutze dann ein Flexbox, um die Navigation als Spalte anzuzeigen.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '500') }}

Dies ist ein einfaches Beispiel, das jedoch zeigt, wie wir ein Grid Layout verwenden können, um unser Layout für verschiedene Breakpoints neu zu ordnen. Insbesondere ändern wir die Position dieses `ad`-Blocks, da es in meiner verschiedenen Spaltenkonfigurationen passt. Ich finde diese Methode der benannten Bereiche sehr hilfreich in der Prototyping-Phase, da es einfach ist, mit der Position von Elementen zu experimentieren. Sie könnten auf diese Weise damit beginnen, Grids für das Prototyping zu verwenden, auch wenn Sie sich nicht darauf verlassen können, dass es in der Produktion vollumfänglich unterstützt wird, aufgrund der Browser, die Ihre Seite besuchen.

## Ein flexibles 12-Spalten-Layout

Wenn Sie mit einem der vielen Frameworks oder Grid Systems gearbeitet haben, sind Sie möglicherweise daran gewöhnt, Ihre Website auf einem flexiblen 12- oder 16-Spalten-Grid zu layouten. Wir können diesen Systemtyp mit CSS Grid Layout erstellen. Als einfaches Beispiel erstellen wir ein flexibles 12-Spalten-Grid mit 12 Spaltungen mit jeweils `1fr`, die alle eine Startlinie namens `col-start` haben. Dies bedeutet, dass wir zwölf Grid-Linien namens `col-start` haben.

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

Um zu zeigen, wie dieses Grid System funktioniert, habe ich vier Kindelemente innerhalb meines Wrappers.

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

Wir können diese dann mit den benannten Linien und auch dem Span-Schlüsselwort auf dem Grid platzieren.

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

Wie im [Leitfaden zu benannten Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannte Linie, um unser Element zu platzieren. Da wir 12 Linien mit demselben Namen haben, verwenden wir den Namen und dann den Index der Linie. Sie könnten auch den Zeilenindex selbst verwenden, wenn Sie dies bevorzugen, und die Verwendung benannter Linien ganz vermeiden.

Anstatt die Endliniennummer festzulegen, habe ich mich dafür entschieden, wie viele Spuren dieses Element umfassen soll, mit dem `span`-Schlüsselwort. Ich mag diesen Ansatz, da wir beim Arbeiten mit einem Mehrspalten-Layout-System normalerweise in Bezug auf die Anzahl der Spuren des Grids denken, die sie umfassen, und das für verschiedene Breakpoints anpassen. Um zu sehen, wie sich die Blöcke an den Spuren ausrichten, verwenden Sie den [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html). Es zeigt deutlich, wie unsere Elemente platziert sind.

![Zeigt die Objekte auf dem Grid mit hervorgehobenen Grid-Spuren.](11-grid-inspector-12col.png)

Es gibt einige wesentliche Unterschiede in der Funktionsweise eines Grid Layouts im Vergleich zu den Grid-Systemen, die Sie möglicherweise zuvor verwendet haben. Wie Sie sehen können, müssen wir keinen Markup hinzufügen, um eine Zeile zu erstellen. Grid-Systeme müssen dies tun, um zu verhindern, dass Elemente in die darüber liegende Zeile aufsteigen. Mit CSS Grid Layout können wir Dinge in Zeilen platzieren, ohne Gefahr zu laufen, dass sie in die darüber liegende Zeile aufsteigen, wenn diese leer bleibt. Dank dieser _strikten_ Spalten- und Zeilenplatzierung können wir auch leicht Weißraum in unserem Layout lassen. Wir benötigen auch keine speziellen Klassen, um Dinge zu verschieben oder zu schieben, um sie in das Grid einzurücken. Alles, was wir tun müssen, ist die Start- und Endlinie für das Element anzugeben.

## Einen Layout mit dem 12-Spalten-System erstellen

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, können wir dasselbe Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal jedoch mit dem 12-Spalten-Gridsystem. Beginnen wir mit demselben Markup, wie es für das Beispiel der Grid Template Areas verwendet wurde.

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
  <header class="main-head">Der Header</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>Hauptartikelbereich</h1>
    <p>
      In diesem Layout zeigen wir die Bereiche in Quellreihenfolge für jeden Bildschirm an,
      der weniger als 500 Pixel breit ist. Wir gehen zu einem Zwei-Spalten-Layout und dann zu einem
      Drei-Spalten-Layout, indem wir das Raster und die Platzierung der Elemente auf dem Raster neu definieren.
    </p>
  </article>
  <aside class="side">Seitenleiste</aside>
  <div class="ad">Werbung</div>
  <footer class="main-footer">Der Footer</footer>
</div>
```

Wir können dann unser Grid einrichten, wie für das oben gezeigte Beispiel des 12-Spalten-Layouts.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden erneut ein responsives Layout erstellen, diesmal jedoch mit benannten Linien. Jeder Breakpoint verwendet ein 12-Spalten-Grid, jedoch ändert sich die Anzahl der Spuren, die die Elemente umfassen, je nach Größe des Bildschirms.

Wir beginnen mobil-zuerst, und alles, was wir für die schmalsten Bildschirme wollen, ist, dass die Elemente in Quellreihenfolge bleiben und sich über das gesamte Raster spannen.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Beim nächsten Breakpoint möchten wir zu einem Zwei-Spalten-Layout übergehen. Unser Header und die Navigation erstrecken sich immer noch über das gesamte Grid, daher müssen wir keine Positionierung für sie angeben. Die Seitenleiste beginnt an der ersten Spaltenlinie namens col-start und erstreckt sich über 3 Linien. Sie geht nach der Zeile 3, da der Header und die Navigation in den ersten beiden Zeilenbahnen sind.

Das Anzeigenfenster befindet sich unter der Seitenleiste und beginnt bei Zeile 4 des Rasters. Dann haben wir den Inhalt und den Footer, die bei col-start 4 beginnen und 9 Linien umfassen, was sie bis zum Ende des Rasters führt.

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

Schließlich gehen wir zur Drei-Spalten-Version dieses Layouts über. Der Header erstreckt sich weiterhin über das gesamte Grid, aber jetzt bewegt sich die Navigation nach unten, um die erste Seitenleiste zu werden, mit dem Inhalt und dann der Seitenleiste daneben. Der Footer erstreckt sich jetzt auch über das gesamte Layout.

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

Auch hier ist der [Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) nützlich, um uns zu helfen, zu sehen, wie unser Layout Gestalt angenommen hat.

![Zeigt das Layout mit durch den Grid Inspector hervorgehobenen Gittern.](11-grid-inspector-12col-layout.png)

Etwas, das wir bei der Erstellung dieses Layouts beachten sollten, ist, dass wir nicht jedes Element im Grid an jedem Breakpoint explizit positionieren mussten. Wir konnten die Platzierung für frühere Breakpoints erben – ein Vorteil der "Mobile First"-Arbeit. Wir können auch die automatische Platzierung des Grids nutzen. Indem wir Elemente in einer logischen Reihenfolge halten, erledigt die automatische Platzierung viel Arbeit für uns, indem sie Elemente in das Grid platziert. Im letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das vollständig auf automatischer Platzierung beruht.

## Eine Produktliste mit automatischer Platzierung

Viele Layouts bestehen im Wesentlichen aus "Karten" – Produktlisten, Bildergalerien und so weiter. Ein Grid kann es sehr einfach machen, diese Auflistungen zu erstellen, sodass sie responsiv sind, ohne dass wir [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) hinzufügen müssen, um dies zu erreichen. In diesem nächsten Beispiel kombiniere ich CSS Grid und Flexbox Layouts, um ein einfaches Produktlisten-Layout zu erstellen.

Das Markup für meine Auflistung ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, etwas Text unterschiedlicher Höhe und einen Call-to-Action-Link.

```html
<ul class="listing">
  <li>
    <h2>Element Eins</h2>
    <div class="body">
      <p>Der Inhalt dieses Eintrags wird hier platziert.</p>
    </div>
    <div class="cta">
      <a href="">Zum Handeln aufrufen!</a>
    </div>
  </li>
  <li>
    <h2>Element Zwei</h2>
    <div class="body">
      <p>Der Inhalt dieses Eintrags wird hier platziert.</p>
    </div>
    <div class="cta">
      <a href="">Zum Handeln aufrufen!</a>
    </div>
  </li>
  <li class="wide">
    <h2>Element Drei</h2>
    <div class="body">
      <p>Der Inhalt dieses Eintrags wird hier platziert.</p>
      <p>Dieser Eintrag hat mehr Text als die anderen Elemente.</p>
      <p>Einige mehr</p>
      <p>Vielleicht könnten wir etwas anderes damit machen?</p>
    </div>
    <div class="cta">
      <a href="">Zum Handeln aufrufen!</a>
    </div>
  </li>
  <li>
    <h2>Element Vier</h2>
    <div class="body">
      <p>Der Inhalt dieses Eintrags wird hier platziert.</p>
    </div>
    <div class="cta">
      <a href="">Zum Handeln aufrufen!</a>
    </div>
  </li>
  <li>
    <h2>Element Fünf</h2>
    <div class="body">
      <p>Der Inhalt dieses Eintrags wird hier platziert.</p>
    </div>
    <div class="cta">
      <a href="">Zum Handeln aufrufen!</a>
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

Wir erstellen ein Grid mit einer flexiblen Anzahl flexibler Spalten. Ich möchte, dass sie niemals kleiner als 200 Pixel werden und dann den verfügbaren verbleibenden Platz gleichmäßig teilen – sodass wir immer gleich breite Spalten erhalten. Wir erreichen dies mit der `minmax()`-Funktion in unserer Wiederholungsschreibweise für die Spurengrößenermittlung.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Sobald wir dieses CSS hinzufügen, beginnen sich die Elemente als Grid anzuordnen. Wenn wir das Fenster kleiner oder breiter machen, ändert sich die Anzahl der Spaltenbahnen – ohne dass wir Breakpoints mithilfe von Medienabfragen hinzufügen und das Gitter neu definieren müssen.

Wir können dann die inneren Bereiche der Boxen mit einem Hauch von Flexbox aufräumen. Ich setze das Listenelement auf `display: flex` und die `flex-direction` auf `column`. Wir können dann ein automatisches Margin für die `.cta` verwenden, um diese Leiste nach unten in die Box zu verschieben.

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

Dies ist wirklich einer der Hauptgründe, warum jemand Flexbox anstelle von Grids verwenden würde, wenn er/sie nur etwas in einer Dimension ausrichten oder verteilen möchte – das ist ein Flexbox-Anwendungsfall.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Verhindern von Lücken mit dem dichten Schlüsselwort

Dies sieht jetzt alles ziemlich vollständig aus. Manchmal haben wir jedoch diese Karten, die weitaus mehr Inhalte enthalten als die anderen. Es könnte schön sein, diese sich über zwei Spuren erstrecken zu lassen, damit sie nicht so hoch sind. Wir haben eine Klasse `wide` auf meinem größeren Element und fügen eine Regel {{cssxref("grid-column-end")}} mit dem Wert `span 2` hinzu. Wenn das Raster nun auf dieses Element stößt, wird es ihm zwei Spuren zuweisen. Bei einigen Breakpoints führt dies dazu, dass eine Lücke im Grid entsteht, wo kein Platz vorhanden ist, um ein Zwei-Spuren-Element anzuordnen.

![Das Layout hat Lücken, da kein Platz vorhanden ist, um ein Zwei-Spuren-Element anzuordnen.](11-grid-auto-flow-sparse.png)

Wir können das Grid dazu bringen, diese Lücken rückzufüllen, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Container des Grids setzen. Seien Sie dabei jedoch vorsichtig, da dies die Elemente von ihrer logischen Quellreihenfolge entfernt. Sie sollten dies nur tun, wenn Ihre Elemente keine feste Reihenfolge haben – und sich der [Probleme](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering) bewusst sein, dass die Tabulatorreihenfolge der Quelle folgt und nicht Ihrer neu geordneten Anzeige.

```html hidden
<ul class="listing">
  <li>
    <h2>Element Eins</h2>
    <div class="body"><p>Der Inhalt dieses Eintrags wird hier platziert.</p></div>
    <div class="cta"><a href="">Zum Handeln aufrufen!</a></div>
  </li>
  <li>
    <h2>Element Zwei</h2>
    <div class="body"><p>Der Inhalt dieses Eintrags wird hier platziert.</p></div>
    <div class="cta"><a href="">Zum Handeln aufrufen!</a></div>
  </li>
  <li class="wide">
    <h2>Element Drei</h2>
    <div class="body">
      <p>Der Inhalt dieses Eintrags wird hier platziert.</p>
      <p>Dieser Eintrag hat mehr Text als die anderen Elemente.</p>
      <p>Einige mehr</p>
      <p>Vielleicht könnten wir etwas anderes damit machen?</p>
    </div>
    <div class="cta"><a href="">Zum Handeln aufrufen!</a></div>
  </li>
  <li>
    <h2>Element Vier</h2>
    <div class="body"><p>Der Inhalt dieses Eintrags wird hier platziert.</p></div>
    <div class="cta"><a href="">Zum Handeln aufrufen!</a></div>
  </li>
  <li>
    <h2>Element Fünf</h2>
    <div class="body"><p>Der Inhalt dieses Eintrags wird hier platziert.</p></div>
    <div class="cta"><a href="">Zum Handeln aufrufen!</a></div>
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

Diese Technik, die automatische Platzierung mit einigen auf bestimmte Elemente angewendeten Regeln zu kombinieren, ist sehr nützlich und kann Ihnen helfen, mit Inhalten umzugehen, die zum Beispiel von einem CMS ausgegeben werden, wo Sie wiederholte Elemente haben und möglicherweise einer bestimmten Klasse hinzufügen können, während sie in das HTML gerendert werden.

## Weiterführende Erkundung

Der beste Weg, um Grid Layout zu lernen, besteht darin, weiterhin Beispiele wie die hier behandelten zu erstellen. Wählen Sie etwas, das Sie normalerweise mit Ihrem bevorzugten Framework oder mit Floats bauen, und sehen Sie, ob Sie es mit Grid umsetzen können. Vergessen Sie nicht, Beispiele zu finden, die mit aktuellen Methoden unmöglich zu bauen sind. Das könnte bedeuten, sich von Magazinen oder anderen nicht-webbasierten Quellen inspirieren zu lassen. Grid Layout eröffnet Möglichkeiten, die wir bisher nicht hatten, wir müssen nicht an die gleichen alten Layouts gebunden sein.

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS Layout: Grids](/de/docs/Learn/CSS/CSS_layout/Grids)
- [Ein vollständiger Leitfaden zu CSS-Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS Grid Website Layout Beispiele](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
