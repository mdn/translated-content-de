---
title: "CSS: Styling the content"
short-title: Styling the content
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte gestaltet. _Styling the content_ führt durch die notwendigen Schritte, um zu beginnen. Wir werden Fragen beantworten wie: Wie mache ich Text rot? Wie lasse ich Inhalte an einer bestimmten Stelle im (Webseiten-) Layout erscheinen? Wie dekoriere ich meine Webseite mit Hintergrundbildern und -farben?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Betriebssystems, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und von Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von CSS.</li>
          <li>Die grundlegenden Bestandteile der CSS-Syntax — Regelsets, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Häufige CSS-Funktionalitäten, einschließlich Box-Modell, Ändern von Farben und Schriftarten sowie Positionieren von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS wird verwendet, um HTML-Elemente gezielt zu stylen. Beispielsweise wählt dieses CSS Absatztext aus und setzt die Farbe auf rot:

```css
p {
  color: red;
}
```

Lassen Sie es uns ausprobieren!

1. Erstellen Sie in Ihrem `first-website`-Ordner einen weiteren neuen Ordner namens `styles`.
2. Verwenden Sie einen Texteditor, um die drei Zeilen CSS, die oben gezeigt werden, in eine neue Datei einzufügen.
3. Speichern Sie die Datei in Ihrem `styles`-Ordner mit dem Dateinamen `style.css`.

Damit der Code funktioniert, müssen wir dieses CSS (oben) noch auf Ihr HTML-Dokument anwenden. Andernfalls ändert sich das Aussehen des HTML nicht.

1. Öffnen Sie Ihre `index.html`-Datei. Fügen Sie die folgende Zeile in den HTML-Kopf ein (zwischen den {{HTMLElement("head")}} und `</head>` Tags):

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas Ähnliches sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde von unserem CSS rot gestaltet.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

## Anatomie eines CSS-Regelsets

Lassen Sie uns den CSS-Code für roten Absatztext zerlegen, um zu verstehen, wie er funktioniert:

![CSS p Deklaration Farbe rot](css-declaration-small.png)

Die gesamte Struktur wird als **Regelset** bezeichnet. (Der Begriff _Regelset_ wird oft einfach als _Regel_ bezeichnet.) Beachten Sie die Namen der einzelnen Teile:

- Selektor
  - : Dies ist der HTML-Elementname am Anfang des Regelsets. Es definiert, welche Elemente gestylt werden sollen (in diesem Beispiel {{HTMLElement("p")}}-Elemente). Um ein anderes Element zu stylen, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Sie gibt an, welche der Eigenschaft(en) des Elements Sie stylen möchten.
- Eigenschaften
  - : Dies sind Merkmale eines HTML-Elements, dessen Werte Sie ändern können, um es anders zu stylen. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}}-Elemente.) In CSS wählen Sie, welche Eigenschaften Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft—nach dem Doppelpunkt—befindet sich der **Eigenschaftswert**. Dies wählt ein Erscheinungsbild aus vielen möglichen für eine gegebene Eigenschaft aus. (Zum Beispiel gibt es neben `red` viele `color`-Werte.)

Beachten Sie die anderen wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jedes Regelset in geschweifte Klammern gefasst sein. (`{}`)
- Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- Innerhalb jedes Regelsets müssen Sie ein Semikolon (`;`) verwenden, um jede Deklaration von der nächsten zu trennen.

Um mehrere Eigenschaftswerte in einem Regelset zu modifizieren, schreiben Sie sie durch Semikolons getrennt, wie folgt:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Auswählen mehrerer Elemente

Sie können auch mehrere Elemente auswählen und ein einzelnes Regelset auf alle anwenden. Trennen Sie mehrere Selektoren durch Kommas. Zum Beispiel:

```css
p,
li,
h1 {
  color: red;
}
```

### Verschiedene Arten von Selektoren

Es gibt viele verschiedene Arten von Selektoren. Die obigen Beispiele verwenden **Elementselektoren**, die alle Elemente eines bestimmten Typs auswählen. Aber wir können auch spezifischere Auswahlen treffen. Hier sind einige der häufigeren Selektor-Typen:

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
      <td>Elementselektor (manchmal auch Tag- oder Typselektor genannt)</td>
      <td>Alle HTML-Elemente des angegebenen Typs.</td>
      <td><code>p</code><br />wählt <code>&#x3C;p></code></td>
    </tr>
    <tr>
      <td>ID-Selektor</td>
      <td>
        Das Element auf der Seite mit der angegebenen ID. Auf einer HTML-Seite
        sollte jede ID eindeutig sein.
      </td>
      <td>
        <code>#my-id</code><br />wählt <code>&#x3C;p id="my-id"></code> oder
        <code>&#x3C;a id="my-id"></code>
      </td>
    </tr>
    <tr>
      <td>Klassen-Selektor</td>
      <td>
        Das oder die Elemente auf der Seite mit der angegebenen Klasse. Mehrere
        Instanzen derselben Klasse können auf einer Seite erscheinen.
      </td>
      <td>
        <code>.my-class</code><br />wählt
        <code>&#x3C;p class="my-class"></code> und
        <code>&#x3C;a class="my-class"></code>
      </td>
    </tr>
    <tr>
      <td>Attributselektor</td>
      <td>Die Element(e) auf der Seite mit dem angegebenen Attribut.</td>
      <td>
        <code>img[src]</code><br />wählt
        <code>&#x3C;img src="my-image.png"></code> aber nicht
        <code>&#x3C;img></code>
      </td>
    </tr>
    <tr>
      <td>Pseudoklassen-Selektor</td>
      <td>
        Die angegebenen Elemente, jedoch nur im angegebenen Status. (Zum
        Beispiel, wenn ein Mauszeiger über einen Link fährt.)
      </td>
      <td>
        <code>a:hover</code><br />wählt <code>&#x3C;a></code>, jedoch nur, wenn
        der Mauszeiger über dem Link schwebt.
      </td>
    </tr>
  </tbody>
