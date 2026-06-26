---
title: scripting.InjectionTarget
slug: Mozilla/Add-ons/WebExtensions/API/scripting/InjectionTarget
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Dieses Objekt enthält Details, die das Ziel für die Injektion von CSS und JavaScript festlegen. Es wird verwendet in {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, und {{WebExtAPIRef("scripting.removeCSS()")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Gibt an, ob das Skript oder CSS in alle Frames innerhalb des Tabs injiziert wird. Standardmäßig ist dieser Wert `false`. Kann nicht `true` sein, wenn `frameIds` angegeben ist.

- `documentIds` {{optional_inline}}
  - : `array` von `string`. Die IDs der Dokumente, in die injiziert werden soll. Darf nicht angegeben werden, wenn `frameIds` gesetzt ist. Siehe den Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für weitere Informationen.

- `frameIds` {{optional_inline}}
  - : `array` von `number`. Array der IDs der Frames, in die injiziert werden soll. Darf nicht angegeben werden, wenn `documentIds` gesetzt ist.

- `tabId`
  - : `number`. Die ID des Tabs, in den injiziert werden soll.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-InjectionTarget) API von Chromium.
