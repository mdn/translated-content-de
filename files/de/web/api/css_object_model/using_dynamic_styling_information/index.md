---
title: Verwendung von dynamischen Styling-Informationen
slug: Web/API/CSS_Object_Model/Using_dynamic_styling_information
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("CSSOM")}}

Das CSS Object Model (CSSOM), ein Teil des DOM, bietet spezifische Schnittstellen, die die Manipulation einer Vielzahl von Informationen bezüglich CSS ermöglichen. Ursprünglich in der Empfehlung _DOM Level 2 Style_ definiert, formen diese Schnittstellen nun eine Spezifikation, das _CSS Object Model (CSSOM)_, welche es anstrebt, diese zu ersetzen.

In vielen Fällen, und wo möglich, ist es am besten, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild all dieser Stil-Hooks in einem einzigen Stylesheet kontrolliert werden kann. Der JavaScript-Code wird dadurch auch sauberer, da er sich anstatt auf stilistische Details vielmehr auf die allgemeinen semantischen Aspekte der zu erstellenden oder zu manipulierenden Abschnitte konzentrieren kann, während die genauen Stil-Details dem Stylesheet überlassen werden. Es gibt jedoch Fälle, in denen es nützlich sein kann, die Regeln tatsächlich abzurufen oder zu manipulieren (sei es für ganze Stylesheets oder einzelne Elemente), und dies wird unten ausführlicher beschrieben. Beachten Sie auch, dass beim Sprechen von der Manipulation der Stylesheets, ebenso wie bei den DOM-Stilen einzelner Elemente, es sich nicht um die Manipulation der physischen Dokumente handelt, sondern lediglich um die interne Darstellung des Dokuments.

Das grundlegende `style`-Objekt stellt die Schnittstellen [`Stylesheet`](/de/docs/Web/API/Stylesheet) und [`CSSStylesheet`](/de/docs/Web/API/CSSStylesheet) bereit. Diese Schnittstellen enthalten Mitglieder wie `insertRule`, `selectorText` und `parentStyleSheet` für den Zugriff und die Manipulation der einzelnen Stilregeln, die ein CSS-Stylesheet ausmachen.

Um auf die `style`-Objekte aus dem `document` zuzugreifen, können Sie die Eigenschaft [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) verwenden und die einzelnen Objekte über den Index erreichen (z. B. ist `document.styleSheets[0]` das erste definierte Stylesheet des Dokuments usw.).

## Eine Stylesheet-Regel mit CSSOM ändern

In diesem Beispiel wird der Hintergrund der Seite mittels CSS auf Rot gesetzt. Das JavaScript greift dann über das CSSOM auf die Eigenschaft zu und ändert den Hintergrund zu Blau.

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

Die Liste der im DOM verfügbaren Eigenschaften des `style`-Elements finden Sie auf der Seite [DOM CSS Properties List](/de/docs/Web/CSS/Reference).

Um Stile eines Dokuments mit CSS-Syntax zu ändern, kann man Regeln einfügen oder {{HTMLElement("style")}}-Tags einfügen, deren `innerHTML`-Eigenschaft auf das gewünschte CSS gesetzt ist.

## Den Stil eines Elements ändern

Die [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft eines Elements (siehe auch den Abschnitt "DOM Style Object" unten) kann ebenfalls verwendet werden, um die Stile eines Elements zu erhalten und zu setzen. Diese Eigenschaft gibt jedoch nur Stilattribute zurück, die _in-line_ gesetzt wurden (z. B. würde der Zugriff auf `element.style.color` eines Elements, das als `<td style="background-color: lightblue">` definiert ist, den String `""` zurückgeben, selbst wenn das Element möglicherweise eine `color`-Eigenschaft über ein Stylesheet deklariert hat).

Wenn Sie diese Eigenschaft an einem Element setzen, überschreiben Sie auch jegliche Stile, die anderswo für die spezielle Eigenschaft dieses Elements festgelegt wurden, die Sie setzen. Wenn Sie beispielsweise die `border`-Eigenschaft setzen, überschreiben Sie die Einstellungen, die anderswo im Kopfbereich oder in externen Stylesheets für die `border`-Eigenschaft dieses Elements vorgenommen wurden. Dies hat jedoch keine Auswirkungen auf andere Stil-Deklarationen dieses Elements, wie etwa padding oder margin oder font.

Um den Stil eines bestimmten Elements zu ändern, können Sie das folgende Beispiel für das bzw. die Elemente, die Sie stylen möchten, anpassen.

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

Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode auf dem `document.defaultView`-Objekt gibt alle Stile zurück, die tatsächlich für ein Element berechnet wurden.

## DOM Style Object

Das `style`-Objekt repräsentiert eine einzelne Stil-Anweisung. Das Style-Objekt wird entweder aus dem `document` oder aus den Elementen, auf die dieser Stil angewendet wird, angesprochen. Es stellt die _in-line_-Stile eines bestimmten Elements dar.

### Style-Eigenschaften setzen

Wichtiger als die beiden hier genannten Eigenschaften ist die Verwendung des `style`-Objekts, um individuelle Stil-Eigenschaften eines Elements zu setzen:

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

Der **media**- und **type** des Styles kann angegeben werden oder nicht.

### Verwendung der setAttribute-Methode

Beachten Sie, dass Sie den Stil eines Elements auch ändern können, indem Sie eine Referenz darauf erhalten und dann die [`setAttribute`](/de/docs/Web/API/Element/setAttribute)-Methode verwenden, um die CSS-Eigenschaft und ihren Wert festzulegen.

```js
const el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");
```

Beachten Sie jedoch, dass `setAttribute` alle anderen `style`-Eigenschaften entfernt, die möglicherweise bereits im `style`-Objekt des Elements definiert sind. Wenn das `some-element` im obigen Beispiel beispielsweise ein in-line-`style`-Attribut von beispielsweise `style="font-size: 18px"` hätte, würde dieser Wert beim Verwenden von `setAttribute` entfernt.
