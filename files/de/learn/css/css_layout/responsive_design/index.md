---
title: Responsive Design
slug: Learn/CSS/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Webdesign-Ansatz, um Webseiten auf allen Bildschirmgrößen und Auflösungen gut darzustellen und dabei eine gute Benutzerfreundlichkeit sicherzustellen. Es ist der Weg, für ein Multi-Device-Web zu gestalten. In diesem Artikel helfen wir Ihnen, einige Techniken zu verstehen, die verwendet werden können, um es zu meistern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS: Erste Schritte</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">CSS Bausteine</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen Sie die grundlegenden Absichten und die CSS-Funktionen, die zur Implementierung von Responsive Designs verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des Responsive Designs: Mobile Webdesign

Bevor Responsive Webdesign der Standardansatz für die Erstellung von Websites wurde, die auf verschiedenen Gerätetypen funktionieren, sprachen Webentwickler über Mobile Webdesign, Mobile Webentwicklung oder manchmal auch mobilen-freundliches Design. Diese sind im Wesentlichen dasselbe wie Responsive Webdesign — die Ziele sind sicherzustellen, dass Websites gut auf Geräten mit unterschiedlichen physischen Attributen arbeiten (Bildschirmgröße, Auflösung) in Bezug auf Layout, Inhalte (Text und Medien) und Leistung.

Der Unterschied liegt hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprachen wir von Desktop oder Mobile, jetzt gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobiltelefone, Tablets, Uhren usw. Anstatt nur ein paar verschiedene Bildschirmgrößen zu berücksichtigen, müssen wir jetzt Seiten defensiv gestalten, um gängige Bildschirmgrößen und Auflösungen sowie Unbekannte zu berücksichtigen.
- Mobile Geräte waren früher in Bezug auf CPU/GPU und verfügbare Bandbreite leistungsschwach. Einige unterstützten kein CSS oder sogar HTML, und deshalb war es üblich, serverseitige Browser-Erkennung durchzuführen, um den Geräte-/Browser-Typ zu bestimmen, bevor eine Seite bereitgestellt wurde, die das Gerät verarbeiten konnte. Mobile Geräte hatten oft wirklich einfache, grundlegende Erfahrungen geliefert bekommen, weil es alles war, was sie bewältigen konnten. Heutzutage können mobile Geräte die gleichen Technologien bewältigen wie Desktop-Computer, daher sind solche Techniken weniger gebräuchlich.
  - Sie sollten dennoch die in diesem Artikel besprochenen Techniken verwenden, um mobilen Nutzern eine geeignete Erfahrung zu bieten, da immer noch Einschränkungen wie Akkulaufzeit und Bandbreite bestehen.
  - Benutzererfahrung ist auch ein Anliegen. Ein mobiler Nutzer einer Reiseseite möchte vielleicht nur Flugzeiten und Verspätungsinformationen nachsehen und nicht mit einem 3D-animierten Globus mit Flugrouten und Ihrer Unternehmensgeschichte konfrontiert werden. Dies kann jedoch mit responsiven Designtechniken gehandhabt werden.
