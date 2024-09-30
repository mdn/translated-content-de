---
title: Lösungen für die Herausforderungen
slug: Web/Guide/CSS/Getting_started/Challenge_solutions
l10n:
  sourceCommit: 5f4dc8ee228442ddf6831f5f4b8ffe37e5f2beb3
---

Diese Seite bietet Lösungen für die Herausforderungen, die im [CSS Getting Started](/de/docs/Learn/CSS/First_steps) Tutorial gestellt wurden. Diese sind nicht die einzigen möglichen Lösungen. Die folgenden Abschnitte entsprechen den Titeln der Tutorialabschnitte.

## Warum CSS verwenden

Die Herausforderungen auf der Seite [Warum CSS verwenden](/de/docs/Learn/CSS/First_steps/How_CSS_works) sind:

### Farben

- Herausforderung
  - : Finden Sie ohne Nachschlagen von Referenzen fünf weitere Farbnamen, die in Ihrem Stylesheet funktionieren.
- Lösung
  - : CSS unterstützt gängige Farbnamen wie `orange`, `yellow`, `blue`, `green` oder `black`. Es unterstützt auch einige exotischere Farbnamen wie `chartreuse`, `fuschia` oder `burlywood`. Eine vollständige Liste sowie andere Möglichkeiten zur Farbspezifikation finden Sie unter [CSS Color value](/de/docs/Web/CSS/color_value).

## Wie CSS funktioniert

Die Herausforderungen auf der Seite [Wie CSS funktioniert](/de/docs/Learn/CSS/First_steps/How_CSS_works) sind:

### DOM-Inspektor

- Herausforderung
  - : Klicken Sie in DOMi auf einen STRONG-Knoten. Verwenden Sie das rechte Fenster in DOMi, um herauszufinden, wo die Farbe des Knotens auf Rot gesetzt ist und wo sein Erscheinungsbild fettgedruckter als normaler Text wird.
- Lösung
  - : Wählen Sie im Menü über dem rechten Fenster **CSS Rules**. Sie sehen zwei Elemente aufgelistet, eines, das auf eine interne Ressource verweist, und eines, das auf Ihre Stylesheet-Datei verweist. Die interne Ressource definiert die **font-weight** Eigenschaft als `bolder`; Ihr Stylesheet definiert die **color** Eigenschaft als `red`.

## Kaskadierung und Vererbung

Die Herausforderungen auf der Seite [Kaskadierung und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) sind:

### Vererbte Stile

- Herausforderung
  - : Ändern Sie Ihr Stylesheet, sodass nur die roten Buchstaben unterstrichen sind.
- Lösung

  - : Verschieben Sie die Deklaration für Unterstreichungen von der Regel für {{ HTMLElement("p") }} zu der für {{ HTMLElement("strong") }}. Die resultierende Datei sieht so aus:

    ```css
    p {
      color: blue;
    }
    strong {
      color: orange;
      text-decoration: underline;
    }
    ```

In späteren Abschnitten dieses Tutorials werden Stilregeln und -deklarationen ausführlicher beschrieben.

## Selektoren

Die Herausforderungen auf der Seite [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) sind:

### Zweiter Absatz blau

- Herausforderung
  - : Fügen Sie ohne Änderung Ihrer HTML-Datei eine einzelne Regel in Ihre CSS-Datei ein, die alle Anfangsbuchstaben in ihrer aktuellen Farbe belässt, aber den restlichen Text im zweiten Absatz blau macht.
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
  - : Ändern Sie jetzt die zuvor hinzugefügte Regel (ohne weitere Änderungen), um den ersten Absatz ebenfalls blau zu machen.
- Lösung

  - : Ändern Sie den Selektor der neuen Regel zu einem Tag-Selektor mit `p`:

    ```css
    p {
      color: blue;
    }
    ```

Die Regeln für die anderen Farben haben alle spezifischere Selektoren, sodass sie das Blau des Absatzes überschreiben.

## Lesbares CSS

### Eine Regel auskommentieren

- Herausforderung
  - : Kommentieren Sie einen Teil Ihres Stylesheets aus, ohne weitere Änderungen, um den allerersten Buchstaben Ihres Dokuments rot zu machen.
