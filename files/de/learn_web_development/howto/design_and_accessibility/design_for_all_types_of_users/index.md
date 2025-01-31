---
title: Wie können wir für alle Benutzertypen gestalten?
slug: Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel bietet grundlegende Tipps, um Ihnen zu helfen, Webseiten für alle Arten von Benutzern zu gestalten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zuerst
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
        Quick-Wins für universelles Design auf.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine Webseite erstellen, ist ein wichtiges Thema das [Universelle Design](https://de.wikipedia.org/wiki/Universelles_Design): die Anpassung an alle Benutzer, unabhängig von Behinderung, technischen Einschränkungen, Kultur, Standort usw.

## Aktives Lernen

_Es gibt noch kein aktives Lernen. [Bitte überlegen Sie, ob Sie beitragen möchten](/de/docs/MDN/Community/Getting_started)._

## Vertiefung

### Farbkontrast

Um Ihren Text lesbar zu halten, verwenden Sie eine Textfarbe, die einen guten Kontrast zur Hintergrundfarbe bietet. Machen Sie es besonders einfach, den Text zu lesen, um sehbehinderten Menschen und Personen, die ihre Telefone auf der Straße benutzen, zu helfen.

Das {{Glossary("W3C", "W3C")}} definiert eine gute Farbmischung mit einem Algorithmus, der das Helligkeitsverhältnis zwischen Vordergrund und Hintergrund berechnet. Die Berechnung mag ziemlich kompliziert erscheinen, aber wir können uns auf Werkzeuge verlassen, die die Arbeit für uns erledigen.

Lassen Sie uns den [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) der Paciello Group herunterladen und installieren.

> [!NOTE]
> Alternativ finden Sie online eine Reihe von Kontrastprüfern, wie zum Beispiel WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/). Wir empfehlen einen lokalen Checker, da dieser mit einem Farbwähler auf dem Bildschirm geliefert wird, um einen Farbwert zu ermitteln.

Zum Beispiel lassen Sie uns die Farben auf dieser Seite testen und sehen, wie wir im Color Contrast Analyser abschneiden:

![Farbkontrast auf dieser Seite: ausgezeichnet!](color-contrast.png)

Das Helligkeitskontrastverhältnis zwischen Text und Hintergrund beträgt 8.30:1, was den Mindeststandard (4.5:1) übertrifft und vielen sehbehinderten Menschen ermöglichen sollte, diese Seite zu lesen.

### Schriftgröße

Sie können die Schriftgröße auf einer Webseite entweder durch relative Einheiten oder absolute Einheiten angeben.

#### Absolute Einheiten

Absolute Einheiten werden nicht proportional berechnet, sondern beziehen sich sozusagen auf eine festgelegte Größe und werden meistens in Pixeln (`px`) ausgedrückt. Zum Beispiel, wenn Sie in Ihrem CSS Folgendes deklarieren:

```css
body {
  font-size: 16px;
}
```

… dann teilen Sie dem Browser mit, dass die Schriftgröße unabhängig von den Umständen 16 Pixel betragen muss. Moderne Browser umgehen diese Regel, indem sie vortäuschen, Sie würden "16 Pixel bei einem Zoomfaktor von 100%" verlangen.

#### Relative Einheiten

Auch genannt _proportionale Einheiten,_ werden relative Einheiten relativ zu einem übergeordneten Element berechnet. Relative Einheiten sind benutzerfreundlicher, da sie die Einstellungen des Systems des Benutzers respektieren.

Relative Einheiten werden in `em`, `%` und `rem` ausgedrückt:

- Prozentbasierte Größen: `%`
  - : Diese Einheit teilt dem Browser mit, dass die Schriftgröße eines Elements N% der vorherigen Elementschriftgröße betragen muss, falls kein Elternteil gefunden werden kann, wird die Standardschriftgröße innerhalb des Browsers als Basisgröße für die Berechnung betrachtet (normalerweise das Äquivalent von 16 Pixeln).
- Em-basierte Größen: `em`
  - : Diese Einheit wird genauso wie Prozent berechnet, außer dass Sie in Portionen von eins und nicht in Portionen von hundert rechnen. Es wird gesagt, dass "em" die Breite eines großen "M" im Alphabet ist (grob gesagt, passt ein "M" in ein Quadrat).
