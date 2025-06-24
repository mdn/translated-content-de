---
title: Optimierung der CSS-Performance
short-title: Performantes CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Beim Entwickeln einer Website müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite behandelt. Um mögliche Performance-Probleme, die durch CSS verursacht werden könnten, zu mindern, sollten Sie es optimieren. Zum Beispiel sollten Sie das CSS optimieren, um {{Glossary("Render_blocking", "render-blocking")}} zu minimieren und die Anzahl der erforderlichen Reflows zu reduzieren. Dieser Artikel führt Sie durch wichtige Techniken zur Optimierung der CSS-Performance.

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
          >client-seitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Den Einfluss von CSS auf die Website-Performance zu verstehen
        und zu lernen, wie man CSS zur Verbesserung der Performance optimiert.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie mit der Optimierung Ihres CSS beginnen, ist "Was muss ich optimieren?". Einige der unten besprochenen Tipps und Techniken sind gute Praktiken, von denen so gut wie jedes Webprojekt profitieren wird, während einige nur in bestimmten Situationen erforderlich sind. Zu versuchen, alle diese Techniken überall anzuwenden, ist wahrscheinlich überflüssig und könnte Zeitverschwendung sein. Sie sollten herausfinden, welche Performance-Optimierungen in jedem Projekt tatsächlich benötigt werden.

Dazu müssen Sie die [Performance Ihrer Seite messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Performance zu messen, einige davon beinhalten ausgefeilte [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, ist jedoch, zu lernen, wie man Tools wie die integrierten Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Performance-Tools](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) verwendet, um zu sehen, welche Teile des Seitenladens lange dauern und optimiert werden müssen.

## Optimierung des Renderings

Browser befolgen einen bestimmten Rendering-Pfad — das Malen erfolgt nur nach dem Layout, das nach dem Erstellen des Render-Baums erfolgt, welcher wiederum sowohl die DOM- als auch die CSSOM-Bäume erfordert.

Benutzern eine ungestylte Seite zu zeigen und sie dann neu zu zeichnen, nachdem die CSS-Stile analysiert wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund ist CSS render-blockierend, bis der Browser feststellt, dass das CSS benötigt wird. Der Browser kann die Seite malen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} erstellt hat.

Um den Aufbau von CSSOM zu optimieren und die Seitenleistung zu verbessern, können Sie abhängig vom aktuellen Zustand Ihres CSS eines oder mehrere der folgenden Dinge tun:

- **Unnötige Stile entfernen**: Das mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, nicht verwendete CSS-Regeln zu bereinigen, die ihren Stylesheets während der Entwicklung hinzugefügt wurden und letztendlich nicht verwendet wurden. Alle Stile werden analysiert, unabhängig davon, ob sie während des Layouts und Malens verwendet werden oder nicht. Es kann das Seitenrendering beschleunigen, nicht verwendete zu entfernen. Wie [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (css-tricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem, das für einen großen Codebestand zu lösen ist, und es gibt keine Wunderwaffe, um nicht verwendetes CSS zuverlässig zu finden und zu entfernen. Sie müssen die schwierige Arbeit leisten, Ihr CSS modular zu halten und sorgfältig und überlegt darüber nachzudenken, was hinzugefügt und entfernt wird.

- **CSS in separate Module aufteilen**: Modulares CSS bedeutet, dass CSS, das beim Laden der Seite nicht benötigt wird, später geladen werden kann, was die anfängliche CSS-Render-Blockierung und Ladezeit verringert. Der einfachste Weg, dies zu tun, ist, Ihr CSS in separate Dateien aufzuteilen und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Sets von Stilen — Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blockierend ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut enthalten, das eine [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) enthält. Wenn der Browser ein Stylesheet sieht, das nur in einem bestimmten Szenario angewendet werden muss, wird das Stylesheet zwar heruntergeladen, ist jedoch nicht render-blockierend. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei, die das Render-Blocking verursacht, in diesem Fall `styles.css`, erheblich kleiner, was die Zeit, in der das Rendering blockiert ist, reduziert.

- **CSS minifizieren und komprimieren**: Minifizieren bedeutet, alle Leerzeichen in der Datei zu entfernen, die nur zur besseren Lesbarkeit für Menschen vorhanden sind, wenn der Code in die Produktion geht. Sie können die Ladezeiten erheblich reduzieren, indem Sie Ihr CSS minifizieren. Minifizierung wird in der Regel als Teil eines Build-Prozesses durchgeführt (zum Beispiel minifzieren die meisten JavaScript-Frameworks den Code, wenn Sie ein Projekt zum Einsatz bereit machen). Zusätzlich zur Minifizierung sollten Sie sicherstellen, dass der Server, auf dem Ihre Website gehostet wird, Komprimierung wie gzip für Dateien verwendet, bevor sie bereitgestellt werden.

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

  Weniger komplexe und spezifische Selektoren zu erstellen, ist auch gut für die Wartung. Es ist leicht zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile zu überschreiben, wenn sie später weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Stile nicht auf mehr Elemente anwenden als nötig**: Ein häufiger Fehler ist, Stile auf alle Elemente mithilfe des [universellen Selektors](/de/docs/Web/CSS/Universal_selectors) anzuwenden, oder zumindest auf mehr Elemente, als nötig sind. Diese Art von Styling kann die Performance negativ beeinflussen, insbesondere bei größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und mächtige Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam verwendet werden. Ihre Anwendung überall kann zu unerwartetem Verhalten führen.

- **HTTP-Anfragen für Bilder mit CSS-Sprites reduzieren**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, die mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Website verwenden möchten, in eine einzelne Bilddatei platziert und dann verschiedene {{cssxref("background-position")}}-Werte verwendet, um das Bildstück zu zeigen, das Sie an jedem Ort anzeigen möchten. Dies kann die Anzahl der benötigten HTTP-Anfragen zum Abrufen der Bilder erheblich reduzieren.

- **Wichtige Assets vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Vorlader kritischer Assets zu verwandeln. Dies schließt CSS-Dateien, Schriftarten und Bilder ein:

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

  Mit `preload` holt sich der Browser die referenzierten Ressourcen so schnell wie möglich und stellt sie im Browser-Cache bereit, damit sie beim Referenzieren im nachfolgenden Code schneller verfügbar sind. Es ist nützlich, hochpriorisierte Ressourcen, die der Benutzer früh auf einer Seite encounter wird, vorzuladen, um das Erlebnis so reibungslos wie möglich zu gestalten. Beachten Sie, dass Sie auch `media`-Attribute verwenden können, um responsive Vorlader zu erstellen.

  Siehe auch [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen schneller wirken lassen und Benutzern das Gefühl geben, dass Fortschritte erzielt werden, während sie beispielsweise auf das Laden einer Seite warten (Ladespinner zum Beispiel). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch natürlich mehr Verarbeitungskraft, was die Leistung verschlechtern kann.

Der einfachste Rat ist, alle unnötigen Animationen zu reduzieren. Sie könnten Benutzern auch eine Steuerungsmöglichkeit oder Standorteinstellung bereitstellen, um Animationen zu deaktivieren, wenn sie ein leistungsschwaches Gerät oder ein Mobilgerät mit begrenzter Akkuleistung verwenden. Sie könnten auch JavaScript verwenden, um zu kontrollieren, ob Animationen überhaupt auf der Seite angewendet werden. Es gibt auch eine Media Query namens [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion), die verwendet werden kann, um Animationen basierend auf den OS-Einstellungen eines Benutzers selektiv zu dienen oder nicht.

Für essenzielle DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) dort zu verwenden, wo möglich, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, sich direkt in CSS-Animationen über JavaScript einzuklinken).

### Auszuwählende Eigenschaften für Animationen

Die Animationsleistung hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften, die animiert werden, lösen einen {{Glossary("Reflow", "Reflow")}} aus (und daher auch ein {{Glossary("Repaint", "Repaint")}}) und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Abmessungen eines Elements ändern, wie z.B. [`width`](/de/docs/Web/CSS/width), [`height`](/de/docs/Web/CSS/height), [`border`](/de/docs/Web/CSS/border) und [`padding`](/de/docs/Web/CSS/padding).
- Ein Element neu positionieren, wie z.B. [`margin`](/de/docs/Web/CSS/margin), [`top`](/de/docs/Web/CSS/top), [`bottom`](/de/docs/Web/CSS/bottom), [`left`](/de/docs/Web/CSS/left) und [`right`](/de/docs/Web/CSS/right).
- Das Layout eines Elements ändern, wie z.B. [`align-content`](/de/docs/Web/CSS/align-content), [`align-items`](/de/docs/Web/CSS/align-items) und [`flex`](/de/docs/Web/CSS/flex).
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie z.B. [`box-shadow`](/de/docs/Web/CSS/box-shadow).

Moderne Browser sind klug genug, nur den geänderten Bereich des Dokuments neu zu zeichnen, anstatt die gesamte Seite. Infolgedessen sind größere Animationen kostspieliger.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keinen Reflow/Repaint verursachen. Dazu gehören:

- [Transforms](/de/docs/Web/CSS/CSS_transforms)
- [`opacity`](/de/docs/Web/CSS/opacity)
- [`filter`](/de/docs/Web/CSS/filter)

### Animationen auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie in Betracht ziehen, die Animationsarbeit vom Hauptthread auf die GPU des Geräts (auch als Kompositing bezeichnet) zu verlagern. Dies wird erreicht, indem bestimmte Arten von Animationen gewählt werden, die der Browser automatisch an die GPU sendet, um sie zu verarbeiten; dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/transform) und [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d).
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/position).
- Elemente mit angewandtem [`will-change`](/de/docs/Web/CSS/will-change) (siehe den folgenden Abschnitt).
- Bestimmte Elemente, die in ihrer eigenen Schicht gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animationen auf der GPU können zu einer verbesserten Leistung führen, insbesondere auf Mobilgeräten. Das Verschieben von Animationen auf die GPU ist jedoch nicht immer so einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine sehr nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können vorab Optimierungen einrichten, bevor ein Element tatsächlich geändert wird. Diese Arten von Optimierungen können die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell teure Arbeiten durchgeführt werden, bevor sie benötigt werden. Die CSS [`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaft gibt Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE] > `will-change` soll als letztes Mittel verwendet werden, um mit bestehenden Performance-Problemen umzugehen. Es sollte nicht verwendet werden, um Performance-Probleme zu antizipieren.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimierung für render-blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für ein responsives Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er all diese Stile analysiert hat, blockiert aber das Rendering nicht für Stile, die er nicht verwenden wird, wie z.B. die Druck-Stylesheets. Indem Sie das CSS in mehrere Dateien aufteilen, basierend auf Media Queries, können Sie das Render-Blocking während des Herunterladens nicht verwendeten CSS verhindern. Um einen nicht-blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie z.B. Druck-Styles, in eine separate Datei und fügen Sie einen [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) zur HTML-Markierung hinzu und fügen Sie eine Media Query hinzu, in diesem Fall, dass es sich um ein Druck-Stylesheet handelt.

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

Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blockierend ist. Sagen Sie dem Browser, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit der [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) hinzufügen. Wenn der Browser ein Stylesheet sieht, das nur in einem bestimmten Szenario angewendet werden muss, lädt er das Stylesheet dennoch herunter, blockiert jedoch nicht das Rendering. Indem Sie das CSS in mehrere Dateien aufteilen, ist die Hauptdatei, die das Render-Blocking verursacht, in diesem Fall `styles.css`, erheblich kleiner, was die Zeit, in der das Rendering blockiert ist, reduziert.

## Verbesserung der Schriftleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Webschrift-Performance.

Denken Sie im Allgemeinen sorgfältig über die Schriften nach, die Sie auf Ihrer Website verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Während es verlockend sein kann, viele Schriften für ein visuell aufregendes Design zu verwenden, kann dies das Laden der Seite erheblich verlangsamen und dazu führen, dass Ihre Website wie ein Durcheinander aussieht. Sie benötigen wahrscheinlich nur etwa zwei oder drei Schriften, und Sie können mit weniger auskommen, wenn Sie sich entscheiden, [websichere Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftartladen

Beachten Sie, dass eine Schriftart erst geladen wird, wenn sie tatsächlich auf ein Element angewendet wird, das die [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft verwendet, nicht wenn sie zuerst über die [`@font-face`](/de/docs/Web/CSS/@font-face)-Anweisung referenziert wird:

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

Daher kann es vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriftarten frühzeitig zu laden, sodass sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist wahrscheinlicher von Vorteil, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet verborgen ist und erst deutlich später im Analyseprozess erreicht wird. Es ist jedoch ein Kompromiss — Schriftdateien sind ziemlich groß, und wenn Sie zu viele von ihnen preladen, können Sie andere Ressourcen verzögern.

Sie können auch Folgendes in Betracht ziehen:

- Verwenden von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühzeitige Verbindung mit dem Schriftartanbieter herzustellen. Siehe [Preconnect to critical third-party origins](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Verwenden der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API), um das Ladeverhalten der Schriftart über JavaScript anzupassen.

### Nur die benötigten Glyphen laden

Bei der Auswahl einer Schriftart für den Fließtext ist es schwieriger sicherzustellen, welche Glyphen verwendet werden, insbesondere wenn Sie mit nutzergenerierten Inhalten und/oder Inhalten über mehrere Sprachen hinweg arbeiten.

Wenn Sie jedoch wissen, dass Sie ein bestimmtes Set von Glyphen verwenden werden (zum Beispiel nur Glyphen für Überschriften oder bestimmte Satzzeichen), können Sie die Anzahl der herunterzuladenden Glyphen für den Browser begrenzen. Dies kann durch die Erstellung einer Schriftdatei erreicht werden, die nur den erforderlichen Ausschnitt enthält. Ein Prozess namens [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting). Der [`unicode-range`](/de/docs/Web/CSS/@font-face/unicode-range) `@font-face`-Deskriptor kann dann verwendet werden, um festzulegen, wann Ihre Teilmenge verwendet wird. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Definition des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor

Angewandt auf die `@font-face`-Anweisung, definiert der [`font-display`](/de/docs/Web/CSS/@font-face/font-display)-Deskriptor, wie Schriftdateien geladen und durch den Browser angezeigt werden, sodass Text mit einer Ersatzschrift angezeigt werden kann, während eine Schrift geladen oder das Laden fehlschlägt. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm zu haben, mit einem Kompromiss eines "Flash of Unstyled Text".

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung des Stilrechners mit CSS Containment

Durch die Verwendung der im [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul definierten Eigenschaften können Sie dem Browser anweisen, verschiedene Teile einer Seite zu isolieren und deren Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung beim Rendern einzelner Abschnitte. Als Beispiel können Sie dem Browser angeben, bestimmte Container nicht darzustellen, bis sie im Viewport sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft erlaubt es einem Autor, genau festzulegen, welche [Containertypen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) sie auf einzelne Container auf einer Seite anwenden möchten. Dies ermöglicht es dem Browser, das Layout, den Stil, das Zeichnen, die Größe oder eine Kombination davon für einen begrenzten Teil des DOM neu zu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, ein starkes Set von Containments auf eine Gruppe von Containern anzuwenden und festzulegen, dass der Browser diese Container erst layouten und rendern soll, wenn sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, die es Ihnen ermöglicht, eine Platzhaltergröße für Container anzugeben, während sie unter den Auswirkungen des Containments stehen. Das bedeutet, dass die Container Platz einnehmen, selbst wenn ihr Inhalt noch nicht gerendert wurde, wodurch das Containment seine Leistungsstärke entfalten kann, ohne das Risiko eines Scrollbalken-Verschiebens und Ruckelns, während Elemente gerendert und in den Ansicht gelangen. Dies verbessert die Qualität der Benutzererfahrung, während der Inhalt geladen wird.

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
