---
title: "Window: resizeTo()-Methode"
short-title: resizeTo()
slug: Web/API/Window/resizeTo
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Die **`Window.resizeTo()`**-Methode ändert die Größe des Fensters dynamisch.

## Syntax

```js-nolint
resizeTo(width, height)
```

### Parameter

- `width`
  - : Ein ganzzahliger Wert, der die neue {{domxref("window.outerWidth","outerWidth")}} in Pixeln darstellt (einschließlich Scrollleisten, Titelleisten usw.).
- `height`
  - : Ein ganzzahliger Wert, der die neue {{domxref("window.outerHeight","outerHeight")}} in Pixeln darstellt (einschließlich Scrollleisten, Titelleisten usw.).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Diese Funktion ändert die Größe des Fensters, sodass es ein Viertel des verfügbaren Bildschirms einnimmt. Siehe die Eigenschaften {{domxref("Screen.availWidth")}} und {{domxref("Screen.availHeight")}}.

```js
function quarter() {
  window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

Hinweis: Es ist nicht möglich, die Größe eines Fensters oder Tabs zu ändern, das nicht durch **`window.open()`** erstellt wurde. Es ist auch nicht möglich, die Größe zu ändern, wenn das Fenster mehrere Tabs hat.

> [!NOTE]
> Diese Funktion kann das Fenster möglicherweise nicht synchron in der Größe ändern.
> In einigen Umgebungen (wie auf mobilen Geräten) kann sie das Fenster überhaupt nicht in der Größe ändern. Sie können das {{domxref("Window/resize_event", "resize")}}-Ereignis überwachen, um zu sehen, ob/wann das Fenster in der Größe geändert wurde.

## Siehe auch

- {{domxref("window.resizeBy()")}}
