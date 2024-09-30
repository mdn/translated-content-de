---
title: Grundlegende Text- und Schriftgestaltung
slug: Learn/CSS/Styling_text/Fundamentals
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}

In diesem Artikel beginnen Sie Ihre Reise zur Beherrschung der Textgestaltung mit [CSS](/de/docs/Glossary/CSS). Hier behandeln wir alle grundlegenden Grundlagen der Text-/Schriftgestaltung im Detail, einschließlich der Festlegung von Schriftstärke, Schriftfamilie und Stil, Kurzschrift für Schriftarten, Textausrichtung und andere Effekte sowie Zeilen- und Buchstabenabstände.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>), Grundlagen von CSS (siehe
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Eigenschaften und Techniken zur Gestaltung von Texten auf Webseiten zu erlernen.
      </td>
    </tr>
  </tbody>
</table>

## Was beinhaltet die Textgestaltung in CSS?

Text innerhalb eines Elements wird im [Inhaltsbereich](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements angeordnet. Er beginnt links oben im Inhaltsbereich (oder oben rechts bei RTL-Sprachen) und fließt zum Ende der Zeile. Sobald es das Ende erreicht, geht es zur nächsten Zeile und fließt erneut bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in der Box platziert ist. Textinhalte verhalten sich effektiv wie eine Reihe von Inline-Elementen, die in benachbarten Zeilen angeordnet werden und keine Zeilenumbrüche erzeugen, bis das Ende der Zeile erreicht ist, es sei denn, Sie erzwingen einen manuellen Zeilenumbruch mit dem {{htmlelement("br")}}-Element.

> [!NOTE]
> Wenn der obige Absatz Sie verwirrt zurücklässt, macht das nichts — gehen Sie zurück und überprüfen Sie unseren Artikel zum [Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model), um Ihre Theorie zum Boxmodell aufzufrischen, bevor Sie fortfahren.

Die CSS-Eigenschaften, die zur Gestaltung von Text verwendet werden, fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten:

- **Schriftartenstile**: Eigenschaften, die die Schriftart eines Textes beeinflussen, z. B. welche Schriftart angewendet wird, ihre Größe und ob sie fett, kursiv, usw. ist.
- **Textlayout-Stile**: Eigenschaften, die den Abstand und andere Layout-Merkmale des Textes beeinflussen, sodass z. B. der Abstand zwischen Zeilen und Buchstaben und wie der Text im Inhaltsbereich ausgerichtet ist, manipuliert werden kann.

> [!NOTE]
> Beachten Sie, dass der Text in einem Element als eine einzelne Entität beeinflusst wird. Sie können keine Unterabschnitte des Texts auswählen und gestalten, es sei denn, Sie umschließen sie mit einem geeigneten Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden ein text-spezifisches Pseudo-Element wie [::first-letter](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements), [::first-line](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements) oder [::selection](/de/docs/Web/CSS/::selection) (wählt den mit dem Cursor aktuell hervorgehobenen Text) aus.

## Schriften

Schauen wir uns direkt die Eigenschaften an, die zur Gestaltung von Schriften verwendet werden. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel an:

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

Die {{cssxref("color")}}-Eigenschaft legt die Farbe des Vordergrundinhalts der ausgewählten Elemente fest, das ist in der Regel der Text, kann aber auch ein paar andere Dinge wie eine Unter- oder Überstreichung, die auf Text mit der {{cssxref("text-decoration")}}-Eigenschaft angewandt wurden, umfassen.

`color` kann jede [CSS-Farbeingabe](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) akzeptieren, zum Beispiel:

```css
p {
  color: red;
}
```

Dadurch werden die Absätze rot anstatt des standardmäßigen schwarzen Browsers wie folgt:

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

Um eine andere Schriftart für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — dies ermöglicht es Ihnen, eine Schriftart (oder eine Liste von Schriften) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wendet eine Schriftart nur an, wenn sie auf dem Computer verfügbar ist, über den die Website aufgerufen wird; falls nicht, wird eine [Standardschriftart](#standardschriften) des Browsers verwendet. Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde bewirken, dass alle Absätze auf einer Seite die Schriftart arial annehmen, die auf jedem Computer zu finden ist.

#### Websichere Schriften

Apropos Verfügbarkeit von Schriftarten: Es gibt nur eine begrenzte Anzahl Schriftarten, die generell auf allen Systemen verfügbar sind und daher ohne große Bedenken verwendet werden können. Dies sind die sogenannten **websicheren Schriftarten**.

Oft möchten wir als Webentwickler eine spezifische Kontrolle über die Schriftarten, die zur Anzeige unserer Textinhalte verwendet werden. Das Problem besteht darin, einen Weg zu finden, um zu wissen, welche Schriftart auf dem Computer verfügbar ist, auf dem unsere Webseiten betrachtet werden. Es gibt keine Möglichkeit, dies in jedem Fall zu wissen, aber die websicheren Schriftarten sind bekannt dafür, auf fast allen Instanzen der meistgenutzten Betriebssysteme (Windows, macOS, den gängigsten Linux-Distributionen, Android und iOS) verfügbar zu sein.

Die Liste der tatsächlichen websicheren Schriftarten wird sich ändern, sobald sich Betriebssysteme weiterentwickeln, aber es ist angemessen, die folgenden Schriftarten zumindest vorerst als websicher zu betrachten (viele von ihnen wurden durch die Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90er und frühen 2000er populär gemacht):

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
        Es gilt oft als beste Praxis, auch <em>Helvetica</em> als bevorzugte
        Alternative zu <em>Arial</em> hinzuzufügen, da, obwohl ihre Schriftbilder fast identisch sind, <em>Helvetica</em> als eine
        schönere Form gilt, auch wenn <em>Arial</em> breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der
        <em>Courier New</em>-Schriftart namens <em>Courier</em>. Es gilt als beste Praxis, beide zu verwenden mit <em>Courier New</em> als bevorzugte
        Alternative.
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
        Praxis, beide zu verwenden mit <em>Times New Roman</em> als bevorzugte
        Alternative.
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
> Unter verschiedenen Ressourcen pflegt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste von web sicheren Schriftarten, die auf Windows- und macOS-Betriebssystemen verfügbar sind, was Ihnen helfen kann, Ihre Entscheidung zu treffen, was Sie für den sicheren Gebrauch halten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, um Ihnen zu ermöglichen, die Verwendung von Schriften in jeglicher Weise anzupassen: **Web-Schriften**. Dies ist ein wenig komplizierter und wir werden es in einem [separaten Artikel](/de/docs/Learn/CSS/Styling_text/Web_fonts) später in diesem Modul besprechen.

#### Standardschriften

CSS definiert fünf generische Namen für Schriftarten: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr allgemein und das genaue Schriftbild, das aus diesen generischen Namen verwendet wird, kann zwischen den verschiedenen Browsern und Betriebssystemen, auf denen sie angezeigt werden, variieren. Es stellt ein _schlechtes Szenario_ dar, bei dem der Browser sein Bestes tut, um eine Schrift bereitzustellen, die angemessen aussieht. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Angemessenes bereitstellen. Auf der anderen Seite sind `cursive` und `fantasy` weniger vorhersehbar und wir empfehlen, sie sehr sorgfältig zu verwenden und während der Nutzung zu testen.

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
        Schriften, die Serifen haben (die Schwünge und andere kleine Details, die Sie an den Enden der Striche in einigen Schriftarten sehen).
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
        Schriften, bei denen jedes Zeichen die gleiche Breite hat, typischerweise in Code-Listen verwendet.
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
        Schriften, die beabsichtigt sind, Handschrift zu emulieren, mit fließenden, verbundenen Strichen.
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

#### Schriftenstapel

Da Sie die Verfügbarkeit der Schriften, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (selbst eine Web-Schrift könnte aus irgendeinem Grund fehlschlagen), können Sie einen **Font-Stack** bereitstellen, sodass der Browser aus mehreren Schriftarten wählen kann. Dies beinhaltet einen `font-family`-Wert, der aus mehreren durch Kommas getrennten Schriftartnamen besteht, z. B.

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob diese Schriftart auf dem Computer verfügbar ist. Wenn ja, wendet er die Schriftart auf die ausgewählten Elemente an. Wenn nicht, geht er zur nächsten Schriftart über, und so weiter.

Es ist eine gute Idee, einen geeigneten generischen Schriftartnamen am Ende des Stapels anzugeben, damit, falls keine der aufgelisteten Schriftarten verfügbar ist, der Browser zumindest etwas ungefähr Passendes bereitstellen kann. Um diesen Punkt zu verdeutlichen, erhalten Absätze die Standardschriftart des Browsers, wenn keine andere Option verfügbar ist — was normalerweise Times New Roman ist — das ist für eine sans-serif Schrift nicht gut!

> [!NOTE]
> Während Sie Schriftartnamen verwenden können, die Leerzeichen enthalten, wie `Trebuchet MS`, ohne den Namen zu zitieren, wird empfohlen, Schriftartnamen zu zitieren, die Leerzeichen, Ziffern oder andere Satzzeichen als Bindestriche enthalten, um Fehler beim Escapen zu vermeiden.

> [!WARNING]
> Jeder Schriftartname, der als generischer Familienname oder CSS-weites Schlüsselwort fehlinterpretiert werden könnte, muss in Anführungszeichen gesetzt werden. Während die Schriftartnamen als {{cssxref("custom-ident")}} oder {{cssxref("string")}} eingeschlossen werden können, müssen die Schriftartnamen, die zufällig denselben Namen wie ein CSS-weites Eigenschaftswert haben, wie `initial` oder `inherit`, oder CSS denselben Namen wie einer der generischen Schriftartnamen haben, wie `sans-serif` oder `fantasy`, als zitierte Zeichenfolge eingeschlossen werden. Andernfalls wird der Schriftartname als gleichwertiges CSS-Schlüsselwort oder generischer Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftartnamen — `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT in Anführungszeichen gesetzt werden, da Zeichenfolgen nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für die Schriftfamilie

Lassen Sie uns unser vorheriges Beispiel erweitern, indem wir den Absätzen eine sans-serif Schriftart geben:

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

In unserem vorherigen Modulartikel zu [CSS-Werten und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) haben wir Längen- und Größenangaben überprüft. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte in den meisten dieser Einheiten (und anderen, wie z. B. [Prozent](/de/docs/Learn/CSS/Building_blocks/Values_and_units#percentages)) annehmen; jedoch sind die gebräuchlichsten Einheiten, die Sie zur Größenanpassung von Text verwenden werden:

- `px` (Pixel): Die Anzahl der Pixel, die der Text hoch sein soll. Dies ist eine absolute Einheit — das resultierende berechnete Endergebnis für die Schrift auf der Seite bleibt in fast jeder Situation gleich.
- `em`s: 1 `em` entspricht der Schriftgröße, die auf das übergeordnete Element angewendet wird (genauer gesagt, die Breite eines Großbuchstabens M, der sich im übergeordneten Element befindet). Dies kann schwierig zu berechnen sein, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, aber es ist machbar, wie Sie weiter unten sehen werden. Warum sich das antun? Es wird ganz natürlich, wenn Sie sich daran gewöhnen, und Sie können `em` verwenden, um alles zu dimensionieren, nicht nur Text. Sie können eine gesamte Website mit `em` dimensionieren, was die Wartung vereinfacht.
- `rem`s: Diese funktionieren ähnlich wie `em`, außer dass 1 `rem` der auf das Wurzelelement des Dokuments (`<html>`) festgelegten Schriftgröße entspricht, nicht dem übergeordneten Element. Dies erleichtert das Rechnen, um Ihre Schriftgrößen zu berechnen.

Die `font-size` eines Elements wird vom übergeordneten Element geerbt. Dies beginnt alles mit dem Wurzelelement des gesamten Dokuments — `html` — dessen Standard- `font-size` von `16px` in den Browsern festgelegt ist. Jeder Absatz (oder ein anderes Element, das keine andere Größe vom Browser festgelegt hat) innerhalb des Wurzelelements hat eine endgültige Größe von `16px`. Andere Elemente können verschiedene Standardgrößen haben. Zum Beispiel hat ein `h1`-Element standardmäßig `2em` und wird daher bei `32px` Größe enden.

Die Dinge werden komplizierter, wenn Sie beginnen, die Schriftgröße von verschachtelten Elementen zu ändern. Angenommen, Sie hätten ein `article` in Ihrem Dokument und setzen dessen `font-size` auf 1.5 `em` (berechnet sich zu einer endgültigen Größe von 24 `px`), und dann wollen Sie, dass die Absätze darin 20 `px` betragen, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten den `em`-Wert auf 20/24 setzen, oder 0.83333333 `em`. Die Mathematik kann kompliziert sein, daher müssen Sie vorsichtig sein, wie Sie Dinge stilisieren. Es ist am besten, `rem` zu verwenden, wo immer es möglich ist, um die Dinge einfach zu halten, und vermeiden Sie es, die `font-size` von Containerelementen zu setzen, wo es möglich ist.

### Schriftstil, Schriftgewicht, Textumwandlung und Textdekoration

CSS bietet vier häufige Eigenschaften, um das visuelle Gewicht/Betonung von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um kursiven Text ein- oder auszuschalten. Mögliche Werte sind die folgenden (Sie werden dies selten verwenden, es sei denn, Sie möchten kursiven Stil aus irgendeinem Grund ausschalten):

  - `normal`: Setzt den Text auf den normalen Schriftstil (deaktiviert vorhandene Kursivschrift).
  - `italic`: Setzt den Text auf die kursiven Version der Schrift, wenn verfügbar; andernfalls simuliert es Kursivs mit Schräglage.
  - `oblique`: Setzt den Text auf eine simulierte Version einer kursiven Schrift, erstellt durch Schrägen der normalen Version.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text dargestellt wird. Dies hat viele verfügbare Werte, falls Sie viele Schriftvarianten haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_, usw.), aber in der Realität werden Sie selten andere als `normal` und `bold` verwenden:

  - `normal`, `bold`: Normale und fette Schriftstärke.
  - `lighter`, `bolder`: Setzt die Schriftstärke des aktuellen Elements eine Stufe leichter oder schwerer als das übergeordnete Element.
  - `100` – `900`: Numerische Schriftstärkewerte, die eine feiner abgestufte Kontrolle als die obigen Schlüsselwörter bieten, falls benötigt.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihre Schrift umzuwandeln. Werte beinhalten:

  - `none`: Verhindert jede Umwandlung.
  - `uppercase`: Wandelt alle Text in Großbuchstaben um.
  - `lowercase`: Wandelt alle Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Anfangsbuchstaben der Wörter in Großbuchstaben um.
  - `full-width`: Wandelt alle Zeichen so um, dass sie innerhalb eines festbreiten Quadrates geschrieben werden, ähnlich einer Monospace-Schrift, sodass, z. B. Latein- und asiatische Schriftzeichen (wie Chinesisch, Japanisch, Koreanisch) ausgerichtet werden können.

- {{cssxref("text-decoration")}}: Setzt/entfernt Textdekorationen auf Schriften (dies werden Sie hauptsächlich verwenden, um die Standard-Unterstreichung bei Links beim Styling zu entfernen). Verfügbare Werte sind:

  - `none`: Setzt alle vorhandenen Textdekorationen zurück.
  - `underline`: Unterstreicht den Text.
  - `overline`: Fügt dem Text eine Überstreichung hinzu.
  - `line-through`: Fügt dem Text eine Durchstreichlinie hinzu.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte auf einmal annehmen kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, zum Beispiel `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzform-Eigenschaft für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzeugen, z. B.: `text-decoration: line-through red wavy`.

Schauen wir uns an, wie man einige dieser Eigenschaften zu unserem Beispiel hinzufügt:

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

Sie können Schlagschatten auf Ihren Text mit der {{cssxref("text-shadow")}}-Eigenschaft anwenden. Diese nimmt bis zu vier Werte, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom Originaltext — dieser kann die meisten verfügbaren CSS [Längen- und Größenangaben](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) annehmen, aber am häufigsten verwenden Sie `px`; positive Werte bewegen den Schatten nach rechts und negative Werte nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Versatz des Schattens vom Originaltext. Dies verhält sich ähnlich wie der horizontale Versatz, außer dass es den Schatten nach oben/unten bewegt, nicht links/rechts. Dieser Wert muss enthalten sein.
3. Der Weichzeichnungsradius: Ein höherer Wert bedeutet, dass sich der Schatten weiter verbreitet. Wenn dieser Wert nicht angegeben wird, ist er standardmäßig 0, was keine Weichzeichnung bedeutet. Dies kann die meisten verfügbaren CSS [Längen- und Größenangaben](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) enthalten.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbeingabe](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) annehmen kann. Wenn nicht enthalten, wird sie standardmäßig auf [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) gesetzt, d. h. die Schattenfarbe wird aus der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrfachschatten

Sie können mehrere Schatten auf demselben Text anwenden, indem Sie mehrere Schattenwerte durch Kommas getrennt angeben, z. B.:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "h1")}} in unserem Beispiel von Tommy The Cat anwenden würden, hätten wir folgendes Ergebnis:

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
> Sie können weitere interessante Beispiele zur Verwendung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) sehen.

