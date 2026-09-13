---
title: "SVGAElement: origin-Eigenschaft"
short-title: origin
slug: Web/API/SVGAElement/origin
l10n:
  sourceCommit: c41febcc1658a64561687d36e5b79a89c3f7f676
---

{{APIRef("SVG")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`origin`** des [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Interface repräsentiert den {{Glossary("origin", "Ursprung")}} des {{SVGAttr("href")}}-Attributs des SVG-Elements {{SVGElement("a")}}: üblicherweise dessen Schema, Domain und Port.

Die genaue Struktur variiert je nach URL-Typ:

- Bei URLs, die die Schemata `ftp:`, `http:`, `https:`, `ws:` und `wss:` verwenden, folgt auf das [`protocol`](/de/docs/Web/API/SVGAElement/protocol) `//`, gefolgt vom [`host`](/de/docs/Web/API/SVGAElement/host). Wie bei `host` wird der [`port`](/de/docs/Web/API/SVGAElement/port) nur eingeschlossen, wenn er nicht der Standard für das Protokoll ist.
- Bei URLs, die das Schema `file:` verwenden, ist der Wert browserabhängig.
- Bei URLs, die das Schema `blob:` verwenden, ist dies der Ursprung der auf `blob:` folgenden URL, jedoch nur, wenn diese URL das Schema `http:`, `https:` oder `file:` verwendet. Beispielsweise hat `blob:https://mozilla.org` den Ursprung `https://mozilla.org`.

In allen anderen Fällen wird die Zeichenfolge `"null"` zurückgegeben.

Weitere Informationen finden Sie unter [`URL.origin`](/de/docs/Web/API/URL/origin).

## Wert

Eine Zeichenfolge.

## Beispiele

### Den Ursprung eines SVG-Links abrufen

Gegeben sei das folgende SVG:

```html live-sample___svgaelement-origin
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-origin
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-origin
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

```js hidden live-sample___svgaelement-origin
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

Wir können den Ursprung des Links auslesen:

```js live-sample___svgaelement-origin
const link = document.getElementById("link");

log(`origin: "${link.origin}"`); // origin: "https://example.com"
```

{{EmbedLiveSample("svgaelement-origin", "100%", "120")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Element {{SVGElement("a")}}
- [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin)
