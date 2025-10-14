---
title: "CSS: Styling the content"
short-title: Styling the content
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: 231152e9a749aaeba8de45f4cc712845a470dda9
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte stylt. Dieser Artikel führt Sie durch ein grundlegendes Verständnis von CSS — wie es funktioniert und wie Sie das Aussehen und Gefühl der Inhaltsstruktur, die Sie im vorherigen Artikel erstellt haben, verbessern können.

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
          <li>Die grundlegenden Teile der CSS-Syntax — Regelsets, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Gewöhnliche CSS-Funktionalitäten, einschließlich Box-Modell, Farben- und Schriftänderungen und Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Ähnlich wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS wird verwendet, um HTML-Elemente zu stylen: Sie wählen die Elemente aus, die Sie stylen möchten, und legen Werte für deren Style-Eigenschaften fest, die definieren, wie sie aussehen werden.

Lassen Sie uns das grundlegende HTML-Beispiel aus dem Artikel [Erstellen der Inhalte](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) erneut betrachten:

```html live-sample___basic-html live-sample___basic-css
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Dies wird eigenständig wie folgt dargestellt:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Wenn wir etwas CSS hinzufügen, können wir ändern, wie das HTML aussieht. Das folgende Snippet wählt das {{htmlelement("p")}}-Element aus und gibt ihm eine andere [Schriftart](/de/docs/Web/CSS/font-family) und einen roten Text {{cssxref("color")}}. Dann werden alle {{htmlelement("li")}}-Elemente ausgewählt und jedes erhält eine grün-gelbe {{cssxref("background-color")}}, einen 1-Pixel soliden schwarzen {{cssxref("border")}}, und einen 5-Pixel [Untermargen](/de/docs/Web/CSS/margin-bottom):

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

Mit dem auf das HTML angewandten CSS wird die Demo jetzt wie folgt dargestellt:

{{EmbedLiveSample("basic-css", "100%", "160px")}}

Wie Sie sehen können, konnten wir mit nur etwas CSS das Erscheinungsbild einer schlicht aussehenden Liste ändern.

CSS hat viele weitere Funktionen, von der Angabe von Hintergrundbildern und -verläufen über die Steuerung von Typografie und Scroll-Verhalten bis hin zum Hinzufügen von Animationen und Erstellen ganzer Webseitenlayouts.

## Anwenden von CSS auf Ihr HTML

Bei der Verwendung von CSS ist das Erste, was Sie richtig machen müssen, sicherzustellen, dass Ihr CSS erfolgreich auf Ihr HTML angewendet wird. In diesem Abschnitt fügen wir Ihrem `first-website` ein CSS **Stylesheet** hinzu und wenden es auf Ihre Seite an.

1. Erstellen Sie in Ihrem `first-website`-Ordner einen weiteren neuen Ordner namens `styles`.
2. Verwenden Sie einen Texteditor, um das folgende CSS in eine neue Datei einzufügen, die Ihren `<p>`-Elementen eine rote Textfarbe gibt. Es ist nützlich, mit etwas wie diesem zu beginnen, um zu testen, ob Ihr Stylesheet korrekt auf Ihr HTML angewendet wird.

   ```css
   p {
     color: red;
   }
   ```

3. Speichern Sie die Datei im Ordner `styles` mit dem Dateinamen `style.css`.
4. Öffnen Sie Ihre `index.html`-Datei. Fügen Sie die folgende Zeile in den HTML-Kopf (zwischen den {{HTMLElement("head")}} und `</head>`-Tags) ein:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

5. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas sehen wie:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde von unserem CSS rot gestylt.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, herzlichen Glückwunsch! Ihr CSS funktioniert. Wenn nicht, gehen Sie die obigen Schritte durch und prüfen Sie sorgfältig, ob Sie jeden davon korrekt befolgt haben.

## Grundlagen der CSS-Syntax

Im vorherigen CSS-Beispiel wird `p` als **Selektor** bezeichnet — es wählt das/die Element(e) aus, das/die gestylt werden soll(en). Insbesondere wählt `p` alle Absätze im HTML. Die Zeile innerhalb der geschweiften Klammern (`{ }`) wird als **Deklaration** bezeichnet – sie setzt einen Wert für eine bestimmte Eigenschaft. In diesem Fall ist die **Eigenschaft** `color`, die die Textfarbe der Absätze steuert, und der gesetzte **Eigenschaftswert** ist `red`.

Die gesamte Struktur wird als **Regelset** bezeichnet. (Der Begriff _Regelset_ wird oft einfach als _Regel_ bezeichnet.)

Lassen Sie uns ein weiteres Regelset betrachten, diesmal mit mehreren Deklarationen:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

Innerhalb eines Regelsets müssen Sie ein Semikolon (`;`) verwenden, um eine Deklaration von der nächsten zu trennen. Innerhalb jeder Deklaration müssen Sie einen Doppelpunkt (`:`) verwenden, um die Eigenschaft von ihrem Wert zu trennen.

Sie können auch mehrere Selektoren in einer Regel aufnehmen, durch Kommas getrennt, um mehrere Elemente auszuwählen. Zum Beispiel:

```css
p,
.my-class,
#my-id {
  color: red;
}
```

In dieser CSS-Regel haben wir einen **Element-** (oder **Typ-**)Selektor aufgenommen, der ein bestimmtes HTML-Element auswählt. Wir haben auch zwei andere Selektortypen aufgenommen, die für den Rest dieses Tutorials nicht relevant sind. Wenn Sie neugierig sind, was sie tun, schauen Sie sich unseren [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) Leitfaden an.

> [!NOTE]
> Scrimbas [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in die CSS-Syntax.

## Verbesserung des Textes

Lassen Sie uns zu unserem Beispiel zurückkehren und CSS verwenden, um das Erscheinungsbild des Textes zu verbessern. Wir werden eine neue Schriftart für die Seite festlegen und einige Texteinstellungen für verschiedene Elemente ändern.

1. Finden Sie zuerst die [Ausgabe von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font), die Sie zuvor gespeichert haben. Wenn Sie noch keine Schriftart ausgewählt haben, folgen Sie dem Link und tun Sie es jetzt.
2. Fügen Sie die {{htmlelement("link")}}-Elemente innerhalb Ihres `index.html`'s {{HTMLElement("head")}}, unmittelbar vor dem schließenden `</head>`-Tag, hinzu. Sie sollten ungefähr so aussehen:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das vom Google Fonts-Dienst gehostet wird und Ihre ausgewählte Schriftart lädt.

3. Gehen Sie als nächstes zu Ihrer `style.css`-Datei und löschen Sie die vorhandene Regel. Wir möchten nicht mehr, dass unsere Absätze rot sind.
4. Fügen Sie die folgenden Zeilen in `style.css` ein:

   ```css
   html {
     /* px means "pixels". The base font size is now 10 pixels high */
     font-size: 10px;
     /* Replace PLACEHOLDER with the font-family property value you got from Google Fonts */
     font-family: PLACEHOLDER;
   }
   ```

   > [!NOTE]
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**, der vom Browser ignoriert wird. CSS-Kommentare sind eine Möglichkeit für Sie, hilfreiche Notizen zu Ihrem Code oder Ihrer Logik einzuschließen, ohne zu beeinflussen, wie Ihre Webseite gerendert wird.

5. Ersetzen Sie die `font-family`-Platzhalterzeile durch die `font-family`-Zeile aus Ihrem Google Fonts-Code, zum Beispiel:

   ```css
   font-family: "Roboto", sans-serif;
   ```

   Die `font-family`-Eigenschaft legt die Schriftarten fest, die Sie auf Ihr HTML anwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und Schriftgröße für die gesamte Seite. Alle Elemente innerhalb des {{HTMLElement("html")}}-Elements erben dieselbe `font-size` und `font-family`.

6. Lassen Sie uns nun einige Schrift- und Texteinstellungen auf unsere [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), {{htmlelement("li")}}, und {{htmlelement("p")}}-Elemente anwenden. Wir werden neue {{cssxref("font-size")}}-Werte für jedes Element festlegen. Wir werden auch die Überschrift mit {{cssxref("text-align")}} zentrieren und die {{cssxref("line-height")}} und {{cssxref("letter-spacing")}} der Absätze und Listenelemente erhöhen, um den Hauptinhalt besser lesbar zu machen.

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

7. Speichern Sie Ihren Code und laden Sie Ihr HTML in einen Browser (aktualisieren Sie es, wenn Sie es bereits geöffnet haben). Ihr Work-in-Progress sollte ähnlich aussehen wie:

   ![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schrift wurde gesetzt, die Schriftgrößen, die Zeilenhöhe und der Zeichenabstand wurden angepasst, und die Hauptseitenüberschrift wurde zentriert](website-screenshot-font-small.png)

   > [!NOTE]
   > Versuchen Sie, die `px`-Werte so anzupassen, bis Sie Schriftgrößen haben, die Sie für Ihre Überschrift und den Fließtext mögen.

## CSS dreht sich alles um Boxen

Etwas, das Ihnen auffallen wird, je mehr Sie CSS verwenden, ist, dass vieles davon um Boxen herum dreht. Die meisten HTML-Elemente auf einer Seite können als Boxen betrachtet werden, die auf oder neben anderen Boxen sitzen. Sie können Werte auf diesen Boxen für Größe, Farbe, Positionierung usw. festlegen. Dies wird als [**das Box-Modell**](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) bezeichnet.

![Drei Boxen, die ineinander sitzen. Von außen nach innen sind sie mit Rand, Rahmen und Innenabstand beschriftet](box-model.png)

Jede Box, die auf Ihrer Seite Platz einnimmt, hat Eigenschaften wie:

- {{cssxref("padding")}}: Der Raum um den Inhalt. Im vorherigen Beispiel ist es der Raum um den Absatztext.
- {{cssxref("border")}}: Die feste Linie direkt außerhalb der Polsterung.
- {{cssxref("margin")}}: Der Raum außerhalb der Grenze.

In diesem Abschnitt verwenden wir auch die folgenden Eigenschaften, von denen Sie einige bereits gesehen haben:

- {{cssxref("width")}}: Die Breite eines Elements.
- {{cssxref("background-color")}}: Die Farbe hinter dem Inhalt und der Innenkante eines Elements.
- {{cssxref("color")}}: Die Farbe des Inhalts eines Elements (normalerweise Text).
- {{cssxref("text-shadow")}}: Ein Schlagschatten auf dem Text innerhalb eines Elements.
- {{cssxref("display")}}: Der Anzeigemodus eines Elements (der im Grunde darauf verweist, wie es erscheint oder auf der Webseite angeordnet ist).

In jedem der folgenden Abschnitte:

1. Fügen Sie den bereitgestellten CSS-Code am Ende Ihrer `style.css`-Datei hinzu.
2. Speichern Sie die Datei und aktualisieren Sie Ihren Browser, um zu sehen, wie das CSS die HTML-Darstellung beeinflusst hat.
3. Lesen Sie die bereitgestellte Erklärung, um Ihnen zu helfen, zu verstehen, wie das CSS funktioniert.
4. Wenn Sie abenteuerlustig sind, experimentieren Sie mit der Änderung der Eigenschaftswerte, um Ihre Seite weiter anzupassen.

## Ändern der Seitenfarbe

Fügen Sie Folgendes hinzu:

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcode zu der Farbe, die Sie in [Wie wird Ihre Website aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_theme_color) gewählt haben.

## Styling des Körpers

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

Der obige Code setzt neue Werte für mehrere Eigenschaften des {{htmlelement("body")}}-Elements. Lassen Sie uns diese Zeile für Zeile durchgehen:

- `width: 600px;`: Dies zwingt den Körper, immer 600 Pixel breit zu sein.
- `margin: 0 auto;`: Wenn Sie zwei Werte für eine Eigenschaft wie `margin` oder `padding` festlegen, wirkt sich der erste Wert auf die obere _und_ untere Seite des Elements aus (in diesem Fall auf `0` setzen); der zweite Wert wirkt sich auf die linke _und_ rechte Seite aus. `auto` ist ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts aufteilt.
- `background-color: #FF9500;`: Dies setzt die Hintergrundfarbe des Elements. Unser Projekt verwendet ein rötliches Orange für die `<body>`-Hintergrundfarbe, um einen Kontrast zu dem dunklen Blau herzustellen, das für das {{htmlelement("html")}}-Element verwendet wird.
- `padding: 0 20px 20px 20px;`: Dies setzt vier Werte für den Abstand. Das Ziel ist es, etwas Platz um den Inhalt zu schaffen. In diesem Beispiel gibt es keinen Abstand oben am Körper und 20 Pixel auf der rechten, unteren und linken Seite. Die Werte setzen in dieser Reihenfolge den oberen, rechten, unteren und linken Abstand.
- `border: 5px solid black;`: Dies setzt Werte für die Breite, den Stil und die Farbe des Randes. In diesem Fall ist es ein 5 Pixel breiter solider schwarzer Rand um alle Seiten des Körpers.

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

