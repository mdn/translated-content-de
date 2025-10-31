---
title: Responsives Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsives Webdesign_ (RWD) ist ein Ansatz zur Gestaltung von Webseiten, der darauf abzielt, dass Webseiten auf allen Bildschirmgrößen und Auflösungen gut angezeigt werden, während gleichzeitig eine gute Benutzerfreundlichkeit gewährleistet wird. Es ist der Weg, für ein Web mit mehreren Geräten zu entwerfen. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die verwendet werden können, um diesen Ansatz zu beherrschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftartstilierung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundlegende Konzepte des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist — Gestaltung von Weblayouts so, dass sie flexibel sind und gut auf verschiedenen Gerätebildschirmgrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich mobile-first und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, damit Webdokumente auf mobilen Geräten angemessen angezeigt werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobiles Webdesign

Bevor responsives Webdesign zum Standardansatz wurde, um sicherzustellen, dass Websites auf verschiedenen Gerätetypen funktionieren, sprachen Webentwickler oft über mobiles Webdesign, mobile Webentwicklung oder manchmal mobile-freundliches Design. Diese Begriffe sind im Wesentlichen das Gleiche wie responsives Webdesign — die Ziele sind sicherzustellen, dass Websites in Bezug auf Layout, Inhalt (Text und Medien) und Leistung gut auf Geräten mit unterschiedlichen physischen Merkmalen (Bildschirmgröße, Auflösung) funktionieren.

Der Unterschied besteht hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprach man von Desktop oder Mobilgeräten, aber heute gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, mobil, Tablets, Uhren usw. Anstatt für einige wenige Bildschirmgrößen zu gestalten, müssen wir jetzt Seiten defensiv gestalten, um die üblichen Bildschirmgrößen und -auflösungen sowie Unbekanntes zu berücksichtigen.
- Mobile Geräte waren früher leistungsschwächer in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten weder CSS noch HTML, und daher war es üblich, serverseitiges Browser-Sniffing durchzuführen, um den Gerätetyp/Browser zu bestimmen, bevor dann eine Seite bereitgestellt wurde, die das Gerät bewältigen konnte. Mobilgeräte hatten oft wirklich einfache, grundlegende Benutzererlebnisse, da dies alles war, was sie bewältigen konnten. Heutzutage können Mobilgeräte dieselben Technologien wie Desktop-Computer handhaben, sodass solche Techniken seltener geworden sind.
  - Sie sollten die in diesem Artikel besprochenen Techniken dennoch verwenden, um mobilen Benutzern eine geeignete Erfahrung zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt, um die Sie sich kümmern müssen.
  - Die Benutzererfahrung ist immer noch von Bedeutung. Ein mobiler Nutzer einer Reise-Website möchte vielleicht nur Flugzeiten und Verspätungsinformationen überprüfen und nicht mit einem 3D-animierten Globus mit Flugpfaden und Ihrer Unternehmensgeschichte konfrontiert werden.
