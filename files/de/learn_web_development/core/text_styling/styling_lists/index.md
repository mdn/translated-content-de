---
title: Styling von Listen
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

[Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists) verhalten sich größtenteils wie jeder andere Text, aber es gibt einige CSS-Eigenschaften, die spezifisch für Listen sind und die Sie kennen sollten, sowie einige bewährte Praktiken, die Sie berücksichtigen sollten. Dieser Artikel erklärt alles.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Abstände zwischen Listenelementen, zum Beispiel mit Margin oder Zeilenhöhe.</li>
          <li>Verwendung von <code>list-style</code>-Eigenschaften.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listenbeispiel

Werfen wir einen Blick auf ein einfaches Listenbeispiel. In diesem Artikel betrachten wir ungeordnete, geordnete und Beschreibungslisten — alle haben Styling-Funktionen, die ähnlich sind, sowie einige, die spezifisch für sie sind.

Das HTML für unser Listenbeispiel sieht folgendermaßen aus:

```html live-sample___unstyled live-sample___initial-style live-sample___finished-style
<h2>Shopping (unordered) list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ul>
  <li>Hummus</li>
  <li>Pita</li>
  <li>Green salad</li>
  <li>Halloumi</li>
</ul>

<h2>Recipe (ordered) list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ol>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>

<h2>Ingredient description list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<dl>
  <dt>Hummus</dt>
  <dd>
    A thick dip/sauce generally made from chick peas blended with tahini, lemon
    juice, salt, garlic, and other ingredients.
  </dd>
  <dt>Pita</dt>
  <dd>A soft, slightly leavened flatbread.</dd>
  <dt>Halloumi</dt>
  <dd>
    A semi-hard, unripened, brined cheese with a higher-than-usual melting
    point, usually made from goat/sheep milk.
  </dd>
  <dt>Green salad</dt>
  <dd>That green healthy stuff that many of us just use to garnish kebabs.</dd>
</dl>
```

Ohne Styling wird es wie folgt dargestellt:

{{embedlivesample("unstyled", "100%", 400)}}

Untersuchen Sie diese Listenelemente mit Ihren [Browser-Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools); Sie werden einige Styling-Standards bemerken:

- Die {{htmlelement("ul")}} und {{htmlelement("ol")}} Elemente haben eine obere und untere {{cssxref("margin")}} von `16px` (`1em`) und ein {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Direktionalitätsattribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) für `ul` und `ol`-Elemente auf von rechts nach links (`rtl`) gesetzt ist, kommt {{cssxref("padding-right")}} zum Einsatz und sein Standardwert ist `40px` (`2.5em`).
- Die Listenelemente ({{htmlelement("li")}} Elemente) haben keine festgelegten Standards für Abstände.
- Das {{htmlelement("dl")}} Element hat eine obere und untere {{cssxref("margin")}} von `16px` (`1em`), aber kein gesetztes Padding.
- Die {{htmlelement("dd")}} Elemente haben ein {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die {{htmlelement("p")}} Elemente, die wir zur Referenz enthalten haben, haben eine obere und untere {{cssxref("margin")}} von `16px` (`1em`) — das Gleiche wie die verschiedenen Listentypen.

## Umgang mit Listenabständen

Beim Styling von Listen müssen Sie deren Stile so anpassen, dass sie den gleichen vertikalen Abstand wie die umgebenden Elemente (wie Absätze und Bilder, manchmal vertikaler Rhythmus genannt) und den gleichen horizontalen Abstand wie die anderen haben. Einige typische CSS-Styling- und Textabstände könnten wie folgt aussehen:

```css live-sample___initial-style live-sample___list-style-type live-sample___list-style-position live-sample___custom-bullets live-sample___finished-style
/* General styles */

html {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,
ol,
dl,
p {
  font-size: 1.5rem;
}

li,
p {
  line-height: 1.5;
}

/* Description list styles */

dd,
dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}
```

- Die erste Regel setzt eine seitenweite Schriftart und eine Basis-Schriftgröße von 10px. Diese werden von allem auf der Seite geerbt.
- Regeln 2 und 3 setzen relative Schriftgrößen für die Überschriften, verschiedene Listentypen (die Kinder der Listenelemente erben diese) und Absätze. Das bedeutet, dass jeder Absatz und jede Liste die gleiche Schriftgröße und denselben oberen und unteren Abstand haben, was hilft, den vertikalen Rhythmus konsistent zu halten.
- Regel 4 setzt die gleiche {{cssxref("line-height")}} auf die Absätze und Listenelemente — so haben die Absätze und jedes einzelne Listenelement denselben Abstand zwischen den Zeilen. Dies wird auch helfen, den vertikalen Rhythmus konsistent zu halten.
- Regeln 5 und 6 gelten für die Beschreibungslisten. Wir setzen die gleiche `line-height` auf die Begriffe und Beschreibungen der Beschreibungslisten, wie wir es mit den Absätzen und Listenelementen getan haben. Wieder einmal ist Konsistenz gut! Wir machen die Beschreibungsbegriffe auch fett, damit sie visuell leichter hervorstechen.

Angewendet auf unser zuvor gezeigtes HTML, rendert unser Code dann so:

{{embedlivesample("initial-style", "100%", 400)}}

## Listen-spezifische Stile

Nachdem wir nun allgemeine Abstands-Techniken für Listen betrachtet haben, lassen Sie uns einige listen-spezifische Eigenschaften erkunden. Es gibt drei Eigenschaften, die Sie anfangs kennen sollten und die auf {{htmlelement("ul")}} oder {{htmlelement("ol")}} Elemente angewendet werden können:

- {{cssxref("list-style-type")}}: Setzt den Typ der Aufzählungszeichen für die Liste, zum Beispiel quadratische oder kreisförmige Aufzählungszeichen für eine ungeordnete Liste oder Zahlen, Buchstaben oder römische Ziffern für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Legt fest, ob die Aufzählungszeichen am Anfang jedes Elements innerhalb oder außerhalb der Listen angezeigt werden.
- {{cssxref("list-style-image")}}: Ermöglicht die Verwendung eines benutzerdefinierten Bildes für das Aufzählungszeichen anstelle eines einfachen Quadrats oder Kreises.

### Aufzählungszeichenstile

Wie oben erwähnt, ermöglicht die {{cssxref("list-style-type")}} Eigenschaft die Festlegung, welchen Aufzählungstyp für die Aufzählungspunkte verwendet werden soll. In unserem Beispiel haben wir die geordnete Liste so eingestellt, dass sie Großbuchstaben als römische Ziffern verwendet mit:

```html hidden live-sample___list-style-type live-sample___list-style-position
<ol>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

```css live-sample___list-style-type
ol {
  list-style-type: upper-roman;
}
```

Dies ergibt folgendes Aussehen:

{{embedlivesample("list-style-type", "100%", 120)}}

Sie finden viele weitere Optionen auf der Referenzseite von {{cssxref("list-style-type")}}.

### Position der Aufzählungszeichen

Die {{cssxref("list-style-position")}} Eigenschaft legt fest, ob die Aufzählungszeichen innerhalb der Listenelemente oder außerhalb von ihnen vor dem Anfang jedes Elements erscheinen. Der Standardwert ist `outside`, was dazu führt, dass die Aufzählungszeichen außerhalb der Listenelemente sitzen, wie oben zu sehen.

Wenn Sie den Wert auf `inside` setzen, werden die Aufzählungszeichen innerhalb der Zeilen sitzen:

```css live-sample___list-style-position live-sample___finished-style
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

{{embedlivesample("list-style-position", "100%", 120)}}

### Verwendung eines benutzerdefinierten Aufzählungsbildes

Die {{cssxref("list-style-image")}} Eigenschaft ermöglicht Ihnen die Verwendung eines benutzerdefinierten Bildes für Ihr Aufzählungszeichen. Die Syntax sieht folgendermaßen aus:

```css
ul {
  list-style-image: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
}
```

Diese Eigenschaft ist jedoch etwas begrenzt in Bezug auf die Kontrolle der Position, Größe usw. der Aufzählungszeichen. Sie sind besser dran, die {{cssxref("background")}}-Familie der Eigenschaften zu verwenden, über die Sie in unserer vorherigen Lektion [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) gelernt haben.

In unserem fertigen Beispiel haben wir die ungeordnete Liste wie folgt gestylt:

```html hidden live-sample___custom-bullets
<ul>
  <li>Hummus</li>
  <li>Pita</li>
  <li>Green salad</li>
  <li>Halloumi</li>
</ul>
```

```css live-sample___custom-bullets live-sample___finished-style
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

Hier haben wir Folgendes gemacht:

- Das {{cssxref("padding-left")}} des {{htmlelement("ul")}} von dem Standardwert `40px` auf `20px` reduziert und dann den gleichen Betrag auf die Listenelemente gesetzt. Dies dient dazu, dass die Listenelemente insgesamt noch mit den geordneten Listenelementen und den Beschreibungslisten-Beschreibungen ausgerichtet sind, aber die Listenelemente etwas Padding haben, damit die Hintergrundbilder darin sitzen können. Wenn wir dies nicht tun würden, würden die Hintergrundbilder mit dem Listenelement-Text überlappen, was unordentlich aussehen würde.
- Das {{cssxref("list-style-type")}} auf `none` gesetzt, sodass standardmäßig kein Aufzählungszeichen erscheint. Wir werden die {{cssxref("background")}}-Eigenschaften verwenden, um die Aufzählungszeichen zu handhaben.
- Ein Aufzählungszeichen auf jedes ungeordnete Listenelement eingefügt. Die relevanten Eigenschaften sind wie folgt:
  - {{cssxref("background-image")}}: Dies referenziert den Pfad zur Bilddatei, die Sie als Aufzählungszeichen verwenden möchten.
  - {{cssxref("background-position")}}: Dies definiert, wo im Hintergrund des ausgewählten Elements das Bild erscheinen wird — in diesem Fall sagen wir `0 0`, was bedeutet, dass das Aufzählungszeichen oben links in jedem Listenelement erscheint.
  - {{cssxref("background-size")}}: Dies setzt die Größe des Hintergrundbildes. Wir möchten, dass die Aufzählungszeichen idealerweise die gleiche Größe wie die Listenelemente (oder sehr leicht kleiner oder größer) haben. Wir verwenden eine Größe von `1.6rem` (`16px`), die sehr schön mit dem `20px` Padding harmoniert, das wir zugelassen haben, damit das Aufzählungszeichen darin sitzt — 16px plus 4px Abstand zwischen dem Aufzählungszeichen und dem Listenelement-Text funktioniert gut.
  - {{cssxref("background-repeat")}}: Standardmäßig wiederholen sich Hintergrundbilder, bis sie den verfügbaren Hintergrundbereich ausfüllen. Wir möchten in jedem Fall nur eine Kopie des Bildes einfügen, daher setzen wir dies auf einen Wert von `no-repeat`.

Dies ergibt folgendes Ergebnis:

{{embedlivesample("custom-bullets", "100%", 120)}}

### list-style Kurzschreibweise

Die drei oben genannten Eigenschaften können alle mit einer einzigen Kurzform-Eigenschaft, {{cssxref("list-style")}}, gesetzt werden. Zum Beispiel kann das folgende CSS:

```css
ul {
  list-style-type: square;
  list-style-image: url("example.png");
  list-style-position: inside;
}
```

durch dieses ersetzt werden:

```css
ul {
  list-style: square url("example.png") inside;
}
```

Die Werte können in beliebiger Reihenfolge aufgelistet werden, und Sie können einen, zwei oder alle drei verwenden (die Standardwerte, die für die nicht eingeschlossenen Eigenschaften verwendet werden, sind `disc`, `none` und `outside`). Wenn sowohl ein `type` als auch ein `image` angegeben sind, wird der Typ als Fallback verwendet, falls das Bild aus irgendeinem Grund nicht geladen werden kann.

## Komplettes Beispiel

In den letzten Abschnitten haben wir Ihnen die Auswirkungen einiger isolierter Listenmerkmale gezeigt. Wenn wir sie alle auf unsere anfängliche HTML-Auflistung anwenden, ergibt sich folgendes Ergebnis:

{{embedlivesample("finished-style", "100%", 400)}}

## Steuerung der Listennummerierung

Manchmal möchten Sie vielleicht anders zählen in einer geordneten Liste — zum Beispiel bei einer anderen Zahl als 1 anfangen, rückwärts zählen oder in Schritten von mehr als 1 zählen. HTML und CSS haben einige Werkzeuge, die Ihnen hier helfen können.

### start

Das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut ermöglicht es Ihnen, die Listennummerierung bei einer anderen Zahl als 1 zu beginnen. Das folgende Beispiel:

```html live-sample___counting-control
<ol start="4">
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

Ergibt diese Ausgabe:

{{ EmbedLiveSample('counting-control', '100%', 150) }}

### reversed

Das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) Attribut lässt die Liste abwärts anstatt aufwärts zählen. Das folgende Beispiel:

```html live-sample___counting-control-reversed
<ol start="4" reversed>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

Ergibt diese Ausgabe:

{{ EmbedLiveSample('counting-control-reversed', '100%', 150) }}

> [!NOTE]
> Wenn es mehr Listenelemente in einer umgekehrten Liste gibt als den Wert des `start` Attributs, wird die Zählung bis Null und dann in negative Werte weiterlaufen.

### value

Das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut ermöglicht es Ihnen, Ihre Listenelemente auf spezifische numerische Werte festzulegen. Das folgende Beispiel:

```html counting-control-values
<ol>
  <li value="2">Toast pita, leave to cool, then slice down the edge.</li>
  <li value="4">
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li value="6">Wash and chop the salad.</li>
  <li value="8">Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

Ergibt diese Ausgabe:

{{ EmbedLiveSample('counting-control-values', '100%', 150) }}

> [!NOTE]
> Selbst wenn Sie einen nicht-numerischen {{cssxref("list-style-type")}} verwenden, müssen Sie trotzdem die entsprechenden numerischen Werte im `value` Attribut verwenden.

## Ihr Turn: Eine verschachtelte Liste stylen

Es ist Zeit für Sie, eine weitere Aufgabe zu erledigen. Dieses Mal möchten wir, dass Sie das, was Sie oben gelernt haben, anwenden und versuchen, eine verschachtelte Liste zu stylen.

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Stylen Sie die ungeordnete Liste mit quadratischen Aufzählungszeichen.
3. Geben Sie den ungeordneten Listenelementen und den geordneten Listenelementen eine `line-height` von `1.5` ihrer `font-size`.
4. Setzen Sie die geordnete Liste so, dass sie kleine alphabetische Aufzählungszeichen hat.
5. Fühlen Sie sich frei, mit dem Listenbeispiel so viel zu experimentieren, wie Sie möchten, indem Sie mit Aufzählungstypen, Abständen oder allem anderen, was Sie interessiert, experimentieren.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Beispieldarstellung ansehen.

```html live-sample___styling_lists
<ul>
  <li>First, light the candle.</li>
  <li>Next, open the box.</li>
  <li>
    Finally, place the three magic items in the box, in this exact order, to
    complete the spell:
    <ol>
      <li>The book of spells</li>
      <li>The shiny rod</li>
      <li>The goblin statue</li>
    </ol>
  </li>
</ul>
```

```css live-sample___styling_lists

```

{{ EmbedLiveSample('styling_lists', "100%", 160) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges CSS sollte ungefähr so aussehen:

```css
ul {
  list-style-type: square;
}

li {
  line-height: 1.5;
}

ol {
  list-style-type: lower-alpha;
}
```

</details>

## Zusammenfassung

Listen sind relativ einfach zu stylen, sobald Sie einige grundlegende Prinzipien und spezifische Eigenschaften kennen. Im nächsten Artikel werden wir uns mit Techniken zur Linkgestaltung befassen.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
