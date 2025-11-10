---
title: Verwenden dynamischer Styling-Informationen
slug: Web/API/CSS_Object_Model/Using_dynamic_styling_information
l10n:
  sourceCommit: 56bbf59f4ea2566d64ad2e5c669a7a597626b7f3
---

{{DefaultAPISidebar("CSSOM")}}

Das CSS Object Model (CSSOM), Teil des DOM, stellt spezifische Schnittstellen bereit, die die Manipulation einer großen Menge an Informationen bezüglich CSS ermöglichen. Ursprünglich in der Empfehlung _DOM Level 2 Style_ definiert, bilden diese Schnittstellen nun eine Spezifikation, _CSS Object Model (CSSOM)_, die darauf abzielt, diese zu ersetzen.

In vielen Fällen und wo möglich, ist es bewährte Praxis, Klassen dynamisch über die [`className`](/de/docs/Web/API/Element/className)-Eigenschaft zu manipulieren, da das endgültige Erscheinungsbild aller Styling-Hooks in einem einzigen Stylesheet kontrolliert werden kann. Der JavaScript-Code wird auch übersichtlicher, da er sich statt mit Styling-Details mit den übergreifenden Semantiken jeder Sektion befassen kann, die er erstellt oder manipuliert, und die genauen Stil-Details dem Stylesheet überlässt. Es gibt jedoch Fälle, in denen das tatsächliche Abrufen oder Manipulieren der Regeln nützlich sein kann (sei es für ganze Stylesheets oder einzelne Elemente), und dies wird im Folgenden näher beschrieben. Beachten Sie auch, dass, wie bei den DOM-Stilen einzelner Elemente, wenn von der Manipulation der Stylesheets gesprochen wird, dies nicht die physische Manipulation des/der Dokument(e) bedeutet, sondern lediglich die interne Darstellung des Dokuments.

Das grundlegende `style`-Objekt stellt die [`Stylesheet`](/de/docs/Web/API/StyleSheet) und die [`CSSStylesheet`](/de/docs/Web/API/CSSStyleSheet)-Schnittstellen bereit. Diese Schnittstellen enthalten Mitglieder wie `insertRule`, `selectorText` und `parentStyleSheet` für den Zugriff und die Manipulation der einzelnen Stilregeln, die ein CSS-Stylesheet bilden.

Um auf die `style`-Objekte vom `document` aus zuzugreifen, können Sie die [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Eigenschaft verwenden und die einzelnen Objekte per Index zugreifen (z.B. `document.styleSheets[0]` ist das erste für das Dokument definierte Stylesheet usw.). Sie können auch auf die [`sheet`](/de/docs/Web/API/HTMLStyleElement/sheet)-Eigenschaft eines bestimmten `<style>`-Elements zugreifen, um dessen zugehöriges Stylesheet-Objekt zu erhalten.

## Eine Stylesheet-Regel mit CSSOM ändern

In diesem Beispiel wird der Hintergrund der Seite mit CSS auf `red` gesetzt. Das JavaScript greift dann über das CSSOM auf die Eigenschaft zu und ändert den Hintergrund auf `cornflowerblue`.

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
const stylesheet = document.getElementById("css-output").sheet;
stylesheet.cssRules[0].style.backgroundColor = "cornflowerblue";
```

{{EmbedLiveSample("modify-rule")}}

Die Liste der im DOM aus der `style`-Eigenschaft verfügbaren Eigenschaften finden Sie auf der Seite [DOM- und CSS-Eigenschaftenliste](/de/docs/Web/CSS/Reference).

Um Stile in einem Dokument mit CSS-Syntax zu ändern, kann man Regeln einfügen oder {{HTMLElement("style")}}-Tags einfügen, deren `innerHTML`-Eigenschaft auf das gewünschte CSS gesetzt ist.

## Den Stil eines Elements ändern

Die [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft eines Elements (siehe auch den Abschnitt "DOM Style Object" unten) kann ebenfalls verwendet werden, um die Stile eines Elements zu ermitteln und zu setzen. Diese Eigenschaft gibt jedoch nur Stilattribute zurück, die _inline_ gesetzt wurden (z.B. gibt der Zugriff auf `element.style.color` auf ein als `<td style="background-color: lightblue">` definiertes Element die Zeichenkette `""` zurück, obwohl das Element möglicherweise eine via Stylesheet deklarierte `color` hat).

Auch wenn Sie diese Eigenschaft auf ein Element setzen, überschreiben Sie alle Stile, die an anderer Stelle für die betreffende Eigenschaft des Elements gesetzt wurden. Das Setzen der `border`-Eigenschaft wird beispielsweise Einstellungen überschreiben, die an anderer Stelle für die `border`-Eigenschaft dieses Elements im Kopfabschnitt oder in externen Stylesheets vorgenommen wurden. Dies wirkt sich jedoch nicht auf andere Eigenschaften-Deklarationen für die Stile dieses Elements aus, wie zum Beispiel Padding oder Margin oder Schriftart.

Um den Stil eines bestimmten Elements zu ändern, können Sie das folgende Beispiel auf das/die Element(e) anwenden, das/die Sie stylen möchten.

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

{{EmbedLiveSample('Modify_an_elements_style')}}

Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode auf dem Objekt `document.defaultView` gibt alle Stile zurück, die tatsächlich für ein Element berechnet wurden.

### Verwenden der setAttribute-Methode

Beachten Sie, dass Sie den Stil eines Elements auch ändern können, indem Sie eine Referenz darauf erhalten und dann seine [`setAttribute`](/de/docs/Web/API/Element/setAttribute)-Methode verwenden, um die CSS-Eigenschaft und deren Wert anzugeben.

```js
const el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");
```

Seien Sie jedoch gewarnt, dass `setAttribute` alle anderen `style`-Eigenschaften entfernt, die möglicherweise bereits im `style`-Objekt des Elements definiert sind. Wenn das `some-element`-Element oben ein Inline-`style`-Attribut mit beispielsweise `style="font-size: 18px"` hatte, würde dieser Wert durch die Verwendung von `setAttribute` entfernt.
