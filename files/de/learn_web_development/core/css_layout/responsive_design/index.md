---
title: Responsives Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: ed70efeffb9717915f028104c5b33e7326a00d96
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Ansatz im Webdesign, um sicherzustellen, dass Webseiten auf allen Bildschirmgrößen und -auflösungen gut dargestellt werden, während eine gute Nutzbarkeit gewährleistet wird. Es ist der Weg, ein Web für mehrere Geräte zu gestalten. In diesem Artikel helfen wir Ihnen einige Techniken zu verstehen, die verwendet werden können, um es zu meistern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren </a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schrift-Styling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundlegende Konzepte des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Responsive Design ist — Weblayouts so gestalten, dass sie flexibel sind und gut auf verschiedenen Gerätegrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und Responsive Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für Responsive Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Web-Dokumente auf mobilen Geräten richtig anzuzeigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des Responsive-Designs: Mobile Webdesign

Bevor Responsive Webdesign der Standardansatz für die Erstellung von Websites wurde, die auf verschiedenen Gerätetypen funktionieren, sprachen Webentwickler oft über Mobile Webdesign, Mobile Webentwicklung oder manchmal über mobilfreundliches Design. Diese Begriffe sind im Wesentlichen dasselbe wie Responsive Webdesign — das Ziel ist, sicherzustellen, dass Websites hinsichtlich Layout, Inhalt (Text und Medien) und Leistung gut auf Geräten mit unterschiedlichen physikalischen Attributen (Bildschirmgröße, Auflösung) funktionieren.

Der Unterschied betrifft hauptsächlich die beteiligten Geräte und die verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprach man über Desktop oder Mobile, aber heute gibt es viele verschiedene Gerätetypen wie Desktops, Laptops, Mobiltelefone, Tablets, Uhren usw. Anstatt nur einige wenige Bildschirmgrößen zu berücksichtigen, müssen wir jetzt Websites defensiv gestalten, um häufige Bildschirmgrößen und -auflösungen sowie Unbekanntes zu berücksichtigen.
- Mobilgeräte waren früher in Bezug auf CPU/GPU und verfügbare Bandbreite wenig leistungsfähig. Einige unterstützten weder CSS noch HTML, und infolgedessen war es üblich, serverseitiges Browser-Sniffing durchzuführen, um den Geräte-/Browsertyp zu bestimmen, bevor eine Seite bereitgestellt wurde, die das Gerät verarbeiten konnte. Mobilgeräte hatten oft wirklich einfache, grundlegende Erlebnisse, die ihnen bereitgestellt wurden, weil es alles war, was sie bewältigen konnten. Heutzutage können Mobilgeräte dieselben Technologien wie Desktop-Computer verarbeiten, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Nutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt, auf die Sie achten müssen.
  - Benutzererfahrung ist immer noch ein Anliegen. Ein mobiler Nutzer einer Reise-Website möchte vielleicht nur Flugzeiten und Verspätungsinformationen prüfen und nicht mit einem 3D-animierten Globus konfrontiert werden, der Flugrouten und die Geschichte Ihres Unternehmens zeigt.
