---
title: CSS-Leistungsoptimierung
short-title: Leistungsfähiges CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

Bei der Entwicklung einer Website müssen Sie berücksichtigen, wie der Browser das CSS auf Ihrer Seite handhabt. Um etwaige Leistungsprobleme, die CSS verursachen könnte, zu mildern, sollten Sie es optimieren. Beispielsweise sollten Sie CSS optimieren, um {{Glossary("Render_blocking", "render-blocking")}} zu mildern und die Anzahl der erforderlichen Neuanordnungen zu minimieren. Dieser Artikel erklärt Ihnen die wichtigsten Techniken zur CSS-Leistungsoptimierung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren, welchen Einfluss CSS auf die Leistung einer Website hat
        und wie Sie Ihr CSS optimieren können, um die Leistung zu verbessern.
      </td>
    </tr>
  </tbody>
</table>

## Optimieren oder nicht optimieren

Die erste Frage, die Sie beantworten sollten, bevor Sie beginnen, Ihr CSS zu optimieren, lautet: "Was muss ich optimieren?". Einige der unten diskutierten Tipps und Techniken sind bewährte Praktiken, die fast jedem Webprojekt zugutekommen, während andere nur in bestimmten Situationen erforderlich sind. Der Versuch, all diese Techniken überall anzuwenden, ist wahrscheinlich unnötig und könnte eine Zeitverschwendung sein. Sie sollten herausfinden, welche Leistungsoptimierungen tatsächlich in jedem Projekt benötigt werden.

Um dies zu tun, müssen Sie die [Leistung Ihrer Website messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance). Wie der vorherige Link zeigt, gibt es verschiedene Möglichkeiten, die Leistung zu messen, einige davon mit anspruchsvollen [Performance-APIs](/de/docs/Web/API/Performance_API). Der beste Weg, um anzufangen, besteht jedoch darin, zu lernen, wie man Werkzeuge wie eingebaute Browser-[Netzwerk-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) und [Leistungs-](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools)tools verwendet, um zu sehen, welche Teile der Seitenladezeit viel Zeit benötigen und optimiert werden müssen.

## Optimierung des Renderings

Browser folgen einem bestimmten Render-Pfad — das Zeichnen erfolgt erst nach dem Layout, welches nach der Erstellung des Renderbaums stattfindet, was wiederum sowohl die DOM- als auch die CSSOM-Bäume erfordert.

Den Benutzern eine unformatierte Seite zu zeigen und dann neu zu zeichnen, nachdem die CSS-Stile geparst wurden, wäre eine schlechte Benutzererfahrung. Aus diesem Grund ist CSS blockierend beim Rendern, bis der Browser feststellt, dass das CSS erforderlich ist. Der Browser kann die Seite zeichnen, nachdem er das CSS heruntergeladen und das {{Glossary("CSSOM", "CSS-Objektmodell (CSSOM)")}} aufgebaut hat.

Um den CSSOM-Aufbau zu optimieren und die Seitenleistung zu verbessern, können Sie je nach aktuellem Stand Ihres CSS eine oder mehrere der folgenden Maßnahmen ergreifen:

- **Entfernen Sie unnötige Stile**: Das mag offensichtlich klingen, aber es ist überraschend, wie viele Entwickler vergessen, unbenutzte CSS-Regeln zu bereinigen, die während der Entwicklung zu ihren Stylesheets hinzugefügt wurden und letztendlich nicht verwendet wurden. Alle Stile werden geparst, egal ob sie beim Layout und beim Zeichnen verwendet werden oder nicht. Das Entfernen ungenutzter Stile kann die Seitenrendite beschleunigen. Wie [Wie entfernen Sie unbenutztes CSS von einer Seite?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) zusammenfasst, ist dies ein schwieriges Problem bei einem großen Codebasis zu lösen, und es gibt keine magische Lösung, um ungenutztes CSS zuverlässig zu finden und zu entfernen. Sie müssen die harte Arbeit leisten, Ihr CSS modular zu halten und sorgfältig und bewusst damit umzugehen, was hinzugefügt und entfernt wird.

