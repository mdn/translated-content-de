---
title: "Window: event-Eigenschaft"
short-title: event
slug: Web/API/Window/event
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die schreibgeschützte {{domxref("Window")}}-Eigenschaft **`event`** gibt das {{domxref("Event")}} zurück, das aktuell vom Code der Website verarbeitet wird. Außerhalb des Kontexts eines Ereignishandlers ist der Wert immer `undefined`.

Sie _sollten_ vermeiden, diese Eigenschaft in neuem Code zu verwenden, und stattdessen das {{domxref("Event")}}, das der Ereignishandlerfunktion übergeben wird, nutzen. Diese Eigenschaft wird nicht universell unterstützt und kann auch bei unterstützenden Umgebungen potenzielle Schwachstellen in Ihren Code einführen.

> [!NOTE]
> Diese Eigenschaft kann fragil sein, da es Situationen geben kann, in denen das zurückgegebene `Event` nicht dem erwarteten Wert entspricht. Außerdem ist `Window.event` nicht genau für Ereignisse, die innerhalb von {{Glossary("shadow tree", "Schattenbäumen")}} ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Event.srcElement")}}
