---
title: Wie können wir für alle Benutzertypen gestalten?
slug: Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel bietet grundlegende Tipps, um Ihnen zu helfen, Websites für jede Art von Benutzer zu gestalten.

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
      <th scope="row">Ziel:</th>
      <td>
        Universal Design bedeutet Design für alle, unabhängig von Behinderungen
        oder technischen Einschränkungen. Dieser Artikel listet die wichtigsten
        Schnellgewinne für Universal Design auf.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine Website erstellen, ist ein wichtiges Thema, das berücksichtigt werden muss, das [Universal Design](https://en.wikipedia.org/wiki/Universal_design): die Berücksichtigung aller Benutzer, unabhängig von Behinderung, technischen Einschränkungen, Kultur, Standort usw.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte überlegen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Getting_started)._

## Gehen Sie tiefer

### Farbkontrast

Um Ihren Text gut lesbar zu halten, verwenden Sie eine Textfarbe, die einen guten Kontrast zur Hintergrundfarbe bietet. Machen Sie es besonders einfach, den Text zu lesen, um Menschen mit Sehbehinderungen und Menschen, die ihre Telefone auf der Straße benutzen, zu helfen.

Das {{Glossary("W3C", "W3C")}} definiert eine gute Farbmischung mit einem Algorithmus, der das Helligkeitsverhältnis zwischen Vorder- und Hintergrund berechnet. Die Berechnung mag ziemlich kompliziert erscheinen, aber wir können uns auf Werkzeuge verlassen, um die Arbeit für uns zu erledigen.

Lassen Sie uns das [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) der Paciello Group herunterladen und installieren.

> [!NOTE]
> Alternativ finden Sie eine Reihe von Kontrastprüfern online, wie z.B. den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM. Wir empfehlen einen lokalen Prüfer, da dieser mit einem Farbwähler auf dem Bildschirm ausgestattet ist, um einen Farbwert zu ermitteln.

Lassen Sie uns beispielsweise die Farben auf dieser Seite testen und im Color Contrast Analyser sehen, wie wir abschneiden:

![Farbkontrast auf dieser Seite: hervorragend!](color-contrast.png)

Das Helligkeitskontrastverhältnis zwischen Text und Hintergrund beträgt 8.30:1, was den Mindeststandard (4.5:1) übersteigt und vielen sehbehinderten Menschen das Lesen dieser Seite ermöglichen sollte.

### Schriftgröße

Sie können die Schriftgröße auf einer Website entweder durch relative Einheiten oder absolute Einheiten angeben.

#### Absolute Einheiten

Absolute Einheiten werden nicht proportional berechnet, sondern beziehen sich auf eine feste Größe und werden meistens in Pixeln (`px`) ausgedrückt. Zum Beispiel, wenn Sie in Ihrem CSS dies deklarieren:

```css
body {
  font-size: 16px;
}
```

… sagen Sie dem Browser, dass die Schriftgröße unabhängig von allem anderen 16 Pixel betragen muss. Moderne Browser umgehen diese Regel, indem sie so tun, als ob Sie eine "16-Pixel-Schriftgröße bei einem Zoomfaktor von 100%" wünschen.

#### Relative Einheiten

Auch proportionalen Einheiten genannt, werden relative Einheiten relativ zu einem Elternelement berechnet. Relative Einheiten sind zugänglicher, da sie die Einstellungen auf dem System des Benutzers respektieren.

Relative Einheiten werden in `em`, `%` und `rem` ausgedrückt:

- Prozentbasierte Größen: `%`
  - : Diese Einheit gibt dem Browser an, dass die Schriftgröße eines Elements N% der Schriftgröße des vorherigen Elements sein muss, dessen Schriftgröße ausgedrückt wurde. Wenn kein Elternteil gefunden werden kann, wird die Standardschriftgröße im Browser als Basisgröße für die Berechnung angenommen (normalerweise das Äquivalent von 16 Pixeln).
- Em-basierte Größen: `em`
  - : Diese Einheit wird genauso berechnet wie Prozentsätze, außer dass Sie in Bruchteilen von 1 und nicht in Bruchteilen von 100 rechnen. Es wird gesagt, dass "em" die Breite eines großen "M" im Alphabet ist (grob gesagt passt ein "M" in ein Quadrat).
- Rem-basierte Größen: `rem`
  - : Diese Einheit ist proportional zur Schriftgröße des Wurzelelements und wird in Bruchteilen von 1 ausgedrückt, wie `em`.

Angenommen, wir wollten eine Basisschriftgröße von 16px und eine h1 (Hauptüberschrift) im Äquivalent von 32px, doch wenn innerhalb der h1 ein `span` mit der Klasse `subheading` gefunden wird, muss es ebenfalls in der Standardschriftgröße gerendert werden (normalerweise 16px).

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

Wie Sie sehen, wird die Mathematik schnell überwältigend, wenn Sie den Überblick über das übergeordnete Element, das übergeordnete Element des übergeordneten Elements usw. behalten müssen. (Die meisten Designs werden in pixelbasierten Software-Programmen erstellt, sodass die Mathematik von der Person durchgeführt werden muss, die das CSS codiert).

Hier kommt `rem` ins Spiel. Diese Einheit ist relativ zur Größe des Wurzelelements und nicht zu einem anderen übergeordneten Element. Das CSS kann folgendermaßen umgeschrieben werden:

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
> Sie werden möglicherweise feststellen, dass Opera Mini keine Schriftgrößen in rem unterstützt. Es wird letztendlich seine eigene Schriftgröße einstellen, also machen Sie sich nicht die Mühe, ihm Schrifteinheiten zuzuweisen.

#### Warum sollte ich proportionale Einheiten verwenden?

Weil Sie nicht wissen, wann ein Browser auftauchen wird, der den Text nicht hochzoomt, dessen Größe in Pixeln angegeben ist. Überprüfen Sie auch die Statistiken Ihrer Website: Sie könnten Besuche von älteren Browsern erhalten.

Wir würden Folgendes empfehlen:

- Beschreiben Sie Schriften in `rem`-Einheiten, die meisten Browser sind damit sehr zufrieden;
- Lassen Sie ältere Browser die Schriften mit ihrem eigenen internen Mechanismus anzeigen. Die Engins der Browser ignorieren jede Eigenschaft oder jeden Wert im CSS, wenn sie damit nicht umgehen können, sodass Ihre Website weiterhin nutzbar ist, auch wenn sie nicht der Vision Ihres Designers entspricht. Ältere Browser sind ohnehin auf dem Rückzug.

> [!NOTE]
> Ihre Ergebnisse können variieren. Wenn Sie sich um ältere Browser kümmern müssen, müssen Sie `em`s verwenden und ein bisschen mehr Mathematik betreiben.

### Zeilenbreite

Es gibt eine langjährige Debatte über die Zeilenlänge im Web, aber hier ist die Geschichte. Zurück, als wir noch Zeitungen hatten, erkannten Drucker, dass die Augen des Lesers Schwierigkeiten hätten, von einer Zeile zur nächsten zu wechseln, wenn die Zeilen zu lang wären. Die Lösung? Spalten.

Natürlich verschwindet das Problem nicht, wenn wir zum Web wechseln. Die Augen des Lesers agieren wie ein Shuttle, das von Zeile zu Zeile geht. Um es den Augen der Menschen zu erleichtern, beschränken Sie die Zeilenbreite auf etwa 60 bis 70 Zeichen.

Um dies zu erreichen, können Sie eine Größe für den Container Ihres Textes festlegen. Betrachten Sie dieses HTML:

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

Wir haben ein `div` mit der Klasse `container`. Wir können das `div` entweder gestalten, um seine Breite (mithilfe der `width`-Eigenschaft) oder seine maximale Breite festzulegen, sodass es nie zu groß wird (mithilfe der `max-width`-Eigenschaft). Wenn Sie eine elastische/reaktionsfähige Website wünschen und nicht wissen, wie die Standardbreite des Browsers ist, können Sie die `max-width`-Eigenschaft verwenden, um bis zu 70 Zeichen pro Zeile zuzulassen und nicht mehr:

```css
div.container {
  max-width: 70em;
}
```

### Alternativer Inhalt für Bilder, Audio und Video

Websites enthalten oft Inhalte neben einfachem Text.

#### Bilder

Bilder können entweder dekorativ oder informativ sein, aber es gibt keine Garantie, dass Ihre Benutzer sie sehen können. Zum Beispiel,

- Sehbehinderte Benutzer sind auf einen Screenreader angewiesen, der nur mit Text umgehen kann.
- Ihre Leser verwenden möglicherweise ein sehr strenges Intranet, das Bilder blockiert, die von einem {{Glossary("CDN", "CDN")}} stammen.
- Ihre Leser haben möglicherweise Bilder deaktiviert, um Bandbreite zu sparen, insbesondere auf mobilen Geräten (siehe unten).

<!---->

- Dekorative Bilder
  - : Sie dienen nur zur Dekoration und vermitteln keine wirklichen Informationen. Sie könnten meist durch ein Hintergrundbild ersetzt werden. Stellen Sie sicher, dass sie ein leeres `alt`-Attribut enthalten: `<img src="deco.gif" alt="">`, damit sie den Text nicht verstopfen.
- Informationsbilder
  - : Sie werden verwendet, um Informationen zu vermitteln, daher der Name. Sie können zum Beispiel ein Diagramm zeigen oder eine Geste einer Person darstellen oder andere Informationen bieten. Mindestens müssen Sie ein relevantes `alt`-Attribut bereitstellen.

Wenn das Bild kurz beschrieben werden kann, können Sie einfach ein `alt`-Attribut bereitstellen und damit alles bieten. Wenn das Bild nicht kurz beschrieben werden kann, müssen Sie entweder denselben Inhalt in einer anderen Form auf derselben Seite bereitstellen (z.B. ein Kreisdiagramm mit einer Tabelle ergänzen, die dieselben Daten enthält), oder auf ein `longdesc`-Attribut zurückgreifen. Der Wert dieses Attributs ist eine URL, die auf eine Ressource verweist, die den Inhalt des Bildes im Detail beschreibt.

> [!NOTE]
> Die Verwendung und sogar die Existenz von `longdesc` wurde lange diskutiert. Bitte beziehen Sie sich auf die W3C-Artikel [Image Description Extension (longdesc)](https://www.w3.org/TR/html-longdesc/) für die vollständige Erklärung und gründliche Beispiele.

#### Audio/Video

Sie müssen auch Alternativen zu multimedialen Inhalten bereitstellen.

- Untertitelung/geschlossene Untertitel
  - : Sie sollten Untertitel in Ihrem Video einfügen, um Besucher zu dienenz, die den Ton nicht hören können. Einige Benutzer haben Hörprobleme, es fehlen funktionierende Lautsprecher oder sie arbeiten in einer lauten Umgebung (wie im Zug).
- Transkript
  - : Untertitel funktionieren nur, wenn jemand das Video sieht. Viele Benutzer haben keine Zeit oder es fehlt das entsprechende Plugin oder der Codec. Außerdem verlassen sich Suchmaschinen hauptsächlich auf Text, um Ihre Inhalte zu indexieren. Aus all diesen Gründen sollten Sie ein Texttranskript der Video-/Audiodatei bereitstellen.

### Bildkompression

Einige Nutzer entscheiden sich möglicherweise dafür, Bilder anzuzeigen, haben jedoch dennoch eine begrenzte Bandbreite zur Verfügung, insbesondere in Entwicklungsländern und auf mobilen Geräten. Wenn Sie eine erfolgreiche Website wünschen, komprimieren Sie bitte Ihre Bilder. Es gibt verschiedene Tools, um Ihnen dabei zu helfen, entweder online oder lokal. Generell werden lokale Tools bevorzugt, da sie besser in Ihren Entwicklungsworkflow integriert werden können; diese Werkzeuge umfassen [ImageOptim](https://imageoptim.com/api) (Mac), [OptiPNG](https://optipng.sourceforge.net/) (alle Plattformen) und [PNGcrush](https://pmt.sourceforge.io/pngcrush/) (DOS, Unix/Linux).
