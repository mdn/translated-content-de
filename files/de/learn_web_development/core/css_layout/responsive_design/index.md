---
title: Responsive Design
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Webdesign-Ansatz, der darauf abzielt, dass Webseiten auf allen Bildschirmgrößen und Auflösungen gut dargestellt werden und dabei eine gute Benutzerfreundlichkeit gewährleistet ist. Es ist die Art und Weise, wie man für ein Web mit mehreren Geräten designed. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die genutzt werden können, um dies zu meistern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Styling</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Responsive Design ist — das Design von Weblayouts so, dass sie flexibel sind und gut auf verschiedenen Bildschirmgrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und Responsive Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für Responsive Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten angemessen anzuzeigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des Responsive Designs: Mobile Webdesign

Bevor Responsive Webdesign der Standardansatz wurde, um Webseiten auf verschiedenen Gerätetypen funktionsfähig zu machen, sprachen Webentwickler über Mobile Webdesign, Mobile Web Development oder manchmal Mobile-Friendly Design. Diese Begriffe sind im Wesentlichen dasselbe wie Responsive Webdesign — die Ziele sind, sicherzustellen, dass Webseiten auf Geräten mit unterschiedlichen physischen Eigenschaften (Bildschirmgröße, Auflösung) in Bezug auf Layout, Inhalt (Text und Medien) und Leistung gut funktionieren.

Der Unterschied liegt hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprachen wir über Desktop oder Mobile, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobilgeräte, Tablets, Uhren usw. Anstatt für einige wenige Bildschirmgrößen zu entwickeln, müssen wir jetzt defensiv designen, um häufige Bildschirmgrößen und Auflösungen sowie Unbekannte zu berücksichtigen.
- Mobile Geräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten kein CSS oder sogar HTML, weshalb es üblich war, serverseitiges Browsersniffing durchzuführen, um den Gerätetyp zu ermitteln, bevor eine für das Gerät geeignete Seite geladen wurde. Mobile Geräte erhielten oft sehr einfache, grundlegende Erfahrungen, weil sie nicht mehr verarbeiten konnten. Heutzutage können mobile Geräte die gleichen Technologien wie Desktop-Computer verarbeiten, daher sind solche Techniken weniger häufig.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Nutzern ein geeignetes Erlebnis zu bieten, da es noch immer Einschränkungen wie Akkulaufzeit und Bandbreite gibt.
  - Die Benutzererfahrung ist ebenfalls ein Anliegen. Ein mobiler Nutzer einer Reiseseite möchte vielleicht nur Flugzeiten und Verspätungsinformationen überprüfen und nicht mit einem animierten 3D-Globus konfrontiert werden, der Flugrouten und die Firmengeschichte zeigt. Dies kann jedoch mit Responsive Design-Techniken gehandhabt werden.
