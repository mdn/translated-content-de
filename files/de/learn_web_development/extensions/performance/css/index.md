---
title: CSS-Leistungsoptimierung
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Beim Entwickeln einer Website müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite verarbeitet. Um Leistungsprobleme zu vermeiden, die CSS verursachen könnte, sollten Sie es optimieren. Beispielsweise sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "render-blocking")}} zu minimieren und die Anzahl der erforderlichen Neuberechnungen zu verringern. Dieser Artikel führt Sie durch wichtige Techniken zur CSS-Leistungsoptimierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website">client-seitige Web-Technologien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie die Auswirkungen von CSS auf die Leistung einer Website und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, ist: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Web-Projekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und kann Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Seite messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere Möglichkeiten, die Leistung zu messen, einige davon verwenden ausgeklügelte [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Tools wie die integrierten Browser-[Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) Tools verwendet, um zu sehen, welche Teile des Seitenelements lange Ladezeiten haben und optimiert werden müssen.

## Optimierung des Renderings

Browser folgen einem bestimmten Rendering-Pfad – das Malen erfolgt erst nach dem Layout, das nach der Erstellung des Renderbaums erfolgt, wofür sowohl DOM als auch CSSOM notwendig sind.

Eine ungestaltete Seite anzuzeigen und sie dann neu zu malen, nachdem die CSS-Stile analysiert wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund blockiert CSS das Rendering, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite anzeigen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um die CSSOM-Konstruktion zu optimieren und die Seitenleistung zu verbessern, können Sie je nach aktuellem Zustand Ihres CSS eines oder mehrere der folgenden Dinge tun:

- **Unnötige Stile entfernen**: Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte CSS-Regeln zu entfernen, die während der Entwicklung zu ihren Stylesheets hinzugefügt wurden und letztlich nicht verwendet wurden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layouts und Malens verwendet werden oder nicht, daher kann es die Seitenrenderung beschleunigen, ungenutzte zu entfernen. Wie [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem für eine große Codebasis und es gibt kein Allheilmittel, um ungenutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und vorsichtig und überlegt darüber zu sein, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: Wenn CSS modular gehalten wird, bedeutet das, dass CSS, das für das Laden der Seite nicht erforderlich ist, später geladen werden kann, was die anfängliche CSS-Render-Blocking- und Ladezeit reduziert. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

  ```html
  <!-- Loading and parsing styles.css is render-blocking -->
  <link rel="stylesheet" href="styles.css" />

  <!-- Loading and parsing print.css is not render-blocking -->
  <link rel="stylesheet" href="print.css" media="print" />

  <!-- Loading and parsing mobile.css is not render-blocking on large screens -->
  <link
    rel="stylesheet"
    href="mobile.css"
    media="screen and (max-width: 480px)" />
  ```

  Das obige Beispiel bietet drei Sets von Stilen – Standardstile, die immer geladen werden, Stile, die nur beim Drucken des Dokuments geladen werden, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blocking ist. Sie können dem Browser sagen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet trotzdem herunter, blockiert aber nicht das Rendering. Indem das CSS in mehrere Dateien aufgeteilt wird, ist die Haupt-Render-Blocking-Datei, in diesem Fall `styles.css`, viel kleiner, was die Blockierungszeit des Renderings reduziert.

- **Minifizieren und komprimieren Sie Ihr CSS**: Minifizierung beinhaltet das Entfernen aller Leerzeichen in der Datei, die nur der besseren Lesbarkeit für Menschen dienen, sobald der Code in Produktion geht. Sie können die Ladezeiten erheblich verkürzen, indem Sie Ihr CSS minifizieren. Minifizierung wird in der Regel als Teil eines Build-Prozesses durchgeführt (zum Beispiel minifizieren die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt für die Bereitstellung bereitstellen). Neben der Minifizierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, eine Komprimierung wie gzip bei Dateien verwendet, bevor sie bereitgestellt werden.

- **Vereinfachen der Selektoren**: Oft schreiben Menschen Selektoren, die komplizierter sind als nötig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Analysezeit für diese Selektoren. Beispielsweise:

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

  Weniger komplexe und spezifische Selektoren zu erstellen, ist auch für die Wartung gut. Es ist einfach zu verstehen, was einfache Selektoren tun, und es ist einfacher, Stile bei Bedarf später zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Stile nicht auf mehr Elemente anwenden, als nötig**: Ein häufiger Fehler ist es, Stile auf alle Elemente mit dem [Universalselektor](/de/docs/Web/CSS/Universal_selectors) anzuwenden, oder zumindest auf mehr Elemente als nötig. Diese Art von Styling kann die Leistung negativ beeinflussen, insbesondere auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie diese nicht überall anwenden müssen. Und leistungsfähige Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam verwendet werden. Wenn Sie sie überall verwenden, kann dies zu unerwarteten Verhalten führen.

- **Reduzieren Sie HTTP-Anfragen von Bildern mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, bei der mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Website verwenden möchten, in eine einzige Bilddatei platziert werden und dann verschiedene {{cssxref("background-position")}}-Werte verwendet werden, um das Bildstück anzuzeigen, das Sie an jedem Ort anzeigen möchten. Dies kann die Anzahl der benötigten HTTP-Anfragen zum Abrufen der Bilder erheblich reduzieren.

- **Wichtige Assets vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente zu Preloadern für kritische Ressourcen zu machen. Dies umfasst CSS-Dateien, Schriften und Bilder:

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
    media="(min-width: 601px)" />
  ```

  Mit `preload` lädt der Browser die referenzierten Ressourcen so schnell wie möglich herunter und macht sie im Browser-Cache verfügbar, damit sie bereitstehen, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich wichtige Ressourcen vorzulegen, auf die der Benutzer früh auf einer Seite trifft, um ein möglichst flüssiges Erlebnis zu gewährleisten. Beachten Sie, dass Sie auch `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, Interfaces schneller wirken lassen und den Benutzer das Gefühl geben, dass Fortschritte gemacht werden, während sie darauf warten, dass eine Seite geladen wird (zum Beispiel Lade-Spinner). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch natürlich mehr Verarbeitungsleistung, was die Leistung beeinträchtigen kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Kontrolle/Site-Präferenz anbieten, um Animationen abzuschalten, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkuleistung verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob Animationen überhaupt auf der Seite angewendet werden. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationen basierend auf den Animationseinstellungen des Benutzers auf Betriebssystemebene selektiv anzuzeigen oder nicht.

Für wesentliche DOM-Animationen sollten Sie, wenn möglich, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) anstelle von JavaScript-Animationen verwenden (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen).

