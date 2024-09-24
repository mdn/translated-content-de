---
title: Verwenden dynamischer Styling-Informationen
slug: Web/API/CSS_Object_Model/Using_dynamic_styling_information
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("CSSOM")}}

Das CSS Object Model (CSSOM), Teil des DOM, stellt spezifische Schnittstellen bereit, die die Manipulation einer Vielzahl von Informationen über CSS ermöglichen. Ursprünglich in der Empfehlung _DOM Level 2 Style_ definiert, bilden diese Schnittstellen jetzt eine Spezifikation, _CSS Object Model (CSSOM)_, die es ablösen soll.

In vielen Fällen, und wo immer möglich, ist es gängige Praxis, Klassen dynamisch über die {{ domxref("element.className", "className") }}-Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Stil-Hooks in einem einzigen Stylesheet kontrolliert werden kann. Der JavaScript-Code wird ebenfalls sauberer, da er sich statt auf Stil-Details den übergeordneten Semantiken der Abschnitte widmen kann, die er erstellt oder manipuliert, und die genauen Stil-Details dem Stylesheet überlässt. Es gibt jedoch Fälle, in denen das tatsächliche Abrufen oder Manipulieren der Regeln nützlich sein kann (ob für ganze Stylesheets oder einzelne Elemente), und das wird weiter unten ausführlicher beschrieben. Beachten Sie auch, dass, wie bei den individuellen DOM-Stil-Elementen, wenn von der Manipulation der Stylesheets gesprochen wird, dies nicht die physische Veränderung des/der Dokumente(s) bedeutet, sondern lediglich die interne Darstellung des Dokuments.

Das grundlegende `style`-Objekt stellt die {{domxref("Stylesheet")}}- und die {{domxref("CSSStylesheet")}}-Schnittstellen bereit. Diese Schnittstellen enthalten Mitglieder wie `insertRule`, `selectorText` und `parentStyleSheet` für den Zugriff und die Manipulation der einzelnen Stilregeln, die ein CSS-Stylesheet ausmachen.

Um von `document` auf die `style`-Objekte zuzugreifen, können Sie die Eigenschaft {{domxref("Document.styleSheets")}} verwenden und auf die einzelnen Objekte per Index zugreifen (z.B. `document.styleSheets[0]` ist das erste für das Dokument definierte Stylesheet, etc.).

## Ein Stylesheet mit CSSOM ändern

In diesem Beispiel wird der Hintergrund der Seite mit CSS auf Rot gesetzt. Das JavaScript greift dann über das CSSOM auf die Eigenschaft zu und ändert den Hintergrund auf Blau.

```html
<html lang="en">
  <head>
    <title>Änderung einer Stylesheet-Regel mit CSSOM</title>
    <style>
      body {
        background-color: red;
      }
    </style>
    <script>
      const stylesheet = document.styleSheets[0];
      stylesheet.cssRules[0].style.backgroundColor = "aqua";
    </script>
  </head>
  <body>
    Die Stylesheet-Deklaration für die Hintergrundfarbe des Bodies wird über
    JavaScript geändert.
  </body>
</html>
```

### Ergebnis

{{EmbedGHLiveSample("css-examples/cssom/modify-rule.html", '100%', 120)}}

Die Liste der im DOM von der `style`-Eigenschaft verfügbaren Eigenschaften finden Sie auf der Seite [DOM CSS Properties List](/de/docs/Web/CSS/Reference).

Um einem Dokument über CSS-Syntax Stile hinzuzufügen, können Sie Regeln einfügen oder {{HTMLElement("style")}}-Tags einfügen, deren `innerHTML`-Eigenschaft auf das gewünschte CSS gesetzt ist.

## Den Stil eines Elements ändern

Die {{domxref("HTMLElement.style", "style")}}-Eigenschaft eines Elements (siehe auch Abschnitt "DOM-Stil-Objekt" unten) kann ebenfalls verwendet werden, um die Stile an einem Element zu erhalten und festzulegen. Diese Eigenschaft gibt jedoch nur Stilattributen zurück, die _in-line_ gesetzt wurden (z.B. `<td style="background-color: lightblue">` gibt die Zeichenkette "`background-color:lightblue`" zurück, oder direkt für dieses Element mithilfe von `element.style.propertyName`, auch wenn andere Stile aus einem Stylesheet auf dem Element vorhanden sein können).

