---
title: CSS-Grid-Layout und progressive Verbesserung
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{CSSRef}}

Im Frühjahr 2017 wurde erstmals eine große Spezifikation wie Grid nahezu gleichzeitig in Browsern implementiert, und wir haben jetzt Unterstützung für CSS-Grid-Layout in den öffentlichen Versionen von Firefox, Chrome, Opera, Safari und Edge. Während Evergreen-Browser bedeuten, dass viele von uns sehr schnell die Mehrheit der Benutzer mit Grid-Layout-Unterstützung sehen werden, gibt es auch alte oder nicht unterstützende Browser, die berücksichtigt werden müssen. In diesem Leitfaden gehen wir verschiedene Strategien zur Unterstützung durch.

## Die unterstützenden Browser

CSS-Grid-Layout ist in allen modernen Browsern unprefixed. Die Unterstützung für alle in diesen Leitfäden beschriebenen Eigenschaften und Werte ist zwischen den Browsern interoperabel. Das bedeutet, dass wenn Sie ein Grid-Layout in Firefox schreiben, es auf die gleiche Weise in Chrome funktionieren sollte. Dies ist keine experimentelle Spezifikation mehr, und Sie können sie sicher in der Produktion verwenden.

## Ist es sicher, CSS-Grid für mein Layout zu verwenden?

Ja. Wie bei jeder Frontend-Technologie hängt die Entscheidung, CSS-Grid-Layout zu verwenden, von den Browsern ab, die Ihre Website-Besucher typischerweise verwenden.

## Beginnen Sie, Grid in der Produktion zu verwenden

Es ist erwähnenswert, dass Sie Grid nicht auf eine _Alles-oder-nichts_-Weise verwenden müssen. Beginnen Sie damit, Elemente in Ihrem Design mit Grid zu verbessern, die ansonsten mit einer älteren Methode angezeigt werden könnten. Das Überschreiben von Legacy-Methoden mit Grid-Layout funktioniert überraschend gut, da Grid mit diesen anderen Methoden interagiert.

### Floats

[Floats](/de/docs/Learn/CSS/CSS_layout/Floats) wurden früher verwendet, um Layouts mit mehreren Spalten zu erstellen. Wenn Sie einen alten Codebestand mit Floats-Layouts unterstützen, wird es keinen Konflikt geben. Grid-Items ignorieren die `float`-Eigenschaft; Fakt ist, dass _ein Grid-Item Vorrang hat._ Im folgenden Beispiel habe ich ein einfaches Medienobjekt. Wenn der {{cssxref("float")}} nicht aus Legacy-CSS entfernt wird, ist das in Ordnung, da das Container ein Grid-Container ist. Wir können die in CSS-Grids implementierten Ausrichtungseigenschaften verwenden.

Der {{cssxref("float")}} gilt nicht mehr, und ich kann die CSS-Box-Ausrichtungseigenschaft {{cssxref("align-self")}} verwenden, um mein Inhalt am Ende des Containers auszurichten:

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

![Ein einfaches Beispiel für das Überschreiben eines Float-Layouts mit Grid. Beide haben das Bild links ausgerichtet. Der Text ist im Float-Beispiel oben und im Grid-Beispiel unten vertikal ausgerichtet.](10-float-simple-override.png)

### Verwenden von Feature-Queries

Das obige Beispiel ist sehr einfach, und wir kommen ohne Code aus, der in Browsern, die Grid nicht unterstützen, ein Problem darstellt, und Legacy-Code ist für unsere Grid-unterstützenden Browser kein Problem. Allerdings sind die Dinge nicht immer so einfach.

#### Ein komplexeres Beispiel

In diesem nächsten Beispiel habe ich eine Reihe von gefloateten Karten. Ich habe den Karten eine {{cssxref("width")}} zugewiesen, um sie zu {{cssxref("float")}}. Um Lücken zwischen den Karten zu schaffen, verwende ich einen {{cssxref("margin")}} auf den Elementen und dann einen negativen Rand auf dem Container:

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

{{ EmbedLiveSample('Ein_komplizierteres_Beispiel', '550', '450') }}

