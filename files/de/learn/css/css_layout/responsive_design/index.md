---
title: Responsive Design
slug: Learn/CSS/CSS_layout/Responsive_Design
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}

_Responsive Webdesign_ (RWD) ist ein Webdesign-Ansatz, um Webseiten auf allen Bildschirmgrößen und Auflösungen gut darzustellen und gleichzeitig eine gute Benutzerfreundlichkeit zu gewährleisten. Es ist der Weg, für ein Multi-Device-Web zu gestalten. In diesem Artikel werden wir Ihnen einige Techniken näherbringen, die Sie beherrschen sollten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und ein Verständnis davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">CSS Bausteine</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der grundlegenden Zwecke und CSS-Funktionen, die zur Implementierung von responsiven Designs verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Vorläufer des Responsive Designs: Mobiles Webdesign

Bevor Responsive Webdesign der Standardansatz für die Erstellung von Websites wurde, die auf verschiedenen Gerätetypen funktionieren, sprachen Webentwickler über mobiles Webdesign, mobile Webentwicklung oder manchmal mobilfreundliches Design. Diese sind im Wesentlichen das gleiche wie Responsive Webdesign — die Ziele sind, sicherzustellen, dass Websites hinsichtlich Layout, Inhalt (Text und Medien) und Leistung gut auf Geräten mit unterschiedlichen physischen Eigenschaften (Bildschirmgröße, Auflösung) funktionieren.

Der Unterschied liegt hauptsächlich in den beteiligten Geräten und den verfügbaren Technologien zur Erstellung von Lösungen:

- Früher sprach man von Desktop oder Mobile, aber heute gibt es viele verschiedene Gerätetypen wie Desktop, Laptop, Mobil, Tablets, Uhren usw. Anstatt nur wenige verschiedene Bildschirmgrößen zu berücksichtigen, müssen wir jetzt Websites defensiv gestalten, um gängige Bildschirmgrößen und Auflösungen sowie Unbekanntes abzudecken.
- Mobile Geräte waren früher leistungsschwach in Bezug auf CPU/GPU und verfügbare Bandbreite. Einige unterstützten nicht einmal CSS oder HTML. Daher war es üblich, serverseitiges Browser-Sniffing durchzuführen, um den Geräte-/Browsers-Typ zu bestimmen und dann eine Seite bereitzustellen, mit der das Gerät umgehen konnte. Mobile Geräte boten oft sehr einfache, grundlegende Erlebnisse, weil das alles war, was sie bewältigen konnten. Heutzutage können mobile Geräte die gleichen Technologien wie Desktop-Computer verarbeiten, daher sind solche Techniken weniger verbreitet.
  - Sie sollten dennoch die in diesem Artikel beschriebenen Techniken anwenden, um mobilen Nutzern ein geeignetes Erlebnis zu bieten, da es immer noch Einschränkungen wie Akkulaufzeit und Bandbreite gibt.
  - Auch die Benutzererfahrung ist wichtig. Beispielsweise möchte ein mobiler Nutzer einer Reiseseite möglicherweise nur Flugzeiten und Verspätungsinformationen überprüfen und nicht mit einem 3D animierten Globus mit Flugrouten und der Unternehmensgeschichte konfrontiert werden. Dies kann jedoch mit responsiven Designtechniken gehandhabt werden.
