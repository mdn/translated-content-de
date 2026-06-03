---
title: scripting.InjectionTarget
slug: Mozilla/Add-ons/WebExtensions/API/scripting/InjectionTarget
l10n:
  sourceCommit: ecdff1d43aa1606d354cafc6eadf4b0c33e16352
---

Dieses Objekt enthält Details, die das Injektionsziel für CSS und JavaScript angeben. Es wird in {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} verwendet.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Ob das Script oder CSS in alle Frames innerhalb des Tabs injiziert wird. Standardmäßig auf `false` gesetzt. Kann nicht `true` sein, wenn `frameIds` angegeben ist.

- `documentIds` {{optional_inline}}
  - : `array` von `string`. Die IDs der Dokumente, in die injiziert werden soll. Darf nicht angegeben werden, wenn `frameIds` gesetzt ist.

- `frameIds` {{optional_inline}}
  - : `array` von `number`. Array der IDs der Frames, in die injiziert werden soll. Darf nicht angegeben werden, wenn `documentIds` gesetzt ist.

- `tabId`
  - : `number`. Die ID des Tabs, in den injiziert werden soll.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-InjectionTarget) API von Chromium.
