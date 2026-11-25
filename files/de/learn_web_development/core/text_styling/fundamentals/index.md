---
title: Grundlagen der Text- und Schriftgestaltung
short-title: Grundlagen zu Text und Schrift
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: b3c44f17a31e9d408d5a457ae7db82b0f7d6b6e8
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen Sie, die Textgestaltung mit {{Glossary("CSS", "CSS")}} zu erlernen. Wir behandeln die Grundlagen der Text- und Schriftgestaltung ausführlich: Schriftstärke, Schriftfamilie und Schriftstil, die Kurzschreibweise für Schrift-Eigenschaften, Textausrichtung und weitere Effekte sowie Zeilen- und Buchstabenabstände.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte von Schriftfamilien, Schriftlisten und websicheren Schriftarten verstehen.</li>
          <li>Schriftfarbe, -stärke, -größe und -stil festlegen.</li>
          <li>Textausrichtung, Texttransformation und Textdekoration festlegen.</li>
          <li>Die Zeilenhöhe festlegen.</li>
          <li>Wissen, dass es weitere Eigenschaften zur Schrift- und Textgestaltung gibt, und diese selbst erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was gehört zur Textgestaltung mit CSS?

Text innerhalb eines Elements wird in dessen [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) angeordnet. Er beginnt links oben im Inhaltsbereich (bei Text in Sprachen mit Schreibrichtung von rechts nach links rechts oben) und verläuft bis zum Ende der Zeile. Dort setzt er sich in der nächsten Zeile fort. Dieses Muster wiederholt sich, bis der gesamte Inhalt in der Box angeordnet ist. Textinhalt verhält sich dabei wie eine Folge von Inline-Elementen, die nebeneinander in Zeilen angeordnet werden. Ein Zeilenumbruch entsteht erst am Zeilenende oder wenn Sie ihn mit dem Element {{htmlelement("br")}} ausdrücklich erzwingen.

