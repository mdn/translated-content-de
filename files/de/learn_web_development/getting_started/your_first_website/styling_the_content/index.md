---
title: "CSS: Gestaltung des Inhalts"
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte gestaltet. _Gestaltung des Inhalts_ erläutert, was Sie benötigen, um loszulegen. Wir werden Fragen beantworten wie: Wie mache ich Text rot? Wie kann ich Inhalte an einem bestimmten Ort im (Webseiten-)Layout anzeigen? Wie dekoriere ich meine Webseite mit Hintergrundbildern und -farben?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computerbetriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von CSS.</li>
          <li>Die Grundbestandteile der CSS-Syntax — Regelsätze, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Gängige CSS-Funktionen einschließlich Box-Modell, Änderung von Farben und Schriften sowie Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS verwenden Sie, um HTML-Elemente gezielt zu gestalten. Zum Beispiel wählt dieses CSS den Text in Absätzen aus und setzt die Farbe auf rot:

```css
p {
  color: red;
}
```

Lassen Sie uns das ausprobieren!

1. Erstellen Sie in Ihrem Ordner `first-website` einen neuen Ordner namens `styles`.
2. Verwenden Sie einen Texteditor und fügen Sie die oben gezeigten drei CSS-Zeilen in eine neue Datei ein.
3. Speichern Sie die Datei in Ihrem Ordner `styles` mit dem Dateinamen `style.css`.

Um den Code funktionsfähig zu machen, müssen wir dieses CSS (oben) auf Ihr HTML-Dokument anwenden. Andernfalls wird das Styling das Aussehen des HTML nicht ändern.

1. Öffnen Sie Ihre Datei `index.html`. Fügen Sie die folgende Zeile in den HTML-Kopf (zwischen den {{HTMLElement("head")}} und `</head>`-Tags) ein:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas in dieser Art sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde von unserem CSS rot gestaltet.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

## Aufbau eines CSS-Regelsatzes

Lassen Sie uns den CSS-Code für roten Absatztext aufschlüsseln, um zu verstehen, wie er funktioniert:

![CSS p Deklaration Farbe Rot](css-declaration-small.png)

Die gesamte Struktur wird als **Regelsatz** bezeichnet. (Der Begriff _Regelsatz_ wird oft einfach als _Regel_ bezeichnet.) Beachten Sie die Namen der einzelnen Teile:

- Selektor
  - : Dies ist der HTML-Elementname am Anfang des Regelsatzes. Er definiert das Element bzw. die Elemente, die gestaltet werden sollen (in diesem Beispiel {{HTMLElement("p")}} Elemente). Um ein anderes Element zu gestalten, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Es legt fest, welche der **Eigenschaften** des Elements Sie gestalten möchten.
- Eigenschaften
  - : Dies sind Merkmale eines HTML-Elements, deren Werte Sie ändern können, um es anders zu gestalten. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}}-Elemente.) In CSS wählen Sie aus, welche Eigenschaften Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft—nach dem Doppelpunkt—gibt es den **Eigenschaftswert**. Dieser wählt eine von vielen möglichen Darstellungen für eine gegebene Eigenschaft aus. (Zum Beispiel gibt es viele `color`-Werte neben `red`.)

Beachten Sie die anderen wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jeder Regelsatz in geschweifte Klammern eingefasst sein. (`{}`)
- In jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- In jedem Regelsatz müssen Sie ein Semikolon (`;`) verwenden, um jede Deklaration von der nächsten zu trennen.

Um mehrere Eigenschaftswerte in einem Regelsatz zu ändern, schreiben Sie sie durch Semikolons getrennt, wie folgt:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Auswahl mehrerer Elemente

Sie können auch mehrere Elemente auswählen und einen einzigen Regelsatz auf alle anwenden. Trennen Sie mehrere Selektoren durch Kommas. Zum Beispiel:

```css
p,
li,
h1 {
  color: red;
}
```

### Verschiedene Arten von Selektoren

Es gibt viele verschiedene Arten von Selektoren. Die obigen Beispiele verwenden **Elementselektoren**, die alle Elemente eines bestimmten Typs auswählen. Aber wir können auch spezifischere Auswahlmöglichkeiten treffen. Hier sind einige der gebräuchlicheren Arten von Selektoren:

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
        Das Element auf der Seite mit der angegebenen ID. Auf einer gegebenen HTML-Seite sollte jeder ID-Wert einzigartig sein.
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
      <td>Pseudoklassen-Selektor</td>
      <td>
        Das/die angegebene(n) Element(e), jedoch nur im angegebenen Zustand. (Zum Beispiel, wenn ein Cursor über einen Link schwebt.)
      </td>
      <td>
        <code>a:hover</code><br />wählt <code>&#x3C;a></code>, aber nur, wenn
        der Mauszeiger über dem Link schwebt.
      </td>
    </tr>
  </tbody>