- Lösung

  - : Eine Möglichkeit, dies zu tun, besteht darin, Kommentarzeichen um die Regel für `.carrot` zu setzen:

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
  - : Machen Sie ohne weitere Änderungen alle sechs Anfangsbuchstaben in der doppelten Größe der Standardschriftart des Browsers.
- Lösung

  - : Fügen Sie der `strong` Regel die folgende Stil-Deklaration hinzu:

    ```css
    font: 200% serif;
    ```

    Wenn Sie separate Deklarationen für `font-size` und `font-family` verwenden, wird die `font-style` Einstellung im ersten Absatz _nicht_ überschrieben.

## Farben

### Dreistellige Farbcodes

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

### Ein Bild hinzufügen

- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, damit das Bild am Anfang jeder Zeile angezeigt wird.
- Lösung

  - : Fügen Sie Ihrem Stylesheet diese Regel hinzu:

    ```css
    p::before {
      content: url("yellow-pin.png");
    }
    ```

## Listen

Die Herausforderungen auf der Seite [Listen](/de/docs/Learn/CSS/Styling_text/Styling_lists) sind:

### Kleinbuchstabige römische Zahlen

- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, um die Ozeane mit römischen Zahlen von i bis v zu nummerieren.
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

  - : Fügen Sie dem Body-Element (Eltern der Überschriften) eine Regel hinzu, um einen neuen Zähler zurückzusetzen, und eine, um den Zähler auf den Überschriften anzuzeigen und zu erhöhen:

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
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, die einen breiten Rand um die Ozeane herum in einer Farbe, die Sie an das Meer erinnert, erstellt.
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

### Fixierte Bildposition

- Herausforderung
  - : Ändern Sie Ihr Beispieldokument `doc2.html`, indem Sie dieses Tag am Ende, kurz vor `</BODY>`, einfügen: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">` Sagen Sie voraus, wo das Bild in Ihrem Dokument erscheinen wird. Aktualisieren Sie dann Ihren Browser, um zu sehen, ob Sie recht hatten.
- Lösung
  - : Das Bild erscheint rechts von der zweiten Liste.
    ![Eine Liste von fünf Platzhaltertexten trägt den Titel Nummerierte Absätze. Ein gelber Pin wird rechts von einem blauen Kasten mit der Liste platziert.](pin_placement.png)
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

### Nur Rahmen um Datenzellen

- Herausforderung
  - : Ändern Sie das Stylesheet so, dass die Tabelle nur um die Datenzellen einen grünen Rahmen hat.
- Lösung

  - : Die folgende Regel setzt Rahmen nur um {{ HTMLElement("td") }}-Elemente, die sich innerhalb des {{ HTMLElement("tbody") }}-Elements der Tabelle mit `id=demo-table` befinden:

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

  - : Schneiden Sie die Zeilen zwischen `/* print only */` und `/* end print only */` aus und fügen Sie sie in eine Datei namens `style4_print.css` ein. Fügen Sie in style4.css die folgende Zeile am Anfang der Datei hinzu:

    ```css
    @import url("style4_print.css") print;
    ```

### Hover-Farbe für Überschriften

- Herausforderung
  - : Machen Sie die Überschriften blau, wenn der Mauszeiger darüber ist.
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
  - : Ändern Sie das Skript, sodass das Quadrat nach rechts um 20 em springt, wenn sich seine Farbe ändert, und danach wieder zurückspringt.
- Lösung

  - : Fügen Sie Zeilen hinzu, um die `margin-left` Eigenschaft zu ändern. Achten Sie darauf, sie in JavaScript als `marginLeft` zu spezifizieren. Das folgende Skript erreicht das gewünschte Ergebnis:

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
  - : Ändern Sie das Stylesheet, sodass sich die inneren Blütenblätter alle rosa färben, wenn der Mauszeiger über einem von ihnen ist, ohne das Verhalten der äußeren Blütenblätter zu ändern.
- Lösung

  - : Verschieben Sie die Position der :hover Pseudo-Klasse von einem spezifischen Blütenblatt zu allen Blütenblättern

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
