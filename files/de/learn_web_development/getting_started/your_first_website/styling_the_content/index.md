---
title: "CSS: Gestaltung des Inhalts"
short-title: Gestaltung des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte gestaltet. _Gestaltung des Inhalts_ führt Sie durch, was Sie zu Beginn benötigen. Wir beantworten Fragen wie: Wie mache ich Text rot? Wie lasse ich Inhalte an einem bestimmten Ort im Layout (der Webseite) anzeigen? Wie dekoriere ich meine Webseite mit Hintergrundbildern und -farben?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von CSS.</li>
          <li>Die grundlegenden Teile der CSS-Syntax — Regeln, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Häufige CSS-Funktionalitäten einschließlich Box-Modell, Farb- und Schriftänderungen und Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS verwenden Sie, um HTML-Elemente gezielt zu gestalten. Zum Beispiel wählt dieses CSS Absatztext aus und setzt die Farbe auf rot:

```css
p {
  color: red;
}
```

Lassen Sie es uns ausprobieren!

1. Erstellen Sie in Ihrem Ordner `first-website` einen weiteren neuen Ordner namens `styles`.
2. Verwenden Sie einen Texteditor, um die drei oben gezeigten CSS-Zeilen in eine neue Datei einzufügen.
3. Speichern Sie die Datei in Ihrem Ordner `styles` unter dem Dateinamen `style.css`.

Damit der Code funktioniert, müssen wir dieses CSS (oben) noch auf Ihr HTML-Dokument anwenden. Andernfalls ändert die Gestaltung nicht das Aussehen des HTML.

1. Öffnen Sie Ihre Datei `index.html`. Fügen Sie die folgende Zeile in den HTML-Kopf (zwischen den {{HTMLElement("head")}}- und `</head>`-Tags) ein:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas Ähnliches sehen wie dies:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde durch unser CSS rot gestaltet.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

## Anatomie eines CSS-Regelsatzes

Lassen Sie uns den CSS-Code für roten Absatztext zerlegen, um zu verstehen, wie er funktioniert:

![CSS p Deklaration Farbe rot](css-declaration-small.png)

Die gesamte Struktur wird als **Regelsatz** bezeichnet. (Der Begriff _Regelsatz_ wird häufig nur als _Regel_ bezeichnet.) Beachten Sie die Namen der einzelnen Teile:

- Selektor
  - : Dies ist der Name des HTML-Elements am Anfang des Regelsatzes. Es definiert, welches Element/Welche Elemente gestaltet werden sollen (in diesem Beispiel {{HTMLElement("p")}}-Elemente). Um ein anderes Element zu gestalten, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Sie gibt an, welche **Eigenschaften** des Elements Sie gestalten möchten.
- Eigenschaften
  - : Dies sind Merkmale eines HTML-Elements, deren Werte Sie ändern können, um es unterschiedlich zu gestalten. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}}-Elemente.) In CSS wählen Sie die Eigenschaften, die Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft - nach dem Doppelpunkt - befindet sich der **Eigenschaftswert**. Dieser wählt ein Aussehen aus vielen möglichen für eine gegebene Eigenschaft. (Zum Beispiel gibt es viele `color`-Werte zusätzlich zu `red`.)

Beachten Sie die anderen wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jeder Regelsatz in geschweifte Klammern eingeschlossen sein. (`{}`)
- Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- Innerhalb jedes Regelsatzes müssen Sie ein Semikolon (`;`) verwenden, um jede Deklaration von der nächsten zu trennen.

Um in einem Regelsatz mehrere Eigenschaftswerte zu ändern, schreiben Sie sie durch Semikola getrennt, wie folgt:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Auswählen mehrerer Elemente

Sie können auch mehrere Elemente auswählen und einen einzigen Regelsatz auf alle anwenden. Trennen Sie mehrere Selektoren durch Kommas. Zum Beispiel:

```css
p,
li,
h1 {
  color: red;
}
```

### Verschiedene Arten von Selektoren

Es gibt viele verschiedene Arten von Selektoren. Die obigen Beispiele verwenden **Elementselektoren**, die alle Elemente eines bestimmten Typs auswählen. Aber wir können auch spezifischere Auswahlen treffen. Hier sind einige der häufigeren Arten von Selektoren:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Selektorname</th>
      <th scope="col">Was wählt er aus</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Elementselektor (manchmal auch Tag- oder Typselektor genannt)</td>
      <td>Alle HTML-Elemente des angegebenen Typs.</td>
      <td><code>p</code><br />wählt <code>&#x3C;p></code> aus</td>
    </tr>
    <tr>
      <td>ID-Selektor</td>
      <td>
        Das Element auf der Seite mit der angegebenen ID. Auf einer gegebenen HTML-Seite
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
        <code>&#x3C;img src="my-image.png"></code> aus, aber nicht
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
        <code>a:hover</code><br />wählt <code>&#x3C;a></code> aus, aber nur wenn
        der Mauszeiger über den Link schwebt.
      </td>
    </tr>
  </tbody>
