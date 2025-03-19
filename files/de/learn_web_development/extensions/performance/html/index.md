---
title: HTML-Performance-Optimierung
short-title: Performantes HTML
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}} {{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML ist standardmäßig schnell und zugänglich. Es liegt an uns Entwicklern, sicherzustellen, dass wir diese beiden Eigenschaften bewahren, wenn wir HTML-Code erstellen oder bearbeiten. Komplikationen können auftreten, wenn zum Beispiel die Dateigröße einer eingebetteten {{htmlelement("video")}}-Datei zu groß ist oder wenn das Parsen von JavaScript das Rendern kritischer Seitenelemente blockiert. Dieser Artikel führt Sie durch die wichtigsten HTML-Performance-Merkmale, die die Qualität Ihrer Webseite erheblich verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >client-seitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie den Einfluss von HTML auf die Website-Performance kennen
        und wie Sie Ihr HTML optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Zu optimieren oder nicht zu optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres HTML beginnen, lautet: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Es ist wahrscheinlich unnötig, zu versuchen, alle diese Techniken überall anzuwenden, und es könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Um dies zu tun, müssen Sie die [Performance Ihrer Seite messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige davon beinhalten fortschrittliche [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, ist jedoch, zu lernen, wie man Werkzeuge wie eingebaute [Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) in Browsern verwendet, um die Teile der Seite zu untersuchen, die lange zum Laden brauchen und optimiert werden müssen.

## Schlüsselprobleme der HTML-Performance

HTML ist in Bezug auf die Performance einfach — es ist hauptsächlich Text, der klein in der Größe ist und daher schnell heruntergeladen und gerendert werden kann. Die wichtigsten Probleme, die die Performance einer Webseite beeinträchtigen können, umfassen:

- Größe der Bild- und Videodateien: Es ist wichtig zu überlegen, wie man mit dem Inhalt von ersetzten Elementen wie {{htmlelement("img")}} und {{htmlelement("video")}} umgeht. Bild- und Videodateien sind groß und können erheblich zum Gewicht der Seite beitragen. Daher ist es wichtig, die Anzahl der Bytes zu minimieren, die auf das Gerät eines Benutzers heruntergeladen werden (zum Beispiel kleinere Bilder für Mobilgeräte bereitstellen). Sie müssen auch in Betracht ziehen, die wahrgenommene Performance zu verbessern, indem Sie Bilder und Videos auf einer Seite nur dann laden, wenn sie benötigt werden.
- Bereitstellung eingebetteter Inhalte: Dies ist in der Regel der Inhalt, der in {{htmlelement("iframe")}}-Elementen eingebettet ist. Das Laden von Inhalten in `<iframe>`s kann die Performance erheblich beeinträchtigen, also sollte dies sorgfältig berücksichtigt werden.
- Reihenfolge des Ressourcenladens: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte das HTML zuerst in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Sie können dann verschiedene Funktionen verwenden, um die Reihenfolge des Ressourcenladens für eine bessere Leistung zu beeinflussen. Zum Beispiel können Sie kritische CSS und Schriftarten frühzeitig vorladen, aber nicht-kritische JavaScript erst später laden.

> [!NOTE]
> Es gibt eine Überlegung, Ihr HTML-Struktur zu vereinfachen und Ihren Quellcode zu [minifizieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), damit das Rendern und Herunterladen schneller erfolgt. Jedoch ist die HTML-Dateigröße im Vergleich zu Bildern und Videos vernachlässigbar, und das Rendern im Browser ist heutzutage sehr schnell. Wenn Ihre HTML-Quelle so groß und komplex ist, dass sie Leistungseinbußen beim Rendern und Herunterladen verursacht, haben Sie wahrscheinlich größere Probleme und sollten versuchen, sie zu vereinfachen und den Inhalt aufzuteilen.

## Responsiver Umgang mit ersetzten Elementen

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) hat die Art und Weise, wie Web-Inhalte über verschiedene Geräte hinweg gestaltet werden, revolutioniert. Ein wichtiger Vorteil, den es ermöglicht, ist der dynamische Wechsel von Layouts, die für verschiedene Bildschirmgrößen optimiert sind, beispielsweise ein Breitbild-Layout im Vergleich zu einem schmalen (mobilen) Bildschirm-Layout. Es kann auch den dynamischen Wechsel von Inhalten basierend auf anderen Geräteattributen, wie Auflösung oder Vorliebe für helle oder dunkle Farbschemata, handhaben.

Die sogenannte "Mobile-First"-Technik kann sicherstellen, dass das Standardlayout für Geräte mit kleinem Bildschirm gedacht ist, sodass Mobiltelefone nur für ihre Bildschirme geeignete Bilder herunterladen und keine größeren Desktop-Bilder herunterladen müssen. Da dies jedoch mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) in Ihrem CSS gesteuert wird, kann es die Leistung von Bildern, die in CSS geladen werden, nur positiv beeinflussen.

In den folgenden Abschnitten fassen wir zusammen, wie ersetzte Elemente responsiv implementiert werden können. Sie finden viel mehr Details zu diesen Implementierungen in den Leitfäden zu [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) und [Responsiven Bildern](/de/docs/Web/HTML/Responsive_images).

### Bereitstellung verschiedener Bildauflösungen über srcset

Um je nach Auflösung und Ansichtsgröße des Geräts verschiedene Auflösungsvarianten desselben Bildes bereitzustellen, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) verwenden.

Dieses Beispiel bietet verschiedene Bildgrößen für verschiedene Bildschirmbreiten:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` enthält die intrinsische Größe der Quellbilder zusammen mit ihren Dateinamen, und `sizes` liefert Media Queries zusammen mit den Bildschlitzbreiten, die in jedem Fall ausgefüllt werden müssen. Der Browser entscheidet dann, welche Bilder für jeden Schlitz geladen werden sollen. Wenn die Bildschirmbreite beispielsweise `600px` oder weniger beträgt, ist `max-width: 600px` wahr und daher wird gesagt, dass der zu füllende Schlitz `480px` beträgt. In diesem Fall wählt der Browser wahrscheinlich die 480w.jpg-Datei (ein 480px breites Bild) zum Laden aus. Dies hilft, die Leistung zu verbessern, da die Browser keine größeren Bilder laden als nötig.

Dieses Beispiel bietet verschiedene Auflösungsbilder für verschiedene Bildschirmauflösungen:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x`, usw. sind relative Auflösungsindikatoren. Wenn das Bild so gestylt ist, um 320px breit zu sein (zum Beispiel mit `width: 320px` in CSS), lädt der Browser `320w.jpg`, wenn das Gerät eine niedrige Auflösung hat (ein {{Glossary("device_pixel", "Device Pixel")}} pro CSS-Pixel), oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei Device Pixel pro CSS-Pixel oder mehr).