- Moderne Technologien sind viel besser für die Erstellung von responsiven Erlebnissen geeignet. Zum Beispiel ermöglichen es [responsive Bild-/Medientechnologien](#responsive_imagesmedia) jetzt, geeignete Medien an verschiedene Geräte auszuliefern, ohne sich auf Techniken wie serverseitiges Sniffing verlassen zu müssen.

## Einführung in das responsive Webdesign

HTML ist grundsätzlich responsiv oder _flüssig_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster verkleinern, wird der Browser den Text automatisch neu anordnen, um in das Anzeigefenster zu passen.

Während das standardmäßige responsive Verhalten nach einer Lösung ohne Anpassung klingt, können lange Textzeilen, die auf einem breiten Monitor im Vollbildmodus angezeigt werden, schwer zu lesen sein. Dieses Problem kann mit CSS gelöst werden, z.B. durch Erstellen schmaler Spalten, um die Zeilenlänge zu begrenzen. Dies kann jedoch neue Probleme für Benutzer verursachen, die ihr Browserfenster verkleinern oder die Seite auf einem mobilen Gerät anzeigen — die Spalten werden gequetscht und schwerer lesbar.

![Ein Layout mit zwei Spalten, die auf eine mobile Größe gequetscht sind.](mdn-rwd-liquid.png)

Das Erstellen einer nicht-responsiven Webseite durch Festlegung einer festen Breite funktioniert ebenfalls nicht; das führt zu Scrollleisten auf schmalen Geräten und zu viel leerem Raum auf breiten Bildschirmen.

Responsives Webdesign oder RWD ist ein Gestaltungsansatz, der die gesamte Bandbreite der verfügbaren Geräte und Gerätegrößen anspricht und eine automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr angezeigt wird.

Responsives Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die dazu verwendet werden, ein Layout zu erstellen, das auf jedes Gerät reagieren kann, mit dem die Inhalte betrachtet werden.

Der Begriff _responsive design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschreibt die Verwendung von flüssigen Grids, flüssigen Bildern und Media Queries, um responsive Inhalte zu erstellen.

Damals war die Empfehlung, CSS `float` für das Layout und Media Queries zu verwenden, um die Browserbreite abzufragen, um Layouts für verschiedene Breakpoints zu erstellen. Flüssige Bilder werden so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben die Eigenschaft `max-width` auf `100%` gesetzt. Flüssige Bilder verkleinern sich, wenn sich ihre Spalte verengt, wachsen jedoch nicht über ihre intrinsische Größe hinaus, wenn die Spalte größer wird. Dadurch kann ein Bild sich verkleinern, um in den Inhalt zu passen, ohne ihn zu überlaufen, aber nicht größer werden und pixelig werden, wenn der Container breiter wird als das Bild.

Moderne CSS-Layoutmethoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in die Webplattform integriert, um das Design von responsiven Seiten einfacher zu machen.

Der Rest dieses Artikels wird die verschiedenen Webplattform-Funktionen erklären, die Sie verwenden könnten, wenn Sie eine responsive Seite erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Benutzers breiter als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite entsprechend den Bedürfnissen des Benutzers zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedium angezeigt wird (also kein gedrucktes Dokument) und der Anzeigebereich mindestens `80rem` breit ist. Die `.container`-Regel wird nur angewendet, wenn diese beiden Bedingungen wahr sind.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen und Ihr gesamtes Layout oder Teile davon anpassen, um am besten zu den verschiedenen Bildschirmgrößen zu passen. Die Punkte, an denen ein Media Query eingeführt wird und sich das Layout ändert, werden als _Breakpoints_ bezeichnet.

Ein häufiger Ansatz beim Einsatz von Media Queries ist es, ein einfaches einspaltiges Layout für Geräte mit schmalem Bildschirm (zum Beispiel Mobiltelefone) zu erstellen und dann für breitere Bildschirme zu überprüfen, ob genügend Bildschirmbreite vorhanden ist, um ein mehrspaltiges Layout zu implementieren. Das Design für mobile Geräte zuerst wird als **mobile-first** Design bezeichnet.

Wenn Sie Breakpoints verwenden, empfehlen Best Practices, die Definition von Media Query Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) statt mit absoluten Größen eines einzelnen Geräts.

Es gibt verschiedene Ansätze für die innerhalb eines Media-Query-Blocks definierten Stile; dies reicht von der Verwendung von Media Queries zum {{htmlelement("link")}} von Stylesheets basierend auf Browsergrößenbereichen bis hin zum Einfügen von benutzerdefinierten Eigenschaftsvariablen, um Werte zu speichern, die mit jedem Breakpoint verbunden sind.

