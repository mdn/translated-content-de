---
title: Lösungsansätze für Herausforderungen
slug: Learn_web_development/Core/Challenges
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

Diese Seite bietet Lösungen für die Herausforderungen im Modul [Grundlagen der CSS-Formatierung](/de/docs/Learn_web_development/Core/Styling_basics). Dies sind nicht die einzigen möglichen Lösungen. Die unten stehenden Abschnitte entsprechen den Titeln der Tutorials.

## Kaskadierung und Vererbung

Die Herausforderungen auf der Seite [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) sind:

### Vererbte Stile

- Herausforderung
  - : Ändern Sie Ihr Stylesheet, sodass nur die roten Buchstaben unterstrichen sind.
- Lösung
  - : Verschieben Sie die Deklaration für das Unterstreichen von der Regel für {{ HTMLElement("p") }} zur Regel für {{ HTMLElement("strong") }}. Die resultierende Datei sieht dann so aus:

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
  - : Ohne Ihre HTML-Datei zu ändern, fügen Sie eine einzige Regel in Ihre CSS-Datei ein, die alle Anfangsbuchstaben in ihrer jetzigen Farbe belässt, aber den restlichen Text im zweiten Absatz blau macht.
- Lösung
  - : Fügen Sie eine Regel mit einem ID-Selektor `#second` und einer Deklaration `color: blue;` hinzu, wie unten gezeigt:

    ```css
    #second {
      color: blue;
    }
    ```

    Ein spezifischerer Selektor, `p#second`, funktioniert auch.

### Beide Absätze blau

- Herausforderung
  - : Ändern Sie die gerade hinzugefügte Regel (ohne etwas anderes zu ändern), um auch den ersten Absatz blau zu machen.
- Lösung
  - : Ändern Sie den Selektor der neuen Regel zu einem Tag-Selektor mit `p`:

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
  - : Eine Möglichkeit, dies zu erreichen, besteht darin, Kommentarbegrenzer um die Regel für `.carrot` zu setzen:

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
  - : Ohne etwas anderes zu ändern, machen Sie alle sechs Anfangsbuchstaben doppelt so groß in der Standardschriftart Serif des Browsers.
- Lösung
  - : Fügen Sie die folgende Stil-Deklaration zur Regel `strong` hinzu:

    ```css
    font: 200% serif;
    ```

    Wenn Sie separate Deklarationen für `font-size` und `font-family` verwenden, wird die `font-style` Einstellung im ersten Absatz _nicht_ überschrieben.

## Farbe

### Farben mit drei Ziffern

- Herausforderung
  - : Ändern Sie in Ihrer CSS-Datei alle Farbnamen in 3-stellige Farbcodes, ohne das Ergebnis zu beeinflussen.
- Lösung
  - : Die folgenden Werte sind vernünftige Annäherungen an die benannten Farben:

    ```css
    strong {
      color: #ff0000; /* red */
      background-color: #ddddff; /* pale blue */
      font: 200% serif;
    }

    .carrot {
      color: #ffaa00; /* orange */
    }

    .spinach {
      color: #008800; /* dark green */
    }

    p {
      color: #0000ff; /* blue */
    }
    ```

## Inhalt

Die Herausforderungen auf der Seite sind:

### Ein Bild hinzufügen

- Herausforderung
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, damit es das Bild am Anfang jeder Zeile anzeigt.
- Lösung
  - : Fügen Sie diese Regel zu Ihrem Stylesheet hinzu:

    ```css
    p::before {
      content: url("yellow-pin.png");
    }
    ```

## Listen

Die Herausforderungen auf der Seite [Listen gestalten](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists) sind:

### Kleinere römische Ziffern

- Herausforderung
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, um die Ozeane mit römischen Ziffern von i bis v zu nummerieren.
- Lösung
  - : Definieren Sie eine Regel für Listenelemente, um den `lower-roman` Listenstil zu verwenden:

    ```css
    li {
      list-style: lower-roman;
    }
    ```

