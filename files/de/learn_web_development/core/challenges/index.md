---
title: Lösungen für Herausforderungen
slug: Learn_web_development/Core/Challenges
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Diese Seite bietet Lösungen für die in dem Modul [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) gestellten Herausforderungen. Dies sind nicht die einzigen möglichen Lösungen. Die folgenden Abschnitte entsprechen den Titeln der Tutorialabschnitte.

## Kaskadierung und Vererbung

Die Herausforderungen auf der Seite [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) sind:

### Vererbte Stile

- Herausforderung
  - : Ändern Sie Ihr Stylesheet so, dass nur die roten Buchstaben unterstrichen sind.
- Lösung

  - : Verschieben Sie die Deklaration für das Unterstreichen von der Regel für {{ HTMLElement("p") }} zur Regel für {{ HTMLElement("strong") }}. Die resultierende Datei sieht folgendermaßen aus:

    ```css
    p {
      color: blue;
    }
    strong {
      color: orange;
      text-decoration: underline;
    }
    ```

Spätere Abschnitte dieses Tutorials beschreiben Stilregeln und Deklarationen ausführlicher.

## Selektoren

Die Herausforderungen auf der Seite [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) sind:

### Zweiter Absatz blau

- Herausforderung
  - : Fügen Sie, ohne Ihre HTML-Datei zu ändern, eine einzelne Regel in Ihre CSS-Datei ein, die alle Anfangsbuchstaben in ihrer ursprünglichen Farbe belässt, aber den gesamten anderen Text im zweiten Absatz blau färbt.
- Lösung

  - : Fügen Sie eine Regel mit einem ID-Selektor von `#second` und einer Deklaration `color: blue;` hinzu, wie unten gezeigt:

    ```css
    #second {
      color: blue;
    }
    ```

    Ein spezifischerer Selektor, `p#second`, funktioniert ebenfalls.

### Beide Absätze blau

- Herausforderung
  - : Ändern Sie die Regel, die Sie gerade hinzugefügt haben (ohne etwas anderes zu ändern), um den ersten Absatz ebenfalls blau zu machen.
- Lösung

  - : Ändern Sie den Selektor der neuen Regel in einen Tag-Selektor mit `p`:

    ```css
    p {
      color: blue;
    }
    ```

Die Regeln für die anderen Farben haben alle spezifischere Selektoren, sodass sie das Blau des Absatzes überschreiben.

## Lesbare CSS

### Eine Regel auskommentieren

- Herausforderung
  - : Kommentieren Sie einen Teil Ihres Stylesheets aus, ohne etwas anderes zu ändern, um den allerersten Buchstaben Ihres Dokuments rot zu machen.
- Lösung

  - : Eine Möglichkeit besteht darin, Kommentardelimiter um die Regel für `.carrot` zu setzen:

    ```css
    /*
    .carrot {
      color: orange;
    }
    */
    ```

## Textstile

### Große Anfangsbuchstaben

- Herausforderung
  - : Ändern Sie nichts anderes und machen Sie alle sechs Anfangsbuchstaben doppelt so groß in der Standardschriftart des Browsers.
- Lösung

  - : Fügen Sie die folgende Stil-Deklaration in die `strong`-Regel ein:

    ```css
    font: 200% serif;
    ```

    Wenn Sie separate Deklarationen für `font-size` und `font-family` verwenden, wird die `font-style`-Einstellung im ersten Absatz _nicht_ überschrieben.

## Farbe

### Drei-Stellen-Farbcodes

- Herausforderung
  - : Ändern Sie in Ihrer CSS-Datei alle Farbnamen in 3-stellige Farbcodes, ohne das Ergebnis zu beeinflussen.
- Lösung

  - : Die folgenden Werte sind vernünftige Annäherungen an die benannten Farben:

    ```css
    strong {
      color: #f00; /* red */
      background-color: #ddf; /* pale blue */
      font: 200% serif;
    }

    .carrot {
      color: #fa0; /* orange */
    }

    .spinach {
      color: #080; /* dark green */
    }

    p {
      color: #00f; /* blue */
    }
    ```

## Inhalt

Die Herausforderungen auf der Seite sind:

### Ein Bild hinzufügen

- Herausforderung
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, sodass das Bild zu Beginn jeder Zeile angezeigt wird.
- Lösung

  - : Fügen Sie diese Regel zu Ihrem Stylesheet hinzu:

    ```css
    p::before {
      content: url("yellow-pin.png");
    }
    ```

## Listen

Die Herausforderungen auf der Seite [Styling von Listen](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists) sind:

### Kleinere römische Ziffern

- Herausforderung
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, um die Ozeane mit römischen Ziffern von i bis v zu nummerieren.
- Lösung

  - : Definieren Sie eine Regel für Listenelemente, um den Listentyp `lower-roman` zu verwenden:

    ```css
    li {
      list-style: lower-roman;
    }
    ```

### Große Buchstaben

- Herausforderung
  - : Ändern Sie Ihr Stylesheet, um die Überschriften mit großen Buchstaben in Klammern zu kennzeichnen.
