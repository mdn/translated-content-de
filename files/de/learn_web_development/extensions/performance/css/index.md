---
title: CSS Leistungsoptimierung
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Beim Entwickeln einer Website müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite verarbeitet. Um mögliche Leistungsprobleme, die durch CSS verursacht werden könnten, zu verringern, sollten Sie es optimieren. Beispielsweise sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "Render-Blocking")}} zu minimieren und die Anzahl der erforderlichen Reflows zu reduzieren. Dieser Artikel führt Sie durch wichtige Techniken zur CSS-Leistungsoptimierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a> und Grundkenntnisse über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website">Client-seitige Webtechnologien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um zu lernen, wie sich CSS auf die Leistung von Websites auswirkt
        und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, lautet: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die fast jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige nutzen komplexe [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, ist jedoch, zu lernen, wie man Tools wie integrierte Browser-[Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) Tools verwendet, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Optimierung des Renderings

Browser folgen einem spezifischen Rendering-Pfad – das Zeichnen erfolgt erst nach dem Layout, welches nach der Erstellung des Renderbaums erfolgt, der wiederum sowohl den DOM- als auch den CSSOM-Baum erfordert.

Den Benutzern eine ungestylte Seite anzuzeigen und sie dann nach dem Analysieren der CSS-Stile neu zu zeichnen, würde eine schlechte Benutzererfahrung darstellen. Aus diesem Grund blockiert CSS das Rendering, bis der Browser bestimmt hat, dass das CSS benötigt wird. Der Browser kann die Seite zeichnen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um die Konstruktion des CSSOM zu optimieren und die Seitenleistung zu verbessern, können Sie eines oder mehrere der folgenden Dinge basierend auf dem aktuellen Zustand Ihres CSS tun:

- **Überflüssige Stile entfernen**: Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, nicht genutzte CSS-Regeln zu bereinigen, die während der Entwicklung zu ihren Stylesheets hinzugefügt, aber letztendlich nicht verwendet wurden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layouts und Zeichnens verwendet werden oder nicht, sodass es die Seitendarstellung beschleunigen kann, ungenutzte zu entfernen. Wie [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem für eine große Codebasis zu lösen, und es gibt keine einfache Lösung, um nicht genutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und sorgfältig und überlegt vorzugehen, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: Das Halten von CSS modular bedeutet, dass CSS, das beim Laden der Seite nicht benötigt wird, später geladen werden kann, wodurch das anfängliche Render-Blocking und die Ladezeiten des CSSs reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Sätze von Stilen – standardmäßige Stile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet das Rendering blockiert. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media` Attribut mit einer [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet zwar herunter, blockiert jedoch nicht das Rendering. Indem das CSS in mehrere Dateien unterteilt wird, ist die Haupt-Render-Blocking-Datei, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit verkürzt wird, in der das Rendering blockiert ist.

- **CSS minimieren und komprimieren**: Das Minifizieren beinhaltet das Entfernen aller Leerzeichen in der Datei, die nur für die Lesbarkeit durch Menschen vorhanden sind, sobald der Code in die Produktion geht. Sie können die Ladezeiten erheblich reduzieren, indem Sie Ihr CSS minimieren. Minifizierung wird in der Regel als Teil eines Build-Prozesses durchgeführt (zum Beispiel minimieren die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt bereitstellen, das für den Einsatz bereit ist). Zusätzlich zur Minifizierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, Komprimierung wie gzip für Dateien verwendet, bevor sie bereitgestellt werden.

- **Selektoren vereinfachen**: Menschen schreiben oft Selektoren, die komplexer sind, als es für die Anwendung der erforderlichen Stile nötig ist. Dies erhöht nicht nur die Dateigrößen, sondern auch die Analysezeit für diese Selektoren. Zum Beispiel:

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

  Ihre Selektoren weniger komplex und spezifisch zu machen, ist auch gut für die Wartung. Es ist leicht zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile bei Bedarf später zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Stile nicht auf mehr Elemente als nötig anwenden**: Ein häufiger Fehler ist es, Stile auf alle Elemente mit dem [universellen Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) oder zumindest auf mehr Elemente als nötig anzuwenden. Diese Art von Styling kann die Leistung negativ beeinträchtigen, insbesondere auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam eingesetzt werden. Sie überall einzusetzen, kann zu allerlei unerwartetem Verhalten führen.

- **Reduzieren Sie HTTP-Anfragen für Bilder mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) sind eine Technik, bei der mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Website verwenden möchten, in einer einzigen Bilddatei zusammengestellt werden und dann verschiedene {{cssxref("background-position")}} Werte verwenden, um das gewünschte Bildsegment an jedem Ort anzuzeigen. Dies kann die Anzahl der notwendigen HTTP-Anfragen zum Abrufen der Bilder erheblich reduzieren.

- **Wichtige Ressourcen vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}} Elemente zu Preloadern für kritische Ressourcen zu machen. Dazu gehören CSS-Dateien, Schriftarten und Bilder:

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

  Mit `preload` wird der Browser die referenzierten Ressourcen so schnell wie möglich abrufen und im Browser-Cache verfügbar machen, damit sie schneller verwendet werden können, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, hochpriorisierte Ressourcen vorzuladen, die der Benutzer früh auf einer Seite antreffen wird, damit das Erlebnis so flüssig wie möglich ist. Beachten Sie, dass Sie auch `media` Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flüssiger erscheinen lassen und Benutzer das Gefühl geben, dass Fortschritte erzielt werden, wenn sie auf das Laden einer Seite warten (z. B. Lade-Spinner). Größere Animationen und eine größere Anzahl von Animationen erfordern jedoch naturgemäß mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der einfachste Rat ist es, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Steuerung/Seiteneinstellung zur Verfügung stellen, um Animationen auszuschalten, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Batteriekapazität verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob Animationen überhaupt auf die Seite angewendet werden. Es gibt auch eine Medienabfrage namens [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), die verwendet werden kann, um Animationen basierend auf den bevorzugten Animationseinstellungen des Betriebssystems des Benutzers selektiv zu bedienen oder nicht.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) zu verwenden, wo immer möglich, statt JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, CSS-Animationen direkt mit JavaScript zu verbinden).

### Zu animierende Eigenschaften auswählen

Die Leistungsfähigkeit von Animationen hängt stark davon ab, welche Eigenschaften Sie animieren. Einige Eigenschaften lösen beim Animieren einen {{Glossary("Reflow", "Reflow")}} (und daher auch ein {{Glossary("Repaint", "Repaint")}}) aus und sollten vermieden werden. Diese schließen Eigenschaften ein, die:

- Die Dimensionen eines Elements ändern, wie [`width`](/de/docs/Web/CSS/Reference/Properties/width), [`height`](/de/docs/Web/CSS/Reference/Properties/height), [`border`](/de/docs/Web/CSS/Reference/Properties/border) und [`padding`](/de/docs/Web/CSS/Reference/Properties/padding).
- Ein Element umpositionieren, wie [`margin`](/de/docs/Web/CSS/Reference/Properties/margin), [`top`](/de/docs/Web/CSS/Reference/Properties/top), [`bottom`](/de/docs/Web/CSS/Reference/Properties/bottom), [`left`](/de/docs/Web/CSS/Reference/Properties/left) und [`right`](/de/docs/Web/CSS/Reference/Properties/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/Reference/Properties/align-content), [`align-items`](/de/docs/Web/CSS/Reference/Properties/align-items) und [`flex`](/de/docs/Web/CSS/Reference/Properties/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie [`box-shadow`](/de/docs/Web/CSS/Reference/Properties/box-shadow).

Moderne Browser sind klug genug, um nur den veränderten Bereich des Dokuments zu aktualisieren, anstatt die gesamte Seite. Aus diesem Grund sind größere Animationen kostspieliger.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint auslösen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/Guides/Transforms)
- [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity)
- [`filter`](/de/docs/Web/CSS/Reference/Properties/filter)

### Auf der GPU animieren

Um die Leistung weiter zu verbessern, sollten Sie erwägen, Animationsarbeiten vom Haupt-Thread auf die GPU des Geräts zu verlagern (auch als Komposition bezeichnet). Dies wird durch die Auswahl spezifischer Arten von Animationen erreicht, die der Browser automatisch an die GPU zur Verarbeitung sendet; dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/Reference/Properties/transform) und [`rotate3d()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/Reference/Properties/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) (siehe untenstehenden Abschnitt).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animationen auf der GPU können die Leistung insbesondere auf mobilen Geräten verbessern. Allerdings ist es nicht immer so einfach, Animationen auf die GPU zu verschieben. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Arten von Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell teure Arbeiten durchgeführt werden, bevor sie erforderlich sind. Die CSS [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) Eigenschaft deutet Browsern an, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE] > `will-change` ist als letztes Mittel gedacht, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme im Voraus zu erwarten.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Medienabfragen einschränken. Medienabfragen sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er all diese Stile analysiert hat, aber er blockiert das Rendering nicht bei Stilen, von denen er weiß, dass sie nicht verwendet werden, zum Beispiel bei den Druckstylesheets. Durch das Aufteilen des CSS in mehrere Dateien basierend auf Medienabfragen können Sie Render-Blocking während des Herunterladens von nicht verwendetem CSS verhindern. Um einen nicht-blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie beispielsweise Druckstile, in eine separate Datei, fügen Sie einen [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) in das HTML-Markup ein und fügen Sie eine Medienabfrage hinzu, in diesem Fall, dass es sich um ein Druckstylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet das Rendering blockiert. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media` Attribut mit der [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) hinzufügen. Wenn der Browser sieht, dass ein Stylesheet nur in einem bestimmten Szenario angewendet werden muss, lädt er das Stylesheet zwar herunter, blockiert jedoch nicht das Rendering. Durch das Aufteilen des CSS in mehrere Dateien wird die Haupt-Render-Blocking-Datei, in diesem Fall `styles.css`, deutlich kleiner, wodurch die Zeit verkürzt wird, in der das Rendering blockiert ist.

## Verbesserung der Schriftleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webschrift-Performance.

Im Allgemeinen sollten Sie sorgfältig überlegen, welche Schriften Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabytes). Während es verlockend sein kann, viele Schriften für visuelle Spannung zu verwenden, kann dies das Laden der Seite erheblich verlangsamen und dazu führen, dass Ihre Website chaotisch aussieht. Sie benötigen wahrscheinlich nur etwa zwei oder drei Schriften, und Sie können mit weniger auskommen, wenn Sie sich entscheiden, [websichere Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftladeverhalten

Beachten Sie, dass eine Schriftart nur geladen wird, wenn sie tatsächlich mit der [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family) Eigenschaft auf ein Element angewendet wird, nicht wenn sie zuerst mit der [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face) Regel referenziert wird:

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

Es kann daher vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriften frühzeitig zu laden, sodass sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist wahrscheinlicher vorteilhaft, wenn Ihre `font-family` Deklaration in einem großen externen Stylesheet versteckt ist und nicht wesentlich später im Parsing-Prozess erreicht wird. Es ist jedoch ein Kompromiss – Schriftdateien sind ziemlich groß, und wenn Sie zu viele von ihnen vorladen, könnten Sie andere Ressourcen verzögern.

Sie können auch erwägen:

- Die Verwendung von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühe Verbindung mit dem Schriftanbieter herzustellen. Details finden Sie unter [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins).
- Die Verwendung der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Schriftladeverhalten über JavaScript anzupassen.

### Nur die benötigten Glyphen laden

Wenn Sie eine Schriftart für den Fließtext auswählen, ist es schwieriger, sich der Glyphen bewusst zu sein, die darin verwendet werden, insbesondere wenn Sie es mit benutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen zu tun haben.

Wenn Sie jedoch wissen, dass Sie ein bestimmtes Set von Glyphen verwenden werden (zum Beispiel nur Glyphen für Überschriften oder bestimmte Satzzeichen), könnten Sie die Anzahl der Glyphen, die der Browser herunterladen muss, einschränken. Dies kann erreicht werden, indem eine Schriftdatei erstellt wird, die nur das erforderliche Subset enthält – ein Prozess, der [subsetting](https://fonts.google.com/knowledge/glossary/subsetting) genannt wird. Der [`unicode-range`](/de/docs/Web/CSS/Reference/At-rules/@font-face/unicode-range) Descriptor bei `@font-face` kann dann verwendet werden, um anzugeben, wann Ihre Subset-Schrift verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schrift nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Schriftanzeigeverhalten mit dem `font-display` Descriptor definieren

Angewendet auf die `@font-face` Regel, definiert der [`font-display`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-display) Descriptor, wie Schriftdateien vom Browser geladen und dargestellt werden, wodurch Text mit einer Ersatzschrift angezeigt werden kann, während eine Schrift lädt oder das Laden fehlschlägt. Dies verbessert die Leistung, indem der Text sichtbar wird, anstatt einen leeren Bildschirm zu haben, wobei der Kompromiss ein Flackern von ungestaltetem Text ist.

```css
@font-face {
  font-family: "someFont";
  src: url("/path/to/fonts/someFont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Neuberechnung des Stylings mit CSS-Containment

Durch die Verwendung der im Modul [CSS-Containment](/de/docs/Web/CSS/Guides/Containment) definierten Eigenschaften können Sie den Browser anweisen, verschiedene Teile einer Seite zu isolieren und ihr Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendern einzelner Abschnitte. Als Beispiel können Sie dem Browser angeben, bestimmte Container nicht zu rendern, bis sie im Ansichtsfenster sichtbar sind.

Die {{cssxref("contain")}} Eigenschaft ermöglicht es einem Autor, genau anzugeben, welche [Containment-Typen](/de/docs/Web/CSS/Guides/Containment/Using) auf einzelne Container auf der Seite angewendet werden sollen. Dies erlaubt dem Browser, Layout, Stil, Zeichnung, Größe oder jede Kombination davon für einen begrenzten Teil des DOMs neu zu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}} Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Menge von Containments auf ein Set von Containern anzuwenden und anzugeben, dass der Browser diese Container nicht gestalten und rendern soll, bis sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, die es ermöglicht, eine Platzhaltergröße für Container bereitzustellen, während sie den Effekten von Containment unterliegen. Dies bedeutet, dass die Container Platz einnehmen, auch wenn ihre Inhalte noch nicht gerendert wurden, was Containment erlaubt, seine Leistungsoptimierung ohne das Risiko von Scrollleistenverschiebungen und Ruckeln zu machen, wenn Elemente angezeigt werden und sichtbar werden. Dies verbessert die Benutzererfahrung, wenn der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Optimierung von `:has()` Selektoren

Die {{cssxref(":has", ":has()")}} Pseudo-Klasse ermöglicht leistungsstarke Auswahlmöglichkeiten, erfordert jedoch eine sorgfältige Verwendung, um Leistungsengpässe zu vermeiden. Ausführliche Anleitungen zum Schreiben effizienter `:has()` Selektoren finden Sie unter [Performance considerations in the `:has()` reference documentation](/de/docs/Web/CSS/Reference/Selectors/:has#performance_considerations).

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Beste Praktiken für Schriften](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
