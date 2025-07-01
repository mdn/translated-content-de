---
title: Realisierung von gängigen Layouts mit Grids
short-title: Gängige Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Um diese [Reihe von CSS Grid-Layout-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) abzurunden, werden wir einige verschiedene Layouts durchgehen, die einige der Techniken demonstrieren, die Sie beim Design mit Grid-Layout verwenden können. Wir werden ein Beispiel mit {{cssxref("grid-template-areas")}}, ein flexibles 12-Spalten-Grid-System und eine Produktauflistung mit automatischer Platzierung betrachten. Wie Sie an diesen Beispielen sehen können, gibt es oft mehr als einen Weg, um die gewünschten Ergebnisse mit CSS Grid-Layout zu erzielen. Wählen Sie die Methode, die Sie für die von Ihnen zu lösenden Probleme und die umzusetzenen Designs am hilfreichsten finden.

## Ein responsives Layout mit 1 bis 3 fließenden Spalten unter Verwendung von `grid-template-areas`

Viele Websites sind eine Variation dieses Layouttyps, mit Inhalten, Seitenleisten, einem Header und einem Footer. Bei einem responsiven Design möchten Sie möglicherweise das Layout als eine einzige Spalte anzeigen, eine Seitenleiste bei einem bestimmten Breakpoint hinzufügen und dann bei breiteren Bildschirmen ein Drei-Spalten-Layout nutzen.

![Drei verschiedene Layouts, die durch die Neueinteilung des Grids an zwei Breakpoints erstellt wurden.](11-responsive-areas.png)

Wir werden dieses Layout unter Verwendung der _benannten Template-Bereiche_ erstellen, die wir im [Grid-Template-Bereiche-Leitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) kennengelernt haben.

Das Markup ist ein Container mit Elementen darin für einen Header, Footer, Hauptinhalt, Navigation, Seitenleiste und einen Block zur Platzierung von Werbung.

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

Da wir {{cssxref("grid-template-areas")}} zur Erstellung des Layouts verwenden, müssen wir die Bereiche außerhalb jeglicher [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benennen. Wir benennen Bereiche mit der Eigenschaft {{cssxref("grid-area")}}.

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

Dies erstellt kein Layout. Vielmehr haben die Elemente jetzt Namen, die wir verwenden können, um eines zu erstellen. Indem wir außerhalb jeglicher Media Queries bleiben, richten wir jetzt das Layout für die mobile Breite ein. Hier bleiben wir in der Quellreihenfolge, um jegliche Diskrepanz zwischen Quelle und Anzeige zu vermeiden, wie im [Grid-Layout und Barrierefreiheit-Leitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) beschrieben. Wir haben keine Spalten- oder Zeilentracks explizit definiert; dieses Layout diktiert eine einzelne Spalte und erstellt Zeilen nach Bedarf für jedes Element im impliziten Grid.

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

Mit unserem mobilen Layout an Ort und Stelle können wir nun eine {{cssxref("@media")}}-Abfrage hinzufügen, um dieses Layout für größere Bildschirme mit genügend Platz für die Anzeige von zwei Spalten anzupassen.

```css
@media (width >= 500px) {
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

Sie können das Layout in dem Wert von {{cssxref("grid-template-areas")}} entstehen sehen. Der `header` spannt sich über zwei Spalten-Tracks, ebenso der `nav`. In der dritten Zeilen-Track platzieren wir die `sidebar` neben dem `content`. Wir platzieren den `ad`-Inhalt in der vierten Zeile, sodass er unterhalb der Seitenleiste erscheint. Der `footer` befindet sich daneben unter dem Inhalt. Wir verwenden das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) in der Navigation, um die Navigationspunkte gleichmäßig in einer Zeile zu verteilen.

Wir können jetzt einen endgültigen Breakpoint für breitere Bildschirme hinzufügen, die ein Drei-Spalten-Layout darstellen können.

```css
@media (width >= 700px) {
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

Das Drei-Spalten-Layout hat zwei Seitenspalten mit `1fr`-Einheiten und eine Mittelsäule mit `4fr` als Trackgröße. Dies bedeutet, dass der verfügbare Raum im Container in sechs Teile aufgeteilt wird und proportional auf unsere drei Tracks verteilt wird – ein Teil pro Seitenspalte und vier Teile für die Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte zusammen mit dem `content`. In der rechten Spalte haben wir die `sidebar` und darunter die Werbung (`ad`). Der `footer` spannt sich nun über den gesamten unteren Teil des Layouts. Auch hier verwenden wir Flexbox, um die Navigation anzuzeigen, diesmal jedoch als Spalte anstelle einer Zeile.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

Dieses einfache Beispiel zeigt, wie man ein Grid-Layout über verschiedene Breakpoints hinweg neu ordnet. Insbesondere ändern wir den Standort des `ad`-Blocks entsprechend unseren unterschiedlichen Spalten-Setups. Diese Methode mit benannten Bereichen kann sehr hilfreich sein, insbesondere in der Prototyping-Phase. Möglicherweise finden Sie es einfacher, Namen anstelle von Zahlen zu verwenden, wenn Sie die Position von Elementen auf dem Grid anpassen.

## Ein flexibles 12-Spalten-Layout

CSS-Frameworks und Grid-Systeme verwenden häufig flexible Grids mit 12 oder 16 Spalten. Wir können diese Art von System mit CSS Grid-Layout erstellen. Als Beispiel erstellen wir ein flexibles 12-Spalten-Grid mit 12 `1fr`-Einheiten-Spalten-Tracks, jeder mit einer Startlinie namens `col-start`. Das bedeutet, dass wir zwölf Grid-Linien mit dem Namen `col-start` haben werden.

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

Um zu demonstrieren, wie dieses Grid-System funktioniert, haben wir vier Kindelemente innerhalb eines Wrappers.

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

Wir können diese dann unter Verwendung der benannten Linien und auch des `span`-Schlüsselworts auf dem Grid platzieren.

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

Wie im [Leitfaden zu benannten Gitternlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannten Linien, um unsere Elemente zu platzieren. Da wir 12 Linien mit demselben Namen haben, verwenden wir den Namen und den Index der Linie. Wenn Sie möchten, können Sie auch einfach den Linienindex selbst verwenden und die Verwendung benannter Linien vermeiden.

Anstatt die Endliniennummer festzulegen, definieren wir, wie viele Tracks dieses Element mit dem `span`-Schlüsselwort umfassen soll. Bei der Arbeit mit einem Mehrspalten-Layout-System kann diese Methode intuitiver für diejenigen sein, die an Blöcke im Hinblick auf die Anzahl der Grid-Tracks, die sie umfassen, denken und dann für verschiedene Breakpoints anpassen. Um zu sehen, wie sich die Blöcke an den Tracks ausrichten, verwenden Sie den Grid-Inspektor in Ihren Browser-Entwicklertools; dieser zeigt wahrscheinlich deutlich, wie die Elemente platziert werden.

![Zeigt die Elemente, die auf dem Grid mit hervorgehobenen Grid-Tracks in den Firefox-Entwicklertools platziert wurden.](11-grid-inspector-12col.png)

Wir müssen kein Markup hinzufügen, um eine Zeile zu erstellen. CSS-Framework-Grid-Systeme haben dies oft getan, um zu verhindern, dass Elemente für Browser, die CSS Grid-Layout nicht unterstützen, in die obere Zeile springt. Dieser Punkt ist jedoch mittlerweile irrelevant — alle modernen Browser unterstützen CSS Grid-Layout schon lange. CSS-Grids erlauben es uns, Elemente in Zeilen zu platzieren, ohne dass sie in die darüberliegende Zeile steigen, wenn diese leer ist. Aufgrund dieser _strengen_ Spalten- und Zeilenplatzierung können wir auch leicht Leerzeichen in unserem Layout lassen. Wir benötigen auch keine speziellen Klassen, um Elemente in das Grid einzurücken. Alles, was wir tun müssen, ist, die Start- und Endlinie für das Element anzugeben.

## Ein Layout mit dem 12-Spalten-System erstellen

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, können wir dasselbe Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} gemacht haben, diesmal jedoch mit dem 12-Spalten-Grid-System. Lassen Sie uns mit demselben Markup beginnen, wie es im Beispiel des Grid-Template-Bereichs verwendet wurde.

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

Wir richten unser Grid wie im Beispiel des 12-Spalten-Layouts oben ein.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden wieder ein responsives Layout machen, diesmal unter Verwendung benannter Linien. Jeder Breakpoint wird ein 12-Spalten-Grid verwenden. Die Anzahl der Tracks, die die Elemente umfassen, ändert sich jedoch je nach Größe des Bildschirms.

Wir beginnen {{Glossary("mobile_first", "mobile first")}}. Für die schmalsten Bildschirme möchten wir, dass die Elemente in der Quellreihenfolge bleiben und alle über das gesamte Grid spannen.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Beim nächsten Breakpoint möchten wir ein Zwei-Spalten-Layout. Unser Header und die Navigation erstrecken sich weiterhin über das gesamte Grid, daher müssen wir ihre Position nicht angeben. Die Seitenleiste beginnt an der ersten Spaltenlinie namens `col-start` und erstreckt sich über 3 Linien. Sie folgt der Zeilenlinie 3, da Header und Navigation sich in den ersten beiden Zeilen-Tracks befinden.

Das `ad`-Panel befindet sich unterhalb der Seitenleiste, beginnend an Grid-Zeilenlinie 4. Dann haben wir den Inhalt und den Footer, die an col-start 4 beginnen und neun Tracks umfassen, was beide bis zum Ende des Grids bringt.

```css
@media (width >= 500px) {
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

Schließlich definieren wir für Bildschirme, die größer als unser größter Breakpoint sind, eine Drei-Spalten-Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Grid, aber jetzt bewegt sich die Navigation nach unten, um die erste Seitenleiste zu werden, mit dem Inhalt und dann der Seitenleiste neben ihm. Der Footer spannt sich nun ebenfalls über das gesamte Layout.

```css
@media (width >= 700px) {
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

Überprüfen Sie erneut den Grid-Inspektor in Ihren Browser-Entwicklertools, um zu sehen, wie das Layout Form angenommen hat.

![Zeigt das Layout mit hervorgehobenen Grid-Tracks im Grid-Inspektor.](11-grid-inspector-12col-layout.png)

Etwas, das zu beachten ist, während wir dieses Layout erstellt haben, ist, dass wir nicht jedes Element explizit bei jedem Breakpoint auf dem Grid positionieren mussten. Wir haben die Platzierung geerbt, die für frühere Breakpoints eingerichtet wurde – ein Vorteil der Arbeit „mobile first“. Wir haben auch das automatische Platzieren von Grids genutzt. Durch die Beibehaltung einer logischen Reihenfolge der Elemente erledigt die automatische Platzierung einiges an Arbeit für uns, um die Elemente auf dem Grid zu platzieren.

## Eine Produktauflistung mit automatischer Platzierung

In diesem letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das vollständig auf automatischer Platzierung basiert.

Viele Layouts bestehen im Wesentlichen aus „Karten“ – Produktlisten, Bildgalerien und so weiter. Ein Grid ermöglicht es, diese Listen so zu erstellen, dass sie ohne die Notwendigkeit von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) responsiv sind. In diesem Beispiel kombinieren wir CSS-Grid- und Flexbox-Layouts, um ein grundlegendes Produktlisten-Layout zu erstellen.

Das Markup für die Liste ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, Text unterschiedlicher Höhe und einen Call-to-Action-Link.

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

Wir erstellen ein Grid mit einer flexiblen Anzahl flexibler Spalten. Wir möchten, dass sie mindestens 200 Pixel breit sind und den gesamten verfügbaren restlichen Raum gleichmäßig teilen – so erhalten wir immer Spalten-Tracks mit gleicher Breite. Dies erreichen wir mit der Funktion {{cssxref("minmax()")}} in unserer {{cssxref("repeat")}}-Notation für die Track-Größenbestimmung.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Wenn wir dieses CSS hinzufügen, werden die Elemente als Grid angeordnet. Wenn wir das Fenster verkleinern oder vergrößern, ändert sich die Anzahl der Spalten-Tracks – ohne Media Queries, die Breakpoints hinzufügen, und ohne die Notwendigkeit, das Grid neu zu definieren.

Wir können das Innere der Boxen mit etwas Flexbox aufräumen. Wir setzen das Listenelement auf `display: flex` und die {{cssxref("flex-direction")}} auf `column`. Wir können dann einen automatischen Rand auf der `.cta` verwenden, um diese Leiste an den unteren Rand der Box zu schieben.

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

Dies ist ein Hauptgrund, Flexbox anstelle des CSS-Grid-Layouts zu verwenden. Wenn Sie Inhalte in einer einzigen Dimension ausrichten oder verteilen, ist dies ein Anwendungsfall für Flexbox.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Verhindern von Lücken mit dem dichten Schlüsselwort

Dies ist nun alles ziemlich vollständig. Allerdings haben wir manchmal Karten, die wesentlich mehr Inhalt enthalten als andere. Es könnte schön sein, diese über zwei Tracks zu erstrecken, damit sie nicht so hoch sind. Wir fügen der größeren Karte eine `wide`-Klasse hinzu und geben ihnen eine Regel, die `grid-column-end` mit einem Wert von `span 2` hat. Wenn dieses Element auftritt, wird es zwei Tracks zugewiesen. Dies bedeutet, dass wir bei einigen Breakpoints eine Lücke im Grid erhalten – dort, wo nicht genug Platz ist, um ein Zwei-Track-Element zu layouten.

![Das Layout hat Lücken, da nicht genug Platz ist, um ein Zwei-Track-Element zu layouten.](11-grid-auto-flow-sparse.png)

Wir können das Grid diese Lücken wieder auffüllen lassen, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Grid-Container setzen. Seien Sie vorsichtig, wenn Sie dies tun, da es dazu führen kann, dass Elemente aus ihrer logischen Quellreihenfolge genommen werden. Sie sollten dies nur tun, wenn Ihre Elemente keine festgelegte Reihenfolge haben. Beachten Sie auch die [Zugänglichkeits- und Umsortierungsprobleme](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering), die dadurch entstehen, dass die Tabulatorreihenfolge der Quelle folgt und nicht Ihrer neu angeordneten Anzeige.

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

Die Verwendung der automatischen Platzierung mit einigen angewandten Regeln auf bestimmte Elemente ist sehr nützlich und kann bei Inhalten, die Sie nicht kontrollieren können, wie CMS-Ausgaben, helfen, bei denen Sie wiederholte Elemente haben und [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) verwenden können, um sie anzusprechen.

## Weitere Erkundungen

CSS Grid-Layout bietet so viele Möglichkeiten. Der beste Weg, das Grid-Layout zu lernen, ist, weiterhin Beispiele wie die hier behandelten zu erstellen. Wählen Sie ein Layout von einer responsiven Website, die Ihnen gefällt, und sehen Sie, ob Sie es mit Grid erstellen können. Sie können sich sogar von Zeitschriften oder anderen nicht-webbasierten Quellen inspirieren lassen.

- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [Ein umfassender Leitfaden zu CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS Grid Website-layout-Beispiele](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
