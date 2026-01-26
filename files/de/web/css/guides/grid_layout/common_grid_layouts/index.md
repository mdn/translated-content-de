---
title: Realisierung häufiger Layouts mit Grids
short-title: Häufige Grid-Layouts
slug: Web/CSS/Guides/Grid_layout/Common_grid_layouts
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

Um diesen [Satz von CSS-Grid-Layout-Leitfäden](/de/docs/Web/CSS/Guides/Grid_layout#guides) abzurunden, werden wir einige verschiedene Layouts durchgehen, die einige der Techniken demonstrieren, die Sie beim Entwerfen mit Grid-Layout verwenden können. Wir werden ein Beispiel mit {{cssxref("grid-template-areas")}}, ein flexibles 12-Spalten-Grid-System und auch eine Produktauflistung mit automatischer Platzierung betrachten. Wie Sie an diesem Satz von Beispielen sehen können, gibt es oft mehr als eine Möglichkeit, die gewünschten Ergebnisse mit CSS-Grid-Layout zu erzielen. Wählen Sie die Methode, die Ihnen am hilfreichsten erscheint für die Probleme, die Sie lösen, und die Designs, die Sie implementieren müssen.

## Ein responsives Layout mit 1 bis 3 flüssigen Spalten mit `grid-template-areas`

Viele Websites sind eine Variante dieses Layouttyps mit Inhalten, Seitenleisten, einem Kopf- und einem Fußbereich. In einem responsiven Design möchten Sie das Layout möglicherweise als einzelne Spalte anzeigen, an einem bestimmten Breakpoint eine Seitenleiste hinzufügen und dann ein Drei-Spalten-Layout für breitere Bildschirme einführen.

![drei verschiedene Layouts, die durch Neudefinieren des Grids an zwei Breakpoints erstellt wurden.](11-responsive-areas.png)

Wir werden dieses Layout mit den _benannten Template-Bereichen_ erstellen, die wir im [Grid Template Areas](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas) Leitfaden gelernt haben.

Das Markup ist ein Container mit Elementen für einen Kopf-, Fußbereich, Hauptinhalt, Navigation, Seitenleiste und einem Block zum Platzieren von Werbung.

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

Da wir {{cssxref("grid-template-areas")}} verwenden, um das Layout zu erstellen, müssen wir die Bereiche außerhalb von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) benennen. Wir benennen Bereiche mit der Eigenschaft {{cssxref("grid-area")}}.

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

Dies erstellt kein Layout. Vielmehr haben die Elemente jetzt Namen, die wir verwenden können, um dies zu tun. Wir werden nun außerhalb von Media Queries das Layout für die mobile Breite einrichten. Hier belassen wir alles in der Quellreihenfolge, um jegliche Diskrepanz zwischen Quelle und Anzeige zu vermeiden, wie im [Grid Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility) Leitfaden beschrieben. Wir haben keine Spalten- oder Zeilenzüge explizit definiert; dieses Layout bestimmt eine einzelne Spalte und erstellt bei Bedarf für jedes Element im impliziten Grid Zeilen.

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

Mit unserem mobilen Layout können wir nun eine {{cssxref("@media")}}-Anfrage hinzufügen, um dieses Layout für größere Bildschirme mit genügend Platz für die Anzeige von zwei Spalten anzupassen.

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

Sie können das Layout, das im Wert von {{cssxref("grid-template-areas")}} Gestalt annimmt, sehen. Der `header` erstreckt sich über zwei Spaltenzüge, ebenso wie das `nav`. In der dritten Zeile platzieren wir die `sidebar` neben dem `content`. Wir platzieren die `ad`-Inhalte in der vierten Zeile, sodass sie unter der Sidebar erscheinen. Der `footer` befindet sich daneben unter dem Inhalt. Wir verwenden das [CSS flexible box layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) für die Navigation, um die Navigationselemente gleichmäßig in einer Reihe anzuordnen.

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

Das Drei-Spalten-Layout hat zwei `1fr`-Einheitenseiten-Spalten und eine mittlere Spalte mit `4fr` als Spurgröße. Das bedeutet, dass der verfügbare Platz im Container in sechs Teile aufgeteilt und proportional auf unsere drei Spuren verteilt wird – ein Teil jeweils an die Seitenspalten und vier Teile an die Mitte.

