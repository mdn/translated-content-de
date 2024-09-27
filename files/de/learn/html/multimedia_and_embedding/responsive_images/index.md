---
title: Responsive images
slug: Learn/HTML/Multimedia_and_embedding/Responsive_images
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}

In diesem Artikel lernen Sie das Konzept responsiver Bilder kennen — Bilder, die auf Geräten mit stark unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren — und sehen, welche Werkzeuge HTML bereitstellt, um diese umzusetzen. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern. Responsive Bilder sind nur ein Teil des [Responsive Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), ein zukünftiges Thema im Bereich CSS, das Sie lernen werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits die
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Grundlagen von HTML</a>
        kennen und wissen, wie man
        <a href="/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >statische Bilder zu einer Webseite hinzufügt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie Funktionen wie
        <a href="/de/docs/Web/HTML/Element/img#srcset"><code>srcset</code></a> und das
        {{htmlelement("picture")}}-Element verwenden, um responsive
        Bildlösungen auf Websites zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Warum responsive Bilder?

Untersuchen wir ein typisches Szenario. Eine typische Website kann ein Header-Bild und einige Inhaltsbilder unter dem Header enthalten. Das Header-Bild wird wahrscheinlich die gesamte Breite des Headers einnehmen, und das Inhaltsbild wird irgendwo in die Inhalts-Spalte passen. Hier ist ein einfaches Beispiel:

![Unsere Beispielseite auf einem Breitbildschirm betrachtet - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie zum Beispiel einem Laptop oder Desktop (Sie können [das Beispiel live ansehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) finden.) Wir werden das CSS in dieser Lektion nicht viel diskutieren, außer zu sagen, dass:

- Der Body-Inhalt auf eine maximale Breite von 1200 Pixeln festgelegt wurde — in Viewports über dieser Breite bleibt der Body bei 1200px und zentriert sich im verfügbaren Raum. In Viewports unter dieser Breite bleibt der Body bei 100% der Breite des Viewports.
- Das Header-Bild wurde so festgelegt, dass sein Zentrum immer in der Mitte des Headers bleibt, egal welche Breite der Header hat. Wenn die Seite auf einem schmaleren Bildschirm angesehen wird, können die wichtigen Details in der Mitte des Bildes (die Personen) immer noch gesehen werden, und das Überschüssige geht an beiden Seiten verloren. Es ist 200px hoch.
- Die Inhaltsbilder wurden so festgelegt, dass, wenn das Body-Element kleiner als das Bild wird, die Bilder anfangen zu schrumpfen, sodass sie immer im Body bleiben, anstatt überzulaufen.

Es treten jedoch Probleme auf, wenn Sie die Seite auf einem Gerät mit schmalem Bildschirm betrachten. Der Header unten sieht in Ordnung aus, aber er beginnt, einen Großteil der Bildschirmhöhe eines Mobilgeräts einzunehmen. Und bei dieser Größe ist es schwierig, die Gesichter der zwei Personen auf dem ersten Inhaltsbild zu sehen.

![Unsere Beispielseite auf einem schmalen Bildschirm betrachtet; das erste Bild ist so weit geschrumpft, dass es schwer ist, die Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre es, eine zugeschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes zeigt, wenn die Seite auf einem schmalen Bildschirm angezeigt wird. Ein zweites beschnittenes Bild könnte für ein Gerät mit mittlerer Bildschirmbreite, wie ein Tablet, angezeigt werden. Das allgemeine Problem, bei dem Sie unterschiedliche beschnittene Bilder auf diese Weise für verschiedene Layouts bereitstellen möchten, ist allgemein als das **Artdirection-Problem** bekannt.

Außerdem ist es nicht notwendig, solch große Bilder auf der Seite einzubetten, wenn sie auf einem mobilen Bildschirm betrachtet wird. Dies kann Bandbreite verschwenden; insbesondere möchten mobile Nutzer keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Nutzer gedacht ist, wenn ein kleines Bild für ihr Gerät ausreicht. Im Gegensatz dazu sieht ein kleines [Rasterbild](/de/docs/Glossary/Raster_image) körnig aus, wenn es größer als seine ursprüngliche Größe angezeigt wird (ein Rasterbild hat eine feste Anzahl von Pixeln in der Breite und der Höhe, wie wir gesehen haben, als wir [Vektorgrafiken](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) betrachtet haben). Idealerweise sollten mehrere Auflösungen für den Webbrowser des Nutzers verfügbar gemacht werden. Der Browser könnte dann die optimale Auflösung basierend auf der Bildschirmgröße des Geräts des Nutzers laden. Dies wird als das **Auflösungswechselproblem** bezeichnet.

Um das Ganze noch komplizierter zu machen, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als Sie erwarten würden, um gut auszusehen. Dies ist im Wesentlichen dasselbe Problem, jedoch in einem etwas anderen Kontext.

Sie könnten denken, dass Vektorbilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad – sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie überall dort verwenden, wo es möglich ist. Sie sind jedoch nicht für alle Bildtypen geeignet. Vektorbilder sind großartig für einfache Grafiken, Muster, Interface-Elemente usw., aber es wird sehr komplex, ein vektor-basiertes Bild mit der Art von Details zu erstellen, die Sie beispielsweise in einem Foto finden würden. Rasterbildformate wie JPEGs eignen sich besser für die Art von Bildern, die wir im obigen Beispiel sehen.

Diese Art von Problemen existierte nicht, als das Web erstmals in den frühen bis mittleren 90er Jahren existierte – damals waren die einzigen existierenden Geräte, um das Web zu durchsuchen, Desktops und Laptops, sodass Browser-Ingenieure und Spezifikationsautoren nicht einmal darüber nachdachten, Lösungen zu implementieren. _Responsive Bildtechnologien_ wurden kürzlich implementiert, um die oben angegebenen Probleme zu lösen, indem Sie dem Browser mehrere Bilddateien anbieten lassen, die entweder alle dasselbe zeigen, jedoch eine unterschiedliche Anzahl von Pixeln enthalten (_Auflösungswechsel_), oder unterschiedliche Bilder, die für unterschiedliche Platzierungen geeignet sind (_Artdirection_).

> [!NOTE]
> Die neuen in diesem Artikel diskutierten Funktionen — [`srcset`](/de/docs/Web/HTML/Element/img#srcset)/[`sizes`](/de/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} — werden in modernen Desktop- und Mobilbrowsern unterstützt.

## Wie erstelle ich responsive Bilder?

In diesem Abschnitt werden wir uns die oben illustrierten zwei Probleme ansehen und zeigen, wie man sie mit den responsiven Bildfunktionen von HTML löst. Beachten Sie, dass wir uns auf {{htmlelement("img")}}-Elemente konzentrieren werden, die in diesem Abschnitt im Inhaltsbereich des obigen Beispiels gesehen wurden — das Bild im Seitenkopf ist nur zur Dekoration und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat wohl bessere Werkzeuge für Responsive Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden in einem zukünftigen CSS-Modul darüber sprechen.

### Auflösungswechsel: Unterschiedliche Größen

Welches Problem wollen wir mit dem Auflösungswechsel lösen? Wir möchten identische Bildinhalte anzeigen, nur größer oder kleiner, je nach Gerät — dies ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das standardmäßige {{htmlelement("img")}}-Element lässt Sie traditionell den Browser nur auf eine einzige Quelldatei verweisen:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden — [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) — um mehrere zusätzliche Quellbilder zusammen mit Hinweisen bereitzustellen, die dem Browser helfen, das richtige auszuwählen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html)-Beispiel auf GitHub (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)) sehen:

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die `srcset`- und `sizes`-Attribute sehen kompliziert aus, aber sie sind nicht so schwer zu verstehen, wenn Sie sie wie oben gezeigt formatieren, mit einem anderen Teil des Attributwerts in jeder Zeile. Jeder Wert enthält eine durch Kommas getrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Lassen Sie uns jetzt durch den Inhalt jeder einzelnen gehen:

**`srcset`** definiert die Bildmenge, die wir dem Browser zur Auswahl geben, und welche Größe jedes Bild hat. Jede Reihe von Bildinformationen wird durch ein Komma von der vorherigen getrennt. Für jede Zeile schreiben wir:

1. Einen **Bilddateinamen** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite des Bildes in Pixeln** (`480w`) — beachten Sie, dass dies die `w`-Einheit verwendet, nicht `px`, wie Sie vielleicht erwarten. Ein Bild's [intrinsische Größe](/de/docs/Glossary/Intrinsic_Size) ist seine reale Größe, die Sie finden können, indem Sie die Bilddatei auf Ihrem Computer inspizieren (zum Beispiel können Sie auf einem Mac das Bild im Finder auswählen und

   <kbd>Cmd</kbd>

   \+

   <kbd>I</kbd>

   drücken, um den Info-Bildschirm aufzurufen).

