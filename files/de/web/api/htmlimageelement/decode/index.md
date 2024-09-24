---
title: "HTMLImageElement: decode()-Methode"
short-title: decode()
slug: Web/API/HTMLImageElement/decode
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`decode()`**-Methode des {{domxref("HTMLImageElement")}}-Interfaces gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, sobald das Bild dekodiert ist und es sicher in den DOM eingefügt werden kann.

Dies kann verwendet werden, um das Laden des Bildes zu initiieren, bevor es an ein Element im DOM angehängt wird (oder es als neues Element im DOM hinzugefügt wird), sodass das Bild sofort beim Hinzufügen zum DOM gerendert werden kann. Dies verhindert wiederum, dass die Darstellung des nächsten Frames nach dem Hinzufügen des Bildes zum DOM eine Verzögerung verursacht, während das Bild geladen wird.

## Syntax

```js-nolint
decode()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit `undefined` erfüllt wird, sobald die Bilddaten zur Verwendung bereit sind.

### Ausnahmen

- `EncodingError`
  - : Ein {{domxref('DOMException')}}, das anzeigt, dass beim Dekodieren des Bildes ein Fehler aufgetreten ist.

## Anwendungshinweise

Ein möglicher Anwendungsfall für `decode()`: Beim Laden sehr großer Bilder (zum Beispiel in einem Online-Fotoalbum) können Sie zunächst ein Bild mit niedriger Auflösung präsentieren und dieses Bild dann durch das Bild in voller Auflösung ersetzen, indem Sie ein neues {{domxref("HTMLImageElement")}} instanziieren, dessen Quelle auf die URL des hochauflösenden Bildes gesetzt wird, und dann `decode()` verwenden, um ein Promise zu erhalten, das erfüllt wird, sobald das hochauflösende Bild einsatzbereit ist. Zu diesem Zeitpunkt können Sie dann das Bild mit niedriger Auflösung durch das hochauflösende Bild ersetzen, das jetzt verfügbar ist.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie Sie die `decode()`-Methode verwenden, um zu steuern, wann ein Bild dem DOM hinzugefügt wird.

```js
const img = new Image();
img.src = "nebula.jpg";
img
  .decode()
  .then(() => {
    document.body.appendChild(img);
  })
  .catch((encodingError) => {
    // Do something with the error.
  });
```

> [!NOTE]
> Ohne eine Methode, die ein {{jsxref('Promise')}} zurückgibt, würden Sie das Bild in einem {{domxref("Window/load_event", "load")}}-Ereignishandler dem DOM hinzufügen und den Fehler im Handler des {{domxref("HTMLElement/error_event", "error")}}-Ereignisses behandeln.

### Vermeidung leerer Bilder

Im folgenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, während das Bild heruntergeladen wird:

```js
const img = new Image();
img.src = "img/logo.png";
document.body.appendChild(img);
```

Die Verwendung von `decode()` verzögert das Einfügen des Bildes in den DOM, bis es vollständig heruntergeladen und dekodiert ist, wodurch das Problem leerer Bilder vermieden wird:

```js
async function getImage() {
  const img = new Image();
  img.src = "img/logo.png";
  await img.decode();
  document.body.appendChild(img);
  const p = document.createElement("p");
  p.textContent = "Image is fully loaded!";
  document.body.appendChild(p);
}
```

Dies ist besonders nützlich, wenn Sie ein vorhandenes Bild dynamisch durch ein neues ersetzen, und verhindert auch, dass nicht verwandte Renderprozesse außerhalb dieses Codes blockiert werden, während das Bild dekodiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
- Die {{domxref("HTMLImageElement.decoding")}}-Eigenschaft
