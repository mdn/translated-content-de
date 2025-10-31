---
title: Grundlegende Text- und Schriftart-Stilgestaltung
short-title: Grundlagen der Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Meisterung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Wir werden alle grundlegenden Grundlagen der Text-/Schriftart-Stilgestaltung im Detail durchgehen, einschließlich der Einstellung von Schriftgewicht, -familie und -stil, der Kurzschrift für Schriftarten, der Textausrichtung und anderer Effekte sowie des Zeilen- und Buchstabenabstands.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Konzepte von Schriftfamilien, Schriftstapeln und web-sicheren Schriftarten.</li>
          <li>Festlegung von Schriftfarbe, -gewicht, -größe und -stil.</li>
          <li>Festlegung der Textausrichtung, -transformation und -dekoration.</li>
          <li>Festlegung der Zeilenhöhe.</li>
          <li>Wissen, dass es mehrere andere Eigenschaften zur Gestaltung von Schriftarten und Texten gibt und Ermutigung, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist bei der Textgestaltung in CSS zu beachten?

Text innerhalb eines Elements wird innerhalb des [Content-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements platziert. Er beginnt oben links im Inhaltsbereich (oder oben rechts bei RTL-Sprachinhalten) und fließt bis zum Ende der Zeile. Sobald er das Ende erreicht, geht er in die nächste Zeile über und fließt erneut bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in die Box eingefügt wurde. Textinhalt verhält sich effektiv wie eine Reihe von Inline-Elementen, die auf Linien nebeneinander angeordnet sind und keine Zeilenumbrüche erzeugen, bis das Ende der Linie erreicht ist, es sei denn, Sie erzwingen manuell einen Zeilenumbruch mithilfe des {{htmlelement("br")}}-Elements.

> [!NOTE]
> Wenn der obige Absatz Sie verwirrt fühlen lässt, spielt das keine Rolle — gehen Sie zurück und überarbeiten Sie unseren [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Artikel, um sich über die Theorie des Box-Modells aufzuklären, bevor Sie weitermachen.

Die CSS-Eigenschaften zur Textgestaltung fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten werden:

- **Schriftstile**: Eigenschaften, die sich auf die Schrift eines Textes auswirken, z.B. welche Schriftart angewendet wird, deren Größe und ob sie fett, kursiv usw. ist.
- **Textlayout-Stile**: Eigenschaften, die sich auf den Zeilenabstand und andere Layoutmerkmale des Textes auswirken und beispielsweise die Anpassung des Abstands zwischen Zeilen und Buchstaben sowie die Ausrichtung des Textes innerhalb der Inhaltsbox ermöglichen.

> [!NOTE]
> Beachten Sie, dass der Text innerhalb eines Elements als eine einzige Einheit behandelt wird. Sie können keine Unterabschnitte des Textes auswählen und stylen, es sei denn, Sie umwickeln sie mit einem geeigneten Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden ein textspezifisches Pseudoelement wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements aus), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements aus), oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den Text aus, der gerade vom Cursor hervorgehoben wurde).

## Schriftarten

Lassen Sie uns direkt zu den Eigenschaften übergehen, die Schriftarten gestalten. In diesem Beispiel werden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel anwenden:

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

Die {{cssxref("color")}}-Eigenschaft setzt die Farbe des Vordergrundinhalts ausgewählter Elemente, was meist der Text ist, aber auch einige andere Dinge umfassen kann, wie etwa eine Unter- oder Überlinie, die mithilfe der {{cssxref("text-decoration")}}-Eigenschaft auf den Text gesetzt wird.

`color` kann jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
}
```

Dadurch werden die Absätze rot anstelle des Standard-Schwarz der Browser, wie folgt:

{{ EmbedLiveSample('1color', '100%', 230) }}

### Schriftfamilien

Um eine andere Schriftart für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — dies ermöglicht es Ihnen, eine Schriftart (oder Liste von Schriftarten) für den Browser zu spezifizieren, die auf die ausgewählten Elemente angewendet werden soll. Der Browser wendet nur dann eine Schriftart an, wenn sie auf dem Gerät verfügbar ist, auf dem die Website aufgerufen wird; andernfalls verwendet er einfach eine [Standard-Schriftart](#standard-schriftarten) des Browsers. Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: "Arial";
}
```

