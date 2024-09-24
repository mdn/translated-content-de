---
title: CSS Grid-Layout und progressive Verbesserung
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement
l10n:
  sourceCommit: 6f361249ffb14fd9e82f6bd369d7c7889eeb9475
---

{{CSSRef}}

Im Frühjahr 2017 sahen wir erstmals, dass eine bedeutende Spezifikation wie das Grid-Layout fast gleichzeitig in Browsern eingeführt wurde. Jetzt haben wir Unterstützung für CSS Grid-Layout in den öffentlichen Versionen von Firefox, Chrome, Opera, Safari und Edge. Auch wenn Evergreen-Browser bedeuten, dass viele von uns schnell feststellen werden, dass die Mehrheit der Nutzer Grid-Layout-Unterstützung hat, gibt es auch alte oder nicht unterstützende Browser, mit denen man sich auseinandersetzen muss. In diesem Leitfaden werden wir verschiedene Strategien für die Unterstützung durchgehen.

## Die unterstützenden Browser

CSS Grid-Layout ist in allen modernen Browsern ohne Präfixe verfügbar. Die Unterstützung für alle in diesen Leitfäden beschriebenen Eigenschaften und Werte ist in allen Browsern interoperabel. Dies bedeutet, dass wenn Sie Grid-Layout-Code in Firefox schreiben, er auf dieselbe Weise in Chrome funktionieren sollte. Es handelt sich nicht mehr um eine experimentelle Spezifikation, und Sie können sie sicher in der Produktion verwenden.

## Ist es sicher CSS-Grids für mein Layout zu verwenden?

Ja. Wie bei jeder Frontend-Technologie hängt die Entscheidung, CSS Grid-Layout zu nutzen, von den Browsern ab, die Ihre Webseitenbesucher typischerweise verwenden.

## Beginn der Verwendung von Grid in der Produktion

Es ist erwähnenswert, dass Sie Grid nicht auf eine _alles oder nichts_ Weise verwenden müssen. Beginnen Sie damit, Elemente in Ihrem Design mit Grid zu verbessern, die sonst mit einer älteren Methode angezeigt werden könnten. Das Überschreiben von Legacy-Methoden mit Grid-Layout funktioniert überraschend gut, da Grid auf bestimmte Weise mit diesen anderen Methoden interagiert.

### Floats

[Floats](/de/docs/Learn/CSS/CSS_layout/Floats) wurden früher verwendet, um Layouts mit mehreren Spalten zu erstellen. Wenn Sie einen alten Codebestand mit Float-Layouts unterstützen, wird es keinen Konflikt geben. Grid-Elemente ignorieren die Float-Eigenschaft; Tatsache ist, dass _ein Grid-Element Vorrang hat._ Im folgenden Beispiel habe ich ein einfaches Media-Objekt. Wenn das {{cssxref("float")}} nicht aus dem Legacy-CSS entfernt wird, ist es in Ordnung, da der Container ein Grid-Container ist. Wir können die Ausrichtungseigenschaften verwenden, die in CSS-Grids implementiert sind.

Das {{cssxref("float")}} hat keine Anwendung mehr, und ich kann die CSS Box Alignment Eigenschaft {{cssxref("align-self")}} verwenden, um meinen Inhalt am Ende des Containers auszurichten:

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

Das Bild unten zeigt das Media-Objekt in einem nicht unterstützenden Browser auf der linken Seite und in einem unterstützenden auf der rechten:

![Ein einfaches Beispiel zum Überschreiben eines Float-Layouts mit Grid. Beide haben das Bild links ausgerichtet. Der Text ist im Float-Beispiel oben vertikal ausgerichtet und im Grid-Beispiel unten.](10-float-simple-override.png)

### Verwendung von Feature-Queries

Das obige Beispiel ist sehr einfach, und wir können es uns leisten, keinen Code zu schreiben, der bei Browsern, die Grid nicht unterstützen, zu Problemen führen würde, und Legacy-Code ist für unsere Grid-unterstützenden Browser kein Problem. Allerdings sind die Dinge nicht immer so einfach.

#### Ein komplexeres Beispiel

