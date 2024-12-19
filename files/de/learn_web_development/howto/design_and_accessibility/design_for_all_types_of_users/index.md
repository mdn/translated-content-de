---
title: Wie können wir für alle Arten von Nutzern gestalten?
slug: Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel bietet grundlegende Tipps, um Ihnen zu helfen, Websites für alle Arten von Nutzern zu gestalten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zunächst
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility"
          >Was ist Barrierefreiheit?</a
        > lesen, da wir Barrierefreiheit hier nicht im Detail behandeln.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Universelles Design bedeutet Design für alle, unabhängig von Behinderungen
        oder technischen Einschränkungen. Dieser Artikel listet die wichtigsten
        Schnellgewinne für universelles Design auf.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine Website erstellen, ist einer der wichtigsten Aspekte das [Universelle Design](https://en.wikipedia.org/wiki/Universal_design): die Berücksichtigung aller Benutzer, unabhängig von Behinderung, technischen Einschränkungen, Kultur, Ort, usw.

## Aktives Lernen

_Es stehen noch keine aktiven Lerninhalte zur Verfügung. [Bitte denken Sie über eine Mitarbeit nach](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefung

### Farbkontrast

Um Ihren Text lesbar zu halten, verwenden Sie eine Textfarbe, die gut mit der Hintergrundfarbe kontrastiert. Machen Sie es besonders leicht, den Text zu lesen, um sehbehinderten Menschen und Personen, die ihre Handys auf der Straße benutzen, zu helfen.

Das {{Glossary("W3C", "W3C")}} definiert eine gute Farbmischung mit einem Algorithmus, der das Leuchtkraftverhältnis zwischen Vordergrund und Hintergrund berechnet. Die Berechnung mag ziemlich kompliziert erscheinen, aber wir können uns auf Werkzeuge verlassen, die die Arbeit für uns erledigen.

Lassen Sie uns den Color Contrast Analyser der Paciello Group [herunterladen und installieren](https://www.tpgi.com/color-contrast-checker/).

> [!NOTE]
> Alternativ können Sie online eine Reihe von Kontrastprüfern finden, wie z.B. den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM. Wir empfehlen einen lokalen Checker, da er mit einem Bildschirm-farbauswähler ausgestattet ist, um Farbwerte zu ermitteln.

Testen wir zum Beispiel die Farben auf dieser Seite und sehen, wie wir uns im Color Contrast Analyser schlagen:

![Farbkontrast auf dieser Seite: hervorragend!](color-contrast.png)

Das Leuchtkraftkontrastverhältnis zwischen Text und Hintergrund beträgt 8.30:1, was den Mindeststandard (4.5:1) übertrifft und vielen sehbehinderten Menschen das Lesen dieser Seite ermöglichen sollte.

### Schriftgröße

Sie können die Schriftgröße auf einer Website entweder durch relative Einheiten oder absolute Einheiten angeben.

#### Absolute Einheiten

Absolute Einheiten werden nicht verhältnismäßig berechnet, sondern beziehen sich auf eine festgelegte Größe und werden meistens in Pixeln (`px`) ausgedrückt. Wenn Sie zum Beispiel in Ihrem CSS dies deklarieren:

```css
body {
  font-size: 16px;
}
```

… sagen Sie dem Browser, dass die Schriftgröße unabhängig von den Umständen 16 Pixel betragen muss. Moderne Browser umgehen diese Regel, indem sie vortäuschen, dass Sie "16 Pixel bei einem Zoomfaktor von 100%" anfragen.

#### Relative Einheiten

Auch _proportionale Einheiten_ genannt, werden relative Einheiten relativ zu einem Elternelement berechnet. Relative Einheiten sind benutzerfreundlicher in Bezug auf Barrierefreiheit, da sie die Einstellungen des Benutzer-Systems respektieren.

Relative Einheiten werden in `em`, `%` und `rem` ausgedrückt:

- Prozentbasierte Größen: `%`
  - : Diese Einheit weist Ihren Browser an, die Schriftgröße eines Elements als N% des vorherigen Elements, dessen Schriftgröße ausgedrückt wurde, festzulegen. Wenn kein Elternteil gefunden wird, wird die Standardschriftgröße im Browser als Basisgröße für die Berechnung verwendet (normalerweise das Äquivalent von 16 Pixeln).
- Em-basierte Größen: `em`
  - : Diese Einheit wird genauso berechnet wie Prozente, außer dass man in Portionen von 1 und nicht in Portionen von 100 berechnet. Es wird gesagt, dass "em" die Breite eines großen "M" im Alphabet ist (grob gesagt, ein "M" passt in ein Quadrat).
- Rem-basierte Größen: `rem`
  - : Diese Einheit ist proportional zur Schriftgröße des Wurzelements und wird in Portionen von 1 ausgedrückt, wie `em`.

Angenommen, wir wollten eine Basis-Schriftgröße von 16px und ein h1 (Hauptüberschrift) im Äquivalent von 32px, aber wenn wir innerhalb des h1 ein `span` mit der Klasse `subheading` finden, sollte es ebenfalls in der Standardschriftgröße (normalerweise 16px) dargestellt werden.

Hier ist das HTML, das wir verwenden:

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

Das gleiche Problem ausgedrückt mit ems:

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

Wie Sie sehen können, wird die Mathematik schnell überwältigend, wenn Sie den Überblick über den Elternteil, den Elternteil des Elternteils, den Elternteil des Elternteils des Elternteils usw. behalten müssen. (Die meisten Designs werden in pixelbasierten Programmen durchgeführt, sodass die Mathematik von der Person durchgeführt werden muss, die das CSS kodiert).

Betreten Sie `rem`. Diese Einheit ist relativ zur Größe des Wurzelements und nicht zu einem anderen Elternteil. Das CSS kann somit umgeschrieben werden:

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

Einfacher, nicht wahr? Das funktioniert in [allen aktuellen Browsern](https://caniuse.com/#search=rem), also fühlen Sie sich frei, diese Einheit zu verwenden.

> [!NOTE]
> Sie werden feststellen, dass Opera Mini keine Schriftgrößen in rem unterstützt. Es wird seine eigene Schriftgröße festlegen, also machen Sie sich keine Mühe, ihm Schriftgrößen zuzuführen.

#### Warum sollte ich proportionale Einheiten verwenden?

Weil Sie nicht wissen, wann ein Browser auftauchen könnte, der Text, dessen Größe in Pixeln ausgedrückt wird, nicht aufzoomen will. Prüfen Sie auch die Statistiken Ihrer Website: Sie könnten Besuche von älteren Browsern erhalten.

Wir würden Folgendes empfehlen:

- Beschreiben Sie Schriftarten in `rem`-Einheiten, die meisten Browser werden sehr zufrieden damit sein;
- Lassen Sie ältere Browser Schriftarten mit ihrer eigenen internen Engine anzeigen. Die Browser-Engines ignorieren jede Eigenschaft oder jeden Wert im CSS, wenn sie damit nicht umgehen können, sodass Ihre Website weiterhin nutzbar bleibt, auch wenn sie nicht der Vision Ihres Designers entspricht. Ältere Browser sind ohnehin auf dem Rückzug.

> [!NOTE]
> Die Ergebnisse können unterschiedlich ausfallen. Wenn Sie sich um ältere Browser kümmern müssen, müssen Sie `em`s verwenden und ein bisschen mehr Mathematik betreiben.

### Linienbreite

Es gibt eine langanhaltende Debatte über die Zeilenlänge im Web, aber hier ist die Geschichte. Früher, als wir Zeitungen hatten, erkannten Drucker, dass die Augen des Lesers Schwierigkeiten haben würden, von einer Zeile zur nächsten zu wechseln, wenn die Zeilen zu lang wären. Die Lösung? Spalten.

Natürlich verschwindet das Problem nicht, wenn wir zum Web wechseln. Die Augen des Lesers funktionieren wie ein Shuttle von Zeile zu Zeile. Um es den Augen der Menschen einfacher zu machen, beschränken Sie die Linienbreite auf etwa 60 oder 70 Zeichen.

Um dies zu erreichen, können Sie eine Größe für das Container-Element Ihres Textes festlegen. Betrachten Sie dieses HTML:

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

Wir haben ein `div` mit der Klasse `container`. Wir können das `div` entweder so stylen, dass seine Breite (mit der `width`-Eigenschaft) festgelegt wird, oder seine maximale Breite, damit es nie zu groß wird (mittels der `max-width`-Eigenschaft). Wenn Sie eine elastische/responsive Website wünschen und nicht wissen, wie groß die Standardbreite des Browsers ist, können Sie die `max-width`-Eigenschaft verwenden, um bis zu 70 Zeichen pro Zeile und nicht mehr zuzulassen:

```css
div.container {
  max-width: 70em;
}
```

### Alternative Inhalte für Bilder, Audio und Video

Websites enthalten oft mehr als nur einfachen Text.

#### Bilder

Bilder können entweder dekorativ oder informativ sein, aber es gibt keine Garantie, dass Ihre Benutzer sie sehen können. Beispielsweise,

- Sehbehinderte Benutzer sind auf einen Screenreader angewiesen, der nur Text verarbeiten kann.
- Ihre Leser könnten ein sehr strenges Intranet verwenden, das Bilder von einem {{Glossary("CDN", "CDN")}} blockiert.
- Ihre Leser könnten Bilder deaktiviert haben, um Bandbreite zu sparen, insbesondere auf mobilen Geräten (siehe unten).

<!---->

- Dekorative Bilder
  - : Sie dienen nur der Dekoration und vermitteln keine wirkliche Information. Sie könnten meistens durch ein Hintergrundbild ersetzt werden. Stellen Sie sicher, dass sie ein leeres `alt`-Attribut haben: `<img src="deco.gif" alt="">`, damit sie den Text nicht verstopfen.
- Informative Bilder
  - : Sie werden verwendet, um Informationen zu vermitteln, daher ihr Name. Sie können zum Beispiel ein Diagramm enthalten oder die Geste einer Person zeigen oder andere Informationen vermitteln. Mindestens müssen Sie ein relevantes `alt`-Attribut bereitstellen.

Wenn das Bild kurz beschrieben werden kann, genügt ein `alt`-Attribut. Wenn das Bild nicht kurz beschrieben werden kann, müssen Sie entweder denselben Inhalt in einer anderen Form auf derselben Seite bereitstellen (z.B. ein Kreisdiagramm mit einer Tabelle ergänzen, die dieselben Daten liefert), oder auf ein `longdesc`-Attribut zurückgreifen. Der Wert dieses Attributs ist eine URL, die auf eine Ressource verweist, die den Inhalt des Bildes explizit im Detail beschreibt.

> [!NOTE]
> Der Gebrauch und sogar die Existenz von `longdesc` wird seit geraumer Zeit diskutiert. Bitte beziehen Sie sich auf die W3C's [Image Description Extension (longdesc)](https://www.w3.org/TR/html-longdesc/) für die vollständige Erklärung und gründliche Beispiele.

#### Audio/Video

Sie müssen auch Alternativen zum Multimedia-Inhalt bereitstellen.

- Untertitelung/Closed Captioning
  - : Sie sollten Untertitel in Ihrem Video hinzufügen, um Besucher zu berücksichtigen, die den Ton nicht hören können. Einige Benutzer haben Hörprobleme, keine funktionierenden Lautsprecher oder arbeiten in einer lauten Umgebung (wie im Zug).
- Transkription
  - : Untertitel funktionieren nur, wenn jemand das Video ansieht. Viele Benutzer haben keine Zeit oder das richtige Plugin oder Codec fehlt. Darüber hinaus verlassen sich Suchmaschinen hauptsächlich auf Text, um Ihre Inhalte zu indexieren. Aus all diesen Gründen sollten Sie eine Texttranskription der Video-/Audiodatei bereitstellen.

### Bildkompression

Einige Benutzer können sich entscheiden, Bilder anzuzeigen, haben aber trotzdem eine begrenzte Bandbreite zur Verfügung, insbesondere in Entwicklungsländern und auf mobilen Geräten. Wenn Sie eine erfolgreiche Website möchten, komprimieren Sie bitte Ihre Bilder. Es gibt verschiedene Tools, um Ihnen zu helfen, entweder online oder lokal:

- **Installierte Software.** [ImageOptim](https://imageoptim.com/api) (Mac), [OptiPNG](https://optipng.sourceforge.net/) (alle Plattformen), [PNGcrush](https://pmt.sourceforge.io/pngcrush/) (DOS, Unix/Linux)
- **Online-Tools.** Dynamic drive's [Online Image Optimizer](https://tools.dynamicdrive.com/imageoptimizer/) (der automatisch von einem Format zu einem anderen konvertieren kann, wenn es bandbreiteneffizienter ist)
