---
title: "PointerEvent: pointerType-Eigenschaft"
short-title: pointerType
slug: Web/API/PointerEvent/pointerType
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`pointerType`** des
[`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces gibt den Gerätetyp an (Maus, Stift oder Touch),
der ein bestimmtes Zeigerereignis verursacht hat.

## Wert

Der Zeigertyp des Ereignisses. Die unterstützten Werte sind die folgenden Zeichenfolgen:

- `"mouse"`
  - : Das Ereignis wurde durch ein Mausgerät erzeugt.
- `"pen"`
  - : Das Ereignis wurde durch ein Stift- oder Stylusgerät erzeugt.
- `"touch"`
  - : Das Ereignis wurde durch einen Touch, zum Beispiel einen Finger, erzeugt.

Wenn der Gerätetyp vom Browser nicht erkannt werden kann, kann der Wert eine leere Zeichenfolge (`""`) sein. Wenn der Browser Zeigergerätetypen unterstützt, die nicht in der obigen Liste enthalten sind, sollte der Wert _vendor-prefixed_ sein, um Konflikte mit Namen für unterschiedliche Gerätetypen zu vermeiden.

## Beispiele

Dieses Beispiel zeigt, wie man den Wert der `pointerType`-Eigenschaft verwendet, um die entsprechende Verarbeitungsfunktion für den Zeigertyp aufzurufen.

```js
targetElement.addEventListener(
  "pointerdown",
  (event) => {
    // Call the appropriate pointer type handler
    switch (event.pointerType) {
      case "mouse":
        process_pointer_mouse(event);
        break;
      case "pen":
        process_pointer_pen(event);
        break;
      case "touch":
        process_pointer_touch(event);
        break;
      default:
        console.log(`pointerType ${event.pointerType} is not supported`);
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
