---
title: "KeyboardEvent: ctrlKey-Eigenschaft"
short-title: ctrlKey
slug: Web/API/KeyboardEvent/ctrlKey
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`KeyboardEvent.ctrlKey`**-Eigenschaft gibt einen booleschen Wert zurück, der angibt, ob die <kbd>Steuerung</kbd> (CTRL)-Taste beim Auftreten des Ereignisses gedrückt wurde (`true`) oder nicht (`false`).

## Wert

Ein boolescher Wert.

## Beispiele

```html
<html lang="en">
  <head>
    <title>ctrlKey-Beispiel</title>
    <script>
      function showChar(e) {
        alert(`Key Pressed: ${e.key}\nCTRL key pressed: ${e.ctrlKey}\n`);
      }
    </script>
  </head>
  <body onkeypress="showChar(event);">
    <p>
      Drücken Sie eine beliebige Zeichentaste, mit oder ohne die STRG-Taste zu halten.<br />
      Sie können auch die UMSCHALT-Taste zusammen mit der STRG-Taste verwenden.
    </p>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("KeyboardEvent") }}
