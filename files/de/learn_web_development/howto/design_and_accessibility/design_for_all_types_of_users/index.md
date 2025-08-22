---
title: Wie können wir für alle Arten von Benutzern gestalten?
slug: Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

Dieser Artikel bietet grundlegende Tipps, um Ihnen zu helfen, Websites für jede Art von Benutzer zu entwerfen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zuerst den Artikel
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility"
          >Was ist Barrierefreiheit?</a
        > lesen, da wir hier Barrierefreiheit nicht im Detail behandeln.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Universelles Design bedeutet Design für jedermann, unabhängig von
        Behinderungen oder technischen Einschränkungen. Dieser Artikel listet
        die wichtigsten Quick-Wins für universelles Design auf.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine Website erstellen, ist ein wichtiges Thema, das Sie berücksichtigen sollten, das [Universelle Design](https://en.wikipedia.org/wiki/Universal_design): die Anpassung an alle Benutzer, unabhängig von Behinderung, technischen Einschränkungen, Kultur, Standort usw.

## Tiefere Einblicke

### Farbkontrast

Um Ihren Text lesbar zu halten, verwenden Sie eine Textfarbe, die sich gut vom Hintergrund abhebt. Machen Sie es besonders einfach, den Text zu lesen, um sehbehinderte Menschen und Menschen, die ihre Telefone auf der Straße benutzen, zu unterstützen.

Das {{Glossary("W3C", "W3C")}} definiert eine gute Farbmischung mit einem Algorithmus, der das Helligkeitsverhältnis zwischen Vorder- und Hintergrund berechnet. Die Berechnung mag ziemlich kompliziert erscheinen, aber wir können uns auf Werkzeuge verlassen, um die Aufgabe für uns zu erledigen.

Lassen Sie uns den [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) der Paciello Group herunterladen und installieren.

> [!NOTE]
> Alternativ können Sie eine Reihe von Kontrasttestern online finden, wie zum Beispiel WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/). Wir empfehlen einen lokalen Checker, da er mit einem Bildschirmpipette ausgestattet ist, um einen Farbwert zu ermitteln.

Testen wir zum Beispiel die Farben auf dieser Seite und sehen, wie wir im Color Contrast Analyzer abschneiden:

![Farbkontrast auf dieser Seite: ausgezeichnet!](color-contrast.png)

Das Helligkeitskontrastverhältnis zwischen Text und Hintergrund beträgt 8.30:1, was den Mindeststandard (4.5:1) übertrifft und es vielen sehbehinderten Menschen ermöglichen sollte, diese Seite zu lesen.

### Schriftgröße

Sie können die Schriftgröße auf einer Website entweder durch relative Einheiten oder absolute Einheiten angeben.

#### Absolute Einheiten

Absolute Einheiten werden nicht proportional berechnet, sondern beziehen sich auf eine feste Größe, sozusagen, und werden meistens in Pixeln (`px`) angegeben. Wenn Sie zum Beispiel in Ihrem CSS dies deklarieren:

```css
body {
  font-size: 16px;
}
```

… sagen Sie dem Browser, dass die Schriftgröße unabhängig von allem 16 Pixel betragen muss. Moderne Browser umgehen diese Regel, indem sie so tun, als ob Sie "16 Pixel bei einem Zoomfaktor von 100 %" wünschen.

#### Relative Einheiten

Auch genannt _proportionale Einheiten,_ werden relative Einheiten relativ zu einem übergeordneten Element berechnet. Relative Einheiten sind barrierefreundlicher, da sie die Einstellungen im System des Benutzers respektieren.

Relative Einheiten werden in `em`, `%` und `rem` ausgedrückt:

- Prozentbasierte Größen: `%`
  - : Diese Einheit teilt Ihrem Browser mit, dass die Schriftgröße eines Elements N% der vorherigen, ausgedrückten Schriftgröße betragen muss. Wenn kein übergeordnetes Element gefunden werden kann, wird die Standardschriftgröße des Browsers als Basisgröße für die Berechnung betrachtet (meistens entspricht dies 16 Pixel).
