---
title: "KeyboardEvent: getModifierState()-Methode"
short-title: getModifierState()
slug: Web/API/KeyboardEvent/getModifierState
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die **`KeyboardEvent.getModifierState()`**-Methode gibt den aktuellen Zustand der angegebenen Modifikatortaste zurück: `true`, wenn der Modifikator aktiv ist (d.h., die Modifikatortaste gedrückt oder gesperrt ist), andernfalls `false`.

## Syntax

```js-nolint
getModifierState(key)
```

### Parameter

- `key`
  - : Ein Wert für die Modifikatortaste. Der Wert muss einer der {{domxref("KeyboardEvent.key")}}-Werte sein, die Modifikatortasten darstellen, oder der Zeichenkette `"Accel"` {{deprecated_inline}}. Dies ist case-sensitiv.

### Rückgabewert

Ein boolean.

## Modifikatortasten in Firefox

Wann gibt `getModifierState()` unter Firefox true zurück?

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (GTK)</th>
      <th scope="col">Mac</th>
      <th scope="col">Android 2.3</th>
      <th scope="col">Android 3.0 oder neuer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"Alt"</code></th>
      <td>Entweder <kbd>Alt</kbd>-Taste oder <kbd>AltGr</kbd>-Taste gedrückt</td>
      <td><kbd>Alt</kbd>-Taste gedrückt</td>
      <td><kbd>⌥ Option</kbd>-Taste gedrückt</td>
      <td colspan="2"><kbd>Alt</kbd>-Taste oder <kbd>Option</kbd>-Taste gedrückt</td>
    </tr>
    <tr>
      <th scope="row"><code>"AltGraph"</code></th>
      <td>
        <p>
          Sowohl <kbd>Alt</kbd>- als auch <kbd>Ctrl</kbd>-Tasten sind gedrückt, oder
          die <kbd>AltGr</kbd>-Taste ist gedrückt
        </p>
      </td>
      <td>
        <kbd>Level 3 Shift</kbd>-Taste (oder <kbd>Level 5 Shift</kbd>-Taste) gedrückt
      </td>
      <td><kbd>⌥ Option</kbd>-Taste gedrückt</td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"CapsLock"</code></th>
      <td colspan="3">Während die LED für <kbd>⇪ Caps Lock</kbd> eingeschaltet ist</td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>Während <kbd>CapsLock</kbd> gesperrt ist</td>
    </tr>
    <tr>
      <th scope="row"><code>"Control"</code></th>
      <td>Entweder <kbd>Ctrl</kbd>-Taste oder <kbd>AltGr</kbd>-Taste gedrückt</td>
      <td><kbd>Ctrl</kbd>-Taste gedrückt</td>
      <td><kbd>Control</kbd>-Taste gedrückt</td>
      <td><kbd>Menü</kbd>-Taste gedrückt.</td>
      <td>
        <kbd>Ctrl</kbd>-Taste, <kbd>Control</kbd>-Taste oder <kbd>Menü</kbd>-Taste
        gedrückt.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Fn"</code></th>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>
        <kbd>Funktion</kbd>-Taste ist gedrückt, aber wir wissen nicht, welche Taste den
        Modifikatorzustand aktiv macht. <kbd>Fn</kbd>-Taste auf der Mac-Tastatur macht dies nicht aktiv.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"FnLock"</code></th>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"Hyper"</code></th>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"Meta"</code></th>
      <td><kbd>⊞ Windows-Logo</kbd>-Taste gedrückt (ab Firefox 118)</td>
      <td><kbd>Meta</kbd>-Taste gedrückt</td>
      <td><kbd>⌘ Command</kbd>-Taste gedrückt</td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td><kbd>⊞ Windows-Logo</kbd>-Taste oder <kbd>Command</kbd>-Taste gedrückt</td>
    </tr>
    <tr>
      <th scope="row"><code>"NumLock"</code></th>
      <td colspan="2">Während die LED für <kbd>Num Lock</kbd> eingeschaltet ist</td>
      <td>Eine Taste auf dem Nummernblock gedrückt</td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>Während <kbd>NumLock</kbd> gesperrt ist</td>
    </tr>
    <tr>
      <th scope="row"><code>"OS"</code></th>
      <td><kbd>⊞ Windows-Logo</kbd>-Taste gedrückt (vor Firefox 118)</td>
      <td>
        <kbd>Super</kbd>- oder <kbd>Hyper</kbd>-Taste gedrückt (typischerweise zugeordnet
        zur <kbd>⊞ Windows-Logo</kbd>-Taste)
      </td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"ScrollLock"</code></th>
      <td>Während die LED für <kbd>Scroll Lock</kbd> eingeschaltet ist</td>
      <td>
        Während die LED für <kbd>Scroll Lock</kbd> eingeschaltet ist, aber typischerweise wird dies
        von der Plattform nicht unterstützt
      </td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>Während <kbd>ScrollLock</kbd> gesperrt ist</td>
    </tr>
    <tr>
      <th scope="row"><code>"Shift"</code></th>
      <td colspan="5"><kbd>⇧ Shift</kbd>-Taste gedrückt</td>
    </tr>
    <tr>
      <th scope="row"><code>"Super"</code></th>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"Symbol"</code></th>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"SymbolLock"</code></th>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
    </tr>
  </tbody>
