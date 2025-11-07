---
title: Grundlegende Text- und Schriftgestaltung
short-title: Grundlagen der Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Beherrschung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Hier werden wir alle grundlegenden Elemente der Text-/Schriftgestaltung im Detail durchgehen, einschließlich der Einstellung von Schriftgewicht, Familie und Stil, der Kurzschrift für Schriften, der Textausrichtung und anderer Effekte sowie der Zeilen- und Buchstabenzwischenräume.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen des Stylings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen der Konzepte von Schriftfamilien, Schriftstapeln und web-sicheren Schriften.</li>
          <li>Einstellen von Schriftfarbe, Gewicht, Größe und Stil.</li>
          <li>Einstellen der Textausrichtung, Transformation und Dekoration.</li>
          <li>Einstellen der Zeilenhöhe.</li>
          <li>Wissen, dass es mehrere andere Schrift- und Textgestaltungseigenschaften gibt, und dazu ermutigt werden, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was gehört zur Textgestaltung in CSS?

Text innerhalb eines Elements wird innerhalb der [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements positioniert. Er beginnt oben links im Inhaltsbereich (oder oben rechts im Fall von RTL-Sprachen) und fließt bis zum Ende der Zeile. Sobald das Ende erreicht ist, geht es zur nächsten Zeile und fließt wieder bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in der Box platziert ist. Textinhalte verhalten sich effektiv wie eine Reihe von Inline-Elementen, die in benachbarten Linien angeordnet sind und keine Zeilenumbrüche erzeugen, bis das Ende der Zeile erreicht ist oder Sie manuell einen Umbruch mit dem {{htmlelement("br")}}-Element erzwingen.

> [!NOTE]
> Wenn der obige Absatz Sie verwirrt, macht das nichts – gehen Sie zurück und lesen Sie unseren Artikel über das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um das theoretische Wissen über das Box-Modell aufzufrischen, bevor Sie weitermachen.

Die in CSS verwendeten Eigenschaften zur Textgestaltung fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten werden:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes beeinflussen, zum Beispiel welche Schrift angewendet wird, ihre Größe und ob sie fett, kursiv usw. ist.
- **Textlayout-Stile**: Eigenschaften, die den Abstand und andere Layoutmerkmale des Textes beeinflussen, und es ermöglichen, beispielsweise den Abstand zwischen Zeilen und Buchstaben zu manipulieren und wie der Text innerhalb der Inhaltsbox ausgerichtet wird.

> [!NOTE]
> Bedenken Sie, dass der Text innerhalb eines Elements als eine einzige Einheit betroffen ist. Sie können keine Textabschnitte auswählen und gestalten, es sei denn, Sie umgeben sie mit einem entsprechenden Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden ein text-spezifisches Pseudoelement wie [`::first-letter`](/de/docs/Web/CSS/Reference/Selectors/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements aus), [`::first-line`](/de/docs/Web/CSS/Reference/Selectors/::first-line) (wählt die erste Zeile des Textes eines Elements aus) oder [`::selection`](/de/docs/Web/CSS/Reference/Selectors/::selection) (wählt den Text aus, der momentan vom Cursor hervorgehoben wird).

## Schriften

Gehen wir direkt zu den Eigenschaften der Schriftgestaltung über. In diesem Beispiel werden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel anwenden:

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

Die {{cssxref("color")}}-Eigenschaft legt die Farbe des Vordergrundinhalts der ausgewählten Elemente fest, was normalerweise der Text ist, aber auch ein paar andere Dinge umfassen kann, wie z.B. eine Unter- oder Überstreichung, die mit der {{cssxref("text-decoration")}}-Eigenschaft auf den Text gesetzt wird.

`color` kann jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
}
```

Dies bewirkt, dass die Absätze rot werden, anstatt dem Standard-Browserstandard von Schwarz wie folgt:

{{ EmbedLiveSample('1color', '100%', 230) }}

### Schriftfamilien

Um eine andere Schriftart für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft – dies ermöglicht es Ihnen, eine Schriftart (oder eine Liste von Schriftarten) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wendet nur eine Schriftart an, wenn sie auf dem Gerät, von dem aus auf die Website zugegriffen wird, verfügbar ist; wenn nicht, verwendet er einfach eine Browser- [Standardschrift](#standardschriften). Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: "Arial";
}
```

