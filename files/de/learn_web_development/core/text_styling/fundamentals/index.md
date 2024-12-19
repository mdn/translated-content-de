---
title: Grundlegende Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Beherrschung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Hier führen wir Sie detailliert durch alle grundlegenden Grundlagen der Text/Schriftgestaltung, einschließlich Einstellung von Schriftstärke, -familie und -stil, Schrift-Kurzschrift, Textausrichtung und andere Effekte sowie Linien- und Zeichenabstand.

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
          <li>Verständnis der Konzepte von Schriftfamilien, Schriftstapeln und web-sicheren Schriften.</li>
          <li>Festlegen von Schriftfarbe, -stärke, -größe und -stil.</li>
          <li>Festlegen von Textausrichtung, -transformation und -dekoration.</li>
          <li>Festlegen der Zeilenhöhe.</li>
          <li>Wissen, dass es mehrere andere Schrift- und Textgestaltungs-Eigenschaften gibt, und ermutigt sein, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was beinhaltet die Textgestaltung in CSS?

Text innerhalb eines Elements wird innerhalb der [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements angeordnet. Er beginnt oben links im Inhaltsbereich (oder oben rechts im Fall von RTL-Sprachinhalten) und fließt bis zum Ende der Zeile. Sobald er das Ende erreicht, geht er zur nächsten Zeile und fließt erneut bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in der Box platziert ist. Textinhalte verhalten sich effektiv wie eine Reihe von Inline-Elementen, die aufeinanderfolgende Zeilen belegen und bis zum Ende der Zeile keinen Zeilenumbruch erzeugen, es sei denn, Sie erzwingen manuell einen Zeilenumbruch mit dem {{htmlelement("br")}}-Element.

> [!NOTE]
> Wenn Sie der obige Absatz verwirrt, dann macht das nichts - gehen Sie zurück und lesen Sie unseren Artikel zum [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) noch einmal durch, um die Box-Modell-Theorie aufzufrischen, bevor Sie weitermachen.

Die CSS-Eigenschaften, die zum Stylen von Text verwendet werden, fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel getrennt betrachten:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes beeinflussen, z.B. welche Schrift angewendet wird, ihre Größe und ob sie fett, kursiv usw. ist.
- **Textlayout-Stile**: Eigenschaften, die den Abstand und andere Layoutmerkmale des Textes beeinflussen und es ermöglichen, zum Beispiel den Abstand zwischen Zeilen und Buchstaben zu manipulieren und wie der Text innerhalb der Inhaltsbox ausgerichtet ist.

> [!NOTE]
> Beachten Sie, dass der Text innerhalb eines Elements als eine einzige Entität beeinflusst wird. Sie können keine Unterabschnitte des Textes auswählen und stylen, es sei denn, Sie umwickeln sie mit einem geeigneten Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden ein text-spezifisches Pseudo-Element wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements aus), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements aus) oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den Text aus, der gerade vom Cursor hervorgehoben wird).

## Schriften

Schauen wir uns gleich die Eigenschaften zur Schriftgestaltung an. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf folgendes HTML-Beispiel an:

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

Die {{cssxref("color")}}-Eigenschaft legt die Farbe der Vordergrundinhalte der ausgewählten Elemente fest, was normalerweise der Text ist, aber möglicherweise auch ein paar andere Dinge umfasst, wie ein Unterstrich oder Überstrich, der auf Text unter Verwendung der {{cssxref("text-decoration")}}-Eigenschaft gesetzt wird.

