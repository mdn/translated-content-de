---
title: CSS-Leistungsoptimierung
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Bei der Entwicklung einer Website müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite verarbeitet. Um mögliche Leistungsprobleme, die durch CSS verursacht werden, zu mindern, sollten Sie es optimieren. Zum Beispiel sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "Render-Blocking")}} zu reduzieren und die Anzahl erforderlicher Neuberechnungen zu minimieren. Dieser Artikel führt Sie durch wichtige CSS-Leistungsoptimierungstechniken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und grundlegende Kenntnisse über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Informationen über den Einfluss von CSS auf die Website-Leistung
        zu erhalten und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihr CSS zu optimieren, ist: "Was muss ich optimieren?". Einige der hier besprochenen Tipps und Techniken sind gute Praktiken, die fast jedem Webprojekt zugutekommen, während einige nur in bestimmten Situationen benötigt werden. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige umfassen raffinierte [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Tools wie die integrierten Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools)Tools verwendet, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem bestimmten Renderpfad — Painting erfolgt nur nach dem Layout, das nach Erstellung des Renderbaums erfolgt, der wiederum sowohl den DOM- als auch den CSSOM-Baum benötigt.

Ein Nutzer eine ungestylte Seite zu zeigen und sie dann neu zu rendern, nachdem die CSS-Stile geparst wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund blockiert CSS das Rendern, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite malen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um die Erstellung des CSSOM zu optimieren und die Seitenleistung zu verbessern, können Sie je nach dem aktuellen Stand Ihres CSS eines oder mehrere der folgenden Dinge tun:

- **Unnötige Stile entfernen**: Dies mag offensichtlich klingen, aber überraschend viele Entwickler vergessen, nicht verwendete CSS-Regeln aufzuräumen, die während der Entwicklung zu ihren Stylesheets hinzugefügt wurden und am Ende nicht verwendet wurden. Alle Stile werden geparst, unabhängig davon, ob sie während des Layouts und des Paintings verwendet werden oder nicht, sodass es die Seitenrendering-Beschleunigung beschleunigt, die nicht verwendeten zu entfernen. Wie [Wie entfernen Sie nicht verwendetes CSS von einer Website?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem, das für einen großen Codebestand zu lösen ist, und es gibt keine Wunderwaffe, um nicht verwendetes CSS zuverlässig zu finden und zu entfernen. Sie müssen die mühsame Arbeit leisten, Ihr CSS modular zu halten und sorgfältig und bewusst zu sein, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: CSS modular zu halten bedeutet, dass das CSS, das beim Laden der Seite nicht benötigt wird, später geladen werden kann, wodurch das anfängliche CSS-Renderblocking und die Ladezeiten reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Sets von Stilen — Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet das Rendering blockiert. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media` Attribut mit einer [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet herunter, blockiert jedoch nicht das Rendering. Indem Sie das CSS in mehrere Dateien aufteilen, ist die Hauptdatei, die das Rendering blockiert, in diesem Fall `styles.css`, viel kleiner und reduziert die Zeit, in der das Rendering blockiert ist.

- **Minimieren und komprimieren Sie Ihr CSS**: Das Minimieren bedeutet, alle Leerzeichen in der Datei zu entfernen, die nur zur besseren Lesbarkeit vorhanden sind, wenn der Code in Produktion gestellt wird. Sie können die Ladezeiten erheblich reduzieren, indem Sie Ihr CSS minimieren. Die Minimierung erfolgt in der Regel als Teil eines Build-Prozesses (zum Beispiel minimieren die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt für die Bereitstellung bereitstellen). Zusätzlich zur Minimierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, Dateien vor dem Bereitstellen komprimiert, z.B. mit gzip.

- **Selektoren vereinfachen**: Menschen schreiben oft Selektoren, die komplexer sind als nötig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Parsing-Zeit für diese Selektoren. Zum Beispiel:

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

  Ihre Selektoren weniger komplex und spezifisch zu machen, ist auch gut für die Wartung. Es ist leicht zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile bei Bedarf zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Wenden Sie Stile nicht auf mehr Elemente an als nötig**: Ein häufiger Fehler ist, Stile auf alle Elemente anzuwenden, zum Beispiel mit dem [universellen Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors), oder zumindest auf mehr Elemente als nötig. Diese Art von Styling kann die Leistung negativ beeinflussen, insbesondere auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam eingesetzt werden. Wenn Sie sie überall verwenden, kann dies zu unerwartetem Verhalten führen.

- **HTTP-Anfragen für Bilder mit CSS-Sprites reduzieren**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, bei der mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Website verwenden möchten, in eine einzelne Bilddatei platziert werden und dann unterschiedliche {{cssxref("background-position")}} Werte verwendet werden, um den Bildausschnitt anzuzeigen, den Sie an jedem einzelnen Ort zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die benötigt werden, um die Bilder abzurufen, erheblich reduzieren.

- **Wichtige Ressourcen vorab laden**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}} Elemente in Vorlader für kritische Ressourcen zu verwandeln. Dazu gehören CSS-Dateien, Schriftarten und Bilder:

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

  Mit `preload` wird der Browser die referenzierten Ressourcen so schnell wie möglich abrufen und sie im Browsercache verfügbar machen, sodass sie früher bereitstehen, wenn sie im weiteren Codeverlauf referenziert werden. Es ist nützlich, hochpriorisierte Ressourcen vorab zu laden, denen der Nutzer frühzeitig auf einer Seite begegnet, sodass das Erlebnis so reibungslos wie möglich ist. Beachten Sie auch, dass Sie `media` Attribute verwenden können, um responsive Vorlader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Oberflächen reaktionsschneller erscheinen lassen und Nutzer das Gefühl geben, dass Fortschritte gemacht werden, während sie darauf warten, dass eine Seite geladen wird (zum Beispiel Ladeindikatoren). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch zwangsläufig mehr Rechenleistung, um sie zu verarbeiten, was die Leistung beeinträchtigen kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten Nutzern auch eine Kontrollmöglichkeit bzw. Website-Einstellung bieten, um Animationen abzuschalten, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Batterieleistung verwenden. Auch könnten Sie JavaScript verwenden, um zu steuern, ob Animationen überhaupt auf die Seite angewendet werden. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), die verwendet werden kann, um Animationsstile selektiv bereitzustellen oder nicht, basierend auf den Betriebssystemvorlieben des Nutzers in Bezug auf Animationen.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) zu verwenden, wo möglich, anstatt JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzuhaken).

### Zu animierende Eigenschaften auswählen

Als nächstes hängt die Animationsleistung stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften, die bei der Animation eine {{Glossary("Reflow", "Neuberechnung")}} (und daher auch eine {{Glossary("Repaint", "Neumalung")}}) auslösen, sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Abmessungen eines Elements ändern, wie [`width`](/de/docs/Web/CSS/Reference/Properties/width), [`height`](/de/docs/Web/CSS/Reference/Properties/height), [`border`](/de/docs/Web/CSS/Reference/Properties/border), und [`padding`](/de/docs/Web/CSS/Reference/Properties/padding).
- Ein Element umpositionieren, wie [`margin`](/de/docs/Web/CSS/Reference/Properties/margin), [`top`](/de/docs/Web/CSS/Reference/Properties/top), [`bottom`](/de/docs/Web/CSS/Reference/Properties/bottom), [`left`](/de/docs/Web/CSS/Reference/Properties/left), und [`right`](/de/docs/Web/CSS/Reference/Properties/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/Reference/Properties/align-content), [`align-items`](/de/docs/Web/CSS/Reference/Properties/align-items), und [`flex`](/de/docs/Web/CSS/Reference/Properties/flex).
- Visuelle Effekte hinzufügen, die die Elementgeometrie ändern, wie [`box-shadow`](/de/docs/Web/CSS/Reference/Properties/box-shadow).

Moderne Browser sind intelligent genug, um nur den geänderten Bereich des Dokuments neu zu malen, anstatt die gesamte Seite. Infolgedessen sind größere Animationen kostspieliger.

Wenn es irgendwie möglich ist, ist es besser, Eigenschaften zu animieren, die keine Neuberechnung/Neumalung verursachen. Dazu gehören:

- [Transformationen](/de/docs/Web/CSS/Guides/Transforms)
- [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity)
- [`filter`](/de/docs/Web/CSS/Reference/Properties/filter)

### Animationen auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, Animationsarbeit vom Haupt-Thread auf die GPU des Geräts zu verlagern (auch als Compositing bezeichnet). Dies geschieht, indem Sie bestimmte Arten von Animationen wählen, die der Browser automatisch an die GPU sendet, um sie zu bearbeiten; dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/Reference/Properties/transform) und [`rotate3d()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften, wie [`position: fixed`](/de/docs/Web/CSS/Reference/Properties/position).
- Elemente, auf die [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) angewendet wurde (siehe Abschnitt unten).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas), und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animationen auf der GPU können zu einer verbesserten Leistung führen, insbesondere auf mobilen Geräten. Das Verlegen von Animationen zur GPU ist jedoch nicht immer einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Solche Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell aufwändige Arbeiten durchgeführt werden, bevor sie erforderlich sind. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) gibt Browsern an, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE]
> `will-change` ist als letzter Ausweg zu verwenden, um bestehende Leistungsprobleme zu beheben. Es sollte nicht verwendet werden, um Leistungsprobleme im Voraus zu antizipieren.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries abzielen. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er alle diese Stile analysiert hat, er blockiert jedoch nicht das Rendering bei Stilen, von denen er weiß, dass er sie nicht verwenden wird, wie zum Beispiel die Druckstylesheets. Indem Sie das CSS in mehrere Dateien basierend auf Media Queries aufteilen, können Sie das Renderblockieren während des Downloads von nicht verwendetem CSS verhindern. Um einen nicht blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie zum Beispiel Druckstile, in separate Dateien, fügen Sie der HTML-Auszeichnung ein [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) hinzu und fügen Sie eine Media Query hinzu, in diesem Fall, dass es sich um ein Druck Stylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet das Rendering blockiert. Sagen Sie dem Browser, wann das Stylesheet angewendet werden soll, indem Sie ein `media` Attribut mit der [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using) hinzufügen. Wenn der Browser ein Stylesheet sieht, weiß er, dass es nur für ein bestimmtes Szenario angewendet werden muss, und lädt jedoch nicht blockierend herunter. Indem Sie das CSS in mehrere Dateien aufteilen, ist die Hauptdatei, die das Rendering blockiert, in diesem Fall `styles.css`, viel kleiner und reduziert die Zeit, in der das Rendering blockiert ist.

