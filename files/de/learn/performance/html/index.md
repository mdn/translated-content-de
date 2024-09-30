---
title: HTML-Leistungsoptimierung
slug: Learn/Performance/HTML
l10n:
  sourceCommit: e050b876063f44bde9bf011a2dfc94c0d90ca863
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/javascript_performance", "Learn/Performance/CSS", "Learn/Performance")}}

HTML ist standardmäßig schnell und zugänglich. Es ist unsere Aufgabe als Entwickler, sicherzustellen, dass wir diese beiden Eigenschaften bewahren, wenn wir HTML-Code erstellen oder bearbeiten. Komplikationen können auftreten, wenn zum Beispiel die Dateigröße eines eingebetteten `<video>` zu groß ist oder wenn das Parsen von JavaScript das Rendern kritischer Seitenelemente blockiert. Dieser Artikel führt Sie durch die wichtigsten HTML-Leistungsmerkmale, die die Qualität Ihrer Webseite drastisch verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse von
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >Client-seitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um über den Einfluss von HTML auf die Website-Leistung und wie man HTML optimieren kann, um die Leistung zu verbessern, zu lernen.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres HTML beginnen, ist: "Was muss ich optimieren?". Einige der unten besprochenen Tipps und Techniken gelten als gute Praxis, die jedem Webprojekt zugutekommt, während andere nur in bestimmten Situationen erforderlich sind. Es ist wahrscheinlich unnötig, alle diese Techniken überall anzuwenden, und kann eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, wobei einige anspruchsvolle [Performance-APIs](/de/docs/Web/API/Performance_API) beinhalten. Der beste Weg, um zu beginnen, ist jedoch, zu lernen, wie man Werkzeuge wie integrierte Browser-[Netzwerk-](/de/docs/Learn/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn/Performance/Measuring_performance#performance_monitor_tools) verwendet, um die Teile der Seite zu untersuchen, die lange zum Laden brauchen und optimiert werden müssen.

## Wichtige HTML-Leistungsprobleme

HTML ist einfach in Bezug auf die Leistung — es ist größtenteils Text, was klein in der Größe ist und daher meistens schnell heruntergeladen und gerendert wird. Die wichtigsten Probleme, die die Leistung einer Webseite beeinträchtigen können, sind:

- Größe der Bild- und Videodateien: Es ist wichtig zu überlegen, wie der Inhalt von Ersatzelementen wie `<img>` und `<video>` gehandhabt wird. Bild- und Videodateien sind groß und können erheblich zum Gewicht der Seite beitragen. Daher ist es wichtig, die Menge der heruntergeladenen Bytes auf dem Gerät eines Benutzers zu minimieren (zum Beispiel kleinere Bilder für Mobilgeräte zu liefern). Sie müssen auch überlegen, die wahrgenommene Leistung zu verbessern, indem Sie Bilder und Videos auf einer Seite nur dann laden, wenn sie benötigt werden.
- Bereitstellung von eingebettetem Inhalt: Dies ist in der Regel der Inhalt, der in Elementen wie `<iframe>` eingebettet ist. Das Laden von Inhalten in `<iframe>`s kann die Leistung erheblich beeinträchtigen und sollte daher sorgfältig überlegt werden.
- Reihenfolge des Ressourcenladens: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte HTML zuerst in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Sie können dann verschiedene Funktionen verwenden, um die Reihenfolge des Ressourcenladens für eine bessere Leistung zu beeinflussen. Zum Beispiel können Sie kritische CSS und Schriftarten früh vorladen, aber nicht-kritisches JavaScript bis später aufschieben.

> [!NOTE]
> Es gibt ein Argument dafür, Ihre HTML-Struktur zu vereinfachen und Ihren Quellcode zu [minifizieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), sodass das Rendern und der Download schneller sind. Allerdings ist die HTML-Dateigröße im Vergleich zu Bildern und Videos vernachlässigbar, und das Browser-Rendering ist heutzutage sehr schnell. Wenn Ihr HTML-Quellcode so groß und komplex ist, dass es Rendering- und Download-Leistungsprobleme verursacht, haben Sie wahrscheinlich größere Probleme und sollten es vereinfachen und den Inhalt aufteilen.

## Reaktionsfähige Handhabung von Ersatzelementen

[Responsive Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) hat die Art und Weise revolutioniert, wie Web-Inhalten auf verschiedenen Geräten gestaltet werden. Ein wesentlicher Vorteil, den es bietet, ist das dynamische Umschalten von Layouts, die für verschiedene Bildschirmgrößen optimiert sind, beispielsweise ein Breitbild-Layout im Vergleich zu einem schmalen (mobilen) Bildschirm-Layout. Es kann auch das dynamische Umschalten von Inhalten basierend auf anderen Geräteattributen, wie zum Beispiel Auflösung oder Vorliebe für ein helles oder dunkles Farbschema, handhaben.

Die sogenannte "Mobile-First"-Technik kann sicherstellen, dass das Standardlayout für Geräte mit kleinem Bildschirm ist, sodass Mobilgeräte nur für ihre Bildschirme geeignete Bilder herunterladen müssen und nicht die Leistungsbeeinträchtigung durch das Herunterladen größerer Desktop-Bilder haben. Da dies jedoch mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) in Ihrem CSS gesteuert wird, kann es nur die Leistung von Bildern, die in CSS geladen werden, positiv beeinflussen.

