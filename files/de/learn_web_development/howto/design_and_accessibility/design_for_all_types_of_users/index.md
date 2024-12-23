---
title: Wie können wir für alle Arten von Nutzern gestalten?
slug: Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel bietet grundlegende Tipps, die Ihnen helfen, Websites für jede Art von Nutzer zu gestalten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zuerst
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility"
          >Was ist Barrierefreiheit?</a
        > lesen, da wir hier nicht im Detail auf Barrierefreiheit eingehen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Universelles Design bedeutet Design für alle, unabhängig von Behinderungen oder technischen Einschränkungen. Dieser Artikel listet die wichtigsten Quick-Wins für universelles Design auf.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Ein zentrales Thema bei der Erstellung einer Website ist das [Universelle Design](https://en.wikipedia.org/wiki/Universal_design): Es geht darum, alle Nutzer zu berücksichtigen, unabhängig von Behinderungen, technischen Einschränkungen, Kultur, Standort usw.

## Aktives Lernen

_Es gibt noch keine aktive Lernmöglichkeit. [Bitte ziehen Sie in Betracht, beizutragen](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefung

### Farbkontrast

Um Ihren Text lesbar zu machen, verwenden Sie eine Textfarbe, die gut mit der Hintergrundfarbe kontrastiert. Machen Sie es besonders einfach, den Text zu lesen, um sehbehinderten Menschen und Menschen, die ihre Telefone unterwegs nutzen, zu helfen.

Das {{Glossary("W3C", "W3C")}} definiert eine gute Farbmischung mit einem Algorithmus, der das Helligkeitsverhältnis zwischen Vorder- und Hintergrund berechnet. Die Berechnung kann ziemlich kompliziert erscheinen, aber wir können uns auf Werkzeuge verlassen, um die Arbeit für uns zu erledigen.

Laden Sie den [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) der Paciello Group herunter und installieren Sie ihn.

> [!NOTE]
> Alternativ können Sie online eine Reihe von Kontrast-Prüfern finden, wie zum Beispiel den [Color Contrast Checker von WebAIM](https://webaim.org/resources/contrastchecker/). Wir empfehlen einen lokalen Prüfer, weil er mit einem Bildschirm-Farbauswahl-Tools geliefert wird, um einen Farbwert zu ermitteln.

Lassen Sie uns zum Beispiel die Farben auf dieser Seite testen und sehen, wie wir im Farb-Kontrast-Analyser abschneiden:

![Farbkontrast auf dieser Seite: ausgezeichnet!](color-contrast.png)

Das Helligkeitskontrastverhältnis zwischen Text und Hintergrund beträgt 8.30:1, was den Mindeststandard (4.5:1) übersteigt und vielen sehbehinderten Menschen das Lesen dieser Seite ermöglichen sollte.

### Schriftgröße

Sie können die Schriftgröße auf einer Website entweder über relative Einheiten oder absolute Einheiten angeben.

#### Absolute Einheiten

Absolute Einheiten werden nicht proportional berechnet, sondern beziehen sich auf eine feste Größe und werden meist in Pixeln (`px`) ausgedrückt. Wenn Sie zum Beispiel in Ihrem CSS dies deklarieren:

```css
body {
  font-size: 16px;
}
```

… sagen Sie dem Browser, dass die Schriftgröße, unabhängig davon, was passiert, 16 Pixel betragen muss. Moderne Browser umgehen diese Regel, indem sie so tun, als würden Sie "16 Pixel bei einem Zoomfaktor von 100%" anfordern.

#### Relative Einheiten

Auch _proportionale Einheiten_ genannt, werden relative Einheiten relativ zu einem Elternelement berechnet. Relative Einheiten sind benutzerfreundlicher, da sie die Einstellungen des Systems des Nutzers respektieren.

Relative Einheiten werden in `em`, `%` und `rem` ausgedrückt:

- Prozentbasierte Größen: `%`
  - : Diese Einheit sagt Ihrem Browser, dass die Schriftgröße eines Elements N% der vorherigen Element-Schriftgröße betragen muss. Wenn kein Elternteil gefunden werden kann, wird die Standard-Schriftgröße des Browsers als Basis für die Berechnung herangezogen (in der Regel das Äquivalent von 16 Pixeln).
- Em-basierte Größen: `em`
  - : Diese Einheit wird genauso wie Prozent berechnet, außer dass Sie in Einheiten von 1 und nicht in Einheiten von 100 berechnen. Es wird gesagt, dass "em" die Breite eines großen "M" im Alphabet ist (grob gesagt, passt ein "M" in ein Quadrat).
- Rem-basierte Größen: `rem`
  - : Diese Einheit ist proportional zur Schriftgröße des Wurzelelements und wird wie `em` in Einheiten von 1 angegeben.

Angenommen, wir wollten eine Basis-Schriftgröße von 16px und eine h1 (Hauptüberschrift) im Wert von 32px, und wenn wir innerhalb der h1 einen `span` mit der Klasse `subheading` finden, muss auch dieser in der Standard-Schriftgröße (normalerweise 16px) dargestellt werden.

Hier ist der HTML-Code, den wir verwenden:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Font size experiment</title>
  </head>
  <body>
    <h1>
      This is our main heading
      <span class="subheading">This is our subheading</span>
    </h1>
  </body>
</html>
```

Ein prozentbasiertes CSS würde so aussehen:

```css
body {
  /* 100% of the browser's base font size, so in most cases this will render as 16 pixels */
  font-size: 100%;
}
h1 {
  /* twice the size of the body, thus 32 pixels */
  font-size: 200%;
}
span.subheading {
  /* half the size of the h1, thus 16 pixels to come back to the original size */
  font-size: 50%;
}
```

Dasselbe Problem, ausgedrückt mit ems:

```css
body {
  /* 1em = 100% of the browser's base font size, so in most cases this will render as 16 pixels */
  font-size: 1em;
}
h1 {
  /* twice the size of the body, thus 32 pixels */
  font-size: 2em;
}
span.subheading {
  /* half the size of the h1, thus 16 pixels to come back to the original size */
  font-size: 0.5em;
}
```

Wie Sie sehen können, wird die Mathematik schnell überwältigend, wenn Sie den Überblick über das Elternteil, das Elternteil des Elternteils, das Elternteil des Elternteils des Elternteils usw. behalten müssen. (Die meisten Designs werden in pixelbasierten Softwaretools erstellt, sodass die Mathematik von der Person erledigt werden muss, die das CSS kodiert).

Dann gibt es `rem`. Diese Einheit ist relativ zur Größe des Wurzelelements und nicht zu einem anderen Elternteil. Das CSS kann folgendermaßen umgeschrieben werden:

```css
body {
  /* 1em = 100% of the browser's base font size, so in most cases this will render as 16 pixels */
  font-size: 1em;
}
h1 {
  /* twice the size of the body, thus 32 pixels */
  font-size: 2rem;
}
span.subheading {
  /* original size */
  font-size: 1rem;
}
```

Einfacher, nicht wahr? Dies funktioniert in [allen aktuellen Browsern](https://caniuse.com/#search=rem), also verwenden Sie diese Einheit gerne.

> [!NOTE]
> Möglicherweise bemerken Sie, dass Opera Mini die Schriftgrößeneinstellung in rem nicht unterstützt. Es wird letzlich seine eigene Schriftgröße festlegen, daher müssen Sie sich nicht mit Schriftgrößen-Einheiten bemühen.

#### Warum sollte ich proportionale Einheiten verwenden wollen?

Weil Sie nicht wissen, wann ein Browser erscheinen wird, der sich weigert, Text, dessen Größe in Pixeln ausgedrückt ist, zu vergrößern. Überprüfen Sie auch die Statistiken Ihrer Website: Sie könnten Besuche von älteren Browsern erhalten.

Wir empfehlen Folgendes:

- Beschreiben Sie Schriften in `rem`-Einheiten, die meisten Browser werden sehr zufrieden damit sein;
- Lassen Sie ältere Browser Schriften mit ihrer eigenen internen Engine darstellen. Die Browser-Engines ignorieren jede Eigenschaft oder jeden Wert im CSS, wenn sie damit nicht umgehen können, sodass Ihre Website zwar nicht exakt der Vision Ihres Designers entspricht, aber dennoch benutzbar ist. Ältere Browser sind ohnehin auf dem Rückzug.

> [!NOTE]
> Ihre Ergebnisse können variieren. Wenn Sie ältere Browser unterstützen müssen, müssen Sie `em`s verwenden und ein bisschen mehr rechnen.

### Zeilenbreite

Es gibt eine langjährige Debatte über die Zeilenlänge im Web, aber hier ist die Geschichte. Früher, als wir Zeitungen hatten, erkannten die Drucker, dass die Augen der Leser Schwierigkeiten haben würden, von einer Zeile zur nächsten zu wechseln, wenn die Zeilen zu lang wären. Die Lösung? Spalten.

Natürlich verschwindet das Problem nicht, wenn wir zum Web wechseln. Die Augen des Lesers verhalten sich wie ein Shuttle, das von Zeile zu Zeile geht. Um es den Augen der Menschen zu erleichtern, begrenzen Sie die Zeilenbreite auf etwa 60 oder 70 Zeichen.

Um dies zu erreichen, können Sie eine Größe für das Text-Container-Element festlegen. Betrachten Sie diesen HTML-Code:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Font size experiment</title>
  </head>
  <body>
    <div class="container">
      <h1>
        This is our main heading
        <span class="subheading">This is our subheading</span>
      </h1>

      <p>[lengthy text that spans many lines]</p>
    </div>
  </body>
</html>
```

Wir haben ein `div` mit der Klasse `container`. Wir können das `div` entweder so stylen, dass die Breite (mit der Eigenschaft `width`) oder die maximale Breite festgelegt wird, sodass es niemals zu groß wird (mit der Eigenschaft `max-width`). Wenn Sie eine elastische/responsive Website wollen und nicht wissen, wie die Standardbreite des Browsers ist, können Sie die Eigenschaft `max-width` verwenden, um bis zu 70 Zeichen pro Zeile zuzulassen, nicht mehr:

```css
div.container {
  max-width: 70em;
}
```

### Alternative Inhalte für Bilder, Audio und Video

Websites enthalten oft Dinge neben einfachem Text.

#### Bilder

Bilder können entweder dekorativ oder informativ sein, aber es gibt keine Garantie, dass Ihre Nutzer sie sehen können. Zum Beispiel,

- Sehbehinderte Nutzer verlassen sich auf einen Bildschirmleser, der nur mit Text umgehen kann.
- Ihre Leser verwenden möglicherweise ein sehr striktes Intranet, das Bilder blockiert, die aus einer {{Glossary("CDN", "CDN")}} stammen.
- Ihre Leser haben möglicherweise Bilder deaktiviert, um Bandbreite zu sparen, besonders auf mobilen Geräten (siehe unten).

<!---->

- Dekorative Bilder
  - : Sie dienen nur zur Dekoration und übermitteln keine wirklichen Informationen. Sie könnten oft durch ein Hintergrundbild ersetzt werden. Stellen Sie sicher, dass sie ein leeres `alt`-Attribut haben: `<img src="deco.gif" alt="">`, damit sie den Text nicht verstopfen.
- Informative Bilder
  - : Sie werden verwendet, um Informationen zu übermitteln, daher ihr Name. Sie können zum Beispiel ein Diagramm zeigen oder die Geste einer Person darstellen oder andere Informationen zeigen. Mindestens muss ein relevantes `alt`-Attribut bereitgestellt werden.

Wenn das Bild kurz und bündig beschrieben werden kann, können Sie ein `alt`-Attribut angeben und sonst nichts. Wenn das Bild nicht kurz und bündig beschrieben werden kann, müssen Sie entweder den gleichen Inhalt in anderer Form auf derselben Seite bereitstellen (z.B. ein Tortendiagramm durch eine Tabelle mit den gleichen Daten ergänzen) oder auf ein `longdesc`-Attribut zurückgreifen. Dieser Attributwert ist eine URL, die auf eine Ressource verweist, die den Inhalt des Bildes explizit und detailliert beschreibt.

> [!NOTE]
> Die Verwendung und sogar die Existenz von `longdesc` wurde lange Zeit diskutiert. Bitte beziehen Sie sich auf die [Image Description Extension (longdesc)](https://www.w3.org/TR/html-longdesc/) des W3C für die vollständige Erklärung und ausführliche Beispiele.

#### Audio/Video

Sie müssen auch Alternativen zu Multimedia-Inhalten bereitstellen.

- Untertitel/Close-Captioning
  - : Sie sollten Ihrem Video Untertitel hinzufügen, um Besucher zu unterstützen, die den Ton nicht hören können. Einige Nutzer haben Hörprobleme, fehlende funktionierende Lautsprecher oder arbeiten in einer lauten Umgebung (z.B. im Zug).
- Transkript
  - : Untertitel funktionieren nur, wenn jemand das Video betrachtet. Viele Nutzer haben keine Zeit oder das notwendige Plugin oder Codec fehlt. Zusätzlich verlassen sich Suchmaschinen hauptsächlich auf Text, um Inhalte zu indexieren. Aus all diesen Gründen sollten Sie ein Text-Transkript der Video-/Audiodatei bereitstellen.

### Bildkomprimierung

Einige Nutzer entscheiden sich möglicherweise dafür, Bilder anzuzeigen, haben jedoch dennoch eine begrenzte Bandbreite zur Verfügung, insbesondere in Entwicklungsländern und auf mobilen Geräten. Wenn Sie eine erfolgreiche Website haben möchten, sollten Sie Ihre Bilder komprimieren. Es gibt verschiedene Tools, die Ihnen dabei helfen, entweder online oder lokal:

- **Installierte Software.** [ImageOptim](https://imageoptim.com/api) (Mac), [OptiPNG](https://optipng.sourceforge.net/) (alle Plattformen), [PNGcrush](https://pmt.sourceforge.io/pngcrush/) (DOS, Unix/Linux)
- **Online-Tools.** [Online Image Optimizer von Dynamic Drive](https://tools.dynamicdrive.com/imageoptimizer/) (der automatisch von einem Format in ein anderes konvertieren kann, wenn es bandbreiteneffizienter ist)
