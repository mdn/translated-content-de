---
title: HTML-Performance-Optimierung
short-title: Performantes HTML
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML ist standardmäßig schnell und zugänglich. Es ist unsere Aufgabe als Entwickler, sicherzustellen, dass wir diese beiden Eigenschaften beibehalten, wenn wir HTML-Code erstellen oder bearbeiten. Komplikationen können auftreten, wenn beispielsweise die Dateigröße eines {{htmlelement("video")}}-Einbettungselements zu groß ist oder wenn das Parsen von JavaScript das Rendern von kritischen Seitenelementen blockiert. Dieser Artikel führt Sie durch die wichtigsten HTML-Performance-Merkmale, die die Qualität Ihrer Webseite drastisch verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und Grundkenntnisse über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >client-seitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie HTML die Website-Performance beeinflusst
        und wie Sie Ihr HTML optimieren können, um die Performance zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres HTML beginnen, ist: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die fast jedem Webprojekt zugutekommen, während einige nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Performance-Optimierungen tatsächlich in jedem Projekt benötigt werden.

Dafür müssen Sie die [Performance Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es verschiedene Möglichkeiten, die Performance zu messen, einige davon unter Verwendung von fortgeschrittenen [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Einstieg besteht jedoch darin, zu lernen, wie man Werkzeuge wie integrierte [Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Werkzeuge](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) des Browsers verwendet, um die Teile der Seite, die lange zum Laden benötigen, zu untersuchen und zu optimieren.

## Wichtige HTML-Performance-Probleme

HTML ist in Bezug auf die Performance einfach – es ist hauptsächlich Text, der klein in der Größe ist und daher meistens schnell heruntergeladen und gerendert wird. Die wichtigsten Probleme, die die Performance einer Webseite beeinflussen können, umfassen:

- Größe der Bild- und Videodateien: Es ist wichtig, zu überlegen, wie der Inhalt von Ersatzelementen wie {{htmlelement("img")}} und {{htmlelement("video")}} gehandhabt wird. Bild- und Videodateien sind groß und können das Gewicht der Seite erheblich erhöhen. Daher ist es wichtig, die Anzahl der Bytes zu minimieren, die auf ein Benutzergerät heruntergeladen werden (zum Beispiel kleinere Bilder für mobile Geräte bereitzustellen). Sie sollten auch darüber nachdenken, die wahrgenommene Performance zu verbessern, indem Bilder und Videos nur geladen werden, wenn sie benötigt werden.
- Bereitstellung eingebetteter Inhalte: Dies sind normalerweise die Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Das Laden von Inhalten in `<iframe>`s kann die Performance erheblich beeinflussen und sollte daher sorgfältig überlegt werden.
- Reihenfolge der Ressourcennutzung: Um die wahrgenommene und tatsächliche Performance zu maximieren, sollte das HTML zuerst in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Sie können dann verschiedene Funktionen verwenden, um die Reihenfolge der Ressourcennutzung für eine bessere Performance zu beeinflussen. Zum Beispiel können Sie kritisches CSS und Schriftarten frühzeitig vorladen, aber nicht-kritisches JavaScript erst später.

> [!NOTE]
> Es gibt ein Argument dafür, Ihre HTML-Struktur zu vereinfachen und Ihren Quellcode zu [minifizieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), damit das Rendern und Herunterladen schneller geht. Allerdings ist die HTML-Dateigröße im Vergleich zu Bildern und Videos vernachlässigbar, und das Rendern im Browser ist heutzutage sehr schnell. Wenn Ihr HTML-Quellcode so groß und komplex ist, dass er Rendering- und Download-Performance-Einbußen verursacht, haben Sie wahrscheinlich größere Probleme und sollten darauf abzielen, ihn zu vereinfachen und den Inhalt aufzuteilen.

## Reaktionsfähige Behandlung von Ersatzelementen

[Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) hat die Art und Weise revolutioniert, wie Layouts von Webinhalten auf verschiedenen Geräten behandelt werden. Ein entscheidender Vorteil, den es bietet, ist das dynamische Umschalten von Layouts, die für verschiedene Bildschirmgrößen optimiert sind, zum Beispiel ein Layout für einen Breitbildschirm im Vergleich zu einem schmalen (mobilen) Bildschirm. Es kann auch dynamisches Umschalten von Inhalten basierend auf anderen Geräteattributen wie Auflösung oder Präferenz für helles oder dunkles Farbschema ermöglichen.

Die sogenannte "Mobile First"-Technik kann sicherstellen, dass das Standardlayout für Geräte mit kleinem Bildschirm geeignet ist, sodass Mobilgeräte nur für ihre Bildschirme passende Bilder herunterladen können und nicht die Performance-Einbußen in Kauf nehmen müssen, größere Desktop-Bilder herunterzuladen. Da dies jedoch mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) in Ihrem CSS gesteuert wird, kann es nur die Performance von Bildern, die in CSS geladen werden, positiv beeinflussen.

In den folgenden Abschnitten fassen wir zusammen, wie sich responsive Ersatzelemente implementieren lassen. Sie können viele weitere Details zu diesen Implementierungen in den [HTML-Video- und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)- und [Responsiven Bilder](/de/docs/Web/HTML/Guides/Responsive_images)-Leitfäden finden.

### Bereitstellen unterschiedlicher Bildauflösungen über srcset

Um je nach Geräteauflösung und Viewport-Größe unterschiedliche Auflösungsversionen desselben Bildes bereitzustellen, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) verwenden.

