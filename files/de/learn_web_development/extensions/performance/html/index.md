---
title: HTML-Performance-Optimierung
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: f35733893f8c17dcbf8e9d5cf2551f6fb1cbecd5
---

{{LearnSidebar}} {{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML ist von Natur aus schnell und zugänglich. Es ist unsere Aufgabe als Entwickler, sicherzustellen, dass wir diese beiden Eigenschaften beim Erstellen oder Bearbeiten von HTML-Code bewahren. Komplikationen können auftreten, zum Beispiel wenn die Dateigröße eines {{htmlelement("video")}}-Embeds zu groß ist oder wenn das Parsen von JavaScript das Rendering von kritischen Seitenelementen blockiert. Dieser Artikel führt Sie durch die wichtigsten HTML-Performance-Funktionen, die die Qualität Ihrer Webseite drastisch verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erkenntnisse über den Einfluss von HTML auf die Website-Performance erlangen
        und lernen, wie Sie Ihr HTML optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihr HTML zu optimieren, lautet: "Was muss ich optimieren?". Einige der im Folgenden besprochenen Tipps und Techniken sind bewährte Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt erforderlich sind.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige davon beinhalten fortgeschrittene [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Tools wie die integrierten Browser-[Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) Werkzeuge verwendet, um die Teile der Seite zu untersuchen, die lange zum Laden benötigen und optimiert werden müssen.

## Wesentliche HTML-Performance-Probleme

HTML ist in Bezug auf die Leistung einfach — es handelt sich hauptsächlich um Text, der klein und daher meist schnell herunterzuladen und zu rendern ist. Die wichtigsten Probleme, die die Leistung einer Webseite beeinflussen können, sind:

- Größe der Bild- und Videodateien: Es ist wichtig, darüber nachzudenken, wie der Inhalt von Ersetzungselementen wie {{htmlelement("img")}} und {{htmlelement("video")}} gehandhabt wird. Bild- und Videodateien sind groß und können das Gewicht der Seite erheblich erhöhen. Daher ist es wichtig, die Anzahl der Bytes zu minimieren, die auf ein Benutzergerät heruntergeladen werden (z.B. kleinere Bilder für Mobilgeräte bereitstellen). Außerdem sollten Sie die wahrgenommene Leistung verbessern, indem Sie Bilder und Videos auf einer Seite nur dann laden, wenn sie benötigt werden.
- Bereitstellung von eingebettetem Inhalt: Dies betrifft in der Regel den Inhalt, der in {{htmlelement("iframe")}}-Elementen eingebettet ist. Das Laden von Inhalten in `<iframe>`s kann die Leistung erheblich beeinflussen und sollte daher sorgfältig überlegt werden.
- Reihenfolge des Ressourcenladens: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte das HTML zuerst in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Sie können dann verschiedene Funktionen verwenden, um die Reihenfolge des Ladens von Ressourcen für eine bessere Leistung zu beeinflussen. Zum Beispiel können Sie kritisches CSS und Schriftarten frühzeitig vorladen, aber nicht-kritisches JavaScript später laden.

> [!NOTE]
> Es gibt ein Argument dafür, Ihre HTML-Struktur zu vereinfachen und Ihren Quellcode zu [minimieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), damit das Rendering und das Herunterladen schneller erfolgen. Die HTML-Dateigröße ist jedoch vernachlässigbar im Vergleich zu Bildern und Videos, und das Rendern im Browser ist heutzutage sehr schnell. Wenn Ihre HTML-Quelle so groß und komplex ist, dass sie das Rendering und die Download-Performance beeinträchtigt, haben Sie wahrscheinlich größere Probleme und sollten versuchen, sie zu vereinfachen und den Inhalt aufzuteilen.

## Responsiver Umgang mit Ersetzungselementen

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) hat die Art und Weise, wie das Layout von Webinhalten auf verschiedenen Geräten gehandhabt wird, revolutioniert. Ein wichtiger Vorteil, den es bietet, ist das dynamische Umschalten von Layouts, die für unterschiedliche Bildschirmgrößen optimiert sind, z.B. ein Breitbild-Layout im Vergleich zu einem schmalen (mobilen) Bildschirm-Layout. Es kann auch das dynamische Umschalten von Inhalten basierend auf anderen Geräteattributen, wie Auflösung oder Präferenz für ein helles oder dunkles Farbschema, übernehmen.

Die sogenannte "Mobile-First"-Technik kann sicherstellen, dass das Standardlayout für Geräte mit kleinem Bildschirm vorgesehen ist, sodass Mobilgeräte nur Bilder herunterladen, die für ihre Bildschirme geeignet sind, und nicht den Leistungseinbruch erleiden müssen, größere Desktop-Bilder herunterzuladen. Da dies jedoch mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) in Ihrem CSS gesteuert wird, kann es die Leistung von in CSS geladenen Bildern nur positiv beeinflussen.

In den nachfolgenden Abschnitten fassen wir zusammen, wie Sie responsive Ersetzungselemente implementieren. Sie finden ausführlichere Informationen zu diesen Implementierungen in den [HTML-Video- und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) und [Responsive Bilder](/de/docs/Web/HTML/Responsive_images) Leitfäden.

### Bereitstellung verschiedener Bildauflösungen über srcset

Um je nach Geräteauflösung und Ansichtsfenstergröße verschiedene Auflösungsversionen desselben Bildes bereitzustellen, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) verwenden.

