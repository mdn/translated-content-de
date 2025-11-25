---
title: "HTMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt den _Inline_-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) eines Elements in Form eines Live-[`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts zurück.
Dieses Objekt kann verwendet werden, um die Inline-Stile eines Elements zu erhalten und zu setzen.

## Wert

Ein Live-[`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt.

> [!NOTE]
> Frühere Versionen der Spezifikation lieferten ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) (von dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Browserunterstützung.

Obwohl die `style`-Eigenschaft selbst im Sinne "schreibgeschützt" ist, dass Sie das `CSSStyleProperties`-Objekt nicht ersetzen können, können Sie immer noch direkt der `style`-Eigenschaft zuweisen, was dem Zuweisen zu ihrer [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft entspricht. Sie können das `CSSStyleProperties`-Objekt auch mithilfe der Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern.

## Beschreibung

Die Werte der Inline-Stile, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Elements gesetzt sind, werden durch entsprechende Eigenschaften des zurückgegebenen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts widergespiegelt.

> [!NOTE]
> [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) verfügt über Eigenschaften mit Bindestrichnamen und entsprechende {{Glossary("camel_case", "camel-case")}} benannte Eigenschaften für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties) (nicht nur für solche mit Inline-Stilen).
> Eigenschaften, die keinen entsprechenden Inline-Stil haben, sind auf `""` gesetzt.

Kurzschreibungs-CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften expandiert.
Zum Beispiel würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt werden.

Um bestimmten Stil zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern, ist es in der Regel bevorzugt, einzelne Eigenschaften auf dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zu setzen.
Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.
Eine Stil-Deklaration wird zurückgesetzt, indem man sie auf `null` oder einen leeren String setzt, z.B. `element.style.color = null`.

Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine Inline-Stildeklaration, die über das `style`-Attribut gesetzt wurde.

## Beispiele

### Grundlegende Verwendung

Dieses Codebeispiel zeigt, wie Sie die Inline-Stile eines Elements auslesen können.
In jedem Fall liest es die Eigenschaften mit Bindestrichnamen unter Verwendung von [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) und erhält die camel case-Eigenschaften mit dem Punktoperator.

#### HTML

Zuerst definieren wir ein {{htmlelement("div")}}-Element und ein geschachteltes Element, die unterschiedliche Inline-Stile definieren, sowohl in der Kurzform als auch in der Langform.

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

Der folgende Code holt das innere Element, liest seinen Stil und protokolliert die CSS-Stileigenschaften mit Bindestrichnamen und camel case.

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

Das Ergebnis wird unten gezeigt.
In jedem Fall sehen wir, dass die Stile, die mit den Eigenschaften mit Bindestrich- und camel case-Namen gelesen wurden, gleich sind.
Wir sehen auch, dass die zur `style`-Attribut des Elements entsprechende {{cssxref("border-top")}}-Eigenschaft vorhanden ist, und dass eine Langform-Eigenschaft für jeden ihrer Teile definiert ist ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, und {{cssxref("border-top-width")}}).

{{EmbedLiveSample("Basic usage", "100", "280")}}

Beachten Sie, dass `font-weight` auf den `CSSStyleProperties` definiert ist (wie alle anderen CSS-Eigenschaften, obwohl wir sie nicht protokolliert haben).
Es handelt sich jedoch nicht um einen Inline-Stil für das geschachtelte Element, daher ist sein Wert auf den leeren String (`""`) gesetzt.

### Aufzählung von Stilinformationen

Dieses Beispiel zeigt, wie wir die Eigenschaften mit Bindestrichnamen von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) aufzählen können.

#### HTML

Zuerst definieren wir ein {{htmlelement("div")}}-Element und ein geschachteltes Element, die unterschiedliche Inline-Stile definieren, sowohl in der Kurzform als auch in der Langform.
Dies ist das gleiche HTML wie im vorherigen Beispiel.

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

Der folgende Code iteriert über die aufzählbaren Eigenschaften der `CSSStyleProperties` und protokolliert das Ergebnis.

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

Das Ergebnis wird unten gezeigt.
Beachten Sie, dass nur die Langform-CSS-Eigenschaften des Elements aufgezählte Werte sind (die Inline-Kurzform-Eigenschaft wird nicht aufgezählt).

{{EmbedLiveSample("Enumerating style information", "100", "180")}}

### Aktualisierung des Rahmenstils

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

In diesem Beispiel werden einige grundlegende Stileigenschaften eines HTML-Absatzelements über das Style-Objekt der Elemente aufgerufen und die CSS-Stileigenschaften dieses Objekts, die aus dem DOM abgerufen und gesetzt werden können. In diesem Fall manipulieren Sie die individuellen Stile direkt. Sie können auch [`styleSheets`](/de/docs/Web/API/Document/styleSheets) und deren Regeln verwenden, um Stile für ganze Dokumente zu ändern.

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
