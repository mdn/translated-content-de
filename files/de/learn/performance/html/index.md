---
title: HTML-Leistungsoptimierung
slug: Learn/Performance/HTML
l10n:
  sourceCommit: e050b876063f44bde9bf011a2dfc94c0d90ca863
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/javascript_performance", "Learn/Performance/CSS", "Learn/Performance")}}

HTML ist von Haus aus schnell und zugänglich. Es ist unsere Aufgabe als Entwickler, sicherzustellen, dass wir diese beiden Eigenschaften beibehalten, wenn wir HTML-Code erstellen oder bearbeiten. Komplikationen können auftreten, wenn beispielsweise die Dateigröße einer eingebetteten `<video>` zu groß ist oder wenn das Parsen von JavaScript die Darstellung kritischer Seitenelemente blockiert. Dieser Artikel führt Sie durch die wichtigsten HTML-Leistungsmerkmale, die die Qualität Ihrer Webseite drastisch verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und grundlegendes Wissen über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Auswirkungen von HTML auf die Leistung von Websites kennenlernen und wie Sie Ihr HTML optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres HTML beginnen, ist „Was muss ich optimieren?“. Einige der unten besprochenen Tipps und Techniken sind bewährte Praktiken, die nahezu jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige davon beinhalten fortschrittliche [Performance-APIs](/de/docs/Web/API/Performance_API). Am besten lernen Sie jedoch, wie Sie Tools wie integrierte Browser-[Netzwerk](/de/docs/Learn/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn/Performance/Measuring_performance#performance_monitor_tools) verwenden können, um die Teile der Seite zu untersuchen, die lange zum Laden benötigen und optimiert werden müssen.

## Wichtige HTML-Leistungsprobleme

HTML ist in Bezug auf die Leistung einfach - es besteht hauptsächlich aus Text, der klein ist und daher meistens schnell heruntergeladen und gerendert wird. Die Hauptprobleme, die die Leistung einer Webseite beeinträchtigen können, umfassen:

- Größe der Bild- und Videodateien: Es ist wichtig zu überlegen, wie mit dem Inhalt von Ersetzungselementen wie `<img>` und `<video>` umgegangen werden soll. Bild- und Videodateien sind groß und können das Gewicht der Seite erheblich erhöhen. Daher ist es wichtig, die Anzahl der Bytes, die auf das Gerät eines Benutzers heruntergeladen werden, zu minimieren (zum Beispiel kleinere Bilder für mobile Geräte bereitstellen). Sie sollten auch die wahrgenommene Leistung verbessern, indem Sie Bilder und Videos auf einer Seite nur laden, wenn sie benötigt werden.
- Bereitstellung eingebetteter Inhalte: Dies ist normalerweise der Inhalt, der in `<iframe>`-Elementen eingebettet ist. Das Laden von Inhalten in `<iframe>`s kann die Leistung erheblich beeinträchtigen, daher sollte dies sorgfältig überlegt werden.
- Reihenfolge des Ladens von Ressourcen: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte das HTML zuerst in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Anschließend können Sie verschiedene Funktionen verwenden, um die Reihenfolge des Ladens von Ressourcen für eine bessere Leistung zu beeinflussen. Zum Beispiel können Sie kritisches CSS und Schriftarten frühzeitig vorladen, aber nicht-kritisches JavaScript später laden.

> [!NOTE]
> Es gibt ein Argument dafür, Ihre HTML-Struktur zu vereinfachen und Ihren Quellcode zu [minimieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), damit das Rendering und das Herunterladen schneller erfolgen. HTML-Dateigrößen sind jedoch im Vergleich zu Bildern und Videos vernachlässigbar, und das Browser-Rendering ist heutzutage sehr schnell. Wenn Ihre HTML-Quelle so groß und komplex ist, dass sie das Rendering und die Download-Leistung beeinträchtigt, haben Sie wahrscheinlich größere Probleme und sollten versuchen, sie zu vereinfachen und den Inhalt aufzuteilen.

## Reaktionsfähige Handhabung von Ersetzungselementen

[Responsive Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) hat die Art und Weise revolutioniert, wie das Layout von Webinhalten über verschiedene Geräte hinweg gehandhabt wird. Ein wesentlicher Vorteil liegt darin, dass dynamisch Layouts umgeschaltet werden können, die für unterschiedliche Bildschirmgrößen optimiert sind, beispielsweise ein weitläufiges Layout für den Breitbildschirm und ein schmales Layout für den mobilen Bildschirm. Es kann auch dynamisches Umschalten von Inhalten basierend auf anderen Geräteattributen wie Auflösung oder Präferenz für helles oder dunkles Farbschema ermöglichen.

Die sogenannte „Mobile-First“-Technik kann sicherstellen, dass das Standardlayout für Geräte mit kleinem Bildschirm geeignet ist, sodass Mobilgeräte nur Bilder herunterladen können, die für ihre Bildschirme geeignet sind, und nicht den Leistungseinbruch durch das Herunterladen größerer Desktop-Bilder erleiden müssen. Da dies jedoch über [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) in Ihrem CSS gesteuert wird, kann es sich nur positiv auf die Leistung von Bildern auswirken, die in CSS geladen werden.

In den folgenden Abschnitten fassen wir zusammen, wie Sie reaktionsfähige Ersetzungselemente implementieren können. Weitere Details zu diesen Implementierungen finden Sie in den Anleitungen [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) und [Reaktionsfähige Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

### Bereitstellung verschiedener Bildauflösungen über srcset

Um für dasselbe Bild je nach Auflösung und Viewport-Größe des Geräts verschiedene Auflösungsversionen bereitzustellen, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) verwenden.

Dieses Beispiel bietet Bilder in verschiedenen Größen für unterschiedliche Bildschirmbreiten:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` bietet die intrinsische Größe der Quellbilder zusammen mit ihren Dateinamen, und `sizes` bietet Media Queries zusammen mit Bildplatzbreiten, die in jedem Fall gefüllt werden müssen. Der Browser entscheidet dann, welche Bilder es sinnvoll ist, für jeden Slot zu laden. Wenn die Bildschirmbreite beispielsweise `600px` oder weniger beträgt, ist `max-width: 600px` wahr, und der zu füllende Slot wird als `480px` angegeben. In diesem Fall wird der Browser wahrscheinlich die 480w.jpg-Datei (480px-breites Bild) laden. Dies verbessert die Leistung, da Browser keine größeren Bilder laden, als sie benötigen.

Dieses Beispiel bietet Bilder in unterschiedlichen Auflösungen für unterschiedliche Bildschirmauflösungen:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x` usw. sind relative Auflösungsindikatoren. Wenn das Bild beispielsweise mit `width: 320px` in CSS auf 320px Breite gestylt ist, wird der Browser `320w.jpg` laden, wenn das Gerät eine niedrige Auflösung hat (ein Gerät-Pixel pro CSS-Pixel) oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei Gerät-Pixels pro CSS-Pixel oder mehr).

