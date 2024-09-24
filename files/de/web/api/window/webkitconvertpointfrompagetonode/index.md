---
title: "Fenster: webkitConvertPointFromPageToNode()-Methode"
short-title: webkitConvertPointFromPageToNode()
slug: Web/API/Window/webkitConvertPointFromPageToNode
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_header}}

Gegeben ein {{domxref("WebKitPoint")}}, das im Koordinatensystem der Seite angegeben ist, gibt die
{{domxref("Window")}}-Methode **`webkitConvertPointFromPageToNode()`**
ein `Point`-Objekt zurück, das denselben Ort im Koordinatensystem des angegebenen DOM-{{domxref("Node")}} angibt.

> [!WARNING]
> Bitte überprüfen Sie den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität), bevor Sie diese Methode verwenden,
> da sie nicht weit verbreitet unterstützt wird (ebenso wenig wie das {{domxref("WebKitPoint")}}-Objekt, das sie verwendet).

## Syntax

```js-nolint
convertPointFromPageToNode(node, pagePoint)
```

### Parameter

- `node`
  - : Der {{domxref("Node")}}, in dessen Koordinatensystem der Punkt umgewandelt werden soll.
- `pagePoint`
  - : Ein {{domxref("WebKitPoint")}}-Objekt, das einen Punkt im Koordinatensystem der
    Seite angibt, der in das Koordinatensystem des Knotens umgewandelt werden soll.

### Rückgabewert

Ein `Point`-Objekt, das den angegebenen Ort im Koordinatensystem des Knotens beschreibt.

## Spezifikationen

Diese Methode wurde im [eingestellten Arbeitsentwurf vom 20. März 2009 des CSS 2D Transforms Module Level 3](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/) spezifiziert. Sie ist nicht im aktuellen Arbeitsentwurf des CSS Transforms Module Level 1 enthalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.webkitConvertPointFromNodeToPage")}}
- Mozilla Implementierungsfehler: [Firefox Fehler 850808](https://bugzil.la/850808)
