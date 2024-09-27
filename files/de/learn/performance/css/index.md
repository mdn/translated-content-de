---
title: CSS-Leistungsoptimierung
slug: Learn/Performance/CSS
l10n:
  sourceCommit: 4bf03c104b1bca2068dbff927020e7f802c4af7e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

Wenn Sie eine Website entwickeln, sollten Sie berücksichtigen, wie der Browser mit dem CSS auf Ihrer Website umgeht. Um mögliche Leistungsprobleme, die durch CSS verursacht werden könnten, zu mindern, sollten Sie es optimieren. Beispielsweise sollten Sie das CSS optimieren, um [render-blocking](/de/docs/Glossary/Render_blocking) zu minimieren und die Anzahl der erforderlichen Reflows zu verringern. Dieser Artikel führt Sie durch wichtige Techniken zur CSS-Leistungsoptimierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und grundlegende Kenntnisse der
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um zu lernen, welchen Einfluss CSS auf die Leistung einer Website hat
        und wie Sie Ihr CSS optimieren, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, lautet: "Was muss ich optimieren?" Einige der im Folgenden besprochenen Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Webseite messen](/de/docs/Learn/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, wobei einige anspruchsvolle [Performance APIs](/de/docs/Web/API/Performance_API) erfordern. Der beste Weg, um anzufangen, ist jedoch, sich mit Tools wie den integrierten Browser- [Netzwerk-](/de/docs/Learn/Performance/Measuring_performance#network_monitor_tools) und [Leistungs-](/de/docs/Learn/Performance/Measuring_performance#performance_monitor_tools) Werkzeuge vertraut zu machen, um herauszufinden, welche Teile des Seitenladevorgangs viel Zeit in Anspruch nehmen und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem bestimmten Renderingpfad—das Rendern erfolgt erst nach dem Layout, das wiederum nach der Erstellung des Renderbaums erfolgt, der sowohl die DOM- als auch die CSSOM-Bäume benötigt.

Nutzern eine ungestylte Seite anzuzeigen und sie dann neu zu zeichnen, nachdem die CSS-Stile geparst wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund blockiert CSS das Rendern, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite zeichnen, nachdem er das CSS heruntergeladen und das [CSS-Objektmodell (CSSOM)](/de/docs/Glossary/CSSOM) erstellt hat.

Um den Aufbau der CSSOM zu optimieren und die Seitenleistung zu verbessern, können Sie basierend auf dem aktuellen Stand Ihres CSS eine oder mehrere der folgenden Maßnahmen ergreifen:

- **Unnötige Stile entfernen**: Dies mag offensichtlich erscheinen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte CSS-Regeln aus ihren Stylesheets zu entfernen, die während der Entwicklung hinzugefügt wurden und letztendlich nicht verwendet werden. Alle Stile werden geparst, unabhängig davon, ob sie während der Layout- und Zeichnungsphase verwendet werden oder nicht, sodass das Entfernen ungenutzter Stile das Seitenrendering beschleunigen kann. Wie in [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammengefasst, ist dies ein schwieriges Problem für einen großen Codebestand, und es gibt keine Wunderlösung, um ungenutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen sich die Mühe machen, Ihr CSS modular zu halten und vorsichtig und sorgfältig zu sein, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: Wenn man CSS modular hält, bedeutet das, dass CSS, das beim Laden der Seite nicht erforderlich ist, später geladen werden kann, wodurch anfängliche CSS-Render-Blocking- und Ladezeiten reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Sets von Stilen — Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet render-blockierend ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet trotzdem herunter, blockiert jedoch nicht das Rendering. Durch das Trennen des CSS in mehrere Dateien wird die Hauptdatei, die das Rendering blockiert, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit, in der das Rendering blockiert wird, reduziert wird.

- **Ihr CSS minifizieren und komprimieren**: Minifizierung bedeutet, dass alle Leerzeichen, die nur zur besseren Lesbarkeit für Menschen vorhanden sind, aus der Datei entfernt werden, sobald der Code in die Produktion geht. Durch die Minifizierung Ihres CSS können Ladezeiten erheblich reduziert werden. Minifizierung wird im Allgemeinen als Teil eines Build-Prozesses durchgeführt (zum Beispiel minifizieren die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt zum Deployment erstellen). Zusätzlich zur Minifizierung sollten Sie sicherstellen, dass der Server, auf dem Ihre Website gehostet wird, eine Kompression wie gzip für Dateien verwendet, bevor sie bereitgestellt werden.

- **Vereinfachen der Selektoren**: Oft schreiben Leute Selektoren, die komplexer sind als erforderlich, um die benötigten Styles anzuwenden. Dies erhöht nicht nur die Dateigröße, sondern auch die Zeit zum Parsen dieser Selektoren. Zum Beispiel:

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

  Weniger komplexe und spezifische Selektoren zu verwenden, ist auch gut für die Wartung. Es ist einfach zu verstehen, was einfache Selektoren bewirken, und es ist einfach, Styles später umzuschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2) sind.

- **Keine Stile auf mehr Elemente anwenden als nötig**: Ein häufiger Fehler ist, Stile auf alle Elemente mit dem [Universalselektor](/de/docs/Web/CSS/Universal_selectors) anzuwenden, oder zumindest auf mehr Elemente als nötig. Diese Art der Stilzuweisung kann sich negativ auf die Leistung auswirken, insbesondere auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Tools wie [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) sollten sparsam eingesetzt werden. Ihre allgegenwärtige Verwendung kann zu unerwartetem Verhalten führen.

- **Die Anzahl der HTTP-Anfragen für Bilder mit CSS Sprites reduzieren**: [CSS Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, bei der mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Website verwenden möchten, in eine einzige Bilddatei gebracht werden, und dann werden unterschiedliche {{cssxref("background-position")}}-Werte verwendet, um den Teil des Bildes anzuzeigen, den Sie an verschiedenen Stellen zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die zum Abrufen der Bilder erforderlich sind, erheblich reduzieren.

- **Wichtige Assets vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Vorlader für kritische Assets zu verwandeln. Dies umfasst CSS-Dateien, Schriftarten und Bilder:

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

  Mit `preload` lädt der Browser die referenzierten Ressourcen so schnell wie möglich und stellt sie im Browser-Cache bereit, sodass sie schneller verfügbar sind, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, ressourcenreiche von hoher Priorität, die der Benutzer früh auf einer Seite sieht, vorzuladen, damit die Erfahrung so reibungslos wie möglich ist. Beachten Sie, wie Sie auch `media`-Attribute verwenden können, um responsive Vorlader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Animationen handhaben

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen reaktionsschneller erscheinen lassen und den Benutzern das Gefühl geben, dass Fortschritte gemacht werden, wenn sie auf das Laden einer Seite warten (zum Beispiel Lade-Spinnersymbole). Aber größere Animationen und eine höhere Anzahl von Animationen erfordern natürlich mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Kontrolle oder Website-Einstellung zur Verfügung stellen, um Animationen auszuschalten, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkuleistung verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob Animation überhaupt auf die Seite angewendet wird. Es gibt auch eine Media-Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationsstile selektiv basierend auf den Betriebssystem-Präferenzen eines Benutzers für Animation bereitzustellen oder nicht.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wo möglich, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen).

### Zu animierende Eigenschaften auswählen

Die Animationsleistung hängt stark davon ab, welche Eigenschaften Sie animieren. Einige Eigenschaften, wenn sie animiert werden, lösen eine [Reflow](/de/docs/Glossary/Reflow) (und damit auch eine [Repaint](/de/docs/Glossary/Repaint)) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Dimensionen eines Elements verändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border), und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element neu positionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left), und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements verändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items), und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements verändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind klug genug, um nur den geänderten Bereich des Dokuments neu zu zeichnen, anstatt die gesamte Seite. Infolgedessen sind größere Animationen kostspieliger.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Neuanstrich verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Auf der GPU animieren

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, Animationsarbeiten von der Hauptausführung auf die GPU des Geräts zu verlagern (auch als Komposition bezeichnet). Dies geschieht, indem bestimmte Arten von Animationen gewählt werden, die der Browser automatisch an die GPU weiterleitet; dazu gehören:

- 3D-Transform-Animationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/will-change) (siehe den Abschnitt unten).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Element/video), [`<canvas>`](/de/docs/Web/HTML/Element/canvas), und [`<iframe>`](/de/docs/Web/HTML/Element/iframe).

Animationen auf der GPU können zu einer verbesserten Leistung führen, insbesondere auf Mobilgeräten. Jedoch ist das Verschieben von Animationen auf die GPU nicht immer einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimieren von Elementänderungen mit `will-change`

Browser können Optimierungen einstellen, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite verbessern, indem potenziell aufwändige Arbeiten durchgeführt werden, bevor sie erforderlich sind. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt Browsern Hinweise darauf, wie sich ein Element voraussichtlich ändern wird.

> **Note:** `will-change` ist als letztes Mittel gedacht, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendern, bis er all diese Stile parst, blockiert jedoch nicht das Rendern bei Stilen, von denen er weiß, dass sie nicht verwendet werden, wie zum Beispiel Druck-Stylesheets. Indem Sie das CSS basierend auf Media Queries in mehrere Dateien aufteilen, können Sie das Render-Blocking während des Downloads von nicht verwendetem CSS verhindern. Um einen nicht blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile wie Druckstile in eine separate Datei, fügen Sie einen [`<link>`](/de/docs/Web/HTML/Element/link) in das HTML-Markup ein, und fügen Sie eine Media Query hinzu, die in diesem Fall angibt, dass es sich um ein Druck-Stylesheet handelt.

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

Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet render-blockierend ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, weiß er, dass er es nur für ein bestimmtes Szenario anwenden muss, lädt das Stylesheet herunter, blockiert jedoch nicht das Rendern. Durch das Trennen des CSS in mehrere Dateien wird die Hauptdatei, die von Render-Blocking betroffen ist, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit reduziert wird, in der das Rendering blockiert wird.