Das Beispiel zeigt das typische Problem, das wir mit Float-Layouts haben: Wenn einem der Karten zusätzlicher Inhalt hinzugefügt wird, bricht das Layout.

![Ein Floating-Karten-Layout, das das Problem durch ungleichmäßige Inhaltshöhe darstellt. Die obere Reihe hat 3 Karten. Die vierte Karte wird unter der dritten Karte gefloatet. Dann enthält eine untere Reihe die fünfte und sechste Karten. Unter der vierten Karte gibt es einen recht großen leeren Raum.](10-floated-cards.png)

Als Zugeständnis für ältere Browser habe ich den Elementen eine {{cssxref("min-height")}} zugewiesen und hoffe, dass meine Inhaltsredakteure nicht zu viel Inhalt hinzufügen und das Layout durcheinanderbringen!

Dann verbessere ich das Layout mit Grid. Ich kann mein {{HTMLElement("ul")}} in einen Grid-Container mit drei Spalten-Tracks verwandeln. Allerdings gilt die Breite, die ich den Listenelementen selbst zugewiesen habe, weiterhin, und sie macht diese Elemente jetzt zu einem Drittel der Breite des Tracks:

![Sechs sehr große, sehr schmale Grid-Elemente mit überlaufendem Text rechts. Nach dem Anwenden des Grids auf unseren Container ist die Breite der Elemente jetzt falsch, da sie bei einem Drittel der Breite des Items angezeigt werden.](10-float-width-problem.png)

Wenn ich die Breite auf `auto` zurücksetze, wird das Float-Verhalten für ältere Browser verhindert. Ich muss in der Lage sein, die Breite für ältere Browser zu definieren und die Breite für Grid-unterstützende Browser zu entfernen. Dank [CSS Feature Queries](/de/docs/Web/CSS/@supports) kann ich dies direkt in meinem CSS tun.

#### Eine Lösung mit Feature-Queries

_Feature Queries_ werden sehr vertraut erscheinen, wenn Sie jemals eine [Media Query](/de/docs/Web/CSS/CSS_media_queries) verwendet haben, um ein responsives Layout zu erstellen. Anstatt eine {{Glossary("viewport", "Viewport")}}-Breite oder ein Browser- beziehungsweise Gerätefeature zu überprüfen, prüfen wir die Unterstützung eines CSS-Eigenschafts- und Wertepaars mit einer {{cssxref("@supports")}}-Regel. Innerhalb der Feature-Query können wir dann beliebiges CSS schreiben, das wir benötigen, um unser modernes Layout anzuwenden und alles zu entfernen, was für das ältere Layout erforderlich ist.

```css
@supports (display: grid) {
  .wrapper {
    /* do anything for grid supporting browsers here. */
  }
}
```

Feature Queries haben eine ausgezeichnete Browser-Unterstützung, und alle Browser, die die aktualisierte Grid-Spezifikation unterstützen, unterstützen auch Feature Queries. Sie können sie verwenden, um das Problem zu lösen, das wir mit unserem erweiterten Floating-Layout haben.

Ich verwende eine `@supports`-Regel, um die Unterstützung von `display: grid` zu überprüfen. Ich mache dann mein Grid-Code auf dem {{HTMLElement("ul")}}, setze meine Breite und {{cssxref("min-height")}} auf dem {{HTMLElement("li")}} auf `auto`. Ich entferne auch die Margins und negativen Margins und ersetze den Abstand durch die {{cssxref("gap")}}-Eigenschaft. Das bedeutet, dass in der letzten Zeile von Boxen keine Endmarge mehr auftritt. Das Layout funktioniert jetzt, selbst wenn in einer der Karten mehr Inhalt vorhanden ist, als in den anderen:

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

{{ EmbedLiveSample('Eine_Lösung_mit_Feature_Queries', '550', '480') }}

## Überschreiben anderer Werte von `display`

Aufgrund der Probleme bei der Erstellung von Grids aus Elementen mit Floats würden viele von uns eine andere Methode als die oben gezeigte Floating-Methode verwenden, um ein Satz von Karten zu layouten. Die Verwendung von `display: inline-block` ist eine alternative Methode.

