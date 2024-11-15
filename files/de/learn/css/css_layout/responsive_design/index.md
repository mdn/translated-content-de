---
title: Responsives Design
slug: Learn/CSS/CSS_layout/Responsive_Design
l10n:
  sourceCommit: ca6d4f6114d278926e183225a90fd2209802cfe9
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Webdesign-Ansatz, um Webseiten so zu gestalten, dass sie auf allen Bildschirmgrößen und -auflösungen gut angezeigt werden und eine gute Benutzerfreundlichkeit bieten. Es ist die Methode, um für das Web auf verschiedenen Geräten zu gestalten. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die Sie dabei unterstützen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (Studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (Studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">CSS Bausteine</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Ziel ist, die grundlegenden Ziele und CSS-Funktionen zu verstehen, die zur Umsetzung responsiver Designs verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobiles Webdesign

Bevor responsives Webdesign der Standardansatz wurde, um Webseiten für verschiedene Gerätetypen funktionsfähig zu machen, sprachen Webentwickler oft über mobiles Webdesign, mobile Webentwicklung oder manchmal mobiltaugliches Design. Diese sind im Grunde das gleiche wie responsives Webdesign – die Ziele sind, sicherzustellen, dass Webseiten in Bezug auf Layout, Inhalt (Text und Medien) und Leistung auf Geräten mit unterschiedlichen physischen Eigenschaften (Bildschirmgröße, Auflösung) gut funktionieren.

Der Unterschied liegt hauptsächlich in den verwendeten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprachen wir von Desktop oder Mobilgerät, aber heute gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobilgeräte, Tablets, Uhren usw. Anstatt nur auf einige wenige verschiedene Bildschirmgrößen einzugehen, müssen wir jetzt Seiten defensiv gestalten, um gängige Bildschirmgrößen und -auflösungen sowie unbekannte anzusprechen.
- Mobile Geräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten kein CSS oder sogar HTML, und daher war es üblich, serverseitiges Browsersniffing durchzuführen, um den Geräte-/Browswertyp zu bestimmen und dann eine Seite bereitzustellen, die das Gerät verarbeiten konnte. Mobilgeräte hatten oft sehr einfache, grundlegende Erlebnisse, da dies alles war, was sie bewältigen konnten. Heutzutage sind Mobilgeräte in der Lage, dieselben Technologien wie Desktop-Computer zu verarbeiten, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken anwenden, um mobilen Nutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt, um die man sich sorgen muss.
  - Auch die Benutzererfahrung ist ein Anliegen. Ein mobiler Nutzer einer Reisewebsite möchte vielleicht nur die Flugzeiten und Verspätungsinformationen überprüfen und nicht ein animiertes 3D-Globus mit Flugrouten und Ihrer Firmengeschichte präsentiert bekommen. Dies kann jedoch mit responsiven Designtechniken gehandhabt werden.
- Moderne Technologien sind viel besser für die Erstellung responsiver Erfahrungen geeignet. Zum Beispiel ermöglichen [Technologien für responsive Bilder/Medien](#responsive_imagesmedia) jetzt die Bereitstellung geeigneter Medien für verschiedene Geräte, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in responsives Webdesign

HTML ist grundsätzlich responsiv oder _fluid_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und Sie die Fenstergröße ändern, passt der Browser den Text automatisch an, um in den Ansichtsbereich zu passen.

Während das standardmäßige responsive Verhalten so klingt, als wäre keine Lösung erforderlich, können lange Textzeilen, die auf einem breiten Monitor bildschirmfüllend angezeigt werden, schwer lesbar sein. Wenn die Bildschirmbreitenlinienlänge mit CSS reduziert wird, z.B. durch Erstellen von Spalten oder Hinzufügen beträchtlichen Abstands, kann die Seite für den Benutzer, der das Browserfenster verengt oder die Seite auf einem Mobilgerät öffnet, eingequetscht aussehen.

![Ein Layout mit zwei Spalten, das in einen mobilen Ansichtsbereich gequetscht wurde.](mdn-rwd-liquid.png)

Eine nicht-resizable Webseite zu erstellen, indem man eine feste Breite festlegt, funktioniert ebenfalls nicht; das würde zu Scrollleisten auf schmalen Geräten und zu viel leerem Raum auf breiten Bildschirmen führen.

Responsives Webdesign, oder RWD, ist ein Designansatz, der die Bandbreite an Geräten und Gerätegrößen anspricht, wobei die automatische Anpassung an den Bildschirm ermöglicht wird, egal ob die Inhalte auf einem Tablet, Telefon, Fernseher oder einer Uhr angezeigt werden.

Responsives Webdesign ist keine separate Technologie – es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die verwendet werden, um ein Layout zu gestalten, das auf jedes verwendete Gerät reagieren kann, um die Inhalte anzusehen.

Der Begriff _Responsive Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschrieb die Verwendung fluiden Gitternetzen, fluiden Bildern und Media Queries zur Erstellung responsiver Inhalte, wie sie in Zoe Mickley Gillenwaters Buch [Flexible Web Design](https://flexiblewebbook.com/) behandelt werden.

Zu dieser Zeit war die Empfehlung, CSS `float` für das Layout zu verwenden und Media Queries zu nutzen, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Fluide Bilder sind so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width`-Eigenschaft auf `100%` gesetzt. Fluide Bilder verkleinern sich, wenn ihre umgebende Spalte enger wird, wachsen jedoch nicht über ihre intrinsische Größe hinaus, wenn die Spalte größer wird. Dies ermöglicht einem Bild, sich anzupassen, um in sein Layout zu passen, anstatt es zu überlaufen, aber nicht größer zu werden und pixelig zu wirken, wenn der Container breiter als das Bild wird.

Moderne CSS-Layoutmethoden sind von Natur aus responsiv, und seit der Veröffentlichung von Gillenwaters Buch und Marcottes Artikel haben wir eine Vielzahl von Funktionen im Web-Plattform, um das Design von responsiven Websites zu erleichtern.

Der Rest dieses Artikels wird Sie auf die verschiedenen Webplattform-Funktionen hinweisen, die Sie verwenden könnten, wenn Sie eine responsive Seite erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (z.B. ob der Bildschirm des Nutzers größer als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite entsprechend den Bedürfnissen des Nutzers zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als „Screen Media“ angezeigt wird (also kein gedrucktes Dokument) und der Ansichtsbereich mindestens `80rem` breit ist. Das CSS für den `.container`-Selektor wird nur angewendet, wenn diese beiden Bedingungen wahr sind.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen, wobei Sie Ihr gesamtes Layout oder Teile davon anpassen können, um es den verschiedenen Bildschirmgrößen bestmöglich anzupassen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout geändert wird, nennt man _Breakpoints_.

Ein häufiger Ansatz beim Verwenden von Media Queries ist es, ein einfaches Einkollonnen-Layout für schmale Bildschirmgeräte (z.B. Mobiltelefone) zu erstellen und dann nach breiteren Bildschirmen zu suchen und ein Mehrkolonnen-Layout zu implementieren, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben, um es zu bewältigen. Das Design mit mobile first wird als **mobile first**-Design bezeichnet.

Wenn Sie Breakpoints verwenden, empfehlen Best Practices, die Media Query-Breakpoints mit [relativen Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) und nicht mit absoluten Größen eines einzelnen Geräts zu definieren.

Es gibt verschiedene Ansätze zu den innerhalb eines Media Query-Blocks definierten Stilen; vom Verlinken von Stylesheets über Browsergrößenbereiche bis hin zur Verwendung von benutzerdefinierten Eigenschaftsvariablen zur Speicherung von mit jedem Breakpoint verbundenen Werten.

Erfahren Sie mehr in der MDN-Dokumentation zu [Media Queries](/de/docs/Web/CSS/CSS_media_queries).

Media Queries können RWD unterstützen, sind jedoch keine Voraussetzung. Flexible Rasters, relative Einheiten und Mindest- und Maximal-Einheitswerte können ohne Queries verwendet werden.

## Responsive Layout-Technologien

Responsive Webseiten basieren auf flexiblen Gitternetzen, das bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts gezielt ansprechen müssen.

Durch die Verwendung eines flexiblen Gitternetzes können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Um sicherzustellen, dass Zeilenlängen nicht unlesbar lang werden, wenn die Bildschirmgröße zunimmt, können Sie {{cssxref('columns')}} verwenden; wenn eine Box eingequetscht wird, mit nur zwei Wörtern in jeder Zeile, wenn sie enger wird, können Sie einen Breakpoint setzen.

Mehrere Layoutmethoden, einschließlich [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout), [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) und [Grid](/de/docs/Learn/CSS/CSS_layout/Grids) sind standardmäßig responsiv. Sie gehen alle davon aus, dass Sie versuchen, ein flexibles Gitternetz zu erstellen und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Multicol

Mit multicol spezifizieren Sie eine `column-count`, um die maximale Anzahl von Spalten anzugeben, in die Ihr Inhalt geteilt werden soll. Der Browser ermittelt dann die Größe dieser, eine Größe, die sich je nach Bildschirmgröße ändert.

```css
.container {
  column-count: 3;
}
```

Wenn Sie stattdessen eine `column-width` angeben, geben Sie eine _Mindestbreite_ an. Der Browser erstellt so viele Spalten dieser Breite, wie bequem in den Container passen, und verteilt dann den verbleibenden Platz zwischen allen Spalten. Daher wird sich die Anzahl der Spalten je nach verfügbarem Platz ändern.

```css
.container {
  column-width: 10em;
}
```

Sie können die {{cssxref('columns')}}-Kurzform verwenden, um eine maximale Anzahl von Spalten und eine Mindestspaltenbreite festzulegen. Dies kann sicherstellen, dass Zeilenlängen nicht unlesbar lang werden, wenn die Bildschirmgröße zunimmt oder zu schmal, wenn die Bildschirmgröße abnimmt.

### Flexbox

Bei flexbox schrumpfen oder wachsen Flex-Elemente, indem sie den Raum zwischen den Elementen entsprechend dem Raum in ihrem Container verteilen. Durch das Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass sich die Elemente verhalten, wenn sie mehr oder weniger Raum um sie herum haben.

Im folgenden Beispiel nehmen die Flex-Elemente jeweils den gleichen Raum im Flex-Container ein, indem die Kurzform von `flex: 1` verwendet wird, wie im Layout-Thema [Flexbox: Flexible Größenanpassung von Flex-Elementen](/de/docs/Learn/CSS/CSS_layout/Flexbox#flexible_sizing_of_flex_items) beschrieben.

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Hier sehen Sie, wie wir Flexbox mit einer Media Query für responsives Design verwenden könnten.

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

Ändern Sie die Größe Ihres Bildschirms. Das Layout wird sich ändern, wenn die Größe des obigen Beispiels die 600px-Grenze überschreitet.

### CSS Grid

Im CSS-Grid-Layout ermöglicht die Einheit `fr` die Verteilung des verfügbaren Raums über die Gitterspuren. Das nächste Beispiel erstellt einen Grid-Container mit drei Spuren, die auf `1fr` bemessen sind. Dies wird drei Spaltenspuren erstellen, die jeweils einen Teil des verfügbaren Raums im Container einnehmen. Sie können mehr über diesen Ansatz zur Erstellung eines Grids im Thema „Learn Layout Grids“ unter [Flexible Grids mit der fr-Einheit](/de/docs/Learn/CSS/CSS_layout/Grids#flexible_grids_with_the_fr_unit) herausfinden.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Hier sehen Sie, wie wir das Grid-Layout mit einer Media Query für responsives Design verwenden könnten.

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

Um sicherzustellen, dass Medien nie größer sind als ihr responsiver Container, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medien, um sicherzustellen, dass sie nie aus ihren Containern herausfließen. Die Verwendung eines einzelnen großen Bildes und das Herunterskalieren auf kleinere Geräte verschwendet Bandbreite, indem größere Bilder als nötig heruntergeladen werden.

Responsive Images, die das {{htmlelement("picture")}}-Element und die {{htmlelement("img")}}-Attribute `srcset` und `sizes` verwenden, ermöglichen es, Bilder bereitzustellen, die auf den Ansichtsbereich des Nutzers und die Auflösung des Geräts zugeschnitten sind. Zum Beispiel können Sie ein quadratisches Bild für das Handy einbinden, aber dieselbe Szene als Landschaftsbild auf dem Desktop anzeigen.

Das `<picture>`-Element ermöglicht es, mehrere Größen zusammen mit „Hinweisen“ (Metadaten, die die Bildschirmgröße und Auflösung beschreiben, für die das Bild am besten geeignet ist) bereitzustellen, und der Browser wählt das am besten geeignete Bild für jedes Gerät aus, wodurch sichergestellt wird, dass ein Nutzer eine Bildgröße herunterlädt, die für das Gerät geeignet ist, das er verwendet. Die Verwendung von `<picture>` zusammen mit `max-width` macht das Größenanpassen von Bildern mit Media Queries überflüssig. Es ermöglicht das Anpeilen von Bildern mit unterschiedlichen {{Glossary("aspect_ratio", "Seitenverhältnissen")}} für verschiedene Ansichtsgrößen.

Sie können auch Bilder zu verschiedenen Größen künstlerisch gestalten, um einen anderen Zuschnitt oder ein völlig anderes Bild für verschiedene Bildschirmgrößen bereitzustellen.

Sie finden eine ausführliche [Anleitung zu Responsive Images im Abschnitt Learn HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) hier auf MDN.

Weitere nützliche Tipps:

- Stellen Sie immer sicher, dass Sie für Ihre Websitebilder ein geeignetes Bildformat (wie PNG oder JPG) verwenden und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihre Website stellen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) nutzen, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries im Medienattribut auf {{htmlelement("source")}}-Elementen verwenden, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verschachtelt sind, um Video-/Audiodateien für verschiedene Geräte geeignet bereitzustellen (responsives Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Ansichteinheiten, um weniger oder mehr Bildschirmfläche widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Stufe 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß ist wie unsere Basis-Schriftgröße. Das ist eine wirklich große Überschrift! Wir möchten diese Jumbo-Überschrift nur auf größeren Bildschirmgrößen, daher erstellen wir zuerst eine kleinere Überschrift und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Nutzer eine Bildschirmgröße von mindestens `1200px` hat.

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

Wir haben unser obiges Beispiel mit dem responsiven Grid bearbeitet, um auch responsive Typen nach der beschriebenen Methode zu enthalten. Sie können sehen, wie die Überschrift die Größe ändert, wenn das Layout zur zweispaltigen Version wechselt.

Auf dem Handy ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftengröße:

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

Wie dieser Ansatz zur Typografie zeigt, müssen Sie Media Queries nicht darauf beschränken, nur das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element zu optimieren, um es in alternativen Bildschirmgrößen nutzbarer oder attraktiver zu machen.

### Verwendung von Ansichteinheiten für responsive Typografie

Ansichteinheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne die Notwendigkeit, Breakpoints mit Media Queries festzulegen. `1vw` entspricht einem Prozent der Ansichtsbreite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` setzen, sie immer in Bezug auf die Größe des Ansichtsbereichs steht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der obigen Methode ist, dass der Benutzer die Fähigkeit verliert, Text zu zoomen, der mit der Einstellung `vw` festgelegt wurde, da dieser Text immer in Bezug auf die Größe des Ansichtsbereichs steht. **Daher sollten Sie niemals Text nur mit Ansichteinheiten festlegen.**

Es gibt eine Lösung, und sie beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die Einheit `vw` zu einem mit einer festen Größe wie `em` oder `rem` festgelegten Wert hinzufügen, wird der Text weiterhin vergrößerbar sein. Im Wesentlichen wird die `vw`-Einheit zu diesem vergrößerten Wert addiert:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal festlegen müssen, anstatt sie für Mobilgeräte einzurichten und sie in den Media Queries neu zu definieren. Die Schrift wird dann allmählich größer, wenn Sie die Größe des Ansichtsbereichs erhöhen.

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

## Das Meta-Tag für den Ansichtsbereich

Wenn Sie den HTML-Quellcode einer responsiven Seite ansehen, werden Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [viewport](/de/docs/Web/HTML/Viewport_meta_tag) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Ansichtsbereiches auf die Gerätebreite einstellen und das Dokument auf 100 % seiner vorgesehenen Größe skalieren sollen, was das Dokument in der von Ihnen vorgesehenen, für Mobilgeräte optimierten Größe anzeigt.

Warum ist das nötig? Weil mobile Browser dazu neigen, über ihre Ansichtsbreite zu lügen.

Dieses Meta-Tag existiert, weil, als Smartphones zum ersten Mal aufkamen, die meisten Seiten nicht für Mobilgeräte optimiert waren. Der mobile Browser würde daher die Ansichtsbreite auf 980 Pixel festlegen, die Seite in dieser Breite rendern und das Ergebnis als herausgezoomte Version des Desktop-Layouts anzeigen. Nutzer konnten heranzoomen und auf der Website herumpanorieren, um die Teile zu sehen, die sie interessierten, aber es sah schlecht aus.

Indem Sie `width=device-width` festlegen, überschreiben Sie den Standard eines mobilen Geräts, wie Apples Standard `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne dies funktioniert Ihr responsives Design mit Breakpoints und Media Queries möglicherweise nicht wie beabsichtigt auf mobilen Browsern. Wenn Sie ein schmales Bildschirm-Layout erstellen, das bei 480px Ansichtsbreite oder weniger greift, aber das Gerät sagt, es sei 980px breit, wird dieser Nutzer Ihr schmales Bildschirm-Layout nicht sehen.

**Deshalb sollten Sie _immer_ das Viewport-Meta-Tag im Kopf Ihrer Dokumente einfügen.**

## Zusammenfassung

Responsives Design bezieht sich auf ein Website- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es angezeigt wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist heutzutage im Wesentlichen die Standardmethode, wie wir Webseiten erstellen. Berücksichtigen Sie die Seiten, die Sie auf Ihrem Handy besuchen – es ist wahrscheinlich recht ungewöhnlich, auf eine Seite zu stoßen, die die Desktop-Version herunterskaliert ist, oder auf der Sie seitlich scrollen müssen, um Dinge zu finden. Das liegt daran, dass das Web zu diesem Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs zu erreichen, dank der Layoutmethoden, die Sie in diesen Lektionen gelernt haben. Wenn Sie heute neu im Bereich Webentwicklung sind, haben Sie viele mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Es lohnt sich daher, das Alter der Materialien, die Sie verwenden, zu überprüfen. Während historische Artikel immer noch nützlich sind, macht die moderne Verwendung von CSS und HTML es viel einfacher, elegante und nützliche Designs zu erstellen, egal auf welchem Gerät Ihr Besucher die Seite sieht.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-)Aktivitäten auf Touchscreens oder Trackpads zu interpretieren und qualitativ hochwertige Unterstützung für komplexe, touch-basierte Benutzeroberflächen zu ermöglichen.
  - Verwenden Sie die Media Queries [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer), um auf touchfähigen Geräten unterschiedliche CSS zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}
