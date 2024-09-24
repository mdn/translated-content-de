---
title: "InputEvent: getTargetRanges() Methode"
short-title: getTargetRanges()
slug: Web/API/InputEvent/getTargetRanges
l10n:
  sourceCommit: 2a0b3558b384452e4d0798874e2c1244829bf03a
---

{{APIRef("UI Events")}}

Die **`getTargetRanges()`** Methode des {{domxref("InputEvent")}} Interfaces gibt ein Array von {{domxref("StaticRange")}} Objekten zurück, die von einer Änderung im DOM betroffen sein werden, wenn das Eingabeereignis nicht abgebrochen wird.

Dies ermöglicht Webanwendungen, das Verhalten der Textbearbeitung zu überschreiben, bevor der Browser den DOM-Baum ändert, und bietet mehr Kontrolle über Eingabeereignisse zur Leistungsverbesserung.

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
        {{domxref("StaticRange")}}
        Objekten, die mit dem Ereignis verknüpft sind
      </td>
    </tr>
    <tr>
      <td>Alle verbleibenden</td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input"><code>input</code></a>
        oder <a href="/de/docs/Web/HTML/Element/textarea"><code>textarea</code></a>
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

Ein Array von {{domxref("StaticRange")}} Objekten.

## Beispiele

### Funktionserkennung

Die folgende Funktion gibt true zurück, wenn `beforeinput` und somit
`getTargetRanges` unterstützt wird.

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
