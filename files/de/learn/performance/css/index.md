---
title: Leistungsoptimierung von CSS
slug: Learn/Performance/CSS
l10n:
  sourceCommit: 4bf03c104b1bca2068dbff927020e7f802c4af7e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

Wenn Sie eine Website entwickeln, müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite verarbeitet. Um mögliche Leistungsprobleme, die CSS verursachen könnte, zu mindern, sollten Sie es optimieren. Beispielsweise sollten Sie das CSS optimieren, um [render-blocking](/de/docs/Glossary/Render_blocking) zu verringern und die Anzahl der erforderlichen Reflows zu minimieren. Dieser Artikel führt Sie durch wichtige Techniken zur Leistungsoptimierung von CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen Sie die Auswirkungen von CSS auf die Website-Performance
        und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, ist: „Was muss ich optimieren?“. Einige der unten besprochenen Tipps und Techniken sind bewährte Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige davon umfassen fortschrittliche [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um zu beginnen, ist jedoch, zu lernen, wie man Tools wie integrierte Browser-[Netzwerk-](/de/docs/Learn/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn/Performance/Measuring_performance#performance_monitor_tools) Werkzeuge verwendet, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Optimierung des Renderings

Browser folgen einem bestimmten Renderingpfad — das Zeichnen erfolgt nur nach dem Layout, das wiederum nach dem Erstellen des Renderbaums stattfindet, was sowohl die DOM- als auch die CSSOM-Bäume erfordert.

Den Benutzern eine ungestaltete Seite anzuzeigen und sie dann neu zu zeichnen, nachdem die CSS-Stile analysiert wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund ist CSS render-blockierend, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite zeichnen, nachdem er das CSS heruntergeladen und das [CSS-Objektmodell (CSSOM)](/de/docs/Glossary/CSSOM) erstellt hat.

Um den Bau des CSSOM zu optimieren und die Seitenleistung zu verbessern, können Sie je nach aktuellem Zustand Ihres CSS eine oder mehrere der folgenden Maßnahmen ergreifen:

- **Entfernen Sie unnötige Stile**: Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte CSS-Regeln aus ihren Stylesheets zu entfernen, die während der Entwicklung hinzugefügt wurden und letztlich nicht verwendet wurden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layouts und Zeichnens verwendet werden oder nicht, daher kann das Entfernen ungenutzter Stile das Seitenrendering beschleunigen. Wie [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem für eine große Codebasis zu lösen, und es gibt keine Wunderwaffe, um ungenutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und vorsichtig und überlegt vorzugehen, was hinzugefügt und entfernt wird.

- **Teilen Sie CSS in separate Module auf**: Wenn CSS modular gehalten wird, kann CSS, das beim Seitenladen nicht benötigt wird, später geladen werden, wodurch die anfängliche Blockierung durch CSS reduziert und Ladezeiten verkürzt werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

  ```html
  <!-- Das Laden und Parsen von styles.css blockiert das Rendern -->
  <link rel="stylesheet" href="styles.css" />

  <!-- Das Laden und Parsen von print.css blockiert das Rendern nicht -->
  <link rel="stylesheet" href="print.css" media="print" />

  <!-- Das Laden und Parsen von mobile.css blockiert auf großen Bildschirmen nicht -->
  <link
    rel="stylesheet"
    href="mobile.css"
    media="screen and (max-width: 480px)" />
  ```

  Das obige Beispiel bietet drei Stilsets — Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet blockierend ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur unter bestimmten Bedingungen anwenden muss, wird es dennoch heruntergeladen, aber nicht blockierend. Durch Aufteilen des CSS in mehrere Dateien ist die Hauptdatei, die das Rendern blockiert, in diesem Fall `styles.css`, wesentlich kleiner, wodurch die Zeit reduziert wird, während der das Rendern blockiert ist.

- **Minimieren und komprimieren Sie Ihr CSS**: Die Minimierung besteht darin, alle Leerzeichen in der Datei zu entfernen, die nur der menschlichen Lesbarkeit dienen, sobald der Code in die Produktion kommt. Sie können die Ladezeiten erheblich verkürzen, indem Sie Ihr CSS minimieren. Die Minimierung wird in der Regel als Teil eines Build-Prozesses durchgeführt (zum Beispiel minimieren die meisten JavaScript-Frameworks den Code, wenn Sie ein bereites Projekt für die Bereitstellung erstellen). Zusätzlich zur Minimierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, Komprimierungen wie gzip auf Dateien anwendet, bevor er sie bereitstellt.

- **Vereinfachen Sie Selectoren**: Häufig werden Selektoren komplexer geschrieben als nötig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Analysezeit für diese Selektoren. Zum Beispiel:

  ```css
  /* Sehr spezifischer Selektor */
  body div#main-content article.post h2.headline {
    font-size: 24px;
  }

  /* Wahrscheinlich benötigen Sie nur diesen */
  .headline {
    font-size: 24px;
  }
  ```

  Weniger komplexe und spezifische Selektoren zu schreiben, ist auch gut für die Wartung. Es ist einfach zu verstehen, was einfache Selektoren tun, und es ist leicht, Stile später zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2) sind.

- **Wenden Sie keine Stile auf mehr Elemente an als nötig**: Ein häufiger Fehler ist es, Stile auf alle Elemente mithilfe des [universellen Selektors](/de/docs/Web/CSS/Universal_selectors) oder zumindest auf zu viele Elemente anzuwenden. Diese Art von Styling kann die Leistung negativ beeinflussen, insbesondere bei größeren Websites.

  ```css
  /* Wählt jedes Element innerhalb des <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Tools wie [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) sollten sparsam verwendet werden. Übermäßiger Einsatz kann zu unerwartetem Verhalten führen.

- **Reduzieren Sie HTTP-Anfragen für Bilder mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, bei der mehrere kleine Bilder (wie Icons), die Sie auf Ihrer Website verwenden möchten, in eine einzige Bilddatei platziert werden, und dann verschiedene {{cssxref("background-position")}} Werte verwendet werden, um den Bildausschnitt anzuzeigen, den Sie an verschiedenen Stellen zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die zum Abrufen der Bilder erforderlich sind, erheblich reduzieren.

- **Wichtige Assets vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Preloader für kritische Assets zu verwandeln. Dies umfasst CSS-Dateien, Schriftarten und Bilder:

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

  Mit `preload` wird der Browser die referenzierten Ressourcen so schnell wie möglich abrufen und im Browsercache verfügbar machen, sodass sie bereit sind, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, hoch priorisierte Ressourcen, auf die der Benutzer frühzeitig auf einer Seite trifft, vorzuladen, damit die Erfahrung so reibungslos wie möglich ist. Beachten Sie, wie Sie `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flinker wirken lassen und Benutzern das Gefühl geben, dass Fortschritte gemacht werden, während sie auf das Laden einer Seite warten (Ladespinner, zum Beispiel). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch naturgemäß mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Steuerung/Site-Präferenz bieten, um Animationen auszuschalten, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkuleistung verwenden. Sie könnten auch JavaScript verwenden, um zu kontrollieren, ob Animationen zunächst auf der Seite angewendet werden oder nicht. Es gibt auch eine Medienabfrage namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationen selektiv bereitzustellen oder nicht, basierend auf den OS-Level-Einstellungen eines Benutzers für Animationen.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wann immer möglich, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen).

### Auswahl von Eigenschaften zur Animation

Die Animationsleistung hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften, die animiert werden, lösen ein [Reflow](/de/docs/Glossary/Reflow) (und daher auch ein [Repaint](/de/docs/Glossary/Repaint)) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Dimensionen eines Elements ändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element repositionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left) und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items) und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind klug genug, nur den geänderten Bereich des Dokuments neu zu zeichnen, anstatt die gesamte Seite. Infolgedessen sind größere Animationen kostspieliger.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animation auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie in Erwägung ziehen, die Animationsarbeit vom Hauptthread auf die GPU des Geräts zu verlagern (auch als Compositing bezeichnet). Dies geschieht, indem spezifische Arten von Animationen ausgewählt werden, die der Browser automatisch an die GPU zur Verarbeitung sendet; dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit [`will-change`](/de/docs/Web/CSS/will-change) angewendet (siehe den untenstehenden Abschnitt).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Element/video), [`<canvas>`](/de/docs/Web/HTML/Element/canvas) und [`<iframe>`](/de/docs/Web/HTML/Element/iframe).

