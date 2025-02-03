---
title: "Window: webkitConvertPointFromPageToNode() Methode"
short-title: webkitConvertPointFromPageToNode()
slug: Web/API/Window/webkitConvertPointFromPageToNode
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_header}}

Angenommen, ein im Koordinatensystem der Seite festgelegter [`WebKitPoint`](/de/docs/Web/API/WebKitPoint) ist gegeben, dann gibt die [`Window`](/de/docs/Web/API/Window) Methode **`webkitConvertPointFromPageToNode()`** ein `Point`-Objekt zurück, das dieselbe Position im Koordinatensystem des angegebenen DOM-[`Node`](/de/docs/Web/API/Node) angibt.

> [!WARNING]
> Bitte überprüfen Sie den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität), bevor Sie diese Methode verwenden, da sie nicht weitgehend unterstützt wird (ebenso wenig wie das verwendete [`WebKitPoint`](/de/docs/Web/API/WebKitPoint)-Objekt).

## Syntax

```js-nolint
webkitConvertPointFromPageToNode(node, pagePoint)
```

### Parameter

- `node`
  - : Der [`Node`](/de/docs/Web/API/Node), in dessen Koordinatensystem der Punkt umgewandelt werden soll.
- `pagePoint`
  - : Ein [`WebKitPoint`](/de/docs/Web/API/WebKitPoint)-Objekt, das einen Punkt im Koordinatensystem der Seite angibt, der in das Koordinatensystem des Nodes umgewandelt werden soll.

### Rückgabewert

Ein `Point`-Objekt, das die angegebene Position im Koordinatensystem des Nodes beschreibt.

## Spezifikationen

Diese Methode wurde in [dem nicht mehr gültigen Working Draft von CSS 2D Transforms Module Level 3 vom 20. März 2009](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/) spezifiziert. Sie ist im aktuellen CSS Transforms Module Level 1 Working Draft nicht vorhanden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.webkitConvertPointFromNodeToPage`](/de/docs/Web/API/Window/webkitConvertPointFromNodeToPage)
- Mozilla Implementierungsfehler: [Firefox bug 850808](https://bugzil.la/850808)
