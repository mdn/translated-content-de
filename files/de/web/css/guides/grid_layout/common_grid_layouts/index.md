---
title: Realisierung gängiger Layouts mit Grids
short-title: Häufige Grid-Layouts
slug: Web/CSS/Guides/Grid_layout/Common_grid_layouts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Um diese [Reihe von CSS-Grid-Layout-Leitfäden](/de/docs/Web/CSS/Guides/Grid_layout#guides) abzuschließen, werden wir einige verschiedene Layouts durchgehen, die einige der Techniken demonstrieren, die Sie beim Entwerfen mit Grid-Layout verwenden können. Wir schauen uns ein Beispiel mit {{cssxref("grid-template-areas")}}, ein flexibles 12-Spalten-Gittersystem, und auch eine Produktauflistung mit automatischer Platzierung an. Wie Sie aus dieser Reihe von Beispielen sehen können, gibt es oft mehr als einen Weg, die gewünschten Ergebnisse mit CSS-Grid-Layout zu erzielen. Wählen Sie die Methode, die Sie für die Probleme, die Sie lösen, und die Designs, die Sie umsetzen müssen, am hilfreichsten finden.

## Ein responsives Layout mit 1 bis 3 flüssigen Spalten unter Verwendung von `grid-template-areas`

Viele Websites sind eine Variation dieses Layouttyps, mit Inhalt, Seitenleisten, einem Header und einem Footer. In einem responsiven Design möchten Sie das Layout möglicherweise als eine einzelne Spalte anzeigen, eine Seitenleiste bei einem bestimmten Breakpoint hinzufügen und dann ein Dreispalten-Layout für breitere Bildschirme einführen.

![Drei verschiedene Layouts, die durch Neudefinition des Grids an zwei Breakpoints erstellt wurden.](11-responsive-areas.png)

Wir werden dieses Layout mit den _benannten Vorlagenbereichen_ erstellen, die wir im [Grid-Vorlagenbereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas) Leitfaden gelernt haben.

Das Markup ist ein Container mit Elementen für einen Header, Footer, Hauptinhalt, Navigation, Seitenleiste und einen Block zum Platzieren von Werbung.

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

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen, müssen wir die Bereiche außerhalb von [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) benennen. Wir benennen Bereiche mit der {{cssxref("grid-area")}} Eigenschaft.

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

Dies erstellt kein Layout. Vielmehr haben die Elemente jetzt Namen, die wir verwenden können, um dies zu tun. Bleiben Sie außerhalb von Media-Queries und richten Sie jetzt das Layout für die mobile Breite ein. Hier belassen wir alles in der Quellreihenfolge, um eventuelle Abweichungen zwischen Quelle und Anzeige zu vermeiden, wie im [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility) Leitfaden beschrieben. Wir haben keine Spalten- oder Zeilenspuren explizit definiert; dieses Layout diktiert eine einzelne Spalte und erstellt nach Bedarf Zeilen für jedes Element im impliziten Grid.

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

Mit unserem mobilen Layout können wir jetzt eine {{cssxref("@media")}} Abfrage hinzufügen, um dieses Layout für größere Bildschirme anzupassen, die genug Platz für die Anzeige von zwei Spalten bieten.

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

Sie können das Layout in der Wertangabe von {{cssxref("grid-template-areas")}} Formen annehmen sehen. Der `header` erstreckt sich über zwei Spuren, ebenso wie die `nav`. In der dritten Zeile platzieren wir die `sidebar` neben dem `content`. Wir platzieren den `ad`-Inhalt in der vierten Zeile, sodass er unter der Sidebar erscheint. Der `footer` befindet sich daneben unter dem Inhalt. Wir verwenden das [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) für die Navigation, um die Navigationselemente gleichmäßig in einer Reihe zu verteilen.

Jetzt können wir einen letzten Breakpoint für breitere Bildschirme hinzufügen, der ein Dreispalten-Layout anzeigen kann.

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

Das Dreispalten-Layout hat zwei `1fr`-Seitenspalten und eine mittlere Spalte mit `4fr` als Spurgröße. Dies bedeutet, dass der verfügbare Raum im Container in sechs Teile aufgeteilt wird und proportional zu unseren drei Spuren zugewiesen wird – ein Teil für jede der Seitenspalten und vier Teile für die Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte, neben dem `content`. In der rechten Spalte haben wir die `sidebar` und darunter die Anzeigen (`ad`). Der `footer` erstreckt sich jetzt über den gesamten unteren Bereich des Layouts. Wiederum verwenden wir das Flexbox-Layout, um die Navigation anzuzeigen, aber diesmal zeigen wir sie als Spalte statt als Reihe.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

Dieses einfache Beispiel demonstriert, wie ein Grid-Layout über verschiedene Breakpoints umarrangiert werden kann. Insbesondere ändern wir den Standort des `ad`-Blocks je nach unseren verschiedenen Spaltenkonfigurationen. Diese Methode mit benannten Bereichen kann sehr hilfreich sein, insbesondere in der Prototyping-Phase. Sie finden es möglicherweise einfacher, Namen statt Zahlen zu verwenden, wenn Sie mit der Platzierung von Elementen im Grid experimentieren.

## Ein flexibles 12-Spalten-Layout

CSS-Frameworks und Gridsysteme verwenden häufig flexible 12- oder 16-Spaltengitter. Wir können diese Art von System mit CSS-Grid-Layout erstellen. Als Beispiel erstellen wir ein flexibles 12-Spalten-Gitter mit 12 `1fr`-Einheit-Spaltenpfaden, jede mit einer Startlinie namens `col-start`. Dies bedeutet, dass wir zwölf Gitterlinien mit dem Namen `col-start` haben werden.

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

Um zu demonstrieren, wie dieses Gridsystem funktioniert, haben wir vier Kindelemente innerhalb eines Wrappers.

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

Wir können diese dann mithilfe der benannten Linien und auch des `span`-Schlüsselworts im Grid platzieren.

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

Wie im [Leitfaden zum Verwenden benannter Gitterlinien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) beschrieben, verwenden wir die benannten Linien, um unsere Elemente zu platzieren. Da wir 12 Linien mit demselben Namen haben, verwenden wir den Namen und den Index der Linie. Wenn Sie möchten, können Sie auch den Linienindex selbst verwenden und benannte Linien vermeiden.

Anstatt die Endliniennummer festzulegen, definieren wir, wie viele Spuren dieses Element überspannen soll, indem wir das `span`-Schlüsselwort verwenden. Beim Arbeiten mit einem Multispalten-Layoutsystem kann diese Methode intuitiver für diejenigen sein, die Blöcke in Bezug auf die Anzahl der Spuren, die das Gitter überspannt, betrachten und sie dann für verschiedene Breakpoints anpassen. Um zu sehen, wie sich die Blöcke an den Spuren ausrichten, verwenden Sie den Gitter-Inspektor in Ihren Browser-Entwicklertools; er veranschaulicht wahrscheinlich klar, wie die Elemente platziert werden.

![Zeigt die auf dem Grid platzierten Elemente mit in den Firefox-Entwicklungstools hervorgehobenen Grid-Spuren.](11-grid-inspector-12col.png)

Wir müssen dem Markup keine Zeile hinzufügen. CSS-Framework-Gridsysteme haben dies oft getan, um zu verhindern, dass Elemente in die Zeile darüber springen, für Browser, die CSS-Grid-Layout nicht unterstützen. Dieser Punkt ist jedoch jetzt hinfällig – alle modernen Browser unterstützen CSS-Grid-Layout seit langem. CSS-Grids ermöglichen es uns, Elemente in Zeilen zu platzieren, ohne dass sie in die darüberliegende Zeile aufsteigen, wenn sie leer bleibt. Aufgrund dieser _strikten_ Spalten- und Zeilenplatzierung können wir auch problemlos Leerraum in unserem Layout lassen. Wir benötigen auch keine speziellen Klassen, um Elemente im Gitter einzuziehen. Alles, was wir tun müssen, ist die Start- und Endlinie für das Element anzugeben.

## Aufbau eines Layouts mithilfe des 12-Spalten-Systems

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, können wir dasselbe Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal mit dem 12-Spalten-Gittersystem. Beginnen wir mit demselben Markup, das im Beispiel für die Vorlagenbereiche verwendet wurde.

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

Wir richten unser Grid wie im obigen Beispiel für ein 12-Spalten-Layout ein.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden erneut ein responsives Layout erstellen, diesmal unter Verwendung benannter Linien. Jeder Breakpoint verwendet einen 12-Spalten-Grid. Allerdings wird sich die Anzahl der Spuren, die Elemente überschreiten, je nach Bildschirmgröße ändern.

Wir beginnen {{Glossary("mobile_first", "mobile erste")}}. Für die schmalsten Bildschirme wollen wir, dass die Elemente in der Quellreihenfolge bleiben und sich über das gesamte Grid erstrecken.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Beim nächsten Breakpoint wollen wir ein Zweispalten-Layout. Unser Header und die Navigation erstrecken sich weiterhin über das gesamte Grid, sodass wir keine Positionierung für sie angeben müssen. Die Seitenleiste beginnt bei der ersten Spaltenlinie namens `col-start` und spannt sich über 3 Linien. Sie folgt nach der Zeilenlinie 3, da sich der Header und die Navigation in den ersten beiden Zeilenspuren befinden.

Das `ad`-Panel befindet sich unter der Seitenleiste, beginnend bei der Rasterzeile 4. Dann haben wir Inhalt und Footer, die bei col-start 4 beginnen und sich über neun Spuren erstrecken und beide zum Ende des Grids führen.

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

Schließlich definieren wir für Bildschirme, die größer als unser größter Breakpoint sind, eine dreispaltige Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Grid, aber jetzt bewegt sich die Navigation nach unten, um die erste Sidebar zu werden, mit dem Inhalt und dann der Sidebar daneben. Der Footer erstreckt sich jetzt ebenfalls über das vollständige Layout.

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

Überprüfen Sie erneut den Gitter-Inspektor in Ihren Browser-Entwicklungstools, um zu sehen, wie sich das Layout entwickelt hat.

![Zeigt das Layout mit durch den Grid-Inspektor hervorgehobenen Grid-Spuren.](11-grid-inspector-12col-layout.png)

Zu beachten ist, dass wir beim Erstellen dieses Layouts nicht jedes Element in jedem Breakpoint explizit auf dem Grid positionieren mussten. Wir haben die Platzierung von früheren Breakpoints geerbt – ein Vorteil der "mobile first"-Arbeitsweise. Wir haben auch die automatische Platzierung des Grids genutzt. Durch das Halten von Elementen in einer logischen Reihenfolge leistet die automatische Platzierung viel Arbeit bei der Platzierung der Elemente auf dem Grid.

## Eine Produktauflistung mit automatischer Platzierung

In diesem letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das vollständig auf automatischer Platzierung beruht.

Viele Layouts sind im Wesentlichen Sätze von "Karten" – Produktauflistungen, Fotogalerien und so weiter. Ein Grid ermöglicht die Erstellung dieser Auflistungen auf eine Weise, die responsiv ist, ohne [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries) hinzuzufügen. In diesem Beispiel kombinieren wir CSS-Grid und Flexbox-Layouts, um ein einfaches Produktauflaglayout zu erstellen.

Das Markup für die Auflistung ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, einige Texte unterschiedlicher Höhe und einen Call-to-Action-Link.

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

Wir erstellen ein Grid mit einer flexiblen Anzahl flexibler Spalten. Wir möchten, dass sie mindestens 200 Pixel breit sind und gleichmäßig den verbleibenden verfügbaren Raum teilen – sodass wir immer Spurenticks gleicher Breite erhalten. Wir erreichen dies mit der {{cssxref("minmax()")}} Funktion in unserer {{cssxref("repeat")}} Notation für die Spurengrößenbestimmung.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Wenn wir dieses CSS hinzufügen, werden die Elemente als Raster angeordnet. Wenn wir das Fenster kleiner oder breiter machen, ändert sich die Anzahl der Spurenticks – ohne Breakpoints durch Media Queries hinzuzufügen und ohne das Grid neu definieren zu müssen.

Wir können das Innere der Boxen mit Flexbox etwas aufräumen. Wir setzen das Listenelement auf `display: flex` und die {{cssxref("flex-direction")}} auf `column`. Wir können dann einen automatischen Rand auf der `.cta` verwenden, um diese Leiste nach unten in die Box zu schieben.

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

Dies ist einer der Hauptgründe, Flexbox statt CSS-Grid-Layout zu verwenden. Wenn Sie Inhalte in einer einzigen Dimension ausrichten oder verteilen, ist das ein Anwendungsfall für Flexbox.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Vermeidung von Lücken mit dem dichten Schlüsselwort

Dies sieht jetzt ziemlich vollständig aus. Allerdings haben wir manchmal Karten, die deutlich mehr Inhalt enthalten als die anderen. Es wäre schön, wenn diese zwei Spuren überspannen würden, dann wären sie nicht so hoch. Wir fügen der größeren Position eine `wide` Klasse hinzu und fügen eine Regel hinzu, die ihr ein {{cssxref("grid-column-end")}} mit einem Wert von `span 2` gibt. Wenn dieses Element angetroffen wird, wird es zwei Spuren zugewiesen. Dies bedeutet, dass wir an einigen Breakpoints eine Lücke im Raster bekommen – wo nicht genug Platz vorhanden ist, um ein zweispuriges Element zu platzieren.

![Das Layout hat Lücken, da nicht genügend Platz ist, um ein zweispuriges Element zu platzieren.](11-grid-auto-flow-sparse.png)

Wir können das Raster so einstellen, dass es diese Lücken zurückfüllt, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Rastercontainer setzen. Seien Sie vorsichtig, wenn Sie dies tun, da es dazu führen kann, dass Elemente aus ihrer logischen Quellreihenfolge herausgenommen werden. Sie sollten dies nur tun, wenn Ihre Elemente keine feste Reihenfolge haben. Beachten Sie auch die [Barrierefreiheits- und Reorder-Probleme](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility#visual_not_logical_re-ordering), die sich aus der Tab-Reihenfolge ergeben, die der Quelle folgt und nicht Ihrer neu angeordneten Anzeige.

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

Die Verwendung der automatischen Platzierung mit einigen Regeln, die auf bestimmte Elemente angewendet werden, ist sehr nützlich und kann bei Inhalten helfen, die Sie nicht steuern können, wie CMS-Ausgaben, bei denen Sie wiederholte Elemente haben und [strukturelle Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes) verwenden können, um diese anzusprechen.

## Weitere Erkundung

CSS-Grid-Layout bietet so viele Möglichkeiten. Der beste Weg, das Grid-Layout zu lernen, besteht darin, weiterhin Beispiele wie die hier behandelten zu erstellen. Wählen Sie ein Layout von einer responsiven Website, die Ihnen gefällt, und versuchen Sie, es mit Grid zu erstellen. Sie können sogar Inspiration aus Magazinen oder anderen nicht webbasierten Quellen nehmen.

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
- [CSS-Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [Ein vollständiger Leitfaden zu CSS-Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS-Grid-Website-Layout-Beispiele](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
