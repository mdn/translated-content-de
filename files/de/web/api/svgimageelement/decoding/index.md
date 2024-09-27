---
title: "SVGImageElement: decoding-Eigenschaft"
short-title: decoding
slug: Web/API/SVGImageElement/decoding
l10n:
  sourceCommit: 511b483843fa33373dd26eabc28beee59b995d01
---

{{APIRef("SVG")}}

Die **`decoding`**-Eigenschaft der [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)-Schnittstelle gibt dem Browser einen Hinweis darauf, ob die Bild-Dekodierung synchron oder asynchron durchgeführt werden soll.

## Wert

Ein String, der den Dekodierungshinweis darstellt. Mögliche Werte sind:

- `"sync"`
  - : Dekodieren Sie das Bild synchron für eine atomare Darstellung mit anderem Inhalt.
- `"async"`
  - : Dekodieren Sie das Bild asynchron und erlauben Sie, dass anderer Inhalt gerendert wird, bevor dieser Vorgang abgeschlossen ist.
- `"auto"`
  - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert, aber verschiedene Browser haben unterschiedliche Standardwerte:
    - Chromium verwendet standardmäßig `"sync"`.
    - Firefox verwendet standardmäßig `"async"`.
    - Safari verwendet standardmäßig `"sync"`, außer in einer kleinen Anzahl von Fällen.

## Nutzungshinweise

Die `decoding`-Eigenschaft gibt dem Browser einen Hinweis darauf, ob die Bild-Dekodierung zusammen mit anderen Aufgaben in einem Schritt (`"sync"`) durchgeführt werden soll, oder ob anderer Inhalt gerendert werden darf, bevor dieser Vorgang abgeschlossen ist (`"async"`). Tatsächlich sind die Unterschiede zwischen den beiden Werten oft schwer zu erkennen, und wo es Unterschiede gibt, gibt es oft einen besseren Weg.

Für Bilder, die im DOM innerhalb des Viewports eingefügt werden, kann `"async"` zu Blinken von ungestaltetem Inhalt führen, während `"sync"` zu kleinen [Jank](/de/docs/Glossary/Jank)-Effekten führen kann. Die Verwendung der [`SVGImageElement.decode()`](/de/docs/Web/API/SVGImageElement/decode)-Methode ist normalerweise ein besserer Weg, eine atomare Darstellung zu erreichen, ohne anderen Inhalt zu blockieren.

Für Bilder, die im DOM außerhalb des Viewports eingefügt werden, dekodieren moderne Browser sie normalerweise, bevor sie ins Sichtfeld gescrollt werden, und es gibt keinen merklichen Unterschied bei der Verwendung eines der beiden Werte.

## Beispiele

Im folgenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, während das Bild heruntergeladen wird. Das Setzen von `decoding` wird dies nicht verhindern.

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

const img = document.createElementNS(SVG_NS, "image");
img.decoding = "sync";
img.setAttribute("href", "img/logo.svg");
svg.appendChild(img);
```

Das Einfügen eines Bildes nach dem Herunterladen kann die `decoding`-Eigenschaft relevanter machen:

```js
async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

const img = document.createElementNS(SVG_NS, "image");
await loadImage("img/logo.svg", img);
// Using `sync` can ensure other content is only updated with the image
img.decoding = "sync";
svg.appendChild(img);
const text = document.createElementNS(SVG_NS, "text");
text.textContent = "Image is fully loaded!";
svg.appendChild(text);
```

Eine bessere Lösung besteht jedoch darin, die [`SVGImageElement.decode()`](/de/docs/Web/API/SVGImageElement/decode)-Methode zu verwenden, um dieses Problem zu lösen. Sie bietet eine Möglichkeit, ein Bild asynchron zu dekodieren und es erst dann in das DOM einzufügen, wenn es vollständig heruntergeladen und dekodiert ist, wodurch das oben erwähnte leere Bildproblem vermieden wird. Dies ist besonders nützlich, wenn Sie ein bestehendes Bild dynamisch gegen ein neues austauschen, und verhindert auch, dass nicht verwandte Darstellungen außerhalb dieses Codes blockiert werden, während das Bild dekodiert wird.

Die Verwendung von `img.decoding = "async"` kann verhindern, dass anderer Inhalt mit der Anzeige verzögert wird, wenn die Dekodierungszeit lang ist:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

const img = document.createElementNS(SVG_NS, "image");
img.decoding = "async";
img.setAttribute("href", "img/logo.svg");
svg.appendChild(img);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`SVGImageElement.decode()`](/de/docs/Web/API/SVGImageElement/decode)-Methode
- Das SVG {{SVGElement("image")}}-Element {{SVGAttr("decoding")}}-Attribut.