- **Teilen Sie CSS in separate Module auf**: Modulares CSS bedeutet, dass CSS, das beim Laden der Seite nicht erforderlich ist, später geladen werden kann, wodurch das anfängliche CSS-Render-Blocking und die Ladezeiten reduziert werden. Der einfachste Weg, dies zu tun, besteht darin, Ihr CSS in separate Dateien aufzuspalten und nur das zu laden, was benötigt wird:

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

  Das obige Beispiel bietet drei Satz Stile — Standardstile, die immer geladen werden, Stile, die nur geladen werden, wenn das Dokument gedruckt wird, und Stile, die nur von Geräten mit schmalen Bildschirmen geladen werden. Standardmäßig geht der Browser davon aus, dass jedes angegebene Stylesheet render-blockierend ist. Sie können dem Browser mitteilen, wann ein Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut hinzufügen, das eine [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using) enthält. Wenn der Browser ein Stylesheet sieht, das es nur in einem bestimmten Szenario anwenden muss, lädt es das Stylesheet trotzdem herunter, blockiert jedoch nicht das Rendern. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei, die das Rendern blockiert, in diesem Fall `styles.css`, viel kleiner, wodurch die Zeit verkürzt wird, in der das Rendering blockiert ist.

- **Minifizieren und komprimieren Sie Ihr CSS**: Minifizierung bedeutet, dass alle Leerzeichen in der Datei entfernt werden, die nur zur menschlichen Lesbarkeit vorhanden sind, sobald der Code produktionsreif eingesetzt wird. Sie können Ladezeiten erheblich reduzieren, indem Sie Ihr CSS minifizieren. Die Minifizierung erfolgt in der Regel als Teil eines Build-Prozesses (zum Beispiel minifizieren die meisten JavaScript-Frameworks Code, wenn Sie ein projektfertiges Deployment erstellen). Zusätzlich zur Minifizierung sollten Sie sicherstellen, dass der Server, auf dem Ihre Seite gehostet ist, Dateien vor dem Ausliefern mit einer Komprimierung wie gzip verwendet.

- **Vereinfachen Sie Selektoren**: Oft werden Selektoren geschrieben, die komplizierter sind, als nötig, um die erforderlichen Stile anzuwenden. Dies erhöht nicht nur die Dateigrößen, sondern auch die Parsing-Zeit für diese Selektoren. Zum Beispiel:

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

  Wenn Ihre Selektoren weniger komplex und spezifisch sind, ist das auch für die Wartung vorteilhaft. Es ist einfach zu verstehen, was einfache Selektoren tun, und es ist einfach, Stile zu überschreiben, wenn nötig, später, wenn die Selektoren weniger [spezifisch](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2) sind.

- **Wenden Sie Stile nicht auf mehr Elemente an als nötig**: Ein häufiger Fehler ist es, Stile auf alle Elemente anzuwenden, indem der [Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) verwendet wird, oder zumindest auf mehr Elemente, als nötig. Diese Art des Stylings kann die Leistung beeinträchtigen, besonders auf größeren Websites.

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Denken Sie daran, dass viele Eigenschaften (wie {{cssxref("font-size")}}) ihre Werte von ihren Eltern erben, sodass Sie sie nicht überall anwenden müssen. Und leistungsstarke Werkzeuge wie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) sollten sparsam eingesetzt werden. Sie überall zu verwenden kann alle möglichen unerwarteten Verhalten verursachen.

