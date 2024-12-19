---
title: "HTMLBaseElement: href-Eigenschaft"
short-title: href
slug: Web/API/HTMLBaseElement/href
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`href`**-Eigenschaft des [`HTMLBaseElement`](/de/docs/Web/API/HTMLBaseElement)-Interfaces enthält einen String, der die URL darstellt, die als Basis für [relative URLs](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) genutzt wird.

Sie spiegelt das `href`-Attribut des {{HTMLElement("base")}}-Elements wider.

## Wert

Ein String, der eine URL enthält, oder der leere String (`""`), wenn das entsprechende `<base>`-Element das `href`-Attribut nicht umfasst.

## Beispiele

### HTML mit Basis-URL

Dieses Beispiel zeigt, dass das `href`-Attribut in `<base>` in der `href`-Eigenschaft des `HTMLBaseElement` widergespiegelt wird.

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