`color` kann jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css
p {
  color: red;
}
```

Dies lässt die Absätze rot werden, anstatt dem Standardbrowser-Standard von Schwarz, so:

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

Um eine andere Schrift für Ihren Text zu setzen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — sie ermöglicht es Ihnen, eine Schriftart (oder eine Liste von Schriftarten) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wird nur eine Schriftart anwenden, wenn sie auf dem Rechner verfügbar ist, auf dem die Website aufgerufen wird; wenn nicht, wird er einfach eine [Standardschriftart](#standardschriften) des Browsers verwenden. Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde dazu führen, dass alle Absätze auf einer Seite die Arial-Schriftart annehmen, die auf jedem Computer zu finden ist.

#### Web-sichere Schriften

Apropos Schriftverfügbarkeit, es gibt nur eine bestimmte Anzahl von Schriften, die im Allgemeinen auf allen Systemen verfügbar sind und daher ohne große Sorgen verwendet werden können. Dies sind die sogenannten **web-sicheren Schriften**.

Die meiste Zeit wollen wir als Webentwickler spezifischere Kontrolle über die Schriften haben, die zur Anzeige unserer Textinhalte verwendet werden. Das Problem besteht darin, einen Weg zu finden, um zu wissen, welche Schriftart auf dem Computer verfügbar ist, mit dem unsere Webseiten angesehen werden. Es gibt keine Möglichkeit, dies in jedem Fall zu wissen, aber die web-sicheren Schriftarten sind bekannt dafür, auf fast allen Instanzen der am häufigsten verwendeten Betriebssysteme (Windows, macOS, die häufigsten Linux-Distributionen, Android und iOS) verfügbar zu sein.

Die Liste der tatsächlichen web-sicheren Schriftendaten wird sich mit der Weiterentwicklung der Betriebssysteme ändern, aber es ist vernünftig, die folgenden Schriftarten als web-sicher zu betrachten, zumindest vorerst (viele von ihnen wurden dank der Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90er und frühen 2000er Jahren populär gemacht):

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
        bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da, obwohl ihre
        Schriftbilder nahezu identisch sind, <em>Helvetica</em> als schöner
        geformt gilt, auch wenn <em>Arial</em> breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere)
        Version der
        <em>Courier New</em>-Schriftart, die <em>Courier</em> genannt wird. Es
        wird als beste Praxis angesehen, beide zu verwenden, wobei
        <em>Courier New</em> als bevorzugte Alternative gilt.
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
        <em>Times New Roman</em>-Schriftart, die <em>Times</em> genannt wird.
        Es wird als beste Praxis angesehen, beide zu verwenden, wobei
        <em>Times New Roman</em> als bevorzugte Alternative gilt.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig sein, diese Schriftart zu verwenden — sie ist
        nicht weit verbreitet auf mobilen Betriebssystemen verfügbar.
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
> Unter den verschiedenen Ressourcen pflegt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste von web-sicheren Schriftarten, die auf Windows- und macOS-Betriebssystemen verfügbar sind und Ihnen helfen kann, Ihre Entscheidung darüber zu treffen, was Sie als sicher für Ihre Verwendung betrachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, um Ihre Schriftartenverwendung in jeder gewünschten Weise anzupassen: **Web-Schriften**. Dies ist ein wenig komplexer und wir werden es in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später im Modul besprechen.

#### Standardschriften

CSS definiert fünf generische Namen für Schriftarten: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch und die genaue Schriftart, die aus diesen generischen Namen verwendet wird, kann zwischen jedem Browser und jedem Betriebssystem, auf dem sie angezeigt werden, variieren. Es stellt ein _Worst-Case-Szenario_ dar, bei dem der Browser sein Bestes tut, um eine Schriftart bereitzustellen, die angemessen aussieht. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Angemessenes bereitstellen. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar und wir empfehlen, sie sehr sorgfältig zu verwenden und währenddessen zu testen.

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
        Schriften, die Serifen haben (die Verzierungen und andere kleine
        Details, die Sie an den Enden der Striche in einigen Schriftarten
        sehen).
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
        Schriften, bei denen jedes Zeichen die gleiche Breite hat, die
        typischerweise in Code-Listen verwendet werden.
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
        Schriften, die beabsichtigen, eine Handschrift mit fließenden,
        verbundenen Strichen zu imitieren.
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

#### Schriftstellten

Da Sie die Verfügbarkeit der Schriftarten, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (selbst eine web-Schriftart _könnte_ aus irgendeinem Grund ausfallen), können Sie einen **Schriftstapel** angeben, damit der Browser mehrere Schriftarten zur Auswahl hat. Dazu gehört ein `font-family`-Wert, der aus mehreren durch Kommas getrennten Schriftartnamen besteht, z.B.

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und sucht, ob diese Schriftart auf dem Rechner verfügbar ist. Wenn sie verfügbar ist, wendet sie diese Schrift auf die ausgewählten Elemente an. Wenn nicht, geht es zur nächsten Schriftart weiter und so weiter.

Es ist eine gute Idee, einen geeigneten generischen Schriftartnamen am Ende des Stapels anzugeben, damit der Browser, wenn keine der angegebenen Schriftarten verfügbar ist, wenigstens etwas annäherungsweise Passendes bereitstellen kann. Um diesen Punkt zu verdeutlichen, werden Absätze mit der Standard-Serifenschriftart des Browsers versehen, wenn keine andere Option verfügbar ist – was normalerweise Times New Roman ist – was für eine serifenlose Schriftart nicht gut ist!

> [!NOTE]
> Während Sie Schriftfamiliennamen verwenden können, die einen Raum enthalten, wie `Trebuchet MS`, ohne den Namen zu zitieren, wird empfohlen, Schriftfamiliennamen zu zitieren, die Leerzeichen, Ziffern oder Interpunktionszeichen außer Bindestrichen enthalten, um Auszeichnungsfehler zu vermeiden.

> [!WARNING]
> Jeglicher Schriftfamilienname, der als generischer Familienname oder CSS-weites Schlüsselwort fehlinterpretiert werden könnte, muss zitiert werden. Während die Schriftfamiliennamen als {{cssxref("custom-ident")}} oder {{cssxref("string")}} enthalten sein können, müssen Schriftfamiliennamen, die zufällig den gleichen Namen wie ein CSS-weites Eigenschaftswert, wie `initial` oder `inherit` oder ein generischer Schriftfamilienname haben, wie `sans-serif` oder `fantasy`, als zitierter String hinzugefügt werden. Andernfalls wird der Schriftfamilienname als das entsprechende CSS-Schlüsselwort oder der generische Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftfamiliennamen — `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT zitiert werden, da Strings nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für eine Schriftfamilie

