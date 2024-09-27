---
title: "CompositionEvent: data-Eigenschaft"
short-title: data
slug: Web/API/CompositionEvent/data
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("UI Events")}}

Die **`data`** schreibgeschützte Eigenschaft des [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)-Interfaces gibt die Zeichen zurück, die durch die Eingabemethode erzeugt wurden, die das Ereignis ausgelöst hat; ihre genaue Natur variiert je nach Art des Ereignisses, das das `CompositionEvent`-Objekt generiert hat.

## Wert

Ein String, der die Ereignisdaten darstellt:

- Bei `compositionstart`-Ereignissen handelt es sich um den aktuell ausgewählten Text, der durch den komponierten String ersetzt wird. Dieser Wert ändert sich nicht, selbst wenn der Inhalt den Auswahlbereich ändert; vielmehr gibt er den String an, der ausgewählt war, als die Komposition begann.
- Bei `compositionupdate` ist dies der String in seinem aktuellen Zustand, während die Bearbeitung fortschreitet.
- Bei `compositionend`-Ereignissen ist dies der String, wie er im Editor übernommen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)