- Moderne Technologien sind viel besser geeignet, um responsive Erlebnisse zu schaffen. Zum Beispiel ermöglichen [responsive Bilder/Medientechnologien](#responsive_imagesmedia) jetzt die Bereitstellung geeigneter Medien auf verschiedenen Geräten, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in Responsive Webdesign

HTML ist von Natur aus responsive oder _fluid_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster vergrößern oder verkleinern, wird der Browser den Text automatisch umfließen, um sich dem Ansichtsfenster anzupassen.

Auch wenn das standardmäßige responsive Verhalten so klingt, als wäre keine Lösung erforderlich, sind lange Textzeilen, die auf einem großen Bildschirm voll dargestellt werden, schwer zu lesen. Wenn die Zeilenlänge des Breitbildschirms mit CSS verringert wird, z.B. durch Erstellen von Spalten oder Hinzufügen signifikanter Abstände, kann die Webseite für den Nutzer, der das Browserfenster verkleinert oder die Webseite auf einem mobilen Gerät öffnet, gequetscht wirken.

![Ein Layout mit zwei Spalten, die auf eine mobile Ansichtskompatibilität verringert sind.](mdn-rwd-liquid.png)

Eine nicht skalierbare Webseite zu erstellen, indem man eine feste Breite einstellt, funktioniert ebenfalls nicht; das führt zu Scrollleisten auf schmalen Geräten und zu viel Leerraum auf großen Bildschirmen.

Responsive Webdesign, oder RWD, ist eine Designmethode, die das Spektrum der Geräte und Gerätegrößen adressiert und die automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr angezeigt wird.

Responsive Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das auf jedes verwendete Gerät _reagieren_ kann.

Der Begriff _Responsive Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschreibt die Verwendung von flüssigen Rastern, flüssigen Bildern und Media Queries, um responsive Inhalte zu erstellen.

Zu dieser Zeit war die Empfehlung, CSS `float` für das Layout zu verwenden und Media Queries zu nutzen, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Flüssige Bilder sind so eingestellt, dass sie nicht breiter als ihr Container werden; sie haben ihre `max-width`-Eigenschaft auf `100%` gesetzt. Flüssige Bilder verkleinern sich, wenn ihre enthaltende Spalte verengt wird, aber sie werden nicht größer als ihre intrinsische Größe, wenn die Spalte wächst. Dies ermöglicht es einem Bild, sich an den Inhalt anzupassen, anstatt ihn zu überlaufen, aber nicht größer zu werden und verpixelt zu erscheinen, wenn der Container breiter wird als das Bild.

Moderne CSS-Layoutmethoden sind von Haus aus responsive, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen im Web-Framework, um das Design von responsiven Websites einfacher zu machen.

Der Rest dieses Artikels wird Sie auf die verschiedenen Web-Framework-Funktionen hinweisen, die Sie für die Erstellung einer responsiven Website verwenden möchten.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (z.B. ob der Bildschirm des Benutzers eine bestimmte Breite oder Auflösung überschreitet) und CSS selektiv anzuwenden, um die Seite entsprechend den Benutzerbedürfnissen zu stylen.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedium angezeigt wird (daher kein gedrucktes Dokument) und ob das Ansichtsfenster mindestens `80rem` breit ist. Das CSS für den `.container`-Selektor wird nur angewendet, wenn diese beiden Bedingungen wahr sind.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können innerhalb eines Stylesheets mehrere Media Queries hinzufügen und Ihr gesamtes Layout oder Teile davon anpassen, um sie am besten an die verschiedenen Bildschirmgrößen anzupassen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout geändert wird, werden als _Breakpoints_ bezeichnet.

Ein gängiger Ansatz bei der Verwendung von Media Queries ist es, ein einfaches einkolumniges Layout für Geräte mit schmalem Bildschirm (z.B. Mobiltelefone) zu erstellen, dann für breitere Bildschirme zu prüfen und ein Mehrspaltenlayout zu implementieren, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben, um es handzuhaben. Das Design für Mobile-First wird als **Mobile-First**-Design bezeichnet.

Wenn Sie Breakpoints verwenden, empfehlen Best Practices, die Definition von Media Query-Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) anstelle von absoluten Größen eines einzelnen Geräts.

Es gibt verschiedene Ansätze zu den innerhalb eines Media Query-Blocks definierten Stilen; von der Verwendung von Media Queries zum {{htmlelement("link")}} von Stylesheets basierend auf Browsergrößenbereichen bis hin zum alleinigen Einbeziehen von benutzerdefinierten Eigenschaften-Variablen, um mit jedem Breakpoint verbundene Werte zu speichern.

