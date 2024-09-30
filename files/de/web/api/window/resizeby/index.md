---
title: "Window: resizeBy()-Methode"
short-title: resizeBy()
slug: Web/API/Window/resizeBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`Window.resizeBy()`**-Methode ändert die Größe des aktuellen Fensters um einen angegebenen Betrag.

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

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Shrink the window
window.resizeBy(-200, -200);
```

## Anmerkungen

Diese Methode ändert die Größe des Fensters relativ zu seiner aktuellen Größe. Um die Größe des Fensters in absoluten Werten zu ändern, verwenden Sie [`window.resizeTo()`](/de/docs/Web/API/Window/resizeTo).

### Erstellen und Ändern der Größe eines externen Fensters

Aus Sicherheitsgründen ist es in Firefox nicht mehr möglich, die Standardgröße eines Fensters im Browser zu ändern, wenn das Fenster nicht durch `window.open()` erstellt wurde oder mehr als einen Tab enthält. Siehe die Kompatibilitätstabelle für Details zur Änderung.

Selbst wenn Sie ein Fenster durch `window.open()` erstellen, **ist es standardmäßig nicht größenveränderbar.** Um das Fenster größenveränderbar zu machen, müssen Sie es mit der `"resizable"`-Funktion öffnen.

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

Das von Ihnen erstellte Fenster muss die Same-Origin-Policy respektieren. Wenn das von Ihnen geöffnete Fenster nicht im gleichen Ursprung wie das aktuelle Fenster ist, können Sie seine Größe nicht ändern oder auf Informationen in diesem Fenster/Tab zugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese Funktion könnte das Fenster nicht synchron verkleinern. 
> In einigen Umgebungen (wie mobilen Geräten) könnte das Fenster überhaupt nicht verkleinert werden. Sie können das [`resize`](/de/docs/Web/API/Window/resize_event)-Event abhören, um zu sehen, ob/wann das Fenster verkleinert wurde.