In beiden Fällen bietet das `src`-Attribut ein Standardbild, das geladen wird, falls der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung unterschiedlicher Quellen für Bilder und Videos

Das `<picture>`-Element baut auf dem traditionellen `<img>`-Element auf und ermöglicht es Ihnen, mehrere verschiedene Quellen für unterschiedliche Situationen bereitzustellen. Wenn das Layout beispielsweise breit ist, möchten Sie wahrscheinlich ein breites Bild, und wenn es schmal ist, möchten Sie ein schmaleres Bild, das immer noch in diesem Kontext funktioniert.

Natürlich hilft dies auch dabei, auf mobilen Geräten eine kleinere Downloadgröße bereitzustellen und somit die Leistung zu verbessern.

Ein Beispiel ist als folgt:

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die `<source>`-Elemente enthalten Media Queries in ihren `media`-Attributen. Wenn eine Media Query wahr zurückgibt, wird das Bild geladen, das in seinem `srcset`-Attribut des `<source>`-Elements referenziert wird. Im obigen Beispiel wird das Bild `narrow-banner-480w.jpg` geladen, wenn die Viewport-Breite `799px` oder weniger beträgt. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild bereitstellt, das im Falle von Browsern geladen wird, die `<picture>` nicht unterstützen.

Beachten Sie die Verwendung des Attributs `srcset` in diesem Beispiel. Wie im vorherigen Abschnitt gezeigt, können Sie für jede Bildquelle unterschiedliche Auflösungen bereitstellen.

