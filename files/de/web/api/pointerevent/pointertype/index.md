---
title: "PointerEvent: Eigenschaft pointerType"
short-title: pointerType
slug: Web/API/PointerEvent/pointerType
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`pointerType`** der
{{domxref("PointerEvent")}}-Schnittstelle gibt den Gerätetyp (Maus, Stift oder Berührung) an, der ein bestimmtes Zeigerereignis verursacht hat.

## Wert

Der Zeigertyp des Ereignisses. Die unterstützten Werte sind die folgenden Zeichenfolgen:

- `"mouse"`
  - : Das Ereignis wurde durch ein Mausgerät erzeugt.
- `"pen"`
  - : Das Ereignis wurde durch ein Stift- oder Stylusgerät erzeugt.
- `"touch"`
  - : Das Ereignis wurde durch eine Berührung, wie etwa einen Finger, erzeugt.

Wenn der Gerätetyp nicht vom Browser erkannt werden kann, kann der Wert eine leere Zeichenfolge (`""`) sein. Wenn der Browser Zeigegerätetypen unterstützt, die nicht in der obigen Liste aufgeführt sind, sollte der Wert mit einem _vendor-Präfix_ versehen werden, um Namenskonflikte für verschiedene Gerätetypen zu vermeiden.

## Beispiele

Dieses Beispiel zeigt, wie der Wert der Eigenschaft `pointerType` verwendet wird, um die entsprechende Verarbeitungsfunktion für den Zeigertyp aufzurufen.

```js
targetElement.addEventListener(
  "pointerdown",
  (event) => {
    // Rufen Sie den entsprechenden Zeigertyp-Handler auf
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
        console.log(`pointerType ${event.pointerType} wird nicht unterstützt`);
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
