---
title: "HTMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: d3bbe8558e181a2b6e04abdedc429fb2a0e4f015
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement) gibt den _inline_ [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) eines Elements in Form eines Live-Objekts vom Typ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) zurück. Dieses Objekt kann verwendet werden, um die Inline-Stile eines Elements zu erhalten und zu setzen.

## Wert

Ein Live-Objekt vom Typ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties).

> [!NOTE]
> Frühere Versionen der Spezifikation gaben eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück (von der [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für Informationen zur Browserunterstützung.

## Beschreibung

Die Werte der in einem Element gesetzten Inline-Stile im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut werden durch entsprechende Eigenschaften des zurückgegebenen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts widergespiegelt.

> [!NOTE]
> [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) verfügt über Eigenschaften mit Bindestrichnamen und entsprechende {{Glossary("camel_case", "camel-case")}} Namen für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Properties) (nicht nur diejenigen mit Inline-Stilen). Eigenschaften, die keinen entsprechenden Inline-Stil haben, sind auf `""` gesetzt.

Kurzform-CSS-Eigenschaften des Elements werden in ihre entsprechenden Langformen-Eigenschaften erweitert. Zum Beispiel würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` dargestellt, sowie durch die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth`.

Die `style`-Eigenschaft ist schreibgeschützt, das heißt, es ist nicht möglich, ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt ihr zuzuweisen. Dennoch ist es möglich, einen Inline-Stil zu setzen, indem eine _Zeichenkette_ direkt der Eigenschaft zugewiesen wird. In diesem Fall kann die Zeichenkette aus [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) gelesen werden. Die Verwendung von `style` auf diese Weise wird alle Inline-Stile des Elements vollständig überschreiben.

Um spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu verändern, ist es in der Regel vorzuziehen, einzelne Eigenschaften des [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts zu setzen. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben. Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder eine leere Zeichenkette gesetzt wird, z.B. `element.style.color = null`.

Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine Inline-Stil-Deklaration, die über das `style`-Attribut gesetzt wird.

## Beispiele

### Grundlegende Nutzung

Dieses Codebeispiel zeigt, wie Sie die Inline-Stile eines Elements lesen können. In jedem Fall werden die Bindestrich-basierten Stileigenschaften mit [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) gelesen und die camel-case-Eigenschaften mit dem Punkt-Operator erhalten.

#### HTML

Zuerst definieren wir ein {{htmlelement("div")}}-Element und ein verschachteltes Element, das unterschiedliche Inline-Stile definiert, sowohl in Kurz- als auch in Langform.

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
  <pre id="log"></pre>
</div>
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Der folgende Code holt sich das innere Element, liest dessen Stil und protokolliert die Bindestrich- und camel-case benannten CSS-Stileigenschaften.

```js
const element = document.getElementById("elt");
const elementStyle = element.style;

// Longhand styles
log(`"border-top" = '${elementStyle.getPropertyValue("border-top")}'`);
log(`"borderTop" = '${elementStyle.borderTop}'`);

// Expanded longhand styles
log(
  `"border-top-width" = '${elementStyle.getPropertyValue("border-top-width")}'`,
);
log(`"borderTopWidth" = '${elementStyle.borderTopWidth}'`);

log(
  `"border-top-style" = '${elementStyle.getPropertyValue("border-top-style")}'`,
);
log(`"borderTopStyle" = '${elementStyle.borderTopStyle}'`);

log(
  `"border-top-color" = '${elementStyle.getPropertyValue("border-top-color")}'`,
);
log(`"borderTopColor" = '${elementStyle.borderTopColor}'`);

// Original shorthand style
log(`"color" = '${elementStyle.getPropertyValue("color")}'`);
log(`"color" = '${elementStyle.color}'`);

// Defined on parent
log(`"font-weight" = '${elementStyle.getPropertyValue("font-weight")}'`);
log(`"fontWeight" = '${elementStyle.fontWeight}'`);
```

#### Ergebnisse

Das Ergebnis wird unten angezeigt. In jedem Fall sehen wir, dass die Stile, die mit den Bindestrich- und camel-case benannten Eigenschaften gelesen werden, identisch sind. Wir sehen auch, dass die {{cssxref("border-top")}}-Eigenschaft, die dem `style`-Attribut des Elements entspricht, vorhanden ist und dass für jeden ihrer Teile eine Langform-Eigenschaft definiert ist ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}).

{{EmbedLiveSample("Basic usage", "100", "280")}}

Beachten Sie, dass `font-weight` auf den `CSSStyleProperties` definiert ist (wie alle anderen CSS-Eigenschaften, obwohl wir sie nicht protokolliert haben). Es handelt sich jedoch nicht um einen Inline-Stil für das verschachtelte Element, daher ist sein Wert auf die leere Zeichenkette (`""`) gesetzt.

### Aufzählen von Stilinformationen

Dieses Beispiel zeigt, wie wir die Bindestrich-Eigenschaften von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) aufzählen können.

#### HTML

Zuerst definieren wir ein {{htmlelement("div")}}-Element und ein verschachteltes Element, das unterschiedliche Inline-Stile definiert, sowohl in Kurz- als auch in Langform. Dies ist das gleiche HTML wie im vorherigen Beispiel.

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
  <pre id="log"></pre>
</div>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Der folgende Code iteriert über die enumerierbaren Eigenschaften der `CSSStyleProperties` und protokolliert das Ergebnis.

```js
const element = document.getElementById("elt");
const elementStyle = element.style;

// Loop through all the element's styles using `for...in`
for (const prop in elementStyle) {
  // Check the property belongs to the CSSStyleProperties instance
  // Ensure the property is a numeric index (indicating a dash-named/inline style)
  if (
    Object.hasOwn(elementStyle, prop) &&
    !Number.isNaN(Number.parseInt(prop, 10))
  ) {
    log(
      `${
        elementStyle[prop]
      } = '${elementStyle.getPropertyValue(elementStyle[prop])}`,
    );
  }
}
```

#### Ergebnisse

Das Ergebnis wird unten angezeigt. Beachten Sie, dass nur die Langform-CSS-Eigenschaften des Elements als enumerierte Werte vorhanden sind (die Inline-Kurzform-Eigenschaft wird nicht aufgezählt).

{{EmbedLiveSample("Enumerating style information", "100", "180")}}

### Aktualisierung des Randstils

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

### Manipulation von Stilen

In diesem Beispiel werden einige grundlegende Stileigenschaften eines HTML-Absatzelements über das Style-Objekt im Element und dessen CSS-Stileigenschaften, die aus dem DOM abgerufen und gesetzt werden können, bearbeitet. In diesem Fall manipulieren Sie die individuellen Stile direkt. Sie können auch [`styleSheets`](/de/docs/Web/API/Document/styleSheets) und ihre Regeln verwenden, um Stile für ganze Dokumente zu ändern.

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

- [Dynamische Stilinformationen verwenden](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- HTML-Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