Fügen wir unserem vorherigen Beispiel noch mehr hinzu, indem wir den Absätzen eine serifenlose Schriftart geben:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Dies gibt uns das folgende Ergebnis:

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

In unserem vorherigen Modul-Artikel zu [CSS-Werten und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben wir Längen- und Größeneinheiten überprüft. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte in den meisten dieser Einheiten (und andere, wie [Prozentwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) annehmen; jedoch sind die gebräuchlichsten Einheiten, die Sie zur Skalierung von Text verwenden,:

- `px` (Pixel): Die Anzahl der Pixel, die Sie für die Höhe des Textes möchten. Dies ist eine absolute Einheit – sie führt zu dem gleichen endgültigen berechneten Wert für die Schriftart auf der Seite in so gut wie jeder Situation.
- `em`: 1 `em` ist gleich der Schriftgröße, die auf das übergeordnete Element des aktuellen Elements gesetzt ist, das wir stilisieren (genauer gesagt, die Breite eines großen Buchstabens M, der innerhalb des übergeordneten Elements enthalten ist). Dies kann schwierig zu berechnen sein, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftsätzen haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich darum kümmern? Es ist recht natürlich, sobald man sich daran gewöhnt hat, und `em` kann zur Skalierung von allem verwendet werden, nicht nur von Text. Sie können eine ganze Website mit `em` skalieren, was die Wartung einfach macht.
- `rem`: Diese arbeiten genauso wie `em`, außer dass 1 `rem` gleich der auf das Hauptelement des Dokuments (d.h. {{htmlelement("html")}}) gesetzten Schriftgröße und nicht dem übergeordneten Element entspricht. Dies macht das Berechnen Ihrer Schriftgrößen viel einfacher.

Die `font-size` eines Elements wird von diesem über dessen übergeordnetem Element geerbt. Dies beginnt alles mit dem Hauptelement des gesamten Dokuments – {{htmlelement("html")}} – dessen Standard-`font-size` in den Browsern auf `16px` gesetzt ist. Jeder Absatz (oder ein anderes Element, das keine andere Größe vom Browser vorgegeben hat) innerhalb des Hauptelements hat eine endgültige Größe von `16px`. Andere Elemente können unterschiedliche Standardgrößen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}}-Element eine Größe von standardmäßig `2em`, also hat es eine endgültige Größe von `32px`.

