---
title: Grundlegende Text- und Schriftgestaltung
short-title: Grundlagen der Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Beherrschung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Hier werden wir alle grundlegenden Prinzipien der Text-/Schriftgestaltung im Detail durchgehen, einschließlich der Einstellung von Schriftgewicht, Schriftfamilie und Stil, Schriftkürzel, Textausrichtung und andere Effekte sowie Zeilen- und Buchstabenabstand.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Konzepte von Schriftfamilien, Schriftstapeln und web-sicheren Schriften.</li>
          <li>Einstellung von Schriftfarbe, Schriftgewicht, -größe und -stil.</li>
          <li>Einstellung von Textausrichtung, -umwandlung und -dekoration.</li>
          <li>Einstellung der Zeilenhöhe.</li>
          <li>Wissen, dass es mehrere andere Schrift- und Textgestaltungs-Eigenschaften gibt, und ermutigt werden, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was gehört zur Gestaltung von Text in CSS?

Text innerhalb eines Elements wird innerhalb des [Inhaltskastens](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements angeordnet. Er beginnt oben links im Inhaltsbereich (oder oben rechts, im Fall von RTL-Sprachinhalten) und fließt bis zum Ende der Zeile. Sobald das Ende erreicht ist, geht er zur nächsten Zeile herunter und fließt erneut bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in den Kasten eingefügt ist. Textinhalte verhalten sich effektiv wie eine Serie von Inline-Elementen, die auf angrenzenden Linien angeordnet sind und keine Zeilenumbrüche erzeugen, bis das Ende der Zeile erreicht ist, oder es sei denn, Sie zwingen manuell einen Zeilenumbruch mit dem {{htmlelement("br")}}-Element.

> [!NOTE]
> Wenn Ihnen der obige Absatz verwirrend erscheint, dann machen Sie sich nichts daraus — gehen Sie zurück und lesen Sie unseren [Box-Modell-Artikel](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) noch einmal durch, um die Theorie des Box-Modells aufzufrischen, bevor Sie weitermachen.

Die CSS-Eigenschaften, die zur Gestaltung von Text verwendet werden, fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes beeinflussen, z.B. welche Schrift angewendet wird, ihre Größe und ob sie fett, kursiv usw. ist.
- **Textlayout-Stile**: Eigenschaften, die den Abstand und andere Layoutmerkmale des Textes beeinflussen und eine Bearbeitung ermöglichen, z.B. der Abstand zwischen Zeilen und Buchstaben und wie der Text innerhalb des Inhaltskastens ausgerichtet wird.

> [!NOTE]
> Bedenken Sie, dass der Text in einem Element als eine einzige Entität beeinflusst wird. Sie können keine Unterabschnitte des Textes auswählen und stylen, es sei denn, Sie umschließen sie in ein geeignetes Element (wie {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden ein text-spezifisches Pseudoelement wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben eines Elements aus), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile eines Elements aus) oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den Text aus, der momentan vom Cursor markiert ist).

## Schriften

Lassen Sie uns gleich auf die Eigenschaften zur Gestaltung von Schriften eingehen. In diesem Beispiel werden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel anwenden:

```html live-sample___0unstyled live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

### Farbe

Die Eigenschaft {{cssxref("color")}} setzt die Farbe des Vordergrundinhalts der ausgewählten Elemente, die normalerweise der Text ist, aber auch ein paar andere Dinge umfassen kann, wie ein Unterstrich oder Überstrich, der auf Text mit der Eigenschaft {{cssxref("text-decoration")}} gesetzt wurde.

`color` kann jede [CSS-Farbenheitseinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
}
```

Dies lässt die Absätze rot werden, anstatt den standardmäßigen Schwarzton des Browsers beizubehalten, wie hier:

{{ EmbedLiveSample('1color', '100%', 230) }}

### Schriftfamilien

