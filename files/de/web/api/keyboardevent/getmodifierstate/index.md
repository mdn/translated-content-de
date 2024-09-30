---
title: "KeyboardEvent: getModifierState() Methode"
short-title: getModifierState()
slug: Web/API/KeyboardEvent/getModifierState
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die **`KeyboardEvent.getModifierState()`** Methode gibt den aktuellen Zustand der angegebenen Modifikatortaste zurück: `true`, wenn der Modifikator aktiv ist (d.h. die Modifikatortaste gedrückt oder gesperrt ist), andernfalls `false`.

## Syntax

```js-nolint
getModifierState(key)
```

### Parameter

- `key`
  - : Ein Wert für eine Modifikatortaste. Der Wert muss einer der [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) Werte sein, die Modifikatortasten darstellen, oder der String `"Accel"` {{deprecated_inline}}. Dies ist case-sensitiv.

### Rückgabewert

Ein boolescher Wert.

## Modifikator-Tasten in Firefox

Wann gibt `getModifierState()` in Firefox true zurück?

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (GTK)</th>
      <th scope="col">Mac</th>
      <th scope="col">Android 2.3</th>
      <th scope="col">Android 3.0 oder höher</th>
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
          Beide <kbd>Alt</kbd>- und <kbd>Ctrl</kbd>-Tasten sind gedrückt oder
          <kbd>AltGr</kbd>-Taste ist gedrückt
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
      <td colspan="3">Während LED für <kbd>⇪ Caps Lock</kbd> eingeschaltet</td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>Während <kbd>CapsLock</kbd> gesperrt ist</td>
    </tr>
    <tr>
      <th scope="row"><code>"Control"</code></th>
      <td>Entweder <kbd>Ctrl</kbd>-Taste oder <kbd>AltGr</kbd>-Taste gedrückt</td>
      <td><kbd>Ctrl</kbd>-Taste gedrückt</td>
      <td><kbd>control</kbd>-Taste gedrückt</td>
      <td><kbd>menu</kbd>-Taste gedrückt</td>
      <td>
        <kbd>Ctrl</kbd>-Taste, <kbd>control</kbd>-Taste oder <kbd>menu</kbd>-Taste
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
        <kbd>Function</kbd>-Taste ist gedrückt, aber es ist nicht sicher, welche Taste den Modifikatorstatus aktiviert. <kbd>Fn</kbd>-Taste auf Mac-Tastatur verursacht dies nicht.
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
      <td><kbd>⊞ Windows Logo</kbd>-Taste gedrückt (ab Firefox 118)</td>
      <td><kbd>Meta</kbd>-Taste gedrückt</td>
      <td><kbd>⌘ Command</kbd>-Taste gedrückt</td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td><kbd>⊞ Windows Logo</kbd>-Taste oder <kbd>command</kbd>-Taste gedrückt</td>
    </tr>
    <tr>
      <th scope="row"><code>"NumLock"</code></th>
      <td colspan="2">Während LED für <kbd>Num Lock</kbd> eingeschaltet</td>
      <td>Eine Taste auf dem Numpad gedrückt</td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>Während <kbd>NumLock</kbd> gesperrt ist</td>
    </tr>
    <tr>
      <th scope="row"><code>"OS"</code></th>
      <td><kbd>⊞ Windows Logo</kbd>-Taste gedrückt (vor Firefox 118)</td>
      <td>
        <kbd>Super</kbd>-Taste oder <kbd>Hyper</kbd>-Taste gedrückt (normalerweise der <kbd>⊞ Windows Logo</kbd>-Taste zugeordnet)
      </td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
      <td>❌ <em>Nicht unterstützt</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"ScrollLock"</code></th>
      <td>Während LED für <kbd>Scroll Lock</kbd> eingeschaltet</td>
      <td>
        Während LED für <kbd>Scroll Lock</kbd> eingeschaltet, aber normalerweise wird dies nicht von der Plattform unterstützt
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

