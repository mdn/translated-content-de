---
title: Fundamentales zu Text- und Schriftstyling
short-title: Grundlagen zu Text und Schrift
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: e47ecbb9beee1f7f6b22376686be75b15bb73638
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Meisterung des Textstylings mit {{Glossary("CSS", "CSS")}}. Hier gehen wir alle grundlegenden Prinzipien des Text-/Schriftstylings im Detail durch, einschließlich der Einstellung von Schriftgewicht, -familie und -stil, der Kurzschreibweise für Schriften, der Textausrichtung und anderer Effekte sowie der Zeilen- und Zeichenauswahl.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalten mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen der Konzepte von Schriftfamilien, Schriftstapeln und web-sicheren Schriften.</li>
          <li>Einstellung von Schriftfarbe, -gewicht, -größe und -stil.</li>
          <li>Einstellung der Textausrichtung, -transformation und -dekoration.</li>
          <li>Einstellung der Zeilenhöhe.</li>
          <li>Wissen, dass es noch weitere Stiloptionen für Schrift und Text gibt, und die Ermutigung, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist beim Styling von Text in CSS beteiligt?

Text innerhalb eines Elements wird innerhalb der [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements dargestellt. Er beginnt oben links im Inhaltsbereich (oder oben rechts bei RTL-Sprachen) und fließt bis zum Ende der Zeile. Sobald das Ende erreicht ist, bewegt er sich zur nächsten Zeile und fließt erneut bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in der Box platziert wurde. Der Textinhalt verhält sich effektiv wie eine Reihe von Inline-Elementen, die auf Linien nebeneinander angeordnet sind und keine Zeilenumbrüche erzeugen, bis das Ende der Zeile erreicht ist, oder bis Sie einen Zeilenumbruch manuell mit dem {{htmlelement("br")}}-Element erzwingen.

> [!NOTE]
> Wenn Sie sich vom obigen Absatz verwirrt fühlen, macht das nichts aus — gehen Sie zurück und lesen Sie unseren [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Artikel noch einmal durch, um Ihr Wissen über das Box-Modell zu vertiefen, bevor Sie weitermachen.

Die CSS-Eigenschaften, die zum Styling von Text verwendet werden, fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel getrennt betrachten:

- **Schriftstile**: Eigenschaften, die die Schriftart eines Textes beeinflussen, z.B. welche Schrift angewendet wird, deren Größe und ob sie fett, kursiv usw. ist.
- **Text-Layout-Stile**: Eigenschaften, die den Abstand und andere Layout-Merkmale des Textes betreffen, sodass zum Beispiel der Abstand zwischen Zeilen und Buchstaben manipuliert werden kann und wie der Text innerhalb der Inhaltsbox ausgerichtet wird.

> [!NOTE]
> Beachten Sie, dass der Text innerhalb eines Elements als eine Einheit betroffen ist. Sie können keine Textabschnitte auswählen und stylen, es sei denn, Sie umschließen sie mit einem geeigneten Element (wie {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden ein text-spezifisches Pseudo-Element wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements aus), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements aus) oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den derzeit vom Cursor hervorgehobenen Text aus).

## Schriften

Lassen Sie uns direkt weitermachen und die Eigenschaften zum Stylen von Schriften betrachten. In diesem Beispiel werden wir einige CSS-Eigenschaften auf folgendes HTML-Beispiel anwenden:

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

Die Eigenschaft {{cssxref("color")}} legt die Farbe des Vordergrundinhalts der ausgewählten Elemente fest, die normalerweise der Text ist, aber auch eine Unter- oder Oberlinie umfassen kann, die mithilfe der Eigenschaft {{cssxref("text-decoration")}} auf den Text angewendet wurde.

`color` kann jede [CSS-Farb-Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
}
```

Dies bewirkt, dass die Absätze rot werden, anstatt den standardmäßigen Browser-Standard von schwarz, wie folgt:

{{ EmbedLiveSample('1color', '100%', 230) }}

### Schriftfamilien

Um eine andere Schriftart für Ihren Text einzustellen, verwenden Sie die Eigenschaft {{cssxref("font-family")}} — dies ermöglicht es Ihnen, eine Schriftart (oder eine Liste von Schriften) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wird nur eine Schriftart anwenden, wenn sie auf dem Computer verfügbar ist, auf dem die Website angezeigt wird; andernfalls verwendet er einfach eine Browser-[Standardschriftart](#standardschriften). Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde alle Absätze auf einer Seite die Arial-Schrift annehmen lassen, die auf jedem Computer zu finden ist.

> [!NOTE]
> Scrimbas [Web-sichere Schriften](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet einen interaktiven Leitfaden, warum Schriften wichtig sind, web-sichere Schriften und wie man Schriften in CSS spezifiziert — zusammen mit einer Herausforderung, um Ihr Wissen zu testen.

#### Web-sichere Schriften

Apropos Verfügbarkeit von Schriften, es gibt nur eine bestimmte Anzahl von Schriften, die allgemein auf allen Systemen verfügbar sind und daher ohne große Sorgen verwendet werden können. Diese sind die sogenannten **Web-sicheren Schriften**.

Die meiste Zeit möchten wir als Webentwickler eine spezifischere Kontrolle über die Schriften haben, die zur Anzeige unseres Textinhalts verwendet werden. Das Problem besteht darin, einen Weg zu finden, um zu wissen, welche Schrift auf dem Computer verfügbar ist, der unsere Webseiten betrachtet. Es gibt keine Möglichkeit, dies in jedem Fall zu wissen, aber die web-sicheren Schriften sind bekanntlich auf nahezu allen Instanzen der am häufigsten verwendeten Betriebssysteme (Windows, macOS, die gängigsten Linux-Distributionen, Android und iOS) verfügbar.

Die Liste der tatsächlichen web-sicheren Schriften wird sich mit der Weiterentwicklung der Betriebssysteme ändern, aber es ist vernünftig, die folgenden Schriften zumindest kurzfristig als web-sicher zu betrachten (viele von ihnen sind dank der Microsoft _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ Initiative in den späten 90er und frühen 2000er Jahren populär geworden):

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
        Es ist oft als beste Praxis angesehen, auch <em>Helvetica</em> als
        bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da, obwohl ihre
        Schriftbilder fast identisch sind, <em>Helvetica</em> als
        schöner in der Form angesehen wird, auch wenn <em>Arial</em> breiter verfügbar
        ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der
        <em>Courier New</em> Schrift namens <em>Courier</em>. Es wird als beste
        Praxis angesehen, beide mit <em>Courier New</em> als bevorzugte
        Alternative zu verwenden.
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
        <em>Times New Roman</em> Schrift namens <em>Times</em>. Es wird als
        beste Praxis angesehen, beide mit <em>Times New Roman</em> als
        bevorzugte Alternative zu verwenden.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig bei der Verwendung dieser Schrift sein — sie ist nicht
        weitläufig auf mobilen Betriebssystemen verfügbar.
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
> Zu den verschiedenen Ressourcen gehört die Website [cssfontstack.com](https://www.cssfontstack.com/), die eine Liste von auf Windows- und macOS-Betriebssystemen verfügbaren web-sicheren Schriften bereitstellt, die Ihnen bei der Entscheidung helfen kann, was Sie als sicher für Ihre Nutzung erachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schrift zusammen mit einer Webseite herunterzuladen, um Ihnen die Möglichkeit zu geben, Ihre Schriftnutzung auf jede gewünschte Weise anzupassen: **Webschriften**. Dies ist etwas komplexer, und wir werden es in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später im Modul behandeln.

#### Standardschriften

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch, und die genaue verwendete Schriftschnitt kann zwischen jedem Browser und jedem Betriebssystem, auf dem sie angezeigt werden, variieren. Es stellt ein _worst-case scenario_ dar, bei dem der Browser sich bemühen wird, eine Schrift anzubieten, die angemessen aussieht. `serif`, `sans-serif` und `monospace` sind recht vorhersehbar und sollten etwas Vernünftiges bieten. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar, und wir empfehlen, sie sehr vorsichtig zu verwenden und beim Testen vorzugehen.

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
        Schriften, die Serifen haben (die Verzierungen und anderen kleinen
        Details, die Sie an den Enden der Striche in einigen Schriftarten sehen).
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
        Schriften, bei denen jedes Zeichen dieselbe Breite hat, typischerweise
        in Codeauflistungen verwendet.
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
        Schriften, die beabsichtigen, Handschrift zu emulieren, mit fließenden,
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
      <td>Schriften, die beabsichtigen, dekorativ zu sein.</td>
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

Da Sie die Verfügbarkeit der Schriften, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (selbst eine webbasierte Schrift _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** bereitstellen, damit der Browser die Möglichkeit hat, verschiedene Schriften auszuwählen. Dies umfasst einen `font-family` Wert, der aus mehreren durch Kommas getrennten Schriftnamen besteht, z.B.,

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser mit dem ersten Element der Liste und überprüft, ob diese Schrift auf dem Computer verfügbar ist. Wenn sie dies ist, wendet der Browser sie auf die ausgewählten Elemente an. Falls nicht, geht er zur nächsten Schrift über, und so weiter.

Es ist eine gute Praxis, einen geeigneten generischen Schriftartnamen am Ende des Stapels bereitzustellen, damit der Browser zumindest etwas annähernd Sinnvolles bereitstellen kann, wenn keine der aufgeführten Schriften vorhanden ist. Um dies zu betonen, werden Absätze mit der Standard-Serifenschrift des Browsers dargestellt, wenn keine andere Option verfügbar ist — was normalerweise Times New Roman ist — was für eine serifenlose Schriftart nicht gut ist!

> [!NOTE]
> Während Sie Schriftfamiliennamen mit Leerzeichen wie `Trebuchet MS` ohne Anführungszeichen verwenden können, wird empfohlen, diese Namen, die Leerzeichen, Ziffern oder Interpunktionszeichen außer Bindestrichen enthalten, immer in Anführungszeichen zu setzen, um Fehler beim Escapen zu vermeiden.

> [!WARNING]
> Jeder Schriftfamilienname, der als ein generischer Familienname oder ein CSS-weiter Schlüsselwort missinterpretiert werden könnte, muss in Anführungszeichen gesetzt werden. Während die Schriftfamiliennamen als {{cssxref("custom-ident")}} oder {{cssxref("string")}} eingeschlossen werden können, müssen Schriftfamiliennamen, die zufällig den gleichen Namen wie ein CSS-weiter Eigenschaftswert haben, wie `initial` oder `inherit`, oder CSS, denselben Namen wie einer der generischen Schriftfamiliennamen, wie `sans-serif` oder `fantasy`, aufweisen, als zitierte Zeichenfolge eingeschlossen werden. Andernfalls wird der Schriftfamilienname als das Äquivalent des CSS-Schlüsselworts oder des generischen Familiennamens interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftfamiliennamen —`serif`, `sans-serif`, `monospace`, `cursive`, und `fantasy`— und die globalen CSS-Schlüsselwörter nicht in Anführungszeichen gesetzt werden, da Zeichenketten nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für eine Schriftfamilie

Lassen Sie uns unser vorheriges Beispiel ergänzen und den Absätzen eine serifenlose Schrift geben:

```css live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample('2fonts', '100%', 220) }}

