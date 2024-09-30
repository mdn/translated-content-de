---
title: "PointerEvent: pointerType-Eigenschaft"
short-title: pointerType
slug: Web/API/PointerEvent/pointerType
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`pointerType`** des
[`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces gibt den Gerätetyp (Maus, Stift oder Berührung) an,
der ein bestimmtes Zeigerereignis verursacht hat.

## Wert

Der Zeigertyp des Ereignisses. Die unterstützten Werte sind die folgenden Zeichenfolgen:

- `"mouse"`
  - : Das Ereignis wurde durch ein Mausgerät erzeugt.
- `"pen"`
  - : Das Ereignis wurde durch ein Stift- oder Stylusgerät erzeugt.
- `"touch"`
  - : Das Ereignis wurde durch eine Berührung, wie z.B. einen Finger, erzeugt.

Kann der Gerätetyp durch den Browser nicht erkannt werden, kann der Wert eine leere Zeichenfolge
(`""`) sein. Wenn der Browser Zeigereingabegerätetypen unterstützt, die nicht oben aufgeführt sind,
sollte der Wert _anbieterspezifisch_ sein, um Konflikte bei der Namensgebung für
verschiedene Gerätetypen zu vermeiden.

## Beispiele

Dieses Beispiel zeigt die Verwendung des Werts der `pointerType`-Eigenschaft, um die
entsprechende Verarbeitungsfunktion für den Zeigertyp aufzurufen.

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
