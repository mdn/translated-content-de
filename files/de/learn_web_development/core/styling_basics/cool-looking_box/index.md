---
title: "Herausforderung: Ein cool aussehender Kasten"
short-title: "Herausforderung: Stilvolle Kastenstile"
slug: Learn_web_development/Core/Styling_basics/Cool-looking_box
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

In dieser Bewertung erhalten Sie weitere Übung im Erstellen cool aussehender Kästen, indem Sie versuchen, einen auffälligen Kasten zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie sich an dieser Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis des CSS-Boxmodells und anderer mit Kästen verbundener Funktionen wie Rahmen und Hintergründe zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, sollten Sie:

- Speichern Sie das unten gezeigte HTML und CSS als zwei separate Dateien — `index.html` und `style.css` — in einem neuen Verzeichnis.

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

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Sie können das HTML dort einfügen und das CSS in einem dieser Online-Editoren ausfüllen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihre Aufgabe ist es, einen coolen, stilvollen Kasten zu erstellen und den Spaß auszuprobieren, den wir mit CSS haben können.

### Allgemeine Aufgaben

- Wende das CSS auf das HTML an.

### Stil des Kastens

Wir möchten, dass Sie das bereitgestellte {{htmlelement("div")}} stilisieren und ihm Folgendes geben:

- Eine angemessene Breite für einen großen Kasten, sagen wir etwa 200 Pixel.
- Eine angemessene Höhe für einen großen Kasten, bei vertikaler Zentrierung des Textes.
- Zentrieren Sie den Kasten horizontal.
- Zentrieren Sie den Text innerhalb des Kastens.
- Eine leichte Erhöhung der Schriftgröße auf etwa 17-18 Pixel berechneten Stil. Verwenden Sie rems. Schreiben Sie einen Kommentar darüber, wie Sie den Wert ermittelt haben.
- Eine Grundfarbe für das Design. Geben Sie dem Kasten diese Farbe als Hintergrundfarbe.
- Eine kontrastierende Farbe für den Text und einen schwarzen Textschatten.
- Ein ziemlich subtiler Rahmenradius.
- Einen 1-Pixel-Solidenrahmen mit einer Farbe ähnlich der Grundfarbe, aber in einem etwas dunkleren Farbton.
- Ein linearer halbtransparenter schwarzer Farbverlauf, der in die untere rechte Ecke verläuft. Er soll zu Beginn völlig transparent sein, bis zu einer Opazität von etwa 0,2 bis 30% übergehen und dann bis zum Ende dieselbe Farbe beibehalten.
- Mehrere Box-Schatten. Geben Sie ihm einen Standard-Box-Schatten, um den Kasten leicht von der Seite abgehoben wirken zu lassen. Die anderen beiden sollten Innen-Kasten-Schatten sein — ein halbtransparenter weißer Schatten nahe der oberen linken Ecke und ein halbtransparenter schwarzer Schatten nahe der unteren rechten Ecke — um dem Kasten den schönen erhabenen 3D-Look zu verleihen.

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um Fehler in Ihrem CSS aufzudecken und zu beheben.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Ein großer roter Kasten mit abgerundeten Ecken. Weißer Text mit Schlagschatten liest sich 'this is a cool box'.](fancy-box2.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
