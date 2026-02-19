---
title: Realisierung gängiger Layouts mit Grids
short-title: Gängige Grid-Layouts
slug: Web/CSS/Guides/Grid_layout/Common_grid_layouts
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

Um diese [Reihe von CSS-Grid-Layout-Leitfäden](/de/docs/Web/CSS/Guides/Grid_layout#guides) abzurunden, werden wir einige unterschiedliche Layouts durchgehen, die einige der Techniken demonstrieren, die Sie beim Entwerfen mit Grid-Layout verwenden können. Wir werden ein Beispiel mit {{cssxref("grid-template-areas")}}, ein flexibles 12-Spalten-Grid-System und auch eine Produktliste mit automatischer Platzierung betrachten. Wie Sie aus dieser Reihe von Beispielen sehen können, gibt es oft mehr als einen Weg, um die gewünschten Ergebnisse mit CSS-Grid-Layout zu erzielen. Wählen Sie die Methode, die Sie für die Probleme, die Sie lösen, und die Designs, die Sie umsetzen müssen, am hilfreichsten finden.

## Ein responsives Layout mit 1 bis 3 flüssigen Spalten unter Verwendung von `grid-template-areas`

Viele Websites sind eine Variation dieses Layout-Typs mit Inhalten, Seitenleisten, einem Header und einem Footer. In einem responsiven Design möchten Sie möglicherweise das Layout als einzelne Spalte darstellen, eine Seitenleiste bei einem bestimmten Breakpoint hinzufügen und dann ein Drei-Spalten-Layout für breitere Bildschirme einfügen.

![drei verschiedene Layouts, die durch Neudefinieren des Grids an zwei Breakpoints erstellt wurden.](11-responsive-areas.png)

Wir werden dieses Layout mit den _benannten Vorlagenbereichen_ erstellen, die wir im [Grid template areas](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas) Leitfaden kennengelernt haben.

Das Markup ist ein Container mit Elementen für einen Header, Footer, Hauptinhalt, Navigation, eine Seitenleiste und einen Block zur Platzierung von Werbung.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em "Helvetica",
    "Arial",
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

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen, müssen wir die Bereiche außerhalb von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) benennen. Wir benennen Bereiche mithilfe der {{cssxref("grid-area")}} Eigenschaft.

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

Dies erstellt kein Layout. Vielmehr haben die Elemente jetzt Namen, die wir verwenden können, um dies zu tun. Wir bleiben außerhalb von Media Queries und richten nun das Layout für die mobile Breite ein. Hierbei behalten wir alles in der Quellreihenfolge, um jegliche Diskrepanz zwischen Quelle und Anzeige zu vermeiden, wie im [Grid layout and accessibility](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility) Leitfaden beschrieben. Wir haben ausdrücklich keine Spalten oder Reihen definiert; dieses Layout schreibt eine einzelne Spalte vor und erstellt Reihen nach Bedarf für jedes Element im impliziten Grid.

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

Mit unserem mobilen Layout können wir nun eine {{cssxref("@media")}} Abfrage hinzufügen, um dieses Layout für größere Bildschirme mit genügend Platz für die Anzeige von zwei Spalten anzupassen.

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

Sie können das Layout in der Wertzuweisung von {{cssxref("grid-template-areas")}} sehen. Der `header` spannt sich über zwei Spalten, ebenso die `nav`. In der dritten Reihenposition platzieren wir die `sidebar` neben dem `content`. Wir platzieren den `ad` Inhalt in der vierten Reihenposition, damit er unter der Seitenleiste erscheint. Der `footer` befindet sich neben dem Inhalt darunter. Wir verwenden das [CSS flexible box layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) auf der Navigation, um die Navigationselemente gleichmäßig in einer Reihe zu verteilen.

Wir können nun einen letzten Breakpoint für breitere Bildschirme hinzufügen, die ein Drei-Spalten-Layout anzeigen können.

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

Das Drei-Spalten-Layout hat zwei `1fr` Einheiten für die seitlichen Spalten und eine mittlere Spalte mit `4fr` als Spurgröße. Dies bedeutet, dass der verfügbare Platz im Container in sechs Teile aufgeteilt wird und im Verhältnis zu unseren drei Spuren zugewiesen wird – ein Teil für jede der seitlichen Spalten und vier Teile für die Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte neben dem `content`. In der rechten Spalte haben wir die `sidebar` und darunter die Anzeigen (`ad`). Der `footer` erstreckt sich nun über den gesamten unteren Bereich des Layouts. Wir verwenden erneut Flexbox, um die Navigation anzuzeigen, aber dieses Mal zeigen wir sie als Spalte statt als Reihe.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

Dieses grundlegende Beispiel zeigt, wie man ein Grid-Layout über verschiedene Breakpoints hinweg umstellen kann. Insbesondere ändern wir die Position des `ad` Blocks wie es in unseren verschiedenen Spaltensets angemessen ist. Diese Methode mit benannten Bereichen kann sehr hilfreich sein, besonders in der Prototyping-Phase. Sie finden es möglicherweise einfacher, Namen anstelle von Zahlen zu verwenden, wenn Sie mit der Positionierung von Elementen auf dem Grid spielen.

## Ein flexibles 12-Spalten-Layout

CSS-Frameworks und Grid-Systeme verwenden üblicherweise flexible Grids mit 12 oder 16 Spalten. Wir können diese Art von System mit CSS-Grid-Layout erstellen. Als Beispiel wollen wir ein flexibles 12-Spalten-Grid mit 12 `1fr`-Einheiten-Spurentexturen erstellen, jede mit einer Startlinie, die `col-start` heißt. Das bedeutet, dass wir zwölf Gitterlinien namens `col-start` haben werden.

```css hidden
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em "Helvetica",
    "Arial",
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

Um zu zeigen, wie dieses Grid-System funktioniert, haben wir vier Kind-Elemente innerhalb eines Wrappers.

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

Wir können sie dann auf dem Grid mit den benannten Linien und auch dem `span` Schlüsselwort platzieren.

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

Wie im [using named grid lines guide](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) beschrieben, verwenden wir die benannten Linien, um unsere Elemente zu platzieren. Da wir 12 Linien alle mit demselben Namen haben, verwenden wir den Namen und den Index der Linie. Wenn Sie möchten, können Sie den Linienindex selbst verwenden und auf benannte Linien verzichten.

Anstatt die Endliniennummer festzulegen, definieren wir, wie viele Spuren dieses Element mit dem `span` Schlüsselwort überspannen soll. Wenn Sie mit einem Mehrspalten-Layout arbeiten, könnte diese Methode für diejenigen intuitiver sein, die von Blöcken in Bezug auf die Anzahl der Gitterspuren denken, die sie überspannen, und dann für verschiedene Breakpoints anpassen. Um zu sehen, wie sich die Blöcke an den Spuren ausrichten, verwenden Sie den Grid Inspector in den Entwicklertools Ihres Browsers; es zeigt wahrscheinlich klar, wie die Elemente platziert sind.

![Zeigt die auf dem Grid platzierten Elemente mit hervorgehobenen Gitterspuren in den Firefox-Entwicklertools.](11-grid-inspector-12col.png)

Wir müssen kein Markup hinzufügen, um eine Reihe zu erstellen. CSS-Framework-Grid-Systeme haben dies oft getan, um zu verhindern, dass Elemente in die Reihe darüber aufsteigen, für Browser, die CSS-Grid-Layout nicht unterstützen. Dieser Punkt ist jedoch inzwischen hinfällig – alle modernen Browser unterstützen CSS-Grid-Layout schon lange. CSS-Grids ermöglichen es uns, Elemente in Reihen zu platzieren, ohne Gefahr, dass sie in die Reihe darüber aufsteigen, wenn sie leer bleibt. Aufgrund dieser _strikten_ Spalten- und Reihenplatzierung können wir auch leicht weißen Raum in unserem Layout lassen. Wir benötigen auch keine speziellen Klassen, um Elemente ins Grid einzurücken. Alles, was wir tun müssen, ist, die Start- und Endlinie für das Element anzugeben.

## Ein Layout unter Verwendung des 12-Spalten-Systems erstellen

Um zu sehen, wie diese Layout-Methode in der Praxis funktioniert, können wir das gleiche Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal jedoch mit dem 12-Spalten-Grid-System. Beginnen wir mit demselben Markup, das im Grid-Template-Bereiche-Beispiel verwendet wurde.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em "Helvetica",
    "Arial",
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

Wir richten unser Grid ein, wie wir es für das 12-Spalten-Layout-Beispiel oben getan haben.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir erstellen erneut ein responsives Layout, dieses Mal mit benannten Linien. Jeder Breakpoint wird ein 12-Spalten-Grid verwenden. Die Anzahl der Spuren, die Elemente überspannen, ändert sich jedoch je nach Größe des Bildschirms.

Wir beginnen {{Glossary("mobile_first", "mobile first")}}. Für die schmalsten Bildschirme möchten wir, dass die Elemente in Quellreihenfolge bleiben und alle über das gesamte Grid spannen.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Beim nächsten Breakpoint wollen wir ein Zwei-Spalten-Layout. Unser Header und die Navigation spannen weiterhin das vollständige Grid, daher müssen wir keine Positionierung für sie angeben. Die Seitenleiste beginnt an der ersten Spaltenlinie namens `col-start` und spannt 3 Linien. Sie folgt auf die Reihenlinie 3, da der Header und die Navigation in den ersten beiden Reihenspuren sind.

Das `ad`-Panel befindet sich unterhalb der Seitenleiste, beginnend bei der Grid-Reihenlinie 4. Dann haben wir den Inhalt und den Footer, die bei col-start 4 starten und neun Spuren überspannen, beide bis zum Ende des Grids führend.

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

Schließlich definieren wir für Bildschirme, die größer als unser größter Breakpoint sind, eine Drei-Spalten-Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Grid, aber nun bewegt sich die Navigation runter, um die erste Seitenleiste zu werden, mit dem Inhalt und dann der Seitenleiste neben ihr. Der Footer spannt sich jetzt auch über das gesamte Layout.

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

Überprüfen Sie erneut den Grid Inspector in den Entwicklertools Ihres Browsers, um zu sehen, wie das Layout Form angenommen hat.

![Zeigt das Layout mit hervorgehobenen Gitterspuren durch den Grid Inspector.](11-grid-inspector-12col-layout.png)

Etwas zu beachten, während wir dieses Layout erstellt haben, ist, dass wir nicht jedes Element explizit bei jedem Breakpoint im Grid positionieren mussten. Wir haben das beim früheren Breakpoint festgelegte Placement übernommen – ein Vorteil der Arbeit "mobile first". Wir haben auch die Vorteile der automatischen Grid-Platzierung genutzt. Indem wir Elemente in einer logischen Reihenfolge halten, erledigt die automatische Platzierung ziemlich viel Arbeit für uns, indem sie die Elemente auf dem Gitter platzieren.

## Eine Produktliste mit automatischer Platzierung

In diesem letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das vollständig auf automatischer Platzierung beruht.

Viele Layouts sind im Wesentlichen Sets von "Karten" – Produktlisten, Bildergalerien usw. Ein Grid ermöglicht die Erstellung dieser Listen auf eine Weise, die ohne das Hinzufügen von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) responsiv ist. In diesem Beispiel kombinieren wir CSS-Grid und Flexbox-Layouts, um ein grundlegendes Produktlistungs-Layout zu erstellen.

Das Markup für die Liste ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, etwas Text von unterschiedlicher Höhe und einen Call-to-Action-Link.

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
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}
a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: white;
  text-align: center;
  margin: 0;
  padding: 20px;
}
```