- Moderne Technologien sind viel besser geeignet, um responsive Erlebnisse zu erstellen. Beispielsweise ermöglichen [Technologien für Responsive Images/Media](#responsive_imagesmedia) jetzt, geeignete Medien auf verschiedenen Geräten bereitzustellen, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in Responsive Webdesign

HTML ist von Natur aus responsiv oder _fluid_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster anpassen, passt der Browser den Text automatisch an das Viewport an.

Obwohl das standardmäßige responsive Verhalten so klingt, als wäre keine Lösung erforderlich, können lange Textzeilen, die auf einem breiten Monitor vollbildschirmmäßig angezeigt werden, schwer zu lesen sein. Dieses Problem kann mit CSS gelöst werden, zum Beispiel durch das Erstellen schmaler Spalten, um die Zeilenlänge zu begrenzen. Dies kann jedoch neue Probleme für Nutzer schaffen, die ihr Browserfenster verengen oder die Seite auf einem Mobilgerät ansehen — die Spalten sehen zerquetscht aus und werden schwerer zu lesen.

![Ein Layout mit zwei Spalten, die in ein mobiles Anzeigeformat gequetscht sind.](mdn-rwd-liquid.png)

Eine nicht anpassbare Webseite zu erstellen, indem eine feste Breite festgelegt wird, funktioniert ebenfalls nicht; das führt zu Bildlaufleisten auf schmalen Geräten und zu viel freiem Raum auf breiten Bildschirmen.

Responsives Webdesign oder RWD ist ein Designansatz, der die gesamte Bandbreite der verfügbaren Geräte und Gerätgrößen anspricht, wodurch eine automatische Anpassung an den Bildschirm ermöglicht wird, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr angezeigt wird.

Responsives Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zur Erstellung eines Layouts zu beschreiben, das auf jedes Gerät reagiert, das zur Anzeige des Inhalts verwendet wird.

Der Begriff _Responsive Design_ [wurde 2010 von Ethan Marcotte geprägt](https://alistapart.com/article/responsive-web-design/). Er beschreibt die Verwendung von fluiden Gittern, fließenden Bildern und Media Queries, um responsive Inhalte zu erstellen.

Damals wurde empfohlen, CSS `float` für das Layout zu verwenden, und Media Queries, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Flüssige Bilder werden so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width` Eigenschaft auf `100%` gesetzt. Flüssige Bilder verkleinern sich, wenn sich ihre enthaltene Spalte verengt, wachsen jedoch nicht größer als ihre intrinsische Größe, wenn die Spalte wächst. Dies ermöglicht es einem Bild, sich zu verkleinern, um seinen Inhalt einzupassen, anstatt ihn zu überlaufen, aber nicht größer zu werden und zu verpixeln, wenn der Container breiter als das Bild wird.

Moderne CSS-Layout-Methoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir viele Funktionen in die Web-Plattform integriert, die das Entwerfen von responsiven Seiten erleichtern.

Der Rest dieses Artikels wird die verschiedenen Funktionen der Web-Plattform erklären, die Sie bei der Erstellung einer responsiven Seite nutzen könnten.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Nutzers breiter als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite angemessen für die Bedürfnisse des Nutzers zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedium angezeigt wird (also kein gedrucktes Dokument) und das Viewport mindestens `80rem` breit ist. Die `.container` Regel wird nur angewendet, wenn diese beiden Bedingungen zutreffen.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können innerhalb eines Stylesheets mehrere Media Queries hinzufügen, um Ihr gesamtes Layout oder Teile davon an die verschiedenen Bildschirmgrößen anzupassen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout sich ändert, werden als _Breakpoints_ bezeichnet.

Ein gängiger Ansatz bei der Verwendung von Media Queries ist es, ein einfaches einspaltiges Layout für Geräte mit schmalem Bildschirm (zum Beispiel Mobiltelefone) zu erstellen und dann breitere Bildschirme zu überprüfen und ein mehrspaltiges Layout zu implementieren, wenn Sie wissen, dass Sie genug Bildschirmbreite haben, um es zu bewältigen. Dies wird als **Mobile-First**-Design bezeichnet.

Wenn Sie Breakpoints verwenden, ermutigen Best Practices dazu, Media Query-Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) anstelle von absoluten Größen eines einzelnen Geräts zu definieren.

Es gibt verschiedene Ansätze für die in einem Media Query-Block definierten Styles, die von der Verwendung von Media Queries zur {{htmlelement("link")}} Stylesheets basierend auf Browsergrößenbereichen bis hin nur zur Einbeziehung benutzerdefinierter Eigenschaftsvariablen reichen, um Werte für jeden Breakpoint zu speichern.

Media Queries können bei RWD helfen, sind aber keine Voraussetzung. Flexible Gitter, relative Einheiten und minimale und maximale Einheitswerte können ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba hat ein Tutorial namens [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, das eine interaktive Einführung in Media Queries bietet sowie eine Herausforderung, um zu testen, dass Sie die Grundlagen verstehen.

## Responsive Layout-Technologien

Responsive Seiten basieren auf flexiblen Gittern, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts anvisieren müssen.

Durch die Verwendung eines flexiblen Gitters können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel, um sicherzustellen, dass Zeilenlängen nicht unlesbar werden, wenn die Bildschirmgröße zunimmt, können Sie {{cssxref('columns')}} verwenden; wenn ein Kasten zerquetscht wird und nur noch zwei Wörter pro Zeile hat, können Sie einen Breakpoint setzen.

Mehrere Layout-Methoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS-Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind standardmäßig responsiv. Sie gehen davon aus, dass Sie versuchen, ein flexibles Gitter zu erstellen, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Komponenten und verteilen den Raum zwischen den Elementen entsprechend dem verfügbaren Platz in ihrem Container. Durch das Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass sich die Elemente verhalten, wenn sie mehr oder weniger Platz um sich herum haben.

Im folgenden Beispiel nehmen die Flex-Elemente jeweils einen gleichen Anteil an Platz im Flex-Container ein, wobei die Kurzform von `flex: 1` verwendet wird, wie zuvor besprochen (siehe [Flexbox: Flexible Größenanpassung von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

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

Ändern Sie die Größe Ihres Browserfensters. Das Layout wird zwischen einem Einspalten- und einem Zweispalten-Layout wechseln, wenn die Größe des obigen Beispiels die `600px` Breite überschreitet.

### CSS-Grid

Im CSS-Grid-Layout ermöglicht die `fr`-Einheit die Verteilung des verfügbaren Platzes über Gitter-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Spuren, die auf `1fr` gesetzt sind. Dies erzeugt drei Spalten-Spuren, die jeweils einen Teil des verfügbaren Platzes im Container einnehmen. Sie haben diesen Ansatz bereits gesehen (siehe [Flexible Gitter mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) zur Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Hier ist, wie wir Grid-Layout mit einer Media Query für Responsive Design verwenden könnten.

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

Auch hier versuchen Sie, die Größe Ihres Browserfensters zu ändern — Sie sollten sehen, dass sich das Beispiellayout bei der `600px` Breite ändert, genauso wie im vorherigen Beispiel.

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien nie größer sind als ihr responsiver Container, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medienelemente, um sicherzustellen, dass sie niemals ihre Container überlaufen.

> [!NOTE]
> Die Verwendung eines einzelnen großen Bildes und dessen Verkleinerung zur Anpassung an kleine Geräte verschwendet Bandbreite durch das Herunterladen von Bildern, die größer als erforderlich sind. Es kann auch schlecht aussehen — ein Landschaftsbild zum Beispiel könnte auf einem Breitbildmonitor gut aussehen, aber auf einem mobilen Gerät könnte es schwer zu sehen sein, das besser für ein Hochformatbild geeignet wäre. Solche Probleme können gelöst werden, indem das {{htmlelement("picture")}}-Element und die {{htmlelement("img")}} `srcset`- und `sizes`-Attribute verwendet werden. Diese sind fortschrittliche Funktionen, die über den Umfang dieses Kurses hinausgehen, aber Sie finden eine detaillierte Anleitung unter [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images).

Weitere nützliche Tipps:

- Verwenden Sie immer ein geeignetes Bildformat für Ihre Website-Bilder (wie PNG oder JPG) und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihrer Website platzieren.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) nutzen, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries im Medienattribut auf {{htmlelement("source")}}-Elementen verwenden, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verschachtelt sind, um Video-/Audiodateien für verschiedene Geräte (responsive Video/Audio) bereitzustellen.

## Responsive Typografie

Responsive Typografie beschreibt die Anpassung von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewport-Einheiten, um geringere oder größere Mengen an Bildschirmflächen widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Stufe 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß ist wie unsere Basis-Schriftgröße. Das ist eine wirklich große Überschrift! Wir möchten diese Jumbo-Überschrift nur auf größeren Bildschirmgrößen, daher geben wir der Überschrift zuerst eine kleinere Größe von `2rem`, dann verwenden wir Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

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

Das nächste Beispiel ist eine modifizierte Version unseres früheren responsive Grid-Beispiels, das eine responsive Überschrift mit der beschriebenen Methode beinhaltet. Auf dem Handy ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftgröße:

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

Wie bei den vorherigen Beispielen versuchen Sie, die Breite des Browserfensters zu ändern, und beachten Sie, wie nicht nur das Layout bei der `600px`-Breitengrenze wechselt, sondern auch die Überschriftengröße.

Da dieser Ansatz für die Typografie zeigt, müssen Sie Media Queries nicht nur verwenden, um das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element anzupassen, um es bei alternativen Bildschirmgrößen benutzerfreundlicher oder ansprechender zu machen.

### Verwendung von Viewport-Einheiten für responsive Typografie

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne Breakpoints mit Media Queries festlegen zu müssen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` setzen, sie immer der Größe des Viewports entspricht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der obigen Vorgehensweise ist, dass der Benutzer die Möglichkeit verliert, jeglichen Text, der mit der `vw`-Einheit gesetzt ist, zu zoomen, da dieser Text immer auf die Größe des Viewports bezogen ist. **Daher sollten Sie Text niemals ausschließlich mit Viewport-Einheiten festlegen**.

Es gibt eine Lösung, und diese besteht in der Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die `vw`-Einheit zu einem Wert hinzufügen, der mit einer festen Größe wie `em`s oder `rem`s festgelegt wurde, dann bleibt der Text trotzdem zoombar. Im Wesentlichen fügt die `vw`-Einheit über diesen gezoomten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal angeben müssen, anstatt sie für Mobilgeräte einzurichten und sie in den Media Queries neu zu definieren. Die Schrift vergrößert sich dann allmählich, wenn Sie die Größe des Viewports erhöhen.

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

Versuchen Sie, das Browserfenster wie zuvor zu vergrößern oder zu verkleinern, und beachten Sie, wie sich diesmal die Überschriftengröße _allmählich_ ändert, während sich die Breite verändert.

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, werden Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Breite des Geräts einstellen und das Dokument auf 100% seiner beabsichtigten Größe skalieren sollen, was das Dokument in der von Ihnen beabsichtigten mobile-optimierten Größe anzeigt.

Warum ist das notwendig? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil als Smartphones erstmals erschienen, die meisten Websites nicht für Mobilgeräte optimiert waren. Der mobile Browser würde daher die Viewport-Breite auf 980 Pixel einstellen, die Seite mit dieser Breite rendern und das Ergebnis als verkleinerte Version des Desktop-Layouts anzeigen. Benutzer könnten zoomen und um die Website herumscrollen, um die Bereiche zu sehen, die sie interessieren, aber es sah schlecht aus.

Indem Sie `width=device-width` festlegen, überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie die Standardeinstellung eines iPhones von `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne diese funktioniert Ihr Responsive Design mit Breakpoints und Media Queries möglicherweise nicht wie beabsichtigt auf mobilen Browsern. Wenn Sie ein schmales Screen-Layout haben, das bei einer Viewport-Breite von 480px oder weniger einsetzt, aber das Gerät sagt, es sei 980px breit, sieht der Nutzer Ihr schmales Screen-Layout nicht.

**Daher sollten Sie _immer_ das Viewport-Meta-Tag im Kopf Ihrer Dokumente einfügen.**

Es gibt eine Reihe von anderen Optionen, die Sie in das `content`-Attribut des Viewport-Meta-Tags einfügen können — siehe [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element) für weitere Details.

## Zusammenfassung

Responsive Design bedeutet, dass ein Website- oder Anwendungsdesign auf das Umfeld reagiert, in dem es betrachtet wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist im Wesentlichen die Methode, wie wir standardmäßig Websites erstellen. Überlegen Sie, welche Seiten Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Seite zu stoßen, die die Desktop-Version im verkleinerten Maßstab zeigt, oder bei der man seitwärts scrollen muss, um etwas zu finden. Das liegt daran, dass das Web auf diesen Ansatz reagiven Designs umgestiegen ist.

Es ist auch viel einfacher geworden, responsives Design mit Hilfe der in diesem Artikel behandelten Layout-Methoden zu realisieren. Wenn Sie heute neu in der Webentwicklung sind, stehen Ihnen viele mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Es ist daher sinnvoll, das Alter von Materialien zu überprüfen, die Sie verwenden. Während die historischen Artikel immer noch nützlich sind, macht die moderne Verwendung von CSS und HTML es viel einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Seite betrachtet.

Als Nächstes werden wir die Media Queries genauer untersuchen und zeigen, wie man sie verwenden kann, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch-Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Aktivitäten von Fingern (oder Stiften) auf Touchscreens oder Trackpads zu interpretieren, und ermöglichen eine qualitativ hochwertige Unterstützung für komplexe, Touch-basierte Benutzeroberflächen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um unterschiedliche CSS auf Touch-fähigen Geräten zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [The Frontend Developer Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Frontend-Webentwickler zu werden, mit lustigen interaktiven Lektionen und Herausforderungen, kenntnisreichen Lehrern und einer unterstützenden Gemeinschaft. Gehen Sie von null zum Erreichen Ihres ersten Frontend-Jobs! Viele der Kurskomponenten sind als eigenständige kostenlose Versionen verfügbar. Dazu gehört ein Modul über responsives Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
