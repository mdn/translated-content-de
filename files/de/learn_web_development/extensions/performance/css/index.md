---
title: CSS-Performanceoptimierung
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Bei der Entwicklung einer Website sollten Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite verarbeitet. Um jegliche Performance-Probleme zu mildern, die durch CSS verursacht werden könnten, sollten Sie es optimieren. Zum Beispiel sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "Render-Blocking")}} zu reduzieren und die Anzahl der erforderlichen Reflows zu minimieren. Dieser Artikel führt Sie durch wichtige CSS-Performance-Optimierungstechniken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a> und grundlegende Kenntnisse über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website">Client-seitige Webtechnologien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um über die Auswirkungen von CSS auf die Website-Performance zu lernen
        und wie Sie Ihr CSS optimieren können, um die Performance zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, ist "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen erforderlich sind. Der Versuch, alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und kann eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Performance-Optimierungen tatsächlich in jedem Projekt benötigt werden.

Dazu müssen Sie die [Performance Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Arten, die Performance zu messen, einige davon erfordern komplexe [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um zu beginnen, ist jedoch, zu lernen, wie man Tools wie die eingebauten [Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) Tools des Browsers verwendet, um zu sehen, welche Teile des Seitenladevorgangs lange dauern und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem bestimmten Rendering-Pfad – das Malen erfolgt erst nach dem Layout, das wiederum nach Erstellung des Renderbaums stattfindet, wofür sowohl der DOM als auch der CSSOM-Baum erforderlich sind.

Den Benutzern eine ungestylte Seite zu zeigen und sie dann neu zu malen, nachdem die CSS-Stile geparst wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund blockiert CSS das Rendering, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite malen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um die CSSOM-Erstellung zu optimieren und die Seitenleistung zu verbessern, können Sie je nach aktuellem Zustand Ihres CSS eines oder mehrere der folgenden Dinge tun:

- **Unnötige Stile entfernen**: Das mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, nicht verwendete CSS-Regeln zu bereinigen, die beim Entwickeln zu ihren Stylesheets hinzugefügt wurden und nicht verwendet werden. Alle Stile werden geparst, egal ob sie beim Layout und Malen benötigt werden oder nicht, daher kann es die Seitenrendering beschleunigen, nicht verwendete Stile zu entfernen. Wie [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem, das für eine große Codebasis zu lösen ist, und es gibt keine magische Lösung, um nicht verwendetes CSS zuverlässig zu finden und zu entfernen. Sie müssen die mühsame Arbeit leisten, Ihr CSS modular zu halten und sorgfältig und gezielt hinzuzufügen und zu entfernen.

- **CSS in separate Module aufteilen**: CSS modular zu halten bedeutet, dass CSS, das beim Seitenladen nicht benötigt wird, später geladen werden kann, wodurch initiales CSS-Render-Blocking und Ladezeiten reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien zu unterteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Satz von Stilen – Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet Render-Blocking ist. Sie können dem Browser mitteilen, wann ein Stylesheet mit einem `media`-Attribut gerendert werden soll, das eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) enthält. Wenn der Browser ein Stylesheet sieht, das es nur in einem bestimmten Szenario anwenden muss, lädt es das Stylesheet trotzdem herunter, blockiert aber nicht. Durch die Aufteilung des CSS in mehrere Dateien ist die Hauptdatei, die das Render-Blockieren verursacht, in diesem Fall `styles.css`, viel kleiner, was die Zeit, in der das Rendern blockiert wird, verkürzt.

- **Ihr CSS komprimieren und minimieren**: Minimierung bedeutet, dass alle Leerzeichen entfernt werden, die im Produktionscode nur der menschlichen Lesbarkeit dienen. Sie können die Ladezeiten erheblich reduzieren, indem Sie Ihr CSS minimieren. Minimierung wird normalerweise als Teil eines Build-Prozesses durchgeführt (zum Beispiel minimieren die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt für die Bereitstellung vorbereiten). Zusätzlich zur Minimierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, Komprimierung wie gzip verwendet, bevor Dateien bereitgestellt werden.

- **Selektoren vereinfachen**: Häufig schreiben Leute Selektoren, die komplexer sind als nötig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Parse-Zeit für diese Selektoren. Zum Beispiel:

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

  Weniger komplexe und spezifische Selektoren zu verwenden, ist auch gut für die Wartung. Es ist einfach zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile bei Bedarf später zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Keine Stile auf mehr Elemente anwenden als nötig**: Ein häufiger Fehler besteht darin, Stile auf alle Elemente mit dem [Universalselektor](/de/docs/Web/CSS/Universal_selectors) anzuwenden oder zumindest auf mehr Elemente, als benötigt werden. Diese Art von Styling kann die Leistung negativ beeinflussen, insbesondere auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Tools wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) müssen sparsam eingesetzt werden. Sie überall zu benutzen, kann alle möglichen unerwarteten Verhaltensweisen verursachen.

- **Reduzieren Sie HTTP-Anfragen für Bilder mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, bei der mehrere kleine Bilder (wie Icons), die Sie auf Ihrer Site verwenden möchten, in einer einzigen Bilddatei platziert werden. Anschließend werden verschiedene {{cssxref("background-position")}}-Werte verwendet, um das Bildsegment anzuzeigen, das Sie an jeder Stelle zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die zum Abrufen der Bilder notwendig sind, drastisch reduzieren.

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
    media="(min-width: 601px)" />
  ```

  Mit `preload` lädt der Browser die referenzierten Ressourcen so schnell wie möglich herunter und macht sie im Browser-Cache verfügbar, sodass sie früher verwendet werden können, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, hochpriorisierte Ressourcen vorzuladen, denen der Benutzer frühzeitig auf einer Seite begegnen wird, damit das Erlebnis so reibungslos wie möglich ist. Beachten Sie, wie Sie `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Animationshandhabung

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen schneller wirken lassen und Benutzern das Gefühl geben, dass Fortschritte gemacht werden, wenn sie auf das Laden einer Seite warten (zum Beispiel Ladeeinheiten). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch natürlich mehr Verarbeitungskraft, was die Leistung beeinträchtigen kann.

Die einfachste Empfehlung ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Steuerung/Site-Voreinstellung zur Verfügung stellen, um Animationen zu deaktivieren, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkukapazität verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob Animation überhaupt angewendet wird. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animation styles selektiv basierend auf den OS-Präferenzen eines Benutzers für Animation zu liefern oder nicht.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wo möglich, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen).

### Auswahl von Eigenschaften für Animationen

Die Leistung von Animationen hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften lösen beim Animieren einen {{Glossary("Reflow", "Reflow")}} (und daher auch einen {{Glossary("Repaint", "Repaint")}}) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Dimensionen eines Elements ändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element neu positionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left) und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items) und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind klug genug, nur den geänderten Bereich des Dokuments neu zu malen, anstatt die gesamte Seite. Daher sind größere Animationen teurer.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animation auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, die Animationsarbeit vom Hauptthread auf die GPU des Geräts zu verlagern (auch als Komposition bezeichnet). Dies wird erreicht, indem spezifische Animationstypen ausgewählt werden, die der Browser automatisch an die GPU zum Ausführen sendet; dazu gehören:

- 3D-Transform-Animationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/will-change) (siehe den Abschnitt unten).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animation auf der GPU kann zu verbesserten Leistungen führen, insbesondere auf Mobilgeräten. Das Verlegen von Animationen auf die GPU ist jedoch nicht immer einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimieren von Elementänderungen mit `will-change`

Browser können Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Arten von Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem sie potenziell aufwendige Arbeiten vorher erledigen. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) deutet Browsern an, wie sich ein Element voraussichtlich ändern wird.

> **Note:** `will-change` ist als letztes Mittel gedacht, um mit bestehenden Performance-Problemen umzugehen. Es sollte nicht verwendet werden, um Performance-Probleme zu antizipieren.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimieren für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er alle diese Stile parst, wird jedoch das Rendering nicht auf Stile blockieren, von denen er weiß, dass er sie nicht verwenden wird, wie zum Beispiel in Druckstylesheets. Durch das Aufteilen des CSS in mehrere Dateien basierend auf Media Queries können Sie das Render-Blocking während des Downloads von nicht genutztem CSS verhindern. Um einen nicht blockierenden CSS-Link zu erstellen, verschieben Sie die Stile, die nicht sofort verwendet werden, wie Druckstile, in eine separate Datei, fügen Sie ein [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) dem HTML-Markup hinzu und fügen Sie eine media-Abfrage hinzu, die in diesem Fall angibt, dass es sich um ein Druckstylesheet handelt.

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

Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet Render-Blocking ist. Sagen Sie dem Browser, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [media query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er weiß, dass es nur in einem bestimmten Szenario angewendet werden muss, lädt er das Stylesheet dennoch herunter, blockiert jedoch nicht das Rendering. Durch die Trennung des CSS in mehreren Dateien ist die Hauptdatei, die das Render-Blocking verursacht, in diesem Fall `styles.css`, viel kleiner, was die Zeit, in der das Rendern blockiert wird, reduziert.

## Verbesserung der Schrift-Performance

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webfont-Performance.

Im Allgemeinen sollten Sie sorgfältig überlegen, welche Schriften Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Während es verlockend sein kann, viele Schriften für visuelle Abwechslung zu verwenden, kann dies das Laden der Seite erheblich verlangsamen und Ihre Website wie ein Durcheinander aussehen lassen. Sie benötigen wahrscheinlich nur etwa zwei bis drei Schriften, und Sie können mit weniger auskommen, wenn Sie sich dafür entscheiden, [websichere Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schrift-Laden

Beachten Sie, dass eine Schrift nur dann geladen wird, wenn sie tatsächlich auf ein Element mit der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft angewendet wird, nicht wenn sie erstmals mit der [`@font-face`](/de/docs/Web/CSS/@font-face)-At-Regel referenziert wird:

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

Es kann daher vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriften frühzeitig zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist umso vorteilhafter, wenn Ihre `font-family`-Deklaration in einer großen externen Stylesheet versteckt ist und lange dauert, bis sie im Parsing-Prozess erreicht wird. Es ist jedoch ein Kompromiss – Schriftdateien sind ziemlich groß, und wenn Sie zu viele von ihnen vorladen, könnten Sie andere Ressourcen verzögern.

Sie können auch in Betracht ziehen:

- [Benutzung von](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühe Verbindung mit dem Schriftanbieter herzustellen.
- Verwendung der [CSS-Schriftlade-API](/de/docs/Web/API/CSS_Font_Loading_API), um das Ladeverhalten der Schriftarten über JavaScript anzupassen.

### Laden nur der benötigten Glyphen

Wenn Sie eine Schriftart für Fließtext wählen, ist es schwieriger einzuschätzen, welche Glyphen darin verwendet werden, insbesondere wenn Sie es mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen zu tun haben.

Wenn Sie jedoch wissen, dass Sie einen bestimmten Satz von Glyphen verwenden werden (zum Beispiel Glyphen für Überschriften oder bestimmte Satzzeichen), können Sie die Anzahl der Glyphen, die der Browser herunterladen muss, begrenzen. Dies kann erreicht werden, indem eine Schriftdatei erstellt wird, die nur das erforderliche Subset enthält. Ein Prozess, der [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting) genannt wird. Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range)-`@font-face`-Deskriptor kann dann verwendet werden, um anzugeben, wann Ihre Subset-Schriftart verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Definieren des Schriftdarstellungsverhaltens mit dem `font-display`-Deskriptor

Angewandt auf die `@font-face`-At-Regel definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display)-Deskriptor, wie Schriftdateien geladen und vom Browser angezeigt werden, wobei Text mit einer Ersatzschrift angezeigt werden kann, während eine Schrift geladen wird oder das Laden fehlschlägt. Dies verbessert die Performance, indem der Text sichtbar ist, anstatt ein leeres Bildschirm zu zeigen, mit dem Kompromiss eines Flackerns von ungestyltem Text.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Stilkalkulation mit CSS-Containment

Durch die Verwendung der in der [CSS-Containment](/de/docs/Web/CSS/CSS_containment)-Modul definierten Eigenschaften können Sie dem Browser anweisen, verschiedene Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendern einzelner Abschnitte. So können Sie dem Browser zum Beispiel mitteilen, bestimmte Container erst dann zu rendern, wenn sie im Viewport sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft ermöglicht es einem Autor, genau festzulegen, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) für einzelne Container auf der Seite angewendet werden sollen. Dadurch kann der Browser das Layout, den Stil, das Malen, die Größe oder jede Kombination davon für einen begrenzten Teil des DOM neu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Reihe von Containments auf einen Satz von Containern anzuwenden und anzugeben, dass der Browser diese Container erst dann layouten und rendern soll, wenn sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar und ermöglicht es Ihnen, eine Platzhaltergröße für Container bereitzustellen, während sie unter den Effekten der Containment stehen. Dies bedeutet, dass die Container Platz beanspruchen, auch wenn ihre Inhalte noch nicht gerendert wurden, wodurch Containment seine Performance-Magie ausführen kann, ohne das Risiko von Scrollleistenverschiebungen und Ruckeln, wenn Elemente gerendert und sichtbar werden. Dies verbessert die Benutzererfahrung, während der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Siehe auch

- [CSS-Animationsperformance](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Performance steigert](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
