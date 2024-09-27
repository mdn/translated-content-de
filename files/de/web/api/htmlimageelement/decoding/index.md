---
title: "HTMLImageElement: decoding-Eigenschaft"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{APIRef}}

Die **`decoding`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt dem Browser einen Hinweis, wie das Bild dekodiert werden soll. Genauer gesagt, ob es vor der Darstellung anderer Inhaltsaktualisierungen auf die Dekodierung des Bildes warten soll oder nicht.

## Wert

Ein String, der den Dekodierungshinweis darstellt. Mögliche Werte sind:

- `"sync"`
  - : Dekodieren Sie das Bild synchron, um eine atomare Darstellung mit anderen Inhalten zu erreichen.
- `"async"`
  - : Dekodieren Sie das Bild asynchron und ermöglichen Sie, dass andere Inhalte gerendert werden, bevor dies abgeschlossen ist.
- `"auto"`
  - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was das Beste für den Benutzer ist. Dies ist der Standardwert, jedoch haben unterschiedliche Browser unterschiedliche Standardeinstellungen:
    - Chromium verwendet standardmäßig `"sync"`.
    - Firefox verwendet standardmäßig `"async"`.
    - Safari verwendet standardmäßig `"sync"`, außer in einer kleinen Anzahl von Fällen.

## Verwendungshinweise

Die `decoding`-Eigenschaft gibt dem Browser einen Hinweis darauf, ob die Bilddekodierung zusammen mit anderen Aufgaben in einem Schritt erfolgen soll (`"sync"`), oder ob andere Inhalte gerendert werden dürfen, bevor dies abgeschlossen ist (`"async"`). In der Praxis sind die Unterschiede zwischen den beiden Werten oft schwer wahrzunehmen und, wo es Unterschiede gibt, gibt es oft einen besseren Weg.

Für Bilder, die im DOM innerhalb des Sichtfelds eingefügt werden, kann `"async"` zu flackernden ungestylten Inhalten führen, während `"sync"` zu kleinen Mengen von [Jank](/de/docs/Glossary/Jank) führen kann. Die Verwendung der Methode [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode) ist in der Regel eine bessere Möglichkeit, eine atomare Darstellung zu erreichen, ohne andere Inhalte zu verzögern.

Für Bilder, die außerhalb des Sichtfelds im DOM eingefügt werden, dekodieren moderne Browser sie normalerweise, bevor sie in den Sichtbereich gescrollt werden, und es wird keinen bemerkbaren Unterschied geben, welcher Wert verwendet wird.

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

Eine bessere Lösung ist jedoch die Verwendung der Methode [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode), um dieses Problem zu lösen. Sie bietet die Möglichkeit, ein Bild asynchron zu dekodieren und dessen Einfügen in das DOM zu verzögern, bis es vollständig heruntergeladen und dekodiert ist, wodurch das oben erwähnte Problem mit dem leeren Bild vermieden wird. Dies ist besonders nützlich, wenn Sie ein vorhandenes Bild dynamisch durch ein neues austauschen und verhindert auch, dass unabhängige Zeichenvorgänge außerhalb dieses Codes verzögert werden, während das Bild dekodiert wird.

Die Verwendung von `img.decoding = "async"` kann verhindern, dass andere Inhalte in der Anzeige verzögert werden, wenn die Dekodierungszeit lang ist:

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

- Die Methode [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)
- Das {{htmlelement("img")}}-Element `decoding`-Attribut
- [Was macht das Bild-Dekodierungsattribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