Dies würde alle Absätze auf einer Seite die Arial-Schrift übernehmen lassen, die auf jedem Computer zu finden ist.

> [!NOTE]
> Das [Web-safe fonts](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>-Scrim von Scrimba bietet einen interaktiven Leitfaden dazu, warum Schriftarten wichtig sind, zu web-sicheren Schriftarten und wie man Schriftarten in CSS spezifiziert — zusammen mit einer Herausforderung, um Ihr Wissen zu testen.

#### Web-sichere Schriftarten

Apropos Schriftverfügbarkeit: Es gibt nur eine bestimmte Anzahl von Schriftarten, die generell in allen Systemen verfügbar sind und daher ohne große Sorgen verwendet werden können. Diese werden als **web-sichere Schriftarten** bezeichnet.

Die meiste Zeit möchten wir als Webentwickler mehr spezifische Kontrolle über die Schriftarten haben, mit denen unsere Textinhalte angezeigt werden. Das Problem besteht darin, einen Weg zu finden, um zu wissen, welche Schriftart auf dem Computer verfügbar ist, der unsere Webseiten anzeigt. Es gibt keinen Weg, dies in jedem Fall zu wissen, aber die web-sicheren Schriftarten sind bekannt dafür, auf fast allen Instanzen der meistgenutzten Betriebssysteme verfügbar zu sein (Windows, macOS, die gängigsten Linux-Distributionen, Android und iOS).

Die Liste der tatsächlichen web-sicheren Schriftarten wird sich mit der Entwicklung der Betriebssysteme ändern, aber es ist vernünftig, die folgenden Schriftarten als web-sicher zu betrachten, zumindest für den Moment (viele von ihnen wurden durch die Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90ern und frühen 2000ern populär gemacht):

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
        Es gilt oft als Best Practice, auch <em>Helvetica</em> als bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da, obwohl ihre Schriftbilder fast identisch sind, <em>Helvetica</em> als schöner betrachtet wird, auch wenn <em>Arial</em> breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der Schriftart <em>Courier New</em>, die <em>Courier</em> genannt wird. Es wird als Best Practice angesehen, beide zu verwenden, wobei <em>Courier New</em> als bevorzugte Alternative gilt.
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
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der <em>Times New Roman</em>-Schriftart, die <em>Times</em> genannt wird. Es wird als Best Practice angesehen, beide zu verwenden, wobei <em>Times New Roman</em> als bevorzugte Alternative gilt.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Man sollte vorsichtig mit der Verwendung dieser Schriftart sein — sie ist auf mobilen Betriebssystemen nicht weit verbreitet.
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
> Unter den verschiedenen Ressourcen unterstützt die Website [cssfontstack.com](https://www.cssfontstack.com/) die Auflistung der web-sicheren Schriftarten, die auf Windows- und macOS-Betriebssystemen verfügbar sind, was Ihnen dabei helfen kann, Ihre Entscheidung darüber zu treffen, was Sie für Ihre Nutzung als sicher erachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, um Ihnen zu ermöglichen, Ihre Schriftartnutzung in jeder gewünschten Weise anzupassen: **Webfonts**. Dies ist ein wenig komplexer und wir werden dies in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später im Modul besprechen.

#### Standard-Schriftarten

CSS definiert fünf generische Namen für Schriftarten: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr allgemein gehalten, und das exakte Schriftbild, das basierend auf diesen generischen Namen benutzt wird, kann von Browser zu Browser und von Betriebssystem zu Betriebssystem variieren, auf dem sie angezeigt werden. Sie repräsentieren ein **Worst-Case-Szenario**, bei dem der Browser sein Bestes versucht, um eine passende Schriftart bereitzustellen. `serif`, `sans-serif` und `monospace` sind recht vorhersehbar und sollten etwas vernünftiges bieten. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar, und wir empfehlen, diese mit Vorsicht zu verwenden und bei der Verwendung regelmäßig zu testen.

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
        Schriften, die Serifen haben (die Verzierungen und anderen kleinen Details, die Sie am Ende der Striche in einigen Schriftbildern sehen).
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
        Schriften, bei denen jedes Zeichen die gleiche Breite hat, typischerweise in Code-Listings verwendet.
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
        Schriften, die beabsichtigen, Handschrift zu imitieren, mit fließenden, verbundenen Strichen.
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

Da Sie nicht garantieren können, dass die Schriftarten, die Sie auf Ihren Webseiten verwenden möchten, verfügbar sind (selbst eine Webschrift _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** angeben, damit der Browser aus mehreren Schriftarten wählen kann. Dies beinhaltet einen `font-family` Wert, der aus mehreren durch Kommas getrennten Schriftnamen besteht, zum Beispiel:

```css
p {
  font-family: "Trebuchet MS", "Verdana", sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und schaut, ob diese Schriftart auf dem Gerät verfügbar ist. Wenn ja, wird diese Schriftart auf die ausgewählten Elemente angewendet. Wenn nicht, fährt er mit der nächsten Schriftart fort, und so weiter.

Es ist eine gute Idee, einen geeigneten generischen Schriftnamen am Ende des Stapels anzugeben, damit falls keine der aufgeführten Schriftarten verfügbar ist, der Browser zumindest etwas annähernd Passendes bereitstellen kann. Um diesen Punkt zu betonen, werden Absätze standardmäßig mit der Serifenschrift des Browsers angezeigt, wenn keine andere Option verfügbar ist — was normalerweise Times New Roman ist — das ist für eine serifenlose Schriftart nicht gut!

> [!NOTE]
> Während Sie Schriftfamiliennamen verwenden können, die Leerzeichen enthalten, wie `Trebuchet MS`, ohne den Namen zu zitieren, wird empfohlen, Schriftnamen zu zitieren, die Leerzeichen, Ziffern oder andere Satzzeichen als Bindestriche enthalten, um Fehler bei der Escape-Verarbeitung zu vermeiden.

> [!WARNING]
> Jeder Schriftfamilienname, der möglicherweise als generischer Familienname oder als CSS-weiter Schlüsselwort missverstanden werden könnte, muss in Anführungszeichen gesetzt werden. Während die Schriftfamiliennamen als {{cssxref("custom-ident")}} oder {{cssxref("string")}} enthalten sein können, müssen Schriftnamen, die zufällig denselben Namen wie ein CSS-weites Eigenschaftswert haben, wie `initial` oder `inherit`, oder CSS dasselbe wie die generischen Schriftfamiliennamen haben, wie `sans-serif` oder `fantasy`, als Zeichenkette eingeschlossen werden. Ansonsten wird der Schriftfamilienname als das gleichwertige CSS-Schlüsselwort oder der generische Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, müssen die generischen Schriftfamiliennamen —`serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT in Anführungszeichen gesetzt werden, da Zeichenketten nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für `font-family`

Lassen Sie uns unser vorheriges Beispiel fortführen und den Absätzen eine serifenlose Schriftart geben:

```css live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Dies ergibt dann das folgende Ergebnis:

{{ EmbedLiveSample('2fonts', '100%', 220) }}

### Schriftgröße

In unserem letzten Modul über [CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben wir Längen- und Größeneinheiten besprochen. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte in den meisten dieser Einheiten (und andere, wie [Prozentsätze](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) annehmen; die am häufigsten verwendeten Einheiten zur Texteinstellung sind jedoch:

- `px` (Pixel): Die Anzahl der Pixel, die die Textgröße sein soll. Dies ist eine absolute Einheit — sie ergibt denselben endgültigen berechneten Wert für die Schrift auf der Seite in fast jeder Situation.
- `em`s: 1 `em` entspricht der Schriftgröße, die für das übergeordnete Element des aktuellen zu gestaltenden Elements festgelegt wurde (genauer gesagt, der Breite eines Großbuchstabens M, der innerhalb des übergeordneten Elements enthalten ist). Wenn Sie viele verschachtelte Elemente mit verschiedenen Schriftgrößen haben, kann dies kompliziert werden, ist aber machbar, wie Sie unten sehen werden. Warum sich die Mühe machen? Es ist ganz natürlich, sobald Sie sich daran gewöhnen, und Sie können `em` verwenden, um alles zu dimensionieren, nicht nur Text. Sie können eine gesamte Website mit `em` dimensionieren, was die Wartung einfach macht.
- `rem`s: Diese funktionieren genauso wie `em`, mit dem Unterschied, dass 1 `rem` der Schriftgröße entspricht, die für das Root-Element des Dokuments (d.h. {{htmlelement("html")}}) festgelegt wurde, nicht dem übergeordneten Element. Das macht das Rechnen zur Berechnung Ihrer Schriftgrößen viel einfacher.

Die `font-size` eines Elements wird von dem übergeordneten Element dieses Elements geerbt. Das alles beginnt mit dem Stamm-Element des gesamten Dokuments — {{htmlelement("html")}} — dem standardmäßig in den Browsern eine `font-size` von `16px` zugewiesen wird. Jeder Absatz (oder ein anderes Element, für das nicht eine andere Größe vom Browser festgelegt wurde) innerhalb des Root-Elements hat eine Endgröße von `16px`. Andere Elemente können unterschiedliche Standardgrößen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}}-Element standardmäßig eine Einstellung von `2em`, so dass es eine endgültige Größe von `32px` hat.

Die Dinge werden komplizierter, wenn Sie die Schriftgröße von verschachtelten Elementen ändern. Wenn Sie z.B. ein {{htmlelement("article")}}-Element auf Ihrer Seite haben und dessen `font-size` auf 1,5 `em` (was einer Endgröße von 24 `px` entspricht) setzen und dann möchten, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten deren `em`-Wert auf 20/24, oder 0.83333333 `em` setzen. Die Berechnungen können kompliziert sein, daher müssen Sie vorsichtig sein, wie Sie Dinge gestalten. Am besten verwenden Sie `rem`, wo Sie können, um die Dinge einfach zu halten, und vermeiden Sie, die `font-size` von Container-Elementen festzulegen, wo möglich.

### Schriftart-Stil, Schriftgewicht, Textumwandlung und Textdekoration

CSS bietet vier übliche Eigenschaften, um das visuelle Gewicht/Die Betonung des Textes zu ändern:

- {{cssxref("font-style")}}: Verwendet, um kursiven Text ein- oder auszuschalten. Mögliche Werte sind wie folgt (sie verwenden dies selten, es sei denn, sie möchten aus irgendeinem Grund vorhandenes kursiv ausschalten):
  - `normal`: Setzt den Text auf die normale Schrift (schaltet vorhandene Kursivschrift aus).
  - `italic`: Setzt den Text auf die kursiven Version der Schrift, falls verfügbar; wenn nicht, wird die Kursivschrift mit Schräg verwendet simuliert.
  - `oblique`: Setzt den Text auf die simulierte Version einer kursiven Schriftart, die durch Schrägeneigung der normalen Version erzeugt wird.

- {{cssxref("font-weight")}}: Setzt, wie fett der Text ist. Diese Eigenschaft bietet viele Werte für den Fall, dass viele Schriftvarianten verfügbar sind (wie _-leicht_, _-normal_, _-fett_, _-extrafett_, _-schwarz_, etc.), aber realistisch werden Sie selten einen davon verwenden, außer `normal` und `bold`:
  - `normal`, `bold`: Normales und fettes Schriftgewicht.
  - `lighter`, `bolder`: Setzt die Fettschrift des aktuellen Elements ein Schritt leichter oder schwerer als die Fettschrift des übergeordneten Elements.
  - `100` – `900`: Numerische Fettigkeitswerte, die eine detailliertere Kontrolle als die obigen Schlüsselwörter erlauben, falls erforderlich.

- {{cssxref("text-transform")}}: Ermöglicht das Festlegen der Transformation auf Ihrer Schrift. Werte umfassen:
  - `none`: Verhindert jede Transformation.
  - `uppercase`: Wandelt den gesamten Text in Großbuchstaben um.
  - `lowercase`: Wandelt den gesamten Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter um, sodass der erste Buchstabe großgeschrieben wird.
  - `full-width`: Wandelt alle Glyphen so um, dass sie innerhalb eines festen quadratischen Rasters geschrieben werden, ähnlich wie bei einem Monospace-Font und ermöglicht so die Ausrichtung von z. B. lateinischen Zeichen zusammen mit asiatischen Schriftzeichen (wie Chinesisch, Japanisch, Koreanisch).

- {{cssxref("text-decoration")}}: Setzt/Entfernt Textdekorationen auf Schriftarten (Sie werden dies hauptsächlich verwenden, um die Standard-Unterstreichung auf Links beim Stylen zu entfernen). Verfügbare Werte sind:
  - `none`: Hebt alle bereits vorhandenen Textdekorationen auf.
  - `underline`: Unterstreicht den Text.
  - `overline`: Gibt dem Text eine Overline.
  - `line-through`: Platziert einen Durchstrich auf dem Text.

  Beachten Sie, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen zeitgleich hinzufügen möchten, z. B. `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzschreibweise für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzeugen, z. B. `text-decoration: line-through red wavy`.

Lassen Sie uns einige dieser Eigenschaften in unserem Beispiel hinzufügen:

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

Unser neues Ergebnis sieht jetzt so aus:

{{ EmbedLiveSample('3font-style', '100%', 260) }}

### Text-Schatten

Sie können Schlagschatten zu Ihrem Text mit der {{cssxref("text-shadow")}}-Eigenschaft hinzufügen. Diese nimmt bis zu vier Werte an, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Offset des Schattens vom Originaltext — das kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) akzeptieren, aber Sie werden am häufigsten `px` verwenden; positive Werte verschieben den Schatten nach rechts, und negative Werte nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Offset des Schattens vom Originaltext. Diese verhält sich ähnlich wie der horizontale Offset, mit dem Unterschied, dass er den Schatten nach oben/unten statt nach links/rechts verschiebt. Dieser Wert muss enthalten sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter verbreitet wird. Wenn dieser Wert nicht enthalten ist, wird er standardmäßig auf 0 gesetzt, was keine Unschärfe bedeutet. Auch dieser kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) akzeptieren.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbenheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn nicht enthalten, wird es standardmäßig auf [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) gesetzt, d.h. die Schattenfarbe wird von der [`color`](/de/docs/Web/CSS/Reference/Properties/color)-Eigenschaft des Elements übernommen.

#### Mehrfach-Schatten

Sie können mehrere Schatten auf den gleichen Text anwenden, indem Sie mehrere Schattenwerte durch Kommas getrennt angeben, z.B.:

```css live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Würden wir dies auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element in unserem Tommy The Cat-Beispiel anwenden, würden wir so enden:

{{ EmbedLiveSample('4shadows', '100%', 260) }}

> [!NOTE]
> Sie können interessant Beispiel von `text-shadow`-Nutzungen im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) siehe.

## Text-Layout

Mit den grundlegenden Schriftarteigenschaften aus dem Weg, werfen wir einen Blick auf Eigenschaften, die wir verwenden können, um Textlayouts zu beeinflussen.

### Text-Ausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie der Text innerhalb seiner enthaltenen Inhaltsbox ausgerichtet wird. Die verfügbaren Werte sind unten aufgelistet. Sie funktionieren weitgehend genauso, wie sie es in einer normalen Textverarbeitungsanwendung tun:

- `left`: Linksbündig den Text ausrichtet.
- `right`: Rechtsbündig den Text ausrichtet.
- `center`: Zentriert den Text.
- `justify`: Machen den Text verbreiten, und variieren die Lücken zwischen den Worten so, dass alle Zeilen des Textes die gleiche Breite haben. Sie müssen dies vorsichtig verwenden — es kann schrecklich aussehen, besonders wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden, sollten Sie auch etwas anderes zusammen mit verwenden, wie {{cssxref("hyphens")}}, um einige der längeren Wörter über Zeilen hinweg zu brechen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "&lt;h1>")}} in unserem Beispiel angewendet hätten, würden wir damit enden:

```css hidden live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-align: center;
}
```

{{ EmbedLiveSample('5text-align', '100%', 260) }}

### Zeilenhöhe

Die {{cssxref("line-height")}}-Eigenschaft setzt die Höhe jeder Textzeile. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern kann auch eine einheitslose Zahl annehmen, die als Multiplikator fungiert und allgemein als die beste Option betrachtet wird. Mit einem einheitslosen Wert, wird die {{cssxref("font-size")}} multipliziert und liefert das `line-height`. Fließtext sieht im Allgemeinen schöner aus und ist einfacher zu lesen, wenn die Zeilen auseinander stehen. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelter Zeilenabstand). Um unsere Zeilen auf 1,6-mal die Höhe der Schrift zu setzen, würden wir verwenden:

```css live-sample___6line-height live-sample___7letter-word-spacing
p {
  line-height: 1.6;
}
```

Wenn wir dies auf die {{htmlelement("p")}}-Elemente in unserem Beispiel anwenden, hätten wir folgendes Ergebnis:

{{ EmbedLiveSample('6line-height', '100%', 300) }}

### Buchstaben- und Wortabstand

Die {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Worten in Ihrem Text festzulegen. Sie werden diese nicht sehr häufig verwenden, könnten aber ein Bedürfnis dafür finden, um einen spezifischen Look zu erzielen oder die Lesbarkeit einer besonders dichten Schriftart zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Zur Veranschaulichung könnten wir einen Wort- und Buchstabenabstand auf die erste Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel mit:

```css live-sample___7letter-word-spacing
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Dies rendert unser HTML wie folgt:

{{ EmbedLiveSample('7letter-word-spacing', '100%', 330) }}

### Andere interessante Eigenschaften

Die obigen Eigenschaften geben Ihnen eine Vorstellung davon, wie man beginnt, Text auf einer Webseite zu gestalten, aber es gibt viel mehr Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich daran gewöhnt haben, diese oben genannten zu verwenden, sollten Sie auch die folgenden erkunden:

Schriftartenstile:

- {{cssxref("font-variant")}}: Zwischen Small Caps und normalen Schriftalternativen wechseln.
- {{cssxref("font-kerning")}}: Schrift-Kerning-Optionen ein- und ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType) Schriftmerkmale ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Die Verwendung alternativer Glyphen für eine gegebene Schriftart steuern.
- {{cssxref("font-variant-caps")}}: Die Verwendung alternativer Großbuchstaben-Glyphen steuern.
- {{cssxref("font-variant-east-asian")}}: Die Nutzung alternativer Glyphen für ostasiatische Schriftarten wie Japanisch und Chinesisch steuern.
- {{cssxref("font-variant-ligatures")}}: Steuern, welche Ligaturen und kontextabhängige Formen in Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Die Nutzung alternativer Glyhen für Ziffern, Brüche und Ordnungszeichen steuern.
- {{cssxref("font-variant-position")}}: Steuerung der Nutzung von alternativen Glyphen in kleineren Größen, positioniert als hochgestellt oder tiefgestellt.
- {{cssxref("font-size-adjust")}}: Die visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße anpassen.
- {{cssxref("font-stretch")}}: Zwischen möglichen alternativen gestreckten Versionen einer bestimmten Schriftart wechseln.
- {{cssxref("text-underline-position")}}: Die Position von durch `text-decoration-line` bestimmte Unterstreichungen festlegen.
- {{cssxref("text-rendering")}}: Versuchen, einige Textdarstellungsoptimierungen durchzuführen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Bestimmen, wie viel horizontaler Platz vor dem Beginn der ersten Zeile des Textinhalts gelassen wird.
- {{cssxref("text-overflow")}}: Definieren, wie nicht angezeigter überschüssiger Inhalt den Nutzern signalisiert wird.
- {{cssxref("white-space")}}: Definieren, wie Leerzeichen und damit verbundene Zeilenumbrüche innerhalb des Elements gehandhabt werden.
- {{cssxref("word-break")}}: Bestimmen, ob Zeilen innerhalb von Worten gebrochen werden sollen.
- {{cssxref("direction")}}: Die Textausrichtung definieren. (Dies hängt von der Sprache ab, und normalerweise ist es besser, HTML dies zu überlassen, da es mit dem Textinhalt gekoppelt ist.)
- {{cssxref("hyphens")}}: Silbentrennung für unterstützte Sprachen ein- und auschalten.
- {{cssxref("line-break")}}: Zeilenumbrüche für asiatische Sprachen lockern oder verstärken.
- {{cssxref("text-align-last")}}: Definieren, wie die letzte Zeile eines Blocks oder einer Zeile, kurz vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.
- {{cssxref("text-orientation")}}: Die Orientierung des Textes in einer Zeile definieren.
- {{cssxref("overflow-wrap")}}: Bestimmen, ob der Browser Zeilen innerhalb von Wörtern brechen darf, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Bestimmen, ob Textzeilen horizontal oder vertikal angelegt werden und in welcher Richtung sie voranschreiten.

