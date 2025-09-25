---
title: "HTMLImageElement: decoding-Eigenschaft"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Die **`decoding`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle gibt dem Browser einen Hinweis darauf, wie das Bild decodiert werden soll. Genauer gesagt, ob es warten soll, bis das Bild decodiert ist, bevor andere Inhaltsaktualisierungen präsentiert werden, oder nicht.

## Wert

Ein String, der den Decodierhinweis darstellt. Mögliche Werte sind:

- `"sync"`
  - : Decodiert das Bild synchron für eine atomare Präsentation mit anderem Inhalt.
- `"async"`
  - : Decodiert das Bild asynchron und erlaubt anderen Inhalt gerendert zu werden, bevor dies abgeschlossen ist.
- `"auto"`
  - : Keine Präferenz für den Decodiermodus; der Browser entscheidet, was das Beste für den Benutzer ist. Dies ist der Standardwert, aber unterschiedliche Browser haben unterschiedliche Standards:
    - Chromium nutzt standardmäßig `"sync"`.
    - Firefox nutzt standardmäßig `"async"`.
    - Safari nutzt standardmäßig `"sync"`, außer in einer kleinen Anzahl von Umständen.

## Hinweise zur Verwendung

Die `decoding`-Eigenschaft gibt dem Browser einen Hinweis darauf, ob die Bilddecodierung zusammen mit anderen Aufgaben in einem einzigen Schritt (`"sync"`) ausgeführt oder ob anderer Inhalt gerendert werden darf, bevor dies abgeschlossen ist (`"async"`). In der Praxis sind die Unterschiede zwischen den beiden Werten oft schwer wahrzunehmen und, wo es Unterschiede gibt, gibt es oft einen besseren Weg.

Bei Bildern, die im DOM innerhalb des Viewports eingefügt werden, kann `"async"` zu ungestylten Inhaltseffekten führen, während `"sync"` zu kleinen Mengen von {{Glossary("Jank", "Jitter")}} führen kann. Die Nutzung der [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)-Methode ist in der Regel ein besserer Weg, um eine atomare Präsentation zu erreichen, ohne anderen Inhalt zu verzögern.

Bei Bildern, die im DOM außerhalb des Viewports eingefügt werden, decodieren moderne Browser sie normalerweise, bevor sie in den Anzeigebereich gescrollt werden, und es wird keinen wahrnehmbaren Unterschied geben, unabhängig davon, welcher Wert verwendet wird.

## Beispiele

Im folgenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, während das Bild heruntergeladen wird. Das Setzen von `decoding` wird dies nicht verhindern.

```js
const img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
document.body.appendChild(img);
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

const img = new Image();
await loadImage("img/logo.png", img);
// Using `sync` can ensure other content is only updated with the image
img.decoding = "sync";
document.body.appendChild(img);
const p = document.createElement("p");
p.textContent = "Image is fully loaded!";
document.body.appendChild(p);
```

Eine bessere Lösung ist jedoch, die [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)-Methode zu verwenden, um dieses Problem zu lösen. Sie bietet eine Möglichkeit, ein Bild asynchron zu decodieren und es erst dann in das DOM einzufügen, wenn es vollständig heruntergeladen und decodiert ist, wodurch das oben erwähnte Problem mit dem leeren Bild vermieden wird. Dies ist besonders nützlich, wenn ein vorhandenes Bild dynamisch durch ein neues ersetzt wird und verhindert zudem, dass unzusammenhängende Renderaktivitäten außerhalb dieses Codes blockiert werden, während das Bild decodiert wird.

Die Verwendung von `img.decoding = "async"` kann verhindern, dass anderer Inhalt beim langen Decodiervorgang blockiert wird:

```js
const img = new Image();
img.decoding = "async";
img.src = "img/logo.png";
document.body.appendChild(img);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)-Methode
- Das `decoding`-Attribut des {{htmlelement("img")}}-Elements
- [Was macht das Bilddecodierung-Attribut wirklich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