`<video>`-Elemente funktionieren auf ähnliche Weise in Bezug auf die Bereitstellung verschiedener Quellen:

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

- Im obigen Beispiel verwenden wir `src` anstelle von `srcset`; Sie können für Videos keine unterschiedlichen Auflösungen über `srcset` angeben.
- Stattdessen geben Sie unterschiedliche Auflösungen innerhalb der verschiedenen `<source>`-Elemente an.
- Beachten Sie, wie wir auch verschiedene Videoformate innerhalb der verschiedenen `<source>`-Elemente angeben, wobei jedes Format über seinen MIME-Typ im `type`-Attribut identifiziert wird. Browser laden das erste, das sie unterstützen, wenn der Media Query-Test wahr zurückgibt.

### Lazy Loading von Bildern

Eine sehr nützliche Technik zur Leistungsverbesserung ist das **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort zu laden, wenn das HTML gerendert wird, sondern nur dann, wenn sie tatsächlich für den Benutzer im Viewport sichtbar sind (oder unmittelbar sichtbar werden). Dies bedeutet, dass der sofort sichtbare/nutzbare Inhalt schneller bereitsteht, während nachfolgende Inhalte ihre Bilder erst beim Scrollen laden und der Browser keine Bandbreite für Bilder verschwendet, die der Benutzer nie sehen wird.

