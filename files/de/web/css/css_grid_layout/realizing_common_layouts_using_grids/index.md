---
title: Umsetzen von gängigen Layouts mit Grids
slug: Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
l10n:
  sourceCommit: 9416c5b089a1c18296bde0b55e1c0d6637871869
---

{{CSSRef}}

Um diese [Reihe von CSS-Grid-Layout-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) abzurunden, gehen wir einige unterschiedliche Layouts durch, die einige der Techniken demonstrieren, die Sie beim Design mit Grid-Layout verwenden können. Wir sehen uns ein Beispiel mit {{cssxref("grid-template-areas")}} an, ein flexibles 12-Spalten-Grid-System sowie eine Produktliste mit automatischer Platzierung. Wie Sie in diesen Beispielen sehen, gibt es oft mehr als nur einen Weg, um die gewünschten Ergebnisse mit CSS-Grid-Layout zu erzielen. Wählen Sie die Methode, die für die von Ihnen zu lösenden Probleme und die benötigten Designs am hilfreichsten ist.

## Ein responsives Layout mit 1 bis 3 flexiblen Spalten unter Verwendung von `grid-template-areas`

Viele Webseiten sind eine Variante dieses Layout-Typs, mit Inhalten, Seitenleisten, einem Header und einem Footer. In einem responsiven Design möchten Sie möglicherweise das Layout als einzelne Spalte anzeigen, eine Seitenleiste ab einem bestimmten Breakpoint hinzufügen und dann ein Drei-Spalten-Layout für breitere Bildschirme einführen.

![drei verschiedene Layouts erstellt durch Neukonfiguration des Grids bei zwei Breakpoints.](11-responsive-areas.png)

Wir werden dieses Layout mit _benannten Template-Bereichen_ erstellen, die wir im [Leitfaden für Grid-Template-Areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) kennengelernt haben.

Das Markup ist ein Container mit Elementen für einen Header, einen Footer, den Hauptinhalt, die Navigation, eine Seitenleiste und einen Block für Werbung.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-inline-size: 1024px;
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

Das allein erstellt kein Layout. Stattdessen haben die Elemente nun Namen, die wir verwenden können, um ein Layout zu erstellen. Außerhalb von Media Queries konfigurieren wir nun das Layout für die Mobilansicht. Hier halten wir alles in der Quellreihenfolge, um jegliche Trennung zwischen Quelle und Anzeige zu vermeiden, wie im [Leitfaden zu Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) beschrieben. Wir haben keine Spalten- oder Zeilenspalten explizit definiert; dieses Layout sieht eine einzige Spalte vor und erstellt bei Bedarf Zeilen für jedes Element im impliziten Grid.

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

Mit unserem mobilen Layout können wir nun eine {{cssxref("@media")}}-Query hinzufügen, um dieses Layout für größere Bildschirme mit genügend Platz für zwei Spalten anzupassen.

