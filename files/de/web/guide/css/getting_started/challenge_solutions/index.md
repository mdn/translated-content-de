---
title: Lösungen für die Herausforderungen
slug: Web/Guide/CSS/Getting_started/Challenge_solutions
l10n:
  sourceCommit: 5f4dc8ee228442ddf6831f5f4b8ffe37e5f2beb3
---

Diese Seite bietet Lösungen für die Herausforderungen, die im [CSS Getting Started](/de/docs/Learn/CSS/First_steps) Tutorial gestellt werden. Dies sind nicht die einzigen möglichen Lösungen. Die folgenden Abschnitte entsprechen den Titeln der Tutorial-Abschnitte.

## Warum CSS verwenden

Die Herausforderungen auf der Seite [Warum CSS verwenden](/de/docs/Learn/CSS/First_steps/How_CSS_works) sind:

### Farben

- Herausforderung
  - : Finden Sie ohne Nachschlagen von Referenzen fünf weitere Farbnamen, die in Ihrem Stylesheet funktionieren.
- Lösung
  - : CSS unterstützt gebräuchliche Farbnamen wie `orange`, `yellow`, `blue`, `green` oder `black`. Es unterstützt auch einige exotischere Farbnamen wie `chartreuse`, `fuschia` oder `burlywood`. Eine vollständige Liste sowie andere Möglichkeiten zur Farbangabe finden Sie unter [CSS Color value](/de/docs/Web/CSS/color_value).

## Wie CSS funktioniert

Die Herausforderungen auf der Seite [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works) sind:

### DOM-Inspektor

- Herausforderung
  - : Klicken Sie im DOMi auf einen STRONG-Knoten. Verwenden Sie die rechte Seitenleiste von DOMi, um herauszufinden, wo die Farbe des Knotens auf Rot gesetzt ist und wo sein Erscheinungsbild fetter als normaler Text gemacht wird.
- Lösung
  - : Wählen Sie im Menü über der rechten Seitenleiste **CSS-Regeln**. Sie sehen zwei Einträge, einen, der auf eine interne Ressource verweist, und einen, der auf Ihre Stylesheet-Datei verweist. Die interne Ressource definiert die **font-weight** Eigenschaft als `bolder`; Ihr Stylesheet definiert die **color** Eigenschaft als `red`.

## Kaskadierung und Vererbung

Die Herausforderungen auf der Seite [Kaskadierung und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) sind:

### Geerbte Stile

- Herausforderung
  - : Ändern Sie Ihr Stylesheet so, dass nur die roten Buchstaben unterstrichen sind.
- Lösung

  - : Verschieben Sie die Deklaration für das Unterstreichen von der Regel für {{ HTMLElement("p") }} zur Regel für {{ HTMLElement("strong") }}. Die resultierende Datei sieht so aus:

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

Die Herausforderungen auf der Seite [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) sind:

### Zweiter Absatz blau

- Herausforderung
  - : Fügen Sie eine einzige Regel zu Ihrer CSS-Datei hinzu, ohne Ihre HTML-Datei zu ändern, die alle Anfangsbuchstaben in ihrer aktuellen Farbe belässt, aber den restlichen Text im zweiten Absatz blau macht.
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
  - : Ändern Sie die gerade hinzugefügte Regel (ohne etwas anderes zu ändern), um auch den ersten Absatz blau zu machen.
- Lösung

  - : Ändern Sie den Selektor der neuen Regel zu einem Tag-Selektor, der `p` verwendet:

    ```css
    p {
      color: blue;
    }
    ```

Die Regeln für die anderen Farben haben alle spezifischere Selektoren, daher übersteuern sie das Blau des Absatzes.

## Lesbare CSS

### Eine Regel auskommentieren

- Herausforderung
  - : Kommentieren Sie einen Teil Ihres Stylesheets aus, ohne etwas anderes zu ändern, damit der allererste Buchstabe Ihres Dokuments rot ist.
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
  - : Machen Sie alle sechs Anfangsbuchstaben, ohne etwas anderes zu ändern, doppelt so groß im standardmäßig serifenlosen Schriftstil des Browsers.