### Schriftgröße

Im Artikel über [CSS-Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) des vorherigen Moduls haben wir Längen- und Größeneinheiten überprüft. Die Schriftgröße (eingestellt mit der Eigenschaft {{cssxref("font-size")}}) kann Werte akzeptieren, die in den meisten dieser Einheiten (und anderen, wie [Prozenten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) gemessen werden; jedoch sind die am häufigsten verwendeten Einheiten, die Sie zum Skalieren von Text verwenden,:

- `px` (Pixel): Die Anzahl der Pixel, die Sie als Höchstwert für den Text verwenden möchten. Dies ist eine absolute Einheit — sie ergibt in nahezu allen Situationen denselben Endwert für die Schrift auf der Seite.
- `em`: 1 `em` entspricht der Schriftgröße, die auf das übergeordnete Element des aktuellen Elements, das wir stylen, gesetzt wurde (genauer gesagt die Breite eines Großbuchstabens M, der sich im übergeordneten Element befindet). Dies kann schwierig sein herauszufinden, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich die Mühe machen? Es ist ganz natürlich, sobald Sie sich daran gewöhnt haben, und Sie können `em` verwenden, um alles zu skalieren, nicht nur Text. Sie können eine gesamte Website mit `em` skalieren, was die Wartung vereinfacht.
- `rem`: Diese funktionieren genauso wie `em`, außer dass 1 `rem` der Schriftgröße entspricht, die auf das Root-Element des Dokuments (d.h. {{htmlelement("html")}}) festgelegt ist, nicht dem übergeordneten Element. Das macht die Berechnung Ihrer Schriftgrößen viel einfacher.

Die `font-size` eines Elements wird von dessen übergeordnetem Element geerbt. Alles beginnt mit dem Root-Element des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard-`font-size` in allen Browsern auf `16px` festgelegt ist. Jeder Absatz (oder jedes andere Element, das keine andere Größe hat, die vom Browser festgelegt wurde) innerhalb des Root-Elements hat eine endgültige Größe von `16px`. Andere Elemente können unterschiedliche Standardgrößen haben. Zum Beispiel hat ein Element vom Typ {{htmlelement("Heading_Elements", "h1")}} standardmäßig eine Größe von `2em`, weshalb es eine endgültige Größe von `32px` hat.

Die Dinge werden schwieriger, wenn Sie anfangen, die Schriftgröße verschachtelter Elemente zu ändern. Zum Beispiel, wenn Sie ein {{htmlelement("article")}}-Element auf Ihrer Seite hätten und dessen `font-size` auf 1.5 `em` setzen möchten (was einer endgültigen Größe von 24 `px` entspricht) und Sie dann möchten, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten dessen `em`-Wert auf 20/24, oder 0.83333333 `em` setzen. Die Berechnungen können komplex sein, daher müssen Sie beim Styling vorsichtig sein. Am besten verwenden Sie `rem`, wo immer möglich, um die Dinge einfach zu halten und vermeiden es, die `font-size` von Containerelementen zu setzen, wo dies möglich ist.

### Schriftstil, Schriftgewicht, Texttransformation und Textdekoration

CSS bietet vier allgemeine Eigenschaften, um das visuelle Gewicht/die Betonung von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um kursiven Text ein- oder auszuschalten. Mögliche Werte sind wie folgt (Sie werden dies selten verwenden, es sei denn, Sie möchten aus irgendeinem Grund eine kursive Formatierung deaktivieren):

  - `normal`: Setzt den Text auf die normale Schrift (deaktiviert vorhandene Kursivität).
  - `italic`: Setzt den Text zu verwenden die kursiven Version der Schrift, falls vorhanden; andernfalls wird kursiv mit oblique simuliert.
  - `oblique`: Setzt den Text, um eine simulierte Version einer kursiven Schriftart zu verwenden, die durch Abschrägung der normal Version erstellt wurde.

- {{cssxref("font-weight")}}: Stellt ein, wie fett der Text ist. Dies hat viele verfügbare Werte, falls Sie viele Schriftvarianten zur Verfügung haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_, usw.), aber in der Realität werden Sie selten andere verwenden außer `normal` und `bold`:

  - `normal`, `bold`: Normales und fett Schriftgewicht.
  - `lighter`, `bolder`: Setzt die Fettigkeit des aktuellen Elements so, dass es einen Schritt heller oder schwerer als die Fettigkeit seines übergeordneten Elements ist.
  - `100` – `900`: Numerische Fettigkeitswerte, die eine feinere Kontrolle als die obigen Schlüsselwörter bieten, falls benötigt.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihre Schrift auf verschiedene Weise zu transformieren. Werte umfassen:

  - `none`: Verhindert jegliche Transformation.
  - `uppercase`: Wandelt den gesamten Text in Großbuchstaben um.
  - `lowercase`: Wandelt den gesamten Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter so um, dass der erste Buchstabe großgeschrieben wird.
  - `full-width`: Wandelt alle Glyphen so um, dass sie in einem festbreiten Quadrat geschrieben werden, ähnlich zu einer Monospace-Schriftart, um z.B. lateinische Zeichen mit asiatischen Sprachenzeichen (wie Chinesisch, Japanisch, Koreanisch) auszurichten.

