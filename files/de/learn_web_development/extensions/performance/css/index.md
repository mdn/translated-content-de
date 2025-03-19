---
title: CSS-Leistungsoptimierung
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Beim Entwickeln einer Website sollten Sie in Betracht ziehen, wie der Browser das CSS auf Ihrer Seite behandelt. Um Leistungsprobleme, die durch CSS verursacht werden könnten, zu mindern, sollten Sie das CSS optimieren. Zum Beispiel sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "render-blocking")}} zu minimieren und die Anzahl der erforderlichen Reflows zu reduzieren. Dieser Artikel führt Sie durch wichtige Techniken zur CSS-Leistungsoptimierung.

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
        Um mehr über den Einfluss von CSS auf die Website-Leistung zu erfahren
        und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihr CSS zu optimieren, lautet: „Was muss ich optimieren?“. Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die fast jedem Web-Projekt zugutekommen, während einige nur in bestimmten Situationen erforderlich sind. Der Versuch, alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte Ihre Zeit verschwenden. Sie sollten ermitteln, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Um dies zu tun, müssen Sie die [Leistung messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance) Ihrer Website. Wie der vorherige Link zeigt, gibt es mehrere Möglichkeiten, die Leistung zu messen, einige davon mittels anspruchsvoller [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Tools wie die in den Browser integrierten [Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) verwendet, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem bestimmten Rendering-Pfad — das Malen erfolgt erst nach dem Layout, das wiederum nach der Erstellung des Render-Baums erfolgt, was sowohl den DOM- als auch den CSSOM-Baum erfordert.

Den Benutzern eine ungestaltete Seite zu zeigen und sie dann nach dem Parsen der CSS-Stile neu zu malen, wäre eine schlechte Benutzererfahrung. Aus diesem Grund ist CSS render-blocking, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite malen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} aufgebaut hat.

Um die Konstruktion des CSSOM zu optimieren und die Seitenausführung zu verbessern, können Sie basierend auf dem aktuellen Zustand Ihres CSS Folgendes tun:

- **Unnötige Stile entfernen**: Dies mag offensichtlich klingen, aber es ist erstaunlich, wie viele Entwickler vergessen, nicht verwendete CSS-Regeln zu bereinigen, die während der Entwicklung zu ihren Stylesheets hinzugefügt wurden und letztendlich nicht verwendet wurden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layouts und Malens verwendet werden oder nicht. Daher kann es die Seitenausführung beschleunigen, nicht verwendete zu entfernen. Wie in [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammengefasst wird, ist dies ein schwieriges Problem, das für einen großen Codebestand gelöst werden muss, und es gibt keine Wunderwaffe, um nicht verwendetes CSS zuverlässig zu finden und zu entfernen. Sie müssen die Arbeit leisten, Ihr CSS modular zu halten und sorgfältig und bewusst zu sein, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: Halten Sie CSS modular, bedeutet, dass CSS, das beim Laden der Seite nicht benötigt wird, später geladen werden kann, wodurch anfängliches CSS-Render-Blocking und Ladezeiten reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Sets von Stilen — Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blocking ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt es das Stylesheet trotzdem herunter, blockiert jedoch nicht das Rendern. Indem Sie das CSS in mehrere Dateien aufteilen, ist die Haupt-render-blocking-Datei, in diesem Fall `styles.css`, wesentlich kleiner, wodurch die Zeit, in der das Rendering blockiert wird, reduziert wird.

- **Minifizieren und komprimieren Sie Ihr CSS**: Minifizieren bedeutet, alle Leerzeichen aus der Datei zu entfernen, die nur zur besseren Lesbarkeit für Menschen vorhanden sind, sobald der Code in Produktion geht. Sie können die Ladezeiten erheblich reduzieren, indem Sie Ihr CSS minifizieren. Das Minifizieren erfolgt in der Regel im Rahmen eines Build-Prozesses (zum Beispiel minifiziert die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt zur Bereitstellung erstellen). Neben der Minifizierung stellen Sie sicher, dass der Server, auf dem Ihre Seite gehostet wird, Komprimierung wie gzip auf Dateien anwendet, bevor sie ausgeliefert werden.

- **Vereinfachen Sie die Selektoren**: Oft schreiben Menschen Selektoren, die komplexer sind, als nötig wäre, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Parsing-Zeit für diese Selektoren. Zum Beispiel:

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

  Ihre Selektoren weniger komplex und spezifisch zu machen, ist auch gut für die Pflege. Es ist leicht zu verstehen, was einfache Selektoren tun, und es ist leicht, Stile zu überschreiben, wenn später benötigt wird, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Wenden Sie keine Stile mehr Elemente an, als benötigt**: Ein häufiger Fehler ist, Stile auf alle Elemente mithilfe des [Universalselektors](/de/docs/Web/CSS/Universal_selectors) anzuwenden, oder zumindest, auf mehr Elemente, als benötigt werden. Diese Art von Styling kann die Leistung negativ beeinflussen, besonders auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Bedenken Sie, dass viele Eigenschaften (wie z.B. {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und mächtige Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam eingesetzt werden. Wenn Sie sie überall verwenden, kann dies alle Arten von unerwartetem Verhalten verursachen.

- **Verringern Sie HTTP-Anfragen für Bilder mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) sind eine Technik, bei der mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Website verwenden möchten, in eine einzelne Bilddatei platziert und dann unterschiedliche {{cssxref("background-position")}}-Werte verwendet werden, um den Bildausschnitt anzuzeigen, den Sie an jeder unterschiedlichen Stelle anzeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die zur Abholung der Bilder erforderlich sind, erheblich reduzieren.

- **Wichtige Ressourcen vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Vorlader für kritische Ressourcen zu verwandeln. Dazu gehören CSS-Dateien, Schriftarten und Bilder:

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

  Mit `preload` wird der Browser die referenzierten Ressourcen so schnell wie möglich abrufen und sie im Browser-Cache verfügbar machen, damit sie schneller bereit sind, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, Ressourcen mit hoher Priorität vorzuladen, mit denen der Benutzer frühzeitig auf einer Seite in Kontakt kommt, damit die Erfahrung so reibungslos wie möglich ist. Beachten Sie, dass Sie auch `media`-Attribute verwenden können, um responsive Vorlader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flüssiger erscheinen lassen und den Benutzern das Gefühl geben, dass Fortschritte erzielt werden, während sie darauf warten, dass eine Seite geladen wird (z.B. Lade-Spinner). Größere Animationen und eine größere Anzahl von Animationen erfordern jedoch natürlich mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Steuerung/eine Site-Einstellung bereitstellen, um Animationen auszuschalten, wenn sie ein leistungsschwaches Gerät oder ein Mobilgerät mit begrenzter Akkukapazität verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob Animationen überhaupt auf der Seite angewendet werden. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um animierte Stile selektiv bereitzustellen oder nicht, basierend auf den Betriebssystem-Einstellungen eines Benutzers für Animationen.

Für unverzichtbare DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wo immer möglich, anstatt von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mittels JavaScript einzugreifen).

### Auszuwählende Eigenschaften zum Animieren

Die Animationsleistung hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften führen bei Animationen zu einem {{Glossary("Reflow", "Reflow")}} (und daher auch zu einem {{Glossary("Repaint", "Repaint")}}) und sollten vermieden werden. Dazu gehören Eigenschaften, die Folgendes ändern:

- Die Dimensionen eines Elements, wie z.B. [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border), und [`padding`](/de/docs/Web/CSS/padding).
- Die Position eines Elements, wie z.B. [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left), und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements, wie z.B. [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items), und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte, die die Geometrie des Elements ändern, wie z.B. [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind intelligent genug, um nur den geänderten Bereich des Dokuments neu zu malen, anstatt die gesamte Seite. Größere Animationen sind daher kostspieliger.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die kein Reflow/Neulackieren verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animieren auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, die Animationsarbeit vom Haupt-Thread auf die GPU des Geräts zu verlagern (auch als Kompositing bezeichnet). Dies wird durch die Wahl bestimmter Arten von Animationen erreicht, die der Browser automatisch an die GPU sendet; hierzu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/will-change) (siehe Abschnitt unten).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Element/video), [`<canvas>`](/de/docs/Web/HTML/Element/canvas), und [`<iframe>`](/de/docs/Web/HTML/Element/iframe).

Animationen auf der GPU können zu einer besseren Leistung führen, insbesondere auf Mobilgeräten. Das Verschieben von Animationen zur GPU ist jedoch nicht immer so einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können vorab Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell kostenintensive Arbeiten vorab erledigt werden. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt den Browsern einen Hinweis darauf, wie erwartet wird, dass sich ein Element ändert.

> **Note:** `will-change` ist als letztes Mittel gedacht, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme im Voraus zu erwarten.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile durch Media Queries auf bestimmte Bedingungen beschränken. Media Queries sind für responsives Webdesign wichtig und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er all diese Stile analysiert hat, aber blockiert das Rendering nicht für Stile, von denen er weiß, dass sie nicht verwendet werden, wie zum Beispiel die Druck-Stilvorlagen. Durch das Aufteilen des CSS in mehrere Dateien basierend auf Media Queries können Sie das Render-Blocking während des Downloads ungenutzter CSS verhindern. Um einen nicht-blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie z. B. Druckstile, in eine separate Datei, fügen Sie dem HTML-Markup einen [`<link>`](/de/docs/Web/HTML/Element/link) hinzu und fügen Sie eine Media Query hinzu, die hier angibt, dass es sich um eine Druckstilvorlage handelt.

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

Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blocking ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, weiß er, dass es nur in einem bestimmten Szenario angewendet werden muss. Er lädt das Stylesheet dennoch herunter, blockiert das Rendern jedoch nicht. Durch das Aufteilen des CSS in mehrere Dateien ist die Haupt-render-blocking-Datei, in diesem Fall `styles.css`, viel kleiner und reduziert die Zeit, die das Rendern blockiert wird.