Dieses Beispiel bietet für verschiedene Bildschirmbreiten unterschiedlich große Bilder an:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` liefert die intrinsische Größe der Quellbilder zusammen mit ihren Dateinamen, und `sizes` bietet Media Queries zusammen mit den Bildslotbreiten, die jeweils gefüllt werden müssen. Der Browser entscheidet dann, welche Bilder für jeden Slot geladen werden sollen. Zum Beispiel, wenn die Bildschirmbreite `600px` oder weniger beträgt, ist `max-width: 600px` wahr, und deshalb wird gesagt, dass der zu füllende Slot `480px` ist. In diesem Fall wird der Browser wahrscheinlich die Datei 480w.jpg (480px-breites Bild) laden. Dies hilft bei der Leistung, da Browser keine größeren Bilder laden, als sie benötigen.

Dieses Beispiel bietet unterschiedlich aufgelöste Bilder für verschiedene Bildschirmauflösungen:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x` usw. sind relative Auflösungsindikatoren. Wenn das Bild stilisiert ist, um 320px-breit zu sein (z.B. mit `width: 320px` in CSS), lädt der Browser `320w.jpg`, wenn das Gerät eine niedrige Auflösung hat (ein {{Glossary("device_pixel", "Gerätepixel")}} pro CSS-Pixel), oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei Gerätepixel pro CSS-Pixel oder mehr).

In beiden Fällen liefert das `src`-Attribut ein Standardbild, das geladen wird, wenn der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung unterschiedlicher Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf und ermöglicht es Ihnen, mehrere verschiedene Quellen für verschiedene Situationen bereitzustellen. Wenn zum Beispiel das Layout breit ist, möchten Sie wahrscheinlich ein breites Bild, und wenn es schmal ist, ein schmaleres Bild, das in diesem Zusammenhang weiterhin funktioniert.

Natürlich funktioniert dies auch, um eine kleinere Informationsmenge auf mobilen Geräten bereitzustellen, was bei der Performance hilft.

Ein Beispiel ist wie folgt:

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die {{htmlelement("source")}}-Elemente enthalten Media Queries in `media`-Attributen. Wenn eine Media Query wahr ist, wird das Bild geladen, auf das in seinem `<source>`-Element im `srcset`-Attribut verwiesen wird. Im obigen Beispiel, wenn die Ansichtsfensterbreite `799px` oder weniger beträgt, wird das Bild `narrow-banner-480w.jpg` geladen. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild bereitstellt, das im Fall von Browsern geladen wird, die `<picture>` nicht unterstützen.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. Wie im vorherigen Abschnitt gezeigt, können Sie für jede Bildquelle unterschiedliche Auflösungen bereitstellen.

`<video>`-Elemente funktionieren in ähnlicher Weise in Bezug auf die Bereitstellung verschiedener Quellen:

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

