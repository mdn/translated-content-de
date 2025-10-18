---
title: CSS-Leistungsoptimierung
short-title: Performante CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Bei der Entwicklung einer Website müssen Sie berücksichtigen, wie der Browser das CSS Ihrer Seite verarbeitet. Um etwaige Leistungsprobleme, die durch CSS verursacht werden könnten, zu mildern, sollten Sie es optimieren. Beispielsweise sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "Render-blocking")}} zu minimieren und die Anzahl der benötigten Reflows zu verringern. Dieser Artikel führt Sie durch wichtige Techniken zur Optimierung der CSS-Leistung.

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
          >clientseitige Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, welchen Einfluss CSS auf die Website-Performance hat
        und erlernen, wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie sich stellen sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, lautet: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen benötigt werden. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und kann eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt erforderlich sind.

Dazu müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten zur Leistungsüberprüfung, einige davon verwenden anspruchsvolle [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Werkzeuge wie die integrierten Browser-[Netzwerk](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools)-Werkzeuge verwendet, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Rendering optimieren

Browser folgen einem bestimmten Renderingpfad — das Malen (paint) erfolgt erst nach dem Layout, das nach dem Erstellen des Render-Baums erfolgt, der wiederum sowohl die DOM- als auch die CSSOM-Bäume erfordert.

Den Benutzern eine ungestaltete Seite zu zeigen und sie dann neu zu malen, nachdem die CSS-Stile geparst wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund blockiert CSS das Rendern, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite malen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um die Erstellung des CSSOM zu optimieren und die Seitenleistung zu verbessern, können Sie je nach aktuellem Zustand Ihres CSS eines oder mehrere der folgenden Dinge tun:

- **Unnötige Stile entfernen**: Dies mag offensichtlich klingen, aber es ist erstaunlich, wie viele Entwickler vergessen, ungenutzte CSS-Regeln zu bereinigen, die ihren Stylesheets während der Entwicklung hinzugefügt wurden und letztendlich nicht verwendet wurden. Alle Stile werden geparst, unabhängig davon, ob sie während des Layouts und des Malens verwendet werden oder nicht, sodass es die Seitendarstellung beschleunigen kann, ungenutzte Stile zu entfernen. Wie ausführlich in [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) beschrieben, ist dies ein schwieriges Problem für eine große Codebasis, und es gibt keine Patentlösung, um ungenutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und sorgfältig und bewusst damit umzugehen, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: CSS modular zu halten bedeutet, dass nicht benötigtes CSS bei der Seitenladung später geladen werden kann, wodurch anfängliches CSS Render-blocking und Ladezeiten reduziert werden. Die einfachste Möglichkeit, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Sätze von Stilen — Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet render-blocking ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet zwar herunter, blockiert jedoch nicht das Rendern. Durch die Aufteilung der CSS in mehrere Dateien ist die Hauptdatei, die das Rendern blockiert, in diesem Fall `styles.css`, viel kleiner, was die Blockierzeit für das Rendering reduziert.

- **CSS minimieren und komprimieren**: Minifizierung bedeutet, dass allen Leerzeichen in der Datei entfernt werden, die nur zur besseren Lesbarkeit durch Menschen vorhanden sind, wenn der Code zur Produktion bereitgestellt wird. Sie können die Ladezeiten erheblich verkürzen, indem Sie Ihr CSS minimieren. Minimierung erfolgt in der Regel als Teil eines Build-Prozesses (zum Beispiel minimieren die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt bereitstellungsfertig bauen). Zusätzlich zur Minimierung stellen Sie sicher, dass der Server, auf dem Ihre Website gehostet wird, eine Komprimierung wie gzip für Dateien verwendet, bevor sie bereitgestellt werden.

- **Selektoren vereinfachen**: Menschen schreiben oft komplexere Selektoren, als nötig sind, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Parsing-Zeit dieser Selektoren. Zum Beispiel:

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

  Weniger komplexe und spezifische Selektoren zu verwenden, ist auch für die Wartung vorteilhaft. Es ist leicht zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile später zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Keine Stile auf mehr Elemente anwenden als nötig**: Ein häufiger Fehler ist es, Stile auf alle Elemente mit dem [universalen Selektor](/de/docs/Web/CSS/Universal_selectors) anzuwenden oder zumindest auf mehr Elemente als nötig. Diese Art des Stylings kann sich negativ auf die Leistung auswirken, besonders auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam verwendet werden. Ihre Anwendung an allen Orten kann unerwartete Verhaltensweisen verursachen.

- **Bild-HTTP-Anfragen mit CSS-Sprites reduzieren**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, die mehrere kleine Bilder (zum Beispiel Symbole), die Sie auf Ihrer Website verwenden möchten, in einer einzelnen Bilddatei platziert und dann unterschiedliche {{cssxref("background-position")}}-Werte verwendet, um den Bildausschnitt, den Sie an verschiedenen Stellen anzeigen möchten, zu präsentieren. Dies kann die Anzahl der für das Abrufen der Bilder erforderlichen HTTP-Anfragen drastisch reduzieren.

- **Wichtige Inhalte vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Preloader für kritische Assets zu verwandeln. Dazu gehören CSS-Dateien, Schriftarten und Bilder:

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

  Mit `preload` lädt der Browser die referenzierten Ressourcen so schnell wie möglich herunter und stellt sie im Browser-Cache bereit, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden. Es ist nützlich, hochpriorisierte Ressourcen vorzubereiten, auf die der Benutzer früh auf einer Seite stößt, um die Erfahrung so reibungslos wie möglich zu gestalten. Beachten Sie, wie Sie auch `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Animationen handhaben

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen schneller erscheinen lassen und den Benutzern das Gefühl vermitteln, dass Fortschritte gemacht werden, während sie warten, dass eine Seite geladen wird (zum Beispiel Ladespinner). Allerdings erfordern größere Animationen und eine größere Anzahl an Animationen natürlich mehr Verarbeitungsleistung, was die Leistung beeinträchtigen kann.

Der einfachste Ratschlag ist, alle unnötigen Animationen zu reduzieren. Sie könnten Benutzern auch eine Steuerungs-/sitzungsspezifische Präferenz anbieten, um Animationen zu deaktivieren, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenztem Akku verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob Animationen auf der Seite überhaupt angewendet werden. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationsstile selektiv basierend auf den Betriebssystemeinstellungen eines Benutzers zu bedienen oder nicht.

Für wesentliche DOM-Animationen wird Ihnen geraten, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wann immer möglich, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt in CSS-Animationen mit JavaScript einzugreifen).

### Auswahl von Eigenschaften für Animationen

Die Leistung von Animationen hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften, die animiert werden, lösen einen {{Glossary("Reflow", "Reflow")}} aus (und damit auch ein {{Glossary("Repaint", "Repaint")}}) und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Abmessungen eines Elements ändern, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element repositionieren, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left) und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements ändern, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items) und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind schlau genug, nur den geänderten Bereich des Dokuments neu zu malen, anstatt die gesamte Seite. Daher sind größere Animationen kostspieliger.

Wenn möglich, ist es besser, die Eigenschaften zu animieren, die keinen Reflow/Repaint verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animationen auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, die Animationsarbeit vom Hauptthread auf die GPU des Geräts auszulagern (auch als "Compositing" bezeichnet). Dies wird erreicht, indem Sie bestimmte Arten von Animationen auswählen, die der Browser automatisch an die GPU zur Verarbeitung sendet; dazu gehören:

- 3D-Transformanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/will-change) (siehe den Abschnitt unten).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animationen auf der GPU können insbesondere auf mobilen Geräten zu einer verbesserten Leistung führen. Es ist jedoch nicht immer einfach, Animationen auf die GPU zu verschieben. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen vornehmen, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell teure Arbeiten erledigt werden, bevor sie erforderlich sind. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE]
> `will-change` ist als letztes Mittel gedacht, um mit bestehenden Leistungsproblemen umzugehen. Es sollte nicht verwendet werden, um Leistungsprobleme im Voraus zu erwarten.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendern, bis er alle diese Stile parsiert hat, jedoch wird das Rendern auf Stilen, die er nicht verwenden wird, nicht blockiert, zum Beispiel Druckstile. Durch die Aufteilung des CSS in mehrere Dateien basierend auf Media Queries können Sie Render-Blocking während des Downloads von nicht benötigtem CSS verhindern. Um einen nicht blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie Druckstile, in eine separate Datei, fügen Sie ein [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Element in das HTML-Markup ein und fügen Sie eine Media Query hinzu, die angibt, dass es sich um ein Druckstylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet render-blocking ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet zwar herunter, blockiert jedoch nicht das Rendern. Durch die Aufteilung des CSS in mehrere Dateien ist die Hauptdatei, die das Rendern blockiert, in diesem Fall `styles.css`, viel kleiner, was die Blockierzeit für das Rendering reduziert.

## Verbesserung der Schriftart-Performance

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webfont-Performance.

Im Allgemeinen sollten Sie sorgfältig überlegen, welche Schriftarten Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Während es verlockend sein kann, viele Schriftarten für visuelle Aufregung zu verwenden, kann dies die Ladezeit erheblich verlangsamen und dazu führen, dass Ihre Seite wie ein Durcheinander aussieht. Sie benötigen wahrscheinlich nur etwa zwei oder drei Schriftarten, und Sie können mit weniger auskommen, wenn Sie sich entscheiden, [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftladeverhalten

Bedenken Sie, dass eine Schriftart nur geladen wird, wenn sie tatsächlich auf ein Element mit der Eigenschaft [`font-family`](/de/docs/Web/CSS/font-family) angewendet wird, nicht wenn sie zuerst mit der [`@font-face`](/de/docs/Web/CSS/@font-face) -At-Regel referenziert wird:

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

Daher kann es von Vorteil sein, mit `rel="preload"` wichtige Schriftarten frühzeitig zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist wahrscheinlich von Vorteil, wenn Ihre `font-family`-Deklaration innerhalb eines großen externen Stylesheets verborgen ist und nicht erreicht wird, bis der Parsing-Prozess erheblich später ist. Es handelt sich jedoch um einen Kompromiss — Schriftdateien sind ziemlich groß, und wenn Sie zu viele von ihnen vorladen, können Sie andere Ressourcen verzögern.

Sie können auch Folgendes in Betracht ziehen:

- Mit [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) eine vorzeitige Verbindung mit dem Schriftanbieter herstellen. Weitere Details finden Sie unter [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins).
- Die [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) verwenden, um das Schriftladeverhalten über JavaScript anzupassen.

### Laden nur der benötigten Glyphen

Wenn Sie sich für eine Schriftart für den Fließtext entscheiden, ist es schwerer sicherzustellen, welche Glyphen verwendet werden, insbesondere wenn Sie mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen umgehen.

Wenn Sie jedoch wissen, dass Sie eine bestimmte Menge an Glyphen verwenden werden (zum Beispiel nur Glyphen für Überschriften oder bestimmte Satzzeichen), könnten Sie die Anzahl der von der Schriftarten zu ladenden Glyphen begrenzen. Dies kann durch Erstellen einer Schriftart-Datei geschehen, die nur den erforderlichen Zeichensatz enthält. Ein Prozess namens [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting). Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) `@font-face`-Deskriptor kann dann verwendet werden, um zu bestimmen, wann Ihre Teilmenge-Schriftart verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Definition des Verhaltens beim Schriftanzeigen mit dem Font-Display-Deskriptor

Angewendet auf die `@font-face`-At-Regel, definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display) -Deskriptor, wie Schriftdateien von Browsern geladen und angezeigt werden, sodass Text mit einer Ersatzschrift angezeigt wird, während eine Schriftart lädt oder das Laden fehlschlägt. Dies verbessert die Leistung, indem sicherstellt wird, dass der Text sichtbar ist, anstatt einen leeren Bildschirm anzuzeigen, wobei das Gegengewicht ein Blinken von ungestyltem Text sein kann.

```css
@font-face {
  font-family: "someFont";
  src: url("/path/to/fonts/someFont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Stilaktualisierung mit CSS-Containment

Durch die Verwendung der im Modul [CSS Containment](/de/docs/Web/CSS/CSS_containment) definierten Eigenschaften können Sie den Browser anweisen, verschiedene Teile einer Seite zu isolieren und ihr Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendern individueller Abschnitte. Ein Beispiel hierfür ist, dass Sie dem Browser vorgeben können, bestimmte Container erst dann zu rendern, wenn sie im Ansichtsfenster sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft ermöglicht es einem Autor, genau festzulegen, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf individuelle Container auf der Seite angewendet werden sollen. Dadurch kann der Browser das Layout, den Stil, das Malen (paint), die Größe oder eine Kombination davon für einen begrenzten Teil des DOMs neu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist eine nützliche Abkürzung, die Autoren ermöglicht, eine starke Menge an Containments auf eine Gruppe von Containern anzuwenden und festzulegen, dass der Browser diese Container erst beim Bedarf layouten und rendern soll.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, mit der Sie eine Platzhaltergröße für Container angeben können, während sie den Effekten von Containment unterliegen. Dies bedeutet, dass die Container Platz einnehmen, auch wenn deren Inhalte noch nicht gerendert wurden, sodass Containment seine Leistungsfähigkeiten entfalten kann, ohne dass das Risiko von Scrollleistenverschiebungen und Ruckeln besteht, sobald Elemente gerendert werden und in den Ansichtsbereich kommen. Dies verbessert die Qualität der Benutzererfahrung während des Ladens der Inhalte.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Optimierung der `:has()`-Selektoren

Die {{cssxref(":has", ":has()")}}-Pseudo-Klasse ermöglicht leistungsstarke Auswahlfunktionen, erfordert jedoch eine sorgfältige Verwendung, um Leistungsengpässe zu vermeiden. Für detaillierte Anleitungen zum Schreiben effizienter `:has()`-Selektoren siehe [Performance considerations in the `:has()` reference documentation](/de/docs/Web/CSS/:has#performance_considerations).

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Beste Praktiken für Schriftarten](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
