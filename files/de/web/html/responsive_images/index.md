---
title: Responsive Images
slug: Web/HTML/Responsive_images
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen – Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren – und sehen uns an, welche Werkzeuge HTML bereitstellt, um sie zu implementieren. Dies trägt dazu bei, die Leistung auf verschiedenen Geräten zu verbessern.

## Warum responsive Bilder?

Betrachten wir ein typisches Szenario. Eine typische Website kann ein Header-Bild und einige Inhaltsbilder unter dem Header enthalten. Das Header-Bild wird wahrscheinlich die gesamte Breite des Headers überspannen, und das Inhaltsbild wird sich irgendwo innerhalb der Inhaltskolonne einfügen. Hier ist ein Beispiel:

![Unsere Beispielseite, wie sie auf einem breiten Bildschirm betrachtet wird – hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie einem Laptop oder Desktop (Sie können [das Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden). Wir werden das CSS in dieser Lektion nicht viel besprechen, außer zu sagen, dass:

- Der Body-Inhalt auf eine maximale Breite von 1200 Pixeln eingestellt wurde – in Viewports über dieser Breite bleibt der Body bei 1200px und zentriert sich im verfügbaren Raum. In Viewports unterhalb dieser Breite bleibt der Body bei 100% der Breite des Viewports.
- Das Header-Bild wurde so eingestellt, dass sein Zentrum immer im Zentrum des Headers bleibt, egal welche Breite der Header hat. Wenn die Seite auf einem schmaleren Bildschirm angezeigt wird, können die wichtigen Details in der Mitte des Bildes (die Personen) noch gesehen werden, und der Überschuss geht zu beiden Seiten verloren. Es ist 200px hoch.
- Die Inhaltsbilder wurden so eingestellt, dass sie anfangen zu schrumpfen, wenn das Body-Element kleiner als das Bild wird, sodass sie immer innerhalb des Bodys bleiben, anstatt überzulaufen.

Allerdings treten Probleme auf, wenn Sie die Seite auf einem schmalen Bildschirmgerät ansehen. Der Header unten sieht OK aus, aber er nimmt auf einem mobilen Gerät viel von der Bildschirmhöhe ein. Und in dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm betrachtet wird; das erste Bild ist so geschrumpft, dass es schwierig ist, die Details zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre, eine beschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes zeigt, wenn die Seite auf einem schmalen Bildschirm angezeigt wird. Ein zweites beschnittenes Bild könnte auf einem Gerät mit mittlerer Breite, wie einem Tablet, angezeigt werden. Das allgemeine Problem, dass Sie unterschiedliche beschnittene Bilder für verschiedene Layouts bereitstellen möchten, ist allgemein als das **Art-Direction-Problem** bekannt.

Zusätzlich gibt es keinen Grund, solche großen Bilder auf der Seite einzubetten, wenn sie auf einem mobilen Bildschirm angezeigt wird. Dies kann Bandbreite verschwenden; insbesondere wollen mobile Nutzer keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Nutzer gedacht ist, wenn ein kleines Bild für ihr Gerät ausreichen würde. Umgekehrt fängt ein kleines {{Glossary("Raster_image", "Rasterbild")}} an, körnig auszusehen, wenn es größer als seine Originalgröße angezeigt wird (ein Rasterbild hat eine feste Anzahl von Pixeln in der Breite und in der Höhe). Idealerweise würden mehrere Auflösungen dem Webbrowser des Nutzers zur Verfügung gestellt. Der Browser könnte dann die optimale Auflösung laden, basierend auf der Bildschirmgröße des Geräts des Nutzers. Dies wird als **Auflösungsumschaltungsproblem** bezeichnet.

Um die Sache komplizierter zu machen, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als Sie erwarten würden, um gut angezeigt zu werden. Dies ist im Wesentlichen dasselbe Problem, aber in einem etwas anderen Kontext.

Sie könnten denken, dass Vektorbilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad – sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie wann immer möglich verwenden. Allerdings sind sie nicht für alle Bildtypen geeignet. Vektorbilder sind gut für einfache Grafiken, Muster, Interface-Elemente etc., aber es wird sehr komplex, ein vektorbasiertes Bild mit dem Detail zu erstellen, das Sie zum Beispiel in einem Foto finden. Rasterbildformate wie JPEGs sind besser für die Art von Bildern geeignet, die wir im obigen Beispiel sehen.

Diese Art von Problem existierte nicht, als das Web zuerst existierte, Anfang bis Mitte der 90er Jahre – damals waren die einzigen Geräte, die das Web durchsuchen konnten, Desktops und Laptops, sodass Browser-Ingenieure und Spezifikationsschreiber nicht einmal daran dachten, Lösungen zu implementieren. _Responsive Image-Technologien_ wurden kürzlich implementiert, um die oben genannten Probleme zu lösen, indem sie es Ihnen ermöglichen, dem Browser mehrere Bilddateien anzubieten, entweder alle dasselbe zeigend, aber unterschiedliche Pixelmengen enthaltend (_Auflösungsumschaltung_), oder unterschiedliche Bilder, die für unterschiedliche Raumanforderungen geeignet sind (_Art Direction_).

> [!NOTE]
> Die neuen Funktionen, die in diesem Artikel besprochen werden — [`srcset`](/de/docs/Web/HTML/Element/img#srcset)/[`sizes`](/de/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} — werden alle in modernen Desktop- und Mobilbrowsern unterstützt.

## Wie erstellt man responsive Bilder?

In diesem Abschnitt werden wir uns die beiden oben illustrierten Probleme ansehen und zeigen, wie man sie mit HTMLs responsiven Bildfunktionen löst. Sie sollten beachten, dass wir uns auf {{htmlelement("img")}}-Elemente konzentrieren, wie im Inhaltsbereich des obigen Beispiels zu sehen – das Bild im Seitenkopf ist nur zur Dekoration und deshalb mit CSS-Hintergrundbildern implementiert. [CSS hat wohl bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden darüber in einem zukünftigen CSS-Modul sprechen.

### Auflösungsumschaltung: Verschiedene Größen

Was ist also das Problem, das wir mit der Auflösungsumschaltung lösen wollen? Wir möchten identischen Bildinhalt anzeigen, nur größer oder kleiner, je nach Gerät – dies ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das standardmäßige {{htmlelement("img")}}-Element erlaubt es traditionell nur, den Browser auf eine einzelne Quelldatei zu verweisen:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden – [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) – um mehrere zusätzliche Quellenbilder mit Hinweisen bereitzustellen, die dem Browser helfen, das richtige auszuwählen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html)-Beispiel auf GitHub sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die `srcset`- und `sizes`-Attribute sehen kompliziert aus, sind aber nicht allzu schwer zu verstehen, wenn Sie sie wie oben gezeigt formatieren, mit einem anderen Teil des Attributwertes in jeder Zeile. Jeder Wert enthält eine kommagetrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Lassen Sie uns nun den Inhalt jedes Teils durchgehen:

**`srcset`** definiert die Menge von Bildern, zwischen denen wir dem Browser erlauben zu wählen, und welche Größe jedes Bild hat. Jede Bildinformation wird durch ein Komma von der vorherigen getrennt. Für jedes Element schreiben wir:

1. Ein **Bilddateiname** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite** des Bildes in Pixeln (`480w`) — beachten Sie, dass dies die `w`-Einheit verwendet, nicht `px`, wie Sie vielleicht erwarten würden. Die {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eines Bildes ist seine tatsächliche Größe, die Sie finden können, indem Sie die Bilddatei auf Ihrem Computer untersuchen (zum Beispiel können Sie auf einem Mac das Bild im Finder auswählen und <kbd>Cmd</kbd> + <kbd>I</kbd> drücken, um den Informationsbildschirm aufzurufen).

**`sizes`** definiert eine Reihe von Medienbedingungen (z.B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten gewählt werden sollte, wenn bestimmte Medienbedingungen wahr sind – dies sind die Hinweise, die wir zuvor besprochen haben. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(max-width:600px)`) – in diesem Fall sagen wir „wenn die Viewport-Breite 600 Pixel oder weniger beträgt“.
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild ausfüllen wird, wenn die Medienbedingung wahr ist (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Zum Beispiel, anstatt eine absolute Breite anzugeben (zum Beispiel `480px`), können Sie alternativ eine Breite relativ zum Viewport angeben (zum Beispiel `50vw`). Sie können jedoch keine Prozentangabe als Slotbreite verwenden. Ihnen ist vielleicht aufgefallen, dass die letzte Slotbreite keine Medienbedingung hat (dies ist der Standard, der ausgewählt wird, wenn keine der Medienbedingungen wahr ist). Der Browser ignoriert alles nach der ersten zutreffenden Bedingung, also seien Sie vorsichtig, wie Sie die Medienbedingungen anordnen.

Also wird der Browser mit diesen Attributen:

1. Die Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmorientierung und Netzwerkgeschwindigkeit betrachten.
2. Ermitteln, welche Medienbedingung in der `sizes`-Liste als erste wahr ist.
3. Die Slotgröße betrachten, die dieser Medienanfrage zugewiesen ist.
4. Das Bild aus der `srcset`-Liste laden, das die gleiche Größe wie der Slot hat oder, wenn es keine gibt, das erste Bild, das größer als die gewählte Slotgröße ist.

Und das war's! An diesem Punkt, wenn ein unterstützender Browser mit einem Viewport von 480px Breite die Seite lädt, wird die Medienbedingung `(max-width: 600px)` wahr, und so wählt der Browser den `480px`-Slot. Die `elva-fairy-480w.jpg` wird geladen, da ihre inhärente Breite (`480w`) der Slotgröße am nächsten kommt. Das 800px Bild hat eine Größe von 128KB auf der Festplatte, während die 480px Version nur 63KB hat – eine Einsparung von 65KB. Stellen Sie sich vor, dies wäre eine Seite mit vielen Bildern darauf. Diese Technik könnte mobilen Nutzern viel Bandbreite sparen.

> [!NOTE]
> Wenn der Browser die schmaleren Bilder beim Testen mit einem Desktop-Browser nicht lädt, obwohl das Fenster auf die schmalste Breite eingestellt ist, sehen Sie, was der Viewport ist (Sie können es annäherungsweise herausfinden, indem Sie in der JavaScript-Konsole des Browsers `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben Mindestgrößen, bis zu denen Sie die Fensterbreite reduzieren können, und diese könnten breiter sein, als Sie denken. Beim Testen mit einem mobilen Browser können Sie Werkzeuge wie die `about:debugging`-Seite von Firefox verwenden, um die geladene Seite auf dem mobilen Gerät zu inspizieren, indem Sie die Desktop-Entwicklerwerkzeuge benutzen.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie den [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Tab der Firefox DevTools oder das [Netzwerk](https://developer.chrome.com/docs/devtools/network/) Panel der Chrome DevTools nutzen. Für Chrome möchten Sie möglicherweise auch den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder ausgewählt werden.

Ältere Browser, die diese Funktionen nicht unterstützen, ignorieren sie einfach. Stattdessen werden diese Browser das im [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut referenzierte Bild wie gewohnt laden.

> [!NOTE]
> Im {{htmlelement("head")}} des oben verlinkten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: dies bringt mobile Browser dazu, ihre tatsächliche Viewport-Breite beim Laden von Webseiten zu übernehmen (einige mobile Browser täuschen über ihre Viewport-Breite und laden stattdessen Seiten mit einer größeren Viewport-Breite und verkleinern dann die geladene Seite, was für responsive Bilder oder Design nicht sehr hilfreich ist).

### Auflösungsumschaltung: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das auf Bildschirmen mit unterschiedlichen Bildschirmauflösungen in derselben realen Größe gerendert wird. Sie können eine bessere Benutzererfahrung auf hochauflösenden Bildschirmen bieten, indem Sie eine hochauflösendere Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie dem Browser erlauben, eine Bildauflösung auszuwählen, indem Sie `srcset` mit x-Deskriptoren und ohne `sizes` verwenden — eine etwas einfachere Syntax! Sie können ein Beispiel dafür finden, wie dies aussieht, in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass auch wenn das Bild immer in derselben Größe angezeigt wird, Sie auf höher auflösenden Bildschirmen mehr Details sehen können.

![Ein Bild eines kleinen Mädchens, das sich als Fee verkleidet hat, mit einem alten Kamera-Filmeffekt auf das Bild angewendet.](resolution-example.png)

In diesem Beispiel wird auf das Bild das folgende CSS angewendet, sodass es auf dem Bildschirm eine Breite von 320 Pixeln hat (auch CSS-Pixel genannt):

```css
img {
  width: 320px;
}
```

In diesem Fall ist `sizes` nicht notwendig – der Browser arbeitet heraus, auf welcher Auflösung angezeigt wird, und liefert das am besten geeignete Bild, das im `srcset` referenziert wird. Wenn das Gerät, das auf die Seite zugreift, ein Standard-/Niedrigauflösungsdisplay hat, bei dem ein {{Glossary("device_pixel", "Device Pixel")}} jedes CSS-Pixel darstellt, wird das `elva-fairy-320w.jpg`-Bild geladen (bei 1x wird impliziert, sodass Sie es nicht einschließen müssen). Wenn das Gerät eine hohe Auflösung von zwei Gerätpixeln pro CSS-Pixel oder mehr hat, wird das `elva-fairy-640w.jpg`-Bild geladen. Das 640px Bild ist 93KB, während das 320px Bild nur 39KB ist.

### Art Direction

Zusammenfassend, das **Art Direction Problem** beinhaltet, das Bild, das angezeigt wird, so zu ändern, dass es zu unterschiedlichen Bilddisplaygrößen passt. Beispielsweise enthält eine Webseite ein großes Landschaftsbild mit einer Person in der Mitte, wenn es in einem Desktop-Browser betrachtet wird. Wenn es in einem mobilen Browser betrachtet wird, wird dasselbe Bild verkleinert, wodurch die Person im Bild sehr klein und schwer zu sehen wird. Es wäre wahrscheinlich besser, auf mobilen Geräten ein kleineres Hochformatbild anzuzeigen, das auf die Person zoomt. Das {{htmlelement("picture")}}-Element ermöglicht es uns, genau diese Art von Lösung zu implementieren.

Zurück zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) Beispiel, haben wir ein Bild, das dringend Art Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns das mit {{htmlelement("picture")}} beheben! Wie [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio), ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die verschiedene Quellen für den Browser zur Auswahl bieten, gefolgt von dem unbedingt notwendigen {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht so aus:

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält – ebenso wie bei dem ersten `srcset`-Beispiel sind diese Bedingungen Tests, die entscheiden, welches Bild angezeigt wird – das erste, das wahr ist, wird angezeigt. In diesem Fall wird, wenn die Viewport-Breite 799px breit oder weniger ist, das Bild des ersten `<source>`-Elements angezeigt. Wenn die Viewport-Breite 800px oder mehr beträgt, wird das zweite angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zu dem anzuzeigenden Bild. Genau wie wir es oben bei `<img>` gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut aufnehmen. Sie könnten also mehrere Bilder über ein `<picture>`-Element anbieten, aber dann auch mehrere Auflösungen von jedem einzelnen. Realistisch gesehen werden Sie wahrscheinlich nicht sehr oft so etwas tun wollen.
- In allen Fällen müssen Sie ein `<img>`-Element mit `src` und `alt` direkt vor `</picture>` bereitstellen, sonst werden keine Bilder angezeigt. Dies bietet einen Standardfall, der gilt, wenn keine der Medienbedingungen wahr ist (Sie könnten tatsächlich das zweite `<source>`-Element in diesem Beispiel entfernen) und eine Rückfallebene für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es uns, ein geeignetes Bild sowohl auf Breitbild- als auch auf Schmalbildschirmen anzuzeigen, wie unten gezeigt:

![Unsere Beispielseite, wie sie auf einem Breitbildbildschirm betrachtet wird – hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm betrachtet wird, mit dem Picture-Element, das das erste Bild auf ein Hochformat Close-Up der Details umschaltet, was es auf einem schmalen Bildschirm viel nützlicher macht](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Art-Direction-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen innerhalb des `sizes`-Attributs an.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser anfängt, eine Seite zu laden, beginnt er mit dem Herunterladen (Vorabladen) von Bildern, bevor der Hauptparser mit dem Laden und Interpretieren von CSS und JavaScript der Seite begonnen hat. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten von Seiten zu verkürzen, ist jedoch nicht hilfreich für responsive Bilder – daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Zum Beispiel könnten Sie das {{htmlelement("img")}}-Element nicht laden, dann die Viewport-Breite mit JavaScript erkennen und dann die Bildquelle dynamisch in ein kleineres ändern, falls gewünscht. Zu dem Zeitpunkt wäre das ursprüngliche Bild bereits geladen worden, und Sie würden das kleine Bild zusätzlich laden, was in Bezug auf responsive Bilder noch schlechter ist.

## Aktives Lernen: Implementierung Ihrer eigenen responsiven Bilder

Bei diesem aktiven Lernen erwarten wir, dass Sie mutig sind und es größtenteils alleine machen. Wir möchten, dass Sie Ihr eigenes geeignetes Art-Direction-Screenshots für schmale Bildschirme/weite Bildschirme mit `<picture>` und ein Beispiel für eine Auflösungsumschaltung, das `srcset` verwendet, implementieren.

1. Schreiben Sie ein HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes Breitbild-Landschaftsfoto mit irgendeiner Art von Details darin. Erstellen Sie mit einem Grafikprogramm eine Web-Version davon und schneiden Sie es zu, um einen kleineren Teil zu zeigen, der auf die Details zoomt, und erstellen Sie ein zweites Bild (etwa 480px breit ist dafür gut geeignet).
3. Verwenden Sie das `<picture>`-Element, um einen Art-Direction-Bildwechsler zu implementieren!
4. Erstellen Sie mehrere Bilddateien in unterschiedlichen Größen, die alle dasselbe Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Beispiel für eine Auflösungsumschaltung zu erstellen, entweder um eine gleichgroße Bilddatei in unterschiedlichen Auflösungen bereitzustellen, abhängig von der Geräteauflösung, oder um unterschiedliche Bildgrößen abhängig von den Viewport-Breiten bereitzustellen.

## Zusammenfassung

Das war's für responsive Bilder – wir hoffen, Sie hatten Spaß daran, mit diesen neuen Techniken zu spielen. Zur Zusammenfassung, es gibt zwei verschiedene Probleme, die wir hier besprochen haben:

- **Art Direction**: Das Problem, bei dem Sie beschnittene Bilder für unterschiedliche Layouts bereitstellen möchten — zum Beispiel ein Landschaftsbild, das eine vollständige Szene für ein Desktop-Layout zeigt, und ein Hochformatbild, das das Hauptmotiv für ein mobiles Layout eingezoomt zeigt. Sie können dieses Problem mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungsumschaltung**: Das Problem, bei dem Sie kleinere Bilddateien an Geräte mit schmalem Bildschirm senden möchten, da sie keine riesigen Bilder wie Desktop-Displays benötigen — und um unterschiedliche Auflösungsbilder an hochdichte/niedrige Densescreens zu senden. Dieses Problem können Sie mit [Vektorgrafiken](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (SVG-Bildern) sowie den [`srcset`](/de/docs/Web/HTML/Element/img#srcset) mit [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attributen lösen.

## Weitere Informationen

- [Learn: Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Jason Grigsbys hervorragende Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: Wenn Sie nur die Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — beinhaltet mehr Erklärung, wie der Browser entscheidet, welches Bild er verwenden soll
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}
