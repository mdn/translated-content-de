---
title: Grundlegende Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Beherrschung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Hier behandeln wir alle grundlegenden Aspekte der Text-/Schriftgestaltung im Detail, einschließlich der Einstellung des Schriftgewichts, der Schriftfamilie und des Stils, Schrift-Kurzschreibweise, Textausrichtung und anderer Effekte sowie der Zeilen- und Buchstabenzwischenräume.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis von Schriftfamilien, Schriftstapeln und web-sicheren Schriften.</li>
          <li>Einstellung der Schriftfarbe, des Gewichts, der Größe und des Stils.</li>
          <li>Einstellung der Textausrichtung, Transformation und Dekoration.</li>
          <li>Einstellung der Zeilenhöhe.</li>
          <li>Wissen, dass es mehrere weitere Schrift- und Textgestaltungs-Eigenschaften gibt, und angeregt werden, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was beinhaltet die Textgestaltung mit CSS?

Text innerhalb eines Elements wird im [Inhaltsfeld](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements angeordnet. Er beginnt in der oberen linken Ecke des Inhaltsbereichs (oder in der oberen rechten Ecke bei RTL-Content) und fließt zum Ende der Zeile. Sobald er das Ende erreicht, geht er zur nächsten Zeile hinunter und fließt erneut zum Ende. Dieses Muster wird wiederholt, bis der gesamte Inhalt im Kasten platziert ist. Textinhalt verhält sich im Wesentlichen wie eine Reihe von Inline-Elementen, die auf benachbarte Linien gesetzt werden, und erstellt keine Zeilenumbrüche, bis das Ende der Zeile erreicht ist, es sei denn, Sie erzwingen manuell einen Zeilenumbruch mit dem {{htmlelement("br")}}-Element.

> [!NOTE]
> Wenn Ihnen der obige Absatz verwirrend erscheint, macht das nichts — gehen Sie zurück und sehen Sie sich unseren Artikel zum [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) an, um die Theorie des Box-Modells aufzufrischen, bevor Sie weitermachen.

Die in der Textgestaltung verwendeten CSS-Eigenschaften fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten werden:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes beeinflussen, z. B. welche Schrift angewendet wird, ihre Größe und ob sie fett, kursiv usw. ist.
- **Texteigenschaftsstile**: Eigenschaften, die den Abstand und andere Layoutmerkmale des Textes beeinflussen und zum Beispiel die Manipulation von Zeilen- und Buchstabenabständen oder die Ausrichtung des Textes im Inhaltsfeld ermöglichen.

> [!NOTE]
> Beachten Sie, dass der Text innerhalb eines Elements als ein einziges Ganzes beeinflusst wird. Sie können keine Unterabschnitte des Textes auswählen und gestalten, es sei denn, Sie umwickeln sie mit einem geeigneten Element (wie {{htmlelement("span")}} oder {{htmlelement("strong")}}) oder verwenden ein text-spezifisches Pseudo-Element wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements) oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den durch den Cursor aktuell markierten Text).

## Schriften

Lassen Sie uns direkt zu den Eigenschaften zur Gestaltung von Schriften übergehen. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel an:

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

Die {{cssxref("color")}}-Eigenschaft setzt die Farbe des Vordergrundinhalts der ausgewählten Elemente, was in der Regel der Text ist, aber auch einige andere Dinge wie eine Unterstreichung oder Überstreichung einschließen kann, die mit der {{cssxref("text-decoration")}}-Eigenschaft auf den Text angewendet wird.

