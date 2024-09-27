---
title: CSS-Grid-Layout und Progressive Enhancement
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement
l10n:
  sourceCommit: 6f361249ffb14fd9e82f6bd369d7c7889eeb9475
---

{{CSSRef}}

Im Frühjahr 2017 wurde erstmals ein großer Standard wie Grid fast gleichzeitig in Browsern eingeführt, und wir haben nun Unterstützung für das CSS-Grid-Layout in den öffentlichen Versionen von Firefox, Chrome, Opera, Safari und Edge. Allerdings bedeuten Evergreen-Browser, dass viele von uns sehr schnell die Mehrheit der Nutzer mit Grid-Layout-Unterstützung sehen werden, aber es gibt auch alte oder nicht unterstützte Browser, mit denen man sich auseinandersetzen muss. In diesem Leitfaden werden wir eine Vielzahl von Strategien für die Unterstützung durchgehen.

## Die unterstützenden Browser

Das CSS-Grid-Layout ist in allen modernen Browsern unverändert. Die Unterstützung für alle in diesen Leitfäden beschriebenen Eigenschaften und Werte ist zwischen den Browsern interoperabel. Das bedeutet, dass, wenn Sie Grid-Layout-Code in Firefox schreiben, dieser ebenso in Chrome funktioniert. Es handelt sich nicht mehr um eine experimentelle Spezifikation und Sie können sie sicher in der Produktion verwenden.

## Ist es sicher, CSS-Grids für mein Layout zu verwenden?

Ja. Wie bei jeder Entscheidung über Frontend-Technologie wird die Entscheidung, das CSS-Grid-Layout zu verwenden, von den Browsern abhängen, die Ihre Webseitenbesucher typischerweise nutzen.

## Beginn der Verwendung von Grid in der Produktion

Es ist erwähnenswert, dass Sie Grid nicht auf eine _Alles-oder-Nichts_-Weise verwenden müssen. Beginnen Sie damit, Elemente in Ihrem Design mit Grid zu verbessern, die ansonsten mit einer älteren Methode angezeigt werden könnten. Das Überschreiben von Legacy-Methoden mit Grid-Layout funktioniert überraschend gut, aufgrund der Art und Weise, wie Grid mit diesen anderen Methoden interagiert.

### Floats

[Floats](/de/docs/Learn/CSS/CSS_layout/Floats) wurden früher verwendet, um Layouts mit mehreren Spalten zu erstellen. Wenn Sie eine alte Codebasis mit Float-Layouts unterstützen, gibt es keinen Konflikt. Grid-Elemente ignorieren die Float-Eigenschaft; Tatsache ist, dass _ein Grid-Element Vorrang hat._ Im nachstehenden Beispiel habe ich ein einfaches Medienobjekt. Wenn das {{cssxref("float")}} nicht aus dem Legacy-CSS entfernt wird, da der Container ein Grid-Container ist, ist das in Ordnung. Wir können die Ausrichtungs-Eigenschaften verwenden, die in CSS-Grids implementiert sind.

Das {{cssxref("float")}} gilt nicht mehr, und ich kann die CSS-Box-Ausrichtungseigenschaft {{cssxref("align-self")}} verwenden, um meinen Inhalt am Ende des Containers auszurichten:

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

![Ein einfaches Beispiel zum Überschreiben eines Float-Layouts mit Grid. Beide haben das Bild links ausgerichtet. Der Text ist im Float-Beispiel oben und im Grid-Beispiel unten vertikal ausgerichtet.](10-float-simple-override.png)

### Verwendung von Feature Queries

Das obige Beispiel ist sehr einfach, und wir kommen ohne Code aus, der für Browser, die Grid nicht unterstützen, ein Problem wäre, und Legacy-Code ist kein Problem für unsere Grid-unterstützenden Browser. Aber so einfach ist es nicht immer.

#### Ein komplexeres Beispiel

Im nächsten Beispiel habe ich eine Reihe von gekachelten Karten. Ich habe den Karten eine {{cssxref("width")}} gegeben, um sie zu {{cssxref("float")}}. Um Lücken zwischen den Karten zu schaffen, verwende ich {{cssxref("margin")}} auf den Elementen und dann einen negativen Rand auf dem Container:

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

