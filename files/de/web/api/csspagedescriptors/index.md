---
title: CSSPageDescriptors
slug: Web/API/CSSPageDescriptors
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`CSSPageDescriptors`**-Schnittstelle repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule).

Die Schnittstelle stellt Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite bereit.
Jede mehrteilige Eigenschaft hat Versionen in Camel- und Snake-Case.
Das bedeutet beispielsweise, dass Sie auf die `margin-top`-CSS-Eigenschaft mit der Syntax `style["margin-top"]` oder `style.marginTop` zugreifen können (wobei `style` ein `CSSPageDescriptor` ist).

Ein `CSSPageDescriptors`-Objekt wird über die [`style`](/de/docs/Web/API/CSSPageRule/style)-Eigenschaft der `CSSPageRule`-Schnittstelle aufgerufen, die wiederum mit der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-API gefunden werden kann.

{{InheritanceDiagram}}

## Attribute

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- `margin` {{experimental_inline}}
  - : Ein String, der die `margin`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.
- `margin-top` {{experimental_inline}}
  - : Ein String, der die `margin-top`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.
- `marginTop` {{experimental_inline}}
  - : Ein String, der die `margin-top`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.
- `margin-right` {{experimental_inline}}
  - : Ein String, der die `margin-right`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.
- `marginRight` {{experimental_inline}}
  - : Ein String, der die `margin-right`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.
- `margin-bottom` {{experimental_inline}}
  - : Ein String, der die `margin-bottom`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.
- `marginBottom` {{experimental_inline}}
  - : Ein String, der die `margin-bottom`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.
- `margin-left` {{experimental_inline}}
  - : Ein String, der die `margin-left`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.
- `marginLeft` {{experimental_inline}}
  - : Ein String, der die `margin-left`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.
- `page-orientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.
- `pageOrientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.
- `size` {{experimental_inline}}
  - : Ein String, der die `size`-Eigenschaft der entsprechenden `@page`-at-rule darstellt.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden ihres Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

### Untersuchen einer page-at-rule

Dieses Beispiel erhält die `CSSPageDescriptors` für eine {{cssxref("@page")}}-at-rule, falls das Objekt im Browser unterstützt wird, und protokolliert dann seine Eigenschaften.

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

Unten definieren wir Stile für die Seite mit einer {{cssxref("@page")}}-at-rule.
Wir weisen jeder Margin-Eigenschaft unterschiedliche Werte mit der `margin`-Kurzform zu und spezifizieren auch die `size`.
Wir setzen die `page-orientation` nicht.
Dies ermöglicht uns zu sehen, wie die Eigenschaften im Web-API-Objekt zugeordnet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Zuerst überprüfen wir, ob `CSSPageDescriptors` im globalen Fensterobjekt definiert ist, und wenn nicht, protokollieren wir, dass die Schnittstelle nicht unterstützt wird.

Falls `CSSPageDescriptors` unterstützt wird, erhalten wir das Dokument-Stilesheet an Index `1` und dann die in diesem Stylesheet definierten `cssRules`.
Wir müssen dieses Stylesheet erhalten, da das Beispiel in einem separaten Rahmen mit eigenem Stylesheet eingebettet ist (Index `0` ist das CSS für diese Seite).

Wir durchlaufen die definierten Regeln für das Live-Beispiel und vergleichen alle, die vom Typ `CSSPageRule` sind, da diese den `@page`-Regeln entsprechen.
Für die passenden Objekte protokollieren wir dann den `style` und alle seine Werte.

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

Die Ergebnisse werden unten gezeigt.
Beachten Sie, dass das `style`-Objekt, das oben im Protokoll angezeigt wird, ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, in einigen Browsern jedoch ein `CSSStyleDeclaration` sein kann.
Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften in Camel- und Snake-Case einander und der `@page`-Deklaration entsprechen und dass `page-orientation` der leere String `""` ist, da es nicht in `@page` definiert ist.

{{EmbedLiveSample("Inspecting a page at-rule", "100%", "350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
