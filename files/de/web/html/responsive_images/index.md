---
title: Responsive Images
slug: Web/HTML/Responsive_images
l10n:
  sourceCommit: f35733893f8c17dcbf8e9d5cf2551f6fb1cbecd5
---

{{HTMLSidebar}}

In diesem Artikel lernen wir das Konzept von responsiven Bildern kennen — Bilder, die auf Geräten mit stark unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren — und schauen uns an, welche Werkzeuge HTML bietet, um deren Implementierung zu unterstützen. Dies trägt zur Verbesserung der Leistung auf verschiedenen Geräten bei.

## Warum responsive Bilder?

Betrachten wir ein typisches Szenario. Eine typische Website kann ein Header-Bild und einige Inhaltsbilder unter dem Header enthalten. Das Header-Bild wird wahrscheinlich die gesamte Breite des Headers einnehmen, und das Inhaltsbild passt irgendwo in die Inhalts-Spalte. Hier ist ein Beispiel:

![Unser Beispiel-Website, betrachtet auf einem breiten Bildschirm – hier funktioniert das erste Bild gut, da es groß genug ist, um die Details im Zentrum zu sehen.](picture-element-wide.png)

Dies funktioniert gut auf einem Breitbildgerät, wie einem Laptop oder Desktop (Sie können [das Beispiel live sehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/not-responsive.html) auf GitHub finden.) Wir werden das CSS in dieser Lektion nicht viel diskutieren, außer zu erwähnen, dass:

- Der Body-Inhalt auf eine maximale Breite von 1200 Pixeln eingestellt ist – in Viewports über dieser Breite bleibt der Body bei 1200px und zentriert sich im verfügbaren Raum. In Viewports unter dieser Breite bleibt der Body bei 100% der Breite des Viewports.
- Das Header-Bild ist so eingestellt, dass sein Zentrum immer in der Mitte des Headers bleibt, egal welche Breite der Header hat. Wenn die Seite auf einem schmaleren Bildschirm angesehen wird, können die wichtigen Details im Zentrum des Bildes (die Personen) immer noch gesehen werden, und der Überschuss geht an beiden Seiten verloren. Es ist 200px hoch.
- Die Inhaltsbilder sind so eingestellt, dass sie beginnen zu schrumpfen, wenn das Body-Element kleiner als das Bild wird, damit sie immer im Body bleiben und nicht darüber hinausgehen.

Probleme treten jedoch auf, wenn Sie die Seite auf einem Gerät mit schmalem Bildschirm betrachten. Der Header unten sieht in Ordnung aus, aber er beginnt, viel von der Bildschirmhöhe eines mobilen Geräts einzunehmen. Und in dieser Größe sind die Gesichter der zwei Personen im ersten Inhaltsbild schwer zu erkennen.

![Unsere Beispielseite betrachtet auf einem schmalen Bildschirm; das erste Bild ist so geschrumpft, dass es schwierig ist, die Details zu erkennen.](non-responsive-narrow.png)

Eine Verbesserung wäre, eine beschnittene Version des Bildes anzuzeigen, die die wichtigen Details zeigt, wenn die Seite auf einem schmalen Bildschirm betrachtet wird. Ein zweites beschnittenes Bild könnte für ein Gerät mit mittlerer Breite wie ein Tablet angezeigt werden. Das allgemeine Problem, bei dem Sie verschiedene beschnittene Bilder auf diese Weise für verschiedene Layouts bereitstellen möchten, ist allgemein als **Art-Direction-Problem** bekannt.

Darüber hinaus besteht keine Notwendigkeit, so große Bilder auf der Seite einzubetten, wenn sie auf einem mobilen Bildschirm betrachtet wird. Dadurch kann Bandbreite verschwendet werden; insbesondere möchten mobile Nutzer keine Bandbreite verschwenden, indem sie ein großes Bild herunterladen, das für Desktop-Nutzer gedacht ist, wenn ein kleines Bild für ihr Gerät ausreichen würde. Umgekehrt beginnt ein kleines {{Glossary("Raster_image", "Rasterbild")}} körnig auszusehen, wenn es größer als seine ursprüngliche Größe angezeigt wird (ein Rasterbild ist eine feste Anzahl von Pixeln breit und eine feste Anzahl von Pixeln hoch). Idealerweise würden dem Webbrowser des Nutzers mehrere Auflösungen zur Verfügung gestellt. Der Browser könnte dann die optimale Auflösung zum Laden basierend auf der Bildschirmgröße des Nutzergeräts bestimmen. Dies wird als **Auflösungsumschaltungsproblem** bezeichnet.

