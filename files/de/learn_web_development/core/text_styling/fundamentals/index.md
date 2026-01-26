---
title: Grundlegende Text- und Schriftarten-Stilgestaltung
short-title: Grundlagen der Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Meisterung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Wir werden hier alle grundlegenden Grundlagen der Text-/Schriftgestaltung im Detail durchgehen, einschließlich der Einstellung von Schriftstärke, -familie und -stil, Kurzschrift für Schriftarten, Textausrichtung und andere Effekte sowie Zeilen- und Buchstabenabstand.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Konzepte von Schriftfamilien, Schriftstapeln und web-sicheren Schriften.</li>
          <li>Festlegung von Schriftfarbe, -gewicht, -größe und -stil.</li>
          <li>Festlegung der Textausrichtung, -transformation und -dekoration.</li>
          <li>Festlegung der Zeilenhöhe.</li>
          <li>Wissen, dass es mehrere andere Schrift- und Textgestaltungs-Eigenschaften gibt und die Ermutigung, sie zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was beinhaltet die Textgestaltung mit CSS?

Text in einem Element wird innerhalb der [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements angeordnet. Er beginnt oben links im Inhaltsbereich (oder oben rechts im Fall von RTL-Sprachinhalten) und fließt bis zum Ende der Zeile. Sobald das Ende erreicht ist, geht es in die nächste Zeile hinunter und fließt erneut bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in der Box platziert ist. Textinhalt verhält sich effektiv wie eine Reihe von Inline-Elementen, die nebeneinander auf Zeilen angeordnet sind, und erzeugt keinen Zeilenumbruch, bis das Ende der Zeile erreicht ist oder Sie manuell einen Zeilenumbruch mithilfe des {{htmlelement("br")}}-Elements erzwingen.

> [!NOTE]
> Wenn der obige Absatz Sie verwirrt zurücklässt, dann macht das nichts — gehen Sie zurück und lesen Sie unseren [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Artikel, um die Boxmodell-Theorie aufzufrischen, bevor Sie weiter machen.

Die CSS-Eigenschaften, die zur Textgestaltung verwendet werden, fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten werden:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes beeinflussen, z. B. welche Schriftart angewendet wird, ihre Größe und ob sie fett, kursiv usw. ist.
- **Textlayout-Stile**: Eigenschaften, die den Abstand und andere Layout-Merkmale des Textes beeinflussen und es ermöglichen, z. B. den Abstand zwischen Zeilen und Buchstaben zu manipulieren und wie der Text innerhalb der Inhaltsbox ausgerichtet wird.

> [!NOTE]
> Bedenken Sie, dass der Text innerhalb eines Elements als eine einzige Einheit beeinflusst wird. Sie können keine Textabschnitte auswählen und gestalten, es sei denn, Sie umhüllen sie in einem geeigneten Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}) oder verwenden Sie ein text-spezifisches Pseudo-Element wie {{cssxref("::first-letter")}} (wählt den ersten Buchstaben eines Textelements), {{cssxref("::first-line")}} (wählt die erste Zeile eines Textelements) oder {{cssxref("::selection")}} (wählt den momentan vom Cursor hervorgehobenen Text).

## Schriften

Lassen Sie uns direkt zu den Eigenschaften gehen, um Schriftarten zu gestalten. In diesem Beispiel werden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel anwenden:

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

Die {{cssxref("color")}}-Eigenschaft setzt die Farbe des Vordergrundinhalts der ausgewählten Elemente, was normalerweise der Text ist, aber auch ein paar andere Dinge umfassen kann, wie z. B. ein Unter- oder Überstrich, der auf Text mithilfe der {{cssxref("text-decoration")}}-Eigenschaft gelegt wird.

