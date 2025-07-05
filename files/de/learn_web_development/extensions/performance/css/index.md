---
title: CSS-Performance-Optimierung
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Bei der Entwicklung einer Website müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Website verarbeitet. Um eventuelle Leistungsprobleme zu minimieren, die durch CSS verursacht werden könnten, sollten Sie es optimieren. Beispielsweise sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "render-blocking")}} zu minimieren und die Anzahl der erforderlichen Reflows zu minimieren. Dieser Artikel führt Sie durch wesentliche Techniken zur Optimierung der CSS-Leistung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welchen Einfluss CSS auf die Website-Leistung hat und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren?

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihr CSS zu optimieren, ist: „Was muss ich optimieren?“. Einige der nachfolgend diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt erforderlich sind.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere Möglichkeiten, die Leistung zu messen, einige davon mit anspruchsvollen [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, ist jedoch, zu lernen, wie man Tools wie integrierte Browser-[Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) Tools verwendet, um zu sehen, welche Teile des Seitenladevorgangs lange dauern und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem bestimmten Rendering-Pfad – das Rendern erfolgt erst nach dem Layout, das nach der Erstellung des Rendering-Baums erfolgt, was wiederum sowohl den DOM- als auch den CSSOM-Baum erfordert.

Es wäre ein schlechtes Benutzererlebnis, den Benutzern zunächst eine ungestylte Seite anzuzeigen und dann neu zu rendern, nachdem die CSS-Stile analysiert wurden. Aus diesem Grund blockiert CSS das Rendern, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite rendern, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um die CSSOM-Erstellung zu optimieren und die Seitenleistung zu verbessern, können Sie je nach aktuellem Zustand Ihres CSS eines oder mehrere der folgenden Dinge tun:

- **Entfernen Sie unnötige Stile**: Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte CSS-Regeln aufzuräumen, die während der Entwicklung zu ihren Stylesheets hinzugefügt wurden und letztendlich nicht verwendet wurden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layouts und Renderings verwendet werden oder nicht. Das Entfernen ungenutzter Stile kann das Seitenrendering beschleunigen. Wie [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem für einen großen Codebestand ohne eine verlässliche Wunderwaffe. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und vorsichtig und überlegt vorzugehen, was hinzugefügt und entfernt wird.

- **Teilen Sie CSS in separate Module auf**: Ein modularer Aufbau von CSS bedeutet, dass CSS, das beim Seitenladen nicht benötigt wird, später geladen werden kann, wodurch das anfängliche CSS-Render-Blocking und die Ladezeiten reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien zu teilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Sets von Stilen — Standardstile, die immer geladen werden, Stile, die nur beim Drucken des Dokuments geladen werden, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet das Rendering blockiert. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das nur in einem bestimmten Szenario benötigt wird, lädt er das Stylesheet dennoch herunter, blockiert jedoch nicht das Rendering. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei, die das Render-Blocking verursacht, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit, die das Rendering blockiert, reduziert wird.

- **Minifizieren und komprimieren Sie Ihr CSS**: Minifizieren bedeutet, alle Leerzeichen in der Datei zu entfernen, die nur zur besseren Lesbarkeit von Menschen vorhanden sind, sobald der Code in Produktion genommen wird. Sie können die Ladezeiten erheblich verkürzen, indem Sie Ihr CSS minifizieren. Minifizierung erfolgt in der Regel im Rahmen eines Build-Prozesses (zum Beispiel minifiziert die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt für die Bereitstellung bereitstellen). Neben der Minifizierung sollten Sie sicherstellen, dass der Server, auf dem Ihre Site gehostet wird, Kompression wie gzip verwendet, bevor Dateien ausgeliefert werden.

- **Vereinfachen Sie Selektoren**: Oft schreiben Menschen Selektoren, die komplizierter sind, als für die Anwendung der erforderlichen Stile nötig. Dies erhöht nicht nur die Dateigrößen, sondern auch die Parsing-Zeit für diese Selektoren. Zum Beispiel:

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

  Das Vereinfachen und weniger spezifisch machen Ihrer Selektoren ist auch gut für die Wartung. Es ist leicht zu verstehen, was einfache Selektoren tun, und es ist leichter, Stile später bei Bedarf zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Wenden Sie Stile nur auf die tatsächlich benötigten Elemente an**: Ein häufiger Fehler ist das Anwenden von Stilen auf alle Elemente mithilfe des [universellen Selektors](/de/docs/Web/CSS/Universal_selectors), oder zumindest auf mehr Elemente als nötig. Diese Art der Gestaltung kann sich negativ auf die Leistung auswirken, insbesondere auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben. Sie müssen sie daher nicht überall anwenden. Und leistungsstarke Tools wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam verwendet werden. Ihre Verwendung überall kann allerhand unerwartetes Verhalten verursachen.

- **Reduzieren Sie HTTP-Anfragen für Bilder mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, die mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Website verwenden möchten, in einer einzigen Bilddatei platziert und dann verschiedene {{cssxref("background-position")}}-Werte verwendet, um das Bildstück anzuzeigen, das Sie an jedem Ort zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen zum Abrufen der Bilder erheblich reduzieren.

- **Wichtige Ressourcen vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Preloader für kritische Ressourcen zu verwandeln. Dazu gehören CSS-Dateien, Schriften und Bilder:

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

  Mit `preload` wird der Browser die referenzierten Ressourcen so schnell wie möglich abrufen und sie im Browsercache verfügbar machen, damit sie bei der späteren Referenzierung im Code schneller bereitstehen. Es ist nützlich, hochpriorisierte Ressourcen vorzuspähen, die der Benutzer frühzeitig auf einer Seite vorfindet, damit das Erlebnis so reibungslos wie möglich ist. Beachten Sie, dass Sie mit `media`-Attributen auch reaktionsfähige Preloader erstellen können.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flinker erscheinen lassen und Benutzern das Gefühl vermitteln, dass Fortschritte erzielt werden, während sie auf das Laden einer Seite warten (zum Beispiel Ladespinner). Größere Animationen und eine größere Anzahl von Animationen erfordern jedoch selbstverständlich mehr Verarbeitungskapazität, was die Leistung beeinträchtigen kann.

Der einfachste Rat lautet, alle unnötigen Animationen zu reduzieren. Sie könnten Nutzern auch eine Steuerung/Site-Einstellung bieten, um Animationen zu deaktivieren, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenztem Akku verwenden. Sie könnten auch JavaScript verwenden, um zu kontrollieren, ob Animation überhaupt auf die Seite angewendet wird. Es gibt auch eine sogenannte [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media Query, die verwendet werden kann, um animierte Stile selektiv basierend auf den Betriebssystemeinstellungen eines Benutzers für Animation bereitzustellen oder nicht.

Für wesentliche DOM-Animationen wird empfohlen, nach Möglichkeit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle von JavaScript-Animationen zu verwenden (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, CSS-Animationen direkt mit JavaScript zu verknüpfen).

### Wählen von zu animierenden Eigenschaften

Die Leistung von Animationen hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften, wenn sie animiert werden, lösen einen {{Glossary("Reflow", "Reflow")}} (und daher auch ein {{Glossary("Repaint", "Repaint")}}) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Abmessungen eines Elements ändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element neu positionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left) und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements verändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items) und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Elementgeometrie verändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind intelligent genug, nur den geänderten Bereich des Dokuments neu zu zeichnen, anstatt die gesamte Seite. Infolgedessen sind größere Animationen kostspieliger.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animationen auf der GPU ausführen

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, Animationsarbeiten vom Hauptthread auf die GPU des Geräts zu verlagern (auch als Compositing bezeichnet). Dies wird erreicht, indem bestimmte Arten von Animationen ausgewählt werden, die der Browser automatisch an die GPU zur Verarbeitung sendet. Dazu gehören:

- 3D-Transform-Animationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen Eigenschaften, die animiert werden, wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente, auf die [`will-change`](/de/docs/Web/CSS/will-change) angewendet wird (siehe den Abschnitt unten).
- Bestimmte Elemente, die in ihrem eigenen Layer gerendert werden, darunter [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animationen auf der GPU können die Leistung verbessern, insbesondere auf mobilen Geräten. Das Verschieben von Animationen zur GPU ist jedoch nicht immer so einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell aufwendige Arbeiten durchgeführt werden, bevor sie erforderlich sind. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE]
> `will-change` soll als letztes Mittel zur Behebung bestehender Leistungsprobleme verwendet werden. Es sollte nicht verwendet werden, um Leistungsprobleme vorherzusehen.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er alle diese Stile analysiert hat, blockiert das Rendering jedoch nicht bei Stilen, von denen er weiß, dass er sie nicht verwenden wird, wie z.B. die Druckstylesheets. Durch das Aufteilen des CSS in mehrere Dateien basierend auf Media Queries können Sie Render-Blocking während des Downloads von ungenutztem CSS verhindern. Um einen nicht blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie Druckstile, in eine separate Datei, fügen Sie in das HTML-Markup ein [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) hinzu und ergänzen Sie es mit einer Media Query, die in diesem Fall angibt, dass es sich um ein Druckstylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet das Rendern blockiert. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, weiß er, dass er es nur in einem bestimmten Szenario anwenden muss, lädt das Stylesheet dennoch herunter, blockiert jedoch nicht das Rendern. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei, die das Render-Blocking verursacht, in diesem Fall `styles.css`, viel kleiner und reduziert die Render-Blocking-Zeit.

## Verbesserung der Schriftleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webschriftleistung.

Generell sollten Sie sorgfältig darüber nachdenken, welche Schriften Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabytes). Auch wenn es verlockend sein kann, viele Schriften für visuelle Aufregung zu verwenden, kann dies das Laden der Seite erheblich verlangsamen und dazu führen, dass Ihre Website unübersichtlich aussieht. Sie benötigen wahrscheinlich nur etwa zwei oder drei Schriften, und Sie kommen mit weniger aus, wenn Sie sich entscheiden, [websichere Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftladeverhalten

Beachten Sie, dass eine Schriftart nur dann geladen wird, wenn sie tatsächlich auf ein Element angewendet wird, indem die [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft verwendet wird, nicht wenn sie zum ersten Mal mit der [`@font-face`](/de/docs/Web/CSS/@font-face) At-Regel referenziert wird:

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

Es kann daher vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriften früh zu laden, sodass sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist wahrscheinlicher von Vorteil, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet versteckt ist, und erst wesentlich später im Parsing-Prozess erreicht wird. Es ist jedoch ein Kompromiss — Schriftdateien sind ziemlich groß, und wenn Sie zu viele davon vorladen, könnten Sie andere Ressourcen verzögern.

Sie könnten auch in Betracht ziehen:

- Verwenden von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühzeitige Verbindung mit dem Schriftanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Verwendung der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) zur Anpassung des Schriftladeverhaltens über JavaScript.

### Laden nur der benötigten Glyphen

Wenn Sie eine Schriftart für den Fließtext auswählen, ist es schwieriger, sich der Glyphen sicher zu sein, die verwendet werden, insbesondere wenn Sie mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen arbeiten.

Wenn Sie jedoch wissen, dass Sie eine bestimmte Menge an Glyphen verwenden werden (zum Beispiel nur für Überschriften oder bestimmte Satzzeichen), könnten Sie die Anzahl der Glyphen einschränken, die der Browser herunterladen muss. Dies kann erreicht werden, indem eine Schriftdatei erstellt wird, die nur das erforderliche Subset enthält. Ein Prozess namens [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting). Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) `@font-face` Deskriptor kann dann verwendet werden, um anzugeben, wann Ihre Subset-Schriftart verwendet wird. Wenn die Seite keinen Charakter in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Definition des Schriftanzeigeverhaltens mit dem `font-display` Deskriptor