Um eine andere Schriftart für Ihren Text festzulegen, verwenden Sie die Eigenschaft {{cssxref("font-family")}} — diese ermöglicht es Ihnen, eine Schriftart (oder eine Liste von Schriftarten) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wird eine Schrift nur anwenden, wenn sie auf der Maschine verfügbar ist, auf der die Website aufgerufen wird; andernfalls verwendet er einfach eine [Standardschriftart](#standardschriften) des Browsers. Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: "Arial";
}
```

Dies würde alle Absätze auf einer Seite dazu bringen, die Schriftart Arial anzunehmen, die auf jedem Computer zu finden ist.

> [!NOTE]
> Scrimbas [Web-sichere Schriften](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet einen interaktiven Leitfaden dazu, warum Schriften wichtig sind, was web-sichere Schriften sind und wie man Schriften in CSS angibt — zusammen mit einer Herausforderung, um Ihr Wissen zu testen.

#### Web-sichere Schriften

Apropos Verfügbarkeit von Schriften: Es gibt nur eine bestimmte Anzahl von Schriften, die im Allgemeinen auf allen Systemen verfügbar sind und daher ohne größere Bedenken verwendet werden können. Diese werden als **web-sichere Schriften** bezeichnet.

Die meiste Zeit möchten wir Webentwickler genauere Kontrolle über die Schriften haben, die zur Anzeige unserer Textinhalte verwendet werden. Das Problem besteht darin, einen Weg zu finden, um zu wissen, welche Schrift auf dem Computer verfügbar ist, der verwendet wird, um unsere Webseiten zu sehen. Es gibt keine Möglichkeit, dies in jedem Fall zu wissen, aber die web-sicheren Schriften sind bekannt dafür, dass sie auf fast allen Instanzen der am häufigsten verwendeten Betriebssysteme (Windows, macOS, den gängigsten Linux-Distributionen, Android und iOS) verfügbar sind.

Die Liste der tatsächlichen web-sicheren Schriften wird sich ändern, wenn sich Betriebssysteme weiterentwickeln, aber es ist vernünftig, die folgenden Schriften zumindest im Moment als web-sicher zu betrachten (viele von ihnen wurden dank der Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90er und frühen 2000er Jahren populär gemacht):

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Allgemeiner Typ</th>
      <th scope="col">Anmerkungen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arial</td>
      <td>sans-serif</td>
      <td>
        Es wird oft als beste Praxis angesehen, auch <em>Helvetica</em> als bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da, obwohl die Schriftbilder fast identisch sind, <em>Helvetica</em> als formschöner gilt, auch wenn <em>Arial</em> breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>Monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der Schriftart <em>Courier New</em>, die <em>Courier</em> genannt wird. Es ist eine bewährte Praxis, beide zu verwenden, wobei <em>Courier New</em> als bevorzugte Alternative verwendet wird.
      </td>
    </tr>
    <tr>
      <td>Georgia</td>
      <td>Serif</td>
      <td></td>
    </tr>
    <tr>
      <td>Times New Roman</td>
      <td>Serif</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der Schriftart <em>Times New Roman</em>, die <em>Times</em> genannt wird. Es ist eine bewährte Praxis, beide zu verwenden, wobei <em>Times New Roman</em> als bevorzugte Alternative verwendet wird.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig mit der Verwendung dieser Schriftart sein — sie ist auf mobilen Betriebssystemen nicht weit verbreitet.
      </td>
    </tr>
    <tr>
      <td>Verdana</td>
      <td>sans-serif</td>
      <td></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Unter verschiedenen Ressourcen führt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste von web-sicheren Schriften auf, die auf Windows- und macOS-Betriebssystemen verfügbar sind, was Ihnen bei der Entscheidung helfen kann, was Sie als sicher für Ihre Nutzung betrachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, um Ihnen zu ermöglichen, Ihre Schriftverwendung in jeder gewünschten Weise anzupassen: **Webfonts**. Dies ist ein wenig komplexer und wir werden es in einem [gesonderten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später im Modul besprechen.

#### Standardschriften

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch und die exakte Schriftart, die von diesen generischen Namen verwendet wird, kann zwischen den einzelnen Browsern und Betriebssystemen, auf denen sie angezeigt werden, variieren. Sie stellt ein _schlimmstes Szenario_ dar, bei dem der Browser sein Bestes tun wird, um eine passende Schrift bereitzustellen. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Vernünftiges bieten. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar und wir empfehlen, sie sehr vorsichtig zu verwenden und während der Nutzung Tests durchzuführen.

Die fünf Namen sind wie folgt definiert:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Begriff</th>
      <th scope="col">Definition</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>serif</code></td>
      <td>
        Schriftarten, die Serifen haben (die Verzierungen und anderen kleinen Details, die Sie an den Enden der Striche in einigen Schriftarten sehen).
      </td>
      <td id="serif-example">
        <pre class="brush: html hidden">Mein großer roter Elefant</pre>
        <pre class="brush: css hidden">
body {
  font-family: serif;
}</pre
        >
        {{EmbedLiveSample("serif-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>sans-serif</code></td>
      <td>Schriftarten, die keine Serifen haben.</td>
      <td id="sans-serif-example">
        <pre class="brush: html hidden">Mein großer roter Elefant</pre>
        <pre class="brush: css hidden">
body {
  font-family: sans-serif;
}</pre
        >
        {{EmbedLiveSample("sans-serif-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>monospace</code></td>
      <td>
        Schriftarten, bei denen jedes Zeichen die gleiche Breite hat, normalerweise in Code-Listings verwendet.
      </td>
      <td id="monospace-example">
        <pre class="brush: html hidden">Mein großer roter Elefant</pre>
        <pre class="brush: css hidden">
body {
  font-family: monospace;
}</pre
        >
        {{EmbedLiveSample("monospace-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>cursive</code></td>
      <td>
        Schriftarten, die dazu gedacht sind, Handschrift nachzuahmen, mit fließenden, verbundenen Strichen.
      </td>
      <td id="cursive-example">
        <pre class="brush: html hidden">Mein großer roter Elefant</pre>
        <pre class="brush: css hidden">
body {
  font-family: cursive;
}</pre
        >
        {{EmbedLiveSample("cursive-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>fantasy</code></td>
      <td>Dekorative Schriftarten.</td>
      <td id="fantasy-example">
        <pre class="brush: html hidden">Mein großer roter Elefant</pre>
        <pre class="brush: css hidden">
body {
  font-family: fantasy;
}</pre
        >
        {{EmbedLiveSample("fantasy-example", 100, 60)}}
      </td>
    </tr>
  </tbody>
</table>

#### Schriftstapel

Da Sie die Verfügbarkeit der Schriftarten, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (selbst ein Webfont _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** angeben, damit der Browser mehrere Schriften zur Auswahl hat. Dies beinhaltet ein `font-family`-Wert, der aus mehreren Schriftartennamen besteht, die durch Kommas getrennt sind, z.B.

```css
p {
  font-family: "Trebuchet MS", "Verdana", sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob diese Schriftart auf dem Rechner verfügbar ist. Ist dies der Fall, wendet er diese Schriftart auf die ausgewählten Elemente an. Wenn nicht, geht der Browser zur nächsten Schriftart weiter und so weiter.

Es ist eine gute Idee, am Ende des Stapels einen geeignet generischen Schriftartennamen anzugeben, damit der Browser zumindest etwas ungefähr Passendes bereitstellen kann, falls keine der aufgeführten Schriftarten verfügbar ist. Um diesen Punkt zu betonen, erhalten Absätze die serifen Schriftart des Browsers als Standard, wenn keine andere Option verfügbar ist — normalerweise Times New Roman — was für eine serifenlose Schrift keine gute Wahl ist!

> [!NOTE]
> Während Sie Schriftartennamen verwenden können, die ein Leerzeichen enthalten, wie `Trebuchet MS`, ohne den Namen zu zitieren, wird empfohlen, Schriftartennamen zu zitieren, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten, um Fehler beim Escapen zu vermeiden.

> [!WARNUNG]
> Jeder Schriftartname, der als generischer Familienname oder CSS-weites Schlüsselwort fehldeutet werden könnte, muss zitiert werden. Während die Schriftartnamen als {{cssxref("custom-ident")}} oder {{cssxref("string")}} angegeben werden können, müssen Schriftartennamen, die zufällig mit einem CSS-weiten Eigenschaftswert übereinstimmen, wie `initial` oder `inherit`, oder CSS, die denselben Namen wie einer der generischen Schriftfamiliennamen haben, wie `sans-serif` oder `fantasy`, als zitierter String enthalten sein. Andernfalls wird der Schriftartname als das entsprechende CSS-Schlüsselwort oder der generische Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftfamiliennamen — `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT zitiert werden, da Strings nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für font-family

Lassen Sie uns unser vorheriges Beispiel erweitern, indem wir den Absätzen eine serifenlose Schriftart zuweisen:

```css live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample('2fonts', '100%', 220) }}

