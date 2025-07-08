---
title: Verwenden von responsiven Bildern in HTML
short-title: Responsive Bilder
slug: Web/HTML/Guides/Responsive_images
l10n:
  sourceCommit: 691e2e9827fde02429405d57124aa263c4e3730e
---

{{HTMLSidebar}}

In diesem Artikel lernen Sie das Konzept von responsiven Bildern kennen — Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren — und schauen uns an, welche Werkzeuge HTML bereitstellt, um ihre Implementierung zu unterstützen. Dies hilft dabei, die Leistung auf verschiedenen Geräten zu verbessern.

## Warum responsive Bilder?

Betrachten wir ein typisches Szenario. Eine typische Website kann ein Header-Bild und einige Inhaltsbilder unter dem Header enthalten. Das Header-Bild wird wahrscheinlich die gesamte Breite des Headers einnehmen, und das Inhaltsbild wird irgendwo in der Inhaltskolumne passen. Hier ist ein Beispiel:

![Unsere Beispielseite, wie sie auf einem breiten Bildschirm angezeigt wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu erkennen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie einem Laptop oder Desktop (Sie können das [Beispiel live ansehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden.) In dieser Lektion werden wir das CSS nicht ausführlich besprechen, außer dass:

- Der Inhaltsbereich des Bodys auf eine maximale Breite von 1200 Pixeln festgelegt wurde — in Viewports über dieser Breite bleibt der Body bei 1200px und zentriert sich im verfügbaren Raum. In Viewports unter dieser Breite bleibt der Body bei 100% der Breite des Viewports.
- Das Header-Bild wurde so eingestellt, dass sein Zentrum immer im Mitte des Headers bleibt, egal welche Breite der Header hat. Wenn die Seite auf einem schmaleren Bildschirm angezeigt wird, kann man die wichtigen Details in der Mitte des Bildes (die Personen) immer noch sehen, und der Überschuss geht auf beiden Seiten verloren. Es ist 200px hoch.
- Die Inhaltsbilder wurden so eingestellt, dass, wenn das Body-Element kleiner als das Bild wird, die Bilder anfangen zu schrumpfen, sodass sie immer im Body bleiben und ihn nicht überlaufen.

Probleme treten jedoch auf, wenn Sie die Seite auf einem Gerät mit schmalem Bildschirm anzeigen. Der Header unten sieht in Ordnung aus, aber er beginnt, viel von der Bildschirmhöhe eines Mobilgeräts einzunehmen. Und bei dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm angezeigt wird; das erste Bild ist so geschrumpft, dass es schwer ist, die Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre es, eine beschnittene Version des Bildes anzuzeigen, die die wichtigsten Details des Bildes zeigt, wenn die Seite auf einem schmalen Bildschirm betrachtet wird. Ein zweites beschnittenes Bild könnte für ein Gerät mit mittlerer Bildschirmbreite, wie ein Tablet, angezeigt werden. Das allgemeine Problem, bei dem Sie verschiedene beschnittene Bilder auf diese Weise für verschiedene Layouts bereitstellen möchten, ist allgemein als das **Art-Direction-Problem** bekannt.

Darüber hinaus ist es nicht notwendig, so große Bilder in die Seite einzubetten, wenn sie auf einem mobilen Bildschirm angesehen wird. Dies kann Bandbreite verschwenden; insbesondere möchten mobile Nutzer keine Bandbreite verschwenden, indem sie ein großes Bild für Desktop-Nutzer herunterladen, wenn ein kleines Bild für ihr Gerät ausreichen würde. Umgekehrt kann ein kleines {{Glossary("Raster_image", "Raster-Bild")}} körnig aussehen, wenn es größer als seine ursprüngliche Größe angezeigt wird (ein Rasterbild hat eine feste Anzahl von Pixeln in der Breite und eine feste Anzahl in der Höhe). Idealerweise wären mehrere Auflösungen für den Webbrowser des Nutzers verfügbar. Der Browser könnte dann basierend auf der Bildschirmgröße des Geräts die optimale Auflösung zum Laden bestimmen. Dies wird als **Auflösungsumschaltungsproblem** bezeichnet.

Um die Sache noch komplizierter zu machen, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als Sie erwarten würden, um schön angezeigt zu werden. Dies ist im Wesentlichen das gleiche Problem, aber in einem leicht anderen Kontext.

Sie könnten denken, dass Vektor-Bilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad — sie haben eine kleine Dateigröße und skalieren gut, und Sie sollten sie wo immer möglich verwenden. Sie sind jedoch nicht für alle Bildtypen geeignet. Vektor-Bilder sind großartig für einfache Grafiken, Muster, Interface-Elemente usw., aber es wird sehr komplex, ein Vektor-basiertes Bild mit der Art von Detail zu erstellen, das Sie beispielsweise in einem Foto finden würden. Rasterbildformate wie JPEGs eignen sich besser für die Art von Bildern, die wir im obigen Beispiel sehen.

Diese Art von Problem existierte nicht, als das Web in den frühen bis mittleren 90er Jahren erstmals existierte — damals waren die einzigen Geräte, die zum Surfen im Web existierten, Desktops und Laptops, sodass Browser-Ingenieure und Spezifikationsautoren nicht einmal daran dachten, Lösungen zu implementieren. _Responsive-Bild-Technologien_ wurden kürzlich eingeführt, um die oben genannten Probleme zu lösen, indem Sie dem Browser mehrere Bilddateien anbieten können, die entweder alle dasselbe zeigen, aber eine unterschiedliche Anzahl von Pixeln enthalten (_Auflösungsumschaltung_), oder verschiedene Bilder, die für unterschiedliche Platzbedarf geeignet sind (_Art-Direction_).

> [!NOTE]
> Die in diesem Artikel diskutierten neuen Features — [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)/[`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)/{{htmlelement("picture")}} — werden alle in modernen Desktop- und mobilen Browsern unterstützt.

## Wie erstellt man responsive Bilder?

In diesem Abschnitt schauen wir uns die beiden oben illustrierten Probleme an und zeigen, wie man sie mit den responsiven Bildfunktionen von HTML löst. Beachten Sie, dass wir uns auf {{htmlelement("img")}}-Elemente für diesen Abschnitt konzentrieren werden, wie im Inhaltsbereich des obigen Beispiels zu sehen — das Bild im Header der Seite dient nur zur Dekoration und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat arguably bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden darüber in einem zukünftigen CSS-Modul sprechen.

### Auflösungsumschaltung: Verschiedene Größen

Was ist also das Problem, das wir mit der Auflösungsumschaltung lösen wollen? Wir wollen denselben Bildinhalt anzeigen, nur größer oder kleiner, je nach Gerät — dies ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das Standard-{{htmlelement("img")}}-Element lässt traditionell den Browser nur eine einzige Quelldatei angeben:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden — [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) — um mehrere zusätzliche Quellbilder zusammen mit Hinweisen bereitzustellen, die dem Browser helfen, das richtige auszuwählen. Ein Beispiel hierfür finden Sie in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) Beispiel auf GitHub (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die Attribute `srcset` und `sizes` sehen kompliziert aus, aber sie sind nicht schwer zu verstehen, wenn Sie sie wie oben gezeigt formatieren, wobei jeder Teil des Attributwerts in einer eigenen Zeile steht. Jeder Wert enthält eine durch Kommas getrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Lassen Sie uns jetzt die Inhalte der einzelnen durchlaufen:

**`srcset`** definiert die Menge an Bildern, die wir dem Browser zur Auswahl stellen, und welche Größe jedes Bild hat. Jede Image-Informationen-Set wird durch ein Komma von dem vorherigen getrennt. Für jedes davon schreiben wir:

1. Einen **Bilddateinamen** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite des Bildes in Pixeln** (`480w`) — beachten Sie, dass dabei die Einheit `w` und nicht `px`, wie Sie es vielleicht erwarten, verwendet wird. Die {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eines Bildes ist seine tatsächliche Größe, die durch Inspizieren der Bilddatei auf Ihrem Computer gefunden werden kann (beispielsweise können Sie auf einem Mac das Bild im Finder auswählen und <kbd>Cmd</kbd> + <kbd>I</kbd> drücken, um den Info-Bildschirm aufzurufen).

**`sizes`** definiert eine Menge von Medienbedingungen (z. B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten ausgewählt werden sollte, wenn bestimmte Medienbedingungen zutreffen — dies sind die Hinweise, von denen wir vorhin gesprochen haben. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(width <= 600px)`) — Sie werden mehr über diese im [CSS-Thema](/de/docs/Learn_web_development/Core/Styling_basics) lernen, aber vorerst lassen Sie uns einfach sagen, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir "wenn die Sichtfensterbreite 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild ausfüllen wird, wenn die Medienbedingung zutrifft (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Zum Beispiel können Sie anstelle eines absoluten Breitenwerts (z. B. `480px`) alternativ eine Breite relativ zum Sichtfenster angeben (z. B. `50vw`). Sie können jedoch keinen Prozentsatz als Slot-Breite verwenden. Sie haben möglicherweise bemerkt, dass die letzte Slot-Breite keine Medienbedingung enthält (dies ist der Standard, der gewählt wird, wenn keine der Medienbedingungen zutrifft). Der Browser ignoriert alles nach der ersten passenden Bedingung, daher sollten Sie darauf achten, wie Sie die Medienbedingungen anordnen.

Wenn diese Attribute vorhanden sind, wird der Browser:

1. Die Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmausrichtung und Netzwerkgeschwindigkeit betrachten.
2. Herausfinden, welche Medienbedingung in der `sizes`-Liste die erste ist, die wahr ist.
3. Die für diese Medienabfrage angegebene Slotgröße betrachten.
4. Das Bild laden, das in der `srcset`-Liste auf die Größe des Slots angegeben ist. Wenn es keine genaue Übereinstimmung für die Anzeigengröße gibt, wählt der Browser das erste Bild, das größer ist als die gewählte Slotgröße, und skaliert es herunter, um es anzupassen.

Und das war's! Zu diesem Zeitpunkt, wenn ein unterstützender Browser mit einer Sichtfensterbreite von 480px die Seite lädt, wird die Medienbedingung `(width <= 600px)` wahr sein, und der Browser wählt den `480px` Slot. Das `elva-fairy-480w.jpg` wird geladen, da seine inhärente Breite (`480w`) der Slotgröße am nächsten kommt. Das 800px Bild hat eine Größe von 128KB auf der Festplatte, während die 480px Version nur 63KB hat — eine Einsparung von 65KB. Stellen Sie sich jetzt vor, dies wäre eine Seite mit vielen Bildern. Mit dieser Technik könnte mobile Benutzern erheblich Bandbreite gespart werden.

> [!NOTE]
> Wenn Sie dies mit einem Desktop-Browser testen und der Browser es nicht schafft, die schmaleren Bilder zu laden, wenn Sie das Fenster auf die schmalste Breite eingestellt haben, schauen Sie sich an, was das Sichtfenster ist (Sie können es approximieren, indem Sie im JavaScript-Konsole des Browsers `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben Mindestgrößen, auf die Sie die Fensterbreite reduzieren können, und diese können breiter sein, als Sie denken. Wenn Sie es mit einem mobilen Browser testen, können Sie Tools wie die `about:debugging` Seite von Firefox verwenden, um die geladene Seite auf dem mobilen Gerät mit den Desktop-Entwicklertools zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie den Tab [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) von Firefox DevTools oder das [Netzwerk](https://developer.chrome.com/docs/devtools/network/) Panel von Chrome DevTools verwenden. Für Chrome möchten Sie möglicherweise auch den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder ausgewählt werden.

Ältere Browser, die diese Funktionen nicht unterstützen, werden diese einfach ignorieren. Stattdessen laden diese Browser das Bild, das in dem [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) Attribut angegeben ist, normal.

> [!NOTE]
> Im {{htmlelement("head")}} des oben verlinkten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: Diese zwingt mobile Browser, ihre tatsächliche Sichtfensterbreite für das Laden von Webseiten zu übernehmen (einige mobile Browser lügen über ihre Sichtfensterbreite und laden stattdessen Seiten mit einer größeren Sichtfensterbreite, um die geladene Seite dann zu verkleinern, was für responsive Bilder oder Design nicht sehr hilfreich ist).

### Auflösungsumschaltung: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das mit derselben realen Größe auf Displays angezeigt werden soll, die unterschiedliche Bildschirmauflösungen haben. Sie können eine bessere Benutzererfahrung auf hochauflösenden Displays bieten, indem Sie eine hochauflösende Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie dem Browser erlauben, eine geeignete Auflösung des Bildes auszuwählen, indem Sie `srcset` mit x-Deskriptoren und ohne `sizes` verwenden — eine etwas einfachere Syntax! Ein Beispiel dafür finden Sie in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass auch wenn das Bild immer mit derselben Größe angezeigt wird, Sie auf Displays mit höherer Auflösung mehr Details sehen können.

![Ein Bild eines kleinen Mädchens, das als Fee verkleidet ist, mit einem alten Camera-Film-Effekt auf das Bild angewendet](resolution-example.png)

In diesem Beispiel wird folgendes CSS auf das Bild angewendet, sodass es mit einer Breite von 320 Pixeln auf dem Bildschirm angezeigt wird (auch CSS-Pixel genannt):

```css
img {
  width: 320px;
}
```

In diesem Fall wird `sizes` nicht benötigt — der Browser ermittelt, welche Auflösung das Display hat, auf dem es angezeigt wird, und bietet das am besten geeignete Bild an, das in `srcset` referenziert ist. Wenn das Gerät, das auf die Seite zugreift, ein Standard-/Niedrigauflösungs-Display hat, bei dem ein {{Glossary("device_pixel", "Gerätepixel")}} jedes CSS-Pixel darstellt, wird das Bild `elva-fairy-320w.jpg` geladen (das 1x wird impliziert, sodass Sie es nicht einschließen müssen). Wenn das Gerät eine hohe Auflösung von zwei Gerätepixeln pro CSS-Pixel oder mehr hat, wird das Bild `elva-fairy-640w.jpg` geladen. Das 640px-Bild hat eine Größe von 93KB, während das 320px-Bild nur 39KB hat.

### Art-Direction

Zusammengefasst, das **Art-Direction-Problem** beinhaltet das Ändern des angezeigten Bildes passend zu verschiedenen Bildanzeigegrößen. Zum Beispiel beinhaltet eine Webseite einen großen Landschaftsaufnahme mit einer Person in der Mitte, wenn sie in einem Desktop-Browser angesehen wird. Wenn sie in einem mobilen Browser betrachtet wird, wird dasselbe Bild verkleinert, was die Person im Bild sehr klein macht und schwer zu erkennen. Es wäre wahrscheinlich besser, auf einem Mobilgerät ein kleineres, Porträtbild anzuzeigen, das auf die Person hereinzoomt. Das {{htmlelement("picture")}} Element ermöglicht es uns, genau diese Art von Lösung zu implementieren.

Zurück zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) Beispiel, haben wir ein Bild, das dringend Art-Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns das mit {{htmlelement("picture")}} beheben! Wie [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) ist das `<picture>` Element ein Wrapper, der mehrere {{htmlelement("source")}} Elemente enthält, die verschiedene Quellen bieten, aus denen der Browser wählen kann, gefolgt von dem alles wichtigen {{htmlelement("img")}} Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht folgendermaßen aus:

```html
<picture>
  <source media="(width < 800px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(width >= 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>` Elemente enthalten ein `media` Attribut, das eine Medienbedingung enthält — wie im ersten `srcset` Beispiel sind diese Bedingungen Tests, die entscheiden, welches Bild angezeigt wird — das erste, das wahr zurückgibt, wird angezeigt. In diesem Fall wird das erste `<source>` Elementbild angezeigt, wenn die Sichtfensterbreite weniger als 800px beträgt. Wenn die Sichtfensterbreite 800px oder mehr ist, wird das zweite angezeigt.
- Die `srcset` Attribute enthalten den Pfad zum anzuzeigenden Bild. Genau wie wir es oben mit `<img>` gesehen haben, kann `<source>` ein `srcset` Attribut mit mehreren referenzierten Bildern, sowie ein `sizes` Attribut enthalten. Somit könnten Sie über ein `<picture>` Element mehrere Bilder anbieten, aber dann auch mehrere Auflösungen von jedem. Realistisch gesehen, werden Sie diese Art von Dingen wahrscheinlich nicht sehr oft tun wollen.
- In allen Fällen müssen Sie ein `<img>` Element mit `src` und `alt` direkt vor `</picture>` bereitstellen, ansonsten werden keine Bilder angezeigt. Dies bietet einen Standardfall, der angewendet wird, wenn keine der Medienbedingungen wahr zurückgibt (Sie könnten tatsächlich das zweite `<source>` Element in diesem Beispiel entfernen), und ein Fallback für Browser, die das `<picture>` Element nicht unterstützen.

Dieser Code ermöglicht es uns, ein passendes Bild sowohl auf großen Bildschirm- als auch auf schmalen Bildschirm-Anzeigen darzustellen, wie unten gezeigt:

![Unsere Beispielseite, wie sie auf einem breiten Bildschirm angezeigt wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu erkennen.](picture-element-wide.png)![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm mit dem picture-Element angezeigt wird, das das erste Bild zu einem Porträt näher an den Details wechselt, was es auf einem schmalen Bildschirm viel nützlicher macht](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media` Attribut nur in Art-Direction-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen im `sizes` Attribut an.

### Warum können wir das nicht einfach mit CSS oder JavaScript?

Wenn der Browser anfängt, eine Seite zu laden, beginnt er, jegliche Bilder zu laden (preloaden), bevor der Hauptparser begonnen hat, das CSS und JavaScript der Seite zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten der Seite zu reduzieren, aber er ist nicht hilfreich für responsive Bilder — daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Beispielsweise könnten Sie nicht das {{htmlelement("img")}}-Element laden, dann die Sichtfensterbreite mit JavaScript erkennen und dann die Quelle des Bildes dynamisch auf ein kleineres ändern, wenn gewünscht. Bis dahin wäre das ursprüngliche Bild bereits geladen worden, und Sie würden das kleine Bild auch laden, was in Bezug auf responsive Bilder noch schlimmer wäre.

## Aktives Lernen: Implementieren Ihrer eigenen responsiven Bilder

Für dieses aktive Lernen erwarten wir, dass Sie mutig sind und es größtenteils alleine machen. Wir möchten, dass Sie Ihre eigene geeignete Art-Direction-Schmale Bildschirm/Breite Screenshot mit `<picture>` implementieren, und ein Beispiel für die Auflösungsumschaltung, das `srcset` verwendet.

1. Schreiben Sie etwas HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes breites Landschaftsbild mit irgendeiner Art von Detail darin enthalten. Erstellen Sie eine webgroße Version davon mit einem Grafikeditor, dann schneiden Sie es zu, um einen kleineren Teil zu zeigen, der auf das Detail hereinzoomt, und erstellen Sie ein zweites Bild (ungefähr 480px breit ist gut dafür).
3. Verwenden Sie das `<picture>` Element, um einen Art-Direction-Bildwechsler in die Tat umzusetzen!
4. Erstellen Sie mehrere Bilddateien in verschiedenen Größen, die das gleiche Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Beispiel für Auflösungsumschaltung zu erstellen, entweder um dasselbe Bild in unterschiedlichen Auflösungen abhängig von der Geräteauflösung bereitzustellen oder um verschiedene Bildgrößen abhängig von der Ansichtfensterbreiten bereitzustellen.

## Zusammenfassung

Das war's für responsive Bilder — wir hoffen, Sie hatten Spaß daran, mit diesen neuen Techniken zu experimentieren. Zur Wiederholung, es gibt zwei verschiedene Probleme, die wir hier besprochen haben:

- **Art Direction**: Das Problem, bei dem Sie beschnittene Bilder für verschiedene Layouts bereitstellen möchten — zum Beispiel ein Landschaftsbild, das eine vollständige Szene für ein Desktop-Layout zeigt, und ein Porträtbild, das das Hauptmotiv für ein mobiles Layout vergrößert darstellt. Sie können dieses Problem mit dem {{htmlelement("picture")}} Element lösen.
- **Auflösungsumschaltung**: Das Problem, bei dem Sie kleinere Bilddateien für Geräte mit schmalem Bildschirm bereitstellen möchten, da sie keine so großen Bilder wie Desktop-Displays benötigen — und um Bilder in unterschiedlichen Auflösungen für Bildschirme mit hoher Dichte/niedriger Dichte bereitzustellen. Sie können dieses Problem mithilfe von [Vektorgrafiken](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (SVG-Bilder) und den Attributen [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) mit [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) lösen.

## Siehe auch

- [Lernen: Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Jason Grigsby's exzellente Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: Wenn Sie nur die Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — enthält mehr Erklärungen darüber, wie der Browser herausfindet, welches Bild verwendet werden soll
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}
