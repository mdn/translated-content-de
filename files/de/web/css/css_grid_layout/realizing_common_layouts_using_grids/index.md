---
title: Erstellung häufiger Layouts mit Grids
short-title: Häufige Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Zum Abschluss dieser [Reihe von CSS-Grid-Layout-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) werden wir einige verschiedene Layouts durchgehen, die einige der Techniken demonstrieren, die Sie bei der Gestaltung mit Grid-Layout verwenden können. Wir werden ein Beispiel mit {{cssxref("grid-template-areas")}}, ein 12-Spalten flexibles Gridsystem, und eine Produktliste mit automatischer Platzierung betrachten. Wie Sie aus dieser Reihe von Beispielen sehen können, gibt es oft mehr als einen Weg, um die gewünschten Ergebnisse mit CSS-Grid-Layout zu erzielen. Wählen Sie die Methode, die Sie am hilfreichsten für die Probleme finden, die Sie lösen müssen, und die Designs, die Sie umsetzen müssen.

## Ein responsives Layout mit 1 bis 3 fließenden Spalten unter Verwendung von `grid-template-areas`

Viele Webseiten sind eine Variation dieses Layouttyps, mit Inhalten, Seitenleisten, einem Header und einem Footer. In einem responsiven Design möchten Sie das Layout möglicherweise als einzelne Spalte anzeigen, eine Seitenleiste bei einem bestimmten Breakpoint hinzufügen und dann für breitere Bildschirme ein Dreispaltenlayout einführen.

![drei verschiedene Layouts, die durch die Neudefinition des Grids bei zwei Breakpoints erstellt wurden.](11-responsive-areas.png)

Wir werden dieses Layout mithilfe der _benannten Template-Bereiche_ erstellen, über die wir im [Leitfaden für Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) gelernt haben.

Das Markup ist ein Container mit Elementen für einen Header, Footer, Hauptinhalt, Navigation, Seitenleiste und ein Block zur Platzierung von Werbung.

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

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen, müssen wir die Bereiche außerhalb von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benennen. Wir benennen Bereiche mit der {{cssxref("grid-area")}}-Eigenschaft.

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

Dies erstellt kein Layout. Vielmehr haben die Elemente jetzt Namen, die wir dafür verwenden können. Indem wir außerhalb von Media Queries bleiben, richten wir jetzt das Layout für die mobile Breite ein. Hier belassen wir alles in Quellreihenfolge, um jegliche Trennung zwischen Quelle und Anzeige zu vermeiden, wie im [Leitfaden für Grid-Layout und Zugänglichkeit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) beschrieben. Wir haben keine Spalten- oder Zeilentracks explizit definiert; dieses Layout gibt eine einzelne Spalte an und erstellt bei Bedarf Zeilen für jedes Element im impliziten Grid.

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

Mit unserem mobilen Layout können wir nun eine {{cssxref("@media")}}-Abfrage hinzufügen, um dieses Layout für größere Bildschirme anzupassen, die genug Platz bieten, um zwei Spalten anzuzeigen.

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

Sie können das Layout in dem Wert von {{cssxref("grid-template-areas")}} sehen. Der `header` erstreckt sich über zwei Spaltentracks, ebenso wie die `nav`. In der dritten Zeile platzieren wir die `sidebar` neben dem `content`. Wir platzieren den `ad`-Inhalt in der vierten Zeile, damit er unterhalb der Sidebar erscheint. Der `footer` befindet sich daneben unter dem Inhalt. Wir verwenden das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) in der Navigation, um die Navigationselemente in einer Zeile gleichmäßig zu verteilen.

Wir können nun einen finalen Breakpoint für breitere Bildschirme hinzufügen, die in der Lage sind, ein Dreispaltenlayout darzustellen.

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

Das Dreispaltenlayout hat zwei `1fr`-Einheit seitliche Spalten und eine mittlere Spalte, die `4fr` als Trackgröße hat. Dies bedeutet, dass der verfügbare Platz im Container in sechs Teile aufgeteilt wird und unseren drei Tracks proportional zugewiesen wird – ein Teil für jede der seitlichen Spalten und vier Teile für die Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte, neben dem `content`. In der rechten Spalte haben wir die `sidebar` und darunter die Werbung (`ad`). Der `footer` spannt sich nun über den gesamten unteren Bereich des Layouts. Wieder verwenden wir Flexbox, um die Navigation anzuzeigen, diesmal jedoch als Spalte anstatt als Zeile.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

Dieses einfache Beispiel zeigt, wie ein Grid-Layout über verschiedene Breakpoints umgestellt wird. Insbesondere ändern wir die Position des `ad`-Blocks in unseren verschiedenen Spaltenlayouts. Diese Methode mit benannten Bereichen kann sehr hilfreich sein, insbesondere in der Prototypenphase. Möglicherweise finden Sie es einfacher, Namen anstatt Zahlen zu verwenden, wenn Sie mit der Platzierung von Elementen im Grid spielen.

## Ein flexibles 12-Spalten-Layout