Die `color`-Eigenschaft kann jede [CSS-Farben-Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, beispielsweise:

```css
p {
  color: red;
}
```

Dies bewirkt, dass die Absätze rot werden, anstatt der standardmäßigen Browservoreinstellung von schwarz, wie folgt:

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

Um eine andere Schrift für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — damit können Sie eine Schrift (oder eine Liste von Schriften) angeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wird nur eine Schrift anwenden, wenn sie auf dem Computer verfügbar ist, auf dem die Webseite aufgerufen wird; falls nicht, wird er einfach eine [Standardschrift](#standardschriften) des Browsers verwenden. Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde alle Absätze auf einer Seite dazu bringen, die Arial-Schrift zu übernehmen, die auf jedem Computer zu finden ist.

#### Websichere Schriften

Apropos Verfügbarkeit von Schriften: Es gibt nur eine begrenzte Anzahl von Schriften, die im Allgemeinen auf allen Systemen verfügbar sind und daher ohne große Bedenken verwendet werden können. Dies sind die sogenannten **websicheren Schriften**.

Die meiste Zeit möchten wir als Webentwickler mehr Kontrolle über die Schriften haben, die zur Darstellung unserer Textinhalte verwendet werden. Das Problem besteht darin, eine Möglichkeit zu finden, zu wissen, welche Schriftart auf dem Computer verfügbar ist, der unsere Webseiten anzeigt. Es gibt keine Möglichkeit, dies in jedem Fall zu wissen, aber die websicheren Schriften sind bekannt dafür, auf fast allen Instanzen der am häufigsten verwendeten Betriebssysteme (Windows, macOS, die häufigsten Linux-Distributionen, Android und iOS) verfügbar zu sein.

Die Liste der tatsächlichen websicheren Schriften wird sich mit der Entwicklung von Betriebssystemen ändern, aber es ist vernünftig, die folgenden Schriften derzeit als websicher zu betrachten (viele davon wurden durch die Microsoft-Initiative _[Kernschriften für das Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90ern und frühen 2000ern popularisiert):

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Generischer Typ</th>
      <th scope="col">Notizen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arial</td>
      <td>sans-serif</td>
      <td>
        Es wird oft als Best Practice betrachtet, <em>Helvetica</em> als bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da, obwohl ihre Schriftbilder fast identisch sind, <em>Helvetica</em> als ansprechender in der Form betrachtet wird, selbst wenn <em>Arial</em> breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der <em>Courier New</em>-Schrift namens <em>Courier</em>. Es wird als Best Practice betrachtet, beide mit <em>Courier New</em> als bevorzugte Alternative zu verwenden.
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
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der <em>Times New Roman</em>-Schrift namens <em>Times</em>. Es wird als Best Practice betrachtet, beide mit <em>Times New Roman</em> als bevorzugte Alternative zu verwenden.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig sein mit der Verwendung dieser Schrift — sie ist auf mobilen Betriebssystemen nicht weit verbreitet verfügbar.
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
> Unter verschiedenen Ressourcen pflegt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste von websicheren Schriften, die auf Windows- und macOS-Betriebssystemen verfügbar sind, was Ihnen helfen kann, Ihre Entscheidung zu treffen, was Sie für Ihre Zwecke als sicher betrachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schrift zusammen mit einer Webseite herunterzuladen, um Ihnen zu ermöglichen, Ihre Schriftverwendung in jeder gewünschten Weise anzupassen: **Webfonts**. Dies ist etwas komplexer, und wir werden es in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später in diesem Modul besprechen.

#### Standardschriften

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch und die genaue Schriftart, die von diesen generischen Namen verwendet wird, kann sich zwischen jedem Browser und jedem Betriebssystem, auf dem sie angezeigt werden, unterscheiden. Sie stellen ein _Worst-Case-Szenario_ dar, bei dem der Browser sein Bestes tut, um eine geeignete Schrift bereitzustellen. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Angemessenes bieten. Dagegen sind `cursive` und `fantasy` weniger vorhersehbar, und wir empfehlen, sie sehr sorgfältig zu verwenden und unterwegs zu testen.

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
        Schriftarten, die Serifen haben (die Verzierungen und andere kleine Details, die Sie am Ende der Striche in einigen Schriftarten sehen).
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
        Schriftarten, die beabsichtigt sind, Handschrift zu imitieren, mit fließenden, verbundenen Strichen.
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

Da Sie die Verfügbarkeit der Schriften, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (auch ein Webfont _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** bereitstellen, sodass der Browser mehrere Schriften zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert bestehend aus mehreren durch Kommas getrennten Schriftnamen, z.B.

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob diese Schrift auf dem Computer verfügbar ist. Wenn ja, wird diese Schrift auf die ausgewählten Elemente angewendet. Wenn nicht, geht er zur nächsten Schrift über usw.

Es ist eine gute Idee, am Ende des Stapels einen geeigneten generischen Schriftnamen anzugeben, damit der Browser, falls keine der aufgeführten Schriften verfügbar ist, zumindest etwas ungefähr geeignetes bereitstellen kann. Um diesen Punkt zu verdeutlichen: Absätze erhalten die Standardschrift des Browsers, wenn keine andere Option verfügbar ist — was normalerweise Times New Roman ist — das ist nicht gut für eine sans-serif-Schrift!

> [!NOTE]
> Während Sie Schriftnamen mit einem Leerzeichen wie `Trebuchet MS` ohne Anführungszeichen verwenden können, wird zur Vermeidung von Escaping-Fehlern empfohlen, Schriftfamiliennamen, die Leerzeichen, Ziffern oder andere Satzzeichen als Bindestriche enthalten, zu zitieren.

> [!WARNING]
> Jeder Schriftfamilienname, der als generischer Familienname oder CSS-weites Schlüsselwort fehlinterpretiert werden könnte, muss zitiert werden. Während die Schriftfamiliennamen als {{cssxref("custom-ident")}} oder als {{cssxref("string")}} einbezogen werden können, müssen Schriftfamiliennamen, die zufällig die gleichen wie ein CSS-weites Eigenschaftswert wie `initial`, oder `inherit`, oder CSS einführen, die gleichen Namen wie einer der generischen Schriftfamiliennamen haben, wie `sans-serif` oder `fantasy`, als zitierte Zeichenfolge enthalten sein. Andernfalls wird der Schriftfamilienname als das äquivalente CSS-Schlüsselwort oder der generische Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftfamiliennamen — `serif`, `sans-serif`, `monospace`, `cursive`, und `fantasy` — sowie die globalen CSS-Schlüsselwörter NICHT zitiert werden, da Zeichenfolgen nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für `font-family`

Lassen Sie uns unser vorheriges Beispiel erweitern, indem wir den Absätzen eine sans-serif-Schrift geben:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Dies ergibt das folgende Resultat:

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

Im Artikel [CSS-Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) unseres letzten Moduls haben wir Längen- und Größeneinheiten geprüft. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten (und anderen, wie [Prozentsätze](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) gemessen werden; jedoch sind die häufigsten Einheiten, die Sie zum Größen von Text verwenden werden:

- `px` (Pixel): Die Anzahl der Pixel, die der Text hoch sein soll. Dies ist eine absolute Einheit — sie führt zu demselben endgültigen berechneten Wert für die Schrift auf der Seite in nahezu jeder Situation.
- `em`: 1 `em` ist gleich der Schriftgröße, die für das Elternelement des aktuellen Elements, das wir gestalten, festgelegt ist (genauer gesagt, die Breite eines Großbuchstabens M, der im Elternelement enthalten ist). Dies kann schwierig zu berechnen sein, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich die Mühe machen? Es ist ziemlich natürlich, sobald man sich daran gewöhnt hat, und `em` kann verwendet werden, um alles zu skalieren, nicht nur Text. Sie können eine gesamte Website mit `em` skalieren, was die Wartung erleichtert.
- `rem`: Diese funktionieren genauso wie `em`, außer dass 1 `rem` gleich der Schriftgröße ist, die für das Root-Element des Dokuments (d.h. {{htmlelement("html")}}) festgelegt ist, nicht für das Elternelement. Dies erleichtert die Mathematik, um die Schriftgrößen zu berechnen.

Die `font-size` eines Elements wird von dem Elternelement dieses Elements geerbt. Dies beginnt alles mit dem Root-Element des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard-`font-size` auf `16px` über Browser hinweg festgelegt ist. Jeder Absatz (oder ein anderes Element, das keine andere Größe vom Browser festgelegt hat) innerhalb des Root-Elements hat eine endgültige Größe von `16px`. Andere Elemente können unterschiedliche Standardgrößen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}}-Element standardmäßig eine Größe von `2em` festgelegt, daher wird es eine endgültige Größe von `32px` haben.

Die Dinge werden komplizierter, wenn Sie beginnen, die Schriftgröße von verschachtelten Elementen zu ändern. Wenn Sie beispielsweise ein {{htmlelement("article")}}-Element auf Ihrer Seite hätten und seine `font-size` auf 1,5 `em` festlegen würden (was eine berechnete Endgröße von 24 `px` ergeben würde), und dann möchten, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten den `em`-Wert auf 20/24 oder 0,83333333 `em` setzen. Die Mathematik kann kompliziert sein, daher müssen Sie vorsichtig sein, wie Sie Dinge gestalten. Es ist am besten, `rem` zu verwenden, wo Sie können, um es einfacher zu halten, und vermeiden Sie es, die `font-size` von Containerelementen festzulegen, wo möglich.

### Schriftstil, Schriftgewicht, Textumwandlung und Textdekoration

CSS bietet vier gängige Eigenschaften, um das visuelle Gewicht/die Betonung von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um kursiven Text ein- oder auszuschalten. Mögliche Werte sind wie folgt (Sie werden dies selten verwenden, es sei denn, Sie möchten aus irgendeinem Grund eine kursiv-formatierung ausschalten):

  - `normal`: Setzt den Text auf die normale Schrift zurück (schaltet vorhandene Kursiven aus).
  - `italic`: Setzt den Text auf die kursive Version der Schrift, falls verfügbar; wenn nicht, wird es Kursivschrift mit Schrägschnitt simulieren.
  - `oblique`: Setzt den Text auf eine simulierte Version einer kursiven Schrift, die durch Schrägstellung der normalen Version erstellt wird.

- {{cssxref("font-weight")}}: Bestimmt, wie fett der Text ist. Diese hat viele verfügbare Werte, falls Sie viele Schriftvarianten zur Verfügung haben (wie _-leicht_, _-normal_, _-fett_, _-extrafett_, _-schwarz_ usw.), aber realistisch werden Sie selten etwas davon außer `normal` und `bold` verwenden:

  - `normal`, `bold`: Normale und fette Schriftstärke.
  - `leichter`, `fetter`: Setzt die Fettigkeit des aktuellen Elements eine Stufe leichter oder schwerer als die Fettigkeit des Elternelements.
  - `100` – `900`: Numerische Gewichtswerte, die eine feinere Steuerung als die obigen Schlüsselwörter bieten, falls erforderlich.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihre Schrift in eine andere Form zu transformieren. Werte sind:

  - `none`: Verhindert jede Umwandlung.
  - `uppercase`: Wandelt alle Texte in Großbuchstaben um.
  - `lowercase`: Wandelt alle Texte in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter um, damit der erste Buchstabe groß ist.
  - `full-width`: Wandelt alle Glyphen so um, dass sie in einem festen Breitenquadrat geschrieben werden, ähnlich einer Monospace-Schrift, wodurch es möglich wird, z. B. lateinische Zeichen mit asiatischen Schriftzeichen (wie Chinesisch, Japanisch, Koreanisch) auszurichten.

- {{cssxref("text-decoration")}}: Setzt/entfernt Textdekorationen auf Schriften (hauptsächlich um die Standard-Unterstreichung von Links abzuschalten, wenn Sie sie gestalten). Verfügbare Werte sind:

  - `none`: Entfernt alle bereits vorhandenen Textdekorationen.
  - `underline`: Unterstreicht den Text.
  - `overline`: Fügt dem Text eine Überstreichung hinzu.
  - `line-through`: Fügt einen Durchstrich über den Text hinzu.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, zum Beispiel `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzform-Eigenschaft für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzielen, zum Beispiel: `text-decoration: line-through red wavy`.

Lassen Sie uns einige dieser Eigenschaften in unser Beispiel einfügen:

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

### Textschlagschatten

Sie können Schlagschatten auf Ihren Text mit der {{cssxref("text-shadow")}}-Eigenschaft anwenden. Dies nimmt bis zu vier Werte an, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom ursprünglichen Text — dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, aber Sie werden am häufigsten `px` verwenden; positive Werte bewegen den Schatten nach rechts, negative Werte nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Versatz des Schattens vom ursprünglichen Text. Dies verhält sich ähnlich wie der horizontale Versatz, bewegt jedoch den Schatten nach oben/unten, nicht nach links/rechts. Dieser Wert muss enthalten sein.
3. Der Weichzeichnungsradius: Ein höherer Wert bedeutet, dass der Schatten weiter gestreut wird. Wenn dieser Wert nicht enthalten ist, wird er auf 0 voreingestellt, was keine Weichzeichnung bedeutet. Dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbeneinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn sie nicht enthalten ist, wird `currentcolor` als Standardwert angenommen, d.h. die Farbe des Schattens wird aus der [`color`](/de/docs/Web/CSS/color#currentcolor_keyword)-Eigenschaft des Elements übernommen.

#### Mehrere Schatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere Schattenwerte durch Kommas voneinander trennen, zum Beispiel:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "h1")}}-Element in unserem Tommy The Cat-Beispiel anwenden würden, würden wir folgendes Ergebnis erzielen:

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
> Sie können weitere interessante Beispiele für die Verwendung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) sehen.

## Textlayout

Mit den grundlegenden Schrifteigenschaften erledigt, werfen wir einen Blick auf die Eigenschaften, die wir verwenden können, um das Textlayout zu beeinflussen.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie Text innerhalb seines umgebenden Inhaltsfelds ausgerichtet wird. Die verfügbaren Werte sind unten aufgeführt. Sie funktionieren ziemlich genauso, wie sie es in einer regulären Textverarbeitungsanwendung tun:

- `left`: Linksbündig ausgerichteter Text.
- `right`: Rechtsbündig ausgerichteter Text.
- `center`: Zentriert den Text.
- `justify`: Der Text wird so verteilt, dass alle Zeilen dieselbe Breite haben, indem die Abstände zwischen den Worten variiert werden. Diese Eigenschaft sollte sorgfältig verwendet werden, da sie, besonders bei Absätzen mit vielen langen Wörtern, schlecht aussehen kann. Wenn Sie dies verwenden möchten, sollten Sie in Betracht ziehen, etwas anderes damit zu kombinieren, wie etwa {{cssxref("hyphens")}}, um einige der längeren Wörter über mehrere Zeilen zu trennen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "h1")}} unseres Beispiels anwenden würden, würden wir folgendes Ergebnis bekommen:

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

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern auch einen einheitenlosen Wert, der als Multiplikator fungiert und allgemein als die beste Option betrachtet wird. Bei einem einheitenlosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtext sieht im Allgemeinen schöner aus und ist leichter zu lesen, wenn die Zeilen auseinandergezogen sind. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelter Zeilenabstand). Um unsere Textzeilen auf 1,6 Mal der Höhe der Schrift zu setzen, würden wir folgenden CSS-Code verwenden:

```css
p {
  line-height: 1.6;
}
```

Die Anwendung auf die {{htmlelement("p")}}-Elemente in unserem Beispiel würde folgendes Ergebnis erzeugen:

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

Die {{cssxref("letter-spacing")}}- und {{cssxref("word-spacing")}}-Eigenschaften erlauben Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text zu setzen. Sie werden diese nicht sehr oft verwenden, aber vielleicht bei einem bestimmten Aussehen oder um die Lesbarkeit einer besonders dichten Schrift zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir etwas Wort- und Buchstabenabstand auf die erste Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel anwenden mit folgendem Code:

```css
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Dies rendert unser HTML folgendermaßen:

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

### Weitere erwähnungswerte Eigenschaften

Die oben genannten Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie beginnen können, Text auf einer Webseite zu gestalten, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Verwendung der oben genannten gewöhnt haben, sollten Sie auch die folgenden erforschen:

Schriftstile:

- {{cssxref("font-variant")}}: Wechseln Sie zwischen kleinen Großbuchstaben und normalen Schriftalternativen.
- {{cssxref("font-kerning")}}: Schalten Sie Schriftkerning-Optionen ein und aus.
- {{cssxref("font-feature-settings")}}: Schalten Sie verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftmerkmale ein und aus.
- {{cssxref("font-variant-alternates")}}: Kontrollieren Sie die Verwendung von alternativen Glyphen für eine gegebene Schriftart.
- {{cssxref("font-variant-caps")}}: Kontrollieren Sie die Verwendung von alternativen Großbuchstabenglyphen.
- {{cssxref("font-variant-east-asian")}}: Kontrollieren Sie die Verwendung von alternativen Glyphen für ostasiatische Schriften wie Japanisch und Chinesisch.
- {{cssxref("font-variant-ligatures")}}: Kontrollieren Sie, welche Ligaturen und kontextuellen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Kontrollieren Sie die Verwendung von alternativen Glyphen für Zahlen, Brüche und Ordnungsmarker.
- {{cssxref("font-variant-position")}}: Kontrollieren Sie die Verwendung von alternativen Glyphen kleinerer Größen, die als Hoch- oder Tiefzeichen positioniert sind.
- {{cssxref("font-size-adjust")}}: Passen Sie die visuelle Größe der Schrift von ihrer tatsächlichen Schriftgröße unabhängig an.
- {{cssxref("font-stretch")}}: Wechseln Sie zwischen möglichen alternativen gedehnten Versionen einer gegebenen Schrift.
- {{cssxref("text-underline-position")}}: Legen Sie die Position von Unterstreichungen fest, die mit der `text-decoration-line`-Eigenschaft `underline`-Wert gesetzt sind.
- {{cssxref("text-rendering")}}: Versuchen Sie, einige Text-Rendering-Optimierungen durchzuführen.

Texteigenschaftsstile:

- {{cssxref("text-indent")}}: Geben Sie an, wie viel horizontaler Platz vor dem Anfang der ersten Zeile des Textinhalts gelassen werden soll.
- {{cssxref("text-overflow")}}: Definieren Sie, wie überfließender Inhalt, der nicht angezeigt wird, den Nutzern signalisiert wird.
- {{cssxref("white-space")}}: Definieren Sie, wie Leerzeichen und assoziierte Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Geben Sie an, ob Zeilen innerhalb von Wörtern gebrochen werden sollen.
- {{cssxref("direction")}}: Definieren Sie die Schreibrichtung. (Dies hängt von der Sprache ab und üblicherweise ist es besser, HTML diese Aufgabe zu überlassen, da sie mit dem Textinhalt verbunden ist.)
- {{cssxref("hyphens")}}: Schalten Sie Silbentrennung für unterstützte Sprachen ein und aus.
- {{cssxref("line-break")}}: Entspannen oder verstärken Sie den Zeilenumbruch für asiatische Sprachen.
- {{cssxref("text-align-last")}}: Definieren Sie, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet ist.
- {{cssxref("text-orientation")}}: Definieren Sie die Orientierung des Textes in einer Zeile.
- {{cssxref("overflow-wrap")}}: Geben Sie an, ob der Browser Zeilen innerhalb von Wörtern brechen darf, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Bestimmen Sie, ob Textzeilen horizontal oder vertikal angeordnet sind und in welche Richtung nachfolgende Zeilen fließen.

## Schrift-Kurzform

Viele Schrifteigenschaften können auch über die Kurzschreibweise-Eigenschaft {{cssxref("font")}} festgelegt werden. Diese werden in folgender Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn Sie die `font`-Kurzform-Eigenschaft verwenden.

Ein Schrägstrich muss zwischen den {{cssxref("font-size")}}- und {{cssxref("line-height")}}-Eigenschaften gesetzt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aktives Lernen: Spielen mit der Gestaltung von Text

In dieser aktiven Lernsitzung haben wir keine spezifischen Übungen für Sie vorbereitet. Wir möchten nur, dass Sie ein wenig mit einigen Schrift-/Textlayout-Eigenschaften experimentieren. Sehen Sie selbst, was Sie entwickeln können! Sie können dies entweder mit Offline-HTML/CSS-Dateien tun oder Ihren Code in das untenstehende live editierbare Beispiel eingeben.

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

Wir hoffen, dass Ihnen das Spielen mit Text in diesem Artikel gefallen hat! Der nächste Artikel bietet Ihnen alles, was Sie über die Gestaltung von HTML-Listen wissen müssen.

## Siehe auch

- [Alles über die CSS font-family Eigenschaft](https://explainers.dev/font-family/), explainers.dev
- [Web-sichere Schriftarten](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>_MDN learning partner_</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
