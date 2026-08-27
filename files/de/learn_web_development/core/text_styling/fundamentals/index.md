---
title: Grundlagen der Text- und Schriftgestaltung
short-title: Grundlagen der Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 87adaa5384b1015690f3435ce0ba64ac097764eb
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Beherrschung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Hier gehen wir im Detail auf alle grundlegenden Elemente der Text- und Schriftgestaltung ein, darunter die Einstellung von Schriftgewicht, -familie und -stil, die Kurzschrift für Schriften, Textausrichtung und andere Effekte sowie Zeilen- und Buchstabenabstand.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS-Styling</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Konzepte von Schriftfamilien, Schriftstapeln und webbasierten Schriften.</li>
          <li>Festlegen von Schriftfarbe, -gewicht, -größe und -stil.</li>
          <li>Festlegen der Textausrichtung, -umwandlung und -dekoration.</li>
          <li>Festlegen der Zeilenhöhe.</li>
          <li>Erkennen, dass es mehrere andere Schrift- und Textgestaltungsprojekte gibt, und zur weiteren Erkundung ermutigt werden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist an der Textgestaltung mit CSS beteiligt?

Text innerhalb eines Elements wird innerhalb des [Inhaltskastens](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements angeordnet. Er beginnt oben links im Inhaltsbereich (oder oben rechts bei RTL-Sprachinhalten) und fließt zum Ende der Zeile. Wenn das Ende erreicht ist, geht er zur nächsten Zeile hinunter und fließt wieder zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt im Kasten platziert wurde. Textinhalte verhalten sich effektiv wie eine Reihe von Inline-Elementen, die auf benachbarten Linien angeordnet sind und keine Zeilenumbrüche erzeugen, bis das Ende der Zeile erreicht ist oder Sie manuell einen Zeilenumbruch mit dem {{htmlelement("br")}}-Element erzwingen.

> [!NOTE]
> Wenn Ihnen der obige Absatz verwirrend vorkommt, macht das nichts — gehen Sie zurück und lesen Sie unseren Artikel zum [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) noch einmal durch, um Ihre Kenntnisse über die Theorie des Boxmodells aufzufrischen, bevor Sie weitermachen.

Die CSS-Eigenschaften, die zum Stylen von Text verwendet werden, fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten werden:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes beeinflussen, z.B. welche Schrift angewendet wird, ihre Größe und ob sie fett, kursiv usw. ist.
- **Textlayout-Stile**: Eigenschaften, die den Abstand und andere Layoutmerkmale des Textes beeinflussen und die Möglichkeit geben, z.B. den Abstand zwischen Zeilen und Buchstaben zu manipulieren und wie der Text innerhalb des Inhaltskastens ausgerichtet wird.

> [!NOTE]
> Bedenken Sie, dass der Text innerhalb eines Elements als eine einzige Entität beeinflusst wird. Sie können keine Textunterabschnitte auswählen und gestalten, es sei denn, Sie wickeln sie in ein entsprechendes Element ein (wie etwa ein {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden ein textsspezifisches Pseudoelement wie {{cssxref("::first-letter")}} (wählt den ersten Buchstaben des Textes eines Elements aus), {{cssxref("::first-line")}} (wählt die erste Zeile des Textes eines Elements aus) oder {{cssxref("::selection")}} (wählt den Text aus, der derzeit vom Cursor hervorgehoben wird).

## Schriften

Lassen Sie uns direkt zu den Eigenschaften übergehen, um Schriften zu gestalten. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel an:

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

Die {{cssxref("color")}}-Eigenschaft legt die Farbe des Vordergrundinhalts der ausgewählten Elemente fest, was normalerweise der Text ist, aber auch ein paar andere Dinge einschließen kann, wie z.B. eine Unter- oder Überlinie, die mit der {{cssxref("text-decoration")}}-Eigenschaft auf den Text gesetzt wird.

`color` kann jede [CSS-Farbenheitseinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
}
```

Das wird dazu führen, dass die Absätze rot werden, anstatt dem standardmäßigen Browser-Standard von schwarz, wie folgt:

{{ EmbedLiveSample('1color', '100%', 230) }}

### Schriftfamilien

Um eine andere Schrift für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — diese erlaubt Ihnen, eine Schriftart (oder eine Liste von Schriften) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wird nur dann eine Schriftart anwenden, wenn sie auf dem Gerät verfügbar ist, auf dem die Website angezeigt wird; wenn nicht, wird er einfach eine browser [Standard-Schriftart](#standardschriftarten) verwenden. Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: "Arial";
}
```

Dies würde alle Absätze auf einer Seite dazu bringen, die Schrift Arial zu übernehmen, die auf jedem Computer zu finden ist.

> [!NOTE]
> Scrimbas [Web-sichere Schriften](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Lektion bietet einen interaktiven Leitfaden, warum Schriften wichtig sind, web-sichere Schriften und wie man Schriften in CSS anwendet — nebst einer Herausforderung, um Ihr Wissen zu testen.

#### Websichere Schriften

Apropos Verfügbarkeit von Schriften: Es gibt nur eine bestimmte Anzahl von Schriften, die allgemein auf allen Systemen verfügbar sind und daher ohne große Sorge verwendet werden können. Diese sind die sogenannten **websicheren Schriften**.

Meistens wollen wir als Webentwickler die Schriften, die zur Anzeige unserer Textinhalte verwendet werden sollen, genauer steuern. Das Problem ist, einen Weg zu finden, um zu wissen, welche Schrift auf dem Computer verfügbar ist, den unsere Webseiten betrachten. Es gibt keine Möglichkeit, dies in jedem Fall zu wissen, aber die websicheren Schriften sind dafür bekannt, auf nahezu allen gängigen Betriebssystemen (Windows, macOS, den gängigsten Linux-Distributionen, Android und iOS) verfügbar zu sein.

Die Liste der tatsächlichen websicheren Schriften wird sich mit der Weiterentwicklung von Betriebssystemen ändern, aber es ist vernünftig, die folgenden Schriften als sicher zu betrachten, zumindest momentan (viele von ihnen wurden durch die Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90ern und frühen 2000ern populär gemacht):

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
        Es wird oft als beste Praxis angesehen, auch <em>Helvetica</em> als
        bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da,
        obwohl ihre Schriftbilder nahezu identisch sind, <em>Helvetica</em>
        als schöner geformt angesehen wird, auch wenn <em>Arial</em>
        breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere)
        Version der Schriftart <em>Courier New</em> namens <em>Courier</em>.
        Es wird als beste Praxis angesehen, beide mit <em>Courier New</em>
        als bevorzugte Alternative zu verwenden.
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
        Version der Schriftart <em>Times New Roman</em> namens <em>Times</em>.
        Es wird als beste Praxis angesehen, beide mit <em>Times New Roman</em>
        als bevorzugte Alternative zu verwenden.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig sein, diese Schriftart zu verwenden — sie ist
        auf mobilen Betriebssystemen nicht weit verbreitet.
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
> Unter verschiedenen Ressourcen pflegt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste von websicheren Schriften, die auf Windows und macOS verfügbar sind, was Ihnen bei der Entscheidung helfen kann, was Sie als sicher für Ihre Nutzung betrachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schrift zusammen mit einer Webseite herunterzuladen, um die Schriftverwendung nach Belieben anzupassen: **Web-Schriften**. Dies ist etwas komplexer, und wir werden es in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später im Modul diskutieren.

#### Standardschriftarten

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive`, und `fantasy`. Diese sind sehr generisch und das genaue Schriftbild, das aus diesen generischen Namen verwendet wird, kann zwischen jedem Browser und jedem Betriebssystem, auf dem sie angezeigt werden, variieren. Es stellt ein _Worst-Case-Szenario_ dar, bei dem der Browser sein Bestes tun wird, um eine Schrift bereitzustellen, die angemessen aussieht. `Serif`, `sans-serif`, und `monospace` sind ziemlich vorhersehbar und sollten etwas Vernünftiges bereitstellen. Andrerseits sind `cursive` und `fantasy` weniger vorhersehbar, und wir empfehlen, sie sehr sorgfältig zu verwenden und während ihrer Nutzung regelmäßig zu testen.

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
        Schriften, die Serifen haben (die Verzierungen und andere kleine Details,
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
        Schriften, bei denen jedes Zeichen die gleiche Breite hat, typischerweise
        in Programmcode-Auflistungen verwendet.
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
        Schriften, die beabsichtigt sind, Handschrift nachzuahmen, mit fließenden,
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
      <td>Schriften, die zur Dekoration gedacht sind.</td>
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

Da Sie die Verfügbarkeit der Schriften auf Ihren Webseiten nicht garantieren können (sogar eine Web-Schrift könnte aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** angeben, damit der Browser mehrere Schriften zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert, der aus mehreren durch Kommata getrennten Schriftarten besteht, z.B.

```css
p {
  font-family: "Trebuchet MS", "Verdana", sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob diese Schriftart auf dem Rechner verfügbar ist. Wenn ja, wendet er diese Schrift auf die ausgewählten Elemente an. Wenn nicht, wird zur nächsten Schrift weitergegangen, und so weiter.

Es ist eine gute Idee, einen geeigneten generischen Schriftartnamen am Ende des Stapels anzugeben, damit, wenn keine der aufgelisteten Schriften verfügbar ist, der Browser zumindest etwas annähernd Geeignetes bereitstellen kann. Um diesen Punkt hervorzuheben, werden Absätze mit der standardmäßigen Serifenschrift des Browsers widergegeben, wenn keine andere Option verfügbar ist — normalerweise Times New Roman — das ist nicht gut für eine Sans-Serif-Schrift!

> [!NOTE]
> Während Sie Schriftartnamen verwenden können, die ein Leerzeichen enthalten, wie `Trebuchet MS`, ohne den Namen zu zitieren, wird empfohlen, Schriftartnamen, die Leerzeichen, Ziffern oder Interpunktionszeichen außer Bindestrichen enthalten, zu zitieren, um Fehler beim Escaping zu vermeiden.

> [!WARNING]
> Jeder Schriftartname, der als generischer Familienname oder CSS-weites Schlüsselwort missverstanden werden könnte, muss zitiert werden. Während die Schriftartnamen als {{cssxref("custom-ident")}} oder {{cssxref("string")}} enthalten sein können, müssen Schriftartnamen, die zufällig denselben Namen wie ein CSS-weitwertigwert oder die generischen Schriftennamen haben, wie `sans-serif` oder `fantasy`, als Zeichenfolge in Anführungszeichen aufgenommen werden. Andernfalls wird der Schriftartname als CSS-Schlüsselwort oder generischer Familienname interpretiert. Bei der Verwendung als Schlüsselwörter dürfen die generischen Schriften - `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` - und die globalen CSS-Schlüsselwörter NICHT in Anführungszeichen gesetzt werden, da Zeichenfolgen nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für font-family

Lassen Sie uns unser vorheriges Beispiel erweitern, indem wir den Absätzen eine Sans-Serif-Schrift geben:

```css live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Dies liefert das folgende Ergebnis:

{{ EmbedLiveSample('2fonts', '100%', 220) }}

### Schriftgröße

In unserem vorherigen Modulartikel zu [CSS-Werten und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben wir Länge und Größe der Einheiten überprüft. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten gemessen werden (und andere, wie [Prozentsätze](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)); jedoch sind die häufigsten Einheiten, die Sie zum Vergrößern des Textes verwenden werden:

- `px` (Pixel): Die Anzahl der Pixel, die der Text hoch sein soll. Dies ist eine absolute Einheit — sie resultiert in demselben finalen berechneten Wert für die Schrift auf der Seite in nahezu jeder Situation.
- `em`s: 1 `em` entspricht der auf das übergeordnete Element der aktuellen Elemente eingestellten Schriftgröße (genauer gesagt, die Breite eines Großbuchstabens M, der im übergeordneten Element enthalten ist). Dies kann schwierig zu berechnen sein, wenn Sie viele verschachtelte Elemente mit verschiedenen Schriftgrößen haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich die Mühe machen? Es ist ganz natürlich, sobald Sie sich daran gewöhnt haben, und Sie können `em` verwenden, um alles zu skalieren, nicht nur Text. Sie können eine gesamte Website mit `em` skalieren, was die Wartung erleichtert.
- `rem`s: Diese funktionieren genauso wie `em`, außer dass 1 `rem` der Schriftgröße entspricht, die auf das Wurzelelement des Dokuments (d.h. {{htmlelement("html")}}) festgelegt ist, nicht auf das übergeordnete Element. Dies macht die Berechnung der Schriftgrößen viel einfacher.

Die `font-size` eines Elements wird vom übergeordneten Element dieses Elements vererbt. Dies beginnt alles mit dem Wurzelelement des gesamten Dokuments — {{htmlelement("html")}} — dessen standardmäßige `font-size` auf `16px` browserübergreifend eingestellt ist. Jeder Absatz (oder ein anderes Element, das nicht von anderen Browsern unterschiedlich skaliert ist) innerhalb des Wurzelelements wird eine endgültige Größe von `16px` haben. Andere Elemente können unterschiedliche Standardgrößen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}} Element standardmäßig eine Größe von `2em`, so dass es eine endgültige Größe von `32px` hat.

Dinge werden komplizierter, wenn Sie die Schriftgröße verschachtelter Elemente ändern. Zum Beispiel, wenn Sie ein {{htmlelement("article")}}-Element auf Ihrer Seite haben und dessen `font-size` auf 1.5 `em` setzen (die in einer endgültigen Größe von 24 `px` errechnet wird), und dann die Absätze innerhalb der `<article>`-Elemente auf eine berechnete Schriftgröße von 20 `px` setzen wollen, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten seinen `em`-Wert auf 20/24 setzen, oder 0.83333333 `em`. Die Mathematik kann kompliziert sein, also müssen Sie vorsichtig sein, wie Sie Dinge gestalten. Es ist am besten, `rem` zu verwenden, wo immer möglich, um die Dinge einfach zu halten und das Setzen der `font-size` von Container-Elementen, wo möglich, zu vermeiden.

### Schriftstil, Schriftgewicht, Textumwandlung und Textdekoration

CSS bietet vier allgemeine Eigenschaften, um das visuelle Gewicht / die Betonung des Textes zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um kursiven Text ein- oder auszuschalten. Mögliche Werte sind wie folgt (Sie werden dies selten verwenden, es sei denn, Sie wollen aus irgendeinem Grund einige Kursiv-Stile ausschalten):
  - `normal`: Setzt den Text auf den normalen Font (schaltet bestehende Kursivschrift aus).
  - `italic`: Setzt den Text so, dass die kursivierte Version des Fonts verwendet wird, wenn verfügbar; falls nicht, wird sie eine Kursivschrift mit oblique simulieren.
  - `oblique`: Setzt den Text so, dass er eine simulierte Version eines kursivierten Fonts verwendet, der durch Schrägstellen der normalen Version erstellt wurde.

- {{cssxref("font-weight")}}: Setzt, wie fett der Text ist. Dies hat viele verfügbare Werte, falls Sie viele Schriftvarianten verfügbar haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_, etc.), aber realistischerweise werden Sie sie selten verwenden, außer `normal` und `bold`:
  - `normal`, `bold`: Normales und fettes Schriftgewicht.
  - `lighter`, `bolder`: Setzt die Fettung des aktuellen Elements auf einen Schritt leichter oder schwerer als die Fettung des übergeordneten Elements.
  - `100` – `900`: Numerische Fettungswerte, die definierteren als die obigen Schlüsselwörter, wenn nötig.

- {{cssxref("text-transform")}}: Ermöglicht Ihnen, Ihre Schrift transformieren zu lassen. Zu den Werten gehören:
  - `none`: Verhindert jegliche Umwandlung.
  - `uppercase`: Wandelt den gesamten Text in Großbuchstaben um.
  - `lowercase`: Wandelt den gesamten Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter um, damit der erste Buchstabe groß geschrieben wird.
  - `full-width`: Wandelt alle Glyphen so um, dass sie in ein festes quadratisches Format geschrieben werden, ähnlich wie bei einer Monospace-Schrift, was die Ausrichtung von z.B. lateinischen Zeichen zusammen mit asiatischen Spracheglyphen (wie Chinesisch, Japanisch, Koreanisch) ermöglicht.

- {{cssxref("text-decoration")}}: Setzt / hebt Textdekorationen auf Schriften auf (Sie werden dies hauptsächlich verwenden, um die standardmäßige Unterstreichung auf Links beim Styling aufzuheben). Verfügbare Werte sind:
  - `none`: Hebt jegliche bereits vorhandene Textdekorationen auf.
  - `underline`: Unterstreicht den Text.
  - `overline`: Gibt dem Text eine Überlinie.
  - `line-through`: Verpasst dem Text eine durchgestrichene Linie.

  Beachten Sie, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, z.B. `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzform für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzeugen, z.B.: `text-decoration: line-through red wavy`.

Lassen Sie uns einige dieser Eigenschaften zu unserem Beispiel hinzufügen:

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

Sie können Textschirmungen mit der {{cssxref("text-shadow")}}-Eigenschaft anwenden. Diese nimmt bis zu vier Werte an, wie im Beispiel unten gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom ursprünglichen Text — dies kann die meisten verfügbaren CSS [Längen und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, aber Sie werden meistens `px` verwenden; positive Werte bewegen den Schatten nach rechts, und negative Werte nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Versatz des Schattens vom ursprünglichen Text. Dies verhält sich ähnlich wie der horizontale Versatz, außer dass er den Schatten nach oben/unten bewegt, nicht nach links/rechts. Dieser Wert muss enthalten sein.
3. Der Weichzeichnungsradius: ein höherer Wert bedeutet, dass der Schatten weiter streut. Wenn dieser Wert nicht enthalten ist, wird er standardmäßig auf 0 gesetzt, was bedeutet, dass keine Weichzeichnung vorhanden ist. Dies kann die meisten verfügbaren CSS [Längen und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbeneinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn nicht enthalten, wird es standardmäßig [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword), d.h. die Farbe des Schattens wird von der {{cssxref("color")}}-Eigenschaft des Elements übernommen.

#### Mehrere Schatten

Sie können einem Text mehrere Schatten hinzufügen, indem Sie mehrere Schattenswerte durch Kommas trennen, z.B.:

```css live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element in unserem Tommy The Cat-Beispiel anwenden würden, hätten wir dieses Ergebnis:

{{ EmbedLiveSample('4shadows', '100%', 260) }}

> [!NOTE]
> Sie können interessantere Beispiele für die Verwendung von `text-shadow` im Sitepoint-Artikel [Mondlicht mit CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) sehen.

## Textlayout

Nachdem wir die grundlegenden Schriftsarten behandelt haben, werfen wir einen Blick auf Eigenschaften, die wir zur Beeinflussung des Textlayouts verwenden können.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie Text innerhalb seines enthaltenden Inhaltskastens ausgerichtet wird. Die verfügbaren Werte sind unten aufgelistet. Sie funktionieren im Wesentlichen genauso wie in einem regulären Textverarbeitungsprogramm:

- `left`: Links ausrichten des Textes.
- `right`: Rechts ausrichten des Textes.
- `center`: Zentrieren des Textes.
- `justify`: Verteilt den Text, indem die Abstände zwischen den Wörtern so variiert werden, dass alle Zeilen des Textes die gleiche Breite haben. Sie müssen dies sorgfältig verwenden — es kann schrecklich aussehen, insbesondere wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden möchten, sollten Sie in Betracht ziehen, etwas anderes damit zu verwenden, wie {{cssxref("hyphens")}}, um einige der längeren Wörter über Zeilen hinweg zu teilen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element in unserem Beispiel anwenden würden, hätten wir folgendas Ergebnis:

```css hidden live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-align: center;
}
```

{{ EmbedLiveSample('5text-align', '100%', 260) }}

### Zeilenhöhe

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern auch einen einheitslosen Wert, der als Multiplikator fungiert und allgemein als beste Option gilt. Mit einem einheitslosen Wert wird die {{cssxref("font-size")}} multipliziert und resultiert in der `line-height`. Fließtext sieht im Allgemeinen schöner aus und ist leichter zu lesen, wenn die Zeilen auseinander abgesetzt sind. Die empfohlene Zeilenhöhe liegt bei etwa 1.5 – 2 (doppelter Zeilenabstand). Um unsere Zeilen von Text auf das 1,6-fache der Höhe der Schrift festzulegen, würden wir verwenden:

```css live-sample___6line-height live-sample___7letter-word-spacing
p {
  line-height: 1.6;
}
```

Wenn wir dies auf die {{htmlelement("p")}}-Elemente in unserem Beispiel anwenden, würden wir dieses Ergebnis erhalten:

{{ EmbedLiveSample('6line-height', '100%', 300) }}

### Zwischenraum zwischen Buchstaben und Wörtern

Die {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden diese nicht sehr oft verwenden, könnten aber einen Nutzen darin finden, einen bestimmten Look zu erzeugen oder die Lesbarkeit einer besonders dichten Schrift zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir dem ersten Satz eines jeden {{htmlelement("p")}}-Elements in unserem HTML-Beispiel etwas Wort- und Buchstabenabstand hinzufügen mit:

```css live-sample___7letter-word-spacing
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Das rendert unser HTML als:

{{ EmbedLiveSample('7letter-word-spacing', '100%', 330) }}

### Weitere interessante Eigenschaften

Die oben genannten Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie anfangen können, Text auf einer Webseite zu gestalten, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die obigen gewöhnt haben, sollten Sie auch Folgendes erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Zwischen kleinen Großbuchstaben und normalen Schriftenalternativen wechseln.
- {{cssxref("font-kerning")}}: Schriftkerning-Optionen ein- und ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType) Schriftmerkmale ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Die Verwendung alternativer Glyphen für eine bestimmte Schriftart steuern.
- {{cssxref("font-variant-caps")}}: Die Verwendung alternativer Großbuchstabendecodierung steuern.
- {{cssxref("font-variant-east-asian")}}: Die Verwendung alternativer Glyphen für ostasiatische Schrifttypen steuern, wie Japanisch und Chinesisch.
- {{cssxref("font-variant-ligatures")}}: Steuert, welche Ligaturen und kontextuellen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordnungsmarker steuern.
- {{cssxref("font-variant-position")}}: Die Verwendung alternativer Glyphen in kleineren Größen, die als Hoch- oder Tiefstellungszeichen positioniert sind, steuern.
- {{cssxref("font-size-adjust")}}: Die visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße anpassen.
- {{cssxref("font-stretch")}}: Zwischen möglichen Alternativen gestreckter Versionen einer bestimmten Schriftart wechseln.
- {{cssxref("text-underline-position")}}: Die Position der mit der `text-decoration-line`-Eigenschaft `underline` gesetzten Unterstreichungen angeben.
- {{cssxref("text-rendering")}}: Versuchen Sie, einige Textwiedergabe-Optimierungen durchzuführen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Angeben, wie viel horizontaler Raum vor Beginn der ersten Zeile des Textinhalts gelassen werden soll.
- {{cssxref("text-overflow")}}: Definieren, wie überlaufender Inhalt, der nicht angezeigt wird, den Benutzern angezeigt wird.
- {{cssxref("white-space")}}: Definieren, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Angeben, ob Zeilen innerhalb von Wörtern gebrochen werden sollen.
- {{cssxref("direction")}}: Definieren der Textrichtung. (Dies hängt von der Sprache ab und in der Regel ist es besser, HTML dies regeln zu lassen, da es mit dem Textinhalt verbunden ist.)
- {{cssxref("hyphens")}}: Silbentrennung für unterstützte Sprachen ein- und ausschalten.
- {{cssxref("line-break")}}: Zeilenbrechung für asiatische Sprachen lockern oder stärken.
- {{cssxref("text-align-last")}}: Angeben, wie die letzte Zeile eines Blocks oder einer Zeile direkt vor einem erzwungenen Zeilenumbruch ausgerichtet wird.
- {{cssxref("text-orientation")}}: Die Ausrichtung des Textes in einer Zeile definieren.
- {{cssxref("overflow-wrap")}}: Angeben, ob der Browser Zeilen innerhalb von Wörtern brechen kann, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Definieren, ob Textzeilen horizontal oder vertikal angeordnet sind und in welche Richtung nachfolgende Zeilen fließen.

## Schrift-Kurzschrift

Viele Schrifteigenschaften können auch über die Kurzschrifteigenschaft {{cssxref("font")}} eingestellt werden. Diese werden in der folgenden Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn die Kurzschrifteigenschaft `font` verwendet wird.

Ein Schrägstrich muss zwischen die Eigenschaften {{cssxref("font-size")}} und {{cssxref("line-height")}} gesetzt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 "Helvetica",
  "Arial",
  sans-serif;
```

## Spielen mit Textgestaltung

OK, jetzt sind Sie dran. Für diese Aufgabe haben wir keine spezifischen Übungen für Sie. Wir möchten nur, dass Sie einige Schrift-/Textlayout-Eigenschaften ausprobieren. Sehen Sie selbst, was Sie herausfinden können!

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie einige Deklarationen in die bereitgestellte leere `p { }`-Regel ein, um die Gestaltung des bereitgestellten Textes zu ändern. Seien Sie so kreativ, wie Sie möchten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Beziehen Sie sich auf die vorherigen Abschnitte im Artikel, um mehr Informationen über die Schrift- und Textstile zu finden, die Sie festlegen können.

```html live-sample___fonts_text
<p>Some sample text for your delight</p>
```

```css-nolint live-sample___fonts_text
p {

}
```

{{ EmbedLiveSample('fonts_text', "100%", 60) }}

## Zusammenfassung

Wir hoffen, dass Sie Spaß daran hatten, mit Text in diesem Artikel zu spielen! Der nächste Artikel wird Ihnen alles Wissenswerte über die Gestaltung von HTML-Listen bereitstellen.

## Siehe auch

- [Alles über die CSS-Eigenschaft font-family](https://explainers.dev/font-family/), explainers.dev
- [Web-sichere Schriften](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
