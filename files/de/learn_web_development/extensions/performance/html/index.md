---
title: HTML-Leistungsoptimierung
short-title: Performantes HTML
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML ist von Natur aus schnell und zugänglich. Es ist unsere Aufgabe als Entwickler, sicherzustellen, dass wir diese beiden Eigenschaften bewahren, wenn wir HTML-Code erstellen oder bearbeiten. Komplikationen können auftreten, wenn zum Beispiel die Dateigröße eines eingebetteten {{htmlelement("video")}} zu groß ist oder wenn die JavaScript-Analyse das Rendering von kritischen Seiteninhalten blockiert. Dieser Artikel führt Sie durch die wichtigsten HTML-Leistungsmerkmale, die die Qualität Ihrer Webseite erheblich verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und grundlegende Kenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Auswirkungen von HTML auf die Website-Leistung zu verstehen und wie Sie Ihr HTML optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres HTML beginnen, ist: "Was muss ich optimieren?". Einige der folgenden Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während einige nur in bestimmten Situationen benötigt werden. Es ist wahrscheinlich unnötig und eine Verschwendung Ihrer Zeit, alle diese Techniken überall anzuwenden. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Seite messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige beinhalten fortgeschrittene [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um zu beginnen, ist jedoch, zu lernen, wie man Tools wie integrierte Browser[Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) Tools verwendet, um die Teile der Seite zu untersuchen, die lange zum Laden benötigen und optimiert werden müssen.

## Wichtige HTML-Leistungsprobleme

HTML ist hinsichtlich der Leistung einfach – es handelt sich größtenteils um Text, der klein in der Größe ist und daher meist schnell heruntergeladen und gerendert wird. Die wichtigsten Probleme, die die Leistung einer Webseite beeinflussen können, sind:

- Größe der Bild- und Videodateien: Es ist wichtig, zu überlegen, wie mit dem Inhalt ersetzter Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} umgegangen werden soll. Bild- und Videodateien sind groß und können erheblich zum Gewicht der Seite beitragen. Daher ist es wichtig, die Anzahl der Bytes zu minimieren, die auf einem Gerät des Benutzers heruntergeladen werden (zum Beispiel kleinere Bilder für Mobilgeräte bereitzustellen). Sie müssen auch in Betracht ziehen, die wahrgenommene Leistung zu verbessern, indem Sie Bilder und Videos auf einer Seite nur dann laden, wenn sie benötigt werden.
- Bereitstellung von eingebettetem Inhalt: Dies ist in der Regel der Inhalt, der in {{htmlelement("iframe")}}-Elementen eingebettet ist. Das Laden von Inhalten in `<iframe>`s kann die Leistung erheblich beeinträchtigen, daher sollte dies sorgfältig abgewogen werden.
- Reihenfolge des Ressourcenladens: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte das HTML zuerst in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Sie können dann verschiedene Funktionen verwenden, um die Reihenfolge des Ressourcenladens für eine bessere Performance zu beeinflussen. Beispielsweise können Sie kritisches CSS und Schriftarten frühzeitig vorladen, aber nicht kritisches JavaScript später nachladen.

> [!NOTE]
> Es gibt ein Argument dafür, Ihre HTML-Struktur zu vereinfachen und Ihren Quellcode zu [minifizieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), sodass Rendering und Downloads schneller sind. Allerdings ist die HTML-Dateigröße im Vergleich zu Bildern und Videos vernachlässigbar, und das Browser-Rendering ist heutzutage sehr schnell. Wenn Ihr HTML-Quellcode so groß und komplex ist, dass er Rendering- und Download-Leistungsprobleme verursacht, haben Sie wahrscheinlich größere Probleme und sollten versuchen, ihn zu vereinfachen und den Inhalt zu verteilen.

## Responsiver Umgang mit ersetzten Elementen

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) hat die Art und Weise revolutioniert, wie das Layout von Webinhalten auf verschiedenen Geräten behandelt wird. Ein wesentlicher Vorteil, den es ermöglicht, ist der dynamische Wechsel von Layouts, die für verschiedene Bildschirmgrößen optimiert sind, z. B. ein Breitbildlayout versus ein schmales (mobiles) Bildschirmlayout. Es kann auch den dynamischen Wechsel von Inhalten basierend auf anderen Geräteattributen wie Auflösung oder Vorliebe für helles oder dunkles Farbdesign handhaben.

