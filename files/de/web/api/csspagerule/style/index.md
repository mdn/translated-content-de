---
title: "CSSPageRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSPageRule/style
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSPageRule`](/de/docs/Web/API/CSSPageRule)-Schnittstelle gibt ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt zurück.
Dies repräsentiert einen [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) für eine CSS {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und stellt Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite bereit.

## Wert

Ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt mit Eigenschaften, die der zugehörigen {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) entsprechen.

> [!NOTE]
> Frühere Versionen der Spezifikation definierten diese Eigenschaft als eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).
> Prüfen Sie die unten stehenden Kompatibilitätsdaten für Ihren Browser.

## Beispiele

### Untersuchen einer Seitenregel

Dieses Beispiel verwendet die Web-API, um den Inhalt einer {{cssxref("@page")}}-Regel zu untersuchen.

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
Wir weisen für jede Rand-Eigenschaft unterschiedliche Werte mit dem `margin`-Kurzschrift zu und spezifizieren auch die `size`.
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

Der Code erhält zuerst das Dokument-Stylesheet an Index `1` und dann die `cssRules`, die in diesem Stylesheet definiert sind.
Wir müssen dieses Stylesheet erhalten, weil das Beispiel in einem separaten Frame mit einem eigenen Sheet eingebettet ist (Index `0` ist das CSS für diese Seite).

```js
const myRules = document.styleSheets[1].cssRules;
```

Dann iterieren wir durch die für das Live-Beispiel definierten Regeln und vergleichen alle, die vom Typ `CSSPageRule` sind, da diese den `@page`-Regeln entsprechen.
Für die übereinstimmenden Objekte protokollieren wir dann den `style` und alle seine Werte.

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

Die Ergebnisse werden unten angezeigt.
Beachten Sie, dass das Objekt ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, aber in einigen Browsern möglicherweise ein `CSSStyleDeclaration` ist.
Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften in Camel- und Snake-Case einander und der `@page`-Deklaration entsprechen und dass `page-orientation` der leere String `""` ist, weil er nicht in `@page` definiert ist.

{{EmbedLiveSample("Inspección einer Seitenregel", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