Dieses Beispiel bietet Bilder in verschiedenen Größen für unterschiedliche Bildschirmbreiten:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` gibt die intrinsische Größe der Quellbilder zusammen mit ihren Dateinamen an, und `sizes` bietet Media Queries neben Bildslot-Breiten, die in jedem Fall ausgefüllt werden müssen. Der Browser entscheidet dann, welche Bilder es sinnvoll ist, für jeden Slot zu laden. Zum Beispiel, wenn die Bildschirmbreite `600px` oder kleiner ist, dann ist `width <= 600px` wahr, und der auszufüllende Slot wird als `480px` bezeichnet. In diesem Fall wählt der Browser wahrscheinlich die 480w.jpg-Datei (480px-breites Bild) zum Laden aus. Dies hilft bei der Performance, da Browser keine größeren Bilder laden als nötig.

Dieses Beispiel bietet Bilder in unterschiedlicher Auflösung für unterschiedliche Bildschirmauflösungen:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x`, etc. sind relative Auflösungsindikatoren. Wenn das Bild auf eine Breite von 320px gestylt ist (zum Beispiel mit `width: 320px` in CSS), lädt der Browser `320w.jpg`, wenn das Gerät eine niedrige Auflösung hat (ein {{Glossary("device_pixel", "Gerätepixel")}} pro CSS-Pixel) oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei Gerätepixel pro CSS-Pixel oder mehr).

In beiden Fällen bietet das `src`-Attribut ein Standardbild zum Laden, falls der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellen unterschiedlicher Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf und ermöglicht es Ihnen, mehrere verschiedene Quellen für unterschiedliche Situationen bereitzustellen. Zum Beispiel möchten Sie wahrscheinlich bei einem breiten Layout ein breites Bild und bei einem schmalen Layout ein schmaleres Bild, das in diesem Kontext dennoch funktioniert.

Natürlich funktioniert dies auch, um einen kleineren Informationsdownload auf mobilen Geräten bereitzustellen, was zur besseren Performance beiträgt.

Ein Beispiel ist wie folgt:

```html
<picture>
  <source media="(width < 800px)" srcset="narrow-banner-480w.jpg" />
  <source media="(width >= 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die {{htmlelement("source")}}-Elemente enthalten Media Queries in `media`-Attributen. Wenn eine Media Query wahr ergibt, wird das Bild geladen, das im `srcset`-Attribut seines `<source>`-Elements referenziert ist. Im obigen Beispiel wird, wenn die Viewport-Breite kleiner als `800px` ist, das `narrow-banner-480w.jpg`-Bild geladen. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild zum Laden bereitstellt, falls ein Browser `<picture>` nicht unterstützt.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. Wie im vorherigen Abschnitt gezeigt, können Sie unterschiedliche Auflösungen für jede Bildquelle bereitstellen.

`<video>`-Elemente funktionieren in Bezug auf die Bereitstellung unterschiedlicher Quellen ähnlich:

```html
<video controls>
  <source src="video/smaller.mp4" type="video/mp4" />
  <source src="video/smaller.webm" type="video/webm" />
  <source src="video/larger.mp4" type="video/mp4" media="(width >= 800px)" />
  <source src="video/larger.webm" type="video/webm" media="(width >= 800px)" />

  <!-- fallback for browsers that don't support video element -->
  <a href="video/larger.mp4">download video</a>
