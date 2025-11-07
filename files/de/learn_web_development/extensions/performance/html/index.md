---
title: HTML-Leistungsoptimierung
short-title: Leistungsstarkes HTML
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML ist standardmäßig schnell und zugänglich. Es ist unsere Aufgabe als Entwickler sicherzustellen, dass wir diese beiden Eigenschaften beibehalten, wenn wir HTML-Code erstellen oder bearbeiten. Komplikationen können auftreten, wenn beispielsweise die Dateigröße eines {{htmlelement("video")}}-Einbettes zu groß ist oder wenn das Parsen von JavaScript das Rendering kritischer Seitenelemente blockiert. In diesem Artikel werden Sie durch die wichtigsten HTML-Leistungsmerkmale geführt, die die Qualität Ihrer Webseite erheblich verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse der
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >client-seitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um über die Auswirkungen von HTML auf die Leistung von Websites zu lernen
        und wie Sie Ihr HTML optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres HTML beginnen, lautet: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Zu versuchen, alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und kann eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige davon unter Verwendung fortschrittlicher [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Einstieg ist jedoch das Erlernen der Verwendung von Tools wie eingebauten Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools), um die Teile der Seite zu untersuchen, deren Laden lange dauert und optimiert werden muss.

## Wichtige HTML-Leistungsprobleme

HTML ist in Bezug auf Leistung einfach — es ist größtenteils Text, der klein ist, und daher meist schnell heruntergeladen und gerendert wird. Die wichtigsten Probleme, die die Leistung einer Webseite beeinträchtigen können, umfassen:

- Größe der Bild- und Videodateien: Es ist wichtig, die Handhabung des Inhalts von Ersatzelementen wie {{htmlelement("img")}} und {{htmlelement("video")}} zu berücksichtigen. Bild- und Videodateien sind groß und können das Gewicht der Seite erheblich erhöhen. Daher ist es wichtig, die Menge der Bytes, die auf das Gerät eines Benutzers heruntergeladen werden, zu minimieren (zum Beispiel kleinere Bilder für Mobilgeräte bereitstellen). Sie müssen auch die wahrgenommene Leistung verbessern, indem Sie Bilder und Videos auf einer Seite nur dann laden, wenn sie benötigt werden.
- Bereitstellung eingebetteter Inhalte: Dies ist in der Regel der Inhalt, der in {{htmlelement("iframe")}}-Elementen eingebettet ist. Das Laden von Inhalten in `<iframe>`s kann die Leistung erheblich beeinflussen, daher sollte dies sorgfältig überlegt werden.
- Reihenfolge des Ressourcenladens: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte das HTML zuerst in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Sie können dann verschiedene Funktionen verwenden, um die Reihenfolge des Ressourcenladens für eine bessere Leistung zu beeinflussen. Zum Beispiel können Sie kritische CSS und Schriftarten frühzeitig vorladen, aber nichtkritisches JavaScript erst später laden.

> [!NOTE]
> Es gibt ein Argument dafür, Ihre HTML-Struktur zu vereinfachen und Ihren Quellcode zu [minimieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), damit das Rendering und der Download schneller erfolgt. Jedoch ist die HTML-Dateigröße im Vergleich zu Bildern und Videos vernachlässigbar und das Browser-Rendering heutzutage sehr schnell. Wenn Ihre HTML-Quelle so groß und komplex ist, dass sie Leistungsprobleme beim Rendering und Download verursacht, haben Sie wahrscheinlich größere Probleme und sollten darauf abzielen, sie zu vereinfachen und den Inhalt aufzuteilen.

## Responsive Handhabung ersetzter Elemente

[Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) hat die Art und Weise revolutioniert, wie das Layout von Webinhalten über verschiedene Geräte hinweg gehandhabt wird. Ein wesentlicher Vorteil, den es ermöglicht, ist das dynamische Umschalten von Layouts, die für unterschiedliche Bildschirmgrößen optimiert sind, beispielsweise ein Breitbild-Layout im Vergleich zu einem schmalen (mobilen) Bildschirm-Layout. Es kann auch das dynamische Umschalten von Inhalten basierend auf anderen Geräteeigenschaften wie Auflösung oder Vorliebe für eine helle oder dunkle Farbgebung bewältigen.

