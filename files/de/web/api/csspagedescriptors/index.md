---
title: CSSPageDescriptors
slug: Web/API/CSSPageDescriptors
l10n:
  sourceCommit: 62ec7fe4fd975429f115e6eeb702735e52cf2203
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Das **`CSSPageDescriptors`** Interface repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/At-rule).

Das Interface stellt Stil-Informationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite bereit. Jede mehrteilige Eigenschaft hat Versionen im camelCase- und snake-case-Format. Das bedeutet, dass Sie beispielsweise auf die `margin-top` CSS-Eigenschaft mit der Syntax `style["margin-top"]` oder `style.marginTop` zugreifen können (wobei `style` ein `CSSPageDescriptor` ist).

Ein `CSSPageDescriptors` Objekt wird über die [`style`](/de/docs/Web/API/CSSPageRule/style) Eigenschaft des `CSSPageRule` Interface erreicht, die wiederum über die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) API gefunden werden kann.

{{InheritanceDiagram}}

## Attribute

_Dieses Interface erbt auch Eigenschaften von seinem Elterninterface [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- `margin` {{experimental_inline}}
  - : Ein String, der die `margin` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `margin-top` {{experimental_inline}}
  - : Ein String, der die `margin-top` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `marginTop` {{experimental_inline}}
  - : Ein String, der die `margin-top` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `margin-right` {{experimental_inline}}
  - : Ein String, der die `margin-right` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `marginRight` {{experimental_inline}}
  - : Ein String, der die `margin-right` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `margin-bottom` {{experimental_inline}}
  - : Ein String, der die `margin-bottom` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `marginBottom` {{experimental_inline}}
  - : Ein String, der die `margin-bottom` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `margin-left` {{experimental_inline}}
  - : Ein String, der die `margin-left` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `marginLeft` {{experimental_inline}}
  - : Ein String, der die `margin-left` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `page-orientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `pageOrientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `size` {{experimental_inline}}
  - : Ein String, der die `size` Eigenschaft der entsprechenden `@page` at-rule darstellt.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elterninterfaces [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

### Untersuchen einer @page-Regel

Dieses Beispiel erhält die `CSSPageDescriptors` für eine {{cssxref("@page")}} at-rule, wenn das Objekt im Browser unterstützt wird, und gibt dann dessen Eigenschaften aus.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 280px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### CSS

Im Folgenden definieren wir Stile für die Seite mittels einer {{cssxref("@page")}} at-rule. Wir ordnen jedem Margin-Eigenschaft unterschiedliche Werte zu, indem wir die `margin` Kurzform verwenden, und geben auch die `size` an. Wir setzen die `page-orientation` nicht. Dadurch können wir sehen, wie die Eigenschaften im Web-API-Objekt abgebildet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Zuerst überprüfen wir, ob `CSSPageDescriptors` im globalen Window-Objekt definiert ist, und loggen, falls nicht, dass das Interface nicht unterstützt wird.

Wenn `CSSPageDescriptors` unterstützt wird, holen wir das Dokument-Stylesheet an Index `1` und dann die `cssRules`, die in diesem Stylesheet definiert sind. Wir müssen dieses Stylesheet abrufen, da das Beispiel in einem separaten Frame mit einem eigenen Stylesheet eingebettet ist (Index `0` ist das CSS für diese Seite).

Wir durchlaufen dann die für das Live-Beispiel definierten Regeln und vergleichen alle, die vom Typ `CSSPageRule` sind, da diese `@page`-Regeln entsprechen. Für die übereinstimmenden Objekte loggen wir dann den `style` sowie alle seine Werte.

```js
if (typeof window.CSSPageDescriptors === "undefined") {
  log("CSSPageDescriptors is not supported on this browser.");
} else {
  // Get stylesheets for example and then get its cssRules
  const myRules = document.styleSheets[1].cssRules;
  for (let i = 0; i < myRules.length; i++) {
    if (myRules[i] instanceof CSSPageRule) {
      log(`${myRules[i].style}`);
      log(`margin: ${myRules[i].style.margin}`);

      // Access properties using CamelCase syntax
      log(`marginTop: ${myRules[i].style.marginTop}`);
      log(`marginRight: ${myRules[i].style.marginRight}`);
      log(`marginBottom: ${myRules[i].style.marginBottom}`);
      log(`marginLeft: ${myRules[i].style.marginLeft}`);
      log(`pageOrientation: ${myRules[i].style.pageOrientation}`);

      // Access properties using snake-case syntax
      log(`margin-top: ${myRules[i].style["margin-top"]}`);
      log(`margin-right: ${myRules[i].style["margin-right"]}`);
      log(`margin-left: ${myRules[i].style["margin-left"]}`);
      log(`margin-bottom: ${myRules[i].style["margin-bottom"]}`);
      log(`page-orientation: ${myRules[i].style["page-orientation"]}`);

      log(`size: ${myRules[i].style.size}`);

      // Log the original CSS text using inherited property: cssText
      log(`cssText: ${myRules[i].style.cssText}`);
      log("\n");
    }
  }
}
```

#### Ergebnisse

Die Ergebnisse sind unten angezeigt. Beachten Sie, dass das `style` Objekt, das oben im Protokoll angezeigt wird, ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, aber in einigen Browsern ein `CSSStyleDeclaration` sein kann. Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften im camelCase- und snake-case-Format miteinander und mit der `@page`-Deklaration übereinstimmen, und dass `page-orientation` der leere String `""` ist, weil es in `@page` nicht definiert ist.

{{EmbedLiveSample("Inspecting a page at-rule", "100%", "350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
