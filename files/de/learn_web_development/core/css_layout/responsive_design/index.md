---
title: Responsives Design
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Webdesign-Ansatz, um Webseiten auf allen Bildschirmgrößen und Auflösungen gut darzustellen und dabei eine gute Benutzerfreundlichkeit zu gewährleisten. Es ist der Weg, um für ein Web mit mehreren Geräten zu gestalten. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die angewendet werden können, um es zu beherrschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist – Weblayouts so gestalten, dass sie flexibel sind und gut auf verschiedenen Bildschirmgrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Werkzeugen wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum das <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten angemessen anzuzeigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobile Webdesign

Bevor responsives Webdesign der Standardansatz zur Anpassung von Websites an verschiedene Gerätetypen wurde, sprachen Webentwickler früher oft von Mobile Webdesign, mobiler Webentwicklung oder manchmal von mobilfreundlichem Design. Diese sind im Grunde dasselbe wie responsives Webdesign – die Ziele sind sicherzustellen, dass Websites in Bezug auf Layout, Inhalt (Text und Medien) und Leistung auf Geräten mit unterschiedlichen physikalischen Eigenschaften (Bildschirmgröße, Auflösung) gut funktionieren.

Der Hauptunterschied liegt in den beteiligten Geräten und den zur Verfügung stehenden Technologien, um Lösungen zu schaffen:

- Früher sprach man von Desktop oder Mobilgeräten, aber heutzutage sind viele verschiedene Arten von Geräten verfügbar, wie Desktops, Laptops, Mobilgeräte, Tablets, Uhren usw. Anstatt sich auf einige unterschiedliche Bildschirmgrößen zu konzentrieren, müssen wir jetzt Seiten defensiv gestalten, um sowohl üblichen Bildschirmgrößen und -auflösungen als auch Unbekannten gerecht zu werden.
- Mobile Geräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten kein CSS oder gar HTML, und daher war es üblich, serverseitige Browsererkennung durchzuführen, um Gerätetyp und Browser zu ermitteln und anschließend eine Website bereitzustellen, die das Gerät bewältigen konnte. Mobilgeräte hatten oft sehr einfache, grundlegende Darstellungen, weil das alles war, was sie bewältigen konnten. Heutzutage können Mobilgeräte mit denselben Technologien umgehen wie Desktop-Computer, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Nutzern ein geeignetes Erlebnis zu bieten, da es nach wie vor Einschränkungen wie Akkulaufzeit und Bandbreite gibt, die zu beachten sind.
  - Auch die Benutzererfahrung ist ein Anliegen. Ein mobiler Nutzer einer Reise-Website möchte vielleicht nur Flugzeiten und Verspätungsinformationen einsehen, ohne mit einem 3D-animierten Globus mit Flugrouten und Firmengeschichte konfrontiert zu werden. Dies kann jedoch mit responsiven Designtechniken gehandhabt werden.