Sie haben vielleicht bemerkt, dass es eine schreckliche Lücke oben am Körper gibt. Das passiert, weil Browser ein Standard-Styling für das `<h1>`-Element anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht ist, eine grundlegende Lesbarkeit für ungestylte Seiten bereitzustellen. Um die Lücke zu beseitigen, überschreiben wir die Standardeinstellungen des Browsers mit der Einstellung `margin: 0;`.

Anschließend setzen wir den oberen und unteren Abstand der Überschrift auf 20 Pixel und setzen die Überschriftentextfarbe auf dieselbe Farbe wie die HTML-Hintergrundfarbe.

Schließlich wird mit `text-shadow` ein Schatten auf den Textinhalt des Elements angewendet:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens vom Text: wie weit es sich nach rechts bewegt.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit es nach unten bewegt wird.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen verschwommeneren Schatten.
- Der vierte Wert setzt die Basisfarbe des Schattens.

## Zentrieren des Bildes

Fügen Sie abschließend diese Regel ein:

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir können dasselbe `margin: 0 auto`-Trick verwenden, den wir für den Körper verwendet haben, aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, um das CSS funktionieren zu lassen.

Das {{htmlelement("body")}}-Element ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt und Rand-, Innenabstands- und andere Box-Eigenschaften akzeptieren kann. {{htmlelement("img")}} (Bild)-Elemente hingegen sind **Inline-**Elemente: standardmäßig akzeptieren sie keine Randwerte auf die gleiche Weise wie Block-Elemente. Damit der Auto-Rand-Trick auf diesem Bild funktioniert, müssen wir ihm blockmäßiges Verhalten geben, indem wir `display: block;` verwenden.

