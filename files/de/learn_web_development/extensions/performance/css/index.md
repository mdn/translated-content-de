---
title: CSS Leistungsoptimierung
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Bei der Entwicklung einer Website müssen Sie berücksichtigen, wie der Browser das CSS Ihrer Seite verarbeitet. Um mögliche Leistungsprobleme, die durch CSS verursacht werden könnten, zu mindern, sollten Sie es optimieren. Zum Beispiel sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "Render-Blocking")}} zu reduzieren und die Anzahl der erforderlichen Reflows zu minimieren. Dieser Artikel führt Sie durch wichtige Techniken zur CSS-Leistungsoptimierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Installation grundlegender Software</a
        > und grundlegende Kenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >Client-seitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Informationen über den Einfluss von CSS auf die Website-Leistung
        und darüber, wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie sich stellen sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, ist: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen erforderlich sind. Der Versuch, alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt erforderlich sind.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, wobei einige ausgeklügelte [Performance-APIs](/de/docs/Web/API/Performance_API) beinhalten. Der beste Weg, um zu beginnen, besteht jedoch darin, zu lernen, wie Sie Tools wie integrierte Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) verwenden, um zu sehen, welche Teile des Seitenladevorgangs lange dauern und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem bestimmten Renderpfad — das Malen erfolgt erst nach dem Layout, das nach dem Erstellen des Renderbaums stattfindet, der wiederum sowohl die DOM- als auch die CSSOM-Bäume erfordert.

Ein ungestaltetes Seite den Nutzern zu zeigen und sie dann neu zu malen, nachdem die CSS-Stile analysiert wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund blockiert CSS das Rendern, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite malen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um die Erstellung des CSSOM zu optimieren und die Seitenleistung zu verbessern, können Sie abhängig vom aktuellen Stand Ihres CSS eines oder mehrere der folgenden Dinge tun:

- **Unnötige Stile entfernen**: Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte CSS-Regeln zu bereinigen, die während der Entwicklung zu ihren Stylesheets hinzugefügt und letztendlich nicht verwendet wurden. Alle Stile werden analysiert, egal ob sie während des Layouts und Malens verwendet werden oder nicht, daher kann es die Seitendarstellung beschleunigen, ungenutzte Stile zu entfernen. Wie [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem, das in einem großen Codebestand zu lösen ist, und es gibt keine Wunderwaffe, um ungenutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und vorsichtig und überlegt vorzugehen, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: Ein modulares CSS bedeutet, dass CSS, das beim Laden der Seite nicht erforderlich ist, später geladen werden kann, wodurch initiales CSS-Render-Blocking und Ladezeiten reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Sets von Stilen — Standardstile, die immer geladen werden, Stile, die nur beim Drucken des Dokuments geladen werden, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet Renderblocking ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet dennoch herunter, blockiert das Rendern jedoch nicht. Durch die Aufteilung des CSS in mehrere Dateien ist die Hauptdatei, die das Rendern blockiert, in diesem Fall `styles.css`, viel kleiner und reduziert die Zeit, in der das Rendern blockiert wird.

- **CSS minimieren und komprimieren**: Minimierung bedeutet, das gesamte Leerzeichen im Code zu entfernen, das nur für die menschliche Lesbarkeit vorhanden ist, sobald der Code in Produktion geht. Durch das Minimieren Ihres CSS können Sie die Ladezeiten erheblich reduzieren. Die Minimierung erfolgt in der Regel als Teil eines Build-Prozesses (zum Beispiel werden die meisten JavaScript-Frameworks den Code minimieren, wenn Sie ein Projekt für die Bereitstellung erstellen). Zusätzlich zur Minimierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, eine Komprimierung wie gzip auf Dateien anwendet, bevor sie bereitgestellt werden.

- **Selektoren vereinfachen**: Menschen schreiben oft Selektoren, die komplexer sind als notwendig, um die benötigten Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Analysezeit für diese Selektoren. Zum Beispiel:

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

  Weniger komplexe und spezifische Selektoren zu verwenden ist auch gut für die Wartung. Es ist leicht zu verstehen, was einfache Selektoren tun, und es ist einfacher, Stile später zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Keine Stile auf mehr Elemente anwenden als nötig**: Ein häufiger Fehler ist, Stile auf alle Elemente mit dem [universellen Selektor](/de/docs/Web/CSS/Universal_selectors) oder zumindest auf mehr Elemente als nötig anzuwenden. Diese Art des Stylings kann die Leistung negativ beeinflussen, insbesondere auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam verwendet werden. Sie überall zu nutzen kann zu unerwartetem Verhalten führen.

- **HTTP-Anfragen für Bilder mit CSS-Sprites reduzieren**: [CSS-Sprites](https://css-tricks.com/css-sprites/) sind eine Technik, bei der mehrere kleine Bilder (z. B. Icons), die Sie auf Ihrer Seite verwenden möchten, in einer einzigen Bilddatei platziert werden und dann verschiedene {{cssxref("background-position")}}-Werte verwenden, um den Bildausschnitt anzuzeigen, den Sie an jedem Ort zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die zum Abrufen der Bilder erforderlich sind, drastisch reduzieren.

- **Wichtige Ressourcen vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Vorladeressourcen für kritische Inhalte zu verwandeln. Dies schließt CSS-Dateien, Schriftarten und Bilder ein:

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

  Mit `preload` wird der Browser die referenzierten Ressourcen so schnell wie möglich abrufen und im Browser-Cache verfügbar machen, sodass sie früher verwendet werden können, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, hochpriorisierte Ressourcen vorzuhalten, denen der Nutzer früh auf einer Seite begegnen wird, um die Erfahrung so reibungslos wie möglich zu gestalten. Beachten Sie, dass Sie auch `media`-Attribute verwenden können, um ansprechbare Vorladeressourcen zu erstellen.

  Siehe auch [Kritische Ressourcen vorladen, um die Ladegeschwindigkeit zu verbessern](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Handhabung von Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flüssiger erscheinen lassen und den Nutzern das Gefühl geben, dass Fortschritt gemacht wird, wenn sie auf das Laden einer Seite warten (z. B. Ladespinner). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch naturgemäß mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der einfachste Ratschlag ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Nutzern auch eine Kontrolle oder eine Site-Präferenz anbieten, um Animationen auszuschalten, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkuleistung verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob eine Animation überhaupt auf der Seite angewendet wird. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationen je nach den Präferenzen des Betriebssystems des Nutzers selektiv zu bedienen oder nicht.

Für wichtige DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) nach Möglichkeit zu verwenden, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt auf CSS-Animationen mit JavaScript zuzugreifen).

### Auswahl von Eigenschaften zum Animieren

Als nächstes hängt die Animationsleistung stark von den Eigenschaften ab, die Sie animieren. Bestimmte Eigenschaften lösen beim Animieren einen {{Glossary("Reflow", "Reflow")}} (und daher auch ein {{Glossary("Repaint", "Repaint")}}) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Dimensionen eines Elements ändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element umpositionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left), und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items) und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind klug genug, nur den geänderten Bereich des Dokuments neu zu malen, anstatt die gesamte Seite. Infolgedessen sind größere Animationen kostspieliger.