In diesem Layout zeigen wir die `nav` in der linken Spalte, neben dem `content`. In der rechten Spalte haben wir die `sidebar` und darunter die Anzeigen (`ad`). Der `footer` erstreckt sich nun über den gesamten unteren Layoutbereich. Wieder verwenden wir Flexbox, um die Navigation anzuzeigen, diesmal jedoch als Spalte anstelle einer Reihe.

{{ EmbedLiveSample('A_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas', '800', '570') }}

Dieses grundlegende Beispiel zeigt, wie man ein Grid-Layout über verschiedene Breakpoints neu ordnen kann. Insbesondere ändern wir die Position des `ad`-Blocks je nach unseren unterschiedlichen Spaltensetups. Diese Methode der benannten Bereiche kann besonders in der Prototypenerstellung sehr hilfreich sein. Sie finden es möglicherweise einfacher, Namen anstelle von Zahlen zu verwenden, wenn Sie mit der Positionierung von Elementen im Grid experimentieren.

## Ein flexibles 12-Spalten-Layout

CSS-Frameworks und Grid-Systeme verwenden häufig flexible Grids mit 12 oder 16 Spalten. Wir können diese Art von System mit CSS-Grid-Layout erstellen. Als Beispiel erstellen wir ein 12-Spalten-Flexgrid mit 12 `1fr`-Einheitenspaltenzügen, wobei jede Startlinie `col-start` genannt wird. Das bedeutet, dass wir zwölf Grid-Linien mit dem Namen `col-start` haben.

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

Wir können diese dann mit den benannten Linien und dem Schlüsselwort `span` im Grid platzieren.

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

Wie im [Leitfaden über die Verwendung benannter Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) beschrieben, benutzen wir die benannten Linien, um unsere Elemente zu platzieren. Da wir 12 Linien mit dem gleichen Namen haben, verwenden wir den Namen und den Index der Linie. Wenn Sie möchten, können Sie den Linienindex selbst verwenden und benannte Linien vermeiden.

Anstatt die Endliniennummer festzulegen, definieren wir, wie viele Spuren dieses Element mit dem Schlüsselwort `span` überbrücken soll. Wenn Sie mit einem Mehrspuren-Layoutsystem arbeiten, kann diese Methode intuitiver sein, insbesondere für diejenigen, die in Blockmaßen denken und sich mit der Anzahl der überbrückten Spuren befassen, bevor sie Anpassungen für unterschiedliche Breakpoints vornehmen. Nutzen Sie den Grid-Inspektor in Ihren Browser-Entwicklertools, um zu sehen, wie sich die Blöcke zu den Spuren ausrichten; es wird wahrscheinlich deutlich zeigen, wie die Elemente platziert sind.

![Zeigt die Elemente im Grid mit hervorgehobenen Grid-Spuren in den Firefox-Entwicklertools.](11-grid-inspector-12col.png)

Wir müssen kein Markup hinzufügen, um eine Reihe zu erstellen. CSS-Framework-Grid-Systeme taten dies oft, um zu verhindern, dass Elemente in die darüberliegende Reihe springen, für Browser, die CSS-Grid-Layout nicht unterstützen. Dieser Punkt ist jedoch inzwischen hinfällig — alle modernen Browser haben CSS-Grid-Layout seit langem unterstützt. CSS-Grids ermöglichen es uns, Elemente in Reihen zu platzieren, ohne die Gefahr, dass sie in die darüberliegende Reihe aufsteigen, wenn sie leer bleibt. Aufgrund dieser _strikten_ Spalten- und Reihenplatzierung können wir auch leicht Leerraum in unserem Layout lassen. Wir benötigen keine speziellen Klassen, um Elemente ins Grid einzurücken. Alles, was wir tun müssen, ist Start- und Endlinie für das Element zu spezifizieren.

## Aufbau eines Layouts mit dem 12-Spalten-System

