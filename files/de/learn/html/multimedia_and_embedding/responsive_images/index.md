---
title: Responsive Images
slug: Learn/HTML/Multimedia_and_embedding/Responsive_images
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}

In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen — Bilder, die gut auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen solchen Merkmalen funktionieren — und schauen uns an, welche Werkzeuge HTML bietet, um sie zu implementieren. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern. Responsive Bilder sind nur ein Teil des [responsive Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), ein zukünftiges CSS-Thema, das Sie lernen werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits die
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Grundlagen von HTML</a> kennen
        und wissen, wie man
        <a href="/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">statische Bilder in eine Webseite einfügt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Funktionen wie
        <a href="/de/docs/Web/HTML/Element/img#srcset"><code>srcset</code></a> und das
        {{htmlelement("picture")}}-Element verwendet, um responsive
        Bildlösungen auf Webseiten zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Warum responsive Bilder?

Betrachten wir ein typisches Szenario. Eine typische Website kann ein Header-Bild und einige Inhaltsbilder unter dem Header enthalten. Das Header-Bild wird wahrscheinlich die gesamte Breite des Headers einnehmen, und das Inhaltsbild wird irgendwo innerhalb der Inhaltsspalte passen. Hier ist ein einfaches Beispiel:

![Unsere Beispielseite, wie sie auf einem Breitbildschirm angezeigt wird - hier funktioniert das erste Bild gut, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie einem Laptop oder Desktop (Sie können [das Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden.) Wir werden das CSS in dieser Lektion nicht viel diskutieren, außer zu sagen:

- Der Hauptinhalt wurde auf eine maximale Breite von 1200 Pixeln gesetzt — in Ansichten über dieser Breite bleibt der Hauptinhalt bei 1200px und zentriert sich im verfügbaren Raum. In Ansichten unter dieser Breite bleibt er bei 100% der Breite der Ansicht.
- Das Header-Bild wurde so eingestellt, dass sein Zentrum immer in der Mitte des Headers bleibt, egal auf welche Breite die Überschrift eingestellt ist. Wird die Website auf einem schmaleren Bildschirm angezeigt, bleiben die wichtigen Details in der Mitte des Bildes (die Personen) sichtbar, und der Überschuss geht rechts und links verloren. Es ist 200px hoch.
- Die Inhaltsbilder wurden so eingestellt, dass sie anfangen zu schrumpfen, wenn das Body-Element kleiner als das Bild wird, sodass sie immer im Body bleiben und ihn nicht überlaufen.

Allerdings treten Probleme auf, wenn Sie anfangen, die Seite auf einem Gerät mit schmalem Bildschirm zu betrachten. Der Header unten sieht OK aus, aber er beginnt, einen Großteil der Bildschirmhöhe auf einem mobilen Gerät einzunehmen. Und bei dieser Größe ist es schwierig, die Gesichter der beiden Personen im ersten Inhaltsbild zu erkennen.

![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm angezeigt wird; das erste Bild ist so stark geschrumpft, dass es schwierig ist, die Details darauf zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre es, eine zugeschnittene Version des Bildes anzuzeigen, die die wichtigen Details des Bildes zeigt, wenn die Seite auf einem schmalen Bildschirm angezeigt wird. Ein zweites zugeschnittenes Bild könnte für ein Gerät mit mittlerer Bildschirmbreite, wie ein Tablet, angezeigt werden. Das allgemeine Problem, bei dem Sie verschiedene zugeschnittene Bilder auf diese Weise für verschiedene Layouts bereitstellen möchten, wird allgemein als das **Art-Direction-Problem** bezeichnet.

Außerdem ist es nicht erforderlich, solch große Bilder auf der Seite einzubetten, wenn sie auf einem mobilen Bildschirm betrachtet wird. Dies kann Bandbreite verschwenden; insbesondere mobile Nutzer möchten keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Nutzer vorgesehen ist, wenn ein kleines Bild für ihr Gerät ausreichen würde. Umgekehrt beginnt ein kleines [Rasterbild](/de/docs/Glossary/Raster_image) körnig auszusehen, wenn es größer als seine Originalgröße angezeigt wird (ein Rasterbild hat eine festgelegte Anzahl von Pixeln in der Breite und Höhe, wie wir gesehen haben, als wir uns [Vektorgrafiken](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) ansahen). Idealerweise würden dem Webbrowser des Benutzers mehrere Auflösungen zur Verfügung gestellt werden. Der Browser könnte dann die optimale Auflösung basierend auf der Bildschirmgröße des Benutzergeräts bestimmen. Dies wird als das **Auflösungs-Umschaltungs-Problem** bezeichnet.

Um die Dinge komplizierter zu machen, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als Sie erwarten würden, damit sie gut dargestellt werden können. Dies ist im Wesentlichen das gleiche Problem, jedoch in einem etwas anderen Kontext.

Sie könnten denken, dass Vektorbilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad — sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie wann immer möglich verwenden. Sie sind jedoch nicht für alle Bildtypen geeignet. Vektorbilder sind großartig für einfache Grafiken, Muster, Interface-Elemente usw., aber es wird sehr komplex, ein vektorbasiertes Bild mit der Art von Detail zu erstellen, die Sie in einem Foto finden würden. Rasterbildformate wie JPEGs eignen sich besser für die Art von Bildern, die wir im obigen Beispiel sehen.

Diese Art von Problem existierte nicht, als das Web zum ersten Mal existierte, in den frühen bis mittleren 90er Jahren — damals waren die einzigen Geräte, die existierten, um das Web zu durchsuchen, Desktops und Laptops, sodass Browser-Ingenieure und Spezifizierer nicht daran dachten, Lösungen zu implementieren. _Responsive Bildtechnologien_ wurden kürzlich implementiert, um die oben genannten Probleme zu lösen, indem es Ihnen ermöglicht wird, dem Browser mehrere Bilddateien anzubieten, entweder alle zeigen dasselbe, aber mit unterschiedlichen Pixeлzahlen (_Auflösungs-Umschaltung_), oder verschiedene Bilder, die für verschiedene Platzzuweisungen geeignet sind (_Art Direction_).

> [!NOTE]
> Die in diesem Artikel diskutierten neuen Funktionen — [`srcset`](/de/docs/Web/HTML/Element/img#srcset)/[`sizes`](/de/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} — werden alle in modernen Desktop- und Mobil-Browsern unterstützt.

## Wie erstellt man responsive Bilder?

In diesem Abschnitt betrachten wir die beiden oben illustrierten Probleme und zeigen, wie man sie mit den responsiven Bildfunktionen von HTML löst. Beachten Sie, dass wir uns in diesem Abschnitt auf {{htmlelement("img")}}-Elemente konzentrieren werden, wie sie im Inhaltsbereich des obigen Beispiels zu sehen sind — das Bild im Site-Header dient nur zur Dekoration und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat möglicherweise bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden darüber in einem zukünftigen CSS-Modul sprechen.

### Auflösungs-Umschaltung: Verschiedene Größen

Was ist also das Problem, das wir mit der Auflösungs-Umschaltung lösen wollen? Wir möchten identische Bildinhalte anzeigen, nur größer oder kleiner je nach Gerät — dies ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das standardmäßige {{htmlelement("img")}}-Element lässt traditionell nur zu, dass Sie den Browser auf eine einzelne Quelldatei verweisen:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden — [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) — um mehrere zusätzliche Quellbilder bereitzustellen, zusammen mit Hinweisen, die dem Browser helfen, das richtige auszuwählen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) Beispiel auf GitHub sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die Attribute `srcset` und `sizes` sehen kompliziert aus, sind aber nicht allzu schwer zu verstehen, wenn Sie sie wie oben gezeigt formatieren, mit einem anderen Teil des Attributwerts in jeder Zeile. Jeder Wert enthält eine komma-getrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Lassen Sie uns jetzt den Inhalt jedes einzelnen durchgehen:

**`srcset`** definiert die Menge an Bildern, die wir dem Browser zur Auswahl stellen, und welche Größe jedes Bild hat. Jede Bildinformation ist durch ein Komma vom vorherigen getrennt. Für jedes schreiben wir:

1. Einen **Bilddateinamen** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite in Pixeln** des Bildes (`480w`) — beachten Sie, dass dies die `w`-Einheit verwendet, nicht `px`, wie Sie vielleicht erwarten. Die [intrinsische Größe](/de/docs/Glossary/Intrinsic_Size) eines Bildes ist seine tatsächliche Größe, die durch die Inspektion der Bilddatei auf Ihrem Computer gefunden werden kann (zum Beispiel auf einem Mac können Sie das Bild im Finder auswählen und

   <kbd>Cmd</kbd>

   \+

   <kbd>I</kbd>

   drücken, um den Informationsbildschirm aufzurufen).

**`sizes`** definiert eine Reihe von Medienbedingungen (z.B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten zu wählen wäre, wenn bestimmte Medienbedingungen wahr sind — dies sind die Hinweise, über die wir zuvor gesprochen haben. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(max-width:600px)`) — Sie werden mehr darüber im [CSS-Thema](/de/docs/Learn/CSS) lernen, aber für jetzt sagen wir einfach, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir "wenn die Viewport-Breite 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild bei wahrer Medienbedingung ausfüllen wird (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Zum Beispiel, anstelle einer absoluten Breite (zum Beispiel `480px`) können Sie alternativ eine Breite relativ zum Viewport angeben (zum Beispiel `50vw`). Sie können jedoch keine Prozente für die Slotbreite verwenden. Möglicherweise haben Sie bemerkt, dass die letzte Slotbreite keine Medienbedingung hat (diese wird als Standard gewählt, wenn keine der Medienbedingungen wahr ist). Der Browser ignoriert alles nach der ersten übereinstimmenden Bedingung, also seien Sie vorsichtig, wie Sie die Medienbedingungen anordnen.

Mit diesen Attributen an Ort und Stelle wird der Browser:

1. Die Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmorientierung und Netzwerkgeschwindigkeit berücksichtigen.
2. Bestimmen, welche Medienbedingung in der `sizes`-Liste die erste ist, die wahr ist.
3. Die Slotgröße überprüfen, die dieser Medienabfrage zugeordnet ist.
4. Das Bild laden, auf das in der `srcset`-Liste verwiesen wird und das die gleiche Größe wie der Slot hat oder, wenn es kein solches gibt, das erste Bild, das größer als die gewählte Slotgröße ist.

Und das war's! An diesem Punkt, wenn ein unterstützender Browser mit einer Viewport-Breite von 480px die Seite lädt, wird die `(max-width: 600px)` Medienbedingung wahr sein, und daher wird der Browser den `480px` Slot wählen. Das `elva-fairy-480w.jpg` wird geladen, da seine inhärente Breite (`480w`) der Slotgröße am nächsten liegt. Das 800px Bild ist 128KB auf der Festplatte, wohingegen die 480px Version nur 63KB beträgt — eine Ersparnis von 65KB. Stellen Sie sich nun vor, dies wäre eine Seite mit vielen Bildern. Diese Technik zu verwenden, könnte mobilen Nutzern viel Bandbreite ersparen.

> [!NOTE]
> Wenn Sie dies mit einem Desktop-Browser testen und der Browser die schmaleren Bilder nicht lädt, obwohl Sie sein Fenster auf die schmalste Breite eingestellt haben, schauen Sie sich an, was der Viewport ist (Sie können ihn annähernd bestimmen, indem Sie in die JavaScript-Konsole des Browsers gehen und `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben minimale Größen, auf die sie die Fensterbreite reduzieren lassen, und sie können breiter sein, als Sie denken. Wenn Sie es mit einem mobilen Browser testen, können Sie Tools wie die Firefox `about:debugging`-Seite verwenden, um die geladene Seite auf dem Mobilgerät mit den Entwickler-Tools des Desktops zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie die [Netzwerküberwachung](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) in den Firefox DevTools oder das [Netzwerkbedienfeld](https://developer.chrome.com/docs/devtools/network/) in den Chrome DevTools verwenden. Für Chrome sollten Sie außerdem [den Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder verwendet werden.

Ältere Browser, die diese Funktionen nicht unterstützen, ignorieren sie einfach. Stattdessen laden diese Browser das Bild, auf das im [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut verwiesen wird, wie gewohnt.

> [!NOTE]
> Im {{htmlelement("head")}} des oben verlinkten Beispiels werden Sie die Zeile `<meta name="viewport" content="width=device-width">` finden: Sie zwingt mobile Browser dazu, ihre tatsächliche Viewport-Breite für das Laden von Webseiten zu übernehmen (einige mobile Browser lügen über ihre Viewport-Breite und laden stattdessen Seiten mit einer größeren Viewport-Breite und verkleinern die geladene Seite dann, was für responsive Bilder oder Design nicht sehr hilfreich ist).

### Auflösungs-Umschaltung: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das mit der gleichen realen Größe auf Bildschirmen mit unterschiedlichen Bildschirmauflösungen angezeigt wird. Sie können eine bessere Benutzererfahrung auf hochauflösenden Bildschirmen bieten, indem Sie eine höher aufgelöste Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie dem Browser erlauben, ein Bild mit der entsprechenden Auflösung auszuwählen, indem Sie `srcset` mit x-Beschreibern und ohne `sizes` verwenden — eine etwas einfachere Syntax! Sie können ein Beispiel dafür sehen, wie dies in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) aussieht (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass Sie, obwohl das Bild immer mit derselben Größe angezeigt wird, auf Bildschirmen mit höherer Auflösung mehr Details sehen können.

![Ein Bild eines kleinen Mädchens, das als Fee verkleidet ist, mit einem alten Kamera-Filmeffekt auf das Bild angewendet](resolution-example.png)

In diesem Beispiel wird das folgende CSS auf das Bild angewendet, damit es auf dem Bildschirm eine Breite von 320 Pixeln hat (auch als CSS-Pixel bezeichnet):

```css
img {
  width: 320px;
}
```

In diesem Fall ist `sizes` nicht nötig — der Browser berechnet, welche Auflösung das Display, auf dem es gezeigt wird, hat, und liefert das geeignetste Bild, auf das in `srcset` verwiesen wird. Wenn das Gerät, das die Seite abruft, über eine Standardniedrigauflösung verfügt, bei der ein Gerät-Pixel jeweils einem CSS-Pixel entspricht, wird das `elva-fairy-320w.jpg`-Bild geladen (das 1x ist impliziert, daher müssen Sie es nicht einschließen). Wenn das Gerät eine hohe Auflösung von zwei Gerät-Pixeln pro CSS-Pixel oder mehr hat, wird das `elva-fairy-640w.jpg`-Bild geladen. Das 640px-Bild ist 93KB, während das 320px-Bild nur 39KB beträgt.

### Art Direction

Um zusammenzufassen, das **Art Direction Problem** beinhaltet den Wunsch, das angezeigte Bild an unterschiedliche Bilddarstellungsgrößen anzupassen. Beispielsweise enthält eine Webseite ein großes Landschaftsbild mit einer Person in der Mitte, wenn es in einem Desktop-Browser angezeigt wird. Wenn es in einem mobilen Browser angesehen wird, wird dasselbe Bild verkleinert, wodurch die Person im Bild sehr klein und schwer zu sehen wird. Es wäre wahrscheinlich besser, ein kleineres, porträtorientiertes Bild auf mobilen Geräten anzuzeigen, das die Person heranzoomen lässt. Das {{htmlelement("picture")}}-Element ermöglicht es uns, genau diese Art von Lösung zu implementieren.

Wenn wir zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) Beispiel zurückkehren, haben wir ein Bild, das dringend Art Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns dies mit {{htmlelement("picture")}} korrigieren! Wie [`<video>` und `<audio>`](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content), ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die verschiedene Quellen bereitstellen, aus denen der Browser auswählen kann, gefolgt von dem allentscheidenden {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht so aus:

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält — wie im ersten `srcset`-Beispiel sind diese Bedingungen Tests, die entscheiden, welches Bild angezeigt wird — das erste, das wahr wird, wird angezeigt. In diesem Fall wird, wenn die Viewport-Breite 799px oder weniger beträgt, das Bild des ersten `<source>`-Elements angezeigt. Wenn die Viewport-Breite 800px oder mehr beträgt, wird das zweite angezeigt.
- Die `srcset`-Attribute enthalten den Pfad zu dem Bild, das angezeigt werden soll. Genau wie wir es mit `<img>` oben gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut aufnehmen. Sie könnten also über ein `<picture>`-Element mehrere Bilder anbieten, aber auch mehrere Auflösungen jedes einzelnen. Realistisch gesehen werden Sie wahrscheinlich nicht sehr oft diese Art von Sache tun wollen.
- In allen Fällen müssen Sie ein `<img>`-Element mit `src` und `alt` direkt vor `</picture>` bereitstellen, sonst werden keine Bilder angezeigt. Dies bietet einen Standardfall, der angewendet wird, wenn keine der Medienbedingungen wahr ist (Sie könnten tatsächlich das zweite `<source>`-Element in diesem Beispiel entfernen), und einen Rückfall für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es uns, ein geeignetes Bild sowohl auf Breitbild- als auch auf Schmalbild-Anzeigen darzustellen, wie unten gezeigt:

![Unsere Beispielseite, wie sie auf einem Breitbildschirm angezeigt wird - hier funktioniert das erste Bild okay, da es groß genug ist, um die Details in der Mitte zu sehen.](picture-element-wide.png)![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm angezeigt wird, bei dem das Bild-Element verwendet wurde, um das erste Bild auf eine Porträtaufnahme zu wechseln, die die Details vergrößert und es auf einem schmalen Bildschirm viel nützlicher macht,](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Art Direction-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie nicht gleichzeitig Medienbedingungen im `sizes`-Attribut an.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser beginnt, eine Seite zu laden, beginnt er damit, Bilder herunterzuladen (preloading), bevor der Hauptparser begonnen hat, das CSS und JavaScript der Seite zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten von Seiten zu reduzieren, aber er ist nicht hilfreich für responsive Bilder — daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Beispielsweise könnten Sie das {{htmlelement("img")}}-Element nicht laden, dann die Viewport-Breite mit JavaScript erkennen und dann dynamisch das Quellbild auf ein kleineres Bild ändern, wenn gewünscht. Zu diesem Zeitpunkt wäre das Originalbild bereits geladen, und Sie würden das kleine Bild zusätzlich laden, was in Bezug auf responsive Bilder noch schlimmer wäre.

## Aktives Lernen: Eigene responsive Bilder implementieren

Für dieses aktive Lernen erwarten wir, dass Sie mutig sind und es zum Großteil allein machen. Wir möchten, dass Sie Ihr eigenes geeignetes mit Art-Direction umgesetztes schmal Bildschirm/Breit Bildschirm-Bild mit `ör <code>picture</code>`, und ein Auflösungs-Umschaltbeispiel, das `srcset` verwendet, implementieren.

1. Schreiben Sie etwas einfaches HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes Breitbild-Landschaftsbild mit irgendeiner Art von Detail darin irgendwo. Erstellen Sie eine webtaugliche Version davon mit einem Grafikeditor, schneiden Sie es dann zu, um einen kleineren Teil zu zeigen, der in das Detail hereinzoomt, und erstellen Sie ein zweites Bild (etwa 480px Breite ist dafür gut geeignet).
3. Verwenden Sie das `<picture>`-Element, um einen Art-Direction-Bildwechsler zu implementieren!
4. Erstellen Sie mehrere Bilddateien unterschiedlicher Größe, die alle dasselbe Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Auflösungs-Umschaltbeispiel zu erstellen, entweder um das Bild in verschiedenen Auflösungen je nach Geräteauflösung oder in verschiedenen Größen je nach Viewport-Breiten zu servieren.

## Zusammenfassung

Das war es für responsive Bilder — wir hoffen, dass Sie Spaß dabei hatten, mit diesen neuen Techniken zu spielen. Zur Erinnerung, es gibt zwei verschiedene Probleme, die wir hier diskutiert haben:

- **Art Direction**: Das Problem, dass Sie zugeschnittene Bilder für verschiedene Layouts bereitstellen möchten — zum Beispiel ein Landschaftsbild, das eine vollständigeSzene für ein Desktop-Layout zeigt, und ein Porträtbild, das das Hauptmotiv für ein mobiles Layout heranzoomen lässt. Dieses Problem können Sie mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungs-Umschaltung**: Das Problem, dass Sie für Geräte mit schmalem Bildschirm kleinere Bilddateien bereitstellen möchten, da sie keine riesigen Bilder wie Desktop-Displays benötigen — und unterschiedliche Auflösungsbilder für Displays mit hoher oder niedriger Dichte liefern. Dieses Problem können Sie mit [Vektorgrafiken](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) (SVG-Bilder) und den Attributen [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) lösen.

Dies bringt auch das gesamte Modul [Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding) zum Abschluss! Das Einzige, was jetzt noch zu tun ist, bevor Sie weitermachen, ist, unsere [Bewertung von Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page) zu versuchen und zu sehen, wie Sie dabei abschneiden. Viel Spaß!

## Siehe auch

- [Jason Grigsbys exzellente Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Bilder: Wenn Sie nur die Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — enthält weitere Erklärungen darüber, wie der Browser herausfindet, welches Bild verwendet werden soll
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}
