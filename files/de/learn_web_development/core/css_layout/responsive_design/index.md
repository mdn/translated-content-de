---
title: Responsive Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 720baf2393c1cbb97d57066fe894c04fec6c75e1
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Webdesign-Ansatz, um Webseiten auf allen Bildschirmgrößen und Auflösungen gut darzustellen und gleichzeitig eine gute Benutzerfreundlichkeit zu gewährleisten. Es ist der Weg, das Web für mehrere Geräte zu gestalten. In diesem Artikel helfen wir Ihnen zu verstehen, welche Techniken verwendet werden können, um es zu beherrschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgebung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundlegende Konzepte des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Was responsives Design ist – das Entwerfen von Weblayouts so, dass sie flexibel sind und gut auf verschiedenen Geräte-Bildschirmgrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und responsive Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsive Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten angemessen anzuzeigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Webdesign für mobile Geräte

Bevor responsives Webdesign der Standardansatz wurde, um Websites auf verschiedenen Gerätetypen funktionieren zu lassen, sprachen Webentwickler vom Webdesign für mobile Geräte, der Webentwicklung für mobile Geräte oder manchmal von mobilfreundlichem Design. Diese Ansätze sind im Grunde das gleiche wie responsives Webdesign – die Ziele sind sicherzustellen, dass Websites auf Geräten mit unterschiedlichen physischen Eigenschaften (Bildschirmgröße, Auflösung) in Bezug auf Layout, Inhalt (Text und Medien) und Leistung gut funktionieren.

Der Unterschied besteht hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprachen wir von Desktop oder Mobilgerät, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobilgeräte, Tablets, Uhren usw. Anstatt einige verschiedene Bildschirmgrößen zu berücksichtigen, müssen wir jetzt Websites defensiv gestalten, um gängige Bildschirmgrößen und Auflösungen sowie Unbekanntes zu berücksichtigen.
- Mobile Geräte waren früher in Bezug auf CPU/GPU und verfügbare Bandbreite leistungsschwach. Einige unterstützten kein CSS oder sogar HTML, und daher war es üblich, serverseitiges Browser-Sniffing durchzuführen, um den Gerätetyp/Browser zu bestimmen, bevor eine Seite bereitgestellt wurde, die das Gerät bewältigen konnte. Mobilgeräte erhielten oft wirklich einfache, grundlegende Erlebnisse, weil sie alles waren, was sie verarbeiten konnten. Heutzutage sind mobile Geräte in der Lage, dieselben Technologien wie Desktop-Computer zu handhaben, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Benutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Batterielebensdauer und Bandbreite gibt, über die man sich Sorgen machen muss.
  - Die Benutzererfahrung ist weiterhin ein Anliegen. Ein mobiler Benutzer einer Reise-Website könnte beispielsweise nur die Flugzeiten und Verzögerungsinformationen überprüfen wollen und nicht mit einem 3D-animierten Globus, der Flugrouten und die Geschichte Ihres Unternehmens zeigt, konfrontiert werden.
