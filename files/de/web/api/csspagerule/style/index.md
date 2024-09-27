---
title: "CSSPageRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSPageRule/style
l10n:
  sourceCommit: 474a7c0e7bbb5f89b6dcc15cff75f06338457da2
---

{{APIRef("CSSOM")}}

Die **`style`**-Eigenschaft der schreibgeschützten [`CSSPageRule`](/de/docs/Web/API/CSSPageRule)-Schnittstelle gibt ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt zurück. Dies repräsentiert einen [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) für eine CSS-{{cssxref("@page")}}-[At-Regel](/de/docs/Web/CSS/At-rule) und stellt Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite bereit.

## Wert

Ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt mit Eigenschaften, die der zugehörigen {{cssxref("@page")}}-[At-Regel](/de/docs/Web/CSS/At-rule) entsprechen.

> [!NOTE]
> Frühere Versionen der Spezifikation definierten diese Eigenschaft als [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).
> Prüfen Sie die Kompatibilitätsdaten unten für Ihren Browser.

## Beispiele

### Untersuchen einer Seitenregel

Dieses Beispiel verwendet die Web API, um den Inhalt einer {{cssxref("@page")}}-Regel zu inspizieren.

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

Unten definieren wir Stile für die Seite unter Verwendung einer {{cssxref("@page")}}-Regel. Wir weisen jedem Randattribut unterschiedliche Werte unter Verwendung der `margin`-Kurzform zu und spezifizieren auch die `size`. Wir setzen die `page-orientation` nicht fest. Dies ermöglicht es uns zu sehen, wie die Eigenschaften im Web API-Objekt abgebildet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Der Code erhält zunächst das Stylesheet des Dokuments an der Position `1` und dann die `cssRules`, die in diesem Stylesheet definiert sind. Wir müssen dieses Stylesheet holen, weil das Beispiel in einem separaten Rahmen mit eigenem Sheet eingebettet ist (Index `0` ist das CSS für diese Seite).

```js
const myRules = document.styleSheets[1].cssRules;
```

Wir durchlaufen dann die für das Live-Beispiel definierten Regeln und vergleichen alle, die vom Typ `CSSPageRule` sind, da diese `@page`-Regeln entsprechen. Für die passenden Objekte protokollieren wir dann den `style` und alle seine Werte.

```js
for (let i = 0; i < myRules.length; i++) {
  if (myRules[i] instanceof CSSPageRule) {
    log(`${myRules[i].style}`);
    log(`margin: ${myRules[i].style.margin}`);

    // Access properties using CamelCase properties
    log(`marginTop: ${myRules[i].style.marginTop}`);
    log(`marginRight: ${myRules[i].style.marginRight}`);
    log(`marginBottom: ${myRules[i].style.marginBottom}`);
    log(`marginLeft: ${myRules[i].style.marginLeft}`);
    log(`pageOrientation: ${myRules[i].style.pageOrientation}`);

    // Access properties using snake-case properties
    log(`margin-top: ${myRules[i].style["margin-top"]}`);
    log(`margin-right: ${myRules[i].style["margin-right"]}`);
    log(`margin-left: ${myRules[i].style["margin-left"]}`);
    log(`margin-bottom: ${myRules[i].style["margin-bottom"]}`);
    log(`page-orientation: ${myRules[i].style["page-orientation"]}`);

    log(`size: ${myRules[i].style.size}`);
    log("\n");
  }
}
```

#### Ergebnisse

Die Ergebnisse sind unten dargestellt. Beachten Sie, dass das Objekt ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, aber in einigen Browsern möglicherweise ein `CSSStyleDeclaration` ist. Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften sowohl in camel- als auch snake-case einander und der `@page`-Deklaration entsprechen und dass `page-orientation` die leere Zeichenfolge `""` ist, weil es in `@page` nicht definiert ist.

{{EmbedLiveSample("Untersuchen einer Seitenregel", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
