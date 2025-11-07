---
title: "HTMLImageElement: decode() Methode"
short-title: decode()
slug: Web/API/HTMLImageElement/decode
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`decode()`** Methode des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald das Bild decodiert ist und sicher an das DOM angehängt werden kann.

Dies kann verwendet werden, um das Laden des Bildes zu initiieren, bevor es an ein Element im DOM angehängt wird (oder es als neues Element zum DOM hinzugefügt wird), sodass das Bild sofort beim Hinzufügen zum DOM gerendert werden kann. Dies verhindert, dass das Rendern des nächsten Frames nach dem Hinzufügen des Bildes zum DOM eine Verzögerung verursacht, während das Bild geladen wird.

## Syntax

```js-nolint
decode()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit `undefined` erfüllt wird, sobald die Bilddaten zur Verwendung bereit sind.

### Ausnahmen

- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein Fehler ist beim Decodieren des Bildes aufgetreten. Dies kann passieren, wenn:
    - Die Anfrage fehlgeschlagen ist
    - Die Bildanfrage nach dem Aufruf von `decode()` geändert wurde (zum Beispiel durch Ändern von `src`)
    - Die Bilddaten beschädigt sind

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel zeigt, wie Sie die `decode()` Methode verwenden, um zu steuern, wann ein Bild an das DOM angehängt wird.

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
> Ohne eine {{jsxref('Promise')}}-zurückgebende Methode würden Sie das Bild in einem [`load`](/de/docs/Web/API/Window/load_event) Ereignishandler zum DOM hinzufügen und den Fehler im [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignishandler behandeln.

### Vermeidung leerer Bilder

Im folgenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, während das Bild heruntergeladen wird:

```js
const img = new Image();
img.src = "img/logo.png";
document.body.appendChild(img);
```

Die Verwendung von `decode()` verzögert das Einfügen des Bildes in das DOM, bis es vollständig heruntergeladen und decodiert ist, und vermeidet so das Problem des leeren Bildes:

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

Dies ist besonders nützlich, wenn Sie dynamisch ein vorhandenes Bild gegen ein neues austauschen, und verhindert auch, dass nicht zusammenhängende Renderings außerhalb dieses Codes aufgehalten werden, während das Bild decodiert wird. Beispielsweise in einem Online-Fotoalbum können Sie zunächst ein Bild mit niedriger Auflösung anzeigen und dann dieses Bild durch das Bild mit voller Auflösung ersetzen, indem Sie ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) instanziieren, dessen Quelle auf die URL des Bildes mit voller Auflösung setzen und dann `decode()` verwenden, um ein `Promise` zu erhalten, das erfüllt wird, sobald das Bild mit voller Auflösung gebrauchsfertig ist. Zu diesem Zeitpunkt können Sie dann das Bild mit niedriger Auflösung durch das jetzt verfügbare Bild mit voller Auflösung ersetzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Was macht das Attribut image decoding eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
- Die [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) Eigenschaft