- Moderne Technologien sind viel besser geeignet, um responsive Erlebnisse zu schaffen. Beispielsweise ermöglichen [responsive Bilder/Medientechnologien](#responsive_imagesmedia) heute das Bereitstellen geeigneter Medien an verschiedene Geräte, ohne auf Techniken wie serverseitiges Sniffing zurückgreifen zu müssen.

## Einführung in das Responsive Webdesign

HTML ist grundsätzlich responsiv oder _flüssig_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster ändern, passt der Browser den Text automatisch an, um in das Viewport zu passen.

Obwohl das Standardverhalten responsiv erscheint, ist bei langen Textzeilen, die auf einem weiten Monitor über den gesamten Bildschirm angezeigt werden, das Lesen schwierig. Dieses Problem kann mit CSS gelöst werden, indem z. B. schmale Spalten erstellt werden, um die Zeilenlänge zu begrenzen. Das kann jedoch neue Probleme für Benutzer schaffen, die ihr Browserfenster schmaler machen oder die Seite auf einem Mobilgerät ansehen – die Spalten erscheinen gequetscht und werden schwieriger zu lesen.

![Ein Layout mit zwei Spalten, das in ein mobiles Viewport gequetscht ist.](mdn-rwd-liquid.png)

Eine nicht-resizable Webseite zu erstellen, indem eine feste Breite eingestellt wird, funktioniert ebenfalls nicht; das führt zu Scrollbalken auf schmalen Geräten und zu viel leerem Raum auf breiten Bildschirmen.

Responsive Webdesign oder RWD ist ein Designansatz, der die gesamte Bandbreite verfügbarer Geräte und Gerätegrößen anspricht und eine automatische Anpassung an den Bildschirm ermöglicht, egal ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr angesehen wird.

Responsive Webdesign ist keine separate Technologie – es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die dazu verwendet werden, ein Layout zu erstellen, das auf jedes Gerät, welches zum Anzeigen des Inhalts verwendet wird, _reagieren_ kann.

Der Begriff _responsive Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschreibt die Verwendung von flüssigen Rastern, flüssigen Bildern und Medieneinschlüssen, um responsive Inhalte zu erstellen.

Damals war die Empfehlung, CSS `float` für das Layout zu verwenden und Media Queries, um die Browserbreite abzufragen, und so Layouts für verschiedene Breakpoints zu erstellen. Flüssige Bilder werden so eingestellt, dass sie nicht breiter als ihr Container werden; sie haben ihre `max-width` Eigenschaft auf `100%` gesetzt. Flüssige Bilder verkleinern sich, wenn ihre enthaltende Spalte schmaler wird, wachsen jedoch nicht über ihre ursprüngliche Größe hinaus, wenn die Spalte größer wird. Dies ermöglicht es einem Bild, sich zu verkleinern, um in seinen Inhalt zu passen, anstatt ihn zu überfließen, aber nicht größer zu werden und pixelig zu erscheinen, wenn der Container breiter als das Bild wird.

Moderne CSS-Layout-Methoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in die Webplattform integriert, um das Gestalten von responsiven Websites zu erleichtern.

Der restliche Teil dieses Artikels erklärt die verschiedenen Funktionen der Webplattform, die Sie beim Erstellen einer responsiven Website verwenden könnten.

## Medieneinschüsse

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (z.B. ob der Bildschirm des Nutzers breiter ist als eine bestimmte Breite oder Auflösung) und CSS selektiv anzuwenden, um die Seite angemessen für die Bedürfnisse des Nutzers zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedium angezeigt wird (somit kein gedrucktes Dokument) und das Viewport mindestens `80rem` breit ist. Die Regel für `.container` wird nur angewendet, wenn diese beiden Bedingungen zutreffen.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets einfügen und Ihr gesamtes Layout oder Teile davon anpassen, um es bestmöglich an die verschiedenen Bildschirmgrößen anzupassen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout sich ändert, werden als _Breakpoints_ bezeichnet.

Ein üblicher Ansatz beim Verwenden von Media Queries besteht darin, ein einfaches Einkollonen-Layout für Geräte mit schmalem Bildschirm (zum Beispiel Mobiltelefone) zu erstellen, dann für breitere Bildschirme zu prüfen und ein Mehrspalten-Layout zu implementieren, wenn Sie wissen, dass genug Bildschirmbreite vorhanden ist, um es zu handhaben. Das Designen für mobile Geräte zuerst ist als **Mobile-First** Design bekannt.

Wenn Breakpoints verwendet werden, empfiehlt es sich, Media Query-Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) und nicht mit absoluten Größen eines einzelnen Geräts zu definieren.

Es gibt unterschiedliche Ansätze für die in einem Medienabfrageblock definierten Stile, von der Verwendung von Media Queries, um {{htmlelement("link")}} Stylesheets basierend auf Browsergrößenbereichen zu laden, bis hin zum Hinzufügen von benutzerdefinierten Eigenschaftsvariablen, um Werte zu speichern, die mit jedem Breakpoint verbunden sind.