Wo immer möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animationen auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, die Animationsarbeiten vom Haupt-Thread auf die GPU des Geräts (auch als Kompositing bezeichnet) zu verlagern. Dies wird erreicht, indem bestimmte Arten von Animationen gewählt werden, die der Browser automatisch an die GPU senden wird; dazu gehören:

- 3D-Transform-Animationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit der Anwendung von [`will-change`](/de/docs/Web/CSS/will-change) (siehe den folgenden Abschnitt).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animationen auf der GPU können zu einer verbesserten Leistung führen, insbesondere auf mobilen Geräten. Es ist jedoch nicht immer einfach, Animationen auf die GPU zu verlagern. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Elementänderungen mit `will-change` optimieren

Browser können Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Arten von Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell aufwendige Arbeiten erledigt werden, bevor sie benötigt werden. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt den Browsern einen Hinweis darauf, wie ein Element voraussichtlich geändert wird.

> [!NOTE]
> `will-change` ist als letztes Mittel gedacht, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen.

```css
.element {
  will-change: opacity, transform;
}
```

## Render-Blocking optimieren

CSS kann Stile auf bestimmte Bedingungen mit Hilfe von Media Queries beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Renderpfad zu optimieren. Der Browser blockiert das Rendern, bis er alle diese Stile analysiert hat, aber er wird das Rendern nicht blockieren für Stile, von denen er weiß, dass sie nicht benötigt werden, wie Druck-Stylesheets. Indem man CSS-Dateien basierend auf Media Queries in mehrere Dateien aufteilt, kann man das Render-Blocking während des Downloads von ungenutztem CSS verhindern. Um einen nicht blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort benötigten Stile, wie Druckstile, in eine separate Datei, fügen Sie einen [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) zum HTML-Markup hinzu und fügen Sie eine Media Query hinzu, in diesem Fall, dass es sich um ein Druck-Stylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig nimmt der Browser an, dass jedes spezifizierte Stylesheet Rendering blockiert. Sagen Sie dem Browser, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, dessen Anwendung er nur für ein spezifisches Szenario benötigt, lädt er das Stylesheet trotzdem herunter, blockiert das Rendering jedoch nicht. Indem das CSS in mehrere Dateien aufgeteilt wird, ist die Hauptdatei, die das Rendering blockiert, in diesem Fall `styles.css`, viel kleiner, was die Zeit reduziert, die das Rendering blockiert.

