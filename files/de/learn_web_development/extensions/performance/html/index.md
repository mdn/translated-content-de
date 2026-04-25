---
title: HTML-Leistungsoptimierung
short-title: Leistungsstarkes HTML
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML ist standardmäßig schnell und zugänglich. Es ist unsere Aufgabe als Entwickler, sicherzustellen, dass wir diese beiden Eigenschaften bewahren, wenn wir HTML-Code erstellen oder bearbeiten. Komplikationen können auftreten, wenn beispielsweise die Dateigröße einer eingebetteten {{htmlelement("video")}}-Datei zu groß ist oder das Parsen von JavaScript die Darstellung kritischer Seitenelemente blockiert. Dieser Artikel führt Sie durch die wichtigsten HTML-Performance-Funktionen, die die Qualität Ihrer Webseite drastisch verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse der
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Erlernen des Einflusses von HTML auf die Website-Performance
        und Optimierung Ihres HTML zur Verbesserung der Leistung.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres HTML beginnen, lautet: "Was muss ich optimieren?". Einige der unten besprochenen Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige davon verwenden fortschrittliche [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg zu beginnen ist jedoch, zu lernen, wie Sie Tools wie eingebettete Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) verwenden können, um die Teile der Seite zu untersuchen, die lange zum Laden brauchen und optimiert werden müssen.

## Wichtige HTML-Leistungsprobleme

HTML ist in Bezug auf die Leistung einfach — es ist hauptsächlich Text, der klein in der Größe ist und daher in der Regel schnell heruntergeladen und gerendert wird. Die wichtigsten Probleme, die die Leistung einer Webseite beeinträchtigen können, umfassen:

- Größe der Bild- und Videodateien: Es ist wichtig zu berücksichtigen, wie man mit den Inhalten von Ersetzungselementen wie {{htmlelement("img")}} und {{htmlelement("video")}} umgeht. Bild- und Videodateien sind groß und können erheblich zum Gewicht der Seite beitragen. Daher ist es wichtig, die Menge der heruntergeladenen Bytes auf dem Gerät des Benutzers zu minimieren (zum Beispiel kleinere Bilder für Mobilgeräte bereitzustellen). Sie müssen auch berücksichtigen, die wahrgenommene Leistung zu verbessern, indem Bilder und Videos auf einer Seite nur geladen werden, wenn sie benötigt werden.
- Bereitstellung eingebetteter Inhalte: Dies ist normalerweise der Inhalt, der in {{htmlelement("iframe")}}-Elementen eingebettet ist. Das Laden von Inhalten in `<iframe>`s kann die Leistung erheblich beeinflussen, daher sollte dies sorgfältig bedacht werden.
- Reihenfolge des Ressourcenladens: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte das HTML zuerst und in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Sie können dann verschiedene Funktionen verwenden, um die Reihenfolge des Ressourcenladens für eine bessere Leistung zu beeinflussen. Zum Beispiel können Sie kritische CSS und Schriftarten frühzeitig vorladen, aber nicht-kritisches JavaScript später aufrufen.

> [!NOTE]
> Es gibt Argumente dafür, die HTML-Struktur zu vereinfachen und den Quellcode [zu minifizieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), damit Rendering und Downloads schneller sind. Allerdings ist die HTML-Dateigröße im Vergleich zu Bildern und Videos vernachlässigbar, und das Browser-Rendering ist heutzutage sehr schnell. Wenn Ihr HTML-Quellcode so groß und komplex ist, dass er Rendierungs- und Downloadleistungsprobleme verursacht, haben Sie wahrscheinlich größere Probleme und sollten es vereinfachen und den Inhalt aufteilen.

## Reaktionsfähiger Umgang mit Ersetzungselementen

[Reaktionsfähiges Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) hat die Art und Weise, wie das Layout von Webinhalten auf verschiedenen Geräten behandelt wird, revolutioniert. Ein wesentlicher Vorteil, den es ermöglicht, ist das dynamische Umschalten von Layouts, die für verschiedene Bildschirmgrößen optimiert sind, zum Beispiel ein Breitbild-Layout im Vergleich zu einem schmalen (mobilen) Bildschirm-Layout. Es kann auch dynamisches Umschalten von Inhalten basierend auf anderen Geräteattributen wie Auflösung oder Vorliebe für ein helles oder dunkles Farbschema handhaben.

