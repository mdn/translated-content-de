---
title: Grundlegende Text- und Schriftstilierung
short-title: Grundlagen der Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Beherrschung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Hier gehen wir alle grundlegenden Grundlagen der Text-/Schriftstilierung im Detail durch, einschließlich der Einstellung von Schriftstärke, Familie und Stil, der Kurzschrift für Schriften, der Textausrichtung und anderer Effekte sowie des Zeilen- und Buchstabenabstands.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturieren von Inhalten mit HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Konzepte von Schriftfamilien, Schriftstapeln und webbasierten Schriften.</li>
          <li>Einstellung von Schriftfarbe, -stärke, -größe und -stil.</li>
          <li>Einstellung der Textausrichtung, Transformation und Dekoration.</li>
          <li>Einstellung der Zeilenhöhe.</li>
          <li>Wissen, dass es mehrere andere Schrift- und Textgestaltungs-Eigenschaften gibt, und Ermutigung, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was beinhaltet die Textgestaltung in CSS?

Text innerhalb eines Elements wird im [Inhaltsbereich](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements ausgelegt. Er beginnt oben links im Inhaltsbereich (oder oben rechts bei Inhalten in RTL-Sprachen) und fließt bis zum Ende der Zeile. Sobald es das Ende erreicht, geht es in die nächste Zeile und fließt erneut zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in die Box eingefügt wurde. Textinhalte verhalten sich effektiv wie eine Reihe von Inline-Elementen, die in nebeneinanderliegenden Zeilen ausgelegt sind und keinen Zeilenumbruch erzeugen, bis das Ende der Zeile erreicht ist, es sei denn, Sie erzwingen manuell einen Zeilenumbruch mit dem {{htmlelement("br")}}-Element.

> [!NOTE]
> Wenn der obige Absatz Sie verwirrt, macht das nichts — gehen Sie zurück und lesen Sie unseren Artikel [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model), um das Boxmodell noch einmal durchzugehen, bevor Sie weitermachen.

Die in CSS verwendeten Eigenschaften zur Textgestaltung fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel getrennt betrachten:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes betreffen, z.B. welche Schrift verwendet wird, ihre Größe und ob sie fett, kursiv usw. ist.
- **Textlayoutstile**: Eigenschaften, die den Abstand und andere Layoutmerkmale des Textes betreffen, sodass die Manipulation z.B. des Abstands zwischen Zeilen und Buchstaben und der Ausrichtung des Textes im Inhaltsbereich möglich ist.

> [!NOTE]
> Beachten Sie, dass der Text innerhalb eines Elements als eine einzige Einheit betrachtet wird. Sie können keine Teilabschnitte des Textes auswählen und stilisieren, es sei denn, Sie umhüllen sie mit einem geeigneten Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden ein textspezifisches Pseudoelement wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements aus), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements aus) oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den aktuell vom Cursor hervorgehobenen Text aus).

## Schriften

Lassen Sie uns direkt zu den Eigenschaften schreiten, die zur Gestaltung von Schriften verwendet werden. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel an:

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

