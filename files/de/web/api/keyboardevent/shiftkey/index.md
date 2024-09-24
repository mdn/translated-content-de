---
title: "KeyboardEvent: shiftKey-Eigenschaft"
short-title: shiftKey
slug: Web/API/KeyboardEvent/shiftKey
l10n:
  sourceCommit: d4aeaf3f146c31c61abd34dd3d048505e5ab0257
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.shiftKey`** ist ein Boolean-Wert, der anzeigt, ob die <kbd>Shift</kbd>-Taste gedrückt wurde (`true`) oder nicht (`false`), als das Ereignis auftrat.

Das Drücken der Shift-Taste kann auch das {{domxref("KeyboardEvent/key", "key")}} des Ereignisses ändern. Zum Beispiel erzeugt das Drücken von <kbd>B</kbd> `key: "b"`, während das gleichzeitige Drücken von <kbd>Shift</kbd> `key: "B"` erzeugt.

## Wert

Ein Boolean-Wert.

## Beispiele

```html
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>shiftKey example</title>

    <script>
      function showChar(e) {
        alert(
          "Key Pressed: " +
            String.fromCharCode(e.charCode) +
            "\n" +
            "charCode: " +
            e.charCode +
            "\n" +
            "SHIFT key pressed: " +
            e.shiftKey +
            "\n" +
            "ALT key pressed: " +
            e.altKey +
            "\n",
        );
      }
    </script>
  </head>

  <body onkeypress="showChar(event);">
    <p>
      Drücken Sie eine beliebige Zeichentaste, mit oder ohne Halten der SHIFT-Taste.<br />
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
