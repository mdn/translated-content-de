---
title: CSS Leistungsverfeinerung
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Bei der Entwicklung einer Website sollten Sie berücksichtigen, wie der Browser mit dem CSS auf Ihrer Seite umgeht. Um mögliche Leistungsprobleme zu mindern, die durch CSS verursacht werden könnten, sollten Sie es optimieren. Beispielsweise sollten Sie CSS so optimieren, dass {{Glossary("Render_blocking", "Render-Blocking")}} gemindert und die Anzahl der erforderlichen Reflows minimiert wird. Dieser Artikel führt Sie durch wichtige Techniken zur Optimierung der CSS-Leistung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie sich CSS auf die Leistung von Websites auswirkt
        und wie Sie Ihr CSS optimieren, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, ist: "Was muss ich optimieren?" Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Versuchen Sie, alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige beinhalten ausgefeilte [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Einstieg besteht jedoch darin, zu lernen, wie Werkzeuge wie integrierte Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools)Tools zu verwenden, um zu sehen, welche Teile des Seitenladevorgangs lange dauern und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem bestimmten Renderpfad — das Painten erfolgt erst nach dem Layout, das wiederum stattfindet, nachdem der Rendertree erstellt wurde, der sowohl das DOM als auch die CSSOM-Bäume erfordert.

Es wäre ein schlechtes Benutzererlebnis, den Nutzern zuerst eine ungestylte Seite zu zeigen und diese dann neu zu rendern, nachdem die CSS-Stile geparst wurden. Aus diesem Grund ist CSS render-blockierend, bis der Browser feststellt, dass CSS benötigt wird. Der Browser kann die Seite rendern, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um die Konstruktion des CSSOMs zu optimieren und die Seitenleistung zu verbessern, können Sie eine oder mehrere der folgenden Maßnahmen ergreifen, je nach aktuellem Zustand Ihres CSS:

- **Entfernen Sie unnötige Stile**: Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte CSS-Regeln zu bereinigen, die während der Entwicklung zu ihren Stylesheets hinzugefügt wurden und letztendlich nicht genutzt wurden. Alle Stile werden geparst, unabhängig davon, ob sie während des Layouts und Paintings verwendet werden oder nicht. Es kann das Seitenerendern beschleunigen, wenn ungenutzte entfernt werden. Wie [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem für eine große Codebasis, und es gibt keine magische Lösung, um ungenutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und sorgfältig und gezielt darüber nachdenken, was hinzugefügt und entfernt wird.

- **Teilen Sie CSS in separate Module**: Modulares CSS bedeutet, dass CSS, das nicht beim Seitenladen benötigt wird, später geladen werden kann, wodurch anfängliches CSS-Render-Blocking und Ladezeiten reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

  ```html
  <!-- Loading and parsing styles.css is render-blocking -->
  <link rel="stylesheet" href="styles.css" />

  <!-- Loading and parsing print.css is not render-blocking -->
  <link rel="stylesheet" href="print.css" media="print" />

  <!-- Loading and parsing mobile.css is not render-blocking on large screens -->
  <link
    rel="stylesheet"
    href="mobile.css"
    media="screen and (width <= 480px)" />
  ```

  Das obige Beispiel bietet drei Sets an Stilen — Standardstile, die immer geladen werden, Stile, die nur beim Drucken des Dokuments geladen werden, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blockierend ist. Sie können dem Browser sagen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [media query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das nur in einem bestimmten Szenario angewendet werden muss, lädt er es dennoch herunter, blockiert jedoch nicht das Rendern. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei mit Render-Blocking, in diesem Fall `styles.css`, viel kleiner, was die Zeit reduziert, in der das Rendern blockiert wird.

- **Minifizieren und komprimieren Sie Ihr CSS**: Minifizieren bedeutet, dass der gesamte Whitespace, der nur zur besseren Lesbarkeit für Menschen in der Datei vorhanden ist, entfernt wird, sobald der Code in Produktion geht. Durch Minifizieren Ihres CSS können Sie die Ladezeiten erheblich reduzieren. Minifizierung ist generell Teil eines Build-Prozesses (zum Beispiel minifizieren die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt für den Einsatz bereitstellen). Zusätzlich zur Minifizierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, Komprimierung wie gzip verwendet, bevor Dateien bereitgestellt werden.

- **Vereinfachen Sie Selektoren**: Menschen schreiben oft Selektoren, die komplexer sind, als nötig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Parsing-Zeit für diese Selektoren. Zum Beispiel:

  ```css
  /* Very specific selector */
  body div#main-content article.post h2.headline {
    font-size: 24px;
  }

  /* You probably only need this */
  .headline {
    font-size: 24px;
  }
  ```

  Weniger komplexe und spezifische Selektoren sind auch gut für die Wartung. Es ist einfach zu verstehen, was einfache Selektoren tun, und es ist einfacher, Stile später zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Wenden Sie keine Stile auf mehr Elemente an, als nötig**: Ein häufiger Fehler ist es, Stile auf alle Elemente mit Hilfe des [universellen Selektors](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) anzuwenden oder zumindest auf mehr Elemente, als nötig. Diese Art von Styling kann die Leistung insbesondere auf größeren Websites negativ beeinflussen.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und mächtige Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) müssen sparsam eingesetzt werden. Ihre überallige Nutzung kann allerlei unerwartetes Verhalten verursachen.

- **Reduzieren Sie HTTP-Anfragen für Bilder mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) sind eine Technik, bei der mehrere kleine Bilder (wie Icons), die Sie auf Ihrer Website verwenden möchten, in einer einzigen Bilddatei zusammengefasst werden und dann unterschiedliche {{cssxref("background-position")}}-Werte verwenden, um den Bildausschnitt anzuzeigen, den Sie an jedem unterschiedlichen Ort zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die zum Abrufen der Bilder erforderlich sind, erheblich reduzieren.

