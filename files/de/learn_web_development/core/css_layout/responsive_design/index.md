---
title: Responsives Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsives Webdesign_ (RWD) ist ein Ansatz im Webdesign, um Webseiten so zu gestalten, dass sie auf allen Bildschirmgrößen und Auflösungen gut wiedergegeben werden und eine gute Benutzerfreundlichkeit gewährleisten. Es ist der Weg, um für ein Web mit mehreren Geräten zu entwerfen. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die verwendet werden können, um es zu meistern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist — Weblayouts so zu gestalten, dass sie flexibel sind und gut über verschiedene Geräteschirmgrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten korrekt anzuzeigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobiles Webdesign

Bevor responsives Webdesign der Standardansatz für die Erstellung von Websites wurde, die auf verschiedenen Gerätetypen funktionieren, sprachen Webentwickler oft über mobiles Webdesign, mobile Webentwicklung oder manchmal auch mobile-friendly Design. Diese sind im Grunde dasselbe wie responsives Webdesign — die Ziele sind sicherzustellen, dass Websites hinsichtlich Layout, Inhalt (Text und Medien) und Leistung gut über Geräte mit unterschiedlichen physischen Eigenschaften (Bildschirmgröße, Auflösung) funktionieren.

Der Unterschied liegt hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprachen wir über Desktop oder Mobilgeräte, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobilgeräte, Tablets, Uhren usw. Statt nur ein paar verschiedene Bildschirmgrößen zu berücksichtigen, müssen wir jetzt Websites so gestalten, dass sie für häufige Bildschirmgrößen und Auflösungen sowie unbekannte Variablen geeignet sind.
- Mobile Geräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten kein CSS oder sogar HTML, und daher war es üblich, serverseitiges Browser-Sniffing durchzuführen, um den Gerätetyp/Browsertyp zu bestimmen, bevor dann eine Site bereitgestellt wurde, mit der das Gerät umgehen konnte. Mobile Geräte erhielten oft wirklich einfache, grundlegende Erlebnisse, weil dies alles war, was sie verarbeiten konnten. Heutzutage können mobile Geräte dieselben Technologien wie Desktop-Computer handhaben, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten immer noch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Nutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt, die zu berücksichtigen sind.
  - Benutzererfahrung ist nach wie vor ein Anliegen. Ein mobiler Nutzer einer Reisewebsite möchte beispielsweise vielleicht nur die Flugzeiten und Verspätungsinformationen abrufen und nicht mit einem 3D-animierten Globus samt Flugrouten und Firmengeschichte konfrontiert werden.
