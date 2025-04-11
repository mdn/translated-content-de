---
title: "CSS: Gestaltung des Inhalts"
short-title: Gestaltung des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalt gestaltet. _Gestaltung des Inhalts_ führt durch alles, was Sie benötigen, um anzufangen. Wir beantworten Fragen wie: Wie mache ich Text rot? Wie platziere ich Inhalte an einem bestimmten Ort im (Webseiten-) Layout? Wie dekoriere ich meine Webseite mit Hintergrundbildern und Farben?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von CSS.</li>
          <li>Die grundlegenden Teile der CSS-Syntax — Rulesets, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Gängige CSS-Funktionalitäten einschließlich Box-Modell, Farben und Schriftarten ändern, und Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS wird verwendet, um HTML-Elemente gezielt zu gestalten. Zum Beispiel wählt dieses CSS Absatztexte aus und setzt die Farbe auf rot:

```css
p {
  color: red;
}
```

Versuchen wir es aus!

1. Erstellen Sie in Ihrem `first-website`-Ordner einen weiteren neuen Ordner namens `styles`.
2. Verwenden Sie einen Texteditor, um die drei oben gezeigten CSS-Zeilen in eine neue Datei einzufügen.
3. Speichern Sie die Datei in Ihrem `styles`-Ordner mit dem Dateinamen `style.css`.

Damit der Code funktioniert, müssen wir diesen CSS-Code (oben) noch auf Ihr HTML-Dokument anwenden. Andernfalls ändert sich die Darstellung des HTML nicht.

1. Öffnen Sie Ihre `index.html`-Datei. Fügen Sie die folgende Zeile innerhalb des HTML-Kopfteils (zwischen den {{HTMLElement("head")}} und `</head>`-Tags) ein:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas in dieser Art sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde durch unser CSS rot gestaltet.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

## Anatomie eines CSS-Rulesets

Lassen Sie uns den CSS-Code für den roten Absatztext zerlegen, um zu verstehen, wie er funktioniert:

![CSS p Deklaration Farbe rot](css-declaration-small.png)

Die gesamte Struktur wird als **Ruleset** bezeichnet. (Der Begriff _Ruleset_ wird oft einfach als _Regel_ bezeichnet.) Beachten Sie die Namen der einzelnen Teile:

- Selektor
  - : Dies ist der HTML-Elementname am Anfang des Rulesets. Es definiert das/die zu stylende(n) Element(e) (in diesem Beispiel {{HTMLElement("p")}}-Elemente). Um ein anderes Element zu gestalten, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Sie gibt an, welche **Eigenschaften** des Elements Sie gestalten möchten.
- Eigenschaften
  - : Dies sind Merkmale eines HTML-Elements, deren Werte Sie ändern können, um es anders zu gestalten. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}}-Elemente.) In CSS wählen Sie die Eigenschaften aus, die Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft – nach dem Doppelpunkt – befindet sich der **Eigenschaftswert**. Dieser wählt eine aus vielen möglichen Darstellungen für eine gegebene Eigenschaft aus. (Zum Beispiel gibt es viele `color`-Werte zusätzlich zu `red`.)

Beachten Sie die anderen wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jedes Ruleset in geschweifte Klammern gesetzt sein. (`{}`)
- Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- Innerhalb jedes Rulesets müssen Sie ein Semikolon (`;`) verwenden, um jede Deklaration von der nächsten zu trennen.

Um mehrere Eigenschaftswerte in einem Ruleset zu ändern, schreiben Sie sie durch Semikolons getrennt, wie folgt:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Auswahl mehrerer Elemente

Sie können auch mehrere Elemente auswählen und ein einzelnes Ruleset auf alle anwenden. Trennen Sie mehrere Selektoren durch Kommas. Zum Beispiel:

```css
p,
li,
h1 {
  color: red;
}
```

### Verschiedene Arten von Selektoren

Es gibt viele verschiedene Arten von Selektoren. Die obigen Beispiele verwenden **Elementselektoren**, die alle Elemente eines bestimmten Typs auswählen. Aber wir können auch spezifischere Auswahlen treffen. Hier sind einige der gebräuchlicheren Arten von Selektoren:

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
      <td><code>p</code><br />wählt <code>&#x3C;p></code> aus</td>
    </tr>
    <tr>
      <td>ID-Selektor</td>
      <td>
        Das Element auf der Seite mit der angegebenen ID. Auf einer bestimmten HTML-Seite
        sollte jeder id-Wert eindeutig sein.
      </td>
      <td>
        <code>#my-id</code><br />wählt <code>&#x3C;p id="my-id"></code> oder
        <code>&#x3C;a id="my-id"></code> aus
      </td>
    </tr>
    <tr>
      <td>Klassenselektor</td>
      <td>
        Das/die Element(e) auf der Seite mit der angegebenen Klasse. Mehrere Instanzen
        derselben Klasse können auf einer Seite erscheinen.
      </td>
      <td>
        <code>.my-class</code><br />wählt
        <code>&#x3C;p class="my-class"></code> und
        <code>&#x3C;a class="my-class"></code> aus
      </td>
    </tr>
    <tr>
      <td>Attributselektor</td>
      <td>Das/die Element(e) auf der Seite mit dem angegebenen Attribut.</td>
      <td>
        <code>img[src]</code><br />wählt
        <code>&#x3C;img src="my-image.png"></code> aus, jedoch nicht
        <code>&#x3C;img></code>
      </td>
    </tr>
    <tr>
      <td>Pseudo-Klassenselektor</td>
      <td>
        Das/die angegebenen Element(e), jedoch nur, wenn es sich im angegebenen Zustand befindet. (Zum
        Beispiel, wenn ein Cursor über einem Link schwebt.)
      </td>
      <td>
        <code>a:hover</code><br />wählt <code>&#x3C;a></code> aus, jedoch nur, wenn
        sich der Mauszeiger über dem Link befindet.
      </td>
    </tr>
  </tbody>
