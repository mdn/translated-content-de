---
title: Lösungen zu den Herausforderungen
slug: Web/Guide/CSS/Getting_started/Challenge_solutions
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

Diese Seite bietet Lösungen zu den Herausforderungen, die im [CSS Getting Started](/de/docs/Learn/CSS/First_steps) Tutorial gestellt wurden. Dies sind nicht die einzigen möglichen Lösungen. Die untenstehenden Abschnitte entsprechen den Titeln der Tutorial-Abschnitte.

## Warum CSS verwenden

Die Herausforderungen auf der Seite [Warum CSS verwenden](/de/docs/Learn/CSS/First_steps/How_CSS_works) sind:

### Farben

- Herausforderung
  - : Finden Sie ohne Nachschlagen fünf weitere Farbnamen, die in Ihrem Stylesheet funktionieren.
- Lösung
  - : CSS unterstützt allgemeine Farbnamen wie `orange`, `yellow`, `blue`, `green` oder `black`. Es unterstützt auch einige exotischere Farbnamen wie `chartreuse`, `fuchsia` oder `burlywood`. Eine vollständige Liste sowie weitere Möglichkeiten zur Angabe von Farben finden Sie unter [CSS Color value](/de/docs/Web/CSS/color_value).

## Wie CSS funktioniert

Die Herausforderungen auf der Seite [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works) sind:

### DOM-Inspektor

- Herausforderung
  - : Klicken Sie im DOMi auf einen STRONG-Knoten. Nutzen Sie das rechte Fensterbereich von DOMi, um herauszufinden, wo die Farbe des Knotens auf Rot gesetzt ist und wo sein Erscheinungsbild stärker als normaler Text gemacht wird.
- Lösung
  - : Wählen Sie im Menü über dem rechten Fensterbereich **CSS Rules**. Sie sehen zwei Einträge, einen, der auf eine interne Ressource verweist und einen, der auf Ihre Stylesheet-Datei verweist. Die interne Ressource definiert die **font-weight**-Eigenschaft als `bolder`; Ihr Stylesheet definiert die **color**-Eigenschaft als `red`.

## Kaskadierung und Vererbung

Die Herausforderungen auf der Seite [Kaskadierung und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) sind:

### Vererbte Stile

- Herausforderung
  - : Ändern Sie Ihr Stylesheet so, dass nur die roten Buchstaben unterstrichen sind.
- Lösung

  - : Verschieben Sie die Definition für das Unterstreichen von der Regel für {{ HTMLElement("p") }} zur Regel für {{ HTMLElement("strong") }}. Die resultierende Datei sieht so aus:

    ```css
    p {
      color: blue;
    }
    strong {
      color: orange;
      text-decoration: underline;
    }
    ```

Später im Tutorial werden die Stilregeln und -deklarationen detaillierter beschrieben.

## Selektoren

Die Herausforderungen auf der Seite [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) sind:

### Zweiter Absatz blau

- Herausforderung
  - : Fügen Sie, ohne Ihre HTML-Datei zu ändern, eine einzige Regel zu Ihrer CSS-Datei hinzu, die alle Anfangsbuchstaben in ihrer aktuellen Farbe hält, aber den übrigen Text im zweiten Absatz blau macht.
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
  - : Ändern Sie nun die gerade hinzugefügte Regel (ohne etwas anderes zu ändern), um auch den ersten Absatz blau zu machen.
- Lösung

  - : Ändern Sie den Selektor der neuen Regel zu einem Tag-Selektor mit `p`:

    ```css
    p {
      color: blue;
    }
    ```

Die Regeln für die anderen Farben haben alle spezifischere Selektoren, sodass sie das Blau des Absatzes übersteuern.

## Lesbares CSS

### Auskommentieren einer Regel

- Herausforderung
  - : Kommentieren Sie einen Teil Ihres Stylesheets aus, ohne etwas anderes zu ändern, um den allerersten Buchstaben Ihres Dokuments rot zu machen.
- Lösung

  - : Eine Möglichkeit, dies zu tun, besteht darin, Kommentarbegrenzer um die Regel für `.carrot` zu setzen:

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
  - : Machen Sie alle sechs Anfangsbuchstaben ohne weitere Änderungen doppelt so groß in der Standardschriftart des Browsers.
- Lösung

  - : Fügen Sie der `strong`-Regel die folgende Stil-Deklaration hinzu:

    ```css
    font: 200% serif;
    ```

    Wenn Sie separate Deklarationen für `font-size` und `font-family` verwenden, wird die `font-style`-Einstellung des ersten Absatzes _nicht_ überschrieben.

## Farbe

### Drei-stellige Farbcodes

- Herausforderung
  - : Ändern Sie in Ihrer CSS-Datei alle Farbnamen in drei-stellige Farbcodes, ohne das Ergebnis zu beeinflussen.
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
  - : Fügen Sie Ihrer Stylesheet-Datei eine Regel hinzu, damit das Bild zu Beginn jeder Zeile angezeigt wird.
- Lösung

  - : Fügen Sie diese Regel zu Ihrer Stylesheet-Datei hinzu:

    ```css
    p::before {
      content: url("yellow-pin.png");
    }
    ```

## Listen

Die Herausforderungen auf der Seite [Listen](/de/docs/Learn/CSS/Styling_text/Styling_lists) sind:

### Kleine römische Ziffern

- Herausforderung
  - : Fügen Sie Ihrer Stylesheet-Datei eine Regel hinzu, um die Ozeane mit römischen Ziffern von i bis v zu nummerieren.
- Lösung

  - : Definieren Sie eine Regel für Listenelemente, um den `lower-roman` Listentyp zu verwenden:

    ```css
    li {
      list-style: lower-roman;
    }
    ```

### Großbuchstaben

- Herausforderung
  - : Ändern Sie Ihr Stylesheet, um die Überschriften mit Großbuchstaben in Klammern zu kennzeichnen.
- Lösung

  - : Fügen Sie dem `body`-Element (dem Elternteil der Überschriften) eine Regel hinzu, um einen neuen Zähler zurückzusetzen, und eine, um den Zähler bei den Überschriften anzuzeigen und zu erhöhen:

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

Die Herausforderungen auf der Seite [Boxen](/de/docs/Learn/CSS/Building_blocks) sind:

### Ozean-Rand

- Herausforderung
  - : Fügen Sie Ihrer Stylesheet-Datei eine Regel hinzu, die einen breiten Rand um die Ozeane in einer Farbe macht, die Sie an das Meer erinnert.
- Lösung

  - : Die folgende Regel erzielt diesen Effekt:

    ```css
    ul {
      border: 10px solid lightblue;
      width: 100px;
    }
    ```

## Layout

Die Herausforderungen auf der Seite [Layout](/de/docs/Learn/CSS/CSS_layout) sind:

### Standard-Bildposition

### Feste Bildposition

- Herausforderung
  - : Ändern Sie Ihr Beispieldokument, `doc2.html`, indem Sie am Ende, kurz vor `</BODY>`, diesen Tag hinzufügen: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">`. Prognostizieren Sie, wo das Bild in Ihrem Dokument erscheinen wird. Aktualisieren Sie dann Ihren Browser, um zu sehen, ob Sie richtig lagen.
- Lösung
  - : Das Bild erscheint rechts neben der zweiten Liste.
    ![Eine Liste von fünf Platzhaltertexten trägt den Titel Nummerierte Absätze. Ein gelber Pin befindet sich rechts von einem blauen Kasten, der die Liste enthält.](pin_placement.png)
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

Die Herausforderungen auf der Seite [Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables) sind:

### Nur Datenzellen umrandet

- Herausforderung
  - : Ändern Sie das Stylesheet, um der Tabelle eine grüne Umrandung nur um die Datenzellen zu geben.
- Lösung

  - : Die folgende Regel umrandet nur {{ HTMLElement("td") }}-Elemente, die sich innerhalb des {{ HTMLElement("tbody") }}-Elements der Tabelle mit `id=demo-table` befinden:

    ```css
    #demo-table tbody td {
      border: 1px solid #7a7;
    }
    ```

## Medien

Die Herausforderungen auf der Seite [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sind:

### Separate Drucker-Stildatei

- Herausforderung
  - : Verschieben Sie die druckspezifischen Stilregeln in eine separate CSS-Datei und importieren Sie sie in Ihr `style4.css` Stylesheet.
- Lösung

  - : Schneiden Sie die Zeilen zwischen `/* print only */` und `/* end print only */` aus und fügen Sie sie in eine Datei namens `style4_print.css` ein. Fügen Sie in style4.css die folgende Zeile am Anfang der Datei hinzu:

    ```css
    @import url("style4_print.css") print;
    ```

### Hover-Farbe für Überschriften

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

### Box nach rechts bewegen

- Herausforderung
  - : Ändern Sie das Skript so, dass das Quadrat um 20 em nach rechts springt, wenn seine Farbe sich ändert, und danach zurückspringt.
- Lösung

  - : Fügen Sie Zeilen hinzu, um die `margin-left`-Eigenschaft zu ändern. Stellen Sie sicher, dass Sie es in JavaScript als `marginLeft` angeben. Das folgende Skript erzielt das gewünschte Ergebnis:

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
  - : Ändern Sie das Stylesheet so, dass alle inneren Blütenblätter rosa werden, wenn der Mauszeiger über eines davon fährt, ohne die Funktionsweise der äußeren Blütenblätter zu ändern.
- Lösung

  - : Verschieben Sie die Position der :hover-Pseudoklasse von einem spezifischen Blütenblatt auf alle Blütenblätter.

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
