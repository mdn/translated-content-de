---
title: "Fenster: webkitConvertPointFromNodeToPage()-Methode"
short-title: webkitConvertPointFromNodeToPage()
slug: Web/API/Window/webkitConvertPointFromNodeToPage
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}{{Non-standard_header}}{{Deprecated_Header}}

Angenommen, ein {{domxref("WebKitPoint")}} wird in einem bestimmten DOM-{{domxref("Node")}}'s Koordinatensystem angegeben. Die **`webkitConvertPointFromNodeToPage()`**-Methode des {{domxref("Window")}} gibt einen `Point` zurück, der die gleiche Position im Koordinatensystem der Seite angibt. Diese Methode ist nicht standardisiert und _sollte nicht verwendet werden_.

> [!WARNING]
> Bitte überprüfen Sie den Abschnitt [Browserkompatibilität](#browserkompatibilität), bevor Sie diese Methode verwenden, da sie nicht weit unterstützt wird (ebenso wenig wie das {{domxref("WebKitPoint")}}-Objekt, das sie verwendet).

## Syntax

```js-nolint
webkitConvertPointFromNodeToPage(node, nodePoint)
```

### Parameter

- `node`
  - : Der {{domxref("Node")}}, in dessen Koordinatensystem der von `nodePoint` angegebene `Point` beschrieben wird.
- `nodePoint`
  - : Ein {{domxref("WebKitPoint")}}-Objekt, das einen Punkt im Koordinatensystem von `node` beschreibt; dieser Punkt wird in das Koordinatensystem der Seite konvertiert.

### Rückgabewert

Ein {{domxref("WebKitPoint")}}-Objekt, das einen Punkt im Koordinatensystem der Seite angibt.

## Spezifikationen

Diese Methode wurde im [veralteten Arbeitsentwurf des CSS 2D Transforms Module Level 3 vom 20. März 2009](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/) spezifiziert. Sie ist nicht im aktuellen Arbeitsentwurf des CSS Transforms Module Level 1 enthalten.

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.webkitConvertPointFromPageToNode")}}
- Mozilla Implementierungsfehler: [Firefox Bug 850806](https://bugzil.la/850806)
