---
title: "CSS: Gestaltung des Inhalts"
short-title: Gestaltung des Inhalts
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) ist der Code, der Webinhalte stylt. Dieser Artikel führt Sie durch ein grundlegendes Verständnis von CSS – wie es funktioniert und wie Sie das Aussehen und die Anmutung der Inhaltsstruktur verbessern können, die Sie im vorherigen Artikel erstellt haben.

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
          <li>Die grundlegenden Bestandteile der CSS-Syntax — Regelsets, Selektoren, Deklarationen, Eigenschaften, Eigenschaftswerte.</li>
          <li>Gemeinsame CSS-Funktionalitäten einschließlich Box-Modell, Farb- und Schriftartänderungen und Positionierung von HTML-Elementen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist CSS?

Wie HTML ist CSS keine Programmiersprache. Es ist auch keine Auszeichnungssprache. **CSS ist eine Stylesheet-Sprache.** CSS wird verwendet, um HTML-Elemente zu stylen: Sie wählen die Elemente aus, die Sie stylen möchten, und setzen Werte für ihre Stileigenschaften, die definieren, wie sie aussehen werden.

Lassen Sie uns das grundlegende HTML-Beispiel aus dem Artikel [Inhalt erstellen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) erneut betrachten:

```html live-sample___basic-html live-sample___basic-css
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Dies wird alleine wie folgt gerendert:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Wenn wir etwas CSS hinzufügen, können wir das Aussehen des HTML ändern. Im folgenden Ausschnitt wird das {{htmlelement("p")}}-Element ausgewählt und erhält eine andere [Schriftart](/de/docs/Web/CSS/font-family) und eine rote Text-{{cssxref("color")}}. Dann werden alle {{htmlelement("li")}}-Elemente ausgewählt und erhalten jeweils eine grün-gelbe {{cssxref("background-color")}}, einen 1-Pixel langen schwarzen {{cssxref("border")}} und einen 5-Pixel [Unterabstand](/de/docs/Web/CSS/margin-bottom):

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

Mit dem auf das HTML angewandten CSS sieht die Demo jetzt so aus:

{{EmbedLiveSample("basic-css", "100%", "160px")}}

Wie Sie sehen können, konnten wir mit nur ein wenig CSS das Aussehen einer einfach aussehenden Liste verändern.

CSS bietet viele weitere Funktionen, von der Spezifikation von Hintergrundbildern und Verläufen bis hin zur Steuerung der Typografie und des Scrollverhaltens, dem Hinzufügen von Animationen und dem Aufbau ganzer Webseitenlayouts.

## Anwendung von CSS auf Ihr HTML

Bei der Verwendung von CSS ist das Erste, das sicherzustellen ist, dass Ihr CSS erfolgreich auf Ihr HTML angewendet wird. In diesem Abschnitt fügen wir Ihrem `first-website` ein CSS-**Stylesheet** hinzu und wenden es auf Ihre Seite an.

1. Erstellen Sie in Ihrem Ordner `first-website` einen neuen Ordner namens `styles`.
2. Verwenden Sie einen Texteditor, um das folgende CSS in eine neue Datei einzufügen, die Ihren `<p>`-Elementen eine rote Textfarbe gibt. Es ist nützlich, mit etwas derartigem zu beginnen, um zu testen, ob Ihr Stylesheet korrekt auf Ihr HTML angewendet wird.

   ```css
   p {
     color: red;
   }
   ```

3. Speichern Sie die Datei im Ordner `styles` unter dem Namen `style.css`.
4. Öffnen Sie Ihre Datei `index.html`. Fügen Sie die folgende Zeile innerhalb des HTML-Kopfs (zwischen den {{HTMLElement("head")}} und `</head>`-Tags) ein:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

5. Speichern Sie `index.html` und laden Sie es in Ihrem Browser. Sie sollten etwas in der Art sehen:

![Ein Mozilla-Logo und einige Absätze. Der Absatztext wurde durch unser css rot gestylt.](website-screenshot-styled.png)

Wenn Ihr Absatztext rot ist, Glückwunsch! Ihr CSS funktioniert. Wenn nicht, gehen Sie die obigen Schritte durch und überprüfen Sie sorgfältig, ob Sie jeden einzelnen korrekt befolgt haben.

## Grundlagen der CSS-Syntax

Im vorherigen CSS-Beispiel wird `p` als **Selektor** bezeichnet – es wählt das/die zu stylende(n) Element(e) aus. Insbesondere wählt `p` alle Absätze im HTML aus. Die Zeile in den geschweiften Klammern (`{ }`) wird als **Deklaration** bezeichnet – sie setzt einen Wert für eine spezifische Eigenschaft. In diesem Fall ist die **Eigenschaft** `color`, die die Textfarbe der Absätze steuert, und der festgelegte **Eigenschaftswert** ist `red`.

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

In dieser CSS-Regel haben wir einen **Element**- (oder **Typ**-) Selektor eingeschlossen, der ein spezifisches HTML-Element auswählt. Wir haben auch zwei andere Selektortypen eingeschlossen, die für den Rest dieses Tutorials nicht relevant sind. Wenn Sie neugierig auf ihre Funktionalität sind, schauen Sie sich unseren [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) Leitfaden an.

> [!NOTE]
> Scrimbas [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in die CSS-Syntax.

## Verbesserung des Textes

Lassen Sie uns zu unserem Beispiel zurückkehren und CSS verwenden, um das Aussehen des Textes zu verbessern. Wir werden eine neue Schriftart für die Seite festlegen und einige Texteinstellungen für verschiedene Elemente ändern.

1. Finden Sie zunächst den [Ausgabe-Code von Google Fonts](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font), den Sie zuvor gespeichert haben. Wenn Sie noch keine Schriftart ausgewählt haben, folgen Sie dem Link und tun Sie es jetzt.
2. Fügen Sie die {{htmlelement("link")}}-Elemente innerhalb Ihres {{HTMLElement("head")}} von `index.html` ein, direkt vor dem schließenden `</head>`-Tag. Sie sollten in etwa so aussehen:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
     rel="stylesheet" />
   ```

   Dieser Code verlinkt Ihre Seite mit einem Stylesheet, das vom Google Fonts-Dienst gehostet wird und Ihre gewählte Schriftart lädt.

