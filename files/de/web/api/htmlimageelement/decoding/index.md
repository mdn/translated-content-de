---
title: "HTMLImageElement: decoding-Eigenschaft"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{APIRef}}

Die **`decoding`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle bietet dem Browser einen Hinweis darauf, wie das Bild dekodiert werden soll. Genauer gesagt, ob es warten soll, bis das Bild dekodiert ist, bevor andere Inhaltsaktualisierungen präsentiert werden.

## Wert

Ein String, der den Dekodierungshinweis darstellt. Mögliche Werte sind:

- `"sync"`
  - : Das Bild synchron dekodieren für eine atomare Präsentation mit anderen Inhalten.
- `"async"`
  - : Das Bild asynchron dekodieren und erlauben, dass anderer Inhalt gerendert wird, bevor dies abgeschlossen ist.
- `"auto"`
  - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert, aber verschiedene Browser haben unterschiedliche Standards:
    - Chromium standardmäßig auf `"sync"`.
    - Firefox standardmäßig auf `"async"`.
    - Safari standardmäßig auf `"sync"`, außer in einigen wenigen Umständen.

## Verwendungshinweise

Die `decoding`-Eigenschaft bietet dem Browser einen Hinweis darauf, ob die Bilddekodierung zusammen mit anderen Aufgaben in einem einzigen Schritt durchgeführt werden soll (`"sync"`), oder ob erlaubt werden soll, dass anderer Inhalt gerendert wird, bevor dies abgeschlossen ist (`"async"`). In der Praxis sind die Unterschiede zwischen den beiden Werten oft schwer zu erkennen, und wenn es Unterschiede gibt, gibt es oft einen besseren Weg.

Für Bilder, die in den DOM im sichtbaren Bereich eingefügt werden, kann `"async"` zu ungestylten Inhaltseffekten führen, während `"sync"` zu kleinen Mengen an [Ruckeln](/de/docs/Glossary/Jank) führen kann. Die Verwendung der [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)-Methode ist in der Regel eine bessere Möglichkeit, eine atomare Präsentation zu erreichen, ohne andere Inhalte zurückzuhalten.

Für Bilder, die außerhalb des sichtbaren Bereichs in den DOM eingefügt werden, dekodieren moderne Browser sie in der Regel, bevor sie in den Sichtbereich gescrollt werden, und es gibt keinen spürbaren Unterschied bei der Verwendung eines der Werte.

## Beispiele

Im nachstehenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, während das Bild heruntergeladen wird. Das Einstellen von `decoding` wird dies nicht verhindern.

```js
const img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
document.body.appendChild(img);
```

Das Einfügen eines Bildes nach dem Download kann die `decoding`-Eigenschaft relevanter machen:

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

Eine bessere Lösung ist jedoch die Verwendung der [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)-Methode, um dieses Problem zu lösen. Sie bietet eine Möglichkeit, ein Bild asynchron zu dekodieren und es erst dann in den DOM einzufügen, wenn es vollständig heruntergeladen und dekodiert ist, wodurch das oben erwähnte leere Bildproblem vermieden wird. Dies ist besonders nützlich, wenn Sie ein bestehendes Bild dynamisch durch ein neues ersetzen, und verhindert auch, dass unzusammenhängende Zeichenoperationen außerhalb dieses Codes blockiert werden, während das Bild dekodiert wird.

Die Verwendung von `img.decoding = "async"` kann verhindern, dass anderer Inhalt vom Anzeigen abgehalten wird, wenn die Dekodierungszeit lang ist:

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
- [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