- Em-basierte Größen: `em`
  - : Diese Einheit wird auf die gleiche Weise wie Prozent berechnet, außer dass Sie in Teilen von 1 und nicht in Teilen von 100 berechnen. Es wird gesagt, dass "em" die Breite eines großen "M" im Alphabet ist (grob gesagt, ein "M" passt in ein Quadrat).
- Rem-basierte Größen: `rem`
  - : Diese Einheit ist proportional zur Schriftgröße des Hauptelements und wird in Teilen von 1 ausgedrückt, wie `em`.

Stellen wir uns vor, wir wollten eine Basis-Schriftgröße von 16px und eine h1 (Hauptüberschrift) mit dem Äquivalent von 32px, und innerhalb der h1 finden wir einen `span` mit der Klasse `subheading`, der ebenfalls in der Standardschriftgröße (normalerweise 16px) gerendert werden muss.

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

Ein CSS auf Prozentbasis sieht folgendermaßen aus:

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

Dasselbe Problem mit ems ausgedrückt:

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

Wie Sie sehen können, wird die Mathematik schnell schwierig, wenn Sie sich um das übergeordnete Element, das Elternteil des übergeordneten Elements, das Elternteil des Elternteils des übergeordneten Elements usw. kümmern müssen. (Die meisten Designs werden in pixelbasierter Software erstellt, sodass die Mathematik von der Person durchgeführt werden muss, die das CSS codiert).

Hier kommt `rem` ins Spiel. Diese Einheit ist relativ zur Größe des Hauptelements und nicht zu einem anderen übergeordneten Element. Das CSS kann somit umgeschrieben werden:

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