Die sogenannte "Mobile-First"-Technik kann sicherstellen, dass das Standard-Layout für Geräte mit kleinem Bildschirm ist, sodass Mobilgeräte nur für ihre Bildschirme geeignete Bilder herunterladen und nicht die größeren Desktop-Bilder laden müssen. Da dies jedoch mithilfe von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) in Ihrem CSS gesteuert wird, kann dies nur die Leistung von Bildern beeinflussen, die in CSS geladen werden.

In den untenstehenden Abschnitten werden wir zusammenfassen, wie Sie responsive ersetzte Elemente implementieren können. Sie finden wesentlich mehr Details über diese Implementierungen in den Leitfäden zu [HTML Videos und Audios](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) und [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images).

### Bereitstellung verschiedener Bildauflösungen über srcset

Um je nach Geräteeinstellung und Viewport-Größe unterschiedliche Auflösungsversionen desselben Bildes bereitzustellen, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) verwenden.

Dieses Beispiel bietet Bilder in unterschiedlichen Größen für verschiedene Bildschirmbreiten:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` bietet die intrinsische Größe der Quellbilder zusammen mit ihren Dateinamen, und `sizes` bietet Media Queries neben den Bild-slot-Breiten, die in jedem Fall ausgefüllt werden müssen. Der Browser entscheidet dann, welche Bilder für jeden Slot geladen werden sollen. Ein Beispiel: Wenn die Bildschirmbreite `600px` oder weniger beträgt, dann ist `width <= 600px` wahr, und daher wird angenommen, dass der Slot `480px` beträgt. In diesem Fall entscheidet sich der Browser wahrscheinlich, die 480w.jpg-Datei (ein 480px-breites Bild) zu laden. Dies hilft bei der Leistung, da Browser keine größeren Bilder laden, als sie benötigen.

Dieses Beispiel liefert Bilder in verschiedenen Auflösungen für unterschiedliche Bildschirmauflösungen:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x` usw. sind relative Auflösungsindikatoren. Wenn das Bild beispielsweise so formatiert ist, dass es 320px breit ist (zum Beispiel mit `width: 320px` im CSS), lädt der Browser `320w.jpg`, wenn das Gerät eine niedrige Auflösung hat (ein {{Glossary("device_pixel", "Gerätepixel")}} pro CSS-Pixel), oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei Gerätepixel pro CSS-Pixel oder mehr).

In beiden Fällen bietet das `src`-Attribut ein Standardbild zum Laden, falls der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung verschiedener Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf und ermöglicht Ihnen die Bereitstellung mehrerer verschiedener Quellen für unterschiedliche Situationen. Wenn das Layout beispielsweise breit ist, möchten Sie wahrscheinlich ein breites Bild, und wenn es schmal ist, ein schmaleres Bild, das im Kontext funktioniert.

Natürlich arbeitet dies auch daran, auf mobilen Geräten einen kleineren Download von Informationen zu ermöglichen, was die Leistung unterstützt.

Ein Beispiel wäre wie folgt:

```html
<picture>
  <source media="(width < 800px)" srcset="narrow-banner-480w.jpg" />
  <source media="(width >= 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die {{htmlelement("source")}}-Elemente enthalten Media Queries innerhalb von `media`-Attributen. Wenn eine Media Query wahr ergibt, wird das Bild geladen, das im `srcset`-Attribut des entsprechenden `<source>`-Elements referenziert wird. Im obigen Beispiel wird, wenn die Viewport-Breite weniger als `800px` beträgt, das Bild `narrow-banner-480w.jpg` geladen. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild zum Laden bereitstellt, falls der Browser `<picture>` nicht unterstützt.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. Wie im vorherigen Abschnitt gezeigt, können Sie für jede Bildquelle verschiedene Auflösungen bereitstellen.

`<video>`-Elemente arbeiten auf ähnliche Weise, um verschiedene Quellen bereitzustellen:

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

Es gibt jedoch einige wesentliche Unterschiede zwischen der Bereitstellung von Quellen für Bilder und Videos:

- Im obigen Beispiel verwenden wir `src` anstelle von `srcset`; Sie können nicht verschiedene Auflösungen für Videos über `srcset` angeben.
- Stattdessen geben Sie verschiedene Auflösungen innerhalb der unterschiedlichen `<source>`-Elemente an.
- Beachten Sie, wie wir auch unterschiedliche Videoformate innerhalb der unterschiedlichen `<source>`-Elemente angeben, wobei jedes Format durch seinen MIME-Typ im `type`-Attribut identifiziert wird. Browser laden das erste, auf das sie stoßen, das sie unterstützen, wenn der Medientest wahr ergibt.

### Lazy Loading von Bildern

Eine sehr nützliche Technik zur Leistungssteigerung ist das **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort beim Rendern des HTMLs zu laden, sondern sie nur dann zu laden, wenn sie tatsächlich im Viewport des Benutzers sichtbar sind (oder bald sichtbar sein werden). Dadurch wird der unmittelbar sichtbare/nutzbare Inhalt schneller bereitgestellt, während nachfolgender Inhalt erst dann seine Bilder gerendert bekommt, wenn man zu ihm scrollt, und der Browser keine Bandbreite für das Laden von Bildern verschwendet, die der Benutzer niemals sehen wird.

Historisch wurde Lazy Loading mit JavaScript realisiert, aber Browser bieten jetzt ein `loading`-Attribut, mit dem sie Bilder automatisch lazy laden können:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Lesen Sie [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev für detaillierte Informationen.

Sie können auch Videoinhalte lazily laden, indem Sie das `preload`-Attribut verwenden. Beispielsweise:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Wenn `preload` den Wert `none` erhält, wird der Browser angewiesen, keine Videodaten vorzubereiten, bevor der Benutzer entscheidet, sie abzuspielen, was offensichtlich gut für die Leistung ist. Stattdessen wird einfach das Bild angezeigt, das durch das `poster`-Attribut angezeigt wird. Verschiedene Browser haben unterschiedliche Standard-Videoladeverhalten, daher ist es gut, explizit zu sein.

Sehen Sie [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) auf web.dev für detaillierte Informationen.

## Umgang mit eingebetteten Inhalten

Es ist sehr häufig, dass Inhalte von anderen Quellen in Webseiten eingebettet werden. Dies wird am häufigsten gemacht, um auf einer Seite Werbung anzuzeigen, um Einnahmen zu generieren — die Anzeigen werden normalerweise von einem Drittanbieterunternehmen erstellt und auf Ihre Seite eingebettet. Andere Verwendungen könnten umfassen:

- Anzeigen von freigegebenen Inhalten, die ein Benutzer möglicherweise auf mehreren Seiten benötigt, z.B. ein Einkaufswagen oder Profilinformationen.
- Anzeigen von Drittanbieterinhalten, die zur Hauptseite der Organisation passen, z.B. ein Social-Media-Beiträge-Feed.

Das Einbetten von Inhalten erfolgt am häufigsten über {{htmlelement("iframe")}}-Elemente, obwohl andere, weniger häufig genutzte Einbetten von Elementen existieren, wie {{htmlelement("object")}} und {{htmlelement("embed")}}. Wir konzentrieren uns in diesem Abschnitt auf `<iframe>`s.

Der wichtigste und entscheidende Ratschlag für die Verwendung von `<iframe>`s lautet: "Verwenden Sie eingebettete `<iframe>`s nur, wenn Sie sie unbedingt benötigen". Wenn Sie eine Seite mit mehreren unterschiedlichen Informationspaneelen erstellen, klingt es möglicherweise organisatorisch sinnvoll, diese in separate Seiten aufzuteilen und sie in verschiedenen `<iframe>`s zu laden. Dies geht jedoch mit einer Reihe von Problemen in Bezug auf Leistung und andere Aspekte einher:

- Das Laden des Inhalts in ein `<iframe>` ist weitaus teurer, als den Inhalt als Teil derselben direkten Seite zu laden — nicht nur erfordert es zusätzliche HTTP-Anfragen zum Laden des Inhalts, sondern der Browser muss auch eine separate Seiteninstanz für jede erstellen. Jede davon ist effektiv eine eigene Webseiteninstanz, die in der obersten Webseite eingebettet ist.
- Anknüpfend an den vorherigen Punkt, müssen Sie auch alle CSS-Stilgebung oder JavaScript-Manipulation separat für jedes unterschiedliche `<iframe>` behandeln (es sei denn, die eingebetteten Seiten stammen aus demselben Ursprung), was weitaus komplexer wird. Sie können eingebetteten Inhalt nicht mit auf die oberste Seite angewendeten CSS und JavaScript ansprechen oder umgekehrt. Dies ist eine vernünftige Sicherheitsmaßnahme, die grundlegend für das Web ist. Stellen Sie sich all die Probleme vor, in die Sie geraten könnten, wenn eingebetteter Drittanbieterinhalt beliebigerweise Skripte gegen jede Seite ausführen könnte, in die sie eingebettet sind!
- Jedes `<iframe>` müsste auch alle gemeinsam genutzten Daten- und Mediendateien separat laden — Sie können keine zwischengespeicherten Assets über verschiedene Seitenintegrationen teilen (noch einmal, es sei denn, die eingebetteten Seiten stammen aus demselben Ursprung). Das kann dazu führen, dass eine Seite viel mehr Bandbreite verwendet, als Sie erwarten würden.

Es wird empfohlen, den Inhalt in eine einzelne Seite zu integrieren. Wenn Sie neuen Inhalt dynamisch laden möchten, während sich die Seite ändert, ist es für die Leistung immer noch besser, ihn in dieselbe Seite zu laden, als ihn in ein `<iframe>` einzufügen. Sie könnten die neuen Daten beispielsweise mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode abrufen und dann mit etwas DOM-Scripting in die Seite einfügen. Siehe [Netzwerkanfragen mit JavaScript ausführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests) und [Einf与ührung in DOM Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) für weitere Informationen.

> [!NOTE]
> Wenn Sie den Inhalt kontrollieren und er relativ einfach ist, könnten Sie überlegen, base-64-kodierten Inhalt in das `src`-Attribut zu verwenden, um das `<iframe>` auszufüllen, oder sogar rohen HTML-Inhalt in das `srcdoc`-Attribut einzufügen (siehe [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für weitere Informationen).

Wenn Sie `<iframe>`s verwenden müssen, verwenden Sie sie sparsam.

### Lazy Loading von iframes

In ähnlicher Weise wie `<img>`-Elemente können Sie auch das `loading`-Attribut verwenden, um den Browser anzuweisen, den Inhalts von `<iframe>`s, die anfänglich nicht im Bildschirm sichtbar sind, laz+ zu laden, um die Leistung zu verbessern:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Siehe [Es ist Zeit für Lazy Loading von Offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) für weitere Informationen.

## Handling der Ladeordnung von Ressourcen

Die Ordnung des Ressourcenladens ist wichtig, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Das HTML wird in der Regel zuerst analysiert, in der Reihenfolge, in der es auf der Seite erscheint.
2. Gefundene CSS-Inhalte werden analysiert, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verknüpfte Ressourcen wie Bilder und Web-Schriften, abgerufen zu werden.
3. Gefundene JavaScripts werden analysiert, ausgewertet und gegen die Seite ausgeführt. Standardmäßig blockiert dies das Parsen des HTML-Inhalts, der nach den {{htmlelement("script")}}-Elementen erscheint, an denen das JavaScript angetroffen wird.
4. Etwas später ermittelt der Browser, wie jedes HTML-Element gestylt werden soll, in Anbetracht des darauf angewendeten CSS.
5. Das gestaltete Ergebnis wird dann auf den Bildschirm gemalt.

> [!NOTE]
> Dies ist eine stark vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen eine Vorstellung.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, zu ändern, wie das Ressourcenladen abläuft, um die Leistung zu verbessern. Einige dieser Optionen werden wir nun erkunden.

### JavaScript-Laden behandeln

Das Parsen und Ausführen von JavaScript blockiert das Parsen von anschließendem DOM-Inhalt. Dies verlängert die Zeit, bis dieser Inhalt gerendert und für die Benutzer der Seite nutzbar wird. Ein kleines Skript wird keinen großen Unterschied machen, aber bedenken Sie, dass moderne Webanwendungen tendenziell sehr JavaScript-lastig sind.

Ein weiterer Seiteneffekt des Standardverhaltens des JavaScript-Parsens ist, dass, wenn das Skript, das gerendert wird, auf DOM-Inhalt angewiesen ist, der später auf der Seite erscheint, Sie mit Fehlern rechnen müssen.

Stellen Sie sich zum Beispiel einen einfachen Absatz auf einer Seite vor:

```html
<p>My paragraph</p>
```

Stellen Sie sich nun eine JavaScript-Datei vor, die den folgenden Code enthält:

```js
const pElem = document.querySelector("p");

