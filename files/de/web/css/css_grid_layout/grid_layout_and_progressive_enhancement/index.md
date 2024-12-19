---
title: CSS Grid-Layout und Progressive Enhancement
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Im Frühjahr 2017 erlebten wir erstmals, dass eine bedeutende Spezifikation wie das Grid fast gleichzeitig in Browsern veröffentlicht wurde. Nun haben wir CSS Grid-Layout-Unterstützung in den öffentlichen Versionen von Firefox, Chrome, Opera, Safari und Edge. Während immer aktuelle Browser bedeuten, dass viele von uns schnell feststellen werden, dass die meisten Nutzer Grid-Layout-Unterstützung haben, gibt es auch alte oder nicht unterstützende Browser, mit denen wir umgehen müssen. In diesem Leitfaden gehen wir verschiedene Strategien für die Unterstützung durch.

## Die unterstützenden Browser

CSS Grid-Layout ist in allen modernen Browsern unverändert (unprefixed). Die Unterstützung für alle in diesen Leitfäden beschriebenen Eigenschaften und Werte ist über die Browser hinweg interoperabel. Das bedeutet, dass, wenn Sie ein Grid-Layout in Firefox schreiben, es auf die gleiche Weise in Chrome funktionieren sollte. Dies ist keine experimentelle Spezifikation mehr und kann sicher in der Produktion verwendet werden.

## Ist es sicher, CSS Grids für mein Layout zu verwenden?

Ja. Wie bei jeder Wahl der Frontend-Technologie hängt die Entscheidung zur Nutzung von CSS Grid-Layout von den Browsern ab, die Ihre Website-Besucher typischerweise verwenden.

## Die Verwendung von Grid in der Produktion beginnen

Es ist erwähnenswert, dass Sie Grid nicht auf eine _alles oder nichts_ Weise verwenden müssen. Beginnen Sie damit, Elemente in Ihrem Design mit Grid zu verbessern, die andernfalls mit einer älteren Methode angezeigt werden könnten. Das Überschreiben von Legacy-Methoden mit Grid-Layout funktioniert überraschend gut, aufgrund der Art und Weise, wie Grid mit diesen anderen Methoden interagiert.

### Floats

[Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats) wurden früher verwendet, um mehrspaltige Layouts zu erstellen. Wenn Sie eine alte Codebasis mit gefloateten Layouts unterstützen, wird es keinen Konflikt geben. Grid-Elemente ignorieren die `float`-Eigenschaft; Tatsache ist, dass _ein Grid-Element Vorrang hat._ Im folgenden Beispiel habe ich ein einfaches Medienobjekt. Wenn das {{cssxref("float")}} nicht aus dem Legacy-CSS entfernt wird, da der Container ein Grid-Container ist, ist das in Ordnung. Wir können die Ausrichtungseigenschaften nutzen, die in CSS Grids implementiert sind.

Das {{cssxref("float")}} gilt nicht mehr und ich kann die CSS Box Alignment-Eigenschaft {{cssxref("align-self")}} verwenden, um meinen Inhalt am Ende des Containers auszurichten:

```css
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}
.media::after {
  content: "";
  display: block;
  clear: both;
}
.media .text {
  padding: 10px;
  align-self: end;
}

/* old code we can't remove */
.media .image {
  float: left;
  width: 150px;
  margin-right: 20px;
}
```

```html
<div class="media">
  <div class="image">
    <img src="https://dummyimage.com/150x150" alt="placeholder" />
  </div>
  <div class="text">
    This is a media object example. I am using floats for older browsers and
    grid for new ones.
  </div>
</div>
```

{{ EmbedLiveSample('Floats', '500', '200') }}

Das Bild unten zeigt das Medienobjekt in einem nicht unterstützenden Browser links und einem unterstützenden rechts:

![Ein einfaches Beispiel zum Überschreiben eines gefloateten Layouts mithilfe von Grid. Beide haben das Bild links ausgerichtet. Der Text ist im Float-Beispiel vertikal oben ausgerichtet und im Grid-Beispiel unten.](10-float-simple-override.png)

### Verwendung von Feature-Queries

Das obige Beispiel ist sehr einfach und wir können ohne den Bedarf, Code zu schreiben, der ein Problem für Browser wäre, die Grid nicht unterstützen, und Legacy-Code ist kein Problem für unsere Grid-unterstützenden Browser. Es ist jedoch nicht immer so einfach.

#### Ein komplexeres Beispiel

