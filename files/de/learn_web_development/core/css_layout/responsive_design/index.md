---
title: Responsive Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Webdesign-Ansatz, der sicherstellt, dass Webseiten auf allen Bildschirmgrößen und Auflösungen gut gerendert werden und dabei eine gute Benutzerfreundlichkeit gewährleisten. Es ist der Weg, für ein multiresponsives Web zu gestalten. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die verwendet werden können, um diese zu beherrschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen zum Styling</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftartgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist — Weblayouts so entwerfen, dass sie flexibel sind und gut auf unterschiedlichen Bildschirmgrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Werkzeugen wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente korrekt auf mobilen Geräten anzuzeigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobiles Webdesign

Bevor responsives Webdesign der Standardansatz wurde, um Websites über verschiedene Gerätetypen hinweg funktionsfähig zu machen, sprachen Webentwickler oft von mobilem Webdesign, mobiler Webentwicklung oder manchmal auch von mobilfreundlichem Design. Diese sind im Wesentlichen das gleiche wie responsives Webdesign — die Ziele sind sicherzustellen, dass Websites geräteübergreifend mit unterschiedlichen physischen Eigenschaften (Bildschirmgröße, Auflösung) in Bezug auf Layout, Inhalt (Text und Medien) und Leistung gut funktionieren.

Der Unterschied liegt hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprachen wir über Desktop oder Mobilgeräte, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobilgeräte, Tablets, Uhren usw. Statt einige verschiedene Bildschirmgrößen zu berücksichtigen, müssen wir jetzt Websites defensiv gestalten, um sowohl gängige Bildschirmgrößen und Auflösungen als auch Unbekanntes zu berücksichtigen.
- Mobile Geräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten kein CSS oder sogar HTML, und daher war es üblich, serverseitiges Browser-Sniffing durchzuführen, um den Geräte-/Browser-Typ zu ermitteln, bevor eine Website bereitgestellt wurde, die das Gerät bewältigen konnte. Mobilgeräte hatten oft wirklich einfache, grundlegende Erlebnisse, weil das alles war, was sie aushalten konnten. Heutzutage sind mobile Geräte in der Lage, dieselben Technologien wie Desktop-Computer zu handhaben, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Benutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt, um die Sie sich sorgen müssen.
  - Die Benutzererfahrung ist immer noch ein Anliegen. Ein mobiler Benutzer einer Reise-Website möchte vielleicht nur Flugzeiten und Verspätungsinformationen überprüfen und nicht mit einem 3D-animierten Globus konfrontiert werden, der Flugrouten und die Unternehmensgeschichte anzeigt.
