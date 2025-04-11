---
title: Responsive Design
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{learnsidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Webdesign-Ansatz, der dafür sorgt, dass Webseiten auf allen Bildschirmgrößen und Auflösungen gut dargestellt werden und dabei eine gute Benutzerfreundlichkeit gewährleisten. Es ist die Art, für das Web mit mehreren Geräten zu gestalten. In diesem Artikel werden wir Ihnen helfen, einige Techniken zu verstehen, die verwendet werden können, um dies zu meistern.

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
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist — Gestaltung von Weblayouts so, dass sie flexibel sind und gut auf verschiedenen Bildschirmgrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten korrekt darzustellen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobile Webdesign

Bevor responsives Webdesign der Standardansatz wurde, um Websites für verschiedene Gerätetypen funktionsfähig zu machen, sprachen Webentwickler oft über Mobile Webdesign, Mobile Webentwicklung oder manchmal Mobile-freundliches Design. Diese sind im Grunde dasselbe wie responsives Webdesign — die Ziele bestehen darin, sicherzustellen, dass Websites auf Geräten mit unterschiedlichen physischen Attributen (Bildschirmgröße, Auflösung) hinsichtlich Layout, Inhalt (Text und Medien) und Leistung gut funktionieren.

Der Unterschied liegt hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien, um Lösungen zu erstellen:

- Früher sprach man von Desktop oder Mobile, aber heute gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobiltelefone, Tablets, Uhren usw. Anstatt nur einige wenige Bildschirmgrößen abzudecken, müssen wir jetzt Webseiten defensiv gestalten, um häufige Bildschirmgrößen und Auflösungen, plus Unbekanntes, abzudecken.
- Mobile Geräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten weder CSS noch HTML und daher war es üblich, serverseitiges Browser-Sniffing durchzuführen, um Gerätetyp/Browsert-Typ zu bestimmen, bevor eine Site bereitgestellt wurde, die das Gerät verkraften könnte. Mobilgeräte erhielten oft sehr einfache, rudimentäre Erlebnisse, weil dies alles war, was sie bewältigen konnten. Heutzutage sind mobile Geräte in der Lage, die gleichen Technologien wie Desktop-Computer zu bewältigen, so dass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Benutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite zu berücksichtigen gibt.
  - Die Benutzererfahrung ist ebenfalls wichtig. Ein mobiler Benutzer einer Reisewebsite möchte möglicherweise nur Flugzeiten und Verspätungsinformationen überprüfen und nicht mit einem 3D-animierten Globus mit Flugrouten und Ihrer Unternehmensgeschichte konfrontiert werden. Dies kann jedoch mithilfe von responsiven Design-Techniken behandelt werden.
- Moderne Technologien sind weitaus besser, um responsive Erlebnisse zu schaffen. Zum Beispiel ermöglichen [responsive Images/Media-Technologien](#responsive_imagesmedia) nun die Bereitstellung geeigneter Medien für verschiedene Geräte, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in responsives Webdesign

HTML ist grundsätzlich responsiv oder _flüssig_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster verkleinern/vergrößern, fließt der Text automatisch im Browser neu, um in das Ansichtsfenster zu passen.

Obwohl das standardmäßige responsive Verhalten möglicherweise so klingt, als sei keine Lösung erforderlich, können lange Textzeilen, die auf einem breiten Monitor in voller Breite dargestellt werden, schwer zu lesen sein. Wird mit CSS die Zeilenlänge auf einem Breitbildschirm verringert, z.B. indem Spalten erstellt oder signifikante Abstände hinzugefügt werden, sieht die Seite möglicherweise gequetscht aus, wenn der Benutzer sein Browserfenster verkleinert oder die Seite auf einem mobilen Gerät öffnet.

![Ein Layout mit zwei Spalten, die in ein mobiles Ansichtsfenster eingepasst sind.](mdn-rwd-liquid.png)

Das Erstellen einer nicht-responsiven Webseite durch Festlegen einer festen Breite funktioniert auch nicht; das führt zu Scrollleisten auf schmalen Geräten und zu viel leerem Raum auf großen Bildschirmen.

Responsive Webdesign oder RWD ist ein Designansatz, der die Bandbreite der Geräte und Gerätegrößen berücksichtigt und eine automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr betrachtet wird.

Responsives Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der eine Reihe von Best Practices beschreibt, die verwendet werden, um ein Layout zu erstellen, das auf jedes verwendete Gerät reagieren kann, um den Inhalt zu betrachten.

Der Begriff _Responsive Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschrieb die Verwendung von flüssigen Rastern, flüssigen Bildern und Media Queries, um responsiven Inhalt zu erstellen.

Zu dieser Zeit war die Empfehlung, CSS `float` für das Layout und Media Queries zu verwenden, um die Browserbreite abzufragen, um Layouts für verschiedene Breakpoints zu erstellen. Flüssige Bilder werden so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width`-Eigenschaft auf `100%` gesetzt. Flüssige Bilder verkleinern sich, wenn ihre enthaltende Spalte schmaler wird, wachsen jedoch nicht über ihre intrinsische Größe hinaus, wenn die Spalte wächst. Dies ermöglicht es einem Bild, sich an seinen Inhalt anzupassen, anstatt ihn zu überlaufen, ohne größer zu werden und verpixelt auszusehen, wenn der Container breiter als das Bild wird.

Moderne CSS-Layout-Methoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Features in die Webplattform eingebaut, um das Design von responsiven Sites zu erleichtern.

Der Rest dieses Artikels wird Sie auf die verschiedenen Webplattform-Features hinweisen, die Sie verwenden möchten, wenn Sie eine responsive Website erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (z.B. ob der Bildschirm des Benutzers breiter als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite entsprechend den Bedürfnissen des Benutzers zu gestalten.

Zum Beispiel prüft die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedien angezeigt wird (also kein gedrucktes Dokument) und ob das Ansichtsfenster mindestens `80rem` breit ist. Das CSS für den `.container`-Selektor wird nur angewandt, wenn diese beiden Bedingungen wahr sind.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen und Ihr gesamtes Layout oder Teile davon optimieren, um am besten zu den verschiedenen Bildschirmgrößen zu passen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout geändert wird, sind als _Breakpoints_ bekannt.

Ein gängiger Ansatz bei der Verwendung von Media Queries besteht darin, ein einfaches Einspaltenlayout für Geräte mit schmalem Bildschirm (z.B. Mobiltelefone) zu erstellen und dann für breitere Bildschirme eine Mehrspaltenlayout zu implementieren, wenn Sie wissen, dass Sie genügend Bildschirmbreite für dessen Abwicklung haben. Das Design für mobile Geräte zuerst wird als **Mobile First** Design bezeichnet.

Wenn Sie Breakpoints verwenden, ermutigen Best Practices dazu, Media Query-Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) anstelle von absoluten Größen eines einzelnen Geräts zu definieren.

Es gibt verschiedene Ansätze zu den innerhalb eines Media Query-Blocks definierten Stilen; von der Verwendung von Media Queries, um {{htmlelement("link")}} Stylesheets basierend auf Browsergröße zu laden, bis hin zu nur benutzerdefinierten Eigenschaftenvariablen, um Werte zu speichern, die mit jedem Breakpoint verbunden sind.

Media Queries können bei RWD helfen, sind aber keine Voraussetzung. Flexible Raster, relative Einheiten sowie minimale und maximale Werte für Einheiten können auch ohne Media Queries verwendet werden.

## Responsive Layout-Technologien

Responsive Websites basieren auf flexiblen Rastern, d.h. Sie müssen nicht jede mögliche Gerätegröße mit pixelgenauen Layouts anvisieren.

Mithilfe eines flexiblen Rasters können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel können Sie {{cssxref('columns')}} verwenden, um sicherzustellen, dass Zeilenlängen bei zunehmender Bildschirmgröße nicht unleserlich lang werden; wenn eine Box bei Verkleinerung gequetscht aussieht und zwei Wörter in jede Zeile passen, können Sie einen Breakpoint setzen.

Mehrere Layoutmethoden — darunter [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind standardmäßig responsiv. Alle gehen davon aus, dass Sie versuchen, ein flexibles Raster zu erstellen, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Items, indem sie den Raum zwischen den Items gemäß dem Platz in ihrem Container verteilen. Indem Sie die Werte für `flex-grow` und `flex-shrink` ändern, können Sie angeben, wie Sie möchten, dass sich die Items verhalten, wenn sie mehr oder weniger Platz um sich herum vorfinden.

Im unten stehenden Beispiel nimmt jedes Flex-Item eine gleiche Menge Platz im Flex-Container ein, indem das Kürzel `flex: 1` verwendet wird, wie zuvor diskutiert (siehe [Flexbox: Flexible Größeneinstellung von Flex-Items](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

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

Ändern Sie die Größe Ihres Bildschirms. Das Layout ändert sich, wenn die Größe des obigen Beispiels den 600px-Breiteschwellenwert überschreitet.

### CSS Grid

Im CSS Grid-Layout erlaubt die `fr`-Einheit die Verteilung des verfügbaren Raums über die Grid-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks, die auf `1fr` gesetzt sind. Dies wird drei Spaltentracks erstellen, die jeweils einen Teil des verfügbaren Raums im Container einnehmen. Sie haben diesen Ansatz bereits betrachtet (siehe [Flexible Raster mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) für eine Wiederholung).

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

## Responsive Images/Media

Um sicherzustellen, dass Medien nie größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medien, um sicherzustellen, dass sie niemals ihre Container überlaufen.

> [!NOTE]
> Die Verwendung eines einzigen großen Bildes und dessen Verkleinerung auf kleinere Geräte verschwendet Bandbreite, da Bilder größer heruntergeladen werden als nötig. Es kann auch schlecht aussehen — ein Landschaftsbild sieht z.B. auf einem Breitbildmonitor gut aus, auf einem mobilen Gerät, das besser ein Porträtbild darstellen könnte, jedoch schwer zu erkennen. Solche Probleme können durch die Verwendung des {{htmlelement("picture")}}-Elements und der {{htmlelement("img")}}-Attribute `srcset` und `sizes` gelöst werden. Diese sind fortgeschrittene Funktionen, die über den Umfang dieses Kurses hinausgehen, aber Sie finden eine detaillierte Anleitung unter [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images).

Andere nützliche Tipps:

- Stellen Sie sicher, dass Sie ein geeignetes Bildformat für Ihre Website-Bilder verwenden (wie PNG oder JPG) und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihre Website stellen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) verwenden, um visuelle Effekte ohne Bilder umzusetzen.
- Sie können Media Queries im Medienattribut auf {{htmlelement("source")}}-Elementen verschachtelt innerhalb von {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verwenden, um Video-/Audiodateien für verschiedene Geräte geeignet zu servieren (responsive Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewporteinheiten, um geringere oder größere Mengen an Bildschirmfläche widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Ebene 1 auf `4rem` setzen, das bedeutet, dass sie viermal so groß ist wie unsere Grundschriftgröße. Das ist eine wirklich große Überschrift! Wir wollen diese Jumbo-Überschrift nur auf größeren Bildschirmgrößen, daher erstellen wir zuerst eine kleinere Überschrift und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmgröße von mindestens `1200px` hat.

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

Wir haben unser responsives Rasterbeispiel oben bearbeitet, um auch responsive Typografie mit der beschriebenen Methode einzuschließen. Sie können sehen, wie die Überschrift die Größe ändert, wenn das Layout zur zweispaltigen Version wechselt.

Auf dem Handy ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftengröße:

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

Da dieser Ansatz für Typografie zeigt, müssen Sie Media Queries nicht auf das bloße Ändern des Layouts der Seite beschränken. Sie können verwendet werden, um jedes Element zu optimieren, um es bei alternativen Bildschirmgrößen benutzerfreundlicher oder ansprechender zu machen.

### Verwendung von Viewporteinheiten für responsive Typografie

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne Breakpoints mit Media Queries festlegen zu müssen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass wenn Sie Ihre Schriftgröße mit `vw` setzen, sie immer in Bezug auf die Größe des Viewports steht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der oben genannten Vorgehensweise ist, dass der Benutzer die Fähigkeit verliert, Text, der mit der `vw`-Einheit gesetzt wurde, zu zoomen, da dieser Text immer in Bezug auf die Größe des Viewports steht. **Daher sollten Sie Text niemals allein mit Viewporteinheiten setzen**.

Es gibt eine Lösung, und diese umfasst die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die `vw`-Einheit zu einem Wert hinzufügen, der mit einer festen Größe wie `em`s oder `rem`s gesetzt wurde, ist der Text immer noch zoombar. Im Wesentlichen fügt die `vw`-Einheit diesem vergrößerten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal angeben müssen, anstatt sie für Mobilgeräte einzurichten und in den Media Queries neu zu definieren. Die Schrift vergrößert sich dann schrittweise, während Sie die Größe des Viewports vergrößern.

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

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, sehen Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Gerätebreite setzen und das Dokument auf 100% seiner beabsichtigten Größe skalieren sollen, was das Dokument in der von Ihnen beabsichtigten für Mobilgeräte optimierten Größe anzeigt.

Warum ist das nötig? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil als Smartphones erstmals auftauchten, die meisten Websites nicht mobil optimiert waren. Der mobile Browser würde also die Viewport-Breite auf 980 Pixel setzen, die Seite in dieser Breite rendern und das Ergebnis als herausgezoomte Version des Desktop-Layouts anzeigen. Benutzer konnten auf die Teile der Seite zoomen und sie verschieben, an denen sie interessiert waren, aber es sah schlecht aus.

Durch das Setzen von `width=device-width` überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie Apples Standard `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne sie funktioniert Ihr responsives Design mit Breakpoints und Media Queries möglicherweise nicht wie beabsichtigt auf mobilen Browsern. Wenn Sie ein Layout für schmale Bildschirme haben, das bei 480px Viewport-Breite oder weniger auslöst, das Gerät jedoch angibt, dass es 980px breit ist, sieht dieser Benutzer Ihr schmales Bildschirmlayout nicht.

**Deshalb sollten Sie _immer_ das Viewport-Meta-Tag im Kopf Ihrer Dokumente einfügen.**

## Zusammenfassung

Responsives Design bezieht sich auf ein Site- oder Anwendungskonzept, das auf die Umgebung reagiert, in der es betrachtet wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist jetzt im Wesentlichen die Art und Weise, wie wir standardmäßig Websites erstellen. Betrachten Sie die Sites, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Site zu treffen, die die Desktop-Version ist, die verkleinert wurde, oder wo Sie seitlich scrollen müssen, um Dinge zu finden. Dies liegt daran, dass das Web diesen Ansatz des responsiven Designs übernommen hat.

Es ist auch viel einfacher geworden, responsive Designs mit den Methoden zu erreichen, die Sie in diesen Lektionen gelernt haben. Wenn Sie heute neu in der Webentwicklung sind, stehen Ihnen weitaus mehr Tools zur Verfügung als in den frühen Tagen des responsiven Designs. Es ist daher eine Überlegung wert, das Alter der Materialien zu überprüfen, die Sie verwenden. Während die historischen Artikel immer noch nützlich sind, machen moderne Anwendungen von CSS und HTML es wesentlich einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Site betrachtet.

Im nächsten Schritt werden wir Media Queries genauer untersuchen und zeigen, wie man sie nutzt, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivität auf Touchscreens oder Trackpads zu interpretieren und qualitativ hochwertige Unterstützung für komplexe Touch-basierte Benutzeroberflächen zu ermöglichen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um unterschiedliche CSS auf touchfähigen Geräten zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
