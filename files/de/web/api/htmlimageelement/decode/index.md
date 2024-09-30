---
title: "HTMLImageElement: `decode()` Methode"
short-title: decode()
slug: Web/API/HTMLImageElement/decode
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`decode()`**-Methode des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald das Bild decodiert ist und es sicher ist, es dem DOM hinzuzufügen.

Dies kann verwendet werden, um das Laden des Bildes vor der Einbindung in ein Element im DOM (oder dem Hinzufügen zum DOM als neues Element) zu starten, sodass das Bild sofort gerendert werden kann, wenn es dem DOM hinzugefügt wird. Dies verhindert Verzögerungen beim Rendern des nächsten Frames, nachdem das Bild dem DOM hinzugefügt wurde, während das Bild geladen wird.

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
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), der anzeigt, dass ein Fehler beim Decodieren des Bildes aufgetreten ist.

## Anwendungshinweise

Ein potenzieller Anwendungsfall für `decode()`: Beim Laden sehr großer Bilder (zum Beispiel in einem Online-Fotoalbum) kann zunächst ein niedrig aufgelöstes Thumbnail-Bild angezeigt und dann dieses Bild durch das voll aufgelöste Bild ersetzt werden. Hierzu wird ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) instanziiert, dessen Quelle auf die URL des voll aufgelösten Bildes gesetzt und anschließend `decode()` verwendet, um ein Promise zu erhalten, das aufgelöst wird, sobald das voll aufgelöste Bild zur Verfügung steht. Zu diesem Zeitpunkt kann das niedrig aufgelöste Bild durch das nun verfügbare voll aufgelöste Bild ersetzt werden.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie die `decode()`-Methode verwendet wird, um zu steuern, wann ein Bild dem DOM hinzugefügt wird.

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
> Ohne eine Methode, die ein {{jsxref('Promise')}} zurückgibt, würden Sie das Bild in einem [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler dem DOM hinzufügen und den Fehler im [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignishandler behandeln.

### Vermeidung leerer Bilder

Im folgenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, da das Bild heruntergeladen wird:

```js
const img = new Image();
img.src = "img/logo.png";
document.body.appendChild(img);
```

Die Verwendung von `decode()` verzögert das Einfügen des Bildes in das DOM, bis es vollständig heruntergeladen und decodiert ist, wodurch das Problem des leeren Bildes vermieden wird:

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

Dies ist besonders nützlich, wenn Sie ein bestehendes Bild dynamisch durch ein neues ersetzen, und verhindert außerdem, dass nicht verwandte Darstellungen außerhalb dieses Codes blockiert werden, während das Bild decodiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Was macht das Bild-Decodierungsattribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
- Die [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding)-Eigenschaft