- Auf den anderen Plattformen könnten "Alt", "Control" und "Shift" unterstützt werden.
- Alle Modifikatoren (außer `"FnLock"`, `"Hyper"`, `"Super"` und `"Symbol"`, die nach der Implementierung von Firefox definiert werden) werden immer für nicht vertrauenswürdige Ereignisse in Firefox unterstützt. Dies hängt nicht von der Plattform ab.

## `"Accel"` virtueller Modifikator

> [!NOTE]
> Der `"Accel"` virtuelle Modifikator wurde in aktuellen Entwürfen der DOM3 Events-Spezifikation effektiv **veraltet**.

`getModifierState()` akzeptiert auch einen veralteten virtuellen Modifikator namens `"Accel"`. `event.getModifierState("Accel")` gibt `true` zurück, wenn mindestens einer der [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) oder [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) `true` ist.

In alten Implementierungen und veralteten Spezifikationen gab es `true` zurück, wenn ein Modifikator, der die typische Modifikatortaste für die Shortcut-Taste ist, gedrückt wurde. Zum Beispiel kann es auf Windows `true` zurückgeben, wenn die <kbd>Ctrl</kbd>-Taste gedrückt wird. Auf dem Mac kann das Drücken der <kbd>⌘ Command</kbd>-Taste dazu führen, dass es `true` zurückgibt. Beachten Sie, dass welche Modifikatortaste es wahr zurückgibt, von Plattformen, Browsern und Benutzereinstellungen abhängt. Beispielsweise können Firefox-Benutzer dies mit einer Präferenz `"ui.key.accelKey"` anpassen.

## Beispiele

```js
function handleKeyboardEvent(event) {
  // Ignore if following modifier is active.
  if (
    event.getModifierState("Fn") ||
    event.getModifierState("Hyper") ||
    event.getModifierState("OS") ||
    event.getModifierState("Super") ||
    event.getModifierState("Win") /* hack for IE */
  ) {
    return;
  }

  // Also ignore if two or more modifiers except Shift are active.
  if (
    event.getModifierState("Control") +
      event.getModifierState("Alt") +
      event.getModifierState("Meta") >
    1
  ) {
    return;
  }

  // Handle shortcut key with standard modifier
  if (event.getModifierState("Accel")) {
    switch (event.key.toLowerCase()) {
      case "c":
        if (event.getModifierState("Shift")) {
          // Handle Accel + Shift + C
          event.preventDefault(); // consume the key event
        }
        break;
      case "k":
        if (!event.getModifierState("Shift")) {
          // Handle Accel + K
          event.preventDefault(); // consume the key event
        }
        break;
    }
    return;
  }

  // Do something different for arrow keys if ScrollLock is locked.
  if (
    (event.getModifierState("ScrollLock") ||
      event.getModifierState("Scroll")) /* hack for IE */ &&
    !event.getModifierState("Control") &&
    !event.getModifierState("Alt") &&
    !event.getModifierState("Meta")
  ) {
    switch (event.key) {
      case "ArrowDown":
      case "Down": // hack for IE and old Firefox
        event.preventDefault(); // consume the key event
        break;
      case "ArrowLeft":
      case "Left": // hack for IE and old Firefox
        // Do something different if ScrollLock is locked.
        event.preventDefault(); // consume the key event
        break;
      case "ArrowRight":
      case "Right": // hack for IE and old Firefox
        // Do something different if ScrollLock is locked.
        event.preventDefault(); // consume the key event
        break;
      case "ArrowUp":
      case "Up": // hack for IE and old Firefox
        // Do something different if ScrollLock is locked.
        event.preventDefault(); // consume the key event
        break;
    }
  }
}
```

> [!NOTE]
> Obwohl dieses Beispiel `.getModifierState()` mit `"Alt"`,
> `"Control"`, `"Meta"` und `"Shift"` verwendet, könnte es bevorzugter sein, `event.altKey`, `event.ctrlKey`, `event.metaKey` und `event.shiftKey` zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), dem diese Methode gehört.
- [`MouseEvent.getModifierState`](/de/docs/Web/API/MouseEvent/getModifierState)
