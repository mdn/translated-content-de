---
title: Grundlegende Text- und Schriftstilierung
short-title: Grundlagen der Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Meisterung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Hier werden wir alle grundlegenden Aspekte der Text-/Schriftgestaltung im Detail durchgehen, einschließlich der Einstellung von Schriftgewicht, -familie und -stil, Schriftabkürzungen, Textausrichtung und anderer Effekte sowie Zeilen- und Buchstabenspacing.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Stilgrundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Konzepte von Schriftfamilien, Schriftstapeln und websicheren Schriften.</li>
          <li>Einstellung von Schriftfarbe, -gewicht, -größe und -stil.</li>
          <li>Einstellung von Textausrichtung, Transformation und Dekoration.</li>
          <li>Einstellung der Zeilenhöhe.</li>
          <li>Wissen, dass es mehrere andere Schrift- und Textgestaltungs-Eigenschaften gibt und ermutigt werden, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was beinhaltet das Styling von Text in CSS?

Text innerhalb eines Elements wird im [Inhaltsbereich](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements angeordnet. Er beginnt oben links im Inhaltsbereich (oder oben rechts bei RTL-Sprachinhalten) und fließt bis zum Ende der Zeile. Sobald er das Ende erreicht, geht er zur nächsten Zeile hinunter und fließt erneut bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt im Kasten platziert wurde. Textelemente verhalten sich dabei im Wesentlichen wie eine Reihe von Inline-Elementen, die auf nebeneinanderliegenden Zeilen angeordnet werden und erst am Ende der Zeile oder manuell durch das {{htmlelement("br")}}-Element Zeilenumbrüche erzeugen.

> [!NOTE]
> Wenn der obige Absatz Sie verwirrt, macht das nichts — gehen Sie zurück und lesen Sie unseren [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Artikel, um die Theorie des Boxmodells aufzufrischen, bevor Sie weitermachen.

Die CSS-Eigenschaften, die zur Textgestaltung verwendet werden, fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten werden:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes betreffen, z.B. welche Schrift angewendet wird, deren Größe und ob sie fett, kursiv usw. ist.
- **Textlayout-Stile**: Eigenschaften, die den Abstand und andere Layoutmerkmale des Textes beeinflussen und Manipulationen wie den Abstand zwischen Zeilen und Buchstaben sowie die Ausrichtung des Textes im Inhaltsbereich ermöglichen.

> [!NOTE]
> Beachten Sie, dass der Text innerhalb eines Elements als eine einzige Einheit beeinflusst wird. Sie können keine Teilbereiche des Textes auswählen und gestalten, es sei denn, Sie umschließen sie mit einem geeigneten Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden Sie ein text-spezifisches Pseudo-Element wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements) oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den derzeit vom Cursor hervorgehobenen Text) aus.

## Schriften

Lassen Sie uns direkt zu den Eigenschaften für die Schriftgestaltung übergehen. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel an:

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

Die {{cssxref("color")}}-Eigenschaft legt die Farbe des Vordergrundinhalts der ausgewählten Elemente fest, was in der Regel der Text ist, aber auch einige andere Dinge umfassen kann, wie z.B. eine Unter- oder Überstreichung, die mit der {{cssxref("text-decoration")}}-Eigenschaft auf Text angewendet wird.

Das `color`-Attribut kann jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen, zum Beispiel:

```css live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
}
```

Dies bewirkt, dass die Absätze rot werden, anstatt wie im Standardbrowser schwarz, so wie hier:

{{ EmbedLiveSample('1color', '100%', 230) }}

### Schriftfamilien