In diesem nächsten Beispiel habe ich eine Reihe von gefloateten Karten. Ich habe den Karten eine {{cssxref("width")}} gegeben, um sie zu {{cssxref("float")}}en. Um Lücken zwischen den Karten zu schaffen, verwende ich einen {{cssxref("margin")}} bei den Elementen und dann einen negativen Rand beim Container:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 600px;
  margin: 0 auto;
}
.wrapper li {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper ul {
  overflow: hidden;
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}
.wrapper li {
  float: left;
  width: calc(33.333333% - 20px);
  margin: 0 10px 20px 10px;
}
```

```html
<div class="wrapper">
  <ul>
    <li class="card">
      <h2>One</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Two</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Three</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Four</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Five</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Six</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
  </ul>
</div>
```

{{ EmbedLiveSample('A_more_complex_example', '550', '450') }}

Das Beispiel demonstriert das typische Problem, das wir mit gefloateten Layouts haben: Wenn einem Karteninhalt mehr Inhalt hinzugefügt wird, wird das Layout unterbrochen.

![Ein gefloatetes Kartenlayout, das das Problem bei ungleichmäßiger Inhaltshöhe zeigt. Die oberste Reihe hat 3 Karten. Die vierte Karte befindet sich unter der dritten Karte. Danach enthält die untere Reihe die fünfte und sechste Karte. Es gibt einen ziemlich großen leeren Raum unter der vierten Karte.](10-floated-cards.png)

Als Zugeständnis an ältere Browser habe ich eine {{cssxref("min-height")}} bei den Elementen gesetzt und hoffe, dass meine Inhaltsredakteure nicht zu viel Inhalt hinzufügen und das Layout durcheinanderbringen!

Ich verbessere dann das Layout mithilfe von Grid. Ich kann mein {{HTMLElement("ul")}} in einen Grid-Container mit drei Spalten-Tracks verwandeln. Die Breite, die ich den Listenelementen selbst zugewiesen habe, gilt jedoch immer noch und macht diese Elemente nun ein Drittel der Trackbreite aus:

![Sechs sehr hohe, sehr schmale Grid-Elemente mit überlaufendem Text auf der rechten Seite. Nach der Anwendung von Grid auf unseren Container ist die Breite der Elemente jetzt falsch, da sie ein Drittel der Itembreite anzeigen.](10-float-width-problem.png)

Wenn ich die Breite auf `auto` setze, stoppt dies das Float-Verhalten für ältere Browser. Ich muss in der Lage sein, die Breite für ältere Browser zu definieren und die Breite für Grid-unterstützende Browser zu entfernen. Dank [CSS Feature Queries](/de/docs/Web/CSS/@supports) kann ich dies direkt in meinem CSS tun.

#### Eine Lösung mit Feature-Queries

_Feature-Queries_ werden Ihnen sehr bekannt vorkommen, wenn Sie jemals eine [Media-Query](/de/docs/Web/CSS/CSS_media_queries) verwendet haben, um ein responsives Layout zu erstellen. Anstatt eine {{Glossary("viewport", "Viewport")}}-Breite oder ein Feature des Browsers oder Geräts zu prüfen, prüfen wir die Unterstützung eines CSS-Property-Wert-Paars mithilfe einer {{cssxref("@supports")}}-Regel. Innerhalb der Feature-Query können wir dann beliebiges CSS schreiben, das wir benötigen, um unser modernes Layout anzuwenden, und alles entfernen, was für das ältere Layout notwendig ist.

```css
@supports (display: grid) {
  .wrapper {
    /* do anything for grid supporting browsers here. */
  }
}
```

Feature-Queries haben eine ausgezeichnete Browser-Unterstützung und alle Browser, die die aktualisierte Grid-Spezifikation unterstützen, unterstützen auch Feature-Queries. Sie können sie verwenden, um mit dem Problem umzugehen, das wir mit unserem verbesserten, gefloateten Layout haben.

Ich verwende eine `@supports`-Regel, um die Unterstützung von `display: grid` zu prüfen. Ich setze dann meinen Grid-Code bei der {{HTMLElement("ul")}}, stelle meine Breite und {{cssxref("min-height")}} bei der {{HTMLElement("li")}} auf `auto` ein. Ich entferne auch die Margen und negativen Margen und ersetze den Abstand durch die {{cssxref("gap")}}-Eigenschaft. Dies bedeutet, dass ich keine endgültige Marge in der letzten Reihe von Boxen bekomme. Das Layout funktioniert jetzt, selbst wenn in einer der Karten mehr Inhalt vorhanden ist als in den anderen:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 600px;
  margin: 0 auto;
}
.wrapper li {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper ul {
  overflow: hidden;
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}
.wrapper li {
  float: left;
  width: calc(33.333333% - 20px);
  margin: 0 10px 20px 10px;
}
@supports (display: grid) {
  .wrapper ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0;
  }
  .wrapper li {
    width: auto;
    min-height: auto;
    margin: 0;
  }
}
```

```html
<div class="wrapper">
  <ul>
    <li class="card">
      <h2>One</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Two</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Three</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Four</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Five</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Six</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
  </ul>
</div>
```

{{ EmbedLiveSample('A_solution_using_feature_queries', '550', '480') }}

## Überschreiben anderer Werte von `display`

Aufgrund der Probleme beim Erstellen von Rasterlayouts von Elementen mit Floats würden viele von uns eine andere Methode als die oben gezeigte Floated-Methode verwenden, um ein Set von Karten anzuliegen. Die Verwendung von `display: inline-block` ist eine alternative Methode.

Erneut kann ich Feature-Queries verwenden, um ein Layout zu überschreiben, das `display: inline-block` verwendet, und erneut muss ich nicht alles überschreiben. Ein Element, das auf `inline-block` gesetzt ist, wird zu einem Grid-Element, und daher gelten die Eigenschaften von `inline-block` nicht mehr. Ich habe die Eigenschaft {{cssxref("vertical-align")}} bei meinem Element verwendet, wenn es im `inline-block`-Modus angezeigt wird, aber diese Eigenschaft gilt nicht für Grid-Elemente und wird daher ignoriert, sobald das Element zu einem Grid-Element wird:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 600px;
  margin: 0 auto;
}

