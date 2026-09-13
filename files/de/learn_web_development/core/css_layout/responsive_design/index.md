---
title: Responsives Webdesign
slug: Learn_web_development/Core/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Webdesign-Ansatz, um sicherzustellen, dass Webseiten auf allen Bildschirmgrößen und -auflösungen gut dargestellt werden und dabei eine gute Nutzbarkeit bieten. Es ist der Weg, für ein Multi-Device-Web zu designen. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die verwendet werden können, um dies zu meistern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Styling</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schrift-Styling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten von CSS-Layout</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was responsives Design ist – das Entwerfen von Weblayouts, sodass sie flexibel sind und gut auf verschiedenen Bildschirmgrößen, Auflösungen usw. funktionieren.</li>
          <li>Die Beziehung zwischen modernen Layout-Werkzeugen wie Grid und Flexbox und responsive Design.</li>
          <li>Die Konzepte hinter der Verwendung von Media Queries für responsives Design, einschließlich Mobile-First und Breakpoints.</li>
          <li>Warum <code>&lt;meta viewport=""&gt;</code> benötigt wird, um Webdokumente korrekt auf mobilen Geräten darzustellen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobil-Webdesign

Bevor responsives Webdesign zum Standardansatz für das Funktionieren von Websites auf verschiedenen Gerätetypen wurde, sprachen Webentwickler über Mobil-Webdesign, Mobil-Webentwicklung oder manchmal mobiltaugliches Design. Sie sind im Wesentlichen dasselbe wie responsives Webdesign – die Ziele sind sicherzustellen, dass Websites in Bezug auf Layout, Inhalt (Text und Medien) und Leistung auf Geräten mit unterschiedlichen physischen Merkmalen (Bildschirmgröße, Auflösung) gut funktionieren.

Der Unterschied liegt hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprachen wir von Desktop oder Mobile, aber jetzt gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobilgeräte, Tablets, Uhren usw. Anstatt für einige wenige verschiedene Bildschirmgrößen zu gestalten, müssen wir jetzt Websites defensiv gestalten, um gängige Bildschirmgrößen und -auflösungen sowie Unbekanntes zu berücksichtigen.
- Mobile Geräte waren in Bezug auf CPU/GPU und verfügbare Bandbreite leistungsschwach. Einige unterstützten kein CSS oder sogar HTML, und daher war es üblich, serverseitiges Browsersniffen durchzuführen, um den Gerätetyp oder Browsertyp zu bestimmen, bevor dann eine Website geliefert wurde, mit der das Gerät umgehen konnte. Mobile Geräte erhielten oft wirklich einfache, grundlegende Erfahrungen, weil es das Einzige war, was sie bewältigen konnten. Heutzutage sind Mobile Geräte in der Lage, dieselben Technologien wie Desktop-Computer zu handhaben, wodurch solche Techniken seltener verwendet werden.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Benutzern eine geeignete Erfahrung zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt, die berücksichtigt werden müssen.
  - Nutzererfahrung ist nach wie vor ein Anliegen. Ein mobiler Benutzer einer Reisewebsite möchte möglicherweise nur die Flugzeiten und Informationen zu Verspätungen prüfen und nicht mit einem 3D-animierten Globus mit Flugrouten und der Geschichte Ihres Unternehmens präsentiert werden.