Dies würde bewirken, dass alle Absätze auf einer Seite die Schriftart Arial annehmen, die auf jedem Computer zu finden ist.

> [!NOTE]
> Das [Web-sichere Schriften](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Skript bietet einen interaktiven Leitfaden dazu, warum Schriftarten wichtig sind, web-sichere Schriften und wie man Schriftarten in CSS angibt — zusammen mit einer Herausforderung, um Ihr Wissen zu testen.

#### Web-sichere Schriften

Apropos Schriftverfügbarkeit, es gibt nur eine bestimmte Anzahl von Schriften, die allgemein auf allen Systemen verfügbar sind und daher ohne große Sorgen verwendet werden können. Diese sind die sogenannten **web-sicheren Schriften**.

Meistens wollen wir als Webentwickler eine spezifischere Kontrolle über die Schriften, die zum Anzeigen unserer Textinhalte verwendet werden. Das Problem besteht darin, herauszufinden, welche Schrift auf dem Computer verfügbar ist, der unsere Webseiten anzeigt. Es gibt keinen Weg, dies in jedem Fall zu wissen, aber die web-sicheren Schriften sind bekanntlich in nahezu allen Instanzen der meistgenutzten Betriebssysteme (Windows, macOS, den häufigsten Linux-Distributionen, Android und iOS) verfügbar.

Die Liste der tatsächlichen web-sicheren Schriften wird sich mit der Evolution der Betriebssysteme ändern, aber es ist vernünftig, die folgenden Schriften als web-sicher zu betrachten, zumindest vorerst (viele von ihnen wurden dank der Microsoft _[Kernschriften für das Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ -Initiative in den späten 90er und frühen 2000er Jahren populär gemacht):

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
        bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da ihre
        Schriftformen fast identisch sind, <em>Helvetica</em> jedoch als
        schöner geformt angesehen wird, selbst wenn <em>Arial</em> weiter
        verbreitet ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere)
        Version der <em>Courier New</em>-Schrift namens <em>Courier</em>. Es
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
        Version der <em>Times New Roman</em>-Schrift namens <em>Times</em>.
        Es wird als beste Praxis angesehen, beide zu verwenden, wobei
        <em>Times New Roman</em> als bevorzugte Alternative gilt.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten bei der Verwendung dieser Schrift vorsichtig sein – sie
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
> Unter verschiedenen Ressourcen pflegt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste von web-sicheren Schriften, die unter Windows und macOS-Betriebssystemen verfügbar sind, was Ihnen bei der Entscheidung über das, was Sie für sicher für Ihre Nutzung halten, helfen kann.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, damit Sie Ihre Schriftnutzung nach Belieben anpassen können: **Web-Schriften**. Dies ist etwas komplexer, und wir werden es in einem [separate Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später im Modul diskutieren.

#### Standardschriften

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch und das genaue Schriftbild, das von diesen generischen Namen verwendet wird, kann sich zwischen jedem Browser und jedem Betriebssystem, auf dem sie angezeigt werden, unterscheiden. Es repräsentiert ein _Worst-Case-Szenario_, bei dem der Browser sein Bestes tun wird, um eine Schriftart zu liefern, die angemessen aussieht. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Angemessenes bieten. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar und wir empfehlen, diese sehr vorsichtig zu verwenden und beim Testen dabei.

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
        Schriften, die Serifen haben (die Schnörkel und andere kleine Details,
        die Sie an den Enden der Striche in einigen Schriftarten sehen).
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
        Schriften, die die Handschrift nachahmen sollen, mit fließenden,
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

Da Sie die Verfügbarkeit der Schriften, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (selbst eine Web-Schrift _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** angeben, damit der Browser mehrere Schriften zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert, der aus mehreren durch Kommas getrennten Schriftarten besteht, z.B.

```css
p {
  font-family: "Trebuchet MS", "Verdana", sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob diese Schriftart auf dem Computer verfügbar ist. Wenn ja, wendet er diese Schriftart auf die ausgewählten Elemente an. Wenn nicht, fährt er mit der nächsten Schriftart fort und so weiter.

Es ist eine gute Idee, einen geeigneten generischen Schriftartnamen am Ende des Stapels anzugeben, damit der Browser, wenn keine der aufgeführten Schriftarten verfügbar ist, zumindest etwas etwa passend bereitstellen kann. Um diesen Punkt zu betonen, erhalten Absätze die Serifenschrift des Browsers, wenn keine andere Option verfügbar ist – was normalerweise Times New Roman ist – das ist keine gute Wahl für eine serifenlose Schrift!

> [!NOTE]
> Während Sie Schriftartnamen, die einen Leerraum enthalten, wie z.B. `Trebuchet MS`, auch ohne Anführungsstriche verwenden können, wird empfohlen, Schriftartnamen, die Leerzeichen, Ziffern oder andere Satzzeichen außer Bindestrichen enthalten, in Anführungszeichen zu setzen, um Fehler beim Escaping zu vermeiden.

> [!WARNING]
> Jeder Schriftartname, der falsch interpretiert werden könnte als ein generischer Familienname oder ein CSS-weit Schlüsselwort, muss umrandet werden. Während die Schriftartnamen entweder als ein {{cssxref("custom-ident")}} oder ein {{cssxref("string")}} enthalten werden können, Schriftartnamen, die zufällig den Namen eines CSS-weiten Eigenschaftswerts haben, wie `initial` oder `inherit`, oder die CSS denselben Namen wie einer der generischen Schriftfamiliennamen haben, wie `sans-serif` oder `fantasy`, müssen als ein mit Anführungszeichen versehener String enthalten werden. Andernfalls wird der Schriftartname als das entsprechende CSS-Schlüsselwort oder der generische Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftartfamiliennamen —`serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — sowie die globalen CSS-Schlüsselwörter NICHT in Anführungszeichen eingeschlossen werden, da Strings nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für `font-family`

Fügen wir unserem vorherigen Beispiel etwas hinzu, indem wir den Absätzen eine serifenlose Schrift zuweisen:

```css live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample('2fonts', '100%', 220) }}

### Schriftgröße

Im Artikel [CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) des vorherigen Moduls haben wir Länge und Maßstäbeinheiten überprüft. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten (und andere, wie [Prozentsätze](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) gemessen werden; jedoch sind die am häufigsten verwendeten Einheiten zur Größenänderung von Text:

- `px` (Pixel): Die Anzahl der Pixel hoch, die Sie den Text haben möchten. Dies ist eine absolute Einheit – sie führt in fast jeder Situation zum selben endgültigen berechneten Wert für die Schrift auf der Seite.
- `em`: 1 `em` ist gleich der Schriftgröße, die auf das Elternelement des aktuellen Elements, das wir gestalten, gesetzt ist (genauer gesagt die Breite eines Großbuchstabens M, der sich im Elternelement befindet). Dies kann kompliziert werden, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich die Mühe machen? Es ist ganz natürlich, wenn Sie sich daran gewöhnt haben, und Sie können `em` verwenden, um alles zu dimensionieren, nicht nur Text. Sie können eine gesamte Website mit `em` dimensionieren, was die Wartung vereinfacht.
- `rem`: Diese funktionieren genauso wie `em`, außer dass 1 `rem` der Schriftgröße entspricht, die auf das Wurzelelement des Dokuments gesetzt ist (d.h. {{htmlelement("html")}}), nicht dem Elternelement. Dies erleichtert die Berechnung Ihrer Schriftgrößen erheblich.

Die `font-size` eines Elements wird von diesem Element von seinem Elternelement geerbt. Das alles beginnt mit dem Wurzelelement des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard-`font-size` in allen Browsern auf `16px` eingestellt ist. Jeder Absatz (oder ein anderes Element, das keine andere Größe eingestellt hat) im Wurzelelement hat eine endgültige Größe von `16px`. Andere Elemente können unterschiedliche Standardgrößen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}}-Element standardmäßig eine Größe von `2em`, also wird es eine endgültige Größe von `32px` haben.

Die Dinge werden komplizierter, wenn Sie die Schriftgröße von verschachtelten Elementen ändern. Zum Beispiel, wenn Sie ein {{htmlelement("article")}}-Element auf Ihrer Seite hätten und dessen `font-size` auf 1,5 `em` setzen würden (was eine endgültige Größe von 24 `px` hätte), und dann wollten, dass die Absätzen innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` hätten, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten seinen `em`-Wert auf 20/24 oder 0,83333333 `em` setzen. Die Mathematik kann kompliziert sein, deshalb müssen Sie vorsichtig sein, wie Sie die Dinge gestalten. Es ist am besten, `rem` zu verwenden, wo Sie können, um die Dinge einfach zu halten, und die Einstellung der `font-size` von Container-Elementen zu vermeiden, wo möglich.

### Schriftstil, Schriftgewicht, Textumwandlung und Textdekoration

CSS bietet vier häufig verwendete Eigenschaften, um das visuelle Gewicht/den visuellen Akzent von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um Kursivschrift ein- oder auszuschalten. Mögliche Werte sind wie folgt (Sie werden dies selten verwenden, es sei denn, Sie möchten aus irgendeinem Grund einige Kursivstylings deaktivieren):
  - `normal`: Setzt den Text auf die normale Schrift (deaktiviert vorhandene Kursivschrift).
  - `italic`: Setzt den Text so, dass die kursive Version der Schriftart verwendet wird, falls verfügbar; wenn nicht, wird Kursivschrift mit Schrägschrift simuliert.
  - `oblique`: Setzt den Text so, dass eine simulierte Version einer Kursivschrift verwendet wird, die durch Neigung der normalen Version erstellt wurde.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Dies hat viele verfügbare Werte für den Fall, dass viele Schriftvarianten verfügbar sind (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ usw.), aber in der Praxis werden Sie selten andere Werte als `normal` und `bold` verwenden:
  - `normal`, `bold`: Normaler und fetter Schriftgrad.
  - `lighter`, `bolder`: Setzt die Fettheit des aktuellen Elements auf einen Schritt heller oder schwerer als die Fettheit seines Elternelements.
  - `100` – `900`: Numerische Fettigkeitswerte, die feinere Kontrolle als die obigen Schlüsselwörter bieten, falls erforderlich.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihren Text umzuwandeln. Zu den Werten gehören:
  - `none`: Verhindert jegliche Transformation.
  - `uppercase`: Verwandelt den gesamten Text in Großbuchstaben.
  - `lowercase`: Verwandelt den gesamten Text in Kleinbuchstaben.
  - `capitalize`: Verwandelt alle Wörter so, dass der erste Buchstabe großgeschrieben wird.
  - `full-width`: Verwandelt alle Glyphen so, dass sie in ein festes breites Quadrat passen, ähnlich einer Monospace-Schrift, und ermöglicht das Ausrichten von beispielsweise lateinischen Zeichen zusammen mit asiatischen Spracheglyphen (wie Chinesisch, Japanisch, Koreanisch).

- {{cssxref("text-decoration")}}: Setzt/hobesetzt Textdekorationen an Schriften (meistens verwenden Sie dies, um die standardmäßige Unterstreichung bei Links zu entfernen, wenn Sie diese gestalten). Verfügbare Werte sind:
  - `none`: Entfernt alle vorhandenen Textdekorationen.
  - `underline`: Unterstreicht den Text.
  - `overline`: Setzt einen Überstrich über den Text.
  - `line-through`: Setzt einen Durchstreich-Strich über den Text.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, zum Beispiel `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzform für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzeugen, zum Beispiel: `text-decoration: line-through red wavy`.

Sehen wir uns an, wie wir einige dieser Eigenschaften zu unserem Beispiel hinzufügen können:

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
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Unser neues Ergebnis sieht so aus:

{{ EmbedLiveSample('3font-style', '100%', 260) }}

### Textschlagschatten

Sie können Schlagschatten auf Ihren Text anwenden, indem Sie die {{cssxref("text-shadow")}}-Eigenschaft verwenden. Diese nimmt bis zu vier Werte an, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom ursprünglichen Text – dies kann die meisten verfügbaren CSS-[Längen- und Maßstäbeinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) akzeptieren, aber Sie werden meistens `px` verwenden; positive Werte verschieben den Schatten nach rechts und negative Werte nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Versatz des Schattens vom ursprünglichen Text. Dies verhält sich ähnlich wie der horizontale Versatz, außer dass es den Schatten nach oben/unten verschiebt, nicht links/rechts. Dieser Wert muss enthalten sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter gestreut wird. Wenn dieser Wert nicht enthalten ist, wird er auf 0 gesetzt, was keine Unschärfe bedeutet. Dies kann die meisten verfügbaren CSS-[Längen- und Maßgrößeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) akzeptieren.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn sie nicht eingeschlossen ist, wird sie standardmäßig auf [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) gesetzt, d.h. die Farbe des Schattens wird von der [`color`](/de/docs/Web/CSS/Reference/Properties/color)-Eigenschaft des Elements übernommen.

#### Mehrere Schatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere durch Kommas getrennte Schattenwerte angeben, zum Beispiel:

```css live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element in unserem Tommy-The-Cat-Beispiel anwenden würden, erhielten wir dies:

{{ EmbedLiveSample('4shadows', '100%', 260) }}

> [!NOTE]
> Sie können weitere interessante Beispiele für die Verwendung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) finden.

## Textlayout

Mit den grundlegenden Schriftarten-Eigenschaften haben wir nun die Möglichkeiten, die Textgestaltung zu beeinflussen.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie Text innerhalb seiner enthaltenen Inhaltsbox ausgerichtet wird. Die verfügbaren Werte sind unten aufgeführt. Sie funktionieren so ziemlich genau wie in einem normalen Textverarbeitungsprogramm:

- `left`: Linksbündiger Text.
- `right`: Rechtsbündiger Text.
- `center`: Zentrierter Text.
- `justify`: Der Text wird verteilt, indem die Abstände zwischen den Wörtern variiert werden, sodass alle Zeilen des Textes die gleiche Breite haben. Sie müssen dies sorgfältig verwenden – es kann schrecklich aussehen, insbesondere wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden möchten, sollten Sie auch über die Verwendung von etwas Anderem nachdenken, wie {{cssxref("hyphens")}}, um einige der längeren Wörter über die Linien hinweg zu unterteilen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "&lt;h1>")}} in unserem Beispiel angewendet hätten, würden wir dies erhalten:

