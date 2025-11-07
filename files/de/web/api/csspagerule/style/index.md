---
title: "CSSPageRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSPageRule/style
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSSOM")}}

Die **`style`** schreibgeschützte Eigenschaft der Schnittstelle [`CSSPageRule`](/de/docs/Web/API/CSSPageRule) gibt ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt zurück.
Dies stellt einen [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) für eine CSS {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) dar und bietet Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite.

## Wert

Ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt mit Eigenschaften, die der zugehörigen {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) entsprechen.

> [!NOTE]
> Frühere Versionen der Spezifikation definierten diese Eigenschaft als [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).
> Prüfen Sie die Kompatibilitätsdaten unten für Ihren Browser.

## Beispiele

### Untersuchung einer Page-Regel

Dieses Beispiel nutzt die Web-API, um den Inhalt einer {{cssxref("@page")}}-Regel zu untersuchen.

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

Unten definieren wir Stile für die Seite unter Verwendung einer {{cssxref("@page")}}-Regel.
Wir weisen jedem Rand-Eigenschaft einen anderen Wert unter Verwendung der `margin`-Kurzschrift zu und spezifizieren auch die `size`.
Wir setzen die `page-orientation` nicht fest.
Damit können wir sehen, wie die Eigenschaften im Web-API-Objekt zugeordnet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Die MDN-[Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Infrastruktur kombiniert alle CSS-Blöcke im Beispiel zu einem einzigen Inline-Stil mit der ID `css-output`, daher verwenden wir zuerst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um dieses Stylesheet zu finden.

```js
const myRules = document.getElementById("css-output").sheet.cssRules;
```

Dann durchlaufen wir die im Live-Beispiel definierten Regeln und suchen nach solchen vom Typ `CSSPageRule`, da diese den `@page`-Regeln entsprechen.
Für die passenden Objekte protokollieren wir dann den `style` und all seine Werte.

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
Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften in Camel- und Snake-Case einander sowie der `@page`-Deklaration entsprechen und dass `page-orientation` die leere Zeichenfolge `""` ist, da sie in `@page` nicht definiert wurde.

{{EmbedLiveSample("Untersuchung einer Page-Regel", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
