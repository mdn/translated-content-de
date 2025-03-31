---
title: Grundlegende Text- und Schriftformatierung
short-title: Grundlagen der Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zum Erlernen der Textformatierung mit {{Glossary("CSS", "CSS")}}. Hier werden wir detailliert auf alle grundlegenden Aspekte der Text-/Schriftgestaltung eingehen, einschließlich der Einstellung von Schriftstärke, Schriftfamilie und Stil, der Abkürzung von Schriftarten, der Textausrichtung und anderer Effekte sowie des Linien- und Buchstabenabstands.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen der Gestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Konzepte von Schriftfamilien, Schriftstapeln und web-sicheren Schriften.</li>
          <li>Festlegen von Schriftfarbe, -stärke, -größe und -stil.</li>
          <li>Festlegen der Textausrichtung, Transformation und Dekoration.</li>
          <li>Festlegen der Zeilenhöhe.</li>
          <li>Wissen, dass es mehrere andere Schrift- und Textgestaltungseigenschaften gibt und ermutigt werden, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was beinhaltet die Textgestaltung in CSS?

Text innerhalb eines Elements wird innerhalb des [Inhaltskastens](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements angeordnet. Er beginnt oben links im Inhaltsbereich (oder oben rechts bei RTL-Sprachinhalten) und fließt bis zum Ende der Zeile. Sobald das Ende erreicht ist, geht es zur nächsten Zeile und fließt wieder bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in der Box platziert wurde. Textinhalte verhalten sich effektiv wie eine Reihe von Inline-Elementen, die auf benachbarten Linien angeordnet sind und keine Zeilenumbrüche erzeugen, bis das Ende der Zeile erreicht ist oder Sie manuell einen Zeilenumbruch mit dem {{htmlelement("br")}}-Element erzwingen.

> [!NOTE]
> Wenn der obige Absatz bei Ihnen Verwirrung ausgelöst hat, ist das nicht schlimm — gehen Sie zurück und lesen Sie unseren Artikel zum [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um die Theorie des Box-Modells aufzufrischen, bevor Sie fortfahren.

Die CSS-Eigenschaften zur Gestaltung von Text fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten werden:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes beeinflussen, z. B. welche Schrift angewendet wird, ihre Größe und ob sie fett, kursiv usw. ist.
- **Textlayout-Stile**: Eigenschaften, die die Abstände und andere Layout-Merkmale des Textes beeinflussen, um beispielsweise den Abstand zwischen Zeilen und Buchstaben zu manipulieren und wie der Text im Inhaltskasten ausgerichtet ist.

> [!NOTE]
> Beachten Sie, dass der Text innerhalb eines Elements als eine einzige Einheit betroffen ist. Sie können keine Textabschnitte auswählen und gestalten, es sei denn, Sie wickeln sie in ein entsprechendes Element (z. B. ein {{htmlelement("span")}} oder {{htmlelement("strong")}}) ein oder verwenden ein text-spezifisches Pseudo-Element wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements aus), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements aus) oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den Text aus, der derzeit vom Cursor hervorgehoben wird).

## Schriften

Schauen wir uns nun die Eigenschaften zur Gestaltung von Schriften an. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel an:

```html
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

Sie finden das [fertige Beispiel auf GitHub](https://mdn.github.io/learning-area/css/styling-text/fundamentals/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/fundamentals/index.html)).

### Farbe

Die {{cssxref("color")}}-Eigenschaft setzt die Farbe des Vordergrundinhalts der ausgewählten Elemente, was normalerweise der Text ist, aber auch ein paar andere Dinge umfassen kann, wie z. B. eine Unter- oder Überlinie, die auf Text mit der {{cssxref("text-decoration")}}-Eigenschaft gesetzt wird.

`color` kann jede [CSS-Farbenheitseinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css
p {
  color: red;
}
```

Dies wird dazu führen, dass die Absätze rot werden, anstatt des standardmäßigen Browser-Schwarz, wie folgt:

```html hidden
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

{{ EmbedLiveSample('Color', '100%', 230) }}

### Schriftfamilien

Um eine andere Schrift für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — diese ermöglicht es Ihnen, eine Schrift (oder eine Liste von Schriften) für den Browser anzugeben, die auf die ausgewählten Elemente angewendet werden soll. Der Browser wendet eine Schrift nur dann an, wenn sie auf dem Gerät verfügbar ist, auf dem die Website besucht wird; andernfalls verwendet er einfach eine [Standardschriftart](#standardschriften) des Browsers. Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde alle Absätze auf einer Seite die Arial-Schriftart annehmen lassen, die auf jedem Computer vorhanden ist.

#### Web-sichere Schriften

Apropos Schriftverfügbarkeit, es gibt nur eine bestimmte Anzahl von Schriftarten, die allgemein auf allen Systemen verfügbar sind und daher ohne großes Risiko verwendet werden können. Diese sind die sogenannten **web-sicheren Schriften**.

In den meisten Fällen möchten wir als Webentwickler eine spezifischere Kontrolle darüber haben, welche Schriften für die Anzeige unserer Textinhalte verwendet werden. Das Problem besteht darin, einen Weg zu finden, um zu wissen, welche Schrift auf dem Computer zur Verfügung steht, der unsere Webseiten anzeigt. Es gibt keinen Weg, dies in jedem Fall zu wissen, aber die web-sicheren Schriften sind dafür bekannt, auf fast allen Instanzen der am häufigsten verwendeten Betriebssysteme (Windows, macOS, die gängigsten Linux-Distributionen, Android und iOS) verfügbar zu sein.

Die Liste der tatsächlichen web-sicheren Schriften wird sich ändern, wenn sich Betriebssysteme weiterentwickeln, aber es ist vernünftig, zumindest einige der folgenden Schriften als web-sicher zu betrachten (viele von ihnen wurden dank der Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90er und frühen 2000er Jahren populär gemacht):

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Generischer Typ</th>
      <th scope="col">Anmerkungen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arial</td>
      <td>sans-serif</td>
      <td>
        Es wird oft als beste Praxis angesehen, auch <em>Helvetica</em> als
        bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da ihre Schriftbilder fast identisch sind, <em>Helvetica</em> jedoch als schöner geformt gilt, auch wenn <em>Arial</em> breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der
        <em>Courier New</em>-Schriftart namens <em>Courier</em>. Es gilt als beste
        Praxis, beide zu verwenden, wobei <em>Courier New</em> die bevorzugte
        Alternative ist.
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
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der
        <em>Times New Roman</em>-Schriftart namens <em>Times</em>. Es gilt als beste
        Praxis, beide zu verwenden, wobei <em>Times New Roman</em> die bevorzugte
        Alternative ist.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig sein, wenn Sie diese Schrift verwenden - sie ist auf mobilen
        Betriebssystemen nicht weit verbreitet.
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
> Unter verschiedenen Ressourcen führt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste von web-sicheren Schriften, die auf Windows- und macOS-Betriebssystemen verfügbar sind. Diese kann Ihnen bei der Entscheidung helfen, was Sie für Ihre Nutzung als sicher betrachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, um Ihre Schriftnutzung in jeder erdenklichen Weise anzupassen: **Web-Schriften**. Dies ist etwas komplexer und wir werden dies in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später im Modul besprechen.

#### Standardschriften

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch und das genaue Schriftbild, das aus diesen generischen Namen verwendet wird, kann zwischen den Browsern und den Betriebssystemen, auf denen sie angezeigt werden, variieren. Es stellt ein _Worst-Case-Szenario_ dar, bei dem der Browser sein Bestes tun wird, um eine angemessen aussehende Schriftart bereitzustellen. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Vernünftiges liefern. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar und wir empfehlen ihnen, diese sehr sorgfältig zu verwenden und während der Entwicklung zu testen.

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
        Schriften, die Serifen haben (die Verzierungen und andere kleine Details, die Sie an den Enden der Striche bei einigen Schriften sehen).
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
      <td>Schriften, die keine Serifen haben.</td>
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
        Schriften, bei denen jedes Zeichen die gleiche Breite hat, typischerweise in Code-Aufzählungen verwendet.
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
        Schriften, die beabsichtigt sind, Handschrift zu imitieren, mit fließenden, verbundenen Strichen.
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
      <td>Schriften, die dekorativ sein sollen.</td>
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

Da Sie die Verfügbarkeit der Schriften, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (auch eine Web-Schriftart könnte aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** bereitstellen, damit der Browser mehrere Schriftarten zur Auswahl hat. Dies umfasst einen `font-family`-Wert, der aus mehreren durch Kommas getrennten Schriftartnamen besteht, z. B.

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und überprüft, ob diese Schriftart auf dem Gerät verfügbar ist. Wenn ja, wird diese Schriftart auf die ausgewählten Elemente angewendet. Wenn nicht, geht es zur nächsten Schrift weiter usw.

Es ist eine gute Idee, am Ende des Stapels einen geeigneten generischen Schriftartnamen bereitzustellen, damit der Browser, wenn keine der aufgelisteten Schriftarten verfügbar ist, zumindest etwas ungefähr passend bereitstellen kann. Um diesen Punkt zu betonen, werden Absätze in der Standardschriftart des Browsers dargestellt, wenn keine andere Option verfügbar ist —- was normalerweise Times New Roman ist —- das ist keine gute Wahl für eine serifenlose Schriftart!

> [!NOTE]
> Während Sie Schriftartnamen verwenden können, die ein Leerzeichen enthalten, wie z. B. `Trebuchet MS`, ohne den Namen in Anführungszeichen zu setzen, wird empfohlen, Schriftartnamen, die Leerzeichen, Ziffern oder Interpunktionszeichen außer Bindestrichen enthalten, in Anführungszeichen zu setzen, um Fehler beim Escaping zu vermeiden.

> [!WARNING]
> Jeder Schriftartname, der als generischer Familienname oder CSS-weites Schlüsselwort missinterpretiert werden könnte, muss in Anführungszeichen gesetzt werden. Während die Schriftartenfamiliennamen als {{cssxref("custom-ident")}} oder {{cssxref("string")}} enthalten sein können, Schriftartnamen, die zufällig den gleichen Namen wie ein CSS-weiter Eigenschaftswert haben, wie `initial`, oder `inherit`, oder als generische Schriftartnamen, wie `sans-serif` oder `fantasy`, müssen als Zeichenfolge in Anführungszeichen enthalten sein. Andernfalls wird der Schriftartname als das entsprechende CSS-Schlüsselwort oder der generische Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftartnamen — `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT in Anführungszeichen gesetzt werden, da Zeichenfolgen nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für font-family

