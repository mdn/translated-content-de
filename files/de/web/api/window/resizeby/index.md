---
title: "Window: resizeBy()-Methode"
short-title: resizeBy()
slug: Web/API/Window/resizeBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`Window.resizeBy()`**-Methode ändert die Größe des aktuellen Fensters um einen bestimmten Betrag.

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

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
// Fenster verkleinern
window.resizeBy(-200, -200);
```

## Hinweise

Diese Methode ändert die Größe des Fensters relativ zu seiner aktuellen Größe. Um die Fenstergröße in absoluten Zahlen zu ändern, verwenden Sie {{domxref("window.resizeTo()")}}.

### Erstellen und Größenänderung eines externen Fensters

Aus Sicherheitsgründen ist es in Firefox nicht mehr möglich, dass eine Website die Standardgröße eines Fensters in einem Browser ändert, wenn das Fenster nicht durch `window.open()` erstellt wurde oder mehr als ein Tab enthält. Details zur Änderung finden Sie in der Kompatibilitätstabelle.

Selbst wenn Sie ein Fenster mit `window.open()` erstellen, **ist es standardmäßig nicht anpassbar.** Um das Fenster anpassbar zu machen, müssen Sie es mit der `"resizable"`-Funktion öffnen.

```js
// Anpassbares Fenster erstellen
myExternalWindow = window.open(
  "https://example.com",
  "myWindowName",
  "resizable"
);

// Fenstergröße auf 500x500 ändern
myExternalWindow.resizeTo(500, 500);

// Fenster relativ verkleinern auf 400x400
myExternalWindow.resizeBy(-100, -100);
```

Das von Ihnen erstellte Fenster muss die Same-Origin-Richtlinie respektieren. Wenn das von Ihnen geöffnete Fenster nicht in der gleichen Herkunft wie das aktuelle Fenster ist, können Sie weder die Größe ändern noch auf Informationen in diesem Fenster/Tab zugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese Funktion könnte das Fenster nicht synchron vergrößern. In einigen Umgebungen (wie mobil) könnte es das Fenster überhaupt nicht vergrößern. Sie können das {{domxref("Window/resize_event", "resize")}}-Ereignis abhören, um zu sehen, ob/wann das Fenster vergrößert wurde.