## Textlayout

Nachdem die grundlegenden Schrifteigenschaften besprochen wurden, schauen wir uns die Eigenschaften an, mit denen wir das Textlayout beeinflussen können.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie der Text innerhalb seines Inhaltsbereichs ausgerichtet wird. Die verfügbaren Werte sind unten aufgelistet. Sie funktionieren so ziemlich genauso, wie sie es in einer regulären Textverarbeitungsanwendung tun:

- `left`: Richtet den Text linksbündig aus.
- `right`: Richtet den Text rechtsbündig aus.
- `center`: Zentriert den Text.
- `justify`: Macht den Text gleichmäßig verteilt, indem die Abstände zwischen den Wörtern variiert werden, sodass alle Zeilen der gleiche Breite haben. Sie sollten dies sorgfältig verwenden — es kann schrecklich aussehen, besonders wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden, sollten Sie auch in Betracht ziehen, etwas anderes wie {{cssxref("hyphens")}} zu verwenden, um einige der längeren Wörter über die Zeilen zu trennen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "h1")}} in unserem Beispiel anwenden, hätten wir folgendes Ergebnis:

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

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größenangaben](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) annehmen, sondern auch einen wertlosen Wert, der als Multiplikator fungiert und allgemein als beste Option angesehen wird. Mit einem wertlosen Wert multipliziert sich die {{cssxref("font-size")}} und ergibt die `line-height`. Fließtext sieht im Allgemeinen schöner aus und ist leichter zu lesen, wenn die Zeilen weiter auseinander liegen. Die empfohlene Zeilenhöhe liegt bei etwa 1.5 – 2 (doppelter Zeilenabstand). Um unsere Textzeilen auf das 1,6-fache der Höhe der Schriftart einzustellen, würden wir verwenden:

```css
p {
  line-height: 1.6;
}
```

Das Anwenden dieser Eigenschaft auf die {{htmlelement("p")}}-Elemente in unserem Beispiel würde folgendes Ergebnis geben:

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

Die {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden diese nicht sehr oft verwenden, könnten sie aber verwenden, um ein bestimmtes Aussehen zu erzielen oder die Lesbarkeit einer besonders dichten Schrift zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir einige Wort- und Buchstabenabstände auf die erste Zeile jeder {{htmlelement("p")}} in unserem HTML-Beispiel anwenden mit:

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

Die oben genannten Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie Text auf einer Webseite gestalten können, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich daran gewöhnt haben, die oben genannten zu verwenden, sollten Sie auch die folgenden Eigenschaften erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Wechseln zwischen Kapitälchen und normalen Schriftalternativen.
- {{cssxref("font-kerning")}}: Kerning-Optionen für Schriften ein- und ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType) Schriftmerkmale ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Kontrolle über die Verwendung von alternativen Glyphen für eine gegebene Schriftart.
- {{cssxref("font-variant-caps")}}: Kontrolle über die Verwendung von alternativen Großbuchstabenglyphen.
- {{cssxref("font-variant-east-asian")}}: Kontrolle über die Verwendung alternativer Glyphen für ostasiatische Schriften, wie Japanisch und Chinesisch.
- {{cssxref("font-variant-ligatures")}}: Kontrolle darüber, welche Ligaturen und kontextbezogenen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Kontrolle über die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordnungsmarker.
- {{cssxref("font-variant-position")}}: Kontrolle über die Verwendung alternativer Glyphen in kleineren Größen, die als Hoch- oder Tiefstellung positioniert sind.
- {{cssxref("font-size-adjust")}}: Anpassung der visuellen Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße.
- {{cssxref("font-stretch")}}: Wechseln zwischen möglichen alternativen gestreckten Versionen einer gegebenen Schrift.
- {{cssxref("text-underline-position")}}: Bestimmen Sie die Position der Unterstreichungen, die mit der Eigenschaft `text-decoration-line` `underline` gesetzt wurden.
- {{cssxref("text-rendering")}}: Versuchen Sie, einige Textdarstellungsoptimierungen vorzunehmen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Legen Sie fest, wie viel horizontaler Raum vor dem Beginn der ersten Textzeile gelassen werden soll.
- {{cssxref("text-overflow")}}: Bestimmen Sie, wie überlaufener Inhalt, der nicht angezeigt wird, den Benutzern signalisiert wird.
- {{cssxref("white-space")}}: Bestimmen Sie, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Bestimmen Sie, ob Zeilen in Wörtern gebrochen werden sollen.
- {{cssxref("direction")}}: Bestimmen Sie die Textrichtung. (Dies hängt von der Sprache ab und normalerweise ist es besser, HTML diese Aufgabe überlassen, da es mit dem Textinhalt verknüpft ist.)
- {{cssxref("hyphens")}}: Schalten Sie die Silbentrennung für unterstützte Sprachen ein und aus.
- {{cssxref("line-break")}}: Entspannen oder verstärken Sie den Zeilenumbruch für asiatische Sprachen.
- {{cssxref("text-align-last")}}: Bestimmen Sie, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.
- {{cssxref("text-orientation")}}: Bestimmen Sie die Ausrichtung des Textes in einer Zeile.
- {{cssxref("overflow-wrap")}}: Bestimmen Sie, ob der Browser Zeilen in Worten brechen darf, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Bestimmen Sie, ob Textzeilen horizontal oder vertikal angeordnet sind und in welche Richtung nachfolgende Zeilen fließen.

## Schriftart-Kurzform

Viele Schrifteneigenschaften können auch durch die Kurzform-Eigenschaft {{cssxref("font")}} festgelegt werden. Diese sind in folgender Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}} und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn Sie die `font`-Kurzform-Eigenschaft verwenden.

Ein Schrägstrich muss zwischen den Eigenschaften {{cssxref("font-size")}} und {{cssxref("line-height")}} gesetzt werden.

Ein vollständiges Beispiel sieht folgendermaßen aus:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aktives Lernen: Mit der Textgestaltung spielen

In dieser aktiven Lerneinheit haben wir keine spezifischen Übungen für Sie. Wir möchten einfach, dass Sie ein wenig mit einigen Schrift-/Textlayout-Eigenschaften spielen. Erforschen Sie selbst, was Sie herausfinden können! Sie können dies entweder mit offline HTML/CSS-Dateien tun, oder Ihren Code in das Live-beareitable Beispiel unten eingeben.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche zurücksetzen.

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

Wir hoffen, Sie hatten Spaß beim Spielen mit Text in diesem Artikel! Der nächste Artikel wird Ihnen alles bieten, was Sie über das [Styling von HTML-Listen](/de/docs/Learn/CSS/Styling_text/Styling_lists) wissen müssen.

{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}