Die sogenannte "Mobile-First"-Technik kann sicherstellen, dass das Standardlayout für Geräte mit kleinem Bildschirm geeignet ist, sodass Mobilgeräte nur Bilder herunterladen können, die für ihre Bildschirme geeignet sind, und nicht die Leistungsnachteile durch das Herunterladen größerer Desktop-Bilder erleiden müssen. Da dies jedoch mit [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) in Ihrem CSS gesteuert wird, kann es nur die Leistung von in CSS geladenen Bildern positiv beeinflussen.

In den folgenden Abschnitten fassen wir zusammen, wie Sie responsive Ersetzungselemente implementieren. Weitere Details zu diesen Implementierungen finden Sie in den [HTML-Video- und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)- und [Responsive-Bilder-](/de/docs/Web/HTML/Guides/Responsive_images)-Leitfäden.

### Bereitstellung verschiedener Bildauflösungen über srcset

Um je nach Auflösung und Ansichtsfenstergröße des Geräts verschiedene Auflösungen desselben Bildes bereitzustellen, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) verwenden.

Dieses Beispiel bietet Bilder in verschiedenen Größen für unterschiedliche Bildschirmbreiten:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` gibt die intrinsische Größe der Quellbilder zusammen mit ihren Dateinamen an, und `sizes` stellt Media Queries neben Bildslotbreiten bereit, die in jedem Fall gefüllt werden müssen. Der Browser entscheidet dann, welche Bilder für jeden Slot geladen werden sollen. Wenn die Bildschirmbreite beispielsweise `600px` oder kleiner ist, dann ist `width <= 600px` wahr, und der zu füllende Slot beträgt `480px`. In diesem Fall wird der Browser wahrscheinlich die Datei 480w.jpg (480px breites Bild) laden. Dies hilft bei der Leistung, da Browser keine größeren Bilder laden, als sie benötigen.

Dieses Beispiel bietet Bilder in verschiedenen Auflösungen für unterschiedliche Bildschirmauflösungen:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x` usw. sind relative Auflösungsindikatoren. Wenn das Bild gestylt ist, um 320px breit zu sein (zum Beispiel mit `width: 320px` in CSS), lädt der Browser `320w.jpg`, wenn das Gerät eine niedrige Auflösung hat (ein {{Glossary("device_pixel", "Gerätepixel")}} pro CSS-Pixel), oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei Gerätepixel pro CSS-Pixel oder mehr).

In beiden Fällen bietet das `src`-Attribut ein Standardbild zum Laden, falls der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung verschiedener Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf und ermöglicht es Ihnen, mehrere verschiedene Quellen für unterschiedliche Situationen bereitzustellen. Zum Beispiel, wenn das Layout breit ist, möchten Sie wahrscheinlich ein breites Bild, und wenn es schmal ist, möchten Sie ein schmaleres Bild, das immer noch in diesem Kontext funktioniert.

Natürlich funktioniert dies auch, um auf mobilen Geräten einen kleineren Informationsdownload bereitzustellen, was zur Leistungsverbesserung beiträgt.

Ein Beispiel ist wie folgt:

```html
<picture>
  <source media="(width < 800px)" srcset="narrow-banner-480w.jpg" />
  <source media="(width >= 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die {{htmlelement("source")}}-Elemente enthalten Media Queries innerhalb von `media`-Attributen. Wenn eine Media Query wahr zurückgibt, wird das im `<source>`-Element referenzierte Bild in `srcset` geladen. Im obigen Beispiel, wenn die Ansichtsfensterbreite kleiner als `800px` ist, wird das Bild `narrow-banner-480w.jpg` geladen. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild zum Laden bereitstellt, falls der Browser `<picture>` nicht unterstützt.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. Wie im vorherigen Abschnitt gezeigt, können Sie für jede Bildquelle unterschiedliche Auflösungen angeben.

`<video>`-Elemente funktionieren ähnlich in Bezug auf die Bereitstellung verschiedener Quellen:

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

- Im obigen Beispiel verwenden wir `src` anstelle von `srcset`; für Videos können Sie keine unterschiedlichen Auflösungen über `srcset` angeben.
- Stattdessen geben Sie unterschiedliche Auflösungen in den verschiedenen `<source>`-Elementen an.
- Beachten Sie, wie wir auch verschiedene Videoformate in unterschiedlichen `<source>`-Elementen angeben, wobei jedes Format über seinen MIME-Typ im `type`-Attribut identifiziert wird. Browser laden das erste, das sie unterstützen, wenn der Medientest wahr zurückgibt.

### Lazy Loading von Bildern

Eine sehr nützliche Technik zur Leistungsverbesserung ist das **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort beim Rendern des HTMLs zu laden, sondern sie nur dann zu laden, wenn sie tatsächlich im Ansichtsfenster des Benutzers sichtbar (oder bald sichtbar) sind. Dies bedeutet, dass der direkt sichtbare/nutzbare Inhalt schneller einsatzbereit ist, während nachfolgende Inhalte ihre Bilder erst dann gerendert haben, wenn sie dorthin gescrollt werden, und der Browser keine Bandbreite verschwendet, um Bilder zu laden, die der Benutzer niemals sehen wird.

Historisch gesehen wurde das Lazy Loading von JavaScript gehandhabt, aber Browser haben jetzt ein `loading`-Attribut verfügbar, das den Browser anweisen kann, Bilder automatisch Lazy zu laden:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Siehe [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev für detaillierte Informationen.

### Lazy Loading von Video und Audio

Sie können auch Video-Inhalte erst dann Lazy laden, wenn das Video abgespielt wird, indem Sie das `preload`-Attribut verwenden. Zum Beispiel:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Dem `preload`-Attribut den Wert `none` zuzuweisen, weist den Browser an, keine Videodaten vorzupuffern, bevor der Benutzer entscheidet, es abzuspielen, was offensichtlich gut für die Leistung ist. Stattdessen zeigt es nur das Bild an, das durch das `poster`-Attribut angegeben wird. Unterschiedliche Browser haben unterschiedliche Standardverhalten beim Laden von Videos, daher ist es gut, explizit zu sein.

Dem `preload`-Attribut den Wert `metadata` zuzuweisen, fordert den Browser auf, die minimalen Daten herunterzuladen, die zum Anzeigen des Videos vor dem Abspielen benötigt werden (zum Beispiel die Länge, die Abmessungen und möglicherweise den Anfangsframe).

Das `loading`-Attribut kann Lazy Loading für Videos weiter verbessern, indem es das Laden von Videodaten, unabhängig vom `preload`-Wert, sowie das Laden des `poster`-Bildes aufschiebt, bis das Video in der Nähe des Ansichtsfensters ist (an diesem Punkt wird der `preload`-Wert wie gewohnt verwendet).

```html
<video controls preload="none" poster="poster.jpg" loading="lazy">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Dies kann auch mit Audio-Inhalten verwendet werden:

```html
<audio
  controls
  src="/shared-assets/audio/t-rex-roar.mp3"
  loading="lazy"></audio>
```

Siehe [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) auf web.dev für detaillierte Informationen.

## Umgang mit eingebetteten Inhalten

Es ist sehr üblich, dass Inhalte von anderen Quellen in Webseiten eingebettet werden. Dies geschieht meist, wenn auf einer Seite Werbung angezeigt wird, um Einnahmen zu generieren — die Anzeigen werden normalerweise von einem Drittunternehmen erstellt und auf Ihrer Seite eingebettet. Andere Verwendungen können umfassen:

- Anzeige von gemeinsam genutzten Inhalten, die ein Benutzer möglicherweise auf mehreren Seiten benötigt, wie z.B. ein Warenkorb oder Profilinformationen.
- Anzeige von Drittanbieter-Inhalten im Zusammenhang mit der Hauptseite der Organisation, wie z.B. ein Feed mit sozialen Medien.

Das Einbetten von Inhalten erfolgt am häufigsten über {{htmlelement("iframe")}}-Elemente, obwohl es auch andere seltener verwendete Einbettungselemente gibt, wie {{htmlelement("object")}} und {{htmlelement("embed")}}. Wir konzentrieren uns in diesem Abschnitt auf `<iframe>`s.

Der wichtigste und entscheidende Ratschlag für die Verwendung von `<iframe>`s lautet: "Verwenden Sie eingebettete `<iframe>`s nur, wenn Sie absolut müssen". Wenn Sie eine Seite mit mehreren verschiedenen Informationsbereichen erstellen, mag es organisatorisch sinnvoll erscheinen, diese in separate Seiten aufzuteilen und sie in verschiedene `<iframe>`s zu laden. Dies bringt jedoch eine Reihe von Problemen in Bezug auf die Leistung und andere Aspekte mit sich:

- Das Laden des Inhalts in ein `<iframe>` ist viel teurer als das Laden des Inhalts als Teil derselben direkten Seite — es erfordert nicht nur zusätzliche HTTP-Anfragen zum Laden des Inhalts, sondern der Browser muss auch eine separate Seiteninstanz für jede erstellen. Jede ist effektiv eine separate Webseite, die in die übergeordnete Webseite eingebettet ist.
- Im Anschluss an den vorherigen Punkt müssen Sie auch jede CSS-Stilisierung oder JavaScript-Manipulation separat für jede verschiedene `<iframe>` handhaben (es sei denn, die eingebetteten Seiten stammen vom selben Ursprung), was viel komplexer wird. Sie können eingebettete Inhalte nicht mit CSS und JavaScript anvisieren, die auf die übergeordnete Seite angewendet werden, oder umgekehrt. Dies ist eine vernünftige Sicherheitsmaßnahme, die für das Web grundlegend ist. Stellen Sie sich all die Probleme vor, die auftreten könnten, wenn beliebige eingebettete Inhalte willkürlich Skripte gegen jede Seite ausführen könnten, in die sie eingebettet sind!
- Jedes `<iframe>` müsste auch gemeinsam genutzte Daten und Mediendateien separat laden — Sie können keine zwischengespeicherten Assets über verschiedene Seiten-Einbettungen hinweg teilen (wiederum, es sei denn, die eingebetteten Seiten stammen aus demselben Ursprung). Dies kann dazu führen, dass eine Seite viel mehr Bandbreite verbraucht, als Sie erwarten würden.

Es empfiehlt sich, die Inhalte in eine einzige Seite zu stellen. Wenn Sie neue Inhalte dynamisch abrufen möchten, während sich die Seite ändert, ist es immer noch besser für die Leistung, sie in dieselbe Seite zu laden, anstatt sie in ein `<iframe>` zu legen. Vielleicht holen Sie sich die neuen Daten mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode und fügen sie dann mit etwas DOM-Scripting in die Seite ein. Siehe [Netzwerkanfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests) und [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) für weitere Informationen.

