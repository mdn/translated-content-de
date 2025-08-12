---
title: Responsive Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Ansatz für Webdesign, bei dem Webseiten auf allen Bildschirmgrößen und -auflösungen gut dargestellt werden und gleichzeitig eine gute Benutzerfreundlichkeit gewährleistet ist. Es ist die Art und Weise, wie man für das Web auf verschiedenen Geräten gestaltet. In diesem Artikel werden wir Ihnen helfen, einige Techniken zu verstehen, die zur Beherrschung verwendet werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">
            Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftart-Styling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundlegende Konzepte des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist — Weblayouts so zu gestalten, dass sie flexibel sind und gut auf verschiedenen Gerätebildschirmgrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich mobiler Erstausrichtung und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten entsprechend anzeigen zu lassen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobile Webdesign

Bevor responsive Webdesign zum Standardansatz wurde, um Websites geräteübergreifend funktionstüchtig zu machen, sprachen Webentwickler über Mobile Webdesign, Mobile Webentwicklung oder manchmal sogar mobile-freundliches Design. Diese Konzepte sind im Grunde dasselbe wie responsives Webdesign — die Ziele bestehen darin sicherzustellen, dass Websites geräteübergreifend mit unterschiedlichen physischen Merkmalen (Bildschirmgröße, Auflösung) hinsichtlich Layout, Content (Text und Medien) und Leistung gut funktionieren.

Der Unterschied liegt hauptsächlich an den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprachen wir über Desktop oder Mobile, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobile, Tablets, Uhren usw. Statt nur wenige Bildschirmgrößen zu berücksichtigen, müssen wir jetzt Websites defensiv gestalten, um gängige Bildschirmgrößen und Auflösungen sowie Unbekanntes zu berücksichtigen.
- Mobile Geräte hatten früher eine geringere Leistungsfähigkeit in Bezug auf CPU/GPU und verfügbare Bandbreite. Manche unterstützten kein CSS oder sogar HTML, und es war üblich, serverseitiges Browser-Sniffing durchzuführen, um den Gerätetyp/Browsers zu bestimmen, bevor eine für das Gerät geeignete Website bereitgestellt wurde. Mobile Geräte erhielten oft wirklich einfache, grundlegende Erfahrungen, weil sie nicht mehr bewältigen konnten. Heutzutage können mobile Geräte die gleichen Technologien wie Desktop-Computer bewältigen, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Nutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt, auf die geachtet werden muss.
  - Benutzererfahrung ist immer noch ein Anliegen. Ein mobiler Nutzer einer Reise-Website möchte vielleicht nur Flugzeiten und Verspätungsinformationen überprüfen und nicht einen 3D-animierten Globus mit Flugrouten und Ihrer Unternehmensgeschichte sehen.
