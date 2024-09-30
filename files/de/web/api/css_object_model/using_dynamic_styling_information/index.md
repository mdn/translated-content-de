---
title: Verwendung dynamischer Stilinformationen
slug: Web/API/CSS_Object_Model/Using_dynamic_styling_information
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("CSSOM")}}

Das CSS Object Model (CSSOM), ein Teil des DOM, bietet spezifische Schnittstellen, die die Manipulation einer Vielzahl von Informationen im Hinblick auf CSS ermöglichen. Ursprünglich in der _DOM Level 2 Style_-Empfehlung definiert, bilden diese Schnittstellen jetzt eine Spezifikation, das _CSS Object Model (CSSOM)_, das darauf abzielt, diese zu übertreffen.

In vielen Fällen und wo immer möglich, ist es bewährte Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Stilvorlagen in einem einzigen Stylesheet kontrolliert werden kann. Der JavaScript-Code wird zudem sauberer, da er sich anstelle von Styling-Details auf die Semantik des jeweiligen Abschnitts konzentrieren kann, den er erstellt oder manipuliert, wobei die genauen Stil-Details dem Stylesheet überlassen werden. Es gibt jedoch Fälle, in denen das tatsächliche Erhalten oder Manipulieren der Regeln nützlich sein kann (sei es für ganze Stylesheets oder einzelne Elemente), was im Folgenden detaillierter beschrieben wird. Beachten Sie auch, dass es sich beim Manipulieren der Stylesheets, wie bei DOM-Stilen einzelner Elemente, nicht um eine Manipulation der physischen Dokumente handelt, sondern lediglich um die interne Darstellung des Dokuments.

Das grundlegende `style`-Objekt gibt die [`Stylesheet`](/de/docs/Web/API/Stylesheet)- und [`CSSStylesheet`](/de/docs/Web/API/CSSStylesheet)-Schnittstellen frei. Diese Schnittstellen enthalten Mitglieder wie `insertRule`, `selectorText` und `parentStyleSheet` zum Zugriff und zur Manipulation der einzelnen Stilregeln, die ein CSS-Stylesheet bilden.

Um von einem `document` zu den `style`-Objekten zu gelangen, können Sie die [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Eigenschaft verwenden und auf die einzelnen Objekte per Index zugreifen (z. B. `document.styleSheets[0]` ist das erste definierte Stylesheet für das Dokument usw.).

## Eine Stilregel mit CSSOM ändern

In diesem Beispiel wird der Hintergrund der Seite mit CSS auf rot gesetzt. Das JavaScript greift dann mit dem CSSOM auf die Eigenschaft zu und ändert den Hintergrund auf blau.

```html
<html lang="en">
  <head>
    <title>Modifying a stylesheet rule with CSSOM</title>
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
    The stylesheet declaration for the body's background color is modified via
    JavaScript.
  </body>
</html>
```

### Ergebnis

{{EmbedGHLiveSample("css-examples/cssom/modify-rule.html", '100%', 120)}}

Die Liste der im DOM über die `style`-Eigenschaft verfügbaren Eigenschaften finden Sie auf der Seite [DOM CSS Properties List](/de/docs/Web/CSS/Reference).

Um Stile für ein Dokument unter Verwendung der CSS-Syntax zu ändern, kann man Regeln einfügen oder {{HTMLElement("style")}}-Tags einfügen, deren `innerHTML`-Eigenschaft auf das gewünschte CSS gesetzt ist.

## Stil eines Elements ändern

Die [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft eines Elements (siehe auch den Abschnitt "DOM Style Object" unten) kann ebenfalls verwendet werden, um die Stile eines Elements zu erhalten und festzulegen. Beachten Sie jedoch, dass diese Eigenschaft nur Stilattribute zurückgibt, die _inline_ gesetzt wurden (z. B. gibt der Zugriff auf `element.style.color` auf einem als `<td style="background-color: lightblue">` definierten Element die Zeichenkette `""` zurück, auch wenn das Element über ein Stylesheet eine `color`-Eigenschaft hat).

Wenn Sie diese Eigenschaft jedoch auf einem Element festlegen, überschreiben Sie alle dort erzeugten oder anderswo definierten Stile für die betreffende Eigenschaft des Elements. Wenn Sie beispielsweise die `border`-Eigenschaft festlegen, überschreiben Sie die Einstellungen, die für die `border`-Eigenschaft dieses Elements im Header-Abschnitt oder in externen Stylesheets vorgenommen wurden. Dies wirkt sich jedoch nicht auf andere Eigenschaftsdeklarationen für die Stile dieses Elements aus, wie z. B. `padding` oder `margin` oder `font`.

Um den Stil eines bestimmten Elements zu ändern, können Sie das folgende Beispiel für das oder die Elemente anpassen, die Sie stylen möchten.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>simple style example</title>

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
    <!-- passes a reference to the element's object as parameter 'this'. -->
    <p id="p1" onclick="alterStyle(this);">
      Click here to change background color.
    </p>

    <!-- passes the 'p1' id of another element's style to modify. -->
    <button onclick="resetStyle('p1');">Reset background color</button>
  </body>
</html>
```

{{ EmbedLiveSample('Modify_an_elements_style') }}

Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) auf dem `document.defaultView`-Objekt gibt alle Stile zurück, die tatsächlich für ein Element berechnet wurden.

## DOM Style Object

Das `style`-Objekt stellt eine einzelne Stillinie dar. Das Style-Objekt wird aus dem `document` oder von den Elementen, auf die dieser Stil angewendet wird, abgerufen. Es repräsentiert die _inline_-Stile auf einem bestimmten Element.

### Stil-Eigenschaften festlegen

Wichtiger als die beiden hier genannten Eigenschaften ist die Verwendung des `style`-Objekts, um einzelne Stileigenschaften an einem Element festzulegen:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Style Property Example</title>
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
    <div id="d" class="thunder">Thunder</div>
    <button onclick="setStyle()">Click here to change text color</button>
    <button onclick="resetStyle()">Reset text color</button>
  </body>
</html>
```

{{ EmbedLiveSample('Setting_style_properties') }}

Der **Media**- und **Typ** des Stils kann, muss aber nicht angegeben werden.

### Die setAttribute-Methode verwenden

Beachten Sie, dass Sie den Stil eines Elements auch ändern können, indem Sie eine Referenz darauf erhalten und dann die Methode [`setAttribute`](/de/docs/Web/API/Element/setAttribute) verwenden, um die CSS-Eigenschaft und ihren Wert anzugeben.

```js
const el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");
```

Seien Sie sich jedoch bewusst, dass `setAttribute` alle anderen Stil-Eigenschaften entfernt, die möglicherweise bereits im `style`-Objekt des Elements definiert sind. Wenn das `some-element`-Element oben beispielsweise ein inline `style`-Attribut von beispielsweise `style="font-size: 18px"` hatte, würde dieser Wert durch die Verwendung von `setAttribute` entfernt werden.
