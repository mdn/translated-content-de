---
title: CSS-Grundlagen
slug: Learn/Getting_started_with_the_web/CSS_basics
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte formatiert. _CSS-Grundlagen_ erklärt, was Sie benötigen, um loszulegen. Wir werden Fragen beantworten wie: Wie mache ich Text rot? Wie sorge ich dafür, dass Inhalte an einer bestimmten Position im (Webseiten-)Layout angezeigt werden? Wie gestalte ich meine Webseite mit Hintergrundbildern und -farben?

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** Mit CSS können Sie HTML-Elemente gezielt gestalten. Zum Beispiel wählt dieses CSS den Text von Absätzen aus und setzt die Farbe auf Rot:

```css
p {
  color: red;
}
```

Probieren wir es aus! Verwenden Sie einen Texteditor und fügen Sie die drei Zeilen CSS (oben) in eine neue Datei ein. Speichern Sie die Datei als `style.css` in einem Verzeichnis namens `styles`.

Damit der Code funktioniert, müssen wir dieses CSS (oben) noch auf Ihr HTML-Dokument anwenden. Andernfalls ändert sich das Aussehen des HTML nicht. (Wenn Sie unserem Projekt bisher noch nicht gefolgt sind, machen Sie hier eine Pause, um [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) und [HTML-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/HTML_basics) zu lesen.)

1. Öffnen Sie Ihre `index.html` Datei. Fügen Sie die folgende Zeile im Head (zwischen den {{HTMLElement("head")}} und `</head>` Tags) ein:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas Ähnliches sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde durch unser CSS rot gestaltet.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

### Anatomie eines CSS-Regelsatzes

Lassen Sie uns den CSS-Code für roten Absatztext zerlegen, um zu verstehen, wie er funktioniert:

![CSS p Deklaration Farbe rot](css-declaration-small.png)

Die gesamte Struktur wird **Regelsatz** genannt. (Der Begriff _Regelsatz_ wird oft einfach als _Regel_ bezeichnet.) Beachten Sie die Namen der einzelnen Teile:

- Selektor
  - : Dies ist der HTML-Elementname am Anfang des Regelsatzes. Er definiert das oder die zu stilisierenden Elemente (in diesem Beispiel {{HTMLElement("p")}}-Elemente). Um ein anderes Element zu stilisieren, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Sie gibt an, welche **Eigenschaften** des Elements Sie stylen möchten.
- Eigenschaften
  - : Diese sind Möglichkeiten, ein HTML-Element zu gestalten. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}}-Elemente.) In CSS wählen Sie, welche Eigenschaften Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft - nach dem Doppelpunkt - steht der **Eigenschaftswert**. Dieser wählt ein Aussehen aus vielen möglichen für eine gegebene Eigenschaft. (Zum Beispiel gibt es viele `color`-Werte zusätzlich zu `red`.)

Beachten Sie die anderen wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jeder Regelsatz in geschweifte Klammern eingeschlossen sein. (`{}`)
- Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- Innerhalb jedes Regelsatzes müssen Sie ein Semikolon (`;`) verwenden, um jede Deklaration von der nächsten zu trennen.

Um mehrere Eigenschaftswerte in einem Regelsatz zu modifizieren, schreiben Sie sie durch Semikolons getrennt, wie folgt:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

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

Es gibt viele verschiedene Arten von Selektoren. Die obigen Beispiele verwenden **Elementselektoren**, die alle Elemente eines bestimmten Typs auswählen. Aber wir können auch spezifischere Auswahlen treffen. Hier sind einige der häufigeren Arten von Selektoren:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Selektorname</th>
      <th scope="col">Was wählt es aus</th>
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
        Das Element auf der Seite mit der angegebenen ID. Auf einer gegebenen HTML-Seite
        sollte jeder Id-Wert eindeutig sein.
      </td>
      <td>
        <code>#my-id</code><br />wählt <code>&#x3C;p id="my-id"></code> oder
        <code>&#x3C;a id="my-id"></code>
      </td>
    </tr>
    <tr>
      <td>Klassenselektor</td>
      <td>
        Das oder die Elemente auf der Seite mit der angegebenen Klasse. Mehrere Instanzen
        derselben Klasse können auf einer Seite erscheinen.
      </td>
      <td>
        <code>.my-class</code><br />wählt
        <code>&#x3C;p class="my-class"></code> und
        <code>&#x3C;a class="my-class"></code>
      </td>
    </tr>
    <tr>
      <td>Attributselektor</td>
      <td>Das oder die Elemente auf der Seite mit dem angegebenen Attribut.</td>
      <td>
        <code>img[src]</code><br />wählt
        <code>&#x3C;img src="myimage.png"></code> aber nicht
        <code>&#x3C;img></code>
      </td>
    </tr>
    <tr>
      <td>Pseudoklassen-Selektor</td>
      <td>
        Das spezifizierte Element oder die Elemente, jedoch nur, wenn sie sich im
        angegebenen Zustand befinden. (Zum Beispiel, wenn ein Cursor über einen Link fährt.)
      </td>
      <td>
        <code>a:hover</code><br />wählt <code>&#x3C;a></code>, aber nur, wenn
        der Mauszeiger über dem Link schwebt.
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele weitere Selektoren zu entdecken. Um mehr zu erfahren, siehe den MDN [Selektoren-Leitfaden](/de/docs/Learn/CSS/Building_blocks/Selectors).

