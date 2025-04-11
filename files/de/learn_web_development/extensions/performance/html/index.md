---
title: HTML-Performanceoptimierung
short-title: Performantes HTML
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML ist standardmäßig schnell und zugänglich. Es ist unsere Aufgabe als Entwickler, sicherzustellen, dass wir diese beiden Eigenschaften bewahren, wenn wir HTML-Code erstellen oder bearbeiten. Komplikationen können auftreten, wenn zum Beispiel die Dateigröße einer {{htmlelement("video")}}-Einbettung zu groß ist oder wenn das Parsen von JavaScript das Rendern kritischer Seitenelemente blockiert. Dieser Artikel führt Sie durch die wichtigsten HTML-Leistungsmerkmale, die die Qualität Ihrer Webseite drastisch verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um mehr über die Auswirkungen von HTML auf die Website-Performance zu erfahren
        und wie Sie Ihr HTML optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres HTML beginnen, lautet: "Was muss ich optimieren?" Einige der unten besprochenen Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während einige nur in bestimmten Situationen erforderlich sind. Zu versuchen, alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Dazu müssen Sie [die Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige davon beinhalten ausgeklügelte [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um zu beginnen, ist jedoch, zu lernen, wie Sie Tools wie integrierte [Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) Werkzeuge in Browsern verwenden, um die Teile der Seite zu untersuchen, die lange zum Laden brauchen und optimiert werden müssen.

## Wichtige HTML-Performanceprobleme

HTML ist in Bezug auf die Leistung einfach — es besteht hauptsächlich aus Text, der klein in der Größe ist und daher meist schnell heruntergeladen und gerendert wird. Die Hauptprobleme, die die Leistung einer Webseite beeinträchtigen können, umfassen:

- Größe der Bild- und Videodateien: Es ist wichtig zu überlegen, wie der Inhalt von Ersetzungselementen wie {{htmlelement("img")}} und {{htmlelement("video")}} gehandhabt wird. Bild- und Videodateien sind groß und können erheblich zum Gewicht der Seite beitragen. Daher ist es wichtig, die Anzahl der Bytes zu minimieren, die auf ein Benutzersystem heruntergeladen werden (zum Beispiel kleinere Bilder für Mobilgeräte bereitstellen). Sie sollten auch erwägen, die wahrgenommene Leistung zu verbessern, indem Sie Bilder und Videos auf einer Seite nur laden, wenn sie benötigt werden.
- Bereitstellung von eingebetteten Inhalten: Dies ist in der Regel der Inhalt, der in {{htmlelement("iframe")}}-Elementen eingebettet ist. Das Laden von Inhalten in `<iframe>`s kann die Leistung erheblich beeinflussen, daher sollte es sorgfältig abgewogen werden.
- Reihenfolge der Ressourcennutzung: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte das HTML zuerst in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Sie können dann verschiedene Funktionen verwenden, um die Reihenfolge der Ressourcennutzung für eine bessere Leistung zu beeinflussen. Zum Beispiel können Sie kritisches CSS und Schriftarten frühzeitig vorladen, aber nicht-kritisches JavaScript auf später verschieben.

> [!NOTE]
> Es gibt ein Argument dafür, die HTML-Struktur zu vereinfachen und Ihren Quellcode zu [minifizieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), sodass das Rendern und der Download schneller sind. Allerdings ist die Dateigröße von HTML im Vergleich zu Bildern und Videos vernachlässigbar, und das Browser-Rendering ist heutzutage sehr schnell. Wenn Ihr HTML-Quellcode so groß und komplex ist, dass er Render- und Download-Leistungsprobleme verursacht, haben Sie wahrscheinlich größere Probleme und sollten daran arbeiten, ihn zu vereinfachen und den Inhalt aufzuteilen.

## Responsiver Umgang mit Ersetzungselementen

[Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) hat die Art revolutioniert, wie Webinhaltslayouts auf verschiedenen Geräten gehandhabt werden. Ein wesentlicher Vorteil, den es bietet, ist das dynamische Umschalten von Layouts, die für verschiedene Bildschirmgrößen optimiert sind, zum Beispiel ein Breitbildlayout versus ein schmales (mobiles) Bildschirmlayout. Es kann auch das dynamische Umschalten von Inhalten basierend auf anderen Geräteeigenschaften wie der Auflösung oder der Präferenz für helle oder dunkle Farbskalen bewerkstelligen.

Die sogenannte "Mobile-First"-Technik kann sicherstellen, dass das Standardlayout für kleine Bildschirme ausgelegt ist, sodass mobile Geräte nur für ihre Bildschirme geeignete Bilder herunterladen müssen und nicht die Leistungseinbußen haben, größere Desktop-Bilder herunterzuladen. Da dies jedoch mit [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) in Ihrem CSS gesteuert wird, kann es nur die Leistung von in CSS geladenen Bildern positiv beeinflussen.

In den folgenden Abschnitten fassen wir zusammen, wie Sie responsive Ersetzungselemente implementieren können. Sie finden viele weitere Details zu diesen Implementierungen in den Leitfäden zu [HTML-Videos und -Audios](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) und [Responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images).

### Bereitstellung unterschiedlicher Bildauflösungen über srcset

Um je nach Auflösung und Ansicht des Geräts verschiedene Auflösungsversionen desselben Bildes bereitzustellen, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) verwenden.

Dieses Beispiel stellt für verschiedene Bildschirmbreiten unterschiedliche Bildgrößen bereit:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` bietet die intrinsische Größe der Quellbilder zusammen mit ihren Dateinamen, und `sizes` stellt Medienabfragen mit den Bild-Slot-Breiten bereit, die in jedem Fall gefüllt werden müssen. Der Browser entscheidet dann, welche Bilder für jeden Slot geladen werden sollen. Als Beispiel: Wenn die Bildschirmbreite `600px` oder weniger beträgt, ist `max-width: 600px` wahr, und daher wird gesagt, dass der zu füllende Slot `480px` ist. In diesem Fall wählt der Browser wahrscheinlich die 480w.jpg-Datei (480px-breites Bild) zum Laden aus. Dies hilft bei der Leistung, da Browser keine größeren Bilder laden, als sie benötigen.

Dieses Beispiel stellt für verschiedene Bildschirmauflösungen unterschiedliche Auflösungsbilder bereit:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x` usw. sind relative Auflösungsindikatoren. Wenn das Bild auf 320px Breite gestylt ist (zum Beispiel mit `width: 320px` in CSS), lädt der Browser `320w.jpg`, wenn das Gerät eine niedrige Auflösung hat (ein {{Glossary("device_pixel", "Device-Pixel")}} pro CSS-Pixel), oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei Device-Pixel pro CSS-Pixel oder mehr).

In beiden Fällen bietet das `src`-Attribut ein Standardbild zum Laden, falls der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung unterschiedlicher Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf und ermöglicht es Ihnen, mehrere verschiedene Quellen für verschiedene Situationen bereitzustellen. Wenn das Layout zum Beispiel breit ist, möchten Sie wahrscheinlich ein breites Bild und wenn es schmal ist, ein engeres Bild, das in diesem Kontext funktioniert.

Natürlich funktioniert dies auch, um eine kleinere Datenmenge auf mobilen Geräten bereitzustellen, was der Leistung zugutekommt.

Ein Beispiel ist wie folgt:

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die {{htmlelement("source")}}-Elemente enthalten Medienabfragen innerhalb der `media`-Attribute. Wenn eine Medienabfrage wahr ist, wird das im `srcset`-Attribut seines `<source>`-Elements referenzierte Bild geladen. Im obigen Beispiel wird, wenn die Viewport-Breite `799px` oder weniger ist, das `narrow-banner-480w.jpg`-Bild geladen. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element umfasst, das ein Standardbild zum Laden im Fall von Browsern bereitstellt, die `<picture>` nicht unterstützen.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. Wie im vorherigen Abschnitt gezeigt, können Sie unterschiedliche Auflösungen für jede Bildquelle bereitstellen.

`<video>`-Elemente funktionieren in Bezug auf die Bereitstellung verschiedener Quellen ähnlich:

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

