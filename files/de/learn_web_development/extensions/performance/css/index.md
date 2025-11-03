---
title: CSS-Leistungsoptimierung
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Beim Entwickeln einer Website müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite verarbeitet. Um potenzielle Leistungsprobleme, die durch CSS verursacht werden könnten, zu mildern, sollten Sie es optimieren. Zum Beispiel sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "Render-Blocking")}} zu reduzieren und die Anzahl der erforderlichen Reflows zu minimieren. Dieser Artikel führt Sie durch wichtige Techniken zur Optimierung der CSS-Leistung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundelegende Software installiert</a
        > und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um mehr über die Auswirkungen von CSS auf die Website-Leistung zu erfahren
        und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihr CSS zu optimieren, ist "Was muss ich optimieren?". Einige der im Folgenden besprochenen Tipps und Techniken sind gute Praktiken, die fast jedem Webprojekt zugutekommen, während einige nur in bestimmten Situationen benötigt werden. Es ist wahrscheinlich unnötig, alle diese Techniken überall anzuwenden, und könnte Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige beinhalten fortgeschrittene [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Werkzeuge wie integrierte Browser- [Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) verwendet, um zu sehen, welche Teile des Seitenladens viel Zeit in Anspruch nehmen und optimiert werden müssen.

## Optimierung des Renderns

Browser folgen einem spezifischen Rendering-Pfad – das Zeichnen erfolgt erst nach dem Layout, welches nach dem Erstellen des Rendering-Baums erfolgt, der sowohl die DOM- als auch die CSSOM-Bäume erfordert.

Benutzern eine ungestylte Seite zu zeigen und sie dann nach dem Parsen der CSS-Stile neu zu malen, wäre eine schlechte Benutzererfahrung. Aus diesem Grund ist CSS renderblockierend, bis der Browser feststellt, dass das CSS benötigt wird. Der Browser kann die Seite malen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS Object Model (CSSOM)")}} erstellt hat.

Um die Konstruktion der CSSOM zu optimieren und die Seitenleistung zu verbessern, können Sie abhängig vom aktuellen Status Ihres CSS eines oder mehrere der folgenden Dinge tun:

- **Unnötige Stile entfernen**: Das mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, nicht verwendete CSS-Regeln in ihren Stylesheets zu bereinigen, die während der Entwicklung hinzugefügt wurden und letztendlich nicht verwendet wurden. Alle Stile werden geparst, egal ob sie während des Layouts und Zeichnens verwendet werden oder nicht, deshalb kann es das Rendering der Seite beschleunigen, wenn unnötige entfernt werden. Wie [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem, das für eine große Codebasis zu lösen ist, und es gibt keine magische Lösung, um nicht verwendetes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und sorgfältig zu sein, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: Wenn Sie CSS modular halten, bedeutet das, dass CSS, das beim Laden der Seite nicht benötigt wird, später geladen werden kann, wodurch anfängliches CSS-Renderblocking und die Ladezeiten verringert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel stellt drei Sets von Stilen bereit – Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet renderblockierend ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet trotzdem herunter, blockiert aber nicht das Rendern. Durch die Aufteilung des CSS in mehrere Dateien ist die Hauptdatei für das Render-Blocking, in diesem Fall `styles.css`, viel kleiner, was die Zeit verringert, in der das Rendering blockiert ist.

- **CSS minifizieren und komprimieren**: Minifizierung bedeutet, alle Leerzeichen in der Datei zu entfernen, die nur für die menschliche Lesbarkeit dort sind, sobald der Code in die Produktion geht. Sie können Ladezeiten erheblich reduzieren, indem Sie Ihr CSS minifizieren. Minifizierung wird im Allgemeinen als Teil eines Build-Prozesses durchgeführt (zum Beispiel minifizieren die meisten JavaScript-Frameworks Code, wenn Sie ein Projekt für die Bereitstellung fertigstellen). Zusätzlich zur Minifizierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, Kompression wie gzip auf Dateien verwendet, bevor sie bereitgestellt werden.

- **Selektoren vereinfachen**: Oftmals schreiben Menschen Selektoren, die komplexer sind als nötig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Parsing-Zeit für diese Selektoren. Zum Beispiel:

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

  Weniger komplexe und spezifische Selektoren zu verwenden, ist auch gut für die Wartung. Es ist einfach zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile später bei Bedarf zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Keine Stile auf mehr Elemente anwenden als nötig**: Ein häufiger Fehler ist es, Stile mit dem [Universal-Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) auf alle Elemente anzuwenden oder zumindest auf mehr Elemente als nötig. Diese Art des Stylings kann die Leistung negativ beeinflussen, insbesondere auf größeren Seiten.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam eingesetzt werden. Eine allzu häufige Verwendung kann zu unerwartetem Verhalten führen.

- **HTTP-Anfragen für Bilder durch CSS-Sprites reduzieren**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, bei der mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Website verwenden möchten, in einer einzigen Bilddatei platziert werden und dann verschiedene {{cssxref("background-position")}} Werte verwendet werden, um das Stück des Bildes anzuzeigen, das Sie an jeder Stelle zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die benötigt werden, um die Bilder abzurufen, erheblich reduzieren.

- **Wichtige Ressourcen vorab laden**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}} Elemente in Vorab-Lader für kritische Ressourcen zu verwandeln. Dies umfasst CSS-Dateien, Schriftarten und Bilder:

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

  Mit `preload` lädt der Browser die referenzierten Ressourcen so schnell wie möglich und macht sie im Browser-Cache verfügbar, sodass sie schneller zur Verfügung stehen, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, Ressourcen mit hoher Priorität vorab zu laden, denen der Benutzer frühzeitig auf einer Seite begegnet, um die Erfahrung so reibungslos wie möglich zu gestalten. Beachten Sie, dass Sie auch `media`-Attribute verwenden können, um responsive Vorab-Lader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Benutzeroberflächen flüssiger wirken lassen und Benutzern das Gefühl geben, dass Fortschritte erzielt werden, wenn sie auf das Laden einer Seite warten (Ladespinner zum Beispiel). Allerdings erfordern größere Animationen und eine höhere Anzahl von Animationen natürlich mehr Verarbeitungskapazität, was die Leistung beeinträchtigen kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten Benutzern auch eine Steuerung/Voreinstellung auf Ihrer Website zur Verfügung stellen, um Animationen zu deaktivieren, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkuleistung verwenden. Sie könnten JavaScript verwenden, um zu steuern, ob die Animation von vornherein auf die Seite angewendet wird. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationen selektiv basierend auf den Betriebssystempräferenzen eines Benutzers für Animation zu servieren oder nicht.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wann immer möglich, anstatt JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen).