Wir erstellen ein Grid mit einer flexiblen Anzahl flexibler Spalten. Wir möchten, dass sie mindestens 200 Pixel breit sind und den verfügbaren restlichen Platz gleichmäßig teilen – so dass wir immer Spaltenspuren gleicher Breite erhalten. Dies erreichen wir mit der {{cssxref("minmax()")}} Funktion in unserer {{cssxref("repeat")}} Notation für die Spurgröße.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Wenn wir dieses CSS hinzufügen, werden die Elemente als ein Grid angeordnet. Wenn wir das Fenster kleiner oder breiter machen, ändert sich die Anzahl der Spaltenspuren – ohne dass Media Queries Breakpoints hinzufügen und ohne dass das Grid neu definiert werden muss.

Wir können die inneren Bereiche der Boxen mit etwas Flexbox aufräumen. Wir setzen das Listenelement auf `display: flex` und die {{cssxref("flex-direction")}} auf `column`. Anschließend können wir einen automatischen Rand auf der `.cta` verwenden, um diese Leiste an den unteren Rand der Box zu schieben.

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

Dies ist einer der Hauptgründe, Flexbox anstelle des CSS-Grid-Layouts zu verwenden. Wenn Sie Inhalt in einer einzigen Dimension ausrichten oder verteilen, ist dies ein Fall für Flexbox.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Verhindern von Lücken mit dem dichten Keyword

Das sieht nun alles ziemlich komplett aus. Wir haben jedoch manchmal Karten, die weitaus mehr Inhalt als die anderen enthalten. Es könnte schön sein, diese über zwei Spuren zu spannen, damit sie nicht so hoch sind. Wir fügen der größeren Karte eine Klasse `wide` hinzu und eine Regel, die ihr ein {{cssxref("grid-column-end")}} mit einem Wert von `span 2` gibt. Wenn dieses Element begegnet wird, wird es auf zwei Spuren zugewiesen. Dies bedeutet, dass wir bei manchen Breakpoints eine Lücke im Grid bekommen – wo nicht genug Platz ist, um ein Element mit zwei Spuren zu layouten.

![Das Layout hat Lücken, da nicht genug Platz vorhanden ist, um ein Element mit zwei Spuren zu layouten.](11-grid-auto-flow-sparse.png)

Wir können das Grid diese Lücken auffüllen lassen, indem wir die {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Grid-Container setzen. Seien Sie vorsichtig, wenn Sie dies tun, da es dazu führen kann, dass Elemente aus ihrer logischen Quellordnung herausgenommen werden. Sie sollten dies nur tun, wenn Ihre Elemente keine feste Reihenfolge haben. Seien Sie sich auch der [Barrierefreiheits- und Neuordnungsprobleme](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility#visual_not_logical_re-ordering) bewusst, die sich daraus ergeben, dass die Tab-Reihenfolge der Quelle folgt und nicht Ihrer neu angeordneten Anzeige.

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
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}
a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: white;
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

Die Verwendung der automatischen Platzierung mit einigen auf bestimmte Elemente angewandten Regeln ist sehr nützlich und kann mit Inhalten helfen, die Sie nicht kontrollieren können, wie z. B. CMS-Ausgaben, bei denen Sie wiederholte Elemente haben und [strukturelle Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes) verwenden können, um sie anzusprechen.

## Weiteres Erforschen

CSS-Grid-Layout bietet so viele Möglichkeiten. Der beste Weg, um den Umgang mit Grid-Layout zu lernen, ist, weiterhin Beispiele wie die hier behandelten zu erstellen. Wählen Sie ein Layout von einer responsiven Website, die Ihnen gefällt, und sehen Sie, ob Sie es mit Grid umsetzen können. Sie können sogar Inspirationen aus Magazinen oder anderen nicht webbasierten Quellen ziehen.

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
- [CSS Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [CSS Grid Layout Guide](https://css-tricks.com/complete-guide-css-grid-layout/) auf CSS-Tricks (2021)
- [Grid by example](https://gridbyexample.com/)
- [CSS Grid Website Layout Examples](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
