---
title: Grundlegende Text- und Schriftgestaltung
short-title: Grundlagen der Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Beherrschung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Hier gehen wir alle grundlegenden Prinzipien der Text- und Schriftgestaltung im Detail durch, einschließlich der Einstellung von Schriftgewicht, Familie und Stil, der Schriftkurzform, der Textausrichtung und anderer Effekte sowie der Zeilen- und Buchstabenzwischenräume.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Inhalte mit HTML strukturieren</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Konzepte von Schriftfamilien, Schriftstapeln und web-sicheren Schriften.</li>
          <li>Einstellen von Schriftfarbe, Gewicht, Größe und Stil.</li>
          <li>Einstellen von Textausrichtung, Transformation und Dekoration.</li>
          <li>Einstellen der Zeilenhöhe.</li>
          <li>Wissen, dass es mehrere andere Schrift- und Textgestaltungsmerkmale gibt und dazu ermutigt werden, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist bei der Textgestaltung in CSS zu beachten?

Text innerhalb eines Elements wird innerhalb der [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements ausgerichtet. Er beginnt in der oberen linken Ecke des Inhaltsbereichs (oder in der oberen rechten, im Fall von RTL-Sprachinhalten) und fließt bis zum Ende der Zeile. Sobald das Ende erreicht ist, geht es zur nächsten Zeile und fließt erneut bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in der Box platziert wurde. Textinhalt verhält sich im Wesentlichen wie eine Reihe von Inline-Elementen, die auf benachbarten Zeilen platziert werden und erst am Ende der Zeile Zeilenumbrüche erzeugen, es sei denn, Sie erzwingen manuell einen Zeilenumbruch mit dem {{htmlelement("br")}}-Element.

> [!NOTE]
> Wenn der obige Absatz Sie verwirrt, spielt das keine Rolle — gehen Sie zurück und lesen Sie unseren [Box-Modell-Artikel](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um die Theorie des Box-Modells aufzufrischen, bevor Sie fortfahren.

Die CSS-Eigenschaften zur Textgestaltung fallen im Allgemeinen in zwei Kategorien, auf die wir in diesem Artikel separat eingehen werden:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes beeinflussen, z. B. welche Schrift angewendet wird, deren Größe und ob sie fett, kursiv usw. ist.
- **Textlayout-Stile**: Eigenschaften, die den Abstand und andere Layoutmerkmale des Textes beeinflussen, um z. B. den Abstand zwischen Zeilen und Buchstaben zu manipulieren und festzulegen, wie der Text innerhalb der Inhaltsbox ausgerichtet ist.

> [!NOTE]
> Beachten Sie, dass der Text innerhalb eines Elements als eine einzelne Einheit behandelt wird. Sie können keine Unterabschnitte von Text auswählen und gestalten, es sei denn, Sie umwickeln sie mit einem geeigneten Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden ein text-spezifisches Pseudo-Element wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements aus), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements aus) oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den aktuell vom Cursor hervorgehobenen Text aus).

## Schriften

Schauen wir uns direkt die Eigenschaften an, um Schriften zu gestalten. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf folgendes HTML-Beispiel an:

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

Die {{cssxref("color")}}-Eigenschaft legt die Farbe des Vordergrundinhalts der ausgewählten Elemente fest, was in der Regel der Text ist, aber auch ein paar andere Dinge umfassen kann, wie z. B. eine Unter- oder Überstreichung, die auf Text mithilfe der {{cssxref("text-decoration")}}-Eigenschaft angewendet wird.