CSS-Frameworks und Gridsysteme verwenden üblicherweise flexible Grids mit 12 oder 16 Spalten. Wir können dieses System mithilfe des CSS-Grid-Layouts erstellen. Als Beispiel erstellen wir ein flexibles 12-Spalten-Grid mit 12 `1fr`-Einheiten-Spaltentracks, die alle eine Startlinie namens `col-start` haben. Dies bedeutet, dass wir zwölf Grid-Linien mit dem Namen `col-start` haben werden.

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

Um zu demonstrieren, wie dieses Gridsystem funktioniert, haben wir vier Kindelemente in einem Wrapper.

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

Wie im [Leitfaden für die Verwendung benannter Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannten Linien zur Platzierung unserer Elemente. Da wir 12 Linien mit demselben Namen haben, verwenden wir den Namen und den Index der Linie. Sie können auch den Index der Linie selbst verwenden und die Verwendung benannter Linien vermeiden, wenn Sie dies bevorzugen.

Anstelle der Endliniennummer definieren wir, wie viele Tracks dieses Element mit dem `span`-Schlüsselwort überlappen soll. Bei der Arbeit mit einem Mehrspaltenlayout-System ist diese Methode möglicherweise intuitiver für diejenigen, die in Bezug auf die Anzahl der Tracks des Grids denken, die die Blöcke überlappen, und dann für verschiedene Breakpoints anpassen. Um zu sehen, wie sich die Blöcke an den Tracks ausrichten, verwenden Sie den Grid-Inspektor in Ihren Browser-Entwicklertools; es zeigt wahrscheinlich klar, wie die Elemente platziert sind.

![Zeigt die auf dem Grid platzierten Elemente mit hervorgehobenen Grid-Tracks in den Firefox-Entwicklertools.](11-grid-inspector-12col.png)

Wir müssen kein Markup hinzufügen, um eine Zeile zu erstellen. CSS-Framework-Gridsysteme machten dies oft, um zu verhindern, dass Elemente in die darüber liegende Zeile aufspringen, bei Browsern, die CSS-Grid-Layout nicht unterstützen. Diese Frage ist jedoch mittlerweile hinfällig – alle modernen Browser unterstützen CSS-Grid-Layout schon lange. CSS-Grids erlauben es uns, Elemente in Zeilen zu platzieren, ohne dass diese Gefahr besteht, dass sie in die darüber liegende Zeile aufsteigen, wenn diese leer ist. Aufgrund dieser _strengen_ Spalten- und Zeilenplatzierung können wir auch leicht weißen Raum in unserem Layout belassen. Wir benötigen auch keine speziellen Klassen, um Elemente in das Grid einzurücken. Alles, was wir tun müssen, ist, die Start- und Endlinie für das Element anzugeben.

## Ein Layout mit dem 12-Spalten-System erstellen

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, können wir dasselbe Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal jedoch mit dem 12-Spalten-Grid-System. Beginnen wir mit demselben Markup, das auch für das Beispiel der Grid-Template-Bereiche verwendet wird.

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

Wir richten unser Grid ein, wie wir es oben für das 12-Spalten-Layout-Beispiel getan haben.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden auch dieses Mal wieder ein responsives Layout erstellen, diesmal mit benannten Linien. Jeder Breakpoint wird ein 12-Spalten-Grid verwenden. Die Anzahl der Tracks, die die Elemente überlappen werden, hängt jedoch von der Größe des Bildschirms ab.

Wir beginnen mit {{Glossary("mobile_first", "Mobile First")}}. Für die schmalsten Bildschirme möchten wir, dass die Elemente in der Quellreihenfolge bleiben und sich alle über das gesamte Grid erstrecken.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Am nächsten Breakpoint möchten wir ein Zwei-Spalten-Layout. Unser Header und die Navigation erstrecken sich immer noch über das gesamte Grid, daher müssen wir keine Positionierung für sie angeben. Die Seitenleiste beginnt in der ersten Spaltenlinie namens `col-start` und erstreckt sich über drei Linien. Sie kommt nach Zeilenlinie 3, da sich der Header und die Navigation in den ersten beiden Zeilentracks befinden.

Das `ad`-Panel befindet sich unterhalb der Seitenleiste und beginnt bei Grid-Zeilenlinie 4. Dann haben wir den Inhalt und den Footer, die bei col-start 4 beginnen und neun Tracks überlappen, was beide bis zum Ende des Grids bringt.

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

Schließlich definieren wir für Bildschirme, die größer als unser größter Breakpoint sind, eine Dreispalten-Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Grid, aber jetzt verschiebt sich die Navigation nach unten, um zur ersten Seitenleiste zu werden, mit dem Content und dann der Sidebar daneben. Der Footer spannt sich nun ebenfalls über das gesamte Layout.

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

Überprüfen Sie erneut den Grid-Inspektor in Ihren Browser-Entwicklertools, um zu sehen, wie das Layout Gestalt angenommen hat.

![Zeigt das Layout mit vom Grid-Inspektor hervorgehobenen Grid-Tracks.](11-grid-inspector-12col-layout.png)

Etwas, das zu beachten ist, während wir dieses Layout erstellt haben, ist, dass wir nicht jedes Element explizit auf dem Grid bei jedem Breakpoint positionieren mussten. Wir erbten die Platzierung von vorherigen Breakpoints – ein Vorteil der "Mobile First" Methode. Wir nutzten auch die automatische Platzierung des Grids. Indem wir Elemente in einer logischen Reihenfolge halten, erledigt die automatische Platzierung viel Arbeit für uns bei der Platzierung von Elementen auf dem Grid.

## Eine Produktliste mit automatischer Platzierung

In diesem letzten Beispiel in dieser Anleitung erstellen wir ein Layout, das vollständig auf automatischer Platzierung beruht.

Viele Layouts sind im Wesentlichen Sets von "Karten" – Produktlisten, Bildergalerien und so weiter. Ein Grid ermöglicht es, diese Listen zu erstellen, sodass sie responsive sind, ohne dass [Media Queries](/de/docs/Web/CSS/CSS_media_queries) benötigt werden, um Breakpoints hinzuzufügen. In diesem Beispiel kombinieren wir CSS Grid und Flexbox Layouts, um ein grundlegendes Produktlistenlayout zu erstellen.

Das Markup für die Liste ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, etwas Text mit variierender Höhe und einen Call-to-Action-Link.

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

Wir erstellen ein Grid mit einer flexiblen Anzahl flexibler Spalten. Wir möchten, dass sie mindestens 200 Pixel breit sind und jeden verfügbaren verbleibenden Platz gleichmäßig aufteilen – so erhalten wir immer Spaltentracks mit gleicher Breite. Wir erreichen dies mit der {{cssxref("minmax()")}} Funktion in unserer {{cssxref("repeat")}} Notation zur Bestimmung der Größe der Tracks.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Wenn wir dieses CSS hinzufügen, werden die Elemente als Grid angeordnet. Wenn wir das Fenster kleiner oder größer machen, ändert sich die Anzahl der Spaltentracks – ohne Media Queries, die Breakpoints hinzufügen, und ohne dass wir das Grid neu definieren müssen.

Wir können die Interna der Boxen mit einem Hauch von Flexbox aufräumen. Wir setzen das Listenelement auf `display: flex` und die {{cssxref("flex-direction")}} auf `column`. Wir können dann mit einer automatischen Margin auf der `.cta` diese Leiste nach unten zum Boden der Box drücken.

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

Dies ist einer der Hauptgründe, warum Flexbox anstelle des CSS-Grid-Layouts verwendet werden sollte. Wenn Sie Inhalte in einer einzigen Dimension ausrichten oder verteilen, ist dies ein Anwendungsfall für Flexbox.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Verhindern von Lücken mit dem dense Schlüsselwort

Das sieht alles ziemlich vollständig aus jetzt. Manchmal haben wir jedoch Karten, die viel mehr Inhalt enthalten als die anderen. Es wäre schön, wenn diese zwei Tracks überspannen, dann wären sie nicht so hoch. Wir fügen der größeren Karte eine Klasse `wide` hinzu und eine Regel, die ihr ein {{cssxref("grid-column-end")}} mit dem Wert `span 2` gibt. Wenn dieses Element angetroffen wird, wird es auf zwei Tracks zugewiesen. Dies bedeutet, dass wir an einigen Breakpoints eine Lücke im Grid bekommen – dort, wo nicht genug Platz ist, um ein Zwei-Track-Element zu platzieren.

![Das Layout hat Lücken, da es keinen Platz gibt, um ein Zwei-Track-Element zu platzieren.](11-grid-auto-flow-sparse.png)

Wir können das Grid dazu bringen, diese Lücken aufzufüllen, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Grid-Container setzen. Seien Sie vorsichtig, wenn Sie dies tun, da es dazu führen kann, dass Elemente aus ihrer logischen Quellordnung herausgenommen werden. Sie sollten dies nur tun, wenn Ihre Elemente keine feste Reihenfolge haben. Seien Sie sich außerdem der [Zugänglichkeits- und Umordnungsprobleme](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering) bewusst, die sich aus der Tabulatorreihenfolge ergeben, die der Quelle folgt und nicht Ihrem umgeordneten Display.

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

Die Verwendung von automatischer Platzierung mit einigen auf bestimmte Elemente angewendeten Regeln ist sehr nützlich und kann bei Inhalten helfen, die Sie nicht kontrollieren können, wie CMS-Ausgaben, bei denen Sie wiederkehrende Elemente haben und [strukturelle Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes) verwenden können, um sie zu selektieren.

## Weitere Erkundung

CSS-Grid-Layout bietet so viele Möglichkeiten. Der beste Weg, um die Verwendung von Grid-Layouts zu lernen, besteht darin, weiterhin Beispiele wie die hier behandelten zu bauen. Wählen Sie ein Layout von einer responsiven Website, die Ihnen gefällt, und sehen Sie, ob Sie es mit Grid erstellen können. Sie können sogar Inspiration von Zeitschriften oder anderen nicht-webbasierten Quellen nehmen.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS-Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [Ein vollständiger Leitfaden zu CSS-Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS-Grid-Website-Layout-Beispiele](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