- {{cssxref("text-decoration")}}: Schaltet Textdekorationen auf Schriften ein/aus (Sie werden dies hauptsächlich verwenden, um den Standardunterstrichungen auf Links beim Stilne zu entfernen). Verfügbare Werte sind:

  - `none`: Entfernt jegliche bereits vorhandene Textdekorationen.
  - `underline`: Unterstreicht den Text.
  - `overline`: Gibt dem Text eine Oberlinie.
  - `line-through`: Setzt einen Durchstrich über den Text.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, z.B. `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Shorthand-Eigenschaft für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erstellen, z.B.: `text-decoration: line-through red wavy`.

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

### Text-Schatten

Sie können Drop-Schatten zu Ihrem Text mit der Eigenschaft {{cssxref("text-shadow")}} hinzufügen. Diese nimmt bis zu vier Werte, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Werte sind wie folgt:

1. Das horizontale Offset des Schattens vom Ursprungstext — dies kann die meisten verfügbaren CSS [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, am häufigsten verwenden Sie jedoch `px`; positive Werte bewegen den Schatten nach rechts, und negative Werte nach links. Dieser Wert muss hinzugefügt werden.
2. Das vertikale Offset des Schattens vom Ursprungstext. Dies verhält sich ähnlich wie das horizontale Offset, nur dass es den Schatten nach oben/unten bewegt, nicht nach links/rechts. Dieser Wert muss hinzugefügt werden.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten breiter verteilt wird. Wenn dieser Wert nicht hinzugefügt wird, ist der Standardwert 0, was keine Unschärfe bedeutet. Dies kann die meisten verfügbaren CSS [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Basisfarbe des Schattens, die jede [CSS-Farb-Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn nicht angegeben, ist der Standardwert [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword), d.h. die Farbe des Schattens wird von der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrere Schatten

Sie können mehrere Schatten auf dasselbe Text anbeziehen, indem Sie mehrere Schattenwerte durch Kommas getrennt auflisten, zum Beispiel:

```css live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element in unserem Tommy The Cat-Beispiel anwenden, erhalten wir dieses Ergebnis:

{{ EmbedLiveSample('4shadows', '100%', 260) }}

> [!NOTE]
> Weitere interessante Beispiele für die Verwendung von `text-shadow` finden Sie im Artikel von Sitepoint [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/).

## Text-Layout

Mit den grundlegenden Schriftschatz-Eigenschaften aus dem Weg lassen Sie uns einen Blick auf die Eigenschaften werfen, die wir verwenden können, um das Layout des Textes zu beeinflussen.

### Textausrichtung

Die Eigenschaft {{cssxref("text-align")}} wird verwendet, um zu steuern, wie Text innerhalb seiner umschließenden Inhaltsbox ausgerichtet ist. Die verfügbaren Werte sind unten aufgelistet. Sie funktionieren nahezu genauso wie in einer regulären Textverarbeitungsanwendung:

- `left`: Links ausgerichteter Text.
- `right`: Rechts ausgerichteter Text.
- `center`: Zentrierter Text.
- `justify`: Lässt den Text sich ausbreiten, indem er die Lücken zwischen den Wörtern variiert, sodass alle Textzeilen die gleiche Breite haben. Sie müssen dies sorgfältig verwenden — es kann schrecklich aussehen, besonders wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden möchten, sollten Sie überlegen, etwas anderes zusätzlich zu verwenden, wie z.B. {{cssxref("hyphens")}}, um einige der längeren Wörter über mehrere Zeilen zu brechen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element in unserem Beispiel anwenden, erhalten wir dieses:

