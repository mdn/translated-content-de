---
title: "CSS: Gestaltung des Inhalts"
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Stylesheets) ist der Code, der Webinhalte gestaltet. _Die Gestaltung des Inhalts_ führt Sie durch alles, was Sie für den Einstieg benötigen. Wir werden Fragen beantworten wie: Wie mache ich Text rot? Wie kann ich Inhalte an einer bestimmten Stelle im (Webseiten-) Layout anzeigen lassen? Wie kann ich meine Webseite mit Hintergrundbildern und Farben dekorieren?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Webseite nutzen werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Ziel und die Funktion von CSS.</li>
          <li>Die grundlegenden Teile der CSS-Syntax – Rulesets, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Grundlegende CSS-Funktionalitäten einschließlich Box-Modell, Farbänderungen und Schriftarten sowie Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Ähnlich wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** Mit CSS können Sie gezielt HTML-Elemente gestalten. Zum Beispiel wählt dieses CSS den Absatztext aus und ändert die Farbe zu Rot:

```css
p {
  color: red;
}
```

Probieren wir es aus!

1. Erstellen Sie in Ihrem Ordner `first-website` einen neuen Ordner namens `styles`.
2. Fügen Sie mit einem Texteditor die drei oben gezeigten CSS-Zeilen in eine neue Datei ein.
3. Speichern Sie die Datei in Ihrem Ordner `styles` mit dem Namen `style.css`.

Damit der Code funktioniert, müssen wir dieses CSS (oben) in Ihr HTML-Dokument einbinden. Andernfalls wird das Styling das Aussehen des HTML nicht ändern.

1. Öffnen Sie Ihre Datei `index.html`. Fügen Sie die folgende Zeile im Kopfbereich des HTML-Dokuments ein (zwischen den {{HTMLElement("head")}}-Tags und `</head>`):

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

2. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas wie das hier sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde mit unserem CSS rot gestaltet.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert.

## Anatomie eines CSS-Rulesets

Lassen Sie uns den CSS-Code für roten Absatztext analysieren, um zu verstehen, wie er funktioniert:

![CSS p declaration color red](css-declaration-small.png)

Die gesamte Struktur wird als **Ruleset** bezeichnet. (Der Begriff _Ruleset_ wird oft einfach als _Regel_ bezeichnet.) Beachten Sie die Namen der einzelnen Teile:

- Selektor
  - : Dies ist der HTML-Elementname am Anfang des Rulesets. Er definiert die Elemente, die gestaltet werden sollen (in diesem Beispiel {{HTMLElement("p")}}-Elemente). Um ein anderes Element zu gestalten, ändern Sie den Selektor.
- Deklaration
  - : Dies ist eine einzelne Regel wie `color: red;`. Sie gibt an, welche **Eigenschaften** des Elements gestaltet werden sollen.
- Eigenschaften
  - : Dies sind Merkmale eines HTML-Elements, deren Werte Sie ändern können, um das Aussehen anzupassen. (In diesem Beispiel ist `color` eine Eigenschaft der {{htmlelement("p")}}-Elemente.) In CSS wählen Sie, welche Eigenschaften Sie in der Regel beeinflussen möchten.
- Eigenschaftswert
  - : Rechts von der Eigenschaft – nach dem Doppelpunkt – steht der **Eigenschaftswert**. Damit wird ein bestimmtes Erscheinungsbild für eine gegebene Eigenschaft ausgewählt. (Zum Beispiel gibt es viele `color`-Werte zusätzlich zu `red`.)

Beachten Sie die weiteren wichtigen Teile der Syntax:

- Abgesehen vom Selektor muss jedes Ruleset von geschweiften Klammern umschlossen sein (`{}`).
- Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft von ihrem Wert oder ihren Werten zu trennen.
- Innerhalb jedes Rulesets müssen Sie ein Semikolon (`;`) verwenden, um jede Deklaration von der nächsten zu trennen.

Um mehrere Eigenschaftswerte in einem Ruleset zu modifizieren, schreiben Sie sie durch Semikolons getrennt, wie hier:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Mehrere Elemente auswählen

