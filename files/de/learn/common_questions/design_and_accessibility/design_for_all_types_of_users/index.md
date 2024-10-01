---
title: Wie können wir für alle Arten von Benutzern gestalten?
slug: Learn/Common_questions/Design_and_accessibility/Design_for_all_types_of_users
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel bietet grundlegende Tipps, um Ihnen bei der Gestaltung von Websites für alle Arten von Benutzern zu helfen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zuerst
        <a href="/de/docs/Learn/Common_questions/Design_and_accessibility/What_is_accessibility">Was ist Barrierefreiheit?</a> lesen, da wir Barrierefreiheit hier nicht im Detail behandeln.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Universelles Design bedeutet Gestaltung für alle, unabhängig von Behinderungen oder technischen Einschränkungen. Dieser Artikel listet die wichtigsten Schnellgewinne für universelles Design auf.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Beim Erstellen einer Website ist ein wichtiger Aspekt, den Sie berücksichtigen sollten, das [Universal Design](https://en.wikipedia.org/wiki/Universal_design): die Berücksichtigung aller Benutzer, unabhängig von Behinderung, technischen Einschränkungen, Kultur, Standort usw.

## Aktives Lernen

_Es gibt noch kein aktives Lernmaterial. [Bitte in Betracht ziehen, beizutragen](/de/docs/MDN/Community/Contributing/Getting_started)._

## Tiefer eintauchen

### Farbkontrast

Um Ihren Text lesbar zu halten, verwenden Sie eine Textfarbe, die gut mit der Hintergrundfarbe kontrastiert. Machen Sie es besonders einfach, den Text zu lesen, um sehbehinderten Menschen und Menschen zu helfen, die unterwegs ihr Handy benutzen.

Die {{Glossary("W3C", "W3C")}} definiert eine gute Farbmischung mit einem Algorithmus, der das Leuchtdichtenverhältnis zwischen Vorder- und Hintergrund berechnet. Die Berechnung mag ziemlich kompliziert erscheinen, aber wir können uns auf Werkzeuge verlassen, die die Arbeit für uns erledigen.

Lassen Sie uns den [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) der Paciello-Gruppe herunterladen und installieren.

> [!NOTE]
> Alternativ können Sie online eine Reihe von Kontrastprüfern finden, wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM. Wir empfehlen einen lokalen Prüfer, da er mit einem Bildschirmfarbenpicker ausgestattet ist, um einen Farbwert zu ermitteln.

Testen wir zum Beispiel die Farben auf dieser Seite und sehen, wie wir uns im Color Contrast Analyser schlagen:

![Farbkontrast auf dieser Seite: ausgezeichnet!](color-contrast.png)

Das Leuchtdichtenkontrastverhältnis zwischen Text und Hintergrund beträgt 8,30:1, welches den Mindeststandard (4,5:1) überschreitet und vielen sehbehinderten Menschen das Lesen dieser Seite ermöglichen sollte.

### Schriftgröße

Sie können die Schriftgröße auf einer Website entweder durch relative Einheiten oder absolute Einheiten angeben.

#### Absolute Einheiten

Absolute Einheiten werden nicht proportional berechnet, sondern beziehen sich auf eine festgelegte Größe und werden meist in Pixeln (`px`) ausgedrückt. Wenn Sie beispielsweise in Ihrem CSS dies deklarieren:

```css
body {
  font-size: 16px;
}
```

… sagen Sie dem Browser, dass die Schriftgröße unabhängig von allem 16 Pixel betragen muss. Moderne Browser umgehen diese Regel, indem sie so tun, als ob Sie "16 Pixel bei einem Zoomfaktor von 100%" verlangen.

#### Relative Einheiten

Auch _proportionale Einheiten_ genannt, werden relative Einheiten im Verhältnis zu einem übergeordneten Element berechnet. Relative Einheiten sind benutzerfreundlicher in Bezug auf Barrierefreiheit, da sie die Einstellungen des Systems des Benutzers respektieren.

Relative Einheiten werden in `em`, `%` und `rem` ausgedrückt:

- Prozentbasierte Größen: `%`
  - : Diese Einheit sagt Ihrem Browser, dass die Schriftgröße eines Elements N% von dem vorherigen Element sein muss, das eine Schriftgröße ausdrückte. Wenn kein übergeordnetes Element gefunden werden kann, wird die Standardschriftgröße innerhalb des Browsers als Basisgröße für die Berechnung betrachtet (normalerweise das Äquivalent von 16 Pixeln).
- Em-basierte Größen: `em`
  - : Diese Einheit wird auf die gleiche Weise wie Prozente berechnet, außer dass Sie in Einheiten von 1 und nicht in Einheiten von 100 rechnen. Es wird gesagt, dass "em" ist die Breite eines großen "M" im Alphabet (grob gesagt passt ein "M" in ein Quadrat).
- Rem-basierte Größen: `rem`
  - : Diese Einheit ist proportional zur Schriftgröße des Wurzelelements und wird wie `em` in Einheiten von 1 ausgedrückt.

Angenommen, wir wollten eine Grundschriftgröße von 16px und ein h1 (Hauptüberschrift) mit dem Äquivalent von 32px, jedoch, wenn wir innerhalb des h1 einen `span` mit der `subheading`-Klasse finden, soll auch dieser mit der Standardschriftgröße (normalerweise 16px) dargestellt werden.

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

Das gleiche Problem mit ems ausgedrückt:

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

Wie Sie sehen können, wird die Mathematik schnell schwer, wenn Sie den Überblick über das übergeordnete Element, das übergeordnete Element des übergeordneten Elements, das übergeordnete Element des übergeordneten Elements des übergeordneten Elements usw. behalten müssen. (Die meisten Designs werden in pixelbasierten Softwareprogrammen erstellt, daher muss die Mathematik von der Person erfolgen, die das CSS codiert.)

Betreten Sie `rem`. Diese Einheit bezieht sich auf die Größe des Wurzelelements und nicht auf ein anderes übergeordnetes Element. Das CSS kann folgendermaßen umgeschrieben werden:

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

Einfacher, nicht wahr? Dies funktioniert in [allen aktuellen Browsern](https://caniuse.com/#search=rem), also fühlen Sie sich frei, diese Einheit zu verwenden.

> [!NOTE]
> Sie werden vielleicht bemerken, dass Opera Mini die Schriftgrößenanpassung in `rem` nicht unterstützt. Es wird letztendlich seine eigene Schriftgröße festlegen, also kümmern Sie sich nicht darum, ihm Schriftgrößeinheiten zu füttern.

#### Warum sollte ich proportionale Einheiten verwenden wollen?

Weil Sie nicht wissen, wann ein Browser auftauchen wird und sich weigert, Text zu zoomen, dessen Größe in Pixeln ausgedrückt ist. Überprüfen Sie auch die Statistiken Ihrer Website: Sie könnten Besuche von älteren Browsern erhalten.

Wir würden Folgendes empfehlen:

- Beschreiben Sie Schriften in `rem`-Einheiten, die meisten Browser werden sehr glücklich mit ihnen sein;
- Lassen Sie ältere Browser Schriften mit ihrer eigenen internen Engine anzeigen. Die Browser-Engines ignorieren jede Eigenschaft oder jeden Wert im CSS, wenn sie damit nicht umgehen können, sodass Ihre Website immer noch verwendet werden kann, wenn auch nicht ganz entsprechend der Vision Ihres Designers. Ältere Browser sind ohnehin auf dem Weg nach draußen.

> [!NOTE]
> Ihre Erfahrungen können variieren. Wenn Sie sich um ältere Browser kümmern müssen, müssen Sie `em`s verwenden und etwas mehr rechnen.

### Zeilenbreite

Es gibt eine lange Diskussion über die Länge der Zeilen im Web, aber hier ist die Geschichte. Damals, als wir Zeitungen hatten, stellten Drucker fest, dass die Augen der Leser Probleme hatten, von einer Zeile zur nächsten zu wechseln, wenn die Zeilen zu lang waren. Die Lösung? Spalten.

Natürlich verschwindet das Problem nicht, wenn wir ins Web wechseln. Die Augen des Lesers fungieren wie ein Shuttle, das von Zeile zu Zeile geht. Um es den Augen der Menschen zu erleichtern, begrenzen Sie die Zeilenbreite auf etwa 60 oder 70 Zeichen.

Um dies zu erreichen, können Sie eine Größe für den Container Ihres Textes festlegen. Schauen wir uns dieses HTML an:

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

Wir haben ein `div` mit der Klasse `container`. Wir können das `div` so gestalten, dass entweder seine Breite (mit der `width`-Eigenschaft) oder seine maximale Breite festgelegt wird, sodass es nie zu groß wird (mit der `max-width`-Eigenschaft). Wenn Sie eine elastische/responsive Website möchten und die Standardbreite des Browsers nicht kennen, können Sie die `max-width`-Eigenschaft verwenden, um bis zu 70 Zeichen pro Zeile und nicht mehr zuzulassen:

```css
div.container {
  max-width: 70em;
}
```

### Alternative Inhalte für Bilder, Audio und Video

Websites beinhalten oft Dinge neben einfachem Text.

#### Bilder

Bilder können entweder dekorativ oder informativ sein, aber es gibt keine Garantie dafür, dass Ihre Benutzer sie sehen können. Zum Beispiel,

- Sehbehinderte Benutzer verlassen sich auf einen Bildschirmleser, der nur Text verarbeiten kann.
- Ihre Leser verwenden möglicherweise ein sehr striktes Intranet, das Bilder blockiert, die von einem {{Glossary("CDN", "CDN")}} stammen.
- Ihre Leser haben möglicherweise Bilder deaktiviert, um Bandbreite zu sparen, insbesondere auf mobilen Geräten (siehe unten).

<!---->

- Dekorative Bilder
  - : Sie dienen nur der Dekoration und vermitteln keine wirklichen Informationen. Sie könnten meist durch ein Hintergrundbild ersetzt werden. Stellen Sie sicher, dass sie ein leeres `alt`-Attribut enthalten: `<img src="deco.gif" alt="">`, sodass sie den Text nicht verstopfen.
- Informative Bilder
  - : Sie dienen der Informationsübermittlung, daher ihr Name. Sie können beispielsweise ein Diagramm darstellen oder die Geste einer Person zeigen oder andere Informationen. Mindestens müssen Sie ein relevantes `alt`-Attribut bereitstellen.

Wenn das Bild knapp beschrieben werden kann, können Sie ein `alt`-Attribut angeben und nichts weiter. Wenn das Bild nicht knapp beschrieben werden kann, müssen Sie entweder denselben Inhalt in einer anderen Form auf derselben Seite bereitstellen (z. B. ein Kreisdiagramm mit einer Tabelle ergänzen, die dieselben Daten bereitstellt), oder auf ein `longdesc`-Attribut zurückgreifen. Der Wert dieses Attributs ist eine URL, die auf eine Ressource verweist, die im Detail den Inhalt des Bildes beschreibt.

> [!NOTE]
> Die Nutzung und sogar die Existenz von `longdesc` wurde lange Zeit diskutiert. Bitte lesen Sie die W3C's [Image Description Extension (longdesc)](https://www.w3.org/TR/html-longdesc/) für die vollständige Erklärung und detaillierte Beispiele.

#### Audio/Video

Sie müssen auch Alternativen zu Multimedia-Inhalten bereitstellen.

- Untertitelung/Closed Captioning
  - : Sie sollten in Ihrem Video Untertitel einfügen, um Besucher zu unterstützen, die den Ton nicht hören können. Einige Benutzer haben Hörprobleme, verfügen über nicht funktionierende Lautsprecher oder arbeiten in einer lauten Umgebung (wie in einem Zug).
- Transkript
  - : Untertitel funktionieren nur, wenn jemand das Video anschaut. Viele Benutzer haben keine Zeit, oder es fehlt ihnen das geeignete Plugin oder Codec. Darüber hinaus verlassen sich Suchmaschinen hauptsächlich auf Text, um Ihre Inhalte zu indexieren. Aus all diesen Gründen bieten Sie bitte ein Texttranskript der Video-/Audiodatei an.

### Bildkompression

Einige Benutzer können sich entscheiden, Bilder anzuzeigen, haben aber dennoch eine begrenzte verfügbare Bandbreite, insbesondere in Entwicklungsländern und auf mobilen Geräten. Wenn Sie eine erfolgreiche Website wünschen, komprimieren Sie bitte Ihre Bilder. Es gibt verschiedene Werkzeuge, die Ihnen helfen, entweder online oder lokal:

- **Installierte Software.** [ImageOptim](https://imageoptim.com/api) (Mac), [OptiPNG](https://optipng.sourceforge.net/) (alle Plattformen), [PNGcrush](https://pmt.sourceforge.io/pngcrush/) (DOS, Unix/Linux)
- **Online-Werkzeuge.** Dynamic Drive's [Online Image Optimizer](https://tools.dynamicdrive.com/imageoptimizer/) (der automatisch von einem Format zu einem anderen konvertieren kann, wenn es bandbreiteneffizienter ist)
