---
title: "CSSPageRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSPageRule/style
l10n:
  sourceCommit: 474a7c0e7bbb5f89b6dcc15cff75f06338457da2
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der {{domxref("CSSPageRule")}}-Schnittstelle gibt ein {{domxref("CSSPageDescriptors")}}-Objekt zurück.
Dies stellt einen [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) für eine CSS {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/At-rule) dar und bietet Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite.

## Wert

Ein {{domxref("CSSPageDescriptors")}}-Objekt mit Eigenschaften, die der zugehörigen {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/At-rule) entsprechen.

> [!NOTE]
> Frühere Versionen der Spezifikation definierten diese Eigenschaft als {{domxref("CSSStyleDeclaration")}}.
> Überprüfen Sie die Kompatibilitätsdaten unten für Ihren Browser.

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

Im Folgenden definieren wir Stile für die Seite mit einer {{cssxref("@page")}}-Regel.
Wir vergeben unterschiedliche Werte für jede Rand-Eigenschaft mit der `margin`-Kurzform und spezifizieren auch die `size`.
Wir setzen die `page-orientation` nicht.
Dies ermöglicht uns zu sehen, wie die Eigenschaften im Web-API-Objekt abgebildet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Der Code greift zunächst auf das Stylesheet des Dokuments an Index `1` zu und erhält dann die im Stylesheet definierten `cssRules`.
Wir müssen dieses Stylesheet abrufen, weil das Beispiel in einem separaten Frame mit einem eigenen Stylesheet eingebettet ist (Index `0` ist das CSS für diese Seite).

```js
const myRules = document.styleSheets[1].cssRules;
```

Anschließend iterieren wir durch die für das Live-Beispiel definierten Regeln und vergleichen, ob sie vom Typ `CSSPageRule` sind, da diese `@page`-Regeln entsprechen.
Für die passenden Objekte loggen wir dann den `style` und alle seine Werte.

```js
for (let i = 0; i < myRules.length; i++) {
  if (myRules[i] instanceof CSSPageRule) {
    log(`${myRules[i].style}`);
    log(`margin: ${myRules[i].style.margin}`);

    // Zugriff auf Eigenschaften mit CamelCase-Notation
    log(`marginTop: ${myRules[i].style.marginTop}`);
    log(`marginRight: ${myRules[i].style.marginRight}`);
    log(`marginBottom: ${myRules[i].style.marginBottom}`);
    log(`marginLeft: ${myRules[i].style.marginLeft}`);
    log(`pageOrientation: ${myRules[i].style.pageOrientation}`);

    // Zugriff auf Eigenschaften mit snake-case-Notation
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

Die Ergebnisse werden unten angezeigt.
Beachten Sie, dass das Objekt ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, in einigen Browsern jedoch ein `CSSStyleDeclaration` sein kann.
Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften in Camel- und Snake-Case einander und der `@page`-Deklaration entsprechen und dass `page-orientation` die leere Zeichenkette `""` ist, da es nicht in `@page` definiert ist.

{{EmbedLiveSample("Inspecting a page rule", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