Media Queries können bei RWD helfen, sind jedoch keine Voraussetzung. Flexible Grids, relative Einheiten und minimale und maximale Einheitengrößen können ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba bietet ein Tutorial namens [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an, das eine interaktive Einführung in Media Queries sowie eine Herausforderung zur Überprüfung Ihrer Grundkenntnisse bietet.

## Responsive Layout-Technologien

Responsives Design basiert auf flexiblen Grids, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts ansprechen müssen.

Mit einem flexiblen Grid können Sie eine Funktion ändern oder einen Breakpoint hinzufügen und das Design anpassen, sobald der Inhalt schlecht aussieht. Beispielsweise können Sie {{cssxref('columns')}} verwenden, um sicherzustellen, dass Zeilenlängen nicht unlesbar lang werden, wenn die Bildschirmgröße zunimmt; wenn ein Kasten mit zwei Wörtern pro Zeile gequetscht wird, können Sie einen Breakpoint setzen.

Mehrere Layoutmethoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind standardmäßig responsiv. Sie gehen davon aus, dass Sie versuchen, ein flexibles Raster zu erstellen, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente und verteilen den Raum zwischen den Elementen entsprechend dem Raum in ihrem Container. Durch Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie sich die Elemente verhalten sollen, wenn sie auf mehr oder weniger Raum stoßen.

Im folgenden Beispiel nimmt jedes Flex-Element den gleichen Raum im Flex-Container ein, wobei die Kurzschrift von `flex: 1` verwendet wird, wie zuvor besprochen (siehe [Flexbox: Flexible Sizing of Flex Items](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

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

Ändern Sie die Größe des Browserfensters. Das Layout wechselt zwischen einem einspaltigen und einem zweispaltigen Layout, wenn die Größe des obigen Beispiels die `600px`-Breitenschwelle überschreitet.

### CSS Grid

Im CSS-Grid-Layout ermöglicht die Einheit `fr` die Verteilung des verfügbaren Raums über Grid-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks, die auf `1fr` festgelegt sind. Dies wird drei Spaltentracks erstellen, wobei jeder einen Teil des verfügbaren Raums im Container einnimmt. Dieses Vorgehen wurde bereits betrachtet (siehe [Flexible grids with the fr unit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) zur Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

So könnten wir das Grid-Layout mit einer Media Query für responsives Design verwenden.

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

Versuchen Sie erneut, die Größe Ihres Browserfensters zu ändern — Sie sollten sehen, wie sich das Beispiel-Layout an der `600px`-Breitenschwelle ändert, auf die gleiche Weise wie im vorherigen Beispiel.

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien niemals größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medienelemente, um sicherzustellen, dass sie nie ihre Container überlaufen.

> [!NOTE]
> Die Verwendung eines einzigen großen Bildes und das Herunterskalieren für kleine Geräte verschwendet Bandbreite, indem Bilder heruntergeladen werden, die größer als erforderlich sind. Es kann auch schlecht aussehen — ein Landschaftsbild könnte auf einem Breitbildmonitor gut aussehen, kann jedoch auf einem mobilen Gerät schwer erkennbar sein, das besser für ein Portraitbild geeignet wäre. Solche Probleme können durch die Verwendung des {{htmlelement("picture")}}-Elements und der {{htmlelement("img")}}-Attribute `srcset` und `sizes` gelöst werden. Diese sind erweiterte Funktionen, die den Rahmen dieses Kurses sprengen, aber Sie finden einen detaillierten Leitfaden unter [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images).

Weitere nützliche Tipps:

- Achten Sie immer darauf, ein geeignetes Bildformat für Ihre Website-Bilder zu verwenden (wie PNG oder JPG), und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihrer Website veröffentlichen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/Reference/Properties/box-shadow) verwenden, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries innerhalb des Media-Attributs auf {{htmlelement("source")}}-Elementen, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verschachtelt sind, verwenden, um Video-/Audiodateien für verschiedene Geräte bereitzustellen (responsives Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Anzeigefenstereinheiten, um kleinere oder größere Bildschirmflächen widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Ebene 1 auf `4rem` festlegen, das bedeutet, dass sie viermal so groß wie unsere Basis-Schriftgröße sein wird. Das ist eine wirklich große Überschrift! Wir möchten diese jumbo Überschrift nur auf größeren Bildschirmgrößen, deshalb geben wir der Überschrift zuerst eine kleinere Größe von `2rem` und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

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

Das nächste Beispiel ist eine modifizierte Version unseres früheren responsiven Grid-Beispiels, das eine responsive Überschrift mit der oben beschriebenen Methode beinhaltet. Auf mobilen Geräten ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschrift:

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

Wie in den vorherigen Beispielen, versuchen Sie, die Breite des Browserfensters zu ändern und beachten Sie, dass nicht nur das Layout sich bei der `600px`-Breitenschwelle ändert, sondern auch die Schriftgröße der Überschrift.

Wie dieses Vorgehen zur Typografie zeigt, müssen Sie Media Queries nicht nur auf das Ändern des Layouts der Seite beschränken. Sie können verwendet werden, um jedes Element zu optimieren, um es bei verschiedenen Bildschirmgrößen benutzerfreundlicher oder ansprechender zu machen.

### Verwendung von Anzeigefenstereinheiten für responsive Typografie

Anzeigefenstereinheiten `vw` können ebenfalls verwendet werden, um responsive Typografie zu ermöglichen, ohne Breakpoints mit Media Queries festlegen zu müssen. `1vw` entspricht einem Prozent der Anzeigefensterbreite, das bedeutet, wenn Sie Ihre Schriftgröße mit `vw` festlegen, wird sie immer in Bezug auf die Größe des Anzeigefensters stehen.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei dieser Vorgehensweise ist, dass der Benutzer die Möglichkeit verliert, jeglichen Text, der mit der `vw`-Einheit festgelegt ist, zu zoomen, da dieser Text immer in Bezug auf die Größe des Anzeigefensters steht. **Deshalb sollten Sie niemals Text lediglich mit Anzeigefenstereinheiten festlegen**.

Es gibt eine Lösung, die die Verwendung von [`calc()`](/de/docs/Web/CSS/calc) involviert. Wenn Sie die `vw`-Einheit zu einem Wert, der mit einer festen Größe wie `em`s oder `rem`s festgelegt ist, hinzufügen, kann der Text trotzdem gezoomt werden. Im Wesentlichen fügt die `vw`-Einheit auf diesen gezoomten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal angeben müssen, anstatt sie für Mobilgeräte festzulegen und in den Media Queries neu zu definieren. Die Schriftgröße erhöht sich dann allmählich, wenn Sie die Anzeigefenstergröße vergrößern.

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

Versuchen Sie, wie zuvor, das Browserfenster neu zu skalieren, und beachten Sie, wie dieses Mal die Schriftgröße der Überschrift _allmählich_ zunimmt, während sich die Breite ändert.

## Der Viewport Meta Tag

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, sehen Sie normalerweise den folgenden {{htmlelement("meta")}}-Tag im `<head>` des Dokuments.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Anzeigefensters auf die Breite des Geräts einstellen und das Dokument auf 100% seiner beabsichtigten Größe skalieren sollen, was das Dokument in der von Ihnen gewünschten mobilen Größe anzeigt.

Warum ist das notwendig? Weil mobile Browser dazu neigen, über ihre Anzeigefensterbreite zu lügen.

Dieses Meta-Tag existiert, weil als Smartphones erstmals erschienen, die meisten Seiten nicht für mobile Geräte optimiert waren. Der mobile Browser würde daher die Anzeigefensterbreite auf 980 Pixel setzen, die Seite in dieser Breite rendern und das Ergebnis als verkleinerte Version des Desktop-Layouts anzeigen. Benutzer konnten hereinzoomen und sich durch die Website bewegen, um die interessierenden Teile zu sehen, aber es sah schlecht aus.

Durch das Setzen von `width=device-width` überschreiben Sie den Standard eines mobilen Geräts, wie den Standard `width=980px` des iPhones, mit der tatsächlichen Breite des Geräts. Ohne dieses Tag funktioniert Ihr responsives Design mit Breakpoints und Media Queries auf mobilen Browsern möglicherweise nicht wie vorgesehen. Wenn Sie ein Layout für einen schmalen Bildschirm haben, das bei 480px Anzeigefensterbreite oder weniger eintritt, aber das Gerät vorgibt, 980px breit zu sein, wird dieser Benutzer nicht Ihr schmaleres Layout sehen.

**Deshalb sollten Sie _immer_ das Viewport Meta-Tag im Kopf Ihrer Dokumente einfügen.**

Es gibt eine Reihe weiterer Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags einfügen können — siehe die [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Referenz für weitere Details.

## Zusammenfassung

Responsives Design bezieht sich auf ein Webseitendesign oder Applikationsdesign, das auf die Umgebung, in der es angesehen wird, reagiert. Es umfasst eine Vielzahl von CSS- und HTML-Funktionen und Techniken und ist im Wesentlichen, wie wir Websites standardmäßig erstellen. Betrachten Sie die Seiten, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Seite zu stoßen, die die verkleinerte Desktop-Version ist oder bei der Sie seitwärts scrollen müssen, um Dinge zu finden. Dies liegt daran, dass das Web zu diesem Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs mit Hilfe der in diesem Artikel behandelten Layoutmethoden zu erreichen. Wenn Sie heute neu im Bereich der Webentwicklung sind, haben Sie viele mehr Werkzeuge zu Ihrer Verfügung als in den frühen Tagen des responsiven Designs. Deshalb lohnt es sich, das Alter des Materials, das Sie verwenden, zu überprüfen. Während historische Artikel immer noch nützlich sind, macht die moderne Verwendung von CSS und HTML das Erstellen eleganter und nützlicher Designs, egal welches Gerät Ihr Besucher verwendet, wesentlich einfacher.

Als Nächstes werden wir uns Media Queries ausführlicher anschauen und zeigen, wie Sie sie verwenden können, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivität auf Touchscreens oder Trackpads zu interpretieren, was eine qualitativ hochwertige Unterstützung für komplexe berührungsbasierte Benutzeroberflächen ermöglicht.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um verschiedene CSS-Styles für Geräte mit Touch-Unterstützung zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Der Karrierepfad für Frontend-Entwickler](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Frontend-Webentwickler zu werden, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, kenntnisreichen Lehrern und einer unterstützenden Community. Gehen Sie von Null an bis zum ersten Job als Frontend-Entwickler! Viele der Kurskomponenten sind als eigenständige kostenlose Versionen verfügbar. Dazu gehört ein Modul zum responsiven Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