> [!NOTE]
> Falls Sie dieser Absatz verwirrt, ist das kein Problem. Lesen Sie vor dem Fortfahren noch einmal unseren Artikel zum [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um die Grundlagen aufzufrischen.

Die CSS-Eigenschaften zur Textgestaltung lassen sich im Allgemeinen in zwei Kategorien einteilen, die wir in diesem Artikel getrennt betrachten:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes beeinflussen, etwa die verwendete Schriftart, ihre Größe und ob sie fett oder kursiv erscheint.
- **Eigenschaften für das Textlayout**: Eigenschaften, die Abstände und andere Aspekte des Textlayouts beeinflussen. Damit können Sie beispielsweise den Abstand zwischen Zeilen und Buchstaben oder die Ausrichtung des Textes innerhalb der Inhaltsbox verändern.

> [!NOTE]
> Beachten Sie, dass der Text innerhalb eines Elements als Ganzes von diesen Eigenschaften beeinflusst wird. Sie können einzelne Textabschnitte nur dann auswählen und gestalten, wenn Sie sie in ein geeignetes Element einschließen (etwa {{htmlelement("span")}} oder {{htmlelement("strong")}}) oder ein textspezifisches Pseudoelement verwenden. Beispiele sind {{cssxref("::first-letter")}} (wählt den ersten Buchstaben des Textes eines Elements aus), {{cssxref("::first-line")}} (wählt die erste Textzeile eines Elements aus) und {{cssxref("::selection")}} (wählt den aktuell markierten Text aus).

## Schriftarten

Sehen wir uns die Eigenschaften zur Schriftgestaltung an. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel an:

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

Die Eigenschaft {{cssxref("color")}} legt die Farbe des Vordergrundinhalts der ausgewählten Elemente fest. Das ist in der Regel der Text, kann aber auch anderes umfassen, etwa eine Unter- oder Überstreichung, die mit der Eigenschaft {{cssxref("text-decoration")}} hinzugefügt wurde.

`color` akzeptiert jeden [CSS-Farbwert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color), zum Beispiel:

```css live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
}
```

Dadurch werden die Absätze rot statt in der standardmäßig vom Browser verwendeten Farbe Schwarz dargestellt:

{{ EmbedLiveSample('1color', '100%', 230) }}

### Schriftfamilien

Um für Ihren Text eine andere Schriftart festzulegen, verwenden Sie die Eigenschaft {{cssxref("font-family")}}. Damit geben Sie eine Schriftart (oder eine Liste von Schriftarten) an, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser verwendet eine Schriftart nur, wenn sie auf dem Gerät verfügbar ist, auf dem die Website aufgerufen wird. Andernfalls verwendet er eine [Standardschriftart](#standardschriftarten). Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: "Arial";
}
```

Damit verwenden alle Absätze auf der Seite die Schriftart Arial, die auf jedem Computer zu finden ist.

> [!NOTE]
> Scrimbas interaktive Lerneinheit [Websichere Schriftarten](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> erklärt, warum Schriftarten wichtig sind, welche Schriftarten websicher sind und wie Sie Schriftarten in CSS angeben. Außerdem enthält sie eine Aufgabe, mit der Sie Ihr Wissen prüfen können.

#### Websichere Schriftarten

Was die Verfügbarkeit von Schriftarten betrifft, gibt es nur eine begrenzte Anzahl, die im Allgemeinen auf allen Systemen vorhanden ist und daher weitgehend bedenkenlos verwendet werden kann. Das sind die sogenannten **websicheren Schriftarten**.

Als Webentwickler möchten wir meist genauer steuern, in welchen Schriftarten unsere Textinhalte angezeigt werden. Das Problem besteht darin, zu wissen, welche Schriftarten auf dem Computer verfügbar sind, auf dem unsere Webseiten betrachtet werden. Das lässt sich nicht in jedem Fall feststellen. Websichere Schriftarten sind jedoch auf nahezu allen Geräten mit den am häufigsten verwendeten Betriebssystemen verfügbar (Windows, macOS, die gängigsten Linux-Distributionen, Android und iOS).

Die Liste der tatsächlich websicheren Schriftarten ändert sich mit der Entwicklung der Betriebssysteme. Zumindest derzeit können die folgenden Schriftarten aber als websicher gelten. Viele davon wurden durch Microsofts Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ Ende der 1990er- und Anfang der 2000er-Jahre verbreitet:

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
        Es gilt oft als bewährte Vorgehensweise, <em>Helvetica</em> als
        bevorzugte Alternative zu <em>Arial</em> anzugeben. Obwohl die
        Schriftbilder nahezu identisch sind, wird die Form von
        <em>Helvetica</em> häufig als ansprechender angesehen.
        <em>Arial</em> ist allerdings weiter verbreitet.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme verfügen über eine alternative, möglicherweise
        ältere Version von <em>Courier New</em> namens <em>Courier</em>.
        Es gilt als bewährte Vorgehensweise, beide anzugeben, wobei
        <em>Courier New</em> bevorzugt wird.
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
        Einige Betriebssysteme verfügen über eine alternative, möglicherweise
        ältere Version von <em>Times New Roman</em> namens <em>Times</em>.
        Es gilt als bewährte Vorgehensweise, beide anzugeben, wobei
        <em>Times New Roman</em> bevorzugt wird.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Verwenden Sie diese Schriftart mit Bedacht: Sie ist auf mobilen
        Betriebssystemen nicht weit verbreitet.
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
> Die Website [cssfontstack.com](https://www.cssfontstack.com/) bietet unter anderem eine Liste websicherer Schriftarten für Windows und macOS. Sie kann Ihnen bei der Entscheidung helfen, welche Schriftarten Sie für Ihren Anwendungsfall als sicher ansehen.

> [!NOTE]
> Es gibt eine Möglichkeit, eine eigene Schriftart zusammen mit einer Webseite herunterzuladen. Damit können Sie die verwendeten Schriftarten frei anpassen: **Webfonts**. Das ist etwas komplexer; wir behandeln es später im Modul in einem [eigenen Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts).

#### Standardschriftarten

CSS definiert fünf generische Namen für Schriftarten: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese Namen sind sehr allgemein. Welche konkrete Schriftart dafür verwendet wird, kann je nach Browser und Betriebssystem variieren. Sie stellen eine Art _Notlösung_ dar: Der Browser versucht, eine möglichst passende Schriftart bereitzustellen. `serif`, `sans-serif` und `monospace` liefern recht vorhersehbare und brauchbare Ergebnisse. `cursive` und `fantasy` sind dagegen weniger vorhersehbar. Wir empfehlen, sie nur mit Bedacht zu verwenden und das Ergebnis jeweils zu testen.

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
        Schriftarten mit Serifen (kleinen Verzierungen und anderen Details an
        den Enden der Striche mancher Schriftarten).
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
      <td>Schriftarten ohne Serifen.</td>
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
        Schriftarten, bei denen jedes Zeichen gleich breit ist. Sie werden
        typischerweise zur Darstellung von Code verwendet.
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
        Schriftarten, die mit fließenden, verbundenen Strichen eine
        Handschrift nachahmen sollen.
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
      <td>Dekorative Schriftarten.</td>
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

#### Schriftlisten

Da Sie nicht garantieren können, dass die gewünschten Schriftarten auf den Geräten Ihrer Besucher verfügbar sind (selbst das Laden eines Webfonts _kann_ aus irgendeinem Grund fehlschlagen), können Sie eine **Schriftliste** angeben. So hat der Browser mehrere Schriftarten zur Auswahl. Dazu erhält `font-family` einen Wert aus mehreren durch Kommas getrennten Schriftartnamen, zum Beispiel:

```css
p {
  font-family: "Trebuchet MS", "Verdana", sans-serif;
}
```

Der Browser beginnt am Anfang der Liste und prüft, ob die erste Schriftart auf dem Gerät verfügbar ist. Falls ja, wendet er sie auf die ausgewählten Elemente an. Falls nicht, prüft er die nächste Schriftart und fährt so fort.

Am Ende der Liste sollten Sie einen passenden generischen Schriftartnamen angeben. Wenn keine der aufgeführten Schriftarten verfügbar ist, kann der Browser so zumindest eine ungefähr passende Schriftart verwenden. Ohne eine solche Angabe erhalten Absätze möglicherweise die standardmäßige Serifenschrift des Browsers – meist Times New Roman. Das ist keine gute Wahl, wenn Sie eine serifenlose Schrift wünschen!

> [!NOTE]
> Schriftfamiliennamen mit Leerzeichen, etwa `Trebuchet MS`, können zwar ohne Anführungszeichen verwendet werden. Um Fehler beim Escaping zu vermeiden, empfiehlt es sich jedoch, Namen in Anführungszeichen zu setzen, wenn sie Leerraum, Ziffern oder Satzzeichen außer Bindestrichen enthalten.

> [!WARNING]
> Jeder Schriftfamilienname, der mit dem Namen einer generischen Schriftfamilie oder einem globalen CSS-Schlüsselwort verwechselt werden könnte, muss in Anführungszeichen stehen. Schriftfamiliennamen können zwar als {{cssxref("custom-ident")}} oder als {{cssxref("string")}} angegeben werden. Namen, die mit einem globalen CSS-Eigenschaftswert wie `initial` oder `inherit` oder mit einem generischen Schriftfamiliennamen wie `sans-serif` oder `fantasy` übereinstimmen, müssen jedoch als Zeichenfolge in Anführungszeichen stehen. Andernfalls wird der Schriftfamilienname als entsprechendes CSS-Schlüsselwort oder als generischer Schriftfamilienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftfamiliennamen – `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` – sowie die globalen CSS-Schlüsselwörter NICHT in Anführungszeichen stehen, da Zeichenfolgen nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für `font-family`

Ergänzen wir unser bisheriges Beispiel, sodass die Absätze eine serifenlose Schrift erhalten:

```css live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample('2fonts', '100%', 220) }}

