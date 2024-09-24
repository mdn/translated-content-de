---
title: CSS-Grundlagen
slug: Learn/Getting_started_with_the_web/CSS_basics
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte formatiert. _CSS-Grundlagen_ behandelt, was Sie benötigen, um loszulegen. Wir beantworten Fragen wie: Wie mache ich Text rot? Wie lasse ich Inhalte an einer bestimmten Stelle im (Webseiten-)Layout anzeigen? Wie schmücke ich meine Webseite mit Hintergrundbildern und -farben?

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS wird verwendet, um HTML-Elemente gezielt zu gestalten. Zum Beispiel wählt dieses CSS den Absatztext aus und setzt die Farbe auf rot:

```css
p {
  color: red;
}
```

Lassen Sie es uns ausprobieren! Verwenden Sie einen Texteditor, fügen Sie die drei Zeilen CSS (oben) in eine neue Datei ein. Speichern Sie die Datei als `style.css` in einem Verzeichnis namens `styles`.

Um den Code funktionsfähig zu machen, müssen wir dieses CSS (oben) noch auf Ihr HTML-Dokument anwenden. Andernfalls ändert sich die Darstellung des HTML nicht. (Wenn Sie unserem Projekt bisher nicht gefolgt sind, pausieren Sie hier, um [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) und [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics) zu lesen.)

1. Öffnen Sie Ihre `index.html`-Datei. Fügen Sie die folgende Zeile im Head ein (zwischen dem {{HTMLElement("head")}}- und `</head>`-Tag):

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten so etwas sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde durch unser CSS rot gestaltet.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

### Anatomie eines CSS-Regelsatzes

Lassen Sie uns den CSS-Code für roten Absatztext analysieren, um zu verstehen, wie er funktioniert:

![CSS p Deklaration Farbe rot](css-declaration-small.png)

Die gesamte Struktur wird als **Regelsatz** bezeichnet. (Der Begriff _Regelsatz_ wird oft einfach als _Regel_ bezeichnet.) Beachten Sie die Namen der einzelnen Teile:

- Selektor
  - : Dies ist der HTML-Elementname am Anfang des Regelsatzes. Er definiert das/die zu formatierende(n) Element(e) (in diesem Beispiel {{HTMLElement("p")}}-Elemente). Um ein anderes Element zu formatieren, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Sie gibt an, welche **Eigenschaften** des Elements Sie gestalten möchten.
- Eigenschaften
  - : Dies sind Möglichkeiten, ein HTML-Element zu gestalten. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}}-Elemente.) In CSS wählen Sie aus, welche Eigenschaften Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft—nach dem Doppelpunkt—befindet sich der **Eigenschaftswert**. Dieser wählt eine von vielen möglichen Darstellungen für eine gegebene Eigenschaft aus. (Zum Beispiel gibt es viele `color`-Werte zusätzlich zu `red`.)

Beachten Sie die anderen wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jeder Regelsatz in geschweifte Klammern eingeschlossen werden. (`{}`)
- Innerhalb jeder Deklaration muss ein Doppelpunkt (`:`) verwendet werden, um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- Innerhalb jedes Regelsatzes muss ein Semikolon (`;`) verwendet werden, um jede Deklaration von der nächsten zu trennen.

Um mehrere Eigenschaftswerte in einem Regelsatz zu ändern, schreiben Sie sie getrennt durch Semikolons, so:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Mehrere Elemente auswählen

Sie können auch mehrere Elemente auswählen und einen einzigen Regelsatz auf alle anwenden. Trennen Sie mehrere Selektoren durch Kommata. Zum Beispiel:

```css
p,
li,
h1 {
  color: red;
}
```

### Verschiedene Arten von Selektoren

