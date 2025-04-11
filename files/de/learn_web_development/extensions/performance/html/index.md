---
title: Optimierung der HTML-Leistung
short-title: Leistungsstarkes HTML
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}} {{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML ist von Natur aus schnell und zugänglich. Unsere Aufgabe als Entwickler ist es sicherzustellen, dass wir diese beiden Eigenschaften beibehalten, wenn wir HTML-Code erstellen oder bearbeiten. Komplikationen können auftreten, wenn zum Beispiel die Dateigröße eines eingebetteten {{htmlelement("video")}} zu groß ist oder wenn das Parsen von JavaScript das Rendering entscheidender Seitenelemente blockiert. Dieser Artikel führt Sie durch die wichtigsten Leistungsmerkmale von HTML, die die Qualität Ihrer Webseite erheblich verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Basissoftware installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >Client-seitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie sich HTML auf die Website-Leistung auswirkt
        und wie Sie Ihr HTML optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren?

Die erste Frage, die Sie sich stellen sollten, bevor Sie mit der Optimierung Ihres HTMLs beginnen, lautet: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen für jedes Projekt tatsächlich benötigt werden.

Dazu müssen Sie [die Leistung Ihrer Seite messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige davon sind mit anspruchsvollen [Leistungs-APIs](/de/docs/Web/API/Performance_API) verbunden. Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Tools wie eingebettete Browser-Netzwerk- und [Leistungstools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) verwendet, um die Teile der Seite zu untersuchen, die lange zum Laden benötigen und optimiert werden müssen.

## Wichtige Leistungsprobleme mit HTML

HTML ist leistungstechnisch einfach — es handelt sich größtenteils um Text, der klein ist und daher schnell heruntergeladen und gerendert werden kann. Die Hauptprobleme, die die Leistung einer Webseite beeinträchtigen können, sind:

- Größe der Bild- und Videodateien: Es ist wichtig zu überlegen, wie man mit dem Inhalt von Ersatzelementen wie {{htmlelement("img")}} und {{htmlelement("video")}} umgeht. Bild- und Videodateien sind groß und können das Gewicht der Seite erheblich erhöhen. Es ist daher wichtig, die Menge der heruntergeladenen Bytes auf einem Benutzergerät zu minimieren (zum Beispiel kleinere Bilder für Mobilgeräte bereitzustellen). Sie müssen auch darüber nachdenken, die wahrgenommene Leistung zu verbessern, indem Sie Bilder und Videos auf einer Seite nur dann laden, wenn sie benötigt werden.
- Bereitstellung eingebetteter Inhalte: Dies ist normalerweise der Inhalt, der in {{htmlelement("iframe")}}-Elementen eingebettet ist. Das Laden von Inhalten in `<iframe>`s kann die Leistung erheblich beeinträchtigen, daher sollte dies sorgfältig überlegt werden.
- Reihenfolge des Ressourcenladens: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte das HTML zuerst in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Sie können dann verschiedene Funktionen verwenden, um die Reihenfolge des Ressourcenladens für eine bessere Leistung zu beeinflussen. Zum Beispiel können Sie kritische CSS und Schriftarten frühzeitig vorgeladen, aber nicht-kritisches JavaScript erst später laden.

> [!NOTE]
> Es gibt ein Argument dafür, Ihre HTML-Struktur zu vereinfachen und Ihren Quellcode zu [minifizieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), sodass das Rendering und der Download schneller sind. Jedoch ist die Dateigröße von HTML im Vergleich zu Bildern und Videos vernachlässigbar, und das Rendering durch den Browser ist heutzutage sehr schnell. Wenn Ihr HTML-Quellcode so groß und komplex ist, dass er die Rendering- und Download-Leistung beeinträchtigt, haben Sie wahrscheinlich größere Probleme und sollten anstreben, den Code zu vereinfachen und den Inhalt aufzuteilen.

## Responsiver Umgang mit Ersatzelementen

[Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) hat die Art und Weise revolutioniert, wie Webinhaltslayouts auf verschiedenen Geräten gehandhabt werden. Ein wesentlicher Vorteil, den es ermöglicht, ist das dynamische Umschalten von Layouts, die für verschiedene Bildschirmgrößen optimiert sind, zum Beispiel ein Breitbildlayout im Vergleich zu einem schmalen (mobilen) Bildschirmlayout. Es kann auch das dynamische Umschalten von Inhalten basierend auf anderen Geräteattributen wie Auflösung oder Vorliebe für ein helles oder dunkles Farbschema bewältigen.

Die sogenannte "mobile first"-Technik kann sicherstellen, dass das Standardlayout für Geräte mit kleinem Bildschirm vorgesehen ist, sodass Mobilgeräte nur Bilder herunterladen, die für ihre Bildschirme geeignet sind, und nicht die Leistungseinbußen hinnehmen müssen, wenn größere Desktop-Bilder heruntergeladen werden. Da dies jedoch mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) in Ihrem CSS gesteuert wird, kann dies nur die Leistung von in CSS geladenen Bildern positiv beeinflussen.

In den folgenden Abschnitten fassen wir zusammen, wie Sie responsive Ersatzelemente implementieren. Sie finden viel detailliertere Informationen zu diesen Implementierungen in den [HTML Video- und Audio-](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) und [Responsive-Bilder-](/de/docs/Web/HTML/Guides/Responsive_images) Leitfäden.

### Bereitstellung verschiedener Bildauflösungen über srcset

Um je nach Auflösung des Geräts und Ansichtsfenstergröße unterschiedliche Auflösungen derselben Bilder anzubieten, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) verwenden.

Dieses Beispiel bietet unterschiedlich große Bilder für verschiedene Bildschirmbreiten an:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` bietet die intrinsische Größe der Quellbilder zusammen mit ihren Dateinamen und `sizes` bietet Media Queries zusammen mit Bildplatzbreiten, die jeweils ausgefüllt werden müssen. Der Browser entscheidet dann, welche Bilder für jeden Slot sinnvoll zu laden sind. Zum Beispiel, wenn die Bildschirmbreite `600px` oder weniger beträgt, dann ist `max-width: 600px` wahr, und daher wird der auszufüllende Slot als `480px` bezeichnet. In diesem Fall wird der Browser wahrscheinlich die 480w.jpg-Datei (480 Pixel breites Bild) laden. Dies hilft bei der Leistung, da Browser keine größeren Bilder laden als benötigt.

Dieses Beispiel bietet unterschiedliche Auflösungsbilder für unterschiedliche Bildschirmauflösungen:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x`, usw. sind relative Auflösungsmarkierungen. Wenn das Bild mit `width: 320px` in CSS gestylt wird, lädt der Browser `320w.jpg`, wenn das Gerät eine niedrige Auflösung hat (ein {{Glossary("device_pixel", "Gerätepixel")}} pro CSS-Pixel) oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei Gerätepixel pro CSS-Pixel oder mehr).

