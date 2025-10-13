---
title: Realisierung gängiger Layouts mit Grids
short-title: Gängige Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Um diese [Reihe von CSS-Grid-Layout-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) abzurunden, gehen wir einige verschiedene Layouts durch, die einige der Techniken demonstrieren, die Sie beim Entwerfen mit dem Grid-Layout verwenden können. Wir werden uns ein Beispiel ansehen, das {{cssxref("grid-template-areas")}} verwendet, ein 12-Spalten-Flexibles-Grid-System und eine Produktauflistung mit Auto-Platzierung. Wie Sie aus diesem Set von Beispielen sehen können, gibt es oft mehr als einen Weg, um die gewünschten Ergebnisse mit CSS-Grid-Layout zu erzielen. Wählen Sie die Methode, die Ihnen am hilfreichsten erscheint für die Probleme, die Sie lösen müssen, und die Designs, die Sie umsetzen müssen.

## Ein responsives Layout mit 1 bis 3 flexiblen Spalten unter Verwendung von `grid-template-areas`

Viele Websites sind eine Variation dieses Layouttyps mit Inhalt, Seitenleisten, einem Header und einem Footer. In einem responsiven Design möchten Sie möglicherweise das Layout als eine einzelne Spalte anzeigen, eine Seitenleiste bei einem bestimmten Haltepunkt hinzufügen und dann ein Drei-Spalten-Layout für breitere Bildschirme verwenden.

![Drei verschiedene Layouts, die durch Neudefinition des Grids bei zwei Haltepunkten erstellt wurden.](11-responsive-areas.png)

Wir werden dieses Layout erstellen, indem wir die _benannten Template-Bereiche_ verwenden, die wir im [Leitfaden zu Grid-Template-Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) kennengelernt haben.

Das Markup ist ein Container mit Elementen für einen Header, Footer, Hauptinhalt, Navigation, Seitenleiste und einen Block, um Werbung zu platzieren.

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

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen, müssen wir die Bereiche außerhalb von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benennen. Wir benennen Bereiche mit der Eigenschaft {{cssxref("grid-area")}}.

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

Dies erstellt kein Layout. Vielmehr haben die Elemente jetzt Namen, die wir verwenden können, um ein solches Layout zu erstellen. Bleiben wir außerhalb von Media Queries, richten wir jetzt das Layout für die mobile Breite ein. Hier belassen wir alles in der Quellreihenfolge, um jede Diskrepanz zwischen Quelle und Anzeige zu vermeiden, wie im [Grid Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)-Leitfaden beschrieben. Wir haben keine Spalten- oder Zeilenstrecken explizit definiert; dieses Layout bestimmt eine einzelne Spalte und erstellt bei Bedarf Zeilen für jedes Element im impliziten Grid.

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

Mit unserem mobilen Layout an Ort und Stelle können wir nun eine {{cssxref("@media")}}-Anfrage hinzufügen, um dieses Layout an größere Bildschirme anzupassen, die genug Platz haben, um zwei Spalten anzuzeigen.

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

Sie können sehen, dass das Layout in den Werten von {{cssxref("grid-template-areas")}} Gestalt annimmt. Der `header` erstreckt sich über zwei Spaltenstrecken, ebenso wie die `nav`. In der dritten Zeilenstrecke platzieren wir die `sidebar` neben dem `content`. Wir platzieren die Werbeinhalte (`ad`) in der vierten Zeilenstrecke, sodass sie unter der Seitenleiste erscheinen. Der `footer` befindet sich neben dem `content` darunter. Wir verwenden das [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) in der Navigation, um die Navigationspunkte gleichmäßig in einer Reihe zu verteilen.

Wir können jetzt einen letzten Haltepunkt für größere Bildschirme hinzufügen, die ein Drei-Spalten-Layout anzeigen können.

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

Das Drei-Spalten-Layout hat zwei Seitenspalten mit `1fr`-Einheit und eine mittlere Spalte, die `4fr` als Streckengröße hat. Dies bedeutet, dass der verfügbare Platz im Container in sechs Teile aufgeteilt wird und im Verhältnis zu unseren drei Spaltenstrecken zugewiesen wird – ein Teil jeweils für die Seitenspalten und vier Teile für die Mitte.

In diesem Layout wird die `nav` in der linken Spalte zusammen mit dem `content` angezeigt. In der rechten Spalte haben wir die `sidebar` und darunter die Werbung (`ad`). Der `footer` erstreckt sich jetzt über den gesamten unteren Bereich des Layouts. Erneut verwenden wir Flexbox, um die Navigation anzuzeigen, aber diesmal zeigen wir sie als Spalte anstelle einer Reihe an.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

Dieses einfache Beispiel zeigt, wie Sie ein Grid-Layout über verschiedene Haltepunkte hinweg neu anordnen können. Insbesondere ändern wir die Position des `ad`-Blocks je nach unserer verschiedenen Spalteneinstellungen. Diese Methode mit benannten Bereichen kann besonders im Prototyping-Stadium sehr hilfreich sein. Sie finden es vielleicht einfacher, Namen anstelle von Zahlen zu verwenden, wenn Sie mit der Position von Elementen im Grid experimentieren.