Um die Sache komplizierter zu machen, haben einige Geräte hochauflösende Bildschirme, die größere Bilder benötigen, als Sie erwarten könnten, um schön dargestellt zu werden. Dies ist im Wesentlichen dasselbe Problem, aber in einem etwas anderen Kontext.

Sie könnten denken, dass Vektorbilder diese Probleme lösen würden, und das tun sie bis zu einem gewissen Grad — sie sind klein in der Dateigröße und skalieren gut, und Sie sollten sie wann immer möglich verwenden. Sie eignen sich jedoch nicht für alle Bildarten. Vektorbilder sind großartig für einfache Grafiken, Muster, Schnittstellenelemente usw., aber es wird sehr komplex, ein vektorbasiertes Bild mit der Art von Details zu erstellen, die man in einem Foto finden würde. Rasterbildformate wie JPEGs eignen sich besser für die Art von Bildern, die wir im obigen Beispiel sehen.

Diese Art von Problem existierte nicht, als das Web erstmals im frühen bis mittleren 90ern existierte — damals waren die einzigen Geräte, die das Web durchsuchen konnten, Desktops und Laptops, sodass Browserentwickler und Spec-Schreiber nicht einmal daran dachten, Lösungen zu implementieren. _Responsive-Bild-Technologien_ wurden kürzlich implementiert, um die oben genannten Probleme zu lösen, indem Sie dem Browser mehrere Bilddateien anbieten, entweder alle mit demselben Inhalt aber unterschiedlicher Pixelanzahl (_Auflösungsumschaltung_) oder unterschiedliche Bilder, die für verschiedene Raumeinteilungen geeignet sind (_Art-Direction_).

