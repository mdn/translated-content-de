---
title: "CSS: Stylen Sie den Inhalt"
short-title: Den Inhalt stylen
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte stylt. Dieser Artikel führt Sie durch ein grundlegendes Verständnis von CSS – wie es funktioniert und wie man das Aussehen und Gefühl der Inhaltsstruktur verbessern kann, die Sie im vorherigen Artikel erstellt haben.

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
          <li>Die grundlegenden Teile der CSS-Syntax – Rulesets, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Funktionalität von CSS, einschließlich Box-Modell, Änderung von Farben und Schriftarten und Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS wird verwendet, um HTML-Elemente zu stylen: Sie wählen die Elemente aus, die Sie stylen möchten, und legen Werte für deren Stileigenschaften fest, die definieren, wie sie aussehen werden.

Lassen Sie uns das grundlegende HTML-Beispiel aus dem Artikel [Den Inhalt erstellen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) erneut betrachten:

```html live-sample___basic-html live-sample___basic-css
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Dies wird allein wie folgt dargestellt:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Wenn wir etwas CSS in die Mischung aufnehmen, können wir ändern, wie das HTML aussieht. Das folgende Snippet wählt das {{htmlelement("p")}} Element aus und gibt ihm eine andere [Schriftart](/de/docs/Web/CSS/Reference/Properties/font-family) und eine rote Text{{cssxref("color")}}. Es wählt dann alle {{htmlelement("li")}} Elemente aus und gibt jedem eine grün-gelbe {{cssxref("background-color")}}, eine 1-Pixel breite schwarze {{cssxref("border")}} und einen 5-Pixel [Unterabstand](/de/docs/Web/CSS/Reference/Properties/margin-bottom):

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

Mit auf das HTML angewendetem CSS wird die Demo jetzt so dargestellt:

{{EmbedLiveSample("basic-css", "100%", "160px")}}

Wie Sie sehen können, konnten wir mit nur ein wenig CSS das Aussehen einer unscheinbaren Liste ändern.

CSS hat viele andere Funktionen, angefangen von der Angabe von Hintergrundbildern und -verläufen, über die Steuerung der Typografie und des Scrollverhaltens, bis hin zum Hinzufügen von Animationen und dem Erstellen ganzer Webseitenlayouts.

## CSS auf Ihr HTML anwenden

Wenn Sie CSS verwenden, ist das erste, worauf Sie achten müssen, dass Ihr CSS erfolgreich auf Ihr HTML angewendet wird. In diesem Abschnitt fügen wir Ihrem `first-website` ein CSS **Stylesheet** hinzu und wenden es auf Ihre Seite an.

1. Erstellen Sie in Ihrem `first-website` Ordner einen weiteren neuen Ordner namens `styles`.
2. Verwenden Sie einen Texteditor und fügen Sie das folgende CSS in eine neue Datei ein, die Ihren `<p>` Elementen eine rote Textfarbe geben wird. Es ist nützlich, mit etwas wie diesem zu beginnen, um zu testen, ob Ihr Stylesheet korrekt auf Ihr HTML angewendet wird.

   ```css
   p {
     color: red;
   }
   ```

3. Speichern Sie die Datei im `styles` Ordner mit dem Dateinamen `style.css`.
4. Öffnen Sie Ihre `index.html` Datei. Fügen Sie die folgende Zeile im Kopfteil des HTML-Dokuments ein (zwischen den {{HTMLElement("head")}} und `</head>` Tags):

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

5. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten so etwas sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde von unserem CSS rot gefärbt.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert. Wenn nicht, gehen Sie die obigen Schritte durch und überprüfen Sie sorgfältig, dass Sie jeden einzelnen korrekt befolgt haben.

## Grundlegende CSS-Syntax

Im vorherigen CSS-Beispiel wird `p` als **Selektor** bezeichnet – es wählt das bzw. die Elemente aus, die gestylt werden sollen. Insbesondere wählt `p` alle Absätze im HTML aus. Die Zeile innerhalb der geschweiften Klammern (`{ }`) wird als **Deklaration** bezeichnet – sie legt einen Wert für eine spezifische Eigenschaft fest. In diesem Fall ist die **Eigenschaft** `color`, die die Textfarbe der Absätze steuert, und der festgelegte **Eigenschaftswert** ist `red`.

Die gesamte Struktur wird als **Ruleset** bezeichnet. (Der Begriff _Ruleset_ wird oft einfach als _Rule_ bezeichnet.)

Werfen wir einen Blick auf ein weiteres Ruleset, dieses Mal mit mehreren Deklarationen:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

Innerhalb eines Rulesets müssen Sie ein Semikolon (`;`) verwenden, um eine Deklaration von der nächsten zu trennen. Innerhalb jeder Deklaration müssen Sie ein Doppelpunkt (`:`) verwenden, um die Eigenschaft und ihren Wert zu trennen.

Sie können auch mehrere Selektoren in einer Regel einbeziehen, getrennt durch Kommas, um mehrere Elemente auszuwählen. Zum Beispiel:

```css
p,
.my-class,
#my-id {
  color: red;
}
```

In dieser CSS-Regel haben wir einen **Element**- (oder **Typ**-)Selektor eingeschlossen, der ein spezifisches HTML-Element auswählt. Wir haben auch zwei andere Selektortypen eingeschlossen, die nicht relevant für den Rest dieses Tutorials sind. Wenn Sie neugierig sind, was sie tun, schauen Sie sich unseren [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) Leitfaden an.

> [!NOTE]
> Scrimbas [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in die CSS-Syntax.

## Den Text verbessern

Lassen Sie uns zu unserem Beispiel zurückkehren und CSS verwenden, um das Erscheinungsbild des Textes zu verbessern. Wir setzen eine neue Schriftart für die Seite und ändern einige Texteinstellungen für verschiedene Elemente.

1. Suchen Sie zuerst die [Ausgabe von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font), die Sie zuvor gespeichert haben. Wenn Sie noch keine Schriftart ausgewählt haben, folgen Sie dem Link und tun Sie es jetzt.
2. Fügen Sie die {{htmlelement("link")}} Elemente in den Kopfbereich Ihres `index.html` ein, direkt vor dem abschließenden `</head>` Tag. Sie sollten ungefähr so aussehen:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das vom Google Fonts Dienst gehostet wird und Ihre gewählte Schriftart lädt.

3. Gehen Sie als Nächstes zu Ihrer `style.css` Datei und löschen Sie die vorhandene Regel. Wir wollen nicht mehr, dass unsere Absätze rot sind.
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
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**, der vom Browser ignoriert wird. CSS-Kommentare sind eine Möglichkeit, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik zu hinterlassen, ohne zu beeinflussen, wie Ihre Webseite gerendert wird.

5. Ersetzen Sie die `font-family` Platzhalterzeile mit der `font-family` Zeile aus Ihrem Google Fonts Code, zum Beispiel:

   ```css
   font-family: "Roboto", sans-serif;
   ```

   Die `font-family` Eigenschaft legt die Schriftart(en) fest, die Sie auf Ihr HTML anwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die ganze Seite. Alle Elemente innerhalb des {{HTMLElement("html")}} Elements erben dieselbe `font-size` und `font-family`.

6. Lassen Sie uns nun einige Schrift- und Textstile auf unsere [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), {{htmlelement("li")}}, und {{htmlelement("p")}} Elemente anwenden. Wir werden neue {{cssxref("font-size")}} Werte für jedes Element festlegen. Wir zentrieren auch die Überschrift mit {{cssxref("text-align")}} und erhöhen den {{cssxref("line-height")}} und {{cssxref("letter-spacing")}} der Absätze und Listenelemente, um den Fließtext lesbarer zu machen.

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

7. Speichern Sie Ihren Code und laden Sie Ihr HTML in einem Browser (aktualisieren Sie es, wenn es bereits geöffnet ist). Ihr Zwischenstand sollte ungefähr so aussehen:

   ![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schriftart wurde eingestellt, die Schriftgrößen, Zeilenhöhe und Buchstabenzwischenraum wurden angepasst, und die Hauptseitenüberschrift wurde zentriert](website-screenshot-font-small.png)

   > [!NOTE]
   > Versuchen Sie, die `px` Werte anzupassen, bis Sie Schriftgrößen erhalten, die Ihnen für Ihre Überschrift und Ihren Fließtext gefallen.

## CSS dreht sich alles um Boxen

Etwas, das Sie bei der Verwendung von CSS bemerken werden, ist, dass sich vieles um Boxen dreht. Die meisten HTML-Elemente auf einer Seite können als Boxen betrachtet werden, die auf (oder neben) anderen Boxen sitzen. Sie können Werte für Größe, Farbe, Positionierung usw. für diese Boxen festlegen. Dies wird als [**das Box-Modell**](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) bezeichnet.

![Drei Boxen, die ineinander sitzen. Von außen nach innen sind sie mit margin, border und padding beschriftet](box-model.png)

Jede Box, die Platz auf Ihrer Seite einnimmt, hat Eigenschaften wie:

- {{cssxref("padding")}}: Der Raum um den Inhalt. Im vorherigen Beispiel ist es der Raum um den Paragrafentext.
- {{cssxref("border")}}: Die feste Linie direkt außerhalb des Paddings.
- {{cssxref("margin")}}: Der Raum außerhalb der Grenze.

In diesem Abschnitt verwenden wir auch die folgenden Eigenschaften, von denen Sie einige bereits gesehen haben:

- {{cssxref("width")}}: Die Breite eines Elements.
- {{cssxref("background-color")}}: Die Farbe hinter dem Inhalt und dem Padding eines Elements.
- {{cssxref("color")}}: Die Farbe des Inhalts eines Elements (in der Regel Text).
- {{cssxref("text-shadow")}}: Ein Schlagschatten auf dem Text innerhalb eines Elements.
- {{cssxref("display")}}: Der Anzeigemodus eines Elements (was im Wesentlichen darauf anzeigt, wie es angezeigt oder auf der Webseite positioniert wird).

In jedem der folgenden Abschnitte:

1. Fügen Sie den bereitgestellten CSS-Code am Ende Ihrer `style.css` Datei hinzu.
2. Speichern Sie die Datei und aktualisieren Sie Ihren Browser, um zu sehen, wie das CSS das HTML-Rendering beeinflusst hat.
3. Lesen Sie die bereitgestellte Erklärung, um Ihnen zu helfen, zu verstehen, wie das CSS funktioniert.
4. Wenn Sie abenteuerlustig sind, experimentieren Sie mit dem Ändern der Eigenschaftswerte, um Ihre Seite weiter anzupassen.

## Die Seitenfarbe ändern

Fügen Sie Folgendes hinzu:

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode in die Farbe, die Sie in [Was wird Ihre Webseite aussehen lassen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_theme_color) gewählt haben.

## Das Body-Element stylen

Fügen Sie als Nächstes diese Regel hinzu:

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Der obige Code setzt neue Werte für verschiedene Eigenschaften des {{htmlelement("body")}} Elements. Lassen Sie uns diese Zeilenweise durchgehen:

- `width: 600px;`: Dies erzwingt, dass der Body immer 600 Pixel breit ist.
- `margin: 0 auto;`: Wenn Sie zwei Werte für eine Eigenschaft wie `margin` oder `padding` festlegen, beeinflusst der erste Wert die Ober- und Unterseite des Elements (in diesem Fall auf `0` gesetzt); der zweite Wert beeinflusst die linke und rechte Seite. `auto` ist ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts aufteilt.
- `background-color: #FF9500;`: Dies setzt die Hintergrundfarbe des Elements. Unser Projekt verwendet eine rötlich-orange Farbe für die `<body>` Hintergrundfarbe, um mit dem Dunkelblau zu kontrastieren, das für das {{htmlelement("html")}} Element verwendet wird.
- `padding: 0 20px 20px 20px;`: Dies setzt vier Werte für das Padding. Unser Ziel ist es, etwas Platz um den Inhalt herum zu schaffen. In diesem Beispiel gibt es kein Padding oben am Body und 20 Pixel rechts, unten und links. Die Werte setzen das Padding oben, rechts, unten und links, in dieser Reihenfolge.
- `border: 5px solid black;`: Dies setzt Werte für die Breite, den Stil und die Farbe des Randes. In diesem Fall ist es ein 5 Pixel breiter schwarzer, durchgehender Rahmen um alle Seiten des Bodys.

