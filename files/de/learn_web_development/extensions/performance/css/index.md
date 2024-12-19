---
title: CSS-Leistungsoptimierung
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Bei der Entwicklung einer Website müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite verarbeitet. Um etwaige Leistungsprobleme, die durch CSS verursacht werden könnten, zu verringern, sollten Sie es optimieren. Beispielsweise sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "Rendering-Blockaden")}} zu minimieren und die Anzahl der erforderlichen Neuformatierungen zu reduzieren. Dieser Artikel führt Sie durch wichtige Techniken zur CSS-Leistungsoptimierung.

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
        Die Auswirkungen von CSS auf die Website-Leistung zu verstehen
        und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, lautet: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die fast jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen erforderlich sind. Es ist wahrscheinlich unnötig, alle diese Techniken überall anzuwenden, und kann eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es mehrere verschiedene Möglichkeiten, die Leistung zu messen, einige unter Verwendung ausgeklügelter [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, ist jedoch das Erlernen der Nutzung von Tools wie den integrierten Browser-[Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools)- und [Performance-Tools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools), um zu sehen, welche Teile des Seitenladevorgangs lange dauern und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem spezifischen Rendering-Pfad – das Zeichnen erfolgt erst nach dem Layout, welches nach der Erstellung des Renderbaums stattfindet, was wiederum sowohl die DOM- als auch die CSSOM-Bäume erfordert.

Den Nutzern eine unformatierte Seite anzuzeigen und sie dann neu zu zeichnen, nachdem die CSS-Stile analysiert wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund blockiert CSS das Rendering, bis der Browser feststellt, dass das CSS benötigt wird. Der Browser kann die Seite zeichnen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um den Aufbau des CSSOM zu optimieren und die Seitenleistung zu verbessern, können Sie je nach aktuellem Zustand Ihres CSS eine oder mehrere Maßnahmen ergreifen:

- **Unnötige Stile entfernen**: Das mag offensichtlich klingen, aber es überrascht, wie viele Entwickler vergessen, nicht verwendete CSS-Regeln aufzuräumen, die während der Entwicklung zu ihren Stylesheets hinzugefügt und letztendlich nicht verwendet wurden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layouts und der Zeichnung verwendet werden oder nicht, daher kann es die Seitenwiedergabe beschleunigen, nicht verwendete Stile zu entfernen. Wie in [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammengefasst, ist dies ein schwieriges Problem, insbesondere bei großem Codeumfang, und es gibt keinen magischen Weg, um ungenutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und sorgfältig und bedacht hinzuzufügen und zu entfernen.

- **CSS in separate Module aufteilen**: CSS modular zu halten bedeutet, dass CSS, das beim Laden der Seite nicht benötigt wird, später geladen werden kann, wodurch anfängliche CSS-Rendering-Blockaden und Ladezeiten reduziert werden. Der einfachste Weg, dies zu erreichen, ist die Aufteilung Ihres CSS in separate Dateien und das Laden nur dessen, was benötigt wird:

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

  Das obige Beispiel bietet drei Stilsätze – Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig nimmt der Browser an, dass jedes spezifizierte Stylesheet Render-Blocking ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden sollte, indem Sie ein `media`-Attribut mit einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet trotzdem herunter, jedoch ohne Rendering-Blockade. Durch das Trennen des CSS in mehrere Dateien ist die Hauptdatei für Render-Blocking, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit, in der das Rendering blockiert wird, reduziert wird.

- **CSS minifizieren und komprimieren**: Minifizieren bedeutet, alle Leerzeichen im Code zu entfernen, die nur für die menschliche Lesbarkeit vorhanden sind, nachdem der Code in die Produktion überführt wurde. Sie können die Ladezeiten erheblich verkürzen, indem Sie Ihr CSS minifizieren. Minifikation wird in der Regel als Teil eines Build-Prozesses durchgeführt (zum Beispiel minifizieren die meisten JavaScript-Frameworks den Code beim Erstellen eines Projekts für die Bereitstellung). Zusätzlich zur Minifizierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, Komprimierungstechniken wie gzip auf Dateiebenen verwendet, bevor diese bereitgestellt werden.

- **Selektoren vereinfachen**: Oft schreiben Menschen Selektoren, die komplexer sind, als notwendig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Analysezeit für diese Selektoren. Zum Beispiel:

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

  Wenn Sie Ihre Selektoren weniger komplex und spezifisch machen, ist dies auch für die Wartung gut. Es ist einfach zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile bei Bedarf zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Keine Stile auf mehr Elemente anwenden als nötig**: Ein häufiger Fehler besteht darin, Stile auf alle Elemente mithilfe des [Universal Selektors](/de/docs/Web/CSS/Universal_selectors) oder zumindest auf mehr Elemente als notwendig anzuwenden. Diese Art des Stylings kann die Leistung negativ beeinflussen, insbesondere auf größeren Seiten.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und mächtige Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam verwendet werden. Ihr Einsatz überall kann unerwartete Verhaltensweisen verursachen.

- **HTTP-Anfragen für Bilder mit CSS-Sprites reduzieren**: [CSS-Sprites](https://css-tricks.com/css-sprites/) sind eine Technik, bei der mehrere kleine Bilder (wie Icons), die Sie auf Ihrer Seite verwenden möchten, in eine einzelne Bilddatei integriert werden und dann verschiedene {{cssxref("background-position")}}-Werte verwendet werden, um den gewünschten Bildabschnitt an verschiedenen Stellen anzuzeigen. Dies kann die Anzahl der HTTP-Anfragen, die zum Abrufen der Bilder erforderlich sind, erheblich reduzieren.

- **Wichtige Ressourcen vorab laden**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Preloader für kritische Ressourcen umzuwandeln. Dazu gehören CSS-Dateien, Schriftarten und Bilder:

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

  Mit `preload` lädt der Browser die referenzierten Ressourcen so schnell wie möglich herunter und stellt sie im Browser-Cache bereit, damit sie schneller zur Verfügung stehen, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, wichtige Ressourcen vorzuladen, die der Benutzer früh auf einer Seite erleben wird, um die Erfahrung so reibungslos wie möglich zu gestalten. Beachten Sie, dass Sie `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Animationen handhaben

Animationen können das wahrgenommene Leistungsniveau verbessern, indem sie Schnittstellen reaktiver erscheinen lassen und den Benutzern das Gefühl geben, dass Fortschritte erzielt werden, während sie darauf warten, dass eine Seite geladen wird (z. B. Ladeanimationen). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch natürlich mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Steuerung oder eine Seitenpräferenz anbieten, um Animationen zu deaktivieren, wenn sie ein Gerät mit geringer Leistung oder ein mobiles Gerät mit begrenzter Batterieleistung verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob Animation überhaupt auf die Seite angewendet wird. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um basierend auf den Animationseinstellungen auf Betriebssystemebene eines Benutzers selektiv Animationsstile zu servieren oder nicht.

Für essentielle DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wenn möglich, anstatt JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen).

### Zu animierende Eigenschaften auswählen

Als nächstes hängt die Animationsleistung stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften lösen beim Animieren eine {{Glossary("Reflow", "Neuformatierung")}} (und damit auch eine {{Glossary("Repaint", "Neuzeichnung")}}) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Abmessungen eines Elements ändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element umpositionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left) und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items) und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements verändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind klug genug, nur den geänderten Bereich des Dokuments neu zu zeichnen, statt die gesamte Seite. Infolgedessen sind größere Animationen kostspieliger.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keine Neuformatierung/Neuzeichnung verursachen. Dazu gehören:

- [Transformierungen](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animieren auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, die Animationsarbeit vom Haupt-Thread auf die GPU des Geräts zu verlagern (auch als Compositing bekannt). Dies wird erreicht, indem bestimmte Arten von Animationen ausgewählt werden, die der Browser automatisch an die GPU sendet; dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen Eigenschaften, die animiert werden, wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/will-change) (siehe Abschnitt unten).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Element/video), [`<canvas>`](/de/docs/Web/HTML/Element/canvas) und [`<iframe>`](/de/docs/Web/HTML/Element/iframe).

Animationen auf der GPU können die Leistung verbessern, insbesondere auf mobilen Geräten. Das Verlegen von Animationen auf die GPU ist jedoch nicht immer so einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimieren von Elementänderungen mit `will-change`

Browser können Optimierungen im Voraus einrichten, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell aufwändige Arbeiten durchgeführt werden, bevor sie erforderlich sind. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird.

> **Note:** `will-change` ist als letzte Maßnahme gedacht, um bestehende Leistungsprobleme zu lösen. Es sollte nicht verwendet werden, um Leistungsprobleme im Voraus zu antizipieren.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Rendering-Blockaden

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er all diese Stile analysiert hat, wird jedoch kein Rendering für Stile blockieren, von denen er weiß, dass sie nicht verwendet werden, wie zum Beispiel die Druckstylesheets. Durch das Aufteilen des CSS in mehrere Dateien basierend auf Media Queries können Sie eine Renderblockade während des Downloads von ungenutztem CSS verhindern. Um ein nicht blockierendes CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie Druckstile, in eine separate Datei, fügen Sie einen [`<link>`](/de/docs/Web/HTML/Element/link) in den HTML-Quellcode hinzu und fügen Sie eine Media Query hinzu, die in diesem Fall angibt, dass es sich um ein Druck-Stylesheet handelt.

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

Standardmäßig nimmt der Browser an, dass jedes spezifizierte Stylesheet eine Rendering-Blockade ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_MEDIA_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet trotzdem herunter, blockiert jedoch nicht das Rendering. Durch das Trennen des CSS in mehrere Dateien ist die Hauptdatei für Rendering-Blockierungen, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit, in der das Rendering blockiert wird, reduziert wird.

## Verbesserung der Schriftleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webschriftenleistung.

Im Allgemeinen sollten Sie sorgfältig über die Schriften nachdenken, die Sie auf Ihrer Seite verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Obwohl es verlockend sein kann, viele Schriften für visuelle Spannung zu verwenden, kann dies das Seitenladen erheblich verlangsamen und dazu führen, dass Ihre Seite chaotisch aussieht. Sie benötigen wahrscheinlich nur etwa zwei oder drei Schriften, und Sie können mit weniger auskommen, wenn Sie [websichere Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) verwenden.

### Schriftart-Laden

Beachten Sie, dass eine Schriftart nur geladen wird, wenn sie tatsächlich auf ein Element mit der Eigenschaft [`font-family`](/de/docs/Web/CSS/font-family) angewendet wird, nicht wenn sie zuerst mit der Regel [`@font-face`](/de/docs/Web/CSS/@font-face) referenziert wird:

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

Es kann daher vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriftarten früh zu laden, sodass sie schneller zur Verfügung stehen, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist eher vorteilhaft, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet versteckt ist und erst wesentlich später im Analyseprozess erreicht wird. Es ist ein Kompromiss – Schriftdateien sind recht groß, und wenn Sie zu viele davon vorladen, können Sie andere Ressourcen verzögern.

Sie können auch erwägen:

- Nutzung von [`rel="preconnect"`](/de/docs/Web/HTML/Attributes/rel/preconnect) zur frühzeitigen Verbindung mit dem Schriftanbieter. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Nutzung der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Ladeverhalten von Schriftarten mit JavaScript anzupassen.

### Laden nur der benötigten Glyphen

Bei der Auswahl einer Schriftart für den Textkörper ist es schwieriger, sich der Glyphen bewusst zu sein, die darin verwendet werden, insbesondere wenn Sie benutzergenerierte Inhalte und/oder Inhalte in mehreren Sprachen verarbeiten.

Wenn Sie jedoch wissen, dass Sie einen spezifischen Satz von Glyphen verwenden werden (zum Beispiel, nur Glyphen für Überschriften oder bestimmte Satzzeichen), könnten Sie die Anzahl der Glyphen, die der Browser herunterladen muss, reduzieren. Dies kann durch Erstellen einer Schriftdatei, die nur den erforderlichen Teil enthält, geschehen. Ein Prozess namens [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting). Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) `@font-face`-Deskriptor kann dann verwendet werden, um festzulegen, wann Ihre Subset-Schriftart verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Festlegen des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor

Angewandt auf die Regel `@font-face` definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display) -Deskriptor, wie Schriftdateien vom Browser geladen und angezeigt werden, wodurch der Text mit einer Ersatzschriftart angezeigt werden kann, während eine Schrift lädt oder nicht geladen werden kann. Dies verbessert die Leistung, indem der Text sichtbar wird, anstatt einen leeren Bildschirm zu haben, jedoch mit dem Kompromiss einer kurzzeitig ungestalteten Textanzeige.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimieren der Stil-Neuberechnung mit CSS-Containment

Durch die Verwendung der in [CSS-Containment](/de/docs/Web/CSS/CSS_containment) definierten Eigenschaften können Sie den Browser anweisen, verschiedene Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dies erlaubt eine verbesserte Leistung beim Rendern einzelner Abschnitte. Beispielsweise können Sie dem Browser angeben, bestimmte Container nicht zu rendern, solange sie nicht im Ansichtsfenster sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft ermöglicht einem Autor, genau anzugeben, welche [Arten von Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) sie auf einzelne Container auf der Seite anwenden möchten. Dadurch kann der Browser das Layout, den Stil, die Zeichnung, die Größe oder eine beliebige Kombination davon für einen begrenzten Teil des DOM neu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Setzung von Containments auf eine Reihe von Containern anzuwenden und anzugeben, dass der Browser diese Container erst layouten und rendern soll, wenn sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, die es Ihnen erlaubt, eine Platzhaltergröße für Container bereitzustellen, während sie den Effekten von Containment unterliegen. Dies bedeutet, dass die Container Platz einnehmen, auch wenn ihre Inhalte noch nicht gerendert wurden, was Containment ermöglicht, seine Leistungsfähigkeiten zu entfalten, ohne das Risiko eines Scrollbar-Verschiebens und Ruckelns, während Elemente gerendert und in den Blick geraten. Dies verbessert die Qualität der Benutzererfahrung beim Laden der Inhalte.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Siehe auch

- [Leistung von CSS-Animationen](/de/docs/Web/Performance/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