- Moderne Technologien sind viel besser für die Schaffung responsiver Erlebnisse. Beispielsweise ermöglichen [responsive Bild-/Medientechnologien](#responsive_imagesmedia) nun, dass geeignete Medien an verschiedene Geräte geliefert werden, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in responsives Webdesign

HTML ist grundlegend responsiv oder _fluid_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster ändern, reflowt der Browser den Text automatisch, um in den Viewport zu passen.

Auch wenn das standardmäßige responsive Verhalten so klingen mag, dass keine Lösung benötigt wird, können lange Textzeilen, die im Vollbildmodus auf einem breiten Monitor angezeigt werden, schwer zu lesen sein. Dieses Problem kann mit CSS gelöst werden, indem z. B. schmale Spalten erstellt werden, um die Zeilenlänge zu begrenzen. Dies kann jedoch neue Probleme für Benutzer schaffen, die ihr Browserfenster verkleinern oder die Seite auf einem mobilen Gerät ansehen — die Spalten werden eingeengt und schwerer zu lesen.

![Ein Layout mit zwei Spalten, die in einen mobilen Größenviewport zusammengequetscht sind.](mdn-rwd-liquid.png)

Das Erstellen einer nicht resizable Webseite durch Festlegen einer festen Breite funktioniert ebenfalls nicht; dies führt zu Scrollleisten auf schmalen Geräten und zu viel leerem Raum auf breiten Bildschirmen.

Responsive Webdesign, oder RWD, ist ein Designansatz, der das gesamte Spektrum der verfügbaren Geräte und Gerätegrößen berücksichtigt und eine automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr betrachtet wird.

Responsive Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der eine Reihe von Best Practices beschreibt, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät reagieren kann, das zum Anzeigen des Inhalts verwendet wird.

Der Begriff _responsive Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschrieb die Verwendung von fluiden Grids, fluiden Bildern und Media Queries, um responsive Inhalte zu erstellen.

Zu der Zeit war die Empfehlung, CSS `float` für das Layout zu verwenden und Media Queries zu nutzen, um die Browserbreite zu ermitteln und Layouts für verschiedene Breakpoints zu erstellen. Fluide Bilder sind so eingestellt, dass sie nicht breiter als ihr Container sind; sie haben ihre `max-width`-Eigenschaft auf `100%` gesetzt. Fluide Bilder verkleinern sich, wenn ihre enthaltende Spalte enger wird, wachsen jedoch nicht über ihre intrinsische Größe hinaus, wenn die Spalte wächst. Dadurch kann ein Bild sich verkleinern, um in seinen Inhalt zu passen, ihn aber nicht überschreiten und pixelig werden, wenn der Container breiter wird als das Bild.

Moderne CSS-Layout-Methoden sind von Natur aus responsive und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in die Webplattform integriert, um die Gestaltung responsiver Websites zu erleichtern.

Der Rest dieses Artikels wird die verschiedenen Funktionen der Webplattform erläutern, die Sie bei der Erstellung einer responsiven Website verwenden könnten.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Benutzers größer als eine bestimmte Breite oder Auflösung ist) und selektiv CSS anzuwenden, um die Seite den Bedürfnissen des Benutzers entsprechend zu gestalten.

Zum Beispiel prüft die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedium angezeigt wird (daher kein gedrucktes Dokument) und ob der Viewport mindestens `80rem` breit ist. Die `.container`-Regel wird nur angewendet, wenn diese beiden Bedingungen erfüllt sind.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries in einem Stylesheet hinzufügen und Ihr gesamtes Layout oder Teile davon anpassen, um die verschiedenen Bildschirmgrößen optimal zu unterstützen. Die Punkte, an denen eine Media Query eingeführt wird und sich das Layout ändert, sind als _Breakpoints_ bekannt.

Ein gebräuchlicher Ansatz bei der Verwendung von Media Queries ist die Erstellung eines einfachen einspaltigen Layouts für Geräte mit schmalem Bildschirm (zum Beispiel Mobiltelefone), um dann für breitere Bildschirme zu prüfen und ein mehrspaltiges Layout zu implementieren, wenn Sie wissen, dass genügend Bildschirmbreite vorhanden ist, um es zu handhaben. Das Design für Mobile zuerst zu gestalten, wird als **Mobile First**-Design bezeichnet.

Wenn Breakpoints verwendet werden, wird empfohlen, die Media Query-Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) anstatt absoluter Größen eines einzelnen Geräts zu definieren.

Es gibt verschiedene Ansätze für die innerhalb eines Media Query-Blocks definierten Stile; diese reichen von der Verwendung von Media Queries, um {{htmlelement("link")}} Stylesheets basierend auf Browserspannweite zu verknüpfen, bis zur Aufnahme von nur benutzerdefinierten Eigenschaftsvariablen, um Werte zu speichern, die mit jedem Breakpoint verbunden sind.

Media Queries können bei RWD helfen, sind aber nicht zwingend erforderlich. Flexible Grids, relative Einheiten und Minimum- und Maximum-Werte können ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba bietet ein Tutorial namens [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, das eine interaktive Einführung in Media Queries bietet, sowie eine Herausforderung, um sicherzustellen, dass Sie die Grundlagen verstanden haben.

## Responsive Layout-Technologien

Responsive Websites basieren auf flexiblen Grids, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts anvisieren müssen.

Durch die Verwendung eines flexiblen Grids können Sie eine Funktion ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel, um sicherzustellen, dass Zeilenlängen mit zunehmender Bildschirmgröße nicht schwer lesbar werden, können Sie {{cssxref('columns')}} verwenden; wenn eine Box mit zwei Wörtern in jeder Zeile bei Verkleinerung gequetscht aussieht, können Sie einen Breakpoint setzen.

Mehrere Layout-Methoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind standardmäßig responsiv. Sie gehen alle davon aus, dass Sie versuchen, ein flexibles Grid zu erstellen und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Items und verteilen den Raum zwischen den Elementen je nach Platz in ihrem Container. Durch Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie die Elemente sich verhalten sollen, wenn sie auf mehr oder weniger Platz stoßen.

Im folgenden Beispiel nimmt jedes der Flex-Items eine gleichmäßige Menge an Platz im Flex-Container ein, wobei die Kurzschreibweise von `flex: 1` verwendet wird, wie zuvor besprochen (siehe [Flexbox: Flexible Größenanpassung von Flex-Items](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

So könnte Flexbox in Kombination mit einer Media Query für responsives Design verwendet werden.

```html live-sample___flex-based-rwd
<div class="wrapper">
  <div class="col1">
    <p>
      This layout is responsive. See what happens if you make the browser window
      wider or narrow.
    </p>
  </div>
  <div class="col2">
    <p>
      One November night in the year 1782, so the story runs, two brothers sat
      over their winter fire in the little French town of Annonay, watching the
      grey smoke-wreaths from the hearth curl up the wide chimney. Their names
      were Stephen and Joseph Montgolfier, they were papermakers by trade, and
      were noted as possessing thoughtful minds and a deep interest in all
      scientific knowledge and new discovery.
    </p>
    <p>
      Before that night—a memorable night, as it was to prove—hundreds of
      millions of people had watched the rising smoke-wreaths of their fires
      without drawing any special inspiration from the fact.
    </p>
  </div>
</div>
```

```css hidden live-sample___flex-based-rwd
body {
  font: 1.2em / 1.5 sans-serif;
  margin: 20px;
  padding: 0;
  background-color: #eeeeee;
}
.wrapper {
  max-width: 960px;
  margin: 2em auto;
}

.col1,
.col2 {
  background-color: white;
}
```

```css live-sample___flex-based-rwd
@media screen and (width >= 600px) {
  .wrapper {
    display: flex;
  }

  .col1 {
    flex: 1;
    margin-right: 5%;
  }

  .col2 {
    flex: 2;
  }
}
```

{{EmbedLiveSample("flex-based-rwd", "", "550px")}}

Ändern Sie die Größe Ihres Browserfensters. Das Layout ändert sich zwischen einem einspaltigen und einem zweispaltigen Layout, wenn die Größe des obigen Beispiels die `600px` breite Schwelle überschreitet.

### CSS Grid

Im CSS-Grid-Layout ermöglicht die `fr`-Einheit die Verteilung des verfügbaren Raumes über die Grid-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks, die jeweils auf `1fr` gesetzt sind. Dies erzeugt drei Spalten-Tracks, die jeweils einen Teil des verfügbaren Raumes im Container einnehmen. Sie haben diesen Ansatz bereits betrachtet (siehe [Flexibles Grid mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) für eine Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

So könnte das Grid-Layout mit einer Media Query für responsives Design verwendet werden.

```html live-sample___grid-based-rwd
<div class="wrapper">
  <div class="col1">
    <p>
      This layout is responsive. See what happens if you make the browser window
      wider or narrow.
    </p>
  </div>
  <div class="col2">
    <p>
      One November night in the year 1782, so the story runs, two brothers sat
      over their winter fire in the little French town of Annonay, watching the
      grey smoke-wreaths from the hearth curl up the wide chimney. Their names
      were Stephen and Joseph Montgolfier, they were papermakers by trade, and
      were noted as possessing thoughtful minds and a deep interest in all
      scientific knowledge and new discovery.
    </p>
    <p>
      Before that night—a memorable night, as it was to prove—hundreds of
      millions of people had watched the rising smoke-wreaths of their fires
      without drawing any special inspiration from the fact.
    </p>
  </div>
</div>
```

```css hidden live-sample___grid-based-rwd
body {
  font: 1.2em / 1.5 sans-serif;
  margin: 20px;
  padding: 0;
  background-color: #eeeeee;
}
.wrapper {
  max-width: 960px;
  margin: 2em auto;
}

.col1,
.col2 {
  background-color: white;
}
```

```css live-sample___grid-based-rwd
@media screen and (width >= 600px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 5%;
  }
}
```

{{EmbedLiveSample("grid-based-rwd", "", "550px")}}

Erneut probieren Sie, die Größe Ihres Browserfensters zu ändern — Sie sollten sehen, dass sich das Beispiel-Layout an der `600px` breiten Schwelle ändert, genauso wie beim vorherigen Beispiel.

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien niemals größer als ihr responsiver Container sind, kann folgender Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dieses skaliert Medienelemente so, dass sie nie über ihre Container hinausfließen.

> [!NOTE]
> Die Verwendung eines einzelnen großen Bildes und dessen Herunterskalierung, um auf kleine Geräte zu passen, verschwendet Bandbreite durch das Herunterladen größerer Bilder als nötig. Es kann auch schlecht aussehen — ein Landschaftsbild könnte beispielsweise auf einem Breitbildmonitor gut aussehen, aber auf einem mobilen Gerät schwer zu sehen sein, das ein Hochformat besser geeignet wäre. Solche Probleme können durch die Verwendung des {{htmlelement("picture")}}-Elements und der {{htmlelement("img")}}-Attribute `srcset` und `sizes` gelöst werden. Diese sind fortgeschrittene Funktionen, die außerhalb des Rahmens dieses Kurses liegen, aber Sie können ein detailliertes Handbuch unter [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images) finden.

Weitere nützliche Tipps:

- Stellen Sie sicher, dass Sie ein geeignetes Bildformat für Ihre Website-Bilder verwenden (wie PNG oder JPG), und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihre Website stellen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) nutzen, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries innerhalb des Media-Attributs auf {{htmlelement("source")}}-Elementen nutzen, die innerhalb von {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen geschachtelt sind, um Video-/Audio-Dateien für verschiedene Geräte geeignet bereitzustellen (responsive Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt die Änderung der Schriftgrößen innerhalb von Media Queries oder die Nutzung von Viewport-Einheiten, um geringere oder größere Mengen an Bildschirmfläche widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Stufe 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß ist wie unsere Basis-Schriftgröße. Das ist eine wirklich große Überschrift! Wir wollen diese große Überschrift nur bei größeren Bildschirmgrößen, daher geben wir der Überschrift zuerst eine kleinere Größe von `2rem`, dann verwenden wir Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

```css
html {
  font-size: 1em;
}

h1 {
  font-size: 2rem;
}

@media (width >= 1200px) {
  h1 {
    font-size: 4rem;
  }
}
```

Das nächste Beispiel ist eine modifizierte Version unseres vorherigen responsiven Grid-Beispiels, das eine responsive Überschrift mit der beschriebenen Methode beinhaltet. Auf mobilen Geräten ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Schriftgröße:

```html live-sample___type-rwd
<div class="wrapper">
  <div class="col1">
    <h1>Watch my size!</h1>
    <p>
      This layout is responsive. See what happens if you make the browser window
      wider or narrow.
    </p>
  </div>
  <div class="col2">
    <p>
      One November night in the year 1782, so the story runs, two brothers sat
      over their winter fire in the little French town of Annonay, watching the
      grey smoke-wreaths from the hearth curl up the wide chimney. Their names
      were Stephen and Joseph Montgolfier, they were papermakers by trade, and
      were noted as possessing thoughtful minds and a deep interest in all
      scientific knowledge and new discovery.
    </p>
    <p>
      Before that night—a memorable night, as it was to prove—hundreds of
      millions of people had watched the rising smoke-wreaths of their fires
      without drawing any special inspiration from the fact.
    </p>
  </div>
</div>
```

```css live-sample___type-rwd
html {
  font-size: 1em;
}

body {
  font:
    1.2em Helvetica,
    Arial,
    sans-serif;
  margin: 20px;
  padding: 0;
  background-color: #eeeeee;
}
.wrapper {
  max-width: 960px;
  margin: 2em auto;
}

h1 {
  font-size: 2rem;
  margin: 0;
}

.col1,
.col2 {
  background-color: white;
}

@media screen and (width >= 600px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 5%;
  }

  h1 {
    font-size: 4rem;
  }
}
```

{{EmbedLiveSample("type-rwd", "", "550px")}}

Wie bei den vorherigen Beispielen, ändern Sie die Breite des Browserfensters und beachten Sie, wie nicht nur das Layout an der `600px` breiten Schwelle ändert, sondern auch die Schriftgröße der Überschrift.

Wie dieser Ansatz zur Typografie zeigt, müssen Sie Media Queries nicht nur auf die Änderung des Layouts der Seite beschränken. Sie können verwendet werden, um jedes Element anzupassen, um es auf alternativen Bildschirmgrößen benutzerfreundlicher oder attraktiver zu machen.

### Verwendung von Viewport-Einheiten für responsive Typografie

Viewport-Einheiten `vw` können auch genutzt werden, um responsive Typografie zu ermöglichen, ohne Breakpoints mit Media Queries setzen zu müssen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass wenn Sie Ihre Schriftgröße mit `vw` setzen, sie immer in Bezug auf die Größe des Viewports ist.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der obigen Methode ist, dass der Benutzer die Möglichkeit verliert, jeglichen Text, der mit der `vw`-Einheit gesetzt ist, zu vergrößern, da dieser Text immer in Bezug auf die Größe des Viewports ist. **Daher sollten Sie Text niemals alleine mit Viewport-Einheiten setzen**.

Es gibt eine Lösung, und sie umfasst die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die `vw`-Einheit zu einem mit einer festen Größe wie `em`s oder `rem`s gesetzten Wert hinzufügen, bleibt der Text vergrößerbar. Im Wesentlichen wird die `vw`-Einheit auf diesen vergrößerten Wert hinzugefügt:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Dies bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal angeben müssen, anstatt sie für mobile Geräte zu setzen und in den Media Queries neu zu definieren. Die Schrift vergrößert sich dann allmählich, wenn Sie die Größe des Viewports erhöhen.

```html live-sample___type-vw
<div class="wrapper">
  <div class="col1">
    <h1>Watch my size!</h1>
    <p>
      This layout is responsive. See what happens if you make the browser window
      wider or narrow.
    </p>
  </div>
  <div class="col2">
    <p>
      One November night in the year 1782, so the story runs, two brothers sat
      over their winter fire in the little French town of Annonay, watching the
      grey smoke-wreaths from the hearth curl up the wide chimney. Their names
      were Stephen and Joseph Montgolfier, they were papermakers by trade, and
      were noted as possessing thoughtful minds and a deep interest in all
      scientific knowledge and new discovery.
    </p>
  </div>
</div>
```

```css live-sample___type-vw
body {
  font: 1.2em / 1.5 sans-serif;
  margin: 20px;
  padding: 0;
  background-color: #eeeeee;
}

.wrapper {
  max-width: 960px;
  margin: 2em auto;
}

h1 {
  font-size: calc(1.5rem + 4vw);
  margin: 0;
}

.col1,
.col2 {
  background-color: white;
}

@media screen and (width >= 600px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 5%;
  }
}
```

{{EmbedLiveSample("type-vw", "", "550px")}}

Versuchen Sie, die Größe Ihres Browserfensters zu ändern, wie zuvor, und beachten Sie, wie diesmal die Schriftgröße der Überschrift _allmählich_ zunimmt, wenn sich die Breite ändert.

## Das Viewport-Meta-Tag

Wenn Sie den HTML-Quellcode einer responsiven Seite ansehen, werden Sie normalerweise folgendes {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Breite des Geräts setzen und das Dokument auf 100% seiner beabsichtigten Größe skalieren sollen, was das Dokument in der mobil-optimierten Größe anzeigt, die Sie beabsichtigt haben.

Warum ist das nötig? Weil mobile Browser dazu tendieren, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil als Smartphones zuerst auftauchten, waren die meisten Websites nicht mobil optimiert. Der mobile Browser würde daher die Viewport-Breite auf 980 Pixel setzen, die Seite bei dieser Breite rendern und das Ergebnis als herausgezoomte Version des Desktop-Layouts anzeigen. Benutzer konnten in die Website hineinzoomen und sie durchscrollen, um die Teile anzusehen, die sie interessierten, aber es sah schlecht aus.

Indem Sie `width=device-width` setzen, überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie die Standardeinstellung `width=980px` des iPhones, mit der tatsächlichen Breite des Geräts. Ohne dies könnte Ihr responsives Design mit Breakpoints und Media Queries auf mobilen Browsern nicht wie beabsichtigt funktionieren. Wenn Sie ein Layout für einen schmalen Bildschirm erstellt haben, das bei einer Viewport-Breite von 480px oder weniger einschaltet, das Gerät jedoch sagt, dass es 980px breit ist, sieht dieser Nutzer Ihr Layout für schmale Bildschirme nicht.

**Daher sollten Sie _immer_ das Viewport-Meta-Tag im Kopfbereich Ihrer Dokumente einfügen.**

Es gibt eine Reihe von anderen Optionen, die Sie innerhalb des `content`-Attributs des Viewport-Meta-Tags angeben können — siehe [Using the viewport meta tag to control layout on mobile browsers](/de/docs/Web/HTML/Guides/Viewport_meta_element) für weitere Details.

## Zusammenfassung

Responsive Design bezieht sich auf ein Website- oder Applikationsdesign, das auf die Umgebung reagiert, in der es angezeigt wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist im Wesentlichen die Art und Weise, wie wir standardmäßig Websites erstellen. Betrachten Sie die Seiten, die Sie auf Ihrem Telefon besuchen — wahrscheinlich ist es ziemlich ungewöhnlich, auf eine Seite zu stoßen, die die Desktop-Version im verkleinerten Maßstab ist oder wo Sie seitwärts scrollen müssen, um Dinge zu finden. Dies liegt daran, dass das Web zu diesem Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs mit Hilfe der in diesem Artikel behandelten Layoutmethoden zu erreichen. Wenn Sie heute neu im Webdevelopment sind, haben Sie viel mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Es lohnt sich daher, das Alter der verwendeten Materialien zu überprüfen. Während die historischen Artikel immer noch nützlich sind, macht die moderne Verwendung von CSS und HTML es weit einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Seite betrachtet.

Als Nächstes werden wir Media Queries im Detail studieren und zeigen, wie man sie zur Lösung einiger gängiger Probleme verwendet.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stylus-)Aktivitäten auf Touchscreens oder Trackpads zu interpretieren, um hochwertige Unterstützung für komplexe touchbasierte Benutzeroberflächen zu ermöglichen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um auf Touch-fähigen Geräten verschiedene CSS zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [The Frontend Developer Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Frontend-Webentwickler zu sein, mit lustigen interaktiven Lektionen und Herausforderungen, erfahrenen Lehrern und einer unterstützenden Community. Vom Anfänger bis zur Landung in Ihrem ersten Frontend-Job! Viele der Kurskomponenten sind als eigenständige, kostenlose Versionen verfügbar. Dazu gehört ein Modul über Responsive Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
