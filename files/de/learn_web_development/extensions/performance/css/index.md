---
title: CSS Performance-Optimierung
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Beim Entwickeln einer Website sollten Sie berücksichtigen, wie der Browser das CSS Ihrer Seite verarbeitet. Um etwaige Leistungsprobleme, die das CSS verursachen könnte, zu mildern, sollten Sie es optimieren. Beispielsweise sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "render-blocking")}} zu vermeiden und die Anzahl der erforderlichen Reflows zu minimieren. Dieser Artikel führt Sie durch wichtige Techniken zur CSS-Leistungsoptimierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie sich CSS auf die Leistung von Websites auswirkt
        und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, ist: "Was muss ich optimieren?". Einige der Tipps und Techniken, die weiter unten erläutert werden, sind bewährte Praktiken, von denen fast jedes Webprojekt profitieren wird, während einige nur in bestimmten Situationen erforderlich sind. Alle diese Techniken überall anzuwenden, ist wahrscheinlich nicht notwendig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt erforderlich sind.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie im vorherigen Link gezeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige beinhalten anspruchsvolle [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um zu beginnen, ist jedoch, zu lernen, wie man Werkzeuge wie integrierte Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) verwendet, um zu sehen, welche Teile der Seitenladezeiten lange dauern und optimiert werden müssen.

## Rendern optimieren

Browser folgen einem bestimmten Rendering-Pfad — das Zeichnen erfolgt erst nach dem Layout, welches wiederum nach der Erstellung des Render-Baums erfolgt, der sowohl den DOM- als auch den CSSOM-Baum benötigt.

Den Nutzern eine ungestylte Seite anzuzeigen und sie dann neu zu rendern, nachdem die CSS-Stile analysiert wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund ist CSS render-blockierend, bis der Browser festgestellt hat, dass das CSS erforderlich ist. Der Browser kann die Seite zeichnen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um die Erstellung des CSSOMs zu optimieren und die Seitenleistung zu verbessern, können Sie eines oder mehrere der folgenden Maßnahmen basierend auf dem aktuellen Zustand Ihres CSS durchführen:

