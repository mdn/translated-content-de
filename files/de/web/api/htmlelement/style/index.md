---
title: "HTMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: f3bf315cc3f26a6c96cfa6fa4898e7def28ca78a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement) gibt den _inline_ [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Stil eines Elements in Form eines live [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts zurück.
Dieses Objekt kann verwendet werden, um die Inline-Stile eines Elements abzurufen und festzulegen.

## Wert

Ein live [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück (von der [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Browser-Unterstützung.

## Beschreibung

Die Werte der Inline-Stile, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Elements festgelegt sind, werden von den entsprechenden Eigenschaften des zurückgegebenen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts wiedergegeben.

> [!NOTE]
> [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) hat strichbenannte und entsprechende {{Glossary("camel_case", "Camel-Case")}} benannte Eigenschaften für **alle** von dem Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties) (nicht nur diejenigen mit Inline-Stilen).
> Eigenschaften, die keinen entsprechenden Inline-Stil haben, werden auf `""` gesetzt.

Kurzschrift-CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften erweitert.
Ein Element mit dem Stil `"border-top: 1px solid black"` würde im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie den entsprechenden Langhandeigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt.

Die `style`-Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ihr ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zuzuweisen.
Dennoch ist es möglich, einen Inline-Stil festzulegen, indem ein _String_ direkt der Eigenschaft zugewiesen wird.
In diesem Fall kann der String von [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) gelesen werden.
Die Verwendung von `style` auf diese Weise überschreibt alle Inline-Stile des Elements vollständig.

Um spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern, ist es in der Regel vorzuziehen, individuelle Eigenschaften auf dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt festzulegen.
Zum Beispiel kann man `element.style.backgroundColor = "red"` schreiben.
Eine Stil-Deklaration wird durch das Setzen auf `null` oder einen leeren String zurückgesetzt, z.B. `element.style.color = null`.

Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine Inline-Stil-Deklaration, die über das `style`-Attribut festgelegt wird.

## Beispiele

### Grundlegende Verwendung

Dieses Code-Beispiel zeigt, wie Sie die Inline-Stile eines Elements auslesen können.
In jedem Fall werden die strichbenannten Stileigenschaften mit [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) gelesen und die Camel-Case-Eigenschaften mit dem Punktoperator abgerufen.

#### HTML

Zuerst definieren wir ein {{htmlelement("div")}}-Element und ein verschachteltes Element, die unterschiedliche Inline-Stile definieren, sowohl in Kurzschrift- als auch in Langform.

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

Der folgende Code holt das innere Element, liest dessen Stil und protokolliert die strichbenannten und camel-case-benannten CSS-Stileigenschaften.

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
In jedem Fall sehen wir, dass die Stile, die mit den strich- und camel-case-benannten Eigenschaften gelesen werden, gleich sind.
Wir sehen auch, dass die {{cssxref("border-top")}}-Eigenschaft, die dem `style`-Attribut des Elements entspricht, vorhanden ist und dass für jeden Teil eine Langhandeigenschaft definiert ist ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, und {{cssxref("border-top-width")}}).

{{EmbedLiveSample("Basic usage", "100", "280")}}

Beachten Sie, dass `font-weight` auf den `CSSStyleProperties` definiert ist (wie alle anderen CSS-Eigenschaften, obwohl wir sie nicht protokolliert haben).
Es ist jedoch kein Inline-Stil für das verschachtelte Element, sodass sein Wert auf den leeren String (`""`) gesetzt ist.

### Aufzählung von Stilinformationen

Dieses Beispiel demonstriert, wie wir die strichbenannten Eigenschaften von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) aufzählen können.

#### HTML

Zuerst definieren wir ein {{htmlelement("div")}}-Element und ein verschachteltes Element, die unterschiedliche Inline-Stile definieren, sowohl in Kurzschrift- als auch in Langform.
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

Der folgende Code durchläuft die aufzählbaren Eigenschaften der `CSSStyleProperties` und protokolliert das Ergebnis.

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
Beachten Sie, dass nur die Langhand-CSS-Eigenschaften des Elements aufzählbare Werte sind (die Inline-Kurzschrift-Eigenschaft wird nicht aufgezählt).

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

In diesem Beispiel werden einige grundlegende Stileigenschaften eines HTML-Absatz-Elements über das Stilobjekt am Element und die CSS-Stileigenschaften dieses Objekts abgerufen und gesetzt, die aus dem DOM abgerufen und gesetzt werden können.
In diesem Fall manipulieren Sie die individuellen Stile direkt.
Sie können auch [`styleSheets`](/de/docs/Web/API/Document/styleSheets) und deren Regeln verwenden, um Stile für ganze Dokumente zu ändern.

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

- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- HTML-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut
