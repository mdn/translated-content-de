---
title: Responsives Design
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: ee53700df17fc555dd0ffc9c66aeac89c3c8db70
---

{{learnsidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Web Design_ (RWD) ist ein Ansatz zur Webgestaltung, um Webseiten auf allen Bildschirmgrößen und Auflösungen gut darzustellen und gleichzeitig eine gute Benutzerfreundlichkeit sicherzustellen. Es ist der Weg, um für ein multi-device Web zu entwerfen. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die verwendet werden können, um es zu meistern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
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
          <li>Was responsives Design ist — Webseiten-Layouts so entwerfen, dass sie flexibel sind und gut auf verschiedenen Gerätebildschirmgrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Tools wie Grid und Flexbox und responsive Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten korrekt anzuzeigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobile Web Design

Bevor responsives Webdesign der Standardansatz wurde, um Websites auf verschiedenen Gerätetypen zum Laufen zu bringen, sprachen Webentwickler oft von Mobile Web Design, mobiler Webentwicklung oder manchmal von mobilfreundlichem Design. Im Grunde sind diese Begriffe dasselbe wie responsives Webdesign — das Ziel ist sicherzustellen, dass Websites auf Geräten mit unterschiedlichen physischen Eigenschaften (Bildschirmgröße, Auflösung) in Bezug auf Layout, Inhalt (Text und Medien) und Leistung gut funktionieren.

Der Unterschied bezieht sich hauptsächlich auf die beteiligten Geräte und die verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprach man von Desktop oder Mobilgeräten, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobilgeräte, Tablets, Uhren usw. Anstatt nur wenige Bildschirmgrößen zu berücksichtigen, müssen wir jetzt Seiten defensiv gestalten, um gängige Bildschirmgrößen und Auflösungen sowie Unbekanntes zu berücksichtigen.
- Mobilgeräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten kein CSS oder sogar HTML, und als Ergebnis war es üblich, serverseitige Browser-Erkennung durchzuführen, um den Geräte-/Browser-Typ zu bestimmen, bevor dann eine Site bereitgestellt wurde, die das Gerät verarbeiten konnte. Mobilgeräte hatten oft wirklich einfache, grundlegende Erlebnisse, die ihnen serviert wurden, weil das alles war, was sie bewältigen konnten. Heutzutage sind mobile Geräte in der Lage, dieselben Technologien wie Desktop-Computer zu verarbeiten, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken anwenden, um mobilen Nutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt, über die man sich Gedanken machen muss.
  - Auch die Benutzerfreundlichkeit ist ein Anliegen. Ein mobiler Nutzer einer Reiseseite möchte möglicherweise einfach nur Flugzeiten und Verspätungsmeldungen überprüfen und nicht mit einem 3D animierten Globus, der Flugrouten und die Firmengeschichte zeigt, konfrontiert werden. Dies kann jedoch mit responsiven Designtechniken gehandhabt werden.
- Moderne Technologien sind viel besser geeignet, um responsive Erlebnisse zu schaffen. Zum Beispiel ermöglichen [responsive Bilder-/Medientechnologien](#responsive_imagesmedia) jetzt, dass geeignete Medien an unterschiedliche Geräte ausgeliefert werden, ohne dass man sich auf Techniken wie serverseitiges Erkennen verlassen muss.

## Einführung in Responsive Webdesign

HTML ist von Natur aus responsive, oder _fluid_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, also ohne CSS, und das Fenster verkleinern, passt der Browser automatisch den Textfluss an, um in den Viewport zu passen.

Obwohl das Standardverhalten von Responsive möglicherweise so klingt, als wäre keine Lösung erforderlich, können lange Textzeilen, die auf einem großen Monitor bildschirmfüllend angezeigt werden, schwer zu lesen sein. Wenn die Zeilenlänge für große Bildschirme mit CSS reduziert wird, etwa durch Erstellen von Spalten oder Hinzufügen von erheblichem Abstand, kann die Seite für den Benutzer, der sein Browserfenster verkleinert oder die Seite auf einem mobilen Gerät öffnet, eingequetscht aussehen.

![Ein Layout mit zwei Spalten, die in einen mobilen Viewport gequetscht sind.](mdn-rwd-liquid.png)

Das Erstellen einer nicht anpassbaren Webseite durch Festlegen einer festen Breite funktioniert ebenfalls nicht; das führt zu Scrollbalken auf schmalen Geräten und zu viel leerem Raum auf großen Bildschirmen.

Responsive Webdesign, oder RWD, ist ein Designansatz, der die Bandbreite der Geräte und Gerätegrößen berücksichtigt und eine automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob die Inhalte auf einem Tablet, Telefon, Fernseher oder einer Uhr angezeigt werden.

Responsive Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das auf jedes zur Anzeige der Inhalte verwendete Gerät _reagieren_ kann.

Der Begriff _Responsive Design_, [im Jahr 2010 von Ethan Marcotte geprägt](https://alistapart.com/article/responsive-web-design/), beschrieb die Verwendung von Flüssigrastern, flüssigen Bildern und Media Queries, um responsive Inhalte zu schaffen.

Zu dieser Zeit empfahl man, für das Layout CSS-`float` und Media Queries zu verwenden, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Flüssige Bilder werden so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width` Eigenschaft auf `100%` gesetzt. Flüssige Bilder verkleinern sich, wenn ihre enthaltende Spalte schmaler wird, wachsen jedoch nicht über ihre intrinsische Größe hinaus, wenn die Spalte wächst. Dies ermöglicht es einem Bild, sich so zu verkleinern, dass es in seinen Inhalt passt, anstatt ihn zu überlaufen, aber nicht größer zu werden und pixelig auszusehen, wenn der Container breiter wird als das Bild.

Moderne CSS-Layout-Methoden sind von Natur aus responsive und wir haben seit der Veröffentlichung von Marcottes Artikel eine Vielzahl von Funktionen in die Webplattform integriert, um das Entwerfen responsiver Websites einfacher zu machen.

Der Rest dieses Artikels wird Sie auf die verschiedenen Webplattform-Features hinweisen, die Sie verwenden könnten, wenn Sie eine responsive Site erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) erlauben es uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Benutzers breiter als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite entsprechend den Bedürfnissen des Benutzers zu gestalten.

Zum Beispiel prüft die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedium angezeigt wird (daher kein gedrucktes Dokument) und ob der Viewport mindestens `80rem` breit ist. Das CSS für den `.container` Selektor wird nur angewendet, wenn diese beiden Dinge wahr sind.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries in einem Stylesheet hinzufügen und so das gesamte Layout oder Teile davon an die verschiedenen Bildschirmgrößen anpassen. Die Punkte, an denen eine Media Query eingeführt und das Layout geändert wird, sind als _Breakpoints_ bekannt.

Ein gängiger Ansatz bei der Verwendung von Media Queries ist es, ein einfaches Einspaltenlayout für schmale Bildschirme (z.B. Mobiltelefone) zu erstellen und dann für breitere Bildschirme zu prüfen und ein Mehrspaltenlayout zu implementieren, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben, um es zu handhaben. Das Designen auf Mobile-First-Basis ist als **Mobile-First**-Design bekannt.

Wenn Breakpoints verwendet werden, wird empfohlen, Media-Query-Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) statt mit absoluten Größen eines einzelnen Geräts zu definieren.

Es gibt verschiedene Ansätze für die in einem Media-Query-Block definierten Stile; diese reichen von der Verwendung von Media Queries, um mit dem {{htmlelement("link")}} Tag Stylesheets basierend auf Browsergrößenbereichen zu laden, bis hin zur ausschließlichen Nutzung von benutzerdefinierten Eigenschaftenvariablen, um Werte zu speichern, die mit jedem Breakpoint verbunden sind.

Media Queries können bei RWD helfen, sind aber keine Voraussetzung. Flexible Raster, relative Einheiten und minimaler und maximaler Einheitswerte können ohne Media Queries verwendet werden.

## Responsive Layout-Technologien

Responsive Sites basieren auf flexiblen Rastern, sodass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts anvisieren müssen.

Durch die Verwendung eines flexiblen Rasters können Sie eine Funktion ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel können Sie {{cssxref('columns')}} verwenden, um sicherzustellen, dass Zeilenlängen bei steigender Bildschirmgröße nicht unleserlich lang werden. Wenn eine Box beim Verschmälern auf zwei Wörter pro Zeile zusammenschrumpft, können Sie einen Breakpoint setzen.

Mehrere Layout-Methoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind standardmäßig responsive. Sie alle gehen davon aus, dass Sie versuchen, ein flexibles Raster zu erstellen, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente, indem sie den Platz zwischen den Elementen entsprechend dem Platz in ihrem Container verteilen. Durch Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie sich die Elemente verhalten sollen, wenn sie auf mehr oder weniger Platz rundherum stoßen.

Im folgenden Beispiel nimmt jedes Flex-Element einen gleichen Platz im Flex-Container ein, indem die Kurzschreibweise `flex: 1` verwendet wird, wie zuvor besprochen (siehe [Flexbox: Flexible Größenanpassung von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

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

Ändern Sie die Größe Ihres Bildschirms. Das Layout wird sich ändern, wenn die Größe des obigen Beispiels die 600px-Breiten-Schwelle überschreitet.

### CSS Grid

Im CSS-Grid-Layout ermöglicht die `fr` Einheit die Verteilung des verfügbaren Raums über Grid-Tracks. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks, die jeweils auf `1fr` gesetzt sind. Dies wird drei Spalten-Tracks erzeugen, die jeweils einen Teil des im Container verfügbaren Raumes einnehmen. Sie haben diesen Ansatz bereits gesehen (siehe [Flexible Raster mit der `fr` Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) zur Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Hier ist, wie wir das Grid-Layout mit einer Media Query für responsives Design verwenden könnten.

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

Um sicherzustellen, dass Medien niemals größer als ihr responsiver Container sind, kann folgender Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medien, um sicherzustellen, dass sie niemals ihre Container überlaufen.

> [!NOTE]
> Die Verwendung eines einzigen großen Bildes und dessen Herunterskalierung für kleine Geräte verschwendet Bandbreite, da Bilder heruntergeladen werden, die größer als erforderlich sind. Es kann auch schlecht aussehen — ein Landschaftsbild sieht beispielsweise auf einem Breitbildmonitor gut aus, könnte jedoch auf einem mobilen Gerät, für das ein Hochformatbild besser geeignet wäre, schwer zu erkennen sein. Solche Probleme können durch die Verwendung des {{htmlelement("picture")}}-Elements und der {{htmlelement("img")}}-Attribute `srcset` und `sizes` gelöst werden. Diese sind erweiterte Funktionen, die über den Umfang dieses Kurses hinausgehen, aber Sie können einen detaillierten Leitfaden unter [Responsive Images](/de/docs/Web/HTML/Responsive_images) finden.

Andere nützliche Tipps:

- Stellen Sie immer sicher, dass Sie ein geeignetes Bildformat für Ihre Webseitenbilder (wie PNG oder JPG) verwenden und die Dateigröße mit einem Grafikeditor optimieren, bevor Sie sie auf Ihrer Website platzieren.
- Sie können CSS-Features wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) verwenden, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries innerhalb des Attributs `media` auf {{htmlelement("source")}}-Elementen verwenden, die innerhalb von {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verschachtelt sind, um Video-/Audiodateien für verschiedene Geräte geeignet bereitzustellen (responsive Video-/Audioinhalte).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewport-Einheiten, um kleinere oder größere Mengen Bildschirmplatz widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Stufe 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß ist wie unsere Standardschriftgröße. Das ist eine wirklich große Überschrift! Wir möchten diese riesige Überschrift nur auf größeren Bildschirmen, daher erstellen wir zuerst eine kleinere Überschrift und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmgröße von mindestens `1200px` hat.

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

Wir haben unser responsives Gitterbeispiel oben bearbeitet, um auch responsive Typografie mit der beschriebenen Methode einzuschließen. Sie können sehen, wie sich die Überschriftengröße ändert, wenn das Layout zur zweispaltigen Version übergeht.

Auf mobilen Geräten ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftengröße:

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

Wie dieses Beispiel für Typografie zeigt, müssen Sie Media Queries nicht darauf beschränken, nur das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element zu optimieren, um es bei alternativen Bildschirmgrößen benutzerfreundlicher oder attraktiver zu machen.

### Verwendung von Viewport-Einheiten für responsive Typografie

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne dass Breakpoints mit Media Queries gesetzt werden müssen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` setzen, sie immer in Beziehung zur Größe des Viewports steht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der oben beschriebenen Methode ist, dass der Benutzer die Fähigkeit verliert, alle mit der `vw`-Einheit gesetzten Texte zu vergrößern, da dieser Text immer in Beziehung zur Größe des Viewports steht. **Daher sollten Sie niemals Text ausschließlich mit Viewport-Einheiten setzen**.

Es gibt eine Lösung, und sie beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die `vw`-Einheit zu einem mit einer festen Größe wie `em` oder `rem` festgesetzten Wert hinzufügen, ist der Text weiterhin vergrößerbar. Im Wesentlichen fügt die `vw`-Einheit über diesem vergrößerten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Dies bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal angeben müssen, anstatt sie für Mobilgeräte einzurichten und in den Media Queries neu zu definieren. Die Schriftgröße nimmt dann allmählich zu, wenn Sie die Größe des Viewports erhöhen.

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

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, werden Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [Viewport](/de/docs/Web/HTML/Viewport_meta_tag)-Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Gerätebreite einstellen und das Dokument auf 100 % seiner vorgesehenen Größe skalieren sollen, was das Dokument in der von Ihnen vorgesehenen mobilen-optimierten Größe zeigt.

Warum ist das notwendig? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil, als Smartphones erstmals aufkamen, die meisten Seiten nicht mobil-optimiert waren. Der mobile Browser setzte daher die Viewport-Breite auf 980 Pixel, stellte die Seite in dieser Breite dar und zeigte das Ergebnis als herausgezoomte Version des Desktop-Layouts. Benutzer konnten in die Webseite hineinzoomen und umher navigieren, um die für sie interessanten Teile zu sehen, aber es sah schlecht aus.

Durch das Setzen von `width=device-width` überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie die voreingestellte `width=980px` von Apple, mit der tatsächlichen Breite des Geräts. Ohne diese Einstellung funktioniert Ihr responsives Design mit Breakpoints und Media Queries möglicherweise nicht wie beabsichtigt auf mobilen Browsern. Wenn Sie ein schmaler Bildschirm-Layout haben, das bei einer Viewport-Breite von 480px oder weniger ausgelöst wird, das Gerät jedoch angibt, dass es 980px breit ist, wird der Benutzer Ihr schmales Bildschirm-Layout nicht sehen.

**Sie sollten das Viewport-Meta-Tag _immer_ im Head Ihrer Dokumente einfügen.**

## Zusammenfassung

Responsive Design bezieht sich auf ein Site- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es angezeigt wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist heute im Wesentlichen die standardmäßige Methode, wie wir Webseiten erstellen. Überlegen Sie, welche Websites Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Seite zu stoßen, die die Desktop-Version verkleinert ist, oder wo Sie seitwärts scrollen müssen, um Sachen zu finden. Das liegt daran, dass das Web sich zu diesem Ansatz des responsiven Designs entwickelt hat.

Es ist auch viel einfacher geworden, responsive Designs mit den Layoutmethoden zu erreichen, die Sie in diesen Lektionen gelernt haben. Wenn Sie heute neu in der Webentwicklung sind, haben Sie viele mehr Werkzeuge zur Verfügung als zu den Anfängen des responsiven Designs. Es lohnt sich daher, das Alter der Materialien, die Sie verwenden, zu überprüfen. Während die historischen Artikel immer noch nützlich sind, macht die moderne Verwendung von CSS und HTML es weit einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Seite ansieht.

Als nächstes werden wir Media Queries genauer untersuchen und zeigen, wie sie verwendet werden können, um einige häufige Probleme zu lösen.

## Siehe auch

- Arbeit mit Touchscreen-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) bieten die Fähigkeit, Finger- (oder Stift-) Aktivitäten auf Touchscreens oder Trackpads zu interpretieren, um hochwertige Unterstützung für komplexe, berührungsbasierte Benutzeroberflächen zu ermöglichen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um verschiedene CSS auf touchfähigen Geräten zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
