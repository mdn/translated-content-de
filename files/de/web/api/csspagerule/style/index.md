---
title: "CSSPageRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSPageRule/style
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSPageRule`](/de/docs/Web/API/CSSPageRule)-Schnittstelle gibt ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt zurück.
Dies stellt einen [CSS-Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) für eine CSS-{{cssxref("@page")}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) dar und bietet Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite.

## Wert

Ein [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors)-Objekt mit Eigenschaften, die der zugehörigen {{cssxref("@page")}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) entsprechen.

> [!NOTE]
> Frühere Versionen der Spezifikation definierten diese Eigenschaft als [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).
> Überprüfen Sie die unten stehenden Kompatibilitätsdaten für Ihren Browser.

## Beispiele

### Eine @page-Regel inspizieren

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

Unten definieren wir Stile für die Seite mithilfe einer {{cssxref("@page")}}-Regel.
Wir weisen unterschiedliche Werte für jede `margin`-Eigenschaft mit der Kurzform `margin` zu und geben auch die `size` an.
Die Eigenschaft `page-orientation` wird nicht gesetzt.
So können wir sehen, wie die Eigenschaften im Web-API-Objekt abgebildet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Der Code greift zuerst auf das Stylesheet im Dokument an Index `1` zu und ruft dann die `cssRules` ab, die in diesem Stylesheet definiert sind.
Wir müssen dieses Stylesheet abrufen, weil das Beispiel in einem separaten Frame mit einem eigenen Stylesheet eingebettet ist (Index `0` ist das CSS für diese Seite).

```js
const myRules = document.styleSheets[1].cssRules;
```

Wir durchlaufen dann die Regeln, die für das Live-Beispiel definiert sind, und filtern diejenigen, die vom Typ `CSSPageRule` sind, da diese den `@page`-Regeln entsprechen.
Für die passenden Objekte protokollieren wir anschließend das `style` und alle seine Werte.

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

Die Ergebnisse werden unten angezeigt.
Beachten Sie, dass das Objekt ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, in einigen Browsern jedoch möglicherweise ein `CSSStyleDeclaration` ist.
Beachten Sie außerdem, dass die entsprechenden Werte für Eigenschaften in CamelCase und SnakeCase einander sowie der `@page`-Deklaration entsprechen und dass `page-orientation` eine leere Zeichenkette `""` ist, da es in `@page` nicht definiert wurde.

{{EmbedLiveSample("Inspecting a page rule", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
