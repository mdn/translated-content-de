---
title: Responsives Design
slug: Learn/CSS/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}

_Responsives Webdesign_ (RWD) ist ein Webdesign-Ansatz, um Webseiten auf allen Bildschirmgrößen und -auflösungen gut darzustellen und gleichzeitig eine gute Benutzerfreundlichkeit zu gewährleisten. Es ist der Weg, für ein Multi-Device-Web zu gestalten. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die zur Beherrschung eingesetzt werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">CSS-Bausteine</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das grundlegende Ziel und die CSS-Funktionen verstehen, die bei der Implementierung von responsiven Designs verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des responsiven Designs: Mobile Webdesign

Bevor responsives Webdesign zum Standardansatz für die Erstellung von Websites für verschiedene Gerätetypen wurde, sprachen Webentwickler über Mobile Webdesign, Mobile Webentwicklung oder manchmal sogar mobile-freundliches Design. Diese Konzepte sind im Grunde dasselbe wie responsives Webdesign – die Ziele bestehen darin, sicherzustellen, dass Websites in Bezug auf Layout, Inhalt (Text und Medien) und Leistung gut auf Geräten mit unterschiedlichen physischen Eigenschaften (Bildschirmgröße, Auflösung) funktionieren.

Der Unterschied liegt hauptsächlich in den verwendeten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprach man von Desktop oder Mobile, aber heute gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobilgeräte, Tablets, Uhren usw. Statt für einige wenige unterschiedliche Bildschirmgrößen zu gestalten, müssen wir jetzt defensiv gestalten, um für häufige Bildschirmgrößen und -auflösungen sowie unbekannte Fälle gerüstet zu sein.
- Mobile Geräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten kein CSS oder sogar HTML, und daher war es üblich, serverseitiges Browser-Sniffing durchzuführen, um den Gerätetyp/Browsertyp zu bestimmen und dann eine Website bereitzustellen, die das Gerät handhaben konnte. Mobilgeräte erhielten oft wirklich einfache, grundlegende Erfahrungen, da dies alles war, was sie bewältigen konnten. Heutzutage sind Mobilgeräte in der Lage, dieselben Technologien wie Desktop-Computer zu handhaben, sodass solche Techniken weniger verbreitet sind.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um Mobilnutzern eine geeignete Erfahrung zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt, um die Sie sich kümmern müssen.
  - Die Benutzererfahrung ist ebenfalls ein Anliegen. Ein mobiler Nutzer einer Reise-Website möchte womöglich nur die Flugzeiten und Verspätungsinformationen überprüfen und nicht eine 3D-animierte Weltkugel mit Flugrouten und Ihrer Unternehmensgeschichte angezeigt bekommen. Dies kann jedoch mit responsiven Designtechniken gehandhabt werden.
