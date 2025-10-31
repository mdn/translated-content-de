---
title: CSS-Performance-Optimierung
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Bei der Entwicklung einer Website müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite verarbeitet. Um mögliche Leistungsprobleme, die durch CSS verursacht werden könnten, zu mindern, sollten Sie dieses optimieren. Zum Beispiel sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "render-blocking")}} zu verringern und die Anzahl der notwendigen Reflows zu minimieren. Dieser Artikel führt Sie durch die wichtigsten Techniken zur Optimierung der CSS-Leistung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Informationen über die Auswirkungen von CSS auf die Website-Performance zu lernen und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, ist: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugute kommen, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige davon unter Verwendung fortschrittlicher [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um zu beginnen, besteht jedoch darin, zu lernen, wie man Tools wie eingebaute Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools)Tools verwendet, um zu sehen, welche Teile des Seitenladevorgangs lange dauern und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem spezifischen Rendering-Pfad — das Malen erfolgt erst nach dem Layout, das wiederum nach der Erstellung des Render-Baumes erfolgt, wofür sowohl die DOM- als auch die CSSOM-Bäume erforderlich sind.

Den Benutzern eine ungestaltete Seite anzuzeigen und sie dann neu zu zeichnen, nachdem die CSS-Styles analysiert wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund ist CSS render-blockierend, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite malen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} aufgebaut hat.

Um das CSSOM-Konstruktion zu optimieren und die Seitenleistung zu verbessern, können Sie je nach aktuellem Stand Ihres CSS eines oder mehrere der folgenden Dinge tun:

- **Entfernen Sie unnötige Styles**: Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte CSS-Regeln zu bereinigen, die während der Entwicklung zu Stylesheets hinzugefügt wurden und letztendlich nicht verwendet wurden. Alle Styles werden analysiert, unabhängig davon, ob sie beim Layout und Malen verwendet werden oder nicht, daher kann es die Seitenwiedergabe beschleunigen, ungenutzte zu entfernen. Wie [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem, das bei einer großen Codebasis zu lösen ist, und es gibt keine Patentlösung, um ungenutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und sorgfältig und bewusst darauf zu achten, was hinzugefügt und entfernt wird.

- **Teilen Sie CSS in separate Module auf**: Modularisierung des CSS bedeutet, dass CSS, das beim Laden der Seite nicht benötigt wird, später geladen werden kann, wodurch das anfängliche Render-Blockieren von CSS und die Ladezeiten verringert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Satz Styles — Standardstyles, die immer geladen werden, Styles, die nur geladen werden, wenn das Dokument gedruckt wird, und Styles, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet render-blockierend ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das nur in einem bestimmten Szenario angewendet werden muss, lädt er das Stylesheet trotzdem herunter, blockiert jedoch nicht das Rendern. Durch die Trennung des CSS in mehrere Dateien ist die Hauptdatei, die das Rendering blockiert, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit, in der das Rendering blockiert ist, reduziert wird.

- **Minifizieren und komprimieren Sie Ihr CSS**: Minifizieren bedeutet, alle Leerzeichen in der Datei zu entfernen, die nur zur besseren Lesbarkeit durch Menschen vorhanden sind, sobald der Code in Produktion geht. Sie können die Ladezeiten erheblich verkürzen, indem Sie Ihr CSS minifizieren. Minifizierung wird in der Regel als Teil eines Build-Prozesses durchgeführt (zum Beispiel minifizieren die meisten JavaScript-Frameworks Code, wenn Sie ein Projekt für die Bereitstellung erstellen). Zusätzlich zur Minifizierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, eine Kompression wie gzip auf Dateien anwendet, bevor sie ausgeliefert werden.

- **Simplifizieren Sie Selektoren**: Oft schreiben Leute Selektoren, die komplexer sind, als nötig, um die erforderlichen Styles zuzuweisen. Dies erhöht nicht nur die Dateigrößen, sondern auch die Analysezeit für diese Selektoren. Zum Beispiel:

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

  Weniger komplexe und spezifische Selektoren zu verwenden, ist auch gut für die Wartung. Es ist einfach zu verstehen, was einfache Selektoren tun, und es ist einfach, Styles später zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Wenden Sie keine Styles auf mehr Elemente als nötig an**: Ein häufiger Fehler besteht darin, Styles auf alle Elemente mit dem [universellen Selektor](/de/docs/Web/CSS/Universal_selectors) oder zumindest auf mehr Elemente als nötig anzuwenden. Diese Art von Styling kann die Performance negativ beeinflussen, insbesondere auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Tools wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam eingesetzt werden. Sie überall zu nutzen, kann zu allen möglichen unerwarteten Verhalten führen.

- **Reduzieren Sie die Anzahl der HTTP-Anfragen für Bilder mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, die mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Website verwenden möchten, in eine einzige Bilddatei platziert und dann verschiedene {{cssxref("background-position")}}-Werte verwendet, um den Bildabschnitt anzuzeigen, den Sie an jeder Stelle zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die benötigt werden, um die Bilder abzurufen, erheblich reduzieren.

- **Preloaden Sie wichtige Ressourcen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Preloader für kritische Assets zu verwandeln. Dies umfasst CSS-Dateien, Schriftarten und Bilder:

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

  Mit `preload` wird der Browser die referenzierten Ressourcen so schnell wie möglich abrufen und im Browser-Cache speichern, sodass sie früher verfügbar sind, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, hochpriorisierte Ressourcen, auf die der Benutzer früh auf einer Seite stoßen wird, vorzuladen, damit das Erlebnis so reibungslos wie möglich verläuft. Beachten Sie, dass Sie auch `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload kritische Assets zur Verbesserung der Ladegeschwindigkeit](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Animationen handhaben

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen reaktionsschneller wirken lassen und den Benutzern das Gefühl geben, dass Fortschritte gemacht werden, wenn sie auf das Laden einer Seite warten (zum Beispiel bei Ladespinnern). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch natürlicherweise mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Kontrolle/Site-Präferenz bieten, um Animationen auszuschalten, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkuleistung verwenden. Sie könnten auch JavaScript verwenden, um zu kontrollieren, ob Animationen überhaupt auf der Seite angewendet werden. Es gibt auch eine Medienabfrage namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationen basierend auf den Betriebsystempräferenzen eines Benutzers selektiv zu bedienen oder nicht.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations), wo möglich, anstelle von JavaScript-Animationen zu verwenden (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt über JavaScript auf CSS-Animationen zuzugreifen).

### Auswahl der zu animierenden Eigenschaften

Die Animationsleistung hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften, wenn sie animiert werden, lösen einen {{Glossary("Reflow", "Reflow")}} (und damit auch ein {{Glossary("Repaint", "Repaint")}}) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Abmessungen eines Elements ändern, wie [`width`](/de/docs/Web/CSS/Reference/Properties/width), [`height`](/de/docs/Web/CSS/Reference/Properties/height), [`border`](/de/docs/Web/CSS/Reference/Properties/border), und [`padding`](/de/docs/Web/CSS/Reference/Properties/padding).
- Ein Element neu positionieren, wie [`margin`](/de/docs/Web/CSS/Reference/Properties/margin), [`top`](/de/docs/Web/CSS/Reference/Properties/top), [`bottom`](/de/docs/Web/CSS/Reference/Properties/bottom), [`left`](/de/docs/Web/CSS/Reference/Properties/left), und [`right`](/de/docs/Web/CSS/Reference/Properties/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/Reference/Properties/align-content), [`align-items`](/de/docs/Web/CSS/Reference/Properties/align-items), und [`flex`](/de/docs/Web/CSS/Reference/Properties/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie [`box-shadow`](/de/docs/Web/CSS/Reference/Properties/box-shadow).

Moderne Browser sind intelligent genug, nur den geänderten Bereich des Dokuments neu zu zeichnen, anstatt die gesamte Seite. Daher sind größere Animationen kostenaufwändiger.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity)
- [`filter`](/de/docs/Web/CSS/Reference/Properties/filter)

### Animieren auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, die Animationsarbeit von der Haupt-Thread auf die GPU des Geräts zu verlagern (auch als Komposition bezeichnet). Dies wird erreicht, indem Sie bestimmte Arten von Animationen auswählen, die der Browser automatisch an die GPU sendet, um sie zu verarbeiten; dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/Reference/Properties/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen Eigenschaften animiert wie [`position: fixed`](/de/docs/Web/CSS/Reference/Properties/position).
- Elemente mit [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) angewendet (siehe den folgenden Abschnitt).
- Bestimmte Elemente, die in ihrer eigenen Schicht gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas), und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animation auf der GPU kann zu einer verbesserten Leistung führen, insbesondere auf Mobilgeräten. Jedoch ist es nicht immer einfach, Animationen auf die GPU zu verschieben. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen vornehmen, bevor ein Element tatsächlich geändert wird. Solche Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem sie potenziell aufwendige Arbeit verrichten, bevor sie benötigt wird. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) gibt den Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE]
> `will-change` ist als letzter Ausweg gedacht, um mit bestehenden Performance-Problemen umzugehen. Es sollte nicht verwendet werden, um Performance-Probleme vorwegzunehmen.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für render-blocking

CSS kann Styles auf bestimmte Bedingungen mit Medienabfragen beschränken. Medienabfragen sind wichtig für ein Responsive Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er all diese Styles analysiert hat, wird aber nicht das Rendering von Styles blockieren, die er nicht verwenden wird, wie die Druck-Stylesheets. Indem Sie das CSS basierend auf Medienabfragen in mehrere Dateien aufteilen, können Sie das Render-Blocking während des Downloads von ungenutztem CSS verhindern. Um einen nicht-blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Styles, wie Druck-Styles, in eine separate Datei, fügen Sie dem HTML-Mark-up ein [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) hinzu und fügen Sie eine Medienabfrage hinzu, in diesem Fall, dass es sich um ein Druck-Stylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet render-blockierend ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur für ein spezifisches Szenario anwenden muss, lädt er das Stylesheet trotzdem herunter, blockiert jedoch nicht das Rendering. Durch die Trennung des CSS in mehrere Dateien ist die Hauptdatei, die das Rendering blockiert, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit, in der das Rendering blockiert ist, reduziert wird.

## Verbesserung der Schriftarten-Performance

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Web-Schriftart Performance.

Im Allgemeinen sollten Sie sorgfältig darüber nachdenken, welche Schriftarten Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Obwohl es verlockend sein kann, viele Schriftarten für visuelle Akzente zu verwenden, kann dies die Seitengeschwindigkeit erheblich verlangsamen und dazu führen, dass Ihre Seite chaotisch aussieht. Wahrscheinlich benötigen Sie nur etwa zwei oder drei Schriftarten, und Sie können mit weniger auskommen, wenn Sie entscheiden, [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftarten laden

Bedenken Sie, dass eine Schriftart nur geladen wird, wenn sie tatsächlich durch die Eigenschaft [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family) auf ein Element angewendet wird, nicht, wenn sie erstmals durch die At-Rules [`@font-face`](/de/docs/Web/CSS/@font-face) referenziert wird:

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

Es kann daher von Vorteil sein, `rel="preload"` zu verwenden, um wichtige Schriftarten frühzeitig zu laden, sodass sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist wahrscheinlich vorteilhafter, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet verborgen ist und nicht signifikant später im Analyseprozess erreicht wird. Es ist jedoch ein Kompromiss — Schriftdateien sind ziemlich groß, und wenn Sie zu viele davon vorladen, könnten Sie andere Ressourcen verzögern.

Sie können auch Folgendes in Betracht ziehen:

- Verwenden von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühe Verbindung mit dem Schriftanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Verwendung der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Ladeverhalten der Schrift über JavaScript anzupassen.

### Nur die erforderlichen Glyphen laden

Wenn Sie eine Schriftart für den Textkörper auswählen, ist es schwieriger, sich der Glyphen sicher zu sein, die darin verwendet werden, insbesondere wenn es um nutzergenerierte Inhalte und/oder Inhalte in mehreren Sprachen geht.

Wenn Sie jedoch wissen, dass Sie einen spezifischen Satz von Glyphen verwenden werden (z.B. Glyphen für Überschriften oder bestimmte Satzzeichen), könnten Sie die Anzahl der Glyphen begrenzen, die der Browser herunterladen muss. Dies kann erreicht werden, indem eine Schriftdatei erstellt wird, die nur den erforderlichen Teilbereich enthält. Ein Prozess namens [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting). Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) `@font-face`-Deskriptor kann dann verwendet werden, um zu spezifizieren, wann Ihre Teilmenge-Schriftart verwendet wird. Wenn die Seite keinen Charakter in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Schriftanzeigeverhalten mit dem `font-display`-Deskriptor definieren

Angemeldet bei der `@font-face`-Regel, definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display) Deskriptor, wie Schriftdateien vom Browser geladen und angezeigt werden, sodass Text mit einer Ersatzschrift angezeigt wird, während eine Schrift geladen oder das Laden fehlschlägt. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm zu haben, mit dem Kompromiss eines Blitzes von ungestaltetem Text.

```css
@font-face {
  font-family: "someFont";
  src: url("/path/to/fonts/someFont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Neuberechnung von Styles mit CSS-Containment

Durch die Verwendung der im [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul definierten Eigenschaften können Sie dem Browser Anweisungen geben, verschiedene Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendering einzelner Abschnitte. Als Beispiel können Sie dem Browser angeben, bestimmte Container nicht zu rendern, bis sie im Ansichtsfenster sichtbar sind.

Die Eigenschaft {{cssxref("contain")}} ermöglicht es einem Autor, genau anzugeben, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) sie auf individuelle Container auf der Seite anwenden möchten. Dies ermöglicht es dem Browser, Layout, Stil, Malen, Größe oder eine beliebige Kombination davon für einen begrenzten Teil des DOM neu zu berechnen.

```css
article {
  contain: content;
}
```

Die Eigenschaft {{cssxref("content-visibility")}} ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Reihe von Containments auf eine Reihe von Containern anzuwenden und dem Browser anzugeben, dass diese Container nicht gelayoutet und gerendert werden sollen, bis sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, die es Ihnen ermöglicht, eine Platzhaltergröße für Container bereitzustellen, während sie unter den Effekten der Containment stehen. Das bedeutet, dass die Container Platz in Anspruch nehmen, auch wenn ihre Inhalte noch nicht gerendert sind, was Containment seine Leistungsfähigkeit ohne das Risiko von Scrollbalkenänderungen und Jitter durch das Rendern und Einblenden der Elemente noch besser ermöglicht. Dies verbessert die Qualität der Benutzererfahrung beim Laden der Inhalte.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Optimierung von `:has()`-Selektoren

Die {{cssxref(":has", ":has()")}} Pseudoklasse ermöglicht leistungsstarke Auswahlmöglichkeiten, erfordert jedoch eine sorgfältige Verwendung, um Leistungsengpässe zu vermeiden. Für detaillierte Anleitungen zum Schreiben effizienter `:has()`-Selektoren siehe [Leistungsüberlegungen in der `:has()` Referenzdokumentation](/de/docs/Web/CSS/:has#performance_considerations).

## Siehe auch

- [Leistung von CSS-Animationen](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
