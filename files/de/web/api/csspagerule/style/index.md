---
title: "CSSPageRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSPageRule/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSPageRule`](/de/docs/Web/API/CSSPageRule)-Schnittstelle enthält ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt, das die in der {{cssxref("@page")}}-Regel verfügbaren Deskriptoren darstellt.

## Wert

Ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt.

> [!NOTE]
> Frühere Versionen der Spezifikation definierten diese Eigenschaft als ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).
> Überprüfen Sie die Kompatibilitätsdaten unten für Ihren Browser.

Obwohl die `style`-Eigenschaft selbst insofern schreibgeschützt ist, dass Sie das `CSSPageDescriptors`-Objekt nicht ersetzen können, können Sie der `style`-Eigenschaft direkt etwas zuweisen, was dem Zuweisen ihrer `cssText`-Eigenschaft entspricht. Sie können das `CSSPageDescriptors`-Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern.

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
Wir weisen jedem Rand-Eigenschaft mit der `margin`-Kurzform unterschiedliche Werte zu und spezifizieren auch die `size`.
Wir setzen nicht die `page-orientation`.
Dies ermöglicht es uns zu sehen, wie die Eigenschaften im Web-API-Objekt zugeordnet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Die MDN [Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Infrastruktur kombiniert alle CSS-Blöcke im Beispiel in einem einzigen Inline-Stil mit der ID `css-output`, daher verwenden wir zuerst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um dieses Blatt zu finden.

```js
const myRules = document.getElementById("css-output").sheet.cssRules;
```

Wir durchlaufen dann die im Live-Beispiel definierten Regeln und suchen die, die vom Typ `CSSPageRule` sind, da diese den `@page`-Regeln entsprechen.
Bei den übereinstimmenden Objekten protokollieren wir dann den `style` und alle seine Werte.

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

Die Ergebnisse werden unten gezeigt. Beachten Sie, dass das Objekt ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, aber in einigen Browsern möglicherweise ein `CSSStyleDeclaration` ist.
Auch die entsprechenden Werte für Eigenschaften im Camel- und Snake-Case stimmen sowohl miteinander als auch mit der `@page`-Deklaration überein, und dass `page-orientation` der leere String `""` ist, da es in der `@page` nicht definiert ist.

{{EmbedLiveSample("Inspecting a page rule", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
