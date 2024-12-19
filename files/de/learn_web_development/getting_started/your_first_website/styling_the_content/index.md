---
title: "CSS: Gestaltung des Inhalts"
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte gestaltet. _Gestaltung des Inhalts_ führt Sie durch alles, was Sie zum Einstieg benötigen. Wir werden Fragen beantworten wie: Wie mache ich Text rot? Wie zeige ich Inhalte an einem bestimmten Ort im (Webseiten-)Layout an? Wie kann ich meine Webseite mit Hintergrundbildern und Farben dekorieren?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computer-Betriebssystem, die grundlegenden Softwareprogramme, die Sie zum Erstellen einer Website verwenden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von CSS.</li>
          <li>Die grundlegenden Teile der CSS-Syntax — Regeln, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Häufige CSS-Funktionalitäten einschließlich Box-Modell, Farb- und Schriftartenänderungen und Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS ist das, was Sie verwenden, um HTML-Elemente selektiv zu stylen. Zum Beispiel wählt dieses CSS Absatztext aus und setzt die Farbe auf rot:

```css
p {
  color: red;
}
```

Probieren wir es aus!

1. Erstellen Sie in Ihrem `first-website`-Ordner einen weiteren neuen Ordner namens `styles`.
2. Verwenden Sie einen Texteditor, um die drei in den obigen CSS-Zeilen gezeigten Zeilen in eine neue Datei einzufügen.
3. Speichern Sie die Datei in Ihrem `styles`-Ordner mit dem Dateinamen `style.css`.

Damit der Code funktioniert, müssen wir dieses CSS (oben) noch auf Ihr HTML-Dokument anwenden. Andernfalls ändert das Styling nicht das Erscheinungsbild des HTML.

1. Öffnen Sie Ihre `index.html`-Datei. Fügen Sie die folgende Zeile in den HTML-Head ein (zwischen den {{HTMLElement("head")}} und `</head>` Tags):

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas sehen, das so aussieht:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde von unserem CSS rot gefärbt.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

## Anatomie eines CSS-Regelsatzes

Lassen Sie uns den CSS-Code für roten Absatztext zerlegen, um zu verstehen, wie er funktioniert:

![CSS p Deklaration Farbe rot](css-declaration-small.png)

Die gesamte Struktur wird als **Regelsatz** bezeichnet. (Der Begriff _Regelsatz_ wird oft einfach als _Regel_ bezeichnet.) Beachten Sie die Namen der einzelnen Teile:

- Selektor
  - : Dies ist der HTML-Elementname am Anfang des Regelsatzes. Es definiert, welche Elemente gestylt werden sollen (in diesem Beispiel {{HTMLElement("p")}}-Elemente). Um ein anderes Element zu stylen, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Es gibt an, welche der Eigenschaften des Elements Sie stylen möchten.
- Eigenschaften
  - : Dies sind Merkmale eines HTML-Elements, deren Werte Sie ändern können, um es anders zu stylen. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}}-Elemente.) In CSS wählen Sie aus, welche Eigenschaften Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft – nach dem Doppelpunkt – befindet sich der **Eigenschaftswert**. Dieser wählt ein Erscheinungsbild aus vielen möglichen für eine bestimmte Eigenschaft. (Zum Beispiel gibt es viele `color` Werte zusätzlich zu `red`.)

Beachten Sie die anderen wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jeder Regelsatz in geschweifte Klammern eingeschlossen werden. (`{}`)
- In jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- In jedem Regelsatz müssen Sie ein Semikolon (`;`) verwenden, um jede Deklaration von der nächsten zu trennen.

Um in einem Regelsatz mehrere Eigenschaftswerte zu ändern, schreiben Sie sie durch Semikolons getrennt, wie dies:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Auswahl mehrerer Elemente

