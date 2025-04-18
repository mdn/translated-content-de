---
title: "CSS: Styling the content"
short-title: Inhalt gestalten
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: 04b891269af86287313a1d6e28423560a674cd2d
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte gestaltet. Dieser Artikel führt Sie durch ein grundlegendes Verständnis von CSS – wie es funktioniert und wie Sie das Aussehen und die Haptik der Inhaltsstruktur verbessern können, die Sie im vorherigen Artikel erstellt haben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computerbetriebssystems, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von CSS.</li>
          <li>Die grundlegenden Teile der CSS-Syntax – Regelgruppen, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Gängige CSS-Funktionalitäten einschließlich Box-Modell, Änderung von Farben und Schriftarten sowie Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS wird verwendet, um HTML-Elemente zu gestalten: Sie wählen die Elemente aus, die Sie gestalten möchten, und legen Werte für deren Stileigenschaften fest, die bestimmen, wie sie aussehen werden.

Lassen Sie uns das einfache HTML-Beispiel aus dem Artikel [Inhalte erstellen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) noch einmal ansehen:

```html live-sample___basic-html live-sample___basic-css
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Das wird auf sich allein gestellt wie folgt gerendert:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Wenn wir etwas CSS hinzufügen, können wir das Aussehen des HTML ändern. Das folgende Snippet wählt das {{htmlelement("p")}}-Element aus und verleiht ihm eine andere [Schriftart](/de/docs/Web/CSS/font-family) und eine rote Text-{{cssxref("color")}}. Anschließend werden alle {{htmlelement("li")}}-Elemente ausgewählt und erhalten jeweils eine grün-gelbe {{cssxref("background-color")}}, einen einfarbig schwarzen {{cssxref("border")}} von einem Pixel und einen 5-Pixel-[unteren Rand](/de/docs/Web/CSS/margin-bottom):

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

Mit dem CSS, das auf das HTML angewendet wurde, rendert die Demo jetzt so:

{{EmbedLiveSample("basic-css", "100%", "160px")}}

Wie Sie sehen können, konnten wir mit nur ein wenig CSS das Erscheinungsbild einer schlicht aussehenden Liste ändern.

CSS hat viele weitere Funktionen, von der Angabe von Hintergrundbildern und -verläufen bis hin zur Steuerung von Typografie und Scrollverhalten, zum Hinzufügen von Animationen und zum Erstellen ganzer Webseiten-Layouts.

## CSS auf Ihr HTML anwenden

Wenn Sie CSS verwenden, ist das erste, was Sie richtig machen sollten, sicherzustellen, dass Ihr CSS erfolgreich auf Ihr HTML angewendet wird. In diesem Abschnitt fügen wir ein CSS-**Stylesheet** zu Ihrer `first-website` hinzu und wenden es auf Ihre Seite an.

1. Erstellen Sie in Ihrem `first-website`-Ordner einen weiteren neuen Ordner mit dem Namen `styles`.
2. Fügen Sie unter Verwendung eines Texteditors das folgende CSS in eine neue Datei ein, das Ihren `<p>`-Elementen eine rote Textfarbe verleiht. Es ist nützlich, mit so etwas zu beginnen, um zu testen, ob Ihr Stylesheet korrekt auf Ihr HTML angewendet wird.

   ```css
   p {
     color: red;
   }
   ```

3. Speichern Sie die Datei im `styles`-Ordner mit dem Dateinamen `style.css`.
4. Öffnen Sie Ihre `index.html`-Datei. Fügen Sie die folgende Zeile innerhalb des HTML-Kopfs (zwischen den {{HTMLElement("head")}}- und `</head>`-Tags) ein:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

5. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten so etwas sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde durch unser CSS rot gefärbt.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert. Wenn nicht, gehen Sie die obigen Schritte durch und prüfen Sie sorgfältig, ob Sie jeden einzelnen korrekt befolgt haben.

## Grundlagen der CSS-Syntax

Im vorherigen CSS-Beispiel wird `p` als **Selektor** bezeichnet — es wählt die zu gestaltenden Elemente aus. Insbesondere wählt `p` alle Absätze im HTML aus. Die Zeile innerhalb der geschweiften Klammern (`{ }`) wird als **Deklaration** bezeichnet – sie legt einen Wert für eine bestimmte Eigenschaft fest. In diesem Fall ist die **Eigenschaft** `color`, die die Textfarbe der Absätze steuert, und der festgelegte **Eigenschaftswert** ist `red`.

Die gesamte Struktur wird als **Regelgruppe** bezeichnet. (Der Begriff _Regelgruppe_ wird oft einfach als _Regel_ bezeichnet.)

Schauen wir uns eine andere Regelgruppe an, diesmal mit mehreren Deklarationen:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

Innerhalb einer Regelgruppe müssen Sie ein Semikolon (`;`) verwenden, um eine Deklaration von der nächsten zu trennen. Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft und ihren Wert zu trennen.

Sie können auch mehrere Selektoren in einer Regel durch Kommas getrennt einschließen, um mehrere Elemente auszuwählen. Zum Beispiel:

```css
p,
.my-class,
#my-id {
  color: red;
}
```

In dieser CSS-Regel haben wir einen **Element**- (oder **Typ**-)Selektor aufgenommen, der ein bestimmtes HTML-Element auswählt. Wir haben auch zwei andere Selektortypen aufgenommen, die für den Rest dieses Tutorials nicht relevant sind. Wenn Sie neugierig sind, was sie tun, sehen Sie sich unseren [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)-Leitfaden an.

> [!NOTE]
> Scrimbas [Schreiben Sie Ihre ersten Zeilen in CSS!](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) <sup>[_MDN Learning Partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in die CSS-Syntax.

## Verbesserung des Textes

Kehren wir zu unserem Beispiel zurück und verwenden CSS, um das Erscheinungsbild des Textes zu verbessern. Wir stellen eine neue Schriftart für die Seite ein und ändern einige Texteinstellungen für verschiedene Elemente.

1. Finden Sie zunächst die [Ausgabe von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font), die Sie zuvor gespeichert haben. Wenn Sie noch keine Schriftart ausgewählt haben, folgen Sie dem Link und tun Sie dies jetzt.
2. Fügen Sie die {{htmlelement("link")}}-Elemente in den {{HTMLElement("head")}} Ihrer `index.html` gerade vor dem schließenden `</head>`-Tag ein. Sie sollten ungefähr so aussehen:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das vom Google Fonts-Dienst gehostet wird und Ihre ausgewählte Schriftart lädt.

3. Löschen Sie als Nächstes die bestehende Regel in Ihrer `style.css`-Datei. Wir möchten nicht mehr, dass unsere Absätze rot sind.
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
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**, der vom Browser ignoriert wird. CSS-Kommentare sind eine Möglichkeit für Sie, nützliche Notizen über Ihren Code oder Ihre Logik zu machen, ohne dass dies die Darstellung Ihrer Webseite beeinflusst.

5. Ersetzen Sie die Platzhalterzeile `font-family` durch die Linie `font-family` aus Ihrem Google Fonts-Code, zum Beispiel:

   ```css
   font-family: "Roboto", sans-serif;
   ```

   Die `font-family`-Eigenschaft legt die Schriftart(en) fest, die Sie auf Ihr HTML anwenden möchten. Diese Regel definiert eine globale grundlegende Schriftart und -größe für die gesamte Seite. Alle Elemente innerhalb des {{HTMLElement("html")}}-Elements erben dieselbe `font-size` und `font-family`.

6. Lassen Sie uns nun einige Schrift- und Texteinstellungen auf unsere [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), {{htmlelement("li")}} und {{htmlelement("p")}}-Elemente festlegen. Wir setzen neue Werte für {{cssxref("font-size")}} für jedes Element. Außerdem zentrieren wir die Überschrift mit {{cssxref("text-align")}} und erhöhen die {{cssxref("line-height")}} sowie den {{cssxref("letter-spacing")}} der Absätze und Listenelemente, um den Fließtext besser lesbar zu machen.

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

7. Speichern Sie Ihren Code und laden Sie Ihr HTML in einem Browser (aktualisieren Sie es, wenn es von vorher noch geöffnet ist). Ihr Arbeitsstand sollte in etwa so aussehen:

   ![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schriftart wurde eingestellt, die Schriftgrößen, der Zeilenabstand und der Buchstabenabstand wurden angepasst und die Hauptseitenüberschrift wurde zentriert.](website-screenshot-font-small.png)

   > [!NOTE]
   > Versuchen Sie, die `px`-Werte anzupassen, bis Sie Schriftgrößen erhalten, die Ihnen für Ihre Überschrift und Ihren Fließtext gefallen.

## Bei CSS dreht sich alles um Boxen

Eine Sache, die Ihnen auffallen wird, je mehr Sie CSS verwenden, ist, dass ein Großteil davon Boxen betrifft. Die meisten HTML-Elemente auf einer Seite können als Kästchen betrachtet werden, die auf (oder neben) anderen Kästchen sitzen. Sie können diese Kästchen für Größe, Farbe, Positionierung usw. einstellen. Dies wird als [**das Box-Modell**](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) bezeichnet.

![Drei Boxen, die ineinander liegen. Von außen nach innen sind sie als Rand, Rahmen und Auffüllung gekennzeichnet.](box-model.png)

Jedes Kästchen, das Platz auf Ihrer Seite einnimmt, verfügt über Eigenschaften wie:

- {{cssxref("padding")}}: Der Raum um den Inhalt. Im vorherigen Beispiel ist es der Raum um den Absatztext herum.
- {{cssxref("border")}}: Die durchgehende Linie unmittelbar außerhalb der Auffüllung.
- {{cssxref("margin")}}: Der Raum außerhalb des Rahmens.

In diesem Abschnitt verwenden wir auch die folgenden Eigenschaften, von denen Sie einige bereits zuvor gesehen haben:

- {{cssxref("width")}}: Die Breite eines Elements.
- {{cssxref("background-color")}}: Die Farbe hinter dem Inhalt und der Auffüllung eines Elements.
- {{cssxref("color")}}: Die Farbe des Inhalts eines Elements (normalerweise Text).
- {{cssxref("text-shadow")}}: Ein Schlagschatten auf dem Text innerhalb eines Elements.
- {{cssxref("display")}}: Der Darstellungsmodus eines Elements (die Grundeinstellung, wie es auf der Webseite angezeigt oder gestaltet wird).

In jedem der folgenden Abschnitte:

1. Fügen Sie den bereitgestellten CSS-Code unten in Ihrer `style.css`-Datei hinzu.
2. Speichern Sie die Datei und aktualisieren Sie Ihren Browser, um zu sehen, wie sich das CSS auf das HTML-Rendering auswirkt.
3. Lesen Sie die bereitgestellte Erklärung, um besser zu verstehen, wie das CSS funktioniert.
4. Wenn Sie sich abenteuerlustig fühlen, experimentieren Sie mit dem Ändern der Eigenschaftswerte, um Ihre Seite weiter anzupassen.

## Die Seitenfarbe ändern

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode in die Farbe, die Sie in [Wie wird Ihre Webseite aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_theme_color) ausgewählt haben.

## Den Hauptinhalt stilisieren

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

- `width: 600px;`: Damit wird der Body immer 600 Pixel breit.
- `margin: 0 auto;`: Wenn Sie zwei Werte für eine Eigenschaft wie `margin` oder `padding` festlegen, wirkt sich der erste Wert sowohl auf die obere _als auch_ die untere Seite des Elements aus (in diesem Fall wird er auf `0` gesetzt); der zweite Wert wirkt sich auf die linke _als auch_ die rechte Seite aus. `auto` ist ein spezieller Wert, der den verfügbaren horizontalen Platz gleichmäßig zwischen links und rechts aufteilt.
- `background-color: #FF9500;`: Dies setzt die Hintergrundfarbe des Elements. Unser Projekt verwendet ein rötliches Orange für die `<body>`-Hintergrundfarbe, um einen Kontrast zu dem dunklen Blau zu schaffen, das für das {{htmlelement("html")}}-Element verwendet wird.
- `padding: 0 20px 20px 20px;`: Dies setzt vier Werte für die Auffüllung. Das Ziel ist es, etwas Raum um den Inhalt zu schaffen. In diesem Beispiel gibt es keine Auffüllung oben im body und 20 Pixel auf der rechten, unteren und linken Seite. Die Werte setzen Auffüllung für oben, rechts, unten und links in dieser Reihenfolge.
- `border: 5px solid black;`: Dies setzt Werte für die Breite, den Stil und die Farbe des Rahmens. In diesem Fall ist es ein 5-Pixel-breiter massiver schwarzer Rahmen um alle Seiten des Body.

## Die Hauptüberschrift auf der Seite positionieren und gestalten

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Sie haben vielleicht bemerkt, dass oben im Body ein hässlicher Spalt existiert. Das passiert, weil Browser standardmäßig eine Stilsetzung auf das `<h1>`-Element anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht besteht darin, grundlegende Lesbarkeit für ungestaltete Seiten zu bieten. Um den Spalt zu eliminieren, überschreiben wir die Standardeinstellung des Browsers mit der Einstellung `margin: 0;`.

Als Nächstes setzen wir die obere und untere Auffüllung der Überschrift auf 20 Pixel und setzen die Überschrift in dieselbe Farbe wie die HTML-Hintergrundfarbe.

Abschließend wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens vom Text: wie weit er quer verschoben wird.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit er nach unten verschoben wird.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen verschwommener aussehenden Schatten.
- Der vierte Wert setzt die Basisfarbe des Schattens.

## Das Bild zentrieren

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als Nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir können denselben `margin: 0 auto`-Trick wie beim body verwenden, aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, um das CSS zum Laufen zu bringen.

Das {{htmlelement("body")}}-Element ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt und Margin, Auffüllung und andere Box-Eigenschaften akzeptieren kann. {{htmlelement("img")}}- (Bild-) Elemente hingegen sind **Inline**-Elemente: Standardmäßig akzeptieren sie Margin-Werte nicht auf die gleiche Weise, wie es Block-Elemente tun. Damit der Auto-Margin-Trick bei diesem Bild funktioniert, müssen wir ihm mit `display: block;` ein Blockverhalten geben.

Schließlich setzen wir die {{cssxref("max-width")}}-Eigenschaft auf `100%`, um sicherzustellen, dass wenn das Bild größer als die für den Body festgelegte `width` (600 Pixel) ist, es auf `600px` beschränkt wird und nicht breiter gestreckt wird.

> [!NOTE]
> Machen Sie sich keine allzu großen Gedanken, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inline-Element oder `max-width: 100%;` nicht vollständig verstehen. Das wird mehr Sinn machen, je mehr Sie CSS studieren.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die dieser hier ähnelt:

![Ein Mozilla-Logo, zentriert, und eine Kopfzeile und Absätze. Es sieht jetzt schön gestaltet aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltstreifen.](website-screenshot-final.png)

Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/). Wenn Sie feststecken, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In diesem Artikel haben wir nur an der Oberfläche von CSS gekratzt. Sie werden in unserem [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)-Kernmodul später im Kurs viel mehr lernen.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Learning Partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _Lernen Sie HTML und CSS_-Kurs bringt Ihnen HTML und CSS bei, indem Sie fünf großartige Projekte bauen und bereitstellen, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von sachkundigen Lehrern unterrichtet werden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