Animation auf der GPU kann die Leistung verbessern, insbesondere auf mobilen Geräten. Das Auslagern von Animationen auf die GPU ist jedoch nicht immer einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen vornehmen, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell aufwendige Arbeiten erledigt werden, bevor sie benötigt werden. Das CSS-Attribut [`will-change`](/de/docs/Web/CSS/will-change) weist Browser darauf hin, wie ein Element voraussichtlich geändert wird.

> **Note:** `will-change` sollte als letztes Mittel verwendet werden, um bestehende Leistungsprobleme zu lösen. Es sollte nicht verwendet werden, um Leistungsprobleme zu antizipieren.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Renderblockierung

CSS kann Stile auf bestimmte Bedingungen mit Medienabfragen beschränken. Medienabfragen sind wichtig für ein responsives Webdesign und helfen, einen kritischen Renderingpfad zu optimieren. Der Browser blockiert das Rendern, bis er all diese Stile analysiert hat, blockiert jedoch nicht das Rendern von Stilen, von denen er weiß, dass sie nicht verwendet werden, wie z. B. den Druckstilen. Indem Sie das CSS basierend auf Medienabfragen in mehrere Dateien aufteilen, können Sie die Renderblockierung während des Herunterladens ungenutzter CSS verhindern. Um einen nicht blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie z. B. Druckstile, in eine separate Datei, fügen Sie dem HTML-Markup ein [`<link>`](/de/docs/Web/HTML/Element/link) hinzu und fügen Sie eine Medienabfrage hinzu, in diesem Fall besagt, dass es sich um ein Druckstylesheet handelt.

