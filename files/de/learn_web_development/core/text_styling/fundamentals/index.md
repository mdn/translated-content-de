---
title: Grundlegende Text- und Schriftart-Styling
short-title: Grundlagen zu Text und Schriftart
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Meisterung des Textstylings mit {{Glossary("CSS", "CSS")}}. Wir gehen alle grundlegenden Aspekte des Text-/Schriftart-Stylings im Detail durch, einschließlich der Einstellung von Schriftstärke, -familie und -stil, Schrift-Kurzschreibweise, Textausrichtung und anderen Effekten sowie Zeilen- und Buchstabenabstand.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturierung von Inhalten mit HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Konzepte von Schriftartfamilien, Schriftstapeln und web-sicheren Schriftarten.</li>
          <li>Einstellung von Schriftfarbe, -stärke, -größe und -stil.</li>
          <li>Einstellung von Textausrichtung, -transformation und -dekoration.</li>
          <li>Festlegung der Zeilenhöhe.</li>
          <li>Erkennen, dass es mehrere andere Schrift- und Textstyling-Eigenschaften gibt, und Ermutigung, diese zu erforschen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was umfasst das Styling von Text in CSS?

Text innerhalb eines Elements wird in der [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements angeordnet. Der Text beginnt im oberen linken Bereich des Inhaltsbereichs (oder im oberen rechten Bereich bei RTL-Sprachinhalt) und fließt zum Ende der Zeile. Wenn das Ende erreicht ist, geht es zur nächsten Zeile und fließt erneut zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in der Box platziert wurde. Textelemente verhalten sich effektiv wie eine Reihe von Inline-Elementen, die nebeneinander auf Zeilen angeordnet sind und keine Zeilenumbrüche erzeugen, bis das Ende der Zeile erreicht ist oder es manuell durch das `<br>`-Element erzwungen wird.

> [!NOTE]
> Wenn der obige Absatz für Verwirrung sorgt, dann macht das nichts — schauen Sie sich unseren [Boxmodell-Artikel](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) an, um Ihr Wissen über die Theorie des Boxmodells aufzufrischen, bevor Sie fortfahren.

Die CSS-Eigenschaften, die zum Stylen von Text verwendet werden, fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten:

- **Schriftstil**: Eigenschaften, die die Schrift eines Textes beeinflussen, z.B., welche Schriftart angewendet wird, deren Größe und ob sie fett oder kursiv ist.
- **Text-Layout-Stile**: Eigenschaften, die den Abstand und andere Layout-Merkmale des Textes beeinflussen und z.B. die Manipulation des Zwischenraums zwischen Zeilen und Buchstaben sowie die Ausrichtung des Texts innerhalb der Inhaltsbox ermöglichen.

> [!NOTE]
> Bedenken Sie, dass der gesamte Text innerhalb eines Elements als eine Einheit behandelt wird. Sie können keine Unterabschnitte eines Textes auswählen und stylen, es sei denn, Sie umschließen sie mit einem geeigneten Element (wie einem `<span>` oder `<strong>`), oder verwenden ein textspezifisches Pseudo-Element wie `::first-letter` (wählt den ersten Buchstaben eines Textelements), `::first-line` (wählt die erste Zeile eines Textelements) oder `::selection` (wählt den derzeit vom Cursor hervorgehobenen Text).

## Schriftarten

Lassen Sie uns direkt zu den Eigenschaften für das Styling von Schriftarten übergehen. In diesem Beispiel werden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel anwenden:

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

Die {{cssxref("color")}}-Eigenschaft setzt die Farbe des Vordergrundinhalts der ausgewählten Elemente, was normalerweise der Text ist, aber auch ein paar andere Dinge einschließen kann, wie ein Unterstrich oder ein Überstrich, der auf Text mit der {{cssxref("text-decoration")}}-Eigenschaft platziert wird.

`color` kann jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css
p {
  color: red;
}
```

Dies bewirkt, dass die Absätze rot statt des standardmäßigen Schwarzes im Browser werden, wie folgt:

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

### Schriftartfamilien

Um eine andere Schriftart für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — diese ermöglicht es, eine Schriftart (oder eine Liste von Schriftarten) zu spezifizieren, die vom Browser auf die ausgewählten Elemente angewendet wird. Der Browser wird nur eine Schriftart anwenden, wenn sie auf dem Computer verfügbar ist, von dem auf die Webseite zugegriffen wird; wenn nicht, wird eine [Standardschriftart](#standardschriftarten) des Browsers verwendet. Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Das würde bewirken, dass alle Absätze auf einer Seite die Schriftart Arial annehmen, die auf jedem Computer zu finden ist.

> [!NOTE]
> Das [Web-safe fonts](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) Scrim von Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Anleitung dazu, warum Schriftarten wichtig sind, web-sichere Schriftarten und wie man Schriftarten in CSS spezifiziert — zusammen mit einer Herausforderung, um Ihr Wissen zu testen.

#### Web sichere Schriftarten

Apropos Schriftartenverfügbarkeit, es gibt nur eine bestimmte Anzahl von Schriftarten, die im Allgemeinen auf allen Systemen verfügbar sind und daher bedenkenlos verwendet werden können. Dies sind die sogenannten **web-sicheren Schriftarten**.

Meistens wollen wir als Webentwickler eine spezifischere Kontrolle über die Schriftarten, die zur Anzeige unserer Textinhalte verwendet werden. Das Problem besteht darin, einen Weg zu finden, herauszufinden, welche Schriftart auf dem Computer verfügbar ist, der unsere Webseiten sieht. Es gibt keine Möglichkeit, dies in jedem Fall zu wissen, aber die web-sicheren Schriftarten sind dafür bekannt, auf fast allen Instanzen der am meisten verwendeten Betriebssysteme (Windows, macOS, die gängigsten Linux-Distributionen, Android und iOS) verfügbar zu sein.

Die Liste der tatsächlichen web-sicheren Schriftarten wird sich ändern, wenn sich Betriebssysteme weiterentwickeln, aber es ist vernünftig, die folgenden Schriftarten, zumindest derzeit, als web-sicher zu betrachten (viele von ihnen wurden dank der Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90ern und frühen 2000ern populär gemacht):

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
        Es wird oft als gute Praxis angesehen, auch <em>Helvetica</em> als bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da, obwohl ihre Schriftbilder fast identisch sind, <em>Helvetica</em> als ansprechender in der Form gilt, auch wenn <em>Arial</em> breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der <em>Courier New</em>-Schriftart namens <em>Courier</em>. Es wird als gute Praxis angesehen, beide zu verwenden, wobei <em>Courier New</em> als bevorzugte Alternative gilt.
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
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der <em>Times New Roman</em>-Schriftart namens <em>Times</em>. Es wird als gute Praxis angesehen, beide zu verwenden, wobei <em>Times New Roman</em> als bevorzugte Alternative gilt.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig sein, wenn Sie diese Schriftart verwenden — sie ist auf mobilen Betriebssystemen nicht weit verbreitet.
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
> Unter verschiedenen Ressourcen pflegt die Seite [cssfontstack.com](https://www.cssfontstack.com/) eine Liste web-sicherer Schriftarten, die auf Windows und macOS verfügbar sind, und kann Ihnen bei Ihrer Entscheidung helfen, was für Ihre Nutzung sicher ist.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, um Ihnen die Anpassung der Schriftarten in beliebiger Weise zu ermöglichen: **Web-Schriftarten**. Das ist ein wenig komplexer, und wir werden dies in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später in diesem Modul besprechen.

#### Standardschriftarten

CSS definiert fünf generische Namen für Schriftarten: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr allgemein und die genaue Schriftart, die aus diesen generischen Namen verwendet wird, kann je nach Browser und Betriebssystem, auf dem sie angezeigt werden, variieren. Es stellt ein _Worst-Case-Szenario_ dar, bei dem der Browser sein Bestes tun wird, um eine Schriftart bereitzustellen, die angemessen aussieht. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Vernünftiges bieten. Auf der anderen Seite sind `cursive` und `fantasy` weniger vorhersehbar, und wir empfehlen, sie sehr vorsichtig zu verwenden und beim Testen sorgfältig vorzugehen.

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
        Schriftarten, die Serifen (die Verzierungen und andere kleine Details, die an den Enden der Striche in einigen Schriftarten zu sehen sind) haben.
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
      <td>Schriftarten, die keine Serifen besitzen.</td>
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
        Schriftarten, bei denen jedes Zeichen dieselbe Breite hat, typischerweise in Code-Auflistungen verwendet.
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
        Schriftarten, die darauf abzielen, Handschrift nachzuahmen, mit fließenden, verbundenen Strichen.
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
      <td>Schriftarten, die zur Dekoration gedacht sind.</td>
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

Da Sie die Verfügbarkeit der Schriftarten, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (auch eine Webschrift könnte aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** bereitstellen, sodass der Browser mehrere Schriftarten zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert, der aus mehreren Schriftartnamen besteht, die durch Kommas getrennt sind, z.B.

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob diese Schriftart auf dem Computer verfügbar ist. Wenn ja, wird diese Schriftart auf die ausgewählten Elemente angewendet. Wenn nicht, wird zur nächsten Schriftart übergangen und so weiter.

Es ist eine gute Idee, am Ende des Stapels einen geeigneten generischen Schriftartnamen anzugeben, sodass der Browser zumindest etwas annähernd Passendes bereitstellen kann, wenn keine der aufgeführten Schriftarten verfügbar ist. Um diesen Punkt zu betonen, erhalten Absätze die Standardschriftart des Browsers, wenn keine andere Option verfügbar ist – was normalerweise Times New Roman ist – das ist keine gute Wahl für eine sans-serif Schriftart!

> [!NOTE]
> Obwohl Sie Schriftarten-Namen verwenden können, die Leerzeichen enthalten, wie `Trebuchet MS`, ohne die Namen mit Anführungszeichen zu versehen, wird empfohlen, Schriftarten-Namen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten, zu zitieren, um Fehler beim Escaping zu vermeiden.

> [!WARNING]
> Jeder Schriftartenname, der falsch als generischer Schriftartname oder CSS-weites Schlüsselwort interpretiert werden könnte, muss in Anführungszeichen gesetzt werden. Während Schriftfamiliennamen als {{cssxref("custom-ident")}} oder {{cssxref("string")}} eingeschlossen werden können, müssen Schriftarten-Namen, die zufällig denselben Namen wie ein CSS-weites Eigenschaftswert haben, wie `initial`, `inherit`, oder die denselben Namen wie einer der generischen Schriftartenfamiliennamen, wie `sans-serif` oder `fantasy`, haben, als zitierte Strings angegeben werden. Andernfalls wird der Schriftartenname als gleichwertiges CSS-Schlüsselwort oder generischer Schriftartname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftartennamen —`serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT in Anführungszeichen gesetzt werden, da Strings nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein font-family Beispiel

Lassen Sie uns unser vorheriges Beispiel erweitern, indem wir den Absätzen eine sans-serif-Schriftart geben:

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

In unserem vorherigen Modulartikel [CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben wir Längen- und Größeneinheiten überprüft. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten gemessen werden (und andere, wie [Prozentsätze](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)); Die am häufigsten verwendeten Einheiten zur Größenbestimmung von Text sind jedoch:

- `px` (Pixel): Die Anzahl der Pixel, die der Text hoch sein soll. Dies ist eine absolute Einheit — sie führt in fast jeder Situation zu demselben endgültigen berechneten Wert für die Schrift der Seite.
- `em`s: 1 `em` ist gleich der Schriftgröße, die auf das Elternelement des aktuellen Elements, das wir stylen, eingestellt ist (genauer gesagt, die Breite eines Großbuchstabens M, der sich im Elternelement befindet). Das kann schwierig zu berechnen sein, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich die Mühe machen? Es ist ziemlich natürlich, wenn Sie sich daran gewöhnen, und Sie können `em` verwenden, um alles zu dimensionieren, nicht nur Text. Sie können eine gesamte Website in `em` dimensionieren, was die Wartung erleichtert.
- `rem`s: Diese funktionieren genau wie `em`s, außer dass 1 `rem` gleich der Schriftgröße ist, die auf das Wurzelelement des Dokuments (d.h. {{htmlelement("html")}}) eingestellt ist, nicht das Elternelement. Dies erleichtert das Rechnen bei der Berechnung Ihrer Schriftgrößen erheblich.

Die `font-size` eines Elements wird von dem Elternelement dieses Elements geerbt. Alles beginnt mit dem Wurzelelement des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard-`font-size` in den Browsern auf `16px` eingestellt ist. Jeder Absatz (oder ein anderes Element, dem keine andere Größe vom Browser zugewiesen wurde) innerhalb des Wurzelelements hat eine endgültige Größe von `16px`. Andere Elemente können unterschiedliche Standardgrößen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}}-Element standardmäßig eine Größe von `2em`, sodass es eine endgültige Größe von `32px` hat.