## Verbesserung der Schriftartleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Web-Schriftartenleistung.

Im Allgemeinen sollten Sie sorgfältig über die Schriften nachdenken, die Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Obwohl es verlockend sein kann, viele Schriftarten für visuelle Aufregung zu verwenden, kann dies die Seitenladezeit erheblich verlangsamen und dazu führen, dass Ihre Site wie ein Durcheinander aussieht. Sie benötigen wahrscheinlich nur etwa zwei oder drei Schriftarten, und weniger können ausreichen, wenn Sie sich entscheiden, [web-sichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftartenladen

Bedenken Sie, dass eine Schriftart nur geladen wird, wenn sie tatsächlich auf ein Element mit der Eigenschaft [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family) angewendet wird, nicht wenn sie zum ersten Mal mit der At-Regel [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face) referenziert wird:

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

Dies ist wahrscheinlich von Vorteil, wenn Ihre `font-family` Deklaration in einem großen externen Stylesheet versteckt ist und nicht deutlich später im Parsing-Prozess erreicht wird. Es ist jedoch ein Kompromiss — Schriftdateien sind ziemlich groß, und wenn Sie zu viele davon vorab laden, könnten Sie andere Ressourcen verzögern.

Sie können auch in Betracht ziehen:

- Das Verwenden von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühe Verbindung mit dem Schriftartenanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Die Verwendung der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Schriftarten-Ladeverhalten über JavaScript anzupassen.

### Nur die benötigten Glyphen laden

Wenn Sie eine Schriftart für Textkörper wählen, ist es schwieriger, sicher zu sein, welche Glyphen darin verwendet werden, insbesondere wenn Sie mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen arbeiten.

Wenn Sie jedoch wissen, dass Sie eine bestimmte Gruppe von Glyphen verwenden werden (zum Beispiel nur Glyphen für Überschriften oder spezifische Satzzeichen), könnten Sie die Anzahl der Glyphen begrenzen, die der Browser herunterladen muss. Dies kann getan werden, indem eine Schriftdatei erstellt wird, die nur das erforderliche Subset enthält. Ein Prozess, der als [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting) bezeichnet wird. Der [`unicode-range`](/de/docs/Web/CSS/Reference/At-rules/@font-face/unicode-range) `@font-face` Deskriptor kann dann verwendet werden, um anzugeben, wann Ihre Teilmenge-Schriftart benutzt wird. Wenn die Seite keine Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Anzeigeverhalten von Schriftarten mit dem `font-display` Deskriptor definieren

Angewandt auf die At-Regel `@font-face`, definiert der [`font-display`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-display) Deskriptor, wie Schriftdateien vom Browser geladen und angezeigt werden, damit Text mit einer Ersatzschrift erscheint, während eine Schrift geladen wird, oder nicht geladen werden kann. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm anzuzeigen, mit dem Kompromiss eines ungestylten Textblitzes.

```css
@font-face {
  font-family: "someFont";
  src: url("/path/to/fonts/someFont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Neuberechnung von Stilen mit CSS-Containment

Durch die Verwendung der im [CSS-Containment](/de/docs/Web/CSS/Guides/Containment) Modul definierten Eigenschaften können Sie dem Browser mitteilen, dass er verschiedene Teile einer Seite isolieren und deren Rendering unabhängig voneinander optimieren soll. Dies ermöglicht eine verbesserte Leistung beim Rendering einzelner Abschnitte. Beispielsweise können Sie dem Browser angeben, dass er bestimmte Container nicht rendern soll, bis sie im Viewport sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft ermöglicht es einem Autor, genau anzugeben, welche [Containment-Typen](/de/docs/Web/CSS/Guides/Containment/Using) sie auf einzelne Container auf der Seite angewendet haben möchten. Dadurch kann der Browser Layout, Stil, Malerei, Größe oder eine Kombination davon für einen begrenzten Teil des DOM neu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Reihe von Containments auf eine Gruppe von Containern anzuwenden und dem Browser anzugeben, dass er diese Container nicht layouten und rendern soll, bis sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar und ermöglicht es Ihnen, eine Platzhaltergröße für Container bereitzustellen, während sie den Auswirkungen von Containment unterliegen. Dies bedeutet, dass die Container Platz beanspruchen, auch wenn ihre Inhalte noch nicht gerendert wurden, was Containment ermöglicht, seine Leistungszauberei zu entfalten, ohne das Risiko von Scrollbalkenverschiebungen und Ruckeln, während Elemente gerendert und sichtbar werden. Dies verbessert die Qualität der Benutzererfahrung, während der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Optimierung von `:has()` Selektoren

Die {{cssxref(":has", ":has()")}} Pseudo-Klasse ermöglicht leistungsstarke Auswahlmöglichkeiten, erfordert jedoch sorgfältigen Umgang, um Leistungsengpässe zu vermeiden. Für detaillierte Anleitungen zum Schreiben effizienter `:has()` Selektoren siehe [Leistungsüberlegungen in der `:has()` Referenzdokumentation](/de/docs/Web/CSS/Reference/Selectors/:has#performance_considerations).

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best Practices für Schriftarten](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: das neue CSS-Attribut, das Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
