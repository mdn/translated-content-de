---
title: "UIEvent: which Eigenschaft"
short-title: which
slug: Web/API/UIEvent/which
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`UIEvent.which`**-Eigenschaft der [`UIEvent`](/de/docs/Web/API/UIEvent)-Schnittstelle gibt eine Zahl zurück, die angibt, welcher Knopf der Maus gedrückt wurde, oder den numerischen `keyCode` oder den Zeichen-Code (`charCode`) der Taste, die auf der Tastatur gedrückt wurde.

## Wert

### Wert für KeyboardEvent {{Non-standard_Inline}}

Für [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) enthält `event.which` den numerischen Code für eine bestimmte Taste, je nachdem, ob eine alphanumerische oder nicht-alphanumerische Taste gedrückt wurde. Bitte beachten Sie die veralteten [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode) und [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) für weitere Details.

> [!NOTE]
> Ziehen Sie [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) für neuen Code in Betracht.

### Wert für MouseEvent {{Non-standard_Inline}}

Für [`MouseEvent`](/de/docs/Web/API/MouseEvent) ist `event.which` eine Zahl, die einen bestimmten Knopf repräsentiert:

- `0`: Kein Knopf
- `1`: Linker Knopf
- `2`: Mittlerer Knopf (falls vorhanden)
- `3`: Rechter Knopf

Bei einer für linkshändige Nutzung konfigurierten Maus sind die Knopfaktionen vertauscht. In diesem Fall werden die Werte von rechts nach links gelesen.

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