3. Gehen Sie dann zu Ihrer Datei `style.css` und löschen Sie die bestehende Regel. Wir möchten nicht mehr, dass unsere Absätze rot sind.
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
   > Alles in CSS zwischen `/*` und `*/` ist ein **CSS-Kommentar**, der vom Browser ignoriert wird. CSS-Kommentare sind eine Möglichkeit, hilfreiche Anmerkungen zu Ihrem Code oder Ihrer Logik beizufügen, ohne zu beeinflussen, wie Ihre Webseite gerendert wird.

5. Ersetzen Sie die Platzhalterzeile `font-family` durch die `font-family`-Zeile von Ihrem Google Fonts-Code, zum Beispiel:

   ```css
   font-family: "Roboto", sans-serif;
   ```

   Die `font-family`-Eigenschaft setzt die Schriftart(en), die Sie auf Ihr HTML anwenden möchten. Diese Regel definiert eine globale Basis-Schriftart und -Schriftgröße für die gesamte Seite. Alle Elemente innerhalb des {{HTMLElement("html")}}-Elements erben dieselbe `font-size` und `font-family`.

6. Lassen Sie uns nun einige Schrift- und Textstile auf unsere [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), {{htmlelement("li")}}, und {{htmlelement("p")}}-Elemente anwenden. Wir werden neue {{cssxref("font-size")}}-Werte für jedes Element festlegen. Wir werden auch die Überschrift mit {{cssxref("text-align")}} zentrieren und die {{cssxref("line-height")}} und {{cssxref("letter-spacing")}} der Absätze und Listenelemente erhöhen, um den Hauptinhalt leichter lesbar zu machen.

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

7. Speichern Sie Ihren Code und laden Sie Ihr HTML in einem Browser (aktualisieren Sie es, wenn Sie es bereits geöffnet haben). Ihr Arbeitsentwurf sollte in etwa so aussehen:

   ![Ein Mozilla-Logo und einige Absätze. Eine serifenlose Schriftart wurde eingestellt, die Schriftgrößen, der Zeilenabstand und der Zeichenabstand wurden angepasst, und die Hauptseitentitelüberschrift wurde zentriert](website-screenshot-font-small.png)

   > [!NOTE]
   > Versuchen Sie, die `px`-Werte anzupassen, bis Sie Schriftgrößen erhalten, die Ihnen für Ihre Überschrift und den Fließtext gefallen.