- **Reduzieren Sie Bild-HTTP-Anfragen mit CSS-Sprites**: [CSS-Sprites](https://css-tricks.com/css-sprites/) ist eine Technik, die mehrere kleine Bilder (wie Symbole), die Sie auf Ihrer Seite verwenden möchten, in einer einzigen Bilddatei platziert und dann verschiedene {{cssxref("background-position")}} Werte verwendet, um das Bildstück anzuzeigen, das Sie an jeder Stelle zeigen möchten. Dies kann die Anzahl der HTTP-Anfragen erheblich reduzieren, die benötigt werden, um die Bilder abzurufen.

- **Wichtige Ressourcen vorladen**: Sie können [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) verwenden, um {{htmlelement("link")}}-Elemente in Vorladeelemente für kritische Ressourcen zu verwandeln. Dies umfasst CSS-Dateien, Schriften und Bilder:

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

  Mit `preload` holt der Browser die referenzierten Ressourcen so schnell wie möglich und macht sie im Browser-Cache verfügbar, damit sie schneller bereit stehen, wenn sie im nachfolgenden Code benötigt werden. Es ist nützlich, hochpriorisierte Ressourcen vorzulesen, die der Benutzer frühzeitig auf einer Seite begegnen wird, damit die Erfahrung so reibungslos wie möglich ist. Beachten Sie, dass Sie auch `media`-Attribute verwenden können, um responsive Preloader zu erstellen.

  Siehe auch [Wichtige Ressourcen vorladen, um die Ladegeschwindigkeit zu verbessern](https://web.dev/articles/preload-critical-assets) auf web.dev (2020)

## Umgang mit Animationen

Animationen können die wahrgenommene Leistung verbessern, indem sie Schnittstellen flüssiger machen und den Benutzern das Gefühl geben, dass Fortschritte gemacht werden, wenn sie darauf warten, dass eine Seite geladen wird (z.B. Ladeanimationen). Größere Animationen und eine höhere Anzahl von Animationen erfordern jedoch naturgemäß mehr Rechenleistung, was die Leistung beeinträchtigen kann.

Der einfachste Ratschlag ist, alle unnötigen Animationen zu reduzieren. Sie könnten auch den Benutzern eine Steuerung/Site-Einstellung zur Verfügung stellen, um Animationen auszuschalten, wenn sie ein leistungsschwaches Gerät oder ein mobiles Gerät mit begrenzter Batterieleistung verwenden. Sie könnten auch JavaScript verwenden, um zu steuern, ob Animationen überhaupt auf die Seite angewendet werden. Es gibt auch eine Media Query namens {{cssxref("@media/prefers-reduced-motion")}}, die verwendet werden kann, um Animationen basierend auf den Animationseinstellungen auf Betriebssystemebene des Benutzers selektiv zu dienen oder nicht.

Für wesentliche DOM-Animationen wird empfohlen, [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) zu verwenden, wo immer möglich, anstelle von JavaScript-Animationen (die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bietet eine Möglichkeit, direkt mit CSS-Animationen mithilfe von JavaScript zu arbeiten).

### Auswahl von Eigenschaften zur Animation

Die Leistungsfähigkeit von Animationen hängt stark davon ab, welche Eigenschaften Sie animieren. Bestimmte Eigenschaften, wenn sie animiert werden, lösen eine {{Glossary("Reflow", "Neuanordnung")}} (und damit auch ein {{Glossary("Repaint", "Neuzeichnen")}}) aus und sollten vermieden werden. Dazu gehören Eigenschaften, die:

- Die Dimensionen eines Elements ändern, wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("border")}} und {{cssxref("padding")}}.
- Ein Element neu positionieren, wie {{cssxref("margin")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}}.
- Das Layout eines Elements ändern, wie {{cssxref("align-content")}}, {{cssxref("align-items")}} und {{cssxref("flex")}}.
- Visuelle Effekte hinzufügen, die die Geometrie des Elements ändern, wie {{cssxref("box-shadow")}}.

Moderne Browser sind intelligent genug, nur den geänderten Bereich des Dokuments neu zu zeichnen, anstatt die gesamte Seite. Als Ergebnis sind größere Animationen kostspieliger.

Wenn möglich, ist es besser, Eigenschaften zu animieren, die keine Neuanordnung/Neuzeichnung verursachen. Dazu gehören:

- [Transformationen](/de/docs/Web/CSS/Guides/Transforms)
- {{cssxref("opacity")}}
- {{cssxref("filter")}}

### Animation auf der GPU

Um die Leistung weiter zu verbessern, sollten Sie erwägen, die Animationsarbeit vom Hauptthread auf die GPU des Geräts zu verlagern (auch als Compositing bezeichnet). Dies geschieht, indem bestimmte Arten von Animationen ausgewählt werden, die der Browser automatisch an die GPU überträgt; dazu gehören:

- 3D-Transformationsanimationen wie [`transform: translateZ()`](/de/docs/Web/CSS/Reference/Properties/transform) und {{cssxref("transform-function/rotate3d")}}.
- Elemente mit bestimmten anderen animierten Eigenschaften wie [`position: fixed`](/de/docs/Web/CSS/Reference/Properties/position).
- Elemente mit {{cssxref("will-change")}} angewendet (siehe den folgenden Abschnitt).
- Bestimmte Elemente, die in ihrer eigenen Ebene gerendert werden, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) und [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe).

Animation auf der GPU kann vor allem auf Mobilgeräten zu einer besseren Leistung führen. Das Verschieben von Animationen zur GPU ist jedoch nicht immer so einfach. Lesen Sie [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) für eine nützliche und detaillierte Analyse.

## Optimierung von Elementänderungen mit `will-change`

Browser können Optimierungen vornehmen, bevor ein Element tatsächlich geändert wird. Diese Art von Optimierungen kann die Reaktionsfähigkeit einer Seite erhöhen, indem potenziell kostspielige Arbeit ausgeführt wird, bevor sie erforderlich ist. Die CSS-Eigenschaft {{cssxref("will-change")}} gibt den Browsern einen Hinweis darauf, wie sich ein Element voraussichtlich ändern wird.

