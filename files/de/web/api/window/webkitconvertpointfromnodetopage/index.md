---
title: "Window: webkitConvertPointFromNodeToPage() Methode"
short-title: webkitConvertPointFromNodeToPage()
slug: Web/API/Window/webkitConvertPointFromNodeToPage
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}{{Non-standard_header}}{{Deprecated_Header}}

Die [`Window`](/de/docs/Web/API/Window) Methode **`webkitConvertPointFromNodeToPage()`** gibt einen `Point` zurück, der dieselbe Position im Koordinatensystem der Seite beschreibt, basierend auf einem in einem bestimmten DOM-[`Node`](/de/docs/Web/API/Node) angegebenen [`WebKitPoint`](/de/docs/Web/API/WebKitPoint). Diese Methode ist nicht standardisiert und _sollte nicht verwendet werden_.

> [!WARNING]
> Bitte überprüfen Sie den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität), bevor Sie diese Methode verwenden, da sie nicht weit verbreitet unterstützt wird (ebenso wenig wie das [`WebKitPoint`](/de/docs/Web/API/WebKitPoint)-Objekt, das sie verwendet).

## Syntax

```js-nolint
webkitConvertPointFromNodeToPage(node, nodePoint)
```

### Parameter

- `node`
  - : Der [`Node`](/de/docs/Web/API/Node) in dessen Koordinatensystem der durch `nodePoint` angegebene `Point` beschrieben wird.
- `nodePoint`
  - : Ein [`WebKitPoint`](/de/docs/Web/API/WebKitPoint)-Objekt, das einen Punkt im Koordinatensystem von `node` beschreibt; dieser Punkt wird in das Koordinatensystem der Seite umgewandelt.

### Rückgabewert

Ein [`WebKitPoint`](/de/docs/Web/API/WebKitPoint)-Objekt, das einen Punkt im Koordinatensystem der Seite angibt.

## Spezifikationen

Diese Methode wurde im [veralteten Arbeitsentwurf vom 20. März 2009 des CSS 2D Transforms Module Level 3](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/) spezifiziert. Sie ist nicht im aktuellen Arbeitsentwurf des CSS Transforms Module Level 1 enthalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.webkitConvertPointFromPageToNode`](/de/docs/Web/API/Window/webkitConvertPointFromPageToNode)
- Mozilla Implementierungs-Fehler: [Firefox Bug 850806](https://bugzil.la/850806)
