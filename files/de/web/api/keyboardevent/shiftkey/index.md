---
title: "KeyboardEvent: shiftKey-Eigenschaft"
short-title: shiftKey
slug: Web/API/KeyboardEvent/shiftKey
l10n:
  sourceCommit: d4aeaf3f146c31c61abd34dd3d048505e5ab0257
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.shiftKey`** ist ein boolescher Wert, der angibt, ob die <kbd>Umschalt</kbd>-Taste gedrückt war (`true`) oder nicht (`false`), als das Ereignis auftrat.

Das Drücken der Umschalttaste kann auch den [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisses ändern. Zum Beispiel erzeugt das Drücken von <kbd>B</kbd> `key: "b"`, während das gleichzeitige Drücken von <kbd>Shift</kbd> `key: "B"` erzeugt.

## Wert

Ein boolescher Wert.

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
      Press any character key, with or without holding down the SHIFT key.<br />
      You can also use the SHIFT key together with the ALT key.
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
