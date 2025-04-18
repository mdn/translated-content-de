---
title: "CSS: Gestaltung des Inhalts"
short-title: Gestaltung des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte gestaltet. _Gestaltung des Inhalts_ führt durch das, was Sie benötigen, um anzufangen. Wir werden Fragen beantworten wie: Wie mache ich Text rot? Wie lasse ich Inhalte an einer bestimmten Position im (Webseiten-)Layout anzeigen? Wie dekoriere ich meine Webseite mit Hintergrundbildern und -farben?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von CSS.</li>
          <li>Die grundlegenden Teile der CSS-Syntax — Regeln, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Häufige CSS-Funktionalitäten, einschließlich Boxmodell, Ändern von Farben und Schriftarten sowie Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS wird verwendet, um HTML-Elemente gezielt zu stylen. Zum Beispiel wählt dieses CSS Absatztext aus und setzt die Farbe auf rot:

```css
p {
  color: red;
}
```

Lassen Sie es uns ausprobieren!

1. Erstellen Sie in Ihrem `first-website`-Ordner einen weiteren neuen Ordner namens `styles`.
2. Verwenden Sie einen Texteditor, um die drei oben gezeigten CSS-Zeilen in eine neue Datei einzufügen.
3. Speichern Sie die Datei in Ihrem `styles`-Ordner mit dem Dateinamen `style.css`.

Damit der Code funktioniert, müssen wir dieses CSS (oben) noch auf Ihr HTML-Dokument anwenden. Andernfalls ändert das Styling nicht das Aussehen des HTML.

1. Öffnen Sie Ihre `index.html`-Datei. Fügen Sie die folgende Zeile in den HTML-Kopf ein (zwischen den {{HTMLElement("head")}} und `</head>` Tags):

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas Folgendes sehen:

![Ein Mozilla Logo und einige Absätze. Der Absatztext wurde durch unser CSS rot gestaltet.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

## Anatomie eines CSS-Regelsatzes

Lassen Sie uns den CSS-Code für roten Absatztext zerlegen, um zu verstehen, wie er funktioniert:

![CSS p Deklaration Farbe rot](css-declaration-small.png)

Die gesamte Struktur wird als **Regelsatz** bezeichnet. (Der Begriff _Regelsatz_ wird oft einfach als _Regel_ bezeichnet.) Beachten Sie die Bezeichnungen der einzelnen Teile:

- Selektor
  - : Dies ist der HTML-Elementname am Anfang des Regelsatzes. Er definiert das oder die zu stylenden Elemente (in diesem Beispiel {{HTMLElement("p")}}-Elemente). Um ein anderes Element zu stylen, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Sie gibt an, welche der Eigenschaften des Elements Sie stylen möchten.
- Eigenschaften
  - : Dies sind Merkmale eines HTML-Elements, deren Werte Sie ändern können, um es anders zu stylen. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}}-Elemente.) In CSS wählen Sie aus, welche Eigenschaften Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft — nach dem Doppelpunkt — steht der **Eigenschaftswert**. Damit wird eine von vielen möglichen Erscheinungen für eine gegebene Eigenschaft ausgewählt. (Zum Beispiel gibt es neben `red` viele `color`-Werte.)

Beachten Sie die anderen wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jeder Regelsatz in geschweifte Klammern gesetzt werden. (`{}`)
- Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- Innerhalb jedes Regelsatzes müssen Sie ein Semikolon (`;`) verwenden, um jede Deklaration von der nächsten zu trennen.

Um mehrere Eigenschaftswerte in einem Regelsatz zu ändern, schreiben Sie sie durch Semikolons getrennt, wie hier:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