In beiden Fällen bietet das `src`-Attribut ein Standardbild zum Laden, falls der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung verschiedener Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf und ermöglicht es, mehrere verschiedene Quellen für unterschiedliche Situationen bereitzustellen. Wenn das Layout beispielsweise breit ist, möchten Sie wahrscheinlich ein breites Bild und wenn es schmal ist, ein schmaleres Bild, das in diesem Kontext noch funktioniert.

Natürlich funktioniert dies auch, um auf mobilen Geräten einen kleineren Download von Informationen bereitzustellen, was zur Verbesserung der Leistung beiträgt.

Ein Beispiel ist wie folgt:

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die {{htmlelement("source")}}-Elemente enthalten Media Queries in den `media`-Attributen. Wenn eine Media Query wahr zurückgibt, wird das Bild geladen, das im `srcset`-Attribut seines `<source>`-Elements referenziert wird. Im obigen Beispiel wird, wenn die Ansichtsfensterbreite `799px` oder weniger beträgt, das Bild `narrow-banner-480w.jpg` geladen. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild zum Laden im Falle eines Browsers bereitstellt, der `<picture>` nicht unterstützt.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. Wie im vorherigen Abschnitt gezeigt, können Sie für jede Bildquelle verschiedene Auflösungen bereitstellen.

`<video>`-Elemente funktionieren in Bezug auf die Bereitstellung verschiedener Quellen auf ähnliche Weise:

```html
<video controls>
  <source src="video/smaller.mp4" type="video/mp4" />
  <source src="video/smaller.webm" type="video/webm" />
  <source src="video/larger.mp4" type="video/mp4" media="(min-width: 800px)" />
  <source
    src="video/larger.webm"
    type="video/webm"
    media="(min-width: 800px)" />

  <!-- fallback for browsers that don't support video element -->
  <a href="video/larger.mp4">download video</a>
</video>
```

