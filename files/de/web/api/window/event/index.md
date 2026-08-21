---
title: "Window: event-Eigenschaft"
short-title: event
slug: Web/API/Window/event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

Die schreibgeschützte [`Window`](/de/docs/Web/API/Window)-Eigenschaft **`event`** gibt das [`Event`](/de/docs/Web/API/Event) zurück, das derzeit vom Code der Site verarbeitet wird. Außerhalb des Kontexts eines Ereignis-Handlers ist der Wert immer `undefined`.

Sie _sollten_ diese Eigenschaft in neuem Code vermeiden und stattdessen das [`Event`](/de/docs/Web/API/Event) verwenden, das in die Ereignis-Handler-Funktion übergeben wird. Diese Eigenschaft wird nicht universell unterstützt und selbst wenn sie unterstützt wird, kann sie potenzielle Instabilität in Ihrem Code einführen.

> [!NOTE]
> Diese Eigenschaft kann fragil sein, da es Situationen geben kann, in denen das zurückgegebene `Event` nicht der erwartete Wert ist. Darüber hinaus ist `Window.event` für innerhalb von {{Glossary("shadow_tree", "Shadow Trees")}} ausgelöste Ereignisse nicht genau.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Event.srcElement`](/de/docs/Web/API/Event/srcElement)
