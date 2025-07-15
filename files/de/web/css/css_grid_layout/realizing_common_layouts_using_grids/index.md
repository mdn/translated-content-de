---
title: Realisierung gemeinsamer Layouts mit Grids
short-title: Häufige Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Um diese [Reihe von CSS-Grid-Layout-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) abzurunden, werden wir einige verschiedene Layouts durchgehen, die einige der Techniken demonstrieren, die beim Design mit Grid-Layout verwendet werden können. Wir werden ein Beispiel mit {{cssxref("grid-template-areas")}}, ein flexibles 12-Spalten-Grid-System und auch eine Produktliste mit automatischer Platzierung anschauen. Wie Sie aus dieser Reihe von Beispielen sehen können, gibt es oft mehr als einen Weg, um die gewünschten Ergebnisse mit CSS-Grid-Layout zu erzielen. Wählen Sie die Methode, die Sie für die Lösung Ihrer Probleme und die Umsetzung Ihrer Designs am hilfreichsten finden.

## Ein responsives Layout mit 1 bis 3 flexiblen Spalten mit `grid-template-areas`

Viele Websites sind eine Variation dieses Layouttyps, mit Inhalten, Sidebars, einem Header und einem Footer. In einem responsiven Design möchten Sie möglicherweise das Layout als eine einzelne Spalte anzeigen und bei einem bestimmten Breakpoint eine Sidebar hinzufügen, um dann bei breiteren Bildschirmen auf ein Drei-Spalten-Layout zu wechseln.

![Drei verschiedene Layouts, die durch die Neudefinition des Grids an zwei Breakpoints erstellt werden.](11-responsive-areas.png)

Wir werden dieses Layout mithilfe der _benannten Template-Bereiche_ erstellen, die wir im [Leitfaden zu Grid-Template-Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) kennengelernt haben.

Die Markup-Struktur besteht aus einem Container mit Elementen für einen Header, Footer, Hauptinhalt, Navigation, Sidebar und einem Block für Werbung.

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

