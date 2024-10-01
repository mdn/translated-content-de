---
title: CSS Grid-Layout und progressive Verbesserung
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement
l10n:
  sourceCommit: 6f361249ffb14fd9e82f6bd369d7c7889eeb9475
---

{{CSSRef}}

Im Frühjahr 2017 sahen wir erstmalig, dass eine große Spezifikation wie Grid nahezu gleichzeitig in Browsern implementiert wurde, und wir haben nun CSS Grid-Layout-Unterstützung in den öffentlichen Versionen von Firefox, Chrome, Opera, Safari und Edge. Obwohl Evergreen-Browser bedeuten, dass viele von uns die Mehrheit der Benutzer schnell mit Grid-Layout-Unterstützung sehen werden, gibt es auch alte oder nicht unterstützende Browser zu berücksichtigen. In diesem Leitfaden gehen wir verschiedene Strategien zur Unterstützung durch.

## Die unterstützenden Browser

Das CSS Grid-Layout ist in allen modernen Browsern ohne Präfixe verfügbar. Die Unterstützung für alle in diesen Leitfäden detaillierten Eigenschaften und Werte ist über die Browser hinweg interoperabel. Das bedeutet, dass, wenn Sie Grid-Layout-Code in Firefox schreiben, er in Chrome auf dieselbe Weise funktionieren sollte. Dies ist keine experimentelle Spezifikation mehr, und Sie können sie sicher in der Produktion verwenden.

## Ist es sicher, CSS Grids für mein Layout zu verwenden?

Ja. Wie bei jeder Front-End-Technologie wird die Entscheidung, das CSS Grid-Layout zu verwenden, von den Browsern abhängen, die Ihre Site-Besucher typischerweise verwenden.

## Beginn der Nutzung von Grid in der Produktion

Es ist erwähnenswert, dass Sie nicht gezwungen sind, Grid auf eine _Alles-oder-Nichts_ Weise zu verwenden. Beginnen Sie damit, Elemente in Ihrem Design mit Grid zu verbessern, die ansonsten mit einer älteren Methode dargestellt werden könnten. Das Überschreiben von Legacy-Methoden mit Grid-Layout funktioniert überraschend gut aufgrund der Art und Weise, wie Grid mit diesen anderen Methoden interagiert.

### Floats

[Floats](/de/docs/Learn/CSS/CSS_layout/Floats) wurden früher verwendet, um mehrspaltige Layouts zu erstellen. Wenn Sie eine alte Codebasis mit Float-Layouts unterstützen, gibt es keinen Konflikt. Grid-Elemente ignorieren die Float-Eigenschaft; die Tatsache ist, dass _ein Grid-Element Vorrang hat_. Im folgenden Beispiel habe ich ein einfaches Medienobjekt. Wenn das {{cssxref("float")}} nicht aus dem Legacy-CSS entfernt wird, da der Container ein Grid-Container ist, ist das in Ordnung. Wir können die Ausrichtungseigenschaften verwenden, die in CSS Grids implementiert sind.

Das {{cssxref("float")}} gilt nicht mehr, und ich kann die CSS Box-Alignment-Eigenschaft {{cssxref("align-self")}} verwenden, um meinen Inhalt am Ende des Containers auszurichten:

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

Das folgende Bild zeigt das Medienobjekt in einem nicht unterstützenden Browser links und einem unterstützenden rechts:

![Ein einfaches Beispiel für das Überschreiben eines Float-Layouts mit Grid. Beide haben das Bild links ausgerichtet. Der Text ist im Float-Beispiel oben vertikal ausgerichtet und im Grid-Beispiel unten.](10-float-simple-override.png)

### Verwendung von Feature-Queries

Das obige Beispiel ist sehr einfach und wir kommen ohne die Notwendigkeit aus, Code zu schreiben, der für Browser, die Grid nicht unterstützen, ein Problem darstellen würde, und Legacy-Code ist kein Problem für unsere Grid-unterstützenden Browser. Allerdings sind die Dinge nicht immer so einfach.

#### Ein komplexeres Beispiel

Im nächsten Beispiel habe ich eine Reihe von Karten mit Floats. Ich habe den Karten eine {{cssxref("width")}} gegeben, um sie zu {{cssxref("float")}}. Um Lücken zwischen den Karten zu schaffen, verwende ich eine {{cssxref("margin")}} auf den Elementen und dann einen negativen Rand auf dem Container:

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

{{ EmbedLiveSample('Ein_komplexeres_Beispiel', '550', '450') }}

Das Beispiel demonstriert das typische Problem, das wir mit Float-Layouts haben: Wenn zusätzlicher Inhalt zu einer der Karten hinzugefügt wird, bricht das Layout.

![Ein Layout mit schwimmenden Karten, das das Problem ungleichmäßiger Inhaltshöhe demonstriert. Die obere Reihe hat 3 Karten. Die vierte Karte ist unter die dritte Karte verschoben. Dann enthält eine untere Reihe die fünfte und sechste Karte. Es gibt einen großen leeren Raum unter der vierten Karte.](10-floated-cards.png)

Als Zugeständnis an ältere Browser habe ich den Elementen eine {{cssxref("min-height")}} zugewiesen und hoffe, dass meine Inhaltsredakteure nicht zu viel Inhalt hinzufügen und das Layout durcheinanderbringen!

Anschließend verbessere ich das Layout mit Grid. Ich kann mein {{HTMLElement("ul")}} in einen Grid-Container mit drei Spalten verwandeln. Die von mir zugewiesene Breite für die Listenelemente selbst bleibt jedoch bestehen und macht diese Elemente nun ein Drittel so breit wie das Track:

![Sechs sehr hohe, sehr schmale Grid-Elemente mit Text, der auf der rechten Seite überläuft. Nach dem Anwenden von Grid auf unseren Container ist die Breite der Elemente jetzt falsch, da sie ein Drittel der Elementbreite anzeigen.](10-float-width-problem.png)

Wenn ich die Breite auf `auto` setze, wird dieses Verhalten in älteren Browsern nicht mehr auftreten. Ich muss in der Lage sein, die Breite für ältere Browser zu definieren und die Breite für Grid-unterstützende Browser zu entfernen. Dank [CSS Feature Queries](/de/docs/Web/CSS/@supports) kann ich dies direkt in meinem CSS tun.

#### Eine Lösung mit Feature-Queries

_Feature-Queries_ werden Ihnen sehr vertraut vorkommen, wenn Sie jemals eine [Media Query](/de/docs/Web/CSS/CSS_media_queries) verwendet haben, um ein responsives Layout zu erstellen. Anstatt eine {{Glossary("viewport", "Viewport")}}-Breite oder ein Merkmal des Browsers oder Geräts zu überprüfen, prüfen wir die Unterstützung eines CSS-Eigenschafts- und Wertpaar mit einer {{cssxref("@supports")}}-Regel. Innerhalb der Feature-Query können wir dann beliebiges CSS schreiben, das wir benötigen, um unser modernes Layout anzuwenden und alles zu entfernen, was für das alte Layout erforderlich ist.

```css
@supports (display: grid) {
  .wrapper {
    /* do anything for grid supporting browsers here. */
  }
}
```

Feature-Queries haben hervorragende Browser-Unterstützung, und alle Browser, die die aktualisierte Grid-Spezifikation unterstützen, unterstützen auch Feature-Queries. Sie können sie verwenden, um mit dem Problem umzugehen, das wir mit unserem verbesserten Float-Layout haben.

Ich verwende eine `@supports`-Regel, um die Unterstützung von `display: grid` zu prüfen. Ich benutze dann meinen Grid-Code auf {{HTMLElement("ul")}}, setze meine Breite und {{cssxref("min-height")}} auf {{HTMLElement("li")}} auf `auto`. Ich entferne auch die Ränder und die negativen Ränder und ersetze die Abstände durch die {{cssxref("gap")}}-Eigenschaft. Das bedeutet, dass ich keinen endgültigen Rand auf der letzten Reihe von Boxen habe. Das Layout funktioniert jetzt, auch wenn in einer der Karten mehr Inhalt als in den anderen vorhanden ist:

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

{{ EmbedLiveSample('Eine_Lösung_mit_Feature-Queries', '550', '480') }}

## Überschreiben anderer Werte von `display`

Aufgrund der Probleme bei der Erstellung von Grids mit Float-Elementen würden viele von uns eine andere Methode als die oben gezeigte Float-Methode verwenden, um ein Set von Karten zu layouten. `display: inline-block` ist eine alternative Methode.

