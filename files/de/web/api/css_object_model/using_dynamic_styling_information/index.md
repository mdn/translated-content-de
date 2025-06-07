---
title: Verwendung dynamischer Stilinformationen
slug: Web/API/CSS_Object_Model/Using_dynamic_styling_information
l10n:
  sourceCommit: b15986e9bc011ab29d76a7d837d46e5b1efdd9f8
---

{{DefaultAPISidebar("CSSOM")}}

Das CSS Object Model (CSSOM), als Teil des DOM, stellt spezifische Schnittstellen bereit, die es ermöglichen, eine Vielzahl von Informationen bezüglich CSS zu manipulieren. Zuerst definiert in der _DOM Level 2 Style_ Empfehlung, formen diese Schnittstellen nun eine Spezifikation, das _CSS Object Model (CSSOM)_, das darauf abzielt, diese zu ersetzen.

In vielen Fällen, und wo immer möglich, ist es beste Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Stil-Hooks in einem einzigen Stylesheet kontrolliert werden kann. Der JavaScript-Code wird zudem sauberer, da er sich nicht mit Stil-Details befassen muss, sondern sich auf die allgemeine Semantik jedes erstellten oder manipulierten Abschnitts konzentrieren kann, während die genauen Stil-Details dem Stylesheet überlassen werden. Es gibt jedoch Fälle, in denen das Abrufen oder Manipulieren der Regeln sinnvoll sein kann (ob für ganze Stylesheets oder einzelne Elemente), und das wird weiter unten im Detail beschrieben. Beachten Sie auch, dass, wie bei den DOM-Stilen einzelner Elemente, das Manipulieren von Stylesheets nicht bedeutet, physische Dokumente zu verändern, sondern lediglich die interne Darstellung des Dokuments.

Das grundlegende `style`-Objekt stellt die Schnittstellen [`Stylesheet`](/de/docs/Web/API/StyleSheet) und [`CSSStylesheet`](/de/docs/Web/API/CSSStyleSheet) bereit. Diese Schnittstellen enthalten Mitglieder wie `insertRule`, `selectorText` und `parentStyleSheet` zum Zugriff und zur Manipulation der einzelnen Stilregeln, die ein CSS-Stylesheet bilden.

Um auf die `style`-Objekte aus dem `document` zuzugreifen, können Sie die [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) Eigenschaft verwenden und auf die einzelnen Objekte per Index zugreifen (z.B., `document.styleSheets[0]` ist das erste Stylesheet, das für das Dokument definiert ist, etc.).

## Eine Stylesheet-Regel mit CSSOM ändern

In diesem Beispiel wird der Hintergrund der Seite mit CSS auf `red` gesetzt. Das JavaScript greift dann mit dem CSSOM auf die Eigenschaft zu und ändert den Hintergrund zu `cornflowerblue`.

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

Die Liste der im DOM verfügbaren Eigenschaften aus der `style` Eigenschaft finden Sie auf der Seite [DOM CSS Properties List](/de/docs/Web/CSS/Reference).

Um Stile für ein Dokument mithilfe der CSS-Syntax zu ändern, kann man Regeln einfügen oder {{HTMLElement("style")}} Tags einfügen, deren `innerHTML`-Eigenschaft auf das gewünschte CSS gesetzt ist.

## Den Stil eines Elements ändern

Die Eigenschaft [`style`](/de/docs/Web/API/HTMLElement/style) eines Elements (siehe auch den Abschnitt "DOM Style Object" unten) kann ebenfalls verwendet werden, um die Stile eines Elements zu erhalten und zu setzen. Diese Eigenschaft gibt jedoch nur die Stilattribute zurück, die _inline_ gesetzt wurden (z.B. gibt `element.style.color` auf einem als `<td style="background-color: lightblue">` definierten Element den String `""` zurück, obwohl das Element möglicherweise eine `color` über ein Stylesheet deklariert hat).

Außerdem überschreiben Sie beim Setzen dieser Eigenschaft auf ein Element alle Stile, die an anderer Stelle für die spezielle Eigenschaft dieses Elements gesetzt wurden. Das Setzen der `border`-Eigenschaft überschreibt beispielsweise die Einstellungen, die an anderer Stelle für die `border`-Eigenschaft dieses Elements im Kopfbereich oder in externen Stylesheets gemacht wurden. Dies betrifft jedoch keine anderen Eigenschaftsdeklarationen für die Stile dieses Elements, wie z.B. Padding, Margin oder Font.

Um den Stil eines bestimmten Elements zu ändern, können Sie das folgende Beispiel für die(s) zu stylende(n) Element(e) anpassen.

```html
<p id="p1">Click here to change background color.</p>
<button>Reset background color</button>
```

```css
#p1 {
  border: solid blue 2px;
}
```

```js
const p1 = document.getElementById("p1");
const button = document.querySelector("button");

p1.addEventListener("click", () => {
  p1.style.background = "green";
});
button.addEventListener("click", () => {
  p1.style.background = "white";
});
```

{{ EmbedLiveSample('Modify_an_elements_style') }}

Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) auf dem Objekt `document.defaultView` gibt alle Stile zurück, die tatsächlich für ein Element berechnet wurden.

### Verwendung der Methode setAttribute

Beachten Sie, dass Sie auch den Stil eines Elements ändern können, indem Sie eine Referenz darauf erhalten und dann seine Methode [`setAttribute`](/de/docs/Web/API/Element/setAttribute) verwenden, um die CSS-Eigenschaft und ihren Wert anzugeben.

```js
const el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");
```

Seien Sie sich jedoch bewusst, dass `setAttribute` alle anderen `style`-Eigenschaften entfernt, die möglicherweise bereits im `style`-Objekt des Elements definiert wurden. Wenn das `some-element` oben ein Inline-`style`-Attribut von zum Beispiel `style="font-size: 18px"` hatte, würde dieser Wert durch die Verwendung von `setAttribute` entfernt werden.
