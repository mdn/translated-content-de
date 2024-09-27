---
title: "KeyboardEvent: altKey-Eigenschaft"
short-title: altKey
slug: Web/API/KeyboardEvent/altKey
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.altKey`** ist ein boolescher Wert, der angibt, ob die <kbd>alt</kbd>-Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) gedrückt wurde (`true`) oder nicht (`false`), als das Ereignis auftrat.

## Wert

Ein boolescher Wert.

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
      Press any character key, with or without holding down the ALT key.<br />
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