Es gibt jedoch einige wesentliche Unterschiede zwischen der Bereitstellung von Quellen für Bilder und Videos:

- Im obigen Beispiel verwenden wir `src` und nicht `srcset`; Sie können keine unterschiedlichen Auflösungen für Videos über `srcset` angeben.
- Stattdessen geben Sie unterschiedliche Auflösungen in den verschiedenen `<source>`-Elementen an.
- Beachten Sie, dass wir auch verschiedene Videoformate in verschiedenen `<source>`-Elementen angeben, wobei jedes Format über seinen MIME-Typ im `type`-Attribut identifiziert wird. Browser laden das erste, das sie unterstützen und bei dem der Media-Query-Test wahr ist.

### Lazy Loading von Bildern

Eine sehr nützliche Technik zur Leistungssteigerung ist **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort zu laden, wenn das HTML gerendert wird, sondern sie nur zu laden, wenn sie tatsächlich im Ansichtsfenster des Benutzers sichtbar (oder unmittelbar sichtbar) sind. Das bedeutet, dass der sofort sichtbare/nutzbare Inhalt schneller einsatzbereit ist, während nachfolgender Inhalt nur dann seine Bilder rendert, wenn er aufgerufen wird, und der Browser keine Bandbreite verschwendet, um Bilder zu laden, die der Benutzer niemals sehen wird.