```css hidden live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-align: center;
}
```

{{ EmbedLiveSample('5text-align', '100%', 260) }}

### Linienhöhe

Die Eigenschaft {{cssxref("line-height")}} legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern kann auch einen einheitslosen Wert annehmen, der als Multiplikator wirkt und im Allgemeinen als die beste Option angesehen wird. Mit einem einheitslosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtext sieht generell schöner aus und ist leichter zu lesen, wenn die Zeilen weiter auseinander liegen. Die empfohlene Zeilenhöhe liegt bei etwa 1.5 – 2 (doppelter Abstand). Um unsere Textzeilen auf eine Höhe von 1,6-mal der Schrift zu setzen, würden wir verwenden:

```css live-sample___6line-height live-sample___7letter-word-spacing
p {
  line-height: 1.6;
}
```

Die Anwendung dieser Eigenschaft für die {{htmlelement("p")}}-Elemente in unserem Beispiel würde dieses Ergebnis ergeben:

{{ EmbedLiveSample('6line-height', '100%', 300) }}

### Buchstaben- und Wortabstand

Die Eigenschaften {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}} erlauben es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden dies nicht sehr oft verwenden, könnten jedoch dafür Verwendung finden, um ein spezielles Aussehen zu erzielen oder um die Lesbarkeit einer besonders dichten Schrift zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir sowohl den Wort- als auch den Buchstabenabstand auf der ersten Zeile jeder {{htmlelement("p")}}-Element in unserem HTML-Beispiel anwenden:

```css live-sample___7letter-word-spacing
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Dies rendert unser HTML so:

{{ EmbedLiveSample('7letter-word-spacing', '100%', 330) }}

### Andere Eigenschaften, die sich lohnen, anzuschauen

Die oben genannten Eigenschaften geben Ihnen einen Eindruck davon, wie Sie beginnen können, Text auf einer Webseite zu stylen, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich mit den oben genannten Eigenschaften vertraut gemacht haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Wechseln Sie zwischen Kapitälchen und normalen Schriftalternativen.
- {{cssxref("font-kerning")}}: Schalten Sie die Schriftkerning-Optionen ein und aus.
- {{cssxref("font-feature-settings")}}: Schalten Sie verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftfunktionen ein und aus.
- {{cssxref("font-variant-alternates")}}: Steuern Sie die Verwendung alternativer Glyphen für einen bestimmten Schriftschnitt.
- {{cssxref("font-variant-caps")}}: Kontrollieren Sie die Verwendung alternativer Großbuchstabenglyphen.
- {{cssxref("font-variant-east-asian")}}: Kontrolle der Verwendung alternativer Glyphen für ostasiatische Schriften wie Japanisch und Chinesisch.
- {{cssxref("font-variant-ligatures")}}: Kontrolle über welche Ligaturen und kontextuellen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Kontrolle über die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordinalzeichen.
- {{cssxref("font-variant-position")}}: Kontrolle über die Verwendung alternativer Glyphen in kleineren Größen, die als Hoch- oder Tiefstellungen positioniert sind.
- {{cssxref("font-size-adjust")}}: Passen Sie die visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße an.
- {{cssxref("font-stretch")}}: Wechseln Sie zwischen möglichen alternativen gedehnten Versionen einer bestimmten Schrift.
- {{cssxref("text-underline-position")}}: Geben Sie die Position der mit der `text-decoration-line`-Eigenschaft `underline` gesetzten Unterstreichungen an.
- {{cssxref("text-rendering")}}: Versuchen Sie, einige Optimierungen für die Textrenderung durchzuführen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Geben Sie an, wie viel horizontaler Platz vor dem Anfang der ersten Textzeile gelassen werden soll.
- {{cssxref("text-overflow")}}: Definieren Sie, wie überlaufener Inhalt, der nicht angezeigt wird, den Benutzern signalisiert wird.
- {{cssxref("white-space")}}: Definieren Sie, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Geben Sie an, ob Zeilen innerhalb von Wörtern gebrochen werden sollen.
- {{cssxref("direction")}}: Definieren Sie die Textausrichtung. (Dies hängt von der Sprache ab und es ist normalerweise besser, HTML diesen Teil übernehmen zu lassen, da es in Bezug zum Textinhalt steht)
- {{cssxref("hyphens")}}: Schalten Sie die Trennfunktion für unterstützte Sprachen ein oder aus.
- {{cssxref("line-break")}}: Entspannen oder stärken Sie den Zeilenumbruch für asiatische Sprachen.
- {{cssxref("text-align-last")}}: Definieren Sie, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.
- {{cssxref("text-orientation")}}: Definieren Sie die Ausrichtung des Textes in einer Zeile.
- {{cssxref("overflow-wrap")}}: Geben Sie an, ob der Browser Zeilen innerhalb von Wörtern brechen darf, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Definieren Sie, ob Textzeilen horizontal oder vertikal angeordnet sind und in welche Richtung die nachfolgenden Zeilen fließen.

## Schrift-Kurzform

Viele Schriftschtz-Eigenschaften können auch über die Kürzeleigenschaft {{cssxref("font")}} gesetzt werden. Diese werden in der folgenden Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssexref("line-height")}}, und {{cssxref("font-family")}}.

Von all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn die `font`-Kürzeleigenschaft verwendet wird.

Ein Schrägstrich muss zwischen den Eigenschaften {{cssxref("font-size")}} und {{cssxref("line-height")}} gesetzt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Spielen mit Textstyling

OK, jetzt sind Sie dran. Für diese Aufgabe haben wir keine spezifischen Übungen für Sie. Wir möchten einfach, dass Sie ein bisschen mit einigen Schrift-/Textlayout-Eigenschaften herumspielen. Sehen Sie, was Sie selbst herausfinden können!

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie einige Deklarationen zur bereitgestellten Leerregel `p { }` hinzu, um das Styling des bereitgestellten Textes zu ändern. Seien Sie so kreativ, wie Sie möchten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Verweisen Sie auf die vorherigen Abschnitte im Artikel, um weitere Informationen zu den einstellbaren Schrift- und Textstilen zu finden.

```html live-sample___fonts_text
<p>Some sample text for your delight</p>
```

```css-nolint live-sample___fonts_text
p {

}
```

{{ EmbedLiveSample('fonts_text', "100%", 60) }}

## Zusammenfassung

Wir hoffen, dass Sie es genossen haben, mit Text zu spielen. Der nächste Artikel wird Ihnen alles Wichtige darüber mitteilen, wie HTML-Listen gestylt werden.

## Siehe auch

- [All about the CSS font-family property](https://explainers.dev/font-family/), explainers.dev
- [Web-safe fonts](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