> [!NOTE]
> Scrimbas [Schreiben Sie Ihre ersten CSS-Zeilen!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in die CSS-Syntax.

### Auswählen mehrerer Elemente

Sie können auch mehrere Elemente auswählen und einen einzelnen Regelsatz auf alle anwenden. Trennen Sie mehrere Selektoren durch Kommas. Zum Beispiel:

```css
p,
li,
h1 {
  color: red;
}
```

### Verschiedene Arten von Selektoren

Es gibt viele verschiedene Arten von Selektoren. Die Beispiele oben verwenden **Elementselektoren**, die alle Elemente eines bestimmten Typs auswählen. Wir können jedoch auch spezifischere Auswahlen treffen. Hier sind einige der häufigeren Arten von Selektoren:

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
        Das Element auf der Seite mit der angegebenen ID. Auf einer bestimmten HTML-Seite sollte jeder ID-Wert eindeutig sein.
      </td>
      <td>
        <code>#my-id</code><br />wählt <code>&#x3C;p id="my-id"></code> oder
        <code>&#x3C;a id="my-id"></code> aus
      </td>
    </tr>
    <tr>
      <td>Klassenselektor</td>
      <td>
        Das oder die Elemente auf der Seite mit der angegebenen Klasse. Mehrfache Instanzen derselben Klasse können auf einer Seite erscheinen.
      </td>
      <td>
        <code>.my-class</code><br />wählt
        <code>&#x3C;p class="my-class"></code> und
        <code>&#x3C;a class="my-class"></code> aus
      </td>
    </tr>
    <tr>
      <td>Attributselektor</td>
      <td>Das oder die Elemente auf der Seite mit dem angegebenen Attribut.</td>
      <td>
        <code>img[src]</code><br />wählt
        <code>&#x3C;img src="my-image.png"></code> aus, aber nicht
        <code>&#x3C;img></code>
      </td>
    </tr>
    <tr>
      <td>Pseudoklassenselektor</td>
      <td>
        Das oder die angegebenen Elemente, jedoch nur im angegebenen Zustand. (Beispielsweise, wenn ein Cursor über einen Link schwebt.)
      </td>
      <td>
        <code>a:hover</code><br />wählt <code>&#x3C;a></code> aus, jedoch nur wenn der Mauszeiger über den Link schwebt.
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele weitere Selektoren zu entdecken. Um mehr zu erfahren, lesen Sie unsere Selektor-Tutorials, beginnend mit [Basisselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

## Schriftarten und Text

Nachdem wir einige grundlegende CSS-Konzepte erkundet haben, verbessern wir das Erscheinungsbild des Beispiels, indem wir der Datei `style.css` mehr Regeln und Informationen hinzufügen.

1. Suchen Sie zuerst den [Ausgang von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font), den Sie zuvor von [Wie wird Ihre Webseite aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) gespeichert haben. Fügen Sie das {{htmlelement("link")}}-Element irgendwo in den Kopfbereich Ihrer `index.html`-Datei hinzu (irgendwo zwischen den {{HTMLElement("head")}} und `</head>`-Tags). Es sieht ungefähr so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verknüpft Ihre Seite mit einem Stylesheet, das die Schriftfamilie Open Sans mit Ihrer Webseite lädt.

2. Löschen Sie als Nächstes die vorhandene Regel in Ihrer `style.css`-Datei. Es war ein guter Test, aber lassen Sie uns nicht mit viel rotem Text weitermachen.
3. Fügen Sie die folgenden Zeilen (unten gezeigt) hinzu, wobei Sie die `font-family`-Zuweisung mit Ihrer `font-family`-Auswahl aus [Wie wird Ihre Webseite aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font) ersetzen. Die Eigenschaft `font-family` bezieht sich auf die Schriftart(en), die Sie für Text verwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die gesamte Seite. Da {{HTMLElement("html")}} das Elternelement der gesamten Seite ist, erben alle darin enthaltenen Elemente dieselbe `font-size` und `font-family`.

   ```css
   html {
     font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
     font-family:
       "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare, während er den Code rendert. CSS-Kommentare sind eine Möglichkeit, um hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

4. Lassen Sie uns nun die Schriftgrößen für Elemente festlegen, die Text im HTML-Body haben werden ({{htmlelement("Heading_Elements", "&lt;h1&gt;")}}, {{htmlelement("li")}} und {{htmlelement("p")}}). Wir werden auch die Überschrift zentrieren. Schließlich erweitern wir den zweiten Regelsatz (unten) mit Einstellungen für Zeilenhöhe und Buchstabenabstand, um den Inhalt im Textkörper lesbarer zu machen.

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

Passen Sie die `px`-Werte nach Belieben an. Ihr aktueller Arbeitsstand sollte ungefähr so aussehen:

![Ein Mozilla Logo und einige Absätze. Eine serifenlose Schrift wurde festgelegt, die Schriftgrößen, Zeilenhöhe und Buchstabenabstand sind angepasst, und die Hauptüberschrift der Seite wurde zentriert](website-screenshot-font-small.png)

## CSS: Alles über Boxen

Etwas, das Ihnen bei der Nutzung von CSS immer häufiger auffallen wird: Es geht viel um Boxen. Dazu gehören das Festlegen von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als Boxen betrachtet werden, die auf anderen Boxen sitzen.

![Ein großer Stapel von Kisten oder Kisten, die aufeinander stehen](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

Das CSS-Layout basiert hauptsächlich auf dem _Boxmodell._ Jede Box, die Platz auf Ihrer Seite beansprucht, hat Eigenschaften wie:

- `padding`, der Raum um den Inhalt. Im Beispiel unten ist es der Raum um den Absatztext.
- `border`, die feste Linie, die direkt außerhalb des Paddings liegt.
- `margin`, der Raum um die Außenseite des Rands.

![Drei Boxen, die ineinander geschachtelt sind. Von außen nach innen sind sie als Rand, Rahmen und Padding beschriftet](box-model.png)

In diesem Abschnitt verwenden wir auch:

- `width` (eines Elements).
- `background-color`, die Farbe hinter dem Inhalt und Padding eines Elements.
- `color`, die Farbe des Inhalts eines Elements (gewöhnlich Text).
- `text-shadow` setzt einen Schlagschatten auf den Text innerhalb eines Elements.
- `display` legt den Anzeigemodus eines Elements fest. (Weiterlesen, um mehr zu erfahren)

Um fortzufahren, fügen wir mehr CSS hinzu. Fügen Sie diese neuen Regeln weiterhin am Ende von `style.css` hinzu. Experimentieren Sie mit der Änderung der Werte, um zu sehen, was passiert.

### Ändern der Seitenfarbe

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode in [die Farbe, die Sie in Wie wird meine Webseite aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_theme_color) ausgewählt haben.

### Gestalten des Hauptteils

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Der obige Code setzt neue Werte für mehrere Eigenschaften des {{htmlelement("body")}}-Elements. Gehen wir diese Zeile für Zeile durch:

- `width: 600px;` Dies zwingt den Hauptteil, immer 600 Pixel breit zu sein.
- `margin: 0 auto;` Wenn Sie zwei Werte für eine Eigenschaft wie `margin` oder `padding` festlegen, betrifft der erste Wert die obere _und_ untere Seite des Elements (setzt sie in diesem Fall auf `0`); der zweite Wert betrifft die linke _und_ rechte Seite. (Hier ist `auto` ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts aufteilt). Sie können auch einen, zwei, drei oder vier Werte verwenden, wie in [Marginsyntax](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Dies setzt die Hintergrundfarbe des Elements. Dieses Projekt verwendet ein rötliches Orange für die Hintergrundfarbe des Hauptteils, im Gegensatz zu dunkelblau für das {{htmlelement("html")}}-Element. (Experimentieren Sie ruhig.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für das Padding. Das Ziel ist es, etwas Raum um den Inhalt zu schaffen. In diesem Beispiel gibt es kein Padding am oberen Rand des Hauptteils und 20 Pixel auf der rechten, unteren und linken Seite. Die Werte setzen oben, rechts, unten, links, in dieser Reihenfolge. Wie bei `margin` können Sie einen, zwei, drei oder vier Werte verwenden, wie in [Paddingsyntax](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt Werte für die Breite, den Stil und die Farbe des Rahmens. In diesem Fall ist es ein fünf Pixel breiter, schwarzer solider Rahmen auf allen Seiten des Hauptteils.

### Positionierung und Styling des Hauptseitentitels

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Sie haben vielleicht bemerkt, dass oben im Hauptteil eine hässliche Lücke ist. Das passiert, weil Browser Standardstyling auf das {{htmlelement("Heading_Elements", "h1")}}-Element (unter anderem) anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht ist, grundlegende Lesbarkeit für ungestaltete Seiten bereitzustellen. Um die Lücke zu beseitigen, überschreiben wir das Standardstyling des Browsers mit der Einstellung `margin: 0;`.

Als Nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel.

Anschließend setzen wir die Überschrift auf dieselbe Farbe wie die HTML-Hintergrundfarbe.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an. Seine vier Werte sind:

- Der erste Pixelwert setzt den **horizontalen Offset** des Schattens vom Text: wie weit er sich bewegt.
- Der zweite Pixelwert setzt den **vertikalen Offset** des Schattens vom Text: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert setzt den **Weichzeichnungsradius** des Schattens. Ein größerer Wert erzeugt einen unschärfer aussehenden Schatten.
- Der vierte Wert setzt die Basisfarbe des Schattens.

Versuchen Sie, mit verschiedenen Werten zu experimentieren, um zu sehen, wie sie das Erscheinungsbild verändern.

### Zentrieren des Bildes

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir könnten denselben Trick `margin: 0 auto` wie beim Hauptteil verwenden. Aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, um das CSS zum Laufen zu bringen.

Das {{htmlelement("body")}} ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt. Der auf ein Blockelement angewendete Rand wird von anderen Elementen auf der Seite respektiert. Im Gegensatz dazu sind Bilder **Inline**-Elemente; damit der Automargin-Trick auf dieses Bild wirkt, müssen wir ihm Block-Level-Verhalten mit `display: block;` geben.

Schließlich fügen wir `max-width: 100%;` hinzu, um sicherzustellen, dass, wenn das Bild größer als die `width` ist, die auf den Hauptteil gesetzt ist (600 Pixel), es in dieser Breite angezeigt wird und nicht größer.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inline-Element oder `max-width: 100%;` noch nicht vollständig verstehen. Sie werden mehr Sinn ergeben, wenn Sie Ihr Studium von CSS fortsetzen. Sie finden mehr Informationen über diese Eigenschaften auf den MDN-Referenzseiten für {{cssxref("display")}} und {{cssxref("max-width")}}.

## Fazit

Wenn Sie alle Anleitungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die dieser hier ähnelt:

![Ein zentriertes Mozilla Logo und eine Überschrift und Absätze. Es sieht jetzt schön gestaltet aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltstreifen.](website-screenshot-final.png)

(Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie steckenbleiben, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In diesem Artikel haben wir nur die Oberfläche von CSS angekratzt. Unsere [Kernmodule](/de/docs/Learn_web_development/Core), beginnend mit dem [CSS-Styling-Grundlagenmodul](/de/docs/Learn_web_development/Core/Styling_basics), werden es viel detaillierter behandeln.

## Siehe auch

- [HTML und CSS lernen](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _HTML und CSS lernen_ Kurs bringt Ihnen HTML und CSS bei durch den Bau und die Bereitstellung von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, gelehrt von sachkundigen Lehrern.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