Im nächsten Beispiel habe ich eine Reihe von Karten, die gefloatet sind. Ich habe den Karten eine {{cssxref("width")}} gegeben, um sie zu {{cssxref("float")}}. Um Lücken zwischen den Karten zu schaffen, verwende ich einen {{cssxref("margin")}} bei den Elementen und dann einen negativen Rand beim Container:

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

Das Beispiel demonstriert das typische Problem, das wir mit Float-Layouts haben: Wenn zusätzlicher Inhalt zu einer der Karten hinzugefügt wird, bricht das Layout zusammen.

![Ein Float-Kartenlayout, das das Problem zeigt, das durch ungleichmäßige Inhaltshöhe verursacht wird. Die obere Reihe hat 3 Karten. Die vierte Karte wird unter der dritten Karte gefloatet. Dann enthält die untere Reihe die fünfte und sechste Karte. Es gibt einen großen leeren Raum unter der vierten Karte.](10-floated-cards.png)

Als Zugeständnis für ältere Browser habe ich bei den Elementen eine {{cssxref("min-height")}} festgelegt und hoffe, dass meine Inhaltsredakteure nicht zu viel Inhalt hinzufügen und das Layout durcheinanderbringen!

Dann verbessere ich das Layout mit Grid. Ich kann mein {{HTMLElement("ul")}} in einen Grid-Container mit drei Spuren verwandeln. Die zugewiesene Breite der Listenelemente gilt jedoch weiterhin und macht diese Elemente nun ein Drittel der Breite der Spur:

![Sechs sehr hohe, sehr schmale Gitterelemente mit rechtsüberlappendem Text. Nachdem Gitter auf unseren Container angewendet wurde, ist die Breite der Elemente jetzt falsch, da sie mit einem Drittel der Breite des Elements dargestellt werden.](10-float-width-problem.png)

Wenn ich die Breite auf `auto` zurücksetze, stoppt dies das Float-Verhalten für ältere Browser. Ich muss in der Lage sein, die Breite für ältere Browser zu definieren und die Breite für Grid-unterstützende Browser zu entfernen. Dank [CSS Feature Queries](/de/docs/Web/CSS/@supports) kann ich dies direkt in meinem CSS tun.

#### Eine Lösung mit Feature-Queries

_Feature Queries_ werden sehr vertraut wirken, wenn Sie jemals einen [Media Query](/de/docs/Web/CSS/CSS_media_queries) verwendet haben, um ein responsives Layout zu erstellen. Anstatt eine {{glossary("viewport")}}-Breite oder eine andere Eigenschaft des Browsers oder Geräts zu überprüfen, prüfen wir die Unterstützung eines CSS-Eigenschaft-Wert-Paares mithilfe einer {{cssxref("@supports")}}-Regel. Innerhalb der Feature Query können wir dann beliebiges CSS schreiben, das wir benötigen, um unser modernes Layout anzuwenden und alles entfernen, was für das ältere Layout erforderlich ist.

```css
@supports (display: grid) {
  .wrapper {
    /* tun Sie hier alles für Grid-unterstützende Browser. */
  }
}
```

Feature Queries haben eine ausgezeichnete Browserunterstützung, und alle Browser, die die aktualisierte Grid-Spezifikation unterstützen, unterstützen auch Feature Queries. Sie können sie verwenden, um mit dem Problem fertig zu werden, das wir mit unserem verbesserten: gefloateten Layout haben.

Ich verwende eine `@supports`-Regel, um die Unterstützung von `display: grid` zu prüfen. Dann verwende ich meinen Grid-Code auf dem {{HTMLElement("ul")}}, setze meine Breite und {{cssxref("min-height")}} bei der {{HTMLElement("li")}} auf `auto`. Ich entferne auch die Margins und negativen Margins und ersetze die Abstände durch die {{cssxref("gap")}} Eigenschaft. Das bedeutet, dass ich keine letzte Margin in der letzten Zeile von Boxen habe. Das Layout funktioniert jetzt, selbst wenn mehr Inhalt in einer der Karten enthalten ist als in den anderen:

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

## Andere Werte von `display` überschreiben

Wegen der Probleme bei der Erstellung von Gittern von Elementen mit Floats würden viele von uns eine andere Methode als die oben gezeigte Float-Methode verwenden, um eine Reihe von Karten zu layouten. Die Verwendung von `display: inline-block` ist eine alternative Methode.

