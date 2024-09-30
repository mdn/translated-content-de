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
  - : Ein ganzzahliger Wert, der die neue [`outerWidth`](/de/docs/Web/API/Window/outerWidth) in Pixeln darstellt (einschließlich Scrollbalken, Titelleisten etc.).
- `height`
  - : Ein ganzzahliger Wert, der die neue [`outerHeight`](/de/docs/Web/API/Window/outerHeight) in Pixeln darstellt (einschließlich Scrollbalken, Titelleisten etc.).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Diese Funktion ändert die Größe des Fensters so, dass es ein Viertel des verfügbaren Bildschirms einnimmt. Siehe die Eigenschaften [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth) und [`Screen.availHeight`](/de/docs/Web/API/Screen/availHeight).

```js
function quarter() {
  window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Hinweis: Es ist nicht möglich, die Größe eines Fensters oder Tabs zu ändern, das nicht durch **`window.open()`** erstellt wurde. Es ist auch nicht möglich, die Größe zu ändern, wenn das Fenster mehrere Tabs enthält.

> [!NOTE]
> Diese Funktion könnte das Fenster nicht synchron verkleinern.
> In einigen Umgebungen (wie Mobilgeräten) könnte das Fenster überhaupt nicht verkleinert werden. Sie können auf das [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignis hören, um zu sehen, ob/wann das Fenster verkleinert wurde.

## Siehe auch

- [`window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
