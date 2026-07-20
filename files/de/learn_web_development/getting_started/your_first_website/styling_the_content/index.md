---
title: "CSS: Stilgestaltung des Inhalts"
short-title: Den Inhalt stilisieren
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte stilisiert. Dieser Artikel führt Sie durch ein grundlegendes Verständnis von CSS – wie es funktioniert und wie Sie das Aussehen und das Gefühl der Inhaltsstruktur verbessern, die Sie im vorherigen Artikel erstellt haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von CSS.</li>
          <li>Die grundlegenden Bestandteile der CSS-Syntax – Regelsets, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Häufige CSS-Funktionalität einschließlich Box-Modell, Farbund Schriftartenänderung und Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheetsprache.** CSS wird verwendet, um HTML-Elemente zu stylen: Sie wählen die Elemente aus, die Sie stylen möchten, und setzen Werte für deren Stileigenschaften, die definieren, wie sie aussehen werden.

Lassen Sie uns noch einmal das grundlegende HTML-Beispiel aus dem Artikel [Creating the content](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) betrachten:

```html live-sample___basic-html live-sample___basic-css
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Dies wird allein wie folgt gerendert:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Wenn wir etwas CSS hinzufügen, können wir das Aussehen des HTML ändern. Das folgende Snippet wählt das {{htmlelement("p")}}-Element aus und verleiht ihm eine andere [Schriftart](/de/docs/Web/CSS/Reference/Properties/font-family) und eine rote Textfarbe {{cssxref("color")}}. Es wählt dann alle {{htmlelement("li")}}-Elemente aus und gibt jedem einen grün-gelben {{cssxref("background-color")}}, einen 1-Pixel-dicken schwarzen {{cssxref("border")}} und einen 5-Pixel [unteren Rand](/de/docs/Web/CSS/Reference/Properties/margin-bottom):

```css live-sample___basic-css
p {
  font-family: sans-serif;
  color: red;
}

