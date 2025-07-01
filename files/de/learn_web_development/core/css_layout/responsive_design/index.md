---
title: Responsive Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Ansatz im Webdesign, um sicherzustellen, dass Webseiten auf allen Bildschirmgrößen und Auflösungen gut dargestellt werden, während die Benutzerfreundlichkeit gewahrt bleibt. Es ist die Methode, um für ein Multi-Device-Web zu gestalten. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die dabei helfen können, dies zu meistern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten von CSS-Layout</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Responsive Design ist — das Entwerfen von Weblayouts so, dass sie flexibel sind und gut über verschiedene Geräteschrimgrößen, Auflösungen usw. hinaus funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und Responsive Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für Responsive Design, einschließlich "mobile-first" und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten angemessen anzuzeigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer von Responsive Design: Mobiles Webdesign

Bevor Responsive Webdesign der Standardansatz für die Erstellung von Webseiten wurde, die auf verschiedenen Gerätetypen funktionieren, sprachen Webentwickler über mobiles Webdesign, mobile Webentwicklung oder manchmal mobile-freundliches Design. Diese Begriffe sind im Wesentlichen dasselbe wie Responsive Webdesign — die Ziele sind sicherzustellen, dass Websites hinsichtlich Layout, Inhalt (Text und Medien) und Leistung gut auf Geräten mit unterschiedlichen physischen Attributen (Bildschirmgröße, Auflösung) funktionieren.

Der Unterschied liegt hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprach man von Desktop oder Mobilgeräten, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktops, Laptops, Mobilgeräte, Tablets, Uhren usw. Statt nur wenige unterschiedliche Bildschirmgrößen zu berücksichtigen, müssen wir Websites jetzt defensiv gestalten, um sowohl gängige Bildschirmgrößen und Auflösungen als auch Unbekannte zu berücksichtigen.
- Mobile Geräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten weder CSS noch HTML, und deshalb war es üblich, ein Server-seitiges Browsersniffing durchzuführen, um den Geräten/Browsers zu identifizieren, bevor eine Seite bereitgestellt wurde, die das Gerät verarbeiten konnte. Mobile Geräte bekamen oft wirklich einfache, grundlegende Erlebnisse präsentiert, weil sie nichts anderes verarbeiten konnten. Heutzutage sind mobile Geräte in der Lage, die gleichen Technologien wie Desktop-Computer zu verarbeiten, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Nutzern ein passendes Erlebnis zu bieten, da es nach wie vor Einschränkungen wie Akkulaufzeit und Bandbreite gibt.
  - Die Benutzererfahrung ist nach wie vor ein wichtiges Anliegen. Ein mobiler Benutzer einer Reiseseite möchte vielleicht einfach nur Flugzeiten und Verspätungsinformationen überprüfen und nicht mit einem 3D-animierten Globus konfrontiert werden, der Flugrouten und Ihre Firmengeschichte zeigt.
