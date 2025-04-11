---
title: Responsive Design
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Ansatz im Webdesign, um sicherzustellen, dass Webseiten auf allen Bildschirmgrößen und Auflösungen gut dargestellt werden, während eine gute Benutzerfreundlichkeit gewährleistet bleibt. Es ist der Weg, um für ein multidispositives Web zu gestalten. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die zur Beherrschung dessen eingesetzt werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist — Weblayouts so zu gestalten, dass sie flexibel sind und auf verschiedenen Bildschirmgrößen, bei unterschiedlichen Auflösungen usw. gut funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten angemessen darzustellen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobiles Webdesign

Bevor responsives Webdesign zum Standardansatz wurde, um Websites auf verschiedenen Gerätetypen funktionsfähig zu machen, sprachen Webentwickler oft über mobiles Webdesign, mobile Webentwicklung oder manchmal auch mobilfreundliches Design. Diese sind im Wesentlichen mit responsivem Webdesign identisch — die Ziele sind sicherzustellen, dass Websites in Bezug auf Layout, Inhalt (Text und Medien) und Leistung bei Geräten mit unterschiedlichen physischen Attributen (Bildschirmgröße, Auflösung) gut funktionieren.

Der Unterschied bezieht sich hauptsächlich auf die involvierten Geräte und die verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprach man von Desktop oder Mobilgerät, aber heutzutage gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobilgeräte, Tablets, Uhren usw. Anstatt nur für einige wenige Bildschirmgrößen zu gestalten, müssen wir nun defensiv gestalten, um gängige Bildschirmgrößen und Auflösungen sowie Unbekannte abzudecken.
- Mobile Geräte waren früher in Bezug auf CPU/GPU-Leistung und verfügbare Bandbreite schwach. Einige unterstützten weder CSS noch HTML, und daher war es üblich, serverseitiges Browser-Sniffing durchzuführen, um den Geräte-/Browser-Typ zu ermitteln, bevor eine Website bereitgestellt wurde, die das Gerät bewältigen konnte. Mobile Geräte hatten oft sehr einfache, grundlegende Erlebnisse, weil es alles war, was sie verarbeiten konnten. Heutzutage können mobile Geräte dieselben Technologien wie Desktop-Computer bewältigen, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel diskutierten Techniken verwenden, um mobilen Benutzern ein geeignetes Erlebnis zu bieten, da immer noch Einschränkungen wie Akkulaufzeit und Bandbreite existieren.
  - Die Benutzererfahrung ist auch ein Anliegen. Ein mobiler Benutzer einer Reiseseite möchte möglicherweise nur die Flugzeiten und Verspätungsinformationen überprüfen und nicht mit einem 3D-animierten Globus, der die Flugrouten und die Firmengeschichte zeigt, konfrontiert werden. Solche Dinge können jedoch mit responsiven Designtechniken gehandhabt werden.
- Moderne Technologien eignen sich viel besser für die Erstellung responsiver Erlebnisse. Zum Beispiel erlauben [responsive Bild-/Medientechnologien](#responsive_bildermedia) jetzt, dass geeignete Medien an verschiedene Geräte geliefert werden, ohne dass Techniken wie serverseitiges Sniffing angewendet werden müssen.

## Einführung in das responsive Webdesign

HTML ist grundsätzlich responsiv oder _fließend_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster verkleinern, passt der Browser den Text automatisch an die Größe des Viewports an.

Obwohl das standardmäßige responsive Verhalten wie keine Lösung klingt, können lange Textzeilen, die auf einem breiten Monitor bildschirmfüllend dargestellt werden, schwer lesbar sein. Wenn die Zeilenlänge mit CSS auf einem Breitbildschirm reduziert wird, z. B. durch Erstellen von Spalten oder Hinzufügen von erheblichen Abständen, könnte die Webseite für den Benutzer, der sein Browserfenster verkleinert oder die Seite auf einem mobilen Gerät öffnet, gequetscht aussehen.

![Ein Layout mit zwei Spalten, das in eine mobile Viewportgröße gequetscht ist.](mdn-rwd-liquid.png)

Eine nicht-resizable Webseite durch Festlegen einer festen Breite funktioniert ebenfalls nicht; das führt auf schmalen Geräten zu Scrollbalken und auf breiten Bildschirmen zu viel Leerraum.

Responsives Webdesign oder RWD ist ein Designansatz, der die Vielfalt an Geräten und Gerätegrößen anspricht und eine automatische Anpassung an den Bildschirm ermöglicht, egal ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr betrachtet wird.

Responsives Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät _reagieren_ kann, das verwendet wird, um den Inhalt anzusehen.

Der Begriff _responsive design_ wurde [2010 von Ethan Marcotte geprägt](https://alistapart.com/article/responsive-web-design/) und beschreibt die Verwendung von flüssigen Rastern, flüssigen Bildern und Media Queries, um responsive Inhalte zu erstellen.

Damals war die Empfehlung, CSS `float` für Layouts und Media Queries zu verwenden, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Flüssige Bilder sind so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; ihr `max-width`-Eigenschaft ist auf `100%` gesetzt. Flüssige Bilder verkleinern sich, wenn sich ihre umschließende Spalte verengt, wachsen jedoch nicht über ihre inhärente Größe hinaus, wenn die Spalte größer wird. Dies ermöglicht es einem Bild, sich an seinen Container anzupassen, ohne ihn zu überlaufen, aber nicht größer zu werden und pixelig zu erscheinen, wenn der Container breiter als das Bild wird.

Moderne CSS-Layout-Methoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir zahlreiche Funktionen in die Webplattform integriert, um das Entwerfen responsiver Seiten zu erleichtern.

Der Rest dieses Artikels wird Sie zu den verschiedenen Funktionen der Webplattform führen, die Sie verwenden könnten, wenn Sie eine responsive Seite erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) erlauben es uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Benutzers größer als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite entsprechend den Bedürfnissen des Benutzers zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedium (daher kein gedrucktes Dokument) angezeigt wird und der Viewport mindestens `80rem` breit ist. Das CSS für den `.container`-Selektor wird nur angewendet, wenn diese beiden Dinge wahr sind.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries in einem Stylesheet hinzufügen und Ihr gesamtes Layout oder Teile davon anpassen, um die verschiedenen Bildschirmgrößen optimal zu nutzen. Die Punkte, an denen eine Media Query eingeführt wird und sich das Layout ändert, werden als _Breakpoints_ bezeichnet.

Ein gängiger Ansatz bei der Verwendung von Media Queries ist es, ein einfaches einspaltiges Layout für schmale Bildschirmgeräte (zum Beispiel Mobiltelefone) zu erstellen und dann für breitere Bildschirme zu überprüfen und ein mehrspaltiges Layout zu implementieren, wenn Sie wissen, dass Sie genug Bildschirmbreite haben, um es zu handhaben. Das Gestalten von Mobile-First ist als **Mobile-First-Design** bekannt.

Best Practices bei der Verwendung von Breakpoints ermutigen dazu, Media Query Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) zu definieren anstatt absolute Größen eines einzelnen Geräts.

Es gibt verschiedene Ansätze für die in einem Media Query-Block definierten Stile; von der Verwendung von Media Queries, um Stylesheet-Verknüpfungen basierend auf Browsergrößenbereichen zu erstellen, bis zur bloßen Verwendung von benutzerdefinierten Eigenschaftenvariablen, um Werte zu speichern, die mit jedem Breakpoint verbunden sind.

Media Queries können beim RWD helfen, sind aber nicht zwingend erforderlich. Flexible Raster, relative Einheiten und minimale sowie maximale Einheitswerte können ohne Media Queries verwendet werden.

## Responsives Layout mit Technologien

Responsive Seiten sind auf flexiblen Rastern aufgebaut, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts ansprechen müssen.

Durch die Verwendung eines flexiblen Rasters können Sie eine Funktion ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel können Sie, um sicherzustellen, dass die Zeilenlängen nicht unleserlich lang werden, wenn die Bildschirmgröße zunimmt, {{cssxref('columns')}} verwenden; wenn ein Feld mit zwei Wörtern pro Zeile gequetscht wird, wenn es sich verengt, können Sie einen Breakpoint setzen.