- Rem-basierte Größen: `rem`
  - : Diese Einheit ist proportional zur Schriftgröße des Wurzelelements und wird als Teile von eins ausgedrückt, wie `em`.

Angenommen, wir wollten eine Basis-Schriftgröße von 16 Pixeln und eine h1 (Hauptüberschrift) im Äquivalent von 32 Pixeln, und wenn innerhalb der h1 ein `span` mit der Klasse `subheading` gefunden wird, muss es auch in der Standardschriftgröße (normalerweise 16 Pixel) gerendert werden.

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

Ein CSS, das auf Prozenten basiert, sieht so aus:

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

Wie Sie sehen können, wird die Mathematik schnell überwältigend, wenn Sie den Überblick über den Elternteil, den Elternteil des Elternteils, den Elternteil des Elternteils des Elternteils usw. behalten müssen. (Die meisten Designs werden in pixelbasierter Software erstellt, sodass die Mathematik von der Person erledigt werden muss, die das CSS codiert).

`rem` kommt ins Spiel. Diese Einheit ist relativ zur Größe des Wurzelelements und nicht zu einem anderen Elternteil. Das CSS kann so umgeschrieben werden:

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
> Ihnen fällt vielleicht auf, dass Opera Mini die Größenänderung von Schriftarten in rem nicht unterstützt. Es wird am Ende seine eigene Schriftgröße einstellen, also machen Sie sich keine Mühe, ihm Schriftgrößeneinheiten zu geben.

#### Warum würde ich proportionale Einheiten verwenden wollen?

Weil Sie nicht wissen, wann ein Browser auftaucht, der sich weigert, Text, dessen Größe in Pixeln ausgedrückt ist, zu vergrößern. Überprüfen Sie auch die Statistiken Ihrer Webseite: Möglicherweise erhalten Sie Besuche von älteren Browsern.

Wir würden Folgendes empfehlen:

- Beschreiben Sie Schriften in `rem`-Einheiten, die meisten Browser werden sehr zufrieden damit sein;
- Lassen Sie ältere Browser Schriftarten mit ihrem eigenen internen Motor anzeigen. Browser-Motoren ignorieren jede Eigenschaft oder jeden Wert im CSS, wenn sie damit nicht zurechtkommen, sodass Ihre Webseite immer noch nutzbar ist, wenn auch nicht ganz dem Design des Designers entsprechend. Ältere Browser sind ohnehin auf dem Rückzug.

> [!NOTE]
> Ihre Ergebnisse können variieren. Wenn Sie für ältere Browser sorgen müssen, müssen Sie `em`s verwenden und ein wenig mehr rechnen.

### Zeilenbreite

Es gibt eine langanhaltende Debatte über die Zeilenlänge im Web, aber hier ist die Geschichte. Als wir noch Zeitungen hatten, erkannten Drucker, dass die Augen des Lesers Schwierigkeiten haben würden, von einer Zeile zur nächsten zu wechseln, wenn die Zeilen zu lang waren. Die Lösung? Kolumnen.

Natürlich verschwindet das Problem nicht, wenn wir zum Web wechseln. Die Augen des Lesers bewegen sich wie ein Shuttle von Zeile zu Zeile. Um es den Augen der Menschen zu erleichtern, begrenzen Sie die Zeilenbreite auf etwa 60 oder 70 Zeichen.

Um dies zu erreichen, können Sie eine Größe für den Container Ihres Textes angeben. Betrachten wir dieses HTML:

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

Wir haben ein `div` mit der Klasse `container`. Wir können das `div` entweder so gestalten, dass es seine Breite einstellt (mit der Eigenschaft `width`) oder seine maximale Breite, damit es nie zu groß wird (mit der Eigenschaft `max-width`). Wenn Sie eine elastische/responsive Webseite wünschen und nicht wissen, welche Standardbreite der Browser hat, können Sie die `max-width`-Eigenschaft verwenden, um bis zu 70 Zeichen pro Zeile zuzulassen und nicht mehr:

```css
div.container {
  max-width: 70em;
}
```