Auch wenn Sie diese Eigenschaft an einem Element festlegen, überschreiben Sie alle Stile, die an anderer Stelle für die betreffende Eigenschaft dieses Elements festgelegt wurden. Das Setzen der `border`-Eigenschaft überschreibt beispielsweise Einstellungen, die andernorts für die `border`-Eigenschaft dieses Elements im Kopfbereich oder in externen Stylesheets vorgenommen wurden. Dies wirkt sich jedoch nicht auf andere Eigenschaftsdeklarationen für die Stile dieses Elements aus, wie z.B. Abstände oder Schriftarten.

Um den Stil eines bestimmten Elements zu ändern, können Sie das folgende Beispiel für das/die zu stilende(n) Element(e) anpassen.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Einfaches Stilbeispiel</title>

    <script>
      function alterStyle(elem) {
        elem.style.background = "green";
      }

      function resetStyle(elemId) {
        const elem = document.getElementById(elemId);
        elem.style.background = "white";
      }
    </script>
    <style>
      #p1 {
        border: solid blue 2px;
      }
    </style>
  </head>

  <body>
    <!-- übergibt eine Referenz zum Objekts des Elements als Parameter 'this'. -->
    <p id="p1" onclick="alterStyle(this);">
      Klicken Sie hier, um die Hintergrundfarbe zu ändern.
    </p>

    <!-- übergibt die 'p1'-ID eines anderen Elements, dessen Stil geändert werden soll. -->
    <button onclick="resetStyle('p1');">Hintergrundfarbe zurücksetzen</button>
  </body>
</html>
```

{{ EmbedLiveSample('Modify_an_elements_style') }}

Die Methode {{domxref("window.getComputedStyle", "getComputedStyle()")}} auf dem `document.defaultView`-Objekt gibt alle Stile zurück, die tatsächlich für ein Element berechnet wurden.

## DOM-Stil-Objekt

Das `style`-Objekt stellt eine einzelne Zeichenerklärung dar. Das Stilobjekt wird vom `document` oder von den Elementen abgerufen, auf die dieser Stil angewendet wird. Es repräsentiert die _in-line_ Stile auf einem bestimmten Element.

### Stil-Eigenschaften festlegen

Wichtiger als die beiden hier genannten Eigenschaften ist die Verwendung des `style`-Objekts, um einzelne Stileigenschaften eines Elements festzulegen:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Stil-Eigenschafts-Beispiel</title>
    <link rel="StyleSheet" href="example.css" />
    <script>
      function setStyle() {
        document.getElementById("d").style.color = "orange";
      }
      function resetStyle() {
        document.getElementById("d").style.color = "black";
      }
    </script>
  </head>

  <body>
    <div id="d" class="thunder">Donner</div>
    <button onclick="setStyle()">Klicken Sie hier, um die Textfarbe zu ändern</button>
    <button onclick="resetStyle()">Textfarbe zurücksetzen</button>
  </body>
</html>
```

{{ EmbedLiveSample('Setting_style_properties') }}

Das **medium** und der **type** des Stils können angegeben werden, müssen es aber nicht.

### Verwendung der setAttribute-Methode

Beachten Sie, dass Sie den Stil eines Elements auch ändern können, indem Sie eine Referenz darauf erhalten und dann die Methode [`setAttribute`](/de/docs/Web/API/Element/setAttribute) verwenden, um die CSS-Eigenschaft und deren Wert anzugeben.

```js
const el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");
```

Seien Sie sich jedoch bewusst, dass `setAttribute` alle anderen `style`-Eigenschaften entfernt, die möglicherweise bereits im `style`-Objekt des Elements definiert wurden. Wenn das `some-element`-Element oben beispielsweise ein in--line `style`-Attribut mit beispielsweise `style="font-size: 18px"` hätte, würde dieser Wert durch die Verwendung von `setAttribute` entfernt werden.