### Auswahl der zu animierenden Eigenschaften

Die Animationsleistung hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften lösen bei der Animation ein {{Glossary("Reflow", "Reflow")}} (und daher auch ein {{Glossary("Repaint", "Repaint")}}) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Dimensionen eines Elements verändern, wie [`width`](/de/docs/Web/CSS/Reference/Properties/width), [`height`](/de/docs/Web/CSS/Reference/Properties/height), [`border`](/de/docs/Web/CSS/Reference/Properties/border) und [`padding`](/de/docs/Web/CSS/Reference/Properties/padding).
- Ein Element neu positionieren, wie [`margin`](/de/docs/Web/CSS/Reference/Properties/margin), [`top`](/de/docs/Web/CSS/Reference/Properties/top), [`bottom`](/de/docs/Web/CSS/Reference/Properties/bottom), [`left`](/de/docs/Web/CSS/Reference/Properties/left) und [`right`](/de/docs/Web/CSS/Reference/Properties/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/Reference/Properties/align-content), [`align-items`](/de/docs/Web/CSS/Reference/Properties/align-items) und [`flex`](/de/docs/Web/CSS/Reference/Properties/flex).
- Visuelle Effekte hinzufügen, die die Elementgeometrie verändern, wie [`box-shadow`](/de/docs/Web/CSS/Reference/Properties/box-shadow).

