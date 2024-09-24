---
title: "SVGImageElement: decoding-Eigenschaft"
short-title: decoding
slug: Web/API/SVGImageElement/decoding
l10n:
  sourceCommit: 511b483843fa33373dd26eabc28beee59b995d01
---

{{APIRef("SVG")}}

Die **`decoding`**-Eigenschaft der {{domxref("SVGImageElement")}}-Schnittstelle gibt dem Browser einen Hinweis darauf, ob die Bilddekodierung synchron oder asynchron durchgeführt werden soll.

## Wert

Ein String, der den Dekodierungshinweis darstellt. Mögliche Werte sind:

- `"sync"`
  - : Das Bild synchron dekodieren für eine atomare Darstellung mit anderem Inhalt.
- `"async"`
  - : Das Bild asynchron dekodieren und anderen Inhalt rendern lassen, bevor dies abgeschlossen ist.
- `"auto"`
  - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert, aber verschiedene Browser haben unterschiedliche Standardeinstellungen:
    - Chromium verwendet standardmäßig `"sync"`.
    - Firefox verwendet standardmäßig `"async"`.
    - Safari verwendet standardmäßig `"sync"`, außer in einigen wenigen Umständen.

## Nutzungshinweise

Die `decoding`-Eigenschaft gibt dem Browser einen Hinweis darauf, ob die Bilddekodierung zusammen mit anderen Aufgaben in einem einzigen Schritt (`"sync"`) durchgeführt werden soll oder ob anderer Inhalt vor Abschluss dieses Vorgangs gerendert werden darf (`"async"`). In der Praxis sind die Unterschiede zwischen den beiden Werten oft schwer wahrzunehmen, und wo es Unterschiede gibt, gibt es oft eine bessere Lösung.

Bei Bildern, die in das DOM innerhalb des Viewports eingefügt werden, kann `"async"` zu ungestylten Inhaltssprüngen führen, während `"sync"` zu geringen [Rucklern](/de/docs/Glossary/Jank) führen kann. Die Verwendung der Methode {{domxref("SVGImageElement.decode()")}} ist in der Regel eine bessere Möglichkeit, eine atomare Darstellung zu erreichen, ohne anderen Inhalt zu blockieren.

Für Bilder, die außerhalb des Viewports in das DOM eingefügt werden, dekodieren moderne Browser sie normalerweise, bevor sie in den sichtbaren Bereich gescrollt werden, und es gibt keinen bemerkbaren Unterschied, welches der beiden Werte verwendet wird.

## Beispiele

Im folgenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, während das Bild heruntergeladen wird. Das Setzen von `decoding` wird das nicht verhindern.

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
// Die Verwendung von `sync` kann sicherstellen, dass anderer Inhalt nur zusammen mit dem Bild aktualisiert wird
img.decoding = "sync";
svg.appendChild(img);
const text = document.createElementNS(SVG_NS, "text");
text.textContent = "Bild ist vollständig geladen!";
svg.appendChild(text);
```

Eine bessere Lösung ist jedoch die Verwendung der Methode {{domxref("SVGImageElement.decode()")}}, um dieses Problem zu lösen. Sie bietet eine Möglichkeit, ein Bild asynchron zu dekodieren und es erst in das DOM einzufügen, wenn es vollständig heruntergeladen und dekodiert ist, wodurch das oben erwähnte Problem des leeren Bildes vermieden wird. Dies ist besonders nützlich, wenn Sie ein bestehendes Bild dynamisch gegen ein neues austauschen und verhindert auch, dass nicht zusammenhängende Darstellungen außerhalb dieses Codes blockiert werden, während das Bild dekodiert wird.

Die Verwendung von `img.decoding = "async"` kann verhindern, dass anderer Inhalt zurückgehalten wird, falls die Dekodierungszeit lang ist:

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

- Die {{domxref("SVGImageElement.decode()")}}-Methode
- Das SVG-{{SVGElement("image")}}-Element {{SVGAttr("decoding")}}-Attribut.
