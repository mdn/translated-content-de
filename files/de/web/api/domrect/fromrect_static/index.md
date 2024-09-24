---
title: "DOMRect: fromRect() statische Methode"
short-title: fromRect()
slug: Web/API/DOMRect/fromRect_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Geometry Interfaces")}}

Die statische Methode **`fromRect()`** des Objekts {{domxref("DOMRect")}} erstellt ein neues `DOMRect`-Objekt mit einem gegebenen Standort und Abmessungen.

## Syntax

```js-nolint
DOMRect.fromRect()
DOMRect.fromRect(rectangle)
```

### Parameter

- `rectangle` {{optional_inline}}

  - : Ein Objekt, das den Standort und die Abmessungen eines Rechtecks angibt. Alle Eigenschaften haben standardmäßig den Wert `0`. Die Eigenschaften sind:

    - `x`: Die Koordinate der linken Seite des Rechtecks.
    - `y`: Die Koordinate der oberen Seite des Rechtecks.
    - `width`: Die Breite des Rechtecks.
    - `height`: Die Höhe des Rechtecks.

### Rückgabewert

Eine Instanz von {{domxref("DOMRect")}}.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
