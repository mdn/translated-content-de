---
title: "CSSPageRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSPageRule/style
l10n:
  sourceCommit: 474a7c0e7bbb5f89b6dcc15cff75f06338457da2
---

{{APIRef("CSSOM")}}

Die **`style`**-Eigenschaft des [`CSSPageRule`](/de/docs/Web/API/CSSPageRule)-Interfaces gibt ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt zurück. Dieses stellt einen [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) für eine CSS-{{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/At-rule) dar und bietet Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite.

## Wert

Ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt mit Eigenschaften, die der zugehörigen {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/At-rule) entsprechen.

> [!NOTE]
> Frühere Versionen der Spezifikation definierten diese Eigenschaft als [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).
> Prüfen Sie die unten stehenden Kompatibilitätsdaten für Ihren Browser.

## Beispiele

### Eine Seitenregel inspizieren

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

Unten definieren wir Stile für die Seite mithilfe einer {{cssxref("@page")}}-Regel. Wir weisen verschiedene Werte für jede Margin-Eigenschaft mithilfe der `margin`-Kurzschrift zu und legen auch die `size` fest. Wir setzen die `page-orientation` nicht fest. Dies ermöglicht es uns zu sehen, wie die Eigenschaften im Web-API-Objekt zugeordnet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Der Code holt zuerst das Dokumentstylesheet an Index `1` und dann die darin definierten `cssRules`. Wir müssen dieses Stylesheet abrufen, weil das Beispiel in einem separaten Rahmen mit eigenem Stylesheet eingebettet ist (Index `0` ist das CSS für diese Seite).

```js
const myRules = document.styleSheets[1].cssRules;
```

Wir iterieren dann durch die für das Live-Beispiel definierten Regeln und filtern solche, die vom Typ `CSSPageRule` sind, da diese den `@page`-Regeln entsprechen. Für die passenden Objekte protokollieren wir dann den `style` und alle seine Werte.

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

Die Ergebnisse werden unten gezeigt. Beachten Sie, dass das Objekt ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, aber in einigen Browsern möglicherweise ein `CSSStyleDeclaration` ist. Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften im Camel- und Snake-Case einander und der `@page`-Deklaration entsprechen, und dass `page-orientation` die leere Zeichenkette `""` ist, weil es in `@page` nicht definiert ist.

{{EmbedLiveSample("Inspecting a page rule", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
