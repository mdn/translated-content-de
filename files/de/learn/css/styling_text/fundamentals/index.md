---
title: Grundlagen der Text- und Schriftstilgestaltung
slug: Learn/CSS/Styling_text/Fundamentals
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}

In diesem Artikel beginnen wir Ihre Reise, um die Textgestaltung mit {{glossary("CSS")}} zu meistern. Wir werden alle grundlegenden Grundlagen der Text-/Schriftstilgestaltung im Detail durchgehen, einschließlich der Einstellung von Schriftstärke, Schriftfamilie und -stil, Schriftkürzel, Textausrichtung und anderen Effekten sowie Zeilen- und Buchstabenzwischenräumen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), Grundlagen von CSS (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Eigenschaften und Techniken zu erlernen, die erforderlich sind, um Text auf Webseiten zu gestalten.
      </td>
    </tr>
  </tbody>
</table>

## Was gehört zur Textgestaltung in CSS?

Text innerhalb eines Elements wird im [Inhaltsbereich](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements angeordnet. Er beginnt in der oberen linken Ecke des Inhaltsbereichs (oder in der oberen rechten Ecke bei RTL-Sprachen) und fließt zum Ende der Zeile. Sobald das Ende erreicht ist, geht er in die nächste Zeile und fließt erneut zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt im Bereich platziert wurde. Textinhalt verhält sich effektiv wie eine Reihe von Inline-Elementen, die auf Linien nebeneinander angeordnet sind und keine Zeilenumbrüche erzeugen, bis das Ende der Zeile erreicht ist, es sei denn, Sie erzwingen manuell einen Zeilenumbruch mit dem {{htmlelement("br")}}-Element.

> [!NOTE]
> Wenn der obige Absatz Sie verwirrt, dann macht das nichts — gehen Sie zurück und überprüfen Sie unseren [Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)-Artikel, um die Theorie des Box-Modells aufzufrischen, bevor Sie fortfahren.

Die in CSS verwendeten Eigenschaften zur Textgestaltung fallen im Allgemeinen in zwei Kategorien, die wir in diesem Artikel separat betrachten werden:

- **Schriftstile**: Eigenschaften, die die Schriftart eines Textes betreffen, z.B. welche Schriftart angewendet wird, deren Größe und ob sie fett, kursiv usw. ist.
- **Textlayoutstile**: Eigenschaften, die den Abstand und andere Layoutmerkmale des Textes betreffen, z.B. den Zeilen- und Buchstabenabstand sowie die Ausrichtung des Textes innerhalb des Inhaltsbereichs zu manipulieren.

> [!NOTE]
> Beachten Sie, dass der Text innerhalb eines Elements als eine einzige Einheit beeinflusst wird. Sie können keine Unterabschnitte des Textes auswählen und gestalten, es sei denn, Sie umwickeln sie mit einem geeigneten Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden ein text-spezifisches Pseudo-Element wie [::first-letter](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements aus), [::first-line](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements aus) oder [::selection](/de/docs/Web/CSS/::selection) (wählt den aktuell vom Cursor hervorgehobenen Text aus).

## Schriften

Lassen Sie uns direkt zu den Eigenschaften zur Gestaltung von Schriften übergehen. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel an:

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

Die {{cssxref("color")}}-Eigenschaft legt die Farbe des Vordergrundinhalts der ausgewählten Elemente fest, das ist in der Regel der Text, kann aber auch ein paar andere Dinge umfassen, wie z.B. eine Unter- oder Überstreichung, die mit der {{cssxref("text-decoration")}}-Eigenschaft auf den Text angewendet wird.

`color` kann jede [CSS-Farbeinheit](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) akzeptieren, zum Beispiel:

```css
p {
  color: red;
}
```

Dadurch werden die Absätze rot, anstatt das Standard-Browser-Schwarz, wie hier:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it war eine seltene Gelegenheit wie diese, dass er tat.
</p>
```

{{ EmbedLiveSample('Color', '100%', 230) }}

### Schriftfamilien

Um eine andere Schriftart für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — diese ermöglicht es Ihnen, eine Schriftart (oder eine Liste von Schriften) anzugeben, die der Browser auf die ausgewählten Elemente anwenden soll. Der Browser wird nur eine Schriftart anwenden, wenn sie auf dem Rechner, von dem aus die Website aufgerufen wird, verfügbar ist; andernfalls verwendet er einfach eine Browser-[Standardschrift](#standardschriften). Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde bewirken, dass alle Absätze auf einer Seite die Schriftart Arial übernehmen, die auf jedem Computer zu finden ist.

#### Websichere Schriften

Beim Thema Schriftverfügbarkeit gibt es nur eine begrenzte Anzahl von Schriftarten, die auf allen Systemen allgemein verfügbar sind und daher ohne viel Sorge verwendet werden können. Dies sind die sogenannten **websicheren Schriften**.

Meistens möchten wir als Webentwickler eine genauere Kontrolle über die Schriften haben, die zur Darstellung unserer Textinhalte verwendet werden. Das Problem besteht darin, einen Weg zu finden, um zu wissen, welche Schriftart auf dem Computer verfügbar ist, der unsere Webseiten anzeigt. Es gibt keine Möglichkeit, dies in jedem Fall zu wissen, aber die websicheren Schriften sind bekannt dafür, dass sie auf fast allen Instanzen der am häufigsten verwendeten Betriebssysteme (Windows, macOS, die gängigsten Linux-Distributionen, Android und iOS) verfügbar sind.

Die Liste der tatsächlichen websicheren Schriften wird sich mit der Entwicklung der Betriebssysteme ändern, aber es ist vertretbar, die folgenden Schriften als websicher zu betrachten, zumindest für den Moment (viele von ihnen wurden dank der Microsoft-Initiative _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ in den späten 90er und frühen 2000er Jahren populär gemacht):

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
        Es wird oft als beste Praxis angesehen, <em>Helvetica</em> als bevorzugte Alternative zu <em>Arial</em> hinzuzufügen, da ihre Schriftbilder zwar nahezu identisch sind, <em>Helvetica</em> als schöner geformt gilt, auch wenn <em>Arial</em> breiter verfügbar ist.
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der <em>Courier New</em>-Schrift namens <em>Courier</em>. Es gilt als beste Praxis, beide mit <em>Courier New</em> als bevorzugte Alternative zu verwenden.
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
        Einige Betriebssysteme haben eine alternative (möglicherweise ältere) Version der <em>Times New Roman</em>-Schrift namens <em>Times</em>. Es gilt als beste Praxis, beide mit <em>Times New Roman</em> als bevorzugte Alternative zu verwenden.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        Bei der Verwendung dieser Schrift sollten Sie vorsichtig sein — sie ist auf mobilen Betriebssystemen nicht weit verbreitet.
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
> Zu den verschiedenen Ressourcen gehört auch die Website [cssfontstack.com](https://www.cssfontstack.com/), die eine Liste websicherer Schriften auf Windows- und macOS-Betriebssystemen führt, die Ihnen bei der Entscheidung helfen kann, was Sie für Ihre Verwendung als sicher betrachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, damit Sie Ihre Schriftartnutzung in jeder gewünschten Weise anpassen können: **Web-Schriften**. Dies ist etwas komplexer, und wir werden es in einem [separaten Artikel](/de/docs/Learn/CSS/Styling_text/Web_fonts) später im Modul besprechen.

#### Standardschriften

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch und die tatsächlich verwendete Schriftart aus diesen generischen Namen kann zwischen verschiedenen Browsern und Betriebssystemen variieren, auf denen sie angezeigt werden. Es stellt das _schlimmstmögliche Szenario_ dar, bei dem der Browser sein Bestes tut, um eine Schrift zu liefern, die angemessen aussieht. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Angemessenes liefern. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar, und wir empfehlen, diese sehr sorgfältig zu verwenden und beim Testen vorzugehen.

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
        Schriften, die Serifen haben (die Schnörkel und anderen kleinen Details, die man an den Enden der Striche in einigen Schriftbildern sieht).
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
        Schriften, die darauf ausgelegt sind, Handschrift zu emulieren, mit fließenden, verbundenen Strichen.
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

Da Sie die Verfügbarkeit der Schriften, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (selbst eine Web-Schrift _könnte_ aus irgendeinem Grund ausfallen), können Sie einen **Schriftstapel** angeben, damit der Browser mehrere Schriften zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert, der aus mehreren durch Kommata getrennten Schriftenamen besteht, z.B.

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob diese Schrift auf dem Computer verfügbar ist. Wenn ja, wird die Schrift auf die ausgewählten Elemente angewendet. Wenn nicht, geht er zur nächsten Schrift über, und so weiter.

Es ist eine gute Idee, am Ende des Stapels einen geeigneten generischen Schriftnamen anzugeben, sodass, wenn keine der aufgeführten Schriften verfügbar ist, der Browser zumindest etwas Angemessenes bereitstellen kann. Um diesen Punkt zu betonen, wird den Absätzen die Standardschrift von serif des Browsers zugewiesen, wenn keine andere Option verfügbar ist — was in der Regel Times New Roman ist — das ist keine gute Wahl für eine sans-serif-Schrift!

> [!NOTE]
> Während Sie Schriftarten verwenden können, die ein Leerzeichen enthalten, wie `Trebuchet MS`, ohne den Namen zu zitieren, wird empfohlen, Schriftarten, die Leerzeichen, Ziffern oder andere Satzzeichen als Bindestriche enthalten, zu zitieren, um Fehler beim Escaping zu vermeiden.

> [!WARNING]
> Jeder Schriftartname, der als generischer Familienname oder CSS-allgemeines Schlüsselwort missverstanden werden könnte, muss zitiert werden. Während die Schriftartnamen als {{cssxref("custom-ident")}} oder als {{cssxref("string")}} eingeschlossen werden können, muss jeder Schriftartname, der zufällig denselben Namen wie ein CSS-allgemeines Eigenschaftswert hat, wie `initial` oder `inherit`, oder der den gleichen Namen wie einer der generischen Schriftnamen hat, wie `sans-serif` oder `fantasy`, als zitierte Zeichenfolge enthalten sein. Ansonsten wird der Schriftartname als gleiches CSS-Schlüsselwort oder generischer Name interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftnamen —`serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT zitiert werden, da Strings nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für Schriftfamilie

Lassen Sie uns unsere vorheriges Beispiel erweitern, indem wir den Absätzen eine sans-serif-Schrift zuweisen:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Das ergibt folgendes Ergebnis:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it war eine seltene Gelegenheit wie diese, dass er tat.
</p>
```

{{ EmbedLiveSample('A_font-family_example', '100%', 220) }}

### Schriftgröße

In unserem vorherigen Modulartikel [CSS-Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) haben wir Längen- und Größeneinheiten besprochen. Die Schriftgröße (eingestellt mit der {{cssxref("font-size")}}-Eigenschaft) kann Werte annehmen, die in den meisten dieser Einheiten (und anderen, wie [Prozentsätzen](/de/docs/Learn/CSS/Building_blocks/Values_and_units#percentages)) gemessen werden können; die am häufigsten verwendeten Einheiten für die Textgröße sind jedoch:

- `px` (Pixel): Die Anzahl der Pixel hoch, die Sie für den Text festlegen möchten. Dies ist eine absolute Einheit — sie führt in fast jeder Situation zu demselben endgültigen berechneten Wert für die Schrift auf der Seite.
- `em`s: 1 `em` entspricht der Schriftgröße des Elternelements des Elemente, das wir stylen (genauer gesagt, die Breite eines Großbuchstabens M im Elternteil). Dies kann schwierig sein, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen haben, aber es ist machbar, wie Sie unten sehen werden. Warum sich die Mühe machen? Es ist ziemlich natürlich, sobald Sie sich daran gewöhnt haben, und Sie können `em` verwenden, um alles zu skalieren, nicht nur Text. Sie können eine gesamte Website mit `em` gestalten, was die Wartung erleichtert.
- `rem`s: Diese funktionieren genauso wie `em`, außer dass 1 `rem` der am Dokumentwurzelelement (z.B. {{htmlelement("html")}}) eingestellten Schriftgröße entspricht, nicht dem Elternelement. Dadurch wird die Berechnung der Schriftgrößen viel einfacher.

Die `font-size` eines Elements wird von dem Elternelement geerbt. Alles beginnt mit dem Wurzelelement des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard-`font-size` in den Browsern auf `16px` eingestellt ist. Jeder Absatz (oder ein anderes Element, dem keine andere Größe vom Browser zugewiesen wird) innerhalb des Wurzelelements hat eine endgültige Größe von `16px`. Andere Elemente können unterschiedliche Standardgrößen haben. Beispielsweise hat ein {{htmlelement("Heading_Elements", "h1")}}-Element standardmäßig eine Größe von `2em`, sodass es eine endgültige Größe von `32px` haben wird.

Die Sache wird komplizierter, wenn Sie anfangen, die Schriftgröße verschachtelter Elemente zu ändern. Wenn Sie beispielsweise ein {{htmlelement("article")}}-Element auf Ihrer Seite hätten und dessen `font-size` auf 1,5 `em` (was einer endgültigen Größe von 24 `px` entspricht) einstellen möchten, und die Absätze innerhalb dieser `<article>`-Elemente eine berechnete Schriftgröße von 20 `px` haben sollen, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size ist 16px -->
<article>
  <!-- Wenn meine Schriftgröße 1.5em ist -->
  <p>Mein Absatz</p>
  <!-- Wie berechnen ich das auf 20px Schriftgröße? -->
</article>
```

Sie müssten den `em`-Wert auf 20/24, oder auf 0.83333333 `em` einstellen. Die Berechnungen können kompliziert sein, deshalb müssen Sie sorgfältig überlegen, wie Sie Dinge gestalten. Es ist am besten, überall wo möglich `rem` zu verwenden, um die Sache einfach zu halten, und zu vermeiden, die `font-size` von Containerelementen einzustellen, wo möglich.

### Schriftstil, Schriftstärke, Textumwandlung und Textdekoration

CSS bietet vier allgemeine Eigenschaften, um das visuelle Gewicht/den Emphasis von Text zu ändern:

- {{cssxref("font-style")}}: Verwendet, um kursive Schrift ein- oder auszuschalten. Die möglichen Werte sind wie folgt (Sie werden dies selten verwenden, es sei denn, Sie möchten aus irgendeinem Grund einige Kursivformate deaktivieren):

  - `normal`: Setzt den Text auf die normale Schrift (schaltet bestehende Kursivschrift aus).
  - `italic`: Setzt den Text auf die kursiven Version der Schrift, falls verfügbar; anderenfalls wird es die kursive Schrift mit Oblique simulieren.
  - `oblique`: Setzt den Text auf eine simulierte Version einer kursiven Schrift, die durch Neigung der normalen Version erzeugt wird.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Diese Eigenschaft hat viele verfügbare Werte, falls Sie viele Schriftvarianten zur Verfügung haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_, etc.), aber realistischerweise werden Sie selten andere als `normal` und `bold` verwenden:

  - `normal`, `bold`: Normale und fette Schriftstärke.
  - `lighter`, `bolder`: Setzt die Fettdruckstärke des aktuellen Elements auf einen Schritt leichter oder schwerer als die seines übergeordneten Elements.
  - `100` – `900`: Numerische Fettlehnenwerte, die eine detailliertere Kontrolle als die obigen Schlüsselwörter bieten, falls erforderlich.

- {{cssxref("text-transform")}}: Erlaubt Ihnen, Ihre Schrift zu transformieren. Die Werte beinhalten:

  - `none`: Verhindert jegliche Transformation.
  - `uppercase`: Wandelt alle Texte in Großbuchstaben um.
  - `lowercase`: Wandelt alle Texte in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter um, sodass der erste Buchstabe groß geschrieben wird.
  - `full-width`: Konvertiert alle Zeichen, sodass sie in einem feste Breite Kästchen geschrieben werden, ähnlich einer Monospace-Schriftart, sodass eine Ausrichtung von z.B. lateinischen Zeichen zusammen mit asiatischen Sprachelementen (wie Chinesisch, Japanisch, Koreanisch) möglich ist.

- {{cssxref("text-decoration")}}: Setzt/entfernt Textdekorationen bei Schriften (Sie werden dies hauptsächlich verwenden, um das standardmäßige Unterstreichen bei Links beim Gestalten zu deaktivieren). Verfügbare Werte sind:

  - `none`: Hebt alle bereits vorhandenen Textdekorationen auf.
  - `underline`: Unterstreicht den Text.
  - `overline`: Fügt eine Überstreichung über dem Text hinzu.
  - `line-through`: Fügt eine Durchstreichung über dem Text hinzu.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig annehmen kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, z.B. `text-decoration: underline overline`. Beachten Sie auch, dass {{cssxref("text-decoration")}} ein Kurzschreibereigenschaft für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erstellen, z.B.: `text-decoration: line-through red wavy`.

Schauen wir uns an, wie wir einige dieser Eigenschaften in unserem Beispiel hinzufügen können:

Unser neues Ergebnis sieht so aus:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  hatte viele Geschichten zu erzählen. Aber es war eine seltene Gelegenheit wie diese, dass er es tat.
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

Sie können Ihren Texten Schlagschatten hinzufügen, indem Sie die {{cssxref("text-shadow")}}-Eigenschaft verwenden. Diese akzeptiert bis zu vier Werte, wie im Beispiel unten gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind wie folgt:

1. Der horizontale Versatz des Schattens vom Originaltext — dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) aufnehmen, aber am häufigsten verwenden Sie `px`; positive Werte bewegen den Schatten nach rechts, negative nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Versatz des Schattens vom Originaltext. Dies verhält sich ähnlich wie der horizontale Versatz, außer dass es den Schatten nach oben/unten statt nach links/rechts bewegt. Dieser Wert muss enthalten sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter verteilt wird. Wenn dieser Wert nicht enthalten ist, beträgt er standardmäßig 0, was bedeutet, dass keine Unschärfe besteht. Dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) aufnehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbeinheit](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) aufnehmen kann. Wenn nicht enthalten, wird es auf [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) zurückgesetzt, d.h. die Schattenfarbe wird aus der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrere Schatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere Schattenwerte durch Kommas getrennt angeben, zum Beispiel:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "h1")}}-Element in unserem Tommy The Cat-Beispiel anwenden würden, hätten wir folgendes Ergebnis:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  hatte viele Geschichten zu erzählen. Aber es war eine seltene Gelegenheit wie diese, dass er es tat.
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