Das Beispiel zeigt das typische Problem, das wir mit Float-Layouts haben: Wenn zusätzlicher Inhalt zu einer Karte hinzugefügt wird, bricht das Layout.

![Ein Float-Karten-Layout, das das durch ungleiche Inhaltshöhe verursachte Problem demonstriert. Die obere Reihe hat 3 Karten. Die vierte Karte ist unter der dritten Karte gefloatet. Dann enthält eine untere Reihe die fünfte und sechste Karte. Es gibt einen großen leeren Raum unter der vierten Karte.](10-floated-cards.png)

Als Zugeständnis an ältere Browser habe ich den Elementen eine {{cssxref("min-height")}} gesetzt und hoffe, dass meine Inhaltsredakteure nicht zu viel Inhalt hinzufügen und das Layout durcheinander bringen!

Dann verbessere ich das Layout mit Grid. Ich kann mein {{HTMLElement("ul")}} in einen Grid-Container mit drei Spalten-Tracks verwandeln. Allerdings gilt die Breite, die ich den Listenelementen selbst zugewiesen habe, weiterhin und macht diese Elemente nun zu einem Drittel der Breite des Tracks:

![Sechs sehr hohe, sehr schmale Grid-Items mit überlaufendem Text auf der rechten Seite. Nach der Anwendung von Grid auf unseren Container ist die Breite der Elemente jetzt falsch, da sie bei einem Drittel der Elementbreite angezeigt werden.](10-float-width-problem.png)

Wenn ich die Breite auf `auto` zurücksetze, stoppt dies das Float-Verhalten für ältere Browser. Ich muss in der Lage sein, die Breite für ältere Browser zu definieren und die Breite für Grid-unterstützende Browser zu entfernen. Dank der [CSS Feature Queries](/de/docs/Web/CSS/@supports) kann ich dies direkt in meinem CSS tun.

#### Eine Lösung unter Verwendung von Feature Queries

_Feature Queries_ werden Ihnen sehr vertraut vorkommen, wenn Sie schon einmal eine [Media Query](/de/docs/Web/CSS/CSS_media_queries) verwendet haben, um ein responsives Layout zu erstellen. Anstatt eine [Viewport](/de/docs/Glossary/viewport)-Breite oder ein Feature des Browsers oder Geräts zu prüfen, prüfen wir die Unterstützung eines CSS-Eigenschafts-Werte-Paares mithilfe einer {{cssxref("@supports")}}-Regel. Innerhalb der Feature Query können wir dann jegliches CSS schreiben, das wir benötigen, um unser modernes Layout anzuwenden, und alles für das ältere Layout entfernen.

```css
@supports (display: grid) {
  .wrapper {
    /* do anything for grid supporting browsers here. */
  }
}
```

Feature Queries haben eine ausgezeichnete Browser-Unterstützung, und alle Browser, die die aktualisierte Grid-Spezifikation unterstützen, unterstützen auch Feature Queries. Sie können sie verwenden, um das Problem zu lösen, das wir mit unserem erweiterten, gefloateten Layout haben.

Ich verwende eine `@supports`-Regel, um die Unterstützung von `display: grid` zu prüfen. Dann schreibe ich meinen Grid-Code auf das {{HTMLElement("ul")}}, setze meine Breite und {{cssxref("min-height")}} auf den {{HTMLElement("li")}} auf `auto`. Ich entferne auch die Margins und negativen Margins und ersetze die Abstände durch die {{cssxref("gap")}}-Eigenschaft. Dies bedeutet, dass ich keine letzte Margin in der letzten Zeile der Boxen erhalte. Das Layout funktioniert nun, selbst wenn in einer der Karten mehr Inhalt vorhanden ist als in den anderen:

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

## Werte von `display` überschreiben

Aufgrund der Probleme beim Erstellen von Item-Grids mit Floats würden viele von uns eine alternative Methode zur oben gezeigten Float-Methode verwenden, um eine Gruppe von Karten zu layouten. `display: inline-block` ist eine alternative Methode.

