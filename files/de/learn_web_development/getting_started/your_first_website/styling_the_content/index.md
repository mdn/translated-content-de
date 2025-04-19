---
title: "CSS: Gestalten des Inhalts"
short-title: Gestalten des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: c5c84b62f3f1fbd46f77c940fa0cbfff649c46a1
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte gestaltet. Dieser Artikel führt Sie durch ein grundlegendes Verständnis von CSS – wie es funktioniert und wie Sie das Erscheinungsbild und die Gestaltung der Inhaltsstruktur, die Sie im vorherigen Artikel erstellt haben, verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zur Erstellung einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von CSS.</li>
          <li>Die grundlegenden Komponenten der CSS-Syntax – Regelsets, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Häufige CSS-Funktionalitäten, einschließlich Box-Modell, Farb- und Schriftartwechsel sowie Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Ähnlich wie HTML ist CSS keine Programmiersprache. Es ist auch keine Markup-Sprache. **CSS ist eine Stylesheet-Sprache.** CSS wird verwendet, um HTML-Elemente zu gestalten: Sie wählen die Elemente aus, die Sie gestalten möchten, und setzen Werte für deren Stil-Eigenschaften, die definieren, wie sie aussehen werden.

Lassen Sie uns das grundlegende HTML-Beispiel aus dem Artikel [Erstellung des Inhalts](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) erneut betrachten:

