---
title: "SVGImageElement: decode()-Methode"
short-title: decode()
slug: Web/API/SVGImageElement/decode
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{APIRef("SVG")}}

Die **`decode()`**-Methode des
{{domxref("SVGImageElement")}}-Interfaces initiiert das asynchrone Dekodieren eines Bildes
und gibt ein {{jsxref('Promise')}} zurück, das gelöst wird, sobald das Bild dekodiert ist und es sicher ist, es dem DOM hinzuzufügen.

## Syntax

```js-nolint
decode()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich mit `undefined` erfüllt, sobald die Bilddaten bereit sind, verwendet zu werden, zum Beispiel durch Anhängen an das DOM, Ersetzen eines vorhandenen Bildes usw.

### Ausnahmen

Keine.

## Beispiele

Im untenstehenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, während das Bild heruntergeladen wird:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

const img = document.createElementNS(SVG_NS, "image");
img.src = "img/logo.svg";
svg.appendChild(img);
```

Die Verwendung von `decode()` verzögert das Einfügen des Bildes in das DOM, bis es vollständig heruntergeladen und dekodiert ist, und vermeidet so das Problem des leeren Bildes:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

async function getImage() {
  const img = document.createElementNS(SVG_NS, "image");
  img.src = "img/logo.svg";
  await img.decode();
  svg.appendChild(img);
  const text = document.createElementNS(SVG_NS, "text");
  text.textContent = "Image is fully loaded!";
  svg.appendChild(text);
}
```

Dies ist besonders nützlich, wenn Sie ein vorhandenes Bild dynamisch gegen ein neues austauschen, und verhindert auch, dass nicht zusammenhängende Neuzeichnungen außerhalb dieses Codes blockiert werden, während das Bild dekodiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLImageElement.decode()")}}: Das gleiche, aber für HTML- `<img>`-Elemente
- [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