</table>

Es gibt viele weitere Selektoren zu entdecken. Um mehr zu erfahren, sehen Sie sich unsere Selektor-Tutorials an, beginnend mit [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

## Schriftarten und Text

Nachdem wir nun einige CSS-Grundlagen erkundet haben, verbessern wir das Erscheinungsbild des Beispiels, indem wir mehr Regeln und Informationen zur `style.css`-Datei hinzufügen.

1. Finden Sie zuerst die [Ausgabe von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font), die Sie zuvor aus [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) gespeichert haben. Fügen Sie das {{htmlelement("link")}}-Element irgendwo im Kopf Ihrer `index.html`-Datei hinzu (irgendwo zwischen den {{HTMLElement("head")}} und `</head>`-Tags). Es sieht ungefähr so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verbindet Ihre Seite mit einem Stylesheet, das die Schriftfamilie Open Sans mit Ihrer Webseite lädt.

2. Löschen Sie anschließend die vorhandene Regel, die Sie in Ihrer `style.css`-Datei haben. Es war ein guter Test, aber lassen Sie uns nicht mit viel rotem Text weitermachen.
3. Fügen Sie die folgenden Zeilen (unten gezeigt) hinzu, indem Sie die `font-family`-Zuordnung mit Ihrer `font-family`-Auswahl aus [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font) ersetzen. Die Eigenschaft `font-family` bezieht sich auf die Schriftart(en), die Sie für Text verwenden möchten. Diese Regel definiert eine globale Grundschriftart und -größe für die gesamte Seite. Da {{HTMLElement("html")}} das Elternelement der gesamten Seite ist, erben alle darin enthaltenen Elemente dieselbe `font-size` und `font-family`.

   ```css
   html {
     font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
     font-family:
       "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare, wenn er den Code rendert. CSS-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen über Ihren Code oder Ihre Logik zu schreiben.

4. Legen Sie nun Schriftgrößen für Elemente fest, die Text im HTML-Körper enthalten werden ({{htmlelement("Heading_Elements", "&lt;h1&gt;")}}, {{htmlelement("li")}}, und {{htmlelement("p")}}). Wir zentrieren auch die Überschrift. Schließlich erweitern wir das zweite Regelset (unten) mit Einstellungen für Zeilenhöhe und Buchstabenabstand, um den Inhalt lesbarer zu machen.

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

Passen Sie die `px`-Werte nach Belieben an. Ihr aktueller Fortschritt sollte ungefähr so aussehen:

![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schriftart wurde eingestellt, die Schriftgrößen, Zeilenhöhe und Buchstabenabstand sind angepasst, und die Hauptüberschrift wurde zentriert.](website-screenshot-font-small.png)

## CSS: alles über Boxen

Etwas, das Sie über CSS bemerken werden, wenn Sie es mehr verwenden: ein Großteil davon dreht sich um Boxen. Dies umfasst das Festlegen von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als Boxen betrachtet werden, die auf anderen Boxen sitzen.

![Ein großer Stapel Boxen oder Kisten, die übereinander gestapelt sind](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

CSS-Layout basiert hauptsächlich auf dem _Box-Modell._ Jede Box, die auf Ihrer Seite Platz einnimmt, hat Eigenschaften wie:

- `padding`, der Abstand um den Inhalt herum. Im untenstehenden Beispiel ist es der Abstand um den Absatztext.
- `border`, die feste Linie, die sich direkt außerhalb des Paddings befindet.
- `margin`, der Abstand um den Rand der Grenze herum.

![Drei Boxen sind ineinander angeordnet. Von außen nach innen sind sie als Margin, Border und Padding gekennzeichnet](box-model.png)

In diesem Abschnitt verwenden wir auch:

- `width` (eines Elements).
- `background-color`, die Farbe hinter dem Inhalt und dem Padding eines Elements.
- `color`, die Farbe des Inhalts eines Elements (normalerweise Text).
- `text-shadow` setzt einen Schlagschatten auf den Text in einem Element.
- `display` setzt den Anzeigemodus eines Elements. (lesen Sie weiter, um mehr zu erfahren)

Um fortzufahren, fügen wir mehr CSS hinzu. Fügen Sie diese neuen Regeln weiter unten in `style.css` hinzu. Experimentieren Sie mit dem Ändern von Werten, um zu sehen, was passiert.

### Änderung der Seitenfarbe

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode in [die Farbe, die Sie in Was wird meine Website aussehen? gewählt haben](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_theme_color).

### Styling des Körpers

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Der obige Code setzt neue Werte für mehrere Eigenschaften des {{htmlelement("body")}}-Elements. Gehen wir diese Zeilenweise durch:

- `width: 600px;` Dies zwingt den Körper immer 600 Pixel breit zu sein.
- `margin: 0 auto;` Wenn Sie zwei Werte auf einer Eigenschaft wie `margin` oder `padding` setzen, beeinflusst der erste Wert die obere _und_ untere Seite des Elements (in diesem Fall auf `0` gesetzt); der zweite Wert beeinflusst die linke _und_ rechte Seite. (Hier ist `auto` ein spezieller Wert, der den verfügbaren horizontalen Platz gleichmäßig zwischen links und rechts aufteilt). Sie können auch einen, zwei, drei oder vier Werte verwenden, wie in der [Margen-Syntax](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Dies setzt die Hintergrundfarbe des Elements. Dieses Projekt verwendet ein rötliches Orange für die Hintergrundfarbe des Körpers, im Gegensatz zu Dunkelblau für das {{htmlelement("html")}}-Element. (Fühlen Sie sich frei zu experimentieren.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für das Padding. Das Ziel ist es, etwas Raum um den Inhalt zu schaffen. In diesem Beispiel gibt es kein Padding oben im Körper und 20 Pixel rechts, unten und links. Die Werte legen oben, rechts, unten, links fest, in dieser Reihenfolge. Wie bei `margin` können Sie einen, zwei, drei oder vier Werte verwenden, wie in der [Padding-Syntax](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt Werte für die Breite, den Stil und die Farbe des Rahmens. In diesem Fall ist es ein fünf Pixel breiter, schwarzer, durchgehender Rahmen auf allen Seiten des Körpers.

### Positionierung und Styling des Hauptseitentitels

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Vielleicht haben Sie bemerkt, dass es oben im Körper eine schreckliche Lücke gibt. Das passiert, weil Browser Standard-Stylings auf das {{htmlelement("Heading_Elements", "h1")}}-Element (unter anderem) anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht ist, grundlegende Lesbarkeit für ungestylte Seiten zu bieten. Um die Lücke zu beseitigen, überschreiben wir das Standard-Styling des Browsers mit der Einstellung `margin: 0;`.

Als nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel.

Danach setzen wir die Überschrift auf die gleiche Farbe wie die HTML-Hintergrundfarbe.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an. Seine vier Werte sind:

- Der erste Pixelwert setzt den **horizontalen Abstand** des Schattens vom Text: wie weit es sich bewegt.
- Der zweite Pixelwert setzt den **vertikalen Abstand** des Schattens vom Text: wie weit es sich nach unten bewegt.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen unschärfer aussehenden Schatten.
- Der vierte Wert setzt die Grundfarbe des Schattens.

Versuchen Sie, mit verschiedenen Werten zu experimentieren, um zu sehen, wie sie das Erscheinungsbild ändern.

### Zentrierung des Bildes

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir könnten denselben `margin: 0 auto` Trick wie beim Body anwenden. Aber es gibt Unterschiede, die eine zusätzliche Einstellung erforderlich machen, damit das CSS funktioniert.

Das {{htmlelement("body")}} ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt. Der auf ein Block-Element angewendete Rand wird von anderen Elementen auf der Seite respektiert. Im Gegensatz dazu sind Bilder **Inline**-Elemente; damit der automatische Rand-Trick auf dieses Bild angewendet werden kann, müssen wir ihm mit `display: block;` ein Blockverhalten zuweisen.

Schließlich fügen wir `max-width: 100%;` hinzu, um sicherzustellen, dass, wenn das Bild größer als die eingestellte `width` auf dem Körper (600 Pixel) ist, es bei dieser Breite angezeigt wird, und nicht größer.

> [!NOTE]
> Machen Sie sich keine allzu großen Sorgen, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inline-Element oder `max-width: 100%;` nicht vollständig verstehen. Sie werden mehr Sinn machen, wenn Sie Ihre CSS-Studien fortsetzen. Sie können weitere Informationen zu diesen Eigenschaften auf MDNs {{cssxref("display")}} und {{cssxref("max-width")}} Referenzseiten finden.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die dieser hier ähnlich sieht:

![Ein zentriertes Mozilla-Logo und eine Überschrift und Absätze. Es sieht jetzt schön gestaltet aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltstreifen.](website-screenshot-final.png)

(Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie stecken bleiben, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In diesem Artikel haben wir nur an der Oberfläche von CSS gekratzt. Unsere [Kernmodule](/de/docs/Learn_web_development/Core), beginnend mit dem Modul [CSS Styling Basics](/de/docs/Learn_web_development/Core/Styling_basics), werden es viel detaillierter behandeln.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