- Lösung

  - : Fügen Sie eine Regel zum Body-Element (Elternteil der Überschriften) hinzu, um einen neuen Zähler zurückzusetzen, und eine Regel, um den Zähler auf den Überschriften anzuzeigen und zu erhöhen:

    ```css
    /* numbered headings */
    body {
      counter-reset: head-num;
    }
    h3::before {
      content: "(" counter(head-num, upper-latin) ") ";
      counter-increment: head-num;
    }
    ```

## Kästen

Die Herausforderungen auf der Seite [Kästen](/de/docs/Learn_web_development/Core/CSS_layout) sind:

### Ozean-Rahmen

- Herausforderung
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, die den Ozeanen einen breiten Rahmen in einer Farbe verleiht, die Sie an das Meer erinnert.
- Lösung

  - : Die folgende Regel erreicht diesen Effekt:

    ```css
    ul {
      border: 10px solid lightblue;
      width: 100px;
    }
    ```

## Layout

Die Herausforderungen auf der Seite [Layout](/de/docs/Learn_web_development/Core/CSS_layout) sind:

### Standardposition des Bildes

### Feste Bildposition

- Herausforderung
  - : Ändern Sie Ihr Beispieldokument, `doc2.html`, und fügen Sie diesen Tag am Ende, direkt vor `</BODY>`, hinzu: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">`. Voraussagen Sie, wo das Bild in Ihrem Dokument erscheint. Aktualisieren Sie dann Ihren Browser, um zu sehen, ob Sie richtig lagen.
- Lösung
  - : Das Bild erscheint rechts neben der zweiten Liste.
    ![Eine Liste von fünf Platzhaltertexten trägt den Titel "Nummerierte Absätze". Ein gelber Pin befindet sich rechts von einem blauen Kasten, der die Liste enthält.](pin_placement.png)
- Herausforderung
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, die das Bild oben rechts in Ihrem Dokument platziert.
- Lösung

  - : Die folgende Regel erreicht das gewünschte Ergebnis:

    ```css
    #fixed-pin {
      position: fixed;
      top: 3px;
      right: 3px;
    }
    ```

## Tabellen

Die Herausforderungen auf der Seite [Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) sind:

### Rahmen nur um Datenszellen

- Herausforderung
  - : Ändern Sie das Stylesheet so, dass der Tisch nur einen grünen Rahmen um die DatensZellen hat.
- Lösung

  - : Die folgende Regel umfasst nur {{ HTMLElement("td") }} Elemente, die sich innerhalb des {{ HTMLElement("tbody") }} Elements der Tabelle mit `id=demo-table` befinden:

    ```css
    #demo-table tbody td {
      border: 1px solid #7a7;
    }
    ```

## Medien

Die Herausforderungen auf der Seite [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sind:

### Separates Druckstil-Datei

- Herausforderung
  - : Verschieben Sie die druckspezifischen Stilregeln in eine separate CSS-Datei und importieren Sie sie in Ihr `style4.css` Stylesheet.
- Lösung

  - : Schneiden Sie die Zeilen zwischen `/* print only */` und `/* end print only */` aus und fügen Sie sie in eine Datei namens `style4_print.css` ein. Fügen Sie in style4.css die folgende Zeile am Anfang der Datei hinzu:

    ```css
    @import url("style4_print.css") print;
    ```

### Farbe bei Überschriften-Hover

- Herausforderung
  - : Lassen Sie die Überschriften blau werden, wenn der Mauszeiger darüber schwebt.
- Lösung

  - : Die folgende Regel erreicht das gewünschte Ergebnis:

    ```css
    h1:hover {
      color: blue;
    }
    ```

## JavaScript

### Kasten nach rechts verschieben

- Herausforderung
  - : Ändern Sie das Skript so, dass das Quadrat um 20 em nach rechts springt, wenn sich seine Farbe ändert, und danach wieder zurückspringt.
- Lösung

  - : Fügen Sie Zeilen hinzu, um die Eigenschaft `margin-left` zu ändern. Bei JavaScript müssen Sie es als `marginLeft` angeben. Das folgende Skript erreicht das gewünschte Ergebnis:

    ```js
    // JavaScript demonstration
    function doDemo(button) {
      const square = document.getElementById("square");
      square.style.backgroundColor = "#fa4";
      square.style.marginLeft = "20em";
      button.setAttribute("disabled", "true");
      setTimeout(clearDemo, 2000, button);
    }

    function clearDemo(button) {
      const square = document.getElementById("square");
      square.style.backgroundColor = "transparent";
      square.style.marginLeft = "0em";
      button.removeAttribute("disabled");
    }
    ```

## SVG und CSS

### Farbe der inneren Blütenblätter ändern

- Herausforderung
  - : Ändern Sie das Stylesheet so, dass die inneren Blütenblätter alle rosa werden, wenn der Mauszeiger über einem von ihnen schwebt, ohne die Funktionsweise der äußeren Blütenblätter zu ändern.
- Lösung

  - : Verschieben Sie die Position der :hover Pseudoklasse von einem spezifischen Blütenblatt auf alle Blütenblätter

    ```css
    #inner-petals {
      --segment-fill-fill-hover: pink;
    }

    /* Non-standard way for some older browsers */
    #inner-petals:hover .segment-fill {
      fill: pink;
      stroke: none;
    }
    ```
