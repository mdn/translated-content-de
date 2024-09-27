---
title: Lösungen für die Herausforderungen
slug: Web/Guide/CSS/Getting_started/Challenge_solutions
l10n:
  sourceCommit: 5f4dc8ee228442ddf6831f5f4b8ffe37e5f2beb3
---

Diese Seite bietet Lösungen für die im Tutorial [CSS für Einsteiger](/de/docs/Learn/CSS/First_steps) gestellten Herausforderungen. Diese sind nicht die einzigen möglichen Lösungen. Die unten stehenden Abschnitte entsprechen den Titeln der Tutorialabschnitte.

## Warum CSS verwenden

Die Herausforderungen auf der Seite [Warum CSS verwenden](/de/docs/Learn/CSS/First_steps/How_CSS_works) sind:

### Farben

- Herausforderung
  - : Finden Sie, ohne nachzuschlagen, fünf weitere Farbnamen, die in Ihrem Stylesheet funktionieren.
- Lösung
  - : CSS unterstützt gängige Farbnamen wie `orange`, `yellow`, `blue`, `green` oder `black`. Es unterstützt auch einige exotischere Farbnamen wie `chartreuse`, `fuschia` oder `burlywood`. Siehe [CSS Farbwert](/de/docs/Web/CSS/color_value) für eine vollständige Liste sowie andere Möglichkeiten, Farben anzugeben.

## Wie CSS funktioniert

Die Herausforderungen auf der Seite [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works) sind:

### DOM-Inspektor

- Herausforderung
  - : Klicken Sie in DOMi auf einen STRONG-Knoten. Verwenden Sie das rechte Fenster von DOMi, um herauszufinden, wo die Farbe des Knotens auf Rot gesetzt ist und wo sein Erscheinungsbild dicker als normaler Text gemacht wurde.
- Lösung
  - : Wählen Sie im Menü über dem rechten Fenster **CSS-Regeln**. Sie sehen zwei Einträge, einer, der auf eine interne Ressource verweist, und einer, der auf Ihre Stylesheet-Datei verweist. Die interne Ressource definiert die Eigenschaft **font-weight** als `bolder`; Ihr Stylesheet definiert die Eigenschaft **color** als `red`.

## Kaskadierung und Vererbung

Die Herausforderungen auf der Seite [Kaskadierung und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) sind:

### Vererbte Styles

- Herausforderung
  - : Ändern Sie Ihr Stylesheet so, dass nur die roten Buchstaben unterstrichen sind.
- Lösung

  - : Verschieben Sie die Deklaration für das Unterstreichen von der Regel für {{ HTMLElement("p") }} zu der für {{ HTMLElement("strong") }}. Die resultierende Datei sieht folgendermaßen aus:

    ```css
    p {
      color: blue;
    }
    strong {
      color: orange;
      text-decoration: underline;
    }
    ```

Spätere Abschnitte dieses Tutorials beschreiben die Stilregeln und Deklarationen ausführlicher.

## Selektoren

Die Herausforderungen auf der Seite [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) sind:

### Zweiter Absatz blau

- Herausforderung
  - : Fügen Sie Ihrer CSS-Datei eine einzelne Regel hinzu, ohne Ihre HTML-Datei zu ändern, die alle Anfangsbuchstaben in derselben Farbe wie bisher lässt, aber den gesamten anderen Text im zweiten Absatz blau färbt.
- Lösung

  - : Fügen Sie eine Regel mit einem ID-Selektor von `#second` und einer Deklaration `color: blue;` wie unten gezeigt hinzu:

    ```css
    #second {
      color: blue;
    }
    ```

    Ein spezifischerer Selektor, `p#second` funktioniert ebenfalls.

### Beide Absätze blau

- Herausforderung
  - : Ändern Sie jetzt die Regel, die Sie gerade hinzugefügt haben (ohne sonst etwas zu ändern), damit auch der erste Absatz blau wird.
- Lösung

  - : Ändern Sie den Selektor der neuen Regel in einen Tag-Selektor, der `p` verwendet:

    ```css
    p {
      color: blue;
    }
    ```

Die Regeln für die anderen Farben haben alle spezifischere Selektoren, sodass sie das Blau des Absatzes übersteuern.

## Lesbare CSS

### Eine Regel auskommentieren

- Herausforderung
  - : Kommentieren Sie einen Teil Ihres Stylesheets aus, ohne sonst etwas zu ändern, um den allerersten Buchstaben Ihres Dokuments rot zu machen.
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
  - : Machen Sie, ohne sonst etwas zu ändern, alle sechs Anfangsbuchstaben doppelt so groß in der Standardschriftart des Browsers.
- Lösung

  - : Fügen Sie die folgende Stildeklaration zur `strong` Regel hinzu:

    ```css
    font: 200% serif;
    ```

    Wenn Sie separate Deklarationen für `font-size` und `font-family` verwenden, dann wird die `font-style`-Einstellung des ersten Absatzes _nicht_ übersteuert.

## Farbe

### Dreistellige Farb-Codes

- Herausforderung
  - : Ändern Sie in Ihrer CSS-Datei alle Farbennamen in dreistellige Farb-Codes, ohne das Ergebnis zu beeinflussen.
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
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, damit es das Bild am Anfang jeder Zeile anzeigt.
- Lösung

  - : Fügen Sie diese Regel zu Ihrem Stylesheet hinzu:

    ```css
    p::before {
      content: url("yellow-pin.png");
    }
    ```

## Listen

Die Herausforderungen auf der Seite [Listen](/de/docs/Learn/CSS/Styling_text/Styling_lists) sind:

### Römische Ziffern in Kleinbuchstaben

- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, um die Ozeane mit römischen Zahlen von i bis v zu nummerieren.
- Lösung

  - : Definieren Sie eine Regel für Listenelemente, um den `lower-roman`-Listenstil zu verwenden:

    ```css
    li {
      list-style: lower-roman;
    }
    ```

### Großbuchstaben

- Herausforderung
  - : Ändern Sie Ihr Stylesheet, um die Überschriften mit Großbuchstaben in Klammern zu kennzeichnen.
- Lösung

  - : Fügen Sie dem Body-Element (Eltern der Überschriften) eine Regel hinzu, um einen neuen Zähler zurückzusetzen, und eine, um den Zähler auf den Überschriften anzuzeigen und zu inkrementieren:

    ```css
    /* numbered headings */
    body {
      counter-reset: headnum;
    }
    h3::before {
      content: "(" counter(headnum, upper-latin) ") ";
      counter-increment: headnum;
    }
    ```

## Boxen

Die Herausforderungen auf der Seite [Boxen](/de/docs/Learn/CSS/Building_blocks) sind:

### Ozeanrand

- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, die einen breiten Rand um die Ozeane in einer Farbe macht, die Sie an das Meer erinnert.
- Lösung

  - : Die folgende Regel erreicht diesen Effekt:

    ```css
    ul {
      border: 10px solid lightblue;
      width: 100px;
    }
    ```

## Layout

Die Herausforderungen auf der Seite [Layout](/de/docs/Learn/CSS/CSS_layout) sind:

### Standardbildposition

### Feste Bildposition

- Herausforderung
  - : Ändern Sie Ihr Beispieldokument, `doc2.html`, indem Sie diesen Tag am Ende hinzufügen, direkt vor `</BODY>`: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">`. Prognostizieren Sie, wo das Bild in Ihrem Dokument erscheinen wird. Aktualisieren Sie dann Ihren Browser, um zu sehen, ob Sie richtig lagen.
- Lösung
  - : Das Bild erscheint rechts von der zweiten Liste.
    ![Eine Liste von fünf Platzhaltertexten trägt den Titel Nummerierte Absätze. Eine gelbe Stecknadel befindet sich rechts von einem blauen Feld mit der Liste.](pin_placement.png)
- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, die das Bild oben rechts in Ihrem Dokument platziert.
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

Die Herausforderungen auf der Seite [Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables) sind:

### Rahmen nur auf Datenzellen

- Herausforderung
  - : Ändern Sie das Stylesheet, damit die Tabelle nur einen grünen Rahmen um die Datenzellen hat.
- Lösung

  - : Die folgende Regel fügt Rahmen um nur {{ HTMLElement("td") }} Elemente, die sich im {{ HTMLElement("tbody") }} Element der Tabelle mit `id=demo-table` befinden:

    ```css
    #demo-table tbody td {
      border: 1px solid #7a7;
    }
    ```

## Medien

Die Herausforderungen auf der Seite [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sind:

### Separate Druckstil-Datei

- Herausforderung
  - : Verschieben Sie die druckspezifischen Stilregeln in eine separate CSS-Datei und importieren Sie sie in Ihr `style4.css` Stylesheet.
- Lösung

  - : Schneiden Sie die Zeilen zwischen `/* nur Drucken */` und `/* Ende nur Drucken */` aus und fügen Sie sie in eine Datei namens `style4_print.css` ein. Fügen Sie in style4.css die folgende Zeile am Anfang der Datei hinzu:

    ```css
    @import url("style4_print.css") print;
    ```

### Kopfzeilen-Farbe beim Hover

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

### Box nach rechts bewegen

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
  - : Ändern Sie das Stylesheet so, dass die inneren Blütenblätter alle rosa werden, wenn der Mauszeiger über eines von ihnen schwebt, ohne die Funktionsweise der äußeren Blütenblätter zu verändern.
- Lösung

  - : Verschieben Sie die Position der :hover-Pseudoklasse von einem spezifischen Blütenblatt zu allen Blütenblättern

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