- Moderne Technologien sind viel besser für die Erstellung von Responsive-Erlebnissen geeignet. Beispielsweise ermöglichen es [Responsive-Bilder-/Medientechnologien](#responsive_imagesmedia) nun, geeignete Medien für verschiedene Geräte bereitzustellen, ohne auf Techniken wie serverseitiges Sniffing angewiesen zu sein.

## Einführung in Responsive Webdesign

HTML ist grundsätzlich responsiv, oder _fließend_. Wenn Sie eine Webseite erstellen, die nur HTML enthält, ohne CSS, und das Fenster vergrößern oder verkleinern, wird der Browser den Text automatisch so umfließen lassen, dass er in das Ansichtsfenster passt.

Obwohl das standardmäßige responsive Verhalten so klingen mag, als wäre keine Lösung nötig, können lange Textzeilen, die auf einem großen Monitor in voller Breite angezeigt werden, schwer lesbar sein. Wenn die Bildschirmbreite mit CSS reduziert wird, wie durch Erstellen von Spalten oder Hinzufügen von signifikantem Abstand, kann die Seite für den Benutzer, der das Browserfenster verkleinert oder die Seite auf einem mobilen Gerät öffnet, zusammengedrückt aussehen.

![Ein Layout mit zwei Spalten, zusammengedrückt in einem mobilen Ansichtsfenster.](mdn-rwd-liquid.png)

Das Erstellen einer nicht veränderbaren Webseite durch Festlegen einer festen Breite funktioniert auch nicht; das führt zu Scrollleisten auf schmalen Geräten und zu viel leerem Raum auf breiten Bildschirmen.

Responsive Webdesign, oder RWD, ist ein Design-Ansatz, der das Spektrum der Geräte und Gerätegrößen anspricht, wodurch eine automatische Anpassung an den Bildschirm ermöglicht wird, egal ob der Inhalt auf einem Tablet, Telefon, Fernseher oder einer Uhr angesehen wird.

Responsive Webdesign ist keine separate Technologie — es ist ein Ansatz. Es ist ein Begriff, der verwendet wird, um eine Reihe von Best Practices zu beschreiben, die verwendet werden, um ein Layout zu erstellen, das sich an jedes verwendete Gerät anpassen kann, mit dem die Inhalte betrachtet werden.

Der Begriff _Responsive Design_, [geprägt von Ethan Marcotte im Jahr 2010](https://alistapart.com/article/responsive-web-design/), beschreibt die Verwendung von fließenden Gittern, fließenden Bildern und Medienabfragen zur Erstellung von responsiven Inhalten, wie im Buch [Flexible Web Design](https://flexiblewebbook.com/) von Zoe Mickley Gillenwater erörtert.

Zu dieser Zeit war es die Empfehlung, CSS `float` für das Layout zu verwenden und Medienabfragen zu nutzen, um die Browserbreite abzufragen und Layouts für verschiedene Breakpoints zu erstellen. Fließende Bilder sind so eingestellt, dass sie die Breite ihres Containers nicht überschreiten; sie haben ihre `max-width`-Eigenschaft auf `100%` gesetzt. Fließende Bilder verkleinern sich, wenn ihre enthaltende Spalte schmaler wird, wachsen aber nicht größer als ihre intrinsische Größe, wenn die Spalte wächst. Dies ermöglicht es einem Bild, sich an seinen Inhalt anzupassen, anstatt ihn zu überlaufen, aber nicht größer zu werden und pixelig auszusehen, wenn der Container breiter wird als das Bild.

Moderne CSS-Layoutmethoden sind von Natur aus responsive, und seit der Veröffentlichung von Gillenwaters Buch und Marcottes Artikel haben wir viele Funktionen in der Webplattform integriert, um das Design von Responsive-Sites zu erleichtern.

Der Rest dieses Artikels wird Sie auf die verschiedenen Funktionen der Webplattform hinweisen, die Sie möglicherweise verwenden möchten, wenn Sie eine responsive Seite erstellen.

## Medienabfragen

[Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es uns, eine Reihe von Tests durchzuführen (z. B. ob der Bildschirm des Benutzers breiter als eine bestimmte Breite oder von einer bestimmten Auflösung ist) und CSS selektiv anzuwenden, um die Seite entsprechend den Bedürfnissen des Benutzers zu gestalten.

Beispielsweise testet die folgende Medienabfrage, ob die aktuelle Webseite als Bildschirmmedium angezeigt wird (daher kein gedrucktes Dokument) und das Ansichtsfenster mindestens `80rem` breit ist. Das CSS für den `.container`-Selektor wird nur angewendet, wenn diese beiden Bedingungen zutreffen.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Sie können mehrere Medienabfragen innerhalb eines Stylesheets hinzufügen und Ihr gesamtes Layout oder Teile davon anpassen, um am besten zu den verschiedenen Bildschirmgrößen zu passen. Die Punkte, an denen eine Medienabfrage eingeführt wird und das Layout geändert wird, werden als _Breakpoints_ bezeichnet.

Ein gebräuchlicher Ansatz bei der Verwendung von Medienabfragen besteht darin, ein einfaches einspaltiges Layout für schmale Bildschirme (z. B. Mobiltelefone) zu erstellen, dann auf breitere Bildschirme zu prüfen und ein mehrspaltiges Layout zu implementieren, wenn Sie wissen, dass Sie genug Bildschirmbreite haben, um es zu handhaben. Das Designen für mobile Geräte zuerst ist als **Mobile-First**-Design bekannt.

Wenn Sie Breakpoints verwenden, wird best practices empfohlen, Medienabfragen mit [relativen Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) anstelle von absoluten Größen eines individuellen Geräts zu definieren.

Es gibt verschiedene Ansätze zu den innerhalb eines Medienabfrageblocks definierten Stilen; sie reichen von der Verwendung von Medienabfragen zur {{htmlelement("link")}} Stylesheets basierend auf Browsergrößenbereichen bis hin zur Verwendung von benutzerdefinierten Eigenschaftenvariablen, um Werte zu speichern, die mit jedem Breakpoint verbunden sind.

Erfahren Sie mehr in der MDN-Dokumentation für [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries).

Medienabfragen können bei RWD helfen, sind aber keine Voraussetzung. Flexible Gitter, relative Einheiten sowie minimale und maximale Einheitswerte können auch ohne Abfragen verwendet werden.

## Responsive Layout-Technologien

Responsive Websites basieren auf flexiblen Gittern, das bedeutet, dass Sie nicht jede mögliche Gerätegröße mit pixelgenauen Layouts anvisieren müssen.

Indem Sie ein flexibles Gittersystem verwenden, können Sie eine Funktion ändern oder einen Breakpoint hinzufügen und das Design an dem Punkt ändern, an dem der Inhalt schlecht aussieht. Zum Beispiel können Sie {{cssxref('columns')}} verwenden, um sicherzustellen, dass die Zeilenlängen mit zunehmender Bildschirmgröße nicht unleserlich lang werden; wenn ein Feld mit zwei Wörtern in jeder Zeile eingequetscht wird, wenn es sich verengt, können Sie einen Breakpoint setzen.

Mehrere Layoutmethoden, einschließlich [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout), [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) und [Grid](/de/docs/Learn/CSS/CSS_layout/Grids), sind standardmäßig responsive. Sie gehen alle davon aus, dass Sie versuchen, ein flexibles Gitter zu erstellen, und geben Ihnen einfachere Möglichkeiten, dies zu tun.

### Multicol

Bei Multicol geben Sie eine `column-count` an, um die maximale Anzahl von Spalten anzuzeigen, in die Ihr Inhalt aufgeteilt werden soll. Der Browser berechnet dann die Größe dieser Spalten, eine Größe, die sich je nach Bildschirmgröße ändert.

```css
.container {
  column-count: 3;
}
```

Wenn Sie stattdessen eine `column-width` angeben, geben Sie eine _Mindestbreite_ an. Der Browser erstellt so viele Spalten dieser Breite, wie komfortabel in den Container passen, und teilt den restlichen Platz zwischen allen Spalten auf. Daher ändert sich die Anzahl der Spalten je nach verfügbarem Platz.

```css
.container {
  column-width: 10em;
}
```

Sie können die {{cssxref('columns')}}-Kurzschreibweise verwenden, um eine maximale Anzahl von Spalten und eine minimale Spaltenbreite anzugeben. Dies kann sicherstellen, dass die Zeilenlängen mit zunehmender Bildschirmgröße nicht unleserlich lang oder bei abnehmender Bildschirmgröße zu schmal werden.

### Flexbox

Bei Flexbox schrumpfen oder wachsen Flex-Elemente und verteilen den Raum zwischen den Elementen entsprechend dem Raum in ihrem Container. Durch Ändern der Werte für `flex-grow` und `flex-shrink` können Sie angeben, wie Sie möchten, dass sich die Elemente verhalten, wenn sie mehr oder weniger Platz um sich herum finden.

Im folgenden Beispiel nimmt jedes Flexelement eine gleiche Menge Platz im Flexcontainer ein, wobei die Kurzschreibweise von `flex: 1` verwendet wird, wie im Layou-Thema [Flexbox: Flexible Größenanpassung von Flexelementen](/de/docs/Learn/CSS/CSS_layout/Flexbox#flexible_sizing_of_flex_items) beschrieben.

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

> [!NOTE]
> Wir haben als Beispiel ein einfaches responsives Layout oben mit Flexbox erstellt. Wir verwenden einen Breakpoint, um bei wachsendem Bildschirm auf mehrere Spalten umzuschalten und die Größe des Hauptinhalts mit {{cssxref('max-width')}} zu begrenzen: [Beispiel](https://mdn.github.io/css-examples/learn/rwd/flex-based-rwd.html), [Quellcode](https://github.com/mdn/css-examples/blob/main/learn/rwd/flex-based-rwd.html).

### CSS-Grid

Im CSS-Grid-Layout erlaubt die `fr`-Einheit die Verteilung des verfügbaren Raumes über Gitterschienen. Das nächste Beispiel erstellt einen Grid-Container mit drei Schienen, die auf `1fr` gesetzt sind. Dies wird drei Spaltenschienen erstellen, wobei jede einen Teil des verfügbaren Raumes im Container einnimmt. Sie können mehr über diesen Ansatz zur Erstellung eines Grids im Learn Layout Grids-Thema unter [Flexibles Gitter mit der fr-Einheit](/de/docs/Learn/CSS/CSS_layout/Grids#flexible_grids_with_the_fr_unit) erfahren.

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

Dies skaliert Medien, um sicherzustellen, dass sie niemals ihre Container überlaufen. Die Verwendung eines einzigen großen Bildes und dessen Skalierung, um auf kleine Geräte zu passen, verschwendet Bandbreite, indem größere Bilder heruntergeladen werden, als benötigt werden.

Responsive Images, die das {{htmlelement("picture")}}-Element und die `srcset`- und `sizes`-Attribute von {{htmlelement("img")}} verwenden, ermöglichen es, Bilder bereitzustellen, die auf das Ansichtsfenster des Benutzers und die Auflösung seines Geräts zugeschnitten sind. Zum Beispiel können Sie ein quadratisches Bild für Mobilgeräte einfügen, aber dasselbe Szenenbild als Landschaft auf dem Desktop anzeigen.

Das `<picture>`-Element ermöglicht die Bereitstellung mehrerer Größen zusammen mit "Hinweisen" (Metadaten, die die Bildschirmgröße und -auflösung beschreiben, für die das Bild am besten geeignet ist), und der Browser wählt das geeignetste Bild für jedes Gerät aus, was sicherstellt, dass ein Nutzer eine Bildgröße herunterlädt, die für das Gerät, das er verwendet, angemessen ist. Die Verwendung von `<picture>` zusammen mit `max-width` macht das Größeneinstellen von Bildern über Medienabfragen unnötig. Es ermöglicht, Bilder mit unterschiedlichen [Seitenverhältnissen](/de/docs/Glossary/aspect_ratio) an unterschiedliche Ansichtsfenstergrößen zu richten.

Sie können Bilder auch kunstgerecht für verschiedene Größen bereitstellen und somit unterschiedliche Bildausschnitte oder völlig unterschiedliche Bilder für verschiedene Bildschirmgrößen liefern.

Sie finden eine ausführliche [Anleitung zu Responsive Images im Abschnitt Lernen HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) hier auf MDN.

Weitere nützliche Tipps:

- Stellen Sie immer sicher, dass Sie ein geeignetes Bildformat für die Bilder auf Ihrer Website verwenden (wie PNG oder JPG), und optimieren Sie die Dateigröße mit einem Grafikeditor, bevor Sie sie auf Ihre Website stellen.
- Sie können CSS-Funktionen wie [Verläufe](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) und [Schatten](/de/docs/Web/CSS/box-shadow) nutzen, um visuelle Effekte ohne die Verwendung von Bildern zu implementieren.
- Sie können Medienabfragen im media-Attribut von {{htmlelement("source")}}-Elementen verwenden, die innerhalb von {{htmlelement("video")}}/{{htmlelement("audio")}}-Elementen verschachtelt sind, um Video-/Audiodateien bereitzustellen, die für verschiedene Geräte geeignet sind (Responsive Video/Audio).

## Responsive Typografie

Responsive Typografie beschreibt das Ändern von Schriftgrößen innerhalb von Medienabfragen oder die Verwendung von Ansichtsfenstereinheiten, um geringere oder größere Mengen an Bildschirmfläche widerzuspiegeln.

### Verwendung von Medienabfragen für responsive Typografie

In diesem Beispiel möchten wir unsere Überschrift der Ebene 1 auf `4rem` setzen, was bedeutet, dass sie viermal so groß wie unsere Basis-Schriftgröße ist. Das ist eine wirklich große Überschrift! Wir möchten diese riesige Überschrift nur auf größeren Bildschirmgrößen, daher erstellen wir zuerst eine kleinere Überschrift und verwenden Medienabfragen, um sie mit der größeren Größe zu überschreiben, wenn wir wissen, dass der Benutzer eine Bildschirmgröße von mindestens `1200px` hat.

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

Wir haben unser responsives Gitter-Beispiel oben bearbeitet, um auch responsive Schrift mit der erläuterten Methode einzuschließen. Sie können sehen, wie sich die Überschriftengröße ändert, während das Layout zu der zweispaltigen Version wechselt.

Auf dem Handy ist die Überschrift kleiner:

![Ein gestapeltes Layout mit einer kleinen Überschrift.](mdn-rwd-font-mobile.png)

Auf dem Desktop hingegen sehen wir die größere Überschrift:

![Ein zweispaltiges Layout mit einer großen Überschrift.](mdn-rwd-font-desktop.png)

> [!NOTE]
> Sehen Sie sich dieses Beispiel in Aktion an: [Beispiel](https://mdn.github.io/css-examples/learn/rwd/type-rwd.html), [Quellcode](https://github.com/mdn/css-examples/blob/main/learn/rwd/type-rwd.html).

Wie dieser Ansatz zur Typografie zeigt, müssen Sie Medienabfragen nicht nur auf die Änderung des Layouts der Seite beschränken. Sie können verwendet werden, um jedes Element zu optimieren, um es bei alternativen Bildschirmgrößen benutzerfreundlicher oder attraktiver zu machen.

### Verwendung von Ansichtsfenstereinheiten für responsive Typografie

Ansichtsfenstereinheiten `vw` können auch verwendet werden, um responsive Typografie zu ermöglichen, ohne die Notwendigkeit, Breakpoints mit Medienabfragen festzulegen. `1vw` entspricht einem Prozent der Ansichtsfensterbreite, was bedeutet, dass, wenn Sie Ihre Schriftgröße mit `vw` festlegen, sie immer in Bezug zur Größe des Ansichtsfensters steht.

```css
h1 {
  font-size: 6vw;
}
```

Das Problem beim oben Angezeigten ist, dass der Benutzer die Fähigkeit verliert, Text, der mit der Einheit `vw` gesetzt ist, zu zoomen, da dieser Text immer in Bezug zur Größe des Ansichtsfensters steht. **Daher sollten Sie niemals Text ausschließlich mit Ansichtsfenstereinheiten setzen.**

Es gibt eine Lösung, und sie beinhaltet die Verwendung von [`calc()`](/de/docs/Web/CSS/calc). Wenn Sie die Einheit `vw` zu einem Wert hinzufügen, der mit einer festen Größe wie `em`s oder `rem`s festgelegt ist, dann bleibt der Text weiterhin zoombar. Grundsätzlich ergänzt die `vw`-Einheit diesen vergrößerten Wert:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Das bedeutet, dass wir die Schriftgröße für die Überschrift nur einmal angeben müssen, anstatt sie für Mobilgeräte einzurichten und in den Medienabfragen neu zu definieren. Die Schrift vergrößert sich dann allmählich mit zunehmender Größe des Ansichtsfensters.

> [!NOTE]
> Sehen Sie dieses Beispiel in Aktion: [Beispiel](https://mdn.github.io/css-examples/learn/rwd/type-vw.html), [Quellcode](https://github.com/mdn/css-examples/blob/main/learn/rwd/type-vw.html).

## Der Meta-Tag für das Ansichtsfenster

Wenn Sie den HTML-Quelltext einer responsiven Seite betrachten, werden Sie im `<head>` des Dokuments normalerweise den folgenden {{htmlelement("meta")}}-Tag sehen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dieses [Ansichtsfenster](/de/docs/Web/HTML/Viewport_meta_tag)-Meta-Tag teilt mobilen Browsern mit, dass sie die Breite des Ansichtsfensters auf die Gerätebreite einstellen und das Dokument auf 100 % seiner vorgesehenen Größe skalieren sollen, was das Dokument in der von Ihnen beabsichtigten mobiloptimierten Größe anzeigt.

Warum ist das notwendig? Weil mobile Browser dazu neigen, über ihre Ansichtsfensterbreite zu lügen.

Dieses Meta-Tag existiert, weil, als Smartphones erstmals aufkamen, die meisten Websites nicht für mobile Geräte optimiert waren. Der mobile Browser stellte daher das Ansichtsfenster auf 980 Pixel Breite ein, rendert die Seite in dieser Breite und zeigt das Ergebnis als verkleinerte Version des Desktop-Layouts an. Benutzer konnten in die Website hineinzoomen und sie verschieben, um die Teile zu sehen, die sie interessierten, aber es sah schlecht aus.

Indem `width=device-width` gesetzt wird, überschreiben Sie die Standardeinstellung eines mobilen Geräts, wie beispielsweise Apples Standard `width=980px`, mit der tatsächlichen Breite des Geräts. Ohne das könnte Ihr responsives Design mit Breakpoints und Medienabfragen möglicherweise nicht wie beabsichtigt in mobilen Browsern funktionieren. Wenn Sie ein schmales Bildschirm-Layout haben, das bei einer Ansichtsfensterbreite von 480px oder weniger aktiviert wird, aber das Gerät behauptet, 980px breit zu sein, wird dieser Benutzer Ihr schmales Bildschirm-Layout nicht sehen.

**Daher sollten Sie _immer_ das Ansichtsfenster-Meta-Tag im Head Ihrer Dokumente einfügen.**

## Zusammenfassung

Responsive Design bezieht sich auf ein Website- oder Anwendungsdesign, das auf die Umgebung reagiert, in der es betrachtet wird. Es umfasst eine Reihe von CSS- und HTML-Funktionen und -Techniken und ist heute im Wesentlichen die Standardmethode, Websites zu erstellen. Betrachten Sie die Websites, die Sie auf Ihrem Telefon besuchen - es ist wahrscheinlich ziemlich ungewöhnlich, auf eine Seite zu stoßen, die die Desktopversion verkleinert darstellt oder bei der Sie horizontal scrollen müssen, um Dinge zu finden. Dies liegt daran, dass das Web zu diesem Ansatz des responsiven Designs übergegangen ist.

Es ist auch viel einfacher geworden, responsive Designs zu erreichen, dank der Layout-Methoden, die Sie in diesen Lektionen gelernt haben. Wenn Sie heute neu in der Webentwicklung sind, stehen Ihnen viele mehr Werkzeuge zur Verfügung als in den frühen Tagen des Responsive Designs. Es lohnt sich daher, das Alter der Materialien, die Sie verwenden, zu überprüfen. Während die historischen Artikel weiterhin nützlich sind, macht die moderne Nutzung von CSS und HTML es weit einfacher, elegante und nützliche Designs zu erstellen, egal mit welchem Gerät Ihr Besucher die Seite betrachtet.

## Siehe auch

- Arbeiten mit Touchscreen-Geräten:
  - [Touchevents](/de/docs/Web/API/Touch_events) bieten die Möglichkeit, Finger- (oder Stift-) Aktivitäten auf Touchscreens oder Trackpads zu interpretieren, was eine qualitativ hochwertige Unterstützung für komplexe touchbasierte Benutzeroberflächen ermöglicht.
  - Verwenden Sie die [pointer](/de/docs/Web/CSS/@media/pointer) oder [any-pointer](/de/docs/Web/CSS/@media/any-pointer) Medienabfragen, um unterschiedliche CSS auf touchfähigen Geräten zu laden.
- [CSS-Tricks Leitfaden zu Medienabfragen](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}
