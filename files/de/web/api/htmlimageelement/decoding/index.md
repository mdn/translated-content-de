---
title: "HTMLImageElement: decoding-Eigenschaft"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{APIRef}}

Die **`decoding`**-Eigenschaft der {{domxref("HTMLImageElement")}}-Schnittstelle bietet dem Browser einen Hinweis darauf, wie das Bild dekodiert werden soll. Genauer gesagt, ob auf die Dekodierung des Bildes gewartet werden soll, bevor andere Inhaltsaktualisierungen präsentiert werden.

## Wert

Ein String, der den Dekodierungs-Hinweis darstellt. Mögliche Werte sind:

- `"sync"`
  - : Dekodieren Sie das Bild synchron für eine atomare Darstellung mit anderem Inhalt.
- `"async"`
  - : Dekodieren Sie das Bild asynchron und ermöglichen Sie, dass anderer Inhalt angezeigt wird, bevor dies abgeschlossen ist.
- `"auto"`
  - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert, jedoch haben verschiedene Browser unterschiedliche Standardeinstellungen:
    - Bei Chromium ist der Standardwert `"sync"`.
    - Firefox stellt standardmäßig auf `"async"`.
    - Safari verwendet standardmäßig `"sync"`, außer in wenigen Fällen.

## Verwendungshinweise

Die `decoding`-Eigenschaft gibt dem Browser einen Hinweis darauf, ob die Bilddekodierung zusammen mit anderen Aufgaben in einem Schritt durchgeführt werden soll (`"sync"`) oder ob anderer Inhalt angezeigt werden darf, bevor dies abgeschlossen ist (`"async"`). In der Praxis sind die Unterschiede zwischen den beiden Werten oft schwer wahrzunehmen und wo Unterschiede bestehen, gibt es oft einen besseren Weg.

Für Bilder, die im DOM innerhalb des sichtbaren Bereichs eingefügt werden, kann `"async"` zu ungestylten Inhaltsblitzen führen, während `"sync"` zu kleinen Mengen von [Jank](/de/docs/Glossary/Jank) führen kann. Die Verwendung der Methode {{domxref("HTMLImageElement.decode()")}} ist in der Regel ein besserer Weg, um eine atomare Darstellung zu erreichen, ohne anderen Inhalt aufzuhalten.

Für Bilder, die außerhalb des sichtbaren Bereichs ins DOM eingefügt werden, dekodieren moderne Browser diese normalerweise, bevor sie in den sichtbaren Bereich gescrollt werden, und es wird keinen wahrnehmbaren Unterschied geben, welcher Wert verwendet wird.

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
// Die Verwendung von `sync` kann sicherstellen, dass anderer Inhalt nur mit dem Bild aktualisiert wird
img.decoding = "sync";
document.body.appendChild(img);
const p = document.createElement("p");
p.textContent = "Bild ist vollständig geladen!";
document.body.appendChild(p);
```

Eine bessere Lösung besteht jedoch darin, die Methode {{domxref("HTMLImageElement.decode()")}} zu verwenden, um dieses Problem zu lösen. Sie bietet eine Möglichkeit, ein Bild asynchron zu dekodieren, das Einfügen in das DOM zu verzögern, bis es vollständig heruntergeladen und dekodiert ist, und so das oben erwähnte Problem des leeren Bildes zu vermeiden. Dies ist besonders nützlich, wenn Sie ein vorhandenes Bild dynamisch durch ein neues ersetzen und verhindert auch, dass nicht damit zusammenhängende Darstellungen außerhalb dieses Codes aufgehalten werden, während das Bild dekodiert wird.

Die Verwendung von `img.decoding = "async"` kann verhindern, dass andere Inhalte vom Anzeigen abgehalten werden, wenn die Dekodierungszeit lang ist:

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

- Die Methode {{domxref("HTMLImageElement.decode()")}}
- Das `decoding`-Attribut des {{htmlelement("img")}}-Elements
- [Was macht das Bilddekodierungsattribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