```html
<!-- Das Laden und Parsen von styles.css blockiert das Rendern -->
<link rel="stylesheet" href="styles.css" />

<!-- Das Laden und Parsen von print.css blockiert das Rendern nicht -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Das Laden und Parsen von mobile.css blockiert auf großen Bildschirmen nicht -->
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (max-width: 480px)" />
```

Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet das Rendern blockiert. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, weiß er, dass er es nur in einem bestimmten Szenario anwenden muss, es wird dennoch heruntergeladen, blockiert jedoch nicht das Rendern. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei, die das Rendern blockiert, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit verkürzt wird, in der das Rendern blockiert ist.

## Verbesserung der Schriftperformance

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webschrift-Performance.

Im Allgemeinen sollten Sie sorgfältig überlegen, welche Schriften Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Während es verlockend sein kann, viele Schriften für visuelle Spannung zu verwenden, kann dies die Seitenladezeit erheblich verlangsamen und Ihre Website wie ein Durcheinander aussehen lassen. Wahrscheinlich benötigen Sie nur zwei oder drei Schriften, und Sie können mit weniger auskommen, wenn Sie sich entscheiden, [websichere Schriften](/de/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftladeverhalten

Bedenken Sie, dass eine Schrift erst geladen wird, wenn sie tatsächlich auf ein Element mit der Eigenschaft [`font-family`](/de/docs/Web/CSS/font-family) angewendet wird, nicht, wenn sie zum ersten Mal mit der Anweisung [`@font-face`](/de/docs/Web/CSS/@font-face) referenziert wird:

```css
/* Schrift wird hier nicht geladen */
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
}

h1,
h2,
h3 {
  /* Wird tatsächlich hier geladen */
  font-family: "Open Sans";
}
```

Daher kann es vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriften früh zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist wahrscheinlich nützlich, wenn Ihre `font-family`-Deklaration sich in einem großen externen Stylesheet versteckt und nicht signifikant später im Parsing-Prozess erreicht wird. Es ist jedoch ein Abwägungspunkt — Schriftdateien sind recht groß und wenn Sie zu viele von ihnen vorladen, können Sie andere Ressourcen verzögern.

Sie können auch Folgendes in Betracht ziehen:

- Verwendung von [`rel="preconnect"`](/de/docs/Web/HTML/Attributes/rel/preconnect), um frühzeitig eine Verbindung mit dem Schriftanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Verwendung der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Ladeverhalten von Schriften über JavaScript anzupassen.

### Laden nur der benötigten Glyphen

Wenn Sie eine Schriftart für den Haupttext wählen, ist es schwieriger, sich der Glyphen sicher zu sein, die darin verwendet werden, insbesondere wenn Sie mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen zu tun haben.

Wenn Sie jedoch wissen, dass Sie einen bestimmten Satz von Glyphen verwenden werden (zum Beispiel Glyphen nur für Überschriften oder bestimmte Interpunktionszeichen), könnten Sie die Anzahl der Glyphen begrenzen, die der Browser herunterladen muss. Dies kann erfolgen, indem eine Schriftartdatei erstellt wird, die nur die erforderliche Teilsammlung enthält. Ein Verfahren, das als [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting) bezeichnet wird. Der Descriptor [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) in der `@font-face`-Regel kann dann verwendet werden, um anzugeben, wann Ihre Teilmenge der Schriftart verwendet werden soll. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schrift nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Definition des Schriftanzeigeverhaltens mit dem `font-display`-Descriptor

Angewendet auf die `@font-face`-Regel, definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display) Descriptor, wie Schriftdateien geladen und vom Browser angezeigt werden, sodass der Text mit einer Ersatzschrift erscheint, während eine Schrift geladen wird oder das Laden fehlschlägt. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm zu haben, wobei der Kompromiss darin besteht, dass es zu einem kurzen Auftauchen von ungestyltem Text kommt.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Styling-Neuberechnung mit CSS-Containment

