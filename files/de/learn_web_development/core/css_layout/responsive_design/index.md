---
title: Responsives Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsives Webdesign_ (RWD) ist ein Webdesign-Ansatz, um Webseiten auf allen Bildschirmgrößen und -auflösungen gut darzustellen und gleichzeitig eine gute Benutzerfreundlichkeit zu gewährleisten. Es ist die Art und Weise, für ein Web mit mehreren Geräten zu entwerfen. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die Sie zur Beherrschung verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Styling</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen des Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist — Weblayouts so gestalten, dass sie flexibel sind und gut auf verschiedenen Gerätebildschirmgrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten korrekt anzuzeigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobiles Webdesign

Bevor responsives Webdesign zum Standardansatz wurde, um Websites auf verschiedenen Gerätetypen funktionsfähig zu machen, sprachen Webentwickler über mobiles Webdesign, mobile Webentwicklung oder manchmal über mobilfreundliches Design. Diese sind im Wesentlichen dasselbe wie responsives Webdesign — die Ziele bestehen darin, sicherzustellen, dass Websites auf Geräten mit unterschiedlichen physikalischen Eigenschaften (Bildschirmgröße, Auflösung) in Bezug auf Layout, Inhalte (Text und Medien) und Leistung gut funktionieren.

Der Unterschied liegt hauptsächlich in den involvierten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprach man von Desktop oder Mobilgeräte, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobilgeräte, Tablets, Uhren usw. Anstatt sich auf einige verschiedene Bildschirmgrößen zu konzentrieren, müssen wir jetzt Webseiten defensiv so entwerfen, dass sie gebräuchliche Bildschirmgrößen und -auflösungen sowie Unbekanntes berücksichtigen.
- Mobile Geräte waren früher in Bezug auf CPU/GPU und verfügbare Bandbreite leistungsschwach. Einige unterstützten kein CSS oder sogar HTML, weshalb es üblich war, serverseitiges Browser-Sniffing durchzuführen, um den Gerätetyp/Browsertyp zu bestimmen, bevor dann eine Site bereitgestellt wurde, die das Gerät bewältigen konnte. Mobile Geräte hatten oft wirklich einfache, grundlegende Erlebnisse, da sie nicht mehr bewältigen konnten. Heutzutage können mobile Geräte dieselben Technologien wie Desktop-Computer handhaben, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Benutzern ein geeignetes Erlebnis zu bieten, da es nach wie vor Einschränkungen wie Akkulaufzeit und Bandbreite gibt, die zu beachten sind.
  - Benutzererfahrung ist immer noch ein Thema. Ein mobiler Benutzer einer Reisewebsite möchte vielleicht nur Flugzeiten und Verspätungsinformationen abrufen und nicht mit einem 3D-animierten Globus gezeigt bekommen, der Flugrouten und die Unternehmensgeschichte darstellt.