**`sizes`** definiert eine Menge von Medienbedingungen (z.B. Bildschirmbreiten) und zeigt an, welche Bildgröße am besten geeignet wäre, wenn bestimmte Medienbedingungen zutreffen — dies sind die zuvor erwähnten Hinweise. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(max-width:600px)`) — Sie werden mehr über diese im [CSS-Thema](/de/docs/Learn/CSS) erfahren, aber vorerst sagen wir einfach, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem der Bildschirm sein kann. In diesem Fall sagen wir "wenn die Viewport-Breite 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild füllen wird, wenn die Medienbedingung wahr ist (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Beispielsweise können Sie anstelle einer absoluten Breite (zum Beispiel `480px`) alternativ eine Breite relativ zum Viewport angeben (zum Beispiel `50vw`). Sie können jedoch keine Prozentangabe als Slot-Breite verwenden. Möglicherweise haben Sie bemerkt, dass die letzte Slot-Breite keine Medienbedingung hat (dies ist der Standard, der gewählt wird, wenn keine der Medienbedingungen wahr ist). Der Browser ignoriert alles nach der ersten übereinstimmenden Bedingung, also seien Sie vorsichtig, wie Sie die Medienbedingungen anordnen.

Mit diesen Attributen wählt der Browser:

1. Betrachtet die Bildschirmgröße, Pixeldichte, Zoomlevel, Bildschirmorientierung und die Netzwerkkapazität.
2. Ermittelt, welches die erste zutreffende Medienbedingung in der `sizes`-Liste ist.
3. Betrachtet die Slot-Größe, die dieser Medienabfrage zugeordnet ist.
4. Lädt das im `srcset`-Attribut referenzierte Bild, das dieselbe Größe wie der Slot hat oder, falls nicht vorhanden, das erste Bild, das größer als die gewählte Slot-Größe ist.

Und das war's! Zu diesem Zeitpunkt wird, wenn ein unterstützter Browser mit einer Viewport-Breite von 480px die Seite lädt, die `(max-width: 600px)`-Medienbedingung wahr sein, und der Browser wählt den `480px`-Slot. Die `elva-fairy-480w.jpg` wird geladen, da ihre inhärente Breite (`480w`) am nächsten zur Slot-Größe liegt. Das 800px-Bild ist 128KB auf der Festplatte, während die 480px-Version nur 63KB ist — eine Ersparnis von 65KB. Stellen Sie sich nun vor, wenn dies eine Seite wäre, die viele Bilder enthält. Mit dieser Technik könnten mobile Nutzer eine Menge Bandbreite sparen.

> [!NOTE]
> Wenn Sie dies mit einem Desktop-Browser testen und der Browser nicht die schmaleren Bilder lädt, wenn Sie das Fenster auf die schmalste Breite eingestellt haben, werfen Sie einen Blick darauf, wie der Viewport ist (Sie können es näherungsweise herausfinden, indem Sie in die JavaScript-Konsole des Browsers gehen und `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben minimale Größen, auf die Sie die Fensterbreite reduzieren können, und diese könnten breiter sein, als Sie denken. Wenn Sie es mit einem mobilen Browser testen, können Sie Tools wie die `about:debugging`-Seite von Firefox verwenden, um die auf dem Mobilgerät geladene Seite mit den Desktop-Entwicklertools zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie den [Netzwerkmonitor in den Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder das [Netzwerk-Panel der Chrome DevTools](https://developer.chrome.com/docs/devtools/network/) verwenden. Für Chrome möchten Sie möglicherweise auch den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass der Browser bereits heruntergeladene Bilder auswählt.

Ältere Browser, die diese Funktionen nicht unterstützen, ignorieren sie einfach. Stattdessen laden diese Browser das Bild, das im [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut referenziert wird, wie gewohnt.

> [!NOTE]
> Im {{htmlelement("head")}} des oben verlinkten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: Dies zwingt mobile Browser, die tatsächliche Viewport-Breite zum Laden von Webseiten zu nutzen (einige mobile Browser lügen über ihre Viewport-Breite und laden Seiten stattdessen mit einer größeren Viewport-Breite und verkleinern dann die geladene Seite, was nicht sehr hilfreich für responsive Bilder oder Design ist).

### Auflösungswechsel: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das auf Anzeigen mit unterschiedlichen Bildschirmauflösungen in derselben realen Größe dargestellt wird. Sie können ein besseres Benutzererlebnis auf hochauflösenden Bildschirmen bieten, indem Sie eine höher auflösende Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie den Browser eine passende Auflösung auswählen lassen, indem Sie `srcset` mit x-Descriptors und ohne `sizes` verwenden — eine etwas einfachere Syntax! Sie können ein Beispiel dafür sehen in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass, obwohl das Bild immer mit derselben Größe angezeigt wird, Sie auf Bildschirmen mit höherer Auflösung mehr Details sehen können.

![Ein Bild eines kleinen Mädchens, das als Fee verkleidet ist, mit einem alten Kamera-Filmeffekt, der auf das Bild angewendet wurde](resolution-example.png)

In diesem Beispiel wird auf das Bild folgendes CSS angewendet, damit es eine Breite von 320 Pixeln auf dem Bildschirm hat (auch als CSS-Pixel bezeichnet):

```css
img {
  width: 320px;
}
```

In diesem Fall ist `sizes` nicht erforderlich — der Browser ermittelt, was die Auflösung des Bildschirms ist, auf dem er angezeigt wird, und liefert das am besten geeignete Bild, das im `srcset` referenziert ist. Wenn das Gerät, das die Seite aufruft, ein Standard-/Niedrigauflösungsdisplay hat, wobei ein Gerätepixel jedem CSS-Pixel entspricht, wird das `elva-fairy-320w.jpg`-Bild geladen (die 1x ist impliziert, sodass Sie sie nicht angeben müssen). Wenn das Gerät eine hohe Auflösung von zwei Gerätepixeln pro CSS-Pixel oder mehr hat, wird das `elva-fairy-640w.jpg`-Bild geladen. Das 640px-Bild ist 93KB, während das 320px-Bild nur 39KB ist.

### Artdirection

Um zusammenzufassen: das **Artdirection-Problem** besteht darin, das angezeigte Bild an unterschiedliche Bildgrößen anzupassen. Beispielsweise enthält eine Webseite ein großes Landschaftsbild mit einer Person in der Mitte, wenn sie in einem Desktop-Browser angesehen wird. Auf einem mobilen Browser wird dasselbe Bild verkleinert, wodurch die Person im Bild sehr klein und schwer zu erkennen ist. Es wäre wahrscheinlich besser, ein kleineres Portrait-Bild auf Mobilgeräten zu zeigen, das näher an die Person heranzoomen kann. Das {{htmlelement("picture")}}-Element ermöglicht uns, genau diese Art von Lösung zu implementieren.

Zurück zu unserem ursprünglichen Beispiel [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html), haben wir ein Bild, das dringend Artdirection benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns dies mit {{htmlelement("picture")}} beheben! Wie [`<video>` und `<audio>`](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die dem Browser verschiedene Quellen zur Auswahl geben, gefolgt vom unverzichtbaren {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht so aus:

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält — wie im ersten `srcset`-Beispiel sind diese Bedingungen Tests, die entscheiden, welches Bild angezeigt wird — das erste, das wahr ist, wird angezeigt. In diesem Fall wird, wenn die Bildschirmbreite 799px oder weniger beträgt, das Bild des ersten `<source>`-Elements angezeigt. Wenn die Bildschirmbreite 800px oder mehr beträgt, wird das zweite angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zu dem anzuzeigenden Bild. Genau wie wir es oberhalb bei `<img>` gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut haben. Also könnten Sie mehrere Bilder über ein `<picture>`-Element anbieten, aber auch mehrere Auflösungen von jedem. Realistisch gesehen, werden Sie diese Art von Ding wahrscheinlich nicht sehr oft tun wollen.
- In allen Fällen müssen Sie ein `<img>`-Element mit `src` und `alt` unmittelbar vor `</picture>` bereitstellen, andernfalls werden keine Bilder angezeigt. Dies bietet einen Standardfall, der angewendet wird, wenn keine der Medienbedingungen zutrifft (Sie könnten das zweite `<source>`-Element in diesem Beispiel tatsächlich entfernen) und einen Fallback für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es, auf sowohl Breitbild- als auch Schmalbild-Displays ein geeignetes Bild anzuzeigen, wie unten gezeigt:

![Unsere Beispielseite auf einem Breitbildschirm betrachtet - hier funktioniert das erste Bild gut, als es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielseite auf einem schmalen Bildschirm betrachtet mit dem Bildelement zur Umschaltung des ersten Bildes auf ein Porträt-Nahaufnahme der Details, das es auf einem schmalen Bildschirm viel nützlicher macht](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Artdirection-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen innerhalb des `sizes`-Attributs an.

### Warum können wir dies nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser beginnt eine Seite zu laden, beginnt er, alle Bilder zu laden (Preload), bevor der Hauptparser mit dem Laden und Interpretieren des CSS und JavaScript der Seite begonnen hat. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten der Seite zu reduzieren, aber er ist nicht hilfreich für responsive Bilder — daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Beispielsweise könnten Sie nicht das {{htmlelement("img")}}-Element laden, dann die Bildschirmbreite mit JavaScript feststellen und dann das Quellbild auf ein kleineres ändern, wenn gewünscht. Zu diesem Zeitpunkt wäre das ursprüngliche Bild bereits geladen worden und Sie würden das kleine Bild ebenfalls laden, was in Bezug auf responsive Bilder noch schlimmer ist.

## Aktives Lernen: Ihre eigenen responsiven Bilder implementieren

Für dieses aktive Lernen erwarten wir, dass Sie mutig sind und es größtenteils alleine machen. Wir möchten, dass Sie Ihr eigenes geeignetes Artdirection-Beispiel für schmale/schmale Bildschirme mit `<picture>` implementieren und ein Auflösungswechsel-Beispiel, das `srcset` verwendet.

1. Schreiben Sie einige einfache HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes Breitbild-Landschaftsbild mit irgendeiner Art von Detail. Erstellen Sie eine Version davon in Web-Größe mit einem Grafikeditor, dann schneiden Sie es zu, um einen kleineren Teil zu zeigen, der in das Detail hineinzoomt, und erstellen Sie ein zweites Bild (ungefähr 480px Breite ist dafür gut).
3. Verwenden Sie das `<picture>`-Element, um einen Bildwechsler für Artdirection zu implementieren!
4. Erstellen Sie mehrere Bilddateien in verschiedenen Größen, die dasselbe Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Beispiel für einen Auflösungswechsler zu erstellen, entweder um gleich große Bilder in unterschiedlichen Auflösungen zu liefern, je nach Geräteauflösung, oder um unterschiedliche Bildgrößen je nach Bildschirmbreiten bereitzustellen.

## Zusammenfassung

Das war eine Übersicht über responsive Bilder — wir hoffen, Sie hatten Spaß beim Spielen mit diesen neuen Techniken. Zusammenfassend gibt es zwei unterschiedliche Probleme, über die wir hier gesprochen haben:

- **Artdirection**: Das Problem, bei dem Sie für unterschiedliche Layouts zugeschnittene Bilder bereitstellen möchten — zum Beispiel ein Landschaftsbild, das eine komplette Szene für ein Desktop-Layout zeigt, und ein Portraitbild, das das Hauptmotiv vergrößert auf einem mobilen Layout. Sie können dieses Problem mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungswechsel**: Das Problem, bei dem Sie kleinere Bilddateien für schmalere Bildschirmgeräte bereitstellen möchten, da diese keine riesigen Bilder wie Desktop-Displays benötigen und unterschiedliche Auflösungsbilder für hochdichte/niedrigdichte Bildschirme bereitstellen möchten. Sie können dieses Problem mit [Vektorgrafiken](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) (SVG-Bilder) und den Attributen [`srcset`](/de/docs/Web/HTML/Element/img#srcset) mit [`sizes`](/de/docs/Web/HTML/Element/img#sizes) lösen.

Dies beendet auch das gesamte Modul zu [Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding)! Das Einzige, was jetzt noch zu tun ist, bevor Sie weitermachen, ist unsere [Multimedia und Einbettung Bewertung](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page) auszuprobieren, und sehen, wie Sie zurechtkommen. Viel Spaß!

## Siehe auch

- [Jason Grigsbys hervorragende Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: Wenn Sie nur die Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — enthält weitere Erklärungen, wie der Browser entscheidet, welches Bild verwendet wird
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}
