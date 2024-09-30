---
title: CSSPageDescriptors
slug: Web/API/CSSPageDescriptors
l10n:
  sourceCommit: 62ec7fe4fd975429f115e6eeb702735e52cf2203
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`CSSPageDescriptors`** Schnittstelle repräsentiert einen CSS-Deklarationsblock für ein {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/At-rule).

Die Schnittstelle bietet Stilinformationen und verschiedene stilbezogene Methoden und Eigenschaften für die Seite an.
Jede mehrteilige Eigenschaft hat Versionen in Camel-Case und Snake-Case.
Das bedeutet, dass Sie beispielsweise auf die CSS-Eigenschaft `margin-top` mit der Syntax `style["margin-top"]` oder `style.marginTop` zugreifen können (wobei `style` ein `CSSPageDescriptor` ist).

Ein `CSSPageDescriptors` Objekt wird über die [`style`](/de/docs/Web/API/CSSPageRule/style) Eigenschaft der `CSSPageRule` Schnittstelle aufgerufen, die wiederum mit der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) API gefunden werden kann.

{{InheritanceDiagram}}

## Attribute

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Objekt, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- `margin` {{experimental_inline}}
  - : Ein String, der die `margin`-Eigenschaft der entsprechenden `@page` Regel darstellt.
- `margin-top` {{experimental_inline}}
  - : Ein String, der die `margin-top` Eigenschaft der entsprechenden `@page` Regel darstellt.
- `marginTop` {{experimental_inline}}
  - : Ein String, der die `margin-top` Eigenschaft der entsprechenden `@page` Regel darstellt.
- `margin-right` {{experimental_inline}}
  - : Ein String, der die `margin-right` Eigenschaft der entsprechenden `@page` Regel darstellt.
- `marginRight` {{experimental_inline}}
  - : Ein String, der die `margin-right` Eigenschaft der entsprechenden `@page` Regel darstellt.
- `margin-bottom` {{experimental_inline}}
  - : Ein String, der die `margin-bottom` Eigenschaft der entsprechenden `@page` Regel darstellt.
- `marginBottom` {{experimental_inline}}
  - : Ein String, der die `margin-bottom` Eigenschaft der entsprechenden `@page` Regel darstellt.
- `margin-left` {{experimental_inline}}
  - : Ein String, der die `margin-left` Eigenschaft der entsprechenden `@page` Regel darstellt.
- `marginLeft` {{experimental_inline}}
  - : Ein String, der die `margin-left` Eigenschaft der entsprechenden `@page` Regel darstellt.
- `page-orientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation` Eigenschaft der entsprechenden `@page` Regel darstellt.
- `pageOrientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation` Eigenschaft der entsprechenden `@page` Regel darstellt.
- `size` {{experimental_inline}}
  - : Ein String, der die `size` Eigenschaft der entsprechenden `@page` Regel darstellt.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden ihres übergeordneten Objekts, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

### Eine `@page` Regel inspizieren

Dieses Beispiel erhält die `CSSPageDescriptors` für eine {{cssxref("@page")}} Regel, wenn das Objekt im Browser unterstützt wird, und protokolliert dann seine Eigenschaften.

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

Unten definieren wir Stile für die Seite mit einer {{cssxref("@page")}} Regel.
Wir weisen jeder Margin-Eigenschaft unterschiedliche Werte zu, indem wir die Kurznotation `margin` verwenden, und spezifizieren auch die `size`.
Wir setzen die `page-orientation` nicht.
Dies ermöglicht es uns zu sehen, wie die Eigenschaften im Web-API-Objekt abgebildet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Zuerst überprüfen wir, ob `CSSPageDescriptors` im globalen window-Objekt definiert ist. Falls nicht, protokollieren wir, dass die Schnittstelle nicht unterstützt wird.

Wenn `CSSPageDescriptors` unterstützt wird, holen wir das Dokument-Stylesheet bei Index `1` und erhalten dann die in diesem Stylesheet definierten `cssRules`.
Wir müssen dieses Stylesheet abrufen, da das Beispiel in einem separaten Frame mit eigenem Stylesheet eingebettet ist (Index `0` ist das CSS für diese Seite).

Wir iterieren dann durch die für das Live-Beispiel definierten Regeln und suchen nach solchen, die vom Typ `CSSPageRule` sind, da diese den `@page` Regeln entsprechen.
Für die übereinstimmenden Objekte protokollieren wir dann den `style` und alle seine Werte.

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

Die Ergebnisse sind unten dargestellt.
Beachten Sie, dass das `style`-Objekt oben im Protokoll ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, aber in einigen Browsern könnte es ein `CSSStyleDeclaration` sein.
Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften in Camel-Case und Snake-Case einander und der `@page` Deklaration entsprechen, und dass `page-orientation` die leere Zeichenkette `""` ist, da sie in `@page` nicht definiert ist.

{{EmbedLiveSample("Inspecting a page at-rule", "100%", "350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