</table>

Es gibt viele weitere Selektoren zu entdecken. Um mehr zu erfahren, schauen Sie sich unsere Selektor-Tutorials an, beginnend mit [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

## Schriftarten und Text

Nachdem wir einige CSS-Grundlagen erkundet haben, verbessern wir das Aussehen des Beispiels, indem wir der Datei `style.css` mehr Regeln und Informationen hinzufügen.

1. Finden Sie zuerst die [Ausgabe von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#font), die Sie zuvor aus [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) gespeichert haben. Fügen Sie das {{htmlelement("link")}}-Element irgendwo innerhalb des Kopfbereichs Ihrer `index.html` ein (irgendwo zwischen den {{HTMLElement("head")}} und `</head>`-Tags). Es sieht so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verknüpft Ihre Seite mit einem Stylesheet, das die Schriftfamilie Open Sans mit Ihrer Webseite lädt.

2. Löschen Sie als nächstes die vorhandene Regel in Ihrer `style.css`-Datei. Es war ein guter Test, aber lassen Sie uns nicht mit viel rotem Text weitermachen.
3. Fügen Sie die folgenden Zeilen (unten gezeigt) hinzu und ersetzen Sie die `font-family`-Zuweisung durch Ihre `font-family`-Auswahl aus [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#font). Die Eigenschaft `font-family` bezieht sich auf die Schriftart(en), die Sie für den Text verwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die gesamte Seite. Da {{HTMLElement("html")}} das übergeordnete Element der gesamten Seite ist, erben alle darin enthaltenen Elemente dieselbe `font-size` und `font-family`.

   ```css
   html {
     font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
     font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare, während er den Code rendert. CSS-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen über Ihren Code oder Ihre Logik zu schreiben.

4. Lassen Sie uns nun Schriftgrößen für Elemente festlegen, die Text im HTML-Body enthalten werden ({{htmlelement("Heading_Elements", "&lt;h1&gt;")}}, {{htmlelement("li")}} und {{htmlelement("p")}}). Wir zentrieren auch die Überschrift. Schließlich erweitern wir den zweiten Regelsatz (unten) mit Einstellungen für Zeilenhöhe und Buchstabenabstand, um den Textinhalt lesbarer zu machen.

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

Passen Sie die `px`-Werte nach Belieben an. Ihr Arbeitsfortschritt sollte etwa so aussehen:

![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schriftart wurde festgelegt, die Schriftgrößen, Zeilenhöhe und der Buchstabenabstand wurden angepasst, und die Hauptseitenüberschrift wurde zentriert](website-screenshot-font-small.png)

## CSS: alles über Boxen

Etwas, das Ihnen im Laufe der Nutzung von CSS auffallen wird: Vieles davon dreht sich um Boxen. Dazu gehören das Einstellen von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als auf anderen Boxen sitzende Boxen betrachtet werden.

![Ein großer Stapel Boxen oder Kisten, die aufeinander sitzen](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

Die CSS-Layoutgestaltung basiert hauptsächlich auf dem _Box-Modell_. Jede Box, die Platz auf Ihrer Seite einnimmt, hat Eigenschaften wie:

- `padding`, der Abstand um den Inhalt. Im untenstehenden Beispiel ist dies der Abstand um den Absatztext.
- `border`, die feste Linie, die sich direkt außerhalb des Paddings befindet.
- `margin`, der Abstand um die Außenseite des Rahmens.

![Drei Boxen, die ineinander sitzen. Von außen nach innen sind sie als Margin, Border und Padding gekennzeichnet](box-model.png)

In diesem Abschnitt verwenden wir auch:

- `width` (eines Elements).
- `background-color`, die Farbe hinter dem Inhalt und dem Padding eines Elements.
- `color`, die Farbe des Inhalts eines Elements (normalerweise Text).
- `text-shadow` setzt einen Schlagschatten auf den Text innerhalb eines Elements.
- `display` setzt den Anzeigemodus eines Elements. (Lesen Sie weiter, um mehr zu erfahren)

Um fortzufahren, fügen Sie weiteres CSS hinzu. Fügen Sie diese neuen Regeln am Ende von `style.css` hinzu. Experimentieren Sie mit der Änderung von Werten, um zu sehen, was passiert.

### Die Seitenfarbe ändern

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode in [die von Ihnen gewählte Farbe in Wie wird meine Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#theme_color).

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

Der obige Code setzt neue Werte für mehrere Eigenschaften des {{htmlelement("body")}}-Elements. Lassen Sie uns diese Zeilen einzeln durchgehen:

- `width: 600px;` Dies erzwingt, dass der Body immer 600 Pixel breit ist.
- `margin: 0 auto;` Wenn Sie zwei Werte auf einer Eigenschaft wie `margin` oder `padding` setzen, beeinflusst der erste Wert die obere _und_ untere Seite des Elements (hier auf `0` gesetzt); der zweite Wert beeinflusst die linke _und_ rechte Seite. (Hier ist `auto` ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts teilt.) Sie können auch einen, zwei, drei oder vier Werte verwenden, wie in [Margin Syntax](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Dies setzt die Hintergrundfarbe des Elements. Dieses Projekt verwendet einen rötlichen Orange-Ton für die Body-Hintergrundfarbe, im Gegensatz zu Dunkelblau für das {{htmlelement("html")}}-Element. (Fühlen Sie sich frei, zu experimentieren.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für das Padding. Ziel ist es, etwas Platz um den Inhalt zu schaffen. In diesem Beispiel gibt es kein Padding oben am Body und 20 Pixel auf der rechten, unteren und linken Seite. Die Werte setzen in dieser Reihenfolge: oben, rechts, unten, links. Wie bei `margin` können Sie einen, zwei, drei oder vier Werte verwenden, wie in [Padding Syntax](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt Werte für die Breite, den Stil und die Farbe des Rahmens. In diesem Fall ist es ein fünf Pixel breiter, schwarzer Rahmen auf allen Seiten des Bodys.

### Titel der Hauptseite positionieren und stylen

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Vielleicht haben Sie bemerkt, dass da eine schreckliche Lücke oben im Body ist. Das kommt daher, dass Browser Standard-Styling auf das {{htmlelement("Heading_Elements", "h1")}}-Element (und andere) anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht ist, grundlegende Lesbarkeit für ungestylte Seiten bereitzustellen. Um die Lücke zu beseitigen, überschreiben wir das Standard-Styling des Browsers mit der Einstellung `margin: 0;`.

Als Nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel.

Daraufhin setzen wir die Überschriftentextfarbe auf dieselbe Farbe wie die HTML-Hintergrundfarbe.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an. Seine vier Werte sind:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens vom Text: wie weit er sich quer bewegt.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen unschärfer aussehenden Schatten.
- Der vierte Wert setzt die Grundfarbe des Schattens.

Versuchen Sie mit verschiedenen Werten zu experimentieren, um zu sehen, wie es das Erscheinungsbild verändert.

### Bild zentrieren

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als Nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir könnten denselben Trick `margin: 0 auto` verwenden wie beim Body. Aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, um das CSS funktionsfähig zu machen.

Das {{htmlelement("body")}} ist ein **Block**-Element, das heißt, es nimmt Platz auf der Seite ein. Der auf ein Blockelement angewendete Rand wird von anderen Elementen auf der Seite respektiert. Im Gegensatz dazu sind Bilder **Inline**-Elemente; damit der automatische Randtrick bei diesem Bild funktioniert, müssen wir ihm Blockverhalten mit `display: block;` geben.

Schließlich fügen wir `max-width: 100%;` hinzu, um sicherzustellen, dass, wenn das Bild größer als die auf dem Body gesetzte `width` (600 Pixel) ist, es mit dieser Breite angezeigt wird, und nicht größer.

> [!NOTE]
> Machen Sie sich keine zu großen Sorgen, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inline-Element oder `max-width: 100%;` nicht vollständig verstehen. Sie werden mehr Sinn machen, je länger Sie CSS studieren. Sie können auf den MDN-Referenzseiten mehr über diese Eigenschaften unter {{cssxref("display")}} und {{cssxref("max-width")}} erfahren.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die ähnlich aussieht wie diese:

![Ein zentriertes Mozilla-Logo und eine Überschrift und Absätze. Es sieht jetzt schön gestylt aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltsstreifen.](website-screenshot-final.png)

(Sie können unsere Version [hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie feststecken, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In diesem Artikel haben wir nur die Oberfläche von CSS angekratzt. Unsere [Kernmodule](/de/docs/Learn_web_development/Core), beginnend mit dem [Modul CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics), werden es viel detaillierter abdecken.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
