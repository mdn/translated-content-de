---
title: "HTMLImageElement: decoding Eigenschaft"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`decoding`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle gibt dem Browser einen Hinweis darauf, wie das Bild dekodiert werden soll. Genauer gesagt, ob es warten soll, bis das Bild dekodiert ist, bevor andere Inhaltsaktualisierungen präsentiert werden. Sie spiegelt das [`decoding`](/de/docs/Web/HTML/Reference/Elements/img#decoding)-Inhaltsattribut des `<img>`-Elements wider.

## Wert

Ein String, dessen Wert `sync`, `async` oder `auto` ist. Für ihre Bedeutungen siehe die HTML-Referenz des [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#decoding).

## Beispiele

Im unten stehenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, während das Bild heruntergeladen wird. Das Setzen von `decoding` wird dies nicht verhindern.

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

Eine bessere Lösung ist jedoch, die [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)-Methode zu verwenden, um dieses Problem zu lösen. Sie bietet eine Möglichkeit, ein Bild asynchron zu dekodieren und es erst dann in das DOM einzufügen, wenn es vollständig heruntergeladen und dekodiert ist, wodurch das oben erwähnte Problem mit dem leeren Bild vermieden wird. Dies ist besonders nützlich, wenn Sie ein vorhandenes Bild dynamisch durch ein neues ersetzen und verhindert auch, dass nicht verwandte Render-Prozesse, die außerhalb dieses Codes liegen, aufgehalten werden, während das Bild dekodiert wird.

Durch die Verwendung von `img.decoding = "async"` kann verhindert werden, dass andere Inhalte nicht angezeigt werden, wenn die Dekodierzeit lang ist:

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
- Das {{htmlelement("img")}}-Element `decoding`-Attribut
- [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