Die Dinge werden komplizierter, wenn Sie beginnen, die Schriftgröße von verschachtelten Elementen zu ändern. Wenn Sie zum Beispiel ein {{htmlelement("article")}}-Element auf Ihrer Seite haben und dessen `font-size` auf 1.5 `em` (was zu einer endgültigen Größe von 24 `px` führen würde) setzen und dann möchten, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten seinen `em`-Wert auf 20/24 oder 0.83333333 `em` setzen. Die Mathematik kann kompliziert sein, also müssen Sie vorsichtig mit dem Styling sein. Es ist am besten, `rem` zu verwenden, wo immer möglich, um die Dinge einfach zu halten und das Setzen der `font-size` der Container-Elemente nach Möglichkeit zu vermeiden.

### Schriftstil, Schriftstärke, Texttransformation und Textdekoration

CSS bietet vier allgemeine Eigenschaften, um das visuelle Gewicht/Hervorhebung des Textes zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um kursiven Text ein- oder auszuschalten. Mögliche Werte sind wie folgt (dies verwenden Sie selten, es sei denn, Sie möchten einen vorhandenen Kursivstil aus irgendeinem Grund entfernen):

  - `normal`: Setzt den Text auf die normale Schrift (schaltet vorhandene Kursivstile aus).
  - `italic`: Setzt den Text auf die Kursivversion der Schriftart, falls verfügbar; falls nicht, wird Kursiv mit Schrägschrift simuliert.
  - `oblique`: Setzt den Text auf eine simulierte Version einer Kursivschrift, die durch Neigung der normalen Version erstellt wird.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Diese Funktion hat viele verfügbare Werte für den Fall, dass Sie viele Schriftvarianten haben (wie z.B. _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ usw.), aber realistisch werden Sie nur selten andere als `normal` und `bold` verwenden:

  - `normal`, `bold`: Normale und fett gedruckte Schriftart.
  - `lighter`, `bolder`: Legen Sie die Fettigkeit des aktuellen Elements eine Stufe heller oder schwerer als die seines übergeordneten Elements fest.
  - `100` – `900`: Numerische Fettigkeitswerte, die feinere Kontrolle als die obigen Schlüsselwörter bieten, falls erforderlich.

- {{cssxref("text-transform")}}: Ermöglicht das Transformieren der Schriftart. Zu den Werten gehören:

  - `none`: Verhindert jegliche Transformation.
  - `uppercase`: Wandelt allen Text in Großbuchstaben um.
  - `lowercase`: Wandelt allen Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter so um, dass sie mit einem Großbuchstaben beginnen.
  - `full-width`: Wandelt alle Glyphen in ein Einheitsfeld um, ähnlich einer Monospace-Schrift, um z.B. lateinische Zeichen zusammen mit asiatischen Spracheglyphen (wie Chinesisch, Japanisch, Koreanisch) auszurichten.