Lazy Loading wurde historisch mit JavaScript behandelt, aber Browser verfügen jetzt über ein `loading`-Attribut, das den Browser anweisen kann, Bilder automatisch lazy zu laden:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Lesen Sie [Lazy Loading von Bildern auf Browserebene für das Web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev für detaillierte Informationen.

Sie können auch Video-Content lazy laden, indem Sie das `preload`-Attribut verwenden. Zum Beispiel:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Wenn Sie `preload` den Wert `none` geben, weist dies den Browser an, keine Videodaten vorzuladen, bevor der Benutzer entscheidet, sie abzuspielen, was offensichtlich gut für die Leistung ist. Stattdessen wird nur das Bild angezeigt, das durch das `poster`-Attribut angegeben wird. Verschiedene Browser haben unterschiedliches Standardverhalten beim Laden von Videos, daher ist es gut, explizit zu sein.

Lesen Sie [Schnelle Wiedergabe mit Audio- und Videopreload](https://web.dev/articles/fast-playback-with-preload) auf web.dev für detaillierte Informationen.

## Umgang mit eingebetteten Inhalten

Es ist sehr üblich, Inhalte aus anderen Quellen in Webseiten einzubetten. Dies geschieht am häufigsten beim Anzeigen von Werbung auf einer Seite, um Einnahmen zu generieren – die Anzeigen werden normalerweise von einer Drittanbieterfirma erzeugt und in Ihre Seite eingebettet. Andere Verwendungen könnten umfassen:

- Anzeigen von geteilten Inhalten, die ein Benutzer auf mehreren Seiten benötigen könnte, wie z. B. ein Warenkorb oder Profilinformationen.
- Anzeigen von Inhalten Dritter, die mit der Hauptseite der Organisation in Zusammenhang stehen, wie z. B. ein Social-Media-Feed.

Inhalte werden am häufigsten mit {{htmlelement("iframe")}}-Elementen eingebettet, obwohl es auch andere weniger häufig verwendete Einbettungselemente gibt, wie {{htmlelement("object")}} und {{htmlelement("embed")}}. Wir konzentrieren uns in diesem Abschnitt auf `<iframe>`s.

Der wichtigste und entscheidendste Ratschlag für die Verwendung von `<iframe>`s ist: "Verwenden Sie eingebettete `<iframe>`s nur, wenn es absolut notwendig ist". Wenn Sie eine Seite mit mehreren verschiedenen Informationsbereichen erstellen, könnte es organisatorisch sinnvoll erscheinen, diese in separate Seiten aufzuteilen und in verschiedene `<iframe>`s zu laden. Dies hat jedoch eine Reihe von Leistungsproblemen und anderen Nachteilen:

- Das Laden des Inhalts in ein `<iframe>` ist viel aufwendiger als das Laden des Inhalts als Teil derselben direkten Seite – es erfordert nicht nur zusätzliche HTTP-Anfragen, um den Inhalt zu laden, sondern der Browser muss auch eine separate Seiteninstanz für jedes einzelne erzeugen. Jeder ist im Wesentlichen eine separate Webseite, die in die übergeordnete Webseite eingebettet ist.
- Im Anschluss an den vorherigen Punkt müssen Sie auch jedes CSS-Styling oder jede JavaScript-Manipulation separat für jede unterschiedliche `<iframe>` (es sei denn, die eingebetteten Seiten stammen von derselben Herkunft) behandeln, was viel komplizierter wird. Sie können keine eingebetteten Inhalte mit CSS und JavaScript anwenden, die auf die übergeordnete Seite angewendet werden, oder umgekehrt. Dies ist eine sinnvolle Sicherheitsmaßnahme, die für das Web grundlegend ist. Stellen Sie sich all die Probleme vor, auf die Sie stoßen könnten, wenn eingebettete Inhalte von Drittanbietern willkürlich Skripte gegen eine Seite ausführen könnten, in die sie eingebettet wurden!
- Jedes `<iframe>` müsste auch alle gemeinsamen Daten und Mediendateien separat laden – Sie können keine zwischengespeicherten Assets über verschiedene Seitenembeds hinweg teilen (es sei denn, die eingebetteten Seiten stammen von derselben Herkunft). Dies kann dazu führen, dass eine Seite viel mehr Bandbreite verwendet, als Sie erwarten würden.

Es wird empfohlen, den Inhalt auf eine einzelne Seite zu setzen. Wenn Sie neuen Inhalt dynamisch laden möchten, wenn sich die Seite ändert, ist es dennoch besser für die Leistung, ihn in dieselbe Seite zu laden, anstatt ihn in ein `<iframe>` zu setzen. Sie könnten die neuen Daten beispielsweise mit der [`fetch()`-Methode](/de/docs/Web/API/Window/fetch) abrufen und dann mit DOM-Scripting in die Seite einfügen. Siehe [Netzwerkanfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests) und [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) für weitere Informationen.

> [!NOTE]
> Wenn Sie den Inhalt steuern und er relativ einfach ist, könnten Sie erwägen, base-64 kodierten Inhalt im `src`-Attribut zu verwenden, um das `<iframe>` zu füllen, oder sogar direkten HTML in das `srcdoc`-Attribut einzufügen (siehe [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für weitere Informationen).

Wenn Sie `<iframe>`s verwenden müssen, dann verwenden Sie sie sparsam.

### Lazy Loading von iframes

Genauso wie `<img>`-Elemente können Sie auch das `loading`-Attribut verwenden, um den Browser anzuweisen, `<iframe>`-Content lazy zu laden, der anfangs außerhalb des Bildschirms ist, und dadurch die Leistung zu verbessern:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Siehe [Es ist an der Zeit, Offscreen-iframes lazy zu laden!](https://web.dev/articles/iframe-lazy-loading) für mehr Informationen.

## Umgang mit der Ladeordnung von Ressourcen

Die Reihenfolge des Ladens von Ressourcen ist wichtig, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Normalerweise wird zuerst das HTML in der Reihenfolge, in der es auf der Seite erscheint, geparst.
2. Gefundene CSS-Dateien werden geparst, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Währenddessen beginnen verlinkte Ressourcen wie Bilder und Webschriftarten, abgerufen zu werden.
3. Gefundene JavaScript-Dateien werden geparst, ausgewertet und auf die Seite angewendet. Standardmäßig blockiert dies das Parsen des HTML, das nach den {{htmlelement("script")}}-Elementen erscheint, wo das JavaScript gefunden wird.
4. Etwas später berechnet der Browser, wie jedes HTML-Element gestylt werden sollte, basierend auf dem darauf angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm gerendert.

> [!NOTE]
> Dies ist eine stark vereinfachte Darstellung dessen, was passiert, vermittelt aber eine Vorstellung.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, zu beeinflussen, wie das Laden von Ressourcen geschieht, um die Leistung zu verbessern. Wir werden einige dieser Aspekte jetzt erkunden.

### Umgang mit der JavaScript-Ladung

Das Parsen und Ausführen von JavaScript blockiert das Parsen nachfolgender DOM-Inhalte. Dies erhöht die Zeit, bis dieser Inhalt gerendert und für die Benutzer der Seite nutzbar ist. Ein kleines Skript macht dabei keinen großen Unterschied, aber moderne Webanwendungen sind normalerweise sehr JavaScript-lastig.

Ein weiterer Nebeneffekt des Standard-Verhaltens beim Parsen von JavaScript ist, dass, wenn das zu rendernde Skript auf DOM-Inhalte angewiesen ist, die später auf der Seite erscheinen, Fehler auftreten können.

Stellen Sie sich zum Beispiel einen einfachen Absatz auf einer Seite vor:

```html
<p>My paragraph</p>
```

Nun stellen Sie sich eine JavaScript-Datei vor, die folgenden Code enthält:

```js
const pElem = document.querySelector("p");

pElem.addEventListener("click", () => {
  alert("You clicked the paragraph");
});
```

Wir können dieses Skript auf die Seite anwenden, indem wir es in einem `<script>`-Element wie folgt referenzieren:

```html
<script src="index.js"></script>
```

Wenn wir dieses `<script>`-Element vor dem `<p>`-Element in der Quellreihenfolge platzieren (zum Beispiel im {{htmlelement("head")}}-Element), wird die Seite einen Fehler werfen (Chrome meldet zum Beispiel "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" in der Konsole). Dies geschieht, weil das Skript von dem `<p>`-Element abhängt, um zu funktionieren, aber zu dem Zeitpunkt, an dem das Skript geparst wird, existiert das `<p>`-Element noch nicht auf der Seite. Es wurde noch nicht gerendert.

Sie können das oben genannte Problem beheben, indem Sie das `<script>`-Element nach dem `<p>`-Element setzen (zum Beispiel am Ende des Document-Bodys) oder indem Sie den Code innerhalb eines geeigneten Ereignishandlers ausführen lassen (zum Beispiel können Sie es beim [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausführen lassen, das ausgelöst wird, wenn das DOM vollständig geparst wurde).

Dies löst jedoch nicht das Problem des Wartens auf das Laden des Skripts. Eine bessere Leistung kann erzielt werden, indem Sie dem `<script>`-Element das `async`-Attribut hinzufügen:

```html
<script async src="index.js"></script>
```

Dies führt dazu, dass das Skript parallel zum DOM-Parsing abgerufen wird, sodass es bereit ist, in dem Moment genutzt zu werden, und das Rendering nicht blockiert wird, wodurch die Leistung verbessert wird.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments ausgeführt wird, jedoch vor dem Auslösen von `DOMContentLoaded`. Dies hat einen ähnlichen Effekt wie `async`.

Ein weiterer Tipp zur JavaScript-Ladeoptimierung besteht darin, Ihr Skript in Codemodule aufzuteilen und jeden Teil bei Bedarf zu laden, anstatt all Ihren Code in ein riesiges Skript zu packen und alles am Anfang zu laden. Dies wird mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) durchgeführt. Lesen Sie den verlinkten Artikel für eine detaillierte Anleitung.

### Vorladen von Inhalten mit rel="preload"

Das Abrufen anderer Ressourcen (wie Bilder, Videos oder Schriftdateien), auf die von Ihrem HTML, CSS und JavaScript zugegriffen wird, kann ebenfalls Leistungsprobleme verursachen, indem es den Code in der Ausführung blockiert und die Erfahrung verlangsamt. Eine Möglichkeit, solche Probleme zu mildern, besteht darin, `rel="preload"` zu verwenden, um {{htmlelement("link")}}-Elemente in Vorlader zu verwandeln. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Wenn der Browser auf einen Link mit `rel="preload"` stößt, wird die referenzierte Ressource so schnell wie möglich abgerufen und im Browser-Cache verfügbar gemacht, sodass sie bereit ist, schneller verwendet zu werden, wenn sie im nachfolgenden Code referenziert wird. Es ist nützlich, hochpriorisierte Ressourcen vorzuhalten, denen der Benutzer früh auf einer Seite begegnen wird, um sicherzustellen, dass die Erfahrung so reibungslos wie möglich verläuft.

Siehe die folgenden Artikel für detaillierte Informationen zur Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
- [Kritische Assets vorladen, um die Ladegeschwindigkeit zu verbessern](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` auch nutzen, um CSS- und JavaScript-Dateien vorzuhalten.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Werte, die ebenfalls darauf ausgelegt sind, verschiedene Aspekte des Seitenladens zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload`, `prefetch` und `prerender`. Gehen Sie zur verlinkten Seite und erfahren Sie, was sie tun.

## Siehe auch

- [Netzwerkanfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
