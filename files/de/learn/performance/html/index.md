---
title: HTML Leistungsoptimierung
slug: Learn/Performance/HTML
l10n:
  sourceCommit: e050b876063f44bde9bf011a2dfc94c0d90ca863
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/javascript_performance", "Learn/Performance/CSS", "Learn/Performance")}}

HTML ist von Natur aus schnell und zugänglich. Es ist unsere Aufgabe als Entwickler, sicherzustellen, dass wir diese beiden Eigenschaften bewahren, wenn wir HTML-Code erstellen oder bearbeiten. Komplikationen können auftreten, wenn beispielsweise die Dateigröße einer {{htmlelement("video")}}-Einbettung zu groß ist oder wenn die JavaScript-Analyse das Rendern kritischer Seitenelemente blockiert. Dieser Artikel führt Sie durch die wichtigsten HTML-Leistungsmerkmale, die die Qualität Ihrer Webseite erheblich verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Wissen über die Auswirkungen von HTML auf die Website-Performance
        erlangen und lernen, wie Sie Ihr HTML optimieren, um die Performance zu
        verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres HTML beginnen, lautet: "Was muss ich optimieren?". Einige der im Folgenden besprochenen Tipps und Techniken sind gute Praktiken, die fast jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Seite messen](/de/docs/Learn/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es verschiedene Methoden zur Messung der Leistung, einige davon beinhalten ausgeklügelte [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Einstieg besteht jedoch darin, zu lernen, wie Sie Tools wie integrierte Browser-[Netzwerk-](/de/docs/Learn/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn/Performance/Measuring_performance#performance_monitor_tools) verwenden, um die Teile der Seite zu untersuchen, die lange zum Laden benötigen und optimiert werden müssen.

## Wichtige HTML-Leistungsprobleme

HTML ist in Bezug auf die Leistung einfach – es handelt sich hauptsächlich um Text, der klein in der Größe ist und daher meistens schnell heruntergeladen und gerendert werden kann. Die wichtigsten Probleme, die die Leistung einer Webseite beeinflussen können, umfassen:

- Größe von Bild- und Videodateien: Es ist wichtig, darüber nachzudenken, wie der Inhalt von ersetzten Elementen wie {{htmlelement("img")}} und {{htmlelement("video")}} behandelt wird. Bild- und Videodateien sind groß und können das Gewicht der Seite erheblich erhöhen. Daher ist es wichtig, die heruntergeladenen Bytes auf dem Gerät eines Benutzers zu minimieren (zum Beispiel, indem kleinere Bilder für Mobilgeräte bereitgestellt werden). Sie sollten auch die wahrgenommene Leistung verbessern, indem Sie Bilder und Videos auf einer Seite nur laden, wenn sie benötigt werden.
- Auslieferung eingebetteter Inhalte: Dies ist normalerweise der Inhalt, der in {{htmlelement("iframe")}}-Elementen eingebettet ist. Das Laden von Inhalten in `<iframe>`s kann die Leistung erheblich beeinflussen, daher sollte dies sorgfältig überlegt werden.
- Reihenfolge des Ressourcenladens: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte das HTML zuerst in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Sie können dann verschiedene Funktionen nutzen, um die Reihenfolge des Ressourcenladens für eine bessere Leistung zu beeinflussen. Zum Beispiel können Sie kritische CSS und Schriftarten frühzeitig vorladen, aber nicht-kritisches JavaScript bis später hinauszögern.

> [!NOTE]
> Es gibt ein Argument dafür, Ihre HTML-Struktur zu vereinfachen und den Quellcode [zu minifizieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), sodass Rendern und Herunterladen schneller erfolgen. Allerdings ist die Größe der HTML-Datei vernachlässigbar im Vergleich zu Bildern und Videos und das Rendern im Browser ist heutzutage sehr schnell. Wenn Ihr HTML-Quellcode so groß und komplex ist, dass er Render- und Downloadleistungseinbußen verursacht, haben Sie wahrscheinlich größere Probleme und sollten versuchen, ihn zu vereinfachen und den Inhalt aufzuteilen.

## Reaktionsschnelle Handhabung ersetzter Elemente

[Responsives Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) hat die Art und Weise revolutioniert, wie das Layout von Webinhalten auf verschiedenen Geräten gehandhabt wird. Ein wesentlicher Vorteil, den es ermöglicht, ist das dynamische Umschalten von Layouts, die für verschiedene Bildschirmgrößen optimiert sind, beispielsweise ein Layout für Breitbildschirme im Vergleich zu einem Layout für schmale (mobile) Bildschirme. Es kann auch das dynamische Umschalten von Inhalten basierend auf anderen Geräteeigenschaften wie Auflösung oder Vorliebe für helle oder dunkle Farbgebung handhaben.

Die sogenannte "Mobile First"-Technik kann sicherstellen, dass das Standardlayout für Geräte mit kleinem Bildschirm geeignet ist, damit Mobiltelefone nur Bilder herunterladen müssen, die für ihre Bildschirme geeignet sind, und keine größeren Desktop-Bilder herunterladen müssen. Da dies jedoch über [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) in Ihrem CSS gesteuert wird, kann es nur die Leistung von Bildern beeinflussen, die in CSS geladen werden.

In den untenstehenden Abschnitten fassen wir zusammen, wie Sie responsive ersetzte Elemente implementieren. Sie finden viel ausführlichere Informationen zu diesen Implementierungen in den Leitfäden [Video- und Audioinhalt](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) und [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

### Bereitstellung unterschiedlicher Bildauflösungen über srcset

Um verschiedene Auflösungen derselben Grafik bereitzustellen, abhängig von der Auflösung und dem Ansichtsfenster des Geräts, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) verwenden.

Dieses Beispiel bietet unterschiedlich große Bilder für verschiedene Bildschirmbreiten:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Familienporträt" />
```

`srcset` gibt die intrinsische Größe der Quelldateien zusammen mit ihren Dateinamen an, und `sizes` bietet Medienabfragen zusammen mit den Bildplatzbreiten, die in jedem Fall gefüllt werden müssen. Der Browser entscheidet dann, welche Bilder für jeden Platz geladen werden sollen. Zum Beispiel, wenn die Bildschirmbreite `600px` oder weniger beträgt, ist `max-width: 600px` wahr, und daher soll der Platz mit `480px` gefüllt werden. In diesem Fall wird der Browser wahrscheinlich die Datei 480w.jpg (480px-breites Bild) laden. Dies hilft bei der Leistung, da Browser keine größeren Bilder laden als nötig.

Dieses Beispiel bietet verschiedene Auflösungen für verschiedene Bildschirmauflösungen:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Familienporträt" />
```

`1.5x`, `2x`, etc. sind relative Auflösungsindikatoren. Wenn das Bild so gestylt ist, dass es 320px breit ist (zum Beispiel mit `width: 320px` in CSS), wird der Browser `320w.jpg` laden, wenn das Gerät eine niedrige Auflösung hat (ein Gerätepixel pro CSS-Pixel), oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei oder mehr Gerätepixel pro CSS-Pixel).

In beiden Fällen bietet das `src`-Attribut ein Standardbild zum Laden, falls der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung unterschiedlicher Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf und ermöglicht Ihnen, mehrere verschiedene Quellen für unterschiedliche Situationen bereitzustellen. Zum Beispiel, wenn das Layout breit ist, wollen Sie wahrscheinlich ein breites Bild, und wenn es schmal ist, wollen Sie ein schmaleres Bild, das in diesem Kontext trotzdem funktioniert.

Natürlich funktioniert dies auch, um eine kleinere Informationsmenge auf mobilen Geräten bereitzustellen, was der Leistung hilft.

Ein Beispiel wäre:

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dichte Waldszene" />
</picture>
```

Die {{htmlelement("source")}}-Elemente enthalten Medienabfragen innerhalb von `media`-Attributen. Wenn eine Medienabfrage als wahr zurückkehrt, wird das Bild geladen, das im `srcset`-Attribut seines `<source>`-Elements referenziert ist. Im obigen Beispiel wird das `narrow-banner-480w.jpg`-Bild geladen, wenn die Ansichtsfensterbreite `799px` oder weniger beträgt. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild bietet, das geladen wird, falls Browser `<picture>` nicht unterstützen.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. Wie in der vorherigen Sektion gezeigt, können Sie unterschiedliche Auflösungen für jede Bildquelle bereitstellen.

`<video>`-Elemente funktionieren in ähnlicher Weise, was das bereitstellen verschiedener Quellen betrifft:

```html
<video controls>
  <source src="video/smaller.mp4" type="video/mp4" />
  <source src="video/smaller.webm" type="video/webm" />
  <source src="video/larger.mp4" type="video/mp4" media="(min-width: 800px)" />
  <source
    src="video/larger.webm"
    type="video/webm"
    media="(min-width: 800px)" />

  <!-- Fallback für Browser, die das Video-Element nicht unterstützen -->
  <a href="video/larger.mp4">Video herunterladen</a>
</video>
```

Es gibt jedoch einige wesentliche Unterschiede zwischen der Bereitstellung von Quellen für Bilder und Videos:

- Im obigen Beispiel verwenden wir `src` anstelle von `srcset`; Sie können keine unterschiedlichen Auflösungen für Videos über `srcset` angeben.
- Stattdessen geben Sie unterschiedliche Auflösungen in den verschiedenen `<source>`-Elementen an.
- Beachten Sie, dass wir auch unterschiedliche Videoformate innerhalb verschiedener `<source>`-Elemente angeben, wobei jedes Format über seinen MIME-Typ im `type`-Attribut identifiziert wird. Browser laden das erste, auf das sie stoßen, das sie unterstützen, wobei der Medienabfragetest als wahr zurückkehrt.

### Lazy-Loading von Bildern

Eine sehr nützliche Technik zur Verbesserung der Leistung ist **Lazy-Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort zu laden, wenn das HTML gerendert wird, sondern sie stattdessen nur dann zu laden, wenn sie tatsächlich im Ansichtsfenster für den Benutzer sichtbar sind (oder bald sichtbar sein werden). Dies bedeutet, dass die sofort sichtbar/verwendbare Inhalte schneller bereit sind, während nachfolgende Inhalte nur dann Bilder geladen haben, wenn sie durch Scrollen erreicht werden, und der Browser keine Bandbreite mit dem Laden von Bildern verschwendet, die der Benutzer nie sehen wird.

Historisch wurde Lazy-Loading mit JavaScript gehandhabt, aber Browser haben jetzt ein `loading`-Attribut verfügbar, das den Browser anweisen kann, Bilder automatisch zu lazy-loaden:

```html
<img src="800w.jpg" alt="Familienporträt" loading="lazy" />
```

Weitere Informationen finden Sie auf [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev.

Sie können auch Videoinhalte mit dem `preload`-Attribut lazy-loaden. Zum Beispiel:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Wenn für `preload` der Wert `none` angegeben ist, wird dem Browser mitgeteilt, dass keine der Videodaten vorgeladen werden sollen, bevor der Benutzer entscheidet, es abzuspielen. Dies ist offensichtlich gut für die Leistung. Stattdessen wird nur das Bild angezeigt, das durch das `poster`-Attribut angegeben wird. Verschiedene Browser haben unterschiedliche Standardladeverhalten für Videos, daher ist es gut, explizit zu sein.

Weitere Informationen finden Sie in [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) auf web.dev.

## Handhabung eingebetteter Inhalte

Es ist sehr häufig, dass Inhalte von anderen Quellen in Webseiten eingebettet werden. Dies geschieht meist bei der Anzeige von Werbung auf einer Seite zur Generierung von Einnahmen – die Anzeigen werden normalerweise von einem Drittunternehmen generiert und auf Ihrer Seite eingebettet. Andere Verwendungen könnten sein:

- Anzeige geteilter Inhalte, die ein Benutzer auf mehreren Seiten benötigt, wie zum Beispiel ein Warenkorb oder Profilinformationen.
- Anzeige von Drittanbieter-Inhalten, die mit der Hauptseite der Organisation zusammenhängen, wie zum Beispiel ein Social-Media-Feed.

Inhalte werden meist mit {{htmlelement("iframe")}}-Elementen eingebettet, obwohl es andere weniger häufig verwendete Einbettungselemente gibt, wie {{htmlelement("object")}} und {{htmlelement("embed")}}. Wir konzentrieren uns in diesem Abschnitt auf `<iframe>`s.

Der wichtigste und zentrale Ratschlag für die Verwendung von `<iframe>`s lautet: „Verwenden Sie eingebettete `<iframe>`s nur dann, wenn es absolut notwendig ist“. Wenn Sie eine Seite mit mehreren verschiedenen Informationsbereichen erstellen, könnte es organisatorisch sinnvoll erscheinen, diese in separate Seiten aufzuteilen und sie in unterschiedliche `<iframe>`s zu laden. Dies hat jedoch eine Reihe von Problemen hinsichtlich der Leistung und anderen Bereichen:

- Das Laden von Inhalten in ein `<iframe>` ist viel teurer als das Laden von Inhalten als Teil derselben direkten Seite – es erfordert nicht nur zusätzliche HTTP-Anfragen zum Laden der Inhalte, sondern der Browser muss auch separate Seiteninstanzen für jede erstellen. Jede ist im Wesentlichen eine separate Webseite, die in die übergeordnete Webseite eingebettet ist.
- Ausgehend vom vorherigen Punkt müssen Sie auch jegliche CSS-Stile oder JavaScript-Manipulationen für jedes unterschiedliche `<iframe>` separat handhaben (es sei denn, die eingebetteten Seiten stammen vom gleichen Ursprung), was viel komplexer ist. Sie können eingebettete Inhalte nicht mit CSS und JavaScript anvisieren, das auf die oberste Seite angewendet wird, oder umgekehrt. Dies ist eine sinnvolle Sicherheitsmaßnahme, die grundlegend für das Web ist. Stellen Sie sich die Probleme vor, die entstehen könnten, wenn eingebettete Drittanbieter-Inhalte willkürlich Skripte gegen jede Seite ausführen könnten, in die sie eingebettet sind!
- Jedes `<iframe>` müsste auch jegliche gemeinsamen Daten und Mediendateien separat laden – Sie können keine zwischengespeicherten Ressourcen über verschiedene Seiteneinbettungen hinweg teilen (wiederum, es sei denn, die eingebetteten Seiten stammen vom gleichen Ursprung). Dies kann dazu führen, dass eine Seite wesentlich mehr Bandbreite verbraucht, als Sie vielleicht erwarten.

Es ist ratsam, die Inhalte in eine einzelne Seite zu setzen. Wenn Sie beim Ändern der Seite neue Inhalte dynamisch nachladen möchten, ist es für die Leistung immer noch besser, sie in dieselbe Seite zu laden, anstatt sie in ein `<iframe>` zu setzen. Sie können die neuen Daten beispielsweise mit der {{domxref("Window/fetch", "fetch()")}}-Methode abrufen und dann mit etwas DOM-Scripting in die Seite einfügen. Weitere Informationen finden Sie unter [Fetching data from the server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) und [Manipulating documents](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).

> [!NOTE]
> Wenn Sie die Inhalte kontrollieren und sie relativ einfach sind, könnten Sie erwägen, Base-64-kodierte Inhalte im `src`-Attribut zu verwenden, um das `<iframe>` zu füllen, oder sogar Roh-HTML in das `srcdoc`-Attribut einzufügen (Siehe [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für weitere Informationen).

Wenn Sie `<iframe>`s verwenden müssen, dann verwenden Sie sie sparsam.

### Lazy-Loading von Iframes

In gleicher Weise wie `<img>`-Elemente können Sie auch das `loading`-Attribut verwenden, um den Browser anzuweisen, `<iframe>`-Inhalte, die anfänglich außerhalb des Bildschirms liegen, lazy zu laden, was die Leistung verbessert:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Weitere Informationen finden Sie unter [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading).

## Handhabung der Ladeordnung von Ressourcen

Die Anordnung des Ladens von Ressourcen ist wichtig, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Das HTML wird im Allgemeinen zuerst analysiert, in der Reihenfolge, in der es auf der Seite erscheint.
2. Gefundenes CSS wird analysiert, um die Stile zu verstehen, die auf die Seite angewandt werden müssen. Während dieser Zeit beginnen verlinkte Ressourcen wie Bilder und Webfonts, abgerufen zu werden.
3. Gefundenes JavaScript wird analysiert, ausgewertet und auf die Seite angewendet. Standardmäßig blockiert dies das Parsen des HTML, das nach den {{htmlelement("script")}}-Elementen erscheint, in denen das JavaScript gefunden wird.
4. Etwas später berechnet der Browser, wie jedes HTML-Element gestylt werden sollte, basierend auf dem angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm dargestellt.

> [!NOTE]
> Dies ist eine stark vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen einen Eindruck.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, zu ändern, wie das Laden von Ressourcen abläuft, um die Leistung zu verbessern. Wir werden einige dieser Funktionen jetzt erkunden.

### Umgang mit dem Laden von JavaScript

Das Parsen und Ausführen von JavaScript blockiert das Parsen des nachfolgenden DOM-Inhalts. Dies erhöht die Zeit, bis dieser Inhalt gerendert und für die Benutzer der Seite nutzbar ist. Ein kleines Skript macht möglicherweise keinen großen Unterschied, aber bedenken Sie, dass moderne Webanwendungen dazu neigen, sehr JavaScript-lastig zu sein.

Ein weiterer Nebeneffekt des ursprünglichen JavaScript-Verhaltens besteht darin, dass, wenn das Skript, das gerendert wird, auf DOM-Inhalt angewiesen ist, der später auf der Seite erscheint, Sie Fehler erhalten.

Stellen Sie sich zum Beispiel einen einfachen Absatz auf einer Seite vor:

```html
<p>Mein Absatz</p>
```

Stellen Sie sich nun eine JavaScript-Datei vor, die den folgenden Code enthält:

```js
const pElem = document.querySelector("p");

pElem.addEventListener("click", () => {
  alert("Sie haben auf den Absatz geklickt");
});
```

Wir können dieses Skript auf die Seite anwenden, indem wir es in einem `<script>`-Element wie diesem referenzieren:

```html
<script src="index.js"></script>
```

Wenn wir dieses `<script>`-Element vor dem `<p>`-Element in der Quellreihenfolge platzieren (zum Beispiel im {{htmlelement("head")}}-Element), wird die Seite einen Fehler werfen (Chrome beispielsweise berichtet "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" in der Konsole). Dies tritt auf, weil das Skript auf das `<p>`-Element angewiesen ist, um zu funktionieren, aber zu dem Zeitpunkt, an dem das Skript analysiert wird, das `<p>`-Element noch nicht auf der Seite vorhanden ist. Es wurde noch nicht gerendert.

Sie können das obige Problem lösen, indem Sie das `<script>`-Element nach dem `<p>`-Element platzieren (zum Beispiel am Ende des Dokumentkörpers) oder indem Sie den Code in einem geeigneten Ereignishandler ausführen (zum Beispiel ihn beim [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Event ausführen, das ausgelöst wird, wenn das DOM vollständig analysiert wurde).

Dies löst jedoch nicht das Problem des Wartens auf das Laden der Skripte. Eine bessere Leistung kann erreicht werden, indem Sie das `async`-Attribut dem `<script>`-Element hinzufügen:

```html
<script async src="index.js"></script>
```

Dies führt dazu, dass das Skript parallel zum DOM-Parsing abgerufen wird, sodass es gleichzeitig bereit ist und das Rendering nicht blockiert, wodurch die Leistung verbessert wird.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das dazu führt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Start von `DOMContentLoaded`, ausgeführt wird. Dies hat eine ähnliche Wirkung wie `async`.

Ein weiterer Tipp zur Handhabung des JavaScript-Ladens besteht darin, Ihr Skript in Modulteile zu zerlegen und jeden Teil bei Bedarf zu laden, anstatt Ihren gesamten Code in ein riesiges Skript zu packen und das alles am Anfang zu laden. Dies wird mithilfe von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) getan. Lesen Sie den verlinkten Artikel für eine detaillierte Anleitung.

### Preloading von Inhalten mit rel="preload"

Das Abrufen anderer Ressourcen (wie Bilder, Videos oder Schriftdateien), die von Ihrem HTML, CSS und JavaScript verlinkt sind, kann ebenfalls Leistungsprobleme verursachen, die Ihre Codeausführung blockieren und die Erfahrung verlangsamen. Eine Möglichkeit, solche Probleme zu mildern, besteht darin, `rel="preload"` zu verwenden, um {{htmlelement("link")}}-Elemente in Vorlader zu verwandeln. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Beim Auftreffen auf einen `rel="preload"`-Link wird der Browser die referenzierte Ressource so schnell wie möglich abrufen und im Browser-Cache verfügbar machen, damit sie bei der Referenzierung im nachfolgenden Code schneller einsatzbereit ist. Es ist nützlich, wichtige Ressourcen, die der Benutzer frühzeitig auf einer Seite antrifft, vorzuhalten, damit die Erfahrung so reibungslos wie möglich verläuft.

Siehe die folgenden Artikel für detaillierte Informationen zur Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` auch verwenden, um CSS- und JavaScript-Dateien vorzuladen.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Attributes/rel) Werte, die ebenfalls dazu gedacht sind, verschiedene Aspekte des Seitenladens zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload`, `prefetch`, und `prerender`. Gehen Sie zu der verlinkten Seite und finden Sie heraus, was sie tun.

{{PreviousMenuNext("Learn/Performance/javascript_performance", "Learn/Performance/CSS", "Learn/Performance")}}

## Siehe auch

- [Fetching data from the server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [Manipulating documents](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
