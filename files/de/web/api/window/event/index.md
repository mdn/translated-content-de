---
title: "Window: event-Eigenschaft"
short-title: event
slug: Web/API/Window/event
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die schreibgeschützte [`Window`](/de/docs/Web/API/Window)-Eigenschaft **`event`** gibt das [`Event`](/de/docs/Web/API/Event) zurück, das derzeit vom Code der Site verarbeitet wird. Außerhalb des Kontexts eines Ereignishandlers ist der Wert immer `undefined`.

Sie _sollten_ vermeiden, diese Eigenschaft in neuem Code zu verwenden, und stattdessen das [`Event`](/de/docs/Web/API/Event) verwenden, das in die Ereignishandlerfunktion übergeben wird. Diese Eigenschaft wird nicht universell unterstützt und führt selbst bei unterstützten Umgebungen zu potenzieller Fragilität Ihres Codes.

> [!NOTE]
> Diese Eigenschaft kann fragil sein, da es Situationen geben kann, in denen das zurückgegebene `Event` nicht der erwartete Wert ist. Außerdem ist `Window.event` nicht genau für Ereignisse, die innerhalb von [Shadow Trees](/de/docs/Glossary/shadow_tree) ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Event.srcElement`](/de/docs/Web/API/Event/srcElement)