### Ein Exkurs zu Kurzschreibweisen

CSS-Eigenschaftswerte, die mehrere Eigenschaften auf einmal setzen, werden als **Kurzschreibweisen** bezeichnet. Zum Beispiel ist `padding: 0 20px 20px 20px` äquivalent zu den folgenden vier Eigenschaften:

```css
padding-top: 0;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 20px;
```

> [!NOTE]
> Scrimbas [Rand/Padding Kurzschrift](https://scrimba.com/frontend-path-c0j/~0g?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ist eine interaktive Lektion, die eine praktische Einführung in die Verwendung von Rand- und Padding-Kurzschreibweise bietet.

## Den Titel der Hauptseite positionieren und stylen

Fügen Sie nun Folgendes hinzu:

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Vielleicht ist Ihnen ein hässlicher Spalt am oberen Rand des Bodys aufgefallen. Das passiert, weil Browser standardmäßig Styling auf das `<h1>` Element anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht dahinter ist, grundlegende Lesbarkeit für ungestylte Seiten bereitzustellen. Um den Spalt zu eliminieren, überschreiben wir das Standard-Styling des Browsers mit der Einstellung `margin: 0;`.

Als Nächstes setzen wir das obere und untere Padding der Überschrift auf 20 Pixel und setzen die Überschriftentextfarbe auf die des HTML-Hintergrunds.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens vom Text: wie weit er sich bewegt.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen verschwommeneren Schatten.
- Der vierte Wert setzt die Basisfarbe des Schattens.

## Das Bild zentrieren

Fügen Sie schließlich diese Regel ein:

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als Nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir können denselben `margin: 0 auto` Trick wie für den Body verwenden, aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, damit das CSS funktioniert.

Das {{htmlelement("body")}} Element ist ein **Blockelement**, was bedeutet, dass es Platz auf der Seite einnimmt und Rand, Padding und andere Box-Eigenschaften akzeptieren kann. {{htmlelement("img")}} (Bild) Elemente hingegen sind **Inline-Elemente**: standardmäßig akzeptieren sie Randwerte nicht auf dieselbe Weise wie Blockelemente. Damit der Auto-Rand-Trick auf dieses Bild funktioniert, müssen wir ihm durch Verwendung von `display: block;` ein Block-Level-Verhalten geben.

Schließlich setzen wir die {{cssxref("max-width")}} Eigenschaft auf `100%`, um sicherzustellen, dass wenn das Bild größer ist als die für den Body festgelegte `width` (600 Pixel), es auf `600px` beschränkt wird und sich nicht weiter dehnt.

> [!NOTE]
> Seien Sie nicht zu besorgt, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inline-Element oder `max-width: 100%;` nicht vollständig verstehen. Sie werden mehr Sinn machen, wenn Sie Ihr CSS-Studium fortsetzen.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die folgendermaßen aussieht:

![Ein Mozilla-Logo, zentriert und eine Überschrift und Absätze. Es sieht jetzt schön gestylt aus, mit einem blauen Hintergrund für die ganze Seite und einem orange Hintergrund für den zentrierten Hauptinhaltstreifen.](website-screenshot-final.png)

Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/). Wenn Sie steckenbleiben, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/main/styles/style.css) vergleichen.

In diesem Artikel haben wir nur an der Oberfläche von CSS gekratzt. Sie werden viel mehr in unserem [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) Kernmodul später im Kurs lernen.

## Siehe auch

- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _Learn HTML and CSS_ Kurs lehrt Ihnen HTML und CSS durch den Aufbau und die Bereitstellung von fünf großartigen Projekten, mit lustigen interaktiven Lektionen und Herausforderungen, die von sachkundigen Lehrern unterrichtet werden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