- {{cssxref("text-decoration")}}: Setzt/entfernt Textdekorationen auf Schriften (Sie verwenden diese hauptsächlich, um das Standardunterstreichen bei Links bei deren Gestaltung zu entfernen). Verfügbare Werte sind:

  - `none`: Entfernt alle bereits vorhandenen Textdekorationen.
  - `underline`: Unterstreicht den Text.
  - `overline`: Gibt dem Text eine Überlinien.
  - `line-through`: Fügt dem Text eine Durchstreichung hinzu.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, zum Beispiel `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzschreibeigenschaft für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzeugen, zum Beispiel: `text-decoration: line-through red wavy`.

Schauen wir uns an, wie wir ein paar dieser Eigenschaften zu unserem Beispiel hinzufügen können:

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

Sie können Textschatten mit der {{cssxref("text-shadow")}}-Eigenschaft auf Ihren Text anwenden. Diese nimmt bis zu vier Werte an, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom Originaltext — das kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, aber Sie werden am häufigsten `px` verwenden; positive Werte verschieben den Schatten nach rechts und negative nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Versatz des Schattens vom Originaltext. Dies verhält sich ähnlich wie der horizontale Versatz, außer dass er den Schatten nach oben/unten verschiebt und nicht links/rechts. Dieser Wert muss enthalten sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter verteilt wird. Wenn dieser Wert nicht enthalten ist, entspricht er standardmäßig 0, was bedeutet, dass keine Unschärfe vorliegt. Dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn nicht enthalten, entspricht es standardmäßig [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword), d.h., die Farbe des Schattens wird von der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrere Schatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere Schattenwerte durch Kommas getrennt hinzufügen, zum Beispiel:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "h1")}}-Element in unserem Tommy The Cat-Beispiel anwenden würden, hätten wir folgendes Ergebnis:

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
> Sie können mehr interessante Beispiele zur Verwendung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) finden.

## Textlayout

Mit den grundlegenden Schrifteigenschaften aus dem Weg, schauen wir uns Eigenschaften an, die wir verwenden können, um das Textlayout zu beeinflussen.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie Text innerhalb seiner enthaltenden Inhaltsbox ausgerichtet wird. Die verfügbaren Werte sind unten aufgelistet. Sie funktionieren im Wesentlichen genauso wie in einer regulären Textverarbeitungsanwendung:

- `left`: Linksbündigt den Text.
- `right`: Rechtsbündigt den Text.
- `center`: Zentriert den Text.
- `justify`: Lässt den Text sich ausbreiten, indem die Abstände zwischen den Wörtern variiert werden, so dass alle Zeilen des Textes die gleiche Breite haben. Sie müssen dies sorgfältig anwenden – es kann schrecklich aussehen, insbesondere wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden möchten, sollten Sie auch überlegen, etwas anderes zusammen mit ihm zu verwenden, z.B. {{cssxref("hyphens")}}, um einige der längeren Wörter auf Zeilen zu verteilen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "h1")}} in unserem Beispiel anwenden würden, erhalten wir folgendes Ergebnis:

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

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern kann auch einen einheitslosen Wert annehmen, der als Multiplikator fungiert und im Allgemeinen als die beste Option angesehen wird. Mit einem einheitslosen Wert wird die {{cssxref("font-size")}} multipliziert und führt zum `line-height`. Fließtext sieht im Allgemeinen schöner aus und ist leichter zu lesen, wenn die Zeilen voneinander entfernt sind. Die empfohlene Zeilenhöhe liegt bei etwa 1.5 – 2 (doppelter Abstand). Um unsere Textzeilen auf das 1,6-fache der Höhe der Schriftart zu setzen, verwenden wir:

```css
p {
  line-height: 1.6;
}
```

Wenn wir dies auf die {{htmlelement("p")}}-Elemente in unserem Beispiel anwenden würden, erhalten wir dieses Ergebnis:

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

### Zeichen- und Wortabstände

Die {{cssxref("letter-spacing")}}- und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Diese werden Sie nicht sehr oft verwenden, könnten aber einen Nutzen dafür finden, um ein spezifisches Aussehen zu erzielen oder die Lesbarkeit einer besonders dichten Schriftart zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um zu veranschaulichen, könnten wir einige Wort- und Zeichenabstände auf die erste Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel mit:

```css
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Dies rendert unser HTML wie folgt:

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

### Weitere interessante Eigenschaften