### Schriftgröße

In unserem vorherigen Modul über [CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben wir die Länge und Maßeinheiten untersucht. Die Schriftgröße (eingestellt mit der Eigenschaft {{cssxref("font-size")}}) kann Werte annehmen, die in den meisten dieser Einheiten (und anderen, wie [Prozentsätze](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) gemessen werden; die gebräuchlichsten Einheiten zur Größenbestimmung von Text sind jedoch:

- `px` (Pixel): Die Anzahl der Pixel, die der Text hoch sein soll. Dies ist eine absolute Einheit — sie führt zu demselben endgültigen berechneten Wert für die Schrift auf der Seite in so gut wie jeder Situation.
- `em`s: 1 `em` entspricht der Schriftgröße, die auf das übergeordnete Element von dem aktuell gestylten Element angewendet wird (genauer gesagt, die Breite eines Großbuchstabens M, das im übergeordneten Element enthalten ist). Dies kann schwer zu ermitteln sein, wenn Sie viele verschachtelte Elemente mit verschiedenen Schriftgrößen haben, die eingestellt sind, aber es ist machbar, wie Sie unten sehen werden. Warum sich die Mühe machen? Es ist recht natürlich, wenn Sie sich daran gewöhnt haben, und Sie können `em` verwenden, um alles zu skalieren, nicht nur Text. Sie können eine gesamte Website mit `em` skalieren, was die Wartung erleichtert.
- `rem`s: Diese funktionieren genau wie `em`, außer dass 1 `rem` der auf das Wurzelelement des Dokuments eingestellten Schriftgröße entspricht (d.h. {{htmlelement("html")}}), nicht dem übergeordneten Element. Dies macht das Berechnen der Schriftgrößen viel einfacher.

Die `font-size` eines Elements wird vom übergeordneten Element dieses Elements übernommen. Dies beginnt alles mit dem Wurzelelement des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard `font-size` in den Browsern auf `16px` eingestellt ist. Jeder Abschnitt (oder ein anderes Element, dem die Browser keine andere Größe zuweisen) im Root-Element hat eine endgültige Größe von `16px`. Andere Elemente können unterschiedliche Standardgrößen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}}-Element standardmäßig eine Größe von `2em`, also wird es letztendlich eine Größe von `32px` haben.