Die sogenannte "Mobile First"-Technik kann sicherstellen, dass das Standardlayout für Geräte mit kleinen Bildschirmen vorgesehen ist, sodass Mobilgeräte nur die für ihre Bildschirme geeigneten Bilder herunterladen und nicht die Leistungsnachteile des Herunterladens größerer Desktop-Bilder haben. Da dies jedoch in Ihrem CSS mithilfe von [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) gesteuert wird, kann es sich nur positiv auf die Leistung von in CSS geladenen Bildern auswirken.

In den unten stehenden Abschnitten fassen wir zusammen, wie Sie responsive ersetzte Elemente umsetzen können. Detaillierte Informationen zu diesen Implementierungen finden Sie in den [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) und [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) Leitfäden.

### Bereitstellung verschiedener Bildauflösungen über srcset

Um verschiedene Auflösungen derselben Bildversion je nach Auflösung und Ansichtsgröße des Geräts bereitzustellen, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) verwenden.

Dieses Beispiel stellt Bilder unterschiedlicher Größe für unterschiedliche Bildschirmbreiten bereit:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` bietet die intrinsische Größe der Quellbilder zusammen mit ihren Dateinamen, und `sizes` ermöglicht Media-Queries neben den Bildplatzierungen, die in jedem Fall gefüllt werden müssen. Der Browser entscheidet dann, welche Bilder für jeden Platz geladen werden sollen. Angenommen, die Bildschirmbreite beträgt `600px` oder weniger, dann ist `width <= 600px` wahr, und daher wird gesagt, dass der Platz mit `480px` gefüllt werden soll. In diesem Fall wählt der Browser wahrscheinlich die 480w.jpg-Datei (480px-breites Bild) zum Laden aus. Dies hilft der Leistung, weil Browser keine größeren Bilder laden, als sie benötigen.

Dieses Beispiel bietet Bilder unterschiedlicher Auflösung für verschiedene Bildschirmauflösungen:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x` usw. sind relative Auflösungsanzeigen. Wenn das Bild auf 320px Breite gestylt ist (zum Beispiel mit `width: 320px` in CSS), lädt der Browser `320w.jpg`, wenn das Gerät eine niedrige Auflösung (ein {{Glossary("device_pixel", "Gerätepixel")}} pro CSS-Pixel) hat, oder `640x.jpg`, wenn das Gerät eine hohe Auflösung (zwei Gerätepixel pro CSS-Pixel oder mehr) besitzt.

In beiden Fällen liefert das `src`-Attribut ein Standardbild, das geladen wird, wenn der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung verschiedener Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf und ermöglicht es Ihnen, mehrere verschiedene Quellen für unterschiedliche Situationen bereitzustellen. Zum Beispiel, wenn das Layout breit ist, möchten Sie wahrscheinlich ein breites Bild, und wenn es schmal ist, möchten Sie ein schmaleres Bild, das in diesem Kontext immer noch funktioniert.

Natürlich funktioniert dies auch, um einen kleineren Download an Informationen auf mobilen Geräten bereitzustellen und somit die Leistung zu verbessern.

Ein Beispiel ist folgendes:

```html
<picture>
  <source media="(width < 800px)" srcset="narrow-banner-480w.jpg" />
  <source media="(width >= 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die {{htmlelement("source")}}-Elemente enthalten Media-Queries innerhalb von `media`-Attributen. Wenn eine Media-Query wahr ist, wird das Bild geladen, das im `srcset`-Attribut seines `<source>`-Elements referenziert ist. Im obigen Beispiel wird, wenn die Ansichtsbreite kleiner als `800px` ist, das `narrow-banner-480w.jpg`-Bild geladen. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild zum Laden für den Fall bereitstellt, dass der Browser `<picture>` nicht unterstützt.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. So wie im vorherigen Abschnitt gezeigt, können Sie verschiedene Auflösungen für jede Bildquelle bereitstellen.

`<video>`-Elemente funktionieren ähnlich, was die Bereitstellung verschiedener Quellen betrifft:

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

- Im obigen Beispiel verwenden wir `src` anstelle von `srcset`; Sie können keine unterschiedlichen Auflösungen für Videos über `srcset` angeben.
- Stattdessen geben Sie verschiedene Auflösungen innerhalb der verschiedenen `<source>`-Elemente an.
- Beachten Sie, wie wir auch verschiedene Videoformate innerhalb der verschiedenen `<source>`-Elemente angeben, wobei jedes Format über seinen MIME-Typ innerhalb des `type`-Attributs identifiziert wird. Browser laden das erste, das sie finden und das sie unterstützen, wo der Medientest als wahr zurückkehrt.

### Lazy Loading von Bildern

Eine sehr nützliche Technik zur Verbesserung der Leistung ist das **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort zu laden, wenn das HTML gerendert wird, sondern sie nur dann zu laden, wenn sie tatsächlich im Viewport des Benutzers sichtbar sind (oder unmittelbar sichtbar werden). Das bedeutet, dass der direkt sichtbare/verwendbare Inhalt schneller einsatzbereit ist, während nachfolgende Inhalte ihre Bilder nur dann rendern, wenn sie erreicht werden, und der Browser keine Bandbreite mit dem Laden von Bildern verschwendet, die der Benutzer niemals sehen wird.

Historisch wurde Lazy Loading mit JavaScript gehandhabt, aber Browser verfügen jetzt über ein `loading`-Attribut, das den Browser anweisen kann, Bilder automatisch verzögert zu laden:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Sehen Sie sich [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev an, um detaillierte Informationen zu erhalten.

### Lazy Loading von Video und Audio

Sie können Video-Inhalte auch so lange verzögert laden, bis das Video abgespielt wird, indem Sie das `preload`-Attribut verwenden. Zum Beispiel:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Das `preload`-Attribut auf `none` zu setzen, weist den Browser an, keine Videodaten vorzupuffern, bevor der Benutzer sich entscheidet, es abzuspielen, was offensichtlich gut für die Leistung ist. Stattdessen wird nur das Bild angezeigt, das durch das `poster`-Attribut angegeben wird. Verschiedene Browser haben unterschiedliche Standardverhaltensweisen beim Videoladen, daher ist es gut, explizit zu sein.

Das Setzen des `preload`-Attributs auf `metadata` weist den Browser an, die minimal benötigten Daten zum Anzeigen des Videos vor dem Abspielen herunterzuladen (z.B. die Länge, Abmessungen und möglicherweise das Anfangsbild).

Das `loading`-Attribut kann das verzögerte Laden von Videos zusätzlich verbessern, indem es das Laden von Videodaten verzögert, unabhängig vom `preload`-Wert, sowie das Laden des `poster`-Bildes, bis das Video in der Nähe des Viewports ist (zu diesem Zeitpunkt wird der `preload`-Wert wie üblich verwendet).

```html
<video controls preload="none" poster="poster.jpg" loading="lazy">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Dies kann auch für Audioinhalte verwendet werden:

```html
<audio
  controls
  src="/shared-assets/audio/t-rex-roar.mp3"
  loading="lazy"></audio>
```

Sehen Sie sich [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) auf web.dev an, um detaillierte Informationen zu erhalten.

## Umgang mit eingebettetem Inhalt

Es ist sehr häufig, dass Inhalte aus anderen Quellen in Webseiten eingebettet werden. Dies geschieht normalerweise beim Anzeigen von Werbung auf einer Seite, um Einnahmen zu generieren – die Anzeigen werden in der Regel von einem Drittunternehmen in irgendeiner Form generiert und auf Ihrer Seite eingebettet. Andere Einsatzmöglichkeiten könnten sein:

- Anzeigen von gemeinsamen Inhalten, die ein Benutzer möglicherweise auf mehreren Seiten benötigt, wie z.B. einen Warenkorb oder Profilinformationen.
- Anzeigen von Inhalten von Drittanbietern, die zur Hauptseite der Organisation gehören, wie z.B. ein Feed aus sozialen Medien.

Das Einbetten von Inhalten wird am häufigsten mit {{htmlelement("iframe")}}-Elementen durchgeführt, obwohl es auch andere, weniger häufig verwendete Einbettungselemente gibt, wie {{htmlelement("object")}} und {{htmlelement("embed")}}. Wir konzentrieren uns in diesem Abschnitt auf `<iframe>`s.

