---
title: Grundlegende Text- und Schriftgestaltung
short-title: Grundlagen von Text und Schrift
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Beherrschung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Hier behandeln wir alle grundlegenden Grundlagen der Text-/Schriftgestaltung im Detail, einschließlich der Einstellung der Schriftstärke, -familie und -stil, der Schrift-Abkürzung, der Textausrichtung und anderer Effekte sowie des Zeilen- und Buchstabenzwischenraums.

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
          <li>Verständnis der Konzepte von Schriftfamilien, Schriftstapeln und webbasierten sicheren Schriften.</li>
          <li>Einstellung von Schriftfarbe, Gewicht, Größe und Stil.</li>
          <li>Einstellung der Textausrichtung, Transformation und Dekoration.</li>
          <li>Einstellung der Zeilenhöhe.</li>
          <li>Wissen, dass es mehrere andere Eigenschaften zur Schrift- und Textgestaltung gibt, und Ermutigung, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist bei der Textgestaltung in CSS beteiligt?

Text innerhalb eines Elements wird innerhalb des [Inhaltsfelds](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements dargestellt. Er beginnt oben links im Inhaltsbereich (oder oben rechts bei RTL-Spracheninhalten) und fließt bis zum Ende der Zeile. Sobald das Ende erreicht ist, springt er zur nächsten Zeile und fließt erneut bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in das Feld eingefügt wurde. Textinhalt verhält sich effektiv wie eine Reihe von Inline-Elementen, die auf Linien nebeneinander angeordnet sind und keine Zeilenumbrüche erzeugen, bis das Zeilenende erreicht ist oder Sie einen Zeilenumbruch manuell mit dem {{htmlelement("br")}}-Element erzwingen.

> [!NOTE]
> Wenn Ihnen der obige Absatz verwirrend erscheint, ist das nicht schlimm — gehen Sie zurück und lesen Sie unseren Artikel über das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) erneut, um Ihre Kenntnisse über das Boxmodell aufzufrischen, bevor Sie weitermachen.

Die CSS-Eigenschaften zur Gestaltung von Text fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten werden:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes betreffen, z.B. welche Schrift angewendet wird, ihre Größe und ob sie fett, kursiv usw. ist.
- **Textlayoutstile**: Eigenschaften, die die Abstände und anderen Layoutmerkmale des Textes betreffen, z.B. die Abstände zwischen Zeilen und Buchstaben sowie die Ausrichtung des Textes im Inhaltsfeld.

> [!NOTE]
> Denken Sie daran, dass der Text in einem Element als eine einzige Einheit beeinflusst wird. Sie können keine Textabschnitte auswählen und gestalten, es sei denn, Sie umschließen sie in einem geeigneten Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder Sie verwenden ein textspezifisches Pseudoelement wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements aus), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements aus), oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den Text aus, der derzeit vom Cursor hervorgehoben wird).

## Schriften

Lassen Sie uns direkt zu den Eigenschaften für die Schriftgestaltung übergehen. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel an:

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

Die {{cssxref("color")}}-Eigenschaft legt die Farbe des Vordergrundinhalts der ausgewählten Elemente fest, was normalerweise der Text ist, aber auch andere Dinge umfassen kann, wie ein Unterstrich oder Überstrich auf Text, der mit der {{cssxref("text-decoration")}}-Eigenschaft platziert wird.