## Ein flexibles 12-Spalten-Layout

CSS-Frameworks und Grid-Systeme verwenden häufig 12- oder 16-Spalten-Flexible-Grids. Wir können dieses System mithilfe des CSS-Grid-Layouts erstellen. Zum Beispiel erstellen wir ein 12-Spalten-Flexibles-Grid mit 12 `1fr`-Einheiten-Spaltenstrecken, von denen jede eine Startlinie namens `col-start` hat. Das bedeutet, dass wir zwölf Gitterlinien namens `col-start` haben werden.

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

Um zu demonstrieren, wie dieses Grid-System funktioniert, haben wir vier Kind-Elemente innerhalb eines Wrappers.

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

Wir können diese dann mithilfe der benannten Linien und des `span`-Stichworts im Grid platzieren.

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

Wie im [Leitfaden zur Verwendung benannter Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannten Linien, um unsere Elemente zu platzieren. Da wir 12 Linien haben, alle mit demselben Namen, verwenden wir den Namen und den Index der Linie. Wenn Sie es vorziehen, können Sie auch den Linienindex selbst verwenden und die benannten Linien meiden.

Anstatt die Endliniennummer festzulegen, definieren wir, wie viele Strecken dieses Element mithilfe des Stichworts `span` umfassen soll. Bei einem System mit mehreren Spaltenlayout kann diese Methode intuitiver sein für diejenigen, die Blöcke in Bezug auf die Anzahl der Grid-Strecken betrachten, die sie umfassen, und sie dann für verschiedene Haltepunkte anpassen. Um zu sehen, wie die Blöcke sich zu den Strecken ausrichten, verwenden Sie den Grid-Inspektor in den Entwicklertools Ihres Browsers; er zeigt wahrscheinlich sehr deutlich, wie die Elemente platziert sind.

![Die Elemente auf dem Grid werden mit hervorgehobenen Gitterstrecken in den Firefox-Entwicklertools angezeigt.](11-grid-inspector-12col.png)

Wir müssen kein Markup hinzufügen, um eine Zeile zu erstellen. CSS Framework Grid-Systeme haben dies oft getan, um zu verhindern, dass Elemente für Browser, die CSS-Grid-Layout nicht unterstützen, in die vorherige Zeile auftauchen. Diese Frage ist jedoch heute irrelevant - alle modernen Browser haben das CSS-Grid-Layout seit langem unterstützt. CSS-Grids ermöglichen es uns, Elemente in Zeilen zu platzieren, ohne dass die Gefahr besteht, dass sie in die vorherige Zeile hochrutschen, wenn diese leer ist. Aufgrund dieser _strikten_ Spalten- und Zeilenplatzierung können wir auch leicht weißen Raum in unserem Layout lassen. Wir benötigen keine speziellen Klassen, um Elemente ins Grid einzurücken. Alles, was wir tun müssen, ist, die Start- und Endlinie für das Element anzugeben.

## Erstellung eines Layouts mit dem 12-Spalten-System

Um zu sehen, wie diese Layout-Methode in der Praxis funktioniert, können wir dasselbe Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal unter Verwendung des 12-Spalten-Grid-Systems. Lassen Sie uns mit demselben Markup wie im Beispiel für Grid-Template-Bereiche beginnen.

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

Wir richten unser Grid wie im oben beschriebenen 12-Spalten-Layout-Beispiel ein.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden auch diesmal ein responsives Layout erstellen, dieses Mal unter Verwendung von benannten Linien. Jeder Haltepunkt verwendet ein 12-Spalten-Grid. Allerdings ändert sich die Anzahl der Strecken, die Elemente umfassen, je nach Größe des Bildschirms.

Wir beginnen {{Glossary("mobile_first", "mobile first")}}. Für die schmalsten Bildschirme möchten wir, dass die Elemente in der Quellreihenfolge bleiben und sich alle über das gesamte Grid erstrecken.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Am nächsten Haltepunkt wollen wir ein Zwei-Spalten-Layout. Unser Header und unsere Navigation erstrecken sich weiterhin über das gesamte Grid, sodass wir keine Positionierung für sie angeben müssen. Die Seitenleiste beginnt an der ersten Spaltenlinie namens `col-start` und erstreckt sich über 3 Linien. Sie kommt nach der dritten Zeilenlinie, da der Header und die Navigation in den ersten zwei Zeilenstrecken sind.

Das `ad`-Panel befindet sich unter der Seitenleiste, beginnend bei der Grid-Zeilenlinie 4. Dann haben wir den Inhalt und den Footer, die bei col-start 4 beginnen und neun Strecken umfassen, die insgesamt bis zum Ende des Grids reichen.

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

Schließlich definieren wir für Bildschirme größer als unser größter Haltepunkt eine Drei-Spalten-Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Grid, aber jetzt bewegt sich die Navigation nach unten, um zur ersten Seitenleiste zu werden, mit dem Inhalt und dann der Seitenleiste daneben. Der Footer erstreckt sich jetzt ebenfalls über das gesamte Layout.

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

![Das Layout mit hervorgehobenen Gitternetzlinien im Grid-Inspektor.](11-grid-inspector-12col-layout.png)

Etwas zu beachten, als wir dieses Layout erstellt haben, ist, dass wir nicht jedes Element bei jedem Haltepunkt explizit auf dem Grid positionieren mussten. Wir haben die für frühere Haltepunkte eingerichtete Platzierung geerbt – ein Vorteil des "mobile first"-Ansatzes. Wir haben auch die automatische Platzierung des Grids genutzt. Indem wir Elemente in einer logischen Reihenfolge beibehalten, erledigt die automatische Platzierung viel Arbeit für uns, um Elemente auf dem Grid zu platzieren.

## Eine Produktauflistung mit Auto-Platzierung

In diesem letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das vollständig auf Auto-Platzierung beruht.

Viele Layouts sind im Wesentlichen Sets von "Karten" – Produktlisten, Bildergalerien usw. Ein Grid ermöglicht es, diese Listen auf eine Weise zu erstellen, die ohne die Verwendung von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) responsive ist. In diesem Beispiel kombinieren wir CSS-Grid- und Flexbox-Layouts, um ein grundlegendes Produktlisten-Layout zu erstellen.