## Verbesserung der Schrift-Performance

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Leistung von Web-Schriften.

Im Allgemeinen sollten Sie sorgfältig über die Schriften nachdenken, die Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Während es verlockend sein kann, viele Schriften für visuelle Aufregung zu verwenden, kann dies das Laden der Seite erheblich verlangsamen und dazu führen, dass Ihre Website unübersichtlich aussieht. Sie benötigen wahrscheinlich nur zwei oder drei Schriften, und Sie können mit weniger auskommen, wenn Sie sich entscheiden, nur [websichere Schriften](/de/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftladen

Beachten Sie, dass eine Schriftart nur dann geladen wird, wenn sie tatsächlich auf ein Element mit der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft angewendet wird, nicht wenn sie erstmals mit der [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel referenziert wird:

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

Es kann daher vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriften früh zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist wahrscheinlicher von Nutzen, wenn Ihre `font-family`-Deklaration innerhalb eines großen externen Stylesheets verborgen ist und nicht deutlich später im Parsing-Prozess erreicht wird. Es ist jedoch ein Abwägung — Schriftdateien sind ziemlich groß, und wenn Sie zu viele davon vorladen, können Sie andere Ressourcen verzögern.

Sie können auch erwägen:

- Die Verwendung von [`rel="preconnect"`](/de/docs/Web/HTML/Attributes/rel/preconnect), um eine frühe Verbindung mit dem Schriftanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Die Verwendung der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Ladeverhalten der Schriftart über JavaScript anzupassen.

### Nur die benötigten Glyphen laden

Wenn Sie eine Schriftart für Fließtext auswählen, ist es schwieriger sicher zu sein, welche Glyphen verwendet werden, insbesondere wenn Sie mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen arbeiten.

Wenn Sie jedoch wissen, dass Sie ein bestimmtes Set von Glyphen verwenden werden (zum Beispiel Glyphen für Überschriften oder bestimmte Interpunktionszeichen), könnten Sie die Anzahl der Glyphen, die der Browser herunterladen muss, einschränken. Dies kann erreicht werden, indem eine Schriftdatei erstellt wird, die nur das erforderliche Unterset enthält. Ein Prozess, der als [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting) bezeichnet wird. Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range)-Descriptor bei `@font-face` kann dann verwendet werden, um anzugeben, wann Ihre Untergruppen-Schrift verwendet wird. Wenn die Seite keinen Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Schriftanzeigeverhalten mit dem `font-display`-Deskriptor definieren

Auf die `@font-face`-Regel angewandt, definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display)-Deskriptor, wie Schriftdateien geladen und vom Browser angezeigt werden, wobei text mit einer Ersatzschrift erscheint, während eine Schrift geladen wird oder das Laden scheitert. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, statt einen leeren Bildschirm anzuzeigen, mit dem Kompromiss eines ungestylten Textblitzes.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Styling-Neuberechnung mit CSS-Einschränkung

Durch die Nutzung der im [CSS Containment](/de/docs/Web/CSS/CSS_containment)-Modul definierten Eigenschaften können Sie dem Browser mitteilen, verschiedene Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendern einzelner Abschnitte. So können Sie dem Browser beispielsweise anweisen, bestimmte Container erst zu rendern, wenn sie im Viewport sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft ermöglicht es einem Autor, genau anzugeben, welche [Einschränkungstypen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf individuelle Container auf der Seite angewendet werden sollen. Dadurch kann der Browser Layout, Stil, Malerei, Größe oder eine Kombination davon für einen begrenzten Teil des DOM neu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Menge von Einschränkungen auf eine Reihe von Containern anzuwenden und anzugeben, dass der Browser diese Container erst dann layouten und rendern soll, wenn sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar und ermöglicht es Ihnen, eine Platzhaltergröße für Container bereitzustellen, während sie den Einschränkungen unterliegen. Dies bedeutet, dass die Container Platz einnehmen, auch wenn ihr Inhalt noch nicht gerendert wurde, sodass die Einschränkung ihre Leistungsverbesserungen durchführen kann, ohne das Risiko von Scrollbalkenverschiebungen und Ruckeln, wenn Elemente gerendert werden und in Sicht kommen. Dies verbessert die Qualität der Benutzererfahrung, während der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/CSS_JavaScript_animation_performance)
- [Best Practices for Fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) auf web.dev (2022)