Um zu sehen, wie diese Layoutmethode in der Praxis funktioniert, können wir das gleiche Layout erstellen, das wir mit {{cssxref("grid-template-areas")}} erstellt haben, diesmal mit dem 12-Spalten-Grid-System. Lassen Sie uns mit dem gleichen Markup beginnen, das für das Grid-Template-Bereiche-Beispiel verwendet wurde.

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

Wir richten unser Grid genauso ein wie für das 12-Spalten-Layout-Beispiel oben.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Wir werden erneut ein responsives Layout erstellen, diesmal unter Verwendung benannter Linien. Jeder Breakpoint wird ein 12-Spalten-Grid verwenden. Die Anzahl der Spuren, die die Elemente überbrücken, ändert sich jedoch je nach Bildschirmgröße.

Wir beginnen {{Glossary("mobile_first", "mobile first")}}. Für die schmalsten Bildschirme möchten wir, dass die Elemente in der Quellreihenfolge bleiben und sich über das gesamte Grid erstrecken.

```css
.wrapper > * {
  grid-column: col-start / span 12;
}
```

Am nächsten Breakpoint wollen wir ein Zwei-Spalten-Layout. Unser Kopf- und Navigationsbereich erstrecken sich noch über das gesamte Grid, daher müssen wir keine Position für sie festlegen. Die Sidebar beginnt in der ersten Spaltenlinie mit dem Namen `col-start` und erstreckt sich über 3 Linien. Sie befindet sich nach der Zeilenlinie 3, da der Kopf- und Navigationsbereich in den ersten beiden Zeilenspur befinden.

Das `ad`-Panel befindet sich unterhalb der Sidebar und beginnt bei Grid-Zeilenlinie 4. Dann haben wir den Inhalt und den Fußbereich, der bei col-start 4 beginnt, sich über neun Spuren erstreckt und beide bis zum Ende des Grids reicht.

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

Schließlich definieren wir für Bildschirme, die größer als unser größter Breakpoint sind, eine Drei-Spalten-Version dieses Layouts. Der Head-Bereich erstreckt sich weiterhin über das gesamte Grid, aber nun wird die Navigation heruntergeschoben, um die erste Sidebar zu werden, mit dem Inhalt und dann der Sidebar daneben. Der Fußbereich erstreckt sich nun auch über das gesamte Layout.

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

Überprüfen Sie erneut den Grid-Inspektor in Ihren Entwicklerwerkzeugen, um zu sehen, wie das Layout Gestalt angenommen hat.

![Zeigt das Layout mit im Grid-Inspektor hervorgehobenen Grid-Spuren.](11-grid-inspector-12col-layout.png)

Etwas, das beim Erstellen dieses Layouts beachtet werden sollte, ist, dass wir nicht jedes Element am Grid an jedem Breakpoint explizit positionieren mussten. Wir haben die für frühere Breakpoints eingerichtete Platzierung geerbt – ein Vorteil der Arbeit "mobile first". Wir haben auch von der automatischen Platzierung des Grids profitiert. Durch das Halten der Elemente in einer logischen Reihenfolge erledigt die automatische Platzierung viel Arbeit für uns bei der Platzierung der Elemente im Grid.

## Eine Produktauflistung mit automatischer Platzierung

In diesem letzten Beispiel in diesem Leitfaden erstellen wir ein Layout, das ausschließlich auf die automatische Platzierung angewiesen ist.

Viele Layouts sind im Wesentlichen Sets von "Karten" – Produktlisten, Bildergalerien und so weiter. Ein Grid ermöglicht es, diese Listen auf eine Weise zu erstellen, die ohne das Hinzufügen von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) responsiv ist. In diesem Beispiel kombinieren wir CSS-Grid und Flexbox-Layouts, um ein Basislayout für Produktauflistungen zu erstellen.

Das Markup für die Auflistung ist eine ungeordnete Liste von Elementen. Jedes Element enthält eine Überschrift, etwas Text unterschiedlicher Höhe und einen Handlungsaufruf-Link.

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