### Großbuchstaben

- Herausforderung
  - : Ändern Sie Ihr Stylesheet, um die Überschriften mit Großbuchstaben in Klammern zu kennzeichnen.
- Lösung
  - : Fügen Sie eine Regel zum Body-Element (Elternteil der Überschriften) hinzu, um einen neuen Zähler zurückzusetzen, und eine weitere, um den Zähler bei den Überschriften anzuzeigen und zu inkrementieren:

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

### Rahmen um Ozeane

- Herausforderung
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, die einen breiten Rahmen um die Ozeane in einer Farbe, die Sie an das Meer erinnert, erzeugt.
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

### Feste Bildposition

- Herausforderung
  - : Ändern Sie Ihr Beispieldokument `doc2.html`, indem Sie diesen Tag gegen Ende, direkt vor `</BODY>`, hinzufügen: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">`. Sagen Sie voraus, wo das Bild in Ihrem Dokument erscheinen wird. Laden Sie dann Ihren Browser neu, um zu sehen, ob Sie richtig lagen.
- Lösung
  - : Das Bild erscheint rechts von der zweiten Liste.
    ![Eine Liste mit fünf Platzhaltern ist mit Nummerierte Absätze betitelt. Ein gelber Pin befindet sich rechts neben einem blauen Kästchen, das die Liste enthält.](pin_placement.png)
- Herausforderung
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, die das Bild oben rechts in Ihrem Dokument platziert.
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

### Rahmen nur um Datenzellen

- Herausforderung
  - : Ändern Sie das Stylesheet, um der Tabelle einen grünen Rahmen nur um die Datenzellen zu geben.
- Lösung
  - : Die folgende Regel setzt Rahmen nur um {{ HTMLElement("td") }} Elemente, die sich innerhalb des {{ HTMLElement("tbody") }} Elements der Tabelle mit `id=demo-table` befinden:

    ```css
    #demo-table tbody td {
      border: 1px solid #77aa77;
    }
    ```

## Medien

Die Herausforderungen auf der Seite [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sind:

### Separates Druckstil-Dokument

- Herausforderung
  - : Verschieben Sie die druckspezifischen Stilregeln in eine separate CSS-Datei und importieren Sie sie in Ihr `style4.css` Stylesheet.
- Lösung
  - : Schneiden Sie die Zeilen zwischen `/* print only */` und `/* end print only */` aus und fügen Sie sie in eine Datei mit dem Namen `style4_print.css` ein. Fügen Sie in `style4.css` die folgende Zeile zu Beginn der Datei hinzu:

    ```css
    @import "style4_print.css" print;
    ```

### Überschriften-Farbe bei Hover

- Herausforderung
  - : Machen Sie die Überschriften blau, wenn der Mauszeiger über ihnen schwebt.
- Lösung
  - : Die folgende Regel erzielt das gewünschte Ergebnis:

    ```css
    h1:hover {
      color: blue;
    }
    ```

## JavaScript

### Kasten nach rechts bewegen

- Herausforderung
  - : Ändern Sie das Skript, sodass das Quadrat um 20 em nach rechts springt, wenn sich seine Farbe ändert, und danach zurückspringt.
- Lösung
  - : Fügen Sie Zeilen hinzu, um die `margin-left` Eigenschaft zu ändern. Achten Sie darauf, sie in JavaScript als `marginLeft` zu spezifizieren. Das folgende Skript erzielt das gewünschte Ergebnis:

    ```js
    // JavaScript demonstration
    function doDemo(button) {
      const square = document.getElementById("square");
      square.style.backgroundColor = "#ffaa44";
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
  - : Ändern Sie das Stylesheet so, dass die inneren Blütenblätter alle rosa werden, wenn der Mauszeiger über einem von ihnen schwebt, ohne die Funktionalität der äußeren Blütenblätter zu ändern.
- Lösung
  - : Verschieben Sie die Position der :hover Pseudoklasse von einem spezifischen Blütenblatt zu allen Blütenblättern:

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
