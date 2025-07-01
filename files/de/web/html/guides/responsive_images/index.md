---
title: Verwenden von responsiven Bildern in HTML
short-title: Responsive Bilder
slug: Web/HTML/Guides/Responsive_images
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{HTMLSidebar}}

In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen – Bilder, die auf Geräten mit unterschiedlich großen Bildschirmen, Auflösungen und anderen Merkmalen gut funktionieren – und betrachten, welche Werkzeuge HTML bereitstellt, um diese zu implementieren. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern.

## Warum responsive Bilder?

Untersuchen wir ein typisches Szenario. Eine typische Website könnte ein Headerbild und einige Inhaltsbilder unter dem Header enthalten. Das Headerbild wird wahrscheinlich die gesamte Breite des Headers einnehmen, und das Inhaltsbild wird irgendwo innerhalb der Inhaltskolumne passen. Hier ist ein Beispiel:

![Unsere Beispielseite, wie sie auf einem breiten Bildschirm betrachtet wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie einem Laptop oder Desktop (Sie können [das Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden). Wir werden das CSS in dieser Lektion nicht viel besprechen, außer zu sagen, dass:

- Der Hauptinhalt auf eine maximale Breite von 1200 Pixeln eingestellt wurde – in Ansichten über dieser Breite bleibt der Hauptteil bei 1200px und zentriert sich im verfügbaren Raum. In Ansichten unter dieser Breite bleibt der Hauptteil bei 100 % der Breite der Ansicht.
- Das Headerbild wurde so eingestellt, dass sein Zentrum immer im Zentrum des Headers bleibt, egal welche Breite der Header hat. Wenn die Seite auf einem schmaleren Bildschirm angezeigt wird, kann man das wichtige Detail in der Mitte des Bildes (die Personen) immer noch sehen, und der Überschuss geht an den Rändern verloren. Es ist 200px hoch.
- Die Inhaltsbilder wurden so eingestellt, dass sie anfangen zu schrumpfen, wenn das Körper-Element kleiner wird als das Bild, sodass sie immer im Körper bleiben und nicht darüber hinausgehen.

Es treten jedoch Probleme auf, wenn Sie die Seite auf einem Gerät mit schmalem Bildschirm anzeigen. Das folgende Headerbild sieht in Ordnung aus, aber es nimmt für ein mobiles Gerät viel Bildschirmhöhe ein. Und bei dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm betrachtet wird; das erste Bild ist so geschrumpft, dass es schwierig ist, die Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre es, eine beschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes zeigt, wenn die Seite auf einem schmalen Bildschirm angezeigt wird. Ein zweites beschnittenes Bild könnte für ein Gerät mit mittlerer Breite, wie ein Tablet, angezeigt werden. Das allgemeine Problem, bei dem Sie auf diese Weise unterschiedliche beschnittene Bilder für verschiedene Layouts bereitstellen möchten, ist allgemein als **Art-Direction-Problem** bekannt.

Außerdem ist es nicht notwendig, so große Bilder in die Seite einzubetten, wenn sie auf einem mobilen Bildschirm angezeigt wird. Dies kann zu Bandbreitenverschwendung führen; insbesondere mobile Benutzer möchten keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Benutzer gedacht ist, wenn ein kleines Bild für ihr Gerät ausreichen würde. Im Gegensatz dazu sieht ein kleines {{Glossary("Raster_image", "Rasterbild")}} körnig aus, wenn es größer als seine ursprüngliche Größe dargestellt wird (ein Rasterbild hat eine feste Anzahl von Pixeln in der Breite und in der Höhe). Idealerweise sollten dem Webbrowser des Benutzers mehrere Auflösungen zur Verfügung gestellt werden. Der Browser könnte dann die optimale Auflösung basierend auf der Bildschirmgröße des Benutzergeräts bestimmen. Dies wird als **Auflösungsumschaltungsproblem** bezeichnet.

Um die Sache komplizierter zu machen, haben einige Geräte Hochauflösungsbildschirme, die größere Bilder benötigen, als Sie vielleicht erwarten, um gut dargestellt zu werden. Dies ist im Wesentlichen dasselbe Problem, jedoch in einem etwas anderen Kontext.

Sie könnten denken, dass Vektorbilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad - sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie überall verwenden, wo es möglich ist. Sie sind jedoch nicht für alle Bildtypen geeignet. Vektorbilder sind großartig für einfache Grafiken, Muster, Interface-Elemente usw., aber es wird sehr komplex, ein vektorbasiertes Bild mit der Art von Detail zu erstellen, die Sie beispielsweise in einem Foto finden würden. Rasterbildformate wie JPEGs eignen sich besser für die Art von Bildern, die wir im obigen Beispiel sehen.

Solche Probleme existierten nicht, als das Web in den frühen bis mittleren 90er Jahren erstmals existierte – damals waren die einzigen vorhandenen Geräte zum Surfen im Web Desktops und Laptops, daher dachten Browser-Entwickler und Spezifikationsautoren nicht einmal daran, Lösungen zu implementieren. _Responsive Bildtechnologien_ wurden kürzlich implementiert, um die oben genannten Probleme zu lösen, indem Sie dem Browser mehrere Bilddateien anbieten, die entweder dasselbe zeigen, aber unterschiedliche Pixelzahlen enthalten (_Auflösungsumschaltung_), oder unterschiedliche Bilder für verschiedene Platzierungsanforderungen (_Art-Direction_).

> [!NOTE]
> Die in diesem Artikel besprochenen neuen Funktionen – [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)/[`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)/{{htmlelement("picture")}} – werden alle von modernen Desktop- und mobilen Browsern unterstützt.

## Wie erstellt man responsive Bilder?

In diesem Abschnitt betrachten wir die oben illustrierten zwei Probleme und zeigen, wie man sie mit den responsiven Bildfunktionen von HTML löst. Sie sollten beachten, dass wir uns auf {{htmlelement("img")}}-Elemente für diesen Abschnitt konzentrieren werden, wie sie im Inhaltsbereich des obigen Beispiels zu sehen sind – das Bild im Seitenkopf dient nur zur Dekoration und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat in der Regel bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden in einem zukünftigen CSS-Modul darüber sprechen.

### Auflösungsumschaltung: Verschiedene Größen

Was ist also das Problem, das wir mit der Auflösungsumschaltung lösen wollen? Wir möchten identische Bildinhalte anzeigen, nur größer oder kleiner, abhängig vom Gerät – dies ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das standardmäßige {{htmlelement("img")}}-Element lässt Sie traditionell nur die Quelle auf eine einzige Datei verweisen:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden – [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) – um mehrere zusätzliche Quellbilder zusammen mit Hinweisen bereitzustellen, die dem Browser helfen, das richtige auszuwählen. Ein Beispiel dafür können Sie in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) Beispiel auf GitHub sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die `srcset`- und `sizes`-Attribute sehen kompliziert aus, aber sie sind nicht allzu schwer zu verstehen, wenn Sie sie wie oben gezeigt formatieren, mit einem anderen Teil des Attributwerts in jeder Zeile. Jeder Wert enthält eine kommagetrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Lassen Sie uns die Inhalte jedes einzelnen durchgehen:

**`srcset`** definiert die Menge von Bildern, die wir dem Browser zur Auswahl geben, und welche Größe jedes Bild hat. Jedes Set von Bildinformationen wird durch ein Komma vom vorhergehenden getrennt. Für jedes schreiben wir:

1. Einen **Bilddateinamen** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite des Bildes in Pixeln** (`480w`) – beachten Sie, dass dies die `w`-Einheit verwendet, nicht `px`, wie Sie vielleicht erwarten würden. Die {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eines Bildes ist seine tatsächliche Größe, die durch die Überprüfung der Bilddatei auf Ihrem Computer gefunden werden kann (zum Beispiel können Sie auf einem Mac das Bild im Finder auswählen und <kbd>Befehl</kbd> + <kbd>I</kbd> drücken, um den Informationsbildschirm zu öffnen).

**`sizes`** definiert eine Reihe von Medienbedingungen (z.B. Bildschirmbreiten) und zeigt an, welche Bildgröße am besten gewählt werden sollte, wenn bestimmte Medienbedingungen zutreffen – dies sind die Hinweise, über die wir zuvor gesprochen haben. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(width <= 600px)`) – Sie werden mehr darüber im [CSS-Thema](/de/docs/Learn_web_development/Core/Styling_basics) erfahren, aber lassen Sie uns fürs Erste sagen, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir "wenn die Ansichtsbreite 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild füllen wird, wenn die Medienbedingung zutrifft (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Zum Beispiel können Sie anstelle einer absoluten Breite (z.B. `480px`) eine Breite relativ zur Ansicht angeben (z.B. `50vw`). Sie können jedoch keine Prozentangabe als Slotbreite verwenden. Möglicherweise haben Sie bemerkt, dass die letzte Slotbreite keine Medienbedingung hat (dies ist der Standard, der gewählt wird, wenn keine der Medienbedingungen zutrifft). Der Browser ignoriert alles nach der ersten passenden Bedingung, daher sollten Sie darauf achten, wie Sie die Medienbedingungen anordnen.

Mit diesen Attributen wird der Browser:

1. Die Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmorientierung und Netzwerkgeschwindigkeit betrachten.
2. Bestimmen, welche Medienbedingung in der `sizes`-Liste die erste ist, die zutrifft.
3. Die Slotgröße betrachten, die für diese Medienabfrage angegeben ist.
4. Das Bild laden, das in der `srcset`-Liste referenziert ist, welches dieselbe oder eine größere Größe als die gewählte Slotgröße hat.

Und das war's! An diesem Punkt, wenn ein unterstützender Browser mit einer Ansichtsbreite von 480px die Seite lädt, wird die `(width <= 600px)` Medienbedingung zutreffen, und der Browser wählt den `480px` Slot. Das `elva-fairy-480w.jpg` wird geladen, da seine echte Breite (`480w`) am nächsten zur Slotgröße liegt. Das 800px-Bild ist 128KB auf der Festplatte, während die 480px-Version nur 63KB ist – eine Ersparnis von 65KB. Stellen Sie sich nun vor, wenn dies eine Seite mit vielen Bildern wäre. Diese Technik könnte mobilen Nutzern viel Bandbreite sparen.

> [!NOTE]
> Wenn Sie dies mit einem Desktop-Browser testen und der Browser die schmaleren Bilder nicht lädt, wenn Sie das Fenster auf die schmalste Breite eingestellt haben, sehen Sie sich an, was die Ansicht ist (Sie können es nähern, indem Sie in der JavaScript-Konsole des Browsers `document.querySelector('html').clientWidth` eingeben). Unterschiedliche Browser haben unterschiedliche Mindestgrößen, die sie zulassen, um die Fensterbreite zu reduzieren, und sie könnten breiter sein, als Sie denken. Wenn Sie es mit einem mobilen Browser testen, können Sie Tools wie die `about:debugging`-Seite von Firefox verwenden, um die auf dem Mobilgerät geladene Seite mit den Entwicklertools des Desktops zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie das [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)-Tab von Firefox DevTools oder das [Netzwerk](https://developer.chrome.com/docs/devtools/network/)-Tab von Chrome DevTools verwenden. Für Chrome möchten Sie möglicherweise auch [den Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder ausgewählt werden.

Ältere Browser, die diese Funktionen nicht unterstützen, ignorieren sie einfach. Stattdessen werden diese Browser das Bild laden, das im [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut normal referenziert wird.

> [!NOTE]
> Im {{htmlelement("head")}} des oben verlinkten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: dies zwingt mobile Browser dazu, ihre echte Ansichtsbreite zum Laden von Webseiten zu verwenden (einige mobile Browser täuschen über ihre Ansichtsbreite und laden Seiten stattdessen mit einer größeren Ansichtsbreite, um die geladene Seite dann zu verkleinern, was für responsive Bilder oder Design nicht sehr hilfreich ist).

### Auflösungsumschaltung: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das auf Bildschirmen mit unterschiedlichen Auflösungen in derselben realen Größe dargestellt wird. Sie können eine bessere Benutzererfahrung auf hochauflösenden Displays bieten, indem Sie eine höher aufgelöste Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie dem Browser erlauben, ein Bild in der passenden Auflösung auszuwählen, indem Sie `srcset` mit x-Deskriptoren und ohne `sizes` verwenden – eine etwas einfachere Syntax! Ein Beispiel, wie das aussieht, finden Sie in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass, obwohl das Bild immer in derselben Größe angezeigt wird, Sie auf hochauflösenden Displays mehr Details sehen können.

![Ein Bild eines kleinen Mädchens, das als Fee verkleidet ist, mit einem alten Kamera-Film-Effekt auf das Bild angewendet](resolution-example.png)

In diesem Beispiel wird das folgende CSS auf das Bild angewendet, sodass es auf dem Bildschirm eine Breite von 320 Pixeln hat (auch CSS-Pixel genannt):

```css
img {
  width: 320px;
}
```

In diesem Fall ist `sizes` nicht notwendig – der Browser ermittelt, welche Auflösung der Bildschirm hat, auf dem es gezeigt wird, und liefert das passendste im `srcset` referenzierte Bild. Wenn das Gerät, das die Seite aufruft, ein Standard-/Niedrigauflösungsdisplay mit einem {{Glossary("device_pixel", "Gerätepixel")}} pro CSS-Pixel hat, wird das `elva-fairy-320w.jpg` Bild geladen (der 1x ist implizit, daher müssen Sie ihn nicht angeben). Hat das Gerät hingegen eine hohe Auflösung von zwei oder mehr Gerätepixeln pro CSS-Pixel, wird das `elva-fairy-640w.jpg` Bild geladen. Das 640px-Bild ist 93KB, während das 320px-Bild nur 39KB ist.

### Art Direction

Zusammenfassend lässt sich sagen, dass das **Art-Direction-Problem** darin besteht, das angezeigte Bild an unterschiedliche Bildanzeigegrößen anzupassen. Zum Beispiel enthält eine Webseite ein großes Landschaftsbild mit einer Person in der Mitte, wenn sie in einem Desktop-Browser angezeigt wird. Wenn diese Seite in einem mobilen Browser betrachtet wird, wird dasselbe Bild verkleinert, wodurch die Person im Bild sehr klein und schwer zu erkennen wird. Es wäre wahrscheinlich besser, auf dem mobilen Gerät ein kleineres, vertikales Bild anzuzeigen, das in die Person hineinzoomt. Das {{htmlelement("picture")}}-Element ermöglicht uns, genau diese Art von Lösung zu implementieren.

Zurück zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) Beispiel haben wir ein Bild, das dringend eine Art Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns das mit {{htmlelement("picture")}} beheben! Wie [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio), ist `<picture>` ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die verschiedene Quellen für den Browser zur Auswahl anbieten, gefolgt von dem allzu wichtigen {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht folgendermaßen aus:

```html
<picture>
  <source media="(width < 800px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(width >= 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält – wie im ersten `srcset`-Beispiel sind dies Tests, die entscheiden, welches Bild angezeigt wird – das erste, das wahr ist, wird angezeigt. In diesem Fall, wenn die Ansichtsbreite kleiner als 800px ist, wird das Bild des ersten `<source>`-Elements angezeigt. Wenn die Ansichtsbreite 800px oder mehr beträgt, wird es das zweite sein.
- Die `srcset`-Attribute enthalten den Pfad zu dem anzuzeigenden Bild. Wie wir oben bei `<img>` gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut enthalten. Sie könnten also mehrere Bilder über ein `<picture>`-Element anbieten, aber dann auch mehrere Auflösungen jedes einzelnen. Realistisch betrachtet werden Sie diese Art von Dingen wahrscheinlich nicht sehr oft tun möchten.
- In jedem Fall müssen Sie ein `<img>`-Element mit `src` und `alt` direkt vor dem `</picture>` bereitstellen, ansonsten werden keine Bilder angezeigt. Dies bietet einen Standardfall, der zutrifft, wenn keine der Medienbedingungen wahr ist (Sie könnten tatsächlich das zweite `<source>`-Element in diesem Beispiel entfernen), und eine Rückfalloption für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es uns, ein passendes Bild sowohl auf Breitbild- als auch auf Schmalbild-Anzeigen darzustellen, wie unten gezeigt:

![Unsere Beispielseite, wie sie auf einem breiten Bildschirm betrachtet wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm betrachtet wird, wobei das `<picture>`-Element verwendet wird, um das erste Bild auf einen Hochformat-Nahaufnahme der Details zu wechseln, was es auf einem schmalen Bildschirm viel nützlicher macht.](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Art-Direction-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen innerhalb des `sizes`-Attributs an.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser anfängt, eine Seite zu laden, beginnt er, Bilder herunterzuladen (vorladen), bevor der Hauptparser begonnen hat, das CSS und JavaScript der Seite zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten der Seite zu verkürzen, aber er ist nicht hilfreich für responsive Bilder – daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Zum Beispiel könnten Sie das {{htmlelement("img")}}-Element nicht laden, dann die Ansichtsbreite mit JavaScript ermitteln und dann das Quellbild dynamisch in ein kleineres ändern, falls gewünscht. Zu diesem Zeitpunkt wäre das ursprüngliche Bild bereits geladen, und Sie würden das kleine Bild ebenfalls laden, was aus Sicht der responsiven Bilder noch schlimmer ist.

## Aktives Lernen: Ihre eigenen responsiven Bilder implementieren

Für dieses aktive Lernen erwarten wir, dass Sie mutig sind und es größtenteils allein machen. Wir möchten, dass Sie Ihr eigenes geeignetes Art-Direction-Beispiel für schmale und breite Ansichten mit `<picture>` und ein Beispiel für die Auflösungsumschaltung, das `srcset` verwendet, implementieren.

1. Schreiben Sie etwas HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes Landschaftsbild im Breitformat mit irgendeiner Art von Detail darin. Erstellen Sie mit einem Grafikeditor eine web-große Version davon, und schneiden Sie sie dann zu, um einen kleineren Teil, der in das Detail hineinzoomt, zu zeigen, und erstellen Sie ein zweites Bild (etwa 480px Breite ist dafür gut).
3. Verwenden Sie das `<picture>`-Element, um einen Art Direction Bildwechsler zu implementieren!
4. Erstellen Sie mehrere Bilddateien unterschiedlicher Größen, die alle dasselbe Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Beispiel für die Auflösungsumschaltung zu erstellen, entweder um je nach Geräteauflösung dasselbe Bild in unterschiedlichen Auflösungen zu liefern oder um je nach Ansichtsbreiten verschiedene Bildgrößen zu liefern.

## Zusammenfassung

Das war's für responsive Bilder – wir hoffen, Sie haben Spaß beim Ausprobieren dieser neuen Techniken gehabt. Zusammenfassend gibt es zwei unterschiedliche Probleme, die wir hier besprochen haben:

- **Art Direction**: Das Problem, dass Sie für verschiedene Layouts zugeschnittene Bilder bereitstellen möchten – zum Beispiel eine Landschaft, die eine volle Szene für ein Desktop-Layout zeigt, und ein Porträt, das das Hauptmotiv für ein Mobile-Layout herangezoomt zeigt. Dieses Problem können Sie mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungsumschaltung**: Das Problem, dass Sie kleinere Bilddateien an Geräte mit schmalen Bildschirmen liefern möchten, da sie keine großen Bilder wie Desktopanzeigen benötigen – und um unterschiedliche Auflösungsbilder an hochdichte/niedrigdichte Bildschirme zu liefern. Dieses Problem können Sie mit [Vektorgrafiken](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (SVG-Bilder) und den [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) mit [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attributen lösen.

## Siehe auch

- [Lernen: Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Jason Grigsbys hervorragende Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: Wenn Sie nur die Auflösungen ändern, verwenden Sie `srcset`](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) – enthält weitere Erklärungen, wie der Browser herausfindet, welches Bild zu verwenden ist
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}