`color` kann jede [CSS-Farbenheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
}
```

Dadurch werden die Absätze rot statt des standardmäßigen Schwarzes, wie man es im Browser voreingestellt sieht:

{{ EmbedLiveSample('1color', '100%', 230) }}

### Schriftfamilien

Um eine andere Schrift für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — diese ermöglicht es Ihnen, eine Schriftart (oder eine Liste von Schriften) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wird nur eine Schriftart anwenden, wenn sie auf dem Computer, auf dem die Website aufgerufen wird, verfügbar ist; falls nicht, wird er einfach eine Browser-[Standardschrift](#standardschriften) verwenden. Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dadurch würden alle Absätze auf einer Seite die Schriftart Arial annehmen, die auf jedem Computer zu finden ist.

> [!NOTE]
> Das Scrimba-Skript [Web-sichere Schriften](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) <sup>[_MDN-Bildungspartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Anleitung dazu, warum Schriften wichtig sind, web-sichere Schriften und wie man Schriften in CSS spezifiziert — zusammen mit einer Herausforderung, Ihr Wissen zu testen.

#### Web-sichere Schriften

Was die Verfügbarkeit von Schriften betrifft, gibt es nur eine begrenzte Anzahl von Schriften, die im Allgemeinen auf allen Systemen verfügbar sind und daher ohne große Bedenken verwendet werden können. Dies sind die sogenannten **web-sicheren Schriften**.

Die Liste der tatsächlich web-sicheren Schriften wird sich ändern, wenn sich Betriebssysteme entwickeln, aber es ist vernünftig, die folgenden Schriften als derzeit sicher zu betrachten (viele von ihnen wurden durch die Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90er Jahren und frühen 2000er Jahren populär gemacht):

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Allgemeiner Typ</th>
      <th scope="col">Hinweise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arial</td>
      <td>sans-serif</td>
      <td>
        Es wird oft als Beste Praxis angesehen, auch <em>Helvetica</em> als bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da ihre Schriftbilder fast identisch sind, <em>Helvetica</em> jedoch als schöner gilt, auch wenn <em>Arial</em> breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der <em>Courier New</em>-Schriftart, die <em>Courier</em> genannt wird. Es wird als Beste Praxis angesehen, beide zu verwenden, wobei <em>Courier New</em> als bevorzugte Alternative gilt.
      </td>
    </tr>
    <tr>
      <td>Georgia</td>
      <td>serif</td>
      <td></td>
    </tr>
    <tr>
      <td>Times New Roman</td>
      <td>serif</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der <em>Times New Roman</em>-Schriftart, die <em>Times</em> genannt wird. Es wird als Beste Praxis angesehen, beide zu verwenden, wobei <em>Times New Roman</em> als bevorzugte Alternative gilt.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Diese Schriftart sollte mit Vorsicht verwendet werden, da sie auf mobilen Betriebssystemen nicht weit verbreitet ist.
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
> Unter den verschiedenen Ressourcen führt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste von web-sicheren Schriften, die auf Windows- und macOS-Betriebssystemen verfügbar sind, was Ihnen bei der Entscheidung helfen kann, was Sie für Ihre Nutzung als sicher betrachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, um Ihnen eine beliebige Anpassung Ihrer Schriftverwendung zu ermöglichen: **Webschriften**. Dies ist etwas komplexer, und wir werden es in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später in diesem Modul besprechen.

#### Standardschriften

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch und das genaue Schriftbild, das durch diese generischen Namen verwendet wird, kann zwischen jedem Browser und jedem Betriebssystem, auf dem sie angezeigt werden, variieren. Es stellt ein _worst case scenario_ dar, bei dem der Browser sein Bestes tut, um eine Schrift bereitzustellen, die angemessen aussieht. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Vernünftiges liefern. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar, und wir empfehlen, sie sehr sorgfältig zu verwenden und währenddessen zu testen.

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
        Schriften, die Serifen haben (die Feinheiten und anderen kleinen Details, die Sie an den Enden der Strichzüge in einigen Schriften sehen).
      </td>
      <td id="serif-example">
        <pre class="brush: html hidden">My big red elephant</pre>
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
      <td>Schriften, die keine Serifen haben.</td>
      <td id="sans-serif-example">
        <pre class="brush: html hidden">My big red elephant</pre>
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
        Schriften, bei denen jedes Zeichen die gleiche Breite hat, typischerweise in Codeauflistungen verwendet.
      </td>
      <td id="monospace-example">
        <pre class="brush: html hidden">My big red elephant</pre>
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
        Schriften, die als Handschrift emuliert werden sollen, mit fließenden, verbundenen Strichen.
      </td>
      <td id="cursive-example">
        <pre class="brush: html hidden">My big red elephant</pre>
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
      <td>Schriften, die dekorativ sein sollen.</td>
      <td id="fantasy-example">
        <pre class="brush: html hidden">My big red elephant</pre>
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

Da Sie die Verfügbarkeit der Schriften, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (selbst eine Webschrift _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** anbieten, damit der Browser mehrere Schriften zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert, der aus mehreren durch Kommas getrennten Schriftnamen besteht, z.B.,

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob diese Schrift auf dem Computer verfügbar ist. Wenn dies der Fall ist, wendet er diese Schrift auf die ausgewählten Elemente an. Wenn nicht, geht er zur nächsten Schrift weiter und so weiter.

Es ist eine gute Idee, am Ende des Stapels eine geeignete generische Schriftart anzugeben, damit der Browser zumindest etwas passend Ähnliches bereitstellen kann, wenn keine der aufgeführten Schriften verfügbar ist. Um diesen Punkt zu betonen, erhalten Absätze die Standardschrift des Browsers - was normalerweise Times New Roman ist - wenn keine andere Option verfügbar ist, was für eine sans-serif Schrift nicht geeignet ist!

> [!NOTE]
> Obwohl Sie Schriftfamiliennamen wie `Trebuchet MS`, die Leerzeichen enthalten, ohne Anführungszeichen verwenden können, wird empfohlen, Schriftfamiliennamen, die Leerzeichen, Ziffern oder andere Satzzeichen als Bindestriche enthalten, aus Gründen der Vermeidung von Entwurfsfehlern zu zitieren.

> [!WARNING]
> Jeder Schriftfamilienname, der möglicherweise als generischer Familienname oder als CSS-weites Schlüsselwort missverstanden werden könnte, muss zitiert werden. Während die Schriftfamiliennamen als {{cssxref("custom-ident")}} oder als {{cssxref("string")}} eingeschlossen werden können, müssen die Schriftfamiliennamen, die zufällig mit einem globalen CSS-weiten Eigenschaftswert wie `initial` oder `inherit` oder CSS identisch sind, oder die denselben Namen wie die generischen Schriftfamilien haben, wie `sans-serif` oder `fantasy`, als zitierte Zeichenkette eingeschlossen werden. Andernfalls wird der Schriftfamilienname als gleichwertiges CSS-Schlüsselwort oder generischer Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftfamiliennamen — `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT zitiert werden, da Zeichenketten nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für die Schriftfamilie