### Alternative Inhalte für Bilder, Audio und Video

Webseiten enthalten oft Dinge, die über reinen Text hinausgehen.

#### Bilder

Bilder können entweder dekorativ oder informativ sein, aber es gibt keine Garantie, dass Ihre Benutzer sie sehen können. Zum Beispiel,

- Sehbehinderte Benutzer sind auf einen Bildschirmleser angewiesen, der nur Text verarbeiten kann.
- Ihre Leser verwenden möglicherweise ein sehr striktes Intranet, das Bilder blockiert, die von einem {{Glossary("CDN", "CDN")}} stammen.
- Ihre Leser haben möglicherweise Bilder deaktiviert, um Bandbreite zu sparen, insbesondere auf mobilen Geräten (siehe unten).

<!---->

- Dekorative Bilder
  - : Sie dienen nur der Dekoration und vermitteln keine wirklichen Informationen. Sie könnten meistens durch ein Hintergrundbild ersetzt werden. Stellen Sie sicher, dass sie ein leeres `alt`-Attribut haben: `<img src="deco.gif" alt="">`, damit sie nicht den Text verstopfen.
- Informationsbilder
  - : Sie werden verwendet, um Informationen zu vermitteln, daher der Name. Sie können zum Beispiel ein Diagramm zeigen, oder die Geste einer Person oder andere Informationen. Mindestens müssen Sie ein relevant `alt`-Attribut bereitstellen.

Wenn das Bild knapp beschrieben werden kann, können Sie ein `alt`-Attribut bereitstellen und nichts weiter. Wenn das Bild nicht knapp beschrieben werden kann, müssen Sie entweder den gleichen Inhalt in einer anderen Form auf derselben Seite bereitstellen (z.B. ein Kreisdiagramm durch eine Tabelle ergänzen, die dieselben Daten bereitstellt), oder auf ein `longdesc`-Attribut zurückgreifen. Der Wert dieses Attributs ist eine URL, die auf eine Ressource verweist, die den Bildinhalt ausführlich beschreibt.

> [!NOTE]
> Die Verwendung und sogar die Existenz von `longdesc` wurde schon lange diskutiert. Bitte beziehen Sie sich auf die W3C's [Image Description Extension (longdesc)](https://www.w3.org/TR/html-longdesc/) für die vollständige Erklärung und ausführliche Beispiele.

#### Audio/Video

Sie müssen auch Alternativen zu multimedialen Inhalten bereitstellen.

- Untertitel/Captions
  - : Sie sollten Untertitel in Ihr Video einfügen, um Besuchern zu helfen, die den Ton nicht hören können. Einige Nutzer haben Hörprobleme, keine funktionierenden Lautsprecher oder arbeiten in einer lauten Umgebung (wie im Zug).
- Transkript
  - : Untertitel funktionieren nur, wenn jemand das Video ansieht. Viele Benutzer haben keine Zeit oder es fehlt ihnen der richtige Plugin oder Codec. Darüber hinaus verlassen sich Suchmaschinen hauptsächlich auf Text, um Ihre Inhalte zu indexieren. Aus all diesen Gründen sollten Sie ein Texttranskript der Video-/Audio-Datei bereitstellen.

### Bildkompression

Einige Benutzer entscheiden sich möglicherweise, Bilder anzuzeigen, haben aber dennoch eine begrenzte verfügbare Bandbreite, insbesondere in Entwicklungsländern und auf mobilen Geräten. Wenn Sie eine erfolgreiche Webseite möchten, komprimieren Sie bitte Ihre Bilder. Es gibt verschiedene Tools, die Ihnen dabei helfen, entweder online oder lokal:

- **Installierte Software.** [ImageOptim](https://imageoptim.com/api) (Mac), [OptiPNG](https://optipng.sourceforge.net/) (alle Plattformen), [PNGcrush](https://pmt.sourceforge.io/pngcrush/) (DOS, Unix/Linux)
- **Online-Tools.** Dynamic Drives [Online Image Optimizer](https://tools.dynamicdrive.com/imageoptimizer/) (der automatisch von einem Format in das andere konvertiert, wenn es bandbreiteneffizienter ist)