Sie können auch mehrere Elemente auswählen und einen einzelnen Regelsatz auf alle anwenden. Trennen Sie mehrere Selektoren durch Kommas. Zum Beispiel:

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
      <th scope="col">Was wählt er aus?</th>
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
        Das Element auf der Seite mit der angegebenen ID. Auf einer bestimmten HTML-Seite sollte jeder ID-Wert eindeutig sein.
      </td>
      <td>
        <code>#my-id</code><br />wählt <code>&#x3C;p id="my-id"></code> oder
        <code>&#x3C;a id="my-id"></code>
      </td>
    </tr>
    <tr>
      <td>Klassenselektor</td>
      <td>
        Die Elemente auf der Seite mit der angegebenen Klasse. Mehrere Instanzen derselben Klasse können auf einer Seite erscheinen.
      </td>
      <td>
        <code>.my-class</code><br />wählt
        <code>&#x3C;p class="my-class"></code> und
        <code>&#x3C;a class="my-class"></code>
      </td>
    </tr>
    <tr>
      <td>Attributselektor</td>
      <td>Die Elemente auf der Seite mit dem angegebenen Attribut.</td>
      <td>
        <code>img[src]</code><br />wählt
        <code>&#x3C;img src="my-image.png"></code> aber nicht
        <code>&#x3C;img></code>
      </td>
    </tr>
    <tr>
      <td>Pseudoklassen-Selektor</td>
      <td>
        Die angegebenen Elemente, aber nur, wenn sie sich im angegebenen Zustand befinden. (Zum Beispiel, wenn ein Cursor über einen Link schwebt.)
      </td>
      <td>
        <code>a:hover</code><br />wählt <code>&#x3C;a></code>, aber nur, wenn
        der Mauszeiger über dem Link schwebt.
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele weitere Selektoren zu entdecken. Um mehr zu lernen, sehen Sie sich unsere Selektor-Tutorials an, beginnend mit [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

## Schriften und Text

Jetzt, da wir einige CSS-Grundlagen erkundet haben, lassen Sie uns das Erscheinungsbild des Beispiels verbessern, indem wir mehr Regeln und Informationen zur Datei `style.css` hinzufügen.

1. Finden Sie zuerst die [Ausgabe von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#font), die Sie zuvor aus [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) gespeichert haben. Fügen Sie das {{htmlelement("link")}}-Element irgendwo in den Head Ihrer `index.html` ein (irgendwo zwischen den {{HTMLElement("head")}} und `</head>` Tags). Es sieht ungefähr so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verbindet Ihre Seite mit einem Stylesheet, das die Open Sans Schriftfamilie mit Ihrer Webseite lädt.

2. Löschen Sie als nächstes die vorhandene Regel in Ihrer `style.css`-Datei. Es war ein guter Test, aber lassen Sie uns nicht mit viel rotem Text weitermachen.
3. Fügen Sie die folgenden Zeilen (unten gezeigt) hinzu und ersetzen Sie die Zuordnung `font-family` mit Ihrer `font-family`-Auswahl aus [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#font). Die Eigenschaft `font-family` bezieht sich auf die Schriftart(en), die Sie für Text verwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und -größe für die gesamte Seite. Da {{HTMLElement("html")}} das Elternelement der gesamten Seite ist, erben alle darin enthaltenen Elemente dieselbe `font-size` und `font-family`.

   ```css
   html {
     font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
     font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. CSS-Kommentare sind eine Möglichkeit, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

4. Setzen Sie nun Schriftgrößen für Elemente, die Text im HTML-Body haben werden ({{htmlelement("Heading_Elements", "&lt;h1&gt;")}}, {{htmlelement("li")}}, und {{htmlelement("p")}}). Wir zentrieren auch die Überschrift. Schließlich erweitern wir den zweiten Regelsatz (unten) mit Einstellungen für Zeilenhöhe und Buchstabenabstand, um den Fließtext lesbarer zu machen.

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

![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schriftart wurde festgelegt, die Schriftgrößen, Zeilenhöhe und der Buchstabenabstand sind angepasst, und die Hauptseitenüberschrift wurde zentriert.](website-screenshot-font-small.png)

## CSS: alles über Boxen

Etwas, das Ihnen auffallen wird, wenn Sie CSS häufiger verwenden: Vieles davon dreht sich um Boxen. Dazu gehört das Festlegen von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als Boxen betrachtet werden, die auf anderen Boxen sitzen.

![Ein großer Stapel von Boxen oder Kisten, die aufeinander gestapelt sind](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

CSS-Layout basiert hauptsächlich auf dem _Box-Modell._ Jedes als Box dargestellte Element auf Ihrer Seite hat Eigenschaften wie:

- `padding`, der Raum um den Inhalt. Im nachstehenden Beispiel ist es der Raum um den Absatztext herum.
- `border`, die feste Linie, die sich direkt außerhalb des Paddings befindet.
- `margin`, der Raum außerhalb der Randbegrenzung.

![Drei Boxen, die ineinander sitzen. Von außen nach innen sind sie beschriftet mit Margin, Border und Padding.](box-model.png)

In diesem Abschnitt nutzen wir auch:

- `width` (eines Elements).
- `background-color`, die Farbe hinter dem Inhalt und dem Padding eines Elements.
- `color`, die Farbe des Inhalts eines Elements (normalerweise Text).
- `text-shadow` setzt einen Schlagschatten auf den Text in einem Element.
- `display` setzt den Anzeigemodus eines Elements. (weiterlesen, um mehr zu erfahren)

Um fortzufahren, lassen Sie uns mehr CSS hinzufügen. Fügen Sie diese neuen Regeln weiter unten in `style.css` ein. Experimentieren Sie mit der Änderung von Werten, um zu sehen, was passiert.

### Änderung der Seitenfarbe

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode auf [die Farbe, die Sie in Wie wird meine Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#theme_color) gewählt haben.

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

Der obige Code setzt neue Werte für mehrere Eigenschaften des {{htmlelement("body")}}-Elements. Lassen Sie uns diese Zeilen der Reihe nach durchgehen:

- `width: 600px;` Dies zwingt den Body, immer 600 Pixel breit zu sein.
- `margin: 0 auto;` Wenn Sie zwei Werte für eine Eigenschaft wie `margin` oder `padding` festlegen, wirkt sich der erste Wert auf die obere _und_ untere Seite des Elements aus (in diesem Fall wird er auf `0` gesetzt); der zweite Wert wirkt sich auf die linke _und_ rechte Seite aus. (`auto` hier ist ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts verteilt). Sie können auch ein, zwei, drei oder vier Werte verwenden, wie in der [Margin-Syntax](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Dies setzt die Hintergrundfarbe des Elements. In diesem Projekt wird ein rötliches Orange für die Hintergrundfarbe des Bodys verwendet, im Gegensatz zu Dunkelblau für das {{htmlelement("html")}}-Element. (Fühlen Sie sich frei zu experimentieren.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für Padding. Das Ziel ist es, etwas Raum um den Inhalt zu schaffen. In diesem Beispiel gibt es kein Padding oben am Body und 20 Pixel rechts, unten und links. Die Werte werden in der Reihenfolge oben, rechts, unten, links gesetzt. Wie bei `margin` können Sie ein, zwei, drei oder vier Werte verwenden, wie in der [Padding Syntax](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt Werte für die Breite, den Stil und die Farbe des Rahmens. In diesem Fall ist es ein fünf Pixel breiter, fester schwarzer Rand, auf allen Seiten des Bodys.

### Positionierung und Styling des Hauptseitentitels

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Vielleicht haben Sie bemerkt, dass es oben am Body eine schreckliche Lücke gibt. Das liegt daran, dass Browser Standardstyle für das {{htmlelement("Heading_Elements", "h1")}}-Element (unter anderem) anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht ist, eine grundlegende Lesbarkeit für ungestylte Seiten zu bieten. Um die Lücke zu beseitigen, überschreiben wir das Standardstyling des Browsers mit der Einstellung `margin: 0;`.

Als nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel.

Daraufhin setzen wir die Schriftfarbe der Überschrift auf dieselbe Farbe wie die Hintergrundfarbe von HTML.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an. Seine vier Werte sind:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens von dem Text: wie weit er sich horizontal bewegt.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens von dem Text: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen verschwommen aussehenden Schatten.
- Der vierte Wert setzt die Grundfarbe des Schattens.

Experimentieren Sie mit verschiedenen Werten, um zu sehen, wie sich das Erscheinungsbild verändert.

### Zentrieren des Bildes

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als Nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir könnten denselben `margin: 0 auto` Trick verwenden, den wir für den Body benutzt haben. Aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, um das CSS zum Laufen zu bringen.

Das {{htmlelement("body")}} ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite beansprucht. Der auf ein Blockelement angewendete Rand wird von anderen Elementen auf der Seite respektiert. Im Gegensatz dazu sind Bilder **Inline**-Elemente; damit der automatische Randtrick für dieses Bild funktioniert, müssen wir ihm ein Block-Niveau-Verhalten mit `display: block;` geben.

Schließlich fügen wir `max-width: 100%;` ein, um sicherzustellen, dass, wenn das Bild größer als die auf den Body gesetzte `width` (600 Pixel) ist, es in dieser Breite angezeigt wird und nicht größer.

> [!NOTE]
> Seien Sie nicht allzu besorgt, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inline-Element oder `max-width: 100%;` nicht vollständig verstehen. Sie werden im Laufe Ihrer CSS-Studien mehr Sinn ergeben. Weitere Informationen zu diesen Eigenschaften finden Sie auf MDN's {{cssxref("display")}} und {{cssxref("max-width")}} Referenzseiten.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die der hier gezeigten ähnlich sieht:

![Ein Mozilla-Logo, zentriert, und eine Überschrift und Absätze. Es sieht jetzt schön gestylt aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhalt.](website-screenshot-final.png)

(Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie stecken bleiben, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In diesem Artikel haben wir nur die Oberfläche von CSS angekratzt. Unsere [Kernmodule](/de/docs/Learn_web_development/Core), beginnend mit dem [CSS-Styling-Grundlagenmodul](/de/docs/Learn_web_development/Core/Styling_basics), werden es in viel mehr Detail behandeln.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