> [!NOTE]
> `will-change` ist als letztes Mittel gedacht, um bestehende Leistungsprobleme zu beseitigen. Es sollte nicht verwendet werden, um Leistungsprobleme vorwegzunehmen.

```css
.element {
  will-change: opacity, transform;
}
```

## Optimieren für das Render-Blocking

CSS kann Stile auf bestimmte Bedingungen mit Media Queries beschränken. Media Queries sind wichtig für ein anpassungsfähiges Webdesign und helfen uns, einen kritischen Rendering-Pfad zu optimieren. Der Browser blockiert das Rendering, bis er alle diese Stile geparst hat, wird jedoch das Rendering bei Stilen, die er nicht verwenden wird, wie z.B. Druckstylesheets, nicht blockieren. Indem Sie das CSS in mehrere Dateien basierend auf Media Queries aufteilen, können Sie das Render-Blocking während des Herunterladens von ungenutztem CSS verhindern. Um einen nicht blockierenden CSS-Link zu erstellen, verschieben Sie die nicht sofort verwendeten Stile, wie z.B. Druckstile, in eine separate Datei, fügen Sie einen [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) zum HTML-Markup hinzu und fügen Sie eine Media Query hinzu, in diesem Fall, dass sie ein Druckstylesheet ist.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Standardmäßig nimmt der Browser an, dass jedes angegebene Stylesheet render-blockierend ist. Teilen Sie dem Browser mit, wann das Stylesheet angewendet werden soll, indem Sie ein `media`-Attribut mit dem [Media Query](/de/docs/Web/CSS/Guides/Media_queries/Using) hinzufügen. Wenn der Browser feststellt, dass er das Stylesheet nur in einem bestimmten Szenario anwenden muss, lädt er das Stylesheet trotzdem herunter, blockiert jedoch nicht das Rendern. Durch das Aufteilen des CSS in mehrere Dateien ist die Hauptdatei, die das Rendern blockiert, in diesem Fall `styles.css`, viel kleiner, was die Zeit verkürzt, in der das Rendering blockiert ist.

## Verbesserung der Schriftleistung

Dieser Abschnitt enthält einige nützliche Tipps zur Verbesserung der Leistung von Web-Fonts.

Allgemein gesagt, denken Sie sorgfältig über die Schriften nach, die Sie auf Ihrer Seite verwenden. Einige Schriftdateien können sehr groß sein (mehrere Megabyte). Während es verlockend sein kann, viele Schriftarten für visuelle Aufregung zu verwenden, kann dies das Laden der Seite erheblich verlangsamen und dazu führen, dass Ihre Seite wie ein Durcheinander aussieht. Sie benötigen wahrscheinlich nur etwa zwei oder drei Schriftarten, und Sie können mit weniger auskommen, wenn Sie sich entscheiden, [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) zu verwenden.

### Schriftarten laden

Beachten Sie, dass eine Schriftart nur geladen wird, wenn sie tatsächlich auf ein Element angewendet wird, indem die Eigenschaft {{cssxref("font-family")}} verwendet wird, und nicht, wenn sie zuerst mit dem {{cssxref("@font-face")}}-Regelsatz referenziert wird:

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

Es kann daher vorteilhaft sein, `rel="preload"` zu verwenden, um wichtige Schriftarten frühzeitig zu laden, damit sie schneller verfügbar sind, wenn sie tatsächlich benötigt werden:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Dies ist wahrscheinlicher von Vorteil, wenn Ihre `font-family`-Deklaration in einem großen externen Stylesheet versteckt ist und erst in einem späteren Teil des Parsing-Prozesses erreicht wird. Es ist jedoch ein Kompromiss, da Schriftdateien recht groß sind, und wenn Sie zu viele davon vorladen, könnten Sie andere Ressourcen verzögern.

Sie können auch erwägen:

- Die Verwendung von [`rel="preconnect"`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), um eine frühe Verbindung mit dem Schriftanbieter herzustellen. Siehe [Preconnect zu kritischen Drittanbieter-Ursprüngen](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins) für Details.
- Die Verwendung der [CSS-Font-Loading-API](/de/docs/Web/API/CSS_Font_Loading_API), um das Schriftartenladeverhalten über JavaScript anzupassen.

### Nur die benötigten Glyphen laden

