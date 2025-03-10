---
title: Lösungsansätze für Herausforderungen
slug: Learn_web_development/Core/Challenges
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{LearnSidebar}}

Diese Seite bietet Lösungen zu den Herausforderungen im Modul [CSS Styling Basics](/de/docs/Learn_web_development/Core/Styling_basics). Dies sind nicht die einzigen möglichen Lösungen. Die unten stehenden Abschnitte entsprechen den Titeln der Tutorial-Abschnitte.

## Kaskadierung und Vererbung

Die Herausforderungen auf der Seite [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) sind:

### Vererbte Stile

- Herausforderung
  - : Ändern Sie Ihr Stylesheet so, dass nur die roten Buchstaben unterstrichen sind.
- Lösung

  - : Verschieben Sie die Deklaration für Unterstreichungen von der Regel für {{ HTMLElement("p") }} zur Regel für {{ HTMLElement("strong") }}. Die resultierende Datei sieht wie folgt aus:

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

### Zweiter Absatz in Blau

- Herausforderung
  - : Ohne Ihre HTML-Datei zu ändern, fügen Sie eine einzige Regel zu Ihrer CSS-Datei hinzu, die die Anfangsbuchstaben in ihrer aktuellen Farbe belässt, aber den restlichen Text im zweiten Absatz blau einfärbt.
- Lösung

  - : Fügen Sie eine Regel mit einem ID-Selektor `#second` und einer Deklaration `color: blue;` hinzu, wie unten gezeigt:

    ```css
    #second {
      color: blue;
    }
    ```

    Ein spezifischerer Selektor, `p#second`, funktioniert ebenfalls.

### Beide Absätze in Blau

- Herausforderung
  - : Ändern Sie nun die Regel, die Sie gerade hinzugefügt haben (ohne sonst etwas zu ändern), um auch den ersten Absatz blau zu machen.
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
  - : Kommentieren Sie einen Teil Ihres Stylesheets aus, ohne sonst etwas zu ändern, um den allerersten Buchstaben Ihres Dokuments rot zu machen.
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
  - : Ohne etwas anderes zu ändern, machen Sie alle sechs Anfangsbuchstaben doppelt so groß in der Standard-Serifenschrift des Browsers.
- Lösung

  - : Fügen Sie die folgende Stil-Deklaration zur `strong`-Regel hinzu:

    ```css
    font: 200% serif;
    ```

    Wenn Sie separate Deklarationen für `font-size` und `font-family` verwenden, wird die `font-style`-Einstellung im ersten Absatz _nicht_ überschrieben.

## Farbe

### Drei-stellige Farb-Codes

- Herausforderung
  - : Ändern Sie in Ihrer CSS-Datei alle Farbnamen in 3-stellige Farb-Codes, ohne das Ergebnis zu beeinflussen.
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

Die Herausforderungen auf dieser Seite sind:

### Ein Bild hinzufügen

- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, damit das Bild am Anfang jeder Zeile angezeigt wird.
- Lösung

  - : Fügen Sie diese Regel zu Ihrem Stylesheet hinzu:

    ```css
    p::before {
      content: url("yellow-pin.png");
    }
    ```

## Listen

Die Herausforderungen auf der Seite [Listen stylen](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists) sind:

### Niedere römische Ziffern

- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, um die Ozeane mit römischen Ziffern von i bis v zu nummerieren.
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

  - : Fügen Sie dem Body-Element (Elternelement der Überschriften) eine Regel hinzu, um einen neuen Zähler zurückzusetzen, und eine Regel, um den Zähler bei den Überschriften anzuzeigen und inkrementieren:

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
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, die einen breiten Rand um die Ozeane in einer Farbe mach, die Sie an das Meer erinnert.
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

### Standardschriftposition

### Feste Bildposition

- Herausforderung
  - : Ändern Sie Ihr Beispieldokument, `doc2.html`, indem Sie dieses Tag in der Nähe des Endes, direkt vor `</BODY>`, hinzufügen: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">`. Vorhersagen Sie, wo das Bild in Ihrem Dokument angezeigt wird. Aktualisieren Sie dann Ihren Browser, um zu sehen, ob Sie richtig waren.
- Lösung
  - : Das Bild erscheint rechts von der zweiten Liste.
    ![Eine Liste von fünf Platzhaltertexten ist mit Nummerierte Absätze betitelt. Ein gelber Pin ist rechts von einem blauen Kasten mit der Liste platziert.](pin_placement.png)
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

### Ränder nur auf Datenzellen

- Herausforderung
  - : Ändern Sie das Stylesheet, damit die Tabelle nur um die Datenzellen einen grünen Rand hat.
- Lösung

  - : Die folgende Regel setzt Ränder nur um {{ HTMLElement("td") }}-Elemente, die sich im {{ HTMLElement("tbody") }}-Element der Tabelle mit `id=demo-table` befinden:

    ```css
    #demo-table tbody td {
      border: 1px solid #7a7;
    }
    ```

## Medien

Die Herausforderungen auf der Seite [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sind:

### Separate Druckstil-Datei

- Herausforderung
  - : Verschieben Sie die druckspezifischen Stilregeln in eine separate CSS-Datei und importieren Sie sie in Ihr `style4.css`-Stylesheet.
- Lösung

  - : Schneiden Sie die Zeilen zwischen `/* print only */` und `/* end print only */` aus und fügen Sie sie in eine Datei mit dem Namen `style4_print.css` ein. Fügen Sie in style4.css folgende Zeile am Anfang der Datei hinzu:

    ```css
    @import url("style4_print.css") print;
    ```

### Hover-Farbe der Überschrift

- Herausforderung
  - : Sorgen Sie dafür, dass die Überschriften blau werden, wenn der Mauszeiger über ihnen ist.
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
  - : Ändern Sie das Skript so, dass das Quadrat um 20 em nach rechts springt, wenn sich die Farbe ändert, und danach wieder zurückspringt.
- Lösung

  - : Fügen Sie Zeilen hinzu, um die `margin-left`-Eigenschaft zu ändern. Geben Sie sicherheitshalber an, dass es `marginLeft` in JavaScript ist. Das folgende Skript erzielt das gewünschte Ergebnis:

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
  - : Ändern Sie das Stylesheet so, dass alle inneren Blütenblätter rosa werden, wenn der Mauszeiger über einem von ihnen ist, ohne die Art und Weise zu verändern, wie die äußeren Blütenblätter funktionieren.
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
