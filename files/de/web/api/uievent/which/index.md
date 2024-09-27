---
title: "UIEvent: which-Eigenschaft"
short-title: which
slug: Web/API/UIEvent/which
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die schreibgeschützte Eigenschaft **`UIEvent.which`** des [`UIEvent`](/de/docs/Web/API/UIEvent)-Interfaces gibt eine Zahl zurück, die angibt, welche Taste auf der Maus gedrückt wurde, oder den numerischen `keyCode` oder den Zeichencode (`charCode`) der auf der Tastatur gedrückten Taste.

## Wert

### Wert für KeyboardEvent {{Non-standard_Inline}}

Für [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) enthält `event.which` den numerischen Code für eine bestimmte gedrückte Taste, abhängig davon, ob es sich um eine alphanumerische oder nicht-alphanumerische Taste handelt.
Bitte beachten Sie die veralteten [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode) und [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) für weitere Details.

> [!NOTE]
> Überlegen Sie, [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) für neuen Code zu verwenden.

### Wert für MouseEvent {{Non-standard_Inline}}

Für [`MouseEvent`](/de/docs/Web/API/MouseEvent) ist `event.which` eine Zahl, die eine bestimmte Taste darstellt:

- `0`: Keine Taste
- `1`: Linke Taste
- `2`: Mittlere Taste (falls vorhanden)
- `3`: Rechte Taste

Für eine Maus, die für die linkshändige Verwendung konfiguriert ist, sind die Tastenaktionen umgekehrt.
In diesem Fall werden die Werte von rechts nach links gelesen.

> [!NOTE]
> Erwägen Sie, [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) für neuen Code zu verwenden.

## Beispiele

```html
<html lang="en">
  <head>
    <title>charCode/keyCode/which example</title>

    <script>
      function showKeyPress(evt) {
        alert(
          `onkeypress handler:\n` +
            `keyCode property: ${evt.keyCode}\n` +
            `which property: ${evt.which}\n` +
            `charCode property: ${evt.charCode}\n` +
            `Character Key Pressed: ${String.fromCharCode(evt.charCode)}\n`,
        );
      }

      function keyDown(evt) {
        alert(
          `onkeydown handler:\n` +
            `keyCode property: ${evt.keyCode}\n` +
            `which property: ${evt.which}\n`,
        );
      }
    </script>
  </head>

  <body onkeypress="showKeyPress(event);" onkeydown="keyDown(event);">
    <p>Please press any key.</p>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