- Moderne Technologien sind viel besser für die Erstellung von responsiven Erlebnissen geeignet. Zum Beispiel ermöglichen [responsive Bilder/Medientechnologien](#responsive_imagesmedia) es jetzt, geeignete Medien an verschiedene Geräte bereitzustellen, ohne auf Techniken wie serverseitiges Sniffing zurückzugreifen.

## Einführung in responsives Webdesign

HTML ist grundsätzlich responsiv oder _fluid_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster verkleinern, passt der Browser den Text automatisch an das Viewport an.

Obwohl das standardmäßige responsive Verhalten nach keiner Lösung klingt, können lange Textzeilen, die auf einem großen Bildschirm in voller Bildschirmbreite angezeigt werden, schwer lesbar sein. Dieses Problem kann mit CSS gelöst werden, indem z. B. schmale Spalten erstellt werden, um die Zeilenlänge zu begrenzen. Dies kann jedoch neue Probleme für Benutzer schaffen, die ihr Browserfenster verkleinern oder die Site auf einem Mobilgerät anzeigen — die Spalten wirken zusammengedrückt und werden schwerer lesbar.

![Ein Layout mit zwei Spalten, die in ein mobiles Viewport gequetscht sind.](mdn-rwd-liquid.png)

Eine nicht anpassbare Webseite durch Festlegen einer festen Breite funktioniert ebenfalls nicht; das führt zu Scrollbalken auf schmalen Geräten und zu viel leerem Raum auf breiten Bildschirmen.

Responsives Webdesign, oder RWD, ist ein Designansatz, der die gesamte Bandbreite der verfügbaren Geräte und Gerätegrößen berücksichtigt, sodass eine automatische Anpassung an den Bildschirm ermöglicht wird, egal ob die Inhalte auf einem Tablet, Telefon, Fernseher oder einer Uhr betrachtet werden.

Responsives Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um Best Practices zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät, auf dem die Inhalte angezeigt werden, _reagiert_.

Der Begriff _responsive Design_, [von Ethan Marcotte im Jahr 2010 geprägt](https://alistapart.com/article/responsive-web-design/), beschrieb die Verwendung von fluiden Grids, fluiden Bildern und Media Queries, um responsive Inhalte zu erstellen.

Zu dieser Zeit war die Empfehlung die Verwendung von CSS `float` für Layouts und Media Queries, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Fluide Bilder werden so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width`-Eigenschaft auf `100%` gesetzt. Fluide Bilder verkleinern sich, wenn sich die umgebende Spalte verkleinert, wachsen aber nicht über ihre intrinsische Größe hinaus, wenn die Spalte wächst. Dadurch kann ein Bild so skaliert werden, dass es zu seinem Inhalt passt, anstatt ihn zu überlappen, und wird nicht größer und damit pixelig, wenn der Container breiter als das Bild wird.

Moderne CSS-Layout-Methoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in die Webplattform integriert, um das Entwerfen responsiver Sites zu erleichtern.

Der Rest dieses Artikels erklärt die verschiedenen Funktionen der Webplattform, die Sie möglicherweise verwenden möchten, wenn Sie eine responsive Site erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Benutzers größer als eine bestimmte Breite oder Auflösung ist) und wahlweise CSS anzuwenden, um die Seite für die Bedürfnisse des Benutzers angemessen zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedium angezeigt wird (und daher kein gedrucktes Dokument ist) und das Viewport mindestens `80rem` breit ist. Die `.container`-Regel wird nur angewendet, wenn diese beiden Bedingungen zutreffen.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen und Ihr gesamtes Layout oder Teile davon so anpassen, dass sie am besten zu den verschiedenen Bildschirmgrößen passen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout sich ändert, werden als _Breakpoints_ bezeichnet.

Ein gängiger Ansatz bei der Verwendung von Media Queries besteht darin, ein einfaches einspaltiges Layout für Geräte mit schmalem Bildschirm (z. B. Mobiltelefone) zu erstellen und dann für breitere Bildschirme zu überprüfen und ein mehrspaltiges Layout zu implementieren, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben, um es zu bewältigen. Das Entwerfen für Mobilgeräte zuerst wird als **Mobile First**-Design bezeichnet.

Wenn Sie Breakpoints verwenden, wird empfohlen, die Breakpoints für Media Queries mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) anzugeben, anstatt mit absoluten Größen eines bestimmten Geräts.

Es gibt verschiedene Ansätze zu den in einem Media Query-Block definierten Stilen; von der Verwendung von Media Queries, um {{htmlelement("link")}} Stylesheets basierend auf Browsergrößenbereichen zu laden bis hin zur Einbeziehung von benutzerdefinierten Eigenschaftsvariablen, um mit jedem Breakpoint verknüpfte Werte zu speichern.

Media Queries können beim RWD helfen, sind aber keine Voraussetzung. Flexible Grids, relative Einheiten und minimale und maximale Einheitenswerte können ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba bietet ein Tutorial namens [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, das eine interaktive Einführung in Media Queries bietet sowie eine Herausforderung, um zu testen, ob Sie die Grundlagen verstanden haben.

## Responsive Layout-Technologien

Responsive Sites basieren auf flexiblen Grids, das bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts anvisieren müssen.

Durch die Verwendung eines flexiblen Grids können Sie eine Funktion ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Um beispielsweise sicherzustellen, dass die Zeilenlängen nicht unleserlich lang werden, wenn sich die Bildschirmgröße vergrößert, können Sie {{cssxref('columns')}} verwenden; wenn eine Box zusammengedrückt wird und nur zwei Wörter pro Zeile hat, wenn sie sich verengt, können Sie einen Breakpoint setzen.

Mehrere Layout-Methoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind standardmäßig responsiv. Sie alle gehen davon aus, dass Sie versuchen, ein flexibles Grid zu erstellen und bieten einfachere Möglichkeiten, dies zu tun.

### Flexbox

Im Flexbox-Layout schrumpfen oder wachsen Flex-Items und verteilen den Raum zwischen den Items entsprechend dem Platz in ihrem Container. Durch das Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass sich die Items verhalten, wenn ihnen mehr oder weniger Platz zur Verfügung steht.

Im Beispiel unten nehmen die Flex-Items jeweils einen gleichen Platz im Flex-Container ein, wobei die Kurzschreibweise `flex: 1` wie zuvor besprochen verwendet wird (siehe [Flexbox: Flexible Größeneinstellung von Flex-Items](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

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

Ändern Sie die Größe Ihres Browserfensters. Das Layout wird wechseln zwischen einem einspaltigen und einem zweispaltigen Layout, wenn die Größe des obigen Beispiels die `600px`-Breitenschwelle überschreitet.

### CSS Grid

Im CSS-Grid-Layout ermöglicht die `fr`-Einheit die Verteilung des verfügbaren Raums auf Grid-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks der Größe `1fr`. Dies erstellt drei Spalten-Tracks, die jeweils einen Teil des verfügbaren Platzes im Container einnehmen. Sie haben diesen Ansatz bereits betrachtet (siehe [Flexible Grids mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) für eine Wiederholung).

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

Versuchen Sie erneut, Ihr Browserfenster zu ändern — Sie sollten sehen, wie sich das Beispiel-Layout bei der `600px`-Breitenschwelle ändert, genauso wie im vorherigen Beispiel.

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien nie größer sind als ihr responsiver Container, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medien-Elemente, um sicherzustellen, dass sie nie ihre Container überlaufen.

> [!NOTE]
> Die Verwendung eines einzelnen großen Bildes und dessen Herunterskalierung für kleinere Geräte verschwendet Bandbreite, indem Bilder heruntergeladen werden, die größer als erforderlich sind. Es kann auch schlecht aussehen — ein Landschaftsbild zum Beispiel könnte auf einem Breitbildmonitor gut aussehen, aber auf einem mobilen Gerät schwer zu erkennen sein, für das ein Porträtbild besser geeignet wäre. Solche Probleme können mit dem {{htmlelement("picture")}}-Element und den {{htmlelement("img")}}-Attributen `srcset` und `sizes` gelöst werden. Dies sind fortgeschrittene Funktionen, die über den Rahmen dieses Kurses hinausgehen, aber Sie finden eine detaillierte Anleitung unter [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images).

Andere nützliche Tipps:

- Stellen Sie immer sicher, dass Sie ein geeignetes Bildformat für die Bilder Ihrer Website verwenden (wie PNG oder JPG) und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihre Website hochladen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) verwenden, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries innerhalb des Media-Attributs auf {{htmlelement("source")}}-Elementen verwenden, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verschachtelt sind, um passende Video-/Audiodateien für verschiedene Geräte bereitzustellen (responsives Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewport-Einheiten, um niedrigere oder höhere Bildschirmflächen widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Stufe 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß wie unsere Basis-Schriftgröße ist. Das ist eine wirklich große Überschrift! Wir möchten diese riesige Überschrift nur auf größeren Bildschirmen, also geben wir der Überschrift zuerst eine kleinere Größe von `2rem` und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

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

Das nächste Beispiel ist eine modifizierte Version unseres früheren responsiven Grid-Beispiels, das eine responsive Überschrift mit der beschriebenen Methode beinhaltet. Auf mobilen Geräten ist die Überschrift kleiner, aber auf Desktop sehen wir die größere Überschriftgröße:

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

Wie bei den vorherigen Beispielen, versuchen Sie, die Breite des Browserfensters zu ändern und beachten Sie, wie sich nicht nur das Layout bei der `600px`-Schwelle ändert, sondern auch die Überschriftengröße.

Wie dieses Typografieansatz zeigt, müssen Sie Media Queries nicht nur verwenden, um das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element anzupassen, um es bei alternativen Bildschirmgrößen benutzerfreundlicher oder ansprechender zu machen.

### Verwendung von Viewport-Einheiten für responsive Typografie

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne dass Breakpoints mit Media Queries festgelegt werden müssen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass wenn Sie die Schriftgröße mit `vw` festlegen, sie immer zur Größe des Viewports passt.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der obigen Vorgehensweise ist, dass der Benutzer die Fähigkeit verliert, jeglichen Text zu zoomen, der mit der `vw`-Einheit eingestellt ist, da dieser Text immer mit der Größe des Viewports verbunden ist. **Daher sollten Sie Text niemals nur mit Viewport-Einheiten einstellen.**

Es gibt jedoch eine Lösung, und sie beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die `vw`-Einheit zu einem Wert hinzuaddieren, der mit einer festen Größe wie `em`s oder `rem`s festgelegt ist, kann der Text dennoch gezoomt werden. Im Wesentlichen fügt die `vw`-Einheit zu diesem gezoomten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal festlegen müssen, anstatt sie für Mobilgeräte festzulegen und sie in den Media Queries neu zu definieren. Die Schriftgröße erhöht sich dann allmählich, wenn Sie die Größe des Viewports vergrößern.

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

Versuchen Sie, wie zuvor, die Breite des Browserfensters zu ändern und beachten Sie diesmal, wie die Überschriftengröße _allmählich_ zunimmt, wenn sich die Breite ändert.

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, sehen Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)-Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Breite des Geräts setzen und das Dokument auf 100% seiner beabsichtigten Größe skalieren sollen, was das Dokument in der von Ihnen beabsichtigten mobiloptimierten Größe anzeigt.

Warum ist das nötig? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu "lügen".

Dieses Meta-Tag existiert, weil, als Smartphones zuerst aufkamen, die meisten Seiten nicht mobiloptimiert waren. Der mobile Browser würde daher die Viewport-Breite auf 980 Pixel setzen, die Seite in dieser Breite rendern und das Ergebnis als herausgezoomtes Desktop-Layout anzeigen. Benutzer konnten hineinzoomen und über die Website navigieren, um die interessierenden Teile anzuzeigen, aber es sah schlecht aus.

Indem Sie `width=device-width` setzen, überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie die Standardeinstellung des iPhones `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne dass Ihre responsive Designlösung mit Breakpoints und Media Queries auf mobilen Browsern möglicherweise nicht wie beabsichtigt funktioniert. Wenn Sie ein schmales Bildschirmlayout haben, das bei einer Viewport-Breite von 480px oder weniger aktiviert wird, aber das Gerät angibt, dass es 980px breit ist, dann sieht dieser Benutzer nicht Ihr schmales Bildschirmlayout.

**Daher sollten Sie _immer_ das Viewport-Meta-Tag in den Kopfzeilen Ihrer Dokumente einfügen.**

Es gibt eine Reihe anderer Optionen, die Sie innerhalb des `content`-Attributs des Viewport-Meta-Tags setzen können — siehe die [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)-Referenz für weitere Einzelheiten.

## Zusammenfassung

Responsives Design bezieht sich auf ein Website- oder Anwendungsdesign, das auf die Umgebung, in der es betrachtet wird, reagiert. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist im Wesentlichen die Art und Weise, wie wir standardmäßig Webseiten erstellen. Berücksichtigen Sie die Websites, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich eher ungewöhnlich, auf eine Seite zu stoßen, die die herunterskalierte Desktop-Version ist, oder bei der Sie seitwärts scrollen müssen, um Dinge zu finden. Das liegt daran, dass das Web zu diesem Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs mit Hilfe der in diesem Artikel behandelten Layout-Methoden zu erreichen. Wenn Sie heute ein neuer Webentwickler sind, haben Sie viel mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Es ist daher sinnvoll, das Alter der Materialien zu überprüfen, die Sie verwenden. Während historische Artikel immer noch nützlich sind, erleichtert die moderne Verwendung von CSS und HTML die Erstellung eleganter und nützlicher Designs erheblich, unabhängig davon, welches Gerät Ihr Besucher zum Anzeigen der Site verwendet.

Als nächstes werden wir Media Queries im Detail studieren und zeigen, wie man sie verwendet, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch-Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-)Aktivitäten auf Touchscreens oder Trackpads zu interpretieren und damit eine qualitativ hochwertige Unterstützung für komplexe touchbasierte Benutzeroberflächen bereitzustellen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer)- oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer)-Media Queries, um verschiedene CSS auf Touch-fähigen Geräten zu laden.
- [CSS-Tricks-Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Der Karrierepfad des Frontend-Entwicklers](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Frontend-Webentwickler zu sein, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, kompetenten Lehrern und einer unterstützenden Gemeinschaft. Gehen Sie von null zu Ihrem ersten Frontend-Job! Viele der Kurskomponenten sind als eigenständige kostenlose Versionen verfügbar. Dazu gehört ein Modul zu responsivem Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