pElem.addEventListener("click", () => {
  alert("You clicked the paragraph");
});
```

Wir können dieses Skript auf die Seite anwenden, indem wir es in einem `<script>`-Element wie diesem referenzieren:

```html
<script src="index.js"></script>
```

Wenn wir dieses `<script>`-Element vor dem `<p>`-Element in der Quelldatei platzieren (zum Beispiel im {{htmlelement("head")}}-Element), wird die Seite einen Fehler werfen (Chrome meldet beispielsweise "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" in der Konsole). Dies tritt auf, weil das Skript auf das `<p>`-Element angewiesen ist, um zu funktionieren, aber zum Zeitpunkt, zu dem das Skript analysiert wird, existiert das `<p>`-Element nicht auf der Seite. Es wurde noch nicht gerendert.

Sie können das oben erwähnte Problem lösen, indem Sie das `<script>`-Element nach dem `<p>`-Element platzieren (zum Beispiel am Ende der Dokumentstruktur) oder indem Sie den Code in einem geeigneten Ereignishandler ausführen (zum Beispiel beim Aufruf des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), der ausgelöst wird, wenn das DOM vollständig analysiert wurde).

Dies löst jedoch nicht das Problem des Wartens auf das Laden des Skripts. Eine bessere Leistung kann erreicht werden, indem das `async`-Attribut zum `<script>`-Element hinzugefügt wird:

```html
<script async src="index.js"></script>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsing abgerufen wird, sodass es gleichzeitig bereit ist und das Rendering nicht blockiert, was die Leistung verbessert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Dokumentenparse ausgeführt wird, jedoch vor dem Auslösen von `DOMContentLoaded`. Dies hat eine ähnliche Wirkung wie `async`.