Lassen Sie uns unser vorheriges Beispiel erweitern und den Absätzen eine sans-serif Schrift geben:

```css live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample('2fonts', '100%', 220) }}

### Schriftgröße

In unserem vorherigen Modulartikel [CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben wir Längen- und Größeneinheiten durchgesehen. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten (und anderen, wie [Prozentangaben](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) gemessen werden; jedoch sind die häufigsten Einheiten, die Sie zum Größen der Schriftarten verwenden werden:

- `px` (Pixel): Die Höhe, die Sie für den Text in Pixeln festlegen möchten. Dies ist eine absolute Einheit — sie führt in fast jeder Situation zu demselben endgültigen berechneten Wert auf der Seite.
- `em`s: 1 `em` entspricht der Schriftgröße, die auf das übergeordnete Element des aktuellen Elements, das wir gestalten, eingestellt ist (genauer gesagt, der Breite eines großen Buchstabens M, der im übergeordneten Element enthalten ist). Dies kann kompliziert werden, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen festgelegt haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich die Mühe machen? Es ist ganz natürlich, sobald man sich daran gewöhnt hat, und Sie können `em` verwenden, um alles zu dimensionieren, nicht nur Text. Sie können eine gesamte Website mit `em` dimensionieren, was die Wartung erleichtert.
- `rem`s: Diese funktionieren genau wie `em`, außer dass 1 `rem` der auf das Wurzelelement des Dokuments eingestellten Schriftgröße entspricht (d.h. {{htmlelement("html")}}), nicht dem übergeordneten Element. Das macht die Mathematik zur Berechnung Ihrer Schriftgrößen viel einfacher.

Die `font-size` eines Elements wird von dem übergeordneten Element dieses Elements vererbt. Das Ganze beginnt mit dem Wurzelelement des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard `font-size` auf 16 `px` in den Browsern festgelegt ist. Jeder Absatz (oder ein anderes Element, für das keine andere Größe vom Browser festgelegt ist) innerhalb des Wurzelelements hat eine endgültige Größe von 16 `px`. Andere Elemente können unterschiedliche Standardgrößen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}}-Element standardmäßig eine Größe von 2 `em`, also hat es eine endgültige Größe von 32 `px`.

Die Dinge werden komplizierter, wenn Sie beginnen, die Schriftgröße von verschachtelten Elementen zu ändern. Zum Beispiel, wenn Sie ein {{htmlelement("article")}}-Element auf Ihrer Seite haben und seine `font-size` auf 1,5 `em` festlegen (was auf eine Endgröße von 24 `px` berechnet wird), und dann möchten, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten seinen `em`-Wert auf 20/24 oder 0.83333333 `em` setzen. Die Mathematik kann kompliziert sein, also müssen Sie darauf achten, wie Sie die Dinge gestalten. Es ist am besten, wo möglich `rem` zu verwenden, um die Dinge einfach zu halten, und vermeiden Sie es, die `font-size` von Behälterelementen so weit wie möglich festzulegen.

### Schriftstil, Schriftgewicht, Textumwandlung und Textdekoration

CSS bietet vier gängige Eigenschaften, um das visuelle Gewicht/die Betonung von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um kursiven Text ein- oder auszuschalten. Mögliche Werte sind wie folgt (dies werden Sie selten verwenden, es sei denn, Sie möchten aus irgendeinem Grund einige kursive Stile ausschalten):

  - `normal`: Setzt den Text auf die normale Schrift (macht vorhandene Kursivschreibweise aus).
  - `italic`: Setzt den Text auf die kursivierte Version der Schrift, falls verfügbar; andernfalls simuliert es die Kursivschrift mit oblique.
  - `oblique`: Setzt den Text auf eine simulierte Version einer kursive Schrift, die erstellt wird, indem die normale Version geneigt wird.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Dies hat viele verfügbare Werte, falls Sie viele Schriftvariationen verfügbar haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ usw.), aber realistischerweise werden Sie nicht viele davon verwenden, außer `normal` und `bold`:

  - `normal`, `bold`: Normales und fettes Schriftgewicht.
  - `lighter`, `bolder`: Setzt das aktuelle Element auf eine Stufe leichter oder schwerer als das Schriftgewicht des übergeordneten Elements.
  - `100` – `900`: Numerische Schriftstärkenwerte, die eine feinere Kontrolle als die oben genannten Schlüsselwörter bieten, falls erforderlich.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihre Schrift transformiert darzustellen. Werte umfassen:

  - `none`: Verhindert jegliche Transformation.
  - `uppercase`: Transformiert den gesamten Text zu Großbuchstaben.
  - `lowercase`: Transformiert den gesamten Text zu Kleinbuchstaben.
  - `capitalize`: Transformiert alle Wörter, damit der erste Buchstabe großgeschrieben wird.
  - `full-width`: Transformiert alle Zeichen, um innerhalb eines festen Quadrats geschrieben zu werden, ähnlich wie eine Monospace-Schrift, was die Ausrichtung von, z.B., lateinischen Zeichen zusammen mit asiatischen Sprachzeichen (wie Chinesisch, Japanisch, Koreanisch) ermöglicht.

- {{cssxref("text-decoration")}}: Setzt/entfernt Textdekorationen auf Schriften (dies werden Sie hauptsächlich verwenden, um den Standardunterstrich auf Links beim Gestalten zu entfernen). Verfügbare Werte sind:

  - `none`: Entfernt vorhandene Textdekorationen.
  - `underline`: Unterstreicht den Text.
  - `overline`: Fügt dem Text einen Überstrich hinzu.
  - `line-through`: Legt einen Durchstrich über den Text.

  Es sollte beachtet werden, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, z.B. `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzform für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzielen, zum Beispiel: `text-decoration: line-through red wavy`.

