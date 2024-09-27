---
title: Wie können wir für alle Benutzer entwerfen?
slug: Learn/Common_questions/Design_and_accessibility/Design_for_all_types_of_users
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel bietet grundlegende Tipps, um Ihnen beim Entwerfen von Websites für jede Art von Benutzern zu helfen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zunächst
        <a href="/de/docs/Learn/Common_questions/Design_and_accessibility/What_is_accessibility"
          >Was ist Barrierefreiheit?</a
        > lesen, da wir Barrierefreiheit hier nicht im Detail behandeln.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Universelles Design bedeutet Design für alle, unabhängig von Behinderungen
        oder technischen Einschränkungen. Dieser Artikel listet die wichtigsten
        Schnellgewinne für universelles Design auf.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine Website erstellen, ist ein zentrales Thema, das Sie berücksichtigen sollten, das [Universelle Design](https://en.wikipedia.org/wiki/Universal_design): die Anpassung an alle Benutzer, unabhängig von Behinderung, technischen Einschränkungen, Kultur, Standort usw.

## Aktives Lernen

_Es gibt noch kein aktives Lernen. [Bitte erwägen Sie einen Beitrag](/de/docs/MDN/Community/Contributing/Getting_started)._

## Gehen Sie tiefer

### Farbkontrast

Um Ihren Text gut lesbar zu halten, verwenden Sie eine Textfarbe, die einen guten Kontrast zur Hintergrundfarbe hat. Machen Sie es besonders einfach, den Text zu lesen, um sehbehinderten Menschen und Menschen, die ihre Telefone auf der Straße benutzen, zu helfen.

Das [W3C](/de/docs/Glossary/W3C) definiert eine gute Farbmischung mit einem Algorithmus, der das Leuchtverhältnis zwischen Vordergrund und Hintergrund berechnet. Die Berechnung mag ziemlich kompliziert erscheinen, aber wir können uns auf Werkzeuge verlassen, die das für uns erledigen.

Lassen Sie uns den [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) von der Paciello Group herunterladen und installieren.

> [!NOTE]
> Alternativ finden Sie online eine Reihe von Kontrastprüfern, wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM. Wir empfehlen einen lokalen Checker, da dieser mit einem Bildschirm-Farbwähler ausgestattet ist, um einen Farbwert zu ermitteln.

Lassen Sie uns zum Beispiel die Farben auf dieser Seite testen und sehen, wie wir im Color Contrast Analyser abschneiden:

![Farbkontrast auf dieser Seite: ausgezeichnet!](color-contrast.png)

Das Leuchtverhältnis zwischen Text und Hintergrund beträgt 8.30:1, was den Mindeststandard (4.5:1) übertrifft und vielen sehbehinderten Menschen das Lesen dieser Seite ermöglichen sollte.

### Schriftgröße

Sie können die Schriftgröße auf einer Website entweder durch relative Einheiten oder absolute Einheiten angeben.

#### Absolute Einheiten

Absolute Einheiten werden nicht proportional berechnet, sondern beziehen sich auf eine feste Größe und werden die meiste Zeit in Pixeln (`px`) ausgedrückt. Wenn Sie beispielsweise in Ihrem CSS dies deklarieren:

```css
body {
  font-size: 16px;
}
```

… teilen Sie dem Browser mit, dass die Schriftgröße in jedem Fall 16 Pixel betragen muss. Moderne Browser umgehen diese Regel, indem sie so tun, als würden Sie nach "16 Pixel bei einem Zoomfaktor von 100%" fragen.

#### Relative Einheiten

Relative Einheiten, auch _proportionale Einheiten_ genannt, werden relativ zu einem übergeordneten Element berechnet. Relative Einheiten sind benutzerfreundlicher in Bezug auf Barrierefreiheit, da sie die Einstellungen des Benutzersystems respektieren.

Relative Einheiten werden in `em`, `%` und `rem` ausgedrückt:

- Prozentbasierte Größen: `%`
  - : Diese Einheit sagt Ihrem Browser, dass die Schriftgröße eines Elements N% der vorherigen Elementgröße sein muss, deren Schriftgröße ausgedrückt wurde. Wenn kein übergeordnetes Element gefunden werden kann, wird die Standardschriftgröße im Browser als Basisgröße für die Berechnung herangezogen (normalerweise das Äquivalent von 16 Pixeln).
- Em-basierte Größen: `em`
  - : Diese Einheit wird wie Prozent berechnet, außer dass Sie in Einheiten von 1 und nicht in Einheiten von 100 rechnen. Es heißt, dass "em" die Breite eines großen "M" im Alphabet ist (grob gesprochen passt ein "M" in ein Quadrat).
- Rem-basierte Größen: `rem`
  - : Diese Einheit ist proportional zur Schriftgröße des Wurzelelements und wird, wie `em`, in Einheiten von 1 ausgedrückt.

Angenommen, wir wollten eine Basisschriftgröße von 16px und eine h1 (Hauptüberschrift) in der Äquivalenz von 32px, doch innerhalb des h1 finden wir ein `span` mit der Klasse `subheading`, es muss ebenfalls in der Standardschriftgröße (normalerweise 16px) dargestellt werden.

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

Ein auf Prozentsätzen basierendes CSS würde folgendermaßen aussehen:

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

Wie Sie sehen, wird die Mathematik schnell abschreckend, wenn Sie den Überblick über das übergeordnete Element, das übergeordnete Element des übergeordneten Elements und so weiter behalten müssen. (Die meisten Designs werden in pixelbasierter Software erstellt, daher muss die Mathematik von der Person durchgeführt werden, die das CSS erstellt).

Hier kommt `rem` ins Spiel. Diese Einheit ist relativ zur Größe des Wurzelelements und nicht zu einem anderen übergeordneten Element. Das CSS kann so neu geschrieben werden:

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

Einfacher, nicht wahr? Dies funktioniert für [jeden aktuellen Browser](https://caniuse.com/#search=rem), also zögern Sie nicht, diese Einheit zu verwenden.

> [!NOTE]
> Sie werden vielleicht bemerken, dass Opera Mini die Schriftgrößenanpassung in rem nicht unterstützt. Dieser Browser wird seine eigene Schriftgröße festlegen, also kümmern Sie sich nicht darum, ihm Schriftgrößeneinheiten zu geben.

#### Warum sollte ich proportionale Einheiten verwenden?

Weil Sie nicht wissen, wann ein Browser kommt, der es ablehnt, Texte, deren Größe in Pixeln ausgedrückt ist, zu vergrößern. Überprüfen Sie auch die Statistiken Ihrer Website: Sie könnten Besuche von älteren Browsern erhalten.

Wir würden Folgendes raten:

- Beschreiben Sie Schriftarten in `rem`-Einheiten, die meisten Browser werden damit sehr zufrieden sein;
- Lassen Sie ältere Browser Schriftarten mit ihrem eigenen internen Mechanismus anzeigen. Die Browser-Engines ignorieren jede Eigenschaft oder jeden Wert im CSS, wenn sie damit nicht umgehen können, sodass Ihre Website auch dann noch benutzbar ist, wenn sie nicht der Vision Ihres Designers entspricht. Ältere Browser sind ohnehin auf dem Rückzug.

> [!NOTE]
> Ihre Erfahrungen können variieren. Wenn Sie ältere Browser unterstützen müssen, müssen Sie `em`s verwenden und ein wenig mehr Mathematik betreiben.

### Zeilenbreite

Es gibt eine langandauernde Debatte über Zeilenlängen im Web, aber hier ist die Geschichte. Früher, als wir Zeitungen hatten, erkannten Drucker, dass die Augen der Leser Schwierigkeiten hätten, von einer Zeile zur nächsten zu gelangen, wenn die Zeilen zu lang wären. Die Lösung? Spalten.

Natürlich verschwindet das Problem nicht, wenn wir zum Web wechseln. Die Augen der Leser verhalten sich wie ein Shuttle, das von Zeile zu Zeile geht. Um es den Augen der Menschen zu erleichtern, beschränken Sie die Zeilenbreite auf etwa 60 oder 70 Zeichen.

Um dies zu erreichen, können Sie eine Größe für das Container-Element Ihres Textes angeben. Betrachten wir dieses HTML:

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

Wir haben ein `div` mit der Klasse `container`. Wir können das `div` entweder so gestalten, dass es seine Breite (mit der `width`-Eigenschaft) oder seine maximale Breite so einstellt, dass es nie zu groß wird (mit der `max-width`-Eigenschaft). Wenn Sie eine elastische/responsive Website wünschen und nicht wissen, was die Standardbreite des Browsers ist, können Sie die `max-width`-Eigenschaft verwenden, um bis zu 70 Zeichen pro Zeile zuzulassen und nicht mehr:

```css
div.container {
  max-width: 70em;
}
```

### Alternative Inhalte für Bilder, Audio und Video

Websites enthalten oft mehr als reinen Text.

#### Bilder

Bilder können entweder dekorativ oder informativ sein, aber es gibt keine Garantie, dass Ihre Benutzer sie sehen können. Zum Beispiel:

- Sehbehinderte Benutzer sind auf einen Bildschirmleser angewiesen, der nur mit Text umgehen kann.
- Ihre Leser könnten ein sehr striktes Intranet verwenden, das Bilder blockiert, die von einem [CDN](/de/docs/Glossary/CDN) stammen.
- Ihre Leser könnten Bilder deaktiviert haben, um Bandbreite zu sparen, insbesondere auf mobilen Geräten (siehe unten).

<!---->

- Dekorative Bilder
  - : Sie sind nur zur Dekoration und vermitteln keine echten Informationen. Sie könnten meistens durch ein Hintergrundbild ersetzt werden. Stellen Sie sicher, dass sie ein leeres `alt`-Attribut haben: `<img src="deco.gif" alt="">`, damit sie den Text nicht verstopfen.
- Informationsbilder
  - : Sie werden verwendet, um Informationen zu vermitteln, daher ihr Name. Sie können zum Beispiel ein Diagramm enthalten oder die Geste einer Person zeigen oder jede andere Information. Mindestens müssen Sie ein relevantes `alt`-Attribut bereitstellen.

Wenn das Bild kurz beschrieben werden kann, können Sie einfach ein `alt`-Attribut angeben und nichts mehr. Wenn das Bild nicht kurz beschrieben werden kann, müssen Sie entweder den gleichen Inhalt in einer anderen Form auf derselben Seite bereitstellen (z. B. ein Kreisdiagramm durch eine Tabelle mit den gleichen Daten ergänzen) oder auf ein `longdesc`-Attribut zurückgreifen. Der Wert dieses Attributs ist eine URL, die auf eine Ressource verweist, die den Inhalt des Bildes detailliert beschreibt.

> [!NOTE]
> Die Verwendung und sogar die Existenz von `longdesc` wird seit einiger Zeit diskutiert. Bitte konsultieren Sie die W3C-Seite [Image Description Extension (longdesc)](https://www.w3.org/TR/html-longdesc/) für die vollständige Erklärung und ausführliche Beispiele.

#### Audio/Video

Sie müssen auch Alternativen zu multimedialem Inhalt bereitstellen.

- Untertitel/Closed Captions
  - : Sie sollten Untertitel in Ihr Video einfügen, um Besuchern gerecht zu werden, die das Audio nicht hören können. Einige Benutzer haben Hörprobleme, es fehlen funktionierende Lautsprecher oder sie arbeiten in einer lauten Umgebung (wie im Zug).
- Transkript
  - : Untertitel funktionieren nur, wenn jemand das Video anschaut. Viele Benutzer haben keine Zeit oder den passenden Plugin oder Codec. Außerdem verlassen sich Suchmaschinen hauptsächlich auf Text, um Ihre Inhalte zu indexieren. Aus all diesen Gründen sollten Sie ein Texttranskript der Video-/Audiodatei bereitstellen.

### Bildkompression

Einige Benutzer entscheiden sich möglicherweise dafür, Bilder anzuzeigen, haben jedoch dennoch eine begrenzte verfügbare Bandbreite, insbesondere in Entwicklungsländern und auf mobilen Geräten. Wenn Sie eine erfolgreiche Website möchten, komprimieren Sie bitte Ihre Bilder. Es gibt verschiedene Werkzeuge, die Ihnen helfen, entweder online oder lokal:

- **Installierte Software.** [ImageOptim](https://imageoptim.com/api) (Mac), [OptiPNG](https://optipng.sourceforge.net/) (alle Plattformen), [PNGcrush](https://pmt.sourceforge.io/pngcrush/) (DOS, Unix/Linux)
- **Online-Tools.** Dynamic Drives [Online Image Optimizer](https://tools.dynamicdrive.com/imageoptimizer/) (der automatisch von einem Format in ein anderes umwandeln kann, wenn es bandbreiteneffizienter ist)