## Verbesserung der Schriftleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webfont-Leistung.

Generell sollten Sie sorgfältig über die Schriften nachdenken, die Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Während es verlockend sein kann, viele Schriften für optische Abwechslung zu verwenden, kann dies das Laden der Seite erheblich verlangsamen und dazu führen, dass Ihre Website wie ein Durcheinander aussieht. Wahrscheinlich benötigen Sie nur etwa zwei bis drei Schriften, und Sie können mit weniger auskommen, wenn Sie sich entscheiden, [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftladen

Beachten Sie, dass eine Schriftart nur geladen wird, wenn sie tatsächlich auf ein Element mit der Eigenschaft [`font-family`](/en-US/docsWeb/CSS/font-family) angewendet wird, und nicht, wenn sie erstmals mit der Regel [`@font-face`](/de/docs/Web/CSS/@font-face) referenziert wird:

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

Aus diesem Grund kann es vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriften frühzeitig zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist eher dann von Vorteil, wenn die `font-family`-Deklaration in einem großen externen Stylesheet versteckt ist und erst deutlich später im Parsing-Prozess erreicht wird. Es ist jedoch ein Kompromiss — Schriftdateien sind ziemlich groß, und wenn Sie zu viele davon vorladen, können Sie andere Ressourcen verzögern.

Sie können auch Folgendes in Betracht ziehen:

- Die Verwendung von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühe Verbindung zum Schriftanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Die Nutzung der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Ladevorgangsverhalten der Schriftart über JavaScript anzupassen.

### Nur die benötigten Glyphen laden

Wenn Sie eine Schriftart für den Fließtext wählen, ist es schwieriger, sicher über die verwendeten Glyphen zu sein, besonders wenn Sie mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen arbeiten.

Wenn Sie jedoch wissen, dass Sie eine bestimmte Glyphenmenge verwenden werden (zum Beispiel nur Glyphen für Überschriften oder bestimmte Satzzeichen), könnten Sie die Anzahl der Glyphen begrenzen, die der Browser herunterladen muss. Dies kann durch die Erstellung einer Schriftdatei geschehen, die nur das erforderliche Subset enthält. Ein Vorgang namens [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting). Der `@font-face`-Deskriptor [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) kann dann verwendet werden, um anzugeben, wann Ihre Teilschrift verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schrift nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Anzeigebehavior der Schrift mit dem `font-display`-Deskriptor definieren

Auf die Regel `@font-face` angewendet, definiert der Deskriptor [`font-display`](/de/docs/Web/CSS/@font-face/font-display), wie Schriften vom Browser geladen und dargestellt werden, was es ermöglicht, Text mit einer Ersatzschrift zu zeigen, während eine Schriftart geladen oder das Laden nicht erfolgreich abgeschlossen wird. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm zu zeigen, wobei ein Kompromiss ein Blitz aus nicht gestalteten Text ist.

```css
@font-face {
  font-family: "someFont";
  src: url("/path/to/fonts/someFont.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung von Stilberechnungen mit CSS-Containment

Durch die Verwendung der im [CSS Containment](/de/docs/Web/CSS/CSS_containment) definierten Eigenschaften können Sie den Browser anweisen, verschiedene Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendering individueller Abschnitte. Zum Beispiel können Sie dem Browser angeben, bestimmte Container erst zu rendern, wenn sie im Ansichtsfenster sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft ermöglicht es einem Autor, genau anzugeben, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) sie auf einzelne Container auf der Seite angewendet haben möchten. Dies ermöglicht es dem Browser, das Layout, den Stil, das Malen, die Größe oder jede Kombination davon nur für einen begrenzten Teil der DOM neu zu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Reihe von Containments auf einen Satz von Containern anzuwenden und anzugeben, dass der Browser diese Container erst layouten und rendern soll, wenn sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, die es Ihnen ermöglicht, eine Platzhaltergröße für Container bereitzustellen, während sie unter den Auswirkungen der Containment stehen. Das bedeutet, dass die Container Platz einnehmen, auch wenn ihre Inhalte noch nicht gerendert wurden, was es der Containment ermöglicht, ihre Leistungszauberei zu vollbringen, ohne die Gefahr einer Scrollleistenverschiebung und eines Stocksens, wenn Elemente gerendert und sichtbar werden. Dies verbessert die Qualität der Benutzererfahrung, wenn der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Optimierung von `:has()`-Selektoren

Die {{cssxref(":has", ":has()")}}-Pseudoklasse ermöglicht leistungsstarke Auswahlmöglichkeiten, erfordert jedoch eine sorgfältige Anwendung, um Leistungsengpässe zu vermeiden. Für ausführliche Anleitungen zum effizienten Schreiben von `:has()`-Selektoren siehe [Performance considerations in the `:has()` reference documentation](/de/docs/Web/CSS/:has#performance_considerations).

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
