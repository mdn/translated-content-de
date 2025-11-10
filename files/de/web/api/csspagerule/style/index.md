---
title: "CSSPageRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSPageRule/style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`style`** des [`CSSPageRule`](/de/docs/Web/API/CSSPageRule)-Interfaces gibt ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt zurück.
Dies repräsentiert einen [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) für eine CSS {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) und stellt Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite bereit.

## Wert

Ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt mit Eigenschaften, die der zugehörigen {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) entsprechen.

> [!NOTE]
> Frühere Versionen der Spezifikation definierten diese Eigenschaft als [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).
> Überprüfen Sie die untenstehende Kompatibilitätsdaten für Ihren Browser.

## Beispiele

### Untersuchen einer Seitenregel

Dieses Beispiel verwendet die Web-API, um den Inhalt einer {{cssxref("@page")}}-Regel zu inspizieren.

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
  height: 230px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### CSS

Unten definieren wir Stile für die Seite mit einer {{cssxref("@page")}}-Regel.
Wir weisen jeder Margin-Eigenschaft unterschiedliche Werte mit dem `margin`-Shorthand zu und geben auch die `size` an.
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

Die MDN-[Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Infrastruktur kombiniert alle CSS-Blöcke im Beispiel zu einem einzelnen Inline-Stil mit der ID `css-output`, daher verwenden wir zunächst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um dieses Stylesheet zu finden.

```js
const myRules = document.getElementById("css-output").sheet.cssRules;
```

Wir iterieren dann durch die für das Live-Beispiel definierten Regeln und vergleichen sie mit denen vom Typ `CSSPageRule`, da diese `@page`-Regeln entsprechen.
Für die übereinstimmenden Objekte protokollieren wir dann den `style` und alle dessen Werte.

```js
for (const rule of myRules) {
  if (rule instanceof CSSPageRule) {
    log(`${rule.style}`);
    log(`margin: ${rule.style.margin}`);

    // Access properties using CamelCase properties
    log(`marginTop: ${rule.style.marginTop}`);
    log(`marginRight: ${rule.style.marginRight}`);
    log(`marginBottom: ${rule.style.marginBottom}`);
    log(`marginLeft: ${rule.style.marginLeft}`);
    log(`pageOrientation: ${rule.style.pageOrientation}`);

    // Access properties using snake-case properties
    log(`margin-top: ${rule.style["margin-top"]}`);
    log(`margin-right: ${rule.style["margin-right"]}`);
    log(`margin-left: ${rule.style["margin-left"]}`);
    log(`margin-bottom: ${rule.style["margin-bottom"]}`);
    log(`page-orientation: ${rule.style["page-orientation"]}`);

    log(`size: ${rule.style.size}`);
    log("\n");
  }
}
```

#### Ergebnisse

Die Ergebnisse werden unten gezeigt.
Beachten Sie, dass das Objekt ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, aber in einigen Browsern ein `CSSStyleDeclaration` sein kann.
Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften in Camel- und Snake-Case zueinander und zur `@page`-Deklaration passen und dass die `page-orientation` der leere String `""` ist, da es in `@page` nicht definiert ist.

{{EmbedLiveSample("Inspecting a page rule", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