```css hidden live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-align: center;
}
```

{{ EmbedLiveSample('5text-align', '100%', 260) }}

### Zeilenhöhe

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Maßgrößeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern auch einen einheitenlosen Wert, der als Multiplikator fungiert und im Allgemeinen als die beste Option angesehen wird. Mit einem einheitenlosen Wert wird die {{cssxref("font-size")}} multipliziert und es ergibt sich die `line-height`. Fließtext sieht im Allgemeinen schöner aus und ist leichter zu lesen, wenn die Zeilenabstände weiter auseinander liegen. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelter Abstand). Um unsere Textzeilen auf das 1,6-fache der Höhe der Schriftart zu setzen, würden wir folgendermaßen vorgehen:

```css live-sample___6line-height live-sample___7letter-word-spacing
p {
  line-height: 1.6;
}
```

Wenn wir dies auf die {{htmlelement("p")}}-Elemente in unserem Beispiel anwenden, würden wir diesen Effekt erzielen:

{{ EmbedLiveSample('6line-height', '100%', 300) }}

### Buchstaben- und Wortabstand

Die {{cssxref("letter-spacing")}}- und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen es, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden dies nicht sehr oft verwenden, könnten aber ein Konzept dafür entwickeln, um ein bestimmtes Aussehen zu erreichen oder um die Lesbarkeit eines besonders dichten Schriftbildes zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir einigen Wort- und Buchstabenzwischenraum auf die erste Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel anwenden mit:

```css live-sample___7letter-word-spacing
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Dies rendert unser HTML so:

{{ EmbedLiveSample('7letter-word-spacing', '100%', 330) }}

### Weitere Eigenschaften, die einen Blick wert sind

Die oben genannten Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie textbasiertes Styling auf einer Webseite beginnen können, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Verwendung der oben genannten gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Wechseln Sie zwischen Kapitälchen und normalen Schriftersetzungen.
- {{cssxref("font-kerning")}}: Schalten Sie die Schriftweite-Optionen ein und aus.
- {{cssxref("font-feature-settings")}}: Schalten Sie verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftartenfunktionen ein und aus.
- {{cssxref("font-variant-alternates")}}: Kontrolle der Verwendung von alternativen Glyphen für eine gegebene Schriftart.
- {{cssxref("font-variant-caps")}}: Kontrolle der Verwendung von alternativen Buchstabenglyphen.
- {{cssxref("font-variant-east-asian")}}: Kontrolle der Verwendung von alternativen Glyphen für ostasiatische Schriften, wie Japanisch und Chinesisch.
- {{cssxref("font-variant-ligatures")}}: Kontrollieren, welche Ligaturen und kontextuellen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Kontrolle der Verwendung von alternativen Glyphen für Zahlen, Brüche und Ordnungszahlen.
- {{cssxref("font-variant-position")}}: Kontrolle der Verwendung von alternativen Glyphen kleineren Formats, die als Hoch- oder Tiefstellung platziert sind.
- {{cssxref("font-size-adjust")}}: Passen Sie die visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße an.
- {{cssxref("font-stretch")}}: Wechseln Sie zwischen möglichen alternativen gedehnten Versionen einer gegebenen Schriftart.
- {{cssxref("text-underline-position")}}: Geben Sie die Position von Unterstrichen an, die mit der `text-decoration-line`-Eigenschaft `underline` gesetzt wurden.
- {{cssxref("text-rendering")}}: Versuchen, einige Textdarstellungsoptimierungen durchzuführen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Geben Sie an, wie viel horizontaler Abstand vor dem Beginn der ersten Zeile des Textinhalts verbleiben soll.
- {{cssxref("text-overflow")}}: Definieren Sie, wie überlaufener Inhalt, der nicht angezeigt wird, den Benutzern signalisiert wird.
- {{cssxref("white-space")}}: Definieren Sie, wie Leerzeichen und damit verbundene Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Geben Sie an, ob Zeilen innerhalb von Wörtern unterbrochen werden sollen.
- {{cssxref("direction")}}: Definieren Sie die Textausrichtung. (Dies hängt von der Sprache ab und normalerweise ist es besser, HTML dies erledigen zu lassen, da es mit dem Textinhalt verknüpft ist.)
- {{cssxref("hyphens")}}: Schalten Sie Trennstriche für unterstützte Sprachen ein und aus.
- {{cssxref("line-break")}}: Begünstigen oder verringern Sie den Zeilenumbruch für asiatische Sprachen.
- {{cssxref("text-align-last")}}: Definieren Sie, wie die letzte Zeile eines Blocks oder eine Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet ist.
- {{cssxref("text-orientation")}}: Definieren Sie die Ausrichtung des Textes in einer Zeile.
- {{cssxref("overflow-wrap")}}: Geben Sie an, ob der Browser Zeilen innerhalb von Wörtern unterbrechen darf, um einen Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Geben Sie an, ob Textzeilen horizontal oder vertikal angeordnet sind und in welche Richtung aufeinanderfolgende Zeilen fließen.

## Schrift-Kurzform

Viele Schrifteigenschaften können auch über die Kurzform-Eigenschaft {{cssxref("font")}} festgelegt werden. Diese werden in folgender Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}} und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn die `font`-Kurzform-Eigenschaft verwendet wird.

Es muss ein Schrägstrich zwischen den {{cssxref("font-size")}}- und {{cssxref("line-height")}}-Eigenschaften eingefügt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 "Helvetica",
  "Arial",
  sans-serif;
```

