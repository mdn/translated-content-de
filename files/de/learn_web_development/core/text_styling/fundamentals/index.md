---
title: Grundlegendes zur Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 76d104c2fbc4680d70b548a6de4daabf4ac0cff3
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Meisterung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Hier gehen wir alle grundlegenden Elemente der Text-/Schriftgestaltung im Detail durch, einschließlich der Einstellung von Schriftgewicht, Familie und Stil, Schrifthandlung, Textausrichtung und anderen Effekten sowie Zeilen- und Buchstabenspacing.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen der Konzepte von Schriftfamilien, Schriftstapeln und web-sicheren Schriften.</li>
          <li>Einstellung von Schriftfarbe, -gewicht, -größe und -stil.</li>
          <li>Einstellung der Textausrichtung, Transformation und Dekoration.</li>
          <li>Einstellung der Zeilenhöhe.</li>
          <li>Kennenlernen, dass es mehrere andere Schrift- und Textgestaltungs-Eigenschaften gibt und die Erkundung dieser fördern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was gehört zur Textgestaltung in CSS?

Text innerhalb eines Elements wird im [Inhaltsbereich](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements angeordnet. Er beginnt oben links im Inhaltsbereich (oder oben rechts bei RTL-Sprachinhalten) und fließt bis zum Ende der Zeile. Sobald er das Ende erreicht, geht er zur nächsten Zeile nach unten und fließt wieder bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt im Kasten platziert ist. Textinhalt verhält sich effektiv wie eine Serie von Inline-Elementen, die auf nebeneinander liegenden Zeilen angeordnet werden und keine Zeilenumbrüche erzeugen, bis das Ende der Zeile erreicht ist oder Sie manuell einen Zeilenumbruch erzwingen, indem Sie das {{htmlelement("br")}}-Element verwenden.

> [!NOTE]
> Wenn der obige Absatz Sie verwirrt, gehen Sie getrost zurück und lesen Sie unseren [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Artikel, um die Box-Modell-Theorie aufzufrischen, bevor Sie fortfahren.

Die zur Textgestaltung verwendeten CSS-Eigenschaften fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel getrennt betrachten werden:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes betreffen, z.B. welche Schrift angewendet wird, ihre Größe und ob sie fett, kursiv usw. ist.
- **Textlayoutstile**: Eigenschaften, die den Abstand und andere Layoutmerkmale des Textes betreffen und die Manipulation von z.B. dem Abstand zwischen Zeilen und Buchstaben ermöglichen, sowie wie der Text innerhalb des Inhaltsbereichs ausgerichtet ist.

> [!NOTE]
> Beachten Sie, dass der Text innerhalb eines Elements als eine einzige Einheit betroffen ist. Sie können keine Unterabschnitte von Text auswählen und gestalten, es sei denn, Sie wickeln sie in ein geeignetes Element (wie ein {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden ein textbezogenes Pseudo-Element wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements) oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den aktuell vom Cursor hervorgehobenen Text).

## Schriftarten

Lassen Sie uns direkt zu den Eigenschaften für die Schriftgestaltung übergehen. In diesem Beispiel werden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel anwenden:

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

Sie können das [fertige Beispiel auf GitHub](https://mdn.github.io/learning-area/css/styling-text/fundamentals/) finden (sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/fundamentals/index.html) an).

### Farbe

Die Eigenschaft {{cssxref("color")}} setzt die Farbe des Vordergrundinhalts der ausgewählten Elemente, was in der Regel der Text ist, aber auch ein paar andere Dinge einschließen kann, wie beispielsweise eine Unter- oder Überstreichung des Textes mittels der Eigenschaft {{cssxref("text-decoration")}}.

`color` kann jede [CSS-Farbenheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css
p {
  color: red;
}
```

Dies bewirkt, dass die Absätze rot werden, statt dem Standard in Schwarz, wie hier:

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

Um eine andere Schriftart für Ihren Text festzulegen, verwenden Sie die Eigenschaft {{cssxref("font-family")}} — dies ermöglicht es Ihnen, eine Schriftart (oder Liste von Schriftarten) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wird nur eine Schriftart anwenden, wenn sie auf dem Rechner verfügbar ist, auf dem die Webseite aufgerufen wird; wenn nicht, verwendet er einfach eine [Standardschriftart](#standardschriftarten) des Browsers. Ein einfaches Beispiel sieht dann so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde alle Absätze auf einer Seite die Arial-Schrift annehmen lassen, die auf jedem Computer gefunden wird.

#### Web-sichere Schriften

In Bezug auf die Schriftverfügbarkeit gibt es nur eine bestimmte Anzahl von Schriften, die im Allgemeinen auf allen Systemen verfügbar sind und daher ohne große Sorgen verwendet werden können. Dies sind die sogenannten **web-sicheren Schriftarten**.

Die meiste Zeit möchten wir als Webentwickler eine spezifischere Kontrolle über die Schriften haben, die zur Anzeige unserer Textinhalte verwendet werden. Das Problem besteht darin, einen Weg zu finden, zu wissen, welche Schrift auf dem Computer zur Verfügung steht, der unsere Webseiten betrachtet. Dies lässt sich nicht immer zuverlässig feststellen, aber die web-sicheren Schriften sind dafür bekannt, dass sie auf fast allen Instanzen der am häufigsten verwendeten Betriebssysteme (Windows, macOS, die gebräuchlichsten Linux-Distributionen, Android und iOS) verfügbar sind.

Die Liste der tatsächlich web-sicheren Schriften wird sich ändern, wenn sich Betriebssysteme weiterentwickeln, aber es ist vernünftig, die folgenden Schriften als web-sicher zu betrachten, zumindest derzeit (viele von ihnen wurden dank der Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90ern und frühen 2000ern populär gemacht):

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
        Es wird oft als Best Practice angesehen, auch <em>Helvetica</em> als
        bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da, obwohl ihre
        Schriftbilder fast identisch sind, <em>Helvetica</em> als formschöner
        gilt, auch wenn <em>Arial</em> weiter verbreitet ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine Alternative (möglicherweise ältere)
        Version der <em>Courier New</em> Schrift namens <em>Courier</em>. Es wird
        als Best Practice angesehen, beide mit <em>Courier New</em> als
        bevorzugte Alternative zu verwenden.
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
        Einige Betriebssysteme haben eine Alternative (möglicherweise ältere)
        Version der <em>Times New Roman</em> Schrift namens <em>Times</em>. Es wird
        als Best Practice angesehen, beide mit <em>Times New Roman</em> als
        bevorzugte Alternative zu verwenden.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig mit der Verwendung dieser Schrift sein — sie ist
        nicht weit verbreitet auf mobilen Betriebssystemen.
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
> Unter verschiedenen Ressourcen pflegt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste web-sicherer Schriften, die auf Windows- und macOS-Betriebssystemen verfügbar sind und Ihnen bei der Entscheidung helfen können, was Sie als sicher für Ihre Nutzung erachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schrift zusammen mit einer Webseite herunterzuladen, um Ihnen zu erlauben, Ihre Schriftnutzung nach Belieben anzupassen: **Web-Schriften**. Dies ist etwas komplexer, und wir werden dies in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später in diesem Modul besprechen.

#### Standardschriftarten

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch und die genaue Schriftart, die aus diesen generischen Namen verwendet wird, kann zwischen jedem Browser und jedem Betriebssystem variieren, auf dem sie angezeigt werden. Sie stellt ein _Worst-Case-Szenario_ dar, bei dem der Browser sein Bestes versucht, eine passende Schrift bereitzustellen. `serif`, `sans-serif` und `monospace` sind recht vorhersehbar und sollten etwas Angemessenes bieten. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar und es wird empfohlen, sie sehr vorsichtig zu verwenden und dabei kontinuierlich zu testen.

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
        Schriften, die Serifen haben (die Schnörksel und andere kleine Details,
        die Sie an den Enden der Striche in einigen Schriftarten sehen).
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
        Schriften, in denen jedes Zeichen die gleiche Breite hat, typischerweise
        in Code-Auflistungen verwendet.
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
        Schriften, die darauf abzielen, Handschrift zu emulieren, mit fließenden,
        verbundenen Strichen.
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

Da Sie nicht garantieren können, dass die Schriften, die Sie auf Ihren Webseiten verwenden möchten, verfügbar sind (selbst eine Web-Schrift _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** bereitstellen, damit der Browser mehrere Schriften zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert, der aus mehreren durch Kommas getrennten Schriftarten besteht, z.B.,

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob die Schrift auf dem Rechner verfügbar ist. Wenn ja, wendet er diese Schrift auf die ausgewählten Elemente an. Wenn nicht, fährt er mit der nächsten Schrift fort und so weiter.

Es ist eine gute Idee, am Ende des Stapels einen geeigneten generischen Schriftname bereitzustellen, damit der Browser zumindest etwas ungefähr Passendes bereitstellen kann, wenn keine der aufgeführten Schriften verfügbar ist. Um diesen Punkt zu betonen, erhalten Absätze die Standardschriftart des Browsers mit Serifen, wenn keine andere Option verfügbar ist — was normalerweise Times New Roman ist — das ist nicht gut für eine serifenlose Schrift!

> [!NOTE]
> Während Sie Schriftartnamen verwenden können, die ein Leerzeichen enthalten, wie `Trebuchet MS`, ohne den Namen zu zitieren, empfehlen wir, Schriftartnamen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten, zu zitieren, um Fehler beim Escape zu vermeiden.

> [!WARNING]
> Jeder Schriftartname, der missverstanden werden könnte als generischer Schriftname oder CSS-weites Schlüsselwort, muss in Anführungszeichen stehen. Während Schriftartnamen wie ein {{cssxref("custom-ident")}} oder eine {{cssxref("string")}} eingebunden werden können, müssen Schriftartnamen, die zufällig identisch sind mit einem CSS-weiten Eigenschaftswert, wie `initial` oder `inherit`, oder CSS denselben Namen wie einer der generischen Schriftartnamen haben, wie `sans-serif` oder `fantasy`, als ein zitierter String eingebunden werden. Andernfalls wird der Schriftname als das äquivalente CSS-Schlüsselwort oder als generischer Schriftname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftarten-Namen —`serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT in Anführungszeichen stehen, da Strings nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für Schriftfamilien

Lassen Sie uns unser vorheriges Beispiel erweitern und den Absätzen eine serifenlose Schrift zuweisen:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Das gibt uns folgendes Ergebnis:

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

Im [Artikel über CSS-Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) unseres vorherigen Moduls haben wir Längen- und Größeneinheiten durchgesehen. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten (und andere, wie [Prozentangaben](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) gemessen werden; die gebräuchlichsten Einheiten, die Sie zur Größenbestimmung von Text verwenden werden, sind jedoch:

- `px` (Pixel): Die Anzahl der Pixel, die der Text hoch sein soll. Dies ist eine absolute Einheit — es ergibt überall im Grunde den gleichen endgültigen berechneten Wert für die Schrift auf der Seite.
- `em`s: 1 `em` entspricht der Schriftgröße, die auf das Elternelement des Elements, das wir gestalten, gesetzt ist (genauer gesagt, der Breite eines Großbuchstabens M, der im übergeordneten Element enthalten ist). Das kann knifflig sein, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, die eingestellt sind, aber es ist machbar, wie Sie weiter unten sehen werden. Warum sich darum kümmern? Es ist ganz natürlich, sobald man sich daran gewöhnt hat, und Sie können `em` verwenden, um alles zu dimensionieren, nicht nur Text. Sie können eine ganze Website mit `em` dimensionieren, was die Wartung erleichtert.
- `rem`s: Diese funktionieren genau wie `em`, außer dass 1 `rem` gleich der Schriftgröße ist, die auf das Stamm-Element des Dokuments (d.h. {{htmlelement("html")}}) gesetzt ist, nicht auf das übergeordnete Element. Das macht es viel einfacher, die Mathematik für die Berechnung Ihrer Schriftgrößen durchzuführen.

Die `font-size` eines Elements wird vom übergeordneten Element des Elements geerbt. Alles beginnt mit dem Stamm-Element des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard-`font-size` auf `16px` über Browser eingestellt ist. Jeder Absatz (oder ein anderes Element, das keine andere Größe vom Browser eingestellt hat) innerhalb des Stamm-Elements hat eine endgültige Größe von `16px`. Andere Elemente können andere Standardgrößen haben. Beispiel: Ein {{htmlelement("Heading_Elements", "h1")}}-Element hat standardmäßig eine Größe von `2em`, sodass es eine endgültige Größe von `32px` hat.

Die Dinge werden komplizierter, wenn Sie anfangen, die Schriftgröße von verschachtelten Elementen zu ändern. Beispiel: Wenn Sie ein {{htmlelement("article")}}-Element auf Ihrer Seite hätten und seine `font-size` auf 1,5 `em` (was sich in 24 `px` Endgröße berechnen würde) einstellen und dann wollen, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten ihren `em`-Wert auf 20/24, also 0.83333333 `em`, setzen. Die Mathematik kann kompliziert sein, daher müssen Sie vorsichtig sein, wie Sie die Dinge gestalten. Es ist am besten, `rem` zu verwenden, wo Sie können, um die Dinge einfach zu halten, und zu vermeiden, die `font-size` von Containerelementen zu setzen, wo möglich.

### Schriftstil, Schriftstärke, Texttransformierung und Textdekoration

CSS bietet vier gängige Eigenschaften, um das visuelle Gewicht/Betonung von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um fleißigen Text ein- oder auszuschalten. Mögliche Werte sind wie folgt (Sie werden dies selten verwenden, es sei denn, Sie möchten fleißige Stilisierung aus irgendeinem Grund ausschalten):

  - `normal`: Setzt den Text auf die normale Schrift (schaltet bestehende Kursive aus).
  - `italic`: Setzt den Text auf die Verwendung der kursive Version der Schrift, wenn verfügbar; andernfalls simuliert es eine Kursivschrift mit kursiv anstelle.
  - `oblique`: Setzt den Text auf die Verwendung einer simulierten Version einer kursive Schrift, erstellt durch Kippen der normalen Version.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Diese hat viele verfügbare Werte für den Fall, dass Sie viele Schriftvarianten zur Verfügung haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ usw.), aber in der Praxis werden Sie selten andere als `normal` und `bold` verwenden:

  - `normal`, `bold`: Normales und fettes Schriftgewicht.
  - `lighter`, `bolder`: Setzt das Fettigkeitsgrad des aktuellen Elements auf einen Schritt leichter oder schwerer als das des übergeordneten Elements.
  - `100` – `900`: Numerische Fettigkeits-Werte, die eine feinere Kontrolle als die obigen Schlüsselwörter bieten, falls erforderlich.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihre Schrift zu transformieren. Werte beinhalten:

  - `none`: Verhindert jegliche Transformation.
  - `uppercase`: Verwandelt alle Texte in Großbuchstaben.
  - `lowercase`: Verwandelt alle Texte in Kleinbuchstaben.
  - `capitalize`: Verwandelt alle Wörter in solche, die den ersten Buchstaben großgeschrieben haben.
  - `full-width`: Wandelt alle Glyphen so um, dass sie in einem festbreitigen Quadrat geschrieben werden, ähnlich wie in einer Monospace-Schrift, wodurch, z.B., lateinische Zeichen mit asiatischen Sprachglyphen (wie Chinesisch, Japanisch, Koreanisch) ausgerichtet werden können.

- {{cssxref("text-decoration")}}: Setzt/versetzt Textdekorationen auf Schriften (Sie werden dies hauptsächlich verwenden, um die Standardunterstreichung bei Links beim Stilen aufzuheben). Verfügbare Werte sind:

  - `none`: Hebt alle bereits vorhandenen Textdekorationen auf.
  - `underline`: Unterstreicht den Text.
  - `overline`: Gibt dem Text eine Oberlinie.
  - `line-through`: Legt einen durchgestrichenen Strich über den Text.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte auf einmal akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, zum Beispiel `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzschreibweise für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzielen, zum Beispiel: `text-decoration: line-through red wavy`.

Lassen Sie uns einige dieser Eigenschaften auf unser Beispiel anwenden:

Unser neues Ergebnis ist wie folgt:

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

### Textschatten

Sie können Textschatten auf Ihren Text anwenden, indem Sie die Eigenschaft {{cssxref("text-shadow")}} verwenden. Diese nimmt bis zu vier Werte an, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Offset des Schattens vom ursprünglichen Text — dieser kann die meisten verfügbaren CSS [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, aber Sie werden am häufigsten `px` verwenden; positive Werte verschieben den Schatten nach rechts und negative Werte nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Offset des Schattens vom ursprünglichen Text. Dies verhält sich ähnlich wie der horizontale Offset, außer dass er den Schatten nach oben/unten und nicht nach links/rechts verschiebt. Dieser Wert muss enthalten sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter verbreitet wird. Wenn dieser Wert nicht enthalten ist, wird er auf 0 voreingestellt, was keine Unschärfe bedeutet. Dieser kann die meisten verfügbaren CSS [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Basisfarbe des Schattens, die jede [CSS-Farbenheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn nicht enthalten, wird dies auf [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) voreingestellt, d.h. die Farbe des Schattens wird von der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrfache Schatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere Schattenwerte durch Kommas getrennt einfügen, zum Beispiel:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "h1")}}-Element in unserem Tommy The Cat-Beispiel anwenden würden, hätten wir folgendes:

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
> Sie können weitere interessante Beispiele für die Nutzung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) sehen.

## Textlayout

Mit den grundlegenden Schriftarten-Eigenschaften aus dem Weg, lassen Sie uns einen Blick auf Eigenschaften werfen, die wir verwenden können, um das Textlayout zu beeinflussen.

### Textausrichtung

Die Eigenschaft {{cssxref("text-align")}} wird verwendet, um zu steuern, wie Text innerhalb seines enthaltenen Inhaltsbereichs ausgerichtet wird. Die verfügbaren Werte sind unten aufgelistet. Sie arbeiten ziemlich gleich wie in einer regulären Textverarbeitungsanwendung:

- `left`: Linksbündiger Text.
- `right`: Rechtsbündiger Text.
- `center`: Zentrierter Text.
- `justify`: Lässt den Text sich ausbreiten, variiert die Lücken zwischen den Wörtern, sodass alle Textzeilen die gleiche Breite haben. Sie müssen dies sorgfältig verwenden — es kann schrecklich aussehen, insbesondere wenn es auf einen Paragraphen mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden, sollten Sie auch daran denken, etwas anderes damit zu nutzen, wie {{cssxref("hyphens")}}, um einige der längeren Wörter über Zeilen hinweg zu brechen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "h1")}} in unserem Beispiel anwenden würden, hätten wir folgendes:

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

Die Eigenschaft {{cssxref("line-height")}} setzt die Höhe jeder Textzeile. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sie kann auch einen einheitenlosen Wert annehmen, der als Multiplikator fungiert und im Allgemeinen als die beste Option angesehen wird. Mit einem einheitenlosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtext sieht im Allgemeinen schöner aus und ist leichter zu lesen, wenn die Zeilen auseinander liegen. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelter Abstand). Um unsere Textzeilen auf das 1,6-fache der Schriftgröße zu setzen, würden wir verwenden:

```css
p {
  line-height: 1.6;
}
```

Wenn wir dies auf die {{htmlelement("p")}}-Elemente in unserem Beispiel anwenden würden, hätten wir folgendes Ergebnis:

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

Die Eigenschaften {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}} ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden diese nicht sehr oft verwenden, könnten aber einen Nutzen für sie finden, um ein bestimmtes Aussehen zu erreichen oder die Lesbarkeit einer besonders dichten Schrift zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Zur Veranschaulichung könnten wir etwas Wort- und Buchstabenabstand auf die erste Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel anwenden mit:

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

Die oben genannten Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie beginnen können, Text auf einer Webseite zu gestalten, aber es gibt noch viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Verwendung der obigen gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Wechseln zwischen kleinen Großbuchstaben und normalen Schriftalternativen.
- {{cssxref("font-kerning")}}: Schalten Sie die Schriftkerning-Optionen ein und aus.
- {{cssxref("font-feature-settings")}}: Schalten Sie verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftarten-Funktionen ein und aus.
- {{cssxref("font-variant-alternates")}}: Steuern Sie die Verwendung alternativer Glyphen für einen bestimmten Schriftschnitt.
- {{cssxref("font-variant-caps")}}: Steuern Sie die Verwendung alternativer Kapital-Glyphen.
- {{cssxref("font-variant-east-asian")}}: Steuern Sie die Verwendung alternativer Glyphen für ostasiatische Schriften, wie Japanisch und Chinesisch.
- {{cssxref("font-variant-ligatures")}}: Steuern Sie, welche Ligaturen und kontextuellen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Steuern Sie die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordinale.
- {{cssxref("font-variant-position")}}: Steuern Sie die Verwendung alternativer Glyphen kleinerer Größen, die als hoch- oder tiefgestellt positioniert sind.
- {{cssxref("font-size-adjust")}}: Passen Sie die visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße an.
- {{cssxref("font-stretch")}}: Wechseln Sie zwischen möglichen alternativen gestreckten Versionen einer bestimmten Schrift.
- {{cssxref("text-underline-position")}}: Geben Sie die Position der Unterstreichungen an, die mithilfe des `text-decoration-line`-Eigenschaftswerts `underline` gesetzt werden.
- {{cssxref("text-rendering")}}: Versuchen Sie, einige Textrendering-Optimierungen durchzuführen.

Textlayoutstile:

- {{cssxref("text-indent")}}: Geben Sie an, wie viel horizontaler Raum vor dem Beginn der ersten Zeile des Textinhalts gelassen werden soll.
- {{cssxref("text-overflow")}}: Definieren Sie, wie überlaufene Inhalte, die nicht angezeigt werden, den Benutzern signalisiert werden.
- {{cssxref("white-space")}}: Definieren Sie, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Geben Sie an, ob Zeilen innerhalb von Wörtern gebrochen werden sollen.
- {{cssxref("direction")}}: Definieren Sie die Schreibrichtung (Dies hängt von der Sprache ab und es ist normalerweise besser, HTML das übernehmen zu lassen, da es an den Textinhalt gebunden ist).
- {{cssxref("hyphens")}}: Schalten Sie die Silbentrennung für unterstützte Sprachen ein und aus.
- {{cssxref("line-break")}}: Entspannen oder verstärken Sie den Zeilenumbruch für asiatische Sprachen.
- {{cssxref("text-align-last")}}: Definieren Sie, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.
- {{cssxref("text-orientation")}}: Definieren Sie die Orientierung des Textes in einer Linie.
- {{cssxref("overflow-wrap")}}: Geben Sie an, ob der Browser innerhalb von Wörtern Linien brechen darf, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Definieren Sie, ob Textzeilen horizontal oder vertikal angeordnet werden und in welche Richtung nachfolgende Zeilen fließen.

## Schrift-Kurzschreibweise

Viele Schrifteigenschaften können auch über die Kurzschreibweise-Eigenschaft {{cssxref("font")}} festgelegt werden. Diese werden in folgender Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}} und {{cssxref("font-family")}}.

Von all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn die `font`-Kurzschreibweise verwendet wird.

Ein Schrägstrich muss zwischen den Eigenschaften {{cssxref("font-size")}} und {{cssxref("line-height")}} gesetzt werden.

Ein vollständiges Beispiel sieht so aus:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aktives Lernen: Spielen mit der Textgestaltung

In dieser aktiven Lernsitzung haben wir keine spezifischen Übungen für Sie vorgesehen. Wir möchten nur, dass Sie ein wenig mit einigen Schrift-/Textlayout-Eigenschaften experimentieren. Sehen Sie selbst, was Sie entwickeln können! Sie können dies entweder mit offline HTML/CSS-Dateien tun oder Ihren Code in das live bearbeitbare Beispiel unten eingeben.

Wenn Sie einen Fehler machen, können Sie ihn immer mit dem _Zurücksetzen_-Knopf zurücksetzen.

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

Wir hoffen, Sie hatten Spaß daran, in diesem Artikel mit Text zu spielen! Der nächste Artikel wird Ihnen alles bieten, was Sie über das Stylen von HTML-Listen wissen müssen.

## Siehe auch

- [Web-sichere Schriften](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>_MDN Curriculum Partner_</sup>
- [Alles über die CSS-Schriftfamilien-Eigenschaft](https://explainers.dev/font-family/), explainers.dev

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