- Im obigen Beispiel verwenden wir `src` anstelle von `srcset`; Sie können keine unterschiedlichen Auflösungen für Videos über `srcset` angeben.
- Stattdessen geben Sie in den verschiedenen `<source>`-Elementen unterschiedliche Auflösungen an.
- Beachten Sie, wie wir auch unterschiedliche Videoformate in verschiedenen `<source>`-Elementen angeben, wobei jedes Format über seinen MIME-Typ im `type`-Attribut identifiziert wird. Browser laden das erste, auf das sie stoßen und das sie unterstützen, wenn der Medientest wahr ist.

### Lazy Loading von Bildern

Eine sehr nützliche Technik zur Verbesserung der Leistung ist das **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort zu laden, wenn das HTML gerendert wird, sondern sie nur zu laden, wenn sie tatsächlich im Ansichtsfenster für den Benutzer sichtbar sind (oder unmittelbar sichtbar werden). Dies bedeutet, dass der sofort sichtbare/verwendbare Inhalt schneller bereit ist, während nachfolgender Inhalt erst dann seine Bilder rendert, wenn er gescrollt wird, und der Browser keine Bandbreite verschwendet, um Bilder zu laden, die der Benutzer niemals sehen wird.

Lazy Loading wurde historisch mit JavaScript gehandhabt, aber Browser haben jetzt ein `loading`-Attribut, das den Browser anweisen kann, Bilder automatisch im Lazy Load-Modus zu laden:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Sehen Sie [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev für detaillierte Informationen.

Sie können auch Videoinhalte lazy laden, indem Sie das `preload`-Attribut verwenden. Zum Beispiel:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Wenn `preload` den Wert `none` hat, wird der Browser angewiesen, keine Videodaten vorzuladen, bevor der Benutzer sich entscheidet, es abzuspielen, was offensichtlich gut für die Leistung ist. Stattdessen zeigt es nur das Bild an, das durch das `poster`-Attribut angegeben wird. Verschiedene Browser haben unterschiedliche Standard-Verhaltensweisen im Videoladen, daher ist es gut, explizit zu sein.

Siehe [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) auf web.dev für detaillierte Informationen.

## Umgang mit eingebettetem Inhalt

Es ist sehr üblich, Inhalte von anderen Quellen in Webseiten einzubetten. Dies wird am häufigsten getan, wenn Werbung auf einer Website angezeigt wird, um Einnahmen zu generieren — die Anzeigen werden normalerweise von einem Drittunternehmen erstellt und in Ihre Seite eingebettet. Andere Verwendungen könnten Folgendes umfassen:

- Anzeigen von gemeinsam genutzten Inhalten, die ein Benutzer auf mehreren Seiten benötigen könnte, wie z.B. ein Warenkorb oder Profilinformationen.
- Anzeigen von Drittanbieterinhalten, die sich auf die Hauptseite der Organisation beziehen, wie z.B. ein Feed für soziale Medienbeiträge.

Das Einbetten von Inhalten erfolgt am häufigsten mit {{htmlelement("iframe")}}-Elementen, obwohl es auch andere, weniger häufig verwendete Einbettungselemente gibt, wie {{htmlelement("object")}} und {{htmlelement("embed")}}. In diesem Abschnitt konzentrieren wir uns auf `<iframe>`s.

Der wichtigste und wesentliche Ratschlag zur Verwendung von `<iframe>`s lautet: "Verwenden Sie eingebettete `<iframe>`s nur, wenn Sie sie unbedingt benötigen". Wenn Sie eine Seite mit mehreren unterschiedlichen Informationsbereichen erstellen, die auf ihr angezeigt werden, klingt es vielleicht organisatorisch sinnvoll, diese in separate Seiten aufzuteilen und in verschiedene `<iframe>`s zu laden. Dies hat jedoch viele Probleme in Bezug auf die Leistung und andere Aspekte:

- Das Laden des Inhalts in ein `<iframe>` ist weitaus aufwendiger, als den Inhalt als Teil derselben direkten Seite zu laden — es erfordert nicht nur zusätzliche HTTP-Anfragen, um den Inhalt zu laden, sondern der Browser muss auch eine separate Seiteninstanz für jedes einzelne erstellen. Jedes von ihnen ist im Wesentlichen eine separate Webseiteninstanz, die in die Top-Level-Webseite eingebettet ist.
- In Fortsetzung des vorherigen Punktes müssen Sie auch jede CSS-Stil- oder JavaScript-Manipulation separat für jedes unterschiedliche `<iframe>` handhaben (es sei denn, die eingebetteten Seiten stammen aus derselben Herkunft), was weitaus komplexer wird. Sie können eingebetteten Inhalt nicht mit CSS und JavaScript ansprechen, die auf die Top-Level-Seite angewendet wurden, oder umgekehrt. Dies ist eine sinnvolle Sicherheitsmaßnahme, die grundlegend für das Web ist. Stellen Sie sich alle Probleme vor, auf die Sie stoßen könnten, wenn eingebetteter Drittanbieterinhalt nach Belieben Skripte gegen jede Seite ausführen könnte, in die er eingebettet wurde!
- Jedes `<iframe>` müsste auch alle gemeinsam genutzten Daten und Mediendateien separat laden — Sie können keine zwischengespeicherten Assets über verschiedene Seiten-Einbettungen teilen (es sei denn, die eingebetteten Seiten stammen aus derselben Herkunft). Dies kann dazu führen, dass eine Seite viel mehr Bandbreite verwendet, als Sie erwarten würden.

Es wird geraten, den Inhalt auf einer einzigen Seite zu belassen. Wenn Sie neuen Inhalt dynamisch laden möchten, während sich die Seite ändert, ist es dennoch besser für die Leistung, ihn in derselben Seite zu laden, anstatt ihn in ein `<iframe>` zu setzen. Sie könnten beispielsweise die neuen Daten mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode abrufen und dann mithilfe von DOM-Scripting in die Seite einfügen. Siehe [Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests) und [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) für weitere Informationen.

> [!NOTE]
> Wenn Sie die Kontrolle über den Inhalt haben und er relativ einfach ist, könnten Sie in Erwägung ziehen, base-64 codierten Inhalt im `src`-Attribut zu verwenden, um das `<iframe>` zu füllen, oder sogar rohes HTML im `srcdoc`-Attribut einzufügen (siehe [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für weitere Informationen).

Wenn Sie `<iframe>`s verwenden müssen, verwenden Sie sie sparsam.

### Lazy Loading von iframes

In der gleichen Weise wie bei `<img>`-Elementen können Sie auch das `loading`-Attribut verwenden, um dem Browser anzuweisen, `<iframe>`-Inhalte, die anfänglich offscreen sind, im Lazy-Load-Modus zu laden, um die Leistung zu verbessern:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Siehe [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) für weitere Informationen.

## Umgang mit der Lade-Reihenfolge von Ressourcen

Die Reihenfolge des Ladens von Ressourcen ist wichtig, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Wird in der Regel zuerst das HTML geparst, in der Reihenfolge, in der es auf der Seite erscheint.
2. Wird gefundendes CSS geparst, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verknüpfte Assets wie Bilder und Webfonts, abgerufen zu werden.
3. Wird jedem JavaScript, das gefunden wird, geparst, ausgewertet und gegen die Seite ausgeführt. Dies blockiert standardmäßig das Parsen des HTML, das nach den {{htmlelement("script")}}-Elementen erscheint, an denen das JavaScript angetroffen wird.
4. Etwas später arbeitet der Browser heraus, wie jedes HTML-Element gestylt werden soll, gegeben das CSS, das darauf angewendet wird.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm gezeichnet.

> [!NOTE]
> Dies ist ein sehr vereinfachter Bericht darüber, was passiert, aber er gibt Ihnen eine Vorstellung.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, die Art und Weise, wie das Laden von Ressourcen erfolgt, zu ändern, um die Leistung zu verbessern. Wir werden einige dieser Funktionen jetzt erkunden.

### Umgang mit dem Laden von JavaScript

Das Parsen und Ausführen von JavaScript blockiert das Parsen von nachfolgendem DOM-Inhalt. Dies erhöht die Zeit, bis dieser Inhalt gerendert und für die Benutzer der Seite nutzbar ist. Ein kleines Skript macht keinen großen Unterschied, aber bedenken Sie, dass moderne Webanwendungen tendenziell sehr JavaScript-lastig sind.

Ein weiterer Nebeneffekt des standardmäßigen JavaScript-Parsverhaltens ist, dass, wenn das gerenderte Skript auf DOM-Inhalt angewiesen ist, der später auf der Seite erscheint, Fehler auftreten werden.

Stellen Sie sich zum Beispiel einen einfachen Absatz auf einer Seite vor:

```html
<p>My paragraph</p>
```

Stellen Sie sich nun eine JavaScript-Datei vor, die folgenden Code enthält:

```js
const pElem = document.querySelector("p");

pElem.addEventListener("click", () => {
  alert("You clicked the paragraph");
});
```

Wir können dieses Skript auf der Seite anwenden, indem wir es in einem `<script>`-Element folgendermaßen referenzieren:

```html
<script src="index.js"></script>
```

Wenn wir dieses `<script>`-Element vor dem `<p>`-Element in der Quellreihenfolge setzen (zum Beispiel im {{htmlelement("head")}}-Element), wird die Seite einen Fehler werfen (Chrome beispielsweise meldet "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" in der Konsole). Dies geschieht, weil das Skript auf das `<p>`-Element angewiesen ist, um zu funktionieren, aber zu dem Zeitpunkt, an dem das Skript geparst wird, existiert das `<p>`-Element noch nicht auf der Seite, es wurde noch nicht gerendert.

Sie können das obige Problem beheben, indem Sie das `<script>`-Element nach dem `<p>`-Element setzen (zum Beispiel am Ende des Dokumentkörpers) oder indem Sie den Code in einem geeigneten Ereignishandler ausführen (zum Beispiel auf der [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), die ausgelöst wird, wenn das DOM vollständig geparst wurde).

Dies löst jedoch nicht das Problem des Wartens darauf, dass das Skript geladen wird. Eine bessere Leistung kann erzielt werden, indem dem `<script>`-Element das `async`-Attribut hinzugefügt wird:

```html
<script async src="index.js"></script>
```

Dies bewirkt, dass das Skript parallel zum Parsen des DOM abgerufen wird, sodass es gleichzeitig bereit ist und das Rendering nicht blockiert, was die Leistung verbessert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen von `DOMContentLoaded` ausgeführt wird. Dies hat eine ähnliche Wirkung wie `async`.

Ein weiterer Tipp zur Handhabung des Ladens von JavaScript ist das Aufteilen Ihres Skripts in Codemodule und das Laden jedes Teils bei Bedarf anstelle des Ladens Ihres gesamten Codes in einem einzigen großen Skript am Anfang. Dies wird mithilfe von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) durchgeführt. Lesen Sie den verlinkten Artikel für eine ausführliche Anleitung.

### Preloading von Inhalten mit rel="preload"

Das Abrufen anderer Ressourcen (wie Bilder, Videos oder Schriftdateien), die von Ihrem HTML, CSS und JavaScript verlinkt sind, kann ebenfalls Leistungsprobleme verursachen, indem es die Ausführung Ihres Codes blockiert und das Erlebnis verlangsamt. Eine Möglichkeit, solche Probleme zu mildern, besteht darin, `rel="preload"` zu verwenden, um {{htmlelement("link")}}-Elemente in Preloader zu verwandeln. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Beim ersten Auftreten eines Links mit `rel="preload"` wird der Browser die verlinkte Ressource so schnell wie möglich abrufen und im Browser-Cache verfügbar machen, sodass sie bereit zur Verwendung ist, wenn sie im nachfolgenden Code referenziert wird. Es ist nützlich, hochpriorisierte Ressourcen, auf die der Benutzer früh auf einer Seite stoßen wird, vorzulaaden, sodass das Erlebnis so reibungslos wie möglich ist.

Lesen Sie die folgenden Artikel für detaillierte Informationen über die Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` auch verwenden, um CSS- und JavaScript-Dateien vorzuladen.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Attributes/rel) Werte, die ebenfalls darauf ausgelegt sind, verschiedene Aspekte des Seitenladens zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload`, `prefetch` und `prerender`. Gehen Sie zur verlinkten Seite und finden Sie heraus, was sie tun.

## Siehe auch

- [Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
