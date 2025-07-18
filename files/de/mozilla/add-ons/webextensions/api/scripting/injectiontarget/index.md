---
title: scripting.InjectionTarget
slug: Mozilla/Add-ons/WebExtensions/API/scripting/InjectionTarget
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Dieses Objekt enthält Details, die das Injektionsziel für CSS und JavaScript spezifizieren. Es wird in {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} verwendet.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten diese Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Gibt an, ob das Skript oder CSS in alle Frames innerhalb des Tabs injiziert wird. Standardmäßig `false`. Kann nicht `true` sein, wenn `frameIds` angegeben ist.

- `frameIds` {{optional_inline}}
  - : `array` von `number`. Array mit den IDs der Frames, in die injiziert werden soll.

- `tabId`
  - : `number`. Die ID des Tabs, in den injiziert werden soll.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-InjectionTarget) API von Chromium.
