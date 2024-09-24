---
title: "HTMLBaseElement: href-Eigenschaft"
short-title: href
slug: Web/API/HTMLBaseElement/href
l10n:
  sourceCommit: 3eed3a74d2a59d09545b5e56bbfa752865072d4e
---

{{APIRef("HTML DOM")}}

Die **`href`**-Eigenschaft der {{domxref("HTMLBaseElement")}}-Schnittstelle enthält eine Zeichenfolge, die die URL darstellt, die als Basis für [relative URLs](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) verwendet wird.

Sie spiegelt das `href`-Attribut des {{HTMLElement("base")}}-Elements wider.

## Wert

Eine Zeichenfolge, die eine URL enthält, oder die leere Zeichenfolge (`""`), wenn das entsprechende `<base>`-Element das `href`-Attribut nicht enthält.

## Beispiele

### HTML mit Basis-URL

Dieses Beispiel demonstriert, dass das `href`-Attribut in `<base>` in der `href`-Eigenschaft von `HTMLBaseElement` reflektiert wird.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

```css hidden
#log {
  height: 20px;
}
```

#### HTML

```html
<base href="https://developer.mozilla.org/example" />
```

#### JavaScript

```js
const base = document.getElementsByTagName("base")[0];
log(`base.href="${base.href}"`);
```

#### Ergebnis

{{EmbedLiveSample('HTML with base URL', '100','50px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