Auch hier kann ich Feature Queries verwenden, um ein Layout, das `display: inline-block` verwendet, zu überschreiben, und erneut muss ich nicht alles überschreiben. Ein Element, das auf `inline-block` gesetzt ist, wird zu einem Grid-Element, und somit gilt das Verhalten von `inline-block` nicht mehr. Ich habe die {{cssxref("vertical-align")}} Eigenschaft auf meinem Element verwendet, wenn sich der Anzeigemodus in `inline-block` befindet, aber diese Eigenschaft gilt nicht für Grid-Elemente und wird daher ignoriert, sobald das Element ein Grid-Element wird:

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

Auch hier ist es die Breite des Elements, die wir ansprechen müssen, und dann alle anderen Eigenschaften, die wir verbessern möchten. In diesem Beispiel habe ich erneut `gap` anstelle von Margin und negativen Margin verwendet, um meine Abstände zu erstellen.

## Wie definiert die Spezifikation diese Überschreibungen?

Die CSS Grid-Layout-Spezifikation beschreibt, warum wir das Verhalten bestimmter Eigenschaften überschreiben können, wenn etwas zu einem Grid-Element wird. Die entscheidenden Abschnitte der Spezifikation sind:

- [Einrichten von Grid-Containern](https://drafts.csswg.org/css-grid/#grid-containers)
- [Grid-Elemente](https://drafts.csswg.org/css-grid/#grid-items)
- [Display von Grid-Elementen](https://drafts.csswg.org/css-grid/#grid-item-display)

Da dieses Verhalten in der Spezifikation beschrieben wird, können Sie sich darauf verlassen, diese Überschreibungen in Ihrer Unterstützung für ältere Browser zu verwenden. Nichts, was hier beschrieben wird, sollte als "Hack" angesehen werden. Vielmehr nutzen wir die Tatsache, dass die Grid-Spezifikation die Interaktion zwischen verschiedenen Layout-Methoden beschreibt.

### Andere Werte von display

Wenn ein Element ein übergeordnetes Element hat, das auf `display: grid` gesetzt ist, wird es _blockifiziert_, wie in der [CSS Display-Spezifikation](https://drafts.csswg.org/css-display-3/#blockify) definiert. Im Fall unseres auf `inline-block` gesetzten Elements ist dieser Grund, warum `display: inline-block` nicht mehr angewendet wurde.

Wenn Sie `display: table` für Ihr Legacy-Layout verwenden, erzeugt ein auf `display: table-cell` gesetztes Element anonyme Boxen. Wenn Sie `display: table-cell` ohne ein übergeordnetes Element verwenden, das auf `display-table` gesetzt ist, wird eine anonyme Tabellenhülle um alle angrenzenden Zellen erstellt, genau so, als hätten Sie sie in ein div oder ein anderes Element gesetzt, das auf `display: table` eingestellt ist. Wenn Sie ein Element auf `display: table-cell` setzen und dann in einer Feature Query das übergeordnete Element auf `display: grid` ändern, wird diese anonyme Box-Erstellung nicht stattfinden. Das bedeutet, dass Sie Layouts auf Basis von `display: table` überschreiben können, ohne zusätzliche anonyme Boxen zu haben.

### Gefloatete Elemente

Wie wir bereits gesehen haben, haben {{cssxref("float")}} und auch {{cssxref("clear")}} keine Wirkung auf ein Grid-Element. Daher müssen Sie Elemente nicht explizit auf `float: none` setzen.

### Vertikale Ausrichtung

Die Alignment-Eigenschaft {{cssxref("vertical-align")}} hat keine Wirkung auf ein Grid-Element. In Layouts, die `display: inline-block` oder `display: table` verwenden, könnten Sie die vertikale Ausrichtungs-Eigenschaft verwenden, um eine grundlegende Ausrichtung vorzunehmen. In Ihrem Grid-Layout haben Sie dann die weitaus mächtigeren Box-Alignment-Eigenschaften.

### Layout mit mehreren Spalten

Sie können auch das Layout mit mehreren Spalten für Ihr Legacy-Browser-Layout verwenden, da die `column-*` Eigenschaften nicht gelten, wenn sie auf einen Grid-Container angewendet werden.
