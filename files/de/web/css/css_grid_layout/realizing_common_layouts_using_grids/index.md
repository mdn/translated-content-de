---
title: Realisierung häufiger Layouts mit Grids
short-title: Häufige Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Um diese [Reihe von CSS-Grid-Layout-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) abzurunden, werden wir ein paar verschiedene Layouts durchgehen, die einige der Techniken veranschaulichen, die Sie beim Entwerfen mit Grid-Layout verwenden können. Wir werden uns ein Beispiel mit {{cssxref("grid-template-areas")}}, ein flexibles 12-Spalten-Raster-System und auch eine Produktauflistung mit automatischer Platzierung ansehen. Wie Sie an diesem Satz von Beispielen sehen können, gibt es oft mehr als einen Weg, um die gewünschten Ergebnisse mit CSS-Grid-Layout zu erzielen. Wählen Sie die Methode, die Sie am hilfreichsten für die Probleme finden, die Sie lösen, und für die Designs, die Sie umsetzen müssen.

## Ein responsives Layout mit 1 bis 3 fließenden Spalten unter Verwendung von `grid-template-areas`

Viele Websites sind eine Variation dieses Layouttyps, mit Inhalten, Seitenleisten, einem Header und einem Footer. In einem responsiven Design möchten Sie möglicherweise das Layout als Einzelspalte anzeigen, eine Seitenleiste bei einem bestimmten Breakpoint hinzufügen und dann ein Drei-Spalten-Layout für breitere Bildschirme einfügen.

![drei verschiedene Layouts, die durch die Neudefinition des Grids bei zwei Breakpoints erstellt werden.](11-responsive-areas.png)

Wir werden dieses Layout unter Verwendung der _benannten Template-Bereiche_ erstellen, die wir im [Grid-Template-Areas-Leitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) gelernt haben.

