---
title: "Fenster: resizeTo()-Methode"
short-title: resizeTo()
slug: Web/API/Window/resizeTo
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Die **`Window.resizeTo()`**-Methode passt die Größe des Fensters dynamisch an.

## Syntax

```js-nolint
resizeTo(width, height)
```

### Parameter

- `width`
  - : Ein ganzzahliger Wert, der die neue [`outerWidth`](/de/docs/Web/API/Window/outerWidth) in
    Pixeln darstellt (einschließlich Scrollleisten, Titelleisten usw.).
- `height`
  - : Ein ganzzahliger Wert, der die neue
    [`outerHeight`](/de/docs/Web/API/Window/outerHeight) in Pixeln darstellt (einschließlich Scrollleisten,
    Titelleisten usw.).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Diese Funktion ändert die Größe des Fensters so, dass es ein Viertel des verfügbaren
Bildschirms einnimmt. Siehe die Eigenschaften [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth) und [`Screen.availHeight`](/de/docs/Web/API/Screen/availHeight).

```js
function quarter() {
  window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Hinweis: Es ist nicht möglich, ein Fenster oder einen Tab zu vergrößern, der nicht durch
**`window.open()`** erstellt wurde. Es ist auch nicht möglich, die Größe zu ändern, wenn das
Fenster mehrere Tabs enthält.

> [!NOTE]
> Diese Funktion passt die Fenstergröße möglicherweise nicht synchron an.
> In einigen Umgebungen (wie mobile Geräte) wird die Fenstergröße möglicherweise überhaupt nicht geändert. Sie
> können das [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignis überwachen, um zu sehen,
> ob/wann die Fenstergröße angepasst wurde.

## Siehe auch

- [`window.resizeBy()`](/de/docs/Web/API/Window/resizeBy)
