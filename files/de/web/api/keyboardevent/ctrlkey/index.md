---
title: "KeyboardEvent: ctrlKey-Eigenschaft"
short-title: ctrlKey
slug: Web/API/KeyboardEvent/ctrlKey
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`KeyboardEvent.ctrlKey`**-Eigenschaft gibt einen booleschen Wert zurück, der angibt, ob die <kbd>Control</kbd>-Taste gedrückt wurde (`true`) oder nicht (`false`), als das Ereignis eintrat.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<html lang="en">
  <head>
    <title>ctrlKey example</title>
    <script>
      function showChar(e) {
        alert(`Key Pressed: ${e.key}\nCTRL key pressed: ${e.ctrlKey}\n`);
      }
    </script>
  </head>
  <body onkeypress="showChar(event);">
    <p>
      Press any character key, with or without holding down the CTRL key.<br />
      You can also use the SHIFT key together with the CTRL key.
    </p>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)
