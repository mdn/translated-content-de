---
title: CSSPageDescriptors
slug: Web/API/CSSPageDescriptors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Das **`CSSPageDescriptors`**-Interface repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules).

Das Interface bietet Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite. Jede mehrteilige Eigenschaft hat Versionen in Camel-Case und Snake-Case. Das bedeutet beispielsweise, dass Sie auf die `margin-top`-CSS-Eigenschaft mit der Syntax `style["margin-top"]` oder `style.marginTop` zugreifen können (wobei `style` ein `CSSPageDescriptor` ist).

Ein `CSSPageDescriptors`-Objekt wird über die [`style`](/de/docs/Web/API/CSSPageRule/style)-Eigenschaft des `CSSPageRule`-Interfaces aufgerufen, das wiederum mithilfe der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-API gefunden werden kann.

{{InheritanceDiagram}}

## Attribute

_Dieses Interface erbt auch Eigenschaften seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- `margin`:
  - : Ein String, der die `margin`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `margin-top`:
  - : Ein String, der die `margin-top`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `marginTop`:
  - : Ein String, der die `margin-top`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `margin-right`:
  - : Ein String, der die `margin-right`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `marginRight`:
  - : Ein String, der die `margin-right`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `margin-bottom`:
  - : Ein String, der die `margin-bottom`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `marginBottom`:
  - : Ein String, der die `margin-bottom`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `margin-left`:
  - : Ein String, der die `margin-left`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `marginLeft`:
  - : Ein String, der die `margin-left`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `page-orientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `pageOrientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `size`:
  - : Ein String, der die `size`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

### Untersuchen einer page-At-Regel

In diesem Beispiel wird das `CSSPageDescriptors` für eine {{cssxref("@page")}}-At-Regel abgerufen, sofern das Objekt im Browser unterstützt wird, und dann werden dessen Eigenschaften protokolliert.

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

Nachfolgend definieren wir Stile für die Seite durch eine {{cssxref("@page")}}-At-Regel. Wir weisen unterschiedlichen Rand-Eigenschaften Werte zu, indem wir die `margin`-Kurzform verwenden, und spezifizieren zudem die `size`. Wir setzen die `page-orientation` nicht. Dies ermöglicht uns zu sehen, wie die Eigenschaften im Web-API-Objekt abgebildet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Zuerst überprüfen wir, ob `CSSPageDescriptors` auf dem globalen Window-Objekt definiert ist, und falls nicht, protokollieren wir, dass das Interface nicht unterstützt wird.

Wenn `CSSPageDescriptors` unterstützt wird, holen wir das Ziel-Stylesheet und erhalten dann die `cssRules`, die in diesem Stylesheet definiert sind. Wir müssen dieses Stylesheet abrufen, weil das Beispiel in einem separaten Frame eingebettet ist, der sein eigenes Stylesheet hat (Index `0` ist das CSS für diese Seite).

Dann iterieren wir durch die für das Live-Beispiel definierten Regeln und finden solche, die vom Typ `CSSPageRule` sind, da diese `@page`-Regeln entsprechen. Für die passenden Objekte protokollieren wir dann das `style` und alle seine Werte.

```js
if (typeof window.CSSPageDescriptors === "undefined") {
  log("CSSPageDescriptors is not supported on this browser.");
} else {
  // Get stylesheets for example and then get its cssRules
  const myRules = document.getElementById("css-output").sheet.cssRules;
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

Die Ergebnisse werden unten gezeigt. Beachten Sie, dass das `style`-Objekt oben im Protokoll ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, aber in einigen Browsern ein `CSSStyleDeclaration` sein kann. Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften in Camel- und Snake-Case übereinstimmen und der `@page`-Deklaration entsprechen, und dass `page-orientation` der leere String `""` ist, weil es in `@page` nicht definiert ist.

{{EmbedLiveSample("Untersuchen einer page-At-Regel", "100%", "350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