Nachdem wir die grundlegenden Schrifteigenschaften behandelt haben, lassen Sie uns die Eigenschaften betrachten, die wir verwenden können, um das Textlayout zu beeinflussen.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie Text innerhalb seines enthaltenen Inhaltsbereichs ausgerichtet wird. Die verfügbaren Werte sind unten aufgeführt. Sie funktionieren ähnlich wie in einer regulären Textverarbeitungsanwendung:

- `left`: Linksbündige Ausrichtung des Textes.
- `right`: Rechtsbündige Ausrichtung des Textes.
- `center`: Zentriert den Text.
- `justify`: Verteilt den Text, indem die Lücken zwischen den Wörtern variiert werden, sodass alle Textlinien die gleiche Breite haben. Sie müssen dies sorgfältig verwenden — es kann schrecklich aussehen, insbesondere wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden möchten, sollten Sie auch über die Verwendung von etwas anderem nachdenken, wie z.B. {{cssxref("hyphens")}}, um einige der längeren Wörter über mehrere Zeilen hinweg zu trennen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "h1")}} in unserem Beispiel anwenden, hätten wir folgendes Ergebnis:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  hatte viele Geschichten zu erzählen. Aber es war eine seltene Gelegenheit wie diese, dass er es tat.
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

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) annehmen, sondern auch einen einheitenlosen Wert, der als Multiplikator fungiert und allgemein als die beste Option angesehen werden. Mit einem einheitenlosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtext sieht in der Regel schöner aus und ist leichter zu lesen, wenn die Zeilen getrennt sind. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelter Abstand). Um unsere Textzeilen auf 1,6 Mal die Höhe der Schrift einzustellen, würden wir verwenden:

```css
p {
  line-height: 1.6;
}
```

Wenn wir das auf die {{htmlelement("p")}}-Elemente in unserem Beispiel anwenden, würden wir folgendes Ergebnis erhalten:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  hatte viele Geschichten zu erzählen. Aber es war eine seltene Gelegenheit wie diese, dass er es tat.
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

Die {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}}-Eigenschaften ermöglichen Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden diese Eigenschaften nicht häufig verwenden, könnten aber einen Nutzen darin sehen, um ein bestimmtes Aussehen zu erzielen oder die Lesbarkeit einer besonders dichten Schrift zu verbessern. Sie können die meisten [Längeneinheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) aufnehmen.

Um dies zu veranschaulichen, könnten wir einige Buchstaben- und Wortabstände auf die erste Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel anwenden:

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
  hatte viele Geschichten zu erzählen. Aber es war eine seltene Gelegenheit wie diese, dass er es tat.
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

### Andere wichtige Eigenschaften

Die oben genannten Eigenschaften geben Ihnen eine Vorstellung davon, wie Sie mit dem Styling von Text auf einer Webseite beginnen können, aber es gibt viele weitere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Wenn Sie sich an die Verwendung der obigen gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Zwischen kleinen und normalen Großbuchstaben umschalten.
- {{cssxref("font-kerning")}}: Optionen für Schriftlaufweite ein- und ausschalten.
- {{cssxref("font-feature-settings")}}: Verschiedene [OpenType](https://en.wikipedia.org/wiki/OpenType)-Schriftmerkmale ein- und ausschalten.
- {{cssxref("font-variant-alternates")}}: Verwendung alternativer Glyphen für einen gegebenen Schriftsatz steuern.
- {{cssxref("font-variant-caps")}}: Verwendung alternativer Großbuchstabenglyphen steuern.
- {{cssxref("font-variant-east-asian")}}: Verwendung alternativer Glyphen für ostasiatische Schriften wie Japanisch und Chinesisch steuern.
- {{cssxref("font-variant-ligatures")}}: Steuern, welche Ligaturen und kontextuelle Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Verwendung alternativer Glyphen für Zahlen, Brüche und Ordnungszeichen steuern.
- {{cssxref("font-variant-position")}}: Verwendung alternativer Glyphen kleinerer Größen als Hoch- oder Tiefgestellt steuern.
- {{cssxref("font-size-adjust")}}: Visuelle Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße anpassen.
- {{cssxref("font-stretch")}}: Zwischen möglichen alternativen gestreckten Versionen eines gegebenen Schrifts wechseln.
- {{cssxref("text-underline-position")}}: Position von Unterstreichungen festlegen, die mit dem `text-decoration-line`-Eigenschaftswert `underline` gesetzt werden.
- {{cssxref("text-rendering")}}: Versuchen, einige Textrendering-Optimierungen durchzuführen.

Textlayoutstile:

- {{cssxref("text-indent")}}: Angeben, wie viel horizontaler Raum vor dem Anfang der ersten Zeile des Textinhalts gelassen werden soll.
- {{cssxref("text-overflow")}}: Definieren, wie überflüssiger Inhalt, der nicht angezeigt wird, den Benutzern signalisiert wird.
- {{cssxref("white-space")}}: Festlegen, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements behandelt werden.
- {{cssxref("word-break")}}: Festlegen, ob Zeilen innerhalb von Wörtern umbrochen werden.
- {{cssxref("direction")}}: Textausrichtung definieren. (Dies hängt von der Sprache ab und es ist meistens besser, HTML diese Aufgabe übernehmen zu lassen, da sie an den Textinhalt gebunden ist.)
- {{cssxref("hyphens")}}: Silbentrennung für unterstützte Sprachen ein- und ausschalten.
- {{cssxref("line-break")}}: Zeilenumbruch für asiatische Sprachen entspannen oder verschärfen.
- {{cssxref("text-align-last")}}: Festlegen, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.
- {{cssxref("text-orientation")}}: Ausrichtung des Textes in einer Zeile definieren.
- {{cssxref("overflow-wrap")}}: Festlegen, ob der Browser Zeilen innerhalb von Wörtern brechen darf, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Festlegen, ob Textzeilen horizontal oder vertikal angeordnet und in welche Richtung die nachfolgenden Zeilen fließen.

## Schrift-Kurzschrift

Viele Schriftspezifikationen können auch durch die Kurzschreibereigenschaft {{cssxref("font")}} festgelegt werden. Diese werden in der folgenden Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn Sie die `font`-Kurzschreibereigenschaft verwenden.

Ein Schrägstrich muss zwischen den {{cssxref("font-size")}} und {{cssxref("line-height")}} Eigenschafteigenschaften gesetzt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aktives Lernen: Spielen mit Stilgestaltung von Text

In dieser aktiven Lerneinheit haben wir keine spezifischen Übungen für Sie. Wir möchten nur, dass Sie einige Schrift- und Textlayout-Eigenschaften gut ausprobieren. Sehen Sie selbst, was Sie machen können! Sie können dies entweder mit Offline-HTML/CSS-Dateien tun, oder indem Sie Ihren Code in das untenstehende Live-Editable-Beispiel eingeben.

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

Wir hoffen, dass Sie das Experimentieren mit Text in diesem Artikel genossen haben! Der nächste Artikel wird Ihnen alles bieten, was Sie über das [Stylen von HTML-Listen](/de/docs/Learn/CSS/Styling_text/Styling_lists) wissen müssen.

{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}