## Verbesserung der Schriftleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webschrift-Performance.

Generell sollten Sie sorgfältig über die Schriftarten nachdenken, die Sie auf Ihrer Seite verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Während es verlockend sein kann, viele Schriftarten für visuelle Spannung zu verwenden, kann dies das Laden der Seite erheblich verlangsamen und dazu führen, dass Ihre Seite unordentlich aussieht. Sie benötigen wahrscheinlich nur etwa zwei oder drei Schriftarten und können sogar mit weniger auskommen, wenn Sie sich entscheiden, [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftarten laden

Bedenken Sie, dass eine Schriftart nur dann geladen wird, wenn sie tatsächlich auf ein Element durch die Eigenschaft [`font-family`](/de/docs/Web/CSS/font-family) angewendet wird, und nicht, wenn sie erstmals durch die [`@font-face`](/de/docs/Web/CSS/@font-face) Regel referenziert wird:

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

Daher kann es vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriftarten früh zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist eher von Vorteil, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet verborgen ist und erst deutlich später im Parsing-Prozess erreicht wird. Es bleibt jedoch ein Kompromiss — Schriftdateien sind ziemlich groß, und wenn Sie zu viele von ihnen vorladen, könnten Sie andere Ressourcen verzögern.

Sie können auch in Betracht ziehen:

- Verwenden von [`rel="preconnect"`](/de/docs/Web/HTML/Attributes/rel/preconnect), um eine frühe Verbindung mit dem Schriftanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Verwenden der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Ladeverhalten von Schriftarten mittels JavaScript zu individualisieren.

### Nur die benötigten Glyphen laden

Wenn Sie eine Schriftart für Fließtext wählen, ist es schwieriger, die Glyphen zu bestimmen, die darin verwendet werden, besonders wenn Sie mit benutzergeneriertem Inhalt und/oder Inhalten in mehreren Sprachen arbeiten.

Wenn Sie jedoch wissen, dass Sie nur einen bestimmten Satz von Glyphen verwenden (zum Beispiel Glyphen für Überschriften oder bestimmte Satzzeichen), könnten Sie die Anzahl der Glyphen einschränken, die der Browser herunterladen muss. Dies kann durch das Erstellen einer Schriftdatei erreicht werden, die nur den erforderlichen Zeichensatz enthält. Ein Verfahren, das als [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting) bezeichnet wird. Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) `@font-face` Deskriptor kann dann verwendet werden, um anzugeben, wann Ihre Teilzeichensatzschriftart verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schrift nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Festlegen des Schriftanzeigeverhaltens mit dem `font-display` Deskriptor

Angewendet auf die `@font-face` Regel, legt der [`font-display`](/de/docs/Web/CSS/@font-face/font-display) Deskriptor fest, wie Schriftdateien vom Browser geladen und angezeigt werden, sodass Text mit einer Ersatzschrift angezeigt wird, während eine Schriftart lädt oder nicht lädt. Dies verbessert die Leistung, da der Text sichtbar ist, anstatt einen leeren Bildschirm zu haben, mit dem Kompromiss eines Blitzes von ungestaltetem Text.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Stilrekalkulation mit CSS-Containment

Indem Sie die im [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul definierten Eigenschaften verwenden, können Sie dem Browser anweisen, unterschiedliche Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendern einzelner Abschnitte. Zum Beispiel können Sie dem Browser angeben, dass bestimmte Container nicht gerendert werden sollen, bis sie im Sichtfenster sichtbar sind.

Die {{cssxref("contain")}} Eigenschaft ermöglicht es einem Autor, genau anzugeben, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) sie auf einzelne Container auf der Seite anwenden möchten. Dadurch kann der Browser das Layout, den Stil, das Malen, die Größe oder eine Kombination dieser für einen begrenzten Teil des DOMs neu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}} Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Reihe von Containments auf eine Reihe von Containern anzuwenden und anzugeben, dass der Browser diese Container erst dann auslegen und rendern soll, wenn sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, mit der Sie eine Platzhaltergröße für Container bereitstellen können, während sie unter den Effekten der Eindämmung stehen. Dies bedeutet, dass die Container Platz in Anspruch nehmen, auch wenn ihre Inhalte noch nicht gerendert wurden, wodurch die Eindämmung ihre Leistungsmagie ausüben kann, ohne das Risiko von Scrollleistenverschiebungen und -ruckeln das Rendern und Sichtbarwerden der Elemente beeinträchtigt. Dies verbessert die Qualität der Benutzererfahrung, während der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