### Auswahl von zu animierenden Eigenschaften

Die Animationsleistung hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften, wenn sie animiert werden, lösen einen {{Glossary("Reflow", "Reflow")}} (und daher auch ein {{Glossary("Repaint", "Repaint")}}) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Dimensionen eines Elements verändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border), und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element neu positionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left) und [`right`](/de/docs/Web/CSS/right).
- Die Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items), und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie eines Elements verändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind intelligent genug, um nur den geänderten Bereich des Dokuments neu zu malen, anstatt die gesamte Seite. Infolgedessen sind größere Animationen kostspieliger.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint verursachen. Dies umfasst:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animationen auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie erwägen, Animationsarbeiten vom Haupt-Thread auf die GPU des Geräts zu verlagern (auch als Compositing bezeichnet). Dies geschieht durch die Auswahl bestimmter Animationsarten, die der Browser automatisch an die GPU weiterleitet; Dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen Eigenschaften animiert, wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit [`will-change`](/de/docs/Web/CSS/will-change) angewendet (siehe den untenstehenden Abschnitt).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas), und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animationen auf der GPU können zu einer verbesserten Leistung führen, insbesondere auf mobilen Geräten. Das Verschieben von Animationen auf die GPU ist jedoch nicht immer so einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimieren von Elementänderungen mit `will-change`

Browser können Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Arten von Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell teure Arbeiten durchgeführt werden, bevor sie erforderlich sind. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt den Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird.