Lassen Sie uns unser vorheriges Beispiel erweitern und den Absätzen eine serifenlose Schriftart geben:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Dies gibt uns folgendes Ergebnis:

```html hidden
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

{{ EmbedLiveSample('A_font-family_example', '100%', 220) }}

### Schriftgröße

In unserem vorherigen Modulartikel zu [CSS-Werten und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben wir Längen- und Größeneinheiten überprüft. Die Schriftgröße (festgelegt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten gemessen werden (und in anderen, wie [Prozente](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)); die häufigsten Einheiten, die Sie zur Größenbestimmung von Text verwenden, sind jedoch:

- `px` (Pixel): Die Anzahl der Pixel, die der Text hoch sein soll. Dies ist eine absolute Einheit — es ergibt sich in so ziemlich jeder Situation derselbe endgültige berechnete Wert für die Schrift auf der Seite.
- `em`: 1 `em` ist gleich der Schriftgröße, die auf das Elternelement des aktuellen Elements, das wir gestalten, festgelegt ist (genauer gesagt, die Breite eines Großbuchstabens M, der sich im Elternelement befindet). Dies kann kompliziert werden, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich damit abmühen? Es ist ganz natürlich, sobald Sie sich daran gewöhnt haben, und Sie können `em` verwenden, um alles zu skalieren, nicht nur Text. Sie können eine gesamte Website mit `em` skalieren, was die Wartung einfach macht.
- `rem`: Diese funktionieren genauso wie `em`, außer dass 1 `rem` gleich der Schriftgröße ist, die auf das Root-Element des Dokuments festgelegt ist (z. B. {{htmlelement("html")}}), nicht auf das Elternelement. Dies erleichtert die Mathematik zur Berechnung Ihrer Schriftgrößen erheblich.

Die `font-size` eines Elements wird von dessen Elternelement vererbt. Alles beginnt mit dem Root-Element des gesamten Dokuments — {{htmlelement("html")}} — die Standard-`font-size`, die auf `16px` über die Browser festgelegt ist. Jeder Absatz (oder ein anderes Element, das keine andere Größe durch den Browser festgelegt hat) innerhalb des Root-Elements hat eine endgültige Größe von `16px`. Andere Elemente können unterschiedliche Standardgrößen haben. Ein {{htmlelement("Heading_Elements", "h1")}}-Element hat beispielsweise standardmäßig eine Größe von `2em` festgelegt, sodass es eine endgültige Größe von `32px` hat.

Es wird komplizierter, wenn Sie beginnen, die Schriftgröße von verschachtelten Elementen zu ändern. Wenn Sie beispielsweise ein {{htmlelement("article")}}-Element in Ihrer Seite hätten und dessen `font-size` auf 1.5 `em` festlegen (was sich auf eine endgültige Größe von 24 `px` umrechnen würde) und dann eine endberechnete Schriftgröße von 20 `px` für die Absätze innerhalb des `<article>`-Elements haben möchten, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten den `em`-Wert auf 20/24 oder 0.83333333 `em` festlegen. Die Mathematik kann kompliziert sein, daher müssen Sie darauf achten, wie Sie gestalten. Es ist am besten, `rem` zu verwenden, wo Sie können, um die Dinge einfach zu halten, und vermeiden Sie, wo möglich, die `font-size` von Containerelementen festzulegen.

### Schriftstil, Schriftstärke, Textumwandlung und Textdekoration

CSS bietet vier gängige Eigenschaften, um das visuelle Gewicht/Betonung von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um kursiven Text ein- oder auszuschalten. Mögliche Werte sind wie folgt (Sie verwenden dies selten, es sei denn, Sie möchten aus irgendeinem Grund eine kursive Formatierung deaktivieren):

  - `normal`: Setzt den Text auf die normale Schrift (schaltet vorhandene Kursivschrift ab).
  - `italic`: Setzt den Text auf die Verwendung der kursive Version der Schrift, falls verfügbar; wenn nicht, wird Kursivschrift mit oblique simuliert.
  - `oblique`: Setzt den Text auf die Verwendung einer simulierten Version einer kursive Schrift, die durch Neigung der normalen Version erstellt wird.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Es gibt viele verfügbare Werte, falls Sie viele Schriftvarianten verfügbar haben (wie _-davon_, _-normal_, _-fett_, _-extrafett_, _-schwarz_, usw.), aber realistisch gesehen werden Sie selten etwas anderes als `normal` und `bold` verwenden:

  - `normal`, `bold`: Normales und fettes Schriftgewicht.
  - `lighter`, `bolder`: Setzt das Fettdruck des aktuellen Elements so, dass es einen Schritt leichter oder schwerer als das Fettdruck des Elternelements ist.
  - `100` – `900`: Numerische Fettdruckswerte, die feinere Kontrolle als die obigen Schlüsselwörter bieten, falls erforderlich.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihre Schrift zu transformieren. Werte umfassen:

  - `none`: Verhindert jegliche Umwandlung.
  - `uppercase`: Wandelt den gesamten Text in Großbuchstaben um.
  - `lowercase`: Wandelt den gesamten Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter um, sodass der erste Buchstabe großgeschrieben wird.
  - `full-width`: Wandelt alle Glyphen um, um in einem festen breiten Quadrat geschrieben zu werden, ähnlich einer Monospace-Schrift, um beispielsweise lateinische Zeichen zusammen mit asiatischen Sprachglyphen (wie chinesisch, japanisch, koreanisch) auszurichten.

- {{cssxref("text-decoration")}}: Sets/unsets Textdekorationen auf Schriften (Sie verwenden dies hauptsächlich, um die standardmäßige Unterstreichung auf Links auszuschalten, wenn Sie diese gestalten). Verfügbare Werte sind:

  - `none`: Hebt alle bereits vorhandenen Textdekorationen auf.
  - `underline`: Unterstreicht den Text.
  - `overline`: Setzt eine Überstrichlinie auf den Text.
  - `line-through`: Setzt eine Durchstreichungslinie über den Text.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, zum Beispiel `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Abkürzungseigenschaft ist für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}}. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzielen, zum Beispiel: `text-decoration: line-through red wavy`.