`color` kann jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css
p {
  color: red;
}
```

Dies führt dazu, dass die Absätze rot werden, anstatt wie im Standard-Browserstandard schwarz, wie folgt:

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

Um eine andere Schriftart für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — diese ermöglicht es Ihnen, eine Schriftart (oder eine Liste von Schriftarten) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wird eine Schriftart nur dann anwenden, wenn sie auf dem Computer, auf dem die Webseite aufgerufen wird, verfügbar ist; wenn nicht, verwendet er einfach eine [Standardschriftart des Browsers](#standardschriften). Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde dazu führen, dass alle Absätze auf einer Seite die Arial-Schriftart annehmen, die auf jedem Computer zu finden ist.

#### Web sichere Schriftarten

In Bezug auf die Verfügbarkeit von Schriften gibt es nur eine bestimmte Anzahl von Schriftarten, die generell auf allen Systemen verfügbar sind und daher ohne große Sorgen verwendet werden können. Dies sind die sogenannten **web-sicheren Schriften**.

Die meiste Zeit möchten wir als Webentwickler genauere Kontrolle über die Schriften haben, mit denen wir unsere Textinhalte anzeigen. Das Problem besteht darin, einen Weg zu finden, um zu wissen, welche Schriftart auf dem Computer verfügbar ist, auf dem unsere Webseiten betrachtet werden. Es gibt keine Möglichkeit, dies in jedem Fall zu wissen, aber die web-sicheren Schriften sind in fast allen Instanzen der am häufigsten verwendeten Betriebssysteme (Windows, macOS, die gängigsten Linux-Distributionen, Android und iOS) bekannt fast immer verfügbar.

Die Liste der tatsächlich web-sicheren Schriftarten wird sich ändern, während sich Betriebssysteme entwickeln, aber es ist vernünftig, die folgenden Schriftarten zumindest vorerst als web-sicher zu betrachten (viele von ihnen wurden dank der Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90er und frühen 2000er Jahren populär gemacht):

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
        Es wird oft als beste Praxis angesehen, auch <em>Helvetica</em> als bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da ihre Schriftarten zwar fast identisch sind, <em>Helvetica</em> jedoch als schöner geformt gilt, auch wenn <em>Arial</em> breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der <em>Courier New</em> Schriftart namens <em>Courier</em>. Es wird als beste Praxis angesehen, beide mit <em>Courier New</em> als bevorzugter Alternative zu verwenden.
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
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der <em>Times New Roman</em> Schriftart namens <em>Times</em>. Es wird als beste Praxis angesehen, beide mit <em>Times New Roman</em> als bevorzugter Alternative zu verwenden.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig sein, diese Schriftart zu verwenden — sie ist auf mobilen Betriebssystemen nicht weit verbreitet.
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
> Unter verschiedenen Ressourcen führt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste von web-sicheren Schriften, die auf Windows- und macOS-Betriebssystemen verfügbar sind und Ihnen bei Entscheidungen darüber helfen können, was für Ihre Nutzung sicher ist.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, damit Sie Ihre Schriftartnutzung nach Belieben anpassen können: **Web-Schriften**. Dies ist etwas komplexer und wir werden es in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später im Modul besprechen.

#### Standardschriften

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch und das genaue Schriftschnitt, das von diesen generischen Namen verwendet wird, kann zwischen Browser und Betriebssystem auf denen sie angezeigt werden, variieren. Es stellt ein _Worst-Case-Szenario_ dar, bei dem der Browser das Beste versucht, um eine passende Schriftart bereitzustellen. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Angemessenes liefern. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar und wir empfehlen, sie mit Vorsicht zu verwenden und dabei ständig zu testen.

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
        Schriftarten, die Serifen haben (die Schnörkel und anderen kleinen Details, die Sie an den Enden der Striche in einigen Schriftarten sehen).
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
        Schriftarten, bei denen jedes Zeichen die gleiche Breite hat, typischerweise in Codierungen verwendet.
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
        Schriftarten, die das Schreiben von Hand nachahmen sollen, mit fließenden, verbundenen Strichen.
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
      <td>Schriftarten, die dekorativ sein sollen.</td>
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

Da Sie die Verfügbarkeit der Schriftarten, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (sogar eine Web-Schriftart _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** bereitstellen, damit der Browser mehrere Schriftarten zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert, der aus mehreren durch Kommas getrennten Schriftartnamen besteht, z.B.,

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und überprüft, ob diese Schriftart auf dem Rechner verfügbar ist. Ist dies der Fall, wird diese Schriftart auf die ausgewählten Elemente angewendet. Wenn nicht, wird die nächste Schriftart in der Liste geprüft, und so weiter.

Es ist eine gute Idee, einen geeigneten generischen Schriftartnamen am Ende des Stapels anzugeben, so dass, wenn keine der angegebenen Schriftarten verfügbar ist, der Browser zumindest etwas in etwa Passendes bereitstellen kann. Um diesen Punkt zu betonen, erhalten Absätze die Standardschrift des Browsers, nämlich eine Serifenschrift — meist Times New Roman — was für eine serifenlose Schrift nicht ideal ist!

> [!NOTE]
> Während Sie Schriftfamiliennamen, die einen Leerraum enthalten, wie `Trebuchet MS`, ohne den Namen selbst zu zitieren verwenden können, wird empfohlen, Schriftfamiliennamen, die Leerzeichen, Ziffern oder andere Zeichen als Bindestriche enthalten, zu zitieren, um Fehler beim Escaping zu vermeiden.

> [!WARNING]
> Jeder Schriftfamilienname, der als generischer Familienname oder CSS-weites Schlüsselwort interpretiert werden könnte, muss in Anführungszeichen stehen. Obwohl die Schriftfamiliennamen als {{cssxref("custom-ident")}} oder {{cssxref("string")}} eingeschlossen werden können, müssen jene, die den gleichen Namen wie ein CSS-weites Attribut haben, wie `initial` oder `inherit`, oder denselben Namen wie einer der generischen Schriftfamiliennamen, wie `sans-serif` oder `fantasy`, haben, als Zeichenkette eingeschlossen werden. Andernfalls wird der Schriftfamilienname als das entsprechende CSS-Schlüsselwort oder der generische Familienname interpretiert. Bei der Verwendung als Schlüsselwörter dürfen die generischen Schriftfamiliennamen — `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT in Anführungszeichen stehen, da Zeichenketten nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für `font-family`

