---
title: Lösungen zu den Herausforderungen
slug: Learn_web_development/Core/Challenges
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Diese Seite bietet Lösungen zu den Herausforderungen, die im [CSS Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) Modul gestellt werden. Dies sind nicht die einzigen möglichen Lösungen. Die untenstehenden Abschnitte entsprechen den Titeln der Tutorial-Abschnitte.

## Kaskadierung und Vererbung

Die Herausforderungen auf der Seite [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) sind:

### Vererbte Stile

- Herausforderung
  - : Ändern Sie Ihr Stylesheet so, dass nur die roten Buchstaben unterstrichen sind.
- Lösung

  - : Verschieben Sie die Deklaration für die Unterstreichung von der Regel für {{ HTMLElement("p") }} zu der für {{ HTMLElement("strong") }}. Die resultierende Datei sieht folgendermaßen aus:

    ```css
    p {
      color: blue;
    }
    strong {
      color: orange;
      text-decoration: underline;
    }
    ```

Spätere Abschnitte dieses Tutorials beschreiben Stilregeln und Deklarationen genauer.

## Selektoren

Die Herausforderungen auf der Seite [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) sind:

### Zweiter Absatz blau

- Herausforderung
  - : Fügen Sie eine einzige Regel in Ihre CSS-Datei ein, ohne Ihre HTML-Datei zu ändern, die alle Anfangsbuchstaben in ihrer ursprünglichen Farbe belässt, aber den restlichen Text im zweiten Absatz blau macht.
- Lösung

  - : Fügen Sie eine Regel mit einem ID-Selektor `#second` und einer Deklaration `color: blue;` hinzu, wie unten gezeigt:

    ```css
    #second {
      color: blue;
    }
    ```

    Ein spezifischerer Selektor, `p#second`, funktioniert ebenfalls.

### Beide Absätze blau

- Herausforderung
  - : Ändern Sie nun die eben hinzugefügte Regel (ohne etwas anderes zu ändern), sodass auch der erste Absatz blau ist.
- Lösung

  - : Ändern Sie den Selektor der neuen Regel zu einem Tag-Selektor `p`:

    ```css
    p {
      color: blue;
    }
    ```

Die Regeln für die anderen Farben haben alle spezifischere Selektoren, sodass sie das Blau des Absatzes überschreiben.

## Lesbares CSS

### Eine Regel auskommentieren

- Herausforderung
  - : Kommentieren Sie einen Teil Ihres Stylesheets aus, ohne etwas anderes zu ändern, um den allerersten Buchstaben Ihres Dokuments rot zu machen.
- Lösung

  - : Eine Möglichkeit ist, Kommentarzeichen um die Regel für `.carrot` zu setzen:

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
  - : Machen Sie alle sechs Anfangsbuchstaben doppelt so groß in der serifenlosen Standardschrift des Browsers, ohne etwas anderes zu ändern.
- Lösung

  - : Fügen Sie die folgende Stil-Deklaration zur `strong`-Regel hinzu:

    ```css
    font: 200% serif;
    ```

    Wenn Sie separate Deklarationen für `font-size` und `font-family` verwenden, wird die `font-style`-Einstellung im ersten Absatz _nicht_ überschrieben.

## Farbe

### Drei-Bit-Farbcodes

- Herausforderung
  - : Ändern Sie in Ihrer CSS-Datei alle Farbnamen in 3-stellige Farbcodes, ohne das Ergebnis zu beeinflussen.
- Lösung

  - : Die folgenden Werte sind angemessene Annäherungen an die benannten Farben:

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
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, damit das Bild am Anfang jeder Zeile angezeigt wird.
- Lösung

  - : Fügen Sie diese Regel in Ihr Stylesheet ein:

    ```css
    p::before {
      content: url("yellow-pin.png");
    }
    ```

## Listen

Die Herausforderungen auf der Seite [Listen stylen](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists) sind:

### Römische Zahlen in Kleinbuchstaben

- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, die die Ozeane mit römischen Zahlen von i bis v nummeriert.
- Lösung

  - : Definieren Sie eine Regel für Listenelemente, um den Listenstil `lower-roman` zu verwenden:

    ```css
    li {
      list-style: lower-roman;
    }
    ```

### Großbuchstaben

- Herausforderung
  - : Ändern Sie Ihr Stylesheet, um die Überschriften mit Großbuchstaben in Klammern zu kennzeichnen.