Auch hier kann ich Feature-Queries verwenden, um ein Layout zu überschreiben, das `display: inline-block` verwendet, und auch hier muss ich nicht alles überschreiben. Ein Element, das auf `inline-block` gesetzt ist, wird zu einem Grid-Element, und das Verhalten von `inline-block` gilt nicht mehr. Ich habe die Eigenschaft {{cssxref("vertical-align")}} an meinem Element verwendet, wenn es sich im Modus `inline-block` befindet, aber diese Eigenschaft gilt nicht für Grid-Elemente und wird daher ignoriert, sobald das Element zu einem Grid-Element wird:

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

{{ EmbedLiveSample('Überschreiben_anderer_Werte_von_display', '500', '480') }}

Wieder einmal ist es die Breite des Elements, die wir ansprechen müssen, und dann alle anderen Eigenschaften, die wir verbessern möchten. In diesem Beispiel habe ich erneut `gap` verwendet, anstatt Ränder und negative Ränder zu verwenden, um meine Abstände zu erzeugen.

## Wie definiert die Spezifikation diese Überschreibungen?

Die CSS Grid-Layout-Spezifikation beschreibt, warum wir das Verhalten bestimmter Eigenschaften überschreiben können, wenn etwas zu einem Grid-Element wird. Die Schlüsselabschnitte der Spezifikation sind:

- [Erstellen von Grid-Containern](https://drafts.csswg.org/css-grid/#grid-containers)
- [Grid-Elemente](https://drafts.csswg.org/css-grid/#grid-items)
- [Anzeige von Grid-Elementen](https://drafts.csswg.org/css-grid/#grid-item-display)

Da dieses Verhalten in der Spezifikation beschrieben wird, können Sie sich sicher darauf verlassen, diese Überschreibungen in Ihrer Unterstützung für ältere Browser zu verwenden. Nichts, was hier beschrieben wird, sollte als "Hack" angesehen werden. Vielmehr nutzen wir die Tatsache, dass die Grid-Spezifikation die Interaktion zwischen verschiedenen Layout-Methoden beschreibt.

### Andere Werte von display

Wenn ein Element ein Elternteil hat, das auf `display: grid` gesetzt ist, wird es gemäß der [CSS Display-Spezifikation](https://drafts.csswg.org/css-display-3/#blockify) _blockifiziert_. Im Falle unseres Elements auf `inline-block` ist dies der Grund, warum `display: inline-block` nicht mehr angewendet wird.

Wenn Sie `display: table` für Ihr Legacy-Layout verwenden, generiert ein auf `display: table-cell` gesetztes Element anonyme Boxen. Wenn Sie `display: table-cell` ohne ein Elternteil verwenden, das auf `display-table` gesetzt ist, wird ein anonymer Tabellen-Wrapper um alle angrenzenden Zellen erstellt, so als ob Sie sie in ein div oder ein anderes Element gesetzt hätten, das auf `display: table` gesetzt ist. Wenn Sie ein auf `display: table-cell` gesetztes Element haben und dann in einer Feature-Query das Elternteil auf `display: grid` ändern, wird diese anonyme Boxenerstellung nicht stattfinden. Das bedeutet, dass Sie `display: table` basierte Layouts überschreiben können, ohne zusätzliche anonyme Boxen zu haben.

### Floated-Elemente

Wie wir bereits gesehen haben, haben {{cssxref("float")}} und auch {{cssxref("clear")}} keine Auswirkung auf ein Grid-Element. Daher müssen Sie Elemente nicht explizit auf `float: none` setzen.

### Vertikale Ausrichtung

Die Ausrichtungseigenschaft {{cssxref("vertical-align")}} hat keine Wirkung auf ein Grid-Element. In Layouts, die `display: inline-block` oder `display: table` verwenden, könnten Sie die Eigenschaft vertical-align für grundlegende Ausrichtungszwecke verwenden. In Ihrem Grid-Layout haben Sie dann die weitaus leistungsfähigeren Box-Alignment-Eigenschaften.

### Mehrspalten-Layout

Sie können auch ein Mehrspalten-Layout als Ihren Plan für veraltete Browser verwenden, da die `column-*` Eigenschaften nicht wirksam sind, wenn sie auf einen Grid-Container angewendet werden.
