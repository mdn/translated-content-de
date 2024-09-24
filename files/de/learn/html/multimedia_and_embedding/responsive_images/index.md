---
title: Responsive Bilder
slug: Learn/HTML/Multimedia_and_embedding/Responsive_images
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}

In diesem Artikel lernen wir das Konzept der responsive Bilder kennen — Bilder, die gut auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen solchen Merkmalen funktionieren — und sehen uns an, welche Werkzeuge HTML bereitstellt, um deren Implementierung zu erleichtern. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern. Responsive Bilder sind nur ein Teil von [Responsive Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), ein zukünftiges CSS-Thema, das Sie noch lernen werden.

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
        Bildlösungen auf Webseiten zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Warum responsive Bilder?

Betrachten wir ein typisches Szenario. Eine typische Webseite kann ein Header-Bild und einige Inhaltsbilder unterhalb des Headers enthalten. Das Header-Bild wird wahrscheinlich die gesamte Breite des Headers einnehmen, und das Inhaltsbild wird irgendwo innerhalb der Inhaltsspalte passen. Hier ist ein einfaches Beispiel:

![Unsere Beispielsite, wie sie auf einem Breitbildschirm angezeigt wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie einem Laptop oder Desktop (Sie können [das Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden.) Wir werden das CSS in dieser Lektion nicht ausführlich besprechen, außer zu sagen, dass:

- Der Körperinhalt wurde auf eine maximale Breite von 1200 Pixeln gesetzt — in Ansichten über dieser Breite bleibt der Körper bei 1200px und zentriert sich im verfügbaren Raum. In Ansichten unter dieser Breite bleibt der Körper bei 100% der Breite des Ansichtsfensters.
- Das Header-Bild wurde so eingestellt, dass sein Zentrum immer in der Mitte des Headers bleibt, egal welche Breite der Header hat. Wenn die Site auf einem schmaleren Bildschirm betrachtet wird, können die wichtigen Details in der Mitte des Bildes (die Personen) immer noch gesehen werden, und der Überschuss geht auf beiden Seiten verloren. Es ist 200px hoch.
- Die Inhaltsbilder wurden so eingestellt, dass sie sich verkleinern, wenn das Körperelement kleiner als das Bild wird, damit sie immer im Körper bleiben und nicht darüber hinausfließen.

Allerdings treten Probleme auf, wenn Sie die Site auf einem Gerät mit schmalem Bildschirm betrachten. Der darunterliegende Header sieht in Ordnung aus, aber er beginnt viel Platz auf dem Bildschirm eines mobilen Endgeräts einzunehmen. Und in dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unsere Beispielsite, wie sie auf einem schmalen Bildschirm angezeigt wird; das erste Bild ist so stark geschrumpft, dass es schwierig ist, die Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre es, eine beschnittene Version des Bildes anzuzeigen, die die wichtigen Details zeigt, wenn die Site auf einem schmalen Bildschirm betrachtet wird. Ein zweites beschnittenes Bild könnte für ein Gerät mit mittlerer Bildschirmbreite, wie ein Tablet, angezeigt werden. Das allgemeine Problem, bei dem Sie für verschiedene Layouts unterschiedliche beschnittene Bilder anbieten möchten, ist allgemein als **Art Direction Problem** bekannt.

Außerdem ist es nicht notwendig, solch große Bilder auf der Seite einzubetten, wenn sie auf einem mobilen Bildschirm betrachtet wird. Dies kann Bandbreite verschwenden; insbesondere möchten mobile Nutzer keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Nutzer gedacht ist, wenn ein kleines Bild für ihr Gerät ausreichen würde. Andererseits beginnt ein kleines [Rasterbild](/de/docs/Glossary/Raster_image) körnig auszusehen, wenn es größer als seine ursprüngliche Größe angezeigt wird (ein Rasterbild hat eine festgelegte Anzahl von Pixeln in der Breite und Höhe, wie wir es bei [Vektorgrafiken](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) gesehen haben). Idealerweise würden mehrere Auflösungen dem Webbrowser des Benutzers zur Verfügung gestellt. Der Browser könnte dann die optimale Auflösung basierend auf der Bildschirmgröße des Geräts des Benutzers laden. Dies wird als **Auflösungswechselproblem** bezeichnet.

Um es noch komplizierter zu machen, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als man vielleicht erwartet, um schön angezeigt zu werden. Dies ist im Wesentlichen dasselbe Problem, aber in einem leicht anderen Kontext.

Vielleicht denken Sie, dass Vektorbilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad — sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie verwenden, wann immer es möglich ist. Allerdings sind sie nicht für alle Bildtypen geeignet. Vektorbilder sind großartig für einfache Grafiken, Muster, Interface-Elemente, etc., aber es wird sehr komplex, ein vektorbasierendes Bild mit der Art von Details zu erstellen, die Sie beispielsweise in einem Foto finden würden. Rasterbildformate wie JPEGs eignen sich besser für die Art von Bildern, die wir im obigen Beispiel sehen.

Dieses Problem existierte nicht, als das Web zuerst existierte, in den frühen bis mittleren 90er Jahren — damals waren die einzigen existierenden Geräte, um im Web zu surfen, Desktops und Laptops, daher dachten die Browser-Ingenieure und Spezifikationsautoren nicht einmal daran, Lösungen zu implementieren. _Technologien für responsive Bilder_ wurden kürzlich implementiert, um die oben genannten Probleme zu lösen, indem sie es Ihnen ermöglichen, dem Browser mehrere Bilddateien anzubieten, entweder alle dasselbe zeigen, aber unterschiedliche Pixelanzahlen enthalten (_Auflösungswechsel_), oder verschiedene Bilder, die für unterschiedliche Platzzuweisungen geeignet sind (_Art Direction_).

> [!NOTE]
> Die neuen in diesem Artikel besprochenen Funktionen — [`srcset`](/de/docs/Web/HTML/Element/img#srcset)/[`sizes`](/de/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} — werden in modernen Desktop- und mobilen Browsern unterstützt.

## Wie erstellt man responsive Bilder?

In diesem Abschnitt behandeln wir die beiden oben illustrierten Probleme und zeigen, wie man sie mit den responsive Bildfunktionen von HTML löst. Sie sollten beachten, dass wir uns auf {{htmlelement("img")}}-Elemente in diesem Abschnitt konzentrieren, wie sie im Inhaltsbereich des obigen Beispiels zu sehen sind — das Bild im Site-Header ist nur zur Dekoration gedacht und daher mit CSS-Hintergrundbildern implementiert. [CSS hat arguably bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden über diese in einem zukünftigen CSS-Modul sprechen.

### Auflösungswechsel: Verschiedene Größen

Was ist also das Problem, das wir mit dem Auflösungswechsel lösen wollen? Wir möchten identische Bildinhalte darstellen, nur größer oder kleiner je nach Gerät — das ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das Standard-{{htmlelement("img")}}-Element lässt traditionell nur zu, dass Sie den Browser auf eine einzelne Quelldatei verweisen:

```html
<img src="elva-fairy-800w.jpg" alt="Elva verkleidet als Fee" />
```

Wir können jedoch zwei Attribute verwenden — [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) — um mehrere zusätzliche Quellbilder zusammen mit Hinweisen bereitzustellen, um dem Browser zu helfen, das richtige auszuwählen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html)-Beispiel auf GitHub sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva verkleidet als Fee" />
```

Die `srcset`- und `sizes`-Attribute sehen kompliziert aus, sind aber nicht zu schwer zu verstehen, wenn Sie sie wie oben gezeigt formatieren, wobei ein anderer Teil des Attributwerts in jeder Zeile angezeigt wird. Jeder Wert enthält eine durch Kommas getrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Lassen Sie uns nun die Inhalte jedes Teils durchgehen:

**`srcset`** definiert die Gruppe von Bildern, zwischen denen wir dem Browser die Auswahl ermöglichen, und welche Größe jedes Bild hat. Jedes Set von Bildinformationen wird durch ein Komma von dem vorhergehenden getrennt. Für jedes einzelne schreiben wir:

1. Ein **Bilddateiname** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **eigene Breite des Bildes in Pixeln** (`480w`) — beachten Sie, dass dies die `w`-Einheit verwendet, nicht `px`, wie Sie vielleicht erwarten. Die [eigene Größe](/de/docs/Glossary/Intrinsic_Size) eines Bildes ist seine tatsächliche Größe, die gefunden werden kann, indem man die Bilddatei auf Ihrem Computer überprüft (zum Beispiel, auf einem Mac können Sie das Bild im Finder auswählen und

   <kbd>Cmd</kbd>

   \+

   <kbd>I</kbd>

   drücken, um die Informationsanzeige aufzurufen).

**`sizes`** definiert eine Gruppe von Medienbedingungen (z.B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten geeignet wäre, wenn bestimmte Medienbedingungen wahr sind — dies sind die Hinweise, über die wir zuvor gesprochen haben. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(max-width:600px)`) — Sie werden mehr über diese im [CSS-Thema](/de/docs/Learn/CSS) lernen, aber vorerst sagen wir einfach, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir "wenn die Ansichtsbreite 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild füllen wird, wenn die Medienbedingung wahr ist (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Beispielsweise können Sie anstelle einer absoluten Breite (z.B. `480px`) eine Breite relativ zum Ansichtsfenster angeben (z.B. `50vw`). Sie können jedoch keinen Prozentsatz als Slotbreite verwenden. Ihnen ist vielleicht aufgefallen, dass die letzte Slotbreite keine Medienbedingung hat (dies ist der Standard, der gewählt wird, wenn keine der Medienbedingungen wahr ist). Der Browser ignoriert alles nach der ersten zutreffenden Bedingung, also achten Sie auf die Reihenfolge der Medienbedingungen.

So wird der Browser mit diesen Attributen entscheiden:

1. Betrachtung der Bildschirmgröße, der Pixeldichte, des Zoomlevels, der Bildschirmorientierung und der Netzwerkgeschwindigkeit.
2. Bestimmung der ersten wahren Medienbedingung in der `sizes`-Liste.
3. Betrachtung der für diese Medienabfrage angegebenen Slotgröße.
4. Laden des im `srcset`-Verzeichnis referenzierten Bildes, das die gleiche Größe wie der Slot hat, oder, wenn keines vorhanden ist, das erste Bild, das größer ist als die gewählte Slotgröße.

Und das war's! An diesem Punkt, wenn ein unterstützender Browser mit einer Anzeigebreite von 480px die Seite lädt, wird die Medienbedingung `(max-width: 600px)` wahr sein, und daher wählt der Browser den `480px`-Slot. Das Bild `elva-fairy-480w.jpg` wird geladen, da seine eigenen Breite (`480w`) der Slotgröße am nächsten kommt. Das 800px-Bild ist 128KB auf der Festplatte, während die 480px-Version nur 63KB ist — eine Ersparnis von 65KB. Stellen Sie sich nun vor, dies wäre eine Seite, die viele Bilder enthält. Mit dieser Technik könnten mobile Benutzer viel Bandbreite sparen.

> [!NOTE]
> Wenn Sie dies mit einem Desktop-Browser testen und der Browser die schmaleren Bilder nicht lädt, wenn Sie das Fenster auf die schmalste Breite eingestellt haben, schauen Sie sich an, was das Anzeigebreite ist (Sie können es näherungsweise herausfinden, indem Sie in die JavaScript-Konsole des Browsers gehen und `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben Mindestgrößen, auf die Sie die Fensterbreite reduzieren können, und sie könnten breiter sein, als Sie denken. Wenn Sie es mit einem mobilen Browser testen, können Sie Tools wie die Firefox-Seite `about:debugging` verwenden, um die geladene Seite auf dem Mobile mit den Desktop-Entwicklungstools zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie die [Netzwerküberwachung](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) von Firefox DevTools oder das [Netzwerk](https://developer.chrome.com/docs/devtools/network/) Panel von Chrome DevTools verwenden. Für Chrome könnten Sie auch den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder ausgewählt werden.

Ältere Browser, die diese Funktionen nicht unterstützen, ignorieren sie einfach. Stattdessen werden diese Browser das Bild laden, das im [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut referenziert wird, wie üblich.

> [!NOTE]
> Im {{htmlelement("head")}} des oben verlinkten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: dies zwingt mobile Browser dazu, ihre tatsächliche Ansichtsbreite beim Laden von Webseiten zu übernehmen (einige mobile Browser lügen über ihre Ansichtsbreite und laden Seiten mit einer größeren Ansichtsbreite, um sie dann zu verkleinern, was für responsive Bilder oder Design nicht sehr hilfreich ist).

### Auflösungswechsel: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das auf Bildschirmen mit unterschiedlicher Bildschirmauflösung in der gleichen realen Größe gerendert wird. Sie können eine bessere Benutzererfahrung auf hochauflösenden Bildschirmen bieten, indem Sie eine hochauflösende Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie den Browser eine passende Auflösung des Bildes auswählen lassen, indem Sie `srcset` mit x-Deskriptoren und ohne `sizes` verwenden — eine etwas einfachere Syntax! Sie können ein Beispiel dafür in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva verkleidet als Fee" />
```

Beachten Sie, dass, obwohl das Bild immer in der gleichen Größe angezeigt wird, Sie auf hochauflösenden Bildschirmen mehr Details sehen können.

![Ein Bild von einem kleinen Mädchen, das als Fee verkleidet ist, mit einem alten Kamera-Filmeffekt, der auf das Bild angewendet wurde](resolution-example.png)

In diesem Beispiel wird auf das Bild das folgende CSS angewendet, sodass es auf dem Bildschirm eine Breite von 320 Pixeln hat (auch als CSS-Pixel bezeichnet):

```css
img {
  width: 320px;
}
```

In diesem Fall ist `sizes` nicht erforderlich — der Browser ermittelt, welche Auflösung das Display hat, auf dem es angezeigt wird, und liefert das passendste Bild, das im `srcset` referenziert wird. Wenn das Gerät, das auf die Seite zugreift, ein Standard-/niedrigauflösendes Display mit einem Gerät-Pixel pro CSS-Pixel hat, wird das `elva-fairy-320w.jpg`-Bild geladen (die 1x ist impliziert, sodass Sie sie nicht einschließen müssen). Wenn das Gerät eine hohe Auflösung von zwei Gerätepixeln pro CSS-Pixel oder mehr hat, wird das `elva-fairy-640w.jpg`-Bild geladen. Das 640px-Bild ist 93KB, während das 320px-Bild nur 39KB ist.

### Art Direction

Um es zusammenzufassen, bei dem **Art Direction Problem** geht es darum, das angezeigte Bild an die unterschiedlichen Bildgrößen anzupassen. Beispielweise wird auf einer Webseite ein großes Landschaftsfoto mit einer Person in der Mitte gezeigt, wenn es in einem Desktop-Browser betrachtet wird. Wenn es im mobilen Browser angesehen wird, wird dasselbe Bild verkleinert, was die Person im Bild sehr klein und schwer erkennbar macht. Es wäre wahrscheinlich besser, ein kleineres, vertikales Bild auf Mobilgeräten zu zeigen, das die Person vergrößert. Das {{htmlelement("picture")}}-Element ermöglicht es uns, genau diese Art von Lösung zu implementieren.

Kehren wir zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html)-Beispiel zurück, haben wir ein Bild, das dringend Art Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris steht auf und hält seine Tochter Elva" />
```

Lassen Sie uns das mit {{htmlelement("picture")}} beheben! Wie [`<video>` und `<audio>`](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content), ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die verschiedene Quellen bereitstellen, aus denen der Browser auswählen kann, gefolgt von dem wichtigen {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht so aus:

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris steht auf und hält seine Tochter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält — wie im ersten `srcset`-Beispiel sind diese Bedingungen Tests, die entscheiden, welches Bild angezeigt wird — das erste, das wahr zurückgibt, wird angezeigt. In diesem Fall wird, wenn die Anzeigebreite 799px oder weniger betragen, das Bild des ersten `<source>`-Elements angezeigt. Wenn die Anzeigebreite 800px oder mehr beträgt, wird das zweite angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zu dem Bild, das angezeigt werden soll. Genau wie wir es oben bei `<img>` gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut aufnehmen. Sie könnten also über ein `<picture>`-Element mehrere Bilder anbieten, aber dann auch mehrere Auflösungen jedes einzelnen. Realistischerweise werden Sie so etwas jedoch nicht sehr oft machen wollen.
- In allen Fällen müssen Sie ein `<img>`-Element mit `src` und `alt` direkt vor dem `</picture>` bereitstellen, ansonsten werden keine Bilder angezeigt. Dies bietet einen Standardfall, der gilt, wenn keine der Medienbedingungen wahr ist (Sie könnten tatsächlich das zweite `<source>`-Element in diesem Beispiel entfernen), und einen Fallback für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es, ein geeignetes Bild sowohl auf Breitbild- als auch auf Schmalbildschirmen anzuzeigen, wie unten gezeigt:

![Unsere Beispielsite, wie sie auf einem Breitbildschirm angezeigt wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielsite, wie sie auf einem schmalen Bildschirm mit dem Picture-Element angezeigt wird, um das erste Bild auf eine vertikale Nahaufnahme der Details umzuschalten, was es auf einem schmalen Bildschirm viel nützlicher macht](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Art Direction-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie hingegen keine Medienbedingungen im `sizes`-Attribut an.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser beginnt, eine Seite zu laden, beginnt er mit dem Herunterladen (Vorladen) von Bildern, noch bevor der Hauptparser begonnen hat, das CSS und JavaScript der Seite zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten der Seite zu reduzieren, aber für responsive Bilder nicht hilfreich — daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Zum Beispiel könnten Sie das {{htmlelement("img")}}-Element nicht laden, dann die Anzeigebreite mit JavaScript erkennen und dann das Quellbild dynamisch auf ein kleineres Bild ändern, falls gewünscht. Zu diesem Zeitpunkt wäre das ursprüngliche Bild bereits geladen, und Sie würden das kleine Bild zusätzlich laden, was im Sinne von responsiven Bildern sogar noch schlechter ist.

## Aktives Lernen: Eigene responsive Bilder implementieren

Für dieses aktive Lernen erwarten wir, dass Sie mutig sind und es größtenteils allein tun. Wir möchten, dass Sie Ihr eigenes geeignetes, art-gesteuertes schmales Bildschirm-/Breitbildschirmbeispiel mit `<picture>` implementieren und ein Beispiel für den Auflösungswechsel mit `srcset`.

1. Schreiben Sie etwas einfaches HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes Landschaftsbild im Breitbildformat mit einer Art von Detail, das darin enthalten ist. Erstellen Sie eine webgroße Version davon mit einem Grafikeditor, dann schneiden Sie es zu, um einen vergrößerten Teil zu zeigen, und erstellen Sie ein zweites Bild (ca. 480px Breite sind dafür gut).
3. Verwenden Sie das `<picture>`-Element, um einen Bildwechsler mit Art Direction zu implementieren!
4. Erstellen Sie mehrere Bilddateien in verschiedenen Größen, die dasselbe Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Auflösungswechsel-Beispiel zu erstellen, entweder um dieselbe Bildgröße mit unterschiedlichen Auflösungen abhängig von der Geräteauflösung bereitzustellen oder um unterschiedliche Bildgrößen abhängig von den Anzeigebreiten bereitzustellen.

## Zusammenfassung

Das war es für responsive Bilder — wir hoffen, Sie hatten Spaß beim Ausprobieren dieser neuen Techniken. Zusammenfassend gibt es zwei unterschiedliche Probleme, die wir hier besprochen haben:

- **Art Direction**: Das Problem, bei dem Sie für unterschiedliche Layouts beschnittene Bilder bereitstellen möchten — zum Beispiel ein Landschaftsbild, das für ein Desktop-Layout gezeigt wird, und ein Hochformatbild, das das Hauptmotiv für ein mobiles Layout vergrößert. Sie können dieses Problem mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungswechsel**: Das Problem, bei dem Sie kleinere Bilddateien an schmalbildschirmige Geräte senden möchten, da sie keine riesigen Bilder benötigen, wie es Desktop-Anzeigen tun — und unterschiedliche Bildauflösungen an Bildschirme mit hoher Dichte/niedriger Dichte senden. Sie können dieses Problem unter Verwendung von [Vektorgrafiken](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) (SVG-Bilder) und den [`srcset`](/de/docs/Web/HTML/Element/img#srcset) mit [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attributen lösen.

Damit ist auch das gesamte [Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding) Modul abgeschlossen! Das einzige, was jetzt noch zu tun bleibt, bevor Sie weitermachen, ist, unser [Multimedia und Einbettung Assessment](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page) auszuprobieren und zu sehen, wie Sie sich dabei machen. Viel Spaß!

## Siehe auch

- [Jason Grigsbys hervorragende Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: Wenn Sie nur die Auflösung ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — enthält mehr Erklärung, wie der Browser entscheidet, welches Bild verwendet werden soll
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}