Fügen wir unserem vorherigen Beispiel hinzu und geben den Absätzen eine serifenlose Schriftart:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Das Ergebnis sieht dann so aus:

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

In unserem vorherigen Modul [CSS Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben wir Längen- und Größeneinheiten überprüft. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten (und anderen, wie [Prozentangaben](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) gemessen werden; jedoch sind die am häufigsten verwendeten Einheiten zur Skalierung von Text:

- `px` (Pixel): Die Anzahl der Pixel hoch, die Sie für den Text wünschen. Dies ist eine absolute Einheit — sie führt in fast allen Situationen zu demselben endgültig berechneten Wert für die Schriftart auf der Seite.
- `em`s: 1 `em` entspricht der eingestellten Schriftgröße des Elternelements des aktuellen Elements, das wir gestalten (genauer gesagt, der Breite eines Großbuchstabens M im Elternelement). Dies kann schwer zu berechnen sein, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, ist aber machbar, wie Sie gleich sehen werden. Warum sich die Mühe machen? Es ist ziemlich natürlich, wenn Sie sich daran gewöhnt haben, und Sie können em verwenden, um alles zu skalieren, nicht nur Text. Sie können eine gesamte Website mit `em` skalieren, was die Wartung erleichtert.
- `rem`s: Diese funktionieren genauso wie `em`, mit dem Unterschied, dass 1 `rem` der Schriftgröße des Wurzelelements des Dokuments (d.h. {{htmlelement("html")}}) entspricht, nicht des Elternelements. Dies erleichtert die mathematische Berechnung Ihrer Schriftgrößen.

Die `font-size` eines Elements wird vom Elternelement des Elements geerbt. Dies beginnt alles mit dem Wurzelelement des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard `font-size` auf `16px` in allen Browsern eingestellt ist. Jeder Absatz (oder ein anderes Element, das keine andere Größe hat, die vom Browser eingestellt wird) innerhalb des Wurzelelements hat eine endgültige Größe von `16px`. Andere Elemente können unterschiedliche Standardgrößen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}}-Element eine Standardgröße von `2em`, sodass es eine endgültige Größe von `32px` hat.

