---
title: Verwendung von responsiven Bildern in HTML
short-title: Responsive Bilder
slug: Web/HTML/Guides/Responsive_images
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen – Bilder, die auf Geräten mit unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren – und schauen uns an, welche Werkzeuge HTML bietet, um sie zu implementieren. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern.

## Warum responsive Bilder?

Untersuchen wir ein typisches Szenario. Eine typische Website kann ein Bild im Header und einige Inhaltsbilder unterhalb des Headers enthalten. Das Header-Bild wird wahrscheinlich die gesamte Breite des Headers einnehmen, während das Inhaltsbild irgendwo innerhalb der Content-Spalte passen wird. Hier ist ein Beispiel:

![Unsere Beispielseite, wie sie auf einem breiten Bildschirm angesehen wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie einem Laptop oder Desktop (Sie können das [Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden.) Wir werden in dieser Lektion nicht viel über das CSS sprechen, außer dass:

- Der Körperinhalt auf eine maximale Breite von 1200 Pixeln eingestellt wurde – in Ansichten über dieser Breite bleibt der Körper bei 1200px und zentriert sich im verfügbaren Raum. In Ansichten unter dieser Breite bleibt der Körper bei 100 % der Breite der Ansicht.
- Das Header-Bild wurde so eingestellt, dass sein Zentrum immer im Zentrum des Headers bleibt, egal auf welche Breite der Header eingestellt ist. Wenn die Seite auf einem schmaleren Bildschirm angezeigt wird, können die wichtigen Details in der Bildmitte (die Personen) weiterhin gesehen werden, und der Überschuss geht an beiden Seiten verloren. Es ist 200px hoch.
- Die Inhaltsbilder wurden so eingestellt, dass sie anfangen zu schrumpfen, wenn das Körper-Element kleiner als das Bild wird, damit sie immer innerhalb des Körpers bleiben und nicht überlaufen.

Allerdings treten Probleme auf, wenn Sie die Seite auf einem Gerät mit schmalem Bildschirm anzeigen. Der Header unten sieht in Ordnung aus, aber er beginnt, viel von der Bildschirmhöhe für ein mobiles Gerät einzunehmen. Und in dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm angesehen wird; das erste Bild ist so geschrumpft, dass es schwer ist, die Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre es, eine beschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes zeigt, wenn die Seite auf einem schmalen Bildschirm angezeigt wird. Ein zweites beschnittenes Bild könnte für ein Medium-Bildschirmgerät wie ein Tablet angezeigt werden. Das allgemeine Problem, bei dem Sie in dieser Weise unterschiedliche beschnittene Bilder für verschiedene Layouts bereitstellen möchten, ist allgemein als **Art Direction Problem** bekannt.

Darüber hinaus ist es nicht notwendig, solche großen Bilder in die Seite einzubetten, wenn sie auf einem mobilen Bildschirm angezeigt wird. Dies kann Bandbreite verschwenden; insbesondere möchten mobile Benutzer keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Benutzer gedacht ist, wenn ein kleines Bild für ihr Gerät ausreichend wäre. Im Gegenteil, ein kleines {{Glossary("Raster_image", "Rasterbild")}} beginnt körnig zu wirken, wenn es größer als seine ursprüngliche Größe angezeigt wird (ein Rasterbild hat eine feste Anzahl von Pixeln in der Breite und in der Höhe). Idealerweise wären dem Webbrowser des Benutzers mehrere Auflösungen verfügbar. Der Browser könnte dann die optimale Auflösung basierend auf der Bildschirmgröße des Geräts laden. Dies wird als **Resolution Switching Problem** bezeichnet.

Um die Sache zu komplizieren, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als Sie erwarten würden, um eine gute Darstellung zu erzielen. Dies ist im Wesentlichen dasselbe Problem, jedoch in einem etwas anderen Kontext.

Vielleicht denken Sie, dass Vektorbilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad – sie sind klein in der Dateigröße und lassen sich gut skalieren, und Sie sollten sie überall dort verwenden, wo es möglich ist. Allerdings sind sie nicht für alle Bildtypen geeignet. Vektorbilder sind großartig für einfache Grafiken, Muster, Interface-Elemente usw., aber es wird sehr komplex, ein vektor-basiertes Bild mit der Art von Details zu erstellen, die Sie beispielsweise in einem Foto finden würden. Rasterbildformate wie JPEGs sind besser geeignet für die Art von Bildern, die wir im obigen Beispiel sehen.

Diese Art von Problem existierte nicht, als das Web in den frühen bis mittleren 90er Jahren erstmals existierte – damals waren die einzigen existierenden Geräte zur Webnavigation Desktops und Laptops, also dachten Browseringenieure und Spec-Schreiber nicht einmal daran, Lösungen zu implementieren. _Responsive Bildtechnologien_ wurden kürzlich implementiert, um die oben genannten Probleme zu lösen, indem sie Ihnen ermöglichen, dem Browser mehrere Bilddateien anzubieten, entweder alle sehen sie das Gleiche, enthalten aber unterschiedliche Pixelanzahlen (_Resolution Switching_), oder unterschiedliche Bilder, die für unterschiedliche Platzzuweisungen geeignet sind (_Art Direction_).

> [!NOTE]
> Die in diesem Artikel besprochenen neuen Features — [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)/[`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)/{{htmlelement("picture")}} — werden alle in modernen Desktop- und mobilen Browsern unterstützt.

## Wie erstellen Sie responsive Bilder?

In diesem Abschnitt werden wir uns die beiden oben illustrierten Probleme ansehen und zeigen, wie man sie mit den Funktionen von HTML für responsive Bilder löst. Sie sollten beachten, dass wir uns für diesen Abschnitt auf {{htmlelement("img")}}-Elemente konzentrieren werden, wie sie im Inhaltsbereich des obigen Beispiels zu sehen sind – das Bild im Site-Header dient nur zur Dekoration und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat vermutlich bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden in einem zukünftigen CSS-Modul darüber sprechen.

### Resolution Switching: Verschiedene Größen

Was ist also das Problem, das wir mit Resolution Switching lösen wollen? Wir möchten identische Bildinhalte anzeigen, nur größer oder kleiner, abhängig vom Gerät – das ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das Standard-{{htmlelement("img")}} Element lässt traditionell nur zu, dass der Browser auf eine einzige Quelldatei zeigt:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden – [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) – um mehrere zusätzliche Quellbilder zusammen mit Hinweisen bereitzustellen, die dem Browser helfen, das richtige auszuwählen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html)-Beispiel auf GitHub sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die `srcset` und `sizes` Attribute sehen kompliziert aus, aber sie sind nicht schwer zu verstehen, wenn Sie sie so formatieren, wie oben gezeigt, mit einem anderen Teil des Attributwerts auf jeder Zeile. Jeder Wert enthält eine durch Kommas getrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Lassen Sie uns nun die Inhalte jedes Teils durchgehen:

**`srcset`** definiert den Satz von Bildern, aus denen wir dem Browser die Auswahl ermöglichen und welche Größe jedes Bild hat. Jedes Set von Bildinformationen wird durch ein Komma vom vorherigen getrennt. Für jedes schreiben wir:

1. Ein **Bilddateiname** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite des Bildes in Pixeln** (`480w`) – beachten Sie, dass dies die Einheit `w` verwendet und nicht `px`, wie Sie vielleicht erwarten. Die {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eines Bildes ist seine tatsächliche Größe, die ermittelt werden kann, indem die Bilddatei auf Ihrem Computer inspiziert wird (zum Beispiel können Sie auf einem Mac das Bild im Finder markieren und <kbd>Cmd</kbd> + <kbd>I</kbd> drücken, um den Informationsbildschirm anzuzeigen).

**`sizes`** definiert eine Reihe von Medienbedingungen (z. B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten gewählt werden sollte, wenn bestimmte Medienbedingungen zutreffen – dies sind die Hinweise, über die wir zuvor gesprochen haben. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(width <= 600px)`) – Sie werden mehr darüber im [CSS-Thema](/de/docs/Learn_web_development/Core/Styling_basics) lernen, aber für den Moment lassen Sie uns sagen, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem der Bildschirm sich befinden kann. In diesem Fall sagen wir: "wenn die Breite der Ansicht 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Schlitzes**, den das Bild füllen wird, wenn die Medienbedingung zutrifft (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/Reference/Values/length) verwenden. Zum Beispiel können Sie anstelle einer absoluten Breite (zum Beispiel `480px`) eine Breite relativ zur Ansicht bereitstellen (zum Beispiel `50vw`). Sie können jedoch keine Prozentangaben als Slot-Breite verwenden. Vielleicht haben Sie bemerkt, dass die letzte Slot-Breite keine Medienbedingung hat (dies ist der Standard, der gewählt wird, wenn keine der Medienbedingungen zutrifft). Der Browser ignoriert alles nach der ersten passenden Bedingung, also achten Sie darauf, wie Sie die Medienbedingungen anordnen.

Mit diesen Attributen an Ort und Stelle wird der Browser:

1. Die Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmausrichtung und Netzwerkgschwindigkeit betrachten.
2. Herausfinden, welche Medienbedingung in der `sizes`-Liste die erste ist, die zutrifft.
3. Die dem Medienquery zugewiesene Slot-Größe betrachten.
4. Das Bild aus der `srcset`-Liste laden, das die gleiche Größe wie der Slot hat. Wenn es keine exakte Übereinstimmung für die Anzeigengröße gibt, wählt der Browser das erste Bild, das größer als die gewählte Slot-Größe ist, und skaliert es nach unten, um es anzupassen.

Und das war's! An diesem Punkt, wenn ein unterstützender Browser mit einer Ansichtsbreite von 480px die Seite lädt, wird die Medienbedingung `(width <= 600px)` zutreffen, und der Browser wählt den `480px` Slot. Das `elva-fairy-480w.jpg` wird geladen, da seine inhärente Breite (`480w`) am nächsten zur Slot-Größe liegt. Das 800px große Bild ist 128KB auf der Festplatte, während die 480px-Version nur 63KB beträgt – eine Ersparnis von 65KB. Stellen Sie sich nun vor, dies wäre eine Seite mit vielen Bildern. Diese Technik könnte mobilen Benutzern eine Menge Bandbreite sparen.

> [!NOTE]
> Beim Testen mit einem Desktop-Browser, wenn der Browser es nicht schafft, die schmaleren Bilder zu laden, wenn das Fenster auf die schmalste Breite eingestellt ist, werfen Sie einen Blick auf die tatsächliche Breite der Ansicht (Sie können sie approximativ ermitteln, indem Sie in der JavaScript-Konsole des Browsers `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben unterschiedliche Mindestgrößen, auf die Sie die Fensterbreite reduzieren können, und sie könnten breiter sein, als Sie denken. Beim Testen mit einem mobilen Browser können Sie Tools wie die Firefox 'about:debugging'-Seite verwenden, um die geladene Seite auf dem mobilen Gerät mit den Desktop-Entwicklertools zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie das [Netzwerk-Monitor-Tool](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) von Firefox DevTools oder das [Netzwerk-Panel](https://developer.chrome.com/docs/devtools/network/) von Chrome DevTools verwenden. Für Chrome möchten Sie möglicherweise auch den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder ausgewählt werden.

Ältere Browser, die diese Funktionen nicht unterstützen, ignorieren sie einfach. Stattdessen laden diese Browser das Bild, das im [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut angegeben ist, wie gewohnt.

> [!NOTE]
> Im {{htmlelement("head")}} des oben genannten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: Dies zwingt mobile Browser, ihre tatsächliche Ansichtsbreite zum Laden von Webseiten anzunehmen (einige mobile Browser geben eine falsche Breitenangabe ihrer Ansicht an und laden stattdessen Seiten mit einer größeren Breite und verkleinern dann die geladene Seite, was nicht sehr hilfreich für responsive Bilder oder Design ist).

### Resolution Switching: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das in derselben realen Größe auf Anzeigen mit unterschiedlichen Bildschirmauflösungen angezeigt wird. Sie können auf hochauflösenden Displays ein besseres Nutzererlebnis bieten, indem Sie eine hochauflösende Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie dem Browser erlauben, ein Bild mit einer geeigneten Auflösung auszuwählen, indem Sie `srcset` mit x-Deskriptoren und ohne `sizes` verwenden — eine etwas einfachere Syntax! Ein Beispiel dafür finden Sie in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass obwohl das Bild immer in der gleichen Größe dargestellt wird, auf hochauflösenden Bildschirmen mehr Details zu sehen sind.

![Ein Bild eines kleinen Mädchens, das als Fee verkleidet ist, mit einem alten Kamera-Film-Effekt, der auf das Bild angewendet wird](resolution-example.png)

In diesem Beispiel wird das folgende CSS auf das Bild angewendet, sodass es eine Breite von 320 Pixeln auf dem Bildschirm hat (auch als CSS-Pixel bezeichnet):

```css
img {
  width: 320px;
}
```

In diesem Fall ist `sizes` nicht erforderlich – der Browser ermittelt, welche Auflösung das Display hat, auf dem es angezeigt wird, und lädt das passendste Bild aus dem `srcset`. Wenn das Gerät, das auf die Seite zugreift, ein Standard-/niedrigauflösendes Display hat, bei dem ein {{Glossary("device_pixel", "Geräte-Pixel")}} jedem CSS-Pixel entspricht, wird das Bild `elva-fairy-320w.jpg` geladen (die 1x ist impliziert, daher müssen Sie sie nicht angeben). Wenn das Gerät eine hohe Auflösung von zwei Geräte-Pixeln pro CSS-Pixel oder mehr hat, wird das Bild `elva-fairy-640w.jpg` geladen. Das 640px große Bild ist 93KB, während das 320px große Bild nur 39KB beträgt.

### Art Direction

Um es zusammenzufassen, das **Art Direction Problem** beinhaltet den Wunsch, das angezeigte Bild an unterschiedliche Bildgrößen anzupassen. Zum Beispiel eine Webseite, die bei Betrachtung in einem Desktop-Browser eine große Landschaftsaufnahme mit einer Person in der Mitte enthält. Wenn sie in einem mobilen Browser betrachtet wird, wird dasselbe Bild verkleinert, wodurch die Person im Bild sehr klein und schwer zu erkennen ist. Es wäre wahrscheinlich besser, auf mobilen Geräten ein kleineres Hochformatbild anzuzeigen, das auf die Person heranzoomt. Das {{htmlelement("picture")}} Element ermöglicht es uns, genau diese Art von Lösung zu implementieren.

Zurück zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html)-Beispiel, haben wir ein Bild, das dringend eine Art Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns das mit {{htmlelement("picture")}}! Wie [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio), ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die verschiedene Quellen für den Browser bereitstellen, aus denen ausgewählt werden kann, gefolgt von dem allzu wichtigen {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht folgendermaßen aus:

```html
<picture>
  <source media="(width < 800px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(width >= 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält – wie bei dem ersten `srcset`-Beispiel sind dies Bedingungen, die entscheiden, welches Bild angezeigt wird – das erste, das wahr ist, wird angezeigt. In diesem Fall wird, wenn die Breite des Ansichtsfensters kleiner als 800px ist, das Bild des ersten `<source>`-Elements angezeigt. Wenn die Breite des Ansichtsfensters 800px oder mehr beträgt, wird das zweite angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zum anzuzeigenden Bild. Genau wie wir es bei `<img>` oben gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut enthalten. Sie könnten also mehrere Bilder über ein `<picture>`-Element anbieten, aber dann auch mehrere Auflösungen für jedes Bild bereitstellen. Realistischerweise möchten Sie diese Art von Sache wahrscheinlich nicht sehr oft tun.
- In allen Fällen müssen Sie ein `<img>`-Element mit `src` und `alt` direkt vor `</picture>` bereitstellen, ansonsten werden keine Bilder angezeigt. Dies bietet einen Standardfall, der gilt, wenn keine der Medienbedingungen wahr ist (Sie könnten tatsächlich das zweite `<source>`-Element in diesem Beispiel entfernen), und einen Fallback für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es uns, ein geeignetes Bild sowohl auf Breitbild- als auch auf Schmalbild-Anzeigen darzustellen, wie unten gezeigt:

![Unsere Beispielseite, wie sie auf einem breiten Bildschirm angesehen wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm angesehen wird, wobei das Bild-Element verwendet wird, um das erste Bild in ein Hochformat für ein Close-up der Details zu ändern, was es auf einem schmalen Bildschirm viel nützlicher macht](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Art Direction Szenarien verwenden; wenn Sie `media` verwenden, sollten Sie keine Medienbedingungen innerhalb des `sizes`-Attributs anbieten.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser beginnt, eine Seite zu laden, beginnt er, alle Bilder herunterzuladen (vorladen), bevor der Hauptparser begonnen hat, das CSS und JavaScript der Seite zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten der Seite zu reduzieren, aber er ist nicht hilfreich für responsive Bilder – daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Sie könnten zum Beispiel nicht das {{htmlelement("img")}}-Element laden, dann die Breite des Ansichtsfensters mit JavaScript erkennen und dann dynamisch das Quellbild in ein kleineres ändern, falls gewünscht. Zu diesem Zeitpunkt wäre das Originalbild bereits geladen, und Sie würden zusätzlich das kleine Bild laden, was in Bezug auf responsive Bilder sogar noch schlechter wäre.

## Implementierung Ihrer eigenen responsiven Bilder

In dieser Übung erwarten wir, dass Sie mutig sind und es größtenteils alleine machen. Wir möchten, dass Sie Ihr eigenes geeignetes Art-Directed Narrow-Screen-/Wide-Screen-Bild mit `<picture>` implementieren und ein Resolution Switching-Beispiel, das `srcset` verwendet.

1. Schreiben Sie ein HTML-Dokument, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes Breitbild-Landschaftsbild mit einer Art von Detail darin. Erstellen Sie eine Webgröße davon mit einem Grafikeditor, dann schneiden Sie es aus, um ein kleineres Bild zu zeigen, das auf das Detail heranzoomt, und erstellen Sie ein zweites Bild (etwa 480px breit ist hierfür geeignet).
3. Verwenden Sie das `<picture>`-Element, um einen Art-Directed Bilderwechsler zu implementieren!
4. Erstellen Sie mehrere Bilddateien unterschiedlicher Größen, die jeweils dasselbe Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Resolution-Switching-Beispiel zu erstellen, entweder um dasselbe große Bild in unterschiedlichen Auflösungen je nach Geräteauflösung zu bedienen oder um verschiedene Bildgrößen je nach Ansichtbreiten anzubieten.

## Zusammenfassung

Das war's für responsive Bilder – wir hoffen, Sie hatten Spaß beim Ausprobieren dieser neuen Techniken. Zur Zusammenfassung gibt es zwei unterschiedliche Probleme, die wir hier besprochen haben:

- **Art Direction**: Das Problem, bei dem Sie für unterschiedliche Layouts beschnittene Bilder bereitstellen möchten – zum Beispiel ein Landschaftsbild, das eine vollständige Szene für ein Desktop-Layout zeigt, und ein Hochformatbild, das das Hauptmotiv herangezoomt für ein mobiles Layout zeigt. Sie können dieses Problem mit dem {{htmlelement("picture")}}-Element lösen.
- **Resolution Switching**: Das Problem, bei dem Sie kleinere Bilddateien an schmalbildschrimige Geräte ausliefern möchten, da sie keine riesigen Bilder wie Desktop-Displays benötigen – und an hochdichte/niedrigdichte Bildschirme unterschiedliche Auflösungsbilder ausliefern möchten. Sie können dieses Problem mit [Vektorgrafiken](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (SVG-Bilder) und den [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) mit [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attributen lösen.

## Siehe auch

- [Lernen: Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Jason Grigsby's hervorragende Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: If you're just changing resolutions, use srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) – enthält mehr Erklärungen darüber, wie der Browser herausfindet, welche Bilder verwendet werden sollen
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}
