---
title: "HTMLImageElement: decode()-Methode"
short-title: decode()
slug: Web/API/HTMLImageElement/decode
l10n:
  sourceCommit: fefef505d2df84836d3a1312f31a724cdbe0186e
---

{{APIRef("HTML DOM")}}

Die **`decode()`**-Methode der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald das Bild decodiert wurde und gefahrlos in das DOM eingefügt werden kann.

Verwenden Sie `decode()`, um vor dem Einfügen eines Bildes in das DOM zu warten, bis es geladen und decodiert wurde. So kann es unmittelbar nach dem Einfügen dargestellt werden.
Der Aufruf von `decode()` startet das Laden des Bildes nicht: Das Laden beginnt, wenn `src` oder `srcset` gesetzt werden (oder bei Bildern mit `loading="lazy"`, wenn sich das Bild dem Viewport nähert).
Das zurückgegebene Promise wird erfüllt, sobald das Laden und Decodieren abgeschlossen sind.

## Syntax

```js-nolint
decode()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit `undefined` erfüllt wird, sobald die Bilddaten verwendet werden können.

### Ausnahmen

- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Beim Decodieren des Bildes ist ein Fehler aufgetreten. Dies kann passieren, wenn:
    - die Anfrage fehlgeschlagen ist
    - die Bildanfrage nach dem Aufruf von `decode()` geändert wurde (beispielsweise durch Ändern von `src`)
    - die Bilddaten beschädigt sind

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie Sie mit der `decode()`-Methode steuern können, wann ein Bild in das DOM eingefügt wird.

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
> Ohne eine Methode, die ein {{jsxref('Promise')}} zurückgibt, würden Sie das Bild in einem Event-Handler für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis in das DOM einfügen und den Fehler in einem Event-Handler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis behandeln.

### Leere Bilder vermeiden

Im folgenden Beispiel wird wahrscheinlich ein leeres Bild auf der Seite angezeigt, während das Bild heruntergeladen wird:

```js
const img = new Image();
img.src = "img/logo.png";
document.body.appendChild(img);
```

Mit `decode()` wird das Einfügen des Bildes in das DOM verzögert, bis es vollständig heruntergeladen und decodiert wurde. Dadurch wird das Problem des leeren Bildes vermieden:

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

Dies ist besonders nützlich, wenn Sie ein vorhandenes Bild dynamisch durch ein neues ersetzen. Außerdem verhindert es, dass andere, nicht mit diesem Code zusammenhängende Darstellungen verzögert werden, während das Bild decodiert wird. In einem Online-Fotoalbum können Sie beispielsweise zunächst ein Vorschaubild mit niedriger Auflösung anzeigen und es anschließend durch das Bild in voller Auflösung ersetzen. Dazu erstellen Sie ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), setzen dessen Quelle auf die URL des Bildes in voller Auflösung und rufen dann `decode()` auf. Das zurückgegebene Promise wird erfüllt, sobald das Bild in voller Auflösung verwendet werden kann. Anschließend können Sie das Vorschaubild durch das nun verfügbare Bild in voller Auflösung ersetzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Was bewirkt das Attribut zur Bilddecodierung eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) auf tunetheweb.com (2023)
- Die Eigenschaft [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding)
