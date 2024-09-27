---
title: Grundlagen der Text- und Schriftartenstile
slug: Learn/CSS/Styling_text/Fundamentals
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}

In diesem Artikel beginnen wir Ihre Reise zur Beherrschung der Textformatierung mit [CSS](/de/docs/Glossary/CSS). Hier werden wir alle grundlegenden Prinzipien der Text-/Schriftartenformatierung im Detail durchgehen, einschließlich der Festlegung von Schriftgewicht, -familie und -stil, Schriftanweisung, Textausrichtung und anderen Effekten sowie Zeilen- und Buchstabenabständen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), Grundkenntnisse in CSS (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um die grundlegenden Eigenschaften und Techniken zu erlernen, die benötigt werden, um Text auf Webseiten zu formatieren.
      </td>
    </tr>
  </tbody>
</table>

## Was beinhaltet das Styling von Text in CSS?

Text innerhalb eines Elements wird innerhalb des [Inhaltsbereichs](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements angeordnet. Er beginnt oben links im Inhaltsbereich (oder oben rechts im Fall von Inhalten in RTL-Sprachen) und fließt bis zum Ende der Zeile. Sobald er das Ende erreicht, geht er zur nächsten Zeile hinunter und fließt erneut bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in die Box gesetzt wurde. Textelemente verhalten sich effektiv wie eine Reihe von Inline-Elementen, die in nebeneinanderliegenden Linien angeordnet sind und keine Zeilenumbrüche erzeugen, bis das Ende der Zeile erreicht ist, oder es sei denn, Sie erzwingen einen Zeilenumbruch manuell mit dem {{htmlelement("br")}}-Element.

> [!NOTE]
> Wenn der obige Absatz Sie verwirrt zurücklässt, dann ist das nicht schlimm — gehen Sie zurück und wiederholen Sie unseren [Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) Artikel, um Ihr Wissen über die Box-Modell-Theorie aufzufrischen, bevor Sie weitermachen.

Die CSS-Eigenschaften, die zum Styling von Text verwendet werden, fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat behandeln werden:

- **Schriftstile**: Eigenschaften, die die Schriftart eines Textes betreffen, z.B. welche Schriftart angewendet wird, ihre Größe und ob sie fett, kursiv usw. ist.
- **Textlayoutstile**: Eigenschaften, die den Abstand und andere Layoutmerkmale des Textes beeinflussen, z.B. den Abstand zwischen Zeilen und Buchstaben und wie der Text innerhalb der Inhaltsbox ausgerichtet ist.

> [!NOTE]
> Bedenken Sie, dass der Text innerhalb eines Elements als eine einzige Einheit behandelt wird. Sie können keine Teilabschnitte des Textes auswählen und formatieren, es sei denn, Sie umschließen sie mit einem geeigneten Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder Sie verwenden ein textspezifisches Pseudoelement wie [::first-letter](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements aus), [::first-line](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements aus) oder [::selection](/de/docs/Web/CSS/::selection) (wählt den Text aus, der derzeit vom Cursor hervorgehoben wird).

## Schriftarten

Lassen Sie uns direkt zu den Eigenschaften übergehen, die zum Stylen von Schriftarten verwendet werden. In diesem Beispiel werden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel anwenden:

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

Sie können das [fertige Beispiel auf GitHub](https://mdn.github.io/learning-area/css/styling-text/fundamentals/) finden (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/fundamentals/index.html)).

### Farbe

Die {{cssxref("color")}}-Eigenschaft legt die Farbe des Vordergrundinhalts der ausgewählten Elemente fest, was in der Regel der Text ist, aber auch ein paar andere Dinge umfassen kann, wie zum Beispiel eine Unter- oder Überlinie, die mit der {{cssxref("text-decoration")}}-Eigenschaft auf Text gesetzt wird.

`color` kann jede [CSS-Farbeinheit](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) akzeptieren, zum Beispiel:

```css
p {
  color: red;
}
```

Dies wird dazu führen, dass die Absätze rot werden, anstatt der Standardfarbe des Browsers, die schwarz ist, wie folgt:

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

Um eine andere Schriftart für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — diese erlaubt es Ihnen, eine Schriftart (oder eine Liste von Schriftarten) für den Browser zu spezifizieren, die er auf die ausgewählten Elemente anwenden soll. Der Browser wendet eine Schriftart nur an, wenn sie auf dem Gerät verfügbar ist, auf dem die Webseite betrachtet wird; wenn nicht, verwendet er einfach eine Browser-[Standardschriftart](#standardschriften). Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde bewirken, dass alle Absätze auf einer Seite die Schriftart Arial annehmen, die auf jedem Computer zu finden ist.

#### Websichere Schriften

In Bezug auf die Verfügbarkeit von Schriftarten gibt es nur eine bestimmte Anzahl von Schriftarten, die allgemein auf allen Systemen verfügbar sind und daher ohne große Bedenken verwendet werden können. Diese sind die sogenannten **websicheren Schriften**.

Die Liste der tatsächlich websicheren Schriftarten wird sich ändern, während sich Betriebssysteme weiterentwickeln, aber es ist vernünftig, die folgenden Schriftarten als websicher zu betrachten, zumindest momentan (viele von ihnen wurden dank der Microsoft-Initiative _[Kernschriftarten für das Web](https://de.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90er und frühen 2000er Jahren popularisiert):

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Generischer Typ</th>
      <th scope="col">Hinweise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arial</td>
      <td>sans-serif</td>
      <td>
        Es wird oft als beste Praxis betrachtet, auch <em>Helvetica</em> als
        bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da, obwohl ihre
        Schriftbilder fast identisch sind, <em>Helvetica</em> als
        ansprechender/formschöner gilt, auch wenn <em>Arial</em>
        breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere)
        Version der
        <em>Courier New</em>-Schriftart namens <em>Courier</em>. Es wird
        als beste Praxis betrachtet, beide mit
        <em>Courier New</em> als bevorzugte Alternative zu verwenden.
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
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere)
        Version der
        <em>Times New Roman</em>-Schriftart namens <em>Times</em>. Es wird
        als beste Praxis betrachtet, beide mit
        <em>Times New Roman</em> als bevorzugte Alternative zu verwenden.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig sein, wenn Sie diese Schriftart verwenden — sie
        ist auf mobilen Betriebssystemen nicht weit verbreitet.
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
> Unter verschiedenen Ressourcen führt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste websicherer Schriftarten, die auf Windows- und macOS-Betriebssystemen verfügbar sind, die Ihnen bei der Entscheidung helfen können, was Sie für Ihre Nutzung als sicher betrachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, um Ihnen die Anpassung Ihrer Schriftnutzung auf jede gewünschte Weise zu ermöglichen: **Webfonts**. Dies ist ein wenig komplexer, und wir werden es in einem [separaten Artikel](/de/docs/Learn/CSS/Styling_text/Web_fonts) später in diesem Modul besprechen.

#### Standardschriften

CSS definiert fünf generische Bezeichnungen für Schriftarten: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr allgemein und das genaue Schriftbild, das für diese generischen Namen verwendet wird, kann zwischen den einzelnen Browsern und den Betriebssystemen, auf denen sie angezeigt werden, variieren. Dies stellt ein _Worst-Case-Szenario_ dar, bei dem der Browser sein Bestes tun wird, um eine passende Schriftart bereitzustellen. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Vernünftiges bereitstellen. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar, und wir empfehlen, sie sehr sorgfältig zu verwenden und beim Testen zu berücksichtigen.

Die fünf Bezeichnungen sind wie folgt definiert:

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
        Schriftarten, die Serifen haben (die Verzierungen und andere kleine
        Details, die Sie an den Enden der Striche in einigen
        Schriftarten sehen).
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
      <td>Schriftarten, die keine Serifen haben.</td>
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
        Schriftarten, bei denen jedes Zeichen die gleiche Breite hat,
        typischerweise in Codeaufstellungen verwendet.
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
        Schriftarten, die beabsichtigen, Handschrift zu imitieren, mit fließenden,
        verbundenen Strichen.
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
      <td>Schriftarten, die beabsichtigen, dekorativ zu sein.</td>
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

Da Sie die Verfügbarkeit der Schriftarten, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (selbst ein Webfont _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** angeben, sodass der Browser mehrere Schriftarten zur Auswahl hat. Dies umfasst einen `font-family`-Wert, der aus mehreren durch Kommas getrennten Schriftnamen besteht, z.B.

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob diese Schriftart auf dem Gerät verfügbar ist. Wenn ja, wendet er diese Schriftart auf die ausgewählten Elemente an. Wenn nicht, geht er zur nächsten Schriftart über und so weiter.

Es ist eine gute Idee, am Ende des Stapels eine geeignete generische Schriftart anzugeben, damit der Browser, wenn keine der aufgelisteten Schriftarten verfügbar sind, zumindest etwas annähernd Passendes bereitstellen kann. Um diesen Punkt zu verdeutlichen, werden den Absätzen im Browserstandard die serifenlosen Schriftart zugewiesen — was normalerweise Times New Roman ist — das ist nicht geeignet für eine serifenlose Schriftart!

> [!NOTE]
> Während Sie Schriftartnamen mit einem Leerzeichen verwenden können, wie `Trebuchet MS`, ohne den Namen zu zitieren, um Fehler beim Escaping zu vermeiden, wird empfohlen, Schriftartnamen mit Leerzeichen, Ziffern oder anderen Satzzeichen als Bindestrichen zu zitieren.

> [!WARNING]
> Jeder Schriftartname, der als generischer Familienname oder CSS-weites Schlüsselwort missinterpretiert werden könnte, muss zitiert werden. Während die Schriftartnamen als {{cssxref("custom-ident")}} oder ein {{cssxref("string")}} enthalten sein können, müssen die Schriftnamen, die zufällig den gleichen Namen wie ein CSS-weites Schlüsselwert, haben wie `initial`, oder `inherit`, oder CSS denselben Namen wie einer der generischen Schriftfamiliennamen haben, wie `sans-serif` oder `fantasy`, als zitierte Zeichenkette enthalten werden. Andernfalls wird der Schriftnamen als gleichbedeutend mit dem CSS-Schlüsselwort oder generischen Familiennamen interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftartnamen —`serif`, `sans-serif`, `monospace`, `cursive`, und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT zitiert werden, da Zeichenketten nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für `font-family`

Lassen Sie uns unser vorheriges Beispiel erweitern, indem wir den Absätzen eine serifenlose Schriftart geben:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Dies ergibt das folgende Ergebnis:

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

Im [Artikel zu CSS-Werten und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) unseres vorherigen Moduls haben wir Längen- und Größeneinheiten überprüft. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten (und anderen, wie [Prozenten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#percentages)) gemessen werden; allerdings sind die häufigsten Einheiten, die Sie zur Größenbestimmung von Text verwenden, folgende:

- `px` (Pixel): Die Anzahl der Pixel, die Ihr Text hoch sein soll. Dies ist eine absolute Einheit — sie ergibt den gleichen endgültigen berechneten Wert der Schrift auf der Seite in nahezu jeder Situation.
- `em`s: 1 `em` entspricht der Schriftgröße, die auf das übergeordnete Element des aktuellen gestylten Elements gesetzt ist (genauer gesagt, die Breite eines Großbuchstaben „M“, der im Elterelement enthalten ist). Dies kann schwierig nachzuvollziehen sein, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, aber es ist machbar, wie unten zu sehen ist. Warum sich die Mühe machen? Es ist recht natürlich, wenn man sich daran gewöhnt hat, und Sie können `em` verwenden, um alles zu skalieren, nicht nur Text. Sie können eine ganze Webseite mit `em` skalieren, was die Pflege erleichtert.
- `rem`s: Diese funktionieren genauso wie `em`, außer dass 1 `rem` der Schriftgröße entspricht, die auf das Wurzelelement des Dokuments (d.h. {{htmlelement("html")}}) gesetzt ist, nicht dem Elternelement. Dies erleichtert die Berechnung Ihrer Schriftgrößen erheblich.

Die `font-size` eines Elements wird von dem Elternelement dieses Elements geerbt. Dies beginnt alles mit dem Wurzelelement des gesamten Dokuments — {{htmlelement("html")}} — dessen Standardgröße in Browsern auf `16px` festgelegt ist. Jeder Absatz (oder ein anderes Element, das keine andere vom Browser gesetzte Größe hat) innerhalb des Wurzelelements hat daher eine endgültige Gener std Text Wingröße von `16px` Zeile, Absätze eine standardgröße. Andere Elemente haben möglicherweise unterschiedliche Standardgrößen. Beispielsweise hat ein {{htmlelement("Heading_Elements", "h1")}}-Element standardmäßig eine Größe von `2em` gesetzt, sodass es letztlich eine Größe von `32px` hat.

Die Dinge werden komplizierter, wenn Sie die Schriftgröße verschachtelter Elemente ändern. Wenn Sie beispielsweise ein {{htmlelement("article")}}-Element auf Ihrer Seite hätten und dessen `font-size` auf 1,5 `em` setzen möchten (was in einer endgültigen Größe von 24 `px` resultieren würde), und dann möchten, dass die Absätze innerhalb des `<article>`-Elements eine berechnete Schriftgröße von `20px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten seinen `em`-Wert auf 20/24 oder 0,83333333 `em` setzen. Die Mathematik kann kompliziert sein, sodass Sie vorsichtig sein müssen, wie Sie Dinge stilisieren. Es ist am besten, `rem` dort zu verwenden, wo Sie können, um die Dinge einfach zu halten, und zu vermeiden, die `font-size` von Container-Elementen festzulegen, wo immer dies möglich ist.

### Schriftstil, Schriftgewicht, Transformation und Dekoration von Text

CSS bietet vier gängige Eigenschaften, um das visuelle Gewicht/den visuellen Akzent von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um Kursivschrift ein- oder auszuschalten. Mögliche Werte umfassen (Sie werden dies selten verwenden, es sei denn, Sie möchten aus irgendeinem Grund kursives Styling deaktivieren):

  - `normal`: Setzt den Text auf die normale Schrift (schaltet vorhandene Kursivschrift aus).
  - `italic`: Setzt den Text auf die Verwendung der kursiven Version der Schriftart, sofern verfügbar; wenn nicht, simuliert es Kursivschrift stattdessen mit schräg.
  - `oblique`: Setzt den Text auf die Verwendung einer simulierten Version einer kursiven Schriftart, die durch das Schrägstellen der normalen Version erstellt wird.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Diese Eigenschaft hat viele verfügbare Werte, falls Sie viele verschiedene Schriftvarianten zur Verfügung haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ usw.), aber realistisch werden Sie selten andere verwenden als `normal` und `bold`:

  - `normal`, `bold`: Normales und fettes Schriftgewicht.
  - `lighter`, `bolder`: Setzt die Fettstärke des aktuellen Elements auf einen Schritt leichter oder schwerer als die Fettstärke seines übergeordneten Elements.
  - `100` – `900`: Numerische Werte für die Fettstärke, die eine feinere Kontrolle als die obigen Schlüsselwörter bieten, falls nötig.

- {{cssxref("text-transform")}}: Ermöglicht es, Ihre Schrift in eine andere Form zu transformieren. Werte umfassen:

  - `none`: Verhindert jegliche Transformation.
  - `uppercase`: Wandelt den gesamten Text in Großbuchstaben um.
  - `lowercase`: Wandelt den gesamten Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter so um, dass der erste Buchstabe großgeschrieben ist.
  - `full-width`: Wandelt alle Glyphen so um, dass sie in einem festen quadratischen Bereich geschrieben werden, ähnlich wie bei einer Monospace-Schriftart, sodass z.B. lateinische Zeichen zusammen mit asiatischen Sprachzeichen (wie Chinesisch, Japanisch, Koreanisch) ausgerichtet werden können.

- {{cssxref("text-decoration")}}: Legt Textdekorationen auf oder entfernt sie von Schriftarten (Sie werden dies hauptsächlich verwenden, um die Standardunterstreichung von Links beim Stylen zu entfernen). Verfügbare Werte sind:

  - `none`: Entfernt jegliche bereits vorhandene Textdekorationen.
  - `underline`: Unterstreicht den Text.
  - `overline`: Fügt eine Linie über dem Text hinzu.
  - `line-through`: Fügt einen Durchstrich durch den Text hinzu.

  Beachten Sie, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, zum Beispiel `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzform für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzeugen, zum Beispiel: `text-decoration: line-through red wavy`.

Lassen Sie uns einige dieser Eigenschaften zu unserem Beispiel hinzufügen:

Unser neues Ergebnis sieht so aus:

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

Sie können Ihren Text mit der {{cssxref("text-shadow")}}-Eigenschaft mit Schlagschatten versehen. Diese nimmt bis zu vier Werte an, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Abstand des Schattens vom ursprünglichen Text — dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) aufnehmen, aber Sie werden am häufigsten `px` verwenden; positive Werte verschieben den Schatten nach rechts und negative Werte nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Abstand des Schattens vom ursprünglichen Text. Dies verhält sich ähnlich wie der horizontale Abstand, außer dass es den Schatten nach oben/unten und nicht nach links/rechts verschiebt. Dieser Wert muss enthalten sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter verstreut wird. Wenn dieser Wert nicht enthalten ist, wird er standardmäßig auf 0 gesetzt, was bedeutet, dass keine Unschärfe vorhanden ist. Dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) annehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Far Beinheit](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) aufnehmen kann. Wenn nicht enthalten, wird sie standardmäßig auf [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) gesetzt, d.h. die Schattenfarbe wird von der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrere Schatten

Sie können demselben Text mehrere Schatten zuweisen, indem Sie mehrere Schattendefinitionen durch Kommas getrennt aufnehmen, zum Beispiel:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "h1")}}-Element in unserem "Tommy The Cat"-Beispiel anwenden, würden wir folgendes Ergebnis erhalten:

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
> Sie können weitere interessante Beispiele zur Verwendung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) finden.

