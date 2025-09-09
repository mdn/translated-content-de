---
title: HTML-Leistungsoptimierung
short-title: Performantes HTML
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: 4a1d696e78d9aa0a3ca571cbc0aab9ba90258235
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML ist standardmäßig schnell und zugänglich. Es ist unsere Aufgabe als Entwickler, sicherzustellen, dass wir diese beiden Eigenschaften beim Erstellen oder Bearbeiten von HTML-Code bewahren. Komplikationen können auftreten, wenn beispielsweise die Dateigröße einer {{htmlelement("video")}}-Einbettung zu groß ist oder das Parsen von JavaScript das Rendern kritischer Seitenelemente blockiert. Dieser Artikel führt Sie durch die wichtigsten HTML-Leistungsmerkmale, die die Qualität Ihrer Webseite drastisch verbessern können.

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
        Erlernen der Auswirkungen von HTML auf die Webseitenleistung
        und wie Sie Ihr HTML optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihr HTML zu optimieren, ist: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die nahezu jedem Webprojekt zugutekommen, während einige nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie dieser Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige davon mit ausgefeilten [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Tools wie eingebaute Browsertools für [Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Leistung](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) verwendet, um die Teile der Seite zu untersuchen, die lange laden und optimiert werden müssen.

## Schlüsselprobleme der HTML-Leistung

HTML ist in Bezug auf Leistung einfach – es ist größtenteils Text, der klein ist und daher meist schnell heruntergeladen und gerendert werden kann. Die Hauptprobleme, die die Leistung einer Webseite beeinflussen können, umfassen:

- Größe der Bild- und Videodateien: Es ist wichtig, zu berücksichtigen, wie der Inhalt von Ersetzungselementen wie {{htmlelement("img")}} und {{htmlelement("video")}} behandelt wird. Bild- und Videodateien sind groß und können erheblich zum Gewicht der Seite beitragen. Daher ist es wichtig, die Anzahl der Bytes zu minimieren, die auf einem Benutzergerät heruntergeladen werden (zum Beispiel kleinere Bilder für Mobilgeräte bereitstellen). Sie müssen auch die wahrgenommene Leistung verbessern, indem Bilder und Videos auf einer Seite nur bei Bedarf geladen werden.
- Bereitstellung von eingebetteten Inhalten: Dies betrifft normalerweise die in {{htmlelement("iframe")}}-Elementen eingebetteten Inhalte. Das Laden von Inhalten in `<iframe>`s kann die Leistung erheblich beeinflussen und sollte daher sorgfältig bedacht werden.
- Reihenfolge des Ressourcenladens: Um die wahrgenommene und tatsächliche Leistung zu maximieren, sollte das HTML zuerst in der Reihenfolge geladen werden, in der es auf der Seite erscheint. Sie können dann verschiedene Funktionen verwenden, um die Reihenfolge des Ressourcenladens für eine bessere Leistung zu beeinflussen. Beispielsweise können Sie kritisches CSS und Schriften frühzeitig vorladen, nicht-kritisches JavaScript jedoch später laden lassen.

> [!NOTE]
> Es gibt ein Argument dafür, Ihre HTML-Struktur zu vereinfachen und Ihren Quellcode zu [minifizieren](<https://en.wikipedia.org/wiki/Minification_(programming)>), sodass Rendering und Downloads schneller sind. Allerdings ist die Größe der HTML-Datei im Vergleich zu Bildern und Videos vernachlässigbar, und das Browser-Rendering ist heutzutage sehr schnell. Wenn Ihre HTML-Quelle so groß und komplex ist, dass dadurch Rendering- und Download-Leistungseinbußen entstehen, haben Sie wahrscheinlich größere Probleme und sollten sie vereinfachen und den Inhalt aufteilen.

## Reaktionsfähige Handhabung von Ersetzungselementen

[Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) hat die Handhabung von Webinhalten über verschiedene Geräte hinweg revolutioniert. Ein Hauptvorteil, den es bietet, ist das dynamische Umschalten von Layouts, die für verschiedene Bildschirmgrößen optimiert sind, beispielsweise ein Layout für breite Bildschirme im Vergleich zu einem Layout für schmale (mobile) Bildschirme. Es kann auch das dynamische Umschalten von Inhalten basierend auf anderen Geräteeigenschaften wie Auflösung oder Vorliebe für helles oder dunkles Farbschema handhaben.

Die sogenannte "Mobile First"-Technik kann sicherstellen, dass das Standardlayout für Geräte mit kleinem Bildschirm gedacht ist, sodass Mobiltelefone nur für ihre Bildschirme geeignete Bilder herunterladen und nicht den Leistungseinbruch durch das Herunterladen größerer Desktop-Bilder erleiden müssen. Da dies jedoch mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) in Ihrem CSS gesteuert wird, kann es nur die Leistung von in CSS geladenen Bildern positiv beeinflussen.

In den folgenden Abschnitten fassen wir zusammen, wie man responsive Ersetzungselemente implementiert. Detailliertere Informationen zu diesen Implementierungen finden Sie in den [HTML-Video- und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) und [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) Leitfäden.

### Bereitstellung unterschiedlicher Bildauflösungen über srcset

Um je nach Auflösung des Geräts und Größe des Ansichtsfensters verschiedene Auflösungen derselben Bilddatei bereitzustellen, können Sie die Attribute [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) verwenden.

Dieses Beispiel bietet für verschiedene Bildschirmbreiten unterschiedliche Bildgrößen:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` gibt die intrinsische Größe der Quellbilder zusammen mit ihren Dateinamen an, und `sizes` liefert Media Queries zusammen mit den Bildgrößen, die in jedem Fall ausgefüllt werden müssen. Der Browser entscheidet dann, welche Bilder für jeden Slot geladen werden sollen. Wenn die Bildschirmbreite beispielsweise `600px` oder weniger beträgt, ist `width <= 600px` wahr und der Slot zum Ausfüllen beträgt `480px`. In diesem Fall wird der Browser wahrscheinlich die Datei 480w.jpg (480px breites Bild) laden. Dies hilft bei der Leistung, da Browser keine größeren Bilder laden, als notwendig sind.

Dieses Beispiel bietet für verschiedene Bildschirmauflösungen unterschiedliche Auflösungen an:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x` usw. sind relative Auflösungsindikatoren. Wenn das Bild beispielsweise mit `width: 320px` in CSS auf 320px Breite gestylt ist, lädt der Browser `320w.jpg`, wenn das Gerät eine niedrige Auflösung (ein {{Glossary("device_pixel", "Gerätepixel")}} pro CSS-Pixel) hat, oder `640x.jpg`, wenn das Gerät eine hohe Auflösung hat (zwei Gerätepixel pro CSS-Pixel oder mehr).

In beiden Fällen bietet das `src`-Attribut ein Standardbild zum Laden, wenn der Browser `src`/`srcset` nicht unterstützt.

### Bereitstellung unterschiedlicher Quellen für Bilder und Videos

Das {{htmlelement("picture")}}-Element baut auf dem traditionellen {{htmlelement("img")}}-Element auf und ermöglicht Ihnen, verschiedene Quellen für verschiedene Situationen bereitzustellen. Wenn das Layout beispielsweise breit ist, möchten Sie wahrscheinlich ein breites Bild, und wenn es schmal ist, ein schmaleres Bild, das in diesem Kontext immer noch funktioniert.

Natürlich funktioniert dies auch, um auf mobilen Geräten einen kleineren Download von Informationen bereitzustellen, was der Leistung zugutekommt.

Ein Beispiel ist wie folgt:

```html
<picture>
  <source media="(width < 800px)" srcset="narrow-banner-480w.jpg" />
  <source media="(width >= 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Die {{htmlelement("source")}}-Elemente enthalten Media Queries in ihren `media`-Attributen. Wenn eine Media Query wahr ist, wird das Bild geladen, das in seinem `<source>`-Element `srcset` angegeben ist. Im obigen Beispiel wird das Bild `narrow-banner-480w.jpg` geladen, wenn die Ansichtsfensterbreite weniger als `800px` beträgt. Beachten Sie auch, wie das `<picture>`-Element ein `<img>`-Element enthält, das ein Standardbild bietet, das im Fall von Browsern geladen wird, die `<picture>` nicht unterstützen.

Beachten Sie die Verwendung des `srcset`-Attributs in diesem Beispiel. Wie im vorherigen Abschnitt gezeigt, können Sie verschiedene Auflösungen für jede Bildquelle bereitstellen.

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

Es gibt jedoch einige wesentliche Unterschiede zwischen der Bereitstellung von Quellen für Bilder und Videos:

- Im obigen Beispiel verwenden wir `src` anstelle von `srcset`; Sie können keine unterschiedlichen Auflösungen für Videos über `srcset` angeben.
- Stattdessen geben Sie unterschiedliche Auflösungen in den verschiedenen `<source>`-Elementen an.
- Beachten Sie, dass wir auch unterschiedliche Videoformate in den verschiedenen `<source>`-Elementen angeben, wobei jedes Format über seinen MIME-Typ im `type`-Attribut identifiziert wird. Die Browser werden das erste laden, das sie unterstützen, wo der Media Query-Test wahr ist.

### Lazy Loading von Bildern

Eine sehr nützliche Technik zur Leistungsverbesserung ist das **Lazy Loading**. Dies bezieht sich auf die Praxis, nicht alle Bilder sofort zu laden, wenn HTML gerendert wird, sondern sie nur dann zu laden, wenn sie für den Benutzer im Ansichtsfenster tatsächlich sichtbar (oder bald sichtbar) sind. Dies bedeutet, dass der sofort sichtbare/nutzbare Inhalt schneller bereit ist, während nachfolgender Inhalt seine Bilder nur dann gerendert hat, wenn zu ihm gescrollt wird, und der Browser keine Bandbreite mit dem Laden von Bildern verschwendet, die der Benutzer nie sehen wird.

Lazy Loading wurde historisch mithilfe von JavaScript gehandhabt, aber Browser verfügen nun über ein `loading`-Attribut, das den Browser anweisen kann, Bilder automatisch lazy zu laden:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

Siehe [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) auf web.dev für detaillierte Informationen.

Sie können auch Videoinhalte durch Verwendung des `preload`-Attributs lazy laden. Zum Beispiel:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Indem `preload` den Wert `none` erhält, wird dem Browser mitgeteilt, keine Videodaten vorzupuffern, bevor der Benutzer sich entscheidet, es abzuspielen, was offensichtlich gut für die Leistung ist. Stattdessen wird nur das Bild angezeigt, das durch das `poster`-Attribut angegeben ist. Verschiedene Browser haben unterschiedliches Standardverhalten beim Laden von Videos, daher ist es gut, explizit zu sein.

Siehe [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) auf web.dev für detaillierte Informationen.

## Umgang mit eingebetteten Inhalten

Es ist sehr üblich, Inhalte von anderen Quellen in Webseiten einzubetten. Dies geschieht am häufigsten beim Anzeigen von Werbung auf einer Website, um Einnahmen zu generieren – die Anzeigen werden in der Regel von einem Drittanbieterunternehmen generiert und auf Ihrer Seite eingebettet. Weitere Verwendungszwecke könnten folgendermaßen sein:

- Anzeigen von gemeinsam genutzten Inhalten, die ein Benutzer möglicherweise auf mehreren Seiten benötigt, wie z.B. ein Warenkorb oder Profilinformationen.
- Anzeigen von Drittanbieterinhalten, die mit der Hauptseite der Organisation in Verbindung stehen, wie z.B. ein Feed sozialer Medienbeiträge.

Inhalte werden meist über {{htmlelement("iframe")}}-Elemente eingebettet, obwohl es auch andere, weniger häufig verwendete Einbettungselemente gibt, wie {{htmlelement("object")}} und {{htmlelement("embed")}}. In diesem Abschnitt konzentrieren wir uns auf `<iframe>`s.

Der wichtigste und grundlegendste Rat für die Verwendung von `<iframe>`s ist: "Verwenden Sie keine eingebetteten `<iframe>`s, es sei denn, es ist absolut notwendig". Wenn Sie eine Seite mit mehreren unterschiedlichen Informationsblöcken erstellen, könnte es sinnvoll erscheinen, diese in separate Seiten zu zerlegen und in verschiedene `<iframe>`s zu laden. Das hat jedoch eine Reihe von Problemen in Bezug auf Leistung und andere Aspekte:

- Das Laden der Inhalte in ein `<iframe>` ist viel aufwändiger, als die Inhalte als Teil derselben direkten Seite zu laden – es erfordert nicht nur zusätzliche HTTP-Anfragen, um die Inhalte zu laden, sondern der Browser muss auch für jede ein eigenes Seitenobjekt erstellen. Jede ist effektiv eine separate Webseite, die in die übergeordnete eingebettete Seite eingebettet ist.
- Zudem müssen alle CSS-Stilgebungen oder JavaScript-Manipulationen für jedes verschiedene `<iframe>` separat behandelt werden (es sei denn, die eingebetteten Seiten stammen aus derselben Quelle), was viel komplexer wird. Sie können eingebettete Inhalte nicht mit CSS und JavaScript ansprechen, die auf die übergeordnete Seite angewendet werden, oder umgekehrt. Dies ist eine sinnvolle Sicherheitsmaßnahme, die im Web grundlegend ist. Stellen Sie sich alle Probleme vor, auf die Sie stoßen könnten, wenn eingebettete Inhalte von Drittanbietern willkürlich Skripte gegen Seiten ausführen könnten, in die sie eingebettet sind!
- Jedes `<iframe>` müsste auch alle gemeinsam genutzten Daten und Mediendateien separat laden – Sie können keine zwischengespeicherten Assets zwischen verschiedenen Seiteneinbettungen teilen (es sei denn, die eingebetteten Seiten stammen aus derselben Quelle). Dies kann dazu führen, dass eine Seite viel mehr Bandbreite nutzt, als Sie vielleicht erwarten.

Es wird empfohlen, den Inhalt auf eine einzelne Seite zu stellen. Wenn Sie neue Inhalte dynamisch laden möchten, während sich die Seite ändert, ist es immer noch besser für die Leistung, sie in dieselbe Seite zu laden, anstatt sie in ein `<iframe>` zu packen. Sie könnten die neuen Daten zum Beispiel mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode abrufen und dann mit etwas DOM-Scripting in die Seite injizieren. Weitere Informationen finden Sie unter [Netzwerkanfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests) und [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting).

> [!NOTE]
> Wenn Sie den Inhalt kontrollieren und er relativ einfach ist, könnten Sie erwägen, base-64-codierte Inhalte im `src`-Attribut zu verwenden, um das `<iframe>` zu füllen, oder sogar Roh-HTML in das `srcdoc`-Attribut einzufügen (siehe [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) für weitere Informationen).

Wenn Sie `<iframe>`s verwenden müssen, dann verwenden Sie sie sparsam.

### Lazy Loading von iframes

Genau wie bei `<img>`-Elementen können Sie auch das `loading`-Attribut verwenden, um den Browser anzuweisen, `<iframe>`-Inhalte, die anfänglich nicht sichtbar sind, lazy zu laden und so die Leistung zu verbessern:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

Siehe [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) für weitere Informationen.

## Umgang mit der Ladenreihenfolge von Ressourcen

Das Ordnen des Laden von Ressourcen ist entscheidend, um die wahrgenommene und tatsächliche Leistung zu maximieren. Wenn eine Webseite geladen wird:

1. Wird das HTML in der Regel zuerst geparst, in der Reihenfolge, in der es auf der Seite erscheint.
2. Ein gefundenes CSS wird geparst, um die Stile zu verstehen, die auf die Seite angewendet werden müssen. Während dieser Zeit beginnen verlinkte Assets wie Bilder und Webschriften geladen zu werden.
3. Gefundenes JavaScript wird geparst, ausgewertet und auf die Seite angewendet. Standardmäßig blockiert dies das Parsen des HTML, das nach den {{htmlelement("script")}}-Elementen erscheint, an denen das JavaScript gefunden wird.
4. Etwas später ermittelt der Browser, wie jedes HTML-Element gestylt werden soll, basierend auf dem angewendeten CSS.
5. Das gestylte Ergebnis wird dann auf dem Bildschirm angezeigt.

> [!NOTE]
> Dies ist eine stark vereinfachte Darstellung dessen, was passiert, aber sie gibt Ihnen eine Vorstellung.

Verschiedene HTML-Funktionen ermöglichen es Ihnen, zu ändern, wie das Laden von Ressourcen geschieht, um die Leistung zu verbessern. Wir werden einige dieser Funktionen jetzt erkunden.

### Behandlung der JavaScript-Ladung

Das Parsen und Ausführen von JavaScript blockiert das Parsen von anschließendem DOM-Inhalt. Dies verlängert die Zeit, bis dieser Inhalt gerendert und von den Nutzern der Seite verwendet werden kann. Ein kleines Skript wird keinen großen Unterschied machen, aber moderne Webanwendungen sind in der Regel sehr JavaScript-intensiv.

Ein weiterer Nebeneffekt des standardmäßigen JavaScript-Parsingverhaltens ist, dass Sie Fehler erhalten, wenn das Skript, das gerendert wird, von DOM-Inhalten abhängt, die später auf der Seite erscheinen.

Stellen Sie sich beispielsweise einen einfachen Absatz auf einer Seite vor:

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

Wir können dieses Skript auf die Seite anwenden, indem wir darauf in einem `<script>`-Element wie diesem verweisen:

```html
<script src="index.js"></script>
```

Wenn wir dieses `<script>`-Element vor dem `<p>`-Element in der Quellreihenfolge platzieren (zum Beispiel im {{htmlelement("head")}}-Element), wird die Seite einen Fehler ausgeben (Chrome berichtet beispielsweise "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" in der Konsole). Dies geschieht, weil das Skript auf das `<p>`-Element angewiesen ist, um zu funktionieren, aber zum Zeitpunkt des Parsens des Skripts existiert das `<p>`-Element nicht auf der Seite. Es wurde noch nicht gerendert.

Sie können das obige Problem beheben, indem Sie das `<script>`-Element nach dem `<p>`-Element platzieren (zum Beispiel am Ende des Dokumentenkörpers), oder indem Sie den Code in einem geeigneten Ereignishandler ausführen (zum Beispiel es auf dem [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Event ausführen, das ausgelöst wird, wenn das DOM vollständig geparst wurde).

Allerdings löst das nicht das Problem des Wartens auf das Laden des Skripts. Eine bessere Leistung kann erzielt werden, indem dem `<script>`-Element das `async`-Attribut hinzugefügt wird:

```html
<script async src="index.js"></script>
```

Dies bewirkt, dass das Skript parallel zum DOM-Parsen abgerufen wird, sodass es gleichzeitig bereit ist und das Rendering nicht blockiert, wodurch die Leistung verbessert wird.

> [!NOTE]
> Es gibt ein weiteres Attribut, `defer`, das bewirkt, dass das Skript nach dem Parsen des Dokuments, aber vor dem Auslösen von `DOMContentLoaded`, ausgeführt wird. Dies hat eine ähnliche Wirkung wie `async`.

Ein weiterer Tipp zum Umgang mit der JavaScript-Ladung besteht darin, Ihr Skript in Code-Module zu unterteilen und jeden Teil bei Bedarf zu laden, anstatt Ihren gesamten Code in einem riesigen Skript zusammenzufassen und alles am Anfang zu laden. Dies erfolgt mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules). Lesen Sie den verlinkten Artikel für eine detaillierte Anleitung.

### Vorladen von Inhalten mit rel="preload"

Das Abrufen anderer Ressourcen (wie Bilder, Videos oder Schriftdateien), die von Ihrem HTML, CSS und JavaScript verlinkt sind, kann ebenfalls Leistungsprobleme verursachen, die die Ausführung Ihres Codes blockieren und die Erfahrung verlangsamen. Eine Möglichkeit, solche Probleme zu mindern, ist die Verwendung von `rel="preload"`, um {{htmlelement("link")}}-Elemente in Vorlader zu verwandeln. Zum Beispiel:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Wenn der Browser auf einen `rel="preload"`-Link stößt, wird die referenzierte Ressource so schnell wie möglich abgerufen und im Browser-Cache verfügbar gemacht, sodass sie früher zur Verwendung bereitsteht, wenn sie im nachfolgenden Code referenziert wird. Es ist nützlich, wichtige Ressourcen, auf die der Benutzer frühzeitig auf einer Seite trifft, vorzuhalten, damit die Erfahrung so reibungslos wie möglich ist.

Siehe die folgenden Artikel für detaillierte Informationen zur Verwendung von `rel="preload"`:

- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

> [!NOTE]
> Sie können `rel="preload"` verwenden, um auch CSS- und JavaScript-Dateien vorzuhalten.

> [!NOTE]
> Es gibt andere [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Werte, die ebenfalls dazu entwickelt wurden, verschiedene Aspekte des Seitenladens zu beschleunigen: `dns-prefetch`, `preconnect`, `modulepreload` und `prefetch`. Gehen Sie zur verlinkten Seite und finden Sie heraus, was sie tun.

## Siehe auch

- [Netzwerkanfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [DOM-Scripting-Einführung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