</table>

- Auf den anderen Plattformen können "Alt", "Control" und "Shift" unterstützt werden.
- Alle Modifikatoren (außer `"FnLock"`, `"Hyper"`, `"Super"` und `"Symbol"`, die nach der Implementierung durch Firefox definiert wurden) werden immer für unzuverlässige Ereignisse auf Firefox unterstützt. Dies hängt nicht von der Plattform ab.

## Virtueller Modifikator `"Accel"`

> [!NOTE]
> Der virtuelle Modifikator `"Accel"` wurde in aktuellen Entwürfen der DOM3-Events-Spezifikation effektiv **veraltet**.

`getModifierState()` akzeptiert auch einen veralteten virtuellen Modifikator namens `"Accel"`. `event.getModifierState("Accel")` gibt `true` zurück, wenn mindestens eines von {{domxref("KeyboardEvent.ctrlKey")}} oder
{{domxref("KeyboardEvent.metaKey")}} `true` ist.

In alten Implementierungen und veralteten Spezifikationen wurde `true` zurückgegeben, wenn ein Modifikator, der die typische Modifikatortaste für die Verknüpfungstaste ist, gedrückt wird. Beispielsweise kann unter Windows das Drücken der <kbd>Ctrl</kbd>-Taste `true` zurückgeben. Auf dem Mac kann das Drücken der <kbd>⌘ Command</kbd>-Taste `true` zurückgeben. Beachten Sie, dass die Modifikatortaste, die `true` zurückgibt, von Plattformen, Browsern und Benutzereinstellungen abhängt. Beispielsweise können Firefox-Nutzer dies mit einer Voreinstellung, `"ui.key.accelKey"`, anpassen.

## Beispiele

```js
function handleKeyboardEvent(event) {
  // Ignorieren, wenn der folgende Modifikator aktiv ist.
  if (
    event.getModifierState("Fn") ||
    event.getModifierState("Hyper") ||
    event.getModifierState("OS") ||
    event.getModifierState("Super") ||
    event.getModifierState("Win") /* Hack für IE */
  ) {
    return;
  }

  // Ebenfalls ignorieren, wenn zwei oder mehr Modifikatoren außer Shift aktiv sind.
  if (
    event.getModifierState("Control") +
      event.getModifierState("Alt") +
      event.getModifierState("Meta") >
    1
  ) {
    return;
  }

  // Verknüpfungstaste mit Standardmodifikator behandeln
  if (event.getModifierState("Accel")) {
    switch (event.key.toLowerCase()) {
      case "c":
        if (event.getModifierState("Shift")) {
          // Behandle Accel + Shift + C
          event.preventDefault(); // verbrauche das Tastenereignis
        }
        break;
      case "k":
        if (!event.getModifierState("Shift")) {
          // Behandle Accel + K
          event.preventDefault(); // verbrauche das Tastenereignis
        }
        break;
    }
    return;
  }

  // Etwas anderes für Pfeiltasten tun, wenn ScrollLock gesperrt ist.
  if (
    (event.getModifierState("ScrollLock") ||
      event.getModifierState("Scroll")) /* Hack für IE */ &&
    !event.getModifierState("Control") &&
    !event.getModifierState("Alt") &&
    !event.getModifierState("Meta")
  ) {
    switch (event.key) {
      case "ArrowDown":
      case "Down": // Hack für IE und alten Firefox
        event.preventDefault(); // verbrauche das Tastenereignis
        break;
      case "ArrowLeft":
      case "Left": // Hack für IE und alten Firefox
        // Etwas anderes tun, wenn ScrollLock gesperrt ist.
        event.preventDefault(); // verbrauche das Tastenereignis
        break;
      case "ArrowRight":
      case "Right": // Hack für IE und alten Firefox
        // Etwas anderes tun, wenn ScrollLock gesperrt ist.
        event.preventDefault(); // verbrauche das Tastenereignis
        break;
      case "ArrowUp":
      case "Up": // Hack für IE und alten Firefox
        // Etwas anderes tun, wenn ScrollLock gesperrt ist.
        event.preventDefault(); // verbrauche das Tastenereignis
        break;
    }
  }
}
```

> [!NOTE]
> Obwohl in diesem Beispiel `.getModifierState()` mit `"Alt"`, `"Control"`, `"Meta"` und `"Shift"` verwendet wird, könnte die Nutzung von `event.altKey`, `event.ctrlKey`, `event.metaKey`, und `event.shiftKey` bevorzugt sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("KeyboardEvent")}}, zu dem diese Methode gehört.
- {{domxref("MouseEvent.getModifierState")}}