Sie können das [fertige Beispiel auf GitHub finden](https://mdn.github.io/learning-area/css/styling-text/fundamentals/) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/fundamentals/index.html)).

### Farbe

Die {{cssxref("color")}}-Eigenschaft legt die Farbe des Vordergrundinhalts der ausgewählten Elemente fest, was in der Regel der Text ist, jedoch auch einige andere Dinge umfassen kann, wie eine Unter- oder Überstreichung, die auf Text mit der {{cssxref("text-decoration")}}-Eigenschaft angewendet wird.

`color` kann jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen, zum Beispiel:

```css
p {
  color: red;
}
```

Dies bewirkt, dass die Absätze rot statt des standardmäßigen Schwarz des Browsers werden, so:

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

Um eine andere Schrift für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — diese ermöglicht es Ihnen, eine Schrift (oder Liste von Schriften) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wird eine Schrift nur dann anwenden, wenn sie auf dem Computer vorhanden ist, auf dem die Webseite aufgerufen wird; andernfalls verwendet er einfach eine Browser-[Standardschrift](#standardschriften). Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde bewirken, dass alle Absätze auf einer Seite die arial Schrift übernehmen, die auf jedem Computer verfügbar ist.

#### Websichere Schriften

In Bezug auf die Verfügbarkeit von Schriften gibt es nur eine bestimmte Anzahl von Schriften, die im Allgemeinen auf allen Systemen verfügbar sind und daher bedenkenlos verwendet werden können. Diese werden als **websichere Schriften** bezeichnet.

In den meisten Fällen wollen wir als Webentwickler eine spezifischere Kontrolle über die Schriften haben, die zur Anzeige unserer Textinhalte verwendet werden. Das Problem besteht darin, einen Weg zu finden, um zu wissen, welche Schrift auf dem Computer verfügbar ist, auf dem unsere Webseiten angezeigt werden. Es gibt keine Möglichkeit, dies in jedem einzelnen Fall zu wissen, aber die websicheren Schriften sind bekanntlich auf fast allen Instanzen der am häufigsten verwendeten Betriebssysteme verfügbar (Windows, macOS, die häufigsten Linux-Distributionen, Android und iOS).

Die Liste der tatsächlichen websicheren Schriften wird sich mit der Weiterentwicklung der Betriebssysteme ändern, aber es ist vernünftig, die folgenden Schriften als websafe zu betrachten, zumindest vorerst (viele davon wurden durch die Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90er und frühen 2000er Jahren popularisiert):

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
        bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da, obwohl ihre
        Schriftgesichter fast identisch sind, <em>Helvetica</em> als
        formschöner betrachtet wird, auch wenn <em>Arial</em> breiter
        verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere)
        Version der <em>Courier New</em>-Schrift namens <em>Courier</em>. Es
        wird als beste Praxis angesehen, beide mit <em>Courier New</em> als
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
        Version der <em>Times New Roman</em>-Schrift namens <em>Times</em>.
        Es wird als beste Praxis angesehen, beide mit <em>Times New Roman</em>
        als bevorzugte Alternative zu verwenden.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Seien Sie bei der Verwendung dieser Schrift vorsichtig — sie ist auf
        mobilen Betriebssystemen nicht weit verbreitet.
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
> Unter verschiedenen Ressourcen führt die Webseite [cssfontstack.com](https://www.cssfontstack.com/) eine Liste von websicheren Schriften, die auf Windows- und macOS-Betriebssystemen verfügbar sind, was Ihnen bei der Entscheidung hilft, was Sie für Ihre Verwendung als sicher erachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schrift zusammen mit einer Webseite herunterzuladen, um die Schriftverwendung ganz nach Wunsch zu gestalten: **Web-Schriften**. Dies ist ein wenig komplizierter, und wir werden es in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später in diesem Modul besprechen.

#### Standardschriften

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr allgemein und das exakte Schriftbild, das aus diesen generischen Namen verwendet wird, kann zwischen den Browsern und Betriebssystemen variieren, auf denen sie angezeigt werden. Es stellt ein _Worst-Case-Szenario_ dar, bei dem der Browser sein Bestes gibt, um eine angemessene Schrift bereitzustellen. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Vernünftiges liefern. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar, und wir empfehlen, sie sehr vorsichtig zu verwenden und während der Entwicklung zu testen.

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
        Schriften, die Serifen haben (die Verzierungen und anderen kleinen Details, die Sie an den Enden der Striche in einigen Schriftarten sehen).
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
        Schriften, die beabsichtigt sind, Handschrift nachzuahmen, mit fließenden, verbundenen Strichen.
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

Da Sie die Verfügbarkeit der Schriften, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (selbst eine Webschrift _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** bereitstellen, sodass der Browser mehrere Schriften zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert, der aus mehreren durch Kommas getrennten Schriftnamen besteht, z.B.:

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob diese Schrift auf dem Computer verfügbar ist. Wenn dies der Fall ist, wendet er diese Schrift auf die ausgewählten Elemente an. Wenn nicht, geht er zur nächsten Schrift über und so weiter.

Es ist eine gute Idee, am Ende des Stapels einen passenden generischen Schriftnamen anzugeben, sodass, wenn keine der gelisteten Schriften verfügbar ist, der Browser zumindest etwas ungefähr Passendes bereitstellen kann. Um diesen Punkt zu betonen, erhalten die Absätze die standardspezifische serifenlose Schrift des Browsers, wenn keine andere Option verfügbar ist — was normalerweise Times New Roman ist — das ist nicht ideal für eine serifenlose Schrift!

> [!NOTE]
> Während Sie Schriftnamen, die ein Leerzeichen enthalten, wie `Trebuchet MS`, ohne Anführungszeichen verwenden können, wird empfohlen, Schriftnamen, die Leerzeichen, Ziffern oder andere Interpunktionszeichen als Bindestrich enthalten, zu zitieren, um Fehler beim Entfliehen zu vermeiden.

> [!WARNING]
> Jeder Schriftnamen, der als generischer Familienname oder als CSS-weiter Schlüsselwort interpretiert werden könnte, muss zitiert werden. Während die Schriftfamiliennamen als {{cssxref("custom-ident")}} oder als {{cssxref("string")}} enthalten sein können, müssen die Schriftfamilienschriftarten, die denselben Namen wie ein CSS-weites Eigenschaftswert oder CSS denselben Namen wie einer der generischen Schriftfamilienschriften haben, wie `sans-serif` oder `fantasy`, als zitierte Zeichenkette eingeschlossen werden. Andernfalls wird der Schriftfamilienname als das gleichwertige CSS-Schlüsselwort oder der generische Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftnamen — `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter nicht in Anführungszeichen gesetzt werden, da Zeichenketten nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für `font-family`

Lassen Sie uns unser vorheriges Beispiel erweitern, indem wir den Absätzen eine serifenlose Schriftart geben:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Dies gibt uns das folgende Ergebnis:

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

Im Artikel [CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) unseres vorherigen Moduls haben wir Längeseinheiten und Größen besprochen. Die Schriftgröße (festgelegt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten gemessen werden (und in anderen, wie [Prozentwerten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)); die häufigsten Einheiten, die Sie zur Größenbestimmung von Text verwenden werden, sind jedoch:

- `px` (Pixel): Die Anzahl der Pixel hoch, die Sie den Text haben möchten. Dies ist eine absolute Einheit — sie ergibt den gleichen endgültigen berechneten Wert für die Schrift auf der Seite in so ziemlich jeder Situation.
- `em`s: 1 `em` entspricht der Schriftgröße, die auf das Elternelement des Elements angewendet wird, das wir stilisieren (genauer gesagt, der Breite eines Großbuchstabens M, der im Elternelement enthalten ist). Dies kann schwierig zu berechnen sein, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich darum kümmern? Es ist ziemlich natürlich, sobald man sich daran gewöhnt hat, und Sie können `em` verwenden, um alles zu skalieren, nicht nur Text. Sie können eine gesamte Website in `em` skalieren, was die Wartung erleichtert.
- `rem`s: Sie funktionieren genau wie `em`, außer dass 1 `rem` der auf das Wurzelelement des Dokuments (d.h. {{htmlelement("html")}}) eingestellten Schriftgröße entspricht, nicht dem Elternelement. Dies macht die Mathematik zur Berechnung Ihrer Schriftgrößen viel einfacher.

Die `font-size` eines Elements wird vom Elternelement dieses Elements geerbt. Dies beginnt alles mit dem Wurzelelement des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard-`font-size` in Browsern auf `16px` eingestellt ist. Jedes Absatz (oder ein anderes Element, das keine andere vom Browser eingestellte Größe hat) innerhalb des Wurzelelements wird eine endgültige Größe von `16px` haben. Andere Elemente können unterschiedliche Standardgrößen haben. Beispielsweise hat ein {{htmlelement("Heading_Elements", "h1")}}-Element standardmäßig eine Größe von `2em`, daher hat es eine endgültige Größe von `32px`.

Die Dinge werden komplizierter, wenn Sie anfangen, die Schriftgrößen verschachtelter Elemente zu ändern. Wenn Sie beispielsweise ein {{htmlelement("article")}}-Element auf Ihrer Seite hätten und dessen `font-size` auf 1,5 `em` einstellen möchten (was eine berechnete Größe von 24 `px` ergibt), und dann möchten, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten seinen `em`-Wert auf 20/24, also 0,83333333 `em`, setzen. Die Mathematik kann kompliziert sein, daher müssen Sie vorsichtig sein, wie Sie Dinge stilisieren. Es ist am besten, `rem` zu verwenden, wo immer Sie können, um es einfach zu halten, und vermeiden, die `font-size` von Container-Elementen einzustellen, wo möglich.

### Schriftstil, Schriftschwere, Texttransformierung und Textdekoration

CSS bietet vier häufige Eigenschaften, um das visuelle Gewicht/Akzentuierung von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um kursiven Text ein- oder auszuschalten. Mögliche Werte sind wie folgt (Sie werden dies selten verwenden, es sei denn, Sie möchten aus irgendeinem Grund eine kursive Formatierung ausschalten):

  - `normal`: Setzt den Text auf die normale Schrift (schaltet bestehende Kursivierung aus).
  - `italic`: Setzt den Text auf die kursiv Version der Schrift, falls verfügbar; andernfalls wird die Kursivschrift durch oblique simuliert.
  - `oblique`: Setzt den Text auf eine simulierte Version einer kursiven Schrift, die durch Neigen der normalen Version erstellt wurde.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Dies hat viele verfügbare Werte, falls Sie viele Schriftvarianten (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ usw.) zur Verfügung haben, aber in der Realität werden Sie selten andere als `normal` und `bold` verwenden:

  - `normal`, `bold`: Normales und fettes Schriftgewicht.
  - `lighter`, `bolder`: Setzt die Schwere des aktuellen Elements auf eine Stufe leichter oder schwerer als die Schwere des Elternelements.
  - `100` – `900`: Numerische Werte für die Schriftschwere, die eine feinere Kontrolle als die obigen Schlüsselwörter bieten, falls benötigt.

- {{cssxref("text-transform")}}: Ermöglicht das Transformieren Ihrer Schrift. Werte umfassen:

  - `none`: Verhindert jegliche Transformation.
  - `uppercase`: Wandelt allen Text in Großbuchstaben um.
  - `lowercase`: Wandelt allen Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter um, sodass der erste Buchstabe großgeschrieben wird.
  - `full-width`: Wandelt alle Glyphen um, sodass sie in einem festen Breitenquadrat geschrieben werden, ähnlich einer Schriftart fester Breite, was das Ausrichten von z.B. lateinischen Zeichen mit asiatischen Sprachglyphen (wie Chinesisch, Japanisch, Koreanisch) ermöglicht.

- {{cssxref("text-decoration")}}: Setzt/deaktiviert Textdekorationen auf Schriftarten (Sie werden dies hauptsächlich verwenden, um die standardmäßige Unterstreichung auf Links beim Stylen zu deaktivieren). Verfügbare Werte sind:

  - `none`: Hebt alle bereits vorhandenen Textdekorationen auf.
  - `underline`: Unterstreicht den Text.
  - `overline`: Gibt dem Text eine Überstreichung.
  - `line-through`: Fügt dem Text einen Durchstrich hinzu.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig annehmen kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, z.B. `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} eine Abkürzungseigenschaft für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzeugen, z.B.: `text-decoration: line-through red wavy`.

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

### Text-Schatten

Sie können Ihre Text mit Schatten versehen, indem Sie die {{cssxref("text-shadow")}}-Eigenschaft verwenden. Diese nimmt bis zu vier Werte an, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom ursprünglichen Text — dies kann die meisten verfügbaren CSS-[Längen- und Größen-Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, am häufigsten jedoch verwenden Sie `px`; positive Werte verschieben den Schatten nach rechts, negative nach links. Diese Angabe muss als Mindestangabe vorhanden sein.
2. Der vertikale Versatz des Schattens vom ursprünglichen Text. Dies verhält sich ähnlich wie der horizontale Versatz, außer dass es den Schatten nach oben/unten verschiebt, nicht nach links/rechts. Diese Angabe muss als Mindestangabe vorhanden sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten stärker verteilt wird. Wenn dieser Wert nicht angegeben wird, liegt er standardmäßig bei 0, was bedeutet, dass keine Unschärfe vorhanden ist. Dies kann die meisten verfügbaren CSS-[Längen- und Größen-Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn nicht angegeben, lautet der Standardwert [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword), d.h. die Farbe des Schattens wird aus der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrfach-Schatten

Sie können einem Text mehrere Schatten hinzufügen, indem Sie mehrere, durch Kommas getrennte Schattenwerte angeben, z.B.:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "h1")}}-Element in unserem Tommy-The-Cat-Beispiel anwenden, erhalten wir Folgendes:

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
> Sie können weitere interessante Beispiele für die Verwendung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) sehen.

