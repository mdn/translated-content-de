---
title: Responsives Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsives Webdesign_ (RWD) ist ein Ansatz im Webdesign, der darauf abzielt, dass Webseiten auf allen Bildschirmgrößen und Auflösungen gut angezeigt werden und dabei eine gute Benutzerfreundlichkeit sicherstellen. Es ist die Art, wie man für ein multi-fähiges Web designen sollte. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die verwendet werden können, um es zu meistern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstilierung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist — Weblayouts zu entwerfen, die flexibel sind und in verschiedenen Gerätegröße, Auflösungen etc. gut funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> notwendig ist, damit Webdokumente auf mobilen Geräten angemessen angezeigt werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobiles Webdesign

Bevor responsives Webdesign der Standardansatz wurde, um Websites für verschiedene Gerätetypen funktional zu machen, sprachen Webentwickler über mobiles Webdesign, mobile Webentwicklung oder manchmal mobilfreundliches Design. Diese sind im Wesentlichen dasselbe wie responsives Webdesign — die Ziele sind, sicherzustellen, dass Websites über Geräte hinweg mit unterschiedlichen physischen Attributen (Bildschirmgröße, Auflösung) in Bezug auf Layout, Inhalt (Text und Medien) und Leistung gut funktionieren.

Der Unterschied besteht hauptsächlich in Bezug auf die beteiligten Geräte und die verfügbaren Technologien zur Erstellung von Lösungen:

- Wir sprachen früher von Desktop oder Mobilgeräten, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktops, Laptops, mobile Geräte, Tablets, Uhren usw. Anstatt ein paar verschiedene Bildschirmgrößen zu berücksichtigen, müssen wir jetzt Websites defensiv gestalten, um gängige Bildschirmgrößen und Auflösungen sowie Unbekannte zu berücksichtigen.
- Mobile Geräte waren früher in Bezug auf CPU/GPU und verfügbare Bandbreite leistungsschwach. Einige unterstützten kein CSS oder sogar HTML, und es war daher üblich, serverseitiges Browser-Sniffing durchzuführen, um den Gerätetyp/Browser zu bestimmen, bevor eine für das Gerät geeignete Website bereitgestellt wurde. Mobile Geräte wurden oft mit sehr einfachen, grundlegenden Erfahrungen bedient, weil es alles war, was sie bewältigen konnten. Heutzutage sind mobile Geräte in der Lage, dieselben Technologien wie Desktop-Computer zu verarbeiten, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten die in diesem Artikel besprochenen Techniken dennoch verwenden, um mobilen Benutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Batterielebensdauer und Bandbreite gibt, die beachtet werden müssen.
  - Benutzererfahrung ist immer noch ein Anliegen. Ein mobiler Nutzer einer Reisewebsite möchte möglicherweise nur Flugzeiten und Verspätungsinformationen prüfen und nicht mit einem 3D-animierten Globus konfrontiert werden, der Flugrouten und die Firmengeschichte zeigt.
