---
title: Responsive Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Webdesign-Ansatz, um Webseiten auf allen Bildschirmgrößen und Auflösungen gut darzustellen und gleichzeitig eine gute Benutzerfreundlichkeit zu gewährleisten. Es ist der Weg, für ein Multi-Device-Web zu gestalten. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die zur Beherrschung verwendet werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen für Styling</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Font-Styling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist – Gestaltung von Weblayouts, damit sie flexibel sind und auf verschiedenen Geräteschirmgrößen, Auflösungen usw. gut funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Werkzeugen wie Grid und Flexbox und responsive Design.</li>
          <li>Die Konzepte hinter der Nutzung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten angemessen anzuzeigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobile Webdesign

Bevor responsives Webdesign der Standardansatz für die Funktion von Websites auf verschiedenen Gerätetypen wurde, sprachen Webentwickler über Mobile Webdesign, Mobile Webentwicklung oder manchmal auch mobilfreundliches Design. Diese sind im Grunde dasselbe wie responsives Webdesign – die Ziele sind, sicherzustellen, dass Websites auf Geräten mit unterschiedlichen physischen Eigenschaften (Bildschirmgröße, Auflösung) in Bezug auf Layout, Inhalt (Text und Medien) und Leistung gut funktionieren.

Der Unterschied liegt hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Schaffung von Lösungen:

- Früher sprach man von Desktop oder Mobilgeräten, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobilgeräte, Tablets, Uhren usw. Anstatt nur wenige verschiedene Bildschirmgrößen zu unterstützen, müssen wir nun Seiten defensiv gestalten, um sowohl gängige Bildschirmgrößen und Auflösungen als auch Unbekannte zu berücksichtigen.
- Mobile Geräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten weder CSS noch HTML, und daher war es üblich, serverseitiges Browser-Sniffing durchzuführen, um den Gerätetyp/Browsertyp zu bestimmen, bevor dann eine Site bereitgestellt wurde, die das Gerät bewältigen konnte. Mobile Geräte erhielten oft sehr einfache, grundlegende Erfahrungen, weil sie nicht mehr verarbeiten konnten. Heute können mobile Geräte dieselben Technologien wie Desktop-Computer handhaben, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Benutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt, die berücksichtigt werden müssen.
  - Die Benutzererfahrung ist nach wie vor ein Anliegen. Ein mobiler Benutzer einer Reise-Website möchte möglicherweise nur Flugzeiten und Verspätungsinformationen prüfen und nicht mit einem 3D-animierten Globus konfrontiert werden, der Flugrouten und die Firmengeschichte zeigt.
- Moderne Technologien sind viel besser geeignet, um responsive Erlebnisse zu schaffen. Beispielsweise ermöglichen [responsive Bilder-/Medientechnologien](#responsive_imagesmedia) nun das Bereitstellen geeigneter Medien an verschiedene Geräte, ohne dass auf Techniken wie serverseitiges Sniffing zurückgegriffen werden muss.

## Einführung in das responsive Webdesign

HTML ist grundsätzlich responsive oder _flüssig_. Wenn Sie eine Webseite, die nur HTML enthält, ohne CSS erstellen und das Fenster anpassen, wird der Text vom Browser automatisch umgebrochen, um in das Viewport zu passen.

Obwohl das standardmäßige responsive Verhalten wie eine Lösung ohne Handlungsbedarf klingen mag, können lange Textzeilen, die auf einem Weitbildmonitor voll angezeigt werden, schwer zu lesen sein. Dieses Problem kann mit CSS gelöst werden, beispielsweise durch Erstellung schmaler Spalten, um die Zeilenlänge zu begrenzen. Dies kann jedoch neue Probleme für Benutzer schaffen, die ihr Browserfenster verengen oder die Seite auf einem mobilen Gerät betrachten – die Spalten sehen gequetscht aus und werden schwerer zu lesen.

![Ein Layout mit zwei Spalten, die in einem mobilen Viewport zusammengequetscht sind.](mdn-rwd-liquid.png)

Eine nicht-responsive Webseite durch Festlegen einer festen Breite funktioniert auch nicht; dies führt auf schmalen Geräten zu Scrollbalken und auf breiten Bildschirmen zu viel leerem Raum.

Responsive Webdesign oder RWD ist ein Gestaltungsansatz, der die gesamte Bandbreite der verfügbaren Geräte und Gerätegrößen anspricht und eine automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr angezeigt wird.

Responsive Webdesign ist keine separate Technologie – es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe bewährter Praktiken zu beschreiben, die verwendet werden, um ein Layout zu schaffen, das auf jedes verwendete Gerät zur Anzeige des Inhalts _reagieren_ kann.

Der Begriff _responsive Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschrieb das Verwenden von flüssigen Gittern, flüssigen Bildern und Media Queries, um responsive Inhalte zu erstellen.

Damals wurde empfohlen, für Layouts CSS `float` und Media Queries zu verwenden, um die Browserbreite abzufragen und Layouts für unterschiedliche Breakpoints zu erstellen. Flüssige Bilder sind so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width`-Eigenschaft auf `100%` gesetzt. Flüssige Bilder verkleinern sich, wenn sich ihre beinhaltende Spalte verengt, werden jedoch nicht größer als ihre ursprüngliche Größe, wenn die Spalte wächst. Dadurch kann ein Bild verkleinert werden, um in seinen Inhalt zu passen, anstatt ihn zu überlaufen, wächst jedoch nicht größer und wird pixelig, wenn der Container breiter wird als das Bild.

Moderne CSS-Layoutmethoden sind von Natur aus kompatibel mit Responsivität. Seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in die Webplattform integriert, um das Entwerfen von responsiven Websites zu erleichtern.

Der Rest dieses Artikels wird die verschiedenen Webplattform-Funktionen erklären, die Sie verwenden möchten, wenn Sie eine responsive Website erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Benutzers größer als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite entsprechend den Bedürfnissen des Benutzers zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedien (also kein gedrucktes Dokument) angezeigt wird und das Viewport mindestens `80rem` breit ist. Die `.container`-Regel wird nur angewendet, wenn beide Bedingungen zutreffen.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen und Ihr gesamtes Layout oder Teile davon anpassen, um verschiedene Bildschirmgrößen optimal zu nutzen. Die Punkte, an denen eine Media Query eingeführt wird und sich das Layout ändert, sind als _Breakpoints_ bekannt.

Ein häufiger Ansatz bei der Verwendung von Media Queries ist es, ein einfaches einspaltiges Layout für Geräte mit schmalem Bildschirm (zum Beispiel Mobiltelefone) zu erstellen, dann auf breitere Bildschirme zu prüfen und ein mehrspaltiges Layout zu implementieren, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben, um es zu bewältigen. Das Designen für mobile Geräte wird als **Mobile First** bezeichnet.

Wenn Sie Breakpoints verwenden, wird empfohlen, Media Query Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) statt mit absoluten Größen eines einzelnen Geräts zu definieren.

Es gibt unterschiedliche Ansätze zu den in einem Media Query-Block definierten Stilen; von der Verwendung von Media Queries zum {{htmlelement("link")}} von Stylesheets basierend auf den Größenbereichen des Browsers bis zum Einschließen von benutzerdefinierten Eigenschaftenvariablen zur Speicherung von Werten, die mit jedem Breakpoint verbunden sind.

Media Queries können bei RWD helfen, sind aber keine Voraussetzung. Flexible Gitter, relative Einheiten und Min- und Max-Werte können ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba bietet ein Tutorial mit dem Titel [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, das eine interaktive Einführung zu Media Queries bietet, einschließlich einer Herausforderung, um zu testen, ob Sie die Grundlagen verstanden haben.

## Responsive Layout-Technologien

Responsive Websites basieren auf flexiblen Gittern, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts anvisieren müssen.

Durch die Verwendung eines flexiblen Gitters können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel, um sicherzustellen, dass die Zeilenlängen nicht unleserlich lang werden, während die Bildschirmgröße zunimmt, können Sie {{cssxref('columns')}} verwenden; wenn eine Box bei Verengung gequetscht wird und nur noch zwei Wörter pro Zeile bleiben, können Sie einen Breakpoint setzen.

Verschiedene Layoutmethoden – einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) – sind standardmäßig responsive. Sie gehen davon aus, dass Sie versuchen, ein flexibles Raster zu erstellen, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente und verteilen den Platz zwischen den Elementen entsprechend dem Platz in ihrem Container. Durch Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass sich die Elemente verhalten, wenn sie mehr oder weniger Platz um sich herum finden.

Im folgenden Beispiel nehmen die Flex-Elemente jeweils den gleichen Raum im Flex-Container ein, indem die Abkürzung `flex: 1` verwendet wird, wie zuvor besprochen (siehe [Flexbox: Flexible Größe von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

So könnten wir Flexbox mit einer Media Query für responsives Design verwenden.

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

Ändern Sie die Größe Ihres Browserfensters. Das Layout wechselt zwischen einem einspaltigen und einem zweispaltigen Layout, wenn die Größe des obigen Beispiels die `600px`-Breitenschwelle überschreitet.

### CSS Grid

Im CSS-Grid-Layout ermöglicht die Einheit `fr` die Verteilung des verfügbaren Raums über Grid-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks, die auf `1fr` gesetzt sind. Dies wird drei Spaltentracks erstellen, wobei jeder einen Teil des verfügbaren Raums im Container einnimmt. Sie haben diesen Ansatz bereits diskutiert (siehe [Flexible Grids mit der fr Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) zur Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

So könnten wir Grid-Layout mit einer Media Query für responsives Design verwenden.

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

Versuchen Sie erneut, die Größe Ihres Browserfensters zu ändern – Sie sollten das Beispiel-Layout bei der `600px`-Breitenschwelle in derselben Weise wie im vorherigen Beispiel wechseln sehen.

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien nie größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medienelemente, um sicherzustellen, dass sie nie ihre Container überlaufen.

> [!NOTE]
> Die Verwendung eines einzigen großen Bildes und dessen Herunterskalieren für kleine Geräte verschwendet Bandbreite, indem Bilder heruntergeladen werden, die größer als erforderlich sind. Es kann auch schlecht aussehen – ein Breitbildfoto könnte beispielsweise auf einem Widescreen-Monitor gut aussehen, aber es auf einem Mobilgerät schwer zu erkennen sein, auf dem ein Porträtbild besser geeignet wäre. Solche Probleme können mit dem {{htmlelement("picture")}}-Element und den {{htmlelement("img")}}-Attributen `srcset` und `sizes` gelöst werden. Diese sind fortgeschrittene Features, die über den Umfang dieses Kurses hinausgehen, aber Sie finden eine detaillierte Anleitung bei [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images).

Weitere nützliche Tipps:

- Achten Sie darauf, ein geeignetes Bildformat für Ihre Website-Bilder zu verwenden (wie PNG oder JPG), und optimieren Sie die Dateigröße in einem Grafikeditor, bevor Sie sie auf Ihre Website stellen.
- Sie können CSS-Features wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/Reference/Properties/box-shadow) verwenden, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries im Attribut der Medien auf {{htmlelement("source")}}-Elementen verwenden, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen eingebettet sind, um Video-/Audiodateien je nach Gerät (responsives Video/Audio) bereitzustellen.

## Responsive Typografie

Responsive Typografie beschreibt die Änderung der Schriftgrößen innerhalb von Media Queries oder unter Verwendung von Viewport-Einheiten, um kleinere oder größere Bildschirmbereiche widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir, dass unsere Überschrift der Stufe 1 `4rem` groß ist, was bedeutet, dass sie viermal so groß wie unsere Basis-Schriftgröße ist. Das ist eine wirklich große Überschrift! Wir möchten diese riesige Überschrift nur auf größeren Bildschirmen, daher geben wir der Überschrift zunächst eine kleinere Größe von `2rem` und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

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

Das nächste Beispiel ist eine modifizierte Version unseres früheren responsiven Grid-Beispiels, das eine responsive Überschrift mit der beschriebenen Methode enthält. Auf mobilen Geräten ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftengröße:

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
    1.2em "Helvetica",
    "Arial",
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

Wie bei den vorherigen Beispielen, versuchen Sie, die Breite des Browserfensters zu ändern und beachten Sie, wie nicht nur das Layout sich bei der `600px`-Breitenschwelle ändert, sondern auch die Überschriftengröße.

Da dieser Ansatz zur Typografie zeigt, müssen Sie Media Queries nicht darauf beschränken, nur das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element zu optimieren, um es benutzerfreundlicher oder attraktiver bei alternativen Bildschirmgrößen zu machen.

### Verwendung von Viewport-Einheiten für responsive Typografie

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne dass Breakpoints mit Media Queries gesetzt werden müssen. `1vw` ist gleich einem Prozent der Viewport-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` einstellen, sie sich immer auf die Größe des Viewports bezieht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der obigen Vorgehensweise ist, dass der Benutzer die Fähigkeit verliert, jede mit der `vw`-Einheit festgelegte Schrift zu vergrößern, da dieser Text immer mit der Größe des Viewports zusammenhängt. **Daher sollten Sie niemals Text nur anhand von Viewport-Einheiten festlegen**.

Es gibt eine Lösung, und sie beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/Reference/Values/calc). Wenn Sie die `vw`-Einheit zu einem Wert hinzufügen, der mit einer festen Größe wie `em`s oder `rem`s festgelegt wurde, kann der Text immer noch vergrößert werden. Im Wesentlichen fügt die `vw`-Einheit auf diesen vergrößerten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal angeben müssen, anstatt sie für mobile Geräte einzustellen und sie in den Media Queries neu zu definieren. Die Schrift vergrößert sich dann allmählich, wenn Sie die Größe des Viewports erhöhen.

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

Versuchen Sie, das Browserfenster zu skalieren, wie zuvor, und beachten Sie, wie sich diesmal die Überschriftengröße _allmählich_ ändert, während sich die Breite ändert.

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, werden Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Gerätebreite setzen und das Dokument auf 100 % seiner beabsichtigten Größe skalieren sollen, was das Dokument in der von Ihnen beabsichtigten mobil optimierten Größe anzeigt.

Warum ist das notwendig? Weil mobile Browser dazu tendieren, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil, als Smartphones erstmals erschienen, die meisten Websites nicht mobiloptimiert waren. Der mobile Browser würde daher die Viewport-Breite auf 980 Pixel setzen, die Seite in dieser Breite rendern und das Ergebnis als herausgezoomte Version des Desktop-Layouts anzeigen. Die Benutzer konnten in die Website hineinzoomen und sich die Teile anschauen, die sie interessierten, aber es sah schlecht aus.

Indem Sie `width=device-width` setzen, überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie die Standardeinstellung des iPhones `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne dies kann Ihr responsives Design mit Breakpoints und Media Queries auf mobilen Browsern nicht wie beabsichtigt funktionieren. Wenn Sie ein schmaleres Layout bei einer Viewport-Breite von 480px oder weniger haben, das Gerät jedoch sagt, es sei 980px breit, wird dieser Benutzer Ihr schmaleres Layout nicht sehen.

**Sie sollten _immer_ das Viewport-Meta-Tag im Kopf Ihrer Dokumente einfügen.**

Es gibt eine Reihe anderer Optionen, die Sie innerhalb des `content`-Attributs des Viewport-Meta-Tags einfügen können – siehe die Referenz [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) für weitere Details.

## Zusammenfassung

Responsive Design bezieht sich auf eine Webseiten- oder App-Gestaltung, die auf die Umgebung reagiert, in der sie angezeigt wird. Es umfasst eine Reihe von CSS- und HTML-Features und -Techniken und ist im Wesentlichen die Art und Weise, wie wir Websites standardmäßig erstellen. Betrachten Sie die Websites, die Sie auf Ihrem Telefon besuchen – es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Website zu stoßen, die die Desktop-Version herunterskaliert ist oder bei der Sie seitwärts scrollen müssen, um Dinge zu finden. Das liegt daran, dass das Web zu diesem Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs mit den in diesem Artikel behandelten Layout-Methoden zu erreichen. Wenn Sie heute neu in der Webentwicklung sind, haben Sie viel mehr Werkzeuge zur Verfügung als zu den frühen Tagen des responsiven Designs. Es lohnt sich daher, das Alter jeglicher Materialien, die Sie verwenden, zu überprüfen. Während die historischen Artikel immer noch nützlich sind, erleichtert der moderne Einsatz von CSS und HTML die Erstellung eleganter und nützlicher Designs, unabhängig davon, welches Gerät Ihr Besucher verwendet, um die Seite zu betrachten.

Als nächstes werden wir Media Queries im Detail untersuchen und zeigen, wie wir sie verwenden können, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch-Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivität auf Touchscreens oder Trackpads zu interpretieren, was eine qualitativ hochwertige Unterstützung für komplexe touchbasierte Benutzeroberflächen ermöglicht.
  - Verwenden Sie die [Pointer](/de/docs/Web/CSS/Reference/At-rules/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/Reference/At-rules/@media/any-pointer) Media Queries, um unterschiedliche CSS auf touchfähigen Geräten zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Der Karrierepfad für Frontend-Entwickler](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Frontend-Entwickler zu werden, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, kenntnisreichen Lehrern und einer unterstützenden Community. Gehen Sie von null bis zu Ihrem ersten Frontend-Job! Viele der Kurskomponenten sind als eigenständige, kostenlose Versionen verfügbar. Dies schließt ein Modul über responsives Design ein.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
