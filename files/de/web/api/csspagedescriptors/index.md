---
title: CSSPageDescriptors
slug: Web/API/CSSPageDescriptors
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("CSSOM")}}

Das **`CSSPageDescriptors`** Interface repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule).

Das Interface bietet Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite. Jede mehrteilige Eigenschaft hat Versionen in Camel- und Snake-Case. Das bedeutet zum Beispiel, dass Sie auf die CSS-Eigenschaft `margin-top` mit der Syntax `style["margin-top"]` oder `style.marginTop` zugreifen können (wobei `style` ein `CSSPageDescriptor` ist).

Ein `CSSPageDescriptors`-Objekt wird über die [`style`](/de/docs/Web/API/CSSPageRule/style) Eigenschaft des `CSSPageRule` Interfaces abgerufen, die wiederum über die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) API gefunden werden kann.

{{InheritanceDiagram}}

## Attribute

_Dieses Interface erbt auch Eigenschaften seines Eltern-Interfaces, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- `margin`
  - : Ein String, der die `margin` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `margin-top`
  - : Ein String, der die `margin-top` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `marginTop`
  - : Ein String, der die `margin-top` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `margin-right`
  - : Ein String, der die `margin-right` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `marginRight`
  - : Ein String, der die `margin-right` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `margin-bottom`
  - : Ein String, der die `margin-bottom` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `marginBottom`
  - : Ein String, der die `margin-bottom` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `margin-left`
  - : Ein String, der die `margin-left` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `marginLeft`
  - : Ein String, der die `margin-left` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `page-orientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `pageOrientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `size`
  - : Ein String, der die `size` Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Eltern-Interfaces, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

### Inspizieren einer Page-At-Regel

Dieses Beispiel erhält die `CSSPageDescriptors` für eine {{cssxref("@page")}} At-Regel, falls das Objekt im Browser unterstützt wird, und protokolliert dann dessen Eigenschaften.

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

Unten definieren wir Stile für die Seite unter Verwendung einer {{cssxref("@page")}} At-Regel. Wir weisen jedem Margin-Eigenschaft über die Kurzform `margin` verschiedene Werte zu und spezifizieren auch die `size`. Wir setzen die `page-orientation` nicht. Dies ermöglicht es uns zu sehen, wie die Eigenschaften im Web-API-Objekt abgebildet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Zuerst prüfen wir, ob `CSSPageDescriptors` im globalen Window-Objekt definiert ist, und falls nicht, protokollieren wir, dass das Interface nicht unterstützt wird.

Falls `CSSPageDescriptors` unterstützt wird, holen wir das Dokumenten-Stylesheet bei Index `1` und dann die in diesem Stylesheet definierten `cssRules`. Wir müssen dieses Stylesheet erhalten, weil das Beispiel in einem separaten Frame mit eigenem Stylesheet eingebettet ist (Index `0` ist das CSS für diese Seite).

Wir iterieren dann durch die für das Live-Beispiel definierten Regeln und suchen nach denen vom Typ `CSSPageRule`, da diese den `@page` Regeln entsprechen. Für die passenden Objekte protokollieren wir das `style` und alle dessen Werte.

```js
if (typeof window.CSSPageDescriptors === "undefined") {
  log("CSSPageDescriptors is not supported on this browser.");
} else {
  // Get stylesheets for example and then get its cssRules
  const myRules = document.styleSheets[1].cssRules;
  for (const rule of myRules) {
    if (rule instanceof CSSPageRule) {
      log(`${rule.style}`);
      log(`margin: ${rule.style.margin}`);

      // Access properties using CamelCase syntax
      log(`marginTop: ${rule.style.marginTop}`);
      log(`marginRight: ${rule.style.marginRight}`);
      log(`marginBottom: ${rule.style.marginBottom}`);
      log(`marginLeft: ${rule.style.marginLeft}`);
      log(`pageOrientation: ${rule.style.pageOrientation}`);

      // Access properties using snake-case syntax
      log(`margin-top: ${rule.style["margin-top"]}`);
      log(`margin-right: ${rule.style["margin-right"]}`);
      log(`margin-left: ${rule.style["margin-left"]}`);
      log(`margin-bottom: ${rule.style["margin-bottom"]}`);
      log(`page-orientation: ${rule.style["page-orientation"]}`);

      log(`size: ${rule.style.size}`);

      // Log the original CSS text using inherited property: cssText
      log(`cssText: ${rule.style.cssText}`);
      log("\n");
    }
  }
}
```

#### Ergebnisse

Die Ergebnisse werden unten angezeigt. Beachten Sie, dass das `style` Objekt, das oben im Protokoll angezeigt wird, ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, aber in einigen Browsern ein `CSSStyleDeclaration` sein kann. Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften in Camel- und Snake-Case einander und der `@page` Deklaration entsprechen und dass `page-orientation` die leere Zeichenkette `""` ist, weil es in `@page` nicht definiert ist.

{{EmbedLiveSample("Inspecting a page at-rule", "100%", "350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