- Moderne Technologien sind viel besser für die Erstellung von responsiven Erlebnissen geeignet. Zum Beispiel erlauben [responsive Bilder/Medientechnologien](#responsive_imagesmedia) nun, passende Medien auf verschiedenen Geräten bereitzustellen, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in responsives Webdesign

HTML ist grundsätzlich responsiv oder _fluid_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster verkleinern, wird der Browser den Text automatisch an das Sichtfenster anpassen.

Auch wenn das Standardverhalten von Responsive Design nach keiner Lösung klingt, können lange Textzeilen, die auf einem Breitbildmonitor in voller Bildschirmbreite angezeigt werden, schwer zu lesen sein. Dieses Problem kann mit CSS gelöst werden, zum Beispiel durch Erstellen engerer Spalten, um die Zeilenlänge zu beschränken. Dies kann jedoch neue Probleme für Benutzer schaffen, die ihr Browserfenster verkleinern oder die Seite auf einem Mobilgerät ansehen — die Spalten werden quetschend wirken und schwerer zu lesen sein.

![Ein Layout mit zwei Spalten, die in einem mobilen Blickfeld zusammengequetscht sind.](mdn-rwd-liquid.png)

Eine nicht skalierbare Webseite zu erstellen, indem eine feste Breite festgelegt wird, funktioniert ebenfalls nicht; dies führt zu Scrollleisten auf schmalen Geräten und zu viel Leerraum auf breiten Bildschirmen.

Responsives Webdesign oder RWD ist ein Designansatz, der die gesamte Bandbreite an verfügbaren Geräten und Gerätegrößen berücksichtigt und die automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr angesehen wird.

Responsives Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät reagieren kann, das zur Ansicht des Inhalts verwendet wird.

Der Begriff _responsives Design_, [2010 von Ethan Marcotte geprägt](https://alistapart.com/article/responsive-web-design/), beschreibt die Verwendung von fluiden Rastern, fluiden Bildern und Media Queries, um responsive Inhalte zu erstellen.

Damals war es die Empfehlung, CSS `float` für das Layout zu verwenden und Media Queries zu nutzen, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Fluide Bilder sind so eingestellt, dass sie nicht breiter als ihr Container sind; sie haben ihre `max-width`-Eigenschaft auf `100%` gesetzt. Fluide Bilder verkleinern sich, wenn ihre umschließende Spalte schmaler wird, wachsen jedoch nicht über ihre intrinsische Größe hinaus, wenn die Spalte wächst. Dies ermöglicht es einem Bild, sich an die Größe seines Inhalts anzupassen, anstatt überzulaufen, jedoch nicht größer zu werden und zu pixelig zu erscheinen, wenn der Container breiter ist als das Bild.

Moderne CSS-Layout-Methoden sind per se responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in die Webplattform integriert, um das Entwerfen responsiver Websites zu erleichtern.

Der Rest dieses Artikels wird die verschiedenen Webplattform-Funktionen erklären, die Sie verwenden könnten, wenn Sie eine responsive Website erstellen möchten.

## Media Queries

[Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) ermöglichen es uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Benutzers breiter als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite entsprechend den Bedürfnissen des Benutzers zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedien angezeigt wird (also kein gedrucktes Dokument) und ob das Sichtfenster mindestens `80rem` breit ist. Die `.container`-Regel wird nur angewendet, wenn diese beiden Dinge zutreffen.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen und das gesamte Layout oder Teile davon anpassen, um es an die verschiedenen Bildschirmgrößen anzupassen. Die Punkte, an denen eine Media Query eingeführt wird und sich das Layout ändert, werden als _Breakpoints_ bezeichnet.

Ein häufiger Ansatz bei der Verwendung von Media Queries ist es, ein einfaches einspaltiges Layout für schmalere Bildschirme (zum Beispiel Mobiltelefone) zu erstellen und dann für breitere Bildschirme zu prüfen und ein mehrspaltiges Layout zu implementieren, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben, um es zu handhaben. Das Entwerfen für Mobilgeräte zuerst ist als **Mobile-First-Design** bekannt.

Wenn Breakpoints verwendet werden, wird empfohlen, die Breakpoints der Media Queries mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) anstelle von absoluten Größen eines einzelnen Geräts festzulegen.

Es gibt verschiedene Ansätze zu den in einem Media Query-Block definierten Styles; diese reichen von der Verwendung von Media Queries, um {{htmlelement("link")}} Stylesheets basierend auf Browsergrößenbereichen zu laden, bis hin zum Einschließen von benutzerdefinierten Eigenschaftenvariablen, um Werte zu speichern, die mit jedem Breakpoint assoziiert sind.

Media Queries können bei RWD helfen, sind aber keine Voraussetzung. Flexible Raster, relative Einheiten und Mindest- und Maximalwert-Einheiten können ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba hat ein Tutorial namens [Aside: Media Queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, das eine interaktive Einführung in Media Queries bietet, plus eine Herausforderung, um zu testen, ob Sie die Grundlagen verstanden haben.

## Responsive Layout-Technologien

Responsive Websites basieren auf flexiblen Rastern, was bedeutet, dass Sie keine pixelgenauen Layouts für jede mögliche Gerätegröße erstellen müssen.

Durch die Verwendung eines flexiblen Rasters können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design in dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel, um sicherzustellen, dass Zeilenlängen beim Vergrößern der Bildschirmgröße nicht unleserlich lang werden, können Sie {{cssxref('columns')}} verwenden; wenn eine Box bei Verengung zermatscht aussieht und nur noch zwei Wörter in jede Zeile passen, können Sie einen Breakpoint setzen.

Mehrere Layout-Methoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind standardmäßig responsiv. Sie gehen alle davon aus, dass Sie versuchen, ein flexibles Raster zu schaffen, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

Bei Flexbox schrumpfen oder wachsen Flex-Elemente und verteilen den Platz zwischen den Elementen entsprechend dem Platz in ihrem Container. Durch das Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass sich die Elemente verhalten, wenn sie mehr oder weniger Platz um sich herum haben.

Im folgenden Beispiel nehmen die Flex-Elemente jeweils den gleichen Platz im Flex-Container ein, wobei die Kurzform von `flex: 1` wie zuvor besprochen verwendet wird (siehe [Flexbox: Flexible Größierung von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Hier ist ein Beispiel, wie wir Flexbox mit einer Media Query für responsives Design verwenden könnten.

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

Verändern Sie die Größe Ihres Browserfensters. Das Layout wird sich zwischen einem einspaltigen und einem zweispaltigen Layout ändern, wenn die Größe des obigen Beispiels die `600px`-Breitenschwelle überschreitet.

### CSS Grid

Beim CSS-Grid-Layout ermöglicht die `fr`-Einheit die Verteilung des verfügbaren Raums über Grid-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks, die auf `1fr` gesetzt sind. Dies wird drei Spalten-Tracks erstellen, die jeweils einen Teil des verfügbaren Platzes im Container einnehmen. Sie haben diesen Ansatz bereits betrachtet (siehe [Flexible Raster mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) für eine Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Hier ist ein Beispiel, wie wir Grid-Layout mit einer Media Query für responsives Design verwenden könnten.

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

Auch hier sollten Sie Ihr Browserfenster in der Größe verändern — Sie sollten sehen, wie sich das Beispiel-Layout an der `600px`-Breitenschwelle ändert, genauso wie im vorherigen Beispiel.

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
> Die Verwendung eines einzigen großen Bildes und das Verkleinern, um auf kleine Geräte zu passen, verschwendet Bandbreite durch das Herunterladen von Bildern, die größer sind, als benötigt. Es kann auch schlecht aussehen — ein Landschaftsbild zum Beispiel könnte auf einem Breitbildmonitor gut aussehen, aber auf einem mobilen Gerät, das besser für ein Porträtbild geeignet wäre, schwer zu erkennen sein. Solche Probleme können mit dem {{htmlelement("picture")}}-Element und den `srcset`- und `sizes`-Attributen des {{htmlelement("img")}}-Elements gelöst werden. Diese sind fortgeschrittene Funktionen, die über den Umfang dieses Kurses hinausgehen, aber Sie können einen detaillierten Leitfaden unter [Responsives Bilder](/de/docs/Web/HTML/Guides/Responsive_images) finden.

Weitere nützliche Tipps:

- Stellen Sie immer sicher, dass Sie ein geeignetes Bildformat für Ihre Website-Bilder verwenden (wie PNG oder JPG), und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihrer Website platzieren.
- Sie können CSS-Features wie [Verläufe](/de/docs/Web/CSS/Guides/Images/Using_gradients) und [Schatten](/de/docs/Web/CSS/Reference/Properties/box-shadow) verwenden, um visuelle Effekte ohne Verwendung von Bildern zu implementieren.
- Sie können Media Queries innerhalb des media-Attributs auf {{htmlelement("source")}}-Elementen, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verschachtelt sind, verwenden, um Video-/Audio-Dateien passend für verschiedene Geräte bereitzustellen (responsive Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewport-Einheiten, um geringere oder größere Mengen an Bildschirmplatz widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Ebene 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß wie unsere Basis-Schriftgröße sein wird. Das ist eine wirklich große Überschrift! Wir möchten diese große Überschrift nur auf größeren Bildschirmgrößen, daher geben wir der Überschrift zuerst eine kleinere Größe von `2rem` und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

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

Das nächste Beispiel ist eine modifizierte Version unseres früheren Grid-Beispiels, das eine responsive Überschrift mit der beschriebenen Methode enthält. Auf mobilen Geräten ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Größe der Überschrift:

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

Wie in den vorherigen Beispielen sollten Sie die Fensterbreite ändern und beachten, wie nicht nur das Layout an der `600px`-Schwelle ändert, sondern auch die Größe der Überschrift.

Wie dieser Ansatz zur Typografie zeigt, müssen Media Queries nicht nur verwendet werden, um das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element anzupassen, um es bei alternativen Bildschirmgrößen benutzerfreundlicher oder attraktiver zu machen.

### Verwendung von Viewport-Einheiten für responsive Typografie

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne dass Breakpoints mit Media Queries gesetzt werden müssen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` festlegen, sie immer in Bezug zur Viewport-Größe steht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem dabei ist, dass der Benutzer die Möglichkeit verliert, den Text, der mit der `vw`-Einheit gesetzt wurde, zu zoomen, da dieser Text sich immer auf die Größe der Viewport bezieht. **Daher sollten Sie niemals Text allein mit Viewport-Einheiten setzen**.

Es gibt jedoch eine Lösung, die die Verwendung von {{cssxref("calc()")}} beinhaltet. Wenn Sie die `vw`-Einheit zu einem mit einer festen Größe wie `em`s oder `rem`s gesetzten Wert hinzufügen, wird der Text dennoch zoombar. Im Wesentlichen fügt die `vw`-Einheit zu diesem gezoomten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir nur einmal die Schriftgröße für die Überschrift spezifizieren müssen, anstatt sie für mobile Geräte einzurichten und sie in den Media Queries neu zu definieren. Die Schrift wird dann allmählich größer, wenn Sie die Größe des Viewports vergrößern.

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

Versuchen Sie, das Browserfenster in der Größe zu verändern, wie zuvor, und beachten Sie, wie diesmal die Größe der Überschrift _allmählich_ zunimmt, wenn sich die Breite ändert.

## Das Meta-Viewport-Tag

Wenn Sie sich Quellcode einer responsiven Seite ansehen, werden Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [`Viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag sagt mobilen Browsern, dass sie die Breite des Viewports auf die Gerätebreite setzen und das Dokument auf 100% seiner vorgesehenen Größe skalieren sollen, wodurch das Dokument in der gewünschten mobilen Größe angezeigt wird.

Warum ist das nötig? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil, als Smartphones erstmals aufkamen, die meisten Websites nicht für mobile Geräte optimiert waren. Der mobile Browser würde folglich die Viewport-Breite auf 980 Pixel einstellen, die Seite in dieser Breite rendern und das Ergebnis als verkleinerte Version des Desktop-Layouts anzeigen. Benutzer könnten hineinzoomen und sich auf der Webseite bewegen, um die für sie interessanten Teile zu sehen, aber es sah schlecht aus.

Indem `width=device-width` gesetzt wird, überschreiben Sie den Standard eines mobilen Geräts, wie der Standard `width=980px` des iPhones, mit der tatsächlichen Breite des Geräts. Ohne dies funktioniert Ihr responsives Design mit Breakpoints und Media Queries möglicherweise nicht wie beabsichtigt auf mobilen Browsern. Wenn Sie ein Layout für schmale Bildschirme eingerichtet haben, das bei 480px Viewport-Breite oder weniger eintritt, das Gerät jedoch angibt, dass es 980px breit ist, wird dieser Benutzer Ihr schmalbildschirm-Layout nicht sehen.

**Daher sollten Sie _immer_ das Viewport-Meta-Tag im Kopf Ihrer Dokumente einfügen.**

Es gibt eine Anzahl anderer Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags angeben können — siehe die [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)-Referenz für weitere Details.

## Zusammenfassung

Responsives Design bezieht sich auf ein Design von Websites oder Anwendungen, das auf die Umgebung reagiert, in der sie betrachtet werden. Es umfasst eine Anzahl von CSS- und HTML-Funktionen und -Techniken und ist im Grunde genommen die Art und Weise, wie wir standardmäßig Websites erstellen. Betrachten Sie die Websites, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich eher ungewöhnlich, dass Sie auf eine Website stoßen, die die Desktop-Version herunterskalieren muss, oder bei der Sie seitwärts scrollen müssen, um Dinge zu finden. Das liegt daran, dass das Web zu diesem Ansatz übergegangen ist, responsiv zu gestalten.

Es ist auch viel einfacher geworden, responsive Designs mit den in diesem Artikel behandelten Layout-Methoden zu erreichen. Wenn Sie heute neu im Bereich der Webentwicklung sind, haben Sie viele mehr Werkzeuge zur Verfügung als zu den Anfängen des responsiven Designs. Es lohnt sich daher zu überprüfen, wie alt die Materialien sind, die Sie verwenden. Während die historischen Artikel immer noch nützlich sind, macht es der moderne Einsatz von CSS und HTML viel einfacher, elegante und nützliche Designs zu erstellen, egal mit welchem Gerät Ihr Besucher die Seite betrachtet.

Als nächstes werden wir Media Queries im Detail studieren und zeigen, wie man sie zur Lösung einiger häufiger Probleme verwenden kann.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivität auf Touchscreens oder Trackpads zu interpretieren und so eine qualitativ hochwertige Unterstützung für komplexe, touch-basierte Benutzeroberflächen zu ermöglichen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/Reference/At-rules/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/Reference/At-rules/@media/any-pointer) Media Queries, um auf touchfähigen Geräten unterschiedliche CSS zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [The Frontend Developer Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Frontend-Webentwickler zu werden, mit lustigen interaktiven Lektionen und Herausforderungen, erfahrenen Lehrern und einer unterstützenden Gemeinschaft. Gehen Sie von null zu Ihrem ersten Frontend-Job! Viele der Kursbestandteile sind als eigenständige kostenlose Versionen verfügbar. Dazu gehört ein Modul über responsives Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
