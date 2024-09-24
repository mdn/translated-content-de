---
title: "UIEvent: which-Eigenschaft"
short-title: which
slug: Web/API/UIEvent/which
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`UIEvent.which`** Eigenschaft der {{domxref("UIEvent")}}-Schnittstelle ist schreibgeschützt und gibt eine Zahl zurück, die anzeigt, welche Taste auf der Maus gedrückt wurde, oder den numerischen `keyCode` oder den Zeichen-Code (`charCode`) der auf der Tastatur gedrückten Taste.

## Wert

### Wert für KeyboardEvent {{Non-standard_Inline}}

Für {{domxref("KeyboardEvent")}} enthält `event.which` den numerischen Code für eine bestimmte gedrückte Taste, abhängig davon, ob eine alphanumerische oder nicht-alphanumerische Taste gedrückt wurde.
Bitte beachten Sie die veralteten {{domxref("KeyboardEvent.charCode")}} und {{domxref("KeyboardEvent.keyCode")}} für weitere Details.

> [!NOTE]
> Ziehen Sie für neuen Code {{domxref("KeyboardEvent.key")}} oder {{domxref("KeyboardEvent.code")}} in Betracht.

### Wert für MouseEvent {{Non-standard_Inline}}

Für {{domxref("MouseEvent")}} ist `event.which` eine Zahl, die eine bestimmte Taste repräsentiert:

- `0`: Keine Taste
- `1`: Linke Taste
- `2`: Mittlere Taste (falls vorhanden)
- `3`: Rechte Taste

Bei einer für linkshändige Benutzung konfigurierten Maus sind die Tastenaktionen vertauscht.
In diesem Fall werden die Werte von rechts nach links gelesen.

> [!NOTE]
> Ziehen Sie für neuen Code {{domxref("MouseEvent.button")}} in Betracht.

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
    <p>Bitte drücken Sie eine beliebige Taste.</p>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("KeyboardEvent")}}
- {{domxref("MouseEvent")}}
