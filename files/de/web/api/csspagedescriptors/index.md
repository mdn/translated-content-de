---
title: CSSPageDescriptors
slug: Web/API/CSSPageDescriptors
l10n:
  sourceCommit: f374254974d51d83187ab5efcc6f1fb7a1bd2cfa
---

{{APIRef("CSSOM")}}

Das **`CSSPageDescriptors`** Interface repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules).

Das Interface stellt Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite bereit. Jede mehrteilige Eigenschaft hat Versionen in Camel- und Snake-Case. Dies bedeutet, dass Sie auf die `margin-top` CSS-Eigenschaft entweder mit der Syntax `style["margin-top"]` oder `style.marginTop` zugreifen können (wobei `style` ein `CSSPageDescriptor` ist).

Ein `CSSPageDescriptors` Objekt wird über die [`style`](/de/docs/Web/API/CSSPageRule/style) Eigenschaft des `CSSPageRule` Interfaces zugegriffen, welches wiederum mit der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) API gefunden werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

Die folgenden Eigenschaftsnamen in Kebab-Case (zugreifbar über [Bracket-Notation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation)) und Camel-Case (zugreifbar über [Dot-Notation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation)) repräsentieren jeweils den Wert eines Deskriptors in der entsprechenden `@page` at-rule:

- `margin`
  - : Ein String, der die `margin` Eigenschaft der entsprechenden `@page` at-rule repräsentiert.
- `margin-top` oder `marginTop`
  - : Ein String, der die `margin-top` Eigenschaft der entsprechenden `@page` at-rule repräsentiert.
- `margin-right` oder `marginRight`
  - : Ein String, der die `margin-right` Eigenschaft der entsprechenden `@page` at-rule repräsentiert.
- `margin-bottom` oder `marginBottom`
  - : Ein String, der die `margin-bottom` Eigenschaft der entsprechenden `@page` at-rule repräsentiert.
- `margin-left` oder `marginLeft`
  - : Ein String, der die `margin-left` Eigenschaft der entsprechenden `@page` at-rule repräsentiert.
- `page-orientation` oder `pageOrientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation` Eigenschaft der entsprechenden `@page` at-rule repräsentiert.
- `size`
  - : Ein String, der die `size` Eigenschaft der entsprechenden `@page` at-rule repräsentiert.

## Instanz-Methoden

_Dieses Interface erbt die Methoden seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

### Untersuchen einer page at-rule

Dieses Beispiel erhält die `CSSPageDescriptors` für eine {{cssxref("@page")}} at-rule, falls das Objekt im Browser unterstützt wird, und gibt dann seine Eigenschaften aus.

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

Unten definieren wir Stile für die Seite mit einer {{cssxref("@page")}} at-rule. Wir weisen jedem Rand eine andere Wertigkeit mit der Kurzform `margin` zu und geben auch die `size` an. Die `page-orientation` setzen wir nicht. Dies ermöglicht es uns, zu sehen, wie die Eigenschaften im Web-API-Objekt abgebildet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Zuerst überprüfen wir, ob `CSSPageDescriptors` im globalen Fensterobjekt definiert ist, und falls nicht, loggen wir, dass das Interface nicht unterstützt wird.

Wenn `CSSPageDescriptors` unterstützt wird, erhalten wir das Ziel-Stylesheet und danach die in diesem Stylesheet definierten `cssRules`. Wir müssen dieses Stylesheet erhalten, da das Beispiel in einem separaten Frame mit eigenem Stylesheet eingebettet ist (Index `0` ist das CSS für diese Seite).

Dann iterieren wir durch die für das Live-Beispiel definierten Regeln und suchen nach solchen vom Typ `CSSPageRule`, da diese den `@page` Regeln entsprechen. Für die übereinstimmenden Objekte loggen wir dann den `style` und alle seine Werte.

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

Die Ergebnisse werden unten angezeigt. Beachten Sie, dass das `style` Objekt, das oben im Protokoll angezeigt wird, ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, aber in einigen Browsern ein `CSSStyleDeclaration` sein kann. Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften in Camel- und Snake-Case übereinstimmen und der `@page` Deklaration entsprechen, und dass `page-orientation` der leere String `""` ist, weil es in `@page` nicht definiert ist.

{{EmbedLiveSample("Inspecting a page at-rule", "100%", "350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