- Moderne Technologien sind viel besser geeignet für die Erstellung von responsiven Erlebnissen. Zum Beispiel ermöglichen es [Responsive-Bilder/Medientechnologien](#responsive_imagesmedia), geeignete Medien an verschiedene Geräte zu liefern, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in das Responsive Webdesign

HTML ist grundsätzlich responsiv oder _fluid_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster skalieren, wird der Browser den Text automatisch umfließen lassen, um in den Viewport zu passen.

Während das standardmäßige responsive Verhalten klingt, als sei keine Lösung erforderlich, können lange Textzeilen, die auf einem breiten Monitor bildschirmfüllend angezeigt werden, schwer zu lesen sein. Dieses Problem kann mit CSS gelöst werden, indem z. B. schmale Spalten erstellt werden, um die Zeilenlänge zu begrenzen. Dies kann jedoch neue Probleme für Benutzer schaffen, die ihr Browserfenster verengen oder die Seite auf einem mobilen Gerät ansehen — die Spalten werden gequetscht und schwerer zu lesen.

![Ein Layout mit zwei Spalten, die in eine mobile Viewport-Größe gequetscht sind.](mdn-rwd-liquid.png)

Eine nicht-responsives Webseite zu erstellen, indem man eine feste Breite einstellt, funktioniert ebenfalls nicht; das führt zu Bildlaufleisten auf schmalen Geräten und zu viel leerem Raum auf breiten Bildschirmen.

Responsives Webdesign oder RWD ist ein Designansatz, der die gesamte Bandbreite verfügbarer Geräte und Gerätegrößen berücksichtigt und eine automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr angesehen wird.

Responsives Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das auf jedes zum Betrachten verwendete Gerät _reagieren_ kann.

Der Begriff des _responsiven Designs_, [2010 von Ethan Marcotte geprägt](https://alistapart.com/article/responsive-web-design/), beschrieb die Verwendung von fluiden Rastern, fluiden Bildern und Media Queries, um responsiven Inhalt zu erstellen.

Zu dieser Zeit war die Empfehlung, CSS `float` für das Layout und Media Queries zu verwenden, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Fluide Bilder sind so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width` Eigenschaft auf `100%` gesetzt. Fluide Bilder verkleinern sich, wenn ihre enthaltene Spalte enger wird, wachsen aber nicht größer als ihre intrinsische Größe, wenn die Spalte wächst. Dadurch kann ein Bild sich verkleinern, um zu seinem Inhalt zu passen, anstatt überzulaufen, aber nicht größer werden und verpixelt, wenn der Container breiter als das Bild wird.

Moderne CSS-Layout-Methoden sind von Natur aus responsiv, und seit der Veröffentlichung des Artikels von Marcotte haben wir eine Vielzahl von Funktionen in die Webplattform integriert, die das Design von responsiven Webseiten erleichtern.

Der Rest dieses Artikels wird die verschiedenen Webplattform-Funktionen erklären, die Sie möglicherweise verwenden möchten, wenn Sie eine responsive Website erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (z. B. ob der Bildschirm des Nutzers breiter als eine bestimmte Breite oder Auflösung ist) und selektiv CSS anzuwenden, um die Seite entsprechend den Bedürfnissen des Nutzers zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedien angezeigt wird (daher kein Druckdokument) und der Viewport mindestens `80rem` breit ist. Die `.container` Regel wird nur angewendet, wenn diese beiden Dinge zutreffen.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen und Ihr gesamtes Layout oder Teile davon anpassen, um es den verschiedenen Bildschirmgrößen am besten anzupassen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout sich ändert, werden als _Breakpoints_ bezeichnet.

Ein gängiger Ansatz bei der Verwendung von Media Queries ist es, ein einfaches Einkollumnenlayout für Geräte mit schmalem Bildschirm (z.B. Mobiltelefone) zu erstellen, dann für breitere Bildschirme zu prüfen und ein mehrspaltiges Layout zu implementieren, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben. Das Designen für Mobilgeräte zuerst wird als **Mobile-First** Design bezeichnet.

Wenn Sie Breakpoints verwenden, ermutigen gute Praktiken dazu, Media Query-Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) zu definieren, anstatt absolute Größen eines einzelnen Geräts.

Es gibt verschiedene Ansätze zu den in einem Media Query Block definierten Stilen; von der Verwendung von Media Queries, um {{htmlelement("link")}} Stylesheets basierend auf Browsergrößenbereichen zu lenken bis hin dazu, nur benutzerdefinierte Eigenschaftenvariablen zu speichern, die mit jedem Breakpoint verbunden sind.

Media Queries können bei RWD helfen, sind aber keine Voraussetzung. Flexible Raster, relative Einheiten und minimale und maximale Einheitwerte können ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba hat ein Tutorial namens [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN Learning Partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, das eine interaktive Einführung in Media Queries bietet, plus eine Herausforderung, um zu prüfen, dass Sie die Grundlagen verstehen.

## Responsive Layout Technologien

Responsive Seiten basieren auf flexiblen Rastern, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts anvisieren müssen.

Durch die Verwendung eines flexiblen Rasters können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel, um sicherzustellen, dass Zeilenlängen mit zunehmender Bildschirmgröße nicht unlesbar lang werden, können Sie {{cssxref('columns')}} verwenden; wenn eine Box gequetscht wird und nur zwei Wörter pro Zeile hat, wenn sie enger wird, können Sie einen Breakpoint setzen.

Mehrere Layout-Methoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind von Haus aus responsive. Sie gehen alle davon aus, dass Sie versuchen, ein flexibles Raster zu erstellen und geben Ihnen einfachere Wege, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente, indem sie den Raum zwischen den Elementen entsprechend dem Raum in ihrem Container verteilen. Durch Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass sich die Elemente verhalten, wenn sie mehr oder weniger Raum um sich herum antreffen.

Im folgenden Beispiel wird jedes Flex-Element den gleichen Anteil des Raumes im Flex-Container einnehmen, indem die Kurzform von `flex: 1` verwendet wird, wie zuvor besprochen (siehe [Flexbox: Flexibles Größenanpassen von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Hier ist, wie wir Flexbox mit einer Media Query für responsives Design verwenden könnten.

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

Ändern Sie die Größe Ihres Browserfensters. Das Layout wechselt zwischen einem Einspalten- und einem Zweispaltenlayout, wenn die Größe des obigen Beispiels die Schwelle von `600px` überschreitet.

### CSS Grid

Im CSS-Grid-Layout ermöglicht die `fr` Einheit die Verteilung des verfügbaren Raums über Grid-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks, die auf `1fr` eingestellt sind. Dadurch werden drei Track-Spalten erstellt, die jeweils einen Teil des verfügbaren Raums im Container einnehmen. Sie haben diese Herangehensweise bereits gesehen (siehe [Flexible Raster mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) für eine Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Hier ist, wie wir Grid-Layout mit einer Media Query für responsives Design verwenden könnten.

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

Auch hier sollten Sie das Browserfenster in der Größe ändern — Sie sollten sehen, wie sich das Layout-Beispiel an der `600px` Breiteschwelle ändert, ähnlich wie im vorherigen Beispiel.

## Responsive Bilder/Medien

Um zu gewährleisten, dass Medien nie größer als ihr responsiver Container werden, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medien-Elemente, um sicherzustellen, dass sie niemals ihre Container überschreiten.

> [!NOTE]
> Die Verwendung eines einzelnen großen Bildes und deren Skalierung, um auf kleinere Geräte zu passen, verschwendet Bandbreite, weil Bilder heruntergeladen werden, die größer als erforderlich sind. Es kann auch schlecht aussehen — ein Landschaftsbild könnte auf einem Breitbildmonitor gut aussehen, jedoch schwer zu erkennen sein auf einem mobilen Gerät, das ein Hochformat-Bild besser geeignet wäre. Solche Probleme können durch die Verwendung des {{htmlelement("picture")}} Elements und der {{htmlelement("img")}} `srcset` und `sizes` Attribute gelöst werden. Dies sind fortgeschrittene Funktionen, die über den Umfang dieses Kurses hinausgehen, aber Sie finden eine ausführliche Anleitung unter [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images).

Andere nützliche Tipps:

- Achten Sie darauf, immer ein geeignetes Bildformat für Ihre Website-Bilder zu verwenden (wie PNG oder JPG) und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihre Website stellen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) verwenden, um visuelle Effekte ohne Verwendung von Bildern zu implementieren.
- Sie können Media Queries innerhalb des Media-Attributs auf {{htmlelement("source")}} Elementen verwenden, die in {{htmlelement("video")}}/{{htmlelement("audio")}} Elementen verschachtelt sind, um Video-/Audiodateien je nach Gerät bereitzustellen (responsives Video/Audio).

## Responsive Typografie

Responsives Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Media Queries oder durch die Verwendung von Viewport-Einheiten, um die geringeren oder größeren Mengen an Bildschirmrealität widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Ebene 1 auf `4rem` setzen, was bedeutet, dass sie viermal unsere Basis-Schriftgröße betragen wird. Das ist eine wirklich große Überschrift! Wir wollen diese Jumbo-Überschrift nur auf größeren Bildschirmgrößen, daher geben wir der Überschrift zunächst eine kleinere Größe von `2rem`, verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

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

Das nächste Beispiel ist eine modifizierte Version unseres früheren responsiven Grid-Beispiels, das eine responsive Überschrift mit der beschriebenen Methode umfasst. Auf Mobilgeräten ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Schriftdesign:

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

Wie bei den vorherigen Beispielen sollten Sie die Fenstergröße des Browsers ändern und beachten, wie nicht nur das Layout bei der `600px` Breiteschwelle sich ändert, sondern auch die Schriftgröße.

Diese Herangehensweise an die Typografie zeigt, dass Sie Media Queries nicht darauf beschränken müssen, nur das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element anzupassen, um es bei verschiedenen Bildschirmgrößen benutzerfreundlicher oder attraktiver zu machen.

### Verwendung von Viewport-Einheiten für responsive Typografie

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne die Notwendigkeit, Breakpoints mit Media Queries zu setzen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` setzen, diese immer in Bezug auf die Größe des Viewports steht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der Verwendung des Obengenannten ist, dass der Benutzer die Möglichkeit verliert, jeden Text, der mit der `vw`-Einheit gesetzt ist, zu zoomen, da dieser Text immer in Bezug auf die Größe des Viewports steht. **Daher sollten Sie niemals Text allein mit Viewport-Einheiten setzen**.

Es gibt eine Lösung, und sie beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die `vw`-Einheit zu einem Wert hinzufügen, der mit einer festen Größe wie `em`s oder `rem`s gesetzt ist, wird der Text immer noch zoombar sein. Im Wesentlichen, die `vw`-Einheit addiert zu diesem vergrößerten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal festlegen müssen, anstatt sie für Mobilgeräte einzurichten und in den Media Queries neu zu definieren. Die Schriftgröße wird dann allmählich größer, wenn Sie die Größe des Viewports erhöhen.

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

Versuchen Sie, das Browserfenster zu skalieren, wie zuvor, und beachten Sie, wie diesmal die Überschriftgröße _allmählich_ mit dem Wechsel der Breite zunimmt.

## Der Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, werden Sie normalerweise den folgenden {{htmlelement("meta")}} Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieser [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag sagt mobilen Browsern, dass sie die Breite des Viewports auf die Breite des Geräts setzen und das Dokument auf 100% seiner beabsichtigten Größe skalieren sollen, was das Dokument in der mobil-optimierten Größe zeigt, die Sie beabsichtigt haben.

Warum ist das nötig? Weil mobile Browser dazu tendieren, über ihre Viewport-Breite zu lügen.

Dieser Meta-Tag existiert, weil als Smartphones zuerst aufkamen, die meisten Seiten nicht mobil-optimiert waren. Der mobile Browser würde daher die Viewport-Breite auf 980 Pixel setzen, die Seite in dieser Breite rendern und das Ergebnis als herausgezoomte Version des Desktop-Layouts anzeigen. Benutzer könnten hereinzoomen und auf der Website navigieren, um die Teile zu sehen, für die sie sich interessieren, aber es sah schlecht aus.

Indem Sie `width=device-width` festlegen, überschreiben Sie den Standard des mobilen Geräts, wie das iPhone den Standard `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne sie wird Ihr responsive Design mit Breakpoints und Media Queries möglicherweise nicht wie vorgesehen auf mobilen Browsern funktionieren. Wenn Sie ein schmaleres Bildschirm-Layout haben, das bei einer Viewport-Breite von 480 Pixeln oder weniger eintritt, das Gerät jedoch angibt, dass es 980 Pixel breit ist, wird der Nutzer Ihr schmaleres Bildschirm-Layout nicht sehen.

**Also sollten Sie _immer_ den Viewport-Meta-Tag im Kopfbereich Ihrer Dokumente einschließen.**

Es gibt eine Reihe anderer Optionen, die Sie in das `content`-Attribut des Viewport-Meta-Tags setzen können — siehe [Using the viewport meta tag to control layout on mobile browsers](/de/docs/Web/HTML/Guides/Viewport_meta_element) für weitere Details.

## Zusammenfassung

Responsives Design bezieht sich auf ein Website- oder Applikationsdesign, das auf die Umgebung reagiert, in der es angezeigt wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und Techniken und ist im Wesentlichen, wie wir standardmäßig Websites erstellen. Betrachten Sie die Websites, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Website zu stoßen, die die Desktop-Version ist, heruntergeregelt, oder wo Sie zur Seite scrollen müssen, um Dinge zu finden. Dies liegt daran, dass das Web diesen Ansatz des responsiven Designs verfolgt.

Es ist auch viel einfacher geworden, responsive Designs mit Hilfe der in diesem Artikel behandelten Layout-Methoden zu erreichen. Wenn Sie heute neu in der Webentwicklung sind, haben Sie viele mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Es ist daher wert, das Alter etwaiger Materialien, die Sie verwenden, zu überprüfen. Während historische Artikel immer noch nützlich sind, erleichtert die moderne Verwendung von CSS und HTML das Erstellen eleganter und nützlicher Designs erheblich, unabhängig davon, mit welchem Gerät Ihr Besucher die Website sieht.

Als Nächstes werden wir uns genauer mit Media Queries beschäftigen und zeigen, wie man einige häufige Probleme lösen kann.

## Siehe auch

- Arbeiten mit Touch-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivitäten auf Touchscreens oder Trackpads zu interpretieren, was eine qualitativ hochwertige Unterstützung für komplexe touchbasierte Benutzeroberflächen ermöglicht.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um unterschiedliches CSS auf touchfähigen Geräten zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [The Frontend Developer Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN Learning Partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Frontend-Webentwickler zu sein, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, kenntnisreichen Lehrern und einer unterstützenden Gemeinschaft. Vom Anfänger bis hin zur ersten Anstellung als Frontend-Entwickler! Viele der Kurskomponenten sind als eigenständige kostenlose Versionen verfügbar. Dazu gehört ein Modul über responsives Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