</table>

Es gibt viele weitere Selektoren zu entdecken. Um mehr zu lernen, sehen Sie sich unsere Selektoren-Tutorials an, beginnend mit [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

## Schriften und Text

Nachdem wir einige CSS-Grundlagen erkundet haben, lassen Sie uns das Erscheinungsbild des Beispiels verbessern, indem wir mehr Regeln und Informationen zur Datei `style.css` hinzufügen.

1. Suchen Sie zunächst den [Ausgabe von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#font), den Sie zuvor aus [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) gespeichert haben. Fügen Sie das {{htmlelement("link")}}-Element irgendwo in den Kopfbereich Ihrer `index.html` ein (egal wo zwischen den {{HTMLElement("head")}} und `</head>` Tags). Es sieht ungefähr so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das die Open Sans-Schriftfamilie mit Ihrer Webseite lädt.

2. Löschen Sie als Nächstes die vorhandene Regel in Ihrer `style.css`-Datei. Es war ein guter Test, aber lassen Sie uns nicht mit viel rotem Text weitermachen.
3. Fügen Sie die folgenden Zeilen (unten angezeigt) hinzu und ersetzen Sie die `font-family`-Zuordnung durch Ihre `font-family`-Auswahl aus [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#font). Die Eigenschaft `font-family` bezieht sich auf die Schrift(en), die Sie für Text verwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die gesamte Seite. Da {{HTMLElement("html")}} das Elternelement der gesamten Seite ist, erben alle darin enthaltenen Elemente dieselbe `Schriftgröße` und `Schriftfamilie`.

   ```css
   html {
     font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
     font-family:
       "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare, wenn er den Code rendert. CSS-Kommentare sind eine Möglichkeit, nützliche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

4. Lassen Sie uns nun die Schriftgrößen für Elemente festlegen, die Text im HTML-Körper enthalten ([[htmlelement("Heading_Elements", "&lt;h1&gt;")]], {{htmlelement("li")}}, und {{htmlelement("p")}}). Wir werden auch die Überschrift zentrieren. Schließlich erweitern wir das zweite Regelset (unten) mit Einstellungen für Zeilenhöhe und Buchstabenabstand, um den Inhalt lesbarer zu machen.

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

Passen Sie die `px`-Werte nach Belieben an. Ihr Arbeitsstand sollte ähnlich aussehen:

![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schriftart wurde festgelegt, die Schriftgrößen, Zeilenhöhe und Buchstabenabstand wurden angepasst und die Hauptüberschrift der Seite wurde zentriert.](website-screenshot-font-small.png)

## CSS: alles über Kästen

Etwas, das Sie bei zunehmendem Gebrauch von CSS bemerken werden: Vieles davon dreht sich um Kästen. Dazu gehören das Festlegen von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als Kästen betrachtet werden, die auf anderen Kästen sitzen.

![Ein großer Stapel von Kisten oder Kisten, die aufeinander gestapelt sind](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

CSS-Layout basiert hauptsächlich auf dem _Boxmodell._ Jedes Kästchen, das auf Ihrer Seite Platz einnimmt, hat Eigenschaften wie:

- `padding`, der Raum um den Inhalt. Im Beispiel unten ist es der Raum um den Absatztext.
- `border`, die feste Linie, die sich direkt außerhalb des Paddings befindet.
- `margin`, der Raum um das Äußere des Randes.

![Drei Kästen, die ineinander liegen. Von außen nach innen sind sie als margin, border und padding beschriftet](box-model.png)

In diesem Abschnitt verwenden wir außerdem:

- `width` (eines Elements).
- `background-color`, die Farbe hinter dem Inhalt und dem Padding eines Elements.
- `color`, die Farbe des Inhalts (normalerweise Text) eines Elements.
- `text-shadow` setzt einen Schlagschatten auf den Text innerhalb eines Elements.
- `display` setzt den Anzeigemodus eines Elements. (Lesen Sie weiter, um mehr zu erfahren)

Um fortzufahren, fügen Sie mehr CSS hinzu. Fügen Sie diese neuen Regeln am Ende von `style.css` hinzu. Experimentieren Sie mit dem Ändern von Werten, um zu sehen, was passiert.

### Ändern der Seitenfarbe

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode in [die Farbe, die Sie in Wie sieht meine Website aus? ausgewählt haben](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#theme_color).

### Stil des Körpers

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Der obige Code setzt neue Werte für mehrere Eigenschaften des {{htmlelement("body")}}-Elements. Lassen Sie uns diese Zeile für Zeile durchgehen:

- `width: 600px;` Dies zwingt den Körper, immer 600 Pixel breit zu sein.
- `margin: 0 auto;` Wenn Sie zwei Werte auf eine Eigenschaft wie `margin` oder `padding` setzen, wirkt sich der erste Wert auf die obere _und_ untere Seite des Elements aus (setzt sie in diesem Fall auf `0`); der zweite Wert betrifft die linke _und_ rechte Seite. (Hier ist `auto` ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts aufteilt). Sie können auch einen, zwei, drei oder vier Werte verwenden, wie in der [Margin-Syntax](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Dies setzt die Hintergrundfarbe des Elements. Dieses Projekt verwendet einen rötlichen Orangen Ton für die Hintergrundfarbe des Körpers, im Gegensatz zu Dunkelblau für das {{htmlelement("html")}} Element. (Experimentieren Sie nach Belieben.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für das Padding. Ziel ist es, etwas Platz um den Inhalt zu schaffen. In diesem Beispiel gibt es kein Padding oben im Körper und 20 Pixel auf der rechten, unteren und linken Seite. Die Werte setzen oben, rechts, unten, links, in dieser Reihenfolge. Wie bei `margin`, Sie können einen, zwei, drei oder vier Werte verwenden, wie in der [Padding-Syntax](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt die Werte für die Breite, den Stil und die Farbe des Randes. In diesem Fall ist es ein fünf Pixel breiter, solider schwarzer Rand, auf allen Seiten des Körpers.

### Positionierung und Styling des Hauptseitentitels

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Ihnen ist vielleicht aufgefallen, dass es eine große Lücke oben auf dem Körper gibt. Das passiert, weil Browser {{htmlelement("Heading_Elements", "h1")}}-Element (unter anderem) standardmäßig stylen. Das mag wie eine schlechte Idee erscheinen, dient aber dazu, eine grundlegende Lesbarkeit für ungestylte Seiten zu bieten. Um die Lücke zu beseitigen, überschreiben wir die Standardstileinstellungen des Browsers mit der Einstellung `margin: 0;`.

Als Nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel.

Danach setzen wir die Überschrift auf dieselbe Farbe wie die HTML-Hintergrundfarbe.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an. Seine vier Werte sind:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens vom Text: wie weit er sich bewegt.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen unschärferen Schatten.
- Der vierte Wert setzt die Basisfarbe des Schattens.

Experimentieren Sie mit verschiedenen Werten, um zu sehen, wie sich die Darstellung ändert.

### Bild zentrieren

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als Nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir könnten denselben `margin: 0 auto` Trick wie für den Körper verwenden. Aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, um das CSS zum Laufen zu bringen.

Der {{htmlelement("body")}} ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt. Die auf ein Blockelement angewendete Margin wird von anderen Elementen auf der Seite respektiert. Im Gegensatz dazu sind Bilder **inline**-Elemente; damit der Auto-Margin-Trick für dieses Bild funktioniert, müssen wir ihm mit `display: block;` ein Block-Level-Verhalten geben.

Schließlich fügen wir `max-width: 100%;` hinzu, um sicherzustellen, dass, wenn das Bild größer als die auf den Körper gesetzte `width` (600 Pixel) ist, es in dieser Breite angezeigt wird und nicht größer.

> [!NOTE]
> Machen Sie sich keine allzu großen Sorgen, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inline-Element oder `max-width: 100%;` noch nicht vollständig verstehen. Sie werden mehr Sinn machen, während Sie weiter CSS studieren. Weitere Informationen zu diesen Eigenschaften finden Sie auf den MDN-Seiten {{cssxref("display")}} und {{cssxref("max-width")}}.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollte Ihre Seite ungefähr so aussehen:

![Ein Mozilla-Logo, zentriert, und eine Überschrift und Absätze. Es sieht jetzt schön gestyled aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangen Hintergrund für den zentrierten Hauptinhaltsstreifen.](website-screenshot-final.png)

(Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie stecken bleiben, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In diesem Artikel haben wir gerade die Oberfläche von CSS angekratzt. Unsere [Kernmodule](/de/docs/Learn_web_development/Core), beginnend mit dem [CSS-Grundlagen Tutorial](/de/docs/Learn_web_development/Core/Styling_basics), werden dies ausführlicher behandeln.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
