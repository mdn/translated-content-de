---
title: CSSPageDescriptors
slug: Web/API/CSSPageDescriptors
l10n:
  sourceCommit: 56bbf59f4ea2566d64ad2e5c669a7a597626b7f3
---

{{APIRef("CSSOM")}}

Das **`CSSPageDescriptors`** Interface repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule).

Das Interface bietet Stil-Informationen sowie verschiedene Methoden und Eigenschaften, die mit Stilistik in Verbindung stehen, für die Seite an.
Jede mehrwortige Eigenschaft hat sowohl camel-case- als auch snake-case-Versionen.
Das bedeutet, dass Sie auf die `margin-top` CSS-Eigenschaft entweder über die Syntax `style["margin-top"]` oder `style.marginTop` zugreifen können (wobei `style` ein `CSSPageDescriptor` ist).

Ein `CSSPageDescriptors`-Objekt wird über die [`style`](/de/docs/Web/API/CSSPageRule/style) Eigenschaft des `CSSPageRule`-Interfaces zugegriffen, das wiederum über die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) API gefunden werden kann.

{{InheritanceDiagram}}

## Attribute

_Dieses Interface erbt auch Eigenschaften seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- `margin`
  - : Ein String, der die `margin`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `margin-top`
  - : Ein String, der die `margin-top`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `marginTop`
  - : Ein String, der die `margin-top`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `margin-right`
  - : Ein String, der die `margin-right`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `marginRight`
  - : Ein String, der die `margin-right`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `margin-bottom`
  - : Ein String, der die `margin-bottom`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `marginBottom`
  - : Ein String, der die `margin-bottom`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `margin-left`
  - : Ein String, der die `margin-left`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `marginLeft`
  - : Ein String, der die `margin-left`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `page-orientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `pageOrientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.
- `size`
  - : Ein String, der die `size`-Eigenschaft der entsprechenden `@page`-At-Regel repräsentiert.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

### Untersuchen einer At-Regel

Dieses Beispiel erhält die `CSSPageDescriptors` für eine {{cssxref("@page")}}-At-Regel, sofern das Objekt im Browser unterstützt wird, und protokolliert dann seine Eigenschaften.

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

Unten definieren wir Stile für die Seite unter Verwendung einer {{cssxref("@page")}}-At-Regel.
Wir weisen verschiedene Werte für jede Margeneigenschaft mit der `margin`-Kurzform zu und spezifizieren auch die `size`.
Wir setzen die `page-orientation` nicht.
Dies ermöglicht es uns zu sehen, wie die Eigenschaften im Web-API-Objekt zugeordnet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Zuerst prüfen wir, ob `CSSPageDescriptors` im globalen Fensterobjekt definiert ist. Falls nicht, protokollieren wir, dass das Interface nicht unterstützt wird.

Wenn `CSSPageDescriptors` unterstützt wird, holen wir das Ziel-Stylesheet und dann die `cssRules`, die in diesem Stylesheet definiert sind.
Wir müssen dieses Stylesheet erhalten, da das Beispiel in einem separaten Frame mit eigenem Stylesheet eingebettet ist (Index `0` ist das CSS für diese Seite).

Wir durchlaufen dann die Regeln, die für das Live-Beispiel definiert sind und stimmen alle mit Typ `CSSPageRule` ab, da diese den `@page`-Regeln entsprechen.
Für die passenden Objekte protokollieren wir dann den `style` und alle seine Werte.

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

Die Ergebnisse sind unten angezeigt.
Beachten Sie, dass das `style`-Objekt, das oben im Protokoll angezeigt wird, ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, jedoch in einigen Browsern ein `CSSStyleDeclaration` sein kann.
Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften in camel- und snake-case übereinstimmen und mit der `@page`-Deklaration korrelieren, und dass `page-orientation` der leere String `""` ist, da es in `@page` nicht definiert ist.

{{EmbedLiveSample("Untersuchen einer At-Regel", "100%", "350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
