---
title: Wie können wir für alle Benutzertypen gestalten?
slug: Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Dieser Artikel bietet grundlegende Tipps, um Ihnen zu helfen, Websites für jede Art von Benutzer zu gestalten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten zuerst
        <a href="/de/docs/Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility"
          >Was ist Barrierefreiheit?</a
        > lesen, da wir hier Barrierefreiheit nicht im Detail behandeln.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Universelles Design bedeutet Design für alle, unabhängig von Behinderungen oder technischen Einschränkungen. Dieser Artikel listet die wichtigsten schnellen Erfolge für universelles Design auf.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine Website erstellen, ist ein zentrales Thema das [Universelle Design](https://de.wikipedia.org/wiki/Universelles_Design): die Berücksichtigung aller Benutzer unabhängig von Behinderung, technischen Einschränkungen, Kultur, Standort usw.

## Vertiefung

### Farbkontrast

Um Ihren Text lesbar zu halten, verwenden Sie eine Textfarbe, die sich gut vom Hintergrund abhebt. Machen Sie es besonders einfach, den Text zu lesen, um sehbehinderten Personen und Personen zu helfen, die ihre Handys auf der Straße benutzen.

Das {{Glossary("W3C", "W3C")}} definiert eine gute Farbmischung mit einem Algorithmus, der das Verhältnis der Leuchtdichte zwischen Vordergrund und Hintergrund berechnet. Die Berechnung mag ziemlich kompliziert erscheinen, aber wir können uns auf Tools verlassen, die den Job für uns erledigen.

Lassen Sie uns den Color Contrast Analyser von Vispero [herunterladen und installieren](https://vispero.com/lp/color-contrast-checker/).

> [!NOTE]
> Alternativ können Sie im Internet eine Reihe von Kontrastprüfern finden, wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM. Wir empfehlen einen lokalen Prüfer, da er mit einem Bildschirm-Farbpipette geliefert wird, um einen Farbwert zu ermitteln.

Zum Beispiel, lassen Sie uns die Farben auf dieser Seite testen und sehen, wie wir im Color Contrast Analyser abschneiden:

![Farbkontrast auf dieser Seite: ausgezeichnet!](color-contrast.png)

Das Leuchtkontrastverhältnis zwischen Text und Hintergrund beträgt 8,30:1, was den Mindeststandard (4,5:1) übersteigt und vielen sehbehinderten Menschen das Lesen dieser Seite ermöglichen sollte.

### Schriftgröße

Sie können die Schriftgröße auf einer Website entweder durch relative Einheiten oder durch absolute Einheiten festlegen.

#### Absolute Einheiten

Absolute Einheiten werden nicht proportional berechnet, sondern beziehen sich auf eine festgelegte Größe und werden meist in Pixeln (`px`) ausgedrückt. Wenn Sie beispielsweise in Ihrem CSS dies deklarieren:

```css
body {
  font-size: 16px;
}
```

...dann teilen Sie dem Browser mit, dass die Schriftgröße unabhängig von den Umständen 16 Pixel betragen muss. Moderne Browser umgehen diese Regel, indem sie so tun, als würden Sie "16 Pixel bei einem Zoomfaktor von 100%" anfordern.

#### Relative Einheiten

Relative Einheiten werden auch _proportionale Einheiten_ genannt und werden relativ zu einem Elternelement berechnet. Relative Einheiten sind benutzerfreundlicher für die Barrierefreiheit, da sie die Einstellungen des Systems des Benutzers respektieren.

Relative Einheiten werden ausgedrückt in `em`, `%` und `rem`:

- Prozentbasierte Größen: `%`
  - : Diese Einheit sagt Ihrem Browser, dass die Schriftgröße eines Elements N% der des vorhergehenden Elements sein muss, dessen Schriftgröße ausgedrückt wurde. Wenn kein Elternteil gefunden werden kann, wird die Standardschriftgröße im Browser als Basisgröße für die Berechnung betrachtet (gewöhnlich entspricht dies 16 Pixel).
- Em-basierte Größen: `em`
  - : Diese Einheit wird genauso berechnet wie Prozente, außer dass Sie in Teilen von 1 und nicht in Teilen von 100 rechnen. Es wird gesagt, dass "em" die Breite eines großen "M" im Alphabet ist (grob gesagt passt ein "M" in ein Quadrat).
- Rem-basierte Größen: `rem`
  - : Diese Einheit ist proportional zur Schriftgröße des Wurzelelements und wird wie `em` in Teilen von 1 ausgedrückt.

Angenommen, wir wollten eine Basis-Schriftgröße von 16px und ein h1 (Hauptüberschrift) im Äquivalent von 32px, doch wenn wir innerhalb der h1 ein `span` mit der Klasse `subheading` finden, muss es auch in der Standard-Schriftgröße (normalerweise 16px) angezeigt werden.

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

Ein CSS basierend auf Prozenten sieht so aus:

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

Wie Sie sehen können, wird die Mathematik schnell herausfordernd, wenn Sie den Überblick über das Elternelement, das Elternelement des Elternelements, das Elternelement des Elternelements des Elternelements usw. behalten müssen. (Die meisten Designs werden in pixelbasierten Software erstellt, daher muss die Rechenarbeit von der Person erledigt werden, die das CSS codiert).

Hier kommt `rem`. Diese Einheit ist relativ zur Größe des Wurzelelements und nicht zu einem anderen Elternteil. Das CSS kann folgendermaßen umgeschrieben werden:

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

Einfacher, nicht wahr? Das funktioniert in [jedem aktuellen Browser](https://caniuse.com/#search=rem), also können Sie diese Einheit gerne verwenden.

> [!NOTE]
> Sie werden feststellen, dass Opera Mini keine Schriftgrößenänderungen in rem unterstützt. Es wird am Ende seine eigene Schriftgröße setzen, also machen Sie sich nicht die Mühe, ihm Schriftgrößenangaben zu geben.

#### Warum sollte ich proportionale Einheiten verwenden wollen?

Weil Sie nie wissen, wann ein Browser kommt und sich weigert, Text zu vergrößern, dessen Größe in Pixeln angegeben ist. Überprüfen Sie auch die Statistiken Ihrer Website: Sie könnten Besuche von älteren Browsern erhalten.

Wir empfehlen Folgendes:

- Beschreiben Sie Schriftarten in `rem`-Einheiten, die meisten Browser werden sehr zufrieden damit sein;
- Lassen Sie ältere Browser Schriftarten mit ihrem eigenen internen Mechanismus anzeigen. Browser-Engines ignorieren jede Eigenschaft oder jeden Wert im CSS, den sie nicht bewältigen können, sodass Ihre Website weiterhin nutzbar ist, wenn auch nicht genau nach den Vorstellungen Ihres Designers. Ältere Browser sind ohnehin auf dem Weg nach draußen.

> [!NOTE]
> Ihre Ergebnisse können variieren. Wenn Sie sich an ältere Browser richten müssen, müssen Sie `em`s verwenden und etwas mehr Mathematik anwenden.

### Linienbreite

Es gibt eine langanhaltende Debatte über die Zeilenlänge im Web, aber hier ist die Geschichte. Als wir noch Zeitungen hatten, stellten Drucker fest, dass die Augen der Leser Schwierigkeiten hätten, von einer Zeile zur nächsten zu gelangen, wenn die Zeilen zu lang wären. Die Lösung? Spalten.

Natürlich verschwindet das Problem nicht, wenn wir ins Internet wechseln. Die Augen der Leser verhalten sich wie ein Shuttle, das von Zeile zu Zeile geht. Um es den Augen der Menschen leichter zu machen, begrenzen Sie die Zeilenbreite auf etwa 60 oder 70 Zeichen.

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

Wir haben ein `div` mit der Klasse `container`. Wir können das `div` entweder so gestalten, dass es seine Breite (mithilfe der `width`-Eigenschaft) oder seine maximale Breite festlegt, sodass es niemals zu groß wird (mithilfe der `max-width`-Eigenschaft). Wenn Sie eine elastische/responsive Website wünschen und Sie nicht wissen, was die Standardbreite des Browsers ist, können Sie die `max-width`-Eigenschaft verwenden, um bis zu 70 Zeichen pro Zeile und nicht mehr zuzulassen:

```css
div.container {
  max-width: 70em;
}
```

### Alternativer Inhalt für Bilder, Audio und Video

Websites enthalten oft mehr als nur reinen Text.

#### Bilder

Bilder können entweder dekorativ oder informativ sein, aber es gibt keine Garantie, dass Ihre Benutzer sie sehen können. Zum Beispiel,

- Sehbehinderte Benutzer verlassen sich auf einen Screenreader, der nur Text verarbeiten kann.
- Ihre Leser könnten ein sehr striktes Intranet verwenden, das Bilder blockiert, die von einem {{Glossary("CDN", "CDN")}} stammen.
- Ihre Leser haben möglicherweise Bilder deaktiviert, um Bandbreite zu sparen, insbesondere auf mobilen Geräten (siehe unten).

<!---->

- Dekorative Bilder
  - : Diese dienen nur der Dekoration und transportieren keine echten Informationen. Sie könnten meist durch ein Hintergrundbild ersetzt werden. Stellen Sie sicher, dass sie ein leeres `alt`-Attribut haben: `<img src="deco.gif" alt="">`, damit sie den Text nicht verstopfen.
- Informative Bilder
  - : Sie dienen der Informationsvermittlung, daher ihr Name. Sie können zum Beispiel ein Diagramm zeigen, eine Geste einer Person oder andere Informationen. Mindestens müssen Sie ein relevantes `alt`-Attribut bereitstellen.

Wenn das Bild knapp beschrieben werden kann, können Sie ein `alt`-Attribut angeben und nichts weiter. Wenn das Bild nicht knapp beschrieben werden kann, müssen Sie entweder denselben Inhalt in einer anderen Form auf derselben Seite bereitstellen (z. B. ein Tortendiagramm mit einer Tabelle ergänzen, die dieselben Daten enthält) oder auf ein `longdesc`-Attribut zurückgreifen. Der Wert dieses Attributs ist eine URL, die auf eine Ressource verweist, die den Inhalt des Bildes explizit im Detail beschreibt.

> [!NOTE]
> Die Nutzung und sogar das Vorhandensein von `longdesc` wurde schon seit einiger Zeit debattiert. Bitte beachten Sie den [Image Description Extension (longdesc)](https://www.w3.org/TR/html-longdesc/) des W3C für die vollständige Erklärung und umfassende Beispiele.

#### Audio/Video

Sie müssen auch Alternativen zu Multimedia-Inhalten bereitstellen.

- Untertitel/Close-Captioning
  - : Sie sollten Untertitel in Ihr Video einfügen, um Besucher anzusprechen, die den Ton nicht hören können. Einige Benutzer haben Hörprobleme, verfügen über keine funktionierenden Lautsprecher oder arbeiten in einer lauten Umgebung (wie im Zug).
- Transkription
  - : Untertitel funktionieren nur, wenn jemand das Video anschaut. Viele Benutzer haben keine Zeit oder das richtige Plugin oder Codec nicht. Zusätzlich verlassen sich Suchmaschinen hauptsächlich auf Texte, um Ihre Inhalte zu indexieren. Aus all diesen Gründen bitte ich Sie, eine Texttranskription der Video-/Audiodatei bereitzustellen.

### Bildkomprimierung

Einige Benutzer wählen möglicherweise, Bilder anzuzeigen, haben jedoch dennoch eine begrenzte verfügbare Bandbreite, insbesondere in Entwicklungsländern und auf mobilen Geräten. Wenn Sie eine erfolgreiche Website möchten, komprimieren Sie bitte Ihre Bilder. Es gibt verschiedene Tools, die Ihnen helfen, entweder online oder lokal. Im Allgemeinen werden lokale Tools bevorzugt, weil sie besser in Ihren Entwicklungsworkflow integriert werden können; diese Tools umfassen [ImageOptim](https://imageoptim.com/api) (Mac), [OptiPNG](https://optipng.sourceforge.net/) (alle Plattformen) und [PNGcrush](https://pmt.sourceforge.io/pngcrush/) (DOS, Unix/Linux).