Ein weiterer Tipp zur Behandlung des JavaScript-Ladens besteht darin, Ihr Skript in Codemodule aufzuteilen und jeden Teil bei Bedarf zu laden, anstatt Ihren gesamten Code in ein gigantisches Skript zu packen und alles am Anfang zu laden. Dies erfolgt mithilfe von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules). Lesen Sie den verlinkten Artikel für eine ausführliche Anleitung.

### Preloading-Inhalt mit rel="preload"

Das Abrufen anderer Ressourcen (wie Bilder, Videos oder Schriftdateien), die von Ihrem HTML, CSS und JavaScript verknüpft sind, kann ebenfalls Leistungsprobleme verursachen, Ihren Code ausführen blockieren und das Erlebnis verlangsamen. Eine Möglichkeit, solche Probleme zu mildern, besteht darin, `rel="preload"` zu verwenden, um {{htmlelement("link")}}-Elemente in Preloader zu verwandeln. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Sobald der Browser auf einen `rel="preload"`-Link stößt, wird die referenzierte Ressource so schnell wie möglich abgerufen und im Browser-Cache verfügbar gemacht, sodass sie schneller einsatzbereit ist, wenn sie im nachfolgenden Code referenziert wird. Es ist nützlich, hochpriorisierte Ressourcen vorzuladen, die der Benutzer früh auf einer Seite begegnen wird, damit das Erlebnis so reibungslos wie möglich ist.

Lesen Sie die folgenden Artikel für detaillierte Informationen zur Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
- [Preload kritische Assets, um die Ladegeschwindigkeit zu verbessern](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` auch verwenden, um CSS- und JavaScript-Dateien vorzuladen.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Werte, die ebenfalls dazu gedacht sind, verschiedene Aspekte des Seitenladens zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload` und `prefetch`. Gehen Sie zur verlinkten Seite und finden Sie heraus, wie sie funktionieren.

## Siehe auch

- [Netzwerkanfragen mit JavaScript ausführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [Einf与ührung in DOM Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