> [!NOTE]
> Die neuen Funktionen, die in diesem Artikel besprochen werden — [`srcset`](/de/docs/Web/HTML/Element/img#srcset)/[`sizes`](/de/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} — werden alle in modernen Desktop- und Mobilbrowsern unterstützt.

## Wie erstellt man responsive Bilder?

In diesem Abschnitt werden wir uns die beiden oben beschriebenen Probleme ansehen und zeigen, wie man sie mit den responsiven Bildfunktionen von HTML lösen kann. Sie sollten beachten, dass wir uns auf {{htmlelement("img")}}-Elemente für diesen Abschnitt konzentrieren werden, wie sie im Inhaltsbereich des obigen Beispiels zu sehen sind — das Bild im Header der Site dient nur zur Dekoration und wird daher mit CSS-Hintergrundbildern implementiert. [CSS hat wohl bessere Werkzeuge für responsives Design](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/) als HTML, und wir werden in einem zukünftigen CSS-Modul darüber sprechen.

### Auflösungsumschaltung: Verschiedene Größen

Also, was ist das Problem, das wir mit der Auflösungsumschaltung lösen wollen? Wir wollen identischen Bildinhalt anzeigen, nur größer oder kleiner je nach Gerät — das ist die Situation, die wir mit dem zweiten Inhaltsbild in unserem Beispiel haben. Das standardmäßige {{htmlelement("img")}}-Element lässt Sie traditionell nur eine einzige Quelldatei an den Browser übermitteln:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy" />
```

Wir können jedoch zwei Attribute verwenden — [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) — um mehrere zusätzliche Quellbilder zusammen mit Hinweisen bereitzustellen, die dem Browser helfen, das richtige auszuwählen. Sie können ein Beispiel dafür in unserem [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html)-Beispiel auf GitHub sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/responsive.html)):

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

Die `srcset`- und `sizes`-Attribute sehen kompliziert aus, sind aber nicht so schwer zu verstehen, wenn Sie sie wie oben gezeigt formatieren, mit einem anderen Teil des Attributwerts in jeder Zeile. Jeder Wert enthält eine kommagetrennte Liste, und jeder Teil dieser Listen besteht aus drei Unterteilen. Lassen Sie uns nun die Inhalte jedes einzelnen durchgehen:

**`srcset`** definiert die Menge der Bilder, aus denen der Browser wählen kann, und welche Größe jedes Bild hat. Jedes Bildinformationsset wird durch ein Komma vom vorherigen getrennt. Für jedes schreiben wir:

1. Einen **Bilddateinamen** (`elva-fairy-480w.jpg`)
2. Ein Leerzeichen
3. Die **intrinsische Breite des Bildes in Pixeln** (`480w`) — beachten Sie, dass dies die Einheit `w` verwendet, nicht `px`, wie Sie vielleicht erwarten. Die {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eines Bildes ist seine tatsächliche Größe, die Sie herausfinden können, indem Sie die Bilddatei auf Ihrem Computer inspizieren (zum Beispiel können Sie auf einem Mac das Bild im Finder auswählen und <kbd>Cmd</kbd> + <kbd>I</kbd> drücken, um den Informationsbildschirm aufzurufen).

**`sizes`** definiert eine Menge von Medienbedingungen (z. B. Bildschirmbreiten) und gibt an, welche Bildgröße am besten ausgewählt werden sollte, wenn bestimmte Medienbedingungen zutreffen — dies sind die Hinweise, über die wir vorhin gesprochen haben. In diesem Fall schreiben wir vor jedem Komma:

1. Eine **Medienbedingung** (`(max-width:600px)`) — Sie werden mehr über diese im [CSS-Thema](/de/docs/Learn_web_development/Core/Styling_basics) lernen, aber lassen Sie uns vorerst einfach sagen, dass eine Medienbedingung einen möglichen Zustand beschreibt, in dem sich der Bildschirm befinden kann. In diesem Fall sagen wir "wenn die Viewport-Breite 600 Pixel oder weniger beträgt".
2. Ein Leerzeichen
3. Die **Breite des Slots**, den das Bild ausfüllen wird, wenn die Medienbedingung zutrifft (`480px`)

> [!NOTE]
> In `sizes` können Sie jeden [Längenwert](/de/docs/Web/CSS/length) verwenden. Zum Beispiel, anstatt eine absolute Breite anzugeben (zum Beispiel `480px`), können Sie alternativ eine Breite im Verhältnis zur Viewport angeben (zum Beispiel `50vw`). Allerdings können Sie keine Prozentangabe als Slot-Breite verwenden. Sie haben vielleicht bemerkt, dass die letzte Slot-Breite keine Medienbedingung hat (dies ist der Standardwert, der gewählt wird, wenn keine der Medienbedingungen zutrifft). Der Browser ignoriert alles nach der ersten zutreffenden Bedingung, also seien Sie vorsichtig, wie Sie die Medienbedingungen anordnen.

Mit diesen Attributen an Ort und Stelle, wird der Browser:

1. Die Bildschirmgröße, Pixeldichte, Zoomstufe, Bildschirmorientierung und Netzgeschwindigkeit betrachten.
2. Bestimmen, welche Medienbedingung in der `sizes`-Liste die erste ist, die wahr ist.
3. Auf die angegebenen Slot-Größe für diese Medienabfrage schauen.
4. Das Bild laden, das in der `srcset`-Liste referenziert ist und dieselbe Größe wie der Slot hat oder, falls es kein solches gibt, das erste Bild, das größer ist als die gewählte Slot-Größe.

Und das war's! An diesem Punkt, wenn ein unterstützender Browser mit einer Viewport-Breite von 480px die Seite lädt, ist die `(max-width: 600px)`-Medienbedingung wahr, und der Browser wählt den `480px`-Slot. Das `elva-fairy-480w.jpg` wird geladen, da seine inhärente Breite (`480w`) am nächsten zur Slot-Größe ist. Das 800px-Bild ist 128KB auf der Festplatte, während die 480px-Version nur 63KB ist — eine Einsparung von 65KB. Stellen Sie sich nun vor, dass dies eine Seite mit vielen Bildern wäre. Mit dieser Technik könnten mobile Nutzer viel Bandbreite sparen.

> [!NOTE]
> Wenn Sie dies mit einem Desktop-Browser testen und der Browser die schmaleren Bilder nicht lädt, wenn Sie sein Fenster auf die schmalste Breite eingestellt haben, schauen Sie sich an, wie der Viewport ist (Sie können ihn approximieren, indem Sie in der JavaScript-Konsole des Browsers `document.querySelector('html').clientWidth` eingeben). Verschiedene Browser haben minimale Größen, auf die Sie die Fensterbreite reduzieren können, und sie könnten breiter sein, als Sie denken. Beim Testen mit einem mobilen Browser können Sie Tools wie die `about:debugging`-Seite von Firefox verwenden, um die geladene Seite auf dem Mobilgerät mit den Entwicklerwerkzeugen des Desktop zu inspizieren.
>
> Um zu sehen, welche Bilder geladen wurden, können Sie den [Netzwerkmonitor der Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) oder das [Netzwerk-Panel der Chrome DevTools](https://developer.chrome.com/docs/devtools/network/) verwenden. Für Chrome möchten Sie möglicherweise auch den [Cache deaktivieren](https://stackoverflow.com/a/7000899/13725861), um zu verhindern, dass bereits heruntergeladene Bilder ausgewählt werden.

Ältere Browser, die diese Funktionen nicht unterstützen, werden sie einfach ignorieren. Stattdessen laden diese Browser das Bild, das im [`src`](/de/docs/Web/HTML/Element/img#src)- Attribut angegeben ist, wie gewohnt.

> [!NOTE]
> Im {{htmlelement("head")}} des oben verlinkten Beispiels finden Sie die Zeile `<meta name="viewport" content="width=device-width">`: Dies zwingt mobile Browser dazu, ihre tatsächliche Viewport-Breite für das Laden von Webseiten anzunehmen (einige mobile Browser lügen über ihre Viewport-Breite und laden stattdessen Seiten in einer größeren Viewport-Breite, um dann die geladene Seite zu verkleinern, was nicht sehr hilfreich für responsive Bilder ist).

### Auflösungsumschaltung: Gleiche Größe, unterschiedliche Auflösungen

Angenommen, Sie haben ein Bild, das mit derselben realen Größe auf Displays angezeigt wird, die unterschiedliche Bildschirmauflösungen haben. Sie können ein besseres Benutzererlebnis auf hochauflösenden Displays bieten, indem Sie eine hochauflösende Version des Bildes bereitstellen.

Um dies zu erreichen, können Sie dem Browser erlauben, ein angemessenes Auflösungsbild auszuwählen, indem Sie `srcset` mit x-Deskriptoren und ohne `sizes` verwenden — eine etwas einfachere Syntax! Sie finden ein Beispiel dafür in [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)):

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

Beachten Sie, dass, obwohl das Bild immer mit der gleichen Größe angezeigt wird, Sie auf hochauflösenden Displays mehr Details sehen können.

![Ein Bild eines kleinen Mädchens, das als Fee verkleidet ist, mit einem alten Kamera-Film-Effekt auf das Bild angewendet](resolution-example.png)

In diesem Beispiel wird das folgende CSS auf das Bild angewendet, sodass es eine Breite von 320 Pixeln auf dem Bildschirm hat (auch als CSS-Pixel bezeichnet):

```css
img {
  width: 320px;
}
```

In diesem Fall ist `sizes` nicht nötig — der Browser ermittelt, welche Auflösung das Display hat, auf dem es angezeigt wird, und liefert das am besten geeignete Bild, das in `srcset` referenziert ist. Wenn das Gerät, das auf die Seite zugreift, ein Standard-/niedrigauflösendes Display hat, mit einem {{Glossary("device_pixel", "Gerätepixel")}}, das jedem CSS-Pixel entspricht, wird das `elva-fairy-320w.jpg` Bild geladen (das 1x wird impliziert, sodass Sie es nicht einschließen müssen.) Hat das Gerät eine hohe Auflösung von zwei Geräte-Pixeln pro CSS-Pixel oder mehr, wird das `elva-fairy-640w.jpg` Bild geladen. Das 640px-Bild ist 93KB, während das 320px-Bild nur 39KB ist.

### Art-Direction

Zusammenfassend umfasst das **Art-Direction-Problem** den Wunsch, das angezeigte Bild an verschiedene Bildanzeigegrößen anzupassen. Zum Beispiel enthält eine Webseite eine große Landschaftsaufnahme mit einer Person in der Mitte, wenn sie in einem Desktop-Browser betrachtet wird. Wenn sie in einem mobilen Browser betrachtet wird, wird dasselbe Bild verkleinert, wodurch die Person im Bild sehr klein und schwer zu erkennen ist. Es wäre wahrscheinlich besser, ein kleineres, hochformatiges Bild auf dem Mobilgerät zu zeigen, das in die Person hineinzuzoomen. Das {{htmlelement("picture")}}-Element ermöglicht es uns, genau diese Art von Lösung zu implementieren.

Kehren wir zu unserem ursprünglichen [not-responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html)-Beispiel zurück, wir haben ein Bild, das dringend Art-Direction benötigt:

```html
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
```

Lassen Sie uns das mit {{htmlelement("picture")}} beheben! Ähnlich wie [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) ist das `<picture>`-Element ein Wrapper, der mehrere {{htmlelement("source")}}-Elemente enthält, die dem Browser unterschiedliche Quellen zur Auswahl bieten, gefolgt von dem unverzichtbaren {{htmlelement("img")}}-Element. Der Code in [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) sieht folgendermaßen aus:

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- Die `<source>`-Elemente enthalten ein `media`-Attribut, das eine Medienbedingung enthält — ähnlich wie im ersten `srcset`-Beispiel sind diese Bedingungen Tests, die entscheiden, welches Bild angezeigt wird — das erste, das wahr zurückgibt, wird angezeigt. In diesem Fall, wenn die Viewport-Breite 799px breit oder weniger ist, wird das Bild des ersten `<source>`-Elements angezeigt. Wenn die Viewport-Breite 800px oder mehr beträgt, ist es das zweite.
- Die `srcset`-Attribute enthalten den Pfad zu dem anzuzeigenden Bild. Wie wir bereits bei `<img>` gesehen haben, kann `<source>` ein `srcset`-Attribut mit mehreren referenzierten Bildern sowie ein `sizes`-Attribut enthalten. Sie könnten also mehrere Bilder über ein `<picture>`-Element anbieten, dann aber auch mehrere Auflösungen jedes einzelnen anbieten. Realistisch betrachtet werden Sie das nicht sehr oft tun wollen.
- In allen Fällen müssen Sie ein `<img>`-Element mit `src` und `alt` direkt vor `</picture>` bereitstellen, sonst werden keine Bilder angezeigt. Dies bietet einen Standardfall, der angewendet wird, wenn keine der Medienbedingungen wahr ist (Sie könnten in diesem Beispiel tatsächlich das zweite `<source>`-Element entfernen), und eine Fallback-Lösung für Browser, die das `<picture>`-Element nicht unterstützen.

Dieser Code ermöglicht es uns, ein geeignetes Bild sowohl auf Breitbild- als auch auf schmalen Bildschirmen anzuzeigen, wie unten gezeigt:

![Unsere Beispielseite, wie sie auf einem Breitbild-Bildschirm angezeigt wird – hier funktioniert das erste Bild gut, da es groß genug ist, um die Details im Zentrum zu sehen.](picture-element-wide.png)![Unsere Beispielseite, wie sie auf einem schmalen Bildschirm angezeigt wird, wobei das `<picture>`-Element verwendet wird, um das erste Bild zu einem Hochformat-Detailbild zu wechseln, was es auf einem schmalen Bildschirm viel nützlicher macht](picture-element-narrow.png)

> [!NOTE]
> Sie sollten das `media`-Attribut nur in Art-Direction-Szenarien verwenden; wenn Sie `media` verwenden, bieten Sie keine Medienbedingungen innerhalb des `sizes`-Attributs an.

### Warum können wir das nicht einfach mit CSS oder JavaScript machen?

Wenn der Browser beginnt, eine Seite zu laden, beginnt er auch, Bilder vorzuladen, bevor der Hauptparser begonnen hat, das CSS und JavaScript der Seite zu laden und zu interpretieren. Dieser Mechanismus ist im Allgemeinen nützlich, um die Ladezeiten von Seiten zu reduzieren, aber er ist nicht hilfreich für responsive Bilder — daher die Notwendigkeit, Lösungen wie `srcset` zu implementieren. Beispielsweise könnten Sie das {{htmlelement("img")}}-Element nicht laden, dann die Viewport-Breite mit JavaScript ermitteln und dann dynamisch die Bildquelle zu einem kleineren Bild wechseln, falls gewünscht. Bis dahin wäre das ursprüngliche Bild bereits geladen, und Sie würden das kleine Bild zusätzlich laden, was sogar noch schlechter in Bezug auf responsive Bilder ist.

## Aktives Lernen: Implementieren Sie Ihre eigenen responsiven Bilder

Für dieses aktive Lernen erwarten wir, dass Sie mutig sind und es überwiegend allein machen. Wir möchten, dass Sie Ihr eigenes geeignetes art-direktioniertes Schmalbild-/Breitbildbeispiel mit `<picture>` und ein Auflösungsumschaltungsbeispiel, das `srcset` verwendet, implementieren.

1. Schreiben Sie etwas einfaches HTML, um Ihren Code zu enthalten (verwenden Sie `not-responsive.html` als Ausgangspunkt, wenn Sie möchten).
2. Finden Sie ein schönes Breitbild-Landschaftsbild mit irgendeiner Art von Detail darin. Erstellen Sie eine webgerechte Version davon mit einem Grafikeditor, schneiden Sie es dann zu, um einen kleineren Teil zu zeigen, der auf das Detail zoomt, und erstellen Sie ein zweites Bild (ungefähr 480px breit ist dafür gut).
3. Verwenden Sie das `<picture>`-Element, um einen Art-Direction-Bildwechsler zu implementieren!
4. Erstellen Sie mehrere Bilddateien in verschiedenen Größen, die alle dasselbe Bild zeigen.
5. Verwenden Sie `srcset`/`sizes`, um ein Auflösungsumschaltungsbeispiel zu erstellen, entweder um gleichgroße Bilder in unterschiedlichen Auflösungen für unterschiedliche Geräteeinstellungen zu liefern oder um verschiedene Bildgrößen je nach Viewport-Breiten bereitzustellen.

## Zusammenfassung

Damit sind wir am Ende der Lektion über responsive Bilder — wir hoffen, es hat Ihnen Spaß gemacht, mit diesen neuen Techniken zu arbeiten. Zusammenfassend haben wir hier über zwei verschiedene Probleme gesprochen:

- **Art-Direction**: Das Problem, bei dem Sie beschnittene Bilder für verschiedene Layouts bereitstellen möchten — zum Beispiel ein Landschaftsbild, das eine vollständige Szene für ein Desktop-Layout zeigt, und ein Hochformat-Bild, das das Hauptmotiv für ein mobiles Layout hineinzoomt. Sie können dieses Problem mit dem {{htmlelement("picture")}}-Element lösen.
- **Auflösungsumschaltung**: Das Problem, bei dem Sie kleinere Bilddateien an Geräte mit schmalem Bildschirm senden möchten, da sie keine riesigen Bilder wie Desktop-Displays benötigen — und verschiedene Auflösungsbilder an Bildschirme mit hoher Dichte/niedriger Dichte senden möchten. Sie können dieses Problem mit [Vektorgrafiken](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) (SVG-Bildern) und den [`srcset`](/de/docs/Web/HTML/Element/img#srcset)- und [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attributen lösen.

## Siehe auch

- [Lernen: Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [Jason Grigsbys hervorragende Einführung in responsive Bilder](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [Responsive Images: Wenn Sie nur Auflösungen ändern, verwenden Sie srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — enthält mehr Erklärungen dazu, wie der Browser die Entscheidung trifft, welches Bild er verwenden soll.
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}
