---
title: Lösungen für Aufgaben
slug: Learn_web_development/Core/Challenges
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Diese Seite bietet Lösungen zu den in dem Modul [Grundlagen des CSS-Stylings](/de/docs/Learn_web_development/Core/Styling_basics) gestellten Aufgaben. Dies sind nicht die einzigen möglichen Lösungen. Die untenstehenden Abschnitte entsprechen den Titeln der Tutorialabschnitte.

## Kaskadierung und Vererbung

Die Aufgaben auf der Seite [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) sind:

### Vererbte Stile

- Aufgabe
  - : Ändern Sie Ihr Stylesheet so, dass nur die roten Buchstaben unterstrichen sind.
- Lösung
  - : Verschieben Sie die Deklaration für das Unterstreichen von der Regel für {{ HTMLElement("p") }} zu der für {{ HTMLElement("strong") }}. Die resultierende Datei sieht wie folgt aus:

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

Die Aufgaben auf der Seite [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) sind:

### Zweiter Absatz blau

- Aufgabe
  - : Fügen Sie eine einzige Regel zu Ihrer CSS-Datei hinzu, ohne die HTML-Datei zu ändern, die alle Anfangsbuchstaben in ihrer jetzigen Farbe lässt, aber den restlichen Text im zweiten Absatz blau macht.
- Lösung
  - : Fügen Sie eine Regel mit einem ID-Selektor von `#second` und einer Deklaration `color: blue;` hinzu:

    ```css
    #second {
      color: blue;
    }
    ```

    Ein spezifischerer Selektor, `p#second`, funktioniert ebenfalls.

### Beide Absätze blau

- Aufgabe
  - : Ändern Sie nun die Regel, die Sie gerade hinzugefügt haben (ohne sonst etwas zu verändern), damit auch der erste Absatz blau wird.
- Lösung
  - : Ändern Sie den Selektor der neuen Regel zu einem Tag-Selektor mit `p`:

    ```css
    p {
      color: blue;
    }
    ```

Die Regeln für die anderen Farben haben alle spezifischere Selektoren, sodass sie das Blau des Absatzes überschreiben.

## Lesbares CSS

### Eine Regel Auskommentieren

- Aufgabe
  - : Kommentieren Sie einen Teil Ihres Stylesheets aus, ohne sonst etwas zu ändern, um den allerersten Buchstaben Ihres Dokuments rot zu machen.
- Lösung
  - : Eine Möglichkeit, dies zu tun, besteht darin, die Regel für `.carrot` mit Kommentarzeichen zu versehen:

    ```css
    /*
    .carrot {
      color: orange;
    }
    */
    ```

## Textstile

### Große Anfangsbuchstaben

- Aufgabe
  - : Ohne etwas anderes zu ändern, machen Sie alle sechs Anfangsbuchstaben doppelt so groß in der serifen Schriftart des Browsers.
- Lösung
  - : Fügen Sie die folgende Stil-Deklaration zur `strong`-Regel hinzu:

    ```css
    font: 200% serif;
    ```

    Wenn Sie separate Deklarationen für `font-size` und `font-family` verwenden, dann wird die `font-style`-Einstellung des ersten Absatzes _nicht_ überschrieben.

## Farbe

### Drei-stellige Farbcodes

- Aufgabe
  - : Ändern Sie in Ihrer CSS-Datei alle Farbnamen zu 3-stelligen Farbcodes, ohne das Ergebnis zu beeinträchtigen.
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

Die Aufgaben auf der Seite sind:

### Ein Bild hinzufügen

- Aufgabe
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, damit das Bild am Anfang jeder Zeile angezeigt wird.
- Lösung
  - : Fügen Sie diese Regel Ihrem Stylesheet hinzu:

    ```css
    p::before {
      content: url("yellow-pin.png");
    }
    ```

## Listen

Die Aufgaben auf der Seite [Listen gestalten](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists) sind:

### Kleinbuchstabige römische Ziffern

- Aufgabe
  - : Fügen Sie eine Regel Ihrem Stylesheet hinzu, um die Ozeane mit römischen Ziffern von i bis v zu nummerieren.
- Lösung
  - : Definieren Sie eine Regel für Listenelemente, um den `lower-roman`-Listentyp zu verwenden:

    ```css
    li {
      list-style: lower-roman;
    }
    ```