## CSS dreht sich alles um Boxen

Ein Punkt, den Sie bei der Verwendung von CSS bemerken werden, ist, dass vieles mit Boxen zu tun hat. Die meisten HTML-Elemente auf einer Seite können als Boxen betrachtet werden, die auf oder neben anderen Boxen sitzen. Sie können Werte auf diesen Boxen für Größe, Farbe, Positionierung usw. setzen. Dies wird als [**das Boxmodell**](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) bezeichnet.

![Drei Boxen, die ineinander sitzen. Von außen nach innen sind sie mit margin, border und padding beschriftet](box-model.png)

Jede Box, die Platz auf Ihrer Seite einnimmt, hat Eigenschaften wie:

- {{cssxref("padding")}}: Der Raum um den Inhalt. Im vorherigen Beispiel ist es der Raum um den Absatztext.
- {{cssxref("border")}}: Die feste Linie direkt außerhalb des Innenabstands.
- {{cssxref("margin")}}: Der Raum außerhalb des Randes.

In diesem Abschnitt verwenden wir auch die folgenden Eigenschaften, von denen Sie einige bereits gesehen haben:

- {{cssxref("width")}}: Die Breite eines Elements.
- {{cssxref("background-color")}}: Die Farbe hinter dem Inhalt und dem Innenabstand eines Elements.
- {{cssxref("color")}}: Die Farbe des Inhalts eines Elements (normalerweise Text).
- {{cssxref("text-shadow")}}: Ein Schlagschatten auf dem Text in einem Element.
- {{cssxref("display")}}: Der Anzeigemodus eines Elements (was im Wesentlichen darauf verweist, wie es auf der Webseite erscheint oder angeordnet ist).

In jedem der folgenden Abschnitte:

1. Fügen Sie den bereitgestellten CSS-Code am Ende Ihrer `style.css`-Datei hinzu.
2. Speichern Sie die Datei und aktualisieren Sie Ihren Browser, um zu sehen, wie das CSS das HTML-Rendering beeinflusst hat.
3. Lesen Sie die bereitgestellte Erklärung, um zu verstehen, wie das CSS funktioniert.
4. Wenn Sie abenteuerlustig sind, experimentieren Sie mit der Änderung der Eigenschaftswerte, um Ihre Seite weiter anzupassen.

## Ändern der Seitenfarbe

Fügen Sie das Folgende hinzu:

```css
html {
  background-color: #00539f;
}
```

Diese Regel setzt eine Hintergrundfarbe für die gesamte Seite. Ändern Sie den Farbcodes entsprechend der Farbe, die Sie in [Wie soll Ihre Webseite aussehen?](/de/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_theme_color) gewählt haben.

## Stylen des Body

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

Der obige Code setzt neue Werte für mehrere Eigenschaften des {{htmlelement("body")}}-Elements. Lassen Sie uns diese Zeilenweise durchgehen:

- `width: 600px;`: Dadurch wird der Body auf immer 600 Pixel Breite eingestellt.
- `margin: 0 auto;`: Wenn Sie zwei Werte auf eine Eigenschaft wie `margin` oder `padding` setzen, beeinflusst der erste Wert die obere _und_ untere Seite des Elements (hier auf `0` gesetzt); der zweite Wert beeinflusst die linke _und_ rechte Seite. `auto` ist ein spezieller Wert, der den verfügbaren horizontalen Raum gleichmäßig zwischen links und rechts aufteilt.
- `background-color: #FF9500;`: Dies setzt die Hintergrundfarbe des Elements. Unser Projekt verwendet ein rötliches Orange für die `<body>`-Hintergrundfarbe, um mit dem dunklen Blau, das für das {{htmlelement("html")}}-Element verwendet wird, zu kontrastieren.
- `padding: 0 20px 20px 20px;`: Dies setzt vier Werte für den Innenabstand. Das Ziel ist, etwas Platz um den Inhalt zu schaffen. In diesem Beispiel gibt es oben am Body keinen Innenabstand und 20 Pixel an der rechten, unteren und linken Seite. Die Werte setzen Innenabstand oben, rechts, unten und links, in dieser Reihenfolge.
- `border: 5px solid black;`: Dies setzt die Werte für Breite, Stil und Farbe des Randes. In diesem Fall ist es ein 5-Pixel breiter, fester schwarzer Rand um alle Seiten des Bodys.

