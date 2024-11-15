---
title: Verwenden von dynamischen Styling-Informationen
slug: Web/API/CSS_Object_Model/Using_dynamic_styling_information
l10n:
  sourceCommit: ca6d4f6114d278926e183225a90fd2209802cfe9
---

{{DefaultAPISidebar("CSSOM")}}

Das CSS Object Model (CSSOM), ein Teil des DOM, stellt bestimmte Schnittstellen bereit, die es ermöglichen, eine Vielzahl von Informationen bezüglich CSS zu manipulieren. Ursprünglich definiert in der Empfehlung _DOM Level 2 Style_, bildet diese Schnittstellen nun eine Spezifikation, _CSS Object Model (CSSOM)_, die es ersetzen soll.

In vielen Fällen, und wo möglich, ist es best practice, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Styling-Hooks in einem einzigen Stylesheet gesteuert werden kann. Der JavaScript-Code wird auch übersichtlicher, da er sich nicht mit Styling-Details beschäftigt, sondern sich auf die gesamte Semantik der erstellten oder manipulierten Abschnitte konzentrieren kann, während die genauen Style-Details dem Stylesheet überlassen werden. Es gibt jedoch Fälle, in denen das tatsächliche Abrufen oder Manipulieren der Regeln nützlich sein kann (sei es für ganze Stylesheets oder einzelne Elemente), und das wird im Folgenden näher beschrieben. Beachten Sie auch, dass, wie bei einzelnen DOM-Stil-Elementen, beim Sprechen über das Manipulieren der Stylesheets nicht das physische Dokument manipuliert wird, sondern lediglich die interne Darstellung des Dokuments.

Das grundlegende `style` Objekt stellt die [`Stylesheet`](/de/docs/Web/API/Stylesheet) und die [`CSSStylesheet`](/de/docs/Web/API/CSSStylesheet) Schnittstellen bereit. Diese Schnittstellen enthalten Mitglieder wie `insertRule`, `selectorText` und `parentStyleSheet` zum Zugreifen und Manipulieren der einzelnen Stilregeln, die ein CSS Stylesheet ausmachen.

Um zu den `style` Objekten vom `document` zu gelangen, können Sie die [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) Eigenschaft verwenden und auf die einzelnen Objekte durch ihren Index zugreifen (z.B. `document.styleSheets[0]` ist das erste Stylesheet, das für das Dokument definiert ist, usw.).

## Ein Stylesheet-Regel mit CSSOM ändern

In diesem Beispiel wird der Hintergrund der Seite mit CSS auf `red` gesetzt. Der JavaScript-Code greift dann auf die Eigenschaft über CSSOM zu und ändert den Hintergrund zu `cornflowerblue`.

```html live-sample___modify-rule
<p>The stylesheet declaration for the body is modified via JavaScript.</p>
```

```css live-sample___modify-rule
body {
  background-color: red;
  font: 1.2em / 1.5 sans-serif;
  color: white;
  padding: 1em;
}
```

```js live-sample___modify-rule
const stylesheet = document.styleSheets[1];
stylesheet.cssRules[0].style.backgroundColor = "cornflowerblue";
```

{{EmbedLiveSample("modify-rule")}}

Die Liste der im DOM verfügbaren Eigenschaften von der `style` Eigenschaft ist auf der Seite [DOM CSS Properties List](/de/docs/Web/CSS/Reference) zu finden.

Um Stile in einem Dokument unter Verwendung der CSS-Syntax zu ändern, kann man Regeln einfügen oder {{HTMLElement("style")}} Tags einfügen, deren `innerHTML` Eigenschaft auf das gewünschte CSS gesetzt ist.

## Den Stil eines Elements ändern

Die `style`-Eigenschaft eines Elements ([`style`](/de/docs/Web/API/HTMLElement/style), siehe auch den Abschnitt "DOM Style Object" unten) kann ebenfalls verwendet werden, um die Stile eines Elements abzurufen und zu setzen. Diese Eigenschaft gibt jedoch nur solche Stilattribute zurück, die _inline_ gesetzt worden sind (z.B. gibt `element.style.color` auf einem als `<td style="background-color: lightblue">` definierten Element die Zeichenkette `""` zurück, obwohl das Element möglicherweise eine `color` über ein Stylesheet deklariert hat).

Auch wenn Sie diese Eigenschaft auf einem Element setzen, überschreiben Sie sämtliche Stile, die an anderer Stelle für die jeweilige Eigenschaft dieses Elements gesetzt worden sind, die Sie gerade verändern. Das Setzen der `border`-Eigenschaft überschreibt z.B. die für dieses Element andernorts (im Kopfbereich oder in externen Stylesheets) gemachten Einstellungen für die `border`-Eigenschaft. Dies beeinflusst jedoch keine anderen Deklarationen für die Stile dieses Elements wie etwa padding oder margin oder font, um ein Beispiel zu nennen.

Um den Stil eines bestimmten Elements zu ändern, können Sie das folgende Beispiel für das/die Element(e) anpassen, das/die Sie stylen möchten.

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

Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) im `document.defaultView` Objekt gibt alle Stile zurück, die tatsächlich für ein Element berechnet wurden.

## DOM Style Object

Das `style` Objekt stellt eine einzelne Stil-Anweisung dar. Das Style-Objekt wird aus dem `document` oder aus den Elementen, auf die dieser Stil angewendet wird, aufgerufen. Es repräsentiert die _inline_ Styles eines bestimmten Elements.

### Stil-Eigenschaften setzen

Wichtiger als die hier genannten zwei Eigenschaften ist die Verwendung des `style` Objekts, um einzelne Stil-Eigenschaften auf einem Element zu setzen:

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

Das **media** und **type** des Stils kann gegeben sein oder auch nicht.

### Die setAttribute-Methode verwenden

Beachten Sie, dass Sie den Stil eines Elements ändern können, indem Sie eine Referenz darauf erhalten und dann seine [`setAttribute`](/de/docs/Web/API/Element/setAttribute) Methode verwenden, um die CSS-Eigenschaft und ihren Wert anzugeben.

```js
const el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");
```

Seien Sie sich jedoch bewusst, dass `setAttribute` alle anderen `style`-Eigenschaften entfernt, die möglicherweise bereits im `style`-Objekt des Elements definiert sind. Wenn das Element `some-element` im obigen Beispiel eine in-line `style`-Eigenschaft von beispielsweise `style="font-size: 18px"` hatte, würde dieser Wert durch die Verwendung von `setAttribute` entfernt werden.
