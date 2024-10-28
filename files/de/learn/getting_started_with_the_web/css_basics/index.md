---
title: CSS-Grundlagen
slug: Learn/Getting_started_with_the_web/CSS_basics
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte gestaltet. _CSS-Grundlagen_ führt durch die notwendigen Schritte, um loszulegen. Wir beantworten Fragen wie: Wie mache ich Text rot? Wie bringe ich Inhalte an einer bestimmten Stelle im (Webseiten-) Layout zur Anzeige? Wie dekoriere ich meine Webseite mit Hintergrundbildern und Farben?

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS wird verwendet, um HTML-Elemente gezielt zu gestalten. Zum Beispiel wählt dieser CSS-Code Text in einem Absatz aus und setzt die Farbe auf rot:

```css
p {
  color: red;
}
```

Lassen Sie es uns ausprobieren! Verwenden Sie einen Texteditor und fügen Sie die drei Zeilen CSS (oben) in eine neue Datei ein. Speichern Sie die Datei als `style.css` in einem Verzeichnis namens `styles`.

Damit der Code funktioniert, müssen wir dieses CSS (oben) auf Ihr HTML-Dokument anwenden. Andernfalls ändert sich das Aussehen Ihres HTMLs nicht. (Wenn Sie unserem Projekt nicht gefolgt sind, pausieren Sie hier und lesen Sie [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) und [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics).)

1. Öffnen Sie Ihre `index.html`-Datei. Fügen Sie die folgende Zeile im Kopfbereich (zwischen den {{HTMLElement("head")}} und `</head>`-Tags) ein:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas ähnliches sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde von unserem CSS rot gestaltet.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

### Anatomie eines CSS-Regelsatzes

Lassen Sie uns den CSS-Code für roten Absatztext zerlegen, um zu verstehen, wie er funktioniert:

![CSS p Deklaration Farbe rot](css-declaration-small.png)

Die gesamte Struktur nennt man **Regelsatz**. (Der Begriff _Regelsatz_ wird oft einfach als _Regel_ bezeichnet.) Beachten Sie die Namen der einzelnen Teile:

- Selektor
  - : Dies ist der HTML-Elementname am Anfang des Regelsatzes. Er definiert die zu gestaltenden Elemente (in diesem Beispiel {{HTMLElement("p")}}-Elemente). Um ein anderes Element zu gestalten, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Sie legt fest, welche der **Eigenschaften** des Elements Sie gestalten möchten.
- Eigenschaften
  - : Dies sind Möglichkeiten, wie Sie ein HTML-Element gestalten können. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}}-Elemente.) In CSS wählen Sie die Eigenschaften aus, die Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft – nach dem Doppelpunkt – steht der **Eigenschaftswert**. Dieser wählt eine aus vielen möglichen Erscheinungen für eine gegebene Eigenschaft. (Zum Beispiel gibt es viele `color`-Werte zusätzlich zu `red`.)

Beachten Sie die anderen wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jeder Regelsatz in geschweifte Klammern gewickelt sein. (`{}`)
- Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- Innerhalb jedes Regelsatzes müssen Sie ein Semikolon (`;`) verwenden, um jede Deklaration von der nächsten zu trennen.

Um mehrere Eigenschaftswerte in einem Regelsatz zu ändern, schreiben Sie sie durch Semikolons getrennt, so:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Mehrere Elemente auswählen

Sie können auch mehrere Elemente auswählen und einen einzelnen Regelsatz auf alle anwenden. Trennen Sie mehrere Selektoren durch Kommas. Zum Beispiel:

```css
p,
li,
h1 {
  color: red;
}
```

### Verschiedene Typen von Selektoren

Es gibt viele verschiedene Arten von Selektoren. Die obigen Beispiele verwenden **Elementselektoren**, die alle Elemente eines bestimmten Typs auswählen. Aber wir können auch genauere Auswahlen treffen. Hier sind einige der gebräuchlicheren Typen von Selektoren:

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
      <td>Elementselektor (manchmal als Tag- oder Typselektor bezeichnet)</td>
      <td>Alle HTML-Elemente des angegebenen Typs.</td>
      <td><code>p</code><br />wählt <code>&#x3C;p></code></td>
    </tr>
    <tr>
      <td>ID-Selektor</td>
      <td>
        Das Element auf der Seite mit der angegebenen ID. Auf einer bestimmten HTML-Seite sollte jeder id-Wert eindeutig sein.
      </td>
      <td>
        <code>#my-id</code><br />wählt <code>&#x3C;p id="my-id"></code> oder
        <code>&#x3C;a id="my-id"></code>
      </td>
    </tr>
    <tr>
      <td>Klassenselektor</td>
      <td>
        Das/die Element(e) auf der Seite mit der angegebenen Klasse. Mehrere Instanzen derselben Klasse können auf einer Seite erscheinen.
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
        <code>&#x3C;img src="my-image.png"></code> aber nicht
        <code>&#x3C;img></code>
      </td>
    </tr>
    <tr>
      <td>Pseudo-Klassen-Selektor</td>
      <td>
        Das/die angegebenen Element(e), jedoch nur im angegebenen Zustand. (Zum Beispiel, wenn ein Cursor über einen Link schwebt.)
      </td>
      <td>
        <code>a:hover</code><br />wählt <code>&#x3C;a></code>, aber nur, wenn der Mauszeiger über den Link schwebt.
      </td>
    </tr>
  </tbody>
</table>

Es gibt viele weitere Selektoren zu entdecken. Um mehr zu erfahren, sehen Sie sich den MDN [Selektoren-Leitfaden](/de/docs/Learn/CSS/Building_blocks/Selectors) an.

## Schriften und Text

Nachdem wir einige CSS-Grundlagen erkundet haben, verbessern wir das Erscheinungsbild des Beispiels, indem wir weitere Regeln und Informationen zur Datei `style.css` hinzufügen.

1. Suchen Sie zuerst die [Ausgabe von Google Fonts](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font), die Sie zuvor von [Wie wird Ihre Website aussehen?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) gespeichert haben. Fügen Sie das {{htmlelement("link")}}-Element irgendwo in den Kopfbereich Ihrer `index.html` (irgendwo zwischen den {{HTMLElement("head")}} und `</head>`-Tags) ein. Es sieht etwa so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das die Schriftartfamilie Open Sans mit Ihrer Webseite lädt.

2. Löschen Sie als nächstes die vorhandene Regel in Ihrer `style.css`-Datei. Es war ein guter Test, aber lass uns nicht mit viel rotem Text weitermachen.
3. Fügen Sie die folgenden Zeilen (unten gezeigt) hinzu, ersetzen Sie die `font-family`-Zuweisung durch Ihre `font-family`-Auswahl von [Wie wird Ihre Website aussehen?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font). Die Eigenschaft `font-family` bezieht sich auf die Schriftart(en), die Sie für Text verwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die gesamte Seite. Da {{HTMLElement("html")}} das Elternelement der gesamten Seite ist, erben alle darin enthaltenen Elemente dieselbe `font-size` und `font-family`.

   ```css
   html {
     font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
     font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare, während er den Code rendert. CSS-Kommentare sind eine Möglichkeit, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

4. Lassen Sie uns nun die Schriftgrößen für Elemente festlegen, die Text im HTML-Body haben werden ({{htmlelement("Heading_Elements", "&lt;h1&gt;")}}, {{htmlelement("li")}}, und {{htmlelement("p")}}). Wir zentrieren auch die Überschrift. Schließlich erweitern wir den zweiten Regelsatz (unten) mit Einstellungen für Zeilenhöhe und Buchstabenzwischenraum, um den Inhalt des Hauptteils lesbarer zu machen.

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

Passen Sie die `px`-Werte nach Ihren Wünschen an. Ihr Zwischenergebnis sollte in etwa so aussehen:

![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schrift wurde eingestellt, die Schriftgrößen, die Zeilenhöhe und der Buchstabenzwischenraum wurden angepasst, und die Hauptüberschrift der Seite wurde zentriert](website-screenshot-font-small.png)

## CSS: Alles über Boxen

Etwas, das Ihnen beim Schreiben von CSS auffallen wird: vieles davon dreht sich um Boxen. Dies umfasst die Einstellung von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als Boxen betrachtet werden, die auf anderen Boxen sitzen.

![Ein großes Stapel von Boxen oder Kisten, die aufeinander gestapelt sind](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

Das CSS-Layout basiert größtenteils auf dem _Boxmodell._ Jede Box, die auf Ihrer Seite Platz einnimmt, hat Eigenschaften wie:

- `padding`, der Raum um den Inhalt. Im folgenden Beispiel ist es der Raum um den Absatztext.
- `border`, die feste Linie, die sich direkt außerhalb des Paddings befindet.
- `margin`, der Raum außerhalb der Grenze.

![Drei Boxen sitzen ineinander. Von außen nach innen sind sie als margin, border und padding beschriftet](box-model.png)

In diesem Abschnitt verwenden wir ebenfalls:

- `width` (eines Elements).
- `background-color`, die Farbe hinter dem Inhalt und dem Padding eines Elements.
- `color`, die Farbe des Inhalts eines Elements (in der Regel Text).
- `text-shadow` setzt einen Schlagschatten auf den Text in einem Element.
- `display` setzt den Anzeigemodus eines Elements. (weiter lesen, um mehr zu erfahren)

Um fortzufahren, lassen Sie uns mehr CSS hinzufügen. Fügen Sie diese neuen Regeln immer unten in der `style.css` hinzu. Experimentieren Sie mit verschiedenen Werten, um zu sehen, was passiert.

### Die Seitenfarbe ändern

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode in die [Farbe, die Sie in Was wird meine Website aussehen?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#theme_color) gewählt haben.

### Den Body stylen

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Es gibt mehrere Deklarationen für das {{htmlelement("body")}}-Element. Lassen Sie uns diese Zeilen einzeln durchgehen:

- `width: 600px;` Dies zwingt den Body, immer 600 Pixel breit zu sein.
- `margin: 0 auto;` Wenn Sie zwei Werte auf eine Eigenschaft wie `margin` oder `padding` anwenden, beeinflusst der erste Wert die obere _und_ untere Seite des Elements (in diesem Fall auf `0` gesetzt); der zweite Wert beeinflusst die linke _und_ rechte Seite. (Hierbei ist `auto` ein Spezialwert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts aufteilt). Sie können auch einen, zwei, drei oder vier Werte verwenden, wie in [Margin-Syntax](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Dies setzt die Hintergrundfarbe des Elements. Dieses Projekt verwendet ein rötliches Orange für die Hintergrundfarbe des Bodys, im Gegensatz zu Dunkelblau für das {{htmlelement("html")}}-Element. (Fühlen Sie sich frei, zu experimentieren.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für das Padding. Das Ziel ist es, etwas Platz um den Inhalt zu schaffen. In diesem Beispiel gibt es kein Padding oben auf dem Body und 20 Pixel auf der rechten, unteren und linken Seite. Die Werte setzen oben, rechts, unten, links, in dieser Reihenfolge. Wie bei `margin` können Sie einen, zwei, drei oder vier Werte verwenden, wie in [Padding-Syntax](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt Werte für die Breite, den Stil und die Farbe der Grenze. In diesem Fall handelt es sich um eine fünf Pixel breite, durchgehende schwarze Grenze, auf allen Seiten des Bodys.

### Positionierung und Styling des Hauptseitentitels

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Vielleicht haben Sie bemerkt, dass es eine hässliche Lücke oben im Body gibt. Das passiert, weil Browsern Standardstile für das {{htmlelement("Heading_Elements", "h1")}}-Element (unter anderem) anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht ist, die Grundlesbarkeit für ungestylte Seiten zu gewährleisten. Um die Lücke zu beseitigen, überschreiben wir das Standardstyling des Browsers mit der Einstellung `margin: 0;`.

Als nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel.

Anschließend setzen wir die Textfarbe der Überschrift auf dieselbe Farbe wie die Hintergrundfarbe des HTML.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an. Seine vier Werte sind:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens vom Text: wie weit es sich bewegt.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit es nach unten bewegt wird.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen verschwommen erscheinenden Schatten.
- Der vierte Wert setzt die Basisfarbe des Schattens.

Experimentieren Sie mit verschiedenen Werten, um zu sehen, wie sie das Erscheinungsbild ändern.

### Das Bild zentrieren

```css
img {
  display: block;
  margin: 0 auto;
}
```

Als nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir könnten den `margin: 0 auto` Trick wieder verwenden, wie wir es für den Body getan haben. Aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, damit das CSS funktioniert.

Das {{htmlelement("body")}} ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt. Der auf ein Blockelement angewendete Rand wird von anderen Elementen auf der Seite respektiert. Bilder hingegen sind **Inline**-Elemente, für den automatischen Randtrick muss diesem Bild ein blockweites Verhalten mithilfe von `display: block;` gegeben werden.

> [!NOTE]
> Die obigen Anweisungen gehen davon aus, dass Sie ein Bild verwenden, das kleiner ist als die auf den Body gesetzte Breite. (600 Pixel) Wenn Ihr Bild größer ist, wird es den Body überlaufen und in den Rest der Seite hineinragen. Um dies zu beheben, können Sie entweder: 1) die Bildbreite mit einem [Grafikeditor](https://en.wikipedia.org/wiki/Raster_graphics_editor) reduzieren, oder 2) CSS verwenden, um die Bildgröße zu ändern, indem Sie die {{cssxref("width")}}-Eigenschaft am `<img>`-Element mit einem kleineren Wert setzen.

> [!NOTE]
> Seien Sie nicht zu besorgt, wenn Sie `display: block;` oder die Unterschiede zwischen einem Blockelement und einem Inline-Element noch nicht ganz verstehen. Es wird mehr Sinn machen, wenn Sie Ihr CSS-Studium fortsetzen. Weitere Informationen zu verschiedenen Anzeigewerten finden Sie auf der MDN [Anzeigereferenzseite](/de/docs/Web/CSS/display).

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die dieser hier ähnlich sieht:

![Ein Mozilla-Logo, zentriert, und ein Header und Absätze. Es sieht jetzt schön gestylt aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltstreifen.](website-screenshot-final.png)

(Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie feststecken, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In dieser Übung haben wir nur die Oberfläche von CSS angekratzt. Um weiter zu gehen, sehen Sie sich [Lernen, HTML mit CSS zu stylen](/de/docs/Learn/CSS) an.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}