- Moderne Technologien sind viel besser für die Erstellung von responsiven Erlebnissen geeignet. Beispielsweise können [Responsive Bilder/Medientechnologien](#responsive_imagesmedia) jetzt geeignete Medien an verschiedene Geräte ausliefern, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in das responsive Webdesign

HTML ist von Natur aus responsiv oder _flüssig_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster ändern, passt der Browser den Text automatisch an, um in den Viewport zu passen.

Obwohl das standardmäßige responsive Verhalten nach keiner Lösung klingt, können lange Textzeilen, die auf einem breiten Monitor im Vollbildmodus angezeigt werden, schwer zu lesen sein. Dieses Problem kann mit CSS gelöst werden, zum Beispiel durch Erstellen schmaler Spalten, um die Zeilenlänge zu begrenzen. Dies kann jedoch neue Probleme für Benutzer verursachen, die ihr Browserfenster verkleinern oder die Website auf einem mobilen Gerät ansehen — die Spalten erscheinen gequetscht und werden schwerer lesbar.

![Ein Layout mit zwei in eine Mobilgröße gequetschten Spalten.](mdn-rwd-liquid.png)

Das Erstellen einer nicht skalierbaren Webseite durch Festlegen einer festen Breite funktioniert ebenfalls nicht; dies führt zu Scrollbalken auf schmalen Geräten und zu viel leerem Raum auf breiten Bildschirmen.

Responsives Webdesign oder RWD ist ein Designansatz, der das gesamte Spektrum an verfügbaren Geräten und Gerätegrößen anspricht und eine automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder auf einer Uhr angezeigt wird.

Responsives Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät reagieren kann, das zum Anzeigen des Inhalts verwendet wird.

Der Begriff _Responsive Design_, [von Ethan Marcotte 2010 geprägt](https://alistapart.com/article/responsive-web-design/), beschreibt die Verwendung von flüssigen Grids, flüssigen Bildern und Media Queries, um responsive Inhalte zu erstellen.

Zu dieser Zeit war die Empfehlung, CSS `float` für das Layout zu verwenden und Media Queries zu nutzen, um die Browserbreite abzufragen und Layouts für unterschiedliche Breakpoints zu erstellen. Flüssige Bilder sind so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width`-Eigenschaft auf `100%` gesetzt. Flüssige Bilder verkleinern sich, wenn ihre enthaltene Spalte schmaler wird, wachsen jedoch nicht über ihre intrinsische Größe hinaus, wenn die Spalte wächst. Dies ermöglicht es einem Bild, sich so zu verkleinern, dass es in seinen Inhalt passt, statt ihn zu überlappen, aber es nicht größer zu machen und somit verpixelt zu werden, sollte der Container breiter als das Bild werden.

Moderne CSS-Layoutmethoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in die Webplattform integriert, um das Design von responsiven Seiten zu erleichtern.

Der Rest dieses Artikels erklärt die verschiedenen Funktionen der Webplattform, die Sie verwenden könnten, wenn Sie eine responsive Seite erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests (zum Beispiel, ob der Bildschirm des Benutzers größer als eine bestimmte Breite oder Auflösung ist) durchzuführen und CSS selektiv anzuwenden, um die Seite passend für die Bedürfnisse des Benutzers zu gestalten.

Zum Beispiel prüft die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedium angezeigt wird (also kein gedrucktes Dokument) und der Viewport mindestens `80rem` breit ist. Die `.container`-Regel wird nur angewendet, wenn diese beiden Bedingungen wahr sind.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können innerhalb eines Stylesheets mehrere Media Queries hinzufügen, um Ihr gesamtes Layout oder Teile davon an die unterschiedlichen Bildschirmgrößen anzupassen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout sich ändert, werden als _Breakpoints_ bezeichnet.

Ein üblicher Ansatz bei der Verwendung von Media Queries ist es, ein einfaches einspaltiges Layout für Geräte mit schmalem Bildschirm (zum Beispiel Mobiltelefone) zu erstellen und dann breitere Bildschirme zu prüfen und ein mehrspaltiges Layout einzuführen, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben, um es zu handhaben. Das Entwerfen für mobile Geräte zuerst wird als **Mobile First**-Design bezeichnet.

Wenn Sie Breakpoints verwenden, wird empfohlen, Media Query Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) statt mit absoluten Größen eines einzelnen Geräts zu definieren.

Es gibt verschiedene Ansätze für die Stile, die innerhalb eines Media Query-Blocks definiert sind; diese reichen von der Verwendung von Media Queries, um Stylesheets je nach Browsergröße mit {{htmlelement("link")}} zu laden, bis hin zur Verwendung von benutzerdefinierten Eigenschaftenvariablen, um Werte zu speichern, die jedem Breakpoint zugeordnet sind.

Media Queries können beim RWD helfen, sind jedoch keine Voraussetzung. Flexible Grids, relative Einheiten und minimale und maximale Einheit-Werte können auch ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba bietet ein Tutorial namens [Aside: Media Queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an, das eine interaktive Einführung in Media Queries plus eine Herausforderung bietet, um zu testen, ob Sie die Grundlagen verstanden haben.

## Responsive Layout-Technologien

Responsive Seiten basieren auf flexiblen Grids, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts beachten müssen.

Durch die Verwendung eines flexiblen Grids können Sie ein Feature ändern oder einen Breakpoint einfügen und das Design an dem Punkt ändern, an dem der Inhalt anfängt, schlecht auszusehen. Beispielsweise können Sie {{cssxref('columns')}} verwenden, um sicherzustellen, dass Zeilenlängen bei zunehmender Bildschirmgröße nicht unlesbar lang werden; wenn eine Box mit zwei Wörtern pro Zeile gequetscht wird, wenn sie schmaler wird, können Sie einen Breakpoint setzen.

Mehrere Layout-Methoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind standardmäßig responsiv. Sie gehen alle davon aus, dass Sie versuchen, ein flexibles Grid zu erstellen und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

Bei Flexbox schrumpfen oder wachsen Flex-Elemente und verteilen den Raum zwischen den Elementen entsprechend dem Platz in ihrem Container. Durch Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie sich die Elemente verhalten sollen, wenn sie mehr oder weniger Platz um sich herum haben.

Im unten stehenden Beispiel nehmen die Flex-Elemente jeweils den gleichen Platz im Flex-Container ein, indem sie die Abkürzung `flex: 1` verwenden, wie bereits besprochen (siehe [Flexbox: Flexible Größenanpassung von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Hier ist, wie wir Flexbox mit einer Media Query für ein responsives Design verwenden könnten.

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

Ändern Sie die Größe Ihres Browserfensters. Das Layout wechselt zwischen einem einspaltigen und einem zweispaltigen Layout, wenn die Größe des obigen Beispiels den `600px`-Breitenschwellenwert überschreitet.

### CSS Grid

Im CSS Grid Layout ermöglicht die `fr`-Einheit die Verteilung des verfügbaren Platzes über die Grid-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks, die auf `1fr` gesetzt sind. Dies erstellt drei Spaltentracks, die jeweils einen Teil des verfügbaren Platzes im Container einnehmen. Sie haben diesen Ansatz bereits betrachtet (siehe [Flexible Grids mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) für eine Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Hier ist, wie wir Grid-Layout mit einer Media Query für ein responsives Design verwenden könnten.

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

Auch hier sollten Sie Ihr Browserfenster ändern — Sie sollten sehen, wie sich das Layoutbeispiel bei Erreichen des `600px`-Breitenschwellenwerts ändert, ähnlich wie das vorherige Beispiel.

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien niemals größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medienelemente so, dass sie niemals ihre Container überlaufen.

> [!NOTE]
> Das Verwenden eines großen Bildes und dessen Herunterskalierung, um auf kleinen Geräten zu passen, verschwendet Bandbreite, indem Bilder heruntergeladen werden, die größer sind als benötigt. Es kann auch schlecht aussehen — ein Querformatbild zum Beispiel könnte auf einem Breitbildmonitor gut aussehen, aber auf einem mobilen Gerät schwer erkennbar sein, das eher für ein Hochformatbild geeignet wäre. Solche Probleme können mit dem {{htmlelement("picture")}}-Element und den `srcset`- und `sizes`-Attributen von {{htmlelement("img")}} gelöst werden. Dies sind erweiterte Funktionen, die über den Umfang dieses Kurses hinausgehen, aber Sie finden einen detaillierten Leitfaden unter [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images).

Weitere nützliche Tipps:

- Achten Sie darauf, ein geeignetes Bildformat für Ihre Website-Bilder zu verwenden (wie PNG oder JPG) und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihre Website stellen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) verwenden, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries im Media-Attribut auf {{htmlelement("source")}}-Elementen verwenden, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verschachtelt sind, um geeignete Video-/Audio-Dateien für verschiedene Geräte bereitzustellen (responsives Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt die Anpassung der Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewporteinheiten, um kleinere oder größere Mengen an Bildschirmfläche widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Stufe 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß wie unsere Basis-Schriftgröße ist. Das ist eine wirklich große Überschrift! Wir möchten diese Jumbo-Überschrift nur auf größeren Bildschirmgrößen verwenden, daher geben wir der Überschrift zuerst eine kleinere Größe von `2rem` und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer über eine Bildschirmbreite von mindestens `1200px` verfügt.

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

Das nächste Beispiel ist eine modifizierte Version unseres früheren responsiven Grid-Beispiels, das eine responsive Überschrift mit der beschriebenen Methode enthält. Auf Mobilgeräten ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftengröße:

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

Wie bei früheren Beispielen sollten Sie die Breite des Browserfensters ändern und beachten, wie nicht nur das Layout sich bei Erreichen des `600px`-Breitenschwellenwerts ändert, sondern auch die Überschriftengröße.

Wie dieser Ansatz für die Typografie zeigt, müssen Sie Media Queries nicht nur einschränken, um das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element zu optimieren, um es bei alternativen Bildschirmgrößen benutzerfreundlicher oder attraktiver zu machen.

### Verwendung von Viewporteinheiten für responsive Typografie

Viewporteinheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne die Notwendigkeit, Breakpoints mit Media Queries zu setzen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` festlegen, sie immer in Beziehung zur Größe des Viewports steht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der obigen Methode ist, dass der Benutzer die Fähigkeit verliert, jeglichen Text zu zoomen, der mit der `vw`-Einheit eingestellt ist, da dieser Text immer in Beziehung zur Größe des Viewports steht. **Daher sollten Sie niemals Text ausschließlich mit Viewporteinheiten festlegen**.

Es gibt eine Lösung, und diese beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die `vw`-Einheit zu einem mit einer festen Größe wie `em`s oder `rem`s festgelegten Wert hinzufügen, dann wird der Text weiterhin zoombar sein. Im Wesentlichen fügt die `vw`-Einheit zusätzlich zu diesem gezoomten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Dies bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal festlegen müssen, anstatt sie für Mobilgeräte einzurichten und in den Media Queries neu zu definieren. Die Schrift vergrößert sich dann allmählich, während Sie die Größe des Viewports erhöhen.

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

Versuchen Sie, das Browserfenster wie zuvor zu ändern und beachten Sie, wie dieses Mal die Überschriftengröße _allmählich_ ansteigt, während sich die Breite ändert.

## Der Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, sehen Sie im Allgemeinen den folgenden {{htmlelement("meta")}}-Tag im `<head>` des Dokuments.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieser [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)-Meta-Tag sagt mobilen Browsern, dass sie die Breite des Viewports auf die Breite des Geräts setzen und das Dokument auf 100% seiner vorgesehenen Größe skalieren sollen, was das Dokument in der gewünschten mobiloptimierten Größe anzeigt.

Warum ist dies erforderlich? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu lügen.

Dieser Meta-Tag existiert, weil als Smartphones erstmals auftauchten, die meisten Sites nicht für Mobilgeräte optimiert waren. Daher würde der mobile Browser die Viewport-Breite auf 980 Pixel setzen, die Seite in dieser Breite rendern und das Ergebnis als herausgezoomte Version des Desktop-Layouts anzeigen. Benutzer konnten heranzoomen und auf der Website hin und her schwenken, um die Teile zu sehen, die sie interessierten, aber es sah schlecht aus.

Indem Sie `width=device-width` setzen, überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie die Standardeinstellung des iPhones `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne dies funktioniert das von Ihnen geplante responsive Design mit Breakpoints und Media Queries auf mobilen Browsern möglicherweise nicht wie beabsichtigt. Wenn Sie ein schmaleres Bildschirm-Layout haben, das bei einer Viewport-Breite von 480px oder weniger ausgelöst wird, aber das Gerät angibt, dass es 980px breit ist, wird dieser Benutzer Ihr schmaleres Bildschirm-Layout nicht sehen.

**Daher sollten Sie den Viewport-Meta-Tag _immer_ im Head Ihrer Dokumente einbinden.**

Es gibt eine Reihe anderer Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags einfügen können — siehe [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element) für weitere Details.

## Zusammenfassung

Responsives Design bezieht sich auf ein Website- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es betrachtet wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist im Wesentlichen, wie wir standardmäßig Websites erstellen. Betrachten Sie die Websites, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Website zu stoßen, die die Desktop-Version herunterskaliert, oder wo Sie seitlich scrollen müssen, um Dinge zu finden. Dies liegt daran, dass das Web auf diesen Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs zu erreichen, dank der in diesem Artikel behandelten Layout-Methoden. Wenn Sie heute neu in der Webentwicklung sind, haben Sie viel mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Es lohnt sich daher, das Alter aller Materialien, die Sie verwenden, zu überprüfen. Während die historischen Artikel immer noch nützlich sind, macht die moderne Verwendung von CSS und HTML es viel einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Site betrachtet.

Als Nächstes werden wir Media Queries im Detail untersuchen und zeigen, wie man sie verwendet, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) bieten die Fähigkeit, Finger- (oder Stift-) Aktivität auf Touchscreens oder Trackpads zu interpretieren, wodurch eine qualitativ hochwertige Unterstützung für komplexe, auf Touchscreens basierende Benutzeroberflächen ermöglicht wird.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer)- oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer)-Media Queries, um andere CSSs auf touchfähigen Geräten zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Der Karriereweg für Frontend-Entwickler](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Front-End-Webentwickler zu werden, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, kompetenten Lehrern und einer unterstützenden Community. Gehen Sie von null bis zur Landung Ihres ersten Front-End-Jobs! Viele der Kurskomponenten sind als eigenständige, kostenlose Versionen verfügbar. Dazu gehört ein Modul zum responsiven Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