Die Dinge werden komplizierter, wenn Sie die Schriftgröße von verschachtelten Elementen ändern. Wenn Sie beispielsweise ein {{htmlelement("article")}}-Element auf Ihrer Seite hätten und seine `font-size` auf 1,5 `em` einstellen würden (was zu einer endgültigen Größe von 24 `px` berechnet wird), und dann möchten, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten ihren `em`-Wert auf 20/24 oder 0.83333333 `em` setzen. Die Mathematik kann kompliziert sein, also müssen Sie vorsichtig bei der Stilgestaltung sein. Es ist am besten, `rem` zu verwenden, wo immer Sie können, um die Dinge einfach zu halten, und zu vermeiden, die `font-size` von Container-Elementen zu setzen, wo möglich.

### Schriftstil, Schriftstärke, Texttransformation und Textdekoration

CSS bietet vier allgemeine Eigenschaften, um das visuelle Gewicht/den visuellen Schwerpunkt von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um Kursive ein- oder auszuschalten. Mögliche Werte sind wie folgt (Sie werden dies selten verwenden, es sei denn, Sie möchten einen bestehenden kursive Stil aus irgendeinem Grund ausschalten):

  - `normal`: Setzt den Text auf den normalen Schriftstil (schaltet bestehende Kursive aus).
  - `italic`: Setzt den Text auf die Verwendung der kursiven Version der Schrift, wenn verfügbar; falls nicht, wird sie mit oblique simuliert.
  - `oblique`: Setzt den Text auf eine simulierte Version einer kursiven Schriftart, die durch Schrägstellung der normalen Version erstellt wird.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Diese hat viele verfügbare Werte, falls Sie viele Schriftvarianten zur Verfügung haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_, etc.), aber realistischerweise werden Sie selten eine davon verwenden, außer `normal` und `bold`:

  - `normal`, `bold`: Normale und fette Schriftstärke.
  - `lighter`, `bolder`: Setzt die Fettdruckstärke des aktuellen Elements um einen Schritt heller oder schwerer als die des Elternelements.
  - `100` – `900`: Numerische Fettheitswerte, die eine feinere Kontrolle als die obigen Schlüsselwörter bieten, falls benötigt.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihren Text zu transformieren. Werte umfassen:

  - `none`: Verhindert jegliche Transformation.
  - `uppercase`: Wandelt den gesamten Text in Großbuchstaben um.
  - `lowercase`: Wandelt den gesamten Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter so um, dass der erste Buchstabe großgeschrieben wird.
  - `full-width`: Wandelt alle Glyphen um, sodass sie innerhalb eines festen Breitenrahmens geschrieben werden, ähnlich wie bei einer Monospace-Schriftart, was das Ausrichten von z.B. lateinischen Zeichen zusammen mit asiatischen Sprachglyphen (wie Chinesisch, Japanisch, Koreanisch) ermöglicht.