Es gibt jedoch einige wichtige Unterschiede zwischen der Bereitstellung von Quellen für Bilder und Videos:

- Im obigen Beispiel verwenden wir `src` anstelle von `srcset`; Sie können keine verschiedenen Auflösungen für Videos über `srcset` angeben.
- Stattdessen geben Sie unterschiedliche Auflösungen innerhalb der verschiedenen `<source>`-Elemente an.
- Beachten Sie, wie wir auch unterschiedliche Videoformate innerhalb verschiedener `<source>`-Elemente angeben, wobei jedes Format über seinen MIME-Typ im `type`-Attribut identifiziert wird. Browser laden das erste, das sie unterstützen, wo der Medienabfragetext wahr ist.

### Verzögertes Laden von Bildern

Eine sehr nützliche Technik zur Verbesserung der Leistung ist das **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort beim Rendern des HTML zu laden, sondern sie zu laden, wenn sie tatsächlich im Viewport des Benutzers sichtbar oder bald sichtbar sind. Dies bedeutet, dass der direkt sichtbare/verwendbare Inhalt schneller genutzt werden kann, während nachfolgender Inhalt nur seine Bilder rendert, wenn er gescrollt wird und der Browser keine Bandbreite auf Bilder verschwendet, die der Benutzer nie sehen wird.