Um eine andere Schrift für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — diese ermöglicht es Ihnen, eine Schriftart (oder eine Liste von Schriftarten) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wendet eine Schriftart nur an, wenn sie auf dem Computer verfügbar ist, auf dem die Website aufgerufen wird; wenn nicht, verwendet er einfach eine [Standardschriftart des Browsers](#standard-schriften). Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde bewirken, dass alle Absätze auf einer Seite die Schrift "arial" annehmen, die auf jedem Computer zu finden ist.

> [!NOTE]
> Das [Web-sichere Schriftarten](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba bietet eine interaktive Anleitung, warum Schriftarten wichtig sind, was websichere Schriftarten sind und wie man Schriftarten in CSS angibt — zusammen mit einer Herausforderung, um Ihr Wissen zu testen.

#### Websichere Schriftarten

Da wir gerade über die Verfügbarkeit von Schriftarten sprechen: Es gibt nur eine begrenzte Anzahl von Schriftarten, die im Allgemeinen auf allen Systemen verfügbar sind und daher ohne große Bedenken verwendet werden können. Diese sind die sogenannten **websicheren Schriftarten**.

Meistens möchten wir als Webentwickler die Schriftarten, die zur Anzeige unserer Textinhalte verwendet werden, spezifischer kontrollieren. Das Problem besteht darin, einen Weg zu finden, um zu wissen, welche Schriftart auf dem Computer verfügbar ist, der unsere Webseiten anzeigt. Es ist nicht möglich, dies in jedem Fall zu wissen, aber die websicheren Schriftarten sind bekannt dafür, auf fast allen Instanzen der meistgenutzten Betriebssysteme (Windows, macOS, die gängigsten Linux-Distributionen, Android und iOS) verfügbar zu sein.

Die Liste der tatsächlich websicheren Schriftarten wird sich im Lauf der Weiterentwicklung der Betriebssysteme ändern, aber es ist vernünftig zu erwarten, dass zumindest die folgenden Schriftarten als websicher gelten (viele von ihnen wurden in den späten 90er und frühen 2000er Jahren durch die Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ populär gemacht):

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Allgemeiner Typ</th>
      <th scope="col">Anmerkungen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arial</td>
      <td>sans-serif</td>
      <td>
        Es wird oft als beste Praxis angesehen, <em>Helvetica</em> als bevorzugte Alternative
        zu <em>Arial</em> hinzuzufügen, da ihre Schriftbilder zwar fast identisch sind,
        <em>Helvetica</em> jedoch als ansprechender angesehen wird, auch wenn <em>Arial</em>
        breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der
        Schriftart <em>Courier New</em> namens <em>Courier</em>. Es gilt als beste Praxis,
        beide zu verwenden, wobei <em>Courier New</em> als bevorzugte Alternative gilt.
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
        Schriftart <em>Times New Roman</em> namens <em>Times</em>. Es gilt als beste Praxis,
        beide zu verwenden, wobei <em>Times New Roman</em> als bevorzugte Alternative gilt.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Sie sollten vorsichtig mit der Verwendung dieser Schriftart sein — sie ist auf mobilen Betriebssystemen
        nicht weit verbreitet.
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
> Unter verschiedenen Ressourcen enthält die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste websicherer Schriftarten für Windows- und macOS-Betriebssysteme, was Ihnen helfen kann, Ihre Entscheidung darüber zu treffen, was Sie für Ihre Nutzung als sicher erachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, um Sie in die Lage zu versetzen, Ihre Schriftverwendung beliebig anzupassen: **Webschriften**. Dies ist etwas komplexer, und wir werden dies in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später im Modul behandeln.

#### Standard-Schriften

CSS definiert fünf allgemeine Namen für Schriftarten: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr allgemein, und die exakte Schriftart, die bei diesen allgemeinen Namen verwendet wird, kann zwischen den einzelnen Browsern und Betriebssystemen, auf denen sie angezeigt werden, variieren. Sie stellen ein _Worst-Case-Szenario_ dar, bei dem der Browser sein Bestes versucht, eine optisch passende Schrift zu liefern. `serif`, `sans-serif`, und `monospace` sind ziemlich vorhersehbar und sollten etwas Angemessenes bieten. Hingegen sind `cursive` und `fantasy` weniger vorhersehbar, und wir empfehlen, sie sehr sorgfältig und testweise zu verwenden.

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
        Schriftarten mit Serifen (die Verzierungen und anderen kleinen Details,
        die Sie an den Enden der Striche in einigen Schriftarten sehen).
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
      <td>Schriftarten ohne Serifen.</td>
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
        Schriftarten, bei denen jedes Zeichen dieselbe Breite hat, typischerweise
        in Codeauflistungen verwendet.
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
        Schriftarten, die beabsichtigen, Handschrift zu imitieren, mit fließenden,
        verbundenen Strichen.
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
      <td>Schriftarten, die zur Dekoration gedacht sind.</td>
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

Da Sie die Verfügbarkeit der Schriftarten, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (selbst eine Web-Schriftart _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** angeben, sodass der Browser mehrere Schriftarten zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert, der aus mehreren durch Kommas getrennten Schriftnamen besteht, z.B.,

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob diese Schriftart auf dem Rechner verfügbar ist. Wenn sie verfügbar ist, wird sie auf die ausgewählten Elemente angewendet. Wenn nicht, geht es zur nächsten Schriftart weiter, und so weiter.

Es ist eine gute Idee, am Ende des Stapels einen geeigneten allgemeinen Schriftartnamen anzugeben, damit der Browser zumindest etwas Ungefähres bieten kann, sollte keine der aufgelisteten Schriftarten verfügbar sein. Um diesen Punkt zu betonen: Absätze erhalten die standardmäßige serifenfreie Standardschrift des Browsers, wenn keine andere Option verfügbar ist — was normalerweise Times New Roman ist — dies ist nicht gut für eine serifenfreie Schriftart!

> [!NOTE]
> Während Sie Schriftnamen verwenden können, die Leerzeichen enthalten, beispielsweise `Trebuchet MS`, ohne den Namen zu zitieren, empfiehlt es sich, Schriftnamen einzuschließen, die Leerzeichen, Ziffern oder Satzzeichen außer Bindestrichen enthalten, um Fehler bei der Umschreibung zu vermeiden.

> [!WARNING]
> Jeder Schriftartname, der als generischer Familienname oder als CSS-Allgemeinwert missverstanden werden könnte, muss zitiert werden. Während die Schriftfamiliennamen als {{cssxref("custom-ident")}} oder {{cssxref("string")}} enthalten sein können, müssen Schriftnamen, die zufällig mit einem allgemeinen CSS-Wert gleichnamig oder CSS haben dasselbe wie einer der allgemeinen Schriftnamen, wie `sans-serif` oder `fantasy`, als ein zitierter String enthalten werden. Andernfalls wird der Schriftname als der äquivalente CSS-Schlüsselwert oder generische Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die allgemeinen Schriftnamen —`serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT zitiert werden, da Strings nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein font-family-Beispiel

Lassen Sie uns unser vorheriges Beispiel erweitern und den Absätzen eine serifenlose Schriftart geben:

```css live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Das Ergebnis sieht nun so aus:

{{ EmbedLiveSample('2fonts', '100%', 220) }}

### Schriftgröße

In unserem vorherigen Modul [CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben wir Längen- und Größeneinheiten überprüft. Die Schriftgröße (festgelegt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten (und anderen, wie [Prozentangaben](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) gemessen werden; die am häufigsten verwendeten Einheiten zur Textgrößenbestimmung sind jedoch:

- `px` (Pixel): Anzahl der Pixel, die der Text hoch sein soll. Dies ist eine absolute Einheit — sie ergibt in nahezu jeder Situation denselben endgültigen berechneten Wert für die Schrift auf der Seite.
- `em`s: 1 `em` entspricht der Schriftgröße, die auf das übergeordnete Element des aktuell gestalteten Elements angewendet wird (genauer gesagt der Breite eines Großbuchstaben M im übergeordneten Element). Dies kann knifflig sein, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich die Mühe machen? Es ist ziemlich natürlich, sobald Sie sich daran gewöhnt haben, und Sie können `em` verwenden, um alles zu vergrößern, nicht nur Text. Sie können eine ganze Website in `em` skalieren, was die Wartung erleichtert.
- `rem`s: Diese funktionieren wie `em`, außer dass 1 `rem` der Schriftgröße entspricht, die auf das Root-Element des Dokuments (d.h. {{htmlelement("html")}}) angewendet wird, nicht dem übergeordneten Element. Dies vereinfacht die Berechnung Ihrer Schriftgrößen erheblich.

Die `font-size` eines Elements wird von dessen übergeordnetem Element übernommen. Dies beginnt alles mit dem Stammes-Element des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard-`font-size` auf `16px` über Browser hinweg gesetzt ist. Jeder Absatz (oder ein anderes Element, dem keine abweichende Größe vom Browser zugewiesen wurde) im Stammes-Element hat eine endgültige Größe von `16px`. Andere Elemente können andere Standardgrößen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}}-Element standardmäßig eine Größe von `2em` festgelegt, die dann eine endgültige Größe von `32px` ergibt.

Es wird komplizierter, wenn Sie anfangen, die Schriftgröße verschachtelter Elemente zu ändern. Zum Beispiel, wenn Sie ein {{htmlelement("article")}}-Element auf Ihrer Seite haben und dessen `font-size` auf 1.5 `em` setzen würden (was in einer endgültigen Größe von 24 `px` berechnet wird), und dann wünschen, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben sollen, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten dessen `em`-Wert auf 20/24, also 0.83333333 `em`, setzen. Die Mathematik kann kompliziert sein, also müssen Sie vorsichtig sein, wie Sie Dinge gestalten. Es ist am besten, `rem` zu verwenden, wo immer Sie können, um die Dinge einfach zu halten, und vermeiden Sie, die `font-size` von Container-Elementen soweit wie möglich zu setzen.

### Schriftstil, Schriftgewicht, Textumwandlung und Textdekoration

CSS bietet vier allgemeine Eigenschaften, um die visuelle Gewichtung/Betonung von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um kursiven Text ein- oder auszuschalten. Die möglichen Werte sind wie folgt (Sie werden dies selten verwenden, es sei denn, Sie möchten aus irgendeinem Grund eine kursive Gestaltung deaktivieren):
  - `normal`: Setzt den Text auf die normale Schrift (deaktiviert vorhandene Kursivschrift).
  - `italic`: Setzt den Text so, dass er die kursive Version der Schrift verwendet, falls verfügbar; wenn nicht, wird Kursivschrift durch Schrägschrift simuliert.
  - `oblique`: Setzt den Text so, dass er eine simulierte Version einer kursiven Schrift verwendet, die durch Schrägstellen der normalen Version erstellt wurde.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Es gibt viele verfügbare Werte, wenn Sie viele Schriftvarianten zur Verfügung haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ usw.), aber realistisch werden Sie selten etwas davon außer `normal` und `bold` verwenden:
  - `normal`, `bold`: Normales und fettes Schriftgewicht.
  - `lighter`, `bolder`: Setzt die Fettschrift des aktuellen Elements eine Stufe leichter oder schwerer als die des Elternelements.
  - `100` – `900`: Numerische Gewichtswerte, die eine feinere Steuerung als die oben genannten Schlüsselwörter ermöglichen, falls nötig.

- {{cssxref("text-transform")}}: Ermöglicht es Ihnen, Ihre Schrift zu transformieren. Die Werte sind:
  - `none`: Verhindert jegliche Transformation.
  - `uppercase`: Wandelt den gesamten Text in Großbuchstaben um.
  - `lowercase`: Wandelt den gesamten Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter so um, dass der erste Buchstabe großgeschrieben wird.
  - `full-width`: Wandelt alle Glyphen um, sodass sie innerhalb eines festen rechteckigen Felds geschrieben werden, ähnlich wie bei einer Schriftart mit fester Breite, sodass beispielsweise lateinische Zeichen mit asiatischen Schriftzeichen (wie Chinesisch, Japanisch, Koreanisch) ausgerichtet werden können.

- {{cssxref("text-decoration")}}: Setzt/entfernt Textdekorationen auf Schriften (Sie werden dies hauptsächlich verwenden, um die standardmäßige Unterstreichung bei Links beim Styling zu entfernen). Die verfügbaren Werte sind:
  - `none`: Hebt etwaige vorhandene Textdekorationen auf.
  - `underline`: Unterstreicht den Text.
  - `overline`: Gibt dem Text eine Linie darüber.
  - `line-through`: Gibt dem Text einen durchgestrichenen Strich.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte auf einmal annehmen kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, beispielsweise `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Abkürzungseigenschaft für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzeugen, zum Beispiel: `text-decoration: line-through red wavy`.

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

### Text Schattierung

Sie können Ihrem Text Schatten hinzufügen, indem Sie die {{cssxref("text-shadow")}}-Eigenschaft verwenden. Diese Eigenschaft nimmt bis zu vier Werte an, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom Originaltext — diese Eigenschaft kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, aber am häufigsten werden Sie `px` verwenden; positive Werte verschieben den Schatten nach rechts, negative nach links. Dieser Wert muss angegeben werden.
2. Der vertikale Versatz des Schattens vom Originaltext. Dieser verhält sich ähnlich wie der horizontale Versatz, außer dass er den Schatten nach oben/unten verschiebt, nicht nach links/rechts. Dieser Wert muss angegeben werden.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter verteilt wird. Wenn dieser Wert nicht angegeben wird, wird er standardmäßig auf 0 gesetzt, was bedeutet, dass keine Unschärfe vorhanden ist. Diese Eigenschaft kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Basisfarbe des Schattens, die jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn sie nicht angegeben wird, wird sie standardmäßig auf [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) gesetzt, d.h. die Schattenfarbe wird von der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrfache Schatten

Sie können demselben Text mehrere Schatten hinzufügen, indem Sie mehrere Schattenwerte durch Kommas getrennt aufführen, beispielsweise:

```css live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element in unserem Tommy The Cat-Beispiel anwenden, würden wir folgendes Ergebnis erzielen:

{{ EmbedLiveSample('4shadows', '100%', 260) }}

> [!NOTE]
> Sie können weitere interessante Beispiele für die Verwendung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) sehen.

## Textlayout

Nach der Betrachtung der grundlegenden Schrifteigenschaften werfen wir einen Blick auf Eigenschaften, die das Textlayout beeinflussen können.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie Text innerhalb seines umschließenden Inhaltsbereichs ausgerichtet wird. Die verfügbaren Werte sind unten aufgelistet. Sie funktionieren im Wesentlichen genauso wie in einer normalen Textverarbeitungsanwendung:

- `left`: Linksbündigt den Text.
- `right`: Rechtsbündigt den Text.
- `center`: Zentriert den Text.
- `justify`: Streckt den Text, variiert die Lücken zwischen den Wörtern, sodass alle Textzeilen die gleiche Breite haben. Sie müssen dies vorsichtig verwenden — es kann schrecklich aussehen, besonders wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden möchten, sollten Sie auch über die Verwendung eines anderen von zusammen nachdenken, wie {{cssxref("hyphens")}}, um einige der längeren Wörter über die Zeilen zu trennen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "&lt;h1>")}} in unserem Beispiel anwenden, würden wir folgendes Ergebnis erzielen:

```css hidden live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-align: center;
}
```

{{ EmbedLiveSample('5text-align', '100%', 260) }}

### Zeilenhöhe

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern auch einen einheitenlosen Wert, der als Multiplikator wirkt und allgemein als die beste Option gilt. Mit einem einheitenlosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtext sieht im Allgemeinen schöner aus und ist leichter zu lesen, wenn die Zeilen weiter auseinander liegen. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelt spaced). Um unsere Textlinien auf das 1,6-fache der Höhe der Schrift festzulegen, würden wir verwenden:

```css live-sample___6line-height live-sample___7letter-word-spacing
p {
  line-height: 1.6;
}
```

Die Anwendung auf die {{htmlelement("p")}}-Elemente in unserem Beispiel würde folgendes Ergebnis liefern:

{{ EmbedLiveSample('6line-height', '100%', 300) }}

### Buchstaben- und Wortabstand

Die {{cssxref("letter-spacing")}}- und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden dies nicht oft verwenden, könnten jedoch einen Zweck finden, um ein bestimmtes Aussehen zu erzielen oder die Lesbarkeit einer besonders dichten Schrift zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir etwas Wort- und Buchstabensperrung auf die erste Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel anwenden mit:

```css live-sample___7letter-word-spacing
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Das rendert unser HTML als:

{{ EmbedLiveSample('7letter-word-spacing', '100%', 330) }}

### Andere Eigenschaften, die es wert sind angesehen zu werden

Die obigen Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie Text auf einer Webseite gestalten können, es gibt jedoch noch viele andere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Verwendung der obigen gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Zwischen kleinen Großbuchstaben und normalen Schriftalternativen wechseln.
- {{cssxref("font-kerning")}}: Schriftkerning-Optionen ein- und ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftmerkmale ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Steuert die Verwendung von alternativen Glyphen für eine gegebene Schriftart.
- {{cssxref("font-variant-caps")}}: Steuert die Verwendung von alternativen Großbuchstabenglyphen.
- {{cssxref("font-variant-east-asian")}}: Steuert die Verwendung von alternativen Glyphen für ostasiatische Schriften wie Japanisch und Chinesisch.
- {{cssxref("font-variant-ligatures")}}: Steuert, welche Ligaturen und kontextabhängigen Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Steuert die Verwendung von alternativen Glyphen für Zahlen, Brüche und Ordnungsmarkierungen.
- {{cssxref("font-variant-position")}}: Steuert die Verwendung von alternativen Glyphen in kleineren Größen, die als hochgestellt oder tiefgestellt positioniert sind.
- {{cssxref("font-size-adjust")}}: Passt die visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße an.
- {{cssxref("font-stretch")}}: Zwischen möglichen Alternativen gestreckter Versionen einer gegebenen Schrift wechseln.
- {{cssxref("text-underline-position")}}: Gibt die Position von Unterstreichungen an, die mit dem `text-decoration-line`-Eigenschaft `underline`-Wert gesetzt wurden.
- {{cssxref("text-rendering")}}: Versucht, einige Textrendering-Optimierungen vorzunehmen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Gibt an, wie viel horizontaler Abstand vor dem Beginn der ersten Zeile des Textinhalts gelassen werden soll.
- {{cssxref("text-overflow")}}: Definiert, wie überfließender Inhalt, der nicht angezeigt wird, den Benutzern signalisiert wird.
- {{cssxref("white-space")}}: Definiert, wie Leerraum und zugehörige Zeilenumbrüche innerhalb des Elements gehandhabt werden.
- {{cssxref("word-break")}}: Gibt an, ob Zeilen innerhalb von Wörtern umbrochen werden sollen.
- {{cssxref("direction")}}: Definiert die Textrichtung. (Dies hängt von der Sprache ab, und in der Regel ist es besser, HTML dies handhaben zu lassen, da es mit dem Textinhalt verknüpft ist.)
- {{cssxref("hyphens")}}: Schaltet die Silbentrennung für unterstützte Sprachen ein und aus.
- {{cssxref("line-break")}}: Locker oder verstärkt den Zeilenumbruch für asiatische Sprachen.
- {{cssxref("text-align-last")}}: Definiert, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet ist.
- {{cssxref("text-orientation")}}: Definiert die Orientierung des Textes in einer Zeile.
- {{cssxref("overflow-wrap")}}: Gibt an, ob der Browser innerhalb von Wörtern Zeilen umbrochen kann, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Definiert, ob Zeilen von Text horizontal oder vertikal angeordnet sind und die Richtung, in die nachfolgende Zeilen fließen.

## Schriftkurzform

Viele Schrifteigenschaften können auch durch die Abkürzungseigenschaft {{cssxref("font")}} festgelegt werden. Diese sind in der folgenden Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn die `font`-Kurzform Eigenschaft verwendet wird.

Ein Schrägstrich muss zwischen die {{cssxref("font-size")}}- und {{cssxref("line-height")}}-Eigenschaften gesetzt werden.

Ein vollständiges Beispiel würde folgendermaßen aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Spielen mit der Textgestaltung

OK, jetzt sind Sie an der Reihe. Für diese Aufgabe haben wir keine spezifischen Übungen für Sie. Wir möchten einfach nur, dass Sie mit einigen Schrift-/Textlayout-Eigenschaften herumspielen. Sehen Sie selbst, was Sie entwickeln können!

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie einige Deklarationen zur bereitgestellten leeren `p { }`-Regel hinzu, um die Gestaltung des bereitgestellten Textes zu ändern. Seien Sie so kreativ, wie Sie wollen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Beziehen Sie sich auf die vorherigen Abschnitte im Artikel, um weitere Informationen über die festgelegten Schrift- und Textstile zu finden.

```html live-sample___fonts_text
<p>Some sample text for your delight</p>
```

```css-nolint live-sample___fonts_text
p {

}
```

{{ EmbedLiveSample('fonts_text', "100%", 60) }}

## Zusammenfassung

Wir hoffen, Ihnen hat das Experimentieren mit Text in diesem Artikel gefallen! Der nächste Artikel wird Ihnen alles bieten, was Sie über die Gestaltung von HTML-Listen wissen müssen.

## Siehe auch

- [Alles über die CSS font-family-Eigenschaft](https://explainers.dev/font-family/), explainers.dev
- [Web-sichere Schriftarten](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