Historisch gesehen wurde Lazy Loading mit JavaScript gehandhabt, aber Browser haben jetzt ein `loading`-Attribut, das den Browser anweisen kann, Bilder automatisch per Lazy Loading zu laden:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Siehe [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev für detaillierte Informationen.

Sie können auch Videoinhalte per Lazy Loading laden, indem Sie das `preload`-Attribut verwenden. Zum Beispiel:

![](5-d6c43c17.md)

Indem Sie `preload` den Wert `none` geben, weisen Sie den Browser an, keine Videodaten im Voraus zu laden, bevor der Benutzer entscheidet, es abzuspielen, was offensichtlich gut für die Leistung ist. Stattdessen wird nur das Bild angezeigt, das im `poster`-Attribut angegeben ist. Verschiedene Browser haben unterschiedliche Standard-Ladeverhalten für Videos, daher ist es gut, explizit zu sein.

Siehe [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) auf web.dev für detaillierte Informationen.

## Handhabung eingebetteter Inhalte

Es ist sehr üblich, dass Inhalte aus anderen Quellen auf Webseiten eingebettet werden. Dies geschieht häufig, um Werbung auf einer Website anzuzeigen, um Einnahmen zu generieren - die Anzeigen werden normalerweise von einem Drittunternehmen generiert und auf Ihre Seite eingebettet. Andere Verwendungen können sein:

- Anzeige geteilter Inhalte, die ein Benutzer auf mehreren Seiten benötigen könnte, wie z.B. ein Einkaufswagen oder Profilinformationen.
- Anzeige von Drittanbieterinhalten, die mit der Hauptseite der Organisation in Verbindung stehen, z.B. ein Social Media Posts Feed.

Eingebettete Inhalte werden am häufigsten mit `<iframe>`-Elementen eingebettet, obwohl es auch andere, weniger häufig verwendete Einbettungselemente gibt, wie `<object>` und `<embed>`. Wir konzentrieren uns in diesem Abschnitt auf `<iframe>`s.

Der wichtigste und grundlegende Hinweis zur Verwendung von `<iframe>`s lautet: „Verwenden Sie eingebettete `<iframe>`s nur, wenn Sie absolut müssen“. Wenn Sie eine Seite mit mehreren verschiedenen Informationsbereichen erstellen, könnte es sinnvoll erscheinen, diese in separate Seiten aufzuteilen und in verschiedene `<iframe>`s zu laden. Dies hat jedoch einige Probleme in Bezug auf Leistung und anderweitig:

- Das Laden von Inhalten in ein `<iframe>` ist viel teurer als das Laden der Inhalte als Teil derselben direkten Seite - nicht nur benötigt es zusätzliche HTTP-Anfragen zum Laden der Inhalte, sondern der Browser muss auch für jede eine separate Seiteninstanz erstellen. Jede ist effektiv eine separate Webseite, die in die übergeordnete Webseite eingebettet ist.
- In Fortsetzung des vorherigen Punktes müssen Sie auch das CSS-Styling oder die JavaScript-Manipulation separat für jedes unterschiedliche `<iframe>` handhaben (es sei denn, die eingebetteten Seiten stammen von derselben Herkunft), was viel komplexer wird. Sie können eingebettete Inhalte nicht mit CSS und JavaScript ansprechen, die auf die übergeordnete Seite angewendet werden, oder umgekehrt. Dies ist eine sinnvolle Sicherheitsmaßnahme, die grundlegend für das Web ist. Stellen Sie sich all die Probleme vor, auf die Sie stoßen könnten, wenn eingebettete Drittanbieterinhalte willkürlich Skripte gegen jede Seite ausführen könnten, auf der sie eingebettet sind!
- Jede `<iframe>` müsste auch alle gemeinsam genutzten Daten und Mediendateien separat laden - Sie können keine zwischengespeicherten Assets über verschiedene Seitenembeds hinweg teilen (außer die eingebetteten Seiten stammen von derselben Herkunft). Dies kann dazu führen, dass eine Seite viel mehr Bandbreite verwendet, als Sie vielleicht erwarten.

Es ist ratsam, die Inhalte in eine einzige Seite zu setzen. Wenn Sie neuen Content dynamisch laden möchten, während sich die Seite ändert, ist es immer noch besser für die Leistung, ihn in dieselbe Seite zu laden, anstatt ihn in ein `<iframe>` zu setzen. Sie können beispielsweise die neuen Daten mit der Methode [`fetch()`](/de/docs/Web/API/Window/fetch) abrufen und dann mithilfe von DOM-Skript in die Seite einfügen. Siehe [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) und [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) für weitere Informationen.

> [!NOTE]
> Wenn Sie die Inhalte kontrollieren und sie relativ einfach sind, könnten Sie in Betracht ziehen, Base-64-kodierte Inhalte im `src`-Attribut zu verwenden, um das `<iframe>` zu füllen, oder sogar rohen HTML in das `srcdoc`-Attribut einzufügen (siehe [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für weitere Informationen).

Falls Sie `<iframe>`s verwenden müssen, verwenden Sie sie sparsam.

### Lazy Loading von iframes

Genau wie `<img>` Elemente können Sie auch das `loading`-Attribut verwenden, um den Browser anzuweisen, `<iframe>`-Inhalte, die anfangs außerhalb des Bildschirms liegen, per Lazy Loading zu laden und so die Leistung zu verbessern:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Siehe [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) für weitere Informationen.

## Handhabung der Ressourcenlade-Reihenfolge

Die Reihenfolge des Ressourcensladens ist wichtig, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Wird das HTML im Allgemeinen zuerst analysiert, in der Reihenfolge, in der es auf der Seite erscheint.
2. Jedes gefundene CSS wird analysiert, um die auf die Seite anzuwendenden Stile zu verstehen. Während dieser Zeit werden verknüpfte Assets wie Bilder und Webfonts abgerufen.
3. Jedes gefundene JavaScript wird analysiert, ausgewertet und auf die Seite angewendet. Standardmäßig blockiert dies das Parsen des HTML, das nach den `<script>`-Elementen folgt, wo das JavaScript auftritt.
4. Etwas später berechnet der Browser, wie jedes HTML-Element gestylt werden sollte, basierend auf dem angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf den Bildschirm gezeichnet.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, gibt Ihnen jedoch eine Vorstellung.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, die Art und Weise zu ändern, wie das Laden von Ressourcen erfolgt, um die Leistung zu verbessern. Wir werden einige dieser Funktionen jetzt erkunden.

### Handhabung des JavaScript-Ladens

Das Parsen und Ausführen von JavaScript blockiert das Parsen nachfolgender DOM-Inhalte. Dies erhöht die Zeit, bis dieser Inhalt gerendert und für die Benutzer der Seite nutzbar ist. Ein kleines Skript macht keinen großen Unterschied, aber beachten Sie, dass moderne Webanwendungen tendenziell sehr JavaScript-intensiv sind.

Ein weiterer Nebeneffekt des Standardverhaltens beim Parsen von JavaScript ist, dass, wenn das zu rendernde Skript von DOM-Inhalten abhängt, die später auf der Seite erscheinen, Fehler auftreten.

Zum Beispiel, stellen Sie sich einen einfachen Absatz auf einer Seite vor:

```html
<p>My paragraph</p>
```

Stellen Sie sich jetzt eine JavaScript-Datei vor, die den folgenden Code enthält:

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

Wenn wir dieses `<script>`-Element vor dem `<p>`-Element in der Quellreihenfolge setzen (zum Beispiel im `<head>`-Element), wird die Seite einen Fehler auswerfen (Chrome meldet zum Beispiel „Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')“ in der Konsole). Dies tritt auf, weil das Skript auf das `<p>`-Element angewiesen ist, um zu funktionieren, aber zu dem Zeitpunkt, zu dem das Skript geparst wird, existiert das `<p>`-Element nicht auf der Seite. Es wurde noch nicht gerendert.

Sie können das oben beschriebene Problem beheben, indem Sie das `<script>`-Element nach dem `<p>`-Element setzen (zum Beispiel am Ende des Dokumentenkörpers), oder indem Sie den Code innerhalb eines geeigneten Ereignishandlers ausführen (zum Beispiel nach dem [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausführen, das ausgelöst wird, wenn der DOM vollständig analysiert wurde).

Dies löst jedoch nicht das Problem des Wartens auf das Laden des Skripts. Eine bessere Leistung kann erzielt werden, indem das `async`-Attribut zum `<script>`-Element hinzugefügt wird:

```html
<script async src="index.js"></script>
```

Dies bewirkt, dass das Skript parallel zum Parsen des DOM abgerufen wird, sodass es zur gleichen Zeit bereit ist und das Rendering nicht blockiert, wodurch die Leistung verbessert wird.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokumentes, aber vor dem `DOMContentLoaded`-Ereignis ausgeführt wird. Dies hat einen ähnlichen Effekt wie `async`.

Ein weiterer Tipp zur Handhabung des JavaScript-Ladens ist, Ihr Skript in Codemodule aufzuteilen und jedes Teil bei Bedarf zu laden, anstatt den gesamten Code in ein riesiges Skript zu packen und es zu Beginn zu laden. Dies wird mithilfe von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) durchgeführt. Lesen Sie den verlinkten Artikel für eine detaillierte Anleitung.

### Vorladen von Inhalten mit rel="preload"

Das Abrufen anderer Ressourcen (wie Bilder, Videos oder Schriftdateien), die von Ihrem HTML, CSS und JavaScript verlinkt sind, kann ebenfalls Leistungsprobleme verursachen, die das Ausführen Ihres Codes blockieren und das Erlebnis verlangsamen. Eine Möglichkeit, solche Probleme zu mildern, besteht darin, `rel="preload"` zu verwenden, um `<link>`-Elemente in Preloader zu verwandeln. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Beim Auftreten eines `rel="preload"`-Links wird der Browser die referenzierte Ressource so schnell wie möglich abrufen und im Browser-Cache verfügbar machen, sodass sie bereit zur Verwendung ist, wenn sie im nachfolgenden Code referenziert wird. Es ist nützlich, hochpriorisierte Ressourcen, die der Benutzer früh auf einer Seite erkennt, vorzuhalten, damit das Erlebnis so reibungslos wie möglich ist.

Siehe die folgenden Artikel für detaillierte Informationen zur Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` auch verwenden, um CSS- und JavaScript-Dateien vorzuladen.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Attributes/rel)-Werte, die ebenfalls darauf ausgelegt sind, verschiedene Aspekte des Seitenladens zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload`, `prefetch` und `prerender`. Gehen Sie zur verlinkten Seite und finden Sie heraus, was sie tun.

{{PreviousMenuNext("Learn/Performance/javascript_performance", "Learn/Performance/CSS", "Learn/Performance")}}

## Siehe auch

- [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