- **Unnötige Stile entfernen**: Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, unbenutzte CSS-Regeln zu bereinigen, die während der Entwicklung zu ihren Stylesheets hinzugefügt und letztendlich nicht verwendet wurden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layouts und Malvorgangs verwendet werden oder nicht, daher kann das Entfernen unbenutzter Stile das Rendern der Seite beschleunigen. Wie im Artikel [„How Do You Remove Unused CSS From a Site?“](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammengefasst, ist dies ein schwieriges Problem für einen großen Codebestand, und es gibt keine magische Lösung, um unbenutzte CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und vorsichtig und überlegt zu sein, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: Wenn CSS modular bleibt, kann CSS, das nicht beim Seitenladevorgang benötigt wird, später geladen werden, was das anfängliche Render-Blocking und die Ladezeiten von CSS reduziert. Der einfachste Weg, dies zu tun, ist, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel stellt drei Stylesets bereit — Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blockierend ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem spezifischen Szenario anwenden muss, lädt er das Stylesheet dennoch herunter, blockiert jedoch nicht das Rendering. Durch das Trennen des CSS in mehrere Dateien ist die Hauptdatei für das Render-Blocking, in diesem Fall `styles.css`, viel kleiner, was die Zeit des Render-Blockings reduziert.

- **CSS minimieren und komprimieren**: Minimierung bedeutet, alle Leerzeichen in der Datei zu entfernen, die nur für die menschliche Lesbarkeit vorhanden sind, sobald der Code in die Produktion geht. Sie können die Ladezeiten erheblich reduzieren, indem Sie Ihr CSS minimieren. Minimierung erfolgt in der Regel als Teil eines Build-Prozesses (zum Beispiel minimieren die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt für die Bereitstellung erstellen). Zusätzlich zur Minimierung sollten Sie sicherstellen, dass der Server, auf dem Ihre Website gehostet wird, eine Komprimierung wie gzip verwendet, bevor Dateien bereitgestellt werden.

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

  Weniger komplexe und spezifische Selektoren sind auch für die Wartung gut. Es ist leicht zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile später bei Bedarf zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Vermeiden Sie es, Stile auf mehr Elemente anzuwenden als nötig**: Ein häufiger Fehler besteht darin, Stile auf alle Elemente mittels des [Universalselektors](/de/docs/Web/CSS/Universal_selectors) anzuwenden oder mindestens auf mehr Elemente als nötig. Diese Art der Formatierung kann die Leistung negativ beeinflussen, insbesondere auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam verwendet werden. Eine allgegenwärtige Anwendung kann allerlei unerwartetes Verhalten verursachen.

- **Reduzieren Sie Bild-HTTP-Anfragen mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, bei der mehrere kleine Bilder (z. B. Symbole), die Sie auf Ihrer Website verwenden möchten, in eine einzelne Bilddatei eingefügt werden, und dann verschiedene {{cssxref("background-position")}}-Werte verwendet werden, um das Bildstück anzuzeigen, das Sie an verschiedenen Stellen zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die erforderlich sind, um die Bilder abzurufen, erheblich reduzieren.

- **Wichtige Assets vorgeladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Preloader für kritische Assets zu verwandeln. Dies schließt CSS-Dateien, Schriften und Bilder ein:

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

  Mit `preload` wird der angegebene Inhalt so schnell wie möglich vom Browser abgerufen und im Browser-Cache verfügbar gemacht, sodass sie später verwendet werden können, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, hochpriorisierte Ressourcen vorzuspannen, denen der Benutzer früh auf einer Seite begegnen wird, um das Erlebnis so reibungslos wie möglich zu gestalten. Beachten Sie, dass Sie auch `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Animationen handhaben

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen reaktionsschneller erscheinen lassen und die Benutzer das Gefühl haben, dass Fortschritte gemacht werden, während sie auf das Laden einer Seite warten (zum Beispiel Ladespinner). Allerdings erfordern größere Animationen und eine höhere Anzahl von Animationen natürlicherweise mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der einfachste Rat lautet, alle unnötigen Animationen zu reduzieren. Sie könnten den Nutzern auch eine Einstellungsmöglichkeit auf der Seite vorsehen, um Animationen zu deaktivieren, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkuleistung verwenden. Alternativ können Sie JavaScript verwenden, um zu steuern, ob eine Animation auf der Seite überhaupt angewendet wird. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationen selektiv basierend auf den Betriebssystemvorgaben eines Benutzers bereitzustellen oder nicht.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wann immer möglich, anstelle von JavaScript-Animationen. Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen über JavaScript zu integrieren.

### Eigenschaften zum Animieren auswählen

Die Leistung der Animation hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften, die animiert werden, lösen einen {{Glossary("Reflow", "Reflow")}} (und damit auch ein {{Glossary("Repaint", "Repaint")}}) aus und sollten vermieden werden. Diese beinhalten Eigenschaften, die:

- Die Dimensionen eines Elements verändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element neu positionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left) und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items) und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements verändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind intelligent genug, um nur den geänderten Bereich des Dokuments neu zu zeichnen, anstatt die gesamte Seite. Daher sind größere Animationen teurer.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint verursachen. Hierzu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animationen auf der GPU ausführen

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, Animationsarbeit vom Hauptthread auf die GPU des Geräts zu verlagern (auch als Komposition bezeichnet). Dies geschieht, indem bestimmte Arten von Animationen ausgewählt werden, die der Browser automatisch an die GPU sendet, um sie zu handhaben; dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit anderen bestimmten animierten Eigenschaften, wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/will-change) (siehe den Abschnitt unten).
- Bestimmte Elemente, die in ihrer eigenen Ebene dargestellt werden, einschließlich [`<video>`](/de/docs/Web/HTML/Element/video), [`<canvas>`](/de/docs/Web/HTML/Element/canvas) und [`<iframe>`](/de/docs/Web/HTML/Element/iframe).

Animationen auf der GPU können zu einer verbesserten Leistung führen, insbesondere auf mobilen Geräten. Das Verschieben von Animationen zur GPU ist jedoch nicht immer so einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Arten von Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem sie potenziell aufwendige Arbeiten durchführen, bevor sie erforderlich sind. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird.

> **Hinweis:** `will-change` ist als letztes Mittel gedacht, um bestehende Leistungsprobleme zu beheben. Es sollte nicht verwendet werden, um Leistungsprobleme im Voraus zu verhindern.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung von render-blockierendem Verhalten

CSS kann Styles mit Media Queries auf bestimmte Bedingungen beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen, einen kritischen Renderingpfad zu optimieren. Der Browser blockiert das Rendering, bis er alle diese Styles analysiert hat, blockiert jedoch nicht das Rendering von Styles, die er nicht verwenden wird, z.B. Druckstylesheets. Durch das Aufteilen des CSS in mehrere Dateien basierend auf Media Queries können Sie Render-Blocking während des Downloads von ungenutztem CSS verhindern. Um einen nicht blockierenden CSS-Link zu erstellen, verschieben Sie die nicht direkt benötigten Styles, wie Druckstile, in eine separate Datei, fügen Sie ein [`<link>`](/de/docs/Web/HTML/Element/link) zum HTML-Code hinzu und fügen Sie eine Media Query hinzu, in diesem Fall, dass es sich um ein Druckstylesheet handelt.

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

Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blockierend ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet erkennt, das er nur in einem spezifischen Szenario anwenden muss, lädt er das Stylesheet dennoch herunter, ohne das Rendering zu blockieren. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei, die das Rendering blockiert, in diesem Fall `styles.css`, viel kleiner, was die Zeit des Render-Blockings reduziert.

## Schriftleistung verbessern

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webfont-Performance.

Denken Sie generell sorgfältig über die Schriften nach, die Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabytes). Auch wenn es verlockend sein kann, viele Schriftarten für visuelle Spannung zu verwenden, kann dies das Laden der Seite erheblich verlangsamen und Ihre Website chaotisch aussehen lassen. Wahrscheinlich benötigen Sie nur zwei oder drei Schriftarten, und Sie kommen mit weniger aus, wenn Sie sich entscheiden, [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftarten laden

Bedenken Sie, dass eine Schriftart erst geladen wird, wenn sie tatsächlich auf ein Element mit der Eigenschaft [`font-family`](/de/docs/Web/CSS/font-family) angewendet wird, nicht wenn sie erstmals mit der Regel [`@font-face`](/de/docs/Web/CSS/@font-face) referenziert wird:

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

Daher kann es vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriftarten frühzeitig zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist eher vorteilhaft, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet versteckt ist und nicht erheblich später im Parserprozess erreicht wird. Es ist jedoch ein Kompromiss – Schriftdateien sind recht groß, und wenn Sie zu viele davon vorladen, können Sie andere Ressourcen verzögern.

Sie können auch Folgendes in Betracht ziehen:

- Die Verwendung von [`rel="preconnect"`](/de/docs/Web/HTML/Attributes/rel/preconnect), um eine frühzeitige Verbindung mit dem Schriftanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Die Verwendung der [CSS-Schriftladungs-API](/de/docs/Web/API/CSS_Font_Loading_API), um das Ladeverhalten der Schriftarten über JavaScript anzupassen.

### Nur die benötigten Zeichen laden

Wenn Sie eine Schriftart für den Haupttext wählen, ist es schwieriger, sich der Zeichen sicher zu sein, die darin verwendet werden, insbesondere wenn Sie es mit nutzergeneriertem Inhalt und/oder Inhalt in mehreren Sprachen zu tun haben.

Wenn Sie jedoch wissen, dass Sie eine spezifische Zeichenmenge verwenden werden (beispielsweise Zeichen für Überschriften oder spezifische Interpunktionszeichen), könnten Sie die Anzahl der vom Browser herunterzuladenden Zeichen einschränken. Dies kann erreicht werden, indem eine Schriftdatei erstellt wird, die nur das erforderliche Unterset enthält. Ein Prozess namens [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting). Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range)-`@font-face`-Deskriptor kann dann verwendet werden, um zu spezifizieren, wann Ihr Unterset-Schriftbild verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schrift nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Definieren des Schriftdarstellungsverhaltens mit dem `font-display`-Deskriptor

Angewendet auf die Regel `@font-face` definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display) Deskriptor, wie Schriftdateien geladen und vom Browser angezeigt werden, sodass Text mit einem Ersatzfont angezeigt wird, während eine Schrift geladen oder nicht geladen wird. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm zu haben, mit dem Kompromiss eines unerwarteten Textwechsels.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Styling-Neuberechnung mit CSS Containment

Durch die Verwendung der im [CSS Containment](/de/docs/Web/CSS/CSS_containment)-Modul definierten Eigenschaften können Sie den Browser anweisen, verschiedene Teile einer Seite zu isolieren und ihr Rendering unabhängig voneinander zu optimieren. Dies erlaubt eine verbesserte Leistung im Rendering einzelner Abschnitte. Beispielsweise können Sie festlegen, dass der Browser bestimmte Container erst dann rendert, wenn sie im Sichtfenster erscheinen.

Die Eigenschaft {{cssxref("contain")}} ermöglicht es einem Autor, genau zu spezifizieren, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) sie auf einzelne Container auf der Seite anwenden möchten. Dies ermöglicht es dem Browser, das Layout, den Stil, die Malerei, die Größe oder eine beliebige Kombination davon für einen begrenzten Teil des DOM neu zu berechnen.

```css
article {
  contain: content;
}
```

Die Eigenschaft {{cssxref("content-visibility")}} ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Menge von Containments auf eine Reihe von Containern anzuwenden und festzulegen, dass der Browser diese Container erst nach Bedarf layouten und rendern soll.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, die es ermöglicht, eine Platzhaltergröße für Container bereitzustellen, während sie unter den Effekten der Containment stehen. Dies bedeutet, dass die Container Platz einnehmen werden, auch wenn ihre Inhalte noch nicht gerendert wurden, was dem Containment ermöglicht, seine Leistungsfähigkeiten zu entfalten, ohne das Risiko von Scrollbalken-Verschiebung und Ruckeln, während Elemente gerendert werden und in den Blick kommen. Dies verbessert die Qualität des Benutzererlebnisses, während der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Beste Praktiken für Schriften](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung verbessert](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
