---
title: "SVGAElement: password-Eigenschaft"
short-title: password
slug: Web/API/SVGAElement/password
l10n:
  sourceCommit: c41febcc1658a64561687d36e5b79a89c3f7f676
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die **`password`**-Eigenschaft des [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Interface stellt die Passwortkomponente des {{SVGElement("a")}}-Elements von SVGs {{SVGAttr("href")}} dar.
Wenn die URL kein Passwort enthält, enthält diese Eigenschaft eine leere Zeichenfolge, `""`.

Diese Eigenschaft kann festgelegt werden, um das Passwort der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/SVGAElement/host) hat oder ihr Schema `file:` ist, hat das Festlegen dieser Eigenschaft keine Auswirkung. Dadurch wird auch das {{SVGAttr("href")}}-Attribut des Elements als vollständige, absolute URL neu geschrieben.

Das Passwort wird beim Festlegen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Lesen jedoch nicht prozentdekodiert.

Weitere Informationen finden Sie unter [`URL.password`](/de/docs/Web/API/URL/password).

## Wert

Eine Zeichenfolge.

## Beispiele

### Abrufen des Passworts aus einem SVG-Link

Gegeben sei das folgende SVG:

```html live-sample___svgaelement-password
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://anonymous:flabada@example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-password
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-password
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

```js hidden live-sample___svgaelement-password
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

Wir können das Passwort des Links lesen:

```js live-sample___svgaelement-password
const link = document.getElementById("link");

log(`password: "${link.password}"`); // password: "flabada"
```

{{EmbedLiveSample("svgaelement-password", "100%", "120")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-{{SVGElement("a")}}-Element
- [`HTMLAnchorElement.password`](/de/docs/Web/API/HTMLAnchorElement/password)