### Schriftgröße

Im Artikel [CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) des vorherigen Moduls haben wir Längen- und Größeneinheiten behandelt. Die mit {{cssxref("font-size")}} festgelegte Schriftgröße kann Werte in den meisten dieser Einheiten annehmen (sowie weitere Werte, etwa [Prozentangaben](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)). Am häufigsten werden Sie jedoch die folgenden Einheiten zur Festlegung der Textgröße verwenden:

- `px` (Pixel): Gibt an, wie viele Pixel hoch der Text sein soll. Dies ist eine absolute Einheit: Der endgültige berechnete Wert für die Schrift auf der Seite ist in nahezu jeder Situation gleich.
- `em`: 1 `em` entspricht der Schriftgröße des übergeordneten Elements des Elements, das wir gestalten (genauer gesagt der Breite eines großen M innerhalb des übergeordneten Elements). Wenn viele verschachtelte Elemente unterschiedliche Schriftgrößen haben, kann die Berechnung schwierig werden. Sie ist aber möglich, wie Sie unten sehen werden. Warum sollte man sich damit befassen? Sobald Sie sich daran gewöhnt haben, ist die Verwendung recht intuitiv. Außerdem können Sie mit `em` nicht nur Text, sondern sämtliche Größen festlegen. Eine ganze Website kann mit `em` dimensioniert werden, was die Wartung erleichtert.
- `rem`: Funktioniert ähnlich wie `em`. Allerdings entspricht 1 `rem` der Schriftgröße des Wurzelelements des Dokuments (also {{htmlelement("html")}}) und nicht der des übergeordneten Elements. Dadurch lassen sich Schriftgrößen viel leichter berechnen.

Die `font-size` eines Elements wird von seinem übergeordneten Element geerbt. Ausgangspunkt ist das Wurzelelement des gesamten Dokuments – {{htmlelement("html")}} –, dessen standardmäßige `font-size` browserübergreifend `16px` beträgt. Jeder Absatz innerhalb des Wurzelelements (oder jedes andere Element, für das der Browser keine abweichende Größe festlegt) hat damit eine endgültige Größe von `16px`. Andere Elemente können andere Standardgrößen haben. Für ein {{htmlelement("Heading_Elements", "h1")}}-Element ist beispielsweise standardmäßig eine Größe von `2em` festgelegt; seine endgültige Größe beträgt daher `32px`.

Komplizierter wird es, wenn Sie die Schriftgröße verschachtelter Elemente ändern. Angenommen, Ihre Seite enthält ein {{htmlelement("article")}}-Element, dessen `font-size` Sie auf `1.5em` setzen (das ergibt eine endgültige Größe von `24px`). Die Absätze innerhalb des `<article>`-Elements sollen eine berechnete Schriftgröße von 20 `px` haben. Welchen `em`-Wert müssten Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten den `em`-Wert auf 20/24, also 0,83333333 `em`, setzen. Solche Berechnungen können kompliziert werden; gestalten Sie Ihre Elemente daher mit Bedacht. Verwenden Sie nach Möglichkeit `rem`, um die Berechnungen einfach zu halten, und vermeiden Sie es, für Container-Elemente eine `font-size` festzulegen.

### Schriftstil, Schriftstärke, Texttransformation und Textdekoration

CSS bietet vier häufig verwendete Eigenschaften, mit denen Sie die Darstellung und Hervorhebung von Text verändern können:

- {{cssxref("font-style")}}: Schaltet die kursive Darstellung von Text ein oder aus. Folgende Werte sind möglich (Sie werden diese Eigenschaft selten benötigen, außer Sie möchten beispielsweise eine vorhandene kursive Formatierung entfernen):
  - `normal`: Verwendet die normale Schriftvariante (und hebt eine vorhandene kursive Darstellung auf).
  - `italic`: Verwendet die kursive Variante der Schriftart, sofern sie verfügbar ist. Andernfalls wird die kursive Darstellung durch eine Schrägstellung simuliert.
  - `oblique`: Verwendet eine simulierte kursive Variante, die durch Schrägstellen der normalen Schrift erzeugt wird.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text dargestellt wird. Es stehen viele Werte zur Verfügung, falls zahlreiche Schriftvarianten vorhanden sind (etwa _-light_, _-normal_, _-bold_, _-extrabold_ oder _-black_). In der Praxis werden Sie aber meist nur `normal` und `bold` verwenden:
  - `normal`, `bold`: Normale beziehungsweise fette Schriftstärke.
  - `lighter`, `bolder`: Stellt den Text des aktuellen Elements eine Stufe dünner beziehungsweise fetter dar als den Text seines übergeordneten Elements.
  - `100` – `900`: Numerische Werte für die Schriftstärke, die bei Bedarf eine feinere Abstufung als die genannten Schlüsselwörter ermöglichen.