Da wir {{cssxref("grid-template-areas")}} für die Erstellung des Layouts verwenden, müssen wir die Bereiche außerhalb jeglicher [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benennen. Wir benennen Bereiche mithilfe der {{cssxref("grid-area")}}-Eigenschaft.

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

Dies erstellt kein Layout. Stattdessen haben die Elemente nun Namen, die wir zur Erstellung eines Layouts verwenden können. Wir bleiben außerhalb jeglicher Media Queries und richten das Layout für die mobile Breite ein. Hierbei halten wir alles in der Quellreihenfolge, um keine Diskrepanz zwischen Quelle und Anzeige zu verursachen, wie im [Leitfaden zu Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) beschrieben. Wir haben keine expliziten Spalten- oder Zeilen-Tracks definiert; dieses Layout bestimmt eine einzelne Spalte und erstellt bei Bedarf Reihen für jedes Element im impliziten Grid.

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

Mit unserem mobilen Layout können wir nun eine {{cssxref("@media")}}-Abfrage hinzufügen, um dieses Layout für größere Bildschirme mit genügend Platz für die Anzeige von zwei Spalten anzupassen.

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

Sie können das entstehende Layout in dem Wert von {{cssxref("grid-template-areas")}} sehen. Der `header` erstreckt sich über zwei Spalten-Tracks, ebenso wie die `nav`. In der dritten Zeilen-Tracks platzieren wir die `sidebar` neben den `content`. Wir platzieren den `ad`-Inhalt in der vierten Zeilen-Track, sodass er unter der Sidebar erscheint. Der `footer` befindet sich daneben unter dem Inhalt. Wir verwenden [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) in der Navigation, um die Navigationselemente gleichmäßig in einer Zeile zu platzieren.

Nun können wir einen letzten Breakpoint für breitere Bildschirme hinzufügen, um ein Drei-Spalten-Layout anzuzeigen.

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

Das Drei-Spalten-Layout hat zwei seitliche `1fr`-Einheit-Spalten und eine mittlere Spalte, die als Track-Größe `4fr` hat. Dies bedeutet, dass der verfügbare Platz im Container in sechs Teile aufgeteilt und unseren drei Tracks proportional zugeteilt wird – ein Teil für jede Seitenspalte und vier Teile für die Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte neben dem `content`. In der rechten Spalte haben wir die `sidebar` und darunter die Werbung (`ad`). Der `footer` erstreckt sich jetzt über die gesamte Unterseite des Layouts. Wieder verwenden wir Flexbox, um die Navigation anzuzeigen, aber diesmal als Spalte statt als Zeile.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

Dieses grundlegende Beispiel zeigt, wie ein Grid-Layout über verschiedene Breakpoints umgestaltet werden kann. Insbesondere ändern wir die Position des `ad`-Blocks entsprechend unserer verschiedenen Spalteneinstellungen. Diese Methode der benannten Bereiche kann sehr hilfreich sein, insbesondere in der Prototyping-Phase. Sie finden es vielleicht einfacher, Namen anstelle von Zahlen zu verwenden, wenn Sie mit der Positionierung von Elementen im Grid spielen.

## Ein flexibles 12-Spalten-Layout

CSS-Frameworks und Grid-Systeme verwenden häufig flexible Grids mit 12 oder 16 Spalten. Wir können diesen Systemtyp mit CSS-Grid-Layout erstellen. Als Beispiel erstellen wir ein flexibles 12-Spalten-Grid mit 12 `1fr`-Einheit-Spalten-Tracks, jeder mit einer Startlinie namens `col-start`. Dies bedeutet, dass wir zwölf Grid-Linien mit dem Namen `col-start` haben werden.

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

Wie im [Leitfaden zur Verwendung benannter Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannten Linien, um unsere Elemente zu platzieren. Da wir 12 Linien mit demselben Namen haben, verwenden wir den Namen und den Index der Linie. Wenn Sie möchten, können Sie auch nur den Index der Linie verwenden und auf benannte Linien verzichten.

Anstatt die Endliniennummer festzulegen, definieren wir, wie viele Tracks dieses Element überspannen soll, indem wir das `span`-Schlüsselwort verwenden. Bei der Arbeit mit einem Mehrspalten-Layouts-System kann diese Methode intuitiver sein für diejenigen, die in Bezug auf die Anzahl der Grid-Tracks denken, die die Blöcke überspannen, und diese dann für verschiedene Breakpoints anpassen. Um zu sehen, wie sich die Blöcke an den Tracks ausrichten, verwenden Sie den Grid-Inspektor in den Entwicklerwerkzeugen Ihres Browsers; es wird wahrscheinlich deutlich zeigen, wie die Elemente platziert sind.

![Die Elemente werden im Grid platziert, mit hervorgehobenen Grid-Tracks in den Firefox-Entwicklerwerkzeugen.](11-grid-inspector-12col.png)

Wir müssen kein zusätzliches Markup hinzufügen, um eine Zeile zu erstellen. CSS-Framework-Grid-Systeme taten dies oft, um zu verhindern, dass Elemente in die darüberliegende Zeile springen, für Browser, die CSS-Grid-Layout nicht unterstützen. Diese Frage ist jedoch inzwischen hinfällig — alle modernen Browser unterstützen CSS-Grid-Layout seit langem. CSS-Grids ermöglichen es uns, Elemente in Zeilen zu platzieren, ohne die Gefahr, dass sie in die darüberliegende Zeile aufsteigen, wenn diese leer bleibt. Aufgrund dieser _strengen_ Spalten- und Zeilenplatzierung können wir auch einfach Leerraum in unserem Layout lassen. Wir benötigen auch keine speziellen Klassen, um Elemente im Grid einzurücken. Alles, was wir tun müssen, ist, die Start- und Endlinie für das Element anzugeben.

## Aufbau eines Layouts mit dem 12-Spalten-System

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, können wir das gleiche Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal mit dem 12-Spalten-Grid-System. Beginnen wir mit demselben Markup wie beim Beispiel für Grid-Template-Bereiche.

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

Wir werden auch hier ein responsives Layout erstellen, diesmal mit benannten Linien. Jeder Breakpoint verwendet ein 12-Spalten-Grid. Die Anzahl der Spuren, die Elemente überspannen, ändert sich jedoch je nach Bildschirmgröße.

Wir beginnen {{Glossary("mobile_first", "mobile first")}}. Für die schmalsten Bildschirme möchten wir, dass die Elemente in Quellreihenfolge bleiben und sich alle über das gesamte Grid erstrecken.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Am nächsten Breakpoint wollen wir ein Zwei-Spalten-Layout. Unser Header und die Navigation erstrecken sich weiterhin über das gesamte Grid, daher müssen wir keine Positionierung für sie angeben. Die Sidebar beginnt an der ersten Spaltenlinie namens `col-start` und spannt sich über 3 Linien. Sie folgt der Zeilenlinie 3, da Header und Navigation in den ersten beiden Zeilen-Tracks sind.

Das `ad`-Panel befindet sich unter der Sidebar, beginnend an der Netzlinienlinie 4. Dann haben wir den Inhalt und den Footer, die bei col-start 4 beginnen und neun Tracks überspannen, beide bis zum Ende des Grids.

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

Schließlich definieren wir für Bildschirme, die größer als unser größter Breakpoint sind, eine Drei-Spalten-Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Grid, aber nun wird die Navigation nach unten verschoben, um zur ersten Sidebar zu werden, mit dem Inhalt und dann der Sidebar daneben. Der Footer erstreckt sich nun auch über das gesamte Layout.

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

Überprüfen Sie erneut den Grid-Inspektor in Ihren Browser-Entwicklerwerkzeugen, um zu sehen, wie das Layout Gestalt angenommen hat.

![Das Layout wird mit Grid-Tracks angezeigt, die vom Grid-Inspektor hervorgehoben werden.](11-grid-inspector-12col-layout.png)

Etwas zu beachten ist, dass wir beim Erstellen dieses Layouts nicht jedes Element an jedem Breakpoint explizit im Grid positionieren mussten. Wir haben die für frühere Breakpoints eingerichtete Platzierung geerbt - ein Vorteil der Methode "mobile first". Wir haben auch die Vorteile der automatischen Platzierung von Grids genutzt. Indem wir die Elemente in einer logischen Reihenfolge halten, leistet die automatische Platzierung eine Menge Arbeit, indem sie die Elemente im Grid platziert.

## Eine Produktliste mit automatischer Platzierung

In diesem letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das vollständig auf automatischer Platzierung basiert.

Viele Layouts bestehen im Wesentlichen aus „Karten“ – Produktlisten, Bildergalerien und so weiter. Ein Grid ermöglicht es, diese Listen auf eine Art und Weise zu erstellen, die ohne Medienabfragen responsiv ist. In diesem Beispiel kombinieren wir CSS-Grid und Flexbox-Layouts, um ein einfaches Produktlisten-Layout zu erstellen.

Das Markup für die Liste ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, etwas Text unterschiedlichster Höhe und einen Call-to-Action-Link.

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

Wir erstellen ein Grid mit einer flexiblen Anzahl flexibler Spalten. Wir möchten, dass sie mindestens 200 Pixel breit sind und den verbleibenden Raum gleichmäßig teilen – sodass wir immer Spalten-Tracks gleicher Breite erhalten. Wir erreichen dies mit der {{cssxref("minmax()")}}-Funktion in unserer {{cssxref("repeat")}}-Notation für die Größenbestimmung der Tracks.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Wenn wir dieses CSS hinzufügen, werden die Elemente als Grid angeordnet. Wenn wir das Fenster verkleinern oder vergrößern, ändert sich die Anzahl der Spalten-Tracks – ohne Medienabfragen, die Breakpoints hinzufügen, und ohne das Grid neu definieren zu müssen.

Wir können das Innere der Boxen mithilfe von Flexbox etwas aufräumen. Wir setzen das Listenelement auf `display: flex` und die {{cssxref("flex-direction")}} auf `column`. Wir können dann eine automatische Margin auf das `.cta` setzen, um diese Leiste nach unten in die Box zu schieben.

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

Dies ist einer der Hauptgründe, Flexbox anstelle von CSS-Grid-Layout zu verwenden. Wenn Sie Inhalt in einer einzigen Dimension ausrichten oder verteilen, ist das ein Flexbox-Anwendungsfall.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Lücken mit dem dichten Schlüsselwort verhindern

Das sieht jetzt alles ziemlich vollständig aus. Allerdings haben wir manchmal Karten, die deutlich mehr Inhalt enthalten als die anderen. Es wäre schön, diese über zwei Tracks zu spannen, damit sie nicht so hoch sind. Wir fügen dem größeren Element eine `wide`-Klasse hinzu und eine Regel, die ihm ein {{cssxref("grid-column-end")}} mit dem Wert `span 2` gibt. Wenn dieses Element erkannt wird, wird es zwei Tracks zugewiesen. Dies bedeutet, dass wir an manchen Breakpoints eine Lücke im Grid haben werden – wo nicht genügend Platz ist, um ein Element mit zwei Tracks zu platzieren.

![Das Layout hat Lücken, da nicht genug Platz ist, um ein Element mit zwei Tracks zu platzieren.](11-grid-auto-flow-sparse.png)

Wir können das Grid diese Lücken füllen lassen, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Grid-Container setzen. Seien Sie vorsichtig dabei, da dies dazu führen kann, dass Elemente aus ihrer logischen Quellreihenfolge entfernt werden. Sie sollten dies nur tun, wenn Ihre Elemente keine feste Reihenfolge haben. Beachten Sie außerdem die [Barrierefreiheit und Neuanordnungsprobleme](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering), die sich daraus ergeben, dass die Tab-Reihenfolge der Quelle folgt und nicht Ihrer neu geordneten Anzeige.

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

Die automatische Platzierung zu verwenden, zusammen mit bestimmten Regeln für einige Elemente, ist sehr nützlich und kann bei Inhalten helfen, die Sie nicht kontrollieren können, wie CMS-Ausgaben, bei denen Sie wiederholte Elemente haben und [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) verwenden können, um sie zu treffen.

## Weitere Erkundung

CSS-Grid-Layout bietet so viele Möglichkeiten. Der beste Weg, Grid-Layout zu lernen, besteht darin, weiterhin Beispiele wie die hier behandelten zu erstellen. Wählen Sie ein Layout von einer responsiven Website aus, die Ihnen gefällt, und sehen Sie, ob Sie es mit Grid erstellen können. Sie können sogar Inspiration von Zeitschriften oder anderen nicht webbezogenen Quellen holen.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS-Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [Ein vollständiger Leitfaden zu CSS-Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS-Grid-Websitelayoutbeispiele](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
