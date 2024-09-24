---
title: "Ereignis: Bubbles-Eigenschaft"
short-title: bubbles
slug: Web/API/Event/bubbles
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`bubbles`** schreibgeschützte Eigenschaft der {{domxref("Event")}}-Schnittstelle gibt an, ob das Ereignis durch den DOM-Baum nach oben übertragen wird oder nicht.

> [!NOTE]
> Weitere Informationen zu Event-Bubbling finden Sie unter [Event bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Wert

Ein boolescher Wert, der `true` ist, wenn das Ereignis durch den DOM-Baum nach oben übertragen wird.

## Beispiel

```js
function handleInput(e) {
  // Überprüfen, ob das Ereignis weitergeleitet wird
  if (!e.bubbles) {
    passItOn(e);
  }

  // Bereits in der Übertragung
  doOutput(e);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Event.stopPropagation", "stopPropagation()")}}, um die weitere Ausbreitung des aktuellen Ereignisses in den Erfassungs- und Übertragungsphasen zu verhindern
- {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}}, um zu verhindern, dass weitere Listener für dasselbe Ereignis auf derselben Ebene im DOM aufgerufen werden
- {{domxref("Event.preventDefault", "preventDefault()")}}, um die Weiterleitung fortzusetzen, aber zu verhindern, dass der Browser seine Standardaktion ausführt, falls keine Listener das Ereignis behandeln
