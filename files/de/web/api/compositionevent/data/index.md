---
title: "CompositionEvent: data-Eigenschaft"
short-title: data
slug: Web/API/CompositionEvent/data
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("UI Events")}}

Die **`data`**-Eigenschaft des schreibgeschützten [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)-Interfaces gibt die Zeichen zurück, die von der Eingabemethode erzeugt wurden, die das Ereignis ausgelöst hat; ihre genaue Natur variiert je nach Art des Ereignisses, das das `CompositionEvent`-Objekt erzeugt hat.

## Wert

Ein String, der die Ereignisdaten repräsentiert:

- Für `compositionstart`-Ereignisse ist dies der aktuell ausgewählte Text, der durch den gerade komponierten String ersetzt wird. Dieser Wert ändert sich nicht, auch wenn Inhalte die Auswahl ändern; vielmehr zeigt er den String an, der ausgewählt war, als die Komposition begann.
- Für `compositionupdate` ist dies der String, wie er aktuell während des Bearbeitens aussieht.
- Für `compositionend`-Ereignisse ist dies der String, wie er dem Editor übergeben wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)
