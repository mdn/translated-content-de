---
title: Responsives Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 2a4d705a12d76ee17e013f8a50007fd25029e0fc
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsives Webdesign_ (RWD) ist ein Ansatz im Webdesign, bei dem Webseiten auf allen Bildschirmgrößen und Auflösungen gut dargestellt werden und eine gute Benutzerfreundlichkeit gewährleistet ist. Es ist der Weg, um für ein Web zu entwerfen, das auf mehreren Geräten verfügbar ist. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die Sie beherrschen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstilangaben</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist — Weblayouts so gestalten, dass sie flexibel sind und auf verschiedenen Geräteseriengrößen, Auflösungen usw. gut funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, damit Webdokumente auf mobilen Geräten richtig angezeigt werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobiles Webdesign

Bevor responsives Webdesign zum Standardansatz für die Funktionsweise von Websites auf verschiedenen Gerätetypen wurde, sprachen Webentwickler über mobiles Webdesign, mobile Webentwicklung oder manchmal mobilfreundliches Design. Diese entsprechen im Wesentlichen dem responsiven Webdesign – die Ziele sind, sicherzustellen, dass Websites in Bezug auf Layout, Inhalt (Text und Medien) und Leistung gut auf Geräten mit unterschiedlichen physikalischen Eigenschaften (Bildschirmgröße, Auflösung) funktionieren.

Der Unterschied liegt hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprach man über Desktop oder Mobilgerät, aber jetzt gibt es viele verschiedene Gerätetypen, wie Desktop, Laptop, Mobilgerät, Tablets, Uhren usw. Anstatt auf einige verschiedene Bildschirmgrößen einzugehen, müssen wir jetzt Websites defensiv gestalten, um sowohl gewöhnliche Bildschirmgrößen und Auflösungen als auch Unbekannte zu berücksichtigen.
- Mobile Geräte waren früher in Bezug auf CPU/GPU und verfügbare Bandbreite schwach. Einige unterstützen kein CSS oder sogar HTML, und daher war es üblich, serverseitiges Browser-Sniffing durchzuführen, um den Geräte-/Browser-Typ zu bestimmen, bevor eine Seite serviert wurde, mit der das Gerät umgehen konnte. Mobilgeräte hatten oft wirklich einfache, grundlegende Erfahrungen bereitgestellt bekommen, weil es das Einzige war, was sie bewältigen konnten. Heutzutage sind Mobilgeräte in der Lage, dieselben Technologien wie Desktop-Computer zu handhaben, daher sind solche Techniken weniger verbreitet.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Benutzern geeignete Erlebnisse zu bieten, da es weiterhin Einschränkungen wie Akkulaufzeit und Bandbreite gibt, um die man sich sorgen muss.
  - Benutzererfahrung ist weiterhin ein Anliegen. Ein mobiler Benutzer einer Reiseseite möchte beispielsweise möglicherweise nur die Flugzeiten und Verspätungsinformationen überprüfen und nicht mit einem 3D-animierten Globus mit Flugrouten und Unternehmensgeschichte konfrontiert werden.