Die Dinge werden komplizierter, wenn Sie beginnen, die Schriftgröße verschachtelter Elemente zu ändern. Wenn Sie beispielsweise ein {{htmlelement("article")}}-Element auf Ihrer Seite hatten und seine `font-size` auf 1.5 `em` (was in einer endgültigen Größe von 24 `px` resultieren würde) und dann wollten, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten seinen `em`-Wert auf 20/24 oder 0.83333333 `em` setzen. Die Berechnungen können kompliziert sein, daher müssen Sie sorgfältig darüber nachdenken, wie Sie Dinge gestalten. Es ist am besten, `rem` zu verwenden, wo immer es möglich ist, um die Dinge einfach zu halten, und die `font-size` von Container-Elementen nach Möglichkeit nicht zu ändern.

### Schriftstil, Schriftgewicht, Texttransformierung und Textdekoration

CSS bietet vier gebräuchliche Eigenschaften zur Veränderung der visuellen Gewichtung/Betonung von Text:

- {{cssxref("font-style")}}: Wird verwendet, um kursiven Text ein- oder auszuschalten. Mögliche Werte sind wie folgt (Sie werden dies selten verwenden, es sei denn, Sie möchten aus irgendeinem Grund eine kursive Formatierung deaktivieren):
  - `normal`: Setzt den Text auf die normale Schrift (deaktiviert bestehende Kursivschrift).
  - `italic`: Setzt den Text auf die Nutzung der Kursiv-Version der Schriftart, wenn verfügbar; andernfalls simuliert es Kursivschrift mit Oblique.
  - `oblique`: Setzt den Text auf eine simulierte Version einer kursiven Schriftart, erstellt durch Schrägstellung der normalen Version.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Diese Funktion bietet viele verfügbare Werte, falls Sie viele Schriftvarianten haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ usw.), aber realistischerweise werden Sie selten etwas anderes als `normal` und `bold` verwenden:
  - `normal`, `bold`: Normales und fettes Schriftgewicht.
  - `lighter`, `bolder`: Setzt die Fettheit des aktuellen Elements auf eine Stufe leichter oder schwerer als die Fettheit des übergeordneten Elements.
  - `100` – `900`: Numerische Fettigkeitswerte, die eine feiner abgestufte Kontrolle bieten als die obigen Schlüsselwörter, falls erforderlich.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihre Schrift zu transformieren. Werte umfassen:
  - `none`: Verhindert jede Transformation.
  - `uppercase`: Transformiert allen Text in Großbuchstaben.
  - `lowercase`: Transformiert allen Text in Kleinbuchstaben.
  - `capitalize`: Transformiert alle Wörter so, dass der erste Buchstabe groß geschrieben wird.
  - `full-width`: Transformiert alle Glyphen so, dass sie in einem festgelegten Quadrat, ähnlich wie bei einer Monospace-Schrift, geschrieben werden, was das Ausrichten von zum Beispiel lateinischen Zeichen zusammen mit asiatischen Sprachglyphen (wie Chinesisch, Japanisch, Koreanisch) ermöglicht.