.wrapper li {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper ul {
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}

.wrapper li {
  display: inline-block;
  vertical-align: top;
  width: calc(33.333333% - 20px);
  margin: 0 10px 20px 10px;
}
@supports (display: grid) {
  .wrapper ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0;
  }
  .wrapper li {
    width: auto;
    margin: 0;
  }
}
```

```html
<div class="wrapper">
  <ul>
    <li class="card">
      <h2>One</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Two</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Three</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Four</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Five</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
    <li class="card">
      <h2>Six</h2>
      <p>We can use CSS grid to overwrite older methods.</p>
    </li>
  </ul>
</div>
```

{{ EmbedLiveSample('Overwriting_other_values_of_display', '500', '480') }}

Erneut ist es die Breite des Elements, die wir ansprechen müssen, und dann alle anderen Eigenschaften, die wir verbessern möchten. In diesem Beispiel habe ich wieder `gap` anstelle von Margen und negativen Margen verwendet, um meine Abstände zu erstellen.

## Wie definiert die Spezifikation diese Überschreibungen?

Die CSS Grid-Layout-Spezifikation beschreibt, warum wir das Verhalten bestimmter Eigenschaften überschreiben können, wenn etwas zu einem Grid-Element wird. Die wichtigsten Abschnitte der Spezifikation sind:

- [Grid-Container etablieren](https://drafts.csswg.org/css-grid/#grid-containers)
- [Grid-Elemente](https://drafts.csswg.org/css-grid/#grid-items)
- [Grid-Element-Anzeige](https://drafts.csswg.org/css-grid/#grid-item-display)

Da diese Verhaltensweisen in der Spezifikation beschrieben werden, können Sie sich darauf verlassen, diese Überschreibungen in Ihrer Unterstützung für ältere Browser zu verwenden. Nichts, was hier beschrieben wird, sollte als "Hack" betrachtet werden. Vielmehr nutzen wir die Tatsache, dass die Grid-Spezifikation die Interaktion zwischen verschiedenen Layout-Methoden beschreibt.

### Andere Werte von display

Wenn ein Element ein Elternteil hat, das auf `display: grid` gesetzt ist, wird es _blockifiziert_, wie in der [CSS display Spezifikation](https://drafts.csswg.org/css-display-3/#blockify) definiert. Im Fall unseres auf `inline-block` gesetzten Elements ist das der Grund, warum `display: inline-block` nicht mehr angewendet wird.

Wenn Sie `display: table` für Ihr Legacy-Layout verwenden, erzeugt ein Element, das auf `display: table-cell` gesetzt ist, anonyme Boxen. Daher wird, wenn Sie `display: table-cell` ohne ein auf `display-table` gesetztes Elternelement verwenden, eine anonyme Tabellenumhüllung um angrenzende Zellen erstellt, genau so, als ob Sie sie in einem div oder einem anderen auf `display: table` gesetzten Element umhüllt hätten. Wenn Sie ein Element haben, das auf `display: table-cell` gesetzt ist und in einer Feature-Query das Elternteil auf `display: grid` umstellen, wird diese anonyme Boxenerstellung nicht stattfinden. Das bedeutet, dass Sie `display: table` basierte Layouts überschreiben können, ohne zusätzliche anonyme Boxen zu haben.

### Gefloatete Elemente

Wie wir bereits gesehen haben, haben {{cssxref("float")}} und auch {{cssxref("clear")}} keine Auswirkungen auf ein Grid-Element. Daher müssen Sie die Elemente nicht explizit auf `float: none` setzen.

### Vertikale Ausrichtung

Die Ausrichtungseigenschaft {{cssxref("vertical-align")}} hat keine Funktion für ein Grid-Element. In Layouts mit `display: inline-block` oder `display: table` könnten Sie die Eigenschaft `vertical-align` verwenden, um grundlegende Ausrichtungen vorzunehmen. In Ihrem Grid-Layout haben Sie dann die weit mächtigeren Box-Ausrichtungseigenschaften.

### Mehrspaltiges Layout

Sie können auch ein mehrspaltiges Layout als Ihren Legacy-Browser-Plan verwenden, da die `column-*`-Eigenschaften nicht angewendet werden, wenn sie auf ein Grid-Container gelegt werden.
