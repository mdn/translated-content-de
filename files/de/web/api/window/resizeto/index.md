---
title: "Window: resizeTo() Methode"
short-title: resizeTo()
slug: Web/API/Window/resizeTo
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die **`Window.resizeTo()`**-Methode ändert die Größe des Fensters dynamisch.

## Syntax

```js-nolint
resizeTo(width, height)
```

### Parameter

- `width`
  - : Ein ganzzahliger Wert, der die neue [`outerWidth`](/de/docs/Web/API/Window/outerWidth) in Pixeln darstellt (einschließlich Scrollleisten, Titelbalken usw.).
- `height`
  - : Ein ganzzahliger Wert, der die neue [`outerHeight`](/de/docs/Web/API/Window/outerHeight) in Pixeln darstellt (einschließlich Scrollleisten, Titelbalken usw.).

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

Hinweis: Es ist nicht möglich, ein Fenster oder Tab zu ändern, das nicht durch **`window.open()`** erstellt wurde. Es ist auch nicht möglich, die Größe zu ändern, wenn das Fenster mehrere Tabs hat.

> [!NOTE]
> Diese Funktion könnte das Fenster nicht synchron neu dimensionieren.
> In manchen Umgebungen (wie Mobilgeräten) könnte das Fenster überhaupt nicht neu dimensioniert werden. Sie können das [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis beobachten, um festzustellen, ob/wann das Fenster neu dimensioniert wurde.

## Siehe auch

- [`window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
