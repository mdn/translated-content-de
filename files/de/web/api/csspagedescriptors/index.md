---
title: CSSPageDescriptors
slug: Web/API/CSSPageDescriptors
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSSOM")}}

Das **`CSSPageDescriptors`** Interface repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rules).

Das Interface stellt Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite bereit. Jede mehrwortige Eigenschaft hat Versionen in camel- und snake-case. Das bedeutet, dass Sie beispielsweise die `margin-top` CSS-Eigenschaft mit der Syntax `style["margin-top"]` oder `style.marginTop` (wobei `style` ein `CSSPageDescriptor` ist) zugreifen können.

Ein `CSSPageDescriptors`-Objekt wird über die [`style`](/de/docs/Web/API/CSSPageRule/style) Eigenschaft des `CSSPageRule` Interfaces zugegriffen, das wiederum mithilfe der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) API gefunden werden kann.

{{InheritanceDiagram}}

## Attribute

_Dieses Interface erbt auch Eigenschaften seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- `margin`
  - : Ein String, der die `margin` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `margin-top`
  - : Ein String, der die `margin-top` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `marginTop`
  - : Ein String, der die `margin-top` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `margin-right`
  - : Ein String, der die `margin-right` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `marginRight`
  - : Ein String, der die `margin-right` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `margin-bottom`
  - : Ein String, der die `margin-bottom` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `marginBottom`
  - : Ein String, der die `margin-bottom` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `margin-left`
  - : Ein String, der die `margin-left` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `marginLeft`
  - : Ein String, der die `margin-left` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `page-orientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `pageOrientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation` Eigenschaft der entsprechenden `@page` at-rule darstellt.
- `size`
  - : Ein String, der die `size` Eigenschaft der entsprechenden `@page` at-rule darstellt.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

### Überprüfen einer page at-rule

Dieses Beispiel erhält die `CSSPageDescriptors` für eine {{cssxref("@page")}} at-rule, falls das Objekt im Browser unterstützt wird, und protokolliert dann seine Eigenschaften.

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

Im Folgenden definieren wir Stile für die Seite unter Verwendung einer {{cssxref("@page")}} at-rule. Wir weisen jedem Margin-Eigenschaft unter Verwendung der `margin` Kurzschreibweise unterschiedliche Werte zu und spezifizieren auch die `size`. Wir setzen die `page-orientation` nicht. Dies ermöglicht uns zu sehen, wie die Eigenschaften im Web-API-Objekt abgebildet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Zuerst prüfen wir, ob `CSSPageDescriptors` im globalen Fensterobjekt definiert ist, und wenn nicht, protokollieren wir, dass das Interface nicht unterstützt wird.

Falls `CSSPageDescriptors` unterstützt wird, holen wir das Ziel-Stylesheet und dann die `cssRules`, die in diesem Stylesheet definiert sind. Wir müssen dieses Stylesheet erhalten, da das Beispiel in einem separaten Frame mit eigenem Stylesheet eingebettet ist (Index `0` ist das CSS für diese Seite).

Dann iterieren wir durch die für das Live-Beispiel definierten Regeln und vergleichen diejenigen, die vom Typ `CSSPageRule` sind, da diese den `@page` Regeln entsprechen. Für die übereinstimmenden Objekte protokollieren wir dann den `style` und alle seine Werte.

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

Die Ergebnisse werden unten gezeigt. Beachten Sie, dass das `style`-Objekt, das oben im Protokoll angezeigt wird, ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, jedoch in einigen Browsern ein `CSSStyleDeclaration` sein kann. Beachten Sie außerdem, dass die entsprechenden Werte für Eigenschaften in camel- und snake-case einander und der `@page` Deklaration entsprechen und dass `page-orientation` der leere String `""` ist, da er in `@page` nicht definiert ist.

{{EmbedLiveSample("Überprüfen einer page at-rule", "100%", "350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
