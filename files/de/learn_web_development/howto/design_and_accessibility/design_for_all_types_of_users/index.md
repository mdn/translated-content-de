---
title: Wie können wir für alle Benutzertypen gestalten?
slug: Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Dieser Artikel bietet grundlegende Tipps, um Ihnen dabei zu helfen, Websites für jede Art von Nutzern zu gestalten.

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
        Universelles Design bedeutet Gestaltung für alle, unabhängig von Behinderungen oder technischen Einschränkungen. Dieser Artikel listet die wichtigsten Schnellgewinne für universelles Design auf.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Beim Erstellen einer Website ist eine der wichtigsten Überlegungen das [Universelle Design](https://en.wikipedia.org/wiki/Universal_design): die Berücksichtigung aller Nutzer, unabhängig von Behinderungen, technischen Einschränkungen, Kultur, Standort und so weiter.

## Aktives Lernen

_Es sind noch keine aktiven Lerneinheiten verfügbar. [Bitte überlegen Sie, beizutragen](/de/docs/MDN/Community/Getting_started)._

## Gehen Sie tiefer ins Detail

### Farbkontrast

Um Ihren Text lesbar zu halten, verwenden Sie eine Textfarbe, die gut mit der Hintergrundfarbe kontrastiert. Machen Sie es besonders einfach, den Text zu lesen, um sehbehinderten Menschen und Menschen, die ihr Handy auf der Straße benutzen, zu helfen.

Das {{Glossary("W3C", "W3C")}} definiert eine gute Farbmischung mit einem Algorithmus, der das Helligkeitsverhältnis zwischen Vordergrund und Hintergrund berechnet. Diese Berechnung mag ziemlich kompliziert erscheinen, aber wir können uns auf Werkzeuge verlassen, die die Arbeit für uns erledigen.

Lassen Sie uns den [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) der Paciello Group herunterladen und installieren.

> [!NOTE]
> Alternativ finden Sie online eine Reihe von Kontrasttestern, wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM. Wir empfehlen einen lokalen Tester, da er mit einem Bildschirm-Farbauswahlwerkzeug ausgestattet ist, um einen Farbwert zu ermitteln.

Lassen Sie uns zum Beispiel die Farben auf dieser Seite testen und sehen, wie wir im Color Contrast Analyser abschneiden:

![Farbkontrast auf dieser Seite: ausgezeichnet!](color-contrast.png)

Das Helligkeitskontrastverhältnis zwischen Text und Hintergrund beträgt 8.30:1, was den Mindeststandard (4.5:1) übertrifft und vielen sehbehinderten Menschen ermöglichen sollte, diese Seite zu lesen.

### Schriftgröße

Sie können die Schriftgröße auf einer Website entweder durch relative Einheiten oder absolute Einheiten angeben.

#### Absolute Einheiten

Absolute Einheiten werden nicht proportional berechnet, sondern beziehen sich sozusagen auf eine festgelegte Größe und werden meistens in Pixeln (`px`) angegeben. Wenn Sie beispielsweise in Ihrem CSS dies deklarieren:

```css
body {
  font-size: 16px;
}
```

… teilen Sie dem Browser mit, dass unabhängig von allem die Schriftgröße 16 Pixel betragen muss. Moderne Browser umgehen diese Regel, indem sie so tun, als würden Sie nach "16 Pixeln bei einem Zoomfaktor von 100%" fragen.

#### Relative Einheiten

Auch _proportionale Einheiten_ genannt, sind relative Einheiten relativ zu einem Elternelement berechnet. Relative Einheiten sind nutzerfreundlicher für Barrierefreiheit, da sie die Einstellungen am System des Nutzers respektieren.

Relative Einheiten werden in `em`, `%` und `rem` ausgedrückt:

- Prozentsatz-basierte Größen: `%`
  - : Diese Einheit teilt Ihrem Browser mit, dass die Schriftgröße eines Elements N% der Schriftgröße des vorherigen Elements sein muss. Wenn kein Elternteil gefunden wird, wird die Standardschriftgröße des Browsers als Basisgröße für die Berechnung verwendet (normalerweise das Äquivalent von 16 Pixeln).
- Em-basierte Größen: `em`
  - : Diese Einheit wird genauso berechnet wie Prozentsätze, außer dass Sie in Anteilen von 1 und nicht in Anteilen von 100 rechnen. Es heißt, "em" sei die Breite eines großen "M" im Alphabet (grob gesagt, ein "M" passt in ein Quadrat).
- Rem-basierte Größen: `rem`
  - : Diese Einheit ist proportional zur Schriftgröße des Wurzelelements und wird, wie `em`, in Anteilen von 1 ausgedrückt.

Angenommen, wir möchten eine Basis-Schriftgröße von 16px und ein h1 (Hauptüberschrift) im Äquivalent von 32px, dabei sollte jedoch ein `span` mit der Klasse `subheading` innerhalb des h1 ebenfalls mit der Standardschriftgröße (normalerweise 16px) dargestellt werden.

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

Ein prozentsatzbasiertes CSS wird so aussehen:

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

Wie Sie sehen können, wird die Mathematik schnell kompliziert, wenn Sie den Überblick über den Elternteil, den Elternteil des Elternteils usw. behalten müssen. (Die meisten Entwürfe werden in pixelbasierter Software gemacht, daher muss die Mathematik von der Person durchgeführt werden, die das CSS codiert).

Hier kommt `rem` ins Spiel. Diese Einheit ist relativ zur Größe des Wurzelelements und nicht zu irgendeinem anderen Elternteil. Das CSS kann so umgeschrieben werden:

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

Einfacher, nicht wahr? Dies funktioniert in [allen aktuellen Browsern](https://caniuse.com/#search=rem), also zögern Sie nicht, diese Einheit zu verwenden.

> [!NOTE]
> Sie könnten bemerken, dass Opera Mini keine Schriftgrößen in `rem` unterstützt. Es wird am Ende seine eigene Schriftgröße festlegen, also machen Sie sich keine Mühe, es mit Schriftgrößen zu versorgen.

#### Warum sollte ich proportionale Einheiten verwenden wollen?

Weil Sie nicht wissen, wann ein Browser vorbeikommt und sich weigert, Text zu vergrößern, dessen Größe in Pixeln ausgedrückt ist. Prüfen Sie auch die Statistiken Ihrer Website: möglicherweise erhalten Sie Besuche von älteren Browsern.

Wir würden Folgendes empfehlen:

- Beschreiben Sie Schriften in `rem`-Einheiten, die meisten Browser werden sehr zufrieden damit sein;
- Lassen Sie ältere Browser Schriften mit ihrem eigenen internen Mechanismus anzeigen. Browser-Engines ignorieren jede Eigenschaft oder jeden Wert im CSS, wenn sie nicht damit umgehen können, sodass Ihre Website immer noch nutzbar ist, selbst wenn sie nicht der Vision des Designers entspricht. Ältere Browser sind sowieso auf dem Rückzug.

> [!NOTE]
> Ihre Erfahrungen können variieren. Wenn Sie ältere Browser unterstützen müssen, müssen Sie `em` verwenden und etwas mehr Mathematik anwenden.

### Zeilenbreite

Es gibt eine lang andauernde Debatte über die Zeilenlänge im Web, aber hier ist die Geschichte. Als wir noch Zeitungen hatten, stellten die Drucker fest, dass die Augen des Lesers Schwierigkeiten haben würden, von einer Zeile zur nächsten zu wechseln, wenn die Zeilen zu lang waren. Die Lösung? Spalten.

Natürlich verschwindet das Problem nicht, wenn wir zum Web wechseln. Die Augen des Lesers bewegen sich von Zeile zu Zeile. Um es den Augen der Menschen zu erleichtern, begrenzen Sie die Zeilenbreite auf etwa 60 oder 70 Zeichen.

Um dies zu erreichen, können Sie eine Größe für den Container Ihres Textes festlegen. Betrachten wir dieses HTML:

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

Wir haben ein `div` mit der Klasse `container`. Wir können das `div` entweder so gestalten, dass seine Breite (mit der Eigenschaft `width`) oder seine maximale Breite, sodass es niemals zu groß wird (mit der Eigenschaft `max-width`), eingestellt wird. Wenn Sie eine elastische/responsive Website möchten und nicht wissen, wie die Standardbreite des Browsers ist, können Sie die Eigenschaft `max-width` verwenden, um bis zu 70 Zeichen pro Zeile zu erlauben und nicht mehr:

```css
div.container {
  max-width: 70em;
}
```

### Alternative Inhalte für Bilder, Audio und Videos

Websites enthalten oft Inhalte neben einfachem Text.

#### Bilder

Bilder können entweder dekorativ oder informativ sein, aber es gibt keine Garantie dafür, dass Ihre Benutzer sie sehen können. Beispielsweise,

- Sehbehinderte Benutzer sind auf einen Screenreader angewiesen, der nur Text verarbeiten kann.
- Ihre Leser verwenden möglicherweise ein sehr striktes Intranet, das Bilder blockiert, die von einem {{Glossary("CDN", "CDN")}} stammen.
- Ihre Leser haben möglicherweise Bilder deaktiviert, um Bandbreite zu sparen, insbesondere auf mobilen Geräten (siehe unten).

<!---->

- Dekorative Bilder
  - : Sie dienen nur der Dekoration und vermitteln keine wirklichen Informationen. Sie könnten meist durch ein Hintergrundbild ersetzt werden. Stellen Sie sicher, dass sie ein leeres `alt`-Attribut haben: `<img src="deco.gif" alt="">`, damit sie den Text nicht verstopfen.
- Informative Bilder
  - : Sie werden verwendet, um Informationen zu vermitteln. Sie können zum Beispiel ein Diagramm zeigen oder die Geste einer Person darstellen oder andere Informationen. Mindestens müssen Sie ein relevantes `alt`-Attribut bereitstellen.

Wenn das Bild kurz beschrieben werden kann, können Sie ein `alt`-Attribut bereitstellen und nichts weiter. Wenn das Bild nicht kurz beschrieben werden kann, müssen Sie entweder denselben Inhalt in einer anderen Form auf derselben Seite bereitstellen (z. B. ein Kreisdiagramm mit einer Tabelle ergänzen, die dieselben Daten bereitstellt), oder auf ein `longdesc`-Attribut zurückgreifen. Der Wert dieses Attributs ist eine URL, die auf eine Ressource verweist, die den Inhalt des Bildes ausführlich beschreibt.

> [!NOTE]
> Die Nutzung und sogar die Existenz von `longdesc` wird seit einiger Zeit diskutiert. Bitte beziehen Sie sich auf die [Image Description Extension (longdesc)](https://www.w3.org/TR/html-longdesc/) des W3C für die vollständige Erklärung und umfassende Beispiele.

#### Audio/Video

Sie müssen auch Alternativen zu multimedialen Inhalten bereitstellen.

- Untertitel
  - : Sie sollten Untertitel in Ihrem Video einfügen, um Besucher anzusprechen, die das Audio nicht hören können. Einige Benutzer haben Hörprobleme, keine funktionierenden Lautsprecher oder arbeiten in einer lauten Umgebung (z.B. im Zug).
- Transkription
  - : Untertitel funktionieren nur, wenn jemand das Video ansieht. Viele Benutzer haben keine Zeit oder es fehlt ihnen das entsprechende Plugin oder der Codec. Zusätzlich verlassen sich Suchmaschinen hauptsächlich auf Text, um Ihre Inhalte zu indexieren. Aus all diesen Gründen, stellen Sie bitte ein Texttranskript der Video-/Audiodatei bereit.

### Bildkompression

Einige Benutzer entscheiden sich möglicherweise dafür, Bilder anzuzeigen, haben jedoch immer noch eine begrenzte Bandbreite zur Verfügung, insbesondere in Entwicklungsländern und auf mobilen Geräten. Wenn Sie eine erfolgreiche Website wünschen, komprimieren Sie bitte Ihre Bilder. Es gibt verschiedene Werkzeuge, die Ihnen helfen, entweder online oder lokal. Im Allgemeinen werden lokale Tools bevorzugt, da sie besser in Ihren Entwicklungs-Workflow integriert werden können; zu diesen Tools gehören [ImageOptim](https://imageoptim.com/api) (Mac), [OptiPNG](https://optipng.sourceforge.net/) (alle Plattformen) und [PNGcrush](https://pmt.sourceforge.io/pngcrush/) (DOS, Unix/Linux).