- Lösung

  - : Fügen Sie eine Regel für das body-Element (Elternteil der Überschriften) hinzu, um einen neuen Zähler zurückzusetzen und einen zu definieren, der den Zähler bei den Überschriften anzeigt und erhöht:

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

## Boxen

Die Herausforderungen auf der Seite [Boxen](/de/docs/Learn_web_development/Core/CSS_layout) sind:

### Ozean-Rand

- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, die eine breite Grenze rund um die Ozeane in einer Farbe erzeugt, die Sie an das Meer erinnert.
- Lösung

  - : Die folgende Regel erzielt diesen Effekt:

    ```css
    ul {
      border: 10px solid lightblue;
      width: 100px;
    }
    ```

## Layout

Die Herausforderungen auf der Seite [Layout](/de/docs/Learn_web_development/Core/CSS_layout) sind:

### Standard-Bildposition

### Fixierte Bildposition

- Herausforderung
  - : Ändern Sie Ihr Beispieldokument, `doc2.html`, indem Sie diesen Tag nahe dem Ende, direkt vor `</BODY>`, einfügen: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">` Sagen Sie vorher, wo das Bild in Ihrem Dokument erscheinen wird. Aktualisieren Sie dann Ihren Browser, um zu sehen, ob Sie richtig lagen.
- Lösung
  - : Das Bild erscheint rechts neben der zweiten Liste.
    ![Eine Liste von fünf Platzhaltertexten ist mit Nummerierte Absätze betitelt. Ein gelber Stift ist rechts neben einer blauen Box, die die Liste enthält, platziert.](pin_placement.png)
- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, die das Bild oben rechts in Ihrem Dokument platziert.
- Lösung

  - : Die folgende Regel erzielt das gewünschte Ergebnis:

    ```css
    #fixed-pin {
      position: fixed;
      top: 3px;
      right: 3px;
    }
    ```

## Tabellen

Die Herausforderungen auf der Seite [Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) sind:

### Nur Datenzellen mit Rändern

- Herausforderung
  - : Ändern Sie das Stylesheet, sodass die Tabelle nur um die Datenzellen herum einen grünen Rand hat.
- Lösung

  - : Die folgende Regel legt Ränder nur um die {{ HTMLElement("td") }} Elemente, die sich innerhalb des {{ HTMLElement("tbody") }} Elements der Tabelle mit `id=demo-table` befinden:

    ```css
    #demo-table tbody td {
      border: 1px solid #7a7;
    }
    ```

## Medien

Die Herausforderungen auf der Seite [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sind:

### Separates Druckstil-Dokument

- Herausforderung
  - : Verschieben Sie die druckspezifischen Stilregeln in eine separate CSS-Datei und importieren Sie diese in Ihr `style4.css` Stylesheet.
- Lösung

  - : Schneiden Sie die Zeilen zwischen `/* print only */` und `/* end print only */` aus und fügen Sie sie in eine Datei mit dem Namen `style4_print.css` ein. In style4.css fügen Sie folgende Zeile am Anfang der Datei hinzu:

    ```css
    @import url("style4_print.css") print;
    ```

### Farbe beim Überfahren der Überschrift

- Herausforderung
  - : Lassen Sie die Überschriften blau werden, wenn der Mauszeiger über ihnen ist.
- Lösung

  - : Die folgende Regel erzielt das gewünschte Ergebnis:

    ```css
    h1:hover {
      color: blue;
    }
    ```

## JavaScript

### Box nach rechts verschieben

- Herausforderung
  - : Ändern Sie das Skript so, dass das Quadrat nach rechts um 20 em springt, wenn sich seine Farbe ändert, und danach wieder zurückspringt.
- Lösung

  - : Fügen Sie Zeilen hinzu, um die Eigenschaft `margin-left` zu ändern. Achten Sie darauf, sie in JavaScript als `marginLeft` anzugeben. Das folgende Skript erzielt das gewünschte Ergebnis:

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
  - : Ändern Sie das Stylesheet so, dass alle inneren Blütenblätter pink werden, wenn der Mauszeiger über einem von ihnen ist, ohne die Funktionsweise der äußeren Blütenblätter zu ändern.
- Lösung

  - : Verschieben Sie die Position der :hover Pseudo-Klasse von einem bestimmten Blütenblatt auf alle Blütenblätter

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