- Moderne Technologien sind viel besser für die Erstellung responsiver Erlebnisse geeignet. Beispielsweise erlauben [Responsive Bilder/Medien-Technologien](#responsive_imagesmedia) jetzt, dass geeignete Medien an verschiedene Geräte ausgeliefert werden, ohne auf Techniken wie Server-seitiges Sniffing angewiesen zu sein.

## Einführung in Responsive Webdesign

HTML ist von Natur aus responsiv oder _fluid_. Wenn Sie eine Webseite nur mit HTML ohne CSS erstellen und das Fenster verkleinern, wird der Browser den Text automatisch neu anordnen, um in den Viewport zu passen.

Obwohl das Standardverhalten von responsivem Design wie keine Lösung klingt, können lange Textzeilen, die bildschirmfüllend auf einem breiten Monitor angezeigt werden, schwer zu lesen sein. Dieses Problem kann mit CSS gelöst werden, indem beispielsweise schmale Spalten erstellt werden, um die Zeilenlänge zu begrenzen. Dies kann jedoch neue Probleme für Benutzer schaffen, die ihr Browserfenster verkleinern oder die Seite auf einem mobilen Gerät anzeigen – dann sehen die Spalten gequetscht aus und sind schwerer zu lesen.

![Ein Layout mit zwei Spalten, die in eine mobile Bildschirmbreite gequetscht sind.](mdn-rwd-liquid.png)

Eine nicht anpassbare Webseite zu erstellen, indem eine feste Breite festgelegt wird, funktioniert ebenfalls nicht; das führt auf schmalen Geräten zu Bildlaufleisten und zu viel leerem Raum auf breiten Bildschirmen.

Responsive Webdesign, oder RWD, ist ein Designansatz, der die gesamte Bandbreite verfügbarer Geräte und Gerätegrößen adressiert und eine automatische Anpassung an den Bildschirm ermöglicht, egal ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr betrachtet wird.

Responsive Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der eine Reihe von Best Practices beschreibt, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät, das zur Betrachtung des Inhalts verwendet wird, _reagieren_ kann.

Der Begriff _Responsive Design_, der [von Ethan Marcotte im Jahr 2010 geprägt wurde](https://alistapart.com/article/responsive-web-design/), beschrieb die Verwendung von fluiden Grids, fluiden Bildern und Media Queries zur Erstellung responsiver Inhalte.

Damals lautete die Empfehlung, CSS `float` für Layouts zu verwenden und mit Media Queries die Browserbreite abzufragen, um Layouts für verschiedene Breakpoints zu erstellen. Fluide Bilder werden so eingestellt, dass sie nicht breiter als ihr Container sind; sie haben ihre `max-width`-Eigenschaft auf `100%` gesetzt. Fluide Bilder verkleinern sich, wenn ihre umgebende Spalte schmaler wird, werden aber nicht größer als ihre intrinsische Größe, wenn die Spalte wächst. Dadurch kann ein Bild verkleinert werden, um seinen Inhalt nicht zu überlaufen, aber nicht vergrößert werden und pixelig aussehen, wenn der Container breiter als das Bild wird.

Moderne CSS-Layoutmethoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in der Webplattform, die das Design responsiver Seiten erleichtern.

Der Rest dieses Artikels wird die verschiedenen Funktionen der Webplattform erklären, die Sie möglicherweise verwenden möchten, wenn Sie eine responsive Seite erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) erlauben es uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Benutzers breiter als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite passend zu den Bedürfnissen des Benutzers zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedien angezeigt wird (also kein gedrucktes Dokument ist) und ob der Viewport mindestens `80rem` breit ist. Die `.container`-Regel wird nur angewendet, wenn diese beiden Bedingungen erfüllt sind.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen, um Ihr gesamtes Layout oder Teile davon zu optimieren, um den verschiedenen Bildschirmgrößen am besten zu entsprechen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout sich ändert, werden als _Breakpoints_ bezeichnet.

Ein häufiger Ansatz bei der Verwendung von Media Queries ist es, ein einfaches Einspaltenlayout für schmale Bildschirmgeräte (zum Beispiel Mobiltelefone) zu erstellen, dann auf breitere Bildschirme zu prüfen und ein Mehrspaltenlayout zu implementieren, wenn sicher ist, dass genügend Bildschirmbreite vorhanden ist, um es zu handhaben. Das Entwerfen für "mobile first" ist als **Mobile First** Design bekannt.

Wenn Sie Breakpoints verwenden, empfiehlt es sich, Media Query Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) anstelle von absoluten Größen einzelner Geräte zu definieren.

Es gibt verschiedene Ansätze für die in einem Media Query-Block definierten Styles; sie reichen von der Verwendung von Media Queries zum {{htmlelement("link")}} von Style Sheets basierend auf Browsergrößenbereichen bis hin zum Einbeziehen benutzerdefinierter Eigenschaftsvariablen zum Speichern von Werten, die mit jedem Breakpoint assoziiert sind.

Media Queries können mit RWD helfen, sind aber keine Voraussetzung. Flexible Grids, relative Einheiten und minimale und maximale Einheitswerte können ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba bietet ein Tutorial mit dem Namen [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, das eine interaktive Einführung in Media Queries sowie eine Herausforderung zum Testen Ihres Verständnisses der Grundlagen bietet.

## Responsive Layout-Technologien

Responsive Seiten basieren auf flexiblen Grids, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts anvisieren müssen.

Durch die Verwendung eines flexiblen Grids können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Um beispielsweise sicherzustellen, dass die Zeilenlängen mit zunehmender Bildschirmgröße nicht unlesbar lang werden, können Sie {{cssxref('columns')}} verwenden; wenn ein Kasten mit je zwei Wörtern pro Zeile gequetscht wird, können Sie einen Breakpoint setzen.

Mehrere Layoutmethoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind von Haus aus responsiv. Sie gehen alle davon aus, dass Sie ein flexibles Grid erstellen möchten, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente und verteilen den Raum zwischen den Elementen entsprechend dem Platz in ihrem Container. Durch Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass die Elemente reagieren, wenn sie mehr oder weniger Platz um sich herum haben.

Im Beispiel unten nehmen die Flex-Elemente jeweils eine gleich große Menge an Platz im Flex-Container ein, unter Verwendung des Shorthands `flex: 1`, wie zuvor besprochen (siehe [Flexbox: Flexible Größenanpassung von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Hier ist, wie wir Flexbox mit einer Media Query für Responsive Design verwenden könnten.

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
  background-color: #eee;
}
.wrapper {
  max-width: 960px;
  margin: 2em auto;
}

.col1,
.col2 {
  background-color: #fff;
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

Verändern Sie die Größe Ihres Browserfensters. Das Layout wird zwischen einem Einspalten- und einem Zweispalten-Layout wechseln, wenn die Größe des obigen Beispiels die `600px` Breite überschreitet.

### CSS Grid

Im CSS-Grid-Layout ermöglicht die `fr`-Einheit die Verteilung des verfügbaren Raums über Grid-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks, die auf `1fr` gesetzt sind. Dies erstellt drei Spalten-Tracks, die jeweils einen Teil des verfügbaren Raums im Container einnehmen. Sie haben diesen Ansatz bereits betrachtet (siehe [Flexible Grids mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) als Rückblick).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Hier ist, wie wir das Grid-Layout mit einer Media Query für Responsive Design verwenden könnten.

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
  background-color: #eee;
}
.wrapper {
  max-width: 960px;
  margin: 2em auto;
}

.col1,
.col2 {
  background-color: #fff;
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

Versuchen Sie erneut, das Browserfenster zu verkleinern — Sie sollten sehen, wie sich das Beispiel-Layout an der `600px`-Breitenschwelle ändert, genauso wie im vorherigen Beispiel.

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien niemals größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medienelemente so, dass sie niemals ihre Container überlaufen.

> [!NOTE]
> Die Verwendung eines einzigen großen Bildes und dessen Verkleinerung, um auf kleinen Geräten zu passen, verschwendet Bandbreite, indem Bilder heruntergeladen werden, die größer als erforderlich sind. Es kann auch schlecht aussehen — ein Landschaftsbild zum Beispiel könnte auf einem Breitbildmonitor gut aussehen, aber es könnte schwierig sein, es auf einem mobilen Gerät zu sehen, das sich besser für ein Porträtbild eignen würde. Solche Probleme können gelöst werden, indem das {{htmlelement("picture")}}-Element und die {{htmlelement("img")}}-Attribute `srcset` und `sizes` verwendet werden. Dies sind fortgeschrittene Funktionen, die über den Rahmen dieses Kurses hinausgehen, aber Sie finden eine detaillierte Anleitung unter [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images).

Weitere nützliche Tipps:

- Stellen Sie immer sicher, dass Sie ein geeignetes Bildformat für Ihre Website-Bilder verwenden (z. B. PNG oder JPG) und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihrer Website platzieren.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) verwenden, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries im Attribut media auf {{htmlelement("source")}}-Elementen verwenden, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verschachtelt sind, um Video-/Audiodateien je nach Gerät auszuliefern (responsives Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern der Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewporteinheiten, um geringere oder größere Mengen an Bildschirmfläche widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Ebene 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß wie unsere Basisschriftgröße sein wird. Das ist eine wirklich große Überschrift! Wir wollen diese riesige Überschrift aber nur auf größeren Bildschirmen, daher geben wir der Überschrift zuerst eine kleinere Größe von `2rem` und überschreiben sie dann mit den größeren Einstellungen, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

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

Das nächste Beispiel ist eine modifizierte Version unseres früheren Responsive-Grid-Beispiels, das eine responsive Überschrift mit der beschriebenen Methode enthält. Auf dem Mobilgerät ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftengröße:

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
  background-color: #eee;
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
  background-color: #fff;
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

Wie bei den vorherigen Beispielen versuchen Sie, die Breite des Browserfensters zu ändern, und beachten Sie, wie sich nicht nur das Layout an der `600px` Breiteschwelle ändert, sondern auch die Überschriftengröße.

Wie dieses Vorgehen bei der Typografie zeigt, müssen Sie Media Queries nicht nur zur Änderung des Layouts der Seite einsetzen. Sie können verwendet werden, um jedes Element so anzupassen, dass es bei alternativen Bildschirmgrößen benutzerfreundlicher oder attraktiver wird.

### Verwendung von Viewporteinheiten für responsive Typografie

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne Breakpoints mit Media Queries setzen zu müssen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass wenn Sie Ihre Schriftgröße mit `vw` setzen, sie immer in Beziehung zur Größe des Viewports bleibt.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei dieser Vorgehensweise ist, dass der Benutzer die Fähigkeit verliert, jeglichen Text zu vergrößern, der mit der `vw`-Einheit gesetzt wurde, da dieser Text immer in Beziehung zur Viewport-Größe steht. **Daher sollten Sie niemals Text ausschließlich mit Viewporteinheiten setzen**.

Es gibt jedoch eine Lösung, die mit der Verwendung von [`calc()`](/de/docs/Web/CSS/calc) verbunden ist. Wenn Sie die `vw`-Einheit zu einem Wert hinzufügen, der mit einer festen Größe wie `em`s oder `rem`s gesetzt ist, kann der Text dennoch vergrößert werden. Im Wesentlichen fügt die `vw`-Einheit zu diesem vergrößerten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Dies bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal angeben müssen, anstatt sie für mobile Geräte festzulegen und in den Media Queries neu zu definieren. Die Schrift dann erhöht sich allmählich, wenn Sie die Größe des Viewports vergrößern.

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
  background-color: #eee;
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
  background-color: #fff;
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

Versuchen Sie, das Browserfenster zu verkleinern, wie zuvor, und achten Sie darauf, wie diesmal die Überschriftengröße sich _schrittweise_ mit der Breite ändert.

## Das Viewport-Meta-Tag

Wenn Sie den HTML-Quellcode einer responsive Seite betrachten, sehen Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>`-Bereich des Dokuments.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Breite des Geräts setzen und das Dokument auf 100% der beabsichtigten Größe skalieren sollen, was das Dokument in der von Ihnen beabsichtigten mobilen Optimierungsgröße zeigt.

Warum ist dies erforderlich? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil, als Smartphones erstmals auf den Markt kamen, die meisten Websites nicht für Mobilgeräte optimiert waren. Der mobile Browser würde also die Viewport-Breite auf 980 Pixel setzen, die Seite in dieser Breite rendern und das Ergebnis als verkleinerte Version des Desktop-Layouts anzeigen. Benutzer konnten hineinzoomen und die Website erkunden, um die Bereiche zu sehen, die sie interessierten, aber es sah schlecht aus.

Durch das Setzen von `width=device-width` überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie die Standardeinstellung des iPhones `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne diese Einstellung funktioniert Ihr responsives Design mit Breakpoints und Media Queries möglicherweise nicht wie beabsichtigt auf mobilen Browsern. Wenn Sie ein schmales Bildschirmlayout haben, das bei einer Viewport-Breite von 480px oder weniger aktiviert wird, das Gerät jedoch angibt, dass es 980px breit ist, wird dieser Benutzer Ihr schmales Bildschirmlayout nicht sehen.

**Deshalb sollten Sie das Viewport-Meta-Tag _immer_ in den Head-Bereich Ihrer Dokumente aufnehmen.**

Es gibt eine Reihe von anderen Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags unterbringen können — sehen Sie [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element) für weitere Details.

## Zusammenfassung

Responsive Design bezieht sich auf ein Webseiten- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es betrachtet wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist im Wesentlichen, wie wir Websites standardmäßig erstellen. Betrachten Sie die Websites, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Seite zu stoßen, die die Desktop-Version verkleinert darstellt oder bei der Sie seitwärts scrollen müssen, um Dinge zu finden. Das liegt daran, dass das Web zu diesem Ansatz übergegangen ist, responsiv zu gestalten.

Es ist auch viel einfacher geworden, responsive Designs mit Hilfe der in diesem Artikel behandelten Layoutmethoden zu erreichen. Wenn Sie heute neu im Bereich der Webentwicklung sind, haben Sie viel mehr Werkzeuge zur Verfügung als in den frühen Tagen des Responsive Designs. Daher lohnt es sich, das Alter der Materialien, die Sie verwenden, zu überprüfen. Während historische Artikel immer noch nützlich sind, macht die moderne Verwendung von CSS und HTML es viel einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Website betrachtet.

Als Nächstes werden wir uns sorgfältiger mit Media Queries beschäftigen und zeigen, wie man damit einige häufig auftretende Probleme lösen kann.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivitäten auf Touchbildschirmen oder Trackpads zu interpretieren und ermöglichen so qualitativ hochwertige Unterstützung für komplexe touchbasierte Benutzeroberflächen.
  - Verwenden Sie die [Pointer](/de/docs/Web/CSS/@media/pointer) oder [Any-Pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um auf touchfähigen Geräten unterschiedliche CSS zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Der Karrierepfad des Frontend-Entwicklers](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt Ihnen alles, was Sie wissen müssen, um ein kompetenter Front-End-Webentwickler zu sein, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, sachkundigen Lehrern und einer unterstützenden Community. Gehen Sie von null bis zu Ihrem ersten Front-End-Job! Viele der Kurskomponenten sind als eigenständige, kostenfreie Versionen verfügbar. Dazu gehört ein Modul über Responsive Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