- Moderne Technologien sind viel besser geeignet, um responsive Erlebnisse zu schaffen. Beispielsweise ermöglichen [responsive Bild-/Medientechnologien](#responsive_imagesmedia) jetzt die Bereitstellung geeigneter Medien für verschiedene Geräte, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in responsives Webdesign

HTML ist im Grunde genommen responsiv oder _fluid_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster umskalieren, fließt der Text automatisch im Browser, um ins Ansichtsfenster zu passen.

Während das standardmäßige responsive Verhalten nach keiner Lösung klingt, können lange Textzeilen, die auf einem breiten Monitorbildschirm in voller Breite angezeigt werden, schwer zu lesen sein. Wenn die Zeilenbreite auf einem Breitbildbildschirm mit CSS reduziert wird, etwa durch das Erstellen von Spalten oder durch Hinzufügen erheblicher Abstände, kann die Seite für den Benutzer, der sein Browserfenster verkleinert oder die Seite auf einem mobilen Gerät öffnet, gequetscht aussehen.

![Ein Layout mit zwei Spalten, die in eine mobile Größenansicht gequetscht sind.](mdn-rwd-liquid.png)

Ein festes Breitenlayout für eine nicht-resizable Webseite funktioniert ebenfalls nicht; das führt zu Scrollleisten auf schmalen Geräten und zu viel Leerraum auf breiten Bildschirmen.

Responsive Webdesign, oder RWD, ist ein Designansatz, der die Bandbreite der Geräte und Gerätegrößen abdeckt und eine automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, einem Telefon, einem Fernseher oder einer Uhr angesehen wird.

Responsive Webdesign ist keine separate Technologie – es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät, das zum Anzeigen des Inhalts verwendet wird, _reagieren_ kann.

Der Begriff _responsive Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschreibt die Verwendung von fluiden Rastern, fluiden Bildern und Media Queries, um responsiven Inhalt zu erstellen.

Zu der Zeit wurde empfohlen, CSS `float` für Layouts und Media Queries zu verwenden, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Fluide Bilder sind so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; ihr `max-width`-Eigenschaft ist auf `100%` gesetzt. Fluide Bilder verkleinern sich, wenn sich ihre enthaltene Spalte verengt, wachsen jedoch nicht über ihre intrinsische Größe hinaus, wenn die Spalte wächst. Dies ermöglicht es einem Bild, sich an seinen Inhalt anzupassen, anstatt ihn zu überlaufen, jedoch nicht zu wachsen und pixelig zu werden, wenn der Container breiter wird als das Bild.

Moderne CSS-Layout-Methoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in der Webplattform, die es einfacher machen, responsive Seiten zu gestalten.

Der Rest dieses Artikels wird Sie auf die verschiedenen Funktionen der Webplattform hinweisen, die Sie verwenden möchten, wenn Sie eine responsive Seite erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Benutzers eine bestimmte Breite oder Auflösung überschreitet) und CSS selektiv anzuwenden, um die Seite angemessen für die Bedürfnisse des Benutzers zu gestalten.

Beispielsweise prüft die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedien angezeigt wird (daher kein gedrucktes Dokument) und das Ansichtsfenster mindestens `80rem` breit ist. Das CSS für den `.container` Selektor wird nur angewendet, wenn diese beiden Bedingungen zutreffen.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können innerhalb eines Stylesheets mehrere Media Queries hinzufügen und Ihr gesamtes Layout oder Teile davon an die verschiedenen Bildschirmgrößen anpassen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout geändert wird, sind als _Breakpoints_ bekannt.

Ein üblicher Ansatz bei der Verwendung von Media Queries ist die Erstellung eines einfachen Layouts mit einer einzigen Spalte für Geräte mit schmalen Bildschirmen (zum Beispiel Mobiltelefone) und die Implementierung eines Layouts mit mehreren Spalten, sobald Sie wissen, dass Sie genug Bildschirmbreite haben, um es zu bewältigen. Das Gestalten für Mobilgeräte zuerst ist bekannt als **mobile first** Design.

Wenn Breakpoints verwendet werden, ermutigen Best Practices dazu, Media Query Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) zu definieren, anstatt absolute Größen eines einzelnen Geräts zu verwenden.

Es gibt verschiedene Ansätze zu den innerhalb eines Media Query Blocks definierten Stilen; von der Verwendung von Media Queries zum {{htmlelement("link")}} Stylesheets basierend auf Browsergrößenbereichen über das Einschließen benutzerdefinierter Variableneigenschaften zur Speicherung von Werten, die mit jedem Breakpoint verbunden sind.

Media Queries können beim RWD helfen, sind jedoch nicht zwingend erforderlich. Flexible Raster, relative Einheiten und minimale und maximale Einheitswerte können auch ohne Media Queries verwendet werden.

## Technologien für responsive Layouts

Responsive Seiten basieren auf flexiblen Rastern, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts anvisieren müssen.

Durch die Verwendung eines flexiblen Rasters können Sie ein Element oder einen Breakpoint ändern und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Um sicherzustellen, dass Zeilenlängen beim Erhöhen der Bildschirmgröße nicht unlesbar lang werden, können Sie {{cssxref('columns')}} verwenden; wenn ein Kasten beim Verengen gequetscht mit zwei Wörtern je Zeile wird, können Sie einen Breakpoint setzen.

