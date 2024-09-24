---
title: "DOMRectReadOnly: fromRect() statische Methode"
short-title: fromRect()
slug: Web/API/DOMRectReadOnly/fromRect_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Geometry Interfaces")}}

Die **`fromRect()`** statische Methode des Objekts {{domxref("DOMRectReadOnly")}} erstellt ein neues `DOMRectReadOnly`-Objekt mit einer gegebenen Position und Abmessungen.

## Syntax

```js-nolint
DOMRectReadOnly.fromRect()
DOMRectReadOnly.fromRect(rectangle)
```

### Parameter

- `rectangle` {{optional_inline}}

  - : Ein Objekt, das die Position und Abmessungen eines Rechtecks angibt. Alle Eigenschaften
    haben standardmäßig den Wert `0`. Die Eigenschaften sind:

    - `x`: Die Koordinate der linken Seite des Rechtecks.
    - `y`: Die Koordinate der oberen Seite des Rechtecks.
    - `width`: Die Breite des Rechtecks.
    - `height`: Die Höhe des Rechtecks.

### Rückgabewert

Eine Instanz von {{domxref("DOMRectReadOnly")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
