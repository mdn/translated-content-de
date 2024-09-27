---
title: "InputEvent: getTargetRanges()-Methode"
short-title: getTargetRanges()
slug: Web/API/InputEvent/getTargetRanges
l10n:
  sourceCommit: 2a0b3558b384452e4d0798874e2c1244829bf03a
---

{{APIRef("UI Events")}}

Die **`getTargetRanges()`**-Methode der [`InputEvent`](/de/docs/Web/API/InputEvent)-Schnittstelle gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die bei einer Änderung am DOM betroffen sein würden, falls das `input`-Ereignis nicht abgebrochen wird.

Dies ermöglicht es Webanwendungen, das Verhalten der Texterstellung vor der Änderung des DOM-Baums durch den Browser zu überschreiben und bietet mehr Kontrolle über `input`-Ereignisse, um die Leistung zu verbessern.

Je nach Wert von `inputType` und dem aktuellen Bearbeitungshost variiert der erwartete Rückgabewert dieser Methode:

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
      <td>Alle verbleibend</td>
      <td><code>contenteditable</code></td>
      <td>
        ein Array von
        [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten in Verbindung mit dem Ereignis
      </td>
    </tr>
    <tr>
      <td>Alle verbleibend</td>
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

Ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten.

## Beispiele

### Feature-Erkennung

Die folgende Funktion gibt `true` zurück, wenn `beforeinput` und somit `getTargetRanges` unterstützt wird.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Grundlegende Nutzung

Das folgende Beispiel wählt ein `contenteditable`-Element aus und nutzt das [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)-Ereignis, um das Ergebnis von `getTargetRanges()` zu protokollieren.

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