Die Dinge werden komplizierter, wenn Sie beginnen, die Schriftgröße verschachtelter Elemente zu ändern. Zum Beispiel, wenn Sie ein {{htmlelement("article")}}-Element in Ihrer Seite hätten und dessen `font-size` auf 1,5 `em` (was zu 24px endgültiger Größe berechnet wird) festlegen würden und dann wollten, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von `20px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten den `em`-Wert auf 20/24 oder 0,83333333 `em` setzen. Die Mathematik kann kompliziert sein, daher müssen Sie vorsichtig sein, wie Sie Dinge gestalten. Es ist am besten, `rem` dort zu verwenden, wo Sie können, um die Dinge einfach zu halten, und zu vermeiden, die `font-size` von Containerelementen zu setzen, wo möglich.

### Schriftstil, Schriftgewicht, Texttransformation und Textdekoration

CSS bietet vier häufig verwendete Eigenschaften, um das visuelle Gewicht/den Nachdruck von Text zu ändern:

- {{cssxref("font-style")}}: Verwendet, um den Kursivstil ein- oder auszuschalten. Mögliche Werte sind wie folgt (dies verwenden Sie selten, es sei denn, Sie möchten einen bestehenden Kursivstil aus irgendeinem Grund ausschalten):

  - `normal`: Setzt den Text auf die normale Schrift (schaltet bestehenden Kursivstil aus).
  - `italic`: Setzt den Text auf die kursivierte Version der Schrift, wenn verfügbar; andernfalls wird Kursivschrift mit Schrägschrift simuliert.
  - `oblique`: Setzt den Text auf eine simulierte Version einer kursive Schrift, die durch Schräge der normalen Version erstellt wurde.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Es gibt viele verfügbare Werte, falls viele Schriftvarianten verfügbar sind (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ usw.), aber realistisch werden Sie selten mehr als `normal` und `bold` verwenden:

  - `normal`, `bold`: Normales und fettgedrucktes Schriftgewicht.
  - `lighter`, `bolder`: Legt die Fettschrift des aktuellen Elements eine Stufe heller oder dunkler als die Fettschrift des Elternelements fest.
  - `100` – `900`: Numerische Fettschrift-Werte, die eine feinere Kontrolle bieten als die obigen Schlüsselwörter, falls erforderlich.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihre Schrift zu transformieren. Werte umfassen:

  - `none`: Verhindert jede Transformation.
  - `uppercase`: Wandelt den gesamten Text in Großbuchstaben um.
  - `lowercase`: Wandelt den gesamten Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter um, sodass der erste Buchstabe großgeschrieben ist.
  - `full-width`: Wandelt alle Glyphen so um, dass sie innerhalb eines gleichmäßigen fixierten Quadrats geschrieben werden, ähnlich einer Monospace-Schriftart, was die Ausrichtung von z.B. lateinischen Zeichen zusammen mit asiatischen Schriftzeichen (wie Chinesisch, Japanisch, Koreanisch) ermöglicht.

- {{cssxref("text-decoration")}}: Setzt/entfernt Textverzierungen auf Schriften (dies verwenden Sie hauptsächlich, um den Standard-Unterstrich bei Links beim Styling zu entfernen). Verfügbare Werte sind:

  - `none`: Entfernt bereits vorhandene Textverzierungen.
  - `underline`: Unterstreicht den Text.
  - `overline`: Fügt dem Text eine Überstreichung hinzu.
  - `line-through`: Fügt dem Text einen Durchstrich hinzu.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Verzierungen gleichzeitig hinzufügen möchten, z.B. `text-decoration: underline overline`. Beachten Sie außerdem, dass {{cssxref("text-decoration")}} eine Kurzform für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte einsetzen, um interessante Effekte zu erzielen, zum Beispiel: `text-decoration: line-through red wavy`.

Sehen wir uns an, wie Sie einige dieser Eigenschaften zu unserem Beispiel hinzufügen:

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

### Text Schatten

Mit der {{cssxref("text-shadow")}}-Eigenschaft können Sie Schatteneffekte zum Text hinzufügen. Diese Eigenschaft kann bis zu vier Werte annehmen, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom ursprünglichen Text — dieser kann die meisten der verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, aber am häufigsten verwenden Sie `px`; positive Werte verschieben den Schatten nach rechts, und negative Werte nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Versatz des Schattens vom ursprünglichen Text. Dieser verhält sich ähnlich wie der horizontale Versatz, nur dass er den Schatten nach oben/unten verschiebt, nicht links/rechts. Auch dieser Wert muss enthalten sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter verstreut wird. Wenn dieser Wert nicht enthalten ist, ist der Standardwert 0, was keine Unschärfe bedeutet. Dieser kann die meisten der verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Basisfarbe des Schattens, welche jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn dieser nicht enthalten ist, ist der Standardwert [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword), d.h. die Farbe des Schattens wird von der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrfache Schatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere Schattenwerte einfügen, die durch Kommata getrennt sind, z.B.:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Würden wir dies auf das {{htmlelement("Heading_Elements", "h1")}}-Element in unserem Tommy The Cat-Beispiel anwenden, erhielten wir folgendes:

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
> Sie können im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) interessantere Beispiele zur Verwendung von `text-shadow` finden.

## Textlayout

Nachdem die grundlegenden Schriftarten-Eigenschaften behandelt wurden, schauen wir uns einmal an, welche Eigenschaften wir zur Beeinflussung des Textlayouts verwenden können.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie Text innerhalb seiner umgebenden Inhaltsbox ausgerichtet wird. Die verfügbaren Werte sind unten aufgelistet. Sie funktionieren im Wesentlichen genauso wie in einer normalen Textverarbeitungsanwendung:

- `left`: Linksbündige Ausrichtung des Textes.
- `right`: Rechtsbündige Ausrichtung des Textes.
- `center`: Zentriert den Text.
- `justify`: Verteilt den Text gleichmäßig, indem die Abstände zwischen den Wörtern variiert werden, sodass alle Zeilen des Textes gleich breit sind. Sie müssen dies vorsichtig verwenden — es kann schrecklich aussehen, besonders wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden wollen, sollten Sie auch andere Dinge in Betracht ziehen, wie z.B. {{cssxref("hyphens")}}, um einige der längeren Wörter über Zeilen hinweg zu trennen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "h1")}} in unserem Beispiel anwenden würden, sähe das so aus:

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

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern auch einen einheitslosen Wert, der als Multiplikator fungiert und allgemein als die beste Option angesehen wird. Mit einem einheitslosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtext sieht in der Regel schöner aus und ist einfacher zu lesen, wenn die Zeilen mit Abstand versehen sind. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelter Zeilenabstand). Um unsere Textzeilen auf das 1,6-fache der Höhe der Schriftart einzustellen, würden wir verwenden:

```css
p {
  line-height: 1.6;
}
```

Das Anwenden dieser Eigenschaft auf die {{htmlelement("p")}}-Elemente in unserem Beispiel würde zu diesem Ergebnis führen:

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

Die {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}} Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden diese nicht sehr oft verwenden, können jedoch einen coolen Look oder die Lesbarkeit einer besonders dichten Schrift verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Zur Veranschaulichung könnten wir einige Wort- und Buchstabenabstände auf die erste Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel anwenden mit:

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

### Andere Eigenschaften, die es wert sind, untersucht zu werden

Die obigen Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie beginnen, Text auf einer Webseite zu gestalten, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Verwendung der obigen gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Wechseln Sie zwischen Kleinbuchstaben und normalen Alternativen der Schriftart.
- {{cssxref("font-kerning")}}: Option zur Font-Kerning ein- und ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftmerkmale ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Verwendung von alternativen Glyphen für einen bestimmten Schriftschnitt kontrollieren.
- {{cssxref("font-variant-caps")}}: Verwendung von alternativen Großbuchstaben-Glyphen kontrollieren.
- {{cssxref("font-variant-east-asian")}}: Verwendung von alternativen Glyphen für ostasiatische Schriftsysteme wie Japanisch und Chinesisch steuern.
- {{cssxref("font-variant-ligatures")}}: Steuerung darüber, welche Ligaturen und kontextbedingten Formen in Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Kontrollieren der Nutzung alternativer Glyphen für Zahlen, Brüche und Ordinale.
- {{cssxref("font-variant-position")}}: Verwendung von alternativen kleiner großen oder tief gestellten Glyphen steuern.
- {{cssxref("font-size-adjust")}}: Visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße anpassen.
- {{cssxref("font-stretch")}}: Zwischen möglichen alternativen gestreckten Versionen einer bestimmten Schriftart wechseln.
- {{cssxref("text-underline-position")}}: Position der unterstrichenen Bereiche angeben, die mit der `text-decoration-line`-Eigenschaft `underline`-Wert eingestellt sind.
- {{cssxref("text-rendering")}}: Versuchen Sie, einige Textwiedergabeoptimierungen durchzuführen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Angeben, wie viel horizontaler Platz vor dem Beginn der ersten Textzeile verbleiben soll.
- {{cssxref("text-overflow")}}: Definieren, wie überflüssiger Inhalt, der nicht angezeigt wird, den Benutzern signalisiert wird.
- {{cssxref("white-space")}}: Definieren, wie Leerzeichen und zugehörige Zeilenumbrüche im Element gehandhabt werden.
- {{cssxref("word-break")}}: Festlegen, ob Zeilen innerhalb von Wörtern gebrochen werden.
- {{cssxref("direction")}}: Definieren der Textausrichtung. (Dies hängt von der Sprache ab und es ist normalerweise besser, HTML das zu lassen, da es mit dem Textinhalt verknüpft ist.)
- {{cssxref("hyphens")}}: Silbentrennung für unterstützte Sprachen ein- und ausschalten.
- {{cssxref("line-break")}}: Linienumbruch für asiatische Sprachen entspannen oder verstärken.
- {{cssxref("text-align-last")}}: Definieren, wie die letzte Zeile eines Blocks oder eine Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.
- {{cssxref("text-orientation")}}: Ausrichtung des Textes in einer Zeile definieren.
- {{cssxref("overflow-wrap")}}: Angeben, ob der Browser Zeilen innerhalb von Wörtern brechen darf, um Überlauf zu verhindern oder nicht.
- {{cssxref("writing-mode")}}: Definieren, ob Textzeilen horizontal oder vertikal angeordnet werden und in welche Richtung sich die nachfolgenden Zeilen bewegen.

## Schriftkurzform

Viele Schriftspezifische Eigenschaften können auch über die Kurzform {{cssxref("font")}} festgelegt werden. Diese Kurzform wird in folgender Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, und {{cssxref("font-family")}}.

Von all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn Sie die `font`-Kurzform verwenden.

Ein Schrägstrich muss zwischen den {{cssxref("font-size")}} und {{cssxref("line-height")}}-Eigenschaften platziert werden.

Ein vollständiges Beispiel könnte so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aktives Lernen: Mit Textgestaltung spielen

In dieser aktiven Lernsitzung gibt es keine spezifischen Übungen für Sie zu tun. Wir möchten nur, dass Sie sich gut mit einigen Schrift-/Textlayout-Eigenschaften beschäftigen. Sehen Sie selbst, was Sie entwickeln können! Sie können dies entweder mit Offline-HTML/CSS-Dateien tun oder Ihren Code in das untenstehende live bearbeitbare Beispiel eingeben.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche beheben.

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

Wir hoffen, dass Ihnen das Spielen mit Text in diesem Artikel Spaß gemacht hat! Der nächste Artikel wird Ihnen alles Wissenswerte über das Gestalten von HTML-Listen bieten.

## Siehe auch

- [Alles über die CSS-Schriftfamilien-Eigenschaft](https://explainers.dev/font-family/), explainers.dev
- [Web-sichere Schriften](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>_MDN learning partner_</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