Auch hier kann ich Feature Queries verwenden, um ein Layout zu überschreiben, das `display: inline-block` verwendet, und ich muss nicht alles überschreiben. Ein Element, das auf `inline-block` gesetzt ist, wird zu einem Grid-Item, und daher gilt das Verhalten von `inline-block` nicht mehr. Ich habe die {{cssxref("vertical-align")}}-Eigenschaft auf meinem Element verwendet, wenn es im `inline-block`-Modus angezeigt wird, aber diese Eigenschaft gilt nicht für Grid-Items und wird daher ignoriert, sobald das Element zu einem Grid-Item wird:

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

{{ EmbedLiveSample('Überschreiben_anderer_Displaywerte', '500', '480') }}

Wieder ist es die Breite des Elements, die wir ansprechen müssen, und dann andere Eigenschaften, die wir verbessern möchten. In diesem Beispiel habe ich erneut `gap` anstelle von Margins und negativen Margins verwendet, um meine Abstände zu erstellen.

## Wie definiert die Spezifikation diese Überschreibungen?

Die CSS-Grid-Layout-Spezifikation beschreibt, warum wir das Verhalten bestimmter Eigenschaften überschreiben können, wenn etwas zu einem Grid-Item wird. Die wichtigsten Abschnitte der Spezifikation sind:

- [Grid-Container erstellen](https://drafts.csswg.org/css-grid/#grid-containers)
- [Grid-Items](https://drafts.csswg.org/css-grid/#grid-items)
- [Grid-Item-Display](https://drafts.csswg.org/css-grid/#grid-item-display)

Da dieses Verhalten in der Spezifikation beschrieben ist, können Sie sich darauf verlassen, diese Überschreibungen zur Unterstützung älterer Browser zu verwenden. Nichts, was hier beschrieben wird, sollte als "Hack" angesehen werden. Vielmehr nutzen wir die Tatsache, dass die Grid-Spezifikation die Interaktion zwischen verschiedenen Layout-Methoden detailliert beschreibt.

### Andere Werte von Display

Wenn ein Element einen Elternteil mit `display: grid` hat, wird es _blockified_, wie in der [CSS-Display-Spezifikation](https://drafts.csswg.org/css-display-3/#blockify) definiert. Im Falle unseres auf `inline-block` gesetzten Items ist dies der Grund, warum `display: inline-block` nicht mehr gilt.

Wenn Sie `display: table` für Ihr Legacy-Layout verwenden, generiert ein auf `display: table-cell` gesetztes Element anonyme Boxen. Wenn Sie also `display: table-cell` verwenden, ohne dass ein übergeordnetes Element auf `display-table` gesetzt ist, wird ein anonymer Tabellen-Wrapper um alle angrenzenden Zellen erstellt, genau so, als hätten Sie sie in ein div oder ein anderes auf `display: table` gesetztes Element eingewickelt. Wenn Sie ein Element auf `display: table-cell` gesetzt haben und dann in einer Feature-Query den Eltern auf `display: grid` ändern, wird diese anonyme Box-Erstellung nicht stattfinden. Das bedeutet, Sie können `display: table`-basierte Layouts überschreiben, ohne zusätzliche anonyme Boxen zu haben.

### Gefloatete Elemente

Wie wir bereits gesehen haben, haben {{cssxref("float")}} und auch {{cssxref("clear")}} keine Auswirkung auf ein Grid-Item. Daher müssen Sie Items nicht explizit auf `float: none` setzen.

### Vertikale Ausrichtung

Die Ausrichtungseigenschaft {{cssxref("vertical-align")}} hat keine Auswirkung auf ein Grid-Item. In Layouts mit `display: inline-block` oder `display: table` könnten Sie die Ausrichtungseigenschaft verwenden, um eine Grundausrichtung durchzuführen. In Ihrem Grid-Layout haben Sie dann die weitaus mächtigeren Box-Ausrichtungs-Eigenschaften.

### Layout mit mehreren Spalten

Sie können auch mehrspaltiges Layout als Ihre Legacy-Browser-Planung verwenden, da die `column-*` Eigenschaften nicht angewendet werden, wenn sie auf einen Grid-Container angewendet werden.