## Einheitliche Schrift

Viele Schriftarteigenschaften können auch über die Kurzschreibweise {{cssxref("font")}} gesetzt werden. Diese sind in folgender Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn die `font`-Kurzschreibweise verwendet wird.

Ein Schrägstrich muss zwischen den {{cssxref("font-size")}} und {{cssxref("line-height")}} Eigenschaften gesetzt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 "Helvetica",
  "Arial",
  sans-serif;
```

## Mit Text-Stilgestaltung experimentieren

OK, jetzt sind Sie dran. Für diese Aufgabe haben wir keine spezifischen Übungen für Sie. Wir möchten Sie einfach dazu ermutigen, einige Schrift-/Textlayout-Eigenschaften auszuprobieren. Schauen Sie selbst, was Sie sich einfallen lassen können!

1. Klicken Sie auf **"Abspielen"** im folgenden Codeblock, um das Beispiel im MDN-Playground zu bearbeiten.
2. Fügen Sie einige Deklarationen zur bereitgestellten leeren `p { }`-Regel hinzu, um das Styling des bereitgestellten Textes zu ändern. Seien Sie so kreativ, wie Sie möchten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mithilfe der _Zurücksetzen_-Schaltfläche im MDN-Playground zurücksetzen. Verwenden Sie die vorherigen Abschnitte im Artikel, um weitere Informationen zu den Schrift- und Textstilen zu finden, die Sie festlegen können.

```html live-sample___fonts_text
<p>Some sample text for your delight</p>
```

```css-nolint live-sample___fonts_text
p {

}
```

{{ EmbedLiveSample('fonts_text', "100%", 60) }}

## Zusammenfassung

Wir hoffen, Sie haben es genossen, mit Texten in diesem Artikel zu spielen! Der nächste Artikel wird Ihnen alles vermitteln, was Sie über das Stylen von HTML-Listen wissen müssen.

## Siehe auch

- [Alles über die CSS-Schriftfamilieneigenschaft](https://explainers.dev/font-family/), explainers.dev
- [Web-sichere Schriftarten](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
