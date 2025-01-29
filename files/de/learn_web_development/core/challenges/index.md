---
title: Lösungen zu den Herausforderungen
slug: Learn_web_development/Core/Challenges
l10n:
  sourceCommit: de6055c2b1cb224d09fbce7c7ffc6b9a2f7a1097
---

Diese Seite bietet Lösungen zu den Herausforderungen, die im Modul [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) gestellt wurden. Dies sind nicht die einzigen möglichen Lösungen. Die folgenden Abschnitte entsprechen den Titeln der Tutorialabschnitte.

## Kaskadierung und Vererbung

Die Herausforderungen auf der Seite [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) sind:

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

Spätere Abschnitte dieses Tutorials beschreiben Stileinstellungen und Deklarationen ausführlicher.

## Selektoren

Die Herausforderungen auf der Seite [Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) sind:

### Zweiter Absatz blau

- Herausforderung
  - : Fügen Sie ohne Änderungen an Ihrer HTML-Datei eine Regel zu Ihrer CSS-Datei hinzu, die alle Anfangsbuchstaben in der gleichen Farbe lässt, diese aber im zweiten Absatz blau macht.
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
  - : Ändern Sie nun die Regel, die Sie gerade hinzugefügt haben (ohne etwas anderes zu ändern), um auch den ersten Absatz blau zu machen.
- Lösung

  - : Ändern Sie den Selektor der neuen Regel zu einem Tag-Selektor mit `p`:

    ```css
    p {
      color: blue;
    }
    ```

Die Regeln für die anderen Farben haben alle spezifischere Selektoren und überschreiben daher das Blau des Absatzes.

## Lesbares CSS

### Eine Regel auskommentieren

- Herausforderung
  - : Kommentieren Sie einen Teil Ihres Stylesheets aus, ohne etwas anderes zu ändern, um den allerersten Buchstaben Ihres Dokuments rot zu machen.
- Lösung

  - : Eine Möglichkeit dies zu tun, ist, Kommentarbegrenzer um die Regel für `.carrot` zu setzen:

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
  - : Machen Sie, ohne etwas anderes zu ändern, alle sechs Anfangsbuchstaben doppelt so groß im Standardschriftstil des Browsers.
- Lösung

  - : Fügen Sie der Regel `strong` die folgende Stildeklaration hinzu:

    ```css
    font: 200% serif;
    ```

    Wenn Sie separate Deklarationen für `font-size` und `font-family` verwenden, dann wird die `font-style`-Einstellung im ersten Absatz _nicht_ überschrieben.

## Farbe

### Drei-stellige Farbnummern

- Herausforderung
  - : Ändern Sie in Ihrer CSS-Datei alle Farbnamen zu dreistelligen Farbcodes, ohne das Ergebnis zu beeinflussen.
- Lösung

  - : Die folgenden Werte sind vernünftige Annäherungen der benannten Farben:

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
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, sodass das Bild am Anfang jeder Zeile angezeigt wird.
- Lösung

  - : Fügen Sie diese Regel zu Ihrem Stylesheet hinzu:

    ```css
    p::before {
      content: url("yellow-pin.png");
    }
    ```

## Listen

Die Herausforderungen auf der Seite [Listen stylen](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists) sind:

### Kleinbuchstaben römische Ziffern

- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, um die Meere mit römischen Ziffern von i bis v zu nummerieren.
- Lösung

  - : Definieren Sie eine Regel für Listenelemente, um den Listentyp `lower-roman` zu verwenden:

    ```css
    li {
      list-style: lower-roman;
    }
    ```

### Großbuchstaben

- Herausforderung
  - : Ändern Sie Ihr Stylesheet, um die Überschriften mit Großbuchstaben in Klammern zu kennzeichnen.
- Lösung

  - : Fügen Sie eine Regel zum Body-Element (Elternelement der Überschriften) hinzu, um einen neuen Zähler zurückzusetzen, und eine, um den Zähler auf den Überschriften anzuzeigen und zu inkrementieren:

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

### Meer-Rand

- Herausforderung
  - : Fügen Sie Ihrem Stylesheet eine Regel hinzu, die einen breiten Rand um die Meere in einer Farbe, die Sie an das Meer erinnert, erstellt.
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

### Standardbildposition

### Feste Bildposition

- Herausforderung
  - : Ändern Sie Ihr Beispieldokument, `doc2.html`, indem Sie diesen Tag am Ende, kurz vor `</BODY>`, hinzufügen: `<IMG id="fixed-pin" src="Yellow-pin.png" alt="Yellow map pin">`. Prognostizieren Sie, wo das Bild in Ihrem Dokument erscheint. Aktualisieren Sie dann Ihren Browser, um zu sehen, ob Sie richtig lagen.
- Lösung
  - : Das Bild erscheint rechts von der zweiten Liste.
    ![Eine Liste von fünf Platzhaltertexten ist mit Nummerierte Absätze betitelt. Ein gelber Pin ist rechts von einem blauen Kasten platziert, der die Liste enthält.](pin_placement.png)
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

Die Herausforderungen auf der Seite [Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables) sind:

### Begrenzungen nur auf Datensatz-Zellen

- Herausforderung
  - : Ändern Sie das Stylesheet, sodass die Tabelle nur um die Datenelementzellen einen grünen Rand hat.
- Lösung

  - : Die folgende Regel setzt Grenzen nur um {{ HTMLElement("td") }}-Elemente, die innerhalb des {{ HTMLElement("tbody") }}-Elements der Tabelle mit `id=demo-table` sind:

    ```css
    #demo-table tbody td {
      border: 1px solid #7a7;
    }
    ```

## Medien

Die Herausforderungen auf der Seite [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) sind:

### Separates Druckstildatei

- Herausforderung
  - : Verschieben Sie die druckspezifischen Stileinstellungen in eine separate CSS-Datei und importieren Sie sie in Ihr `style4.css`-Stylesheet.
- Lösung

  - : Schneiden Sie die Zeilen zwischen `/* print only */` und `/* end print only */` aus und fügen Sie sie in eine Datei namens `style4_print.css`. In style4.css, fügen Sie die folgende Zeile am Anfang der Datei hinzu:

    ```css
    @import url("style4_print.css") print;
    ```

### Farbänderung bei Überschriftshover

- Herausforderung
  - : Lassen Sie die Überschriften blau werden, wenn der Mauszeiger über ihnen schwebt.
- Lösung

  - : Die folgende Regel erreicht das gewünschte Ergebnis:

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

  - : Fügen Sie Zeilen hinzu, um die Eigenschaft `margin-left` zu ändern. Achten Sie darauf, sie als `marginLeft` in JavaScript anzugeben. Das folgende Skript erreicht das gewünschte Ergebnis:

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
  - : Ändern Sie das Stylesheet so, dass die inneren Blütenblätter, sobald der Mauszeiger über einem von ihnen schwebt, rosa werden, ohne die Funktionsweise der äußeren Blütenblätter zu ändern.
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