> **Note:** `will-change` ist als letztes Mittel gedacht, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries einschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er alle diese Styles analysiert hat, wird jedoch das Rendering von Stilen, die er nicht benötigt, nicht blockieren, wie bei den Druck-Stylesheets. Indem das CSS in mehrere Dateien basierend auf Media Queries aufgeteilt wird, können Sie das Render-Blocking während des Downloads ungenutzten CSS verhindern. Um einen nicht blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie Druck-Stile, in eine separate Datei, fügen Sie einen [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) zur HTML-Markierung hinzu, und fügen Sie eine Media Query hinzu, die in diesem Fall angibt, dass es sich um ein Druck-Stylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (max-width: 480px)" />
```

Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blocking ist. Geben Sie dem Browser an, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, weiß er, dass er es nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet trotzdem herunter, blockiert jedoch nicht das Rendern. Durch die Aufteilung des CSS in mehrere Dateien ist die Haupt-Render-Blocking-Datei, in diesem Fall `styles.css`, viel kleiner, was die Zeit reduziert, in der das Rendering blockiert wird.

## Verbesserung der Schriftleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webfont-Leistung.

Denken Sie generell sorgfältig über die Schriftarten nach, die Sie auf Ihrer Seite verwenden. Einige Font-Dateien können sehr groß sein (mehrere Megabyte). Obwohl es verlockend sein kann, viele Schriftarten für visuelle Akzente zu verwenden, kann dies die Ladezeit der Seite erheblich verlangsamen und dazu führen, dass Ihre Seite unordentlich aussieht. Sie benötigen wahrscheinlich nur etwa zwei oder drei Schriftarten, und Sie können mit weniger auskommen, wenn Sie sich entscheiden, [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriften laden

Denken Sie daran, dass eine Schriftart nur geladen wird, wenn sie tatsächlich mit der Eigenschaft [`font-family`](/de/docs/Web/CSS/font-family) auf ein Element angewendet wird, nicht, wenn sie zuerst mit der Regel [`@font-face`](/de/docs/Web/CSS/@font-face) referenziert wird:

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
  font-family: "Open Sans";
}
```

Es kann daher vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriftarten früh zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist wahrscheinlich vorteilhafter, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet versteckt ist und erst deutlich später im Analyseprozess erreicht wird. Es ist jedoch ein Kompromiss – Schriftdateien sind ziemlich groß, und wenn Sie zu viele von ihnen vorladen, können Sie andere Ressourcen verzögern.

Sie können auch in Betracht ziehen:

- Verwenden von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühzeitige Verbindung mit dem Schriftanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Verwenden der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Schriftartenladeverhalten über JavaScript anzupassen.

### Nur die benötigten Glyphen laden

Wenn Sie eine Schriftart für Fließtext wählen, ist es schwieriger, sicher zu sein, welche Glyphen verwendet werden, insbesondere wenn Sie mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen arbeiten.

Wenn Sie jedoch wissen, dass Sie nur einen bestimmten Satz von Glyphen verwenden werden (z.B. nur Glyphen für Überschriften oder spezifische Interpunktionszeichen), könnten Sie die Anzahl der Glyphen, die der Browser herunterladen muss, begrenzen. Dies kann durch das Erstellen einer Schriftdatei geschehen, die nur die erforderliche Teilmenge enthält. Ein Prozess, der als [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting) bezeichnet wird. Der `@font-face`-Deskriptor [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) kann dann verwendet werden, um zu spezifizieren, wann Ihre Teilmenge Schriftart verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schrift nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Festlegen des Schriftanzeigeverhaltens mit dem `font-display` Deskriptor

Angewendet auf die Regel `@font-face`, definiert der Deskriptor [`font-display`](/de/docs/Web/CSS/@font-face/font-display), wie Schriftdateien vom Browser geladen und angezeigt werden, sodass Text mit einer Ersatzschrift angezeigt werden kann, während eine Schrift lädt oder nicht geladen wird. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm zu haben, wobei der Kompromiss jedoch ein Blitz ungestylten Textes ist.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Neuberechnung von Stilen mit CSS-Containment

Durch die Verwendung der im [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul definierten Eigenschaften können Sie dem Browser anweisen, verschiedene Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendern einzelner Abschnitte. Zum Beispiel können Sie dem Browser mitteilen, bestimmte Container nicht zu rendern, bis sie im Sichtfeld sichtbar sind.

Die Eigenschaft {{cssxref("contain")}} ermöglicht es einem Autor, genau anzugeben, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) sie auf einzelne Container auf der Seite anwenden möchten. Dies ermöglicht es dem Browser, das Layout, den Stil, die Malerei, die Größe oder jede Kombination davon für einen begrenzten Teil des DOM neu zu berechnen.

```css
article {
  contain: content;
}
```

Die Eigenschaft {{cssxref("content-visibility")}} ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Menge an Containments auf eine Gruppe von Containern anzuwenden und zu spezifizieren, dass der Browser diese Container nicht layouten und rendern soll, bis sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, die es Ihnen ermöglicht, eine Platzhaltergröße für Container bereitzustellen, während sie den Auswirkungen des Containments unterliegen. Dies bedeutet, dass die Container Platz einnehmen, selbst wenn deren Inhalte noch nicht gerendert wurden, sodass das Containment seine Leistungswirkung entfalten kann, ohne das Risiko von Scrollbalken-Verschiebungen und Ruckeln, während Elemente gerendert werden und ins Sichtfeld kommen. Dies verbessert die Qualität der Benutzererfahrung beim Laden der Inhalte.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best Practices für Schriften](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