## Spielen mit textbasiertem Styling

In Ordnung, jetzt sind Sie dran. Für diese Aufgabe haben wir keine spezifischen Übungen für Sie vorbereitet. Wir möchten einfach, dass Sie ein wenig mit einigen Schrift-/Textlayout-Eigenschaften experimentieren. Sehen Sie selbst, was Sie entwickeln können!

1. Klicken Sie auf **"Play"** im Code-Block unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie einige Deklarationen zur bereitgestellten leeren `p { }`-Regel hinzu, um das Styling des bereitgestellten Textes zu ändern. Seien Sie so kreativ, wie Sie möchten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Lesen Sie die vorherigen Abschnitte des Artikels, um mehr über die einstellbaren Schrift- und Textstile zu erfahren.

```html live-sample___fonts_text
<p>Some sample text for your delight</p>
```

```css-nolint live-sample___fonts_text
p {

}
```

{{ EmbedLiveSample('fonts_text', "100%", 60) }}

## Zusammenfassung

Wir hoffen, dass Ihnen das Experimentieren mit Text in diesem Artikel gefallen hat! Der nächste Artikel wird Ihnen alles bieten, was Sie über das Styling von HTML-Listen wissen müssen.

## Siehe auch

- [Alles über die CSS-Schriftfamilie](https://explainers.dev/font-family/), explainers.dev
- [Web-sichere Schriften](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