In den untenstehenden Abschnitten fassen wir zusammen, wie reaktionsfähige Ersatzelemente implementiert werden. Sie finden wesentlich mehr Details zu diesen Implementierungen in den Leitfäden [Video- und Audiocontent](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) und [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

### Bereitstellung unterschiedlicher Bildauflösungen über srcset

Um je nach Auflösung des Geräts und der Größe des Viewports verschiedene Auflösungsversionen desselben Bildes bereitzustellen, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) verwenden.

Dieses Beispiel stellt verschiedene Bildgrößen für unterschiedliche Bildschirmbreiten bereit:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` gibt die intrinsische Größe der Quelldateien zusammen mit ihren Dateinamen und `sizes` bietet Media Queries neben Bildplatzierungsbreiten, die jeweils gefüllt werden müssen. Der Browser entscheidet dann, welche Bilder für jeden Slot geladen werden sollen. Zum Beispiel, wenn die Bildschirmbreite `600px` oder weniger beträgt, ist `max-width: 600px` wahr, und daher sagt man, dass der zu füllende Slot `480px` beträgt. In diesem Fall wird der Browser wahrscheinlich die 480w.jpg-Datei (Bild mit einer Breite von 480px) laden. Dies hilft der Leistung, indem Browser keine größeren Bilder laden, als sie benötigen.

Dieses Beispiel bietet unterschiedliche Auflösungsbilder für verschiedene Bildschirmauflösungen:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x` usw. sind relative Auflösungsindikatoren. Wenn das Bild so gestylt ist, dass es 320px breit ist (zum Beispiel mit `width: 320px` in CSS), lädt der Browser `320w.jpg`, wenn das Gerät eine niedrige Auflösung hat (ein Gerätepixel pro CSS-Pixel), oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei Gerätepixel pro CSS-Pixel oder mehr).

In beiden Fällen bietet das `src`-Attribut ein Standardsbild zum Laden, falls der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung unterschiedlicher Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf, sodass Sie mehrere verschiedene Quellen für verschiedene Situationen bereitstellen können. Zum Beispiel, wenn das Layout breit ist, möchten Sie wahrscheinlich ein breites Bild, und wenn es schmal ist, möchten Sie ein schmaleres Bild, das dennoch in diesem Kontext funktioniert.

Natürlich funktioniert dies auch, um einen kleineren Informationsdownload auf mobilen Geräten bereitzustellen, was zur Leistung beiträgt.

Ein Beispiel ist wie folgt:

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die `<source>`-Elemente enthalten Media Queries innerhalb der `media`-Attribute. Wenn eine Media Query wahr ist, wird das im `srcset`-Attribut des `<source>`-Elements referenzierte Bild geladen. Im obigen Beispiel wird, wenn die Viewport-Breite `799px` oder weniger beträgt, das Bild `narrow-banner-480w.jpg` geladen. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild zum Laden für den Fall bietet, dass der Browser `<picture>` nicht unterstützt.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. Wie im vorherigen Abschnitt gezeigt, können Sie unterschiedliche Auflösungen für jede Bildquelle bereitstellen.