## Positionierung und Stylen des Hauptseitentitels

Fügen Sie nun dies hinzu:

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Ihnen ist vielleicht ein unschönes Loch oben am Body aufgefallen. Das passiert, weil Browser standardmäßig Styling auf das `<h1>`-Element anwenden. Das mag wie eine schlechte Idee erscheinen, aber die Absicht ist, unformatierte Seiten grundlegend lesbar zu machen. Um das Loch zu entfernen, überschreiben wir das Standard-Styling des Browsers mit der Einstellung `margin: 0;`.

Als Nächstes setzen wir den oberen und unteren Innenabstand der Überschrift auf 20 Pixel und setzen die Textfarbe der Überschrift auf dieselbe Farbe wie die Hintergrundfarbe des HTML.

Schließlich wendet `text-shadow` einen Schatten auf den Textinhalt des Elements an:

- Der erste Pixelwert setzt den **horizontalen Versatz** des Schattens vom Text: wie weit er sich nach rechts bewegt.
- Der zweite Pixelwert setzt den **vertikalen Versatz** des Schattens vom Text: wie weit er sich nach unten bewegt.
- Der dritte Pixelwert setzt den **Unschärferadius** des Schattens. Ein größerer Wert erzeugt einen unschärfer aussehenenden Schatten.
- Der vierte Wert setzt die Basisfarbe des Schattens.

## Zentrieren des Bildes

Fügen Sie schließlich diese Regel hinzu:

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Als Nächstes zentrieren wir das Bild, um es besser aussehen zu lassen. Wir können denselben `margin: 0 auto` Trick wie beim Body verwenden, aber es gibt Unterschiede, die eine zusätzliche Einstellung erfordern, damit das CSS funktioniert.

Das {{htmlelement("body")}}-Element ist ein **Block**-Element, was bedeutet, dass es Platz auf der Seite einnimmt und Rand-, Innenabstands- und andere Box-Eigenschaften akzeptieren kann. {{htmlelement("img")}} (Bild-)Elemente sind hingegen **Inline**-Elemente: standardmäßig akzeptieren sie Randwerte nicht auf die gleiche Weise wie Block-Elemente. Damit der automatisierte Rand-Trick bei diesem Bild funktioniert, müssen wir ihm blockhaftes Verhalten geben, indem wir `display: block;` verwenden.

Schließlich setzen wir die {{cssxref("max-width")}} Eigenschaft auf `100%`, um sicherzustellen, dass, wenn das Bild größer ist als die auf den Body gesetzte `width` (600 Pixel), es auf `600px` begrenzt wird und nicht breiter als das dehnbar ist.

> [!NOTE]
> Seien Sie nicht zu besorgt, wenn Sie `display: block;` und die Unterschiede zwischen einem Blockelement und einem Inline-Element oder `max-width: 100%;` nicht vollständig verstehen. Sie werden mehr Sinn machen, wenn Sie Ihr CSS-Studium fortsetzen.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie eine Seite haben, die etwa so aussieht:

![Ein Mozilla-Logo, zentriert, und eine Überschrift und Absätze. Sie sieht jetzt schön gestylt aus, mit einem blauen Hintergrund für die gesamte Seite und einem orangefarbenen Hintergrund für den zentrierten Hauptinhaltstreifen.](website-screenshot-final.png)

Sie können [unsere Version hier ansehen](https://mdn.github.io/beginner-html-site-styled/). Wenn Sie stecken bleiben, können Sie Ihre Arbeit immer mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) vergleichen.

In diesem Artikel haben wir nur an der Oberfläche von CSS gekratzt. Sie werden viel mehr in unserem [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) Kernmodul später im Kurs lernen.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der [Scrimba](https://scrimba.com?via=mdn) _Lernen Sie HTML und CSS_ Kurs lehrt Ihnen HTML und CSS durch den Bau und die Bereitstellung von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von kenntnisreichen Lehrern unterrichtet werden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