Sie können auch mehrere Elemente auswählen und ein einziges Ruleset auf alle anwenden. Trennen Sie mehrere Selektoren durch Kommata. Zum Beispiel:

```css
p,
li,
h1 {
  color: red;
}
```

### Verschiedene Arten von Selektoren

Es gibt viele verschiedene Selektortypen. Die obigen Beispiele verwenden **Elementselektoren**, die alle Elemente eines bestimmten Typs auswählen. Aber wir können auch spezifischere Auswahlen treffen. Hier sind einige der häufigeren Selektortypen:

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
        Das Element auf der Seite mit der angegebenen ID. Auf einer HTML-Seite
        sollte jeder ID-Wert einzigartig sein.
      </td>
      <td>
        <code>#my-id</code><br />wählt <code>&#x3C;p id="my-id"></code> oder
        <code>&#x3C;a id="my-id"></code>
      </td>
    </tr>
    <tr>
      <td>Klassenselektor</td>
      <td>
        Das/Die Element(e) auf der Seite mit der angegebenen Klasse. Mehrere
        Instanzen derselben Klasse können auf einer Seite vorkommen.
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
        <code>&#x3C;img src="my-image.png"></code>, aber nicht
        <code>&#x3C;img></code>
      </td>
    </tr>
    <tr>
      <td>Pseudo-Klassenselektor</td>
      <td>
        Die angegebenen Elemente, aber nur wenn sie im angegebenen Zustand
        sind. (Zum Beispiel, wenn ein Cursor über einen Link schwebt.)
      </td>
      <td>
        <code>a:hover</code><br />wählt <code>&#x3C;a></code>, aber nur wenn
        der Mauszeiger über den Link schwebt.
      </td>
    </tr>
  </tbody>
</table>

