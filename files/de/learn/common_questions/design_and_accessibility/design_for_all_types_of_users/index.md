---
title: Wie können wir für alle Arten von Benutzern designen?
slug: Learn/Common_questions/Design_and_accessibility/Design_for_all_types_of_users
l10n:
  sourceCommit: 9de3d03957f1d66f02f45400a6981372aa368c1f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel bietet grundlegende Tipps, die Ihnen helfen, Websites für alle Arten von Benutzern zu gestalten.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Universelles Design bedeutet Design für alle, unabhängig von Behinderungen oder technischen Einschränkungen. Dieser Artikel listet die wichtigsten Quick-Wins für universelles Design auf.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Wenn Sie eine Website erstellen, ist **Universelles Design** ein zentrales Thema: die Berücksichtigung aller Benutzer, unabhängig von Behinderung, technischen Einschränkungen, Kultur, Standort usw.

## Aktives Lernen

_Es ist derzeit kein aktives Lernen verfügbar. [Bitte überlegen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefung

### Farbkontrast

Um Ihren Text lesbar zu halten, verwenden Sie eine Textfarbe, die sich gut vom Hintergrund abhebt. Machen Sie es besonders einfach, den Text zu lesen, um Menschen mit Sehbehinderungen und Personen, die ihre Telefone auf der Straße nutzen, zu helfen.

Die {{Glossary("W3C")}} definiert eine gute Farbmischung mit einem Algorithmus, der das Leuchtverhältnis zwischen Vorder- und Hintergrund berechnet. Die Berechnung mag ziemlich kompliziert erscheinen, aber wir können uns auf Tools verlassen, die die Arbeit für uns erledigen.

Lassen Sie uns den [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) der Paciello Group herunterladen und installieren.

> [!NOTE]
> Alternativ finden Sie online eine Reihe von Kontrastprüfern, wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM. Wir empfehlen einen lokalen Prüfer, da er mit einem Bildschirm-Farbwähler ausgestattet ist, um einen Farbwert zu ermitteln.

Lassen Sie uns zum Beispiel die Farben auf dieser Seite testen und sehen, wie wir im Farbkontrastprüfer abschneiden:

![Farben auf dieser Seite: ausgezeichnet!](color-contrast.png)

Das Helligkeitskontrastverhältnis zwischen Text und Hintergrund beträgt 8,30:1, was den Mindeststandard (4,5:1) übertrifft und es vielen Sehbehinderten ermöglicht, diese Seite zu lesen.

### Schriftgröße

Sie können die Schriftgröße auf einer Website entweder durch relative oder absolute Einheiten angeben.

#### Absolute Einheiten

Absolute Einheiten werden nicht proportional berechnet, sondern beziehen sich auf eine feste Größe und werden meist in Pixel (`px`) angegeben. Wenn Sie zum Beispiel in Ihrem CSS dies deklarieren:

```css
body {
  font-size: 16px;
}
```

… weisen Sie den Browser an, dass die Schriftgröße immer 16 Pixel betragen muss. Moderne Browser umgehen diese Regel, indem sie so tun, als würden Sie nach "16 Pixel bei einer Zoomstufe von 100%" fragen.

#### Relative Einheiten

Auch _proportionale Einheiten_ genannt, werden relative Einheiten relativ zu einem übergeordneten Element berechnet. Relative Einheiten sind benutzerfreundlicher für die Barrierefreiheit, da sie die Einstellungen des Benutzersystems respektieren.

Relative Einheiten werden in `em`, `%` und `rem` ausgedrückt:

- Prozentbasierte Größen: `%`
  - : Diese Einheit teilt Ihrem Browser mit, dass die Schriftgröße eines Elements n% der vorherigen Elementschriftgröße betragen muss. Wenn kein übergeordnetes Element gefunden werden kann, wird die Standardschriftgröße des Browsers als Basisgröße für die Berechnung angenommen (normalerweise entspricht dies 16 Pixel).
- Em-basierte Größen: `em`
  - : Diese Einheit wird genauso wie Prozente berechnet, außer dass Sie in Teilen von 1 und nicht in Teilen von 100 rechnen. Man sagt, dass "em" die Breite eines großen "M" im Alphabet ist (grob gesagt, passt ein "M" in ein Quadrat).
- Rem-basierte Größen: `rem`
  - : Diese Einheit ist proportional zur Schriftgröße des Root-Elements und wird in Teilen von 1 wie `em` ausgedrückt.

Angenommen, wir wollen eine Basisschriftgröße von 16px und ein h1 (Hauptüberschrift) im Äquivalent von 32px, doch wenn wir innerhalb des h1 ein `span` mit der Klasse `subheading` finden, muss es ebenfalls in der Standardschriftgröße (normalerweise 16px) angezeigt werden.

Hier ist das HTML, das wir verwenden:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Schriftgrößenexperiment</title>
  </head>
  <body>
    <h1>
      Dies ist unsere Hauptüberschrift
      <span class="subheading">Dies ist unsere Unterüberschrift</span>
    </h1>
  </body>
</html>
```

Ein CSS auf Prozentbasis sieht so aus:

```css
body {
  /* 100% der Basis-Schriftgröße des Browsers, dies entspricht in den meisten Fällen 16 Pixel */
  font-size: 100%;
}
h1 {
  /* doppelte Größe des Bodys, also 32 Pixel */
  font-size: 200%;
}
span.subheading {
  /* halbe Größe des h1, also 16 Pixel, um zur ursprünglichen Größe zurückzukehren */
  font-size: 50%;
}
```

Dasselbe Problem mit ems dargestellt:

```css
body {
  /* 1em = 100% der Basis-Schriftgröße des Browsers, dies entspricht in den meisten Fällen 16 Pixel */
  font-size: 1em;
}
h1 {
  /* doppelte Größe des Bodys, also 32 Pixel */
  font-size: 2em;
}
span.subheading {
  /* halbe Größe des h1, also 16 Pixel, um zur ursprünglichen Größe zurückzukehren */
  font-size: 0.5em;
}
```

Wie Sie sehen, wird die Mathematik schnell abschreckend, wenn Sie den Eltern, den Eltern des Elterns und so weiter im Auge behalten müssen. (Die meisten Entwürfe werden in pixelbasierten Software erstellt, also muss die Mathematik von der Person erledigt werden, die das CSS codiert.)

Hier kommt `rem` ins Spiel. Diese Einheit ist relativ zur Größe des Wurzelelements und nicht zu einem anderen übergeordneten Element. Das CSS kann also so umgeschrieben werden:

```css
body {
  /* 1em = 100% der Basis-Schriftgröße des Browsers, dies entspricht in den meisten Fällen 16 Pixel */
  font-size: 1em;
}
h1 {
  /* doppelte Größe des Bodys, also 32 Pixel */
  font-size: 2rem;
}
span.subheading {
  /* ursprüngliche Größe */
  font-size: 1rem;
}
```

Einfacher, nicht wahr? Dies funktioniert in [allen aktuellen Browsern](https://caniuse.com/#search=rem), also fühlen Sie sich frei, diese Einheit zu verwenden.

> [!NOTE]
> Sie werden bemerken, dass Opera Mini keine Schriftgrößen in rem unterstützt. Es wird seine eigene Schriftgröße festlegen, also machen Sie sich keine Sorgen, ihm Schriftgrößeneinheiten zu geben.

#### Warum sollte ich proportionale Einheiten verwenden?

Weil Sie nicht wissen, wann ein Browser kommt, der sich weigert, Text zu vergrößern, dessen Größe in Pixeln ausgedrückt ist. Überprüfen Sie außerdem die Statistiken Ihrer Website: Möglicherweise erhalten Sie Besuche von älteren Browsern.

Wir würden folgendes empfehlen:

- Beschreiben Sie Schriftarten in `rem` Einheiten, die meisten Browser werden damit sehr zufrieden sein;
- Lassen Sie ältere Browser Schriftarten mit ihren eigenen internen Engines anzeigen. Browser-Engines ignorieren jede Eigenschaft oder jeden Wert im CSS, wenn sie nicht damit umgehen können, sodass Ihre Website weiterhin nutzbar ist, auch wenn sie nicht vollständig der Vision Ihres Designers entspricht. Ältere Browser sind sowieso im Rückzug begriffen.

> [!NOTE]
> Ihre Erfahrungen können variieren. Wenn Sie sich um ältere Browser kümmern müssen, müssen Sie `em`s verwenden und ein bisschen mehr Mathematik machen.

### Zeilenbreite

Es gibt eine langjährige Debatte über die Zeilenlänge im Web, aber hier ist die Geschichte. Als wir noch Zeitungen hatten, erkannten die Drucker, dass die Augen des Lesers Schwierigkeiten haben würden, von einer Zeile zur nächsten zu gehen, wenn die Zeilen zu lang waren. Die Lösung? Spalten.

Natürlich verschwindet das Problem nicht, wenn wir zum Web wechseln. Die Augen des Lesers bewegen sich wie ein Shuttle von Zeile zu Zeile. Um es den Augen der Menschen leichter zu machen, begrenzen Sie die Zeilenbreite auf etwa 60 bis 70 Zeichen.

Um dies zu erreichen, können Sie eine Größe für den Container Ihres Textes angeben. Betrachten wir dieses HTML:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Schriftgrößenexperiment</title>
  </head>
  <body>
    <div class="container">
      <h1>
        Dies ist unsere Hauptüberschrift
        <span class="subheading">Dies ist unsere Unterüberschrift</span>
      </h1>

      <p>[längerer Text, der sich über viele Zeilen erstreckt]</p>
    </div>
  </body>
</html>
```

Wir haben ein `div` mit der Klasse `container`. Wir können das `div` stilisieren, um entweder seine Breite (mit der `width`-Eigenschaft) oder seine maximale Breite festzulegen, sodass es nie zu groß wird (mithilfe der `max-width`-Eigenschaft). Wenn Sie eine elastische/responsive Website wünschen und nicht wissen, wie breit der Standardbrowser ist, können Sie die `max-width`-Eigenschaft verwenden, um bis zu 70 Zeichen pro Zeile und nicht mehr zuzulassen:

```css
div.container {
  max-width: 70em;
}
```

### Alternativer Inhalt für Bilder, Audio und Video

Websites enthalten häufig anderes Material als reinen Text.

#### Bilder

Bilder können entweder dekorativ oder informativ sein, aber es gibt keine Garantie, dass Ihre Benutzer sie sehen können. Beispielsweise

- Sehbehinderte Benutzer sind auf einen Screenreader angewiesen, der nur mit Text umgehen kann.
- Ihre Leser verwenden möglicherweise ein sehr striktes Intranet, das Bilder blockiert, die von einem {{Glossary("CDN")}} stammen.
- Ihre Leser haben möglicherweise Bilder deaktiviert, um Bandbreite zu sparen, insbesondere auf mobilen Geräten (siehe unten).

<!---->

- Dekorative Bilder
  - : Sie dienen nur zur Dekoration und übermitteln keine wirklichen Informationen. Sie könnten meist durch ein Hintergrundbild ersetzt werden. Stellen Sie sicher, dass sie ein leeres `alt`-Attribut haben: `<img src="deco.gif" alt="">`, damit sie den Text nicht verstopfen.
- Informative Bilder
  - : Sie werden verwendet, um Informationen zu übermitteln, daher ihr Name. Sie können zum Beispiel ein Diagramm zeigen, eine Geste einer Person darstellen oder andere Informationen. Mindestens müssen Sie ein relevantes `alt`-Attribut bereitstellen.

Wenn das Bild kurz beschrieben werden kann, können Sie nur ein `alt`-Attribut angeben und nichts mehr. Kann das Bild nicht knapp beschrieben werden, müssen Sie entweder denselben Inhalt in einer anderen Form auf derselben Seite bereitstellen (z. B. ein Kreisdiagramm mit einer Tabelle ergänzen, die dieselben Daten bereitstellt), oder Sie verwenden ein `longdesc`-Attribut. Der Wert dieses Attributs ist eine URL, die auf eine Ressource verweist, die den Inhalt des Bildes ausdrücklich im Detail beschreibt.

> [!NOTE]
> Die Verwendung und sogar die Existenz von `longdesc` wurde seit geraumer Zeit diskutiert. Bitte beziehen Sie sich auf die [Image Description Extension (longdesc)](https://www.w3.org/TR/html-longdesc/) des W3C für die vollständige Erklärung und ausführlichen Beispiele.

#### Audio/Video

Sie müssen auch Alternativen zu multimedialen Inhalten bereitstellen.

- Untertitel/Closed-Captioning
  - : Sie sollten Untertitel in Ihr Video einfügen, um Besucher anzusprechen, die das Audio nicht hören können. Einige Benutzer haben Hörprobleme, keine funktionierenden Lautsprecher oder arbeiten in einer lauten Umgebung (wie im Zug).
- Transkript
  - : Untertitel funktionieren nur, wenn jemand das Video ansieht. Viele Benutzer haben keine Zeit oder es fehlt das richtige Plugin oder der Codec. Außerdem verlassen sich Suchmaschinen hauptsächlich auf Text, um Ihre Inhalte zu indexieren. Aus all diesen Gründen, bitte liefern Sie ein Transkript des Videos/Audio-Datei.

### Bildkompression

Einige Benutzer entscheiden sich möglicherweise, Bilder anzuzeigen, haben aber dennoch nur begrenzte Bandbreite zur Verfügung, insbesondere in Entwicklungsländern und auf mobilen Geräten. Wenn Sie eine erfolgreiche Website wünschen, komprimieren Sie bitte Ihre Bilder. Es gibt verschiedene Werkzeuge, die Ihnen dabei helfen, sei es online oder lokal:

- **Installierte Software.** [ImageOptim](https://imageoptim.com/api) (Mac), [OptiPNG](https://optipng.sourceforge.net/) (alle Plattformen), [PNGcrush](https://pmt.sourceforge.io/pngcrush/) (DOS, Unix/Linux)
- **Online-Tools.** Dynamic Drives [Online Image Optimizer](https://tools.dynamicdrive.com/imageoptimizer/) (der automatisch von einem Format in ein anderes konvertieren kann, wenn es bandbreiteneffizienter ist)
