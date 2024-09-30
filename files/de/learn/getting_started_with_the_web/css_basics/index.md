---
title: CSS-Grundlagen
slug: Learn/Getting_started_with_the_web/CSS_basics
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte gestaltet. _CSS-Grundlagen_ vermittelt, was Sie für den Einstieg benötigen. Wir beantworten Fragen wie: Wie färbe ich Text rot? Wie bringe ich Inhalte an einem bestimmten Ort im (Webseiten-)Layout zur Anzeige? Wie verziere ich meine Webseite mit Hintergrundbildern und -farben?

## Was ist CSS?

Ähnlich wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS wird verwendet, um HTML-Elemente gezielt zu gestalten. Zum Beispiel wählt dieser CSS-Code Absatztext aus und setzt die Farbe auf Rot:

```css
p {
  color: red;
}
```

Probieren wir es aus! Verwenden Sie einen Texteditor, um die drei Zeilen des CSS-Codes (oben) in eine neue Datei einzufügen. Speichern Sie die Datei als `style.css` in einem Verzeichnis namens `styles`.

Damit der Code funktioniert, müssen wir dieses CSS (oben) noch auf Ihr HTML-Dokument anwenden. Andernfalls ändert sich die Darstellung des HTML nicht. (Wenn Sie unserem Projekt bisher nicht gefolgt sind, lesen Sie [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) und [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics) an dieser Stelle.)

1. Öffnen Sie Ihre `index.html`-Datei. Fügen Sie die folgende Zeile im Kopfbereich (zwischen den {{HTMLElement("head")}} und `</head>`-Tags) ein:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas in dieser Art sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde durch unser CSS rot eingefärbt.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

### Aufbau eines CSS-Regelsets

Lassen Sie uns den CSS-Code für roten Absatztext zerlegen, um zu verstehen, wie er funktioniert:

![CSS p-Anweisung Farbe Rot](css-declaration-small.png)

Die gesamte Struktur wird als **Regelset** bezeichnet. (Der Begriff _Regelset_ wird oft einfach als _Regel_ bezeichnet.) Beachten Sie die Namen der einzelnen Teile:

- Selektor
  - : Dies ist der HTML-Elementname am Anfang des Regelsets. Es definiert das/die zu stylende(n) Element(e) (in diesem Beispiel {{HTMLElement("p")}} Elemente). Um ein anderes Element zu stylen, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Sie bestimmt, welche **Eigenschaften** des Elements Sie stylen möchten.
- Eigenschaften
  - : Dies sind die Möglichkeiten, wie Sie ein HTML-Element stylen können. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}} Elemente.) In CSS wählen Sie aus, welche Eigenschaften Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft—nach dem Doppelpunkt—steht der **Eigenschaftswert**. Er entscheidet, wie eine gegebene Eigenschaft aus den vielen möglichen Erscheinungsformen aussieht. (Zum Beispiel gibt es viele `color` Werte zusätzlich zu `red`.)

Beachten Sie die anderen wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jedes Regelset in geschweifte Klammern eingeschlossen werden. (`{}`)
- Innerhalb jeder Deklaration verwenden Sie einen Doppelpunkt (`:`), um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- Innerhalb eines Regelsets verwenden Sie ein Semikolon (`;`), um jede Deklaration von der nächsten zu trennen.

Um mehrere Eigenschaftswerte in einem Regelset zu ändern, schreiben Sie sie durch Semikolon getrennt, so:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Auswahl mehrerer Elemente

Sie können auch mehrere Elemente auswählen und ein einzelnes Regelset auf alle anwenden. Trennen Sie mehrere Selektoren durch Kommas. Zum Beispiel:

```css
p,
li,
h1 {
  color: red;
}
```

### Verschiedene Arten von Selektoren

Es gibt viele verschiedene Arten von Selektoren. Die obigen Beispiele verwenden **Elementselektoren**, die alle Elemente eines bestimmten Typs auswählen. Aber wir können auch spezifischere Selektoren machen. Hier sind einige der häufiger verwendeten Arten von Selektoren:

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
      <td>Elementselektor (manchmal Tag- oder Typselektor genannt)</td>
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
        <code>&#x3C;img src="myimage.png"></code> aber nicht
        <code>&#x3C;img></code>
      </td>
    </tr>
    <tr>
      <td>Pseudoklassenselektor</td>
      <td>
        Das/die angegebene(n) Element(e), aber nur im angegebenen Zustand. (Zum Beispiel, wenn ein Cursor über einen Link schwebt.)
      </td>
      <td>
        <code>a:hover</code><br />wählt <code>&#x3C;a></code>, aber nur, wenn der Mauszeiger über dem Link schwebt.
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele weitere Selektoren zu entdecken. Um mehr zu erfahren, lesen Sie den MDN [Selektoren-Leitfaden](/de/docs/Learn/CSS/Building_blocks/Selectors).

