---
title: "HTMLAreaElement: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/HTMLAreaElement/hostname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.hostname`**-Eigenschaft ist eine Zeichenkette, die die Domain der URL enthält.

## Wert

Eine Zeichenkette, die die Domain der URL enthält, die mit dem `area`-Element verknüpft ist.
Sie kann sowohl als Setter als auch als Getter verwendet werden.

## Beispiele

```html
<textarea id="log" rows="4" cols="100"></textarea>
<map name="infographic">
  <area
    id="area1"
    shape="rect"
    coords="184,6,253,27"
    href="/de/docs/HTMLAreaElement"
    target="_blank"
    alt="Mozilla" />
  <area
    id="area2"
    shape="circle"
    coords="130,136,60"
    href="https://coolexample.com/"
    target="_blank"
    alt="MDN" />
</map>
```

```js
// Ein Element befindet sich im Dokument
const area1 = document.getElementById("area1");
const area2 = document.getElementById("area2");

const log = document.getElementById("log");
log.textContent = `area1 hostname: ${area1.hostname} \n`; // 'developer.mozilla.org'
log.textContent += `area2 hostname: ${area2.hostname}`; // 'coolexample.com'
```

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("HTMLAreaElement")}}-Schnittstelle, zu der es gehört.
