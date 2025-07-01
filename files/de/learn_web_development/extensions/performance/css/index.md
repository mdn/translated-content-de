---
title: CSS-Leistungsoptimierung
short-title: Performante CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Beim Entwickeln einer Website müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite verarbeitet. Um mögliche Leistungsprobleme zu mildern, die durch CSS verursacht werden könnten, sollten Sie es optimieren. Zum Beispiel sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "Render-Blocking")}} zu mildern und die Anzahl der erforderlichen Reflows zu minimieren. Dieser Artikel führt Sie durch wichtige Techniken zur CSS-Leistungsoptimierung.

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
          >clientseitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie mehr über die Auswirkungen von CSS auf die Leistung
        einer Website und wie Sie Ihr CSS optimieren, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie Ihr CSS optimieren, ist: „Was muss ich optimieren?“. Einige der unten besprochenen Tipps und Techniken sind gute Praktiken, die jedem Webprojekt zugutekommen, während einige nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Verschwendung Ihrer Zeit sein. Sie sollten herausfinden, welche Leistungsoptimierungen in jedem Projekt tatsächlich benötigt werden.

Um dies zu erreichen, müssen Sie die [Leistung Ihrer Seite messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige davon umfassen ausgeklügelte [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, ist jedoch, zu lernen, wie man Werkzeuge wie die integrierten [Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Werkzeuge](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) des Browsers verwendet, um zu erkennen, welche Teile der Seitenladezeit lange dauern und optimiert werden müssen.

## Optimierung des Renderings

Browser folgen einem bestimmten Rendering-Pfad – das Malen erfolgt nur nach dem Layout, das nach der Erstellung des Renderbaums erfolgt, was wiederum sowohl die DOM- als auch die CSSOM-Bäume erfordert.

Den Benutzern eine ungestaltete Seite zu zeigen und sie dann neu zu malen, nachdem die CSS-Stile analysiert wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund blockiert CSS das Rendering, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite malen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um den Aufbau des CSSOM zu optimieren und die Seitenleistung zu verbessern, können Sie je nach aktuellem Stand Ihres CSS eines oder mehrere der folgenden Dinge tun:

- **Unnötige Stile entfernen**: Das klingt offensichtlich, aber es ist überraschend, wie viele Entwickler vergessen, ungenutzte CSS-Regeln zu bereinigen, die während der Entwicklung ihrem Stylesheet hinzugefügt und letztendlich nicht verwendet wurden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layouts und Malens verwendet werden oder nicht. Das Entfernen ungenutzter Stile kann das Rendern der Seite beschleunigen. Wie in [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammengefasst, ist dies ein schwieriges Problem bei einem großen Codebestand, und es gibt keine Allzwecklösung, um ungenutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und vorsichtig und bedacht zu sein, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: Die Modularität von CSS bedeutet, dass CSS, das beim Seitenladen nicht benötigt wird, später geladen werden kann, wodurch das anfängliche Render-Blocking und die Ladezeiten von CSS reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Im obigen Beispiel werden drei Satz von Stilen bereitgestellt – Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blockierend ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit einer [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das er nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet zwar herunter, blockiert jedoch das Rendering nicht. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei, die das Rendering blockiert, in diesem Fall `styles.css`, deutlich kleiner, was die Zeit, in der das Rendering blockiert wird, verringert.

- **Minimieren und komprimieren Sie Ihr CSS**: Minimierung bedeutet, dass im fertigen Code allen für Menschen lesbaren Leerzeichen entfernt werden. Sie können die Ladezeiten erheblich verkürzen, indem Sie Ihr CSS minifizieren. Die Minimierung erfolgt in der Regel im Rahmen eines Build-Prozesses (zum Beispiel minifizieren die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt für die Bereitstellung erstellen). Zusätzlich zur Minimierung stellen Sie sicher, dass der Server, auf dem Ihre Seite gehostet wird, eine Komprimierung wie gzip auf Dateien anwendet, bevor diese ausgeliefert werden.

- **Selektoren vereinfachen**: Menschen schreiben häufig Selektoren, die komplexer sind, als nötig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Parsing-Zeit für diese Selektoren. Zum Beispiel:

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

  Selektoren weniger komplex und spezifisch zu gestalten, ist auch für die Wartung gut. Es ist einfach zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile bei Bedarf später zu überschreiben, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Stile nicht auf mehr Elemente anwenden als nötig**: Ein häufiger Fehler besteht darin, Stile auf alle Elemente anzuwenden, z.B. mit dem [Universal-Selektor](/de/docs/Web/CSS/Universal_selectors), oder zumindest auf mehr Elemente als nötig. Diese Art des Stylings kann die Leistung negativ beeinflussen, insbesondere auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Tools wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam eingesetzt werden. Sie überall zu nutzen, kann zu unerwartetem Verhalten führen.

- **Reduzieren Sie die Anzahl der HTTP-Anfragen für Bilder mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, die mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Seite verwenden möchten, in einer einzigen Bilddatei zusammenfasst und dann verschiedene {{cssxref("background-position")}}-Werte verwendet, um den Bildausschnitt anzuzeigen, den Sie an jedem Ort zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen, die zum Abrufen der Bilder benötigt werden, drastisch reduzieren.

- **Wichtige Assets vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Preloader für kritische Assets zu verwandeln. Dies schließt CSS-Dateien, Schriftarten und Bilder ein:

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

  Mit `preload` holt der Browser die referenzierten Ressourcen so schnell wie möglich ab und macht sie im Browser-Cache verfügbar, damit sie schneller einsatzbereit sind, wenn sie im nachfolgenden Code referenziert werden. Es ist nützlich, hoch-priorisierte Ressourcen vorzuladen, denen der Benutzer früh auf einer Seite begegnen wird, damit die Erfahrung so reibungslos wie möglich ist. Beachten Sie, dass Sie auch `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen „snappiger“ machen und den Benutzern das Gefühl geben, dass Fortschritte gemacht werden, während sie darauf warten, dass eine Seite geladen wird (Ladespinner zum Beispiel). Größere Animationen und eine höhere Anzahl von Animationen erfordern natürlich mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten den Benutzern auch eine Steuerung bzw. eine Site-Einstellung anbieten, um Animationen zu deaktivieren, wenn sie ein schwach leistungsfähiges Gerät oder ein mobiles Gerät mit begrenzter Akkuleistung verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob die Animation der Seite überhaupt angewendet wird. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationsstile basierend auf den OS-Präferenzen des Benutzers selektiv bereitzustellen oder nicht.

Für unverzichtbare DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) zu verwenden, wo dies möglich ist, anstatt JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet einen Weg, um direkt auf CSS-Animationen mit JavaScript zuzugreifen).

### Zu animierende Eigenschaften auswählen

Die Leistungsfähigkeit von Animationen hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften, wenn sie animiert werden, lösen einen {{Glossary("Reflow", "Reflow")}} aus (und damit auch einen {{Glossary("Repaint", "Repaint")}}) und sollten vermieden werden. Dazu gehören Eigenschaften wie:

- Ändern der Abmessungen eines Elements, wie [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Neu-Positionierung eines Elements, wie [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left), und [`right`](/de/docs/Web/CSS/right).
- Änderung des Layouts eines Elements, wie [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items), und [`flex`](/de/docs/Web/CSS/flex).
- Hinzufügen visueller Effekte, die die Geometrie des Elements verändern, wie [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind klug genug, nur den geänderten Bereich des Dokuments neu zu zeichnen, anstatt die gesamte Seite. Deshalb sind größere Animationen kostenintensiver.

Falls möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Neumalung verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animationen auf der GPU animieren

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, die Animationsarbeit vom Haupt-Thread auf die GPU des Geräts zu verlagern (auch als Kompositing bezeichnet). Dies wird erreicht, indem spezifische Arten von Animationen ausgewählt werden, die der Browser automatisch an die GPU weiterleitet; dazu gehören:

- 3D-Transformationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit angewendetem [`will-change`](/de/docs/Web/CSS/will-change) (siehe den unten stehenden Abschnitt).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas), und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Die Animation auf der GPU kann zu einer verbesserten Leistung führen, insbesondere auf mobilen Geräten. Allerdings ist die Verlagerung von Animationen auf die GPU nicht immer einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell teure Arbeiten durchgeführt werden, bevor sie benötigt werden. Die CSS-Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) gibt den Browsern Hinweise darauf, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE]
> `will-change` ist als letzte Maßnahme gedacht, um mit bestehenden Leistungsproblemen zu tun zu haben. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Render-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er alle diese Stile analysiert hat, blockiert jedoch nicht das Rendering von Stilen, von denen er weiß, dass er sie nicht verwenden wird, wie z. B. die Druck-Stylesheets. Durch das Aufteilen des CSS in mehrere Dateien basierend auf Media Queries können Sie das Render-Blocking während des Downloads von ungenutztem CSS verhindern. Um einen nicht blockierenden CSS-Link zu erstellen, verschieben Sie die Stile, die nicht sofort verwendet werden, wie zum Beispiel Druckstile, in eine separate Datei, fügen Sie eine [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) zum HTML-Markup hinzu und fügen Sie eine Media Query hinzu, in diesem Fall, dass es sich um ein Druckstylesheet handelt.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet render-blockierend ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, von dem er weiß, dass er es nur für ein spezifisches Szenario anwenden muss, lädt er das Stylesheet dennoch herunter, blockiert jedoch das Rendering nicht. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei, die das Rendering blockiert, in diesem Fall `styles.css`, deutlich kleiner und reduziert die Zeit, in der das Rendering blockiert wird.

## Verbesserung der Schriftleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Leistung von Web-Schriften.

Denken Sie generell sorgfältig über die Schriften nach, die Sie auf Ihrer Seite verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Obwohl es verlockend sein kann, viele Schriften für visuelle Attraktivität zu verwenden, kann dies die Seitenladezeit erheblich verlangsamen und dazu führen, dass Ihre Seite wie ein Durcheinander aussieht. Wahrscheinlich benötigen Sie nur etwa zwei oder drei Schriften und Sie können mit weniger auskommen, wenn Sie [websichere Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) verwenden.

### Schriftarten laden

Beachten Sie, dass eine Schriftart erst geladen wird, wenn sie tatsächlich auf ein Element mit der Eigenschaft [`font-family`](/de/docs/Web/CSS/font-family) angewendet wird, nicht wenn sie zuerst mit der At-Regel [`@font-face`](/de/docs/Web/CSS/@font-face) referenziert wird:

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

Dies ist eher dann von Vorteil, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet versteckt ist und beim Parsen erst später erreicht wird. Es handelt sich jedoch um einen Kompromiss — Schriftdateien sind recht groß, und wenn Sie zu viele davon vorladen, könnten Sie andere Ressourcen verzögern.

Sie können auch Folgendes in Betracht ziehen:

- Verwendung von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühe Verbindung mit dem Schriftart-Anbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Verwendung der [CSS-Schriftarten-API zum Laden](/de/docs/Web/API/CSS_Font_Loading_API), um das Schriftarten-Ladeverhalten über JavaScript anzupassen.

### Laden nur der benötigten Glyphen

Beim Auswählen einer Schriftart für den Fließtext ist es schwieriger, sich über die Glyphen sicher zu sein, die darin verwendet werden, insbesondere wenn man mit nutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen arbeitet.

Wenn Sie jedoch wissen, dass Sie nur eine spezifische Satz von Glyphen verwenden werden (z. B. Glyphen für Überschriften oder spezifische Satzzeichen), können Sie die Anzahl der Glyphen einschränken, die der Browser herunterladen muss. Dies kann durch Erstellen einer Schriftdatei geschehen, die nur den benötigten Teil enthält. Ein Prozess, der [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting) genannt wird. Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) `@font-face`-Deskriptor kann dann verwendet werden, um anzugeben, wann Ihre Teilschriftart verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Festlegen des Schriftanzeigenverhaltens mit dem `font-display` Deskriptor

Angewendet auf die `@font-face`-Anweisung, definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display) Deskriptor, wie Schriftartdateien durch den Browser geladen und angezeigt werden, sodass Text mit einer Ersatzschrift erscheint, während eine Schriftart geladen wird oder das Laden fehlschlägt. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm zu haben, mit dem Kompromiss eines Blitzen ungestalteten Textes.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Stilneuberechnung mit CSS-Containment

Durch die Verwendung der im [CSS-Containment](/de/docs/Web/CSS/CSS_containment) Modul definierten Eigenschaften können Sie den Browser anweisen, verschiedene Teile einer Seite zu isolieren und ihre Renderings unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendern einzelner Abschnitte. Zum Beispiel können Sie dem Browser angeben, bestimmte Container nicht zu rendern, bis sie im Ansichtsfenster sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft ermöglicht es dem Autor, genau anzugeben, welche [Containment-Typen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf einzelne Container auf der Seite angewendet werden sollen. Dies ermöglicht es dem Browser, Layout, Stil, Farbe, Größe oder eine Kombination davon für einen begrenzten Teil des DOMs neu zu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist eine nützliche Abkürzung, die Autoren ermöglicht, ein starkes Set von Containments auf eine Reihe von Containern anzuwenden und anzugeben, dass der Browser diese Container nicht layouten und rendern sollte, bis sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, die es ermöglicht, eine Platzhaltergröße für Container anzugeben, während sie den Auswirkungen des Containments unterliegen. Dies bedeutet, dass die Container Platz einnehmen werden, auch wenn ihre Inhalte noch nicht gerendert wurden, was dem Containment erlaubt, seine Leistungsfähigkeit zu entfalten, ohne das Risiko von Verschiebungen und Ruckeln im Scrollbalken durch das Ein- und Ausblenden von Elementen. Dies verbessert die Qualität der Benutzererfahrung, während der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Siehe auch

- [CSS-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
