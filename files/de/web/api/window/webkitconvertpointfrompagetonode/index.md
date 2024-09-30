---
title: "Window: webkitConvertPointFromPageToNode() Methode"
short-title: webkitConvertPointFromPageToNode()
slug: Web/API/Window/webkitConvertPointFromPageToNode
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_header}}

Gegeben ein [`WebKitPoint`](/de/docs/Web/API/WebKitPoint), das im Koordinatensystem der Seite angegeben ist, gibt die
[`Window`](/de/docs/Web/API/Window)-Methode **`webkitConvertPointFromPageToNode()`**
ein `Point`-Objekt zurück, das dieselbe Position im Koordinatensystem des angegebenen DOM-[`Node`](/de/docs/Web/API/Node) angibt.

> [!WARNING]
> Bitte überprüfen Sie den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität), bevor Sie diese Methode verwenden,
> da sie nicht weitreichend unterstützt wird (ebenso wenig wie das [`WebKitPoint`](/de/docs/Web/API/WebKitPoint)-Objekt, das es verwendet).

## Syntax

```js-nolint
convertPointFromPageToNode(node, pagePoint)
```

### Parameter

- `node`
  - : Der [`Node`](/de/docs/Web/API/Node), in dessen Koordinatensystem der Punkt umgewandelt werden soll.
- `pagePoint`
  - : Ein [`WebKitPoint`](/de/docs/Web/API/WebKitPoint)-Objekt, das einen Punkt im Koordinatensystem der
    Seite angibt, der in das Koordinatensystem des Node umgewandelt werden soll.

### Rückgabewert

Ein `Point`-Objekt, das die angegebene Position im Koordinatensystem des Node beschreibt.

## Spezifikationen

Diese Methode wurde im [eingestellten Arbeitsentwurf vom 20. März 2009 des CSS 2D Transforms Module Level 3](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/) spezifiziert. Sie ist nicht im
aktuellen Arbeitsentwurf des CSS Transforms Module Level 1 enthalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.webkitConvertPointFromNodeToPage`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage)
- Mozilla-Implementierungsfehler: [Firefox bug 850808](https://bugzil.la/850808)