Wenn Sie eine Schriftart für den Fließtext auswählen, ist es schwieriger, sich über die Glyphen sicher zu sein, die darin verwendet werden, vor allem wenn Sie es mit benutzergenerierten Inhalten und/oder Inhalten in mehreren Sprachen zu tun haben.

Wenn Sie jedoch wissen, dass Sie ein spezielles Set von Glyphen verwenden werden (beispielsweise nur Glyphen für Überschriften oder spezifiche Interpunktionszeichen), könnten Sie die Anzahl der Glyphen begrenzen, die der Browser herunterladen muss. Dies kann durch das Erstellen einer Schriftdatei geschehen, die nur das erforderliche Teilset enthält. Ein Verfahren, das als [Subsetting](https://fonts.google.com/knowledge/glossary/subsetting) bezeichnet wird. Der [`unicode-range`](/de/docs/Web/CSS/Reference/At-rules/@font-face/unicode-range) `@font-face`-Deskriptor kann dann verwendet werden, um festzulegen, wann Ihre Teilmenge-Schriftart verwendet wird. Wenn die Seite keine Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Festlegen des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor

Angewendet auf den `@font-face`-Regelsatz, definiert der [`font-display`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-display)-Deskriptor, wie Font-Dateien vom Browser geladen und angezeigt werden, sodass Text mit einer Ersatzschriftart angezeigt wird, während eine Schriftart geladen wird, oder wenn das Laden fehlschlägt. Dies verbessert die Leistung, indem der Text sichtbar gemacht wird, anstatt einen leeren Bildschirm anzuzeigen, wobei der Kompromiss ein aufflammender, unformatierter Text ist.

```css
@font-face {
  font-family: "someFont";
  src: url("/path/to/fonts/someFont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}
```

## Optimierung der Stilneuberechnung mit CSS-Containment

Durch die Verwendung der im [CSS-Containment](/de/docs/Web/CSS/Guides/Containment) Modul definierten Eigenschaften können Sie dem Browser anweisen, verschiedene Teile einer Seite zu isolieren und ihr Rendering unabhängig voneinander zu optimieren. Dies ermöglicht eine verbesserte Leistung bei der Darstellung einzelner Abschnitte. Beispielsweise können Sie dem Browser mitteilen, bestimmte Container nicht zu rendern, bis sie im Viewport sichtbar sind.

Die {{cssxref("contain")}}-Eigenschaft ermöglicht es einem Autor, genau festzulegen, welche [Containment-Typen](/de/docs/Web/CSS/Guides/Containment/Using) auf einzelne Container auf der Seite angewendet werden sollen. Dadurch kann der Browser Layout, Stil, Zeichnen, Größe oder jede Kombination davon für einen begrenzten Teil des DOM neu berechnen.

```css
article {
  contain: content;
}
```

Die {{cssxref("content-visibility")}}-Eigenschaft ist eine nützliche Abkürzung, die es Autoren ermöglicht, eine starke Set von Containments auf eine Reihe von Containern anzuwenden und anzugeben, dass der Browser diese Container nicht layouten und rendern soll, bis sie benötigt werden.

Eine zweite Eigenschaft, {{cssxref("contain-intrinsic-size")}}, ist ebenfalls verfügbar, wodurch Sie eine Platzhaltergröße für Container angeben können, während sie unter den Auswirkungen des Containments stehen. Dies bedeutet, dass die Container Platz einnehmen, selbst wenn ihre Inhalte noch nicht gerendert wurden, sodass das Containment seine Leistungszauber ausüben kann, ohne dass die Gefahr eines Scroll-Leistenverschiebung und Ruckeln besteht, wenn die Elemente gerendert werden und ins Sichtfeld kommen. Dies verbessert die Qualität der Benutzererfahrung, während der Inhalt geladen wird.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## Optimierung von `:has()`-Selektoren

Die {{cssxref(":has", ":has()")}}-Pseudoklasse ermöglicht leistungsstarke Auswahlmöglichkeiten, erfordert jedoch eine sorgfältige Verwendung, um Leistungsengpässe zu vermeiden. Detaillierte Anleitungen zum Schreiben effizienter `:has()`-Selektoren finden Sie in den [Leistungsüberlegungen in der `:has()`-Referenzdokumentation](/de/docs/Web/CSS/Reference/Selectors/:has#performance_considerations).

## Siehe auch

- [Leistung von CSS-Animationen](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [Best Practices für Schriften](https://web.dev/articles/font-best-practices) auf web.dev (2022)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) auf web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