`color` kann jede [CSS-Farbenheitseinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen, zum Beispiel:

```css live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
}
```

Dies wird dazu führen, dass die Absätze rot werden, anstatt des standardmäßigen Browser-Schwarz, so:

{{ EmbedLiveSample('1color', '100%', 230) }}

### Schriftfamilien

Um eine andere Schriftart für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — dies ermöglicht es Ihnen, eine Schriftart (oder eine Liste von Schriftarten) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wendet nur eine Schriftart an, wenn sie auf dem Computer verfügbar ist, auf dem die Website aufgerufen wird; andernfalls verwendet er einfach eine Browser-[Standardschriftart](#standardschriftarten). Ein einfaches Beispiel sieht folgendermaßen aus:

```css
p {
  font-family: "Arial";
}
```

Dies würde alle Absätze auf einer Seite die Arial-Schrift übernehmen lassen, die auf jedem Computer vorhanden ist.

> [!NOTE]
> Das [Web-sichere Schriftarten](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Scrim von Scrimba bietet eine interaktive Anleitung, warum Schriftarten wichtig sind, web-sichere Schriftarten und wie man Schriftarten in CSS angibt — zusammen mit einer Herausforderung, um Ihr Wissen zu testen.

#### Web sichere Schriften

Apropos Verfügbarkeit von Schriftarten, es gibt nur eine gewisse Anzahl von Schriftarten, die im Allgemeinen auf allen Systemen verfügbar sind und dementsprechend ohne viel Sorge verwendet werden können. Diese sind die sogenannten **web-sicheren Schriften**.

Meistens möchten wir als Webentwickler eine spezifischere Kontrolle über die Schriftarten haben, die zur Anzeige unseres Textinhalts verwendet werden. Das Problem besteht darin, einen Weg zu finden, zu wissen, welche Schriftart auf dem Computer verfügbar ist, auf dem unsere Webseiten angezeigt werden. Es gibt keine Möglichkeit, dies in jedem Fall zu wissen, aber die web-sicheren Schriften sind dafür bekannt, dass sie auf fast allen Instanzen der am häufigsten verwendeten Betriebssysteme verfügbar sind (Windows, macOS, die gängigsten Linux-Distributionen, Android und iOS).

Die Liste der tatsächlichen web-sicheren Schriften wird sich ändern, wenn sich Betriebssysteme weiterentwickeln, aber es ist vernünftig, die folgenden Schriften als web-sicher zu betrachten, zumindest vorerst (viele von ihnen wurden dank der Microsoft _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ Initiative in den späten 90er und frühen 2000er Jahren populär gemacht):

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
        Es wird oft als bewährte Praxis angesehen, <em>Helvetica</em> als
        bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da ihre
        Schriftbilder fast identisch sind, obwohl <em>Helvetica</em> als
        schöner geformt gilt, selbst wenn <em>Arial</em> breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere)
        Version der <em>Courier New</em>-Schriftart namens <em>Courier</em>. Es
        wird als bewährte Praxis angesehen, beide mit <em>Courier New</em> als
        bevorzugte Alternative zu verwenden.
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
        Version der <em>Times New Roman</em>-Schriftart namens <em>Times</em>.
        Es wird als bewährte Praxis angesehen, beide mit <em>Times New Roman</em> als bevorzugte Alternative zu verwenden.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig mit der Verwendung dieser Schriftart sein — sie
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
> Unter verschiedenen Ressourcen hält die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste der web-sicheren Schriftarten, die auf Windows- und macOS-Betriebssystemen verfügbar sind, bereit, um Ihnen bei der Entscheidung zu helfen, was für Ihre Nutzung als sicher betrachtet werden kann.

> [!NOTE]
> Es gibt einen Weg, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, um die Verwendung von Schriftarten auf jede gewünschte Weise anzupassen: **Webfonts**. Dies ist etwas komplexer, und wir werden es in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später im Modul besprechen.

#### Standardschriftarten

CSS definiert fünf generische Namen für Schriftarten: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch und die genaue Schriftart, die von diesen generischen Namen verwendet wird, kann zwischen jedem Browser und jedem Betriebssystem, auf dem sie angezeigt werden, variieren. Es stellt ein _Worst-Case-Szenario_ dar, bei dem der Browser sein Bestes geben wird, um eine Schriftart bereitzustellen, die passend aussieht. `serif`, `sans-serif` und `monospace` sind recht vorhersehbar und sollten etwas Vernünftiges liefern. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar und wir empfehlen, sie sehr sorgfältig zu verwenden, wobei sie während der Nutzung überprüft werden sollten.

Die fünf Namen sind wie folgt definiert:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Begriff</th>
      <th scope="col">Definitionen</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>serif</code></td>
      <td>
        Schriftarten, die Serifen haben (die Verzierungen und andere kleine
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
      <td>Schriftarten, die keine Serifen haben.</td>
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
        Schriftarten, bei denen jedes Zeichen die gleiche Breite hat, typischerweise in Code-Auflistungen verwendet.
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
        Schriftarten, die beabsichtigen, Handschrift zu emulieren, mit fließenden, verbundenen Strichen.
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
      <td>Dekorativ gedachte Schriftarten.</td>
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

Da Sie die Verfügbarkeit der Schriftarten, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (auch eine Webschrift _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** bereitstellen, damit der Browser mehrere Schriftarten zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert, der aus mehreren durch Kommas getrennten Schriftartnamen besteht, z. B.

```css
p {
  font-family: "Trebuchet MS", "Verdana", sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und schaut, ob diese Schriftart auf dem Computer verfügbar ist. Wenn dies der Fall ist, wendet er die Schriftart auf die ausgewählten Elemente an. Wenn nicht, geht er zur nächsten Schriftart über, und so weiter.

Es ist eine gute Idee, einen passenden generischen Schriftartnamen am Ende des Stapels anzugeben, damit, wenn keine der aufgelisteten Schriftarten verfügbar ist, der Browser zumindest etwas einigermaßen Passendes bereitstellen kann. Um diesen Punkt zu verdeutlichen, erhalten Absätze die serifenlose Standardschriftart des Browsers, wenn keine andere Option verfügbar ist – was normalerweise Times New Roman ist – das ist unpassend für eine serifenlose Schriftart!

> [!NOTE]
> Auch wenn Sie Schriftartnamen verwenden können, die ein Leerzeichen enthalten, wie z. B. `Trebuchet MS`, ohne den Namen zu zitieren, wird empfohlen, Schriftartnamen, die Leerzeichen, Ziffern oder andere Satzzeichen als Bindestriche enthalten, zu zitieren, um Fehler beim Escape zu vermeiden.

> [!WARNING]
> Jeder Schriftartname, der als generischer Schriftartname oder als CSS-weites Schlüsselwort missverstanden werden könnte, muss in Anführungszeichen gesetzt werden. Auch wenn die Schriftartnamen als {{cssxref("custom-ident")}} oder als {{cssxref("string")}} enthalten sein können, müssen Schriftartnamen, die zufällig denselben Namen wie ein CSS-weites Eigenschaftswert, wie `initial` oder `inherit`, oder CSS haben denselben Namen wie einer der generischen Schriftartnamen, wie `sans-serif` oder `fantasy`, als zitatierte Zeichenfolge enthalten sein. Andernfalls wird der Schriftartname als das äquivalente CSS-Schlüsselwort oder der generische Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftartnamen — `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter nicht in Anführungszeichen gesetzt werden, da Zeichenfolgen nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Schriftfamilien-Beispiel

Fügen wir unserem vorherigen Beispiel etwas hinzu, indem wir den Absätzen eine serifenlose Schriftart geben:

```css live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample('2fonts', '100%', 220) }}

### Schriftgröße

In unserem vorherigen Modul [CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben wir Längen- und Größeneinheiten überprüft. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten (und anderen, wie [Prozent](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) gemessen werden; jedoch sind die häufigsten Einheiten, die Sie zur Textgröße verwenden werden:

- `px` (Pixel): Die Anzahl der Pixel, die Sie möchten, dass der Text hoch ist. Dies ist eine absolute Einheit — es ergibt denselben endgültig berechneten Wert für die Schrift auf der Seite in nahezu jeder Situation.
- `em`: 1 `em` entspricht der Schriftgröße, die im Elternelement des aktuellen Elements, das wir gestalten, festgelegt ist (genauer gesagt, die Breite eines Großbuchstabens M, der im Elternelement enthalten ist). Das kann knifflig werden, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich das antun? Es ist ganz natürlich, wenn Sie sich daran gewöhnt haben, und Sie können `em` zur Größenbestimmung von allem verwenden, nicht nur Text. Sie können eine gesamte Website mit `em` größenmäßig gestalten, was die Wartung einfach macht.
- `rem`: Diese funktionieren genau wie `em`, mit dem Unterschied, dass 1 `rem` der Schriftgröße entspricht, die im Root-Element des Dokuments (d.h. {{htmlelement("html")}}) festgelegt ist, nicht dem Elternelement. Dies macht das Rechnen, um Ihre Schriftgrößen herauszufinden, viel einfacher.

Die `font-size` eines Elements wird von dem Elternelement dieses Elements geerbt. Das beginnt alles mit dem Wurzelelement des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard-`font-size` von 16 `px` browserübergreifend festgelegt ist. Jeder Absatz (oder ein anderes Element, das keine andere Größe hat, die vom Browser festgelegt wurde) im Wurzelelement wird eine endgültige Größe von 16 `px` haben. Andere Elemente können unterschiedliche Standardeinstellungen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}}-Element standardmäßig eine Größe von 2 `em` gesetzt, sodass es eine endgültige Größe von 32 `px` haben wird.

Die Dinge werden komplizierter, wenn Sie beginnen, die Schriftgröße von verschachtelten Elementen zu ändern. Wenn Sie zum Beispiel ein {{htmlelement("article")}}-Element auf Ihrer Seite hätten und dessen `font-size` auf 1.5 `em` setzen (was einen berechneten Endwert von 24 `px` hat), und dann möchten, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten dessen `em`-Wert auf 20/24 oder 0.83333333 `em` setzen. Das Rechnen kann kompliziert sein, daher müssen Sie vorsichtig sein, wie Sie die Dinge gestalten. Es ist am besten, `rem` zu verwenden, wo möglich, um die Dinge einfach zu halten, und vermeiden Sie die Einstellung der `font-size` von Container-Elementen, wo möglich.

### Schriftstil, Schriftgewicht, Texttransformation und Textdekoration

CSS bietet vier gebräuchliche Eigenschaften, um das visuelle Gewicht/den Schwerpunkt von Text zu ändern:

- {{cssxref("font-style")}}: Verwendet, um kursive Schrift ein- oder auszuschalten. Mögliche Werte sind wie folgt (normalerweise verwenden Sie dies selten, es sei denn, Sie möchten aus irgendeinem Grund eine kursive Gestaltung ausschalten):
  - `normal`: Setzt die Schrift auf die normale Schriftart (deaktiviert bestehende Kursive).
  - `italic`: Legt fest, dass die Schrift die kursiven Version des Schriftsatzes verwendet, falls verfügbar; ansonsten wird mit Schrägschrift simuliert.
  - `oblique`: Setzt die Schrift auf eine simulierte Version einer kursiven Schrift, die durch Abschrägung der normalen Version erstellt wurde.

- {{cssxref("font-weight")}}: Definiert, wie fett die Schrift ist. Dies hat viele Werte, falls Sie viele Schriftvarianten verfügbar haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ usw.), aber realistisch werden Sie selten andere als `normal` und `bold` verwenden:
  - `normal`, `bold`: Normales und fettes Schriftgewicht.
  - `lighter`, `bolder`: Setzt das Fetten des aktuellen Elements einen Schritt leichter oder schwerer als das Fetten des Elternelements.
  - `100` – `900`: Numerische Werte für das Fettteilen, die eine feinere Kontrolle bieten als die obigen Schlüsselwörter, wenn nötig.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihre Schrift in eine Transformation zu setzen. Werte umfassen:
  - `none`: Verhindert jede Transformation.
  - `uppercase`: Wandelt alle Schriftzeichen in Großbuchstaben um.
  - `lowercase`: Wandelt alle Schriftzeichen in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter so um, dass der erste Buchstabe großgeschrieben ist.
  - `full-width`: Wandelt alle Zeichen so um, dass sie innerhalb eines festen quadratischen Rahmens geschrieben sind, ähnlich einer Monospace-Schrift, wodurch das Ausrichten von z. B. lateinischen Zeichen zusammen mit asiatischen Sprachzeichen (wie Chinesisch, Japanisch, Koreanisch) ermöglicht wird.

- {{cssxref("text-decoration")}}: Setzt/deaktiviert Textverzierungen auf Schriftarten (Sie werden dies hauptsächlich verwenden, um die Standard-Unterstreichung bei Links beim Stylen aufzuheben). Verfügbare Werte sind:
  - `none`: Hebt alle bereits vorhandenen Textverzierungen auf.
  - `underline`: Unterstreicht den Text.
  - `overline`: Legt einen Überstrich auf den Text.
  - `line-through`: Setzt einen Durchstrich über den Text.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig annehmen kann, wenn Sie mehrere Verzierungen gleichzeitig hinzufügen möchten, z. B. `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Kurzformeigenschaft für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzeugen, z. B. `text-decoration: line-through red wavy`.

Werfen wir einen Blick darauf, wie wir ein paar dieser Eigenschaften zu unserem Beispiel hinzufügen:

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

Unser neues Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample('3font-style', '100%', 260) }}

### Textschlagschatten

Sie können Schlagschatten auf Ihren Text anwenden, indem Sie die {{cssxref("text-shadow")}}-Eigenschaft verwenden. Diese nimmt bis zu vier Werte an, wie im untenstehenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom ursprünglichen Text — dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, aber Sie werden am häufigsten `px` verwenden; positive Werte verschieben den Schatten nach rechts, negative nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Versatz des Schattens vom ursprünglichen Text. Dies funktioniert ähnlich wie der horizontale Versatz, mit der Ausnahme, dass es den Schatten nach oben/unten verschiebt, nicht links/rechts. Dieser Wert muss enthalten sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass sich der Schatten weiter ausbreitet. Wenn dieser Wert nicht enthalten ist, ist der Standardwert 0, was bedeutet, keine Unschärfe. Dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbeneinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn nicht enthalten, wird der Standardwert [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) angenommen, d.h. dass die Schattenfarbe von der {{cssxref("color")}}-Eigenschaft des Elements übernommen wird.

#### Mehrere Schatten

Sie können mehrere Schatten auf dasselbe Textstück anwenden, indem Sie mehrere durch Kommas getrennte Schattenwerte einfügen, beispielsweise:

```css live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element in unserem Tommy The Cat-Beispiel anwenden würden, erhielten wir dies:

{{ EmbedLiveSample('4shadows', '100%', 260) }}

> [!NOTE]
> Sie können weitere interessante Beispiele zur Verwendung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) sehen.

## Textlayout

Nachdem wir die grundlegenden Schriftobjekte abgehandelt haben, werfen wir einen Blick auf die Eigenschaften, die wir verwenden können, um das Textlayout zu beeinflussen.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie Text innerhalb seiner enthaltenen Inhaltsbox ausgerichtet wird. Die verfügbaren Werte sind unten aufgeführt. Sie funktionieren in nahezu derselben Weise wie in einer regulären Textverarbeitungsanwendung:

- `left`: Linksbündige Darstellung des Textes.
- `right`: Rechtsbündige Darstellung des Textes.
- `center`: Zentrierte Darstellung des Textes.
- `justify`: Der Text wird ausgestreckt und die Abstände zwischen den Wörtern variieren, sodass alle Textzeilen dieselbe Breite haben. Vorsicht hierbei — es kann schrecklich aussehen, besonders bei einem Absatz mit vielen langen Wörtern. Wenn Sie dies verwenden möchten, sollten Sie außerdem darüber nachdenken, etwas dazu zu verwenden, wie {{cssxref("hyphens")}}, um einige der längeren Wörter in Zeilen zu trennen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "&lt;h1>")}} in unserem Beispiel anwenden würden, hätte dies das Ergebnis:

```css hidden live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-align: center;
}
```

{{ EmbedLiveSample('5text-align', '100%', 260) }}

### Zeilenhöhe

Die {{cssxref("line-height")}}-Eigenschaft setzt die Höhe jeder Textzeile. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern auch einen einheitenlosen Wert, der als Multiplikator wirkt und im Allgemeinen als beste Option angesehen wird. Mit einem einheitenlosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtext sieht im Allgemeinen schöner aus und lässt sich leichter lesen, wenn die Zeilen auseinander liegen. Die empfohlene Zeilenhöhe liegt zwischen 1,5 und 2 (doppelter Zeilenabstand). Um unsere Textzeilen auf das 1,6-fache der Schriftgröße zu setzen, würden wir verwenden:

```css live-sample___6line-height live-sample___7letter-word-spacing
p {
  line-height: 1.6;
}
```

Wenn wir dies auf die {{htmlelement("p")}}-Elemente in unserem Beispiel anwenden, erhielten wir folgendes Ergebnis:

{{ EmbedLiveSample('6line-height', '100%', 300) }}

### Buchstaben- und Wortabstand

Die {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}}-Eigenschaften erlauben es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden diese nicht sehr oft verwenden, könnten aber einen Nutzen daraus ziehen, um ein bestimmtes Aussehen zu erreichen oder die Lesbarkeit einer besonders dichten Schriftart zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir etwas Wort- und Buchstabenabstand auf die erste Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel anwenden mit:

```css live-sample___7letter-word-spacing
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Dies rendert unser HTML wie folgt:

{{ EmbedLiveSample('7letter-word-spacing', '100%', 330) }}

### Andere wertvolle Eigenschaften

Die obigen Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie Text auf einer Webseite gestalten können, aber es gibt viele weitere Eigenschaften, die Sie verwenden können. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Nutzung der obigen Eigenschaften gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Umschalten zwischen normalen und kleinen Großbuchstaben.
- {{cssxref("font-kerning")}}: Schriftkerning-Optionen ein- und ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftmerkmale ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Steuerung der Nutzung von alternativen Zeichen für einen gegebenen Schrifttyp.
- {{cssxref("font-variant-caps")}}: Steuerung der Nutzung von alternativen Großbuchstaben.
- {{cssxref("font-variant-east-asian")}}: Steuerung der Nutzung von alternativen Zeichen für ostasiatische Schriften wie Japanisch und Chinesisch.
- {{cssxref("font-variant-ligatures")}}: Steuerung, welche Ligaturen und kontextabhängigen Buchstabenformen in Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Steuerung der Nutzung von alternativen Zeichen für Zahlen, Brüche und Ordnungszahlen.
- {{cssxref("font-variant-position")}}: Steuerung der Nutzung von alternativen Zeichen von kleineren Größen, die als hoch- oder tiefgestellt positioniert sind.
- {{cssxref("font-size-adjust")}}: Anpassung der visuellen Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße.
- {{cssxref("font-stretch")}}: Umschalten zwischen möglichen alternativen gestreckten Versionen einer gegebenen Schrift.
- {{cssxref("text-underline-position")}}: Festlegen der Position von Unterstreichungen, die mit dem `text-decoration-line`-Eigenschaftswert `underline` gesetzt sind.
- {{cssxref("text-rendering")}}: Versuchen, einige Textrendering-Optimierungen durchzuführen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Festlegen, wie viel horizontalen Platz vor dem Beginn der ersten Zeile des Textinhalts verbleiben soll.
- {{cssxref("text-overflow")}}: Definieren, wie überlaufene Inhalte, die nicht angezeigt werden, den Benutzern signalisiert werden.
- {{cssxref("white-space")}}: Definieren, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Angeben, ob Zeilen innerhalb von Wörtern umgebrochen werden sollen.
- {{cssxref("direction")}}: Definieren der Textausrichtung. (Dies hängt von der Sprache ab und es ist normalerweise besser, HTML diesen Teil überlassen, da es mit dem Textinhalt zusammenhängt.)
- {{cssxref("hyphens")}}: Ein- und Ausschalten der Trennung für unterstützte Sprachen.
- {{cssxref("line-break")}}: Lockerung oder Verstärkung des Zeilenabbruchs für asiatische Sprachen.
- {{cssxref("text-align-last")}}: Definieren, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet ist.
- {{cssxref("text-orientation")}}: Definieren der Ausrichtung des Textes in einer Zeile.
- {{cssxref("overflow-wrap")}}: Angeben, ob der Browser Zeilen innerhalb von Wörtern umbrechen darf, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Definieren, ob Textzeilen horizontal oder vertikal angeordnet sind und in welche Richtung sich die nachfolgenden Zeilen bewegen.

## Schrift-Kurzschrift

Viele Schrifteigenschaften können auch durch die Kurzformeigenschaft {{cssxref("font")}} gesetzt werden. Diese werden in der folgenden Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}} und {{cssxref("font-family")}}.

