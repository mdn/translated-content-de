---
title: CSSPageDescriptoren
slug: Web/API/CSSPageDescriptors
l10n:
  sourceCommit: 62ec7fe4fd975429f115e6eeb702735e52cf2203
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Das **`CSSPageDescriptors`**-Interface repräsentiert einen CSS-Deklarationsblock für eine {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/At-rule).

Das Interface bietet Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften für die Seite.
Jede mehrteilige Eigenschaft hat Versionen in Camel- und Snake-Case.
Das bedeutet, dass Sie zum Beispiel die `margin-top` CSS-Eigenschaft mit der Syntax `style["margin-top"]` oder `style.marginTop` (wobei `style` ein `CSSPageDescriptor` ist) aufrufen können.

Ein `CSSPageDescriptors`-Objekt wird über die {{DOMxRef("CSSPageRule.style", "style")}}-Eigenschaft des `CSSPageRule`-Interfaces zugegriffen, das wiederum über die {{DOMxRef("CSSStyleSheet")}}-API gefunden werden kann.

{{InheritanceDiagram}}

## Attribute

_Dieses Interface erbt auch Eigenschaften seines Elternteils, {{domxref("CSSStyleDeclaration")}}._

- `margin` {{experimental_inline}}
  - : Ein String, der die `margin`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `margin-top` {{experimental_inline}}
  - : Ein String, der die `margin-top`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `marginTop` {{experimental_inline}}
  - : Ein String, der die `margin-top`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `margin-right` {{experimental_inline}}
  - : Ein String, der die `margin-right`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `marginRight` {{experimental_inline}}
  - : Ein String, der die `margin-right`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `margin-bottom` {{experimental_inline}}
  - : Ein String, der die `margin-bottom`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `marginBottom` {{experimental_inline}}
  - : Ein String, der die `margin-bottom`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `margin-left` {{experimental_inline}}
  - : Ein String, der die `margin-left`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `marginLeft` {{experimental_inline}}
  - : Ein String, der die `margin-left`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `page-orientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `pageOrientation` {{experimental_inline}}
  - : Ein String, der die `page-orientation`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.
- `size` {{experimental_inline}}
  - : Ein String, der die `size`-Eigenschaft der entsprechenden `@page` At-Regel repräsentiert.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elternteils, {{domxref("CSSStyleDeclaration")}}._

## Beispiele

### Eine Page-At-Regel untersuchen

Dieses Beispiel erhält die `CSSPageDescriptors` für eine {{cssxref("@page")}} At-Regel, falls das Objekt im Browser unterstützt wird, und gibt dann deren Eigenschaften aus.

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

Unten definieren wir Stile für die Seite unter Verwendung einer {{cssxref("@page")}} At-Regel.
Wir weisen jedem Margin-Eigenschaft unterschiedliche Werte zu und verwenden die `margin` Kurzschrift und geben auch die `size` an.
Die `page-orientation` setzen wir nicht.
Dies ermöglicht es uns zu sehen, wie die Eigenschaften im Web API-Objekt abgebildet werden.

```css
@page {
  margin: 1cm 2px 3px 4px;
  /* page-orientation: upright; */
  size: A4;
}
```

#### JavaScript

Zuerst prüfen wir, ob `CSSPageDescriptors` im globalen Fensterobjekt definiert ist, und falls nicht, loggen wir, dass das Interface nicht unterstützt wird.

Wenn `CSSPageDescriptors` unterstützt wird, holen wir das Dokumenten-Stylesheet bei Index `1` und dann die darin definierten `cssRules`.
Wir müssen dieses Stylesheet holen, weil das Beispiel in einem separaten Frame mit eigenem Stylesheet eingebettet ist (Index `0` ist das CSS für diese Seite).

Dann iterieren wir über die Regeln, die für das Live-Beispiel definiert sind, und prüfen diejenigen, die vom Typ `CSSPageRule` sind, da diese `@page`-Regeln entsprechen.
Für die passenden Objekte loggen wir dann den `style` und all seine Werte.

```js
if (typeof window.CSSPageDescriptors === "undefined") {
  log("CSSPageDescriptors wird in diesem Browser nicht unterstützt.");
} else {
  // Zugriff auf die Stylesheets des Beispiels und dann auf die cssRules
  const myRules = document.styleSheets[1].cssRules;
  for (let i = 0; i < myRules.length; i++) {
    if (myRules[i] instanceof CSSPageRule) {
      log(`${myRules[i].style}`);
      log(`margin: ${myRules[i].style.margin}`);

      // Zugriff auf die Eigenschaften mit CamelCase-Syntax
      log(`marginTop: ${myRules[i].style.marginTop}`);
      log(`marginRight: ${myRules[i].style.marginRight}`);
      log(`marginBottom: ${myRules[i].style.marginBottom}`);
      log(`marginLeft: ${myRules[i].style.marginLeft}`);
      log(`pageOrientation: ${myRules[i].style.pageOrientation}`);

      // Zugriff auf die Eigenschaften mit Snake-Case-Syntax
      log(`margin-top: ${myRules[i].style["margin-top"]}`);
      log(`margin-right: ${myRules[i].style["margin-right"]}`);
      log(`margin-left: ${myRules[i].style["margin-left"]}`);
      log(`margin-bottom: ${myRules[i].style["margin-bottom"]}`);
      log(`page-orientation: ${myRules[i].style["page-orientation"]}`);

      log(`size: ${myRules[i].style.size}`);

      // Log der originalen CSS-Texte unter Verwendung der geerbten Eigenschaft: cssText
      log(`cssText: ${myRules[i].style.cssText}`);
      log("\n");
    }
  }
}
```

#### Ergebnisse

Die Ergebnisse sind unten angezeigt.
Beachten Sie, dass das `style`-Objekt oben im Log ein `CSSPageDescriptors` sein sollte, um der aktuellen Spezifikation zu entsprechen, aber in einigen Browsern ein `CSSStyleDeclaration` sein kann.
Beachten Sie auch, dass die entsprechenden Werte für Eigenschaften in Camel- und Snake-Case miteinander und der `@page`-Deklaration übereinstimmen und dass `page-orientation` der leere String `""` ist, da es in `@page` nicht definiert ist.

{{EmbedLiveSample("Eine Page-At-Regel untersuchen", "100%", "350px")}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
