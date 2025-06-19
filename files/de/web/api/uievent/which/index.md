---
title: "UIEvent: which-Eigenschaft"
short-title: which
slug: Web/API/UIEvent/which
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die schreibgeschützte **`UIEvent.which`**-Eigenschaft des [`UIEvent`](/de/docs/Web/API/UIEvent)-Interfaces gibt eine Zahl zurück, die anzeigt, welche Taste auf der Maus gedrückt wurde, oder den numerischen `keyCode` oder den Zeichen-Code (`charCode`) der auf der Tastatur gedrückten Taste.

## Wert

### Wert für KeyboardEvent {{Non-standard_Inline}}

Für [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) enthält `event.which` den numerischen Code für eine bestimmte gedrückte Taste, je nachdem, ob eine alphanumerische oder nicht-alphanumerische Taste gedrückt wurde.
Bitte beachten Sie die veralteten [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode) und [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) für weitere Details.

> [!NOTE]
> Ziehen Sie [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) für neuen Code in Betracht.

### Wert für MouseEvent {{Non-standard_Inline}}

Für [`MouseEvent`](/de/docs/Web/API/MouseEvent) ist `event.which` eine Zahl, die eine bestimmte Taste repräsentiert:

- `0`: Keine Taste
- `1`: Linke Taste
- `2`: Mittlere Taste (falls vorhanden)
- `3`: Rechte Taste

Bei einer für Linkshänder konfigurierten Maus sind die Tastenaktionen umgekehrt.
In diesem Fall werden die Werte von rechts nach links gelesen.

> [!NOTE]
> Ziehen Sie [`MouseEvent.button`](/de/docs/Web/API/MouseEvent/button) für neuen Code in Betracht.

## Beispiele

```html
<p>Please press any key.</p>
```

```js
function showKeyPress(evt) {
  console.log(
    `onkeypress handler:\n` +
      `keyCode property: ${evt.keyCode}\n` +
      `which property: ${evt.which}\n` +
      `charCode property: ${evt.charCode}\n` +
      `Character Key Pressed: ${String.fromCharCode(evt.charCode)}\n`,
  );
}

function keyDown(evt) {
  console.log(
    `onkeydown handler:\n` +
      `keyCode property: ${evt.keyCode}\n` +
      `which property: ${evt.which}\n`,
  );
}

document.addEventListener("keypress", showKeyPress);
document.addEventListener("keydown", keyDown);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