</video>
```

Es gibt jedoch einige wichtige Unterschiede zwischen der Bereitstellung von Quellen für Bilder und Videos:

- Im obigen Beispiel verwenden wir `src` anstelle von `srcset`; Sie können keine unterschiedlichen Auflösungen für Videos über `srcset` angeben.
- Stattdessen geben Sie unterschiedliche Auflösungen in den verschiedenen `<source>`-Elementen an.
- Beachten Sie, wie wir auch unterschiedliche Videoformate in den verschiedenen `<source>`-Elementen angeben, wobei jedes Format über seinen MIME-Typ im `type`-Attribut identifiziert wird. Browser laden das erste, das sie unterstützen, sofern der Medientest wahr ergibt.

### Lazy Loading von Bildern

Eine sehr nützliche Technik zur Verbesserung der Performance ist das **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort beim Rendern des HTMLs zu laden, sondern sie stattdessen nur zu laden, wenn sie tatsächlich im Viewport für den Benutzer sichtbar (oder bald sichtbar) sind. Dies bedeutet, dass der sofort sichtbare/benutzbare Inhalt schneller einsatzbereit ist, während nachfolgende Inhalte erst dann ihre Bilder rendert, wenn sie erreicht werden, und der Browser keine Bandbreite für das Laden von Bildern verschwendet, die der Nutzer nie sehen wird.

Lazy Loading wurde historisch mit JavaScript gehandhabt, aber Browser haben jetzt ein `loading`-Attribut, das den Browser anweisen kann, Bilder automatisch im Lazy Load zu laden:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Sehen Sie sich [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev für detaillierte Informationen an.

Sie können auch Videoinhalte durch Verwendung des `preload`-Attributs lazy laden. Zum Beispiel:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Wenn Sie `preload` den Wert `none` geben, wird dem Browser mitgeteilt, dass keine Videodaten vorgeladen werden sollen, bevor der Benutzer entscheidet, es abzuspielen, was offensichtlich gut für die Performance ist. Stattdessen wird nur das durch das `poster`-Attribut angezeigte Bild angezeigt. Verschiedene Browser haben unterschiedliche Standardverhalten beim Videoladen, daher ist es gut, explizit zu sein.

Sehen Sie sich [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) auf web.dev für detaillierte Informationen an.

## Umgang mit eingebetteten Inhalten

Es ist sehr üblich, dass Inhalte von anderen Quellen in Webseiten eingebettet werden. Dies wird am häufigsten beim Anzeigen von Werbung auf einer Website verwendet, um Einnahmen zu generieren – die Anzeigen werden normalerweise von einem Drittunternehmen generiert und auf Ihrer Seite eingebettet. Andere Anwendungen könnten sein:

- Anzeigen von gemeinsam genutzten Inhalten, die ein Benutzer auf mehreren Seiten benötigt, wie zum Beispiel ein Warenkorb oder Profilinformationen.
- Anzeigen von Inhalten eines Drittanbieters, die mit der Hauptseite der Organisation in Verbindung stehen, wie zum Beispiel ein Social-Media-Feed.

Inhalte werden am häufigsten mit {{htmlelement("iframe")}}-Elementen eingebettet, obwohl es auch andere, weniger häufig verwendete Einbettungselemente gibt, wie {{htmlelement("object")}} und {{htmlelement("embed")}}. Wir konzentrieren uns in diesem Abschnitt auf `<iframe>`s.

Der wichtigste Ratschlag zur Verwendung von `<iframe>`s ist: "Verwenden Sie keine eingebetteten `<iframe>`s, es sei denn, Sie müssen es absolut tun". Wenn Sie eine Seite mit mehreren unterschiedlichen Informationsbereichen erstellen, könnte es unter organisatorischen Gesichtspunkten sinnvoll erscheinen, diese in separate Seiten aufzuteilen und in verschiedenen `<iframe>`s zu laden. Dies birgt jedoch eine Reihe von Problemen in Bezug auf Performance und sonstige Aspekte:

- Das Laden des Inhalts in ein `<iframe>` ist viel teurer als das Laden des Inhalts als Teil derselben direkten Seite – es sind nicht nur zusätzliche HTTP-Anfragen erforderlich, um den Inhalt zu laden, auch der Browser muss für jede davon eine separate Seiteninstanz erstellen. Jede ist effektiv eine separate Webseite, die in die übergeordnete Webseite eingebettet ist.
- Im Anschluss an den vorherigen Punkt müssen Sie auch jede CSS-Stilierung oder JavaScript-Manipulation separat für jedes verschiedene `<iframe>` behandeln (es sei denn, die eingebetteten Seiten stammen aus derselben Quelle), was viel komplexer wird. Sie können eingebettete Inhalte nicht mit CSS und JavaScript ansprechen, das auf die übergeordnete Seite angewendet wird, oder umgekehrt. Dies ist eine sinnvolle Sicherheitsmaßnahme, die grundlegend für das Web ist. Stellen Sie sich all die Probleme vor, auf die Sie stoßen könnten, wenn Drittanbieter eingebettete Inhalte beliebig Skripte gegen eine Seite ausführen könnten, in die sie eingebettet sind!
- Jedes `<iframe>` müsste auch alle gemeinsam genutzten Daten und Mediendateien separat laden – Sie können keine gecachten Assets für verschiedene Seiten-Embeds teilen (wiederum, es sei denn, die eingebetteten Seiten stammen aus derselben Quelle). Dies kann dazu führen, dass eine Seite viel mehr Bandbreite nutzt, als Sie erwarten könnten.

Es wird empfohlen, die Inhalte auf einer einzigen Seite unterzubringen. Wenn Sie neue Inhalte dynamisch laden möchten, während sich die Seite ändert, ist es für die Performance immer noch besser, sie in dieselbe Seite zu laden, Anstatt sie in ein `<iframe>` zu setzen. Sie könnten die neuen Daten mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode abrufen und dann mit etwas DOM-Scripting in die Seite einfügen. Siehe [Netzwerkanfragen mit JavaScript ausführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests) und [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) für mehr Informationen.

> [!NOTE]
> Wenn Sie die Inhalte selbst steuern und sie relativ einfach sind, könnten Sie in Betracht ziehen, base64-encodierte Inhalte im `src`-Attribut zu verwenden, um das `<iframe>` zu füllen, oder sogar HTML-Rohdaten in das `srcdoc`-Attribut einzufügen (siehe [Iframe-Performance Teil 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für mehr Informationen).

Wenn Sie `<iframe>`s verwenden müssen, dann verwenden Sie sie sparsam.

### Lazy Loading von iframes

Wie bei `<img>`-Elementen können Sie auch das `loading`-Attribut verwenden, um den Browser anzuweisen, `<iframe>`-Inhalte, die sich zunächst außerhalb des Bildschirms befinden, lazy zu laden und somit die Performance zu verbessern:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Sehen Sie [Es ist Zeit, Offscreen-Iframes lazy zu laden!](https://web.dev/articles/iframe-lazy-loading) für mehr Informationen.

## Umgang mit der Reihenfolge des Laden von Ressourcen

Die Reihenfolge des Ladens von Ressourcen ist wichtig, um die wahrgenommene und tatsächliche Performance zu maximieren. Wenn eine Webseite geladen wird:

1. Das HTML wird im Allgemeinen zuerst geparst, in der Reihenfolge, in der es auf der Seite erscheint.
2. Gefundenes CSS wird geparst, um zu verstehen, welche Stile auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verlinkte Ressourcen wie Bilder und Web-Schriftarten, heruntergeladen zu werden.
3. Gefundenes JavaScript wird geparst, bewertet und auf die Seite angewendet. Standardmäßig blockiert dies das Parsen des nach {{htmlelement("script")}}-Elementen gefolgt HTML.
4. Etwas später arbeitet der Browser heraus, wie jedes HTML-Element gestylt werden soll, basierend auf dem angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm angezeigt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, gibt Ihnen jedoch eine Vorstellung.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, zu ändern, wie das Laden von Ressourcen geschieht, um die Performance zu verbessern. Wir werden nun einige davon erkunden.

### Behandlung der JavaScript-Nutzung

Das Parsen und Ausführen von JavaScript blockiert das Parsen des nachfolgenden DOM-Inhalts. Dies erhöht die Zeit, bis dieser Inhalt gerendert und für die Benutzer der Seite nutzbar ist. Ein kleines Skript wird nicht viel Unterschied machen, aber bedenken Sie, dass moderne Webanwendungen tendenziell sehr JavaScript-intensiv sind.

Ein weiterer Nebeneffekt des Standard-JavaScript-Parsing-Verhaltens ist, dass, wenn das gerenderte Skript auf DOM-Inhalte angewiesen ist, die später auf der Seite erscheinen, es zu Fehlern kommt.

Stellen Sie sich zum Beispiel einen einfachen Absatz auf einer Seite vor:

```html
<p>My paragraph</p>
```

Stellen Sie sich jetzt eine JavaScript-Datei vor, die folgenden Code enthält:

```js
const pElem = document.querySelector("p");

