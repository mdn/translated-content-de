---
title: "Herausforderung: Eine cool aussehende Box"
short-title: "Herausforderung: Elegante Box-Stile"
slug: Learn_web_development/Core/Styling_basics/Cool-looking_box
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

In dieser Aufgabe üben Sie weiterhin das Erstellen von cool aussehenden Boxen, indem Sie versuchen, eine auffällige Box zu kreieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Aufgabe in Angriff nehmen, sollten Sie alle Artikel in diesem Modul bereits durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis des CSS-Box-Modells und anderer boxbezogener Eigenschaften wie Ränder und Hintergründe zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Aufgabe zu beginnen, sollten Sie:

- Den unten gezeigten HTML- und CSS-Code als zwei separate Dateien — `index.html` und `style.css` — in einem neuen Verzeichnis speichern.

### HTML

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Cool box</title>
    <!-- your css link goes here -->
  </head>
  <body>
    <div>This is a cool box</div>
  </body>
</html>
```

### CSS

```css
html {
  font-family: sans-serif;
}

/* Your CSS below here */
```

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.
Sie können den HTML-Code einfügen und das CSS in einen dieser Online-Editoren einfüllen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich an uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## Projektbeschreibung

Ihre Aufgabe ist es, eine coole, elegante Box zu erstellen und die Möglichkeiten von CSS zu erkunden.

### Allgemeine Aufgaben

- Wenden Sie das CSS auf das HTML an.

### Die Box stylen

Wir möchten, dass Sie das bereitgestellte {{htmlelement("div")}} wie folgt stylen:

- Eine angemessene Breite für eine große Box, sagen wir etwa 200 Pixel.
- Eine angemessene Höhe für eine große Box, wobei der Text vertikal zentriert werden soll.
- Zentrieren Sie die Box horizontal.
- Zentrieren Sie den Text innerhalb der Box.
- Eine leichte Erhöhung der Schriftgröße, auf etwa 17-18 Pixel im berechneten Stil. Verwenden Sie `rem`. Schreiben Sie einen Kommentar, wie Sie den Wert ermittelt haben.
- Eine Grundfarbe für das Design. Geben Sie der Box diese Farbe als Hintergrundfarbe.
- Eine kontrastierende Farbe für den Text und einen schwarzen Textschatten.
- Einen ziemlich subtilen Radius der Ecken.
- Einen 1-Pixel-dicken durchgehenden Rand mit einer Farbe ähnlich der Grundfarbe, aber in einem etwas dunkleren Farbton.
- Ein lineares halbtransparentes schwarzes verlauf, das zur unteren rechten Ecke verläuft. Es soll am Anfang komplett transparent sein und bei etwa 30 % eine Deckkraft von 0.2 erreichen und diese bis zum Ende beibehalten.
- Mehrere Boxschatten. Verleihen Sie der Box einen Standard-Boxschatten, um die Box leicht von der Seite abgehoben wirken zu lassen. Die anderen zwei sollten eingekerbte Boxschatten sein — ein halbtransparenter weißer Schatten nahe der oberen linken Ecke und ein halbtransparenter schwarzer Schatten nahe der unteren rechten Ecke — um der Box ein schönes, erhabenes 3D-Design zu geben.

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um Fehler in Ihrem CSS zu finden und zu beheben.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Eine große rote Box mit abgerundeten Ecken. Weißer Text mit Schatten liest 'this is a cool box'.](fancy-box2.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