- {{cssxref("text-transform")}}: Ermöglicht die Umwandlung der Groß- und Kleinschreibung sowie weitere Texttransformationen. Mögliche Werte sind:
  - `none`: Verhindert jede Transformation.
  - `uppercase`: Wandelt den gesamten Text in Großbuchstaben um.
  - `lowercase`: Wandelt den gesamten Text in Kleinbuchstaben um.
  - `capitalize`: Schreibt den ersten Buchstaben jedes Wortes groß.
  - `full-width`: Stellt alle Glyphen innerhalb eines Quadrats mit fester Breite dar, ähnlich einer nichtproportionalen Schrift. So lassen sich beispielsweise lateinische Zeichen an Glyphen asiatischer Schriftsysteme (wie Chinesisch, Japanisch und Koreanisch) ausrichten.

- {{cssxref("text-decoration")}}: Fügt Textdekorationen hinzu oder entfernt sie. Sie werden diese Eigenschaft vor allem verwenden, um beim Gestalten von Links deren standardmäßige Unterstreichung zu entfernen. Verfügbare Werte sind:
  - `none`: Entfernt vorhandene Textdekorationen.
  - `underline`: Unterstreicht den Text.
  - `overline`: Überstreicht den Text.
  - `line-through`: Streicht den Text durch.

  Beachten Sie, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptiert, wenn Sie mehrere Dekorationen hinzufügen möchten, beispielsweise `text-decoration: underline overline`. Außerdem ist {{cssxref("text-decoration")}} eine Kurzschreibweise für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}}. Durch Kombination dieser Eigenschaftswerte lassen sich interessante Effekte erzielen, zum Beispiel `text-decoration: line-through red wavy`.

Fügen wir unserem Beispiel einige dieser Eigenschaften hinzu:

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

Das neue Ergebnis sieht so aus:

{{ EmbedLiveSample('3font-style', '100%', 260) }}

### Schlagschatten für Text

Mit der Eigenschaft {{cssxref("text-shadow")}} können Sie Text einen Schlagschatten geben. Sie akzeptiert bis zu vier Werte, wie das folgende Beispiel zeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Werte sind:

1. Der horizontale Versatz des Schattens gegenüber dem ursprünglichen Text. Er kann in den meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) angegeben werden; meist verwenden Sie `px`. Positive Werte verschieben den Schatten nach rechts, negative nach links. Dieser Wert ist erforderlich.
2. Der vertikale Versatz des Schattens gegenüber dem ursprünglichen Text. Er funktioniert wie der horizontale Versatz, verschiebt den Schatten aber nach oben oder unten statt nach links oder rechts. Dieser Wert ist ebenfalls erforderlich.
3. Der Unschärferadius: Je höher der Wert, desto weiter wird der Schatten verteilt. Wird er nicht angegeben, gilt der Standardwert 0; der Schatten ist dann nicht unscharf. Für diesen Wert können die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) verwendet werden.
4. Die Grundfarbe des Schattens. Sie kann als beliebiger [CSS-Farbwert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) angegeben werden. Wird sie nicht angegeben, gilt standardmäßig [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword): Der Schatten übernimmt dann die durch {{cssxref("color")}} festgelegte Farbe des Elements.

#### Mehrere Schatten

Sie können demselben Text mehrere Schatten geben, indem Sie mehrere durch Kommas getrennte Schattenwerte angeben, zum Beispiel:

```css live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element in unserem Beispiel mit Tommy der Katze anwenden, erhalten wir folgendes Ergebnis:

{{ EmbedLiveSample('4shadows', '100%', 260) }}

> [!NOTE]
> Weitere interessante Beispiele für die Verwendung von `text-shadow` finden Sie im SitePoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/).

## Textlayout

Nachdem wir die grundlegenden Schrifteigenschaften behandelt haben, sehen wir uns Eigenschaften an, mit denen Sie das Textlayout beeinflussen können.

### Textausrichtung

Mit der Eigenschaft {{cssxref("text-align")}} steuern Sie, wie Text innerhalb der umgebenden Inhaltsbox ausgerichtet wird. Die verfügbaren Werte sind unten aufgeführt. Sie funktionieren weitgehend wie in einem gewöhnlichen Textverarbeitungsprogramm:

- `left`: Richtet den Text linksbündig aus.
- `right`: Richtet den Text rechtsbündig aus.
- `center`: Zentriert den Text.
- `justify`: Verteilt den Text, indem die Abstände zwischen den Wörtern angepasst werden, sodass alle Textzeilen gleich breit sind. Verwenden Sie diesen Wert mit Bedacht: Besonders bei Absätzen mit vielen langen Wörtern kann das Ergebnis unschön aussehen. Wenn Sie Blocksatz verwenden, sollten Sie zusätzlich beispielsweise {{cssxref("hyphens")}} einsetzen, um längere Wörter am Zeilenende zu trennen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element unseres Beispiels anwenden, erhalten wir folgendes Ergebnis:

```css hidden live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-align: center;
}
```

{{ EmbedLiveSample('5text-align', '100%', 260) }}

### Zeilenhöhe

Die Eigenschaft {{cssxref("line-height")}} legt die Höhe jeder Textzeile fest. Sie akzeptiert nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths), sondern auch einen Wert ohne Einheit. Dieser wirkt als Multiplikator und gilt im Allgemeinen als beste Wahl. Dabei wird {{cssxref("font-size")}} mit dem einheitenlosen Wert multipliziert; das Ergebnis ist die `line-height`. Fließtext sieht meist ansprechender aus und lässt sich leichter lesen, wenn zwischen den Zeilen mehr Platz ist. Empfohlen wird eine Zeilenhöhe von etwa 1,5 bis 2 (doppelter Zeilenabstand). Um die Zeilenhöhe auf das 1,6-Fache der Schriftgröße festzulegen, verwenden wir:

```css live-sample___6line-height live-sample___7letter-word-spacing
p {
  line-height: 1.6;
}
```

Auf die {{htmlelement("p")}}-Elemente unseres Beispiels angewendet, ergibt das:

{{ EmbedLiveSample('6line-height', '100%', 300) }}

### Buchstaben- und Wortabstände

Mit {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}} legen Sie die Abstände zwischen den Buchstaben und Wörtern Ihres Textes fest. Sie werden diese Eigenschaften nicht oft verwenden, können damit aber eine bestimmte Wirkung erzielen oder die Lesbarkeit einer besonders gedrängten Schrift verbessern. Beide akzeptieren die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths).

Zur Veranschaulichung können wir die Wort- und Buchstabenabstände in der ersten Zeile jedes {{htmlelement("p")}}-Elements unseres HTML-Beispiels wie folgt verändern:

```css live-sample___7letter-word-spacing
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Unser HTML wird dann so dargestellt:

{{ EmbedLiveSample('7letter-word-spacing', '100%', 330) }}

### Weitere interessante Eigenschaften

Die bisher vorgestellten Eigenschaften zeigen Ihnen, wie Sie mit der Textgestaltung auf einer Webseite beginnen können. Es gibt jedoch noch viele weitere Eigenschaften. Hier wollten wir nur die wichtigsten behandeln. Wenn Sie mit den genannten Eigenschaften vertraut sind, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Zwischen Kapitälchen und normalen Schriftvarianten wechseln.
- {{cssxref("font-kerning")}}: Unterschneidung für Schriftarten ein- und ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftfunktionen ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Die Verwendung alternativer Glyphen einer bestimmten Schrift steuern.
- {{cssxref("font-variant-caps")}}: Die Verwendung alternativer Großbuchstaben-Glyphen steuern.
- {{cssxref("font-variant-east-asian")}}: Die Verwendung alternativer Glyphen für ostasiatische Schriften wie Japanisch und Chinesisch steuern.
- {{cssxref("font-variant-ligatures")}}: Steuern, welche Ligaturen und kontextabhängigen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordinalzeichen steuern.
- {{cssxref("font-variant-position")}}: Die Verwendung kleinerer alternativer Glyphen steuern, die hoch- oder tiefgestellt angezeigt werden.
- {{cssxref("font-size-adjust")}}: Die wahrgenommene Schriftgröße unabhängig von der tatsächlichen Schriftgröße anpassen.
- {{cssxref("font-stretch")}}: Zwischen verfügbaren, unterschiedlich breiten Varianten einer Schriftart wechseln.
- {{cssxref("text-underline-position")}}: Die Position von Unterstreichungen festlegen, die mit dem Wert `underline` der Eigenschaft `text-decoration-line` erzeugt werden.
- {{cssxref("text-rendering")}}: Versuchen, die Textdarstellung zu optimieren.