Das Markup für die Auflistung ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, etwas Text unterschiedlicher Höhe und einen Call-to-Action-Link.

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

Wir erstellen ein Grid mit einer flexiblen Anzahl von flexiblen Spalten. Wir möchten, dass sie mindestens 200 Pixel breit sind und jeden verfügbaren verbleibenden Platz gleichmäßig teilen – sodass wir immer gleichbreite Spaltenstrecken erhalten. Dies erreichen wir mit der Funktion {{cssxref("minmax()")}} in unserer {{cssxref("repeat")}}-Notation zur Streckenbestimmung.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Wenn wir dieses CSS hinzufügen, werden die Elemente als Grid angeordnet. Wenn wir das Fenster kleiner oder breiter machen, ändert sich die Anzahl der Spaltenstrecken – ohne dass Media Queries Haltepunkte hinzufügen und ohne dass das Grid neu definiert werden muss.

Wir können die internen Boxen mit einem Hauch von Flexbox aufräumen. Wir setzen das Listenelement auf `display: flex` und die {{cssxref("flex-direction")}} auf `column`. Dann können wir einen automatischen Rand auf dem `.cta` verwenden, um diese Leiste zum unteren Rand der Box zu schieben.

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

Dies ist einer der Hauptgründe, Flexbox anstelle des CSS-Grid-Layouts zu verwenden. Wenn Sie Inhalte in einer einzigen Dimension ausrichten oder verteilen, ist dies ein Anwendungsfall für Flexbox.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Vermeidung von Lücken mit dem dichten Stichwort

Dies sieht jetzt alles ziemlich vollständig aus. Allerdings haben wir manchmal Karten, die viel mehr Inhalt als die anderen enthalten. Es könnte schön sein, diese zwei Strecken umspannen zu lassen, dann sind sie nicht so hoch. Wir fügen eine `wide`-Klasse beim größeren Element hinzu und fügen eine Regel hinzu, die es mit einem {{cssxref("grid-column-end")}} mit einem Wert von `span 2` versieht. Wenn dieses Element angetroffen wird, wird es zwei Strecken zugewiesen. Das bedeutet, dass wir bei manchen Haltepunkten eine Lücke im Grid haben – wo nicht genug Platz ist, um ein Zwei-Strecken-Element anzuordnen.

![Das Layout hat Lücken, da nicht genug Platz ist, um ein zwei Strecken umfassendes Element anzuordnen.](11-grid-auto-flow-sparse.png)

Wir können das Grid diese Lücken ausfüllen lassen, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Grid-Container setzen. Seien Sie vorsichtig dabei, da dies dazu führen kann, dass Elemente aus ihrer logischen Quellreihenfolge genommen werden. Sie sollten dies nur tun, wenn Ihre Elemente keine festgelegte Reihenfolge haben. Achten Sie außerdem auf die [Barrierefreiheits- und Neuordnungsprobleme](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering), die daraus resultieren, dass die Tabulator-Reihenfolge der Quelle folgt und nicht Ihrer neu geordneten Anzeige.

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

Die Verwendung von Auto-Platzierung mit einigen auf bestimmte Elemente angewendeten Regeln ist sehr nützlich und kann bei Inhalten helfen, die Sie nicht kontrollieren können, wie z. B. CMS-Ausgaben, wo Sie wiederholte Elemente haben und [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) verwenden können, um sie anzusprechen.

## Weitere Erkundung

Das CSS-Grid-Layout bietet viele Möglichkeiten. Der beste Weg, das Grid-Layout zu lernen, besteht darin, weiterhin Beispiele wie die hier behandelten zu bauen. Wählen Sie ein Layout von einer responsiven Website, das Ihnen gefällt, und sehen Sie, ob Sie es mit einem Grid erstellen können. Sie können sogar Inspiration aus Zeitschriften oder anderen nicht webbasierten Quellen ziehen.

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS-Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [Ein vollständiger Leitfaden zum CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS Grid Website-Layout-Beispiele](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
