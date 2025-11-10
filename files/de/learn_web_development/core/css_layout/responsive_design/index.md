---
title: Responsive Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Ansatz im Webdesign, um sicherzustellen, dass Webseiten auf allen Bildschirmgrößen und -auflösungen gut dargestellt werden und gleichzeitig eine gute Benutzerfreundlichkeit gewährleisten. Es ist der Weg, für ein webfähiges Multigeräte-Design zu entwerfen. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die angewendet werden können, um es zu beherrschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstile</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundlegende CSS-Layout-Konzepte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist — das Entwerfen von Weblayouts, sodass sie flexibel sind und gut auf verschiedenen Gerätedisplays, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten angemessen darzustellen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobile Webdesign

Bevor responsives Webdesign zum Standardansatz für Websites wurde, um sie auf verschiedenen Gerätetypen zum Laufen zu bringen, sprachen Webentwickler häufig von Mobile Webdesign, Mobile Webentwicklung oder manchmal von mobilfreundlichem Design. Diese sind im Wesentlichen gleich wie responsives Webdesign — die Ziele sind sicherzustellen, dass Websites hinsichtlich Layout, Inhalt (Text und Medien) und Leistung auf Geräten mit unterschiedlichen physischen Eigenschaften (Bildschirmgröße, Auflösung) gut funktionieren.

Der Unterschied liegt hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Lösungserstellung:

- Früher sprach man von Desktop oder Mobile, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Handy, Tablets, Uhren usw. Anstatt nur einige wenige verschiedene Bildschirmgrößen zu berücksichtigen, müssen wir jetzt Seiten defensiv gestalten, um allgemeine Bildschirmgrößen und Auflösungen sowie Unbekanntes abzudecken.
- Mobile Geräte waren früher in Bezug auf CPU/GPU und verfügbare Bandbreite leistungsschwach. Einige unterstützten kein CSS oder sogar HTML nicht, was dazu führte, dass serverseitiges Browser-Sniffing gebräuchlich war, um Gerätetyp/Browsertyp zu bestimmen, bevor dann eine Site ausgeliefert wurde, mit der das Gerät umgehen kann. Mobile Geräte hatten oft sehr einfache, grundlegende Erfahrungen, die ihnen serviert wurden, weil sie nicht mehr bewältigen konnten. Heutzutage können mobile Geräte dieselben Technologien wie Desktop-Computer handhaben, sodass solche Techniken weniger gebräuchlich sind.
  - Sie sollten jedoch weiterhin die in diesem Artikel besprochenen Techniken verwenden, um mobilen Benutzern eine geeignete Erfahrung zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite zu beachten gibt.
  - Die Benutzererfahrung ist nach wie vor ein Anliegen. Ein mobiler Benutzer einer Reiseseite möchte vielleicht nur Flugzeiten und Verspätungsinformationen abrufen und nicht mit einem 3D-animierten Globus konfrontiert werden, der Flugrouten und die Firmengeschichte zeigt.
