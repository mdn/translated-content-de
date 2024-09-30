---
title: "SVGImageElement: decoding-Eigenschaft"
short-title: decoding
slug: Web/API/SVGImageElement/decoding
l10n:
  sourceCommit: 511b483843fa33373dd26eabc28beee59b995d01
---

{{APIRef("SVG")}}

Die **`decoding`**-Eigenschaft des [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)-Interfaces gibt dem Browser einen Hinweis darauf, ob die Bilddecodierung synchron oder asynchron durchgeführt werden soll.

## Wert

Ein String, der den Hinweis zur Decodierung darstellt. Mögliche Werte sind:

- `"sync"`
  - : Dekodieren Sie das Bild synchron für eine atomare Präsentation mit anderen Inhalten.
- `"async"`
  - : Dekodieren Sie das Bild asynchron und erlauben Sie anderen Inhalten das Rendern, bevor dies abgeschlossen ist.
- `"auto"`
  - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert, aber verschiedene Browser haben unterschiedliche Standards:
    - Chromium nutzt standardmäßig `"sync"`.
    - Firefox nutzt standardmäßig `"async"`.
    - Safari nutzt standardmäßig `"sync"` außer in wenigen Umständen.

## Anwendungshinweise

Die `decoding`-Eigenschaft gibt dem Browser einen Hinweis darauf, ob er die Bilddecodierung zusammen mit anderen Aufgaben in einem Schritt (`"sync"`) oder erlauben soll, dass andere Inhalte vor der Fertigstellung gerendert werden (`"async"`). In Wirklichkeit sind die Unterschiede zwischen den beiden Werten oft schwer wahrnehmbar, und wo es Unterschiede gibt, gibt es oft eine bessere Methode.

Für Bilder, die innerhalb des Viewports in den DOM eingefügt werden, kann `"async"` zu Darstellungsproblemen von ungestylten Inhalten führen, während `"sync"` zu kleinen Mengen von [Ruckeln](/de/docs/Glossary/Jank) führen kann. Die Verwendung der [`SVGImageElement.decode()`](/de/docs/Web/API/SVGImageElement/decode)-Methode ist in der Regel eine bessere Möglichkeit, eine atomare Präsentation ohne Verzögerung anderer Inhalte zu erreichen.

Für Bilder, die außerhalb des Viewports in den DOM eingefügt werden, dekodieren moderne Browser sie normalerweise, bevor sie in den Sichtbereich gescrollt werden. Es gibt keinen bemerkbaren Unterschied bei der Verwendung beider Werte.

## Beispiele

Im untenstehenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, während das Bild heruntergeladen wird. Das Setzen von `decoding` wird dies nicht verhindern.

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");

const img = document.createElementNS(SVG_NS, "image");
img.decoding = "sync";
img.setAttribute("href", "img/logo.svg");
svg.appendChild(img);
```

Das Einfügen eines Bildes nach dem Herunterladen kann die Relevanz der `decoding`-Eigenschaft erhöhen:

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

Eine bessere Lösung ist es jedoch, die [`SVGImageElement.decode()`](/de/docs/Web/API/SVGImageElement/decode)-Methode zu verwenden, um dieses Problem zu lösen. Sie bietet eine Möglichkeit, ein Bild asynchron zu dekodieren, wobei das Einfügen in den DOM verzögert wird, bis es vollständig heruntergeladen und dekodiert ist, und somit das oben erwähnte Problem mit dem leeren Bild vermeidet. Dies ist besonders nützlich, wenn Sie ein bestehendes Bild dynamisch durch ein neues ersetzen und verhindert, dass nicht verwandte Darstellungen außerhalb dieses Codes aufgehalten werden, während das Bild dekodiert wird.

Die Verwendung von `img.decoding = "async"` kann verhindern, dass andere Inhalte beim langfristigen Dekodieren nicht angezeigt werden:

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

- Die Methode [`SVGImageElement.decode()`](/de/docs/Web/API/SVGImageElement/decode)
- Das SVG {{SVGElement("image")}}-Element {{SVGAttr("decoding")}}-Attribut.