li {
  background-color: greenyellow;
  border: 1px solid black;
  margin-bottom: 5px;
}
```

Mit dem auf das HTML angewendeten CSS wird das Demo jetzt so gerendert:

{{EmbedLiveSample("basic-css", "100%", "160px")}}

Wie Sie sehen können, konnten wir mit nur etwas CSS das Erscheinungsbild einer einfach aussehenden Liste ändern.

CSS hat viele weitere Funktionen, von der Angabe von Hintergrundbildern und Verläufen bis hin zur Steuerung von Typografie und Scrollverhalten sowie zur Hinzufügung von Animationen und dem Aufbau kompletter Webseitenlayouts.

## CSS auf Ihr HTML anwenden

Wenn Sie CSS verwenden, ist das Erste, was Sie sicherstellen müssen, dass Ihr CSS erfolgreich auf Ihr HTML angewendet wird. In diesem Abschnitt fügen wir Ihrem `first-website` ein CSS-**Stylesheet** hinzu und wenden es auf Ihre Seite an.

1. Erstellen Sie in Ihrem `first-website`-Ordner einen weiteren neuen Ordner namens `styles`.
2. Verwenden Sie einen Texteditor, um das folgende CSS in eine neue Datei einzufügen, die Ihren `<p>`-Elementen eine rote Textfarbe verleiht. Es ist nützlich, mit etwas derartigem zu beginnen, um zu testen, ob Ihr Stylesheet korrekt auf Ihr HTML angewendet wird.

   ```css
   p {
     color: red;
   }
   ```

3. Speichern Sie die Datei im `styles`-Ordner mit dem Dateinamen `style.css`.
4. Öffnen Sie Ihre `index.html`-Datei. Fügen Sie die folgende Zeile in den HTML-Kopfbereich (zwischen den {{HTMLElement("head")}} und `</head>`-Tags) ein:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

5. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Es sollte in etwa so aussehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde von unserem CSS rot gefärbt.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert. Wenn nicht, gehen Sie die obigen Schritte durch und überprüfen Sie sorgfältig, ob Sie jeden Schritt korrekt befolgt haben.

## Grundlagen der CSS-Syntax

Im vorhergehenden CSS-Beispiel wird `p` als **Selektor** bezeichnet – er wählt das/die zu stylende(n) Element(e) aus. Insbesondere wählt `p` alle Absätze im HTML aus. Die Zeile innerhalb der geschweiften Klammern (`{ }`) wird als **Deklaration** bezeichnet – sie setzt einen Wert für eine bestimmte Eigenschaft. In diesem Fall ist die **Eigenschaft** `color`, die die Textfarbe der Absätze steuert, und der gesetzte **Eigenschaftswert** ist `red`.

Die gesamte Struktur wird als **Regelset** bezeichnet. (Der Begriff _Regelset_ wird oft einfach als _Regel_ bezeichnet.)

Schauen wir uns ein anderes Regelset an, diesmal mit mehreren Deklarationen:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

Innerhalb eines Regelsets müssen Sie ein Semikolon (`;`) verwenden, um eine Deklaration von der nächsten zu trennen. Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft und deren Wert zu trennen.

Sie können auch mehrere Selektoren in einer Regel einschließen, getrennt durch Kommas, um mehrere Elemente auszuwählen. Zum Beispiel:

```css
p,
.my-class,
#my-id {
  color: red;
}
```

In dieser CSS-Regel haben wir einen **Element**- (oder **Typ**-) Selektor, der ein bestimmtes HTML-Element auswählt. Wir haben auch zwei andere Selektorarten eingeschlossen, die für den Rest dieses Tutorials nicht relevant sind. Wenn Sie neugierig darauf sind, was sie tun, werfen Sie einen Blick auf unseren [Grundlagen der Selektoren-Leitfaden](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

> [!NOTE]
> Scrimbas [Write your first lines of CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in die CSS-Syntax.

## Verbesserung des Textes

Lassen Sie uns zu unserem Beispiel zurückkehren und CSS verwenden, um das Aussehen des Textes zu verbessern. Wir werden eine neue Schriftart für die Seite festlegen und einige Texteinstellungen für verschiedene Elemente ändern.

1. Finden Sie zuerst den [Ausgabe von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font), den Sie zuvor gespeichert haben. Wenn Sie noch keine Schriftart ausgewählt haben, folgen Sie dem Link und tun Sie dies jetzt.
2. Fügen Sie die {{htmlelement("link")}}-Elemente in Ihrem `index.html` im {{HTMLElement("head")}} kurz vor dem schließenden `</head>`-Tag ein. Sie sollten in etwa so aussehen:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
     rel="stylesheet" />
   ```

   Dieser Code verbindet Ihre Seite mit einem Stylesheet, das von dem Google Fonts-Dienst gehostet wird, der Ihre ausgewählte Schriftart lädt.

