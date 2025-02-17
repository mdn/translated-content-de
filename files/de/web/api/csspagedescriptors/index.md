---
title: CSSPageDescriptors
slug: Web/API/CSSPageDescriptors
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Das **`CSSPageDescriptors`**-Interface repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule).

Das Interface stellt Stil-Informationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite zur Verfügung. Jede Eigenschaft mit mehreren Wörtern hat Versionen in Camel- und Snake-Case. Dies bedeutet, dass Sie beispielsweise auf die CSS-Eigenschaft `margin-top` sowohl mit der Syntax `style["margin-top"]` als auch mit `style.marginTop` zugreifen können (wobei `style` ein `CSSPageDescriptor` ist).

Ein `CSSPageDescriptors`-Objekt kann über die [`style`](/de/docs/Web/API/CSSPageRule/style)-Eigenschaft des `CSSPageRule`-Interfaces aufgerufen werden, welches wiederum mithilfe der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-API gefunden werden kann.

{{InheritanceDiagram}}

## Attribute

_Dieses Interface erbt auch Eigenschaften seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- `margin` {{experimental_inline}}
  - : Ein String, der die `margin`-Eigenschaft der entsprechenden `@page`-Regel darstellt.
- `margin-top` {{experimental_inline}}
  - : Ein String, der die `margin-top`-Eigenschaft der entsprechenden `@page`-Regel darstellt.
- `marginTop` {{experimental_inline}}
  - : Ein String, der die `margin-top`-Eigenschaft der entsprechenden `@page`-Regel darstellt.
- `margin-right` {{experimental_inline}}
  - : Ein String, der die `margin-right`-Eigenschaft der entsprechenden `@page`-Regel darstellt.
- `marginRight` {{experimental_inline}}
  - : Ein String, der die `margin-right`-Eigenschaft der entsprechenden `@page`-Regel darstellt.
- `margin-bottom` {{experimental_inline}}
  - : Ein String, der die `margin-bottom`-Eigenschaft der entsprechenden `@page`-Regel darstellt.
- `marginBottom` {{experimental_inline}}
  - : Ein String, der die `margin-bottom`-Eigenschaft der entsprechenden `@page`-Regel darstellt.
- `margin-left` {{experimental_inline}}
  - : Ein String, der die `margin-left`-Eigenschaft der entsprechenden `@page`-Regel darstellt.
- `marginLeft` {{experimental_inline}}
  - : Ein String, der die `margin-left`-Eigenschaft der entsprechenden `@page`-Regel darstellt.
- `page-orientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation`-Eigenschaft der entsprechenden `@page`-Regel darstellt.
- `pageOrientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation`-Eigenschaft der entsprechenden `@page`-Regel darstellt.
- `size` {{experimental_inline}}
  - : Ein String, der die `size`-Eigenschaft der entsprechenden `@page`-Regel darstellt.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

### Untersuchen einer @page-Regel

Dieses Beispiel ruft die `CSSPageDescriptors` für eine {{cssxref("@page")}}-Regel ab, wenn das Objekt im Browser unterstützt wird, und protokolliert dann dessen Eigenschaften.

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

Hier definieren wir Stile für die Seite mit einer {{cssxref("@page")}}-Regel. Wir weisen jedem Margin-Attribut unterschiedliche Werte mit der Kurzschreibweise `margin` zu und geben auch die `size` an. Wir legen die `page-orientation` nicht fest. Dadurch können wir sehen, wie die Eigenschaften im Web-API-Objekt zugeordnet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Zuerst prüfen wir, ob `CSSPageDescriptors` als globales Objekt verfügbar ist. Falls nicht, wird protokolliert, dass das Interface nicht unterstützt wird.

Wenn `CSSPageDescriptors` unterstützt wird, greifen wir auf das Stylesheet des Dokuments mit Index `1` zu und rufen die in diesem Stylesheet definierten `cssRules` ab. Dieses Stylesheet muss abgerufen werden, da das Beispiel in einem separaten Frame eingebettet ist, der sein eigenes Stylesheet verwendet (Index `0` enthält das CSS für diese Seite).

Anschließend iterieren wir durch die in diesem Live-Beispiel definierten Regeln und prüfen, ob sie vom Typ `CSSPageRule` sind, da diese `@page`-Regeln entsprechen. Für die passenden Objekte protokollieren wir die `style`-Eigenschaften und ihre Werte.

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

Die Ergebnisse werden unten angezeigt. Beachten Sie, dass das oben im Protokoll angezeigte `style`-Objekt gemäß der aktuellen Spezifikation ein `CSSPageDescriptors` sein sollte, aber in einigen Browsern möglicherweise ein `CSSStyleDeclaration` ist. Beachten Sie auch, dass die Werte für Eigenschaften in Camel- und Snake-Case zueinander und zur `@page`-Deklaration passen und dass `page-orientation` ein leerer String (`""`) ist, da es in `@page` nicht definiert wurde.

{{EmbedLiveSample("Inspecting a page at-rule", "100%", "350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