Moderne Browser sind schlau genug, nur den geänderten Bereich des Dokuments neu zu malen, anstatt die gesamte Seite. Infolgedessen sind größere Animationen kostspieliger.

Wo immer möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity)
- [`filter`](/de/docs/Web/CSS/Reference/Properties/filter)

### Animieren auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, die Animationsarbeit vom Haupt-Thread auf die GPU des Geräts zu verlagern (auch als Compositing bezeichnet). Dies wird durch die Auswahl bestimmter Animationstypen erreicht, die der Browser automatisch an die GPU zur Bearbeitung senden kann, darunter:

- 3D-Transform-Animationen wie [`transform: translateZ()`](/de/docs/Web/CSS/Reference/Properties/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen Eigenschaften, die animiert werden, wie [`position: fixed`](/de/docs/Web/CSS/Reference/Properties/position).
- Elemente, die mit [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) versehen sind (siehe den Abschnitt weiter unten).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animation auf der GPU kann zu einer verbesserten Leistung führen, insbesondere auf mobilen Geräten. Das Verschieben von Animationen zur GPU ist jedoch nicht immer so einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimieren von Elementänderungen mit `will-change`

Browser können Optimierungen vornehmen, bevor ein Element tatsächlich geändert wird. Diese Arten von Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell teure Operationen durchgeführt werden, bevor sie benötigt werden. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) gibt den Browsern Hinweise darauf, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE]
> `will-change` ist als letztes Mittel gedacht, um mit existierenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme im Voraus zu antizipieren.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimieren für Renderblocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Renderpfad zu optimieren. Der Browser blockiert das Rendern, bis er alle diese Stile geparst hat, wird jedoch nicht das Rendern auf Stile blockieren, von denen er weiß, dass sie nicht verwendet werden, wie z.B. die Druck-Stylesheets. Indem Sie das CSS in mehrere Dateien basierend auf Media Queries aufteilen, können Sie das Render-Blocking während des Herunterladens von nicht verwendetem CSS verhindern. Um einen nichtblockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie Druckstile, in eine separate Datei, fügen Sie einen [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) in das HTML-Markup ein und fügen Sie eine Media Query hinzu, die in diesem Fall angibt, dass es sich um ein Druck-Stylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet renderblockierend ist. Sagen Sie dem Browser, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, weiß er, dass es nur in einem bestimmten Szenario angewendet werden muss, er lädt das Stylesheet trotzdem herunter, blockiert aber nicht das Rendern. Indem Sie das CSS in mehrere Dateien aufteilen, ist die Hauptdatei für das Render-Blocking, in diesem Fall `styles.css`, viel kleiner, was die Zeit verkürzt, in der das Rendering blockiert ist.

## Verbesserung der Schriftartleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Web-Schriftartleistung.

Im Allgemeinen sollten Sie sorgfältig darüber nachdenken, welche Schriftarten Sie auf Ihrer Website verwenden. Einige Schriftartdateien können sehr groß sein (mehrere Megabyte). Während es verlockend sein kann, viele Schriftarten für visuelle Spannung zu verwenden, kann dies das Laden der Seite erheblich verlangsamen und dazu führen, dass Ihre Website wie ein Durcheinander aussieht. Sie benötigen wahrscheinlich nur etwa zwei oder drei Schriftarten und Sie können mit weniger auskommen, wenn Sie sich entscheiden, [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftart-Laden

Bedenken Sie, dass eine Schriftart nur geladen wird, wenn sie tatsächlich mit der [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family) Eigenschaft auf ein Element angewendet wird, nicht, wenn sie zuerst mit der [`@font-face`](/de/docs/Web/CSS/@font-face) Anweisung referenziert wird:

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

Es kann daher von Vorteil sein, `rel="preload"` zu verwenden, um wichtige Schriftarten früh zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist eher von Vorteil, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet versteckt ist und bei weitem später im Parsing-Prozess erreicht wird. Es ist jedoch ein Kompromiss – Schriftartdateien können ziemlich groß sein, und wenn Sie zu viele davon vorab laden, könnten Sie andere Ressourcen verzögern.

Sie können auch in Betracht ziehen:

- Das Verwenden von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühzeitige Verbindung mit dem Schriftartenanbieter herzustellen. Weitere Informationen finden Sie unter [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins).
- Die Verwendung der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Ladeverhalten von Schriftarten über JavaScript anzupassen.

### Nur die benötigten Glyphen laden

Wenn Sie eine Schriftart für Fließtext wählen, ist es schwieriger, sicher zu sein, welche Glyphen darin verwendet werden, insbesondere wenn Sie mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen zu tun haben.

Wenn Sie jedoch wissen, dass Sie nur einen bestimmten Satz von Glyphen verwenden werden (z. B. Glyphen für Überschriften oder bestimmte Satzzeichen), könnten Sie die Anzahl der Glyphen beschränken, die der Browser herunterladen muss. Dies kann erreicht werden, indem eine Schriftartdatei erstellt wird, die nur den erforderlichen Teil enthält. Ein Prozess namens [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting). Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) `@font-face` Deskriptor kann dann verwendet werden, um anzugeben, wann Ihre Untermenge verwendet wird. Wenn die Seite keinen Charakter in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Anzeigeverhalten von Schriftarten mit dem `font-display` Deskriptor definieren

Angewendet auf die `@font-face` Regel definieren der [`font-display`](/de/docs/Web/CSS/@font-face/font-display) Deskriptor, wie Schriftartdateien geladen und vom Browser angezeigt werden, sodass Text mit einer Ersatzschriftart erscheint, während eine Schriftart geladen oder nicht geladen wird. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm zu haben, mit einem Kompromiss, der in einem Blitzen von ungestyltem Text besteht.

```css
@font-face {
  font-family: "someFont";
  src: url("/path/to/fonts/someFont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}
```

## Optimieren der Neuberechnung von Stilen mit CSS-Containment

Durch die Verwendung der in dem [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul definierten Eigenschaften, können Sie den Browser anweisen, verschiedene Teile einer Seite zu isolieren und ihr Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendern einzelner Abschnitte. Zum Beispiel können Sie dem Browser angeben, bestimmte Container nicht zu rendern, bis sie im Ansichtsfenster sichtbar sind.

Die {{cssxref("contain")}} Eigenschaft erlaubt es einem Autor, genau anzugeben, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) sie auf individuelle Container auf der Seite anwenden möchten. Dadurch kann der Browser Layout, Stil, Malen, Größe oder eine Kombination davon für einen begrenzten Teil des DOM neu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}} Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Set von Containments auf eine Gruppe von Containern anzuwenden und anzugeben, dass der Browser diese Container nicht bereitstellen und rendern soll, bis sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, die es Ihnen ermöglicht, eine Platzhaltergröße für Container anzugeben, während sie den Effekten der Containment ausgesetzt sind. Dies bedeutet, dass die Container Platz einnehmen, auch wenn ihre Inhalte noch nicht gerendert wurden, sodass das Containment seine Leistungsfähigkeiten entfalten kann, ohne dass das Risiko besteht, dass die Rollleisten und Wackelbalken bei der Darstellung und Anzeige von Elementen ihre Position ändern. Dies verbessert die Qualität der Benutzererfahrung, während der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Optimieren von `:has()` Selektoren

Die {{cssxref(":has", ":has()")}} Pseudo-Klasse ermöglicht leistungsstarke Auswahlmöglichkeiten, erfordert jedoch eine sorgfältige Nutzung, um Leistungsengpässe zu vermeiden. Für detaillierte Anleitungen zur Erstellung effizienter `:has()` Selektoren siehe [Leistungsüberlegungen in der `:has()` Referenzdokumentation](/de/docs/Web/CSS/Reference/Selectors/:has#performance_considerations).

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best Practices für Schriftarten](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Renderleistung verbessert](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