```html live-sample___basic-html live-sample___basic-css
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Dies wird folgendermaßen alleine dargestellt:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Wenn wir etwas CSS hinzufügen, können wir das Aussehen des HTMLs ändern. Das folgende Snippet wählt das {{htmlelement("p")}}-Element aus und verleiht ihm eine andere [Schriftart](/de/docs/Web/CSS/font-family) und einen roten Text-{{cssxref("color")}}. Es wählt dann alle {{htmlelement("li")}}-Elemente aus und gibt jedem einen grün-gelben {{cssxref("background-color")}}, einen 1-Pixel dicken schwarzen {{cssxref("border")}} und einen 5-Pixel [unteren Rand](/de/docs/Web/CSS/margin-bottom):

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

Mit dem auf das HTML angewendeten CSS wird die Demo nun folgendermaßen gerendert:

{{EmbedLiveSample("basic-css", "100%", "160px")}}

Wie Sie sehen können, konnten wir mit nur ein wenig CSS das Erscheinungsbild einer schlicht aussehenden Liste ändern.

CSS hat viele andere Funktionen, von der Angabe von Hintergrundbildern und -verläufen, über die Steuerung von Typografie und Scroll-Verhalten, bis hin zum Hinzufügen von Animationen und dem Erstellen vollständiger Webseitenlayouts.

## CSS auf Ihr HTML anwenden

Wenn Sie CSS verwenden, ist das Erste, das Sie richtig machen müssen, sicherzustellen, dass Ihr CSS erfolgreich auf Ihr HTML angewendet wird. In diesem Abschnitt fügen wir Ihrem `first-website` eine CSS-**Stylesheet** hinzu und wenden sie auf Ihre Seite an.

1. Erstellen Sie in Ihrem `first-website`-Ordner einen neuen Ordner namens `styles`.
2. Verwenden Sie einen Texteditor, um das folgende CSS in eine neue Datei einzufügen, die Ihren `<p>`-Elementen eine rote Textfarbe verleiht. Es ist nützlich, mit so etwas zu beginnen, um zu testen, ob Ihr Stylesheet korrekt auf Ihr HTML angewendet wird.

   ```css
   p {
     color: red;
   }
   ```

3. Speichern Sie die Datei im `styles`-Ordner mit dem Dateinamen `style.css`.
4. Öffnen Sie Ihre `index.html`-Datei. Fügen Sie die folgende Zeile innerhalb des HTML-Kopfteils (zwischen den {{HTMLElement("head")}} und `</head>`-Tags) ein:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

5. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas wie dies sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde von unserem CSS rot gefärbt.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert. Wenn nicht, gehen Sie die obigen Schritte durch und überprüfen Sie sorgfältig, ob Sie jeden korrekt befolgt haben.

## Grundlegende CSS-Syntax

Im vorherigen CSS-Beispiel wird `p` als **Selektor** bezeichnet – es wählt das/die Element(e) aus, das/die gestaltet werden soll(en). Insbesondere wählt `p` alle Absätze im HTML aus. Die Zeile innerhalb der geschweiften Klammern (`{ }`) wird als **Deklaration** bezeichnet – sie setzt einen Wert für eine bestimmte Eigenschaft. In diesem Fall ist die **Eigenschaft** `color`, die die Textfarbe der Absätze steuert, und der gesetzte **Eigenschaftswert** ist `red`.

Die gesamte Struktur wird als **Regelset** bezeichnet. (Der Begriff _Regelset_ wird oft einfach als _Regel_ bezeichnet.)

Schauen wir uns ein weiteres Regelset an, diesmal mit mehreren Deklarationen:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

Innerhalb eines Regelsets müssen Sie ein Semikolon (`;`) verwenden, um eine Deklaration von der nächsten zu trennen. Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft und ihren Wert zu trennen.

Sie können auch mehrere Selektoren in einer Regel einschließen, getrennt durch Kommas, um mehrere Elemente auszuwählen. Zum Beispiel:

```css
p,
.my-class,
#my-id {
  color: red;
}
```

In dieser CSS-Regel haben wir einen **Element-** (oder **Typ-**) Selektor eingeschlossen, der ein spezifisches HTML-Element auswählt. Wir haben auch zwei andere Selektortypen eingeschlossen, die für den Rest dieses Tutorials nicht relevant sind. Wenn Sie neugierig darauf sind, was sie tun, schauen Sie sich unseren [Basis-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)-Leitfaden an.

> [!NOTE]
> Scrimbas [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in die CSS-Syntax.

## Verbesserung des Textes

Kehren wir zu unserem Beispiel zurück und verwenden CSS, um das Erscheinungsbild des Textes zu verbessern. Wir werden eine neue Schriftart für die Seite festlegen und einige Texteinstellungen für verschiedene Elemente ändern.

1. Finden Sie zuerst die [Ausgabe von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font), die Sie zuvor gespeichert haben. Wenn Sie noch keine Schriftart ausgewählt haben, folgen Sie nun dem Link und tun Sie es jetzt.
2. Fügen Sie die {{htmlelement("link")}}-Elemente innerhalb des {{HTMLElement("head")}} Ihrer `index.html` ein, direkt vor dem schließenden `</head>`-Tag. Sie sollten ungefähr so aussehen:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite zu einem Stylesheet, das vom Google Fonts-Service bereitgestellt wird und Ihre gewählte Schriftart lädt.

3. Gehen Sie als nächstes zu Ihrer `style.css`-Datei und löschen Sie die vorhandene Regel. Wir möchten nicht mehr, dass unsere Absätze rot sind.
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
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**, der vom Browser ignoriert wird. CSS-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen über Ihren Code oder Ihre Logik einzufügen, ohne die Darstellung Ihrer Webseite zu beeinflussen.

5. Ersetzen Sie die Platzhalterzeile `font-family` durch die `font-family`-Zeile aus Ihrem Google Fonts-Code, zum Beispiel:

   ```css
   font-family: "Roboto", sans-serif;
   ```

   Die `font-family`-Eigenschaft legt die Schriftart(en) fest, die Sie auf Ihr HTML anwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die gesamte Seite. Alle Elemente innerhalb des {{HTMLElement("html")}}-Elements erben die gleiche `font-size` und `font-family`.

6. Lassen Sie uns nun einige Schriftarten- und Textstile für unsere [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), {{htmlelement("li")}} und {{htmlelement("p")}}-Elemente festlegen. Wir werden neue {{cssxref("font-size")}}-Werte für jedes Element festlegen. Zusätzlich werden wir die Überschrift mit {{cssxref("text-align")}} zentrieren und die {{cssxref("line-height")}} und {{cssxref("letter-spacing")}} der Absätze und Listenelemente erhöhen, um den Fließtext besser lesbar zu machen.

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

7. Speichern Sie Ihren Code und laden Sie Ihr HTML in einem Browser (aktualisieren Sie es, wenn Sie es vorher geöffnet haben). Ihr „Work in Progress“ sollte ungefähr so aussehen:

   ![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schriftart wurde festgelegt, die Schriftgrößen, der Zeilenabstand und der Zeichenabstand wurden angepasst, und die Hauptseite-Ueberschrift wurde zentriert](website-screenshot-font-small.png)

   > [!NOTE]
   > Versuchen Sie, die `px`-Werte anzupassen, bis Sie Schrifgrößen erreichen, die Ihnen für Ihre Überschrift und den Fließtext gefallen.

## CSS dreht sich alles um Boxen

Etwas, das Sie an CSS bemerken werden, je mehr Sie es verwenden, ist, dass vieles sich um Boxen dreht. Die meisten HTML-Elemente auf einer Seite können als Boxen betrachtet werden, die auf (oder neben) anderen Boxen sitzen. Sie können Werte auf diesen Boxen für Größe, Farbe, Positionierung usw. setzen. Dies wird als [**Box-Modell**](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) bezeichnet.

![Drei Boxen, die ineinander geschachtelt sind. Von außen nach innen sind sie als Rand, Rahmen und Abstand entsprechend beschriftet](box-model.png)

Jede Box, die auf Ihrer Seite Platz einnimmt, hat Eigenschaften wie:

- {{cssxref("padding")}}: Der Raum um den Inhalt. Im vorherigen Beispiel ist es der Raum um den Absatztext.
- {{cssxref("border")}}: Die feste Linie direkt außerhalb des Paddings.
- {{cssxref("margin")}}: Der Raum außerhalb des Rahmens.

In diesem Abschnitt verwenden wir auch die folgenden Eigenschaften, von denen einige Sie bereits gesehen haben:

- {{cssxref("width")}}: Die Breite eines Elements.
- {{cssxref("background-color")}}: Die Farbe hinter dem Inhalt und dem Padding eines Elements.
- {{cssxref("color")}}: Die Farbe des Inhalts eines Elements (normalerweise Text).
- {{cssxref("text-shadow")}}: Ein Schlagschatten auf dem Text innerhalb eines Elements.
- {{cssxref("display")}}: Der Anzeigemodus eines Elements (der sich im Wesentlichen darauf bezieht, wie es auf der Webseite erscheint oder angeordnet ist).

In jedem der folgenden Abschnitte:

1. Fügen Sie den bereitgestellten CSS-Code an das Ende Ihrer `style.css`-Datei hinzu.
2. Speichern Sie die Datei und aktualisieren Sie Ihren Browser, um zu sehen, wie das CSS das HTML-Rendering beeinflusst hat.
3. Lesen Sie die bereitgestellte Erklärung, um zu verstehen, wie das CSS funktioniert.
4. Wenn Sie abenteuerlustig sind, experimentieren Sie mit der Änderung der Eigenschaftswerte, um Ihre Seite weiter anzupassen.

## Die Seitenfarbe ändern

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode auf die Farbe, die Sie in [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_theme_color) ausgewählt haben.

## Den Body gestalten

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

- `width: 600px;`: Dies zwingt den Body, immer 600 Pixel breit zu sein.
- `margin: 0 auto;`: Wenn Sie zwei Werte in einer Eigenschaft wie `margin` oder `padding` setzen, beeinflusst der erste Wert die obere _und_ untere Seite des Elements (in diesem Fall auf `0` gesetzt); der zweite Wert beeinflusst die linke _und_ rechte Seite. `auto` ist ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts aufteilt.
- `background-color: #FF9500;`: Dies setzt die Hintergrundfarbe des Elements. Unser Projekt verwendet ein rötliches Orange als `<body>`-Hintergrundfarbe, um sich von dem dunklen Blau abzusetzen, das für das {{htmlelement("html")}}-Element verwendet wird.
- `padding: 0 20px 20px 20px;`: Dies setzt vier Werte für das Padding. Das Ziel ist es, etwas Platz um den Inhalt herum zu schaffen. In diesem Beispiel gibt es kein Padding oben am Body und 20 Pixel rechts, unten und links. Die Werte setzen das Padding oben, rechts, unten und links in dieser Reihenfolge.
- `border: 5px solid black;`: Dies setzt Werte für die Breite, den Stil und die Farbe des Rahmens. In diesem Fall ist es ein 5-Pixel-breiter fester schwarzer Rahmen um alle Seiten des Körpers.

