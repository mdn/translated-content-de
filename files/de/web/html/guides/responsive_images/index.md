---
title: Verwendung responsiver Bilder in HTML
short-title: Responsive Bilder
slug: Web/HTML/Guides/Responsive_images
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen – Bilder, die gut auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen funktionieren – und sehen, welche Werkzeuge HTML bietet, um sie zu implementieren. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern.

## Warum responsive Bilder?

Untersuchen wir ein typisches Szenario. Eine typische Website kann ein Header-Bild und einige Inhaltsbilder unter dem Header enthalten. Das Header-Bild wird wahrscheinlich die gesamte Breite des Headers einnehmen und das Inhaltsbild wird irgendwo in die Inhalts-Spalte passen. Hier ist ein Beispiel:

![Unsere Beispielseite, wie sie auf einem breiten Bildschirm angezeigt wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Das funktioniert gut auf einem Breitbildgerät, wie z.B. einem Laptop oder Desktop (Sie können [das Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden.) Wir werden in dieser Lektion nicht viel über das CSS sprechen, außer dass:

- Der Inhaltskörper auf eine maximale Breite von 1200 Pixeln eingestellt wurde – in Viewports über dieser Breite bleibt der Körper bei 1200px und zentriert sich im verfügbaren Raum. In Viewports unter dieser Breite bleibt der Körper bei 100% der Breite des Viewports.
- Das Header-Bild wurde so eingestellt, dass sein Zentrum immer im Mittelpunkt des Headers bleibt, egal welche Breite der Header hat. Wenn die Seite auf einem schmaleren Bildschirm angezeigt wird, können die wichtigen Details in der Bildmitte (die Personen) immer noch gesehen werden, und der Überschuss geht nach beiden Seiten verloren. Es ist 200px hoch.
- Die Inhaltsbilder wurden so eingestellt, dass wenn das Body-Element kleiner als das Bild wird, die Bilder zu schrumpfen beginnen, sodass sie immer innerhalb des Körpers bleiben, anstatt ihn zu überlaufen.

Es entstehen jedoch Probleme, wenn Sie die Seite auf einem Gerät mit schmalem Bildschirm anzeigen. Der Header unten sieht in Ordnung aus, beginnt aber, viel Höhe des Bildschirms eines mobilen Geräts einzunehmen. Und bei dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm angezeigt wird; das erste Bild ist so stark geschrumpft, dass es schwierig ist, Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre es, eine beschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes zeigt, wenn die Seite auf einem schmalen Bildschirm betrachtet wird. Ein weiteres beschnittenes Bild könnte für ein mittelbreites Bildschirmgerät, wie ein Tablet, angezeigt werden. Das allgemeine Problem, bei dem Sie verschiedene beschnittene Bilder auf diese Weise für verschiedene Layouts bereitstellen möchten, ist allgemein als das **Art-Direction-Problem** bekannt.

Darüber hinaus ist es nicht notwendig, so große Bilder auf der Seite einzubetten, wenn sie auf einem mobilen Bildschirm betrachtet wird. Dies kann Bandbreite verschwenden; insbesondere möchten Mobile-Benutzer keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Benutzer bestimmt ist, wenn ein kleines Bild für ihr Gerät ausreicht. Umgekehrt sieht ein kleines {{Glossary("Raster_image", "Rasterbild")}} körnig aus, wenn es größer als seine Originalgröße angezeigt wird (ein Rasterbild hat eine feste Anzahl von Pixeln in der Breite und in der Höhe). Idealerweise wären mehrere Auflösungen im Webbrowser des Benutzers verfügbar. Der Browser könnte dann basierend auf der Bildschirmgröße des Geräts die optimale Auflösung zum Laden bestimmen. Dies wird als **Auflösungswechselproblem** bezeichnet.

Um die Sache komplizierter zu machen, haben einige Geräte hochauflösende Bildschirme, die größere Bilder als erwartet benötigen, um sie schön anzuzeigen. Dies ist im Wesentlichen dasselbe Problem, jedoch in einem leicht anderen Kontext.

Sie könnten denken, dass Vektorbilder diese Probleme lösen würden, und sie tun es bis zu einem gewissen Grad – sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie wann immer möglich verwenden. Sie sind jedoch nicht für alle Bildtypen geeignet. Vektorbilder sind großartig für einfache Grafiken, Muster, Schnittstellenelemente etc., aber es wird sehr komplex, eine vektorbasierte Abbildung mit dem Detailgrad zu erstellen, den Sie beispielsweise in einem Foto finden würden. Rasterbildformate wie JPEGs sind besser für die Arten von Bildern geeignet, die wir im obigen Beispiel sehen.

Diese Art von Problem existierte nicht, als das Web zuerst existierte, in den frühen bis mittleren 90er Jahren – damals waren die einzigen Geräte zur Web-Navigation Desktops und Laptops, also dachten Browser-Ingenieure und Spezifikationsautoren nicht einmal daran, Lösungen zu implementieren. _Responsive Image-Technologien_ wurden kürzlich implementiert, um die oben genannten Probleme zu lösen, indem sie dem Browser die Möglichkeit geben, mehrere Bilddateien anzubieten, entweder alle das Gleiche zeigend, aber mit unterschiedlicher Pixelanzahl (_Auflösungswechsel_), oder verschiedene Bilder, die für verschiedene Platzierungen geeignet sind (_Art-Direction_).

> [!NOTE]
> Die neuen Funktionen, die in diesem Artikel besprochen werden — [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)/[`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)/{{htmlelement("picture")}} — werden alle in modernen Desktop- und mobilen Browsern unterstützt.

## Wie erstellt man responsive Bilder?

In diesem Abschnitt betrachten wir die beiden oben illustrierten Probleme und zeigen, wie man sie mit den responsiven Bildfunktionen von HTML löst. Sie sollten beachten, dass wir uns in diesem Abschnitt auf {{htmlelement("img")}}-Elemente konzentrieren, wie im Inhaltsbereich des obigen Beispiels zu sehen ist — das Bild im Seitenheader ist nur zur Dekoration und daher mit CSS-Hintergrundbildern implementiert. [CSS hat arguably bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden in einem zukünftigen CSS-Modul darüber sprechen.

### Auflösungswechsel: Unterschiedliche Größen

Was ist also das Problem, das wir mit dem Auflösungswechsel lösen wollen? Wir möchten denselben Bildinhalt anzeigen, nur größer oder kleiner, je nach dem Gerät — das ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das standardmäßige {{htmlelement("img")}}-Element lässt traditionell dem Browser nur eine einzelne Quelldatei angeben:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden — [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) — um mehrere zusätzliche Quellbilder zusammen mit Hinweisen anzugeben, die dem Browser helfen, das richtige auszuwählen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) Beispiel auf GitHub sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die `srcset`- und `sizes`-Attribute sehen kompliziert aus, aber sie sind nicht allzu schwer zu verstehen, wenn Sie sie wie oben gezeigt formatieren, wobei sich ein anderer Teil des Attributwertes in jeder Zeile befindet. Jeder Wert enthält eine kommagetrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Gehen wir nun die Inhalte jedes Teils durch:

**`srcset`** definiert die Menge an Bildern, die wir dem Browser zur Auswahl stellen werden, und welche Größe jedes Bild hat. Jede Bildinformation wird durch ein Komma von der vorherigen getrennt. Für jedes Bild schreiben wir:

1. Ein **Bilddateiname** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite in Pixeln** des Bildes (`480w`) — beachten Sie, dass hier die `w`-Einheit und nicht `px`, wie Sie vielleicht erwarten würden, verwendet wird. Die {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eines Bildes ist seine tatsächliche Größe, die Sie durch das Inspektieren der Bilddatei auf Ihrem Computer herausfinden können (zum Beispiel können Sie auf einem Mac das Bild im Finder auswählen und <kbd>Cmd</kbd> + <kbd>I</kbd> drücken, um den Infobildschirm aufzurufen).

**`sizes`** definiert eine Reihe von Medienbedingungen (z.B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten gewählt werden sollte, wenn bestimmte Medienbedingungen zutreffen — dies sind die Hinweise, die wir zuvor erwähnt haben. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(width <= 600px)`) — in der [CSS-Thematik](/de/docs/Learn_web_development/Core/Styling_basics) erfahren Sie mehr darüber, aber lassen Sie uns zunächst sagen, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir: "wenn die Breite des Ansichtsfensters 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild füllen soll, wenn die Medienbedingung wahr ist (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Beispielsweise können Sie anstelle einer absoluten Breite (zum Beispiel `480px`) alternativ eine Breite relativ zum Ansichtsfenster angeben (zum Beispiel `50vw`). Sie können jedoch keine Prozentangabe als Slotbreite verwenden. Möglicherweise haben Sie bemerkt, dass die letzte Slotbreite keine Medienbedingung hat (dies ist der Standard, der gewählt wird, wenn keine der Medienbedingungen zutrifft). Der Browser ignoriert alles nach der ersten zutreffenden Bedingung, also achten Sie auf die Reihenfolge der Medienbedingungen.

So wird der Browser mit diesen Attributen:

1. Die Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmorientierung und Netzwerkgeschwindigkeit betrachten.
2. Ermitteln, welche Medienbedingung in der `sizes`-Liste die erste ist, die wahr ist.
3. Die Slotgröße betrachten, die dieser Medienanfrage zugewiesen wurde.
4. Das Bild, das in der `srcset`-Liste referenziert wird und dieselbe Größe hat wie der Slot, laden. Wenn es keine exakte Übereinstimmung für die Anzeigengröße gibt, wählt der Browser das erste Bild, das größer als die gewählte Slotgröße ist, und skaliert es herunter, um zu passen.

Und das war's! An diesem Punkt, wenn ein unterstützender Browser mit einem Ansichtsfenster von 480px Breite die Seite lädt, wird die `(width <= 600px)` Medienbedingung wahr sein, und so wählt der Browser den `480px` Slot. Das `elva-fairy-480w.jpg` wird geladen, da seine intrinsische Breite (`480w`) am nächsten zur Slotgröße liegt. Das 800px Bild ist 128KB auf der Festplatte, während die 480px Version nur 63KB beträgt — eine Einsparung von 65KB. Stellen Sie sich nun vor, dass dies eine Seite mit vielen Bildern ist. Diese Technik zu verwenden könnte den mobilen Nutzern viel Bandbreite sparen.

> [!NOTE]
> Wenn Sie dies mit einem Desktop-Browser testen und der Browser die schmaleren Bilder nicht lädt, wenn Sie das Fenster auf die schmalste Breite eingestellt haben, schauen Sie sich an, was das Ansichtsfenster ist (Sie können es ungefähr ermitteln, indem Sie in die JavaScript-Konsole des Browsers gehen und `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben minimale Breiten, auf die Sie die Fensterbreite reduzieren können, und sie könnten breiter sein, als Sie denken. Bei der Prüfung mit einem mobilen Browser können Sie Werkzeuge wie die `about:debugging` Seite von Firefox verwenden, um die geladene Seite auf dem mobilen Gerät mit den Desktop-Entwicklertools zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie den [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) von Firefox DevTools oder das [Netzwerk](https://developer.chrome.com/docs/devtools/network/) Panel von Chrome DevTools verwenden. Für Chrome möchten Sie möglicherweise auch den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder ausgewählt werden.

Ältere Browser, die diese Funktionen nicht unterstützen, werden sie einfach ignorieren. Stattdessen werden diese Browser das Bild laden, das im [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut angegeben ist, wie gewohnt.

> [!NOTE]
> Im {{htmlelement("head")}} des oben verlinkten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: Diese zwingt mobile Browser dazu, für das Laden von Webseiten die tatsächliche Ansichtsfensterbreite zu verwenden (einige mobile Browser machen falsche Angaben über ihre Ansichtsfensterbreite und laden stattdessen Seiten bei einer größeren Ansichtsfensterbreite und verkleinern dann die geladene Seite, was für responsive Bilder oder Designs nicht sehr hilfreich ist).

### Auflösungswechsel: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das auf Displays mit unterschiedlichen Bildschirmauflösungen in derselben realen Größe angezeigt werden soll. Sie können die Benutzererfahrung auf hochauflösenden Displays verbessern, indem Sie eine Version in höherer Auflösung des Bildes bereitstellen.

Um dies zu erreichen, können Sie dem Browser ermöglichen, ein geeignetes Bild in der richtigen Auflösung auszuwählen, indem Sie `srcset` mit x-Descriptors und ohne `sizes` verwenden — eine etwas einfachere Syntax! Sie können ein Beispiel dafür in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) finden (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass obwohl das Bild immer in derselben Größe angezeigt wird, Sie auf hochauflösenden Displays mehr Details sehen können.

![Ein Bild eines kleinen Mädchens, das als Fee verkleidet ist, mit einem alten Kamera-Film-Effekt, der auf das Bild angewendet wurde.](resolution-example.png)

In diesem Beispiel wird auf das Bild das folgende CSS angewendet, sodass es auf dem Bildschirm (auch CSS-Pixel genannt) eine Breite von 320 Pixeln hat:

```css
img {
  width: 320px;
}
```

In diesem Fall wird `sizes` nicht benötigt — der Browser ermittelt, welche Auflösung das Display hat, auf dem es angezeigt wird, und liefert das am besten geeignete Bild, das in der `srcset` referenziert wird. Wenn das Gerät, das auf die Seite zugreift, ein Standard-/geringere Auflösung-Display hat, mit einem {{Glossary("device_pixel", "Gerätepixel")}}, das jedes CSS-Pixel darstellt, wird das `elva-fairy-320w.jpg` Bild geladen (das 1x wird impliziert, sodass Sie es nicht einschließen müssen). Wenn das Gerät eine hohe Auflösung von zwei Gerätepixeln pro CSS-Pixel oder mehr hat, wird das `elva-fairy-640w.jpg` Bild geladen. Das 640px Bild ist 93KB, während das 320px Bild nur 39KB ist.

### Art Direction

Um zusammenzufassen, das **Art-Direction-Problem** beinhaltet den Wunsch, das angezeigte Bild an unterschiedliche Bildanzeigegrößen anzupassen. Beispielsweise enthält eine Webseite eine große Landschaftsaufnahme mit einer Person in der Mitte, wenn sie in einem Desktop-Browser betrachtet wird. Wenn sie in einem mobilen Browser betrachtet wird, wird dasselbe Bild verkleinert, wodurch die Person im Bild sehr klein und schwer zu sehen wird. Es wäre wahrscheinlich besser, ein kleineres, hochformatiges Bild auf dem Mobilgerät anzuzeigen, das auf die Person hereinzoomt. Das {{htmlelement("picture")}}-Element erlaubt uns, genau diese Art von Lösung zu implementieren.

Zurück zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) Beispiel, haben wir ein Bild, das dringend Art-Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns das mit {{htmlelement("picture")}} beheben! Wie [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio), ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die verschiedene Quellen für den Browser bereitstellen, gefolgt vom äußerst wichtigen {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht so aus:

```html
<picture>
  <source media="(width < 800px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(width >= 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält — wie im ersten `srcset`-Beispiel sind diese Bedingungen Tests, die entscheiden, welches Bild angezeigt wird — das erste, das wahr zurückgibt, wird angezeigt. In diesem Fall, wenn die Ansichtsfensterbreite weniger als 800px breit ist, wird das Bild des ersten `<source>`-Elements angezeigt. Wenn die Ansichtsfensterbreite 800px oder mehr beträgt, wird das zweite angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zu dem anzuzeigenden Bild. Genau wie wir es oben bei `<img>` gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut haben. Sie könnten also mehrere Bilder über ein `<picture>`-Element anbieten, aber dann auch mehrere Auflösungen von jedem anbieten. Realistisch gesehen, werden Sie diese Art von Sache wahrscheinlich nicht sehr oft tun wollen.
- In allen Fällen müssen Sie ein `<img>`-Element, mit `src` und `alt`, direkt vor `</picture>` bereitstellen, andernfalls werden keine Bilder angezeigt. Dies bietet einen Standardfall, der angewendet wird, wenn keine der Medienbedingungen wahr zurückgibt (Sie könnten tatsächlich das zweite `<source>`-Element in diesem Beispiel entfernen), und ein Fallback für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es uns, ein geeignetes Bild sowohl auf Breitbild- als auch auf Schmalbildschirm-Anzeigen anzuzeigen, wie unten gezeigt:

![Unsere Beispielseite, wie sie auf einem Breitbildschirm angezeigt wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm mit dem picture-Element verwendet wird, um das erste Bild auf einen Hochformat-Nahaufnahme des Details umzustellen, wodurch es auf einem schmalen Bildschirm viel nützlicher wird.](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Art-Direction-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen innerhalb des `sizes`-Attributs an.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser beginnt, eine Seite zu laden, beginnt er, alle Bilder herunterzuladen (preloading), bevor der Hauptparser begonnen hat, die CSS- und JavaScript-Dateien zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten der Seite zu reduzieren, aber nicht für responsive Bilder hilfreich — daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Beispielsweise könnten Sie das {{htmlelement("img")}}-Element nicht laden, dann die Ansichtsfensterbreite mit JavaScript erkennen und dann dynamisch das Quellbild ändern, um ein kleineres zu laden, falls gewünscht. Zu diesem Zeitpunkt wäre das Originalbild bereits geladen, und Sie würden das kleine Bild auch noch laden, was im Hinblick auf responsive Bilder noch schlimmer wäre.

## Aktives Lernen: Implementierung Ihrer eigenen responsiven Bilder

Bei diesem aktiven Lernen erwarten wir, dass Sie mutig sind und es größtenteils alleine machen. Wir möchten, dass Sie Ihre eigene geeignete Art-Direction-Narrow-Screen/Wide-Screenshot mit `<picture>` und ein Beispiel für den Auflösungswechsel mit `srcset` implementieren.

1. Schreiben Sie etwas HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes breitformatiges Landschaftsbild mit irgendeiner Art von Detail, das enthalten ist. Erstellen Sie eine webgroße Version davon mit einem Grafikeditor, dann beschneiden Sie es, um einen kleineren Teil zu zeigen, der auf das Detail zoomt, und erstellen Sie ein zweites Bild (etwa 480px breit ist gut dafür).
3. Verwenden Sie das `<picture>`-Element, um einen Art-Direction-Bilderwechsler zu implementieren!
4. Erstellen Sie mehrere Bilddateien in verschiedenen Größen, die alle dasselbe Bild zeigen.
5. Verwenden Sie `srcset` / `sizes`, um ein Beispiel für einen Auflösungswechsler zu erstellen, entweder um dasselbe Bild in unterschiedlichen Auflösungen basierend auf der Geräteauflösung bereitzustellen oder um unterschiedliche Bildgrößen in Abhängigkeit von den Ansichtsfensterbreiten bereitzustellen.

## Zusammenfassung

Das war's für responsive Bilder — wir hoffen, Sie hatten Spaß beim Spielen mit diesen neuen Techniken. Zusammenfassend gibt es zwei unterschiedliche Probleme, die wir hier besprochen haben:

- **Art-Direction**: Das Problem, bei dem Sie beschnittene Bilder für unterschiedliche Layouts bereitstellen möchten — zum Beispiel ein Landschaftsbild, das eine ganze Szene für ein Desktop-Layout zeigt, und ein Porträtbild, das das Hauptmotiv für ein mobiles Layout herangezoomt zeigt. Sie können dieses Problem mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungswechsel**: Das Problem, bei dem Sie kleinere Bilddateien an Geräte mit kleinem Bildschirm senden möchten, da sie nicht die großen Bilder wie Desktop-Anzeigen benötigen — und Bilder unterschiedlicher Auflösung an Bildschirme mit hoher Dichte/niedriger Dichte senden. Sie können dieses Problem mit [Vektorgrafiken](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (SVG-Bildern) und den [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) mit [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attributen lösen.

## Siehe auch

- [Lernen: Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Jason Grigsby's ausgezeichnete Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: Wenn Sie nur die Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — beinhaltet mehr Erklärungen darüber, wie der Browser ermittelt, welches Bild verwendet werden soll
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}
