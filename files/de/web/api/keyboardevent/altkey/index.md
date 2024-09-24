---
title: "KeyboardEvent: altKey-Eigenschaft"
short-title: altKey
slug: Web/API/KeyboardEvent/altKey
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}

Die **`KeyboardEvent.altKey`** schreibgeschützte Eigenschaft ist ein boolean-Wert, der angibt, ob die <kbd>alt</kbd>-Taste (auf macOS <kbd>Option</kbd> oder <kbd>⌥</kbd>) gedrückt war (`true`) oder nicht (`false`), als das Ereignis auftrat.

## Wert

Ein boolean-Wert.

## Beispiele

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>altKey example</title>

    <script>
      function showChar(e) {
        alert(
          "Key KeyDown: " +
            String.fromCharCode(e.charCode) +
            "\n" +
            "charCode: " +
            e.charCode +
            "\n" +
            "ALT key KeyDown: " +
            e.altKey +
            "\n",
        );
      }
    </script>
  </head>

  <body onkeydown="showChar(event);">
    <p>
      Drücken Sie eine beliebige Zeichentaste, mit oder ohne gedrückte ALT-Taste.<br />
      Sie können auch die SHIFT-Taste zusammen mit der ALT-Taste verwenden.
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