> [!NOTE]
> Wenn Sie die Inhalte kontrollieren und sie relativ einfach sind, könnten Sie in Erwägung ziehen, base-64 codierte Inhalte im `src`-Attribut zu verwenden, um das `<iframe>` zu füllen, oder sogar Roh-HTML in das `srcdoc`-Attribut einzufügen (siehe [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für weitere Informationen).

Wenn Sie `<iframe>`s verwenden müssen, verwenden Sie sie sparsam.

### Lazy Loading von iframes

Genauso wie bei `<img>`-Elementen können Sie das `loading`-Attribut verwenden, um den Browser anzuweisen, `<iframe>`-Inhalte, die anfänglich nicht im Sichtbereich sind, Lazy zu laden, um die Leistung zu verbessern:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Siehe [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) für weitere Informationen.

## Umgang mit der Lade-Reihenfolge von Ressourcen

Die Reihenfolge des Ressourcenladens ist wichtig, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Das HTML wird im Allgemeinen zuerst in der Reihenfolge geparst, in der es auf der Seite erscheint.
2. Gefundenes CSS wird geparst, um die zu anwendenden Styles auf der Seite zu verstehen. Währenddessen beginnen verknüpfte Assets wie Bilder und Webschriften abgerufen zu werden.
3. Gefundenes JavaScript wird geparst, ausgewertet und gegen die Seite ausgeführt. Standardmäßig blockiert dies das Parsen des HTML, das nach den {{htmlelement("script")}}-Elementen erscheint, wo das JavaScript gefunden wird.
4. Etwas später ermittelt der Browser, wie jedes HTML-Element gestylt werden sollte, gegeben dem CSS, das darauf angewendet wird.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm dargestellt.

> [!NOTE]
> Dies ist eine sehr vereinfachte Darstellung dessen, was passiert, aber es gibt Ihnen eine Vorstellung.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, zu modifizieren, wie das Laden von Ressourcen abläuft, um die Leistung zu verbessern. Wir werden jetzt einige davon erkunden.

### Umgang mit dem Laden von JavaScript

Das Parsen und Ausführen von JavaScript blockiert das Parsen von anschließendem DOM-Inhalt. Dies erhöht die Zeit, bis dieser Inhalt gerendert und für die Benutzer der Seite nutzbar ist. Ein kleines Skript macht keinen großen Unterschied, aber bedenken Sie, dass moderne Webanwendungen dazu tendieren, sehr JavaScript-lastig zu sein.

Ein weiterer Nebeneffekt des Standardverhaltens bei der JavaScript-Analyse ist, dass, wenn das ausgeführte Skript vom DOM-Inhalt abhängt, der später auf der Seite erscheint, Sie Fehler erhalten.

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

Wir können dieses Skript auf die Seite anwenden, indem wir es in einem `<script>`-Element wie folgt referenzieren:

```html
<script src="index.js"></script>
```

Wenn wir dieses `<script>`-Element vor dem `<p>`-Element in der Quellreihenfolge platzieren (zum Beispiel im {{htmlelement("head")}}-Element), wird die Seite einen Fehler auswerfen (Chrome meldet zum Beispiel "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" in der Konsole). Dies geschieht, weil das Skript vom `<p>`-Element abhängt, um zu arbeiten, aber zum Zeitpunkt, an dem das Skript geparst wird, existiert das `<p>`-Element nicht auf der Seite. Es wurde noch nicht gerendert.

Sie können das oben genannte Problem beheben, indem Sie das `<script>`-Element nach dem `<p>`-Element platzieren (zum Beispiel am Ende des Dokuments), oder indem Sie den Code innerhalb eines geeigneten Event-Handlers ausführen (zum Beispiel es bei [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) auszuführen, das ausgelöst wird, wenn das DOM vollständig geparst wurde).

Dies löst jedoch nicht das Problem, auf das Laden des Skripts zu warten. Eine bessere Leistung kann erreicht werden, indem Sie das `async`-Attribut dem `<script>`-Element hinzufügen:

```html
<script async src="index.js"></script>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsen abgerufen wird, sodass es zur gleichen Zeit bereit ist und das Rendering nicht blockiert, wodurch die Leistung verbessert wird.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen von `DOMContentLoaded`, ausgeführt wird. Dies hat einen ähnlichen Effekt wie `async`.

Ein weiterer Tipp zur Handhabung des JavaScript-Ladens ist es, Ihr Skript in Codemodule aufzuteilen und jeden Teil bei Bedarf zu laden, anstatt Ihren gesamten Code in ein riesiges Skript zu packen und es alles am Anfang zu laden. Dies geschieht mithilfe von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules). Lesen Sie den verlinkten Artikel für eine detaillierte Anleitung.

### Vorladen von Inhalten mit rel="preload"

Das Abrufen anderer Ressourcen (wie Bilder, Videos oder Schriftdateien), die von Ihrem HTML, CSS und JavaScript verknüpft sind, kann ebenfalls Leistungsprobleme verursachen, die das Ausführen Ihres Codes blockieren und das Erlebnis verlangsamen. Eine Möglichkeit, solche Probleme zu mindern, besteht darin, `rel="preload"` zu verwenden, um {{htmlelement("link")}}-Elemente in Preloader zu verwandeln. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Beim Auftreffen auf einen Link mit `rel="preload"` lädt der Browser die referenzierte Ressource so schnell wie möglich ab und macht sie im Browser-Cache verfügbar, sodass sie bereit ist, verwendet zu werden, sobald sie im nachfolgenden Code referenziert wird. Es ist nützlich, priorisierte Ressourcen vorzuladen, denen der Benutzer früh auf einer Seite begegnet, um das Erlebnis so reibungslos wie möglich zu gestalten.

Siehe die folgenden Artikel für detaillierte Informationen zur Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` verwenden, um CSS- und JavaScript-Dateien vorzupuffern.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Werte, die auch dazu bestimmt sind, verschiedene Aspekte des Seitenladens zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload` und `prefetch`. Gehen Sie zur verlinkten Seite und finden Sie heraus, was sie tun.

## Siehe auch

- [Netzwerkanfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