Lassen Sie uns ein paar dieser Eigenschaften zu unserem Beispiel hinzufügen:

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
  font-family: Helvetica, Arial, sans-serif;
}
```

Unser neues Ergebnis sieht so aus:

{{ EmbedLiveSample('3font-style', '100%', 260) }}

### Textschlagschatten

Sie können Textschlagschatten mit der {{cssxref("text-shadow")}}-Eigenschaft anwenden. Diese nimmt bis zu vier Werte an, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom Originaltext — dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, aber Sie werden am häufigsten `px` verwenden; positive Werte verschieben den Schatten nach rechts, negative nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Versatz des Schattens vom Originaltext. Dies verhält sich ähnlich wie der horizontale Versatz, außer dass es den Schatten nach oben/unten verschiebt, nicht nach links/rechts. Dieser Wert muss enthalten sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter gestreut wird. Wenn dieser Wert nicht enthalten ist, wird standardmäßig 0 gesetzt, was keine Unschärfe bedeutet. Dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbenheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn nicht enthalten, wird standardmäßig [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) gesetzt, d.h. die Farbe des Schattens wird von der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrfachschatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere Schattenwerte durch Kommas getrennt angeben, zum Beispiel:

```css live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element in unserem Tommy The Cat Beispiel anwenden, erhalten wir dies:

{{ EmbedLiveSample('4shadows', '100%', 260) }}

> [!NOTE]
> Sie können weitere interessante Beispiele für die Nutzung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) sehen.

## Textlayout

Nach den grundlegenden Schriftstileigenschaften werfen wir einen Blick auf die Eigenschaften, mit denen wir das Textlayout beeinflussen können.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie der Text innerhalb seines umgebenden Inhaltsfelds ausgerichtet wird. Die verfügbaren Werte sind unten aufgeführt. Sie funktionieren im Grunde genauso wie in einer regulären Textverarbeitungsanwendung:

- `left`: Linksbündigt den Text.
- `right`: Rechtsbündigt den Text.
- `center`: Zentriert den Text.
- `justify`: Verbreitert den Text, indem die Lücken zwischen den Wörtern variieren, damit alle Zeilen des Textes dieselbe Breite haben. Dies muss man sorgfältig verwenden — es kann schrecklich aussehen, besonders wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden, sollten Sie auch überlegen, etwas anderes zusammen damit zu verwenden, wie {{cssxref("hyphens")}}, um einige der längeren Wörter über die Zeilen zu brechen.

Wenn wir `text-align: center;` auf die {{htmlelement("Heading_Elements", "&lt;h1>")}} in unserem Beispiel anwenden, haben wir dies:

```css hidden live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-align: center;
}
```

{{ EmbedLiveSample('5text-align', '100%', 260) }}

### Zeilenhöhe

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern auch einen einheitslosen Wert, der als Multiplikator wirkt und im Allgemeinen als beste Option angesehen wird. Mit einem einheitslosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Körpertext sieht im Allgemeinen schöner aus und ist leichter lesbar, wenn die Zeilenabstände vorhanden sind. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelter Abstand). Um unsere Textzeilen 1,6-mal so hoch wie die Schrift zu setzen, würden wir verwenden:

```css live-sample___6line-height live-sample___7letter-word-spacing
p {
  line-height: 1.6;
}
```

Dies auf die {{htmlelement("p")}}-Elemente in unserem Beispiel angewendet ergibt dieses Ergebnis:

{{ EmbedLiveSample('6line-height', '100%', 300) }}

### Buchstaben- und Wortabstand

Die {{cssxref("letter-spacing")}}- und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden diese nicht sehr oft verwenden, aber möglicherweise finden Sie einen Anwendungsfall, um ein bestimmtes Aussehen zu erreichen oder um die Lesbarkeit einer besonders dichten Schrift zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Zur Veranschaulichung könnten wir einige Abstände zwischen Buchstaben und Wörtern an der ersten Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel anwenden:

```css live-sample___7letter-word-spacing
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Dies gibt uns folgendes Erscheinungsbild unseres HTML:

{{ EmbedLiveSample('7letter-word-spacing', '100%', 330) }}

### Andere sehenswerte Eigenschaften

Die oben genannten Eigenschaften geben Ihnen einen Eindruck davon, wie man beginnt, Text auf einer Webseite zu gestalten, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Verwendung dieser gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Wechseln Sie zwischen kleinen Großbuchstaben und normalen Schriftalternativen.
- {{cssxref("font-kerning")}}: Schalten Sie Schrift-Kerning-Optionen ein und aus.
- {{cssxref("font-feature-settings")}}: Schalten Sie verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType) Schriftfunktionen ein und aus.
- {{cssxref("font-variant-alternates")}}: Kontrollieren Sie die Verwendung von alternativen Glyphen für ein gegebenes Schriftbild.
- {{cssxref("font-variant-caps")}}: Kontrollieren Sie die Verwendung von alternativen Großbuchstabenglyphen.
- {{cssxref("font-variant-east-asian")}}: Kontrollieren Sie die Verwendung von alternativen Glyphen für ostasiatische Schriften, wie Japanisch und Chinesisch.
- {{cssxref("font-variant-ligatures")}}: Kontrollieren Sie, welche Ligaturen und kontextabhängigen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Kontrollieren Sie die Verwendung von alternativen Glyphen für Zahlen, Brüche und Ordnungszahlen.
- {{cssxref("font-variant-position")}}: Kontrollieren Sie die Verwendung von alternativen Glyphen in kleinerer Schriftgröße, die als hoch- oder tiefgestellt positioniert sind.
- {{cssxref("font-size-adjust")}}: Passen Sie die visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße an.
- {{cssxref("font-stretch")}}: Wechseln Sie zwischen möglichen alternativen gedehnten Versionen einer bestimmten Schrift.
- {{cssxref("text-underline-position")}}: Geben Sie die Position der Unterstriche an, die mit der `text-decoration-line`-Eigenschaft `underline`-Wert gesetzt werden.
- {{cssxref("text-rendering")}}: Versuchen, einige Text-Rendering-Optimierungen durchzuführen.

Textlayoutstile:

- {{cssxref("text-indent")}}: Legt fest, wie viel horizontaler Raum vor dem Beginn der ersten Zeile des Textinhalts gelassen werden soll.
- {{cssxref("text-overflow")}}: Definieren Sie, wie überlaufende Inhalte, die nicht angezeigt werden, den Benutzern signalisiert werden.
- {{cssxref("white-space")}}: Definieren Sie, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements gehandhabt werden.
- {{cssxref("word-break")}}: Geben Sie an, ob Zeilen innerhalb von Wörtern gebrochen werden sollen.
- {{cssxref("direction")}}: Definieren Sie die Textrichtung. (Dies hängt von der Sprache ab und normalerweise ist es besser, HTML übernehmen zu lassen, da es mit dem Textinhalt verknüpft ist.)
- {{cssxref("hyphens")}}: Schalten Sie die Trennung von Wörtern für unterstützte Sprachen ein und aus.
- {{cssxref("line-break")}}: Entspannen oder verstärken Sie das Zeilenbrechen für asiatische Sprachen.
- {{cssxref("text-align-last")}}: Definieren Sie, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet ist.
- {{cssxref("text-orientation")}}: Definieren Sie die Ausrichtung des Textes in einer Zeile.
- {{cssxref("overflow-wrap")}}: Geben Sie an, ob der Browser Zeilen innerhalb von Wörtern brechen darf, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Definieren Sie, ob Textzeilen horizontal oder vertikal angeordnet sind und die Richtung, in der nachfolgende Zeilen fließen.

## Schriftkurzform

Viele Schriftarten-Eigenschaften können auch über die Kurzformeigenschaft {{cssxref("font")}} gesetzt werden. Diese werden in folgender Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}} und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn Sie die `font`-Kurzformeigenschaft verwenden.

Ein Schrägstrich muss zwischen den {{cssxref("font-size")}}- und {{cssxref("line-height")}}-Eigenschaften eingefügt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Spielen mit der Textgestaltung

Gut, Sie sind dran. Für diese Aufgabe haben wir keine spezifischen Übungen für Sie. Wir möchten nur, dass Sie ein bisschen mit einigen Schrift-/Textlayout-Eigenschaften experimentieren. Sehen Sie selbst, was Sie sich einfallen lassen können!

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie einige Deklarationen zur bereitgestellten leeren `p { }`-Regel hinzu, um die Gestaltung des bereitgestellten Textes zu ändern. Seien Sie so kreativ, wie Sie wollen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Beziehen Sie sich auf die vorherigen Abschnitte im Artikel, um mehr Informationen über die Schrift- und Textstile zu finden, die Sie einstellen können.

```html live-sample___fonts_text
<p>Some sample text for your delight</p>
```

```css-nolint live-sample___fonts_text
p {

}
```

{{ EmbedLiveSample('fonts_text', "100%", 60) }}

## Zusammenfassung

Wir hoffen, Sie hatten Spaß am Experimentieren mit Texten in diesem Artikel! Der nächste Artikel gibt Ihnen alles, was Sie über das Gestalten von HTML-Listen wissen müssen.

## Siehe auch

- [Alles über die CSS font-family Eigenschaft](https://explainers.dev/font-family/), explainers.dev
- [Web-sichere Schriften](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_MDN-Bildungspartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