Das Markup ist ein Container mit Elementen im Inneren für einen Header, Footer, Hauptinhalte, Navigation, Seitenleiste und einen Block, um Werbung zu platzieren.

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

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen, müssen wir die Bereiche außerhalb jeglicher [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benennen. Wir benennen Bereiche mit der {{cssxref("grid-area")}}-Eigenschaft.

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

Dies erstellt kein Layout. Vielmehr haben die Elemente nun Namen, die wir dafür verwenden können. Indem wir außerhalb von Media Queries bleiben, richten wir nun das Layout für die mobile Breite ein. Hier belassen wir alles in der Quellreihenfolge, um jegliche Diskrepanz zwischen Quelle und Anzeige zu vermeiden, wie im [Grid-Layout und Zugänglichkeit-Leitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) beschrieben. Wir haben keine Spalten- oder Zeilenspuren explizit definiert; dieses Layout diktiert eine Einzelspalte und erstellt Zeilen nach Bedarf für jedes Element im impliziten Grid.

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

Sie können das Layout in Form des Wertes von {{cssxref("grid-template-areas")}} sehen. Der `header` spannt sich über zwei Spaltenzüge, ebenso wie die `nav`. Im dritten Zeilenzug platzieren wir die `sidebar` neben den `content`. Wir platzieren die `ad`-Inhalte im vierten Zeilenzug, damit sie unter der Seitenleiste erscheinen. Der `footer` befindet sich daneben unterhalb des Inhalts. Wir verwenden das [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) für die Navigation, um die Navigationselemente gleichmäßig in einer Reihe anzuordnen.

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

Das Drei-Spalten-Layout hat zwei Neben-Spalten mit `1fr`-Einheiten und eine mittlere Spalte, die `4fr` als Spurtgröße hat. Das bedeutet, dass der verfügbare Platz im Container in sechs Teile geteilt und proportional unseren drei Spuren zugewiesen wird – ein Teil jeweils zu den Neben-Spalten und vier Teile zur Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte, zusammen mit den `content`. In der rechten Spalte haben wir die `sidebar`, und darunter die Werbung (`ad`). Der `footer` erstreckt sich nun über das gesamte untere Layout. Wieder verwenden wir Flexbox, um die Navigation anzuzeigen, aber diesmal als Spalte anstelle einer Reihe.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

Dieses grundlegende Beispiel demonstriert, wie ein Grid-Layout über verschiedene Breakpoints hinweg neu angeordnet werden kann. Im Besonderen ändern wir die Platzierung des `ad`-Blocks, wie es in unseren verschiedenen Spaltenanordnungen angebracht ist. Diese Methode mit benannten Bereichen kann sehr hilfreich sein, insbesondere in der Prototypenphase. Sie finden es möglicherweise einfacher, Namen anstelle von Zahlen zu verwenden, wenn Sie die Platzierung von Elementen auf dem Grid ändern.

## Ein flexibles 12-Spalten-Layout

CSS-Frameworks und Gridsysteme verwenden häufig flexible Grids mit 12 oder 16 Spalten. Wir können diese Art von System mit dem CSS-Grid-Layout erstellen. Als Beispiel erstellen wir ein flexibles 12-Spalten-Grid mit 12 `1fr`-Einheits-Spaltenzügen, jede mit einer Startlinie namens `col-start`. Das bedeutet, dass wir zwölf Grid-Linien unter dem Namen `col-start` haben werden.

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

Um zu demonstrieren, wie dieses Grid-System funktioniert, haben wir vier Kind-Elemente in einem Wrapper platziert.

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

Wir können diese dann unter Verwendung der benannten Linien und auch des Schlüsselworts `span` auf dem Grid platzieren.

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

Wie im [Leitfaden zur Verwendung benannter Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannten Linien, um unsere Elemente zu platzieren. Da wir 12 Linien mit demselben Namen haben, verwenden wir den Namen und den Index der Linie. Wenn Sie möchten, können Sie auch den Linienindex selbst verwenden und die benannten Linien vermeiden.

Anstatt die Endlinienneummer festzulegen, definieren wir, wie viele Spuren dieses Element mit dem Schlüsselwort `span` umfassen soll. Wenn Sie mit einem Mehrspaltenlayout-System arbeiten, ist diese Methode möglicherweise intuitiver für diejenigen, die Blöcke in Bezug auf die Anzahl der Spuren, die das Grid überspannt, betrachten und diese dann für verschiedene Breakpoints anpassen. Um zu sehen, wie die Blöcke den Spuren zugeordnet sind, verwenden Sie den Grid-Inspector in den Entwickler-Tools Ihres Browsers; er zeigt wahrscheinlich deutlich, wie die Elemente platziert sind.

![Die Elemente werden auf dem Grid mit hervorgehobenen Grid-Spuren in den Firefox-Entwicklertools angezeigt.](11-grid-inspector-12col.png)

Wir müssen kein Markup hinzufügen, um eine Zeile zu erstellen. CSS-Framework-Grid-Systeme taten dies oft, um zu verhindern, dass Elemente in die Zeile darüber springen, bei Browsern, die das CSS-Grid-Layout nicht unterstützen. Dieser Punkt ist inzwischen jedoch nicht mehr relevant — alle modernen Browser unterstützen das CSS-Grid-Layout seit langem. CSS-Grids ermöglichen es uns, Elemente in Zeilen zu platzieren, ohne dass sie in die Zeile darüber aufsteigen, wenn diese leer bleibt. Aufgrund dieser _strengen_ Spalten- und Zeilenplatzierung können wir auch leicht weißen Raum in unserem Layout hinterlassen. Wir benötigen auch keine speziellen Klassen, um Elemente ins Grid einzurücken. Wir müssen lediglich die Start- und Endlinie für das Element angeben.

## Erstellung eines Layouts mit dem 12-Spalten-System

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, können wir dasselbe Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal unter Verwendung des 12-Spalten-Grid-Systems. Lassen Sie uns mit demselben Markup beginnen, das für das Grid-Template-Areas-Beispiel verwendet wurde.

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

Wir richten unser Grid so ein, wie wir es im obigen Beispiel des 12-Spalten-Layouts getan haben.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden dieses Layout wieder responsiv gestalten, dieses Mal unter Verwendung benannter Linien. Jeder Breakpoint wird ein 12-Spalten-Grid verwenden. Die Anzahl der Spuren, die Elemente überspannen, wird sich jedoch je nach Bildschirmgröße ändern.

Wir beginnen mit {{Glossary("mobile_first", "mobile first")}}. Für die schmalsten Bildschirme möchten wir, dass die Elemente in Quellreihenfolge bleiben und sich alle über das gesamte Grid erstrecken.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Beim nächsten Breakpoint möchten wir ein Zwei-Spalten-Layout. Unser Header und die Navigation erstrecken sich weiterhin über das gesamte Grid, sodass wir keine Positionierung für sie angeben müssen. Die Seitenleiste beginnt an der ersten Spaltenlinie namens `col-start` und überspannt 3 Linien. Sie folgt nach der Zeilenlinie 3, da der Header und die Navigation in den ersten beiden Zeilenplätzen sind.

Das `ad`-Panel befindet sich unter der Seitenleiste und beginnt bei der Gridzeilenlinie 4. Dann platzieren wir den Content und den Footer, beginnend bei `col-start` 4 und überspannen damit neun Spuren, die beide bis zum Ende des Grids reichen.

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

Schließlich definieren wir für Bildschirme größer als unser größter Breakpoint eine Drei-Spalten-Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Grid, aber nun wird die Navigation verschoben, um zur ersten Seitenleiste zu werden, mit dem Content und dann der Seitenleiste daneben. Der Footer erstreckt sich nun ebenfalls über das gesamte Layout.

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

Überprüfen Sie erneut den Grid-Inspector in den Entwickler-Tools Ihres Browsers, um zu sehen, wie das Layout gestaltet wurde.

![Das Layout wird mit durch den Grid-Inspector hervorgehobenen Grids-Spuren angezeigt.](11-grid-inspector-12col-layout.png)

Etwas zu beachten, während wir dieses Layout erstellt haben, ist, dass wir nicht jedes Element in jedem Breakpoint explizit auf dem Grid positionieren mussten. Wir haben die Platzierung für frühere Breakpoints geerbt – ein Vorteil der Arbeit "mobile first". Wir haben auch die automatische Platzierung des Grids genutzt. Indem wir Elemente in einer logischen Reihenfolge belassen, leistet die automatische Platzierung viel Arbeit für uns bei der Platzierung von Elementen auf dem Grid.

## Eine Produktauflistung mit automatischer Platzierung

In diesem letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das vollständig auf der automatischen Platzierung basiert.

Viele Layouts bestehen im Wesentlichen aus "Karten" – Produktauflistungen, Bildergalerien und so weiter. Ein Grid ermöglicht es, diese Auflistungen so zu erstellen, dass sie ohne den Einsatz von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) reaktionsfähig sind. In diesem Beispiel kombinieren wir CSS-Grids und Flexbox-Layouts, um ein grundlegendes Produktauflistungs-Layout zu erstellen.

Das Markup für die Auflistung ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, etwas Text unterschiedlicher Höhe und einen Aufruf zu einer Aktionsverknüpfung.

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
  color: white;
  text-align: center;
  margin: 0;
  padding: 20px;
}
```

Wir erstellen ein Grid mit einer flexiblen Anzahl von flexiblen Spalten. Wir möchten, dass sie mindestens 200 Pixel breit sind und jeden verfügbaren restlichen Platz gleichmäßig teilen – sodass wir immer Spaltenzüge gleicher Breite erhalten. Das erreichen wir mit der {{cssxref("minmax()")}}-Funktion in unserer {{cssxref("repeat")}}-Schreibweise zur Spurgrößenbestimmung.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Wenn wir dieses CSS hinzufügen, werden die Elemente als Grid angeordnet. Wenn wir das Fenster kleiner oder größer machen, ändert sich die Anzahl der Spaltenzüge – ohne Media Queries, die Breakpoints hinzufügen und ohne das Grid neu definieren zu müssen.

Wir können das Innere der Boxen mit etwas Flexbox aufräumen. Wir setzen das Listenelement auf `display: flex` und die {{cssxref("flex-direction")}} auf `column`. Wir können dann einen automatischen Rand für die `.cta` verwenden, um diese Leiste an den unteren Rand der Box zu schieben.

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

Das ist einer der Hauptgründe, Flexbox anstelle von CSS-Grid-Layout zu verwenden. Wenn Sie Inhalte in einer Dimension ausrichten oder verteilen, ist das ein Flexbox-Anwendungsfall.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Vermeidung von Lücken mit dem dense-Schlüsselwort

Das sieht jetzt alles ziemlich vollständig aus. Es kommt jedoch vor, dass wir Karten haben, die viel mehr Inhalt enthalten als die anderen. Es wäre nett, diese über zwei Spuren zu spannen, dann wären sie nicht so hoch. Wir fügen ein `wide`-Klasse auf das größere Element und eine Regel hinzu, die ihm ein {{cssxref("grid-column-end")}} mit dem Wert `span 2` gibt. Wenn dieses Element angetroffen wird, wird es zwei Spuren zugewiesen. Dies bedeutet, dass wir an einigen Breakpoints eine Lücke im Grid bekommen, wo nicht genug Platz vorhanden ist, um ein Element mit zwei Spuren zu platzieren.

![Das Layout hat Lücken, da nicht genügend Platz vorhanden ist, um ein Element mit zwei Spuren zu platzieren.](11-grid-auto-flow-sparse.png)

Wir können das Grid diese Lücken rückfüllen lassen, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Grid-Container setzen. Seien Sie vorsichtig dabei, da dies dazu führen kann, dass Elemente aus ihrer logischen Quellenordnung genommen werden. Sie sollten dies nur tun, wenn Ihre Elemente keine festgelegte Reihenfolge haben. Seien Sie auch bewusst über die [Zugänglichkeits- und Re-Ordering-Probleme](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering), die sich aus der Tab-Reihenfolge ergeben, die der Quelle und nicht Ihrer umgeordneten Anzeige folgt.

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

Die Verwendung der automatischen Platzierung mit einigen auf bestimmte Elemente angewandten Regeln ist sehr nützlich und kann bei Inhalten helfen, die Sie nicht kontrollieren können, wie CMS-Ausgaben, wo Sie wiederholte Elemente haben und [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) nutzen können, um diese zu selektieren.

## Weiterführende Erkundung

Das CSS-Grid-Layout bietet so viele Möglichkeiten. Der beste Weg, um den Einsatz von Grid-Layout zu lernen, ist, weiter Beispiele wie die hier behandelten zu bauen. Wählen Sie ein Layout von einer responsiven Website, die Ihnen gefällt, und sehen Sie, ob Sie es mit Grid erstellen können. Sie können sich sogar von Zeitschriften oder anderen nicht webbasierten Quellen inspirieren lassen.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS-Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [Ein vollständiger Leitfaden zu CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS-Grid-Website-Layout-Beispiele](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
