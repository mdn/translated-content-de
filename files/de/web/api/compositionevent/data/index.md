---
title: "CompositionEvent: data-Eigenschaft"
short-title: data
slug: Web/API/CompositionEvent/data
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`data`**-Eigenschaft des {{domxref("CompositionEvent")}}-Interfaces gibt die Zeichen zurück, die von der Eingabemethode generiert wurden, die das Ereignis ausgelöst hat; ihre genaue Natur variiert je nach dem Typ des Ereignisses, das das `CompositionEvent`-Objekt generiert hat.

## Wert

Ein String, der die Ereignisdaten repräsentiert:

- Für `compositionstart`-Ereignisse ist dies der aktuell ausgewählte Text, der durch den sich in der Komposition befindlichen String ersetzt wird. Dieser Wert ändert sich nicht, selbst wenn der Inhalt den Auswahlbereich verändert; vielmehr zeigt er den String an, der ausgewählt war, als die Komposition begann.
- Für `compositionupdate` ist dies der String, wie er aktuell beim Bearbeiten besteht.
- Für `compositionend`-Ereignisse ist dies der String, wie er im Editor festgeschrieben wurde.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("CompositionEvent")}}
