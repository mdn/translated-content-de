---
title: "Herausforderung: Eine cool aussehende Box"
slug: Learn_web_development/Core/Styling_basics/Cool-looking_box
l10n:
  sourceCommit: ca58132c5bef8bf0e40919325d0c5ed2c47972c7
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

In dieser Bewertung werden Sie sich weiter darin üben, cool aussehende Boxen zu erstellen, indem Sie versuchen, eine auffällige Box zu gestalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung in Angriff nehmen, sollten Sie alle Artikel in diesem Modul bearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis des CSS-Box-Modells und anderer boxbezogener Funktionen wie Ränder und Hintergründe zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Aufgabe zu beginnen, sollten Sie:

- Speichern Sie das unten gezeigte HTML und CSS als zwei separate Dateien — `index.html` und `style.css` — in einem neuen Verzeichnis.

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

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie können das HTML einfügen und das CSS in einen dieser Online-Editoren eintragen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbriefing

Ihre Aufgabe besteht darin, eine coole, schicke Box zu erstellen und den Spaß zu erkunden, den wir mit CSS haben können.

### Allgemeine Aufgaben

- Wenden Sie das CSS auf das HTML an.

### Die Box gestalten

Wir möchten, dass Sie das bereitgestellte {{htmlelement("div")}} gestalten und ihm Folgendes geben:

- Eine angemessene Breite für eine große Box, etwa um die 200 Pixel.
- Eine angemessene Höhe für eine große Box, wobei der Text vertikal zentriert wird.
- Zentrieren Sie die Box horizontal.
- Zentrieren Sie den Text innerhalb der Box.
- Eine leichte Erhöhung der Schriftgröße auf etwa 17-18 Pixel berechneter Stil. Verwenden Sie rems. Schreiben Sie einen Kommentar darüber, wie Sie den Wert ermittelt haben.
- Eine Grundfarbe für das Design. Vergeben Sie diese Farbe als Hintergrundfarbe der Box.
- Eine kontrastierende Farbe für den Text und einen schwarzen Textschatten.
- Einen ziemlich subtilen Randradius.
- Eine ein-Pixel breite, durchgehende Linie an der Grenze mit einer Farbe ähnlich der Grundfarbe, jedoch in einem etwas dunkleren Farbton.
- Ein linearer, halbtransparenter schwarzer Verlauf, der in die untere rechte Ecke verläuft. Machen Sie ihn am Anfang vollständig transparent, und er sollte entlang des Verlaufs bei 30% eine Opazität von etwa 0.2 erreichen und danach die gleiche Farbe bis zum Ende behalten.
- Mehrere Box-Schatten. Verleihen Sie ihm einen Standard-Box-Schatten, um die Box leicht angehoben wirken zu lassen. Die anderen beiden sollten eingelassene Box-Schatten sein — ein halbtransparenter weißer Schatten nahe der oberen linken Ecke und ein halbtransparenter schwarzer Schatten nahe der unteren rechten Ecke —, um den schönen erhabenen 3D-Effekt der Box zu verstärken.

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um Fehler in Ihrem CSS zu finden und zu beheben.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Eine große rote Box mit abgerundeten Ecken. Weißer Text mit Schlagschatten zeigt 'this is a cool box'.](fancy-box2.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
