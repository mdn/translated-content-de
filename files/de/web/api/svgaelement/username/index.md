---
title: "SVGAElement: username-Eigenschaft"
short-title: username
slug: Web/API/SVGAElement/username
l10n:
  sourceCommit: c41febcc1658a64561687d36e5b79a89c3f7f676
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`username`**-Eigenschaft der [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Schnittstelle repräsentiert die Username-Komponente des {{SVGAttr("href")}}-Attributs des SVG-Elements {{SVGElement("a")}}.
Wenn die URL keinen Username hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann festgelegt werden, um den Username der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/SVGAElement/host) hat oder ihr Schema `file:` ist, hat das Festlegen dieser Eigenschaft keine Auswirkung. Das Festlegen schreibt außerdem das {{SVGAttr("href")}}-Attribut des Elements als vollständige absolute URL neu.

Der Username wird beim Festlegen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Lesen jedoch nicht prozentdekodiert.

Weitere Informationen finden Sie unter [`URL.username`](/de/docs/Web/API/URL/username).

## Wert

Ein String.

## Beispiele

### Den Username aus einem SVG-Link abrufen

Gegeben sei das folgende SVG:

```html live-sample___svgaelement-username
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://anonymous:flabada@example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-username
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-username
svg {
  width: 200px;
  height: 30px;
}
svg a text {
  fill: blue;
  text-decoration: underline;
}
#log {
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden live-sample___svgaelement-username
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

Wir können den Username des Links auslesen:

```js live-sample___svgaelement-username
const link = document.getElementById("link");

log(`username: "${link.username}"`); // username: "anonymous"
```

{{EmbedLiveSample("svgaelement-username", "100%", "120")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Element {{SVGElement("a")}}
- [`HTMLAnchorElement.username`](/de/docs/Web/API/HTMLAnchorElement/username)
