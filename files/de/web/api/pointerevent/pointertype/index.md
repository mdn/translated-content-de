---
title: "PointerEvent: pointerType-Eigenschaft"
short-title: pointerType
slug: Web/API/PointerEvent/pointerType
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{ APIRef("Pointer Events") }}

Die **`pointerType`**-Schreibgeschützte Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces zeigt den Gerätetyp (Maus, Stift oder Berührung) an, der ein bestimmtes Pointer-Ereignis verursacht hat.

## Wert

Der Zeigertyp des Ereignisses. Die unterstützten Werte sind die folgenden Zeichenfolgen:

- `"mouse"`
  - : Das Ereignis wurde durch ein Mausgerät generiert.
- `"pen"`
  - : Das Ereignis wurde durch ein Stift- oder Stylusgerät generiert.
- `"touch"`
  - : Das Ereignis wurde durch eine Berührung, wie zum Beispiel einen Finger, generiert.

Wenn der Gerätetyp vom Browser nicht erkannt werden kann, kann der Wert eine leere Zeichenfolge (`""`) sein. Wenn der Browser andere Zeigertypen als die oben aufgeführten unterstützt, sollte der Wert _herstellerspezifisch_ sein, um Konflikte mit Namen für verschiedene Gerätetypen zu vermeiden.

## Beispiele

Dieses Beispiel zeigt die Verwendung des Werts der `pointerType`-Eigenschaft, um die entsprechende Zeigertyp-Verarbeitungsfunktion aufzurufen.

```js
targetElement.addEventListener("pointerdown", (event) => {
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
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
