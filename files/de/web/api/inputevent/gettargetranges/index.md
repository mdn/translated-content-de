---
title: "InputEvent: getTargetRanges() Methode"
short-title: getTargetRanges()
slug: Web/API/InputEvent/getTargetRanges
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("UI Events")}}

Die **`getTargetRanges()`**-Methode der [`InputEvent`](/de/docs/Web/API/InputEvent)-Schnittstelle gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die von einer Änderung des DOM betroffen sein werden, wenn das Eingabeereignis nicht abgebrochen wird.

Dies ermöglicht es Webanwendungen, das Textbearbeitungsverhalten zu überschreiben, bevor der Browser den DOM-Baum ändert, und bietet mehr Kontrolle über Eingabeereignisse zur Verbesserung der Leistung.

Abhängig vom Wert von `inputType` und dem aktuellen Bearbeitungshost variiert der erwartete Rückgabewert dieser Methode:

<table>
  <thead>
    <tr>
      <th>inputType</th>
      <th>Bearbeitungshost</th>
      <th>Antwort von <code>getTargetRanges()</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"historyUndo"</code> oder <code>"historyRedo"</code></td>
      <td>Beliebig</td>
      <td>leeres Array</td>
    </tr>
    <tr>
      <td>Alle verbleibenden</td>
      <td><code>contenteditable</code></td>
      <td>
        ein Array von
        [`StaticRange`](/de/docs/Web/API/StaticRange)
        Objekten, die mit dem Ereignis verbunden sind
      </td>
    </tr>
    <tr>
      <td>Alle verbleibenden</td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input"><code>input</code></a>
        oder <a href="/de/docs/Web/HTML/Reference/Elements/textarea"><code>textarea</code></a>
      </td>
      <td>
        ein leeres Array
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```js-nolint
getTargetRanges()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten.

## Beispiele

### Feature-Erkennung

Die folgende Funktion gibt `true` zurück, wenn `beforeinput`, und somit
`getTargetRanges`, unterstützt wird.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Grundlegende Verwendung

Das folgende Beispiel wählt ein `contenteditable` Element aus und verwendet das
[`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
Ereignis, um das Ergebnis von `getTargetRanges()` zu protokollieren.

```js
const editableElem = document.querySelector('[contenteditable="true"]');

editableElem.addEventListener("beforeinput", (e) => {
  const targetRanges = e.getTargetRanges();
  console.log(targetRanges);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