Es gibt viele verschiedene Arten von Selektoren. Die oben genannten Beispiele verwenden **Elementselektoren**, die alle Elemente eines bestimmten Typs auswählen. Aber wir können auch spezifischere Auswahlen treffen. Hier sind einige der häufigeren Arten von Selektoren:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Selektorname</th>
      <th scope="col">Was wird ausgewählt</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Elementselektor (manchmal auch als Tag- oder Typselektor bezeichnet)</td>
      <td>Alle HTML-Elemente des angegebenen Typs.</td>
      <td><code>p</code><br />wählt <code>&#x3C;p></code></td>
    </tr>
    <tr>
      <td>ID-Selektor</td>
      <td>
        Das Element auf der Seite mit der angegebenen ID. Auf einer bestimmten HTML-Seite sollte jeder id-Wert einzigartig sein.
      </td>
      <td>
        <code>#my-id</code><br />wählt <code>&#x3C;p id="my-id"></code> oder
        <code>&#x3C;a id="my-id"></code>
      </td>
    </tr>
    <tr>
      <td>Klassenselektor</td>
      <td>
        Das/die Element(e) auf der Seite mit der angegebenen Klasse. Mehrere Vorkommen derselben Klasse können auf einer Seite erscheinen.
      </td>
      <td>
        <code>.my-class</code><br />wählt
        <code>&#x3C;p class="my-class"></code> und
        <code>&#x3C;a class="my-class"></code>
      </td>
    </tr>
    <tr>
      <td>Attributselektor</td>
      <td>Das/die Element(e) auf der Seite mit dem angegebenen Attribut.</td>
      <td>
        <code>img[src]</code><br />wählt
        <code>&#x3C;img src="myimage.png"></code> aber nicht
        <code>&#x3C;img></code>
      </td>
    </tr>
    <tr>
      <td>Pseudoklassenselektor</td>
      <td>
        Das/die angegebene(n) Element(e), aber nur im angegebenen Zustand. (Zum
        Beispiel, wenn ein Cursor über einen Link schwebt.)
      </td>
      <td>
        <code>a:hover</code><br />wählt <code>&#x3C;a></code>, aber nur, wenn
        der Mauszeiger über dem Link schwebt.
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele weitere Selektoren zu entdecken. Um mehr zu erfahren, sehen Sie sich den MDN [Selectors guide](/de/docs/Learn/CSS/Building_blocks/Selectors) an.

## Schriften und Text

Nachdem wir einige CSS-Grundlagen erkundet haben, verbessern wir nun das Erscheinungsbild des Beispiels, indem wir mehr Regeln und Informationen in die Datei `style.css` hinzufügen.

1. Finden Sie zunächst die [Ausgabe von Google Fonts](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font), die Sie zuvor aus [Wie wird Ihre Website aussehen?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) gespeichert haben. Fügen Sie das {{htmlelement("link")}}-Element irgendwo im Head Ihrer `index.html`-Datei ein (irgendwo zwischen dem {{HTMLElement("head")}}- und dem `</head>`-Tag). Es sieht ungefähr so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das die Schriftfamilie Open Sans mit Ihrer Webseite lädt.