Mehrere Layoutmethoden – einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) – sind von Haus aus responsiv. Sie gehen alle davon aus, dass Sie versuchen, ein flexibles Raster zu erstellen, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente, indem sie den Platz zwischen den Elementen entsprechend dem Platz in ihrem Container verteilen. Durch das Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie sich die Elemente verhalten sollen, wenn sie mehr oder weniger Platz um sich herum haben.

Im folgenden Beispiel nehmen die Flex-Elemente jeweils den gleichen Raum im Flex-Container ein, wobei die Kurzform von `flex: 1` verwendet wird, wie oben beschrieben (siehe [Flexbox: Flexible Größenanpassung von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Hier ist, wie man Flexbox mit einer Media Query für responsives Design verwenden könnte.

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

Ändern Sie die Größe des Bildschirms. Das Layout wird sich ändern, wenn die Größe des obigen Beispiels die 600px-Breiten-Schwelle überschreitet.

### CSS Grid

Im CSS Grid Layout erlaubt die Einheit `fr` die Verteilung des verfügbaren Raumes über Grid-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks, die auf `1fr` eingestellt sind. Dies wird drei Spalten-Tracks erstellen, von denen jeder einen Teil des verfügbaren Platzes im Container einnimmt. Sie haben diesen Ansatz bereits betrachtet (siehe [Flexible Raster mit der `fr`-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) für eine Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Hier ist, wie man das Grid-Layout mit einer Media Query für responsives Design verwenden könnte.

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

Um sicherzustellen, dass Medien niemals größer sind als ihr responsiver Container, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medien so, dass sie niemals ihre Container überlaufen.

> [!NOTE]
> Die Verwendung eines einzigen großen Bildes und dessen Herunterskalieren zur Anpassung an kleine Geräte verschwendet Bandbreite, indem größere Bilder heruntergeladen werden als notwendig. Es kann auch schlecht aussehen – ein Landschaftsbild könnte beispielsweise auf einem Breitbildmonitor gut aussehen, jedoch könnte es schwer zu erkennen sein auf einem mobilen Gerät, das besser für ein Porträtbild geeignet wäre. Solche Probleme können mit dem {{htmlelement("picture")}} Element und den Attributen `srcset` und `sizes` des {{htmlelement("img")}} gelöst werden. Diese sind erweiterte Funktionen, die über den Umfang dieses Kurses hinausgehen, aber Sie können eine detaillierte Anleitung unter [Responsives Bilder](/de/docs/Web/HTML/Responsive_images) finden.

Andere nützliche Tipps:

- Stellen Sie immer sicher, dass Sie ein geeignetes Bildformat für Ihre Website-Bilder verwenden (wie PNG oder JPG) und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihre Website hochladen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) verwenden, um visuelle Effekte ohne Einsatz von Bildern umzusetzen.
- Sie können Media Queries im media-Attribut auf {{htmlelement("source")}}-Elementen verwenden, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verschachtelt sind, um Video-/Audiodateien für verschiedene Geräte geeignet bereitzustellen (responsive Videos/Audios).

## Responsive Typografie

Responsive Typografie beschreibt die Änderung der Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewporteinheiten, um die geringere oder größere Menge an Bildschirmfläche widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Stufe 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß ist wie unsere Standardschriftgröße. Das ist eine wirklich große Überschrift! Wir möchten diese Jumbo-Überschrift jedoch nur auf größeren Bildschirmgrößen, daher erstellen wir zuerst eine kleinere Überschrift und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmgröße von mindestens `1200px` hat.

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

Wir haben unser vorheriges responsives Grid-Beispiel bearbeitet, um auch responsive Schriften mit der beschriebenen Methode zu enthalten. Sie können sehen, wie die Überschrift ihre Größe ändert, wenn das Layout zu der Zwei-Spalten-Version wechselt.

Auf mobilen Geräten ist die Überschrift kleiner, aber auf Desktops sehen wir die größere Überschriftgröße:

```html live-sample___type-rwd
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

Wie dieser Ansatz zur Typografie zeigt, müssen Sie Media Queries nicht nur dafür verwenden, das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element anzupassen, um es bei anderen Bildschirmgrößen benutzerfreundlicher oder attraktiver zu machen.

### Verwendung von Viewporteinheiten für responsive Typografie

Viewporteinheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne die Notwendigkeit von Breakpoints mit Media Queries. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` festlegen, diese immer proportional zur Viewport-Größe ist.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der Verwendung des obigen Codes besteht darin, dass der Benutzer die Fähigkeit verliert, Text, der mit der `vw`-Einheit festgelegt ist, zu zoomen, da dieser Text immer in Bezug zur Viewport-Größe steht. **Daher sollten Sie Text niemals allein mit Viewporteinheiten setzen.**

Es gibt eine Lösung, die die Verwendung von [`calc()`](/de/docs/Web/CSS/calc) erfordert. Wenn Sie die `vw`-Einheit zu einem mit einer festen Größe wie `em`s oder `rem`s festgelegten Wert hinzufügen, kann der Text weiterhin gezoomt werden. Im Wesentlichen addiert die `vw`-Einheit auf diesen gezoomten Wert:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Dies bedeutet, dass wir die Schriftgröße der Überschrift nur einmal festlegen müssen, anstatt sie für Mobilgeräte zu setzen und in den Media Queries neu zu definieren. Die Schriftgröße erhöht sich dann allmählich, wenn Sie die Größe des Viewports erhöhen.

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

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, werden Sie in der Regel das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Gerätebreite setzen und das Dokument auf 100% seiner beabsichtigten Größe skalieren sollen, wodurch das Dokument in der von Ihnen beabsichtigten mobilen optimierten Größe angezeigt wird.

Warum ist das nötig? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil als Smartphones erstmals erschienen, die meisten Seiten nicht mobil-optimiert waren. Der mobile Browser würde daher die Viewport-Breite auf 980 Pixel setzen, die Seite bei dieser Breite rendern und das Ergebnis als verkleinerte Version des Desktop-Layouts anzeigen. Benutzer konnten in die Seite hineinzoomen und über die Website scrollen, um die Teile zu sehen, die sie interessierten, aber es sah schlecht aus.

Indem Sie `width=device-width` setzen, überschreiben Sie die Standardeinstellungen eines mobilen Geräts, wie Apples Standard `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne dies könnten Ihr responsives Design mit Breakpoints und Media Queries möglicherweise nicht wie beabsichtigt auf mobilen Browsern funktionieren. Wenn Sie ein Layout für schmale Bildschirme haben, das bei einer Viewport-Breite von 480px oder weniger ausgelöst wird, das Gerät jedoch angibt, 980px breit zu sein, wird dieser Benutzer Ihr schmalbildschirm-Layout nicht sehen.

**Sie sollten _immer_ das Viewport-Meta-Tag im Head Ihrer Dokumente einschließen.**

## Zusammenfassung

Responsive Design bezieht sich auf ein Site- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es angezeigt wird. Es umfasst eine Anzahl von CSS- und HTML-Funktionen und -Techniken und ist jetzt im Wesentlichen die Standardmethode zum Erstellen von Websites. Betrachten Sie die Sites, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Site zu stoßen, die die Desktop-Version skaliert herunter ist oder bei der Sie zur Seite scrollen müssen, um Dinge zu finden. Dies liegt daran, dass das Web zu diesem Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs mithilfe der Layoutmethoden zu erreichen, die Sie in diesen Lektionen gelernt haben. Wenn Sie heute neu in der Webentwicklung sind, haben Sie viele mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Daher ist es sinnvoll, das Alter von Materialien zu überprüfen, die Sie verwenden. Während die historischen Artikel immer noch nützlich sind, macht der moderne Einsatz von CSS und HTML es weitaus einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Seite ansieht.

Als nächstes werden wir uns Media Queries im Detail ansehen und zeigen, wie man sie verwendet, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch-Ereignisse](/de/docs/Web/API/Touch_events) ermöglichen die Interpretation von Finger-(oder Stift-)Aktivität auf Touchscreens oder Trackpads und damit die qualitativ hochwertige Unterstützung für komplexe, auf Berührung basierende Benutzeroberflächen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um bei touchfähigen Geräten unterschiedliche CSSs zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