Einfacher, nicht wahr? Das funktioniert ab [jedem aktuellen Browser](https://caniuse.com/#search=rem), also fühlen Sie sich frei, diese Einheit zu verwenden.

> [!NOTE]
> Sie werden feststellen, dass Opera Mini keine Schriftgrößen in rem unterstützt. Es wird am Ende seine eigene Schriftgröße setzen, also machen Sie sich nicht die Mühe, ihm Schriftgrößen zuzuweisen.

#### Warum sollte ich proportionale Einheiten verwenden wollen?

Weil Sie nicht wissen, wann ein Browser kommt und sich weigert, Text, dessen Größe in Pixeln ausgedrückt wird, zu zoomen. Überprüfen Sie auch die Statistiken Ihrer Website: Sie könnten Besuche von älteren Browsern erhalten.

Wir würden das Folgende empfehlen:

- Beschreiben Sie Schriften in `rem`-Einheiten, die meisten Browser werden sehr zufrieden damit sein;
- Lassen Sie ältere Browser Schriften mit ihrer eigenen internen Engine anzeigen. Die Engines der Browser ignorieren jede Eigenschaft oder Wert im CSS, wenn sie nicht damit umgehen können, sodass Ihre Website immer noch nutzbar ist, auch wenn sie nicht ganz der Vision Ihres Designers entspricht. Ältere Browser sind ohnehin auf dem absteigenden Ast.

> [!NOTE]
> Ihre Erfahrungen können variieren. Wenn Sie auf ältere Browser Rücksicht nehmen müssen, müssen Sie `em`s verwenden und etwas mehr Mathematik betreiben.

### Zeilenbreite

Es gibt eine langanhaltende Debatte über die Zeilenlänge im Web, aber hier ist die Geschichte. Zurück, als wir noch Zeitungen hatten, erkannten Drucker, dass die Augen der Leser Schwierigkeiten haben würden, von einer Zeile zur nächsten zu springen, wenn die Zeilen zu lang wären. Die Lösung? Spalten.

Natürlich verschwindet das Problem nicht, wenn wir ins Web wechseln. Die Augen des Lesers agieren wie ein Schlitten, der von Zeile zu Zeile springt. Um es den Augen der Menschen leichter zu machen, beschränken Sie die Zeilenbreite auf etwa 60 oder 70 Zeichen.

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

Wir haben ein `div` mit der Klasse `container`. Wir können das `div` entweder so gestalten, dass es seine Breite (mit dem `width`-Attribut) oder seine maximale Breite so einstellt, dass es nie zu groß wird (mit dem `max-width`-Attribut). Wenn Sie eine elastische/responsive Website möchten und nicht wissen, wie breit der Browser standardmäßig ist, können Sie das `max-width`-Attribut verwenden, um bis zu 70 Zeichen pro Zeile zuzulassen und nicht mehr:

```css
div.container {
  max-width: 70em;
}
```

### Alternative Inhalte für Bilder, Audio und Video

Websites enthalten häufig mehr als nur reinen Text.

#### Bilder

Bilder können entweder dekorativ oder informativ sein, aber es gibt keine Garantie dafür, dass Ihre Benutzer sie sehen können. Beispielsweise,

- Sehbehinderte Benutzer sind auf einen Screenreader angewiesen, der nur Text verarbeiten kann.
- Ihre Leser könnten ein sehr striktes Intranet verwenden, das Bilder blockiert, die von einem {{Glossary("CDN", "CDN")}} stammen.
- Ihre Leser könnten Bilder deaktiviert haben, um Bandbreite zu sparen, insbesondere auf mobilen Geräten (siehe unten).

<!---->

- Dekorative Bilder
  - : Sie dienen nur zur Dekoration und vermitteln keine wirklichen Informationen. Sie könnten meistens durch ein Hintergrundbild ersetzt werden. Stellen Sie sicher, dass sie ein leeres `alt`-Attribut aufweisen: `<img src="deco.gif" alt="">`, damit sie den Text nicht verstopfen.
- Informative Bilder
  - : Sie werden verwendet, um Informationen zu vermitteln, daher ihr Name. Sie können zum Beispiel ein Diagramm zeigen oder eine Geste einer Person darstellen oder andere Informationen bereitstellen. Zumindest müssen Sie ein aussagekräftiges `alt`-Attribut bereitstellen.

Wenn das Bild knapp beschrieben werden kann, können Sie ein `alt`-Attribut und nichts weiter bereitstellen. Wenn das Bild nicht knapp beschrieben werden kann, müssen Sie entweder den gleichen Inhalt in einer anderen Form auf derselben Seite bereitstellen (z.B. ein Tortendiagramm durch eine Tabelle mit den gleichen Daten ergänzen) oder auf ein `longdesc`-Attribut zurückgreifen. Der Wert dieses Attributs ist eine URL, die auf eine Ressource zeigt, welche den Inhalt des Bildes detailliert beschreibt.

> [!NOTE]
> Die Nutzung und sogar die Existenz von `longdesc` wurde lange Zeit diskutiert. Bitte beziehen Sie sich auf die W3C-Richtlinien zur [Image Description Extension (longdesc)](https://www.w3.org/TR/html-longdesc/) für die vollständige Erklärung und ausführliche Beispiele.

#### Audio/Video

Sie müssen auch Alternativen zu multimedialen Inhalten anbieten.

- Untertitelung/Close-Captioning
  - : Sie sollten Ihrem Video Untertitel hinzufügen, um Besucher zu erreichen, die den Ton nicht hören können. Einige Benutzer haben Hörprobleme, keine funktionierenden Lautsprecher oder arbeiten in einer lauten Umgebung (wie im Zug).
- Transkript
  - : Untertitel funktionieren nur, wenn jemand das Video ansieht. Viele Benutzer haben keine Zeit oder das passende Plugin oder Codec fehlt. Zudem verlassen sich Suchmaschinen hauptsächlich auf Text, um Ihre Inhalte zu indexieren. Aus all diesen Gründen stellen Sie bitte ein Texttranskript der Video-/Audiodatei bereit.

### Bildkomprimierung

Einige Benutzer können sich dafür entscheiden, Bilder anzuzeigen, aber dennoch nur begrenzte Bandbreite zur Verfügung haben, insbesondere in Entwicklungsländern und auf mobilen Geräten. Wenn Sie eine erfolgreiche Website haben möchten, komprimieren Sie bitte Ihre Bilder. Es gibt verschiedene Werkzeuge, um Ihnen dabei zu helfen, sei es online oder lokal. Im Allgemeinen sind lokale Werkzeuge vorzuziehen, da sie besser in Ihren Entwicklungsworkflow integriert werden können; zu diesen Werkzeugen gehören [ImageOptim](https://imageoptim.com/api) (Mac), [OptiPNG](https://optipng.sourceforge.net/) (alle Plattformen) und [PNGcrush](https://pmt.sourceforge.io/pngcrush/) (DOS, Unix/Linux).