- Moderne Technologien sind viel besser, um responsive Erlebnisse zu schaffen. Zum Beispiel ermöglichen [Technologien für responsive Bilder/Medien](#responsive_imagesmedia) jetzt die angemessene Bereitstellung von Medien für verschiedene Geräte, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in responsives Webdesign

HTML ist grundsätzlich responsiv oder _flüssig_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster verkleinern, fließt der Text automatisch in den verfügbaren Viewport.

Obwohl das standardmäßige responsive Verhalten wie keine Lösung klingt, können lange Textzeilen, die auf einem breit überwachten Monitor vollbildlich angezeigt werden, schwer zu lesen sein. Dieses Problem kann mit CSS gelöst werden, z.B. durch die Erstellung schmaler Spalten, um die Zeilenlänge zu begrenzen. Allerdings können neue Probleme entstehen für Benutzer, die ihr Browserfenster verkleinern oder die Seite auf einem Mobilgerät ansehen — die Spalten wirken dann zusammengeschrumpft und sind schwerer zu lesen.

![Ein Layout mit zwei Spalten, die in einem mobilen Viewport zusammengepresst sind.](mdn-rwd-liquid.png)

Eine nicht-responsive Webseite durch Festsetztung einer fixen Breite funktioniert ebenfalls nicht; das führt zu Scrollbalken auf schmalen Geräten und zu viel Leerraum auf breiten Bildschirmen.

Responsive Webdesign oder RWD ist ein Gestaltungsansatz, der den gesamten Bereich verfügbarer Geräte und Gerätegrößen anspricht und eine automatische Anpassung an den Bildschirm ermöglicht, egal ob der Inhalt auf einem Tablet, einem Telefon, einem Fernseher oder einer Uhr angesehen wird.

Responsive Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät reagieren kann, mit dem die Inhalte betrachtet werden.

Der Begriff _responsive Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschrieb die Verwendung von flüssigen Rastern, flüssigen Bildern und Media Queries, um responsive Inhalte zu erstellen.

Zu dieser Zeit war die Empfehlung, CSS `float` für das Layout und Media Queries zu verwenden, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Flüssige Bilder sind so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben die Eigenschaft `max-width` auf `100%` gesetzt. Flüssige Bilder verkleinern sich, wenn sich die Spalte, die sie enthalten, verengt, wachsen aber nicht größer als ihre intrinsische Größe, wenn die Spalte wächst. Dies ermöglicht es einem Bild, sich an seine Inhalte anzupassen, anstatt diese zu überfluten, jedoch nicht größer zu werden und verpixelt auszusehen, wenn der Container breiter wird als das Bild.

Moderne CSS-Layout-Methoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in die Webplattform integriert, um das Design responsiver Sites zu erleichtern.

Der Rest dieses Artikels wird die verschiedenen Webplattform-Funktionen erklären, die Sie verwenden möchten, wenn Sie eine responsive Site erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) ermöglichen es uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Benutzers größer als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite für die Bedürfnisse des Benutzers angemessen zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedien angezeigt wird (also kein gedrucktes Dokument) und ob der Viewport mindestens `80rem` breit ist. Die `.container`-Regel wird nur angewendet, wenn diese beiden Bedingungen zutreffen.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen und dabei das gesamte Layout oder Teile davon anpassen, um es an die verschiedenen Bildschirmgrößen bestmöglich anzupassen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout ändert, werden als _Breakpoints_ bezeichnet.

Ein gängiger Ansatz bei der Verwendung von Media Queries ist die Erstellung eines einfachen einspaltigen Layouts für schmalbildschirmige Geräte (zum Beispiel Mobiltelefone) und die Implementierung eines mehrspaltigen Layouts, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben, um es zu bewältigen. Das Design für mobile Geräte zuerst wird als **Mobile First**-Design bezeichnet.

Wenn Breakpoints verwendet werden, empfiehlt es sich, Media Query-Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) und nicht mit absoluten Größen eines einzelnen Geräts zu definieren.

Es gibt verschiedene Ansätze zu den in einem Media Query-Block definierten Stilen; diese reichen von der Verwendung von Media Queries, um mit {{htmlelement("link")}} Stylesheets basierend auf Browsergrößenbereichen zu verknüpfen, bis hin zur Einbeziehung benutzerdefinierter Eigenschaftsvariablen zur Speicherung von Werten, die mit jedem Breakpoint verbunden sind.

Media Queries können zu RWD beitragen, sind aber keine Voraussetzung. Flexible Rastersysteme, relative Einheiten und minimale und maximale Einheitwerte können ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba bietet ein Tutorial namens [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, das eine interaktive Einführung in Media Queries bietet sowie eine Herausforderung, um zu testen, ob Sie die Grundlagen verstanden haben.

## Responsive Layou-Technologien

Responsive Sites basieren auf flexiblen Rastersystemen, das bedeutet, Sie müssen nicht jede mögliche Gerätegröße mit pixelgenauen Layouts ansprechen.

Durch die Verwendung eines flexiblen Rasters können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Um beispielsweise sicherzustellen, dass Zeilenlängen bei zunehmender Bildschirmgröße nicht unleserlich lang werden, können Sie {{cssxref('columns')}} verwenden; wenn ein Kasten zusammengedrückt wird und als er sich verengt nur noch zwei Wörter pro Zeile stehen, können Sie einen Breakpoint setzen.

Mehrere Layoutmethoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind standardmäßig responsiv. Sie gehen alle davon aus, dass Sie versuchen, ein flexibles Rastersystem zu erstellen, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente, indem der Raum zwischen den Elementen entsprechend dem Raum in ihrem Container verteilt wird. Durch das Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass sich die Elemente verhalten, wenn sie auf mehr oder weniger Raum stoßen.

Im unten stehenden Beispiel nimmt jedes Flex-Element eine gleiche Menge an Platz im Flex-Container ein, indem der Shorthand `flex: 1` verwendet wird, wie zuvor diskutiert (siehe [Flexbox: Flexible sizing of flex items](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

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

Ändern Sie die Größe Ihres Browserfensters. Das Layout wechselt zwischen einem einspaltigen und einem zweispaltigen Layout, wenn die Größe des obigen Beispiels die `600px` Breiteschwelle überschreitet.

### CSS Grid

Im CSS-Grid-Layout ermöglicht die `fr` Einheit die Verteilung des verfügbaren Raums über Gitterspuren. Das nächste Beispiel erstellt einen Grid-Container mit drei Spuren, die bei `1fr` dimensioniert sind. Dadurch werden drei Spalten im Gitter erstellt, die jeweils einen Teil des verfügbaren Raums im Container einnehmen. Dieses Vorgehen wurde bereits beleuchtet (siehe [Flexible grids with the fr unit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) für eine Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

So könnten wir mit dem Grid-Layout und einer Media Query responsives Design umsetzen.

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

Änder Sie die Größe Ihres Browserfensters erneut — Sie sollten sehen, dass das Beispiel-Layout an der `600px` Breiteschwelle genau wie im vorherigen Beispiel geändert wird.

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien nie größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medienelemente so, dass sie niemals ihre Container überfluten.

> [!NOTE]
> Die Verwendung eines einzelnen großen Bildes und dessen Herunterskalierung auf kleine Geräte verschwendet Bandbreite durch das Herunterladen größerer Bilder als nötig. Es kann auch schlecht aussehen — ein Querformatbild könnte auf einem Breitbildmonitor gut aussehen, auf einem Mobilgerät hingegen, das besser für ein Hochformatbild geeignet wäre, schwer zu sehen sein. Solche Probleme können mit dem {{htmlelement("picture")}}-Element und den {{htmlelement("img")}} 'srcset'- und 'sizes'-Attributen gelöst werden. Dies sind fortgeschrittene Funktionen, die über den Umfang dieses Kurses hinausgehen, aber Sie können einen detaillierten Leitfaden bei [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images) finden.

Andere nützliche Tipps:

- Stellen Sie sicher, dass Sie für Ihre Website-Bilder ein geeignetes Bildformat (wie PNG oder JPG) verwenden und die Dateigröße mit einem Grafikeditor optimieren, bevor Sie sie auf Ihre Website stellen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/Guides/Images/Using_gradients) und [Schatten](/de/docs/Web/CSS/Reference/Properties/box-shadow) verwenden, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries im Media-Attribut auf {{htmlelement("source")}}-Elementen verwenden, die innerhalb von {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen eingebettet sind, um Video-/Audiodateien für verschiedene Geräte (responsives Video/Audio) bereitzustellen.

## Responsive Typografie

Responsive Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewport-Einheiten, um geringere oder größere Mengen an Bildschirmfläche widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel wollen wir unsere Überschrift der Ebene 1 auf `4rem` setzen, das bedeutet, dass sie viermal größer als unsere Basis-Schriftgröße ist. Das ist eine wirklich große Überschrift! Wir möchten diese riesige Überschrift nur auf größeren Bildschirmgrößen, daher geben wir der Überschrift zuerst eine kleinere Größe von `2rem` und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

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

Das nächste Beispiel ist eine modifizierte Version unseres früheren responsiven Gitterbeispiels, das eine responsive Überschrift mit der beschriebenen Methode enthält. Auf dem Handy ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftsgröße:

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

Wie bereits bei früheren Beispielen, ändern Sie die Breite des Browserfensters und beachten Sie, wie sich nicht nur das Layout an der `600px` Breiteschwelle ändert, sondern auch die Überschriftengröße.

Da dieser Ansatz für Typografie zeigt, müssen Sie Media Queries nicht nur zur Änderung des Layouts der Seite verwenden. Sie können verwendet werden, um jedes Element anzupassen, um es bei alternativen Bildschirmgrößen benutzerfreundlicher oder ansprechender zu gestalten.

### Verwendung von Viewport-Einheiten für responsive Typografie

Viewport-Einheiten `vw` können ebenfalls zur Unterstützung von responsiver Typografie verwendet werden, ohne dass Breakpoints mit Media Queries festgelegt werden müssen. `1vw` entspricht einem Prozent der Viewport-Breite, das bedeutet, wenn Sie Ihre Schriftgröße mit `vw` festlegen, bezieht sie sich immer auf die Größe des Viewports.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der oben erwähnten Methode besteht darin, dass der Benutzer die Möglichkeit verliert, jede mit der `vw`-Einheit festgelegte Schrift zu zoomen, da diese Schrift sich immer auf die Größe des Viewports bezieht. **Daher sollten Sie niemals Text allein mit Viewport-Einheiten festlegen**.

Es gibt eine Lösung und sie besteht darin, [`calc()`](/de/docs/Web/CSS/Reference/Values/calc) zu verwenden. Wenn Sie die `vw`-Einheit zu einem Wert hinzufügen, der mit einer festen Größe wie `em`s oder `rem`s festgelegt ist, wird der Text weiterhin zoomfähig. Im Wesentlichen fügt die `vw`-Einheit zu diesem gezoomten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal festlegen müssen, anstatt sie für Mobilgeräte festzulegen und in den Media Queries neu zu definieren. Die Schriftgröße erhöht sich allmählich, wenn Sie die Größe des Viewports erhöhen.

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

Ändern Sie die Größe des Browserfensters und beachten Sie, wie diesmal die Schriftgröße der Überschrift _allmählich_ zunimmt, während sich die Breite ändert.

## Das Viewport-Meta-Tag

Wenn Sie den HTML-Quellcode einer responsiven Seite betrachten, werden Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Gerätebreite einstellen und das Dokument auf 100% der geplanten Größe skalieren sollen, was das Dokument in der von Ihnen beabsichtigten mobiloptimierten Größe anzeigt.

Warum ist das notwendig? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil als Smartphones zuerst herauskamen, die meisten Sites nicht mobil optimiert waren. Der mobile Browser würde daher die Viewport-Breite auf 980 Pixel einstellen, die Seite in dieser Breite rendern und das Ergebnis als herausgezoomte Version des Desktop-Layouts anzeigen. Benutzer konnten hineinzoomen und auf der Website navigieren, um die Teile zu sehen, die sie interessierten, aber es sah schlecht aus.

Durch das Setzen von `width=device-width` überschreiben Sie eine Voreinstellung eines mobilen Geräts, wie die Standardeinstellung des iPhones `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne dies, funktioniert Ihr responsives Design mit Breakpoints und Media Queries möglicherweise nicht wie gewünscht auf mobilen Browsern. Wenn Sie ein schmaler Bildschirm-Layout haben, das bei 480px oder weniger Viewport-Breite aktiviert wird, aber das Gerät sagt, dass es 980px breit ist, wird dieser Benutzer nicht Ihr schmaler Bildschirm-Layout sehen.

**Daher sollten Sie _immer_ das Viewport-Meta-Tag im Kopfteil Ihrer Dokumente einfügen.**

Es gibt eine Reihe von anderen Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags verwenden können — siehe die [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)-Referenz für mehr Details.

## Zusammenfassung

Responsive Design bezieht sich auf ein Site- oder App-Design, das auf die Umgebung reagiert, in der es angezeigt wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist im Wesentlichen die Art und Weise, wie wir Websites standardmäßig erstellen. Betrachten Sie die Sites, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Site zu stoßen, die die Desktop-Version ist, die herunter skaliert wurde, oder bei der Sie seitwärts scrollen müssen, um Dinge zu finden. Das liegt daran, dass das Web auf diesen Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs zu verwirklichen, mit den in diesem Artikel behandelten Layout-Methoden. Wenn Sie heute neu in der Webentwicklung sind, haben Sie viel mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Es ist daher wert, das Alter des Materials zu überprüfen, das Sie verwenden. Während historische Artikel immer noch nützlich sind, macht die moderne Verwendung von CSS und HTML es viel einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Site betrachtet.

Im Folgenden werden wir Media Queries detaillierter studieren und zeigen, wie sie verwendet werden können, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch-Ereignisse](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivitäten auf Touchscreens oder Trackpads zu interpretieren und eine qualitativ hochwertige Unterstützung für komplexe, touchbasierte Benutzeroberflächen zu ermöglichen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/Reference/At-rules/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/Reference/At-rules/@media/any-pointer) Media Queries, um auf touchfähigen Geräten unterschiedliche CSS zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [The Frontend Developer Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Frontend-Webentwickler zu sein, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, kenntnisreichen Lehrern und einer unterstützenden Community. Gehen Sie von Null bis zur Landung Ihres ersten Frontend-Jobs! Viele der Kurskomponenten sind als eigenständige kostenlose Versionen verfügbar. Dies umfasst ein Modul über responsives Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
