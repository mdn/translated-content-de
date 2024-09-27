---
title: scripting.InjectionTarget
slug: Mozilla/Add-ons/WebExtensions/API/scripting/InjectionTarget
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieses Objekt enthält Details, die das Injektionsziel für CSS und JavaScript angeben. Es wird in {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} verwendet.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `allFrames` {{optional_inline}}

  - : `boolean`. Gibt an, ob das Script oder CSS in alle Frames innerhalb des Tabs injiziert wird. Standardmäßig `false`. Kann nicht `true` sein, wenn `frameIds` angegeben ist.

- `frameIds` {{optional_inline}}

  - : `array` von `number`. Array der IDs der Frames, in die injiziert werden soll.

- `tabId`
  - : `number`. Die ID des Tabs, in den injiziert werden soll.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-InjectionTarget) API von Chromium.
