---
title: Verwenden von responsiven Bildern in HTML
short-title: Responsive Bilder
slug: Web/HTML/Guides/Responsive_images
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen – Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Eigenschaften gut funktionieren – und schauen uns an, welche Werkzeuge HTML bietet, um sie zu implementieren. Dies trägt dazu bei, die Leistung auf verschiedenen Geräten zu verbessern.

## Warum responsive Bilder?

Lassen Sie uns ein typisches Szenario untersuchen. Eine typische Website kann ein Header-Bild und einige Inhaltsbilder unter dem Header enthalten. Das Header-Bild wird wahrscheinlich die gesamte Breite des Headers einnehmen, und das Inhaltsbild wird irgendwo innerhalb der Inhalts-Spalte passen. Hier ein Beispiel:

![Unser Beispiel-Website, angezeigt auf einem breiten Bildschirm – hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie einem Laptop oder Desktop (Sie können [das Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden.) Wir werden in dieser Lektion nicht viel über das CSS sprechen, außer um zu sagen, dass:

- Der Hauptinhalt wurde auf eine maximale Breite von 1200 Pixeln gesetzt – in Viewports über dieser Breite bleibt der Hauptbereich bei 1200px und zentriert sich im verfügbaren Raum. In Viewports unter dieser Breite bleibt der Hauptbereich bei 100% der Breite des Viewports.
- Das Header-Bild wurde so eingestellt, dass sein Zentrum immer im Mittelpunkt des Headers bleibt, egal welche Breite der Kopfbereich hat. Wenn die Seite auf einem schmaleren Bildschirm betrachtet wird, können die wichtigen Details in der Mitte des Bildes (die Menschen) immer noch gesehen werden, und der Überschuss geht auf beiden Seiten verloren. Es ist 200px hoch.
- Die Inhaltsbilder wurden so eingestellt, dass, wenn das Body-Element kleiner als das Bild wird, die Bilder anfangen zu schrumpfen, so dass sie immer innerhalb des Bodys bleiben, anstatt ihn zu überflüssigen.

Tauchen jedoch Probleme auf, wenn Sie die Website auf einem schmalen Bildschirmgerät betrachten. Das Header-Bild sieht in Ordnung aus, aber es beginnt, viel der Bildschirmhöhe eines mobilen Geräts einzunehmen. Und in dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unser Beispiel-Website, angezeigt auf einem schmalen Bildschirm; das erste Bild ist so weit geschrumpft, dass es schwer ist, Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre es, eine zugeschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes zeigt, wenn die Seite auf einem schmalen Bildschirm betrachtet wird. Ein zweites zugeschnittenes Bild könnte für ein Mittelbreitbildgerät wie ein Tablet angezeigt werden. Das allgemeine Problem, bei dem Sie verschiedene zugeschnittene Bilder auf diese Weise für verschiedene Layouts bereitstellen möchten, ist allgemein als das **Kunst-Richtungs-Problem** bekannt.

Außerdem ist es nicht notwendig, so große Bilder auf die Seite einzubetten, wenn sie auf einem mobilen Bildschirm betrachtet wird. Dies kann Bandbreite verschwenden; insbesondere möchten mobile Benutzer keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Benutzer gedacht ist, wenn ein kleines Bild für ihr Gerät ausreichen würde. Im Gegensatz dazu beginnt ein kleines {{Glossary("Raster_image", "Rasterbild")}} körnig zu wirken, wenn es größer als seine ursprüngliche Größe angezeigt wird (ein Rasterbild ist eine festgelegte Anzahl von Pixeln in der Breite und eine festgelegte Anzahl von Pixeln in der Höhe). Idealerweise wären mehrere Auflösungen für den Webbrowser des Benutzers verfügbar. Der Browser könnte dann die optimale Auflösung bestimmen, die basierend auf der Bildschirmgröße des Geräts geladen werden soll. Dies wird als **Auflösungsumschaltungsproblem** bezeichnet.

Um die Sache komplizierter zu machen, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als Sie erwarten würden, um sie schön darzustellen. Dies ist im Wesentlichen dasselbe Problem, aber in einem etwas anderen Kontext.

Sie könnten annehmen, dass Vektorbilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad – sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie wann immer möglich verwenden. Sie eignen sich jedoch nicht für alle Bildtypen. Vektorbilder sind großartig für einfache Grafiken, Muster, Benutzeroberflächenelemente usw., aber es wird sehr komplex, ein vektorbasiertes Bild mit der Art von Detail zu erstellen, das Sie beispielsweise in einem Foto finden würden. Rasterbildformate wie JPEGs sind besser für die Art von Bildern geeignet, die wir im obigen Beispiel sehen.

Solche Probleme existierten nicht, als das Web zuerst existierte, in den frühen bis mittleren 90er Jahren – damals gab es als einzige Geräte, um im Web zu surfen, Desktops und Laptops, daher dachten Browser-Ingenieure und Spezifikationsautoren nicht einmal daran, Lösungen dafür zu implementieren. _Responsive-Bild-Technologien_ wurden kürzlich eingeführt, um die oben genannten Probleme zu lösen, indem Sie dem Browser mehrere Bilddateien anbieten, die entweder alle dasselbe zeigen, aber unterschiedliche Anzahl an Pixeln enthalten (_Auflösungsumschaltung_) oder unterschiedliche Bilder, geeignet für verschiedene Platzverteilungen (_Kunst-Richtung_).

> [!NOTE]
> Die neuen in diesem Artikel behandelten Funktionen — [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)/[`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)/{{htmlelement("picture")}} — werden in modernen Desktop- und mobilen Browsern unterstützt.

## Wie erstellt man responsive Bilder?

In diesem Abschnitt werden wir uns die oben illustrierten zwei Probleme ansehen und zeigen, wie man sie mit den Responsive-Bild-Features von HTML löst. Sie sollten beachten, dass wir uns in diesem Abschnitt auf {{htmlelement("img")}}-Elemente konzentrieren werden, wie im Inhaltsbereich des obigen Beispiels zu sehen – das Bild im Header der Seite ist nur zur Dekoration und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat wohl bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden in einem zukünftigen CSS-Modul darüber sprechen.

### Auflösungsumschaltung: Verschiedene Größen

Also, was ist das Problem, das wir mit der Auflösungsumschaltung lösen wollen? Wir möchten identischen Bildinhalt anzeigen, nur größer oder kleiner, je nach Gerät – das ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das standardmäßige {{htmlelement("img")}}-Element erlaubt Ihnen traditionell nur, den Browser auf eine einzelne Quelldatei zu verweisen:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden — [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) — um mehrere zusätzliche Quellbilder bereitzustellen, zusammen mit Hinweisen, die dem Browser helfen, das richtige auszuwählen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) Beispiel auf GitHub sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die `srcset`- und `sizes`-Attribute sehen kompliziert aus, aber sie sind nicht allzu schwer zu verstehen, wenn Sie sie so formatieren, wie oben gezeigt, mit einem anderen Teil des Attributwerts in jeder Zeile. Jeder Wert enthält eine durch Kommas getrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Lassen Sie uns nun den Inhalt jedes Teils durchgehen:

**`srcset`** definiert die Menge an Bildern, die wir dem Browser zur Auswahl anbieten, und welche Größe jedes Bild hat. Jedes Bildinformationsset wird durch ein Komma vom vorherigen getrennt. Für jedes schreiben wir:

1. **Bilddateiname** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite in Pixeln** des Bildes (`480w`) — beachten Sie, dass dies die `w`-Einheit verwendet, nicht `px`, wie Sie vielleicht erwarten würden. Die {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eines Bildes ist seine tatsächliche Größe, die durch Inspektion der Bilddatei auf Ihrem Computer gefunden werden kann (zum Beispiel können Sie auf einem Mac das Bild im Finder auswählen und <kbd>Cmd</kbd> + <kbd>I</kbd> drücken, um den Informationsbildschirm aufzurufen).

**`sizes`** definiert eine Menge von Medienbedingungen (z.B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten zu wählen ist, wenn bestimmte Medienbedingungen wahr sind — dies sind die früher genannten Hinweise. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(max-width:600px)`) – Sie werden mehr über diese Bedingungen im [CSS-Thema](/de/docs/Learn_web_development/Core/Styling_basics) lernen, aber sagen wir jetzt einfach, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir „wenn die Ansichtsfensterbreite 600 Pixel oder weniger beträgt“.
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild einnehmen wird, wenn die Medienbedingung wahr ist (`480px`)

> [!NOTE]
> In `sizes`, können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Beispielsweise statt einer absoluten Breite (z.B. `480px`), können Sie alternativ eine Breite relativ zum Ansichtsfenster angeben (z.B. `50vw`). Sie können jedoch keinen Prozentsatz als Slot-Breite verwenden. Sie haben vielleicht bemerkt, dass die letzte Slot-Breite keine Medienbedingung hat (dies ist der Standard, der gewählt wird, wenn keine der Medienbedingungen wahr ist). Der Browser ignoriert alles nach der ersten zutreffenden Bedingung, also seien Sie vorsichtig, wie Sie die Medienbedingungen anordnen.

Damit die werden die folgenden Attribute dem Browser Folgendes ermöglichen:

1. Die Bildschirmgröße, Pixeldichtigkeit, Zoomstufe, Bildschirmausrichtung und Netzwerkgeschwindigkeit betrachten.
2. Herausfinden, welche Medienbedingung in der `sizes`-Liste die erste ist, die wahr ist.
3. Die für diese Medienanforderung angegebene Slot-Größe betrachten.
4. Das im `srcset`-Verzeichnis referenzierte Bild laden, das die gleiche Größe wie der Slot hat oder, wenn es keines gibt, das erste Bild laden, das größer ist als die gewählte Slot-Größe.

Und das war's! An diesem Punkt, wenn ein unterstützender Browser mit einer Ansichtsfensterbreite von 480px die Seite lädt, wird die Medienbedingung `(max-width: 600px)` wahr sein, und daher wählt der Browser den `480px`-Slot. Das `elva-fairy-480w.jpg` wird geladen, da seine inhärente Breite (`480w`) der Slot-Größe am nächsten ist. Das 800px-Bild ist 128KB auf der Festplatte, während die 480px-Version nur 63KB ist – eine Einsparung von 65KB. Jetzt stellen Sie sich vor, dies wäre eine Seite mit vielen Bildern. Die Verwendung dieser Technik könnte mobilen Benutzern viel Bandbreite sparen.

> [!NOTE]
> Wenn Sie dies mit einem Desktop-Browser testen und der Browser die schmaleren Bilder nicht lädt, wenn Sie das Fenster auf die engste Breite eingestellt haben, schauen Sie, wie groß das Ansichtsfenster ist (Sie können es ungefähr bestimmen, indem Sie in die JavaScript-Konsole des Browsers gehen und `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben minimale Größen, auf die Sie die Fensterbreite reduzieren können, und sie könnten breiter sein, als Sie denken. Wenn Sie es mit einem mobilen Browser testen, können Sie Tools wie die `about:debugging`-Seite von Firefox verwenden, um die auf dem Mobilgerät geladene Seite mit den Entwickler-Tools auf dem Desktop zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie die [Netzwerküberwachung](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in den Firefox DevTools oder das [Netzwerk](https://developer.chrome.com/docs/devtools/network/) in den Chrome DevTools verwenden. In Chrome möchten Sie möglicherweise auch den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder verwendet werden.

Ältere Browser, die diese Funktionen nicht unterstützen, ignorieren sie einfach. Stattdessen laden diese Browser das im [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut referenzierte Bild ganz normal.

> [!NOTE]
> Im {{htmlelement("head")}} des obigen Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: dies zwingt mobile Browser dazu, ihre tatsächliche Ansichtsfensterbreite beim Laden von Webseiten anzunehmen (manche mobile Browser geben falsche Informationen über ihre Ansichtsfensterbreite an, laden Seiten dann mit einer größeren Ansichtsfensterbreite und skalieren die geladene Seite dann herunter, was nicht sehr hilfreich für responsive Bilder oder Design ist).

### Auflösungsumschaltung: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das auf Displays mit unterschiedlicher Bildschirmauflösung in derselben realen Größe angezeigt wird. Sie können ein besseres Benutzererlebnis auf hochauflösenden Displays bieten, indem Sie eine hochauflösende Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie dem Browser die Auswahl eines geeigneten Auflösungsbildes ermöglichen, indem Sie `srcset` mit x-Deskriptoren und ohne `sizes` verwenden – eine etwas einfachere Syntax! Sie können ein Beispiel dafür in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass selbst wenn das Bild immer in derselben Größe angezeigt wird, sehen Sie auf hochauflösenden Displays mehr Details.

![Ein Bild eines kleinen Mädchens als Fee, mit einem alten Kamera-Filmeffekt auf das Bild angewendet](resolution-example.png)

In diesem Beispiel wird das folgende CSS auf das Bild angewendet, sodass es auf dem Bildschirm eine Breite von 320 Pixeln hat (auch als CSS-Pixel bezeichnet):

```css
img {
  width: 320px;
}
```

In diesem Fall wird `sizes` nicht benötigt – der Browser ermittelt, auf welchem Display das Bild angezeigt wird, und ruft das am besten geeignete Bild im `srcset` ab. Wenn das Gerät, auf dem die Seite aufgerufen wird, über ein Standard-/Niederauflösungsdisplay verfügt, bei dem ein {{Glossary("device_pixel", "Gerätepixel")}} den CSS-Pixeln darstellt, wird das `elva-fairy-320w.jpg`-Bild geladen (das 1x ist impliziert, weshalb Sie es nicht einschließen müssen). Wenn das Gerät über eine hohe Auflösung von zwei Gerätepixeln pro CSS-Pixel oder mehr verfügt, wird das `elva-fairy-640w.jpg`-Bild geladen. Das 640px-Bild ist 93KB, während das 320px-Bild nur 39KB ist.

### Kunst-Richtung

Zusammenfassend handelt es sich bei dem **Kunst-Richtungs-Problem** darum, das angezeigte Bild an verschiedene Bilddarstellungen anzupassen. Beispielsweise enthält eine Webseite eine große Landschaftsaufnahme mit einer Person in der Mitte, wenn sie in einem Desktop-Browser angesehen wird. Wenn sie im mobilen Browser angesehen wird, wird dasselbe Bild verkleinert, wodurch die Person auf dem Bild sehr klein und schwer zu erkennen ist. Es wäre wahrscheinlich besser, ein kleineres, vertikales Bild auf dem Handy zu zeigen, das auf die Person hereinzoomt. Das {{htmlelement("picture")}}-Element ermöglicht uns, genau diese Art von Lösung zu implementieren.

Zurück zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) Beispiel, wir haben ein Bild, das dringend eine Kunst-Richtung benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns dies mit {{htmlelement("picture")}} beheben! Genau wie [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio), ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die verschiedene Quellen bereitstellen, aus denen der Browser auswählen kann, gefolgt von dem wichtigen {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht wie folgt aus:

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält – wie beim ersten `srcset`-Beispiel sind diese Bedingungen Tests, die entscheiden, welches Bild gezeigt wird – das erste, das als wahr zurückgegeben wird, wird angezeigt. In diesem Fall wird, wenn die Ansichtsfensterbreite 799px oder weniger beträgt, das Bild des ersten `<source>`-Elements angezeigt. Wenn die Ansichtsfensterbreite 800px oder mehr beträgt, wird das zweite Bild angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zu dem anzuzeigenden Bild. Genau wie bei `<img>` oben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern haben, sowie ein `sizes`-Attribut. So könnten Sie mehrere Bilder über ein `<picture>`-Element anbieten, aber dann auch mehrere Auflösungen von jedem anbieten. Realistisch gesehen werden Sie diese Art von Dingen wahrscheinlich nicht sehr oft tun wollen.
- In allen Fällen müssen Sie ein `<img>`-Element mit `src` und `alt` direkt vor `</picture>` bereitstellen, sonst erscheinen keine Bilder. Dies bietet einen Standardfall, der gilt, wenn keine der Medienbedingungen wahr ist (tatsächlich könnte man das zweite `<source>`-Element in diesem Beispiel weglassen), und eine Fallback-Option für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es, ein geeignetes Bild sowohl auf Breitbild- als auch auf Schmalbildschirmen anzuzeigen, wie unten gezeigt:

![Unsere Beispiel-Website, angezeigt auf einem breiten Bildschirm - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispiel-Website, angezeigt auf einem schmalen Bildschirm mit dem `<picture>`-Element, um das erste Bild in ein Portrait-Detailbild zu wechseln, was es auf einem schmalen Bildschirm viel nützlicher macht](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Kunst-Richtung-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen im `sizes`-Attribut an.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser beginnt, eine Seite zu laden, beginnt er auch, Bilder vorab zu laden, bevor der Hauptparser begonnen hat, das CSS und JavaScript der Seite zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten der Seite zu verringern, aber er ist nicht hilfreich für responsive Bilder — daher mussten Lösungen wie `srcset` implementiert werden. Beispielsweise könnten Sie nicht das {{htmlelement("img")}}-Element laden, dann die Ansichtsfensterbreite mit JavaScript erkennen und dann das Quellbild dynamisch auf ein kleineres ändern, falls gewünscht. Zu diesem Zeitpunkt wäre das ursprüngliche Bild bereits geladen, und Sie würden das kleine Bild auch laden, was in Bezug auf responsive Bilder noch schlimmer ist.

## Aktives Lernen: Implementieren Sie Ihre eigenen responsiven Bilder

Für dieses aktive Lernen erwarten wir, dass Sie mutig sind und es größtenteils alleine tun. Wir möchten, dass Sie Ihr eigenes geeignetes kunstgeleitetes Schmalbildschirm-/Breitbildschirm-Beispiel mit `<picture>` implementieren und ein Beispiel für die Auflösungsumschaltung mithilfe von `srcset`.

1. Schreiben Sie etwas HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes Breitbildlandschaftsbild mit irgendwelchen Details darauf. Erstellen Sie eine webgerechte Version davon mit einem Grafikeditor, beschneiden Sie sie dann, um einen kleineren Teil zu zeigen, der auf die Details hereinzoomt, und erstellen Sie ein zweites Bild (etwa 480px Breite ist dafür geeignet).
3. Verwenden Sie das `<picture>`-Element, um einen kunstgesteuerten Bildwechsel zu implementieren!
4. Erstellen Sie mehrere Bilddateien unterschiedlicher Größe, die alle dasselbe Bild zeigen.
5. Nutzen Sie `srcset`/`sizes`, um ein Beispiel für eine Auflösungsumschaltung zu erstellen, entweder um dieselbe Bildgröße in unterschiedlichen Auflösungen bereitzustellen, je nach Geräteauflösung, oder um unterschiedliche Bildgrößen in Abhängigkeit von der Ansichtsfensterbreite zu bieten.

## Zusammenfassung

Das war's mit responsiven Bildern – wir hoffen, Sie hatten Spaß dabei, mit diesen neuen Techniken zu spielen. Zur Wiederholung, es gibt zwei verschiedene Probleme, die wir hier besprochen haben:

- **Kunst-Richtung**: Das Problem, bei dem Sie zugeschnittene Bilder für unterschiedliche Layouts bereitstellen möchten – zum Beispiel ein Landschaftsbild, das eine vollständige Szene für ein Desktop-Layout zeigt, und ein Portraitbild, das das Hauptmotiv für ein mobiles Layout heranzoomt. Dieses Problem können Sie mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungsumschaltung**: Das Problem, bei dem Sie kleinere Bilddateien auf schmalen Bildschirmgeräten bereitstellen möchten, da sie keine riesigen Bilder wie Desktop-Displays benötigen – und um unterschiedliche Auflösungsbilder auf hochdichte/niedrigdichte Bildschirme bereitzustellen. Dieses Problem können Sie mit [Vektorgrafiken](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (SVG-Bildern) und den Attributen [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) mit [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) lösen.

## Siehe auch

- [Lernen: Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Jason Grigsbys ausgezeichnete Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: Wenn Sie nur die Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — enthält weitere Erklärungen, wie der Browser berechnet, welches Bild verwendet werden soll.
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}
