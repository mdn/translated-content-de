---
title: "HTMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: 6ec00da93f656e1386f27507291bc6431540d97a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt den _Inline_-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) eines Elements in Form eines dynamischen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts zurück.
Dieses Objekt kann verwendet werden, um die Inline-Stile eines Elements zu lesen und zu setzen.

## Wert

Ein dynamisches [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) (von dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist) zurück.
> Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Unterstützung durch Browser.

Obwohl die `style`-Eigenschaft selbst schreibgeschützt ist, d.h. Sie können das `CSSStyleProperties`-Objekt nicht ersetzen, können Sie dennoch direkt auf die `style`-Eigenschaft zugreifen, was dem Zuweisen zur [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft entspricht. Sie können das `CSSStyleProperties`-Objekt auch mithilfe der Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern.

## Beschreibung

Die Werte der Inline-Stile, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Elements festgelegt sind, werden durch entsprechende Eigenschaften des zurückgegebenen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts widergespiegelt.

> [!NOTE]
> [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) verfügt über Bindestrich-benannte und entsprechende {{Glossary("camel_case", "camelCase")}} benannte Eigenschaften für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties) (nicht nur für die mit Inline-Stilen).
> Eigenschaften, die keinen entsprechenden Inline-Stil haben, werden auf `""` gesetzt.

Abkürzungs-CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften erweitert.
Zum Beispiel würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt.

Um spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern, ist es im Allgemeinen vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zu setzen.
Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.
Eine Stil-Deklaration wird durch Festlegen auf `null` oder eine leere Zeichenkette zurückgesetzt, z.B. `element.style.color = null`.

Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine Inline-Stil-Deklaration, die über das `style`-Attribut gesetzt wird.

## Beispiele

### Grundlegende Verwendung

Dieses Codebeispiel zeigt, wie Sie die Inline-Stile eines Elements lesen können.
In jedem Fall werden die Bindestrich-benannten Stil-Eigenschaften mit [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) gelesen und die camelCase-Eigenschaften mit dem Punkt-Operator abgerufen.

#### HTML

Zuerst definieren wir ein {{htmlelement("div")}}-Element und ein verschachteltes Element, die unterschiedliche Inline-Stile definieren, sowohl in abgekürzter als auch in Langform.

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

Der folgende Code ruft das innere Element ab, liest seinen Stil und protokolliert die Bindestrich-benannten und camelCase-benannten CSS-Stileigenschaften.

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

Das Ergebnis wird unten angezeigt.
In jedem Fall sehen wir, dass die Stile, die mithilfe der Bindestrich- und camelCase-benannten Eigenschaften gelesen werden, gleich sind.
Wir sehen auch, dass die {{cssxref("border-top")}}-Eigenschaft, die dem `style`-Attribut des Elements entspricht, vorhanden ist und dass für jeden Teil eine Langform-Eigenschaft definiert ist ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}).

{{EmbedLiveSample("Basic usage", "100", "280")}}

Beachten Sie, dass `font-weight` auf den `CSSStyleProperties` definiert ist (wie alle anderen CSS-Eigenschaften, obwohl wir sie nicht protokolliert haben).
Es ist jedoch kein Inline-Stil für das verschachtelte Element, daher ist sein Wert auf die leere Zeichenkette (`""`) gesetzt.

### Stilinformatio­nen enumerieren

Dieses Beispiel zeigt, wie wir die Bindestrich-benannten Eigenschaften von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) enumerieren können.

#### HTML

Zuerst definieren wir ein {{htmlelement("div")}}-Element und ein verschachteltes Element, die unterschiedliche Inline-Stile definieren, sowohl in abgekürzter als auch in Langform.
Dies ist dasselbe HTML wie im vorherigen Beispiel.

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

Das Ergebnis wird unten angezeigt.
Beachten Sie, dass nur die Langform-CSS-Eigenschaften des Elements enumerierte Werte sind (die Inline-Abkürzungseigenschaft wird nicht enumeriert).

{{EmbedLiveSample("Enumerating style information", "100", "180")}}

### Aktualisierung des Rahmenstils

```html
<div id="box"></div>

<button id="btn1">Make border 20px-wide</button>
<button id="btn2">Make border 5px-wide</button>
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

### Manipulieren von Stilen

In diesem Beispiel werden einige grundlegende Stileigenschaften eines HTML-Absatzelements über das Stilobjekt auf dem Element und die CSS-Stileigenschaften dieses Objekts, die aus dem DOM abgerufen und gesetzt werden können, zugegriffen. In diesem Fall manipulieren Sie die einzelnen Stile direkt. Sie können auch [`styleSheets`](/de/docs/Web/API/Document/styleSheets) und deren Regeln verwenden, um Stile für ganze Dokumente zu ändern.

```html
<p id="pid">Some text</p>
<p><button type="button">Change text</button></p>
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

- [Verwendung dynamischer Stilinformationsn](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- HTML-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut
