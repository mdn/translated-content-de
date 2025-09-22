---
title: Optimierung der CSS-Performance
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 8283ec699c1c79e570daa5217d0c9fba7c94f21c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Bei der Entwicklung einer Website sollten Sie berücksichtigen, wie der Browser das CSS auf Ihrer Website verarbeitet. Um etwaige Leistungsprobleme zu mindern, die durch CSS verursacht werden könnten, sollten Sie es optimieren. Beispielsweise sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "render-blocking")}} zu mindern und die Anzahl der erforderlichen Reflows zu minimieren. Dieser Artikel führt Sie durch wichtige Techniken zur Optimierung der CSS-Performance.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Auswirkungen von CSS auf die Website-Performance zu verstehen und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihr CSS zu optimieren, lautet: "Was muss ich optimieren?". Einige der unten besprochenen Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und möglicherweise eine Zeitverschwendung. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich für jedes Projekt erforderlich sind.

Dazu müssen Sie die [Performance Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere Möglichkeiten, die Leistung zu messen, einige davon beinhalten anspruchsvolle [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg zum Einstieg besteht jedoch darin, zu lernen, wie Sie Tools wie die integrierten Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools)Tools verwenden können, um herauszufinden, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem spezifischen Rendering-Pfad — das Zeichnen erfolgt nur nach der Layoutphase, die nach der Erstellung des Renderbaums erfolgt, der wiederum sowohl den DOM- als auch den CSSOM-Baum erfordert.

Den Nutzern eine ungestaltete Seite anzuzeigen und sie dann neu zu zeichnen, nachdem die CSS-Stile analysiert wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund ist CSS render-blocking, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite malen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um die CSSOM-Konstruktion zu optimieren und die Seitenleistung zu verbessern, können Sie je nach aktuellem Zustand Ihres CSS eines oder mehrere der folgenden Dinge tun:

- **Unnötige Stile entfernen**: Das mag offensichtlich erscheinen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte CSS-Regeln zu bereinigen, die während der Entwicklung zu ihren Stylesheets hinzugefügt wurden und letztendlich nicht verwendet wurden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layouts und des Zeichnens verwendet werden oder nicht, sodass es die Seitendarstellung beschleunigen kann, ungenutzte zu entfernen. Wie in [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (css-tricks.com, 2019) zusammengefasst, ist dies ein schwieriges Problem, das für eine große Codebasis zu lösen ist, und es gibt keinen magischen Trick, um ungenutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und vorsichtig und bedacht zu sein bei dem, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: Modulares CSS bedeutet, dass CSS, das beim Seitenladen nicht benötigt wird, später geladen werden kann, wodurch das anfängliche render-blocking und die Ladezeiten des CSS reduziert werden. Der einfachste Weg dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Satz Stile — Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet render-blocking ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut hinzufügen, das eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) enthält. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, wird das Stylesheet zwar heruntergeladen, aber nicht render-blocking. Durch die Aufteilung des CSS in mehrere Dateien ist die Hauptdatei, die das Render-Blocking verursacht, in diesem Fall `styles.css`, deutlich kleiner und verkürzt die Dauer, in der das Rendering blockiert wird.

- **CSS minifizieren und komprimieren**: Minifizierung beinhaltet das Entfernen aller Leerzeichen in der Datei, die nur der menschlichen Lesbarkeit dienen, sobald der Code in Produktion geht. Sie können die Ladezeiten erheblich verkürzen, indem Sie Ihr CSS minifizieren. Die Minifizierung erfolgt in der Regel als Teil eines Build-Prozesses (zum Beispiel werden die meisten JavaScript-Frameworks den Code minifizieren, wenn Sie ein Projekt für die Bereitstellung bereitstellen). Zusätzlich zur Minifizierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, eine Komprimierung wie Gzip auf Dateien anwendet, bevor sie bereitgestellt werden.

- **Selektoren vereinfachen**: Oft schreiben Menschen Selektoren, die komplexer sind als nötig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigröße, sondern auch die Parsing-Zeit für diese Selektoren. Zum Beispiel:

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

  Weniger komplexe und spezifische Selektoren machen auch die Wartung einfacher. Es ist leicht zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile später bei Bedarf zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Stile nicht auf mehr Elemente anwenden als nötig**: Ein häufiger Fehler ist es, Stile auf alle Elemente mit dem [universellen Selektor](/de/docs/Web/CSS/Universal_selectors) oder zumindest auf mehr Elemente als nötig anzuwenden. Diese Art des Stylings kann sich negativ auf die Leistung auswirken, insbesondere auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Tools wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam verwendet werden. Sie überall zu verwenden, kann alle möglichen unerwarteten Verhaltensweisen verursachen.

- **HTTP-Anfragen für Bilder mit CSS-Sprites reduzieren**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, bei der mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Website verwenden möchten, in einer einzigen Bilddatei platziert werden. Danach werden unterschiedliche {{cssxref("background-position")}} Werte verwendet, um das Bildstück anzuzeigen, das Sie an jedem Ort zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die zum Abrufen der Bilder erforderlich sind, drastisch reduzieren.

- **Wichtige Assets vorab laden**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Vorladungselemente für kritische Ressourcen zu verwandeln. Dazu gehören CSS-Dateien, Schriftarten und Bilder:

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

  Mit `preload` wird der Browser die referenzierten Ressourcen so schnell wie möglich abrufen und im Browser-Cache verfügbar machen, sodass sie schneller verwendet werden können, wenn sie später im Code referenziert werden. Es ist nützlich, hochpriorisierte Ressourcen vorzuladen, denen der Benutzer frühzeitig auf einer Seite begegnet, damit die Erfahrung so reibungslos wie möglich ist. Beachten Sie, wie Sie auch `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Performance verbessern, indem sie Benutzeroberflächen flüssiger wirken lassen und den Eindruck vermitteln, dass Fortschritte gemacht werden, während die Benutzer auf das Laden einer Seite warten (z.B. Ladespinner). Jedoch erfordern größere Animationen und eine höhere Anzahl von Animationen selbstverständlich mehr Rechenleistung, was die Leistung verschlechtern kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Steuerungs-/Standortpräferenz bieten, um Animationen auszuschalten, falls sie ein leistungsschwaches Gerät oder ein Mobilgerät mit begrenzter Akkuleistung verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob Animationen überhaupt auf der Seite angewendet werden. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationen selektiv basierend auf den Präferenzen eines Benutzers auf Betriebssystem-Ebene zu bedienen oder nicht.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, sofern möglich, anstatt JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen).

### Zu animierende Eigenschaften auswählen

Die Performance von Animationen hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften lösen beim Animieren ein {{Glossary("Reflow", "Reflow")}} (und damit auch ein {{Glossary("Repaint", "Repaint")}}) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Dimensionen eines Elements verändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element neu positionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left) und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items) und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind schlau genug, nur den geänderten Bereich des Dokuments neu zu zeichnen, anstatt die gesamte Seite zu überarbeiten. Daher sind größere Animationen kostspieliger.

Wenn es überhaupt möglich ist, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint auslösen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animationen auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie überlegen, die Animationsarbeiten vom Hauptthread auf die GPU des Geräts zu verlagern (auch als Compositing bezeichnet). Dies wird durch die Auswahl bestimmter Animationstypen erreicht, die der Browser automatisch an die GPU weiterleitet, darunter:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen Eigenschaften, die animiert werden, wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/will-change) (siehe nächsten Abschnitt).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animation auf der GPU kann die Leistung verbessern, insbesondere auf mobilen Geräten. Allerdings ist das Verschieben von Animationen auf die GPU nicht immer so einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell teure Arbeiten durchgeführt werden, bevor sie erforderlich sind. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt den Browsern Hinweise darauf, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE]
> `will-change` ist als letztes Mittel gedacht, um bestehende Leistungsprobleme zu bewältigen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er alle diese Stile analysiert hat, wird jedoch nicht das Rendering bei Stilen blockieren, die er nicht verwenden wird, wie z. B. Druck-Stylesheets. Indem Sie das CSS basierend auf Media Queries in mehrere Dateien aufteilen, können Sie render-blocking während des Herunterladens ungenutzter CSS vermeiden. Um einen nicht-blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie Druckstile, in eine separate Datei, fügen einen [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) zum HTML-Markup hinzu und fügen eine Media Query hinzu, die in diesem Fall besagt, dass es sich um ein Druck-Stylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet render-blocking ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, weiß er, dass er es nur für ein bestimmtes Szenario anwenden muss, es wird trotzdem das Stylesheet heruntergeladen, aber das Rendering wird nicht blockiert. Indem Sie das CSS in mehrere Dateien aufteilen, ist die Hauptdatei, die das Render-Blocking verursacht, in diesem Fall `styles.css`, viel kleiner und verkürzt die Zeit, die das Rendering blockiert.

## Verbesserung der Schriftperformance

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webschrift-Performance.

Im Allgemeinen sollten Sie sorgfältig darüber nachdenken, welche Schriftarten Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Obwohl es verlockend sein kann, viele Schriftarten für visuelle Aufregung zu verwenden, kann dies das Seitenladen erheblich verlangsamen und dazu führen, dass Ihre Website wie ein Chaos aussieht. Wahrscheinlich benötigen Sie nur etwa zwei oder drei Schriften, und Sie können mit weniger auskommen, wenn Sie sich entscheiden, [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftlad

Bedenken Sie, dass eine Schriftart nur geladen wird, wenn sie tatsächlich mit der Eigenschaft [`font-family`](/de/docs/Web/CSS/font-family) auf ein Element angewendet wird, nicht wenn sie zuerst mit der `@font-face`-Regel referenziert wird:

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

Es kann daher vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriftarten frühzeitig zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist umso wahrscheinlicher von Vorteil, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet versteckt ist und erst später im Parsing-Prozess erreicht wird. Es ist jedoch ein Kompromiss — Schriftdateien sind recht groß, und wenn Sie zu viele von ihnen vorladen, könnten Sie andere Ressourcen verzögern.

Sie können auch überlegen:

- Verwenden von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühzeitige Verbindung mit dem Schriftanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Verwenden der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Schriftladeverhalten über JavaScript anzupassen.

### Nur die benötigten Glyphen laden

Beim Auswählen einer Schriftart für Fließtext ist es schwieriger, sich der Glyphen sicher zu sein, die verwendet werden, insbesondere wenn es sich um nutzergenerierte Inhalte und/oder Inhalte in mehreren Sprachen handelt.

Wenn Sie jedoch wissen, dass Sie eine bestimmte Menge von Glyphen verwenden werden (zum Beispiel nur Glyphen für Überschriften oder spezifische Satzzeichen), könnten Sie die Anzahl der Glyphen beschränken, die der Browser herunterladen muss. Dies kann erreicht werden, indem eine Schriftdatei erstellt wird, die nur den erforderlichen Teil enthält. Ein Prozess, der [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting) genannt wird. Der `unicode-range`-Descriptor der `@font-face`-Regel kann dann verwendet werden, um anzugeben, wann Ihr Teilfon

t verwendet wird. Wenn die Seite keinen Charakter in diesem Bereich verwendet, wird die Schrift nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Anzeigeverhalten von Schriften mit dem `font-display` Descriptor definieren

Angewendet auf die `@font-face`-Regel, definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display)-Descriptor, wie Schriftdateien vom Browser geladen und angezeigt werden, sodass Text mit einer Ersatzschrift angezeigt werden kann, während eine Schrift geladen oder nicht geladen wird. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm aufzuweisen, wobei ein Kompromiss ein kurzer Aufbau einer ungestylten Schrift ist.

```css
@font-face {
  font-family: someFont;
  src: url("/path/to/fonts/someFont.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Style-Neuberechnung mit CSS-Containment

Durch die Verwendung der im [CSS-Containment](/de/docs/Web/CSS/CSS_containment)-Modul definierten Eigenschaften können Sie den Browser anweisen, verschiedene Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendering einzelner Abschnitte. Zum Beispiel können Sie dem Browser mitteilen, bestimmte Container nicht zu rendern, bis sie im Ansichtsfenster sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft ermöglicht es einem Autor, genau anzugeben, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf einzelne Container auf der Seite angewendet werden sollen. Dies erlaubt es dem Browser, das Layout, den Stil, das Zeichnen, die Größe oder eine Kombination davon nur für einen begrenzten Teil des DOM neu zu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist ein nützlicher Shortcut, der es Autoren ermöglicht, eine starke Menge an Containments auf eine Menge Container anzuwenden und anzugeben, dass der Browser diese Container erst dann layouten und darstellen soll, wenn dies erforderlich ist.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, steht ebenfalls zur Verfügung, mit der Sie eine Platzhaltergröße für Container angeben können, während sie unter den Effekten der Containment stehen. Dies bedeutet, dass die Container einen Raum einnehmen, auch wenn ihre Inhalte noch nicht gerendert wurden, was es dem Containment ermöglicht, seine Leistungsverbesserungen zu bewirken, ohne das Risiko eines Scrollleistenwechsels und Ruckeln beim Laden und Anzeigen von Elementen. Dies verbessert die Qualität der Benutzererfahrung, wenn der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Optimierung von `:has()` Selektoren

Die {{cssxref(":has", ":has()")}}-Pseudoklasse ermöglicht leistungsstarke Auswahlmöglichkeiten, erfordert jedoch sorgfältige Verwendung, um Leistungsengpässe zu vermeiden. Für detaillierte Anleitungen zum Schreiben effizienter `:has()`-Selektoren siehe [Performance considerations in the `:has()` reference documentation](/de/docs/Web/CSS/:has#performance_considerations).

## Siehe auch

- [CSS animation performance](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