- Moderne Technologien sind viel besser für die Erstellung responsiver Erlebnisse geeignet. Zum Beispiel ermöglichen [technologien für responsive Bilder/Medien](#responsive_imagesmedia) jetzt, dass passende Medien an verschiedene Geräte gesendet werden, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in responsives Webdesign

HTML ist im Grunde genommen responsiv oder _fluid_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster ändern, rendert der Browser den Text automatisch so, dass er in den Viewport passt.

Obwohl das standardmäßige responsive Verhalten wie keine Lösung klingt, können lange Textzeilen, die auf einem breiten Monitor im Vollbild angezeigt werden, schwer lesbar sein. Dieses Problem kann mit CSS gelöst werden, indem beispielsweise schmale Spalten erstellt werden, um die Zeilenlänge zu begrenzen. Dies kann jedoch neue Probleme für Benutzer schaffen, die ihr Browserfenster verkleinern oder die Website auf einem mobilen Gerät anzeigen — die Spalten werden eingeengt und schwer lesbar.

![Ein Layout mit zwei Spalten, die in einen mobilen Viewport gequetscht sind.](mdn-rwd-liquid.png)

Eine nicht anpassbare Webseite zu erstellen, indem eine feste Breite festgelegt wird, funktioniert ebenfalls nicht; das führt zu Scrollbars auf schmalen Geräten und zu viel leerem Raum auf breiten Bildschirmen.

Responsives Webdesign oder RWD ist ein Designansatz, der die vollständige Bandbreite verfügbarer Geräte und Gerätegrößen anspricht und eine automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr angezeigt wird.

Responsives Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der eine Reihe bewährter Verfahren beschreibt, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät, das zur Anzeige des Inhalts verwendet wird, reagieren kann.

Der Begriff _responsives Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschreibt die Verwendung von fluide Rastern, fluiden Bildern und Media Queries, um responsive Inhalte zu erstellen.

Zu der Zeit war die Empfehlung, CSS `float` für das Layout und Media Queries, um die Browserbreite abzufragen, zu verwenden, um Layouts für verschiedene Breakpoints zu erstellen. Fluide Bilder sind so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; ihr `max-width`-Eigenschaft ist auf `100%` eingestellt. Fluide Bilder skalieren kleiner, wenn ihre enthaltene Spalte enger wird, wachsen aber nicht größer als ihre intrinsische Größe, wenn die Spalte breiter wird. Dadurch kann ein Bild kleiner skaliert werden, um in seinen Inhalt zu passen, anstatt ihn zu überlaufen, aber nicht größer werden und pixelig werden, wenn der Container breiter als das Bild wird.

Moderne CSS-Layout-Methoden sind im Wesentlichen responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Fülle von Funktionen, die in die Webplattform integriert sind, um das Entwerfen von responsiven Websites einfacher zu machen.

Der Rest dieses Artikels erklärt die verschiedenen Webplattform-Funktionen, die Sie bei der Erstellung einer responsiven Website nutzen möchten.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests (z. B. ob der Bildschirm des Benutzers breiter als eine bestimmte Breite oder Auflösung ist) durchzuführen und CSS selektiv anzuwenden, um die Seite entsprechend den Bedürfnissen des Benutzers zu gestalten.

Beispielsweise testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedien angezeigt wird (daher kein gedrucktes Dokument) und der Viewport mindestens `80rem` breit ist. Die `.container`-Regel wird nur angewendet, wenn diese beiden Bedingungen zutreffen.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries in einem Stylesheet hinzufügen und so Ihr gesamtes Layout oder Teile davon anpassen, um sie am besten an die verschiedenen Bildschirmgrößen anzupassen. Die Punkte, an denen eine Media Query eingeführt wird und sich das Layout ändert, werden als _Breakpoints_ bezeichnet.

Ein weit verbreiteter Ansatz bei der Verwendung von Media Queries ist die Erstellung eines einfachen einspaltigen Layouts für Geräte mit schmalem Bildschirm (z. B. Mobiltelefone) und das Überprüfen breiterer Bildschirme, um ein mehrspaltiges Layout zu implementieren, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben, um es zu handhaben. Das Design für Mobilgeräte zuerst wird als **Mobile-First-Design** bezeichnet.

Wenn Sie Breakpoints verwenden, werden Best Practices dazu ermutigen, Media Query Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) anzugeben, anstatt absolute Größen eines einzelnen Geräts.

Es gibt verschiedene Ansätze für die in einem Media-Query-Block definierten Stile; von der Verwendung von Media Queries zum {{htmlelement("link")}} Stylesheets basierend auf Browsergrößenbereichen bis hin zur Einbeziehung von benutzerdefinierten Eigenschaften, um Parameter zu speichern, die mit jedem Breakpoint verbunden sind.