Eigenschaften für das Textlayout:

- {{cssxref("text-indent")}}: Festlegen, wie viel horizontaler Platz vor dem Beginn der ersten Zeile des Textinhalts frei bleibt.
- {{cssxref("text-overflow")}}: Festlegen, wie abgeschnittener, nicht angezeigter Inhalt Nutzern signalisiert wird.
- {{cssxref("white-space")}}: Festlegen, wie Leerraum und damit verbundene Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Festlegen, ob Zeilen innerhalb von Wörtern umgebrochen werden dürfen.
- {{cssxref("direction")}}: Die Textrichtung festlegen. (Sie hängt von der Sprache ab; meist ist es besser, dies HTML zu überlassen, da die Richtung zum Textinhalt gehört.)
- {{cssxref("hyphens")}}: Die Silbentrennung für unterstützte Sprachen ein- und ausschalten.
- {{cssxref("line-break")}}: Die Regeln für Zeilenumbrüche in asiatischen Sprachen lockern oder verschärfen.
- {{cssxref("text-align-last")}}: Festlegen, wie die letzte Zeile eines Blocks oder eine Zeile unmittelbar vor einem erzwungenen Zeilenumbruch ausgerichtet wird.
- {{cssxref("text-orientation")}}: Die Ausrichtung des Textes innerhalb einer Zeile festlegen.
- {{cssxref("overflow-wrap")}}: Festlegen, ob der Browser Zeilen innerhalb von Wörtern umbrechen darf, um einen Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Festlegen, ob Textzeilen horizontal oder vertikal angeordnet werden und in welche Richtung die folgenden Zeilen verlaufen.

## Kurzschreibweise für Schrift-Eigenschaften

Viele Schrifteigenschaften lassen sich auch mit der Kurzschreibweise {{cssxref("font")}} festlegen. Die Werte werden in folgender Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}} und {{cssxref("font-family")}}.

Von diesen Eigenschaften sind bei Verwendung der `font`-Kurzschreibweise nur `font-size` und `font-family` erforderlich.

Zwischen {{cssxref("font-size")}} und {{cssxref("line-height")}} muss ein Schrägstrich stehen.

Ein vollständiges Beispiel sieht so aus:

```css
font:
  italic normal bold normal 3em/1.5 "Helvetica",
  "Arial",
  sans-serif;
```

## Mit Textgestaltung experimentieren

Jetzt sind Sie an der Reihe. Für diese Aufgabe gibt es keine festen Übungen. Probieren Sie einfach verschiedene Eigenschaften für Schrift und Textlayout aus und sehen Sie, welche Ergebnisse Sie erzielen können!

1. Klicken Sie im folgenden Codeblock auf **„Play“**, um das Beispiel im MDN Playground zu bearbeiten.
2. Ergänzen Sie die leere Regel `p { }` um einige Deklarationen, um die Gestaltung des vorgegebenen Textes zu ändern. Seien Sie dabei so kreativ, wie Sie möchten.

Falls Ihnen ein Fehler unterläuft, können Sie Ihre Änderungen mit der Schaltfläche _Reset_ im MDN Playground zurücksetzen. In den vorherigen Abschnitten dieses Artikels finden Sie weitere Informationen zu den verfügbaren Schrift- und Textstilen.

```html live-sample___fonts_text
<p>Some sample text for your delight</p>
```

```css-nolint live-sample___fonts_text
p {

}
```

{{ EmbedLiveSample('fonts_text', "100%", 60) }}

## Zusammenfassung

Wir hoffen, dass Ihnen das Experimentieren mit Text in diesem Artikel Spaß gemacht hat! Im nächsten Artikel erfahren Sie alles Wichtige über die Gestaltung von HTML-Listen.

## Siehe auch

- [Alles über die CSS-Eigenschaft font-family](https://explainers.dev/font-family/), explainers.dev
- [Websichere Schriftarten](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