## Textlayout

Mit den grundlegenden Schriftarten-Eigenschaften, lassen Sie uns einen Blick auf die Eigenschaften werfen, die wir verwenden können, um das Textlayout zu beeinflussen.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie Text innerhalb seines enthaltenden Inhaltsbereichs ausgerichtet wird. Die verfügbaren Werte sind unten aufgeführt. Sie funktionieren in etwa genauso wie in einer regulären Textverarbeitungsanwendung:

- `left`: Linksbündigt den Text.
- `right`: Rechtsbündigt den Text.
- `center`: Zentriert den Text.
- `justify`: Verteilt den Text so, dass die Abstände zwischen den Wörtern variieren, sodass alle Textzeilen die gleiche Breite haben. Sie müssen dies sorgfältig verwenden — es kann schrecklich aussehen, insbesondere wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden möchten, sollten Sie auch in Erwägung ziehen, zusätzlich etwas anderes zu verwenden, wie {{cssxref("hyphens")}}, um einige der längeren Wörter über Zeilen hinweg zu unterbrechen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "h1")}}-Element in unserem Beispiel anwenden würden, würden wir dieses Ergebnis erhalten:

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

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) aufnehmen, sondern auch einheitfreie Werte akzeptieren, die als Multiplikator wirken und im Allgemeinen als die beste Option angesehen werden. Mit einem einheitfreien Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Text im Fließtext sieht im Allgemeinen schöner aus und ist leichter lesbar, wenn der Abstand zwischen den Zeilen größer ist. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelter Zeilenabstand). Um unsere Textzeilen auf 1,6-fache der Schriftgröße festzulegen, würden wir verwenden:

```css
p {
  line-height: 1.6;
}
```

Wenn wir dies auf die {{htmlelement("p")}}-Elemente in unserem Beispiel anwenden, würden wir dieses Ergebnis erhalten:

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

### Buchstaben- und Wortabstände

Die {{cssxref("letter-spacing")}}- und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden sie nicht oft verwenden, könnten aber einen Nutzen finden, um ein spezifisches Aussehen zu erzielen oder die Lesbarkeit einer besonders kompakten Schriftart zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir mit den ersten Zeilen jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel sowohl Wort- als auch Buchstabenabstände anwenden:

```css
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Das rendert unser HTML wie folgt:

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

### Weitere Erwähnenswerte Eigenschaften

Die oben genannten Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie Text auf einer Webseite zu stylen beginnen können, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die obigen Eigenschaften gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Zwischen Kleinbuchstaben und normalen Schriftalternativen wechseln.
- {{cssxref("font-kerning")}}: Schriftkerning ein- oder ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://de.wikipedia.org/wiki/OpenType)-Schriftfunktionen ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Die Verwendung alternativer Glyphen für einen gegebenen Schriftstil steuern.
- {{cssxref("font-variant-caps")}}: Die Verwendung alternativer Großbuchstabenglyphen steuern.
- {{cssxref("font-variant-east-asian")}}: Die Verwendung alternativer Glyphen für ostasiatische Skripte wie Japanisch und Chinesisch steuern.
- {{cssxref("font-variant-ligatures")}}: Steuern, welche Ligaturen und kontextbezogenen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordinalien steuern.
- {{cssxref("font-variant-position")}}: Die Verwendung alternativer Glyphen kleinerer Größen als hoch- oder tiefgestellte Zeichen steuern.
- {{cssxref("font-size-adjust")}}: Die visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße anpassen.
- {{cssxref("font-stretch")}}: Zwischen möglichen alternativen gedehnten Versionen einer gegebenen Schrift wechseln.
- {{cssxref("text-underline-position")}}: Die Position von Unterstreichungen festlegen, die mit dem Wert `underline` der `text-decoration-line`-Eigenschaft gesetzt werden.
- {{cssxref("text-rendering")}}: Versuchen, einige Text-Rendering-Optimierungen durchzuführen.

Textlayoutstile:

- {{cssxref("text-indent")}}: Festlegen, wie viel horizontaler Platz vor Beginn der ersten Zeile des Textinhalts gelassen werden soll.
- {{cssxref("text-overflow")}}: Definieren, wie überfüllte Inhalte, die nicht angezeigt werden, signalisiert werden.
- {{cssxref("white-space")}}: Definieren, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements gehandhabt werden.
- {{cssxref("word-break")}}: Festlegen, ob Zeilen innerhalb von Wörtern geteilt werden dürfen.
- {{cssxref("direction")}}: Definieren, in welche Richtung der Text verläuft. (Dies hängt von der Sprache ab und normalerweise ist es besser, HTML das steuern zu lassen, da es mit dem Textinhalt verbunden ist.)
- {{cssxref("hyphens")}}: Silbentrennung für unterstützte Sprachen ein- und ausschalten.
- {{cssxref("line-break")}}: Zeilenumbrüche für asiatische Sprachen entspannen oder verstärken.
- {{cssxref("text-align-last")}}: Definieren, wie die letzte Zeile eines Blocks oder einer Zeile, unmittelbar vor einem erzwungenen Zeilenbruch, ausgerichtet ist.
- {{cssxref("text-orientation")}}: Die Ausrichtung des Textes auf einer Linie definieren.
- {{cssxref("overflow-wrap")}}: Festlegen, ob der Browser innerhalb von Wörtern Zeilenumbrüche einfügen darf, um Überläufe zu vermeiden.
- {{cssxref("writing-mode")}}: Festlegen, ob Textzeilen horizontal oder vertikal ausgelegt werden und die Richtung, in die nachfolgende Zeilen fließen.

## Kurzform für Schriftarten

Viele Schrifteigenschaften können auch über die Kurzform-Eigenschaft {{cssxref("font")}} gesetzt werden. Diese werden in der folgenden Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, und {{cssxref("font-family")}}.

Von all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn Sie die `font`-Kurzform-Eigenschaft verwenden.

Ein Schrägstrich muss zwischen den Eigenschaften {{cssxref("font-size")}} und {{cssxref("line-height")}} gesetzt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aktives Lernen: Spielen mit Textstilen

In dieser aktiven Lerneinheit haben wir keine spezifischen Übungen für Sie vorbereitet. Wir würden uns freuen, wenn Sie mit einigen Schrift- und Textlayout-Eigenschaften experimentieren. Sehen Sie selbst, was Ihnen einfällt! Sie können dies entweder mit Offline-HTML-/CSS-Dateien tun oder Ihren Code in das unten stehende live bearbeitbare Beispiel eingeben.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen.

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

Wir hoffen, Sie hatten Spaß beim Experimentieren mit Text in diesem Artikel! Der nächste Artikel wird Ihnen alles bieten, was Sie über [das Styling von HTML-Listen](/de/docs/Learn/CSS/Styling_text/Styling_lists) wissen müssen.

{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}