Die oben genannten Eigenschaften geben Ihnen einen Eindruck davon, wie Sie mit dem Styling von Text auf einer Webseite beginnen können, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Verwendung der oben genannten gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Zwischen Alternativen in kleinen Großbuchstaben- und Normalschriftarten wechseln.
- {{cssxref("font-kerning")}}: Font-Kerning-Optionen ein- und ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftmerkmale ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Die Verwendung alternativer Glyphen für einen gegebenen Font-Control steuern.
- {{cssxref("font-variant-caps")}}: Die Verwendung alternativer Großbuchstabenglyphe steuern.
- {{cssxref("font-variant-east-asian")}}: Die Verwendung alternativer Glyphen für ostasiatische Skripte wie Japanisch und Chinesisch steuern.
- {{cssxref("font-variant-ligatures")}}: Steuern, welche Ligaturen und kontextuellen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordnungszeichen steuern.
- {{cssxref("font-variant-position")}}: Die Verwendung alternativer Glyphen kleinerer Größen steuern, die als hoch- oder tiefgestellt positioniert sind.
- {{cssxref("font-size-adjust")}}: Die visuelle Größe der Schriftart unabhängig von der tatsächlichen Schriftgröße anpassen.
- {{cssxref("font-stretch")}}: Zwischen möglichen alternativen gedehnten Versionen einer gegebenen Schriftart wechseln.
- {{cssxref("text-underline-position")}}: Die Position von Unterstrichen festlegen, die mit dem `text-decoration-line` Eigenschaftenwert `underline` gesetzt wurden.
- {{cssxref("text-rendering")}}: Versuchen, einige Text-Rendering-Optimierungen durchzuführen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Festlegen, wie viel horizontaler Platz vor dem Beginn der ersten Textzeileninhalte gelassen werden muss.
- {{cssxref("text-overflow")}}: Definieren, wie überlaufene Inhalte, die nicht angezeigt werden, den Benutzern signalisiert werden.
- {{cssxref("white-space")}}: Definieren, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Angeben, ob Zeilen innerhalb von Wörtern gebrochen werden sollen.
- {{cssxref("direction")}}: Den Textfluss definieren. (Dies hängt von der Sprache ab und normalerweise ist es besser, HTML diesen Teil behandeln zu lassen, da es mit dem Textinhalt verbunden ist.)
- {{cssxref("hyphens")}}: Hyphenation für unterstützte Sprachen ein- und ausschalten.
- {{cssxref("line-break")}}: Die Zeilenbrechung für asiatische Sprachen entspannen oder verstärken.
- {{cssxref("text-align-last")}}: Festlegen, wie die letzte Zeile eines Blocks oder einer Zeile, unmittelbar bevor ein erzwungener Zeilenumbruch eintritt, ausgerichtet ist.
- {{cssxref("text-orientation")}}: Die Ausrichtung des Textes in einer Zeile definieren.
- {{cssxref("overflow-wrap")}}: Angegeben, ob der Browser Zeilen innerhalb von Wörtern brechen darf, um ein Überlaufen zu verhindern.
- {{cssxref("writing-mode")}}: Definiert, ob Textzeilen horizontal oder vertikal angeordnet sind und in welche Richtung nachfolgende Zeilen fließen.

## Schrift-Kurzschrift

Viele Schriftspezifische Eigenschaften können auch durch die Kurzschreibweise {{cssxref("font")}} gesetzt werden. Diese werden in dieser Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}} und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn die `font`-Kurzform verwendet wird.

Ein Schrägstrich muss zwischen den {{cssxref("font-size")}}- und {{cssxref("line-height")}}-Eigenschaften gesetzt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aktives Lernen: Mit Textgestaltung spielen

In dieser aktiven Lernsession haben wir keine besonderen Übungen für Sie. Wir möchten nur, dass Sie ein wenig mit einigen Schrift-/Textlayout-Eigenschaften experimentieren. Sehen Sie selbst, was Sie herausfinden können! Sie können dies entweder mit Offline-HTML-/CSS-Dateien tun oder Ihren Code in das unten stehende live-editierbare Beispiel eingeben.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der Schaltfläche _Reset_ zurücksetzen.

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

Wir hoffen, Sie haben das Spielen mit Text in diesem Artikel genossen! Der nächste Artikel wird Ihnen alles bieten, was Sie über das Styling von HTML-Listen wissen müssen.

## Siehe auch

- [Web-sichere Schriftarten](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>_MDN Curriculum-Partner_</sup>
  - : Diese interaktive Lektion bietet einen unterhaltsamen Einblick in web-sichere Schriftarten und deren Anwendung auf ein einfaches Beispiel.

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