- {{cssxref("text-decoration")}}: Setzt/entfernt Textdekorationen auf Schriften (Sie werden dies hauptsächlich verwenden, um den Standard-Unterstrich auf Links beim Styling zu entfernen). Verfügbare Werte sind:

  - `none`: Hebt alle bereits vorhandenen Textdekorationen auf.
  - `underline`: Unterstreicht den Text.
  - `overline`: Verleiht dem Text einen Überstrich.
  - `line-through`: Fügt dem Text einen Durchstrich hinzu.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, zum Beispiel `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzschreibweise für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzeugen, zum Beispiel: `text-decoration: line-through red wavy`.

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

### Textschlagschatten

Sie können Textschlagschatten mit der {{cssxref("text-shadow")}}-Eigenschaft anwenden. Diese nimmt bis zu vier Werte, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom ursprünglichen Text — dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) verwenden, aber Sie werden am häufigsten `px` verwenden; positive Werte bewegen den Schatten nach rechts und negative Werte nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Versatz des Schattens vom ursprünglichen Text. Dies verhält sich ähnlich wie der horizontale Versatz, außer dass es den Schatten nach oben/unten bewegt, nicht links/rechts. Dieser Wert muss enthalten sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter verstreut wird. Wenn dieser Wert nicht enthalten ist, wird er standardmäßig auf 0 gesetzt, was keine Unschärfe bedeutet. Dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn sie nicht enthalten ist, wird sie standardmäßig auf [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) gesetzt, d.h. die Farbe des Schattens wird von der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrfache Schatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere Schattenwerte durch Kommas getrennt einfügen, zum Beispiel:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "h1")}}-Element in unserem Tommy The Cat-Beispiel anwenden würden, hätten wir dieses Ergebnis:

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
> Sie können interessantere Beispiele für die Nutzung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) sehen.

## Textlayout

Nachdem wir grundlegende Schriftart-Eigenschaften behandelt haben, werfen wir einen Blick auf Eigenschaften, die wir zur Beeinflussung des Textlayouts verwenden können.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie der Text innerhalb seines enthaltenden Inhaltsbereichs ausgerichtet wird. Die verfügbaren Werte sind unten aufgelistet. Sie funktionieren im Grunde genauso wie in einer regulären Textverarbeitungsanwendung:

- `left`: Richtet den Text linksbündig aus.
- `right`: Richtet den Text rechtsbündig aus.
- `center`: Zentriert den Text.
- `justify`: Lässt den Text sich ausbreiten, indem die Lücken zwischen den Wörtern so variiert werden, dass alle Textzeilen gleich breit sind. Sie müssen dies sorgfältig verwenden — es kann schrecklich aussehen, insbesondere wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden möchten, sollten Sie auch in Betracht ziehen, etwas anderes wie {{cssxref("hyphens")}}, zu verwenden, um einige der längeren Wörter über Zeilen hinweg zu brechen.

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

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern auch einen wertlosen Wert, der als Multiplikator fungiert und im Allgemeinen als die beste Option betrachtet wird. Mit einem wertlosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtext sieht im Allgemeinen besser aus und ist leichter lesbar, wenn die Zeilen auseinander stehen. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelter Abstand). Um unsere Textzeilen auf 1,6-fache der Höhe der Schrift einzustellen, würden wir verwenden:

```css
p {
  line-height: 1.6;
}
```

Durch die Anwendung auf die {{htmlelement("p")}}-Elemente in unserem Beispiel erhalten wir dieses Ergebnis:

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

Die {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden diese nicht sehr oft verwenden, könnten jedoch eine Verwendung finden, um einen bestimmten Look zu erzielen oder die Lesbarkeit einer besonders dichten Schriftart zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir den Wort- und Buchstabenabstand in der ersten Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel anwenden mit:

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

### Weitere nennenswerte Eigenschaften

Die obigen Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie mit dem Styling von Text auf einer Webseite beginnen können, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Verwendung der obigen gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstil:

- {{cssxref("font-variant")}}: Wechselt zwischen Kleinbuchstaben und normalen Schriftalternativen.
- {{cssxref("font-kerning")}}: Schaltet Schriftarten-Kerning-Optionen ein und aus.
- {{cssxref("font-feature-settings")}}: Schaltet verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftartenmerkmale ein und aus.
- {{cssxref("font-variant-alternates")}}: Kontrolliert die Verwendung alternativer Glyphen für ein bestimmtes Schriftbild.
- {{cssxref("font-variant-caps")}}: Kontrolliert die Verwendung alternativer Großbuchstabenglyphen.
- {{cssxref("font-variant-east-asian")}}: Kontrolliert die Verwendung alternativer Glyphen für ostasiatische Schriften, wie Japanisch und Chinesisch.
- {{cssxref("font-variant-ligatures")}}: Kontrolliert, welche Ligaturen und kontextuellen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Kontrolliert die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordnungsziffern.
- {{cssxref("font-variant-position")}}: Kontrolliert die Verwendung alternativer Glyphen kleinerer Größe, die hoch- oder tiefgestellt sind.
- {{cssxref("font-size-adjust")}}: Passt die visuelle Größe der Schriftart unabhängig von ihrer tatsächlichen Schriftgröße an.
- {{cssxref("font-stretch")}}: Schaltet zwischen möglichen alternativen gestreckten Versionen einer bestimmten Schrift um.
- {{cssxref("text-underline-position")}}: Gibt die Position von Unterstrichen an, die mit der `text-decoration-line`-Eigenschaft `underline` gesetzt wurden.
- {{cssxref("text-rendering")}}: Versucht, eine Text-Rendering-Optimierung durchzuführen.

Text-Layout-Stile:

- {{cssxref("text-indent")}}: Gibt an, wie viel horizontaler Platz vor dem Beginn der ersten Zeile des Textinhalts gelassen werden soll.
- {{cssxref("text-overflow")}}: Definiert, wie überfüllter Inhalt, der nicht angezeigt wird, dem Benutzer signalisiert wird.
- {{cssxref("white-space")}}: Definiert, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements gehandhabt werden.
- {{cssxref("word-break")}}: Gibt an, ob Zeilen in Wörtern unterbrochen werden sollen.
- {{cssxref("direction")}}: Definiert die Textrichtung. (Dies hängt von der Sprache ab und normalerweise ist es besser, HTML dies behandeln zu lassen, da es mit dem Textinhalt verbunden ist.)
- {{cssxref("hyphens")}}: Schaltet Silbentrennung für unterstützte Sprachen ein und aus.
- {{cssxref("line-break")}}: Entspannt oder verstärkt den Zeilenumbruch für asiatische Sprachen.
- {{cssxref("text-align-last")}}: Definiert, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.
- {{cssxref("text-orientation")}}: Definiert die Orientierung des Textes in einer Zeile.
- {{cssxref("overflow-wrap")}}: Gibt an, ob der Browser möglicherweise Zeilen in Wörtern umbricht, um ein Überlaufen zu verhindern.
- {{cssxref("writing-mode")}}: Definiert, ob Textzeilen horizontal oder vertikal ausgelegt sind und in welche Richtung nachfolgende Zeilen fließen.

## Schrift-Kurzschreibweise

Viele Schrifteigenschaften können auch über die Kurzschreibweise {{cssxref("font")}} festgelegt werden. Diese werden in der folgenden Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}} und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn die `font`-Kurzschreibweise verwendet wird.

Ein Schrägstrich muss zwischen den {{cssxref("font-size")}} und {{cssxref("line-height")}}-Eigenschaften gesetzt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aktives Lernen: Spielen mit Text-Styling

In dieser aktiven Lernsitzung haben wir keine spezifischen Übungen für Sie. Wir möchten nur, dass Sie mit einigen Schrift-/Text-Layout-Eigenschaften experimentieren. Sehen Sie selbst, was Sie erfinden können! Sie können dies entweder mit Offline-HTML/CSS-Dateien tun oder Ihren Code in das live editierbare Beispiel unten eingeben.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste zurücksetzen.

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

Wir hoffen, dass es Ihnen Spaß gemacht hat, mit Text zu spielen! Der nächste Artikel wird Ihnen alles bieten, was Sie über das Styling von HTML-Listen wissen müssen.

## Siehe auch

- [Alles über die CSS-Schriftartfamilie-Eigenschaft](https://explainers.dev/font-family/), explainers.dev
- [Web-sichere Schriftarten](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