3. Gehen Sie als Nächstes zu Ihrer `style.css`-Datei und löschen Sie die vorhandene Regel. Wir wollen nicht mehr, dass unsere Absätze rot sind.
4. Fügen Sie die folgenden Zeilen zu `style.css` hinzu:

   ```css
   html {
     /* px means "pixels". The base font size is now 10 pixels high */
     font-size: 10px;
     /* Replace PLACEHOLDER with the font-family property value you got from Google Fonts */
     font-family: PLACEHOLDER;
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**, der vom Browser ignoriert wird. CSS-Kommentare sind eine Möglichkeit für Sie, hilfreiche Anmerkungen zu Ihrem Code oder Ihrer Logik einzufügen, ohne die Darstellung Ihrer Webseite zu beeinflussen.

5. Ersetzen Sie die `font-family`-Platzhalterzeile durch die `font-family`-Zeile aus Ihrem Google Fonts-Code, zum Beispiel:

   ```css
   font-family: "Roboto", sans-serif;
   ```

   Die Eigenschaft `font-family` setzt die Schriftart(en), die Sie auf Ihr HTML anwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die gesamte Seite. Alle Elemente innerhalb des {{HTMLElement("html")}}-Elements erben die gleiche `font-size` und `font-family`.

6. Jetzt setzen wir einige Schrift- und Textstile auf unsere [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), {{htmlelement("li")}} und {{htmlelement("p")}}-Elemente. Wir werden neue {{cssxref("font-size")}}-Werte für jedes Element festlegen. Wir zentrieren auch die Überschrift mithilfe von {{cssxref("text-align")}} und vergrößern die {{cssxref("line-height")}} und {{cssxref("letter-spacing")}} der Absätze und Listenelemente, um den Hauptinhalt lesbarer zu machen.

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

7. Speichern Sie Ihren Code und laden Sie Ihr HTML in einem Browser (aktualisieren Sie ihn, wenn Sie ihn von vorher geöffnet hatten). Ihr Work-in-Progress sollte in etwa so aussehen:

   ![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schriftart wurde eingestellt, die Schriftgrößen, Zeilenhöhe und der Buchstabenabstand sind angepasst, und die Hauptseite wurde zentriert](website-screenshot-font-small.png)

   > [!NOTE]
   > Versuchen Sie, die `px`-Werte anzupassen, bis Sie Schriftgrößen finden, die Ihnen für Ihre Überschrift und Ihren Fließtext gefallen.

## CSS dreht sich alles um Boxen

Etwas, das Ihnen an CSS auffallen wird, wenn Sie es häufiger verwenden, ist, dass sich vieles um Boxen dreht. Die meisten HTML-Elemente auf einer Seite können als Boxen betrachtet werden, die auf (oder neben) anderen Boxen sitzen. Sie können Werte auf diesen Boxen festlegen für Größe, Farbe, Positionierung usw. Dies wird als [**Box-Modell**](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) bezeichnet.

![Drei Boxen, die ineinander liegen. Von außen nach innen sind sie mit Margin, Border und Padding beschriftet](box-model.png)

Jede Box, die auf Ihrer Seite Platz einnimmt, hat Eigenschaften wie:

- {{cssxref("padding")}}: Der Raum um den Inhalt. Im vorherigen Beispiel ist dies der Raum um den Absatztext.
- {{cssxref("border")}}: Die solide Linie direkt außerhalb des Paddings.
- {{cssxref("margin")}}: Der Raum außerhalb des Rahmens.

In diesem Abschnitt verwenden wir auch die folgenden Eigenschaften, von denen einige Ihnen bereits bekannt sind:

- {{cssxref("width")}}: Die Breite eines Elements.
- {{cssxref("background-color")}}: Die Farbe hinter dem Inhalt und dem Innenabstand eines Elements.
- {{cssxref("color")}}: Die Farbe des Inhalts eines Elements (üblicherweise Text).
- {{cssxref("text-shadow")}}: Ein Schlagschatten auf dem Text innerhalb eines Elements.
- {{cssxref("display")}}: Der Anzeigemodus eines Elements (bezieht sich im Wesentlichen darauf, wie es auf der Webseite erscheint oder angeordnet ist).

In den folgenden Abschnitten:

1. Fügen Sie den bereitgestellten CSS-Code am Ende Ihrer `style.css`-Datei hinzu.
2. Speichern Sie die Datei und aktualisieren Sie Ihren Browser, um zu sehen, wie das CSS die HTML-Darstellung beeinflusst hat.
3. Lesen Sie die bereitgestellte Erklärung, um zu verstehen, wie das CSS funktioniert.
4. Wenn Sie experimentierfreudig sind, versuchen Sie, die Eigenschaftswerte zu ändern, um Ihre Seite weiter anzupassen.

## Die Seitenfarbe ändern

Fügen Sie Folgendes hinzu:

```css
html {
  background-color: #00539f;
}
```

Diese Regel legt eine Hintergrundfarbe für die gesamte Seite fest. Ändern Sie den Farbcode in die Farbe, die Sie in [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_theme_color) gewählt haben.

## Das Styling des Körpers

Fügen Sie als nächstes diese Regel hinzu:

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Der obige Code setzt neue Werte für mehrere Eigenschaften des {{htmlelement("body")}}-Elements. Lassen Sie uns diese Zeilenweise durchgehen:

- `width: 600px;`: Dies zwingt den Körper, immer 600 Pixel breit zu sein.
- `margin: 0 auto;`: Wenn Sie zwei Werte für eine Eigenschaft wie `margin` oder `padding` setzen, betrifft der erste Wert die obere _und_ untere Seite des Elements (setzt es in diesem Fall auf `0`); der zweite Wert betrifft die linke _und_ rechte Seite. `auto` ist ein spezieller Wert, der den verfügbaren horizontalen Platz gleichmäßig zwischen links und rechts aufteilt.
- `background-color: #FF9500;`: Dies setzt die Hintergrundfarbe des Elements. Unser Projekt verwendet ein rötliches Orange für die `<body>`-Hintergrundfarbe, um mit dem dunklen Blau zu kontrastieren, das für das {{htmlelement("html")}}-Element verwendet wird.
- `padding: 0 20px 20px 20px;`: Dies setzt vier Werte für das Padding. Das Ziel ist es, etwas Platz um den Inhalt zu schaffen. In diesem Beispiel gibt es kein Padding am oberen Rand des Körpers und 20 Pixel auf der rechten, unteren und linken Seite. Die Werte setzen oben, rechts, unten und links das Padding, in dieser Reihenfolge.
- `border: 5px solid black;`: Dies setzt die Werte für die Breite, den Stil und die Farbe des Rahmens. In diesem Fall handelt es sich um einen 5-Pixel-breiten, durchgehenden schwarzen Rahmen um alle Seiten des Körpers.