Wir erstellen ein Grid mit einer flexiblen Anzahl von flexiblen Spalten. Wir möchten, dass sie mindestens 200 Pixel breit sind und jeglichen verfügbaren restlichen Platz gleichmäßig teilen – sodass wir immer Spaltenspuren gleicher Breite erhalten. Wir erreichen dies mit der Funktion {{cssxref("minmax()")}} in unserer {{cssxref("repeat")}}-Notation für Spurgrößen.

```css
.listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Wenn wir dieses CSS hinzufügen, werden die Elemente als Grid angeordnet. Wenn wir das Fenster kleiner oder größer machen, ändert sich die Anzahl der Spaltenspuren – ohne dass Media Queries Breakpoints hinzufügen und ohne dass das Grid neu definiert werden muss.

Wir können das Innere der Boxen mit ein wenig Flexbox aufräumen. Wir setzen das Listenelement auf `display: flex` und die {{cssxref("flex-direction")}} auf `column`. Wir können dann einen automatischen Rand auf die `.cta` setzen, um diese Leiste nach unten in die Box zu verschieben.

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

Dies ist einer der Hauptgründe, Flexbox anstelle von CSS-Grid-Layout zu verwenden. Wenn Sie Inhalte in einer einzigen Dimension ausrichten oder verteilen, ist das ein Flexbox-Anwendungsfall.

{{ EmbedLiveSample('A_product_listing_with_auto-placement', '800', '900') }}

## Verhindern von Lücken mit dem Stichwort dense

Das sieht jetzt ziemlich vollständig aus. Manchmal haben wir jedoch Karten, die viel mehr Inhalt enthalten als die anderen. Es könnte schön sein, diese über zwei Spuren zu erstrecken, damit sie nicht so hoch sind. Wir fügen einen `wide`-Klass am größeren Element hinzu und eine Regel, die ihm ein {{cssxref("grid-column-end")}} mit dem Wert `span 2` gibt. Wenn dieses Element erkannt wird, wird es zwei Spuren zugewiesen. Dies bedeutet, dass wir an einigen Breakpoints eine Lücke im Grid haben – dort, wo nicht genug Platz ist, um ein Zwei-Spuren-Element anzuordnen.

![Das Layout hat Lücken, da nicht genug Platz vorhanden ist, um ein Zwei-Spuren-Element zu platzieren.](11-grid-auto-flow-sparse.png)

Wir können das Grid diese Lücken mit {{cssxref("grid-auto-flow", "grid-auto-flow: dense")}} auf dem Grid-Container auffüllen lassen. Seien Sie vorsichtig, dies zu tun, da es dazu führen kann, dass Elemente aus ihrer logischen Quellreihenfolge herausgenommen werden. Sie sollten dies nur tun, wenn Ihre Elemente keine feste Reihenfolge haben. Seien Sie sich außerdem der [Barrierefreiheit und den Problemen bei der Neuordnung](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility#visual_not_logical_re-ordering) bewusst, da die Tabulatorreihenfolge der Quelle folgt und nicht Ihrer neu angeordneten Anzeige.

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

Die Verwendung der automatischen Platzierung mit einigen Regeln, die auf bestimmte Elemente angewendet werden, ist sehr nützlich und kann bei Inhalten helfen, die Sie nicht kontrollieren können, wie CMS-Ausgaben, bei denen Sie wiederholte Elemente haben und [strukturelle Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes) verwenden können, um sie anzusprechen.

## Weiteres Erkunden

CSS-Grid-Layout bietet so viele Möglichkeiten. Der beste Weg, um Grid-Layout zu lernen, besteht darin, weiterhin Beispiele wie die hier behandelten zu erstellen. Wählen Sie ein Layout von einer responsiven Site, die Ihnen gefällt, und sehen Sie, ob Sie es mithilfe des Grids erstellen können. Sie können sich sogar von Magazinen oder anderen nicht webbasierten Quellen inspirieren lassen.

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
- [CSS-Layout: Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
- [CSS-Grid-Layout-Leitfaden](https://css-tricks.com/css-grid-layout-guide/) auf CSS-Tricks (2021)
- [Grid bei Beispiel](https://gridbyexample.com/)
- [CSS-Grid-Website-Layout-Beispiele](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) auf quackit.com
