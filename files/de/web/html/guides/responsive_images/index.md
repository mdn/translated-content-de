---
title: Verwendung von responsiven Bildern in HTML
short-title: Responsive Bilder
slug: Web/HTML/Guides/Responsive_images
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

In diesem Artikel werden wir das Konzept von responsiven Bildern kennenlernen — Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren — und uns ansehen, welche Tools HTML zur Verfügung stellt, um deren Implementierung zu unterstützen. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern.

## Warum responsive Bilder?

Lassen Sie uns ein typisches Szenario betrachten. Eine typische Webseite kann ein Kopfzeilenbild und einige Inhaltsbilder unterhalb der Kopfzeile enthalten. Das Kopfzeilenbild wird wahrscheinlich die gesamte Breite der Kopfzeile einnehmen, und das Inhaltsbild wird irgendwo innerhalb der Inhaltsspalte passen. Hier ist ein Beispiel:

![Unsere Beispielseite, wie sie auf einem breiten Bildschirm angezeigt wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Gerät mit einem breiten Bildschirm, wie einem Laptop oder Desktop (Sie können [das Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden.) Wir werden in dieser Lektion nicht viel über CSS sprechen, außer zu sagen:

- Der Body-Inhalt wurde auf eine maximale Breite von 1200 Pixeln gesetzt — in Viewports über dieser Breite bleibt der Body bei 1200px und zentriert sich im verfügbaren Raum. In Viewports unter dieser Breite bleibt der Body bei 100% der Breite des Viewports.
- Das Kopfzeilenbild wurde so eingestellt, dass sein Zentrum immer im Zentrum der Kopfzeile bleibt, egal auf welche Breite die Überschrift eingestellt ist. Wenn die Seite auf einem schmaleren Bildschirm angesehen wird, sind die wichtigen Details im Zentrum des Bildes (die Personen) weiterhin sichtbar, und der Überschuss geht auf beiden Seiten verloren. Es ist 200 Pixel hoch.
- Die Inhaltsbilder wurden so eingestellt, dass, wenn das Body-Element kleiner als das Bild wird, die Bilder anfangen zu schrumpfen, sodass sie immer im Body bleiben, anstatt ihn zu überlappen.

Probleme treten jedoch auf, wenn Sie die Seite auf einem Gerät mit einem schmalen Bildschirm betrachten. Die Kopfzeile unten sieht in Ordnung aus, nimmt jedoch auf einem mobilen Gerät viel Bildschirmlänge ein. Und in dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm angezeigt wird; das erste Bild ist so weit geschrumpft, dass es schwer ist, die Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre, eine beschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes zeigt, wenn die Seite auf einem schmalen Bildschirm betrachtet wird. Ein zweites beschnittenes Bild könnte für ein Gerät mit mittlerer Bildschirmbreite, wie ein Tablet, angezeigt werden. Das allgemeine Problem, bei dem Sie in dieser Weise verschiedene beschnittene Bilder für verschiedene Layouts bereitstellen möchten, ist allgemein als das **Art-Direction-Problem** bekannt.

Darüber hinaus ist es nicht notwendig, solch große Bilder auf der Seite einzubetten, wenn sie auf einem mobilen Bildschirm betrachtet wird. Dies kann Bandbreite verschwenden; insbesondere mobile Benutzer möchten keine Bandbreite verschwenden, indem sie ein großes Bild für Desktop-Benutzer herunterladen, wenn ein kleines Bild für ihr Gerät ausreichen würde. Umgekehrt sieht ein kleines {{Glossary("Raster_image", "Rasterbild")}} körnig aus, wenn es größer als seine Originalgröße angezeigt wird (ein Rasterbild hat eine feste Anzahl von Pixeln in der Breite und eine feste Anzahl von Pixeln in der Höhe). Idealerweise würde der Webbrowser des Benutzers mehrere Auflösungen bereitstellen. Der Browser könnte dann die optimale Auflösung basierend auf der Bildschirmgröße des Geräts des Benutzers bestimmen. Dies wird als das **Auflösungswechsel-Problem** bezeichnet.

Um die Sache komplizierter zu machen, besitzen einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als Sie vielleicht erwarten würden, um gut angezeigt zu werden. Dies ist im Wesentlichen dasselbe Problem, aber in einem leicht anderen Kontext.

Sie könnten denken, dass Vektorbilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad — sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie so oft wie möglich verwenden. Allerdings sind sie nicht für alle Bildtypen geeignet. Vektorbilder sind großartig für einfache Grafiken, Muster, Benutzeroberflächenelemente usw., aber es wird sehr komplex, ein vektorbasiertes Bild mit der Art von Detail zu erstellen, die Sie z.B. in einem Foto finden würden. Rasterbildformate wie JPEGs sind besser geeignet für die Art von Bildern, die wir im obigen Beispiel sehen.

Dieses Problem existierte nicht, als das Web in den frühen bis mittleren 90er Jahren zum ersten Mal existierte — damals waren die einzigen existierenden Geräte, um das Web zu durchsuchen, Desktops und Laptops, daher kamen Browser-Ingenieure und Spezifikationsautoren nicht einmal auf die Idee, Lösungen zu implementieren. _Responsive Bildtechnologien_ wurden kürzlich implementiert, um die oben genannten Probleme zu lösen, indem Sie dem Browser mehrere Bilddateien anbieten können, die entweder alle dasselbe zeigen, aber unterschiedliche Pixelmengen enthalten (_Auflösungswechsel_), oder unterschiedliche Bilder, die für verschiedene Platzierungen geeignet sind (_Art Direction_).

> [!NOTE]
> Die neuen Funktionen, die in diesem Artikel besprochen werden — [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)/[`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)/{{htmlelement("picture")}} — werden alle in modernen Desktop- und mobilen Browsern unterstützt.

## Wie erstellen Sie responsive Bilder?

In diesem Abschnitt werden wir uns die beiden oben genannten Probleme ansehen und zeigen, wie sie mit den responsiven Bildfunktionen von HTML gelöst werden können. Sie sollten beachten, dass wir uns auf {{htmlelement("img")}}-Elemente konzentrieren werden, wie sie im Inhaltsbereich des obigen Beispiels gesehen werden — das Bild in der Kopfzeile der Website ist nur zur Dekoration gedacht und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat vermutlich bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden in einem zukünftigen CSS-Modul darüber sprechen.

### Auflösungswechsel: Verschiedene Größen

Also, welches Problem wollen wir mit dem Auflösungswechsel lösen? Wir möchten identische Bildinhalte anzeigen, nur größer oder kleiner abhängig vom Gerät — dies ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das Standard-{{htmlelement("img")}}-Element erlaubt es traditionell nur, den Browser auf eine einzelne Quelldatei zu verweisen:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden — [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) — um mehrere zusätzliche Quellbilder bereitzustellen, zusammen mit Hinweisen, um dem Browser bei der Auswahl des richtigen Bildes zu helfen. Sie finden ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html)-Beispiel auf GitHub (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die `srcset`- und `sizes`-Attribute sehen kompliziert aus, aber sie sind nicht schwer zu verstehen, wenn Sie sie wie oben gezeigt formatieren, mit einem anderen Teil des Attributwertes in jeder Zeile. Jeder Wert enthält eine durch Kommas getrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Lassen Sie uns nun die Inhalte jedes Teils durchgehen:

**`srcset`** definiert die Menge an Bildern, aus denen der Browser wählen kann, und welche Größe jedes Bild hat. Jede Reihe von Bildinformationen wird durch ein Komma von der vorherigen getrennt. Für jede schreiben wir:

1. Einen **Bilddateinamen** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite des Bildes in Pixel** (`480w`) — beachten Sie, dass dies die `w`-Einheit verwendet, nicht `px` wie erwartet. Die {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eines Bildes ist seine tatsächliche Größe, die Sie ermitteln können, indem Sie die Bilddatei auf Ihrem Computer inspizieren (zum Beispiel auf einem Mac können Sie das Bild im Finder auswählen und die Tasten <kbd>Cmd</kbd> + <kbd>I</kbd> drücken, um den Info-Bildschirm aufzurufen).

**`sizes`** definiert eine Reihe von Medienbedingungen (z.B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten zu wählen wäre, wenn bestimmte Medienbedingungen wahr sind — dies sind die Hinweise, von denen wir zuvor gesprochen haben. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(width <= 600px)`) — Sie werden mehr darüber im [CSS-Thema](/de/docs/Learn_web_development/Core/Styling_basics) erfahren, aber für jetzt sagen wir einfach, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir "wenn die Viewport-Breite 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild füllen wird, wenn die Medienbedingung wahr ist (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Beispielsweise können Sie anstelle einer absoluten Breite (zum Beispiel `480px`) eine Breite relativ zum Viewport angeben (zum Beispiel `50vw`). Sie können jedoch keine Prozentangabe als Slot-Breite verwenden. Möglicherweise haben Sie bemerkt, dass die letzte Slot-Breite keine Medienbedingung hat (dies ist der Standard, der gewählt wird, wenn keine der Medienbedingungen wahr ist). Der Browser ignoriert alles nach der ersten übereinstimmenden Bedingung, achten Sie also darauf, wie Sie die Medienbedingungen anordnen.

Also, mit diesen Attributen wird der Browser:

1. Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmorientierung und Netzwerkgeschwindigkeit betrachten.
2. Herausfinden welche Medienbedingung in der `sizes`-Liste die erste ist, die wahr ist.
3. Die für diesen Medienabfrage angegebenen Slotgröße betrachten.
4. Das im `srcset` genannte Bild laden, das dieselbe Größe wie der Slot hat. Wenn es keine genaue Übereinstimmung für die Anzeigegröße gibt, wählt der Browser das erste Bild, das größer als die gewählte Slotgröße ist, und skaliert es herab, um zu passen.

Und das war's! An diesem Punkt, wenn ein unterstützender Browser mit einem Viewport von 480px Breite die Seite lädt, wird die Medienbedingung `(width <= 600px)` wahr sein, und der Browser wählt den `480px` Slot. Das `elva-fairy-480w.jpg` wird geladen, da dessen inhärente Breite (`480w`) am nächsten zur Slotgröße liegt. Das 800px Bild ist 128KB auf der Festplatte, während die 480px Version nur 63KB ist — eine Einsparung von 65KB. Stellen Sie sich vor, dies wäre eine Seite mit vielen Bildern — durch diese Technik könnten mobile Benutzer viel Bandbreite sparen.

> [!NOTE]
> Wenn Sie dies mit einem Desktop-Browser testen und der Browser beim schmalsten Fenster die schmaleren Bilder nicht laden kann, schauen Sie sich die Größe des Viewports an (Sie können dies näherungsweise herausfinden, indem Sie in der JavaScript-Konsole des Browsers `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben minimale Größen, bis zu denen Sie die Fensterbreite reduzieren können, und diese könnten breiter sein, als Sie denken. Wenn Sie es mit einem mobilen Browser testen, können Sie Tools wie die "`about:debugging`"-Seite von Firefox verwenden, um die geladene Seite auf dem Mobilgerät mithilfe der Desktop-Entwicklungstools zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie den [Netzwerk-Monitor von Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder das [Netzwerk-Panel von Chrome DevTools](https://developer.chrome.com/docs/devtools/network/) verwenden. Für Chrome möchten Sie eventuell auch den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder ausgewählt werden.

Ältere Browser, die diese Funktionen nicht unterstützen, ignorieren sie einfach. Stattdessen laden diese Browser das im [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut angegebene Bild wie gewohnt.

> [!NOTE]
> Im {{htmlelement("head")}} des verlinkten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">` : dies zwingt mobile Browser dazu, ihre reale Viewport-Breite zum Laden von Webseiten zu verwenden (einige mobile Browser täuschen über ihre Viewport-Breite und laden stattdessen Seiten in einer größeren Viewport-Breite und verkleinern dann die geladene Seite, was für responsive Bilder oder Design nicht sehr hilfreich ist).

### Auflösungswechsel: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das in gleicher Größe auf Bildschirmen mit unterschiedlicher Bildschirmauflösung angezeigt wird. Sie können eine bessere Benutzererfahrung auf hochauflösenden Bildschirmen bieten, indem Sie eine höher aufgelöste Version des Bildes ausliefern.

Um dies zu erreichen, können Sie dem Browser erlauben, ein Bild mit geeigneter Auflösung auszuwählen, indem Sie `srcset` mit x-Deskriptoren und ohne `sizes` verwenden — eine etwas einfachere Syntax! Ein Beispiel dafür finden Sie in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass das Bild zwar immer mit der gleichen Größe angezeigt wird, jedoch auf hochauflösenden Bildschirmen mehr Details zu sehen sind.

![Ein Bild eines kleinen Mädchens, das als Fee verkleidet ist, mit einem alten Kamera-Filmeffekt, der auf das Bild angewendet wurde](resolution-example.png)

In diesem Beispiel wird das folgende CSS auf das Bild angewendet, sodass es eine Breite von 320 Pixel auf dem Bildschirm hat (auch CSS-Pixel genannt):

```css
img {
  width: 320px;
}
```

In diesem Fall wird `sizes` nicht benötigt — der Browser arbeitet heraus, welche Auflösung das Display hat, auf dem es angezeigt wird, und liefert das passendste im `srcset` referenzierte Bild. Wenn das Gerät, auf das die Seite zugreift, ein Standard-/Niedrigauflösungsdisplay hat, bei dem ein {{Glossary("device_pixel", "Gerätepixel")}} jedem CSS-Pixel entspricht, wird das `elva-fairy-320w.jpg` Bild geladen (1x ist impliziert, Sie müssen es nicht einschließen.) Wenn das Gerät eine hohe Auflösung von zwei Geräte-Pixel pro CSS-Pixel oder mehr hat, wird das `elva-fairy-640w.jpg` Bild geladen. Das 640px Bild hat eine Größe von 93KB, das 320px-Bild nur 39KB.

### Art Direction

Zusammenfassend: Das **Art-Direction-Problem** besteht darin, das angezeigte Bild an die verschiedenen Bildanzeigegrößen anzupassen. Zum Beispiel enthält eine Webseite eine große Landschaftsaufnahme mit einer Person in der Mitte, wenn sie in einem Desktop-Browser betrachtet wird. Wenn sie in einem mobilen Browser angesehen wird, wird dieses Bild verkleinert, wodurch die Person im Bild sehr klein und schwer zu erkennen ist. Es wäre wahrscheinlich besser, auf mobilen Geräten ein kleineres, Hochformatbild anzuzeigen, das auf die Person zoomt. Mit dem {{htmlelement("picture")}}-Element können Sie genau diese Art von Lösung implementieren.

Zurück zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) Beispiel, haben wir ein Bild, das dringend Art Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns das mit {{htmlelement("picture")}} beheben! Wie [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio), ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die verschiedene Quellen für den Browser zur Auswahl bereitstellen, gefolgt von dem wichtigen {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht so aus:

```html
<picture>
  <source media="(width < 800px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(width >= 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält — wie im ersten `srcset`-Beispiel sind dies Bedingungen, die entscheiden, welches Bild angezeigt wird — das erste, das wahr wird, wird angezeigt. In diesem Fall, wenn die Viewport-Breite weniger als 800px beträgt, wird das Bild des ersten `<source>`-Elements angezeigt. Wenn die Viewport-Breite 800px oder mehr beträgt, wird das zweite angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zum anzuzeigenden Bild. Genau wie wir es mit `<img>` oben gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut haben. Sie könnten also über ein `<picture>`-Element mehrere Bilder anbieten, aber dann auch mehrere Auflösungen von jedem. Realistisch gesehen, möchten Sie dies vermutlich nicht sehr oft tun.
- In allen Fällen müssen Sie ein `<img>`-Element mit `src` und `alt` direkt vor `</picture>` bereitstellen, sonst erscheinen keine Bilder. Dadurch wird ein Standardfall bereitgestellt, der gilt, wenn keine der Medienbedingungen wahr ist (Sie könnten eigentlich sogar das zweite `<source>`-Element in diesem Beispiel entfernen), und eine Rückfallebene für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es uns, ein geeignetes Bild sowohl auf Breitbild- als auch auf schmalen Bildschirmen anzuzeigen, wie unten gezeigt:

![Unsere Beispielseite, wie sie auf einem breiten Bildschirm angezeigt wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm mit dem Bild-Element verwendet wird, um das erste Bild in ein Hochformat-Nahaufnahme des Details zu wechseln, was es auf einem schmalen Bildschirm viel nützlicher macht.](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Art-Direction-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen innerhalb des `sizes`-Attributs an.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser anfängt, eine Seite zu laden, beginnt er damit, (vor-)beladene Bilder zu laden, bevor der Hauptparser begonnen hat, das CSS und JavaScript der Seite zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten von Seiten zu reduzieren, aber er ist nicht hilfreich für responsives Bilder — daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Zum Beispiel könnten Sie nicht das {{htmlelement("img")}}-Element laden, dann die Viewport-Breite mit JavaScript erkennen und dann dynamisch die Bildquelle zu einem kleineren Bild ändern, wenn gewünscht. Zu diesem Zeitpunkt wäre das ursprüngliche Bild bereits geladen, und Sie würden auch das kleine Bild laden, was in Bezug auf responsive Bilder noch schlimmer ist.

## Implementieren Sie Ihre eigenen responsiven Bilder

In dieser Übung erwarten wir, dass Sie mutig sind und es größtenteils alleine tun. Wir möchten, dass Sie Ihr eigenes geeignetes Art-Direction-Bild für schmale/breite Bildschirme mit `<picture>` implementieren und ein Beispiel für einen Auflösungswechsel, der `srcset` verwendet.

1. Schreiben Sie etwas HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes Breitbildlandschaftsbild mit irgendeiner Art Detail. Erstellen Sie eine Webversion davon mit einem Grafikeditor, dann schneiden Sie es zu, um einen kleineren Teil zu zeigen, der auf die Detailansicht zoomt, und erstellen Sie ein zweites Bild (etwa 480px breit ist gut dafür).
3. Verwenden Sie das `<picture>`-Element, um einen Art-Direction-Bildwechsler zu implementieren!
4. Erstellen Sie mehrere Bilddateien in verschiedenen Größen, die dasselbe Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Beispiel für einen Auflösungswechsler zu erstellen, entweder um auflösungsabhängige Bilder zu liefern, die je nach Gerätesauflösung angezeigt werden, oder um Bilder unterschiedlicher Größe abhängig von der Viewport-Breite zu liefern.

## Zusammenfassung

Das war's über responsive Bilder — wir hoffen, Sie hatten Spaß beim Spielen mit diesen neuen Techniken. Zusammenfassend gibt es zwei verschiedene Probleme, die wir hier besprochen haben:

- **Art Direction**: Das Problem, bei dem Sie beschnittene Bilder für verschiedene Layouts bereitstellen möchten — zum Beispiel ein Landschaftsbild, das eine ganze Szene für ein Desktop-Layout zeigt, und ein Hochformatbild, das das Hauptmotiv herangezoomt für ein mobiles Layout anzeigt. Dieses Problem können Sie mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungswechsel**: Das Problem, bei dem Sie kleinere Bilddateien an Geräte mit schmalem Bildschirm liefern möchten, da sie keine riesigen Bilder wie Desktop-Displays benötigen — und um Bilder in unterschiedlichen Auflösungen an hochdichte/niedrigdichte Bildschirme zu liefern. Dieses Problem können Sie mit [Vektorgrafiken](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (SVG-Bilder) und den [srcset](/de/docs/Web/HTML/Reference/Elements/img#srcset) mit [sizes](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attributen lösen.

## Siehe auch

- [Lernen: Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Jason Grigsby's exzellente Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Bilder: Wenn Sie nur die Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — beinhaltet mehr Erklärung darüber, wie der Browser herausfindet, welches Bild zu verwenden ist
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}