- **Preload wichtiger Ressourcen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Preloader für kritische Ressourcen zu verwandeln. Dazu gehören CSS-Dateien, Schriftarten und Bilder:

  ```html
  <link rel="preload" href="style.css" as="style" />

  <link
    rel="preload"
    href="ComicSans.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(width > 600px)" />
  ```

  Mit `preload` lädt der Browser die referenzierten Ressourcen so schnell wie möglich und stellt sie im Browser-Cache bereit, damit sie schneller verfügbar sind, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, hochpriorisierte Ressourcen vorzuladen, die der Benutzer frühzeitig auf einer Seite antrifft, damit das Erlebnis so reibungslos wie möglich ist. Beachten Sie, dass Sie auch `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flinker wirken lassen und Benutzern das Gefühl geben, dass Fortschritte gemacht werden, während sie darauf warten, dass eine Seite geladen wird (zum Beispiel Ladespinner). Größere Animationen und eine höhere Anzahl an Animationen erfordern jedoch natürlich mehr Rechenleistung, was die Leistung verschlechtern kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Kontrolle/Site-Präferenz bieten, um Animationen auszuschalten, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkulaufzeit verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob überhaupt Animationen auf die Seite angewendet werden. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), die verwendet werden kann, um animierte Stile selektiv basierend auf OS-Einstellungen des Benutzers für Animationen bereitzustellen oder nicht.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) wann immer möglich zu verwenden, statt JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript zu integrieren).

### Auswahl der zu animierenden Eigenschaften

Die Leistungsfähigkeit von Animationen hängt stark von den Eigenschaften ab, die Sie animieren. Bestimmte Eigenschaften lösen bei Animationen einen {{Glossary("Reflow", "Reflow")}} (und daher auch einen {{Glossary("Repaint", "Repaint")}}) aus und sollten vermieden werden. Diese beinhalten Eigenschaften, die:

- Die Dimensionen eines Elements ändern, wie [`width`](/de/docs/Web/CSS/Reference/Properties/width), [`height`](/de/docs/Web/CSS/Reference/Properties/height), [`border`](/de/docs/Web/CSS/Reference/Properties/border) und [`padding`](/de/docs/Web/CSS/Reference/Properties/padding).
- Ein Element neu positionieren, wie [`margin`](/de/docs/Web/CSS/Reference/Properties/margin), [`top`](/de/docs/Web/CSS/Reference/Properties/top), [`bottom`](/de/docs/Web/CSS/Reference/Properties/bottom), [`left`](/de/docs/Web/CSS/Reference/Properties/left) und [`right`](/de/docs/Web/CSS/Reference/Properties/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/Reference/Properties/align-content), [`align-items`](/de/docs/Web/CSS/Reference/Properties/align-items) und [`flex`](/de/docs/Web/CSS/Reference/Properties/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie [`box-shadow`](/de/docs/Web/CSS/Reference/Properties/box-shadow).

Moderne Browser sind intelligent genug, nur den geänderten Bereich des Dokuments neu zu painten statt der gesamten Seite. Infolgedessen sind größere Animationen kostspieliger.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keinen Neuanstrich/Repaint verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity)
- [`filter`](/de/docs/Web/CSS/Reference/Properties/filter)

### Animation auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie berücksichtigen, die Animationsarbeit vom Main Thread auf die GPU des Geräts (auch als Compositing bezeichnet) zu verlagern. Dies wird erreicht, indem Sie spezifische Arten von Animationen wählen, die der Browser automatisch an die GPU zur Bearbeitung sendet; dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/Reference/Properties/transform) und [`rotate3d()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/Reference/Properties/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) (siehe den nachfolgenden Abschnitt).
- Bestimmte Elemente, die in ihrem eigenen Layer gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animation auf der GPU kann die Leistung, insbesondere auf mobilen Geräten, verbessern. Das Verlegen von Animationen zur GPU ist jedoch nicht immer einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfreudigkeit einer Seite erhöhen, indem potenziell aufwendige Arbeiten durchgeführt werden, bevor sie erforderlich sind. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) deutet den Browsern an, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE]
> `will-change` ist als letztes Mittel gedacht, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendern, bis er all diese Stile geparst hat, wird jedoch nicht auf Stile render-blockieren, die er weiß, dass sie nicht verwendet werden, wie die Druckstylesheets. Durch das Aufteilen des CSS in mehrere Dateien basierend auf Media Queries können Sie das Render-Blocking während des Downloads von ungenutztem CSS verhindern. Um einen nicht-blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort benötigten Stile, wie Druckstile, in eine separate Datei, fügen Sie einen [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) zur HTML-Markierung hinzu und fügen Sie eine Media Query hinzu, die in diesem Fall angibt, dass es sich um ein Druckstylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blockierend ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, weiß er, dass es nur in einem bestimmten Szenario angewendet werden muss; er lädt das Stylesheet dennoch herunter, blockiert jedoch nicht das Rendern. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei mit Render-Blocking, in diesem Fall `styles.css`, viel kleiner und reduziert die Zeit, in der das Rendern blockiert wird.

