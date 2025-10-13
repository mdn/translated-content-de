---
title: "HTMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement) gibt den _Inline_-Stil eines Elements in Form eines dynamischen [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts zurück, das eine Liste aller Stil-Eigenschaften für dieses Element enthält, wobei Werte nur für die Attribute zugewiesen werden, die im Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Elements definiert sind.

Kurzschreibweisen werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden die Langhandschreibweisen ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ihr ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zuzuteilen. Es ist jedoch möglich, einen Inline-Stil zu setzen, indem direkt ein _String_ der `style`-Eigenschaft zugewiesen wird. In diesem Fall wird der String an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Wenn `style` auf diese Weise verwendet wird, werden alle Inline-Stile des Elements vollständig überschrieben.

Um bestimmte Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu verändern, ist es daher generell vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zu setzen. Beispielsweise können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stil-Deklaration wird durch Setzen auf `null` oder einen leeren String zurückgesetzt, z.B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden mit diesen Regeln in JavaScript-Identifier umgewandelt:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie, wie sie ist: `height` bleibt (in Kleinbuchstaben). Da `float` ein reserviertes Keyword in JavaScript ist, wurde dieser Eigenschaftsname historisch in `cssFloat` umgewandelt. Alle modernen Browser unterstützen jetzt die direkte Verwendung von `float` in JavaScript, um auf die `float` CSS-Eigenschaft zuzugreifen, aber `cssFloat` wird in älteren Browsern verwendet und ist als Alias in modernen Browsern weiterhin unterstützt.
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in {{Glossary("camel_case", "Camel Case")}} umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
>
> Die `style`-Eigenschaft hat in der CSS-Kaskade die gleiche Priorität wie eine Inline-Stil-Deklaration, die über das `style`-Attribut gesetzt wird.

## Wert

Ein dynamisches [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

## Beispiele

### Stil-Informationen abrufen

Das folgende Codebeispiel demonstriert, wie die Werte, die über die `style`-Eigenschaft des Elements erhalten werden, sich auf den im HTML-Attribut gesetzten Stil beziehen:

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
  <pre id="out"></pre>
</div>
```

```js
const element = document.getElementById("elt");
const out = document.getElementById("out");
const elementStyle = element.style;

// We loop through all the element's styles using `for...in`
for (const prop in elementStyle) {
  // We check if the property belongs to the CSSStyleDeclaration instance
  // We also ensure that the property is a numeric index (indicating an inline style)
  if (
    Object.hasOwn(elementStyle, prop) &&
    !Number.isNaN(Number.parseInt(prop, 10))
  ) {
    out.textContent += `${
      elementStyle[prop]
    } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
  }
}
```

{{EmbedLiveSample("Getting_style_information", "100", "130")}}

Beachten Sie, dass `font-weight` nicht als Wert für `elementStyle` aufgeführt ist, da es nicht innerhalb des `style`-Attributs des Elements selbst definiert ist. Vielmehr wird es von der Definition des übergeordneten Elements geerbt. Beachten Sie auch, dass die Kurzschreibweise {{cssxref("border-top")}}, die im `style`-Attribut definiert ist, nicht direkt aufgeführt wird. Stattdessen wird sie durch die drei entsprechenden Langhandschreibweisen ersetzt ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, und {{cssxref("border-top-width")}}).

### Rahmenstil aktualisieren

```html
<div id="box"></div>

<form name="FormName">
  <button id="btn1">Make border 20px-wide</button>
  <button id="btn2">Make border 5px-wide</button>
</form>
```

```css
#box {
  border: 5px solid green;
  width: 100px;
  height: 100px;
}
```

```js
function setBorderWidth(width) {
  document.getElementById("box").style.borderWidth = `${width}px`;
}

document.getElementById("btn1").addEventListener("click", () => {
  setBorderWidth(20);
});
document.getElementById("btn2").addEventListener("click", () => {
  setBorderWidth(5);
});
```

{{EmbedLiveSample("Updating border style", "", "200")}}

### Stile manipulieren

In diesem Beispiel werden einige grundlegende Stil-Eigenschaften eines HTML-Absatz-Elements mithilfe des Style-Objekts auf dem Element und dessen CSS-Stil-Eigenschaften angesprochen, die aus dem DOM abgerufen und gesetzt werden können. In diesem Fall manipulieren Sie die individuellen Stile direkt. Sie können auch [`styleSheets`](/de/docs/Web/API/Document/styleSheets) und deren Regeln verwenden, um Stile für ganze Dokumente zu ändern.

```html
<p id="pid">Some text</p>
<form>
  <p><button type="button">Change text</button></p>
</form>
```

```js
function changeText() {
  const p = document.getElementById("pid");

  p.style.color = "blue";
  p.style.fontSize = "18pt";
}

document.querySelector("button").addEventListener("click", () => {
  changeText();
});
```

{{EmbedLiveSample("Manipulating styles", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- HTML-`style`-Attribut