Der wichtigste Rat für die Verwendung von `<iframe>`s ist: "Verwenden Sie eingebettete `<iframe>`s nur dann, wenn Sie unbedingt müssen". Wenn Sie eine Seite mit mehreren unterschiedlichen Informationsbereichen erstellen, klingt es möglicherweise sinnvoll, diese in separate Seiten zu unterteilen und in verschiedenen `<iframe>`s zu laden. Dies hat jedoch in Bezug auf Leistung und andere Aspekte mehrere Probleme:

- Das Laden des Inhalts in ein `<iframe>` ist wesentlich aufwändiger als das Laden des Inhalts als Teil derselben direkten Seite – es erfordert nicht nur zusätzliche HTTPS-Anfragen zum Laden des Inhalts, sondern der Browser muss auch für jedes eine separate Seiteninstanz erstellen. Jede davon ist effektiv eine separate Webseiteninstanz, die in die übergeordnete Webseite eingebettet ist.
- Anschließend müssen Sie jedes verschiedene `<iframe>` separat in Bezug auf CSS-Styling oder JavaScript-Manipulation behandeln (es sei denn, die eingebetteten Seiten stammen von derselben Herkunft), was erheblich komplexer wird. Sie können eingebettete Inhalte nicht mit CSS und JavaScript ansprechen, die auf der Hauptseite angewendet werden, oder umgekehrt. Dies ist eine sinnvolle Sicherheitsmaßnahme, die grundlegend für das Web ist. Stellen Sie sich alle Probleme vor, die auftreten könnten, wenn eingebettete Inhalte ohne weiteres Skripte gegen jede Seite ausführen könnten, auf der sie eingebettet sind!
- Jedes `<iframe>` müsste auch alle gemeinsamen Daten und Mediendateien separat laden – Sie können keine gecachten Assets über verschiedene Seitenembeds hinweg teilen (es sei denn, die eingebetteten Seiten stammen von derselben Herkunft). Dies kann zu einem unerwartet hohen Bandbreitenverbrauch der Seite führen.

Es ist ratsam, den Inhalt in eine einzige Seite zu packen. Wenn Sie neue Inhalte dynamisch laden möchten, während sich die Seite verändert, ist es in der Regel besser für die Leistung, sie in dieselbe Seite zu laden, anstatt sie in ein `<iframe>` zu setzen. Sie könnten die neuen Daten beispielsweise mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode abrufen und dann mit DOM-Scripting in die Seite injizieren. Siehe [Netzwerkanfragen mit JavaScript machen](/de/docs/Learn_web_development/Core/Scripting/Network_requests) und [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) für mehr Informationen.