- {{cssxref("text-decoration")}}: Setzt/entfernt Textdekorationen auf Schriften (Sie werden dies hauptsächlich verwenden, um den Standard-Unterstrich auf Links beim Stilzusetzen zu entfernen). Verfügbare Werte sind:
  - `none`: Hebt vorhandene Textdekorationen auf.
  - `underline`: Unterstreicht den Text.
  - `overline`: Verleiht dem Text eine Überstrich-Dekoration.
  - `line-through`: Setzt einen Durchstrich über den Text.

  Beachten Sie, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, zum Beispiel `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzeigenschaft für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu kreieren, zum Beispiel: `text-decoration: line-through red wavy`.

Lassen Sie uns einige dieser Eigenschaften zu unserem Beispiel hinzufügen:

```css live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Unser neues Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample('3font-style', '100%', 260) }}

### Textschlagschatten

Sie können Schlagschatten auf Ihren Text anwenden, indem Sie die Eigenschaft {{cssxref("text-shadow")}} verwenden. Diese nimmt bis zu vier Werte an, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom Originaltext — dies kann die meisten verfügbaren CSS-[Längen- und Größen-Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, aber Sie werden am häufigsten `px` verwenden; positive Werte verschieben den Schatten nach rechts, negative Werte nach links. Dieser Wert muss eingeschlossen werden.
2. Der vertikale Versatz des Schattens vom Originaltext. Dies verhält sich ähnlich wie der horizontale Versatz, außer dass es den Schatten nach oben/unten statt links/rechts verschiebt. Dieser Wert muss eingeschlossen werden.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter gestreut wird. Wenn dieser Wert nicht enthalten ist, wird er standardmäßig auf 0 gesetzt, was bedeutet keine Unschärfe. Dies kann die meisten verfügbaren CSS-[Längen- und Größen-Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbheitseinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn nicht enthalten, wird sie standardmäßig auf [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) gesetzt, d.h. die Farbe des Schattens wird von der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrere Schatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere Schattenwerte, getrennt durch Kommas, angeben, zum Beispiel:

```css live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element in unserem Tommy-The-Cat-Beispiel anwenden würden, hätten wir am Ende Folgendes:

{{ EmbedLiveSample('4shadows', '100%', 260) }}

> [!NOTE]
> Weitere interessante Beispiele zur Verwendung von `text-shadow` finden Sie im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/).

## Textlayout

Nachdem wir die grundlegenden Schriftarten-Eigenschaften behandelt haben, werfen wir einen Blick auf einige Eigenschaften, mit denen wir das Textlayout beeinflussen können.

### Textausrichtung

Die Eigenschaft {{cssxref("text-align")}} wird verwendet, um zu steuern, wie der Text innerhalb seines enthaltenden Inhaltskastens ausgerichtet wird. Die verfügbaren Werte sind unten aufgelistet. Sie funktionieren im Wesentlichen genauso wie in einer regulären Textverarbeitungsanwendung:

- `left`: Linksbündig ausrichten.
- `right`: Rechtsbündig ausrichten.
- `center`: Zentrieren des Textes.
- `justify`: Der Text wird verbreitert, indem die Abstände zwischen den Wörtern variieren, sodass alle Textzeilen die gleiche Breite haben. Sie müssen dies vorsichtig nutzen — es kann schrecklich aussehen, besonders wenn es auf einen Absatz angewendet wird, der viele lange Wörter enthält. Wenn Sie dies verwenden möchten, sollten Sie auch an etwas anderes denken, das Sie damit verbinden können, wie {{cssxref("hyphens")}}, um einige der längeren Wörter über die Zeilen zu trennen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "&lt;h1>")}} in unserem Beispiel anwenden würden, hätten wir am Ende Folgendes:

```css hidden live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-align: center;
}
```

{{ EmbedLiveSample('5text-align', '100%', 260) }}

### Zeilenhöhe

Die Eigenschaft {{cssxref("line-height")}} legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größen-Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern auch einen einheitenlosen Wert, was als Multiplikator wirkt und im Allgemeinen als beste Option gilt. Mit einem einheitenlosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtext sieht im Allgemeinen schöner aus und ist leichter zu lesen, wenn die Zeilen auseinander liegen. Die empfohlene Zeilenhöhe liegt bei etwa 1.5 – 2 (doppelter Zeilenabstand). Um unsere Textzeilen auf 1.6-mal die Höhe der Schrift zu setzen, würden wir folgendes verwenden:

```css live-sample___6line-height live-sample___7letter-word-spacing
p {
  line-height: 1.6;
}
```

Wenn wir dies auf die {{htmlelement("p")}}-Elemente in unserem Beispiel anwenden würden, hätten wir am Ende Folgendes:

{{ EmbedLiveSample('6line-height', '100%', 300) }}

### Buchstaben- und Wortabstand

Die Eigenschaften {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}} erlauben es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text einzustellen. Sie werden diese nicht oft verwenden, könnten aber einen Nutzen darin sehen, um ein bestimmtes Aussehen zu erzielen oder um die Lesbarkeit einer besonders dichten Schriftart zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir einen Wort- und Buchstabenabstand auf die erste Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel anwenden mit:

```css live-sample___7letter-word-spacing
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Dies würde unser HTML folgendermaßen darstellen:

{{ EmbedLiveSample('7letter-word-spacing', '100%', 330) }}

### Weitere Eigenschaften, die es zu betrachten lohnt

Die obigen Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie mit der Gestaltung von Text auf einer Webseite beginnen können, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Verwendung der oben genannten Eigenschaften gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Wechsel zwischen normalen und kleinen Großbuchstaben-Alternativen.
- {{cssxref("font-kerning")}}: Schriftkerning-Optionen ein- oder ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftmerkmale ein- oder ausschalten.
- {{cssxref("font-variant-alternates")}}: Verwendung alternativer Glyphen für einen bestimmten font-face steuern.
- {{cssxref("font-variant-caps")}}: Verwendung alternativer Großbuchstaben steuern.
- {{cssxref("font-variant-east-asian")}}: Verwendung von alternativen Glyphen für ostasiatische Schriften wie Japanisch und Chinesisch steuern.
- {{cssxref("font-variant-ligatures")}}: Kontrolle, welche Ligaturen und kontextuellen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Verwendung alternativer Glyphen für Zahlen, Brüche und Ordinalmarkierungen steuern.
- {{cssxref("font-variant-position")}}: Verwendung alternativer kleinerer Glyphen, die als hoch- oder tiefgestellt positioniert sind, steuern.
- {{cssxref("font-size-adjust")}}: Die visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße anpassen.
- {{cssxref("font-stretch")}}: Wechsel zwischen möglichen alternativen gestreckten Versionen einer gegebenen Schrift.
- {{cssxref("text-underline-position")}}: Position von Unterstrichen festlegen, die mithilfe der `text-decoration-line`-Eigenschaft `underline`-Wert gesetzt werden.
- {{cssxref("text-rendering")}}: Versuche, einige Text-Rendering-Optimierungen durchzuführen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Festlegen, wie viel horizontaler Platz vor dem Beginn der ersten Textzeile gelassen werden soll.
- {{cssxref("text-overflow")}}: Festlegen, wie überlaufener Inhalt, der nicht angezeigt wird, den Benutzern signalisiert wird.
- {{cssxref("white-space")}}: Festlegen, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Festlegen, ob Zeilen innerhalb von Wörtern gebrochen werden sollen.
- {{cssxref("direction")}}: Die Textrichtung definieren. (Dies hängt von der Sprache ab und normalerweise ist es besser, HTML damit umgehen zu lassen, da es mit dem Textinhalt verbunden ist.)
- {{cssxref("hyphens")}}: Silbentrennung für unterstützte Sprachen ein- und ausschalten.
- {{cssxref("line-break")}}: Zum Entspannen oder Verstärken von Zeilenumbrüchen bei asiatischen Sprachen verwenden.
- {{cssxref("text-align-last")}}: Definieren, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.
- {{cssxref("text-orientation")}}: Die Ausrichtung des Textes in einer Zeile definieren.
- {{cssxref("overflow-wrap")}}: Festlegen, ob der Browser Zeilen innerhalb von Wörtern brechen darf, um Überläufe zu verhindern.
- {{cssxref("writing-mode")}}: Festlegen, ob Textzeilen horizontal oder vertikal angeordnet und in welcher Richtung nachfolgende Zeilen fließen.

## Schrift-Kurznotation

Viele Schrifteigenschaften können auch über die Kurznotation {{cssxref("font")}} festgelegt werden. Diese werden in der folgenden Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind bei Verwendung der `font`-Kurznotation nur `font-size` und `font-family` erforderlich.

Ein Schrägstrich muss zwischen die Eigenschaften {{cssxref("font-size")}} und {{cssxref("line-height")}} gesetzt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 "Helvetica",
  "Arial",
  sans-serif;
```

## Spielen mit Textgestaltung

Nun sind Sie dran. Für diese Aufgabe haben wir keine spezifischen Übungen für Sie vorbereitet. Wir möchten, dass Sie einfach mit einigen Schrift-/Textlayout-Eigenschaften experimentieren. Sehen Sie selbst, was Sie sich einfallen lassen können!

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie einige Deklarationen zur bereitgestellten leeren `p { }`-Regel hinzu, um das Styling des bereitgestellten Textes zu ändern. Seien Sie so kreativ, wie Sie möchten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_-Button im MDN Playground löschen. Beziehen Sie sich auf die vorherigen Abschnitte im Artikel, um weitere Informationen über die Schrift- und Textstile zu finden, die Sie festlegen können.

```html live-sample___fonts_text
<p>Some sample text for your delight</p>
```

```css-nolint live-sample___fonts_text
p {

}
```

{{ EmbedLiveSample('fonts_text', "100%", 60) }}

## Zusammenfassung

Wir hoffen, Sie hatten Spaß beim Spielen mit Text in diesem Artikel! Der nächste Artikel wird Ihnen alles liefern, was Sie wissen müssen, um HTML-Listen zu gestalten.

## Siehe auch

- [Alles über die CSS-Schriftartenfamilie-Eigenschaft](https://explainers.dev/font-family/), explainers.dev
- [Web-sichere Schriften](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
