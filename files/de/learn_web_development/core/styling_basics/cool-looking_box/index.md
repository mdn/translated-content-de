---
title: "Herausforderung: Eine cool aussehende Box"
short-title: "Herausforderung: Stilvolle Box-Stile"
slug: Learn_web_development/Core/Styling_basics/Cool-looking_box
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

In dieser Bewertung werden Sie ein wenig mehr Übung darin bekommen, cool aussehende Boxen zu erstellen, indem Sie versuchen, eine auffällige Box zu gestalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis des CSS-Boxmodells und anderer boxbezogener Funktionen wie Ränder und Hintergründe zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um diese Bewertung zu starten, sollten Sie:

- Speichern Sie den unten gezeigten HTML- und CSS-Code als zwei separate Dateien — `index.html` und `style.css` — in einem neuen Verzeichnis.

### HTML

```html
<!DOCTYPE html>
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

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie können den HTML-Code einfügen und das CSS in einen dieser Online-Editoren eintragen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihre Aufgabe ist es, eine coole, stilvolle Box zu erstellen und den Spaß zu erkunden, den wir mit CSS haben können.

### Allgemeine Aufgaben

- Wenden Sie das CSS auf das HTML an.

### Gestaltung der Box

Wir möchten, dass Sie das bereitgestellte {{htmlelement("div")}} gestalten und ihm Folgendes geben:

- Eine angemessene Breite für eine große Box, etwa 200 Pixel.
- Eine angemessene Höhe für eine große Box, wobei der Text vertikal zentriert wird.
- Zentrieren Sie die Box horizontal.
- Zentrieren Sie den Text innerhalb der Box.
- Eine leichte Erhöhung der Schriftgröße, auf eine berechnete Größe von etwa 17-18 Pixeln. Verwenden Sie `rem`. Schreiben Sie einen Kommentar darüber, wie Sie den Wert ermittelt haben.
- Eine Basisfarbe für das Design. Geben Sie der Box diese Farbe als Hintergrundfarbe.
- Eine kontrastierende Farbe für den Text und einen schwarzen Textschatten.
- Einen ziemlich subtilen Rahmenradius.
- Einen 1-Pixel breiten, durchgezogenen Rand mit einer Farbe ähnlich der Basisfarbe, aber in einem etwas dunkleren Farbton.
- Einen linearen halbtransparenten schwarzen Farbverlauf, der nach unten rechts verläuft. Er sollte am Anfang vollständig transparent sein, bei etwa 30 % auf eine Opazität von etwa 0,2 ansteigen und bis zum Ende die gleiche Farbe behalten.
- Mehrere Box-Schatten. Geben Sie ihr einen normalen Box-Schatten, um die Box etwas von der Seite abgehoben erscheinen zu lassen. Die anderen beiden sollten eingezogene Schatten sein — ein halbtransparenter weißer Schatten nahe der oberen linken Ecke und ein halbtransparenter schwarzer Schatten nahe der unteren rechten Ecke — um dem schönen erhabenen 3D-Look der Box beizutragen.

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um Fehler in Ihrem CSS zu finden und zu beheben.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Eine große rote Box mit abgerundeten Ecken. Weißer Text mit Schlagschatten liest 'this is a cool box'.](fancy-box2.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