Historisch wurde Lazy Loading mit JavaScript durchgeführt, aber Browser haben nun ein `loading`-Attribut, das den Browser anweisen kann, Bilder automatisch verzögert zu laden:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Siehe [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev für detaillierte Informationen.

Sie können auch Videoinhalte per Lazy Load laden, indem Sie das `preload`-Attribut verwenden. Zum Beispiel:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Ein Wert von `none` bei `preload` sagt dem Browser, dass er keine der Videodaten vorab laden soll, bevor der Benutzer entscheidet, es abzuspielen, was offensichtlich gut für die Leistung ist. Stattdessen wird nur das Bild angezeigt, das durch das `poster`-Attribut angegeben ist. Verschiedene Browser haben unterschiedliche Standardladeverhalten für Videos, daher ist es gut, explizit zu sein.

Siehe [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) auf web.dev für detaillierte Informationen.

## Umgang mit eingebetteten Inhalten

Es ist sehr üblich, dass Inhalte von anderen Quellen in Webseiten eingebettet werden. Dies wird am häufigsten gemacht, wenn Werbung auf einer Seite angezeigt wird, um Einnahmen zu generieren — die Anzeigen werden in der Regel von einem Drittunternehmen irgendeiner Art generiert und auf Ihrer Seite eingebettet. Andere Verwendungszwecke könnten sein:

- Anzeigen von gemeinsam genutzten Inhalten, die ein Benutzer auf mehreren Seiten benötigt, wie ein Einkaufswagen oder Profilinformationen.
- Anzeigen von Drittinhalten, die mit der Hauptseite der Organisation zusammenhängen, wie ein Feed mit sozialen Medienbeiträgen.

Das Einbetten von Inhalten erfolgt am häufigsten mit {{htmlelement("iframe")}}-Elementen, obwohl auch andere weniger häufig verwendete Einbettungselemente wie {{htmlelement("object")}} und {{htmlelement("embed")}} existieren. In diesem Abschnitt konzentrieren wir uns auf `<iframe>`s.

Die wichtigste und entscheidende Empfehlung für die Verwendung von `<iframe>`s lautet: "Verwenden Sie eingebettete `<iframe>`s nur, wenn Sie absolut müssen". Wenn Sie eine Seite mit mehreren verschiedenen Informationsbereichen erstellen, könnte es organisatorisch sinnvoll erscheinen, diese in separate Seiten aufzubrechen und in verschiedenen `<iframe>`s zu laden. Dies hat jedoch ein Reihe von Problemen in Bezug auf Leistung und anderes:

- Das Laden des Inhalts in ein `<iframe>` ist viel teurer, als den Inhalt als Teil der direkten Seite zu laden — nicht nur erfordert es zusätzliche HTTP-Anfragen, um den Inhalt zu laden, sondern der Browser muss auch eine separate Seiteninstanz für jede erstellen. Jede ist effektiv eine separate Webseiteninstanz, die in die oberste Webseite eingebettet ist.
- In Anknüpfung an den vorherigen Punkt, müssen Sie auch jede CSS-Stilierung oder JavaScript-Manipulation separat für jedes unterschiedliche `<iframe>` behandeln (es sei denn, die eingebetteten Seiten stammen aus der selben Herkunft), was viel komplexer wird. Sie können keine eingebetteten Inhalte mit CSS und JavaScript ansprechen, die auf die oberste Seite angewendet werden, oder umgekehrt. Dies ist eine sinnvolle Sicherheitsmaßnahme, die grundlegend für das Web ist. Stellen Sie sich all die Probleme vor, auf die Sie stoßen könnten, wenn eingebettete Drittinhalte beliebig Skripte gegen jede Seite ausführen könnten, in die sie eingebettet sind!
- Jede `<iframe>` würde auch alle gemeinsam genutzten Daten und Mediendateien separat laden müssen — Sie können keine zwischengespeicherten Ressourcen über verschiedene Seiteneinbettungen hinweg teilen (wieder, es sei denn die eingebetteten Seiten stammen aus derselben Herkunft). Dies kann dazu führen, dass eine Seite viel mehr Bandbreite verwendet, als Sie erwarten könnten.

Es ist ratsam, den Inhalt in eine einzelne Seite zu setzen. Wenn Sie neue Inhalte dynamisch abrufen möchten, während sich die Seite ändert, ist es immer noch besser für die Leistung, sie in dieselbe Seite zu laden, anstatt sie in ein `<iframe>` zu setzen. Sie könnten die neuen Daten zum Beispiel mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode abrufen und dann mit etwas DOM-Scripting in die Seite einfügen. Siehe [Netzwerkanfragen mit JavaScript machen](/de/docs/Learn_web_development/Core/Scripting/Network_requests) und [Einführung ins DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) für weitere Informationen.

> [!NOTE]
> Wenn Sie die Kontrolle über den Inhalt haben und er relativ einfach ist, könnten Sie erwägen, base-64-kodierte Inhalte im `src`-Attribut zu verwenden, um das `<iframe>` zu füllen oder sogar rohes HTML in das `srcdoc`-Atribut einzufügen (siehe [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für weitere Informationen).

Wenn Sie `<iframe>`s verwenden müssen, dann verwenden Sie sie sparsam.

### Verzögertes Laden von iframes

Genau wie `<img>`-Elemente können Sie auch das `loading`-Attribut verwenden, um dem Browser anzuweisen, `<iframe>`-Inhalte, die anfänglich außerhalb des Bildschirms sind, verzögert zu laden und so die Leistung zu verbessern:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Siehe [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) für weitere Informationen.

## Umgang mit der Reihenfolge der Ressourcennutzung

Die Reihenfolge der Ressourcennutzung ist wichtig, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Das HTML wird normalerweise zuerst in der Reihenfolge geparst, in der es auf der Seite erscheint.
2. Jeder gefundene CSS wird geparst, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verknüpfte Assets wie Bilder und Web-Fonts, abgerufen zu werden.
3. Jeder gefundene JavaScript wird geparst, ausgewertet und gegen die Seite ausgeführt. Dies blockiert standardmäßig das Parsen des HTML, das nach den {{htmlelement("script")}}-Elementen erscheint, wo das JavaScript angetroffen wird.
4. Etwas später analysiert der Browser, wie jedes HTML-Element gestylt werden sollte, basierend auf dem angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf den Bildschirm gezeichnet.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber sie gibt Ihnen eine Vorstellung.

Verschiedene HTML-Features erlauben es Ihnen, zu ändern, wie das Laden von Ressourcen passiert, um die Leistung zu verbessern. Wir werden nun einige davon erkunden.

### Umgang mit JavaScript-Laden

Das Parsen und Ausführen von JavaScript blockiert das Parsen nachfolgenden DOM-Inhalts. Dies verlängert die Zeit, bis dieser Inhalt gerendert und von den Benutzern der Seite genutzt werden kann. Ein kleines Skript macht wahrscheinlich keinen großen Unterschied, aber bedenken Sie, dass moderne Webanwendungen dazu neigen, sehr JavaScript-lastig zu sein.

Ein weiterer Nebeneffekt des Standardverhaltens bei JavaScript-Parsing ist, dass, wenn das gerenderte Skript auf DOM-Inhalt angewiesen ist, der später auf der Seite erscheint, Sie Fehler bekommen.

Stellen Sie sich zum Beispiel einen einfachen Absatz auf einer Seite vor:

```html
<p>My paragraph</p>
```

Stellen Sie sich nun vor, dass eine JavaScript-Datei folgenden Code enthält:

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

Wenn wir dieses `<script>`-Element vor dem `<p>`-Element in der Quellreihenfolge platzieren (zum Beispiel im {{htmlelement("head")}}-Element), wird die Seite einen Fehler auswerfen (Chrome meldet zum Beispiel "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" an die Konsole). Dies tritt auf, weil das Skript auf das `<p>`-Element angewiesen ist, um zu funktionieren, aber zu dem Zeitpunkt, an dem das Skript geparst wird, existiert das `<p>`-Element nicht auf der Seite. Es wurde noch nicht gerendert.

Sie können das obige Problem beheben, indem Sie das `<script>`-Element nach dem `<p>`-Element platzieren (zum Beispiel am Ende des Dokumentkörpers) oder indem Sie den Code innerhalb eines geeigneten Ereignishandlers laufen lassen (zum Beispiel ihn beim [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausführen zu lassen, das ausgelöst wird, wenn das DOM vollständig geparst ist).

Dies löst jedoch nicht das Problem, dass das Skript geladen werden muss. Eine bessere Leistung kann erzielt werden, indem Sie das `async`-Attribut dem `<script>`-Element hinzufügen:

```html
<script async src="index.js"></script>
```

Dies führt dazu, dass das Skript parallel zum Parsen des DOM abgerufen wird, sodass es gleichzeitig bereit ist und nicht das Rendering blockiert, wodurch die Leistung verbessert wird.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript ausgeführt wird, nachdem das Dokument geparst wurde, aber bevor `DOMContentLoaded` ausgelöst wird. Dies hat einen ähnlichen Effekt wie `async`.

Ein weiterer Tipp zum Umgang mit JavaScript-Laden ist, Ihr Skript in Code-Module aufzuteilen und jeden Teil bei Bedarf zu laden, anstatt Ihren gesamten Code in einem riesigen Skript zu haben und alles am Anfang zu laden. Dies geschieht mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules). Lesen Sie den verlinkten Artikel für eine detaillierte Anleitung.

### Inhaltsvorladung mit rel="preload"

Das Abrufen anderer Ressourcen (wie Bilder, Videos oder Schriftdateien), auf die aus Ihrem HTML, CSS und JavaScript verwiesen wird, kann ebenfalls Leistungsprobleme verursachen, indem Ihr Code blockiert und die Erfahrung verlangsamt wird. Eine Möglichkeit, solche Probleme zu mildern, besteht darin, `rel="preload"` zu verwenden, um {{htmlelement("link")}}-Elemente in Vorlader zu verwandeln. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Sobald ein `rel="preload"`-Link aufgefunden wird, lädt der Browser die referenzierte Ressource so schnell wie möglich herunter und macht sie im Browsercache verfügbar, damit sie schneller verwendbar ist, wenn sie im nachfolgenden Code referenziert wird. Es ist nützlich, Ressourcen mit hoher Priorität vorzuladen, denen der Benutzer früh auf einer Seite begegnen wird, damit die Erfahrung so reibungslos wie möglich ist.

Siehe die folgenden Artikel für detaillierte Informationen zur Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` auch verwenden, um CSS- und JavaScript-Dateien vorzudaden.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Werte, die ebenfalls dazu gedacht sind, verschiedene Aspekte des Seitenladens zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload`, `prefetch` und `prerender`. Gehen Sie auf die verlinkte Seite und finden Sie heraus, was sie tun.

## Siehe auch

- [Netzwerkanfragen mit JavaScript machen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [Einführung ins DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