In beiden Fällen gibt das `src`-Attribut ein Standardbild an, das geladen werden soll, wenn der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung verschiedener Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf und ermöglicht es Ihnen, mehrere verschiedene Quellen für verschiedene Situationen bereitzustellen. Wenn das Layout zum Beispiel breit ist, werden Sie wahrscheinlich ein breites Bild haben wollen, und wenn es schmal ist, möchten Sie ein schmaleres Bild, das immer noch in diesem Kontext funktioniert.

Natürlich funktioniert dies auch, um auf mobilen Geräten eine kleinere Menge an Informationen herunterzuladen, was der Leistung hilft.

Ein Beispiel ist wie folgt:

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die {{htmlelement("source")}}-Elemente enthalten Media Queries innerhalb der `media`-Attribute. Wenn eine Media Query wahr zurückgibt, wird das im `srcset`-Attribut des `<source>`-Elements angegebene Bild geladen. Im obigen Beispiel wird, wenn die Ansichtsbreite `799px` oder weniger beträgt, das `narrow-banner-480w.jpg`-Bild geladen. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild bereitstellt, das im Fall von Browsern ohne `<picture>`-Unterstützung geladen werden soll.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. Wie im vorherigen Abschnitt gezeigt, können Sie verschiedene Auflösungen für jede Bildquelle bereitstellen.

