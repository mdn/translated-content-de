---
title: Optimierung der CSS-Leistung
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Bei der Entwicklung einer Website sollten Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite verarbeitet. Um eventuelle Leistungsprobleme, die durch CSS verursacht werden könnten, zu mindern, sollten Sie es optimieren. Beispielsweise sollten Sie das CSS optimieren, um das {{Glossary("Render_blocking", "render-blocking")}} zu reduzieren und die Anzahl der erforderlichen Neudarstellungen zu minimieren. Dieser Artikel führt Sie durch wichtige Techniken zur Optimierung der CSS-Leistung.

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
        Um mehr über den Einfluss von CSS auf die Leistung von Websites zu erfahren
        und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, ist "Was muss ich optimieren?". Einige der unten besprochenen Tipps und Techniken sind gute Praktiken, die für fast jedes Webprojekt von Vorteil sind, während einige nur in bestimmten Situationen benötigt werden. Den Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige davon beinhalten ausgeklügelte [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, ist jedoch, zu lernen, wie man Werkzeuge wie die eingebauten Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Leistungs-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools)tools verwendet, um zu sehen, welche Teile des Seitenaufbaus lange dauern und optimiert werden müssen.

## Optimierung des Renderings

Browser folgen einem bestimmten Rendering-Pfad — das Zeichnen erfolgt erst nach dem Layout, das nach der Erstellung des Renderbaums erfolgt, der wiederum sowohl die DOM- als auch die CSSOM-Bäume erfordert.

Den Benutzern eine ungestylte Seite zu zeigen und sie dann neu zu zeichnen, nachdem die CSS-Stile analysiert wurden, wäre ein schlechtes Benutzererlebnis. Aus diesem Grund blockiert CSS das Rendering, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite zeichnen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um den Aufbau von CSSOM zu optimieren und die Leistung der Seite zu verbessern, können Sie Folgendes tun oder mehr basierend auf dem aktuellen Zustand Ihres CSS:

- **Unnötige Stile entfernen**: Dies mag offensichtlich erscheinen, aber es ist überraschend, wie viele Entwickler vergessen, nicht verwendete CSS-Regeln zu bereinigen, die während der Entwicklung zu ihren Stylesheets hinzugefügt wurden und letztendlich nicht verwendet werden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layouts und der Darstellung verwendet werden oder nicht. Das Entfernen nicht verwendeter Stile kann das Rendern der Seite beschleunigen. Wie [Wie entfernt man nicht verwendetes CSS von einer Seite?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem, das für eine große Codebasis zu lösen ist, und es gibt kein Patentrezept, um nicht verwendetes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und darüber, was hinzugefügt und entfernt wird, sorgfältig und bewusst sein.

- **CSS in separate Module aufteilen**: Modulares CSS bedeutet, dass CSS, das beim Laden der Seite nicht erforderlich ist, später geladen werden kann, wodurch initiale CSS-Render-Blockierung und Ladezeiten reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Sätze von Stilen — Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet Render-Blockierung ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das es nur in einem bestimmten Szenario anwenden muss, lädt es das Stylesheet immer noch herunter, blockiert aber nicht das Rendering. Indem das CSS in mehrere Dateien aufgeteilt wird, ist die Hauptdatei mit Render-Blockierung, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit, für die das Rendering blockiert wird, reduziert wird.

- **Minifizieren und komprimieren Sie Ihr CSS**: Minifizierung bedeutet, dass der gesamte Leerraum entfernt wird, der nur für die menschliche Lesbarkeit im Code vorhanden ist, wenn dieser in Produktion geht. Durch das Minifizieren Ihres CSS können Sie die Ladezeiten erheblich verkürzen. Die Minifizierung erfolgt in der Regel als Teil eines Build-Prozesses (zum Beispiel werden die meisten JavaScript-Frameworks den Code minifizieren, wenn Sie ein bereitstellungsfertiges Projekt kompilieren). Zusätzlich zur Minifizierung sollten Sie sicherstellen, dass der Server, auf dem Ihre Seite gehostet wird, Komprimierung wie gzip auf Dateien anwendet, bevor sie ausgeliefert werden.

- **Selektoren vereinfachen**: Häufig schreiben Entwickler Selektoren, die komplexer sind als nötig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Verarbeitungszeiten für diese Selektoren. Zum Beispiel:

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

  Weniger komplexe und weniger spezifische Selektoren zu verwenden, ist auch gut für die Wartung. Es ist einfach zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile bei Bedarf später zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Vermeiden Sie es, Stile auf mehr Elemente anzuwenden, als nötig**: Ein häufiger Fehler ist, Stile auf alle Elemente mittels des [universellen Selektors](/de/docs/Web/CSS/Universal_selectors) anzuwenden, oder zumindest auf mehr Elemente als nötig. Solche Stilaspekte können die Leistung negativ beeinflussen, insbesondere auf größeren Seiten.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und mächtige Tools wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam verwendet werden. Sie überall zu nutzen kann alle Arten von unerwarteten Verhalten verursachen.

- **Reduzieren Sie HTTP-Anfragen für Bilder mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, die mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Website verwenden möchten, in eine einzige Bilddatei zusammenfasst. Anschließend werden verschiedene {{cssxref("background-position")}}-Werte verwendet, um den Bildausschnitt anzuzeigen, den Sie an jeder verschiedenen Stelle zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die benötigt werden, um die Bilder abzurufen, erheblich reduzieren.

- **Wichtige Ressourcen vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Preloader für kritische Ressourcen zu verwandeln. Dazu gehören CSS-Dateien, Schriftarten und Bilder:

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

  Mit `preload` lädt der Browser die referenzierten Ressourcen so schnell wie möglich herunter und stellt sie im Browser-Cache bereit, damit sie schneller verfügbar sind, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, hochpriorisierte Ressourcen vorzuladen, die der Benutzer früh auf einer Seite sehen wird, damit das Erlebnis so reibungslos wie möglich ist. Beachten Sie, dass Sie auch `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Interfaces flinker erscheinen lassen und Benutzern das Gefühl geben, dass Fortschritte gemacht werden, während sie darauf warten, dass eine Seite geladen wird (zum Beispiel Lade-Spinners). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch naturgemäß mehr Rechenleistung, um verarbeitet zu werden, was die Leistung beeinträchtigen kann.

Der einfachste Rat besteht darin, alle unnötigen Animationen zu reduzieren. Sie könnten Benutzern auch eine Steuerungs-/Standortpräferenz bieten, um Animationen auszuschalten, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkuladung verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob überhaupt Animationen auf der Seite angewendet werden. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationsstile je nach Benutzerpräferenz auf Betriebssystemebene selektiv zu nutzen oder nicht.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) soweit möglich zu verwenden, anstatt JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen).

### Auswahl von Eigenschaften zum Animieren

Nächster Punkt: Die Leistung von Animationen hängt stark davon ab, welche Eigenschaften animiert werden. Bestimmte Eigenschaften, die animiert werden, lösen eine {{Glossary("Reflow", "Neudarstellung")}} (und daher auch eine {{Glossary("Repaint", "Neuzeichnung")}}) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Dimensionen eines Elements ändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element neu positionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left) und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items) und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind intelligent genug, um nur den geänderten Bereich des Dokuments neu zu zeichnen, anstatt die gesamte Seite. Daher sind größere Animationen kostspieliger.

Wenn irgendwie möglich, ist es besser, Eigenschaften zu animieren, die keine Neudarstellung/Neuzeichnung verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animation auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, die Animationsarbeit vom Haupt-Thread auf die GPU des Geräts (auch Komposition genannt) zu verlagern. Dies geschieht, indem bestimmte Arten von Animationen ausgewählt werden, die der Browser automatisch der GPU zuweist; dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/will-change) (siehe Abschnitt unten).
- Bestimmte Elemente, die in einer eigenen Schicht gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animation auf der GPU kann zu verbesserter Leistung führen, insbesondere auf Mobilgeräten. Allerdings ist es nicht immer so einfach, Animationen auf die GPU zu verschieben. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen vornehmen, bevor ein Element tatsächlich geändert wird. Diese Arten von Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem potentiell teure Arbeiten vorgezogen werden. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt den Browsern Hinweise darauf, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE]
> `will-change` ist als letzte Maßnahme gedacht, um mit bestehenden Leistungsproblemen umzugehen. Sie sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er all diese Stile analysiert hat, blockiert jedoch das Rendering nicht auf Stilen, die er weiß, dass er sie nicht benötigen wird, wie die Druckstylesheets. Durch das Aufteilen des CSS in mehrere Dateien basierend auf Media Queries können Sie das Render-Blocking beim Herunterladen von unbenutztem CSS verhindern. Um einen nicht-blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie Druckstile, in eine separate Datei, fügen Sie einen [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) in das HTML-Markup ein und fügen Sie eine Media Query hinzu, in diesem Fall, dass es sich um ein Druckstylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet Render-Blockierung ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, weiß, dass dieses nur in einem bestimmten Szenario angewendet werden muss, lädt er das Stylesheet immer noch herunter, blockiert aber nicht das Rendering. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei mit Render-Blockierung, in diesem Fall `styles.css`, viel kleiner, was die Dauer der Blockierung des Renderings reduziert.

## Verbesserung der Schriftleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Leistung von Webschriftarten.

Denken Sie im Allgemeinen sorgfältig über die Schriftarten nach, die Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Obwohl es verlockend sein kann, viele Schriftarten für mehr visuelle Attraktivität zu verwenden, kann dies die Ladezeit der Seite erheblich verlangsamen und dazu führen, dass Ihre Site chaotisch aussieht. Sie benötigen wahrscheinlich nur zwei oder drei Schriftarten und können mit weniger auskommen, wenn Sie sich entscheiden, [web-sichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftarten laden

Denken Sie daran, dass eine Schriftart nur geladen wird, wenn sie tatsächlich auf ein Element mit der Eigenschaft [`font-family`](/de/docs/Web/CSS/font-family) angewendet wird, nicht wenn sie zuerst mit der At-Regel [`@font-face`](/de/docs/Web/CSS/@font-face) referenziert wird:

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

Infolgedessen kann es vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriftarten frühzeitig zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist wahrscheinlich vorteilhafter, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet verborgen ist und nicht erreicht wird, bis erheblich später im Analyseprozess. Es ist jedoch ein Kompromiss – Schriftdateien sind ziemlich groß, und wenn Sie zu viele davon vorladen, können Sie andere Ressourcen verzögern.

Sie können auch in Betracht ziehen:

- Verwenden von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühe Verbindung mit dem Schriftartenanbieter herzustellen. Weitere Informationen finden Sie unter [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins).
- Verwenden der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Schriftartenladeverhalten über JavaScript anzupassen.

### Nur die benötigten Glyphen laden

Wenn Sie eine Schriftart für den Fließtext wählen, ist es schwieriger, sich über die verwendeten Glyphen sicher zu sein, insbesondere wenn Sie es mit nutzergenerierten Inhalten und/oder Inhalten über mehrere Sprachen hinweg zu tun haben.

Wenn Sie jedoch wissen, dass Sie ein spezifisches Set von Glyphen verwenden werden (zum Beispiel nur Glyphen für Überschriften oder spezifische Satzzeichen), können Sie die Anzahl der Glyphen, die der Browser herunterladen muss, begrenzen. Dies kann durch das Erstellen einer Schriftdatei, die nur den erforderlichen Teil enthält, erreicht werden, ein Prozess genannt [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting). Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) Descriptor von `@font-face` kann dann verwendet werden, um anzugeben, wann Ihre Teilmenge-Schriftart verwendet wird. Wenn die Seite keine Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Definition des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor

Angewendet auf die At-Regel `@font-face`, definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display)-Deskriptor, wie Schriftdateien durch den Browser geladen und angezeigt werden, sodass Text mit einer Ersatzschrift sichtbar wird, während eine Schriftart geladen oder nicht geladen wird. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt eine leere Seite zu haben, mit dem Kompromiss, dass es zu einem Blinken ungestylten Textes kommt.

```css
@font-face {
  font-family: someFont;
  src: url("/path/to/fonts/someFont.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Stil-Neuberechnung mit CSS-Containment

Durch den Einsatz der im [CSS-Containment](/de/docs/Web/CSS/CSS_containment)-Modul definierten Eigenschaften können Sie den Browser anweisen, verschiedene Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dadurch wird die Leistung beim Rendern einzelner Abschnitte verbessert. Beispielsweise können Sie angeben, dass der Browser bestimmte Container erst rendern soll, wenn sie im Viewport sichtbar sind.

Die Eigenschaft {{cssxref("contain")}} ermöglicht es einem Autor, genau anzugeben, welche [Arten von Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) sie auf einzelne Container auf der Seite angewendet haben wollen. Dadurch kann der Browser das Layout, den Stil, die Darstellung, die Größe oder eine Kombination davon für einen begrenzten Teil des DOM neu berechnen.

```css
article {
  contain: content;
}
```

Die Eigenschaft {{cssxref("content-visibility")}} ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Reihe von Containments auf eine Gruppe von Containern anzuwenden und anzugeben, dass der Browser diese Container nicht layouten und rendern soll, bis sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, steht ebenfalls zur Verfügung und ermöglicht es Ihnen, eine Platzhaltergröße für Container bereitzustellen, während diese unter den Effekten von Containment stehen. Dies bedeutet, dass die Container Platz einnehmen, auch wenn ihre Inhalte noch nicht gerendert wurden, was es dem Containment ermöglicht, seine Leistungsfähigkeiten zu entfalten, ohne das Risiko von Scrollbalken-Verschiebungen und Ruckeln, wenn Elemente gerendert und sichtbar werden. Dies verbessert die Qualität des Benutzererlebnisses beim Laden von Inhalten.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Siehe auch

- [Leistung von CSS-Animationen](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung verbessert](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