> [!NOTE]
> Wenn Sie die Inhalte kontrollieren und diese relativ einfach sind, könnten Sie in Erwägung ziehen, Base-64-kodierte Inhalte im `src`-Attribut zu verwenden, um das `<iframe>` zu füllen, oder sogar den rohen HTML-Code im `srcdoc`-Attribut einzufügen (siehe [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für mehr Informationen).

Wenn Sie `<iframe>`s verwenden müssen, dann setzen Sie sie sparsam ein.

### Lazy Loading von Iframes

Genauso wie bei `<img>`-Elementen können Sie das `loading`-Attribut verwenden, um den Browser anzuweisen, Inhalte von `<iframe>`s, die sich zunächst außerhalb des Bildschirms befinden, verzögert zu laden, was die Leistung verbessert:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Sehen Sie sich [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) an, um mehr Informationen zu erhalten.

## Verwaltung der Reihenfolge des Ressourcenladens

Die Reihenfolge des Ladens von Ressourcen ist wichtig, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Das HTML wird im Allgemeinen zuerst geparst, in der Reihenfolge, in der es auf der Seite erscheint.
2. Gefundene CSS-Dateien werden geparst, um die anzuwendenden Stile auf der Seite zu verstehen. Während dieser Zeit beginnen verlinkte Assets wie Bilder und Webfonts geladen zu werden.
3. Gefundene JavaScript-Dateien werden geparst, ausgewertet und auf die Seite angewendet. Standardmäßig blockiert dies die Verarbeitung der HTML-Inhalte, die nach den {{htmlelement("script")}}-Elementen erscheinen, wo das JavaScript gefunden wird.
4. Etwas später arbeitet der Browser heraus, wie jedes HTML-Element gestylt werden sollte, basierend auf dem angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf den Bildschirm gemalt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, gibt Ihnen jedoch eine Vorstellung.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, zu verändern, wie das Laden von Ressourcen geschieht, um die Leistung zu verbessern. Wir werden einige dieser jetzt erkunden.

### Verwaltung des JavaScript-Ladens

Das Parsen und Ausführen von JavaScript blockiert das Parsen von nachfolgendem DOM-Inhalt. Dies erhöht die Zeit, bis dieser Inhalt gerendert und für die Benutzer der Seite verwendbar ist. Ein kleines Skript macht vielleicht nicht viel Unterschied, aber beachten Sie, dass moderne Webanwendungen in der Regel sehr JavaScript-lastig sind.

Ein weiterer Nebeneffekt des Standard-JavaScript-Parsing-Verhaltens ist, dass, wenn das Skript, das gerendert wird, von DOM-Inhalten abhängt, die später auf der Seite erscheinen, werden Fehler auftreten.

Stellen Sie sich ein einfaches Absatz-Element auf einer Seite vor:

```html
<p>My paragraph</p>
```

Nun stellen Sie sich eine JavaScript-Datei vor, die den folgenden Code enthält:

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

Wenn wir dieses `<script>`-Element im Quellcode vor dem `<p>`-Element platzieren (zum Beispiel im {{htmlelement("head")}}-Element), wird die Seite einen Fehler werfen (Chrome meldet beispielsweise "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" in der Konsole). Dies passiert, weil das Skript das `<p>`-Element benötigt, um zu funktionieren, aber zu dem Zeitpunkt, an dem das Skript geparst wird, existiert das `<p>`-Element nicht auf der Seite. Es wurde noch nicht gerendert.

Sie können das oben genannte Problem beheben, indem Sie das `<script>`-Element nach dem `<p>`-Element (zum Beispiel am Ende des Dokumentkörpers) platzieren oder indem Sie den Code innerhalb eines geeigneten Ereignishandlers ausführen (z.B. können Sie es beim [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausführen, das ausgelöst wird, wenn das DOM vollständig geparst wurde).

Dies löst jedoch nicht das Problem, dass auf das Laden des Skripts gewartet werden muss. Eine bessere Leistung kann erreicht werden, indem Sie das `async`-Attribut zum `<script>`-Element hinzufügen:

```html
<script async src="index.js"></script>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsing geladen wird, sodass es zur gleichen Zeit bereit ist und das Rendering nicht blockiert, wodurch die Leistung verbessert wird.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen von `DOMContentLoaded` ausgeführt wird. Es hat eine ähnliche Wirkung wie `async`.

Ein weiterer Tipp zum Umgang mit dem Laden von JavaScript ist, Ihr Skript in Code-Modulen zu teilen und jeden Teil bei Bedarf zu laden, anstatt all Ihren Code in ein riesiges Skript zu packen und alles am Anfang zu laden. Dies wird mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) erreicht. Lesen Sie den verlinkten Artikel für einen detaillierten Leitfaden.

### Vorladen von Inhalten mit rel="preload"

Das Laden anderer Ressourcen (wie Bilder, Videos oder Schriftdateien), die in Ihrem HTML, CSS und JavaScript verlinkt sind, kann ebenfalls zu Leistungsproblemen führen, Ihre Codeausführung blockieren und die Benutzererfahrung verlangsamen. Eine Möglichkeit, solche Probleme zu mildern, ist die Verwendung von `rel="preload"`, um {{htmlelement("link")}}-Elemente zu Preloadern zu machen. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Sobald der Browser auf einen `rel="preload"`-Link stößt, wird die referenzierte Ressource so bald wie möglich abgerufen und im Browser-Cache verfügbar gemacht, sodass sie früher bereit ist, wenn sie in nachfolgendem Code referenziert wird. Es ist nützlich, hochpriorisierte Ressourcen vorzuladen, die der Benutzer früh auf einer Seite erleben wird, damit die Benutzererfahrung so reibungslos wie möglich ist.

Siehe die folgenden Artikel für detaillierte Informationen zur Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` auch verwenden, um CSS- und JavaScript-Dateien vorzulauden.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Werte, die ebenfalls entworfen wurden, um verschiedene Aspekte des Seitenladens zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload` und `prefetch`. Gehen Sie zur verlinkten Seite und finden Sie heraus, was sie tun.

## Siehe auch

- [Netzwerkanfragen mit JavaScript machen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
