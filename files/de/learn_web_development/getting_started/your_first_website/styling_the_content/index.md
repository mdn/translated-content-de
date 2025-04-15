---
title: "CSS: Gestaltung des Inhalts"
short-title: Gestaltung des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte gestaltet. _Gestaltung des Inhalts_ erklärt, was Sie benötigen, um loszulegen. Wir werden Fragen beantworten wie: Wie mache ich Text rot? Wie kann ich Inhalte an einer bestimmten Stelle im (Webseiten-) Layout anzeigen lassen? Wie dekoriere ich meine Webseite mit Hintergrundbildern und Farben?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von CSS.</li>
          <li>Die grundlegenden Teile der CSS-Syntax — Regelsets, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Häufige CSS-Funktionalitäten einschließlich Box-Modell, Farb- und Schriftänderungen und Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stilvorlagensprache.** Mit CSS können Sie HTML-Elemente individuell gestalten. Beispielsweise wählt dieses CSS Absatztext aus und setzt die Farbe auf rot:

```css
p {
  color: red;
}
```

Lassen Sie es uns ausprobieren!

1. Erstellen Sie in Ihrem `first-website` Ordner einen weiteren neuen Ordner namens `styles`.
2. Fügen Sie mit einem Texteditor die drei oben gezeigten CSS-Zeilen in eine neue Datei ein.
3. Speichern Sie die Datei in Ihrem `styles` Ordner unter dem Namen `style.css`.

Um den Code zum Laufen zu bringen, müssen wir dieses CSS (oben) noch auf Ihr HTML-Dokument anwenden. Andernfalls ändert sich das Aussehen des HTMLs nicht.

1. Öffnen Sie Ihre `index.html` Datei. Fügen Sie die folgende Zeile in den HTML-Kopf ein (zwischen den {{HTMLElement("head")}} und `</head>` Tags):

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas sehen, das so aussieht:

![A Mozilla logo and some paragraphs. The paragraph text has been styled red by our css.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

## Anatomie eines CSS-Regelsets

Lassen Sie uns den CSS-Code für roten Absatztext zerlegen, um zu verstehen, wie er funktioniert:

![CSS p declaration color red](css-declaration-small.png)

Die gesamte Struktur wird als **Regelset** bezeichnet. (Der Begriff _Regelset_ wird oft einfach als _Regel_ bezeichnet.) Beachten Sie die Namen der einzelnen Teile:

- Selektor
  - : Dies ist der HTML-Elementname am Anfang des Regelsets. Es definiert das zu stylende Element (in diesem Beispiel {{HTMLElement("p")}} Elemente). Um ein anderes Element zu stylen, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Sie legt fest, welche **Eigenschaften** des Elements Sie stylen möchten.
- Eigenschaften
  - : Dies sind Merkmale eines HTML-Elements, deren Werte Sie ändern können, um es anders zu gestalten. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}} Elemente.) In CSS wählen Sie die Eigenschaften aus, die Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft—nach dem Doppelpunkt—gibt es den **Eigenschaftswert**. Dieser wählt eines von vielen möglichen Erscheinungsbildern für eine gegebene Eigenschaft aus. (Zum Beispiel gibt es viele `color` Werte zusätzlich zu `red`.)

Beachten Sie die anderen wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jedes Regelset in geschweifte Klammern eingeschlossen sein. (`{}`)
- Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- Innerhalb jedes Regelsets müssen Sie ein Semikolon (`;`) verwenden, um jede Deklaration von der nächsten zu trennen.

Um mehrere Eigenschaftswerte in einem Regelset zu modifizieren, schreiben Sie sie getrennt durch Semikolons, so:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