`<video>`-Elemente funktionieren ähnlich, was die Bereitstellung unterschiedlicher Quellen betrifft:

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
- Stattdessen geben Sie unterschiedliche Auflösungen in den verschiedenen `<source>`-Elementen an.
- Beachten Sie, wie wir auch verschiedene Videoformate in unterschiedlichen `<source>`-Elementen angeben, wobei jedes Format über seinen MIME-Typ im `type`-Attribut identifiziert wird. Browser laden das erste, auf das sie stoßen und das sie unterstützen, wo der Medientest wahr ist.

### Lazy Loading von Bildern

Eine sehr nützliche Technik zur Verbesserung der Leistung ist das **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort zu laden, wenn das HTML gerendert wird, sondern nur, wenn sie tatsächlich im Viewport für den Benutzer sichtbar (oder bald sichtbar) sind. Dies bedeutet, dass die sofort sichtbaren/nutzbaren Inhalte schneller bereit sind, während nachfolgende Inhalte ihre Bilder erst gerendert haben, wenn sie gescrollt werden. Der Browser verschwendet keine Bandbreite für das Laden von Bildern, die der Benutzer niemals sehen wird.

Historisch wurde Lazy Loading mit JavaScript umgesetzt, aber Browser haben jetzt ein `loading`-Attribut, das den Browser anweisen kann, Bilder automatisch lazy zu laden:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Siehe [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev für detaillierte Informationen.

Sie können auch Videoinhalte lazy laden, indem Sie das `preload`-Attribut verwenden. Zum Beispiel:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Das Übergeben des Wertes `none` an `preload` teilt dem Browser mit, keine Videodaten zu laden, bevor der Benutzer entscheidet, es abzuspielen, was offensichtlich gut für die Leistung ist. Stattdessen zeigt es nur das Bild an, das durch das `poster`-Attribut angegeben wird. Unterschiedliche Browser haben unterschiedliche Standardverhalten beim Laden von Videos, daher ist es gut, explizit zu sein.

Siehe [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) auf web.dev für detaillierte Informationen.

## Einbettung von Inhalten

Es ist sehr häufig, dass Inhalte von anderen Quellen in Webseiten eingebettet werden. Dies geschieht meist beim Anzeigen von Werbung auf einer Website, um Einnahmen zu generieren — die Anzeigen werden normalerweise von einer Drittpartei generiert und auf Ihre Seite eingebettet. Andere Anwendungen könnten beinhalten:

- Anzeigen gemeinsamer Inhalte, die ein Benutzer über mehrere Seiten hinweg benötigt, wie z.B. Warenkorb oder Profilinformationen.
- Anzeigen von Drittanbiet-Inhalten, die mit der Hauptseite der Organisation verbunden sind, wie beispielsweise ein Social Media-Post-Feed.

Das Einbetten von Inhalten wird am häufigsten mit {{htmlelement("iframe")}}-Elementen durchgeführt, obwohl auch andere, weniger häufig verwendete Einbettungselemente existieren, wie {{htmlelement("object")}} und {{htmlelement("embed")}}. Wir konzentrieren uns in diesem Abschnitt auf `<iframe>`-Elemente.

Der wichtigste und entscheidende Ratschlag für die Verwendung von `<iframe>`-Elementen lautet: "Verwenden Sie eingebettete `<iframe>`-Elemente nur, wenn Sie wirklich müssen". Wenn Sie eine Seite mit mehreren verschiedenen Informationsfeldern erstellen, mag es organisatorisch sinnvoll erscheinen, diese in separate Seiten aufzuteilen und sie in verschiedene `<iframe>`-Elemente zu laden. Dies bringt jedoch eine Reihe von Problemen mit sich, sowohl was die Leistung als auch andere Aspekte betrifft:

- Das Laden von Inhalten in ein `<iframe>` ist viel aufwendiger, als die Inhalte direkt als Teil der Seite zu laden — es erfordert nicht nur zusätzliche HTTP-Anfragen für das Laden der Inhalte, sondern der Browser muss auch eine separate Seiteninstanz für jede erstellen. Jede ist effektiv eine separate eingebettete Webseiteninstanz innerhalb der obersten Webseite.
- Weiterführend vom vorherigen Punkt, müssen Sie auch jegliche CSS-Stilgestaltung oder JavaScript-Manipulation für jedes unterschiedliche `<iframe>` separat handhaben (es sei denn, die eingebetteten Seiten stammen aus demselben Ursprung), was viel komplexer wird. Sie können keine eingebetteten Inhalte mit CSS und JavaScript, die auf der obersten Seite angewendet werden, anvisieren oder umgekehrt. Dies ist eine sinnvolle Sicherheitsmaßnahme, die grundlegend für das Web ist. Stellen Sie sich alle Probleme vor, die auftreten könnten, wenn Drittanbieter eingebettete Inhalte willkürlich Skripte gegen jede Seite, in der sie eingebettet sind, ausführen könnten!
- Jedes `<iframe>` müsste auch gemeinsame Daten und Mediendateien separat laden — Sie können keine zwischengespeicherten Assets über verschiedene Seiten-Embeds teilen (auch hier sei denn, die eingebetteten Seiten haben denselben Ursprung). Dies kann dazu führen, dass eine Seite viel mehr Bandbreite verbraucht, als Sie erwarten würden.

Es ist ratsam, die Inhalte in eine einzige Seite einzufügen. Wenn Sie neue Inhalte dynamisch laden möchten, während sich die Seite verändert, ist es dennoch besser für die Leistung, sie in dieselbe Seite zu laden, anstatt in ein `<iframe>`. Sie könnten die neuen Daten zum Beispiel mit der Methode [`fetch()`](/de/docs/Web/API/Window/fetch) abrufen und dann mithilfe von DOM-Scripting in die Seite einfügen. Siehe [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) und [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) für weitere Informationen.

> [!NOTE]
> Wenn Sie die Inhalte kontrollieren und sie relativ einfach sind, könnten Sie erwägen, base-64-kodierte Inhalte im `src`-Attribut zu verwenden, um das `<iframe>` zu füllen, oder sogar rohe HTML in das `srcdoc`-Attribut einzufügen (siehe [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für weitere Informationen).

Wenn Sie `<iframe>`-Elemente verwenden müssen, dann verwenden Sie sie sparsam.

### Lazy Loading von iframes

Genau wie bei `<img>`-Elementen können Sie auch das `loading`-Attribut verwenden, um dem Browser anzugeben, `<iframe>`-Inhalte, die zunächst offscreen sind, lazy zu laden und so die Leistung zu verbessern:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Siehe [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) für weitere Informationen.

## Umgang mit der Ressourceladereihenfolge

Die Reihenfolge des Ressourceladens ist wichtig, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Das HTML wird im Allgemeinen zuerst in der Reihenfolge, in der es auf der Seite erscheint, geparst.
2. Gefundene CSS werden geparst, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verlinkte Assets wie Bilder und Web-Schriftarten heruntergeladen zu werden.
3. Gefundene JavaScripts werden geparst, ausgewertet und gegen die Seite ausgeführt. Standardmäßig blockiert dies das Parsen des HTML, das nach den `<script>`-Elementen erscheint, wo das JavaScript gefunden wird.
4. Etwas später bestimmt der Browser, wie jedes HTML-Element gestylt sein sollte, angesichts des darauf angewendeten CSS.
5. Das stilisierte Ergebnis wird dann auf dem Bildschirm gemalt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber sie gibt Ihnen eine Vorstellung.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, zu ändern, wie das Ressourceladen erfolgt, um die Leistung zu verbessern. Wir werden nun einige davon erkunden.

### Umgang mit dem Laden von JavaScript

Das Parsen und Ausführen von JavaScript blockiert das Parsen des nachfolgenden DOM-Inhalts. Dies erhöht die Zeit, bis dieser Inhalt gerendert und von den Benutzern der Seite genutzt werden kann. Ein kleines Skript wird keinen großen Unterschied machen, aber bedenken Sie, dass moderne Webanwendungen in der Regel sehr JavaScript-intensiv sind.

Ein weiterer Nebeneffekt des Standardverhaltens beim Parsen von JavaScript besteht darin, dass, wenn das gerenderte Skript von DOM-Inhalt abhängt, der später auf der Seite erscheint, Fehler auftreten.

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

Wir können dieses Skript auf die Seite anwenden, indem wir es in einem `<script>`-Element folgendermaßen referenzieren:

```html
<script src="index.js"></script>
```

Wenn wir dieses `<script>`-Element vor das `<p>`-Element in der Quellreihenfolge setzen (zum Beispiel im {{htmlelement("head")}}-Element), wird die Seite einen Fehler werfen (Chrome beispielsweise meldet "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" in der Konsole). Dies passiert, weil das Skript auf das `<p>`-Element angewiesen ist, um zu funktionieren, aber zum Zeitpunkt des Parsens des Skripts existiert das `<p>`-Element nicht auf der Seite. Es ist noch nicht gerendert worden.

Sie können das oben genannte Problem beheben, indem Sie das `<script>`-Element nach dem `<p>`-Element platzieren (zum Beispiel am Ende des Dokumenten-Bodys) oder indem Sie den Code innerhalb eines geeigneten Ereignishandlers ausführen (zum Beispiel auf dem [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), das ausgelöst wird, wenn das DOM vollständig geparst wurde).

Allerdings löst dies das Problem des Wartens auf das Laden des Skripts nicht. Eine bessere Leistung kann erzielt werden, indem dem `<script>`-Element das `async`-Attribut hinzugefügt wird:

```html
<script async src="index.js"></script>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsing abgerufen wird, damit es gleichzeitig bereit ist und das Rendering nicht blockiert, was die Leistung verbessert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript ausgeführt wird, nachdem das Dokument geparst wurde, aber bevor `DOMContentLoaded` ausgelöst wird. Dies hat einen ähnlichen Effekt wie `async`.

Ein weiterer Tipp zur Handhabung des Ladens von JavaScript ist, Ihr Skript in Code-Module aufzuteilen und jeden Teil bei Bedarf zu laden, anstatt Ihren gesamten Code in ein einziges riesiges Skript zu packen und alles am Anfang zu laden. Dies wird mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) gemacht. Lesen Sie den verlinkten Artikel für eine ausführliche Anleitung.

### Vorauladen von Inhalten mit rel="preload"

Das Abrufen von anderen Ressourcen (wie Bilder, Videos oder Schriftdateien), die von Ihrem HTML, CSS und JavaScript verlinkt sind, kann ebenfalls Leistungsprobleme verursachen, da es den Code blockieren und das Erlebnis verlangsamen kann. Ein Weg, solche Probleme zu mindern, ist die Verwendung von `rel="preload"`, um `<link>`-Elemente in Preloader zu verwandeln. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Beim Aufkommen eines `rel="preload"`-Links wird der Browser die referenzierte Ressource so schnell wie möglich abrufen und im Browser-Cache verfügbar machen, damit sie schneller bereit ist, wenn sie im nachfolgenden Code referenziert wird. Es ist nützlich, hoch-prioritäre Ressourcen vorzuladen, die der Benutzer früh auf einer Seite antrifft, damit das Erlebnis so reibungslos wie möglich ist.

Lesen Sie die folgenden Artikel für detaillierte Informationen zur Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` verwenden, um CSS- und JavaScript-Dateien vorzuladen.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Attributes/rel)-Werte, die ebenfalls dazu bestimmt sind, verschiedene Aspekte des Seitenladens zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload`, `prefetch` und `prerender`. Gehen Sie zur verlinkten Seite und finden Sie heraus, was sie tun.

{{PreviousMenuNext("Learn/Performance/javascript_performance", "Learn/Performance/CSS", "Learn/Performance")}}

## Siehe auch

- [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
