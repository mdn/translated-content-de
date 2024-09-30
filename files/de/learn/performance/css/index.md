---
title: CSS-Leistungsoptimierung
slug: Learn/Performance/CSS
l10n:
  sourceCommit: 4bf03c104b1bca2068dbff927020e7f802c4af7e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

Bei der Entwicklung einer Website müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite verarbeitet. Um mögliche Leistungsprobleme, die das CSS verursachen könnte, abzumildern, sollten Sie es optimieren. Beispielsweise sollten Sie das CSS optimieren, um [Render-Blocking](/de/docs/Glossary/Render_blocking) zu reduzieren und die Anzahl der erforderlichen Neuberechnungen zu minimieren. Dieser Artikel führt Sie durch wichtige Techniken zur CSS-Leistungsoptimierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um zu lernen, wie sich CSS auf die Website-Leistung auswirkt
        und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, ist: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind bewährte Praktiken, die jedem Webprojekt zugutekommen, während einige nur in bestimmten Situationen benötigt werden. Der Versuch, alle diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn/Performance/Measuring_performance). Wie der obige Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, von denen einige ausgeklügelte [Performance-APIs](/de/docs/Web/API/Performance_API) beinhalten. Am besten beginnen Sie jedoch damit, zu lernen, wie Sie Tools wie integrierte Browser-[Netzwerk-](/de/docs/Learn/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn/Performance/Measuring_performance#performance_monitor_tools) verwenden, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem spezifischen Renderingpfad – Zeichnen erfolgt erst nach dem Layout, welches nach Erstellung des Renderbaums erfolgt, der sowohl die DOM- als auch die CSSOM-Bäume benötigt.

Benutzern eine ungestaltete Seite zu zeigen und sie erst zu übermalen, nachdem die CSS-Stile analysiert wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund blockiert CSS das Rendering, bis der Browser feststellt, dass das CSS benötigt wird. Der Browser kann die Seite zeichnen, nachdem es das CSS heruntergeladen und das [CSS-Objektmodell (CSSOM)](/de/docs/Glossary/CSSOM) aufgebaut hat.

Um die Konstruktion des CSSOM zu optimieren und die Seitenleistung zu verbessern, können Sie eine oder mehrere der folgenden Maßnahmen in Abhängigkeit von Ihrem derzeitigen CSS-Zustand ergreifen:

- **Unnötige Stile entfernen**: Dies mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte CSS-Regeln zu bereinigen, die während der Entwicklung zu ihren Stylesheets hinzugefügt und letztendlich nicht verwendet werden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layoutens und Zeichnens verwendet werden oder nicht, daher kann das Entfernen ungenutzter Stile das Seitenrendering beschleunigen. Wie [Wie entfernen Sie ungenutztes CSS von einer Website?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem, insbesondere in großen Codebasen, und es gibt keinen zuverlässigen magischen Weg, um ungenutztes CSS zu identifizieren und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und sorgfältig und überlegt darüber nachzudenken, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: Modularisierung des CSS bedeutet, dass CSS, das beim Laden der Seite nicht benötigt wird, später geladen werden kann, wodurch anfängliches CSS-Renderblocking und Ladezeiten reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Sets von Stilen – Standardstile, die immer geladen werden, Stile, die nur beim Drucken des Dokuments geladen werden, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet renderblockierend ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das nur in einem bestimmten Szenario angewendet werden muss, wird das Stylesheet zwar weiterhin heruntergeladen, aber nicht renderblockierend. Durch das Aufteilen des CSS in mehrere Dateien ist die renderblockierende Hauptdatei, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit, in der das Rendering blockiert wird, reduziert wird.

- **Ihr CSS minifizieren und komprimieren**: Minifizierung bedeutet, alle Leerzeichen in der Datei zu entfernen, die nur zur besseren Lesbarkeit für Menschen dienen, sobald der Code in Produktion geht. Sie können die Ladezeiten erheblich reduzieren, indem Sie Ihr CSS minifizieren. Die Minifizierung erfolgt im Allgemeinen als Teil eines Build-Prozesses (zum Beispiel minifizieren die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt zum Einsatz bereitstellen). Zusätzlich zur Minifizierung sollten Sie sicherstellen, dass der Server, auf dem Ihre Website gehostet wird, Komprimierung wie gzip für Dateien verwendet, bevor diese bereitgestellt werden.

- **Selektoren vereinfachen**: Menschen schreiben oft Selektoren, die komplexer sind als nötig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Analysezeit für diese Selektoren. Zum Beispiel:

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

  Das Vereinfachen und weniger spezifisch Machen Ihrer Selektoren ist auch gut für die Wartung. Es ist einfach zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile bei Bedarf später zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2) sind.

- **Keine Stile auf mehr Elemente anwenden als nötig**: Ein häufiger Fehler ist es, Stile mit dem [universellen Selektor](/de/docs/Web/CSS/Universal_selectors) auf alle Elemente oder zumindest auf mehr Elemente als nötig anzuwenden. Diese Art der Stilanwendung kann die Leistung negativ beeinflussen, insbesondere auf größeren Seiten.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Werkzeuge wie [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) sollten sparsam verwendet werden. Sie überall zu verwenden, kann alle möglichen unerwarteten Verhaltensweisen hervorrufen.

- **Bild-HTTP-Anfragen mit CSS-Sprites reduzieren**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, bei der mehrere kleine Bilder (wie Icons), die Sie auf Ihrer Website verwenden möchten, in einer einzigen Bilddatei platziert werden. Dann werden unterschiedliche {{cssxref("background-position")}}-Werte verwendet, um den Bildausschnitt anzuzeigen, den Sie an jeder Stelle zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die benötigt werden, um die Bilder abzurufen, erheblich reduzieren.

- **Wichtige Assets vorab laden**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Preloader für kritische Assets zu verwandeln. Dies schließt CSS-Dateien, Schriftarten und Bilder ein:

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

  Mit `preload` holt der Browser die referenzierten Ressourcen so schnell wie möglich und stellt sie im Browser-Cache zur Verfügung, sodass sie bereit sind, sobald sie im nachfolgenden Code referenziert werden. Es ist nützlich, hochpriorisierte Ressourcen vorab zu laden, auf die der Benutzer frühzeitig auf einer Seite stoßen wird, sodass die Erfahrung so reibungslos wie möglich ist. Beachten Sie, wie Sie auch `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen reaktionsfreudiger erscheinen lassen und Benutzern das Gefühl geben, dass Fortschritt erzielt wird, während sie auf das Laden einer Seite warten (z. B. Lade-Spinner). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch naturgemäß mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der einfachste Ratschlag ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Option/Site-Einstellung bieten, Animationen auszuschalten, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Akkukapazität verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob Animationen überhaupt auf der Seite angewendet werden. Es gibt auch eine Medienabfrage namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationsstile basierend auf den Betriebssystemeinstellungen eines Benutzers zur Animation oder nicht selektiv bereitzustellen.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) nach Möglichkeit anstelle von JavaScript-Animationen zu verwenden (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, mithilfe von JavaScript direkt auf CSS-Animationen zuzugreifen).

### Auswahl von Eigenschaften zum Animieren

Die Animationsleistung hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften lösen bei Animationen einen [Reflow](/de/docs/Glossary/Reflow) (und somit auch einen [Repaint](/de/docs/Glossary/Repaint)) aus und sollten vermieden werden. Diese beinhalten Eigenschaften, die:

- Die Dimensionen eines Elements verändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element umpositionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left) und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items) und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind intelligent genug, um nur den geänderten Bereich des Dokuments neu zu zeichnen, anstatt die gesamte Seite. Dadurch sind größere Animationen teurer.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animationen auf der GPU ausführen

Um die Leistung weiter zu verbessern, sollten Sie erwägen, die Animationsarbeit vom Haupt-Thread auf die GPU des Geräts zu verlagern (auch als Komposition bezeichnet). Dies erfolgt, indem Sie spezifische Arten von Animationen wählen, die der Browser automatisch an die GPU sendet, um sie zu behandeln; dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/will-change) (siehe den Abschnitt unten).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Element/video), [`<canvas>`](/de/docs/Web/HTML/Element/canvas) und [`<iframe>`](/de/docs/Web/HTML/Element/iframe).

Animationen auf der GPU können zu einer verbesserten Leistung führen, insbesondere auf Mobilgeräten. Das Verschieben von Animationen zur GPU ist jedoch nicht immer so einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell aufwändige Arbeiten erledigt werden, bevor sie erforderlich sind. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt den Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird.

> **Note:** `will-change` ist als letzte Möglichkeit gedacht, um bestehende Leistungsprobleme zu beheben. Es sollte nicht genutzt werden, um Leistungsprobleme im Voraus zu antizipieren.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media-Queries beschränken. Media-Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis es alle diese Stile analysiert hat, blockiert aber nicht das Rendering von Stilen, von denen es weiß, dass sie nicht verwendet werden, wie beispielsweise die Druck-Stylesheets. Durch das Aufteilen des CSS in mehrere Dateien basierend auf Media-Queries können Sie das Render-Blocking während des Downloads ungenutzter CSS verhindern. Um einen nicht-blockierenden CSS-Link zu erstellen, verschieben Sie die sofort nicht genutzten Stile, wie Druckstile, in eine separate Datei, fügen Sie ein [`<link>`](/de/docs/Web/HTML/Element/link) zum HTML-Markup hinzu und fügen Sie eine Media-Query hinzu, in diesem Fall anzugeben, dass es sich um ein Druck-Stylesheet handelt.

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

Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet render-blockierend ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das es nur in einem bestimmten Szenario anwenden muss, wird das Stylesheet zwar weiterhin heruntergeladen, aber nicht render-blockiert. Durch das Aufteilen des CSS in mehrere Dateien ist die render-blockierende Hauptdatei, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit, in der das Rendering blockiert wird, reduziert wird.

## Verbesserung der Schriftartenleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webfont-Leistung.

Allgemein gilt es sorgfältig zu überlegen, welche Schriftarten Sie auf Ihrer Seite verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Während es verlockend sein kann, viele Schriftarten für visuelle Spannung zu verwenden, kann dies das Seitenladen erheblich verlangsamen und dazu führen, dass Ihre Seite chaotisch aussieht. Sie benötigen wahrscheinlich nur etwa zwei oder drei Schriftarten und können mit weniger auskommen, wenn Sie sich entscheiden, [websichere Schriftarten](/de/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftarten laden

Beachten Sie, dass eine Schriftart nur geladen wird, wenn sie tatsächlich auf ein Element mit der Eigenschaft [`font-family`](/de/docs/Web/CSS/font-family) angewendet wird, nicht wenn sie erstmals mit der [`@font-face`](/de/docs/Web/CSS/@font-face) Regel referenziert wird:

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

Es kann daher vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriftarten frühzeitig zu laden, sodass sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist wahrscheinlich nützlicher, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet verborgen ist und nicht wesentlich später im Parsing-Prozess erreicht wird. Es ist jedoch ein Kompromiss – Schriftdateien sind ziemlich groß, und wenn Sie zu viele davon vorab laden, können Sie andere Ressourcen verzögern.

Sie können auch in Betracht ziehen:

- Verwendung von [`rel="preconnect"`](/de/docs/Web/HTML/Attributes/rel/preconnect), um eine frühe Verbindung mit dem Schriftanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Verwendung der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Ladeverhalten der Schriftarten über JavaScript anzupassen.

### Nur die benötigten Glyphen laden

Bei der Auswahl einer Schriftart für den Fließtext ist es schwieriger, die verwendeten Glyphen sicher zu bestimmen, insbesondere wenn Sie mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen arbeiten.

Wenn Sie jedoch wissen, dass Sie einen spezifischen Satz von Glyphen verwenden werden (zum Beispiel Glyphen nur für Überschriften oder bestimmte Interpunktionszeichen), könnten Sie die Anzahl der Glyphen einschränken, die der Browser herunterladen muss. Dies kann durch die Erstellung einer Schriftdatei geschehen, die nur den erforderlichen Unterabschnitt enthält. Ein Prozess namens [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting). Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) `@font-face`-Deskriptor kann dann verwendet werden, um festzulegen, wann Ihre Teilmengen-Schriftart verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Definieren des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor

Auf die `@font-face` Regel angewendet, definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display) Deskriptor, wie Schriftdateien vom Browser geladen und angezeigt werden, sodass der Text mit einer Ersatzschriftart angezeigt wird, während eine Schrift lädt oder das Laden fehlschlägt. Dies verbessert die Leistung, indem der Text sichtbar wird, anstatt einen leeren Bildschirm zu haben, wobei der Kompromiss Blitz mit ungestyltem Text ist.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Stilneuberechnung mit CSS-Einschließung

Mit den in dem [CSS-Einschließungs-](/de/docs/Web/CSS/CSS_containment) Modul definierten Eigenschaften können Sie den Browser anweisen, verschiedene Teile einer Seite zu isolieren und ihr Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendern einzelner Abschnitte. Sie können dem Browser beispielsweise angeben, bestimmte Container nicht darzustellen, bis sie im Viewport sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft ermöglicht es einem Autor, genau festzulegen, welche [Einschließungsarten](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) sie auf einzelne Container auf der Seite anwenden möchten. Dadurch kann der Browser das Layout, den Stil, die Zeichnung, die Größe oder eine Kombination davon für einen begrenzten Teil des DOM neu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist eine nützliche Abkürzung, mit der Autoren eine starke Menge von Einschließungen auf eine Reihe von Containern anwenden und angeben können, dass der Browser diese Container erst dann layouten und rendern soll, wenn dies erforderlich ist.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar und ermöglicht es Ihnen, eine Platzhaltergröße für Container bereitzustellen, während sie unter den Effekten der Einschließung stehen. Dies bedeutet, dass die Container Platz einnehmen, auch wenn ihre Inhalte noch nicht gerendert wurden, sodass die Einschließung ihre Leistungsoptimierung durchführen kann, ohne das Risiko von Scrollleistenverschiebung und Ruckeln, wenn Elemente gerendert und sichtbar werden. Dies verbessert die Qualität der Benutzererfahrung, während der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) auf web.dev (2022)