pElem.addEventListener("click", () => {
  alert("You clicked the paragraph");
});
```

Wir können dieses Skript auf die Seite anwenden, indem wir es in einem `<script>`-Element wie diesem angeben:

```html
<script src="index.js"></script>
```

Wenn wir dieses `<script>`-Element im Quellcode vor dem `<p>`-Element platzieren (zum Beispiel im {{htmlelement("head")}}), wird die Seite einen Fehler auslösen (Chrome meldet beispielsweise "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" in der Konsole). Dies geschieht, weil das Skript auf das `<p>`-Element angewiesen ist, um zu funktionieren, aber zum Zeitpunkt des Parsens des Skripts existiert das `<p>`-Element noch nicht auf der Seite. Es wurde noch nicht gerendert.

Sie können das oben beschriebene Problem beheben, indem Sie das `<script>`-Element nach dem `<p>`-Element platzieren (zum Beispiel am Ende des Dokumentenbodys) oder indem Sie den Code in einem geeigneten Ereignishandler ausführen lassen (zum Beispiel ihn beim [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) auszuführen, der ausgelöst wird, wenn das DOM vollständig geparst wurde).

Dies löst jedoch nicht das Problem des Wartens auf das Laden des Skripts. Eine bessere Performance kann erzielt werden, indem Sie das `async`-Attribut zum `<script>`-Element hinzufügen:

```html
<script async src="index.js"></script>
```

Dadurch wird das Skript parallel zum DOM-Parsen abgerufen, sodass es gleichzeitig bereit ist und das Rendering nicht blockiert, wodurch die Performance verbessert wird.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des `DOMContentLoaded`-Ereignisses ausgeführt wird. Dies hat eine ähnliche Wirkung wie `async`.

Ein weiterer Tipp zur JavaScript-Belastung ist, Ihr Skript in Code-Module aufzuteilen und jeden Teil bei Bedarf zu laden, anstatt Ihren gesamten Code in ein riesiges Skript zu packen und alles zu Beginn zu laden. Dies geschieht mittels [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules). Lesen Sie den verlinkten Artikel für einen detaillierten Leitfaden.

### Vorladen von Inhalten mit rel="preload"

Das Abrufen anderer Ressourcen (wie Bilder, Videos oder Schriftdateien), die mit Ihrem HTML, CSS und JavaScript verlinkt sind, kann auch Performance-Probleme verursachen, indem es Ihren Code blockiert und das Erlebnis verlangsamt. Eine Möglichkeit, solche Probleme zu mindern, ist die Verwendung von `rel="preload"`, um {{htmlelement("link")}}-Elemente in Vorlader zu verwandeln. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Beim Auffinden eines `rel="preload"`-Links wird der Browser die referenzierte Ressource so bald wie möglich abrufen und im Browsercache verfügbar machen, damit sie später schneller verfügbar ist, wenn sie im nachfolgenden Code referenziert wird. Es ist nützlich, hochpriorisierte Ressourcen vorzladen, die der Benutzer früh auf einer Seite antrifft, damit das Erlebnis so reibungslos wie möglich ist.

Siehe die folgenden Artikel für detaillierte Informationen zur Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` auch verwenden, um CSS- und JavaScript-Dateien vorzulesen.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Werte, die ebenfalls entworfen sind, um verschiedene Aspekte des Ladens von Seiten zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload`, `prefetch` und `prerender`. Gehen Sie zur verlinkten Seite und finden Sie heraus, was sie tun.

## Siehe auch

- [Netzwerkanfragen mit JavaScript ausführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