## Die Hauptseite-Überschrift positionieren und gestalten

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Sie haben vielleicht bemerkt, dass es eine hässliche Lücke am oberen Rand des Körpers gibt. Das passiert, weil Browser standardmäßig Stile auf das `<h1>`-Element anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht ist, grundlegende Lesbarkeit für ungestaltete Seiten bereitzustellen. Um die Lücke zu beseitigen, überschreiben wir das Standardstyling des Browsers mit der Einstellung `margin: 0;`.

Als nächstes setzen wir das Padding oben und unten der Überschrift auf 20 Pixel und setzen den Überschrifttext in die gleiche Farbe wie die HTML-Hintergrundfarbe.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an:

- Der erste Pixelwert bestimmt den **horizontalen Versatz** des Schattens vom Text: wie weit er sich seitlich bewegt.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert bestimmt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen unschärferen Schatten.
- Der vierte Wert setzt die Grundfarbe des Schattens.

## Das Bild zentrieren

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir können denselben `margin: 0 auto`-Trick wie beim Body verwenden, aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, um das CSS funktionierend zu machen.

Das {{htmlelement("body")}}-Element ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt und Margin, Padding und andere Box-Eigenschaften akzeptieren kann. {{htmlelement("img")}} (Bild)-Elemente sind hingegen **Inline**-Elemente: standardmäßig akzeptieren sie Margin-Werte nicht auf die gleiche Weise wie Block-Elemente. Damit der Auto-Margin-Trick bei diesem Bild funktioniert, müssen wir ihm ein Block-Level-Verhalten zuweisen, indem wir `display: block;` verwenden.

Schließlich setzen wir die {{cssxref("max-width")}}-Eigenschaft auf `100%`, um sicherzustellen, dass, wenn das Bild größer als die auf dem Body gesetzte `width` (600 Pixel) ist, es auf `600px` beschränkt wird und nicht breiter gestreckt wird.

> [!NOTE]
> Machen Sie sich keine allzu großen Sorgen, wenn Sie `display: block;` und die Unterschiede zwischen einem Block-Element und einem Inline-Element oder `max-width: 100%;` nicht vollständig verstehen. Sie werden mehr Sinn machen, während Sie Ihr CSS-Wissen weiter vertiefen.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die dieser ähnelt:

![Ein Mozilla-Logo, zentriert, und eine Überschrift und Absätze. Es sieht jetzt schön gestaltet aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhalt.](website-screenshot-final.png)

Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/). Wenn Sie nicht weiterkommen, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In diesem Artikel haben wir nur die Oberfläche von CSS angekratzt. Sie werden viel mehr in unserem [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) Kernmodul später im Kurs lernen.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Der Kurs von Scrimba](https://scrimba.com?via=mdn) _Lernen Sie HTML und CSS_ lehrt Ihnen HTML und CSS durch den Bau und den Einsatz von fünf großartigen Projekten, mit lustigen interaktiven Lektionen und Herausforderungen, die von kompetenten Lehrern unterrichtet werden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