## Verbesserung der Schriftleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webschrift-Performance.

Überlegen Sie im Allgemeinen sorgfältig, welche Schriften Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Während es verlockend sein kann, viele Schriften zu verwenden, um visuelle Spannung zu erzeugen, kann dies die Seitenladezeit erheblich verlangsamen und dazu führen, dass Ihre Seite chaotisch aussieht. Sie benötigen wahrscheinlich nur zwei oder drei Schriften, und Sie kommen mit weniger aus, wenn Sie sich entscheiden, [websichere Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftladen

Beachten Sie, dass eine Schriftart nur geladen wird, wenn sie tatsächlich auf ein Element angewendet wird, indem die [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family) Eigenschaft verwendet wird, nicht wenn sie durch die [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face) At-Regel zuerst referenziert wird:

```css
/* Font not loaded here */
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
}

h1,
h2,
h3 {
  /* It is actually loaded here */
  font-family: "Open Sans", sans-serif;
}
```

Es kann daher von Vorteil sein, `rel="preload"` zu verwenden, um wichtige Schriften vorab zu laden, sodass sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist eher von Vorteil, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet verborgen ist und erst viel später im Parsing-Prozess erreicht wird. Es ist jedoch ein Kompromiss — Schriftdateien sind ziemlich groß, und wenn Sie zu viele davon vorab laden, können Sie andere Ressourcen verzögern.

Sie können auch Folgendes in Betracht ziehen:

- Verwenden von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um frühzeitig eine Verbindung mit dem Schriftanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Verwenden der [CSS-Schriftenlade-API](/de/docs/Web/API/CSS_Font_Loading_API), um das Schriftladeverhalten über JavaScript anzupassen.

### Laden nur der benötigten Glyphen

Bei der Wahl einer Schriftart für Fließtext ist es schwieriger, sicher zu sein, welche Glyphen verwendet werden, insbesondere wenn Sie mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen arbeiten.

Wenn Sie jedoch wissen, dass Sie eine bestimmte Glyphemenge verwenden werden (zum Beispiel nur Glyphen für Überschriften oder spezifische Satzzeichen), könnten Sie die Anzahl der Glyphen, die der Browser herunterladen muss, limitieren. Dies kann durch die Erstellung einer Schriftdatei, die nur das erforderliche Unterset enthält, durchgeführt werden. Ein Prozess namens [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting). Der [`unicode-range`](/de/docs/Web/CSS/Reference/At-rules/@font-face/unicode-range) `@font-face` Deskriptor kann dann verwendet werden, um anzugeben, wann Ihre Unterset-Schriftart verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Definition des Schriftanzeigeverhaltens mit dem `font-display` Deskriptor

Angewendet auf die `@font-face` At-Regel, definiert der [`font-display`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-display) Deskriptor, wie Schriftdateien geladen und vom Browser angezeigt werden, sodass Text mit einer Ersatzschrift angezeigt wird, während eine Schrift geladen wird oder das Laden fehlschlägt. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm zu haben, mit dem Kompromiss eines Aufflackerns ungestylten Textes.

```css
@font-face {
  font-family: "someFont";
  src: url("/path/to/fonts/someFont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Styling-Neuberechnung mit CSS-Containment

Durch die Verwendung der im [CSS-Containment](/de/docs/Web/CSS/CSS_containment) Modul definierten Eigenschaften können Sie dem Browser anweisen, verschiedene Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendern einzelner Abschnitte. Als Beispiel können Sie dem Browser angeben, bestimmte Container erst dann zu rendern, wenn sie im Viewport sichtbar sind.

Die {{cssxref("contain")}} Eigenschaft ermöglicht es einem Autor, genau anzugeben, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) sie auf einzelne Container auf der Seite anwenden möchten. Dies ermöglicht dem Browser das Neuberechnen von Layout, Stil, Painten, Größe oder jeder Kombination davon für einen begrenzten Teil des DOMs.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}} Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, einen starken Satz von Containments auf eine Menge von Containern anzuwenden und anzugeben, dass der Browser diese Container erst dann layouten und rendern soll, wenn sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, die es Ihnen erlaubt, eine Platzhaltergröße für Container bereitzustellen, während sie den Effekten von Containment unterliegen. Dies bedeutet, dass die Container Platz beanspruchen, auch wenn deren Inhalt noch nicht gerendert wurde, sodass Containment seine Leistungsverbesserungen ohne das Risiko von Scrollbalken-Verschiebungen und Ruckeln durchführen kann, wenn Elemente gerendert und sichtbar werden. Dies verbessert die Qualität der Benutzererfahrung, während der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Optimierung der `:has()` Selektoren

Die {{cssxref(":has", ":has()")}} Pseudo-Klasse ermöglicht leistungsstarke Selektionsmöglichkeiten, erfordert jedoch sorgfältige Nutzung, um Leistungsengpässe zu vermeiden. Für detaillierte Leitlinien zum Schreiben effizienter `:has()` Selektoren siehe [Performance consideration in the `:has()` reference documentation](/de/docs/Web/CSS/Reference/Selectors/:has#performance_considerations).

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best Practices für Schriften](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Renderleistung steigert](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