```css
@media (min-inline-size: 500px) {
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

Sie können sehen, wie das Layout in den Werten von {{cssxref("grid-template-areas")}} Gestalt annimmt. Der `header` erstreckt sich über zwei Spalten, ebenso wie die `nav`. In der dritten Zeile platzieren wir die `sidebar` neben den `content`. Den `ad`-Inhalt platzieren wir in der vierten Zeile, sodass er unterhalb der Sidebar erscheint. Der `footer` befindet sich daneben unterhalb des Contents. Für die Navigation nutzen wir das [CSS-Box-Layout mit flexiblen Boxen](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Navigationselemente gleichmäßig in einer Reihe zu verteilen.

Wir können nun einen weiteren Breakpoint für breitere Bildschirme hinzufügen, die ein Drei-Spalten-Layout darstellen können.

```css
@media (min-inline-size: 700px) {
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

Das Drei-Spalten-Layout verfügt über zwei Spalten mit `1fr`-Einheiten auf der Seite und eine mittlere Spalte mit einer Spurengröße von `4fr`. Das bedeutet, dass der verfügbare Platz im Container in sechs Teile aufgeteilt wird, die unseren drei Spuren proportional zugewiesen werden – jeweils ein Teil für die Seiten und vier Teile für die Mitte.

In diesem Layout platzieren wir die `nav` in der linken Spalte neben dem `content`. In der rechten Spalte befinden sich die `sidebar` und darunter die Anzeigen (`ad`). Der `footer` erstreckt sich nun über den gesamten unteren Bereich des Layouts. Auch hier verwenden wir Flexbox, um die Navigation darzustellen, dieses Mal jedoch in einer Spalte statt in einer Reihe.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

Dieses grundlegende Beispiel zeigt, wie Sie ein Grid-Layout an verschiedenen Breakpoints anpassen können. Insbesondere ändern wir die Position des `ad`-Blocks, wie es für die verschiedenen Spaltenlayouts angebracht ist. Diese Methode mit benannten Bereichen kann besonders in der Prototyping-Phase hilfreich sein. Es kann einfacher sein, Namen statt Zahlen zu verwenden, wenn Sie die Position von Elementen im Grid anpassen.

## Ein flexibles 12-Spalten-Layout

CSS-Frameworks und Grids verwenden häufig flexible Grids mit 12 oder 16 Spalten. Wir können diese Art von System mit dem CSS-Grid-Layout erstellen. Als Beispiel erstellen wir ein flexibles 12-Spalten-Grid mit 12 `1fr`-Spureneinheiten, wobei jede Startlinie `col-start` benannt wird. Das bedeutet, dass wir zwölf Grid-Linien mit dem Namen `col-start` haben.

```css hidden
.wrapper {
  max-inline-size: 1024px;
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

Um zu demonstrieren, wie dieses Grid-System funktioniert, haben wir vier Kindelemente in einem Wrapper.

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

Wir können diese dann mithilfe der benannten Linien und des `span`-Schlüsselworts im Grid positionieren.

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

Wie im [Leitfaden zur Verwendung benannter Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) beschrieben, verwenden wir die benannten Linien, um unsere Elemente zu positionieren. Da wir 12 Linien haben, die denselben Namen tragen, verwenden wir den Namen und den Index der Linie. Wenn Sie möchten, können Sie auch nur den Linienindex verwenden und auf die benannten Linien verzichten.

Anstatt die Endliniennummer festzulegen, definieren wir, wie viele Spuren dieses Element mit dem Schlüsselwort `span` umfassen soll. Bei der Arbeit mit einem mehrspaltigen Layoutsystem kann diese Methode intuitiver sein, wenn Sie in Blöcken denken, die sich über eine bestimmte Anzahl von Spuren erstrecken, und diese für unterschiedliche Breakpoints anpassen. Um zu sehen, wie die Blöcke auf den Spuren ausgerichtet sind, verwenden Sie den Grid-Inspektor in den Entwicklertools Ihres Browsers, der wahrscheinlich deutlich zeigt, wie die Elemente positioniert werden.

![Zeigt, wie die Elemente mit hervorgehobenen Grid-Spuren im Firefox-Entwicklertool platziert wurden.](11-grid-inspector-12col.png)

Es ist kein zusätzliches Markup erforderlich, um eine Zeile zu erstellen. CSS-Framework-Grid-Systeme haben dies oft getan, um zu verhindern, dass Elemente in die darüberliegende Zeile springen, für Browser, die CSS-Grid-Layout nicht unterstützen. Dieser Punkt ist jedoch inzwischen hinfällig – alle modernen Browser unterstützen CSS-Grid-Layout bereits seit langem. CSS-Grids erlauben uns, Elemente in Zeilen zu platzieren, ohne Gefahr, dass sie durch eine leere Zeile nach oben verschoben werden. Aufgrund dieser _strikten_ Spalten- und Zeilenplatzierung können wir in unserem Layout auch problemlos weißen Raum lassen. Es sind auch keine speziellen Klassen erforderlich, um Elemente in das Grid einzurücken. Wir geben einfach die Start- und Endlinie für das Element an.

## Ein Layout mit dem 12-Spalten-System erstellen

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, erstellen wir das gleiche Layout, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal jedoch mit dem 12-Spalten-Grid-System. Lassen Sie uns mit demselben Markup wie im Beispiel für Grid-Template-Areas beginnen.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-inline-size: 1024px;
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

Wir richten unser Grid wie beim 12-Spalten-Layout-Beispiel oben ein.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Auch dieses Layout machen wir responsiv, diesmal mit benannten Linien. Jeder Breakpoint verwendet ein 12-Spalten-Raster. Die Anzahl der Spuren, die die Elemente umfassen, ändert sich jedoch je nach Bildschirmgröße.

Wir beginnen mit {{Glossary("mobile_first", "mobile first")}}. Für die schmalsten Bildschirme sollen die Elemente in der Quellreihenfolge bleiben und sich über das gesamte Grid erstrecken.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Beim nächsten Breakpoint möchten wir ein Zwei-Spalten-Layout. Unser Header und die Navigation erstrecken sich weiterhin über das gesamte Grid, daher müssen wir keine Positionierung für sie angeben. Die Seitenleiste beginnt bei der ersten Spalte mit dem Namen `col-start` und erstreckt sich über drei Linien. Sie kommt nach Zeilenlinie 3, da der Header und die Navigation in den ersten beiden Zeilen sind.

Das `ad`-Panel befindet sich unter der Seitenleiste und beginnt bei Grid-Zeilenlinie 4. Danach folgt der Inhalt und der Footer, beginnend bei `col-start 4` und über neun Spuren, bis zum Ende des Grids.

```css
@media (min-inline-size: 500px) {
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

Zum Abschluss definieren wir für größere Bildschirme, die breiter als unser größter Breakpoint sind, eine Drei-Spalten-Version dieses Layouts. Der Header erstreckt sich weiterhin über das gesamte Grid, aber die Navigation wird nun zur linken Seitenleiste, gefolgt von Inhalt und der Seitenleiste. Der Footer erstreckt sich jetzt ebenfalls über das gesamte Layout.

```css
@media (min-inline-size: 700px) {
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

Überprüfen Sie erneut den Grid-Inspektor in den Entwicklertools Ihres Browsers, um zu sehen, wie das Layout geformt wurde.

![Zeigt das Layout mit hervorgehobenen Grid-Spuren durch den Grid-Inspektor.](11-grid-inspector-12col-layout.png)

Etwas zu beachten, als wir dieses Layout erstellten, war, dass wir nicht jedes Element im Grid bei jedem Breakpoint explizit positionieren mussten. Wir haben die Platzierung von früheren Breakpoints übernommen – ein Vorteil des „mobile first“-Ansatzes. Wir haben uns auch die automatische Platzierung durch das Grid zunutze gemacht. Indem wir Elemente in einer logischen Reihenfolge belassen, übernimmt die automatische Platzierung eine Menge Arbeit, um Elemente in das Grid einzufügen.

## Eine Produktliste mit automatischer Platzierung

In diesem letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das vollständig auf automatischer Platzierung beruht.

Viele Layouts bestehen im Wesentlichen aus „Karten“ – Produktlisten, Bildergalerien und so weiter. Ein Grid ermöglicht es, solche Listen so zu erstellen, dass sie ohne den Einsatz von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) responsiv sind. In diesem Beispiel kombinieren wir CSS-Grid- und Flexbox-Layouts, um ein grundlegendes Produktlisten-Layout zu erstellen.

Das Markup für die Liste ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, ein wenig variierenden Text und einen Call-to-Action-Link.

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
  max-inline-size: 100%;
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

Wir erstellen ein Grid mit einer flexiblen Anzahl flexibler Spalten. Diese sollen mindestens 200 Pixel breit sein und den verbleibenden verfügbaren Platz gleichmäßig aufteilen – sodass wir immer Spuren mit gleichbreiten Spalten erhalten. Wir erreichen dieses Ziel mit der {{cssxref("minmax()")}}-Funktion in unserer {{cssxref("repeat")}}-Notation zur Spurengröße.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Wenn wir diese CSS-Regeln hinzufügen, werden die Elemente als Grid angeordnet. Wenn wir das Fenster kleiner oder größer machen, ändert sich die Anzahl der Spaltenspuren – ohne Media Queries und ohne das Grid neu definieren zu müssen.

Wir können die Boxen intern mit ein wenig Flexbox aufräumen. Wir setzen das Listenelement auf `display: flex` und die {{cssxref("flex-direction")}} auf `column`. Dann nutzen wir einen automatischen Außenabstand (auto margin) bei `.cta`, um diesen Abschnitt nach unten zu verschieben.

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

Dies ist einer der Hauptgründe, warum Sie Flexbox anstelle des CSS-Grid-Layouts verwenden sollten. Wenn Sie Inhalte in einer einzigen Dimension ausrichten oder verteilen, ist das ein Anwendungsfall für Flexbox.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Verhindern von Lücken mit dem Dense-Schlüsselwort

Das sieht nun ziemlich vollständig aus. Manchmal haben wir jedoch Karten, die deutlich mehr Inhalt als andere enthalten. Es könnte sinnvoll sein, diese über zwei Spuren zu erstrecken, damit sie nicht so hoch sind. Wir fügen der größeren Karte eine `wide`-Klasse hinzu und legen eine Regel fest, die ihr eine {{cssxref("grid-column-end")}} mit dem Wert `span 2` gibt. Sobald dieses Element auftritt, wird es zwei Spuren zugeordnet. Das bedeutet, dass wir bei einigen Breakpoints eine Lücke im Grid erhalten – dort, wo nicht genug Platz ist, um ein Element mit zwei Spuren einzufügen.

![Das Layout hat Lücken, da nicht genug Platz vorhanden ist, um ein Element mit zwei Spuren zu platzieren.](11-grid-auto-flow-sparse.png)

Wir können das Grid diese Lücken auffüllen lassen, indem wir {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf den Grid-Container anwenden. Seien Sie vorsichtig, wenn Sie dies tun, da es dazu führen kann, dass Elemente aus ihrer logischen Quellreihenfolge entfernt werden. Sie sollten dies nur tun, wenn Ihre Elemente keine festgelegte Reihenfolge haben. Beachten Sie außerdem die [Barrierefreiheits- und Neuordnungsprobleme](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility#visual_not_logical_re-ordering), die aus der Tab-Reihenfolge resultieren, die der Quelle und nicht Ihrem neu angeordneten Layout folgt.

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

Die Verwendung der automatischen Platzierung mit einigen Regeln für bestimmte Elemente ist sehr nützlich und kann bei Inhalten hilfreich sein, die Sie nicht kontrollieren können, wie z. B. CMS-Ausgaben, bei denen Sie wiederholte Elemente mit [strukturellen Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) ansprechen können.

## Weitere Erkundung

Das CSS-Grid-Layout bietet so viele Möglichkeiten. Der beste Weg, um zu lernen, wie man mit Grid-Layout arbeitet, besteht darin, weiterhin Beispiele wie die hier behandelten zu erstellen. Wählen Sie ein Layout von einer responsiven Website, die Ihnen gefällt, und versuchen Sie, es mit Grid nachzubauen. Sie können sogar Inspiration aus Magazinen oder anderen nicht-webbasierten Quellen ziehen.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS-Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [A complete guide to CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) auf CSS-Tricks (2023)
- [Grid by example](https://gridbyexample.com/)
- [CSS-Grid-Webseiten-Layout-Beispiele](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