Angewandt auf die `@font-face`-Regel definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display) Deskriptor, wie Schriftdateien vom Browser geladen und angezeigt werden, sodass Text mit einer Ersatzschrift angezeigt werden kann, während eine Schriftart lädt oder nicht geladen wird. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm zu haben, mit dem Kompromiss, dass ein Blitz von ungestyltem Text entsteht.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Stilanpassung mit CSS-Containment

Durch die Verwendung der im [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul definierten Eigenschaften können Sie dem Browser anweisen, verschiedene Teile einer Seite zu isolieren und ihr Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine bessere Leistung beim Rendern einzelner Abschnitte. Zum Beispiel können Sie angeben, dass der Browser bestimmte Container erst rendert, wenn sie im Sichtbereich sind.

Die Eigenschaft {{cssxref("contain")}} ermöglicht es einem Autor, genau zu bestimmen, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf einzelne Container der Seite angewendet werden sollen. Dies ermöglicht es dem Browser, Layout, Stil, Rendering, Größe oder eine Kombination davon für einen begrenzten Teil des DOM neu zu berechnen.

```css
article {
  contain: content;
}
```

Die Eigenschaft {{cssxref("content-visibility")}} ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Reihe von Containments auf eine Reihe von Containern anzuwenden und zu spezifizieren, dass der Browser diese Container erst layouten und rendern soll, wenn sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, steht ebenfalls zur Verfügung. Sie ermöglicht es Ihnen, eine Platzhaltergröße für Container bereitzustellen, während sie den Effekten von Containment unterliegen. Dies bedeutet, dass die Container Platz einnehmen, auch wenn ihre Inhalte noch nicht gerendert wurden, was es dem Containment ermöglicht, seine Leistungszauberei ohne das Risiko eines Scrollleisten-Shifts und Ruckelns auszuüben, während Elemente gerendert werden und ins Blickfeld kommen. Dies verbessert die Qualität des Benutzererlebnisses, während die Inhalte geladen werden.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Siehe auch

- [CSS-Animationsperformance](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