Schauen wir uns an, wie wir einige dieser Eigenschaften zu unserem Beispiel hinzufügen:

Unser neues Ergebnis sieht dann so aus:

```html hidden
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

```css
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

{{ EmbedLiveSample('Font_style_font_weight_text_transform_and_text_decoration', '100%', 260) }}

### Schlagschatten für Text

Sie können Schlagschatten für Ihren Text mit der {{cssxref("text-shadow")}}-Eigenschaft anwenden. Diese nimmt bis zu vier Werte, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom ursprünglichen Text — dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, Sie werden jedoch am häufigsten `px` verwenden; positive Werte verschieben den Schatten nach rechts und negative nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Versatz des Schattens vom ursprünglichen Text. Dies verhält sich ähnlich wie der horizontale Versatz, verschiebt jedoch den Schatten nach oben/unten und nicht nach links/rechts. Dieser Wert muss enthalten sein.
3. Der Unschärferadius: ein höherer Wert bedeutet, dass der Schatten weiter verteilt wird. Wenn dieser Wert nicht enthalten ist, wird er auf 0 gesetzt, was keine Unschärfe bedeutet. Dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbenheitseinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wird er nicht angegeben, wird er auf [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) gesetzt, d.h. die Schattenfarbe wird aus der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrere Schatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere Schattenwerte durch Kommas getrennt angeben, zum Beispiel:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "h1")}}-Element in unserem Tommy The Cat-Beispiel anwenden, hätten wir dieses Ergebnis:

```html hidden
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

```css hidden
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

{{ EmbedLiveSample('Multiple_shadows', '100%', 260) }}

> [!NOTE]
> Sie können mehr interessante Beispiele für die Verwendung von `text-shadow` im Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) von Sitepoint sehen.

## Textlayout

Nachdem wir die grundlegenden Schriftsätze behandelt haben, schauen wir uns einige Eigenschaften an, die wir verwenden können, um das Textlayout zu beeinflussen.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie Text innerhalb seines enthaltenen Inhaltskastens ausgerichtet wird. Die verfügbaren Werte sind unten aufgeführt. Sie funktionieren weitgehend wie in einer regulären Textverarbeitungsanwendung:

- `left`: Linksbündige Ausrichtung des Textes.
- `right`: Rechtsbündige Ausrichtung des Textes.
- `center`: Zentriert den Text.
- `justify`: Lässt den Text sich ausbreiten, indem die Abstände zwischen den Wörtern so variiert werden, dass alle Zeilen des Textes die gleiche Breite haben. Sie müssen dies vorsichtig verwenden — es kann schrecklich aussehen, insbesondere wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden möchten, sollten Sie auch etwas anderes zusammen mit ihm verwenden, wie {{cssxref("hyphens")}}, um einige der längeren Wörter über Zeilen hinweg zu trennen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "h1")}} in unserem Beispiel anwenden würden, hätten wir dieses Ergebnis:

```html hidden
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

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
  text-align: center;
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

{{ EmbedLiveSample('Text_alignment', '100%', 260) }}

### Zeilenhöhe

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern auch einen einheitslosen Wert, der als Multiplikator fungiert und allgemein als die beste Option angesehen wird. Mit einem einheitslosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtexte sehen im Allgemeinen schöner aus und lassen sich besser lesen, wenn die Zeilen etwas auseinander liegen. Die empfohlene Zeilenhöhe liegt etwa bei 1,5 – 2 (doppelter Abstand). Um unsere Textzeilen auf 1,6-fache der Schrifthöhe zu setzen, würden wir verwenden:

```css
p {
  line-height: 1.6;
}
```

Wenn Sie dies auf die {{htmlelement("p")}}-Elemente in unserem Beispiel anwenden, würde dies zu folgendem Ergebnis führen:

```html hidden
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

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.6;
}
```

{{ EmbedLiveSample('Line_height', '100%', 300) }}

### Buchstaben- und Wortabstand

Die {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden diese nicht sehr oft verwenden, könnten jedoch einen Nutzen darin finden, einen bestimmten Look zu erzielen oder die Lesbarkeit einer besonders dichten Schriftart zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir einige Wort- und Buchstabenabstände auf die erste Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel anwenden mit:

```css
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Dies rendert unser HTML als:

```html hidden
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

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
  text-align: center;
  letter-spacing: 2px;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.6;
  letter-spacing: 1px;
}
```

{{ EmbedLiveSample('Letter_and_word_spacing', '100%', 330) }}

### Weitere Eigenschaften, die es wert sind, angesehen zu werden

Die obigen Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie Text auf einer Webseite beginnen zu gestalten, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Verwendung der oben genannten gewöhnt haben, sollten Sie auch die folgenden untersuchen:

Schriftstile:

- {{cssxref("font-variant")}}: Umschalten zwischen kleinen Kapitälchen und normalen Schriftalternativen.
- {{cssxref("font-kerning")}}: Kerning-Optionen für die Schrift ein- und ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftfunktionen ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Die Verwendung von alternativen Glyphen für eine bestimmte Schriftart kontrollieren.
- {{cssxref("font-variant-caps")}}: Die Nutzung von alternativen Großbuchstabenglyphen kontrollieren.
- {{cssxref("font-variant-east-asian")}}: Die Nutzung alternativer Glyphen für ostasiatische Schriften, wie Japanisch und Chinesisch, kontrollieren.
- {{cssxref("font-variant-ligatures")}}: Kontrollieren, welche Ligaturen und kontextbezogenen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Die Nutzung alternativer Glyphen für Zahlen, Brüche und Ordnungszeichen kontrollieren.
- {{cssxref("font-variant-position")}}: Die Nutzung alternativer Glyphen in kleinerer Größe, die als hochgestellt oder tiefgestellt positioniert sind, kontrollieren.
- {{cssxref("font-size-adjust")}}: Die visuelle Größe der Schrift unabhängig von ihrer eigentlichen Schriftgröße anpassen.
- {{cssxref("font-stretch")}}: Umschalten zwischen möglichen alternativen gestreckten Versionen einer bestimmten Schriftart.
- {{cssxref("text-underline-position")}}: Die Position von Unterstreichungen festlegen, die mit der `text-decoration-line`-Eigenschaft `underline`-Wert gesetzt wurden.
- {{cssxref("text-rendering")}}: Versuchen Sie, einige Text-Rendering-Optimierungen vorzunehmen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Festlegen, wie viel horizontaler Platz vor dem Beginn der ersten Zeile des Textinhalts gelassen werden soll.
- {{cssxref("text-overflow")}}: Definieren, wie überfluteter Inhalt, der nicht angezeigt wird, den Benutzern signalisiert wird.
- {{cssxref("white-space")}}: Definieren, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements verarbeitet werden.
- {{cssxref("word-break")}}: Bestimmen, ob Zeilen innerhalb von Wörtern gebrochen werden.
- {{cssxref("direction")}}: Die Textausrichtung definieren. (Dies hängt von der Sprache ab und es ist normalerweise besser, HTML diesen Teil steuern zu lassen, da es mit dem Textinhalt verknüpft ist.)
- {{cssxref("hyphens")}}: Silbentrennungen für unterstützte Sprachen ein- und ausschalten.
- {{cssxref("line-break")}}: Das Zeilenbrechen für asiatische Sprachen entspannen oder stärken.
- {{cssxref("text-align-last")}}: Bestimmen, wie die letzte Zeile eines Blocks oder einer Zeile direkt vor einem erzwungenen Zeilenumbruch ausgerichtet ist.
- {{cssxref("text-orientation")}}: Die Ausrichtung des Textes in einer Linie definieren.
- {{cssxref("overflow-wrap")}}: Bestimmen, ob der Browser Zeilen innerhalb von Wörtern brechen kann, um ein Überlaufen zu verhindern.
- {{cssxref("writing-mode")}}: Festlegen, ob Zeilen von Text horizontal oder vertikal angeordnet sind und in welche Richtung sich nachfolgende Zeilen bewegen.

## Abkürzung für Schriftart

Viele Schrifteigenschaften können auch über die Kurzschreibweise der Eigenschaft {{cssxref("font")}} festgelegt werden. Diese werden in der folgenden Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}} und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn Sie die `font`-Kurzschreibweise verwenden.

Ein Schrägstrich muss zwischen den Eigenschaften {{cssxref("font-size")}} und {{cssxref("line-height")}} eingefügt werden.

Ein vollständiges Beispiel könnte so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aktives Lernen: Spielen mit Textgestaltung

In dieser aktiven Lernsitzung haben wir keine spezifischen Übungen für Sie. Wir würden gerne, dass Sie mit einigen Schrift-/Textlayout-Eigenschaften etwas herumspielen. Sehen Sie selbst, was Sie sich einfallen lassen können! Sie können dies entweder mit Offline-HTML/CSS-Dateien tun oder Ihren Code in das unten stehende live bearbeitbare Beispiel eingeben.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit dem _Zurücksetzen_-Button zurücksetzen.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<p>Some sample text for your delight</p>
  </textarea>

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
p {

}
  </textarea>

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
  </div>
</div>
```

```js hidden
const htmlInput = document.querySelector(".html-input");
const cssInput = document.querySelector(".css-input");
const reset = document.getElementById("reset");
let htmlCode = htmlInput.value;
let cssCode = cssInput.value;
const output = document.querySelector(".output");

const styleElem = document.createElement("style");
const headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", () => {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Active_learning_Playing_with_styling_text', 700, 800) }}

## Zusammenfassung

Wir hoffen, dass Ihnen das Spielen mit Text in diesem Artikel gefallen hat! Der nächste Artikel wird Ihnen alles bieten, was Sie über die Gestaltung von HTML-Listen wissen müssen.

## Siehe auch

- [All about the CSS font-family property](https://explainers.dev/font-family/), explainers.dev
- [Web-safe fonts](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>_MDN learning partner_</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