2. Löschen Sie als Nächstes die vorhandene Regel, die Sie in Ihrer `style.css`-Datei haben. Es war ein guter Test, aber lassen Sie uns nicht mit viel rotem Text weitermachen.
3. Fügen Sie die folgenden Zeilen (unten gezeigt) hinzu, ersetzen Sie die `font-family`-Zuordnung mit Ihrer `font-family`-Auswahl aus [Wie wird Ihre Website aussehen?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font). Die Eigenschaft `font-family` bezieht sich auf die Schrift(en), die Sie für den Text verwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die gesamte Seite. Da {{HTMLElement("html")}} das Elternelement der gesamten Seite ist, erben alle darin enthaltenen Elemente die gleiche `font-size` und `font-family`.

   ```css
   html {
     font-size: 10px; /* px bedeutet "Pixel": Die Basisschriftgröße beträgt jetzt 10 Pixel */
     font-family: "Open Sans", sans-serif; /* dies sollte der Rest der Ausgabe sein, die Sie von Google Fonts erhalten haben */
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare während des Renderns des Codes. CSS-Kommentare sind eine Möglichkeit, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

4. Lassen Sie uns nun Schriftgrößen für Elemente festlegen, die Text im HTML-Körper enthalten werden ({{htmlelement("Heading_Elements", "&lt;h1&gt;")}}, {{htmlelement("li")}}, und {{htmlelement("p")}}). Wir zentrieren auch die Überschrift. Schließlich erweitern wir den zweiten Regelsatz (unten) mit Einstellungen für Zeilenhöhe und Buchstabenabstand, um den Fließtext besser lesbar zu machen.

   ```css
   h1 {
     font-size: 60px;
     text-align: center;
   }

   p,
   li {
     font-size: 16px;
     line-height: 2;
     letter-spacing: 1px;
   }
   ```

Passen Sie die `px`-Werte nach Belieben an. Ihr Arbeitsstand sollte in etwa so aussehen:

![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schrift wurde eingestellt, die Schriftgrößen, Zeilenhöhe und Buchstabenabstand sind angepasst und die Hauptseitenüberschrift wurde zentriert.](website-screenshot-font-small.png)

## CSS: alles über Kästen

Etwas, das Ihnen beim Schreiben von CSS auffallen wird: Vieles davon dreht sich um Kästen. Dazu gehört das Festlegen von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als Kästen betrachtet werden, die auf anderen Kästen sitzen.

![Ein großer Stapel Kisten oder Kisten, die aufeinander gestapelt sind](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

CSS-Layout basiert hauptsächlich auf dem _Box-Modell._ Jeder Kasten, der auf Ihrer Seite Platz einnimmt, hat Eigenschaften wie:

- `padding`, der Raum um den Inhalt herum. Im Beispiel unten ist es der Raum um den Absatztext.
- `border`, die durchgehende Linie, die sich direkt außerhalb des Abstands befindet.
- `margin`, der Raum um die Außenseite der Umrandung.

![Drei Kästen, die ineinander liegen. Von außen nach innen sind sie als Abstand, Rahmen und Innenabstand beschriftet.](box-model.png)

In diesem Abschnitt verwenden wir auch:

- `width` (eines Elements).
- `background-color`, die Farbe hinter dem Inhalt und dem Innenabstand eines Elements.
- `color`, die Farbe des Inhalts eines Elements (normalerweise Text).
- `text-shadow` setzt einen Schlagschatten auf den Text innerhalb eines Elements.
- `display` setzt den Anzeigemodus eines Elements. (Lesen Sie weiter, um mehr zu erfahren)

Um fortzufahren, lassen Sie uns mehr CSS hinzufügen. Fügen Sie diese neuen Regeln unten in `style.css` hinzu. Experimentieren Sie mit dem Ändern von Werten, um zu sehen, was passiert.

### Ändern der Seitenfarbe

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode in die [Farbe, die Sie in Wie wird meine Website aussehen?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#theme_color) gewählt haben.

### Stylen des Körpers

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Es gibt mehrere Deklarationen für das {{htmlelement("body")}}-Element. Lassen Sie uns diese Zeile für Zeile durchgehen:

- `width: 600px;` Dies zwingt den Body, immer 600 Pixel breit zu sein.
- `margin: 0 auto;` Wenn Sie zwei Werte für eine Eigenschaft wie `margin` oder `padding` festlegen, beeinflusst der erste Wert die top _und_ bottom Seite des Elements (in diesem Fall wird es auf `0` festgelegt); der zweite Wert beeinflusst die linke _und_ rechte Seite. (Hier ist `auto` ein spezieller Wert, der den verfügbaren horizontalen Platz gleichmäßig zwischen links und rechts aufteilt). Sie können auch einen, zwei, drei oder vier Werte verwenden, wie in der [Margin Syntax](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Dies setzt die Hintergrundfarbe des Elements. In diesem Projekt wird ein rötliches Orange für die Hintergrundfarbe des Körpers verwendet, im Gegensatz zu dunklem Blau für das {{htmlelement("html")}}-Element. (Fühlen Sie sich frei zu experimentieren.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für den Innenabstand. Das Ziel ist, etwas Raum um den Inhalt zu schaffen. In diesem Beispiel gibt es keinen Innenabstand oben am Body und 20 Pixel rechts, unten und links. Die Werte legen in dieser Reihenfolge top, right, bottom, left fest. Wie bei `margin`, können Sie einen, zwei, drei oder vier Werte verwenden, wie in der [Padding Syntax](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt Werte für die Breite, den Stil und die Farbe der Umrandung. In diesem Fall ist es eine fünf Pixel breite, durchgehende schwarze Umrandung, auf allen Seiten des Körpers.

### Positionierung und Gestaltung des Hauptseitentitels

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Sie haben vielleicht bemerkt, dass es eine hässliche Lücke am oberen Rand des Körpers gibt. Das passiert, weil Browser standardmäßiges Styling auf das {{htmlelement("Heading_Elements", "h1")}}-Element (unter anderem) anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht ist, grundlegende Lesbarkeit für ungestylte Seiten bereitzustellen. Um die Lücke zu beseitigen, überschreiben wir das standardmäßige Styling des Browsers mit der Einstellung `margin: 0;`.

Als Nächstes setzen wir den oberen und unteren Innenabstand der Überschrift auf 20 Pixel.

Danach setzen wir den Überschriftentext auf dieselbe Farbe wie die HTML-Hintergrundfarbe.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an. Seine vier Werte sind:

- Der erste Pixelwert legt den **horizontalen Versatz** des Schattens vom Text fest: wie weit er sich bewegt.
- Der zweite Pixelwert legt den **vertikalen Versatz** des Schattens vom Text fest: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert legt den **Unschärferadius** des Schattens fest. Ein größerer Wert erzeugt einen verschwommeneren Schatten.
- Der vierte Wert setzt die Basisfarbe des Schattens.

Versuchen Sie, mit verschiedenen Werten zu experimentieren, um zu sehen, wie sich dies auf das Erscheinungsbild auswirkt.

### Zentrieren des Bildes

```css
img {
  display: block;
  margin: 0 auto;
}
```

Als nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir könnten den `margin: 0 auto`-Trick wieder verwenden, wie wir es für den Body getan haben. Aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, damit das CSS funktioniert.

Das {{htmlelement("body")}} ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt. Der Rand, der auf ein Block-Element angewendet wird, wird von anderen Elementen auf der Seite respektiert. Im Gegensatz dazu sind Bilder **Inline**-Elemente; damit der automatische Randtrick bei diesem Bild funktioniert, müssen wir ihm blockartige Eigenschaften mit `display: block;` geben.

> [!NOTE]
> Die obigen Anweisungen gehen davon aus, dass Sie ein Bild verwenden, das kleiner als die Breite ist, die auf den Body gesetzt wurde. (600 Pixel) Wenn Ihr Bild größer ist, überläuft es den Body und erstreckt sich auf den Rest der Seite. Um dies zu beheben, können Sie entweder: 1) die Bildbreite mit einem [Grafikeditor](https://en.wikipedia.org/wiki/Raster_graphics_editor) verkleinern oder 2) das Bild mit CSS dimensionieren, indem Sie die {{cssxref("width")}}-Eigenschaft auf dem `<img>`-Element mit einem kleineren Wert setzen.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie `display: block;` oder die Unterschiede zwischen einem Block-Element und einem Inline-Element nicht vollständig verstehen. Es wird mehr Sinn ergeben, während Sie mit dem Studium von CSS fortfahren. Weitere Informationen zu verschiedenen Anzeigewerten finden Sie auf der MDN [display reference page](/de/docs/Web/CSS/display).

## Fazit

Wenn Sie alle Anleitungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die ähnlich aussieht wie diese:

![Ein Mozilla-Logo, zentriert, und eine Überschrift sowie Absätze. Es sieht jetzt schön gestylt aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhalt.](website-screenshot-final.png)

(Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie stecken bleiben, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In dieser Übung haben wir nur an der Oberfläche von CSS gekratzt. Um weiter zu gehen, siehe [Lernen, HTML mit CSS zu stylen](/de/docs/Learn/CSS).

{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}
