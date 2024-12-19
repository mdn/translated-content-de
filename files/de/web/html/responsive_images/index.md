---
title: Responsive Images
slug: Web/HTML/Responsive_images
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

In diesem Artikel lernen Sie das Konzept responsiver Bilder kennen – Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren – und sehen, welche Tools HTML bereitstellt, um diese zu implementieren. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern.

## Warum responsive Bilder?

Lassen Sie uns ein typisches Szenario betrachten. Eine typische Website kann ein Header-Bild und einige Inhaltsbilder unterhalb des Headers enthalten. Das Header-Bild wird wahrscheinlich die gesamte Breite des Headers einnehmen, und das Inhaltsbild wird irgendwo in die Inhaltskolonne passen. Hier ist ein Beispiel:

![Unsere Beispielseite auf einem Breitbildschirm – hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie einem Laptop oder Desktop (Sie können [das Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden.) Wir werden in dieser Lektion nicht viel über CSS sprechen, außer dass:

- Der Body-Inhalt auf eine maximale Breite von 1200 Pixeln eingestellt wurde – bei Viewports über dieser Breite bleibt der Body bei 1200px und zentriert sich im verfügbaren Raum. Bei Viewports unter dieser Breite bleibt der Body bei 100% der Breite des Viewports.
- Das Header-Bild so eingestellt wurde, dass sein Mittelpunkt immer in der Mitte des Headers bleibt, egal welche Breite der Header hat. Wenn die Seite auf einem schmaleren Bildschirm betrachtet wird, sind die wichtigen Details in der Mitte des Bildes (die Personen) immer noch sichtbar, und der Überschuss geht auf beiden Seiten verloren. Es ist 200px hoch.
- Die Inhaltsbilder so eingestellt wurden, dass sie anfangen zu schrumpfen, wenn das Body-Element kleiner als das Bild wird, sodass sie immer im Body bleiben, anstatt darüber hinauszulaufen.

Es treten jedoch Probleme auf, wenn Sie die Seite auf einem Gerät mit schmalem Bildschirm betrachten. Der Header unten sieht in Ordnung aus, aber er beginnt viel von der Bildschirmhöhe eines mobilen Geräts einzunehmen. Und in dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unsere Beispielseite auf einem schmalen Bildschirm; das erste Bild ist so geschrumpft, dass es schwierig ist, die Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre es, eine zugeschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes anzeigt, wenn die Seite auf einem schmalen Bildschirm angezeigt wird. Ein zweites zugeschnittenes Bild könnte für ein Mittelbreitbildgerät, wie ein Tablet, angezeigt werden. Das allgemeine Problem, bei dem Sie verschiedene zugeschnittene Bilder auf diese Weise für verschiedene Layouts bereitstellen möchten, ist allgemein als **Problem der künstlerischen Ausrichtung** bekannt.

Darüber hinaus besteht keine Notwendigkeit, so große Bilder auf der Seite einzubetten, wenn sie auf einem mobilen Bildschirm betrachtet wird. Das kann Bandbreite verschwenden; insbesondere möchten mobile Nutzer keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Nutzer gedacht ist, wenn ein kleines Bild für ihr Gerät ausreichen würde. Umgekehrt beginnt ein kleines [Rasterbild](/de/docs/Glossar/Rasterbild) körnig auszusehen, wenn es größer als seine Originalgröße angezeigt wird (ein Rasterbild hat eine feste Anzahl an Bildpunkten in der Breite und Höhe). Idealerweise würden dem Webbrowser des Benutzers mehrere Auflösungen zur Verfügung gestellt werden. Der Browser könnte dann basierend auf der Bildschirmgröße des Geräts die optimale Auflösung laden. Dies nennt man das **Auflösungswechselproblem**.

Um die Dinge noch komplizierter zu machen, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als Sie vielleicht erwarten, um schön angezeigt zu werden. Dies ist im Wesentlichen dasselbe Problem, jedoch in einem leicht anderen Kontext.

Vielleicht denken Sie, dass Vektorbilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad – sie sind in der Dateigröße klein und skalieren gut, und Sie sollten sie überall dort einsetzen, wo es möglich ist. Sie sind jedoch nicht für alle Bildtypen geeignet. Vektorbilder sind großartig für einfache Grafiken, Muster, Interface-Elemente usw., aber es wird sehr kompliziert, ein vektorbasierendes Bild mit der Art von Details zu erstellen, die Sie beispielsweise in einem Foto finden würden. Rasterbildformate wie JPEGs eignen sich besser für die Art von Bildern, die wir im obigen Beispiel sehen.

Diese Art von Problem existierte nicht, als das Web zum ersten Mal existierte, in den frühen bis mittleren 90er Jahren – damals existierten nur Desktops und Laptops, um das Web zu durchsuchen, sodass Browserentwickler und Spezifikationsautoren nicht einmal daran dachten, Lösungen zu implementieren. _Responsive Bildtechnologien_ wurden kürzlich implementiert, um die oben beschriebenen Probleme zu lösen, indem Sie dem Browser mehrere Bilddateien anbieten, die entweder alle dasselbe zeigen, aber unterschiedliche Anzahlen an Bildpunkten enthalten (_Auflösungswechsel_), oder verschiedene Bilder, die für verschiedene Raummessungen geeignet sind (_künstlerische Ausrichtung_).

> [!NOTE]
> Die neuen Funktionen, die in diesem Artikel besprochen werden – [`srcset`](/de/docs/Web/HTML/Element/img#srcset)/[`sizes`](/de/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} – werden alle in modernen Desktop- und mobilen Browsern unterstützt.

## Wie erstellen Sie responsive Bilder?

In diesem Abschnitt werden wir die beiden oben dargestellten Probleme betrachten und zeigen, wie Sie sie mit den responsiven Bildfunktionen von HTML lösen. Sie sollten beachten, dass wir uns auf {{htmlelement("img")}}-Elemente für diesen Abschnitt konzentrieren werden, wie im Inhaltsbereich des obigen Beispiels – das Bild im Website-Header dient nur der Dekoration und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat arguably bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden darüber in einem zukünftigen CSS-Modul sprechen.

### Auflösungswechsel: Verschiedene Größen

Was ist also das Problem, das wir mit dem Auflösungswechsel lösen wollen? Wir wollen identischen Bildinhalt anzeigen, der je nach Gerät nur größer oder kleiner ist – das ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das Standard-{{htmlelement("img")}}-Element lässt Sie traditionell nur eine Bilddatei an den Browser verweisen:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden – [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) – um mehrere zusätzliche Quellbilder bereitzustellen, zusammen mit Hinweisen, die dem Browser helfen, das richtige auszuwählen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) Beispiel auf GitHub sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die `srcset`- und `sizes`-Attribute sehen kompliziert aus, aber sie sind nicht allzu schwer zu verstehen, wenn Sie sie, wie oben gezeigt, formatieren, mit einem anderen Teil des Attributwerts in jeder Zeile. Jeder Wert enthält eine durch Kommas getrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Gehen wir jetzt die Inhalte jedes Teils durch:

**`srcset`** definiert die Menge der Bilder, die wir dem Browser zur Auswahl bereitstellen werden, und welche Größe jedes Bild hat. Jede Gruppe von Bildinformationen ist durch ein Komma getrennt. Für jede schreiben wir:

1. Einen **Bilddateinamen** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **eigentliche Breite des Bildes in Pixeln** (`480w`) – beachten Sie, dass dies die Einheit `w` verwendet und nicht `px`, wie Sie vielleicht erwarten. Die [eigentliche Größe](/de/docs/Glossar/Eigentliche_Größe) eines Bildes ist seine tatsächliche Größe, die Sie auf Ihrem Computer überprüfen können (zum Beispiel können Sie auf einem Mac das Bild im Finder auswählen und <kbd>Befehl</kbd> + <kbd>I</kbd> drücken, um den Info-Bildschirm aufzurufen).

**`sizes`** definiert eine Reihe von Medienbedingungen (z.B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten geeignet wäre, wenn bestimmte Medienbedingungen zutreffen – dies sind die zuvor erwähnten Hinweise. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(max-width:600px)`) – Sie werden mehr über diese im [CSS-Thema](/de/docs/Learn_web_development/Core/Styling_basics) lernen, aber für den Moment sagen wir einfach, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir "wenn die Ansichtsfensterbreite 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Bereichs**, den das Bild ausfüllen wird, wenn die Medienbedingung zutrifft (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Zum Beispiel können Sie anstelle einer absoluten Breite (zum Beispiel `480px`) alternativ eine Breite relativ zum Ansichtsfenster angeben (zum Beispiel `50vw`). Sie können jedoch keinen Prozentsatz als Bereichsbreite verwenden. Vielleicht haben Sie bemerkt, dass die letzte Bereichsbreite keine Medienbedingung hat (dies ist der Standard, der gewählt wird, wenn keine der Medienbedingungen zutrifft). Der Browser ignoriert alles nach der ersten zutreffenden Bedingung, stellen Sie daher sicher, wie Sie die Medienbedingungen anordnen.

Mit diesen Attributen an Ort und Stelle wird der Browser:

1. Die Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmorientierung und Netzwerkgeschwindigkeit betrachten.
2. Herausfinden, welche Medienbedingung in der `sizes`-Liste die erste ist, die zutrifft.
3. Die für diese Medienabfrage angegebene Slotgröße betrachten.
4. Das im `srcset`-Liste angegebene Bild laden, das die gleiche Größe wie das Slot hat oder, wenn keines vorhanden ist, das erste Bild, das größer als der gewählte Slot ist.

Und das war's! Zu diesem Zeitpunkt, wenn ein unterstützender Browser mit einer Ansichtsfensterbreite von 480px die Seite lädt, wird die Medienbedingung `(max-width: 600px)` zutreffen und der Browser wählt den `480px` Slot. `elva-fairy-480w.jpg` wird geladen, da seine eigentliche Breite (`480w`) am nächsten zur Slotgröße liegt. Das 800px Bild ist 128KB auf der Festplatte, während die 480px Version nur 63KB beträgt – eine Einsparung von 65KB. Stellen Sie sich jetzt vor, dass dies eine Seite wäre, die viele Bilder enthält. Diese Technik zu verwenden, könnte mobilen Benutzern viel Bandbreite sparen.

> [!NOTE]
> Wenn Sie dies mit einem Desktop-Browser testen und der Browser nicht die schmaleren Bilder lädt, wenn Sie sein Fenster auf die schmalste Breite eingestellt haben, sehen Sie, wie groß das Ansichtsfenster tatsächlich ist (Sie können es ungefähr herausfinden, indem Sie in die JavaScript-Konsole des Browsers gehen und `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben unterschiedliche Mindestgrößen, auf die Sie die Fensterbreite reduzieren können, und sie könnten breiter sein, als Sie denken. Wenn Sie es mit einem mobilen Browser testen, können Sie Tools wie die Firefox `about:debugging`-Seite verwenden, um die geladene Seite auf dem Mobilgerät mit den Desktop-Entwicklerwerkzeugen zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie das [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Tab von Firefox DevTools oder das [Netzwerk](https://developer.chrome.com/docs/devtools/network/)-Panel von Chrome DevTools verwenden. Für Chrome möchten Sie möglicherweise auch [den Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder ausgewählt werden.

Ältere Browser, die diese Funktionen nicht unterstützen, werden sie einfach ignorieren. Stattdessen werden diese Browser das im [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut referenzierte Bild ganz normal laden.

> [!NOTE]
> Im {{htmlelement("head")}} des oben verlinkten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: Diese zwingt mobile Browser, für das Laden von Webseiten ihre tatsächliche Ansichtsfensterbreite anzunehmen (einige mobile Browser lügen über ihre Ansichtsfensterbreite und laden stattdessen Seiten mit einer größeren Ansichtsfensterbreite und verkleinern die geladene Seite dann, was für responsive Bilder oder Design nicht sehr hilfreich ist).

### Auflösungswechsel: Gleiche Größe, verschiedene Auflösungen

Angenommen, Sie haben ein Bild, das in derselben realen Größe auf Bildschirmen mit unterschiedlichen Bildschirmauflösungen angezeigt wird. Sie können eine bessere Benutzererfahrung auf hochauflösenden Bildschirmen bieten, indem Sie eine hochauflösende Version des Bildes zur Verfügung stellen.

Um dies zu erreichen, können Sie dem Browser erlauben, ein Bild mit der entsprechenden Auflösung auszuwählen, indem Sie `srcset` mit x-Deskriptoren und ohne `sizes` verwenden – eine etwas einfachere Syntax! Sie können ein Beispiel dafür sehen, wie das in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) aussieht (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass das Bild zwar immer mit derselben Größe dargestellt wird, aber auf hochauflösenden Displays mehr Details sichtbar werden.

![Ein Bild eines kleinen Mädchens, das sich als Fee verkleidet hat, mit einem alten Kameraeffekt, der auf das Bild angewendet wurde](resolution-example.png)

In diesem Beispiel wird folgendes CSS auf das Bild angewendet, sodass es auf dem Bildschirm eine Breite von 320 Pixeln hat (auch CSS-Pixel genannt):

```css
img {
  width: 320px;
}
```

In diesem Fall ist `sizes` nicht erforderlich – der Browser ermittelt, welche Auflösung das Display ist, auf dem es angezeigt wird, und serviert das am besten geeignete Bild, das in `srcset` referenziert wird. Wenn das Gerät, das auf die Seite zugreift, ein Standard-/niedrigauflösendes Display hat, auf dem ein Gerätepixel jedes CSS-Pixel darstellt, wird das `elva-fairy-320w.jpg` geladen (das 1x ist impliziert, also müssen Sie es nicht einschließen). Wenn das Gerät eine hohe Auflösung von zwei Gerätepixeln pro CSS-Pixel oder mehr hat, wird das `elva-fairy-640w.jpg` Bild geladen. Das 640px Bild ist 93KB, während das 320px Bild nur 39KB beträgt.

### Künstlerische Ausrichtung

Zusammengefasst geht es beim **Problem der künstlerischen Ausrichtung** darum, das angezeigte Bild an die verschiedenen Anzeigengrößen anzupassen. Beispielsweise umfasst eine Webseite ein großes Landschaftsbild mit einer Person in der Mitte, wenn sie in einem Desktop-Browser angezeigt wird. Wenn dasselbe Bild in einem mobilen Browser angezeigt wird, wird es verkleinert, sodass die Person im Bild sehr klein und schwer zu erkennen ist. Es wäre wahrscheinlich besser, ein kleineres Porträtbild auf Mobilgeräten anzuzeigen, das auf die Person hineinzoomt. Das {{htmlelement("picture")}}-Element ermöglicht es uns, genau diese Art von Lösung zu implementieren.

Zurück zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) Beispiel, haben wir ein Bild, das dringend einer künstlerischen Ausrichtung bedarf:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns dies mit {{htmlelement("picture")}} lösen! Ähnlich wie [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}} Elemente enthält, die verschiedene Quellen für den Browser zur Auswahl bieten, gefolgt von dem wichtigen {{htmlelement("img")}} Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht folgendermaßen aus:

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält – genau wie beim ersten `srcset` Beispiel sind diese Bedingungen Tests, die entscheiden, welches Bild angezeigt wird – das erste, das wahr wird, wird angezeigt. In diesem Fall, wenn die Ansichtsfensterbreite 799px breit oder weniger ist, wird das erste `<source>` Element angezeigt. Wenn die Ansichtsfensterbreite 800px oder mehr beträgt, wird das zweite angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zu dem anzuzeigenden Bild. Genau wie wir es oben bei `<img>` gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut annehmen. Sie könnten also mehrere Bilder über ein `<picture>`-Element anbieten, aber dann auch mehrere Auflösungen von jedem anbieten. Realistischerweise werden Sie das wahrscheinlich nicht sehr oft tun wollen.
- In jedem Fall müssen Sie ein `<img>` Element mit `src` und `alt` direkt vor `</picture>` bereitstellen, andernfalls erscheinen keine Bilder. Dies bietet einen Standardfall, der angewendet wird, wenn keine der Medienbedingungen zutrifft (Sie könnten tatsächlich das zweite `<source>`-Element in diesem Beispiel entfernen) und ein Fallback für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es uns, ein geeignetes Bild sowohl auf Breitbild- als auch auf schmalen Bildschirmen anzuzeigen, wie unten gezeigt:

![Unsere Beispielseite auf einem Breitbildschirm – hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielseite auf einem schmalen Bildschirm mit dem Bild-Element verwendet, um das erste Bild in ein Porträt-Nahaufnahme des Details zu wechseln, was es auf einem schmalen Bildschirm viel nützlicher macht.](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in künstlerischen Ausrichtungsszenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen im `sizes`-Attribut an.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser anfängt, eine Seite zu laden, lädt er vorwärts (preload) alle Bilder, bevor der Hauptparser begonnen hat, das CSS und die JavaScript der Seite zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Seitenauslastungszeiten zu reduzieren, aber nicht hilfreich für responsive Bilder – daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Beispielsweise könnten Sie das {{htmlelement("img")}}-Element nicht laden, die Ansichtsfensterbreite mit JavaScript erkennen und dann das Quellbild dynamisch zu einem kleineren ändern, wenn gewünscht. Zu diesem Zeitpunkt wäre das ursprüngliche Bild bereits geladen worden, und Sie würden das kleine Bild auch laden, was für responsive Bilder sogar noch schlimmer ist.

## Aktives Lernen: Ihre eigenen responsiven Bilder implementieren

Für dieses aktive Lernen erwarten wir, dass Sie mutig sind und es größtenteils alleine machen. Wir möchten, dass Sie Ihre eigene geeignete, künstlerisch ausgerichtete Schmalbildschirm-/Breitbildschirmlösung mit `<picture>` implementieren und ein Beispiel für einen Auflösungswechsel erstellen, das `srcset` verwendet.

1. Schreiben Sie ein einfaches HTML, das Ihren Code enthält (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes Breitbild-Landschaftsbild mit einer Art Detail darin. Erstellen Sie eine webfreundliche Version davon mit einem Grafikeditor, dann schneiden Sie es aus, um einen kleineren Teil zu zeigen, der in das Detail hineinzoomt, und erstellen Sie ein zweites Bild (etwa 480px Breite ist dafür gut).
3. Verwenden Sie das `<picture>`-Element, um einen Bild-Wechsler mit künstlerischer Ausrichtung zu implementieren!
4. Erstellen Sie mehrere Bilddateien in verschiedenen Größen, die alle dasselbe Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Beispiel für einen Auflösungswechsel zu erstellen, entweder um je nach Geräteauflösung dieselbe Bildgröße in verschiedenen Auflösungen zu servietren oder um unterschiedliche Bildgrößen je nach Ansichtsfensterbreiten zu servieren.

## Zusammenfassung

Das war's für responsive Bilder – wir hoffen, Sie haben Spaß beim Ausprobieren dieser neuen Techniken. Als Zusammenfassung gibt es zwei verschiedene Probleme, die wir hier besprochen haben:

- **Künstlerische Ausrichtung**: Das Problem, bei dem Sie für verschiedene Layouts zugeschnittene Bilder bereitstellen möchten – zum Beispiel ein Landschaftsbild, das eine gesamte Szene für ein Desktop-Layout zeigt, und ein Porträtbild, das das Hauptmotiv für ein mobiles Layout herangezoomt zeigt. Sie können dieses Problem mithilfe des {{htmlelement("picture")}}-Elements lösen.
- **Auflösungswechsel**: Das Problem, bei dem Sie kleineren Bilddateien an schmale Bildschirme liefern möchten, da diese keine riesigen Bilder wie Desktop-Bildschirme benötigen – und unterschiedliche Auflösungsbilder an hochdichte/niedrige Dichte-Bildschirme liefern. Sie können dieses Problem mithilfe von [Vektorgrafiken](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (SVG-Bilder) und dem [`srcset`](/de/docs/Web/HTML/Element/img#srcset) mit den [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attributen lösen.

## Siehe auch

- [Lernen: Responsives Design](/de/docs/Lernentwicklung/Web/CSS-Layouts/Responsive_Design)
- [Jason Grigsbys hervorragende Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Bilder: Wenn Sie nur Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) – enthält weitere Erklärungen darüber, wie der Browser ermittelt, welches Bild verwendet werden soll
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}