Media Queries können bei RWD helfen, sind aber kein Muss. Flexible Grids, relative Einheiten sowie Minimal- und Maximaleinheitswerte können ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba hat ein Tutorial mit dem Titel [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, das eine interaktive Einführung in Media Queries bietet, sowie eine Herausforderung, um zu prüfen, ob Sie die Grundlagen verstehen.

## Responsive Layout-Technologien

Responsiv gestaltete Websites basieren auf flexiblen Grids, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit Pixel-perfekten Layouts anvisieren müssen.

Durch die Verwendung eines flexiblen Grids können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel, um sicherzustellen, dass Zeilenlängen nicht unlesbar lang werden, wenn die Bildschirmgröße zunimmt, können Sie {{cssxref('columns')}} verwenden; wenn ein Kasten mit zwei Wörtern pro Zeile gequetscht wird, wenn er schmaler wird, können Sie einen Breakpoint festlegen.

Mehrere Layout-Methoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind von Natur aus responsive. Sie gehen alle davon aus, dass Sie versuchen, ein flexibles Grid zu erstellen, und geben Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Items und verteilen den Raum zwischen den Items entsprechend dem Platz in ihrem Container. Durch das Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass die Items sich verhalten, wenn sie mehr oder weniger Platz um sich herum haben.

Im folgenden Beispiel nehmen die Flex-Items jeweils den gleichen Raum im Flex-Container ein, indem die Abkürzung `flex: 1` wie zuvor besprochen verwendet wird (siehe [Flexbox: Flexible sizing of flex items](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

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

Passen Sie Ihr Browserfenster an. Das Layout wird sich zwischen einem Einkollonen- und einem Zweikollonen-Layout ändern, wenn die Größe des obigen Beispiels die `600px`-Breitenschwelle überschreitet.

### CSS Grid

Im CSS Grid Layout ermöglicht es die `fr`-Einheit, den verfügbaren Raum über Gitterbahnen zu verteilen. Das nächste Beispiel erstellt einen Grid-Container mit drei aus jeweils `1fr` bemessenen Bahnen. Dies erzeugt drei Spaltenbahnen, die jeweils einen Teil des verfügbaren Raums im Container einnehmen. Sie haben diesen Ansatz bereits betrachtet (siehe [Flexible Grids mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) für eine Wiederholung).

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

Passen Sie erneut Ihr Browserfenster an – Sie sollten beobachten, wie sich das Beispiel-Layout bei der `600px`-Breitenschwelle ändert, ähnlich wie im vorherigen Beispiel.

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien niemals größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medienelemente so, dass sie niemals ihre Container überschreiten.

> [!NOTE]
> Die Verwendung eines einzigen großen Bildes und dessen Herunterskalieren, um es an kleine Geräte anzupassen, verschwendet Bandbreite, indem Bilder heruntergeladen werden, die größer als nötig sind. Es kann auch schlecht aussehen – ein querformatiges Bild sieht auf einem Breitbildmonitor vielleicht gut aus, könnte aber auf einem Mobilgerät schwer zu erkennen sein, das besser zu einem hochformatigen Bild passen würde. Solche Probleme können durch die Verwendung des {{htmlelement("picture")}}-Elements und der {{htmlelement("img")}} `srcset` und `sizes` Attribute gelöst werden. Diese sind fortgeschrittene Features, die über den Rahmen dieses Kurses hinausgehen, doch Sie finden einen detaillierten Leitfaden unter [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images).

Weitere nützliche Tipps:

- Verwenden Sie stets ein entsprechendes Bildformat für Ihre Website-Bilder (z. B. PNG oder JPG), und stellen Sie sicher, dass Sie die Dateigröße mit einem Grafikeditor optimieren, bevor Sie sie auf Ihre Website hochladen.
- Sie können CSS-Features wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) nutzen, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries innerhalb des Medienattributs auf {{htmlelement("source")}}-Elementen verschachtelt innerhalb von {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verwenden, um Video/Audio-Dateien je nach Gerät als angemessen bereitzustellen (responsives Video/Audio).

## Responsive Typographie

Responsive Typographie beschreibt das Ändern der Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewport-Einheiten, um geringere oder größere Mengen an Bildschirmfläche widerzuspiegeln.

### Verwenden von Media Queries für Responsive Typographie

In diesem Beispiel wollen wir unsere Ebene-1-Überschrift auf `4rem` setzen, was bedeutet, dass sie viermal so groß wie unsere Basis-Schriftgröße ist. Das ist eine wirklich große Überschrift! Wir möchten diese riesige Überschrift nur auf größeren Bildschirmgrößen haben, daher geben wir der Überschrift zuerst eine kleinere Größe von `2rem`, und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

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

Das nächste Beispiel ist eine abgeänderte Version unseres früheren responsiven Grid-Beispiels, das eine responsive Überschrift mit der beschriebenen Methode enthält. Auf mobilen Geräten ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriften-Größe:

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

Wie bei den vorherigen Beispielen: Versuchen Sie, die Breite des Browserfensters zu ändern, und beachten Sie, dass sich nicht nur das Layout bei der `600px`-Breitenschwelle ändert, sondern auch die Überschriften-Größe.

Da dieser Ansatz für Typografie zeigt, müssen Sie Media Queries nicht darauf beschränken, nur das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element anzupassen, um es bei alternativen Bildschirmgrößen benutzerfreundlicher oder attraktiver zu machen.

### Verwenden von Viewport-Einheiten für Responsive Typographie

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typographie zu ermöglichen, ohne dass Breakpoints mit Media Queries festgelegt werden müssen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` festlegen, sie immer in Bezug auf die Größe des Viewports stehen wird.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem dabei ist, dass der Benutzer die Fähigkeit verliert, Text zu vergrößern, der mit der `vw`-Einheit gesetzt ist, da dieser Text immer in Bezug auf die Größe des Viewports steht. **Daher sollten Sie niemals Text allein mit Viewport-Einheiten setzen**.

Es gibt eine Lösung, und sie beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die `vw`-Einheit zu einem Wert hinzufügen, der mit einer festen Größe wie `em`s oder `rem`s festgelegt wurde, dann wird der Text dennoch vergrößerbar. Im Wesentlichen fügt die `vw`-Einheit über diesen vergrößerten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal festlegen müssen, anstatt sie für Mobilgeräte einzurichten und in den Media Queries neu zu definieren. Die Schrift passt sich dann allmählich an, wenn Sie die Größe des Viewports erhöhen.

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

Versuchen Sie, das Browserfenster anzupassen, wie zuvor, und beachten Sie, wie dieses Mal die Überschriftsgröße _allmählich_ zunimmt, wenn sich die Breite ändert.

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, werden Sie üblicherweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Breite des Geräts einstellen sollten und das Dokument auf 100% seiner beabsichtigten Größe skalieren sollten, was das Dokument in der von Ihnen vorgesehenen mobilen Optimierung zeigt.

Warum ist dies notwendig? Weil mobile Browser dazu tendieren, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil, als Smartphones erstmals erschienen, die meisten Seiten nicht mobil optimiert waren. Der mobile Browser setzte daher die Viewport-Breite auf 980 Pixel, rendert die Seite in dieser Breite und zeigt das Ergebnis als herausgezoomte Version des Desktop-Layouts. Benutzer konnten hereinzoomen und über die Website scrollen, um die Teile zu sehen, die sie interessierten, aber es sah schlecht aus.

Indem `width=device-width` gesetzt wird, überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie die Standardbreite des iPhone von `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne sie könnte es passieren, dass Ihr responsives Design mit Breakpoints und Media Queries auf mobilen Browsern nicht wie beabsichtigt funktioniert. Wenn Sie ein Layout für schmale Bildschirme haben, das bei einer Viewport-Breite von 480px oder weniger greift, aber das Gerät behauptet, 980px breit zu sein, wird dieser Benutzer Ihr schmaleres Bildschirm-Layout nicht sehen.

**Deshalb sollten Sie _immer_ das Viewport-Meta-Tag in den Head Ihrer Dokumente einfügen.**

Es gibt eine Reihe weiterer Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags einfügen können — sehen Sie in [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element) für weitere Details.

## Zusammenfassung

Responsive Design bezieht sich auf ein Seiten- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es angezeigt wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und Techniken und ist im Wesentlichen, wie wir Websites standardmäßig erstellen. Betrachten Sie die Websites, die Sie auf Ihrem Telefon besuchen – es ist wahrscheinlich, dass es eher ungewöhnlich ist, auf eine Site zu stoßen, die nur eine herunterskalierte Version des Desktop-Layouts ist oder bei der Sie seitlich scrollen müssen, um Dinge zu finden. Dies liegt daran, dass das Web zu diesem Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs mithilfe der in diesem Artikel behandelten Layout-Methoden zu erreichen. Wenn Sie heute neu in der Webentwicklung sind, haben Sie viel mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Daher lohnt es sich, das Alter jeglicher Materialien zu prüfen, die Sie verwenden. Während die historischen Artikel weiterhin nützlich sind, erleichtert die moderne Verwendung von CSS und HTML das Erstellen eleganter und nützlicher Designs erheblich, unabhängig davon, mit welchem Gerät Ihr Besucher die Website ansieht.

Als Nächstes betrachten wir Media Queries im Detail und zeigen, wie sie verwendet werden können, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivität auf Touchscreens oder Trackpads zu interpretieren und damit eine qualitative Unterstützung für komplexe Touch-basierte Benutzeroberflächen zu ermöglichen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um auf Touch-fähigen Geräten unterschiedliche CSS zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Der Frontend-Developer-Karrierepfad](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Frontend-Webentwickler zu sein, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, wissensvollen Lehrern und einer unterstützenden Gemeinschaft. Gehen Sie von null bis zur Landung Ihres ersten Frontend-Jobs! Viele der Kurskomponenten sind als eigenständige kostenlose Versionen verfügbar. Dazu gehört ein Modul zum responsiven Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
