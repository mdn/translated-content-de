---
title: Responsives Design
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{learnsidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsives Webdesign_ (RWD) ist ein Ansatz im Webdesign, der darauf abzielt, dass Webseiten auf allen Bildschirmgrößen und Auflösungen gut dargestellt werden und dabei eine gute Benutzerfreundlichkeit gewährleisten. Es ist der Weg, das Web für mehrere Geräte zu gestalten. In diesem Artikel werden wir Ihnen helfen, einige Techniken zu verstehen, die beherrscht werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist — Weblayouts so zu gestalten, dass sie flexibel sind und auf verschiedenen Gerätedisplays, Bildschirmgrößen, Auflösungen etc. gut funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Werkzeugen wie Grid und Flexbox und responsivem Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-first und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente auf mobilen Geräten angemessen anzuzeigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobiles Webdesign

Bevor responsives Webdesign der Standardansatz wurde, um Websites auf verschiedenen Gerätetypen funktionsfähig zu machen, sprachen Webentwickler von mobilem Webdesign, mobiler Webentwicklung oder manchmal mobilfreundlichem Design. Diese Begriffe sind im Grunde das Gleiche wie responsives Webdesign — das Ziel ist, sicherzustellen, dass Websites auf Geräten mit unterschiedlichen physischen Eigenschaften (Bildschirmgröße, Auflösung) in Bezug auf Layout, Inhalte (Text und Medien) und Leistung gut funktionieren.

Der Unterschied besteht hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprach man von Desktop oder Mobile, aber heute gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobile, Tablets, Uhren usw. Statt für einige verschiedene Bildschirmgrößen zu entwerfen, müssen wir jetzt Websites defensiv so gestalten, dass sie gängige Bildschirmgrößen und -auflösungen sowie Unbekannten gerecht werden.
- Mobile Geräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten weder CSS noch HTML, und daher war es üblich, serverseitiges Browser-Sniffing durchzuführen, um den Gerätetyp/Browsertipp zu bestimmen, bevor eine Website bereitgestellt wurde, die das Gerät bewältigen konnte. Mobilgeräte hatten oft wirklich einfache, grundlegende Erlebnisse, weil es alles war, was sie bewältigen konnten. Heutzutage können Mobilgeräte die gleichen Technologien wie Desktop-Computer bewältigen, sodass solche Techniken seltener werden.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Benutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt, die beachtet werden müssen.
  - Auch die Benutzererfahrung ist ein Anliegen. Ein mobiler Benutzer einer Reise-Website möchte möglicherweise nur Flugzeiten und Verzögerungsinformationen überprüfen und nicht mit einem 3D-animierten Globus, der Flugrouten und Ihre Unternehmensgeschichte zeigt, konfrontiert werden. Dies kann jedoch mit responsiven Design-Techniken gehandhabt werden.
- Moderne Technologien sind viel besser für die Erstellung responsiver Erlebnisse geeignet. Beispielsweise ermöglichen [technologien für responsive Bilder/Medien](#responsive_imagesmedia) jetzt, dass geeignete Medien auf verschiedenen Geräten bereitgestellt werden können, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in responsives Webdesign

HTML ist grundsätzlich responsiv oder _fluid_. Wenn Sie eine Webseite nur mit HTML ohne CSS erstellen und das Fenster anpassen, wird der Browser den Text automatisch in den verfügbaren Bereich neu umfließen lassen.

Auch wenn das standardmäßige responsive Verhalten so klingen mag, als wäre keine Lösung erforderlich, können lange Textzeilen, die im Vollbildmodus auf einem breiten Bildschirm angezeigt werden, schwer zu lesen sein. Wenn die Zeilenlänge im Breitbildmodus mit CSS reduziert wird, etwa durch Spaltenbildung oder Hinzufügen erheblicher Abstände, sieht die Seite für den Benutzer, der sein Browserfenster verkleinert oder die Seite auf einem mobilen Gerät öffnet, möglicherweise zusammengedrückt aus.

![Ein Layout mit zwei Spalten, das in eine mobile Größe zusammengepresst ist.](mdn-rwd-liquid.png)

Das Erstellen einer nicht skalierbaren Webseite durch Festlegen einer festen Breite funktioniert ebenfalls nicht; das führt zu Bildlaufleisten auf schmalen Geräten und zu viel leerem Raum auf breiten Bildschirmen.

Responsives Webdesign oder RWD ist ein Designansatz, der auf die Vielzahl der Geräte und Gerätegrößen eingeht und eine automatische Anpassung an den Bildschirm ermöglicht, egal ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr betrachtet wird.

Responsives Webdesign ist keine separate Technologie – es ist ein Ansatz. Es ist ein Begriff, der eine Reihe von Best Practices beschreibt, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät reagieren kann, das zum Anzeigen des Inhalts verwendet wird.

Der Begriff _responsive design_, [2010 von Ethan Marcotte geprägt](https://alistapart.com/article/responsive-web-design/), beschreibt die Verwendung von fluiden Grids, fluiden Bildern und Media Queries, um responsiven Inhalt zu erstellen.

Zu der Zeit war es empfehlenswert, CSS `float` für Layouts und Media Queries zu verwenden, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Fluide Bilder werden so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; ihre `max-width` Eigenschaft ist auf `100%` gesetzt. Fluide Bilder verkleinern sich, wenn ihre enthaltende Spalte schmaler wird, werden jedoch nicht größer als ihre intrinsische Größe, wenn die Spalte wächst. Dies ermöglicht einem Bild, sich zu verkleinern und in den Inhalt zu passen, anstatt ihn zu überlaufen, aber nicht größer zu werden und verpixelt zu erscheinen, wenn der Container breiter als das Bild wird.

Moderne CSS-Layout-Methoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in die Webplattform integriert, um die Gestaltung responsiver Websites zu erleichtern.

Der Rest dieses Artikels wird Sie auf die verschiedenen Webplattform-Funktionen hinweisen, die Sie möglicherweise verwenden möchten, wenn Sie eine responsive Website erstellen.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests (z.B. ob der Bildschirm des Benutzers größer als eine bestimmte Breite oder Auflösung ist) durchzuführen und CSS gezielt anzuwenden, um die Seite entsprechend den Bedürfnissen des Benutzers zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedien (damit also kein gedrucktes Dokument) angezeigt wird und der Viewport mindestens `80rem` breit ist. Das CSS für den `.container`-Selektor wird nur angewendet, wenn diese beiden Bedingungen zutreffen.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen, um Ihr gesamtes Layout oder Teile davon so anzupassen, dass sie bestmöglich zu verschiedenen Bildschirmgrößen passen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout geändert wird, werden als _Breakpoints_ bezeichnet.

Ein gängiger Ansatz bei der Verwendung von Media Queries ist es, ein einfaches einspaltiges Layout für Geräte mit schmalem Bildschirm (zum Beispiel Mobiltelefone) zu erstellen, dann für breitere Bildschirme zu prüfen und ein mehrspaltiges Layout zu implementieren, wenn Sie wissen, dass Sie genug Bildschirmbreite haben, um es zu bewältigen. Das Design für Mobile-first ist als **Mobile-first**-Design bekannt.

Wenn Sie Breakpoints verwenden, empfehlen Best Practices die Definition von Media Query Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) statt der absoluten Größen eines einzelnen Geräts.

Es gibt verschiedene Ansätze zu den in einem Media Query Block definierten Stilen; sie reichen von der Verwendung von Media Queries zum Verlinken von Stylesheets basierend auf Browsergrößenbereichen bis hin zum alleinigen Einfügen von benutzerdefinierten Eigenschaftenvariablen, um Werte zu speichern, die jedem Breakpoint zugeordnet sind.

Media Queries können bei RWD helfen, sind aber keine Voraussetzung. Flexible Grids, relative Einheiten und minimale und maximale Einheitwerte können auch ohne Media Queries verwendet werden.

## Responsive Layout-Technologien

Responsive Websites basieren auf flexiblen Grids, was bedeutet, dass Sie nicht jedes mögliche Gerätegrößen-Ziel mit pixelgenauen Layouts anvisieren müssen.

Durch die Verwendung eines flexiblen Grids können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt beginnt, schlecht auszusehen. Beispielsweise können Sie {{cssxref('columns')}} verwenden, um sicherzustellen, dass Zeilenlängen bei einer Vergrößerung der Bildschirmgröße nicht unleserlich lang werden. Wenn ein Kasten mit zwei Wörtern pro Zeile bei Verkleinerung zusammengequetscht wird, können Sie einen Breakpoint setzen.

Mehrere Layout-Methoden — einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) — sind standardmäßig responsiv. Sie gehen davon aus, dass Sie versuchen, ein flexibles Grid zu erstellen, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Items, indem sie den Platz zwischen den Items entsprechend dem Platz in ihrem Container verteilen. Indem Sie die Werte für `flex-grow` und `flex-shrink` ändern, können Sie angeben, wie sich die Items verhalten sollen, wenn sie mehr oder weniger Platz um sich herum haben.

Im folgenden Beispiel nehmen die Flex-Items jeweils den gleichen Platz im Flex-Container ein, indem die Abkürzung `flex: 1` wie vorher besprochen verwendet wird (siehe [Flexbox: Flexible Dimensionsflex-Elemente](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

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

Vergrößern Sie Ihr Bildschirmfenster. Das Layout wird sich ändern, wenn die Größe des obigen Beispiels die 600px-Breitenschwelle überschreitet.

### CSS-Grid

Im CSS-Grid-Layout ermöglicht die `fr`-Einheit die Verteilung des verfügbaren Platzes über Grid-Spuren. Das nächste Beispiel erstellt einen Grid-Container mit drei Spuren, die auf `1fr` dimensioniert sind. Dies erzeugt drei Spalten-Spuren, von denen jede einen Teil des verfügbaren Platzes im Container einnimmt. Sie haben diesen Ansatz bereits betrachtet (siehe [Flexible Grids mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) zur Wiederholung).

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

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien niemals größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medien so, dass sie nie ihre Container überfluten.

> [!NOTE]
> Die Verwendung eines großen Einzelbildes und das Herunterskalieren auf kleinere Geräte verschwendet Bandbreite, indem Bilder heruntergeladen werden, die größer sind als erforderlich. Es kann auch schlecht aussehen – ein Landschaftsbild zum Beispiel könnte auf einem Breitbildmonitor gut aussehen, aber schwer zu erkennen sein auf einem mobilen Gerät, das ein Hochformatbild besser benötigen würde. Solche Probleme können durch die Verwendung des {{htmlelement("picture")}}-Elements und der {{htmlelement("img")}}-Attribute `srcset` und `sizes` gelöst werden. Dies sind fortgeschrittene Funktionen, die über den Umfang dieses Kurses hinausgehen, aber Sie können eine detaillierte Anleitung unter [Responsive Bilder](/de/docs/Web/HTML/Responsive_images) finden.

Weitere nützliche Tipps:

- Verwenden Sie immer ein geeignetes Bildformat für Ihre Website-Bilder (wie PNG oder JPG), und stellen Sie sicher, dass Sie die Dateigröße mithilfe eines Grafikeditors optimieren, bevor Sie sie auf Ihre Website hochladen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) nutzen, um visuelle Effekte ohne die Verwendung von Bildern zu implementieren.
- Sie können Media Queries im Mediattribut auf {{htmlelement("source")}}-Elemente verschachtelt in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verwenden, um Video-/Audiodateien bereitzustellen, die für verschiedene Geräte geeignet sind (responisves Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt die Änderung von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewporteinheiten, um geringeren oder größeren Platzverhältnissen auf dem Bildschirm Rechnung zu tragen.

### Media Queries für responsive Typografie verwenden

In diesem Beispiel möchten wir festlegen, dass unsere Überschrift der Ebene 1 `4rem` groß ist, was bedeutet, dass sie viermal so groß wie unsere Basis-Schriftgröße ist. Das ist eine wirklich große Überschrift! Wir wollen diese riesige Überschrift nur auf größeren Bildschirmen haben, daher erstellen wir zuerst eine kleinere Überschrift und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmgröße von mindestens `1200px` hat.

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

Wir haben unser obiges responsives Grid-Beispiel bearbeitet, um auch die Methode für responsive Typografie einzubeziehen. Sie können sehen, wie die Überschrift ihre Größe ändert, wenn das Layout zur zweispaltigen Version wechselt.

Auf Mobilgeräten ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftgröße:

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

Wie dieses Typografie-Beispiel zeigt, müssen Sie Media Queries nicht auf das Ändern des Layouts der Seite beschränken. Sie können verwendet werden, um jedes Element zu optimieren, um es bei alternativen Bildschirmgrößen die Bedienbarkeit oder Ästhetik zu erhöhen.

### Viewporteinheiten für responsive Typografie verwenden

Viewporteinheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne dass Breakpoints mit Media Queries gesetzt werden müssen. `1vw` entspricht einem Prozent der Viewportbreite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` festlegen, sie immer zur Größe des Viewports in Beziehung stehen wird.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der obigen Durchführung ist, dass der Benutzer die Fähigkeit verliert, jeglichen Text, der mit der `vw`-Einheit eingestellt wird, zu zoomen, da dieser Text immer im Verhältnis zur Viewportgröße steht. **Daher sollten Sie niemals Text allein mit Viewporteinheiten einstellen**.

Es gibt eine Lösung, und sie beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die `vw`-Einheit zu einem mit einer festen Größe wie `em`s oder `rem`s festgelegten Wert hinzufügen, bleibt der Text dennoch zoombar. Im Wesentlichen fügt die `vw`-Einheit dem vergrößerten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal festlegen müssen, anstatt sie für mobile Geräte einzurichten und sie in den Media Queries neu zu definieren. Die Schriftgröße erhöht sich dann allmählich, wenn Sie die Größe des Viewports erhöhen.

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

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, werden Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [Viewport-](/de/docs/Web/HTML/Viewport_meta_tag) Meta-Tag weist mobile Browser an, dass sie die Breite des Viewports auf die Gerätegröße einstellen und das Dokument auf 100 % seiner beabsichtigten Größe skalieren sollen, was das Dokument in der von Ihnen beabsichtigten mobiloptimierten Größe anzeigt.

Warum ist das erforderlich? Weil mobile Browser dazu neigen, über ihre Viewportbreite zu lügen.

Dieses Meta-Tag existiert, weil, als Smartphones erstmals aufkamen, die meisten Websites nicht für Mobilgeräte optimiert waren. Der mobile Browser würde dann die Viewportbreite auf 980 Pixel einstellen, die Seite mit dieser Breite rendern und das Ergebnis als herausgezoomte Version des Desktop-Layouts anzeigen. Benutzer konnten in die Website hereinzoomen und auf den Teilen der Website navigieren, die sie interessierten, aber es sah schlecht aus.

Wenn Sie `width=device-width` einstellen, überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie Apples Standardwert `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne dieses Tag funktionieren Ihr responsives Design mit Breakpoints und Media Queries möglicherweise nicht wie beabsichtigt auf mobilen Browsern. Wenn Sie ein schmale Bildschirmlayout haben, das bei einer Viewportbreite von 480px oder weniger aktiviert wird, aber das Gerät gibt an, es sei 980px breit, wird dieser Benutzer Ihr schmales Bildschirmlayout nicht sehen.

**Sie sollten _immer_ das Viewport-Meta-Tag im Head Ihrer Dokumente einschließen.**

## Zusammenfassung

Responsives Design bezieht sich auf ein Website- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es betrachtet wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist nun im Wesentlichen die Art und Weise, wie wir Websites standardmäßig erstellen. Berücksichtigen Sie die Websites, die Sie auf Ihrem Telefon besuchen – es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Site zu stoßen, die eine herunterskalierte Desktop-Version ist oder bei der Sie seitlich scrollen müssen, um Dinge zu finden. Dies liegt daran, dass das Web zu diesem Ansatz des responsiven Designs gewechselt ist.

Es ist auch viel einfacher geworden, responsive Designs mit den Layoutmethoden zu erreichen, die Sie in diesen Lektionen gelernt haben. Wenn Sie heute neu im Webentwicklungsbereich sind, haben Sie mehr Werkzeuge zur Verfügung als in den Anfängen des responsiven Designs. Es ist daher sinnvoll, das Alter der verwendeten Materialien zu überprüfen. Während die historischen Artikel immer noch nützlich sind, ermöglicht die moderne Nutzung von CSS und HTML die Erstellung eleganter und nützlicher Designs, unabhängig davon, mit welchem Gerät Ihr Besucher die Seite besucht.

Als Nächstes werden wir Media Queries detaillierter untersuchen und zeigen, wie man sie zur Lösung einiger häufiger Probleme verwendet.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch-Events](/de/docs/Web/API/Touch_events) ermöglichen die Interpretation von Finger- (oder Stift-) Aktivitäten auf Touchscreens oder Trackpads, um qualitativ hochwertige Unterstützung für komplexe touchbasierte Benutzeroberflächen bereitzustellen.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um unterschiedliche CSS auf touchfähigen Geräten zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