> [!NOTE]
> Scrimbas [Schreiben Sie Ihre ersten CSS-Zeilen!](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) <sup>[_MDN Learning Partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in die CSS-Syntax.

### Mehrere Elemente auswählen

Sie können auch mehrere Elemente auswählen und ein einziges Regelset auf alle anwenden. Trennen Sie mehrere Selektoren durch Kommas. Zum Beispiel:

```css
p,
li,
h1 {
  color: red;
}
```

### Verschiedene Arten von Selektoren

Es gibt viele verschiedene Arten von Selektoren. Die obigen Beispiele verwenden **Elementselektoren**, die alle Elemente eines bestimmten Typs auswählen. Aber wir können auch spezifischere Auswahlmöglichkeiten treffen. Hier sind einige der häufigeren Arten von Selektoren:

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
        Das Element auf der Seite mit der angegebenen ID. Auf einer gegebenen HTML-Seite sollte jeder id Wert eindeutig sein.
      </td>
      <td>
        <code>#my-id</code><br />wählt <code>&#x3C;p id="my-id"></code> oder
        <code>&#x3C;a id="my-id"></code>
      </td>
    </tr>
    <tr>
      <td>Klassen-Selektor</td>
      <td>
        Die Element(e) auf der Seite mit der angegebenen Klasse. Mehrere Instanzen derselben Klasse können auf einer Seite erscheinen.
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
      <td>Pseudo-Klassen-Selektor</td>
      <td>
        Die angegebenen Element(e), jedoch nur im angegebenen Zustand. (Beispielsweise, wenn ein Cursor über einen Link schwebt.)
      </td>
      <td>
        <code>a:hover</code><br />wählt <code>&#x3C;a></code>, jedoch nur, wenn
        der Mauszeiger über den Link schwebt.
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viel mehr Selektoren zu entdecken. Um mehr zu erfahren, sehen Sie sich unsere Selektoren-Tutorials an, beginnend mit [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

## Schriften und Text

Nachdem wir einige CSS-Grundlagen erkundet haben, lassen Sie uns das Erscheinungsbild des Beispiels verbessern, indem wir weitere Regeln und Informationen zur `style.css` Datei hinzufügen.

1. Finden Sie zunächst die [Ausgabe von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font), die Sie zuvor aus [Wie wird Ihre Webseite aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) gespeichert haben. Fügen Sie das {{htmlelement("link")}} Element irgendwo in den Kopf Ihrer `index.html` Datei ein (irgendwo zwischen den {{HTMLElement("head")}} und `</head>` Tags). Es sieht ungefähr so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das die Open Sans Schriftfamilie mit Ihrer Webseite lädt.

2. Löschen Sie als Nächstes die bestehende Regel in Ihrer `style.css` Datei. Es war ein guter Test, aber wir machen nicht weiter mit viel rotem Text.
3. Fügen Sie die folgenden Zeilen (unten gezeigt) hinzu, und ersetzen Sie die `font-family` Zuordnung mit Ihrer `font-family` Auswahl aus [Wie wird Ihre Webseite aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font). Die Eigenschaft `font-family` bezieht sich auf die Schriftart(en), die Sie für den Text verwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die gesamte Seite. Da {{HTMLElement("html")}} das übergeordnete Element der gesamten Seite ist, erben alle darin enthaltenen Elemente dieselbe `font-size` und `font-family`.

   ```css
   html {
     font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
     font-family:
       "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare, während er den Code rendert. CSS-Kommentare sind eine Möglichkeit, um hilfreiche Notizen über Ihren Code oder Ihre Logik zu schreiben.

4. Jetzt legen wir Schriftgrößen für Elemente fest, die Text im HTML-Body haben werden ({{htmlelement("Heading_Elements", "&lt;h1&gt;")}}, {{htmlelement("li")}}, und {{htmlelement("p")}}). Außerdem zentrieren wir die Überschrift. Schließlich erweitern wir das zweite Regelset (unten) mit Einstellungen für Zeilenhöhe und Buchstabenabstand, um den Textinhalt besser lesbar zu machen.

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

Passen Sie die `px` Werte nach Belieben an. Ihr Zwischenergebnis sollte ähnlich aussehen wie dieses:

![A Mozilla logo and some paragraphs. A sans-serif font has been set, the font sizes, line height and letter spacing are adjusted, and the main page heading has been centered](website-screenshot-font-small.png)

## CSS: Es dreht sich alles um Boxen

Etwas, das Sie beim Verwenden von CSS bemerken werden: Vieles dreht sich um Boxen. Dazu gehören das Festlegen von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als Boxen betrachtet werden, die auf anderen Boxen sitzen.

![Ein großer Stapel von Boxen oder Kisten, die aufeinander gestapelt sind](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

Die CSS-Layoutgestaltung basiert hauptsächlich auf dem _Box-Modell._ Jede Box, die auf Ihrer Seite Platz einnimmt, hat Eigenschaften wie:

- `padding`, der Raum um den Inhalt. Im untenstehenden Beispiel ist es der Raum um den Absatztext.
- `border`, die feste Linie, die sich direkt außerhalb des Paddings befindet.
- `margin`, der Raum um die Außenseite des Randes herum.

![Drei Boxen, die ineinander sitzen. Von außen nach innen sind sie als margin, border und padding bezeichnet](box-model.png)

In diesem Abschnitt verwenden wir auch:

- `width` (eines Elements).
- `background-color`, die Farbe hinter dem Inhalt und dem Padding eines Elements.
- `color`, die Farbe des Inhalts eines Elements (normalerweise Text).
- `text-shadow` setzt einen Schatten auf den Text in einem Element.
- `display` legt den Anzeigemodus eines Elements fest. (weiterlesen, um mehr zu erfahren)

Um fortzufahren, lassen Sie uns mehr CSS hinzufügen. Fügen Sie diese neuen Regeln weiter unten in `style.css` hinzu. Experimentieren Sie mit dem Ändern von Werten, um zu sehen, was passiert.

### Ändern der Seitenfarbe

```css
html {
  background-color: #00539f;
}
```

Diese Regel legt eine Hintergrundfarbe für die gesamte Seite fest. Ändern Sie den Farbcode zu [der Farbe, die Sie in Wie wird meine Webseite aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_theme_color) gewählt haben.

### Gestaltung des Bodys

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Der obige Code setzt neue Werte für mehrere Eigenschaften des {{htmlelement("body")}} Elements. Lassen Sie uns diese Zeilen nacheinander durchgehen:

- `width: 600px;` Dies erzwingt, dass der Body immer 600 Pixel breit ist.
- `margin: 0 auto;` Wenn Sie zwei Werte für eine Eigenschaft wie `margin` oder `padding` festlegen, betrifft der erste Wert die obere _und_ untere Seite des Elements (in diesem Fall auf `0` gesetzt); der zweite Wert betrifft die linke _und_ rechte Seite. (Hier ist `auto` ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts aufteilt). Sie können auch einen, zwei, drei oder vier Werte verwenden, wie in der [Margin Syntax](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Dies setzt die Hintergrundfarbe des Elements. In diesem Projekt wird ein rötliches Orange für die Hintergrundfarbe des Bodys verwendet, im Gegensatz zu Dunkelblau für das {{htmlelement("html")}} Element. (Experimentieren Sie gerne.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für das Padding. Das Ziel ist es, etwas Platz um den Inhalt zu schaffen. In diesem Beispiel gibt es kein Padding am oberen Rand des Bodys und 20 Pixel auf der rechten, unteren und linken Seite. Die Werte setzen sich in der Reihenfolge Top, Rechts, Unten, Links. Wie bei `margin` können Sie einen, zwei, drei oder vier Werte verwenden, wie in der [Padding-Syntax](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt Werte für die Breite, den Stil und die Farbe des Randes. In diesem Fall ist es ein fünf Pixel breiter, schwarzer Rand, an allen Seiten des Bodys.

### Positionierung und Gestaltung des Hauptseitentitels

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Vielleicht haben Sie bemerkt, dass es eine hässliche Lücke am oberen Rand des Bodys gibt. Das passiert, weil Browser Standardstile auf das {{htmlelement("Heading_Elements", "h1")}} Element (unter anderem) anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht ist es, eine grundlegende Lesbarkeit für nichtgestaltete Seiten bereitzustellen. Um die Lücke zu beseitigen, überschreiben wir den Standardstil des Browsers mit der Einstellung `margin: 0;`.

Als Nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel.

Danach setzen wir die Textfarbe der Überschrift auf die gleiche Farbe wie den HTML-Hintergrund.

Schließlich fügt `text-shadow` dem Textinhalt des Elements einen Schatten hinzu. Seine vier Werte sind:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens vom Text: wie weit er sich bewegt.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen unschärfer aussehenden Schatten.
- Der vierte Wert setzt die Basisfarbe des Schattens.

Versuchen Sie, mit verschiedenen Werten zu experimentieren, um zu sehen, wie sich das Erscheinungsbild ändert.

### Bild zentrieren

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir könnten den gleichen `margin: 0 auto` Trick wie beim Body verwenden. Aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, damit das CSS funktioniert.

Das {{htmlelement("body")}} ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt. Der auf ein Blockelement angewendete Rand wird von anderen Elementen auf der Seite respektiert. Im Gegensatz dazu sind Bilder **Inline**-Elemente; damit der automatische Randtrick bei diesem Bild funktioniert, müssen wir ihm eine Blockebene verhalten mit `display: block;` geben.

Schließlich fügen wir `max-width: 100%;` hinzu, um sicherzustellen, dass, wenn das Bild größer als die auf den Body gesetzte `width` (600 Pixel) ist, es in dieser Breite angezeigt wird, und nicht größer.

> [!NOTE]
> Seien Sie nicht zu besorgt, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inline-Element oder `max-width: 100%;` nicht vollständig verstehen. Sie werden mehr Sinn machen, wenn Sie Ihr Studium von CSS fortsetzen. Weitere Informationen zu diesen Eigenschaften finden Sie auf den MDN-Referenzseiten von {{cssxref("display")}} und {{cssxref("max-width")}}.

## Schlussfolgerung

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die dieser hier ähnelt:

![Ein Mozilla-Logo, zentriert, und eine Überschrift und Absätze. Es sieht jetzt schön gestaltet aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltstreifen.](website-screenshot-final.png)

(Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie stecken bleiben, können Sie immer Ihre Arbeit mit unserem [vollständigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In diesem Artikel haben wir nur an der Oberfläche von CSS gekratzt. Unsere [Kernmodule](/de/docs/Learn_web_development/Core), beginnend mit dem [CSS Styling Grundlagenmodul](/de/docs/Learn_web_development/Core/Styling_basics), werden es in viel mehr Details behandeln.

## Siehe auch

- [Learn HTML and CSS](https://v2.scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Learning Partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der [Scrimba-Kurs](https://scrimba.com?via=mdn) _Learn HTML and CSS_ lehrt Sie HTML und CSS durch das Erstellen und Bereitstellen von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, beigebracht von erfahrenen Lehrern.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