Schließlich setzen wir die {{cssxref("max-width")}}-Eigenschaft auf `100%`, um sicherzustellen, dass, wenn das Bild größer als die auf dem Körper gesetzte `width` (600 Pixel) ist, es auf `600px` beschränkt wird und nicht breiter gestreckt wird.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inlineelement oder `max-width: 100%;` nicht vollständig verstehen. Sie werden mehr Sinn machen, wenn Sie Ihr Studium von CSS fortsetzen.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die ähnlich aussieht wie diese:

![Ein zentriertes Mozilla-Logo und ein Header sowie Absätze. Es sieht jetzt schön gestylt aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltsstreifen.](website-screenshot-final.png)

Sie können unsere [Version hier anzeigen](https://mdn.github.io/beginner-html-site-styled/). Wenn Sie stecken bleiben, können Sie Ihre Arbeit jederzeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/main/styles/style.css) vergleichen.

In diesem Artikel haben wir nur an der Oberfläche von CSS gekratzt. Sie werden viel mehr in unserem [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) Kernmodul später im Kurs lernen.

## Siehe auch

- [HTML und CSS lernen](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _HTML and CSS lernen_ Kurs lehrt Ihnen HTML und CSS durch den Aufbau und die Bereitstellung von fünf großartigen Projekten, mit lustigen interaktiven Lektionen und Herausforderungen, gelehrt von erfahrenen Lehrern.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