## Textlayout

Nachdem wir die grundlegenden Schrifteigenschaften behandelt haben, schauen wir uns die Eigenschaften an, mit denen wir das Textlayout beeinflussen können.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie Text innerhalb seines enthaltenen Inhaltsbereichs ausgerichtet wird. Die verfügbaren Werte sind unten aufgelistet. Sie funktionieren im Wesentlichen genauso, wie sie es in einer normalen Textverarbeitungsanwendung tun:

- `left`: Linksbündige Ausrichtung des Textes.
- `right`: Rechtsbündige Ausrichtung des Textes.
- `center`: Zentrierung des Textes.
- `justify`: Der Text wird gestreckt und die Abstände zwischen den Wörtern so variiert, dass alle Textzeilen die gleiche Breite haben. Vorsicht ist geboten — es kann furchtbar aussehen, besonders wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden, sollten Sie auch in Betracht ziehen, etwas anderes zusammen damit zu verwenden, wie {{cssxref("hyphens")}}, um einige der längeren Wörter über Zeilen hinweg zu trennen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "h1")}} in unserem Beispiel anwenden, erhalten wir Folgendes:

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

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größen-Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern auch einen einheitslosen Wert, der als Multiplikator fungiert und allgemein als die beste Option angesehen wird. Mit einem einheitslosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtext sieht im Allgemeinen schöner aus und ist leichter zu lesen, wenn die Zeilen auseinander liegen. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelter Zeilenabstand). Um unsere Textzeilen auf das 1,6-fache der Schriftgröße zu setzen, würden wir verwenden:

```css
p {
  line-height: 1.6;
}
```

Wenn wir dies auf die {{htmlelement("p")}}-Elemente in unserem Beispiel anwenden, erhalten wir folgendes Ergebnis:

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

Die {{cssxref("letter-spacing")}}- und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie verwenden dies nicht sehr oft, könnten aber einen Nutzen darin finden, um ein bestimmtes Aussehen zu erreichen oder um die Lesbarkeit einer besonders dichten Schrift zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir einen Wort- und Buchstabenabstand auf die erste Zeile jeder {{htmlelement("p")}}-Element in unserem HTML-Beispiel anwenden mit:

```css
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Dies rendert unser HTML so:

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

### Weitere Eigenschaften, die es zu erkunden gilt

Die oben genannten Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie Text auf einer Webseite stilisieren können, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich daran gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Wechseln zwischen Kleinschrift und normalen Schriftalternativen.
- {{cssxref("font-kerning")}}: Schalten Sie die Optionen für die Zeichenzwischengranierung ein und aus.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftmerkmale ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Die Verwendung von alternativen Glyphen für eine bestimmte Schriftart steuern.
- {{cssxref("font-variant-caps")}}: Die Verwendung von alternativen Großbuchstaben steuern.
- {{cssxref("font-variant-east-asian")}}: Die Verwendung von alternativen Glyphen für ostasiatische Schriften, wie Japanisch und Chinesisch, steuern.
- {{cssxref("font-variant-ligatures")}}: Welche Ligaturen und kontextbezogenen Formen im Text verwendet werden, steuern.
- {{cssxref("font-variant-numeric")}}: Die Verwendung von alternativen Glyphen für Zahlen, Brüche und Ordnungszeichen steuern.
- {{cssxref("font-variant-position")}}: Die Verwendung von alternativen kleiner dimensionierten Glyphen, die als hochgestellt oder tiefgestellt positioniert sind, steuern.
- {{cssxref("font-size-adjust")}}: Die visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße anpassen.
- {{cssxref("font-stretch")}}: Zwischen möglichen alternativen gestreckten Versionen einer bestimmten Schrift wechseln.
- {{cssxref("text-underline-position")}}: Die Position von Unterstreichungen angeben, die mit dem `text-decoration-line`-Eigenschaftwerte `underline` gesetzt wurden.
- {{cssxref("text-rendering")}}: Versuchen, einige Textwiedergabeoptimierungen durchzuführen.

Textlayout-Stile:

- {{cssxref("text-indent")}}: Angeben, wie viel horizontaler Platz vor dem Anfang der ersten Zeile des Textinhalts freigelassen werden soll.
- {{cssxref("text-overflow")}}: Definieren, wie überfließende Inhalte, die nicht angezeigt werden, den Benutzern signalisiert werden.
- {{cssxref("white-space")}}: Definieren, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Angeben, ob Zeilen innerhalb von Wörtern gebrochen werden sollen.
- {{cssxref("direction")}}: Die Textrichtung angeben. (Dies hängt von der Sprache ab, und normalerweise ist es besser, HTML diesen Teil verwalten zu lassen, da es an den Textinhalt gebunden ist.)
- {{cssxref("hyphens")}}: Die Silbentrennung für unterstützte Sprachen ein- und ausschalten.
- {{cssxref("line-break")}}: Zeilenumbrüche für asiatische Sprachen entspannen oder verstärken.
- {{cssxref("text-align-last")}}: Angeben, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.
- {{cssxref("text-orientation")}}: Die Orientierung des Textes in einer Linie definieren.
- {{cssxref("overflow-wrap")}}: Angeben, ob der Browser Zeilen innerhalb von Wörtern brechen darf, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Definieren, ob Textzeilen horizontal oder vertikal ausgelegt werden, und in welcher Richtung nachfolgende Zeilen fließen.

## Schrift-Kurzschrift

Viele Schrift-Eigenschaften können auch durch die Kurzschrift-Eigenschaft {{cssxref("font")}} festgelegt werden. Diese sind in folgender Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, und {{cssxref("font-family")}}.

Von all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn die `font` Kurzschrifteigenschaft verwendet wird.

Ein Schrägstrich muss zwischen den {{cssxref("font-size")}} und {{cssxref("line-height")}}-Eigenschaften eingefügt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aktives Lernen: Spielereien mit der Textformatierung

In dieser aktiven Lernsitzung haben wir keine speziellen Übungen für Sie vorbereitet. Wir möchten einfach, dass Sie einige Schriften-/Textlayout-Eigenschaften ausprobieren. Sehen Sie selbst, was Sie damit machen können! Sie können dies entweder mit offline HTML/CSS-Dateien tun oder Ihren Code in das unten stehende Live-Editierbeispiel eingeben.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen.

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

Wir hoffen, Sie haben Spaß daran gehabt, mit Text in diesem Artikel zu arbeiten! Der nächste Artikel bietet Ihnen alles, was Sie über das Stylen von HTML-Listen wissen müssen.

## Siehe auch

- [Alles über die CSS-Font-Family-Eigenschaft](https://explainers.dev/font-family/), explainers.dev
- [Web-sichere Schriften](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