### Ein Exkurs zu Kurzschreibweise-Eigenschaften

CSS-Eigenschaftswerte, die mehrere Eigenschaften auf einmal setzen, werden als **Kurzschreibweise-Eigenschaften** bezeichnet. Zum Beispiel ist `padding: 0 20px 20px 20px` äquivalent zu den folgenden vier Eigenschaften:

```css
padding-top: 0;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 20px;
```

> [!NOTE]
> Scrimbas [Margin/padding shorthand](https://scrimba.com/frontend-path-c0j/~0g?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ist eine interaktive Lektion, die eine praktische Einführung in die Verwendung der Kurzschreibweise von Margin und Padding bietet.

## Positionierung und Styling des Hauptseitentitels

Fügen Sie nun dies hinzu:

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Vielleicht haben Sie bemerkt, dass oben im Körper eine hässliche Lücke ist. Das passiert, weil Browsernieren standardmäßiges Styling auf das `<h1>`-Element anwenden. Das mag wie eine schlechte Idee erscheinen, aber der Zweck ist es, eine grundlegende Lesbarkeit für nicht gestaltete Seiten bereitzustellen. Um die Lücke zu beseitigen, überschreiben wir das Standardstyling des Browsers mit der Einstellung `margin: 0;`.

Als nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel und setzen die Überschriftentextfarbe auf die gleiche Farbe wie die HTML-Hintergrundfarbe.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens vom Text: wie weit er sich quer bewegt.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen verschwommen aussehenden Schatten.
- Der vierte Wert setzt die Grundfarbe des Schattens.

## Bild zentrieren

Fügen Sie schließlich diese Regel ein:

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir können denselben `margin: 0 auto`-Trick wie beim Körper verwenden, aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, damit das CSS funktioniert.

Das {{htmlelement("body")}}-Element ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt und Margin-, Padding- und andere Box-Eigenschaften akzeptieren kann. {{htmlelement("img")}} (Bild)-Elemente hingegen sind **Inline**-Elemente: Standardmäßig akzeptieren sie keine Margin-Werte auf dieselbe Weise wie Block-Elemente. Damit der automatische Margin-Trick für dieses Bild funktioniert, müssen wir ihm Block-Level-Verhalten geben, indem wir `display: block;` verwenden.

Schließlich setzen wir die {{cssxref("max-width")}}-Eigenschaft auf `100%`, um sicherzustellen, dass, wenn das Bild größer ist als die für den Körper festgelegte `width` (600 Pixel), es auf `600px` begrenzt wird und sich nicht weiter ausdehnt.

> [!NOTE]
> Seien Sie nicht allzu besorgt, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inline-Element oder `max-width: 100%;` nicht vollständig verstehen. Diese werden mehr Sinn machen, während Sie Ihr CSS-Studium fortsetzen.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die in etwa so aussieht:

![Ein Mozilla-Logo, zentriert, und eine Überschrift und Absätze. Es sieht jetzt schön stilisiert aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltsstreifen.](website-screenshot-final.png)

Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/). Wenn Sie stecken bleiben, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/main/styles/style.css) vergleichen.

In diesem Artikel haben wir nur die Oberfläche von CSS angekratzt. Sie lernen viel mehr in unserem [Grundlagen der CSS-Styling](/de/docs/Learn_web_development/Core/Styling_basics) Kernmodul später im Kurs.

## Siehe auch

- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn HTML and CSS_ Kurs von [Scrimba](https://scrimba.com?via=mdn) lehrt Ihnen HTML und CSS durch den Aufbau und die Bereitstellung von fünf großartigen Projekten mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von sachkundigen Lehrern unterrichtet werden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
