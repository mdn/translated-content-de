---
title: Verwendung dynamischer Styling-Informationen
slug: Web/API/CSS_Object_Model/Using_dynamic_styling_information
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{DefaultAPISidebar("CSSOM")}}

Das CSS Object Model (CSSOM), ein Teil des DOM, stellt spezielle Schnittstellen zur Verfügung, die es ermöglichen, eine Vielzahl von Informationen über CSS zu manipulieren. Ursprünglich definiert in der Empfehlung _DOM Level 2 Style_, bilden diese Schnittstellen nun eine Spezifikation, die _CSS Object Model (CSSOM)_ die darauf abzielt, diese zu ersetzen.

In vielen Fällen, und wo immer möglich, ist es am besten, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className) Eigenschaft zu manipulieren, da das letztendliche Erscheinungsbild aller Styling-Hooks in einem einzigen Stylesheet kontrolliert werden kann. Der JavaScript-Code wird dadurch auch sauberer, da er sich anstatt auf Styling-Details auf die allgemeine Semantik jeder Sektion konzentrieren kann, die er erstellt oder manipuliert, während die genauen Styledetails dem Stylesheet überlassen bleiben. Es gibt jedoch Fälle, in denen das tatsächliche Abrufen oder Manipulieren der Regeln nützlich sein kann (sei es für ganze Stylesheets oder einzelne Elemente), und das wird im Folgenden näher beschrieben. Beachten Sie auch, dass, wie bei den DOM-Stilen einzelner Elemente, wenn von der Manipulation der Stylesheets die Rede ist, dies nicht die physische Veränderung des/der Dokumente(s) bedeutet, sondern lediglich die interne Darstellung des Dokuments verändert wird.

Das grundlegende `style`-Objekt stellt die [`Stylesheet`](/de/docs/Web/API/StyleSheet) und die [`CSSStylesheet`](/de/docs/Web/API/CSSStyleSheet) Schnittstellen bereit. Diese Schnittstellen enthalten Mitglieder wie `insertRule`, `selectorText` und `parentStyleSheet` für den Zugriff und die Manipulation der einzelnen Stilregeln, die ein CSS-Stylesheet ausmachen.

Um auf die `style`-Objekte aus dem `document` zuzugreifen, können Sie die [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) Eigenschaft verwenden und die einzelnen Objekte per Index zugreifen (z. B. `document.styleSheets[0]` ist das erste definierte Stylesheet für das Dokument, etc.).

## Eine Stylesheet-Regel mit CSSOM ändern

In diesem Beispiel wird der Hintergrund der Seite mit CSS auf `red` gesetzt. JavaScript greift dann über das CSSOM auf die Eigenschaft zu und ändert den Hintergrund zu `cornflowerblue`.

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

Die Liste der im DOM verfügbaren Eigenschaften aus der `style`-Eigenschaft finden Sie auf der Seite [DOM CSS Properties List](/de/docs/Web/CSS/Reference).

Um Stile mithilfe der CSS-Syntax in ein Dokument zu ändern, kann man Regeln einfügen oder {{HTMLElement("style")}} Tags einfügen, deren `innerHTML` Eigenschaft auf das gewünschte CSS gesetzt ist.

## Den Stil eines Elements ändern

Die Element [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft (siehe auch den Abschnitt "DOM Style Object" unten) kann ebenfalls verwendet werden, um die Stile eines Elements zu erhalten und zu setzen. Diese Eigenschaft gibt jedoch nur Stileigenschaften zurück, die _inline_ gesetzt wurden (z. B. gibt `element.style.color` auf einem Element, das als `<td style="background-color: lightblue">` definiert ist, den String `""` zurück, auch wenn das Element möglicherweise eine `color` über ein Stylesheet deklariert hat).

Wenn Sie diese Eigenschaft auf einem Element setzen, überschreiben Sie außerdem alle Stile, die an anderer Stelle für die bestimmte Eigenschaft des Elements, die Sie setzen, festgelegt wurden. Wenn Sie beispielsweise die `border`-Eigenschaft setzen, wird die Einstellung für die `border`-Eigenschaft dieses Elements im Kopfbereich oder in externen Stylesheets überschrieben. Dies hat jedoch keine Auswirkungen auf andere Eigenschaftsdeklarationen für die Stile dieses Elements, wie z. B. padding oder margin oder font.

Um den Stil eines bestimmten Elements zu ändern, können Sie das folgende Beispiel für das/die Element(e), das/die Sie stylen möchten, anpassen.

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
  elem.style.background = "white";
});
```

{{EmbedLiveSample('Modify_an_elements_style')}}

Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode auf dem `document.defaultView` Objekt gibt alle Stile zurück, die tatsächlich für ein Element berechnet wurden.

### Verwendung der setAttribute-Methode

Beachten Sie, dass Sie den Stil eines Elements auch ändern können, indem Sie eine Referenz darauf erhalten und dann die [`setAttribute`](/de/docs/Web/API/Element/setAttribute) Methode verwenden, um die CSS-Eigenschaft und ihren Wert zu spezifizieren.

```js
const el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");
```

Beachten Sie jedoch, dass `setAttribute` alle anderen in der `style`-Eigenschaft des Elements möglicherweise bereits definierten Eigenschaften entfernt. Wenn das `some-element`-Element oben beispielsweise ein inline-`style`-Attribut von etwa `style="font-size: 18px"` hatte, würde dieser Wert durch die Verwendung von `setAttribute` entfernt.
