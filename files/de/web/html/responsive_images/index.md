---
title: Responsive Images
slug: Web/HTML/Responsive_images
l10n:
  sourceCommit: c9dfe0dcc81a7414922637600bf318156bf83387
---

{{HTMLSidebar}}

In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen — Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen solchen Merkmalen gut funktionieren — und schauen uns an, welche Werkzeuge HTML bietet, um sie umzusetzen. Dies trägt zur Verbesserung der Leistung auf verschiedenen Geräten bei.

## Warum responsive Bilder?

Lassen Sie uns ein typisches Szenario betrachten. Eine typische Website kann ein Headerbild und einige Inhaltsbilder unterhalb des Headers enthalten. Das Headerbild wird wahrscheinlich die gesamte Breite des Headers abdecken, und das Inhaltsbild wird in die Spalte des Inhalts passen. Hier ist ein Beispiel:

![Unser Beispiel einer Website, die auf einem breiten Bildschirm betrachtet wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie einem Laptop oder Desktop (Sie können sich [das Beispiel live ansehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden). Wir werden in dieser Lektion nicht viel über das CSS sprechen, außer um zu sagen, dass:

- Der Inhalt des Bodys auf eine maximale Breite von 1200 Pixeln eingestellt wurde — in Viewports, die diese Breite überschreiten, bleibt der Body bei 1200px und zentriert sich im verfügbaren Raum. In Viewports unter dieser Breite bleibt der Body bei 100% der Breite des Viewports.
- Das Headerbild wurde so eingestellt, dass sein Zentrum immer in der Mitte des Headers bleibt, egal welche Breite für den Header eingestellt ist. Wenn die Site auf einem schmaleren Bildschirm angezeigt wird, können die wichtigen Details in der Mitte des Bildes (die Personen) immer noch gesehen werden, und der Überschuss verschwindet auf beiden Seiten. Es ist 200px hoch.
- Die Inhaltsbilder wurden so eingestellt, dass, wenn das Body-Element kleiner wird als das Bild, die Bilder anfangen zu schrumpfen, damit sie immer im Body bleiben, anstatt herauszulaufen.

Allerdings treten Probleme auf, wenn Sie die Site auf einem schmalen Bildschirmgerät anzeigen. Der Header unten sieht in Ordnung aus, nimmt aber viel von der Bildschirmhöhe eines mobilen Geräts ein. Und in dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm betrachtet wird; das erste Bild ist so weit geschrumpft, dass es schwierig ist, die Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre, eine zugeschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes darstellt, wenn die Site auf einem schmalen Bildschirm angezeigt wird. Ein zweites zugeschnittenes Bild könnte für ein Gerät mit mittlerer Bildschirmbreite, wie ein Tablet, angezeigt werden. Das allgemeine Problem, bei dem man verschiedene zugeschnittene Bilder auf diese Weise für verschiedene Layouts bereitstellen möchte, ist allgemein als das **Art-Direction-Problem** bekannt.

Außerdem besteht keine Notwendigkeit, so große Bilder auf der Seite einzubetten, wenn sie auf einem mobilen Bildschirm betrachtet wird. Dies kann Bandbreite verschwenden; insbesondere möchten mobile Nutzer keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Nutzer gedacht ist, wenn ein kleines Bild für ihr Gerät ausreicht. Umgekehrt sieht ein kleines {{Glossary("Raster_image", "Rasterbild")}} körnig aus, wenn es größer als seine ursprüngliche Größe angezeigt wird (ein Rasterbild hat eine feste Anzahl von Pixeln in Breite und Höhe). Idealerweise wären mehrere Auflösungen für den Webbrowser des Benutzers verfügbar. Der Browser könnte dann die optimale Auflösung basierend auf der Bildschirmgröße des Geräts des Benutzers bestimmen. Dies wird als das **Auflösungswechsel-Problem** bezeichnet.

Um die Sache zu verkomplizieren, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als Sie vielleicht erwarten, um schön angezeigt zu werden. Dies ist im Wesentlichen das gleiche Problem, aber in einem etwas anderen Kontext.

Sie könnten denken, dass Vektorbilder diese Probleme lösen würden, und sie tun es bis zu einem gewissen Grad — sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie wann immer möglich verwenden. Sie sind jedoch nicht für alle Bildtypen geeignet. Vektorbilder sind großartig für einfache Grafiken, Muster, Interface-Elemente usw., aber es wird sehr komplex, ein vektor-basiertes Bild mit der Art von Details zu erstellen, die Sie in einem Foto finden würden. Rasterbildformate wie JPEGs sind geeigneter für die Art von Bildern, die wir im obigen Beispiel sehen.

Diese Art von Problem existierte nicht, als das Web zum ersten Mal existierte, in den frühen bis mittleren 90ern — damals waren die einzigen existierenden Geräte zum Surfen im Web Desktops und Laptops, also haben Browser-Ingenieure und Spezifikationsautoren nicht daran gedacht, Lösungen zu implementieren. _Technologien für responsive Bilder_ wurden kürzlich implementiert, um die oben genannten Probleme zu lösen, indem Sie dem Browser mehrere Bilddateien anbieten, entweder alle dasselbe zeigen, aber mit unterschiedlicher Anzahl von Pixeln (_Auflösungswechsel_), oder verschiedene Bilder, die für verschiedene Raumzuteilungen geeignet sind (_Art-Direction_).

> [!NOTE]
> Die neuen in diesem Artikel diskutierten Funktionen — [`srcset`](/de/docs/Web/HTML/Element/img#srcset)/[`sizes`](/de/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} — werden in modernen Desktop- und Mobilbrowsern unterstützt.

## Wie erstellt man responsive Bilder?

In diesem Abschnitt betrachten wir die beiden oben illustrierten Probleme und zeigen, wie man sie mit den responsiven Bildfunktionen von HTML löst. Sie sollten beachten, dass wir uns auf {{htmlelement("img")}}-Elemente konzentrieren werden, wie im Inhaltsbereich des obigen Beispiels zu sehen — das Bild im Header der Website dient nur der Dekoration und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat wohl bessere Werkzeuge für das responsive Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden in einem zukünftigen CSS-Modul darüber sprechen.

### Auflösungswechsel: Verschiedene Größen

Was ist also das Problem, das wir mit dem Auflösungswechsel lösen wollen? Wir möchten identischen Bildinhalt anzeigen, nur je nach Gerät größer oder kleiner — dies ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das Standard-{{htmlelement("img")}}-Element lässt Sie traditionell nur eine einzige Quelldatei an den Browser zeigen:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden — [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) — um mehrere zusätzliche Quellbilder zusammen mit Hinweisen bereitzustellen, die dem Browser helfen, das richtige auszuwählen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) Beispiel auf GitHub sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die `srcset`- und `sizes`-Attribute sehen kompliziert aus, aber sie sind nicht allzu schwer zu verstehen, wenn Sie sie so formatieren, wie oben gezeigt, mit einem anderen Teil des Attributwerts in jeder Zeile. Jeder Wert enthält eine kommagetrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Lassen Sie uns nun die Inhalte der einzelnen Teile durchgehen:

**`srcset`** definiert die Menge an Bildern, die wir dem Browser zur Auswahl stellen, und welche Größe jedes Bild hat. Jedes Set von Bildinformationen wird durch ein Komma vom vorherigen getrennt. Für jedes schreiben wir:

1. Einen **Bilddateinamen** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite in Pixeln** des Bildes (`480w`) — beachten Sie, dass dies die `w`-Einheit verwendet, nicht `px`, wie Sie vielleicht erwarten. Die {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eines Bildes ist seine tatsächliche Größe, die durch Überprüfen der Bilddatei auf Ihrem Computer gefunden werden kann (zum Beispiel können Sie auf einem Mac das Bild im Finder auswählen und <kbd>Cmd</kbd> + <kbd>I</kbd> drücken, um den Informationsbildschirm aufzurufen).

**`sizes`** definiert eine Reihe von Medienbedingungen (z.B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten zu wählen wäre, wenn bestimmte Medienbedingungen zutreffen — dies sind die Hinweise, über die wir zuvor gesprochen haben. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(max-width:600px)`) — Sie werden mehr über diese im [CSS-Thema](/de/docs/Learn_web_development/Core/Styling_basics) lernen, aber vorerst sagen wir einfach, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir "wenn die Bildschirmbreite 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild füllen wird, wenn die Medienbedingung zutrifft (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Zum Beispiel können Sie anstatt einer absoluten Breite (z.B. `480px`) alternativ eine Breite relativ zum Viewport angeben (z.B. `50vw`). Allerdings können Sie keine Prozentangabe als Slotbreite verwenden. Sie haben vielleicht bemerkt, dass die letzte Slotbreite keine Medienbedingung hat (dies ist der Standard, der gewählt wird, wenn keine der Medienbedingungen zutrifft). Der Browser ignoriert alles nach der ersten passenden Bedingung, also seien Sie vorsichtig, wie Sie die Medienbedingungen anordnen.

Mit diesen Attributen wird der Browser:

1. Die Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmorientierung und Netzwerkgeschwindigkeit betrachten.
2. Bestimmen, welche Medienbedingung in der `sizes`-Liste die erste ist, die zutrifft.
3. Die Slotgröße betrachten, die dieser Medienabfrage gegeben ist.
4. Das Bild laden, auf das in der `srcset`-Liste verwiesen wird und das die gleiche Größe wie der Slot hat oder, falls es keines gibt, das erste Bild laden, das größer ist als die gewählte Slotgröße.

Und das ist es! Zu diesem Zeitpunkt wird in einem unterstützenden Browser mit einer Viewport-Breite von 480px die Medienbedingung `(max-width: 600px)` wahr, und daher wählt der Browser den `480px` Slot. Die `elva-fairy-480w.jpg` wird geladen, da ihre inhärente Breite (`480w`) der Slotgröße am nächsten liegt. Das 800px Bild ist 128KB auf der Festplatte, während die 480px Version nur 63KB groß ist — eine Einsparung von 65KB. Stellen Sie sich nun vor, dass dies eine Seite mit vielen Bildern wäre. Mit dieser Technik könnte man mobilen Nutzern eine Menge Bandbreite sparen.

> [!NOTE]
> Beim Testen mit einem Desktop-Browser, wenn der Browser die schmaleren Bilder nicht lädt, während Sie das Fenster auf die schmalste Breite eingestellt haben, schauen Sie nach, wie der Viewport ist (Sie können ihn approximieren, indem Sie in die JavaScript-Konsole des Browsers gehen und `document.querySelector('html').clientWidth` eingeben). Unterschiedliche Browser haben Mindestgrößen, die sie zulassen, und sie könnten breiter sein, als Sie denken. Beim Testen mit einem mobilen Browser können Sie Tools wie die `about:debugging`-Seite von Firefox verwenden, um die geladene Seite auf dem Mobilgerät mit den Entwicklerwerkzeugen des Desktops zu inspizieren.

Um zu sehen, welche Bilder geladen wurden, können Sie das [Netzwerkmonitor-Tool in Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder das [Netzwerk-Panel in Chrome DevTools](https://developer.chrome.com/docs/devtools/network/) verwenden. In Chrome möchten Sie vielleicht auch den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder verwendet werden.

Ältere Browser, die diese Funktionen nicht unterstützen, ignorieren sie einfach. Stattdessen laden diese Browser wie gewohnt das Bild, auf das im [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut verwiesen wird.

> [!NOTE]
> Im {{htmlelement("head")}} des oben verlinkten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: Dies zwingt mobile Browser, ihre tatsächliche Bildschirmbreite für das Laden von Webseiten zu verwenden (einige mobile Browser lügen über ihre Bildschirmbreite und laden stattdessen Seiten bei einer größeren Bildschirmbreite und verkleinern dann die geladene Seite, was für responsive Bilder oder Design nicht sehr hilfreich ist).

### Auflösungswechsel: Gleiche Größe, verschiedene Auflösungen

Angenommen, Sie haben ein Bild, das in der gleichen realen Größe auf Anzeigen mit unterschiedlichen Bildschirmauflösungen angezeigt wird. Sie können eine bessere Benutzererfahrung auf Displays mit hoher Auflösung bieten, indem Sie eine höher auflösende Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie dem Browser erlauben, ein Bild mit der richtigen Auflösung auszuwählen, indem Sie `srcset` mit x-Deskriptoren und ohne `sizes` verwenden – eine etwas einfachere Syntax! Sie können in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) ein Beispiel dafür finden, wie das aussieht (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass, obwohl das Bild immer mit der gleichen Größe angezeigt wird, Sie auf Displays mit höherer Auflösung mehr Details sehen können.

![Ein Bild eines kleinen Mädchens, das als Fee verkleidet ist, mit einem alten Kamera-Filmeffekt auf das Bild angewendet.](resolution-example.png)

In diesem Beispiel wird das folgende CSS auf das Bild angewendet, damit es auf dem Bildschirm eine Breite von 320 Pixeln hat (auch CSS-Pixel genannt):

```css
img {
  width: 320px;
}
```

In diesem Fall ist `sizes` nicht erforderlich — der Browser ermittelt die Auflösung, auf der das Display angezeigt wird, und liefert das am besten geeignete Bild, das in `srcset` referenziert wird. Wenn das Gerät, das die Seite abruft, ein Display mit einer Standard-/niedrigen Auflösung hat, bei dem ein {{Glossary("device_pixel", "Gerätepixel")}} jedes CSS-Pixel darstellt, wird das Bild `elva-fairy-320w.jpg` geladen (das 1x ist impliziert, Sie müssen es also nicht angeben). Wenn das Gerät eine hohe Auflösung von zwei Geräte-Pixeln pro CSS-Pixel oder mehr hat, wird das Bild `elva-fairy-640w.jpg` geladen. Das 640px-Bild ist 93KB groß, während das 320px-Bild nur 39KB beträgt.

### Art Direction

Um es zusammenzufassen, das **Art Direction Problem** besteht darin, dass das angezeigte Bild an unterschiedliche Bildanzeigegrößen angepasst werden soll. Angenommen, eine Webseite enthält ein großes Landschaftsfoto mit einer Person in der Mitte, wenn es auf einem Desktop-Browser angezeigt wird. Wenn es auf einem mobilen Browser angezeigt wird, wird dasselbe Bild verkleinert, wodurch die Person im Bild sehr klein und schwer zu erkennen wird. Es wäre wahrscheinlich besser, auf Mobilgeräten ein kleineres, hochformatiges Bild anzuzeigen, das auf die Person zoomt. Das {{htmlelement("picture")}}-Element ermöglicht es uns, genau so eine Lösung zu implementieren.

Zurück zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) Beispiel, haben wir ein Bild, das dringend Art Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns dies mit {{htmlelement("picture")}} korrigieren! Genau wie [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die verschiedene Quellen bieten, aus denen der Browser wählen kann, gefolgt von dem wichtigen {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht folgendermaßen aus:

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media` Attribut, das eine Medienbedingung enthält — wie beim ersten `srcset`-Beispiel sind diese Bedingungen Tests, die entscheiden, welches Bild gezeigt wird — das erste, das true zurückgibt, wird angezeigt. In diesem Fall wird, wenn die Viewport-Breite 799px oder kleiner ist, das Bild des ersten `<source>`-Elements angezeigt. Wenn die Viewport-Breite 800px oder größer ist, wird das zweite angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zum anzuzeigenden Bild. Wie wir oben bei `<img>` gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern aufnehmen, ebenso wie ein `sizes`-Attribut. So könnten Sie mehrere Bilder über ein `<picture>`-Element anbieten, aber dann auch mehrere Auflösungen von jedem. Realistisch betrachtet werden Sie das wahrscheinlich nicht sehr oft tun wollen.
- In allen Fällen müssen Sie ein `<img>`-Element mit `src` und `alt` direkt vor `</picture>` angeben, sonst werden keine Bilder angezeigt. Dies bietet einen Standardfall, der gilt, wenn keine der Medienbedingungen true ist (Sie könnten tatsächlich das zweite `<source>`-Element in diesem Beispiel entfernen), sowie eine Fallback-Möglichkeit für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code erlaubt es uns, ein geeignetes Bild sowohl auf Breitbild- als auch auf Schmalbildanzeigen anzuzeigen, wie unten gezeigt:

![Unsere Beispielseite, wie sie auf einem breiten Bildschirm betrachtet wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm mit dem Picture-Element betrachtet wird, um das erste Bild auf ein Porträt für eine Nahaufnahme des Details zu wechseln, was es auf einem schmalen Bildschirm viel nützlicher macht.](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media` Attribut nur in Art Direction-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen im `sizes` Attribut.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser beginnt, eine Seite zu laden, beginnt er, Bilder zu laden (vorzuladen), bevor der Hauptparser begonnen hat, das CSS und JavaScript der Seite zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten der Seite zu reduzieren, ist jedoch für responsive Bilder nicht hilfreich — daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Zum Beispiel könnten Sie das {{htmlelement("img")}}-Element nicht laden, dann die Viewport-Breite mit JavaScript erkennen und dann dynamisch die Bildquelle auf ein kleineres Bild ändern, falls gewünscht. Zu diesem Zeitpunkt wäre das ursprüngliche Bild bereits geladen worden, und Sie würden auch das kleine Bild laden, was in responsive Bild-Begriffen sogar noch schlimmer ist.

## Aktives Lernen: Eigene responsive Bilder erstellen

Für dieses aktive Lernen erwarten wir, dass Sie mutig sind und es größtenteils alleine machen. Wir möchten, dass Sie Ihr eigenes geeignetes, kunstgerecht gerichtetes Schmalbild-/Breitbildbeispiel mit `<picture>` und ein Auflösungswechselbeispiel, das `srcset` verwendet, implementieren.

1. Schreiben Sie etwas HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes Breitbild-Landschaftsbild mit irgendwelchen Details darin. Erstellen Sie eine webgroße Version davon mit einem Grafikeditor, dann schneiden Sie es so zu, dass es einen kleineren Teil zeigt, der auf die Details zoomt, und erstellen Sie ein zweites Bild (ca. 480px breit ist dafür gut geeignet).
3. Verwenden Sie das `<picture>`-Element, um einen kunstgerecht ausgerichteten Bildwechsler zu implementieren!
4. Erstellen Sie mehrere Bilddateien in verschiedenen Größen, die alle dasselbe Bild anzeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Auflösungswechsler-Beispiel zu erstellen, entweder um dasselbe Bild in unterschiedlichen Auflösungen je nach Geräteauflösung bereitzustellen oder um unterschiedliche Bildgrößen je nach Bildschirmbreiten bereitzustellen.

## Zusammenfassung

Das war's zu responsiven Bildern – wir hoffen, Sie hatten Spaß beim Ausprobieren dieser neuen Techniken. Zusammenfassend lässt sich sagen, dass wir hier über zwei verschiedene Probleme gesprochen haben:

- **Art Direction**: Das Problem, bei dem Sie zugeschnittene Bilder für unterschiedliche Layouts bereitstellen möchten — zum Beispiel ein Landschaftsbild, das eine vollständige Szene für ein Desktop-Layout zeigt, und ein Porträtbild, das das Hauptmotiv für ein mobiles Layout heranzoomt. Sie können dieses Problem mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungswechsel**: Das Problem, bei dem Sie kleinere Bilddateien an Geräte mit schmalen Bildschirmen senden möchten, da sie keine riesigen Bilder benötigen wie Desktop-Displays — und um verschiedene Auflösungsbilder an Bildschirme mit hoher oder niedriger Dichte zu senden. Sie können dieses Problem mit [Vektorgrafiken](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (SVG-Bildern) und den [`srcset`](/de/docs/Web/HTML/Element/img#srcset) mit [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attributen lösen.

## Siehe auch

- [Learn: Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Jason Grigsbys ausgezeichnete Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: Wenn Sie nur die Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — enthält eine weitere Erklärung, wie der Browser herausarbeitet, welches Bild zu verwenden ist
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}
