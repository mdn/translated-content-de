---
title: "HTMLImageElement: decode() Methode"
short-title: decode()
slug: Web/API/HTMLImageElement/decode
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`decode()`**-Methode des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald das Bild dekodiert ist und es sicher ist, es dem DOM hinzuzufügen.

Dies kann verwendet werden, um das Laden des Bildes zu initiieren, bevor es einem Element im DOM zugeordnet wird (oder als neues Element dem DOM hinzugefügt wird), sodass das Bild sofort beim Hinzufügen zum DOM gerendert werden kann. Dies verhindert, dass das Rendering des nächsten Frames nach dem Hinzufügen des Bildes zum DOM beim Laden des Bildes eine Verzögerung verursacht.

## Syntax

```js-nolint
decode()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit `undefined` erfüllt wird, sobald die Bilddaten bereit zur Verwendung sind.

### Ausnahmen

- `EncodingError`
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), der anzeigt, dass beim Decodieren des Bildes ein Fehler aufgetreten ist.

## Verwendungshinweise

Ein möglicher Anwendungsfall für `decode()`: Beim Laden sehr großer Bilder (zum Beispiel in einem Online-Fotoalbum) können Sie zunächst ein Bild in niedriger Auflösung anzeigen und dieses Bild dann durch das vollauflösende Bild ersetzen, indem Sie ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) instanziieren, dessen Quelle auf die URL des vollauflösenden Bildes setzen und dann `decode()` verwenden, um ein `Promise` zu erhalten, das aufgelöst wird, sobald das vollauflösende Bild bereit zur Verwendung ist. Zu diesem Zeitpunkt können Sie dann das Bild in niedriger Auflösung durch das jetzt verfügbare Vollauflösungsbild ersetzen.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie Sie die Methode `decode()` verwenden können, um zu steuern, wann ein Bild dem DOM hinzugefügt wird.

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
> Ohne eine Methode, die ein {{jsxref('Promise')}} zurückgibt, würden Sie das Bild in einem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handler dem DOM hinzufügen und den Fehler im [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis-Handler behandeln.

### Vermeidung leerer Bilder

Im untenstehenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, während das Bild heruntergeladen wird:

```js
const img = new Image();
img.src = "img/logo.png";
document.body.appendChild(img);
```

Die Verwendung von `decode()` verzögert das Einfügen des Bildes in das DOM, bis es vollständig heruntergeladen und dekodiert ist, wodurch das Problem der leeren Bilder vermieden wird:

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

Dies ist besonders nützlich, wenn Sie dynamisch ein vorhandenes Bild durch ein neues ersetzen und verhindert auch, dass unabhängige Renderings außerhalb dieses Codes durch das Decodieren des Bildes aufgehalten werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
- Die [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) Eigenschaft