## Schriften und Text

Nachdem wir nun einige CSS-Grundlagen erkundet haben, lassen Sie uns das Erscheinungsbild des Beispiels verbessern, indem wir dem `style.css`-File mehr Regeln und Informationen hinzufügen.

1. Finden Sie zuerst die [Ausgabe von Google Fonts](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font), die Sie zuvor gespeichert haben, aus [Wie wird Ihre Webseite aussehen?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like). Fügen Sie das {{htmlelement("link")}}-Element irgendwo innerhalb des Heads Ihrer `index.html` hinzu (irgendwo zwischen den {{HTMLElement("head")}} und `</head>` Tags). Es sieht ungefähr so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das die Schriftfamilie Open Sans mit Ihrer Webseite lädt.

2. Löschen Sie als Nächstes die vorhandene Regel in Ihrer `style.css`-Datei. Es war ein guter Test, aber lassen Sie uns nicht mit viel rotem Text weitermachen.
3. Fügen Sie die folgenden Zeilen ein (unten gezeigt), wobei Sie die Zuordnung zu `font-family` mit Ihrer `font-family`-Auswahl aus [Wie wird Ihre Webseite aussehen?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font) ersetzen. Die Eigenschaft `font-family` bezieht sich auf die Schrift/Schriften, die Sie für Text verwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und -Schriftgröße für die gesamte Seite. Da {{HTMLElement("html")}} das übergeordnete Element der gesamten Seite ist, erben alle darin enthaltenen Elemente dieselbe `font-size` und `font-family`.

   ```css
   html {
     font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
     font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. CSS-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

4. Lassen Sie uns jetzt Schriftgrößen für Elemente festlegen, die Text im HTML-Body haben ({{htmlelement("Heading_Elements", "&lt;h1&gt;")}}, {{htmlelement("li")}}, und {{htmlelement("p")}}). Wir werden auch die Überschrift zentrieren. Schließlich erweitern wir den zweiten Regelsatz (unten) mit Einstellungen für Zeilenhöhe und Zeichenabstand, um den Textinhalt lesbarer zu machen.

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

Passen Sie die `px`-Werte nach Belieben an. Ihr Arbeitsfortschritt sollte so ähnlich aussehen:

![Ein Mozilla-Logo und einige Absätze. Eine sans-serif Schriftart wurde gesetzt, die Schriftgrößen, Zeilenhöhe und Zeichenabstand wurden angepasst und die Hauptüberschrift der Seite wurde zentriert.](website-screenshot-font-small.png)

## CSS: alles über Boxen

Etwas, das Ihnen beim Schreiben von CSS auffallen wird: Vieles dreht sich um Boxen. Dazu gehört das Festlegen von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als Boxen betrachtet werden, die auf anderen Boxen sitzen.

![Ein großer Stapel von Boxen oder Kisten, die aufeinander gestapelt sind](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

Das CSS-Layout basiert überwiegend auf dem _Box-Modell._ Jede Box, die Platz auf Ihrer Seite einnimmt, hat Eigenschaften wie:

- `padding`, den Abstand um den Inhalt. Im untenstehenden Beispiel ist es der Abstand um den Absatztext.
- `border`, die feste Linie, die sich direkt außerhalb des Paddings befindet.
- `margin`, den Abstand um die Außenseite des Randes.

![Drei Boxen, die ineinander liegen. Von außen nach innen sind sie mit margin, border und padding beschriftet](box-model.png)

In diesem Abschnitt verwenden wir auch:

- `width` (eines Elements).
- `background-color`, die Farbe hinter dem Inhalt und dem Padding eines Elements.
- `color`, die Farbe des Inhalts eines Elements (normalerweise Text).
- `text-shadow` setzt einen Schlagschatten auf den Text innerhalb eines Elements.
- `display` setzt den Anzeigemodus eines Elements. (Lesen Sie weiter, um mehr zu erfahren)

Um fortzufahren, lassen Sie uns mehr CSS hinzufügen. Fügen Sie diese neuen Regeln weiterhin unten in `style.css` hinzu. Experimentieren Sie damit, Werte zu ändern, um zu sehen, was passiert.

### Ändern der Seitenfarbe

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode in [die von Ihnen gewählte Farbe in Wie wird meine Webseite aussehen?](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#theme_color).

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

Es gibt mehrere Deklarationen für das {{htmlelement("body")}}-Element. Gehen wir diese Zeile für Zeile durch:

- `width: 600px;` Dies zwingt den Body immer 600 Pixel breit zu sein.
- `margin: 0 auto;` Wenn Sie zwei Werte bei einer Eigenschaft wie `margin` oder `padding` setzen, wirkt sich der erste Wert auf die obere _und_ untere Seite des Elements aus (setzt ihn in diesem Fall auf `0`); der zweite Wert beeinflusst die linke _und_ rechte Seite. (Hier ist `auto` ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig auf links und rechts verteilt). Sie können auch einen, zwei, drei oder vier Werte verwenden, wie in der [Margin-Syntax](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Dies setzt die Hintergrundfarbe des Elements. Dieses Projekt verwendet ein rötliches Orange für die Hintergrundfarbe des Bodys, im Gegensatz zu Dunkelblau für das {{htmlelement("html")}}-Element. (Fühlen Sie sich frei zu experimentieren.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für das Padding. Das Ziel ist es, etwas Platz um den Inhalt zu schaffen. In diesem Beispiel gibt es keinen oberen Rand am Body und 20 Pixel rechts, unten und links. Die Werte werden oben, rechts, unten, links in dieser Reihenfolge gesetzt. Wie bei `margin` können Sie ein, zwei, drei oder vier Werte verwenden, wie in der [Padding-Syntax](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt Werte für die Breite, den Stil und die Farbe des Randes. In diesem Fall ist es ein fünf Pixel breiter, solider schwarzer Rand, an allen Seiten des Bodys.

### Positionierung und Gestaltung des Hauptseitentitels

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Sie haben vielleicht bemerkt, dass es eine schreckliche Lücke oben im Body gibt. Das passiert, weil Browser Standardstile auf das {{htmlelement("Heading_Elements", "h1")}}-Element (unter anderem) anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht ist es, grundlegende Lesbarkeit für ungestylte Seiten bereitzustellen. Um die Lücke zu beseitigen, überschreiben wir das standardmäßige Styling des Browsers mit der Einstellung `margin: 0;`.

Als nächstes setzen wir den oberen und unteren Rand der Überschrift auf 20 Pixel.

Dann setzen wir den Überschriftentext auf dieselbe Farbe wie die HTML-Hintergrundfarbe.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an. Seine vier Werte sind:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens vom Text: wie weit er sich quer bewegt.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert setzt den **Weichzeichnungsradius** des Schattens. Ein größerer Wert erzeugt einen unschärfer aussehenden Schatten.
- Der vierte Wert setzt die Basisfarbe des Schattens.

Versuchen Sie, mit verschiedenen Werten zu experimentieren, um zu sehen, wie er das Erscheinungsbild verändert.

### Zentrieren des Bildes

```css
img {
  display: block;
  margin: 0 auto;
}
```

Als nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir könnten den Trick `margin: 0 auto` wie beim Body erneut verwenden. Es gibt jedoch Unterschiede, die eine zusätzliche Einstellung erfordern, um das CSS zum Laufen zu bringen.

Das {{htmlelement("body")}} ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt. Der Rand, der auf ein Blockelement angewendet wird, wird von anderen Elementen auf der Seite respektiert. Im Gegensatz dazu sind Bilder **Inline**-Elemente, damit der Auto-Rand-Trick auf diesem Bild funktioniert, müssen wir ihm blockweises Verhalten geben, indem wir `display: block;` verwenden.

> [!NOTE]
> Die obigen Anweisungen gehen davon aus, dass Sie ein Bild verwenden, das kleiner ist als die im Body gesetzte Breite. (600 Pixel) Wenn Ihr Bild größer ist, wird es den Body überschreiten und in den Rest der Seite überlaufen. Um dies zu beheben, können Sie entweder: 1) die Bildbreite mithilfe eines [Grafikeditors](https://en.wikipedia.org/wiki/Raster_graphics_editor) reduzieren, oder 2) CSS verwenden, um die Größe des Bildes zu ändern, indem Sie auf das `<img>`-Element eigenschaft {{cssxref("width")}} mit einem kleineren Wert setzen.

> [!NOTE]
> Seien Sie nicht zu besorgt, wenn Sie nicht vollständig verstehen, was `display: block;` oder die Unterschiede zwischen einem Blockelement und einem Inline-Element bedeutet. Es wird mehr Sinn machen, wenn Sie Ihr Studium von CSS fortsetzen. Weitere Informationen zu den verschiedenen Display-Werten finden Sie auf der MDN [Display-Referenzseite](/de/docs/Web/CSS/display).

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die so ähnlich aussieht wie diese:

![Ein Mozilla-Logo, zentriert, und eine Kopfzeile und Absätze. Es sieht jetzt schön gestylt aus, mit einem blauen Hintergrund für die ganze Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltstreifen.](website-screenshot-final.png)

(Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie nicht weiterkommen, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In dieser Übung haben wir nur die Oberfläche von CSS angekratzt. Um weiter zu gehen, siehe [HTML mit CSS gestalten lernen](/de/docs/Learn/CSS).

{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}
