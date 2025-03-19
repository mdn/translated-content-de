---
title: "Herausforderung: Eine cool aussehende Box"
short-title: "Herausforderung: Schicke Box-Stile"
slug: Learn_web_development/Core/Styling_basics/Cool-looking_box
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

In dieser Bewertung erhalten Sie weitere Übung im Erstellen cool aussehender Boxen, indem Sie versuchen, eine auffällige Box zu erstellen.

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
        Das Verständnis des CSS-Box-Modells und anderer boxbezogener Funktionen wie Ränder und Hintergründe zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um diese Bewertung zu starten, sollten Sie:

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

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Sie könnten das HTML einfügen und das CSS in einen dieser Online-Editoren einfügen.

> [!NOTE]
> Wenn Sie feststecken, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektauftrag

Ihre Aufgabe ist es, eine coole, schicke Box zu erstellen und den Spaß zu erkunden, den wir mit CSS haben können.

### Allgemeine Aufgaben

- Wenden Sie das CSS auf das HTML an.

### Die Box gestalten

Wir möchten, dass Sie das bereitgestellte {{htmlelement("div")}} gestalten, indem Sie ihm folgendes geben:

- Eine angemessene Breite für eine große Box, etwa um die 200 Pixel.
- Eine angemessene Höhe für eine große Box, wobei der Text vertikal zentriert wird.
- Zentrieren Sie die Box horizontal.
- Zentrieren Sie den Text innerhalb der Box.
- Eine leichte Erhöhung der Schriftgröße auf etwa 17-18 Pixel im berechneten Stil. Verwenden Sie `rems`. Schreiben Sie einen Kommentar, wie Sie den Wert ermittelt haben.
- Eine Grundfarbe für das Design. Geben Sie der Box diese Farbe als Hintergrundfarbe.
- Eine kontrastierende Farbe für den Text und einen schwarzen Textschatten.
- Ein recht subtiler Radius für die Ecken.
- Eine 1-Pixel breite Volltonrand mit einer Farbe, die der Grundfarbe ähnlich ist, aber einen etwas dunkleren Farbton hat.
- Einen linearen halbtransparenten schwarzen Verlauf, der in die untere rechte Ecke geht. Machen Sie ihn am Anfang vollständig transparent und graduell bis zu etwa einer Deckkraft von 0,2 bis 30% entlang und behalten Sie dieselbe Farbe bis zum Ende bei.
- Mehrere Boxschatten. Geben Sie ihm einen Standard-Boxschatten, um die Box leicht von der Seite abgehoben erscheinen zu lassen. Die anderen zwei sollten eingesetzte Boxschatten sein — ein halbtransparenter weißer Schatten nahe der oberen linken Ecke und ein halbtransparenter schwarzer Schatten nahe der unteren rechten Ecke — um den schönen erhabenen 3D-Look der Box zu verstärken.

## Hinweise und Tipps

- Nutzen Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um Fehler in Ihrem CSS zu finden und zu beheben.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Eine große rote Box mit abgerundeten Ecken. Weißer Text mit einem Schlagschatten sagt 'this is a cool box'.](fancy-box2.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