- Moderne Technologien sind viel besser geeignet, um responsive Erlebnisse zu schaffen. Beispielsweise ermöglichen [responsive Bild-/Medien-Technologien](#responsive_imagesmedia) jetzt die Bereitstellung geeigneter Medien für verschiedene Geräte, ohne auf Techniken wie serverseitiges Sniffing zurückzugreifen.

## Einführung in responsives Webdesign

HTML ist im Grunde genommen responsiv oder _flüssig_. Wenn Sie eine Webseite erstellen, die nur HTML ohne CSS enthält, und das Fenster neu skalieren, passt der Browser den Text automatisch an die Viewport-Größe an.

Obwohl das standardmäßige responsive Verhalten wie eine Lösung erscheinen mag, können lange Textzeilen, die auf einem breiten Monitor vollbildig angezeigt werden, schwer lesbar sein. Wenn die Breite der langen Bildschirmzeilen mit CSS verringert wird, etwa durch Erstellen von Spalten oder Hinzufügen von erheblichem Padding, kann die Website für den Benutzer, der sein Browserfenster verengt oder die Website auf einem mobilen Gerät öffnet, gequetscht wirken.

![Ein Layout mit zwei Spalten, das in eine kleine Viewport-Größe gepresst wird.](mdn-rwd-liquid.png)

Eine nicht anpassbare Webseite durch Festlegen einer festen Breite zu erstellen, funktioniert ebenfalls nicht; das führt zu Scrollbalken auf schmalen Geräten und zu viel Leerraum auf breiten Bildschirmen.

Responsives Webdesign oder RWD ist ein Designansatz, der das Spektrum an Geräten und Gerätegrößen anspricht und eine automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr angesehen wird.

Responsives Webdesign ist keine separate Technologie – es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die zur Erstellung eines Layouts verwendet werden, das sich an jedes verwendete Gerät anpassen kann, um den Inhalt anzuzeigen.

Der Begriff _Responsive Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschrieb die Verwendung von flüssigen Gittern, flüssigen Bildern und Media Queries, um responsive Inhalte zu schaffen, wie in Zoe Mickley Gillenwaters Buch [Flexible Web Design](https://flexiblewebbook.com/) diskutiert.

Zu dieser Zeit war die Empfehlung, CSS `float` für das Layout und Media Queries zu verwenden, um die Browserbreite abzufragen und Layouts für verschiedene Haltepunkte zu erstellen. Flüssige Bilder sind so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width` Eigenschaft auf `100%` gesetzt. Flüssige Bilder skalieren sich nach unten, wenn ihre enthaltende Spalte verengt wird, wachsen aber nicht größer als ihre intrinsische Größe, wenn die Spalte wächst. Dies ermöglicht es einem Bild, so zu skalieren, dass es seinen Inhalt nicht überläuft, aber nicht größer wird und pixelig wird, wenn der Container breiter als das Bild wird.

Moderne CSS-Layout-Methoden sind inhärent responsiv und seit der Veröffentlichung von Gillenwaters Buch und Marcottes Artikel gibt es eine Vielzahl von Funktionen, die im Web-Plattform integriert sind, um die Gestaltung von responsiven Websites zu erleichtern.

Der Rest dieses Artikels wird Sie auf die verschiedenen Web-Plattform-Funktionen hinweisen, die Sie bei der Erstellung einer responsiven Website verwenden möchten.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) erlauben es uns, eine Reihe von Tests durchzuführen (z.B. ob der Bildschirm des Benutzers breiter als eine bestimmte Breite oder Auflösung ist) und CSS selektiv anzuwenden, um die Seite den Bedürfnissen des Benutzers entsprechend zu stylen.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedien angezeigt wird (daher nicht als gedrucktes Dokument) und der Viewport mindestens `80rem` breit ist. Das CSS für den `.container`-Selektor wird nur angewendet, wenn diese beiden Bedingungen wahr sind.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen, um Ihr gesamtes Layout oder Teile davon zu optimieren, um die verschiedenen Bildschirmgrößen bestmöglich zu berücksichtigen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout verändert wird, sind als _Breakpoints_ bekannt.

Ein gängiger Ansatz bei der Verwendung von Media Queries ist es, ein einfaches einspaltiges Layout für schmalbildige Geräte (z.B. Mobiltelefone) zu erstellen, dann auf breitere Bildschirme zu prüfen und ein mehrspaltiges Layout zu implementieren, wenn Sie wissen, dass Sie genügend Bildschirmbreite haben, um es zu handhaben. Das Entwerfen für Mobile zuerst ist bekannt als **Mobile First** Design.

Wenn Sie Breakpoints verwenden, empfehlen Best Practices, die Mediabereitpunkte mit [relativen Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) anstelle von absoluten Größen eines einzelnen Geräts zu definieren.

Es gibt verschiedene Ansätze zu den innerhalb eines Media Query Block definierten Styles; diese reichen von der Verwendung von Media Queries zum {{htmlelement("link")}} von Stylesheets basierend auf Browsergrößenbereichen bis hin zum ausschließlichen Einschließen von benutzerdefinierten Eigenschaftenvariablen, um Werte zu speichern, die mit jedem Breakpoint verbunden sind.

Weitere Informationen finden Sie in der MDN-Dokumentation zu [Media Queries](/de/docs/Web/CSS/CSS_media_queries).

Media Queries können bei RWD helfen, sind aber nicht erforderlich. Flexible Grids, relative Einheiten und Mindest- und Höchstwerteinheiten können ohne Queries verwendet werden.

## Responsive Layout-Technologien

Responsive Websites basieren auf flexiblen Grids, d.h. Sie müssen nicht auf jede mögliche Gerätegröße mit pixelgenauen Layouts abzielen.

Durch die Verwendung eines flexiblen Grids können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel, um sicherzustellen, dass Zeilenlängen nicht unlesbar lang werden, wenn die Bildschirmgröße zunimmt, können Sie {{cssxref('columns')}} verwenden; wenn ein Kasten gequetscht wird und nur noch zwei Wörter in jeder Zeile stehen, wenn er sich verengt, können Sie einen Breakpoint setzen.

Mehrere Layout-Methoden, einschließlich [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout), [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) und [Grid](/de/docs/Learn/CSS/CSS_layout/Grids), sind standardmäßig responsiv. Sie alle nehmen an, dass Sie versuchen, ein flexibles Grid zu erstellen und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Multicol

Mit Multicol geben Sie eine `column-count` an, um die maximale Anzahl von Spalten anzugeben, in die Ihr Inhalt aufgeteilt werden soll. Der Browser berechnet dann die Größe dieser Spalten, eine Größe, die sich je nach Bildschirmgröße ändert.

```css
.container {
  column-count: 3;
}
```

Wenn Sie stattdessen eine `column-width` angeben, geben Sie eine _Mindestbreite_ an. Der Browser erstellt so viele Spalten dieser Breite, wie bequem in den Container passen, und teilt dann den verbleibenden Platz zwischen alle Spalten auf. Die Anzahl der Spalten ändert sich daher entsprechend dem zur Verfügung stehenden Platz.

```css
.container {
  column-width: 10em;
}
```

Sie können die {{cssxref('columns')}}-Kurzschrift verwenden, um eine maximale Anzahl von Spalten und eine minimale Spaltenbreite anzugeben. Dies kann sicherstellen, dass Zeilenlängen nicht unlesbar lang werden, wenn die Bildschirmgröße zunimmt oder zu schmal, wenn die Bildschirmgröße abnimmt.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Items, indem der Platz zwischen den Items entsprechend dem Platz in ihrem Container verteilt wird. Durch Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass die Items reagieren, wenn sie mehr oder weniger Platz um sich herum haben.

Im folgenden Beispiel nehmen die Flex-Items jeweils die gleiche Menge an Platz im Flex-Container ein, wobei die Kurzschrift von `flex: 1` verwendet wird, wie im Layout-Thema [Flexbox: Flexible Größe von Flex-Items](/de/docs/Learn/CSS/CSS_layout/Flexbox#flexible_sizing_of_flex_items) beschrieben.

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

> [!NOTE]
> Als Beispiel haben wir oben ein einfaches responsives Layout mit Flexbox erstellt. Wir verwenden einen Breakpoint, um bei größer werdendem Bildschirm zu mehreren Spalten zu wechseln und die Größe des Hauptinhalts mit {{cssxref('max-width')}} zu begrenzen: [Beispiel](https://mdn.github.io/css-examples/learn/rwd/flex-based-rwd.html), [Quellcode](https://github.com/mdn/css-examples/blob/main/learn/rwd/flex-based-rwd.html).

### CSS Grid

Im CSS-Grid-Layout erlaubt die `fr`-Einheit die Verteilung des verfügbaren Raums über Gitterlinien. Das nächste Beispiel erstellt einen Grid-Container mit drei Tracks, die jeweils mit `1fr` bemessen sind. Dieses wird drei Spaltentracks erstellen, die jeweils einen Teil des verfügbaren Platzes im Container einnehmen. Sie können mehr über diesen Ansatz zur Erstellung eines Grids im Lernfeld Layout-Thema Grids erfahren, unter [Flexible Grids mit der fr-Einheit](/de/docs/Learn/CSS/CSS_layout/Grids#flexible_grids_with_the_fr_unit).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

> [!NOTE]
> Die Grid-Layout-Version ist noch einfacher, da wir die Spalten auf der .wrapper definieren können: [Beispiel](https://mdn.github.io/css-examples/learn/rwd/grid-based-rwd.html), [Quellcode](https://github.com/mdn/css-examples/blob/main/learn/rwd/grid-based-rwd.html).

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien niemals größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medien, damit sie nie ihre Container überlaufen. Die Verwendung eines einzigen großen Bildes und dessen Herunterskalierung für kleine Geräte verschwendet Bandbreite, indem Bilder heruntergeladen werden, die größer sind, als benötigt.

Responsive Images, die das {{htmlelement("picture")}}-Element und die {{htmlelement("img")}}-Attribute `srcset` und `sizes` verwenden, ermöglichen es, Bilder gezielt für den Viewport und die Auflösung des Geräts bereitzustellen. Zum Beispiel können Sie ein quadratisches Bild für Mobilgeräte einfügen, aber das gleiche Motiv als Querformatbild auf dem Desktop anzeigen.

Das `<picture>`-Element ermöglicht es, mehrere Größen zusammen mit "Hinweisen" (Metadaten, die die Bildschirmgröße und Auflösung beschreiben, für die das Bild am besten geeignet ist) bereitzustellen, und der Browser wählt das passendste Bild für jedes Gerät aus, um sicherzustellen, dass ein Benutzer die passende Bildgröße für das Gerät herunterlädt, das er verwendet. Die Verwendung von `<picture>` zusammen mit `max-width` beseitigt die Notwendigkeit, Bilder mit Media Queries zu skalieren. Es ermöglicht es, Bilder mit unterschiedlichen {{glossary("aspect ratio", "Seitenverhältnissen")}} auf unterschiedliche Viewport-Größen zu zielen.

Sie können auch _Bilder für Kunst inszenieren_, die bei verschiedenen Größen verwendet werden, um so eine andere Ausschnitt oder ein völlig anderes Bild auf verschiedenen Bildschirmgrößen bereitzustellen.

Sie finden eine detaillierte [Anleitung zu Responsive Images im Learn HTML-Bereich](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) hier auf MDN.

Weitere nützliche Tipps:

- Stellen Sie immer sicher, dass Sie ein geeignetes Bildformat für Ihre Website-Bilder verwenden (wie PNG oder JPG), und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihre Website hochladen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) verwenden, um visuelle Effekte ohne Bilder zu implementieren.
- Sie können Media Queries im Media-Attribut auf {{htmlelement("source")}}-Elementen verwenden, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verschachtelt sind, um Video-/Audiodateien bereitzustellen, die für verschiedene Geräte passend sind (responsives Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Media Queries oder mit Hilfe von Viewportableinheiten, um kleinere oder größere Mengen an Bildschirmplatz widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Stufe 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß wie unsere Basisschriftgröße ist. Das ist eine wirklich große Überschrift! Wir wollen diese Jumbo-Überschrift nur auf größeren Bildschirmgrößen, daher erstellen wir zuerst eine kleinere Überschrift und verwenden Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer einen Bildschirm von mindestens `1200px` hat.

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

Wir haben unser obiges responsives Grid-Beispiel bearbeitet, um auch responsive Typografie mit der beschriebenen Methode einzuschließen. Sie können sehen, wie die Überschrift die Größe wechselt, wenn das Layout zur Zwei-Spalten-Version wechselt.

Auf Mobilgeräten ist die Überschrift kleiner:

![Ein gestapeltes Layout mit einer kleinen Überschriftengröße.](mdn-rwd-font-mobile.png)

Auf dem Desktop sehen wir jedoch die größere Überschriftengröße:

![Ein Zweispaltenlayout mit einer großen Überschrift.](mdn-rwd-font-desktop.png)

> [!NOTE]
> Sehen Sie dieses Beispiel in Aktion: [Beispiel](https://mdn.github.io/css-examples/learn/rwd/type-rwd.html), [Quellcode](https://github.com/mdn/css-examples/blob/main/learn/rwd/type-rwd.html).

Wie dieser Ansatz zur Typografie zeigt, müssen Sie Media Queries nicht ausschließlich verwenden, um das Layout der Seite zu ändern. Sie können verwendet werden, um jedes Element zu optimieren, damit es bei alternativen Bildschirmgrößen benutzerfreundlicher oder attraktiver wird.

### Verwendung von Viewportableinheiten für responsive Typografie

Viewportableinheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne Breakpoints mit Media Queries festlegen zu müssen. `1vw` entspricht einem Prozent der Viewportbreite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` einstellen, sie immer in Bezug auf die Größe des Viewports steht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der obigen Vorgehensweise ist, dass der Benutzer die Fähigkeit verliert, Text, der mit der `vw`-Einheit festgelegt ist, zu zoomen, da dieser Text immer im Verhältnis zur Größe des Viewports steht. **Sie sollten daher niemals Text ausschließlich mit Viewportableinheiten festlegen**.

Es gibt eine Lösung, und sie beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die `vw`-Einheit zu einem Wert hinzuzufügen, der mit einer festen Größe wie `em`s oder `rem`s festgelegt wird, kann der Text dennoch gezoomt werden. Im Wesentlichen fügt die `vw`-Einheit zu diesem vergrößerten Wert hinzu:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal angeben müssen, anstatt sie für Mobilgeräte festzulegen und sie in den Media Queries neu zu definieren. Die Schriftgröße nimmt dann schrittweise zu, wenn Sie die Größe des Viewports vergrößern.

> [!NOTE]
> Sehen Sie ein Beispiel hierfür in Aktion: [Beispiel](https://mdn.github.io/css-examples/learn/rwd/type-vw.html), [Quellcode](https://github.com/mdn/css-examples/blob/main/learn/rwd/type-vw.html).

## Der Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode einer responsiven Seite ansehen, werden Sie normalerweise den folgenden {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieser [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) Meta-Tag sagt mobilen Browsern, dass sie die Breite des Viewports auf die Gerätebreite einstellen und das Dokument auf 100% seiner beabsichtigten Größe skalieren sollen, was das Dokument in der mobilen Größe zeigt, die Sie vorgesehen haben.

Warum ist das nötig? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu lügen.

Dieser Meta-Tag existiert, weil, als Smartphones erstmals auf den Markt kamen, die meisten Websites nicht mobil optimiert waren. Daher setzte der mobile Browser die Viewport-Breite auf 980 Pixel, renderte die Seite in dieser Breite und zeigte das Ergebnis als herausgezoomte Version des Desktop-Layouts. Benutzer konnten in die Website hineinzoomen und sie herumschieben, um die für sie interessanten Teile anzusehen, aber es sah schlecht aus.

Indem Sie `width=device-width` setzen, überschreiben Sie den Standard eines mobilen Geräts, wie z.B. Apples Standard `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne dies könnten Ihr responsives Design mit Breakpoints und Media Queries auf mobilen Browsern nicht wie beabsichtigt funktionieren. Wenn Sie ein schmalbildiges Layout haben, das bei einer Viewport-Breite von 480px oder weniger ausgelöst wird, aber das Gerät angibt, dass es 980px breit ist, wird dieser Benutzer Ihr schmalbildiges Layout nicht sehen.

**Daher sollten Sie _immer_ den Viewport-Meta-Tag in den Headern Ihrer Dokumente einfügen.**

## Zusammenfassung

Responsives Design bezieht sich auf ein Site- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es angezeigt wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist im Wesentlichen einfach die Art und Weise, wie wir standardmäßig Websites erstellen. Berücksichtigen Sie die Websites, die Sie auf Ihrem Telefon besuchen – es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Website zu stoßen, die die skaliert Herabverkleinerte Version der Desktopversion ist oder bei der Sie seitwärts scrollen müssen, um Dinge zu finden. Das liegt daran, dass das Web zu diesem Ansatz übergegangen ist, responsive zu gestalten.

Es ist auch viel einfacher geworden, mit Hilfe der Layout-Methoden, die Sie in diesen Lektionen gelernt haben, auf responsive Designs zu kommen. Wenn Sie heute neu in der Webentwicklung sind, haben Sie viel mehr Werkzeuge zur Verfügung als in den frühen Tagen des responsiven Designs. Es lohnt sich daher, das Alter der Materialien zu überprüfen, die Sie verwenden. Während die historischen Artikel immer noch nützlich sind, macht es der moderne Einsatz von CSS und HTML viel einfacher, elegante und nützliche Designs zu erstellen, unabhängig davon, mit welchem Gerät Ihr Besucher die Website ansieht.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touch Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivität auf Touchscreens oder Trackpads zu interpretieren, was qualitativ hochwertige Unterstützung für komplexe berührungsbasierte Benutzeroberflächen ermöglicht.
  - Verwenden Sie die [Pointer](/de/docs/Web/CSS/@media/pointer) oder [Any-Pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um unterschiedliche CSS auf touch-fähigen Geräten zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}
