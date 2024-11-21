---
title: Responsive Images
slug: Learn/HTML/Multimedia_and_embedding/Responsive_images
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}

In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen – Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren – und sehen uns an, welche Werkzeuge HTML bietet, um sie umzusetzen. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern. Responsive Bilder sind nur ein Teil des [responsiven Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), ein zukünftiges Thema in CSS, das Sie lernen werden.

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

Lassen Sie uns ein typisches Szenario betrachten. Eine typische Website kann ein Headerbild und einige Inhaltsbilder unter dem Header enthalten. Das Headerbild wird wahrscheinlich die gesamte Breite des Headers abdecken, und das Inhaltsbild wird irgendwo innerhalb der Inhaltsspalte passen. Hier ist ein Beispiel:

![Unsere Beispielseite auf einem breiten Bildschirm angezeigt - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie einem Laptop oder Desktop (Sie können [das Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden.) Wir werden das CSS in dieser Lektion nicht viel diskutieren, außer zu sagen, dass:

- Der Body-Inhalt auf eine maximale Breite von 1200 Pixeln eingestellt ist – in Viewports über dieser Breite bleibt der Body bei 1200px und zentriert sich im verfügbaren Raum. In Viewports unterhalb dieser Breite bleibt der Body bei 100% der Breite des Viewports.
- Das Headerbild wurde so eingestellt, dass sein Zentrum immer in der Mitte des Headers bleibt, egal welche Breite der Header hat. Wenn die Seite auf einem schmaleren Bildschirm betrachtet wird, können die wichtigen Details im Zentrum des Bildes (die Personen) weiterhin gesehen werden, und der Überschuss geht auf beiden Seiten verloren. Es ist 200px hoch.
- Die Inhaltsbilder wurden so eingestellt, dass sie, wenn das Body-Element kleiner wird als das Bild, anfangen zu schrumpfen, sodass sie immer innerhalb des Bodys bleiben, anstatt ihn zu überlaufen.

Es treten jedoch Probleme auf, wenn Sie die Seite auf einem Gerät mit schmalem Bildschirm anzeigen. Der Header unten sieht in Ordnung aus, aber er beginnt, viel Bildschirmhöhe auf einem mobilen Gerät zu beanspruchen. Und in dieser Größe ist es schwierig, die Gesichter der zwei Personen auf dem ersten Inhaltsbild zu erkennen.

![Unsere Beispielseite, die auf einem schmalen Bildschirm angezeigt wird; das erste Bild ist so geschrumpft, dass es schwer ist, die Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre, eine zugeschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes zeigt, wenn die Seite auf einem schmalen Bildschirm betrachtet wird. Ein zweites zugeschnittenes Bild könnte für ein Gerät mit mittlerer Bildschirmbreite, wie ein Tablet, angezeigt werden. Das allgemeine Problem, bei dem Sie auf diese Weise unterschiedliche zugeschnittene Bilder für verschiedene Layouts bereitstellen möchten, wird allgemein als **Art-Direction-Problem** bezeichnet.

Außerdem ist es nicht notwendig, so große Bilder auf der Seite einzubetten, wenn sie auf einem mobilen Bildschirm angesehen wird. Dies kann Bandbreite verschwenden; insbesondere wollen mobile Nutzer keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Nutzer gedacht ist, wenn ein kleines Bild für ihr Gerät ausreichen würde. Im Gegensatz dazu beginnt ein kleines {{Glossary("Raster_image", "Rasterbild")}} körnig zu wirken, wenn es größer als seine Originalgröße angezeigt wird (ein Rasterbild hat eine feste Anzahl von Pixeln in der Breite und eine feste Anzahl von Pixeln in der Höhe, wie wir gesehen haben, als wir uns mit [Vektorgrafiken](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) beschäftigten). Idealerweise würden mehrere Auflösungen dem Webbrowser des Benutzers zur Verfügung gestellt werden. Der Browser könnte dann basierend auf der Bildschirmgröße des Geräts des Benutzers die optimale Auflösung bestimmen, die geladen werden soll. Dies wird als **Auflösungswechselproblem** bezeichnet.

Um die Sache noch komplizierter zu machen, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als man erwarten würde, damit sie gut aussehen. Dies ist im Wesentlichen dasselbe Problem, aber in einem leicht anderen Kontext.

Sie könnten denken, dass Vektorbilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad — sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie wann immer möglich verwenden. Allerdings sind sie nicht für alle Bildtypen geeignet. Vektorbilder sind großartig für einfache Grafiken, Muster, Interface-Elemente usw., aber es wird sehr kompliziert, ein vektor-basiertes Bild mit der Art von Detail zu erstellen, das Sie z. B. in einem Foto finden würden. Rasterbildformate wie JPEGs sind besser geeignet für die Art von Bildern, die wir im obigen Beispiel sehen.

Diese Art von Problem existierte nicht, als das Web in den frühen bis mittleren 90ern zum ersten Mal existierte — damals waren die einzigen existierenden Geräte zum Surfen im Web Desktops und Laptops, also dachten Browser-Ingenieure und Spezifikationsautoren nicht einmal daran, Lösungen zu implementieren. _Technologien für responsive Bilder_ wurden kürzlich implementiert, um die oben genannten Probleme zu lösen, indem Sie dem Browser mehrere Bilddateien anbieten, entweder alle mit dem gleichen Motiv, aber mit unterschiedlichen Pixelmengen (_Auflösungswechsel_) oder unterschiedliche Bilder, die für verschiedene Platzzuweisungen geeignet sind (_Art-Direction_).

> [!NOTE]
> Die neuen Funktionen, die in diesem Artikel besprochen werden – [`srcset`](/de/docs/Web/HTML/Element/img#srcset)/[`sizes`](/de/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} – werden alle von modernen Desktop- und mobilen Browsern unterstützt.

## Wie erstellt man responsive Bilder?

In diesem Abschnitt werden wir uns die beiden oben genannten Probleme ansehen und zeigen, wie sie mithilfe der Funktionen für responsive Bilder in HTML gelöst werden können. Sie sollten beachten, dass wir uns auf {{htmlelement("img")}}-Elemente in diesem Abschnitt konzentrieren werden, wie im Inhaltsbereich des obigen Beispiels zu sehen — das Bild im Header der Seite dient nur zur Dekoration und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat arguably bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden in einem zukünftigen CSS-Modul darüber sprechen.

### Auflösungswechsel: Verschiedene Größen

Was ist also das Problem, das wir mit dem Auflösungswechsel lösen wollen? Wir möchten identische Bildinhalte anzeigen, nur größer oder kleiner je nach Gerät — dies ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das standardmäßige {{htmlelement("img")}}-Element lässt Sie traditionell nur den Browser auf eine einzige Quelldatei verweisen:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden — [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) — um mehrere zusätzliche Bilderquellen zusammen mit Hinweisen bereitzustellen, die dem Browser helfen, das richtige auszuwählen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) Beispiel auf GitHub sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die Attribute `srcset` und `sizes` sehen kompliziert aus, aber sie sind nicht allzu schwer zu verstehen, wenn Sie sie wie oben gezeigt formatieren, mit einem anderen Teil des Attributwerts in jeder Zeile. Jeder Wert enthält eine durch Kommas getrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Gehen wir die Inhalte jedes Teils jetzt durch:

**`srcset`** definiert die Menge an Bildern, die wir dem Browser zur Auswahl anbieten werden, und welche Größe jedes Bild hat. Jede Menge an Bildinformationen wird durch ein Komma von der vorherigen Menge getrennt. Für jede schreiben wir:

1. Ein **Bilddateiname** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite des Bildes in Pixeln** (`480w`) — beachten Sie, dass hier die Einheit `w` verwendet wird, nicht `px`, wie Sie vielleicht erwarten. Die {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eines Bildes ist seine tatsächliche Größe, die Sie durch Überprüfung der Bilddatei auf Ihrem Computer finden können (zum Beispiel können Sie auf einem Mac das Bild im Finder auswählen und <kbd>Cmd</kbd> + <kbd>I</kbd> drücken, um den Info-Bildschirm aufzurufen).

**`sizes`** definiert eine Menge von Medienbedingungen (z. B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten ausgewählt werden sollte, wenn bestimmte Medienbedingungen zutreffen — dies sind die Hinweise, über die wir vorhin gesprochen haben. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(max-width:600px)`) — Sie werden mehr über diese im [CSS-Thema](/de/docs/Learn/CSS) lernen, aber vorerst sagen wir einfach, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir "wenn die Ansichtsfensterbreite 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild ausfüllen wird, wenn die Medienbedingung zutrifft (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Beispielsweise können Sie anstelle einer absoluten Breite (zum Beispiel `480px`) eine Breite relativ zum Ansichtsfenster angeben (zum Beispiel `50vw`). Sie können jedoch keine Prozentzahl als Slotbreite verwenden. Sie haben vielleicht bemerkt, dass die letzte Slotbreite keine Medienbedingung hat (dies ist die gewählte Standardoption, wenn keine der Medienbedingungen zutrifft). Der Browser ignoriert alles nach der ersten zutreffenden Bedingung, also achten Sie bei der Reihenfolge der Medienbedingungen darauf.

So, mit diesen Attributen im Platz wird der Browser:

1. Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmausrichtung und Netzgeschwindigkeit beachten.
2. Feststellen, welche Medienbedingung in der `sizes`-Liste die erste ist, die zutrifft.
3. Die dem Medienquery zugewiesene Slotgröße betrachten.
4. Das Bild laden, das in der `srcset`-Liste referenziert ist und die gleiche Größe wie der Slot hat oder, wenn es keines gibt, das erste Bild, das größer als die gewählte Slotgröße ist.

Und das war's! Zu diesem Zeitpunkt wird ein unterstützender Browser mit einer Ansichtsfensterbreite von 480px die Seite laden, die `(max-width: 600px)` Medienbedingung wird zutreffen und so wird der Browser den `480px` Slot auswählen. Das `elva-fairy-480w.jpg` wird geladen, da seine inhärente Breite (`480w`) der Slotgröße am nächsten kommt. Das 800px Bild ist auf der Festplatte 128KB groß, während die 480px Version nur 63KB groß ist — eine Einsparung von 65KB. Stellen Sie sich nun vor, dies wäre eine Seite mit vielen Bildern. Mit dieser Technik könnten mobile Nutzer viel Bandbreite sparen.

> [!NOTE]
> Wenn Sie dies in einem Desktop-Browser testen und der Browser die schmaleren Bilder nicht lädt, obwohl Sie das Fenster auf die schmalste Breite gesetzt haben, schauen Sie, wie groß das Ansichtsfenster ist (Sie können es annähernd bestimmen, indem Sie in die JavaScript-Konsole des Browsers gehen und `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben Mindestgrößen, auf die Sie die Fensterbreite reduzieren können, und diese könnten breiter sein, als Sie denken. Wenn Sie es mit einem mobilen Browser testen, können Sie Tools wie die Firefox-Seite `about:debugging` verwenden, um die geladene Seite am Mobilgerät mit den Entwicklerwerkzeugen des Desktops zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie das [Netzwerkmonitor-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in Firefox DevTools oder das [Netzwerk-Panel](https://developer.chrome.com/docs/devtools/network/) in Chrome DevTools verwenden. Für Chrome möchten Sie möglicherweise den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder ausgewählt werden.

Ältere Browser, die diese Funktionen nicht unterstützen, ignorieren sie einfach. Stattdessen gehen diese Browser und laden das Bild, das im [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut referenziert ist, wie gewohnt.

> [!NOTE]
> Im Kopfbereich des oben verlinkten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: Dies zwingt mobile Browser dazu, ihre echte Ansichtsfensterbreite zum Laden von Webseiten zu verwenden (einige mobile Browser täuschen über ihre Ansichtsfensterbreite hinweg und laden Seiten stattdessen mit einer größeren Ansichtsfensterbreite und verkleinern die geladene Seite dann, was nicht sehr hilfreich für responsive Bilder oder Design ist).

### Auflösungswechsel: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das in allen Bildschirmen mit unterschiedlichen Bildschirmauflösungen in derselben realen Größe dargestellt wird. Sie können eine bessere Benutzererfahrung auf hochauflösende Displays bieten, indem Sie eine höher aufgelöste Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie dem Browser erlauben, ein Bild mit einer geeigneten Auflösung zu wählen, indem Sie `srcset` mit x-Deklaratoren und ohne `sizes` verwenden — eine etwas einfachere Syntax! Ein Beispiel dafür, wie dies aussieht, finden Sie in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass das Bild, obwohl es immer in derselben Größe angezeigt wird, auf Displays mit höherer Auflösung mehr Details zeigt.

![Ein Bild eines kleinen Mädchens, das als Fee verkleidet ist, mit einem alten Kameraeffekt, der auf das Bild angewendet wurde](resolution-example.png)

In diesem Beispiel wird das folgende CSS auf das Bild angewendet, damit es eine Breite von 320 Pixeln auf dem Bildschirm hat (auch als CSS-Pixel bezeichnet):

```css
img {
  width: 320px;
}
```

In diesem Fall ist `sizes` nicht nötig — der Browser ermittelt, welche Auflösung das Display hat, auf dem es angezeigt wird, und stellt das am besten geeignete Bild bereit, das in `srcset` referenziert ist. Wenn das Gerät, das auf die Seite zugreift, ein Standard-/Niedrigauflösungsdisplay hat, bei dem ein Gerätepixel einem CSS-Pixel entspricht, wird das `elva-fairy-320w.jpg` Bild geladen (das 1x ist impliziert, sodass Sie es nicht einfügen müssen). Wenn das Gerät eine hohe Auflösung von zwei Gerätepixeln pro CSS-Pixel oder mehr hat, wird das `elva-fairy-640w.jpg` Bild geladen. Das Bild mit 640px ist 93KB groß, während das Bild mit 320px nur 39KB groß ist.

### Art-Direction

Zusammenfassend kann man das **Art-Direction-Problem** dadurch lösen, dass man das angezeigte Bild ändert, um verschiedene Bildgrößen zur Verfügung zu stellen. Beispielsweise könnte eine Webseite ein großes Landschaftsfoto mit einer Person in der Mitte zeigen, wenn sie in einem Desktop-Browser angesehen wird. Wenn sie in einem Mobilbrowser angesehen wird, wird dasselbe Bild verkleinert, sodass die Person im Bild sehr klein und schwer zu erkennen ist. Es wäre wahrscheinlich besser, ein kleineres Hochformatbild auf mobilen Geräten anzuzeigen, das näher an die Person heranzoomt. Das {{htmlelement("picture")}}-Element ermöglicht es uns, genau diese Art von Lösung umzusetzen.

Wenn wir zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html)-Beispiel zurückkehren, haben wir ein Bild, das dringend Art-Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns dies mit {{htmlelement("picture")}} verbessern! Ähnlich wie [`<video>` und `<audio>`](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content), ist das `<picture>` Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die unterschiedliche Quellen bereitstellen, aus denen der Browser wählen kann, gefolgt von dem entscheidenden {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht so aus:

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält — genauso wie im ersten `srcset`-Beispiel, sind diese Bedingungen Tests, die entscheiden, welches Bild angezeigt wird — das erste, das wahr zurückgibt, wird angezeigt. In diesem Fall, wenn die Ansichtsfensterbreite 799px breit oder weniger ist, wird das Bild des ersten `<source>`-Elements angezeigt. Wenn die Ansichtsfensterbreite 800px oder mehr beträgt, wird das zweite angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zum anzuzeigenden Bild. Genau wie wir es oben mit `<img>` gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut enthalten. So könnten Sie mehrere Bilder über ein `<picture>`-Element anbieten, aber dann auch mehrere Auflösungen von jedem. Realistisch gesehen werden Sie diese Art von Ding nicht sehr oft tun wollen.
- In allen Fällen müssen Sie ein `<img>`-Element mit `src` und `alt` unmittelbar vor `</picture>` angeben, da sonst keine Bilder angezeigt werden. Dies bietet einen Standardfall, der angewendet wird, wenn keine der Medienbedingungen wahr zurückgibt (Sie könnten tatsächlich das zweite `<source>`-Element in diesem Beispiel entfernen), und ein Fallback für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es uns, ein passendes Bild sowohl auf Breitbild- als auch auf schmalen Bildschirmen anzuzeigen, wie unten gezeigt:

![Unsere Beispielseite auf einem breiten Bildschirm angezeigt - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielseite auf einem schmalen Bildschirm mit dem picture-Element angezeigt, um das erste Bild in ein Porträt-Nahaufnahme der Details zu wechseln, was es auf einem schmalen Bildschirm viel nützlicher macht](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Art-Direction-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen im `sizes`-Attribut an.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser beginnt, eine Seite zu laden, beginnt er mit dem Herunterladen (Vorladen) von Bildern, bevor der Hauptparser begonnen hat, das CSS und JavaScript der Seite zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten der Seite zu reduzieren, jedoch nicht hilfreich für responsive Bilder — daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Beispielsweise könnten Sie das {{htmlelement("img")}}-Element nicht laden, dann die Ansichtsfensterbreite mit JavaScript erkennen und dann das Quellbild auf ein kleineres ändern, wenn gewünscht. Zu diesem Zeitpunkt wäre das Originalbild bereits geladen, und Sie würden das kleine Bild ebenfalls laden, was in puncto responsive Bilder noch schlechter wäre.

## Aktives Lernen: Implementierung Ihrer eigenen responsiven Bilder

Für dieses aktive Lernen erwarten wir, dass Sie mutig sind und es hauptsächlich allein machen. Wir möchten, dass Sie Ihr eigenes geeignetes Art-Direction-Bild für schmale Bildschirme/breites Bildschirm-Layout mit `<picture>` und ein Beispiel für den Auflösungswechsel implementieren, das `srcset` verwendet.

1. Schreiben Sie etwas einfaches HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie mögen).
2. Finden Sie ein schönes Breitbild-Landschaftsbild mit irgendeiner Art von Detail darin. Erstellen Sie eine webgrößen Version davon mit einem Grafikeditor, schneiden Sie es dann zu, um einen kleineren Teil zu zeigen, der auf das Detail heranzoomt, und erstellen Sie ein zweites Bild (etwa 480px breit ist gut dafür).
3. Verwenden Sie das `<picture>`-Element, um einen Art-Direction-Bildwechsler zu implementieren!
4. Erstellen Sie mehrere Bilddateien in verschiedenen Größen, die alle das gleiche Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Beispiel für den Auflösungswechsler zu erstellen, entweder um dieselbe Bildgröße in unterschiedlichen Auflösungen je nach Geräteauflösung zu dienen oder um unterschiedliche Bildgrößen je nach Ansichtsfensterbreiten zu dienen.

## Zusammenfassung

Das ist ein Abschluss für responsive Bilder — wir hoffen, dass Sie Spaß beim Spielen mit diesen neuen Techniken hatten. Zusammenfassend gibt es zwei unterschiedliche Probleme, die wir hier besprochen haben:

- **Art-Direction**: Das Problem, bei dem Sie zugeschnittene Bilder für verschiedene Layouts bereitstellen möchten — zum Beispiel ein Landschaftsbild, das eine vollständige Szene für ein Desktop-Layout zeigt, und ein Hochformatbild, das das Hauptmotiv näher für ein mobiles Layout zeigt. Sie können dieses Problem mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungswechsel**: Das Problem, bei dem Sie kleinere Bilddateien für Geräte mit schmalem Bildschirm bereitstellen möchten, da diese keine großen Bilder benötigen wie Desktop-Displays — und um unterschiedliche Auflösungsbilder für hochauflösende/niedrigauflösende Bildschirme zu dienen. Sie können dieses Problem mit [Vektorgrafiken](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) (SVG-Bilder) und den Attributen [`srcset`](/de/docs/Web/HTML/Element/img#srcset) mit [`sizes`](/de/docs/Web/HTML/Element/img#sizes) lösen.

Damit endet auch das gesamte Modul zu [Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding)! Das Einzige, was Sie noch tun müssen, bevor Sie weitergehen, ist, unsere [Einschätzung zu Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page) auszuprobieren und zu sehen, wie Sie sich schlagen. Viel Spaß!

## Siehe auch

- [Jason Grigsbys ausgezeichnete Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: Wenn Sie nur die Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — enthält mehr Erklärungen darüber, wie der Browser herausfindet, welches Bild verwendet werden soll
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}