`<video>`-Elemente arbeiten auf ähnliche Weise in Bezug auf die Bereitstellung verschiedener Quellen:

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
- Stattdessen geben Sie verschiedene Auflösungen innerhalb der verschiedenen `<source>`-Elemente an.
- Beachten Sie, wie wir auch verschiedene Videoformate in verschiedenen `<source>`-Elementen angeben, wobei jedes Format über seinen MIME-Typ im `type`-Attribut identifiziert wird. Browser laden das erste, das sie unterstützen, wenn der Medientest wahr zurückgibt.

### Lazy Loading von Bildern

Eine sehr nützliche Technik zur Verbesserung der Leistung ist das **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort zu laden, wenn das HTML gerendert wird, sondern sie nur zu laden, wenn sie tatsächlich im Ansichtsfenster des Benutzers sichtbar sind (oder bald sichtbar sein werden). Dies bedeutet, dass der sofort sichtbare/nutzbare Inhalt schneller einsatzbereit ist, während nachfolgender Inhalt seine Bilder erst rendert, wenn er gescrollt wird, und der Browser keine Bandbreite mit dem Laden von Bildern verschwendet, die der Benutzer nie sehen wird.

Lazy Loading wurde historisch mit JavaScript verwaltet, aber Browser verfügen jetzt über ein `loading`-Attribut, das den Browser anweisen kann, Bilder automatisch Lazy zu laden:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Siehe [Browser-Level-Bild-Lazy-Loading für das Web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev für detaillierte Informationen.

Sie können auch Videoinhalte mit dem `preload`-Attribut Lazy laden. Zum Beispiel:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Dem `preload`-Attribut den Wert `none` zu geben, weist den Browser an, keine der Videodaten vorzuladen, bevor der Benutzer entscheidet, es abzuspielen, was offensichtlich gut für die Leistung ist. Stattdessen zeigt es nur das Bild an, das das `poster`-Attribut angibt. Verschiedene Browser haben unterschiedliche Standardverhalten beim Video-Loading, daher ist es gut, explizit zu sein.

Siehe [Schnelle Wiedergabe mit Audio- und Video-Präload](https://web.dev/articles/fast-playback-with-preload) auf web.dev für detaillierte Informationen.

## Umgang mit eingebettetem Inhalt

Es ist sehr verbreitet, Inhalte aus anderen Quellen in Webseiten einzubetten. Dies wird am häufigsten beim Anzeigen von Werbung auf einer Website zur Generierung von Einnahmen getan — die Anzeigen werden normalerweise von einem Drittunternehmen generiert und auf Ihre Seite eingebettet. Weitere Anwendungen könnten sein:

- Darstellung von gemeinsam genutzten Inhalten, die ein Benutzer möglicherweise auf mehreren Seiten benötigt, z. B. ein Einkaufswagen oder Profilinformationen.
- Darstellung von Inhalten eines Drittanbieters in Zusammenhang mit der Hauptseite der Organisation, z. B. einem Social-Media-Beitragsfeed.

Inhalte werden am häufigsten mit {{htmlelement("iframe")}}-Elementen eingebettet, obwohl es auch andere weniger häufig verwendete Einbettungselemente gibt, wie {{htmlelement("object")}} und {{htmlelement("embed")}}. Wir konzentrieren uns in diesem Abschnitt auf `<iframe>`.

Der wichtigste und entscheidende Ratschlag für die Verwendung von `<iframe>`s lautet: "Verwenden Sie eingebettete `<iframe>`s nur, wenn Sie absolut müssen". Wenn Sie eine Seite mit mehreren verschiedenen Informationsfenstern erstellen, klingt es organisatorisch sinnvoll, diese in separate Seiten aufzuteilen und in verschiedenen `<iframe>`s zu laden. Dies hat jedoch eine Reihe von Problemen in Bezug auf die Leistung und andere Aspekte:

- Das Laden von Inhalten in ein `<iframe>` ist viel teurer als das Laden von Inhalten als Teil derselben direkten Seite — nicht nur erfordert es zusätzliche HTTP-Anfragen, um die Inhalte zu laden, sondern der Browser muss auch für jede einen separaten Seiten-Instanz erstellen. Jede von ihnen ist effektiv eine separate Webseite, die in die oberste Webseite eingebettet ist.
- Aufbauend auf dem vorherigen Punkt müssen Sie auch das CSS-Styling oder die JavaScript-Manipulation separat für jedes verschiedene `<iframe>` behandeln (es sei denn, die eingebetteten Seiten stammen aus derselben Origin), was viel komplexer wird. Sie können keine eingebetteten Inhalte mit CSS und JavaScript anvisieren, das auf die Oberseite angewendet wird, oder umgekehrt. Dies ist eine sinnvolle Sicherheitsmaßnahme, die grundlegend für das Web ist. Stellen Sie sich alle Probleme vor, auf die Sie stoßen könnten, wenn Drittanbieter-Inhalte willkürlich Skripte gegen jede eingebettete Seite ausführen könnten!
- Jedes `<iframe>` müsste auch alle gemeinsam genutzten Daten und Mediendateien separat laden - Sie können keine gecachten Assets über verschiedene Seiteneinbindungen hinweg teilen (wiederum, es sei denn, die eingebetteten Seiten stammen aus derselben Origin). Dies kann dazu führen, dass eine Seite viel mehr Bandbreite nutzt, als Sie vielleicht erwarten.

Es ist ratsam, den Inhalt auf einer einzigen Seite zu platzieren. Wenn Sie neue Inhalte dynamisch laden möchten, während sich die Seite ändert, ist es immer noch besser für die Leistung, sie in dieselbe Seite zu laden, anstatt sie in ein `<iframe>` zu setzen. Sie könnten die neuen Daten zum Beispiel mit der Methode [`fetch()`](/de/docs/Web/API/Window/fetch) abrufen und dann mit einigen DOM-Skripten in die Seite einfügen. Siehe [Netzwerktanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests) und [DOM-Skript-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) für weitere Informationen.

> [!NOTE]
> Wenn Sie den Inhalt kontrollieren und er relativ einfach ist, könnten Sie in Betracht ziehen, base-64-encodierte Inhalte im `src`-Attribut zu verwenden, um das `<iframe>` zu befüllen, oder sogar rohes HTML in das `srcdoc`-Attribut einzufügen (siehe [Iframe-Performance Teil 2: Die guten Nachrichten](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für weitere Informationen).

Wenn Sie `<iframe>`s verwenden müssen, dann verwenden Sie sie sparsam.

### Lazy Loading von iframes

In der gleichen Weise wie `<img>`-Elemente können Sie auch das `loading`-Attribut verwenden, um den Browser anzuweisen, `<iframe>`-Inhalte, die zunächst außerhalb des Bildschirms sind, Lazy zu laden und dadurch die Leistung zu verbessern:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Siehe [Es ist Zeit, iframe-Inhalte Lazy zu laden!](https://web.dev/articles/iframe-lazy-loading) für weitere Informationen.

## Umgang mit der Reihenfolge des Ressourcenladens

Die Reihenfolge des Ressourcenladens ist wichtig, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Das HTML wird im Allgemeinen zuerst analysiert, in der Reihenfolge, in der es auf der Seite erscheint.
2. Gefundene CSS-Dateien werden analysiert, um die anzuwendenden Stile auf der Seite zu verstehen. Währenddessen beginnen verknüpfte Ressourcen wie Bilder und Schriftarten heruntergeladen zu werden.
3. Gefundene JavaScript-Dateien werden analysiert, bewertet und zur Seite ausgeführt. Standardmäßig blockiert dies das Parsen des HTML, das nach den {{htmlelement("script")}}-Elementen erscheint, wo das JavaScript angetroffen wird.
4. Etwas später erarbeitet der Browser, wie jedes HTML-Element gestylt werden soll, basierend auf dem angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf den Bildschirm gemalt.

> [!NOTE]
> Dies ist ein sehr vereinfachter Bericht darüber, was passiert, aber er gibt Ihnen eine Vorstellung.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, zu ändern, wie das Laden von Ressourcen erfolgt, um die Leistung zu verbessern. Wir werden einige dieser jetzt erkunden.

### Umgang mit JavaScript-Loading

Das Parsen und Ausführen von JavaScript blockiert das Parsen des nachfolgenden DOM-Inhalts. Dies erhöht die Zeit, bis dieser Inhalt gerendert und von den Nutzern der Seite nutzbar ist. Ein kleines Skript macht keinen großen Unterschied, aber bedenken Sie, dass moderne Webanwendungen dazu neigen, sehr JavaScript-lastig zu sein.

Ein weiterer Nebeneffekt des standardmäßigen JavaScript-Parsings besteht darin, dass, wenn das Skript auf DOM-Inhalte angewiesen ist, die später auf der Seite erscheinen, Sie auf Fehler stoßen werden.

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

Wir können dieses Skript auf der Seite anwenden, indem wir es in einem `<script>`-Element so referenzieren:

```html
<script src="index.js"></script>
```

Wenn wir dieses `<script>`-Element vor dem `<p>`-Element in der Quellreihenfolge platzieren (zum Beispiel im {{htmlelement("head")}}-Element), wird die Seite einen Fehler werfen (Chrome meldet zum Beispiel "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" in der Konsole). Dies tritt auf, weil das Skript zur Funktion auf dem `<p>`-Element angewiesen ist, welche jedoch nicht existiert, wenn das Skript analysiert wird. Es wurde noch nicht gerendert.

Sie können das obige Problem beheben, indem Sie das `<script>`-Element nach dem `<p>`-Element platzieren (zum Beispiel am Ende des Dokumentkörpers), oder indem Sie den Code innerhalb eines geeigneten Eventhandlers ausführen (zum Beispiel es auf [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausführen lassen, was ausgelöst wird, wenn der DOM vollständig analysiert wurde).

Aber das löst nicht das Problem des Wartens auf das Laden des Skripts. Eine bessere Leistung kann erreicht werden, indem dem `<script>`-Element das `async`-Attribut hinzugefügt wird:

```html
<script async src="index.js"></script>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsing abgerufen wird, sodass es gleichzeitig fertig ist und das Rendern nicht blockiert, was die Leistung verbessert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das dazu führt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen von `DOMContentLoaded` ausgeführt wird. Dies hat eine ähnliche Wirkung wie `async`.

Ein weiterer Tipp zur Behandlung des JavaScript-Ladens besteht darin, Ihr Skript in Modulcode aufzuteilen und jeden Teil bei Bedarf zu laden, anstatt Ihren gesamten Code in ein riesiges Skript zu packen und alles zu Beginn zu laden. Dies wird mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht. Lesen Sie den verlinkten Artikel für einen detaillierten Leitfaden.

### Inhalte mit rel="preload" vorladen

Das Abrufen anderer Ressourcen (wie Bilder, Videos oder Schriftdateien), auf die von Ihrem HTML, CSS und JavaScript verwiesen wird, kann ebenfalls Leistungsprobleme verursachen, blockiert Ihren Code vor der Ausführung und verlangsamt die Erfahrung. Eine Möglichkeit, solche Probleme abzumildern, besteht darin, `rel="preload"` zu verwenden, um aus {{htmlelement("link")}}-Elementen Preloader zu machen. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Beim Aufeinandertreffen mit einem `rel="preload"`-Link lädt der Browser die referenzierte Ressource so bald wie möglich und macht sie im Browser-Cache verfügbar, sodass sie bereit ist, früher verwendet zu werden, wenn sie in anschließendem Code referenziert wird. Es ist nützlich, hochpriorisierte Ressourcen vorzuhalten, denen der Benutzer früh auf einer Seite begegnet, um das Erlebnis so reibungslos wie möglich zu gestalten.

Siehe die folgenden Artikel für detaillierte Informationen zur Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload)
- [Kritische Ressourcen vorladen, um die Ladegeschwindigkeit zu verbessern](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` auch verwenden, um CSS- und JavaScript-Dateien vorzuladen.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Attributes/rel)-Werte, die ebenfalls dazu gedacht sind, verschiedene Aspekte des Ladens von Seiten zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload`, `prefetch` und `prerender`. Gehen Sie zur verlinkten Seite und finden Sie heraus, was sie tun.

## Siehe auch

- [Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