- Moderne Technologien sind viel besser geeignet, um responsive Erfahrungen zu schaffen. Zum Beispiel ermöglichen [responsive Bilder-/Medien-Technologien](#responsive_imagesmedia) nun passende Medien für verschiedene Geräte bereitstellen, ohne auf Techniken wie serverseitige Erkennung angewiesen zu sein.

## Einführung in Responsive Webdesign

HTML ist grundsätzlich responsive, oder _fluid_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster anpassen, wird der Browser den Text automatisch so umfließen lassen, dass er in das Sichtfenster passt.

Zwar mag das standardmäßige responsive Verhalten nach einer Lösung klingen, die nicht benötigt wird, aber lange Textzeilen, die auf einem breiten Monitor über die volle Breite angezeigt werden, können schwer zu lesen sein. Wenn die Linienlänge mit CSS reduziert wird, etwa durch Erstellen von Spalten oder das Hinzufügen von signifikantem Abstand, kann die Seite für den Benutzer gedrungen aussehen, der sein Browserfenster verkleinert oder die Seite auf einem mobilen Gerät öffnet.

![Ein Layout mit zwei Spalten, das auf eine mobile Bildschirmgröße zusammengedrückt wurde.](mdn-rwd-liquid.png)

Eine nicht skalierbare Webseite zu erstellen, indem eine feste Breite eingestellt wird, funktioniert auch nicht; das führt zu Scrollleisten auf schmalen Geräten und zu viel Leerraum auf breiten Bildschirmen.

Responsive Webdesign, oder RWD, ist ein Designansatz, der die Bandbreite an Geräten und Gerätegrößen berücksichtigt und eine automatische Anpassung an den Bildschirm ermöglicht, unabhängig davon, ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr angesehen wird.

Responsive Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe bewährter Methoden zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das auf jedes Gerät reagieren kann, auf dem der Inhalt angesehen wird.

Der Begriff _Responsive Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschrieb die Verwendung von fluiden Raster, fluiden Bildern und Media Queries zur Erstellung von responsive Inhalten, wie im Buch [Flexible Web Design](https://flexiblewebbook.com/) von Zoe Mickley Gillenwater erörtert.

Damals lautete die Empfehlung, CSS `float` für das Layout und Media Queries zu verwenden, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Fluide Bilder werden so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width` Eigenschaft auf `100%` eingestellt. Fluide Bilder verkleinern sich, wenn die sie enthaltende Spalte schmaler wird, wachsen aber nicht größer als ihre intrinsische Größe, wenn die Spalte wächst. Dies ermöglicht es einem Bild, sich anzupassen, um in seinen Inhalt zu passen, anstatt ihn zu überlaufen, aber nicht größer zu werden und zu verpixeln, wenn der Container breiter wird als das Bild.

Moderne CSS-Layout-Methoden sind von Natur aus responsive, und seit der Veröffentlichung von Gillenwaters Buch und Marcottes Artikel haben wir viele Funktionen in die Webplattform integriert, um das Design von responsiven Seiten einfacher zu machen.

Der Rest dieses Artikels wird Sie auf die verschiedenen Features der Webplattform hinweisen, die Sie bei der Erstellung einer responsive Seite verwenden möchten.

## Media Queries

[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Serie von Tests durchzuführen (z.B. ob der Bildschirm des Benutzers größer als eine bestimmte Breite oder ob eine bestimmte Auflösung beträgt) und CSS selektiv anzuwenden, um die Seite entsprechend den Bedürfnissen des Benutzers zu gestalten.

Zum Beispiel testet die folgende Media Query, ob die aktuelle Webseite als Bildschirmmedium angezeigt wird (also kein gedrucktes Dokument) und das Sichtfenster mindestens `80rem` breit ist. Das CSS für das `.container`-Selektor wird nur angewendet, wenn diese beiden Bedingungen wahr sind.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Media Queries innerhalb eines Stylesheets hinzufügen und Ihr gesamtes Layout oder Teile davon anpassen, um am besten zu verschiedenen Bildschirmgrößen zu passen. Die Punkte, an denen eine Media Query eingeführt wird und das Layout geändert wird, sind als _Breakpoints_ bekannt.

Ein allgemeiner Ansatz bei der Verwendung von Media Queries ist es, ein einfaches Einspaltenlayout für schmalbildschirmige Geräte (z.B. Mobiltelefone) zu erstellen und dann für breitere Bildschirme zu prüfen und ein Mehrspaltenlayout zu implementieren, wenn Sie wissen, dass Sie genug Bildschirmbreite haben, um es zu handhaben. Das Entwerfen für Mobile zuerst wird als **Mobile First** Design bezeichnet.

Wenn Sie Breakpoints verwenden, ermutigen Best Practices, die Breakpoints von Media Queries mit [relativen Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) anstatt mit absoluten Größen eines einzelnen Geräts zu definieren.

Es gibt unterschiedliche Ansätze für die in einem Media Query-Block definierten Stile; dies reicht von der Verwendung von Media Queries zum {{htmlelement("link")}} Stylesheets basierend auf Browsergrößenbereichen, bis hin zur Verwendung von Custom Properties Variablen, um Werte zu speichern, die mit jedem Breakpoint verbunden sind.

Erfahren Sie mehr in der MDN-Dokumentation zu [Media Queries](/de/docs/Web/CSS/CSS_media_queries).

Media Queries können bei RWD helfen, sind aber keine Voraussetzung. Flexible Rastersysteme, relative Einheiten sowie minimale und maximale Einheit-Werte können ohne Queries verwendet werden.

## Responsive Layout-Technologien

Responsive Seiten basieren auf flexiblen Rastersystemen, was bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts ansprechen müssen.

Durch die Verwendung eines flexiblen Rastersystems können Sie ein Feature ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel können Sie, um sicherzustellen, dass die Zeilenlängen nicht unlesbar lang werden, da die Bildschirmgröße zunimmt, {{cssxref('columns')}} verwenden; wenn ein Kasten mit zwei Wörtern auf jeder Linie zusammengedrückt wird, können Sie einen Breakpoint einstellen.

Mehrere Layoutmethoden, einschließlich [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout), [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) und [Grid](/de/docs/Learn/CSS/CSS_layout/Grids) sind standardmäßig responsive. Sie alle gehen davon aus, dass Sie versuchen, ein flexibles Rastersystem zu erstellen, und bieten Ihnen einfachere Möglichkeiten, dies zu tun.

### Multicol

Mit Multicol geben Sie eine `column-count` an, um die maximale Anzahl von Spalten anzuzeigen, in die Ihr Inhalt aufgeteilt werden soll. Der Browser berechnet dann die Größe dieser Spalten, deren Größe sich je nach Bildschirmgröße ändern wird.

```css
.container {
  column-count: 3;
}
```

Wenn Sie stattdessen eine `column-width` angeben, geben Sie eine _Mindestbreite_ an. Der Browser erstellt so viele Spalten dieser Breite, wie bequem in den Container passen, und teilt dann den verbleibenden Raum zwischen allen Spalten auf. Daher ändert sich die Anzahl der Spalten entsprechend der verfügbaren Fläche.

```css
.container {
  column-width: 10em;
}
```

Sie können die {{cssxref('columns')}} Kurzschrift verwenden, um eine maximale Anzahl von Spalten und eine minimale Spaltenbreite bereitzustellen. Dies kann sicherstellen, dass die Zeilenlängen nicht unleserlich lang werden, wenn die Bildschirmgröße zunimmt, oder zu schmal, wenn die Bildschirmgröße abnimmt.

### Flexbox

In Flexbox schrumpfen oder wachsen Flex-Elemente und verteilen den Raum zwischen den Elementen entsprechend dem Platz in ihrem Container. Indem Sie die Werte für `flex-grow` und `flex-shrink` ändern, können Sie angeben, wie Sie möchten, dass die Elemente sich verhalten, wenn sie auf mehr oder weniger Platz um sie herum stoßen.

Im folgenden Beispiel nimmt jedes Flex-Element den gleichen Raum im Flex-Container ein, indem die Kurzschrift `flex: 1` verwendet wird, wie im Layout-Thema [Flexbox: Flexible Größenanpassung von Flex-Elementen](/de/docs/Learn/CSS/CSS_layout/Flexbox#flexible_sizing_of_flex_items) beschrieben.

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

> [!NOTE]
> Als Beispiel haben wir oben ein einfaches responsives Layout mit Flexbox aufgebaut. Wir verwenden einen Breakpoint, um zu mehreren Spalten zu wechseln, wenn der Bildschirm größer wird, und begrenzen die Größe des Hauptinhalts mit {{cssxref('max-width')}}: [Beispiel](https://mdn.github.io/css-examples/learn/rwd/flex-based-rwd.html), [Quellcode](https://github.com/mdn/css-examples/blob/main/learn/rwd/flex-based-rwd.html).

### CSS Grid

Im CSS Grid-Layout ermöglicht die `fr`-Einheit die Verteilung des verfügbaren Raums über die Grid Strecken. Das nächste Beispiel erstellt einen Grid-Container mit drei Strecken, die bei `1fr` bemessen sind. Dies wird drei Spaltenstrecken erstellen, die jeweils einen Teil des verfügbaren Raums im Container einnehmen. Sie können mehr über diesen Ansatz zur Erstellung eines Grids im Thema zu Learn Layout Grids unter [Flexible Grids mit der fr Einheit](/de/docs/Learn/CSS/CSS_layout/Grids#flexible_grids_with_the_fr_unit) erfahren.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

> [!NOTE]
> Die Grid-Layout-Version ist noch einfacher, da wir die Spalten auf der .wrapper definieren können: [Beispiel](https://mdn.github.io/css-examples/learn/rwd/grid-based-rwd.html), [Quellcode](https://github.com/mdn/css-examples/blob/main/learn/rwd/grid-based-rwd.html).

## Responsive Bilder/Medien

Um sicherzustellen, dass Medien nie größer als ihr responsiver Container sind, kann der folgende Ansatz verwendet werden:

```css
img,
picture,
video {
  max-width: 100%;
}
```

Dies skaliert Medien, um sicherzustellen, dass sie nie ihre Container überlaufen. Die Verwendung eines einzigen großen Bildes und seine Skalierung nach unten für kleine Geräte verschwendet Bandbreite, indem Bilder heruntergeladen werden, die größer sind als nötig.

Responsive Bilder, die das {{htmlelement("picture")}}-Element und die {{htmlelement("img")}} `srcset`- und `sizes`-Attribute verwenden, ermöglichen es, Bilder, die auf das Viewport und die Auflösung des Geräts abgestimmt sind, bereitzustellen. Zum Beispiel können Sie ein quadratisches Bild für mobile Geräte einschließen, aber dieselbe Szene als Landschaftsbild auf dem Desktop zeigen.

Das `<picture>`-Element ermöglicht es, mehrere Größen zusammen mit "Hinweisen" (Metadaten, die die Bildschirmgröße und Auflösung beschreiben, für die das Bild am besten geeignet ist) bereitzustellen, und der Browser wählt das passendste Bild für jedes Gerät aus, wodurch sichergestellt wird, dass ein Benutzer ein Bild in einer für das Gerät entsprechenden Größe herunterlädt. Die Verwendung von `<picture>` zusammen mit `max-width` beseitigt die Notwendigkeit, Bilder mit Media Queries zu skalieren. Es ermöglicht es, Bilder mit unterschiedlichen {{Glossary("aspect_ratio", "Seitenverhältnissen")}} auf verschiedene Viewport-Größen auszurichten.

Sie können auch Bilder unterschiedlich _artistisch gestalten_, die in verschiedenen Größen verwendet werden, was es ermöglicht, für verschiedene Bildschirmgrößen einen anderen Bildausschnitt oder ein komplett anderes Bild zu verwenden.

Sie können einen detaillierten [Leitfaden zu Responsive Images im Learn HTML Abschnitt](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) hier auf MDN finden.

Andere nützliche Tipps:

- Achten Sie immer darauf, ein geeignetes Bildformat für Ihre Website-Bilder (wie PNG oder JPG) zu verwenden und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihrer Website platzieren.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) verwenden, um visuelle Effekte ohne Bilder umzusetzen.
- Sie können Media Queries innerhalb des Medienelements auf {{htmlelement("source")}}-Elementen verwenden, die in {{htmlelement("video")}}/{{htmlelement("audio")}}-Elemente eingebettet sind, um Video-/Audiodateien für verschiedene Geräte passend zu laden (responsives Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Media Queries oder die Verwendung von Viewport-Einheiten, um das wachsende oder schrumpfende verfügbare Bildschirmland widerzuspiegeln.

### Verwendung von Media Queries für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der ersten Ebene auf `4rem` setzen, was bedeutet, dass sie viermal so groß wie unsere Grundschriftgröße ist. Das ist eine wirklich große Überschrift! Wir möchten diese riesige Überschrift nur auf größeren Bildschirmgrößen, daher erstellen wir zunächst eine kleinere Überschrift und verwenden Media Queries, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer einen Bildschirm mit mindestens `1200px` Größe hat.

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

Wir haben unser oben genanntes responsives Rastersystem-Beispiel bearbeitet, um auch responsive Schriftarten mithilfe der beschriebenen Methode einzubeziehen. Sie können sehen, wie die Überschrift die Größe wechselt, wenn das Layout zur zweispaltigen Version wechselt.

Auf Mobilgeräten ist die Überschrift kleiner:

![Ein gestapeltes Layout mit einer kleinen Schriftgröße.](mdn-rwd-font-mobile.png)

Auf dem Desktop sehen wir jedoch die größere Schriftgröße:

![Ein zweispaltiges Layout mit einer großen Schrift.](mdn-rwd-font-desktop.png)

> [!NOTE]
> Sehen Sie dieses Beispiel in Aktion: [Beispiel](https://mdn.github.io/css-examples/learn/rwd/type-rwd.html), [Quellcode](https://github.com/mdn/css-examples/blob/main/learn/rwd/type-rwd.html).

Wie dieser Ansatz zur Typografie zeigt, müssen Media Queries nicht unbedingt zur Änderung des Layouts der Seite verwendet werden. Sie können verwendet werden, um jedes Element anzupassen, um es benutzerfreundlicher oder attraktiver bei alternativen Bildschirmgrößen zu machen.

### Verwendung von Viewport-Einheiten für responsive Typografie

Viewport-Einheiten `vw` können ebenfalls genutzt werden, um responsive Typografie zu ermöglichen, ohne die Notwendigkeit, Breakpoints mit Media Queries festzulegen. `1vw` entspricht einem Prozent der Viewport-Breite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mithilfe von `vw` festlegen, sie immer in Relation zur Größe des Viewports steht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem bei der oben genannten Vorgehensweise ist, dass der Benutzer die Fähigkeit verliert, in irgendeiner Weise über die Textgröße nach draußen zu zoomen, da dieser Text immer in Bezug auf die Größe des Viewports steht. **Daher sollten Sie Text niemals allein mit Viewport-Einheiten festlegen.**

Es gibt eine Lösung, und diese beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie den `vw`-Wert zu einem Wert hinzufügen, der mit einer fixierten Größe wie `em`s oder `rem`s festgelegt ist, wird der Text weiterhin vergrößerbar sein. Im Wesentlichen wird der `vw`-Wert zu diesem vergrößerten Wert addiert:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Dies bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal angeben müssen, anstatt sie für mobile Geräte einzurichten und in den Media Queries neu zu definieren. Die Schriftgröße nimmt dann allmählich zu, wenn Sie die Größe des Viewports erhöhen.

> [!NOTE]
> Sehen Sie ein Beispiel davon in Aktion: [Beispiel](https://mdn.github.io/css-examples/learn/rwd/type-vw.html), [Quellcode](https://github.com/mdn/css-examples/blob/main/learn/rwd/type-vw.html).

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quelltext einer responsiven Seite ansehen, werden Sie normalerweise das folgende {{htmlelement("meta")}}-Tag im `<head>` des Dokuments sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Viewports auf die Gerätebreite einstellen und das Dokument auf 100 % seiner beabsichtigten Größe skalieren sollen, was das Dokument in der mobilen-optimierten Größe anzeigt, die Sie beabsichtigt haben.

Warum ist dies nötig? Weil mobile Browser dazu neigen, über ihre Viewport-Breite zu „lügen“.

Dieses Meta-Tag existiert, weil als Smartphones erstmals auftauchten, die meisten Websites nicht mobil optimiert waren. Der mobile Browser würde daher die Viewport-Breite auf 980 Pixel einstellen, die Seite bei dieser Breite rendern und das Ergebnis als herausgezoomte Version des Desktop-Layouts anzeigen. Benutzer konnten auf der Website einzoomen und umscrollen, um die für sie interessanten Teile anzusehen, doch es sah schlecht aus.

Indem Sie `width=device-width` festlegen, überschreiben Sie die Voreinstellung eines mobilen Geräts, wie Apples Voreinstellung `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne das könnte Ihr responsive Design mit Breakpoints und Media Queries auf mobilen Browsern nicht wie beabsichtigt funktionieren. Wenn Sie ein schmales Bildschirm-Layout haben, das bei einer Sichtfensterbreite von 480 Px oder weniger eintritt, aber das Gerät sagt, es sei 980 Px breit, wird dieser Benutzer Ihr schmales Bildschirm-Layout nicht sehen.

**Deshalb sollten Sie _immer_ das Viewport-Meta-Tag im Kopf Ihrer Dokumente einfügen.**

## Zusammenfassung

Responsive Design bezieht sich auf ein Website- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es angezeigt wird. Es umfasst eine Vielzahl von CSS und HTML-Funktionen und Techniken und ist mittlerweile im Wesentlichen einfach die Art, wie wir standardmäßig Webseiten erstellen. Überlegen Sie sich die Seiten, die Sie auf Ihrem Telefon besuchen — es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Seite zu stoßen, die die Desktopversion im verkleinerten Maßstab ist oder bei der Sie seitwärts scrollen müssen, um Dinge zu finden. Das liegt daran, dass sich das Web auf diesen Ansatz des responsiven Designs zubewegt hat.

Es ist auch viel einfacher geworden, responsive Designs mit den Hilfe der Layoutmethoden zu erreichen, die Sie in diesen Lektionen gelernt haben. Wenn Sie heute neu in der Webentwicklung sind, haben Sie viele weitere Tools zur Verfügung als in den frühen Tagen des responsiven Designs. Es ist daher wertvoll, das Alter der von Ihnen verwendeten Materialien zu überprüfen. Während die historischen Artikel immer noch nützlich sind, macht der moderne Einsatz von CSS und HTML es weitaus einfacher, elegante und nützliche Designs zu erstellen, egal mit welchem Gerät Ihr Besucher die Seite betrachtet.

## Siehe auch

- Arbeiten mit Touch Geräten:
  - [Touch-Events](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivitäten auf Touch-Screens oder Trackpads zu interpretieren und so eine qualitativ hochwertige Unterstützung für komplexe, auf Berührung basierende Benutzeroberflächen bereitzustellen.
  - Verwenden Sie die [Pointer](/de/docs/Web/CSS/@media/pointer) oder [Any-Pointer](/de/docs/Web/CSS/@media/any-pointer) Media Queries, um unterschiedliche CSS auf touchfähigen Geräten zu laden.
- [CSS-Tricks Leitfaden zu Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}