### Großbuchstaben

- Aufgabe
  - : Ändern Sie Ihr Stylesheet, um die Überschriften mit Großbuchstaben in Klammern zu kennzeichnen.
- Lösung
  - : Fügen Sie eine Regel für das Body-Element (Elternteil der Überschriften) hinzu, um einen neuen Zähler zurückzusetzen, und eine, um den Zähler auf den Überschriften anzuzeigen und zu inkrementieren:

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

Die Aufgaben auf der Seite [Boxen](/de/docs/Learn_web_development/Core/CSS_layout) sind:

### Ozean-Rahmen

- Aufgabe
  - : Fügen Sie eine Regel zu Ihrem Stylesheet hinzu, die einen breiten Rahmen um die Ozeane in einer Farbe, die an das Meer erinnert, erstellt.
- Lösung
  - : Die folgende Regel erzielt diesen Effekt:

    ```css
    ul {
      border: 10px solid lightblue;
      width: 100px;
    }
    ```

## Layout

Die Aufgaben auf der Seite [Layout](/de/docs/Learn_web_development/Core/CSS_layout) sind:

### Standard-Bildposition

### Feste Bildposition

- Aufgabe
  - : Ändern Sie Ihr Beispieldokument, `doc2.html`, indem Sie dieses Tag am Ende hinzufügen, direkt vor `</BODY>`: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">`. Vorhersagen, wo das Bild in Ihrem Dokument erscheinen wird. Aktualisieren Sie dann Ihren Browser, um zu sehen, ob Sie richtig lagen.
- Lösung
  - : Das Bild erscheint rechts von der zweiten Liste. ![Eine Liste von fünf Platzhaltertexten ist mit Numerierten Absätzen betitelt. Eine gelbe Stecknadel ist rechts von einem blauen Kasten platziert, der die Liste enthält.](pin_placement.png)
- Aufgabe
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

Die Aufgaben auf der Seite [Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) sind:

### Rahmen nur für Datenelemente

- Aufgabe
  - : Ändern Sie das Stylesheet so, dass die Tabelle einen grünen Rahmen nur um die Datenelemente hat.
- Lösung
  - : Die folgende Regel setzt Rahmen nur um {{ HTMLElement("td") }}-Elemente, die sich im {{ HTMLElement("tbody") }}-Element der Tabelle mit `id=demo-table` befinden:

    ```css
    #demo-table tbody td {
      border: 1px solid #7a7;
    }
    ```

## Medien

Die Aufgaben auf der Seite [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sind:

### Separater Druckstil-Datei

- Aufgabe
  - : Verschieben Sie die druckspezifischen Stilregeln in eine separate CSS-Datei und importieren Sie sie in Ihr `style4.css`-Stylesheet.
- Lösung
  - : Schneiden Sie die Linien zwischen `/* print only */` und `/* end print only */` aus und fügen Sie sie in eine Datei namens `style4_print.css` ein. Fügen Sie in style4.css folgende Zeile am Anfang der Datei hinzu:

    ```css
    @import "style4_print.css" print;
    ```

### Überschrift Hover-Farbe

- Aufgabe
  - : Machen Sie die Überschriften, wenn sich der Mauszeiger über ihnen befindet, blau.
- Lösung
  - : Die folgende Regel erzielt das gewünschte Ergebnis:

    ```css
    h1:hover {
      color: blue;
    }
    ```

## JavaScript

### Box nach rechts verschieben

- Aufgabe
  - : Ändern Sie das Skript, damit das Quadrat nach rechts um 20 em springt, wenn sich seine Farbe ändert, und anschließend zurückspringt.
- Lösung
  - : Fügen Sie Zeilen hinzu, um die `margin-left`-Eigenschaft zu ändern. Stellen Sie sicher, dass Sie diese als `marginLeft` in JavaScript spezifizieren. Das folgende Skript erzielt das gewünschte Ergebnis:

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

- Aufgabe
  - : Ändern Sie das Stylesheet so, dass die inneren Blütenblätter alle rosa werden, wenn der Mauszeiger über einem von ihnen ist, ohne die Funktionsweise der äußeren Blütenblätter zu ändern.
- Lösung
  - : Verschieben Sie die Position der :hover-Pseudoklasse von einem spezifischen Blütenblatt zu allen Blütenblättern:

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