Media Queries können beim RWD helfen, sind jedoch nicht zwingend erforderlich. Flexible Rastersysteme, relative Einheiten und Minimal- und Maximalwert-Einheiten können auch ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba hat ein Tutorial namens [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, das eine interaktive Einführung in Media Queries gibt sowie eine Herausforderung, um zu testen, ob Sie die Grundlagen verstanden haben.

## Responsive Layout-Technologien

Responsive Websites basieren auf flexiblen Rastern, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts ansprechen müssen.

Durch die Verwendung eines flexiblen Rasterschichten können Sie ein Merkmal ändern oder einen Breakpoint hinzufügen und das Design an der Stelle ändern, an der der Inhalt schlecht aussieht. Um beispielsweise sicherzustellen, dass Zeilenlängen nicht unlesbar lang werden, wenn die Bildschirmgröße zunimmt, können Sie {{cssxref('columns')}} verwenden; wenn ein Kasten eingequetscht wird und nur zwei Wörter pro Zeile hat, wenn er sich verengt, können Sie einen Breakpoint setzen.

Mehrere Layoutmethoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind standardmäßig responsiv. Sie gehen davon aus, dass Sie versuchen, ein flexibles Rastersystem zu erstellen, und bieten Ihnen einfachere Wege, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente und verteilen den Platz zwischen den Elementen entsprechend dem Platz in ihrem Container. Indem Sie die Werte für `flex-grow` und `flex-shrink` ändern, können Sie angeben, wie Sie möchten, dass die Elemente sich verhalten, wenn sie mit mehr oder weniger Platz um sie herum konfrontiert werden.

Im Beispiel unten nehmen die Flex-Elemente jeweils die gleiche Menge an Platz im Flex-Container ein, indem sie die Kurzform von `flex: 1` verwenden, wie zuvor besprochen (siehe [Flexbox: Flexible Größe von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

So könnten wir Flexbox mit einer Media Query für responsives Design nutzen.

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

Ändern Sie die Größe Ihres Browserfensters. Das Layout wechselt zwischen einem einspaltigen und einem zweispaltigen Layout, wenn die Größe des obigen Beispiels die `600px`-Breitenschwelle überschreitet.

### CSS Grid

Im CSS Grid-Layout ermöglicht die `fr`-Einheit die Verteilung des verfügbaren Raums über Gitterspuren. Das nächste Beispiel erstellt einen Gittersystem-Container mit drei Spuren, die mit `1fr` dimensioniert sind. Dies erstellt drei Spalten-Spuren, die jeweils einen Teil des verfügbaren Raums im Container einnehmen. Dieses Vorgehen haben Sie bereits betrachtet (siehe [Flexible Raster mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) zur Wiederholung).

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

Erneut versuchen Sie, Ihr Browserfenster zu ändern — Sie sollten sehen, dass das Beispiel-Layout an der `600px`-Breitenschwelle wechselt, ebenso wie im vorherigen Beispiel.

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien niemals größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medienelemente, um sicherzustellen, dass sie niemals ihre Container überlaufen.

> [!NOTE]
> Die Verwendung eines einzelnen großen Bildes und dessen Herunterskalierung, um kleine Geräte zu erreichen, verschwendet Bandbreite, indem größere Bilder heruntergeladen werden, als erforderlich sind. Es kann auch schlecht aussehen — ein Landschaftsbild könnte beispielsweise auf einem Breitbildmonitor gut aussehen, aber auf einem mobilen Gerät, das besser mit einem Porträtbild bedient wäre, schwer zu sehen sein. Solche Probleme können durch die Verwendung des {{htmlelement("picture")}}-Elements und der {{htmlelement("img")}}-Attribute `srcset` und `sizes` gelöst werden. Diese sind erweiterte Funktionen, die den Rahmen dieses Kurses sprengen, aber Sie finden eine ausführliche Anleitung unter [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images).

Weitere nützliche Tipps:

- Achten Sie immer darauf, ein geeignetes Bildformat für Ihre Website-Bilder zu verwenden (wie PNG oder JPG), und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihrer Website veröffentlichen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) verwenden, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries innerhalb des Media-Attributs auf {{htmlelement("source")}}-Elemente anwenden, die innerhalb von {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen geschachtelt sind, um Video-/Audiodateien entsprechend für verschiedene Geräte bereitzustellen (responsives Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt die Änderung von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewport-Einheiten, um größere oder kleinere Mengen an Bildschirmplatz widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Stufe 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß wie unsere Basis-Schriftgröße ist. Das ist eine wirklich große Überschrift! Wir möchten diese Jumbo-Überschrift nur auf größeren Bildschirmen, daher geben wir der Überschrift zunächst eine kleinere Größe von `2rem` und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

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

Das nächste Beispiel ist eine modifizierte Version unseres früheren Rastersystembeispiels mit einer responsiven Überschrift unter Verwendung der beschriebenen Methode. Auf dem Handy ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftgröße:

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

Wie bei den vorherigen Beispielen, versuchen Sie, die Browserfensterbreite zu ändern, und beachten Sie, wie nicht nur das Layout bei der `600px`-Breitenschwelle wechselt, sondern auch die Überschriftengröße.

Da dieser Ansatz zur Typografie zeigt, müssen Sie Media Queries nicht darauf beschränken, nur das Layout der Seite zu ändern. Sie können dazu verwendet werden, jedes Element so zu optimieren, dass es bei alternativen Bildschirmgrößen benutzerfreundlicher oder attraktiver wird.

### Verwendung von Viewport-Einheiten für responsive Typografie

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne dass Breakpoints mit Media Queries gesetzt werden müssen. `1vw` entspricht einem Prozent der Ansichtsfensterbreite, was bedeutet, dass wenn Sie Ihre Schriftgröße mit `vw` einstellen, sie immer in Beziehung zur Größe des Viewports steht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der oben genannten Methode ist, dass der Benutzer die Fähigkeit verliert, Text zu zoomen, der mit der `vw`-Einheit festgelegt ist, da dieser Text immer mit der Größe des Viewports korreliert ist. **Daher sollten Sie niemals Text alleine mit Viewport-Einheiten festlegen**.

Es gibt eine Lösung, die die Verwendung von [`calc()`](/de/docs/Web/CSS/calc) beinhaltet. Wenn Sie die `vw`-Einheit zu einem Wert hinzufügen, der mithilfe einer festen Größe wie `em`s oder `rem`s festgelegt wurde, wird der Text weiterhin vergrößerbar sein. Im Wesentlichen fügt die `vw`-Einheit zu diesem vergrößerten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Dies bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal angeben müssen, anstatt sie für Mobilgeräte zu definieren und in den Media Queries neu zu definieren. Die Schrift wird dann schrittweise größer, wenn Sie die Größe des Ansichtsfensters erhöhen.

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

Versuchen Sie, das Browserfenster zu ändern, wie zuvor, und beachten Sie, wie diesmal die Überschriftengröße _allmählich_ mit der Größenänderung wächst.

## Das Viewport-Meta-Tag

Wenn Sie den HTML-Quellcode einer responsiven Seite betrachten, werden Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)-Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Ansichtsfensters auf die Breite des Geräts setzen und das Dokument auf 100% seiner beabsichtigten Größe skalieren sollen, was das Dokument in der von Ihnen vorgesehenen mobil optimierten Größe anzeigt.

Warum ist das nötig? Weil mobile Browser dazu neigen, über ihre Ansichtsfensterbreite zu lügen.

Dieses Meta-Tag existiert, weil als Smartphones zuerst erschienen, die meisten Websites nicht für Mobilgeräte optimiert waren. Der mobile Browser würde daher die Ansichtsfensterbreite auf 980 Pixel setzen, die Seite in dieser Breite rendern und das Ergebnis als herausgezoomte Version des Desktop-Layouts anzeigen. Benutzer konnten in die Webseite hinein- und herrauszoomen, um die interessanten Teile zu betrachten, aber es sah schlecht aus.

Indem Sie `width=device-width` einstellen, überschreiben Sie die Standardeinstellung eines mobilen Geräts wie die des iPhones, `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne sie funktioniert Ihr responsives Design mit Breakpoints und Media Queries möglicherweise nicht wie beabsichtigt auf mobilen Browsern. Wenn Sie ein Layout für ein schmales Display von weniger als 480px Ansichtsfensterbreite haben, dies aber als 980px Breite dargestellt wird, wird dieser Benutzer Ihr Layout für schmale Bildschirme nicht sehen.

**Daher sollten Sie _immer_ das Viewport-Meta-Tag in den Kopf Ihrer Dokumente einfügen.**

Es gibt eine Reihe anderer Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags verwenden können — siehe [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element) für weitere Details.

## Zusammenfassung

Responsives Design bezieht sich auf ein Design einer Website oder Anwendung, das auf die Umgebung reagiert, in der es angezeigt wird. Es umfasst eine Anzahl von CSS- und HTML-Funktionen und -Techniken und ist im Wesentlichen die Art und Weise, wie wir standardmäßig Websites erstellen. Überlegen Sie sich die Websites, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Site zu stoßen, die die Desktop-Version verkleinert ist oder auf der Sie seitlich scrollen müssen, um Dinge zu finden. Das liegt daran, dass das Web zu diesem Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs mit Hilfe der in diesem Artikel behandelten Layout-Methoden zu erreichen. Wenn Sie heute mit der Webentwicklung anfangen, haben Sie viel mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Es lohnt sich daher, das Alter der Materialien zu überprüfen, die Sie verwenden. Während die historischen Artikel immer noch nützlich sind, macht die moderne Verwendung von CSS und HTML es viel einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Website ansieht.

Als Nächstes werden wir Media Queries genauer studieren und zeigen, wie man sie zur Lösung einiger häufiger Probleme verwenden kann.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch-Events](/de/docs/Web/API/Touch_events) ermöglichen es, Aktivität mit dem Finger (oder Stylus) auf Touchscreens oder Trackpads zu interpretieren, um hochwertigen Support für komplexe berührungsbasierte Benutzeroberflächen zu ermöglichen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer)- oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer)-Media Queries, um bei Touch-fähigen Geräten unterschiedliche CSS zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [The Frontend Developer Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Frontend-Webentwickler zu sein, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, kenntnisreichen Lehrern und einer unterstützenden Community. Gehen Sie von Null aus, um Ihren ersten Frontend-Job zu landen! Viele der Kursinhalte sind als eigenständige kostenlose Versionen verfügbar. Dazu gehört ein Modul über responsives Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
