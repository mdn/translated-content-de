---
title: "Event: bubbles-Eigenschaft"
short-title: bubbles
slug: Web/API/Event/bubbles
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`bubbles`** des [`Event`](/de/docs/Web/API/Event)-Interfaces gibt an, ob das Ereignis durch den DOM-Baum aufsteigt oder nicht.

> [!NOTE]
> Weitere Informationen zum Thema "Ereignisaufstieg" finden Sie unter [Event bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Wert

Ein boolescher Wert, der `true` ist, wenn das Ereignis durch den DOM-Baum aufsteigt.

## Beispiel

```js
function handleInput(e) {
  // Check whether the event bubbles passes the event along
  if (!e.bubbles) {
    passItOn(e);
  }

  // Already bubbling
  doOutput(e);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), um die weitere Ausbreitung des aktuellen Ereignisses in den Erfassungs- und Aufstiegsphasen zu verhindern
- [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation), um keine weiteren Listener für dasselbe Ereignis auf derselben Ebene im DOM aufzurufen
- [`preventDefault()`](/de/docs/Web/API/Event/preventDefault), um die Fortsetzung der Ausbreitung zu ermöglichen, aber dem Browser die Ausführung seiner Standardaktion zu verwehren, falls keine Listener das Ereignis bearbeiten
