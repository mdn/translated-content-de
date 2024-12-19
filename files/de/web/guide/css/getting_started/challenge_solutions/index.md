---
title: Lösungen für Herausforderungen
slug: Web/Guide/CSS/Getting_started/Challenge_solutions
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

Diese Seite bietet Lösungen für die Herausforderungen im [CSS-Grundlagen der Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics) Modul. Dies sind nicht die einzigen möglichen Lösungen. Die untenstehenden Abschnitte entsprechen den Titeln der Tutorial-Abschnitte.

## Reihung und Vererbung

Die Herausforderungen auf der Seite [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) sind:

### Vererbte Stile

- Herausforderung
  - : Ändern Sie Ihr Stylesheet so, dass nur die roten Buchstaben unterstrichen sind.
- Lösung

  - : Verschieben Sie die Anweisung für das Unterstreichen von der Regel für {{ HTMLElement("p") }} zur Regel für {{ HTMLElement("strong") }}. Die resultierende Datei sieht dann folgendermaßen aus:

    ```css
    p {
      color: blue;
    }
    strong {
      color: orange;
      text-decoration: underline;
    }
    ```

In späteren Abschnitten dieses Tutorials werden Stilregeln und Deklarationen ausführlicher beschrieben.

## Selektoren

Die Herausforderungen auf der Seite [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) sind:

### Zweiter Absatz blau

- Herausforderung
  - : Ändern Sie Ihre HTML-Datei nicht, sondern fügen Sie Ihrer CSS-Datei eine einzelne Regel hinzu, die dafür sorgt, dass alle Anfangsbuchstaben die gleiche Farbe behalten wie bisher, aber der gesamte restliche Text im zweiten Absatz blau wird.
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
  - : Ändern Sie die Regel, die Sie gerade hinzugefügt haben (ohne etwas anderes zu ändern), um auch den ersten Absatz blau zu machen.
- Lösung

  - : Ändern Sie den Selektor der neuen Regel zu einem Tag-Selektor mit `p`:

    ```css
    p {
      color: blue;
    }
    ```

Die Regeln für die anderen Farben haben alle spezifischere Selektoren, daher überschreiben sie das Blau im Absatz.

## Lesbares CSS

### Auskommentieren einer Regel

- Herausforderung
  - : Kommentieren Sie einen Teil Ihres Stylesheets aus, ohne etwas anderes zu ändern, um den allerersten Buchstaben Ihres Dokuments rot zu machen.
- Lösung

  - : Eine Möglichkeit, dies zu tun, ist, Kommentar-Begrenzer um die Regel für `.carrot` zu setzen:

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
  - : Ändern Sie nichts anderes, und machen Sie alle sechs Anfangsbuchstaben doppelt so groß in der Standard-Schrift Ihres Browsers.
- Lösung

  - : Fügen Sie der Regel für `strong` die folgende Stil-Deklaration hinzu:

    ```css
    font: 200% serif;
    ```

  Verwenden Sie separate Deklarationen für `font-size` und `font-family`, dann wird die `font-style`-Einstellung im ersten Absatz _nicht_ überschrieben.

## Farbe

### Drei-stellige Farbcodes

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
  - : Fügen Sie Ihrer Stylesheet eine Regel hinzu, die das Bild am Anfang jeder Zeile anzeigt.
- Lösung

  - : Fügen Sie diese Regel Ihrer Stylesheet hinzu:

    ```css
    p::before {
      content: url("yellow-pin.png");
    }
    ```

## Listen

Die Herausforderungen auf der Seite [Stilisierung von Listen](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists) sind:

### Römische Kleinbuchstaben

- Herausforderung
  - : Fügen Sie Ihrer Stylesheet eine Regel hinzu, um die Ozeane mit römischen Zahlen von i bis v zu nummerieren.
- Lösung

  - : Definieren Sie eine Regel für Listenelemente, um den Listentyp `lower-roman` zu verwenden:

    ```css
    li {
      list-style: lower-roman;
    }
    ```

### Großbuchstaben

- Herausforderung
  - : Ändern Sie Ihr Stylesheet, um die Überschriften mit Großbuchstaben in Klammern zu identifizieren.
- Lösung

  - : Fügen Sie dem body-Element (Eltern der Überschriften) eine Regel hinzu, um einen neuen Zähler zurückzusetzen, und eine Regel, um den Zähler auf den Überschriften anzuzeigen und zu inkrementieren:

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
  - : Fügen Sie Ihrer Stylesheet eine Regel hinzu, die für die Ozeane einen breiten Rand in einer Farbe macht, die Sie an das Meer erinnert.
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

### Standardbildposition

### Feste Bildposition

- Herausforderung
  - : Ändern Sie Ihr Beispieldokument, `doc2.html`, indem Sie diese Markierung vor `</BODY>` hinzufügen: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">`. Vermuten Sie, wo das Bild in Ihrem Dokument erscheinen wird. Aktualisieren Sie dann Ihren Browser, um zu sehen, ob Sie richtig lagen.
- Lösung
  - : Das Bild erscheint rechts von der zweiten Liste.
    ![Eine Liste von fünf Platzhaltern ist mit "Nummerierte Absätze" betitelt. Ein gelber Pin befindet sich rechts von einem blauen Kasten, der die Liste enthält.](pin_placement.png)
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

### Nur Rahmen um Datenzellen

- Herausforderung
  - : Ändern Sie das Stylesheet, um der Tabelle einen grünen Rahmen nur um die Datenzellen zu geben.
- Lösung

  - : Die folgende Regel setzt Rahmen nur um die {{ HTMLElement("td") }}-Elemente, die sich im {{ HTMLElement("tbody") }}-Element der Tabelle mit `id=demo-table` befinden:

    ```css
    #demo-table tbody td {
      border: 1px solid #7a7;
    }
    ```

## Medien

Die Herausforderungen auf der Seite [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sind:

### Separates Druckstil-Datei

- Herausforderung
  - : Verschieben Sie die druckspezifischen Stile zu einer separaten CSS-Datei und importieren Sie sie in Ihr `style4.css`-Stylesheet.
- Lösung

  - : Schneiden Sie die Zeilen zwischen `/* print only */` und `/* end print only */` aus und fügen Sie sie in eine Datei namens `style4_print.css` ein. Fügen Sie in style4.css am Anfang der Datei die folgende Zeile hinzu:

    ```css
    @import url("style4_print.css") print;
    ```

### Überschrift-Schwebefarbe

- Herausforderung
  - : Lassen Sie die Überschriften blau werden, wenn der Mauszeiger darüber ist.
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
  - : Ändern Sie das Skript so, dass das Quadrat um 20 em nach rechts springt, wenn sich seine Farbe ändert, und danach zurückspringt.
- Lösung

  - : Fügen Sie Zeilen hinzu, um die `margin-left`-Eigenschaft zu ändern. Stellen Sie sicher, dass Sie es in JavaScript als `marginLeft` spezifizieren. Das folgende Skript erzielt das gewünschte Ergebnis:

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
  - : Ändern Sie das Stylesheet, sodass alle inneren Blütenblätter rosa werden, wenn der Mauszeiger über einem von ihnen ist, ohne die Funktionsweise der äußeren Blütenblätter zu ändern.
- Lösung

  - : Verschieben Sie die Position der :hover-Pseudoklasse von einem spezifischen Blütenblatt auf alle Blütenblätter

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
