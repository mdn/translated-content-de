---
title: Responsive Images
slug: Learn/HTML/Multimedia_and_embedding/Responsive_images
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}

In diesem Artikel werden wir das Konzept von responsiven Bildern kennenlernen – Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren – und uns ansehen, welche Werkzeuge HTML bietet, um sie zu implementieren. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern. Responsive Bilder sind nur ein Teil des [responsiven Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), einem zukünftigen CSS-Thema, das Sie lernen werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits die
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Grundlagen von HTML</a>
        kennen und wissen, wie man
        <a href="/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">statische Bilder zu einer Webseite hinzufügt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Sie Funktionen wie
         <a href="/de/docs/Web/HTML/Element/img#srcset"><code>srcset</code></a> und das
        {{htmlelement("picture")}}-Element verwenden, um responsive Bildlösungen auf Websites zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Warum responsive Bilder?

Betrachten wir ein typisches Szenario. Eine typische Website könnte ein Headerbild und einige Inhaltsbilder unter dem Header enthalten. Das Headerbild erstreckt sich wahrscheinlich über die gesamte Breite des Headers, und das Inhaltsbild passt irgendwo in die Inhaltskolonne. Hier ist ein einfaches Beispiel:

![Unser Beispielseite, wie sie auf einem Breitbildschirm aussieht - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät wie einem Laptop oder Desktop (Sie können [das Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden). Wir werden das CSS in dieser Lektion nicht viel diskutieren, außer dass:

- Der Inhaltsbereich des Bodys auf eine maximale Breite von 1200 Pixeln eingestellt wurde – in Viewports über dieser Breite bleibt der Body bei 1200px und zentriert sich im verfügbaren Raum. In Viewports unter dieser Breite bleibt der Body bei 100% der Breite des Viewports.
- Das Headerbild so eingestellt wurde, dass sein Zentrum immer im Zentrum des Headers bleibt, egal welche Breite der Header hat. Wenn die Seite auf einem schmaleren Bildschirm betrachtet wird, können die wichtigen Details in der Mitte des Bildes (die Personen) immer noch gesehen werden, und das Überflüssige geht auf beiden Seiten verloren. Es ist 200px hoch.
- Die Inhaltsbilder wurden so eingestellt, dass sie sich verkleinern, wenn das Body-Element kleiner als das Bild wird, damit sie immer innerhalb des Bodys bleiben, anstatt es zu überlaufen.

Es treten jedoch Probleme auf, wenn Sie beginnen, die Seite auf einem Gerät mit kleinem Bildschirm zu betrachten. Das unten stehende Header-Bild sieht in Ordnung aus, aber es nimmt zunehmend viel der Bildschirmhöhe für ein mobiles Gerät ein. Und in dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm aussieht; das erste Bild ist so geschrumpft, dass es schwer ist, die Details zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre es, eine zugeschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes zeigt, wenn die Seite auf einem schmalen Bildschirm angezeigt wird. Ein zweites zugeschnittenes Bild könnte für ein Gerät mit mittlerer Bildschirmbreite, wie ein Tablet, angezeigt werden. Das allgemeine Problem, bei dem Sie different zugeschnittene Bilder auf diese Weise für verschiedene Layouts verwenden möchten, wird allgemein als **Art-Direction-Problem** bezeichnet.

Außerdem gibt es keinen Grund, solch große Bilder auf die Seite zu laden, wenn sie auf einem mobilen Bildschirm betrachtet wird. Dies kann Bandbreite verschwenden; insbesondere möchten mobile Benutzer keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Benutzer vorgesehen ist, wenn ein kleines Bild für ihr Gerät ausreichen würde. Auf der anderen Seite sieht ein kleines {{Glossary("Raster_image", "Rasterbild")}} körnig aus, wenn es größer als seine Originalgröße angezeigt wird (ein Rasterbild hat eine festgelegte Anzahl von Pixeln in der Breite und eine festgelegte Anzahl von Pixeln in der Höhe, wie wir gesehen haben, als wir uns [Vektorgrafiken](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) angeschaut haben). Idealerweise würden dem Webbrowser des Benutzers mehrere Auflösungen zur Verfügung stehen. Der Browser könnte dann die optimale Auflösung laden, basierend auf der Bildschirmgröße des Geräts des Benutzers. Dies wird als **Auflösungsumschaltproblem** bezeichnet.

Um die Sache noch komplizierter zu machen, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als man vielleicht erwartet, um schön angezeigt zu werden. Dies ist im Wesentlichen dasselbe Problem, jedoch in einem etwas anderen Kontext.

Sie könnten denken, dass Vektorbilder diese Probleme lösen würden, und sie tun es bis zu einem gewissen Grad – sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie verwenden, wo immer möglich. Sie sind jedoch nicht für alle Bildtypen geeignet. Vektorbilder sind ideal für einfache Grafiken, Muster, Schnittstellenelemente etc., aber es wird sehr komplex, ein vektorbasiertes Bild mit dem Detailgrad zu erstellen, den man beispielsweise in einem Foto finden würde. Rasterbildformate wie JPEGs eignen sich besser für die Art von Bildern, die wir im obigen Beispiel sehen.

Diese Art von Problem existierte nicht, als das Web zum ersten Mal existierte, Anfang bis Mitte der 90er Jahre – damals waren die einzigen Geräte, die das Web durchstöbern konnten, Desktops und Laptops, daher dachten Browser-Ingenieure und Spezifikationsautoren nicht einmal daran, Lösungen zu implementieren. _Responsive-Bildtechnologien_ wurden kürzlich implementiert, um die oben genannten Probleme zu lösen, indem sie Ihnen ermöglichen, dem Browser mehrere Bilddateien anzubieten, entweder alle dasselbe darstellend, jedoch mit unterschiedlichen Pixelanzahlen (_Auflösungsumschaltung_), oder verschiedene Bilder, die für verschiedene Platzzuweisungen geeignet sind (_Art-Direction_).

> [!NOTE]
> Die in diesem Artikel besprochenen neuen Funktionen — [`srcset`](/de/docs/Web/HTML/Element/img#srcset)/[`sizes`](/de/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} — werden alle in modernen Desktop- und Mobil-Browsern unterstützt.

## Wie erstellt man responsive Bilder?

In diesem Abschnitt werden wir uns die beiden oben dargestellten Probleme ansehen und zeigen, wie man sie mit den responsiven Bildfunktionen von HTML löst. Sie sollten beachten, dass wir uns auf {{htmlelement("img")}}-Elemente für diesen Abschnitt konzentrieren werden, wie im Inhaltsbereich des obigen Beispiels zu sehen ist – das Bild im Site-Header dient nur der Dekoration und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat arguably bessere Werkzeuge für Responsive Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden diese in einem zukünftigen CSS-Modul besprechen.

### Auflösungsumschaltung: Verschiedene Größen

Was ist also das Problem, das wir mit der Auflösungsumschaltung lösen wollen? Wir möchten identische Bildinhalte anzeigen, die je nach Gerät größer oder kleiner sind — dies ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das Standard-{{htmlelement("img")}}-Element lässt Sie traditionell nur auf eine einzige Quelldatei verweisen:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute — [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) — verwenden, um dem Browser mehrere zusätzliche Quellenbilder zusammen mit Hinweisen anzubieten, die ihm helfen, das richtige auszusuchen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html)-Beispiel auf GitHub sehen (sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html) an):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die `srcset`- und `sizes`-Attribute sehen kompliziert aus, aber sie sind nicht zu schwer zu verstehen, wenn Sie sie formatieren, wie oben gezeigt, mit einem anderen Teil des Attributwerts in jeder Zeile. Jeder Wert enthält eine durch Kommas getrennte Liste, und jeder Teil dieser Liste besteht aus drei Unterteilen. Lassen Sie uns nun den Inhalt jedes dieser Teile durchgehen:

**`srcset`** definiert die Menge von Bildern, zwischen denen wir dem Browser erlauben, auszuwählen, und die Größe jedes Bildes. Jedes Set von Bildinformationen wird durch ein Komma vom vorherigen getrennt. Für jedes setzen wir:

1. Ein **Bilddateiname** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite** des Bildes in Pixeln (`480w`) — beachten Sie, dass dies die `w`-Einheit verwendet und nicht `px`, wie Sie vielleicht erwarten würden. Die {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eines Bildes ist seine tatsächliche Größe, die sich feststellen lässt, indem man die Bilddatei auf Ihrem Computer inspiziert (zum Beispiel können Sie auf einem Mac das Bild im Finder auswählen und <kbd>Cmd</kbd> + <kbd>I</kbd> drücken, um den Informationsbildschirm aufzurufen).

**`sizes`** definiert ein Set von Medienbedingungen (z.B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten zu wählen ist, wenn bestimmte Medienbedingungen zutreffen — dies sind die schon erwähnten Hinweise. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(max-width:600px)`) — Sie werden darüber mehr im [CSS-Thema](/de/docs/Learn/CSS) lernen, aber für den Moment sagen wir einfach, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir "wenn die Viewport-Breite 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild füllen wird, wenn die Medienbedingung wahr ist (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Beispielsweise können Sie anstelle einer absoluten Breite (zum Beispiel `480px`) alternativ eine Breite relativ zur Viewport-Breite angeben (zum Beispiel `50vw`). Sie können jedoch keinen Prozentsatz als Slot-Breite verwenden. Vielleicht haben Sie bemerkt, dass die letzte Slot-Breite keine Medienbedingung hat (dies ist die Standardgröße, die gewählt wird, wenn keine der Medienbedingungen wahr ist). Der Browser ignoriert alles nach der ersten passenden Bedingung. Seien Sie also vorsichtig bei der Anordnung der Medienbedingungen.

Mit diesen Attributen an Ort und Stelle wird der Browser:

1. Die Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmausrichtung und Netzwerkgeschwindigkeit ansehen.
2. Herausfinden, welche Medienbedingung in der `sizes`-Liste die erste ist, die wahr ist.
3. Die Slot-Größe prüfen, die dieser Medienabfrage zugewiesen ist.
4. Das Bild laden, das in der `srcset`-Liste referenziert ist und dieselbe Größe wie der Slot hat oder, wenn es keines gibt, das erste Bild laden, das größer als die gewählte Slot-Größe ist.

Und das war's! An diesem Punkt, wenn ein unterstützender Browser mit einer Viewport-Breite von 480px die Seite lädt, wird die `(max-width: 600px)`-Medienbedingung wahr sein, und so wählt der Browser den `480px`-Slot. Das `elva-fairy-480w.jpg` wird geladen, da seine inhärente Breite (`480w`) der Slot-Größe am nächsten kommt. Das 800px-Bild ist auf der Festplatte 128KB, während die 480px-Version nur 63KB ist — eine Ersparnis von 65KB. Jetzt stellen Sie sich vor, dies wäre eine Seite mit vielen Bildern darauf. Mit dieser Technik könnten mobile Benutzer viel Bandbreite sparen.

> [!NOTE]
> Beim Testen mit einem Desktop-Browser, wenn der Browser die schmaleren Bilder nicht lädt, wenn Sie sein Fenster auf die schmalste Breite eingestellt haben, schauen Sie, was der Viewport ist (Sie können ihn annäherungsweise finden, indem Sie in die JavaScript-Konsole des Browsers gehen und `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben Mindestgrößen, zu denen sie die Fensterbreite reduzieren lassen, und sie könnten breiter sein, als Sie denken. Beim Testen mit einem mobilen Browser können Sie Tools wie die `about:debugging`-Seite von Firefox verwenden, um die geladene Seite auf dem Mobilgerät mit den Entwickler-Tools des Desktops zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie die [Netzwerküberwachung](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) von Firefox DevTools oder das [Netzwerk](https://developer.chrome.com/docs/devtools/network/)-Panel von Chrome DevTools verwenden. Für Chrome möchten Sie möglicherweise auch den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder ausgewählt werden.

Ältere Browser, die diese Funktionen nicht unterstützen, ignorieren sie einfach. Stattdessen laden diese Browser das Bild, das im [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut referenziert wird, wie gewohnt.

> [!NOTE]
> Im {{htmlelement("head")}} des obigen Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: dies zwingt mobile Browser, ihre tatsächliche Viewport-Breite beim Laden von Webseiten zu übernehmen (einige mobile Browser lügen über ihre Viewport-Breite und laden stattdessen Seiten mit einer größeren Viewport-Breite, die dann geschrumpft werden – was für responsive Bilder oder Design nicht sehr hilfreich ist).

### Auflösungsumschaltung: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das in derselben realen Größe auf Displays mit unterschiedlichen Bildschirmauflösungen angezeigt wird. Sie können eine bessere Benutzererfahrung auf hochauflösenden Displays bieten, indem Sie eine hochauflösende Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie dem Browser die Wahl eines geeigneten Auflösungsbildes über `srcset` mit x-Deskriptoren und ohne `sizes`-Attribut erlauben — eine etwas einfachere Syntax! Ein Beispiel dafür, wie dies aussieht, finden Sie in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass das Bild, obwohl es immer mit der gleichen Größe angezeigt wird, auf hochauflösenden Displays mehr Details zeigt.

![Ein Bild eines kleinen Mädchens, das sich als Fee verkleidet hat, mit einem alten Kamera-Filmeffekt, der auf das Bild angewendet wurde](resolution-example.png)

In diesem Beispiel wird das folgende CSS auf das Bild angewendet, sodass es mit einer Breite von 320 Pixeln auf dem Bildschirm angezeigt wird (auch CSS-Pixel genannt):

```css
img {
  width: 320px;
}
```

In diesem Fall ist `sizes` nicht erforderlich — der Browser ermittelt die Auflösung des Displays, auf dem es angezeigt wird, und liefert das am besten geeignete Bild, das in `srcset` referenziert wird. Wenn das Gerät, das auf die Seite zugreift, ein Standard-/Niedrigauflösungsdisplay mit einem Gerätepixel pro CSS-Pixel hat, wird das `elva-fairy-320w.jpg`-Bild geladen (das 1x ist impliziert, sodass Sie es nicht einschließen müssen). Wenn das Gerät eine hohe Auflösung von zwei Gerätepixeln pro CSS-Pixel oder mehr hat, wird das `elva-fairy-640w.jpg`-Bild geladen. Das 640px-Bild ist 93KB, während das 320px-Bild nur 39KB ist.

### Art-Direction

Um das **Art-Direction-Problem** zusammenzufassen: Es geht darum, das angezeigte Bild an verschiedene Bildanzeigegrößen anzupassen. Beispielsweise beinhaltet eine Webseite bei Ansicht auf einem Desktop-Browser eine große Landschaftsaufnahme mit einer Person in der Mitte. Bei Ansicht auf einem mobilen Browser wird dasselbe Bild verkleinert, wodurch die Person im Bild sehr klein und schwer erkennbar wird. Es wäre wahrscheinlich besser, auf Mobilgeräten ein kleineres Porträtbild zu zeigen, das auf die Person heranzoomt. Das {{htmlelement("picture")}}-Element ermöglicht es uns, genau diese Art von Lösung zu implementieren.

Zurück zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html)-Beispiel: Wir haben ein Bild, das dringend Art-Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Dieses Problem mit {{htmlelement("picture")}} lösen! Wie [`<video>` und `<audio>`](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content), ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die verschiedene Quellen für den Browser bereitstellen, gefolgt von dem wichtigen {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht so aus:

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält – wie beim ersten `srcset`-Beispiel sind diese Bedingungen Tests, die entscheiden, welches Bild gezeigt wird — das erste, das wahr wird, wird angezeigt. In diesem Fall wird das Bild des ersten `<source>`-Elements angezeigt, wenn die Viewport-Breite 799px oder weniger beträgt. Wenn die Viewport-Breite 800px oder mehr beträgt, wird das zweite angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zu dem anzuzeigenden Bild. Genauso wie wir es oben mit `<img>` gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut tragen. So könnten Sie mehrere Bilder über ein `<picture>`-Element anbieten, aber dann auch mehrere Auflösungen von jedem davon anbieten. Realistischerweise werden Sie diese Art von Sache wahrscheinlich nicht sehr oft tun wollen.
- In allen Fällen müssen Sie ein `<img>`-Element, mit `src` und `alt`, direkt vor `</picture>` angeben, sonst werden keine Bilder angezeigt. Dies bietet einen Standardfall, der gilt, wenn keine der Medienbedingungen wahr wird (Sie könnten tatsächlich das zweite `<source>`-Element in diesem Beispiel entfernen), und eine Rückfallebene für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es uns, ein geeignetes Bild sowohl in Breitbild- als auch in Schmalbildanzeigen anzuzeigen, wie unten gezeigt:

![Unsere Beispielseite, wie sie auf einem Breitbildschirm aussieht - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm mit dem picture-Element aussieht, um das erste Bild zu einem Porträt, das die Details in der Nähe zeigt, zu wechseln und es auf einem schmalen Bildschirm viel nützlicher zu machen](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Art-Direction-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen innerhalb des `sizes`-Attributs an.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser beginnt, eine Seite zu laden, beginnt er auch, (vor-) beliebige Bilder herunterzuladen, bevor der Hauptparser die CSS und JavaScript der Seite geladen und interpretiert hat. Dieser Mechanismus ist generell nützlich, um Ladezeiten zu reduzieren, ist aber nicht hilfreich für responsives Bilder — daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Beispielsweise könnten Sie nicht das {{htmlelement("img")}}-Element laden, dann die Viewportbreite mit JavaScript detektieren und dann das Quellbild zu einem kleineren ändern, falls gewünscht. Zu diesem Zeitpunkt wäre das ursprüngliche Bild bereits geladen, und Sie würden außerdem das kleine Bild laden, was in Bezug auf responsives Bilder sogar noch schlimmer ist.

## Aktives Lernen: Implementierung eigener responsiver Bilder

Für dieses aktive Lernen erwarten wir, dass Sie mutig sind und es größtenteils alleine schaffen. Wir möchten, dass Sie Ihre eigene, geeignete Art-Direction-Lösung für schmale Bildschirme/Breitbildschirme mit `<picture>` implementieren sowie ein Auflösungsumschaltbeispiel mit `srcset`.

1. Schreiben Sie etwas einfachen HTML, um Ihren Code einzubetten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie wollen).
2. Finden Sie ein schönes Landschaftsbild im Breitbildformat mit irgendeiner Art von Detail darin. Erstellen Sie mit einem Grafik-Editor eine für das Web geeignete Version, dann beschneiden Sie es, um einen kleineren Ausschnitt zu erstellen, und erstellen Sie ein zweites Bild (etwa 480px Breite eignen sich dafür gut).
3. Verwenden Sie das `<picture>`-Element, um einen Art-Direction-Bilderwechsler zu implementieren!
4. Erstellen Sie mehrere Bilddateien in unterschiedlichen Größen, die dasselbe Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Auflösungsumschaltbeispiel zu kreieren, entweder um bei unterschiedlicher Geräteauflösung gleich große Bilder in unterschiedlichen Auflösungen zu liefern oder um je nach Viewport-Breite unterschiedlich große Bilder zu liefern.

## Zusammenfassung

Das ist das Ende für responsive Bilder – wir hoffen, Sie haben Spaß gehabt, diese neuen Techniken auszuprobieren. Zur Wiederholung, es gibt hier zwei verschiedene Probleme, die wir besprochen haben:

- **Art-Direction**: Das Problem, Bilderformen für verschiedene Layouts zuzuschneiden – z.B. ein Landschaftsbild, das eine vollständige Szene für ein Desktop-Layout zeigt, und ein Porträtbild, das das Hauptobjekt herangezoomt zeigt für ein Mobillayout. Sie können dieses Problem mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungsumschaltung**: Das Problem, dass Sie kleinere Bilddateien an Geräte mit schmalem Bildschirm senden möchten, da sie nicht die großen Bilder benötigen, die Desktop-Displays brauchen — und verschiedene Auflösungsbilder an hoch- und niedrigdichte Bildschirme senden möchten. Sie können dieses Problem mit [Vektorgrafiken](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) (SVG-Bilder) und den [`srcset`](/de/docs/Web/HTML/Element/img#srcset) mit [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attributen lösen.

Damit ist auch das gesamte [Multimedia und Einbetten](/de/docs/Learn/HTML/Multimedia_and_embedding) Modul abgeschlossen! Das Einzige, was Sie jetzt tun müssen, bevor Sie weitergehen, ist unser [Multimedia und Einbetten Bewertung](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page) zu versuchen, und sehen, wie Sie abschneiden. Viel Spaß!

## Siehe auch

- [Jason Grigsby's exzellente Einführung zu responsiven Bildern](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: Wenn Sie nur Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — beinhaltet mehr Erklärung darüber, wie der Browser herausfindet, welches Bild verwendet werden soll
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}
