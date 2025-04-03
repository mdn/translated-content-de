---
title: Grundlegende Text- und Schriftgestaltung
short-title: Grundlagen der Text- und Schriftgestaltung
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

In diesem Artikel beginnen wir Ihre Reise zur Beherrschung der Textgestaltung mit {{Glossary("CSS", "CSS")}}. Hier behandeln wir alle grundlegenden Aspekte der Text- und Schriftgestaltung im Detail, einschließlich Schriftgewicht, Familie und Stil, verkürzter Schrift, Textausrichtung und anderen Effekten sowie Zeilen- und Buchstabenabstand.

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
          <li>Verständnis der Konzepte von Schriftfamilien, Schriftstapeln und websicheren Schriften.</li>
          <li>Festlegen von Schriftfarbe, -gewicht, -größe und -stil.</li>
          <li>Festlegen von Textausrichtung, -transformation und -dekoration.</li>
          <li>Festlegen der Zeilenhöhe.</li>
          <li>Kenntnis darüber, dass es mehrere andere Schrift- und Textstil-Eigenschaften gibt und die Ermutigung, diese zu erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was beinhaltet die Textgestaltung in CSS?

Text innerhalb eines Elements wird innerhalb des [Inhaltskastens](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements angeordnet. Er beginnt oben links im Inhaltsbereich (oder oben rechts im Fall von RTL-Textinhalten) und fließt zum Ende der Zeile. Sobald es das Ende erreicht hat, geht es in die nächste Zeile über und fließt wieder bis zum Ende. Dieses Muster wiederholt sich, bis der gesamte Inhalt in die Box eingefügt wurde. Textinhalte verhalten sich im Wesentlichen wie eine Reihe von Inline-Elementen, die in benachbarten Linien angeordnet sind und keine Zeilenumbrüche erzeugen, bis das Ende der Zeile erreicht ist oder Sie einen Zeilenumbruch manuell mit dem {{htmlelement("br")}}-Element erzwingen.

> [!NOTE]
> Wenn der obige Absatz Sie verwirrt, dann macht das nichts — gehen Sie zurück und überprüfen Sie unseren [Boxmodell-](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) Artikel, um die Boxmodell-Theorie aufzufrischen, bevor Sie weitermachen.

Die CSS-Eigenschaften, die zur Gestaltung von Text verwendet werden, fallen in der Regel in zwei Kategorien, die wir in diesem Artikel separat betrachten werden:

- **Schriftstile**: Eigenschaften, die die Schrift eines Textes beeinflussen, z.B. welche Schrift angewendet wird, ihre Größe und ob sie fett, kursiv etc. ist.
- **Textlayoutstile**: Eigenschaften, die den Abstand und andere Layout-Merkmale des Textes beeinflussen und die Manipulation beispielsweise des Abstands zwischen Zeilen und Buchstaben sowie der Ausrichtung des Textes innerhalb des Inhaltskastens ermöglichen.

> [!NOTE]
> Bedenken Sie, dass der Text innerhalb eines Elements als eine einzige Einheit behandelt wird. Sie können keine Textabschnitte auswählen und gestalten, es sei denn, Sie umschließen sie mit einem geeigneten Element (wie einem {{htmlelement("span")}} oder {{htmlelement("strong")}}), oder verwenden Sie ein text-spezifisches Pseudoelement wie [`::first-letter`](/de/docs/Web/CSS/::first-letter) (wählt den ersten Buchstaben des Textes eines Elements aus), [`::first-line`](/de/docs/Web/CSS/::first-line) (wählt die erste Zeile des Textes eines Elements aus) oder [`::selection`](/de/docs/Web/CSS/::selection) (wählt den aktuell vom Cursor hervorgehobenen Text aus).

## Schriften

Lassen Sie uns gleich zu den Eigenschaften übergehen, die für die Gestaltung von Schriften relevant sind. In diesem Beispiel wenden wir einige CSS-Eigenschaften auf das folgende HTML-Beispiel an:

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

Die {{cssxref("color")}}-Eigenschaft setzt die Farbe des Vordergrundinhalts der ausgewählten Elemente, was normalerweise der Text ist, aber auch ein paar andere Dinge wie eine Unterstreichung oder Überstreichung umfassen kann, die auf Text mit der {{cssxref("text-decoration")}}-Eigenschaft angewendet wurde.

`color` kann jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) akzeptieren, zum Beispiel:

```css
p {
  color: red;
}
```

Dadurch werden die Absätze rot anstelle des standardmäßigen Browser-Schwarz, wie folgt:

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

Um einen anderen Font für Ihren Text festzulegen, verwenden Sie die {{cssxref("font-family")}}-Eigenschaft — dies ermöglicht es Ihnen, einen Font (oder eine Liste von Fonts) für den Browser zu spezifizieren, die auf die ausgewählten Elemente angewendet werden. Der Browser wird nur dann einen Font anwenden, wenn er auf dem Computer verfügbar ist, auf dem die Website aufgerufen wird; andernfalls wird einfach ein [Standardbrowser-Font](#standardschriften) verwendet. Ein einfaches Beispiel sieht so aus:

```css
p {
  font-family: Arial;
}
```

Dies würde bewirken, dass alle Absätze auf einer Seite die Schriftart Arial übernehmen, die auf jedem Computer zu finden ist.

#### Websichere Schriften

Apropos Verfügbarkeit von Schriften: Es gibt nur eine begrenzte Anzahl von Schriften, die im Allgemeinen auf allen Systemen verfügbar sind und daher ohne große Bedenken verwendet werden können. Diese werden als **websichere Schriften** bezeichnet.

Die Liste der tatsächlichen websicheren Schriften ändert sich mit der Weiterentwicklung der Betriebssysteme, aber es ist vernünftig, die folgenden Schriften als websicher zu betrachten, zumindest für jetzt (viele von ihnen wurden durch die Microsoft _[Core fonts for the Web](https://de.wikipedia.org/wiki/Core_fonts_for_the_Web)_ Initiative in den späten 90ern und frühen 2000ern populär).

> [!NOTE]
> Unter verschiedenen Ressourcen pflegt die Website [cssfontstack.com](https://www.cssfontstack.com/) eine Liste websicherer Schriftarten, die auf Windows- und macOS-Betriebssystemen verfügbar sind, was Ihnen bei der Entscheidung helfen kann, was Sie für Ihre Nutzung als sicher erachten.

> [!NOTE]
> Es gibt eine Möglichkeit, eine benutzerdefinierte Schriftart zusammen mit einer Webseite herunterzuladen, um Ihnen die Anpassung Ihrer Schriftartwahl in jede gewünschte Weise zu ermöglichen: **Webfonts**. Dies ist etwas komplexer und wird in einem [separaten Artikel](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) später in diesem Modul besprochen.

#### Standardschriften

CSS definiert fünf generische Namen für Schriften: `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy`. Diese sind sehr generisch und das genaue Schriftbild, das aus diesen generischen Namen verwendet wird, kann sich zwischen den Browsern und den Betriebssystemen, auf denen sie angezeigt werden, unterscheiden. Es stellt ein _Worst-Case-Szenario_ dar, bei dem der Browser sein Bestes gibt, eine Schriftart bereitzustellen, die angemessen aussieht. `serif`, `sans-serif` und `monospace` sind ziemlich vorhersehbar und sollten etwas Angemessenes liefern. Andererseits sind `cursive` und `fantasy` weniger vorhersehbar und wir empfehlen, sie sehr sorgfältig zu verwenden und beim Testen vorzugehen.

Die fünf Namen sind wie folgt definiert:

#### Schriftstapel

Aufgrund der Tatsache, dass Sie die Verfügbarkeit der Schriften, die Sie auf Ihren Webseiten verwenden möchten, nicht garantieren können (auch ein Webfont _könnte_ aus irgendeinem Grund fehlschlagen), können Sie einen **Schriftstapel** angeben, damit der Browser verschiedene Schriftarten zur Auswahl hat. Dies beinhaltet einen `font-family`-Wert, der aus mehreren Schriftarennamen besteht, die durch Kommas getrennt werden, z.B.:

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

In einem solchen Fall beginnt der Browser am Anfang der Liste und prüft, ob die Schriftart auf dem Gerät verfügbar ist. Wenn das der Fall ist, wird die Schriftart auf die ausgewählten Elemente angewendet. Ist das nicht der Fall, geht er zur nächsten Schriftart über und so weiter.

Es ist eine gute Idee, am Ende des Stapels einen geeigneten generischen Schriftartnamen anzugeben, damit der Browser zumindest etwas annähernd Geeignetes bereitstellen kann, wenn keine der angegebenen Schriftarten verfügbar ist. Um diesen Punkt zu verdeutlichen, erhalten Absätze die Standardschrift des Browsers, wenn keine andere Option verfügbar ist — was normalerweise Times New Roman ist — was für eine serifenlose Schrift nicht gut ist!

> [!NOTE]
> Obwohl Sie Schriftartnamen, die ein Leerzeichen enthalten, wie `Trebuchet MS`, ohne Anführungszeichen verwenden können, wird empfohlen, Schriftartnamen, die Leerzeichen, Ziffern oder andere Satzzeichen außer Bindestrichen enthalten, zu zitieren, um Fehler beim Escaping zu vermeiden.

> [!WARNING]
> Jeder Schriftartname, der als generischer Familienname oder CSS-erweiterbares Schlüsselwort fehlinterpretiert werden könnte, muss in Anführungszeichen gesetzt werden. Während die Font-Familiennamen als {{cssxref("custom-ident")}} oder als {{cssxref("string")}} eingeschlossen werden können, müssen Schriftfamiliennamen, die zufällig denselben Namen wie ein CSS-weites Eigenschaftswert tragen, wie `initial` oder `inherit`, oder CSS denselben Namen wie einen der generischen Schriftfamiliennamen haben, wie `sans-serif` oder `fantasy`, als zitierter String enthalten werden. Andernfalls wird der Schriftartenname als das äquivalente CSS-Schlüsselwort oder generischer Familienname interpretiert. Wenn sie als Schlüsselwörter verwendet werden, dürfen die generischen Schriftfamiliennamen — `serif`, `sans-serif`, `monospace`, `cursive` und `fantasy` — und die globalen CSS-Schlüsselwörter NICHT in Anführungszeichen gesetzt werden, da Strings nicht als CSS-Schlüsselwörter interpretiert werden.

#### Ein Beispiel für `font-family`

Lassen Sie uns unser vorheriges Beispiel erweitern, indem wir den Absätzen eine serifenlose Schriftart geben:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Dies ergibt das folgende Resultat:

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

In unserem vorherigen Modul [CSS-Werte und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben wir Längen- und Größeneinheiten überprüft. Die Schriftgröße (die mit der {{cssxref("font-size")}}-Eigenschaft festgelegt wird) kann Werte enthalten, die in den meisten dieser Einheiten (und anderen, wie [Prozentangaben](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)) gemessen werden; jedoch sind die gebräuchlichsten Einheiten, die Sie verwenden werden, um Text zu bemessen:

- `px` (Pixel): Die Anzahl der Pixel, hoch die Sie den Text haben möchten. Dies ist eine absolute Einheit — es ergibt den gleichen endgültigen berechneten Wert für die Schrift auf der Seite in fast jeder Situation.
- `em`s: 1 `em` entspricht der Schriftgröße, die auf das Elternelement des aktuellen Elements, das wir gestalten, festgelegt ist (genauer gesagt, die Breite eines großen Buchstaben M, der sich im Elternelement befindet). Das kann schwierig zu berechnen sein, wenn Sie viele verschachtelte Elemente mit unterschiedlichen Schriftgrößen eingestellt haben, aber es ist machbar, wie Sie im Folgenden sehen werden. Warum sich die Mühe machen? Es wirkt ganz natürlich, sobald man sich daran gewöhnt hat, und man kann `em` verwenden, um alles zu skalieren, nicht nur Text. Sie können eine gesamte Website mit `em` skalieren, was die Wartung erleichtert.
- `rem`s: Diese funktionieren genauso wie `em`, abgesehen davon, dass 1 `rem` der auf das Root-Element des Dokuments festgelegten Schriftgröße entspricht (d.h. {{htmlelement("html")}}), nicht dem Elternelement. Dies erleichtert das Berechnen Ihrer Schriftgrößen erheblich.

Die `font-size` eines Elements wird von dessen Elternelement geerbt. Dies beginnt alles mit dem Root-Element des gesamten Dokuments — {{htmlelement("html")}} — dessen Standard-`font-size` auf `16px` über Browser hinweg festgelegt ist. Jeder Absatz (oder ein anderes Element, das keine andere Größe vom Browser festgelegt hat) innerhalb des Root-Elements wird eine endgültige Größe von `16px` haben. Andere Elemente können unterschiedliche Standardgrößen haben. Zum Beispiel hat ein {{htmlelement("Heading_Elements", "h1")}} standardmäßig eine Größe von `2em`, wodurch es eine endgültige Größe von `32px` hat.

Die Sache wird komplizierter, wenn Sie die Schriftgröße von verschachtelten Elementen ändern. Wenn Sie beispielsweise ein {{htmlelement("article")}}-Element auf Ihrer Seite haben und die `font-size` auf 1,5 `em` (was eine finale Größe von 24px ergibt) setzen und dann möchten, dass die Absätze innerhalb der `<article>`-Elemente eine berechnete Schriftgröße von 20px haben, welchen `em`-Wert würden Sie verwenden?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

Sie müssten seinen `em`-Wert auf 20/24 oder 0,8333333 `em` setzen. Die Mathematik kann kompliziert sein, deshalb müssen Sie vorsichtig sein, wie Sie Dinge gestalten. Es ist am besten, `rem` zu verwenden, wo immer es möglich ist, um es einfach zu halten, und vermeiden Sie es, die `font-size` von Containerelementen, wo möglich, zu ändern.

### Schriftstil, Schriftgewicht, Texttransformation und Textdekoration

CSS bietet vier gängige Eigenschaften, um das visuelle Gewicht/die Betonung von Text zu ändern:

- {{cssxref("font-style")}}: Wird verwendet, um kursive Schrift ein- oder auszuschalten. Mögliche Werte sind folgende (diese verwenden Sie selten, es sei denn, Sie möchten aus irgendeinem Grund eine kursiv gesetzte Gestaltung ausschalten):

  - `normal`: Setzt den Text auf den normalen Font (deaktiviert vorhandene Kursivschrift).
  - `italic`: Setzt den Text so, dass die kursive Version der Schrift verwendet wird, sofern verfügbar; wenn nicht, simuliert sie Kursivschrift mit Schrägschrift.
  - `oblique`: Setzt den Text so, dass eine simulierte Version einer kursiven Schrift verwendet wird, die durch Schrägstellen der normalen Version erstellt wird.

- {{cssxref("font-weight")}}: Legt fest, wie fett der Text ist. Es gibt viele verfügbare Werte, falls Sie viele Schriftvarianten verfügbar haben (wie _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ usw.), aber in der Praxis werden Sie selten einen anderen Wert als `normal` und `bold` verwenden:

  - `normal`, `bold`: Normales und fettes Schriftgewicht.
  - `lighter`, `bolder`: Legt die Fettschrift des aktuellen Elements auf eine Stufe leichter oder schwerer als die Fettschrift des Elternelements fest.
  - `100` – `900`: Numerische Fettschriftwerte, die eine feinere Steuerung als die obigen Schlüsselwortwerte bieten, falls erforderlich.

- {{cssxref("text-transform")}}: Ermöglicht die Umwandlung Ihres Fonts. Werte umfassen:

  - `none`: Verhindert jegliche Transformation.
  - `uppercase`: Wandelt den gesamten Text in Großbuchstaben um.
  - `lowercase`: Wandelt den gesamten Text in Kleinbuchstaben um.
  - `capitalize`: Wandelt alle Wörter um, sodass der erste Buchstabe großgeschrieben wird.
  - `full-width`: Wandelt alle Glyphen um, sodass sie innerhalb eines festbreitenquadrats geschrieben werden, ähnlich einer Monospace-Schrift, damit beispielsweise lateinische Zeichen zusammen mit asiatischen Sprachglyphen (wie Chinesisch, Japanisch, Koreanisch) ausgerichtet werden.

- {{cssxref("text-decoration")}}: Setzt/Entfernt Textdekorationen auf Fonts (dies verwenden Sie hauptsächlich, um die Standardunterstreichung auf Links zu entfernen, wenn Sie diese stylen). Verfügbare Werte sind:

  - `none`: Entfernt alle bereits vorhandenen Textdekorationen.
  - `underline`: Unterstreicht den Text.
  - `overline`: Verleiht dem Text eine Überstreichung.
  - `line-through`: Setzt einen Durchstrich über den Text.

  Sie sollten beachten, dass {{cssxref("text-decoration")}} mehrere Werte gleichzeitig akzeptieren kann, wenn Sie mehrere Dekorationen gleichzeitig hinzufügen möchten, z. B. `text-decoration: underline overline`. Außerdem beachten Sie bitte, dass {{cssxref("text-decoration")}} eine verkürzte Eigenschaft für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-color")}} ist. Sie können Kombinationen dieser Eigenschaftswerte verwenden, um interessante Effekte zu erzeugen, beispielsweise: `text-decoration: line-through red wavy`.

Lassen Sie uns ein paar dieser Eigenschaften zu unserem Beispiel hinzufügen:

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

### Textschatten

Sie können Schlagschatten auf Ihren Text anwenden, indem Sie die {{cssxref("text-shadow")}}-Eigenschaft verwenden. Diese nimmt bis zu vier Werte an, wie im folgenden Beispiel gezeigt:

```css
text-shadow: 4px 4px 5px red;
```

Die vier Eigenschaften sind folgende:

1. Der horizontale Abstand des Schattens vom Originaltext — dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, aber die gebräuchlichsten, die Sie verwenden werden, sind `px`; positive Werte verschieben den Schatten nach rechts und negative Werte nach links. Dieser Wert muss enthalten sein.
2. Der vertikale Abstand des Schattens vom Originaltext. Dies verhält sich ähnlich wie der horizontale Abstand, außer dass es den Schatten nach oben/unten verschiebt, nicht links/rechts. Dieser Wert muss enthalten sein.
3. Der Unschärferadius: Ein höherer Wert bedeutet, dass der Schatten weiter verbreitet wird. Wenn dieser Wert nicht enthalten ist, wird er standardmäßig auf 0 gesetzt, was keine Unschärfe bedeutet. Dies kann die meisten verfügbaren CSS-[Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.
4. Die Grundfarbe des Schattens, die jede [CSS-Farbeinheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) annehmen kann. Wenn nicht enthalten, wird sie standardmäßig auf [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) gesetzt, d.h. die Schattenfarbe wird aus der [`color`](/de/docs/Web/CSS/color)-Eigenschaft des Elements übernommen.

#### Mehrere Schatten

Sie können mehrere Schatten auf denselben Text anwenden, indem Sie mehrere Schattenwerte durch Kommas getrennt angeben, zum Beispiel:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Wenn wir dies auf das {{htmlelement("Heading_Elements", "h1")}}-Element in unserem Tommy The Cat Beispiel anwenden würden, würden wir mit diesem Ergebnis enden:

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
> Sie können interessantere Beispiele für die Verwendung von `text-shadow` im Sitepoint-Artikel [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) sehen.

## Textlayout

Mit den grundlegenden Schriftarten-Eigenschaften aus dem Weg, lassen Sie uns einen Blick auf Eigenschaften werfen, die wir verwenden können, um das Text-Layout zu beeinflussen.

### Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft wird verwendet, um zu steuern, wie der Text innerhalb ihres umgebenden Inhaltskastens ausgerichtet wird. Die verfügbaren Werte sind unten aufgeführt. Sie funktionieren in etwa genauso wie in einem regulären Textverarbeitungsprogramm:

- `left`: Linksbündige Ausrichtung des Textes.
- `right`: Rechtsbündige Ausrichtung des Textes.
- `center`: Zentrierung des Textes.
- `justify`: Lässt den Text sich ausbreiten und variirt die Lücken zwischen den Wörtern, sodass alle Textzeilen die gleiche Breite haben. Sie sollten dies mit Vorsicht verwenden — es kann schrecklich aussehen, besonders wenn es auf einen Absatz mit vielen langen Wörtern angewendet wird. Wenn Sie dies verwenden, sollten Sie auch über die Verwendung von etwas anderem zusammen mit dem, wie {{cssxref("hyphens")}}, nachdenken, um einige der längeren Wörter über Zeilen hinweg zu brechen.

Wenn wir `text-align: center;` auf das {{htmlelement("Heading_Elements", "h1")}} in unserem Beispiel anwenden würden, würden wir mit diesem Ergebnis enden:

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

Die {{cssxref("line-height")}}-Eigenschaft legt die Höhe jeder Textzeile fest. Diese Eigenschaft kann nicht nur die meisten [Längen- und Größeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen, sondern kann auch einen einheitenlosen Wert annehmen, der als Multiplikator fungiert und allgemein als beste Option angesehen wird. Mit einem einheitenlosen Wert wird die {{cssxref("font-size")}} multipliziert und ergibt die `line-height`. Fließtext sieht in der Regel schöner aus und ist einfacher zu lesen, wenn die Linien auseinanderliegen. Die empfohlene Zeilenhöhe liegt bei etwa 1,5 – 2 (doppelter Zeilenabstand). Um unsere Textzeilen auf 1,6-fache der Schrifthöhe zu setzen, würden wir verwenden:

```css
p {
  line-height: 1.6;
}
```

Wenn wir dies auf die {{htmlelement("p")}} Elemente in unserem Beispiel anwenden würden, hätten wir dieses Ergebnis:

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

Die {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}} Eigenschaften ermöglichen es Ihnen, den Abstand zwischen Buchstaben und Wörtern in Ihrem Text festzulegen. Sie werden diese nicht sehr oft verwenden, könnten jedoch für ein bestimmtes Aussehen oder zur Verbesserung der Lesbarkeit einer besonders dichten Schrift Verwendung finden. Sie können die meisten [Längeneinheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#lengths) annehmen.

Um dies zu veranschaulichen, könnten wir einigen Wort- und Buchstabenabstand zur ersten Zeile jedes {{htmlelement("p")}}-Elements in unserem HTML-Beispiel hinzufügen mit:

```css
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Dies rendert unser HTML als:

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

### Weitere beachtenswerte Eigenschaften

Die oben genannten Eigenschaften geben Ihnen einen Einblick, wie Sie anfangen können, Text auf einer Webseite zu gestalten, aber es gibt viele andere Eigenschaften, die Sie verwenden könnten. Wir wollten hier nur die wichtigsten abdecken. Sobald Sie sich an die Verwendung der oben genannten gewöhnt haben, sollten Sie auch die folgenden erkunden:

Schriftstile:

- {{cssxref("font-variant")}}: Wechselt zwischen Kleinbuchstaben und normalen Schriftalernativen.
- {{cssxref("font-kerning")}}: Schaltet Schrift-Kerning-Optionen ein und aus.
- {{cssxref("font-feature-settings")}}: Schaltet verschiedene [OpenType](https://de.wikipedia.org/wiki/OpenType) Schriftfunktionen ein und aus.
- {{cssxref("font-variant-alternates")}}: Kontrolliert die Verwendung alternativer Glyphen für einen bestimmten Schriftschnitt.
- {{cssxref("font-variant-caps")}}: Kontrolliert die Verwendung alternativer Kapital-Glyphen.
- {{cssxref("font-variant-east-asian")}}: Kontrolliert die Verwendung alternativer Glyphen für ostasiatische Schriftzeichen, wie Japanisch und Chinesisch.
- {{cssxref("font-variant-ligatures")}}: Kontrolliert, welche Ligaturen und kontextuelle Formen im Text verwendet werden.
- {{cssxref("font-variant-numeric")}}: Kontrolliert die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordnungsmarker.
- {{cssxref("font-variant-position")}}: Kontrolliert die Verwendung alternativer Glyphen kleinerer Größen, die als Hoch- oder Tiefschrift positioniert sind.
- {{cssxref("font-size-adjust")}}: Anpassung der visuellen Größe der Schrift unabhängig von ihrer tatsächlichen Schriftgröße.
- {{cssxref("font-stretch")}}: Wechsel zwischen möglichen alternativen gestreckten Versionen einer bestimmten Schriftart.
- {{cssxref("text-underline-position")}}: Gibt die Position von Unterstreichungen an, die mit der `text-decoration-line`-Eigenschaft `underline` festgelegt wurden.
- {{cssxref("text-rendering")}}: Versucht, einige Text-Rendering-Optimierungen durchzuführen.

Textlayoutstile:

- {{cssxref("text-indent")}}: Gibt an, wie viel horizontaler Platz vor dem Anfang der ersten Zeile des Textinhalts verbleiben soll.
- {{cssxref("text-overflow")}}: Definiert, wie überlaufener Inhalt, der nicht angezeigt wird, den Benutzern signalisiert wird.
- {{cssxref("white-space")}}: Definiert, wie Leerzeichen und zugehörige Zeilenumbrüche innerhalb des Elements gehandhabt werden.
- {{cssxref("word-break")}}: Gibt an, ob Zeilen innerhalb von Wörtern gebrochen werden sollen.
- {{cssxref("direction")}}: Definiert die Textrichtung. (Dies hängt von der Sprache ab und es ist in der Regel besser, HTML diesen Teil handhaben zu lassen, da es mit dem Textinhalt verbunden ist.)
- {{cssxref("hyphens")}}: Schaltet die Silbentrennung für unterstützte Sprachen ein und aus.
- {{cssxref("line-break")}}: Lockerung oder Verstärkung von Zeilenumbrüchen für asiatische Sprachen.
- {{cssxref("text-align-last")}}: Definiert, wie die letzte Zeile eines Blocks oder einer Linie, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet ist.
- {{cssxref("text-orientation")}}: Definiert die Orientierung des Textes in einer Linie.
- {{cssxref("overflow-wrap")}}: Gibt an, ob der Browser Zeilen innerhalb von Wörtern brechen darf, um Überlauf zu verhindern.
- {{cssxref("writing-mode")}}: Definiert, ob Textzeilen horizontal oder vertikal angelegt werden und in welcher Richtung sich nachfolgende Zeilen erstrecken.

## Schrift-Verkürzungen

Viele Schrift-Eigenschaften können auch über die verkürzte Eigenschaft {{cssxref("font")}} festgelegt werden. Diese werden in der folgenden Reihenfolge geschrieben: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, und {{cssxref("font-family")}}.

Unter all diesen Eigenschaften sind nur `font-size` und `font-family` erforderlich, wenn die `font`-Verkürzungseigenschaft verwendet wird.

Ein Schrägstrich muss zwischen den {{cssxref("font-size")}}- und {{cssxref("line-height")}}-Eigenschaften gesetzt werden.

Ein vollständiges Beispiel würde so aussehen:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Aktives Lernen: Spielen mit Textgestaltung

In dieser Sitzung zum aktiven Lernen haben wir keine spezifischen Übungen für Sie. Wir möchten lediglich, dass Sie einige Schrift-/Textlayout-Eigenschaften ausprobieren. Sehen Sie selbst, was Ihnen einfällt! Sie können dies entweder mit offline HTML/CSS-Dateien tun oder Ihren Code ins unten eichbare Beispiel eingeben.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Reset_-Taste zurücksetzen.

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

Wir hoffen, Sie hatten Spaß daran, in diesem Artikel mit Text zu spielen! Der nächste Artikel wird Ihnen alles Wissenswerte über das Styling von HTML-Listen vermitteln.

## Siehe auch

- [Alles über die CSS-Schriftfamilien-Eigenschaft](https://explainers.dev/font-family/), explainers.dev
- [Websichere Schriften](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