## Schriften und Text

Da wir jetzt einige CSS-Grundlagen erforscht haben, verbessern wir das Erscheinungsbild des Beispiels, indem wir weitere Regeln und Informationen zur `style.css`-Datei hinzufügen.

1. Finden Sie zunächst den [Ausgabe von Google Fonts](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font), den Sie zuvor aus [Wie sieht Ihre Webseite aus?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like) gespeichert haben. Fügen Sie das {{htmlelement("link")}} Element irgendwo in den Kopf Ihrer `index.html` (irgendwo zwischen den {{HTMLElement("head")}} und `</head>`-Tags) ein. Es sieht in etwa so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das die Open Sans-Schriftfamilie mit Ihrer Webseite lädt.

2. Löschen Sie als nächstes die vorhandene Regel in Ihrer `style.css`-Datei. Es war ein guter Test, aber lassen Sie uns nicht mit viel rotem Text weitermachen.
3. Fügen Sie die folgenden Zeilen (unten gezeigt) hinzu, indem Sie die `font-family`-Zuordnung durch Ihre `font-family`-Auswahl aus [Wie wird Ihre Webseite aussehen?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font) ersetzen. Die Eigenschaft `font-family` bezieht sich auf die Schriftart(en), die Sie für Text verwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die gesamte Seite. Da {{HTMLElement("html")}} das Elternelement der gesamten Seite ist, erben alle darin enthaltenen Elemente dieselbe `Schriftgröße` und `Schriftfamilie`.

   ```css
   html {
     font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
     font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare, wenn er den Code rendert. CSS-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

4. Lassen Sie uns nun die Schriftgrößen für Elemente festlegen, die Text im HTML-Body enthalten ({{htmlelement("Heading_Elements", "&lt;h1&gt;")}}, {{htmlelement("li")}}, und {{htmlelement("p")}}). Wir werden auch die Überschrift zentrieren. Schließlich erweitern wir das zweite Regelset (unten) mit Einstellungen für Zeilenhöhe und Buchstabenabstand, um den Inhaltskörper lesbarer zu machen.

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

Passen Sie die `px`-Werte nach Belieben an. Ihr Arbeitsfortschritt sollte ähnlich wie folgt aussehen:

![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schriftart wurde gesetzt, die Schriftgrößen, Zeilenhöhe und Buchstabenabstand sind angepasst, und die Hauptüberschrift der Seite wurde zentriert.](website-screenshot-font-small.png)

## CSS: alles über Kästen

Etwas, das Sie beim Schreiben von CSS bemerken werden: Vieles dreht sich um Kästen. Dies umfasst das Festlegen von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als Kästen betrachtet werden, die auf anderen Kästen sitzen.

![Ein großer Stapel von Kisten oder Kisten, die übereinander gestapelt sind](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

Das CSS-Layout basiert hauptsächlich auf dem _Box-Modell._ Jede Box, die auf Ihrer Seite Platz einnimmt, hat Eigenschaften wie:

- `padding`, der Raum um den Inhalt. Im Beispiel unten ist es der Raum um den Absatztext.
- `border`, die feste Linie, die sich direkt außerhalb des Abstands befindet.
- `margin`, der Raum um die Außenseite der Umrandung.

![Drei Kästen, die ineinander sitzen. Von außen nach innen sind sie mit margin, border und padding beschriftet](box-model.png)

In diesem Abschnitt verwenden wir auch:

- `width` (eines Elements).
- `background-color`, die Farbe hinter dem Inhalt und dem Abstand eines Elements.
- `color`, die Farbe des Inhalts eines Elements (meistens Text).
- `text-shadow` setzt einen Schatten auf den Text innerhalb eines Elements.
- `display` legt den Anzeigemodus eines Elements fest. (lesen Sie weiter, um mehr zu erfahren)

Um fortzufahren, fügen wir mehr CSS hinzu. Fügen Sie diese neuen Regeln immer am unteren Ende von `style.css` hinzu. Experimentieren Sie mit dem Ändern von Werten, um zu sehen, was passiert.

### Ändern der Seitenfarbe

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode in [die Farbe, die Sie in Was wird meine Webseite aussehen?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#theme_color) gewählt haben.

### Styling des Bodys

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Es gibt mehrere Deklarationen für das {{htmlelement("body")}}-Element. Lassen Sie uns diese zeilenweise durchgehen:

- `width: 600px;` Dies zwingt den Body, immer 600 Pixel breit zu sein.
- `margin: 0 auto;` Wenn Sie zwei Werte auf eine Eigenschaft wie `margin` oder `padding` setzen, beeinflusst der erste Wert die obere _und_ untere Seite des Elements (in diesem Fall auf `0` gesetzt); der zweite Wert betrifft die linke _und_ rechte Seite. ('auto' ist in diesem Fall ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts aufteilt). Sie können auch einen, zwei, drei oder vier Werte verwenden, wie in der [Margin-Syntax](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Dies setzt die Hintergrundfarbe des Elements. In diesem Projekt wird ein rötlich-orange als Hintergrundfarbe für den Body verwendet, im Gegensatz zu dunkelblau für das {{htmlelement("html")}} Element. (Fühlen Sie sich frei zu experimentieren.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für das Padding. Ziel ist es, etwas Platz um den Inhalt zu schaffen. In diesem Beispiel gibt es kein Padding oben auf dem Body und 20 Pixel auf der rechten, unteren und linken Seite. Die Werte setzen oben, rechts, unten, links, in dieser Reihenfolge. Wie bei `margin` können Sie einen, zwei, drei oder vier Werte verwenden, wie in der [Padding-Syntax](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt Werte für die Breite, den Stil und die Farbe der Umrandung. In diesem Beispiel ist es eine fünf Pixel breite, solide schwarze Umrandung auf allen Seiten des Bodys.

### Positionierung und Styling des Hauptseitentitels

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Vielleicht haben Sie bemerkt, dass es eine schreckliche Lücke oben auf dem Body gibt. Das passiert, weil Browser standardmäßig Styling für das {{htmlelement("Heading_Elements", "h1")}} Element (und andere) anwenden. Das mag wie eine schlechte Idee erscheinen, aber der Zweck besteht darin, grundlegende Lesbarkeit für ungestylte Seiten sicherzustellen. Um die Lücke zu beseitigen, überschreiben wir das Standard-Styling des Browsers mit der Einstellung `margin: 0;`.

Als nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel.

Danach setzen wir die Überschrift in derselben Farbe wie die HTML-Hintergrundfarbe.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an. Seine vier Werte sind:

- Der erste Pixelwert bestimmt den **horizontalen Versatz** des Schattens vom Text: wie weit er sich bewegt.
- Der zweite Pixelwert bestimmt den **vertikalen Versatz** des Schattens vom Text: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert bestimmt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen verschwommen aussehenden Schatten.
- Der vierte Wert bestimmt die Basisfarbe des Schattens.

Versuchen Sie, mit verschiedenen Werten zu experimentieren, um zu sehen, wie es das Aussehen ändert.

### Zentrieren des Bildes

```css
img {
  display: block;
  margin: 0 auto;
}
```

Als nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir könnten den Trick `margin: 0 auto` wieder verwenden, wie wir es für den Body getan haben. Aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, damit das CSS funktioniert.

Das {{htmlelement("body")}} ist ein **Block**-Element, was bedeutet, dass es auf der Seite Platz einnimmt. Der auf ein Blockelement angewendete Rand wird von anderen Elementen auf der Seite respektiert. Im Gegensatz dazu sind Bilder **Inline**-Elemente, damit der automatische Randtrick bei diesem Bild funktioniert, müssen wir ihm ein Blockverhalten geben, indem wir `display: block;` verwenden.

> [!NOTE]
> Die oben stehenden Anweisungen gehen davon aus, dass Sie ein Bild verwenden, das kleiner als die auf den Body gesetzte Breite ist. (600 Pixel) Wenn Ihr Bild größer ist, wird es den Body überschreiten und in den Rest der Seite überlaufen. Um dies zu beheben, können Sie entweder: 1) die Bildbreite mit einem [Grafikeditor](https://en.wikipedia.org/wiki/Raster_graphics_editor) reduzieren oder 2) CSS verwenden, um das Bild zu dimensionieren, indem Sie die {{cssxref("width")}}-Eigenschaft auf dem `<img>`-Element mit einem kleineren Wert setzen.

> [!NOTE]
> Machen Sie sich nicht zu viele Sorgen, wenn Sie `display: block;` oder die Unterschiede zwischen einem Blockelement und einem Inline-Element nicht vollständig verstehen. Es wird mehr Sinn machen, je weiter Sie Ihr Studium von CSS fortsetzen. Weitere Informationen zu verschiedenen Display-Werten finden Sie auf der MDN-Referenzseite [display](/de/docs/Web/CSS/display).

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die dieser ähnlich sieht:

![Ein Mozilla-Logo, zentriert, und eine Überschrift und Absätze. Sie sieht jetzt schön gestylt aus, mit einem blauen Hintergrund für die ganze Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltstreifen.](website-screenshot-final.png)

(Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie stecken bleiben, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In dieser Übung haben wir nur an der Oberfläche von CSS gekratzt. Um weiterzugehen, lesen Sie [Lernen, HTML mit CSS zu stylen](/de/docs/Learn/CSS).

{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}