Erneut kann ich Feature Queries verwenden, um ein Layout zu überschreiben, das `display: inline-block` verwendet, und erneut muss ich nicht alles überschreiben. Ein Element, das auf `inline-block` gesetzt ist, wird zu einem Grid-Item, und somit gilt das Verhalten von `inline-block` nicht mehr. Ich habe die {{cssxref("vertical-align")}}-Eigenschaft auf meinem Element im `inline-block`-Display-Modus verwendet, aber diese Eigenschaft gilt nicht für Grid-Items und wird daher ignoriert, sobald das Element ein Grid-Item wird:

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

Erneut ist es die Breite des Elements, die wir ansprechen müssen, und dann jede andere Eigenschaft, die wir verbessern möchten. In diesem Beispiel habe ich wieder `gap` anstelle von Margins und negativen Margins verwendet, um meine Abstände zu erstellen.

## Wie definiert die Spezifikation diese Überschreibungen?

Die CSS-Grid-Layout-Spezifikation beschreibt, warum wir das Verhalten bestimmter Eigenschaften überschreiben können, wenn etwas zu einem Grid-Item wird. Die wichtigsten Abschnitte der Spezifikation sind:

- [Festlegung von Grid-Containern](https://drafts.csswg.org/css-grid/#grid-containers)
- [Grid-Elemente](https://drafts.csswg.org/css-grid/#grid-items)
- [Grid-Element-Display](https://drafts.csswg.org/css-grid/#grid-item-display)

Da dieses Verhalten in der Spezifikation beschrieben ist, können Sie sicher darauf vertrauen, diese Überschreibungen zur Unterstützung älterer Browser zu verwenden. Nichts, was hier beschrieben wird, sollte als "Hack" angesehen werden. Vielmehr nutzen wir die Tatsache, dass die Gridspezifikation die Interaktion zwischen verschiedenen Layout-Methoden beschreibt.

### Andere Werte von display

Wenn ein Element einen Elternteil hat, der auf `display: grid` gesetzt ist, wird es _blockifiziert_, wie in der [CSS-Display-Spezifikation](https://drafts.csswg.org/css-display-3/#blockify) definiert. Im Fall unseres Elements, das auf `inline-block` gesetzt ist, ist dies der Grund, warum `display: inline-block` nicht mehr gilt.

Wenn Sie `display: table` für Ihr Legacy-Layout verwenden, erzeugt ein auf `display: table-cell` gesetztes Element anonyme Boxen. Wenn Sie also `display: table-cell` ohne ein Elternteil-Element verwenden, das auf `display-table` gesetzt ist, wird ein anonymes Tabellen-Wrapper um alle angrenzenden Zellen erstellt, so als würden Sie sie in ein div oder ein anderes Element setzen, das auf `display: table` gesetzt ist. Wenn Sie ein Element haben, das auf `display: table-cell` gesetzt ist, und dann in einer Feature Query das Elternteil auf `display: grid` ändern, wird diese anonyme Box-Erstellung nicht passieren. Das bedeutet, dass Sie `display: table`-basierte Layouts überschreiben können, ohne zusätzliche anonyme Boxen zu haben.

### Gefloatete Elemente

Wie wir bereits gesehen haben, haben {{cssxref("float")}} und auch {{cssxref("clear")}} keine Auswirkungen auf ein Grid-Item. Daher müssen Sie Elemente nicht explizit auf `float: none` setzen.

### Vertikale Ausrichtung

Die Ausrichtungseigenschaft {{cssxref("vertical-align")}} hat keine Auswirkungen auf ein Grid-Item. In Layouts mit `display: inline-block` oder `display: table` könnten Sie die vertical-align Eigenschaft verwenden, um eine grundlegende Ausrichtung vorzunehmen. In Ihrem Grid-Layout haben Sie dann die weit leistungsfähigeren Box-Ausrichtungs-Eigenschaften.

### Mehrspaltiges Layout

Sie können auch ein mehrspaltiges Layout als Ihren Legacy-Browserplan verwenden, da die `column-*`-Eigenschaften nicht anwendbar sind, wenn sie auf einen Grid-Container angewendet werden.
