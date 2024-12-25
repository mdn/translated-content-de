---
title: HTML-Performance-Optimierung
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}} {{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML ist von Natur aus schnell und zugänglich. Es ist unsere Aufgabe als Entwickler, sicherzustellen, dass wir diese beiden Eigenschaften bewahren, wenn wir HTML-Code erstellen oder bearbeiten. Komplikationen können auftreten, wenn zum Beispiel die Dateigröße eines eingebetteten {{htmlelement("video")}} zu groß ist oder wenn das Parsen von JavaScript das Rendern kritischer Seitenelemente blockiert. Dieser Artikel führt Sie durch die wichtigsten HTML-Performance-Funktionen, die die Qualität Ihrer Webseite drastisch verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, welchen Einfluss HTML auf die Website-Performance
        hat und wie Sie Ihr HTML optimieren, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie Ihr HTML optimieren, lautet: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die fast jedem Webprojekt zugutekommen, während einige nur in bestimmten Situationen erforderlich sind. Der Versuch, alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihres Projekts messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es mehrere Möglichkeiten, die Leistung zu messen, einige davon beinhalten anspruchsvolle [Leistungs-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um zu beginnen, besteht jedoch darin, zu lernen, wie man Werkzeuge wie die eingebauten Browser-Tools für [Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) verwendet, um die Teile der Seite zu untersuchen, die lange zum Laden brauchen und optimiert werden müssen.

## Wichtige HTML-Performance-Probleme

HTML ist in Bezug auf die Leistung einfach – es besteht hauptsächlich aus Text, der klein ist und daher schnell heruntergeladen und gerendert wird. Die Hauptprobleme, die die Leistung einer Webseite beeinträchtigen können, schließen ein:

- Größe von Bild- und Videodateien: Es ist wichtig zu überlegen, wie der Inhalt von ersetzten Elementen wie {{htmlelement("img")}} und {{htmlelement("video")}} behandelt wird. Bild- und Videodateien sind groß und können das Gewicht der Seite erheblich erhöhen. Daher ist es wichtig, die Anzahl der Bytes zu minimieren, die auf das Gerät des Benutzers heruntergeladen werden (zum Beispiel kleinere Bilder für Mobilgeräte bereitstellen). Sie sollten auch die wahrgenommene Leistung verbessern, indem Sie Bilder und Videos auf einer Seite nur dann laden, wenn sie benötigt werden.
- Lieferung eingebetteter Inhalte: Dies sind in der Regel die Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Das Laden von Inhalten in `<iframe>`s kann die Leistung erheblich beeinträchtigen, daher sollte es sorgfältig überlegt werden.
- Reihenfolge des Ressourcenladens: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte das HTML zuerst und in der Reihenfolge, in der es auf der Seite erscheint, geladen werden. Dann können Sie verschiedene Funktionen nutzen, um die Reihenfolge des Ressourcenladens für eine bessere Leistung zu beeinflussen. Zum Beispiel können Sie kritische CSS und Schriftarten frühzeitig vorladen, aber nicht kritisches JavaScript erst später.

> [!NOTE]
> Es gibt ein Argument für die Vereinfachung Ihrer HTML-Struktur und das [Minifizieren](<https://en.wikipedia.org/wiki/Minification_(programming)>) Ihres Quellcodes, sodass das Rendering und Downloads schneller sind. HTML-Dateigröße ist jedoch im Vergleich zu Bildern und Videos unerheblich, und das Rendering von Browsern ist heutzutage sehr schnell. Wenn Ihre HTML-Quelle so groß und komplex ist, dass sie Leistungsverluste beim Rendern und Herunterladen verursacht, haben Sie wahrscheinlich größere Probleme und sollten versuchen, sie zu vereinfachen und den Inhalt aufzuteilen.

## Responsives Handling von ersetzten Elementen

[Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) hat die Art und Weise revolutioniert, wie der Inhalt von Webseiten über verschiedene Geräte hinweg behandelt wird. Ein wesentlicher Vorteil, den es bietet, ist das dynamische Wechseln von Layouts, die für verschiedene Bildschirmgrößen optimiert sind, zum Beispiel ein Breitbildlayout versus ein schmales (mobiles) Bildschirmlayout. Es kann auch das dynamische Wechseln von Inhalten basierend auf anderen Geräteeigenschaften ermöglichen, wie Auflösung oder Vorliebe für helles oder dunkles Farbschema.

Die sogenannte "mobile-first"-Technik kann sicherstellen, dass das Standardlayout für Geräte mit kleinen Bildschirmen geeignet ist, sodass Mobiltelefone nur Bilder herunterladen müssen, die für ihre Bildschirme geeignet sind und nicht den Leistungseinbruch größerer Desktop-Bilder erfahren. Da dies jedoch in CSS über [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) gesteuert wird, kann es nur die Leistung von in CSS geladenen Bildern positiv beeinflussen.

In den folgenden Abschnitten fassen wir zusammen, wie Sie responsive ersetzte Elemente implementieren. Sie finden weitaus detailliertere Informationen zu diesen Implementierungen in den [Leitfaden zu HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) und [Responsive Bilder](/de/docs/Web/HTML/Responsive_images).

### Bereitstellung verschiedener Bildauflösungen über srcset

Um je nach Auflösung und Ansichtsfenstergröße des Geräts Bildvarianten in verschiedenen Auflösungen bereitzustellen, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) verwenden.

Dieses Beispiel liefert unterschiedlich große Bilder für verschiedene Bildschirmbreiten:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` liefert die intrinsische Größe der Quellbilder zusammen mit ihren Dateinamen, und `sizes` liefert Media Queries zusammen mit Bildslot-Breiten, die in jedem Fall gefüllt werden müssen. Der Browser entscheidet dann, welche Bilder es sinnvoll ist, für jeden Slot zu laden. Als Beispiel gilt: Wenn die Bildschirmbreite `600px` oder weniger beträgt, ist `max-width: 600px` wahr und der zu füllende Slot beträgt `480px`. In diesem Fall wird der Browser wahrscheinlich die Datei 480w.jpg (480px breites Bild) laden. Dies trägt zur Leistung bei, da Browser keine größeren Bilder laden, als sie benötigen.

Dieses Beispiel liefert verschiedene Auflösungen von Bildern für unterschiedliche Bildschirmauflösungen:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x`, etc. sind relative Auflösungsindikatoren. Wenn das Bild mit `width: 320px` in CSS gestylt ist, lädt der Browser `320w.jpg`, wenn das Gerät eine niedrige Auflösung hat (ein Gerätepixel pro CSS-Pixel) oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei Gerätepixel pro CSS-Pixel oder mehr).

In beiden Fällen liefert das `src`-Attribut ein Standardbild, das geladen wird, wenn der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung verschiedener Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf und ermöglicht es Ihnen, mehrere unterschiedliche Quellen für verschiedene Situationen bereitzustellen. Zum Beispiel, wenn das Layout breit ist, möchten Sie wahrscheinlich ein breites Bild und wenn es schmal ist, möchten Sie ein schmaleres Bild, das in diesem Kontext noch funktioniert.

Natürlich funktioniert dies auch, um auf mobilen Geräten einen kleineren Download von Informationen anzubieten, was zur Leistung beiträgt.

Ein Beispiel ist wie folgt:

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die {{htmlelement("source")}}-Elemente enthalten Media Queries in `media`-Attributen. Wenn eine Media Query zu einem wahren Wert führt, wird das Bild geladen, das in seinem `srcset`-Attribut des `<source>`-Elements referenziert wird. Im obigen Beispiel wird, wenn die Ansichtsfensterbreite `799px` oder weniger beträgt, das Bild `narrow-banner-480w.jpg` geladen. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild bereitstellt, das im Fall von Browsern geladen wird, die `<picture>` nicht unterstützen.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. Wie im vorherigen Abschnitt gezeigt, können Sie für jede Bildquelle unterschiedliche Auflösungen bereitstellen.

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

- Im obigen Beispiel verwenden wir `src` anstelle von `srcset`; Sie können keine unterschiedlichen Auflösungen für Videos über `srcset` angeben.
- Stattdessen geben Sie unterschiedliche Auflösungen in den verschiedenen `<source>`-Elementen an.
- Beachten Sie, wie wir auch unterschiedliche Videoformate in verschiedenen `<source>`-Elementen angeben, wobei jedes Format über seinen MIME-Typ im `type`-Attribut identifiziert wird. Browser laden das erste, das sie unterstützen, bei dem der Mediabedingungstest wahr ist.

### Lazy Loading von Bildern

Eine sehr nützliche Technik zur Leistungsverbesserung ist **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort zu laden, wenn das HTML gerendert wird, sondern erst dann, wenn sie dem Benutzer im Ansichtsfenster tatsächlich sichtbar (oder unmittelbar sichtbar) sind. Dies bedeutet, dass der sofort sichtbare/nutzbare Inhalt schneller einsatzbereit ist, während nachfolgender Inhalt erst dann seine Bilder gerendert bekommt, wenn er erreicht wird, und der Browser keine Bandbreite für Bilder verschwendet, die der Benutzer niemals sehen wird.

Lazy Loading wurde historisch mit JavaScript gehandhabt, aber Browser verfügen jetzt über ein `loading`-Attribut, das den Browser anweisen kann, Bilder automatisch verzögert zu laden:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Siehe [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev für detaillierte Informationen.

Sie können auch Videoinhalte verzögert laden, indem Sie das `preload`-Attribut verwenden. Zum Beispiel:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Ein Wert von `none` für `preload` weist den Browser an, keine Videodaten im Voraus zu laden, bevor der Benutzer entscheidet, es abzuspielen, was offensichtlich für die Leistung gut ist. Stattdessen wird nur das Bild angezeigt, das durch das `poster`-Attribut angezeigt wird. Verschiedene Browser haben unterschiedliches Standardladeverhalten für Videos, es ist also gut, explizit zu sein.

Siehe [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) auf web.dev für detaillierte Informationen.

## Umgang mit eingebetteten Inhalten

Es ist sehr häufig, dass Inhalte von anderen Quellen auf Webseiten eingebettet werden. Dies geschieht meistens, um Werbung auf einer Seite anzuzeigen, um Einnahmen zu erzielen — die Anzeigen werden normalerweise von einem Drittunternehmen erstellt und auf Ihre Seite eingebettet. Weitere Anwendungen könnten umfassen:

- Anzeigen von gemeinsam genutzten Inhalten, die ein Benutzer möglicherweise auf mehreren Seiten benötigt, wie ein Warenkorb oder Profilinformationen.
- Anzeigen von Inhalten Dritter, die in Bezug zur Hauptseite der Organisation stehen, wie ein Feed von Social-Media-Beiträgen.

Das Einbetten von Inhalten erfolgt meist mithilfe von {{htmlelement("iframe")}}-Elementen, obwohl es auch andere, weniger häufig verwendete Einbettungselemente gibt, wie {{htmlelement("object")}} und {{htmlelement("embed")}}. In diesem Abschnitt konzentrieren wir uns auf `<iframe>`-Elemente.

Der wichtigste und zentrale Ratschlag für die Verwendung von `<iframe>`-Elementen ist: "Verwenden Sie eingebettete `<iframe>`s nur dann, wenn Sie unbedingt müssen". Wenn Sie ein Seite mit verschiedenen Informationsfenstern erstellen, könnte es organisatorisch sinnvoll erscheinen, diese in separate Seiten zu unterteilen und in unterschiedliche `<iframe>`s zu laden. Dies hat jedoch eine Reihe von Problemen in Bezug auf Leistung und anderes:

- Das Laden des Inhalts in ein `<iframe>` ist viel teurer als das Laden des Inhalts als Teil derselben direkten Seite – es erfordert nicht nur zusätzliche HTTP-Anfragen zum Laden des Inhalts, sondern der Browser muss auch eine separate Seiteninstanz für jeden erstellen. Jede von ihnen ist effektiv eine separate Webseiteninstanz, die in die übergeordnete Webseite eingebettet ist.
- Aufbauend auf dem vorherigen Punkt, müssen Sie auch jegliche CSS-Stilgestaltung oder JavaScript-Manipulation für jedes unterschiedliche `<iframe>` separat behandeln (es sei denn, die eingebetteten Seiten stammen vom selben Ursprung), was viel komplexer wird. Sie können eingebettete Inhalte nicht mit CSS und JavaScript ansprechen, das auf die übergeordnete Seite angewendet wird, oder umgekehrt. Dies ist eine sinnvolle Sicherheitsmaßnahme, die grundlegend für das Web ist. Stellen Sie sich all die Probleme vor, die entstehen könnten, wenn eingebettete Dritteinhalte willkürlich Skripte gegen jede Seite ausführen könnten, in die sie eingebettet sind!
- Jedes `<iframe>` müsste außerdem jegliche geteilten Daten und Mediendateien separat laden – Sie können keine zwischengespeicherten Ressourcen über unterschiedliche Seiteneinbettungen hinweg teilen (wiederum, es sei denn, die eingebetteten Seiten sind vom selben Ursprung). Dies kann dazu führen, dass eine Seite weit mehr Bandbreite nutzt, als Sie vielleicht erwarten.

Es ist ratsam, den Inhalt in eine einzige Seite zu packen. Wenn Sie neuen Inhalt dynamisch laden möchten, während sich die Seite ändert, ist es immer noch besser für die Leistung, diesen in dieselbe Seite zu laden, anstatt ihn in ein `<iframe>` zu setzen. Sie könnten die neuen Daten beispielsweise mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode abholen und dann mittels DOM-Scripting in die Seite einfügen. Siehe [Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests) und [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) für mehr Informationen.

> [!NOTE]
> Wenn Sie die Kontrolle über den Inhalt haben und er relativ einfach ist, können Sie in Betracht ziehen, base-64 kodierte Inhalte im `src`-Attribut zu verwenden, um das `<iframe>` zu füllen, oder sogar rohes HTML in das `srcdoc`-Attribut einzufügen (siehe [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für mehr Informationen).

Wenn Sie `<iframe>`-Elemente verwenden müssen, dann verwenden Sie sie sparsam.

### Lazy Loading von Iframes

Auf die gleiche Weise wie bei `<img>`-Elementen können Sie das `loading`-Attribut verwenden, um den Browser anzuweisen, `<iframe>`-Inhalte zu verzögert zu laden, die anfänglich außerhalb des Bildschirms liegen, und so die Leistung zu verbessern:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Siehe [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) für mehr Informationen.

## Ordnung der Ressourcenlade-Reihenfolge

Die Reihenfolge des Ressourcenladens ist wichtig, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Das HTML wird im Allgemeinen zuerst analysiert, in der Reihenfolge, in der es auf der Seite erscheint.
2. Gefundene CSS-Dateien werden analysiert, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verknüpfte Ressourcen wie Bilder und Webfonts heruntergeladen zu werden.
3. Gefundenes JavaScript wird analysiert, ausgewertet und auf der Seite ausgeführt. Standardmäßig blockiert dies das Parsen des HTMLs, das nach den {{htmlelement("script")}}-Elementen erscheint, an denen das JavaScript auftritt.
4. Etwas später arbeitet der Browser aus, wie jedes HTML-Element gestylt werden sollte, gegeben das darauf angewendete CSS.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm gezeichnet.

> [!NOTE]
> Dies ist ein sehr vereinfachtes Konto dessen, was passiert, gibt Ihnen aber eine Vorstellung.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, die Art und Weise, wie das Ressourcenladen geschieht, zu ändern, um die Leistung zu verbessern. Wir werden nun einige dieser Funktionen erkunden.

### Umgang mit JavaScript-Laden

Das Parsen und Ausführen von JavaScript blockiert das Parsen von nachfolgendem DOM-Inhalt. Dies erhöht die Zeit, bis dieser Inhalt gerendert und von den Benutzern der Seite genutzt werden kann. Ein kleines Skript wird keinen großen Unterschied machen, aber bedenken Sie, dass moderne Webanwendungen tendenziell sehr JavaScript-lastig sind.

Ein weiterer Nebeneffekt des standardmäßigen JavaScript-Parsings ist, dass, wenn das gerenderte Skript auf DOM-Inhalt angewiesen ist, der später auf der Seite erscheint, Fehler auftreten.

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

Wir können dieses Skript auf die Seite anwenden, indem wir es in einem `<script>`-Element wie folgt referenzieren:

```html
<script src="index.js"></script>
```

Wenn wir dieses `<script>`-Element vor dem `<p>`-Element in der Quellreihenfolge platzieren (zum Beispiel im {{htmlelement("head")}}-Element), wird die Seite einen Fehler auswerfen (Chrome meldet beispielsweise "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')"). Dies tritt auf, weil das Skript auf das `<p>`-Element angewiesen ist, um zu funktionieren, aber zu dem Zeitpunkt, an dem das Skript analysiert wird, existiert das `<p>`-Element noch nicht auf der Seite. Es wurde noch nicht gerendert.

Sie können das obige Problem beheben, indem Sie das `<script>`-Element nach dem `<p>`-Element platzieren (zum Beispiel am Ende des Dokumentkörpers) oder indem Sie den Code innerhalb einer geeigneten Ereignisbehandlung ausführen (zum Beispiel führen Sie es auf dem [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), das ausgelöst wird, wenn das DOM vollständig analysiert wurde).

Dies löst jedoch nicht das Problem, auf das Skript zu warten, bis es vollständig geladen ist. Eine bessere Leistung kann erreicht werden, indem Sie das `async`-Attribut dem `<script>`-Element hinzufügen:

```html
<script async src="index.js"></script>
```

Dies verursacht, dass das Skript parallel mit dem DOM-Parsing geholt wird, sodass es gleichzeitig bereit ist und das Rendering nicht blockiert, was die Leistung verbessert.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen von `DOMContentLoaded` ausführt. Dies hat einen ähnlichen Effekt wie `async`.

Ein weiterer Tipp zum Umgang mit JavaScript-Laden ist, Ihr Skript in Codemodule aufzuteilen und jeden Teil separat zu laden, wenn er benötigt wird, anstatt Ihren gesamten Code in ein riesiges Skript zu packen und alles zu Beginn zu laden. Dies wird mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) durchgeführt. Lesen Sie den verlinkten Artikel für eine detaillierte Anleitung.

### Vorladen von Inhalten mit rel="preload"

Das Abrufen anderer Ressourcen (wie Bilder, Videos oder Schriftarten), auf die Sie aus Ihrem HTML, CSS und JavaScript verlinken, kann ebenfalls zu Leistungsproblemen führen, Ihren Code blockieren und die Erfahrung verlangsamen. Eine Möglichkeit, solche Probleme zu mildern, ist die Verwendung von `rel="preload"`, um {{htmlelement("link")}}-Elemente in Vorlader zu verwandeln. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Beim Auftreten eines `rel="preload"`-Links wird der Browser die referenzierte Ressource so bald wie möglich laden und im Browsercache bereitstellen, sodass sie bereit zur Nutzung früher verfügbar ist, wenn sie in anschließendem Code referenziert wird. Es ist nützlich, hochpriorisierte Ressourcen vorzuladen, denen der Benutzer frühzeitig auf einer Seite begegnen wird, damit die Erfahrung so reibungslos wie möglich ist.

Siehe die folgenden Artikel für detaillierte Informationen über die Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` auch verwenden, um CSS- und JavaScript-Dateien vorzuladen.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Attributes/rel)-Werte, deren Entwurf darauf abzielt, verschiedene Aspekte des Seitenladens zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload`, `prefetch` und `prerender`. Gehen Sie auf die verlinkte Seite und finden Sie heraus, was sie tun.

## Siehe auch

- [Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