Von all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn die `font`-Kurzformeigenschaft verwendet wird.

Ein Schrägstrich muss zwischen den {{cssxref("font-size")}}- und {{cssxref("line-height")}}-Eigenschaften eingefügt werden.

Ein vollständiges Beispiel würde folgendermaßen aussehen:

```css
font:
  italic normal bold normal 3em/1.5 "Helvetica",
  "Arial",
  sans-serif;
```

## Experimentieren mit Textgestaltung

OK, jetzt sind Sie dran. Für diese Aufgabe haben wir keine spezifischen Übungen für Sie vorbereitet. Wir möchten einfach, dass Sie mit einigen Schrift-/Textlayout-Eigenschaften spielen. Sehen Sie selbst, was Sie sich einfallen lassen können!

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN-Spielplatz zu bearbeiten.
2. Fügen Sie einige Deklarationen in die bereitgestellte leere `p { }`-Regel ein, um die Gestaltung des bereitgestellten Textes zu ändern. Seien Sie so kreativ, wie Sie möchten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN-Spielplatz löschen. Beziehen Sie sich auf die vorherigen Abschnitte im Artikel, um weitere Informationen zu den Schrift- und Textstilen, die Sie einstellen können, zu finden.

```html live-sample___fonts_text
<p>Some sample text for your delight</p>
```

```css-nolint live-sample___fonts_text
p {

}
```

{{ EmbedLiveSample('fonts_text', "100%", 60) }}

## Zusammenfassung

Wir hoffen, Sie hatten Freude daran, in diesem Artikel mit Text zu experimentieren! Der nächste Artikel wird Ihnen alles Wissenswerte über die Gestaltung von HTML-Listen bieten.

## Siehe auch

- [Alles über die CSS font-family Eigenschaft](https://explainers.dev/font-family/), explainers.dev
- [Web-sichere Schriftarten](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
