---
title: "SVGImageElement: decode() Methode"
short-title: decode()
slug: Web/API/SVGImageElement/decode
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{APIRef("SVG")}}

Die **`decode()`** Methode des
[`SVGImageElement`](/de/docs/Web/API/SVGImageElement) Interfaces initiiert eine asynchrone Dekodierung eines Bildes und gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, sobald das Bild dekodiert ist und sicher dem DOM hinzugefügt werden kann.

## Syntax

```js-nolint
decode()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit `undefined` erfüllt wird, sobald die Bilddaten bereit zur Nutzung sind, zum Beispiel durch Anhängen an das DOM, Ersetzen eines bestehenden Bildes usw.

### Ausnahmen

Keine.

## Beispiele

Im untenstehenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, da das Bild heruntergeladen wird:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

const img = document.createElementNS(SVG_NS, "image");
img.src = "img/logo.svg";
svg.appendChild(img);
```

Die Verwendung von `decode()` verzögert das Einfügen des Bildes in das DOM, bis es vollständig heruntergeladen und dekodiert ist und vermeidet somit das Problem leerer Bilder:

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

Dies ist besonders nützlich, wenn ein bestehendes Bild dynamisch durch ein neues ersetzt wird, und verhindert auch, dass unzusammenhängende Darstellungen außerhalb dieses Codes blockiert werden, während das Bild dekodiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode): Das Gleiche, aber für HTML `<img>` Elemente
- [Was macht das Bilddekodierungsattribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