Media Queries können bei RWD helfen, sind aber keine Voraussetzung. Flexible Raster, relative Einheiten und minimale und maximale Einheitswerte können auch ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba hat ein Tutorial namens [Aside: Media Queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, das eine interaktive Einführung in Media Queries bietet sowie eine Herausforderung, um zu testen, dass Sie die Grundlagen verstanden haben.

## Responsive Layout-Technologien

Responsive Seiten basieren auf flexiblen Rastern, was bedeutet, dass Sie nicht für jede mögliche Gerätegröße mit pixelgenauen Layouts gezielt entwickeln müssen.

Durch die Verwendung eines flexiblen Rasters können Sie ein Merkmal ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt beginnen soll, schlecht auszusehen. Zum Beispiel, um sicherzustellen, dass Zeilenlängen nicht unlesbar lang werden, wenn die Bildschirmgröße zunimmt, können Sie {{cssxref('columns')}} verwenden; wenn ein Block gequetscht wird, können Sie einen Breakpoint setzen, um zwei Wörter pro Zeile in der Breite zu haben.

Mehrere Layoutmethoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind von Haus aus responsive. Sie gehen alle davon aus, dass Sie versuchen, ein flexibles Raster zu erstellen und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente und verteilen den Raum zwischen den Elementen entsprechend dem Platz in ihrem Container. Indem Sie die Werte für `flex-grow` und `flex-shrink` ändern, können Sie angeben, wie Sie möchten, dass die Elemente sich verhalten, wenn sie auf mehr oder weniger Platz um sie herum treffen.

Im folgenden Beispiel nehmen die Flex-Elemente jeweils eine gleiche Menge an Platz im Flex-Container ein, unter Verwendung der Kurzform von `flex: 1`, wie zuvor besprochen (siehe [Flexbox: Flexible Größeneinstellung von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

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
@media screen and (min-width: 600px) {
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

Ändern Sie die Größe Ihres Bildschirms. Das Layout wird sich ändern, wenn die Größe des obigen Beispiels die 600px-Breiteschwelle überschreitet.

### CSS Grid

Im CSS-Grid-Layout ermöglicht die Einheit `fr` die Verteilung des verfügbaren Raums auf Gitterscheinen. Das nächste Beispiel erstellt einen Gitter-Container mit drei Scheinen, die auf jeweils `1fr` eingestellt sind. Dies wird drei Gitterspalten erstellen, die jeweils einen Teil des verfügbaren Raums im Container einnehmen. Sie haben diesen Ansatz bereits betrachtet (siehe [Flexible Raster mit der `fr`-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) für eine Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Hier ist, wie wir Gitterlayout mit einer Media Query für Responsive Design verwenden könnten.

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
@media screen and (min-width: 600px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 5%;
  }
}
```

{{EmbedLiveSample("grid-based-rwd", "", "550px")}}

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien nie größer als ihre responsive Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medien, um sicherzustellen, dass sie nie ihre Container überlaufen.

> [!NOTE]
> Das Verwenden eines einzigen großen Bildes und das Herunterskalieren auf kleinere Geräte verschwendet Bandbreite, da größere als benötigte Bilder heruntergeladen werden. Es kann auch schlecht aussehen — ein Landschaftsbild könnte zum Beispiel auf einem Breitbildmonitor gut aussehen, aber schwer zu sehen sein auf einem mobilen Gerät, das besser für ein Hochformatbild geeignet wäre. Solche Probleme können durch die Verwendung des {{htmlelement("picture")}}-Elements und der {{htmlelement("img")}}-Attribute `srcset` und `sizes` gelöst werden. Diese sind fortgeschrittene Funktionen, die über den Rahmen dieses Kurses hinausgehen, aber Sie können einen detaillierten Leitfaden unter [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) finden.

Weitere nützliche Tipps:

- Stellen Sie immer sicher, dass Sie ein geeignetes Bildformat für Ihre Website-Bilder verwenden (z.B. PNG oder JPG), und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihrer Website bereitstellen.
- Sie können CSS-Features wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) nutzen, um visuelle Effekte ohne Verwendung von Bildern zu implementieren.
- Sie können Media Queries im `media`-Attribut auf {{htmlelement("source")}}-Elementen verwenden, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen geschachtelt sind, um Video-/Audiodateien je nach Gerät (responsive Video/Audio) passend bereitzustellen.

## Responsive Typografie

Responsive Typografie beschreibt die Änderung von Schriftgrößen mit Hilfe von Media Queries oder der Verwendung von Ansichtsfenster-Einheiten, um kleinere oder größere Mengen an Bildschirmfläche widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Ebene 1 auf `4rem` festlegen, was bedeutet, dass sie viermal so groß wie unsere Basis-Schriftgröße ist. Das ist eine wirklich große Überschrift! Wir möchten diese Riesenüberschrift nur auf größeren Bildschirmgrößen haben, daher erstellen wir zunächst eine kleinere Überschrift und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmgröße von mindestens `1200px` hat.

```css
html {
  font-size: 1em;
}

h1 {
  font-size: 2rem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4rem;
  }
}
```

Wir haben unser Responsive-Grid-Beispiel oben bearbeitet, um auch responsive Schriftgestaltung mit der beschriebenen Methode einzuschließen. Sie können sehen, wie die Überschrift ihre Größe wechselt, wenn das Layout in die zweispaltige Version übergeht.

Auf mobilen Geräten ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftgröße:

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

@media screen and (min-width: 600px) {
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

Wie dieser Ansatz zur Typografie zeigt, müssen Sie Media Queries nicht darauf beschränken, nur das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element anzupassen, um es bei alternativen Bildschirmgrößen benutzerfreundlicher oder attraktiver zu machen.

### Verwendung von Ansichtsfenster-Einheiten für responsive Typografie

Ansichtsfenster-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne die Notwendigkeit, Breakpoints mit Media Queries festzulegen. `1vw` ist gleich einem Prozent der Ansichtsfenster-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` festlegen, diese immer in Bezug auf die Größe des Ansichtsfensters stehen wird.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem mit dem obigen Ansatz ist, dass der Benutzer die Fähigkeit verliert, jeglichen Text zu zoomen, der mit der `vw`-Einheit gesetzt ist, da dieser Text immer in Bezug auf die Größe des Ansichtsfensters steht. **Daher sollten Sie niemals Text allein mit Ansichtsfenster-Einheiten setzen**.

Es gibt eine Lösung, und sie beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die `vw`-Einheit zu einem Wert hinzufügen, der mit einer festen Größe wie `em`s oder `rem`s gesetzt ist, wird der Text dennoch zoombar. Im Wesentlichen fügt die `vw`-Einheit diesem vergrößerten Wert etwas hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Dies bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal festlegen müssen, anstatt sie für mobile Geräte einzustellen und in den Media Queries neu zu definieren. Die Schrift wird dann allmählich größer, wenn Sie die Größe des Ansichtsfensters vergrößern.

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

@media screen and (min-width: 600px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 5%;
  }
}
```

{{EmbedLiveSample("type-vw", "", "550px")}}

## Der Viewport-Meta-Tag

Wenn Sie sich den HTML-Code einer responsiven Seite ansehen, sehen Sie normalerweise den folgenden {{htmlelement("meta")}}-Tag im `<head>` des Dokuments.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element)-Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Ansichtsfensters auf die Gerätebreite setzen und das Dokument auf 100% seiner beabsichtigten Größe skalieren sollen, was das Dokument in der von Ihnen beabsichtigten mobilen Optimierungsgröße anzeigt.

Warum ist das nötig? Weil mobile Browser dazu neigen, über ihre Ansichtsfensterbreite zu lügen.

Dieser Meta-Tag existiert, weil, als Smartphones zuerst auf den Markt gekommen sind, die meisten Seiten nicht für mobile Geräte optimiert waren. Der mobile Browser würde folglich die Ansichtsfensterbreite auf 980 Pixel setzen, die Seite in dieser Breite rendern und das Ergebnis als verkleinerte Version des Desktop-Layouts anzeigen. Benutzer konnten in die Seite hineinzoomen und sich durch die Website bewegen, um die Informationen zu sehen, die sie interessierten, aber es sah schlecht aus.

Indem Sie `width=device-width` setzen, überschreiben Sie die Standardeinstellung eines Mobilgeräts, wie Apples standardmäßiges `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne diese Einstellung funktionieren Ihr Responsive Design mit Breakpoints und Media Queries möglicherweise nicht wie beabsichtigt auf mobilen Browsern. Wenn Sie ein schmales Bildschirm-Layout haben, das bei einer Ansichtsfenster-Breite von 480px oder weniger ansetzt, aber das Gerät angibt, dass es 980px breit ist, wird der Benutzer Ihr schmales Bildschirm-Layout nicht sehen.

**Daher sollten Sie _immer_ das Viewport-Meta-Tag im Kopfbereich Ihrer Dokumente einfügen.**

## Zusammenfassung

Responsive Design bezieht sich auf ein Site- oder Anwendungsdesign, das sich an die Umgebung anpasst, in der es betrachtet wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist inzwischen im Wesentlichen der Standard, wie wir Websites erstellen. Überlegen Sie, welche Seiten Sie auf Ihrem Handy besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Seite zu stoßen, die die Desktop-Version im verkleinerten Maßstab ist oder bei der Sie seitwärts scrollen müssen, um alles zu finden. Das liegt daran, dass das Web zu diesem Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs mithilfe der Layout-Methoden zu erzielen, die Sie in diesen Lektionen gelernt haben. Wenn Sie heute neu in der Webentwicklung sind, stehen Ihnen viel mehr Werkzeuge zur Verfügung als in den frühen Anfängen des Responsive Designs. Es lohnt sich daher, das Alter der Materialien zu überprüfen, die Sie verwenden. Während die historischen Artikel immer noch nützlich sind, macht die moderne Nutzung von CSS und HTML es viel einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Seite betrachtet.

Als Nächstes werden wir Media Queries im Detail untersuchen und zeigen, wie sie verwendet werden können, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch-Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivitäten auf Touchscreens oder Trackpads zu interpretieren und so eine hochwertige Unterstützung für komplexe, touchbasierte Benutzeroberflächen zu ermöglichen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um auf Touch-fähigen Geräten unterschiedliche CSS zu laden.
- [CSS-Tricks-Leitfaden für Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [The Frontend Developer Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Frontend-Webentwickler zu werden, mit interaktiven und unterhaltsamen Lektionen und Herausforderungen, sachkundigen Lehrern und einer unterstützenden Gemeinschaft. Gehen Sie von Null bis zu Ihrem ersten Frontend-Job! Viele der Kurskomponenten sind als eigenständige kostenlose Versionen erhältlich. Dies beinhaltet ein Modul über Responsive Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