- Moderne Technologien sind viel besser geeignet, um responsive Erlebnisse zu schaffen. Zum Beispiel erlauben [Responsive Images/Mediens Technologien](#responsive_imagesmedia) nun die Bereitstellung geeigneter Medien für verschiedene Geräte, ohne auf Techniken wie serverseitiges Sniffen angewiesen zu sein.

## Einführung in responsives Webdesign

HTML ist von Natur aus responsiv oder _flüssig_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster verkleinern, passt der Browser automatisch den Text an, um sich an den Viewport anzupassen.

Während das standardmäßige responsive Verhalten nach keiner Lösung aussieht, können lange Textzeilen, die im Vollbildmodus auf einem breiten Monitor angezeigt werden, schwer zu lesen sein. Dieses Problem kann mit CSS gelöst werden, indem zum Beispiel schmale Spalten erstellt werden, um die Zeilenlänge zu begrenzen. Dies kann jedoch neue Probleme für Benutzer schaffen, die ihr Browserfenster verkleinern oder die Website auf einem Mobilgerät anzeigen – die Spalten wirken zusammengedrückt und sind schwerer zu lesen.

![Ein Layout mit zwei Spalten, die in einem mobilen Viewport zusammengedrückt sind.](mdn-rwd-liquid.png)

Das Erstellen einer nicht anpassbaren Webseite durch Festlegen einer festen Breite funktioniert ebenfalls nicht; dies führt zu Scrollbalken auf schmalen Geräten und zu viel Leerraum auf breiten Bildschirmen.

Responsives Webdesign, oder RWD, ist ein Designansatz, der die gesamte Bandbreite verfügbarer Geräte und Gerätegrößen anspricht und die automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob die Inhalte auf einem Tablet, Telefon, Fernseher oder einer Uhr angezeigt werden.

Responsives Webdesign ist keine separate Technologie – es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät reagieren kann, das zur Anzeige der Inhalte verwendet wird.

Der Begriff _Responsive Design_, [von Ethan Marcotte 2010 geprägt](https://alistapart.com/article/responsive-web-design/), beschreibt die Verwendung von flüssigen Grids, flüssigen Bildern und Medienabfragen, um responsive Inhalte zu erstellen.

Zu dieser Zeit bestand die Empfehlung darin, CSS `float` für Layouts und Media Queries zu verwenden, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Flüssige Bilder werden so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width`-Eigenschaft auf `100%` gesetzt. Flüssige Bilder verkleinern sich, wenn ihre enthaltende Spalte schmaler wird, wachsen aber nicht größer als ihre intrinsische Größe, wenn die Spalte wächst. Dies ermöglicht es einem Bild, sich soweit zu verkleinern, dass es in seinen Container passt, ohne überzulaufen, wächst jedoch nicht darüber hinaus und wird pixelig, wenn der Container breiter wird als das Bild.

Moderne CSS-Layout-Methoden sind von Natur aus responsiv, und seit der Veröffentlichung von Marcottes Artikel haben wir eine Vielzahl von Funktionen in die Webplattform integriert, um das Design responsiver Websites zu erleichtern.

Der Rest dieses Artikels wird die verschiedenen Funktionen der Webplattform erklären, die Sie nutzen könnten, wenn Sie eine responsive Website erstellen möchten.

## Media Queries

[Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) erlauben uns, eine Reihe von Tests durchzuführen (zum Beispiel, ob der Bildschirm des Benutzers größer als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite entsprechend den Bedürfnissen des Benutzers zu stylen.

Beispielsweise testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedium angezeigt wird (daher kein gedrucktes Dokument) und der Viewport mindestens `80rem` breit ist. Die `.container`-Regel wird nur angewendet, wenn diese zwei Bedingungen wahr sind.

```css
@media screen and (width >= 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen, um Ihr gesamtes Layout oder Teile davon anzupassen, um den verschiedenen Bildschirmgrößen am besten zu entsprechen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout sich ändert, werden als _Breakpoints_ bezeichnet.

Ein gängiger Ansatz bei der Verwendung von Media Queries ist, ein einfaches Einspalten-Layout für schmalere Bildschirme (zum Beispiel Mobiltelefone) zu erstellen, dann für größere Bildschirme zu prüfen und ein Mehrspalten-Layout zu implementieren, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben, um es zu bewältigen. Das Design für mobile Geräte zuerst wird als **Mobile First**-Design bezeichnet.

Bei der Verwendung von Breakpoints wird als Best Practice empfohlen, Media Query Breakpoints mit [relativen Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) anstatt von absoluten Größen eines individuellen Geräts zu definieren.

Es gibt unterschiedliche Ansätze für die Stile, die innerhalb eines Media Query-Blocks definiert werden; von der Verwendung von Media Queries, um mit {{htmlelement("link")}} Stylesheets basierend auf den Browsergrößenbereichen zu verknüpfen, bis hin zum Einfügen benutzerdefinierter Eigenschaftsvariablen, um Werte zu speichern, die mit jedem Breakpoint verbunden sind.

Media Queries können bei RWD helfen, sind jedoch nicht erforderlich. Flexible Grids, relative Einheiten und minimale sowie maximale Einheitswerte können ohne Media Queries verwendet werden.

> [!NOTE]
> Scrimba bietet ein Tutorial namens [Aside: Media queries](https://scrimba.com/frontend-path-c0j/~0j3?via=mdn) <sup>[_MDN Weiterbildungspartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> an, das eine interaktive Einführung in Media Queries sowie eine Herausforderung zur Überprüfung Ihres Verständnisses der Grundlagen bietet.

## Responsive Layout-Technologien

Responsive Sites basieren auf flexiblen Grids, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts ansprechen müssen.

Durch die Verwendung eines flexiblen Grids können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel, um sicherzustellen, dass Zeilenlängen bei zunehmender Bildschirmgröße nicht unleserlich lang werden, können Sie {{cssxref('columns')}} verwenden; wenn ein Kasten zusammengedrückt wird und bei zunehmender Verengung auf jeder Zeile nur noch zwei Wörter stehen, können Sie einen Breakpoint setzen.

Mehrere Layout-Methoden – einschließlich [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und [CSS Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grids) – sind standardmäßig responsiv. Sie alle gehen davon aus, dass Sie versuchen, ein flexibles Grid zu erstellen, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente und verteilen den Raum unter den Elementen entsprechend dem Platz in ihrem Container. Durch Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass die Elemente reagieren, wenn sie mehr oder weniger Platz um sich herum haben.

Im Beispiel unten nehmen die Flex-Elemente jeweils eine gleiche Menge an Platz im Flex-Container ein, wobei die Kurzform von `flex: 1` verwendet wird, wie zuvor besprochen (siehe [Flexbox: Flexible Größenanpassung von Flex-Elementen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#flexible_sizing_of_flex_items)).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Hier ist, wie wir Flexbox mit einer Media Query für responsives Design nutzen könnten.

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

Ändern Sie die Größe Ihres Browserfensters. Das Layout wechselt zwischen einem Einspalten- und einem Zweispalten-Layout, wenn die Größe des obigen Beispiels den `600px`-Breitenschwellenwert überschreitet.

### CSS Grid

Im CSS-Grid-Layout ermöglicht die `fr`-Einheit die Verteilung des verfügbaren Raums über die Grid-Spuren. Das nächste Beispiel erstellt einen Grid-Container mit drei Spuren, die jeweils auf `1fr` groß sind. Dies wird drei Spaltenbahnen erstellen, die jeweils einen Teil des verfügbaren Raums im Container einnehmen. Sie haben diesen Ansatz schon einmal gesehen (siehe [Flexible Grids mit der fr-Einheit](/de/docs/Learn_web_development/Core/CSS_layout/Grids#flexible_grids_with_the_fr_unit) zur Wiederholung).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Hier ist, wie wir das Grid-Layout mit einer Media Query für responsives Design nutzen könnten.

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

Erneut versuchen Sie Ihr Browserfenster zu verkleinern – Sie sollten sehen, dass sich das Beispiel-Layout am `600px`-Breitenschwellenwert ändert, wie im vorherigen Beispiel.

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien niemals größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medienelemente, um sicherzustellen, dass sie niemals über ihre Container hinausgehen.

> [!NOTE]
> Die Verwendung eines einzelnen großen Bildes und dessen Herunterskalierung zur Anpassung an kleine Geräte verschwendet Bandbreite, indem größere Bilder heruntergeladen werden, als erforderlich sind. Es kann auch schlecht aussehen – ein Landschaftsbild könnte auf einem Breitbildmonitor gut aussehen, aber auf einem mobilen Gerät, das besser ein Porträtbild geeignet wäre, schwer zu sehen sein. Solche Probleme können mit dem {{htmlelement("picture")}}-Element und den {{htmlelement("img")}}-Attributen `srcset` und `sizes` gelöst werden. Dies sind fortgeschrittene Funktionen, die über den Umfang dieses Kurses hinausgehen, aber Sie finden einen detaillierten Leitfaden unter [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images).

Andere nützliche Tipps:

- Achten Sie immer darauf, dass Sie ein geeignetes Bildformat für Ihre Website-Bilder verwenden (wie PNG oder JPG) und die Dateigröße mit einem Grafikeditor optimieren, bevor Sie sie auf Ihrer Website platzieren.
- Sie können CSS-Funktionen wie [Gradients](/de/docs/Web/CSS/Guides/Images/Using_gradients) und [Shadows](/de/docs/Web/CSS/Reference/Properties/box-shadow) verwenden, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries innerhalb des Media-Attributs an {{htmlelement("source")}}-Elementen, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elemente verschachtelt sind, verwenden, um Video-/Audiodateien entsprechend für verschiedene Geräte bereitzustellen (responsive Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewport-Einheiten, um geringere oder größere Mengen an Bildschirmfläche zu reflektieren.

### Media Queries für responsive Typografie verwenden

In diesem Beispiel möchten wir, dass unsere Ebene 1-Überschrift `4rem` groß ist, das bedeutet, sie wird viermal so groß wie unsere Grundschriftgröße sein. Das ist eine wirklich große Überschrift! Wir wollen diese riesige Überschrift nur bei größeren Bildschirmgrößen, daher geben wir der Überschrift zuerst eine kleinere Größe von `2rem` und verwenden dann Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmbreite von mindestens `1200px` hat.

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

Das nächste Beispiel ist eine modifizierte Version unseres vorherigen responsiven Grid-Beispiels, das eine responsive Überschrift mit der beschriebenen Methode enthält. Auf dem mobilen Gerät ist die Überschrift kleiner, aber auf dem Desktop sehen wir die größere Überschriftengröße:

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

Wie bei den vorherigen Beispielen, versuchen Sie die Breite des Browserfensters zu ändern, und beachten Sie, wie sich nicht nur das Layout am `600px`-Breitenschwellenwert ändert, sondern auch die Überschriftengröße.

Wie dieses Vorgehen zur Typografie zeigt, müssen Sie Media Queries nicht nur auf Änderungen des Seitenlayouts beschränken. Sie können verwendet werden, um jedes Element zu optimieren, um es bei alternativen Bildschirmgrößen benutzerfreundlicher oder attraktiver zu machen.

### Viewport-Einheiten für responsive Typografie verwenden

Viewport-Einheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne die Notwendigkeit, Breakpoints mit Media Queries festzulegen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` festlegen, sie immer auf die Größe des Viewports bezogen wird.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der oben genannten Vorgehensweise ist, dass der Benutzer die Möglichkeit verliert, jeglichen Text zu zoomen, der mit der `vw`-Einheit gesetzt ist, da dieser Text immer auf die Größe des Viewports bezogen ist. **Daher sollten Sie nie Text allein mit Viewport-Einheiten setzen**.

Es gibt eine Lösung, und sie beinhaltet die Verwendung von {{cssxref("calc()")}}. Wenn Sie die `vw`-Einheit zu einem mit einer festen Größe wie `em` oder `rem` gesetzten Wert hinzufügen, wird der Text weiterhin zoombar sein. Grundsätzlich wird die `vw`-Einheit auf diesen vergrößerten Wert addiert:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal festlegen müssen, anstatt sie für mobile zu definieren und in den Media Queries neu zu definieren. Die Schrift vergrößert sich dann schrittweise, wenn Sie die Größe des Viewports erhöhen.

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

Versuchen Sie, das Browserfenster zu verkleinern und beachten Sie, wie sich diesmal die Überschriftengröße _schrittweise_ ändert, während sich die Breite ändert.

## Das Meta-Viewport-Tag

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, sehen Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments.

```html
<meta name="viewport" content="width=device-width" />
```

Dieses [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Gerätebreite setzen sollten, was das Dokument in der von Ihnen vorgesehenen mobiloptimierten Größe anzeigt.

Warum ist dies notwendig? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu lügen.

Dieses Meta-Tag existiert, weil, als Smartphones erstmals auftauchten, die meisten Websites nicht für Mobilgeräte optimiert waren. Der mobile Browser setzte daher die Viewport-Breite auf 980 Pixel, renderte die Seite in dieser Breite und zeigte das Ergebnis als herausgezoomte Version des Desktop-Layouts an. Benutzer konnten in die Website hineinzoomen und herumpannen, um die interessierenden Teile anzusehen, aber es sah schlecht aus.

Wenn Sie `width=device-width` festlegen, überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie die Standardbreite von `width=980px` des iPhones, mit der tatsächlichen Breite des Geräts. Andernfalls funktioniert Ihr responsives Design mit Breakpoints und Media Queries möglicherweise nicht wie vorgesehen auf mobilen Browsern. Wenn Sie ein schmaleres Layout haben, das bei einer Viewport-Breite von 480px oder weniger greift, aber das Gerät sagt, es sei 980px breit, dann wird dieser Benutzer nicht Ihr schmaleres Layout sehen.

**Daher sollten Sie _immer_ das Meta-Viewport-Tag im Kopfteil Ihrer Dokumente einfügen.**

Es gibt eine Reihe weiterer Optionen, die Sie im `content`-Attribut des Meta-Viewport-Tags angeben können – siehe die Referenz zu [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) für mehr Details.

## Zusammenfassung

Responsives Design bezieht sich auf ein Site- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es angezeigt wird. Es umfasst eine Reihe an Funktionen und Techniken von CSS und HTML und ist im Wesentlichen die Art und Weise, wie wir Websites standardmäßig erstellen. Betrachten Sie die Websites, die Sie auf Ihrem Telefon besuchen – es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Website zu stoßen, die die Desktop-Version herunterskaliert ist oder bei der Sie seitwärts scrollen müssen, um Dinge zu finden. Dies liegt daran, dass das Web zu diesem Ansatz des responsiven Designens übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs mit den in diesem Artikel behandelten Layout-Methoden zu erreichen. Wenn Sie heute neu im Bereich der Webentwicklung sind, haben Sie viele weitere Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Es lohnt sich daher, das Alter der Materialien zu überprüfen, die Sie verwenden. Während die historischen Artikel immer noch nützlich sind, erleichtert die moderne Verwendung von CSS und HTML die Erstellung eleganter und nützlicher Designs erheblich, egal welches Gerät Ihr Besucher zur Anzeige der Website verwendet.

Als nächstes werden wir die Media Queries im Detail studieren und zeigen, wie sie verwendet werden, um einige häufig auftretende Probleme zu lösen.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) ermöglichen es uns, Finger- (oder Stift-)Aktivitäten auf Touchscreens oder Trackpads zu interpretieren, und so qualitativ hochwertige Unterstützung für komplexe, auf Berührung basierende Benutzeroberflächen zu bieten.
  - Verwenden Sie die [Pointer](/de/docs/Web/CSS/Reference/At-rules/@media/pointer) oder [Any-pointer](/de/docs/Web/CSS/Reference/At-rules/@media/any-pointer) Media Queries, um basierend auf den Touch-fähigen Geräten unterschiedliche CSS zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Der Karrierepfad zum Frontend-Entwickler](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN Weiterbildungspartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba lehrt alles, was Sie wissen müssen, um ein kompetenter Front-End-Webentwickler zu sein, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, sachkundigen Lehrern und einer unterstützenden Gemeinschaft. Gehen Sie von Null zum ersten Frontend-Job! Viele der Kurskomponenten sind als eigenständige kostenlose Versionen verfügbar. Dazu gehört ein Modul über responsives Design.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension", "Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/CSS_layout")}}