Mehrere Layout-Methoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind von Natur aus responsiv. Sie gehen davon aus, dass Sie versuchen, ein flexibles Raster zu erstellen, und geben Ihnen einfachere Wege, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente und verteilen den Raum zwischen den Elementen entsprechend dem Raum in ihrem Container. Indem Sie die Werte für `flex-grow` und `flex-shrink` ändern, können Sie angeben, wie sich die Elemente verhalten sollen, wenn sie mehr oder weniger Raum um sich herum haben.

Im folgenden Beispiel nehmen die Flex-Elemente jeweils die gleiche Menge an Platz im Flex-Container ein, indem die Kurzform von `flex: 1` verwendet wird, wie zuvor besprochen (siehe [Flexbox: Flexible Größenanpassung von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Hier ist, wie wir Flexbox zusammen mit einer Media Query für responsives Design verwenden könnten.

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

Ändern Sie die Größe Ihres Bildschirms. Das Layout wird sich ändern, wenn die Größe des obigen Beispiels den Schwellenwert von 600px Breite überschreitet.

### CSS-Grid

Im CSS-Grid-Layout ermöglicht die `fr`-Einheit die Verteilung des verfügbaren Raums über Gitterspuren. Das nächste Beispiel erstellt einen Grid-Container mit drei Spuren, die auf `1fr` festgelegt sind. Dies wird drei Spaltenrahmen erstellen, die jeweils einen Teil des verfügbaren Raums im Container einnehmen. Sie haben diesen Ansatz bereits angesehen (siehe [Flexible Gitter mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) zum Wiederholen).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Hier ist, wie wir das Grid-Layout zusammen mit einer Media Query für responsives Design verwenden könnten.

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

Um sicherzustellen, dass Medien niemals größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medien, um sicherzustellen, dass sie ihre Container nie überfluten.

> [!NOTE]
> Das Herunterskalieren eines einzelnen großen Bildes, um es an kleine Geräte anzupassen, verschwendet Bandbreite durch das Herunterladen von Bildern, die größer sind als erforderlich. Es kann auch schlecht aussehen — ein Landschaftsbild könnte beispielsweise auf einem Breitbildschirm gut aussehen, aber es könnte auf einem mobilen Gerät, das besser zu einem Porträtbild passen würde, schwer zu sehen sein. Solche Probleme können gelöst werden, indem das {{htmlelement("picture")}} Element und die {{htmlelement("img")}} `srcset` und `sizes` Attribute verwendet werden. Diese sind fortgeschrittene Funktionen, die über den Umfang dieses Kurses hinausgehen, aber Sie können einen detaillierten Leitfaden bei [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) finden.

Weitere nützliche Tipps:

- Stellen Sie immer sicher, dass Sie ein geeignetes Bildformat für die Bilder Ihrer Website verwenden (wie PNG oder JPG) und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihrer Website platzieren.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) verwenden, um visuelle Effekte zu implementieren, ohne Bilder zu verwenden.
- Sie können Media Queries im `media`-Attribut auf {{htmlelement("source")}}-Elementen verwenden, die innerhalb von {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen geschachtelt sind, um Video-/Audiodateien als geeignet für verschiedene Geräte bereitzustellen (responsives Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern der Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewport-Einheiten, um kleinere oder größere Mengen an Bildschirmfläche widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Hauptüberschrift auf `4rem` setzen, was bedeutet, dass sie viermal so groß wie unsere Basis-Schriftgröße sein wird. Das ist eine wirklich große Überschrift! Wir wollen diese riesige Überschrift nur auf größeren Bildschirmgrößen, daher erstellen wir zuerst eine kleinere Überschrift und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer über eine Bildschirmgröße von mindestens `1200px` verfügt.

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

Wir haben unser Beispiel mit dem responsiven Gitter oben bearbeitet, um auch responsive Schrift darüber hinaus zu beinhalten, indem die Methode verwendet wird, die wir beschrieben haben. Sie können sehen, wie die Überschrift die Größen wechselt, während das Layout zur zweispaltigen Version wechselt.

Auf Mobilgeräten ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftengröße:

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

Wie dieses Beispiel zeigt, müssen Media Queries nicht nur zur Änderung des Layouts der Seite verwendet werden. Sie können verwendet werden, um jedes Element anzupassen, um es auf alternativen Bildschirmgrößen benutzerfreundlicher oder ansprechender zu machen.

### Verwendung von Viewport-Einheiten für responsive Typografie

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne die Notwendigkeit, Breakpoints mit Media Queries festzulegen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` festlegen, diese immer auf die Größe des Viewports bezogen ist.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der obigen Methode ist, dass der Benutzer die Fähigkeit verliert, Text zu zoomen, der mit der `vw`-Einheit gesetzt wurde, da dieser immer in Bezug auf die Größe des Viewports steht. **Daher sollten Sie niemals Text ausschließlich mit Viewport-Einheiten setzen**.

Es gibt eine Lösung, und sie beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie der `vw`-Einheit einen Wert hinzufügen, der mit einer festen Größe wie `em`s oder `rem`s gesetzt wurde, bleibt der Text trotzdem zoombar. Im Wesentlichen wird dem vergrößerten Wert die `vw`-Einheit hinzugefügt:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal spezifizieren müssen, anstatt sie für Mobilgeräte einzurichten und in den Media Queries neu zu definieren. Die Schrift wächst dann allmählich, während Sie die Größe des Viewports erhöhen.

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

## Das Viewport-Meta-Tag

Wenn Sie den HTML-Code einer responsiven Seite betrachten, werden Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) Meta-Tag sagt mobilen Browsern, dass sie die Breite des Viewports auf die Gerätebreite setzen und das Dokument auf 100 % seiner beabsichtigten Größe skalieren sollen, was das Dokument in der von Ihnen beabsichtigten, mobil-optimierten Größe anzeigt.

Warum ist das notwendig? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil als Smartphones erstmals aufkamen, die meisten Seiten nicht mobiloptimiert waren. Der mobile Browser würde daher die Viewport-Breite auf 980 Pixel einstellen, die Seite mit dieser Breite darstellen und als herausgezoomte Version des Desktop-Layouts anzeigen. Benutzer konnten dann in die Website hineinzoomen und herumscrollen, um die Teile zu sehen, die sie interessierte, aber es sah schlecht aus.

Durch das Setzen von `width=device-width` überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie Apples Standardeinstellung `width=980px`, mit der tatsächlichen Breite des Geräts. Ansonsten funktionieren Ihr responsives Design mit Breakpoints und Media Queries auf mobilen Browsern möglicherweise nicht wie beabsichtigt. Wenn Sie ein schmales Bildschirm-Layout haben, das bei einer Viewport-Breite von 480px oder weniger aktiviert wird, aber das Gerät sagt, es sei 980px breit, wird dieser Benutzer nicht Ihr schmales Bildschirm-Layout sehen.

**Sie sollten also _immer_ das Viewport-Meta-Tag im Kopf Ihrer Dokumente einfügen.**

## Zusammenfassung

Responsives Design bezieht sich auf ein Seiten- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es betrachtet wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist jetzt im Wesentlichen einfach, wie wir Websites standardmäßig bauen. Betrachten Sie die Seiten, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Seite zu stoßen, die die Desktop-Version herunterskaliert ist oder bei der Sie seitlich scrollen müssen, um Dinge zu finden. Dies liegt daran, dass das Web zu diesem Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs mit Hilfe der in diesen Lektionen gelernten Layout-Methoden zu erreichen. Wenn Sie heute neu im Webentwicklung sind, haben Sie viel mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Es lohnt sich daher, das Alter der von Ihnen verwendeten Materialien zu überprüfen. Während die historischen Artikel immer noch nützlich sind, macht die moderne Verwendung von CSS und HTML es viel einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Seite betrachtet.

Als nächstes werden wir Media Queries im Detail untersuchen und zeigen, wie sie verwendet werden können, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch-Ereignisse](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivitäten auf Touchscreens oder Trackpads zu interpretieren und so eine qualitativ hochwertige Unterstützung für komplexe, touchbasierte Benutzeroberflächen zu gewährleisten.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um auf Touch-fähigen Geräten verschiedene CSS zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