Durch den Einsatz der im [CSS-Containment](/de/docs/Web/CSS/CSS_containment) Modul definierten Eigenschaften, können Sie dem Browser Anweisung geben, verschiedene Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendering einzelner Abschnitte. Ein Beispiel wäre die Anweisung, dass bestimmte Container nicht gerendert werden, bis sie im Viewport sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft ermöglicht es einem Autor, genau zu spezifizieren, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf einzelne Container auf der Seite angewendet werden sollen. Dies erlaubt es dem Browser, Layout, Stil, Paint, Größe oder jede Kombination davon nur für einen begrenzten Teil des DOMs neu zu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, einen starken Satz von Containments auf eine Gruppe von Containern anzuwenden und zu spezifizieren, dass der Browser diese Container nicht layouten und rendern soll, bis sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar. Sie ermöglicht es Ihnen, eine Platzhaltergröße für Container anzugeben, während diese unter dem Einfluss von Containment stehen. Dies bedeutet, dass die Container Platz einnehmen, selbst wenn ihre Inhalte noch nicht gerendert wurden, wodurch das Containment seine Leistungszauberei ausführen kann, ohne das Risiko von Scrollbalkenverschiebungen und Ruckeln, während Elemente gerendert und angezeigt werden. Dies verbessert die Qualität der Benutzererfahrung beim Laden des Inhalts.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

## Siehe auch

- [Leistung von CSS-Animationen](/de/docs/Web/Performance/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) auf web.dev (2022)
