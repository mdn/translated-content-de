---
title: "Window: resizeBy() Methode"
short-title: resizeBy()
slug: Web/API/Window/resizeBy
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die **`Window.resizeBy()`** Methode ändert die Größe des aktuellen Fensters um einen angegebenen Wert.

## Syntax

```js-nolint
resizeBy(xDelta, yDelta)
```

### Parameter

- `xDelta`
  - : Die Anzahl der Pixel, um die das Fenster horizontal vergrößert werden soll.
- `yDelta`
  - : Die Anzahl der Pixel, um die das Fenster vertikal vergrößert werden soll.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

```js
// Shrink the window
window.resizeBy(-200, -200);
```

## Hinweise

Diese Methode ändert die Größe des Fensters relativ zu seiner aktuellen Größe. Um das Fenster in absoluten Begriffen zu ändern, verwenden Sie [`window.resizeTo()`](/de/docs/Web/API/Window/resizeTo).

### Erstellen und Ändern der Größe eines externen Fensters

Aus Sicherheitsgründen ist es in Firefox nicht mehr möglich, dass eine Website die Standardgröße eines Fensters in einem Browser ändern kann, wenn das Fenster nicht durch `window.open()` erstellt wurde oder mehr als einen Tab enthält. Siehe die Kompatibilitätstabelle für Details zur Änderung.

Selbst wenn Sie ein Fenster durch `window.open()` erstellen, **ist es standardmäßig nicht größenveränderbar.** Um das Fenster größenveränderbar zu machen, müssen Sie es mit der `"resizable"` Funktion öffnen.

```js
// Create resizable window
myExternalWindow = window.open(
  "https://example.com",
  "myWindowName",
  "resizable",
);

// Resize window to 500x500
myExternalWindow.resizeTo(500, 500);

// Make window relatively smaller to 400x400
myExternalWindow.resizeBy(-100, -100);
```

Das von Ihnen erstellte Fenster muss die Same Origin Policy respektieren. Wenn das von Ihnen geöffnete Fenster nicht in der gleichen Herkunft ist wie das aktuelle Fenster, können Sie die Größe nicht ändern oder auf Informationen zu diesem Fenster/Tab zugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese Funktion könnte das Fenster nicht synchron resize'nen.
> In einigen Umgebungen (wie mobilen Geräten) könnte das Fenster überhaupt nicht vergrößert werden. Sie können das [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis abhören, um zu sehen, ob/wann das Fenster vergrößert wurde.
