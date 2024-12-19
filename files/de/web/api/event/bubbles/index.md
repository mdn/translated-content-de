---
title: "Event: bubbles-Eigenschaft"
short-title: bubbles
slug: Web/API/Event/bubbles
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`bubbles`**-Eigenschaft der [`Event`](/de/docs/Web/API/Event)-Schnittstelle gibt an, ob das Ereignis im DOM-Baum weitergeleitet wird oder nicht.

> [!NOTE]
> Siehe [Event bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) für weitere Informationen über das Weiterleiten von Ereignissen.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Ereignis im DOM-Baum weitergeleitet wird.

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

- [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), um die weitere Weiterleitung des aktuellen Ereignisses in den Capturing- und Bubbling-Phasen zu verhindern
- [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation), um keine weiteren Listener für dasselbe Ereignis auf derselben Ebene im DOM aufzurufen
- [`preventDefault()`](/de/docs/Web/API/Event/preventDefault), um die Weiterleitung fortzusetzen, aber dem Browser die Ausführung der Standardaktion zu verbieten, falls keine Listener das Ereignis behandeln