</table>

Es gibt viele weitere Selektoren zu entdecken. Um mehr zu erfahren, schauen Sie sich unsere Selektor-Anleitungen an, beginnend mit [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

## Schriftarten und Text

Nun, da wir einige CSS-Grundlagen erkundet haben, lassen Sie uns das Aussehen des Beispiels verbessern, indem wir dem `style.css`-Datei mehr Regeln und Informationen hinzufügen.

1. Suchen Sie zuerst die [Ausgabe von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font), die Sie vorher von [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) gespeichert haben. Fügen Sie das {{htmlelement("link")}}-Element irgendwo in den Kopf Ihres `index.html` ein (überall zwischen den {{HTMLElement("head")}}- und `</head>`-Tags). Es sieht ungefähr so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das die Open Sans Schriftfamilie mit Ihrer Webseite lädt.

2. Löschen Sie als nächstes die bestehende Regel, die Sie in Ihrer `style.css`-Datei haben. Sie war ein guter Test, aber lassen Sie uns nicht mit viel rotem Text weitermachen.
3. Fügen Sie die folgenden Zeilen (unten gezeigt) hinzu und ersetzen Sie die `font-family`-Zuweisung mit Ihrer `font-family`-Auswahl von [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font). Die Eigenschaft `font-family` bezieht sich auf die Schriftart(en), die Sie für Text verwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und -größe für die gesamte Seite. Da {{HTMLElement("html")}} das Elternelement der gesamten Seite ist, erben alle darin enthaltenen Elemente dieselbe `font-size` und `font-family`.

   ```css
   html {
     font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
     font-family:
       "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. CSS-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

4. Lassen Sie uns jetzt die Schriftgrößen für Elemente festlegen, die Text im HTML-Körper enthalten werden ({{htmlelement("Heading_Elements", "&lt;h1&gt;")}}, {{htmlelement("li")}} und {{htmlelement("p")}}). Wir werden auch die Überschrift zentrieren. Schließlich erweitern wir den zweiten Regelsatz (unten) mit Einstellungen für Zeilenhöhe und Buchstabenabstand, um den Textinhalt lesbarer zu machen.

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

Passen Sie die `px`-Werte nach Ihrem Geschmack an. Ihr Arbeitsfortschritt sollte ähnlich aussehen wie dies:

![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schrift wurde festgelegt, die Schriftgrößen, Zeilenhöhe und Buchstabenabstand sind angepasst, und die Hauptüberschrift der Seite wurde zentriert.](website-screenshot-font-small.png)

## CSS: Alles über Boxen

Etwas, das Ihnen bei CSS auffallen wird, je mehr Sie es verwenden: Vieles davon dreht sich um Boxen. Dazu gehört das Einstellen von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als Boxen betrachtet werden, die auf anderen Boxen sitzen.

![Ein großer Stapel von Boxen oder Kisten, die aufeinander gestapelt sind](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

CSS-Layout basiert hauptsächlich auf dem _Box-Modell._ Jede Box, die Platz auf Ihrer Seite einnimmt, hat Eigenschaften wie:

- `padding`, der Raum um den Inhalt. Im folgenden Beispiel ist es der Raum um den Absatztext.
- `border`, die feste Linie, die sich direkt außerhalb des Paddings befindet.
- `margin`, der Raum um die Außenseite des Rahmens.

![Drei Boxen, die ineinander sitzen. Von außen nach innen sind sie mit Rand, Rahmen und Abstand (padding) beschriftet](box-model.png)

In diesem Abschnitt verwenden wir auch:

- `width` (eines Elements).
- `background-color`, die Farbe hinter dem Inhalt und dem Padding eines Elements.
- `color`, die Farbe des Inhalts eines Elements (normalerweise Text).
- `text-shadow` setzt einen Schlagschatten auf den Text innerhalb eines Elements.
- `display` legt den Anzeigemodus eines Elements fest. (weiterlesen, um mehr zu erfahren)

Um fortzufahren, lassen Sie uns mehr CSS hinzufügen. Fügen Sie diese neuen Regeln weiter unten in `style.css` hinzu. Experimentieren Sie mit dem Ändern von Werten, um zu sehen, was passiert.

### Die Seitenfarbe ändern

```css
html {
  background-color: #00539f;
}
```

Diese Regel legt eine Hintergrundfarbe für die gesamte Seite fest. Ändern Sie den Farbcode gemäß [der Farbe, die Sie in Wie wird meine Website aussehen? ausgewählt haben](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_theme_color).

### Den Körper gestalten

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

- `width: 600px;` Dies zwingt den Körper immer 600 Pixel breit zu sein.
- `margin: 0 auto;` Wenn Sie zwei Werte auf einer Eigenschaft wie `margin` oder `padding` setzen, beeinflusst der erste Wert die obere und untere Seite des Elements (hier auf `0` setzen); der zweite Wert beeinflusst die linke und rechte Seite. (Hier ist `auto` ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts aufteilt). Sie können auch einen, zwei, drei oder vier Werte verwenden, wie auf den [Rand-Syntax-Dokumentation](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Dies legt die Hintergrundfarbe des Elements fest. Dieses Projekt verwendet ein rötliches Orange für die Hintergrundfarbe des Körpers im Gegensatz zu Dunkelblau für das {{htmlelement("html")}}-Element. (Fühlen Sie sich frei zu experimentieren.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für das Padding. Das Ziel ist, etwas Raum um den Inhalt zu schaffen. In diesem Beispiel gibt es oben am Körper kein Padding, dafür jedoch 20 Pixel an den rechten, unteren und linken Seiten. Die Werte setzen oben, rechts, unten, links in dieser Reihenfolge. Wie bei `margin`, können Sie einen, zwei, drei oder vier Werte verwenden, wie auf den [Padding-Syntax-Dokumentationen](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt Werte für die Breite, den Stil und die Farbe des Rahmens. In diesem Fall ist es ein fünf Pixel breiter, solider schwarzer Rahmen an allen Seiten des Körpers.

### Positionierung und Gestaltung des Seitentitels

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Möglicherweise haben Sie bemerkt, dass es eine unangenehme Lücke am oberen Rand des Körpers gibt. Das passiert, weil Browser standardmäßig Styling auf das {{htmlelement("Heading_Elements", "h1")}}-Element (unter anderem) anwenden. Das erscheint vielleicht wie eine schlechte Idee, aber die Absicht ist, eine grundlegende Lesbarkeit für ungestylte Seiten bereitzustellen. Um die Lücke zu eliminieren, überschreiben wir das Standardstyling des Browsers mit der Einstellung `margin: 0;`.

Als nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel.

Danach setzen wir die Überschriftstextfarbe auf die gleiche Farbe wie die des HTML-Hintergrunds.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an. Seine vier Werte sind:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens vom Text: wie weit er nach rechts verschoben wird.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit er nach unten verschoben wird.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen unschärferen Schatten.
- Der vierte Wert setzt die Ausgangsfarbe des Schattens.

Versuchen Sie mit verschiedenen Werten zu experimentieren, um zu sehen, wie sich das Erscheinungsbild ändert.

### Das Bild zentrieren

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir könnten denselben Trick `margin: 0 auto` verwenden wie beim Körper. Aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, damit das CSS funktioniert.

Der {{htmlelement("body")}} ist ein **Block**element, was bedeutet, dass es Platz auf der Seite einnimmt. Der auf ein Blockelement angewendete Rand wird von anderen Elementen auf der Seite respektiert. Im Gegensatz dazu sind Bilder **Inline**elemente; damit der automatische Randtrick bei diesem Bild funktioniert, müssen wir ihm ein Blockverhalten mit `display: block;` zuweisen.

Schließlich fügen wir `max-width: 100%;` hinzu, um sicherzustellen, dass, wenn das Bild größer ist als die für den Körper festgelegte `width` (600 Pixel), es auf diese Breite und nicht größer angezeigt wird.

> [!NOTE]
> Seien Sie nicht zu besorgt, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inline-Element oder `max-width: 100%;` nicht ganz verstehen. Sie werden mit der Zeit nachvollziehbar, während Sie Ihr Studium von CSS fortsetzen. Weitere Informationen zu diesen Eigenschaften finden Sie auf den MDN-Referenzseiten für {{cssxref("display")}} und {{cssxref("max-width")}}.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die dieser hier ähnelt:

![Ein Mozilla-Logo, zentriert, sowie eine Überschrift und Absätze. Es sieht jetzt schön gestaltet aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltstreifen.](website-screenshot-final.png)

(Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie feststecken, können Sie immer Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In diesem Artikel haben wir nur an der Oberfläche von CSS gekratzt. Unsere [Kernmodule](/de/docs/Learn_web_development/Core), beginnend mit dem [CSS-Styling-Grundlagenmodul](/de/docs/Learn_web_development/Core/Styling_basics), werden es wesentlich detaillierter behandeln.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
