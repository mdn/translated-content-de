---
title: Wie können wir für alle Benutzertypen gestalten?
slug: Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

Dieser Artikel bietet grundlegende Tipps, um Ihnen zu helfen, Websites für jede Art von Benutzer zu gestalten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zunächst
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility"
          >What is accessibility?</a
        > lesen, da wir Barrierefreiheit hier nicht im Detail behandeln.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Universelles Design bedeutet Gestaltung für alle, unabhängig von Behinderungen oder technischen Einschränkungen. Dieser Artikel listet die wichtigsten Quick-Wins für universelles Design auf.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Beim Erstellen einer Website ist ein wichtiges Thema das [Universelle Design](https://de.wikipedia.org/wiki/Universelles_Design): die Berücksichtigung aller Nutzer, unabhängig von Behinderung, technischen Einschränkungen, Kultur, Standort usw.

## Vertiefende Informationen

### Farbkontrast

Um Ihre Texte lesbar zu halten, verwenden Sie eine Textfarbe, die gut zum Hintergrund kontrastiert. Machen Sie es besonders einfach, den Text zu lesen, um sehbehinderten Personen und Nutzern, die ihre Handys auf der Straße benutzen, zu helfen.

Das {{Glossary("W3C", "W3C")}} definiert eine gute Farbmischung mit einem Algorithmus, der das Helligkeitsverhältnis zwischen Vorder- und Hintergrund berechnet. Die Berechnung mag ziemlich kompliziert erscheinen, aber wir können uns auf Werkzeuge verlassen, die diese Aufgabe für uns erledigen.

Laden wir den [Color Contrast Analyser](https://vispero.com/color-contrast-checker/) der Paciello Group herunter und installieren ihn.

> [!NOTE]
> Alternativ können Sie eine Reihe von Online-Kontrastprüfungen finden, wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM. Wir empfehlen einen lokalen Prüfer, da er mit einem Bildschirm-Farbauswahlwerkzeug ausgestattet ist, um einen Farbwert zu ermitteln.

Zum Beispiel, testen wir die Farben auf dieser Seite und sehen, wie sie im Color Contrast Analyser abschneiden:

![Farbkontrast auf dieser Seite: ausgezeichnet!](color-contrast.png)

Der Helligkeitskontrast zwischen Text und Hintergrund beträgt 8,30:1, was den Mindeststandard (4,5:1) übertrifft und vielen sehbehinderten Personen das Lesen dieser Seite ermöglichen sollte.

### Schriftgröße

Sie können die Schriftgröße auf einer Website entweder über relative oder absolute Einheiten angeben.

#### Absolute Einheiten

Absolute Einheiten werden nicht proportional berechnet, sondern beziehen sich auf eine festgelegte Größe und werden meist in Pixeln (`px`) ausgedrückt. Zum Beispiel, wenn Sie in Ihrem CSS dies angeben:

```css
body {
  font-size: 16px;
}
```

… sagen Sie dem Browser, dass die Schriftgröße unabhängig von allem 16 Pixel betragen muss. Moderne Browser umgehen diese Regel, indem sie so tun, als ob Sie "16 Pixel bei einem Zoomfaktor von 100%" angefordert haben.

#### Relative Einheiten

Auch _proportionale Einheiten_ genannt, werden relative Einheiten relativ zu einem Elternelement berechnet. Relative Einheiten sind zugänglicher, da sie die Einstellungen des Benutzergeräts respektieren.

Relative Einheiten werden in `em`, `%` und `rem` ausgedrückt:

- Prozentbasierte Größen: `%`
  - : Diese Einheit teilt Ihrem Browser mit, dass die Schriftgröße eines Elements N% der des vorherigen Elements sein muss, dessen Schriftgröße angegeben wurde. Wenn kein Elternteil gefunden wird, wird die Standardschriftgröße des Browsers als Basisgröße für die Berechnung betrachtet (normalerweise das Äquivalent von 16 Pixel).
- Em-basierte Größen: `em`
  - : Diese Einheit wird auf dieselbe Weise berechnet wie Prozentsätze, außer dass in Teilen von 1 und nicht in Teilen von 100 gerechnet wird. Es heißt, dass ein "em" die Breite eines Großbuchstabens "M" im Alphabet ist (ganz grob gesagt passt ein "M" in ein Quadrat).
- Rem-basierte Größen: `rem`
  - : Diese Einheit ist proportional zur Schriftgröße des Wurzelelements und wird wie `em` in Teilen von 1 ausgedrückt.

Angenommen, wir möchten eine Basisschriftgröße von 16px und ein h1 (Hauptüberschrift) im Äquivalent von 32px. Wenn wir innerhalb des h1 ein `span` mit der Klasse `subheading` finden, muss dieses ebenfalls in der Standardschriftgröße (normalerweise 16px) angezeigt werden.

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

Ein CSS auf Prozentbasis sieht so aus:

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

Wie Sie sehen, wird die Mathematik schnell überwältigend, wenn Sie den Überblick über das Elternteil, das Elternteil des Elternteils und so weiter behalten müssen. (Die meisten Designs werden in pixelbasierten Softwareprogrammen erstellt, sodass die Mathematik von der Person durchgeführt werden muss, die das CSS codiert).

Betreten Sie `rem`. Diese Einheit ist relativ zur Größe des Wurzelelements und nicht zu einem anderen Elternelement. Das CSS kann folgendermaßen neu geschrieben werden:

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

Einfacher, nicht wahr? Dies funktioniert in [jedem aktuellen Browser](https://caniuse.com/#search=rem), also können Sie diese Einheit gerne verwenden.

> [!NOTE]
> Sie bemerken vielleicht, dass Opera Mini keine Schriftgrößen in rem unterstützt. Es wird letztlich seine eigene Schriftgröße festlegen, also machen Sie sich keine Sorgen darüber, Schriftgrößeneinheiten zu ergänzen.

#### Warum sollte ich proportionale Einheiten verwenden?

Weil Sie nicht wissen, wann ein Browser daherkommt und sich weigert, Text zu zoomen, dessen Größe in Pixeln angegeben ist. Überprüfen Sie außerdem die Statistiken Ihrer Website: Möglicherweise erhalten Sie Besuche von älteren Browsern.

Wir empfehlen Folgendes:

- Beschreiben Sie Schriften in `rem`-Einheiten, die meisten Browser werden sehr zufrieden damit sein;
- Lassen Sie ältere Browser Schriften mit ihrem eigenen internen Engine anzeigen. Die Browser-Engines ignorieren jede Eigenschaft oder Wert im CSS, mit dem sie nicht umgehen können, sodass Ihre Website immer noch benutzbar ist, wenn auch nicht wahrhaftig der Vision der Designer entspricht. Ältere Browser sind ohnehin auf dem Rückzug.

> [!NOTE]
> Ihre Erfahrungen können variieren. Wenn Sie ältere Browser unterstützen müssen, werden Sie `em`s verwenden müssen und etwas mehr Mathematik betreiben.

### Zeilenbreite

Es gibt eine langjährige Debatte über die Zeilenlänge im Web, aber hier ist die Geschichte. Früher, als wir Zeitungen hatten, erkannten Drucker, dass der Leser Schwierigkeiten haben würde, von einer Zeile zur nächsten zu wechseln, wenn die Zeilen zu lang wären. Die Lösung? Spalten.

Natürlich verschwindet das Problem nicht, wenn wir ins Web wechseln. Die Augen des Lesers agieren wie ein Schlitten, der von Zeile zu Zeile wandert. Um es den Augen der Menschen zu erleichtern, begrenzen Sie die Zeilenbreite auf etwa 60 bis 70 Zeichen.

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

Wir haben ein `div` mit der Klasse `container`. Wir können das `div` so stylen, dass seine Breite (mit der `width`-Eigenschaft) oder seine maximale Breite so eingestellt wird, dass es nie zu groß wird (mit der `max-width`-Eigenschaft). Wenn Sie eine elastische/responsive Website möchten und nicht wissen, wie die Standardbreite des Browsers ist, können Sie die `max-width`-Eigenschaft verwenden, um bis zu 70 Zeichen pro Zeile zuzulassen und nicht mehr:

```css
div.container {
  max-width: 70em;
}
```

### Alternative Inhalte für Bilder, Audio und Video

Websites enthalten oft mehr als nur reinen Text.

#### Bilder

Bilder können entweder dekorativ oder informativ sein, aber es gibt keine Garantie, dass Ihre Benutzer sie sehen können. Zum Beispiel:

- Sehbehinderte Benutzer verlassen sich auf einen Screen Reader, der nur Text verarbeiten kann.
- Ihre Leser verwenden möglicherweise ein sehr striktes Intranet, das Bilder blockiert, die von einem {{Glossary("CDN", "CDN")}} stammen.
- Ihre Leser haben möglicherweise Bilder deaktiviert, um Bandbreite zu sparen, insbesondere auf mobilen Geräten (siehe unten).

<!---->

- Dekorative Bilder
  - : Sie dienen nur zur Dekoration und vermitteln keine wirklichen Informationen. Sie könnten meistens durch ein Hintergrundbild ersetzt werden. Stellen Sie sicher, dass sie ein leeres `alt`-Attribut enthalten: `<img src="deco.gif" alt="">`, damit sie den Text nicht verstopfen.
- Informative Bilder
  - : Sie werden verwendet, um Informationen zu vermitteln, daher ihr Name. Sie können beispielsweise ein Diagramm zeigen, oder eine Geste einer Person, oder andere Informationen. Mindestens müssen Sie ein aussagekräftiges `alt`-Attribut angeben.

Wenn das Bild kurz beschrieben werden kann, können Sie nur ein `alt`-Attribut bereitstellen. Wenn das Bild nicht kurz beschrieben werden kann, müssen Sie entweder denselben Inhalt in einer anderen Form auf derselben Seite bereitstellen (z. B. ein Kreisdiagramm mit einer Tabelle ergänzen, die dieselben Daten bereitstellt) oder auf ein Attribut `longdesc` zurückgreifen. Der Wert dieses Attributs ist eine URL, die auf eine Ressource zeigt, die den Inhalt des Bildes explizit detailliert beschreibt.

> [!NOTE]
> Der Gebrauch und sogar die Existenz des `longdesc` wurde lange diskutiert. Bitte beachten Sie die W3C's [Image Description Extension (longdesc)](https://www.w3.org/TR/html-longdesc/) für die vollständige Erklärung und gründliche Beispiele.

#### Audio/Video

Sie müssen auch Alternativen zu Multimedia-Inhalten bereitstellen.

- Untertitel/Näherungsbeschreibung
  - : Sie sollten Ihrem Video Untertitel hinzufügen, um Besucher anzusprechen, die den Ton nicht hören können. Manche Benutzer haben Hörprobleme, keine funktionierenden Lautsprecher oder arbeiten in einer lauten Umgebung (wie im Zug).
- Transkript
  - : Untertitel funktionieren nur, wenn jemand das Video ansieht. Viele Benutzer haben keine Zeit oder das passende Plugin oder Codec fehlt. Zudem verlassen sich Suchmaschinen hauptsächlich auf Text, um Ihre Inhalte zu indexieren. Aus all diesen Gründen bieten Sie bitte ein Texttranskript der Video-/Audiodatei an.

### Bildkompression

Einige Benutzer können sich entscheiden, Bilder anzuzeigen, haben jedoch weiterhin eingeschränkte Bandbreite zur Verfügung, insbesondere in Entwicklungsländern und auf mobilen Geräten. Wenn Sie eine erfolgreiche Website wollen, komprimieren Sie bitte Ihre Bilder. Es gibt verschiedene Werkzeuge, die Ihnen helfen, entweder online oder lokal. Im Allgemeinen werden lokale Tools bevorzugt, da sie besser in Ihren Entwicklungsworkflow integriert werden können; diese Tools umfassen [ImageOptim](https://imageoptim.com/api) (Mac), [OptiPNG](https://optipng.sourceforge.net/) (alle Plattformen) und [PNGcrush](https://pmt.sourceforge.io/pngcrush/) (DOS, Unix/Linux).