Es gibt noch viele Selektoren zu entdecken. Um mehr zu erfahren, lesen Sie unsere Selektor-Tutorials, beginnend mit [Basis-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

## Schriftarten und Text

Da wir einige CSS-Grundlagen erkundet haben, verbessern wir das Erscheinungsbild des Beispiels, indem wir weitere Regeln und Informationen zur Datei `style.css` hinzufügen.

1. Suchen Sie zuerst den [Output von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#font), den Sie zuvor aus [Wie wird Ihre Webseite aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) gespeichert haben. Fügen Sie das {{htmlelement("link")}}-Element irgendwo in den Kopfbereich Ihrer `index.html` ein (irgendwo zwischen den {{HTMLElement("head")}}-Tags und `</head>`). Es sieht etwa so aus:

   ```html
   <link
     href="https://fonts.googleapis.com/css?family=Open+Sans"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das die Schriftfamilie Open Sans für Ihre Webseite lädt.

2. Löschen Sie anschließend die bestehende Regel in Ihrer Datei `style.css`. Es war ein guter Test, aber wir wollen nicht mit viel rotem Text weitermachen.
3. Fügen Sie die folgenden Zeilen hinzu (unten gezeigt) und ersetzen Sie die Zuweisung von `font-family` mit Ihrer `font-family`-Auswahl aus [Wie wird Ihre Webseite aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#font). Die Eigenschaft `font-family` bezieht sich auf die Schriftart(en), die Sie für Text verwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die gesamte Seite. Da {{HTMLElement("html")}} das Elternelement der gesamten Seite ist, erben alle darin enthaltenen Elemente die gleiche `font-size` und `font-family`.

   ```css
   html {
     font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
     font-family:
       "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
   }
   ```

   > [!NOTE]
   > Alles zwischen `/*` und `*/` in CSS ist ein **CSS-Kommentar**. Der Browser ignoriert Kommentare beim Rendern des Codes. CSS-Kommentare sind eine Möglichkeit, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu schreiben.

4. Setzen wir nun Schriftgrößen für Elemente, die Text im HTML-Body enthalten ({{htmlelement("Heading_Elements", "&lt;h1&gt;")}}, {{htmlelement("li")}} und {{htmlelement("p")}}). Wir zentrieren auch die Überschrift. Schließlich erweitern wir das zweite Ruleset (unten) mit Einstellungen für Zeilenhöhe und Zeichenabstand, um den Hauptinhaltsblock besser lesbar zu machen.

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

Passen Sie die `px`-Werte nach Belieben an. Ihre Arbeit sollte aussehen wie hier:

![Ein Mozilla-Logo und einige Absätze. Eine Sans-Serif-Schriftart wurde gesetzt, die Schriftgrößen, Zeilenhöhe und Zeichenabstand angepasst, und die Hauptseitenüberschrift wurde zentriert.](website-screenshot-font-small.png)

## CSS: Alles über Boxen

Etwas, das Sie mit CSS zunehmend bemerken werden: Vieles davon dreht sich um Boxen. Dazu gehört das Festlegen von Größe, Farbe und Position. Die meisten HTML-Elemente auf Ihrer Seite können als Boxen betrachtet werden, die auf anderen Boxen liegen.

![Ein großer Stapel Boxen oder Kisten, übereinander gestapelt](boxes.jpg)

Foto von [https://www.geograph.org.uk/photo/3418115](https://www.geograph.org.uk/photo/3418115) Copyright © [Jim Barton](https://www.geograph.org.uk/profile/26362) [cc-by-sa/2.0](https://creativecommons.org/licenses/by-sa/2.0/)

CSS-Layout basiert hauptsächlich auf dem _Box-Modell_. Jede Box, die Platz auf Ihrer Seite einnimmt, hat Eigenschaften wie:

- `padding`, der Raum um den Inhalt. Im untenstehenden Beispiel ist es der Raum um den Absatztext.
- `border`, die feste Linie, die sich direkt außerhalb des Paddings befindet.
- `margin`, der Raum rund um die Außenseite des Rahmens.

![Drei ineinander verschachtelte Boxen. Von außen nach innen sind sie beschriftet mit Margin, Border und Padding](box-model.png)

In diesem Abschnitt verwenden wir außerdem:

- `width` (eines Elements).
- `background-color`, die Hintergrundfarbe eines Elements und seines Paddings.
- `color`, die Farbe des Inhalts eines Elements (normalerweise Text).
- `text-shadow` setzt einen Schlagschatten auf den Text innerhalb eines Elements.
- `display` legt den Anzeigemodus eines Elements fest (lesen Sie weiter, um mehr zu erfahren).

Fahren wir fort, indem wir weiteres CSS hinzufügen. Fügen Sie die neuen Regeln unten in `style.css` ein. Experimentieren Sie mit der Änderung von Werten, um zu sehen, was passiert.

### Die Farbe der Seite ändern

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode auf [die Farbe, die Sie in "Wie wird meine Webseite aussehen?" gewählt haben](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#theme_color).

### Den `body` gestalten

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Der obige Code setzt neue Werte für mehrere Eigenschaften des {{htmlelement("body")}}-Elements. Gehen wir die Werte Zeile für Zeile durch:

- `width: 600px;` Dies zwingt den Body, immer 600 Pixel breit zu sein.
- `margin: 0 auto;` Wenn Sie zwei Werte bei einer Eigenschaft wie `margin` oder `padding` setzen, betrifft der erste Wert die obere _und_ untere Seite des Elements (in diesem Fall `0`); der zweite Wert betrifft die linke _und_ rechte Seite. (Hier ist `auto` ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts aufteilt.) Sie können auch ein, zwei, drei oder vier Werte verwenden, wie in der [Margin-Syntax](/de/docs/Web/CSS/margin#syntax) dokumentiert.
- `background-color: #FF9500;` Diese Eigenschaft setzt die Hintergrundfarbe des Elements. In diesem Projekt wird eine rötlich-orange Farbe für das Body-Hintergrundfarbe verwendet, im Gegensatz zu Blau für das {{htmlelement("html")}}-Element. (Experimentieren Sie ruhig.)
- `padding: 0 20px 20px 20px;` Dies setzt vier Werte für das Padding. Ziel ist es, etwas Platz um den Inhalt zu schaffen. In diesem Beispiel gibt es kein Padding oben und 20 Pixel auf der rechten, unteren und linken Seite. Die Werte setzen von oben, rechts, unten, links, in dieser Reihenfolge. Wie bei `margin`, können Sie ein, zwei, drei oder vier Werte verwenden, wie in der [Padding-Syntax](/de/docs/Web/CSS/padding#syntax) dokumentiert.
- `border: 5px solid black;` Dies setzt Werte für die Breite, den Stil und die Farbe des Rahmens. In diesem Fall handelt es sich um einen durchgehenden schwarzen Rahmen mit einer Breite von fünf Pixeln, auf allen Seiten des Bodys.

### Positionierung und Gestaltung des Hauptseitentitels

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Möglicherweise ist Ihnen aufgefallen, dass oben im Body ein hässlicher Abstand vorhanden ist. Das liegt daran, dass Browser Default-Styling auf {{htmlelement("Heading_Elements", "h1")}}-Elemente (unter anderem) anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht besteht darin, rudimentäre Lesbarkeit für ungestylte Seiten zu gewährleisten. Um diesen Abstand zu entfernen, überschreiben wir das Standard-Styling des Browsers mit der Einstellung `margin: 0;`.

Als Nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel.

Danach setzen wir die Überschriftentextfarbe identisch mit der HTML-Hintergrundfarbe ein.

Schließlich setzt `text-shadow` einen Schatten auf den Textinhalt des Elements. Die vier Werte sind:

- Der erste Pixelwert legt den **horizontalen Versatz** des Schattens relativ zum Text fest: wie weit er sich horizontal bewegt.
- Der zweite Pixelwert legt den **vertikalen Versatz** fest: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert setzt den **Unscharfungsradius** des Schattens. Ein größerer Wert erzeugt einen unschärferen Schatten.
- Der vierte Wert setzt die Grundfarbe des Schattens.

Versuchen Sie, mit verschiedenen Werten zu experimentieren, um zu sehen, wie sie das Aussehen verändern.

### Das Bild zentrieren

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als Nächstes zentrieren wir das Bild, damit es besser aussieht. Wir könnten denselben Trick `margin: 0 auto` wie beim Body anwenden. Es gibt jedoch Unterschiede, die eine zusätzliche Einstellung erfordern, damit das CSS funktioniert.

Das {{htmlelement("body")}} ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt. Der auf ein Block-Element angewandte Rand wird von anderen Elementen auf der Seite respektiert. Im Gegensatz dazu sind Bilder **Inline**-Elemente; damit der Auto-Margin-Trick bei diesem Bild funktioniert, müssen wir ihm Block-Level-Verhalten mit `display: block;` zuweisen.

Schließlich fügen wir `max-width: 100%;` hinzu, um sicherzustellen, dass das Bild, wenn es größer als die für den Body festgelegte Breite (600 Pixel) ist, bei dieser Breite angezeigt wird und nicht größer.

> [!NOTE]
> Machen Sie sich keine allzu großen Sorgen, wenn Sie `display: block;` und die Unterschiede zwischen einem Block-Element und einem Inline-Element oder `max-width: 100%;` nicht vollständig verstehen. Diese werden Ihnen beim weiteren Studium von CSS klarer werden. Weitere Informationen zu diesen Eigenschaften finden Sie auf MDNs {{cssxref("display")}} und {{cssxref("max-width")}} Referenzseiten.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die ähnlich wie diese aussieht:

![Ein Mozilla-Logo, zentriert, und eine Überschrift sowie Absätze. Es sieht jetzt schön gestaltet aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für das zentrierte Hauptinhaltsband.](website-screenshot-final.png)

(Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/).) Wenn Sie Schwierigkeiten haben, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In diesem Artikel haben wir nur an der Oberfläche von CSS gekratzt. Unsere [Kernmodule](/de/docs/Learn_web_development/Core), beginnend mit dem [Modul zu den Grundlagen der CSS-Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics), werden dies viel ausführlicher behandeln.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