- Lösung

  - : Fügen Sie die folgende Stil-Deklaration zur `strong`-Regel hinzu:

    ```css
    font: 200% serif;
    ```

    Wenn Sie separate Deklarationen für `font-size` und `font-family` verwenden, dann wird die `font-style` Einstellung im ersten Absatz _nicht_ überschrieben.

## Farbe

### Dreistellige Farbcode

- Herausforderung
  - : Ändern Sie in Ihrer CSS-Datei alle Farbnamen in dreistellige Farbcodes, ohne das Ergebnis zu beeinflussen.
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

### Bild hinzufügen

- Herausforderung
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, sodass das Bild am Anfang jeder Zeile angezeigt wird.
- Lösung

  - : Fügen Sie diese Regel zu Ihrem Stylesheet hinzu:

    ```css
    p::before {
      content: url("yellow-pin.png");
    }
    ```

## Listen

Die Herausforderungen auf der Seite [Listen](/de/docs/Learn/CSS/Styling_text/Styling_lists) sind:

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

  - : Fügen Sie eine Regel zum Body-Element (Eltern der Überschriften) hinzu, um einen neuen Zähler zurückzusetzen, und eine, um den Zähler auf den Überschriften anzuzeigen und zu inkrementieren:

    ```css
    /* nummerierte Überschriften */
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

### Ozean-Rand

- Herausforderung
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, die einen breiten Rand in einer Farbe, die Sie an das Meer erinnert, um die Ozeane legt.
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
  - : Ändern Sie Ihr Beispiel-Dokument, `doc2.html`, indem Sie diesen Tag am Ende, direkt vor `</BODY>` hinzufügen: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">` Vorhersehen, wo das Bild in Ihrem Dokument erscheinen wird. Aktualisieren Sie anschließend Ihren Browser, um zu sehen, ob Sie richtig lagen.
- Lösung
  - : Das Bild erscheint rechts neben der zweiten Liste.
    ![Eine Liste von fünf Platzhaltertexten ist mit Nummerierte Absätze betitelt. Ein gelber Pin ist rechts von einem blauen Kasten, der die Liste enthält, platziert.](pin_placement.png)
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

Die Herausforderungen auf der Seite [Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables) sind:

### Ränder nur auf Datenelemente

- Herausforderung
  - : Ändern Sie das Stylesheet so, dass die Tabelle nur grüne Ränder um die Datenelemente hat.
- Lösung

  - : Die folgende Regel setzt Ränder nur um {{ HTMLElement("td") }} Elemente, die sich innerhalb des {{ HTMLElement("tbody") }} Elements der Tabelle mit `id=demo-table` befinden:

    ```css
    #demo-table tbody td {
      border: 1px solid #7a7;
    }
    ```

## Medien

Die Herausforderungen auf der Seite [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sind:

### Separates Druckstil-Dokument

- Herausforderung
  - : Bewegen Sie die druckspezifischen Stilregeln in eine separate CSS-Datei und importieren Sie sie in Ihr `style4.css` Stylesheet.
- Lösung

  - : Schneiden Sie die Zeilen zwischen `/* print only */` und `/* end print only */` aus und fügen Sie sie in eine Datei namens `style4_print.css`. In style4.css, fügen Sie die folgende Zeile am Anfang der Datei hinzu:

    ```css
    @import url("style4_print.css") print;
    ```

### Überschrift Hover-Farbe

- Herausforderung
  - : Machen Sie die Überschriften blau, wenn der Mauszeiger darüber ist.
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
  - : Ändern Sie das Skript so, dass das Quadrat um 20 em nach rechts springt, wenn sich dessen Farbe ändert, und danach wieder zurückspringt.
- Lösung

  - : Fügen Sie Zeilen hinzu, um die `margin-left` Eigenschaft zu ändern. Achten Sie darauf, sie in JavaScript als `marginLeft` zu spezifizieren. Das folgende Skript erzielt das gewünschte Ergebnis:

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
  - : Ändern Sie das Stylesheet so, dass sich die inneren Blütenblätter alle rosa färben, wenn der Mauszeiger über einem von ihnen ist, ohne die Art und Weise zu ändern, wie die äußeren Blütenblätter funktionieren.
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
